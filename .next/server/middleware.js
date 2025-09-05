"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "middleware";
exports.ids = ["middleware"];
exports.modules = {

/***/ "(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5Caviin%5CDownloads%5CWebsite%20(2)%5CWebsite%5Csrc%5Cmiddleware.ts&page=%2Fmiddleware&rootDir=C%3A%5CUsers%5Caviin%5CDownloads%5CWebsite%20(2)%5CWebsite&matchers=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5Caviin%5CDownloads%5CWebsite%20(2)%5CWebsite%5Csrc%5Cmiddleware.ts&page=%2Fmiddleware&rootDir=C%3A%5CUsers%5Caviin%5CDownloads%5CWebsite%20(2)%5CWebsite&matchers=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nHandler)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/globals */ \"(middleware)/./node_modules/next/dist/server/web/globals.js\");\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/adapter */ \"(middleware)/./node_modules/next/dist/server/web/adapter.js\");\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_middleware_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/middleware.ts */ \"(middleware)/./src/middleware.ts\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/components/is-next-router-error */ \"(middleware)/./node_modules/next/dist/client/components/is-next-router-error.js\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_middleware_ts__WEBPACK_IMPORTED_MODULE_2__]);\n_src_middleware_ts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// Import the userland code.\n\n\n\nconst mod = {\n    ..._src_middleware_ts__WEBPACK_IMPORTED_MODULE_2__\n};\nconst handler = mod.middleware || mod.default;\nconst page = \"/middleware\";\nif (typeof handler !== 'function') {\n    throw Object.defineProperty(new Error(`The Middleware \"${page}\" must export a \\`middleware\\` or a \\`default\\` function`), \"__NEXT_ERROR_CODE\", {\n        value: \"E120\",\n        enumerable: false,\n        configurable: true\n    });\n}\n// Middleware will only sent out the FetchEvent to next server,\n// so load instrumentation module here and track the error inside middleware module.\nfunction errorHandledHandler(fn) {\n    return async (...args)=>{\n        try {\n            return await fn(...args);\n        } catch (err) {\n            // In development, error the navigation API usage in runtime,\n            // since it's not allowed to be used in middleware as it's outside of react component tree.\n            if (true) {\n                if ((0,next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_3__.isNextRouterError)(err)) {\n                    err.message = `Next.js navigation API is not allowed to be used in Middleware.`;\n                    throw err;\n                }\n            }\n            const req = args[0];\n            const url = new URL(req.url);\n            const resource = url.pathname + url.search;\n            await (0,next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_0__.edgeInstrumentationOnRequestError)(err, {\n                path: resource,\n                method: req.method,\n                headers: Object.fromEntries(req.headers.entries())\n            }, {\n                routerKind: 'Pages Router',\n                routePath: '/middleware',\n                routeType: 'middleware',\n                revalidateReason: undefined\n            });\n            throw err;\n        }\n    };\n}\nfunction nHandler(opts) {\n    return (0,next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_1__.adapter)({\n        ...opts,\n        page,\n        handler: errorHandledHandler(handler)\n    });\n}\n\n//# sourceMappingURL=middleware.js.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1taWRkbGV3YXJlLWxvYWRlci5qcz9hYnNvbHV0ZVBhZ2VQYXRoPUMlM0ElNUNVc2VycyU1Q2F2aWluJTVDRG93bmxvYWRzJTVDV2Vic2l0ZSUyMCgyKSU1Q1dlYnNpdGUlNUNzcmMlNUNtaWRkbGV3YXJlLnRzJnBhZ2U9JTJGbWlkZGxld2FyZSZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2F2aWluJTVDRG93bmxvYWRzJTVDV2Vic2l0ZSUyMCgyKSU1Q1dlYnNpdGUmbWF0Y2hlcnM9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ2lCO0FBQ3ZEO0FBQzRDO0FBQ3FDO0FBQ0k7QUFDckY7QUFDQSxPQUFPLCtDQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRCxvQkFBb0IsbUdBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtGQUFpQztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLFdBQVcscUVBQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci93ZWIvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgYWRhcHRlciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi9hZGFwdGVyXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyBfbW9kIGZyb20gXCIuL3NyYy9taWRkbGV3YXJlLnRzXCI7XG5pbXBvcnQgeyBlZGdlSW5zdHJ1bWVudGF0aW9uT25SZXF1ZXN0RXJyb3IgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci93ZWIvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgaXNOZXh0Um91dGVyRXJyb3IgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2lzLW5leHQtcm91dGVyLWVycm9yXCI7XG5jb25zdCBtb2QgPSB7XG4gICAgLi4uX21vZFxufTtcbmNvbnN0IGhhbmRsZXIgPSBtb2QubWlkZGxld2FyZSB8fCBtb2QuZGVmYXVsdDtcbmNvbnN0IHBhZ2UgPSBcIi9taWRkbGV3YXJlXCI7XG5pZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3IEVycm9yKGBUaGUgTWlkZGxld2FyZSBcIiR7cGFnZX1cIiBtdXN0IGV4cG9ydCBhIFxcYG1pZGRsZXdhcmVcXGAgb3IgYSBcXGBkZWZhdWx0XFxgIGZ1bmN0aW9uYCksIFwiX19ORVhUX0VSUk9SX0NPREVcIiwge1xuICAgICAgICB2YWx1ZTogXCJFMTIwXCIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbn1cbi8vIE1pZGRsZXdhcmUgd2lsbCBvbmx5IHNlbnQgb3V0IHRoZSBGZXRjaEV2ZW50IHRvIG5leHQgc2VydmVyLFxuLy8gc28gbG9hZCBpbnN0cnVtZW50YXRpb24gbW9kdWxlIGhlcmUgYW5kIHRyYWNrIHRoZSBlcnJvciBpbnNpZGUgbWlkZGxld2FyZSBtb2R1bGUuXG5mdW5jdGlvbiBlcnJvckhhbmRsZWRIYW5kbGVyKGZuKSB7XG4gICAgcmV0dXJuIGFzeW5jICguLi5hcmdzKT0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vIEluIGRldmVsb3BtZW50LCBlcnJvciB0aGUgbmF2aWdhdGlvbiBBUEkgdXNhZ2UgaW4gcnVudGltZSxcbiAgICAgICAgICAgIC8vIHNpbmNlIGl0J3Mgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiBtaWRkbGV3YXJlIGFzIGl0J3Mgb3V0c2lkZSBvZiByZWFjdCBjb21wb25lbnQgdHJlZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmV4dFJvdXRlckVycm9yKGVycikpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSBgTmV4dC5qcyBuYXZpZ2F0aW9uIEFQSSBpcyBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIE1pZGRsZXdhcmUuYDtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IGFyZ3NbMF07XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgICAgICAgICAgYXdhaXQgZWRnZUluc3RydW1lbnRhdGlvbk9uUmVxdWVzdEVycm9yKGVyciwge1xuICAgICAgICAgICAgICAgIHBhdGg6IHJlc291cmNlLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuZnJvbUVudHJpZXMocmVxLmhlYWRlcnMuZW50cmllcygpKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHJvdXRlcktpbmQ6ICdQYWdlcyBSb3V0ZXInLFxuICAgICAgICAgICAgICAgIHJvdXRlUGF0aDogJy9taWRkbGV3YXJlJyxcbiAgICAgICAgICAgICAgICByb3V0ZVR5cGU6ICdtaWRkbGV3YXJlJyxcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRlUmVhc29uOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5IYW5kbGVyKG9wdHMpIHtcbiAgICByZXR1cm4gYWRhcHRlcih7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGhhbmRsZXI6IGVycm9ySGFuZGxlZEhhbmRsZXIoaGFuZGxlcilcbiAgICB9KTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWlkZGxld2FyZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5Caviin%5CDownloads%5CWebsite%20(2)%5CWebsite%5Csrc%5Cmiddleware.ts&page=%2Fmiddleware&rootDir=C%3A%5CUsers%5Caviin%5CDownloads%5CWebsite%20(2)%5CWebsite&matchers=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(middleware)/./src/lib/server/auth.ts":
/*!********************************!*\
  !*** ./src/lib/server/auth.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"jose\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jose__WEBPACK_IMPORTED_MODULE_0__]);\njose__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nif (!process.env.JWT_SECRET) throw new Error(\"JWT_SECRET is not defined\");\nconst secret = new TextEncoder().encode(process.env.JWT_SECRET);\nasync function signToken(payload, expiresIn = \"7d\") {\n    return new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(expiresIn).sign(secret);\n}\nasync function verifyToken(token) {\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, secret);\n        return payload;\n    } catch  {\n        return null;\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9zZXJ2ZXIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkQ7QUFFM0QsSUFBSSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFBRSxNQUFNLElBQUlDLE1BQU07QUFFN0MsTUFBTUMsU0FBUyxJQUFJQyxjQUFjQyxNQUFNLENBQUNOLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtBQUV2RCxlQUFlSyxVQUFVQyxPQUFnQyxFQUFFQyxZQUFZLElBQUk7SUFDaEYsT0FBTyxJQUFJWCx5Q0FBT0EsQ0FBQ1UsU0FDaEJFLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7SUFBUSxHQUNsQ0MsV0FBVyxHQUNYQyxpQkFBaUIsQ0FBQ0osV0FDbEJLLElBQUksQ0FBQ1Y7QUFDVjtBQUVPLGVBQWVXLFlBQVlDLEtBQWE7SUFDN0MsSUFBSTtRQUNGLE1BQU0sRUFBRVIsT0FBTyxFQUFFLEdBQUcsTUFBTVQsK0NBQVNBLENBQUNpQixPQUFPWjtRQUMzQyxPQUFPSTtJQUNULEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGF2aWluXFxEb3dubG9hZHNcXFdlYnNpdGUgKDIpXFxXZWJzaXRlXFxzcmNcXGxpYlxcc2VydmVyXFxhdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25KV1QsIGp3dFZlcmlmeSwgdHlwZSBKV1RQYXlsb2FkIH0gZnJvbSBcImpvc2VcIjtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCkgdGhyb3cgbmV3IEVycm9yKFwiSldUX1NFQ1JFVCBpcyBub3QgZGVmaW5lZFwiKTtcclxuXHJcbmNvbnN0IHNlY3JldCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduVG9rZW4ocGF5bG9hZDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIGV4cGlyZXNJbiA9IFwiN2RcIikge1xyXG4gIHJldHVybiBuZXcgU2lnbkpXVChwYXlsb2FkKVxyXG4gICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogXCJIUzI1NlwiIH0pXHJcbiAgICAuc2V0SXNzdWVkQXQoKVxyXG4gICAgLnNldEV4cGlyYXRpb25UaW1lKGV4cGlyZXNJbilcclxuICAgIC5zaWduKHNlY3JldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlUb2tlbih0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxKV1RQYXlsb2FkIHwgbnVsbD4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbiwgc2VjcmV0KTtcclxuICAgIHJldHVybiBwYXlsb2FkIGFzIEpXVFBheWxvYWQ7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlNpZ25KV1QiLCJqd3RWZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsIkVycm9yIiwic2VjcmV0IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJzaWduVG9rZW4iLCJwYXlsb2FkIiwiZXhwaXJlc0luIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0SXNzdWVkQXQiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJ2ZXJpZnlUb2tlbiIsInRva2VuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/server/auth.ts\n");

/***/ }),

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/server/auth */ \"(middleware)/./src/lib/server/auth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_server_auth__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_server_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst config = {\n    matcher: [\n        \"/admin/:path*\"\n    ],\n    runtime: \"nodejs\"\n};\nasync function middleware(req) {\n    const token = req.cookies.get(\"token\")?.value;\n    if (req.nextUrl.pathname.startsWith(\"/admin/login\")) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    if (!token) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/admin/login\", req.url));\n    const payload = await (0,_lib_server_auth__WEBPACK_IMPORTED_MODULE_1__.verifyToken)(token);\n    if (!payload || payload.role !== \"ADMIN\") return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/admin/login\", req.url));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3RDtBQUNSO0FBRXpDLE1BQU1FLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUFnQjtJQUMxQkMsU0FBUztBQUNYLEVBQUU7QUFFSyxlQUFlQyxXQUFXQyxHQUFnQjtJQUMvQyxNQUFNQyxRQUFRRCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVQztJQUV4QyxJQUFJSixJQUFJSyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGlCQUFpQixPQUFPYixxREFBWUEsQ0FBQ2MsSUFBSTtJQUM3RSxJQUFJLENBQUNQLE9BQU8sT0FBT1AscURBQVlBLENBQUNlLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGdCQUFnQlYsSUFBSVcsR0FBRztJQUV4RSxNQUFNQyxVQUFVLE1BQU1qQiw2REFBV0EsQ0FBQ007SUFDbEMsSUFBSSxDQUFDVyxXQUFXQSxRQUFRQyxJQUFJLEtBQUssU0FBUyxPQUFPbkIscURBQVlBLENBQUNlLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGdCQUFnQlYsSUFBSVcsR0FBRztJQUV0RyxPQUFPakIscURBQVlBLENBQUNjLElBQUk7QUFDMUIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXZpaW5cXERvd25sb2Fkc1xcV2Vic2l0ZSAoMilcXFdlYnNpdGVcXHNyY1xcbWlkZGxld2FyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IHZlcmlmeVRva2VuIH0gZnJvbSBcIkAvbGliL3NlcnZlci9hdXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFtcIi9hZG1pbi86cGF0aCpcIl0sXHJcbiAgcnVudGltZTogXCJub2RlanNcIixcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLmdldChcInRva2VuXCIpPy52YWx1ZTtcclxuXHJcbiAgaWYgKHJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYWRtaW4vbG9naW5cIikpIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG4gIGlmICghdG9rZW4pIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9hZG1pbi9sb2dpblwiLCByZXEudXJsKSk7XHJcblxyXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB2ZXJpZnlUb2tlbih0b2tlbik7XHJcbiAgaWYgKCFwYXlsb2FkIHx8IHBheWxvYWQucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvYWRtaW4vbG9naW5cIiwgcmVxLnVybCkpO1xyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwidmVyaWZ5VG9rZW4iLCJjb25maWciLCJtYXRjaGVyIiwicnVudGltZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJuZXh0IiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJwYXlsb2FkIiwicm9sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "../lib/cache-handlers/default.external":
/*!**************************************************************************!*\
  !*** external "next/dist/server/lib/cache-handlers/default.external.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/lib/cache-handlers/default.external.js");

/***/ }),

/***/ "jose":
/*!***********************!*\
  !*** external "jose" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node:async_hooks");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendors","common"], () => (__webpack_exec__("(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5Caviin%5CDownloads%5CWebsite%20(2)%5CWebsite%5Csrc%5Cmiddleware.ts&page=%2Fmiddleware&rootDir=C%3A%5CUsers%5Caviin%5CDownloads%5CWebsite%20(2)%5CWebsite&matchers=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();