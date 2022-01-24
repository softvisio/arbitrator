import App from "#core/app";
import config from "#lib/app.config";

export default class extends App {
    constructor () {
        super( import.meta.url, config );
    }

    // static
    static cli () {
        return {
            "options": {},
            "arguments": {},
        };
    }

    // protected
    _initThreads () {
        return {
            "worker": {
                "num": 1,
                "path": new URL( "./threads/worker.js", import.meta.url ),
                "arguments": null,
            },
        };
    }

    _initPublicHttpServer ( server ) {
        server.webpack( "/", new URL( "../app/www", import.meta.url ) );
    }
}
