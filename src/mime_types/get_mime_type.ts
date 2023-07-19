import MIMETypesFile from './mime_types.json' assert { type: 'json' }

interface MIMEType {
    [key : string] : string
}

export function getMIMEType(extension : string) : string {
    const MIMETypes : MIMEType = MIMETypesFile.types
    return MIMETypes[extension] || MIMETypesFile.default
}
