import Thread from "#core/app/thread";
import config from "#lib/app.config";

// import sql from "#core/sql";

export default class extends Thread {
    constructor ( ...args ) {
        super( config );
    }

    async _init () {
        await super._init();
    }

    async API_test () {
        return result( 200 );
    }
}
