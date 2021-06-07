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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/create", name );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/create"
```

<!-- tabs:end -->

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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/delete", tokenId );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/delete"
```

<!-- tabs:end -->

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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/get-permissions", tokenId );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/get-permissions"
```

<!-- tabs:end -->

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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/read", [options] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/read"
```

<!-- tabs:end -->

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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/set-enabled", tokenId, enabled );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/set-enabled"
```

<!-- tabs:end -->

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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/set-permissions", tokenId, permissions );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/set-permissions"
```

<!-- tabs:end -->

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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/api-tokens/update-permissions", tokenId, permissions );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/update-permissions"
```

<!-- tabs:end -->

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
