/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const today = () => {
    var today = new Date();
    return (today);
};
exports["default"] = today;


/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
const commitEditionFunctions_1 = __webpack_require__(2);
function activate(context) {
    console.log('Congratulations, your extension "commitme" is now active!');
    context.subscriptions.push(vscode.commands.registerCommand('commitme.helloWorld', () => {
        vscode.window.showInformationMessage('Hello from CommitMe!');
    }));
    context.subscriptions.push(vscode.commands.registerCommand("commitme.commitMsg", async () => {
        const time = (0, commitEditionFunctions_1.default)();
        const message = await vscode.window.showInputBox({
            placeHolder: `${time}`,
            title: 'Commit Message',
            prompt: 'For more info see Conventional Commits'
        });
        //use message as a commit
        // todo = reserch if placeholder can be passed as a value
        if (typeof message === 'undefined') {
            vscode.window.showInformationMessage(`${time} Send Sucessefuly`);
        }
        else {
            vscode.window.showInformationMessage(`${message} Send Sucessefuly`);
        }
        ;
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map