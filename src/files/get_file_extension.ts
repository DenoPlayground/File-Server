/**
 * This function takes in a path to a file and returns the file extension (without the `.`).
 * 
 * @param path The path to the file
 * @returns The file extension or null if no file extension was found
 */
export function getFileExtension(path : string) : string | null {
    const matchFileExtension = /\.([^/.]+$)/;
    const fileExtension = path.match(matchFileExtension)
    
    if (fileExtension === null) {
        return null
    }

    return fileExtension[1]
}
