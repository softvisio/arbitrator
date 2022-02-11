import config from "#vue/webpack.config.vue-app";

config.schemas.push( new URL( "./resources/schemas/vue-app.env.schema.yaml", import.meta.url ) );

export default [config];
