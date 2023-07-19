
import { getFileExtension } from "./get_file_extension.ts";
import { getMIMEType } from "./get_mime_type.ts";
import { pathDefaultFile } from "./path_default_file.ts";

export function FileServer(
    options : Deno.ServeOptions | Deno.ServeTlsOptions,
    rootDir : string,
    defaultFileName : string
) {
    Deno.serve(options, (request) => {
        
        const requestURLPath = new URL(request.url).pathname;
    
        try {
            return new Response(
                Deno.readFileSync(pathDefaultFile(
                    rootDir + requestURLPath,
                    defaultFileName
                )),
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
