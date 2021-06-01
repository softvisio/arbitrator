# /v1/admin/users

App users management.

-   [Methods](#methods)
    -   [**create** - Create user.](#/v1/admin/users/create)
    -   [**delete** - Remove user.](#/v1/admin/users/delete)
    -   [**get-permissions** - Get user permissions.](#/v1/admin/users/get-permissions)
    -   [**read** - Read users.](#/v1/admin/users/read)
    -   [**set-enabled** - Set user enabled.](#/v1/admin/users/set-enabled)
    -   [**set-password** - Set user password.](#/v1/admin/users/set-password)
    -   [**set-permissions** - Set user permissions.](#/v1/admin/users/set-permissions)
    -   [**set-username** - Change user name.](#/v1/admin/users/set-username)
    -   [**suggest** - Suggest user name.](#/v1/admin/users/suggest)
    -   [**update-permissions** - Set user permissions.](#/v1/admin/users/update-permissions)

<a id="methods"></a>

# Methods

<a id="/v1/admin/users/create"></a>

## create

Create user.

```
const res = await api.call( "/v1/admin/users/create", fields );
```

#### Permissions

-   "admin";

#### Parameters

-   **fields** `[required]`

    ```
    type: object
    properties:
        username:
            type: string
        password:
            type: string
        enabled:
            type: boolean
        permissions:
            type: object
            additionalProperties:
                type: boolean
        email:
            type: string
        telegram_name:
            type: string
    required:
        - username
    ```

<a id="/v1/admin/users/delete"></a>

## delete

Remove user.

```
const res = await api.call( "/v1/admin/users/delete", userId );
```

#### Permissions

-   "admin";

#### Parameters

-   **userId** `[required]`

    ```
    type: string
    ```

<a id="/v1/admin/users/get-permissions"></a>

## get-permissions

Get user permissions.

```
const res = await api.call( "/v1/admin/users/get-permissions", userId );
```

#### Permissions

-   "admin";

#### Parameters

-   **userId** `[required]`

    ```
    type: string
    ```

<a id="/v1/admin/users/read"></a>

## read

Read users.

```
const res = await api.call( "/v1/admin/users/read", [options] );
```

#### Permissions

-   "admin";

#### Parameters

-   **options** `[not required]`

    ```
    apiRead:
        id:
            type: string
            conditions:
                - "="
            sortable: true
        search:
            type: string
            conditions:
                - like
        name:
            sortable: true
        created:
            sortable: true
        enabled:
            sortable: true
    ```

<a id="/v1/admin/users/set-enabled"></a>

## set-enabled

Set user enabled.

```
const res = await api.call( "/v1/admin/users/set-enabled", userId, enabled );
```

#### Permissions

-   "admin";

#### Parameters

-   **userId** `[required]` - User id or name.

    ```
    type: string
    ```

-   **enabled** `[required]`

    ```
    type: boolean
    ```

<a id="/v1/admin/users/set-password"></a>

## set-password

Set user password.

```
const res = await api.call( "/v1/admin/users/set-password", userId, [pasword] );
```

#### Permissions

-   "admin";

#### Parameters

-   **userId** `[required]` - User id or name.

    ```
    type: string
    ```

-   **pasword** `[not required]`

    ```
    type: string
    ```

<a id="/v1/admin/users/set-permissions"></a>

## set-permissions

Set user permissions.

```
const res = await api.call( "/v1/admin/users/set-permissions", userId, permissions );
```

#### Permissions

-   "admin";

#### Parameters

-   **userId** `[required]`

    ```
    type: string
    ```

-   **permissions** `[required]`

    ```
    type: object
    additionalProperties:
        type: boolean
    ```

<a id="/v1/admin/users/set-username"></a>

## set-username

Change user name.

```
const res = await api.call( "/v1/admin/users/set-username", user_id, new_username, [new_password] );
```

#### Permissions

-   "admin";

#### Parameters

-   **user_id** `[required]`

    ```
    type: string
    ```

-   **new_username** `[required]`

    ```
    type: string
    ```

-   **new_password** `[not required]`

    ```
    type: string
    ```

<a id="/v1/admin/users/suggest"></a>

## suggest

Suggest user name.

```
const res = await api.call( "/v1/admin/users/suggest", [options] );
```

#### Permissions

-   "admin";

#### Parameters

-   **options** `[not required]`

    ```
    type: object
    properties:
        where:
            type: object
            properties:
                name:
                    type: array
                    items: [{operator: {type: string, enum: [like]}}, {name: {type: string}}]
    ```

<a id="/v1/admin/users/update-permissions"></a>

## update-permissions

Set user permissions.

```
const res = await api.call( "/v1/admin/users/update-permissions", userId, permissions );
```

#### Permissions

-   "admin";

#### Parameters

-   **userId** `[required]`

    ```
    type: string
    ```

-   **permissions** `[required]`

    ```
    type: object
    additionalProperties:
        type: boolean
    ```
