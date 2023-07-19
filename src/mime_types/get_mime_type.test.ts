import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts";
import { getMIMEType } from "./get_mime_type.ts";

Deno.test(
    'Get MIME type for specific file extension',
    async (test) => {
        await test.step({
            name: 'html',
            fn: () => {
                assertEquals(getMIMEType('html'), 'text/html');
            }
        })
        await test.step({
            name: 'css',
            fn: () => {
                assertEquals(getMIMEType('css'), 'text/css');
            }
        })
        await test.step({
            name: 'js',
            fn: () => {
                assertEquals(getMIMEType('js'), 'application/javascript');
            }
        })
        await test.step({
            name: 'txt',
            fn: () => {
                assertEquals(getMIMEType('txt'), 'text/plain');
            }
        })
    }
)
