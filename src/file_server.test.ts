import fileServer from './file_server.ts'

Deno.test(
    'File server requesting specific files.',
    () => {
        fileServer({
            serve: {
                port: 80
            }
        });

        fetch('http://localhost');
    }
)

