/**
 * This function takes in a path to a file and returns the file extension (without the `.`).
 * @param path The path to the file
 * @returns The file extension
 */
export function getFileExtension(path : string) : string {
    return path.replace(/.+\.([^/.]+$)/, (_, extension) => extension);
}
