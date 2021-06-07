# /v1/session

Session.

-   [Methods](#methods)
    -   [confirm-email-by-token](#confirm-email-by-token) - Confirm user email using email confirmation token.
    -   [send-confirmation-email](#send-confirmation-email) - Send confirmation email.
    -   [send-password-reset-email](#send-password-reset-email) - Send password reset email.
    -   [set-password-by-token](#set-password-by-token) - Set user password using password recovery token.
    -   [signin](#signin) - Signin user.
    -   [signout](#signout) - Signout user, remove user session.
    -   [signup](#signup) - Signup user.

<a id="methods"></a>

# Methods

<a id="confirm-email-by-token"></a>

## confirm-email-by-token

Confirm user email using email confirmation token.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/confirm-email-by-token", token );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
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

## send-confirmation-email

Send confirmation email.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/send-confirmation-email", user_id );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
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

## send-password-reset-email

Send password reset email.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/send-password-reset-email", user_id );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
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

## set-password-by-token

Set user password using password recovery token.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/set-password-by-token", token, password );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
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

## signin

Signin user.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/signin", [credentials], [signinPermissions] );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
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

## signout

Signout user, remove user session.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/signout" );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
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

## signup

Signup user.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/session/signup", fields );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
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
