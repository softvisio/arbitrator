<template>
    <AccountDialog>
        <template #top>
            <!-- <ext&#45;panel title="General Settings"> -->
            <!--     <ext&#45;toolbar docked="top"> -->
            <!--         <ext&#45;container html="General Settings"/> -->
            <!--     </ext&#45;toolbar> -->
            <!--     <ext&#45;fieldset defaults='{"labelAlign":"left","labelWidth":250}'> -->
            <!--         <ext&#45;textfield label="Test field" bind="{record.test}"/> -->
            <!--     </ext&#45;fieldset> -->
            <!-- </ext&#45;panel> -->
        </template>

        <template #bottom/>
    </AccountDialog>
</template>

<script>
import AccountDialog from "#vue/components/account/dialog";

export default {
    "components": { AccountDialog },
};
</script>
