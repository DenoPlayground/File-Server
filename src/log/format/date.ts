/**
 * This function generates the date string, consisting of `<date> <time>` with a color.
 * 
 * @param protocol The date to format
 * @returns The formatted protocol scheme string
 */
export default function date(date : Date) : string {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}
