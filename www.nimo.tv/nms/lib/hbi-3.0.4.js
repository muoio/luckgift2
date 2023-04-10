!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).hbi = e());
})(this, function () {
  "use strict";
  var r = function (t, e) {
    return (r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(t, e);
  };
  function t(t, e) {
    function n() {
      this.constructor = t;
    }
    r(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
  }
  var e = function () {
    return (e =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var i in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }).apply(this, arguments);
  };
  function n(o, a, s, u) {
    return new (s = s || Promise)(function (t, e) {
      function n(t) {
        try {
          i(u.next(t));
        } catch (t) {
          e(t);
        }
      }
      function r(t) {
        try {
          i(u.throw(t));
        } catch (t) {
          e(t);
        }
      }
      function i(e) {
        e.done
          ? t(e.value)
          : new s(function (t) {
              t(e.value);
            }).then(n, r);
      }
      i((u = u.apply(o, a || [])).next());
    });
  }
  function i(n, r) {
    var i,
      o,
      a,
      s = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      },
      t = { next: e(0), throw: e(1), return: e(2) };
    return (
      "function" == typeof Symbol &&
        (t[Symbol.iterator] = function () {
          return this;
        }),
      t
    );
    function e(e) {
      return function (t) {
        return (function (e) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; s; )
            try {
              if (
                ((i = 1),
                o &&
                  (a =
                    2 & e[0]
                      ? o.return
                      : e[0]
                      ? o.throw || ((a = o.return) && a.call(o), 0)
                      : o.next) &&
                  !(a = a.call(o, e[1])).done)
              )
                return a;
              switch (((o = 0), (e = a ? [2 & e[0], a.value] : e)[0])) {
                case 0:
                case 1:
                  a = e;
                  break;
                case 4:
                  return s.label++, { value: e[1], done: !1 };
                case 5:
                  s.label++, (o = e[1]), (e = [0]);
                  continue;
                case 7:
                  (e = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                    (6 === e[0] || 2 === e[0])
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                    s.label = e[1];
                    break;
                  }
                  if (6 === e[0] && s.label < a[1]) {
                    (s.label = a[1]), (a = e);
                    break;
                  }
                  if (a && s.label < a[2]) {
                    (s.label = a[2]), s.ops.push(e);
                    break;
                  }
                  a[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              e = r.call(n, s);
            } catch (t) {
              (e = [6, t]), (o = 0);
            } finally {
              i = a = 0;
            }
          if (5 & e[0]) throw e[1];
          return { value: e[0] ? e[1] : void 0, done: !0 };
        })([e, t]);
      };
    }
  }
  var o =
    ((a.use = function (t) {
      Array.isArray(t)
        ? t.forEach(function (t) {
            return a.use(t);
          })
        : a.Modules.push(t);
    }),
    (a.Modules = []),
    a);
  function a() {}
  var v =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function s(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var u = s(function (t, e) {
      t.exports = (function () {
        var c = 1e3,
          f = 6e4,
          d = 36e5,
          u = "millisecond",
          h = "second",
          p = "minute",
          m = "hour",
          v = "day",
          g = "week",
          y = "month",
          l = "quarter",
          w = "year",
          _ = "date",
          b = "Invalid Date",
          a =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          $ =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          t = {
            name: "en",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
          },
          o = function (t, e, n) {
            var r = String(t);
            return !r || r.length >= e
              ? t
              : "" + Array(e + 1 - r.length).join(n) + t;
          },
          e = {
            s: o,
            z: function (t) {
              var e = -t.utcOffset(),
                n = Math.abs(e),
                r = Math.floor(n / 60),
                i = n % 60;
              return (e <= 0 ? "+" : "-") + o(r, 2, "0") + ":" + o(i, 2, "0");
            },
            m: function t(e, n) {
              if (e.date() < n.date()) return -t(n, e);
              var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                i = e.clone().add(r, y),
                o = n - i < 0,
                a = e.clone().add(r + (o ? -1 : 1), y);
              return +(-(r + (n - i) / (o ? i - a : a - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (t) {
              return (
                { M: y, y: w, w: g, d: v, D: _, h: m, m: p, s: h, ms: u, Q: l }[
                  t
                ] ||
                String(t || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          },
          s = "en",
          S = {};
        S[s] = t;
        var r = function (t) {
            return t instanceof D;
          },
          i = function (t, e, n) {
            var r;
            if (!t) return s;
            if ("string" == typeof t)
              S[t] && (r = t), e && ((S[t] = e), (r = t));
            else {
              var i = t.name;
              (S[i] = t), (r = i);
            }
            return !n && r && (s = r), r || (!n && s);
          },
          M = function (t, e) {
            if (r(t)) return t.clone();
            var n = "object" == typeof e ? e : {};
            return (n.date = t), (n.args = arguments), new D(n);
          },
          T = e;
        (T.l = i),
          (T.i = r),
          (T.w = function (t, e) {
            return M(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var D = (function () {
            function t(t) {
              (this.$L = i(t.locale, null, !0)), this.parse(t);
            }
            var e = t.prototype;
            return (
              (e.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    n = t.utc;
                  if (null === e) return new Date(NaN);
                  if (T.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match(a);
                    if (r) {
                      var i = r[2] - 1 || 0,
                        o = (r[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              i,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              o
                            )
                          )
                        : new Date(
                            r[1],
                            i,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            o
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  (this.$x = t.x || {}),
                  this.init();
              }),
              (e.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (e.$utils = function () {
                return T;
              }),
              (e.isValid = function () {
                return !(this.$d.toString() === b);
              }),
              (e.isSame = function (t, e) {
                var n = M(t);
                return this.startOf(e) <= n && n <= this.endOf(e);
              }),
              (e.isAfter = function (t, e) {
                return M(t) < this.startOf(e);
              }),
              (e.isBefore = function (t, e) {
                return this.endOf(e) < M(t);
              }),
              (e.$g = function (t, e, n) {
                return T.u(t) ? this[e] : this.set(n, t);
              }),
              (e.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (e.valueOf = function () {
                return this.$d.getTime();
              }),
              (e.startOf = function (t, e) {
                var r = this,
                  i = !!T.u(e) || e,
                  n = T.p(t),
                  o = function (t, e) {
                    var n = T.w(
                      r.$u ? Date.UTC(r.$y, e, t) : new Date(r.$y, e, t),
                      r
                    );
                    return i ? n : n.endOf(v);
                  },
                  a = function (t, e) {
                    return T.w(
                      r
                        .toDate()
                        [t].apply(
                          r.toDate("s"),
                          (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      r
                    );
                  },
                  s = this.$W,
                  u = this.$M,
                  c = this.$D,
                  f = "set" + (this.$u ? "UTC" : "");
                switch (n) {
                  case w:
                    return i ? o(1, 0) : o(31, 11);
                  case y:
                    return i ? o(1, u) : o(0, u + 1);
                  case g:
                    var d = this.$locale().weekStart || 0,
                      l = (s < d ? s + 7 : s) - d;
                    return o(i ? c - l : c + (6 - l), u);
                  case v:
                  case _:
                    return a(f + "Hours", 0);
                  case m:
                    return a(f + "Minutes", 1);
                  case p:
                    return a(f + "Seconds", 2);
                  case h:
                    return a(f + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (e.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (e.$set = function (t, e) {
                var n,
                  r = T.p(t),
                  i = "set" + (this.$u ? "UTC" : ""),
                  o = ((n = {}),
                  (n[v] = i + "Date"),
                  (n[_] = i + "Date"),
                  (n[y] = i + "Month"),
                  (n[w] = i + "FullYear"),
                  (n[m] = i + "Hours"),
                  (n[p] = i + "Minutes"),
                  (n[h] = i + "Seconds"),
                  (n[u] = i + "Milliseconds"),
                  n)[r],
                  a = r === v ? this.$D + (e - this.$W) : e;
                if (r === y || r === w) {
                  var s = this.clone().set(_, 1);
                  s.$d[o](a),
                    s.init(),
                    (this.$d = s.set(_, Math.min(this.$D, s.daysInMonth())).$d);
                } else o && this.$d[o](a);
                return this.init(), this;
              }),
              (e.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (e.get = function (t) {
                return this[T.p(t)]();
              }),
              (e.add = function (n, t) {
                var e,
                  r = this;
                n = Number(n);
                var i = T.p(t),
                  o = function (t) {
                    var e = M(r);
                    return T.w(e.date(e.date() + Math.round(t * n)), r);
                  };
                if (i === y) return this.set(y, this.$M + n);
                if (i === w) return this.set(w, this.$y + n);
                if (i === v) return o(1);
                if (i === g) return o(7);
                var a =
                    ((e = {}), (e[p] = f), (e[m] = d), (e[h] = c), e)[i] || 1,
                  s = this.$d.getTime() + n * a;
                return T.w(s, this);
              }),
              (e.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (e.format = function (t) {
                var i = this,
                  e = this.$locale();
                if (!this.isValid()) return e.invalidDate || b;
                var o = t || "YYYY-MM-DDTHH:mm:ssZ",
                  n = T.z(this),
                  r = this.$H,
                  a = this.$m,
                  s = this.$M,
                  u = e.weekdays,
                  c = e.months,
                  f = function (t, e, n, r) {
                    return (t && (t[e] || t(i, o))) || n[e].substr(0, r);
                  },
                  d = function (t) {
                    return T.s(r % 12 || 12, t, "0");
                  },
                  l =
                    e.meridiem ||
                    function (t, e, n) {
                      var r = t < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    },
                  h = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: s + 1,
                    MM: T.s(s + 1, 2, "0"),
                    MMM: f(e.monthsShort, s, c, 3),
                    MMMM: f(c, s),
                    D: this.$D,
                    DD: T.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: f(e.weekdaysMin, this.$W, u, 2),
                    ddd: f(e.weekdaysShort, this.$W, u, 3),
                    dddd: u[this.$W],
                    H: String(r),
                    HH: T.s(r, 2, "0"),
                    h: d(1),
                    hh: d(2),
                    a: l(r, a, !0),
                    A: l(r, a, !1),
                    m: String(a),
                    mm: T.s(a, 2, "0"),
                    s: String(this.$s),
                    ss: T.s(this.$s, 2, "0"),
                    SSS: T.s(this.$ms, 3, "0"),
                    Z: n,
                  };
                return o.replace($, function (t, e) {
                  return e || h[t] || n.replace(":", "");
                });
              }),
              (e.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (e.diff = function (t, e, n) {
                var r,
                  i = T.p(e),
                  o = M(t),
                  a = (o.utcOffset() - this.utcOffset()) * f,
                  s = this - o,
                  u = T.m(this, o);
                return (
                  (u =
                    ((r = {}),
                    (r[w] = u / 12),
                    (r[y] = u),
                    (r[l] = u / 3),
                    (r[g] = (s - a) / 6048e5),
                    (r[v] = (s - a) / 864e5),
                    (r[m] = s / d),
                    (r[p] = s / f),
                    (r[h] = s / c),
                    r)[i] || s),
                  n ? u : T.a(u)
                );
              }),
              (e.daysInMonth = function () {
                return this.endOf(y).$D;
              }),
              (e.$locale = function () {
                return S[this.$L];
              }),
              (e.locale = function (t, e) {
                if (!t) return this.$L;
                var n = this.clone(),
                  r = i(t, e, !0);
                return r && (n.$L = r), n;
              }),
              (e.clone = function () {
                return T.w(this.$d, this);
              }),
              (e.toDate = function () {
                return new Date(this.valueOf());
              }),
              (e.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (e.toISOString = function () {
                return this.$d.toISOString();
              }),
              (e.toString = function () {
                return this.$d.toUTCString();
              }),
              t
            );
          })(),
          n = D.prototype;
        return (
          (M.prototype = n),
          [
            ["$ms", u],
            ["$s", h],
            ["$m", p],
            ["$H", m],
            ["$W", v],
            ["$M", y],
            ["$y", w],
            ["$D", _],
          ].forEach(function (e) {
            n[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (M.extend = function (t, e) {
            return t.$i || (t(e, D, M), (t.$i = !0)), M;
          }),
          (M.locale = i),
          (M.isDayjs = r),
          (M.unix = function (t) {
            return M(1e3 * t);
          }),
          (M.en = S[s]),
          (M.Ls = S),
          (M.p = {}),
          M
        );
      })();
    }),
    c = {},
    f = (c = window.__HBI__ && window.__HBI__.ext ? window.__HBI__.ext : c);
  function d(t, e) {
    var n,
      r,
      i,
      o,
      a,
      s,
      u,
      c,
      f,
      d,
      l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      h = (r = ""),
      p = (i = 0),
      m = (function (t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = t.charCodeAt(n);
          r < 128
            ? e.push(r)
            : r < 2048
            ? e.push(192 | (r >> 6), 128 | (63 & r))
            : r < 55296 || 57344 <= r
            ? e.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (63 & r))
            : (n++,
              (r = 65536 + (((1023 & r) << 10) | (1023 & t.charCodeAt(n)))),
              e.push(
                240 | (r >> 18),
                128 | ((r >> 12) & 63),
                128 | ((r >> 6) & 63),
                128 | (63 & r)
              ));
        }
        return e;
      })(t);
    for (p = m.length - 1, o = 0; 0 <= p; p--)
      (n = m[p] ^ e.charCodeAt(o) ^ i),
        (h += String.fromCharCode(n)),
        (o = ++o % e.length),
        (i = n);
    for (p = 0; p < h.length; )
      (u = (d = h.charCodeAt(p++)) >> 2),
        (c = ((3 & d) << 4) | ((a = h.charCodeAt(p++)) >> 4)),
        (f = ((15 & a) << 2) | ((s = h.charCodeAt(p++)) >> 6)),
        (d = 63 & s),
        isNaN(a) ? (f = d = 64) : isNaN(s) && (d = 64),
        (r = r + l.charAt(u) + l.charAt(c) + l.charAt(f) + l.charAt(d));
    return r;
  }
  var l = window.__HBI__.rpurl || "https://metric.huya.com";
  function h() {
    (this.url = "//{{sourceUrl}}/d.gif"), (this.rid = "frontendmonitorck");
  }
  var p,
    m,
    g = new ((h.prototype.gif = function (t, e) {
      var n = this.getIts(),
        t = d(JSON.stringify(this.getMetricReportData(e, t, n)), n);
      (n = l + "?ts=" + n),
        (t = t),
        "function" == typeof navigator.sendBeacon
          ? navigator.sendBeacon(n, t)
          : fetch(n, { method: "POST", body: t, keepalive: !0 });
    }),
    (h.prototype.getMetricReportData = function (t, e, n) {
      var r,
        i = {};
      for (r in e.common) {
        var o = e.common[r];
        i[r] = (null != o && o.toString()) || "";
      }
      var a = {};
      return (
        e.series.forEach(function (t) {
          a[t.submetric] = t.value;
        }),
        window.__HBI__.log && console.log("hbi", { dim: i, field: a }),
        {
          m: [
            {
              dim: i,
              field: a,
              name: "frontperformance",
              its: parseInt(n, 10),
            },
          ],
          ua: "web&1.2.0",
          uid: "0",
        }
      );
    }),
    (h.prototype.getIts = function () {
      return (new Date().getTime() / 1e3).toFixed(0);
    }),
    h)(),
    y =
      (t(w, (m = o)),
      (w.prototype.getPerformance = function () {
        return (
          window.performance ||
          window.webkitPerformance ||
          window.msPerformance ||
          window.mozPerformance
        );
      }),
      (w.prototype.getCommonModel = function () {
        return e(
          {
            timestamp: u().unix(),
            endpoint: window.__HBI__.id,
            metric: this.metric,
            system: this.ua.os.name,
            device: this.device,
            browser: this.browser,
            bv: this.browserVersion,
            engine: this.ua.engine.name,
            path: this.getLoadPath(),
            domain: this.getDomain(),
            version: window.__HBI__.version,
            screen: this.getScreen(),
            et: this.getEt(),
            dnt: this.getDnt(),
            save_data: this.getSaveData(),
          },
          f
        );
      }),
      (w.prototype.getEt = function () {
        return navigator.connection && navigator.connection.effectiveType;
      }),
      (w.prototype.getSaveData = function () {
        var t = navigator.connection && navigator.connection.saveData;
        return void 0 === t ? -1 : t ? 1 : 0;
      }),
      (w.prototype.getDnt = function () {
        var t =
            navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack,
          t = "1" === t || "yes" === t ? 1 : "0" === t || "no" === t ? 0 : -1;
        return t;
      }),
      (w.prototype.getLoadPath = function () {
        return this.loadPath.split("?")[0];
      }),
      (w.prototype.getPath = function () {
        return location.href.split("?")[0];
      }),
      (w.prototype.getDomain = function () {
        return location.host;
      }),
      (w.prototype.getScreen = function () {
        var t = window.screen;
        return t && t.width
          ? t.width + "*" + t.height
          : (window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth) +
              "*" +
              (window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight);
      }),
      w);
  function w(t) {
    var e,
      n,
      r,
      i,
      o = m.call(this) || this;
    return (
      (o.http = g),
      (o.loadPath = location.href),
      (o.metric = t),
      (o.device =
        ((e = navigator.userAgent),
        (n = /(?:Windows Phone)/.test(e)),
        (r = /(?:SymbianOS)/.test(e) || n),
        (t = /(?:Android)/.test(e)),
        (n = /(?:Firefox)/.test(e)),
        (n =
          /(?:iPad|PlayBook)/.test(e) ||
          (t && !/(?:Mobile)/.test(e)) ||
          (n && /(?:Tablet)/.test(e))),
        (e = /(?:iPhone)/.test(e) && !n),
        n
          ? "pad"
          : e
          ? "iphone"
          : t
          ? "android"
          : !e && !t && !r
          ? "pc"
          : "unknown")),
      (o.ua =
        (p ||
          ((i = (window.__HBI__.getUA && window.__HBI__.getUA()) || {}),
          (p = {}),
          ["browser", "os", "engine", "appBrowser"].forEach(function (t) {
            var e;
            p[t] = {
              name:
                (null === (e = i[t]) || void 0 === e ? void 0 : e.name) || "",
              version:
                (null === (t = i[t]) || void 0 === t ? void 0 : t.version) ||
                "",
            };
          })),
        p)),
      (o.browser = o.ua.appBrowser.name),
      (o.browserVersion = o.ua.appBrowser.version),
      o
    );
  }
  var _,
    b =
      (t($, (_ = y)),
      ($.prototype.gather = function () {
        var t = this.performance.timing;
        return this.calcPerformanceData(t);
      }),
      ($.prototype.start = function () {
        return n(this, void 0, void 0, function () {
          var n, r;
          return i(this, function (t) {
            switch (t.label) {
              case 0:
                return this.performance && this.performance.timing
                  ? [
                      4,
                      ((e = 0),
                      new Promise(function (t) {
                        setTimeout(function () {
                          t();
                        }, e);
                      })),
                    ]
                  : [3, 2];
              case 1:
                t.sent(),
                  (n = this.gather()),
                  (r = Object.keys(n).map(function (t) {
                    return { value: n[t], submetric: t };
                  })).every(function (t) {
                    t = t.value;
                    return t <= 3e4 && 0 <= t;
                  }) &&
                    this.http.gif(
                      {
                        common: this.getCommonModel(),
                        series: r,
                        key: this.key,
                        strategy: "aggregate",
                      },
                      "timing"
                    ),
                  (t.label = 2);
              case 2:
                return [2];
            }
            var e;
          });
        });
      }),
      ($.prototype.calcPerformanceData = function (t) {
        var e = t.domainLookupEnd,
          n = t.domainLookupStart,
          r = t.connectEnd,
          i = t.connectStart,
          o = t.secureConnectionStart,
          a = t.responseStart,
          s = t.requestStart,
          u = t.responseEnd,
          c = t.domInteractive,
          f = t.domContentLoadedEventEnd,
          d = (t.loadEventStart, t.navigationStart),
          l = t.loadEventEnd,
          h = t.domComplete,
          p = t.domLoading,
          m = t.redirectStart,
          v = t.redirectEnd,
          g = t.unloadEventStart,
          t = t.unloadEventEnd;
        return {
          unload: t ? t - g : 0,
          redirect: v ? v - m : 0,
          dns: e - n,
          tcp: r - i,
          ssl: o ? r - o : 0,
          ttfb: a - s,
          trans: u - a,
          dom: c - p,
          res: h - f,
          network: u - d,
          fpt: this.getMorePreciseFirstPaintTime() || 0,
          fcp: this.getMorePreciseFirstContentfulPaintTime() || 0,
          ready: f - d,
          load: l ? l - d : 0,
        };
      }),
      ($.prototype.getMorePreciseFirstPaintTime = function () {
        try {
          var t = performance.getEntriesByName("first-paint");
          return t && t.length ? Math.round(t[0].startTime) : 0;
        } catch (t) {
          return 0;
        }
      }),
      ($.prototype.getMorePreciseFirstContentfulPaintTime = function () {
        try {
          var t = performance.getEntriesByName("first-contentful-paint");
          return t && t.length ? Math.round(t[0].startTime) : 0;
        } catch (t) {
          return 0;
        }
      }),
      $);
  function $() {
    var t = _.call(this, "timing") || this;
    return (
      (t.key = "frontperformance"), (t.performance = t.getPerformance()), t
    );
  }
  var S,
    M = s(function (m) {
      !(function () {
        var r =
            ("undefined" == typeof window || window !== this) &&
            void 0 !== v &&
            null != v
              ? v
              : this,
          e =
            "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (t, e, n) {
                  t != Array.prototype &&
                    t != Object.prototype &&
                    (t[e] = n.value);
                };
        function n() {
          (n = function () {}), r.Symbol || (r.Symbol = t);
        }
        var i = 0;
        function t(t) {
          return "jscomp_symbol_" + (t || "") + i++;
        }
        function o() {
          n();
          var t =
            (t = r.Symbol.iterator) ||
            (r.Symbol.iterator = r.Symbol("iterator"));
          "function" != typeof Array.prototype[t] &&
            e(Array.prototype, t, {
              configurable: !0,
              writable: !0,
              value: function () {
                return a(this);
              },
            }),
            (o = function () {});
        }
        function a(t) {
          var e,
            n = 0;
          return (
            (e = function () {
              return n < t.length ? { done: !1, value: t[n++] } : { done: !0 };
            }),
            o(),
            ((e = { next: e })[r.Symbol.iterator] = function () {
              return this;
            }),
            e
          );
        }
        function s(t) {
          o();
          var e = t[Symbol.iterator];
          return e ? e.call(t) : a(t);
        }
        var u = "img script iframe link audio video source".split(" ");
        function c(n) {
          var t = new MutationObserver(function (t) {
            for (var e = (t = s(t)).next(); !e.done; e = t.next())
              (("childList" == (e = e.value).type &&
                (function t(e, n) {
                  for (var r = (e = s(e)).next(); !r.done; r = e.next())
                    if (
                      ((r = r.value),
                      n.includes(r.nodeName.toLowerCase()) || t(r.children, n))
                    )
                      return 1;
                })(e.addedNodes, u)) ||
                ("attributes" == e.type &&
                  u.includes(e.target.tagName.toLowerCase()))) &&
                n(e);
          });
          return (
            t.observe(document, {
              attributes: !0,
              childList: !0,
              subtree: !0,
              attributeFilter: ["href", "src"],
            }),
            t
          );
        }
        function f(t, e) {
          if (2 < t.length) return performance.now();
          for (var n = [], r = (e = s(e)).next(); !r.done; r = e.next())
            (r = r.value),
              n.push({ timestamp: r.start, type: "requestStart" }),
              n.push({ timestamp: r.end, type: "requestEnd" });
          for (r = (e = s(t)).next(); !r.done; r = e.next())
            n.push({ timestamp: r.value, type: "requestStart" });
          for (
            n.sort(function (t, e) {
              return t.timestamp - e.timestamp;
            }),
              t = t.length,
              e = n.length - 1;
            0 <= e;
            e--
          )
            switch (((r = n[e]), r.type)) {
              case "requestStart":
                t--;
                break;
              case "requestEnd":
                if (2 < ++t) return r.timestamp;
                break;
              default:
                throw Error("Internal Error: This should never happen");
            }
          return 0;
        }
        function d(t) {
          (this.w = !!(t = t || {}).useMutationObserver),
            (this.j = t.minValue || null),
            (t = window.__tti && window.__tti.e);
          var r,
            e = window.__tti && window.__tti.o;
          (this.a = t
            ? t.map(function (t) {
                return { start: t.startTime, end: t.startTime + t.duration };
              })
            : []),
            e && e.disconnect(),
            (this.l = []),
            (this.u = new Map()),
            (this.g = null),
            (this.m = -1 / 0),
            (this.f = !1),
            (this.c = this.b = this.h = null),
            ((r = this).b = new PerformanceObserver(function (t) {
              for (
                var e, n = (t = s(t.getEntries())).next();
                !n.done;
                n = t.next()
              )
                "longtask" === (n = n.value).entryType &&
                  ((e = n.startTime + n.duration),
                  r.a.push({ start: n.startTime, end: e }),
                  h(r, e + 5e3));
            })),
            r.b.observe({ entryTypes: ["longtask"] }),
            this.w && (this.c = c(this.v.bind(this)));
        }
        function l(t) {
          t.f = !0;
          var e = 0 < t.a.length ? t.a[t.a.length - 1].end : 0,
            n = f(t.i, t.l);
          h(t, Math.max(n + 5e3, e));
        }
        function h(o, t) {
          !o.f ||
            o.m > t ||
            (clearTimeout(o.g),
            (o.g = setTimeout(function () {
              var t = performance.timing.navigationStart,
                e = f(o.i, o.l),
                t =
                  (window.a && window.a.s ? 1e3 * window.a.s().A - t : 0) ||
                  performance.timing.domContentLoadedEventEnd - t,
                n =
                  o.j ||
                  (performance.timing.domContentLoadedEventEnd
                    ? (n = performance.timing).domContentLoadedEventEnd -
                      n.navigationStart
                    : null),
                r = performance.now();
              null === n && h(o, Math.max(e + 5e3, r + 1e3));
              var i = o.a;
              (e =
                r - e < 5e3
                  ? null
                  : r - (e = i.length ? i[i.length - 1].end : t) < 5e3
                  ? null
                  : Math.max(e, n)) &&
                (o.h(e),
                clearTimeout(o.g),
                (o.f = !1),
                o.b && o.b.disconnect(),
                o.c && o.c.disconnect()),
                h(o, performance.now() + 1e3);
            }, t - performance.now())),
            (o.m = t));
        }
        (d.prototype.getFirstConsistentlyInteractive = function () {
          var e = this;
          return new Promise(function (t) {
            (e.h = t),
              "complete" == document.readyState
                ? l(e)
                : window.addEventListener("load", function () {
                    l(e);
                  });
          });
        }),
          (d.prototype.v = function () {
            h(this, performance.now() + 5e3);
          }),
          r.Object.defineProperties(d.prototype, {
            i: {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return [].concat(
                  (function (t) {
                    if (!(t instanceof Array)) {
                      t = s(t);
                      for (var e, n = []; !(e = t.next()).done; )
                        n.push(e.value);
                      t = n;
                    }
                    return t;
                  })(this.u.values())
                );
              },
            },
          });
        var p = {
          getFirstConsistentlyInteractive: function (t) {
            return (
              (t = t || {}),
              "PerformanceLongTaskTiming" in window
                ? new d(t).getFirstConsistentlyInteractive()
                : Promise.resolve(null)
            );
          },
        };
        m.exports ? (m.exports = p) : (window.ttiPolyfill = p);
      })();
    }),
    T =
      (t(D, (S = y)),
      (D.prototype.gather = function () {
        return n(this, void 0, void 0, function () {
          var e;
          return i(this, function (t) {
            switch (t.label) {
              case 0:
                return (e = {}), [4, this.getTti()];
              case 1:
                return [2, ((e.tti = t.sent()), e)];
            }
          });
        });
      }),
      (D.prototype.getTti = function () {
        return new Promise(function (e) {
          M.getFirstConsistentlyInteractive().then(function (t) {
            e(null != t ? t : -1);
          });
        });
      }),
      (D.prototype.start = function () {
        return n(this, void 0, void 0, function () {
          var e, n;
          return i(this, function (t) {
            switch (t.label) {
              case 0:
                return window.__HBI__.tti ? [4, this.gather()] : [2];
              case 1:
                return (
                  (e = t.sent()),
                  (n = Object.keys(e).map(function (t) {
                    return { value: e[t], submetric: t };
                  })).every(function (t) {
                    t = t.value;
                    return t <= 3e4 && 0 <= t;
                  }) &&
                    this.http.gif(
                      {
                        common: this.getCommonModel(),
                        series: n,
                        key: this.key,
                        strategy: "aggregate",
                      },
                      "tti"
                    ),
                  [2]
                );
            }
          });
        });
      }),
      D);
  function D() {
    var t = S.call(this, "tti") || this;
    return (t.key = "frontperformance.tti"), t;
  }
  function E(e, n) {
    function r(t) {
      ("pagehide" !== t.type && "hidden" !== document.visibilityState) ||
        (e(t),
        n &&
          (removeEventListener("visibilitychange", r, !0),
          removeEventListener("pagehide", r, !0)));
    }
    addEventListener("visibilitychange", r, !0),
      addEventListener("pagehide", r, !0);
  }
  function P(e, n) {
    function t(t) {
      "first-contentful-paint" === t.name &&
        (s && s.disconnect(),
        t.startTime < i.firstHiddenTime &&
          ((o.value = t.startTime), o.entries.push(t), r(!0)));
    }
    var r,
      i = N(),
      o = I("FCP"),
      a =
        performance.getEntriesByName &&
        performance.getEntriesByName("first-contentful-paint")[0],
      s = a ? null : H("paint", t);
    (a || s) &&
      ((r = L(e, o, n)),
      a && t(a),
      A(function (t) {
        (o = I("FCP")),
          (r = L(e, o, n)),
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              (o.value = performance.now() - t.timeStamp), r(!0);
            });
          });
      }));
  }
  function k(e, t) {
    function n(t) {
      -1 < W && e(t);
    }
    function r(t) {
      var e, n;
      t.hadRecentInput ||
        ((e = s[0]),
        (n = s[s.length - 1]),
        a && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3
          ? ((a += t.value), s.push(t))
          : ((a = t.value), (s = [t])),
        a > o.value && ((o.value = a), (o.entries = s), i()));
    }
    j ||
      (P(function (t) {
        W = t.value;
      }),
      (j = !0));
    var i,
      o = I("CLS", 0),
      a = 0,
      s = [],
      u = H("layout-shift", r);
    u &&
      ((i = L(n, o, t)),
      E(function () {
        u.takeRecords().map(r), i(!0);
      }),
      A(function () {
        (W = -1), (o = I("CLS", (a = 0))), (i = L(n, o, t));
      }));
  }
  function O(t, e) {
    function n(t) {
      t.startTime < r.firstHiddenTime &&
        ((i.value = t.processingStart - t.startTime), i.entries.push(t), a(!0));
    }
    var r = N(),
      i = I("FID"),
      o = H("first-input", n),
      a = L(t, i, e);
    o &&
      E(function () {
        o.takeRecords().map(n), o.disconnect();
      }, !0),
      o || window.webVitals.firstInputPolyfill(n),
      A(function () {
        (i = I("FID")),
          (a = L(t, i, e)),
          window.webVitals.resetFirstInputPolyfill(),
          window.webVitals.firstInputPolyfill(n);
      });
  }
  function x(e, n) {
    function t(t) {
      var e = t.startTime;
      e < o.firstHiddenTime && ((a.value = e), a.entries.push(t)), r();
    }
    var r,
      i,
      o = N(),
      a = I("LCP"),
      s = H("largest-contentful-paint", t);
    s &&
      ((r = L(e, a, n)),
      (i = function () {
        Y.has(a.id) ||
          (s.takeRecords().map(t), s.disconnect(), Y.add(a.id), r(!0));
      }),
      ["keydown", "click"].forEach(function (t) {
        addEventListener(t, i, { once: !0, capture: !0 });
      }),
      E(i, !0),
      A(function (t) {
        (a = I("LCP")),
          (r = L(e, a, n)),
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              (a.value = performance.now() - t.timeStamp), Y.add(a.id), r(!0);
            });
          });
      }));
  }
  var C,
    I = function (t, e) {
      return {
        name: t,
        value: void 0 === e ? -1 : e,
        delta: 0,
        entries: [],
        id: "v2-"
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
      };
    },
    H = function (t, e) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
          if ("first-input" === t && !("PerformanceEventTiming" in self))
            return;
          var n = new PerformanceObserver(function (t) {
            return t.getEntries().map(e);
          });
          return n.observe({ type: t, buffered: !0 }), n;
        }
      } catch (t) {}
    },
    A = function (e) {
      addEventListener(
        "pageshow",
        function (t) {
          t.persisted && e(t);
        },
        !0
      );
    },
    L = function (e, n, r) {
      var i;
      return function (t) {
        0 <= n.value &&
          (t || r) &&
          ((n.delta = n.value - (i || 0)),
          (!n.delta && void 0 !== i) || ((i = n.value), e(n)));
      };
    },
    B = -1,
    F = function () {
      E(function (t) {
        t = t.timeStamp;
        B = t;
      }, !0);
    },
    N = function () {
      return (
        B < 0 &&
          ((B = self.webVitals.firstHiddenTime) === 1 / 0 && F(),
          A(function () {
            setTimeout(function () {
              (B = "hidden" === document.visibilityState ? 0 : 1 / 0), F();
            }, 0);
          })),
        {
          get firstHiddenTime() {
            return B;
          },
        }
      );
    },
    j = !1,
    W = -1,
    Y = new Set(),
    q =
      (t(U, (C = y)),
      (U.prototype.start = function () {
        var e,
          n = this;
        window.__HBI__.fid &&
          ((e = !1),
          O(function (t) {
            e ||
              ((e = !0),
              0 <= (t = Math.round(t.value)) &&
                ((t = [{ value: t, submetric: "fid" }]),
                n.http.gif(
                  {
                    common: n.getCommonModel(),
                    series: t,
                    key: n.key,
                    strategy: "aggregate",
                  },
                  "fid"
                )));
          }));
      }),
      U);
  function U() {
    var t = C.call(this, "fid") || this;
    return (t.key = "frontperformance.fid"), t;
  }
  var V,
    c =
      (t(R, (V = y)),
      (R.prototype.start = function () {
        var e,
          n = this;
        window.__HBI__.lcp &&
          ((e = !1),
          x(function (t) {
            e ||
              ((e = !0),
              0 <= (t = Math.round(t.value)) &&
                ((t = [{ value: t, submetric: "lcp" }]),
                n.http.gif(
                  {
                    common: n.getCommonModel(),
                    series: t,
                    key: n.key,
                    strategy: "aggregate",
                  },
                  "lcp"
                )));
          }));
      }),
      R);
  function R() {
    var t = V.call(this, "lcp") || this;
    return (t.key = "frontperformance.lcp"), t;
  }
  var J,
    y =
      (t(z, (J = y)),
      (z.prototype.start = function () {
        var e,
          n = this;
        window.__HBI__.cls &&
          ((e = !1),
          k(function (t) {
            t = t.value;
            e ||
              ((e = !0),
              0 <= t &&
                ((t = [{ value: t, submetric: "cls" }]),
                n.http.gif(
                  {
                    common: n.getCommonModel(),
                    series: t,
                    key: n.key,
                    strategy: "aggregate",
                  },
                  "cls"
                )));
          }));
      }),
      z);
  function z() {
    var t = J.call(this, "cls") || this;
    return (t.key = "frontperformance.cls"), t;
  }
  var Z,
    G = function (t, e, n, r) {
      void 0 === r && (r = !1),
        t.addEventListener
          ? t.addEventListener(e, n, r)
          : t.attachEvent
          ? t.attachEvent("on" + e, n)
          : (t["on" + e] = n);
    },
    Q =
      (t(K, (Z = o)),
      (K.prototype.start = function () {
        var t = this;
        "complete" === document.readyState
          ? this.installModules()
          : G(window, "load", function () {
              t.installModules();
            });
      }),
      (K.prototype.installModules = function () {
        var e = this;
        K.Modules.forEach(function (t) {
          "function" == typeof t && new t().start(e);
        });
      }),
      K);
  function K() {
    var t = Z.call(this) || this;
    return t.start(), t;
  }
  Q.use([b, q, y, c, T]);
  var X,
    tt =
      ((X = !0),
      (window.__HBI__ && "number" == typeof window.__HBI__.id) ||
        (console.warn("can't found the __HBI__.id"), (X = !1)),
      X);
  return (function () {
    try {
      var t;
      tt &&
        ((t = window.__HBI__),
        (window.__HBI__ = {
          id: t.id,
          rpurl: t.rpurl,
          tti: t.tti || !1,
          fid: !1 !== t.fid,
          lcp: t.lcp || !1,
          cls: t.cls || !1,
          log: t.log || !1,
          version: "1.0.49",
          ext: t.ext || {},
          getUA: t.getUA,
        }),
        new Q());
    } catch (t) {
      console.warn(t);
    }
    return window.__HBI__;
  })();
});
