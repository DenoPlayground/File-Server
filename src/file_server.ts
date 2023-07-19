
import { getFileExtension } from "./files/get_file_extension.ts";
import { getMIMEType } from "./mime_types/get_mime_type.ts";
import { pathDefaultFile } from "./files/path_default_file.ts";

export default function fileServer(
    options : {
        serve? : Deno.ServeOptions | Deno.ServeTlsOptions,
        directory? : {
            rootDir? : string,
            defaultFileName? : string
        }
    },
) {
    Deno.serve(
        {
            onListen: ({
                hostname,
                port
            }) => console.log(`Files serving for ${options.directory?.rootDir || '.'} on http://${hostname}:${port}/`),
            ...(options.serve || {}),
        }, (request) => {
        
        const requestURLPath = new URL(request.url).pathname;

        try {
            const path = pathDefaultFile(
                `${options.directory?.rootDir || './html'}${requestURLPath}`,
                options.directory?.defaultFileName || 'index.html'
            )
            
            return new Response(
                Deno.readFileSync(path),
                {
                    headers: {
                        'Content-Type': getMIMEType(getFileExtension(requestURLPath))
                    }
                }
            );
        } catch (error) {
            if (error instanceof Deno.errors.NotFound) {
                return new Response(
                    '404: Not found!',
                    {
                        status: 404
                    }
                )
            } else {
                return new Response(error);
            }
        }
    })
}
