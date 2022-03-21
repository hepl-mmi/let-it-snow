/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Animation.ts":
/*!*****************************!*\
  !*** ./src/js/Animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Snowflake_1 = __webpack_require__(/*! ./Snowflake */ \"./src/js/Snowflake.ts\");\n\nvar Animation = function () {\n  function Animation(ctx, canvas, snowflakes, sky, mousePosition) {\n    this.mousePosition = mousePosition;\n    this.snowflakes = snowflakes;\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.sky = sky;\n  }\n\n  Animation.prototype.start = function () {\n    var _this = this;\n\n    this.sky.update();\n\n    if (Math.random() < 0.5) {\n      this.snowflakes.push(new Snowflake_1.Snowflake(this.ctx, this.canvas, this.mousePosition));\n    } else {\n      if (this.snowflakes.length > 0 && !this.snowflakes[0].isAlive) {\n        this.snowflakes.shift();\n      }\n    }\n\n    this.snowflakes.forEach(function (snowflake) {\n      snowflake.update();\n    });\n    requestAnimationFrame(function () {\n      _this.start();\n    });\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBSUE7QUFPSSxxQkFBWUEsR0FBWixFQUEyQ0MsTUFBM0MsRUFBc0VDLFVBQXRFLEVBQStGQyxHQUEvRixFQUF5R0MsYUFBekcsRUFBc0o7QUFDbEosU0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLRixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtFLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVERTtBQUFBOztBQUNJLFNBQUtGLEdBQUwsQ0FBU0csTUFBVDs7QUFDQSxRQUFJQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDckIsV0FBS04sVUFBTCxDQUFnQk8sSUFBaEIsQ0FBcUIsSUFBSUMscUJBQUosQ0FBYyxLQUFLVixHQUFuQixFQUF3QixLQUFLQyxNQUE3QixFQUFxQyxLQUFLRyxhQUExQyxDQUFyQjtBQUNILEtBRkQsTUFFTztBQUNILFVBQUksS0FBS0YsVUFBTCxDQUFnQlMsTUFBaEIsR0FBeUIsQ0FBekIsSUFBOEIsQ0FBQyxLQUFLVCxVQUFMLENBQWdCLENBQWhCLEVBQW1CVSxPQUF0RCxFQUErRDtBQUMzRCxhQUFLVixVQUFMLENBQWdCVyxLQUFoQjtBQUNIO0FBQ0o7O0FBQ0QsU0FBS1gsVUFBTCxDQUFnQlksT0FBaEIsQ0FBd0IsVUFBQ0MsU0FBRCxFQUFVO0FBQzlCQSxlQUFTLENBQUNULE1BQVY7QUFDSCxLQUZEO0FBSUFVLHlCQUFxQixDQUFDO0FBQ2xCQyxXQUFJLENBQUNDLEtBQUw7QUFDSCxLQUZvQixDQUFyQjtBQUdILEdBaEJEOztBQWlCSjtBQUFDLENBaENEOztBQUFhQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9BbmltYXRpb24udHM/N2NlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Nub3dmbGFrZX0gZnJvbSBcIi4vU25vd2ZsYWtlXCI7XG5pbXBvcnQge1NreX0gZnJvbSBcIi4vU2t5XCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNub3dmbGFrZXM6IFNub3dmbGFrZVtdO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2t5OiBTa3k7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uOiB7IG5ld1g6IG51bWJlcjsgb2xkWDogbnVtYmVyIH07XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgc25vd2ZsYWtlczogU25vd2ZsYWtlW10sIHNreTogU2t5LCBtb3VzZVBvc2l0aW9uOiB7IG5ld1g6IG51bWJlcjsgb2xkWDogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uID0gbW91c2VQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zbm93Zmxha2VzID0gc25vd2ZsYWtlcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnNreSA9IHNreTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5za3kudXBkYXRlKClcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtlcy5wdXNoKG5ldyBTbm93Zmxha2UodGhpcy5jdHgsIHRoaXMuY2FudmFzLCB0aGlzLm1vdXNlUG9zaXRpb24pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNub3dmbGFrZXMubGVuZ3RoID4gMCAmJiAhdGhpcy5zbm93Zmxha2VzWzBdLmlzQWxpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNub3dmbGFrZXMuZm9yRWFjaCgoc25vd2ZsYWtlKSA9PiB7XG4gICAgICAgICAgICBzbm93Zmxha2UudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY3R4IiwiY2FudmFzIiwic25vd2ZsYWtlcyIsInNreSIsIm1vdXNlUG9zaXRpb24iLCJBbmltYXRpb24iLCJ1cGRhdGUiLCJNYXRoIiwicmFuZG9tIiwicHVzaCIsIlNub3dmbGFrZV8xIiwibGVuZ3RoIiwiaXNBbGl2ZSIsInNoaWZ0IiwiZm9yRWFjaCIsInNub3dmbGFrZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIiwic3RhcnQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Animation.ts\n");

