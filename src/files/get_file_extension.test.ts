import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts"
import { getFileExtension } from "./get_file_extension.ts"

Deno.test(
    'Get the file extension from a specific path.',
    async (test) => {
        await test.step({
            name: 'txt',
            fn: () => {
                assertEquals(getFileExtension('path/to/file.txt'), 'txt');
            }
        });
        await test.step({
            name: 'tar.gz (gz)',
            fn: () => {
                assertEquals(getFileExtension('path/to/file.tar.gz'), 'gz');
            }
        });
    }
)
