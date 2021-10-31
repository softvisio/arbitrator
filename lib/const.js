const CONST = {
    "permissions": {
        "admin": {
            "name": "Administrator",
            "description": "System administrator",
            "default": false,
        },
        "create-teams": {
            "name": "Create teams",
            "description": "User can create teams",
            "default": false,
        },
    },

    "objects": {
        "team": {
            "id": 1,
            "permissions": {
                "owner": {
                    "name": "owner",
                    "description": "Team owner",
                },
                "manager": {},
            },
        },
        "stream": {
            "id": 2,
            "permissions": {},
        },
    },

    "notifications": {
        "security": {
            "name": "Security",
            "channels": { "internal": true, "email": true, "telegram": true, "push": true },
        },
        "other": {
            "name": "Other",
            "channels": { "internal": true, "email": true, "telegram": true, "push": true },
        },
    },
};

export default CONST;
