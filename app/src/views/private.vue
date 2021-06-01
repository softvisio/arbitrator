<template>
    <ext-panel ref="panel" layout="fit" scrollable="true" @ready="ready">
        <ext-titlebar docked="top" titleAlign="left" :title="title" margin="0 0 1 0" padding="0 0 0 10">
            <ext-image :src="logo" align="left" width="32" height="32" style="background-color: white" margin="0 10 0 0"/>
            <ext-button ref="teamsButton" align="right" iconCls="fas fa-user-friends" text="Select Team" textAlign="left" width="200" padding="0 0 0 5" ui="action" stretchMenu="true"/>
            <ext-button align="right" iconCls="fas fa-plus" tooltip="Create team" :hidden="!canCreateTeam" margin="0 10 0 0" ui="action" @tap="showCreateTeamDialog"/>
            <Avatar align="right"/>
            <ext-button align="right" iconCls="fas fa-bars" margin="0 0 0 5" ui="action" @tap="showMenu"/>

            <MenuSheet ref="menu" @showProfileDialog="showProfileDialog">
                <template #top>
                    <ext-button iconCls="fas fa-cog" text="Settings" textAlign="left" :hidden="!isAdmin" @tap="showSettingsDialog"/>
                    <ext-button iconCls="fas fa-users" text="Users" textAlign="left" :hidden="!isAdmin" @tap="showUsersDialog"/>
                </template>
            </MenuSheet>
        </ext-titlebar>

        <TeamPanel ref="teamPanel"/>
    </ext-panel>
</template>

<script>
import Avatar from ":softvisio/components/menu/avatar";
import MenuSheet from ":softvisio/components/menu/sheet";
import SettingsDialog from "./private/settings/dialog";
import UsersDialog from ":softvisio/components/users/dialog";
import ProfileDialog from "./private/profile/dialog";
import TeamPanel from "./private/team/panel";

// import * as CONST from "@/const";

import LOGO from "@/assets/logo.png";

export default {
    "components": { Avatar, MenuSheet, TeamPanel },

    data () {
        return {
            "logo": LOGO,
        };
    },

    "computed": {
        title () {
            return this.$store.session.title;
        },

        isAdmin () {
            return this.$store.session.hasPermissions( "admin" );
        },

        canCreateTeam () {
            return this.$store.session.hasPermissions( "create-teams" );
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
                            "iconCls": "fas fa-user-friends",
                            "text": team.name,
                            "handler": this._switchTeam.bind( this, team ),
                        };
                    } ),
                };

                menu.items.push( {
                    "iconCls": "fas fa-plus",
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

        showMenu () {
            this.$refs.menu.show();
        },

        async showSettingsDialog () {
            this.$refs.menu.hide();

            const cmp = await this.$mount( SettingsDialog );

            cmp.ext.show();
        },

        async showUsersDialog () {
            this.$refs.menu.hide();

            const cmp = await this.$mount( UsersDialog );

            cmp.ext.show();
        },

        async showProfileDialog () {
            this.$refs.menu.hide();

            const cmp = await this.$mount( ProfileDialog );

            cmp.ext.show();
        },

        // XXX
        async showCreateTeamDialog () {},
    },
};
</script>
