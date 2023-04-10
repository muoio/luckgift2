/*!2021-09-16 15:32:24 */
!(function () {
  var yaparameter,
    yautil,
    yacookie,
    yauuid,
    yasysinfo,
    yasessionData,
    yadataStorage,
    yaconfig,
    yaanalytics,
    yatimer,
    yadateFormat,
    yamd5,
    yareportSender,
    yaClass,
    yabaseReport,
    yaTimer,
    yahuyaReport,
    yacore,
    ya;
  (yaparameter = (function () {
    var a = function () {
      this.initialize();
    };
    return (
      (a.prototype = {
        constructor: a,
        initialize: function () {
          (this.data = {}), (this.size = 0);
        },
        add: function (a, b) {
          a in this.data || this.size++, (this.data[a] = b);
        },
        get: function (a) {
          return this.data[a];
        },
        remove: function (a) {
          a in this.data && (delete this.data[a], this.size--);
        },
        addAll: function (b) {
          if (b instanceof a) for (var c in b.data) this.add(c, b.get(c));
        },
        addAllIfNoExist: function (b) {
          if (b instanceof a)
            for (var c in b.data) c in this.data || this.add(c, b.get(c));
        },
        containsKey: function (a) {
          return a in this.data;
        },
        containsValue: function (a) {
          for (var b in this.data) if (this.get(b) === a) return !0;
          return !1;
        },
        removeAll: function (b) {
          if (b instanceof a) for (var c in b.data) this.remove(c);
        },
        toString: function (a) {
          var b = "",
            c = "";
          for (var d in this.data)
            if ("act" != d) {
              "" != b && (b += "&");
              var e = a ? encodeURIComponent(this.data[d]) : this.data[d];
              b += d + "=" + e;
            } else c = this.data[d];
          return c && (b = "act=" + c + "&" + b), b;
        },
      }),
      a
    );
  })()),
    (yautil = (function (a) {
      var b = {
        trim: function (a) {
          return a.replace(/(^\s*)|(\s*$)/g, "");
        },
        replaceBlank: function (a) {
          var b = a.toString();
          return (
            (b = b.replace(/ /g, "")),
            (b = b.replace(/&nbsp;/g, "")),
            (b = b.replace(/&/g, "|||")),
            (b = b.replace(/r/g, ""))
          );
        },
        isNotBlank: function (a) {
          return "" !== this.trim(a);
        },
        isBlank: function (a) {
          return !this.isNotBlank(a);
        },
        contains: function (a, b) {
          return a.indexOf(b) > -1;
        },
        startWith: function (a, b) {
          return !b || 0 === a.length || b.length > a.length
            ? !1
            : a.substring(0, b.length) === b
            ? !0
            : !1;
        },
        encode: function (a) {
          return encodeURIComponent(a);
        },
        decode: function (a) {
          return decodeURIComponent(a);
        },
        parseToInt: function (a) {
          return isNaN(parseInt(a)) ? 0 : parseInt(a);
        },
        getQueryParam: function (b) {
          var c = new a();
          if (!b) return c;
          for (
            var d = this.decode(b).replace("?", "?&").split("&"), e = 0;
            e < d.length;
            e++
          ) {
            var f = d[e].split("=");
            !f || f.length < 2 || c.add(f[0], f[1]);
          }
          return c;
        },
        getUrlDomain: function (a) {
          if (!a) return document.domain;
          var b = /.*\:\/\/([^\/]*).*/,
            c = a.match(b),
            d = "";
          return "undefined" != typeof c && null != c && (d = c[1]), d;
        },
        getURILocation: function (a) {
          return this.isURL(a)
            ? a.replace(/(.*\.[\w-]+\/){0,}([^\?]+).*/gi, "$2")
            : "";
        },
        isURL: function (a) {
          var b =
            /^((http|https|ftp):\/\/)?(\w(\:\w)?@)?([0-9a-z_-]+\.)*?([a-z0-9-]+\.[a-z]{2,6}(\.[a-z]{2})?(\:[0-9]{2,6})?)((\/[^?#<>\/\\*":]*)+(\?[^#]*)?(#.*)?)?$/i;
          return b.test(a);
        },
        extractByCutPrefix: function (a, b) {
          return !a instanceof String || !this.startWith(a, b)
            ? a
            : a.substring(b.length, a.length);
        },
        getYaParamByPrefix: function (b, c, d) {
          var e = new a();
          if (b)
            for (var f in b.data)
              this.startWith(f, c)
                ? e.add(this.extractByCutPrefix(f, c), b.get(f))
                : d && e.add(f, b.get(f));
          return e;
        },
        consoleLog: function (a) {
          try {
          } catch (b) {}
        },
        isBlank: function (a) {
          return !a || !/\S/.test(a) || "undefined" === a || "null" === a;
        },
        addCookie: function (a, b, c) {
          var d = a + "=" + encodeURIComponent(b);
          if (c > 0) {
            var e = new Date(),
              f = 3600 * c * 1e3;
            e.setTime(e.getTime() + f), (d += "; expires=" + e.toUTCString());
          }
          (d += "; path=/"), (document.cookie = d);
        },
        delCookie: function (a) {
          this.addCookie(a, "", 1 / 3600);
        },
        getCookie: function (a) {
          for (var b = document.cookie.split(""), c = 0; c < b.length; c++) {
            var d = b[c].replace("=", "$="),
              e = d.split("$=");
            try {
              if (e[0] == a) return decodeURIComponent(e[1]);
            } catch (f) {
              if (e[0] == a) return unescape(e[1]);
            }
          }
          return "";
        },
        getStorage: function (a) {
          try {
            return (
              JSON.parse(localStorage.getItem(a)) ||
              JSON.parse(this.getCookie(a) || null)
            );
          } catch (b) {
            return this.isBlank(this.getCookie(a))
              ? null
              : JSON.parse(this.getCookie(a) || null);
          }
        },
        setStorage: function (a, b) {
          try {
            this.isBlank(this.getStorage(a)) || this.removeStorage(a),
              "string" == typeof b
                ? window.localStorage.setItem(a, b)
                : window.localStorage.setItem(a, JSON.stringify(b));
          } catch (c) {
            this.addCookie(a, JSON.stringify(b));
          }
        },
        removeStorage: function (a) {
          try {
            localStorage.removeItem(a);
          } catch (b) {
            this.delCookie(a);
          }
        },
        createXHR: function () {
          if ("undefined" != typeof window.XMLHttpRequest)
            return new XMLHttpRequest();
          if ("undefined" != typeof window.ActiveXObject) {
            if ("string" != typeof arguments.callee.activeXString)
              for (
                var a = [
                    "MSXML2.XMLHttp.6.0",
                    "MSXML2.XMLHttp.3.0",
                    "MSXML2.XMLHttp",
                  ],
                  b = 0,
                  c = a.length;
                c > b;
                b++
              )
                try {
                  var d = new window.ActiveXObject(a[b]);
                  return (arguments.callee.activeXString = a[b]), d;
                } catch (e) {
                  return !1;
                }
            return new window.ActiveXObject(arguments.callee.activeXString);
          }
          throw new Error("No XHR object available");
        },
      };
      return b;
    })(yaparameter)),
    (yacookie = (function (a) {
      var b = {
        init: "",
        cookieEnalned:
          "cookie" in document &&
          (document.cookie.length > 0 ||
            (document.cookie = "testCookieEnalned").indexOf.call(
              document.cookie,
              "testCookieEnalned"
            ) > -1),
        localStorageEnabled: (function () {
          try {
            return (
              window.localStorage &&
              (window.localStorage.setItem("testLocalStorageEnabled", 123),
              123 == window.localStorage.getItem("testLocalStorageEnabled"))
            );
          } catch (a) {
            return !1;
          }
        })(),
        localCache: {},
        getCookie: function (b) {
          if (!this.cookieEnalned) return this.getStorage(b);
          var c = document.cookie.match(
            new RegExp("(^| )" + b + "=([^;]*)(;|$)")
          );
          return null != c ? a.decode(c[2]) : null;
        },
        getCookie_mid: function (a) {
          return this.cookieEnalned ? this.getCookie(a) : this.getStorage(a);
        },
        getCookiesObj: function () {
          var a = {};
          if (document.cookie) {
            var b = document.cookie.split("; ");
            for (var c in b) {
              var d = b[c].indexOf("="),
                e = b[c].substr(0, d),
                f = b[c].substr(d + 1, b[c].length);
              a[e] = f;
            }
          }
          return a;
        },
        getCookieLength: function () {
          var a = this.getCookiesObj(),
            b = 0;
          for (var c in a) b++;
          return b;
        },
        getExpires: function (a) {
          var b = new Date();
          return b.setTime(b.getTime() + a), b;
        },
        deleteCookie: function (a) {
          this.setCookie(a, "", 0);
        },
        setCookie: function (b, c, d) {
          if (!this.cookieEnalned) return void this.setStorage(b, c);
          var e = ".nimo.tv",
            c = b + "=" + a.encode(c) + "; domain=" + e + "; path=/;";
          d > 0 && (c += " expires=" + this.getExpires(d).toGMTString()),
            (document.cookie = c);
        },
        setStorage: function (a, b) {
          return this.localStorageEnabled
            ? void window.localStorage.setItem(a, b)
            : void this.setLocalCache(a, b);
        },
        getStorage: function (a) {
          return this.localStorageEnabled
            ? window.localStorage.getItem(a)
            : this.getLocalCache(a);
        },
        setLocalCache: function (a, b) {
          this.localCache[a] = b;
        },
        getLocalCache: function (a) {
          return " __yamid_new" === a
            ? window.__yamid_new || this.localCache[a]
            : this.localCache[a];
        },
      };
      return b;
    })(yautil)),
    (yauuid = (function () {
      var a = {
        generate32: function () {
          var a = new Date(1582, 10, 15, 0, 0, 0, 0),
            b = new Date(),
            c = b.getTime() - a.getTime(),
            d = "",
            e = this.generateBits(c, 0, 31),
            f = this.generateBits(c, 32, 47),
            g = this.generateBits(c, 48, 59) + "1",
            h = this.generateBits(this.rand(4095), 0, 7),
            i = this.generateBits(this.rand(4095), 0, 7),
            j =
              this.generateBits(this.rand(8191), 0, 7) +
              this.generateBits(this.rand(8191), 8, 15) +
              this.generateBits(this.rand(8191), 0, 7) +
              this.generateBits(this.rand(8191), 8, 15) +
              this.generateBits(this.rand(8191), 0, 15);
          return e + d + f + d + g + d + h + i + d + j;
        },
        generateBits: function (a, b, c) {
          var d = this.returnBase(a, 16),
            e = new Array(),
            f = "",
            g = 0;
          for (g = 0; g < d.length; g++) e.push(d.substring(g, g + 1));
          for (g = Math.floor(b / 4); g <= Math.floor(c / 4); g++)
            f += e[g] && "" != e[g] ? e[g] : "0";
          return f;
        },
        returnBase: function (a, b) {
          var c = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ];
          if (b > a) var d = c[a];
          else {
            var e = "" + Math.floor(a / b),
              f = a - e * b;
            if (e >= b) var d = this.returnBase(e, b) + c[f];
            else var d = c[e] + c[f];
          }
          return d;
        },
        rand: function (a) {
          return Math.floor(Math.random() * a);
        },
      };
      return a;
    })()),
    (yasysinfo = (function (UTIL) {
      var SysInfo = {
        getOS: function () {
          var a = navigator.userAgent.toLowerCase(),
            b = navigator.platform,
            c = "Win32" === b || "Windows" === b,
            d =
              "Mac68K" === b ||
              "MacPPC" === b ||
              "Macintosh" === b ||
              "MacIntel" === b,
            e = "X11" === b && !c && !d,
            f = String(b).indexOf("Linux") > -1,
            g = "android" === a.match(/android/i);
          if (d) return "Mac";
          if (e) return "Unix";
          if (f) return g ? "Android" : "Linux";
          if (c) {
            var h = {
              ce: "WindowsMobile",
              mobile: "WindowsMobile",
              "nt 5.0": "Windows2000",
              "nt 5.1": "WindowsXP",
              "nt 5.2": "Windows2003",
              "nt 6.0": "WindowsVista",
              "nt 6.1": "Windows7",
              "nt 6.2": "Windows8",
              "nt 10.0": "Windows10",
              2000: "Windows2000",
              xp: "WindowsXP",
              2003: "Windows2003",
              vista: "WindowsVista",
              7: "Windows7",
              8: "Windows8",
              10: "Windows10",
            };
            for (var i in h) if (a.indexOf("windows " + i) > -1) return h[i];
          }
          return "unknown";
        },
        getBrowerVersion: function () {
          var a,
            b = "unknown",
            c = navigator.userAgent.toLowerCase();
          return (
            (a = c.match(/msie ([\d.]+)/))
              ? (b = a[0])
              : (a = c.match(/firefox\/([\d.]+)/))
              ? (b = a[0])
              : (a = c.match(/yye\/([\d.]+)/))
              ? (b = a[0])
              : (a = c.match(/chrome\/([\d.]+)/))
              ? (b = a[0])
              : (a = c.match(/opera.([\d.]+)/))
              ? (b = a[0])
              : (a = c.match(/version\/([\d.]+).*safari/))
              ? (b = a[0])
              : 0,
            b
          );
        },
        getFlashVersion: function () {
          var f = "0",
            n = navigator;
          if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++)
              if (-1 != n.plugins[ii].name.indexOf("Shockwave Flash")) {
                f = n.plugins[ii].description.split("Shockwave Flash ")[1];
                break;
              }
          } else if (window.ActiveXObject)
            for (var ii = 10; ii >= 2; ii--)
              try {
                var fl = eval(
                  "new ActiveXObject('ShockwaveFlash.ShockwaveFlash." +
                    ii +
                    "');"
                );
                if (fl) {
                  f = ii + ".0";
                  break;
                }
              } catch (e) {}
          return UTIL.replaceBlank(f);
        },
      };
      return SysInfo;
    })(yautil)),
    (yasessionData = (function (a, b, c, d, e) {
      var f = {
        defaultSessionIdKey: "product",
        _yasdatas: "_yasdatas_",
        _yasids: "_yasids",
        sessionIds: new a(),
        sDataQueue: new Array(),
        separator: "",
        add: function (d, e, f) {
          var g = { pro: "", cha: "", rso: "" },
            h = b.getQueryParam(e),
            i = new a();
          for (var j in g) i.add(j, h.get(j));
          var k = new a();
          k.add(d, e),
            this.sDataQueue.push(k),
            1 == f && c.setCookie(this._yasdatas + d, i.toString(), -1);
        },
        get: function (b) {
          for (var c = null, e = 0; e < this.sDataQueue.length; e++)
            this.sDataQueue[e] instanceof a &&
              this.sDataQueue[e].containsKey(b) &&
              (c = this.sDataQueue[e]);
          if (c instanceof a) return c.get(b);
          if (null == c) {
            var f = this.getCCParam(this._yasdatas + b);
            f &&
              f.size > 1 &&
              (f.add("act", "/session_data"),
              f.add("session_id", b),
              f.addAll(d.getBaseClientInfo()),
              this.add(b, f.toString()),
              (c = f.toString()));
          }
          return c;
        },
        list: function () {
          var b = new Array(),
            c = new Array(),
            d = this.separator,
            e = new a();
          e.addAll(this.sessionIds), e.addAll(this.getCCParam(this._yasids));
          var f = 5;
          for (var g in e.data) {
            var h = this.get(e.get(g));
            h && c.push(h), i % f == 0 && (b.push(c.join(d)), (c = []));
          }
          return b.push(c.join(d)), b;
        },
        getCCParam: function (a) {
          return b.getQueryParam(this.getCCValue(a));
        },
        getCCValue: function (a) {
          return c.getCookie(a);
        },
        generateSessionId: function (b, d) {
          var f = b ? b.toLowerCase() : this.defaultSessionIdKey,
            g = e.generate32();
          if ((this.sessionIds.add(f, g), 1 == d)) {
            var h = this.getCCParam(this._yasids);
            if (!h) var h = new a();
            h.add(f, g), c.setCookie(this._yasids, h.toString(), -1);
          }
          return g;
        },
        getSessionId: function (a, b) {
          var c = a ? a.toLowerCase() : this.defaultSessionIdKey,
            d = this.sessionIds.get(c);
          if (!d || b) {
            var e = this.getCCParam(this._yasids);
            (d = e.get(c)), d && this.sessionIds.add(c, d);
          }
          return d;
        },
        getSessionIdAndGenIfNotExist: function (a, b, c) {
          var d = this.getSessionId(a, c);
          return d || (d = this.generateSessionId(a, b)), d;
        },
      };
      return f;
    })(yaparameter, yautil, yacookie, yaconfig, yauuid)),
    (yadataStorage = (function () {
      var a = {
        domain: "huya.com",
        create: function () {
          if (!window.localStorage && !this.instance)
            try {
              var a = document.createElement("input");
              (a.type = "hidden"),
                (a.style.display = "none"),
                a.addBehavior("#default#userData"),
                document.getElementsByTagName("head")[0].appendChild(a),
                (this.instance = a);
            } catch (b) {
              return !1;
            }
          return !0;
        },
        set: function (a, b, c) {
          if (window.localStorage) window.localStorage.setItem(a, b);
          else if (this.create()) {
            var d = new Date(),
              e = this.domain,
              f = this.instance;
            d.setTime(d.getTime() + c),
              (f.expires = d.toUTCString()),
              f.load(e),
              f.setAttribute(a, b),
              f.save(e);
          }
        },
        get: function (a) {
          if (window.localStorage) return window.localStorage.getItem(a);
          if (this.create()) {
            var b = this.instance;
            return b.load(this.domain), b.getAttribute(a);
          }
          return null;
        },
        remove: function (a) {
          if (window.localStorage) window.localStorage.removeItem(a);
          else if (this.create()) {
            var b = this.domain,
              c = this.instance;
            c.load(b), c.removeAttribute(a), c.save(b);
          }
        },
      };
      return (window.dataStorage = a), a;
    })()),
    (yaconfig = (function (a, b, c, d, e, f, g) {
      var h = {
          sdk_ver: "js-ya.huya-2.0",
          ap: navigator.appName,
          av: navigator.appVersion,
          ua: navigator.userAgent.toLowerCase(),
          cen: navigator.cookieEnabled ? 1 : 0,
          jen: navigator.javaEnabled() ? 1 : 0,
          lla: navigator.language
            ? navigator.language
            : navigator.browserLanguage,
          sre: screen.width + "." + screen.height,
          sco: parseInt(screen.colorDepth) || parseInt(screen.pixelDepth),
          __yaParamPrex: "__ya",
          __yaOnerrorRetry: !1,
          __debug: !1,
          _yaDataCollectUrl:
            "https:" == document.location.protocol
              ? "/ylog.nimo.tv/d.gif"
              : "/ylog.nimo.tv/d.gif",
        },
        i = {
          _yaHuyaTestCookieKey: "__yamid_tt1",
          _yaMidCookieKey: "__yamid_new",
          _yaHuyaMidCookieKey: "__huyamid",
          _yaSessionMid: "__yasmid",
          _yaMidCookieTimeout: 63072e6,
          setConfig: function (a) {
            for (var b in a) "function" != typeof a[b] && (h[b] = a[b]);
          },
          getConfig: function (a) {
            return h[a];
          },
          initConfig: function (b) {
            (this.referrer = document.referrer),
              (this.refrerrerParam = a.getQueryParam(this.referrer)),
              (this.yaLocation = window.location),
              (this.locationParam = a.getQueryParam(this.yaLocation)),
              this.setYaConfigParam(b);
          },
          getYaParam: function () {
            return a.getYaParamByPrefix(this.locationParam, h.__yaParamPrex);
          },
          getBaseClientInfo: function () {
            if (this.baseParam) return this.baseParam;
            var c = new b();
            c.add("mid", this.getYamid(this.locationParam.get("mid"))),
              c.add("bve", e.getBrowerVersion()),
              c.add("lla", h.lla),
              c.add("os", e.getOS()),
              c.add("sco", h.sco),
              c.add("sre", h.sre),
              c.add("fve", e.getFlashVersion()),
              c.add("jav", h.jen),
              c.add("coo", h.cen),
              c.add("domain", a.getUrlDomain()),
              c.add("fla", "Y"),
              c.add("sdk_ver", h.sdk_ver);
            var d = this.getYaParam();
            return (
              d.size > 0 && c.addAll(d),
              this.yaConfigParam.size > 0 && c.addAll(this.yaConfigParam),
              (this.baseParam = c),
              this.baseParam
            );
          },
          setYaConfigParam: function (a) {
            var c = new b();
            if (a) for (var d in a) c.add(d, a[d]);
            c.containsKey("error_retry") &&
              (h.__yaOnerrorRetry = c.get("error_retry")),
              (this.yaConfigParam = c);
          },
          setYaMidCookie: function (a) {
            a && c.setCookie(this._yaMidCookieKey, a, this._yaMidCookieTimeout);
          },
          setTestYaMidCookie: function (a, b) {},
          setSessionMid: function (a) {
            a && c.setCookie(this._yaSessionMid, a, -1);
          },
          getSessionMid: function () {
            var a = c.getCookie_mid(this._yaSessionMid);
            return a || "";
          },
          storeSmid: function (a, b) {
            var c = a;
            a && a == b && (c = b),
              a && !b && (this.setSessionMid(a), (c = a)),
              b ||
                a ||
                ((a = Math.random()),
                this.setSessionMid(a),
                this.setTestYaMidCookie(this._yaHuyaTestCookieKey, a),
                (c = a)),
              b &&
                !a &&
                (this.setTestYaMidCookie(this._yaHuyaTestCookieKey, b),
                (c = b)),
              a &&
                b &&
                a != b &&
                (this.setTestYaMidCookie(this._yaHuyaTestCookieKey, b),
                (c = b)),
              (window.HuyaYaTestSmid = c);
          },
          getYamid: function (a) {
            var b = c.getCookie_mid(this._yaMidCookieKey),
              e = c.getCookie_mid(this._yaHuyaTestCookieKey),
              f = this.getSessionMid();
            return (
              this.storeSmid(e, f),
              b ? b : ((b = a ? a : d.generate32()), this.setYaMidCookie(b), b)
            );
          },
          reportHuyaTest: function (a, b, c, d) {
            this.sendToPas("cookieErr", "", a, b, c, d);
          },
          sendToPas: function (a, b, c, d, e, f) {},
          doGetSend: function (a) {
            var b = new Image(1, 1);
            (b.onload = function () {
              b = null;
            }),
              (b.onerror = function () {
                b = null;
              }),
              (b.src = a);
          },
        };
      return i;
    })(
      yautil,
      yaparameter,
      yacookie,
      yauuid,
      yasysinfo,
      yasessionData,
      yadataStorage
    )),
    (yaanalytics = (function (a) {
      var b = function () {
        this.init.apply(this, arguments);
      };
      return (
        (b.prototype = {
          constructor: b,
          init: function (b, c, d, e) {
            a.initConfig(e),
              (this.reportInstance = new b(c, d)),
              this.reportInstance.createIntervalReport();
          },
          setParam: function (a, b) {
            this.reportInstance.setParam.apply(this.reportInstance, arguments);
          },
          setExtParam: function (a) {
            this.reportInstance.setExtParam.apply(
              this.reportInstance,
              arguments
            );
          },
          setAppMidParam: function (a) {
            this.setExtParam("appmid=" + a);
          },
          reportProductStartUp: function (a, b) {
            this.reportInstance.reportStartUp.apply(
              this.reportInstance,
              arguments
            );
          },
          stopProductHeartbeat: function (a, b) {
            this.reportInstance.stopHeartbeat.apply(
              this.reportInstance,
              arguments
            );
          },
          startProductHeartbeat: function (a, b) {
            this.reportInstance.startHeartbeat.apply(
              this.reportInstance,
              arguments
            );
          },
          reportProductEndUp: function (a, b) {
            this.reportInstance.reportEndUp.apply(
              this.reportInstance,
              arguments
            );
          },
          reportProductEvent: function (a, b) {
            this.reportInstance.reportEvent.apply(
              this.reportInstance,
              arguments
            );
          },
          reportOneHeartbeat: function (a, b) {
            this.reportInstance.oneHeartBeat.apply(
              this.reportInstance,
              arguments
            );
          },
        }),
        b
      );
    })(yaconfig)),
    (yatimer = (function () {
      var a = function (a) {
        this.initialize(a);
      };
      return (
        (a.defaultPeriodTime = 3e5),
        (a.prototype = {
          constructor: a,
          intervalCounter: 0,
          initialize: function (a) {
            (this.periodTime = 3e5), (this.startTime = new Date());
            var b = /^[1-9]+[0-9]*$/;
            a && b.test(a) && (this.periodTime = a);
          },
          doInterval: function (a) {
            var b = this;
            if (!a) throw new Error("pleace pass callback");
            var c = function () {
              b.sh = window.setTimeout(function () {
                a && a.call(b), c();
              }, b.periodTime);
            };
            c();
          },
          clearRefresh: function () {
            clearTimeout(this.sh);
          },
        }),
        a
      );
    })()),
    (yadateFormat = (function () {
      var a = {
        dateFormat: function (a, b, c) {
          var d =
              /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            e =
              /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            f = /[^-+\dA-Z]/g,
            g = function (a, b) {
              for (a = String(a), b = b || 2; a.length < b; ) a = "0" + a;
              return a;
            };
          if (
            (1 != arguments.length ||
              "[object String]" != Object.prototype.toString.call(a) ||
              /\d/.test(a) ||
              ((b = a), (a = void 0)),
            (a = a ? new Date(a) : new Date()),
            isNaN(a))
          )
            throw SyntaxError("invalid date");
          (b = String(this.masks[b] || b || this.masks["default"])),
            "UTC:" == b.slice(0, 4) && ((b = b.slice(4)), (c = !0));
          var h = c ? "getUTC" : "get",
            i = a[h + "Date"](),
            j = a[h + "Day"](),
            k = a[h + "Month"](),
            l = a[h + "FullYear"](),
            m = a[h + "Hours"](),
            n = a[h + "Minutes"](),
            o = a[h + "Seconds"](),
            p = a[h + "Milliseconds"](),
            q = c ? 0 : a.getTimezoneOffset(),
            r = {
              d: i,
              dd: g(i),
              ddd: this.i18n.dayNames[j],
              dddd: this.i18n.dayNames[j + 7],
              m: k + 1,
              mm: g(k + 1),
              mmm: this.i18n.monthNames[k],
              mmmm: this.i18n.monthNames[k + 12],
              yy: String(l).slice(2),
              yyyy: l,
              h: m % 12 || 12,
              hh: g(m % 12 || 12),
              H: m,
              HH: g(m),
              M: n,
              MM: g(n),
              s: o,
              ss: g(o),
              l: g(p, 3),
              L: g(p > 99 ? Math.round(p / 10) : p),
              t: 12 > m ? "a" : "p",
              tt: 12 > m ? "am" : "pm",
              T: 12 > m ? "A" : "P",
              TT: 12 > m ? "AM" : "PM",
              Z: c ? "UTC" : (String(a).match(e) || [""]).pop().replace(f, ""),
              o:
                (q > 0 ? "-" : "+") +
                g(100 * Math.floor(Math.abs(q) / 60) + (Math.abs(q) % 60), 4),
              S: ["th", "st", "nd", "rd"][
                i % 10 > 3 ? 0 : (((i % 100) - (i % 10) != 10) * i) % 10
              ],
            };
          return b.replace(d, function (a) {
            return a in r ? r[a] : a.slice(1, a.length - 1);
          });
        },
        masks: {
          default: "ddd mmm dd yyyy HH:MM:ss",
          shortDate: "m/d/yy",
          mediumDate: "mmm d, yyyy",
          longDate: "mmmm d, yyyy",
          fullDate: "dddd, mmmm d, yyyy",
          shortTime: "h:MM TT",
          mediumTime: "h:MM:ss TT",
          longTime: "h:MM:ss TT Z",
          isoDate: "yyyy-mm-dd",
          isoTime: "HH:MM:ss",
          isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
          isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
        },
        i18n: {
          dayNames: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          monthNames: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        parse: function (a) {
          return "string" == typeof a && a.isNotBlank()
            ? new Date(Date.parse(a.replace(/-/g, "/")))
            : null;
        },
        format: function (a, b, c) {
          return this.dateFormat(a, b, c);
        },
        yaTimestamp: function (a) {
          return this.format(a, "yyyymmddHHMMss");
        },
      };
      return a;
    })()),
    (yamd5 = (function () {
      function a(a, b) {
        function c(a) {
          return d(a);
        }
        function d(a) {
          return "" == a ? a : f(e(g(a)));
        }
        function e(a) {
          return i(j(h(a), 8 * a.length));
        }
        function f(a) {
          try {
          } catch (b) {
            s = 0;
          }
          for (
            var c,
              d = s ? "0123456789ABCDEF" : "0123456789abcdef",
              e = "",
              f = 0;
            f < a.length;
            f++
          )
            (c = a.charCodeAt(f)),
              (e += d.charAt((c >>> 4) & 15) + d.charAt(15 & c));
          return e;
        }
        function g(a) {
          for (var b, c, d = "", e = -1; ++e < a.length; )
            (b = a.charCodeAt(e)),
              (c = e + 1 < a.length ? a.charCodeAt(e + 1) : 0),
              b >= 55296 &&
                56319 >= b &&
                c >= 56320 &&
                57343 >= c &&
                ((b = 65536 + ((1023 & b) << 10) + (1023 & c)), e++),
              127 >= b
                ? (d += String.fromCharCode(b))
                : 2047 >= b
                ? (d += String.fromCharCode(
                    192 | ((b >>> 6) & 31),
                    128 | (63 & b)
                  ))
                : 65535 >= b
                ? (d += String.fromCharCode(
                    224 | ((b >>> 12) & 15),
                    128 | ((b >>> 6) & 63),
                    128 | (63 & b)
                  ))
                : 2097151 >= b &&
                  (d += String.fromCharCode(
                    240 | ((b >>> 18) & 7),
                    128 | ((b >>> 12) & 63),
                    128 | ((b >>> 6) & 63),
                    128 | (63 & b)
                  ));
          return d;
        }
        function h(a) {
          for (var b = Array(a.length >> 2), c = 0; c < b.length; c++) b[c] = 0;
          for (var c = 0; c < 8 * a.length; c += 8)
            b[c >> 5] |= (255 & a.charCodeAt(c / 8)) << c % 32;
          return b;
        }
        function i(a) {
          for (var b = "", c = 0; c < 32 * a.length; c += 8)
            b += String.fromCharCode((a[c >> 5] >>> c % 32) & 255);
          return b;
        }
        function j(a, b) {
          (a[b >> 5] |= 128 << b % 32), (a[(((b + 64) >>> 9) << 4) + 14] = b);
          for (
            var c = 1732584193,
              d = -271733879,
              e = -1732584194,
              f = 271733878,
              g = 0;
            g < a.length;
            g += 16
          ) {
            var h = c,
              i = d,
              j = e,
              k = f;
            (c = l(c, d, e, f, a[g + 0], 7, -680876936)),
              (f = l(f, c, d, e, a[g + 1], 12, -389564586)),
              (e = l(e, f, c, d, a[g + 2], 17, 606105819)),
              (d = l(d, e, f, c, a[g + 3], 22, -1044525330)),
              (c = l(c, d, e, f, a[g + 4], 7, -176418897)),
              (f = l(f, c, d, e, a[g + 5], 12, 1200080426)),
              (e = l(e, f, c, d, a[g + 6], 17, -1473231341)),
              (d = l(d, e, f, c, a[g + 7], 22, -45705983)),
              (c = l(c, d, e, f, a[g + 8], 7, 1770035416)),
              (f = l(f, c, d, e, a[g + 9], 12, -1958414417)),
              (e = l(e, f, c, d, a[g + 10], 17, -42063)),
              (d = l(d, e, f, c, a[g + 11], 22, -1990404162)),
              (c = l(c, d, e, f, a[g + 12], 7, 1804603682)),
              (f = l(f, c, d, e, a[g + 13], 12, -40341101)),
              (e = l(e, f, c, d, a[g + 14], 17, -1502002290)),
              (d = l(d, e, f, c, a[g + 15], 22, 1236535329)),
              (c = m(c, d, e, f, a[g + 1], 5, -165796510)),
              (f = m(f, c, d, e, a[g + 6], 9, -1069501632)),
              (e = m(e, f, c, d, a[g + 11], 14, 643717713)),
              (d = m(d, e, f, c, a[g + 0], 20, -373897302)),
              (c = m(c, d, e, f, a[g + 5], 5, -701558691)),
              (f = m(f, c, d, e, a[g + 10], 9, 38016083)),
              (e = m(e, f, c, d, a[g + 15], 14, -660478335)),
              (d = m(d, e, f, c, a[g + 4], 20, -405537848)),
              (c = m(c, d, e, f, a[g + 9], 5, 568446438)),
              (f = m(f, c, d, e, a[g + 14], 9, -1019803690)),
              (e = m(e, f, c, d, a[g + 3], 14, -187363961)),
              (d = m(d, e, f, c, a[g + 8], 20, 1163531501)),
              (c = m(c, d, e, f, a[g + 13], 5, -1444681467)),
              (f = m(f, c, d, e, a[g + 2], 9, -51403784)),
              (e = m(e, f, c, d, a[g + 7], 14, 1735328473)),
              (d = m(d, e, f, c, a[g + 12], 20, -1926607734)),
              (c = n(c, d, e, f, a[g + 5], 4, -378558)),
              (f = n(f, c, d, e, a[g + 8], 11, -2022574463)),
              (e = n(e, f, c, d, a[g + 11], 16, 1839030562)),
              (d = n(d, e, f, c, a[g + 14], 23, -35309556)),
              (c = n(c, d, e, f, a[g + 1], 4, -1530992060)),
              (f = n(f, c, d, e, a[g + 4], 11, 1272893353)),
              (e = n(e, f, c, d, a[g + 7], 16, -155497632)),
              (d = n(d, e, f, c, a[g + 10], 23, -1094730640)),
              (c = n(c, d, e, f, a[g + 13], 4, 681279174)),
              (f = n(f, c, d, e, a[g + 0], 11, -358537222)),
              (e = n(e, f, c, d, a[g + 3], 16, -722521979)),
              (d = n(d, e, f, c, a[g + 6], 23, 76029189)),
              (c = n(c, d, e, f, a[g + 9], 4, -640364487)),
              (f = n(f, c, d, e, a[g + 12], 11, -421815835)),
              (e = n(e, f, c, d, a[g + 15], 16, 530742520)),
              (d = n(d, e, f, c, a[g + 2], 23, -995338651)),
              (c = o(c, d, e, f, a[g + 0], 6, -198630844)),
              (f = o(f, c, d, e, a[g + 7], 10, 1126891415)),
              (e = o(e, f, c, d, a[g + 14], 15, -1416354905)),
              (d = o(d, e, f, c, a[g + 5], 21, -57434055)),
              (c = o(c, d, e, f, a[g + 12], 6, 1700485571)),
              (f = o(f, c, d, e, a[g + 3], 10, -1894986606)),
              (e = o(e, f, c, d, a[g + 10], 15, -1051523)),
              (d = o(d, e, f, c, a[g + 1], 21, -2054922799)),
              (c = o(c, d, e, f, a[g + 8], 6, 1873313359)),
              (f = o(f, c, d, e, a[g + 15], 10, -30611744)),
              (e = o(e, f, c, d, a[g + 6], 15, -1560198380)),
              (d = o(d, e, f, c, a[g + 13], 21, 1309151649)),
              (c = o(c, d, e, f, a[g + 4], 6, -145523070)),
              (f = o(f, c, d, e, a[g + 11], 10, -1120210379)),
              (e = o(e, f, c, d, a[g + 2], 15, 718787259)),
              (d = o(d, e, f, c, a[g + 9], 21, -343485551)),
              (c = p(c, h)),
              (d = p(d, i)),
              (e = p(e, j)),
              (f = p(f, k));
          }
          return Array(c, d, e, f);
        }
        function k(a, b, c, d, e, f) {
          return p(q(p(p(b, a), p(d, f)), e), c);
        }
        function l(a, b, c, d, e, f, g) {
          return k((b & c) | (~b & d), a, b, e, f, g);
        }
        function m(a, b, c, d, e, f, g) {
          return k((b & d) | (c & ~d), a, b, e, f, g);
        }
        function n(a, b, c, d, e, f, g) {
          return k(b ^ c ^ d, a, b, e, f, g);
        }
        function o(a, b, c, d, e, f, g) {
          return k(c ^ (b | ~d), a, b, e, f, g);
        }
        function p(a, b) {
          var c = (65535 & a) + (65535 & b),
            d = (a >> 16) + (b >> 16) + (c >> 16);
          return (d << 16) | (65535 & c);
        }
        function q(a, b) {
          return (a << b) | (a >>> (32 - b));
        }
        var r = (b || {})[a],
          s = 0;
        return (
          (c.noConflict = function () {
            return b && (b[a] = r), c;
          }),
          c
        );
      }
      return a();
    })()),
    (yareportSender = (function (a, b, c, d, e, f) {
      var g = function () {
        this.init();
      };
      g.prototype = {
        constructor: g,
        reportTimerPeriod: 1e3,
        reportSDataTimerPeriod: 144e5,
        init: function () {},
        startReport: function () {
          var b = this;
          this.reportTimer ||
            (this.reportTimer = new a(this.reportTimerPeriod));
          var d = 0;
          this.reportTimer.doInterval(function () {
            try {
              var a = _queue.shift(null, this.sendData);
              d++,
                a && b.sendData(a),
                c.consoleLog(
                  "reporting reportCount=" + d + " queryString=" + a
                );
            } catch (e) {
              c.consoleLog(
                "reporting reportCount=" + d + " ,send with exception=" + e
              );
            }
          });
        },
        sendData: function (a, c, d) {
          var e = new f();
          return (
            e.addAll(a),
            this.doSendData(b.getConfig("_yaDataCollectUrl") + "?", a, c, d)
          );
        },
        doSendDataOld: function (a, b, d, e) {
          b.add("rid", "ods_action_log");
          var f = b.get("act");
          f && b.remove("act"),
            b.get("furl") || b.add("furl", document.referrer),
            b.get("curl") ||
              b.add("curl", encodeURIComponent(window.location.href));
          var g = "act=" + f + "&" + c.encode(b.toString()) + "&__yafm=i&ati=";
          this.newImage(a, d, e || this.errorCallback, g);
        },
        doSendData: function (a, b, c, d) {
          if (b.get("_ya_customReport")) {
            b.remove("_ya_customReport");
            var e = b.toString(!0);
            return void this.newImage(a, c, d || this.errorCallback, e);
          }
          b.add("rid", "ods_action_log"),
            b.get("furl") || b.add("furl", document.referrer),
            b.get("curl") ||
              b.add("curl", encodeURIComponent(window.location.href)),
            b.add("sdver", 1),
            b.add("cutc", +new Date()),
            b.add("__yafm", "i"),
            b.add("ati", "");
          var f = this.getQueryMd5(b.data);
          b.add("auth_key", f), b.remove("__yafm"), b.remove("ati");
          var g = b.get("act");
          g && b.remove("act");
          var e = "act=" + g + "&" + b.toString(!0) + "&__yafm=i&ati=";
          this.newImage(a, c, d || this.errorCallback, e);
        },
        localStorageEnabled: (function () {
          try {
            return (
              window.localStorage &&
              (window.localStorage.setItem("testLocalStorageEnabled", 123),
              123 == window.localStorage.getItem("testLocalStorageEnabled"))
            );
          } catch (a) {
            return !1;
          }
        })(),
        newImage: function (a, b, c, d) {
          var e = document.getElementById("yaScript"),
            f = e ? e.getAttribute("merge") : "false";
          if ("true" === f && this.localStorageEnabled)
            return void this.saveMergeReport(d, b);
          var g = new Image(1, 1);
          (g.onload = function () {
            (g.onload = null), (g = null), b && b(d);
          }),
            (g.src = a + d);
        },
        initBeforeunload: function () {
          this.huyaMergeReport();
        },
        saveMergeReport: function (a, b) {
          try {
            var d = c.getStorage("reportArr") || [],
              e = '{"' + a.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
              f = JSON.parse(e);
            for (var g in f)
              (f[g] = decodeURIComponent(f[g])),
                ("ua" === g || "curl" === g || "furl" === g) &&
                  (f[g] = decodeURIComponent(f[g]));
            d.push(JSON.stringify(f)), c.setStorage("reportArr", d), b && b(a);
          } catch (h) {}
        },
        huyaMergeReport: function () {
          var a = c.getStorage("reportArr") || [];
          if (0 !== a.length) {
            var b =
              "https:" == document.location.protocol
                ? "https://ylog.nimo.tv/g.gif"
                : "http://ylog.nimo.tv/g.gif";
            if (navigator.sendBeacon) {
              var d = navigator.sendBeacon(b, "[" + a + "]");
              if (d) return void c.setStorage("reportArr", []);
            }
            var e = c.createXHR();
            e.open("POST", b),
              (e.timeout = 3e3),
              e.setRequestHeader("Content-Type", "application/json"),
              (e.onload = function () {
                (200 == this.status || 304 == this.status) &&
                  c.setStorage("reportArr", []);
              }),
              e.send("[" + a + "]");
          }
        },
        callback: function (a) {},
        errorCallback: function (a) {},
        queuePush: function (a, b) {
          this.sendData(a);
        },
        queueShift: function (a) {},
        reportSample: function (a) {
          Math.random();
        },
        getQueryMd5: function (a) {
          var b = this.getObjKey(a);
          b.sort();
          var c = this.getMd5Data(b, a),
            d = parseInt(new Date().getTime() / 1e3) + 300,
            f = parseInt(1e5 * Math.random());
          return d + "-" + f + "-" + e(d + "-" + c + "-" + f);
        },
        getMd5Data: function (a, b) {
          for (var c, d = "", e = 0; (c = a[e]); e++) d += c + b[c];
          return d;
        },
        getObjKey: function (a) {
          var b = [];
          for (var c in a) a.hasOwnProperty(c) && b.push(c);
          return b;
        },
      };
      var h = new g();
      return h;
    })(yatimer, yaconfig, yautil, yadateFormat, yamd5, yaparameter)),
    (yaClass = (function () {
      var a = !1,
        b = function () {};
      return (
        (b.extend = function (c) {
          function d() {
            a ||
              (e && (this._superprototype = e.prototype),
              this.init.apply(this, arguments));
          }
          var e = null;
          this !== b && (e = this),
            e &&
              ((a = !0),
              (d.prototype = new e()),
              (d.prototype.constructor = d),
              (a = !1)),
            (d.extend = arguments.callee);
          for (var f in c)
            c.hasOwnProperty(f) &&
              (e &&
              "function" == typeof c[f] &&
              "function" == typeof d.prototype[f] &&
              /\b_super\b/.test(c[f])
                ? (d.prototype[f] = (function (a, b) {
                    return function () {
                      return (
                        (this._super = e.prototype[a]), b.apply(this, arguments)
                      );
                    };
                  })(f, c[f]))
                : (d.prototype[f] = c[f]));
          return d;
        }),
        b
      );
    })()),
    (yabaseReport = (function (a, b, c, d, e, f, g) {
      var h = g.extend({
        init: function (b, c, d) {
          if (
            ((this.param = new a()),
            c && this.param.add("pro", c),
            d && this.param.add("pas", d),
            !b)
          )
            throw new Error("please input the dty");
          this.param.add("dty", b),
            (window.onbeforeunload = f.initBeforeunload.bind(f));
        },
        getSidKey: function () {
          return this.param.get("pro") + "-" + this.param.get("pas");
        },
        setExtParam: function (a) {
          if (a) {
            var d = b.getYaParamByPrefix(
              b.getQueryParam(a),
              c.getConfig("__yaParamPrex"),
              !0
            );
            this.param.addAll(d);
          }
        },
        getPasParam: function (c, d) {
          var e = new a();
          if ((e.addAll(this.param), c)) for (var f in c) e.add(f, c[f]);
          return e.addAll(b.getQueryParam(d)), e;
        },
        reportSessionData: function (b, e) {
          var g = new a();
          g.add("act", "/session_data");
          var h = d.getSessionIdAndGenIfNotExist(this.getSidKey(), !0);
          g.add("session_id", h),
            g.addAll(c.getBaseClientInfo()),
            g.addAll(this.getPasParam(b, e)),
            d.add(h, g.toString(), !0),
            f.queuePush(g.toString());
        },
        reportEvent: function (a, b) {
          return this.reportEventBase(this.getPasParam(a, b));
        },
        reportEventBase: function (b) {
          var c = new a();
          c.add("act", "/event"),
            c.addAll(this.getTransmitParam()),
            c.addAll(b),
            f.queuePush(c.toString());
        },
        getTransmitParam: function () {
          var c = d.getSessionIdAndGenIfNotExist(this.getSidKey()),
            e = d.get(c),
            f = b.getQueryParam(e),
            g = new a(),
            h = { pro: "", session_id: "" };
          for (var i in f.data) i in h && g.add(i, f.get(i));
          return g;
        },
        reportStartUp: function (a, b) {
          this.reportSessionData(a, b);
          var c = this.getPasParam(a, b);
          c.add("eid", "startup"), this.reportEventBase(c);
        },
        startHeartbeat: function (a, c) {
          var d = this.getPasParam(a, c);
          d.add("eid", "heartbeat");
          var f = void 0;
          a && a.hbPeriodTime && (f = a.hbPeriodTime);
          var g = new e(f);
          this.heartbeatTimer = g;
          var h = this,
            i = 0;
          g.doInterval(function () {
            try {
              d.add("dur", ((i + 1) * g.periodTime) / 1e3),
                h.reportEventBase(d),
                i++,
                (g.intervalCouter = i),
                b.consoleLog(
                  "pas heartbeating heartbeatCount=" + i + ", _param=" + d
                );
            } catch (a) {
              b.consoleLog(
                "pas heartbeating heartbeatCount=" +
                  i +
                  " ,send with exception=" +
                  a
              );
            }
          });
        },
        reportEndUp: function (a, c) {
          var e = this.getPasParam(a, c);
          e.add("eid", "endup");
          var g = this.heartbeatTimer;
          if (g) {
            e.add(
              "dur",
              parseInt(new Date().getTime() - g.startTime.getTime())
            ),
              this.reportEventBase(e),
              b.consoleLog(
                "endup endUp.intervalCouter=" +
                  g.intervalCouter +
                  ", _param:" +
                  e
              );
            var h = d.getSessionIdAndGenIfNotExist(this.getSidKey()),
              i = d.get(h);
            f.queuePush(i.toString());
          }
        },
      });
      return h;
    })(
      yaparameter,
      yautil,
      yaconfig,
      yasessionData,
      yatimer,
      yareportSender,
      yaClass
    )),
    (yaTimer = (function () {
      var a = function (a) {
        this.initialize(a);
      };
      return (
        (a.defaultPeriodTime = 3e5),
        (a.prototype = {
          constructor: a,
          intervalCounter: 0,
          initialize: function (a) {
            (this.periodTime = 3e5), (this.startTime = new Date());
            var b = /^[1-9]+[0-9]*$/;
            a && b.test(a) && (this.periodTime = a);
          },
          doInterval: function (a) {
            var b = this;
            if (!a) throw new Error("pleace pass callback");
            var c = function () {
              b.sh = window.setTimeout(function () {
                a && a.call(b), c();
              }, b.periodTime);
            };
            c();
          },
          clearRefresh: function () {
            clearTimeout(this.sh);
          },
        }),
        a
      );
    })()),
    (yahuyaReport = (function (a, b, c, d, e, f, g, h, i) {
      var j = { ROOT: "ROOT", SUB: "SUB" },
        k = {},
        l = a.extend({
          init: function (a, b) {
            (this.rootSidKey = "__rootSid"),
              (this.sdkVer = "js-ya.huya-2.0"),
              (this.heartbeatPeriodTime = 6e4),
              this.initPageType(),
              (this.dty = "live");
            var c = Array.apply(this, arguments);
            c.unshift(this.dty),
              this._super.apply(this, c),
              this.initSessionData();
          },
          initPageType: function () {
            var a = (c.yaConfigParam.get("pageType") || "").toUpperCase();
            if (j.ROOT !== a && j.SUB !== a)
              throw new Error("please input the pageType (ROOT / SUB)");
            this.pageType = a;
          },
          reportStartUp: function (a, b) {
            var c = this.getReportParam(a, b);
            c.add("eid", "startup"), c.add("eid_desc", "会话启动");
            try {
              c.add("ua", encodeURIComponent(navigator.userAgent));
            } catch (d) {}
            (k.startup = c),
              this.reportBaseEvent(c),
              (this.heartBeatDur = new Date().getTime());
          },
          createIntervalReport: function () {
            var a = document.getElementById("yaScript"),
              c = a ? a.getAttribute("merge") : "false";
            if ("false" !== c) {
              var d = 3e3;
              (this.intervalReportTimer = new b(d)),
                this.intervalReportTimer.doInterval(function () {
                  f.huyaMergeReport();
                });
            }
          },
          reportBaseEvent: function (a) {
            a.add("act", "/event"),
              a.add("session_id", this.getSid()),
              f.queuePush(a);
          },
          oneHeartBeat: function (a, b) {
            var c = this.getReportParam(a, b);
            c.add("eid", "heartbeat"),
              c.add("eid_desc", "心跳"),
              c.add("dur", this.getDur()),
              this.reportBaseEvent(c);
          },
          startHeartbeat: function (a, c) {
            var d = this;
            (this.heartBeatTimer = new b(this.heartbeatPeriodTime)),
              this.heartBeatTimer.doInterval(function () {
                var b = d.getReportParam(a, c);
                b.add("eid", "heartbeat"),
                  b.add("eid_desc", "心跳"),
                  b.add("dur", d.getDur()),
                  d.reportBaseEvent(b);
              });
          },
          stopHeartbeat: function () {
            this.heartBeatTimer.clearRefresh();
          },
          reportEndUp: function (a, b) {
            var c = this.getReportParam(a, b);
            c.add("eid", "endup"),
              c.add("eid_desc", "会话结束"),
              c.add("dur", this.getDur()),
              this.reportBaseEvent(c);
          },
          getDur: function () {
            return (
              this.heartBeatDur || (this.heartBeatDur = new Date().getTime()),
              new Date().getTime() - this.heartBeatDur
            );
          },
          initSessionData: function () {
            (this.clientInfo = c.getBaseClientInfo()),
              (this.sessionData = new d()),
              this.sessionData.addAll(this.clientInfo),
              this.sessionData.addAll(this.param),
              this.sessionData.add("yyuid", c.yaConfigParam.get("yyuid") || ""),
              this.sessionData.add("sdk_ver", this.sdkVer);
            var a = this.validAlwaysNew();
            this.initSessionId(a);
          },
          validAlwaysNew: function () {
            var a = !1,
              b = h.getCookie("__yaoldyyuid"),
              d = h.getCookie("yyuid");
            if (
              (null == b && (b = ""),
              null == d && (d = ""),
              b !== d && ((a = !0), h.setCookie("__yaoldyyuid", d || "")),
              this.pageType === j.SUB)
            ) {
              var e = h.getCookie("__yaoldcid"),
                f = c.yaConfigParam.get("cid");
              c.yaConfigParam.get("ayyuid");
              e && e !== f && (f = config.yaConfigParam.get("cid")),
                h.setCookie("__yaoldcid", f || "");
            }
            return a;
          },
          initSessionId: function (a) {
            this.sidKey =
              this.pageType === j.ROOT
                ? this.rootSidKey
                : this.generalSubSidKey();
            var b = "";
            (b = a
              ? e.generateSessionId(this.sidKey, !0)
              : e.getSessionIdAndGenIfNotExist(this.sidKey, !1, !0)),
              this.sessionData.add("session_id", b);
          },
          reportEvent: function (a, b) {
            var c = this.getReportParam(a, b);
            c.add("dur", this.getDur()), this.reportBaseEvent(c);
          },
          generalSubSidKey: function () {
            return "sub_" + g(location.host + location.pathname);
          },
          getSid: function () {
            var a = e.getSessionIdAndGenIfNotExist(this.rootSidKey, !0, !0),
              b = c.yaConfigParam.get("session_id");
            if (this.pageType === j.ROOT) return b ? b : a;
            if (b) return a + "/" + b;
            var d = e.getSessionId(this.sidKey);
            return a + "/" + d;
          },
          checkIsRoot: function () {
            for (
              var a, b = this.rootProUrlMap, c = location.href, d = 0;
              (a = b[d]);
              d++
            )
              if (a === c) return void (this.pageType = j.ROOT);
            this.pageType = j.SUB;
          },
          getReportParam: function (a, b) {
            var c = this.getPasParam(a, b);
            return (c = this.megerParamWithSessionData(c));
          },
          megerParamWithSessionData: function (a) {
            var b = new d();
            return b.addAll(this.sessionData), b.addAll(a), b;
          },
        });
      return (
        (l["static"] = {}),
        (l["static"].pageViewReport = function () {
          var a = document.getElementById("yaScript"),
            b = "";
          if (a) {
            var b = a.getAttribute("pro"),
              g = a.getAttribute("noreport"),
              h = a.getAttribute("pageviewext");
            if ("true" == g) return;
          }
          var j = {};
          if (h)
            for (var l, m = h.split("&"), n = 0; (l = m[n]); n++) {
              var o = l.split("=");
              j[o[0]] = encodeURIComponent(o[1]);
            }
          c.initConfig();
          var p = c.getBaseClientInfo();
          p.add(
            "session_id",
            e.getSessionIdAndGenIfNotExist("__rootSid", !0, !0)
          ),
            p.add("curl", encodeURIComponent(location.href)),
            p.add("furl", document.referrer),
            p.add("pro", b),
            p.add("act", "/event"),
            p.add("dty", "outlive");
          for (var q in j) p.add(q, j[q]);
          var r = new d();
          r.addAll(p), r.add("eid", "pageview"), r.add("eid_desc", "页面预览");
          try {
            r.add("ua", encodeURIComponent(navigator.userAgent));
          } catch (s) {}
          var t = "";
          if (k.startup && k.startup.data && k.startup.data.rso)
            t = k.startup.data.rso;
          else {
            var u = i.getQueryParam(location);
            u.data.rso ? (t = u.data.rso) : u.data.from && (t = u.data.from);
          }
          t && r.add("rso", t), f.queuePush(r);
        }),
        (l["static"].getMid = function () {
          return c.getYamid();
        }),
        (l["static"].customReport = function (a) {
          a._ya_customReport = !0;
          var b = new d();
          for (var c in a) b.add(c, a[c]);
          f.queuePush(b);
        }),
        l
      );
    })(
      yabaseReport,
      yaTimer,
      yaconfig,
      yaparameter,
      yasessionData,
      yareportSender,
      yamd5,
      yacookie,
      yautil
    )),
    (yacore = (function (a, b, c) {
      var d = function (c, e, f) {
        if (!c) throw new Error("please input the product");
        return e || (e = ""), (d.yaInstance = new a(b, c, e, f)), d.yaInstance;
      };
      return (
        (d.cookie = {}),
        (d.cookie.get = function () {
          return c.getCookie.apply(c, arguments);
        }),
        (d.session_id = {}),
        (d.session_id.get = function () {
          return d.yaInstance.reportInstance.getSid();
        }),
        (d.customReport = function (a) {
          return b["static"].customReport(a);
        }),
        (d.mid = {}),
        (d.mid.get = function () {
          return b["static"].getMid.apply(b);
        }),
        (d["static"] = {}),
        (d["static"].pageViewReport = function () {
          return b["static"].pageViewReport.apply(b, arguments);
        }),
        d
      );
    })(yaanalytics, yahuyaReport, yacookie)),
    (ya = (function (a) {
      return (
        setTimeout(function () {
          a["static"].pageViewReport();
        }, 10),
        window.YA && (window._conflictYA = window.YA),
        (window.YA = a)
      );
    })(yacore));
})();
