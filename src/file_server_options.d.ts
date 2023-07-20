export interface FileServerOptions {
    serve? : Deno.ServeOptions | Deno.ServeTlsOptions,
    directory? : {
        rootDir? : string,
        defaultFileName? : string
    }
}
