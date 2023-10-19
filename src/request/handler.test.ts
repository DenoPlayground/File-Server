// import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts";
// import { handler } from "./handler.ts";

// Deno.test(
//     'Request specific files and test for correct "Content-Type".',
//     async (test) => {
//         await test.step({
//             ignore: true,
//             name: 'Directory (no extension)',
//             fn: () => {
//                 const request = new Request('http://localhost:80/testdir');

//                 assertEquals(
//                     handler(
//                         request,
//                         './',
//                         'index.html',
//                         false
//                     ).headers.get('Content-Type'),
//                     'text/html'
//                 );
//             }
//         });
//         await test.step({
//             ignore: true,
//             name: 'Extension (js)',
//             fn: () => {
//                 const request = new Request('http://localhost:80/testdir/file.js');

//                 assertEquals(
//                     handler(
//                         request,
//                         './',
//                         'index.html',
//                         false
//                     ).headers.get('Content-Type'),
//                     'application/javascript'
//                 );
//             }
//         });
//         await test.step({
//             ignore: true,
//             name: 'Unknown extension',
//             fn: () => {
//                 const request = new Request('http://localhost:80/testdir/file.unknownExtension');

//                 assertEquals(
//                     handler(
//                         request,
//                         './',
//                         'index.html',
//                         false
//                     ).headers.get('Content-Type'),
//                     'text/plain'
//                 );
//             }
//         });
//     }
// )
