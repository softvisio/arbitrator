import App from "#core/app";
import CONST from "#lib/const";

export default class extends App {
    constructor () {
        super( import.meta.url, CONST );
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

    _initHttpServer () {
        this.server.webpack( "/", new URL( "../app/www", import.meta.url ) );
    }
}
