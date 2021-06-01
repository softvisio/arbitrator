import App from "#core/app";
import sql from "#core/sql";

import CONST from "#lib/const";

export default class extends App {
    #dbh;
    #api;
    #rpc;

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

        // connect to the cluster
        if ( process.env.APP_CLUSTER ) {
            process.stdout.write( "Connecting to the cluster ... " );
            var res = await this.cluster.connect( process.env.APP_CLUSTER, {
                "groups": process.env.APP_CLUSTER_GROUPS,
                "publish": {
                    "app": process.env.APP_CLUSTER_PUBLISH_APP,
                },
            } );
            console.log( res + "" );
            if ( !res.ok ) return res;
        }

        // create dbh
        this.#dbh = await sql.connect( process.env.APP_DB );

        // create api endpoint
        this.#api = await this.API.new( this, this.#dbh, {
            "permissions": CONST.PERMISSIONS,
            "objects": CONST.OBJECTS,
            "dbSchema": new URL( "./db", import.meta.url ),
            "apiSchema": new URL( "./api", import.meta.url ),
        } );
        if ( !this.#api ) return result( 500 );

        // create rpc endpoint
        this.#rpc = await this.RPC.new( this, {
            "apiSchema": new URL( "./rpc", import.meta.url ),
        } );
        if ( !this.#rpc ) return result( 500 );

        // run threads
        process.stdout.write( "Starting threads ... " );
        res = await this.threads.run( {
            "worker": {
                "num": 1,
                "path": new URL( "./threads/worker.js", import.meta.url ),
                "arguments": [this.#api.settings],
            },
        } );
        console.log( res + "" );
        if ( !res.ok ) return res;

        // create HTTP server locations
        this.server.webpack( "/", new URL( "../app/www", import.meta.url ) ).api( "/api", this.#api );

        // run HTTP server
        res = await this.server.listen( "0.0.0.0", 80, true );
        if ( !res.ok ) return res;

        // run RPC service
        res = await this.cluster.listen( this.#rpc );
        if ( !res.ok ) throw res;

        return result( 200 );
    }
}
