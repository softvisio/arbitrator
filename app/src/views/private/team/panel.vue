<template>
    <ext-tabpanel tabBarPosition="left" tabRotation="none" tabBar='{"layout":{"type":"vbox","pack":"start","align":"start"},"defaults":{"padding":"0 10 0 10","width":80,"height":50,"flex":null,"textAlign":"center","style":"font-size:.5em"}}' layout='{"animation":{"type":"slide","direction":"vertical"}}'>
        <StreamsPanel/>

        <!-- <ext-panel iconCls="fa-solid fa-exchange-alt" title="Streams" layout="fit"> -->
        <!--     <ext-toolbar docked="top"> -->
        <!--         <ext-container html="Streams"/> -->
        <!--         <ext-spacer/> -->
        <!--         <ext-button text="Refresh"/> -->
        <!--     </ext-toolbar> -->

        <!--     <StreamsPanel/> -->
        <!-- </ext-panel> -->

        <ext-panel iconCls="fa-solid fa-images" title="Creatives" layout="fit">
            <ext-toolbar docked="top">
                <ext-container html="Creatives"/>
                <ext-spacer/>
                <ext-button text="Download" @tap="download"/>
                <ext-button text="Show Dialog" @tap="showDialog"/>
                <ext-button text="Refresh" @tap="_reloadCreatives"/>
            </ext-toolbar>

            <AmchartsPanel flex="1" :animated="true" :responsive="true" :micro="false" @ready="_amchartCreate" @data="_amchartUpdate"/>

            <ext-chart flex="1" title="chart 1" @ready="chartReady"/>

            <ext-grid scrollToTopOnRefresh1="true" viewModel="true" @ready="_gridReady">
                <ext-column text="Id" dataIndex="id" flex="1"/>
                <ext-column width="200" columnMenu="false" @ready="_actionColReady"/>
            </ext-grid>
        </ext-panel>

        <ext-panel iconCls="fa-solid fa-user-friends" title="Users" layout="vbox">
            <ext-toolbar docked="top">
                <ext-container html="Teams"/>
                <ext-spacer/>
                <ext-button text="Refresh"/>
            </ext-toolbar>
            <ext-chart flex="1" title="chart 1" @ready="chartReady"/>
            <ext-chart flex="1" @ready="chartReady"/>
        </ext-panel>

        <ext-panel iconCls="fa-solid fa-flag-checkered" title="Reports"/>
        <ext-panel iconCls="fa-solid fa-ad" title="Teams"/>
        <ext-panel iconCls="fa-solid fa-dollar-sign" title="Account"/>
    </ext-tabpanel>
</template>

<script>
import { defineAsyncComponent } from "vue";

import "#vue/components/froala-editor";
import "#vue/components/ext-charts";

import AmchartsPanel from "#vue/components/amcharts5/panel";
import * as am5xy from "@amcharts/amcharts5/xy";

const StreamsPanel = defineAsyncComponent( () => import( "./streams/panel" ) );

// const CreativesPanel = defineAsyncComponent( () => import( "./creatives/panel" ) );
// const UsersPanel = defineAsyncComponent( () => import( "./users/panel" ) );

const Dialog = defineAsyncComponent( () => import( /* webpackPrefetch: true */ "./dialog" ) );
// import Dialog from "./dialog";

