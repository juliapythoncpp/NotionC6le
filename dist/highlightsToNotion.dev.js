var highlightsToNotion;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@notionhq/client/build/src/Client.js":
/*!***********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/Client.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Client_auth, _Client_logLevel, _Client_logger, _Client_prefixUrl, _Client_timeoutMs, _Client_notionVersion, _Client_fetch, _Client_agent, _Client_userAgent;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const logging_1 = __webpack_require__(/*! ./logging */ "./node_modules/@notionhq/client/build/src/logging.js");
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/@notionhq/client/build/src/errors.js");
const helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/@notionhq/client/build/src/helpers.js");
const api_endpoints_1 = __webpack_require__(/*! ./api-endpoints */ "./node_modules/@notionhq/client/build/src/api-endpoints.js");
const node_fetch_1 = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
const package_json_1 = __webpack_require__(/*! ../package.json */ "./node_modules/@notionhq/client/build/package.json");
class Client {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f;
        _Client_auth.set(this, void 0);
        _Client_logLevel.set(this, void 0);
        _Client_logger.set(this, void 0);
        _Client_prefixUrl.set(this, void 0);
        _Client_timeoutMs.set(this, void 0);
        _Client_notionVersion.set(this, void 0);
        _Client_fetch.set(this, void 0);
        _Client_agent.set(this, void 0);
        _Client_userAgent.set(this, void 0);
        /*
         * Notion API endpoints
         */
        this.blocks = {
            /**
             * Retrieve block
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getBlock.path(args),
                    method: api_endpoints_1.getBlock.method,
                    query: helpers_1.pick(args, api_endpoints_1.getBlock.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getBlock.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update block
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.updateBlock.path(args),
                    method: api_endpoints_1.updateBlock.method,
                    query: helpers_1.pick(args, api_endpoints_1.updateBlock.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.updateBlock.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Delete block
             */
            delete: (args) => {
                return this.request({
                    path: api_endpoints_1.deleteBlock.path(args),
                    method: api_endpoints_1.deleteBlock.method,
                    query: helpers_1.pick(args, api_endpoints_1.deleteBlock.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.deleteBlock.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            children: {
                /**
                 * Append block children
                 */
                append: (args) => {
                    return this.request({
                        path: api_endpoints_1.appendBlockChildren.path(args),
                        method: api_endpoints_1.appendBlockChildren.method,
                        query: helpers_1.pick(args, api_endpoints_1.appendBlockChildren.queryParams),
                        body: helpers_1.pick(args, api_endpoints_1.appendBlockChildren.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
                /**
                 * Retrieve block children
                 */
                list: (args) => {
                    return this.request({
                        path: api_endpoints_1.listBlockChildren.path(args),
                        method: api_endpoints_1.listBlockChildren.method,
                        query: helpers_1.pick(args, api_endpoints_1.listBlockChildren.queryParams),
                        body: helpers_1.pick(args, api_endpoints_1.listBlockChildren.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
            },
        };
        this.databases = {
            /**
             * List databases
             *
             * @deprecated Please use `search`
             */
            list: (args) => {
                return this.request({
                    path: api_endpoints_1.listDatabases.path(),
                    method: api_endpoints_1.listDatabases.method,
                    query: helpers_1.pick(args, api_endpoints_1.listDatabases.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.listDatabases.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Retrieve a database
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getDatabase.path(args),
                    method: api_endpoints_1.getDatabase.method,
                    query: helpers_1.pick(args, api_endpoints_1.getDatabase.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Query a database
             */
            query: (args) => {
                return this.request({
                    path: api_endpoints_1.queryDatabase.path(args),
                    method: api_endpoints_1.queryDatabase.method,
                    query: helpers_1.pick(args, api_endpoints_1.queryDatabase.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.queryDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Create a database
             */
            create: (args) => {
                return this.request({
                    path: api_endpoints_1.createDatabase.path(),
                    method: api_endpoints_1.createDatabase.method,
                    query: helpers_1.pick(args, api_endpoints_1.createDatabase.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.createDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update a database
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.updateDatabase.path(args),
                    method: api_endpoints_1.updateDatabase.method,
                    query: helpers_1.pick(args, api_endpoints_1.updateDatabase.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.updateDatabase.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        this.pages = {
            /**
             * Create a page
             */
            create: (args) => {
                return this.request({
                    path: api_endpoints_1.createPage.path(),
                    method: api_endpoints_1.createPage.method,
                    query: helpers_1.pick(args, api_endpoints_1.createPage.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.createPage.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Retrieve a page
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getPage.path(args),
                    method: api_endpoints_1.getPage.method,
                    query: helpers_1.pick(args, api_endpoints_1.getPage.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getPage.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Update page properties
             */
            update: (args) => {
                return this.request({
                    path: api_endpoints_1.updatePage.path(args),
                    method: api_endpoints_1.updatePage.method,
                    query: helpers_1.pick(args, api_endpoints_1.updatePage.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.updatePage.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            properties: {
                /**
                 * Retrieve page property
                 */
                retrieve: (args) => {
                    return this.request({
                        path: api_endpoints_1.getPageProperty.path(args),
                        method: api_endpoints_1.getPageProperty.method,
                        query: helpers_1.pick(args, api_endpoints_1.getPageProperty.queryParams),
                        body: helpers_1.pick(args, api_endpoints_1.getPageProperty.bodyParams),
                        auth: args === null || args === void 0 ? void 0 : args.auth,
                    });
                },
            },
        };
        this.users = {
            /**
             * Retrieve a user
             */
            retrieve: (args) => {
                return this.request({
                    path: api_endpoints_1.getUser.path(args),
                    method: api_endpoints_1.getUser.method,
                    query: helpers_1.pick(args, api_endpoints_1.getUser.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getUser.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * List all users
             */
            list: (args) => {
                return this.request({
                    path: api_endpoints_1.listUsers.path(),
                    method: api_endpoints_1.listUsers.method,
                    query: helpers_1.pick(args, api_endpoints_1.listUsers.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.listUsers.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
            /**
             * Get details about bot
             */
            me: (args) => {
                return this.request({
                    path: api_endpoints_1.getSelf.path(),
                    method: api_endpoints_1.getSelf.method,
                    query: helpers_1.pick(args, api_endpoints_1.getSelf.queryParams),
                    body: helpers_1.pick(args, api_endpoints_1.getSelf.bodyParams),
                    auth: args === null || args === void 0 ? void 0 : args.auth,
                });
            },
        };
        __classPrivateFieldSet(this, _Client_auth, options === null || options === void 0 ? void 0 : options.auth, "f");
        __classPrivateFieldSet(this, _Client_logLevel, (_a = options === null || options === void 0 ? void 0 : options.logLevel) !== null && _a !== void 0 ? _a : logging_1.LogLevel.WARN, "f");
        __classPrivateFieldSet(this, _Client_logger, (_b = options === null || options === void 0 ? void 0 : options.logger) !== null && _b !== void 0 ? _b : logging_1.makeConsoleLogger(package_json_1.name), "f");
        __classPrivateFieldSet(this, _Client_prefixUrl, ((_c = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _c !== void 0 ? _c : "https://api.notion.com") + "/v1/", "f");
        __classPrivateFieldSet(this, _Client_timeoutMs, (_d = options === null || options === void 0 ? void 0 : options.timeoutMs) !== null && _d !== void 0 ? _d : 60000, "f");
        __classPrivateFieldSet(this, _Client_notionVersion, (_e = options === null || options === void 0 ? void 0 : options.notionVersion) !== null && _e !== void 0 ? _e : Client.defaultNotionVersion, "f");
        __classPrivateFieldSet(this, _Client_fetch, (_f = options === null || options === void 0 ? void 0 : options.fetch) !== null && _f !== void 0 ? _f : node_fetch_1.default, "f");
        __classPrivateFieldSet(this, _Client_agent, options === null || options === void 0 ? void 0 : options.agent, "f");
        __classPrivateFieldSet(this, _Client_userAgent, `notionhq-client/${package_json_1.version}`, "f");
    }
    /**
     * Sends a request.
     *
     * @param path
     * @param method
     * @param query
     * @param body
     * @returns
     */
    async request({ path, method, query, body, auth, }) {
        this.log(logging_1.LogLevel.INFO, "request start", { method, path });
        // If the body is empty, don't send the body in the HTTP request
        const bodyAsJsonString = !body || Object.entries(body).length === 0
            ? undefined
            : JSON.stringify(body);
        const url = new URL(`${__classPrivateFieldGet(this, _Client_prefixUrl, "f")}${path}`);
        if (query) {
            for (const [key, value] of Object.entries(query)) {
                if (value !== undefined) {
                    url.searchParams.append(key, String(value));
                }
            }
        }
        const headers = {
            ...this.authAsHeaders(auth),
            "Notion-Version": __classPrivateFieldGet(this, _Client_notionVersion, "f"),
            "user-agent": __classPrivateFieldGet(this, _Client_userAgent, "f"),
        };
        if (bodyAsJsonString !== undefined) {
            headers["content-type"] = "application/json";
        }
        try {
            const response = await errors_1.RequestTimeoutError.rejectAfterTimeout(__classPrivateFieldGet(this, _Client_fetch, "f").call(this, url.toString(), {
                method,
                headers,
                body: bodyAsJsonString,
                agent: __classPrivateFieldGet(this, _Client_agent, "f"),
            }), __classPrivateFieldGet(this, _Client_timeoutMs, "f"));
            const responseText = await response.text();
            if (!response.ok) {
                throw errors_1.buildRequestError(response, responseText);
            }
            const responseJson = JSON.parse(responseText);
            this.log(logging_1.LogLevel.INFO, `request success`, { method, path });
            return responseJson;
        }
        catch (error) {
            if (!errors_1.isNotionClientError(error)) {
                throw error;
            }
            // Log the error if it's one of our known error types
            this.log(logging_1.LogLevel.WARN, `request fail`, {
                code: error.code,
                message: error.message,
            });
            if (errors_1.isHTTPResponseError(error)) {
                // The response body may contain sensitive information so it is logged separately at the DEBUG level
                this.log(logging_1.LogLevel.DEBUG, `failed response body`, {
                    body: error.body,
                });
            }
            throw error;
        }
    }
    /**
     * Search
     */
    search(args) {
        return this.request({
            path: api_endpoints_1.search.path(),
            method: api_endpoints_1.search.method,
            query: helpers_1.pick(args, api_endpoints_1.search.queryParams),
            body: helpers_1.pick(args, api_endpoints_1.search.bodyParams),
            auth: args === null || args === void 0 ? void 0 : args.auth,
        });
    }
    /**
     * Emits a log message to the console.
     *
     * @param level The level for this message
     * @param args Arguments to send to the console
     */
    log(level, message, extraInfo) {
        if (logging_1.logLevelSeverity(level) >= logging_1.logLevelSeverity(__classPrivateFieldGet(this, _Client_logLevel, "f"))) {
            __classPrivateFieldGet(this, _Client_logger, "f").call(this, level, message, extraInfo);
        }
    }
    /**
     * Transforms an API key or access token into a headers object suitable for an HTTP request.
     *
     * This method uses the instance's value as the default when the input is undefined. If neither are defined, it returns
     * an empty object
     *
     * @param auth API key or access token
     * @returns headers key-value object
     */
    authAsHeaders(auth) {
        const headers = {};
        const authHeaderValue = auth !== null && auth !== void 0 ? auth : __classPrivateFieldGet(this, _Client_auth, "f");
        if (authHeaderValue !== undefined) {
            headers["authorization"] = `Bearer ${authHeaderValue}`;
        }
        return headers;
    }
}
exports["default"] = Client;
_Client_auth = new WeakMap(), _Client_logLevel = new WeakMap(), _Client_logger = new WeakMap(), _Client_prefixUrl = new WeakMap(), _Client_timeoutMs = new WeakMap(), _Client_notionVersion = new WeakMap(), _Client_fetch = new WeakMap(), _Client_agent = new WeakMap(), _Client_userAgent = new WeakMap();
Client.defaultNotionVersion = "2021-08-16";
//# sourceMappingURL=Client.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/api-endpoints.js":
/*!******************************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/api-endpoints.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// cspell:disable-file
// Note: This is a generated file.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.search = exports.createDatabase = exports.listDatabases = exports.queryDatabase = exports.updateDatabase = exports.getDatabase = exports.appendBlockChildren = exports.listBlockChildren = exports.deleteBlock = exports.updateBlock = exports.getBlock = exports.getPageProperty = exports.updatePage = exports.getPage = exports.createPage = exports.listUsers = exports.getUser = exports.getSelf = void 0;
exports.getSelf = {
    method: "get",
    pathParams: [],
    queryParams: [],
    bodyParams: [],
    path: () => `users/me`,
};
exports.getUser = {
    method: "get",
    pathParams: ["user_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `users/${p.user_id}`,
};
exports.listUsers = {
    method: "get",
    pathParams: [],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: () => `users`,
};
exports.createPage = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["parent", "properties", "icon", "cover", "content", "children"],
    path: () => `pages`,
};
exports.getPage = {
    method: "get",
    pathParams: ["page_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `pages/${p.page_id}`,
};
exports.updatePage = {
    method: "patch",
    pathParams: ["page_id"],
    queryParams: [],
    bodyParams: ["properties", "icon", "cover", "archived"],
    path: (p) => `pages/${p.page_id}`,
};
exports.getPageProperty = {
    method: "get",
    pathParams: ["page_id", "property_id"],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: (p) => `pages/${p.page_id}/properties/${p.property_id}`,
};
exports.getBlock = {
    method: "get",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `blocks/${p.block_id}`,
};
exports.updateBlock = {
    method: "patch",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: [
        "heading_1",
        "type",
        "archived",
        "heading_2",
        "heading_3",
        "embed",
        "bookmark",
        "image",
        "video",
        "pdf",
        "file",
        "audio",
        "code",
        "equation",
        "divider",
        "breadcrumb",
        "table_of_contents",
        "link_to_page",
        "paragraph",
        "bulleted_list_item",
        "numbered_list_item",
        "quote",
        "to_do",
        "toggle",
        "template",
        "callout",
        "synced_block",
    ],
    path: (p) => `blocks/${p.block_id}`,
};
exports.deleteBlock = {
    method: "delete",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `blocks/${p.block_id}`,
};
exports.listBlockChildren = {
    method: "get",
    pathParams: ["block_id"],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: (p) => `blocks/${p.block_id}/children`,
};
exports.appendBlockChildren = {
    method: "patch",
    pathParams: ["block_id"],
    queryParams: [],
    bodyParams: ["children"],
    path: (p) => `blocks/${p.block_id}/children`,
};
exports.getDatabase = {
    method: "get",
    pathParams: ["database_id"],
    queryParams: [],
    bodyParams: [],
    path: (p) => `databases/${p.database_id}`,
};
exports.updateDatabase = {
    method: "patch",
    pathParams: ["database_id"],
    queryParams: [],
    bodyParams: ["title", "icon", "cover", "properties"],
    path: (p) => `databases/${p.database_id}`,
};
exports.queryDatabase = {
    method: "post",
    pathParams: ["database_id"],
    queryParams: [],
    bodyParams: ["sorts", "filter", "start_cursor", "page_size", "archived"],
    path: (p) => `databases/${p.database_id}/query`,
};
exports.listDatabases = {
    method: "get",
    pathParams: [],
    queryParams: ["start_cursor", "page_size"],
    bodyParams: [],
    path: () => `databases`,
};
exports.createDatabase = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["parent", "properties", "icon", "cover", "title"],
    path: () => `databases`,
};
exports.search = {
    method: "post",
    pathParams: [],
    queryParams: [],
    bodyParams: ["sort", "query", "start_cursor", "page_size", "filter"],
    path: () => `search`,
};
//# sourceMappingURL=api-endpoints.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/errors.js":
/*!***********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/errors.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildRequestError = exports.APIResponseError = exports.UnknownHTTPResponseError = exports.isHTTPResponseError = exports.RequestTimeoutError = exports.isNotionClientError = exports.ClientErrorCode = exports.APIErrorCode = void 0;
const helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/@notionhq/client/build/src/helpers.js");
/**
 * Error codes returned in responses from the API.
 */
var APIErrorCode;
(function (APIErrorCode) {
    APIErrorCode["Unauthorized"] = "unauthorized";
    APIErrorCode["RestrictedResource"] = "restricted_resource";
    APIErrorCode["ObjectNotFound"] = "object_not_found";
    APIErrorCode["RateLimited"] = "rate_limited";
    APIErrorCode["InvalidJSON"] = "invalid_json";
    APIErrorCode["InvalidRequestURL"] = "invalid_request_url";
    APIErrorCode["InvalidRequest"] = "invalid_request";
    APIErrorCode["ValidationError"] = "validation_error";
    APIErrorCode["ConflictError"] = "conflict_error";
    APIErrorCode["InternalServerError"] = "internal_server_error";
    APIErrorCode["ServiceUnavailable"] = "service_unavailable";
})(APIErrorCode = exports.APIErrorCode || (exports.APIErrorCode = {}));
/**
 * Error codes generated for client errors.
 */
var ClientErrorCode;
(function (ClientErrorCode) {
    ClientErrorCode["RequestTimeout"] = "notionhq_client_request_timeout";
    ClientErrorCode["ResponseError"] = "notionhq_client_response_error";
})(ClientErrorCode = exports.ClientErrorCode || (exports.ClientErrorCode = {}));
/**
 * Base error type.
 */
class NotionClientErrorBase extends Error {
}
/**
 * @param error any value, usually a caught error.
 * @returns `true` if error is a `NotionClientError`.
 */
function isNotionClientError(error) {
    return helpers_1.isObject(error) && error instanceof NotionClientErrorBase;
}
exports.isNotionClientError = isNotionClientError;
/**
 * Narrows down the types of a NotionClientError.
 * @param error any value, usually a caught error.
 * @param codes an object mapping from possible error codes to `true`
 * @returns `true` if error is a `NotionClientError` with a code in `codes`.
 */
function isNotionClientErrorWithCode(error, codes) {
    return isNotionClientError(error) && error.code in codes;
}
/**
 * Error thrown by the client if a request times out.
 */
class RequestTimeoutError extends NotionClientErrorBase {
    constructor(message = "Request to Notion API has timed out") {
        super(message);
        this.code = ClientErrorCode.RequestTimeout;
        this.name = "RequestTimeoutError";
    }
    static isRequestTimeoutError(error) {
        return isNotionClientErrorWithCode(error, {
            [ClientErrorCode.RequestTimeout]: true,
        });
    }
    static rejectAfterTimeout(promise, timeoutMS) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject(new RequestTimeoutError());
            }, timeoutMS);
            promise
                .then(resolve)
                .catch(reject)
                .then(() => clearTimeout(timeoutId));
        });
    }
}
exports.RequestTimeoutError = RequestTimeoutError;
class HTTPResponseError extends NotionClientErrorBase {
    constructor(args) {
        super(args.message);
        this.name = "HTTPResponseError";
        const { code, status, headers, rawBodyText } = args;
        this.code = code;
        this.status = status;
        this.headers = headers;
        this.body = rawBodyText;
    }
}
const httpResponseErrorCodes = {
    [ClientErrorCode.ResponseError]: true,
    [APIErrorCode.Unauthorized]: true,
    [APIErrorCode.RestrictedResource]: true,
    [APIErrorCode.ObjectNotFound]: true,
    [APIErrorCode.RateLimited]: true,
    [APIErrorCode.InvalidJSON]: true,
    [APIErrorCode.InvalidRequestURL]: true,
    [APIErrorCode.InvalidRequest]: true,
    [APIErrorCode.ValidationError]: true,
    [APIErrorCode.ConflictError]: true,
    [APIErrorCode.InternalServerError]: true,
    [APIErrorCode.ServiceUnavailable]: true,
};
function isHTTPResponseError(error) {
    if (!isNotionClientErrorWithCode(error, httpResponseErrorCodes)) {
        return false;
    }
    return true;
}
exports.isHTTPResponseError = isHTTPResponseError;
/**
 * Error thrown if an API call responds with an unknown error code, or does not respond with
 * a property-formatted error.
 */
class UnknownHTTPResponseError extends HTTPResponseError {
    constructor(args) {
        var _a;
        super({
            ...args,
            code: ClientErrorCode.ResponseError,
            message: (_a = args.message) !== null && _a !== void 0 ? _a : `Request to Notion API failed with status: ${args.status}`,
        });
        this.name = "UnknownHTTPResponseError";
    }
    static isUnknownHTTPResponseError(error) {
        return isNotionClientErrorWithCode(error, {
            [ClientErrorCode.ResponseError]: true,
        });
    }
}
exports.UnknownHTTPResponseError = UnknownHTTPResponseError;
const apiErrorCodes = {
    [APIErrorCode.Unauthorized]: true,
    [APIErrorCode.RestrictedResource]: true,
    [APIErrorCode.ObjectNotFound]: true,
    [APIErrorCode.RateLimited]: true,
    [APIErrorCode.InvalidJSON]: true,
    [APIErrorCode.InvalidRequestURL]: true,
    [APIErrorCode.InvalidRequest]: true,
    [APIErrorCode.ValidationError]: true,
    [APIErrorCode.ConflictError]: true,
    [APIErrorCode.InternalServerError]: true,
    [APIErrorCode.ServiceUnavailable]: true,
};
/**
 * A response from the API indicating a problem.
 * Use the `code` property to handle various kinds of errors. All its possible values are in `APIErrorCode`.
 */
class APIResponseError extends HTTPResponseError {
    constructor() {
        super(...arguments);
        this.name = "APIResponseError";
    }
    static isAPIResponseError(error) {
        return isNotionClientErrorWithCode(error, apiErrorCodes);
    }
}
exports.APIResponseError = APIResponseError;
function buildRequestError(response, bodyText) {
    const apiErrorResponseBody = parseAPIErrorResponseBody(bodyText);
    if (apiErrorResponseBody !== undefined) {
        return new APIResponseError({
            code: apiErrorResponseBody.code,
            message: apiErrorResponseBody.message,
            headers: response.headers,
            status: response.status,
            rawBodyText: bodyText,
        });
    }
    return new UnknownHTTPResponseError({
        message: undefined,
        headers: response.headers,
        status: response.status,
        rawBodyText: bodyText,
    });
}
exports.buildRequestError = buildRequestError;
function parseAPIErrorResponseBody(body) {
    if (typeof body !== "string") {
        return;
    }
    let parsed;
    try {
        parsed = JSON.parse(body);
    }
    catch (parseError) {
        return;
    }
    if (!helpers_1.isObject(parsed) ||
        typeof parsed["message"] !== "string" ||
        !isAPIErrorCode(parsed["code"])) {
        return;
    }
    return {
        ...parsed,
        code: parsed["code"],
        message: parsed["message"],
    };
}
function isAPIErrorCode(code) {
    return typeof code === "string" && code in apiErrorCodes;
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/helpers.js":
/*!************************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/helpers.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isObject = exports.pick = exports.assertNever = void 0;
/**
 * Utility for enforcing exhaustiveness checks in the type system.
 *
 * @see https://basarat.gitbook.io/typescript/type-system/discriminated-unions#throw-in-exhaustive-checks
 *
 * @param value The variable with no remaining values
 */
function assertNever(value) {
    throw new Error(`Unexpected value should never occur: ${value}`);
}
exports.assertNever = assertNever;
function pick(base, keys) {
    const entries = keys.map(key => [key, base === null || base === void 0 ? void 0 : base[key]]);
    return Object.fromEntries(entries);
}
exports.pick = pick;
function isObject(o) {
    return typeof o === "object" && o !== null;
}
exports.isObject = isObject;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNotionClientError = exports.RequestTimeoutError = exports.UnknownHTTPResponseError = exports.APIResponseError = exports.ClientErrorCode = exports.APIErrorCode = exports.LogLevel = exports.Client = void 0;
var Client_1 = __webpack_require__(/*! ./Client */ "./node_modules/@notionhq/client/build/src/Client.js");
Object.defineProperty(exports, "Client", ({ enumerable: true, get: function () { return Client_1.default; } }));
var logging_1 = __webpack_require__(/*! ./logging */ "./node_modules/@notionhq/client/build/src/logging.js");
Object.defineProperty(exports, "LogLevel", ({ enumerable: true, get: function () { return logging_1.LogLevel; } }));
var errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/@notionhq/client/build/src/errors.js");
Object.defineProperty(exports, "APIErrorCode", ({ enumerable: true, get: function () { return errors_1.APIErrorCode; } }));
Object.defineProperty(exports, "ClientErrorCode", ({ enumerable: true, get: function () { return errors_1.ClientErrorCode; } }));
Object.defineProperty(exports, "APIResponseError", ({ enumerable: true, get: function () { return errors_1.APIResponseError; } }));
Object.defineProperty(exports, "UnknownHTTPResponseError", ({ enumerable: true, get: function () { return errors_1.UnknownHTTPResponseError; } }));
Object.defineProperty(exports, "RequestTimeoutError", ({ enumerable: true, get: function () { return errors_1.RequestTimeoutError; } }));
// Error helpers
Object.defineProperty(exports, "isNotionClientError", ({ enumerable: true, get: function () { return errors_1.isNotionClientError; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@notionhq/client/build/src/logging.js":
/*!************************************************************!*\
  !*** ./node_modules/@notionhq/client/build/src/logging.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logLevelSeverity = exports.makeConsoleLogger = exports.LogLevel = void 0;
const helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/@notionhq/client/build/src/helpers.js");
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "debug";
    LogLevel["INFO"] = "info";
    LogLevel["WARN"] = "warn";
    LogLevel["ERROR"] = "error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
function makeConsoleLogger(name) {
    return (level, message, extraInfo) => {
        console[level](`${name} ${level}:`, message, extraInfo);
    };
}
exports.makeConsoleLogger = makeConsoleLogger;
/**
 * Transforms a log level into a comparable (numerical) value ordered by severity.
 */
function logLevelSeverity(level) {
    switch (level) {
        case LogLevel.DEBUG:
            return 20;
        case LogLevel.INFO:
            return 40;
        case LogLevel.WARN:
            return 60;
        case LogLevel.ERROR:
            return 80;
        default:
            return helpers_1.assertNever(level);
    }
}
exports.logLevelSeverity = logLevelSeverity;
//# sourceMappingURL=logging.js.map

/***/ }),

/***/ "./node_modules/crypto-js/aes.js":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/aes.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            var t;

	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));

/***/ }),

/***/ "./node_modules/crypto-js/cipher-core.js":
/*!***********************************************!*\
  !*** ./node_modules/crypto-js/cipher-core.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            var block;

	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            var modeCreator;

	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            var finalProcessedBlocks;

	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            var wordArray;

	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            var salt;

	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));

/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.crypto) {
	        crypto = __webpack_require__.g.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(/*! crypto */ "?9157");
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/enc-base64.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/enc-base64.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),

/***/ "./node_modules/crypto-js/enc-base64url.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/enc-base64url.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64url encoding strategy.
	     */
	    var Base64url = C_enc.Base64url = {
	        /**
	         * Converts a word array to a Base64url string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @param {boolean} urlSafe Whether to use url safe
	         *
	         * @return {string} The Base64url string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
	         */
	        stringify: function (wordArray, urlSafe=true) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = urlSafe ? this._safe_map : this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64url string to a word array.
	         *
	         * @param {string} base64Str The Base64url string.
	         *
	         * @param {boolean} urlSafe Whether to use url safe
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
	         */
	        parse: function (base64Str, urlSafe=true) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = urlSafe ? this._safe_map : this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                reverseMap = this._reverseMap = [];
	                for (var j = 0; j < map.length; j++) {
	                    reverseMap[map.charCodeAt(j)] = j;
	                }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
	        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	        var words = [];
	        var nBytes = 0;
	        for (var i = 0; i < base64StrLength; i++) {
	            if (i % 4) {
	                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	                var bitsCombined = bits1 | bits2;
	                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	                nBytes++;
	            }
	        }
	        return WordArray.create(words, nBytes);
	    }
	}());

	return CryptoJS.enc.Base64url;

}));

/***/ }),

/***/ "./node_modules/crypto-js/enc-utf16.js":
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/enc-utf16.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));

/***/ }),

/***/ "./node_modules/crypto-js/evpkdf.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/evpkdf.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            var block;

	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));

/***/ }),

/***/ "./node_modules/crypto-js/format-hex.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-js/format-hex.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));

/***/ }),

/***/ "./node_modules/crypto-js/hmac.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/hmac.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),

/***/ "./node_modules/crypto-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/crypto-js/index.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./lib-typedarrays */ "./node_modules/crypto-js/lib-typedarrays.js"), __webpack_require__(/*! ./enc-utf16 */ "./node_modules/crypto-js/enc-utf16.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./enc-base64url */ "./node_modules/crypto-js/enc-base64url.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"), __webpack_require__(/*! ./sha224 */ "./node_modules/crypto-js/sha224.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"), __webpack_require__(/*! ./sha384 */ "./node_modules/crypto-js/sha384.js"), __webpack_require__(/*! ./sha3 */ "./node_modules/crypto-js/sha3.js"), __webpack_require__(/*! ./ripemd160 */ "./node_modules/crypto-js/ripemd160.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"), __webpack_require__(/*! ./pbkdf2 */ "./node_modules/crypto-js/pbkdf2.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"), __webpack_require__(/*! ./mode-cfb */ "./node_modules/crypto-js/mode-cfb.js"), __webpack_require__(/*! ./mode-ctr */ "./node_modules/crypto-js/mode-ctr.js"), __webpack_require__(/*! ./mode-ctr-gladman */ "./node_modules/crypto-js/mode-ctr-gladman.js"), __webpack_require__(/*! ./mode-ofb */ "./node_modules/crypto-js/mode-ofb.js"), __webpack_require__(/*! ./mode-ecb */ "./node_modules/crypto-js/mode-ecb.js"), __webpack_require__(/*! ./pad-ansix923 */ "./node_modules/crypto-js/pad-ansix923.js"), __webpack_require__(/*! ./pad-iso10126 */ "./node_modules/crypto-js/pad-iso10126.js"), __webpack_require__(/*! ./pad-iso97971 */ "./node_modules/crypto-js/pad-iso97971.js"), __webpack_require__(/*! ./pad-zeropadding */ "./node_modules/crypto-js/pad-zeropadding.js"), __webpack_require__(/*! ./pad-nopadding */ "./node_modules/crypto-js/pad-nopadding.js"), __webpack_require__(/*! ./format-hex */ "./node_modules/crypto-js/format-hex.js"), __webpack_require__(/*! ./aes */ "./node_modules/crypto-js/aes.js"), __webpack_require__(/*! ./tripledes */ "./node_modules/crypto-js/tripledes.js"), __webpack_require__(/*! ./rc4 */ "./node_modules/crypto-js/rc4.js"), __webpack_require__(/*! ./rabbit */ "./node_modules/crypto-js/rabbit.js"), __webpack_require__(/*! ./rabbit-legacy */ "./node_modules/crypto-js/rabbit-legacy.js"));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/lib-typedarrays.js":
/*!***************************************************!*\
  !*** ./node_modules/crypto-js/lib-typedarrays.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));

/***/ }),

/***/ "./node_modules/crypto-js/md5.js":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/md5.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-cfb.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-cfb.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        var keystream;

	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-ctr-gladman.js":
/*!****************************************************!*\
  !*** ./node_modules/crypto-js/mode-ctr-gladman.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-ctr.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ctr.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-ecb.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ecb.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));

/***/ }),

/***/ "./node_modules/crypto-js/mode-ofb.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/mode-ofb.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-ansix923.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-ansix923.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-iso10126.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-iso10126.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-iso97971.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-js/pad-iso97971.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-nopadding.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/pad-nopadding.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pad-zeropadding.js":
/*!***************************************************!*\
  !*** ./node_modules/crypto-js/pad-zeropadding.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        for (var i = data.sigBytes - 1; i >= 0; i--) {
	            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	                data.sigBytes = i + 1;
	                break;
	            }
	        }
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));

/***/ }),

/***/ "./node_modules/crypto-js/pbkdf2.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/pbkdf2.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA1 = C_algo.SHA1;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA1,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.PBKDF2;

}));

/***/ }),

/***/ "./node_modules/crypto-js/rabbit-legacy.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-js/rabbit-legacy.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	return CryptoJS.RabbitLegacy;

}));

/***/ }),

/***/ "./node_modules/crypto-js/rabbit.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/rabbit.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	return CryptoJS.Rabbit;

}));

/***/ }),

/***/ "./node_modules/crypto-js/rc4.js":
/*!***************************************!*\
  !*** ./node_modules/crypto-js/rc4.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	return CryptoJS.RC4;

}));

/***/ }),

/***/ "./node_modules/crypto-js/ripemd160.js":
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/ripemd160.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	return CryptoJS.RIPEMD160;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha1.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha1.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha224.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha224.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	return CryptoJS.SHA224;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha3.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/sha3.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    var tMsw;
	                    var tLsw;

	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	return CryptoJS.SHA3;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha384.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha384.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	return CryptoJS.SHA384;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha512.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha512.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                var Wil;
	                var Wih;

	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    Wih = Wi.high = M[offset + i * 2]     | 0;
	                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    Wil = gamma0l + Wi7l;
	                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    Wil = Wil + gamma1l;
	                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    Wil = Wil + Wi16l;
	                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	return CryptoJS.SHA512;

}));

/***/ }),

/***/ "./node_modules/crypto-js/tripledes.js":
/*!*********************************************!*\
  !*** ./node_modules/crypto-js/tripledes.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            // Make sure the key length is valid (64, 128 or >= 192 bit)
	            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
	                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
	            }

	            // Extend the key according to the keying options defined in 3DES standard
	            var key1 = keyWords.slice(0, 2);
	            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
	            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(key1));
	            this._des2 = DES.createEncryptor(WordArray.create(key2));
	            this._des3 = DES.createEncryptor(WordArray.create(key3));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	return CryptoJS.TripleDES;

}));

/***/ }),

/***/ "./node_modules/crypto-js/x64-core.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-js/x64-core.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./src/adapters/index.ts":
/*!*******************************!*\
  !*** ./src/adapters/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotionAdapter = void 0;
var notion_1 = __webpack_require__(/*! ./notion */ "./src/adapters/notion.ts");
Object.defineProperty(exports, "NotionAdapter", ({ enumerable: true, get: function () { return notion_1.NotionAdapter; } }));


/***/ }),

/***/ "./src/adapters/notion.ts":
/*!********************************!*\
  !*** ./src/adapters/notion.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotionAdapter = void 0;
// require("dotenv").config();
const client_1 = __webpack_require__(/*! @notionhq/client */ "./node_modules/@notionhq/client/build/src/index.js");
// import _ from "lodash";
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts"); //writeToFile
/* Adapter to interact with Notion API directly */
class NotionAdapter {
    constructor(apiKey) {
        /* Method to get a Notion database */
        this.getDatabase = async (databaseId) => {
            try {
                const response = await this.notion.databases.retrieve({
                    database_id: databaseId,
                });
                // writeToFile(response, "get-db-response.json", "data");
                return response;
            }
            catch (error) {
                console.error("Failed to get database", error);
                throw error;
            }
        };
        /* Method to query a Notion database */
        this.queryDatabase = async (query) => {
            try {
                const response = await this.notion.databases.query(query);
                // writeToFile(response, "query-db-response.json", "data");
                return response;
            }
            catch (error) {
                console.error("Failed to query database", error);
                throw error;
            }
        };
        /* Method to get a Notion block */
        this.getBlock = async (blockId) => {
            try {
                const response = await this.notion.blocks.retrieve({
                    block_id: blockId,
                });
                // writeToFile(response, "get-block-response.json", "data");
                return response;
            }
            catch (error) {
                console.error("Failed to get block", error);
                throw error;
            }
        };
        /* Method to get the children of a Notion block */
        this.getBlockChildren = async (blockId) => {
            try {
                let blockChildren = await this.notion.blocks.children.list({
                    block_id: blockId,
                });
                while (blockChildren.has_more) {
                    const remainingBlocks = await this.notion.blocks.children.list({
                        block_id: blockId,
                        start_cursor: blockChildren.next_cursor,
                    });
                    blockChildren = {
                        object: blockChildren.object,
                        next_cursor: remainingBlocks.next_cursor,
                        has_more: remainingBlocks.has_more,
                        results: [...blockChildren.results, ...remainingBlocks.results],
                    };
                }
                // writeToFile(blockChildren, "get-block-children-response.json", "data");
                return blockChildren;
            }
            catch (error) {
                console.error("Failed to get block children", error);
                throw error;
            }
        };
        /* Method to append new children to a Notion block */
        this.appendBlockChildren = async (blockId, children) => {
            try {
                let response = await this.notion.blocks.children.append({
                    block_id: blockId,
                    children: children,
                });
                return response;
            }
            catch (error) {
                console.error("Failed to append block children", error);
                throw error;
            }
        };
        /* Method to get a Notion page */
        this.getPage = async (pageId) => {
            try {
                const response = await this.notion.pages.retrieve({
                    page_id: pageId,
                });
                // writeToFile(response, "get-page-response.json", "data");
                return response;
            }
            catch (error) {
                console.error("Failed to get page", error);
                throw error;
            }
        };
        /* Method to create a Notion page */
        this.createPage = async (createPageParams) => {
            try {
                const page = {
                    parent: {
                        database_id: createPageParams.parentDatabaseId,
                    },
                    properties: (0, utils_1.makePageProperties)(createPageParams.properties),
                    children: createPageParams.children,
                };
                if (createPageParams.icon) {
                    page["icon"] = {
                        type: "emoji",
                        emoji: createPageParams.icon,
                    };
                }
                if (createPageParams.cover) {
                    page["cover"] = {
                        type: "external",
                        external: {
                            url: createPageParams.cover,
                        },
                    };
                }
                const response = await this.notion.pages.create(page);
                // writeToFile(response, "create-page-response.json", "data");
                return response;
            }
            catch (error) {
                console.error("Failed to create page", error);
                throw error;
            }
        };
        this.updatePage = async (updatePageParams) => {
            try {
                if (updatePageParams.isDelete) {
                    return await this.notion.pages.update({
                        page_id: updatePageParams.pageId,
                        archived: true
                    });
                }
                else {
                    const page = {
                        page_id: updatePageParams.pageId,
                        properties: (0, utils_1.makePageProperties)(updatePageParams.properties),
                    };
                    return await this.notion.pages.update(page);
                }
            }
            catch (error) {
                console.error("Failed to archive page", error);
                throw error;
            }
        };
        /* Method to get a Notion page */
        this.archivePage = async (pageId) => {
            try {
                const response = await this.notion.pages.update({
                    page_id: pageId,
                    archived: true
                });
                // writeToFile(response, "get-page-response.json", "data");
                return response;
            }
            catch (error) {
                console.error("Failed to archive page", error);
                throw error;
            }
        };
        this.notion = new client_1.Client({ auth: apiKey });
    }
}
exports.NotionAdapter = NotionAdapter;


/***/ }),

/***/ "./src/interfaces/index.ts":
/*!*********************************!*\
  !*** ./src/interfaces/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Emoji = exports.BlockType = void 0;
var notion_1 = __webpack_require__(/*! ./notion */ "./src/interfaces/notion.ts");
Object.defineProperty(exports, "BlockType", ({ enumerable: true, get: function () { return notion_1.BlockType; } }));
Object.defineProperty(exports, "Emoji", ({ enumerable: true, get: function () { return notion_1.Emoji; } }));


/***/ }),

/***/ "./src/interfaces/notion.ts":
/*!**********************************!*\
  !*** ./src/interfaces/notion.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Emoji = exports.BlockType = void 0;
var BlockType;
(function (BlockType) {
    BlockType["quote"] = "quote";
    BlockType["heading_1"] = "heading_1";
    BlockType["heading_2"] = "heading_2";
    BlockType["heading_3"] = "heading_3";
    BlockType["bulleted_list_item"] = "bulleted_list_item";
    BlockType["paragraph"] = "paragraph";
})(BlockType = exports.BlockType || (exports.BlockType = {}));
var Emoji;
(function (Emoji) {
    Emoji["\uD83D\uDCD6"] = "\uD83D\uDCD6";
    Emoji["\uD83D\uDCDA"] = "\uD83D\uDCDA";
    Emoji["\uD83D\uDD16"] = "\uD83D\uDD16";
})(Emoji = exports.Emoji || (exports.Emoji = {}));


/***/ }),

/***/ "./src/models/book_extractor.ts":
/*!**************************************!*\
  !*** ./src/models/book_extractor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractBook = void 0;
const interfaces_1 = __webpack_require__(/*! ../interfaces */ "./src/interfaces/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var Urls;
(function (Urls) {
    Urls["Amazon"] = "https://read.amazon.com/notebook";
    Urls["GooglePlay"] = "https://play.google.com";
})(Urls || (Urls = {}));
const extractBook = () => {
    const url = window.location.href;
    if (url == Urls.Amazon.valueOf()) {
        return extractAmazon();
    }
    else {
        return undefined;
    }
};
exports.extractBook = extractBook;
const extractAmazon = () => {
    var _a, _b, _c, _d, _e;
    try {
        const title = (_a = document.querySelector("#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span5 > h3")) === null || _a === void 0 ? void 0 : _a.textContent;
        console.log(`title: ${title}`);
        const author = (_b = document.querySelector("#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span5 > p.a-spacing-none.a-spacing-top-micro.a-size-base.a-color-secondary.kp-notebook-selectable.kp-notebook-metadata")) === null || _b === void 0 ? void 0 : _b.textContent;
        console.log(`author: ${author}`);
        const bookLink = (_c = document
            .querySelector("#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span1.kp-notebook-bookcover-container > a")) === null || _c === void 0 ? void 0 : _c.getAttribute("href");
        console.log(`bookLink: ${bookLink}`);
        const imageLink = (_e = (_d = document
            .querySelector("#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span1.kp-notebook-bookcover-container > a > span > img")) === null || _d === void 0 ? void 0 : _d.getAttribute("src")) === null || _e === void 0 ? void 0 : _e.replace("._SY160", "");
        console.log(`imgLink: ${imageLink}`);
        const _highlights = document.querySelectorAll("#kp-notebook-annotations > div.a-row.a-spacing-base");
        const highlights = Array.from(_highlights).map((el) => {
            var _a, _b, _c, _d, _e, _f;
            const loc = parseInt((_b = (_a = el.querySelector("#kp-annotation-location")) === null || _a === void 0 ? void 0 : _a.getAttribute("value")) !== null && _b !== void 0 ? _b : "-1");
            let color = (_e = (_d = (_c = el
                .querySelector("#annotationHighlightHeader")) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.split(" ")[0]) === null || _e === void 0 ? void 0 : _e.toLowerCase();
            const text = el.querySelector("#highlight,#note");
            if ((text === null || text === void 0 ? void 0 : text.id) === "note") {
                color = "gray";
            }
            let blockType;
            switch (color) {
                case "yellow":
                    blockType = interfaces_1.BlockType.bulleted_list_item;
                    color = "default";
                    break;
                case "pink":
                    blockType = interfaces_1.BlockType.paragraph;
                    color = "default";
                    break;
                case "blue":
                    blockType = interfaces_1.BlockType.heading_3;
                    color = "default;";
                    break;
                case "orange":
                    blockType = interfaces_1.BlockType.quote;
                    color = "pink";
                    break;
                default:
                    blockType = interfaces_1.BlockType.quote;
                    color = "red_background";
            }
            const clip = {
                type: blockType,
                location: loc,
                color: color,
                text: (_f = text === null || text === void 0 ? void 0 : text.textContent) !== null && _f !== void 0 ? _f : `⚠️ @ ${loc}`,
            };
            return clip;
        });
        (0, utils_1.updateToast)(`Processed ${highlights.length} highlights`);
        const book = {
            title: title !== null && title !== void 0 ? title : "Author wasn't inspired!",
            author: author !== null && author !== void 0 ? author : "Anonymous",
            clips: highlights,
            bookUrl: bookLink !== null && bookLink !== void 0 ? bookLink : "http://the-void.com",
            imgUrl: imageLink,
            hash: "0:none"
        };
        return book;
    }
    catch (err) {
        const result = window.confirm("Go to read.amazon.com/notebooks ?");
        if (result) {
            window.open("https://read.amazon.com/notebook", "_blank");
        }
    }
    return undefined;
};


/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractBook = exports.parseBook = exports.Notion = void 0;
var notion_1 = __webpack_require__(/*! ./notion */ "./src/models/notion.ts");
Object.defineProperty(exports, "Notion", ({ enumerable: true, get: function () { return notion_1.Notion; } }));
var parser_1 = __webpack_require__(/*! ./parser */ "./src/models/parser.ts");
Object.defineProperty(exports, "parseBook", ({ enumerable: true, get: function () { return parser_1.parseBook; } }));
var book_extractor_1 = __webpack_require__(/*! ./book_extractor */ "./src/models/book_extractor.ts");
Object.defineProperty(exports, "extractBook", ({ enumerable: true, get: function () { return book_extractor_1.extractBook; } }));


/***/ }),

/***/ "./src/models/notion.ts":
/*!******************************!*\
  !*** ./src/models/notion.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Notion = void 0;
// require("dotenv").config();
const adapters_1 = __webpack_require__(/*! ../adapters */ "./src/adapters/index.ts");
const interfaces_1 = __webpack_require__(/*! ../interfaces */ "./src/interfaces/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
class Notion {
    constructor(apiKey, bookDbId) {
        /* Method to get Notion block id of the Notion page given the book name */
        this.getIdFromBookName = async (bookName) => {
            const response = await this.notion.queryDatabase({
                database_id: this.bookDbId,
                filter: {
                    or: [
                        {
                            property: "book",
                            text: {
                                equals: bookName,
                            },
                        },
                    ],
                },
            });
            const [book] = response.results;
            if (book) {
                return {
                    id: book.id,
                    SyncHash: book.properties.sync.rich_text[0].text.content
                };
            }
            else {
                return null;
            }
        };
        /* Method to sync highlights to notion */
        this.syncHighlights = async (book) => {
            var _a;
            try {
                (0, utils_1.updateToast)(`<br>🔁 Syncing book: ${book.title}`);
                let _bookDb = await this.getIdFromBookName(book.title);
                let bookId = _bookDb === null || _bookDb === void 0 ? void 0 : _bookDb.id;
                const sync = (0, utils_1.getUnsyncedHighlights)(book, (_a = _bookDb === null || _bookDb === void 0 ? void 0 : _bookDb.SyncHash) !== null && _a !== void 0 ? _a : "0:");
                if (bookId && sync.needsFullSync) {
                    (0, utils_1.updateToast)(`<br>⚠️  Highlights changed, book will be deleted!`);
                    await this.notion.archivePage(bookId);
                    bookId = undefined;
                }
                if (sync.clips.length > 0) {
                    if (bookId) {
                        (0, utils_1.updateToast)(`<br>📚 Book already present, appending highlights`);
                        await this.notion.appendBlockChildren(bookId, (0, utils_1.makeBlocks)(sync.clips, interfaces_1.BlockType.quote));
                        await this.notion.updatePage({
                            pageId: bookId,
                            properties: {
                                title: sync.title,
                                bookName: sync.title,
                                author: sync.author,
                                hash: sync.hash,
                                bookUrl: sync.bookUrl,
                            },
                            isDelete: false,
                        });
                    }
                    else {
                        (0, utils_1.updateToast)(`<br>📚 Book not present, creating notion page`);
                        const createPageParams = {
                            parentDatabaseId: this.bookDbId,
                            properties: {
                                title: sync.title,
                                author: sync.author,
                                bookName: sync.title,
                                hash: sync.hash,
                                bookUrl: sync.bookUrl,
                                imgUrl: sync.imgUrl,
                            },
                            children: (0, utils_1.makeHighlightsBlocks)(sync.clips, interfaces_1.BlockType.quote),
                            icon: interfaces_1.Emoji["📖"],
                            cover: undefined
                        };
                        await this.notion.createPage(createPageParams);
                    }
                    (0, utils_1.updateToast)("<br>✅ Successfully synced highlights to Notion");
                }
                else {
                    (0, utils_1.updateToast)("<br>🟢 Book is already synced!");
                }
            }
            catch (error) {
                (0, utils_1.updateToast)("<br>❌ Failed to sync highlights");
                throw error;
            }
        };
        this.notion = new adapters_1.NotionAdapter(apiKey);
        this.bookDbId = bookDbId;
    }
}
exports.Notion = Notion;


/***/ }),

/***/ "./src/models/parser.ts":
/*!******************************!*\
  !*** ./src/models/parser.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseBook = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
const browser_1 = __webpack_require__(/*! ../utils/browser */ "./src/utils/browser.ts");
const parseBook = (book) => {
    var res;
    if (book != undefined && book.title !== '' && book.author !== '' && book.clips.length > 0) {
        book.clips.sort((a, b) => { var _a, _b; return ((_a = a.location) !== null && _a !== void 0 ? _a : Number.MAX_VALUE) - ((_b = b.location) !== null && _b !== void 0 ? _b : Number.MAX_VALUE); });
        book.hash = (0, utils_1.computeHighlightsHash)(book.clips);
        res = book;
    }
    if (res != undefined) {
        (0, browser_1.updateToast)(`<br>📝 Title: ${res === null || res === void 0 ? void 0 : res.title}` +
            `<br>🙋 Author: ${res === null || res === void 0 ? void 0 : res.author}` +
            `<br>💯 Highlights count: ${res === null || res === void 0 ? void 0 : res.clips.length}`);
    }
    else {
        (0, browser_1.updateToast)(`<br>❌ Failed to capture highlights 😢!`);
    }
    return res;
};
exports.parseBook = parseBook;


/***/ }),

/***/ "./src/utils/browser.ts":
/*!******************************!*\
  !*** ./src/utils/browser.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cleanup = exports.updateToast = exports.showToast = void 0;
const taggingClass = "ASUPERSECRETCLASS";
const toastId = "TOASTID";
const showToast = (content, delayMs, id = toastId) => {
    let toast = document.createElement("p");
    toast.id = id;
    toast.classList.add(taggingClass);
    toast.innerHTML = content;
    toast.setAttribute('style', "min-width: 250px; margin-left: -40px; background-color: #4448; color: #f22;text-align: center; border-radius: 10px; padding: 30px; position: fixed; z-index: 1; left: 50%; top: 30px;font-size: 16px;");
    document.body.appendChild(toast);
    if (delayMs != undefined) {
        setTimeout(function () {
            toast.remove();
        }, delayMs);
    }
    else {
        toast.onclick = exports.cleanup;
    }
};
exports.showToast = showToast;
const updateToast = (content, append = true, id = toastId) => {
    let toast = document.getElementById(id);
    if (toast)
        toast.innerHTML = append ? (toast === null || toast === void 0 ? void 0 : toast.innerHTML) + content : content;
    else
        console.log("No toast element, call showToast first!");
};
exports.updateToast = updateToast;
const cleanup = () => {
    document.querySelectorAll('.' + taggingClass).forEach(el => {
        el.remove();
    });
};
exports.cleanup = cleanup;


/***/ }),

/***/ "./src/utils/common.ts":
/*!*****************************!*\
  !*** ./src/utils/common.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUnsyncedHighlights = exports.computeHighlightsHash = exports.md5 = void 0;
const crypto_js_1 = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
'crypto-js';
const md5 = (contents) => crypto_js_1.enc.Hex.stringify((0, crypto_js_1.MD5)(contents));
exports.md5 = md5;
const computeHighlightsHash = (clips, n = undefined) => {
    n !== null && n !== void 0 ? n : (n = clips.length);
    if (n == 0) {
        return "0:none";
    }
    const hash = (0, exports.md5)(clips.slice(0, n - 1).map(c => `${c.text},${c.location},${c.color}`).join());
    return `${n}:${hash}`;
};
exports.computeHighlightsHash = computeHighlightsHash;
/* Function to get unsynced highlights for each book */
const getUnsyncedHighlights = (book, hash) => {
    const clips = book.clips;
    const n = Number.parseInt(hash.split(':')[0]);
    const h = (0, exports.computeHighlightsHash)(book.clips, n);
    const fullSync = h != hash;
    if (!fullSync) {
        return Object.assign(Object.assign({}, book), { clips: clips.slice(n + 1), needsFullSync: false });
    }
    else {
        return Object.assign(Object.assign({}, book), { needsFullSync: true });
    }
};
exports.getUnsyncedHighlights = getUnsyncedHighlights;


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cleanup = exports.updateToast = exports.showToast = exports.makePageProperties = exports.makeHighlightsBlocks = exports.makeBlocks = exports.computeHighlightsHash = exports.getUnsyncedHighlights = void 0;
var common_1 = __webpack_require__(/*! ./common */ "./src/utils/common.ts");
Object.defineProperty(exports, "getUnsyncedHighlights", ({ enumerable: true, get: function () { return common_1.getUnsyncedHighlights; } }));
Object.defineProperty(exports, "computeHighlightsHash", ({ enumerable: true, get: function () { return common_1.computeHighlightsHash; } }));
var notion_1 = __webpack_require__(/*! ./notion */ "./src/utils/notion.ts");
Object.defineProperty(exports, "makeBlocks", ({ enumerable: true, get: function () { return notion_1.makeBlocks; } }));
Object.defineProperty(exports, "makeHighlightsBlocks", ({ enumerable: true, get: function () { return notion_1.makeHighlightsBlocks; } }));
Object.defineProperty(exports, "makePageProperties", ({ enumerable: true, get: function () { return notion_1.makePageProperties; } }));
var browser_1 = __webpack_require__(/*! ./browser */ "./src/utils/browser.ts");
Object.defineProperty(exports, "showToast", ({ enumerable: true, get: function () { return browser_1.showToast; } }));
Object.defineProperty(exports, "updateToast", ({ enumerable: true, get: function () { return browser_1.updateToast; } }));
Object.defineProperty(exports, "cleanup", ({ enumerable: true, get: function () { return browser_1.cleanup; } }));


/***/ }),

/***/ "./src/utils/notion.ts":
/*!*****************************!*\
  !*** ./src/utils/notion.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makePageProperties = exports.makeHighlightsBlocks = exports.makeBlocks = void 0;
const interfaces_1 = __webpack_require__(/*! ../interfaces */ "./src/interfaces/index.ts");
/* Function to make an array of Notion blocks given the array of highlights and the block type
   Used when appending highlights to an existing Notion page for the book */
const makeBlocks = (clips, defaultType) => {
    var _a;
    const blocks = [];
    for (const c of clips) {
        const type = (_a = c.type) !== null && _a !== void 0 ? _a : defaultType;
        const validHighlight = c.text.length > 2000 ? c.text.substring(0, 2000) : c.text;
        const block = {
            object: "block",
            type,
        };
        block[type] = {
            text: [
                {
                    type: "text",
                    text: {
                        content: validHighlight,
                        link: null,
                    },
                },
            ],
            color: c.color,
        };
        blocks.push(block);
    }
    return blocks;
};
exports.makeBlocks = makeBlocks;
/* Function to make an array of Notion blocks with a title: " 🎀 Highlights".
   Used when creating a new Notion page for the book*/
const makeHighlightsBlocks = (highlights, type) => {
    return [
        ...(0, exports.makeBlocks)([{ text: "Highlights" }], interfaces_1.BlockType.heading_1),
        ...(0, exports.makeBlocks)(highlights, type),
    ];
};
exports.makeHighlightsBlocks = makeHighlightsBlocks;
/* Function to generate the configuration required to create a new Notion page */
const makePageProperties = (pageProperties) => {
    const properties = {
        "💾": {
            title: [
                {
                    text: {
                        content: pageProperties.title,
                    },
                },
            ],
        },
        "🧠": {
            type: "rich_text",
            rich_text: [
                {
                    type: "text",
                    text: {
                        content: pageProperties.author,
                    },
                },
            ],
        },
        "🔗": {
            url: pageProperties.bookUrl
        },
        "🖼": {
            files: [
                {
                    type: "external",
                    name: "Cover",
                    external: {
                        url: pageProperties.imgUrl
                    }
                }
            ]
        },
        book: {
            type: "rich_text",
            rich_text: [
                {
                    type: "text",
                    text: {
                        content: pageProperties.bookName,
                    },
                },
            ],
        },
        sync: {
            type: "rich_text",
            rich_text: [
                {
                    type: "text",
                    text: {
                        content: pageProperties.hash
                    },
                }
            ],
        },
        "🏷": {
            select: {
                name: "book"
            }
        },
        "🔧": {
            select: {
                name: "ondo"
            }
        }
    };
    return properties;
};
exports.makePageProperties = makePageProperties;


/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/@notionhq/client/build/package.json":
/*!**********************************************************!*\
  !*** ./node_modules/@notionhq/client/build/package.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@notionhq/client","version":"0.4.9","description":"A simple and easy to use client for the Notion API","engines":{"node":">=12"},"homepage":"https://developers.notion.com/docs/getting-started","bugs":{"url":"https://github.com/makenotion/notion-sdk-js/issues"},"repository":{"type":"git","url":"https://github.com/makenotion/notion-sdk-js/"},"keywords":["notion","notionapi","rest","notion-api"],"main":"./build/src","scripts":{"prepare":"npm run build","prepublishOnly":"npm run checkLoggedIn && npm run lint && npm run test","build":"tsc","prettier":"prettier --write .","lint":"prettier --check . && eslint . --ext .ts && cspell \'**/*\' ","test":"ava","check-links":"git ls-files | grep md$ | xargs -n 1 markdown-link-check","prebuild":"npm run clean","clean":"rm -rf ./build","checkLoggedIn":"./scripts/verifyLoggedIn.sh"},"author":"","license":"MIT","files":["build/package.json","build/src/**"],"dependencies":{"@types/node-fetch":"^2.5.10","node-fetch":"^2.6.1"},"devDependencies":{"@ava/typescript":"^2.0.0","@typescript-eslint/eslint-plugin":"^4.22.0","@typescript-eslint/parser":"^4.22.0","ava":"^3.15.0","cspell":"^5.4.1","eslint":"^7.24.0","markdown-link-check":"^3.8.7","prettier":"^2.3.0","typescript":"^4.2.4"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeHighlightsToNotion = void 0;
const models_1 = __webpack_require__(/*! ./models */ "./src/models/index.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
async function writeHighlightsToNotion(apiKey, bookDbId) {
    (0, utils_1.showToast)("");
    const notion = new models_1.Notion(apiKey, bookDbId);
    const book = (0, models_1.extractBook)();
    const clippings = (0, models_1.parseBook)(book);
    if (clippings != undefined) {
        await notion.syncHighlights(clippings);
    }
    (0, utils_1.updateToast)("&#128158; &#128018; &#128150;");
}
exports.writeHighlightsToNotion = writeHighlightsToNotion;
;

})();

highlightsToNotion = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0c1RvTm90aW9uLmRldi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLHVFQUFXO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLHFFQUFVO0FBQ25DLGtCQUFrQixtQkFBTyxDQUFDLHVFQUFXO0FBQ3JDLHdCQUF3QixtQkFBTyxDQUFDLG1GQUFpQjtBQUNqRCxxQkFBcUIsbUJBQU8sQ0FBQyx3REFBWTtBQUN6Qyx1QkFBdUIsbUJBQU8sQ0FBQywyRUFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVOztBQUVWO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEMsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBLGlCQUFpQixXQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjs7QUFFQSxDQUFDOzs7Ozs7Ozs7O0FDclVELENBQUM7QUFDRCxLQUFLLElBQTJCO0FBQ2hDO0FBQ0EscUNBQXFDLG1CQUFPLENBQUMsZ0RBQVEsR0FBRyxtQkFBTyxDQUFDLDREQUFjLEdBQUcsbUJBQU8sQ0FBQyw4Q0FBTyxHQUFHLG1CQUFPLENBQUMsb0RBQVUsR0FBRyxtQkFBTyxDQUFDLDhEQUFlO0FBQy9JO0FBQ0EsTUFBTSxFQU9KO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxZQUFZO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWOztBQUVBOztBQUVBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWOztBQUVBOztBQUVBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjs7QUFFQSxDQUFDOzs7Ozs7Ozs7O0FDMXdCRCxDQUFDO0FBQ0QsS0FBSyxJQUEyQjtBQUNoQztBQUNBLHFDQUFxQyxtQkFBTyxDQUFDLGdEQUFRO0FBQ3JEO0FBQ0EsTUFBTSxFQU9KO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixvQkFBb0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEVBQUU7OztBQUdGOztBQUVBLENBQUM7Ozs7Ozs7Ozs7O0FDL1NZOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLGtCQUFlO0FBQ2hCOztBQUVBLGVBQWU7QUFDZixlQUFlO0FBQ2YsZ0JBQWdCOzs7Ozs7Ozs7OztBQ3hCSDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUI7QUFDckIsZUFBZSxtQkFBTyxDQUFDLDBDQUFVO0FBQ2pDLGlEQUFnRCxFQUFFLHFDQUFxQyxrQ0FBa0MsRUFBQzs7Ozs7Ozs7Ozs7O0FDSjdHO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLDRFQUFrQjtBQUMzQztBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHNDQUFVLEdBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQSxxQkFBcUI7Ozs7Ozs7Ozs7OztBQ2hMUjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhLEdBQUcsaUJBQWlCO0FBQ2pDLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBVTtBQUNqQyw2Q0FBNEMsRUFBRSxxQ0FBcUMsOEJBQThCLEVBQUM7QUFDbEgseUNBQXdDLEVBQUUscUNBQXFDLDBCQUEwQixFQUFDOzs7Ozs7Ozs7Ozs7QUNMN0Y7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYSxHQUFHLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0MsaUJBQWlCLEtBQUs7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCLGFBQWEsS0FBSzs7Ozs7Ozs7Ozs7O0FDakJsQztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkIscUJBQXFCLG1CQUFPLENBQUMsZ0RBQWU7QUFDNUMsZ0JBQWdCLG1CQUFPLENBQUMsc0NBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9CQUFvQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUztBQUMxQztBQUNBO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSUFBbUksSUFBSTtBQUN2STtBQUNBO0FBQ0EsU0FBUztBQUNULDhDQUE4QyxtQkFBbUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsaUJBQWlCLEdBQUcsY0FBYztBQUN4RCxlQUFlLG1CQUFPLENBQUMsd0NBQVU7QUFDakMsMENBQXlDLEVBQUUscUNBQXFDLDJCQUEyQixFQUFDO0FBQzVHLGVBQWUsbUJBQU8sQ0FBQyx3Q0FBVTtBQUNqQyw2Q0FBNEMsRUFBRSxxQ0FBcUMsOEJBQThCLEVBQUM7QUFDbEgsdUJBQXVCLG1CQUFPLENBQUMsd0RBQWtCO0FBQ2pELCtDQUE4QyxFQUFFLHFDQUFxQyx3Q0FBd0MsRUFBQzs7Ozs7Ozs7Ozs7O0FDUmpIO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLDRDQUFhO0FBQ3hDLHFCQUFxQixtQkFBTyxDQUFDLGdEQUFlO0FBQzVDLGdCQUFnQixtQkFBTyxDQUFDLHNDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxXQUFXO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7OztBQ2pHRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsZ0JBQWdCLG1CQUFPLENBQUMsc0NBQVU7QUFDbEMsa0JBQWtCLG1CQUFPLENBQUMsZ0RBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZLHVKQUF1SjtBQUN2TTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxvREFBb0Q7QUFDeEcsOEJBQThCLHFEQUFxRDtBQUNuRix3Q0FBd0MsMkRBQTJEO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7Ozs7O0FDdEJKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWUsR0FBRyxtQkFBbUIsR0FBRyxpQkFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsb0JBQW9CLHlCQUF5QixZQUFZLG9CQUFvQixxQkFBcUIsZUFBZSxpQkFBaUIsWUFBWSxXQUFXLFVBQVUsZ0JBQWdCO0FBQ3RPO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7O0FDbkNGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDZCQUE2QixHQUFHLDZCQUE2QixHQUFHLFdBQVc7QUFDM0Usb0JBQW9CLG1CQUFPLENBQUMsb0RBQVc7QUFDdkM7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLE9BQU8sR0FBRyxXQUFXLEdBQUcsUUFBUTtBQUNwRyxjQUFjLEVBQUUsR0FBRyxLQUFLO0FBQ3hCO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVcsaURBQWlEO0FBQ3pHO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVyxxQkFBcUI7QUFDN0U7QUFDQTtBQUNBLDZCQUE2Qjs7Ozs7Ozs7Ozs7O0FDN0JoQjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLEdBQUcsbUJBQW1CLEdBQUcsaUJBQWlCLEdBQUcsMEJBQTBCLEdBQUcsNEJBQTRCLEdBQUcsa0JBQWtCLEdBQUcsNkJBQTZCLEdBQUcsNkJBQTZCO0FBQzFNLGVBQWUsbUJBQU8sQ0FBQyx1Q0FBVTtBQUNqQyx5REFBd0QsRUFBRSxxQ0FBcUMsMENBQTBDLEVBQUM7QUFDMUkseURBQXdELEVBQUUscUNBQXFDLDBDQUEwQyxFQUFDO0FBQzFJLGVBQWUsbUJBQU8sQ0FBQyx1Q0FBVTtBQUNqQyw4Q0FBNkMsRUFBRSxxQ0FBcUMsK0JBQStCLEVBQUM7QUFDcEgsd0RBQXVELEVBQUUscUNBQXFDLHlDQUF5QyxFQUFDO0FBQ3hJLHNEQUFxRCxFQUFFLHFDQUFxQyx1Q0FBdUMsRUFBQztBQUNwSSxnQkFBZ0IsbUJBQU8sQ0FBQyx5Q0FBVztBQUNuQyw2Q0FBNEMsRUFBRSxxQ0FBcUMsK0JBQStCLEVBQUM7QUFDbkgsK0NBQThDLEVBQUUscUNBQXFDLGlDQUFpQyxFQUFDO0FBQ3ZILDJDQUEwQyxFQUFFLHFDQUFxQyw2QkFBNkIsRUFBQzs7Ozs7Ozs7Ozs7O0FDYmxHO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBCQUEwQixHQUFHLDRCQUE0QixHQUFHLGtCQUFrQjtBQUM5RSxxQkFBcUIsbUJBQU8sQ0FBQyxnREFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msb0JBQW9CO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOzs7Ozs7Ozs7OztBQ2xIMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1BZO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELCtCQUErQjtBQUMvQixpQkFBaUIsbUJBQU8sQ0FBQyx1Q0FBVTtBQUNuQyxnQkFBZ0IsbUJBQU8sQ0FBQyxxQ0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFVBQVUsU0FBUztBQUMzRDtBQUNBLCtCQUErQjtBQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9Abm90aW9uaHEvY2xpZW50L2J1aWxkL3NyYy9DbGllbnQuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL0Bub3Rpb25ocS9jbGllbnQvYnVpbGQvc3JjL2FwaS1lbmRwb2ludHMuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL0Bub3Rpb25ocS9jbGllbnQvYnVpbGQvc3JjL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvQG5vdGlvbmhxL2NsaWVudC9idWlsZC9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvQG5vdGlvbmhxL2NsaWVudC9idWlsZC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL0Bub3Rpb25ocS9jbGllbnQvYnVpbGQvc3JjL2xvZ2dpbmcuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9hZXMuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9jaXBoZXItY29yZS5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9lbmMtYmFzZTY0LmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvZW5jLWJhc2U2NHVybC5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2VuYy11dGYxNi5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2V2cGtkZi5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2Zvcm1hdC1oZXguanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9obWFjLmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9saWItdHlwZWRhcnJheXMuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tZDUuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tb2RlLWNmYi5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL21vZGUtY3RyLWdsYWRtYW4uanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tb2RlLWN0ci5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL21vZGUtZWNiLmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvbW9kZS1vZmIuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9wYWQtYW5zaXg5MjMuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9wYWQtaXNvMTAxMjYuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9wYWQtaXNvOTc5NzEuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9wYWQtbm9wYWRkaW5nLmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLXplcm9wYWRkaW5nLmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGJrZGYyLmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcmFiYml0LWxlZ2FjeS5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3JhYmJpdC5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3JjNC5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3JpcGVtZDE2MC5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTEuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEyMjQuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEyNTYuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEzLmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvc2hhMzg0LmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvc2hhNTEyLmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvdHJpcGxlZGVzLmpzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMveDY0LWNvcmUuanMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9zcmMvYWRhcHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vc3JjL2FkYXB0ZXJzL25vdGlvbi50cyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9zcmMvaW50ZXJmYWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9zcmMvaW50ZXJmYWNlcy9ub3Rpb24udHMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vc3JjL21vZGVscy9ib29rX2V4dHJhY3Rvci50cyIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL3NyYy9tb2RlbHMvbm90aW9uLnRzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL3NyYy9tb2RlbHMvcGFyc2VyLnRzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL3NyYy91dGlscy9icm93c2VyLnRzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL3NyYy91dGlscy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi8uL3NyYy91dGlscy9ub3Rpb24udHMiLCJ3ZWJwYWNrOi8vaGlnaGxpZ2h0c1RvTm90aW9uL2lnbm9yZWR8L1VzZXJzL2RhbWllbi9Eb3dubG9hZHMvYzZsZS9raW5kbGUtdG8tbm90aW9uL25vZGVfbW9kdWxlcy9jcnlwdG8tanN8Y3J5cHRvIiwid2VicGFjazovL2hpZ2hsaWdodHNUb05vdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9oaWdobGlnaHRzVG9Ob3Rpb24vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0NsaWVudF9hdXRoLCBfQ2xpZW50X2xvZ0xldmVsLCBfQ2xpZW50X2xvZ2dlciwgX0NsaWVudF9wcmVmaXhVcmwsIF9DbGllbnRfdGltZW91dE1zLCBfQ2xpZW50X25vdGlvblZlcnNpb24sIF9DbGllbnRfZmV0Y2gsIF9DbGllbnRfYWdlbnQsIF9DbGllbnRfdXNlckFnZW50O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbG9nZ2luZ18xID0gcmVxdWlyZShcIi4vbG9nZ2luZ1wiKTtcbmNvbnN0IGVycm9yc18xID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbmNvbnN0IGFwaV9lbmRwb2ludHNfMSA9IHJlcXVpcmUoXCIuL2FwaS1lbmRwb2ludHNcIik7XG5jb25zdCBub2RlX2ZldGNoXzEgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcbmNvbnN0IHBhY2thZ2VfanNvbl8xID0gcmVxdWlyZShcIi4uL3BhY2thZ2UuanNvblwiKTtcbmNsYXNzIENsaWVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICAgICAgX0NsaWVudF9hdXRoLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ2xpZW50X2xvZ0xldmVsLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ2xpZW50X2xvZ2dlci5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0NsaWVudF9wcmVmaXhVcmwuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9DbGllbnRfdGltZW91dE1zLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ2xpZW50X25vdGlvblZlcnNpb24uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9DbGllbnRfZmV0Y2guc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9DbGllbnRfYWdlbnQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9DbGllbnRfdXNlckFnZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICAvKlxuICAgICAgICAgKiBOb3Rpb24gQVBJIGVuZHBvaW50c1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ibG9ja3MgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHJpZXZlIGJsb2NrXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHJpZXZlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEuZ2V0QmxvY2sucGF0aChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEuZ2V0QmxvY2subWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLmdldEJsb2NrLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLmdldEJsb2NrLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVwZGF0ZSBibG9ja1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGU6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS51cGRhdGVCbG9jay5wYXRoKGFyZ3MpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS51cGRhdGVCbG9jay5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEudXBkYXRlQmxvY2sucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEudXBkYXRlQmxvY2suYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVsZXRlIGJsb2NrXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlbGV0ZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLmRlbGV0ZUJsb2NrLnBhdGgoYXJncyksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmRlbGV0ZUJsb2NrLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5kZWxldGVCbG9jay5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5kZWxldGVCbG9jay5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBcHBlbmQgYmxvY2sgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBhcHBlbmQ6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLmFwcGVuZEJsb2NrQ2hpbGRyZW4ucGF0aChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmFwcGVuZEJsb2NrQ2hpbGRyZW4ubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5hcHBlbmRCbG9ja0NoaWxkcmVuLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5hcHBlbmRCbG9ja0NoaWxkcmVuLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogUmV0cmlldmUgYmxvY2sgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBsaXN0OiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5saXN0QmxvY2tDaGlsZHJlbi5wYXRoKGFyZ3MpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEubGlzdEJsb2NrQ2hpbGRyZW4ubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5saXN0QmxvY2tDaGlsZHJlbi5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEubGlzdEJsb2NrQ2hpbGRyZW4uYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGF0YWJhc2VzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBMaXN0IGRhdGFiYXNlc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgYHNlYXJjaGBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGlzdDogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLmxpc3REYXRhYmFzZXMucGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5saXN0RGF0YWJhc2VzLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5saXN0RGF0YWJhc2VzLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLmxpc3REYXRhYmFzZXMuYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0cmlldmUgYSBkYXRhYmFzZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXRyaWV2ZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLmdldERhdGFiYXNlLnBhdGgoYXJncyksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmdldERhdGFiYXNlLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5nZXREYXRhYmFzZS5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5nZXREYXRhYmFzZS5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBRdWVyeSBhIGRhdGFiYXNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHF1ZXJ5OiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEucXVlcnlEYXRhYmFzZS5wYXRoKGFyZ3MpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5xdWVyeURhdGFiYXNlLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5xdWVyeURhdGFiYXNlLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLnF1ZXJ5RGF0YWJhc2UuYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlIGEgZGF0YWJhc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY3JlYXRlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEuY3JlYXRlRGF0YWJhc2UucGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5jcmVhdGVEYXRhYmFzZS5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEuY3JlYXRlRGF0YWJhc2UucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEuY3JlYXRlRGF0YWJhc2UuYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXBkYXRlIGEgZGF0YWJhc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEudXBkYXRlRGF0YWJhc2UucGF0aChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEudXBkYXRlRGF0YWJhc2UubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLnVwZGF0ZURhdGFiYXNlLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLnVwZGF0ZURhdGFiYXNlLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZSBhIHBhZ2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY3JlYXRlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEuY3JlYXRlUGFnZS5wYXRoKCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmNyZWF0ZVBhZ2UubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLmNyZWF0ZVBhZ2UucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEuY3JlYXRlUGFnZS5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXRyaWV2ZSBhIHBhZ2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0cmlldmU6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5nZXRQYWdlLnBhdGgoYXJncyksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmdldFBhZ2UubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLmdldFBhZ2UucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEuZ2V0UGFnZS5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVcGRhdGUgcGFnZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLnVwZGF0ZVBhZ2UucGF0aChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEudXBkYXRlUGFnZS5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEudXBkYXRlUGFnZS5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS51cGRhdGVQYWdlLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogUmV0cmlldmUgcGFnZSBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHJldHJpZXZlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5nZXRQYWdlUHJvcGVydHkucGF0aChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmdldFBhZ2VQcm9wZXJ0eS5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLmdldFBhZ2VQcm9wZXJ0eS5xdWVyeVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEuZ2V0UGFnZVByb3BlcnR5LmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVzZXJzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXRyaWV2ZSBhIHVzZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0cmlldmU6IChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwaV9lbmRwb2ludHNfMS5nZXRVc2VyLnBhdGgoYXJncyksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYXBpX2VuZHBvaW50c18xLmdldFVzZXIubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLmdldFVzZXIucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEuZ2V0VXNlci5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJncyA9PT0gbnVsbCB8fCBhcmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmdzLmF1dGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBMaXN0IGFsbCB1c2Vyc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsaXN0OiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhcGlfZW5kcG9pbnRzXzEubGlzdFVzZXJzLnBhdGgoKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBhcGlfZW5kcG9pbnRzXzEubGlzdFVzZXJzLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5saXN0VXNlcnMucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBoZWxwZXJzXzEucGljayhhcmdzLCBhcGlfZW5kcG9pbnRzXzEubGlzdFVzZXJzLmJvZHlQYXJhbXMpLFxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcmdzID09PSBudWxsIHx8IGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyZ3MuYXV0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBkZXRhaWxzIGFib3V0IGJvdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtZTogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLmdldFNlbGYucGF0aCgpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5nZXRTZWxmLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5nZXRTZWxmLnF1ZXJ5UGFyYW1zKSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLmdldFNlbGYuYm9keVBhcmFtcyksXG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2xpZW50X2F1dGgsIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hdXRoLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NsaWVudF9sb2dMZXZlbCwgKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvZ0xldmVsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBsb2dnaW5nXzEuTG9nTGV2ZWwuV0FSTiwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DbGllbnRfbG9nZ2VyLCAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9nZ2VyKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBsb2dnaW5nXzEubWFrZUNvbnNvbGVMb2dnZXIocGFja2FnZV9qc29uXzEubmFtZSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2xpZW50X3ByZWZpeFVybCwgKChfYyA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5iYXNlVXJsKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBcImh0dHBzOi8vYXBpLm5vdGlvbi5jb21cIikgKyBcIi92MS9cIiwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DbGllbnRfdGltZW91dE1zLCAoX2QgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudGltZW91dE1zKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiA2MDAwMCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DbGllbnRfbm90aW9uVmVyc2lvbiwgKF9lID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5vdGlvblZlcnNpb24pICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IENsaWVudC5kZWZhdWx0Tm90aW9uVmVyc2lvbiwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DbGllbnRfZmV0Y2gsIChfZiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5mZXRjaCkgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogbm9kZV9mZXRjaF8xLmRlZmF1bHQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2xpZW50X2FnZW50LCBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWdlbnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2xpZW50X3VzZXJBZ2VudCwgYG5vdGlvbmhxLWNsaWVudC8ke3BhY2thZ2VfanNvbl8xLnZlcnNpb259YCwgXCJmXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcGFyYW0gcXVlcnlcbiAgICAgKiBAcGFyYW0gYm9keVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdCh7IHBhdGgsIG1ldGhvZCwgcXVlcnksIGJvZHksIGF1dGgsIH0pIHtcbiAgICAgICAgdGhpcy5sb2cobG9nZ2luZ18xLkxvZ0xldmVsLklORk8sIFwicmVxdWVzdCBzdGFydFwiLCB7IG1ldGhvZCwgcGF0aCB9KTtcbiAgICAgICAgLy8gSWYgdGhlIGJvZHkgaXMgZW1wdHksIGRvbid0IHNlbmQgdGhlIGJvZHkgaW4gdGhlIEhUVFAgcmVxdWVzdFxuICAgICAgICBjb25zdCBib2R5QXNKc29uU3RyaW5nID0gIWJvZHkgfHwgT2JqZWN0LmVudHJpZXMoYm9keSkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DbGllbnRfcHJlZml4VXJsLCBcImZcIil9JHtwYXRofWApO1xuICAgICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHF1ZXJ5KSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmF1dGhBc0hlYWRlcnMoYXV0aCksXG4gICAgICAgICAgICBcIk5vdGlvbi1WZXJzaW9uXCI6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NsaWVudF9ub3Rpb25WZXJzaW9uLCBcImZcIiksXG4gICAgICAgICAgICBcInVzZXItYWdlbnRcIjogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2xpZW50X3VzZXJBZ2VudCwgXCJmXCIpLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoYm9keUFzSnNvblN0cmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZXJyb3JzXzEuUmVxdWVzdFRpbWVvdXRFcnJvci5yZWplY3RBZnRlclRpbWVvdXQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2xpZW50X2ZldGNoLCBcImZcIikuY2FsbCh0aGlzLCB1cmwudG9TdHJpbmcoKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IGJvZHlBc0pzb25TdHJpbmcsXG4gICAgICAgICAgICAgICAgYWdlbnQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NsaWVudF9hZ2VudCwgXCJmXCIpLFxuICAgICAgICAgICAgfSksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NsaWVudF90aW1lb3V0TXMsIFwiZlwiKSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3JzXzEuYnVpbGRSZXF1ZXN0RXJyb3IocmVzcG9uc2UsIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB0aGlzLmxvZyhsb2dnaW5nXzEuTG9nTGV2ZWwuSU5GTywgYHJlcXVlc3Qgc3VjY2Vzc2AsIHsgbWV0aG9kLCBwYXRoIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3JzXzEuaXNOb3Rpb25DbGllbnRFcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvZyB0aGUgZXJyb3IgaWYgaXQncyBvbmUgb2Ygb3VyIGtub3duIGVycm9yIHR5cGVzXG4gICAgICAgICAgICB0aGlzLmxvZyhsb2dnaW5nXzEuTG9nTGV2ZWwuV0FSTiwgYHJlcXVlc3QgZmFpbGAsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcnNfMS5pc0hUVFBSZXNwb25zZUVycm9yKGVycm9yKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIHNlbnNpdGl2ZSBpbmZvcm1hdGlvbiBzbyBpdCBpcyBsb2dnZWQgc2VwYXJhdGVseSBhdCB0aGUgREVCVUcgbGV2ZWxcbiAgICAgICAgICAgICAgICB0aGlzLmxvZyhsb2dnaW5nXzEuTG9nTGV2ZWwuREVCVUcsIGBmYWlsZWQgcmVzcG9uc2UgYm9keWAsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZXJyb3IuYm9keSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlYXJjaFxuICAgICAqL1xuICAgIHNlYXJjaChhcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYXBpX2VuZHBvaW50c18xLnNlYXJjaC5wYXRoKCksXG4gICAgICAgICAgICBtZXRob2Q6IGFwaV9lbmRwb2ludHNfMS5zZWFyY2gubWV0aG9kLFxuICAgICAgICAgICAgcXVlcnk6IGhlbHBlcnNfMS5waWNrKGFyZ3MsIGFwaV9lbmRwb2ludHNfMS5zZWFyY2gucXVlcnlQYXJhbXMpLFxuICAgICAgICAgICAgYm9keTogaGVscGVyc18xLnBpY2soYXJncywgYXBpX2VuZHBvaW50c18xLnNlYXJjaC5ib2R5UGFyYW1zKSxcbiAgICAgICAgICAgIGF1dGg6IGFyZ3MgPT09IG51bGwgfHwgYXJncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJncy5hdXRoLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgYSBsb2cgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsZXZlbCBUaGUgbGV2ZWwgZm9yIHRoaXMgbWVzc2FnZVxuICAgICAqIEBwYXJhbSBhcmdzIEFyZ3VtZW50cyB0byBzZW5kIHRvIHRoZSBjb25zb2xlXG4gICAgICovXG4gICAgbG9nKGxldmVsLCBtZXNzYWdlLCBleHRyYUluZm8pIHtcbiAgICAgICAgaWYgKGxvZ2dpbmdfMS5sb2dMZXZlbFNldmVyaXR5KGxldmVsKSA+PSBsb2dnaW5nXzEubG9nTGV2ZWxTZXZlcml0eShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DbGllbnRfbG9nTGV2ZWwsIFwiZlwiKSkpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NsaWVudF9sb2dnZXIsIFwiZlwiKS5jYWxsKHRoaXMsIGxldmVsLCBtZXNzYWdlLCBleHRyYUluZm8pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYW4gQVBJIGtleSBvciBhY2Nlc3MgdG9rZW4gaW50byBhIGhlYWRlcnMgb2JqZWN0IHN1aXRhYmxlIGZvciBhbiBIVFRQIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCB1c2VzIHRoZSBpbnN0YW5jZSdzIHZhbHVlIGFzIHRoZSBkZWZhdWx0IHdoZW4gdGhlIGlucHV0IGlzIHVuZGVmaW5lZC4gSWYgbmVpdGhlciBhcmUgZGVmaW5lZCwgaXQgcmV0dXJuc1xuICAgICAqIGFuIGVtcHR5IG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGF1dGggQVBJIGtleSBvciBhY2Nlc3MgdG9rZW5cbiAgICAgKiBAcmV0dXJucyBoZWFkZXJzIGtleS12YWx1ZSBvYmplY3RcbiAgICAgKi9cbiAgICBhdXRoQXNIZWFkZXJzKGF1dGgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgICAgICBjb25zdCBhdXRoSGVhZGVyVmFsdWUgPSBhdXRoICE9PSBudWxsICYmIGF1dGggIT09IHZvaWQgMCA/IGF1dGggOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DbGllbnRfYXV0aCwgXCJmXCIpO1xuICAgICAgICBpZiAoYXV0aEhlYWRlclZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke2F1dGhIZWFkZXJWYWx1ZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENsaWVudDtcbl9DbGllbnRfYXV0aCA9IG5ldyBXZWFrTWFwKCksIF9DbGllbnRfbG9nTGV2ZWwgPSBuZXcgV2Vha01hcCgpLCBfQ2xpZW50X2xvZ2dlciA9IG5ldyBXZWFrTWFwKCksIF9DbGllbnRfcHJlZml4VXJsID0gbmV3IFdlYWtNYXAoKSwgX0NsaWVudF90aW1lb3V0TXMgPSBuZXcgV2Vha01hcCgpLCBfQ2xpZW50X25vdGlvblZlcnNpb24gPSBuZXcgV2Vha01hcCgpLCBfQ2xpZW50X2ZldGNoID0gbmV3IFdlYWtNYXAoKSwgX0NsaWVudF9hZ2VudCA9IG5ldyBXZWFrTWFwKCksIF9DbGllbnRfdXNlckFnZW50ID0gbmV3IFdlYWtNYXAoKTtcbkNsaWVudC5kZWZhdWx0Tm90aW9uVmVyc2lvbiA9IFwiMjAyMS0wOC0xNlwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xpZW50LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLy8gY3NwZWxsOmRpc2FibGUtZmlsZVxuLy8gTm90ZTogVGhpcyBpcyBhIGdlbmVyYXRlZCBmaWxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZWFyY2ggPSBleHBvcnRzLmNyZWF0ZURhdGFiYXNlID0gZXhwb3J0cy5saXN0RGF0YWJhc2VzID0gZXhwb3J0cy5xdWVyeURhdGFiYXNlID0gZXhwb3J0cy51cGRhdGVEYXRhYmFzZSA9IGV4cG9ydHMuZ2V0RGF0YWJhc2UgPSBleHBvcnRzLmFwcGVuZEJsb2NrQ2hpbGRyZW4gPSBleHBvcnRzLmxpc3RCbG9ja0NoaWxkcmVuID0gZXhwb3J0cy5kZWxldGVCbG9jayA9IGV4cG9ydHMudXBkYXRlQmxvY2sgPSBleHBvcnRzLmdldEJsb2NrID0gZXhwb3J0cy5nZXRQYWdlUHJvcGVydHkgPSBleHBvcnRzLnVwZGF0ZVBhZ2UgPSBleHBvcnRzLmdldFBhZ2UgPSBleHBvcnRzLmNyZWF0ZVBhZ2UgPSBleHBvcnRzLmxpc3RVc2VycyA9IGV4cG9ydHMuZ2V0VXNlciA9IGV4cG9ydHMuZ2V0U2VsZiA9IHZvaWQgMDtcbmV4cG9ydHMuZ2V0U2VsZiA9IHtcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcGF0aFBhcmFtczogW10sXG4gICAgcXVlcnlQYXJhbXM6IFtdLFxuICAgIGJvZHlQYXJhbXM6IFtdLFxuICAgIHBhdGg6ICgpID0+IGB1c2Vycy9tZWAsXG59O1xuZXhwb3J0cy5nZXRVc2VyID0ge1xuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJ1c2VyX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXSxcbiAgICBwYXRoOiAocCkgPT4gYHVzZXJzLyR7cC51c2VyX2lkfWAsXG59O1xuZXhwb3J0cy5saXN0VXNlcnMgPSB7XG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHBhdGhQYXJhbXM6IFtdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJzdGFydF9jdXJzb3JcIiwgXCJwYWdlX3NpemVcIl0sXG4gICAgYm9keVBhcmFtczogW10sXG4gICAgcGF0aDogKCkgPT4gYHVzZXJzYCxcbn07XG5leHBvcnRzLmNyZWF0ZVBhZ2UgPSB7XG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBwYXRoUGFyYW1zOiBbXSxcbiAgICBxdWVyeVBhcmFtczogW10sXG4gICAgYm9keVBhcmFtczogW1wicGFyZW50XCIsIFwicHJvcGVydGllc1wiLCBcImljb25cIiwgXCJjb3ZlclwiLCBcImNvbnRlbnRcIiwgXCJjaGlsZHJlblwiXSxcbiAgICBwYXRoOiAoKSA9PiBgcGFnZXNgLFxufTtcbmV4cG9ydHMuZ2V0UGFnZSA9IHtcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcGF0aFBhcmFtczogW1wicGFnZV9pZFwiXSxcbiAgICBxdWVyeVBhcmFtczogW10sXG4gICAgYm9keVBhcmFtczogW10sXG4gICAgcGF0aDogKHApID0+IGBwYWdlcy8ke3AucGFnZV9pZH1gLFxufTtcbmV4cG9ydHMudXBkYXRlUGFnZSA9IHtcbiAgICBtZXRob2Q6IFwicGF0Y2hcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJwYWdlX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXCJwcm9wZXJ0aWVzXCIsIFwiaWNvblwiLCBcImNvdmVyXCIsIFwiYXJjaGl2ZWRcIl0sXG4gICAgcGF0aDogKHApID0+IGBwYWdlcy8ke3AucGFnZV9pZH1gLFxufTtcbmV4cG9ydHMuZ2V0UGFnZVByb3BlcnR5ID0ge1xuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJwYWdlX2lkXCIsIFwicHJvcGVydHlfaWRcIl0sXG4gICAgcXVlcnlQYXJhbXM6IFtcInN0YXJ0X2N1cnNvclwiLCBcInBhZ2Vfc2l6ZVwiXSxcbiAgICBib2R5UGFyYW1zOiBbXSxcbiAgICBwYXRoOiAocCkgPT4gYHBhZ2VzLyR7cC5wYWdlX2lkfS9wcm9wZXJ0aWVzLyR7cC5wcm9wZXJ0eV9pZH1gLFxufTtcbmV4cG9ydHMuZ2V0QmxvY2sgPSB7XG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHBhdGhQYXJhbXM6IFtcImJsb2NrX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXSxcbiAgICBwYXRoOiAocCkgPT4gYGJsb2Nrcy8ke3AuYmxvY2tfaWR9YCxcbn07XG5leHBvcnRzLnVwZGF0ZUJsb2NrID0ge1xuICAgIG1ldGhvZDogXCJwYXRjaFwiLFxuICAgIHBhdGhQYXJhbXM6IFtcImJsb2NrX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXG4gICAgICAgIFwiaGVhZGluZ18xXCIsXG4gICAgICAgIFwidHlwZVwiLFxuICAgICAgICBcImFyY2hpdmVkXCIsXG4gICAgICAgIFwiaGVhZGluZ18yXCIsXG4gICAgICAgIFwiaGVhZGluZ18zXCIsXG4gICAgICAgIFwiZW1iZWRcIixcbiAgICAgICAgXCJib29rbWFya1wiLFxuICAgICAgICBcImltYWdlXCIsXG4gICAgICAgIFwidmlkZW9cIixcbiAgICAgICAgXCJwZGZcIixcbiAgICAgICAgXCJmaWxlXCIsXG4gICAgICAgIFwiYXVkaW9cIixcbiAgICAgICAgXCJjb2RlXCIsXG4gICAgICAgIFwiZXF1YXRpb25cIixcbiAgICAgICAgXCJkaXZpZGVyXCIsXG4gICAgICAgIFwiYnJlYWRjcnVtYlwiLFxuICAgICAgICBcInRhYmxlX29mX2NvbnRlbnRzXCIsXG4gICAgICAgIFwibGlua190b19wYWdlXCIsXG4gICAgICAgIFwicGFyYWdyYXBoXCIsXG4gICAgICAgIFwiYnVsbGV0ZWRfbGlzdF9pdGVtXCIsXG4gICAgICAgIFwibnVtYmVyZWRfbGlzdF9pdGVtXCIsXG4gICAgICAgIFwicXVvdGVcIixcbiAgICAgICAgXCJ0b19kb1wiLFxuICAgICAgICBcInRvZ2dsZVwiLFxuICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgIFwiY2FsbG91dFwiLFxuICAgICAgICBcInN5bmNlZF9ibG9ja1wiLFxuICAgIF0sXG4gICAgcGF0aDogKHApID0+IGBibG9ja3MvJHtwLmJsb2NrX2lkfWAsXG59O1xuZXhwb3J0cy5kZWxldGVCbG9jayA9IHtcbiAgICBtZXRob2Q6IFwiZGVsZXRlXCIsXG4gICAgcGF0aFBhcmFtczogW1wiYmxvY2tfaWRcIl0sXG4gICAgcXVlcnlQYXJhbXM6IFtdLFxuICAgIGJvZHlQYXJhbXM6IFtdLFxuICAgIHBhdGg6IChwKSA9PiBgYmxvY2tzLyR7cC5ibG9ja19pZH1gLFxufTtcbmV4cG9ydHMubGlzdEJsb2NrQ2hpbGRyZW4gPSB7XG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHBhdGhQYXJhbXM6IFtcImJsb2NrX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXCJzdGFydF9jdXJzb3JcIiwgXCJwYWdlX3NpemVcIl0sXG4gICAgYm9keVBhcmFtczogW10sXG4gICAgcGF0aDogKHApID0+IGBibG9ja3MvJHtwLmJsb2NrX2lkfS9jaGlsZHJlbmAsXG59O1xuZXhwb3J0cy5hcHBlbmRCbG9ja0NoaWxkcmVuID0ge1xuICAgIG1ldGhvZDogXCJwYXRjaFwiLFxuICAgIHBhdGhQYXJhbXM6IFtcImJsb2NrX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXCJjaGlsZHJlblwiXSxcbiAgICBwYXRoOiAocCkgPT4gYGJsb2Nrcy8ke3AuYmxvY2tfaWR9L2NoaWxkcmVuYCxcbn07XG5leHBvcnRzLmdldERhdGFiYXNlID0ge1xuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJkYXRhYmFzZV9pZFwiXSxcbiAgICBxdWVyeVBhcmFtczogW10sXG4gICAgYm9keVBhcmFtczogW10sXG4gICAgcGF0aDogKHApID0+IGBkYXRhYmFzZXMvJHtwLmRhdGFiYXNlX2lkfWAsXG59O1xuZXhwb3J0cy51cGRhdGVEYXRhYmFzZSA9IHtcbiAgICBtZXRob2Q6IFwicGF0Y2hcIixcbiAgICBwYXRoUGFyYW1zOiBbXCJkYXRhYmFzZV9pZFwiXSxcbiAgICBxdWVyeVBhcmFtczogW10sXG4gICAgYm9keVBhcmFtczogW1widGl0bGVcIiwgXCJpY29uXCIsIFwiY292ZXJcIiwgXCJwcm9wZXJ0aWVzXCJdLFxuICAgIHBhdGg6IChwKSA9PiBgZGF0YWJhc2VzLyR7cC5kYXRhYmFzZV9pZH1gLFxufTtcbmV4cG9ydHMucXVlcnlEYXRhYmFzZSA9IHtcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIHBhdGhQYXJhbXM6IFtcImRhdGFiYXNlX2lkXCJdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXCJzb3J0c1wiLCBcImZpbHRlclwiLCBcInN0YXJ0X2N1cnNvclwiLCBcInBhZ2Vfc2l6ZVwiLCBcImFyY2hpdmVkXCJdLFxuICAgIHBhdGg6IChwKSA9PiBgZGF0YWJhc2VzLyR7cC5kYXRhYmFzZV9pZH0vcXVlcnlgLFxufTtcbmV4cG9ydHMubGlzdERhdGFiYXNlcyA9IHtcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcGF0aFBhcmFtczogW10sXG4gICAgcXVlcnlQYXJhbXM6IFtcInN0YXJ0X2N1cnNvclwiLCBcInBhZ2Vfc2l6ZVwiXSxcbiAgICBib2R5UGFyYW1zOiBbXSxcbiAgICBwYXRoOiAoKSA9PiBgZGF0YWJhc2VzYCxcbn07XG5leHBvcnRzLmNyZWF0ZURhdGFiYXNlID0ge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgcGF0aFBhcmFtczogW10sXG4gICAgcXVlcnlQYXJhbXM6IFtdLFxuICAgIGJvZHlQYXJhbXM6IFtcInBhcmVudFwiLCBcInByb3BlcnRpZXNcIiwgXCJpY29uXCIsIFwiY292ZXJcIiwgXCJ0aXRsZVwiXSxcbiAgICBwYXRoOiAoKSA9PiBgZGF0YWJhc2VzYCxcbn07XG5leHBvcnRzLnNlYXJjaCA9IHtcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIHBhdGhQYXJhbXM6IFtdLFxuICAgIHF1ZXJ5UGFyYW1zOiBbXSxcbiAgICBib2R5UGFyYW1zOiBbXCJzb3J0XCIsIFwicXVlcnlcIiwgXCJzdGFydF9jdXJzb3JcIiwgXCJwYWdlX3NpemVcIiwgXCJmaWx0ZXJcIl0sXG4gICAgcGF0aDogKCkgPT4gYHNlYXJjaGAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLWVuZHBvaW50cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYnVpbGRSZXF1ZXN0RXJyb3IgPSBleHBvcnRzLkFQSVJlc3BvbnNlRXJyb3IgPSBleHBvcnRzLlVua25vd25IVFRQUmVzcG9uc2VFcnJvciA9IGV4cG9ydHMuaXNIVFRQUmVzcG9uc2VFcnJvciA9IGV4cG9ydHMuUmVxdWVzdFRpbWVvdXRFcnJvciA9IGV4cG9ydHMuaXNOb3Rpb25DbGllbnRFcnJvciA9IGV4cG9ydHMuQ2xpZW50RXJyb3JDb2RlID0gZXhwb3J0cy5BUElFcnJvckNvZGUgPSB2b2lkIDA7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xuLyoqXG4gKiBFcnJvciBjb2RlcyByZXR1cm5lZCBpbiByZXNwb25zZXMgZnJvbSB0aGUgQVBJLlxuICovXG52YXIgQVBJRXJyb3JDb2RlO1xuKGZ1bmN0aW9uIChBUElFcnJvckNvZGUpIHtcbiAgICBBUElFcnJvckNvZGVbXCJVbmF1dGhvcml6ZWRcIl0gPSBcInVuYXV0aG9yaXplZFwiO1xuICAgIEFQSUVycm9yQ29kZVtcIlJlc3RyaWN0ZWRSZXNvdXJjZVwiXSA9IFwicmVzdHJpY3RlZF9yZXNvdXJjZVwiO1xuICAgIEFQSUVycm9yQ29kZVtcIk9iamVjdE5vdEZvdW5kXCJdID0gXCJvYmplY3Rfbm90X2ZvdW5kXCI7XG4gICAgQVBJRXJyb3JDb2RlW1wiUmF0ZUxpbWl0ZWRcIl0gPSBcInJhdGVfbGltaXRlZFwiO1xuICAgIEFQSUVycm9yQ29kZVtcIkludmFsaWRKU09OXCJdID0gXCJpbnZhbGlkX2pzb25cIjtcbiAgICBBUElFcnJvckNvZGVbXCJJbnZhbGlkUmVxdWVzdFVSTFwiXSA9IFwiaW52YWxpZF9yZXF1ZXN0X3VybFwiO1xuICAgIEFQSUVycm9yQ29kZVtcIkludmFsaWRSZXF1ZXN0XCJdID0gXCJpbnZhbGlkX3JlcXVlc3RcIjtcbiAgICBBUElFcnJvckNvZGVbXCJWYWxpZGF0aW9uRXJyb3JcIl0gPSBcInZhbGlkYXRpb25fZXJyb3JcIjtcbiAgICBBUElFcnJvckNvZGVbXCJDb25mbGljdEVycm9yXCJdID0gXCJjb25mbGljdF9lcnJvclwiO1xuICAgIEFQSUVycm9yQ29kZVtcIkludGVybmFsU2VydmVyRXJyb3JcIl0gPSBcImludGVybmFsX3NlcnZlcl9lcnJvclwiO1xuICAgIEFQSUVycm9yQ29kZVtcIlNlcnZpY2VVbmF2YWlsYWJsZVwiXSA9IFwic2VydmljZV91bmF2YWlsYWJsZVwiO1xufSkoQVBJRXJyb3JDb2RlID0gZXhwb3J0cy5BUElFcnJvckNvZGUgfHwgKGV4cG9ydHMuQVBJRXJyb3JDb2RlID0ge30pKTtcbi8qKlxuICogRXJyb3IgY29kZXMgZ2VuZXJhdGVkIGZvciBjbGllbnQgZXJyb3JzLlxuICovXG52YXIgQ2xpZW50RXJyb3JDb2RlO1xuKGZ1bmN0aW9uIChDbGllbnRFcnJvckNvZGUpIHtcbiAgICBDbGllbnRFcnJvckNvZGVbXCJSZXF1ZXN0VGltZW91dFwiXSA9IFwibm90aW9uaHFfY2xpZW50X3JlcXVlc3RfdGltZW91dFwiO1xuICAgIENsaWVudEVycm9yQ29kZVtcIlJlc3BvbnNlRXJyb3JcIl0gPSBcIm5vdGlvbmhxX2NsaWVudF9yZXNwb25zZV9lcnJvclwiO1xufSkoQ2xpZW50RXJyb3JDb2RlID0gZXhwb3J0cy5DbGllbnRFcnJvckNvZGUgfHwgKGV4cG9ydHMuQ2xpZW50RXJyb3JDb2RlID0ge30pKTtcbi8qKlxuICogQmFzZSBlcnJvciB0eXBlLlxuICovXG5jbGFzcyBOb3Rpb25DbGllbnRFcnJvckJhc2UgZXh0ZW5kcyBFcnJvciB7XG59XG4vKipcbiAqIEBwYXJhbSBlcnJvciBhbnkgdmFsdWUsIHVzdWFsbHkgYSBjYXVnaHQgZXJyb3IuXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgZXJyb3IgaXMgYSBgTm90aW9uQ2xpZW50RXJyb3JgLlxuICovXG5mdW5jdGlvbiBpc05vdGlvbkNsaWVudEVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGhlbHBlcnNfMS5pc09iamVjdChlcnJvcikgJiYgZXJyb3IgaW5zdGFuY2VvZiBOb3Rpb25DbGllbnRFcnJvckJhc2U7XG59XG5leHBvcnRzLmlzTm90aW9uQ2xpZW50RXJyb3IgPSBpc05vdGlvbkNsaWVudEVycm9yO1xuLyoqXG4gKiBOYXJyb3dzIGRvd24gdGhlIHR5cGVzIG9mIGEgTm90aW9uQ2xpZW50RXJyb3IuXG4gKiBAcGFyYW0gZXJyb3IgYW55IHZhbHVlLCB1c3VhbGx5IGEgY2F1Z2h0IGVycm9yLlxuICogQHBhcmFtIGNvZGVzIGFuIG9iamVjdCBtYXBwaW5nIGZyb20gcG9zc2libGUgZXJyb3IgY29kZXMgdG8gYHRydWVgXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgZXJyb3IgaXMgYSBgTm90aW9uQ2xpZW50RXJyb3JgIHdpdGggYSBjb2RlIGluIGBjb2Rlc2AuXG4gKi9cbmZ1bmN0aW9uIGlzTm90aW9uQ2xpZW50RXJyb3JXaXRoQ29kZShlcnJvciwgY29kZXMpIHtcbiAgICByZXR1cm4gaXNOb3Rpb25DbGllbnRFcnJvcihlcnJvcikgJiYgZXJyb3IuY29kZSBpbiBjb2Rlcztcbn1cbi8qKlxuICogRXJyb3IgdGhyb3duIGJ5IHRoZSBjbGllbnQgaWYgYSByZXF1ZXN0IHRpbWVzIG91dC5cbiAqL1xuY2xhc3MgUmVxdWVzdFRpbWVvdXRFcnJvciBleHRlbmRzIE5vdGlvbkNsaWVudEVycm9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSA9IFwiUmVxdWVzdCB0byBOb3Rpb24gQVBJIGhhcyB0aW1lZCBvdXRcIikge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5jb2RlID0gQ2xpZW50RXJyb3JDb2RlLlJlcXVlc3RUaW1lb3V0O1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlJlcXVlc3RUaW1lb3V0RXJyb3JcIjtcbiAgICB9XG4gICAgc3RhdGljIGlzUmVxdWVzdFRpbWVvdXRFcnJvcihlcnJvcikge1xuICAgICAgICByZXR1cm4gaXNOb3Rpb25DbGllbnRFcnJvcldpdGhDb2RlKGVycm9yLCB7XG4gICAgICAgICAgICBbQ2xpZW50RXJyb3JDb2RlLlJlcXVlc3RUaW1lb3V0XTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyByZWplY3RBZnRlclRpbWVvdXQocHJvbWlzZSwgdGltZW91dE1TKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IFJlcXVlc3RUaW1lb3V0RXJyb3IoKSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0TVMpO1xuICAgICAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVxdWVzdFRpbWVvdXRFcnJvciA9IFJlcXVlc3RUaW1lb3V0RXJyb3I7XG5jbGFzcyBIVFRQUmVzcG9uc2VFcnJvciBleHRlbmRzIE5vdGlvbkNsaWVudEVycm9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoYXJncykge1xuICAgICAgICBzdXBlcihhcmdzLm1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkhUVFBSZXNwb25zZUVycm9yXCI7XG4gICAgICAgIGNvbnN0IHsgY29kZSwgc3RhdHVzLCBoZWFkZXJzLCByYXdCb2R5VGV4dCB9ID0gYXJncztcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICAgIHRoaXMuYm9keSA9IHJhd0JvZHlUZXh0O1xuICAgIH1cbn1cbmNvbnN0IGh0dHBSZXNwb25zZUVycm9yQ29kZXMgPSB7XG4gICAgW0NsaWVudEVycm9yQ29kZS5SZXNwb25zZUVycm9yXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLlVuYXV0aG9yaXplZF06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5SZXN0cmljdGVkUmVzb3VyY2VdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuT2JqZWN0Tm90Rm91bmRdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuUmF0ZUxpbWl0ZWRdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuSW52YWxpZEpTT05dOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuSW52YWxpZFJlcXVlc3RVUkxdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuSW52YWxpZFJlcXVlc3RdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuVmFsaWRhdGlvbkVycm9yXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLkNvbmZsaWN0RXJyb3JdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuSW50ZXJuYWxTZXJ2ZXJFcnJvcl06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5TZXJ2aWNlVW5hdmFpbGFibGVdOiB0cnVlLFxufTtcbmZ1bmN0aW9uIGlzSFRUUFJlc3BvbnNlRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoIWlzTm90aW9uQ2xpZW50RXJyb3JXaXRoQ29kZShlcnJvciwgaHR0cFJlc3BvbnNlRXJyb3JDb2RlcykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuaXNIVFRQUmVzcG9uc2VFcnJvciA9IGlzSFRUUFJlc3BvbnNlRXJyb3I7XG4vKipcbiAqIEVycm9yIHRocm93biBpZiBhbiBBUEkgY2FsbCByZXNwb25kcyB3aXRoIGFuIHVua25vd24gZXJyb3IgY29kZSwgb3IgZG9lcyBub3QgcmVzcG9uZCB3aXRoXG4gKiBhIHByb3BlcnR5LWZvcm1hdHRlZCBlcnJvci5cbiAqL1xuY2xhc3MgVW5rbm93bkhUVFBSZXNwb25zZUVycm9yIGV4dGVuZHMgSFRUUFJlc3BvbnNlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICAuLi5hcmdzLFxuICAgICAgICAgICAgY29kZTogQ2xpZW50RXJyb3JDb2RlLlJlc3BvbnNlRXJyb3IsXG4gICAgICAgICAgICBtZXNzYWdlOiAoX2EgPSBhcmdzLm1lc3NhZ2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGBSZXF1ZXN0IHRvIE5vdGlvbiBBUEkgZmFpbGVkIHdpdGggc3RhdHVzOiAke2FyZ3Muc3RhdHVzfWAsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlVua25vd25IVFRQUmVzcG9uc2VFcnJvclwiO1xuICAgIH1cbiAgICBzdGF0aWMgaXNVbmtub3duSFRUUFJlc3BvbnNlRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGlzTm90aW9uQ2xpZW50RXJyb3JXaXRoQ29kZShlcnJvciwge1xuICAgICAgICAgICAgW0NsaWVudEVycm9yQ29kZS5SZXNwb25zZUVycm9yXTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Vbmtub3duSFRUUFJlc3BvbnNlRXJyb3IgPSBVbmtub3duSFRUUFJlc3BvbnNlRXJyb3I7XG5jb25zdCBhcGlFcnJvckNvZGVzID0ge1xuICAgIFtBUElFcnJvckNvZGUuVW5hdXRob3JpemVkXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLlJlc3RyaWN0ZWRSZXNvdXJjZV06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5PYmplY3ROb3RGb3VuZF06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5SYXRlTGltaXRlZF06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5JbnZhbGlkSlNPTl06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5JbnZhbGlkUmVxdWVzdFVSTF06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5JbnZhbGlkUmVxdWVzdF06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5WYWxpZGF0aW9uRXJyb3JdOiB0cnVlLFxuICAgIFtBUElFcnJvckNvZGUuQ29uZmxpY3RFcnJvcl06IHRydWUsXG4gICAgW0FQSUVycm9yQ29kZS5JbnRlcm5hbFNlcnZlckVycm9yXTogdHJ1ZSxcbiAgICBbQVBJRXJyb3JDb2RlLlNlcnZpY2VVbmF2YWlsYWJsZV06IHRydWUsXG59O1xuLyoqXG4gKiBBIHJlc3BvbnNlIGZyb20gdGhlIEFQSSBpbmRpY2F0aW5nIGEgcHJvYmxlbS5cbiAqIFVzZSB0aGUgYGNvZGVgIHByb3BlcnR5IHRvIGhhbmRsZSB2YXJpb3VzIGtpbmRzIG9mIGVycm9ycy4gQWxsIGl0cyBwb3NzaWJsZSB2YWx1ZXMgYXJlIGluIGBBUElFcnJvckNvZGVgLlxuICovXG5jbGFzcyBBUElSZXNwb25zZUVycm9yIGV4dGVuZHMgSFRUUFJlc3BvbnNlRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkFQSVJlc3BvbnNlRXJyb3JcIjtcbiAgICB9XG4gICAgc3RhdGljIGlzQVBJUmVzcG9uc2VFcnJvcihlcnJvcikge1xuICAgICAgICByZXR1cm4gaXNOb3Rpb25DbGllbnRFcnJvcldpdGhDb2RlKGVycm9yLCBhcGlFcnJvckNvZGVzKTtcbiAgICB9XG59XG5leHBvcnRzLkFQSVJlc3BvbnNlRXJyb3IgPSBBUElSZXNwb25zZUVycm9yO1xuZnVuY3Rpb24gYnVpbGRSZXF1ZXN0RXJyb3IocmVzcG9uc2UsIGJvZHlUZXh0KSB7XG4gICAgY29uc3QgYXBpRXJyb3JSZXNwb25zZUJvZHkgPSBwYXJzZUFQSUVycm9yUmVzcG9uc2VCb2R5KGJvZHlUZXh0KTtcbiAgICBpZiAoYXBpRXJyb3JSZXNwb25zZUJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmV3IEFQSVJlc3BvbnNlRXJyb3Ioe1xuICAgICAgICAgICAgY29kZTogYXBpRXJyb3JSZXNwb25zZUJvZHkuY29kZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGFwaUVycm9yUmVzcG9uc2VCb2R5Lm1lc3NhZ2UsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICByYXdCb2R5VGV4dDogYm9keVRleHQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFVua25vd25IVFRQUmVzcG9uc2VFcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHJhd0JvZHlUZXh0OiBib2R5VGV4dCxcbiAgICB9KTtcbn1cbmV4cG9ydHMuYnVpbGRSZXF1ZXN0RXJyb3IgPSBidWlsZFJlcXVlc3RFcnJvcjtcbmZ1bmN0aW9uIHBhcnNlQVBJRXJyb3JSZXNwb25zZUJvZHkoYm9keSkge1xuICAgIGlmICh0eXBlb2YgYm9keSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXJzZWQ7XG4gICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICB9XG4gICAgY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWhlbHBlcnNfMS5pc09iamVjdChwYXJzZWQpIHx8XG4gICAgICAgIHR5cGVvZiBwYXJzZWRbXCJtZXNzYWdlXCJdICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICFpc0FQSUVycm9yQ29kZShwYXJzZWRbXCJjb2RlXCJdKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnBhcnNlZCxcbiAgICAgICAgY29kZTogcGFyc2VkW1wiY29kZVwiXSxcbiAgICAgICAgbWVzc2FnZTogcGFyc2VkW1wibWVzc2FnZVwiXSxcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNBUElFcnJvckNvZGUoY29kZSkge1xuICAgIHJldHVybiB0eXBlb2YgY29kZSA9PT0gXCJzdHJpbmdcIiAmJiBjb2RlIGluIGFwaUVycm9yQ29kZXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzT2JqZWN0ID0gZXhwb3J0cy5waWNrID0gZXhwb3J0cy5hc3NlcnROZXZlciA9IHZvaWQgMDtcbi8qKlxuICogVXRpbGl0eSBmb3IgZW5mb3JjaW5nIGV4aGF1c3RpdmVuZXNzIGNoZWNrcyBpbiB0aGUgdHlwZSBzeXN0ZW0uXG4gKlxuICogQHNlZSBodHRwczovL2Jhc2FyYXQuZ2l0Ym9vay5pby90eXBlc2NyaXB0L3R5cGUtc3lzdGVtL2Rpc2NyaW1pbmF0ZWQtdW5pb25zI3Rocm93LWluLWV4aGF1c3RpdmUtY2hlY2tzXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YXJpYWJsZSB3aXRoIG5vIHJlbWFpbmluZyB2YWx1ZXNcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0TmV2ZXIodmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgc2hvdWxkIG5ldmVyIG9jY3VyOiAke3ZhbHVlfWApO1xufVxuZXhwb3J0cy5hc3NlcnROZXZlciA9IGFzc2VydE5ldmVyO1xuZnVuY3Rpb24gcGljayhiYXNlLCBrZXlzKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGtleXMubWFwKGtleSA9PiBba2V5LCBiYXNlID09PSBudWxsIHx8IGJhc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJhc2Vba2V5XV0pO1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoZW50cmllcyk7XG59XG5leHBvcnRzLnBpY2sgPSBwaWNrO1xuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNOb3Rpb25DbGllbnRFcnJvciA9IGV4cG9ydHMuUmVxdWVzdFRpbWVvdXRFcnJvciA9IGV4cG9ydHMuVW5rbm93bkhUVFBSZXNwb25zZUVycm9yID0gZXhwb3J0cy5BUElSZXNwb25zZUVycm9yID0gZXhwb3J0cy5DbGllbnRFcnJvckNvZGUgPSBleHBvcnRzLkFQSUVycm9yQ29kZSA9IGV4cG9ydHMuTG9nTGV2ZWwgPSBleHBvcnRzLkNsaWVudCA9IHZvaWQgMDtcbnZhciBDbGllbnRfMSA9IHJlcXVpcmUoXCIuL0NsaWVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNsaWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQ2xpZW50XzEuZGVmYXVsdDsgfSB9KTtcbnZhciBsb2dnaW5nXzEgPSByZXF1aXJlKFwiLi9sb2dnaW5nXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTG9nTGV2ZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGxvZ2dpbmdfMS5Mb2dMZXZlbDsgfSB9KTtcbnZhciBlcnJvcnNfMSA9IHJlcXVpcmUoXCIuL2Vycm9yc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFQSUVycm9yQ29kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEuQVBJRXJyb3JDb2RlOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2xpZW50RXJyb3JDb2RlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcnNfMS5DbGllbnRFcnJvckNvZGU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBUElSZXNwb25zZUVycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcnNfMS5BUElSZXNwb25zZUVycm9yOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVW5rbm93bkhUVFBSZXNwb25zZUVycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcnNfMS5Vbmtub3duSFRUUFJlc3BvbnNlRXJyb3I7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSZXF1ZXN0VGltZW91dEVycm9yXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlcnJvcnNfMS5SZXF1ZXN0VGltZW91dEVycm9yOyB9IH0pO1xuLy8gRXJyb3IgaGVscGVyc1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNOb3Rpb25DbGllbnRFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEuaXNOb3Rpb25DbGllbnRFcnJvcjsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2dMZXZlbFNldmVyaXR5ID0gZXhwb3J0cy5tYWtlQ29uc29sZUxvZ2dlciA9IGV4cG9ydHMuTG9nTGV2ZWwgPSB2b2lkIDA7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIExvZ0xldmVsO1xuKGZ1bmN0aW9uIChMb2dMZXZlbCkge1xuICAgIExvZ0xldmVsW1wiREVCVUdcIl0gPSBcImRlYnVnXCI7XG4gICAgTG9nTGV2ZWxbXCJJTkZPXCJdID0gXCJpbmZvXCI7XG4gICAgTG9nTGV2ZWxbXCJXQVJOXCJdID0gXCJ3YXJuXCI7XG4gICAgTG9nTGV2ZWxbXCJFUlJPUlwiXSA9IFwiZXJyb3JcIjtcbn0pKExvZ0xldmVsID0gZXhwb3J0cy5Mb2dMZXZlbCB8fCAoZXhwb3J0cy5Mb2dMZXZlbCA9IHt9KSk7XG5mdW5jdGlvbiBtYWtlQ29uc29sZUxvZ2dlcihuYW1lKSB7XG4gICAgcmV0dXJuIChsZXZlbCwgbWVzc2FnZSwgZXh0cmFJbmZvKSA9PiB7XG4gICAgICAgIGNvbnNvbGVbbGV2ZWxdKGAke25hbWV9ICR7bGV2ZWx9OmAsIG1lc3NhZ2UsIGV4dHJhSW5mbyk7XG4gICAgfTtcbn1cbmV4cG9ydHMubWFrZUNvbnNvbGVMb2dnZXIgPSBtYWtlQ29uc29sZUxvZ2dlcjtcbi8qKlxuICogVHJhbnNmb3JtcyBhIGxvZyBsZXZlbCBpbnRvIGEgY29tcGFyYWJsZSAobnVtZXJpY2FsKSB2YWx1ZSBvcmRlcmVkIGJ5IHNldmVyaXR5LlxuICovXG5mdW5jdGlvbiBsb2dMZXZlbFNldmVyaXR5KGxldmVsKSB7XG4gICAgc3dpdGNoIChsZXZlbCkge1xuICAgICAgICBjYXNlIExvZ0xldmVsLkRFQlVHOlxuICAgICAgICAgICAgcmV0dXJuIDIwO1xuICAgICAgICBjYXNlIExvZ0xldmVsLklORk86XG4gICAgICAgICAgICByZXR1cm4gNDA7XG4gICAgICAgIGNhc2UgTG9nTGV2ZWwuV0FSTjpcbiAgICAgICAgICAgIHJldHVybiA2MDtcbiAgICAgICAgY2FzZSBMb2dMZXZlbC5FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiA4MDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBoZWxwZXJzXzEuYXNzZXJ0TmV2ZXIobGV2ZWwpO1xuICAgIH1cbn1cbmV4cG9ydHMubG9nTGV2ZWxTZXZlcml0eSA9IGxvZ0xldmVsU2V2ZXJpdHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2dnaW5nLmpzLm1hcCIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9lbmMtYmFzZTY0XCIpLCByZXF1aXJlKFwiLi9tZDVcIiksIHJlcXVpcmUoXCIuL2V2cGtkZlwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vZW5jLWJhc2U2NFwiLCBcIi4vbWQ1XCIsIFwiLi9ldnBrZGZcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgQmxvY2tDaXBoZXIgPSBDX2xpYi5CbG9ja0NpcGhlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIExvb2t1cCB0YWJsZXNcblx0ICAgIHZhciBTQk9YID0gW107XG5cdCAgICB2YXIgSU5WX1NCT1ggPSBbXTtcblx0ICAgIHZhciBTVUJfTUlYXzAgPSBbXTtcblx0ICAgIHZhciBTVUJfTUlYXzEgPSBbXTtcblx0ICAgIHZhciBTVUJfTUlYXzIgPSBbXTtcblx0ICAgIHZhciBTVUJfTUlYXzMgPSBbXTtcblx0ICAgIHZhciBJTlZfU1VCX01JWF8wID0gW107XG5cdCAgICB2YXIgSU5WX1NVQl9NSVhfMSA9IFtdO1xuXHQgICAgdmFyIElOVl9TVUJfTUlYXzIgPSBbXTtcblx0ICAgIHZhciBJTlZfU1VCX01JWF8zID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgbG9va3VwIHRhYmxlc1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBDb21wdXRlIGRvdWJsZSB0YWJsZVxuXHQgICAgICAgIHZhciBkID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHQgICAgICAgICAgICBpZiAoaSA8IDEyOCkge1xuXHQgICAgICAgICAgICAgICAgZFtpXSA9IGkgPDwgMTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGRbaV0gPSAoaSA8PCAxKSBeIDB4MTFiO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gV2FsayBHRigyXjgpXG5cdCAgICAgICAgdmFyIHggPSAwO1xuXHQgICAgICAgIHZhciB4aSA9IDA7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHQgICAgICAgICAgICAvLyBDb21wdXRlIHNib3hcblx0ICAgICAgICAgICAgdmFyIHN4ID0geGkgXiAoeGkgPDwgMSkgXiAoeGkgPDwgMikgXiAoeGkgPDwgMykgXiAoeGkgPDwgNCk7XG5cdCAgICAgICAgICAgIHN4ID0gKHN4ID4+PiA4KSBeIChzeCAmIDB4ZmYpIF4gMHg2Mztcblx0ICAgICAgICAgICAgU0JPWFt4XSA9IHN4O1xuXHQgICAgICAgICAgICBJTlZfU0JPWFtzeF0gPSB4O1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgbXVsdGlwbGljYXRpb25cblx0ICAgICAgICAgICAgdmFyIHgyID0gZFt4XTtcblx0ICAgICAgICAgICAgdmFyIHg0ID0gZFt4Ml07XG5cdCAgICAgICAgICAgIHZhciB4OCA9IGRbeDRdO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgc3ViIGJ5dGVzLCBtaXggY29sdW1ucyB0YWJsZXNcblx0ICAgICAgICAgICAgdmFyIHQgPSAoZFtzeF0gKiAweDEwMSkgXiAoc3ggKiAweDEwMTAxMDApO1xuXHQgICAgICAgICAgICBTVUJfTUlYXzBbeF0gPSAodCA8PCAyNCkgfCAodCA+Pj4gOCk7XG5cdCAgICAgICAgICAgIFNVQl9NSVhfMVt4XSA9ICh0IDw8IDE2KSB8ICh0ID4+PiAxNik7XG5cdCAgICAgICAgICAgIFNVQl9NSVhfMlt4XSA9ICh0IDw8IDgpICB8ICh0ID4+PiAyNCk7XG5cdCAgICAgICAgICAgIFNVQl9NSVhfM1t4XSA9IHQ7XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBpbnYgc3ViIGJ5dGVzLCBpbnYgbWl4IGNvbHVtbnMgdGFibGVzXG5cdCAgICAgICAgICAgIHZhciB0ID0gKHg4ICogMHgxMDEwMTAxKSBeICh4NCAqIDB4MTAwMDEpIF4gKHgyICogMHgxMDEpIF4gKHggKiAweDEwMTAxMDApO1xuXHQgICAgICAgICAgICBJTlZfU1VCX01JWF8wW3N4XSA9ICh0IDw8IDI0KSB8ICh0ID4+PiA4KTtcblx0ICAgICAgICAgICAgSU5WX1NVQl9NSVhfMVtzeF0gPSAodCA8PCAxNikgfCAodCA+Pj4gMTYpO1xuXHQgICAgICAgICAgICBJTlZfU1VCX01JWF8yW3N4XSA9ICh0IDw8IDgpICB8ICh0ID4+PiAyNCk7XG5cdCAgICAgICAgICAgIElOVl9TVUJfTUlYXzNbc3hdID0gdDtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIG5leHQgY291bnRlclxuXHQgICAgICAgICAgICBpZiAoIXgpIHtcblx0ICAgICAgICAgICAgICAgIHggPSB4aSA9IDE7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB4ID0geDIgXiBkW2RbZFt4OCBeIHgyXV1dO1xuXHQgICAgICAgICAgICAgICAgeGkgXj0gZFtkW3hpXV07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvLyBQcmVjb21wdXRlZCBSY29uIGxvb2t1cFxuXHQgICAgdmFyIFJDT04gPSBbMHgwMCwgMHgwMSwgMHgwMiwgMHgwNCwgMHgwOCwgMHgxMCwgMHgyMCwgMHg0MCwgMHg4MCwgMHgxYiwgMHgzNl07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQUVTIGJsb2NrIGNpcGhlciBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBBRVMgPSBDX2FsZ28uQUVTID0gQmxvY2tDaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgdDtcblxuXHQgICAgICAgICAgICAvLyBTa2lwIHJlc2V0IG9mIG5Sb3VuZHMgaGFzIGJlZW4gc2V0IGJlZm9yZSBhbmQga2V5IGRpZCBub3QgY2hhbmdlXG5cdCAgICAgICAgICAgIGlmICh0aGlzLl9uUm91bmRzICYmIHRoaXMuX2tleVByaW9yUmVzZXQgPT09IHRoaXMuX2tleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9rZXlQcmlvclJlc2V0ID0gdGhpcy5fa2V5O1xuXHQgICAgICAgICAgICB2YXIga2V5V29yZHMgPSBrZXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBrZXlTaXplID0ga2V5LnNpZ0J5dGVzIC8gNDtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIG51bWJlciBvZiByb3VuZHNcblx0ICAgICAgICAgICAgdmFyIG5Sb3VuZHMgPSB0aGlzLl9uUm91bmRzID0ga2V5U2l6ZSArIDY7XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBudW1iZXIgb2Yga2V5IHNjaGVkdWxlIHJvd3Ncblx0ICAgICAgICAgICAgdmFyIGtzUm93cyA9IChuUm91bmRzICsgMSkgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUga2V5IHNjaGVkdWxlXG5cdCAgICAgICAgICAgIHZhciBrZXlTY2hlZHVsZSA9IHRoaXMuX2tleVNjaGVkdWxlID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGtzUm93ID0gMDsga3NSb3cgPCBrc1Jvd3M7IGtzUm93KyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChrc1JvdyA8IGtleVNpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICBrZXlTY2hlZHVsZVtrc1Jvd10gPSBrZXlXb3Jkc1trc1Jvd107XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHQgPSBrZXlTY2hlZHVsZVtrc1JvdyAtIDFdO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCEoa3NSb3cgJSBrZXlTaXplKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBSb3Qgd29yZFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKHQgPDwgOCkgfCAodCA+Pj4gMjQpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YiB3b3JkXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAoU0JPWFt0ID4+PiAyNF0gPDwgMjQpIHwgKFNCT1hbKHQgPj4+IDE2KSAmIDB4ZmZdIDw8IDE2KSB8IChTQk9YWyh0ID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFt0ICYgMHhmZl07XG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWl4IFJjb25cblx0ICAgICAgICAgICAgICAgICAgICAgICAgdCBePSBSQ09OWyhrc1JvdyAvIGtleVNpemUpIHwgMF0gPDwgMjQ7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlTaXplID4gNiAmJiBrc1JvdyAlIGtleVNpemUgPT0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWIgd29yZFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKFNCT1hbdCA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyh0ID4+PiAxNikgJiAweGZmXSA8PCAxNikgfCAoU0JPWFsodCA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8IFNCT1hbdCAmIDB4ZmZdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIGtleVNjaGVkdWxlW2tzUm93XSA9IGtleVNjaGVkdWxlW2tzUm93IC0ga2V5U2l6ZV0gXiB0O1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBpbnYga2V5IHNjaGVkdWxlXG5cdCAgICAgICAgICAgIHZhciBpbnZLZXlTY2hlZHVsZSA9IHRoaXMuX2ludktleVNjaGVkdWxlID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGludktzUm93ID0gMDsgaW52S3NSb3cgPCBrc1Jvd3M7IGludktzUm93KyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBrc1JvdyA9IGtzUm93cyAtIGludktzUm93O1xuXG5cdCAgICAgICAgICAgICAgICBpZiAoaW52S3NSb3cgJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBrZXlTY2hlZHVsZVtrc1Jvd107XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0ID0ga2V5U2NoZWR1bGVba3NSb3cgLSA0XTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgaWYgKGludktzUm93IDwgNCB8fCBrc1JvdyA8PSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaW52S2V5U2NoZWR1bGVbaW52S3NSb3ddID0gdDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaW52S2V5U2NoZWR1bGVbaW52S3NSb3ddID0gSU5WX1NVQl9NSVhfMFtTQk9YW3QgPj4+IDI0XV0gXiBJTlZfU1VCX01JWF8xW1NCT1hbKHQgPj4+IDE2KSAmIDB4ZmZdXSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU5WX1NVQl9NSVhfMltTQk9YWyh0ID4+PiA4KSAmIDB4ZmZdXSBeIElOVl9TVUJfTUlYXzNbU0JPWFt0ICYgMHhmZl1dO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGVuY3J5cHRCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICB0aGlzLl9kb0NyeXB0QmxvY2soTSwgb2Zmc2V0LCB0aGlzLl9rZXlTY2hlZHVsZSwgU1VCX01JWF8wLCBTVUJfTUlYXzEsIFNVQl9NSVhfMiwgU1VCX01JWF8zLCBTQk9YKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgZGVjcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFN3YXAgMm5kIGFuZCA0dGggcm93c1xuXHQgICAgICAgICAgICB2YXIgdCA9IE1bb2Zmc2V0ICsgMV07XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgMV0gPSBNW29mZnNldCArIDNdO1xuXHQgICAgICAgICAgICBNW29mZnNldCArIDNdID0gdDtcblxuXHQgICAgICAgICAgICB0aGlzLl9kb0NyeXB0QmxvY2soTSwgb2Zmc2V0LCB0aGlzLl9pbnZLZXlTY2hlZHVsZSwgSU5WX1NVQl9NSVhfMCwgSU5WX1NVQl9NSVhfMSwgSU5WX1NVQl9NSVhfMiwgSU5WX1NVQl9NSVhfMywgSU5WX1NCT1gpO1xuXG5cdCAgICAgICAgICAgIC8vIEludiBzd2FwIDJuZCBhbmQgNHRoIHJvd3Ncblx0ICAgICAgICAgICAgdmFyIHQgPSBNW29mZnNldCArIDFdO1xuXHQgICAgICAgICAgICBNW29mZnNldCArIDFdID0gTVtvZmZzZXQgKyAzXTtcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAzXSA9IHQ7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0NyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQsIGtleVNjaGVkdWxlLCBTVUJfTUlYXzAsIFNVQl9NSVhfMSwgU1VCX01JWF8yLCBTVUJfTUlYXzMsIFNCT1gpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIG5Sb3VuZHMgPSB0aGlzLl9uUm91bmRzO1xuXG5cdCAgICAgICAgICAgIC8vIEdldCBpbnB1dCwgYWRkIHJvdW5kIGtleVxuXHQgICAgICAgICAgICB2YXIgczAgPSBNW29mZnNldF0gICAgIF4ga2V5U2NoZWR1bGVbMF07XG5cdCAgICAgICAgICAgIHZhciBzMSA9IE1bb2Zmc2V0ICsgMV0gXiBrZXlTY2hlZHVsZVsxXTtcblx0ICAgICAgICAgICAgdmFyIHMyID0gTVtvZmZzZXQgKyAyXSBeIGtleVNjaGVkdWxlWzJdO1xuXHQgICAgICAgICAgICB2YXIgczMgPSBNW29mZnNldCArIDNdIF4ga2V5U2NoZWR1bGVbM107XG5cblx0ICAgICAgICAgICAgLy8gS2V5IHNjaGVkdWxlIHJvdyBjb3VudGVyXG5cdCAgICAgICAgICAgIHZhciBrc1JvdyA9IDQ7XG5cblx0ICAgICAgICAgICAgLy8gUm91bmRzXG5cdCAgICAgICAgICAgIGZvciAodmFyIHJvdW5kID0gMTsgcm91bmQgPCBuUm91bmRzOyByb3VuZCsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaGlmdCByb3dzLCBzdWIgYnl0ZXMsIG1peCBjb2x1bW5zLCBhZGQgcm91bmQga2V5XG5cdCAgICAgICAgICAgICAgICB2YXIgdDAgPSBTVUJfTUlYXzBbczAgPj4+IDI0XSBeIFNVQl9NSVhfMVsoczEgPj4+IDE2KSAmIDB4ZmZdIF4gU1VCX01JWF8yWyhzMiA+Pj4gOCkgJiAweGZmXSBeIFNVQl9NSVhfM1tzMyAmIDB4ZmZdIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG5cdCAgICAgICAgICAgICAgICB2YXIgdDEgPSBTVUJfTUlYXzBbczEgPj4+IDI0XSBeIFNVQl9NSVhfMVsoczIgPj4+IDE2KSAmIDB4ZmZdIF4gU1VCX01JWF8yWyhzMyA+Pj4gOCkgJiAweGZmXSBeIFNVQl9NSVhfM1tzMCAmIDB4ZmZdIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG5cdCAgICAgICAgICAgICAgICB2YXIgdDIgPSBTVUJfTUlYXzBbczIgPj4+IDI0XSBeIFNVQl9NSVhfMVsoczMgPj4+IDE2KSAmIDB4ZmZdIF4gU1VCX01JWF8yWyhzMCA+Pj4gOCkgJiAweGZmXSBeIFNVQl9NSVhfM1tzMSAmIDB4ZmZdIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG5cdCAgICAgICAgICAgICAgICB2YXIgdDMgPSBTVUJfTUlYXzBbczMgPj4+IDI0XSBeIFNVQl9NSVhfMVsoczAgPj4+IDE2KSAmIDB4ZmZdIF4gU1VCX01JWF8yWyhzMSA+Pj4gOCkgJiAweGZmXSBeIFNVQl9NSVhfM1tzMiAmIDB4ZmZdIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG5cblx0ICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuXHQgICAgICAgICAgICAgICAgczAgPSB0MDtcblx0ICAgICAgICAgICAgICAgIHMxID0gdDE7XG5cdCAgICAgICAgICAgICAgICBzMiA9IHQyO1xuXHQgICAgICAgICAgICAgICAgczMgPSB0Mztcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFNoaWZ0IHJvd3MsIHN1YiBieXRlcywgYWRkIHJvdW5kIGtleVxuXHQgICAgICAgICAgICB2YXIgdDAgPSAoKFNCT1hbczAgPj4+IDI0XSA8PCAyNCkgfCAoU0JPWFsoczEgPj4+IDE2KSAmIDB4ZmZdIDw8IDE2KSB8IChTQk9YWyhzMiA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8IFNCT1hbczMgJiAweGZmXSkgXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcblx0ICAgICAgICAgICAgdmFyIHQxID0gKChTQk9YW3MxID4+PiAyNF0gPDwgMjQpIHwgKFNCT1hbKHMyID4+PiAxNikgJiAweGZmXSA8PCAxNikgfCAoU0JPWFsoczMgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBTQk9YW3MwICYgMHhmZl0pIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG5cdCAgICAgICAgICAgIHZhciB0MiA9ICgoU0JPWFtzMiA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMyA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMwID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMSAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuXHQgICAgICAgICAgICB2YXIgdDMgPSAoKFNCT1hbczMgPj4+IDI0XSA8PCAyNCkgfCAoU0JPWFsoczAgPj4+IDE2KSAmIDB4ZmZdIDw8IDE2KSB8IChTQk9YWyhzMSA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8IFNCT1hbczIgJiAweGZmXSkgXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgb3V0cHV0XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0XSAgICAgPSB0MDtcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAxXSA9IHQxO1xuXHQgICAgICAgICAgICBNW29mZnNldCArIDJdID0gdDI7XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgM10gPSB0Mztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAga2V5U2l6ZTogMjU2LzMyXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbnMgdG8gdGhlIGNpcGhlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGNpcGhlcnRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChtZXNzYWdlLCBrZXksIGNmZyk7XG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XG5cdCAgICAgKi9cblx0ICAgIEMuQUVTID0gQmxvY2tDaXBoZXIuX2NyZWF0ZUhlbHBlcihBRVMpO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLkFFUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vZXZwa2RmXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogQ2lwaGVyIGNvcmUgY29tcG9uZW50cy5cblx0ICovXG5cdENyeXB0b0pTLmxpYi5DaXBoZXIgfHwgKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobTtcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4O1xuXHQgICAgdmFyIEJhc2U2NCA9IENfZW5jLkJhc2U2NDtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cdCAgICB2YXIgRXZwS0RGID0gQ19hbGdvLkV2cEtERjtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBiYXNlIGNpcGhlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0ga2V5U2l6ZSBUaGlzIGNpcGhlcidzIGtleSBzaXplLiBEZWZhdWx0OiA0ICgxMjggYml0cylcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpdlNpemUgVGhpcyBjaXBoZXIncyBJViBzaXplLiBEZWZhdWx0OiA0ICgxMjggYml0cylcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfRU5DX1hGT1JNX01PREUgQSBjb25zdGFudCByZXByZXNlbnRpbmcgZW5jcnlwdGlvbiBtb2RlLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9ERUNfWEZPUk1fTU9ERSBBIGNvbnN0YW50IHJlcHJlc2VudGluZyBkZWNyeXB0aW9uIG1vZGUuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDaXBoZXIgPSBDX2xpYi5DaXBoZXIgPSBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IGl2IFRoZSBJViB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgdGhpcyBjaXBoZXIgaW4gZW5jcnlwdGlvbiBtb2RlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IGtleSBUaGUga2V5LlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJ9IEEgY2lwaGVyIGluc3RhbmNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVyID0gQ3J5cHRvSlMuYWxnby5BRVMuY3JlYXRlRW5jcnlwdG9yKGtleVdvcmRBcnJheSwgeyBpdjogaXZXb3JkQXJyYXkgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY3JlYXRlRW5jcnlwdG9yOiBmdW5jdGlvbiAoa2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuX0VOQ19YRk9STV9NT0RFLCBrZXksIGNmZyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgdGhpcyBjaXBoZXIgaW4gZGVjcnlwdGlvbiBtb2RlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IGtleSBUaGUga2V5LlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJ9IEEgY2lwaGVyIGluc3RhbmNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVyID0gQ3J5cHRvSlMuYWxnby5BRVMuY3JlYXRlRGVjcnlwdG9yKGtleVdvcmRBcnJheSwgeyBpdjogaXZXb3JkQXJyYXkgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY3JlYXRlRGVjcnlwdG9yOiBmdW5jdGlvbiAoa2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuX0RFQ19YRk9STV9NT0RFLCBrZXksIGNmZyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBjaXBoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0geGZvcm1Nb2RlIEVpdGhlciB0aGUgZW5jcnlwdGlvbiBvciBkZWNyeXB0aW9uIHRyYW5zb3JtYXRpb24gbW9kZSBjb25zdGFudC5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0ga2V5IFRoZSBrZXkuXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlciA9IENyeXB0b0pTLmFsZ28uQUVTLmNyZWF0ZShDcnlwdG9KUy5hbGdvLkFFUy5fRU5DX1hGT1JNX01PREUsIGtleVdvcmRBcnJheSwgeyBpdjogaXZXb3JkQXJyYXkgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHhmb3JtTW9kZSwga2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gU3RvcmUgdHJhbnNmb3JtIG1vZGUgYW5kIGtleVxuXHQgICAgICAgICAgICB0aGlzLl94Zm9ybU1vZGUgPSB4Zm9ybU1vZGU7XG5cdCAgICAgICAgICAgIHRoaXMuX2tleSA9IGtleTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBjaXBoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGNpcGhlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWNpcGhlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgZGF0YSB0byBiZSBlbmNyeXB0ZWQgb3IgZGVjcnlwdGVkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhVXBkYXRlIFRoZSBkYXRhIHRvIGVuY3J5cHQgb3IgZGVjcnlwdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRhdGEgYWZ0ZXIgcHJvY2Vzc2luZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGVuY3J5cHRlZCA9IGNpcGhlci5wcm9jZXNzKCdkYXRhJyk7XG5cdCAgICAgICAgICogICAgIHZhciBlbmNyeXB0ZWQgPSBjaXBoZXIucHJvY2Vzcyh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChkYXRhVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQoZGF0YVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBhdmFpbGFibGUgYmxvY2tzXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgZW5jcnlwdGlvbiBvciBkZWNyeXB0aW9uIHByb2Nlc3MuXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gZGF0YVVwZGF0ZSBUaGUgZmluYWwgZGF0YSB0byBlbmNyeXB0IG9yIGRlY3J5cHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBkYXRhIGFmdGVyIGZpbmFsIHByb2Nlc3NpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBlbmNyeXB0ZWQgPSBjaXBoZXIuZmluYWxpemUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGVuY3J5cHRlZCA9IGNpcGhlci5maW5hbGl6ZSgnZGF0YScpO1xuXHQgICAgICAgICAqICAgICB2YXIgZW5jcnlwdGVkID0gY2lwaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChkYXRhVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEZpbmFsIGRhdGEgdXBkYXRlXG5cdCAgICAgICAgICAgIGlmIChkYXRhVXBkYXRlKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQoZGF0YVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWNpcGhlciBsb2dpY1xuXHQgICAgICAgICAgICB2YXIgZmluYWxQcm9jZXNzZWREYXRhID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBmaW5hbFByb2Nlc3NlZERhdGE7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGtleVNpemU6IDEyOC8zMixcblxuXHQgICAgICAgIGl2U2l6ZTogMTI4LzMyLFxuXG5cdCAgICAgICAgX0VOQ19YRk9STV9NT0RFOiAxLFxuXG5cdCAgICAgICAgX0RFQ19YRk9STV9NT0RFOiAyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBzaG9ydGN1dCBmdW5jdGlvbnMgdG8gYSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBUaGUgY2lwaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGVuY3J5cHQgYW5kIGRlY3J5cHQgc2hvcnRjdXQgZnVuY3Rpb25zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgQUVTID0gQ3J5cHRvSlMubGliLkNpcGhlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uQUVTKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBmdW5jdGlvbiBzZWxlY3RDaXBoZXJTdHJhdGVneShrZXkpIHtcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFBhc3N3b3JkQmFzZWRDaXBoZXI7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXJpYWxpemFibGVDaXBoZXI7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNpcGhlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgICAgICBlbmNyeXB0OiBmdW5jdGlvbiAobWVzc2FnZSwga2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdENpcGhlclN0cmF0ZWd5KGtleSkuZW5jcnlwdChjaXBoZXIsIG1lc3NhZ2UsIGtleSwgY2ZnKTtcblx0ICAgICAgICAgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgICAgICAgICAgZGVjcnlwdDogZnVuY3Rpb24gKGNpcGhlcnRleHQsIGtleSwgY2ZnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RDaXBoZXJTdHJhdGVneShrZXkpLmRlY3J5cHQoY2lwaGVyLCBjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9KCkpXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBiYXNlIHN0cmVhbSBjaXBoZXIgdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgbnVtYmVyIG9mIDMyLWJpdCB3b3JkcyB0aGlzIGNpcGhlciBvcGVyYXRlcyBvbi4gRGVmYXVsdDogMSAoMzIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIFN0cmVhbUNpcGhlciA9IENfbGliLlN0cmVhbUNpcGhlciA9IENpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgdmFyIGZpbmFsUHJvY2Vzc2VkQmxvY2tzID0gdGhpcy5fcHJvY2VzcyghISdmbHVzaCcpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBmaW5hbFByb2Nlc3NlZEJsb2Nrcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiAxXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBNb2RlIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbW9kZSA9IEMubW9kZSA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJhc2UgYmxvY2sgY2lwaGVyIG1vZGUgdGVtcGxhdGUuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCbG9ja0NpcGhlck1vZGUgPSBDX2xpYi5CbG9ja0NpcGhlck1vZGUgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyB0aGlzIG1vZGUgZm9yIGVuY3J5cHRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIEEgYmxvY2sgY2lwaGVyIGluc3RhbmNlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGl2IFRoZSBJViB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIG1vZGUgPSBDcnlwdG9KUy5tb2RlLkNCQy5jcmVhdGVFbmNyeXB0b3IoY2lwaGVyLCBpdi53b3Jkcyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY3JlYXRlRW5jcnlwdG9yOiBmdW5jdGlvbiAoY2lwaGVyLCBpdikge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5FbmNyeXB0b3IuY3JlYXRlKGNpcGhlciwgaXYpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIHRoaXMgbW9kZSBmb3IgZGVjcnlwdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgQSBibG9jayBjaXBoZXIgaW5zdGFuY2UuXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gaXYgVGhlIElWIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbW9kZSA9IENyeXB0b0pTLm1vZGUuQ0JDLmNyZWF0ZURlY3J5cHRvcihjaXBoZXIsIGl2LndvcmRzKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjcmVhdGVEZWNyeXB0b3I6IGZ1bmN0aW9uIChjaXBoZXIsIGl2KSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLkRlY3J5cHRvci5jcmVhdGUoY2lwaGVyLCBpdik7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBtb2RlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBBIGJsb2NrIGNpcGhlciBpbnN0YW5jZS5cblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBpdiBUaGUgSVYgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBtb2RlID0gQ3J5cHRvSlMubW9kZS5DQkMuRW5jcnlwdG9yLmNyZWF0ZShjaXBoZXIsIGl2LndvcmRzKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2lwaGVyLCBpdikge1xuXHQgICAgICAgICAgICB0aGlzLl9jaXBoZXIgPSBjaXBoZXI7XG5cdCAgICAgICAgICAgIHRoaXMuX2l2ID0gaXY7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQ2lwaGVyIEJsb2NrIENoYWluaW5nIG1vZGUuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDQkMgPSBDX21vZGUuQ0JDID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBYnN0cmFjdCBiYXNlIENCQyBtb2RlLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHZhciBDQkMgPSBCbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDQkMgZW5jcnlwdG9yLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIENCQy5FbmNyeXB0b3IgPSBDQkMuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIFByb2Nlc3NlcyB0aGUgZGF0YSBibG9jayBhdCBvZmZzZXQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIFRoZSBkYXRhIHdvcmRzIHRvIG9wZXJhdGUgb24uXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgVGhlIG9mZnNldCB3aGVyZSB0aGUgYmxvY2sgc3RhcnRzLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgbW9kZS5wcm9jZXNzQmxvY2soZGF0YS53b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlcjtcblx0ICAgICAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBYT1IgYW5kIGVuY3J5cHRcblx0ICAgICAgICAgICAgICAgIHhvckJsb2NrLmNhbGwodGhpcywgd29yZHMsIG9mZnNldCwgYmxvY2tTaXplKTtcblx0ICAgICAgICAgICAgICAgIGNpcGhlci5lbmNyeXB0QmxvY2sod29yZHMsIG9mZnNldCk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRoaXMgYmxvY2sgdG8gdXNlIHdpdGggbmV4dCBibG9ja1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fcHJldkJsb2NrID0gd29yZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBibG9ja1NpemUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDQkMgZGVjcnlwdG9yLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIENCQy5EZWNyeXB0b3IgPSBDQkMuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIFByb2Nlc3NlcyB0aGUgZGF0YSBibG9jayBhdCBvZmZzZXQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIFRoZSBkYXRhIHdvcmRzIHRvIG9wZXJhdGUgb24uXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgVGhlIG9mZnNldCB3aGVyZSB0aGUgYmxvY2sgc3RhcnRzLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgbW9kZS5wcm9jZXNzQmxvY2soZGF0YS53b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlcjtcblx0ICAgICAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1lbWJlciB0aGlzIGJsb2NrIHRvIHVzZSB3aXRoIG5leHQgYmxvY2tcblx0ICAgICAgICAgICAgICAgIHZhciB0aGlzQmxvY2sgPSB3b3Jkcy5zbGljZShvZmZzZXQsIG9mZnNldCArIGJsb2NrU2l6ZSk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIERlY3J5cHQgYW5kIFhPUlxuXHQgICAgICAgICAgICAgICAgY2lwaGVyLmRlY3J5cHRCbG9jayh3b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIHhvckJsb2NrLmNhbGwodGhpcywgd29yZHMsIG9mZnNldCwgYmxvY2tTaXplKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gVGhpcyBibG9jayBiZWNvbWVzIHRoZSBwcmV2aW91cyBibG9ja1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fcHJldkJsb2NrID0gdGhpc0Jsb2NrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cblx0ICAgICAgICBmdW5jdGlvbiB4b3JCbG9jayh3b3Jkcywgb2Zmc2V0LCBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBpdiA9IHRoaXMuX2l2O1xuXG5cdCAgICAgICAgICAgIC8vIENob29zZSBtaXhpbmcgYmxvY2tcblx0ICAgICAgICAgICAgaWYgKGl2KSB7XG5cdCAgICAgICAgICAgICAgICBibG9jayA9IGl2O1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgSVYgZm9yIHN1YnNlcXVlbnQgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGJsb2NrID0gdGhpcy5fcHJldkJsb2NrO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gWE9SIGJsb2Nrc1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrU2l6ZTsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tvZmZzZXQgKyBpXSBePSBibG9ja1tpXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiBDQkM7XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFBhZGRpbmcgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19wYWQgPSBDLnBhZCA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFBLQ1MgIzUvNyBwYWRkaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgUGtjczcgPSBDX3BhZC5Qa2NzNyA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQYWRzIGRhdGEgdXNpbmcgdGhlIGFsZ29yaXRobSBkZWZpbmVkIGluIFBLQ1MgIzUvNy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBkYXRhIFRoZSBkYXRhIHRvIHBhZC5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gYmxvY2tTaXplIFRoZSBtdWx0aXBsZSB0aGF0IHRoZSBkYXRhIHNob3VsZCBiZSBwYWRkZWQgdG8uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIENyeXB0b0pTLnBhZC5Qa2NzNy5wYWQod29yZEFycmF5LCA0KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYWQ6IGZ1bmN0aW9uIChkYXRhLCBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBwYWRkaW5nIGJ5dGVzXG5cdCAgICAgICAgICAgIHZhciBuUGFkZGluZ0J5dGVzID0gYmxvY2tTaXplQnl0ZXMgLSBkYXRhLnNpZ0J5dGVzICUgYmxvY2tTaXplQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ3JlYXRlIHBhZGRpbmcgd29yZFxuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ1dvcmQgPSAoblBhZGRpbmdCeXRlcyA8PCAyNCkgfCAoblBhZGRpbmdCeXRlcyA8PCAxNikgfCAoblBhZGRpbmdCeXRlcyA8PCA4KSB8IG5QYWRkaW5nQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ3JlYXRlIHBhZGRpbmdcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmdXb3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5QYWRkaW5nQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgcGFkZGluZ1dvcmRzLnB1c2gocGFkZGluZ1dvcmQpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nID0gV29yZEFycmF5LmNyZWF0ZShwYWRkaW5nV29yZHMsIG5QYWRkaW5nQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGEuY29uY2F0KHBhZGRpbmcpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVbnBhZHMgZGF0YSB0aGF0IGhhZCBiZWVuIHBhZGRlZCB1c2luZyB0aGUgYWxnb3JpdGhtIGRlZmluZWQgaW4gUEtDUyAjNS83LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IGRhdGEgVGhlIGRhdGEgdG8gdW5wYWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIENyeXB0b0pTLnBhZC5Qa2NzNy51bnBhZCh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHVucGFkOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAvLyBHZXQgbnVtYmVyIG9mIHBhZGRpbmcgYnl0ZXMgZnJvbSBsYXN0IGJ5dGVcblx0ICAgICAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBkYXRhLndvcmRzWyhkYXRhLnNpZ0J5dGVzIC0gMSkgPj4+IDJdICYgMHhmZjtcblxuXHQgICAgICAgICAgICAvLyBSZW1vdmUgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5QYWRkaW5nQnl0ZXM7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBiYXNlIGJsb2NrIGNpcGhlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgY2lwaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiA0ICgxMjggYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEJsb2NrQ2lwaGVyID0gQ19saWIuQmxvY2tDaXBoZXIgPSBDaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge01vZGV9IG1vZGUgVGhlIGJsb2NrIG1vZGUgdG8gdXNlLiBEZWZhdWx0OiBDQkNcblx0ICAgICAgICAgKiBAcHJvcGVydHkge1BhZGRpbmd9IHBhZGRpbmcgVGhlIHBhZGRpbmcgc3RyYXRlZ3kgdG8gdXNlLiBEZWZhdWx0OiBQa2NzN1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQ2lwaGVyLmNmZy5leHRlbmQoe1xuXHQgICAgICAgICAgICBtb2RlOiBDQkMsXG5cdCAgICAgICAgICAgIHBhZGRpbmc6IFBrY3M3XG5cdCAgICAgICAgfSksXG5cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgbW9kZUNyZWF0b3I7XG5cblx0ICAgICAgICAgICAgLy8gUmVzZXQgY2lwaGVyXG5cdCAgICAgICAgICAgIENpcGhlci5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgY2ZnID0gdGhpcy5jZmc7XG5cdCAgICAgICAgICAgIHZhciBpdiA9IGNmZy5pdjtcblx0ICAgICAgICAgICAgdmFyIG1vZGUgPSBjZmcubW9kZTtcblxuXHQgICAgICAgICAgICAvLyBSZXNldCBibG9jayBtb2RlXG5cdCAgICAgICAgICAgIGlmICh0aGlzLl94Zm9ybU1vZGUgPT0gdGhpcy5fRU5DX1hGT1JNX01PREUpIHtcblx0ICAgICAgICAgICAgICAgIG1vZGVDcmVhdG9yID0gbW9kZS5jcmVhdGVFbmNyeXB0b3I7XG5cdCAgICAgICAgICAgIH0gZWxzZSAvKiBpZiAodGhpcy5feGZvcm1Nb2RlID09IHRoaXMuX0RFQ19YRk9STV9NT0RFKSAqLyB7XG5cdCAgICAgICAgICAgICAgICBtb2RlQ3JlYXRvciA9IG1vZGUuY3JlYXRlRGVjcnlwdG9yO1xuXHQgICAgICAgICAgICAgICAgLy8gS2VlcCBhdCBsZWFzdCBvbmUgYmxvY2sgaW4gdGhlIGJ1ZmZlciBmb3IgdW5wYWRkaW5nXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9taW5CdWZmZXJTaXplID0gMTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIGlmICh0aGlzLl9tb2RlICYmIHRoaXMuX21vZGUuX19jcmVhdG9yID09IG1vZGVDcmVhdG9yKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb2RlLmluaXQodGhpcywgaXYgJiYgaXYud29yZHMpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGVDcmVhdG9yLmNhbGwobW9kZSwgdGhpcywgaXYgJiYgaXYud29yZHMpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9kZS5fX2NyZWF0b3IgPSBtb2RlQ3JlYXRvcjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uICh3b3Jkcywgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuX21vZGUucHJvY2Vzc0Jsb2NrKHdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgZmluYWxQcm9jZXNzZWRCbG9ja3M7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSB0aGlzLmNmZy5wYWRkaW5nO1xuXG5cdCAgICAgICAgICAgIC8vIEZpbmFsaXplXG5cdCAgICAgICAgICAgIGlmICh0aGlzLl94Zm9ybU1vZGUgPT0gdGhpcy5fRU5DX1hGT1JNX01PREUpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFBhZCBkYXRhXG5cdCAgICAgICAgICAgICAgICBwYWRkaW5nLnBhZCh0aGlzLl9kYXRhLCB0aGlzLmJsb2NrU2l6ZSk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICBmaW5hbFByb2Nlc3NlZEJsb2NrcyA9IHRoaXMuX3Byb2Nlc3MoISEnZmx1c2gnKTtcblx0ICAgICAgICAgICAgfSBlbHNlIC8qIGlmICh0aGlzLl94Zm9ybU1vZGUgPT0gdGhpcy5fREVDX1hGT1JNX01PREUpICovIHtcblx0ICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICBmaW5hbFByb2Nlc3NlZEJsb2NrcyA9IHRoaXMuX3Byb2Nlc3MoISEnZmx1c2gnKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gVW5wYWQgZGF0YVxuXHQgICAgICAgICAgICAgICAgcGFkZGluZy51bnBhZChmaW5hbFByb2Nlc3NlZEJsb2Nrcyk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gZmluYWxQcm9jZXNzZWRCbG9ja3M7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogMTI4LzMyXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBIGNvbGxlY3Rpb24gb2YgY2lwaGVyIHBhcmFtZXRlcnMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IGNpcGhlcnRleHQgVGhlIHJhdyBjaXBoZXJ0ZXh0LlxuXHQgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IGtleSBUaGUga2V5IHRvIHRoaXMgY2lwaGVydGV4dC5cblx0ICAgICAqIEBwcm9wZXJ0eSB7V29yZEFycmF5fSBpdiBUaGUgSVYgdXNlZCBpbiB0aGUgY2lwaGVyaW5nIG9wZXJhdGlvbi5cblx0ICAgICAqIEBwcm9wZXJ0eSB7V29yZEFycmF5fSBzYWx0IFRoZSBzYWx0IHVzZWQgd2l0aCBhIGtleSBkZXJpdmF0aW9uIGZ1bmN0aW9uLlxuXHQgICAgICogQHByb3BlcnR5IHtDaXBoZXJ9IGFsZ29yaXRobSBUaGUgY2lwaGVyIGFsZ29yaXRobS5cblx0ICAgICAqIEBwcm9wZXJ0eSB7TW9kZX0gbW9kZSBUaGUgYmxvY2sgbW9kZSB1c2VkIGluIHRoZSBjaXBoZXJpbmcgb3BlcmF0aW9uLlxuXHQgICAgICogQHByb3BlcnR5IHtQYWRkaW5nfSBwYWRkaW5nIFRoZSBwYWRkaW5nIHNjaGVtZSB1c2VkIGluIHRoZSBjaXBoZXJpbmcgb3BlcmF0aW9uLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgYmxvY2sgc2l6ZSBvZiB0aGUgY2lwaGVyLlxuXHQgICAgICogQHByb3BlcnR5IHtGb3JtYXR9IGZvcm1hdHRlciBUaGUgZGVmYXVsdCBmb3JtYXR0aW5nIHN0cmF0ZWd5IHRvIGNvbnZlcnQgdGhpcyBjaXBoZXIgcGFyYW1zIG9iamVjdCB0byBhIHN0cmluZy5cblx0ICAgICAqL1xuXHQgICAgdmFyIENpcGhlclBhcmFtcyA9IENfbGliLkNpcGhlclBhcmFtcyA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2lwaGVyUGFyYW1zIEFuIG9iamVjdCB3aXRoIGFueSBvZiB0aGUgcG9zc2libGUgY2lwaGVyIHBhcmFtZXRlcnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJQYXJhbXMgPSBDcnlwdG9KUy5saWIuQ2lwaGVyUGFyYW1zLmNyZWF0ZSh7XG5cdCAgICAgICAgICogICAgICAgICBjaXBoZXJ0ZXh0OiBjaXBoZXJ0ZXh0V29yZEFycmF5LFxuXHQgICAgICAgICAqICAgICAgICAga2V5OiBrZXlXb3JkQXJyYXksXG5cdCAgICAgICAgICogICAgICAgICBpdjogaXZXb3JkQXJyYXksXG5cdCAgICAgICAgICogICAgICAgICBzYWx0OiBzYWx0V29yZEFycmF5LFxuXHQgICAgICAgICAqICAgICAgICAgYWxnb3JpdGhtOiBDcnlwdG9KUy5hbGdvLkFFUyxcblx0ICAgICAgICAgKiAgICAgICAgIG1vZGU6IENyeXB0b0pTLm1vZGUuQ0JDLFxuXHQgICAgICAgICAqICAgICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBLQ1M3LFxuXHQgICAgICAgICAqICAgICAgICAgYmxvY2tTaXplOiA0LFxuXHQgICAgICAgICAqICAgICAgICAgZm9ybWF0dGVyOiBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTFxuXHQgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2lwaGVyUGFyYW1zKSB7XG5cdCAgICAgICAgICAgIHRoaXMubWl4SW4oY2lwaGVyUGFyYW1zKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyBjaXBoZXIgcGFyYW1zIG9iamVjdCB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Rm9ybWF0fSBmb3JtYXR0ZXIgKE9wdGlvbmFsKSBUaGUgZm9ybWF0dGluZyBzdHJhdGVneSB0byB1c2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmdpZmllZCBjaXBoZXIgcGFyYW1zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHRocm93cyBFcnJvciBJZiBuZWl0aGVyIHRoZSBmb3JtYXR0ZXIgbm9yIHRoZSBkZWZhdWx0IGZvcm1hdHRlciBpcyBzZXQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSBjaXBoZXJQYXJhbXMgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IGNpcGhlclBhcmFtcy50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gY2lwaGVyUGFyYW1zLnRvU3RyaW5nKENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGZvcm1hdHRlciB8fCB0aGlzLmZvcm1hdHRlcikuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEZvcm1hdCBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2Zvcm1hdCA9IEMuZm9ybWF0ID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogT3BlblNTTCBmb3JtYXR0aW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgT3BlblNTTEZvcm1hdHRlciA9IENfZm9ybWF0Lk9wZW5TU0wgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBjaXBoZXIgcGFyYW1zIG9iamVjdCB0byBhbiBPcGVuU1NMLWNvbXBhdGlibGUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJQYXJhbXN9IGNpcGhlclBhcmFtcyBUaGUgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBPcGVuU1NMLWNvbXBhdGlibGUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgb3BlblNTTFN0cmluZyA9IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMLnN0cmluZ2lmeShjaXBoZXJQYXJhbXMpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKGNpcGhlclBhcmFtcykge1xuXHQgICAgICAgICAgICB2YXIgd29yZEFycmF5O1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IGNpcGhlclBhcmFtcy5jaXBoZXJ0ZXh0O1xuXHQgICAgICAgICAgICB2YXIgc2FsdCA9IGNpcGhlclBhcmFtcy5zYWx0O1xuXG5cdCAgICAgICAgICAgIC8vIEZvcm1hdFxuXHQgICAgICAgICAgICBpZiAoc2FsdCkge1xuXHQgICAgICAgICAgICAgICAgd29yZEFycmF5ID0gV29yZEFycmF5LmNyZWF0ZShbMHg1MzYxNmM3NCwgMHg2NTY0NWY1Zl0pLmNvbmNhdChzYWx0KS5jb25jYXQoY2lwaGVydGV4dCk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB3b3JkQXJyYXkgPSBjaXBoZXJ0ZXh0O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHdvcmRBcnJheS50b1N0cmluZyhCYXNlNjQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhbiBPcGVuU1NMLWNvbXBhdGlibGUgc3RyaW5nIHRvIGEgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3BlblNTTFN0ciBUaGUgT3BlblNTTC1jb21wYXRpYmxlIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlclBhcmFtc30gVGhlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVyUGFyYW1zID0gQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wucGFyc2Uob3BlblNTTFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChvcGVuU1NMU3RyKSB7XG5cdCAgICAgICAgICAgIHZhciBzYWx0O1xuXG5cdCAgICAgICAgICAgIC8vIFBhcnNlIGJhc2U2NFxuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IEJhc2U2NC5wYXJzZShvcGVuU1NMU3RyKTtcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dFdvcmRzID0gY2lwaGVydGV4dC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBUZXN0IGZvciBzYWx0XG5cdCAgICAgICAgICAgIGlmIChjaXBoZXJ0ZXh0V29yZHNbMF0gPT0gMHg1MzYxNmM3NCAmJiBjaXBoZXJ0ZXh0V29yZHNbMV0gPT0gMHg2NTY0NWY1Zikge1xuXHQgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBzYWx0XG5cdCAgICAgICAgICAgICAgICBzYWx0ID0gV29yZEFycmF5LmNyZWF0ZShjaXBoZXJ0ZXh0V29yZHMuc2xpY2UoMiwgNCkpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgc2FsdCBmcm9tIGNpcGhlcnRleHRcblx0ICAgICAgICAgICAgICAgIGNpcGhlcnRleHRXb3Jkcy5zcGxpY2UoMCwgNCk7XG5cdCAgICAgICAgICAgICAgICBjaXBoZXJ0ZXh0LnNpZ0J5dGVzIC09IDE2O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIENpcGhlclBhcmFtcy5jcmVhdGUoeyBjaXBoZXJ0ZXh0OiBjaXBoZXJ0ZXh0LCBzYWx0OiBzYWx0IH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQSBjaXBoZXIgd3JhcHBlciB0aGF0IHJldHVybnMgY2lwaGVydGV4dCBhcyBhIHNlcmlhbGl6YWJsZSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNlcmlhbGl6YWJsZUNpcGhlciA9IENfbGliLlNlcmlhbGl6YWJsZUNpcGhlciA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge0Zvcm1hdHRlcn0gZm9ybWF0IFRoZSBmb3JtYXR0aW5nIHN0cmF0ZWd5IHRvIGNvbnZlcnQgY2lwaGVyIHBhcmFtIG9iamVjdHMgdG8gYW5kIGZyb20gYSBzdHJpbmcuIERlZmF1bHQ6IE9wZW5TU0xcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgZm9ybWF0OiBPcGVuU1NMRm9ybWF0dGVyXG5cdCAgICAgICAgfSksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBFbmNyeXB0cyBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIFRoZSBjaXBoZXIgYWxnb3JpdGhtIHRvIHVzZS5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZW5jcnlwdC5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0ga2V5IFRoZSBrZXkuXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlclBhcmFtc30gQSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlcnRleHRQYXJhbXMgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0UGFyYW1zID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5lbmNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBtZXNzYWdlLCBrZXksIHsgaXY6IGl2IH0pO1xuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVydGV4dFBhcmFtcyA9IENyeXB0b0pTLmxpYi5TZXJpYWxpemFibGVDaXBoZXIuZW5jcnlwdChDcnlwdG9KUy5hbGdvLkFFUywgbWVzc2FnZSwga2V5LCB7IGl2OiBpdiwgZm9ybWF0OiBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTCB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBlbmNyeXB0OiBmdW5jdGlvbiAoY2lwaGVyLCBtZXNzYWdlLCBrZXksIGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICB2YXIgZW5jcnlwdG9yID0gY2lwaGVyLmNyZWF0ZUVuY3J5cHRvcihrZXksIGNmZyk7XG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJ0ZXh0ID0gZW5jcnlwdG9yLmZpbmFsaXplKG1lc3NhZ2UpO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJDZmcgPSBlbmNyeXB0b3IuY2ZnO1xuXG5cdCAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHNlcmlhbGl6YWJsZSBjaXBoZXIgcGFyYW1zXG5cdCAgICAgICAgICAgIHJldHVybiBDaXBoZXJQYXJhbXMuY3JlYXRlKHtcblx0ICAgICAgICAgICAgICAgIGNpcGhlcnRleHQ6IGNpcGhlcnRleHQsXG5cdCAgICAgICAgICAgICAgICBrZXk6IGtleSxcblx0ICAgICAgICAgICAgICAgIGl2OiBjaXBoZXJDZmcuaXYsXG5cdCAgICAgICAgICAgICAgICBhbGdvcml0aG06IGNpcGhlcixcblx0ICAgICAgICAgICAgICAgIG1vZGU6IGNpcGhlckNmZy5tb2RlLFxuXHQgICAgICAgICAgICAgICAgcGFkZGluZzogY2lwaGVyQ2ZnLnBhZGRpbmcsXG5cdCAgICAgICAgICAgICAgICBibG9ja1NpemU6IGNpcGhlci5ibG9ja1NpemUsXG5cdCAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGNmZy5mb3JtYXRcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIERlY3J5cHRzIHNlcmlhbGl6ZWQgY2lwaGVydGV4dC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgVGhlIGNpcGhlciBhbGdvcml0aG0gdG8gdXNlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyUGFyYW1zfHN0cmluZ30gY2lwaGVydGV4dCBUaGUgY2lwaGVydGV4dCB0byBkZWNyeXB0LlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBrZXkgVGhlIGtleS5cblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcGxhaW50ZXh0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcGxhaW50ZXh0ID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5kZWNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBmb3JtYXR0ZWRDaXBoZXJ0ZXh0LCBrZXksIHsgaXY6IGl2LCBmb3JtYXQ6IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMIH0pO1xuXHQgICAgICAgICAqICAgICB2YXIgcGxhaW50ZXh0ID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5kZWNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBjaXBoZXJ0ZXh0UGFyYW1zLCBrZXksIHsgaXY6IGl2LCBmb3JtYXQ6IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMIH0pO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGRlY3J5cHQ6IGZ1bmN0aW9uIChjaXBoZXIsIGNpcGhlcnRleHQsIGtleSwgY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICBjZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBDaXBoZXJQYXJhbXNcblx0ICAgICAgICAgICAgY2lwaGVydGV4dCA9IHRoaXMuX3BhcnNlKGNpcGhlcnRleHQsIGNmZy5mb3JtYXQpO1xuXG5cdCAgICAgICAgICAgIC8vIERlY3J5cHRcblx0ICAgICAgICAgICAgdmFyIHBsYWludGV4dCA9IGNpcGhlci5jcmVhdGVEZWNyeXB0b3Ioa2V5LCBjZmcpLmZpbmFsaXplKGNpcGhlcnRleHQuY2lwaGVydGV4dCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHBsYWludGV4dDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgc2VyaWFsaXplZCBjaXBoZXJ0ZXh0IHRvIENpcGhlclBhcmFtcyxcblx0ICAgICAgICAgKiBlbHNlIGFzc3VtZWQgQ2lwaGVyUGFyYW1zIGFscmVhZHkgYW5kIHJldHVybnMgY2lwaGVydGV4dCB1bmNoYW5nZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlclBhcmFtc3xzdHJpbmd9IGNpcGhlcnRleHQgVGhlIGNpcGhlcnRleHQuXG5cdCAgICAgICAgICogQHBhcmFtIHtGb3JtYXR0ZXJ9IGZvcm1hdCBUaGUgZm9ybWF0dGluZyBzdHJhdGVneSB0byB1c2UgdG8gcGFyc2Ugc2VyaWFsaXplZCBjaXBoZXJ0ZXh0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyUGFyYW1zfSBUaGUgdW5zZXJpYWxpemVkIGNpcGhlcnRleHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0UGFyYW1zID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5fcGFyc2UoY2lwaGVydGV4dFN0cmluZ09yUGFyYW1zLCBmb3JtYXQpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wYXJzZTogZnVuY3Rpb24gKGNpcGhlcnRleHQsIGZvcm1hdCkge1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNpcGhlcnRleHQgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQucGFyc2UoY2lwaGVydGV4dCwgdGhpcyk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gY2lwaGVydGV4dDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEtleSBkZXJpdmF0aW9uIGZ1bmN0aW9uIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfa2RmID0gQy5rZGYgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBPcGVuU1NMIGtleSBkZXJpdmF0aW9uIGZ1bmN0aW9uLlxuXHQgICAgICovXG5cdCAgICB2YXIgT3BlblNTTEtkZiA9IENfa2RmLk9wZW5TU0wgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRGVyaXZlcyBhIGtleSBhbmQgSVYgZnJvbSBhIHBhc3N3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZCB0byBkZXJpdmUgZnJvbS5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0ga2V5U2l6ZSBUaGUgc2l6ZSBpbiB3b3JkcyBvZiB0aGUga2V5IHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpdlNpemUgVGhlIHNpemUgaW4gd29yZHMgb2YgdGhlIElWIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gc2FsdCAoT3B0aW9uYWwpIEEgNjQtYml0IHNhbHQgdG8gdXNlLiBJZiBvbWl0dGVkLCBhIHNhbHQgd2lsbCBiZSBnZW5lcmF0ZWQgcmFuZG9tbHkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJQYXJhbXN9IEEgY2lwaGVyIHBhcmFtcyBvYmplY3Qgd2l0aCB0aGUga2V5LCBJViwgYW5kIHNhbHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBkZXJpdmVkUGFyYW1zID0gQ3J5cHRvSlMua2RmLk9wZW5TU0wuZXhlY3V0ZSgnUGFzc3dvcmQnLCAyNTYvMzIsIDEyOC8zMik7XG5cdCAgICAgICAgICogICAgIHZhciBkZXJpdmVkUGFyYW1zID0gQ3J5cHRvSlMua2RmLk9wZW5TU0wuZXhlY3V0ZSgnUGFzc3dvcmQnLCAyNTYvMzIsIDEyOC8zMiwgJ3NhbHRzYWx0Jyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24gKHBhc3N3b3JkLCBrZXlTaXplLCBpdlNpemUsIHNhbHQpIHtcblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgcmFuZG9tIHNhbHRcblx0ICAgICAgICAgICAgaWYgKCFzYWx0KSB7XG5cdCAgICAgICAgICAgICAgICBzYWx0ID0gV29yZEFycmF5LnJhbmRvbSg2NC84KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIERlcml2ZSBrZXkgYW5kIElWXG5cdCAgICAgICAgICAgIHZhciBrZXkgPSBFdnBLREYuY3JlYXRlKHsga2V5U2l6ZToga2V5U2l6ZSArIGl2U2l6ZSB9KS5jb21wdXRlKHBhc3N3b3JkLCBzYWx0KTtcblxuXHQgICAgICAgICAgICAvLyBTZXBhcmF0ZSBrZXkgYW5kIElWXG5cdCAgICAgICAgICAgIHZhciBpdiA9IFdvcmRBcnJheS5jcmVhdGUoa2V5LndvcmRzLnNsaWNlKGtleVNpemUpLCBpdlNpemUgKiA0KTtcblx0ICAgICAgICAgICAga2V5LnNpZ0J5dGVzID0ga2V5U2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIHBhcmFtc1xuXHQgICAgICAgICAgICByZXR1cm4gQ2lwaGVyUGFyYW1zLmNyZWF0ZSh7IGtleToga2V5LCBpdjogaXYsIHNhbHQ6IHNhbHQgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBIHNlcmlhbGl6YWJsZSBjaXBoZXIgd3JhcHBlciB0aGF0IGRlcml2ZXMgdGhlIGtleSBmcm9tIGEgcGFzc3dvcmQsXG5cdCAgICAgKiBhbmQgcmV0dXJucyBjaXBoZXJ0ZXh0IGFzIGEgc2VyaWFsaXphYmxlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICovXG5cdCAgICB2YXIgUGFzc3dvcmRCYXNlZENpcGhlciA9IENfbGliLlBhc3N3b3JkQmFzZWRDaXBoZXIgPSBTZXJpYWxpemFibGVDaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge0tERn0ga2RmIFRoZSBrZXkgZGVyaXZhdGlvbiBmdW5jdGlvbiB0byB1c2UgdG8gZ2VuZXJhdGUgYSBrZXkgYW5kIElWIGZyb20gYSBwYXNzd29yZC4gRGVmYXVsdDogT3BlblNTTFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogU2VyaWFsaXphYmxlQ2lwaGVyLmNmZy5leHRlbmQoe1xuXHQgICAgICAgICAgICBrZGY6IE9wZW5TU0xLZGZcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEVuY3J5cHRzIGEgbWVzc2FnZSB1c2luZyBhIHBhc3N3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBUaGUgY2lwaGVyIGFsZ29yaXRobSB0byB1c2UuXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGVuY3J5cHQuXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZC5cblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyUGFyYW1zfSBBIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVydGV4dFBhcmFtcyA9IENyeXB0b0pTLmxpYi5QYXNzd29yZEJhc2VkQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsICdwYXNzd29yZCcpO1xuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVydGV4dFBhcmFtcyA9IENyeXB0b0pTLmxpYi5QYXNzd29yZEJhc2VkQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsICdwYXNzd29yZCcsIHsgZm9ybWF0OiBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTCB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBlbmNyeXB0OiBmdW5jdGlvbiAoY2lwaGVyLCBtZXNzYWdlLCBwYXNzd29yZCwgY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICBjZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBEZXJpdmUga2V5IGFuZCBvdGhlciBwYXJhbXNcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRQYXJhbXMgPSBjZmcua2RmLmV4ZWN1dGUocGFzc3dvcmQsIGNpcGhlci5rZXlTaXplLCBjaXBoZXIuaXZTaXplKTtcblxuXHQgICAgICAgICAgICAvLyBBZGQgSVYgdG8gY29uZmlnXG5cdCAgICAgICAgICAgIGNmZy5pdiA9IGRlcml2ZWRQYXJhbXMuaXY7XG5cblx0ICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IFNlcmlhbGl6YWJsZUNpcGhlci5lbmNyeXB0LmNhbGwodGhpcywgY2lwaGVyLCBtZXNzYWdlLCBkZXJpdmVkUGFyYW1zLmtleSwgY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBNaXggaW4gZGVyaXZlZCBwYXJhbXNcblx0ICAgICAgICAgICAgY2lwaGVydGV4dC5taXhJbihkZXJpdmVkUGFyYW1zKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2lwaGVydGV4dDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRGVjcnlwdHMgc2VyaWFsaXplZCBjaXBoZXJ0ZXh0IHVzaW5nIGEgcGFzc3dvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIFRoZSBjaXBoZXIgYWxnb3JpdGhtIHRvIHVzZS5cblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlclBhcmFtc3xzdHJpbmd9IGNpcGhlcnRleHQgVGhlIGNpcGhlcnRleHQgdG8gZGVjcnlwdC5cblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkLlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwbGFpbnRleHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBwbGFpbnRleHQgPSBDcnlwdG9KUy5saWIuUGFzc3dvcmRCYXNlZENpcGhlci5kZWNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBmb3JtYXR0ZWRDaXBoZXJ0ZXh0LCAncGFzc3dvcmQnLCB7IGZvcm1hdDogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wgfSk7XG5cdCAgICAgICAgICogICAgIHZhciBwbGFpbnRleHQgPSBDcnlwdG9KUy5saWIuUGFzc3dvcmRCYXNlZENpcGhlci5kZWNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBjaXBoZXJ0ZXh0UGFyYW1zLCAncGFzc3dvcmQnLCB7IGZvcm1hdDogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZGVjcnlwdDogZnVuY3Rpb24gKGNpcGhlciwgY2lwaGVydGV4dCwgcGFzc3dvcmQsIGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gQ2lwaGVyUGFyYW1zXG5cdCAgICAgICAgICAgIGNpcGhlcnRleHQgPSB0aGlzLl9wYXJzZShjaXBoZXJ0ZXh0LCBjZmcuZm9ybWF0KTtcblxuXHQgICAgICAgICAgICAvLyBEZXJpdmUga2V5IGFuZCBvdGhlciBwYXJhbXNcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRQYXJhbXMgPSBjZmcua2RmLmV4ZWN1dGUocGFzc3dvcmQsIGNpcGhlci5rZXlTaXplLCBjaXBoZXIuaXZTaXplLCBjaXBoZXJ0ZXh0LnNhbHQpO1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBJViB0byBjb25maWdcblx0ICAgICAgICAgICAgY2ZnLml2ID0gZGVyaXZlZFBhcmFtcy5pdjtcblxuXHQgICAgICAgICAgICAvLyBEZWNyeXB0XG5cdCAgICAgICAgICAgIHZhciBwbGFpbnRleHQgPSBTZXJpYWxpemFibGVDaXBoZXIuZGVjcnlwdC5jYWxsKHRoaXMsIGNpcGhlciwgY2lwaGVydGV4dCwgZGVyaXZlZFBhcmFtcy5rZXksIGNmZyk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHBsYWludGV4dDtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fSgpKTtcblxuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdC8qZ2xvYmFscyB3aW5kb3csIGdsb2JhbCwgcmVxdWlyZSovXG5cblx0LyoqXG5cdCAqIENyeXB0b0pTIGNvcmUgY29tcG9uZW50cy5cblx0ICovXG5cdHZhciBDcnlwdG9KUyA9IENyeXB0b0pTIHx8IChmdW5jdGlvbiAoTWF0aCwgdW5kZWZpbmVkKSB7XG5cblx0ICAgIHZhciBjcnlwdG87XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSB3aW5kb3cgKEJyb3dzZXIpXG5cdCAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHdpbmRvdy5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gaW4gd2ViIHdvcmtlciAoQnJvd3Nlcilcblx0ICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBzZWxmLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIHdvcmtlclxuXHQgICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IGdsb2JhbFRoaXMuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgKGV4cGVyaW1lbnRhbCBJRSAxMSkgY3J5cHRvIGZyb20gd2luZG93IChCcm93c2VyKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm1zQ3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gd2luZG93Lm1zQ3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gZ2xvYmFsIChOb2RlSlMpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gZ2xvYmFsLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBpbXBvcnQgdmlhIHJlcXVpcmUgKE5vZGVKUylcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cdCAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgfVxuXG5cdCAgICAvKlxuXHQgICAgICogQ3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXG5cdCAgICAgKlxuXHQgICAgICogQXMgTWF0aC5yYW5kb20oKSBpcyBjcnlwdG9ncmFwaGljYWxseSBub3Qgc2FmZSB0byB1c2Vcblx0ICAgICAqL1xuXHQgICAgdmFyIGNyeXB0b1NlY3VyZVJhbmRvbUludCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAoY3J5cHRvKSB7XG5cdCAgICAgICAgICAgIC8vIFVzZSBnZXRSYW5kb21WYWx1ZXMgbWV0aG9kIChCcm93c2VyKVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KDEpKVswXTtcblx0ICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFVzZSByYW5kb21CeXRlcyBtZXRob2QgKE5vZGVKUylcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8ucmFuZG9tQnl0ZXMgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5yYW5kb21CeXRlcyg0KS5yZWFkSW50MzJMRSgpO1xuXHQgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYXRpdmUgY3J5cHRvIG1vZHVsZSBjb3VsZCBub3QgYmUgdXNlZCB0byBnZXQgc2VjdXJlIHJhbmRvbSBudW1iZXIuJyk7XG5cdCAgICB9O1xuXG5cdCAgICAvKlxuXHQgICAgICogTG9jYWwgcG9seWZpbGwgb2YgT2JqZWN0LmNyZWF0ZVxuXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gRigpIHt9XG5cblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgICAgICB2YXIgc3VidHlwZTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG9iajtcblxuXHQgICAgICAgICAgICBzdWJ0eXBlID0gbmV3IEYoKTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG51bGw7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQ3J5cHRvSlMgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExpYnJhcnkgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYiA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2Ugb2JqZWN0IGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2UgPSAoZnVuY3Rpb24gKCkge1xuXG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3ZlcnJpZGVzIFByb3BlcnRpZXMgdG8gY29weSBpbnRvIHRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgICAgICBtZXRob2Q6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGV4dGVuZDogZnVuY3Rpb24gKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3Bhd25cblx0ICAgICAgICAgICAgICAgIHZhciBzdWJ0eXBlID0gY3JlYXRlKHRoaXMpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBBdWdtZW50XG5cdCAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5taXhJbihvdmVycmlkZXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGVmYXVsdCBpbml0aWFsaXplclxuXHQgICAgICAgICAgICAgICAgaWYgKCFzdWJ0eXBlLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgdGhpcy5pbml0ID09PSBzdWJ0eXBlLmluaXQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplcidzIHByb3RvdHlwZSBpcyB0aGUgc3VidHlwZSBvYmplY3Rcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdC5wcm90b3R5cGUgPSBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2Ugc3VwZXJ0eXBlXG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlciA9IHRoaXM7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBFeHRlbmRzIHRoaXMgb2JqZWN0IGFuZCBydW5zIHRoZSBpbml0IG1ldGhvZC5cblx0ICAgICAgICAgICAgICogQXJndW1lbnRzIHRvIGNyZWF0ZSgpIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGluc3RhbmNlID0gTXlUeXBlLmNyZWF0ZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmV4dGVuZCgpO1xuXHQgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5pdC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKTtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgc29tZSBsb2dpYyB3aGVuIHlvdXIgb2JqZWN0cyBhcmUgY3JlYXRlZC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICAgICAgLy8gLi4uXG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENvcGllcyBwcm9wZXJ0aWVzIGludG8gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIG1peCBpbi5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIE15VHlwZS5taXhJbih7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZSdcblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgbWl4SW46IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSUUgd29uJ3QgY29weSB0b1N0cmluZyB1c2luZyB0aGUgbG9vcCBhYm92ZVxuXHQgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJykpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnRvU3RyaW5nID0gcHJvcGVydGllcy50b1N0cmluZztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gaW5zdGFuY2UuY2xvbmUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10sIDYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3b3Jkcywgc2lnQnl0ZXMpIHtcblx0ICAgICAgICAgICAgd29yZHMgPSB0aGlzLndvcmRzID0gd29yZHMgfHwgW107XG5cblx0ICAgICAgICAgICAgaWYgKHNpZ0J5dGVzICE9IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHdvcmRzLmxlbmd0aCAqIDQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyB3b3JkIGFycmF5IHRvIGEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtFbmNvZGVyfSBlbmNvZGVyIChPcHRpb25hbCkgVGhlIGVuY29kaW5nIHN0cmF0ZWd5IHRvIHVzZS4gRGVmYXVsdDogQ3J5cHRvSlMuZW5jLkhleFxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheSArICcnO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoZW5jb2Rlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGVuY29kZXIgfHwgSGV4KS5zdHJpbmdpZnkodGhpcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmNhdGVuYXRlcyBhIHdvcmQgYXJyYXkgdG8gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5MS5jb25jYXQod29yZEFycmF5Mik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29uY2F0OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgdGhpc1dvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRXb3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoaXNTaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0U2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgdGhpcy5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbmNhdFxuXHQgICAgICAgICAgICBpZiAodGhpc1NpZ0J5dGVzICUgNCkge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgYnl0ZSBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdEJ5dGUgPSAodGhhdFdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSB8PSB0aGF0Qnl0ZSA8PCAoMjQgLSAoKHRoaXNTaWdCeXRlcyArIGkpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIHdvcmQgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoYXRTaWdCeXRlczsgaiArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBqKSA+Pj4gMl0gPSB0aGF0V29yZHNbaiA+Pj4gMl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyArPSB0aGF0U2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZW1vdmVzIGluc2lnbmlmaWNhbnQgYml0cy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xhbXA6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXBcblx0ICAgICAgICAgICAgd29yZHNbc2lnQnl0ZXMgPj4+IDJdICY9IDB4ZmZmZmZmZmYgPDwgKDMyIC0gKHNpZ0J5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgd29yZHMubGVuZ3RoID0gTWF0aC5jZWlsKHNpZ0J5dGVzIC8gNCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSB3b3JkQXJyYXkuY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLndvcmRzID0gdGhpcy53b3Jkcy5zbGljZSgwKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSB3b3JkIGFycmF5IGZpbGxlZCB3aXRoIHJhbmRvbSBieXRlcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZXMgVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSByYW5kb20gd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKDE2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByYW5kb206IGZ1bmN0aW9uIChuQnl0ZXMpIHtcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaChjcnlwdG9TZWN1cmVSYW5kb21JbnQoKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBuQnl0ZXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEVuY29kZXIgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEhleCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEhleCA9IENfZW5jLkhleCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoZXhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuSGV4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgaGV4Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlID4+PiA0KS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSAmIDB4MGYpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gaGV4Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyIFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoaGV4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGhleFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgaGV4U3RyTGVuZ3RoID0gaGV4U3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhleFN0ckxlbmd0aDsgaSArPSAyKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAzXSB8PSBwYXJzZUludChoZXhTdHIuc3Vic3RyKGksIDIpLCAxNikgPDwgKDI0IC0gKGkgJSA4KSAqIDQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgaGV4U3RyTGVuZ3RoIC8gMik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMYXRpbjEgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBMYXRpbjEgPSBDX2VuYy5MYXRpbjEgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbGF0aW4xU3RyaW5nID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMUNoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgbGF0aW4xQ2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdGUpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBsYXRpbjFDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBMYXRpbjEgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYXRpbjFTdHIgVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5wYXJzZShsYXRpbjFTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAobGF0aW4xU3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFTdHJMZW5ndGggPSBsYXRpbjFTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGF0aW4xU3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDJdIHw9IChsYXRpbjFTdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBVVEYtOCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB1dGY4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0Zjguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShMYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSkpKTtcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQgVVRGLTggZGF0YScpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGY4U3RyIFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodXRmOFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGY4U3RyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBMYXRpbjEucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHV0ZjhTdHIpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBidWZmZXJlZCBibG9jayBhbGdvcml0aG0gdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogVGhlIHByb3BlcnR5IGJsb2NrU2l6ZSBtdXN0IGJlIGltcGxlbWVudGVkIGluIGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gX21pbkJ1ZmZlclNpemUgVGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBzaG91bGQgYmUga2VwdCB1bnByb2Nlc3NlZCBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0OiAwXG5cdCAgICAgKi9cblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBibG9jayBhbGdvcml0aG0ncyBkYXRhIGJ1ZmZlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgV29yZEFycmF5LmluaXQoKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyA9IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgbmV3IGRhdGEgdG8gdGhpcyBibG9jayBhbGdvcml0aG0ncyBidWZmZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYXBwZW5kLiBTdHJpbmdzIGFyZSBjb252ZXJ0ZWQgdG8gYSBXb3JkQXJyYXkgdXNpbmcgVVRGLTguXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCgnZGF0YScpO1xuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfYXBwZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBXb3JkQXJyYXksIGVsc2UgYXNzdW1lIFdvcmRBcnJheSBhbHJlYWR5XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAgICAgZGF0YSA9IFV0ZjgucGFyc2UoZGF0YSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgKz0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkYXRhIGJsb2Nrcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIFRoaXMgbWV0aG9kIGludm9rZXMgX2RvUHJvY2Vzc0Jsb2NrKG9mZnNldCksIHdoaWNoIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBkb0ZsdXNoIFdoZXRoZXIgYWxsIGJsb2NrcyBhbmQgcGFydGlhbCBibG9ja3Mgc2hvdWxkIGJlIHByb2Nlc3NlZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHByb2Nlc3NlZCBkYXRhLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX3Byb2Nlc3M6IGZ1bmN0aW9uIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgIHZhciBwcm9jZXNzZWRXb3JkcztcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CbG9ja3NSZWFkeSA9IGRhdGFTaWdCeXRlcyAvIGJsb2NrU2l6ZUJ5dGVzO1xuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2Nrcyxcblx0ICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIGJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJ5dGVzUmVhZHkgPSBNYXRoLm1pbihuV29yZHNSZWFkeSAqIDQsIGRhdGFTaWdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3Ncblx0ICAgICAgICAgICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgICAgICBwcm9jZXNzZWRXb3JkcyA9IGRhdGFXb3Jkcy5zcGxpY2UoMCwgbldvcmRzUmVhZHkpO1xuXHQgICAgICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyAtPSBuQnl0ZXNSZWFkeTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChwcm9jZXNzZWRXb3JkcywgbkJ5dGVzUmVhZHkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5fZGF0YSA9IHRoaXMuX2RhdGEuY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9taW5CdWZmZXJTaXplOiAwXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBoYXNoZXIgdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgbnVtYmVyIG9mIDMyLWJpdCB3b3JkcyB0aGlzIGhhc2hlciBvcGVyYXRlcyBvbi4gRGVmYXVsdDogMTYgKDUxMiBiaXRzKVxuXHQgICAgICovXG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyID0gQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKCksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoZXIgPSBDcnlwdG9KUy5hbGdvLlNIQTI1Ni5jcmVhdGUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICB0aGlzLmNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGhhc2hlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gUmVzZXQgZGF0YSBidWZmZXJcblx0ICAgICAgICAgICAgQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHRoaXMuX2RvUmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBkYXRlcyB0aGlzIGhhc2hlciB3aXRoIGEgbWVzc2FnZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtIYXNoZXJ9IFRoaXMgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBoYXNoXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEZpbmFsIG1lc3NhZ2UgdXBkYXRlXG5cdCAgICAgICAgICAgIGlmIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2RvRmluYWxpemUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiA1MTIvMzIsXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gYSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwgY2ZnKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGhhc2hlci5pbml0KGNmZykuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlIGluIHRoaXMgSE1BQyBoZWxwZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgSG1hY1NIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIbWFjSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwga2V5KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfYWxnby5ITUFDLmluaXQoaGFzaGVyLCBrZXkpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFsZ29yaXRobSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ28gPSB7fTtcblxuXHQgICAgcmV0dXJuIEM7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZTY0IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZTY0ID0gQ19lbmMuQmFzZTY0ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIEJhc2U2NCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgQmFzZTY0IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGJhc2U2NFN0cmluZyA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIG1hcCA9IHRoaXMuX21hcDtcblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBiYXNlNjRDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpICs9IDMpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMSA9ICh3b3Jkc1tpID4+PiAyXSAgICAgICA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAgICAgICAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTIgPSAod29yZHNbKGkgKyAxKSA+Pj4gMl0gPj4+ICgyNCAtICgoaSArIDEpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUzID0gKHdvcmRzWyhpICsgMikgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAyKSAlIDQpICogOCkpICYgMHhmZjtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHRyaXBsZXQgPSAoYnl0ZTEgPDwgMTYpIHwgKGJ5dGUyIDw8IDgpIHwgYnl0ZTM7XG5cblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyAoaiA8IDQpICYmIChpICsgaiAqIDAuNzUgPCBzaWdCeXRlcyk7IGorKykge1xuXHQgICAgICAgICAgICAgICAgICAgIGJhc2U2NENoYXJzLnB1c2gobWFwLmNoYXJBdCgodHJpcGxldCA+Pj4gKDYgKiAoMyAtIGopKSkgJiAweDNmKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ0NoYXIgPSBtYXAuY2hhckF0KDY0KTtcblx0ICAgICAgICAgICAgaWYgKHBhZGRpbmdDaGFyKSB7XG5cdCAgICAgICAgICAgICAgICB3aGlsZSAoYmFzZTY0Q2hhcnMubGVuZ3RoICUgNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGJhc2U2NENoYXJzLnB1c2gocGFkZGluZ0NoYXIpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGJhc2U2NENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIEJhc2U2NCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2U2NFN0ciBUaGUgQmFzZTY0IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnBhcnNlKGJhc2U2NFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChiYXNlNjRTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBiYXNlNjRTdHJMZW5ndGggPSBiYXNlNjRTdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdGhpcy5fbWFwO1xuXHQgICAgICAgICAgICB2YXIgcmV2ZXJzZU1hcCA9IHRoaXMuX3JldmVyc2VNYXA7XG5cblx0ICAgICAgICAgICAgaWYgKCFyZXZlcnNlTWFwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZU1hcCA9IHRoaXMuX3JldmVyc2VNYXAgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hcC5sZW5ndGg7IGorKykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwW21hcC5jaGFyQ29kZUF0KGopXSA9IGo7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSWdub3JlIHBhZGRpbmdcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmdDaGFyID0gbWFwLmNoYXJBdCg2NCk7XG5cdCAgICAgICAgICAgIGlmIChwYWRkaW5nQ2hhcikge1xuXHQgICAgICAgICAgICAgICAgdmFyIHBhZGRpbmdJbmRleCA9IGJhc2U2NFN0ci5pbmRleE9mKHBhZGRpbmdDaGFyKTtcblx0ICAgICAgICAgICAgICAgIGlmIChwYWRkaW5nSW5kZXggIT09IC0xKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0U3RyTGVuZ3RoID0gcGFkZGluZ0luZGV4O1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICByZXR1cm4gcGFyc2VMb29wKGJhc2U2NFN0ciwgYmFzZTY0U3RyTGVuZ3RoLCByZXZlcnNlTWFwKTtcblxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWFwOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nXG5cdCAgICB9O1xuXG5cdCAgICBmdW5jdGlvbiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApIHtcblx0ICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgIHZhciBuQnl0ZXMgPSAwO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2U2NFN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoaSAlIDQpIHtcblx0ICAgICAgICAgICAgICB2YXIgYml0czEgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkgLSAxKV0gPDwgKChpICUgNCkgKiAyKTtcblx0ICAgICAgICAgICAgICB2YXIgYml0czIgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkpXSA+Pj4gKDYgLSAoaSAlIDQpICogMik7XG5cdCAgICAgICAgICAgICAgdmFyIGJpdHNDb21iaW5lZCA9IGJpdHMxIHwgYml0czI7XG5cdCAgICAgICAgICAgICAgd29yZHNbbkJ5dGVzID4+PiAyXSB8PSBiaXRzQ29tYmluZWQgPDwgKDI0IC0gKG5CeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgbkJ5dGVzKys7XG5cdCAgICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIFdvcmRBcnJheS5jcmVhdGUod29yZHMsIG5CeXRlcyk7XG5cdCAgICB9XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuZW5jLkJhc2U2NDtcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2U2NHVybCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2U2NHVybCA9IENfZW5jLkJhc2U2NHVybCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBCYXNlNjR1cmwgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXJsU2FmZSBXaGV0aGVyIHRvIHVzZSB1cmwgc2FmZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgQmFzZTY0dXJsIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGJhc2U2NFN0cmluZyA9IENyeXB0b0pTLmVuYy5CYXNlNjR1cmwuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5LCB1cmxTYWZlPXRydWUpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdXJsU2FmZSA/IHRoaXMuX3NhZmVfbWFwIDogdGhpcy5fbWFwO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGJhc2U2NENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkgKz0gMykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUxID0gKHdvcmRzW2kgPj4+IDJdICAgICAgID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICAgICAgICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMiA9ICh3b3Jkc1soaSArIDEpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMSkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTMgPSAod29yZHNbKGkgKyAyKSA+Pj4gMl0gPj4+ICgyNCAtICgoaSArIDIpICUgNCkgKiA4KSkgJiAweGZmO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdHJpcGxldCA9IChieXRlMSA8PCAxNikgfCAoYnl0ZTIgPDwgOCkgfCBieXRlMztcblxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IChqIDwgNCkgJiYgKGkgKyBqICogMC43NSA8IHNpZ0J5dGVzKTsgaisrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiAoNiAqICgzIC0gaikpKSAmIDB4M2YpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuXHQgICAgICAgICAgICBpZiAocGFkZGluZ0NoYXIpIHtcblx0ICAgICAgICAgICAgICAgIHdoaWxlIChiYXNlNjRDaGFycy5sZW5ndGggJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChwYWRkaW5nQ2hhcik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gYmFzZTY0Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgQmFzZTY0dXJsIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZTY0U3RyIFRoZSBCYXNlNjR1cmwgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSB1cmxTYWZlIFdoZXRoZXIgdG8gdXNlIHVybCBzYWZlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkJhc2U2NHVybC5wYXJzZShiYXNlNjRTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoYmFzZTY0U3RyLCB1cmxTYWZlPXRydWUpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBiYXNlNjRTdHJMZW5ndGggPSBiYXNlNjRTdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdXJsU2FmZSA/IHRoaXMuX3NhZmVfbWFwIDogdGhpcy5fbWFwO1xuXHQgICAgICAgICAgICB2YXIgcmV2ZXJzZU1hcCA9IHRoaXMuX3JldmVyc2VNYXA7XG5cblx0ICAgICAgICAgICAgaWYgKCFyZXZlcnNlTWFwKSB7XG5cdCAgICAgICAgICAgICAgICByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXAubGVuZ3RoOyBqKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwW21hcC5jaGFyQ29kZUF0KGopXSA9IGo7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJZ25vcmUgcGFkZGluZ1xuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ0NoYXIgPSBtYXAuY2hhckF0KDY0KTtcblx0ICAgICAgICAgICAgaWYgKHBhZGRpbmdDaGFyKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ0luZGV4ID0gYmFzZTY0U3RyLmluZGV4T2YocGFkZGluZ0NoYXIpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHBhZGRpbmdJbmRleCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRTdHJMZW5ndGggPSBwYWRkaW5nSW5kZXg7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHJldHVybiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApO1xuXG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9tYXA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPScsXG5cdCAgICAgICAgX3NhZmVfbWFwOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODktXycsXG5cdCAgICB9O1xuXG5cdCAgICBmdW5jdGlvbiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApIHtcblx0ICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICB2YXIgbkJ5dGVzID0gMDtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2U2NFN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmIChpICUgNCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdHMxID0gcmV2ZXJzZU1hcFtiYXNlNjRTdHIuY2hhckNvZGVBdChpIC0gMSldIDw8ICgoaSAlIDQpICogMik7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0czIgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkpXSA+Pj4gKDYgLSAoaSAlIDQpICogMik7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0c0NvbWJpbmVkID0gYml0czEgfCBiaXRzMjtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW25CeXRlcyA+Pj4gMl0gfD0gYml0c0NvbWJpbmVkIDw8ICgyNCAtIChuQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgICAgbkJ5dGVzKys7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIFdvcmRBcnJheS5jcmVhdGUod29yZHMsIG5CeXRlcyk7XG5cdCAgICB9XG5cdH0oKSk7XG5cblx0cmV0dXJuIENyeXB0b0pTLmVuYy5CYXNlNjR1cmw7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYztcblxuXHQgICAgLyoqXG5cdCAgICAgKiBVVEYtMTYgQkUgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGYxNkJFID0gQ19lbmMuVXRmMTYgPSBDX2VuYy5VdGYxNkJFID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi0xNiBCRSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTE2IEJFIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjE2U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0ZjE2LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgdXRmMTZDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpICs9IDIpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBjb2RlUG9pbnQgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgxNiAtIChpICUgNCkgKiA4KSkgJiAweGZmZmY7XG5cdCAgICAgICAgICAgICAgICB1dGYxNkNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB1dGYxNkNoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi0xNiBCRSBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHV0ZjE2U3RyIFRoZSBVVEYtMTYgQkUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGYxNi5wYXJzZSh1dGYxNlN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGYxNlN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgdXRmMTZTdHJMZW5ndGggPSB1dGYxNlN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1dGYxNlN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAxXSB8PSB1dGYxNlN0ci5jaGFyQ29kZUF0KGkpIDw8ICgxNiAtIChpICUgMikgKiAxNik7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gV29yZEFycmF5LmNyZWF0ZSh3b3JkcywgdXRmMTZTdHJMZW5ndGggKiAyKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFVURi0xNiBMRSBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgQ19lbmMuVXRmMTZMRSA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtMTYgTEUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVURi0xNiBMRSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB1dGYxNlN0ciA9IENyeXB0b0pTLmVuYy5VdGYxNkxFLnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgdXRmMTZDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpICs9IDIpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBjb2RlUG9pbnQgPSBzd2FwRW5kaWFuKCh3b3Jkc1tpID4+PiAyXSA+Pj4gKDE2IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmZmZik7XG5cdCAgICAgICAgICAgICAgICB1dGYxNkNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiB1dGYxNkNoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi0xNiBMRSBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHV0ZjE2U3RyIFRoZSBVVEYtMTYgTEUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGYxNkxFLnBhcnNlKHV0ZjE2U3RyKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHV0ZjE2U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciB1dGYxNlN0ckxlbmd0aCA9IHV0ZjE2U3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHV0ZjE2U3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDFdIHw9IHN3YXBFbmRpYW4odXRmMTZTdHIuY2hhckNvZGVBdChpKSA8PCAoMTYgLSAoaSAlIDIpICogMTYpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBXb3JkQXJyYXkuY3JlYXRlKHdvcmRzLCB1dGYxNlN0ckxlbmd0aCAqIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIGZ1bmN0aW9uIHN3YXBFbmRpYW4od29yZCkge1xuXHQgICAgICAgIHJldHVybiAoKHdvcmQgPDwgOCkgJiAweGZmMDBmZjAwKSB8ICgod29yZCA+Pj4gOCkgJiAweDAwZmYwMGZmKTtcblx0ICAgIH1cblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5lbmMuVXRmMTY7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vc2hhMVwiKSwgcmVxdWlyZShcIi4vaG1hY1wiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9zaGExXCIsIFwiLi9obWFjXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2U7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblx0ICAgIHZhciBNRDUgPSBDX2FsZ28uTUQ1O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFRoaXMga2V5IGRlcml2YXRpb24gZnVuY3Rpb24gaXMgbWVhbnQgdG8gY29uZm9ybSB3aXRoIEVWUF9CeXRlc1RvS2V5LlxuXHQgICAgICogd3d3Lm9wZW5zc2wub3JnL2RvY3MvY3J5cHRvL0VWUF9CeXRlc1RvS2V5Lmh0bWxcblx0ICAgICAqL1xuXHQgICAgdmFyIEV2cEtERiA9IENfYWxnby5FdnBLREYgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGtleVNpemUgVGhlIGtleSBzaXplIGluIHdvcmRzIHRvIGdlbmVyYXRlLiBEZWZhdWx0OiA0ICgxMjggYml0cylcblx0ICAgICAgICAgKiBAcHJvcGVydHkge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoIGFsZ29yaXRobSB0byB1c2UuIERlZmF1bHQ6IE1ENVxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpdGVyYXRpb25zIFRoZSBudW1iZXIgb2YgaXRlcmF0aW9ucyB0byBwZXJmb3JtLiBEZWZhdWx0OiAxXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgIGtleVNpemU6IDEyOC8zMixcblx0ICAgICAgICAgICAgaGFzaGVyOiBNRDUsXG5cdCAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDFcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBrZXkgZGVyaXZhdGlvbiBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIGRlcml2YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLkV2cEtERi5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGtkZiA9IENyeXB0b0pTLmFsZ28uRXZwS0RGLmNyZWF0ZSh7IGtleVNpemU6IDggfSk7XG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLkV2cEtERi5jcmVhdGUoeyBrZXlTaXplOiA4LCBpdGVyYXRpb25zOiAxMDAwIH0pO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRGVyaXZlcyBhIGtleSBmcm9tIGEgcGFzc3dvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZC5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHNhbHQgQSBzYWx0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgZGVyaXZlZCBrZXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBrZXkgPSBrZGYuY29tcHV0ZShwYXNzd29yZCwgc2FsdCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29tcHV0ZTogZnVuY3Rpb24gKHBhc3N3b3JkLCBzYWx0KSB7XG5cdCAgICAgICAgICAgIHZhciBibG9jaztcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgY2ZnID0gdGhpcy5jZmc7XG5cblx0ICAgICAgICAgICAgLy8gSW5pdCBoYXNoZXJcblx0ICAgICAgICAgICAgdmFyIGhhc2hlciA9IGNmZy5oYXNoZXIuY3JlYXRlKCk7XG5cblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRLZXkgPSBXb3JkQXJyYXkuY3JlYXRlKCk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkZXJpdmVkS2V5V29yZHMgPSBkZXJpdmVkS2V5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIga2V5U2l6ZSA9IGNmZy5rZXlTaXplO1xuXHQgICAgICAgICAgICB2YXIgaXRlcmF0aW9ucyA9IGNmZy5pdGVyYXRpb25zO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleVxuXHQgICAgICAgICAgICB3aGlsZSAoZGVyaXZlZEtleVdvcmRzLmxlbmd0aCA8IGtleVNpemUpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChibG9jaykge1xuXHQgICAgICAgICAgICAgICAgICAgIGhhc2hlci51cGRhdGUoYmxvY2spO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgYmxvY2sgPSBoYXNoZXIudXBkYXRlKHBhc3N3b3JkKS5maW5hbGl6ZShzYWx0KTtcblx0ICAgICAgICAgICAgICAgIGhhc2hlci5yZXNldCgpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBJdGVyYXRpb25zXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGl0ZXJhdGlvbnM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gaGFzaGVyLmZpbmFsaXplKGJsb2NrKTtcblx0ICAgICAgICAgICAgICAgICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgZGVyaXZlZEtleS5jb25jYXQoYmxvY2spO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGRlcml2ZWRLZXkuc2lnQnl0ZXMgPSBrZXlTaXplICogNDtcblxuXHQgICAgICAgICAgICByZXR1cm4gZGVyaXZlZEtleTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBEZXJpdmVzIGEga2V5IGZyb20gYSBwYXNzd29yZC5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gc2FsdCBBIHNhbHQuXG5cdCAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgY29tcHV0YXRpb24uXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgZGVyaXZlZCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBrZXkgPSBDcnlwdG9KUy5FdnBLREYocGFzc3dvcmQsIHNhbHQpO1xuXHQgICAgICogICAgIHZhciBrZXkgPSBDcnlwdG9KUy5FdnBLREYocGFzc3dvcmQsIHNhbHQsIHsga2V5U2l6ZTogOCB9KTtcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuRXZwS0RGKHBhc3N3b3JkLCBzYWx0LCB7IGtleVNpemU6IDgsIGl0ZXJhdGlvbnM6IDEwMDAgfSk7XG5cdCAgICAgKi9cblx0ICAgIEMuRXZwS0RGID0gZnVuY3Rpb24gKHBhc3N3b3JkLCBzYWx0LCBjZmcpIHtcblx0ICAgICAgICByZXR1cm4gRXZwS0RGLmNyZWF0ZShjZmcpLmNvbXB1dGUocGFzc3dvcmQsIHNhbHQpO1xuXHQgICAgfTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5FdnBLREY7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAodW5kZWZpbmVkKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBDaXBoZXJQYXJhbXMgPSBDX2xpYi5DaXBoZXJQYXJhbXM7XG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYztcblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXg7XG5cdCAgICB2YXIgQ19mb3JtYXQgPSBDLmZvcm1hdDtcblxuXHQgICAgdmFyIEhleEZvcm1hdHRlciA9IENfZm9ybWF0LkhleCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGUgY2lwaGVydGV4dCBvZiBhIGNpcGhlciBwYXJhbXMgb2JqZWN0IHRvIGEgaGV4YWRlY2ltYWxseSBlbmNvZGVkIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyUGFyYW1zfSBjaXBoZXJQYXJhbXMgVGhlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4YWRlY2ltYWxseSBlbmNvZGVkIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmZvcm1hdC5IZXguc3RyaW5naWZ5KGNpcGhlclBhcmFtcyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAoY2lwaGVyUGFyYW1zKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBjaXBoZXJQYXJhbXMuY2lwaGVydGV4dC50b1N0cmluZyhIZXgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleGFkZWNpbWFsbHkgZW5jb2RlZCBjaXBoZXJ0ZXh0IHN0cmluZyB0byBhIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBoZXhhZGVjaW1hbGx5IGVuY29kZWQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyUGFyYW1zfSBUaGUgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJQYXJhbXMgPSBDcnlwdG9KUy5mb3JtYXQuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChpbnB1dCkge1xuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IEhleC5wYXJzZShpbnB1dCk7XG5cdCAgICAgICAgICAgIHJldHVybiBDaXBoZXJQYXJhbXMuY3JlYXRlKHsgY2lwaGVydGV4dDogY2lwaGVydGV4dCB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLmZvcm1hdC5IZXg7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZTtcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4O1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLyoqXG5cdCAgICAgKiBITUFDIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEhNQUMgPSBDX2FsZ28uSE1BQyA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgSE1BQy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2ggYWxnb3JpdGhtIHRvIHVzZS5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhtYWNIYXNoZXIgPSBDcnlwdG9KUy5hbGdvLkhNQUMuY3JlYXRlKENyeXB0b0pTLmFsZ28uU0hBMjU2LCBrZXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChoYXNoZXIsIGtleSkge1xuXHQgICAgICAgICAgICAvLyBJbml0IGhhc2hlclxuXHQgICAgICAgICAgICBoYXNoZXIgPSB0aGlzLl9oYXNoZXIgPSBuZXcgaGFzaGVyLmluaXQoKTtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBXb3JkQXJyYXksIGVsc2UgYXNzdW1lIFdvcmRBcnJheSBhbHJlYWR5XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgICAgICBrZXkgPSBVdGY4LnBhcnNlKGtleSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGhhc2hlckJsb2NrU2l6ZSA9IGhhc2hlci5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBoYXNoZXJCbG9ja1NpemVCeXRlcyA9IGhhc2hlckJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQWxsb3cgYXJiaXRyYXJ5IGxlbmd0aCBrZXlzXG5cdCAgICAgICAgICAgIGlmIChrZXkuc2lnQnl0ZXMgPiBoYXNoZXJCbG9ja1NpemVCeXRlcykge1xuXHQgICAgICAgICAgICAgICAga2V5ID0gaGFzaGVyLmZpbmFsaXplKGtleSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICBrZXkuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDbG9uZSBrZXkgZm9yIGlubmVyIGFuZCBvdXRlciBwYWRzXG5cdCAgICAgICAgICAgIHZhciBvS2V5ID0gdGhpcy5fb0tleSA9IGtleS5jbG9uZSgpO1xuXHQgICAgICAgICAgICB2YXIgaUtleSA9IHRoaXMuX2lLZXkgPSBrZXkuY2xvbmUoKTtcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIG9LZXlXb3JkcyA9IG9LZXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBpS2V5V29yZHMgPSBpS2V5LndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFhPUiBrZXlzIHdpdGggcGFkIGNvbnN0YW50c1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhc2hlckJsb2NrU2l6ZTsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBvS2V5V29yZHNbaV0gXj0gMHg1YzVjNWM1Yztcblx0ICAgICAgICAgICAgICAgIGlLZXlXb3Jkc1tpXSBePSAweDM2MzYzNjM2O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIG9LZXkuc2lnQnl0ZXMgPSBpS2V5LnNpZ0J5dGVzID0gaGFzaGVyQmxvY2tTaXplQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgSE1BQyB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaG1hY0hhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBoYXNoZXIgPSB0aGlzLl9oYXNoZXI7XG5cblx0ICAgICAgICAgICAgLy8gUmVzZXRcblx0ICAgICAgICAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICAgIGhhc2hlci51cGRhdGUodGhpcy5faUtleSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBITUFDIHdpdGggYSBtZXNzYWdlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIFRoZSBtZXNzYWdlIHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0hNQUN9IFRoaXMgSE1BQyBpbnN0YW5jZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaG1hY0hhc2hlci51cGRhdGUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgaG1hY0hhc2hlci51cGRhdGUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2hlci51cGRhdGUobWVzc2FnZVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIEhNQUMgY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaG1hYyA9IGhtYWNIYXNoZXIuZmluYWxpemUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhtYWMgPSBobWFjSGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIHZhciBobWFjID0gaG1hY0hhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgaGFzaGVyID0gdGhpcy5faGFzaGVyO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgSE1BQ1xuXHQgICAgICAgICAgICB2YXIgaW5uZXJIYXNoID0gaGFzaGVyLmZpbmFsaXplKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgICAgdmFyIGhtYWMgPSBoYXNoZXIuZmluYWxpemUodGhpcy5fb0tleS5jbG9uZSgpLmNvbmNhdChpbm5lckhhc2gpKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gaG1hYztcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fSgpKTtcblxuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3g2NC1jb3JlXCIpLCByZXF1aXJlKFwiLi9saWItdHlwZWRhcnJheXNcIiksIHJlcXVpcmUoXCIuL2VuYy11dGYxNlwiKSwgcmVxdWlyZShcIi4vZW5jLWJhc2U2NFwiKSwgcmVxdWlyZShcIi4vZW5jLWJhc2U2NHVybFwiKSwgcmVxdWlyZShcIi4vbWQ1XCIpLCByZXF1aXJlKFwiLi9zaGExXCIpLCByZXF1aXJlKFwiLi9zaGEyNTZcIiksIHJlcXVpcmUoXCIuL3NoYTIyNFwiKSwgcmVxdWlyZShcIi4vc2hhNTEyXCIpLCByZXF1aXJlKFwiLi9zaGEzODRcIiksIHJlcXVpcmUoXCIuL3NoYTNcIiksIHJlcXVpcmUoXCIuL3JpcGVtZDE2MFwiKSwgcmVxdWlyZShcIi4vaG1hY1wiKSwgcmVxdWlyZShcIi4vcGJrZGYyXCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpLCByZXF1aXJlKFwiLi9tb2RlLWNmYlwiKSwgcmVxdWlyZShcIi4vbW9kZS1jdHJcIiksIHJlcXVpcmUoXCIuL21vZGUtY3RyLWdsYWRtYW5cIiksIHJlcXVpcmUoXCIuL21vZGUtb2ZiXCIpLCByZXF1aXJlKFwiLi9tb2RlLWVjYlwiKSwgcmVxdWlyZShcIi4vcGFkLWFuc2l4OTIzXCIpLCByZXF1aXJlKFwiLi9wYWQtaXNvMTAxMjZcIiksIHJlcXVpcmUoXCIuL3BhZC1pc285Nzk3MVwiKSwgcmVxdWlyZShcIi4vcGFkLXplcm9wYWRkaW5nXCIpLCByZXF1aXJlKFwiLi9wYWQtbm9wYWRkaW5nXCIpLCByZXF1aXJlKFwiLi9mb3JtYXQtaGV4XCIpLCByZXF1aXJlKFwiLi9hZXNcIiksIHJlcXVpcmUoXCIuL3RyaXBsZWRlc1wiKSwgcmVxdWlyZShcIi4vcmM0XCIpLCByZXF1aXJlKFwiLi9yYWJiaXRcIiksIHJlcXVpcmUoXCIuL3JhYmJpdC1sZWdhY3lcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4veDY0LWNvcmVcIiwgXCIuL2xpYi10eXBlZGFycmF5c1wiLCBcIi4vZW5jLXV0ZjE2XCIsIFwiLi9lbmMtYmFzZTY0XCIsIFwiLi9lbmMtYmFzZTY0dXJsXCIsIFwiLi9tZDVcIiwgXCIuL3NoYTFcIiwgXCIuL3NoYTI1NlwiLCBcIi4vc2hhMjI0XCIsIFwiLi9zaGE1MTJcIiwgXCIuL3NoYTM4NFwiLCBcIi4vc2hhM1wiLCBcIi4vcmlwZW1kMTYwXCIsIFwiLi9obWFjXCIsIFwiLi9wYmtkZjJcIiwgXCIuL2V2cGtkZlwiLCBcIi4vY2lwaGVyLWNvcmVcIiwgXCIuL21vZGUtY2ZiXCIsIFwiLi9tb2RlLWN0clwiLCBcIi4vbW9kZS1jdHItZ2xhZG1hblwiLCBcIi4vbW9kZS1vZmJcIiwgXCIuL21vZGUtZWNiXCIsIFwiLi9wYWQtYW5zaXg5MjNcIiwgXCIuL3BhZC1pc28xMDEyNlwiLCBcIi4vcGFkLWlzbzk3OTcxXCIsIFwiLi9wYWQtemVyb3BhZGRpbmdcIiwgXCIuL3BhZC1ub3BhZGRpbmdcIiwgXCIuL2Zvcm1hdC1oZXhcIiwgXCIuL2Flc1wiLCBcIi4vdHJpcGxlZGVzXCIsIFwiLi9yYzRcIiwgXCIuL3JhYmJpdFwiLCBcIi4vcmFiYml0LWxlZ2FjeVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIENoZWNrIGlmIHR5cGVkIGFycmF5cyBhcmUgc3VwcG9ydGVkXG5cdCAgICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblxuXHQgICAgLy8gUmVmZXJlbmNlIG9yaWdpbmFsIGluaXRcblx0ICAgIHZhciBzdXBlckluaXQgPSBXb3JkQXJyYXkuaW5pdDtcblxuXHQgICAgLy8gQXVnbWVudCBXb3JkQXJyYXkuaW5pdCB0byBoYW5kbGUgdHlwZWQgYXJyYXlzXG5cdCAgICB2YXIgc3ViSW5pdCA9IFdvcmRBcnJheS5pbml0ID0gZnVuY3Rpb24gKHR5cGVkQXJyYXkpIHtcblx0ICAgICAgICAvLyBDb252ZXJ0IGJ1ZmZlcnMgdG8gdWludDhcblx0ICAgICAgICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgPSBuZXcgVWludDhBcnJheSh0eXBlZEFycmF5KTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBDb252ZXJ0IG90aGVyIGFycmF5IHZpZXdzIHRvIHVpbnQ4XG5cdCAgICAgICAgaWYgKFxuXHQgICAgICAgICAgICB0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50OEFycmF5IHx8XG5cdCAgICAgICAgICAgICh0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB8fFxuXHQgICAgICAgICAgICB0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MTZBcnJheSB8fFxuXHQgICAgICAgICAgICB0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDE2QXJyYXkgfHxcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDMyQXJyYXkgfHxcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5IHx8XG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHxcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxuXHQgICAgICAgICkge1xuXHQgICAgICAgICAgICB0eXBlZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodHlwZWRBcnJheS5idWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5ieXRlTGVuZ3RoKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBIYW5kbGUgVWludDhBcnJheVxuXHQgICAgICAgIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgdHlwZWRBcnJheUJ5dGVMZW5ndGggPSB0eXBlZEFycmF5LmJ5dGVMZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gRXh0cmFjdCBieXRlc1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZEFycmF5Qnl0ZUxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSB0eXBlZEFycmF5W2ldIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEluaXRpYWxpemUgdGhpcyB3b3JkIGFycmF5XG5cdCAgICAgICAgICAgIHN1cGVySW5pdC5jYWxsKHRoaXMsIHdvcmRzLCB0eXBlZEFycmF5Qnl0ZUxlbmd0aCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgLy8gRWxzZSBjYWxsIG5vcm1hbCBpbml0XG5cdCAgICAgICAgICAgIHN1cGVySW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIHN1YkluaXQucHJvdG90eXBlID0gV29yZEFycmF5O1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLmxpYi5Xb3JkQXJyYXk7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoTWF0aCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIENvbnN0YW50cyB0YWJsZVxuXHQgICAgdmFyIFQgPSBbXTtcblxuXHQgICAgLy8gQ29tcHV0ZSBjb25zdGFudHNcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG5cdCAgICAgICAgICAgIFRbaV0gPSAoTWF0aC5hYnMoTWF0aC5zaW4oaSArIDEpKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBNRDUgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBNRDUgPSBDX2FsZ28uTUQ1ID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChbXG5cdCAgICAgICAgICAgICAgICAweDY3NDUyMzAxLCAweGVmY2RhYjg5LFxuXHQgICAgICAgICAgICAgICAgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NlxuXHQgICAgICAgICAgICBdKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0X2kgPSBvZmZzZXQgKyBpO1xuXHQgICAgICAgICAgICAgICAgdmFyIE1fb2Zmc2V0X2kgPSBNW29mZnNldF9pXTtcblxuXHQgICAgICAgICAgICAgICAgTVtvZmZzZXRfaV0gPSAoXG5cdCAgICAgICAgICAgICAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCA4KSAgfCAoTV9vZmZzZXRfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAoKChNX29mZnNldF9pIDw8IDI0KSB8IChNX29mZnNldF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgICAgICk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8wICA9IE1bb2Zmc2V0ICsgMF07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xICA9IE1bb2Zmc2V0ICsgMV07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8yICA9IE1bb2Zmc2V0ICsgMl07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8zICA9IE1bb2Zmc2V0ICsgM107XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF80ICA9IE1bb2Zmc2V0ICsgNF07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF81ICA9IE1bb2Zmc2V0ICsgNV07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF82ICA9IE1bb2Zmc2V0ICsgNl07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF83ICA9IE1bb2Zmc2V0ICsgN107XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF84ICA9IE1bb2Zmc2V0ICsgOF07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF85ICA9IE1bb2Zmc2V0ICsgOV07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xMCA9IE1bb2Zmc2V0ICsgMTBdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTEgPSBNW29mZnNldCArIDExXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzEyID0gTVtvZmZzZXQgKyAxMl07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xMyA9IE1bb2Zmc2V0ICsgMTNdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTQgPSBNW29mZnNldCArIDE0XTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzE1ID0gTVtvZmZzZXQgKyAxNV07XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWxiZXNcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgYiA9IEhbMV07XG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBNX29mZnNldF8wLCAgNywgIFRbMF0pO1xuXHQgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfMSwgIDEyLCBUWzFdKTtcblx0ICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzIsICAxNywgVFsyXSk7XG5cdCAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8zLCAgMjIsIFRbM10pO1xuXHQgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfNCwgIDcsICBUWzRdKTtcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzUsICAxMiwgVFs1XSk7XG5cdCAgICAgICAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF82LCAgMTcsIFRbNl0pO1xuXHQgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfNywgIDIyLCBUWzddKTtcblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzgsICA3LCAgVFs4XSk7XG5cdCAgICAgICAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBNX29mZnNldF85LCAgMTIsIFRbOV0pO1xuXHQgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTAsIDE3LCBUWzEwXSk7XG5cdCAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8xMSwgMjIsIFRbMTFdKTtcblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEyLCA3LCAgVFsxMl0pO1xuXHQgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTMsIDEyLCBUWzEzXSk7XG5cdCAgICAgICAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF8xNCwgMTcsIFRbMTRdKTtcblx0ICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzE1LCAyMiwgVFsxNV0pO1xuXG5cdCAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF8xLCAgNSwgIFRbMTZdKTtcblx0ICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzYsICA5LCAgVFsxN10pO1xuXHQgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfMTEsIDE0LCBUWzE4XSk7XG5cdCAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF8wLCAgMjAsIFRbMTldKTtcblx0ICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzUsICA1LCAgVFsyMF0pO1xuXHQgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfMTAsIDksICBUWzIxXSk7XG5cdCAgICAgICAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBNX29mZnNldF8xNSwgMTQsIFRbMjJdKTtcblx0ICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzQsICAyMCwgVFsyM10pO1xuXHQgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfOSwgIDUsICBUWzI0XSk7XG5cdCAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBNX29mZnNldF8xNCwgOSwgIFRbMjVdKTtcblx0ICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzMsICAxNCwgVFsyNl0pO1xuXHQgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfOCwgIDIwLCBUWzI3XSk7XG5cdCAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF8xMywgNSwgIFRbMjhdKTtcblx0ICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzIsICA5LCAgVFsyOV0pO1xuXHQgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfNywgIDE0LCBUWzMwXSk7XG5cdCAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF8xMiwgMjAsIFRbMzFdKTtcblxuXHQgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfNSwgIDQsICBUWzMyXSk7XG5cdCAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF84LCAgMTEsIFRbMzNdKTtcblx0ICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzExLCAxNiwgVFszNF0pO1xuXHQgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTQsIDIzLCBUWzM1XSk7XG5cdCAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBNX29mZnNldF8xLCAgNCwgIFRbMzZdKTtcblx0ICAgICAgICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzQsICAxMSwgVFszN10pO1xuXHQgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfNywgIDE2LCBUWzM4XSk7XG5cdCAgICAgICAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF8xMCwgMjMsIFRbMzldKTtcblx0ICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEzLCA0LCAgVFs0MF0pO1xuXHQgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfMCwgIDExLCBUWzQxXSk7XG5cdCAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF8zLCAgMTYsIFRbNDJdKTtcblx0ICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzYsICAyMywgVFs0M10pO1xuXHQgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfOSwgIDQsICBUWzQ0XSk7XG5cdCAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF8xMiwgMTEsIFRbNDVdKTtcblx0ICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzE1LCAxNiwgVFs0Nl0pO1xuXHQgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfMiwgIDIzLCBUWzQ3XSk7XG5cblx0ICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzAsICA2LCAgVFs0OF0pO1xuXHQgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfNywgIDEwLCBUWzQ5XSk7XG5cdCAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8xNCwgMTUsIFRbNTBdKTtcblx0ICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzUsICAyMSwgVFs1MV0pO1xuXHQgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfMTIsIDYsICBUWzUyXSk7XG5cdCAgICAgICAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBNX29mZnNldF8zLCAgMTAsIFRbNTNdKTtcblx0ICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzEwLCAxNSwgVFs1NF0pO1xuXHQgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfMSwgIDIxLCBUWzU1XSk7XG5cdCAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF84LCAgNiwgIFRbNTZdKTtcblx0ICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzE1LCAxMCwgVFs1N10pO1xuXHQgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfNiwgIDE1LCBUWzU4XSk7XG5cdCAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF8xMywgMjEsIFRbNTldKTtcblx0ICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzQsICA2LCAgVFs2MF0pO1xuXHQgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTEsIDEwLCBUWzYxXSk7XG5cdCAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8yLCAgMTUsIFRbNjJdKTtcblx0ICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzksICAyMSwgVFs2M10pO1xuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsSCA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWxMID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSAoXG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsSCA8PCA4KSAgfCAobkJpdHNUb3RhbEggPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsSCA8PCAyNCkgfCAobkJpdHNUb3RhbEggPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IChcblx0ICAgICAgICAgICAgICAgICgoKG5CaXRzVG90YWxMIDw8IDgpICB8IChuQml0c1RvdGFsTCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICgoKG5CaXRzVG90YWxMIDw8IDI0KSB8IChuQml0c1RvdGFsTCA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICk7XG5cblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IChkYXRhV29yZHMubGVuZ3RoICsgMSkgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9oYXNoO1xuXHQgICAgICAgICAgICB2YXIgSCA9IGhhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgICAgICB2YXIgSF9pID0gSFtpXTtcblxuXHQgICAgICAgICAgICAgICAgSFtpXSA9ICgoKEhfaSA8PCA4KSAgfCAoSF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICAgICgoKEhfaSA8PCAyNCkgfCAoSF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgZnVuY3Rpb24gRkYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuXHQgICAgICAgIHZhciBuID0gYSArICgoYiAmIGMpIHwgKH5iICYgZCkpICsgeCArIHQ7XG5cdCAgICAgICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gR0coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuXHQgICAgICAgIHZhciBuID0gYSArICgoYiAmIGQpIHwgKGMgJiB+ZCkpICsgeCArIHQ7XG5cdCAgICAgICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gSEgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuXHQgICAgICAgIHZhciBuID0gYSArIChiIF4gYyBeIGQpICsgeCArIHQ7XG5cdCAgICAgICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gSUkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuXHQgICAgICAgIHZhciBuID0gYSArIChjIF4gKGIgfCB+ZCkpICsgeCArIHQ7XG5cdCAgICAgICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcblx0ICAgIH1cblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLk1ENSgnbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuTUQ1KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuTUQ1ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoTUQ1KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNNRDUobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjTUQ1ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKE1ENSk7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLk1ENTtcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqXG5cdCAqIENpcGhlciBGZWVkYmFjayBibG9jayBtb2RlLlxuXHQgKi9cblx0Q3J5cHRvSlMubW9kZS5DRkIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIENGQiA9IENyeXB0b0pTLmxpYi5CbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XG5cblx0ICAgIENGQi5FbmNyeXB0b3IgPSBDRkIuZXh0ZW5kKHtcblx0ICAgICAgICBwcm9jZXNzQmxvY2s6IGZ1bmN0aW9uICh3b3Jkcywgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICBnZW5lcmF0ZUtleXN0cmVhbUFuZEVuY3J5cHQuY2FsbCh0aGlzLCB3b3Jkcywgb2Zmc2V0LCBibG9ja1NpemUsIGNpcGhlcik7XG5cblx0ICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhpcyBibG9jayB0byB1c2Ugd2l0aCBuZXh0IGJsb2NrXG5cdCAgICAgICAgICAgIHRoaXMuX3ByZXZCbG9jayA9IHdvcmRzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgYmxvY2tTaXplKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgQ0ZCLkRlY3J5cHRvciA9IENGQi5leHRlbmQoe1xuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBjaXBoZXIgPSB0aGlzLl9jaXBoZXI7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRoaXMgYmxvY2sgdG8gdXNlIHdpdGggbmV4dCBibG9ja1xuXHQgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gd29yZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBibG9ja1NpemUpO1xuXG5cdCAgICAgICAgICAgIGdlbmVyYXRlS2V5c3RyZWFtQW5kRW5jcnlwdC5jYWxsKHRoaXMsIHdvcmRzLCBvZmZzZXQsIGJsb2NrU2l6ZSwgY2lwaGVyKTtcblxuXHQgICAgICAgICAgICAvLyBUaGlzIGJsb2NrIGJlY29tZXMgdGhlIHByZXZpb3VzIGJsb2NrXG5cdCAgICAgICAgICAgIHRoaXMuX3ByZXZCbG9jayA9IHRoaXNCbG9jaztcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgZnVuY3Rpb24gZ2VuZXJhdGVLZXlzdHJlYW1BbmRFbmNyeXB0KHdvcmRzLCBvZmZzZXQsIGJsb2NrU2l6ZSwgY2lwaGVyKSB7XG5cdCAgICAgICAgdmFyIGtleXN0cmVhbTtcblxuXHQgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XG5cblx0ICAgICAgICAvLyBHZW5lcmF0ZSBrZXlzdHJlYW1cblx0ICAgICAgICBpZiAoaXYpIHtcblx0ICAgICAgICAgICAga2V5c3RyZWFtID0gaXYuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgLy8gUmVtb3ZlIElWIGZvciBzdWJzZXF1ZW50IGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBrZXlzdHJlYW0gPSB0aGlzLl9wcmV2QmxvY2s7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNpcGhlci5lbmNyeXB0QmxvY2soa2V5c3RyZWFtLCAwKTtcblxuXHQgICAgICAgIC8vIEVuY3J5cHRcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrU2l6ZTsgaSsrKSB7XG5cdCAgICAgICAgICAgIHdvcmRzW29mZnNldCArIGldIF49IGtleXN0cmVhbVtpXTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBDRkI7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMubW9kZS5DRkI7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKiBAcHJlc2VydmVcblx0ICogQ291bnRlciBibG9jayBtb2RlIGNvbXBhdGlibGUgd2l0aCAgRHIgQnJpYW4gR2xhZG1hbiBmaWxlZW5jLmNcblx0ICogZGVyaXZlZCBmcm9tIENyeXB0b0pTLm1vZGUuQ1RSXG5cdCAqIEphbiBIcnVieSBqaHJ1Ynkud2ViQGdtYWlsLmNvbVxuXHQgKi9cblx0Q3J5cHRvSlMubW9kZS5DVFJHbGFkbWFuID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBDVFJHbGFkbWFuID0gQ3J5cHRvSlMubGliLkJsb2NrQ2lwaGVyTW9kZS5leHRlbmQoKTtcblxuXHRcdGZ1bmN0aW9uIGluY1dvcmQod29yZClcblx0XHR7XG5cdFx0XHRpZiAoKCh3b3JkID4+IDI0KSAmIDB4ZmYpID09PSAweGZmKSB7IC8vb3ZlcmZsb3dcblx0XHRcdHZhciBiMSA9ICh3b3JkID4+IDE2KSYweGZmO1xuXHRcdFx0dmFyIGIyID0gKHdvcmQgPj4gOCkmMHhmZjtcblx0XHRcdHZhciBiMyA9IHdvcmQgJiAweGZmO1xuXG5cdFx0XHRpZiAoYjEgPT09IDB4ZmYpIC8vIG92ZXJmbG93IGIxXG5cdFx0XHR7XG5cdFx0XHRiMSA9IDA7XG5cdFx0XHRpZiAoYjIgPT09IDB4ZmYpXG5cdFx0XHR7XG5cdFx0XHRcdGIyID0gMDtcblx0XHRcdFx0aWYgKGIzID09PSAweGZmKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YjMgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCsrYjM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0KytiMjtcblx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdCsrYjE7XG5cdFx0XHR9XG5cblx0XHRcdHdvcmQgPSAwO1xuXHRcdFx0d29yZCArPSAoYjEgPDwgMTYpO1xuXHRcdFx0d29yZCArPSAoYjIgPDwgOCk7XG5cdFx0XHR3b3JkICs9IGIzO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0d29yZCArPSAoMHgwMSA8PCAyNCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gd29yZDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbmNDb3VudGVyKGNvdW50ZXIpXG5cdFx0e1xuXHRcdFx0aWYgKChjb3VudGVyWzBdID0gaW5jV29yZChjb3VudGVyWzBdKSkgPT09IDApXG5cdFx0XHR7XG5cdFx0XHRcdC8vIGVuY3JfZGF0YSBpbiBmaWxlZW5jLmMgZnJvbSAgRHIgQnJpYW4gR2xhZG1hbidzIGNvdW50cyBvbmx5IHdpdGggRFdPUkQgaiA8IDhcblx0XHRcdFx0Y291bnRlclsxXSA9IGluY1dvcmQoY291bnRlclsxXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY291bnRlcjtcblx0XHR9XG5cblx0ICAgIHZhciBFbmNyeXB0b3IgPSBDVFJHbGFkbWFuLkVuY3J5cHRvciA9IENUUkdsYWRtYW4uZXh0ZW5kKHtcblx0ICAgICAgICBwcm9jZXNzQmxvY2s6IGZ1bmN0aW9uICh3b3Jkcywgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyXG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXHQgICAgICAgICAgICB2YXIgaXYgPSB0aGlzLl9pdjtcblx0ICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbVxuXHQgICAgICAgICAgICBpZiAoaXYpIHtcblx0ICAgICAgICAgICAgICAgIGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyID0gaXYuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBJViBmb3Igc3Vic2VxdWVudCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIHRoaXMuX2l2ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB9XG5cblx0XHRcdFx0aW5jQ291bnRlcihjb3VudGVyKTtcblxuXHRcdFx0XHR2YXIga2V5c3RyZWFtID0gY291bnRlci5zbGljZSgwKTtcblx0ICAgICAgICAgICAgY2lwaGVyLmVuY3J5cHRCbG9jayhrZXlzdHJlYW0sIDApO1xuXG5cdCAgICAgICAgICAgIC8vIEVuY3J5cHRcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja1NpemU7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbb2Zmc2V0ICsgaV0gXj0ga2V5c3RyZWFtW2ldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIENUUkdsYWRtYW4uRGVjcnlwdG9yID0gRW5jcnlwdG9yO1xuXG5cdCAgICByZXR1cm4gQ1RSR2xhZG1hbjtcblx0fSgpKTtcblxuXG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMubW9kZS5DVFJHbGFkbWFuO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogQ291bnRlciBibG9jayBtb2RlLlxuXHQgKi9cblx0Q3J5cHRvSlMubW9kZS5DVFIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIENUUiA9IENyeXB0b0pTLmxpYi5CbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XG5cblx0ICAgIHZhciBFbmNyeXB0b3IgPSBDVFIuRW5jcnlwdG9yID0gQ1RSLmV4dGVuZCh7XG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XG5cdCAgICAgICAgICAgIHZhciBjb3VudGVyID0gdGhpcy5fY291bnRlcjtcblxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBrZXlzdHJlYW1cblx0ICAgICAgICAgICAgaWYgKGl2KSB7XG5cdCAgICAgICAgICAgICAgICBjb3VudGVyID0gdGhpcy5fY291bnRlciA9IGl2LnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgSVYgZm9yIHN1YnNlcXVlbnQgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIga2V5c3RyZWFtID0gY291bnRlci5zbGljZSgwKTtcblx0ICAgICAgICAgICAgY2lwaGVyLmVuY3J5cHRCbG9jayhrZXlzdHJlYW0sIDApO1xuXG5cdCAgICAgICAgICAgIC8vIEluY3JlbWVudCBjb3VudGVyXG5cdCAgICAgICAgICAgIGNvdW50ZXJbYmxvY2tTaXplIC0gMV0gPSAoY291bnRlcltibG9ja1NpemUgLSAxXSArIDEpIHwgMFxuXG5cdCAgICAgICAgICAgIC8vIEVuY3J5cHRcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja1NpemU7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbb2Zmc2V0ICsgaV0gXj0ga2V5c3RyZWFtW2ldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIENUUi5EZWNyeXB0b3IgPSBFbmNyeXB0b3I7XG5cblx0ICAgIHJldHVybiBDVFI7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMubW9kZS5DVFI7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBFbGVjdHJvbmljIENvZGVib29rIGJsb2NrIG1vZGUuXG5cdCAqL1xuXHRDcnlwdG9KUy5tb2RlLkVDQiA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgRUNCID0gQ3J5cHRvSlMubGliLkJsb2NrQ2lwaGVyTW9kZS5leHRlbmQoKTtcblxuXHQgICAgRUNCLkVuY3J5cHRvciA9IEVDQi5leHRlbmQoe1xuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fY2lwaGVyLmVuY3J5cHRCbG9jayh3b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgRUNCLkRlY3J5cHRvciA9IEVDQi5leHRlbmQoe1xuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fY2lwaGVyLmRlY3J5cHRCbG9jayh3b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgcmV0dXJuIEVDQjtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5tb2RlLkVDQjtcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqXG5cdCAqIE91dHB1dCBGZWVkYmFjayBibG9jayBtb2RlLlxuXHQgKi9cblx0Q3J5cHRvSlMubW9kZS5PRkIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIE9GQiA9IENyeXB0b0pTLmxpYi5CbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XG5cblx0ICAgIHZhciBFbmNyeXB0b3IgPSBPRkIuRW5jcnlwdG9yID0gT0ZCLmV4dGVuZCh7XG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XG5cdCAgICAgICAgICAgIHZhciBrZXlzdHJlYW0gPSB0aGlzLl9rZXlzdHJlYW07XG5cblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUga2V5c3RyZWFtXG5cdCAgICAgICAgICAgIGlmIChpdikge1xuXHQgICAgICAgICAgICAgICAga2V5c3RyZWFtID0gdGhpcy5fa2V5c3RyZWFtID0gaXYuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBJViBmb3Igc3Vic2VxdWVudCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIHRoaXMuX2l2ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGNpcGhlci5lbmNyeXB0QmxvY2soa2V5c3RyZWFtLCAwKTtcblxuXHQgICAgICAgICAgICAvLyBFbmNyeXB0XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tTaXplOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW29mZnNldCArIGldIF49IGtleXN0cmVhbVtpXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBPRkIuRGVjcnlwdG9yID0gRW5jcnlwdG9yO1xuXG5cdCAgICByZXR1cm4gT0ZCO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLm1vZGUuT0ZCO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogQU5TSSBYLjkyMyBwYWRkaW5nIHN0cmF0ZWd5LlxuXHQgKi9cblx0Q3J5cHRvSlMucGFkLkFuc2lYOTIzID0ge1xuXHQgICAgcGFkOiBmdW5jdGlvbiAoZGF0YSwgYmxvY2tTaXplKSB7XG5cdCAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgIC8vIENvdW50IHBhZGRpbmcgYnl0ZXNcblx0ICAgICAgICB2YXIgblBhZGRpbmdCeXRlcyA9IGJsb2NrU2l6ZUJ5dGVzIC0gZGF0YVNpZ0J5dGVzICUgYmxvY2tTaXplQnl0ZXM7XG5cblx0ICAgICAgICAvLyBDb21wdXRlIGxhc3QgYnl0ZSBwb3NpdGlvblxuXHQgICAgICAgIHZhciBsYXN0Qnl0ZVBvcyA9IGRhdGFTaWdCeXRlcyArIG5QYWRkaW5nQnl0ZXMgLSAxO1xuXG5cdCAgICAgICAgLy8gUGFkXG5cdCAgICAgICAgZGF0YS5jbGFtcCgpO1xuXHQgICAgICAgIGRhdGEud29yZHNbbGFzdEJ5dGVQb3MgPj4+IDJdIHw9IG5QYWRkaW5nQnl0ZXMgPDwgKDI0IC0gKGxhc3RCeXRlUG9zICUgNCkgKiA4KTtcblx0ICAgICAgICBkYXRhLnNpZ0J5dGVzICs9IG5QYWRkaW5nQnl0ZXM7XG5cdCAgICB9LFxuXG5cdCAgICB1bnBhZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAvLyBHZXQgbnVtYmVyIG9mIHBhZGRpbmcgYnl0ZXMgZnJvbSBsYXN0IGJ5dGVcblx0ICAgICAgICB2YXIgblBhZGRpbmdCeXRlcyA9IGRhdGEud29yZHNbKGRhdGEuc2lnQnl0ZXMgLSAxKSA+Pj4gMl0gJiAweGZmO1xuXG5cdCAgICAgICAgLy8gUmVtb3ZlIHBhZGRpbmdcblx0ICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5QYWRkaW5nQnl0ZXM7XG5cdCAgICB9XG5cdH07XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLkFuc2l4OTIzO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogSVNPIDEwMTI2IHBhZGRpbmcgc3RyYXRlZ3kuXG5cdCAqL1xuXHRDcnlwdG9KUy5wYWQuSXNvMTAxMjYgPSB7XG5cdCAgICBwYWQ6IGZ1bmN0aW9uIChkYXRhLCBibG9ja1NpemUpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAvLyBDb3VudCBwYWRkaW5nIGJ5dGVzXG5cdCAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBibG9ja1NpemVCeXRlcyAtIGRhdGEuc2lnQnl0ZXMgJSBibG9ja1NpemVCeXRlcztcblxuXHQgICAgICAgIC8vIFBhZFxuXHQgICAgICAgIGRhdGEuY29uY2F0KENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKG5QYWRkaW5nQnl0ZXMgLSAxKSkuXG5cdCAgICAgICAgICAgICBjb25jYXQoQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoW25QYWRkaW5nQnl0ZXMgPDwgMjRdLCAxKSk7XG5cdCAgICB9LFxuXG5cdCAgICB1bnBhZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAvLyBHZXQgbnVtYmVyIG9mIHBhZGRpbmcgYnl0ZXMgZnJvbSBsYXN0IGJ5dGVcblx0ICAgICAgICB2YXIgblBhZGRpbmdCeXRlcyA9IGRhdGEud29yZHNbKGRhdGEuc2lnQnl0ZXMgLSAxKSA+Pj4gMl0gJiAweGZmO1xuXG5cdCAgICAgICAgLy8gUmVtb3ZlIHBhZGRpbmdcblx0ICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5QYWRkaW5nQnl0ZXM7XG5cdCAgICB9XG5cdH07XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLklzbzEwMTI2O1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogSVNPL0lFQyA5Nzk3LTEgUGFkZGluZyBNZXRob2QgMi5cblx0ICovXG5cdENyeXB0b0pTLnBhZC5Jc285Nzk3MSA9IHtcblx0ICAgIHBhZDogZnVuY3Rpb24gKGRhdGEsIGJsb2NrU2l6ZSkge1xuXHQgICAgICAgIC8vIEFkZCAweDgwIGJ5dGVcblx0ICAgICAgICBkYXRhLmNvbmNhdChDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHg4MDAwMDAwMF0sIDEpKTtcblxuXHQgICAgICAgIC8vIFplcm8gcGFkIHRoZSByZXN0XG5cdCAgICAgICAgQ3J5cHRvSlMucGFkLlplcm9QYWRkaW5nLnBhZChkYXRhLCBibG9ja1NpemUpO1xuXHQgICAgfSxcblxuXHQgICAgdW5wYWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgLy8gUmVtb3ZlIHplcm8gcGFkZGluZ1xuXHQgICAgICAgIENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZy51bnBhZChkYXRhKTtcblxuXHQgICAgICAgIC8vIFJlbW92ZSBvbmUgbW9yZSBieXRlIC0tIHRoZSAweDgwIGJ5dGVcblx0ICAgICAgICBkYXRhLnNpZ0J5dGVzLS07XG5cdCAgICB9XG5cdH07XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLklzbzk3OTcxO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogQSBub29wIHBhZGRpbmcgc3RyYXRlZ3kuXG5cdCAqL1xuXHRDcnlwdG9KUy5wYWQuTm9QYWRkaW5nID0ge1xuXHQgICAgcGFkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICB9LFxuXG5cdCAgICB1bnBhZDogZnVuY3Rpb24gKCkge1xuXHQgICAgfVxuXHR9O1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLnBhZC5Ob1BhZGRpbmc7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBaZXJvIHBhZGRpbmcgc3RyYXRlZ3kuXG5cdCAqL1xuXHRDcnlwdG9KUy5wYWQuWmVyb1BhZGRpbmcgPSB7XG5cdCAgICBwYWQ6IGZ1bmN0aW9uIChkYXRhLCBibG9ja1NpemUpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAvLyBQYWRcblx0ICAgICAgICBkYXRhLmNsYW1wKCk7XG5cdCAgICAgICAgZGF0YS5zaWdCeXRlcyArPSBibG9ja1NpemVCeXRlcyAtICgoZGF0YS5zaWdCeXRlcyAlIGJsb2NrU2l6ZUJ5dGVzKSB8fCBibG9ja1NpemVCeXRlcyk7XG5cdCAgICB9LFxuXG5cdCAgICB1bnBhZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgLy8gVW5wYWRcblx0ICAgICAgICB2YXIgaSA9IGRhdGEuc2lnQnl0ZXMgLSAxO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSBkYXRhLnNpZ0J5dGVzIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0ICAgICAgICAgICAgaWYgKCgoZGF0YVdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZikpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBpICsgMTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9O1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZztcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9zaGExXCIpLCByZXF1aXJlKFwiLi9obWFjXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL3NoYTFcIiwgXCIuL2htYWNcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZTtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXHQgICAgdmFyIFNIQTEgPSBDX2FsZ28uU0hBMTtcblx0ICAgIHZhciBITUFDID0gQ19hbGdvLkhNQUM7XG5cblx0ICAgIC8qKlxuXHQgICAgICogUGFzc3dvcmQtQmFzZWQgS2V5IERlcml2YXRpb24gRnVuY3Rpb24gMiBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBQQktERjIgPSBDX2FsZ28uUEJLREYyID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBrZXlTaXplIFRoZSBrZXkgc2l6ZSBpbiB3b3JkcyB0byBnZW5lcmF0ZS4gRGVmYXVsdDogNCAoMTI4IGJpdHMpXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZS4gRGVmYXVsdDogU0hBMVxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpdGVyYXRpb25zIFRoZSBudW1iZXIgb2YgaXRlcmF0aW9ucyB0byBwZXJmb3JtLiBEZWZhdWx0OiAxXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgIGtleVNpemU6IDEyOC8zMixcblx0ICAgICAgICAgICAgaGFzaGVyOiBTSEExLFxuXHQgICAgICAgICAgICBpdGVyYXRpb25zOiAxXG5cdCAgICAgICAgfSksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQga2V5IGRlcml2YXRpb24gZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSBkZXJpdmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIga2RmID0gQ3J5cHRvSlMuYWxnby5QQktERjIuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLlBCS0RGMi5jcmVhdGUoeyBrZXlTaXplOiA4IH0pO1xuXHQgICAgICAgICAqICAgICB2YXIga2RmID0gQ3J5cHRvSlMuYWxnby5QQktERjIuY3JlYXRlKHsga2V5U2l6ZTogOCwgaXRlcmF0aW9uczogMTAwMCB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbXB1dGVzIHRoZSBQYXNzd29yZC1CYXNlZCBLZXkgRGVyaXZhdGlvbiBGdW5jdGlvbiAyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQuXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBzYWx0IEEgc2FsdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRlcml2ZWQga2V5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIga2V5ID0ga2RmLmNvbXB1dGUocGFzc3dvcmQsIHNhbHQpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChwYXNzd29yZCwgc2FsdCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgY2ZnID0gdGhpcy5jZmc7XG5cblx0ICAgICAgICAgICAgLy8gSW5pdCBITUFDXG5cdCAgICAgICAgICAgIHZhciBobWFjID0gSE1BQy5jcmVhdGUoY2ZnLmhhc2hlciwgcGFzc3dvcmQpO1xuXG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHZhciBkZXJpdmVkS2V5ID0gV29yZEFycmF5LmNyZWF0ZSgpO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tJbmRleCA9IFdvcmRBcnJheS5jcmVhdGUoWzB4MDAwMDAwMDFdKTtcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRLZXlXb3JkcyA9IGRlcml2ZWRLZXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja0luZGV4V29yZHMgPSBibG9ja0luZGV4LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIga2V5U2l6ZSA9IGNmZy5rZXlTaXplO1xuXHQgICAgICAgICAgICB2YXIgaXRlcmF0aW9ucyA9IGNmZy5pdGVyYXRpb25zO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleVxuXHQgICAgICAgICAgICB3aGlsZSAoZGVyaXZlZEtleVdvcmRzLmxlbmd0aCA8IGtleVNpemUpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBibG9jayA9IGhtYWMudXBkYXRlKHNhbHQpLmZpbmFsaXplKGJsb2NrSW5kZXgpO1xuXHQgICAgICAgICAgICAgICAgaG1hYy5yZXNldCgpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgIHZhciBibG9ja1dvcmRzID0gYmxvY2sud29yZHM7XG5cdCAgICAgICAgICAgICAgICB2YXIgYmxvY2tXb3Jkc0xlbmd0aCA9IGJsb2NrV29yZHMubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBJdGVyYXRpb25zXG5cdCAgICAgICAgICAgICAgICB2YXIgaW50ZXJtZWRpYXRlID0gYmxvY2s7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGl0ZXJhdGlvbnM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZSA9IGhtYWMuZmluYWxpemUoaW50ZXJtZWRpYXRlKTtcblx0ICAgICAgICAgICAgICAgICAgICBobWFjLnJlc2V0KCk7XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBpbnRlcm1lZGlhdGVXb3JkcyA9IGludGVybWVkaWF0ZS53b3JkcztcblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFhPUiBpbnRlcm1lZGlhdGUgd2l0aCBibG9ja1xuXHQgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmxvY2tXb3Jkc0xlbmd0aDsgaisrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrV29yZHNbal0gXj0gaW50ZXJtZWRpYXRlV29yZHNbal07XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICBkZXJpdmVkS2V5LmNvbmNhdChibG9jayk7XG5cdCAgICAgICAgICAgICAgICBibG9ja0luZGV4V29yZHNbMF0rKztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBkZXJpdmVkS2V5LnNpZ0J5dGVzID0ga2V5U2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGRlcml2ZWRLZXk7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQ29tcHV0ZXMgdGhlIFBhc3N3b3JkLUJhc2VkIEtleSBEZXJpdmF0aW9uIEZ1bmN0aW9uIDIuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQuXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHNhbHQgQSBzYWx0LlxuXHQgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGNvbXB1dGF0aW9uLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRlcml2ZWQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuUEJLREYyKHBhc3N3b3JkLCBzYWx0KTtcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuUEJLREYyKHBhc3N3b3JkLCBzYWx0LCB7IGtleVNpemU6IDggfSk7XG5cdCAgICAgKiAgICAgdmFyIGtleSA9IENyeXB0b0pTLlBCS0RGMihwYXNzd29yZCwgc2FsdCwgeyBrZXlTaXplOiA4LCBpdGVyYXRpb25zOiAxMDAwIH0pO1xuXHQgICAgICovXG5cdCAgICBDLlBCS0RGMiA9IGZ1bmN0aW9uIChwYXNzd29yZCwgc2FsdCwgY2ZnKSB7XG5cdCAgICAgICAgcmV0dXJuIFBCS0RGMi5jcmVhdGUoY2ZnKS5jb21wdXRlKHBhc3N3b3JkLCBzYWx0KTtcblx0ICAgIH07XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuUEJLREYyO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9lbmMtYmFzZTY0XCIsIFwiLi9tZDVcIiwgXCIuL2V2cGtkZlwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBTdHJlYW1DaXBoZXIgPSBDX2xpYi5TdHJlYW1DaXBoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3RzXG5cdCAgICB2YXIgUyAgPSBbXTtcblx0ICAgIHZhciBDXyA9IFtdO1xuXHQgICAgdmFyIEcgID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogUmFiYml0IHN0cmVhbSBjaXBoZXIgYWxnb3JpdGhtLlxuXHQgICAgICpcblx0ICAgICAqIFRoaXMgaXMgYSBsZWdhY3kgdmVyc2lvbiB0aGF0IG5lZ2xlY3RlZCB0byBjb252ZXJ0IHRoZSBrZXkgdG8gbGl0dGxlLWVuZGlhbi5cblx0ICAgICAqIFRoaXMgZXJyb3IgZG9lc24ndCBhZmZlY3QgdGhlIGNpcGhlcidzIHNlY3VyaXR5LFxuXHQgICAgICogYnV0IGl0IGRvZXMgYWZmZWN0IGl0cyBjb21wYXRpYmlsaXR5IHdpdGggb3RoZXIgaW1wbGVtZW50YXRpb25zLlxuXHQgICAgICovXG5cdCAgICB2YXIgUmFiYml0TGVnYWN5ID0gQ19hbGdvLlJhYmJpdExlZ2FjeSA9IFN0cmVhbUNpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgSyA9IHRoaXMuX2tleS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5jZmcuaXY7XG5cblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgaW5pdGlhbCBzdGF0ZSB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIFggPSB0aGlzLl9YID0gW1xuXHQgICAgICAgICAgICAgICAgS1swXSwgKEtbM10gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSxcblx0ICAgICAgICAgICAgICAgIEtbMV0sIChLWzBdIDw8IDE2KSB8IChLWzNdID4+PiAxNiksXG5cdCAgICAgICAgICAgICAgICBLWzJdLCAoS1sxXSA8PCAxNikgfCAoS1swXSA+Pj4gMTYpLFxuXHQgICAgICAgICAgICAgICAgS1szXSwgKEtbMl0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KVxuXHQgICAgICAgICAgICBdO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIEMgPSB0aGlzLl9DID0gW1xuXHQgICAgICAgICAgICAgICAgKEtbMl0gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSwgKEtbMF0gJiAweGZmZmYwMDAwKSB8IChLWzFdICYgMHgwMDAwZmZmZiksXG5cdCAgICAgICAgICAgICAgICAoS1szXSA8PCAxNikgfCAoS1szXSA+Pj4gMTYpLCAoS1sxXSAmIDB4ZmZmZjAwMDApIHwgKEtbMl0gJiAweDAwMDBmZmZmKSxcblx0ICAgICAgICAgICAgICAgIChLWzBdIDw8IDE2KSB8IChLWzBdID4+PiAxNiksIChLWzJdICYgMHhmZmZmMDAwMCkgfCAoS1szXSAmIDB4MDAwMGZmZmYpLFxuXHQgICAgICAgICAgICAgICAgKEtbMV0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KSwgKEtbM10gJiAweGZmZmYwMDAwKSB8IChLWzBdICYgMHgwMDAwZmZmZilcblx0ICAgICAgICAgICAgXTtcblxuXHQgICAgICAgICAgICAvLyBDYXJyeSBiaXRcblx0ICAgICAgICAgICAgdGhpcy5fYiA9IDA7XG5cblx0ICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc3lzdGVtIGZvdXIgdGltZXNcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gTW9kaWZ5IHRoZSBjb3VudGVyc1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgQ1tpXSBePSBYWyhpICsgNCkgJiA3XTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIElWIHNldHVwXG5cdCAgICAgICAgICAgIGlmIChpdikge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgSVYgPSBpdi53b3Jkcztcblx0ICAgICAgICAgICAgICAgIHZhciBJVl8wID0gSVZbMF07XG5cdCAgICAgICAgICAgICAgICB2YXIgSVZfMSA9IElWWzFdO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBmb3VyIHN1YnZlY3RvcnNcblx0ICAgICAgICAgICAgICAgIHZhciBpMCA9ICgoKElWXzAgPDwgOCkgfCAoSVZfMCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHwgKCgoSVZfMCA8PCAyNCkgfCAoSVZfMCA+Pj4gOCkpICYgMHhmZjAwZmYwMCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgaTIgPSAoKChJVl8xIDw8IDgpIHwgKElWXzEgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8ICgoKElWXzEgPDwgMjQpIHwgKElWXzEgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICAgICAgdmFyIGkxID0gKGkwID4+PiAxNikgfCAoaTIgJiAweGZmZmYwMDAwKTtcblx0ICAgICAgICAgICAgICAgIHZhciBpMyA9IChpMiA8PCAxNikgIHwgKGkwICYgMHgwMDAwZmZmZik7XG5cblx0ICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgICAgICAgICAgQ1swXSBePSBpMDtcblx0ICAgICAgICAgICAgICAgIENbMV0gXj0gaTE7XG5cdCAgICAgICAgICAgICAgICBDWzJdIF49IGkyO1xuXHQgICAgICAgICAgICAgICAgQ1szXSBePSBpMztcblx0ICAgICAgICAgICAgICAgIENbNF0gXj0gaTA7XG5cdCAgICAgICAgICAgICAgICBDWzVdIF49IGkxO1xuXHQgICAgICAgICAgICAgICAgQ1s2XSBePSBpMjtcblx0ICAgICAgICAgICAgICAgIENbN10gXj0gaTM7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIHN5c3RlbSBmb3VyIHRpbWVzXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XG5cblx0ICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc3lzdGVtXG5cdCAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGZvdXIga2V5c3RyZWFtIHdvcmRzXG5cdCAgICAgICAgICAgIFNbMF0gPSBYWzBdIF4gKFhbNV0gPj4+IDE2KSBeIChYWzNdIDw8IDE2KTtcblx0ICAgICAgICAgICAgU1sxXSA9IFhbMl0gXiAoWFs3XSA+Pj4gMTYpIF4gKFhbNV0gPDwgMTYpO1xuXHQgICAgICAgICAgICBTWzJdID0gWFs0XSBeIChYWzFdID4+PiAxNikgXiAoWFs3XSA8PCAxNik7XG5cdCAgICAgICAgICAgIFNbM10gPSBYWzZdIF4gKFhbM10gPj4+IDE2KSBeIChYWzFdIDw8IDE2KTtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgICAgIFNbaV0gPSAoKChTW2ldIDw8IDgpICB8IChTW2ldID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICAgICgoKFNbaV0gPDwgMjQpIHwgKFNbaV0gPj4+IDgpKSAgJiAweGZmMDBmZjAwKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICAgICAgTVtvZmZzZXQgKyBpXSBePSBTW2ldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogMTI4LzMyLFxuXG5cdCAgICAgICAgaXZTaXplOiA2NC8zMlxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIG5leHRTdGF0ZSgpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XG5cdCAgICAgICAgdmFyIEMgPSB0aGlzLl9DO1xuXG5cdCAgICAgICAgLy8gU2F2ZSBvbGQgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICBDX1tpXSA9IENbaV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgIENbMF0gPSAoQ1swXSArIDB4NGQzNGQzNGQgKyB0aGlzLl9iKSB8IDA7XG5cdCAgICAgICAgQ1sxXSA9IChDWzFdICsgMHhkMzRkMzRkMyArICgoQ1swXSA+Pj4gMCkgPCAoQ19bMF0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1syXSA9IChDWzJdICsgMHgzNGQzNGQzNCArICgoQ1sxXSA+Pj4gMCkgPCAoQ19bMV0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1szXSA9IChDWzNdICsgMHg0ZDM0ZDM0ZCArICgoQ1syXSA+Pj4gMCkgPCAoQ19bMl0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s0XSA9IChDWzRdICsgMHhkMzRkMzRkMyArICgoQ1szXSA+Pj4gMCkgPCAoQ19bM10gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s1XSA9IChDWzVdICsgMHgzNGQzNGQzNCArICgoQ1s0XSA+Pj4gMCkgPCAoQ19bNF0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s2XSA9IChDWzZdICsgMHg0ZDM0ZDM0ZCArICgoQ1s1XSA+Pj4gMCkgPCAoQ19bNV0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s3XSA9IChDWzddICsgMHhkMzRkMzRkMyArICgoQ1s2XSA+Pj4gMCkgPCAoQ19bNl0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgdGhpcy5fYiA9IChDWzddID4+PiAwKSA8IChDX1s3XSA+Pj4gMCkgPyAxIDogMDtcblxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZy12YWx1ZXNcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgZ3ggPSBYW2ldICsgQ1tpXTtcblxuXHQgICAgICAgICAgICAvLyBDb25zdHJ1Y3QgaGlnaCBhbmQgbG93IGFyZ3VtZW50IGZvciBzcXVhcmluZ1xuXHQgICAgICAgICAgICB2YXIgZ2EgPSBneCAmIDB4ZmZmZjtcblx0ICAgICAgICAgICAgdmFyIGdiID0gZ3ggPj4+IDE2O1xuXG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBoaWdoIGFuZCBsb3cgcmVzdWx0IG9mIHNxdWFyaW5nXG5cdCAgICAgICAgICAgIHZhciBnaCA9ICgoKChnYSAqIGdhKSA+Pj4gMTcpICsgZ2EgKiBnYikgPj4+IDE1KSArIGdiICogZ2I7XG5cdCAgICAgICAgICAgIHZhciBnbCA9ICgoKGd4ICYgMHhmZmZmMDAwMCkgKiBneCkgfCAwKSArICgoKGd4ICYgMHgwMDAwZmZmZikgKiBneCkgfCAwKTtcblxuXHQgICAgICAgICAgICAvLyBIaWdoIFhPUiBsb3dcblx0ICAgICAgICAgICAgR1tpXSA9IGdoIF4gZ2w7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBzdGF0ZSB2YWx1ZXNcblx0ICAgICAgICBYWzBdID0gKEdbMF0gKyAoKEdbN10gPDwgMTYpIHwgKEdbN10gPj4+IDE2KSkgKyAoKEdbNl0gPDwgMTYpIHwgKEdbNl0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzFdID0gKEdbMV0gKyAoKEdbMF0gPDwgOCkgIHwgKEdbMF0gPj4+IDI0KSkgKyBHWzddKSB8IDA7XG5cdCAgICAgICAgWFsyXSA9IChHWzJdICsgKChHWzFdIDw8IDE2KSB8IChHWzFdID4+PiAxNikpICsgKChHWzBdIDw8IDE2KSB8IChHWzBdID4+PiAxNikpKSB8IDA7XG5cdCAgICAgICAgWFszXSA9IChHWzNdICsgKChHWzJdIDw8IDgpICB8IChHWzJdID4+PiAyNCkpICsgR1sxXSkgfCAwO1xuXHQgICAgICAgIFhbNF0gPSAoR1s0XSArICgoR1szXSA8PCAxNikgfCAoR1szXSA+Pj4gMTYpKSArICgoR1syXSA8PCAxNikgfCAoR1syXSA+Pj4gMTYpKSkgfCAwO1xuXHQgICAgICAgIFhbNV0gPSAoR1s1XSArICgoR1s0XSA8PCA4KSAgfCAoR1s0XSA+Pj4gMjQpKSArIEdbM10pIHwgMDtcblx0ICAgICAgICBYWzZdID0gKEdbNl0gKyAoKEdbNV0gPDwgMTYpIHwgKEdbNV0gPj4+IDE2KSkgKyAoKEdbNF0gPDwgMTYpIHwgKEdbNF0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzddID0gKEdbN10gKyAoKEdbNl0gPDwgOCkgIHwgKEdbNl0gPj4+IDI0KSkgKyBHWzVdKSB8IDA7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuUmFiYml0TGVnYWN5LmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuUmFiYml0TGVnYWN5LmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xuXHQgICAgICovXG5cdCAgICBDLlJhYmJpdExlZ2FjeSA9IFN0cmVhbUNpcGhlci5fY3JlYXRlSGVscGVyKFJhYmJpdExlZ2FjeSk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuUmFiYml0TGVnYWN5O1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9lbmMtYmFzZTY0XCIsIFwiLi9tZDVcIiwgXCIuL2V2cGtkZlwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBTdHJlYW1DaXBoZXIgPSBDX2xpYi5TdHJlYW1DaXBoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3RzXG5cdCAgICB2YXIgUyAgPSBbXTtcblx0ICAgIHZhciBDXyA9IFtdO1xuXHQgICAgdmFyIEcgID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogUmFiYml0IHN0cmVhbSBjaXBoZXIgYWxnb3JpdGhtXG5cdCAgICAgKi9cblx0ICAgIHZhciBSYWJiaXQgPSBDX2FsZ28uUmFiYml0ID0gU3RyZWFtQ2lwaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBLID0gdGhpcy5fa2V5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgaXYgPSB0aGlzLmNmZy5pdjtcblxuXHQgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgS1tpXSA9ICgoKEtbaV0gPDwgOCkgIHwgKEtbaV0gPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgICAgKCgoS1tpXSA8PCAyNCkgfCAoS1tpXSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgaW5pdGlhbCBzdGF0ZSB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIFggPSB0aGlzLl9YID0gW1xuXHQgICAgICAgICAgICAgICAgS1swXSwgKEtbM10gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSxcblx0ICAgICAgICAgICAgICAgIEtbMV0sIChLWzBdIDw8IDE2KSB8IChLWzNdID4+PiAxNiksXG5cdCAgICAgICAgICAgICAgICBLWzJdLCAoS1sxXSA8PCAxNikgfCAoS1swXSA+Pj4gMTYpLFxuXHQgICAgICAgICAgICAgICAgS1szXSwgKEtbMl0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KVxuXHQgICAgICAgICAgICBdO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIEMgPSB0aGlzLl9DID0gW1xuXHQgICAgICAgICAgICAgICAgKEtbMl0gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSwgKEtbMF0gJiAweGZmZmYwMDAwKSB8IChLWzFdICYgMHgwMDAwZmZmZiksXG5cdCAgICAgICAgICAgICAgICAoS1szXSA8PCAxNikgfCAoS1szXSA+Pj4gMTYpLCAoS1sxXSAmIDB4ZmZmZjAwMDApIHwgKEtbMl0gJiAweDAwMDBmZmZmKSxcblx0ICAgICAgICAgICAgICAgIChLWzBdIDw8IDE2KSB8IChLWzBdID4+PiAxNiksIChLWzJdICYgMHhmZmZmMDAwMCkgfCAoS1szXSAmIDB4MDAwMGZmZmYpLFxuXHQgICAgICAgICAgICAgICAgKEtbMV0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KSwgKEtbM10gJiAweGZmZmYwMDAwKSB8IChLWzBdICYgMHgwMDAwZmZmZilcblx0ICAgICAgICAgICAgXTtcblxuXHQgICAgICAgICAgICAvLyBDYXJyeSBiaXRcblx0ICAgICAgICAgICAgdGhpcy5fYiA9IDA7XG5cblx0ICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc3lzdGVtIGZvdXIgdGltZXNcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gTW9kaWZ5IHRoZSBjb3VudGVyc1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgQ1tpXSBePSBYWyhpICsgNCkgJiA3XTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIElWIHNldHVwXG5cdCAgICAgICAgICAgIGlmIChpdikge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgSVYgPSBpdi53b3Jkcztcblx0ICAgICAgICAgICAgICAgIHZhciBJVl8wID0gSVZbMF07XG5cdCAgICAgICAgICAgICAgICB2YXIgSVZfMSA9IElWWzFdO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBmb3VyIHN1YnZlY3RvcnNcblx0ICAgICAgICAgICAgICAgIHZhciBpMCA9ICgoKElWXzAgPDwgOCkgfCAoSVZfMCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHwgKCgoSVZfMCA8PCAyNCkgfCAoSVZfMCA+Pj4gOCkpICYgMHhmZjAwZmYwMCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgaTIgPSAoKChJVl8xIDw8IDgpIHwgKElWXzEgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8ICgoKElWXzEgPDwgMjQpIHwgKElWXzEgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICAgICAgdmFyIGkxID0gKGkwID4+PiAxNikgfCAoaTIgJiAweGZmZmYwMDAwKTtcblx0ICAgICAgICAgICAgICAgIHZhciBpMyA9IChpMiA8PCAxNikgIHwgKGkwICYgMHgwMDAwZmZmZik7XG5cblx0ICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgICAgICAgICAgQ1swXSBePSBpMDtcblx0ICAgICAgICAgICAgICAgIENbMV0gXj0gaTE7XG5cdCAgICAgICAgICAgICAgICBDWzJdIF49IGkyO1xuXHQgICAgICAgICAgICAgICAgQ1szXSBePSBpMztcblx0ICAgICAgICAgICAgICAgIENbNF0gXj0gaTA7XG5cdCAgICAgICAgICAgICAgICBDWzVdIF49IGkxO1xuXHQgICAgICAgICAgICAgICAgQ1s2XSBePSBpMjtcblx0ICAgICAgICAgICAgICAgIENbN10gXj0gaTM7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIHN5c3RlbSBmb3VyIHRpbWVzXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XG5cblx0ICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc3lzdGVtXG5cdCAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGZvdXIga2V5c3RyZWFtIHdvcmRzXG5cdCAgICAgICAgICAgIFNbMF0gPSBYWzBdIF4gKFhbNV0gPj4+IDE2KSBeIChYWzNdIDw8IDE2KTtcblx0ICAgICAgICAgICAgU1sxXSA9IFhbMl0gXiAoWFs3XSA+Pj4gMTYpIF4gKFhbNV0gPDwgMTYpO1xuXHQgICAgICAgICAgICBTWzJdID0gWFs0XSBeIChYWzFdID4+PiAxNikgXiAoWFs3XSA8PCAxNik7XG5cdCAgICAgICAgICAgIFNbM10gPSBYWzZdIF4gKFhbM10gPj4+IDE2KSBeIChYWzFdIDw8IDE2KTtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgICAgIFNbaV0gPSAoKChTW2ldIDw8IDgpICB8IChTW2ldID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICAgICgoKFNbaV0gPDwgMjQpIHwgKFNbaV0gPj4+IDgpKSAgJiAweGZmMDBmZjAwKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICAgICAgTVtvZmZzZXQgKyBpXSBePSBTW2ldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogMTI4LzMyLFxuXG5cdCAgICAgICAgaXZTaXplOiA2NC8zMlxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIG5leHRTdGF0ZSgpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XG5cdCAgICAgICAgdmFyIEMgPSB0aGlzLl9DO1xuXG5cdCAgICAgICAgLy8gU2F2ZSBvbGQgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICBDX1tpXSA9IENbaV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgIENbMF0gPSAoQ1swXSArIDB4NGQzNGQzNGQgKyB0aGlzLl9iKSB8IDA7XG5cdCAgICAgICAgQ1sxXSA9IChDWzFdICsgMHhkMzRkMzRkMyArICgoQ1swXSA+Pj4gMCkgPCAoQ19bMF0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1syXSA9IChDWzJdICsgMHgzNGQzNGQzNCArICgoQ1sxXSA+Pj4gMCkgPCAoQ19bMV0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1szXSA9IChDWzNdICsgMHg0ZDM0ZDM0ZCArICgoQ1syXSA+Pj4gMCkgPCAoQ19bMl0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s0XSA9IChDWzRdICsgMHhkMzRkMzRkMyArICgoQ1szXSA+Pj4gMCkgPCAoQ19bM10gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s1XSA9IChDWzVdICsgMHgzNGQzNGQzNCArICgoQ1s0XSA+Pj4gMCkgPCAoQ19bNF0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s2XSA9IChDWzZdICsgMHg0ZDM0ZDM0ZCArICgoQ1s1XSA+Pj4gMCkgPCAoQ19bNV0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s3XSA9IChDWzddICsgMHhkMzRkMzRkMyArICgoQ1s2XSA+Pj4gMCkgPCAoQ19bNl0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgdGhpcy5fYiA9IChDWzddID4+PiAwKSA8IChDX1s3XSA+Pj4gMCkgPyAxIDogMDtcblxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZy12YWx1ZXNcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgZ3ggPSBYW2ldICsgQ1tpXTtcblxuXHQgICAgICAgICAgICAvLyBDb25zdHJ1Y3QgaGlnaCBhbmQgbG93IGFyZ3VtZW50IGZvciBzcXVhcmluZ1xuXHQgICAgICAgICAgICB2YXIgZ2EgPSBneCAmIDB4ZmZmZjtcblx0ICAgICAgICAgICAgdmFyIGdiID0gZ3ggPj4+IDE2O1xuXG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBoaWdoIGFuZCBsb3cgcmVzdWx0IG9mIHNxdWFyaW5nXG5cdCAgICAgICAgICAgIHZhciBnaCA9ICgoKChnYSAqIGdhKSA+Pj4gMTcpICsgZ2EgKiBnYikgPj4+IDE1KSArIGdiICogZ2I7XG5cdCAgICAgICAgICAgIHZhciBnbCA9ICgoKGd4ICYgMHhmZmZmMDAwMCkgKiBneCkgfCAwKSArICgoKGd4ICYgMHgwMDAwZmZmZikgKiBneCkgfCAwKTtcblxuXHQgICAgICAgICAgICAvLyBIaWdoIFhPUiBsb3dcblx0ICAgICAgICAgICAgR1tpXSA9IGdoIF4gZ2w7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBzdGF0ZSB2YWx1ZXNcblx0ICAgICAgICBYWzBdID0gKEdbMF0gKyAoKEdbN10gPDwgMTYpIHwgKEdbN10gPj4+IDE2KSkgKyAoKEdbNl0gPDwgMTYpIHwgKEdbNl0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzFdID0gKEdbMV0gKyAoKEdbMF0gPDwgOCkgIHwgKEdbMF0gPj4+IDI0KSkgKyBHWzddKSB8IDA7XG5cdCAgICAgICAgWFsyXSA9IChHWzJdICsgKChHWzFdIDw8IDE2KSB8IChHWzFdID4+PiAxNikpICsgKChHWzBdIDw8IDE2KSB8IChHWzBdID4+PiAxNikpKSB8IDA7XG5cdCAgICAgICAgWFszXSA9IChHWzNdICsgKChHWzJdIDw8IDgpICB8IChHWzJdID4+PiAyNCkpICsgR1sxXSkgfCAwO1xuXHQgICAgICAgIFhbNF0gPSAoR1s0XSArICgoR1szXSA8PCAxNikgfCAoR1szXSA+Pj4gMTYpKSArICgoR1syXSA8PCAxNikgfCAoR1syXSA+Pj4gMTYpKSkgfCAwO1xuXHQgICAgICAgIFhbNV0gPSAoR1s1XSArICgoR1s0XSA8PCA4KSAgfCAoR1s0XSA+Pj4gMjQpKSArIEdbM10pIHwgMDtcblx0ICAgICAgICBYWzZdID0gKEdbNl0gKyAoKEdbNV0gPDwgMTYpIHwgKEdbNV0gPj4+IDE2KSkgKyAoKEdbNF0gPDwgMTYpIHwgKEdbNF0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzddID0gKEdbN10gKyAoKEdbNl0gPDwgOCkgIHwgKEdbNl0gPj4+IDI0KSkgKyBHWzVdKSB8IDA7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuUmFiYml0LmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuUmFiYml0LmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xuXHQgICAgICovXG5cdCAgICBDLlJhYmJpdCA9IFN0cmVhbUNpcGhlci5fY3JlYXRlSGVscGVyKFJhYmJpdCk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuUmFiYml0O1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9lbmMtYmFzZTY0XCIsIFwiLi9tZDVcIiwgXCIuL2V2cGtkZlwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBTdHJlYW1DaXBoZXIgPSBDX2xpYi5TdHJlYW1DaXBoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFJDNCBzdHJlYW0gY2lwaGVyIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFJDNCA9IENfYWxnby5SQzQgPSBTdHJlYW1DaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2tleTtcblx0ICAgICAgICAgICAgdmFyIGtleVdvcmRzID0ga2V5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIga2V5U2lnQnl0ZXMgPSBrZXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gSW5pdCBzYm94XG5cdCAgICAgICAgICAgIHZhciBTID0gdGhpcy5fUyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBTW2ldID0gaTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEtleSBzZXR1cFxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGtleUJ5dGVJbmRleCA9IGkgJSBrZXlTaWdCeXRlcztcblx0ICAgICAgICAgICAgICAgIHZhciBrZXlCeXRlID0gKGtleVdvcmRzW2tleUJ5dGVJbmRleCA+Pj4gMl0gPj4+ICgyNCAtIChrZXlCeXRlSW5kZXggJSA0KSAqIDgpKSAmIDB4ZmY7XG5cblx0ICAgICAgICAgICAgICAgIGogPSAoaiArIFNbaV0gKyBrZXlCeXRlKSAlIDI1NjtcblxuXHQgICAgICAgICAgICAgICAgLy8gU3dhcFxuXHQgICAgICAgICAgICAgICAgdmFyIHQgPSBTW2ldO1xuXHQgICAgICAgICAgICAgICAgU1tpXSA9IFNbal07XG5cdCAgICAgICAgICAgICAgICBTW2pdID0gdDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50ZXJzXG5cdCAgICAgICAgICAgIHRoaXMuX2kgPSB0aGlzLl9qID0gMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0XSBePSBnZW5lcmF0ZUtleXN0cmVhbVdvcmQuY2FsbCh0aGlzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAga2V5U2l6ZTogMjU2LzMyLFxuXG5cdCAgICAgICAgaXZTaXplOiAwXG5cdCAgICB9KTtcblxuXHQgICAgZnVuY3Rpb24gZ2VuZXJhdGVLZXlzdHJlYW1Xb3JkKCkge1xuXHQgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgIHZhciBTID0gdGhpcy5fUztcblx0ICAgICAgICB2YXIgaSA9IHRoaXMuX2k7XG5cdCAgICAgICAgdmFyIGogPSB0aGlzLl9qO1xuXG5cdCAgICAgICAgLy8gR2VuZXJhdGUga2V5c3RyZWFtIHdvcmRcblx0ICAgICAgICB2YXIga2V5c3RyZWFtV29yZCA9IDA7XG5cdCAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCA0OyBuKyspIHtcblx0ICAgICAgICAgICAgaSA9IChpICsgMSkgJSAyNTY7XG5cdCAgICAgICAgICAgIGogPSAoaiArIFNbaV0pICUgMjU2O1xuXG5cdCAgICAgICAgICAgIC8vIFN3YXBcblx0ICAgICAgICAgICAgdmFyIHQgPSBTW2ldO1xuXHQgICAgICAgICAgICBTW2ldID0gU1tqXTtcblx0ICAgICAgICAgICAgU1tqXSA9IHQ7XG5cblx0ICAgICAgICAgICAga2V5c3RyZWFtV29yZCB8PSBTWyhTW2ldICsgU1tqXSkgJSAyNTZdIDw8ICgyNCAtIG4gKiA4KTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBVcGRhdGUgY291bnRlcnNcblx0ICAgICAgICB0aGlzLl9pID0gaTtcblx0ICAgICAgICB0aGlzLl9qID0gajtcblxuXHQgICAgICAgIHJldHVybiBrZXlzdHJlYW1Xb3JkO1xuXHQgICAgfVxuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgY2lwaGVydGV4dCA9IENyeXB0b0pTLlJDNC5lbmNyeXB0KG1lc3NhZ2UsIGtleSwgY2ZnKTtcblx0ICAgICAqICAgICB2YXIgcGxhaW50ZXh0ICA9IENyeXB0b0pTLlJDNC5kZWNyeXB0KGNpcGhlcnRleHQsIGtleSwgY2ZnKTtcblx0ICAgICAqL1xuXHQgICAgQy5SQzQgPSBTdHJlYW1DaXBoZXIuX2NyZWF0ZUhlbHBlcihSQzQpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIE1vZGlmaWVkIFJDNCBzdHJlYW0gY2lwaGVyIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFJDNERyb3AgPSBDX2FsZ28uUkM0RHJvcCA9IFJDNC5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkcm9wIFRoZSBudW1iZXIgb2Yga2V5c3RyZWFtIHdvcmRzIHRvIGRyb3AuIERlZmF1bHQgMTkyXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBSQzQuY2ZnLmV4dGVuZCh7XG5cdCAgICAgICAgICAgIGRyb3A6IDE5MlxuXHQgICAgICAgIH0pLFxuXG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgUkM0Ll9kb1Jlc2V0LmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gRHJvcFxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5jZmcuZHJvcDsgaSA+IDA7IGktLSkge1xuXHQgICAgICAgICAgICAgICAgZ2VuZXJhdGVLZXlzdHJlYW1Xb3JkLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbnMgdG8gdGhlIGNpcGhlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGNpcGhlcnRleHQgPSBDcnlwdG9KUy5SQzREcm9wLmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuUkM0RHJvcC5kZWNyeXB0KGNpcGhlcnRleHQsIGtleSwgY2ZnKTtcblx0ICAgICAqL1xuXHQgICAgQy5SQzREcm9wID0gU3RyZWFtQ2lwaGVyLl9jcmVhdGVIZWxwZXIoUkM0RHJvcCk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuUkM0O1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKiogQHByZXNlcnZlXG5cdChjKSAyMDEyIGJ5IEPDqWRyaWMgTWVzbmlsLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG5cdFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuXHQgICAgLSBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cdCAgICAtIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuXHRUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cdCovXG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gQ29uc3RhbnRzIHRhYmxlXG5cdCAgICB2YXIgX3psID0gV29yZEFycmF5LmNyZWF0ZShbXG5cdCAgICAgICAgMCwgIDEsICAyLCAgMywgIDQsICA1LCAgNiwgIDcsICA4LCAgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSxcblx0ICAgICAgICA3LCAgNCwgMTMsICAxLCAxMCwgIDYsIDE1LCAgMywgMTIsICAwLCAgOSwgIDUsICAyLCAxNCwgMTEsICA4LFxuXHQgICAgICAgIDMsIDEwLCAxNCwgIDQsICA5LCAxNSwgIDgsICAxLCAgMiwgIDcsICAwLCAgNiwgMTMsIDExLCAgNSwgMTIsXG5cdCAgICAgICAgMSwgIDksIDExLCAxMCwgIDAsICA4LCAxMiwgIDQsIDEzLCAgMywgIDcsIDE1LCAxNCwgIDUsICA2LCAgMixcblx0ICAgICAgICA0LCAgMCwgIDUsICA5LCAgNywgMTIsICAyLCAxMCwgMTQsICAxLCAgMywgIDgsIDExLCAgNiwgMTUsIDEzXSk7XG5cdCAgICB2YXIgX3pyID0gV29yZEFycmF5LmNyZWF0ZShbXG5cdCAgICAgICAgNSwgMTQsICA3LCAgMCwgIDksICAyLCAxMSwgIDQsIDEzLCAgNiwgMTUsICA4LCAgMSwgMTAsICAzLCAxMixcblx0ICAgICAgICA2LCAxMSwgIDMsICA3LCAgMCwgMTMsICA1LCAxMCwgMTQsIDE1LCAgOCwgMTIsICA0LCAgOSwgIDEsICAyLFxuXHQgICAgICAgIDE1LCAgNSwgIDEsICAzLCAgNywgMTQsICA2LCAgOSwgMTEsICA4LCAxMiwgIDIsIDEwLCAgMCwgIDQsIDEzLFxuXHQgICAgICAgIDgsICA2LCAgNCwgIDEsICAzLCAxMSwgMTUsICAwLCAgNSwgMTIsICAyLCAxMywgIDksICA3LCAxMCwgMTQsXG5cdCAgICAgICAgMTIsIDE1LCAxMCwgIDQsICAxLCAgNSwgIDgsICA3LCAgNiwgIDIsIDEzLCAxNCwgIDAsICAzLCAgOSwgMTFdKTtcblx0ICAgIHZhciBfc2wgPSBXb3JkQXJyYXkuY3JlYXRlKFtcblx0ICAgICAgICAgMTEsIDE0LCAxNSwgMTIsICA1LCAgOCwgIDcsICA5LCAxMSwgMTMsIDE0LCAxNSwgIDYsICA3LCAgOSwgIDgsXG5cdCAgICAgICAgNywgNiwgICA4LCAxMywgMTEsICA5LCAgNywgMTUsICA3LCAxMiwgMTUsICA5LCAxMSwgIDcsIDEzLCAxMixcblx0ICAgICAgICAxMSwgMTMsICA2LCAgNywgMTQsICA5LCAxMywgMTUsIDE0LCAgOCwgMTMsICA2LCAgNSwgMTIsICA3LCAgNSxcblx0ICAgICAgICAgIDExLCAxMiwgMTQsIDE1LCAxNCwgMTUsICA5LCAgOCwgIDksIDE0LCAgNSwgIDYsICA4LCAgNiwgIDUsIDEyLFxuXHQgICAgICAgIDksIDE1LCAgNSwgMTEsICA2LCAgOCwgMTMsIDEyLCAgNSwgMTIsIDEzLCAxNCwgMTEsICA4LCAgNSwgIDYgXSk7XG5cdCAgICB2YXIgX3NyID0gV29yZEFycmF5LmNyZWF0ZShbXG5cdCAgICAgICAgOCwgIDksICA5LCAxMSwgMTMsIDE1LCAxNSwgIDUsICA3LCAgNywgIDgsIDExLCAxNCwgMTQsIDEyLCAgNixcblx0ICAgICAgICA5LCAxMywgMTUsICA3LCAxMiwgIDgsICA5LCAxMSwgIDcsICA3LCAxMiwgIDcsICA2LCAxNSwgMTMsIDExLFxuXHQgICAgICAgIDksICA3LCAxNSwgMTEsICA4LCAgNiwgIDYsIDE0LCAxMiwgMTMsICA1LCAxNCwgMTMsIDEzLCAgNywgIDUsXG5cdCAgICAgICAgMTUsICA1LCAgOCwgMTEsIDE0LCAxNCwgIDYsIDE0LCAgNiwgIDksIDEyLCAgOSwgMTIsICA1LCAxNSwgIDgsXG5cdCAgICAgICAgOCwgIDUsIDEyLCAgOSwgMTIsICA1LCAxNCwgIDYsICA4LCAxMywgIDYsICA1LCAxNSwgMTMsIDExLCAxMSBdKTtcblxuXHQgICAgdmFyIF9obCA9ICBXb3JkQXJyYXkuY3JlYXRlKFsgMHgwMDAwMDAwMCwgMHg1QTgyNzk5OSwgMHg2RUQ5RUJBMSwgMHg4RjFCQkNEQywgMHhBOTUzRkQ0RV0pO1xuXHQgICAgdmFyIF9ociA9ICBXb3JkQXJyYXkuY3JlYXRlKFsgMHg1MEEyOEJFNiwgMHg1QzRERDEyNCwgMHg2RDcwM0VGMywgMHg3QTZENzZFOSwgMHgwMDAwMDAwMF0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFJJUEVNRDE2MCBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFJJUEVNRDE2MCA9IENfYWxnby5SSVBFTUQxNjAgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoICA9IFdvcmRBcnJheS5jcmVhdGUoWzB4Njc0NTIzMDEsIDB4RUZDREFCODksIDB4OThCQURDRkUsIDB4MTAzMjU0NzYsIDB4QzNEMkUxRjBdKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cblx0ICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgIHZhciBvZmZzZXRfaSA9IG9mZnNldCArIGk7XG5cdCAgICAgICAgICAgICAgICB2YXIgTV9vZmZzZXRfaSA9IE1bb2Zmc2V0X2ldO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwXG5cdCAgICAgICAgICAgICAgICBNW29mZnNldF9pXSA9IChcblx0ICAgICAgICAgICAgICAgICAgICAoKChNX29mZnNldF9pIDw8IDgpICB8IChNX29mZnNldF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgMjQpIHwgKE1fb2Zmc2V0X2kgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgSCAgPSB0aGlzLl9oYXNoLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgaGwgPSBfaGwud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBociA9IF9oci53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHpsID0gX3psLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgenIgPSBfenIud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzbCA9IF9zbC53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNyID0gX3NyLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhbCwgYmwsIGNsLCBkbCwgZWw7XG5cdCAgICAgICAgICAgIHZhciBhciwgYnIsIGNyLCBkciwgZXI7XG5cblx0ICAgICAgICAgICAgYXIgPSBhbCA9IEhbMF07XG5cdCAgICAgICAgICAgIGJyID0gYmwgPSBIWzFdO1xuXHQgICAgICAgICAgICBjciA9IGNsID0gSFsyXTtcblx0ICAgICAgICAgICAgZHIgPSBkbCA9IEhbM107XG5cdCAgICAgICAgICAgIGVyID0gZWwgPSBIWzRdO1xuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICB2YXIgdDtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4MDsgaSArPSAxKSB7XG5cdCAgICAgICAgICAgICAgICB0ID0gKGFsICsgIE1bb2Zmc2V0K3psW2ldXSl8MDtcblx0ICAgICAgICAgICAgICAgIGlmIChpPDE2KXtcblx0XHQgICAgICAgICAgICB0ICs9ICBmMShibCxjbCxkbCkgKyBobFswXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaTwzMikge1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGYyKGJsLGNsLGRsKSArIGhsWzFdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpPDQ4KSB7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjMoYmwsY2wsZGwpICsgaGxbMl07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8NjQpIHtcblx0XHQgICAgICAgICAgICB0ICs9ICBmNChibCxjbCxkbCkgKyBobFszXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7Ly8gaWYgKGk8ODApIHtcblx0XHQgICAgICAgICAgICB0ICs9ICBmNShibCxjbCxkbCkgKyBobFs0XTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHQgPSB0fDA7XG5cdCAgICAgICAgICAgICAgICB0ID0gIHJvdGwodCxzbFtpXSk7XG5cdCAgICAgICAgICAgICAgICB0ID0gKHQrZWwpfDA7XG5cdCAgICAgICAgICAgICAgICBhbCA9IGVsO1xuXHQgICAgICAgICAgICAgICAgZWwgPSBkbDtcblx0ICAgICAgICAgICAgICAgIGRsID0gcm90bChjbCwgMTApO1xuXHQgICAgICAgICAgICAgICAgY2wgPSBibDtcblx0ICAgICAgICAgICAgICAgIGJsID0gdDtcblxuXHQgICAgICAgICAgICAgICAgdCA9IChhciArIE1bb2Zmc2V0K3pyW2ldXSl8MDtcblx0ICAgICAgICAgICAgICAgIGlmIChpPDE2KXtcblx0XHQgICAgICAgICAgICB0ICs9ICBmNShicixjcixkcikgKyBoclswXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaTwzMikge1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGY0KGJyLGNyLGRyKSArIGhyWzFdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpPDQ4KSB7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjMoYnIsY3IsZHIpICsgaHJbMl07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8NjQpIHtcblx0XHQgICAgICAgICAgICB0ICs9ICBmMihicixjcixkcikgKyBoclszXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7Ly8gaWYgKGk8ODApIHtcblx0XHQgICAgICAgICAgICB0ICs9ICBmMShicixjcixkcikgKyBocls0XTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHQgPSB0fDA7XG5cdCAgICAgICAgICAgICAgICB0ID0gIHJvdGwodCxzcltpXSkgO1xuXHQgICAgICAgICAgICAgICAgdCA9ICh0K2VyKXwwO1xuXHQgICAgICAgICAgICAgICAgYXIgPSBlcjtcblx0ICAgICAgICAgICAgICAgIGVyID0gZHI7XG5cdCAgICAgICAgICAgICAgICBkciA9IHJvdGwoY3IsIDEwKTtcblx0ICAgICAgICAgICAgICAgIGNyID0gYnI7XG5cdCAgICAgICAgICAgICAgICBiciA9IHQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgdCAgICA9IChIWzFdICsgY2wgKyBkcil8MDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzJdICsgZGwgKyBlcil8MDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzNdICsgZWwgKyBhcil8MDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzRdICsgYWwgKyBicil8MDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzBdICsgYmwgKyBjcil8MDtcblx0ICAgICAgICAgICAgSFswXSA9ICB0O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gKFxuXHQgICAgICAgICAgICAgICAgKCgobkJpdHNUb3RhbCA8PCA4KSAgfCAobkJpdHNUb3RhbCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICgoKG5CaXRzVG90YWwgPDwgMjQpIHwgKG5CaXRzVG90YWwgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gKGRhdGFXb3Jkcy5sZW5ndGggKyAxKSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2hhc2g7XG5cdCAgICAgICAgICAgIHZhciBIID0gaGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgICAgIHZhciBIX2kgPSBIW2ldO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwXG5cdCAgICAgICAgICAgICAgICBIW2ldID0gKCgoSF9pIDw8IDgpICB8IChIX2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgICAgKCgoSF9pIDw8IDI0KSB8IChIX2kgPj4+IDgpKSAgJiAweGZmMDBmZjAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cblx0ICAgIGZ1bmN0aW9uIGYxKHgsIHksIHopIHtcblx0ICAgICAgICByZXR1cm4gKCh4KSBeICh5KSBeICh6KSk7XG5cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gZjIoeCwgeSwgeikge1xuXHQgICAgICAgIHJldHVybiAoKCh4KSYoeSkpIHwgKCh+eCkmKHopKSk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGYzKHgsIHksIHopIHtcblx0ICAgICAgICByZXR1cm4gKCgoeCkgfCAofih5KSkpIF4gKHopKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gZjQoeCwgeSwgeikge1xuXHQgICAgICAgIHJldHVybiAoKCh4KSAmICh6KSkgfCAoKHkpJih+KHopKSkpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBmNSh4LCB5LCB6KSB7XG5cdCAgICAgICAgcmV0dXJuICgoeCkgXiAoKHkpIHwofih6KSkpKTtcblxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiByb3RsKHgsbikge1xuXHQgICAgICAgIHJldHVybiAoeDw8bikgfCAoeD4+PigzMi1uKSk7XG5cdCAgICB9XG5cblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlJJUEVNRDE2MCgnbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuUklQRU1EMTYwKHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuUklQRU1EMTYwID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoUklQRU1EMTYwKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNSSVBFTUQxNjAobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjUklQRU1EMTYwID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFJJUEVNRDE2MCk7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlJJUEVNRDE2MDtcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3Rcblx0ICAgIHZhciBXID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTEgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEExID0gQ19hbGdvLlNIQTEgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KFtcblx0ICAgICAgICAgICAgICAgIDB4Njc0NTIzMDEsIDB4ZWZjZGFiODksXG5cdCAgICAgICAgICAgICAgICAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LFxuXHQgICAgICAgICAgICAgICAgMHhjM2QyZTFmMFxuXHQgICAgICAgICAgICBdKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIGMgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XG5cdCAgICAgICAgICAgIHZhciBlID0gSFs0XTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBuID0gV1tpIC0gM10gXiBXW2kgLSA4XSBeIFdbaSAtIDE0XSBeIFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gKG4gPDwgMSkgfCAobiA+Pj4gMzEpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgdCA9ICgoYSA8PCA1KSB8IChhID4+PiAyNykpICsgZSArIFdbaV07XG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDIwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdCArPSAoKGIgJiBjKSB8ICh+YiAmIGQpKSArIDB4NWE4Mjc5OTk7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA0MCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHQgKz0gKGIgXiBjIF4gZCkgKyAweDZlZDllYmExO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNjApIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ICs9ICgoYiAmIGMpIHwgKGIgJiBkKSB8IChjICYgZCkpIC0gMHg3MGU0NDMyNDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSAvKiBpZiAoaSA8IDgwKSAqLyB7XG5cdCAgICAgICAgICAgICAgICAgICAgdCArPSAoYiBeIGMgXiBkKSAtIDB4MzU5ZDNlMmE7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIGUgPSBkO1xuXHQgICAgICAgICAgICAgICAgZCA9IGM7XG5cdCAgICAgICAgICAgICAgICBjID0gKGIgPDwgMzApIHwgKGIgPj4+IDIpO1xuXHQgICAgICAgICAgICAgICAgYiA9IGE7XG5cdCAgICAgICAgICAgICAgICBhID0gdDtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICAgICAgSFs0XSA9IChIWzRdICsgZSkgfCAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEExKCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEExKHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMSA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTEpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTEobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMSA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEExKTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEExO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3NoYTI1NlwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9zaGEyNTZcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXHQgICAgdmFyIFNIQTI1NiA9IENfYWxnby5TSEEyNTY7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTIyNCBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTIyNCA9IENfYWxnby5TSEEyMjQgPSBTSEEyNTYuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KFtcblx0ICAgICAgICAgICAgICAgIDB4YzEwNTllZDgsIDB4MzY3Y2Q1MDcsIDB4MzA3MGRkMTcsIDB4ZjcwZTU5MzksXG5cdCAgICAgICAgICAgICAgICAweGZmYzAwYjMxLCAweDY4NTgxNTExLCAweDY0Zjk4ZmE3LCAweGJlZmE0ZmE0XG5cdCAgICAgICAgICAgIF0pO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IFNIQTI1Ni5fZG9GaW5hbGl6ZS5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIGhhc2guc2lnQnl0ZXMgLT0gNDtcblxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTIyNCgnbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjI0KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMjI0ID0gU0hBMjU2Ll9jcmVhdGVIZWxwZXIoU0hBMjI0KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEyMjQobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMjI0ID0gU0hBMjU2Ll9jcmVhdGVIbWFjSGVscGVyKFNIQTIyNCk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMjI0O1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBJbml0aWFsaXphdGlvbiBhbmQgcm91bmQgY29uc3RhbnRzIHRhYmxlc1xuXHQgICAgdmFyIEggPSBbXTtcblx0ICAgIHZhciBLID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgY29uc3RhbnRzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIGlzUHJpbWUobikge1xuXHQgICAgICAgICAgICB2YXIgc3FydE4gPSBNYXRoLnNxcnQobik7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGZhY3RvciA9IDI7IGZhY3RvciA8PSBzcXJ0TjsgZmFjdG9yKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmICghKG4gJSBmYWN0b3IpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgZnVuY3Rpb24gZ2V0RnJhY3Rpb25hbEJpdHMobikge1xuXHQgICAgICAgICAgICByZXR1cm4gKChuIC0gKG4gfCAwKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHZhciBuID0gMjtcblx0ICAgICAgICB2YXIgblByaW1lID0gMDtcblx0ICAgICAgICB3aGlsZSAoblByaW1lIDwgNjQpIHtcblx0ICAgICAgICAgICAgaWYgKGlzUHJpbWUobikpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChuUHJpbWUgPCA4KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgSFtuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDIpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIEtbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAzKSk7XG5cblx0ICAgICAgICAgICAgICAgIG5QcmltZSsrO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgbisrO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdFxuXHQgICAgdmFyIFcgPSBbXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMjU2IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMjU2ID0gQ19hbGdvLlNIQTI1NiA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoSC5zbGljZSgwKSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgYiA9IEhbMV07XG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xuXHQgICAgICAgICAgICB2YXIgZSA9IEhbNF07XG5cdCAgICAgICAgICAgIHZhciBmID0gSFs1XTtcblx0ICAgICAgICAgICAgdmFyIGcgPSBIWzZdO1xuXHQgICAgICAgICAgICB2YXIgaCA9IEhbN107XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDE2KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IE1bb2Zmc2V0ICsgaV0gfCAwO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweCA9IFdbaSAtIDE1XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEwICA9ICgoZ2FtbWEweCA8PCAyNSkgfCAoZ2FtbWEweCA+Pj4gNykpICBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMHggPDwgMTQpIHwgKGdhbW1hMHggPj4+IDE4KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTB4ID4+PiAzKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTF4ID0gV1tpIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMSAgPSAoKGdhbW1hMXggPDwgMTUpIHwgKGdhbW1hMXggPj4+IDE3KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTF4IDw8IDEzKSB8IChnYW1tYTF4ID4+PiAxOSkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWExeCA+Pj4gMTApO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggID0gKGUgJiBmKSBeICh+ZSAmIGcpO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1haiA9IChhICYgYikgXiAoYSAmIGMpIF4gKGIgJiBjKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMCA9ICgoYSA8PCAzMCkgfCAoYSA+Pj4gMikpIF4gKChhIDw8IDE5KSB8IChhID4+PiAxMykpIF4gKChhIDw8IDEwKSB8IChhID4+PiAyMikpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMSA9ICgoZSA8PCAyNikgfCAoZSA+Pj4gNikpIF4gKChlIDw8IDIxKSB8IChlID4+PiAxMSkpIF4gKChlIDw8IDcpICB8IChlID4+PiAyNSkpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdDEgPSBoICsgc2lnbWExICsgY2ggKyBLW2ldICsgV1tpXTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MiA9IHNpZ21hMCArIG1hajtcblxuXHQgICAgICAgICAgICAgICAgaCA9IGc7XG5cdCAgICAgICAgICAgICAgICBnID0gZjtcblx0ICAgICAgICAgICAgICAgIGYgPSBlO1xuXHQgICAgICAgICAgICAgICAgZSA9IChkICsgdDEpIHwgMDtcblx0ICAgICAgICAgICAgICAgIGQgPSBjO1xuXHQgICAgICAgICAgICAgICAgYyA9IGI7XG5cdCAgICAgICAgICAgICAgICBiID0gYTtcblx0ICAgICAgICAgICAgICAgIGEgPSAodDEgKyB0MikgfCAwO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuXHQgICAgICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNV0gPSAoSFs1XSArIGYpIHwgMDtcblx0ICAgICAgICAgICAgSFs2XSA9IChIWzZdICsgZykgfCAwO1xuXHQgICAgICAgICAgICBIWzddID0gKEhbN10gKyBoKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1NignbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMjU2KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEyNTYobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTI1Nik7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTI1NjtcblxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi94NjQtY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi94NjQtY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfeDY0ID0gQy54NjQ7XG5cdCAgICB2YXIgWDY0V29yZCA9IENfeDY0LldvcmQ7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBDb25zdGFudHMgdGFibGVzXG5cdCAgICB2YXIgUkhPX09GRlNFVFMgPSBbXTtcblx0ICAgIHZhciBQSV9JTkRFWEVTICA9IFtdO1xuXHQgICAgdmFyIFJPVU5EX0NPTlNUQU5UUyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIENvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBDb21wdXRlIHJobyBvZmZzZXQgY29uc3RhbnRzXG5cdCAgICAgICAgdmFyIHggPSAxLCB5ID0gMDtcblx0ICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDI0OyB0KyspIHtcblx0ICAgICAgICAgICAgUkhPX09GRlNFVFNbeCArIDUgKiB5XSA9ICgodCArIDEpICogKHQgKyAyKSAvIDIpICUgNjQ7XG5cblx0ICAgICAgICAgICAgdmFyIG5ld1ggPSB5ICUgNTtcblx0ICAgICAgICAgICAgdmFyIG5ld1kgPSAoMiAqIHggKyAzICogeSkgJSA1O1xuXHQgICAgICAgICAgICB4ID0gbmV3WDtcblx0ICAgICAgICAgICAgeSA9IG5ld1k7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ29tcHV0ZSBwaSBpbmRleCBjb25zdGFudHNcblx0ICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDU7IHgrKykge1xuXHQgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IDU7IHkrKykge1xuXHQgICAgICAgICAgICAgICAgUElfSU5ERVhFU1t4ICsgNSAqIHldID0geSArICgoMiAqIHggKyAzICogeSkgJSA1KSAqIDU7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBDb21wdXRlIHJvdW5kIGNvbnN0YW50c1xuXHQgICAgICAgIHZhciBMRlNSID0gMHgwMTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI0OyBpKyspIHtcblx0ICAgICAgICAgICAgdmFyIHJvdW5kQ29uc3RhbnRNc3cgPSAwO1xuXHQgICAgICAgICAgICB2YXIgcm91bmRDb25zdGFudExzdyA9IDA7XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChMRlNSICYgMHgwMSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBiaXRQb3NpdGlvbiA9ICgxIDw8IGopIC0gMTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoYml0UG9zaXRpb24gPCAzMikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByb3VuZENvbnN0YW50THN3IF49IDEgPDwgYml0UG9zaXRpb247XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIC8qIGlmIChiaXRQb3NpdGlvbiA+PSAzMikgKi8ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByb3VuZENvbnN0YW50TXN3IF49IDEgPDwgKGJpdFBvc2l0aW9uIC0gMzIpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSBuZXh0IExGU1Jcblx0ICAgICAgICAgICAgICAgIGlmIChMRlNSICYgMHg4MCkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFByaW1pdGl2ZSBwb2x5bm9taWFsIG92ZXIgR0YoMik6IHheOCArIHheNiArIHheNSArIHheNCArIDFcblx0ICAgICAgICAgICAgICAgICAgICBMRlNSID0gKExGU1IgPDwgMSkgXiAweDcxO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBMRlNSIDw8PSAxO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgUk9VTkRfQ09OU1RBTlRTW2ldID0gWDY0V29yZC5jcmVhdGUocm91bmRDb25zdGFudE1zdywgcm91bmRDb25zdGFudExzdyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0cyBmb3IgdGVtcG9yYXJ5IHZhbHVlc1xuXHQgICAgdmFyIFQgPSBbXTtcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG5cdCAgICAgICAgICAgIFRbaV0gPSBYNjRXb3JkLmNyZWF0ZSgpO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTMgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEEzID0gQ19hbGdvLlNIQTMgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gb3V0cHV0TGVuZ3RoXG5cdCAgICAgICAgICogICBUaGUgZGVzaXJlZCBudW1iZXIgb2YgYml0cyBpbiB0aGUgb3V0cHV0IGhhc2guXG5cdCAgICAgICAgICogICBPbmx5IHZhbHVlcyBwZXJtaXR0ZWQgYXJlOiAyMjQsIDI1NiwgMzg0LCA1MTIuXG5cdCAgICAgICAgICogICBEZWZhdWx0OiA1MTJcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEhhc2hlci5jZmcuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgb3V0cHV0TGVuZ3RoOiA1MTJcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX3N0YXRlID0gW11cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBzdGF0ZVtpXSA9IG5ldyBYNjRXb3JkLmluaXQoKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHRoaXMuYmxvY2tTaXplID0gKDE2MDAgLSAyICogdGhpcy5jZmcub3V0cHV0TGVuZ3RoKSAvIDMyO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuXHQgICAgICAgICAgICB2YXIgbkJsb2NrU2l6ZUxhbmVzID0gdGhpcy5ibG9ja1NpemUgLyAyO1xuXG5cdCAgICAgICAgICAgIC8vIEFic29yYlxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5CbG9ja1NpemVMYW5lczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgIHZhciBNMmkgID0gTVtvZmZzZXQgKyAyICogaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgTTJpMSA9IE1bb2Zmc2V0ICsgMiAqIGkgKyAxXTtcblxuXHQgICAgICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgICAgIE0yaSA9IChcblx0ICAgICAgICAgICAgICAgICAgICAoKChNMmkgPDwgOCkgIHwgKE0yaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAoKChNMmkgPDwgMjQpIHwgKE0yaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICAgICAgTTJpMSA9IChcblx0ICAgICAgICAgICAgICAgICAgICAoKChNMmkxIDw8IDgpICB8IChNMmkxID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE0yaTEgPDwgMjQpIHwgKE0yaTEgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICAgICAgKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQWJzb3JiIG1lc3NhZ2UgaW50byBzdGF0ZVxuXHQgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVtpXTtcblx0ICAgICAgICAgICAgICAgIGxhbmUuaGlnaCBePSBNMmkxO1xuXHQgICAgICAgICAgICAgICAgbGFuZS5sb3cgIF49IE0yaTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJvdW5kc1xuXHQgICAgICAgICAgICBmb3IgKHZhciByb3VuZCA9IDA7IHJvdW5kIDwgMjQ7IHJvdW5kKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFRoZXRhXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDU7IHgrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIE1peCBjb2x1bW4gbGFuZXNcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdE1zdyA9IDAsIHRMc3cgPSAwO1xuXHQgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgNTsgeSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lID0gc3RhdGVbeCArIDUgKiB5XTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdE1zdyBePSBsYW5lLmhpZ2g7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRMc3cgXj0gbGFuZS5sb3c7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gVGVtcG9yYXJ5IHZhbHVlc1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUeCA9IFRbeF07XG5cdCAgICAgICAgICAgICAgICAgICAgVHguaGlnaCA9IHRNc3c7XG5cdCAgICAgICAgICAgICAgICAgICAgVHgubG93ICA9IHRMc3c7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDU7IHgrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUeDQgPSBUWyh4ICsgNCkgJSA1XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgVHgxID0gVFsoeCArIDEpICUgNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFR4MU1zdyA9IFR4MS5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUeDFMc3cgPSBUeDEubG93O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gTWl4IHN1cnJvdW5kaW5nIGNvbHVtbnNcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdE1zdyA9IFR4NC5oaWdoIF4gKChUeDFNc3cgPDwgMSkgfCAoVHgxTHN3ID4+PiAzMSkpO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0THN3ID0gVHg0LmxvdyAgXiAoKFR4MUxzdyA8PCAxKSB8IChUeDFNc3cgPj4+IDMxKSk7XG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCA1OyB5KyspIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVt4ICsgNSAqIHldO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYW5lLmhpZ2ggXj0gdE1zdztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFuZS5sb3cgIF49IHRMc3c7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSaG8gUGlcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGxhbmVJbmRleCA9IDE7IGxhbmVJbmRleCA8IDI1OyBsYW5lSW5kZXgrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0TXN3O1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0THN3O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVtsYW5lSW5kZXhdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lTXN3ID0gbGFuZS5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lTHN3ID0gbGFuZS5sb3c7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJob09mZnNldCA9IFJIT19PRkZTRVRTW2xhbmVJbmRleF07XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBSb3RhdGUgbGFuZXNcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocmhvT2Zmc2V0IDwgMzIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdE1zdyA9IChsYW5lTXN3IDw8IHJob09mZnNldCkgfCAobGFuZUxzdyA+Pj4gKDMyIC0gcmhvT2Zmc2V0KSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRMc3cgPSAobGFuZUxzdyA8PCByaG9PZmZzZXQpIHwgKGxhbmVNc3cgPj4+ICgzMiAtIHJob09mZnNldCkpO1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSAvKiBpZiAocmhvT2Zmc2V0ID49IDMyKSAqLyB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRNc3cgPSAobGFuZUxzdyA8PCAocmhvT2Zmc2V0IC0gMzIpKSB8IChsYW5lTXN3ID4+PiAoNjQgLSByaG9PZmZzZXQpKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdExzdyA9IChsYW5lTXN3IDw8IChyaG9PZmZzZXQgLSAzMikpIHwgKGxhbmVMc3cgPj4+ICg2NCAtIHJob09mZnNldCkpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFRyYW5zcG9zZSBsYW5lc1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUUGlMYW5lID0gVFtQSV9JTkRFWEVTW2xhbmVJbmRleF1dO1xuXHQgICAgICAgICAgICAgICAgICAgIFRQaUxhbmUuaGlnaCA9IHRNc3c7XG5cdCAgICAgICAgICAgICAgICAgICAgVFBpTGFuZS5sb3cgID0gdExzdztcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmhvIHBpIGF0IHggPSB5ID0gMFxuXHQgICAgICAgICAgICAgICAgdmFyIFQwID0gVFswXTtcblx0ICAgICAgICAgICAgICAgIHZhciBzdGF0ZTAgPSBzdGF0ZVswXTtcblx0ICAgICAgICAgICAgICAgIFQwLmhpZ2ggPSBzdGF0ZTAuaGlnaDtcblx0ICAgICAgICAgICAgICAgIFQwLmxvdyAgPSBzdGF0ZTAubG93O1xuXG5cdCAgICAgICAgICAgICAgICAvLyBDaGlcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNTsgeCsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCA1OyB5KyspIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lSW5kZXggPSB4ICsgNSAqIHk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lID0gc3RhdGVbbGFuZUluZGV4XTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFRMYW5lID0gVFtsYW5lSW5kZXhdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVHgxTGFuZSA9IFRbKCh4ICsgMSkgJSA1KSArIDUgKiB5XTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFR4MkxhbmUgPSBUWygoeCArIDIpICUgNSkgKyA1ICogeV07XG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWl4IHJvd3Ncblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFuZS5oaWdoID0gVExhbmUuaGlnaCBeICh+VHgxTGFuZS5oaWdoICYgVHgyTGFuZS5oaWdoKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFuZS5sb3cgID0gVExhbmUubG93ICBeICh+VHgxTGFuZS5sb3cgICYgVHgyTGFuZS5sb3cpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW90YVxuXHQgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVswXTtcblx0ICAgICAgICAgICAgICAgIHZhciByb3VuZENvbnN0YW50ID0gUk9VTkRfQ09OU1RBTlRTW3JvdW5kXTtcblx0ICAgICAgICAgICAgICAgIGxhbmUuaGlnaCBePSByb3VuZENvbnN0YW50LmhpZ2g7XG5cdCAgICAgICAgICAgICAgICBsYW5lLmxvdyAgXj0gcm91bmRDb25zdGFudC5sb3c7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJpdHMgPSB0aGlzLmJsb2NrU2l6ZSAqIDMyO1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4MSA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKE1hdGguY2VpbCgobkJpdHNMZWZ0ICsgMSkgLyBibG9ja1NpemVCaXRzKSAqIGJsb2NrU2l6ZUJpdHMpID4+PiA1KSAtIDFdIHw9IDB4ODA7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuXHQgICAgICAgICAgICB2YXIgb3V0cHV0TGVuZ3RoQnl0ZXMgPSB0aGlzLmNmZy5vdXRwdXRMZW5ndGggLyA4O1xuXHQgICAgICAgICAgICB2YXIgb3V0cHV0TGVuZ3RoTGFuZXMgPSBvdXRwdXRMZW5ndGhCeXRlcyAvIDg7XG5cblx0ICAgICAgICAgICAgLy8gU3F1ZWV6ZVxuXHQgICAgICAgICAgICB2YXIgaGFzaFdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3V0cHV0TGVuZ3RoTGFuZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgbGFuZSA9IHN0YXRlW2ldO1xuXHQgICAgICAgICAgICAgICAgdmFyIGxhbmVNc3cgPSBsYW5lLmhpZ2g7XG5cdCAgICAgICAgICAgICAgICB2YXIgbGFuZUxzdyA9IGxhbmUubG93O1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICAgICAgbGFuZU1zdyA9IChcblx0ICAgICAgICAgICAgICAgICAgICAoKChsYW5lTXN3IDw8IDgpICB8IChsYW5lTXN3ID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICgoKGxhbmVNc3cgPDwgMjQpIHwgKGxhbmVNc3cgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgICAgIGxhbmVMc3cgPSAoXG5cdCAgICAgICAgICAgICAgICAgICAgKCgobGFuZUxzdyA8PCA4KSAgfCAobGFuZUxzdyA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAoKChsYW5lTHN3IDw8IDI0KSB8IChsYW5lTHN3ID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgICAgICk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFNxdWVlemUgc3RhdGUgdG8gcmV0cmlldmUgaGFzaFxuXHQgICAgICAgICAgICAgICAgaGFzaFdvcmRzLnB1c2gobGFuZUxzdyk7XG5cdCAgICAgICAgICAgICAgICBoYXNoV29yZHMucHVzaChsYW5lTXN3KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQoaGFzaFdvcmRzLCBvdXRwdXRMZW5ndGhCeXRlcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IGNsb25lLl9zdGF0ZSA9IHRoaXMuX3N0YXRlLnNsaWNlKDApO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHN0YXRlW2ldID0gc3RhdGVbaV0uY2xvbmUoKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTMoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTMod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEzID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMyk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMyhtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEzID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTMpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEzO1xuXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3g2NC1jb3JlXCIpLCByZXF1aXJlKFwiLi9zaGE1MTJcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4veDY0LWNvcmVcIiwgXCIuL3NoYTUxMlwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX3g2NCA9IEMueDY0O1xuXHQgICAgdmFyIFg2NFdvcmQgPSBDX3g2NC5Xb3JkO1xuXHQgICAgdmFyIFg2NFdvcmRBcnJheSA9IENfeDY0LldvcmRBcnJheTtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cdCAgICB2YXIgU0hBNTEyID0gQ19hbGdvLlNIQTUxMjtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMzg0IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMzg0ID0gQ19hbGdvLlNIQTM4NCA9IFNIQTUxMi5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgWDY0V29yZEFycmF5LmluaXQoW1xuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweGNiYmI5ZDVkLCAweGMxMDU5ZWQ4KSwgbmV3IFg2NFdvcmQuaW5pdCgweDYyOWEyOTJhLCAweDM2N2NkNTA3KSxcblx0ICAgICAgICAgICAgICAgIG5ldyBYNjRXb3JkLmluaXQoMHg5MTU5MDE1YSwgMHgzMDcwZGQxNyksIG5ldyBYNjRXb3JkLmluaXQoMHgxNTJmZWNkOCwgMHhmNzBlNTkzOSksXG5cdCAgICAgICAgICAgICAgICBuZXcgWDY0V29yZC5pbml0KDB4NjczMzI2NjcsIDB4ZmZjMDBiMzEpLCBuZXcgWDY0V29yZC5pbml0KDB4OGViNDRhODcsIDB4Njg1ODE1MTEpLFxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweGRiMGMyZTBkLCAweDY0Zjk4ZmE3KSwgbmV3IFg2NFdvcmQuaW5pdCgweDQ3YjU0ODFkLCAweGJlZmE0ZmE0KVxuXHQgICAgICAgICAgICBdKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSBTSEE1MTIuX2RvRmluYWxpemUuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICBoYXNoLnNpZ0J5dGVzIC09IDE2O1xuXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMzg0KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEzODQod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEzODQgPSBTSEE1MTIuX2NyZWF0ZUhlbHBlcihTSEEzODQpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTM4NChtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEzODQgPSBTSEE1MTIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMzg0KTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEzODQ7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4veDY0LWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4veDY0LWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ194NjQgPSBDLng2NDtcblx0ICAgIHZhciBYNjRXb3JkID0gQ194NjQuV29yZDtcblx0ICAgIHZhciBYNjRXb3JkQXJyYXkgPSBDX3g2NC5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICBmdW5jdGlvbiBYNjRXb3JkX2NyZWF0ZSgpIHtcblx0ICAgICAgICByZXR1cm4gWDY0V29yZC5jcmVhdGUuYXBwbHkoWDY0V29yZCwgYXJndW1lbnRzKTtcblx0ICAgIH1cblxuXHQgICAgLy8gQ29uc3RhbnRzXG5cdCAgICB2YXIgSyA9IFtcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDQyOGEyZjk4LCAweGQ3MjhhZTIyKSwgWDY0V29yZF9jcmVhdGUoMHg3MTM3NDQ5MSwgMHgyM2VmNjVjZCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhiNWMwZmJjZiwgMHhlYzRkM2IyZiksIFg2NFdvcmRfY3JlYXRlKDB4ZTliNWRiYTUsIDB4ODE4OWRiYmMpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4Mzk1NmMyNWIsIDB4ZjM0OGI1MzgpLCBYNjRXb3JkX2NyZWF0ZSgweDU5ZjExMWYxLCAweGI2MDVkMDE5KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDkyM2Y4MmE0LCAweGFmMTk0ZjliKSwgWDY0V29yZF9jcmVhdGUoMHhhYjFjNWVkNSwgMHhkYTZkODExOCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhkODA3YWE5OCwgMHhhMzAzMDI0MiksIFg2NFdvcmRfY3JlYXRlKDB4MTI4MzViMDEsIDB4NDU3MDZmYmUpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4MjQzMTg1YmUsIDB4NGVlNGIyOGMpLCBYNjRXb3JkX2NyZWF0ZSgweDU1MGM3ZGMzLCAweGQ1ZmZiNGUyKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDcyYmU1ZDc0LCAweGYyN2I4OTZmKSwgWDY0V29yZF9jcmVhdGUoMHg4MGRlYjFmZSwgMHgzYjE2OTZiMSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg5YmRjMDZhNywgMHgyNWM3MTIzNSksIFg2NFdvcmRfY3JlYXRlKDB4YzE5YmYxNzQsIDB4Y2Y2OTI2OTQpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4ZTQ5YjY5YzEsIDB4OWVmMTRhZDIpLCBYNjRXb3JkX2NyZWF0ZSgweGVmYmU0Nzg2LCAweDM4NGYyNWUzKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDBmYzE5ZGM2LCAweDhiOGNkNWI1KSwgWDY0V29yZF9jcmVhdGUoMHgyNDBjYTFjYywgMHg3N2FjOWM2NSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgyZGU5MmM2ZiwgMHg1OTJiMDI3NSksIFg2NFdvcmRfY3JlYXRlKDB4NGE3NDg0YWEsIDB4NmVhNmU0ODMpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4NWNiMGE5ZGMsIDB4YmQ0MWZiZDQpLCBYNjRXb3JkX2NyZWF0ZSgweDc2Zjk4OGRhLCAweDgzMTE1M2I1KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDk4M2U1MTUyLCAweGVlNjZkZmFiKSwgWDY0V29yZF9jcmVhdGUoMHhhODMxYzY2ZCwgMHgyZGI0MzIxMCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhiMDAzMjdjOCwgMHg5OGZiMjEzZiksIFg2NFdvcmRfY3JlYXRlKDB4YmY1OTdmYzcsIDB4YmVlZjBlZTQpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4YzZlMDBiZjMsIDB4M2RhODhmYzIpLCBYNjRXb3JkX2NyZWF0ZSgweGQ1YTc5MTQ3LCAweDkzMGFhNzI1KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDA2Y2E2MzUxLCAweGUwMDM4MjZmKSwgWDY0V29yZF9jcmVhdGUoMHgxNDI5Mjk2NywgMHgwYTBlNmU3MCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgyN2I3MGE4NSwgMHg0NmQyMmZmYyksIFg2NFdvcmRfY3JlYXRlKDB4MmUxYjIxMzgsIDB4NWMyNmM5MjYpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4NGQyYzZkZmMsIDB4NWFjNDJhZWQpLCBYNjRXb3JkX2NyZWF0ZSgweDUzMzgwZDEzLCAweDlkOTViM2RmKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDY1MGE3MzU0LCAweDhiYWY2M2RlKSwgWDY0V29yZF9jcmVhdGUoMHg3NjZhMGFiYiwgMHgzYzc3YjJhOCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg4MWMyYzkyZSwgMHg0N2VkYWVlNiksIFg2NFdvcmRfY3JlYXRlKDB4OTI3MjJjODUsIDB4MTQ4MjM1M2IpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4YTJiZmU4YTEsIDB4NGNmMTAzNjQpLCBYNjRXb3JkX2NyZWF0ZSgweGE4MWE2NjRiLCAweGJjNDIzMDAxKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGMyNGI4YjcwLCAweGQwZjg5NzkxKSwgWDY0V29yZF9jcmVhdGUoMHhjNzZjNTFhMywgMHgwNjU0YmUzMCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhkMTkyZTgxOSwgMHhkNmVmNTIxOCksIFg2NFdvcmRfY3JlYXRlKDB4ZDY5OTA2MjQsIDB4NTU2NWE5MTApLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4ZjQwZTM1ODUsIDB4NTc3MTIwMmEpLCBYNjRXb3JkX2NyZWF0ZSgweDEwNmFhMDcwLCAweDMyYmJkMWI4KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDE5YTRjMTE2LCAweGI4ZDJkMGM4KSwgWDY0V29yZF9jcmVhdGUoMHgxZTM3NmMwOCwgMHg1MTQxYWI1MyksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgyNzQ4Nzc0YywgMHhkZjhlZWI5OSksIFg2NFdvcmRfY3JlYXRlKDB4MzRiMGJjYjUsIDB4ZTE5YjQ4YTgpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4MzkxYzBjYjMsIDB4YzVjOTVhNjMpLCBYNjRXb3JkX2NyZWF0ZSgweDRlZDhhYTRhLCAweGUzNDE4YWNiKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDViOWNjYTRmLCAweDc3NjNlMzczKSwgWDY0V29yZF9jcmVhdGUoMHg2ODJlNmZmMywgMHhkNmIyYjhhMyksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg3NDhmODJlZSwgMHg1ZGVmYjJmYyksIFg2NFdvcmRfY3JlYXRlKDB4NzhhNTYzNmYsIDB4NDMxNzJmNjApLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4ODRjODc4MTQsIDB4YTFmMGFiNzIpLCBYNjRXb3JkX2NyZWF0ZSgweDhjYzcwMjA4LCAweDFhNjQzOWVjKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDkwYmVmZmZhLCAweDIzNjMxZTI4KSwgWDY0V29yZF9jcmVhdGUoMHhhNDUwNmNlYiwgMHhkZTgyYmRlOSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhiZWY5YTNmNywgMHhiMmM2NzkxNSksIFg2NFdvcmRfY3JlYXRlKDB4YzY3MTc4ZjIsIDB4ZTM3MjUzMmIpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4Y2EyNzNlY2UsIDB4ZWEyNjYxOWMpLCBYNjRXb3JkX2NyZWF0ZSgweGQxODZiOGM3LCAweDIxYzBjMjA3KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGVhZGE3ZGQ2LCAweGNkZTBlYjFlKSwgWDY0V29yZF9jcmVhdGUoMHhmNTdkNGY3ZiwgMHhlZTZlZDE3OCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgwNmYwNjdhYSwgMHg3MjE3NmZiYSksIFg2NFdvcmRfY3JlYXRlKDB4MGE2MzdkYzUsIDB4YTJjODk4YTYpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4MTEzZjk4MDQsIDB4YmVmOTBkYWUpLCBYNjRXb3JkX2NyZWF0ZSgweDFiNzEwYjM1LCAweDEzMWM0NzFiKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDI4ZGI3N2Y1LCAweDIzMDQ3ZDg0KSwgWDY0V29yZF9jcmVhdGUoMHgzMmNhYWI3YiwgMHg0MGM3MjQ5MyksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgzYzllYmUwYSwgMHgxNWM5YmViYyksIFg2NFdvcmRfY3JlYXRlKDB4NDMxZDY3YzQsIDB4OWMxMDBkNGMpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4NGNjNWQ0YmUsIDB4Y2IzZTQyYjYpLCBYNjRXb3JkX2NyZWF0ZSgweDU5N2YyOTljLCAweGZjNjU3ZTJhKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDVmY2I2ZmFiLCAweDNhZDZmYWVjKSwgWDY0V29yZF9jcmVhdGUoMHg2YzQ0MTk4YywgMHg0YTQ3NTgxNylcblx0ICAgIF07XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdHNcblx0ICAgIHZhciBXID0gW107XG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkrKykge1xuXHQgICAgICAgICAgICBXW2ldID0gWDY0V29yZF9jcmVhdGUoKTtcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS01MTIgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEE1MTIgPSBDX2FsZ28uU0hBNTEyID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBYNjRXb3JkQXJyYXkuaW5pdChbXG5cdCAgICAgICAgICAgICAgICBuZXcgWDY0V29yZC5pbml0KDB4NmEwOWU2NjcsIDB4ZjNiY2M5MDgpLCBuZXcgWDY0V29yZC5pbml0KDB4YmI2N2FlODUsIDB4ODRjYWE3M2IpLFxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDNjNmVmMzcyLCAweGZlOTRmODJiKSwgbmV3IFg2NFdvcmQuaW5pdCgweGE1NGZmNTNhLCAweDVmMWQzNmYxKSxcblx0ICAgICAgICAgICAgICAgIG5ldyBYNjRXb3JkLmluaXQoMHg1MTBlNTI3ZiwgMHhhZGU2ODJkMSksIG5ldyBYNjRXb3JkLmluaXQoMHg5YjA1Njg4YywgMHgyYjNlNmMxZiksXG5cdCAgICAgICAgICAgICAgICBuZXcgWDY0V29yZC5pbml0KDB4MWY4M2Q5YWIsIDB4ZmI0MWJkNmIpLCBuZXcgWDY0V29yZC5pbml0KDB4NWJlMGNkMTksIDB4MTM3ZTIxNzkpXG5cdCAgICAgICAgICAgIF0pO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgSDAgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgSDEgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgSDIgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgSDMgPSBIWzNdO1xuXHQgICAgICAgICAgICB2YXIgSDQgPSBIWzRdO1xuXHQgICAgICAgICAgICB2YXIgSDUgPSBIWzVdO1xuXHQgICAgICAgICAgICB2YXIgSDYgPSBIWzZdO1xuXHQgICAgICAgICAgICB2YXIgSDcgPSBIWzddO1xuXG5cdCAgICAgICAgICAgIHZhciBIMGggPSBIMC5oaWdoO1xuXHQgICAgICAgICAgICB2YXIgSDBsID0gSDAubG93O1xuXHQgICAgICAgICAgICB2YXIgSDFoID0gSDEuaGlnaDtcblx0ICAgICAgICAgICAgdmFyIEgxbCA9IEgxLmxvdztcblx0ICAgICAgICAgICAgdmFyIEgyaCA9IEgyLmhpZ2g7XG5cdCAgICAgICAgICAgIHZhciBIMmwgPSBIMi5sb3c7XG5cdCAgICAgICAgICAgIHZhciBIM2ggPSBIMy5oaWdoO1xuXHQgICAgICAgICAgICB2YXIgSDNsID0gSDMubG93O1xuXHQgICAgICAgICAgICB2YXIgSDRoID0gSDQuaGlnaDtcblx0ICAgICAgICAgICAgdmFyIEg0bCA9IEg0Lmxvdztcblx0ICAgICAgICAgICAgdmFyIEg1aCA9IEg1LmhpZ2g7XG5cdCAgICAgICAgICAgIHZhciBINWwgPSBINS5sb3c7XG5cdCAgICAgICAgICAgIHZhciBINmggPSBINi5oaWdoO1xuXHQgICAgICAgICAgICB2YXIgSDZsID0gSDYubG93O1xuXHQgICAgICAgICAgICB2YXIgSDdoID0gSDcuaGlnaDtcblx0ICAgICAgICAgICAgdmFyIEg3bCA9IEg3LmxvdztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYWggPSBIMGg7XG5cdCAgICAgICAgICAgIHZhciBhbCA9IEgwbDtcblx0ICAgICAgICAgICAgdmFyIGJoID0gSDFoO1xuXHQgICAgICAgICAgICB2YXIgYmwgPSBIMWw7XG5cdCAgICAgICAgICAgIHZhciBjaCA9IEgyaDtcblx0ICAgICAgICAgICAgdmFyIGNsID0gSDJsO1xuXHQgICAgICAgICAgICB2YXIgZGggPSBIM2g7XG5cdCAgICAgICAgICAgIHZhciBkbCA9IEgzbDtcblx0ICAgICAgICAgICAgdmFyIGVoID0gSDRoO1xuXHQgICAgICAgICAgICB2YXIgZWwgPSBINGw7XG5cdCAgICAgICAgICAgIHZhciBmaCA9IEg1aDtcblx0ICAgICAgICAgICAgdmFyIGZsID0gSDVsO1xuXHQgICAgICAgICAgICB2YXIgZ2ggPSBINmg7XG5cdCAgICAgICAgICAgIHZhciBnbCA9IEg2bDtcblx0ICAgICAgICAgICAgdmFyIGhoID0gSDdoO1xuXHQgICAgICAgICAgICB2YXIgaGwgPSBIN2w7XG5cblx0ICAgICAgICAgICAgLy8gUm91bmRzXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIFdpbDtcblx0ICAgICAgICAgICAgICAgIHZhciBXaWg7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgICAgICB2YXIgV2kgPSBXW2ldO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBFeHRlbmQgbWVzc2FnZVxuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdpaCA9IFdpLmhpZ2ggPSBNW29mZnNldCArIGkgKiAyXSAgICAgfCAwO1xuXHQgICAgICAgICAgICAgICAgICAgIFdpbCA9IFdpLmxvdyAgPSBNW29mZnNldCArIGkgKiAyICsgMV0gfCAwO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBHYW1tYTBcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweCAgPSBXW2kgLSAxNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHhoID0gZ2FtbWEweC5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4bCA9IGdhbW1hMHgubG93O1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTBoICA9ICgoZ2FtbWEweGggPj4+IDEpIHwgKGdhbW1hMHhsIDw8IDMxKSkgXiAoKGdhbW1hMHhoID4+PiA4KSB8IChnYW1tYTB4bCA8PCAyNCkpIF4gKGdhbW1hMHhoID4+PiA3KTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEwbCAgPSAoKGdhbW1hMHhsID4+PiAxKSB8IChnYW1tYTB4aCA8PCAzMSkpIF4gKChnYW1tYTB4bCA+Pj4gOCkgfCAoZ2FtbWEweGggPDwgMjQpKSBeICgoZ2FtbWEweGwgPj4+IDcpIHwgKGdhbW1hMHhoIDw8IDI1KSk7XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBHYW1tYTFcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCAgPSBXW2kgLSAyXTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeGggPSBnYW1tYTF4LmhpZ2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXhsID0gZ2FtbWExeC5sb3c7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMWggID0gKChnYW1tYTF4aCA+Pj4gMTkpIHwgKGdhbW1hMXhsIDw8IDEzKSkgXiAoKGdhbW1hMXhoIDw8IDMpIHwgKGdhbW1hMXhsID4+PiAyOSkpIF4gKGdhbW1hMXhoID4+PiA2KTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExbCAgPSAoKGdhbW1hMXhsID4+PiAxOSkgfCAoZ2FtbWExeGggPDwgMTMpKSBeICgoZ2FtbWExeGwgPDwgMykgfCAoZ2FtbWExeGggPj4+IDI5KSkgXiAoKGdhbW1hMXhsID4+PiA2KSB8IChnYW1tYTF4aCA8PCAyNikpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpNyAgPSBXW2kgLSA3XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2k3aCA9IFdpNy5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBXaTdsID0gV2k3LmxvdztcblxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBXaTE2ICA9IFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2kxNmggPSBXaTE2LmhpZ2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpMTZsID0gV2kxNi5sb3c7XG5cblx0ICAgICAgICAgICAgICAgICAgICBXaWwgPSBnYW1tYTBsICsgV2k3bDtcblx0ICAgICAgICAgICAgICAgICAgICBXaWggPSBnYW1tYTBoICsgV2k3aCArICgoV2lsID4+PiAwKSA8IChnYW1tYTBsID4+PiAwKSA/IDEgOiAwKTtcblx0ICAgICAgICAgICAgICAgICAgICBXaWwgPSBXaWwgKyBnYW1tYTFsO1xuXHQgICAgICAgICAgICAgICAgICAgIFdpaCA9IFdpaCArIGdhbW1hMWggKyAoKFdpbCA+Pj4gMCkgPCAoZ2FtbWExbCA+Pj4gMCkgPyAxIDogMCk7XG5cdCAgICAgICAgICAgICAgICAgICAgV2lsID0gV2lsICsgV2kxNmw7XG5cdCAgICAgICAgICAgICAgICAgICAgV2loID0gV2loICsgV2kxNmggKyAoKFdpbCA+Pj4gMCkgPCAoV2kxNmwgPj4+IDApID8gMSA6IDApO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgV2kuaGlnaCA9IFdpaDtcblx0ICAgICAgICAgICAgICAgICAgICBXaS5sb3cgID0gV2lsO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgY2hoICA9IChlaCAmIGZoKSBeICh+ZWggJiBnaCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgY2hsICA9IChlbCAmIGZsKSBeICh+ZWwgJiBnbCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqaCA9IChhaCAmIGJoKSBeIChhaCAmIGNoKSBeIChiaCAmIGNoKTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYWpsID0gKGFsICYgYmwpIF4gKGFsICYgY2wpIF4gKGJsICYgY2wpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwaCA9ICgoYWggPj4+IDI4KSB8IChhbCA8PCA0KSkgIF4gKChhaCA8PCAzMCkgIHwgKGFsID4+PiAyKSkgXiAoKGFoIDw8IDI1KSB8IChhbCA+Pj4gNykpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMGwgPSAoKGFsID4+PiAyOCkgfCAoYWggPDwgNCkpICBeICgoYWwgPDwgMzApICB8IChhaCA+Pj4gMikpIF4gKChhbCA8PCAyNSkgfCAoYWggPj4+IDcpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTFoID0gKChlaCA+Pj4gMTQpIHwgKGVsIDw8IDE4KSkgXiAoKGVoID4+PiAxOCkgfCAoZWwgPDwgMTQpKSBeICgoZWggPDwgMjMpIHwgKGVsID4+PiA5KSk7XG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExbCA9ICgoZWwgPj4+IDE0KSB8IChlaCA8PCAxOCkpIF4gKChlbCA+Pj4gMTgpIHwgKGVoIDw8IDE0KSkgXiAoKGVsIDw8IDIzKSB8IChlaCA+Pj4gOSkpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldXG5cdCAgICAgICAgICAgICAgICB2YXIgS2kgID0gS1tpXTtcblx0ICAgICAgICAgICAgICAgIHZhciBLaWggPSBLaS5oaWdoO1xuXHQgICAgICAgICAgICAgICAgdmFyIEtpbCA9IEtpLmxvdztcblxuXHQgICAgICAgICAgICAgICAgdmFyIHQxbCA9IGhsICsgc2lnbWExbDtcblx0ICAgICAgICAgICAgICAgIHZhciB0MWggPSBoaCArIHNpZ21hMWggKyAoKHQxbCA+Pj4gMCkgPCAoaGwgPj4+IDApID8gMSA6IDApO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQxbCA9IHQxbCArIGNobDtcblx0ICAgICAgICAgICAgICAgIHZhciB0MWggPSB0MWggKyBjaGggKyAoKHQxbCA+Pj4gMCkgPCAoY2hsID4+PiAwKSA/IDEgOiAwKTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MWwgPSB0MWwgKyBLaWw7XG5cdCAgICAgICAgICAgICAgICB2YXIgdDFoID0gdDFoICsgS2loICsgKCh0MWwgPj4+IDApIDwgKEtpbCA+Pj4gMCkgPyAxIDogMCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgdDFsID0gdDFsICsgV2lsO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQxaCA9IHQxaCArIFdpaCArICgodDFsID4+PiAwKSA8IChXaWwgPj4+IDApID8gMSA6IDApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyB0MiA9IHNpZ21hMCArIG1halxuXHQgICAgICAgICAgICAgICAgdmFyIHQybCA9IHNpZ21hMGwgKyBtYWpsO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQyaCA9IHNpZ21hMGggKyBtYWpoICsgKCh0MmwgPj4+IDApIDwgKHNpZ21hMGwgPj4+IDApID8gMSA6IDApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBVcGRhdGUgd29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgICAgIGhoID0gZ2g7XG5cdCAgICAgICAgICAgICAgICBobCA9IGdsO1xuXHQgICAgICAgICAgICAgICAgZ2ggPSBmaDtcblx0ICAgICAgICAgICAgICAgIGdsID0gZmw7XG5cdCAgICAgICAgICAgICAgICBmaCA9IGVoO1xuXHQgICAgICAgICAgICAgICAgZmwgPSBlbDtcblx0ICAgICAgICAgICAgICAgIGVsID0gKGRsICsgdDFsKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBlaCA9IChkaCArIHQxaCArICgoZWwgPj4+IDApIDwgKGRsID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgICAgICAgICAgZGggPSBjaDtcblx0ICAgICAgICAgICAgICAgIGRsID0gY2w7XG5cdCAgICAgICAgICAgICAgICBjaCA9IGJoO1xuXHQgICAgICAgICAgICAgICAgY2wgPSBibDtcblx0ICAgICAgICAgICAgICAgIGJoID0gYWg7XG5cdCAgICAgICAgICAgICAgICBibCA9IGFsO1xuXHQgICAgICAgICAgICAgICAgYWwgPSAodDFsICsgdDJsKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBhaCA9ICh0MWggKyB0MmggKyAoKGFsID4+PiAwKSA8ICh0MWwgPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIMGwgPSBIMC5sb3cgID0gKEgwbCArIGFsKTtcblx0ICAgICAgICAgICAgSDAuaGlnaCA9IChIMGggKyBhaCArICgoSDBsID4+PiAwKSA8IChhbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBIMWwgPSBIMS5sb3cgID0gKEgxbCArIGJsKTtcblx0ICAgICAgICAgICAgSDEuaGlnaCA9IChIMWggKyBiaCArICgoSDFsID4+PiAwKSA8IChibCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBIMmwgPSBIMi5sb3cgID0gKEgybCArIGNsKTtcblx0ICAgICAgICAgICAgSDIuaGlnaCA9IChIMmggKyBjaCArICgoSDJsID4+PiAwKSA8IChjbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBIM2wgPSBIMy5sb3cgID0gKEgzbCArIGRsKTtcblx0ICAgICAgICAgICAgSDMuaGlnaCA9IChIM2ggKyBkaCArICgoSDNsID4+PiAwKSA8IChkbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBINGwgPSBINC5sb3cgID0gKEg0bCArIGVsKTtcblx0ICAgICAgICAgICAgSDQuaGlnaCA9IChINGggKyBlaCArICgoSDRsID4+PiAwKSA8IChlbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBINWwgPSBINS5sb3cgID0gKEg1bCArIGZsKTtcblx0ICAgICAgICAgICAgSDUuaGlnaCA9IChINWggKyBmaCArICgoSDVsID4+PiAwKSA8IChmbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBINmwgPSBINi5sb3cgID0gKEg2bCArIGdsKTtcblx0ICAgICAgICAgICAgSDYuaGlnaCA9IChINmggKyBnaCArICgoSDZsID4+PiAwKSA8IChnbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBIN2wgPSBINy5sb3cgID0gKEg3bCArIGhsKTtcblx0ICAgICAgICAgICAgSDcuaGlnaCA9IChIN2ggKyBoaCArICgoSDdsID4+PiAwKSA8IChobCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyAxMjgpID4+PiAxMCkgPDwgNSkgKyAzMF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyAxMjgpID4+PiAxMCkgPDwgNSkgKyAzMV0gPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgaGFzaCB0byAzMi1iaXQgd29yZCBhcnJheSBiZWZvcmUgcmV0dXJuaW5nXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5faGFzaC50b1gzMigpO1xuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDEwMjQvMzJcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBNTEyKCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEE1MTIod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEE1MTIgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEE1MTIpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTUxMihtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEE1MTIgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBNTEyKTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEE1MTI7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vZW5jLWJhc2U2NFwiKSwgcmVxdWlyZShcIi4vbWQ1XCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2VuYy1iYXNlNjRcIiwgXCIuL21kNVwiLCBcIi4vZXZwa2RmXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBCbG9ja0NpcGhlciA9IENfbGliLkJsb2NrQ2lwaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gUGVybXV0ZWQgQ2hvaWNlIDEgY29uc3RhbnRzXG5cdCAgICB2YXIgUEMxID0gW1xuXHQgICAgICAgIDU3LCA0OSwgNDEsIDMzLCAyNSwgMTcsIDksICAxLFxuXHQgICAgICAgIDU4LCA1MCwgNDIsIDM0LCAyNiwgMTgsIDEwLCAyLFxuXHQgICAgICAgIDU5LCA1MSwgNDMsIDM1LCAyNywgMTksIDExLCAzLFxuXHQgICAgICAgIDYwLCA1MiwgNDQsIDM2LCA2MywgNTUsIDQ3LCAzOSxcblx0ICAgICAgICAzMSwgMjMsIDE1LCA3LCAgNjIsIDU0LCA0NiwgMzgsXG5cdCAgICAgICAgMzAsIDIyLCAxNCwgNiwgIDYxLCA1MywgNDUsIDM3LFxuXHQgICAgICAgIDI5LCAyMSwgMTMsIDUsICAyOCwgMjAsIDEyLCA0XG5cdCAgICBdO1xuXG5cdCAgICAvLyBQZXJtdXRlZCBDaG9pY2UgMiBjb25zdGFudHNcblx0ICAgIHZhciBQQzIgPSBbXG5cdCAgICAgICAgMTQsIDE3LCAxMSwgMjQsIDEsICA1LFxuXHQgICAgICAgIDMsICAyOCwgMTUsIDYsICAyMSwgMTAsXG5cdCAgICAgICAgMjMsIDE5LCAxMiwgNCwgIDI2LCA4LFxuXHQgICAgICAgIDE2LCA3LCAgMjcsIDIwLCAxMywgMixcblx0ICAgICAgICA0MSwgNTIsIDMxLCAzNywgNDcsIDU1LFxuXHQgICAgICAgIDMwLCA0MCwgNTEsIDQ1LCAzMywgNDgsXG5cdCAgICAgICAgNDQsIDQ5LCAzOSwgNTYsIDM0LCA1Myxcblx0ICAgICAgICA0NiwgNDIsIDUwLCAzNiwgMjksIDMyXG5cdCAgICBdO1xuXG5cdCAgICAvLyBDdW11bGF0aXZlIGJpdCBzaGlmdCBjb25zdGFudHNcblx0ICAgIHZhciBCSVRfU0hJRlRTID0gWzEsICAyLCAgNCwgIDYsICA4LCAgMTAsIDEyLCAxNCwgMTUsIDE3LCAxOSwgMjEsIDIzLCAyNSwgMjcsIDI4XTtcblxuXHQgICAgLy8gU0JPWGVzIGFuZCByb3VuZCBwZXJtdXRhdGlvbiBjb25zdGFudHNcblx0ICAgIHZhciBTQk9YX1AgPSBbXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICAweDA6IDB4ODA4MjAwLFxuXHQgICAgICAgICAgICAweDEwMDAwMDAwOiAweDgwMDAsXG5cdCAgICAgICAgICAgIDB4MjAwMDAwMDA6IDB4ODA4MDAyLFxuXHQgICAgICAgICAgICAweDMwMDAwMDAwOiAweDIsXG5cdCAgICAgICAgICAgIDB4NDAwMDAwMDA6IDB4MjAwLFxuXHQgICAgICAgICAgICAweDUwMDAwMDAwOiAweDgwODIwMixcblx0ICAgICAgICAgICAgMHg2MDAwMDAwMDogMHg4MDAyMDIsXG5cdCAgICAgICAgICAgIDB4NzAwMDAwMDA6IDB4ODAwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDAwOiAweDIwMixcblx0ICAgICAgICAgICAgMHg5MDAwMDAwMDogMHg4MDAyMDAsXG5cdCAgICAgICAgICAgIDB4YTAwMDAwMDA6IDB4ODIwMCxcblx0ICAgICAgICAgICAgMHhiMDAwMDAwMDogMHg4MDgwMDAsXG5cdCAgICAgICAgICAgIDB4YzAwMDAwMDA6IDB4ODAwMixcblx0ICAgICAgICAgICAgMHhkMDAwMDAwMDogMHg4MDAwMDIsXG5cdCAgICAgICAgICAgIDB4ZTAwMDAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHhmMDAwMDAwMDogMHg4MjAyLFxuXHQgICAgICAgICAgICAweDgwMDAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxODAwMDAwMDogMHg4MDgyMDIsXG5cdCAgICAgICAgICAgIDB4MjgwMDAwMDA6IDB4ODIwMixcblx0ICAgICAgICAgICAgMHgzODAwMDAwMDogMHg4MDAwLFxuXHQgICAgICAgICAgICAweDQ4MDAwMDAwOiAweDgwODIwMCxcblx0ICAgICAgICAgICAgMHg1ODAwMDAwMDogMHgyMDAsXG5cdCAgICAgICAgICAgIDB4NjgwMDAwMDA6IDB4ODA4MDAyLFxuXHQgICAgICAgICAgICAweDc4MDAwMDAwOiAweDIsXG5cdCAgICAgICAgICAgIDB4ODgwMDAwMDA6IDB4ODAwMjAwLFxuXHQgICAgICAgICAgICAweDk4MDAwMDAwOiAweDgyMDAsXG5cdCAgICAgICAgICAgIDB4YTgwMDAwMDA6IDB4ODA4MDAwLFxuXHQgICAgICAgICAgICAweGI4MDAwMDAwOiAweDgwMDIwMixcblx0ICAgICAgICAgICAgMHhjODAwMDAwMDogMHg4MDAwMDIsXG5cdCAgICAgICAgICAgIDB4ZDgwMDAwMDA6IDB4ODAwMixcblx0ICAgICAgICAgICAgMHhlODAwMDAwMDogMHgyMDIsXG5cdCAgICAgICAgICAgIDB4ZjgwMDAwMDA6IDB4ODAwMDAwLFxuXHQgICAgICAgICAgICAweDE6IDB4ODAwMCxcblx0ICAgICAgICAgICAgMHgxMDAwMDAwMTogMHgyLFxuXHQgICAgICAgICAgICAweDIwMDAwMDAxOiAweDgwODIwMCxcblx0ICAgICAgICAgICAgMHgzMDAwMDAwMTogMHg4MDAwMDAsXG5cdCAgICAgICAgICAgIDB4NDAwMDAwMDE6IDB4ODA4MDAyLFxuXHQgICAgICAgICAgICAweDUwMDAwMDAxOiAweDgyMDAsXG5cdCAgICAgICAgICAgIDB4NjAwMDAwMDE6IDB4MjAwLFxuXHQgICAgICAgICAgICAweDcwMDAwMDAxOiAweDgwMDIwMixcblx0ICAgICAgICAgICAgMHg4MDAwMDAwMTogMHg4MDgyMDIsXG5cdCAgICAgICAgICAgIDB4OTAwMDAwMDE6IDB4ODA4MDAwLFxuXHQgICAgICAgICAgICAweGEwMDAwMDAxOiAweDgwMDAwMixcblx0ICAgICAgICAgICAgMHhiMDAwMDAwMTogMHg4MjAyLFxuXHQgICAgICAgICAgICAweGMwMDAwMDAxOiAweDIwMixcblx0ICAgICAgICAgICAgMHhkMDAwMDAwMTogMHg4MDAyMDAsXG5cdCAgICAgICAgICAgIDB4ZTAwMDAwMDE6IDB4ODAwMixcblx0ICAgICAgICAgICAgMHhmMDAwMDAwMTogMHgwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDE6IDB4ODA4MjAyLFxuXHQgICAgICAgICAgICAweDE4MDAwMDAxOiAweDgwODAwMCxcblx0ICAgICAgICAgICAgMHgyODAwMDAwMTogMHg4MDAwMDAsXG5cdCAgICAgICAgICAgIDB4MzgwMDAwMDE6IDB4MjAwLFxuXHQgICAgICAgICAgICAweDQ4MDAwMDAxOiAweDgwMDAsXG5cdCAgICAgICAgICAgIDB4NTgwMDAwMDE6IDB4ODAwMDAyLFxuXHQgICAgICAgICAgICAweDY4MDAwMDAxOiAweDIsXG5cdCAgICAgICAgICAgIDB4NzgwMDAwMDE6IDB4ODIwMixcblx0ICAgICAgICAgICAgMHg4ODAwMDAwMTogMHg4MDAyLFxuXHQgICAgICAgICAgICAweDk4MDAwMDAxOiAweDgwMDIwMixcblx0ICAgICAgICAgICAgMHhhODAwMDAwMTogMHgyMDIsXG5cdCAgICAgICAgICAgIDB4YjgwMDAwMDE6IDB4ODA4MjAwLFxuXHQgICAgICAgICAgICAweGM4MDAwMDAxOiAweDgwMDIwMCxcblx0ICAgICAgICAgICAgMHhkODAwMDAwMTogMHgwLFxuXHQgICAgICAgICAgICAweGU4MDAwMDAxOiAweDgyMDAsXG5cdCAgICAgICAgICAgIDB4ZjgwMDAwMDE6IDB4ODA4MDAyXG5cdCAgICAgICAgfSxcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIDB4MDogMHg0MDA4NDAxMCxcblx0ICAgICAgICAgICAgMHgxMDAwMDAwOiAweDQwMDAsXG5cdCAgICAgICAgICAgIDB4MjAwMDAwMDogMHg4MDAwMCxcblx0ICAgICAgICAgICAgMHgzMDAwMDAwOiAweDQwMDgwMDEwLFxuXHQgICAgICAgICAgICAweDQwMDAwMDA6IDB4NDAwMDAwMTAsXG5cdCAgICAgICAgICAgIDB4NTAwMDAwMDogMHg0MDA4NDAwMCxcblx0ICAgICAgICAgICAgMHg2MDAwMDAwOiAweDQwMDA0MDAwLFxuXHQgICAgICAgICAgICAweDcwMDAwMDA6IDB4MTAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDogMHg4NDAwMCxcblx0ICAgICAgICAgICAgMHg5MDAwMDAwOiAweDQwMDA0MDEwLFxuXHQgICAgICAgICAgICAweGEwMDAwMDA6IDB4NDAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4YjAwMDAwMDogMHg4NDAxMCxcblx0ICAgICAgICAgICAgMHhjMDAwMDAwOiAweDgwMDEwLFxuXHQgICAgICAgICAgICAweGQwMDAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHhlMDAwMDAwOiAweDQwMTAsXG5cdCAgICAgICAgICAgIDB4ZjAwMDAwMDogMHg0MDA4MDAwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDA6IDB4NDAwMDQwMDAsXG5cdCAgICAgICAgICAgIDB4MTgwMDAwMDogMHg4NDAxMCxcblx0ICAgICAgICAgICAgMHgyODAwMDAwOiAweDEwLFxuXHQgICAgICAgICAgICAweDM4MDAwMDA6IDB4NDAwMDQwMTAsXG5cdCAgICAgICAgICAgIDB4NDgwMDAwMDogMHg0MDA4NDAxMCxcblx0ICAgICAgICAgICAgMHg1ODAwMDAwOiAweDQwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDY4MDAwMDA6IDB4ODAwMDAsXG5cdCAgICAgICAgICAgIDB4NzgwMDAwMDogMHg0MDA4MDAxMCxcblx0ICAgICAgICAgICAgMHg4ODAwMDAwOiAweDgwMDEwLFxuXHQgICAgICAgICAgICAweDk4MDAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHhhODAwMDAwOiAweDQwMDAsXG5cdCAgICAgICAgICAgIDB4YjgwMDAwMDogMHg0MDA4MDAwMCxcblx0ICAgICAgICAgICAgMHhjODAwMDAwOiAweDQwMDAwMDEwLFxuXHQgICAgICAgICAgICAweGQ4MDAwMDA6IDB4ODQwMDAsXG5cdCAgICAgICAgICAgIDB4ZTgwMDAwMDogMHg0MDA4NDAwMCxcblx0ICAgICAgICAgICAgMHhmODAwMDAwOiAweDQwMTAsXG5cdCAgICAgICAgICAgIDB4MTAwMDAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxMTAwMDAwMDogMHg0MDA4MDAxMCxcblx0ICAgICAgICAgICAgMHgxMjAwMDAwMDogMHg0MDAwNDAxMCxcblx0ICAgICAgICAgICAgMHgxMzAwMDAwMDogMHg0MDA4NDAwMCxcblx0ICAgICAgICAgICAgMHgxNDAwMDAwMDogMHg0MDA4MDAwMCxcblx0ICAgICAgICAgICAgMHgxNTAwMDAwMDogMHgxMCxcblx0ICAgICAgICAgICAgMHgxNjAwMDAwMDogMHg4NDAxMCxcblx0ICAgICAgICAgICAgMHgxNzAwMDAwMDogMHg0MDAwLFxuXHQgICAgICAgICAgICAweDE4MDAwMDAwOiAweDQwMTAsXG5cdCAgICAgICAgICAgIDB4MTkwMDAwMDA6IDB4ODAwMDAsXG5cdCAgICAgICAgICAgIDB4MWEwMDAwMDA6IDB4ODAwMTAsXG5cdCAgICAgICAgICAgIDB4MWIwMDAwMDA6IDB4NDAwMDAwMTAsXG5cdCAgICAgICAgICAgIDB4MWMwMDAwMDA6IDB4ODQwMDAsXG5cdCAgICAgICAgICAgIDB4MWQwMDAwMDA6IDB4NDAwMDQwMDAsXG5cdCAgICAgICAgICAgIDB4MWUwMDAwMDA6IDB4NDAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWYwMDAwMDA6IDB4NDAwODQwMTAsXG5cdCAgICAgICAgICAgIDB4MTA4MDAwMDA6IDB4ODQwMTAsXG5cdCAgICAgICAgICAgIDB4MTE4MDAwMDA6IDB4ODAwMDAsXG5cdCAgICAgICAgICAgIDB4MTI4MDAwMDA6IDB4NDAwODAwMDAsXG5cdCAgICAgICAgICAgIDB4MTM4MDAwMDA6IDB4NDAwMCxcblx0ICAgICAgICAgICAgMHgxNDgwMDAwMDogMHg0MDAwNDAwMCxcblx0ICAgICAgICAgICAgMHgxNTgwMDAwMDogMHg0MDA4NDAxMCxcblx0ICAgICAgICAgICAgMHgxNjgwMDAwMDogMHgxMCxcblx0ICAgICAgICAgICAgMHgxNzgwMDAwMDogMHg0MDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxODgwMDAwMDogMHg0MDA4NDAwMCxcblx0ICAgICAgICAgICAgMHgxOTgwMDAwMDogMHg0MDAwMDAxMCxcblx0ICAgICAgICAgICAgMHgxYTgwMDAwMDogMHg0MDAwNDAxMCxcblx0ICAgICAgICAgICAgMHgxYjgwMDAwMDogMHg4MDAxMCxcblx0ICAgICAgICAgICAgMHgxYzgwMDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDFkODAwMDAwOiAweDQwMTAsXG5cdCAgICAgICAgICAgIDB4MWU4MDAwMDA6IDB4NDAwODAwMTAsXG5cdCAgICAgICAgICAgIDB4MWY4MDAwMDA6IDB4ODQwMDBcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgMHgwOiAweDEwNCxcblx0ICAgICAgICAgICAgMHgxMDAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgyMDAwMDA6IDB4NDAwMDEwMCxcblx0ICAgICAgICAgICAgMHgzMDAwMDA6IDB4MTAxMDQsXG5cdCAgICAgICAgICAgIDB4NDAwMDAwOiAweDEwMDA0LFxuXHQgICAgICAgICAgICAweDUwMDAwMDogMHg0MDAwMDA0LFxuXHQgICAgICAgICAgICAweDYwMDAwMDogMHg0MDEwMTA0LFxuXHQgICAgICAgICAgICAweDcwMDAwMDogMHg0MDEwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDogMHg0MDAwMDAwLFxuXHQgICAgICAgICAgICAweDkwMDAwMDogMHg0MDEwMTAwLFxuXHQgICAgICAgICAgICAweGEwMDAwMDogMHgxMDEwMCxcblx0ICAgICAgICAgICAgMHhiMDAwMDA6IDB4NDAxMDAwNCxcblx0ICAgICAgICAgICAgMHhjMDAwMDA6IDB4NDAwMDEwNCxcblx0ICAgICAgICAgICAgMHhkMDAwMDA6IDB4MTAwMDAsXG5cdCAgICAgICAgICAgIDB4ZTAwMDAwOiAweDQsXG5cdCAgICAgICAgICAgIDB4ZjAwMDAwOiAweDEwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDogMHg0MDEwMTAwLFxuXHQgICAgICAgICAgICAweDE4MDAwMDogMHg0MDEwMDA0LFxuXHQgICAgICAgICAgICAweDI4MDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDM4MDAwMDogMHg0MDAwMTAwLFxuXHQgICAgICAgICAgICAweDQ4MDAwMDogMHg0MDAwMDA0LFxuXHQgICAgICAgICAgICAweDU4MDAwMDogMHgxMDAwMCxcblx0ICAgICAgICAgICAgMHg2ODAwMDA6IDB4MTAwMDQsXG5cdCAgICAgICAgICAgIDB4NzgwMDAwOiAweDEwNCxcblx0ICAgICAgICAgICAgMHg4ODAwMDA6IDB4NCxcblx0ICAgICAgICAgICAgMHg5ODAwMDA6IDB4MTAwLFxuXHQgICAgICAgICAgICAweGE4MDAwMDogMHg0MDEwMDAwLFxuXHQgICAgICAgICAgICAweGI4MDAwMDogMHgxMDEwNCxcblx0ICAgICAgICAgICAgMHhjODAwMDA6IDB4MTAxMDAsXG5cdCAgICAgICAgICAgIDB4ZDgwMDAwOiAweDQwMDAxMDQsXG5cdCAgICAgICAgICAgIDB4ZTgwMDAwOiAweDQwMTAxMDQsXG5cdCAgICAgICAgICAgIDB4ZjgwMDAwOiAweDQwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTAwMDAwMDogMHg0MDEwMTAwLFxuXHQgICAgICAgICAgICAweDExMDAwMDA6IDB4MTAwMDQsXG5cdCAgICAgICAgICAgIDB4MTIwMDAwMDogMHgxMDAwMCxcblx0ICAgICAgICAgICAgMHgxMzAwMDAwOiAweDQwMDAxMDAsXG5cdCAgICAgICAgICAgIDB4MTQwMDAwMDogMHgxMDAsXG5cdCAgICAgICAgICAgIDB4MTUwMDAwMDogMHg0MDEwMTA0LFxuXHQgICAgICAgICAgICAweDE2MDAwMDA6IDB4NDAwMDAwNCxcblx0ICAgICAgICAgICAgMHgxNzAwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MTgwMDAwMDogMHg0MDAwMTA0LFxuXHQgICAgICAgICAgICAweDE5MDAwMDA6IDB4NDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxYTAwMDAwOiAweDQsXG5cdCAgICAgICAgICAgIDB4MWIwMDAwMDogMHgxMDEwMCxcblx0ICAgICAgICAgICAgMHgxYzAwMDAwOiAweDQwMTAwMDAsXG5cdCAgICAgICAgICAgIDB4MWQwMDAwMDogMHgxMDQsXG5cdCAgICAgICAgICAgIDB4MWUwMDAwMDogMHgxMDEwNCxcblx0ICAgICAgICAgICAgMHgxZjAwMDAwOiAweDQwMTAwMDQsXG5cdCAgICAgICAgICAgIDB4MTA4MDAwMDogMHg0MDAwMDAwLFxuXHQgICAgICAgICAgICAweDExODAwMDA6IDB4MTA0LFxuXHQgICAgICAgICAgICAweDEyODAwMDA6IDB4NDAxMDEwMCxcblx0ICAgICAgICAgICAgMHgxMzgwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MTQ4MDAwMDogMHgxMDAwNCxcblx0ICAgICAgICAgICAgMHgxNTgwMDAwOiAweDQwMDAxMDAsXG5cdCAgICAgICAgICAgIDB4MTY4MDAwMDogMHgxMDAsXG5cdCAgICAgICAgICAgIDB4MTc4MDAwMDogMHg0MDEwMDA0LFxuXHQgICAgICAgICAgICAweDE4ODAwMDA6IDB4MTAwMDAsXG5cdCAgICAgICAgICAgIDB4MTk4MDAwMDogMHg0MDEwMTA0LFxuXHQgICAgICAgICAgICAweDFhODAwMDA6IDB4MTAxMDQsXG5cdCAgICAgICAgICAgIDB4MWI4MDAwMDogMHg0MDAwMDA0LFxuXHQgICAgICAgICAgICAweDFjODAwMDA6IDB4NDAwMDEwNCxcblx0ICAgICAgICAgICAgMHgxZDgwMDAwOiAweDQwMTAwMDAsXG5cdCAgICAgICAgICAgIDB4MWU4MDAwMDogMHg0LFxuXHQgICAgICAgICAgICAweDFmODAwMDA6IDB4MTAxMDBcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgMHgwOiAweDgwNDAxMDAwLFxuXHQgICAgICAgICAgICAweDEwMDAwOiAweDgwMDAxMDQwLFxuXHQgICAgICAgICAgICAweDIwMDAwOiAweDQwMTA0MCxcblx0ICAgICAgICAgICAgMHgzMDAwMDogMHg4MDQwMDAwMCxcblx0ICAgICAgICAgICAgMHg0MDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDUwMDAwOiAweDQwMTAwMCxcblx0ICAgICAgICAgICAgMHg2MDAwMDogMHg4MDAwMDA0MCxcblx0ICAgICAgICAgICAgMHg3MDAwMDogMHg0MDAwNDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDA6IDB4ODAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4OTAwMDA6IDB4NDAwMDAwLFxuXHQgICAgICAgICAgICAweGEwMDAwOiAweDQwLFxuXHQgICAgICAgICAgICAweGIwMDAwOiAweDgwMDAxMDAwLFxuXHQgICAgICAgICAgICAweGMwMDAwOiAweDgwNDAwMDQwLFxuXHQgICAgICAgICAgICAweGQwMDAwOiAweDEwNDAsXG5cdCAgICAgICAgICAgIDB4ZTAwMDA6IDB4MTAwMCxcblx0ICAgICAgICAgICAgMHhmMDAwMDogMHg4MDQwMTA0MCxcblx0ICAgICAgICAgICAgMHg4MDAwOiAweDgwMDAxMDQwLFxuXHQgICAgICAgICAgICAweDE4MDAwOiAweDQwLFxuXHQgICAgICAgICAgICAweDI4MDAwOiAweDgwNDAwMDQwLFxuXHQgICAgICAgICAgICAweDM4MDAwOiAweDgwMDAxMDAwLFxuXHQgICAgICAgICAgICAweDQ4MDAwOiAweDQwMTAwMCxcblx0ICAgICAgICAgICAgMHg1ODAwMDogMHg4MDQwMTA0MCxcblx0ICAgICAgICAgICAgMHg2ODAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDc4MDAwOiAweDgwNDAwMDAwLFxuXHQgICAgICAgICAgICAweDg4MDAwOiAweDEwMDAsXG5cdCAgICAgICAgICAgIDB4OTgwMDA6IDB4ODA0MDEwMDAsXG5cdCAgICAgICAgICAgIDB4YTgwMDA6IDB4NDAwMDAwLFxuXHQgICAgICAgICAgICAweGI4MDAwOiAweDEwNDAsXG5cdCAgICAgICAgICAgIDB4YzgwMDA6IDB4ODAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ZDgwMDA6IDB4NDAwMDQwLFxuXHQgICAgICAgICAgICAweGU4MDAwOiAweDQwMTA0MCxcblx0ICAgICAgICAgICAgMHhmODAwMDogMHg4MDAwMDA0MCxcblx0ICAgICAgICAgICAgMHgxMDAwMDA6IDB4NDAwMDQwLFxuXHQgICAgICAgICAgICAweDExMDAwMDogMHg0MDEwMDAsXG5cdCAgICAgICAgICAgIDB4MTIwMDAwOiAweDgwMDAwMDQwLFxuXHQgICAgICAgICAgICAweDEzMDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDE0MDAwMDogMHgxMDQwLFxuXHQgICAgICAgICAgICAweDE1MDAwMDogMHg4MDQwMDA0MCxcblx0ICAgICAgICAgICAgMHgxNjAwMDA6IDB4ODA0MDEwMDAsXG5cdCAgICAgICAgICAgIDB4MTcwMDAwOiAweDgwMDAxMDQwLFxuXHQgICAgICAgICAgICAweDE4MDAwMDogMHg4MDQwMTA0MCxcblx0ICAgICAgICAgICAgMHgxOTAwMDA6IDB4ODAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWEwMDAwOiAweDgwNDAwMDAwLFxuXHQgICAgICAgICAgICAweDFiMDAwMDogMHg0MDEwNDAsXG5cdCAgICAgICAgICAgIDB4MWMwMDAwOiAweDgwMDAxMDAwLFxuXHQgICAgICAgICAgICAweDFkMDAwMDogMHg0MDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWUwMDAwOiAweDQwLFxuXHQgICAgICAgICAgICAweDFmMDAwMDogMHgxMDAwLFxuXHQgICAgICAgICAgICAweDEwODAwMDogMHg4MDQwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMTgwMDA6IDB4ODA0MDEwNDAsXG5cdCAgICAgICAgICAgIDB4MTI4MDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MTM4MDAwOiAweDQwMTAwMCxcblx0ICAgICAgICAgICAgMHgxNDgwMDA6IDB4NDAwMDQwLFxuXHQgICAgICAgICAgICAweDE1ODAwMDogMHg4MDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxNjgwMDA6IDB4ODAwMDEwNDAsXG5cdCAgICAgICAgICAgIDB4MTc4MDAwOiAweDQwLFxuXHQgICAgICAgICAgICAweDE4ODAwMDogMHg4MDAwMDA0MCxcblx0ICAgICAgICAgICAgMHgxOTgwMDA6IDB4MTAwMCxcblx0ICAgICAgICAgICAgMHgxYTgwMDA6IDB4ODAwMDEwMDAsXG5cdCAgICAgICAgICAgIDB4MWI4MDAwOiAweDgwNDAwMDQwLFxuXHQgICAgICAgICAgICAweDFjODAwMDogMHgxMDQwLFxuXHQgICAgICAgICAgICAweDFkODAwMDogMHg4MDQwMTAwMCxcblx0ICAgICAgICAgICAgMHgxZTgwMDA6IDB4NDAwMDAwLFxuXHQgICAgICAgICAgICAweDFmODAwMDogMHg0MDEwNDBcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgMHgwOiAweDgwLFxuXHQgICAgICAgICAgICAweDEwMDA6IDB4MTA0MDAwMCxcblx0ICAgICAgICAgICAgMHgyMDAwOiAweDQwMDAwLFxuXHQgICAgICAgICAgICAweDMwMDA6IDB4MjAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4NDAwMDogMHgyMDA0MDA4MCxcblx0ICAgICAgICAgICAgMHg1MDAwOiAweDEwMDAwODAsXG5cdCAgICAgICAgICAgIDB4NjAwMDogMHgyMTAwMDA4MCxcblx0ICAgICAgICAgICAgMHg3MDAwOiAweDQwMDgwLFxuXHQgICAgICAgICAgICAweDgwMDA6IDB4MTAwMDAwMCxcblx0ICAgICAgICAgICAgMHg5MDAwOiAweDIwMDQwMDAwLFxuXHQgICAgICAgICAgICAweGEwMDA6IDB4MjAwMDAwODAsXG5cdCAgICAgICAgICAgIDB4YjAwMDogMHgyMTA0MDA4MCxcblx0ICAgICAgICAgICAgMHhjMDAwOiAweDIxMDQwMDAwLFxuXHQgICAgICAgICAgICAweGQwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHhlMDAwOiAweDEwNDAwODAsXG5cdCAgICAgICAgICAgIDB4ZjAwMDogMHgyMTAwMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDA6IDB4MTA0MDA4MCxcblx0ICAgICAgICAgICAgMHgxODAwOiAweDIxMDAwMDgwLFxuXHQgICAgICAgICAgICAweDI4MDA6IDB4ODAsXG5cdCAgICAgICAgICAgIDB4MzgwMDogMHgxMDQwMDAwLFxuXHQgICAgICAgICAgICAweDQ4MDA6IDB4NDAwMDAsXG5cdCAgICAgICAgICAgIDB4NTgwMDogMHgyMDA0MDA4MCxcblx0ICAgICAgICAgICAgMHg2ODAwOiAweDIxMDQwMDAwLFxuXHQgICAgICAgICAgICAweDc4MDA6IDB4MjAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ODgwMDogMHgyMDA0MDAwMCxcblx0ICAgICAgICAgICAgMHg5ODAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4YTgwMDogMHgyMTA0MDA4MCxcblx0ICAgICAgICAgICAgMHhiODAwOiAweDEwMDAwODAsXG5cdCAgICAgICAgICAgIDB4YzgwMDogMHgyMDAwMDA4MCxcblx0ICAgICAgICAgICAgMHhkODAwOiAweDIxMDAwMDAwLFxuXHQgICAgICAgICAgICAweGU4MDA6IDB4MTAwMDAwMCxcblx0ICAgICAgICAgICAgMHhmODAwOiAweDQwMDgwLFxuXHQgICAgICAgICAgICAweDEwMDAwOiAweDQwMDAwLFxuXHQgICAgICAgICAgICAweDExMDAwOiAweDgwLFxuXHQgICAgICAgICAgICAweDEyMDAwOiAweDIwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDEzMDAwOiAweDIxMDAwMDgwLFxuXHQgICAgICAgICAgICAweDE0MDAwOiAweDEwMDAwODAsXG5cdCAgICAgICAgICAgIDB4MTUwMDA6IDB4MjEwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTYwMDA6IDB4MjAwNDAwODAsXG5cdCAgICAgICAgICAgIDB4MTcwMDA6IDB4MTAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxODAwMDogMHgyMTA0MDA4MCxcblx0ICAgICAgICAgICAgMHgxOTAwMDogMHgyMTAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxYTAwMDogMHgxMDQwMDAwLFxuXHQgICAgICAgICAgICAweDFiMDAwOiAweDIwMDQwMDAwLFxuXHQgICAgICAgICAgICAweDFjMDAwOiAweDQwMDgwLFxuXHQgICAgICAgICAgICAweDFkMDAwOiAweDIwMDAwMDgwLFxuXHQgICAgICAgICAgICAweDFlMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MWYwMDA6IDB4MTA0MDA4MCxcblx0ICAgICAgICAgICAgMHgxMDgwMDogMHgyMTAwMDA4MCxcblx0ICAgICAgICAgICAgMHgxMTgwMDogMHgxMDAwMDAwLFxuXHQgICAgICAgICAgICAweDEyODAwOiAweDEwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTM4MDA6IDB4MjAwNDAwODAsXG5cdCAgICAgICAgICAgIDB4MTQ4MDA6IDB4MjAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTU4MDA6IDB4MTA0MDA4MCxcblx0ICAgICAgICAgICAgMHgxNjgwMDogMHg4MCxcblx0ICAgICAgICAgICAgMHgxNzgwMDogMHgyMTA0MDAwMCxcblx0ICAgICAgICAgICAgMHgxODgwMDogMHg0MDA4MCxcblx0ICAgICAgICAgICAgMHgxOTgwMDogMHgyMTA0MDA4MCxcblx0ICAgICAgICAgICAgMHgxYTgwMDogMHgwLFxuXHQgICAgICAgICAgICAweDFiODAwOiAweDIxMDAwMDAwLFxuXHQgICAgICAgICAgICAweDFjODAwOiAweDEwMDAwODAsXG5cdCAgICAgICAgICAgIDB4MWQ4MDA6IDB4NDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWU4MDA6IDB4MjAwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWY4MDA6IDB4MjAwMDAwODBcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgMHgwOiAweDEwMDAwMDA4LFxuXHQgICAgICAgICAgICAweDEwMDogMHgyMDAwLFxuXHQgICAgICAgICAgICAweDIwMDogMHgxMDIwMDAwMCxcblx0ICAgICAgICAgICAgMHgzMDA6IDB4MTAyMDIwMDgsXG5cdCAgICAgICAgICAgIDB4NDAwOiAweDEwMDAyMDAwLFxuXHQgICAgICAgICAgICAweDUwMDogMHgyMDAwMDAsXG5cdCAgICAgICAgICAgIDB4NjAwOiAweDIwMDAwOCxcblx0ICAgICAgICAgICAgMHg3MDA6IDB4MTAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4OTAwOiAweDEwMDAyMDA4LFxuXHQgICAgICAgICAgICAweGEwMDogMHgyMDIwMDAsXG5cdCAgICAgICAgICAgIDB4YjAwOiAweDgsXG5cdCAgICAgICAgICAgIDB4YzAwOiAweDEwMjAwMDA4LFxuXHQgICAgICAgICAgICAweGQwMDogMHgyMDIwMDgsXG5cdCAgICAgICAgICAgIDB4ZTAwOiAweDIwMDgsXG5cdCAgICAgICAgICAgIDB4ZjAwOiAweDEwMjAyMDAwLFxuXHQgICAgICAgICAgICAweDgwOiAweDEwMjAwMDAwLFxuXHQgICAgICAgICAgICAweDE4MDogMHgxMDIwMjAwOCxcblx0ICAgICAgICAgICAgMHgyODA6IDB4OCxcblx0ICAgICAgICAgICAgMHgzODA6IDB4MjAwMDAwLFxuXHQgICAgICAgICAgICAweDQ4MDogMHgyMDIwMDgsXG5cdCAgICAgICAgICAgIDB4NTgwOiAweDEwMDAwMDA4LFxuXHQgICAgICAgICAgICAweDY4MDogMHgxMDAwMjAwMCxcblx0ICAgICAgICAgICAgMHg3ODA6IDB4MjAwOCxcblx0ICAgICAgICAgICAgMHg4ODA6IDB4MjAwMDA4LFxuXHQgICAgICAgICAgICAweDk4MDogMHgyMDAwLFxuXHQgICAgICAgICAgICAweGE4MDogMHgxMDAwMjAwOCxcblx0ICAgICAgICAgICAgMHhiODA6IDB4MTAyMDAwMDgsXG5cdCAgICAgICAgICAgIDB4YzgwOiAweDAsXG5cdCAgICAgICAgICAgIDB4ZDgwOiAweDEwMjAyMDAwLFxuXHQgICAgICAgICAgICAweGU4MDogMHgyMDIwMDAsXG5cdCAgICAgICAgICAgIDB4ZjgwOiAweDEwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDEwMDA6IDB4MTAwMDIwMDAsXG5cdCAgICAgICAgICAgIDB4MTEwMDogMHgxMDIwMDAwOCxcblx0ICAgICAgICAgICAgMHgxMjAwOiAweDEwMjAyMDA4LFxuXHQgICAgICAgICAgICAweDEzMDA6IDB4MjAwOCxcblx0ICAgICAgICAgICAgMHgxNDAwOiAweDIwMDAwMCxcblx0ICAgICAgICAgICAgMHgxNTAwOiAweDEwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDE2MDA6IDB4MTAwMDAwMDgsXG5cdCAgICAgICAgICAgIDB4MTcwMDogMHgyMDIwMDAsXG5cdCAgICAgICAgICAgIDB4MTgwMDogMHgyMDIwMDgsXG5cdCAgICAgICAgICAgIDB4MTkwMDogMHgwLFxuXHQgICAgICAgICAgICAweDFhMDA6IDB4OCxcblx0ICAgICAgICAgICAgMHgxYjAwOiAweDEwMjAwMDAwLFxuXHQgICAgICAgICAgICAweDFjMDA6IDB4MjAwMCxcblx0ICAgICAgICAgICAgMHgxZDAwOiAweDEwMDAyMDA4LFxuXHQgICAgICAgICAgICAweDFlMDA6IDB4MTAyMDIwMDAsXG5cdCAgICAgICAgICAgIDB4MWYwMDogMHgyMDAwMDgsXG5cdCAgICAgICAgICAgIDB4MTA4MDogMHg4LFxuXHQgICAgICAgICAgICAweDExODA6IDB4MjAyMDAwLFxuXHQgICAgICAgICAgICAweDEyODA6IDB4MjAwMDAwLFxuXHQgICAgICAgICAgICAweDEzODA6IDB4MTAwMDAwMDgsXG5cdCAgICAgICAgICAgIDB4MTQ4MDogMHgxMDAwMjAwMCxcblx0ICAgICAgICAgICAgMHgxNTgwOiAweDIwMDgsXG5cdCAgICAgICAgICAgIDB4MTY4MDogMHgxMDIwMjAwOCxcblx0ICAgICAgICAgICAgMHgxNzgwOiAweDEwMjAwMDAwLFxuXHQgICAgICAgICAgICAweDE4ODA6IDB4MTAyMDIwMDAsXG5cdCAgICAgICAgICAgIDB4MTk4MDogMHgxMDIwMDAwOCxcblx0ICAgICAgICAgICAgMHgxYTgwOiAweDIwMDAsXG5cdCAgICAgICAgICAgIDB4MWI4MDogMHgyMDIwMDgsXG5cdCAgICAgICAgICAgIDB4MWM4MDogMHgyMDAwMDgsXG5cdCAgICAgICAgICAgIDB4MWQ4MDogMHgwLFxuXHQgICAgICAgICAgICAweDFlODA6IDB4MTAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWY4MDogMHgxMDAwMjAwOFxuXHQgICAgICAgIH0sXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICAweDA6IDB4MTAwMDAwLFxuXHQgICAgICAgICAgICAweDEwOiAweDIwMDA0MDEsXG5cdCAgICAgICAgICAgIDB4MjA6IDB4NDAwLFxuXHQgICAgICAgICAgICAweDMwOiAweDEwMDQwMSxcblx0ICAgICAgICAgICAgMHg0MDogMHgyMTAwNDAxLFxuXHQgICAgICAgICAgICAweDUwOiAweDAsXG5cdCAgICAgICAgICAgIDB4NjA6IDB4MSxcblx0ICAgICAgICAgICAgMHg3MDogMHgyMTAwMDAxLFxuXHQgICAgICAgICAgICAweDgwOiAweDIwMDA0MDAsXG5cdCAgICAgICAgICAgIDB4OTA6IDB4MTAwMDAxLFxuXHQgICAgICAgICAgICAweGEwOiAweDIwMDAwMDEsXG5cdCAgICAgICAgICAgIDB4YjA6IDB4MjEwMDQwMCxcblx0ICAgICAgICAgICAgMHhjMDogMHgyMTAwMDAwLFxuXHQgICAgICAgICAgICAweGQwOiAweDQwMSxcblx0ICAgICAgICAgICAgMHhlMDogMHgxMDA0MDAsXG5cdCAgICAgICAgICAgIDB4ZjA6IDB4MjAwMDAwMCxcblx0ICAgICAgICAgICAgMHg4OiAweDIxMDAwMDEsXG5cdCAgICAgICAgICAgIDB4MTg6IDB4MCxcblx0ICAgICAgICAgICAgMHgyODogMHgyMDAwNDAxLFxuXHQgICAgICAgICAgICAweDM4OiAweDIxMDA0MDAsXG5cdCAgICAgICAgICAgIDB4NDg6IDB4MTAwMDAwLFxuXHQgICAgICAgICAgICAweDU4OiAweDIwMDAwMDEsXG5cdCAgICAgICAgICAgIDB4Njg6IDB4MjAwMDAwMCxcblx0ICAgICAgICAgICAgMHg3ODogMHg0MDEsXG5cdCAgICAgICAgICAgIDB4ODg6IDB4MTAwNDAxLFxuXHQgICAgICAgICAgICAweDk4OiAweDIwMDA0MDAsXG5cdCAgICAgICAgICAgIDB4YTg6IDB4MjEwMDAwMCxcblx0ICAgICAgICAgICAgMHhiODogMHgxMDAwMDEsXG5cdCAgICAgICAgICAgIDB4Yzg6IDB4NDAwLFxuXHQgICAgICAgICAgICAweGQ4OiAweDIxMDA0MDEsXG5cdCAgICAgICAgICAgIDB4ZTg6IDB4MSxcblx0ICAgICAgICAgICAgMHhmODogMHgxMDA0MDAsXG5cdCAgICAgICAgICAgIDB4MTAwOiAweDIwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTEwOiAweDEwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMjA6IDB4MjAwMDQwMSxcblx0ICAgICAgICAgICAgMHgxMzA6IDB4MjEwMDAwMSxcblx0ICAgICAgICAgICAgMHgxNDA6IDB4MTAwMDAxLFxuXHQgICAgICAgICAgICAweDE1MDogMHgyMDAwNDAwLFxuXHQgICAgICAgICAgICAweDE2MDogMHgyMTAwNDAwLFxuXHQgICAgICAgICAgICAweDE3MDogMHgxMDA0MDEsXG5cdCAgICAgICAgICAgIDB4MTgwOiAweDQwMSxcblx0ICAgICAgICAgICAgMHgxOTA6IDB4MjEwMDQwMSxcblx0ICAgICAgICAgICAgMHgxYTA6IDB4MTAwNDAwLFxuXHQgICAgICAgICAgICAweDFiMDogMHgxLFxuXHQgICAgICAgICAgICAweDFjMDogMHgwLFxuXHQgICAgICAgICAgICAweDFkMDogMHgyMTAwMDAwLFxuXHQgICAgICAgICAgICAweDFlMDogMHgyMDAwMDAxLFxuXHQgICAgICAgICAgICAweDFmMDogMHg0MDAsXG5cdCAgICAgICAgICAgIDB4MTA4OiAweDEwMDQwMCxcblx0ICAgICAgICAgICAgMHgxMTg6IDB4MjAwMDQwMSxcblx0ICAgICAgICAgICAgMHgxMjg6IDB4MjEwMDAwMSxcblx0ICAgICAgICAgICAgMHgxMzg6IDB4MSxcblx0ICAgICAgICAgICAgMHgxNDg6IDB4MjAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxNTg6IDB4MTAwMDAwLFxuXHQgICAgICAgICAgICAweDE2ODogMHg0MDEsXG5cdCAgICAgICAgICAgIDB4MTc4OiAweDIxMDA0MDAsXG5cdCAgICAgICAgICAgIDB4MTg4OiAweDIwMDAwMDEsXG5cdCAgICAgICAgICAgIDB4MTk4OiAweDIxMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWE4OiAweDAsXG5cdCAgICAgICAgICAgIDB4MWI4OiAweDIxMDA0MDEsXG5cdCAgICAgICAgICAgIDB4MWM4OiAweDEwMDQwMSxcblx0ICAgICAgICAgICAgMHgxZDg6IDB4NDAwLFxuXHQgICAgICAgICAgICAweDFlODogMHgyMDAwNDAwLFxuXHQgICAgICAgICAgICAweDFmODogMHgxMDAwMDFcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgMHgwOiAweDgwMDA4MjAsXG5cdCAgICAgICAgICAgIDB4MTogMHgyMDAwMCxcblx0ICAgICAgICAgICAgMHgyOiAweDgwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MzogMHgyMCxcblx0ICAgICAgICAgICAgMHg0OiAweDIwMDIwLFxuXHQgICAgICAgICAgICAweDU6IDB4ODAyMDgyMCxcblx0ICAgICAgICAgICAgMHg2OiAweDgwMjA4MDAsXG5cdCAgICAgICAgICAgIDB4NzogMHg4MDAsXG5cdCAgICAgICAgICAgIDB4ODogMHg4MDIwMDAwLFxuXHQgICAgICAgICAgICAweDk6IDB4ODAwMDgwMCxcblx0ICAgICAgICAgICAgMHhhOiAweDIwODAwLFxuXHQgICAgICAgICAgICAweGI6IDB4ODAyMDAyMCxcblx0ICAgICAgICAgICAgMHhjOiAweDgyMCxcblx0ICAgICAgICAgICAgMHhkOiAweDAsXG5cdCAgICAgICAgICAgIDB4ZTogMHg4MDAwMDIwLFxuXHQgICAgICAgICAgICAweGY6IDB4MjA4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDA6IDB4ODAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDAxOiAweDgwMjA4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDI6IDB4ODAwMDgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwMzogMHg4MDAwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDA0OiAweDgwMjAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDU6IDB4MjA4MDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDY6IDB4MjA4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDc6IDB4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDg6IDB4ODAwMDAyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwOTogMHg4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMGE6IDB4MjAwMjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMGI6IDB4ODAyMDgwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwYzogMHgwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDBkOiAweDgwMjAwMjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMGU6IDB4ODAwMDgwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwZjogMHgyMDAwMCxcblx0ICAgICAgICAgICAgMHgxMDogMHgyMDgyMCxcblx0ICAgICAgICAgICAgMHgxMTogMHg4MDIwODAwLFxuXHQgICAgICAgICAgICAweDEyOiAweDIwLFxuXHQgICAgICAgICAgICAweDEzOiAweDgwMCxcblx0ICAgICAgICAgICAgMHgxNDogMHg4MDAwODAwLFxuXHQgICAgICAgICAgICAweDE1OiAweDgwMDAwMjAsXG5cdCAgICAgICAgICAgIDB4MTY6IDB4ODAyMDAyMCxcblx0ICAgICAgICAgICAgMHgxNzogMHgyMDAwMCxcblx0ICAgICAgICAgICAgMHgxODogMHgwLFxuXHQgICAgICAgICAgICAweDE5OiAweDIwMDIwLFxuXHQgICAgICAgICAgICAweDFhOiAweDgwMjAwMDAsXG5cdCAgICAgICAgICAgIDB4MWI6IDB4ODAwMDgyMCxcblx0ICAgICAgICAgICAgMHgxYzogMHg4MDIwODIwLFxuXHQgICAgICAgICAgICAweDFkOiAweDIwODAwLFxuXHQgICAgICAgICAgICAweDFlOiAweDgyMCxcblx0ICAgICAgICAgICAgMHgxZjogMHg4MDAwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDEwOiAweDIwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDExOiAweDgwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxMjogMHg4MDIwMDIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDEzOiAweDIwODIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDE0OiAweDIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDE1OiAweDgwMjAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTY6IDB4ODAwMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxNzogMHg4MDAwODIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDE4OiAweDgwMjA4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTk6IDB4ODAwMDAyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxYTogMHg4MDAwODAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDFiOiAweDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMWM6IDB4MjA4MDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMWQ6IDB4ODIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDFlOiAweDIwMDIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDFmOiAweDgwMjA4MDBcblx0ICAgICAgICB9XG5cdCAgICBdO1xuXG5cdCAgICAvLyBNYXNrcyB0aGF0IHNlbGVjdCB0aGUgU0JPWCBpbnB1dFxuXHQgICAgdmFyIFNCT1hfTUFTSyA9IFtcblx0ICAgICAgICAweGY4MDAwMDAxLCAweDFmODAwMDAwLCAweDAxZjgwMDAwLCAweDAwMWY4MDAwLFxuXHQgICAgICAgIDB4MDAwMWY4MDAsIDB4MDAwMDFmODAsIDB4MDAwMDAxZjgsIDB4ODAwMDAwMWZcblx0ICAgIF07XG5cblx0ICAgIC8qKlxuXHQgICAgICogREVTIGJsb2NrIGNpcGhlciBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBERVMgPSBDX2FsZ28uREVTID0gQmxvY2tDaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2tleTtcblx0ICAgICAgICAgICAgdmFyIGtleVdvcmRzID0ga2V5LndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFNlbGVjdCA1NiBiaXRzIGFjY29yZGluZyB0byBQQzFcblx0ICAgICAgICAgICAgdmFyIGtleUJpdHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1NjsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIga2V5Qml0UG9zID0gUEMxW2ldIC0gMTtcblx0ICAgICAgICAgICAgICAgIGtleUJpdHNbaV0gPSAoa2V5V29yZHNba2V5Qml0UG9zID4+PiA1XSA+Pj4gKDMxIC0ga2V5Qml0UG9zICUgMzIpKSAmIDE7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBc3NlbWJsZSAxNiBzdWJrZXlzXG5cdCAgICAgICAgICAgIHZhciBzdWJLZXlzID0gdGhpcy5fc3ViS2V5cyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBuU3ViS2V5ID0gMDsgblN1YktleSA8IDE2OyBuU3ViS2V5KyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBzdWJrZXlcblx0ICAgICAgICAgICAgICAgIHZhciBzdWJLZXkgPSBzdWJLZXlzW25TdWJLZXldID0gW107XG5cblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0U2hpZnQgPSBCSVRfU0hJRlRTW25TdWJLZXldO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTZWxlY3QgNDggYml0cyBhY2NvcmRpbmcgdG8gUEMyXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3QgZnJvbSB0aGUgbGVmdCAyOCBrZXkgYml0c1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YktleVsoaSAvIDYpIHwgMF0gfD0ga2V5Qml0c1soKFBDMltpXSAtIDEpICsgYml0U2hpZnQpICUgMjhdIDw8ICgzMSAtIGkgJSA2KTtcblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBmcm9tIHRoZSByaWdodCAyOCBrZXkgYml0c1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YktleVs0ICsgKChpIC8gNikgfCAwKV0gfD0ga2V5Qml0c1syOCArICgoKFBDMltpICsgMjRdIC0gMSkgKyBiaXRTaGlmdCkgJSAyOCldIDw8ICgzMSAtIGkgJSA2KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gU2luY2UgZWFjaCBzdWJrZXkgaXMgYXBwbGllZCB0byBhbiBleHBhbmRlZCAzMi1iaXQgaW5wdXQsXG5cdCAgICAgICAgICAgICAgICAvLyB0aGUgc3Via2V5IGNhbiBiZSBicm9rZW4gaW50byA4IHZhbHVlcyBzY2FsZWQgdG8gMzItYml0cyxcblx0ICAgICAgICAgICAgICAgIC8vIHdoaWNoIGFsbG93cyB0aGUga2V5IHRvIGJlIHVzZWQgd2l0aG91dCBleHBhbnNpb25cblx0ICAgICAgICAgICAgICAgIHN1YktleVswXSA9IChzdWJLZXlbMF0gPDwgMSkgfCAoc3ViS2V5WzBdID4+PiAzMSk7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDc7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YktleVtpXSA9IHN1YktleVtpXSA+Pj4gKChpIC0gMSkgKiA0ICsgMyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBzdWJLZXlbN10gPSAoc3ViS2V5WzddIDw8IDUpIHwgKHN1YktleVs3XSA+Pj4gMjcpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBpbnZlcnNlIHN1YmtleXNcblx0ICAgICAgICAgICAgdmFyIGludlN1YktleXMgPSB0aGlzLl9pbnZTdWJLZXlzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaW52U3ViS2V5c1tpXSA9IHN1YktleXNbMTUgLSBpXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBlbmNyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fZG9DcnlwdEJsb2NrKE0sIG9mZnNldCwgdGhpcy5fc3ViS2V5cyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGRlY3J5cHRCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICB0aGlzLl9kb0NyeXB0QmxvY2soTSwgb2Zmc2V0LCB0aGlzLl9pbnZTdWJLZXlzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvQ3J5cHRCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCwgc3ViS2V5cykge1xuXHQgICAgICAgICAgICAvLyBHZXQgaW5wdXRcblx0ICAgICAgICAgICAgdGhpcy5fbEJsb2NrID0gTVtvZmZzZXRdO1xuXHQgICAgICAgICAgICB0aGlzLl9yQmxvY2sgPSBNW29mZnNldCArIDFdO1xuXG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgcGVybXV0YXRpb25cblx0ICAgICAgICAgICAgZXhjaGFuZ2VMUi5jYWxsKHRoaXMsIDQsICAweDBmMGYwZjBmKTtcblx0ICAgICAgICAgICAgZXhjaGFuZ2VMUi5jYWxsKHRoaXMsIDE2LCAweDAwMDBmZmZmKTtcblx0ICAgICAgICAgICAgZXhjaGFuZ2VSTC5jYWxsKHRoaXMsIDIsICAweDMzMzMzMzMzKTtcblx0ICAgICAgICAgICAgZXhjaGFuZ2VSTC5jYWxsKHRoaXMsIDgsICAweDAwZmYwMGZmKTtcblx0ICAgICAgICAgICAgZXhjaGFuZ2VMUi5jYWxsKHRoaXMsIDEsICAweDU1NTU1NTU1KTtcblxuXHQgICAgICAgICAgICAvLyBSb3VuZHNcblx0ICAgICAgICAgICAgZm9yICh2YXIgcm91bmQgPSAwOyByb3VuZCA8IDE2OyByb3VuZCsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgIHZhciBzdWJLZXkgPSBzdWJLZXlzW3JvdW5kXTtcblx0ICAgICAgICAgICAgICAgIHZhciBsQmxvY2sgPSB0aGlzLl9sQmxvY2s7XG5cdCAgICAgICAgICAgICAgICB2YXIgckJsb2NrID0gdGhpcy5fckJsb2NrO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBGZWlzdGVsIGZ1bmN0aW9uXG5cdCAgICAgICAgICAgICAgICB2YXIgZiA9IDA7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIGYgfD0gU0JPWF9QW2ldWygockJsb2NrIF4gc3ViS2V5W2ldKSAmIFNCT1hfTUFTS1tpXSkgPj4+IDBdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgdGhpcy5fbEJsb2NrID0gckJsb2NrO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fckJsb2NrID0gbEJsb2NrIF4gZjtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFVuZG8gc3dhcCBmcm9tIGxhc3Qgcm91bmRcblx0ICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl9sQmxvY2s7XG5cdCAgICAgICAgICAgIHRoaXMuX2xCbG9jayA9IHRoaXMuX3JCbG9jaztcblx0ICAgICAgICAgICAgdGhpcy5fckJsb2NrID0gdDtcblxuXHQgICAgICAgICAgICAvLyBGaW5hbCBwZXJtdXRhdGlvblxuXHQgICAgICAgICAgICBleGNoYW5nZUxSLmNhbGwodGhpcywgMSwgIDB4NTU1NTU1NTUpO1xuXHQgICAgICAgICAgICBleGNoYW5nZVJMLmNhbGwodGhpcywgOCwgIDB4MDBmZjAwZmYpO1xuXHQgICAgICAgICAgICBleGNoYW5nZVJMLmNhbGwodGhpcywgMiwgIDB4MzMzMzMzMzMpO1xuXHQgICAgICAgICAgICBleGNoYW5nZUxSLmNhbGwodGhpcywgMTYsIDB4MDAwMGZmZmYpO1xuXHQgICAgICAgICAgICBleGNoYW5nZUxSLmNhbGwodGhpcywgNCwgIDB4MGYwZjBmMGYpO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBvdXRwdXRcblx0ICAgICAgICAgICAgTVtvZmZzZXRdID0gdGhpcy5fbEJsb2NrO1xuXHQgICAgICAgICAgICBNW29mZnNldCArIDFdID0gdGhpcy5fckJsb2NrO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBrZXlTaXplOiA2NC8zMixcblxuXHQgICAgICAgIGl2U2l6ZTogNjQvMzIsXG5cblx0ICAgICAgICBibG9ja1NpemU6IDY0LzMyXG5cdCAgICB9KTtcblxuXHQgICAgLy8gU3dhcCBiaXRzIGFjcm9zcyB0aGUgbGVmdCBhbmQgcmlnaHQgd29yZHNcblx0ICAgIGZ1bmN0aW9uIGV4Y2hhbmdlTFIob2Zmc2V0LCBtYXNrKSB7XG5cdCAgICAgICAgdmFyIHQgPSAoKHRoaXMuX2xCbG9jayA+Pj4gb2Zmc2V0KSBeIHRoaXMuX3JCbG9jaykgJiBtYXNrO1xuXHQgICAgICAgIHRoaXMuX3JCbG9jayBePSB0O1xuXHQgICAgICAgIHRoaXMuX2xCbG9jayBePSB0IDw8IG9mZnNldDtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gZXhjaGFuZ2VSTChvZmZzZXQsIG1hc2spIHtcblx0ICAgICAgICB2YXIgdCA9ICgodGhpcy5fckJsb2NrID4+PiBvZmZzZXQpIF4gdGhpcy5fbEJsb2NrKSAmIG1hc2s7XG5cdCAgICAgICAgdGhpcy5fbEJsb2NrIF49IHQ7XG5cdCAgICAgICAgdGhpcy5fckJsb2NrIF49IHQgPDwgb2Zmc2V0O1xuXHQgICAgfVxuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgY2lwaGVydGV4dCA9IENyeXB0b0pTLkRFUy5lbmNyeXB0KG1lc3NhZ2UsIGtleSwgY2ZnKTtcblx0ICAgICAqICAgICB2YXIgcGxhaW50ZXh0ICA9IENyeXB0b0pTLkRFUy5kZWNyeXB0KGNpcGhlcnRleHQsIGtleSwgY2ZnKTtcblx0ICAgICAqL1xuXHQgICAgQy5ERVMgPSBCbG9ja0NpcGhlci5fY3JlYXRlSGVscGVyKERFUyk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogVHJpcGxlLURFUyBibG9jayBjaXBoZXIgYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgVHJpcGxlREVTID0gQ19hbGdvLlRyaXBsZURFUyA9IEJsb2NrQ2lwaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9rZXk7XG5cdCAgICAgICAgICAgIHZhciBrZXlXb3JkcyA9IGtleS53b3Jkcztcblx0ICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBrZXkgbGVuZ3RoIGlzIHZhbGlkICg2NCwgMTI4IG9yID49IDE5MiBiaXQpXG5cdCAgICAgICAgICAgIGlmIChrZXlXb3Jkcy5sZW5ndGggIT09IDIgJiYga2V5V29yZHMubGVuZ3RoICE9PSA0ICYmIGtleVdvcmRzLmxlbmd0aCA8IDYpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBrZXkgbGVuZ3RoIC0gM0RFUyByZXF1aXJlcyB0aGUga2V5IGxlbmd0aCB0byBiZSA2NCwgMTI4LCAxOTIgb3IgPjE5Mi4nKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEV4dGVuZCB0aGUga2V5IGFjY29yZGluZyB0byB0aGUga2V5aW5nIG9wdGlvbnMgZGVmaW5lZCBpbiAzREVTIHN0YW5kYXJkXG5cdCAgICAgICAgICAgIHZhciBrZXkxID0ga2V5V29yZHMuc2xpY2UoMCwgMik7XG5cdCAgICAgICAgICAgIHZhciBrZXkyID0ga2V5V29yZHMubGVuZ3RoIDwgNCA/IGtleVdvcmRzLnNsaWNlKDAsIDIpIDoga2V5V29yZHMuc2xpY2UoMiwgNCk7XG5cdCAgICAgICAgICAgIHZhciBrZXkzID0ga2V5V29yZHMubGVuZ3RoIDwgNiA/IGtleVdvcmRzLnNsaWNlKDAsIDIpIDoga2V5V29yZHMuc2xpY2UoNCwgNik7XG5cblx0ICAgICAgICAgICAgLy8gQ3JlYXRlIERFUyBpbnN0YW5jZXNcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMSA9IERFUy5jcmVhdGVFbmNyeXB0b3IoV29yZEFycmF5LmNyZWF0ZShrZXkxKSk7XG5cdCAgICAgICAgICAgIHRoaXMuX2RlczIgPSBERVMuY3JlYXRlRW5jcnlwdG9yKFdvcmRBcnJheS5jcmVhdGUoa2V5MikpO1xuXHQgICAgICAgICAgICB0aGlzLl9kZXMzID0gREVTLmNyZWF0ZUVuY3J5cHRvcihXb3JkQXJyYXkuY3JlYXRlKGtleTMpKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgZW5jcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2RlczEuZW5jcnlwdEJsb2NrKE0sIG9mZnNldCk7XG5cdCAgICAgICAgICAgIHRoaXMuX2RlczIuZGVjcnlwdEJsb2NrKE0sIG9mZnNldCk7XG5cdCAgICAgICAgICAgIHRoaXMuX2RlczMuZW5jcnlwdEJsb2NrKE0sIG9mZnNldCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGRlY3J5cHRCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICB0aGlzLl9kZXMzLmRlY3J5cHRCbG9jayhNLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICB0aGlzLl9kZXMyLmVuY3J5cHRCbG9jayhNLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICB0aGlzLl9kZXMxLmRlY3J5cHRCbG9jayhNLCBvZmZzZXQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBrZXlTaXplOiAxOTIvMzIsXG5cblx0ICAgICAgICBpdlNpemU6IDY0LzMyLFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiA2NC8zMlxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuVHJpcGxlREVTLmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuVHJpcGxlREVTLmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xuXHQgICAgICovXG5cdCAgICBDLlRyaXBsZURFUyA9IEJsb2NrQ2lwaGVyLl9jcmVhdGVIZWxwZXIoVHJpcGxlREVTKTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5UcmlwbGVERVM7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAodW5kZWZpbmVkKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZTtcblx0ICAgIHZhciBYMzJXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogeDY0IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfeDY0ID0gQy54NjQgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBIDY0LWJpdCB3b3JkLlxuXHQgICAgICovXG5cdCAgICB2YXIgWDY0V29yZCA9IENfeDY0LldvcmQgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIDY0LWJpdCB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGhpZ2ggVGhlIGhpZ2ggMzIgYml0cy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbG93IFRoZSBsb3cgMzIgYml0cy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHg2NFdvcmQgPSBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgwMDAxMDIwMywgMHgwNDA1MDYwNyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGhpZ2gsIGxvdykge1xuXHQgICAgICAgICAgICB0aGlzLmhpZ2ggPSBoaWdoO1xuXHQgICAgICAgICAgICB0aGlzLmxvdyA9IGxvdztcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBCaXR3aXNlIE5PVHMgdGhpcyB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIG5lZ2F0aW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbmVnYXRlZCA9IHg2NFdvcmQubm90KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgLy8gbm90OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIHZhciBoaWdoID0gfnRoaXMuaGlnaDtcblx0ICAgICAgICAgICAgLy8gdmFyIGxvdyA9IH50aGlzLmxvdztcblxuXHQgICAgICAgICAgICAvLyByZXR1cm4gWDY0V29yZC5jcmVhdGUoaGlnaCwgbG93KTtcblx0ICAgICAgICAvLyB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQml0d2lzZSBBTkRzIHRoaXMgd29yZCB3aXRoIHRoZSBwYXNzZWQgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7WDY0V29yZH0gd29yZCBUaGUgeDY0LVdvcmQgdG8gQU5EIHdpdGggdGhpcyB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIEFORGluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGFuZGVkID0geDY0V29yZC5hbmQoYW5vdGhlclg2NFdvcmQpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIC8vIGFuZDogZnVuY3Rpb24gKHdvcmQpIHtcblx0ICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSB0aGlzLmhpZ2ggJiB3b3JkLmhpZ2g7XG5cdCAgICAgICAgICAgIC8vIHZhciBsb3cgPSB0aGlzLmxvdyAmIHdvcmQubG93O1xuXG5cdCAgICAgICAgICAgIC8vIHJldHVybiBYNjRXb3JkLmNyZWF0ZShoaWdoLCBsb3cpO1xuXHQgICAgICAgIC8vIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBCaXR3aXNlIE9ScyB0aGlzIHdvcmQgd2l0aCB0aGUgcGFzc2VkIHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1g2NFdvcmR9IHdvcmQgVGhlIHg2NC1Xb3JkIHRvIE9SIHdpdGggdGhpcyB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIE9SaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgb3JlZCA9IHg2NFdvcmQub3IoYW5vdGhlclg2NFdvcmQpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIC8vIG9yOiBmdW5jdGlvbiAod29yZCkge1xuXHQgICAgICAgICAgICAvLyB2YXIgaGlnaCA9IHRoaXMuaGlnaCB8IHdvcmQuaGlnaDtcblx0ICAgICAgICAgICAgLy8gdmFyIGxvdyA9IHRoaXMubG93IHwgd29yZC5sb3c7XG5cblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XG5cdCAgICAgICAgLy8gfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEJpdHdpc2UgWE9ScyB0aGlzIHdvcmQgd2l0aCB0aGUgcGFzc2VkIHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1g2NFdvcmR9IHdvcmQgVGhlIHg2NC1Xb3JkIHRvIFhPUiB3aXRoIHRoaXMgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciBYT1JpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB4b3JlZCA9IHg2NFdvcmQueG9yKGFub3RoZXJYNjRXb3JkKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICAvLyB4b3I6IGZ1bmN0aW9uICh3b3JkKSB7XG5cdCAgICAgICAgICAgIC8vIHZhciBoaWdoID0gdGhpcy5oaWdoIF4gd29yZC5oaWdoO1xuXHQgICAgICAgICAgICAvLyB2YXIgbG93ID0gdGhpcy5sb3cgXiB3b3JkLmxvdztcblxuXHQgICAgICAgICAgICAvLyByZXR1cm4gWDY0V29yZC5jcmVhdGUoaGlnaCwgbG93KTtcblx0ICAgICAgICAvLyB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogU2hpZnRzIHRoaXMgd29yZCBuIGJpdHMgdG8gdGhlIGxlZnQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGJpdHMgdG8gc2hpZnQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgc2hpZnRpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzaGlmdGVkID0geDY0V29yZC5zaGlmdEwoMjUpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIC8vIHNoaWZ0TDogZnVuY3Rpb24gKG4pIHtcblx0ICAgICAgICAgICAgLy8gaWYgKG4gPCAzMikge1xuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSAodGhpcy5oaWdoIDw8IG4pIHwgKHRoaXMubG93ID4+PiAoMzIgLSBuKSk7XG5cdCAgICAgICAgICAgICAgICAvLyB2YXIgbG93ID0gdGhpcy5sb3cgPDwgbjtcblx0ICAgICAgICAgICAgLy8gfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBoaWdoID0gdGhpcy5sb3cgPDwgKG4gLSAzMik7XG5cdCAgICAgICAgICAgICAgICAvLyB2YXIgbG93ID0gMDtcblx0ICAgICAgICAgICAgLy8gfVxuXG5cdCAgICAgICAgICAgIC8vIHJldHVybiBYNjRXb3JkLmNyZWF0ZShoaWdoLCBsb3cpO1xuXHQgICAgICAgIC8vIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBTaGlmdHMgdGhpcyB3b3JkIG4gYml0cyB0byB0aGUgcmlnaHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGJpdHMgdG8gc2hpZnQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgc2hpZnRpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzaGlmdGVkID0geDY0V29yZC5zaGlmdFIoNyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgLy8gc2hpZnRSOiBmdW5jdGlvbiAobikge1xuXHQgICAgICAgICAgICAvLyBpZiAobiA8IDMyKSB7XG5cdCAgICAgICAgICAgICAgICAvLyB2YXIgbG93ID0gKHRoaXMubG93ID4+PiBuKSB8ICh0aGlzLmhpZ2ggPDwgKDMyIC0gbikpO1xuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSB0aGlzLmhpZ2ggPj4+IG47XG5cdCAgICAgICAgICAgIC8vIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyB2YXIgbG93ID0gdGhpcy5oaWdoID4+PiAobiAtIDMyKTtcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBoaWdoID0gMDtcblx0ICAgICAgICAgICAgLy8gfVxuXG5cdCAgICAgICAgICAgIC8vIHJldHVybiBYNjRXb3JkLmNyZWF0ZShoaWdoLCBsb3cpO1xuXHQgICAgICAgIC8vIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSb3RhdGVzIHRoaXMgd29yZCBuIGJpdHMgdG8gdGhlIGxlZnQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGJpdHMgdG8gcm90YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIHJvdGF0aW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcm90YXRlZCA9IHg2NFdvcmQucm90TCgyNSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgLy8gcm90TDogZnVuY3Rpb24gKG4pIHtcblx0ICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hpZnRMKG4pLm9yKHRoaXMuc2hpZnRSKDY0IC0gbikpO1xuXHQgICAgICAgIC8vIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSb3RhdGVzIHRoaXMgd29yZCBuIGJpdHMgdG8gdGhlIHJpZ2h0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBiaXRzIHRvIHJvdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciByb3RhdGluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHJvdGF0ZWQgPSB4NjRXb3JkLnJvdFIoNyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgLy8gcm90UjogZnVuY3Rpb24gKG4pIHtcblx0ICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hpZnRSKG4pLm9yKHRoaXMuc2hpZnRMKDY0IC0gbikpO1xuXHQgICAgICAgIC8vIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIHRoaXMgd29yZCB3aXRoIHRoZSBwYXNzZWQgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7WDY0V29yZH0gd29yZCBUaGUgeDY0LVdvcmQgdG8gYWRkIHdpdGggdGhpcyB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIGFkZGluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGFkZGVkID0geDY0V29yZC5hZGQoYW5vdGhlclg2NFdvcmQpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIC8vIGFkZDogZnVuY3Rpb24gKHdvcmQpIHtcblx0ICAgICAgICAgICAgLy8gdmFyIGxvdyA9ICh0aGlzLmxvdyArIHdvcmQubG93KSB8IDA7XG5cdCAgICAgICAgICAgIC8vIHZhciBjYXJyeSA9IChsb3cgPj4+IDApIDwgKHRoaXMubG93ID4+PiAwKSA/IDEgOiAwO1xuXHQgICAgICAgICAgICAvLyB2YXIgaGlnaCA9ICh0aGlzLmhpZ2ggKyB3b3JkLmhpZ2ggKyBjYXJyeSkgfCAwO1xuXG5cdCAgICAgICAgICAgIC8vIHJldHVybiBYNjRXb3JkLmNyZWF0ZShoaWdoLCBsb3cpO1xuXHQgICAgICAgIC8vIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFuIGFycmF5IG9mIDY0LWJpdCB3b3Jkcy5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgQ3J5cHRvSlMueDY0LldvcmQgb2JqZWN0cy5cblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFg2NFdvcmRBcnJheSA9IENfeDY0LldvcmRBcnJheSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgQ3J5cHRvSlMueDY0LldvcmQgb2JqZWN0cy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLng2NC5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLng2NC5Xb3JkQXJyYXkuY3JlYXRlKFtcblx0ICAgICAgICAgKiAgICAgICAgIENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDAwMDEwMjAzLCAweDA0MDUwNjA3KSxcblx0ICAgICAgICAgKiAgICAgICAgIENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDE4MTkxYTFiLCAweDFjMWQxZTFmKVxuXHQgICAgICAgICAqICAgICBdKTtcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMueDY0LldvcmRBcnJheS5jcmVhdGUoW1xuXHQgICAgICAgICAqICAgICAgICAgQ3J5cHRvSlMueDY0LldvcmQuY3JlYXRlKDB4MDAwMTAyMDMsIDB4MDQwNTA2MDcpLFxuXHQgICAgICAgICAqICAgICAgICAgQ3J5cHRvSlMueDY0LldvcmQuY3JlYXRlKDB4MTgxOTFhMWIsIDB4MWMxZDFlMWYpXG5cdCAgICAgICAgICogICAgIF0sIDEwKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA4O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgNjQtYml0IHdvcmQgYXJyYXkgdG8gYSAzMi1iaXQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0NyeXB0b0pTLmxpYi5Xb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheSdzIGRhdGEgYXMgYSAzMi1iaXQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHgzMldvcmRBcnJheSA9IHg2NFdvcmRBcnJheS50b1gzMigpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRvWDMyOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgeDY0V29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgeDY0V29yZHNMZW5ndGggPSB4NjRXb3Jkcy5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgeDMyV29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4NjRXb3Jkc0xlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgeDY0V29yZCA9IHg2NFdvcmRzW2ldO1xuXHQgICAgICAgICAgICAgICAgeDMyV29yZHMucHVzaCh4NjRXb3JkLmhpZ2gpO1xuXHQgICAgICAgICAgICAgICAgeDMyV29yZHMucHVzaCh4NjRXb3JkLmxvdyk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gWDMyV29yZEFycmF5LmNyZWF0ZSh4MzJXb3JkcywgdGhpcy5zaWdCeXRlcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmRBcnJheX0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSB4NjRXb3JkQXJyYXkuY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gQ2xvbmUgXCJ3b3Jkc1wiIGFycmF5XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IGNsb25lLndvcmRzID0gdGhpcy53b3Jkcy5zbGljZSgwKTtcblxuXHQgICAgICAgICAgICAvLyBDbG9uZSBlYWNoIFg2NFdvcmQgb2JqZWN0XG5cdCAgICAgICAgICAgIHZhciB3b3Jkc0xlbmd0aCA9IHdvcmRzLmxlbmd0aDtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkc0xlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpXSA9IHdvcmRzW2ldLmNsb25lKCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlM7XG5cbn0pKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xuXHQvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcblx0Ly8gSG93ZXZlciwgdGhpcyBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gQ2hyb21lIGFwcHMuXG5cdGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH1cblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH1cblx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblx0dGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcbn1cblxudmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBnbG9iYWwuZmV0Y2g7XG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBhbmQgV2VicGFjay5cbmlmIChnbG9iYWwuZmV0Y2gpIHtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gZ2xvYmFsLmZldGNoLmJpbmQoZ2xvYmFsKTtcbn1cblxuZXhwb3J0cy5IZWFkZXJzID0gZ2xvYmFsLkhlYWRlcnM7XG5leHBvcnRzLlJlcXVlc3QgPSBnbG9iYWwuUmVxdWVzdDtcbmV4cG9ydHMuUmVzcG9uc2UgPSBnbG9iYWwuUmVzcG9uc2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5vdGlvbkFkYXB0ZXIgPSB2b2lkIDA7XG52YXIgbm90aW9uXzEgPSByZXF1aXJlKFwiLi9ub3Rpb25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOb3Rpb25BZGFwdGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub3Rpb25fMS5Ob3Rpb25BZGFwdGVyOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5vdGlvbkFkYXB0ZXIgPSB2b2lkIDA7XG4vLyByZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xuY29uc3QgY2xpZW50XzEgPSByZXF1aXJlKFwiQG5vdGlvbmhxL2NsaWVudFwiKTtcbi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7IC8vd3JpdGVUb0ZpbGVcbi8qIEFkYXB0ZXIgdG8gaW50ZXJhY3Qgd2l0aCBOb3Rpb24gQVBJIGRpcmVjdGx5ICovXG5jbGFzcyBOb3Rpb25BZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihhcGlLZXkpIHtcbiAgICAgICAgLyogTWV0aG9kIHRvIGdldCBhIE5vdGlvbiBkYXRhYmFzZSAqL1xuICAgICAgICB0aGlzLmdldERhdGFiYXNlID0gYXN5bmMgKGRhdGFiYXNlSWQpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm5vdGlvbi5kYXRhYmFzZXMucmV0cmlldmUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZV9pZDogZGF0YWJhc2VJZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyB3cml0ZVRvRmlsZShyZXNwb25zZSwgXCJnZXQtZGItcmVzcG9uc2UuanNvblwiLCBcImRhdGFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgZGF0YWJhc2VcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKiBNZXRob2QgdG8gcXVlcnkgYSBOb3Rpb24gZGF0YWJhc2UgKi9cbiAgICAgICAgdGhpcy5xdWVyeURhdGFiYXNlID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5ub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAvLyB3cml0ZVRvRmlsZShyZXNwb25zZSwgXCJxdWVyeS1kYi1yZXNwb25zZS5qc29uXCIsIFwiZGF0YVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHF1ZXJ5IGRhdGFiYXNlXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogTWV0aG9kIHRvIGdldCBhIE5vdGlvbiBibG9jayAqL1xuICAgICAgICB0aGlzLmdldEJsb2NrID0gYXN5bmMgKGJsb2NrSWQpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm5vdGlvbi5ibG9ja3MucmV0cmlldmUoe1xuICAgICAgICAgICAgICAgICAgICBibG9ja19pZDogYmxvY2tJZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyB3cml0ZVRvRmlsZShyZXNwb25zZSwgXCJnZXQtYmxvY2stcmVzcG9uc2UuanNvblwiLCBcImRhdGFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBnZXQgYmxvY2tcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKiBNZXRob2QgdG8gZ2V0IHRoZSBjaGlsZHJlbiBvZiBhIE5vdGlvbiBibG9jayAqL1xuICAgICAgICB0aGlzLmdldEJsb2NrQ2hpbGRyZW4gPSBhc3luYyAoYmxvY2tJZCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tDaGlsZHJlbiA9IGF3YWl0IHRoaXMubm90aW9uLmJsb2Nrcy5jaGlsZHJlbi5saXN0KHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tfaWQ6IGJsb2NrSWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJsb2NrQ2hpbGRyZW4uaGFzX21vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nQmxvY2tzID0gYXdhaXQgdGhpcy5ub3Rpb24uYmxvY2tzLmNoaWxkcmVuLmxpc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfaWQ6IGJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydF9jdXJzb3I6IGJsb2NrQ2hpbGRyZW4ubmV4dF9jdXJzb3IsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBibG9ja0NoaWxkcmVuID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBibG9ja0NoaWxkcmVuLm9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRfY3Vyc29yOiByZW1haW5pbmdCbG9ja3MubmV4dF9jdXJzb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNfbW9yZTogcmVtYWluaW5nQmxvY2tzLmhhc19tb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogWy4uLmJsb2NrQ2hpbGRyZW4ucmVzdWx0cywgLi4ucmVtYWluaW5nQmxvY2tzLnJlc3VsdHNdLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB3cml0ZVRvRmlsZShibG9ja0NoaWxkcmVuLCBcImdldC1ibG9jay1jaGlsZHJlbi1yZXNwb25zZS5qc29uXCIsIFwiZGF0YVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2tDaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IGJsb2NrIGNoaWxkcmVuXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogTWV0aG9kIHRvIGFwcGVuZCBuZXcgY2hpbGRyZW4gdG8gYSBOb3Rpb24gYmxvY2sgKi9cbiAgICAgICAgdGhpcy5hcHBlbmRCbG9ja0NoaWxkcmVuID0gYXN5bmMgKGJsb2NrSWQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMubm90aW9uLmJsb2Nrcy5jaGlsZHJlbi5hcHBlbmQoe1xuICAgICAgICAgICAgICAgICAgICBibG9ja19pZDogYmxvY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gYXBwZW5kIGJsb2NrIGNoaWxkcmVuXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogTWV0aG9kIHRvIGdldCBhIE5vdGlvbiBwYWdlICovXG4gICAgICAgIHRoaXMuZ2V0UGFnZSA9IGFzeW5jIChwYWdlSWQpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm5vdGlvbi5wYWdlcy5yZXRyaWV2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VfaWQ6IHBhZ2VJZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyB3cml0ZVRvRmlsZShyZXNwb25zZSwgXCJnZXQtcGFnZS1yZXNwb25zZS5qc29uXCIsIFwiZGF0YVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdldCBwYWdlXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogTWV0aG9kIHRvIGNyZWF0ZSBhIE5vdGlvbiBwYWdlICovXG4gICAgICAgIHRoaXMuY3JlYXRlUGFnZSA9IGFzeW5jIChjcmVhdGVQYWdlUGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2VfaWQ6IGNyZWF0ZVBhZ2VQYXJhbXMucGFyZW50RGF0YWJhc2VJZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogKDAsIHV0aWxzXzEubWFrZVBhZ2VQcm9wZXJ0aWVzKShjcmVhdGVQYWdlUGFyYW1zLnByb3BlcnRpZXMpLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogY3JlYXRlUGFnZVBhcmFtcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChjcmVhdGVQYWdlUGFyYW1zLmljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVtcImljb25cIl0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogY3JlYXRlUGFnZVBhcmFtcy5pY29uLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlUGFnZVBhcmFtcy5jb3Zlcikge1xuICAgICAgICAgICAgICAgICAgICBwYWdlW1wiY292ZXJcIl0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImV4dGVybmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY3JlYXRlUGFnZVBhcmFtcy5jb3ZlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5ub3Rpb24ucGFnZXMuY3JlYXRlKHBhZ2UpO1xuICAgICAgICAgICAgICAgIC8vIHdyaXRlVG9GaWxlKHJlc3BvbnNlLCBcImNyZWF0ZS1wYWdlLXJlc3BvbnNlLmpzb25cIiwgXCJkYXRhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHBhZ2VcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2UgPSBhc3luYyAodXBkYXRlUGFnZVBhcmFtcykgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlUGFnZVBhcmFtcy5pc0RlbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5ub3Rpb24ucGFnZXMudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VfaWQ6IHVwZGF0ZVBhZ2VQYXJhbXMucGFnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJjaGl2ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZV9pZDogdXBkYXRlUGFnZVBhcmFtcy5wYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiAoMCwgdXRpbHNfMS5tYWtlUGFnZVByb3BlcnRpZXMpKHVwZGF0ZVBhZ2VQYXJhbXMucHJvcGVydGllcyksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLm5vdGlvbi5wYWdlcy51cGRhdGUocGFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBhcmNoaXZlIHBhZ2VcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKiBNZXRob2QgdG8gZ2V0IGEgTm90aW9uIHBhZ2UgKi9cbiAgICAgICAgdGhpcy5hcmNoaXZlUGFnZSA9IGFzeW5jIChwYWdlSWQpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm5vdGlvbi5wYWdlcy51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwYWdlX2lkOiBwYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIGFyY2hpdmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gd3JpdGVUb0ZpbGUocmVzcG9uc2UsIFwiZ2V0LXBhZ2UtcmVzcG9uc2UuanNvblwiLCBcImRhdGFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBhcmNoaXZlIHBhZ2VcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5vdGlvbiA9IG5ldyBjbGllbnRfMS5DbGllbnQoeyBhdXRoOiBhcGlLZXkgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Ob3Rpb25BZGFwdGVyID0gTm90aW9uQWRhcHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbW9qaSA9IGV4cG9ydHMuQmxvY2tUeXBlID0gdm9pZCAwO1xudmFyIG5vdGlvbl8xID0gcmVxdWlyZShcIi4vbm90aW9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQmxvY2tUeXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub3Rpb25fMS5CbG9ja1R5cGU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFbW9qaVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm90aW9uXzEuRW1vamk7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRW1vamkgPSBleHBvcnRzLkJsb2NrVHlwZSA9IHZvaWQgMDtcbnZhciBCbG9ja1R5cGU7XG4oZnVuY3Rpb24gKEJsb2NrVHlwZSkge1xuICAgIEJsb2NrVHlwZVtcInF1b3RlXCJdID0gXCJxdW90ZVwiO1xuICAgIEJsb2NrVHlwZVtcImhlYWRpbmdfMVwiXSA9IFwiaGVhZGluZ18xXCI7XG4gICAgQmxvY2tUeXBlW1wiaGVhZGluZ18yXCJdID0gXCJoZWFkaW5nXzJcIjtcbiAgICBCbG9ja1R5cGVbXCJoZWFkaW5nXzNcIl0gPSBcImhlYWRpbmdfM1wiO1xuICAgIEJsb2NrVHlwZVtcImJ1bGxldGVkX2xpc3RfaXRlbVwiXSA9IFwiYnVsbGV0ZWRfbGlzdF9pdGVtXCI7XG4gICAgQmxvY2tUeXBlW1wicGFyYWdyYXBoXCJdID0gXCJwYXJhZ3JhcGhcIjtcbn0pKEJsb2NrVHlwZSA9IGV4cG9ydHMuQmxvY2tUeXBlIHx8IChleHBvcnRzLkJsb2NrVHlwZSA9IHt9KSk7XG52YXIgRW1vamk7XG4oZnVuY3Rpb24gKEVtb2ppKSB7XG4gICAgRW1vamlbXCJcXHVEODNEXFx1RENENlwiXSA9IFwiXFx1RDgzRFxcdURDRDZcIjtcbiAgICBFbW9qaVtcIlxcdUQ4M0RcXHVEQ0RBXCJdID0gXCJcXHVEODNEXFx1RENEQVwiO1xuICAgIEVtb2ppW1wiXFx1RDgzRFxcdUREMTZcIl0gPSBcIlxcdUQ4M0RcXHVERDE2XCI7XG59KShFbW9qaSA9IGV4cG9ydHMuRW1vamkgfHwgKGV4cG9ydHMuRW1vamkgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmV4dHJhY3RCb29rID0gdm9pZCAwO1xuY29uc3QgaW50ZXJmYWNlc18xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZXNcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIFVybHM7XG4oZnVuY3Rpb24gKFVybHMpIHtcbiAgICBVcmxzW1wiQW1hem9uXCJdID0gXCJodHRwczovL3JlYWQuYW1hem9uLmNvbS9ub3RlYm9va1wiO1xuICAgIFVybHNbXCJHb29nbGVQbGF5XCJdID0gXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbVwiO1xufSkoVXJscyB8fCAoVXJscyA9IHt9KSk7XG5jb25zdCBleHRyYWN0Qm9vayA9ICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBpZiAodXJsID09IFVybHMuQW1hem9uLnZhbHVlT2YoKSkge1xuICAgICAgICByZXR1cm4gZXh0cmFjdEFtYXpvbigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59O1xuZXhwb3J0cy5leHRyYWN0Qm9vayA9IGV4dHJhY3RCb29rO1xuY29uc3QgZXh0cmFjdEFtYXpvbiA9ICgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbm5vdGF0aW9uLXNjcm9sbGVyID4gZGl2ID4gZGl2LmEtcm93LmEtc3BhY2luZy1iYXNlID4gZGl2LmEtY29sdW1uLmEtc3BhbjUgPiBoM1wiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHRDb250ZW50O1xuICAgICAgICBjb25zb2xlLmxvZyhgdGl0bGU6ICR7dGl0bGV9YCk7XG4gICAgICAgIGNvbnN0IGF1dGhvciA9IChfYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYW5ub3RhdGlvbi1zY3JvbGxlciA+IGRpdiA+IGRpdi5hLXJvdy5hLXNwYWNpbmctYmFzZSA+IGRpdi5hLWNvbHVtbi5hLXNwYW41ID4gcC5hLXNwYWNpbmctbm9uZS5hLXNwYWNpbmctdG9wLW1pY3JvLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5LmtwLW5vdGVib29rLXNlbGVjdGFibGUua3Atbm90ZWJvb2stbWV0YWRhdGFcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc29sZS5sb2coYGF1dGhvcjogJHthdXRob3J9YCk7XG4gICAgICAgIGNvbnN0IGJvb2tMaW5rID0gKF9jID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fubm90YXRpb24tc2Nyb2xsZXIgPiBkaXYgPiBkaXYuYS1yb3cuYS1zcGFjaW5nLWJhc2UgPiBkaXYuYS1jb2x1bW4uYS1zcGFuMS5rcC1ub3RlYm9vay1ib29rY292ZXItY29udGFpbmVyID4gYVwiKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGBib29rTGluazogJHtib29rTGlua31gKTtcbiAgICAgICAgY29uc3QgaW1hZ2VMaW5rID0gKF9lID0gKF9kID0gZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Fubm90YXRpb24tc2Nyb2xsZXIgPiBkaXYgPiBkaXYuYS1yb3cuYS1zcGFjaW5nLWJhc2UgPiBkaXYuYS1jb2x1bW4uYS1zcGFuMS5rcC1ub3RlYm9vay1ib29rY292ZXItY29udGFpbmVyID4gYSA+IHNwYW4gPiBpbWdcIikpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5nZXRBdHRyaWJ1dGUoXCJzcmNcIikpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5yZXBsYWNlKFwiLl9TWTE2MFwiLCBcIlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYGltZ0xpbms6ICR7aW1hZ2VMaW5rfWApO1xuICAgICAgICBjb25zdCBfaGlnaGxpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIja3Atbm90ZWJvb2stYW5ub3RhdGlvbnMgPiBkaXYuYS1yb3cuYS1zcGFjaW5nLWJhc2VcIik7XG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodHMgPSBBcnJheS5mcm9tKF9oaWdobGlnaHRzKS5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICAgICAgICAgIGNvbnN0IGxvYyA9IHBhcnNlSW50KChfYiA9IChfYSA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIja3AtYW5ub3RhdGlvbi1sb2NhdGlvblwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIi0xXCIpO1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gKF9lID0gKF9kID0gKF9jID0gZWxcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNhbm5vdGF0aW9uSGlnaGxpZ2h0SGVhZGVyXCIpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5zcGxpdChcIiBcIilbMF0pID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIjaGlnaGxpZ2h0LCNub3RlXCIpO1xuICAgICAgICAgICAgaWYgKCh0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRleHQuaWQpID09PSBcIm5vdGVcIikge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJncmF5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmxvY2tUeXBlO1xuICAgICAgICAgICAgc3dpdGNoIChjb2xvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUeXBlID0gaW50ZXJmYWNlc18xLkJsb2NrVHlwZS5idWxsZXRlZF9saXN0X2l0ZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaW5rXCI6XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVHlwZSA9IGludGVyZmFjZXNfMS5CbG9ja1R5cGUucGFyYWdyYXBoO1xuICAgICAgICAgICAgICAgICAgICBjb2xvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICAgICAgICAgICAgICBibG9ja1R5cGUgPSBpbnRlcmZhY2VzXzEuQmxvY2tUeXBlLmhlYWRpbmdfMztcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImRlZmF1bHQ7XCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUeXBlID0gaW50ZXJmYWNlc18xLkJsb2NrVHlwZS5xdW90ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcInBpbmtcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUeXBlID0gaW50ZXJmYWNlc18xLkJsb2NrVHlwZS5xdW90ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcInJlZF9iYWNrZ3JvdW5kXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbGlwID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IGJsb2NrVHlwZSxcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogbG9jLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgICB0ZXh0OiAoX2YgPSB0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRleHQudGV4dENvbnRlbnQpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6IGDimqDvuI8gQCAke2xvY31gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBjbGlwO1xuICAgICAgICB9KTtcbiAgICAgICAgKDAsIHV0aWxzXzEudXBkYXRlVG9hc3QpKGBQcm9jZXNzZWQgJHtoaWdobGlnaHRzLmxlbmd0aH0gaGlnaGxpZ2h0c2ApO1xuICAgICAgICBjb25zdCBib29rID0ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlICE9PSBudWxsICYmIHRpdGxlICE9PSB2b2lkIDAgPyB0aXRsZSA6IFwiQXV0aG9yIHdhc24ndCBpbnNwaXJlZCFcIixcbiAgICAgICAgICAgIGF1dGhvcjogYXV0aG9yICE9PSBudWxsICYmIGF1dGhvciAhPT0gdm9pZCAwID8gYXV0aG9yIDogXCJBbm9ueW1vdXNcIixcbiAgICAgICAgICAgIGNsaXBzOiBoaWdobGlnaHRzLFxuICAgICAgICAgICAgYm9va1VybDogYm9va0xpbmsgIT09IG51bGwgJiYgYm9va0xpbmsgIT09IHZvaWQgMCA/IGJvb2tMaW5rIDogXCJodHRwOi8vdGhlLXZvaWQuY29tXCIsXG4gICAgICAgICAgICBpbWdVcmw6IGltYWdlTGluayxcbiAgICAgICAgICAgIGhhc2g6IFwiMDpub25lXCJcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmNvbmZpcm0oXCJHbyB0byByZWFkLmFtYXpvbi5jb20vbm90ZWJvb2tzID9cIik7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9yZWFkLmFtYXpvbi5jb20vbm90ZWJvb2tcIiwgXCJfYmxhbmtcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXh0cmFjdEJvb2sgPSBleHBvcnRzLnBhcnNlQm9vayA9IGV4cG9ydHMuTm90aW9uID0gdm9pZCAwO1xudmFyIG5vdGlvbl8xID0gcmVxdWlyZShcIi4vbm90aW9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTm90aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub3Rpb25fMS5Ob3Rpb247IH0gfSk7XG52YXIgcGFyc2VyXzEgPSByZXF1aXJlKFwiLi9wYXJzZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZUJvb2tcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBhcnNlcl8xLnBhcnNlQm9vazsgfSB9KTtcbnZhciBib29rX2V4dHJhY3Rvcl8xID0gcmVxdWlyZShcIi4vYm9va19leHRyYWN0b3JcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJleHRyYWN0Qm9va1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm9va19leHRyYWN0b3JfMS5leHRyYWN0Qm9vazsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ob3Rpb24gPSB2b2lkIDA7XG4vLyByZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xuY29uc3QgYWRhcHRlcnNfMSA9IHJlcXVpcmUoXCIuLi9hZGFwdGVyc1wiKTtcbmNvbnN0IGludGVyZmFjZXNfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2VzXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIE5vdGlvbiB7XG4gICAgY29uc3RydWN0b3IoYXBpS2V5LCBib29rRGJJZCkge1xuICAgICAgICAvKiBNZXRob2QgdG8gZ2V0IE5vdGlvbiBibG9jayBpZCBvZiB0aGUgTm90aW9uIHBhZ2UgZ2l2ZW4gdGhlIGJvb2sgbmFtZSAqL1xuICAgICAgICB0aGlzLmdldElkRnJvbUJvb2tOYW1lID0gYXN5bmMgKGJvb2tOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMubm90aW9uLnF1ZXJ5RGF0YWJhc2Uoe1xuICAgICAgICAgICAgICAgIGRhdGFiYXNlX2lkOiB0aGlzLmJvb2tEYklkLFxuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBvcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxdWFsczogYm9va05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgW2Jvb2tdID0gcmVzcG9uc2UucmVzdWx0cztcbiAgICAgICAgICAgIGlmIChib29rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGJvb2suaWQsXG4gICAgICAgICAgICAgICAgICAgIFN5bmNIYXNoOiBib29rLnByb3BlcnRpZXMuc3luYy5yaWNoX3RleHRbMF0udGV4dC5jb250ZW50XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKiBNZXRob2QgdG8gc3luYyBoaWdobGlnaHRzIHRvIG5vdGlvbiAqL1xuICAgICAgICB0aGlzLnN5bmNIaWdobGlnaHRzID0gYXN5bmMgKGJvb2spID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEudXBkYXRlVG9hc3QpKGA8YnI+8J+UgSBTeW5jaW5nIGJvb2s6ICR7Ym9vay50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICBsZXQgX2Jvb2tEYiA9IGF3YWl0IHRoaXMuZ2V0SWRGcm9tQm9va05hbWUoYm9vay50aXRsZSk7XG4gICAgICAgICAgICAgICAgbGV0IGJvb2tJZCA9IF9ib29rRGIgPT09IG51bGwgfHwgX2Jvb2tEYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Jvb2tEYi5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzeW5jID0gKDAsIHV0aWxzXzEuZ2V0VW5zeW5jZWRIaWdobGlnaHRzKShib29rLCAoX2EgPSBfYm9va0RiID09PSBudWxsIHx8IF9ib29rRGIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ib29rRGIuU3luY0hhc2gpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiMDpcIik7XG4gICAgICAgICAgICAgICAgaWYgKGJvb2tJZCAmJiBzeW5jLm5lZWRzRnVsbFN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEudXBkYXRlVG9hc3QpKGA8YnI+4pqg77iPICBIaWdobGlnaHRzIGNoYW5nZWQsIGJvb2sgd2lsbCBiZSBkZWxldGVkIWApO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm5vdGlvbi5hcmNoaXZlUGFnZShib29rSWQpO1xuICAgICAgICAgICAgICAgICAgICBib29rSWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzeW5jLmNsaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvb2tJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEudXBkYXRlVG9hc3QpKGA8YnI+8J+TmiBCb29rIGFscmVhZHkgcHJlc2VudCwgYXBwZW5kaW5nIGhpZ2hsaWdodHNgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubm90aW9uLmFwcGVuZEJsb2NrQ2hpbGRyZW4oYm9va0lkLCAoMCwgdXRpbHNfMS5tYWtlQmxvY2tzKShzeW5jLmNsaXBzLCBpbnRlcmZhY2VzXzEuQmxvY2tUeXBlLnF1b3RlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm5vdGlvbi51cGRhdGVQYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlSWQ6IGJvb2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzeW5jLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29rTmFtZTogc3luYy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBzeW5jLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogc3luYy5oYXNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29rVXJsOiBzeW5jLmJvb2tVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLnVwZGF0ZVRvYXN0KShgPGJyPvCfk5ogQm9vayBub3QgcHJlc2VudCwgY3JlYXRpbmcgbm90aW9uIHBhZ2VgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVBhZ2VQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50RGF0YWJhc2VJZDogdGhpcy5ib29rRGJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzeW5jLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IHN5bmMuYXV0aG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29rTmFtZTogc3luYy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogc3luYy5oYXNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29rVXJsOiBzeW5jLmJvb2tVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybDogc3luYy5pbWdVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogKDAsIHV0aWxzXzEubWFrZUhpZ2hsaWdodHNCbG9ja3MpKHN5bmMuY2xpcHMsIGludGVyZmFjZXNfMS5CbG9ja1R5cGUucXVvdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGludGVyZmFjZXNfMS5FbW9qaVtcIvCfk5ZcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubm90aW9uLmNyZWF0ZVBhZ2UoY3JlYXRlUGFnZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEudXBkYXRlVG9hc3QpKFwiPGJyPuKchSBTdWNjZXNzZnVsbHkgc3luY2VkIGhpZ2hsaWdodHMgdG8gTm90aW9uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEudXBkYXRlVG9hc3QpKFwiPGJyPvCfn6IgQm9vayBpcyBhbHJlYWR5IHN5bmNlZCFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgKDAsIHV0aWxzXzEudXBkYXRlVG9hc3QpKFwiPGJyPuKdjCBGYWlsZWQgdG8gc3luYyBoaWdobGlnaHRzXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5vdGlvbiA9IG5ldyBhZGFwdGVyc18xLk5vdGlvbkFkYXB0ZXIoYXBpS2V5KTtcbiAgICAgICAgdGhpcy5ib29rRGJJZCA9IGJvb2tEYklkO1xuICAgIH1cbn1cbmV4cG9ydHMuTm90aW9uID0gTm90aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlQm9vayA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBicm93c2VyXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvYnJvd3NlclwiKTtcbmNvbnN0IHBhcnNlQm9vayA9IChib29rKSA9PiB7XG4gICAgdmFyIHJlcztcbiAgICBpZiAoYm9vayAhPSB1bmRlZmluZWQgJiYgYm9vay50aXRsZSAhPT0gJycgJiYgYm9vay5hdXRob3IgIT09ICcnICYmIGJvb2suY2xpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICBib29rLmNsaXBzLnNvcnQoKGEsIGIpID0+IHsgdmFyIF9hLCBfYjsgcmV0dXJuICgoX2EgPSBhLmxvY2F0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBOdW1iZXIuTUFYX1ZBTFVFKSAtICgoX2IgPSBiLmxvY2F0aW9uKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBOdW1iZXIuTUFYX1ZBTFVFKTsgfSk7XG4gICAgICAgIGJvb2suaGFzaCA9ICgwLCB1dGlsc18xLmNvbXB1dGVIaWdobGlnaHRzSGFzaCkoYm9vay5jbGlwcyk7XG4gICAgICAgIHJlcyA9IGJvb2s7XG4gICAgfVxuICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICgwLCBicm93c2VyXzEudXBkYXRlVG9hc3QpKGA8YnI+8J+TnSBUaXRsZTogJHtyZXMgPT09IG51bGwgfHwgcmVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXMudGl0bGV9YCArXG4gICAgICAgICAgICBgPGJyPvCfmYsgQXV0aG9yOiAke3JlcyA9PT0gbnVsbCB8fCByZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcy5hdXRob3J9YCArXG4gICAgICAgICAgICBgPGJyPvCfkq8gSGlnaGxpZ2h0cyBjb3VudDogJHtyZXMgPT09IG51bGwgfHwgcmVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXMuY2xpcHMubGVuZ3RofWApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgKDAsIGJyb3dzZXJfMS51cGRhdGVUb2FzdCkoYDxicj7inYwgRmFpbGVkIHRvIGNhcHR1cmUgaGlnaGxpZ2h0cyDwn5iiIWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufTtcbmV4cG9ydHMucGFyc2VCb29rID0gcGFyc2VCb29rO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsZWFudXAgPSBleHBvcnRzLnVwZGF0ZVRvYXN0ID0gZXhwb3J0cy5zaG93VG9hc3QgPSB2b2lkIDA7XG5jb25zdCB0YWdnaW5nQ2xhc3MgPSBcIkFTVVBFUlNFQ1JFVENMQVNTXCI7XG5jb25zdCB0b2FzdElkID0gXCJUT0FTVElEXCI7XG5jb25zdCBzaG93VG9hc3QgPSAoY29udGVudCwgZGVsYXlNcywgaWQgPSB0b2FzdElkKSA9PiB7XG4gICAgbGV0IHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9hc3QuaWQgPSBpZDtcbiAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKHRhZ2dpbmdDbGFzcyk7XG4gICAgdG9hc3QuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB0b2FzdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJtaW4td2lkdGg6IDI1MHB4OyBtYXJnaW4tbGVmdDogLTQwcHg7IGJhY2tncm91bmQtY29sb3I6ICM0NDQ4OyBjb2xvcjogI2YyMjt0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDMwcHg7IHBvc2l0aW9uOiBmaXhlZDsgei1pbmRleDogMTsgbGVmdDogNTAlOyB0b3A6IDMwcHg7Zm9udC1zaXplOiAxNnB4O1wiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvYXN0KTtcbiAgICBpZiAoZGVsYXlNcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b2FzdC5yZW1vdmUoKTtcbiAgICAgICAgfSwgZGVsYXlNcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0b2FzdC5vbmNsaWNrID0gZXhwb3J0cy5jbGVhbnVwO1xuICAgIH1cbn07XG5leHBvcnRzLnNob3dUb2FzdCA9IHNob3dUb2FzdDtcbmNvbnN0IHVwZGF0ZVRvYXN0ID0gKGNvbnRlbnQsIGFwcGVuZCA9IHRydWUsIGlkID0gdG9hc3RJZCkgPT4ge1xuICAgIGxldCB0b2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAodG9hc3QpXG4gICAgICAgIHRvYXN0LmlubmVySFRNTCA9IGFwcGVuZCA/ICh0b2FzdCA9PT0gbnVsbCB8fCB0b2FzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9hc3QuaW5uZXJIVE1MKSArIGNvbnRlbnQgOiBjb250ZW50O1xuICAgIGVsc2VcbiAgICAgICAgY29uc29sZS5sb2coXCJObyB0b2FzdCBlbGVtZW50LCBjYWxsIHNob3dUb2FzdCBmaXJzdCFcIik7XG59O1xuZXhwb3J0cy51cGRhdGVUb2FzdCA9IHVwZGF0ZVRvYXN0O1xuY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRhZ2dpbmdDbGFzcykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuY2xlYW51cCA9IGNsZWFudXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0VW5zeW5jZWRIaWdobGlnaHRzID0gZXhwb3J0cy5jb21wdXRlSGlnaGxpZ2h0c0hhc2ggPSBleHBvcnRzLm1kNSA9IHZvaWQgMDtcbmNvbnN0IGNyeXB0b19qc18xID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcbidjcnlwdG8tanMnO1xuY29uc3QgbWQ1ID0gKGNvbnRlbnRzKSA9PiBjcnlwdG9fanNfMS5lbmMuSGV4LnN0cmluZ2lmeSgoMCwgY3J5cHRvX2pzXzEuTUQ1KShjb250ZW50cykpO1xuZXhwb3J0cy5tZDUgPSBtZDU7XG5jb25zdCBjb21wdXRlSGlnaGxpZ2h0c0hhc2ggPSAoY2xpcHMsIG4gPSB1bmRlZmluZWQpID0+IHtcbiAgICBuICE9PSBudWxsICYmIG4gIT09IHZvaWQgMCA/IG4gOiAobiA9IGNsaXBzLmxlbmd0aCk7XG4gICAgaWYgKG4gPT0gMCkge1xuICAgICAgICByZXR1cm4gXCIwOm5vbmVcIjtcbiAgICB9XG4gICAgY29uc3QgaGFzaCA9ICgwLCBleHBvcnRzLm1kNSkoY2xpcHMuc2xpY2UoMCwgbiAtIDEpLm1hcChjID0+IGAke2MudGV4dH0sJHtjLmxvY2F0aW9ufSwke2MuY29sb3J9YCkuam9pbigpKTtcbiAgICByZXR1cm4gYCR7bn06JHtoYXNofWA7XG59O1xuZXhwb3J0cy5jb21wdXRlSGlnaGxpZ2h0c0hhc2ggPSBjb21wdXRlSGlnaGxpZ2h0c0hhc2g7XG4vKiBGdW5jdGlvbiB0byBnZXQgdW5zeW5jZWQgaGlnaGxpZ2h0cyBmb3IgZWFjaCBib29rICovXG5jb25zdCBnZXRVbnN5bmNlZEhpZ2hsaWdodHMgPSAoYm9vaywgaGFzaCkgPT4ge1xuICAgIGNvbnN0IGNsaXBzID0gYm9vay5jbGlwcztcbiAgICBjb25zdCBuID0gTnVtYmVyLnBhcnNlSW50KGhhc2guc3BsaXQoJzonKVswXSk7XG4gICAgY29uc3QgaCA9ICgwLCBleHBvcnRzLmNvbXB1dGVIaWdobGlnaHRzSGFzaCkoYm9vay5jbGlwcywgbik7XG4gICAgY29uc3QgZnVsbFN5bmMgPSBoICE9IGhhc2g7XG4gICAgaWYgKCFmdWxsU3luYykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBib29rKSwgeyBjbGlwczogY2xpcHMuc2xpY2UobiArIDEpLCBuZWVkc0Z1bGxTeW5jOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGJvb2spLCB7IG5lZWRzRnVsbFN5bmM6IHRydWUgfSk7XG4gICAgfVxufTtcbmV4cG9ydHMuZ2V0VW5zeW5jZWRIaWdobGlnaHRzID0gZ2V0VW5zeW5jZWRIaWdobGlnaHRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNsZWFudXAgPSBleHBvcnRzLnVwZGF0ZVRvYXN0ID0gZXhwb3J0cy5zaG93VG9hc3QgPSBleHBvcnRzLm1ha2VQYWdlUHJvcGVydGllcyA9IGV4cG9ydHMubWFrZUhpZ2hsaWdodHNCbG9ja3MgPSBleHBvcnRzLm1ha2VCbG9ja3MgPSBleHBvcnRzLmNvbXB1dGVIaWdobGlnaHRzSGFzaCA9IGV4cG9ydHMuZ2V0VW5zeW5jZWRIaWdobGlnaHRzID0gdm9pZCAwO1xudmFyIGNvbW1vbl8xID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0VW5zeW5jZWRIaWdobGlnaHRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21tb25fMS5nZXRVbnN5bmNlZEhpZ2hsaWdodHM7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjb21wdXRlSGlnaGxpZ2h0c0hhc2hcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbW1vbl8xLmNvbXB1dGVIaWdobGlnaHRzSGFzaDsgfSB9KTtcbnZhciBub3Rpb25fMSA9IHJlcXVpcmUoXCIuL25vdGlvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1ha2VCbG9ja3NcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vdGlvbl8xLm1ha2VCbG9ja3M7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYWtlSGlnaGxpZ2h0c0Jsb2Nrc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm90aW9uXzEubWFrZUhpZ2hsaWdodHNCbG9ja3M7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYWtlUGFnZVByb3BlcnRpZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vdGlvbl8xLm1ha2VQYWdlUHJvcGVydGllczsgfSB9KTtcbnZhciBicm93c2VyXzEgPSByZXF1aXJlKFwiLi9icm93c2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2hvd1RvYXN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBicm93c2VyXzEuc2hvd1RvYXN0OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXBkYXRlVG9hc3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJyb3dzZXJfMS51cGRhdGVUb2FzdDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNsZWFudXBcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJyb3dzZXJfMS5jbGVhbnVwOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm1ha2VQYWdlUHJvcGVydGllcyA9IGV4cG9ydHMubWFrZUhpZ2hsaWdodHNCbG9ja3MgPSBleHBvcnRzLm1ha2VCbG9ja3MgPSB2b2lkIDA7XG5jb25zdCBpbnRlcmZhY2VzXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlc1wiKTtcbi8qIEZ1bmN0aW9uIHRvIG1ha2UgYW4gYXJyYXkgb2YgTm90aW9uIGJsb2NrcyBnaXZlbiB0aGUgYXJyYXkgb2YgaGlnaGxpZ2h0cyBhbmQgdGhlIGJsb2NrIHR5cGVcbiAgIFVzZWQgd2hlbiBhcHBlbmRpbmcgaGlnaGxpZ2h0cyB0byBhbiBleGlzdGluZyBOb3Rpb24gcGFnZSBmb3IgdGhlIGJvb2sgKi9cbmNvbnN0IG1ha2VCbG9ja3MgPSAoY2xpcHMsIGRlZmF1bHRUeXBlKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGJsb2NrcyA9IFtdO1xuICAgIGZvciAoY29uc3QgYyBvZiBjbGlwcykge1xuICAgICAgICBjb25zdCB0eXBlID0gKF9hID0gYy50eXBlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkZWZhdWx0VHlwZTtcbiAgICAgICAgY29uc3QgdmFsaWRIaWdobGlnaHQgPSBjLnRleHQubGVuZ3RoID4gMjAwMCA/IGMudGV4dC5zdWJzdHJpbmcoMCwgMjAwMCkgOiBjLnRleHQ7XG4gICAgICAgIGNvbnN0IGJsb2NrID0ge1xuICAgICAgICAgICAgb2JqZWN0OiBcImJsb2NrXCIsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICB9O1xuICAgICAgICBibG9ja1t0eXBlXSA9IHtcbiAgICAgICAgICAgIHRleHQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB2YWxpZEhpZ2hsaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjb2xvcjogYy5jb2xvcixcbiAgICAgICAgfTtcbiAgICAgICAgYmxvY2tzLnB1c2goYmxvY2spO1xuICAgIH1cbiAgICByZXR1cm4gYmxvY2tzO1xufTtcbmV4cG9ydHMubWFrZUJsb2NrcyA9IG1ha2VCbG9ja3M7XG4vKiBGdW5jdGlvbiB0byBtYWtlIGFuIGFycmF5IG9mIE5vdGlvbiBibG9ja3Mgd2l0aCBhIHRpdGxlOiBcIiDwn46AwqBIaWdobGlnaHRzXCIuXG4gICBVc2VkIHdoZW4gY3JlYXRpbmcgYSBuZXcgTm90aW9uIHBhZ2UgZm9yIHRoZSBib29rKi9cbmNvbnN0IG1ha2VIaWdobGlnaHRzQmxvY2tzID0gKGhpZ2hsaWdodHMsIHR5cGUpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgICAuLi4oMCwgZXhwb3J0cy5tYWtlQmxvY2tzKShbeyB0ZXh0OiBcIkhpZ2hsaWdodHNcIiB9XSwgaW50ZXJmYWNlc18xLkJsb2NrVHlwZS5oZWFkaW5nXzEpLFxuICAgICAgICAuLi4oMCwgZXhwb3J0cy5tYWtlQmxvY2tzKShoaWdobGlnaHRzLCB0eXBlKSxcbiAgICBdO1xufTtcbmV4cG9ydHMubWFrZUhpZ2hsaWdodHNCbG9ja3MgPSBtYWtlSGlnaGxpZ2h0c0Jsb2Nrcztcbi8qIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBjb25maWd1cmF0aW9uIHJlcXVpcmVkIHRvIGNyZWF0ZSBhIG5ldyBOb3Rpb24gcGFnZSAqL1xuY29uc3QgbWFrZVBhZ2VQcm9wZXJ0aWVzID0gKHBhZ2VQcm9wZXJ0aWVzKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHtcbiAgICAgICAgXCLwn5K+XCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBwYWdlUHJvcGVydGllcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgXCLwn6egXCI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwicmljaF90ZXh0XCIsXG4gICAgICAgICAgICByaWNoX3RleHQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBwYWdlUHJvcGVydGllcy5hdXRob3IsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIFwi8J+Ul1wiOiB7XG4gICAgICAgICAgICB1cmw6IHBhZ2VQcm9wZXJ0aWVzLmJvb2tVcmxcbiAgICAgICAgfSxcbiAgICAgICAgXCLwn5a8XCI6IHtcbiAgICAgICAgICAgIGZpbGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImV4dGVybmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcGFnZVByb3BlcnRpZXMuaW1nVXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGJvb2s6IHtcbiAgICAgICAgICAgIHR5cGU6IFwicmljaF90ZXh0XCIsXG4gICAgICAgICAgICByaWNoX3RleHQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBwYWdlUHJvcGVydGllcy5ib29rTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgc3luYzoge1xuICAgICAgICAgICAgdHlwZTogXCJyaWNoX3RleHRcIixcbiAgICAgICAgICAgIHJpY2hfdGV4dDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHBhZ2VQcm9wZXJ0aWVzLmhhc2hcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBcIvCfj7dcIjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJib29rXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCLwn5SnXCI6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwib25kb1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xufTtcbmV4cG9ydHMubWFrZVBhZ2VQcm9wZXJ0aWVzID0gbWFrZVBhZ2VQcm9wZXJ0aWVzO1xuIiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLndyaXRlSGlnaGxpZ2h0c1RvTm90aW9uID0gdm9pZCAwO1xuY29uc3QgbW9kZWxzXzEgPSByZXF1aXJlKFwiLi9tb2RlbHNcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5hc3luYyBmdW5jdGlvbiB3cml0ZUhpZ2hsaWdodHNUb05vdGlvbihhcGlLZXksIGJvb2tEYklkKSB7XG4gICAgKDAsIHV0aWxzXzEuc2hvd1RvYXN0KShcIlwiKTtcbiAgICBjb25zdCBub3Rpb24gPSBuZXcgbW9kZWxzXzEuTm90aW9uKGFwaUtleSwgYm9va0RiSWQpO1xuICAgIGNvbnN0IGJvb2sgPSAoMCwgbW9kZWxzXzEuZXh0cmFjdEJvb2spKCk7XG4gICAgY29uc3QgY2xpcHBpbmdzID0gKDAsIG1vZGVsc18xLnBhcnNlQm9vaykoYm9vayk7XG4gICAgaWYgKGNsaXBwaW5ncyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXdhaXQgbm90aW9uLnN5bmNIaWdobGlnaHRzKGNsaXBwaW5ncyk7XG4gICAgfVxuICAgICgwLCB1dGlsc18xLnVwZGF0ZVRvYXN0KShcIiYjMTI4MTU4OyAmIzEyODAxODsgJiMxMjgxNTA7XCIpO1xufVxuZXhwb3J0cy53cml0ZUhpZ2hsaWdodHNUb05vdGlvbiA9IHdyaXRlSGlnaGxpZ2h0c1RvTm90aW9uO1xuO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9