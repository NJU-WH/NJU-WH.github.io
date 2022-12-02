"use strict";

function _createForOfIteratorHelper(e, t) {
	var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
	if (!o) {
		if (Array.isArray(e) || (o = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
			o && (e = o);
			var n = 0,
				r = function() {};
			return {
				s: r,
				n: function() {
					return n >= e.length ? {
						done: !0
					} : {
						done: !1,
						value: e[n++]
					}
				},
				e: function(e) {
					throw e
				},
				f: r
			}
		}
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}
	var a, i = !0,
		c = !1;
	return {
		s: function() {
			o = o.call(e)
		},
		n: function() {
			var e = o.next();
			return i = e.done, e
		},
		e: function(e) {
			c = !0, a = e
		},
		f: function() {
			try {
				i || null == o.
				return ||o.
				return ()
			} finally {
				if (c) throw a
			}
		}
	}
}

function _unsupportedIterableToArray(e, t) {
	if (e) {
		if ("string" == typeof e) return _arrayLikeToArray(e, t);
		var o = Object.prototype.toString.call(e).slice(8, -1);
		return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(e, t) : void 0
	}
}

function _arrayLikeToArray(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
	return n
}

function _typeof(e) {
	return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	})(e)
}

function stopImgRightDrag() {
	$("img").on("dragstart", function() {
		return !1
	})
}

function checkOpen() {}

function coverColor() {
	var _document$getElementB, path = null === (_document$getElementB = document.getElementById("post-cover")) || void 0 === _document$getElementB ? void 0 : _document$getElementB.src,
		httpRequest;
	void 0 !== path ? (httpRequest = new XMLHttpRequest, httpRequest.open("GET", path + "?imageAve", !0), httpRequest.send(), httpRequest.onreadystatechange = function() {
		var json, obj, value, value;
		4 == httpRequest.readyState && 200 == httpRequest.status && (json = httpRequest.responseText, obj = eval("(" + json + ")"), value = obj.RGB, value = "#" + value.slice(2), "light" == getContrastYIQ(value) && (value = LightenDarkenColor(colorHex(value), -40)), document.styleSheets[0].addRule(":root", "--heo-main:" + value + "!important"), document.styleSheets[0].addRule(":root", "--heo-main-op:" + value + "23!important"), document.getElementById("coverdiv").classList.add("loaded"))
	}) : (document.styleSheets[0].addRule(":root", "--heo-main: var(--heo-theme)!important"), document.styleSheets[0].addRule(":root", "--heo-shadow-op: var(--heo-theme-op)!important"))
}

function colorHex(e) {
	var t = e;
	if (/^(rgb|RGB)/.test(t)) {
		for (var o = t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), n = "#", r = 0; r < o.length; r++) {
			var a = Number(o[r]).toString(16);
			"0" === a && (a += a), n += a
		}
		return 7 !== n.length && (n = t), n
	}
	if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) return t;
	var i = t.replace(/#/, "").split("");
	if (6 === i.length) return t;
	if (3 === i.length) {
		for (var c = "#", r = 0; r < i.length; r += 1) c += i[r] + i[r];
		return c
	}
}

function colorRgb(e) {
	var t = e.toLowerCase();
	if (t && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) {
		if (4 === t.length) {
			for (var o = "#", n = 1; n < 4; n += 1) o += t.slice(n, n + 1).concat(t.slice(n, n + 1));
			t = o
		}
		for (var r = [], n = 1; n < 7; n += 2) r.push(parseInt("0x" + t.slice(n, n + 2)));
		return "rgb(" + r.join(",") + ")"
	}
	return t
}

function LightenDarkenColor(e, t) {
	var o = !1;
	"#" == e[0] && (e = e.slice(1), o = !0);
	var n = parseInt(e, 16),
		r = (n >> 16) + t;
	255 < r ? r = 255 : r < 0 && (r = 0);
	var a = (n >> 8 & 255) + t;
	255 < a ? a = 255 : a < 0 && (a = 0);
	var i = (255 & n) + t;
	return 255 < i ? i = 255 : i < 0 && (i = 0), (o ? "#" : "") + String("000000" + (i | a << 8 | r << 16).toString(16)).slice(-6)
}

