/**
 * This function generates the protocol string in uppercase letters
 * with a background color.
 * 
 * @param protocol The protocol scheme to format
 * @returns The formatted protocol scheme string
 */
export default function protocol(protocol : string) : string {
    return `\x1b[44m\x1b[1m ${protocol.toUpperCase()} \x1b[0m`
}
