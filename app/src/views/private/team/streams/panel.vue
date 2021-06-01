<template>
    <ext-panel iconCls="fas fa-exchange-alt" title="Streams" layout="fit">
        <ext-toolbar docked="top">
            <ext-container html="Streams"/>
            <ext-spacer/>
            <ext-filebutton text="Upload" @change="upload"/>
            <ext-button ref="refreshButton" iconCls="fas fa-redo" text="Refresh"/>
        </ext-toolbar>

        <!-- <ext-froalaeditorfield flex="1" editor='{"heightMax":300}'/> -->

        <!-- <Panel/> -->
    </ext-panel>
</template>

<script>
import ":softvisio/components/froala";

// import Panel from ":softvisio/components/profile/panel";

export default {

    // "components": { Panel },

    data () {
        return {};
    },

    "methods": {
        async upload ( e ) {
            var button = e.detail.sender,
                file = button.getFiles()[0];

            const res = await this.$api
                .upload( "test/upload", file, { "a": 1 }, upload => {
                    console.log( upload.progressText );
                } )
                .start();

            console.log( res );
        },
    },
};
</script>
