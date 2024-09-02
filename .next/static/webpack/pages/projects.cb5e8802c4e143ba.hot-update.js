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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ProjectCard = (param)=>{\n    let { title, details, imageUrl, projectUrl } = param;\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: projectUrl,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"block relative\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"project-card relative bg-blue-200 rounded-lg overflow-hidden\",\n                onMouseEnter: ()=>setIsHovered(true),\n                onMouseLeave: ()=>setIsHovered(false),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: imageUrl,\n                        alt: title,\n                        className: \"w-full h-full object-cover transition-transform duration-500 \".concat(isHovered ? \"glitch\" : \"\"),\n                        width: 500,\n                        height: 500\n                    }, void 0, false, {\n                        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 bg-blue-200 p-4 flex items-center justify-center transition-opacity duration-500 \".concat(isHovered ? \"opacity-100\" : \"opacity-0\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg\",\n                                    children: details\n                                }, void 0, false, {\n                                    fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectCard, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = ProjectCard;\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen p-4 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto text-center\",\n                style: {\n                    marginTop: \"12vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mt-20 mb-8\",\n                        children: \"Last projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-3 gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                                title: \"Project 1\",\n                                details: \"Specifiche del progetto 1\",\n                                imageUrl: \"/path/to/image1.jpg\",\n                                projectUrl: \"/\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                                title: \"Project 2\",\n                                details: \"Specifiche del progetto 2\",\n                                imageUrl: \"/path/to/image2.jpg\",\n                                projectUrl: \"/\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                                title: \"Project 3\",\n                                details: \"Specifiche del progetto 3\",\n                                imageUrl: \"/path/to/image3.jpg\",\n                                projectUrl: \"/\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectCard\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1Q7QUFDRjtBQUNGO0FBRTdCLE1BQU1JLGNBQWM7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQTRFOztJQUNySSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MscUJBQ0UsOERBQUNFLGtEQUFJQTtRQUFDUSxNQUFNSDtrQkFDWiw0RUFBQ0k7WUFBRUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQ0NELFdBQVU7Z0JBQ1ZFLGNBQWMsSUFBTUwsYUFBYTtnQkFDakNNLGNBQWMsSUFBTU4sYUFBYTs7a0NBRWpDLDhEQUFDUixtREFBS0E7d0JBQ0plLEtBQUtWO3dCQUNMVyxLQUFLYjt3QkFDTFEsV0FBVyxnRUFBMEYsT0FBMUJKLFlBQVksV0FBVzt3QkFDbEdVLE9BQU87d0JBQ1BDLFFBQVE7Ozs7OztrQ0FFViw4REFBQ047d0JBQUlELFdBQVcscUdBQTZJLE9BQXhDSixZQUFZLGdCQUFnQjtrQ0FDL0ksNEVBQUNLOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ1E7b0NBQUdSLFdBQVU7OENBQXNCUjs7Ozs7OzhDQUNwQyw4REFBQ2lCO29DQUFFVCxXQUFVOzhDQUFXUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDO0dBNUJNRjtLQUFBQTtBQThCTixNQUFNbUIsV0FBVztJQUNmLHFCQUNFLDhEQUFDVDtRQUFJRCxXQUFVOzswQkFDYiw4REFBQ2IsMERBQU1BOzs7OzswQkFDUCw4REFBQ2M7Z0JBQUlELFdBQVU7Z0JBQWdDVyxPQUFPO29CQUFFQyxXQUFXO2dCQUFPOztrQ0FDeEUsOERBQUNKO3dCQUFHUixXQUFVO2tDQUFnQzs7Ozs7O2tDQUM5Qyw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDVDtnQ0FBWUMsT0FBTTtnQ0FBWUMsU0FBUTtnQ0FBNEJDLFVBQVM7Z0NBQXVCQyxZQUFXOzs7Ozs7MENBQzlHLDhEQUFDSjtnQ0FBWUMsT0FBTTtnQ0FBWUMsU0FBUTtnQ0FBNEJDLFVBQVM7Z0NBQXNCQyxZQUFXOzs7Ozs7MENBQzdHLDhEQUFDSjtnQ0FBWUMsT0FBTTtnQ0FBWUMsU0FBUTtnQ0FBNEJDLFVBQVM7Z0NBQXNCQyxZQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkg7TUFkTWU7QUFnQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeD8zOWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IHRpdGxlLCBkZXRhaWxzLCBpbWFnZVVybCwgcHJvamVjdFVybCB9OiB7IHRpdGxlOiBzdHJpbmcsIGRldGFpbHM6IHN0cmluZywgaW1hZ2VVcmw6IHN0cmluZywgcHJvamVjdFVybDogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e3Byb2plY3RVcmx9PlxuICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZCByZWxhdGl2ZSBiZy1ibHVlLTIwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgJHtpc0hvdmVyZWQgPyAnZ2xpdGNoJyA6ICcnfWB9XG4gICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wIGJnLWJsdWUtMjAwIHAtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNTAwICR7aXNIb3ZlcmVkID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj57ZGV0YWlsc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtNCB0ZXh0LWJsYWNrXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTJ2aCcgfX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbXQtMjAgbWItOFwiPkxhc3QgcHJvamVjdHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICA8UHJvamVjdENhcmQgdGl0bGU9XCJQcm9qZWN0IDFcIiBkZXRhaWxzPVwiU3BlY2lmaWNoZSBkZWwgcHJvZ2V0dG8gMVwiIGltYWdlVXJsPVwiL3BhdGgvdG8vaW1hZ2UxLmpwZ1wiICBwcm9qZWN0VXJsPScvJy8+XG4gICAgICAgICAgPFByb2plY3RDYXJkIHRpdGxlPVwiUHJvamVjdCAyXCIgZGV0YWlscz1cIlNwZWNpZmljaGUgZGVsIHByb2dldHRvIDJcIiBpbWFnZVVybD1cIi9wYXRoL3RvL2ltYWdlMi5qcGdcIiBwcm9qZWN0VXJsPScvJy8+XG4gICAgICAgICAgPFByb2plY3RDYXJkIHRpdGxlPVwiUHJvamVjdCAzXCIgZGV0YWlscz1cIlNwZWNpZmljaGUgZGVsIHByb2dldHRvIDNcIiBpbWFnZVVybD1cIi9wYXRoL3RvL2ltYWdlMy5qcGdcIiBwcm9qZWN0VXJsPScvJy8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJQcm9qZWN0Q2FyZCIsInRpdGxlIiwiZGV0YWlscyIsImltYWdlVXJsIiwicHJvamVjdFVybCIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImhyZWYiLCJhIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInAiLCJQcm9qZWN0cyIsInN0eWxlIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});