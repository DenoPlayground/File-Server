import MIMETypesFile from './mime_types.json' assert { type: 'json' }

export function getMIMEType(extension : string) : string {
    const MIMETypes : {[key : string] : string} = MIMETypesFile.types
    return MIMETypes[extension] || MIMETypesFile.default
}
