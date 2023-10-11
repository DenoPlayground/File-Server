
import { Options } from "./options.d.ts";
import { handler } from "./request/handler.ts";

export default function fileServer(
    options? : Options
) {
    const rootDir = options?.rootDir || '.';
    const defaultFileName = options?.defaultFileName || 'index.html';
    const logging = options?.logging == undefined ? true : options.logging

    Deno.serve(
        {
            onListen: ({
                hostname,
                port
            }) => logging ? console.log(`Files serving for ${rootDir} on http://${hostname}:${port}/`) : {},
            ...(options?.serve || {}),
        }, (request) => handler(
            request,
            rootDir,
            defaultFileName,
            logging
        )
    )
}

export class FileServer {
    constructor(
        serve : (
            options: Deno.ServeOptions | Deno.ServeTlsOptions,
            handler: Deno.ServeHandler
        ) => Deno.Server,
        options? : Options
    ) {
        serve
    }

    serve() : Promise<void> {

    }
}
