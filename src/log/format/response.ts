/**
 * This function generates the response string consisting of path, code and latency with a color.
 * 
 * @param path The path to the file for the response
 * @param code The status code
 * @param latency The latency for the response
 * @returns The formatted response string
 */
export default function response(
    path : string,
    code : number,
    latency : number
) : string {
    let color = '0';

    if (code >= 200 && code <= 299) {
        color = '32'
    } else if (code >= 400 && code <= 599) {
        color = '31'
    }

    return `\x1b[${color}mReturned '${path}' with code ${code} in ${latency}ms\x1b[0m.`
}
