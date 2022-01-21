import Thread from "#core/app/thread";
import CONST from "#lib/const";

// import sql from "#core/sql";

export default class extends Thread {
    constructor ( ...args ) {
        super( CONST );
    }

    async _new () {
        await super._new();
    }

    async API_test () {
        return result( 200 );
    }
}
