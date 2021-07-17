# API v1

### API connect URLs

-   API HTTP URL: `https://arbitrator.net/api/`
-   API WebSockets URL: `wss://arbitrator.net/api/`

<!-- tabs:start -->

#### **WebSockets**

<!-- prettier-ignore -->
```javascript
const api = API.new( "wss://arbitrator.net/api/" )
```

#### **HTTP**

<!-- prettier-ignore -->
```javascript
const api = API.new( "https://arbitrator.net/api/" )
```

<!-- tabs:end -->

## Application API call log

### Read API method access log

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/api-call-log/read-log", options? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[options?]' \
    "https://arbitrator.net/api/v1/admin/api-call-log/read-log"
```

<!-- tabs:end -->

-   `options?` <Object\>
    -   `where` <Object\> Set of fields filters:
        -   `method_id` <Array\> **Required**. Filter by the `method_id` field value:
            -   `operator` <string\> Filter operator, one of the: `"="`.
            -   `value` <string\> Field value.
    -   `offset` <integer\> Return result, starting from the specified row. `0` - from the first row. **Default:** `0`.
    -   `limit` <integer\> Max rows to return.
        Example (this is abstract data structure example, not related to the current method):
    ```json
    {
        "where": {
            "field_a": [">=", 100],
            "field_b": ["!=", null],
            "field_c": ["=", "string"]
        },
        "order_by": [
            ["field_a", "asc"],
            ["field_b", "desc"]
        ],
        "offset": 100,
        "limit": 50
    }
    ```
-   **Method access permissions:** `admin`.

### Read statistics for the last 60 minutes

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/api-call-log/read-latest-stat", method_id? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[method_id?]' \
    "https://arbitrator.net/api/v1/admin/api-call-log/read-latest-stat"
```

<!-- tabs:end -->

-   `method_id?` <string\>
-   **Method access permissions:** `admin`.

Statistics updated every 10 seconds. Data resolution is 1 minute.

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
    -d '[method_id]' \
    "https://arbitrator.net/api/v1/admin/api-call-log/read-history-stat"
```

<!-- tabs:end -->

-   `method_id` <string\>
-   **Method access permissions:** `admin`.

Statistics updated every 1 minute. Data resolution is 10 minutes.

## Application users management

### Read users

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/read", options? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[options?]' \
    "https://arbitrator.net/api/v1/admin/users/read"
```

<!-- tabs:end -->

-   `options?` <Object\>
    -   `where` <Object\> Set of fields filters:
        -   `id` <Array\> Filter by the `id` field value:
            -   `operator` <string\> Filter operator, one of the: `"="`.
            -   `value` <string\> Field value.
        -   `search` <Array\> Filter by the `search` field value:
            -   `operator` <string\> Filter operator, one of the: `"like"`.
            -   `value` <string\> Field value.
    -   `order_by` <Array\> Array of the sort conditions:
        -   `field` <string\> Field to sort by, possible fields: `"id"`, `"name"`, `"created"`, `"enabled"`.
        -   `direction` <string\> Sort direction, can be one of the: `"asc"`, `"desc"`. **Default:** `"asc"`.
    -   `offset` <integer\> Return result, starting from the specified row. `0` - from the first row. **Default:** `0`.
    -   `limit` <integer\> Max rows to return.
        Example (this is abstract data structure example, not related to the current method):
    ```json
    {
        "where": {
            "field_a": [">=", 100],
            "field_b": ["!=", null],
            "field_c": ["=", "string"]
        },
        "order_by": [
            ["field_a", "asc"],
            ["field_b", "desc"]
        ],
        "offset": 100,
        "limit": 50
    }
    ```
-   **Method access permissions:** `admin`.

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
    -d '[fields]' \
    "https://arbitrator.net/api/v1/admin/users/create"
```

<!-- tabs:end -->

-   `fields` <Object\>
-   **Method access permissions:** `admin`.

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
    -d '[user_id]' \
    "https://arbitrator.net/api/v1/admin/users/delete"
```

<!-- tabs:end -->

-   `user_id` <string\>
-   **Method access permissions:** `admin`.

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
    -d '[user_id, enabled]' \
    "https://arbitrator.net/api/v1/admin/users/set-enabled"
```

<!-- tabs:end -->

-   `user_id` <string\> User id or name.

-   `enabled` <boolean\>
-   **Method access permissions:** `admin`.

### Set user password

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/set-password", user_id, pasword? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[user_id, pasword?]' \
    "https://arbitrator.net/api/v1/admin/users/set-password"
```

<!-- tabs:end -->

-   `user_id` <string\> User id or name.

-   `pasword?` <string\>
-   **Method access permissions:** `admin`.

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
    -d '[user_id]' \
    "https://arbitrator.net/api/v1/admin/users/get-permissions"
```

<!-- tabs:end -->

-   `user_id` <string\>
-   **Method access permissions:** `admin`.

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
    -d '[user_id, permissions]' \
    "https://arbitrator.net/api/v1/admin/users/set-permissions"
```

<!-- tabs:end -->

-   `user_id` <string\>

-   `permissions` <Object\>
-   **Method access permissions:** `admin`.

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
    -d '[user_id, permissions]' \
    "https://arbitrator.net/api/v1/admin/users/update-permissions"
```

<!-- tabs:end -->

-   `user_id` <string\>

-   `permissions` <Object\>
-   **Method access permissions:** `admin`.

### Suggest user name

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/suggest", options? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[options?]' \
    "https://arbitrator.net/api/v1/admin/users/suggest"
```

<!-- tabs:end -->

