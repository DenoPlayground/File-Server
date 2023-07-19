import { assertEquals } from "https://deno.land/std@0.194.0/testing/asserts.ts";

Deno.test(
    'File server requesting specific files.',
    async (test) => {
        await test.step({
            name: 'Create temp dir with temp index.html',
            fn: () => {
                Deno.mkdirSync(
                    'testdir',
                    {
                        recursive: true
                    }
                );
                Deno.writeTextFileSync(
                    'testdir/index.html',
                    'Test123',
                    {
                        create: true
                    }
                );
            }
        })
        
        await test.step({
            name: 'Start worker with file server',
            fn: () => {
                const fileServerPath = new URL("./run_file_server.ts", import.meta.url).href;
                new Worker(fileServerPath, {
                    type: 'module',
                    deno: {
                        permissions: 'inherit'
                    }
                });
            }
        })
        

        await new Promise((resolve) => setTimeout(resolve, 3000));

        const text = await fetch('http://localhost:80').then(response => response.text());
        
        assertEquals(text, 'Test123')

        Deno.removeSync(
            'testdir',
            { recursive: true }
        )
        // await test.step({
        //     name: 'Fetch page',
        //     fn: async () => {
        //         const text = await fetch('http://localhost/testdir').then(response => response.text());
                
        //         assertEquals(text, 'Test123')
        //     }
        // })

        

    }

    
)

