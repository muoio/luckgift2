/*! @hy-sentry/tracing & @hy-sentry/browser 6.14.2 (979cdc5c) | https://github.com/getsentry/sentry-javascript */
var Sentry = (function (t) {
  var n = function (t, i) {
    return (n =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, n) {
          t.__proto__ = n;
        }) ||
      function (t, n) {
        for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i]);
      })(t, i);
  };
  function i(t, i) {
    function r() {
      this.constructor = t;
    }
    n(t, i),
      (t.prototype =
        null === i ? Object.create(i) : ((r.prototype = i.prototype), new r()));
  }
  var r,
    e,
    o,
    s,
    u,
    a,
    c,
    f = function () {
      return (f =
        Object.assign ||
        function (t) {
          for (var n, i = 1, r = arguments.length; i < r; i++)
            for (var e in (n = arguments[i]))
              Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
          return t;
        }).apply(this, arguments);
    };
  function h(t, n) {
    var i = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        n.indexOf(r) < 0 &&
        (i[r] = t[r]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var e = 0;
      for (r = Object.getOwnPropertySymbols(t); e < r.length; e++)
        n.indexOf(r[e]) < 0 && (i[r[e]] = t[r[e]]);
    }
    return i;
  }
  function v(t) {
    var n = "function" == typeof Symbol && t[Symbol.iterator],
      i = 0;
    return n
      ? n.call(t)
      : {
          next: function () {
            return (
              t && i >= t.length && (t = void 0),
              { value: t && t[i++], done: !t }
            );
          },
        };
  }
  function d(t, n) {
    var i = "function" == typeof Symbol && t[Symbol.iterator];
    if (!i) return t;
    var r,
      e,
      o = i.call(t),
      s = [];
    try {
      for (; (void 0 === n || n-- > 0) && !(r = o.next()).done; )
        s.push(r.value);
    } catch (t) {
      e = { error: t };
    } finally {
      try {
        r && !r.done && (i = o.return) && i.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
    return s;
  }
  function l() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t = t.concat(d(arguments[n]));
    return t;
  }
  function p() {
    return (
      "[object process]" ===
      Object.prototype.toString.call(
        "undefined" != typeof process ? process : 0
      )
    );
  }
  function y(t, n) {
    return t.require(n);
  }
  !(function (t) {
    (t[(t.None = 0)] = "None"),
      (t[(t.Error = 1)] = "Error"),
      (t[(t.Debug = 2)] = "Debug"),
      (t[(t.Verbose = 3)] = "Verbose");
  })(r || (r = {})),
    (function (t) {
      (t.Ok = "ok"),
        (t.Exited = "exited"),
        (t.Crashed = "crashed"),
        (t.Abnormal = "abnormal");
    })(e || (e = {})),
    (function (t) {
      (t.Ok = "ok"), (t.Errored = "errored"), (t.Crashed = "crashed");
    })(o || (o = {})),
    ((s = t.Severity || (t.Severity = {})).Fatal = "fatal"),
    (s.Error = "error"),
    (s.Warning = "warning"),
    (s.Log = "log"),
    (s.Info = "info"),
    (s.Debug = "debug"),
    (s.Critical = "critical"),
    (function (t) {
      t.fromString = function (n) {
        switch (n) {
          case "debug":
            return t.Debug;
          case "info":
            return t.Info;
          case "warn":
          case "warning":
            return t.Warning;
          case "error":
            return t.Error;
          case "fatal":
            return t.Fatal;
          case "critical":
            return t.Critical;
          case "log":
          default:
            return t.Log;
        }
      };
    })(t.Severity || (t.Severity = {})),
    ((u = t.Status || (t.Status = {})).Unknown = "unknown"),
    (u.Skipped = "skipped"),
    (u.Success = "success"),
    (u.RateLimit = "rate_limit"),
    (u.Invalid = "invalid"),
    (u.Failed = "failed"),
    (function (t) {
      t.fromHttpCode = function (n) {
        return n >= 200 && n < 300
          ? t.Success
          : 429 === n
          ? t.RateLimit
          : n >= 400 && n < 500
          ? t.Invalid
          : n >= 500
          ? t.Failed
          : t.Unknown;
      };
    })(t.Status || (t.Status = {})),
    (function (t) {
      (t.Explicit = "explicitly_set"),
        (t.Sampler = "client_sampler"),
        (t.Rate = "client_rate"),
        (t.Inheritance = "inheritance");
    })(a || (a = {})),
    (function (t) {
      (t.BeforeSend = "before_send"),
        (t.EventProcessor = "event_processor"),
        (t.NetworkError = "network_error"),
        (t.QueueOverflow = "queue_overflow"),
        (t.RateLimitBackoff = "ratelimit_backoff"),
        (t.SampleRate = "sample_rate");
    })(c || (c = {}));
  var m = {};
  function g() {
    return p()
      ? global
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof self
      ? self
      : m;
  }
  function b(t) {
    switch (Object.prototype.toString.call(t)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return k(t, Error);
    }
  }
  function w(t) {
    return "[object ErrorEvent]" === Object.prototype.toString.call(t);
  }
  function T(t) {
    return "[object DOMError]" === Object.prototype.toString.call(t);
  }
  function S(t) {
    return "[object String]" === Object.prototype.toString.call(t);
  }
  function x(t) {
    return null === t || ("object" != typeof t && "function" != typeof t);
  }
  function E(t) {
    return "[object Object]" === Object.prototype.toString.call(t);
  }
  function O(t) {
    return "undefined" != typeof Event && k(t, Event);
  }
  function _(t) {
    return "undefined" != typeof Element && k(t, Element);
  }
  function j(t) {
    return Boolean(t && t.then && "function" == typeof t.then);
  }
  function k(t, n) {
    try {
      return t instanceof n;
    } catch (t) {
      return !1;
    }
  }
  function D(t, n) {
    try {
      for (
        var i = t, r = [], e = 0, o = 0, s = " > ".length, u = void 0;
        i &&
        e++ < 5 &&
        !(
          "html" === (u = N(i, n)) ||
          (e > 1 && o + r.length * s + u.length >= 80)
        );

      )
        r.push(u), (o += u.length), (i = i.parentNode);
      return r.reverse().join(" > ");
    } catch (t) {
      return "<unknown>";
    }
  }
  function N(t, n) {
    var i,
      r,
      e,
      o,
      s,
      u,
      a,
      c = t,
      f = [];
    if (!c || !c.tagName) return "";
    f.push(c.tagName.toLowerCase());
    var h = (null === (i = n) || void 0 === i ? void 0 : i.length)
      ? n
          .filter(function (t) {
            return c.getAttribute(t);
          })
          .map(function (t) {
            return [t, c.getAttribute(t)];
          })
      : null;
    if (null === (r = h) || void 0 === r ? void 0 : r.length)
      h.forEach(function (t) {
        f.push("[" + t[0] + '="' + t[1] + '"]');
      });
    else if ((c.id && f.push("#" + c.id), (e = c.className) && S(e)))
      for (o = e.split(/\s+/), a = 0; a < o.length; a++) f.push("." + o[a]);
    var v = ["type", "name", "title", "alt"];
    for (a = 0; a < v.length; a++)
      (s = v[a]), (u = c.getAttribute(s)) && f.push("[" + s + '="' + u + '"]');
    return f.join("");
  }
  var I =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array
      ? function (t, n) {
          return (t.__proto__ = n), t;
        }
      : function (t, n) {
          for (var i in n) t.hasOwnProperty(i) || (t[i] = n[i]);
          return t;
        });
  var R = (function (t) {
      function n(n) {
        var i = this.constructor,
          r = t.call(this, n) || this;
        return (
          (r.message = n),
          (r.name = i.prototype.constructor.name),
          I(r, i.prototype),
          r
        );
      }
      return i(n, t), n;
    })(Error),
    A = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
    C = (function () {
      function t(t) {
        "string" == typeof t ? this.t(t) : this.i(t), this.o();
      }
      return (
        (t.prototype.toString = function (t) {
          void 0 === t && (t = !1);
          var n = this,
            i = n.host,
            r = n.path,
            e = n.pass,
            o = n.port,
            s = n.projectId;
          return (
            n.protocol +
            "://" +
            n.publicKey +
            (t && e ? ":" + e : "") +
            "@" +
            i +
            (o ? ":" + o : "") +
            "/" +
            (r ? r + "/" : r) +
            s
          );
        }),
        (t.prototype.t = function (t) {
          var n = A.exec(t);
          if (!n) throw new R("Invalid Dsn");
          var i = d(n.slice(1), 6),
            r = i[0],
            e = i[1],
            o = i[2],
            s = void 0 === o ? "" : o,
            u = i[3],
            a = i[4],
            c = void 0 === a ? "" : a,
            f = "",
            h = i[5],
            v = h.split("/");
          if (
            (v.length > 1 && ((f = v.slice(0, -1).join("/")), (h = v.pop())), h)
          ) {
            var l = h.match(/^\d+/);
            l && (h = l[0]);
          }
          this.i({
            host: u,
            pass: s,
            path: f,
            projectId: h,
            port: c,
            protocol: r,
            publicKey: e,
          });
        }),
        (t.prototype.i = function (t) {
          "user" in t && !("publicKey" in t) && (t.publicKey = t.user),
            (this.user = t.publicKey || ""),
            (this.protocol = t.protocol),
            (this.publicKey = t.publicKey || ""),
            (this.pass = t.pass || ""),
            (this.host = t.host),
            (this.port = t.port || ""),
            (this.path = t.path || ""),
            (this.projectId = t.projectId);
        }),
        (t.prototype.o = function () {
          var t = this;
          if (
            (["protocol", "publicKey", "host", "projectId"].forEach(function (
              n
            ) {
              if (!t[n]) throw new R("Invalid Dsn: " + n + " missing");
            }),
            !this.projectId.match(/^\d+$/))
          )
            throw new R("Invalid Dsn: Invalid projectId " + this.projectId);
          if ("http" !== this.protocol && "https" !== this.protocol)
            throw new R("Invalid Dsn: Invalid protocol " + this.protocol);
          if (this.port && isNaN(parseInt(this.port, 10)))
            throw new R("Invalid Dsn: Invalid port " + this.port);
        }),
        t
      );
    })(),
    M = g(),
    L = "Sentry Logger ";
  function U(t) {
    var n = g();
    if (!("console" in n)) return t();
    var i = n.console,
      r = {};
    ["debug", "info", "warn", "error", "log", "assert"].forEach(function (t) {
      t in n.console &&
        i[t].__sentry_original__ &&
        ((r[t] = i[t]), (i[t] = i[t].__sentry_original__));
    });
    var e = t();
    return (
      Object.keys(r).forEach(function (t) {
        i[t] = r[t];
      }),
      e
    );
  }
  var F = (function () {
    function t() {
      this.s = !1;
    }
    return (
      (t.prototype.disable = function () {
        this.s = !1;
      }),
      (t.prototype.enable = function () {
        this.s = !0;
      }),
      (t.prototype.log = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this.s &&
          U(function () {
            M.console.log(L + "[Log]: " + t.join(" "));
          });
      }),
      (t.prototype.warn = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this.s &&
          U(function () {
            M.console.warn(L + "[Warn]: " + t.join(" "));
          });
      }),
      (t.prototype.error = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        this.s &&
          U(function () {
            M.console.error(L + "[Error]: " + t.join(" "));
          });
      }),
      t
    );
  })();
  M.__SENTRY__ = M.__SENTRY__ || {};
  var q = M.__SENTRY__.logger || (M.__SENTRY__.logger = new F()),
    B = (function () {
      function t() {
        (this.u = "function" == typeof WeakSet),
          (this.h = this.u ? new WeakSet() : []);
      }
      return (
        (t.prototype.memoize = function (t) {
          if (this.u) return !!this.h.has(t) || (this.h.add(t), !1);
          for (var n = 0; n < this.h.length; n++) {
            if (this.h[n] === t) return !0;
          }
          return this.h.push(t), !1;
        }),
        (t.prototype.unmemoize = function (t) {
          if (this.u) this.h.delete(t);
          else
            for (var n = 0; n < this.h.length; n++)
              if (this.h[n] === t) {
                this.h.splice(n, 1);
                break;
              }
        }),
        t
      );
    })(),
    P = "<anonymous>";
  function J(t) {
    try {
      return (t && "function" == typeof t && t.name) || P;
    } catch (t) {
      return P;
    }
  }
  function H(t, n) {
    return (
      void 0 === n && (n = 0),
      "string" != typeof t || 0 === n
        ? t
        : t.length <= n
        ? t
        : t.substr(0, n) + "..."
    );
  }
  function z(t, n) {
    if (!Array.isArray(t)) return "";
    for (var i = [], r = 0; r < t.length; r++) {
      var e = t[r];
      try {
        i.push(String(e));
      } catch (t) {
        i.push("[value cannot be serialized]");
      }
    }
    return i.join(n);
  }
  function X(t, n) {
    return (
      !!S(t) &&
      ((i = n),
      "[object RegExp]" === Object.prototype.toString.call(i)
        ? n.test(t)
        : "string" == typeof n && -1 !== t.indexOf(n))
    );
    var i;
  }
  function G(t, n, i) {
    if (n in t) {
      var r = t[n],
        e = i(r);
      if ("function" == typeof e)
        try {
          (e.prototype = e.prototype || {}),
            Object.defineProperties(e, {
              __sentry_original__: { enumerable: !1, value: r },
            });
        } catch (t) {}
      t[n] = e;
    }
  }
  function W(t) {
    if (b(t)) {
      var n = t,
        i = { message: n.message, name: n.name, stack: n.stack };
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
      return i;
    }
    if (O(t)) {
      var e = t,
        o = {};
      o.type = e.type;
      try {
        o.target = _(e.target)
          ? D(e.target)
          : Object.prototype.toString.call(e.target);
      } catch (t) {
        o.target = "<unknown>";
      }
      try {
        o.currentTarget = _(e.currentTarget)
          ? D(e.currentTarget)
          : Object.prototype.toString.call(e.currentTarget);
      } catch (t) {
        o.currentTarget = "<unknown>";
      }
      for (var s in ("undefined" != typeof CustomEvent &&
        k(t, CustomEvent) &&
        (o.detail = e.detail),
      e))
        Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s]);
      return o;
    }
    return t;
  }
  function $(t) {
    return (function (t) {
      return ~-encodeURI(t).split(/%..|./).length;
    })(JSON.stringify(t));
  }
  function K(t, n, i) {
    void 0 === n && (n = 3), void 0 === i && (i = 102400);
    var r = Y(t, n);
    return $(r) > i ? K(t, n - 1, i) : r;
  }
  function Z(t, n) {
    return "domain" === n && t && "object" == typeof t && t.v
      ? "[Domain]"
      : "domainEmitter" === n
      ? "[DomainEmitter]"
      : "undefined" != typeof global && t === global
      ? "[Global]"
      : "undefined" != typeof window && t === window
      ? "[Window]"
      : "undefined" != typeof document && t === document
      ? "[Document]"
      : E((i = t)) &&
        "nativeEvent" in i &&
        "preventDefault" in i &&
        "stopPropagation" in i
      ? "[SyntheticEvent]"
      : "number" == typeof t && t != t
      ? "[NaN]"
      : void 0 === t
      ? "[undefined]"
      : "function" == typeof t
      ? "[Function: " + J(t) + "]"
      : "symbol" == typeof t
      ? "[" + String(t) + "]"
      : "bigint" == typeof t
      ? "[BigInt: " + String(t) + "]"
      : t;
    var i;
  }
  function V(t, n, i, r) {
    if ((void 0 === i && (i = 1 / 0), void 0 === r && (r = new B()), 0 === i))
      return (function (t) {
        var n = Object.prototype.toString.call(t);
        if ("string" == typeof t) return t;
        if ("[object Object]" === n) return "[Object]";
        if ("[object Array]" === n) return "[Array]";
        var i = Z(t);
        return x(i) ? i : n;
      })(n);
    if (null != n && "function" == typeof n.toJSON) return n.toJSON();
    var e = Z(n, t);
    if (x(e)) return e;
    var o = W(n),
      s = Array.isArray(n) ? [] : {};
    if (r.memoize(n)) return "[Circular ~]";
    for (var u in o)
      Object.prototype.hasOwnProperty.call(o, u) &&
        (s[u] = V(u, o[u], i - 1, r));
    return r.unmemoize(n), s;
  }
  function Y(t, n) {
    try {
      return JSON.parse(
        JSON.stringify(t, function (t, i) {
          return V(t, i, n);
        })
      );
    } catch (t) {
      return "**non-serializable**";
    }
  }
  function Q(t, n) {
    void 0 === n && (n = 40);
    var i = Object.keys(W(t));
    if ((i.sort(), !i.length)) return "[object has no keys]";
    if (i[0].length >= n) return H(i[0], n);
    for (var r = i.length; r > 0; r--) {
      var e = i.slice(0, r).join(", ");
      if (!(e.length > n)) return r === i.length ? e : H(e, n);
    }
    return "";
  }
  function tt(t) {
    var n, i;
    if (E(t)) {
      var r = t,
        e = {};
      try {
        for (var o = v(Object.keys(r)), s = o.next(); !s.done; s = o.next()) {
          var u = s.value;
          void 0 !== r[u] && (e[u] = tt(r[u]));
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      return e;
    }
    return Array.isArray(t) ? t.map(tt) : t;
  }
  function nt() {
    if (!("fetch" in g())) return !1;
    try {
      return new Headers(), new Request(""), new Response(), !0;
    } catch (t) {
      return !1;
    }
  }
  function it(t) {
    return (
      t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    );
  }
  function rt() {
    if (!nt()) return !1;
    try {
      return new Request("_", { referrerPolicy: "origin" }), !0;
    } catch (t) {
      return !1;
    }
  }
  var et,
    ot = g(),
    st = {},
    ut = {};
  function at(t) {
    if (!ut[t])
      switch (((ut[t] = !0), t)) {
        case "console":
          !(function () {
            if (!("console" in ot)) return;
            ["debug", "info", "warn", "error", "log", "assert"].forEach(
              function (t) {
                t in ot.console &&
                  G(ot.console, t, function (n) {
                    return function () {
                      for (var i = [], r = 0; r < arguments.length; r++)
                        i[r] = arguments[r];
                      ft("console", { args: i, level: t }),
                        n && Function.prototype.apply.call(n, ot.console, i);
                    };
                  });
              }
            );
          })();
          break;
        case "dom":
          !(function () {
            if (!("document" in ot)) return;
            var t = ft.bind(null, "dom"),
              n = yt(t, !0);
            ot.document.addEventListener("click", n, !1),
              ot.document.addEventListener("keypress", n, !1),
              ["EventTarget", "Node"].forEach(function (n) {
                var i = ot[n] && ot[n].prototype;
                i &&
                  i.hasOwnProperty &&
                  i.hasOwnProperty("addEventListener") &&
                  (G(i, "addEventListener", function (n) {
                    return function (i, r, e) {
                      if ("click" === i || "keypress" == i)
                        try {
                          var o = (this.__sentry_instrumentation_handlers__ =
                              this.__sentry_instrumentation_handlers__ || {}),
                            s = (o[i] = o[i] || { refCount: 0 });
                          if (!s.handler) {
                            var u = yt(t);
                            (s.handler = u), n.call(this, i, u, e);
                          }
                          s.refCount += 1;
                        } catch (t) {}
                      return n.call(this, i, r, e);
                    };
                  }),
                  G(i, "removeEventListener", function (t) {
                    return function (n, i, r) {
                      if ("click" === n || "keypress" == n)
                        try {
                          var e =
                              this.__sentry_instrumentation_handlers__ || {},
                            o = e[n];
                          o &&
                            ((o.refCount -= 1),
                            o.refCount <= 0 &&
                              (t.call(this, n, o.handler, r),
                              (o.handler = void 0),
                              delete e[n]),
                            0 === Object.keys(e).length &&
                              delete this.__sentry_instrumentation_handlers__);
                        } catch (t) {}
                      return t.call(this, n, i, r);
                    };
                  }));
              });
          })();
          break;
        case "xhr":
          !(function () {
            if (!("XMLHttpRequest" in ot)) return;
            var t = [],
              n = [],
              i = XMLHttpRequest.prototype;
            G(i, "open", function (i) {
              return function () {
                for (var r = [], e = 0; e < arguments.length; e++)
                  r[e] = arguments[e];
                var o = this,
                  s = r[1];
                (o.__sentry_xhr__ = {
                  method: S(r[0]) ? r[0].toUpperCase() : r[0],
                  url: r[1],
                }),
                  S(s) &&
                    "POST" === o.__sentry_xhr__.method &&
                    s.match(/sentry_key/) &&
                    (o.__sentry_own_request__ = !0);
                var u = function () {
                  if (4 === o.readyState) {
                    try {
                      o.__sentry_xhr__ &&
                        (o.__sentry_xhr__.status_code = o.status);
                    } catch (t) {}
                    try {
                      var i = t.indexOf(o);
                      if (-1 !== i) {
                        t.splice(i);
                        var e = n.splice(i)[0];
                        o.__sentry_xhr__ &&
                          void 0 !== e[0] &&
                          (o.__sentry_xhr__.body = e[0]);
                      }
                    } catch (t) {}
                    ft("xhr", {
                      args: r,
                      endTimestamp: Date.now(),
                      startTimestamp: Date.now(),
                      xhr: o,
                    });
                  }
                };
                return (
                  "onreadystatechange" in o &&
                  "function" == typeof o.onreadystatechange
                    ? G(o, "onreadystatechange", function (t) {
                        return function () {
                          for (var n = [], i = 0; i < arguments.length; i++)
                            n[i] = arguments[i];
                          return u(), t.apply(o, n);
                        };
                      })
                    : o.addEventListener("readystatechange", u),
                  i.apply(o, r)
                );
              };
            }),
              G(i, "send", function (i) {
                return function () {
                  for (var r = [], e = 0; e < arguments.length; e++)
                    r[e] = arguments[e];
                  return (
                    t.push(this),
                    n.push(r),
                    ft("xhr", {
                      args: r,
                      startTimestamp: Date.now(),
                      xhr: this,
                    }),
                    i.apply(this, r)
                  );
                };
              });
          })();
          break;
        case "fetch":
          !(function () {
            if (
              !(function () {
                if (!nt()) return !1;
                var t = g();
                if (it(t.fetch)) return !0;
                var n = !1,
                  i = t.document;
                if (i && "function" == typeof i.createElement)
                  try {
                    var r = i.createElement("iframe");
                    (r.hidden = !0),
                      i.head.appendChild(r),
                      r.contentWindow &&
                        r.contentWindow.fetch &&
                        (n = it(r.contentWindow.fetch)),
                      i.head.removeChild(r);
                  } catch (t) {
                    q.warn(
                      "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                      t
                    );
                  }
                return n;
              })()
            )
              return;
            G(ot, "fetch", function (t) {
              return function () {
                for (var n = [], i = 0; i < arguments.length; i++)
                  n[i] = arguments[i];
                var r = {
                  args: n,
                  fetchData: { method: ht(n), url: vt(n) },
                  startTimestamp: Date.now(),
                };
                return (
                  ft("fetch", f({}, r)),
                  t.apply(ot, n).then(
                    function (t) {
                      return (
                        ft(
                          "fetch",
                          f(f({}, r), { endTimestamp: Date.now(), response: t })
                        ),
                        t
                      );
                    },
                    function (t) {
                      throw (
                        (ft(
                          "fetch",
                          f(f({}, r), { endTimestamp: Date.now(), error: t })
                        ),
                        t)
                      );
                    }
                  )
                );
              };
            });
          })();
          break;
        case "history":
          !(function () {
            if (
              ((t = g()),
              (n = t.chrome),
              (i = n && n.app && n.app.runtime),
              (r =
                "history" in t &&
                !!t.history.pushState &&
                !!t.history.replaceState),
              i || !r)
            )
              return;
            var t, n, i, r;
            var e = ot.onpopstate;
            function o(t) {
              return function () {
                for (var n = [], i = 0; i < arguments.length; i++)
                  n[i] = arguments[i];
                var r = n.length > 2 ? n[2] : void 0;
                if (r) {
                  var e = et,
                    o = String(r);
                  (et = o), ft("history", { from: e, to: o });
                }
                return t.apply(this, n);
              };
            }
            (ot.onpopstate = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var i = ot.location.href,
                r = et;
              if (((et = i), ft("history", { from: r, to: i }), e))
                try {
                  return e.apply(this, t);
                } catch (t) {}
            }),
              G(ot.history, "pushState", o),
              G(ot.history, "replaceState", o);
          })();
          break;
        case "error":
          (mt = ot.onerror),
            (ot.onerror = function (t, n, i, r, e) {
              return (
                ft("error", { column: r, error: e, line: i, msg: t, url: n }),
                !!mt && mt.apply(this, arguments)
              );
            });
          break;
        case "unhandledrejection":
          (gt = ot.onunhandledrejection),
            (ot.onunhandledrejection = function (t) {
              return (
                ft("unhandledrejection", t), !gt || gt.apply(this, arguments)
              );
            });
          break;
        default:
          q.warn("unknown instrumentation type:", t);
      }
  }
  function ct(t) {
    t &&
      "string" == typeof t.type &&
      "function" == typeof t.callback &&
      ((st[t.type] = st[t.type] || []),
      st[t.type].push(t.callback),
      at(t.type));
  }
  function ft(t, n) {
    var i, r;
    if (t && st[t])
      try {
        for (var e = v(st[t] || []), o = e.next(); !o.done; o = e.next()) {
          var s = o.value;
          try {
            s(n);
          } catch (n) {
            q.error(
              "Error while triggering instrumentation handler.\nType: " +
                t +
                "\nName: " +
                J(s) +
                "\nError: " +
                n
            );
          }
        }
      } catch (t) {
        i = { error: t };
      } finally {
        try {
          o && !o.done && (r = e.return) && r.call(e);
        } finally {
          if (i) throw i.error;
        }
      }
  }
  function ht(t) {
    return (
      void 0 === t && (t = []),
      "Request" in ot && k(t[0], Request) && t[0].method
        ? String(t[0].method).toUpperCase()
        : t[1] && t[1].method
        ? String(t[1].method).toUpperCase()
        : "GET"
    );
  }
  function vt(t) {
    return (
      void 0 === t && (t = []),
      "string" == typeof t[0]
        ? t[0]
        : "Request" in ot && k(t[0], Request)
        ? t[0].url
        : String(t[0])
    );
  }
  var dt,
    lt,
    pt = 1e3;
  function yt(t, n) {
    return (
      void 0 === n && (n = !1),
      function (i) {
        if (
          i &&
          lt !== i &&
          !(function (t) {
            if ("keypress" !== t.type) return !1;
            try {
              var n = t.target;
              if (!n || !n.tagName) return !0;
              if (
                "INPUT" === n.tagName ||
                "TEXTAREA" === n.tagName ||
                n.isContentEditable
              )
                return !1;
            } catch (t) {}
            return !0;
          })(i)
        ) {
          var r = "keypress" === i.type ? "input" : i.type;
          void 0 === dt
            ? (t({ event: i, name: r, global: n }), (lt = i))
            : (function (t, n) {
                if (!t) return !0;
                if (t.type !== n.type) return !0;
                try {
                  if (t.target !== n.target) return !0;
                } catch (t) {}
                return !1;
              })(lt, i) && (t({ event: i, name: r, global: n }), (lt = i)),
            clearTimeout(dt),
            (dt = ot.setTimeout(function () {
              dt = void 0;
            }, pt));
        }
      }
    );
  }
  var mt = null;
  var gt = null;
  function bt() {
    var t = g(),
      n = t.crypto || t.msCrypto;
    if (void 0 !== n && n.getRandomValues) {
      var i = new Uint16Array(8);
      n.getRandomValues(i),
        (i[3] = (4095 & i[3]) | 16384),
        (i[4] = (16383 & i[4]) | 32768);
      var r = function (t) {
        for (var n = t.toString(16); n.length < 4; ) n = "0" + n;
        return n;
      };
      return (
        r(i[0]) +
        r(i[1]) +
        r(i[2]) +
        r(i[3]) +
        r(i[4]) +
        r(i[5]) +
        r(i[6]) +
        r(i[7])
      );
    }
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var n = (16 * Math.random()) | 0;
      return ("x" === t ? n : (3 & n) | 8).toString(16);
    });
  }
  function wt(t) {
    if (!t) return {};
    var n = t.match(
      /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
    );
    if (!n) return {};
    var i = n[6] || "",
      r = n[8] || "";
    return { host: n[4], path: n[5], protocol: n[2], relative: n[5] + i + r };
  }
  function Tt(t) {
    if (t.message) return t.message;
    if (t.exception && t.exception.values && t.exception.values[0]) {
      var n = t.exception.values[0];
      return n.type && n.value
        ? n.type + ": " + n.value
        : n.type || n.value || t.event_id || "<unknown>";
    }
    return t.event_id || "<unknown>";
  }
  function St(t, n, i) {
    (t.exception = t.exception || {}),
      (t.exception.values = t.exception.values || []),
      (t.exception.values[0] = t.exception.values[0] || {}),
      (t.exception.values[0].value = t.exception.values[0].value || n || ""),
      (t.exception.values[0].type = t.exception.values[0].type || i || "Error");
  }
  function xt(t, n) {
    void 0 === n && (n = {});
    try {
      (t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}),
        Object.keys(n).forEach(function (i) {
          t.exception.values[0].mechanism[i] = n[i];
        });
    } catch (t) {}
  }
  var Et,
    Ot = 6e4;
  !(function (t) {
    (t.PENDING = "PENDING"),
      (t.RESOLVED = "RESOLVED"),
      (t.REJECTED = "REJECTED");
  })(Et || (Et = {}));
  var _t = (function () {
      function t(t) {
        var n = this;
        (this.l = Et.PENDING),
          (this.p = []),
          (this.m = function (t) {
            n.g(Et.RESOLVED, t);
          }),
          (this.T = function (t) {
            n.g(Et.REJECTED, t);
          }),
          (this.g = function (t, i) {
            n.l === Et.PENDING &&
              (j(i) ? i.then(n.m, n.T) : ((n.l = t), (n.S = i), n.O()));
          }),
          (this._ = function (t) {
            (n.p = n.p.concat(t)), n.O();
          }),
          (this.O = function () {
            if (n.l !== Et.PENDING) {
              var t = n.p.slice();
              (n.p = []),
                t.forEach(function (t) {
                  t.done ||
                    (n.l === Et.RESOLVED && t.onfulfilled && t.onfulfilled(n.S),
                    n.l === Et.REJECTED && t.onrejected && t.onrejected(n.S),
                    (t.done = !0));
                });
            }
          });
        try {
          t(this.m, this.T);
        } catch (t) {
          this.T(t);
        }
      }
      return (
        (t.resolve = function (n) {
          return new t(function (t) {
            t(n);
          });
        }),
        (t.reject = function (n) {
          return new t(function (t, i) {
            i(n);
          });
        }),
        (t.all = function (n) {
          return new t(function (i, r) {
            if (Array.isArray(n))
              if (0 !== n.length) {
                var e = n.length,
                  o = [];
                n.forEach(function (n, s) {
                  t.resolve(n)
                    .then(function (t) {
                      (o[s] = t), 0 === (e -= 1) && i(o);
                    })
                    .then(null, r);
                });
              } else i([]);
            else r(new TypeError("Promise.all requires an array as input."));
          });
        }),
        (t.prototype.then = function (n, i) {
          var r = this;
          return new t(function (t, e) {
            r._({
              done: !1,
              onfulfilled: function (i) {
                if (n)
                  try {
                    return void t(n(i));
                  } catch (t) {
                    return void e(t);
                  }
                else t(i);
              },
              onrejected: function (n) {
                if (i)
                  try {
                    return void t(i(n));
                  } catch (t) {
                    return void e(t);
                  }
                else e(n);
              },
            });
          });
        }),
        (t.prototype.catch = function (t) {
          return this.then(function (t) {
            return t;
          }, t);
        }),
        (t.prototype.finally = function (n) {
          var i = this;
          return new t(function (t, r) {
            var e, o;
            return i
              .then(
                function (t) {
                  (o = !1), (e = t), n && n();
                },
                function (t) {
                  (o = !0), (e = t), n && n();
                }
              )
              .then(function () {
                o ? r(e) : t(e);
              });
          });
        }),
        (t.prototype.toString = function () {
          return "[object SyncPromise]";
        }),
        t
      );
    })(),
    jt = (function () {
      function t(t) {
        (this.j = t), (this.k = []);
      }
      return (
        (t.prototype.isReady = function () {
          return void 0 === this.j || this.length() < this.j;
        }),
        (t.prototype.add = function (t) {
          var n = this;
          if (!this.isReady())
            return _t.reject(
              new R("Not adding Promise due to buffer limit reached.")
            );
          var i = t();
          return (
            -1 === this.k.indexOf(i) && this.k.push(i),
            i
              .then(function () {
                return n.remove(i);
              })
              .then(null, function () {
                return n.remove(i).then(null, function () {});
              }),
            i
          );
        }),
        (t.prototype.remove = function (t) {
          return this.k.splice(this.k.indexOf(t), 1)[0];
        }),
        (t.prototype.length = function () {
          return this.k.length;
        }),
        (t.prototype.drain = function (t) {
          var n = this;
          return new _t(function (i) {
            var r = setTimeout(function () {
              t && t > 0 && i(!1);
            }, t);
            _t.all(n.k)
              .then(function () {
                clearTimeout(r), i(!0);
              })
              .then(null, function () {
                i(!0);
              });
          });
        }),
        t
      );
    })(),
    kt = {
      nowSeconds: function () {
        return Date.now() / 1e3;
      },
    };
  var Dt = p()
      ? (function () {
          try {
            return y(module, "perf_hooks").performance;
          } catch (t) {
            return;
          }
        })()
      : (function () {
          var t = g().performance;
          if (t && t.now)
            return {
              now: function () {
                return t.now();
              },
              timeOrigin: Date.now() - t.now(),
            };
        })(),
    Nt =
      void 0 === Dt
        ? kt
        : {
            nowSeconds: function () {
              return (Dt.timeOrigin + Dt.now()) / 1e3;
            },
          },
    It = kt.nowSeconds.bind(kt),
    Rt = Nt.nowSeconds.bind(Nt),
    At = Rt,
    Ct = (function () {
      var t = g().performance;
      if (t && t.now) {
        var n = t.now(),
          i = Date.now(),
          r = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : 36e5,
          e = r < 36e5,
          o = t.timing && t.timing.navigationStart,
          s = "number" == typeof o ? Math.abs(o + n - i) : 36e5;
        return e || s < 36e5 ? (r <= s ? t.timeOrigin : o) : i;
      }
    })(),
    Mt = (function () {
      function t() {
        (this.D = !1),
          (this.N = []),
          (this.I = []),
          (this.R = []),
          (this.A = {}),
          (this.C = {}),
          (this.M = {}),
          (this.L = {});
      }
      return (
        (t.clone = function (n) {
          var i = new t();
          return (
            n &&
              ((i.R = l(n.R)),
              (i.C = f({}, n.C)),
              (i.M = f({}, n.M)),
              (i.L = f({}, n.L)),
              (i.A = n.A),
              (i.U = n.U),
              (i.F = n.F),
              (i.q = n.q),
              (i.B = n.B),
              (i.P = n.P),
              (i.I = l(n.I)),
              (i.J = n.J)),
            i
          );
        }),
        (t.prototype.addScopeListener = function (t) {
          this.N.push(t);
        }),
        (t.prototype.addEventProcessor = function (t) {
          return this.I.push(t), this;
        }),
        (t.prototype.setUser = function (t) {
          return (
            (this.A = t || {}),
            this.q && this.q.update({ user: t }),
            this.H(),
            this
          );
        }),
        (t.prototype.getUser = function () {
          return this.A;
        }),
        (t.prototype.getRequestSession = function () {
          return this.J;
        }),
        (t.prototype.setRequestSession = function (t) {
          return (this.J = t), this;
        }),
        (t.prototype.setTags = function (t) {
          return (this.C = f(f({}, this.C), t)), this.H(), this;
        }),
        (t.prototype.setTag = function (t, n) {
          var i;
          return (
            (this.C = f(f({}, this.C), (((i = {})[t] = n), i))), this.H(), this
          );
        }),
        (t.prototype.setExtras = function (t) {
          return (this.M = f(f({}, this.M), t)), this.H(), this;
        }),
        (t.prototype.setExtra = function (t, n) {
          var i;
          return (
            (this.M = f(f({}, this.M), (((i = {})[t] = n), i))), this.H(), this
          );
        }),
        (t.prototype.setFingerprint = function (t) {
          return (this.P = t), this.H(), this;
        }),
        (t.prototype.setLevel = function (t) {
          return (this.U = t), this.H(), this;
        }),
        (t.prototype.setTransactionName = function (t) {
          return (this.B = t), this.H(), this;
        }),
        (t.prototype.setTransaction = function (t) {
          return this.setTransactionName(t);
        }),
        (t.prototype.setContext = function (t, n) {
          var i;
          return (
            null === n
              ? delete this.L[t]
              : (this.L = f(f({}, this.L), (((i = {})[t] = n), i))),
            this.H(),
            this
          );
        }),
        (t.prototype.setSpan = function (t) {
          return (this.F = t), this.H(), this;
        }),
        (t.prototype.getSpan = function () {
          return this.F;
        }),
        (t.prototype.getTransaction = function () {
          var t,
            n,
            i,
            r,
            e = this.getSpan();
          return (null === (t = e) || void 0 === t ? void 0 : t.transaction)
            ? null === (n = e) || void 0 === n
              ? void 0
              : n.transaction
            : (
                null ===
                  (r =
                    null === (i = e) || void 0 === i
                      ? void 0
                      : i.spanRecorder) || void 0 === r
                  ? void 0
                  : r.spans[0]
              )
            ? e.spanRecorder.spans[0]
            : void 0;
        }),
        (t.prototype.setSession = function (t) {
          return t ? (this.q = t) : delete this.q, this.H(), this;
        }),
        (t.prototype.getSession = function () {
          return this.q;
        }),
        (t.prototype.update = function (n) {
          if (!n) return this;
          if ("function" == typeof n) {
            var i = n(this);
            return i instanceof t ? i : this;
          }
          return (
            n instanceof t
              ? ((this.C = f(f({}, this.C), n.C)),
                (this.M = f(f({}, this.M), n.M)),
                (this.L = f(f({}, this.L), n.L)),
                n.A && Object.keys(n.A).length && (this.A = n.A),
                n.U && (this.U = n.U),
                n.P && (this.P = n.P),
                n.J && (this.J = n.J))
              : E(n) &&
                ((n = n),
                (this.C = f(f({}, this.C), n.tags)),
                (this.M = f(f({}, this.M), n.extra)),
                (this.L = f(f({}, this.L), n.contexts)),
                n.user && (this.A = n.user),
                n.level && (this.U = n.level),
                n.fingerprint && (this.P = n.fingerprint),
                n.requestSession && (this.J = n.requestSession)),
            this
          );
        }),
        (t.prototype.clear = function () {
          return (
            (this.R = []),
            (this.C = {}),
            (this.M = {}),
            (this.A = {}),
            (this.L = {}),
            (this.U = void 0),
            (this.B = void 0),
            (this.P = void 0),
            (this.J = void 0),
            (this.F = void 0),
            (this.q = void 0),
            this.H(),
            this
          );
        }),
        (t.prototype.addBreadcrumb = function (t, n) {
          var i = "number" == typeof n ? Math.min(n, 100) : 100;
          if (i <= 0) return this;
          var r = f({ timestamp: It() }, t);
          return (this.R = l(this.R, [r]).slice(-i)), this.H(), this;
        }),
        (t.prototype.clearBreadcrumbs = function () {
          return (this.R = []), this.H(), this;
        }),
        (t.prototype.applyToEvent = function (t, n) {
          var i;
          if (
            (this.M &&
              Object.keys(this.M).length &&
              (t.extra = f(f({}, this.M), t.extra)),
            this.C &&
              Object.keys(this.C).length &&
              (t.tags = f(f({}, this.C), t.tags)),
            this.A &&
              Object.keys(this.A).length &&
              (t.user = f(f({}, this.A), t.user)),
            this.L &&
              Object.keys(this.L).length &&
              (t.contexts = f(f({}, this.L), t.contexts)),
            this.U && (t.level = this.U),
            this.B && (t.transaction = this.B),
            this.F)
          ) {
            t.contexts = f({ trace: this.F.getTraceContext() }, t.contexts);
            var r =
              null === (i = this.F.transaction) || void 0 === i
                ? void 0
                : i.name;
            r && (t.tags = f({ transaction: r }, t.tags));
          }
          return (
            this.X(t),
            (t.breadcrumbs = l(t.breadcrumbs || [], this.R)),
            (t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
            this.G(l(Lt(), this.I), t, n)
          );
        }),
        (t.prototype.G = function (t, n, i, r) {
          var e = this;
          return (
            void 0 === r && (r = 0),
            new _t(function (o, s) {
              var u = t[r];
              if (null === n || "function" != typeof u) o(n);
              else {
                var a = u(f({}, n), i);
                j(a)
                  ? a
                      .then(function (n) {
                        return e.G(t, n, i, r + 1).then(o);
                      })
                      .then(null, s)
                  : e
                      .G(t, a, i, r + 1)
                      .then(o)
                      .then(null, s);
              }
            })
          );
        }),
        (t.prototype.H = function () {
          var t = this;
          this.D ||
            ((this.D = !0),
            this.N.forEach(function (n) {
              n(t);
            }),
            (this.D = !1));
        }),
        (t.prototype.X = function (t) {
          (t.fingerprint = t.fingerprint
            ? Array.isArray(t.fingerprint)
              ? t.fingerprint
              : [t.fingerprint]
            : []),
            this.P && (t.fingerprint = t.fingerprint.concat(this.P)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
        }),
        t
      );
    })();
  function Lt() {
    var t = g();
    return (
      (t.__SENTRY__ = t.__SENTRY__ || {}),
      (t.__SENTRY__.globalEventProcessors =
        t.__SENTRY__.globalEventProcessors || []),
      t.__SENTRY__.globalEventProcessors
    );
  }
  function Ut(t) {
    Lt().push(t);
  }
  var Ft = (function () {
      function t(t) {
        (this.errors = 0),
          (this.sid = bt()),
          (this.duration = 0),
          (this.status = e.Ok),
          (this.init = !0),
          (this.ignoreDuration = !1);
        var n = Rt();
        (this.timestamp = n), (this.started = n), t && this.update(t);
      }
      return (
        (t.prototype.update = function (t) {
          if (
            (void 0 === t && (t = {}),
            t.user &&
              (!this.ipAddress &&
                t.user.ip_address &&
                (this.ipAddress = t.user.ip_address),
              this.did ||
                t.did ||
                (this.did = t.user.id || t.user.email || t.user.username)),
            (this.timestamp = t.timestamp || Rt()),
            t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
            t.sid && (this.sid = 32 === t.sid.length ? t.sid : bt()),
            void 0 !== t.init && (this.init = t.init),
            !this.did && t.did && (this.did = "" + t.did),
            "number" == typeof t.started && (this.started = t.started),
            this.ignoreDuration)
          )
            this.duration = void 0;
          else if ("number" == typeof t.duration) this.duration = t.duration;
          else {
            var n = this.timestamp - this.started;
            this.duration = n >= 0 ? n : 0;
          }
          t.release && (this.release = t.release),
            t.environment && (this.environment = t.environment),
            !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress),
            !this.userAgent && t.userAgent && (this.userAgent = t.userAgent),
            "number" == typeof t.errors && (this.errors = t.errors),
            t.status && (this.status = t.status);
        }),
        (t.prototype.close = function (t) {
          t
            ? this.update({ status: t })
            : this.status === e.Ok
            ? this.update({ status: e.Exited })
            : this.update();
        }),
        (t.prototype.toJSON = function () {
          return tt({
            sid: "" + this.sid,
            init: this.init,
            started: new Date(1e3 * this.started).toISOString(),
            timestamp: new Date(1e3 * this.timestamp).toISOString(),
            status: this.status,
            errors: this.errors,
            did:
              "number" == typeof this.did || "string" == typeof this.did
                ? "" + this.did
                : void 0,
            duration: this.duration,
            attrs: tt({
              release: this.release,
              environment: this.environment,
              ip_address: this.ipAddress,
              user_agent: this.userAgent,
            }),
          });
        }),
        t
      );
    })(),
    qt = 4,
    Bt = (function () {
      function t(t, n, i) {
        void 0 === n && (n = new Mt()),
          void 0 === i && (i = qt),
          (this.W = i),
          (this.$ = [{}]),
          (this.getStackTop().scope = n),
          t && this.bindClient(t);
      }
      return (
        (t.prototype.isOlderThan = function (t) {
          return this.W < t;
        }),
        (t.prototype.bindClient = function (t) {
          (this.getStackTop().client = t),
            t && t.setupIntegrations && t.setupIntegrations();
        }),
        (t.prototype.pushScope = function () {
          var t = Mt.clone(this.getScope());
          return (
            this.getStack().push({ client: this.getClient(), scope: t }), t
          );
        }),
        (t.prototype.popScope = function () {
          return !(this.getStack().length <= 1) && !!this.getStack().pop();
        }),
        (t.prototype.withScope = function (t) {
          var n = this.pushScope();
          try {
            t(n);
          } finally {
            this.popScope();
          }
        }),
        (t.prototype.getClient = function () {
          return this.getStackTop().client;
        }),
        (t.prototype.getScope = function () {
          return this.getStackTop().scope;
        }),
        (t.prototype.getStack = function () {
          return this.$;
        }),
        (t.prototype.getStackTop = function () {
          return this.$[this.$.length - 1];
        }),
        (t.prototype.captureException = function (t, n) {
          var i = (this.K = bt()),
            r = n;
          if (!n) {
            var e = void 0;
            try {
              throw new Error("Sentry syntheticException");
            } catch (t) {
              e = t;
            }
            r = { originalException: t, syntheticException: e };
          }
          return this.Z("captureException", t, f(f({}, r), { event_id: i })), i;
        }),
        (t.prototype.captureMessage = function (t, n, i) {
          var r = (this.K = bt()),
            e = i;
          if (!i) {
            var o = void 0;
            try {
              throw new Error(t);
            } catch (t) {
              o = t;
            }
            e = { originalException: t, syntheticException: o };
          }
          return (
            this.Z("captureMessage", t, n, f(f({}, e), { event_id: r })), r
          );
        }),
        (t.prototype.captureEvent = function (t, n) {
          var i = bt();
          return (
            "transaction" !== t.type && (this.K = i),
            this.Z("captureEvent", t, f(f({}, n), { event_id: i })),
            i
          );
        }),
        (t.prototype.lastEventId = function () {
          return this.K;
        }),
        (t.prototype.addBreadcrumb = function (t, n) {
          var i = this.getStackTop(),
            r = i.scope,
            e = i.client;
          if (r && e) {
            var o = (e.getOptions && e.getOptions()) || {},
              s = o.beforeBreadcrumb,
              u = void 0 === s ? null : s,
              a = o.maxBreadcrumbs,
              c = void 0 === a ? 100 : a;
            if (!(c <= 0)) {
              var h = It(),
                v = f({ timestamp: h }, t),
                d = u
                  ? U(function () {
                      return u(v, n);
                    })
                  : v;
              null !== d && r.addBreadcrumb(d, c);
            }
          }
        }),
        (t.prototype.setUser = function (t) {
          var n = this.getScope();
          n && n.setUser(t);
        }),
        (t.prototype.setTags = function (t) {
          var n = this.getScope();
          n && n.setTags(t);
        }),
        (t.prototype.setExtras = function (t) {
          var n = this.getScope();
          n && n.setExtras(t);
        }),
        (t.prototype.setTag = function (t, n) {
          var i = this.getScope();
          i && i.setTag(t, n);
        }),
        (t.prototype.setExtra = function (t, n) {
          var i = this.getScope();
          i && i.setExtra(t, n);
        }),
        (t.prototype.setContext = function (t, n) {
          var i = this.getScope();
          i && i.setContext(t, n);
        }),
        (t.prototype.configureScope = function (t) {
          var n = this.getStackTop(),
            i = n.scope,
            r = n.client;
          i && r && t(i);
        }),
        (t.prototype.run = function (t) {
          var n = Jt(this);
          try {
            t(this);
          } finally {
            Jt(n);
          }
        }),
        (t.prototype.getIntegration = function (t) {
          var n = this.getClient();
          if (!n) return null;
          try {
            return n.getIntegration(t);
          } catch (n) {
            return (
              q.warn(
                "Cannot retrieve integration " + t.id + " from the current Hub"
              ),
              null
            );
          }
        }),
        (t.prototype.startSpan = function (t) {
          return this.V("startSpan", t);
        }),
        (t.prototype.startTransaction = function (t, n) {
          return this.V("startTransaction", t, n);
        }),
        (t.prototype.traceHeaders = function () {
          return this.V("traceHeaders");
        }),
        (t.prototype.captureSession = function (t) {
          if ((void 0 === t && (t = !1), t)) return this.endSession();
          this.Y();
        }),
        (t.prototype.endSession = function () {
          var t, n, i, r, e;
          null ===
            (i =
              null ===
                (n =
                  null === (t = this.getStackTop()) || void 0 === t
                    ? void 0
                    : t.scope) || void 0 === n
                ? void 0
                : n.getSession()) ||
            void 0 === i ||
            i.close(),
            this.Y(),
            null ===
              (e =
                null === (r = this.getStackTop()) || void 0 === r
                  ? void 0
                  : r.scope) ||
              void 0 === e ||
              e.setSession();
        }),
        (t.prototype.startSession = function (t) {
          var n = this.getStackTop(),
            i = n.scope,
            r = n.client,
            o = (r && r.getOptions()) || {},
            s = o.release,
            u = o.environment,
            a = (g().navigator || {}).userAgent,
            c = new Ft(
              f(
                f(
                  f({ release: s, environment: u }, i && { user: i.getUser() }),
                  a && { userAgent: a }
                ),
                t
              )
            );
          if (i) {
            var h = i.getSession && i.getSession();
            h && h.status === e.Ok && h.update({ status: e.Exited }),
              this.endSession(),
              i.setSession(c);
          }
          return c;
        }),
        (t.prototype.Y = function () {
          var t = this.getStackTop(),
            n = t.scope,
            i = t.client;
          if (n) {
            var r = n.getSession && n.getSession();
            r && i && i.captureSession && i.captureSession(r);
          }
        }),
        (t.prototype.Z = function (t) {
          for (var n, i = [], r = 1; r < arguments.length; r++)
            i[r - 1] = arguments[r];
          var e = this.getStackTop(),
            o = e.scope,
            s = e.client;
          s && s[t] && (n = s)[t].apply(n, l(i, [o]));
        }),
        (t.prototype.V = function (t) {
          for (var n = [], i = 1; i < arguments.length; i++)
            n[i - 1] = arguments[i];
          var r = Pt().__SENTRY__;
          if (r && r.extensions && "function" == typeof r.extensions[t])
            return r.extensions[t].apply(this, n);
          q.warn(
            "Extension method " + t + " couldn't be found, doing nothing."
          );
        }),
        t
      );
    })();
  function Pt() {
    var t = g();
    return (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t;
  }
  function Jt(t) {
    var n = Pt(),
      i = Xt(n);
    return Gt(n, t), i;
  }
  function Ht() {
    var t = Pt();
    return (
      (zt(t) && !Xt(t).isOlderThan(qt)) || Gt(t, new Bt()),
      p()
        ? (function (t) {
            var n, i, r;
            try {
              var e =
                null ===
                  (r =
                    null ===
                      (i =
                        null === (n = Pt().__SENTRY__) || void 0 === n
                          ? void 0
                          : n.extensions) || void 0 === i
                      ? void 0
                      : i.domain) || void 0 === r
                  ? void 0
                  : r.active;
              if (!e) return Xt(t);
              if (!zt(e) || Xt(e).isOlderThan(qt)) {
                var o = Xt(t).getStackTop();
                Gt(e, new Bt(o.client, Mt.clone(o.scope)));
              }
              return Xt(e);
            } catch (n) {
              return Xt(t);
            }
          })(t)
        : Xt(t)
    );
  }
  function zt(t) {
    return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
  }
  function Xt(t) {
    return t && t.__SENTRY__ && t.__SENTRY__.hub
      ? t.__SENTRY__.hub
      : ((t.__SENTRY__ = t.__SENTRY__ || {}),
        (t.__SENTRY__.hub = new Bt()),
        t.__SENTRY__.hub);
  }
  function Gt(t, n) {
    return (
      !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = n), !0)
    );
  }
  function Wt(t) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    var r = Ht();
    if (r && r[t]) return r[t].apply(r, l(n));
    throw new Error(
      "No hub defined or " +
        t +
        " was not found on the hub, please open a bug report."
    );
  }
  function captureException(t, n) {
    var i;
    try {
      throw new Error("Sentry syntheticException");
    } catch (t) {
      i = t;
    }
    return Wt("captureException", t, {
      captureContext: n,
      originalException: t,
      syntheticException: i,
    });
  }
  function $t(t) {
    Wt("withScope", t);
  }
  var Kt = "7",
    Zt = (function () {
      function t(t, n, i, r) {
        void 0 === n && (n = {}),
          (this.dsn = t),
          (this.tt = new C(t)),
          (this.metadata = n),
          (this.nt = i),
          (this.it = r);
      }
      return (
        (t.prototype.getDsn = function () {
          return this.tt;
        }),
        (t.prototype.forceEnvelope = function () {
          return !!this.nt;
        }),
        (t.prototype.getBaseApiEndpoint = function () {
          var t = this.getDsn(),
            n = t.protocol ? t.protocol + ":" : "",
            i = t.port ? ":" + t.port : "";
          return n + "//" + t.host + i + (t.path ? "/" + t.path : "") + "/api/";
        }),
        (t.prototype.getStoreEndpoint = function () {
          return this.rt("store");
        }),
        (t.prototype.isRpurl = function () {
          return !(!this.it || "" === this.it);
        }),
        (t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
          return this.getStoreEndpoint() + "?" + this.et();
        }),
        (t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
          return this.forceEnvelope() ? this.nt : this.ot() + "?" + this.et();
        }),
        (t.prototype.getStoreEndpointPath = function () {
          var t = this.getDsn();
          return (
            (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
          );
        }),
        (t.prototype.getRequestHeaders = function (t, n) {
          var i = this.getDsn(),
            r = ["Sentry sentry_version=" + Kt];
          return (
            r.push("sentry_client=" + t + "/" + n),
            r.push("sentry_key=" + i.publicKey),
            i.pass && r.push("sentry_secret=" + i.pass),
            {
              "Content-Type": "application/json",
              "X-Sentry-Auth": r.join(", "),
            }
          );
        }),
        (t.prototype.getReportDialogEndpoint = function (t) {
          void 0 === t && (t = {});
          var n = this.getDsn(),
            i = this.getBaseApiEndpoint() + "embed/error-page/";
          this.it &&
            "" !== this.it &&
            (i =
              this.it +
              (n.path ? "/" + n.path : "") +
              "/api/embed/error-page/");
          var r = [];
          for (var e in (r.push("dsn=" + n.toString()), t))
            if ("dsn" !== e)
              if ("user" === e) {
                if (!t.user) continue;
                t.user.name &&
                  r.push("name=" + encodeURIComponent(t.user.name)),
                  t.user.email &&
                    r.push("email=" + encodeURIComponent(t.user.email));
              } else
                r.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
          return r.length ? i + "?" + r.join("&") : i;
        }),
        (t.prototype.ot = function () {
          return this.rt("envelope");
        }),
        (t.prototype.rt = function (t) {
          return this.nt
            ? this.nt
            : this.it && "" !== this.it
            ? "" + this.it
            : "" +
              this.getBaseApiEndpoint() +
              this.getDsn().projectId +
              "/" +
              t +
              "/";
        }),
        (t.prototype.et = function () {
          var t,
            n = { sentry_key: this.getDsn().publicKey, sentry_version: Kt };
          return (
            (t = n),
            Object.keys(t)
              .map(function (n) {
                return encodeURIComponent(n) + "=" + encodeURIComponent(t[n]);
              })
              .join("&")
          );
        }),
        t
      );
    })(),
    Vt = [];
  function Yt(t) {
    return t.reduce(function (t, n) {
      return (
        t.every(function (t) {
          return n.name !== t.name;
        }) && t.push(n),
        t
      );
    }, []);
  }
  function Qt(t) {
    var n = {};
    return (
      (function (t) {
        var n = (t.defaultIntegrations && l(t.defaultIntegrations)) || [],
          i = t.integrations,
          r = l(Yt(n));
        Array.isArray(i)
          ? (r = l(
              r.filter(function (t) {
                return i.every(function (n) {
                  return n.name !== t.name;
                });
              }),
              Yt(i)
            ))
          : "function" == typeof i &&
            ((r = i(r)), (r = Array.isArray(r) ? r : [r]));
        var e = r.map(function (t) {
          return t.name;
        });
        return (
          -1 !== e.indexOf("Debug") &&
            r.push.apply(r, l(r.splice(e.indexOf("Debug"), 1))),
          r
        );
      })(t).forEach(function (t) {
        (n[t.name] = t),
          (function (t) {
            -1 === Vt.indexOf(t.name) &&
              (t.setupOnce(Ut, Ht),
              Vt.push(t.name),
              q.log("Integration installed: " + t.name));
          })(t);
      }),
      Object.defineProperty(n, "initialized", { value: !0 }),
      n
    );
  }
  var tn = (function () {
      function t(t, n) {
        (this.st = {}),
          (this.ut = 0),
          (this.at = new t(n)),
          (this.ct = n),
          n.dsn && (this.ft = new C(n.dsn));
      }
      return (
        (t.prototype.captureException = function (t, n, i) {
          var r = this,
            e = n && n.event_id;
          return (
            this.ht(
              this.vt()
                .eventFromException(t, n)
                .then(function (t) {
                  return r.dt(t, n, i);
                })
                .then(function (t) {
                  e = t;
                })
            ),
            e
          );
        }),
        (t.prototype.captureMessage = function (t, n, i, r) {
          var e = this,
            o = i && i.event_id,
            s = x(t)
              ? this.vt().eventFromMessage(String(t), n, i)
              : this.vt().eventFromException(t, i);
          return (
            this.ht(
              s
                .then(function (t) {
                  return e.dt(t, i, r);
                })
                .then(function (t) {
                  o = t;
                })
            ),
            o
          );
        }),
        (t.prototype.captureEvent = function (t, n, i) {
          var r = n && n.event_id;
          return (
            this.ht(
              this.dt(t, n, i).then(function (t) {
                r = t;
              })
            ),
            r
          );
        }),
        (t.prototype.captureSession = function (t) {
          this.lt()
            ? "string" != typeof t.release
              ? q.warn(
                  "Discarded session because of missing or non-string release"
                )
              : (this.pt(t), t.update({ init: !1 }))
            : q.warn("SDK not enabled, will not capture session.");
        }),
        (t.prototype.getDsn = function () {
          return this.ft;
        }),
        (t.prototype.getOptions = function () {
          return this.ct;
        }),
        (t.prototype.getTransport = function () {
          return this.vt().getTransport();
        }),
        (t.prototype.flush = function (t) {
          var n = this;
          return this.yt(t).then(function (i) {
            return n
              .getTransport()
              .close(t)
              .then(function (t) {
                return i && t;
              });
          });
        }),
        (t.prototype.close = function (t) {
          var n = this;
          return this.flush(t).then(function (t) {
            return (n.getOptions().enabled = !1), t;
          });
        }),
        (t.prototype.setupIntegrations = function () {
          this.lt() && !this.st.initialized && (this.st = Qt(this.ct));
        }),
        (t.prototype.getIntegration = function (t) {
          try {
            return this.st[t.id] || null;
          } catch (n) {
            return (
              q.warn(
                "Cannot retrieve integration " +
                  t.id +
                  " from the current Client"
              ),
              null
            );
          }
        }),
        (t.prototype.gt = function (t, n) {
          var i,
            r,
            o = !1,
            s = !1,
            u = n.exception && n.exception.values;
          if (u) {
            s = !0;
            try {
              for (var a = v(u), c = a.next(); !c.done; c = a.next()) {
                var h = c.value.mechanism;
                if (h && !1 === h.handled) {
                  o = !0;
                  break;
                }
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                c && !c.done && (r = a.return) && r.call(a);
              } finally {
                if (i) throw i.error;
              }
            }
          }
          var d = t.status === e.Ok;
          ((d && 0 === t.errors) || (d && o)) &&
            (t.update(
              f(f({}, o && { status: e.Crashed }), {
                errors: t.errors || Number(s || o),
              })
            ),
            this.captureSession(t));
        }),
        (t.prototype.pt = function (t) {
          this.vt().sendSession(t);
        }),
        (t.prototype.yt = function (t) {
          var n = this;
          return new _t(function (i) {
            var r = 0,
              e = setInterval(function () {
                0 == n.ut
                  ? (clearInterval(e), i(!0))
                  : ((r += 1), t && r >= t && (clearInterval(e), i(!1)));
              }, 1);
          });
        }),
        (t.prototype.vt = function () {
          return this.at;
        }),
        (t.prototype.lt = function () {
          return !1 !== this.getOptions().enabled && void 0 !== this.ft;
        }),
        (t.prototype.bt = function (t, n, i) {
          var r = this,
            e = this.getOptions().normalizeDepth,
            o = void 0 === e ? 3 : e,
            s = f(f({}, t), {
              event_id: t.event_id || (i && i.event_id ? i.event_id : bt()),
              timestamp: t.timestamp || It(),
            });
          this.wt(s), this.Tt(s);
          var u = n;
          i && i.captureContext && (u = Mt.clone(u).update(i.captureContext));
          var a = _t.resolve(s);
          return (
            u && (a = u.applyToEvent(s, i)),
            a.then(function (t) {
              return "number" == typeof o && o > 0 ? r.St(t, o) : t;
            })
          );
        }),
        (t.prototype.St = function (t, n) {
          if (!t) return null;
          var i = f(
            f(
              f(
                f(
                  f({}, t),
                  t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(function (t) {
                      return f(f({}, t), t.data && { data: Y(t.data, n) });
                    }),
                  }
                ),
                t.user && { user: Y(t.user, n) }
              ),
              t.contexts && { contexts: Y(t.contexts, n) }
            ),
            t.extra && { extra: Y(t.extra, n) }
          );
          t.contexts &&
            t.contexts.trace &&
            (i.contexts.trace = t.contexts.trace);
          var r = this.getOptions().xt;
          return (void 0 === r ? {} : r).ensureNoCircularStructures ? Y(i) : i;
        }),
        (t.prototype.wt = function (t) {
          var n = this.getOptions(),
            i = n.environment,
            r = n.release,
            e = n.dist,
            o = n.maxValueLength,
            s = void 0 === o ? 250 : o;
          !!n.rpurl &&
            "" !== n.rpurl &&
            ((t.projectId = (this.ft && this.ft.projectId) || void 0),
            (t.sentry_key = (this.ft && this.ft.user) || void 0),
            (t.sentry_version = Kt),
            (t.isYlogEventBySelf = !0)),
            "environment" in t ||
              (t.environment = "environment" in n ? i : "production"),
            void 0 === t.release && void 0 !== r && (t.release = r),
            void 0 === t.dist && void 0 !== e && (t.dist = e),
            t.message && (t.message = H(t.message, s));
          var u = t.exception && t.exception.values && t.exception.values[0];
          u && u.value && (u.value = H(u.value, s));
          var a = t.request;
          a && a.url && (a.url = H(a.url, s));
        }),
        (t.prototype.Tt = function (t) {
          var n = Object.keys(this.st);
          n.length > 0 &&
            ((t.sdk = t.sdk || {}),
            (t.sdk.integrations = l(t.sdk.integrations || [], n)));
        }),
        (t.prototype.Et = function (t) {
          this.vt().sendEvent(t);
        }),
        (t.prototype.dt = function (t, n, i) {
          return this.Ot(t, n, i).then(
            function (t) {
              return t.event_id;
            },
            function (t) {
              q.error(t);
            }
          );
        }),
        (t.prototype.Ot = function (t, n, i) {
          var r,
            e,
            o = this,
            s = this.getOptions(),
            u = s.beforeSend,
            a = s.sampleRate,
            f = this.getTransport();
          if (!this.lt())
            return _t.reject(new R("SDK not enabled, will not capture event."));
          var h = "transaction" === t.type;
          return !h && "number" == typeof a && Math.random() > a
            ? (null === (e = (r = f).recordLostEvent) ||
                void 0 === e ||
                e.call(r, c.SampleRate, "event"),
              _t.reject(
                new R(
                  "Discarding event because it's not included in the random sample (sampling rate = " +
                    a +
                    ")"
                )
              ))
            : this.bt(t, i, n)
                .then(function (i) {
                  var r, e;
                  if (null === i)
                    throw (
                      (null === (e = (r = f).recordLostEvent) ||
                        void 0 === e ||
                        e.call(r, c.EventProcessor, t.type || "event"),
                      new R(
                        "An event processor returned null, will not send event."
                      ))
                    );
                  if ((n && n.data && !0 === n.data.__sentry__) || h || !u)
                    return i;
                  var s = u(i, n);
                  return o._t(s);
                })
                .then(function (n) {
                  var r, e;
                  if (null === n)
                    throw (
                      (null === (e = (r = f).recordLostEvent) ||
                        void 0 === e ||
                        e.call(r, c.BeforeSend, t.type || "event"),
                      new R(
                        "`beforeSend` returned `null`, will not send event."
                      ))
                    );
                  var s = i && i.getSession && i.getSession();
                  return !h && s && o.gt(s, n), o.Et(n), n;
                })
                .then(null, function (t) {
                  if (t instanceof R) throw t;
                  throw (
                    (o.captureException(t, {
                      data: { __sentry__: !0 },
                      originalException: t,
                    }),
                    new R(
                      "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                        t
                    ))
                  );
                });
        }),
        (t.prototype.ht = function (t) {
          var n = this;
          (this.ut += 1),
            t.then(
              function (t) {
                return (n.ut -= 1), t;
              },
              function (t) {
                return (n.ut -= 1), t;
              }
            );
        }),
        (t.prototype._t = function (t) {
          var n = "`beforeSend` method has to return `null` or a valid event.";
          if (j(t))
            return t.then(
              function (t) {
                if (!E(t) && null !== t) throw new R(n);
                return t;
              },
              function (t) {
                throw new R("beforeSend rejected with " + t);
              }
            );
          if (!E(t) && null !== t) throw new R(n);
          return t;
        }),
        t
      );
    })(),
    nn = (function () {
      function n() {}
      return (
        (n.prototype.sendEvent = function (n) {
          return _t.resolve({
            reason:
              "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: t.Status.Skipped,
          });
        }),
        (n.prototype.close = function (t) {
          return _t.resolve(!0);
        }),
        n
      );
    })(),
    rn = (function () {
      function t(t) {
        (this.ct = t),
          this.ct.dsn ||
            q.warn("No DSN provided, backend will not do anything."),
          (this.jt = this.kt());
      }
      return (
        (t.prototype.eventFromException = function (t, n) {
          throw new R("Backend has to implement `eventFromException` method");
        }),
        (t.prototype.eventFromMessage = function (t, n, i) {
          throw new R("Backend has to implement `eventFromMessage` method");
        }),
        (t.prototype.sendEvent = function (t) {
          this.jt.sendEvent(t).then(null, function (t) {
            q.error("Error while sending event: " + t);
          });
        }),
        (t.prototype.sendSession = function (t) {
          this.jt.sendSession
            ? this.jt.sendSession(t).then(null, function (t) {
                q.error("Error while sending session: " + t);
              })
            : q.warn(
                "Dropping session because custom transport doesn't implement sendSession"
              );
        }),
        (t.prototype.getTransport = function () {
          return this.jt;
        }),
        (t.prototype.kt = function () {
          return new nn();
        }),
        t
      );
    })();
  const en = "function" == typeof atob,
    on = "function" == typeof btoa,
    sn = "function" == typeof Buffer,
    un = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
    an = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
    cn = Array.prototype.slice.call(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    ),
    fn = ((t) => {
      let n = {};
      return cn.forEach((t, i) => (n[t] = i)), n;
    })(),
    hn =
      /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    vn = String.fromCharCode.bind(String),
    dn =
      "function" == typeof Uint8Array.from
        ? Uint8Array.from.bind(Uint8Array)
        : (t, n = (t) => t) =>
            new Uint8Array(Array.prototype.slice.call(t, 0).map(n)),
    ln = (t) =>
      t.replace(/=/g, "").replace(/[+\/]/g, (t) => ("+" == t ? "-" : "_")),
    pn = (t) => t.replace(/[^A-Za-z0-9\+\/]/g, ""),
    yn = (t) => {
      let n,
        i,
        r,
        e,
        o = "";
      const s = t.length % 3;
      for (let s = 0; s < t.length; ) {
        if (
          (i = t.charCodeAt(s++)) > 255 ||
          (r = t.charCodeAt(s++)) > 255 ||
          (e = t.charCodeAt(s++)) > 255
        )
          throw new TypeError("invalid character found");
        o +=
          cn[((n = (i << 16) | (r << 8) | e) >> 18) & 63] +
          cn[(n >> 12) & 63] +
          cn[(n >> 6) & 63] +
          cn[63 & n];
      }
      return s ? o.slice(0, s - 3) + "===".substring(s) : o;
    },
    mn = on
      ? (t) => btoa(t)
      : sn
      ? (t) => Buffer.from(t, "binary").toString("base64")
      : yn,
    gn = sn
      ? (t) => Buffer.from(t).toString("base64")
      : (t) => {
          let n = [];
          for (let i = 0, r = t.length; i < r; i += 4096)
            n.push(vn.apply(null, t.subarray(i, i + 4096)));
          return mn(n.join(""));
        },
    bn = (t, n = !1) => (n ? ln(gn(t)) : gn(t)),
    wn = (t) => {
      if (t.length < 2)
        return (n = t.charCodeAt(0)) < 128
          ? t
          : n < 2048
          ? vn(192 | (n >>> 6)) + vn(128 | (63 & n))
          : vn(224 | ((n >>> 12) & 15)) +
            vn(128 | ((n >>> 6) & 63)) +
            vn(128 | (63 & n));
      var n =
        65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
      return (
        vn(240 | ((n >>> 18) & 7)) +
        vn(128 | ((n >>> 12) & 63)) +
        vn(128 | ((n >>> 6) & 63)) +
        vn(128 | (63 & n))
      );
    },
    Tn = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    Sn = (t) => t.replace(Tn, wn),
    xn = sn
      ? (t) => Buffer.from(t, "utf8").toString("base64")
      : an
      ? (t) => gn(an.encode(t))
      : (t) => mn(Sn(t)),
    En = (t, n = !1) => (n ? ln(xn(t)) : xn(t)),
    On = (t) => En(t, !0),
    _n =
      /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    jn = (t) => {
      switch (t.length) {
        case 4:
          var n =
            (((7 & t.charCodeAt(0)) << 18) |
              ((63 & t.charCodeAt(1)) << 12) |
              ((63 & t.charCodeAt(2)) << 6) |
              (63 & t.charCodeAt(3))) -
            65536;
          return vn(55296 + (n >>> 10)) + vn(56320 + (1023 & n));
        case 3:
          return vn(
            ((15 & t.charCodeAt(0)) << 12) |
              ((63 & t.charCodeAt(1)) << 6) |
              (63 & t.charCodeAt(2))
          );
        default:
          return vn(((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1)));
      }
    },
    kn = (t) => t.replace(_n, jn),
    Dn = (t) => {
      if (((t = t.replace(/\s+/g, "")), !hn.test(t)))
        throw new TypeError("malformed base64.");
      t += "==".slice(2 - (3 & t.length));
      let n,
        i,
        r,
        e = "";
      for (let o = 0; o < t.length; )
        (n =
          (fn[t.charAt(o++)] << 18) |
          (fn[t.charAt(o++)] << 12) |
          ((i = fn[t.charAt(o++)]) << 6) |
          (r = fn[t.charAt(o++)])),
          (e +=
            64 === i
              ? vn((n >> 16) & 255)
              : 64 === r
              ? vn((n >> 16) & 255, (n >> 8) & 255)
              : vn((n >> 16) & 255, (n >> 8) & 255, 255 & n));
      return e;
    },
    Nn = en
      ? (t) => atob(pn(t))
      : sn
      ? (t) => Buffer.from(t, "base64").toString("binary")
      : Dn,
    In = sn
      ? (t) => dn(Buffer.from(t, "base64"))
      : (t) => dn(Nn(t), (t) => t.charCodeAt(0)),
    Rn = (t) => In(Cn(t)),
    An = sn
      ? (t) => Buffer.from(t, "base64").toString("utf8")
      : un
      ? (t) => un.decode(In(t))
      : (t) => kn(Nn(t)),
    Cn = (t) => pn(t.replace(/[-_]/g, (t) => ("-" == t ? "+" : "/"))),
    Mn = (t) => An(Cn(t)),
    Ln = (t) => ({ value: t, enumerable: !1, writable: !0, configurable: !0 }),
    Un = function () {
      const t = (t, n) => Object.defineProperty(String.prototype, t, Ln(n));
      t("fromBase64", function () {
        return Mn(this);
      }),
        t("toBase64", function (t) {
          return En(this, t);
        }),
        t("toBase64URI", function () {
          return En(this, !0);
        }),
        t("toBase64URL", function () {
          return En(this, !0);
        }),
        t("toUint8Array", function () {
          return Rn(this);
        });
    },
    Fn = function () {
      const t = (t, n) => Object.defineProperty(Uint8Array.prototype, t, Ln(n));
      t("toBase64", function (t) {
        return bn(this, t);
      }),
        t("toBase64URI", function () {
          return bn(this, !0);
        }),
        t("toBase64URL", function () {
          return bn(this, !0);
        });
    },
    qn = {
      version: "3.7.2",
      VERSION: "3.7.2",
      atob: Nn,
      atobPolyfill: Dn,
      btoa: mn,
      btoaPolyfill: yn,
      fromBase64: Mn,
      toBase64: En,
      encode: En,
      encodeURI: On,
      encodeURL: On,
      utob: Sn,
      btou: kn,
      decode: Mn,
      isValid: (t) => {
        if ("string" != typeof t) return !1;
        const n = t.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(n) || !/[^\s0-9a-zA-Z\-_]/.test(n);
      },
      fromUint8Array: bn,
      toUint8Array: Rn,
      extendString: Un,
      extendUint8Array: Fn,
      extendBuiltins: () => {
        Un(), Fn();
      },
    };
  function Bn(t) {
    if (t.metadata && t.metadata.sdk) {
      var n = t.metadata.sdk;
      return { name: n.name, version: n.version };
    }
  }
  function Pn(t, n) {
    return n
      ? ((t.sdk = t.sdk || {}),
        (t.sdk.name = t.sdk.name || n.name),
        (t.sdk.version = t.sdk.version || n.version),
        (t.sdk.integrations = l(
          t.sdk.integrations || [],
          n.integrations || []
        )),
        (t.sdk.packages = l(t.sdk.packages || [], n.packages || [])),
        t)
      : t;
  }
  function Jn(t, n) {
    var i = Bn(n),
      r = "aggregates" in t ? "sessions" : "session";
    return {
      body:
        JSON.stringify(
          f(
            f({ sent_at: new Date().toISOString() }, i && { sdk: i }),
            n.forceEnvelope() && { dsn: n.getDsn().toString() }
          )
        ) +
        "\n" +
        JSON.stringify({ type: r }) +
        "\n" +
        JSON.stringify(t),
      type: r,
      url: n.getEnvelopeEndpointWithUrlEncodedAuth(),
    };
  }
  function Hn(t, n, i) {
    var r = Bn(n),
      e = "aggregates" in t ? "sessions" : "session",
      o = {
        envelope:
          JSON.stringify(
            f(
              f({ sent_at: new Date().toISOString() }, r && { sdk: r }),
              n.forceEnvelope() && { dsn: n.getDsn().toString() }
            )
          ) +
          "\n" +
          JSON.stringify({ type: e }) +
          "\n" +
          JSON.stringify(t),
        projectId: (i && i.projectId) || void 0,
        sentry_key: (i && i.user) || void 0,
        sentry_version: Kt,
      };
    return {
      body: {
        ctime: Date.now(),
        rand: parseInt("" + 1e4 * Math.random()),
        rid: "sentryreport",
        sk: qn.btoa(encodeURIComponent(JSON.stringify(o))),
        rptype: "envelope",
      },
      type: e,
      url: n.getEnvelopeEndpointWithUrlEncodedAuth(),
    };
  }
  function zn(t, n) {
    var i = Bn(n),
      r = t.type || "event",
      e = "transaction" === r || n.forceEnvelope(),
      o = t.debug_meta || {},
      s = o.transactionSampling,
      u = h(o, ["transactionSampling"]),
      a = s || {},
      c = a.method,
      v = a.rate;
    0 === Object.keys(u).length ? delete t.debug_meta : (t.debug_meta = u);
    var d = {
      body: JSON.stringify(i ? Pn(t, n.metadata.sdk) : t),
      type: r,
      url: e
        ? n.getEnvelopeEndpointWithUrlEncodedAuth()
        : n.getStoreEndpointWithUrlEncodedAuth(),
    };
    if (e) {
      var l =
        JSON.stringify(
          f(
            f(
              { event_id: t.event_id, sent_at: new Date().toISOString() },
              i && { sdk: i }
            ),
            n.forceEnvelope() && { dsn: n.getDsn().toString() }
          )
        ) +
        "\n" +
        JSON.stringify({ type: r, sample_rates: [{ id: c, rate: v }] }) +
        "\n" +
        d.body;
      d.body = l;
    }
    return d;
  }
  function Xn(t, n) {
    var i = Bn(n),
      r = t.type || "event",
      e = "transaction" === r || n.forceEnvelope(),
      o = t.debug_meta || {},
      s = o.transactionSampling,
      u = h(o, ["transactionSampling"]),
      a = s || {},
      c = a.method,
      v = a.rate;
    0 === Object.keys(u).length ? delete t.debug_meta : (t.debug_meta = u);
    var d = t;
    i && (d = Pn(t, n.metadata.sdk));
    var l = qn.btoa(encodeURIComponent(JSON.stringify(d))),
      p = {
        body: {
          ctime: Date.now(),
          rand: parseInt("" + 1e4 * Math.random()),
          rid: "sentryreport",
          sk: l,
          rptype: e ? "envelope" : "store",
        },
        type: r,
        url: e
          ? n.getEnvelopeEndpointWithUrlEncodedAuth()
          : n.getStoreEndpointWithUrlEncodedAuth(),
      };
    if (e) {
      var y = {
          envelope:
            JSON.stringify(
              f(
                f(
                  { event_id: t.event_id, sent_at: new Date().toISOString() },
                  i && { sdk: i }
                ),
                n.forceEnvelope() && { dsn: n.getDsn().toString() }
              )
            ) +
            "\n" +
            JSON.stringify({ type: r, sample_rates: [{ id: c, rate: v }] }) +
            "\n" +
            JSON.stringify(t),
          projectId: t.projectId || "",
          sentry_key: t.sentry_key || "",
          sentry_version: t.sentry_version || "",
        },
        m = {
          ctime: Date.now(),
          rand: parseInt("" + 1e4 * Math.random()),
          rid: "sentryreport",
          sk: qn.btoa(encodeURIComponent(JSON.stringify(y))),
          rptype: e ? "envelope" : "store",
        };
      p.body = m;
    }
    return p;
  }
  var Gn,
    Wn = "6.14.2",
    $n = (function () {
      function t() {
        this.name = t.id;
      }
      return (
        (t.prototype.setupOnce = function () {
          (Gn = Function.prototype.toString),
            (Function.prototype.toString = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var i = this.__sentry_original__ || this;
              return Gn.apply(i, t);
            });
        }),
        (t.id = "FunctionToString"),
        t
      );
    })(),
    Kn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
    Zn = (function () {
      function t(n) {
        void 0 === n && (n = {}), (this.ct = n), (this.name = t.id);
      }
      return (
        (t.prototype.setupOnce = function () {
          Ut(function (n) {
            var i = Ht();
            if (!i) return n;
            var r = i.getIntegration(t);
            if (r) {
              var e = i.getClient(),
                o = e ? e.getOptions() : {},
                s = "function" == typeof r.Dt ? r.Dt(o) : {};
              return "function" != typeof r.Nt ? n : r.Nt(n, s) ? null : n;
            }
            return n;
          });
        }),
        (t.prototype.Nt = function (t, n) {
          return this.It(t, n)
            ? (q.warn(
                "Event dropped due to being internal Sentry Error.\nEvent: " +
                  Tt(t)
              ),
              !0)
            : this.Rt(t, n)
            ? (q.warn(
                "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                  Tt(t)
              ),
              !0)
            : this.At(t, n)
            ? (q.warn(
                "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                  Tt(t) +
                  ".\nUrl: " +
                  this.Ct(t)
              ),
              !0)
            : !this.Mt(t, n) &&
              (q.warn(
                "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                  Tt(t) +
                  ".\nUrl: " +
                  this.Ct(t)
              ),
              !0);
        }),
        (t.prototype.It = function (t, n) {
          if (!n.ignoreInternal) return !1;
          try {
            return (
              (t &&
                t.exception &&
                t.exception.values &&
                t.exception.values[0] &&
                "SentryError" === t.exception.values[0].type) ||
              !1
            );
          } catch (t) {
            return !1;
          }
        }),
        (t.prototype.Rt = function (t, n) {
          return (
            !(!n.ignoreErrors || !n.ignoreErrors.length) &&
            this.Lt(t).some(function (t) {
              return n.ignoreErrors.some(function (n) {
                return X(t, n);
              });
            })
          );
        }),
        (t.prototype.At = function (t, n) {
          if (!n.denyUrls || !n.denyUrls.length) return !1;
          var i = this.Ct(t);
          return (
            !!i &&
            n.denyUrls.some(function (t) {
              return X(i, t);
            })
          );
        }),
        (t.prototype.Mt = function (t, n) {
          if (!n.allowUrls || !n.allowUrls.length) return !0;
          var i = this.Ct(t);
          return (
            !i ||
            n.allowUrls.some(function (t) {
              return X(i, t);
            })
          );
        }),
        (t.prototype.Dt = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              allowUrls: l(
                this.ct.whitelistUrls || [],
                this.ct.allowUrls || [],
                t.whitelistUrls || [],
                t.allowUrls || []
              ),
              denyUrls: l(
                this.ct.blacklistUrls || [],
                this.ct.denyUrls || [],
                t.blacklistUrls || [],
                t.denyUrls || []
              ),
              ignoreErrors: l(
                this.ct.ignoreErrors || [],
                t.ignoreErrors || [],
                Kn
              ),
              ignoreInternal:
                void 0 === this.ct.ignoreInternal || this.ct.ignoreInternal,
            }
          );
        }),
        (t.prototype.Lt = function (t) {
          if (t.message) return [t.message];
          if (t.exception)
            try {
              var n = (t.exception.values && t.exception.values[0]) || {},
                i = n.type,
                r = void 0 === i ? "" : i,
                e = n.value,
                o = void 0 === e ? "" : e;
              return ["" + o, r + ": " + o];
            } catch (n) {
              return q.error("Cannot extract message for event " + Tt(t)), [];
            }
          return [];
        }),
        (t.prototype.Ut = function (t) {
          var n, i;
          void 0 === t && (t = []);
          for (var r = t.length - 1; r >= 0; r--) {
            var e = t[r];
            if (
              "<anonymous>" !==
                (null === (n = e) || void 0 === n ? void 0 : n.filename) &&
              "[native code]" !==
                (null === (i = e) || void 0 === i ? void 0 : i.filename)
            )
              return e.filename || null;
          }
          return null;
        }),
        (t.prototype.Ct = function (t) {
          try {
            if (t.stacktrace) {
              var n = t.stacktrace.frames;
              return this.Ut(n);
            }
            if (t.exception) {
              var i =
                t.exception.values &&
                t.exception.values[0].stacktrace &&
                t.exception.values[0].stacktrace.frames;
              return this.Ut(i);
            }
            return null;
          } catch (n) {
            return q.error("Cannot extract url for event " + Tt(t)), null;
          }
        }),
        (t.id = "InboundFilters"),
        t
      );
    })(),
    Vn = Object.freeze({
      __proto__: null,
      FunctionToString: $n,
      InboundFilters: Zn,
    }),
    Yn = "?",
    Qn =
      /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    ti =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    ni =
      /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    ii = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    ri = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    ei = /Minified React error #\d+;/i;
  function oi(t) {
    var n = null,
      i = 0;
    t &&
      ("number" == typeof t.framesToPop
        ? (i = t.framesToPop)
        : ei.test(t.message) && (i = 1));
    try {
      if (
        (n = (function (t) {
          if (!t || !t.stacktrace) return null;
          for (
            var n,
              i = t.stacktrace,
              r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
              e =
                / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
              o = i.split("\n"),
              s = [],
              u = 0;
            u < o.length;
            u += 2
          ) {
            var a = null;
            (n = r.exec(o[u]))
              ? (a = {
                  url: n[2],
                  func: n[3],
                  args: [],
                  line: +n[1],
                  column: null,
                })
              : (n = e.exec(o[u])) &&
                (a = {
                  url: n[6],
                  func: n[3] || n[4],
                  args: n[5] ? n[5].split(",") : [],
                  line: +n[1],
                  column: +n[2],
                }),
              a && (!a.func && a.line && (a.func = Yn), s.push(a));
          }
          if (!s.length) return null;
          return { message: ai(t), name: t.name, stack: s };
        })(t))
      )
        return ui(n, i);
    } catch (t) {}
    try {
      if (
        (n = (function (t) {
          var n, i;
          if (!t || !t.stack) return null;
          for (
            var r, e, o, s = [], u = t.stack.split("\n"), a = 0;
            a < u.length;
            ++a
          ) {
            if ((e = Qn.exec(u[a]))) {
              var c = e[2] && 0 === e[2].indexOf("native");
              e[2] &&
                0 === e[2].indexOf("eval") &&
                (r = ri.exec(e[2])) &&
                ((e[2] = r[1]), (e[3] = r[2]), (e[4] = r[3]));
              var f =
                  e[2] && 0 === e[2].indexOf("address at ")
                    ? e[2].substr("address at ".length)
                    : e[2],
                h = e[1] || Yn;
              (n = d(si(h, f), 2)),
                (h = n[0]),
                (f = n[1]),
                (o = {
                  url: f,
                  func: h,
                  args: c ? [e[2]] : [],
                  line: e[3] ? +e[3] : null,
                  column: e[4] ? +e[4] : null,
                });
            } else if ((e = ni.exec(u[a])))
              o = {
                url: e[2],
                func: e[1] || Yn,
                args: [],
                line: +e[3],
                column: e[4] ? +e[4] : null,
              };
            else {
              if (!(e = ti.exec(u[a]))) continue;
              e[3] && e[3].indexOf(" > eval") > -1 && (r = ii.exec(e[3]))
                ? ((e[1] = e[1] || "eval"),
                  (e[3] = r[1]),
                  (e[4] = r[2]),
                  (e[5] = ""))
                : 0 !== a ||
                  e[5] ||
                  void 0 === t.columnNumber ||
                  (s[0].column = t.columnNumber + 1);
              var f = e[3],
                h = e[1] || Yn;
              (i = d(si(h, f), 2)),
                (h = i[0]),
                (f = i[1]),
                (o = {
                  url: f,
                  func: h,
                  args: e[2] ? e[2].split(",") : [],
                  line: e[4] ? +e[4] : null,
                  column: e[5] ? +e[5] : null,
                });
            }
            !o.func && o.line && (o.func = Yn), s.push(o);
          }
          if (!s.length) return null;
          return { message: ai(t), name: t.name, stack: s };
        })(t))
      )
        return ui(n, i);
    } catch (t) {}
    return { message: ai(t), name: t && t.name, stack: [], failed: !0 };
  }
  var si = function (t, n) {
    var i = -1 !== t.indexOf("safari-extension"),
      r = -1 !== t.indexOf("safari-web-extension");
    return i || r
      ? [
          -1 !== t.indexOf("@") ? t.split("@")[0] : Yn,
          i ? "safari-extension:" + n : "safari-web-extension:" + n,
        ]
      : [t, n];
  };
  function ui(t, n) {
    try {
      return f(f({}, t), { stack: t.stack.slice(n) });
    } catch (n) {
      return t;
    }
  }
  function ai(t) {
    var n = t && t.message;
    return n
      ? n.error && "string" == typeof n.error.message
        ? n.error.message
        : n
      : "No error message";
  }
  var ci = 50;
  function fi(t) {
    var n = vi(t.stack),
      i = { type: t.name, value: t.message };
    return (
      n && n.length && (i.stacktrace = { frames: n }),
      void 0 === i.type &&
        "" === i.value &&
        (i.value = "Unrecoverable error caught"),
      i
    );
  }
  function hi(t) {
    return { exception: { values: [fi(t)] } };
  }
  function vi(t) {
    if (!t || !t.length) return [];
    var n = t,
      i = n[0].func || "",
      r = n[n.length - 1].func || "";
    return (
      (-1 === i.indexOf("captureMessage") &&
        -1 === i.indexOf("captureException")) ||
        (n = n.slice(1)),
      -1 !== r.indexOf("sentryWrapped") && (n = n.slice(0, -1)),
      n
        .slice(0, ci)
        .map(function (t) {
          return {
            colno: null === t.column ? void 0 : t.column,
            filename: t.url || n[0].url,
            function: t.func || "?",
            in_app: !0,
            lineno: null === t.line ? void 0 : t.line,
          };
        })
        .reverse()
    );
  }
  function di(t, n, i) {
    var r, e;
    if ((void 0 === i && (i = {}), w(t) && t.error))
      return (r = hi(oi((t = t.error))));
    if (
      T(t) ||
      ((e = t), "[object DOMException]" === Object.prototype.toString.call(e))
    ) {
      var o = t,
        s = o.name || (T(o) ? "DOMError" : "DOMException"),
        u = o.message ? s + ": " + o.message : s;
      return (
        St((r = li(u, n, i)), u),
        "code" in o &&
          (r.tags = f(f({}, r.tags), { "DOMException.code": "" + o.code })),
        r
      );
    }
    return b(t)
      ? (r = hi(oi(t)))
      : E(t) || O(t)
      ? (xt(
          (r = (function (t, n, i) {
            var r = {
              exception: {
                values: [
                  {
                    type: O(t)
                      ? t.constructor.name
                      : i
                      ? "UnhandledRejection"
                      : "Error",
                    value:
                      "Non-Error " +
                      (i ? "promise rejection" : "exception") +
                      " captured with keys: " +
                      Q(t),
                  },
                ],
              },
              extra: { __serialized__: K(t) },
            };
            if (n) {
              var e = vi(oi(n).stack);
              r.stacktrace = { frames: e };
            }
            return r;
          })(t, n, i.rejection)),
          { synthetic: !0 }
        ),
        r)
      : (St((r = li(t, n, i)), "" + t, void 0), xt(r, { synthetic: !0 }), r);
  }
  function li(t, n, i) {
    void 0 === i && (i = {});
    var r = { message: t };
    if (i.attachStacktrace && n) {
      var e = vi(oi(n).stack);
      r.stacktrace = { frames: e };
    }
    return r;
  }
  var pi,
    yi = g();
  function mi() {
    var t, n;
    if (pi) return pi;
    if (it(yi.fetch)) return (pi = yi.fetch.bind(yi));
    var i = yi.document,
      r = yi.fetch;
    if (
      "function" ==
      typeof (null === (t = i) || void 0 === t ? void 0 : t.createElement)
    )
      try {
        var e = i.createElement("iframe");
        (e.hidden = !0),
          i.head.appendChild(e),
          (null === (n = e.contentWindow) || void 0 === n ? void 0 : n.fetch) &&
            (r = e.contentWindow.fetch),
          i.head.removeChild(e);
      } catch (t) {
        q.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          t
        );
      }
    return (pi = r.bind(yi));
  }
  function gi(t, n) {
    if (
      "[object Navigator]" ===
        Object.prototype.toString.call(yi && yi.navigator) &&
      "function" == typeof yi.navigator.sendBeacon
    )
      return yi.navigator.sendBeacon.bind(yi.navigator)(t, n);
    if (nt()) {
      var i = mi();
      i(t, {
        body: n,
        method: "POST",
        credentials: "omit",
        keepalive: !0,
      }).then(null, function (t) {
        console.error(t);
      });
    } else;
  }
  var bi,
    wi = {
      event: "error",
      transaction: "transaction",
      session: "session",
      attachment: "attachment",
    },
    Ti = g(),
    Si = (function () {
      function n(t) {
        var n = this;
        (this.options = t),
          (this.k = new jt(30)),
          (this.Ft = {}),
          (this.qt = {}),
          (this.Bt = new Zt(t.dsn, t.Pt, t.tunnel, t.rpurl)),
          (this.url = this.Bt.getStoreEndpointWithUrlEncodedAuth()),
          (this.ft = new C(t.dsn)),
          this.options.sendClientReports &&
            Ti.document &&
            Ti.document.addEventListener("visibilitychange", function () {
              "hidden" === Ti.document.visibilityState && n.Jt();
            });
      }
      return (
        (n.prototype.sendEvent = function (t) {
          throw new R("Transport Class has to implement `sendEvent` method");
        }),
        (n.prototype.close = function (t) {
          return this.k.drain(t);
        }),
        (n.prototype.recordLostEvent = function (t, n) {
          var i;
          if (this.options.sendClientReports) {
            var r = wi[n] + ":" + t;
            q.log("Adding outcome: " + r),
              (this.qt[r] = (null != (i = this.qt[r]) ? i : 0) + 1);
          }
        }),
        (n.prototype.Jt = function () {
          if (this.options.sendClientReports) {
            var t = this.qt;
            if (((this.qt = {}), Object.keys(t).length)) {
              q.log("Flushing outcomes:\n" + JSON.stringify(t, null, 2));
              var n = this.Bt.getEnvelopeEndpointWithUrlEncodedAuth(),
                i =
                  JSON.stringify(
                    f(
                      {},
                      this.options.tunnel && {
                        dsn: this.Bt.getDsn().toString(),
                      }
                    )
                  ) +
                  "\n" +
                  JSON.stringify({ type: "client_report" }) +
                  "\n" +
                  JSON.stringify({
                    timestamp: It(),
                    discarded_events: Object.keys(t).map(function (n) {
                      var i = d(n.split(":"), 2),
                        r = i[0];
                      return { reason: i[1], category: r, quantity: t[n] };
                    }),
                  });
              try {
                gi(n, i);
              } catch (t) {
                q.error(t);
              }
            } else q.log("No outcomes to flush");
          }
        }),
        (n.prototype.Ht = function (n) {
          var i = n.requestType,
            r = n.response,
            e = n.headers,
            o = n.resolve,
            s = n.reject,
            u = t.Status.fromHttpCode(r.status);
          this.zt(e) &&
            q.warn(
              "Too many " + i + " requests, backing off until: " + this.Xt(i)
            ),
            u !== t.Status.Success ? s(r) : o({ status: u });
        }),
        (n.prototype.Xt = function (t) {
          var n = wi[t];
          return this.Ft[n] || this.Ft.all;
        }),
        (n.prototype.Gt = function (t) {
          return this.Xt(t) > new Date(Date.now());
        }),
        (n.prototype.zt = function (t) {
          var n,
            i,
            r,
            e,
            o = Date.now(),
            s = t["x-sentry-rate-limits"],
            u = t["retry-after"];
          if (s) {
            try {
              for (
                var a = v(s.trim().split(",")), c = a.next();
                !c.done;
                c = a.next()
              ) {
                var f = c.value.split(":", 2),
                  h = parseInt(f[0], 10),
                  d = 1e3 * (isNaN(h) ? 60 : h);
                try {
                  for (
                    var l = ((r = void 0), v(f[1].split(";"))), p = l.next();
                    !p.done;
                    p = l.next()
                  ) {
                    var y = p.value;
                    this.Ft[y || "all"] = new Date(o + d);
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    p && !p.done && (e = l.return) && e.call(l);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                c && !c.done && (i = a.return) && i.call(a);
              } finally {
                if (n) throw n.error;
              }
            }
            return !0;
          }
          return (
            !!u &&
            ((this.Ft.all = new Date(
              o +
                (function (t, n) {
                  if (!n) return Ot;
                  var i = parseInt("" + n, 10);
                  if (!isNaN(i)) return 1e3 * i;
                  var r = Date.parse("" + n);
                  return isNaN(r) ? Ot : r - t;
                })(o, u)
            )),
            !0)
          );
        }),
        n
      );
    })(),
    xi = Object.prototype.hasOwnProperty;
  function Ei(t) {
    try {
      return encodeURIComponent(t);
    } catch (t) {
      return null;
    }
  }
  var Oi = function (t, n) {
      n = n || "";
      var i,
        r,
        e = [];
      for (r in ("string" != typeof n && (n = "?"), t))
        if (xi.call(t, r)) {
          if (
            ((i = t[r]) || (null !== i && i !== bi && !isNaN(i)) || (i = ""),
            (r = Ei(r)),
            (i = Ei(i)),
            null === r || null === i)
          )
            continue;
          e.push(r + "=" + i);
        }
      return e.length ? n + e.join("&") : "";
    },
    _i = (function (t) {
      function n(n, i) {
        void 0 === i && (i = mi());
        var r = t.call(this, n) || this;
        return (r.Wt = i), r;
      }
      return (
        i(n, t),
        (n.prototype.sendEvent = function (t) {
          return t.isYlogEventBySelf
            ? this.$t(Xn(t, this.Bt))
            : this.Kt(zn(t, this.Bt), t);
        }),
        (n.prototype.sendSession = function (t) {
          return this.Bt.isRpurl()
            ? this.$t(Hn(t, this.Bt, this.ft))
            : this.Kt(Jn(t, this.Bt), t);
        }),
        (n.prototype.$t = function (t) {
          var n = this;
          if (this.Gt(t.type))
            return (
              this.recordLostEvent(c.RateLimitBackoff, t.type),
              Promise.reject({ type: t.type, status: 429 })
            );
          var i = {
            body: Oi(t.body),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            method: "POST",
            referrerPolicy: rt() ? "origin" : "",
          };
          return (
            void 0 !== this.options.fetchParameters &&
              Object.assign(i, this.options.fetchParameters),
            void 0 !== this.options.headers &&
              (i.headers = this.options.headers),
            this.k
              .add(function () {
                return new _t(function (r, e) {
                  n.Wt(t.url, i)
                    .then(function (i) {
                      n.Ht({
                        requestType: t.type,
                        response: i,
                        headers: {},
                        resolve: r,
                        reject: e,
                      });
                    })
                    .catch(e);
                });
              })
              .then(void 0, function (i) {
                throw (
                  (i instanceof R
                    ? n.recordLostEvent(c.QueueOverflow, t.type)
                    : n.recordLostEvent(c.NetworkError, t.type),
                  i)
                );
              })
          );
        }),
        (n.prototype.Kt = function (t, n) {
          var i = this;
          if (this.Gt(t.type))
            return (
              this.recordLostEvent(c.RateLimitBackoff, t.type),
              Promise.reject({
                event: n,
                type: t.type,
                reason:
                  "Transport for " +
                  t.type +
                  " requests locked till " +
                  this.Xt(t.type) +
                  " due to too many requests.",
                status: 429,
              })
            );
          var r = {
            body: t.body,
            method: "POST",
            referrerPolicy: rt() ? "origin" : "",
          };
          return (
            void 0 !== this.options.fetchParameters &&
              Object.assign(r, this.options.fetchParameters),
            void 0 !== this.options.headers &&
              (r.headers = this.options.headers),
            this.k
              .add(function () {
                return new _t(function (n, e) {
                  i.Wt(t.url, r)
                    .then(function (r) {
                      var o = {
                        "x-sentry-rate-limits": r.headers.get(
                          "X-Sentry-Rate-Limits"
                        ),
                        "retry-after": r.headers.get("Retry-After"),
                      };
                      i.Ht({
                        requestType: t.type,
                        response: r,
                        headers: o,
                        resolve: n,
                        reject: e,
                      });
                    })
                    .catch(e);
                });
              })
              .then(void 0, function (n) {
                throw (
                  (n instanceof R
                    ? i.recordLostEvent(c.QueueOverflow, t.type)
                    : i.recordLostEvent(c.NetworkError, t.type),
                  n)
                );
              })
          );
        }),
        n
      );
    })(Si),
    ji = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        i(n, t),
        (n.prototype.sendEvent = function (t) {
          return t.isYlogEventBySelf
            ? this.$t(Xn(t, this.Bt))
            : this.Kt(zn(t, this.Bt), t);
        }),
        (n.prototype.sendSession = function (t) {
          return this.Bt.isRpurl()
            ? this.$t(Hn(t, this.Bt, this.ft))
            : this.Kt(Jn(t, this.Bt), t);
        }),
        (n.prototype.Kt = function (t, n) {
          var i = this;
          return this.Gt(t.type)
            ? (this.recordLostEvent(c.RateLimitBackoff, t.type),
              Promise.reject({
                event: n,
                type: t.type,
                reason:
                  "Transport for " +
                  t.type +
                  " requests locked till " +
                  this.Xt(t.type) +
                  " due to too many requests.",
                status: 429,
              }))
            : this.k
                .add(function () {
                  return new _t(function (n, r) {
                    var e = new XMLHttpRequest();
                    for (var o in ((e.onreadystatechange = function () {
                      if (4 === e.readyState) {
                        var o = {
                          "x-sentry-rate-limits": e.getResponseHeader(
                            "X-Sentry-Rate-Limits"
                          ),
                          "retry-after": e.getResponseHeader("Retry-After"),
                        };
                        i.Ht({
                          requestType: t.type,
                          response: e,
                          headers: o,
                          resolve: n,
                          reject: r,
                        });
                      }
                    }),
                    e.open("POST", t.url),
                    i.options.headers))
                      i.options.headers.hasOwnProperty(o) &&
                        e.setRequestHeader(o, i.options.headers[o]);
                    e.send(t.body);
                  });
                })
                .then(void 0, function (n) {
                  throw (
                    (n instanceof R
                      ? i.recordLostEvent(c.QueueOverflow, t.type)
                      : i.recordLostEvent(c.NetworkError, t.type),
                    n)
                  );
                });
        }),
        (n.prototype.$t = function (t) {
          var n = this;
          return this.Gt(t.type)
            ? (this.recordLostEvent(c.RateLimitBackoff, t.type),
              Promise.reject({ type: t.type, status: 429 }))
            : this.k
                .add(function () {
                  return new _t(function (i, r) {
                    var e = new XMLHttpRequest();
                    for (var o in ((e.onreadystatechange = function () {
                      if (4 === e.readyState) {
                        n.Ht({
                          requestType: t.type,
                          response: e,
                          headers: {},
                          resolve: i,
                          reject: r,
                        });
                      }
                    }),
                    e.open("POST", t.url),
                    n.options.headers))
                      n.options.headers.hasOwnProperty(o) &&
                        e.setRequestHeader(o, n.options.headers[o]);
                    e.setRequestHeader(
                      "Content-Type",
                      "application/x-www-form-urlencoded"
                    );
                    var s = Oi(t.body);
                    e.send(s);
                  });
                })
                .then(void 0, function (i) {
                  throw (
                    (i instanceof R
                      ? n.recordLostEvent(c.QueueOverflow, t.type)
                      : n.recordLostEvent(c.NetworkError, t.type),
                    i)
                  );
                });
        }),
        n
      );
    })(Si),
    ki = Object.freeze({
      __proto__: null,
      BaseTransport: Si,
      FetchTransport: _i,
      XHRTransport: ji,
    }),
    Di = (function (n) {
      function r() {
        return (null !== n && n.apply(this, arguments)) || this;
      }
      return (
        i(r, n),
        (r.prototype.eventFromException = function (n, i) {
          return (function (n, i, r) {
            var e = di(i, (r && r.syntheticException) || void 0, {
              attachStacktrace: n.attachStacktrace,
            });
            return (
              xt(e, { handled: !0, type: "generic" }),
              (e.level = t.Severity.Error),
              r && r.event_id && (e.event_id = r.event_id),
              _t.resolve(e)
            );
          })(this.ct, n, i);
        }),
        (r.prototype.eventFromMessage = function (n, i, r) {
          return (
            void 0 === i && (i = t.Severity.Info),
            (function (n, i, r, e) {
              void 0 === r && (r = t.Severity.Info);
              var o = li(i, (e && e.syntheticException) || void 0, {
                attachStacktrace: n.attachStacktrace,
              });
              return (
                (o.level = r),
                e && e.event_id && (o.event_id = e.event_id),
                _t.resolve(o)
              );
            })(this.ct, n, i, r)
          );
        }),
        (r.prototype.kt = function () {
          if (!this.ct.dsn) return n.prototype.kt.call(this);
          var t = f(f({}, this.ct.transportOptions), {
            dsn: this.ct.dsn,
            rpurl: this.ct.rpurl,
            tunnel: this.ct.tunnel,
            sendClientReports: this.ct.sendClientReports,
            Pt: this.ct.Pt,
          });
          return this.ct.transport
            ? new this.ct.transport(t)
            : nt()
            ? new _i(t)
            : new ji(t);
        }),
        r
      );
    })(rn),
    Ni = g(),
    Ii = 0;
  function Ri() {
    return Ii > 0;
  }
  function Ai(t, n, i) {
    if ((void 0 === n && (n = {}), "function" != typeof t)) return t;
    try {
      if (t.__sentry__) return t;
      if (t.__sentry_wrapped__) return t.__sentry_wrapped__;
    } catch (n) {
      return t;
    }
    var sentryWrapped = function () {
      var r = Array.prototype.slice.call(arguments);
      try {
        i && "function" == typeof i && i.apply(this, arguments);
        var e = r.map(function (t) {
          return Ai(t, n);
        });
        return t.handleEvent ? t.handleEvent.apply(this, e) : t.apply(this, e);
      } catch (t) {
        throw (
          ((Ii += 1),
          setTimeout(function () {
            Ii -= 1;
          }),
          $t(function (i) {
            i.addEventProcessor(function (t) {
              var i = f({}, t);
              return (
                n.mechanism && (St(i, void 0, void 0), xt(i, n.mechanism)),
                (i.extra = f(f({}, i.extra), { arguments: r })),
                i
              );
            }),
              captureException(t);
          }),
          t)
        );
      }
    };
    try {
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (sentryWrapped[r] = t[r]);
    } catch (t) {}
    (t.prototype = t.prototype || {}),
      (sentryWrapped.prototype = t.prototype),
      Object.defineProperty(t, "__sentry_wrapped__", {
        enumerable: !1,
        value: sentryWrapped,
      }),
      Object.defineProperties(sentryWrapped, {
        __sentry__: { enumerable: !1, value: !0 },
        __sentry_original__: { enumerable: !1, value: t },
      });
    try {
      Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable &&
        Object.defineProperty(sentryWrapped, "name", {
          get: function () {
            return t.name;
          },
        });
    } catch (t) {}
    return sentryWrapped;
  }
  var Ci = (function () {
      function n(t) {
        (this.name = n.id),
          (this.Zt = !1),
          (this.Vt = !1),
          (this.ct = f({ onerror: !0, onunhandledrejection: !0 }, t));
      }
      return (
        (n.prototype.setupOnce = function () {
          (Error.stackTraceLimit = 50),
            this.ct.onerror &&
              (q.log("Global Handler attached: onerror"), this.Yt()),
            this.ct.onunhandledrejection &&
              (q.log("Global Handler attached: onunhandledrejection"),
              this.Qt());
        }),
        (n.prototype.Yt = function () {
          var t = this;
          this.Zt ||
            (ct({
              callback: function (i) {
                var r = i.error,
                  e = Ht(),
                  o = e.getIntegration(n),
                  s = r && !0 === r.__sentry_own_request__;
                if (o && !Ri() && !s) {
                  var u = e.getClient(),
                    a =
                      void 0 === r && S(i.msg)
                        ? t.tn(i.msg, i.url, i.line, i.column)
                        : t.nn(
                            di(r || i.msg, void 0, {
                              attachStacktrace:
                                u && u.getOptions().attachStacktrace,
                              rejection: !1,
                            }),
                            i.url,
                            i.line,
                            i.column
                          );
                  xt(a, { handled: !1, type: "onerror" }),
                    e.captureEvent(a, { originalException: r });
                }
              },
              type: "error",
            }),
            (this.Zt = !0));
        }),
        (n.prototype.Qt = function () {
          var i = this;
          this.Vt ||
            (ct({
              callback: function (r) {
                var e = r;
                try {
                  "reason" in r
                    ? (e = r.reason)
                    : "detail" in r &&
                      "reason" in r.detail &&
                      (e = r.detail.reason);
                } catch (t) {}
                var o = Ht(),
                  s = o.getIntegration(n),
                  u = e && !0 === e.__sentry_own_request__;
                if (!s || Ri() || u) return !0;
                var a = o.getClient(),
                  c = x(e)
                    ? i.in(e)
                    : di(e, void 0, {
                        attachStacktrace: a && a.getOptions().attachStacktrace,
                        rejection: !0,
                      });
                (c.level = t.Severity.Error),
                  xt(c, { handled: !1, type: "onunhandledrejection" }),
                  o.captureEvent(c, { originalException: e });
              },
              type: "unhandledrejection",
            }),
            (this.Vt = !0));
        }),
        (n.prototype.tn = function (t, n, i, r) {
          var e,
            o = w(t) ? t.message : t,
            s = o.match(
              /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
            );
          s && ((e = s[1]), (o = s[2]));
          var u = { exception: { values: [{ type: e || "Error", value: o }] } };
          return this.nn(u, n, i, r);
        }),
        (n.prototype.in = function (t) {
          return {
            exception: {
              values: [
                {
                  type: "UnhandledRejection",
                  value:
                    "Non-Error promise rejection captured with value: " +
                    String(t),
                },
              ],
            },
          };
        }),
        (n.prototype.nn = function (t, n, i, r) {
          (t.exception = t.exception || {}),
            (t.exception.values = t.exception.values || []),
            (t.exception.values[0] = t.exception.values[0] || {}),
            (t.exception.values[0].stacktrace =
              t.exception.values[0].stacktrace || {}),
            (t.exception.values[0].stacktrace.frames =
              t.exception.values[0].stacktrace.frames || []);
          var e = isNaN(parseInt(r, 10)) ? void 0 : r,
            o = isNaN(parseInt(i, 10)) ? void 0 : i,
            s =
              S(n) && n.length > 0
                ? n
                : (function () {
                    var t = g();
                    try {
                      return t.document.location.href;
                    } catch (t) {
                      return "";
                    }
                  })();
          return (
            0 === t.exception.values[0].stacktrace.frames.length &&
              t.exception.values[0].stacktrace.frames.push({
                colno: e,
                filename: s,
                function: "?",
                in_app: !0,
                lineno: o,
              }),
            t
          );
        }),
        (n.id = "GlobalHandlers"),
        n
      );
    })(),
    Mi = [
      "EventTarget",
      "Window",
      "Node",
      "ApplicationCache",
      "AudioTrackList",
      "ChannelMergerNode",
      "CryptoOperation",
      "EventSource",
      "FileReader",
      "HTMLUnknownElement",
      "IDBDatabase",
      "IDBRequest",
      "IDBTransaction",
      "KeyOperation",
      "MediaController",
      "MessagePort",
      "ModalWindow",
      "Notification",
      "SVGElementInstance",
      "Screen",
      "TextTrack",
      "TextTrackCue",
      "TextTrackList",
      "WebSocket",
      "WebSocketWorker",
      "Worker",
      "XMLHttpRequest",
      "XMLHttpRequestEventTarget",
      "XMLHttpRequestUpload",
    ],
    Li = (function () {
      function t(n) {
        (this.name = t.id),
          (this.ct = f(
            {
              XMLHttpRequest: !0,
              eventTarget: !0,
              requestAnimationFrame: !0,
              setInterval: !0,
              setTimeout: !0,
            },
            n
          ));
      }
      return (
        (t.prototype.setupOnce = function () {
          var t = g();
          (this.ct.setTimeout && G(t, "setTimeout", this.rn.bind(this)),
          this.ct.setInterval && G(t, "setInterval", this.rn.bind(this)),
          this.ct.requestAnimationFrame &&
            G(t, "requestAnimationFrame", this.en.bind(this)),
          this.ct.XMLHttpRequest &&
            "XMLHttpRequest" in t &&
            G(XMLHttpRequest.prototype, "send", this.on.bind(this)),
          this.ct.eventTarget) &&
            (Array.isArray(this.ct.eventTarget)
              ? this.ct.eventTarget
              : Mi
            ).forEach(this.sn.bind(this));
        }),
        (t.prototype.rn = function (t) {
          return function () {
            for (var n = [], i = 0; i < arguments.length; i++)
              n[i] = arguments[i];
            var r = n[0];
            return (
              (n[0] = Ai(r, {
                mechanism: {
                  data: { function: J(t) },
                  handled: !0,
                  type: "instrument",
                },
              })),
              t.apply(this, n)
            );
          };
        }),
        (t.prototype.en = function (t) {
          return function (n) {
            return t.call(
              this,
              Ai(n, {
                mechanism: {
                  data: { function: "requestAnimationFrame", handler: J(t) },
                  handled: !0,
                  type: "instrument",
                },
              })
            );
          };
        }),
        (t.prototype.sn = function (t) {
          var n = g(),
            i = n[t] && n[t].prototype;
          i &&
            i.hasOwnProperty &&
            i.hasOwnProperty("addEventListener") &&
            (G(i, "addEventListener", function (n) {
              return function (i, r, e) {
                try {
                  "function" == typeof r.handleEvent &&
                    (r.handleEvent = Ai(r.handleEvent.bind(r), {
                      mechanism: {
                        data: {
                          function: "handleEvent",
                          handler: J(r),
                          target: t,
                        },
                        handled: !0,
                        type: "instrument",
                      },
                    }));
                } catch (t) {}
                return n.call(
                  this,
                  i,
                  Ai(r, {
                    mechanism: {
                      data: {
                        function: "addEventListener",
                        handler: J(r),
                        target: t,
                      },
                      handled: !0,
                      type: "instrument",
                    },
                  }),
                  e
                );
              };
            }),
            G(i, "removeEventListener", function (t) {
              return function (n, i, r) {
                var e,
                  o = i;
                try {
                  var s =
                    null === (e = o) || void 0 === e
                      ? void 0
                      : e.__sentry_wrapped__;
                  s && t.call(this, n, s, r);
                } catch (t) {}
                return t.call(this, n, o, r);
              };
            }));
        }),
        (t.prototype.on = function (t) {
          return function () {
            for (var n = [], i = 0; i < arguments.length; i++)
              n[i] = arguments[i];
            var r = this;
            return (
              ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
                function (t) {
                  t in r &&
                    "function" == typeof r[t] &&
                    G(r, t, function (n) {
                      var i = {
                        mechanism: {
                          data: { function: t, handler: J(n) },
                          handled: !0,
                          type: "instrument",
                        },
                      };
                      return (
                        n.__sentry_original__ &&
                          (i.mechanism.data.handler = J(n.__sentry_original__)),
                        Ai(n, i)
                      );
                    });
                }
              ),
              t.apply(this, n)
            );
          };
        }),
        (t.id = "TryCatch"),
        t
      );
    })(),
    Ui = (function () {
      function n(t) {
        (this.name = n.id),
          (this.ct = f(
            {
              console: !0,
              dom: !0,
              fetch: !0,
              history: !0,
              sentry: !0,
              xhr: !0,
            },
            t
          ));
      }
      return (
        (n.prototype.addSentryBreadcrumb = function (t) {
          this.ct.sentry &&
            Ht().addBreadcrumb(
              {
                category:
                  "sentry." +
                  ("transaction" === t.type ? "transaction" : "event"),
                event_id: t.event_id,
                level: t.level,
                message: Tt(t),
              },
              { event: t }
            );
        }),
        (n.prototype.setupOnce = function () {
          var t = this;
          this.ct.console &&
            ct({
              callback: function () {
                for (var n = [], i = 0; i < arguments.length; i++)
                  n[i] = arguments[i];
                t.un.apply(t, l(n));
              },
              type: "console",
            }),
            this.ct.dom &&
              ct({
                callback: function () {
                  for (var n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                  t.an.apply(t, l(n));
                },
                type: "dom",
              }),
            this.ct.xhr &&
              ct({
                callback: function () {
                  for (var n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                  t.cn.apply(t, l(n));
                },
                type: "xhr",
              }),
            this.ct.fetch &&
              ct({
                callback: function () {
                  for (var n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                  t.fn.apply(t, l(n));
                },
                type: "fetch",
              }),
            this.ct.history &&
              ct({
                callback: function () {
                  for (var n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                  t.hn.apply(t, l(n));
                },
                type: "history",
              });
        }),
        (n.prototype.un = function (n) {
          var i = {
            category: "console",
            data: { arguments: n.args, logger: "console" },
            level: t.Severity.fromString(n.level),
            message: z(n.args, " "),
          };
          if ("assert" === n.level) {
            if (!1 !== n.args[0]) return;
            (i.message =
              "Assertion failed: " +
              (z(n.args.slice(1), " ") || "console.assert")),
              (i.data.arguments = n.args.slice(1));
          }
          Ht().addBreadcrumb(i, { input: n.args, level: n.level });
        }),
        (n.prototype.an = function (t) {
          var n,
            i =
              "object" == typeof this.ct.dom
                ? this.ct.dom.serializeAttribute
                : void 0;
          "string" == typeof i && (i = [i]);
          try {
            n = t.event.target ? D(t.event.target, i) : D(t.event, i);
          } catch (t) {
            n = "<unknown>";
          }
          0 !== n.length &&
            Ht().addBreadcrumb(
              { category: "ui." + t.name, message: n },
              { event: t.event, name: t.name, global: t.global }
            );
        }),
        (n.prototype.cn = function (t) {
          if (t.endTimestamp) {
            if (t.xhr.__sentry_own_request__) return;
            var n = t.xhr.__sentry_xhr__ || {},
              i = n.method,
              r = n.url,
              e = n.status_code,
              o = n.body;
            Ht().addBreadcrumb(
              {
                category: "xhr",
                data: { method: i, url: r, status_code: e },
                type: "http",
              },
              { xhr: t.xhr, input: o }
            );
          } else;
        }),
        (n.prototype.fn = function (n) {
          n.endTimestamp &&
            ((n.fetchData.url.match(/sentry_key/) &&
              "POST" === n.fetchData.method) ||
              (n.error
                ? Ht().addBreadcrumb(
                    {
                      category: "fetch",
                      data: n.fetchData,
                      level: t.Severity.Error,
                      type: "http",
                    },
                    { data: n.error, input: n.args }
                  )
                : Ht().addBreadcrumb(
                    {
                      category: "fetch",
                      data: f(f({}, n.fetchData), {
                        status_code: n.response.status,
                      }),
                      type: "http",
                    },
                    { input: n.args, response: n.response }
                  )));
        }),
        (n.prototype.hn = function (t) {
          var n = g(),
            i = t.from,
            r = t.to,
            e = wt(n.location.href),
            o = wt(i),
            s = wt(r);
          o.path || (o = e),
            e.protocol === s.protocol && e.host === s.host && (r = s.relative),
            e.protocol === o.protocol && e.host === o.host && (i = o.relative),
            Ht().addBreadcrumb({
              category: "navigation",
              data: { from: i, to: r },
            });
        }),
        (n.id = "Breadcrumbs"),
        n
      );
    })(),
    Fi = "cause",
    qi = 5,
    Bi = (function () {
      function t(n) {
        void 0 === n && (n = {}),
          (this.name = t.id),
          (this.vn = n.key || Fi),
          (this.j = n.limit || qi);
      }
      return (
        (t.prototype.setupOnce = function () {
          Ut(function (n, i) {
            var r = Ht().getIntegration(t);
            if (r) {
              var e = r.dn && r.dn.bind(r);
              return "function" == typeof e ? e(n, i) : n;
            }
            return n;
          });
        }),
        (t.prototype.dn = function (t, n) {
          if (
            !(
              t.exception &&
              t.exception.values &&
              n &&
              k(n.originalException, Error)
            )
          )
            return t;
          var i = this.ln(n.originalException, this.vn);
          return (t.exception.values = l(i, t.exception.values)), t;
        }),
        (t.prototype.ln = function (t, n, i) {
          if (
            (void 0 === i && (i = []),
            !k(t[n], Error) || i.length + 1 >= this.j)
          )
            return i;
          var r = fi(oi(t[n]));
          return this.ln(t[n], n, l([r], i));
        }),
        (t.id = "LinkedErrors"),
        t
      );
    })(),
    Pi = g(),
    Ji = (function () {
      function t() {
        this.name = t.id;
      }
      return (
        (t.prototype.setupOnce = function () {
          Ut(function (n) {
            var i, r, e;
            if (Ht().getIntegration(t)) {
              if (!Pi.navigator && !Pi.location && !Pi.document) return n;
              var o =
                  (null === (i = n.request) || void 0 === i ? void 0 : i.url) ||
                  (null === (r = Pi.location) || void 0 === r
                    ? void 0
                    : r.href),
                s = (Pi.document || {}).referrer,
                u = (Pi.navigator || {}).userAgent,
                a = f(
                  f(
                    f(
                      {},
                      null === (e = n.request) || void 0 === e
                        ? void 0
                        : e.headers
                    ),
                    s && { Referer: s }
                  ),
                  u && { "User-Agent": u }
                ),
                c = f(f({}, o && { url: o }), { headers: a });
              return f(f({}, n), { request: c });
            }
            return n;
          });
        }),
        (t.id = "UserAgent"),
        t
      );
    })(),
    Hi = (function () {
      function t() {
        this.name = t.id;
      }
      return (
        (t.prototype.setupOnce = function (n, i) {
          n(function (n) {
            var r = i().getIntegration(t);
            if (r) {
              try {
                if (r.Nt(n, r.pn))
                  return (
                    q.warn(
                      "Event dropped due to being a duplicate of previously captured event."
                    ),
                    null
                  );
              } catch (t) {
                return (r.pn = n);
              }
              return (r.pn = n);
            }
            return n;
          });
        }),
        (t.prototype.Nt = function (t, n) {
          return !!n && (!!this.yn(t, n) || !!this.mn(t, n));
        }),
        (t.prototype.yn = function (t, n) {
          var i = t.message,
            r = n.message;
          return (
            !(!i && !r) &&
            !((i && !r) || (!i && r)) &&
            i === r &&
            !!this.gn(t, n) &&
            !!this.bn(t, n)
          );
        }),
        (t.prototype.wn = function (t) {
          var n = t.exception;
          if (n)
            try {
              return n.values[0].stacktrace.frames;
            } catch (t) {
              return;
            }
          else if (t.stacktrace) return t.stacktrace.frames;
        }),
        (t.prototype.bn = function (t, n) {
          var i = this.wn(t),
            r = this.wn(n);
          if (!i && !r) return !0;
          if ((i && !r) || (!i && r)) return !1;
          if (((i = i), (r = r).length !== i.length)) return !1;
          for (var e = 0; e < r.length; e++) {
            var o = r[e],
              s = i[e];
            if (
              o.filename !== s.filename ||
              o.lineno !== s.lineno ||
              o.colno !== s.colno ||
              o.function !== s.function
            )
              return !1;
          }
          return !0;
        }),
        (t.prototype.Tn = function (t) {
          return t.exception && t.exception.values && t.exception.values[0];
        }),
        (t.prototype.mn = function (t, n) {
          var i = this.Tn(n),
            r = this.Tn(t);
          return (
            !(!i || !r) &&
            i.type === r.type &&
            i.value === r.value &&
            !!this.gn(t, n) &&
            !!this.bn(t, n)
          );
        }),
        (t.prototype.gn = function (t, n) {
          var i = t.fingerprint,
            r = n.fingerprint;
          if (!i && !r) return !0;
          if ((i && !r) || (!i && r)) return !1;
          (i = i), (r = r);
          try {
            return !(i.join("") !== r.join(""));
          } catch (t) {
            return !1;
          }
        }),
        (t.id = "Dedupe"),
        t
      );
    })(),
    zi = Object.freeze({
      __proto__: null,
      GlobalHandlers: Ci,
      TryCatch: Li,
      Breadcrumbs: Ui,
      LinkedErrors: Bi,
      UserAgent: Ji,
      Dedupe: Hi,
    }),
    Xi = (function (t) {
      function n(n) {
        void 0 === n && (n = {});
        return (
          (n.Pt = n.Pt || {}),
          (n.Pt.sdk = n.Pt.sdk || {
            name: "sentry.javascript.browser",
            packages: [{ name: "npm:@hy-sentry/browser", version: Wn }],
            version: Wn,
          }),
          t.call(this, Di, n) || this
        );
      }
      return (
        i(n, t),
        (n.prototype.showReportDialog = function (t) {
          void 0 === t && (t = {}),
            g().document &&
              (this.lt()
                ? (function (t) {
                    if ((void 0 === t && (t = {}), Ni.document))
                      if (t.eventId)
                        if (t.dsn) {
                          var n = Ni.document.createElement("script");
                          (n.async = !0),
                            (n.src = new Zt(t.dsn).getReportDialogEndpoint(t)),
                            t.onLoad && (n.onload = t.onLoad);
                          var i = Ni.document.head || Ni.document.body;
                          i && i.appendChild(n);
                        } else
                          q.error(
                            "Missing dsn option in showReportDialog call"
                          );
                      else
                        q.error(
                          "Missing eventId option in showReportDialog call"
                        );
                  })(f(f({}, t), { dsn: t.dsn || this.getDsn() }))
                : q.error(
                    "Trying to call showReportDialog with Sentry Client disabled"
                  ));
        }),
        (n.prototype.bt = function (n, i, r) {
          return (
            (n.platform = n.platform || "javascript"),
            t.prototype.bt.call(this, n, i, r)
          );
        }),
        (n.prototype.Et = function (n) {
          var i = this.getIntegration(Ui);
          i && i.addSentryBreadcrumb(n), t.prototype.Et.call(this, n);
        }),
        n
      );
    })(tn),
    Gi = [
      new Zn(),
      new $n(),
      new Li(),
      new Ui(),
      new Ci(),
      new Bi(),
      new Hi(),
      new Ji(),
    ];
  var Wi = {},
    $i = g();
  $i.Sentry && $i.Sentry.Integrations && (Wi = $i.Sentry.Integrations);
  var Ki,
    Zi = f(f(f({}, Wi), Vn), zi);
  !(function (t) {
    (t.Ok = "ok"),
      (t.DeadlineExceeded = "deadline_exceeded"),
      (t.Unauthenticated = "unauthenticated"),
      (t.PermissionDenied = "permission_denied"),
      (t.NotFound = "not_found"),
      (t.ResourceExhausted = "resource_exhausted"),
      (t.InvalidArgument = "invalid_argument"),
      (t.Unimplemented = "unimplemented"),
      (t.Unavailable = "unavailable"),
      (t.InternalError = "internal_error"),
      (t.UnknownError = "unknown_error"),
      (t.Cancelled = "cancelled"),
      (t.AlreadyExists = "already_exists"),
      (t.FailedPrecondition = "failed_precondition"),
      (t.Aborted = "aborted"),
      (t.OutOfRange = "out_of_range"),
      (t.DataLoss = "data_loss");
  })(Ki || (Ki = {})),
    (function (t) {
      t.fromHttpCode = function (n) {
        if (n < 400) return t.Ok;
        if (n >= 400 && n < 500)
          switch (n) {
            case 401:
              return t.Unauthenticated;
            case 403:
              return t.PermissionDenied;
            case 404:
              return t.NotFound;
            case 409:
              return t.AlreadyExists;
            case 413:
              return t.FailedPrecondition;
            case 429:
              return t.ResourceExhausted;
            default:
              return t.InvalidArgument;
          }
        if (n >= 500 && n < 600)
          switch (n) {
            case 501:
              return t.Unimplemented;
            case 503:
              return t.Unavailable;
            case 504:
              return t.DeadlineExceeded;
            default:
              return t.InternalError;
          }
        return t.UnknownError;
      };
    })(Ki || (Ki = {}));
  var Vi = new RegExp(
    "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
  );
  function Yi(t) {
    var n;
    return (
      void 0 === t &&
        (t =
          null === (n = Ht().getClient()) || void 0 === n
            ? void 0
            : n.getOptions()),
      !!t && ("tracesSampleRate" in t || "tracesSampler" in t)
    );
  }
  function Qi(t) {
    var n, i;
    return (
      void 0 === t && (t = Ht()),
      null === (i = null === (n = t) || void 0 === n ? void 0 : n.getScope()) ||
      void 0 === i
        ? void 0
        : i.getTransaction()
    );
  }
  function tr(t) {
    return t / 1e3;
  }
  function nr() {
    var t = Qi();
    t &&
      (q.log(
        "[Tracing] Transaction: " +
          Ki.InternalError +
          " -> Global error occured"
      ),
      t.setStatus(Ki.InternalError));
  }
  var ir = (function () {
      function t(t) {
        void 0 === t && (t = 1e3), (this.spans = []), (this.Sn = t);
      }
      return (
        (t.prototype.add = function (t) {
          this.spans.length > this.Sn
            ? (t.spanRecorder = void 0)
            : this.spans.push(t);
        }),
        t
      );
    })(),
    rr = (function () {
      function t(t) {
        if (
          ((this.traceId = bt()),
          (this.spanId = bt().substring(16)),
          (this.startTimestamp = At()),
          (this.tags = {}),
          (this.data = {}),
          !t)
        )
          return this;
        t.traceId && (this.traceId = t.traceId),
          t.spanId && (this.spanId = t.spanId),
          t.parentSpanId && (this.parentSpanId = t.parentSpanId),
          "sampled" in t && (this.sampled = t.sampled),
          t.op && (this.op = t.op),
          t.description && (this.description = t.description),
          t.data && (this.data = t.data),
          t.tags && (this.tags = t.tags),
          t.status && (this.status = t.status),
          t.startTimestamp && (this.startTimestamp = t.startTimestamp),
          t.endTimestamp && (this.endTimestamp = t.endTimestamp);
      }
      return (
        (t.prototype.child = function (t) {
          return this.startChild(t);
        }),
        (t.prototype.startChild = function (n) {
          var i = new t(
            f(f({}, n), {
              parentSpanId: this.spanId,
              sampled: this.sampled,
              traceId: this.traceId,
            })
          );
          return (
            (i.spanRecorder = this.spanRecorder),
            i.spanRecorder && i.spanRecorder.add(i),
            (i.transaction = this.transaction),
            i
          );
        }),
        (t.prototype.setTag = function (t, n) {
          var i;
          return (
            (this.tags = f(f({}, this.tags), (((i = {})[t] = n), i))), this
          );
        }),
        (t.prototype.setData = function (t, n) {
          var i;
          return (
            (this.data = f(f({}, this.data), (((i = {})[t] = n), i))), this
          );
        }),
        (t.prototype.setStatus = function (t) {
          return (this.status = t), this;
        }),
        (t.prototype.setHttpStatus = function (t) {
          this.setTag("http.status_code", String(t));
          var n = Ki.fromHttpCode(t);
          return n !== Ki.UnknownError && this.setStatus(n), this;
        }),
        (t.prototype.isSuccess = function () {
          return this.status === Ki.Ok;
        }),
        (t.prototype.finish = function (t) {
          this.endTimestamp = "number" == typeof t ? t : At();
        }),
        (t.prototype.toTraceparent = function () {
          var t = "";
          return (
            void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"),
            this.traceId + "-" + this.spanId + t
          );
        }),
        (t.prototype.toContext = function () {
          return tt({
            data: this.data,
            description: this.description,
            endTimestamp: this.endTimestamp,
            op: this.op,
            parentSpanId: this.parentSpanId,
            sampled: this.sampled,
            spanId: this.spanId,
            startTimestamp: this.startTimestamp,
            status: this.status,
            tags: this.tags,
            traceId: this.traceId,
          });
        }),
        (t.prototype.updateWithContext = function (t) {
          var n, i, r, e, o;
          return (
            (this.data = null != (n = t.data) ? n : {}),
            (this.description = t.description),
            (this.endTimestamp = t.endTimestamp),
            (this.op = t.op),
            (this.parentSpanId = t.parentSpanId),
            (this.sampled = t.sampled),
            (this.spanId = null != (i = t.spanId) ? i : this.spanId),
            (this.startTimestamp =
              null != (r = t.startTimestamp) ? r : this.startTimestamp),
            (this.status = t.status),
            (this.tags = null != (e = t.tags) ? e : {}),
            (this.traceId = null != (o = t.traceId) ? o : this.traceId),
            this
          );
        }),
        (t.prototype.getTraceContext = function () {
          return tt({
            data: Object.keys(this.data).length > 0 ? this.data : void 0,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            trace_id: this.traceId,
          });
        }),
        (t.prototype.toJSON = function () {
          return tt({
            data: Object.keys(this.data).length > 0 ? this.data : void 0,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            start_timestamp: this.startTimestamp,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            timestamp: this.endTimestamp,
            trace_id: this.traceId,
          });
        }),
        t
      );
    })(),
    er = (function (t) {
      function n(n, i) {
        var r = t.call(this, n) || this;
        return (
          (r.xn = {}),
          (r.En = Ht()),
          k(i, Bt) && (r.En = i),
          (r.name = n.name || ""),
          (r.metadata = n.metadata || {}),
          (r.On = n.trimEnd),
          (r.transaction = r),
          r
        );
      }
      return (
        i(n, t),
        (n.prototype.setName = function (t) {
          this.name = t;
        }),
        (n.prototype.initSpanRecorder = function (t) {
          void 0 === t && (t = 1e3),
            this.spanRecorder || (this.spanRecorder = new ir(t)),
            this.spanRecorder.add(this);
        }),
        (n.prototype.setMeasurements = function (t) {
          this.xn = f({}, t);
        }),
        (n.prototype.setMetadata = function (t) {
          this.metadata = f(f({}, this.metadata), t);
        }),
        (n.prototype.finish = function (n) {
          var i,
            r,
            e,
            o,
            s,
            u = this;
          if (void 0 === this.endTimestamp) {
            if (
              (this.name ||
                (q.warn(
                  "Transaction has no name, falling back to `<unlabeled transaction>`."
                ),
                (this.name = "<unlabeled transaction>")),
              t.prototype.finish.call(this, n),
              !0 !== this.sampled)
            )
              return (
                q.log(
                  "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
                ),
                void (
                  null ===
                    (s =
                      null ===
                        (e =
                          null === (i = this.En.getClient()) || void 0 === i
                            ? void 0
                            : (r = i).getTransport) || void 0 === e
                        ? void 0
                        : (o = e.call(r)).recordLostEvent) ||
                  void 0 === s ||
                  s.call(o, c.SampleRate, "transaction")
                )
              );
            var a = this.spanRecorder
              ? this.spanRecorder.spans.filter(function (t) {
                  return t !== u && t.endTimestamp;
                })
              : [];
            this.On &&
              a.length > 0 &&
              (this.endTimestamp = a.reduce(function (t, n) {
                return t.endTimestamp && n.endTimestamp
                  ? t.endTimestamp > n.endTimestamp
                    ? t
                    : n
                  : t;
              }).endTimestamp);
            var f = {
              contexts: { trace: this.getTraceContext() },
              spans: a,
              start_timestamp: this.startTimestamp,
              tags: this.tags,
              timestamp: this.endTimestamp,
              transaction: this.name,
              type: "transaction",
              debug_meta: this.metadata,
            };
            return (
              Object.keys(this.xn).length > 0 &&
                (q.log(
                  "[Measurements] Adding measurements to transaction",
                  JSON.stringify(this.xn, void 0, 2)
                ),
                (f.measurements = this.xn)),
              q.log(
                "[Tracing] Finishing " +
                  this.op +
                  " transaction: " +
                  this.name +
                  "."
              ),
              this.En.captureEvent(f)
            );
          }
        }),
        (n.prototype.toContext = function () {
          var n = t.prototype.toContext.call(this);
          return tt(f(f({}, n), { name: this.name, trimEnd: this.On }));
        }),
        (n.prototype.updateWithContext = function (n) {
          var i;
          return (
            t.prototype.updateWithContext.call(this, n),
            (this.name = null != (i = n.name) ? i : ""),
            (this.On = n.trimEnd),
            this
          );
        }),
        n
      );
    })(rr),
    or = 1e3,
    sr = (function (t) {
      function n(n, i, r, e) {
        void 0 === r && (r = "");
        var o = t.call(this, e) || this;
        return (o._n = n), (o.jn = i), (o.transactionSpanId = r), o;
      }
      return (
        i(n, t),
        (n.prototype.add = function (n) {
          var i = this;
          n.spanId !== this.transactionSpanId &&
            ((n.finish = function (t) {
              (n.endTimestamp = "number" == typeof t ? t : At()),
                i.jn(n.spanId);
            }),
            void 0 === n.endTimestamp && this._n(n.spanId)),
            t.prototype.add.call(this, n);
        }),
        n
      );
    })(ir),
    ur = (function (t) {
      function n(n, i, r, e) {
        void 0 === r && (r = or), void 0 === e && (e = !1);
        var o = t.call(this, n, i) || this;
        return (
          (o.kn = i),
          (o.Dn = r),
          (o.Nn = e),
          (o.activities = {}),
          (o.In = 0),
          (o.Rn = !1),
          (o.An = []),
          i &&
            e &&
            (ar(i),
            q.log("Setting idle transaction on scope. Span ID: " + o.spanId),
            i.configureScope(function (t) {
              return t.setSpan(o);
            })),
          (o.Cn = setTimeout(function () {
            o.Rn || o.finish();
          }, o.Dn)),
          o
        );
      }
      return (
        i(n, t),
        (n.prototype.finish = function (n) {
          var i,
            r,
            e = this;
          if (
            (void 0 === n && (n = At()),
            (this.Rn = !0),
            (this.activities = {}),
            this.spanRecorder)
          ) {
            q.log(
              "[Tracing] finishing IdleTransaction",
              new Date(1e3 * n).toISOString(),
              this.op
            );
            try {
              for (var o = v(this.An), s = o.next(); !s.done; s = o.next()) {
                (0, s.value)(this, n);
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                s && !s.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            (this.spanRecorder.spans = this.spanRecorder.spans.filter(function (
              t
            ) {
              if (t.spanId === e.spanId) return !0;
              t.endTimestamp ||
                ((t.endTimestamp = n),
                t.setStatus(Ki.Cancelled),
                q.log(
                  "[Tracing] cancelling span since transaction ended early",
                  JSON.stringify(t, void 0, 2)
                ));
              var i = t.startTimestamp < n;
              return (
                i ||
                  q.log(
                    "[Tracing] discarding Span since it happened after Transaction was finished",
                    JSON.stringify(t, void 0, 2)
                  ),
                i
              );
            })),
              q.log("[Tracing] flushing IdleTransaction");
          } else q.log("[Tracing] No active IdleTransaction");
          return this.Nn && ar(this.kn), t.prototype.finish.call(this, n);
        }),
        (n.prototype.registerBeforeFinishCallback = function (t) {
          this.An.push(t);
        }),
        (n.prototype.initSpanRecorder = function (t) {
          var n = this;
          if (!this.spanRecorder) {
            (this.spanRecorder = new sr(
              function (t) {
                n.Rn || n._n(t);
              },
              function (t) {
                n.Rn || n.jn(t);
              },
              this.spanId,
              t
            )),
              q.log("Starting heartbeat"),
              this.Mn();
          }
          this.spanRecorder.add(this);
        }),
        (n.prototype._n = function (t) {
          this.Cn && (clearTimeout(this.Cn), (this.Cn = void 0)),
            q.log("[Tracing] pushActivity: " + t),
            (this.activities[t] = !0),
            q.log(
              "[Tracing] new activities count",
              Object.keys(this.activities).length
            );
        }),
        (n.prototype.jn = function (t) {
          var n = this;
          if (
            (this.activities[t] &&
              (q.log("[Tracing] popActivity " + t),
              delete this.activities[t],
              q.log(
                "[Tracing] new activities count",
                Object.keys(this.activities).length
              )),
            0 === Object.keys(this.activities).length)
          ) {
            var i = this.Dn,
              r = At() + i / 1e3;
            setTimeout(function () {
              n.Rn || n.finish(r);
            }, i);
          }
        }),
        (n.prototype.Ln = function () {
          if (!this.Rn) {
            var t = Object.keys(this.activities).join("");
            t === this.Un ? (this.In += 1) : (this.In = 1),
              (this.Un = t),
              this.In >= 3
                ? (q.log(
                    "[Tracing] Transaction finished because of no change for 3 heart beats"
                  ),
                  this.setStatus(Ki.DeadlineExceeded),
                  this.setTag("heartbeat", "failed"),
                  this.finish())
                : this.Mn();
          }
        }),
        (n.prototype.Mn = function () {
          var t = this;
          q.log("pinging Heartbeat -> current counter: " + this.In),
            setTimeout(function () {
              t.Ln();
            }, 5e3);
        }),
        n
      );
    })(er);
  function ar(t) {
    if (t) {
      var n = t.getScope();
      if (n) n.getTransaction() && n.setSpan(void 0);
    }
  }
  function cr() {
    var t = this.getScope();
    if (t) {
      var n = t.getSpan();
      if (n) return { "sentry-trace": n.toTraceparent() };
    }
    return {};
  }
  function fr(t, n, i) {
    return Yi(n)
      ? void 0 !== t.sampled
        ? (t.setMetadata({ transactionSampling: { method: a.Explicit } }), t)
        : ("function" == typeof n.tracesSampler
            ? ((r = n.tracesSampler(i)),
              t.setMetadata({
                transactionSampling: { method: a.Sampler, rate: Number(r) },
              }))
            : void 0 !== i.parentSampled
            ? ((r = i.parentSampled),
              t.setMetadata({ transactionSampling: { method: a.Inheritance } }))
            : ((r = n.tracesSampleRate),
              t.setMetadata({
                transactionSampling: { method: a.Rate, rate: Number(r) },
              })),
          (function (t) {
            if (isNaN(t) || ("number" != typeof t && "boolean" != typeof t))
              return (
                q.warn(
                  "[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " +
                    JSON.stringify(t) +
                    " of type " +
                    JSON.stringify(typeof t) +
                    "."
                ),
                !1
              );
            if (t < 0 || t > 1)
              return (
                q.warn(
                  "[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " +
                    t +
                    "."
                ),
                !1
              );
            return !0;
          })(r)
            ? r
              ? ((t.sampled = Math.random() < r),
                t.sampled
                  ? (q.log(
                      "[Tracing] starting " + t.op + " transaction - " + t.name
                    ),
                    t)
                  : (q.log(
                      "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
                        Number(r) +
                        ")"
                    ),
                    t))
              : (q.log(
                  "[Tracing] Discarding transaction because " +
                    ("function" == typeof n.tracesSampler
                      ? "tracesSampler returned 0 or false"
                      : "a negative sampling decision was inherited or tracesSampleRate is set to 0")
                ),
                (t.sampled = !1),
                t)
            : (q.warn(
                "[Tracing] Discarding transaction because of invalid sample rate."
              ),
              (t.sampled = !1),
              t))
      : ((t.sampled = !1), t);
    var r;
  }
  function hr(t, n) {
    var i,
      r,
      e =
        (null === (i = this.getClient()) || void 0 === i
          ? void 0
          : i.getOptions()) || {},
      o = new er(t, this);
    return (
      (o = fr(
        o,
        e,
        f({ parentSampled: t.parentSampled, transactionContext: t }, n)
      )).sampled &&
        o.initSpanRecorder(
          null === (r = e.xt) || void 0 === r ? void 0 : r.maxSpans
        ),
      o
    );
  }
  function vr() {
    var t = Pt();
    if (t.__SENTRY__) {
      var n = {
          mongodb: function () {
            return new (y(module, "./integrations/mongo").Mongo)();
          },
          mongoose: function () {
            return new (y(module, "./integrations/mongo").Mongo)({
              mongoose: !0,
            });
          },
          mysql: function () {
            return new (y(module, "./integrations/mysql").Mysql)();
          },
          pg: function () {
            return new (y(module, "./integrations/postgres").Postgres)();
          },
        },
        i = Object.keys(n)
          .filter(function (t) {
            return !!(function (t) {
              var n;
              try {
                n = y(module, t);
              } catch (t) {}
              try {
                var i = y(module, "process").cwd;
                n = y(module, i() + "/node_modules/" + t);
              } catch (t) {}
              return n;
            })(t);
          })
          .map(function (t) {
            try {
              return n[t]();
            } catch (t) {
              return;
            }
          })
          .filter(function (t) {
            return t;
          });
      i.length > 0 &&
        (t.__SENTRY__.integrations = l(t.__SENTRY__.integrations || [], i));
    }
  }
  function dr() {
    var t;
    (t = Pt()).__SENTRY__ &&
      ((t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}),
      t.__SENTRY__.extensions.startTransaction ||
        (t.__SENTRY__.extensions.startTransaction = hr),
      t.__SENTRY__.extensions.traceHeaders ||
        (t.__SENTRY__.extensions.traceHeaders = cr)),
      p() && vr(),
      ct({ callback: nr, type: "error" }),
      ct({ callback: nr, type: "unhandledrejection" });
  }
  var lr = g();
  var pr = function (t, n, i) {
      var r;
      return function (e) {
        n.value >= 0 &&
          (e || i) &&
          ((n.delta = n.value - (r || 0)),
          (n.delta || void 0 === r) && ((r = n.value), t(n)));
      };
    },
    yr = function (t, n) {
      return {
        name: t,
        value: null != n ? n : -1,
        delta: 0,
        entries: [],
        id:
          "v2-" +
          Date.now() +
          "-" +
          (Math.floor(Math.random() * (9e12 - 1)) + 1e12),
      };
    },
    mr = function (t, n) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
          if ("first-input" === t && !("PerformanceEventTiming" in self))
            return;
          var i = new PerformanceObserver(function (t) {
            return t.getEntries().map(n);
          });
          return i.observe({ type: t, buffered: !0 }), i;
        }
      } catch (t) {}
    },
    gr = function (t, n) {
      var i = function (r) {
        ("pagehide" !== r.type && "hidden" !== g().document.visibilityState) ||
          (t(r),
          n &&
            (removeEventListener("visibilitychange", i, !0),
            removeEventListener("pagehide", i, !0)));
      };
      addEventListener("visibilitychange", i, !0),
        addEventListener("pagehide", i, !0);
    },
    br = -1,
    wr = function () {
      return (
        br < 0 &&
          ((br = "hidden" === g().document.visibilityState ? 0 : 1 / 0),
          gr(function (t) {
            var n = t.timeStamp;
            br = n;
          }, !0)),
        {
          get firstHiddenTime() {
            return br;
          },
        }
      );
    },
    Tr = {},
    Sr = g(),
    xr = { Fn: !1 },
    Er = (function () {
      function t(t) {
        var n, i;
        (this.xn = {}),
          (this.qn = 0),
          !p() &&
            (null === (n = Sr) || void 0 === n ? void 0 : n.performance) &&
            (null === (i = Sr) || void 0 === i ? void 0 : i.document) &&
            (Sr.performance.mark && Sr.performance.mark("sentry-tracing-init"),
            this.Bn(),
            this.Pn(t.Fn),
            this.Jn());
      }
      return (
        (t.prototype.addPerformanceEntries = function (t) {
          var n = this;
          if (Sr && Sr.performance && Sr.performance.getEntries && Ct) {
            q.log("[Tracing] Adding & adjusting spans using Performance API");
            var i,
              r,
              e,
              o,
              s,
              u = tr(Ct);
            if (Sr.document && Sr.document.scripts)
              for (var a = 0; a < Sr.document.scripts.length; a++)
                if ("true" === Sr.document.scripts[a].dataset.entry) {
                  i = Sr.document.scripts[a].src;
                  break;
                }
            if (
              (Sr.performance
                .getEntries()
                .slice(this.qn)
                .forEach(function (a) {
                  var c = tr(a.startTime),
                    f = tr(a.duration);
                  if (!("navigation" === t.op && u + c < t.startTimestamp))
                    switch (a.entryType) {
                      case "navigation":
                        !(function (t, n, i) {
                          Or({
                            transaction: t,
                            entry: n,
                            event: "unloadEvent",
                            timeOrigin: i,
                          }),
                            Or({
                              transaction: t,
                              entry: n,
                              event: "redirect",
                              timeOrigin: i,
                            }),
                            Or({
                              transaction: t,
                              entry: n,
                              event: "domContentLoadedEvent",
                              timeOrigin: i,
                            }),
                            Or({
                              transaction: t,
                              entry: n,
                              event: "loadEvent",
                              timeOrigin: i,
                            }),
                            Or({
                              transaction: t,
                              entry: n,
                              event: "connect",
                              timeOrigin: i,
                            }),
                            Or({
                              transaction: t,
                              entry: n,
                              event: "secureConnection",
                              timeOrigin: i,
                              eventEnd: "connectEnd",
                              description: "TLS/SSL",
                            }),
                            Or({
                              transaction: t,
                              entry: n,
                              event: "fetch",
                              timeOrigin: i,
                              eventEnd: "domainLookupStart",
                              description: "cache",
                            }),
                            Or({
                              transaction: t,
                              entry: n,
                              event: "domainLookup",
                              timeOrigin: i,
                              description: "DNS",
                            }),
                            (function (t, n, i) {
                              _r(t, {
                                op: "browser",
                                description: "request",
                                startTimestamp: i + tr(n.requestStart),
                                endTimestamp: i + tr(n.responseEnd),
                              }),
                                _r(t, {
                                  op: "browser",
                                  description: "response",
                                  startTimestamp: i + tr(n.responseStart),
                                  endTimestamp: i + tr(n.responseEnd),
                                });
                            })(t, n, i);
                        })(t, a, u),
                          (o = u + tr(a.responseStart)),
                          (s = u + tr(a.requestStart));
                        break;
                      case "mark":
                      case "paint":
                      case "measure":
                        var h = (function (t, n, i, r, e) {
                          var o = e + i,
                            s = o + r;
                          return (
                            _r(t, {
                              description: n.name,
                              endTimestamp: s,
                              op: n.entryType,
                              startTimestamp: o,
                            }),
                            o
                          );
                        })(t, a, c, f, u);
                        void 0 === e &&
                          "sentry-tracing-init" === a.name &&
                          (e = h);
                        var v = wr(),
                          d = a.startTime < v.firstHiddenTime;
                        "first-paint" === a.name &&
                          d &&
                          (q.log("[Measurements] Adding FP"),
                          (n.xn.fp = { value: a.startTime }),
                          (n.xn["mark.fp"] = { value: h })),
                          "first-contentful-paint" === a.name &&
                            d &&
                            (q.log("[Measurements] Adding FCP"),
                            (n.xn.fcp = { value: a.startTime }),
                            (n.xn["mark.fcp"] = { value: h }));
                        break;
                      case "resource":
                        var l = a.name.replace(Sr.location.origin, ""),
                          p = (function (t, n, i, r, e, o) {
                            if (
                              "xmlhttprequest" === n.initiatorType ||
                              "fetch" === n.initiatorType
                            )
                              return;
                            var s = {};
                            "transferSize" in n &&
                              (s["Transfer Size"] = n.transferSize);
                            "encodedBodySize" in n &&
                              (s["Encoded Body Size"] = n.encodedBodySize);
                            "decodedBodySize" in n &&
                              (s["Decoded Body Size"] = n.decodedBodySize);
                            var u = o + r,
                              a = u + e;
                            return (
                              _r(t, {
                                description: i,
                                endTimestamp: a,
                                op: n.initiatorType
                                  ? "resource." + n.initiatorType
                                  : "resource",
                                startTimestamp: u,
                                data: s,
                              }),
                              a
                            );
                          })(t, a, l, c, f, u);
                        void 0 === r && (i || "").indexOf(l) > -1 && (r = p);
                    }
                }),
              void 0 !== r &&
                void 0 !== e &&
                _r(t, {
                  description: "evaluation",
                  endTimestamp: e,
                  op: "script",
                  startTimestamp: r,
                }),
              (this.qn = Math.max(performance.getEntries().length - 1, 0)),
              this.Hn(t),
              "pageload" === t.op)
            ) {
              var c = tr(Ct);
              "number" == typeof o &&
                (q.log("[Measurements] Adding TTFB"),
                (this.xn.ttfb = { value: 1e3 * (o - t.startTimestamp) }),
                "number" == typeof s &&
                  s <= o &&
                  (this.xn["ttfb.requestTime"] = { value: 1e3 * (o - s) })),
                ["fcp", "fp", "lcp"].forEach(function (i) {
                  if (n.xn[i] && !(c >= t.startTimestamp)) {
                    var r = n.xn[i].value,
                      e = c + tr(r),
                      o = Math.abs(1e3 * (e - t.startTimestamp)),
                      s = o - r;
                    q.log(
                      "[Measurements] Normalized " +
                        i +
                        " from " +
                        r +
                        " to " +
                        o +
                        " (" +
                        s +
                        ")"
                    ),
                      (n.xn[i].value = o);
                  }
                }),
                this.xn["mark.fid"] &&
                  this.xn.fid &&
                  _r(t, {
                    description: "first input delay",
                    endTimestamp:
                      this.xn["mark.fid"].value + tr(this.xn.fid.value),
                    op: "web.vitals",
                    startTimestamp: this.xn["mark.fid"].value,
                  }),
                "fcp" in this.xn || delete this.xn.cls,
                t.setMeasurements(this.xn),
                this.zn(t);
            }
          }
        }),
        (t.prototype.zn = function (t) {
          this.Xn &&
            (q.log("[Measurements] Adding LCP Data"),
            this.Xn.element && t.setTag("lcp.element", D(this.Xn.element)),
            this.Xn.id && t.setTag("lcp.id", this.Xn.id),
            this.Xn.url &&
              t.setTag("lcp.url", this.Xn.url.trim().slice(0, 200)),
            t.setTag("lcp.size", this.Xn.size)),
            this.Gn &&
              this.Gn.sources &&
              (q.log("[Measurements] Adding CLS Data"),
              this.Gn.sources.forEach(function (n, i) {
                return t.setTag("cls.source." + (i + 1), D(n.node));
              }));
        }),
        (t.prototype.Bn = function () {
          var t,
            n,
            i,
            r,
            e,
            o,
            s,
            u,
            a = this;
          (t = function (t) {
            var n = t.entries.pop();
            n &&
              (q.log("[Measurements] Adding CLS"),
              (a.xn.cls = { value: t.value }),
              (a.Gn = n));
          }),
            (r = yr("CLS", 0)),
            (e = 0),
            (o = []),
            (u = mr(
              "layout-shift",
              (s = function (t) {
                if (t && !t.hadRecentInput) {
                  var n = o[0],
                    s = o[o.length - 1];
                  e &&
                  0 !== o.length &&
                  t.startTime - s.startTime < 1e3 &&
                  t.startTime - n.startTime < 5e3
                    ? ((e += t.value), o.push(t))
                    : ((e = t.value), (o = [t])),
                    e > r.value && ((r.value = e), (r.entries = o), i && i());
                }
              })
            )) &&
              ((i = pr(t, r, n)),
              gr(function () {
                u.takeRecords().map(s), i(!0);
              }));
        }),
        (t.prototype.Hn = function (t) {
          var n = Sr.navigator;
          if (n) {
            var i = n.connection;
            i &&
              (i.effectiveType &&
                t.setTag("effectiveConnectionType", i.effectiveType),
              i.type && t.setTag("connectionType", i.type),
              jr(i.rtt) && (this.xn["connection.rtt"] = { value: i.rtt }),
              jr(i.downlink) &&
                (this.xn["connection.downlink"] = { value: i.downlink })),
              jr(n.deviceMemory) &&
                t.setTag("deviceMemory", String(n.deviceMemory)),
              jr(n.hardwareConcurrency) &&
                t.setTag("hardwareConcurrency", String(n.hardwareConcurrency));
          }
        }),
        (t.prototype.Pn = function (t) {
          var n = this;
          !(function (t, n) {
            var i,
              r = wr(),
              e = yr("LCP"),
              o = function (t) {
                var n = t.startTime;
                n < r.firstHiddenTime && ((e.value = n), e.entries.push(t)),
                  i && i();
              },
              s = mr("largest-contentful-paint", o);
            if (s) {
              i = pr(t, e, n);
              var u = function () {
                Tr[e.id] ||
                  (s.takeRecords().map(o),
                  s.disconnect(),
                  (Tr[e.id] = !0),
                  i(!0));
              };
              ["keydown", "click"].forEach(function (t) {
                addEventListener(t, u, { once: !0, capture: !0 });
              }),
                gr(u, !0);
            }
          })(function (t) {
            var i = t.entries.pop();
            if (i) {
              var r = tr(Ct),
                e = tr(i.startTime);
              q.log("[Measurements] Adding LCP"),
                (n.xn.lcp = { value: t.value }),
                (n.xn["mark.lcp"] = { value: r + e }),
                (n.Xn = i);
            }
          }, t);
        }),
        (t.prototype.Jn = function () {
          var t,
            n,
            i,
            r,
            e,
            o,
            s,
            u = this;
          (t = function (t) {
            var n = t.entries.pop();
            if (n) {
              var i = tr(Ct),
                r = tr(n.startTime);
              q.log("[Measurements] Adding FID"),
                (u.xn.fid = { value: t.value }),
                (u.xn["mark.fid"] = { value: i + r });
            }
          }),
            (r = wr()),
            (e = yr("FID")),
            (s = mr(
              "first-input",
              (o = function (t) {
                i &&
                  t.startTime < r.firstHiddenTime &&
                  ((e.value = t.processingStart - t.startTime),
                  e.entries.push(t),
                  i(!0));
              })
            )) &&
              ((i = pr(t, e, n)),
              gr(function () {
                s.takeRecords().map(o), s.disconnect();
              }, !0));
        }),
        t
      );
    })();
  function Or(t) {
    var n = t.transaction,
      i = t.entry,
      r = t.event,
      e = t.timeOrigin,
      o = t.eventEnd,
      s = t.description,
      u = o ? i[o] : i[r + "End"],
      a = i[r + "Start"];
    a &&
      u &&
      _r(n, {
        op: "browser",
        description: null != s ? s : r,
        startTimestamp: e + tr(a),
        endTimestamp: e + tr(u),
      });
  }
  function _r(t, n) {
    var i = n.startTimestamp,
      r = h(n, ["startTimestamp"]);
    return (
      i && t.startTimestamp > i && (t.startTimestamp = i),
      t.startChild(f({ startTimestamp: i }, r))
    );
  }
  function jr(t) {
    return "number" == typeof t && isFinite(t);
  }
  var kr = {
    notTracingRemote: !1,
    traceFetch: !0,
    traceXHR: !0,
    tracingOrigins: ["localhost", /^\//],
  };
  function Dr(t) {
    var n = f(f({}, kr), t),
      i = n.notTracingRemote,
      r = n.traceFetch,
      e = n.traceXHR,
      o = n.tracingOrigins,
      s = n.shouldCreateSpanForRequest,
      u = {},
      a = function (t) {
        if (u[t]) return u[t];
        var n = o;
        return (
          (u[t] =
            n.some(function (n) {
              return X(t, n);
            }) && !X(t, "sentry_key")),
          u[t]
        );
      },
      c = a;
    "function" == typeof s &&
      (c = function (t) {
        return a(t) && s(t);
      });
    var h = {};
    r &&
      ct({
        callback: function (t) {
          !(function (t, n, i, r) {
            if (!Yi() || !t.fetchData || !n(t.fetchData.url)) return;
            if (t.endTimestamp && t.fetchData.__span) {
              var e = i[t.fetchData.__span];
              return void (
                e &&
                (t.response
                  ? e.setHttpStatus(t.response.status)
                  : t.error && e.setStatus(Ki.InternalError),
                e.finish(),
                delete i[t.fetchData.__span])
              );
            }
            var o = Qi();
            if (o) {
              var e = o.startChild({
                data: f(f({}, t.fetchData), { type: "fetch" }),
                description: t.fetchData.method + " " + t.fetchData.url,
                op: "http.client",
              });
              (t.fetchData.__span = e.spanId), (i[e.spanId] = e);
              var s = (t.args[0] = t.args[0]),
                u = (t.args[1] = t.args[1] || {}),
                a = u.headers;
              k(s, Request) && (a = s.headers),
                r ||
                  (a
                    ? "function" == typeof a.append
                      ? a.append("sentry-trace", e.toTraceparent())
                      : (a = Array.isArray(a)
                          ? l(a, [["sentry-trace", e.toTraceparent()]])
                          : f(f({}, a), { "sentry-trace": e.toTraceparent() }))
                    : (a = { "sentry-trace": e.toTraceparent() })),
                (u.headers = a);
            }
          })(t, c, h, i);
        },
        type: "fetch",
      }),
      e &&
        ct({
          callback: function (t) {
            !(function (t, n, i, r) {
              var e, o;
              if (
                !Yi() ||
                (null === (e = t.xhr) || void 0 === e
                  ? void 0
                  : e.__sentry_own_request__) ||
                !(
                  (null === (o = t.xhr) || void 0 === o
                    ? void 0
                    : o.__sentry_xhr__) && n(t.xhr.__sentry_xhr__.url)
                )
              )
                return;
              var s = t.xhr.__sentry_xhr__;
              if (t.endTimestamp && t.xhr.__sentry_xhr_span_id__) {
                var u = i[t.xhr.__sentry_xhr_span_id__];
                return void (
                  u &&
                  (u.setHttpStatus(s.status_code),
                  u.finish(),
                  delete i[t.xhr.__sentry_xhr_span_id__])
                );
              }
              var a = Qi();
              if (a) {
                var u = a.startChild({
                  data: f(f({}, s.data), {
                    type: "xhr",
                    method: s.method,
                    url: s.url,
                  }),
                  description: s.method + " " + s.url,
                  op: "http.client",
                });
                if (
                  ((t.xhr.__sentry_xhr_span_id__ = u.spanId),
                  (i[t.xhr.__sentry_xhr_span_id__] = u),
                  !r && t.xhr.setRequestHeader)
                )
                  try {
                    t.xhr.setRequestHeader("sentry-trace", u.toTraceparent());
                  } catch (t) {}
              }
            })(t, c, h, i);
          },
          type: "xhr",
        });
  }
  var Nr = g();
  var Ir = f(
      {
        tracesSampleRate: 0.01,
        idleTimeout: or,
        markBackgroundTransactions: !0,
        maxTransactionDuration: 600,
        routingInstrumentation: function (t, n, i) {
          if (
            (void 0 === n && (n = !0),
            void 0 === i && (i = !0),
            Nr && Nr.location)
          ) {
            var r,
              e = Nr.location.href;
            n && (r = t({ name: Nr.location.pathname, op: "pageload" })),
              i &&
                ct({
                  callback: function (n) {
                    var i = n.to,
                      o = n.from;
                    void 0 === o && e && -1 !== e.indexOf(i)
                      ? (e = void 0)
                      : o !== i &&
                        ((e = void 0),
                        r &&
                          (q.log(
                            "[Tracing] Finishing current transaction with op: " +
                              r.op
                          ),
                          r.finish()),
                        (r = t({
                          name: Nr.location.pathname,
                          op: "navigation",
                        })));
                  },
                  type: "history",
                });
          } else
            q.warn(
              "Could not initialize routing instrumentation due to invalid location"
            );
        },
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
      },
      kr
    ),
    Rr = (function () {
      function t(n) {
        (this.name = t.id), (this.Wn = !1);
        var i = kr.tracingOrigins;
        n &&
        n.tracingOrigins &&
        Array.isArray(n.tracingOrigins) &&
        0 !== n.tracingOrigins.length
          ? (i = n.tracingOrigins)
          : (this.Wn = !0),
          (this.options = f(f(f({}, Ir), n), { tracingOrigins: i })),
          (this.$n = new Er(f(f({}, xr), this.options.Kn)));
      }
      return (
        (t.prototype.setupOnce = function (t, n) {
          var i = this;
          (this.Zn = n),
            this.Wn &&
              (q.warn(
                "[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."
              ),
              q.warn(
                "[Tracing] We added a reasonable default for you: " +
                  kr.tracingOrigins
              ));
          var r = this.options,
            e = r.routingInstrumentation,
            o = r.startTransactionOnLocationChange,
            s = r.startTransactionOnPageLoad,
            u = r.markBackgroundTransactions,
            a = r.traceFetch,
            c = r.traceXHR,
            f = r.tracingOrigins,
            h = r.notTracingRemote,
            v = r.shouldCreateSpanForRequest;
          e(
            function (t) {
              return i.Vn(t);
            },
            s,
            o
          ),
            u &&
              (lr && lr.document
                ? lr.document.addEventListener("visibilitychange", function () {
                    var t = Qi();
                    lr.document.hidden &&
                      t &&
                      (q.log(
                        "[Tracing] Transaction: " +
                          Ki.Cancelled +
                          " -> since tab moved to the background, op: " +
                          t.op
                      ),
                      t.status || t.setStatus(Ki.Cancelled),
                      t.setTag("visibilitychange", "document.hidden"),
                      t.finish());
                  })
                : q.warn(
                    "[Tracing] Could not set up background tab detection due to lack of global document"
                  )),
            Dr({
              traceFetch: a,
              traceXHR: c,
              tracingOrigins: f,
              notTracingRemote: h,
              shouldCreateSpanForRequest: v,
            });
        }),
        (t.prototype.Vn = function (t) {
          var n = this;
          if (this.Zn) {
            var i = this.options,
              r = i.beforeNavigate,
              e = i.idleTimeout,
              o = i.maxTransactionDuration,
              s =
                "pageload" === t.op
                  ? (function () {
                      var t =
                        ((n = "sentry-trace"),
                        (i = g().document.querySelector(
                          "meta[name=" + n + "]"
                        )),
                        i ? i.getAttribute("content") : null);
                      var n, i;
                      if (t)
                        return (function (t) {
                          var n = t.match(Vi);
                          if (n) {
                            var i = void 0;
                            return (
                              "1" === n[3]
                                ? (i = !0)
                                : "0" === n[3] && (i = !1),
                              {
                                traceId: n[1],
                                parentSampled: i,
                                parentSpanId: n[2],
                              }
                            );
                          }
                        })(t);
                      return;
                    })()
                  : void 0,
              u = f(f(f({}, t), s), { trimEnd: !0 }),
              a = "function" == typeof r ? r(u) : u,
              c = void 0 === a ? f(f({}, u), { sampled: !1 }) : a;
            !1 === c.sampled &&
              q.log(
                "[Tracing] Will not send " +
                  c.op +
                  " transaction because of beforeNavigate."
              ),
              q.log("[Tracing] Starting " + c.op + " transaction on scope");
            var h = (function (t, n, i, r, e) {
              var o,
                s,
                u =
                  (null === (o = t.getClient()) || void 0 === o
                    ? void 0
                    : o.getOptions()) || {},
                a = new ur(n, t, i, r);
              return (
                (a = fr(
                  a,
                  u,
                  f(
                    { parentSampled: n.parentSampled, transactionContext: n },
                    e
                  )
                )).sampled &&
                  a.initSpanRecorder(
                    null === (s = u.xt) || void 0 === s ? void 0 : s.maxSpans
                  ),
                a
              );
            })(this.Zn(), c, e, !0, { location: g().location });
            return (
              h.registerBeforeFinishCallback(function (t, i) {
                n.$n.addPerformanceEntries(t),
                  (function (t, n, i) {
                    var r = i - n.startTimestamp;
                    i &&
                      (r > t || r < 0) &&
                      (n.setStatus(Ki.DeadlineExceeded),
                      n.setTag("maxTransactionDurationExceeded", "true"));
                  })(1e3 * o, t, i);
              }),
              h
            );
          }
          q.warn(
            "[Tracing] Did not create " +
              t.op +
              " transaction because _getCurrentHub is invalid."
          );
        }),
        (t.id = "BrowserTracing"),
        t
      );
    })();
  var Ar = {},
    Cr = g();
  Cr.Sentry && Cr.Sentry.Integrations && (Ar = Cr.Sentry.Integrations);
  var Mr = f(f(f({}, Ar), Zi), { BrowserTracing: Rr });
  return (
    dr(),
    (t.BrowserClient = Xi),
    (t.Hub = Bt),
    (t.Integrations = Mr),
    (t.SDK_NAME = "sentry.javascript.browser"),
    (t.SDK_VERSION = Wn),
    (t.Scope = Mt),
    (t.Span = rr),
    (t.Transports = ki),
    (t.addBreadcrumb = function (t) {
      Wt("addBreadcrumb", t);
    }),
    (t.addExtensionMethods = dr),
    (t.addGlobalEventProcessor = Ut),
    (t.captureEvent = function (t) {
      return Wt("captureEvent", t);
    }),
    (t.captureException = captureException),
    (t.captureMessage = function (t, n) {
      var i;
      try {
        throw new Error(t);
      } catch (t) {
        i = t;
      }
      return Wt(
        "captureMessage",
        t,
        "string" == typeof n ? n : void 0,
        f(
          { originalException: t, syntheticException: i },
          "string" != typeof n ? { captureContext: n } : void 0
        )
      );
    }),
    (t.close = function (t) {
      var n = Ht().getClient();
      return n
        ? n.close(t)
        : (q.warn("Cannot flush events and disable SDK. No client defined."),
          _t.resolve(!1));
    }),
    (t.configureScope = function (t) {
      Wt("configureScope", t);
    }),
    (t.defaultIntegrations = Gi),
    (t.flush = function (t) {
      var n = Ht().getClient();
      return n
        ? n.flush(t)
        : (q.warn("Cannot flush events. No client defined."), _t.resolve(!1));
    }),
    (t.forceLoad = function () {}),
    (t.getCurrentHub = Ht),
    (t.getHubFromCarrier = Xt),
    (t.init = function (t) {
      if (
        (void 0 === t && (t = {}),
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = Gi),
        void 0 === t.release)
      ) {
        var n = g();
        n.SENTRY_RELEASE &&
          n.SENTRY_RELEASE.id &&
          (t.release = n.SENTRY_RELEASE.id);
      }
      void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
        void 0 === t.sendClientReports && (t.sendClientReports = !0),
        (function (t, n) {
          !0 === n.debug && q.enable();
          var i = Ht(),
            r = i.getScope();
          r && r.update(n.initialScope);
          var e = new t(n);
          i.bindClient(e);
        })(Xi, t),
        t.autoSessionTracking &&
          (function () {
            if (void 0 !== g().document) {
              var t = Ht();
              "function" == typeof t.startSession &&
                "function" == typeof t.captureSession &&
                (t.startSession({ ignoreDuration: !0 }),
                t.captureSession(),
                ct({
                  callback: function (n) {
                    var i = n.from,
                      r = n.to;
                    void 0 !== i &&
                      i !== r &&
                      (t.startSession({ ignoreDuration: !0 }),
                      t.captureSession());
                  },
                  type: "history",
                }));
            } else
              q.warn(
                "Session tracking in non-browser environment with @hy-sentry/browser is not supported."
              );
          })();
    }),
    (t.lastEventId = function () {
      return Ht().lastEventId();
    }),
    (t.onLoad = function (t) {
      t();
    }),
    (t.setContext = function (t, n) {
      Wt("setContext", t, n);
    }),
    (t.setExtra = function (t, n) {
      Wt("setExtra", t, n);
    }),
    (t.setExtras = function (t) {
      Wt("setExtras", t);
    }),
    (t.setTag = function (t, n) {
      Wt("setTag", t, n);
    }),
    (t.setTags = function (t) {
      Wt("setTags", t);
    }),
    (t.setUser = function (t) {
      Wt("setUser", t);
    }),
    (t.showReportDialog = function (t) {
      void 0 === t && (t = {});
      var n = Ht(),
        i = n.getScope();
      i && (t.user = f(f({}, i.getUser()), t.user)),
        t.eventId || (t.eventId = n.lastEventId());
      var r = n.getClient();
      r && r.showReportDialog(t);
    }),
    (t.startTransaction = function (t, n) {
      return Wt("startTransaction", f({}, t), n);
    }),
    (t.withScope = $t),
    (t.wrap = function (t) {
      return Ai(t)();
    }),
    t
  );
})({});
