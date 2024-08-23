(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var w = size.w;
var h = size.h;

var READ = {
	t1: 1.3,
	t2: 1.7,
	t3: 2.1

};

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

var data_ = {};
var ease = "power2.out";

var colors = ["d4f035", "c4ed37", "b3ea38", "a3e73a", "93e43b", "82e13d", "72de3e", "62da40", "52d741", "41d443", "31d144", "21ce46", "10cb47", "00c849"];

var TOTAL = 12;

function start(data) {

	var tl = init();
	animate_bars();
	TweenLite.to(".hero img", { duration: 2, scale: 1.08 });
	// return

	tl.from(".t1a", { duration: .3, x: -size.w }, "+=.5");
	tl.from(".t1b", { duration: .3, x: -size.w });
	tl.add("t1", "+=" + READ.t1);

	tl.to(".t1", { duration: .3, x: 50, opacity: 0 }, "t1");
	tl.from(".t2a", { duration: .3, x: -size.w, opacity: 0 });
	tl.from(".t2b", { duration: .3, x: -size.w, opacity: 0 });

	tl.add("t2", "+=" + READ.t2);
	tl.to(".frame1", { duration: .3, x: 50, opacity: 0 }, "t2");
	tl.to(".frame2", { duration: .3, opacity: 1 }, "t2");

	tl.from(".t3a", { duration: .3, x: -size.w, opacity: 0 });
	tl.from(".t3b", { duration: .3, x: -size.w, opacity: 0 });
	tl.from(".t3c", { duration: .3, x: -size.w, opacity: 0 });

	tl.add("t3", "+=" + READ.t3);
	tl.to(".t3", { duration: .3, opacity: 0 }, "t3");

	tl.from(".t4", { duration: .3, opacity: 0 });
	tl.from([".cta", ".legalBtn"], { duration: .3, opacity: 0 });

	tl.add((0, _proline.olg)());
}

function animate_bars() {

	var bars = document.getElementById("bars");
	var TOTAL = 12;
	var HEIGHT = 45;
	var WIDTH_MAX = 276;
	var WIDTH_MIN = 69;
	var WIDTH_DIFF = WIDTH_MAX - WIDTH_MIN;
	var WIDTH_GAP = WIDTH_DIFF / TOTAL;

	for (var i = 0; i < TOTAL; i++) {
		var barItem = document.createElement("div");
		barItem.className = "bar bar_" + i;
		var height = HEIGHT / TOTAL;
		var gap = i * WIDTH_GAP;
		var width = WIDTH_MAX - gap;
		var y = height * i;
		var backgroundColor = "#" + colors[i];

		TweenLite.set(barItem, { height: height, width: width, y: y, backgroundColor: backgroundColor });

		bars.appendChild(barItem);
	}

	var tl = new TimelineMax();

	tl.from('.bar', {
		width: 0,
		stagger: 0.06
	});
	return tl;
}

exports.size = size;
exports.init = init;
exports.start = start;

},{"./proline":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],3:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.start)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
