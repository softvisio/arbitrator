<template>
    <ext-tabpanel tabBar='{"items":[{"iconCls":"fa-solid fa-redo"}]}'>
        <ext-toolbar docked="top">
            <ext-container html="Creatives"/>
            <ext-spacer/>
            <ext-button ref="refreshButton" iconCls="fa-solid fa-redo" text="Refresh"/>
        </ext-toolbar>

        <ext-tabbar>
            <ext-tab iconCls="fa-solid fa-redo"/>
        </ext-tabbar>

        <ext-panel/>
        <ext-panel/>
    </ext-tabpanel>
</template>

<script>
export default {
    data () {
        return {};
    },

    "methods": {},
};
</script>
