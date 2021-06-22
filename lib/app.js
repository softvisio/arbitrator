import App from "#core/app";
import sql from "#core/sql";

import CONST from "#lib/const";

export default class extends App {
    #dbh;

    static cli () {
        return {
            "options": {},
            "arguments": {},
        };
    }

    get dbh () {
        return this.#dbh;
    }

    async run () {

        // signal handlers
        process.on( "SIGINT", () => {
            console.log( "SIGINT" );

            process.exit();
        } );

        process.on( "SIGTERM", () => {
            console.log( "SIGTERM" );

            process.exit();
        } );

        // init cluster
        var res = await this.initCluster( process.env.APP_CLUSTER );
        if ( !res.ok ) return res;

        // init services
        res = await this.initServices();
        if ( !res.ok ) return res;

        // create dbh
        this.#dbh = await sql.new( process.env.APP_DB );

        // create API
        res = await this.createAPI( this.API, this.#dbh, {
            "permissions": CONST.PERMISSIONS,
            "objects": CONST.OBJECTS,
            "dbSchema": new URL( "./db", import.meta.url ),
            "apiSchema": new URL( "./api", import.meta.url ),
        } );
        if ( !res.ok ) return res;

        // create RPC
        res = await this.createRPC( this.RPC, {
            "apiSchema": new URL( "./rpc", import.meta.url ),
        } );
        if ( !res.ok ) return res;

        // run threads
        res = await this.runThreads( {
            "worker": {
                "num": 1,
                "path": new URL( "./threads/worker.js", import.meta.url ),
                "arguments": [await this.api.getSettings()],
            },
        } );
        if ( !res.ok ) return res;

        // run RPC server
        res = await this.rpc.listen();
        if ( !res.ok ) return res;

        // init public HTTP server
        this.server.webpack( "/", new URL( "../app/www", import.meta.url ) ).api( "/api", this.api );

        // run public HTTP server
        res = await this.server.listen();
        if ( !res.ok ) return res;

        return result( 200 );
    }
}
