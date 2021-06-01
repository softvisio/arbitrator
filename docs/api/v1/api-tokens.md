# /v1/api-tokens

User API access tokens management.

-   [Methods](#methods)
    -   [**create** - Generate new API token.](#/v1/api-tokens/create)
    -   [**delete** - Remove API token.](#/v1/api-tokens/delete)
    -   [**get-permissions** - Get user permissions.](#/v1/api-tokens/get-permissions)
    -   [**read** - Read api tokens.](#/v1/api-tokens/read)
    -   [**set-enabled** - Set API token enabled.](#/v1/api-tokens/set-enabled)
    -   [**set-permissions** - Set user permissions.](#/v1/api-tokens/set-permissions)
    -   [**update-permissions** - Set user permissions.](#/v1/api-tokens/update-permissions)

<a id="methods"></a>

# Methods

<a id="/v1/api-tokens/create"></a>

## create

Generate new API token.

```
const res = await api.call( "/v1/api-tokens/create", name );
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **name** `[required]`

    ```
    type: string
    ```

<a id="/v1/api-tokens/delete"></a>

## delete

Remove API token.

```
const res = await api.call( "/v1/api-tokens/delete", tokenId );
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```
    type: string
    ```

<a id="/v1/api-tokens/get-permissions"></a>

## get-permissions

Get user permissions.

```
const res = await api.call( "/v1/api-tokens/get-permissions", tokenId );
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```
    type: string
    ```

<a id="/v1/api-tokens/read"></a>

## read

Read api tokens.

```
const res = await api.call( "/v1/api-tokens/read", [options] );
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **options** `[not required]`

    ```
    type: object
    ```

<a id="/v1/api-tokens/set-enabled"></a>

## set-enabled

Set API token enabled.

```
const res = await api.call( "/v1/api-tokens/set-enabled", tokenId, enabled );
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```
    type: string
    ```

-   **enabled** `[required]`

    ```
    type: boolean
    ```

<a id="/v1/api-tokens/set-permissions"></a>

## set-permissions

Set user permissions.

```
const res = await api.call( "/v1/api-tokens/set-permissions", tokenId, permissions );
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```
    type: string
    ```

-   **permissions** `[required]`

    ```
    type: object
    additionalProperties:
        type: boolean
    ```

<a id="/v1/api-tokens/update-permissions"></a>

## update-permissions

Set user permissions.

```
const res = await api.call( "/v1/api-tokens/update-permissions", tokenId, permissions );
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **tokenId** `[required]`

    ```
    type: string
    ```

-   **permissions** `[required]`

    ```
    type: object
    additionalProperties:
        type: boolean
    ```
