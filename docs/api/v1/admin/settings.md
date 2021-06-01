# /v1/admin/settings

App settings.

-   [Methods](#methods)
    -   [**read** - Read application settings.](#read)
    -   [**test-smtp** - Test SMTP server settings.](#test-smtp)
    -   [**update** - Update application settings.](#update)

<a id="methods"></a>

# Methods

<a id="read"></a>

## read

Read application settings.

```js
const res = await api.call("/v1/admin/settings/read");
```

#### Permissions

-   "admin";

#### Parameters

Method require no parameters.

<a id="test-smtp"></a>

## test-smtp

Test SMTP server settings.

```js
const res = await api.call("/v1/admin/settings/test-smtp", settings);
```

#### Permissions

-   "admin";

#### Parameters

-   **settings** `[required]`

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

## update

Update application settings.

```js
const res = await api.call("/v1/admin/settings/update", settings);
```

#### Permissions

-   "admin";

#### Parameters

-   **settings** `[required]` - application settings object

    ```yaml
    type: object
    ```
