export function logResponse(
    protocol : string,
    host : string,
    code : number
) {
    const protocolColor = protocol == 'https' ? 4 : 240;
    const returnColor = code == 200 ? 32 : 31;
    const date = new Date().toLocaleString();

    return `\x1b[48;5;${protocolColor}m\x1b[1m ${protocol.toUpperCase()} \x1b[0m ${date} \x1b[33m${host}\x1b[0m \x1b[${returnColor}mReturned ${code}\x1b[0m`
}
