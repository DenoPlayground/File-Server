import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts";
import { getMIMEType } from "./get_mime_type.ts";

Deno.test(
    'Get MIME type for specific file extension.',
    async (test) => {
        const defaultMIMETypes = {
            default: 'text/html',
            types: {
                'text/html': [
                    'html'
                ],
                'application/javascript': [
                    "js",
                    "mjs"
                ]
            }
        }

        await test.step({
            name: 'Get simple entry (html)',
            fn: () => {
                assertEquals(
                    getMIMEType(
                        defaultMIMETypes,
                        'html'
                    ), 'text/html'
                );
            }
        });
        await test.step({
            name: 'Get entry in array (js/mjs)',
            fn: () => {
                assertEquals(
                    getMIMEType(
                        defaultMIMETypes,
                        'js'
                    ),
                    'application/javascript'
                );
                assertEquals(
                    getMIMEType(
                        defaultMIMETypes,
                        'jsm'
                    ),
                    'application/javascript'
                );
            }
        });
        await test.step({
            name: 'Get default entry, if extension does not exist.',
            fn: () => {
                assertEquals(
                    getMIMEType(
                        defaultMIMETypes,
                        'doesNotExist'
                    ),
                    'text/plain'
                );
            }
        });
    }
)
