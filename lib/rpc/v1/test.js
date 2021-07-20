import Base from "#core/app/api/prototypes/base";

// import fs from "fs";

export default class extends Base {
    async API_test ( ctx, ...args ) {
        console.log( "Test api call", ...args );

        return result( 200, new Date() );
    }

    async API_upload ( ctx, file, data ) {
        console.log( "---", file, data );

        // fs.copyFileSync(file.path + "", "/var/local/downloads/" + file.name);

        return result( 200, [data, new Date()] );
    }
}