/***/ }),

/***/ "./src/js/Main.ts":
/*!************************!*\
  !*** ./src/js/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Sky_1 = __webpack_require__(/*! ./Sky */ \"./src/js/Sky.ts\");\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/js/Animation.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.snowflakes = [];\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.resizeCanvas();\n    this.mousePosition = {\n      newX: this.canvas.width / 2,\n      oldX: this.canvas.width / 2\n    };\n    this.sky = new Sky_1.Sky(this.canvas, this.ctx);\n    this.animation = new Animation_1.Animation(this.ctx, this.canvas, this.snowflakes, this.sky, this.mousePosition);\n    this.addEventListeners();\n    this.animation.start();\n  }\n\n  Main.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n\n      _this.snowflakes.forEach(function (snowflake) {\n        snowflake.isAlive = true;\n      });\n\n      _this.sky.updateSize();\n    });\n    this.canvas.addEventListener('mousemove', function (event) {\n      if (_this.mousePosition.newX != event.pageX) {\n        _this.mousePosition.oldX = _this.mousePosition.newX;\n        _this.mousePosition.newX = event.pageX;\n      }\n    });\n  };\n\n  Main.prototype.resizeCanvas = function () {\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n  };\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBSUE7QUFRSTtBQUNJLFNBQUtBLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0EsU0FBS0MsWUFBTDtBQUNBLFNBQUtDLGFBQUwsR0FBcUI7QUFBQ0MsVUFBSSxFQUFFLEtBQUtQLE1BQUwsQ0FBWVEsS0FBWixHQUFvQixDQUEzQjtBQUE4QkMsVUFBSSxFQUFFLEtBQUtULE1BQUwsQ0FBWVEsS0FBWixHQUFvQjtBQUF4RCxLQUFyQjtBQUNBLFNBQUtFLEdBQUwsR0FBVyxJQUFJQyxTQUFKLENBQVEsS0FBS1gsTUFBYixFQUFxQixLQUFLRyxHQUExQixDQUFYO0FBQ0EsU0FBS1MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjLEtBQUtWLEdBQW5CLEVBQXdCLEtBQUtILE1BQTdCLEVBQXFDLEtBQUtELFVBQTFDLEVBQXNELEtBQUtXLEdBQTNELEVBQWdFLEtBQUtKLGFBQXJFLENBQWpCO0FBQ0EsU0FBS1EsaUJBQUw7QUFDQSxTQUFLRixTQUFMLENBQWVHLEtBQWY7QUFDSDs7QUFFREM7QUFBQTs7QUFDSUMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQztBQUM5QkMsV0FBSSxDQUFDZCxZQUFMOztBQUNBYyxXQUFJLENBQUNwQixVQUFMLENBQWdCcUIsT0FBaEIsQ0FBd0IsVUFBQ0MsU0FBRCxFQUFVO0FBQzlCQSxpQkFBUyxDQUFDQyxPQUFWLEdBQW9CLElBQXBCO0FBQ0gsT0FGRDs7QUFHQUgsV0FBSSxDQUFDVCxHQUFMLENBQVNhLFVBQVQ7QUFDSCxLQU5EO0FBT0EsU0FBS3ZCLE1BQUwsQ0FBWWtCLGdCQUFaLENBQTZCLFdBQTdCLEVBQTBDLFVBQUNNLEtBQUQsRUFBa0I7QUFDeEQsVUFBSUwsS0FBSSxDQUFDYixhQUFMLENBQW1CQyxJQUFuQixJQUEyQmlCLEtBQUssQ0FBQ0MsS0FBckMsRUFBNEM7QUFDNUNOLGFBQUksQ0FBQ2IsYUFBTCxDQUFtQkcsSUFBbkIsR0FBMEJVLEtBQUksQ0FBQ2IsYUFBTCxDQUFtQkMsSUFBN0M7QUFDQVksYUFBSSxDQUFDYixhQUFMLENBQW1CQyxJQUFuQixHQUEwQmlCLEtBQUssQ0FBQ0MsS0FBaEM7QUFDQztBQUNKLEtBTEQ7QUFNSCxHQWREOztBQWlCQVQ7QUFDSSxTQUFLaEIsTUFBTCxDQUFZUSxLQUFaLEdBQW9CUyxNQUFNLENBQUNTLFVBQTNCO0FBQ0EsU0FBSzFCLE1BQUwsQ0FBWTJCLE1BQVosR0FBcUJWLE1BQU0sQ0FBQ1csV0FBNUI7QUFDSCxHQUhEOztBQUlKO0FBQUMsQ0F6Q0Q7O0FBMkNBLElBQUlaLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9NYWluLnRzPzAxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTa3l9IGZyb20gXCIuL1NreVwiO1xuaW1wb3J0IHtBbmltYXRpb259IGZyb20gXCIuL0FuaW1hdGlvblwiO1xuaW1wb3J0IHtTbm93Zmxha2V9IGZyb20gXCIuL1Nub3dmbGFrZVwiO1xuXG5cbmNsYXNzIE1haW4ge1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgc2t5OiBTa3k7XG4gICAgcHJpdmF0ZSBhbmltYXRpb246IEFuaW1hdGlvbjtcbiAgICBwcml2YXRlIHNub3dmbGFrZXM6IFNub3dmbGFrZVtdO1xuICAgIHByaXZhdGUgbW91c2VQb3NpdGlvbjogeyBuZXdYOiBudW1iZXI7IG9sZFg6IG51bWJlciB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc25vd2ZsYWtlcyA9IFtdO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb24gPSB7bmV3WDogdGhpcy5jYW52YXMud2lkdGggLyAyLCBvbGRYOiB0aGlzLmNhbnZhcy53aWR0aCAvIDJ9XG4gICAgICAgIHRoaXMuc2t5ID0gbmV3IFNreSh0aGlzLmNhbnZhcywgdGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGhpcy5jdHgsIHRoaXMuY2FudmFzLCB0aGlzLnNub3dmbGFrZXMsIHRoaXMuc2t5LCB0aGlzLm1vdXNlUG9zaXRpb24pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzLmZvckVhY2goKHNub3dmbGFrZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNub3dmbGFrZS5pc0FsaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5za3kudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZVBvc2l0aW9uLm5ld1ggIT0gZXZlbnQucGFnZVgpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VQb3NpdGlvbi5vbGRYID0gdGhpcy5tb3VzZVBvc2l0aW9uLm5ld1g7XG4gICAgICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb24ubmV3WCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbn1cblxubmV3IE1haW4oKTsiXSwibmFtZXMiOlsic25vd2ZsYWtlcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplQ2FudmFzIiwibW91c2VQb3NpdGlvbiIsIm5ld1giLCJ3aWR0aCIsIm9sZFgiLCJza3kiLCJTa3lfMSIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbl8xIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzdGFydCIsIk1haW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMiLCJmb3JFYWNoIiwic25vd2ZsYWtlIiwiaXNBbGl2ZSIsInVwZGF0ZVNpemUiLCJldmVudCIsInBhZ2VYIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Main.ts\n");

