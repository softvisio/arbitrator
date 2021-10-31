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
};

export default CONST;
