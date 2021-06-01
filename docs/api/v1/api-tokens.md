# /v1/api-tokens

User API access tokens management.

-   [Methods](#methods)
    -   [**create** - Generate new API token.](#create)
    -   [**delete** - Remove API token.](#delete)
    -   [**get-permissions** - Get user permissions.](#get-permissions)
    -   [**read** - Read api tokens.](#read)
    -   [**set-enabled** - Set API token enabled.](#set-enabled)
    -   [**set-permissions** - Set user permissions.](#set-permissions)
    -   [**update-permissions** - Set user permissions.](#update-permissions)

<a id="methods"></a>

# Methods

<a id="create"></a>

## create

Generate new API token.

```js
const res = await api.call("/v1/api-tokens/create", name);
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **name** `[required]`

    ```yaml
    type: string
    ```

<a id="delete"></a>

## delete

Remove API token.

```js
const res = await api.call("/v1/api-tokens/delete", tokenId);
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```yaml
    type: string
    ```

<a id="get-permissions"></a>

## get-permissions

Get user permissions.

```js
const res = await api.call("/v1/api-tokens/get-permissions", tokenId);
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```yaml
    type: string
    ```

<a id="read"></a>

## read

Read api tokens.

```js
const res = await api.call("/v1/api-tokens/read", [options]);
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **options** `[not required]`

    ```yaml
    type: object
    ```

<a id="set-enabled"></a>

## set-enabled

Set API token enabled.

```js
const res = await api.call("/v1/api-tokens/set-enabled", tokenId, enabled);
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```yaml
    type: string
    ```

-   **enabled** `[required]`

    ```yaml
    type: boolean
    ```

<a id="set-permissions"></a>

## set-permissions

Set user permissions.

```js
const res = await api.call("/v1/api-tokens/set-permissions", tokenId, permissions);
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```yaml
    type: string
    ```

-   **permissions** `[required]`

    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```

<a id="update-permissions"></a>

## update-permissions

Set user permissions.

```js
const res = await api.call("/v1/api-tokens/update-permissions", tokenId, permissions);
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```yaml
    type: string
    ```

-   **permissions** `[required]`

    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```