export default {
    "components": { StreamsPanel, AmchartsPanel },

    "methods": {
        _gridReady ( e ) {
            const cmp = e.detail.cmp;

            // cmp.setScrollToTopOnRefresh( true );

            cmp.setItemConfig( { "viewModel": true } );

            const model = Ext.define( "", {
                "extend": "Ext.data.Model",

                "proxy": {
                    "api": {
                        "read": "test/read",
                    },
                },

                "fields": [
                    { "name": "id", "type": "string" },
                    { "nams": "chartData", "type": "array" },
                ],
            } );

            this.creativesStore = Ext.create( "Ext.data.Store", {
                model,
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

        async showDialog () {
            const cmp = await this.$mount( Dialog );

            cmp.ext.show();
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

        _amchartCreate ( cmp ) {
            const root = cmp.root,
                am5 = cmp.am5;

            var chart = root.container.children.push( am5xy.XYChart.new( root, {
                "panX": true,
                "panY": true,
                "wheelX": "panX",
                "wheelY": "zoomX",
                "pinchZoomX": true,
            } ) );

            // add cursor, https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
            var cursor = chart.set( "cursor", am5xy.XYCursor.new( root, {} ) );
            cursor.lineY.set( "visible", false );

            // create axes, https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            var xRenderer = am5xy.AxisRendererX.new( root, { "minGridDistance": 30 } );
            xRenderer.labels.template.setAll( {
                "rotation": -90,
                "centerY": am5.p50,
                "centerX": am5.p100,
                "paddingRight": 15,
            } );

            var xAxis = chart.xAxes.push( am5xy.CategoryAxis.new( root, {
                "maxDeviation": 0.3,
                "categoryField": "country",
                "renderer": xRenderer,
                "tooltip": am5.Tooltip.new( root, {} ),
            } ) );

            var yAxis = chart.yAxes.push( am5xy.ValueAxis.new( root, {
                "maxDeviation": 0.3,
                "renderer": am5xy.AxisRendererY.new( root, {} ),
            } ) );

            // create series, https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            var series = chart.series.push( am5xy.ColumnSeries.new( root, {
                "name": "Series 1",
                "xAxis": xAxis,
                "yAxis": yAxis,
                "valueYField": "value",
                "sequencedInterpolation": true,
                "categoryXField": "country",
                "tooltip": am5.Tooltip.new( root, {
                    "labelText": "{valueY}",
                } ),
            } ) );

            series.columns.template.setAll( { "cornerRadiusTL": 5, "cornerRadiusTR": 5 } );
            series.columns.template.adapters.add( "fill", function ( fill, target ) {
                return chart.get( "colors" ).getIndex( series.columns.indexOf( target ) );
            } );

            series.columns.template.adapters.add( "stroke", function ( stroke, target ) {
                return chart.get( "colors" ).getIndex( series.columns.indexOf( target ) );
            } );

            // make stuff animate on load, https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear( 1000 );
            chart.appear( 1000, 100 );

            cmp.xAxis = xAxis;
            cmp.series = series;

            cmp.setData( this._generateChartData() );
        },

        _amchartUpdate ( cmp, data ) {
            cmp.xAxis.data.setAll( data || [] );
            cmp.series.data.setAll( data || [] );
        },

        _generateChartData () {
            var data = [
                {
                    "country": "USA",
                    "value": 100,
                },
                {
                    "country": "China",
                    "value": 200,
                },
                {
                    "country": "Japan",
                    "value": 300,
                },
                {
                    "country": "Germany",
                    "value": 400,
                },
                {
                    "country": "UK",
                    "value": 500,
                },
                {
                    "country": "France",
                    "value": 600,
                },
                {
                    "country": "India",
                    "value": 700,
                },
                {
                    "country": "Spain",
                    "value": 800,
                },
                {
                    "country": "Netherlands",
                    "value": 900,
                },
                {
                    "country": "Russia",
                    "value": 580,
                },
            ];

            data.forEach( item => ( item.value = Math.floor( Math.random() * 1000 ) ) );

            return data;
        },

        async download () {
            const res = await this.$api.call( "test/download" );

            if ( !res.ok ) {
                this.$utils.toast( res );
            }
            else {
                this.$utils.saveAs( res.data );
            }
        },

        _actionColReady ( e ) {
            const cmp = e.detail.cmp;

            cmp.setCell( {
                "xtype": "widgetcell",
                "widget": {
                    "xtype": "amcharts5",
                    "height": 30,
                    "responsive": true,
                    "micro": true,
                    "createChart": this._amchartCreate.bind( this ),
                    "updateChart": this._amchartUpdate.bind( this ),
                    "bind": { "data": "{record.chartData}" },

                    // updateChart ( cmp, data ) {
                    //     console.log( "--- data", data );
                    // },
                },
            } );
        },
    },
};
</script>
