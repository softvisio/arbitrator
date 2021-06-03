# /v1/test

Test.

-   [Methods](#methods)
    -   [test](#test) - Test method.
    -   [upload](#upload) - Test method.

<a id="methods"></a>

# Methods

<a id="test"></a>

## test

Test method.

```js
const res = await api.call("/v1/test/test", [args]);
```

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **args** `[not required]`

    ```yaml
    type: string
    ```

<a id="upload"></a>

## upload

Test method.

```js
const res = await api.call("/v1/test/upload", [request], [data]);
```

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **request** `[not required]`

    ```yaml
    type: object
    ```

-   **data** `[not required]`

    ```yaml
    type: object
    ```
