
import { Options } from "./options.d.ts";
import { handler } from "./request/handler.ts";

export default function files(
    request: Request,
    options?: Options,
    fallback?: () => Promise<Response> | Response
) : Response | Promise<Response> {
    const {
        hostname,
        pathname
    } = new URL(request.url);

    return new Response()
}