/***/ }),

/***/ "./src/js/Sky.ts":
/*!***********************!*\
  !*** ./src/js/Sky.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Sky = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Sky = function () {\n  function Sky(canvas, ctx) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.update();\n  }\n\n  Sky.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.closePath();\n  };\n\n  Sky.prototype.updateSize = function () {\n    this.gradient = this.ctx.createLinearGradient(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);\n    var length = settings_1.settings.sky.gradient.length;\n\n    for (var i = 0; i < length; i++) {\n      this.gradient.addColorStop(i * (1 / (length - 1)), settings_1.settings.sky.gradient[i]);\n    }\n  };\n\n  Sky.prototype.update = function () {\n    this.updateSize();\n    this.draw();\n  };\n\n  return Sky;\n}();\n\nexports.Sky = Sky;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU2t5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFLSSxlQUFZQSxNQUFaLEVBQXVDQyxHQUF2QyxFQUFvRTtBQUNoRSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS0YsR0FBTCxDQUFTRyxTQUFUO0FBQ0EsU0FBS0gsR0FBTCxDQUFTSSxTQUFULEdBQXFCLEtBQUtDLFFBQTFCO0FBQ0EsU0FBS0wsR0FBTCxDQUFTTSxRQUFULENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEtBQUtQLE1BQUwsQ0FBWVEsS0FBcEMsRUFBMkMsS0FBS1IsTUFBTCxDQUFZUyxNQUF2RDtBQUNBLFNBQUtSLEdBQUwsQ0FBU1MsU0FBVDtBQUNILEdBTEQ7O0FBUUFQO0FBQ0ksU0FBS0csUUFBTCxHQUFnQixLQUFLTCxHQUFMLENBQVNVLG9CQUFULENBQThCLEtBQUtYLE1BQUwsQ0FBWVEsS0FBWixHQUFvQixDQUFsRCxFQUFxRCxDQUFyRCxFQUF3RCxLQUFLUixNQUFMLENBQVlRLEtBQVosR0FBb0IsQ0FBNUUsRUFBK0UsS0FBS1IsTUFBTCxDQUFZUyxNQUEzRixDQUFoQjtBQUNBLFFBQU1HLE1BQU0sR0FBR0Msb0JBQVNDLEdBQVQsQ0FBYVIsUUFBYixDQUFzQk0sTUFBckM7O0FBQ0EsU0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxNQUFwQixFQUE0QkcsQ0FBQyxFQUE3QixFQUFpQztBQUM3QixXQUFLVCxRQUFMLENBQWNVLFlBQWQsQ0FBMkJELENBQUMsSUFBSSxLQUFLSCxNQUFNLEdBQUcsQ0FBZCxDQUFKLENBQTVCLEVBQW1EQyxvQkFBU0MsR0FBVCxDQUFhUixRQUFiLENBQXNCUyxDQUF0QixDQUFuRDtBQUNIO0FBQ0osR0FORDs7QUFRQVo7QUFDSSxTQUFLYyxVQUFMO0FBQ0EsU0FBS0MsSUFBTDtBQUNILEdBSEQ7O0FBSUo7QUFBQyxDQS9CRDs7QUFBYUMsV0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9Ta3kudHM/ZGUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgU2t5IHtcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIGdyYWRpZW50OiBDYW52YXNHcmFkaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5ncmFkaWVudDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIC8vIFRoZSBnb2FsIGlzIHRvIGhhdmUgYSBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgdGhlIGdyYWRpZW50IHdpdGhvdXQgcmVkcmF3aW5nLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgdXBkYXRlU2l6ZSgpIHtcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzZXR0aW5ncy5za3kuZ3JhZGllbnQubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcChpICogKDEgLyAobGVuZ3RoIC0gMSkpLCBzZXR0aW5ncy5za3kuZ3JhZGllbnRbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJjdHgiLCJ1cGRhdGUiLCJTa3kiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJncmFkaWVudCIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbG9zZVBhdGgiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImxlbmd0aCIsInNldHRpbmdzXzEiLCJza3kiLCJpIiwiYWRkQ29sb3JTdG9wIiwidXBkYXRlU2l6ZSIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Sky.ts\n");

/***/ }),

