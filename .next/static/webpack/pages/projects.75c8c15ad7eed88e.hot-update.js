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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ProjectCard = (param)=>{\n    let { title, details, imageUrl } = param;\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-card relative bg-blue-200 rounded-lg overflow-hidden\",\n        onMouseEnter: ()=>setIsHovered(true),\n        onMouseLeave: ()=>setIsHovered(false),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: imageUrl,\n                alt: title,\n                className: \"w-full h-full object-cover transition-transform duration-500 \".concat(isHovered ? \"glitch\" : \"\"),\n                width: 500\n            }, void 0, false, {\n                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-blue-200 p-4 flex items-center justify-center transition-opacity duration-500 \".concat(isHovered ? \"opacity-100\" : \"opacity-0\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg\",\n                            children: details\n                        }, void 0, false, {\n                            fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectCard, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = ProjectCard;\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen p-4 text-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto text-center\",\n                style: {\n                    marginTop: \"12vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mt-20 mb-8\",\n                        children: \"Last projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-3 gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                                title: \"Project 1\",\n                                details: \"Specifiche del progetto 1\",\n                                imageUrl: \"/path/to/image1.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                                title: \"Project 2\",\n                                details: \"Specifiche del progetto 2\",\n                                imageUrl: \"/path/to/image2.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n                                title: \"Project 3\",\n                                details: \"Specifiche del progetto 3\",\n                                imageUrl: \"/path/to/image3.jpg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alessandrotarsi/Desktop/personal_portfolio/src/pages/projects.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectCard\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNUO0FBQ0Y7QUFFL0IsTUFBTUcsY0FBYztRQUFDLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQXdEOztJQUNyRyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0MscUJBQ0UsOERBQUNRO1FBQ0NDLFdBQVU7UUFDVkMsY0FBYyxJQUFNSCxhQUFhO1FBQ2pDSSxjQUFjLElBQU1KLGFBQWE7OzBCQUlqQyw4REFBQ04sbURBQUtBO2dCQUNKVyxLQUFLUDtnQkFDTFEsS0FBS1Y7Z0JBQ0xNLFdBQVcsZ0VBQTBGLE9BQTFCSCxZQUFZLFdBQVc7Z0JBQ2xHUSxPQUFPOzs7Ozs7MEJBRVQsOERBQUNOO2dCQUFJQyxXQUFXLHFHQUE2SSxPQUF4Q0gsWUFBWSxnQkFBZ0I7MEJBQy9JLDRFQUFDRTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFHTixXQUFVO3NDQUFzQk47Ozs7OztzQ0FDcEMsOERBQUNhOzRCQUFFUCxXQUFVO3NDQUFXTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7R0F6Qk1GO0tBQUFBO0FBMkJOLE1BQU1lLFdBQVc7SUFDZixxQkFDRSw4REFBQ1Q7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNWLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNTO2dCQUFJQyxXQUFVO2dCQUFnQ1MsT0FBTztvQkFBRUMsV0FBVztnQkFBTzs7a0NBQ3hFLDhEQUFDSjt3QkFBR04sV0FBVTtrQ0FBZ0M7Ozs7OztrQ0FDOUMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1A7Z0NBQVlDLE9BQU07Z0NBQVlDLFNBQVE7Z0NBQTRCQyxVQUFTOzs7Ozs7MENBQzVFLDhEQUFDSDtnQ0FBWUMsT0FBTTtnQ0FBWUMsU0FBUTtnQ0FBNEJDLFVBQVM7Ozs7OzswQ0FDNUUsOERBQUNIO2dDQUFZQyxPQUFNO2dDQUFZQyxTQUFRO2dDQUE0QkMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RGO01BZE1ZO0FBZ0JOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy50c3g/MzllYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7IHRpdGxlLCBkZXRhaWxzLCBpbWFnZVVybCB9OiB7IHRpdGxlOiBzdHJpbmcsIGRldGFpbHM6IHN0cmluZywgaW1hZ2VVcmw6IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQgcmVsYXRpdmUgYmctYmx1ZS0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4gICAgPlxuICAgICAgXG4gICAgICBcbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgJHtpc0hvdmVyZWQgPyAnZ2xpdGNoJyA6ICcnfWB9XG4gICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wIGJnLWJsdWUtMjAwIHAtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNTAwICR7aXNIb3ZlcmVkID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj57ZGV0YWlsc308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBwLTQgdGV4dC1ibGFja1wiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzEydmgnIH19PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG10LTIwIG1iLThcIj5MYXN0IHByb2plY3RzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgPFByb2plY3RDYXJkIHRpdGxlPVwiUHJvamVjdCAxXCIgZGV0YWlscz1cIlNwZWNpZmljaGUgZGVsIHByb2dldHRvIDFcIiBpbWFnZVVybD1cIi9wYXRoL3RvL2ltYWdlMS5qcGdcIiAvPlxuICAgICAgICAgIDxQcm9qZWN0Q2FyZCB0aXRsZT1cIlByb2plY3QgMlwiIGRldGFpbHM9XCJTcGVjaWZpY2hlIGRlbCBwcm9nZXR0byAyXCIgaW1hZ2VVcmw9XCIvcGF0aC90by9pbWFnZTIuanBnXCIgLz5cbiAgICAgICAgICA8UHJvamVjdENhcmQgdGl0bGU9XCJQcm9qZWN0IDNcIiBkZXRhaWxzPVwiU3BlY2lmaWNoZSBkZWwgcHJvZ2V0dG8gM1wiIGltYWdlVXJsPVwiL3BhdGgvdG8vaW1hZ2UzLmpwZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJJbWFnZSIsIlByb2plY3RDYXJkIiwidGl0bGUiLCJkZXRhaWxzIiwiaW1hZ2VVcmwiLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImgxIiwicCIsIlByb2plY3RzIiwic3R5bGUiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});