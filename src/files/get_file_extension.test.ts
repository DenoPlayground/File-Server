import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts"
import { getFileExtension } from "./get_file_extension.ts"

Deno.test(
    'Get the file extension from a specific path.',
    async (test) => {
        await test.step({
            name: 'html',
            fn: () => {
                assertEquals(getFileExtension('path/to/file.html'), 'html')
            }
        })
        await test.step({
            name: 'css',
            fn: () => {
                assertEquals(getFileExtension('path/to/file.css'), 'css')
            }
        })
        await test.step({
            name: 'js',
            fn: () => {
                assertEquals(getFileExtension('path/to/file.js'), 'js')
            }
        })
        await test.step({
            name: 'txt',
            fn: () => {
                assertEquals(getFileExtension('path/to/file.txt'), 'txt')
            }
        })
    }
)
