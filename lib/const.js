const CONST = {
    "apiEnabled": true,
    "rpcEnabled": true,
    "httpServerEnabled": true,

    "permissions": {
        "admin": {
            "name": "Administrator",
            "description": "System administrator",
            "default": false,
        },
        "create_teams": {
            "name": "Create teams",
            "description": "User can create teams",
            "default": false,
        },
    },

    "objects": {
        "team": {
            "id": 1,
            "roles": {
                "owner": { "name": "owner", "description": "Team owner", "canEditRoles": true },
            },
        },
        "stream": {
            "id": 2,
            "roles": {
                "owner": { "name": "owner", "description": "Stream owner", "canEditRoles": true },
            },
        },
    },

    "notifications": {
        "security": {
            "name": "Security",
            "description": "Various security related notifications",
            "channels": { "internal": true, "email": true, "telegram": true, "push": true },
        },
        "other": {
            "name": "Other",
            "description": "Other unclassified notifications",
            "channels": { "internal": true, "email": true, "telegram": true, "push": true },
        },
    },
};

export default CONST;
