import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts"
import { getFileExtension } from "./get_file_extension.ts"

Deno.test(
    'Get the file extension from a specific path.',
    async (test) => {
        await test.step({
            name: 'Simple path with extension: txt',
            fn: () => {
                assertEquals(
                    getFileExtension('path/to/file.txt'),
                    'txt'
                );
            }
        });
        await test.step({
            name: 'Simple path with extension: tar.gz (gz)',
            fn: () => {
                assertEquals(
                    getFileExtension('path/to/file.tar.gz'),
                    'gz'
                );
            }
        });
        await test.step({
            name: 'Complex path with special characters and extension: tar.gz (gz)',
            fn: () => {
                assertEquals(
                    getFileExtension('pa-th/t.o/file/wi.th/char$acte4rs.gz'),
                    'gz'
                );
            }
        });
        await test.step({
            name: 'Path without file extension.',
            fn: () => {
                assertEquals(
                    getFileExtension('path/without/file/'),
                    undefined
                );
            }
        });
    }
)
