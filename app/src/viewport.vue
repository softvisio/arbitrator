<script>
import Viewport from ":softvisio/viewport";
import { defineAsyncComponent } from "vue";

export default {
    "extends": Viewport,

    created () {
        this.publicView = defineAsyncComponent( () => import( "@/views/public.vue" ) );
        this.privateView = defineAsyncComponent( () => import( "@/views/private.vue" ) );
    },

    "methods": {
        async onRoute ( route ) {
            Viewport.methods.onRoute.call( this, route );
        },
    },
};
</script>