function getContrastYIQ(e) {
	var t = colorRgb(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),
		o = 299 * t[1] + 587 * t[2] + 114 * t[3];
	return .5 <= (o /= 255e3) ? "light" : "dark"
}

function hidecookie() {
	document.getElementById("cookies-window").classList.add("cw-hide")
}

function navTitle() {
	var e = document.title.replace(" | NJUWH", "");
	document.getElementById("page-name-text").innerHTML = e
}

function qrcodeCreate() {
	document.getElementById("qrcode") && new QRCode(document.getElementById("qrcode"), {
		text: window.location.href,
		width: 250,
		height: 250,
		colorDark: "#000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	})
}

function topPostScroll() {
	var o;
	document.getElementById("recent-post-top") && (o = document.getElementById("recent-post-top")).addEventListener("mousewheel", function(e) {
		var t = -e.wheelDelta / 2;
		o.scrollLeft += t, document.body.clientWidth < 1300 && e.preventDefault()
	}, !1)
}

function topCategoriesBarScroll() {
	var o;
	document.getElementById("category-bar-items") && (o = document.getElementById("category-bar-items")).addEventListener("mousewheel", function(e) {
		var t = -e.wheelDelta / 2;
		o.scrollLeft += t, e.preventDefault()
	}, !1)
}

function showcopy() {
	var e;
	void 0 !== GLOBAL_CONFIG.Snackbar ? btf.snackbarShow(GLOBAL_CONFIG.copy.success) : ((e = ctx.previousElementSibling).innerText = GLOBAL_CONFIG.copy.success, e.style.opacity = 1, setTimeout(function() {
		e.style.opacity = 0
	}, 700))
}
categoriesBarActive(), tagPageActive(), checkOpen.toString = function() {
	this.opened = !0
}, setTimeout("hidecookie()", 3e3), window.onload = function() {
	for (var e = document.getElementsByClassName("copybtn"), t = 0; t < e.length; t++) document.getElementsByClassName("copybtn")[t].addEventListener("click", function() {
		showcopy()
	})
};
var OriginTitile = document.title,
	titleTime;
document.addEventListener("visibilitychange", function() {
	document.hidden ? (document.title = "NJUWH", clearTimeout(titleTime)) : document.title = OriginTitile
});
var getTimeState = function() {
	var e = (new Date).getHours(),
		t = "";
	return 0 <= e && e <= 5 ? t = "晚安" : 5 < e && e <= 10 ? t = "早上好" : 10 < e && e <= 14 ? t = "中午好" : 14 < e && e <= 18 ? t = "下午好" : 18 < e && e <= 24 && (t = "晚上好"), t
};

function sayhi() {
	document.querySelector("#author-info__sayhi") && (document.getElementById("author-info__sayhi").innerHTML = "👋  " + getTimeState() + "！我是")
}

function fly_to_top() {
	document.getElementById("guli_top").classList.add("open_wing"), setTimeout(function() {
		document.getElementById("guli_top").classList.add("flying"), btf.scrollToDest(0, 300)
	}, 300), setTimeout(function() {
		document.getElementById("guli_top").classList.remove("flying"), document.getElementById("guli_top").classList.remove("open_wing"), document.getElementById("guli_top").style.cssText = "opacity: ''; transform: ''"
	}, 600)
}
var navFn = {
	switchDarkMode: function() {
		"light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(), saveToLocal.set("theme", "dark", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night, !1, 2e3)) : (activateLightMode(), saveToLocal.set("theme", "light", 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day, !1, 2e3)), "function" == typeof utterancesTheme && utterancesTheme(), "object" === ("undefined" == typeof FB ? "undefined" : _typeof(FB)) && window.loadFBComment(), window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(function() {
			return window.disqusReset()
		}, 200);
		var e, t, o, n = "light" === document.documentElement.getAttribute("data-theme") ? "#363636" : "#F7F7FA";
		document.getElementById("posts-chart") && ((e = postsOption).textStyle.color = n, e.title.textStyle.color = n, e.xAxis.axisLine.lineStyle.color = n, e.yAxis.axisLine.lineStyle.color = n, postsChart.setOption(e)), document.getElementById("tags-chart") && ((t = tagsOption).textStyle.color = n, t.title.textStyle.color = n, t.xAxis.axisLine.lineStyle.color = n, t.yAxis.axisLine.lineStyle.color = n, tagsChart.setOption(t)), document.getElementById("categories-chart") && ((o = categoriesOption).textStyle.color = n, o.title.textStyle.color = n, o.legend.textStyle.color = n, categoriesChart.setOption(o))
	}
};

