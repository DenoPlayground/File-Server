export function logRequest(
    protocol : string,
    host : string,
    method : string,
    requestPath : string,
    extension : string
) {
    const protocolColor = protocol == 'https' ? 4 : 240;
    const date = new Date().toLocaleString();

    return `\x1b[48;5;${protocolColor}m\x1b[1m ${protocol.toUpperCase()} \x1b[0m ${date} \x1b[33m${host}\x1b[0m \x1b[36m${method.toUpperCase()} ${requestPath} (${extension})\x1b[0m`
}
