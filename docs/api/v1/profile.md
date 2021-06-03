# /v1/profile

Profile.

-   [Methods](#methods)
    -   [read](#read) - Read authenticated used profile.
    -   [set-email](#set-email) - Set user email.
    -   [set-telegram-username](#set-telegram-username) - Set user telegram name.

<a id="methods"></a>

# Methods

<a id="read"></a>

## read

Read authenticated used profile.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/profile/read" );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

Method require no parameters.

<a id="set-email"></a>

## set-email

Set user email.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/profile/set-email", [email] );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **email** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="set-telegram-username"></a>

## set-telegram-username

Set user telegram name.

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/profile/set-telegram-username", [username] );
```

**Permissions**

-   "user" - any authenticated user;

**Parameters**

-   **username** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```
