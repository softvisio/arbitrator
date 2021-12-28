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

        <ext-panel iconCls="far fa-images" title="Creatives" layout="fit">
            <ext-toolbar docked="top">
                <ext-container html="Creatives"/>
                <ext-spacer/>
                <ext-button text="Refresh" @tap="_reloadCreatives"/>
            </ext-toolbar>

            <ext-chart flex="1" title="chart 1" @ready="chartReady"/>

            <ext-grid scrollToTopOnRefresh1="true" @ready="_gridReady">
                <ext-column text="ID" dataIndex="id" flex="1"/>
            </ext-grid>
        </ext-panel>

        <ext-panel iconCls="fas fa-user-friends" title="Users" layout="vbox">
            <ext-toolbar docked="top">
                <ext-container html="Teams"/>
                <ext-spacer/>
                <ext-button text="Refresh"/>
            </ext-toolbar>
            <ext-chart flex="1" title="chart 1" @ready="chartReady"/>
            <ext-panel title="test"/>
            <ext-chart flex="1" @ready="chartReady"/>
        </ext-panel>

        <ext-panel iconCls="fas fa-flag-checkered" title="Reports"/>
        <ext-panel iconCls="fas fa-ad" title="Teams"/>
        <ext-panel iconCls="fas fa-dollar-sign" title="Account"/>
    </ext-tabpanel>
</template>

<script>
import { defineAsyncComponent } from "vue";
import "#ext-charts";

const StreamsPanel = defineAsyncComponent( () => import( "./streams/panel" ) );

// const CreativesPanel = defineAsyncComponent( () => import( "./creatives/panel" ) );
// const UsersPanel = defineAsyncComponent( () => import( "./users/panel" ) );

export default {
    "components": { StreamsPanel },

    "methods": {
        _gridReady ( e ) {
            const cmp = e.detail.cmp;

            // cmp.setScrollToTopOnRefresh( true );

            const model = Ext.define( "", {
                "extend": "Ext.data.Model",
                "proxy": {
                    "api": {
                        "read": "test/read",
                    },
                },

                "fields": [{ "name": "id", "type": "string" }],
            } );

            this.creativesStore = Ext.create( "Ext.data.Store", {
                "model": model,
                "autoLoad": true,
                "pageSize": 100,
            } );

            cmp.setPlugins( ["autopaging"] );

            cmp.setStore( this.creativesStore );

            // store.load();
        },

        _reloadCreatives () {

            // this.creativesStore.reload();
            // this.creativesStore.load(1);

            this.creativesStore.loadPage( 1 );
        },

        // XXX
        setTeam ( team ) {

            // console.log( team );
        },

        chartReady ( e ) {
            const chart = e.detail.cmp;

            chart.setLegend( {
                "docked": "bottom",
            } );

            chart.setAxes( [
                {
                    "type": "numeric",
                    "position": "left",
                    "grid": true,
                },
                {
                    "type": "category",
                    "position": "bottom",
                    "visibleRange": [0, 0.4],
                },
            ] );

            chart.setSeries( [
                {
                    "type": "area",
                    "xField": "name",
                    "yField": ["g1", "g2"],
                    "title": ["G1", "G2"],
                    "style": {
                        "stroke": "#666666",
                        "fillOpacity": 0.8,
                    },
                },
            ] );

            chart.setStore( {
                "fields": ["name", "g1", "g2"],
                "data": [
                    { "name": "Item-0", "g1": 18.34, "g2": 0.04 },
                    { "name": "Item-1", "g1": 2.67, "g2": 14.87 },
                    { "name": "Item-2", "g1": 1.9, "g2": 5.72 },
                    { "name": "Item-3", "g1": 21.37, "g2": 2.13 },
                    { "name": "Item-4", "g1": 2.67, "g2": 8.53 },
                    { "name": "Item-5", "g1": 18.22, "g2": 4.62 },
                    { "name": "Item-6", "g1": 28.51, "g2": 12.43 },
                    { "name": "Item-7", "g1": 34.43, "g2": 4.4 },
                    { "name": "Item-8", "g1": 21.65, "g2": 13.87 },
                    { "name": "Item-9", "g1": 12.98, "g2": 35.44 },
                    { "name": "Item-10", "g1": 22.96, "g2": 38.7 },
                    { "name": "Item-11", "g1": 0.49, "g2": 51.9 },
                    { "name": "Item-12", "g1": 20.87, "g2": 62.07 },
                    { "name": "Item-13", "g1": 25.1, "g2": 78.46 },
                    { "name": "Item-14", "g1": 16.87, "g2": 56.8 },
                ],
            } );
        },
    },
};
</script>
