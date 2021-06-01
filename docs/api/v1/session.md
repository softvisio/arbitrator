# /v1/session

Session.

-   [Methods](#methods)
    -   [**confirm-email-by-token** - Confirm user email using email confirmation token.](#/v1/session/confirm-email-by-token)
    -   [**send-confirmation-email** - Send confirmation email.](#/v1/session/send-confirmation-email)
    -   [**send-password-reset-email** - Send password reset email.](#/v1/session/send-password-reset-email)
    -   [**set-password-by-token** - Set user password using password recovery token.](#/v1/session/set-password-by-token)
    -   [**signin** - Signin user.](#/v1/session/signin)
    -   [**signout** - Signout user, remove user session.](#/v1/session/signout)
    -   [**signup** - Signup user.](#/v1/session/signup)

<a id="methods"></a>

# Methods

<a id="/v1/session/confirm-email-by-token"></a>

## confirm-email-by-token

Confirm user email using email confirmation token.

```
const res = await api.call( "/v1/session/confirm-email-by-token", token );
```

#### Permissions

-   "\*" - any connected user;

#### Parameters

-   **token** `[required]` - Email confirmation token.

    ```
    type: string
    ```

<a id="/v1/session/send-confirmation-email"></a>

## send-confirmation-email

Send confirmation email.

```
const res = await api.call( "/v1/session/send-confirmation-email", user_id );
```

#### Permissions

-   "\*" - any connected user;

#### Parameters

-   **user_id** `[required]` - User name or email.

    ```
    type: string
    ```

<a id="/v1/session/send-password-reset-email"></a>

## send-password-reset-email

Send password reset email.

```
const res = await api.call( "/v1/session/send-password-reset-email", user_id );
```

#### Permissions

-   "\*" - any connected user;

#### Parameters

-   **user_id** `[required]` - User name or email.

    ```
    type: string
    ```

<a id="/v1/session/set-password-by-token"></a>

## set-password-by-token

Set user password using password recovery token.

```
const res = await api.call( "/v1/session/set-password-by-token", token, password );
```

#### Permissions

-   "\*" - any connected user;

#### Parameters

-   **token** `[required]`

    ```
    type: string
    ```

-   **password** `[required]`

    ```
    type: string
    ```

<a id="/v1/session/signin"></a>

## signin

Signin user.

```
const res = await api.call( "/v1/session/signin", [credentials], [signinPermissions] );
```

If `credentials` parameter is specified - will try to sign in user using username and password, otherwise will try to sign in user, using currently used api token.

**Returns**:

-   `200`: Sign in successfully.

-   `401`: Bad credentials.

-   `403`: Not authorized.

-   Any other status means bad request, internal or connection error. Refer to the response `reason` property for more information.

#### Permissions

-   "\*" - any connected user;

#### Parameters

-   **credentials** `[not required]`

    ```
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

    ```
    anyOf:
        -
            type: "null"
        -
            type: array
            items:
                type: string
    ```

<a id="/v1/session/signout"></a>

## signout

Signout user, remove user session.

```
const res = await api.call( "/v1/session/signout" );
```

#### Permissions

-   "\*" - any connected user;

#### Parameters

Method require no parameters.

<a id="/v1/session/signup"></a>

## signup

Signup user.

```
const res = await api.call( "/v1/session/signup", fields );
```

#### Permissions

-   "\*" - any connected user;

#### Parameters

-   **fields** `[required]`

    ```
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
