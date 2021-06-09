# RPC v1

## Test

Methods:

-   [Test method](#test-test)
-   [Test upload](#test-upload)

<a id="test-test"></a>

### Test method

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/test/test", [args] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/test/test"
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

<a id="test-upload"></a>

### Test upload

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/test/upload", [request], [data] );
```

#### **cURL**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/test/upload"
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
