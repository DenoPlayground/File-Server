import { format } from "./format/index.ts";

export function logRequest(
    protocol : string,
    date : Date,
    host : string,
    port : string,
    method : string,
    path : string
) {
    return `${format.protocol(protocol)} ${format.date(date)} ${format.host(host, port)} ${format.request(method, path)}`
}
