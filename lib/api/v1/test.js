import Base from "#app/api/prototypes/base";

export default class extends Base {
    async API_test ( ctx, ...args ) {
        console.log( "Test api call", ...args );
        return result( 200, new Date() );
    }

    async API_upload ( ctx, file, data ) {
        console.log( "---", file, data );

        return result( 200, data );
    }
}
