/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/linkedList.js":
/*!******************************!*\
  !*** ./src/js/linkedList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/js/node.js");

class LinkedList {
  #head;
  constructor() {
    this.#head = null;
  }
  append(value) {
    if (this.#head === null) {
      this.prepend(value);
    } else {
      let tmp = this.#head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](value, null);
    }
  }
  prepend(value) {
    this.#head = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](value, this.#head);
  }
  size() {
    let count = 0;
    let tmp = this.#head;
    while (tmp !== null) {
      count += 1;
      tmp = tmp.nextNode;
    }
    return count;
  }
  getHead() {
    return this.#head;
  }
  getTail() {
    let tmp = this.#head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }
  at(index) {
    let i = 0;
    let tmp = this.#head;
    while (tmp.nextNode !== null && i < index) {
      tmp = tmp.nextNode;
      i += 1;
    }
    if (tmp.nextNode === null) {
      throw new Error('Index not in list');
    }
    return tmp;
  }
  pop() {
    if (this.size() === 0) {
      throw new Error('Cannot delete from empty list');
    }
    if (this.size === 1) {
      this.#head = null;
      return;
    }
    let cur = this.#head;
    let prev = null;
    while (cur.nextNode !== null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
  }
  contains(value) {
    let tmp = this.#head;
    while (tmp !== null && tmp.value !== value) {
      tmp = tmp.nextNode;
    }
    return tmp !== null;
  }
  find(value) {
    let i = 0;
    let tmp = this.#head;
    while (tmp !== null && tmp.value !== value) {
      tmp = tmp.nextNode;
      i += 1;
    }
    return tmp === null ? null : i;
  }
  toString() {
    let listString = '';
    let tmp = this.#head;
    while (tmp !== null) {
      listString = `${listString}( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    listString += 'null';
    return listString;
  }
  insertAt(value, index) {
    let i = 0;
    let tmp = this.#head;
    if (index === 0) {
      this.#head = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](value, tmp);
      return;
    }
    while (tmp.nextNode !== null && i < index - 1) {
      tmp = tmp.nextNode;
      i += 1;
    }
    if (tmp !== null) {
      tmp.nextNode = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](value, tmp.nextNode);
    } else {
      throw new Error('Index not in list');
    }
  }
  removeAt(index) {
    if (this.#head === null) {
      throw new Error('Cannot delete from empty list');
    }
    if (index === 0) {
      this.#head = this.#head.nextNode;
      return;
    }
    let i = 0;
    let cur = this.#head;
    let prev = null;
    while (cur !== null && i < index) {
      prev = cur;
      cur = cur.nextNode;
      i += 1;
    }
    if (cur === null) {
      throw new Error('Index not in list');
    }
    prev.nextNode = cur.nextNode;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);

/***/ }),

