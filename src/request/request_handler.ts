import { DirectoryOptions } from "../directory_options.d.ts";
import { getFileExtension } from "../files/get_file_extension.ts";
import { pathDefaultFile } from "../files/path_default_file.ts";
import { getMIMEType } from "../mime_types/get_mime_type.ts";

export function requestHandler(request : Request, directory? : DirectoryOptions) {
        
    const requestURLPath = new URL(request.url).pathname;
    const rootDir = directory?.rootDir || './html';
    const defaultFileName = directory?.defaultFileName || 'index.html';

    try {
        const path = pathDefaultFile(
            `${rootDir}${requestURLPath}`,
            defaultFileName
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
