import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts";
import { pathDefaultFile } from "./path_default_file.ts";

Deno.test(
    'Generate a path with a default file if the path has no file extension.',
    async (test) => {
        await test.step({
            name: 'File extension already exists',
            fn: () => {
                assertEquals(
                    pathDefaultFile(
                        'path/to/file.txt',
                        'index.html'
                    ),
                    'path/to/file.txt'
                );
            }
        });
        await test.step({
            name: 'No file extension exists',
            fn: () => {
                assertEquals(
                    pathDefaultFile(
                        'path/to/file',
                        'index.html'
                    ),
                    'path/to/file/index.html'
                );
            }
        });
        await test.step({
            name: 'Trailing Slash (/)',
            fn: () => {
                assertEquals(
                    pathDefaultFile(
                        'path/to/file/',
                        'index.html'
                    ),
                    'path/to/file/index.html'
                );
            }
        });
        await test.step({
            name: 'No path exists',
            fn: () => {
                assertEquals(
                    pathDefaultFile(
                        '',
                        'index.html'
                    ),
                    '/index.html'
                );
            }
        });
        await test.step({
            name: 'Path with special characters',
            fn: () => {
                assertEquals(
                    pathDefaultFile(
                        'pa.t_h/t.o/f[il)e/wi7th_speci1al/ch$aracters/',
                        'index.html'
                    ),
                    'pa.t_h/t.o/f[il)e/wi7th_speci1al/ch$aracters/index.html'
                );
            }
        });
    }
)
