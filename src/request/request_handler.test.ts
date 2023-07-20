import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts";
import { requestHandler } from "./request_handler.ts";

Deno.test(
    'Request specific files and test for correct "Content-Type".',
    async (test) => {

        await test.step({
            name: 'html',
            fn: () => {
                const request = new Request('http://localhost:80/testdir')

                assertEquals(
                    requestHandler(request).headers.get('Content-Type'),
                    'text/html'
                );
            }
        });

        await test.step({
            name: 'js',
            fn: () => {
                const request = new Request('http://localhost:80/testdir/file.js')

                assertEquals(
                    requestHandler(request).headers.get('Content-Type'),
                    'application/javascript'
                );
            }
        });
        await test.step({
            name: 'unknownExtension',
            fn: () => {
                const request = new Request('http://localhost:80/testdir/file.unknownExtension')

                assertEquals(
                    requestHandler(request).headers.get('Content-Type'),
                    'text/plain'
                );
            }
        });
    }
)