function categoriesBarActive() {
	var e, t = window.location.pathname;
	"/" == (t = decodeURIComponent(t)) ? document.querySelector("#category-bar") && document.getElementById("首页").classList.add("select") : /\/categories\/.*?\//.test(t) && (e = t.split("/")[2], document.querySelector("#category-bar") && document.getElementById(e).classList.add("select"))
}

function RemoveRewardMask() {
	$(".reward-main").attr("style", "display: none"), $("#quit-box").attr("style", "display: none")
}

function AddRewardMask() {
	$(".reward-main").attr("style", "display: flex"), $("#quit-box").attr("style", "display: flex")
}

function addTag() {
	addTagNew(), addTagHot()
}

function addTagNew() {
	document.querySelector(".heo-tag-new") && $(".heo-tag-new").append('<sup class="heo-tag heo-tag-new-view">N</sup>')
}

function addTagHot() {
	document.querySelector(".heo-tag-hot") && $(".heo-tag-hot").append('<sup class="heo-tag heo-tag-hot-view">H</sup>')
}

function removeLoading() {
	setTimeout(function() {
		preloader.endLoading()
	}, 3e3)
}

function getArrayItems(e, t) {
	var o = new Array;
	for (var n in e) o.push(e[n]);
	for (var r = new Array, a = 0; a < t && 0 < o.length; a++) {
		var i = Math.floor(Math.random() * o.length);
		r[a] = o[i], o.splice(i, 1)
	}
	return r
}

function onlyHome() {
	var e = window.location.pathname;
	"/" == (e = decodeURIComponent(e)) ? $(".only-home").attr("style", "display: flex") : $(".only-home").attr("style", "display: none")
}

function tagPageActive() {
	var e = window.location.pathname,
		e = decodeURIComponent(e);
	console.log(e);
	var t, o, n = /\/tags\/.*?\//.test(e);
	console.log(n), n && (t = e.split("/"), console.log(t[2]), o = t[2], document.querySelector("#tag-page-tags") && document.getElementById(o).classList.add("select"))
}
$(document).unbind("keydown").bind("keydown", function(e) {
	if ((e.ctrlKey || e.metaKey) && 67 == e.keyCode && "" != selectTextNow) return btf.snackbarShow("复制成功，复制和转载请标注本文地址"), rm.rightmenuCopyText(selectTextNow), !1
}), document.addEventListener("scroll", function() {
	var e, t = window.scrollY + document.documentElement.clientHeight,
		o = window.scrollY,
		n = document.getElementById("pagination"),
		r = document.getElementById("post-tools");
	r && n && (e = r.offsetTop + r.offsetHeight / 2, 1300 < document.body.clientWidth && (n.style.bottom = o < e && e < t ? "0" : "-100px"))
}), navigator.serviceWorker.getRegistrations().then(function(e) {
	var t, o = _createForOfIteratorHelper(e);
	try {
		for (o.s(); !(t = o.n()).done;) {
			t.value.unregister()
		}
	} catch (e) {
		o.e(e)
	} finally {
		o.f()
	}
}), $("#loading-box").on("click", function() {
	document.getElementById("loading-box").classList.add("loaded")
}), window.onkeydown = function(e) {
	123 === e.keyCode && btf.snackbarShow("开发者模式已打开，请遵循GPL协议", !1, 3e3)
};