/***/ "./src/js/Snowflake.ts":
/*!*****************************!*\
  !*** ./src/js/Snowflake.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Snowflake = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar helper_1 = __webpack_require__(/*! ./helper */ \"./src/js/helper.ts\");\n\nvar Snowflake = function () {\n  function Snowflake(ctx, canvas, mousePosition) {\n    this.mousePosition = mousePosition;\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.alpha1 = 0.5 + Math.random() / 2;\n    this.alpha2 = Math.random() / 2;\n    this.radius = Math.trunc((0, helper_1.random)(settings_1.settings.snowflake.radius.min, settings_1.settings.snowflake.radius.max));\n    this.position = {\n      x: Math.trunc((0, helper_1.random)(0, this.canvas.width - this.radius)),\n      y: -this.radius\n    };\n    this.isAlive = true;\n    this.speed = {\n      x: Math.trunc((0, helper_1.random)(settings_1.settings.snowflake.speedX.min, settings_1.settings.snowflake.speedX.max)),\n      y: settings_1.settings.snowflake.speedY.min + this.radius / settings_1.settings.snowflake.radius.max * (settings_1.settings.snowflake.speedY.max - settings_1.settings.snowflake.speedY.min)\n    };\n  }\n\n  Snowflake.prototype.update = function () {\n    if (this.isAlive && this.position.y < this.canvas.height - this.radius) {\n      this.position.y += this.speed.y;\n\n      if (this.mousePosition.oldX < this.mousePosition.newX) {\n        this.position.x += this.speed.x;\n      } else {\n        this.position.x -= this.speed.x;\n      }\n\n      this.gradient = this.ctx.createRadialGradient(this.position.x, this.position.y, 0, this.position.x, this.position.y, this.radius);\n      this.gradient.addColorStop(0, \"rgba(255,255,255,\".concat(this.alpha1, \")\"));\n      this.gradient.addColorStop(1, \"rgba(255, 255, 255, \".concat(this.alpha2, \")\"));\n    } else {\n      this.isAlive = false;\n    }\n\n    this.draw();\n  };\n\n  Snowflake.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  return Snowflake;\n}();\n\nexports.Snowflake = Snowflake;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxPQUFMLEdBQWUsS0FBZjtBQUNIOztBQUNELFNBQUtXLElBQUw7QUFDSCxHQWpCRDs7QUFtQkFQO0FBQ0ksU0FBS3JCLEdBQUwsQ0FBUzZCLFNBQVQ7QUFDQSxTQUFLN0IsR0FBTCxDQUFTOEIsU0FBVCxHQUFxQixLQUFLTCxRQUExQjtBQUNBLFNBQUt6QixHQUFMLENBQVMrQixHQUFULENBQWEsS0FBS2xCLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRyxDQUE1QyxFQUErQyxLQUFLVCxNQUFwRCxFQUE0RCxDQUE1RCxFQUErRCxJQUFJSCxJQUFJLENBQUM0QixFQUF4RTtBQUNBLFNBQUtoQyxHQUFMLENBQVNpQyxJQUFUO0FBQ0EsU0FBS2pDLEdBQUwsQ0FBU2tDLFNBQVQ7QUFDSCxHQU5EOztBQU9KO0FBQUMsQ0FyREQ7O0FBQWFDLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldC1pdC1zbm93Ly4vc3JjL2pzL1Nub3dmbGFrZS50cz9mNTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQge3JhbmRvbX0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTbm93Zmxha2Uge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQ6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFscGhhMTogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYWxwaGEyOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uOiB7IG5ld1g6IG51bWJlcjsgb2xkWDogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSBncmFkaWVudDogQ2FudmFzR3JhZGllbnQ7XG4gICAgcHVibGljIGlzQWxpdmU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgbW91c2VQb3NpdGlvbjogeyBuZXdYOiBudW1iZXI7IG9sZFg6IG51bWJlciB9KSB7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvbiA9IG1vdXNlUG9zaXRpb247XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5hbHBoYTEgPSAwLjUgKyBNYXRoLnJhbmRvbSgpIC8gMlxuICAgICAgICB0aGlzLmFscGhhMiA9IE1hdGgucmFuZG9tKCkgLyAyXG4gICAgICAgIHRoaXMucmFkaXVzID0gTWF0aC50cnVuYyhyYW5kb20oc2V0dGluZ3Muc25vd2ZsYWtlLnJhZGl1cy5taW4sIHNldHRpbmdzLnNub3dmbGFrZS5yYWRpdXMubWF4KSlcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt4OiBNYXRoLnRydW5jKHJhbmRvbSgwLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKSksIHk6IC10aGlzLnJhZGl1c31cbiAgICAgICAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgICAgICAgIHg6IE1hdGgudHJ1bmMocmFuZG9tKHNldHRpbmdzLnNub3dmbGFrZS5zcGVlZFgubWluLCBzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRYLm1heCkpLFxuICAgICAgICAgICAgeTogc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkWS5taW4gKyAodGhpcy5yYWRpdXMgLyBzZXR0aW5ncy5zbm93Zmxha2UucmFkaXVzLm1heCkgKiAoc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkWS5tYXggLSBzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRZLm1pbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbGl2ZSAmJiB0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZC55O1xuICAgICAgICAgICAgaWYgKHRoaXMubW91c2VQb3NpdGlvbi5vbGRYIDwgdGhpcy5tb3VzZVBvc2l0aW9uLm5ld1gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZC54O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZC54O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cyk7XG4gICAgICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjU1LDI1NSwke3RoaXMuYWxwaGExfSlgKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDI1NSwgMjU1LCAyNTUsICR7dGhpcy5hbHBoYTJ9KWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImN0eCIsImNhbnZhcyIsIm1vdXNlUG9zaXRpb24iLCJhbHBoYTEiLCJNYXRoIiwicmFuZG9tIiwiYWxwaGEyIiwicmFkaXVzIiwidHJ1bmMiLCJzZXR0aW5nc18xIiwic25vd2ZsYWtlIiwibWluIiwibWF4IiwicG9zaXRpb24iLCJ4Iiwid2lkdGgiLCJ5IiwiaXNBbGl2ZSIsInNwZWVkIiwic3BlZWRYIiwic3BlZWRZIiwiU25vd2ZsYWtlIiwiaGVpZ2h0Iiwib2xkWCIsIm5ld1giLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZHJhdyIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImFyYyIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Snowflake.ts\n");

