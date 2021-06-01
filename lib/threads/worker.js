import Base from "#core/app/threads/base";

// import sql from "#core/sql";
// import CONST from "#lib/const";

export default class extends Base {
    constructor ( settings ) {
        super( settings );
    }

    async _init ( settings ) {
        await super._init( settings );

        this._onSettingsUpdate( settings );
    }

    _onSettingsUpdate ( settings ) {}

    async API_test () {
        return result( 200 );
    }
}
