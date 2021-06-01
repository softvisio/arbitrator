# /v1/admin/api-call-log

App API call log.

-   [Methods](#methods)
    -   [**read-history-stat** - Read statistics for the given API method for the last 30 days.](#/v1/admin/api-call-log/read-history-stat)
    -   [**read-latest-stat** - Read statistics for the last 60 minutes.](#/v1/admin/api-call-log/read-latest-stat)
    -   [**read-log** - Read users.](#/v1/admin/api-call-log/read-log)

<a id="methods"></a>

# Methods

<a id="/v1/admin/api-call-log/read-history-stat"></a>

## read-history-stat

Read statistics for the given API method for the last 30 days.

```
const res = await api.call( "/v1/admin/api-call-log/read-history-stat", method_id );
```

Statistics updated every 1 minute. Data resolution is 10 minutes.

#### Permissions

-   "admin";

#### Parameters

-   **method_id** `[required]`

    ```
    type: string
    ```

<a id="/v1/admin/api-call-log/read-latest-stat"></a>

## read-latest-stat

Read statistics for the last 60 minutes.

```
const res = await api.call( "/v1/admin/api-call-log/read-latest-stat", [method_id] );
```

Statistics updated every 10 seconds. Data resolution is 1 minute.

#### Permissions

-   "admin";

#### Parameters

-   **method_id** `[not required]`

    ```
    type: string
    ```

<a id="/v1/admin/api-call-log/read-log"></a>

## read-log

Read users.

```
const res = await api.call( "/v1/admin/api-call-log/read-log", [options] );
```

#### Permissions

-   "admin";

#### Parameters

-   **options** `[not required]`

    ```
    apiRead:
        method_id:
            type: string
            conditions:
                - "="
            required: true
    ```
