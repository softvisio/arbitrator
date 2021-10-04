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
const res = await api.call( "/v1/admin/apiCallLog/readLog", options? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[options?]' \
    "https://arbitrator.net/api/v1/admin/apiCallLog/readLog"
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
            "orderBy": [
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
const res = await api.call( "/v1/admin/apiCallLog/readLatestStat", methodId? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[methodId?]' \
    "https://arbitrator.net/api/v1/admin/apiCallLog/readLatestStat"
```

<!-- tabs:end -->

-   `methodId?` <string\>

Statistics updated every 10 seconds. Data resolution is 1 minute.

### Read statistics for the given API method for the last 30 days

Method access permissions: `"admin"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/apiCallLog/readHistoryStat", methodId );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[methodId]' \
    "https://arbitrator.net/api/v1/admin/apiCallLog/readHistoryStat"
```

<!-- tabs:end -->

-   `methodId` <string\>

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
    -   `orderBy` <Array\> Array of the sort conditions. **Default:** `[["name","desc"]]`. Each sort condition must be represented with the two-elements <Array\> with the following structure:
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
            "orderBy": [
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
const res = await api.call( "/v1/admin/users/delete", userId );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId]' \
    "https://arbitrator.net/api/v1/admin/users/delete"
```

<!-- tabs:end -->

-   `userId` <string\>

### Set user enabled

Method access permissions: `"admin"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/setEnabled", userId, enabled );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId, enabled]' \
    "https://arbitrator.net/api/v1/admin/users/setEnabled"
```

<!-- tabs:end -->

-   `userId` <string\> User id or name.
-   `enabled` <boolean\>

### Set user password

Method access permissions: `"admin"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/setPassword", userId, pasword? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId, pasword?]' \
    "https://arbitrator.net/api/v1/admin/users/setPassword"
```

<!-- tabs:end -->

-   `userId` <string\> User id or name.
-   `pasword?` <string\>

### Get user permissions

Method access permissions: `"admin"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/getPermissions", userId );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId]' \
    "https://arbitrator.net/api/v1/admin/users/getPermissions"
```

<!-- tabs:end -->

-   `userId` <string\>

### Set user permissions

Method access permissions: `"admin"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/setPermissions", userId, permissions );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId, permissions]' \
    "https://arbitrator.net/api/v1/admin/users/setPermissions"
```

<!-- tabs:end -->

-   `userId` <string\>
-   `permissions` <Object\>

### Update user permissions

Method access permissions: `"admin"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/updatePermissions", userId, permissions );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId, permissions]' \
    "https://arbitrator.net/api/v1/admin/users/updatePermissions"
```

<!-- tabs:end -->

-   `userId` <string\>
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
const res = await api.call( "/v1/admin/users/setUsername", userId, newUsername, newPassword? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId, newUsername, newPassword?]' \
    "https://arbitrator.net/api/v1/admin/users/setUsername"
```

<!-- tabs:end -->

-   `userId` <string\>
-   `newUsername` <string\>
-   `newPassword?` <string\>

### Delete user sessions

Method access permissions: `"admin"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/admin/users/deleteSessions", userId );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId]' \
    "https://arbitrator.net/api/v1/admin/users/deleteSessions"
```

<!-- tabs:end -->

-   `userId` <string\>

## API access tokens

### Read tokens

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/apiTokens/read", options? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[options?]' \
    "https://arbitrator.net/api/v1/apiTokens/read"
```

<!-- tabs:end -->

-   `options?` <Object\>

### Generate new token

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/apiTokens/create", name );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[name]' \
    "https://arbitrator.net/api/v1/apiTokens/create"
```

<!-- tabs:end -->

-   `name` <string\>

### Remove token

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/apiTokens/delete", tokenId );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[tokenId]' \
    "https://arbitrator.net/api/v1/apiTokens/delete"
```

<!-- tabs:end -->

-   `tokenId` <string\>

### Set token enabled

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/apiTokens/setEnabled", tokenId, enabled );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[tokenId, enabled]' \
    "https://arbitrator.net/api/v1/apiTokens/setEnabled"
```

<!-- tabs:end -->

-   `tokenId` <string\>
-   `enabled` <boolean\>

### Get token permissions

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/apiTokens/getPermissions", tokenId );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[tokenId]' \
    "https://arbitrator.net/api/v1/apiTokens/getPermissions"
```

<!-- tabs:end -->

-   `tokenId` <string\>

### Set token permissions

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/apiTokens/setPermissions", tokenId, permissions );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[tokenId, permissions]' \
    "https://arbitrator.net/api/v1/apiTokens/setPermissions"
```

<!-- tabs:end -->

-   `tokenId` <string\> Token ID.
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
const res = await api.call( "/v1/apiTokens/updatePermissions", tokenId, permissions );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[tokenId, permissions]' \
    "https://arbitrator.net/api/v1/apiTokens/updatePermissions"
```

<!-- tabs:end -->

-   `tokenId` <string\> Token ID.
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
    -   `orderBy` <Array\> Array of the sort conditions. **Default:** `[["date","desc"]]`. Each sort condition must be represented with the two-elements <Array\> with the following structure:
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
            "orderBy": [
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
const res = await api.call( "/v1/notifications/markRead", notifications? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[notifications?]' \
    "https://arbitrator.net/api/v1/notifications/markRead"
```

<!-- tabs:end -->

-   `notifications?` <Array\>

### Mark UI notifications as unread

Method access permissions: `"*"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/notifications/markUnread", notifications? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[notifications?]' \
    "https://arbitrator.net/api/v1/notifications/markUnread"
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
const res = await api.call( "/v1/profile/setPassword", password );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[password]' \
    "https://arbitrator.net/api/v1/profile/setPassword"
```

<!-- tabs:end -->

-   `password` <string\> New password.

### Set user email

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/setEmail", email? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[email?]' \
    "https://arbitrator.net/api/v1/profile/setEmail"
```

<!-- tabs:end -->

-   `email?` <string\> Email address to set, if not specified, current email address will be removed.

### Set user telegram name

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/setTelegramUsername", telegramUsername? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[telegramUsername?]' \
    "https://arbitrator.net/api/v1/profile/setTelegramUsername"
```

<!-- tabs:end -->

-   `telegramUsername?` <string\> Telegram username to set, if not specified current telegram user name will be removed.

### Delete sessions

Method access permissions: `"user"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/profile/deleteSessions" );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    "https://arbitrator.net/api/v1/profile/deleteSessions"
```

<!-- tabs:end -->

## Session

### Signin

Method access permissions: `"*"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/signin", credentials?, signinPermissions? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[credentials?, signinPermissions?]' \
    "https://arbitrator.net/api/v1/session/signin"
```

<!-- tabs:end -->

-   `credentials?` <Object\>
-   `signinPermissions?` <null\> | <Array\> Array of permissions. Only user, who has this permissions can sign in. If `null` permissions will not check.

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
const res = await api.call( "/v1/session/sendConfirmationEmail", userId );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId]' \
    "https://arbitrator.net/api/v1/session/sendConfirmationEmail"
```

<!-- tabs:end -->

-   `userId` <string\> User name or email.

### Confirm user email using email confirmation token

Method access permissions: `"*"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/confirmEmailByToken", token );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[token]' \
    "https://arbitrator.net/api/v1/session/confirmEmailByToken"
```

<!-- tabs:end -->

-   `token` <string\> Email confirmation token.

### Send password reset email

Method access permissions: `"*"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/sendPasswordResetEmail", userId );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[userId]' \
    "https://arbitrator.net/api/v1/session/sendPasswordResetEmail"
```

<!-- tabs:end -->

-   `userId` <string\> User name or email.

### Set user password using password recovery token

Method access permissions: `"*"`.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/session/setPasswordByToken", token, password );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[token, password]' \
    "https://arbitrator.net/api/v1/session/setPasswordByToken"
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
