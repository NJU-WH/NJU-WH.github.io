"use strict";

function asyncGeneratorStep(e, n, t, o, i, r, c) { try { var m = e[r](c),
            a = m.value } catch (e) { return void t(e) }
    m.done ? n(a) : Promise.resolve(a).then(o, i) }

function _asyncToGenerator(m) { return function() { var e = this,
            c = arguments; return new Promise(function(n, t) { var o = m.apply(e, c);

            function i(e) { asyncGeneratorStep(o, n, t, i, r, "next", e) }

            function r(e) { asyncGeneratorStep(o, n, t, i, r, "throw", e) }
            i(void 0) }) } }
var rm = {};
rm.stopdragimg = $("img"), rm.stopdragimg.on("dragstart", function() { return !1 }), rm.showRightMenu = function(e) { var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
        t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
        o = $("#rightMenu");
    o.css("top", n + "px").css("left", t + "px"), e ? (o.show(), stopMaskScroll()) : o.hide() }, rm.hideRightMenu = function() { rm.showRightMenu(!1), $("#rightmenu-mask").attr("style", "display: none") };
var rmWidth = $("#rightMenu").width(),
    rmHeight = $("#rightMenu").height();
rm.reloadrmSize = function() { rmWidth = $("#rightMenu").width(), rmHeight = $("#rightMenu").height() };
var domhref = "",
    domImgSrc = "";

function downloadImage(e, r) { rm.hideRightMenu(), 0 == rm.downloadimging ? (rm.downloadimging = !0, btf.snackbarShow("正在下载中，请稍后", !1, 1e4), setTimeout(function() { var i = new Image;
        i.setAttribute("crossOrigin", "anonymous"), i.onload = function() { var e = document.createElement("canvas");
            e.width = i.width, e.height = i.height, e.getContext("2d").drawImage(i, 0, 0, i.width, i.height); var n = e.toDataURL("image/png"),
                t = document.createElement("a"),
                o = new MouseEvent("click");
            t.download = r || "photo", t.href = n, t.dispatchEvent(o) }, i.src = e, btf.snackbarShow("图片已添加盲水印，请遵守版权协议"), rm.downloadimging = !1 }, "10000")) : btf.snackbarShow("有正在进行中的下载，请稍后再试") }

function imageToBlob(e) { var t = new Image,
        o = document.createElement("canvas"),
        i = o.getContext("2d"); return t.crossOrigin = "", t.src = e, new Promise(function(n) { t.onload = function() { o.width = this.naturalWidth, o.height = this.naturalHeight, i.drawImage(this, 0, 0), o.toBlob(function(e) { n(e) }, "image/png", .75) } }) }

function copyImage(e) { return _copyImage.apply(this, arguments) }

function _copyImage() { return (_copyImage = _asyncToGenerator(regeneratorRuntime.mark(function e(n) { var t, o; return regeneratorRuntime.wrap(function(e) { for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, imageToBlob(n);
                case 2:
                    t = e.sent, o = new ClipboardItem({ "image/png": t }), navigator.clipboard.write([o]);
                case 5:
                case "end":
                    return e.stop() } }, e) }))).apply(this, arguments) }

