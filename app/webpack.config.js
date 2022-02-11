import config from "#vue/webpack.config.vue-app";

config.schemas.push( new URL( "./resources/schemas/env.vue-app.schema.yaml", import.meta.url ) );

export default [config];
