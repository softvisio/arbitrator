# /v1/admin/settings

App settings.

-   [Methods](#methods)
    -   [read](#read) - Read application settings.
    -   [test-smtp](#test-smtp) - Test SMTP server settings.
    -   [update](#update) - Update application settings.

<a id="methods"></a>

# Methods

<a id="read"></a>

## read

Read application settings.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/settings/read" );
```

#### **curl**

<!-- prettier-ignore -->
```sh
curl -X POST ...
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

Method require no parameters.

<a id="test-smtp"></a>

## test-smtp

Test SMTP server settings.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/settings/test-smtp", settings );
```

#### **curl**

<!-- prettier-ignore -->
```sh
curl -X POST ...
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **settings** `[required]`

    <!-- prettier-ignore -->
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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/settings/update", settings );
```

#### **curl**

<!-- prettier-ignore -->
```sh
curl -X POST ...
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **settings** `[required]` - application settings object

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```
