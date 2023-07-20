import { FileServerOptions } from "../file_server_options.d.ts";
import { getFileExtension } from "../files/get_file_extension.ts";
import { pathDefaultFile } from "../files/path_default_file.ts";
import { getMIMEType } from "../mime_types/get_mime_type.ts";

export function requestHandler(request : Request, options? : FileServerOptions) {
        
    const requestURLPath = new URL(request.url).pathname;

    try {
        const path = pathDefaultFile(
            `${options?.directory?.rootDir || './html'}${requestURLPath}`,
            options?.directory?.defaultFileName || 'index.html'
        )
        
        return new Response(
            Deno.readFileSync(path),
            {
                headers: {
                    'Content-Type': getMIMEType(getFileExtension(path))
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
}
