export function generateReponseWithContentType(fileContent : Uint8Array | string, contentType : string) {
    return new Response(
        fileContent,
        {
            headers: {
                'Content-Type': contentType
            }
        }
    );
}
