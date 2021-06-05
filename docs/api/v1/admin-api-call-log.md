# /v1/admin/api-call-log

App API call log.

-   [Methods](#methods)
    -   [read-history-stat](#read-history-stat) - Read statistics for the given API method for the last 30 days.
    -   [read-latest-stat](#read-latest-stat) - Read statistics for the last 60 minutes.
    -   [read-log](#read-log) - Read users.

<a id="methods"></a>

# Methods

<a id="read-history-stat"></a>

## read-history-stat

Read statistics for the given API method for the last 30 days.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/api-call-log/read-history-stat", method_id );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
curl -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/api-call-log/read-history-stat"
```

<!-- tabs:end -->

Statistics updated every 1 minute. Data resolution is 10 minutes.

**Permissions**

-   "admin";

**Parameters**

-   **method_id** `[required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="read-latest-stat"></a>

## read-latest-stat

Read statistics for the last 60 minutes.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/api-call-log/read-latest-stat", [method_id] );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
curl -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/api-call-log/read-latest-stat"
```

<!-- tabs:end -->

Statistics updated every 10 seconds. Data resolution is 1 minute.

**Permissions**

-   "admin";

**Parameters**

-   **method_id** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    type: string
    ```

<a id="read-log"></a>

## read-log

Read users.

<!-- tabs:start -->

#### **JavaScript**

<!-- prettier-ignore -->
```js
const res = await api.call( "/v1/admin/api-call-log/read-log", [options] );
```

#### **cURL**

<!-- prettier-ignore -->
```sh
curl -X POST \
    -H "Authorization: Basic <YOUR-API-TOKEN>" \
    -H "Content-Type: application/json" \
    -d '[...PARAMETERS]' \
    "https://api.domain.com/v1/admin/api-call-log/read-log"
```

<!-- tabs:end -->

**Permissions**

-   "admin";

**Parameters**

-   **options** `[not required]`

    <!-- prettier-ignore -->
    ```yaml
    apiRead:
        method_id:
            type: string
            conditions:
                - "="
            required: true
    ```
