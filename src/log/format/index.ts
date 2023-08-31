import date from "./date.ts";
import host from "./host.ts";
import protocol from "./protocol.ts";
import request from "./request.ts";
import response from "./response.ts";

/**
 * This object provides formatting functions.
 */
export const format = {
    date,
    host,
    protocol,
    request,
    response
} as const