-   `options?` <Object\>
-   **Method access permissions:** `admin`.

### Change user name

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/set-username", user_id, new_username, new_password? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[user_id, new_username, new_password?]' \
    "https://arbitrator.net/api/v1/admin/users/set-username"
```

<!-- tabs:end -->

-   `user_id` <string\>

-   `new_username` <string\>

-   `new_password?` <string\>
-   **Method access permissions:** `admin`.

## API access tokens

### Read tokens

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/api-tokens/read", options? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[options?]' \
    "https://arbitrator.net/api/v1/api-tokens/read"
```

<!-- tabs:end -->

-   `options?` <Object\>
-   **Method access permissions:** `user`.

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
    -d '[name]' \
    "https://arbitrator.net/api/v1/api-tokens/create"
```

<!-- tabs:end -->

-   `name` <string\>
-   **Method access permissions:** `user`.

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
    -d '[token_id]' \
    "https://arbitrator.net/api/v1/api-tokens/delete"
```

<!-- tabs:end -->

-   `token_id` <string\>
-   **Method access permissions:** `user`.

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
    -d '[token_id, enabled]' \
    "https://arbitrator.net/api/v1/api-tokens/set-enabled"
```

<!-- tabs:end -->

-   `token_id` <string\>

-   `enabled` <boolean\>
-   **Method access permissions:** `user`.

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
    -d '[token_id]' \
    "https://arbitrator.net/api/v1/api-tokens/get-permissions"
```

<!-- tabs:end -->

-   `token_id` <string\>
-   **Method access permissions:** `user`.

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
    -d '[token_id, permissions]' \
    "https://arbitrator.net/api/v1/api-tokens/set-permissions"
```

<!-- tabs:end -->

-   `token_id` <string\> Token ID.

-   `permissions` <Object\> Object contains permissions to set:
    -   Key <string\> Permission name.
    -   Value <boolean\> `true` to enable permission.
-   **Method access permissions:** `user`.

Set API token permissions. Old permissions will be replaced with the new.

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
    -d '[token_id, permissions]' \
    "https://arbitrator.net/api/v1/api-tokens/update-permissions"
```

<!-- tabs:end -->

-   `token_id` <string\> Token ID.

-   `permissions` <Object\> Object contains permissions to update:
    -   Key <string\> Permission name.
    -   Value <boolean\> `true` to enable permission.
-   **Method access permissions:** `user`.

Update token permissions. Permissions will be added or replaced.

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
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    "https://arbitrator.net/api/v1/profile/read"
```

<!-- tabs:end -->

### Set user email

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/set-email", email? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[email?]' \
    "https://arbitrator.net/api/v1/profile/set-email"
```

<!-- tabs:end -->

-   `email?` <string\> Email address to set, if not specified, current email address will be removed.
-   **Method access permissions:** `user`.

### Set user telegram name

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/set-telegram-username", telegram_username? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[telegram_username?]' \
    "https://arbitrator.net/api/v1/profile/set-telegram-username"
```

<!-- tabs:end -->

-   `telegram_username?` <string\> Telegram username to set, if not specified current telegram user name will be removed.
-   **Method access permissions:** `user`.

## Session

### Signin

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/signin", credentials?, signin_permissions? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[credentials?, signin_permissions?]' \
    "https://arbitrator.net/api/v1/session/signin"
```

<!-- tabs:end -->

-   `credentials?` <Object\>

-   `signin_permissions?` <null\> | <Array\> Array of permissions. Only user, who has this permissions can sign in. If `null` permissions will not check.
-   **Method access permissions:** `*`.

If `credentials` parameter is specified - will try to sign in user using username and password, otherwise will try to sign in user, using currently used api token.

**Returns**:

-   `200`: Sign in successfully.

-   `401`: Bad credentials.

-   `403`: Not authorized.

-   Any other status means bad request, internal or connection error. Refer to the response `statusText` property for more information.

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
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    "https://arbitrator.net/api/v1/session/signout"
```

<!-- tabs:end -->

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
    -d '[fields]' \
    "https://arbitrator.net/api/v1/session/signup"
```

<!-- tabs:end -->

-   `fields` <Object\>
-   **Method access permissions:** `*`.

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
    -d '[user_id]' \
    "https://arbitrator.net/api/v1/session/send-confirmation-email"
```

<!-- tabs:end -->

-   `user_id` <string\> User name or email.
-   **Method access permissions:** `*`.

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
    -d '[token]' \
    "https://arbitrator.net/api/v1/session/confirm-email-by-token"
```

<!-- tabs:end -->

-   `token` <string\> Email confirmation token.
-   **Method access permissions:** `*`.

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
    -d '[user_id]' \
    "https://arbitrator.net/api/v1/session/send-password-reset-email"
```

<!-- tabs:end -->

-   `user_id` <string\> User name or email.
-   **Method access permissions:** `*`.

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
    -d '[token, password]' \
    "https://arbitrator.net/api/v1/session/set-password-by-token"
```

<!-- tabs:end -->

-   `token` <string\>

-   `password` <string\>
-   **Method access permissions:** `*`.

## Test

### Test

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/test/test", args? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[args?]' \
    "https://arbitrator.net/api/v1/test/test"
```

<!-- tabs:end -->

-   `args?` <string\>
-   **Method access permissions:** `*`.

### Test upload

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/test/upload", file?, data? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[file?, data?]' \
    "https://arbitrator.net/api/v1/test/upload"
```

<!-- tabs:end -->

-   `file?` <File\>

-   `data?` <string\> | <Object\>
-   **Method access permissions:** `*`.
