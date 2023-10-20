import { MIMETypesObject } from "./mime_types_object.d.ts";

/**
 * This function returns the correct MIME type based on the file extension. If the extension does not exist on the MIME
 * types object, the default MIME type gets returned.
 * 
 * @param mIMETypesObject The MIME types object from where to get the MIME types
 * @param extension The file extension to search for
 * @returns The MIME type for the extension or the default MIME type
 */
export function getMIMEType(
    mIMETypesObject : MIMETypesObject,
    extension : string
) : string {
    const MIMETypesMap = Object.entries(mIMETypesObject.types).reduce((
            map,
            [
                contentType,
                extensions
            ]
        ) => {
            extensions.forEach((extension) => map.set(
                extension,
                contentType
            ));
            return map;
        },
        new Map<string, string>(),
    );
    
    return MIMETypesMap.get(extension) ?? mIMETypesObject.default
}
