# /v1/admin/settings

App settings.

-   [Methods](#methods)
    -   [**read** - Read application settings.](#/v1/admin/settings/read)
    -   [**test-smtp** - Test SMTP server settings.](#/v1/admin/settings/test-smtp)
    -   [**update** - Update application settings.](#/v1/admin/settings/update)

<a id="methods"></a>

# Methods

<a id="/v1/admin/settings/read"></a>

## read

Read application settings.

```
const res = await api.call( "/v1/admin/settings/read" );
```

#### Permissions

-   "admin";

#### Parameters

Method require no parameters.

<a id="/v1/admin/settings/test-smtp"></a>

## test-smtp

Test SMTP server settings.

```
const res = await api.call( "/v1/admin/settings/test-smtp", settings );
```

#### Permissions

-   "admin";

#### Parameters

-   **settings** `[required]`

    ```
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

<a id="/v1/admin/settings/update"></a>

## update

Update application settings.

```
const res = await api.call( "/v1/admin/settings/update", settings );
```

#### Permissions

-   "admin";

#### Parameters

-   **settings** `[required]` - application settings object

    ```
    type: object
    ```
