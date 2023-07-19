import { FileServer } from "./file_server.ts";

FileServer({ port: 80 }, './html', 'index.html');
