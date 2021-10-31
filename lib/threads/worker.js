import Base from "#app/threads/base";
import CONST from "#lib/const";

// import sql from "#core/sql";

export default class extends Base {
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
