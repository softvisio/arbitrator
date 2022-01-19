# RPC v1

### API connect URLs

-   API HTTP URL: `https://arbitrator/api/`
-   API WebSockets URL: `wss://arbitrator/api/`

<!-- tabs:start -->

#### **WebSockets**

<!-- prettier-ignore -->
```javascript
import Api from "@softvisio/core/api";

const api = Api.new( "wss://arbitrator/api/" )
```

#### **HTTP**

<!-- prettier-ignore -->
```javascript
import Api from "@softvisio/core/api";

const api = Api.new( "https://arbitrator/api/" )
```

<!-- tabs:end -->

## Test

### Test

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/test/test", args?, test? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[args?, test?]' \
    "https://arbitrator/api/v1/test/test"
```

<!-- tabs:end -->

-   `args?` <string\> Parameter description. Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.
-   `test?` <Object\> Test parameter.

Playwright methods might throw errors if they are unable to fulfill a request. For example, page.waitForSelector(selector[, options]) might fail if the selector doesn't match any nodes during the given timeframe.

For certain types of errors Playwright uses specific error classes. These classes are available via playwright.errors.

### Test upload

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```javascript
const res = await api.call( "/v1/test/upload", file, data? );
```

#### **Shell**

<!-- prettier-ignore -->
```shell
curl \
    -X POST \
    -H "Authorization: Bearer <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[file, data?]' \
    "https://arbitrator/api/v1/test/upload"
```

<!-- tabs:end -->

-   `file` <File\> Uploaded file. Maximim file size: `52,428,800` bytes. Allowed content types: `"text/html"`, `"text/plain"`.
-   `data?` <Object\>
