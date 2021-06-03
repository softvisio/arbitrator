# /v1/api-tokens

User API access tokens management.

-   [Methods](#methods)
    -   [create](#create) - Generate new API token.
    -   [delete](#delete) - Remove API token.
    -   [get-permissions](#get-permissions) - Get user permissions.
    -   [read](#read) - Read api tokens.
    -   [set-enabled](#set-enabled) - Set API token enabled.
    -   [set-permissions](#set-permissions) - Set user permissions.
    -   [update-permissions](#update-permissions) - Set user permissions.

<a id="methods"></a>

# Methods

<a id="create"></a>

## create

Generate new API token.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/create", name );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **name** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="delete"></a>

## delete

Remove API token.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/delete", tokenId );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **tokenId** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="get-permissions"></a>

## get-permissions

Get user permissions.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/get-permissions", tokenId );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **tokenId** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="read"></a>

## read

Read api tokens.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/read", [options] );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **options** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```

<a id="set-enabled"></a>

## set-enabled

Set API token enabled.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/set-enabled", tokenId, enabled );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **tokenId** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

-   **enabled** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: boolean
    ```

<a id="set-permissions"></a>

## set-permissions

Set user permissions.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/set-permissions", tokenId, permissions );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **tokenId** `[required]`

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

<a id="update-permissions"></a>

## update-permissions

Set user permissions.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/update-permissions", tokenId, permissions );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **tokenId** `[required]`

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
