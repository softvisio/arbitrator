import ApiCallLog from "#core/app/prototypes/admin/api-call-log";

// import { objectIsEmpty } from "#core/utils";

const methods = ["test1", "test2", "test3", "test4", "test5"];

export default class extends ApiCallLog {
    async API_getLatestStats ( ctx, method ) {

        // const methods = this.api.schema.getLogMethods();

        // no methods to return
        // if ( objectIsEmpty( methods ) ) return result( 200 );

        // const res = await this.dbh.select( sql`SELECT * FROM get_api_call_log_latest()` );
        const res = this.#genLatestData();
        if ( !res.ok ) return res;

        const idx = {};

        for ( const row of res.data ) {
            ( idx[row.method_id] ||= [] ).push( row );
            delete row.method_id;
        }

        const data = [];

        // stat = this.api.stat;

        for ( const method of methods ) {
            const row = {
                "id": method,
                "active_requests_limit": 100, // methods[method].activeRequestsLimit || null,
                "active_requests_user_limit": 100, // methods[method].activeRequestsUserLimit || null,
                "total_active_requests": 50, // ( stat[method] || {} ).total || 0,
                "series": idx[method],
            };

            data.push( row );
        }

        return result( 200, data );
    }

    async API_getHistoryStats ( ctx, method ) {

        // date | total_accepted | total_declined | avg_runtime | errors_percent
        // return this.dbh.select( sql`SELECT date, total_accepted, total_declined, avg_runtime, errors_percent FROM get_api_call_log_historic(?)`, [method] );
        return this.#genLatestData( method );
    }

    // private
    #genLatestData ( method ) {
        var _methods, num, step;

        if ( method ) {
            _methods = [method];
            num = 24 * 30;
            step = 60000 * 60;
        }
        else {
            _methods = methods;
            num = 60;
            step = 60000;
        }

        // method_id | date | total_accepted | total_declined | avg_runtime | errors_percent
        const data = [];

        const now = Date.parse( "2022-04-20T10:00:00" );

        for ( let n = 0; n < num; n++ ) {
            const date = new Date( now + n * step ); // .getTime();

            for ( const methodId of _methods ) {

                // method_id | date | total_accepted | total_declined | avg_runtime | errors_percent
                const row = {
                    "method_id": methodId,
                    "date": date,
                    "total_accepted": Math.floor( Math.random() * 1000 ),
                    "total_declined": Math.floor( Math.random() * 1000 ),
                    "avg_runtime": Math.floor( Math.random() * 1000 ),
                    "errors_percent": Math.random() * 100,
                };

                data.push( row );
            }
        }

        return result( 200, data );
    }
}
