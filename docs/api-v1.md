# API v1

## Application API call log

### Read API method access log

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/api-call-log/read-log", [options] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/api-call-log/read-log"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`options?`** <undefined\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    apiRead:
        method_id:
            type: string
            conditions:
                - "="
            required: true
    ```

    </details>

### Read statistics for the last 60 minutes

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/api-call-log/read-latest-stat", [method_id] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/api-call-log/read-latest-stat"
```

<!-- tabs:end -->

Statistics updated every 10 seconds. Data resolution is 1 minute.

**Permissions:** `admin`

**Parameters:**

-   **`method_id?`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Read statistics for the given API method for the last 30 days

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/api-call-log/read-history-stat", method_id );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/api-call-log/read-history-stat"
```

<!-- tabs:end -->

Statistics updated every 1 minute. Data resolution is 10 minutes.

**Permissions:** `admin`

**Parameters:**

-   **`method_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

## Application users management

### Read users

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/read", [options] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/read"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`options?`** <undefined\>

    <details>
        <summary>JSON schema</summary>

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

    </details>

### Create user

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/create", fields );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/create"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`fields`** <Object\>

    <details>
        <summary>JSON schema</summary>

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

    </details>

### Remove user

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/delete", user_id );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/delete"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`user_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Set user enabled

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/set-enabled", user_id, enabled );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/set-enabled"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`user_id`** <string\> User id or name.

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`enabled`** <boolean\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: boolean
    ```

    </details>

### Set user password

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/set-password", user_id, [pasword] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/set-password"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`user_id`** <string\> User id or name.

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`pasword?`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Get user permissions

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/get-permissions", user_id );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/get-permissions"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`user_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Set user permissions

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/set-permissions", user_id, permissions );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/set-permissions"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`user_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`permissions`** <Object\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```

    </details>

### Update user permissions

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/update-permissions", user_id, permissions );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/update-permissions"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`user_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`permissions`** <Object\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```

    </details>

### Suggest user name

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/suggest", [options] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/suggest"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`options?`** <Object\>

    <details>
        <summary>JSON schema</summary>

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

    </details>

### Change user name

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/set-username", user_id, new_username, [new_password] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/users/set-username"
```

<!-- tabs:end -->

**Permissions:** `admin`

**Parameters:**

-   **`user_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`new_username`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`new_password?`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

## API access tokens

### Read tokens

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/api-tokens/read", [options] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/read"
```

<!-- tabs:end -->

**Permissions:** `user`

**Parameters:**

-   **`options?`** <Object\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```

    </details>

### Generate new token

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/api-tokens/create", name );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/create"
```

<!-- tabs:end -->

**Permissions:** `user`

**Parameters:**

-   **`name`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Remove token

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/api-tokens/delete", token_id );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/delete"
```

<!-- tabs:end -->

**Permissions:** `user`

**Parameters:**

-   **`token_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Set token enabled

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/api-tokens/set-enabled", token_id, enabled );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/set-enabled"
```

<!-- tabs:end -->

**Permissions:** `user`

**Parameters:**

-   **`token_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`enabled`** <boolean\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: boolean
    ```

    </details>

### Get token permissions

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/api-tokens/get-permissions", token_id );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/get-permissions"
```

<!-- tabs:end -->

**Permissions:** `user`

**Parameters:**

-   **`token_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Set token permissions

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/api-tokens/set-permissions", token_id, permissions );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/set-permissions"
```

<!-- tabs:end -->

**Permissions:** `user`

**Parameters:**

-   **`token_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`permissions`** <Object\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```

    </details>

### Update token permissions

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/api-tokens/update-permissions", token_id, permissions );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/api-tokens/update-permissions"
```

<!-- tabs:end -->

**Permissions:** `user`

**Parameters:**

-   **`token_id`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`permissions`** <Object\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: object
    additionalProperties:
        type: boolean
    ```

    </details>

## User profile

### Read user profile

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/read" );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/profile/read"
```

<!-- tabs:end -->

**Permissions:** `user`

### Set user email

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/set-email", [email] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/profile/set-email"
```

<!-- tabs:end -->

**Permissions:** `user`

**Parameters:**

-   **`email?`** <string\> Email address to set, if not specified, current email address will be removed.

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Set user telegram name

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/set-telegram-username", [telegram_username] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/profile/set-telegram-username"
```

<!-- tabs:end -->

**Permissions:** `user`

**Parameters:**

-   **`telegram_username?`** <string\> Telegram username to set, if not specified current telegram user name will be removed.

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

## Session

### Signin

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/signin", [credentials], [signin_permissions] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
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

-   Any other status means bad request, internal or connection error. Refer to the response `statusText` property for more information.

**Permissions:** `*`

**Parameters:**

-   **`credentials?`** <Object\>

    <details>
        <summary>JSON schema</summary>

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

    </details>

-   **`signin_permissions?`** <undefined\> Array of permissions. Only user, who has this permissions can sign in. If `null` permissions will not check.

    <details>
        <summary>JSON schema</summary>

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

    </details>

### Signout

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/signout" );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/signout"
```

<!-- tabs:end -->

**Permissions:** `*`

### Signup

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/signup", fields );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/signup"
```

<!-- tabs:end -->

**Permissions:** `*`

**Parameters:**

-   **`fields`** <Object\>

    <details>
        <summary>JSON schema</summary>

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

    </details>

### Send confirmation email

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/send-confirmation-email", user_id );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/send-confirmation-email"
```

<!-- tabs:end -->

**Permissions:** `*`

**Parameters:**

-   **`user_id`** <string\> User name or email.

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Confirm user email using email confirmation token

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/confirm-email-by-token", token );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/confirm-email-by-token"
```

<!-- tabs:end -->

**Permissions:** `*`

**Parameters:**

-   **`token`** <string\> Email confirmation token.

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Send password reset email

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/send-password-reset-email", user_id );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/send-password-reset-email"
```

<!-- tabs:end -->

**Permissions:** `*`

**Parameters:**

-   **`user_id`** <string\> User name or email.

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Set user password using password recovery token

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/set-password-by-token", token, password );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/session/set-password-by-token"
```

<!-- tabs:end -->

**Permissions:** `*`

**Parameters:**

-   **`token`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

-   **`password`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

## Test

### Test

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/test/test", [args] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/test/test"
```

<!-- tabs:end -->

**Permissions:** `*`

**Parameters:**

-   **`args?`** <string\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

    </details>

### Test upload

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/test/upload", [file], [data] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/test/upload"
```

<!-- tabs:end -->

**Permissions:** `*`

**Parameters:**

-   **`file?`** <Object\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```

    </details>

-   **`data?`** <string\> | <Object\>

    <details>
        <summary>JSON schema</summary>

    <!-- prettier-ignore -->
    ```yaml
    type:
        - string
        - object
    ```

    </details>
