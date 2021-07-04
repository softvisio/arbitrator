<template>
    <ext-tabpanel tabBarPosition="left" tabRotation="none" tabBar='{"layout":{"type":"vbox","pack":"start","align":"start"},"defaults":{"padding":"0 10 0 10","width":80,"height":50,"flex":null,"textAlign":"center","style":"font-size:.5em"}}' layout='{"animation":{"type":"slide","direction":"vertical"}}'>
        <StreamsPanel/>

        <!-- <ext-panel iconCls="fas fa-exchange-alt" title="Streams" layout="fit"> -->
        <!--     <ext-toolbar docked="top"> -->
        <!--         <ext-container html="Streams"/> -->
        <!--         <ext-spacer/> -->
        <!--         <ext-button text="Refresh"/> -->
        <!--     </ext-toolbar> -->

        <!--     <StreamsPanel/> -->
        <!-- </ext-panel> -->

        <ext-panel iconCls="far fa-images" title="Creatives">
            <ext-toolbar docked="top">
                <ext-container html="Creatives"/>
                <ext-spacer/>
                <ext-button text="Refresh"/>
            </ext-toolbar>
        </ext-panel>
        <ext-panel iconCls="fas fa-user-friends" title="Users">
            <ext-toolbar docked="top">
                <ext-container html="Teams"/>
                <ext-spacer/>
                <ext-button text="Refresh"/>
            </ext-toolbar>
        </ext-panel>
        <ext-panel iconCls="fas fa-flag-checkered" title="Reports"/>
        <ext-panel iconCls="fas fa-ad" title="Teams"/>
        <ext-panel iconCls="fas fa-dollar-sign" title="Account"/>
    </ext-tabpanel>
</template>

<script>
import { defineAsyncComponent } from "vue";

const StreamsPanel = defineAsyncComponent( () => import( "./streams/panel" ) );

// const CreativesPanel = defineAsyncComponent( () => import( "./creatives/panel" ) );
// const UsersPanel = defineAsyncComponent( () => import( "./users/panel" ) );

export default {
    "components": { StreamsPanel },

    "methods": {

        // XXX
        setTeam ( team ) {

            // console.log( team );
        },
    },
};
</script>
