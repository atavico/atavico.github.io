"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./src/pages/projects.tsx":
/*!********************************!*\
  !*** ./src/pages/projects.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ProjectCard = (param)=>{\n    let { title, details, imageUrl, projectUrl } = param;\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: projectUrl,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"project-card relative bg-blue-200 rounded-lg overflow-hidden\",\n            onMouseEnter: ()=>setIsHovered(true),\n            onMouseLeave: ()=>setIsHovered(false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: imageUrl,\n                    alt: title,\n                    className: \"w-full h-full object-cover transition-transform duration-500 \".concat(isHovered ? \"glitch\" : \"\"),\n                    width: 500,\n                    height: 500\n                }, void 0, false, {\n                    fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-0 bg-blue-200 p-4 flex items-center justify-center transition-opacity duration-500 \".concat(isHovered ? \"opacity-100\" : \"opacity-0\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg\",\n                                children: details\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectCard, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = ProjectCard;\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen p-4 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto text-center\",\n                style: {\n                    marginTop: \"12vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mt-20 mb-8\",\n                        children: \"Last projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-3 gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                                title: \"Project 1\",\n                                details: \"Specifiche del progetto 1\",\n                                imageUrl: \"/path/to/image1.jpg\",\n                                projectUrl: \"/projects/eventify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                                title: \"Project 2\",\n                                details: \"Specifiche del progetto 2\",\n                                imageUrl: \"/path/to/image2.jpg\",\n                                projectUrl: \"/\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                                title: \"Project 3\",\n                                details: \"Specifiche del progetto 3\",\n                                imageUrl: \"/path/to/image3.jpg\",\n                                projectUrl: \"/\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectCard\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1Q7QUFDRjtBQUNGO0FBRTdCLE1BQU1JLGNBQWM7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQTRFOztJQUNySSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MscUJBQ0UsOERBQUNFLGtEQUFJQTtRQUFDUSxNQUFNSDtrQkFDViw0RUFBQ0k7WUFDQ0MsV0FBVTtZQUNWQyxjQUFjLElBQU1KLGFBQWE7WUFDakNLLGNBQWMsSUFBTUwsYUFBYTs7OEJBRWpDLDhEQUFDUixtREFBS0E7b0JBQ0pjLEtBQUtUO29CQUNMVSxLQUFLWjtvQkFDTFEsV0FBVyxnRUFBMEYsT0FBMUJKLFlBQVksV0FBVztvQkFDbEdTLE9BQU87b0JBQ1BDLFFBQVE7Ozs7Ozs4QkFFViw4REFBQ1A7b0JBQUlDLFdBQVcscUdBQTZJLE9BQXhDSixZQUFZLGdCQUFnQjs4QkFDL0ksNEVBQUNHO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQUdQLFdBQVU7MENBQXNCUjs7Ozs7OzBDQUNwQyw4REFBQ2dCO2dDQUFFUixXQUFVOzBDQUFXUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQztHQTFCTUY7S0FBQUE7QUE0Qk4sTUFBTWtCLFdBQVc7SUFDZixxQkFDRSw4REFBQ1Y7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNiLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNZO2dCQUFJQyxXQUFVO2dCQUFnQ1UsT0FBTztvQkFBRUMsV0FBVztnQkFBTzs7a0NBQ3hFLDhEQUFDSjt3QkFBR1AsV0FBVTtrQ0FBZ0M7Ozs7OztrQ0FDOUMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1Q7Z0NBQ0NDLE9BQU07Z0NBQ05DLFNBQVE7Z0NBQ1JDLFVBQVM7Z0NBQ1RDLFlBQVc7Ozs7OzswQ0FFYiw4REFBQ0o7Z0NBQ0NDLE9BQU07Z0NBQ05DLFNBQVE7Z0NBQ1JDLFVBQVM7Z0NBQ1RDLFlBQVc7Ozs7OzswQ0FFYiw4REFBQ0o7Z0NBQ0NDLE9BQU07Z0NBQ05DLFNBQVE7Z0NBQ1JDLFVBQVM7Z0NBQ1RDLFlBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtNQTdCTWM7QUErQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeD8zOWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IHRpdGxlLCBkZXRhaWxzLCBpbWFnZVVybCwgcHJvamVjdFVybCB9OiB7IHRpdGxlOiBzdHJpbmcsIGRldGFpbHM6IHN0cmluZywgaW1hZ2VVcmw6IHN0cmluZywgcHJvamVjdFVybDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e3Byb2plY3RVcmx9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQgcmVsYXRpdmUgYmctYmx1ZS0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwICR7aXNIb3ZlcmVkID8gJ2dsaXRjaCcgOiAnJ31gfVxuICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgaW5zZXQtMCBiZy1ibHVlLTIwMCBwLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTUwMCAke2lzSG92ZXJlZCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e2RldGFpbHN9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtNCB0ZXh0LWJsYWNrXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTJ2aCcgfX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbXQtMjAgbWItOFwiPkxhc3QgcHJvamVjdHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICA8UHJvamVjdENhcmQgXG4gICAgICAgICAgICB0aXRsZT1cIlByb2plY3QgMVwiIFxuICAgICAgICAgICAgZGV0YWlscz1cIlNwZWNpZmljaGUgZGVsIHByb2dldHRvIDFcIiBcbiAgICAgICAgICAgIGltYWdlVXJsPVwiL3BhdGgvdG8vaW1hZ2UxLmpwZ1wiICBcbiAgICAgICAgICAgIHByb2plY3RVcmw9Jy9wcm9qZWN0cy9ldmVudGlmeScgXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UHJvamVjdENhcmQgXG4gICAgICAgICAgICB0aXRsZT1cIlByb2plY3QgMlwiIFxuICAgICAgICAgICAgZGV0YWlscz1cIlNwZWNpZmljaGUgZGVsIHByb2dldHRvIDJcIiBcbiAgICAgICAgICAgIGltYWdlVXJsPVwiL3BhdGgvdG8vaW1hZ2UyLmpwZ1wiIFxuICAgICAgICAgICAgcHJvamVjdFVybD0nLydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQcm9qZWN0Q2FyZCBcbiAgICAgICAgICAgIHRpdGxlPVwiUHJvamVjdCAzXCIgXG4gICAgICAgICAgICBkZXRhaWxzPVwiU3BlY2lmaWNoZSBkZWwgcHJvZ2V0dG8gM1wiIFxuICAgICAgICAgICAgaW1hZ2VVcmw9XCIvcGF0aC90by9pbWFnZTMuanBnXCIgXG4gICAgICAgICAgICBwcm9qZWN0VXJsPScvJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJQcm9qZWN0Q2FyZCIsInRpdGxlIiwiZGV0YWlscyIsImltYWdlVXJsIiwicHJvamVjdFVybCIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwicCIsIlByb2plY3RzIiwic3R5bGUiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});