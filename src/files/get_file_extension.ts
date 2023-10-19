/**
 * This function takes in a path to a file and returns the file extension (without the `.`).
 * 
 * @param path The path to the file
 * @returns The file extension or undefined if no file extension was found
 */
export function getFileExtension(path : string) : string | undefined {
    return path.replace(/.+\.([^/.]+$)/, (_, extension) => extension);
}
