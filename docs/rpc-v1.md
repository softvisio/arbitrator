# RPC v1

### API connect URLs

-   API HTTP URL: `https://arbitrator:8080/`
-   API WebSockets URL: `wss://arbitrator:8080/`

<!-- tabs:start -->

#### **WebSockets**

<!-- prettier-ignore -->
```javascript
const api = API.new( "wss://arbitrator:8080/" )
```

#### **HTTP**

<!-- prettier-ignore -->
```javascript
const api = API.new( "https://arbitrator:8080/" )
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
    "https://arbitrator:8080/v1/test/test"
```

<!-- tabs:end -->

-   `args?` <string\> Parameter summary.

    Parameter description, Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.

    Support for all browsers
    Fast and reliable execution
    Powerful automation capabilities
    Integrates with your workflow
    Limitations
    Release notes

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
    "https://arbitrator:8080/v1/test/upload"
```

<!-- tabs:end -->

-   `file` <File> Uploaded file. Maximim file size: `52428800` bytes. Allowed content types: `"text/plain"`, `"text/html"`.

-   `data?` <Object\>
