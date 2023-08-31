import { format } from "./format/index.ts";

export function logResponse(
    protocol : string,
    date : Date,
    host : string,
    port : string,
    path : string,
    code : number,
    latency : number
) {
    return `${format.protocol(protocol)} ${format.date(date)} ${format.host(host, port)} ${format.response(path, code, latency)}`
}
