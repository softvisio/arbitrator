# /v1/admin/users

App users management.

-   [Methods](#methods)
    -   [create](#create) - Create user.
    -   [delete](#delete) - Remove user.
    -   [get-permissions](#get-permissions) - Get user permissions.
    -   [read](#read) - Read users.
    -   [set-enabled](#set-enabled) - Set user enabled.
    -   [set-password](#set-password) - Set user password.
    -   [set-permissions](#set-permissions) - Set user permissions.
    -   [set-username](#set-username) - Change user name.
    -   [suggest](#suggest) - Suggest user name.
    -   [update-permissions](#update-permissions) - Set user permissions.

<a id="methods"></a>

# Methods

<a id="create"></a>

## create

Create user.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/create", fields );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/create"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **fields** `[required]`

    <!-- prettier-ignore -->
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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/delete", userId );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/delete"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="get-permissions"></a>

## get-permissions

Get user permissions.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/get-permissions", userId );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/get-permissions"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="read"></a>

## read

Read users.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/read", [options] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/read"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **options** `[not required]`

    <!-- prettier-ignore -->
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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/set-enabled", userId, enabled );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/set-enabled"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]` - User id or name.

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

-   **enabled** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: boolean
    ```

<a id="set-password"></a>

## set-password

Set user password.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/set-password", userId, [pasword] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/set-password"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]` - User id or name.

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

-   **pasword** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="set-permissions"></a>

## set-permissions

Set user permissions.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/set-permissions", userId, permissions );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/set-permissions"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

-   **permissions** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```

<a id="set-username"></a>

## set-username

Change user name.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/set-username", user_id, new_username, [new_password] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/set-username"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **user_id** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

-   **new_username** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

-   **new_password** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="suggest"></a>

## suggest

Suggest user name.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/suggest", [options] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/suggest"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **options** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    properties:
        where:
            type: object
            properties:
                name:
                    type: array
                    items: [{operator: {type: string, enum: [like]}}, {name: {type: string}}]
    ```

<a id="update-permissions"></a>

## update-permissions

Set user permissions.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/users/update-permissions", userId, permissions );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/update-permissions"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **userId** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

-   **permissions** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```
