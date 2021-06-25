# RPC v1

## Test

Methods:

-   [Test](#test-1)
-   [Test upload](#test-upload)

### Test

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/test/test", [args], [test] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/test/test"
```

<!-- tabs:end -->

Playwright methods might throw errors if they are unable to fulfill a request. For example, page.waitForSelector(selector[, options]) might fail if the selector doesn't match any nodes during the given timeframe.

For certain types of errors Playwright uses specific error classes. These classes are available via playwright.errors.

**Parameters:**

-   **`args?`** <string\> Parameter summary.

    Parameter description, Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.

    Support for all browsers
    Fast and reliable execution
    Powerful automation capabilities
    Integrates with your workflow
    Limitations
    Release notes

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

-   **`test?`** <Object\> Test parameter.

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```

### Test upload

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/test/upload", request, [data] );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/test/upload"
```

<!-- tabs:end -->

**Parameters:**

-   **`request`** <Object\>

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```

-   **`data?`** <Object\>

    <!-- prettier-ignore -->
    ```yaml
    type: object
    ```