/***/ }),

/***/ "./src/js/helper.ts":
/*!**************************!*\
  !*** ./src/js/helper.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = void 0;\n\nfunction random(min, max) {\n  return min + Math.random() * (max - min);\n}\n\nexports.random = random;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGVscGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBZ0JBLE1BQWhCLENBQXVCQyxHQUF2QixFQUFvQ0MsR0FBcEMsRUFBK0M7QUFDM0MsU0FBT0QsR0FBRyxHQUFHRSxJQUFJLENBQUNILE1BQUwsTUFBaUJFLEdBQUcsR0FBR0QsR0FBdkIsQ0FBYjtBQUNIOztBQUZERyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldC1pdC1zbm93Ly4vc3JjL2pzL2hlbHBlci50cz85NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn0iXSwibmFtZXMiOlsicmFuZG9tIiwibWluIiwibWF4IiwiTWF0aCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/helper.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sky: {\n    gradient: [\"hsl(219,93%,11%)\", \"hsl(219,100%,19%)\"]\n  },\n  snowflake: {\n    radius: {\n      min: 2,\n      max: 12\n    },\n    opacity: {\n      min: 0.5,\n      max: 0.9\n    },\n    speedX: {\n      min: 1,\n      max: 4\n    },\n    speedY: {\n      min: 1,\n      max: 6\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsS0FBRyxFQUFFO0FBQ0RDLFlBQVEsRUFBRSxDQUFDLGtCQUFELEVBQXFCLG1CQUFyQjtBQURULEdBRGU7QUFJcEJDLFdBQVMsRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLENBQU47QUFBU0MsU0FBRyxFQUFFO0FBQWQsS0FERDtBQUVQQyxXQUFPLEVBQUU7QUFBQ0YsU0FBRyxFQUFFLEdBQU47QUFBV0MsU0FBRyxFQUFFO0FBQWhCLEtBRkY7QUFHUEUsVUFBTSxFQUFFO0FBQUNILFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkLEtBSEQ7QUFJUEcsVUFBTSxFQUFFO0FBQUNKLFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkO0FBSkQ7QUFKUyxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgc2t5OiB7XG4gICAgICAgIGdyYWRpZW50OiBbXCJoc2woMjE5LDkzJSwxMSUpXCIsIFwiaHNsKDIxOSwxMDAlLDE5JSlcIl1cbiAgICB9LFxuICAgIHNub3dmbGFrZToge1xuICAgICAgICByYWRpdXM6IHttaW46IDIsIG1heDogMTJ9LFxuICAgICAgICBvcGFjaXR5OiB7bWluOiAwLjUsIG1heDogMC45fSxcbiAgICAgICAgc3BlZWRYOiB7bWluOiAxLCBtYXg6IDR9LFxuICAgICAgICBzcGVlZFk6IHttaW46IDEsIG1heDogNn0sXG4gICAgfVxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2t5IiwiZ3JhZGllbnQiLCJzbm93Zmxha2UiLCJyYWRpdXMiLCJtaW4iLCJtYXgiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/Main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklet_it_snow"] = self["webpackChunklet_it_snow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;