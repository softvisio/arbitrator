# API v1

### API connect URLs

-   API HTTP URL: `https://arbitrator.net/api/`
-   API WebSockets URL: `wss://arbitrator.net/api/`

<!-- tabs:start -->

#### **WebSockets**

<!-- prettier-ignore -->
```javascript
import Api from "@softvisio/core/api";

const api = Api.new( "wss://arbitrator.net/api/" )
```

#### **HTTP**

<!-- prettier-ignore -->
```javascript
import Api from "@softvisio/core/api";

const api = Api.new( "https://arbitrator.net/api/" )
```

<!-- tabs:end -->

## Application API call log

### Read API method access log

Method access permissions: `"admin"`.

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
            -   <string\> Filter operator, one of the: `"="`.
            -   <string\> Field value.
    -   `offset` <integer\> Return result, starting from the specified row. `0` - from the first row. **Default:** `0`.
    -   `limit` <integer\> Max rows to return. Maximum allowed value: `100`. **Default:** `100`.
    -   Example (this is the abstract data structure example, not related to the current method):
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

### Read statistics for the last 60 minutes

Method access permissions: `"admin"`.

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

Statistics updated every 10 seconds. Data resolution is 1 minute.

### Read statistics for the given API method for the last 30 days

Method access permissions: `"admin"`.

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

Statistics updated every 1 minute. Data resolution is 10 minutes.

## Application users management

### Read users

Method access permissions: `"admin"`.

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
            -   <string\> Filter operator, one of the: `"="`.
            -   <string\> Field value.
        -   `search` <Array\> Filter by the `search` field value:
            -   <string\> Filter operator, one of the: `"like"`.
            -   <string\> Field value.
    -   `order_by` <Array\> Array of the sort conditions. **Default:** `[["name","desc"]]`. Each sort condition must be represented with the two-elements <Array\> with the following structure:
        -   <string\> Field name to sort by, possible fields: `"id"`, `"name"`, `"created"`, `"enabled"`.
        -   <string\> Sort direction, can be `"asc"` or `"desc"`. **Default:** `"asc"`.
    -   `offset` <integer\> Return result, starting from the specified row. `0` - from the first row. **Default:** `0`.
    -   `limit` <integer\> Max rows to return. Maximum allowed value: `100`. **Default:** `100`.
    -   Example (this is the abstract data structure example, not related to the current method):
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

### Create user

Method access permissions: `"admin"`.

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

### Remove user

Method access permissions: `"admin"`.

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

### Set user enabled

Method access permissions: `"admin"`.

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

### Set user password

Method access permissions: `"admin"`.

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

### Get user permissions

Method access permissions: `"admin"`.

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

### Set user permissions

Method access permissions: `"admin"`.

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

### Update user permissions

Method access permissions: `"admin"`.

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

### Suggest user name

Method access permissions: `"admin"`.

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

### Change user name

Method access permissions: `"admin"`.

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

### Delete user sessions

Method access permissions: `"admin"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/delete-sessions", user_id );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[user_id]' \
    "https://arbitrator.net/api/v1/admin/users/delete-sessions"
```

<!-- tabs:end -->

-   `user_id` <string\>

## API access tokens

### Read tokens

Method access permissions: `"user"`.

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

### Generate new token

Method access permissions: `"user"`.

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

### Remove token

Method access permissions: `"user"`.

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

### Set token enabled

Method access permissions: `"user"`.

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

### Get token permissions

Method access permissions: `"user"`.

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

### Set token permissions

Method access permissions: `"user"`.

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

Set API token permissions. Old permissions will be replaced with the new.

### Update token permissions

Method access permissions: `"user"`.

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

Update token permissions. Permissions will be added or replaced.

## Notifications

### Read notifications

Method access permissions: `"*"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/notifications/read", options? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[options?]' \
    "https://arbitrator.net/api/v1/notifications/read"
```

<!-- tabs:end -->

-   `options?` <Object\>
    -   `where` <Object\> Set of fields filters:
        -   `id` <Array\> Filter by the `id` field value:
            -   <string\> Filter operator, one of the: `"="`.
            -   <string\> Field value.
        -   `search` <Array\> Filter by the `search` field value:
            -   <string\> Filter operator, one of the: `"like"`.
            -   <string\> Field value.
    -   `order_by` <Array\> Array of the sort conditions. **Default:** `[["date","desc"]]`. Each sort condition must be represented with the two-elements <Array\> with the following structure:
        -   <string\> Field name to sort by, possible fields: `"id"`, `"name"`, `"created"`, `"enabled"`.
        -   <string\> Sort direction, can be `"asc"` or `"desc"`. **Default:** `"asc"`.
    -   `offset` <integer\> Return result, starting from the specified row. `0` - from the first row. **Default:** `0`.
    -   `limit` <integer\> Max rows to return. Maximum allowed value: `100`. **Default:** `100`.
    -   Example (this is the abstract data structure example, not related to the current method):
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

### Mark UI notifications as read

Method access permissions: `"*"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/notifications/mark-read", notifications? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[notifications?]' \
    "https://arbitrator.net/api/v1/notifications/mark-read"
```

<!-- tabs:end -->

-   `notifications?` <Array\>

### Mark UI notifications as unread

Method access permissions: `"*"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/notifications/mark-unread", notifications? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[notifications?]' \
    "https://arbitrator.net/api/v1/notifications/mark-unread"
```

<!-- tabs:end -->

-   `notifications?` <Array\>

### Delete UI notification

Method access permissions: `"*"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/notifications/delete", notifications? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[notifications?]' \
    "https://arbitrator.net/api/v1/notifications/delete"
```

<!-- tabs:end -->

-   `notifications?` <Array\>

## User profile

### Read user profile

Method access permissions: `"user"`.

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

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/set-password", password );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[password]' \
    "https://arbitrator.net/api/v1/profile/set-password"
```

<!-- tabs:end -->

-   `password` <string\> New password.

### Set user email

Method access permissions: `"user"`.

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

### Set user telegram name

Method access permissions: `"user"`.

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

### Delete sessions

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/delete-sessions" );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    "https://arbitrator.net/api/v1/profile/delete-sessions"
```

<!-- tabs:end -->

## Session

### Signin

Method access permissions: `"*"`.

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

If `credentials` parameter is specified - will try to sign in user using username and password, otherwise will try to sign in user, using currently used api token.

**Returns**:

-   `200`: Sign in successfully.

-   `401`: Bad credentials.

-   `403`: Not authorized.

-   Any other status means bad request, internal or connection error. Refer to the response `statusText` property for more information.

### Signout

Method access permissions: `"*"`.

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

Method access permissions: `"*"`.

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

### Send confirmation email

Method access permissions: `"*"`.

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

### Confirm user email using email confirmation token

Method access permissions: `"*"`.

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

### Send password reset email

Method access permissions: `"*"`.

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

### Set user password using password recovery token

Method access permissions: `"*"`.

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

## Test

### Test

Method access permissions: `"*"`.

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

### Test upload

Method access permissions: `"*"`.

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

-   `file?` <File\> Maximim file size: `∞` bytes.
-   `data?` <string\> | <Object\>
