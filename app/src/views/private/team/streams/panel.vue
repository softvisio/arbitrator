<template>
    <ext-panel iconCls="fas fa-exchange-alt" title="Streams" layout="fit">
        <ext-toolbar docked="top">
            <ext-container html="Streams"/>
            <ext-spacer/>
            <ext-filebutton text="Upload" @change="upload"/>
            <ext-button ref="refreshButton" iconCls="fas fa-redo" text="Refresh"/>
        </ext-toolbar>

        <ext-froalaeditorfield flex="1" editor='{"heightMax":300}'/>

        <!-- <Panel/> -->
    </ext-panel>
</template>

<script>
import "#vue/components/froala";

// import Panel from "#vue/components/profile/panel";

export default {

    // "components": { Panel },

    data () {
        return {};
    },

    "methods": {
        async upload ( e ) {
            var button = e.detail.sender,
                file = button.getFiles()[0];

            const upload = this.$api.upload( "test/upload", file, { "a": 1 } ).on( "progress", upload => console.log( "---", upload.progressText ) );

            const res = await upload.start();

            console.log( res );
        },
    },
};
</script>
