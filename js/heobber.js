"use strict";

function getbbdata() {
    var bbsurl = bbapiurl,
        httpRequest = new XMLHttpRequest;
    httpRequest.open("GET", bbsurl, !0), httpRequest.send(), httpRequest.onreadystatechange = function() {
        var json, obj, bbArray, data;
        4 == httpRequest.readyState && 200 == httpRequest.status && (json = httpRequest.responseText, obj = eval("(" + json + ")"), bbArray = obj.data.map(function(e) {
            return {
                date: e.date,
                content: e.content,
                from: e.from
            }
        }), saveToLocal.set("zhheo-bb-all", JSON.stringify(bbArray), 5 / 1440), data = saveToLocal.get("zhheo-bb-all"), generateBBHtml(JSON.parse(data)))
    };
    var generateBBHtml = function(e) {
        var t = document.querySelector("#bber"),
            a = '<section class="timeline page-1"><ul class="list" id="waterfall">';
        if (e.length)
            for (var r = 0; r < e.length; r++) {
                var n = "",
                    n = -1 != e[r].from.indexOf("iPhone") ? '<i class="fas fa-mobile-alt"></i>' : -1 != e[r].from.indexOf("iPad") ? '<i class="fas fa-tablet-alt"></i>' : -1 != e[r].from.indexOf("Mac") ? '<i class="fas fa-laptop"></i>' : -1 != e[r].from.indexOf("微信") ? '<i class="fab fa-weixin" style="font-size: 0.6rem"></i>' : '<i class="fas fa-tools"></i>',
                    o = new Date(e[r].date),
                    s = (e[r].date, o.getFullYear() + "/" + (o.getMonth() + 1) + "/" + o.getDate() + " " + o.getHours() + ":" + o.getMinutes() + ":" + o.getSeconds()),
                    i = '<p class="datacont">' + urlToLink(e[r].content) + "</p>",
                    l = '<p class="datatime">' + s + "</p>",
                    c = urlToLink(e[r].content).replace(/<.*?>/g, "[图片]");
                a += "<li class=\"item\"><div class='bber-content'>" + i + "</div><div class='bber-bottom'><div class='bber-info'>" + l + '<p class="datafrom">' + n + e[r].from + "</p></div><a class='bber-reply' onclick='rm.rightMenuCommentText(\"" + c + '");\'><i class="fa-solid fa-message"></i></a></div></li>'
            } else a += '!{_p("aside.card_funds.zero")}';
        a += "</ul></section>", (t = document.querySelector("#bber")).innerHTML = a, Lately({
            target: "#bber .datatime"
        }), window.lazyLoadInstance && window.lazyLoadInstance.update(), window.pjax && window.pjax.refresh(t)
    }
}

function urlToLink(e) {
    return e = (e = e.replace(/\bhttps?:[^:<>"]*\/([^:<>"]*)(\.(jpeg)|(png)|(jpg)|(webp))(!blogimg)?/g, function(e) {
        return '<a href="' + e + '" target="_blank" class="bber-content-img"><img src="' + e + '" onerror = this.onerror=null;this.src="/img/404.png" /></a>'
    })).replace(/\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|gif))\S+/g, function(e) {
        return " <a href='" + e + "'rel='noopener' target='_blank'>↘链接↙</a> "
    })
}
getbbdata();
var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.arrayIteratorImpl = function(e) {
        var t = 0;
        return function() {
            return t < e.length ? {
                done: !1,
                value: e[t++]
            } : {
                done: !0
            }
        }
    }, $jscomp.arrayIterator = function(e) {
        return {
            next: $jscomp.arrayIteratorImpl(e)
        }
    }, $jscomp.makeIterator = function(e) {
        var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
        return t ? t.call(e) : $jscomp.arrayIterator(e)
    },
    function() {
        var e = function() {
            return this || (0, eval)("this")
        }();
        "Lately" in e || (e.Lately = function(e) {
            for (var t = e.lang || {
                    second: "秒",
                    minute: "分钟",
                    hour: "小时",
                    day: "天",
                    month: "个月",
                    year: "年",
                    ago: "前",
                    error: "NaN"
                }, a = (e = $jscomp.makeIterator(document.querySelectorAll(e.target || ".time"))).next(); !a.done; a = e.next()) {
                var r = (a = a.value).dateTime,
                    n = a.title,
                    o = a.innerHTML;
                if (!r || isNaN(new Date(r = r.replace(/(.*)[a-z](.*)\+(.*)/gi, "$1 $2").replace(/-/g, "/"))))
                    if (n && !isNaN(new Date(n = n.replace(/-/g, "/")))) r = n;
                    else {
                        if (!o || isNaN(new Date(o = o.replace(/-/g, "/")))) break;
                        r = o
                    }
                a.title = r, r = new Date(r);
                var s = (o = (n = (r = ((new Date).getTime() - r.getTime()) / 1e3) / 60) / 60) / 24,
                    i = s / 30,
                    l = i / 12;
                a.innerHTML = (1 <= l ? Math.floor(l) + t.year : 1 <= i ? Math.floor(i) + t.month : 1 <= s ? Math.floor(s) + t.day : 1 <= o ? Math.floor(o) + t.hour : 1 <= n ? Math.floor(n) + t.minute : 1 <= r ? Math.floor(r) + t.second : t.error) + t.ago
            }
        })
    }();