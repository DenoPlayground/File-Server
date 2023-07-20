
import { FileServerOptions } from "./file_server_options.d.ts";
import { requestHandler } from "./request/request_handler.ts";

export default function fileServer(
    options? : FileServerOptions,
) {
    Deno.serve(
        {
            onListen: ({
                hostname,
                port
            }) => console.log(`Files serving for ${options?.directory?.rootDir || '.'} on http://${hostname}:${port}/`),
            ...(options?.serve || {}),
        }, (request) => requestHandler(
            request,
            options
        )
    )
}
