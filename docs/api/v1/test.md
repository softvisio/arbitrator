# /v1/test

Test.

-   [Methods](#methods)
    -   [**test** - Test method.](#/v1/test/test)
    -   [**upload** - Test method.](#/v1/test/upload)

<a id="methods"></a>

# Methods

<a id="/v1/test/test"></a>

## test

Test method.

```js
const res = await api.call("/v1/test/test", [args]);
```

#### Permissions

-   "\*" - any connected user;

#### Parameters

-   **args** `[not required]`

    ```yaml
    type: string
    ```

<a id="/v1/test/upload"></a>

## upload

Test method.

```js
const res = await api.call("/v1/test/upload", [request], [data]);
```

#### Permissions

-   "\*" - any connected user;

#### Parameters

-   **request** `[not required]`

    ```yaml
    type: object
    ```

-   **data** `[not required]`

    ```yaml
    type: object
    ```
