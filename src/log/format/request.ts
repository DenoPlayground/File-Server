/**
 * This function generates the request string consisting of method and path with a color.
 * 
 * @param protocol The method
 * @param path The path
 * @returns The formatted request string
 */
export default function request(
    method : string,
    path : string
) : string {
    return `\x1b[36m${method.toUpperCase()} '${path}'\x1b[0m`
}
