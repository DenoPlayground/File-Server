import MIMETypesFile from './mime_types.json' assert { type: 'json' }

export function getMIMEType(extension : string) : string {
    const MIMETypesMap = Object.entries(MIMETypesFile.types).reduce((
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
    
    return MIMETypesMap.get(extension) ?? MIMETypesFile.default
}
