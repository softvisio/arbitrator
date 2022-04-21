import Base from "#core/app/prototypes/base";
import Read from "#core/app/prototypes/mixins/read";
import sql from "#core/sql";
import File from "#core/file";

export default class extends Read( Base ) {
    async API_test ( ctx, ...args ) {
        console.log( "Test api call", ...args );
        return result( 200, new Date() );
    }

    async API_upload ( ctx, file, data ) {
        console.log( "--- upload, size:", file.size, file.name, file.type, data );

        return result( 200, data );
    }

    async API_download ( ctx ) {
        return result( 200, new File( { "name": "1.txt", "type": "text/plain", "content": new Date() + "" } ) );
    }

    async API_read ( ctx, options = {} ) {
        const where = this.dbh.where( options.where );

        // const summaryQuery = sql`SELECT count(*) AS total FROM test`.WHERE( where );

        const mainQuery = sql`SELECT * FROM test`.WHERE( where );

        const res = await this._read( ctx, mainQuery, { options } );

        if ( res.data ) {
            for ( const row of res.data ) {
                row.chartData = this._generateChartData();
            }
        }

        return res;

        // return this._read( ctx, mainQuery, { options, summaryQuery } );
    }

    _generateChartData () {
        var data = [
            {
                "country": "USA",
                "value": 100,
            },
            {
                "country": "China",
                "value": 200,
            },
            {
                "country": "Japan",
                "value": 300,
            },
            {
                "country": "Germany",
                "value": 400,
            },
            {
                "country": "UK",
                "value": 500,
            },
            {
                "country": "France",
                "value": 600,
            },
            {
                "country": "India",
                "value": 700,
            },
            {
                "country": "Spain",
                "value": 800,
            },
            {
                "country": "Netherlands",
                "value": 900,
            },
            {
                "country": "Russia",
                "value": 580,
            },
        ];

        data.forEach( item => ( item.value = Math.floor( Math.random() * 1000 ) ) );

        return data;
    }
}
