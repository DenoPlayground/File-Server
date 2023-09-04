/**
 * This function generates the date string, consisting of `<date> <time>` with a color.
 * 
 * @param protocol The date to format
 * @returns The formatted protocol scheme string
 */
export default function date(date : Date) : string {
    return `${date.toLocaleDateString(
        undefined,
        {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }
    )} ${date.toLocaleTimeString(
        undefined,
        {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            fractionalSecondDigits: 3
        }
    )}`
}
