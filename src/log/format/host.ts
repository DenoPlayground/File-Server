/**
 * This function generates the host string, consisting of `<host>:<port>` with a color.
 * 
 * @param host The host name
 * @param port The port
 * @returns The formatted host name string
 */
export default function host(
    host : string,
    port : string
) : string {
    return `\x1b[33m${host}:${port}\x1b[0m`
}
