# API v1

## App API call log

Methods:

-   [Read statistics for the given API method for the last 30 days](#read-history-stat)
-   [Read statistics for the last 60 minutes](#read-latest-stat)
-   [Read API method access log](#read-log)

<a id="read-history-stat"></a>

### Read statistics for the given API method for the last 30 days

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/api-call-log/read-history-stat", method_id );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/api-call-log/read-history-stat"
```

<!-- tabs:end -->

Statistics updated every 1 minute. Data resolution is 10 minutes.

**Permissions**

-   "admin";

**Parameters**

-   **method_id** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="read-latest-stat"></a>

### Read statistics for the last 60 minutes

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/api-call-log/read-latest-stat", [method_id] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/api-call-log/read-latest-stat"
```

<!-- tabs:end -->

Statistics updated every 10 seconds. Data resolution is 1 minute.

**Permissions**

-   "admin";

**Parameters**

-   **method_id** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="read-log"></a>

### Read API method access log

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/api-call-log/read-log", [options] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/api-call-log/read-log"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **options** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    apiRead:
        method_id:
            type: string
            conditions:
                - "="
            required: true
    ```

## App settings.

Methods:

-   [Read application settings.](#read)
-   [Test SMTP server settings.](#test-smtp)
-   [Update application settings.](#update)

<a id="read"></a>

### Read application settings.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/settings/read" );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/settings/read"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

Method require no parameters.

<a id="test-smtp"></a>

### Test SMTP server settings.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/settings/test-smtp", settings );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/settings/test-smtp"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **settings** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    properties:
        smtp_hostname:
            type: string
        smtp_port:
            type: integer
            minimum: 0
            maximum: 65535
        smtp_username:
            type: string
        smtp_password:
            type: string
    required: []
    additionalProperties: false
    ```

<a id="update"></a>

### Update application settings.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/settings/update", settings );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/settings/update"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **settings** `[required]` - application settings object

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```

## App users management.

Methods:

-   [Create user.](#create)
-   [Remove user.](#delete)
-   [Get user permissions.](#get-permissions)
-   [Read users.](#read)
-   [Set user enabled.](#set-enabled)
-   [Set user password.](#set-password)
-   [Set user permissions.](#set-permissions)
-   [Change user name.](#set-username)
-   [Suggest user name.](#suggest)
-   [Set user permissions.](#update-permissions)

<a id="create"></a>

### Create user.

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

### Remove user.

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

### Get user permissions.

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

### Read users.

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

### Set user enabled.

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

### Set user password.

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

### Set user permissions.

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

### Change user name.

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

### Suggest user name.

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

### Set user permissions.

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

## User API access tokens management.

Methods:

-   [Generate new API token.](#create)
-   [Remove API token.](#delete)
-   [Get user permissions.](#get-permissions)
-   [Read api tokens.](#read)
-   [Set API token enabled.](#set-enabled)
-   [Set user permissions.](#set-permissions)
-   [Set user permissions.](#update-permissions)

<a id="create"></a>

### Generate new API token.

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

### Remove API token.

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

### Get user permissions.

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

### Read api tokens.

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

### Set API token enabled.

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

### Set user permissions.

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

### Set user permissions.

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

## Profile.

Methods:

-   [Read authenticated used profile.](#read)
-   [Set user email.](#set-email)
-   [Set user telegram name.](#set-telegram-username)

<a id="read"></a>

### Read authenticated used profile.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/profile/read" );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/profile/read"
```

<!-- tabs:end -->

**Permissions**

-   "user" - any authenticated user;

**Parameters**

Method require no parameters.

<a id="set-email"></a>

### Set user email.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/profile/set-email", [email] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/profile/set-email"
```

<!-- tabs:end -->

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **email** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="set-telegram-username"></a>

### Set user telegram name.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/profile/set-telegram-username", [username] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/profile/set-telegram-username"
```

<!-- tabs:end -->

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **username** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

## Session.

Methods:

-   [Confirm user email using email confirmation token.](#confirm-email-by-token)
-   [Send confirmation email.](#send-confirmation-email)
-   [Send password reset email.](#send-password-reset-email)
-   [Set user password using password recovery token.](#set-password-by-token)
-   [Signin user.](#signin)
-   [Signout user, remove user session.](#signout)
-   [Signup user.](#signup)

<a id="confirm-email-by-token"></a>

### Confirm user email using email confirmation token.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/confirm-email-by-token", token );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/confirm-email-by-token"
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **token** `[required]` - Email confirmation token.

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="send-confirmation-email"></a>

### Send confirmation email.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/send-confirmation-email", user_id );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/send-confirmation-email"
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **user_id** `[required]` - User name or email.

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="send-password-reset-email"></a>

### Send password reset email.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/send-password-reset-email", user_id );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/send-password-reset-email"
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **user_id** `[required]` - User name or email.

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="set-password-by-token"></a>

### Set user password using password recovery token.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/set-password-by-token", token, password );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/set-password-by-token"
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **token** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

-   **password** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="signin"></a>

### Signin user.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/signin", [credentials], [signinPermissions] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/signin"
```

<!-- tabs:end -->

If `credentials` parameter is specified - will try to sign in user using username and password, otherwise will try to sign in user, using currently used api token.

**Returns**:

-   `200`: Sign in successfully.

-   `401`: Bad credentials.

-   `403`: Not authorized.

-   Any other status means bad request, internal or connection error. Refer to the response `reason` property for more information.

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **credentials** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    properties:
        username:
            type: string
        password:
            type: string
    required:
        - username
        - password
    additionalProperties: false
    ```

-   **signinPermissions** `[not required]` - Array of permissions. Only user, who has this permissions can sign in. If `null` permissions will not check.

    <!-- prettier-ignore -->
    ```yaml
    anyOf:
        -
            type: "null"
        -
            type: array
            items:
                type: string
    ```

<a id="signout"></a>

### Signout user, remove user session.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/signout" );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/signout"
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

**Parameters**

Method require no parameters.

<a id="signup"></a>

### Signup user.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/signup", fields );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/signup"
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

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
        email:
            type: string
        telegram_name:
            type: string
    required:
        - username
    ```

## Test.

Methods:

-   [Test method.](#test)
-   [Test method.](#upload)

<a id="test"></a>

### Test method.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/test/test", [args] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/test/test"
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **args** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="upload"></a>

### Test method.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/test/upload", [request], [data] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/test/upload"
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **request** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```

-   **data** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```
