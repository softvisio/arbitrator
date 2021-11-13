import Base from "#app/prototypes/base";
import Read from "#app/prototypes/mixins/read";
import sql from "#core/sql";

export default class extends Read( Base ) {
    async API_test ( ctx, ...args ) {
        console.log( "Test api call", ...args );
        return result( 200, new Date() );
    }

    async API_upload ( ctx, file, data ) {
        console.log( "---", file.size, file.type, data );

        return result( 200, data );
    }

    async API_read ( ctx, options = {} ) {
        const where = this.dbh.where( options.where );

        // const summaryQuery = sql`SELECT count(*) AS total FROM test`.WHERE( where );

        const mainQuery = sql`SELECT * FROM test`.WHERE( where );

        return this._read( ctx, mainQuery, { options } );

        // return this._read( ctx, mainQuery, { options, summaryQuery } );
    }
}
