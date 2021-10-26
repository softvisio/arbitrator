import Base from "#app/threads/base";

// import sql from "#core/sql";
// import CONST from "#lib/const";

export default class extends Base {
    constructor ( settings ) {
        super( settings );
    }

    async _new () {
        await super._new();
    }

    async API_test () {
        return result( 200 );
    }
}
