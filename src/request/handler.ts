import { getFileExtension } from "../files/get_file_extension.ts";
import { pathDefaultFile } from "../files/path_default_file.ts";
import { getMIMEType } from "../mime_types/get_mime_type.ts";
import { generateResponseWithContentType } from "../response/generate_response_with_content_type.ts";
import { logRequest } from "../log/log_request.ts";
import { logResponse } from "../log/log_response.ts";


export function handler(
    request : Request,
    rootDir : string,
    defaultFileName : string,
    logging : boolean
) {
        
    const requestURL = new URL(request.url);
    const path = pathDefaultFile(
        `${rootDir}${requestURL.pathname}`,
        defaultFileName
    )
    const fileExtension = getFileExtension(path)

    if (logging) {
        console.log(logRequest(
            requestURL.protocol.slice(0, -1),
            requestURL.host,
            request.method,
            requestURL.pathname,
            fileExtension
        ));
    }

    let fileContent : Uint8Array;
    try {
        fileContent = Deno.readFileSync(path);
        if (logging) {
            console.log(logResponse(
                requestURL.protocol.slice(0, -1),
                requestURL.host,
                200
            ));
        }
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            if (logging) {
                console.log(logResponse(
                    requestURL.protocol.slice(0, -1),
                    requestURL.host,
                    404
                ));
            }
            fileContent = new TextEncoder().encode('404: Not found!')
        } else {
            fileContent = new TextEncoder().encode(error)
        }
    }

    return generateResponseWithContentType(
        fileContent,
        getMIMEType(fileExtension)
    )
}
