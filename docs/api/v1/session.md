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

```js
const res = await api.call("/v1/session/confirm-email-by-token", token);
```

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **token** `[required]` - Email confirmation token.

    ```yaml
    type: string
    ```

<a id="send-confirmation-email"></a>

## send-confirmation-email

Send confirmation email.

```js
const res = await api.call("/v1/session/send-confirmation-email", user_id);
```

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **user_id** `[required]` - User name or email.

    ```yaml
    type: string
    ```

<a id="send-password-reset-email"></a>

## send-password-reset-email

Send password reset email.

```js
const res = await api.call("/v1/session/send-password-reset-email", user_id);
```

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **user_id** `[required]` - User name or email.

    ```yaml
    type: string
    ```

<a id="set-password-by-token"></a>

## set-password-by-token

Set user password using password recovery token.

```js
const res = await api.call("/v1/session/set-password-by-token", token, password);
```

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **token** `[required]`

    ```yaml
    type: string
    ```

-   **password** `[required]`

    ```yaml
    type: string
    ```

<a id="signin"></a>

## signin

Signin user.

```js
const res = await api.call("/v1/session/signin", [credentials], [signinPermissions]);
```

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

    ```yaml
    anyOf:
        - type: "null"
        - type: array
          items:
              type: string
    ```

<a id="signout"></a>

## signout

Signout user, remove user session.

```js
const res = await api.call("/v1/session/signout");
```

**Permissions**

-   "\*" - any connected user;

**Parameters**

Method require no parameters.

<a id="signup"></a>

## signup

Signup user.

```js
const res = await api.call("/v1/session/signup", fields);
```

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **fields** `[required]`

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
