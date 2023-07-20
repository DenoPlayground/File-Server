
import { DirectoryOptions } from "./directory_options.d.ts";
import { requestHandler } from "./request/request_handler.ts";

export default function fileServer(
    options? : Deno.ServeOptions | Deno.ServeTlsOptions,
    directory? : DirectoryOptions
) {
    Deno.serve(
        {
            onListen: ({
                hostname,
                port
            }) => console.log(`Files serving for ${directory?.rootDir || '.'} on http://${hostname}:${port}/`),
            ...(options || {}),
        }, (request) => requestHandler(
            request,
            directory
        )
    )
}
