import { FileServer } from "../mod.ts";

FileServer({
    serve: {
        port: 80
    },
    directory: {
        rootDir: './html'
    }
});
