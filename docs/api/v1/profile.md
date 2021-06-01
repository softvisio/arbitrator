# /v1/profile

Profile.

-   [Methods](#methods)
    -   [**read** - Read authenticated used profile.](#read)
    -   [**set-email** - Set user email.](#set-email)
    -   [**set-telegram-username** - Set user telegram name.](#set-telegram-username)

<a id="methods"></a>

# Methods

<a id="read"></a>

## read

Read authenticated used profile.

```js
const res = await api.call("/v1/profile/read");
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

Method require no parameters.

<a id="set-email"></a>

## set-email

Set user email.

```js
const res = await api.call("/v1/profile/set-email", [email]);
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **email** `[not required]`

    ```yaml
    type: string
    ```

<a id="set-telegram-username"></a>

## set-telegram-username

Set user telegram name.

```js
const res = await api.call("/v1/profile/set-telegram-username", [username]);
```

#### Permissions

-   "user" - any authenticated user;

#### Parameters

-   **username** `[not required]`

    ```yaml
    type: string
    ```
