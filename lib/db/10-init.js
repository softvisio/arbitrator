import sql from "#core/sql";

export default {
    "sql": sql`

        -- EXTENSIONS
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";
        CREATE EXTENSION IF NOT EXISTS "timescaledb" CASCADE;
        -- CREATE EXTENSION IF NOT EXISTS "pg_hashids";

        -- TYPES
        -- CREATE DOMAIN "currency" AS decimal(12, 4) NOT NULL DEFAULT 0
    `,
    "types": {

        // "currency": {
        //     "decode": buffer => Number( buffer ),
        // },
    },
};
