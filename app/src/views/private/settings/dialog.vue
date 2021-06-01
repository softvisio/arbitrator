<template>
    <SettingsDialog>
        <template #top>
            <ext-panel title="General Settings">
                <ext-toolbar docked="top">
                    <ext-container html="General Settings"/>
                </ext-toolbar>
                <ext-fieldset defaults='{"labelAlign":"left","labelWidth":250}'>
                    <ext-textfield label="Google Maps API Key" bind="{record.gmap_key}"/>
                    <ext-textfield label="Proxy Server" bind="{record.proxy}"/>
                    <ext-textfield label="Crawlsy API URL" bind="{record.crawlsy_api_url}"/>
                    <ext-numberfield label="Maximum Threads" bind="{record.max_threads}" minValue="1"/>
                </ext-fieldset>
            </ext-panel>
        </template>
    </SettingsDialog>
</template>

<script>
import SettingsDialog from ":softvisio/components/settings/dialog";

export default {
    "components": { SettingsDialog },
};
</script>
