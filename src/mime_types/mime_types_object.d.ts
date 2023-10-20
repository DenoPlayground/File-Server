/**
 * This interface represents a MIME types object
 * 
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
 */
export interface MIMETypesObject {
    /** Default MIME type */
    default : string,
    /** List of MIME types consisting of MIME type key and an array of file extensions */
    types : Record<string, string[]>
}
