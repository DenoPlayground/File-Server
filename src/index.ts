import { FileServer } from "./file_server.ts";

FileServer({
    serve: {
        port: 80
    },
    directory: {
        rootDir: './html'
    }
});