/***/ "./src/js/node.js":
/*!************************!*\
  !*** ./src/js/node.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Node {
  constructor() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let nextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.value = value;
    this.nextNode = nextNode;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ "./src/js/linkedList.js");
// import '../style.css';

const example = new _linkedList__WEBPACK_IMPORTED_MODULE_0__["default"]();
example.append('b');
example.prepend('a');
example.append('c');
example.append('d');
console.log(example);
console.log(example.size());
example.pop();
console.log(example.size());
console.log(example.getHead());
console.log(example.getTail());
console.log(example.at(0));
console.log(example.contains('a'));
console.log(example.contains('d'));
console.log(example.find('a'));
console.log(example.find('d'));
console.log(example.toString());
example.insertAt('0', 1);
console.log(example.toString());
example.removeAt(1);
console.log(example.toString());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL25ldy8uL3NyYy9qcy9saW5rZWRMaXN0LmpzIiwid2VicGFjazovL25ldy8uL3NyYy9qcy9ub2RlLmpzIiwid2VicGFjazovL25ldy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnO1xyXG5cclxuY2xhc3MgTGlua2VkTGlzdCB7XHJcbiAgI2hlYWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4jaGVhZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBhcHBlbmQodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNoZWFkID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucHJlcGVuZCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgdG1wID0gdGhpcy4jaGVhZDtcclxuXHJcbiAgICAgIHdoaWxlICh0bXAubmV4dE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICB0bXAgPSB0bXAubmV4dE5vZGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRtcC5uZXh0Tm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXBlbmQodmFsdWUpIHtcclxuICAgIHRoaXMuI2hlYWQgPSBuZXcgTm9kZSh2YWx1ZSwgdGhpcy4jaGVhZCk7XHJcbiAgfVxyXG5cclxuICBzaXplKCkge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCB0bXAgPSB0aGlzLiNoZWFkO1xyXG5cclxuICAgIHdoaWxlICh0bXAgIT09IG51bGwpIHtcclxuICAgICAgY291bnQgKz0gMTtcclxuICAgICAgdG1wID0gdG1wLm5leHROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb3VudDtcclxuICB9XHJcblxyXG4gIGdldEhlYWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jaGVhZDtcclxuICB9XHJcblxyXG4gIGdldFRhaWwoKSB7XHJcbiAgICBsZXQgdG1wID0gdGhpcy4jaGVhZDtcclxuXHJcbiAgICB3aGlsZSAodG1wLm5leHROb2RlICE9PSBudWxsKSB7XHJcbiAgICAgIHRtcCA9IHRtcC5uZXh0Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG1wO1xyXG4gIH1cclxuXHJcbiAgYXQoaW5kZXgpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCB0bXAgPSB0aGlzLiNoZWFkO1xyXG5cclxuICAgIHdoaWxlICh0bXAubmV4dE5vZGUgIT09IG51bGwgJiYgaSA8IGluZGV4KSB7XHJcbiAgICAgIHRtcCA9IHRtcC5uZXh0Tm9kZTtcclxuICAgICAgaSArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRtcC5uZXh0Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZGV4IG5vdCBpbiBsaXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRtcDtcclxuICB9XHJcblxyXG4gIHBvcCgpIHtcclxuICAgIGlmICh0aGlzLnNpemUoKSA9PT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgZnJvbSBlbXB0eSBsaXN0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaXplID09PSAxKSB7XHJcbiAgICAgIHRoaXMuI2hlYWQgPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1ciA9IHRoaXMuI2hlYWQ7XHJcbiAgICBsZXQgcHJldiA9IG51bGw7XHJcblxyXG4gICAgd2hpbGUgKGN1ci5uZXh0Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICBwcmV2ID0gY3VyO1xyXG4gICAgICBjdXIgPSBjdXIubmV4dE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldi5uZXh0Tm9kZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjb250YWlucyh2YWx1ZSkge1xyXG4gICAgbGV0IHRtcCA9IHRoaXMuI2hlYWQ7XHJcblxyXG4gICAgd2hpbGUgKHRtcCAhPT0gbnVsbCAmJiB0bXAudmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRtcCA9IHRtcC5uZXh0Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG1wICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZmluZCh2YWx1ZSkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgbGV0IHRtcCA9IHRoaXMuI2hlYWQ7XHJcblxyXG4gICAgd2hpbGUgKHRtcCAhPT0gbnVsbCAmJiB0bXAudmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRtcCA9IHRtcC5uZXh0Tm9kZTtcclxuICAgICAgaSArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0bXAgPT09IG51bGwgPyBudWxsIDogaTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgbGV0IGxpc3RTdHJpbmcgPSAnJztcclxuICAgIGxldCB0bXAgPSB0aGlzLiNoZWFkO1xyXG5cclxuICAgIHdoaWxlICh0bXAgIT09IG51bGwpIHtcclxuICAgICAgbGlzdFN0cmluZyA9IGAke2xpc3RTdHJpbmd9KCAke3RtcC52YWx1ZX0gKSAtPiBgO1xyXG4gICAgICB0bXAgPSB0bXAubmV4dE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdFN0cmluZyArPSAnbnVsbCc7XHJcbiAgICByZXR1cm4gbGlzdFN0cmluZztcclxuICB9XHJcblxyXG4gIGluc2VydEF0KHZhbHVlLCBpbmRleCkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgbGV0IHRtcCA9IHRoaXMuI2hlYWQ7XHJcblxyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuI2hlYWQgPSBuZXcgTm9kZSh2YWx1ZSwgdG1wKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB3aGlsZSAodG1wLm5leHROb2RlICE9PSBudWxsICYmIGkgPCBpbmRleCAtIDEpIHtcclxuICAgICAgdG1wID0gdG1wLm5leHROb2RlO1xyXG4gICAgICBpICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRtcCAhPT0gbnVsbCkge1xyXG4gICAgICB0bXAubmV4dE5vZGUgPSBuZXcgTm9kZSh2YWx1ZSwgdG1wLm5leHROb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5kZXggbm90IGluIGxpc3QnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUF0KGluZGV4KSB7XHJcbiAgICBpZiAodGhpcy4jaGVhZCA9PT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgZnJvbSBlbXB0eSBsaXN0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgdGhpcy4jaGVhZCA9IHRoaXMuI2hlYWQubmV4dE5vZGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgY3VyID0gdGhpcy4jaGVhZDtcclxuICAgIGxldCBwcmV2ID0gbnVsbDtcclxuXHJcbiAgICB3aGlsZShjdXIgIT09IG51bGwgJiYgaSA8IGluZGV4KSB7XHJcbiAgICAgIHByZXYgPSBjdXI7XHJcbiAgICAgIGN1ciA9IGN1ci5uZXh0Tm9kZTtcclxuICAgICAgaSArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXIgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmRleCBub3QgaW4gbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXYubmV4dE5vZGUgPSBjdXIubmV4dE5vZGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRMaXN0O1xyXG4iLCJjbGFzcyBOb2RlIHtcclxuICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IG51bGwsIG5leHROb2RlID0gbnVsbCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5uZXh0Tm9kZSA9IG5leHROb2RlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm9kZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCAnLi4vc3R5bGUuY3NzJztcclxuaW1wb3J0IExpbmtlZExpc3QgZnJvbSAnLi9saW5rZWRMaXN0JztcclxuXHJcbmNvbnN0IGV4YW1wbGUgPSBuZXcgTGlua2VkTGlzdCgpO1xyXG5cclxuZXhhbXBsZS5hcHBlbmQoJ2InKTtcclxuZXhhbXBsZS5wcmVwZW5kKCdhJyk7XHJcbmV4YW1wbGUuYXBwZW5kKCdjJyk7XHJcbmV4YW1wbGUuYXBwZW5kKCdkJyk7XHJcbmNvbnNvbGUubG9nKGV4YW1wbGUpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlLnNpemUoKSk7XHJcbmV4YW1wbGUucG9wKCk7XHJcbmNvbnNvbGUubG9nKGV4YW1wbGUuc2l6ZSgpKTtcclxuY29uc29sZS5sb2coZXhhbXBsZS5nZXRIZWFkKCkpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlLmdldFRhaWwoKSk7XHJcbmNvbnNvbGUubG9nKGV4YW1wbGUuYXQoMCkpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlLmNvbnRhaW5zKCdhJykpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlLmNvbnRhaW5zKCdkJykpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlLmZpbmQoJ2EnKSk7XHJcbmNvbnNvbGUubG9nKGV4YW1wbGUuZmluZCgnZCcpKTtcclxuY29uc29sZS5sb2coZXhhbXBsZS50b1N0cmluZygpKTtcclxuZXhhbXBsZS5pbnNlcnRBdCgnMCcsIDEpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlLnRvU3RyaW5nKCkpO1xyXG5leGFtcGxlLnJlbW92ZUF0KDEpO1xyXG5jb25zb2xlLmxvZyhleGFtcGxlLnRvU3RyaW5nKCkpOyJdLCJuYW1lcyI6WyJOb2RlIiwiTGlua2VkTGlzdCIsImhlYWQiLCJjb25zdHJ1Y3RvciIsImFwcGVuZCIsInZhbHVlIiwicHJlcGVuZCIsInRtcCIsIm5leHROb2RlIiwic2l6ZSIsImNvdW50IiwiZ2V0SGVhZCIsImdldFRhaWwiLCJhdCIsImluZGV4IiwiaSIsIkVycm9yIiwicG9wIiwiY3VyIiwicHJldiIsImNvbnRhaW5zIiwiZmluZCIsInRvU3RyaW5nIiwibGlzdFN0cmluZyIsImluc2VydEF0IiwicmVtb3ZlQXQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJleGFtcGxlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=