function stopMaskScroll() { document.getElementById("rightmenu-mask") && document.getElementById("rightmenu-mask").addEventListener("mousewheel", function(e) { rm.hideRightMenu() }, !1), document.getElementById("rightMenu") && document.getElementById("rightMenu").addEventListener("mousewheel", function(e) { rm.hideRightMenu() }, !1) }
window.oncontextmenu = function(e) { if (768 < document.body.clientWidth) { var n = e.clientX + 10,
            t = e.clientY,
            o = $(".rightMenuOther"),
            i = $(".rightMenuPlugin"),
            r = $("#menu-copytext"),
            c = $("#menu-commenttext"),
            m = $("#menu-newwindow"),
            a = $("#menu-copylink"),
            u = $("#menu-copyimg"),
            d = $("#menu-downloadimg"),
            h = $("#menu-search"),
            g = $("#menu-searchBaidu"),
            l = e.target.href,
            s = e.target.currentSrc,
            w = !1; return o.show(), selectTextNow && window.getSelection() ? (w = !0, r.show(), c.show(), h.show(), g.show(), o.hide()) : (r.hide(), c.hide(), g.hide(), h.hide()), l ? (w = !0, m.show(), a.show(), o.hide(), domhref = l) : (m.hide(), a.hide()), s ? (w = !0, u.show(), d.show(), o.hide(), domImgSrc = s) : (u.hide(), d.hide()), w ? i.show() : i.hide(), rm.reloadrmSize(), n + rmWidth > window.innerWidth && (n -= rmWidth + 10), t + rmHeight > window.innerHeight && (t -= t + rmHeight - window.innerHeight), rm.showRightMenu(!0, t, n), $("#rightmenu-mask").attr("style", "display: flex"), !1 } }, rm.downloadimging = !1, rm.writeClipImg = function(e) { console.log("按下复制"), rm.hideRightMenu(), btf.snackbarShow("正在下载中，请稍后", !1, 1e4), 0 == rm.downloadimging && (rm.downloadimging = !0, setTimeout(function() { copyImage(e), btf.snackbarShow("复制成功！图片已添加盲水印，请遵守版权协议"), rm.downloadimging = !1 }, "10000")) }, rm.switchDarkMode = function() { navFn.switchDarkMode(), rm.hideRightMenu() }, rm.copyUrl = function(e) { $("body").after("<input id='copyVal'></input>"); var n = e,
        t = document.getElementById("copyVal");
    t.value = n, t.select(), t.setSelectionRange(0, t.value.length), document.execCommand("copy"), $("#copyVal").remove() }, rm.rightmenuCopyText = function(e) { navigator.clipboard && navigator.clipboard.writeText(e), rm.hideRightMenu() }, rm.copyPageUrl = function() { var e = window.location.href;
    rm.copyUrl(e), btf.snackbarShow("复制本页链接地址成功", !1, 2e3), rm.hideRightMenu() };
var selectTextNow = "";

function selceText() { var e = document.selection ? document.selection.createRange().text : window.getSelection() + "";
    selectTextNow = e || "" }

function replaceAll(e, n, t) { return e.split(n).join(t) }

function addRightMenuClickEvent() { $("#menu-backward").on("click", function() { window.history.back(), rm.hideRightMenu() }), $("#menu-forward").on("click", function() { window.history.forward(), rm.hideRightMenu() }), $("#menu-refresh").on("click", function() { window.location.reload() }), $("#menu-top").on("click", function() { btf.scrollToDest(0, 500), rm.hideRightMenu() }), $(".menu-link").on("click", rm.hideRightMenu), $("#menu-darkmode").on("click", rm.switchDarkMode), $("#menu-home").on("click", function() { window.location.href = window.location.origin }), $("#rightmenu-mask").on("click", rm.hideRightMenu), $("#rightmenu-mask").contextmenu(function() { return rm.hideRightMenu(), !1 }), $("#menu-translate").on("click", function() { rm.hideRightMenu(), translateInitialization() }), $("#menu-copy").on("click", rm.copyPageUrl), $("#menu-copytext").on("click", function() { rm.rightmenuCopyText(selectTextNow), btf.snackbarShow("复制成功，复制和转载请标注本文地址") }), $("#menu-commenttext").on("click", function() { rm.rightMenuCommentText(selectTextNow) }), $("#menu-newwindow").on("click", function() { window.open(domhref), rm.hideRightMenu() }), $("#menu-copylink").on("click", rm.copyLink), $("#menu-downloadimg").on("click", function() { downloadImage(domImgSrc, "zhheo") }), $("#menu-copyimg").on("click", function() { rm.writeClipImg(domImgSrc) }), $("#menu-searchBaidu").on("click", rm.searchBaidu) }
document.onmouseup = document.ondbclick = selceText, rm.rightMenuCommentText = function(e) { rm.hideRightMenu(); var n = document.getElementsByClassName("el-textarea__inner")[0],
        t = document.createEvent("HTMLEvents");
    t.initEvent("input", !0, !0); var o = replaceAll(e, "\n", "\n> ");
    n.value = "> " + o + "\n\n", n.dispatchEvent(t); var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80), n.focus(), n.setSelectionRange(-1, -1), document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show") }, rm.searchBaidu = function() { btf.snackbarShow("即将跳转到百度搜索", !1, 2e3), setTimeout(function() { window.open("https://www.baidu.com/s?wd=" + selectTextNow) }, "2000"), rm.hideRightMenu() }, rm.copyLink = function() { rm.rightmenuCopyText(domhref), btf.snackbarShow("已复制链接地址") };