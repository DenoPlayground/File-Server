import fileServer from "./file_server.ts";

fileServer({
    serve: {
        port: 80
    },
    directory: {
        rootDir: './testdir'
    }
})
