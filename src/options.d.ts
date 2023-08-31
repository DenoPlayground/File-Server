export interface Options {
    serve? : Deno.ServeOptions | Deno.ServeTlsOptions,
    rootDir? : string,
    defaultFileName? : string,
    logging? : boolean
}
