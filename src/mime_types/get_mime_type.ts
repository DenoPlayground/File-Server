import { MIMETypesObject } from "./mime_type_object.d.ts";

export function getMIMEType(mIMETypesObject : MIMETypesObject, extension : string) : string {
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
