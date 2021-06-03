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

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/test/test", [args] );
```

#### **curl**

<!-- prettier-ignore -->
```sh
curl -X POST ...
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **args** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="upload"></a>

## upload

Test method.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/test/upload", [request], [data] );
```

#### **curl**

<!-- prettier-ignore -->
```sh
curl -X POST ...
```

<!-- tabs:end -->

**Permissions**

-   "\*" - any connected user;

**Parameters**

-   **request** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```

-   **data** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```
