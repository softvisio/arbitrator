<template>
    <ext-panel ref="panel" layout="fit" scrollable="true" @ready="ready">
        <AppTitle ref="title" @showProfileDialog="showProfileDialog">
            <!-- <template #logo> -->
            <!--     <ext-image :src="logo" align="left" width="32" height="32" style="background-color: white" margin="0 10 0 0"/> -->
            <!-- </template> -->

            <template #title>
                <ext-button ref="teamsButton" align="right" iconCls="fa-solid fa-user-friends" text="Select Team" textAlign="left" width="200" padding="0 0 0 5" ui="action" stretchMenu="true"/>
                <ext-button align="right" iconCls="fa-solid fa-plus" tooltip="Create team" :hidden1="!canCreateTeam" margin="0 10 0 0" ui="action" @tap="showCreateTeamDialog"/>
            </template>

            <template #menuTop>
                <ext-button iconCls="fa-solid fa-users" text="Users" textAlign="left" :hidden="!isAdmin" @tap="showUsersDialog"/>
            </template>
        </AppTitle>

        <TeamPanel ref="teamPanel"/>
    </ext-panel>
</template>

<script>
import AppTitle from "#vue/components/app-title";
import UsersDialog from "#vue/components/users/dialog";
import ProfileDialog from "./private/profile/dialog";
import TeamPanel from "./private/team/panel";

// import * as CONST from "@/const";

import LOGO from "@/assets/logo.png";

export default {
    "components": { AppTitle, TeamPanel },

    data () {
        return {
            "logo": LOGO,
        };
    },

    "computed": {
        isAdmin () {
            return this.$store.session.hasPermissions( "admin" );
        },

        canCreateTeam () {
            return this.$store.session.hasPermissions( "create_teams" );
        },
    },

    "methods": {
        ready ( e ) {
            this.ext = e.detail.cmp;

            var menu = {},
                currentTeam;

            if ( this.$store.session.settings.teams ) {
                currentTeam = this.$store.session.settings.teams[0];

                menu = {
                    "items": this.$store.session.settings.teams.map( team => {
                        return {
                            "iconCls": "fa-solid fa-user-friends",
                            "text": team.name,
                            "handler": this._switchTeam.bind( this, team ),
                        };
                    } ),
                };

                menu.items.push( {
                    "iconCls": "fa-solid fa-plus",
                    "text": "Create New Team",
                    "handler": this.showCreateTeamDialog.bind( this ),
                } );
            }

            const teamsButton = this.$refs.teamsButton.ext;

            teamsButton.setMenu( menu );

            this._switchTeam( currentTeam );
        },

        _switchTeam ( team ) {
            const teamsButton = this.$refs.teamsButton.ext,
                teamPanel = this.$refs.teamPanel;

            if ( !team ) {
                teamsButton.setText( "You have no teams" );

                teamPanel.setTeam();
            }
            else {
                teamsButton.setText( team.name );

                teamPanel.setTeam( team );
            }
        },

        async showUsersDialog () {
            this.$refs.title.hideMenu();

            const cmp = await this.$mount( UsersDialog );

            cmp.ext.show();
        },

        async showProfileDialog () {
            const cmp = await this.$mount( ProfileDialog );

            cmp.ext.show();
        },

        // XXX
        async showCreateTeamDialog () {},
    },
};
</script>
