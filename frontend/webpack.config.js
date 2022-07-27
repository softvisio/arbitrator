import config from "#vue/resources/webpack.vue.app.config.js";

config.schemas.push( new URL( "./resources/schemas/env.vue.app.schema.yaml", import.meta.url ) );

export default [config];
