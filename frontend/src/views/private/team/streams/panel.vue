<template>
    <ext-panel iconCls="fa-solid fa-exchange-alt" layout="fit" title="Streams">
        <ext-toolbar docked="top">
            <ext-container html="Streams"/>
            <ext-spacer/>
            <ext-filebutton text="Upload" @change="upload"/>
            <ext-button ref="refreshButton" iconCls="fa-solid fa-redo" text="Refresh"/>
        </ext-toolbar>

        <!-- <ext-froalaeditorfield flex="1" editor='{"heightMax":300}'/> -->

        <!-- <Panel/> -->
    </ext-panel>
</template>

<script>

// import "#vue/components/froala-editor";
// import Panel from "#vue/components/account/panel";

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
