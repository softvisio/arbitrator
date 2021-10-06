const CONST = {
    "PERMISSIONS": {
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
    "OBJECTS": {
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
