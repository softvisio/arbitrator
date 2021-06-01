import Base from "#core/app/api/prototypes/base";

export default class extends Base {
    async API_test ( ...args ) {
        console.log( "Test api call", ...args );
        return result( 200, new Date() );
    }

    async API_upload ( file, data ) {
        console.log( "---", file, data );

        return result( 200 );
    }
}
