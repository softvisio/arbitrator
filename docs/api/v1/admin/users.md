# /v1/admin/users

App users management.

-   [Methods](#methods)
    -   [**create** - Create user.](#create)
    -   [**delete** - Remove user.](#delete)
    -   [**get-permissions** - Get user permissions.](#get-permissions)
    -   [**read** - Read users.](#read)
    -   [**set-enabled** - Set user enabled.](#set-enabled)
    -   [**set-password** - Set user password.](#set-password)
    -   [**set-permissions** - Set user permissions.](#set-permissions)
    -   [**set-username** - Change user name.](#set-username)
    -   [**suggest** - Suggest user name.](#suggest)
    -   [**update-permissions** - Set user permissions.](#update-permissions)

<a id="methods"></a>

# Methods

<a id="create"></a>

## create

Create user.

```js
const res = await api.call("/v1/admin/users/create", fields);
```

**Permissions**

-   "admin";

**Parameters**

-   **fields** `[required]`

    ```yaml
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

<a id="delete"></a>

## delete

Remove user.

```js
const res = await api.call("/v1/admin/users/delete", userId);
```

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]`

    ```yaml
    type: string
    ```

<a id="get-permissions"></a>

## get-permissions

Get user permissions.

```js
const res = await api.call("/v1/admin/users/get-permissions", userId);
```

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]`

    ```yaml
    type: string
    ```

<a id="read"></a>

## read

Read users.

```js
const res = await api.call("/v1/admin/users/read", [options]);
```

**Permissions**

-   "admin";

**Parameters**

-   **options** `[not required]`

    ```yaml
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

<a id="set-enabled"></a>

## set-enabled

Set user enabled.

```js
const res = await api.call("/v1/admin/users/set-enabled", userId, enabled);
```

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]` - User id or name.

    ```yaml
    type: string
    ```

-   **enabled** `[required]`

    ```yaml
    type: boolean
    ```

<a id="set-password"></a>

## set-password

Set user password.

```js
const res = await api.call("/v1/admin/users/set-password", userId, [pasword]);
```

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]` - User id or name.

    ```yaml
    type: string
    ```

-   **pasword** `[not required]`

    ```yaml
    type: string
    ```

<a id="set-permissions"></a>

## set-permissions

Set user permissions.

```js
const res = await api.call("/v1/admin/users/set-permissions", userId, permissions);
```

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]`

    ```yaml
    type: string
    ```

-   **permissions** `[required]`

    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```

<a id="set-username"></a>

## set-username

Change user name.

```js
const res = await api.call("/v1/admin/users/set-username", user_id, new_username, [new_password]);
```

**Permissions**

-   "admin";

**Parameters**

-   **user_id** `[required]`

    ```yaml
    type: string
    ```

-   **new_username** `[required]`

    ```yaml
    type: string
    ```

-   **new_password** `[not required]`

    ```yaml
    type: string
    ```

<a id="suggest"></a>

## suggest

Suggest user name.

```js
const res = await api.call("/v1/admin/users/suggest", [options]);
```

**Permissions**

-   "admin";

**Parameters**

-   **options** `[not required]`

    ```yaml
    type: object
    properties:
        where:
            type: object
            properties:
                name:
                    type: array
                    items: [{ operator: { type: string, enum: [like] } }, { name: { type: string } }]
    ```

<a id="update-permissions"></a>

## update-permissions

Set user permissions.

```js
const res = await api.call("/v1/admin/users/update-permissions", userId, permissions);
```

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]`

    ```yaml
    type: string
    ```

-   **permissions** `[required]`

    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```
