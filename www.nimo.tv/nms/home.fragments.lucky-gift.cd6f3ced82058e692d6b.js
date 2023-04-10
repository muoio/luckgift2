(window.webpackJsonp = window.webpackJsonp || []).push([
  ["7bf36", "6a3b4"],
  {
    "+6U0": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r = n("YQsQ"),
        i = n.n(r),
        o = n("N8OG");
      function a(t, e) {
        return !e || ("object" !== i()(e) && "function" !== typeof e)
          ? Object(o.a)(t)
          : e;
      }
    },
    "+H5Y": function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r = n("q4i/"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("58BP"),
        c = n.n(s),
        u = n("Ptek"),
        l = n.n(u),
        p = n("tWqE"),
        f = n.n(p),
        h = n("gy9q"),
        d = n.n(h),
        v = n("7DFi"),
        m = n.n(v),
        y = n("TJEx"),
        g = n.n(y),
        b = n("cQwn"),
        w = n.n(b),
        S = n("CbEt"),
        E = n.n(S),
        _ = n("cOjp"),
        I = n("dBYC"),
        T = n("LpuD");
      function O(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = g()(t);
          if (e) {
            var i = g()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return m()(this, n);
        };
      }
      var k = (function (t) {
        d()(n, t);
        var e = O(n);
        function n() {
          var t;
          return (
            a()(this, n),
            (t = e.call(this)),
            w()(l()(t), "clientType", ""),
            w()(l()(t), "initialized", !1),
            w()(l()(t), "_logger", null),
            t.initAPI(),
            t
          );
        }
        return (
          c()(n, [
            { key: "init", value: function () {} },
            {
              key: "initAPI",
              value: function () {
                var t = this;
                if ("function" !== typeof this._sendBizMsg)
                  throw new ReferenceError(
                    "`this._sendBizMsg` is not a function."
                  );
                I.c.forEach(function (e) {
                  var n = e || [],
                    r = i()(n, 2),
                    o = r[0],
                    a = r[1];
                  "undefined" === typeof t[a] &&
                    (t[a] = function () {
                      for (
                        var e = arguments.length, n = new Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      return t._sendBizMsg.apply(t, [o].concat(n));
                    });
                });
              },
            },
            {
              key: "on",
              value: function (t, e, r) {
                var i;
                return (
                  "function" === typeof r
                    ? (this._addUnpacker(t, e), (i = r))
                    : "function" === typeof e && (i = e),
                  i && f()(g()(n.prototype), "on", this).call(this, t, i),
                  this
                );
              },
            },
            {
              key: "off",
              value: function (t, e) {
                return (
                  "function" === typeof e &&
                    (f()(g()(n.prototype), "off", this).call(this, t, e),
                    0 === this.listenerCount(t) && this._removeUnpacker(t)),
                  this
                );
              },
            },
            {
              key: "createLogger",
              value: function () {
                return new _.a({
                  prefix: "nm-messenger".concat(
                    this.clientType ? "--".concat(this.clientType) : ""
                  ),
                });
              },
            },
            {
              key: "_addUnpacker",
              value: function (t, e) {
                T.a.add(t, e);
              },
            },
            {
              key: "_removeUnpacker",
              value: function (t) {
                T.a.remove(t);
              },
            },
          ]),
          n
        );
      })(E.a);
      e.a = k;
    },
    "+o4R": function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
        return t;
      };
    },
    "+xEq": function (t, e, n) {
      "use strict";
      var r = n("cQwn"),
        i = n.n(r);
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      e.a = (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      })(
        {},
        {
          isDebug: "false",
          isLocal: !1,
          logging: !1,
          maindomain: "www.nimo.tv",
          wapdomain: "m.nimo.tv",
          dashboarddomain: "dashboard.nimo.tv",
          gamedomain: "game.nimo.tv",
          wsserver: "wss://tube.nimo.tv:443",
          wsserver_dns_domain: "wss://tube.nimo.tv",
          httpServer: "https://wup.nimo.tv",
          sail_rank_domain: "https://sail-rank.nimo.tv",
          usernimotv: "https://user.nimo.tv",
          userinfonimotv: "https://userinfo.nimo.tv",
          apinimotv: "https://api.nimo.tv",
          eventnimotv: "https://event.nimo.tv",
          follownimotv: "https://follow.nimo.tv",
          paynimotv: "https://pay.nimo.tv",
          vipnimotv: "https://vip.nimo.tv",
          gatewaynimotv: "https://gateway.nimo.tv",
          upgrade_domain: "https://upgrade.nimo.tv",
          article_domain: "https://article.nimo.tv",
          metricServer: "https://metric.nimo.tv",
          withdrawdomain: "https://api-commission.nimo.tv",
          metricdomain: "https://metric.nimo.tv",
          offlinepush_domain: "https://offlinepush.nimo.tv",
          feedback_domain:
            "https://kefu.zbase.nimo.tv/s/dist/tpl/nimofeedback.html?product=NIMOPC&typeId=1",
          guessnimotv: "https://guess.nimo.tv",
          udbsec_nimo_domain: "https://udbsec.nimo.tv",
          webapi_domain: "https://webapi.nimo.tv",
          tx_flv_stream_domain: "https://tx.flv.nimo.tv",
          tx_hls_stream_domain: "https://tx.hls.nimo.tv",
          ws_flv_stream_domain: "https://ws.flv.nimo.tv",
          ws_hls_stream_domain: "https://ws.hls.nimo.tv",
          al_flv_stream_domain: "https://al.flv.nimo.tv",
          al_hls_stream_domain: "https://al.hls.nimo.tv",
          tx_slice_domain: "https://tx-slice.nimo.tv",
          ws_slice_domain: "https://ws-slice.nimo.tv",
          al_slice_domain: "https://al-slice.nimo.tv",
          api_cf_domain: "https://api-cf.nimo.tv",
          video_domain: "https://video.nimo.tv",
          guild_domain: "https://guild.nimo.tv",
          follow_cf_dynamic_domain: "https://follow-cf-dynamic.nimo.tv",
          home_cf_domain: "https://home-cf.nimo.tv",
          cdncb_domain: "https://ws.cdncb.nimo.tv",
          hapi_domain: "https://estat.nimo.tv",
          udb_domain: "nimo.tv",
          udb_protocol: "https",
          udb_login: "udblgn",
          udb_thrid: "udb3lgn",
          udb_register: "udbreg",
          udb_api: "udbapi",
          gatrackid: "G-Q9F868YX7R",
          activity_gatrackid: "G-R88F84SHW9",
          pasnimoweb: "nimo_web",
          pasnimowap: "nimo_wap",
          pasnimoactivity: "nimo_activity",
          pasnimowebpush: "nimo_webpush",
          pasnimoplayer: "nimo_player",
          upgradeRequests: "upgrade-insecure-requests",
          vip_short_chain_domain: "svip.nimo.tv",
          metric_ver_suffix: "",
          streamerAppStoreUrl:
            "https://play.google.com/store/apps/details?id=com.huya.nimogameassist",
          streamerGooglePlayUrl:
            "https://play.google.com/store/apps/details?id=com.huya.nimogameassist",
          sdkpath: "/static/main/lib/nimotv-min.js",
          flashVersion: "flash",
          firebaseSDKVersion: "5.5.6",
          firebaseMessagingSenderId: "647447867032",
          firebasePublicVapidKey:
            "BFdpsPYzLelUJMTGitgOiVh1iO8R1w073IQLmxNQGBhTq5bGn1_Y2fcHCb4GgQvfJQOEWrz41oy5Pd-ZVlrlEs4",
          img: "https://img.nimo.tv",
          imgService: "https://img-service.nimo.tv",
          gtmdomain: "https://www.googletagmanager.com",
          gadomain: "https://www.google-analytics.com",
          sgdcdomain: "https://stats.g.doubleclick.net",
          vjsdomain: "https://vjs.zencdn.net",
          fbdomain: "https://www.facebook.com",
          fbcdomain: "https://connect.facebook.net",
          gsdomain: "https://www.gstatic.com",
          ylogdomain: "https://ylog.nimo.tv",
          wspicdomain: "https://wspic.vod.nimo.tv",
          txpicdomain: "https://txpic.vod.nimo.tv",
          signaling_wss_ip: "testws.master.live",
          sentryAppDsn:
            "https://741f4a8efcf94c0bae4b6dcc1891959a@fems.huya.com/179",
          hyplayer_appid: 81,
          udb_appid: 1005,
          origin_trial_token:
            "AnsYCFE5h5x+76sOQIhDFsjD8/B3dqBsufFWYR95rJe0ZRjBV1s0t8s9JWaXzlXzQz80K9k3dsgXv6Jw0YKKOAYAAABxeyJvcmlnaW4iOiJodHRwczovL25pbW8udHY6NDQzIiwiZmVhdHVyZSI6IlVucmVzdHJpY3RlZFNoYXJlZEFycmF5QnVmZmVyIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
          search_domain: "https://sail-api.nimo.tv",
          search_static_domain: "https://sail-api-static.nimo.tv",
          sail_rank_static_domain: "https://sail-rank-static.nimo.tv",
          activity_domain: "https://sail-activity.nimo.tv",
          skyNetProjectName: "nimo-www-prod",
          skyNetProjectId: 27,
        }
      );
    },
    "/2A3": function (t, e, n) {
      var r = n("nrty");
      t.exports = function (t) {
        return r(this, t).get(t);
      };
    },
    "/603": function (t, e, n) {
      var r = n("SqF8");
      t.exports = function (t) {
        var e = new t.constructor(t.byteLength);
        return new r(e).set(new r(t)), e;
      };
    },
    "/Coi": function (t, e, n) {
      var r = n("fN8n"),
        i = n("5meL"),
        o = n("U/LN"),
        a = o && o.isMap,
        s = a ? i(a) : r;
      t.exports = s;
    },
    "/h5q": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n("Mf8U");
      function i(t, e, n) {
        return (
          (e = Object(r.a)(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
    },
    "0d/0": function (t, e, n) {
      var r = n("nUlD");
      t.exports = function (t) {
        return r(t) ? void 0 : t;
      };
    },
    "0gZ9": function (t, e, n) {
      "use strict";
      var r = n("f4f7");
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (t.exports = function () {
          function t(t, e, n, i, o, a) {
            if (a !== r) {
              var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    "12xL": function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    "1YeO": function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = r(n("2jVd")),
        o = r(n("QoJ3")),
        a = !1,
        s = [
          "altKey",
          "bubbles",
          "cancelable",
          "ctrlKey",
          "currentTarget",
          "eventPhase",
          "metaKey",
          "shiftKey",
          "target",
          "timeStamp",
          "view",
          "type",
        ];
      function c(t) {
        return null === t || void 0 === t;
      }
      var u = [
        {
          reg: /^key/,
          props: ["char", "charCode", "key", "keyCode", "which"],
          fix: function (t, e) {
            c(t.which) && (t.which = c(e.charCode) ? e.keyCode : e.charCode),
              void 0 === t.metaKey && (t.metaKey = t.ctrlKey);
          },
        },
        {
          reg: /^touch/,
          props: ["touches", "changedTouches", "targetTouches"],
        },
        { reg: /^hashchange$/, props: ["newURL", "oldURL"] },
        { reg: /^gesturechange$/i, props: ["rotation", "scale"] },
        {
          reg: /^(mousewheel|DOMMouseScroll)$/,
          props: [],
          fix: function (t, e) {
            var n = void 0,
              r = void 0,
              i = void 0,
              o = e.wheelDelta,
              a = e.axis,
              s = e.wheelDeltaY,
              c = e.wheelDeltaX,
              u = e.detail;
            o && (i = o / 120),
              u && (i = 0 - (u % 3 === 0 ? u / 3 : u)),
              void 0 !== a &&
                (a === t.HORIZONTAL_AXIS
                  ? ((r = 0), (n = 0 - i))
                  : a === t.VERTICAL_AXIS && ((n = 0), (r = i))),
              void 0 !== s && (r = s / 120),
              void 0 !== c && (n = (-1 * c) / 120),
              n || r || (r = i),
              void 0 !== n && (t.deltaX = n),
              void 0 !== r && (t.deltaY = r),
              void 0 !== i && (t.delta = i);
          },
        },
        {
          reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
          props: [
            "buttons",
            "clientX",
            "clientY",
            "button",
            "offsetX",
            "relatedTarget",
            "which",
            "fromElement",
            "toElement",
            "offsetY",
            "pageX",
            "pageY",
            "screenX",
            "screenY",
          ],
          fix: function (t, e) {
            var n = void 0,
              r = void 0,
              i = void 0,
              o = t.target,
              a = e.button;
            return (
              o &&
                c(t.pageX) &&
                !c(e.clientX) &&
                ((r = (n = o.ownerDocument || document).documentElement),
                (i = n.body),
                (t.pageX =
                  e.clientX +
                  ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
                  ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
                (t.pageY =
                  e.clientY +
                  ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
                  ((r && r.clientTop) || (i && i.clientTop) || 0))),
              t.which ||
                void 0 === a ||
                (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
              !t.relatedTarget &&
                t.fromElement &&
                (t.relatedTarget =
                  t.fromElement === o ? t.toElement : t.fromElement),
              t
            );
          },
        },
      ];
      function l() {
        return true;
      }
      function p() {
        return a;
      }
      function f(t) {
        var e = t.type,
          n =
            "function" === typeof t.stopPropagation ||
            "boolean" === typeof t.cancelBubble;
        i.default.call(this), (this.nativeEvent = t);
        var r = p;
        "defaultPrevented" in t
          ? (r = t.defaultPrevented ? l : p)
          : "getPreventDefault" in t
          ? (r = t.getPreventDefault() ? l : p)
          : "returnValue" in t && (r = t.returnValue === a ? l : p),
          (this.isDefaultPrevented = r);
        var o = [],
          c = void 0,
          f = void 0,
          h = s.concat();
        for (
          u.forEach(function (t) {
            e.match(t.reg) && ((h = h.concat(t.props)), t.fix && o.push(t.fix));
          }),
            c = h.length;
          c;

        )
          this[(f = h[--c])] = t[f];
        for (
          !this.target && n && (this.target = t.srcElement || document),
            this.target &&
              3 === this.target.nodeType &&
              (this.target = this.target.parentNode),
            c = o.length;
          c;

        )
          (0, o[--c])(this, t);
        this.timeStamp = t.timeStamp || Date.now();
      }
      var h = i.default.prototype;
      (0, o.default)(f.prototype, h, {
        constructor: f,
        preventDefault: function () {
          var t = this.nativeEvent;
          t.preventDefault ? t.preventDefault() : (t.returnValue = a),
            h.preventDefault.call(this);
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = true),
            h.stopPropagation.call(this);
        },
      }),
        (e.default = f),
        (t.exports = e.default);
    },
    "1kO3": function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function (t) {
            var e = t.keyCode;
            if (
              (t.altKey && !t.ctrlKey) ||
              t.metaKey ||
              (e >= r.F1 && e <= r.F12)
            )
              return !1;
            switch (e) {
              case r.ALT:
              case r.CAPS_LOCK:
              case r.CONTEXT_MENU:
              case r.CTRL:
              case r.DOWN:
              case r.END:
              case r.ESC:
              case r.HOME:
              case r.INSERT:
              case r.LEFT:
              case r.MAC_FF_META:
              case r.META:
              case r.NUMLOCK:
              case r.NUM_CENTER:
              case r.PAGE_DOWN:
              case r.PAGE_UP:
              case r.PAUSE:
              case r.PRINT_SCREEN:
              case r.RIGHT:
              case r.SHIFT:
              case r.UP:
              case r.WIN_KEY:
              case r.WIN_KEY_RIGHT:
                return !1;
              default:
                return !0;
            }
          },
          isCharacterKey: function (t) {
            if (t >= r.ZERO && t <= r.NINE) return !0;
            if (t >= r.NUM_ZERO && t <= r.NUM_MULTIPLY) return !0;
            if (t >= r.A && t <= r.Z) return !0;
            if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === t)
              return !0;
            switch (t) {
              case r.SPACE:
              case r.QUESTION_MARK:
              case r.NUM_PLUS:
              case r.NUM_MINUS:
              case r.NUM_PERIOD:
              case r.NUM_DIVISION:
              case r.SEMICOLON:
              case r.DASH:
              case r.EQUALS:
              case r.COMMA:
              case r.PERIOD:
              case r.SLASH:
              case r.APOSTROPHE:
              case r.SINGLE_QUOTE:
              case r.OPEN_SQUARE_BRACKET:
              case r.BACKSLASH:
              case r.CLOSE_SQUARE_BRACKET:
                return !0;
              default:
                return !1;
            }
          },
        },
        i = r;
      e.default = i;
    },
    "1wtr": function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          {
            ETube: 0,
            EAppidMessageServer: 101,
            EAppidLotteryServer: 102,
            EAppidAtmosphereServer: 103,
            EAppidVipBarServer: 104,
            EAppidRoomMsgBannerServer: 105,
            EAppidMiscServer: 106,
            EAppidGiftRoomServer: 201,
            EAppidTafUserServer: 301,
            EAppidMsgCenterServer: 401,
            EAppidMatchServer: 501,
            EAppidBulletShareLotterySerer: 601,
            EAppidVoteServer: 701,
            EAppidAnchorLevel: 801,
            EAppidAnchorPK: 802,
            EAppidAVPostRsc: 803,
            EAppidAVPostWSOutputKey: 804,
            EAppidAVPostGroupTask: 805,
            EAppidAnchorGuess: 806,
            EAppidAnchorAD: 807,
            EAppidShow: 901,
            EAppidLive: 1001,
            EAppidLiveAtt: 1002,
            EAppidVideoPlayBack: 1100,
            EAppidBoxGift: 1200,
            EAppidCheckin: 1300,
            EAppidLuckyGift: 1400,
            EAppidTaskBox: 1500,
            EAppidDataCancellation: 1600,
            EAppidPickMe: 1700,
            EAppidThirdPartyRepush: 1800,
            EAppidThirdMsgPush: 1900,
            EAppidItemTally: 2e3,
            EAppidLiveMeeting: 2100,
            EAppidLiveMeetingCharmValue: 2101,
            EAppidLiveMeetingPairing: 2102,
            EAppidFortuneGift: 2200,
            EAppidSupperTreasure: 2201,
            EAppidGoldBeanLottery: 2300,
            EAppidRoulette: 2301,
            EAppidGamePromote: 2302,
            EAppidBoxLottery: 2303,
            EAppidSundry: 2400,
            EAppidLinkMic: 2500,
            EAppidLiveShare: 2600,
            EAppidActivityPromote: 2700,
            EAppidInteractiveGift: 2800,
            EAppidWealthFamily: 2900,
            EAppidTurntable: 3e3,
            EAppidUserLevel: 3100,
            EAppidUserGrowthTask: 3101,
            EAppidAnchorGrowthTask: 3200,
            EAppidSRE: 3300,
            EAppidStartPopup: 3400,
            EAppidActivityDraw: 3500,
            EAppidBossGame: 3600,
            EAppidFishGame: 3700,
          });
      (r.a.EAppType = i), (e.a = i);
    },
    "2/Ax": function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++)
          (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "2/Zn": function (t, e, n) {
      "use strict";
      n.d(e, "f", function () {
        return r.a;
      }),
        n.d(e, "g", function () {
          return m;
        }),
        n.d(e, "b", function () {
          return y.b;
        }),
        n.d(e, "a", function () {
          return y.a;
        }),
        n.d(e, "c", function () {
          return g.a;
        }),
        n.d(e, "e", function () {
          return U;
        }),
        n.d(e, "d", function () {
          return Z;
        });
      var r = n("IDCC"),
        i = n("q4i/"),
        o = n.n(i),
        a = n("rIiI"),
        s = n.n(a),
        c = n("58BP"),
        u = n.n(c),
        l = n("cQwn"),
        p = n.n(l),
        f = n("nimoua"),
        h = n.n(f);
      function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var v = n("4TRz").a.EUriJServerPacket,
        m = (function () {
          function t(e) {
            s()(this, t),
              p()(this, "_messenger", void 0),
              (this.defaults = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? d(Object(n), !0).forEach(function (e) {
                        p()(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : d(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                        );
                      });
                }
                return t;
              })({}, e));
          }
          return (
            u()(t, [
              {
                key: "messenger",
                get: function () {
                  if (this._messenger) return this._messenger;
                  throw new ReferenceError("[messenger] is undefined.");
                },
                set: function (t) {
                  this._messenger = t;
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r = n.isProtocol,
                    i = n.version,
                    a = void 0 === i ? 1 : i;
                  if (r)
                    return 2 === a
                      ? this.onProtocol(t, e)
                      : this.messenger.on(t, e);
                  var s = this._getBroadcast(t),
                    c = s || [],
                    u = o()(c, 2),
                    l = u[0],
                    p = u[1];
                  return this.messenger.on(l, p, e);
                },
              },
              {
                key: "onProtocol",
                value: function (t, e) {
                  var n = this,
                    r = this._getBroadcast(t) || [],
                    i = o()(r, 2),
                    a = i[0],
                    s = i[1],
                    c = function (t) {
                      var n,
                        r = (t || {}).sData;
                      try {
                        n = JSON.parse(r);
                      } catch (i) {
                        console.warn(i);
                      }
                      n && "function" === typeof e && e(n);
                    };
                  return (
                    this.messenger.on(a, s, c),
                    function () {
                      n.messenger.off(t, c);
                    }
                  );
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r = n.isProtocol;
                  if (r) return this.messenger.off(t, e);
                  var i = this._getBroadcast(t),
                    a = i || [],
                    s = o()(a, 1),
                    c = s[0];
                  return this.messenger.off(c, e);
                },
              },
              {
                key: "registerSocketMsg",
                value: function (t) {
                  var e = this._covertParams(t);
                  this.messenger.registerSocketMsg(e);
                },
              },
              {
                key: "unregisterSocketMsg",
                value: function (t) {
                  var e = this._covertParams(t);
                  this.messenger.unregisterSocketMsg(e);
                },
              },
              {
                key: "register",
                value: function () {
                  var t = this,
                    e = this.defaults.broadcasts;
                  return (
                    e && this.registerSocketMsg({ ids: Object.keys(e) }),
                    function () {
                      t.unregister();
                    }
                  );
                },
              },
              {
                key: "unregister",
                value: function () {
                  var t = this.defaults.broadcasts;
                  t && this.unregisterSocketMsg({ ids: Object.keys(t) });
                },
              },
              {
                key: "_covertParams",
                value: function (t) {
                  var e = t || {},
                    n = e.ids,
                    r = void 0 === n ? [] : n,
                    i = e.protocols,
                    o = void 0 === i ? [] : i,
                    a = this._convertIds(r),
                    s = o,
                    c = {};
                  return (
                    o.length > 0 && !h.a.isInNimoApp && a.push(v),
                    a.length > 0 && (c.ids = a),
                    s.length > 0 && (c.protocols = s),
                    c
                  );
                },
              },
              {
                key: "_convertIds",
                value: function (t) {
                  for (var e = []; t.length > 0; ) {
                    var n = t.shift(),
                      r = this._getBroadcast(n) || [],
                      i = o()(r, 1)[0];
                    i && e.push(i);
                  }
                  return e;
                },
              },
              {
                key: "_getBroadcast",
                value: function (t) {
                  var e = this.defaults.broadcasts,
                    n = (void 0 === e ? {} : e)[t];
                  if (void 0 === n)
                    throw new TypeError(
                      "the broadcast [".concat(t, "] is not found.")
                    );
                  return n;
                },
              },
            ]),
            t
          );
        })(),
        y = n("dBYC"),
        g = n("JtW8"),
        b = (n("RlNQ"), n("Ptek")),
        w = n.n(b),
        S = n("gy9q"),
        E = n.n(S),
        _ = n("7DFi"),
        I = n.n(_),
        T = n("TJEx"),
        O = n.n(T),
        k = n("CbEt");
      function R(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = O()(t);
          if (e) {
            var i = O()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return I()(this, n);
        };
      }
      var U = (function (t) {
          E()(n, t);
          var e = R(n);
          function n() {
            var t;
            s()(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              (t = e.call.apply(e, [this].concat(i))),
              p()(w()(t), "_caller", void 0),
              t
            );
          }
          return (
            u()(n, [
              {
                key: "caller",
                get: function () {
                  if (this._caller) return this._caller;
                  throw new ReferenceError("[caller] is undefined.");
                },
                set: function (t) {
                  if ("function" !== typeof t)
                    throw new ReferenceError("[caller] is not a function.");
                  this._caller = t;
                },
              },
              {
                key: "dispose",
                value: function () {
                  this.caller = null;
                },
              },
              {
                key: "call",
                value: function (t, e) {
                  this.caller(t, e);
                },
              },
            ]),
            n
          );
        })(n.n(k).a),
        C = n("ZTQi"),
        P = n.n(C),
        N = n("f2qI"),
        A = n.n(N),
        M = n("avFb"),
        D = n.n(M),
        j = n("Kw0i"),
        L = n("L7RH"),
        B = n("w6NW"),
        x = n("KFtC"),
        W = n("lhie"),
        G = n("wkQf"),
        F = n("CH3P"),
        H = n("mTTC"),
        V = n("Nxq2"),
        q = n("kPK6"),
        J = n.n(q),
        K = ["url", "target", "iframeStyle", "iframeProps"],
        z = [
          "title",
          "content",
          "wrapClassName",
          "extraWrapClassName",
          "width",
          "closeIcon",
          "className",
          "modalKey",
        ];
      function Q(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Q(Object(n), !0).forEach(function (e) {
                p()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Z = (function () {
        function t(e) {
          var n = this;
          s()(this, t),
            p()(this, "_globalModalInstance", null),
            p()(this, "messageEventAdded", {
              message: !1,
              business_message: !1,
            }),
            p()(this, "closeActivityModal", function (t) {
              n._closeGlobalModal(t);
            }),
            p()(this, "handleMessengerPhoneMessage", function (e) {
              var r = e.messageId,
                i = e.data;
              switch (r) {
                case y.b.REGISTER_SOCKET_MSG:
                  if (
                    (n.interphone.registerSocketMsg(i),
                    n.messageEventAdded.message)
                  )
                    return;
                  (n.messageEventAdded.message = !0),
                    n.interphone.on("message", n.handleInterphoneMessage);
                  break;
                case y.b.UNREGISTER_SOCKET_MSG:
                  n.interphone.unregisterSocketMsg(i);
                  break;
                case y.b.OPEN_ACTIVITY_MODAL:
                case y.b.OPEN_INNER_BROWSER:
                  n.openActivityModal(i);
                  break;
                case y.b.SHOW_TOAST:
                  t.showToast(i);
                  break;
                case y.b.JUMP_TO_LIVE_ROOM:
                  t.jumpToLiveRoom(i);
                  break;
                case y.b.POPUP_LOGIN:
                  t.popupLogin(i);
                  break;
                case y.b.REGISTER_BUSINESS_MSG:
                  if (n.messageEventAdded.business_message) return;
                  (n.messageEventAdded.business_message = !0),
                    n.interphone.registerBusinessMsg(i),
                    n.interphone.on(
                      "business_message",
                      n.handleInterphoneMessage
                    );
                  break;
                case y.b.UNREGISTER_BUSINESS_MSG:
                  n.interphone.unregisterBusinessMsg(i),
                    n.interphone.off(
                      "business_message",
                      n.handleInterphoneMessage
                    );
                  break;
                case y.b.POPUP_JOIN_FANS_MODAL:
                  j.b.emit(j.a.POPUP_JOIN_FANS_MODAL);
                  break;
                case y.b.CLOSE_ACTIVITY_MODAL:
                  n.closeActivityModal(i);
                  break;
                case y.b.SUBSCRIBE_TOPIC:
                  n.subscribeTopic(i);
                  break;
                case y.b.UNSUBSCRIBE_TOPIC:
                  n.unsubscribeTopic(i);
                  break;
                case y.b.POPUP_SHARE:
                  Object(V.a)(i);
                  break;
                case y.b.UPDATE_ACCOUNT_BALANCE:
                  break;
                case y.b.SHOW_USER_INFO_DIALOG:
                  j.b.emit(j.a.SHOW_USER_INFO_DIALOG, i);
              }
            }),
            p()(this, "handleInterphoneMessage", function (t) {
              var e = t || {},
                r = e.type,
                i = e.data;
              n.sendBizMsgToMessenger(r, i);
            });
          var r = e || {},
            i = r.interphone,
            o = r.messengerPhone;
          (this._messengerPhone = o), (this._interphone = i);
        }
        return (
          u()(
            t,
            [
              {
                key: "messengerPhone",
                get: function () {
                  if (this._messengerPhone) return this._messengerPhone;
                  throw new ReferenceError("[messengerPhone] is undefined.");
                },
                set: function (t) {
                  this._messengerPhone = t;
                },
              },
              {
                key: "interphone",
                get: function () {
                  if (this._interphone) return this._interphone;
                  throw new ReferenceError("[interphone] is undefined.");
                },
                set: function (t) {
                  this._interphone = t;
                },
              },
              {
                key: "openActivityModal",
                value: function (t) {
                  var e = this,
                    n = t || {},
                    r = n.url,
                    i = n.target,
                    o = void 0 === i ? "_blank" : i,
                    a = n.iframeStyle,
                    s = n.iframeProps,
                    c = void 0 === s ? {} : s,
                    u = A()(n, K);
                  Object(B.a)(r) &&
                    ("_modal" === o
                      ? this._showGlobalModal(
                          Y(
                            Y({}, u),
                            {},
                            {
                              content: D.a.createElement(
                                G.a,
                                P()(
                                  {
                                    src: r,
                                    style: a,
                                    closeModal: function () {
                                      return e.closeActivityModal(c);
                                    },
                                  },
                                  c,
                                  { className: "n-as-rnd" }
                                )
                              ),
                            }
                          )
                        )
                      : window.open(r, o));
                },
              },
              {
                key: "init",
                value: function () {
                  this.messengerPhone.on(
                    "message",
                    this.handleMessengerPhoneMessage
                  );
                },
              },
              {
                key: "dispose",
                value: function () {
                  this.messengerPhone.off(
                    "message",
                    this.handleMessengerPhoneMessage
                  ),
                    this.interphone.off(
                      "message",
                      this.handleInterphoneMessage
                    ),
                    this.interphone.off(
                      "business_message",
                      this.handleInterphoneMessage
                    ),
                    (this._messengerPhone = null),
                    (this._interphone = null),
                    this._globalModalInstance &&
                      (this._globalModalInstance.destroy(),
                      (this._globalModalInstance = null));
                },
              },
              {
                key: "sendBizMsgToMessenger",
                value: function (t, e) {
                  this.messengerPhone.emit("incomingCall", {
                    type: t,
                    data: e,
                  });
                },
              },
              {
                key: "_showGlobalModal",
                value: function (t) {
                  var e = t || {},
                    n = e.title,
                    r = e.content,
                    i = e.wrapClassName,
                    o = void 0 === i ? "global-modal-wrap" : i,
                    a = e.extraWrapClassName,
                    s = e.width,
                    c = e.closeIcon,
                    u = e.className,
                    l = e.modalKey,
                    p = A()(e, z),
                    f = Y(
                      {
                        title: n,
                        wrapClassName: J()(a, o),
                        closable: !0,
                        maskClosable: !1,
                        mask: !0,
                        footer: null,
                        content: r,
                        width: s,
                        closeIcon: c,
                        className: u,
                      },
                      p
                    );
                  this._globalModalInstance &&
                    this._globalModalInstance.modalKey !== l &&
                    this._cancelModal(),
                    this._globalModalInstance
                      ? this._globalModalInstance.update(f)
                      : (this._globalModalInstance = F.a.info(f)),
                    (this._globalModalInstance.modalKey = l);
                },
              },
              {
                key: "_closeGlobalModal",
                value: function (t) {
                  this._globalModalInstance &&
                    (!this._globalModalInstance.modalKey ||
                      (t &&
                        this._globalModalInstance.modalKey === t.modalKey)) &&
                    this._cancelModal();
                },
              },
              {
                key: "_cancelModal",
                value: function () {
                  this._globalModalInstance &&
                    (this._globalModalInstance.destroy({ triggerCancel: !0 }),
                    (this._globalModalInstance = null));
                },
              },
              {
                key: "subscribeTopic",
                value: function (t) {
                  L.channel.subTopicList(t);
                },
              },
              {
                key: "unsubscribeTopic",
                value: function (t) {
                  L.channel.unsubTopicList(t);
                },
              },
            ],
            [
              {
                key: "createInstance",
                value: function (e) {
                  return new t(e);
                },
              },
              {
                key: "showToast",
                value: function (t) {
                  var e = t || {},
                    n = e.content,
                    r = e.time_length,
                    i = e.onClose;
                  W.a.info(n, r, i);
                },
              },
              {
                key: "jumpToLiveRoom",
                value: function (t) {
                  Object(x.K)(t);
                },
              },
              {
                key: "popupLogin",
                value: function (t) {
                  H.default.openLoginView(t);
                },
              },
            ]
          ),
          t
        );
      })();
    },
    "2LO6": function (t, e, n) {
      (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n;
      }.call(this, n("AeT1")));
    },
    "2MFa": function (t, e) {
      t.exports = function (t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length;
          ++n < r && !1 !== e(t[n], n, t);

        );
        return t;
      };
    },
    "2Wv2": function (t, e) {
      t.exports = function (t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length, i = 0, o = [];
          ++n < r;

        ) {
          var a = t[n];
          e(a, n, t) && (o[i++] = a);
        }
        return o;
      };
    },
    "2jVd": function (t, e, n) {
      "use strict";
      function r() {
        return !1;
      }
      function i() {
        return !0;
      }
      function o() {
        (this.timeStamp = Date.now()),
          (this.target = void 0),
          (this.currentTarget = void 0);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (o.prototype = {
          isEventObject: 1,
          constructor: o,
          isDefaultPrevented: r,
          isPropagationStopped: r,
          isImmediatePropagationStopped: r,
          preventDefault: function () {
            this.isDefaultPrevented = i;
          },
          stopPropagation: function () {
            this.isPropagationStopped = i;
          },
          stopImmediatePropagation: function () {
            (this.isImmediatePropagationStopped = i), this.stopPropagation();
          },
          halt: function (t) {
            t ? this.stopImmediatePropagation() : this.stopPropagation(),
              this.preventDefault();
          },
        }),
        (e.default = o),
        (t.exports = e.default);
    },
    "2mGf": function (t, e, n) {
      "use strict";
      function r() {
        var t = [].slice.call(arguments, 0);
        return 1 === t.length
          ? t[0]
          : function () {
              for (var e = 0; e < t.length; e++)
                t[e] && t[e].apply && t[e].apply(this, arguments);
            };
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "2xoy": function (t, e, n) {
      var r = n("v0Em"),
        i = n("jbCr"),
        o = n("yWrL");
      t.exports = function (t) {
        return o(t) ? r(t, !0) : i(t);
      };
    },
    "3FAr": function (t, e, n) {
      var r = n("l1vn");
      t.exports = function (t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -Infinity ? "-0" : e;
      };
    },
    "3cEJ": function (t, e) {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    "3eAy": function (t, e, n) {
      var r = n("ebMM")(n("nD2Q"), "WeakMap");
      t.exports = r;
    },
    "3vdS": function (t, e, n) {
      "use strict";
      var r;
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var i = function () {
          return r;
        },
        o = function (t) {
          r = t;
        };
    },
    "45ek": function (t, e, n) {
      var r = n("WNm1");
      function i(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var n = function n() {
          var r = arguments,
            i = e ? e.apply(this, r) : r[0],
            o = n.cache;
          if (o.has(i)) return o.get(i);
          var a = t.apply(this, r);
          return (n.cache = o.set(i, a) || o), a;
        };
        return (n.cache = new (i.Cache || r)()), n;
      }
      (i.Cache = r), (t.exports = i);
    },
    "4KFe": function (t, e) {
      t.exports = nimoDLL;
    },
    "4RWa": function (t, e, n) {
      var r = n("ecr1"),
        i = n("kVJS"),
        o = n("qX/W"),
        a = n("N4fI"),
        s = n("gaLA"),
        c = n("N1gY");
      function u(t) {
        var e = (this.__data__ = new r(t));
        this.size = e.size;
      }
      (u.prototype.clear = i),
        (u.prototype.delete = o),
        (u.prototype.get = a),
        (u.prototype.has = s),
        (u.prototype.set = c),
        (t.exports = u);
    },
    "4TRz": function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          {
            EUriHelloString: 8e3,
            EUriStreamNew: 8001,
            EUriStreamStop: 8002,
            EUriRoomAttendeeChange: 8003,
            EUriRoomAttendeeChangeForUid: 8004,
            EUriLiveOver: 8005,
            EUriLiveBeginNotice: 8006,
            EUriLiveEndNotice: 8007,
            EUriLiveBeginNoticeNew: 8008,
            EUriNonPublicLiveBeginNotice: 8009,
            EUriLiveTypeChange: 8010,
            EUriNoticeBan: 8100,
            EUriNoticeBeKick: 8101,
            EUriCancelFreeEnterRoom: 8102,
            EUriPayViewerNotice: 8103,
            EUriMessageNotice: 1400,
            EUriJServerPacket: 1401,
            EUriFavorLive: 1402,
            EUriRoomMessageBanner: 1403,
            EUriShareRoom: 1404,
            EUriSystemMessage: 1405,
            EUriFavorResChg: 1406,
            EUriRoomAnimation: 1407,
            EUriNewRoomAnimation: 1408,
            EUriQuickChat: 1409,
            EUriVipBarListChgNotice: 1410,
            EUriThirdMessageNotice: 1411,
            EUriMarqueeNotice: 1412,
            EUriChatModeChangeNotice: 1413,
            EUriThirdMessageBatchNotice: 1414,
            EUriRoomWelcomeNotice: 1415,
            EUriAnchorMsgBannerNotice: 1416,
            EUriChatBotMessageNotice: 1417,
            EUriSystemChatMessage: 1418,
            EUriPayChatNotice: 1419,
            EUriVoiceRoomEmojiNotice: 1420,
            EUriGetTaskPackNotice: 1421,
            EUriTaskProgressChange: 1422,
            EUriStarLevelUp: 1423,
            EUriSeniorStarTaskChg: 1424,
            EUriSystemChatMessageNew: 1425,
            EUriVoiceRoomRandomEmojiNotice: 1426,
            EUriPayChatRichTextNotice: 1427,
            EUriPayChatRichTextNewNotice: 1428,
            EUriNobleFansRecordNotice: 1429,
            EUriCheckRoomNotice: 1450,
            EUriPaidPotentialListChgNotice: 1451,
            EUriUserForbitMessage: 1500,
            EUriUserLifBanMessage: 1501,
            EUriUserBoxReset: 1510,
            EUriUserSetRoomManager: 1511,
            EUriUserSpecialBox: 1512,
            EUriUserEnterRoom: 1513,
            EUriAnchorKickUser: 1514,
            EUriFansLevelUp: 1515,
            EUriNewUserEnterRoom: 1516,
            EUriVIPLevelChange: 1517,
            EUriNoRankEnterRoom: 1518,
            EUriVoiceRoomBan: 1519,
            EUriEmoticonGroupUnLock: 1520,
            EUriNobleJoinRecommand: 1521,
            EUriNobleChange: 1522,
            EUriAnchorCheckEnterRoom: 1523,
            EUriUserBlockNotify: 1524,
            EUriUserBoxNotify: 1525,
            EUriSendKissToRichMan: 1526,
            EUriNewUserFlagEnterRoom: 1527,
            EUriMatchRoundChange: 1600,
            EUriCampStatChange: 1601,
            EUriSetUserCampSupport: 1602,
            EMsgMarkReadNotify: 1700,
            EMsgSessionNew: 1701,
            EIMMsgSessionNew: 1702,
            EIMMsgGroupMemberChange: 1703,
            EIMMsgPictureMsgIllegal: 1704,
            EIMMsgSessionDelete: 1705,
            EUriBSLotteryStart: 1800,
            EUriBSLotteryPopularity: 1801,
            EUriBSLotteryEnd: 1802,
            EUriBSLotteryDetail: 1803,
            EUriBSLotteryWinner: 1804,
            EUriMulLotBoardcast: 1805,
            EUriBSLotteryStartNew: 1806,
            EUriBSLotteryPopularityNew: 1807,
            EUriBSLotteryEndNew: 1808,
            EUriBSLotteryWinnerNew: 1809,
            EUriBSLotteryStartV2: 1810,
            EUriBSLotteryPopularityV2: 1811,
            EUriBSLotteryEndV2: 1812,
            EUriBSLotteryWinnerV2: 1813,
            EUriBSLotteryStartV3: 1814,
            EUriBSLotteryPopularityV3: 1815,
            EUriBSLotteryEndV3: 1816,
            EUriBSLotteryWinnerV3: 1817,
            EUriNoticeRoomMcEvent: 2001,
            EUriNoticeMcRequest: 2002,
            EUriNoticeMcResponse: 2003,
            EUriNoticeMcReqTimeout: 2004,
            EUriNoticeRoomConfigChange: 2005,
            EUriNoticeWaitUserUpMc: 2006,
            EUriNoticeWaitUserLeave: 2007,
            EUriNoticeUserEvent: 2008,
            EUriAudienceChangeEvent: 2009,
            EUriNoticeCancelInv: 2010,
            EUriNoticePresenterBeInvite: 2011,
            EUriNoticePresenterInviteResult: 2012,
            EUriNoticePresenterLinkChange: 2013,
            EUriNoticePresenterCancelInvite: 2014,
            EUriNoticePresenterLinkNetworkQua: 2015,
            EUriNoticeShowMicBoxChange: 2016,
            EUriVoiceRoomUp: 2017,
            EUriJoinRoomClub: 2018,
            EUriMeetingSeatChange: 2100,
            EUriMeetingInvite: 2101,
            EUriMeetingInviteResponse: 2102,
            EUriMeetingKick: 2103,
            EUriCharmValue: 2104,
            EUriMeetingAnnouncementNotify: 2105,
            EUriMeetingStatusChange: 2106,
            EUriMeetingPairing: 2107,
            EUriMeetingThemeChange: 2108,
            EUriLinkMicSessionStatNotify: 2200,
            EUriLinkMicListChangeNotify: 2201,
            EUriLinkMicRandomInviteNotify: 2202,
            EUriLinkMicAudienceAskUpNotice: 2203,
            EUriLinkMicLinkMicClientDataChange: 2204,
            EUriLinkMicLinkMicStatusChange: 2205,
            EUriLinkMicAudienceLinkMicResultNotice: 2206,
            EUriLinkMicUserInfoChange: 2207,
            EUriSundryDiceGame: 2300,
            EUriSundryFingerGuessingGame: 2301,
            EUriSundryBasketballGame: 2302,
            EUriSundryAlertBoxNotify: 2304,
            EUriAirRaidEvent: 2305,
            EUriSundryRandomGames: 2306,
            EUriRouletteBet: 2310,
            EUriClashRoyaleEvent: 2311,
            EUriGiftRoomBroadCastNotice: 9e3,
            EUriGiftEffectBroadCastNotice: 9001,
            EUriGiftRoomMgsBroadCastNotice: 9002,
            EUriVoteRoomBroadCastNotice: 9600,
            EUriVoteRoomBroadCastNoticeStart: 9601,
            EUriVoteRoomBroadCastNoticeFinshed: 9602,
            EUriAnchorLevelUp: 9701,
            EUriAnchorLevelUpToAnchor: 9702,
            EUriAnchorPanelInfo: 9703,
            EUriAnchorPKNotifyAskPK: 9731,
            EUriAnchorPKNotifyAnswerPK: 9732,
            EUriAnchorPKNotifySyncGifts: 9733,
            EUriAnchorPKNotifySyncTop3: 9734,
            EUriAnchorPKNotifyPKStart: 9735,
            EUriAnchorPKNotifyPKOverCountDown: 9736,
            EUriAnchorPKNotifyPKOver: 9737,
            EUriAnchorPKNotifyPKShowResultOver: 9738,
            EUriAnchorPKNotifyCancelPK: 9739,
            EUriAnchorPKNotifyPKSituation: 9740,
            EUriAnchorPKNotifyReachHighLight: 9741,
            EUriAnchorPKNotifyHighLightBanner: 9742,
            EUriAnchorPKNotifyTips: 9743,
            EUriAnchorPKNotifyClientDataChange: 9744,
            EUriAnchorPKNotifyRidicule: 9745,
            EUriAnchorPKEraseLoseEffectNotify: 9746,
            EUriAnchorPKEraseNotify: 9747,
            EUriVideoPlayBlackNotify: 9800,
            EUriVideoPlayBlackNotify2: 9801,
            EUriBGStatusNotice: 9900,
            EUriBGWinnerNotice: 9901,
            EUriCheckinNotice: 1e4,
            EUriLuckyGiftNotice: 10100,
            EUriLuckyGiftRewardRoom: 10101,
            EUriLuckyAwardNotice: 10102,
            EUriLuckyGiftSuperScoreChangeNotice: 10103,
            EUriLuckyGiftPieceAwardNotice: 10104,
            EUriLuckyGiftPrizeRecordListNotice: 10105,
            EUriTaskBoxOpening: 10200,
            EUriForceUserLogout: 10300,
            EUriPickMeStart: 10400,
            EUriPickMeEnd: 10401,
            EUriPickMeDetails: 10402,
            EUriPickMeWinners: 10403,
            EUriPickMeTask: 10404,
            EUriThirdPartyTokenAuthFailed: 10500,
            EUriThirdPartyRepushSwitchChange: 10501,
            EUriThirdPartyPickMeInvite: 10502,
            EUriThirdPartyPickMeInviteEnd: 10503,
            EUriThirdPartyStreamStatusNotify: 10504,
            EUriThirdPartyStreamStopNotify: 10505,
            EUriThirdPartyActionNotify: 10506,
            EUriItemTallyNotice: 10600,
            EUriItemTallyWishNotice: 10601,
            EUriItemTallyWishNewNotice: 10602,
            EUriItemTallyWishNewSysNotify: 10603,
            EUriItemTallyNewWishNotice: 10604,
            EUriFortuneGiftPrizeNotice: 10700,
            EUriFortuneGiftPrizeRecordNotice: 10701,
            EUriFortuneGiftSuperFortuneChangeNotice: 10702,
            EUriFortuneGiftStreamerEffectNotice: 10703,
            EUriGoldBeanLotteryBuyOrSellNotice: 10800,
            EUriRouletteBetNotice: 10801,
            EUriRouletteStatusUpdateNotice: 10802,
            EUriRouletteRewardNotice: 10803,
            EUriGamePromoteExhaustNotice: 10804,
            EUriGoldBeanLotteryRoundNotice: 10805,
            EUriBaucuaRewardNotice: 10806,
            EUriBaucuaRoundStatusUpdateNotice: 10807,
            EUriBoxLotteryReportNotice: 10808,
            EUriBoxLotteryFinishNotice: 10809,
            EUriActivityPromoteInviteNotice: 10900,
            EUriActivityPromoteGroupUpStartNotice: 10901,
            EUriOpenLotteryNotice: 11e3,
            EUriInteractiveGiftUpdateNotice: 11100,
            EUriInteractiveGiftWinnerRecordNotice: 11101,
            EUriUserBoxTaskDoubleCoinPrizeNotice: 11200,
            EUriWealthFamilyClumpEndNotice: 11300,
            EUriWatchTogetherStart: 11400,
            EUriTurntableStartNotice: 11500,
            EUriTurntableParticipateNotice: 11501,
            EUriTurntableExitNotice: 11502,
            EUriTurntableRoundNotice: 11503,
            EUriTurntableEndNotice: 11504,
            EUriTurntableNotice: 11505,
            EUriTurntableSysMsg: 11506,
            EUriUserLevelExpAddNotice: 11600,
            EUriUserGrowthTask: 11601,
            EUriUserLevelUpdate: 11602,
            EUriWealthSeatUpdateNotice: 11700,
            EUriFamilyClumpUpdateNotice: 11800,
            EUriRoomFamilyClumpListUpdateNotice: 11801,
            EUriRoomFamilyClumpWinnerNotice: 11802,
            EUriSecPackTypeShennongLagSolvedNotice: 11900,
            EUriActivityDrawUpdateNotice: 12e3,
            EUriActivityDrawWinnerNotice: 12001,
            EUriSupperTreasureGiftNotice: 12100,
            EUriSupperTreasureFairyGiftNotice: 12101,
            EUriBossGameStatNotice: 12200,
            EUriBossGameRewardNotice: 12201,
            EUriBossGameTaskNotice: 12202,
            EUriBossGameWarriorNotice: 12203,
            EUriFisingKingFishPrizePoolNotice: 12300,
            EUriFishingWinningKingFishNotice: 12301,
            EUriPickUpStatNotice: 12400,
            EUriPickUpPairingNotice: 12401,
            EUriConfessSystemMessageNotice: 12500,
            EUriHorseRaceResultNotice: 12600,
            EUriHorseRacingLargeBetNotice: 12601,
            EUriHorseRacingPopularHorseNotice: 12602,
            EUriHorseRacingLargeBounsNotice: 12603,
            EUriGameHallStatusNotice: 12700,
            EUriGameHallInviteNotice: 12701,
            EUriLudoGameStartNotice: 12800,
            EUriLudoGameEndNotice: 12801,
            EUriLudoGameRoundStartNotice: 12802,
            EUriLudoGameDiceNotice: 12803,
            EUriLudoGameChessGoNotice: 12804,
            EUriLudoGameDataSync: 12805,
            EUriLudoGamePlayerNotice: 12806,
            EUriLudoGameConfNotice: 12807,
            EUriLudoGameHistoryNotice: 12808,
            EUriFirstPayGuideSGift: 20001,
            EUriRevenuePanelBean: 20002,
            EUriActivityTaskBean: 20003,
            EUriActivityCommonPanel: 20004,
            EUriRoomRankChange: 20005,
            EUriRoomRankUp: 20006,
            EUriRoomFansRankChange: 20007,
            EUriRoomGiftsChange: 20008,
            EUriResRankUp: 20009,
            EUriLogCollect: 20010,
            EUriActivitySign: 20011,
            EUriMissionOpen: 20012,
            EUriMissionMessage: 20013,
            EUriMissionInfo: 20014,
            EUriRoomGiftRankChange: 20015,
            EUriCurrentLiveRank: 20016,
            EUriLiveHouseShowChange: 20017,
            EUriWeekGiftRank: 20018,
            EUriRobWeekGiftInfo: 20019,
            EUriRegularLottery: 20020,
            EUriActivityUserPanel: 20021,
            EUriActivityRoomWindow: 20022,
            EUriActTreaJackpotChange: 20023,
            EUriActTreaUserKeyChange: 20024,
            EUriActTreaCollectChange: 20025,
            EUriGambleRadioChange: 4e4,
            EUriGuessRadioChange: 40001,
            EUriGambleItemChange: 40002,
            EUriGuessPannel: 40003,
            EUriGamblePannel: 40004,
            EUriGambleBankerChange: 40005,
            EUriGambleStatusChange: 40006,
            EUriGuessStatusChange: 40007,
            EUriGambleResult: 40008,
            EUriGuessResult: 40009,
            EUriAuditPunish: 40010,
            EUriEmperorListUpdate: 40011,
            EUriEmperorSceptreMsg: 40012,
            EUriEmperorScreenMsg: 40013,
            EUriLiveInfoToPC: 40014,
            EUriFollow: 40015,
            EUriReJoinClubTip: 40016,
            EUriFanUpgradeClub: 40017,
            EUriFanJoinClub: 40018,
            EUriSubcriptionNotice: 40019,
            EUriMicroNotifyUser: 40020,
            EUriRoyalWealthNotice: 40021,
            EUriRedHotNotice: 40022,
            EUriFanIntimacy: 40023,
            EUriNewRedHotNotice: 40024,
            EUriIntimacyProgress: 40025,
            EUriGuildRecommendToAnchor: 40026,
            EUriGuildRecommendToUser: 40027,
            EUriGuessRadioChangeWithCurrency: 40028,
            EUriGuessStatusChangeWithCurrency: 40029,
            EUriGuessResultWithCurrency: 40030,
            EUriGuessPanelWithCurrency: 40031,
            EUriOfflineRecommendV2ToUser: 40032,
            EUriVideoCommentReplyNotice: 40033,
            EUriMatchQuizRadioChange: 40034,
            EUriMatchQuizPannel: 40035,
            EUriMatchQuizStatusChange: 40036,
            EuriVoiceRoomAnnounceChange: 40037,
            EUriSubcriptionNoticeV2: 40038,
            EUriFansLevelUpV2: 40039,
            EUriFansLevelUpPopup: 40040,
            EUriFanUpgradeClubV2: 40041,
            EUriFanJoinClubV2: 40042,
            EUriUserClipSwtichChange: 40043,
            EUriUserRecordSwtichChange: 40044,
            EUriUserFollow: 40045,
            EURIGuessBet: 40046,
            EURIGuessAward: 40047,
            EURIGuessGlobalPool: 40048,
            EUriFansUpgradeAward: 40049,
          });
      (r.a.EURI = i), (e.a = i);
    },
    "4cNG": function (t, e) {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    "4cfo": function (t, e, n) {
      var r = n("nrty");
      t.exports = function (t) {
        var e = r(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    "5DbK": function (t, e, n) {
      "use strict";
      var r = n("lwBl"),
        i = n("ZZY+"),
        o = n("zc4o");
      r(
        r.P +
          r.F *
            n("L2qc")(function () {
              return (
                null !== new Date(NaN).toJSON() ||
                1 !==
                  Date.prototype.toJSON.call({
                    toISOString: function () {
                      return 1;
                    },
                  })
              );
            }),
        "Date",
        {
          toJSON: function (t) {
            var e = i(this),
              n = o(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
          },
        }
      );
    },
    "5KyW": function (t, e, n) {},
    "5meL": function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    "5x0A": function (t, e, n) {
      var r = n("IDDi"),
        i = n("dZ9T"),
        o = Object.prototype,
        a = o.hasOwnProperty,
        s = o.propertyIsEnumerable,
        c = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (t) {
              return i(t) && a.call(t, "callee") && !s.call(t, "callee");
            };
      t.exports = c;
    },
    "6FYE": function (t, e, n) {
      var r = n("nD2Q")["__core-js_shared__"];
      t.exports = r;
    },
    "6UMe": function (t, e, n) {
      var r = n("nrty");
      t.exports = function (t) {
        return r(this, t).has(t);
      };
    },
    "6dHw": function (t, e, n) {
      (function (t) {
        var r = n("nD2Q"),
          i = n("eJEa"),
          o = e && !e.nodeType && e,
          a = o && "object" == typeof t && t && !t.nodeType && t,
          s = a && a.exports === o ? r.Buffer : void 0,
          c = (s ? s.isBuffer : void 0) || i;
        t.exports = c;
      }.call(this, n("QWVB")(t)));
    },
    "6jXG": function (t, e) {
      t.exports = function (t, e, n) {
        var r = -1,
          i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e),
          (n = n > i ? i : n) < 0 && (n += i),
          (i = e > n ? 0 : (n - e) >>> 0),
          (e >>>= 0);
        for (var o = Array(i); ++r < i; ) o[r] = t[r + e];
        return o;
      };
    },
    "7/jX": function (t, e, n) {
      "use strict";
      function r(t) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "7OaQ": function (t, e, n) {
      var r = n("/603");
      t.exports = function (t, e) {
        var n = e ? r(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length);
      };
    },
    "7Qmc": function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (t.length !== e.length) return !1;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      e.a = function (t, e) {
        var n;
        void 0 === e && (e = r);
        var i,
          o = [],
          a = !1;
        return function () {
          for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++)
            s[c] = arguments[c];
          return (
            (a && n === this && e(s, o)) ||
              ((i = t.apply(this, s)), (a = !0), (n = this), (o = s)),
            i
          );
        };
      };
    },
    "7XLi": function (t, e) {
      var n = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, e) {
        var r = typeof t;
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ("number" == r || ("symbol" != r && n.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      };
    },
    "7aM1": function (t, e, n) {
      var r = n("HxfZ"),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (r) {
          var n = e[t];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return i.call(e, t) ? e[t] : void 0;
      };
    },
    "7eNh": function (t, e, n) {
      "use strict";
      var r = [
        "https://www.nimo.tv",
        "https://article.nimo.tv",
        "https://m.nimo.tv",
        "https://dashboard.nimo.tv",
        "https://eadmin.nimo.tv",
        "https://s3-pre-static.nimo.tv",
        "https://s3-static.nimo.tv",
      ];
      e.a = r;
    },
    "81u2": function (t, e, n) {
      var r = n("9H9C"),
        i = n("Dwsa");
      t.exports = function (t, e, n, o) {
        var a = !n;
        n || (n = {});
        for (var s = -1, c = e.length; ++s < c; ) {
          var u = e[s],
            l = o ? o(n[u], t[u], u, n, t) : void 0;
          void 0 === l && (l = t[u]), a ? i(n, u, l) : r(n, u, l);
        }
        return n;
      };
    },
    "8Gkh": function (t, e, n) {
      var r = n("HxfZ"),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t);
      };
    },
    "8m9Z": function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    "9Cfe": function (t, e, n) {
      var r = n("qhxG");
      t.exports = function (t, e) {
        for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
        return -1;
      };
    },
    "9Fjj": function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("58BP"),
        c = n.n(s),
        u = n("Ptek"),
        l = n.n(u),
        p = n("gy9q"),
        f = n.n(p),
        h = n("7DFi"),
        d = n.n(h),
        v = n("TJEx"),
        m = n.n(v),
        y = n("cQwn"),
        g = n.n(y),
        b = n("avFb"),
        w = n("kPK6"),
        S = n.n(w),
        E = n("mMBF"),
        _ = n.n(E),
        I = n("6Zxk"),
        T = n("1kO3"),
        O = n.n(T),
        k = n("qqnM"),
        R = n.n(k),
        U = n("M5nW");
      function C(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m()(t);
          if (e) {
            var i = m()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var N = (function (t) {
        f()(n, t);
        var e = P(n);
        function n() {
          return a()(this, n), e.apply(this, arguments);
        }
        return (
          c()(n, [
            {
              key: "shouldComponentUpdate",
              value: function (t) {
                return !!t.hiddenClassName || !!t.visible;
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props.className;
                this.props.hiddenClassName &&
                  !this.props.visible &&
                  (t += " ".concat(this.props.hiddenClassName));
                var e = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? C(Object(n), !0).forEach(function (e) {
                          g()(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : C(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(n, e)
                          );
                        });
                  }
                  return t;
                })({}, this.props);
                return (
                  delete e.hiddenClassName,
                  delete e.visible,
                  (e.className = t),
                  b.createElement("div", e)
                );
              },
            },
          ]),
          n
        );
      })(b.Component);
      function A(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function M(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? A(Object(n), !0).forEach(function (e) {
                g()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function D(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m()(t);
          if (e) {
            var i = m()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var j = 0;
      function L(t, e) {
        var n = t["page".concat(e ? "Y" : "X", "Offset")],
          r = "scroll".concat(e ? "Top" : "Left");
        if ("number" !== typeof n) {
          var i = t.document;
          "number" !== typeof (n = i.documentElement[r]) && (n = i.body[r]);
        }
        return n;
      }
      function B(t, e) {
        var n = t.style;
        ["Webkit", "Moz", "Ms", "ms"].forEach(function (t) {
          n["".concat(t, "TransformOrigin")] = e;
        }),
          (n.transformOrigin = e);
      }
      var x = (function (t) {
        f()(n, t);
        var e = D(n);
        function n(t) {
          var r;
          return (
            a()(this, n),
            (r = e.call(this, t)),
            g()(l()(r), "inTransition", void 0),
            g()(l()(r), "titleId", void 0),
            g()(l()(r), "openTime", void 0),
            g()(l()(r), "lastOutSideFocusNode", void 0),
            g()(l()(r), "wrap", void 0),
            g()(l()(r), "dialog", void 0),
            g()(l()(r), "sentinelStart", void 0),
            g()(l()(r), "sentinelEnd", void 0),
            g()(l()(r), "scrollbarWidth", void 0),
            g()(l()(r), "onAnimateLeave", function () {
              var t = r.props.afterClose;
              r.wrap && (r.wrap.style.display = "none"),
                (r.inTransition = !1),
                t && t();
            }),
            g()(l()(r), "onMaskClick", function (t) {
              Date.now() - r.openTime < 300 ||
                (t.target === t.currentTarget && r.close(t));
            }),
            g()(l()(r), "onKeyDown", function (t) {
              var e = l()(r).props;
              if (e.keyboard && t.keyCode === O.a.ESC)
                return t.stopPropagation(), void r.close(t);
              if (e.visible && t.keyCode === O.a.TAB) {
                var n = document.activeElement,
                  i = l()(r).sentinelStart;
                t.shiftKey
                  ? n === i && r.sentinelEnd.focus()
                  : n === r.sentinelEnd && i.focus();
              }
            }),
            g()(l()(r), "getDialogElement", function () {
              var t,
                e,
                n,
                o = l()(r).props,
                a = o.contentClassName,
                s = o.bodyClassName,
                c = o.closable,
                u = o.prefixCls,
                p = {};
              void 0 !== o.width && (p.width = o.width),
                void 0 !== o.height && (p.height = o.height),
                o.footer &&
                  (t = b.createElement(
                    "div",
                    {
                      className: "".concat(u, "-footer"),
                      ref: r.saveRef("footer"),
                    },
                    o.footer
                  )),
                o.title &&
                  (e = b.createElement(
                    "div",
                    {
                      className: "".concat(u, "-header bc23"),
                      ref: r.saveRef("header"),
                    },
                    b.createElement(
                      "div",
                      { className: "".concat(u, "-title c1"), id: r.titleId },
                      o.title
                    )
                  )),
                c &&
                  (n = b.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: r.close,
                      "aria-label": "Close",
                      className: "".concat(u, "-close"),
                    },
                    o.closeIcon ||
                      b.createElement("span", {
                        className: "".concat(u, "-close-x c1"),
                      })
                  ));
              var f = M(M({}, o.style), p),
                h = { width: 0, height: 0, overflow: "hidden" },
                d = r.getTransitionName(),
                v = b.createElement(
                  N,
                  {
                    key: "dialog-element",
                    role: "document",
                    ref: r.saveRef("dialog"),
                    style: f,
                    className: "".concat(u, " ").concat(o.className || ""),
                    visible: o.visible,
                  },
                  b.createElement(
                    "div",
                    { tabIndex: 0, ref: r.saveRef("sentinelStart"), style: h },
                    "sentinelStart"
                  ),
                  b.createElement(
                    "div",
                    { className: "".concat(u, "-content ").concat(a || "") },
                    n,
                    e,
                    b.createElement(
                      "div",
                      i()(
                        {
                          className: "".concat(u, "-body ").concat(s || ""),
                          style: o.bodyStyle,
                          ref: r.saveRef("body"),
                        },
                        o.bodyProps
                      ),
                      o.children
                    ),
                    t
                  ),
                  b.createElement(
                    "div",
                    { tabIndex: 0, ref: r.saveRef("sentinelEnd"), style: h },
                    "sentinelEnd"
                  )
                );
              return b.createElement(
                U.a,
                {
                  key: "dialog",
                  showProp: "visible",
                  onLeave: r.onAnimateLeave,
                  transitionName: d,
                  component: "",
                  transitionAppear: !0,
                },
                o.visible || !o.destroyOnClose ? v : null
              );
            }),
            g()(l()(r), "getZIndexStyle", function () {
              var t = {},
                e = l()(r).props;
              return void 0 !== e.zIndex && (t.zIndex = e.zIndex), t;
            }),
            g()(l()(r), "getWrapStyle", function () {
              return M(M({}, r.getZIndexStyle()), r.props.wrapStyle);
            }),
            g()(l()(r), "getMaskStyle", function () {
              return M(M({}, r.getZIndexStyle()), r.props.maskStyle);
            }),
            g()(l()(r), "getMaskElement", function () {
              var t,
                e = l()(r).props;
              if (e.mask) {
                var n = r.getMaskTransitionName();
                (t = b.createElement(
                  N,
                  i()(
                    {
                      style: r.getMaskStyle(),
                      key: "mask",
                      className: "".concat(e.prefixCls, "-mask"),
                      hiddenClassName: "".concat(e.prefixCls, "-mask-hidden"),
                      visible: e.visible,
                    },
                    e.maskProps
                  )
                )),
                  n &&
                    (t = b.createElement(
                      U.a,
                      {
                        key: "mask",
                        showProp: "visible",
                        transitionAppear: !0,
                        component: "",
                        transitionName: n,
                      },
                      t
                    ));
              }
              return t;
            }),
            g()(l()(r), "getMaskTransitionName", function () {
              var t = l()(r).props,
                e = t.maskTransitionName,
                n = t.maskAnimation;
              return !e && n && (e = "".concat(t.prefixCls, "-").concat(n)), e;
            }),
            g()(l()(r), "getTransitionName", function () {
              var t = l()(r).props,
                e = t.transitionName,
                n = t.animation;
              return !e && n && (e = "".concat(t.prefixCls, "-").concat(n)), e;
            }),
            g()(l()(r), "close", function (t) {
              var e = r.props.onClose;
              e && e(t);
            }),
            g()(l()(r), "saveRef", function (t) {
              return function (e) {
                r[t] = e;
              };
            }),
            (r.inTransition = !1),
            (r.titleId = "rcDialogTitle".concat(j)),
            (j += 1),
            r
          );
        }
        return (
          c()(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.componentDidUpdate({});
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e = this.props,
                  n = this.props.mousePosition;
                if (e.visible) {
                  if (!t.visible) {
                    (this.openTime = Date.now()), this.tryFocus();
                    var r = I.findDOMNode(this.dialog);
                    if (n) {
                      var i = (function (t) {
                        var e = t.getBoundingClientRect(),
                          n = { left: e.left, top: e.top },
                          r = t.ownerDocument,
                          i = r.defaultView || r.parentWindow;
                        return (n.left += L(i)), (n.top += L(i, !0)), n;
                      })(r);
                      B(
                        r,
                        "".concat(n.x - i.left, "px ").concat(n.y - i.top, "px")
                      );
                    } else B(r, "");
                  }
                } else if (
                  t.visible &&
                  ((this.inTransition = !0),
                  e.mask && this.lastOutSideFocusNode)
                ) {
                  try {
                    this.lastOutSideFocusNode.focus();
                  } catch (o) {
                    this.lastOutSideFocusNode = null;
                  }
                  this.lastOutSideFocusNode = null;
                }
              },
            },
            {
              key: "tryFocus",
              value: function () {
                R()(this.wrap, document.activeElement) ||
                  ((this.lastOutSideFocusNode = document.activeElement),
                  this.sentinelStart.focus());
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.prefixCls,
                  n = t.maskClosable,
                  r = this.getWrapStyle();
                return (
                  t.visible && (r.display = null),
                  b.createElement(
                    "div",
                    null,
                    this.getMaskElement(),
                    b.createElement(
                      "div",
                      i()(
                        {
                          tabIndex: -1,
                          onKeyDown: this.onKeyDown,
                          className: ""
                            .concat(e, "-wrap ")
                            .concat(t.wrapClassName || ""),
                          ref: this.saveRef("wrap"),
                          onClick: n ? this.onMaskClick : void 0,
                          role: "dialog",
                          "aria-labelledby": t.title ? this.titleId : null,
                          style: r,
                        },
                        t.wrapProps
                      ),
                      this.getDialogElement()
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(b.Component);
      g()(x, "defaultProps", {
        className: "",
        mask: !0,
        visible: !1,
        keyboard: !0,
        closable: !0,
        maskClosable: !0,
        destroyOnClose: !1,
        prefixCls: "rc-dialog",
        contentClassName: "bc1 bsc3",
        bodyClassName: "n-as-scroll",
      });
      var W = n("A6qc"),
        G = n.n(W);
      function F(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m()(t);
          if (e) {
            var i = m()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var H = (function (t) {
        f()(n, t);
        var e = F(n);
        function n() {
          var t;
          a()(this, n);
          for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
            o[s] = arguments[s];
          return (
            (t = e.call.apply(e, [this].concat(o))),
            g()(l()(t), "_component", void 0),
            g()(l()(t), "renderComponent", void 0),
            g()(l()(t), "removeContainer", void 0),
            g()(l()(t), "saveDialog", function (e) {
              t._component = e;
            }),
            g()(l()(t), "getComponent", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return b.createElement(
                x,
                i()({ ref: t.saveDialog }, t.props, e, { key: "dialog" })
              );
            }),
            g()(l()(t), "getContainer", function () {
              var e = document.createElement("div");
              return (
                t.props.getContainer
                  ? t.props.getContainer().appendChild(e)
                  : document.body.appendChild(e),
                e
              );
            }),
            t
          );
        }
        return (
          c()(n, [
            {
              key: "shouldComponentUpdate",
              value: function (t) {
                var e = t.visible;
                return !(!this.props.visible && !e);
              },
            },
            {
              key: "render",
              value: function () {
                var t = null;
                return (
                  (this.props.visible || this._component) &&
                    (t = b.createElement(
                      G.a,
                      { getContainer: this.getContainer },
                      this.getComponent()
                    )),
                  t
                );
              },
            },
          ]),
          n
        );
      })(b.Component);
      g()(H, "defaultProps", { visible: !1 });
      var V = H,
        q = n("L0GJ");
      function J(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = m()(t);
          if (e) {
            var i = m()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var K = null,
        z = null,
        Q = (function (t) {
          f()(n, t);
          var e = J(n);
          function n(t) {
            var r;
            return (
              a()(this, n),
              (r = e.call(this, t)),
              g()(l()(r), "_dialog", null),
              g()(l()(r), "handleCancel", function (t) {
                var e = r.props.onCancel;
                e && e(t);
              }),
              g()(l()(r), "handleOk", function (t) {
                var e = r.props.onOk;
                e && e(t);
              }),
              g()(l()(r), "saveDialog", function (t) {
                r._dialog = t;
              }),
              g()(l()(r), "renderFooter", function () {
                var t = r.props,
                  e = t.okText,
                  n = t.okType,
                  o = t.okCancel,
                  a = t.cancelText,
                  s = t.cancelType,
                  c = t.confirmLoading,
                  u = t.cancelButtonProps,
                  l = t.okButtonProps,
                  p = t.buttonComponent;
                return b.createElement(
                  "div",
                  { className: "n-fx-cc n-as-w100" },
                  b.createElement(
                    p,
                    i()({ type: n, loading: c, onClick: r.handleOk }, l),
                    e
                  ),
                  o
                    ? b.createElement(
                        p,
                        i()({ type: s, onClick: r.handleCancel }, u),
                        a
                      )
                    : null
                );
              }),
              (r.state = {}),
              r
            );
          }
          return (
            c()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  z ||
                    (_()(document.documentElement, "click", function (t) {
                      (K = { x: t.pageX, y: t.pageY }),
                        setTimeout(function () {
                          K = null;
                        }, 100);
                    }),
                    (z = !0));
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.footer,
                    n = t.visible,
                    r = t.centered,
                    o = t.wrapClassName,
                    a = t.prefixCls,
                    s = t.removeHidden;
                  return b.createElement(
                    V,
                    i()({ ref: this.saveDialog }, this.props, {
                      wrapClassName: S()(
                        g()({}, "".concat(a, "-centered"), !!r),
                        o
                      ),
                      footer: void 0 === e ? this.renderFooter() : e,
                      visible: n,
                      mousePosition: K,
                      onClose: this.handleCancel,
                      removeHidden: s,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(b.Component);
      g()(Q, "info", void 0),
        g()(Q, "success", void 0),
        g()(Q, "error", void 0),
        g()(Q, "warn", void 0),
        g()(Q, "warning", void 0),
        g()(Q, "confirm", void 0),
        g()(Q, "show", void 0),
        g()(Q, "defaultProps", {
          prefixCls: "nimo-modal",
          width: 510,
          transitionName: "zoom",
          maskTransitionName: "fade",
          confirmLoading: !1,
          visible: !1,
          cancelType: "secondary-ghost",
          okType: "secondary",
          okCancel: !0,
          buttonComponent: q.a,
        });
      e.a = Q;
    },
    "9H9C": function (t, e, n) {
      var r = n("Dwsa"),
        i = n("qhxG"),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n) {
        var a = t[e];
        (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
      };
    },
    "9sp7": function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.default = function (t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        });
    },
    A6qc: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = a(n("avFb")),
        i = a(n("6Zxk")),
        o = a(n("jmMi"));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function s(t) {
        return (s =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function l(t, e) {
        return (l =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function p(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(t);
          if (e) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return f(this, n);
        };
      }
      function f(t, e) {
        return !e || ("object" !== s(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function h(t) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var d = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && l(t, e);
        })(a, t);
        var e,
          n,
          r,
          o = p(a);
        function a() {
          return c(this, a), o.apply(this, arguments);
        }
        return (
          (e = a),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.createContainer();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e = this.props.didUpdate;
                e && e(t);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeContainer();
              },
            },
            {
              key: "createContainer",
              value: function () {
                (this._container = this.props.getContainer()),
                  this.forceUpdate();
              },
            },
            {
              key: "removeContainer",
              value: function () {
                this._container &&
                  this._container.parentNode.removeChild(this._container);
              },
            },
            {
              key: "render",
              value: function () {
                return this._container
                  ? i.default.createPortal(this.props.children, this._container)
                  : null;
              },
            },
          ]) && u(e.prototype, n),
          r && u(e, r),
          a
        );
      })(r.default.Component);
      (e.default = d),
        (d.propTypes = {
          getContainer: o.default.func.isRequired,
          children: o.default.node.isRequired,
          didUpdate: o.default.func,
        });
    },
    AA7u: function (t, e, n) {
      "use strict";
      var r = n("cQwn"),
        i = n.n(r),
        o = n("KFtC"),
        a = n("Wntp"),
        s = n("ZxgU"),
        c = n("w5j5");
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var l = new s.a(),
        p = Object(o.k)(),
        f = Object(o.g)(),
        h = {
          isAnonymous: !0,
          nick: "",
          lcid: "",
          uid: 0,
          sGuid: "",
          token: "",
          sUA: Object(c.a)("web"),
          lang: p,
          version: "",
          regOrigin: 99,
          sCountry: f,
          sRegion: "",
          sOpSeq: "",
          iNetType: Object(a.a)(),
        },
        d = {
          roomId: 0,
          lessonId: 0,
          auId: 0,
          nickname: "",
          topicId: 0,
          iLessonStatus: -1,
          iTerminalType: 6,
        },
        v = { status: !1, roomId: 0 },
        m = new s.a(h);
      m.clear = function () {
        m.reset(h);
      };
      var y = new s.a(d);
      y.clear = function () {
        y.reset(d);
      };
      var g = new s.a(v);
      (g.open = function (t) {
        return g.init(
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? u(Object(n), !0).forEach(function (e) {
                    i()(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : u(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })({ status: !0 }, t)
        );
      }),
        (g.close = function () {
          g.reset();
        }),
        (g.clear = function () {
          g.reset(v);
        }),
        (g.isOpened = function (t) {
          return g.status;
        }),
        l.init({ user: m, liveRoom: y, channel: g }),
        (e.a = l);
    },
    APG2: function (t, e, n) {
      t.exports = n("4KFe")(43);
    },
    AVt5: function (t, e, n) {
      "use strict";
      var r = n("f2qI"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("58BP"),
        c = n.n(s),
        u = (n("I81O"), ["onShow", "onHide", "createID"]),
        l = function () {},
        p = 0,
        f = function () {
          return "nimo_observer_".concat((p += 1));
        },
        h = (function () {
          function t(e) {
            a()(this, t);
            var n = e.onShow,
              r = e.onHide,
              o = e.createID,
              s = void 0 === o ? f : o,
              c = i()(e, u);
            (this._createID = s),
              (this._observer = new IntersectionObserver(
                this._callback(n, r),
                c
              )),
              (this._map = Object.create(null));
          }
          return (
            c()(t, [
              {
                key: "_callback",
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : l,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : l,
                    r = this;
                  return function (i) {
                    i.forEach(function (i) {
                      var o = i.isIntersecting,
                        a = i.target,
                        s = t._map[a.id],
                        c = t.remove.bind(r, a);
                      o ? e(i, s, c) : n(i, s, c);
                    });
                  };
                },
              },
              {
                key: "add",
                value: function (t, e) {
                  var n = t.id;
                  return (
                    n || ((n = this._createID()), t.setAttribute("id", n)),
                    this._observer
                      ? (this._map[n] ||
                          (this._observer.observe(t), (this._map[n] = e)),
                        this.remove.bind(this, t))
                      : function () {}
                  );
                },
              },
              {
                key: "remove",
                value: function (t) {
                  return (
                    !!this._observer &&
                    (this._observer.unobserve(t),
                    (this._map[t.id] = null),
                    delete this._map[t.id],
                    t.id)
                  );
                },
              },
              {
                key: "destroyed",
                value: function () {
                  (this._map = Object.create(null)),
                    this._observer &&
                      (this._observer.disconnect(), (this._observer = null));
                },
              },
            ]),
            t
          );
        })();
      e.a = h;
    },
    AeT1: function (t, e, n) {
      t.exports = n("4KFe")(75);
    },
    AeXG: function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r,
        i = n("Nrxr"),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default =
        o.default ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
    },
    AolX: function (t, e, n) {
      var r = n("ZIlV"),
        i = n("l1vn"),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.exports = function (t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != t &&
            !i(t)
          ) ||
          a.test(t) ||
          !o.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    BJtW: function (t, e, n) {
      "use strict";
      n("svwH"), n("FDWG"), n("S+Sw");
      var r = n("rD/L"),
        i = Object(r.a)();
      i.on("login", function () {
        location.reload();
      });
      var o = i;
      window.__native_event__ = function (t) {
        o.emit(t);
      };
    },
    BUsv: function (t, e, n) {
      "use strict";
      n.d(e, "i", function () {
        return h.a;
      }),
        n.d(e, "a", function () {
          return d.a;
        }),
        n.d(e, "g", function () {
          return v.e;
        }),
        n.d(e, "h", function () {
          return v.f;
        }),
        n.d(e, "e", function () {
          return v.a;
        }),
        n.d(e, "f", function () {
          return v.b;
        }),
        n.d(e, "d", function () {
          return m.e;
        }),
        n.d(e, "c", function () {
          return m.d;
        });
      var r = n("gtb+"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("58BP"),
        c = n.n(s),
        u = n("cQwn"),
        l = n.n(u),
        p = n("W7YU"),
        f = (function () {
          function t() {
            a()(this, t), (this.handlers = []);
          }
          return (
            c()(t, [
              {
                key: "push",
                value: function (t, e) {
                  return (
                    this.handlers.push({ onFulfilled: t, onRejected: e }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "unshift",
                value: function (t, e) {
                  return (
                    this.handlers.unshift({ onFulfilled: t, onRejected: e }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "remove",
                value: function (t) {
                  this.handlers[t] && (this.handlers[t] = null);
                },
              },
              {
                key: "forEach",
                value: function (t) {
                  this.handlers.forEach(function (e) {
                    null !== e && t(e);
                  });
                },
              },
            ]),
            t
          );
        })(),
        h = n("WgMg"),
        d = n("WQyD"),
        v = n("jKdo"),
        m = n("RA07");
      function y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(n), !0).forEach(function (e) {
                l()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var b = { OPEN: 0, RE_OPEN: 1, ERROR: 2, CLOSE: 3 },
        w = (function () {
          function t(e) {
            a()(this, t),
              l()(this, "ready", !1),
              l()(this, "socket", null),
              (this.defaults = e),
              (this.interceptors = { request: new f(), response: new f() }),
              (this.channel = e.channel);
          }
          return (
            c()(t, [
              {
                key: "dispose",
                value: function () {
                  (this.ready = null),
                    (this.defaults = null),
                    (this.interceptors = null),
                    this.socket.dispose && this.socket.dispose(),
                    (this.socket = null);
                },
              },
              {
                key: "init",
                value: function (t) {
                  var e = t || {},
                    n = e.wsServer,
                    r = e.user;
                  return (
                    this.isReady() ||
                      ((this.defaults = g(g({}, this.defaults), t)),
                      h.a.init(r),
                      this.socket ||
                        ((this.socket = this.defaults.socket({
                          onOpen: this.handleSocketOpen.bind(this),
                          onError: this.handleSocketError.bind(this),
                          onClose: this.handleSocketClose.bind(this),
                          onMessage: this.handleSocketReceiveMessage.bind(this),
                        })),
                        this.socket.connect(n))),
                    this
                  );
                },
              },
              {
                key: "handleSocketOpen",
                value: function (t, e, n) {
                  var r = this.defaults.onSocketOpen;
                  this.channel && this.channel.open(this, e), (this.ready = !0);
                  var i = b[e ? "RE_OPEN" : "OPEN"];
                  this.dispatch(i, { isReconnection: e }),
                    "function" === typeof r && r(n);
                },
              },
              {
                key: "handleSocketError",
                value: function (t) {
                  this.channel && this.channel.close(),
                    this.dispatch(b.ERROR, t.type || "");
                },
              },
              {
                key: "handleSocketClose",
                value: function (t, e) {
                  var n = this.defaults.onSocketClose;
                  this.channel && this.channel.close(),
                    this.dispatch(b.CLOSE, t.reason),
                    "function" === typeof n && n(e);
                },
              },
              {
                key: "handleSocketReceiveMessage",
                value: function (t) {
                  var e = (t || {}).data,
                    n = [],
                    r = Promise.resolve(e);
                  for (
                    this.interceptors.response.forEach(function (t) {
                      n.push(t.onFulfilled, t.onRejected);
                    });
                    n.length;

                  )
                    r = r.then(n.shift(), n.shift());
                },
              },
              {
                key: "request",
                value: function (t) {
                  var e,
                    n = (t || {}).requestData,
                    r = (e = this.socket).send.apply(e, i()(n));
                  return r || Promise.resolve(t);
                },
              },
              {
                key: "send",
                value: function () {
                  for (
                    var t = [this.request.bind(this), void 0],
                      e = arguments.length,
                      n = new Array(e),
                      r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  var i = Promise.resolve(n);
                  for (
                    this.interceptors.request.forEach(function (e) {
                      t.unshift(e.onFulfilled, e.onRejected);
                    });
                    t.length;

                  )
                    i = i.then(t.shift(), t.shift());
                  return i;
                },
              },
              {
                key: "sendGroup",
                value: function (t) {
                  if (this.socket && this.socket.sendRegisterGroup) {
                    for (
                      var e = arguments.length,
                        n = new Array(e > 1 ? e - 1 : 0),
                        r = 1;
                      r < e;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    var i, o;
                    if (t) (i = this.socket).sendRegisterGroup.apply(i, n);
                    else (o = this.socket).sendUnRegisterGroup.apply(o, n);
                  }
                },
              },
              {
                key: "onGroup",
                value: function (t) {
                  if (this.socket && this.socket.onRegisterGroup) {
                    for (
                      var e = arguments.length,
                        n = new Array(e > 1 ? e - 1 : 0),
                        r = 1;
                      r < e;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    var i, o;
                    if (t) (i = this.socket).onRegisterGroup.apply(i, n);
                    else (o = this.socket).onUnRegisterGroup.apply(o, n);
                  }
                },
              },
              {
                key: "offGroup",
                value: function (t) {
                  if (this.socket && this.socket.offRegisterGroup) {
                    for (
                      var e = arguments.length,
                        n = new Array(e > 1 ? e - 1 : 0),
                        r = 1;
                      r < e;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    var i, o;
                    if (t) (i = this.socket).offRegisterGroup.apply(i, n);
                    else (o = this.socket).offUnRegisterGroup.apply(o, n);
                  }
                },
              },
              {
                key: "isReady",
                value: function () {
                  return this.ready;
                },
              },
              {
                key: "dispatch",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  switch (t) {
                    case b.OPEN:
                    case b.RE_OPEN:
                      p.e.emit("open", e);
                      break;
                    case b.CLOSE:
                      p.e.emit("close", e);
                  }
                },
              },
            ]),
            t
          );
        })();
      e.b = w;
    },
    CH3P: function (t, e, n) {
      "use strict";
      var r = n("cQwn"),
        i = n.n(r),
        o = n("9Fjj"),
        a = n("nZ4e"),
        s = n("avFb"),
        c = n("6Zxk");
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      n("Xw7g");
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      (o.a.info = function (t) {
        var e = f({ type: "info", iconType: "info-circle", okCancel: !1 }, t);
        return Object(a.a)(e);
      }),
        (o.a.success = function (t) {
          var e = f(
            { type: "success", iconType: "check-circle", okCancel: !1 },
            t
          );
          return Object(a.a)(e);
        }),
        (o.a.error = function (t) {
          var e = f(
            { type: "error", iconType: "cross-circle", okCancel: !1 },
            t
          );
          return Object(a.a)(e);
        }),
        (o.a.warn = function (t) {
          var e = f(
            { type: "warning", iconType: "exclamation-circle", okCancel: !1 },
            t
          );
          return Object(a.a)(e);
        }),
        (o.a.warning = o.a.warn),
        (o.a.confirm = function (t) {
          var e = f({ type: "confirm", okCancel: !0 }, t);
          return Object(a.a)(e);
        }),
        (o.a.show = function (t) {
          var e,
            n = document.createElement("div");
          function r() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            a(
              l(
                l({}, e),
                {},
                {
                  visible: !1,
                  afterClose: function () {
                    return i.apply(void 0, n);
                  },
                }
              )
            );
          }
          function i() {
            var e = c.unmountComponentAtNode(n);
            e && n.parentNode && n.parentNode.removeChild(n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            var a =
              i &&
              i.length &&
              i.some(function (t) {
                return t && t.triggerCancel;
              });
            t.onCancel && a && t.onCancel.apply(t, i);
          }
          function a(t) {
            (e = l(
              l({ visible: !0, footer: null }, t),
              {},
              {
                onCancel: function () {
                  r({ triggerCancel: !0 });
                },
              }
            )),
              c.render(s.createElement(o.a, e), n);
          }
          return (
            t.getContainer
              ? t.getContainer().appendChild(n)
              : ((t.getContainer = function () {
                  return document.body;
                }),
                document.body.appendChild(n)),
            a(t),
            { update: a, destroy: r }
          );
        });
      e.a = o.a;
    },
    CmDh: function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r,
        i = n("ve36"),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = function (t, e, n) {
        return (
          e in t
            ? (0, o.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      };
    },
    Dwsa: function (t, e, n) {
      var r = n("TTyQ");
      t.exports = function (t, e, n) {
        "__proto__" == e && r
          ? r(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      };
    },
    DzzQ: function (t, e, n) {
      "use strict";
      var r = n("f2qI"),
        i = n.n(r),
        o = n("cQwn"),
        a = n.n(o),
        s = n("avFb"),
        c = n.n(s),
        u = n("kPK6"),
        l = n.n(u),
        p = n("9sp7"),
        f = n.n(p),
        h = n("CmDh"),
        d = n.n(h),
        v = n("AeXG"),
        m = n.n(v),
        y = n("P+UK"),
        g = n.n(y),
        b = n("ax1G"),
        w = n.n(b),
        S = n("vlBN"),
        E = n.n(S),
        _ = n("HNvz"),
        I = n.n(_),
        T = n("jmMi"),
        O = n.n(T),
        k = n("6Zxk"),
        R = n.n(k),
        U = n("M5nW"),
        C = n("2mGf"),
        P = (function (t) {
          function e() {
            var t, n, r, i;
            g()(this, e);
            for (var o = arguments.length, a = Array(o), s = 0; s < o; s++)
              a[s] = arguments[s];
            return (
              (n = r =
                E()(
                  this,
                  (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                    t,
                    [this].concat(a)
                  )
                )),
              (r.close = function (t) {
                t && t.stopPropagation(),
                  r.clearCloseTimer(),
                  r.props.onClose();
              }),
              (r.startCloseTimer = function () {
                r.props.duration &&
                  (r.closeTimer = setTimeout(function () {
                    r.close();
                  }, 1e3 * r.props.duration));
              }),
              (r.clearCloseTimer = function () {
                r.closeTimer &&
                  (clearTimeout(r.closeTimer), (r.closeTimer = null));
              }),
              (i = n),
              E()(r, i)
            );
          }
          return (
            I()(e, t),
            w()(e, [
              {
                key: "componentDidMount",
                value: function () {
                  this.startCloseTimer();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t) {
                  (this.props.duration !== t.duration || this.props.update) &&
                    this.restartCloseTimer();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearCloseTimer();
                },
              },
              {
                key: "restartCloseTimer",
                value: function () {
                  this.clearCloseTimer(), this.startCloseTimer();
                },
              },
              {
                key: "render",
                value: function () {
                  var t,
                    e = this.props,
                    n = e.prefixCls + "-notice",
                    r =
                      ((t = {}),
                      d()(t, "" + n, 1),
                      d()(t, n + "-closable", e.closable),
                      d()(t, e.className, !!e.className),
                      t);
                  return c.a.createElement(
                    "div",
                    {
                      className: l()(r),
                      style: e.style,
                      onMouseEnter: this.clearCloseTimer,
                      onMouseLeave: this.startCloseTimer,
                      onClick: e.onClick,
                    },
                    c.a.createElement(
                      "div",
                      { className: n + "-content" },
                      e.children
                    ),
                    e.closable
                      ? c.a.createElement(
                          "a",
                          {
                            tabIndex: "0",
                            onClick: this.close,
                            className: n + "-close",
                          },
                          e.closeIcon ||
                            c.a.createElement("span", {
                              className: n + "-close-x",
                            })
                        )
                      : null
                  );
                },
              },
            ]),
            e
          );
        })(s.Component);
      (P.propTypes = {
        duration: O.a.number,
        onClose: O.a.func,
        children: O.a.any,
        update: O.a.bool,
        closeIcon: O.a.node,
      }),
        (P.defaultProps = {
          onEnd: function () {},
          onClose: function () {},
          duration: 1.5,
          style: { right: "50%" },
        });
      var N = P,
        A = 0,
        M = Date.now();
      function D() {
        return "rcNotification_" + M + "_" + A++;
      }
      var j = (function (t) {
        function e() {
          var t, n, r, i;
          g()(this, e);
          for (var o = arguments.length, a = Array(o), s = 0; s < o; s++)
            a[s] = arguments[s];
          return (
            (n = r =
              E()(
                this,
                (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                  t,
                  [this].concat(a)
                )
              )),
            (r.state = { notices: [] }),
            (r.add = function (t) {
              var e = (t.key = t.key || D()),
                n = r.props.maxCount;
              r.setState(function (r) {
                var i = r.notices,
                  o = i
                    .map(function (t) {
                      return t.key;
                    })
                    .indexOf(e),
                  a = i.concat();
                return (
                  -1 !== o
                    ? a.splice(o, 1, t)
                    : (n &&
                        i.length >= n &&
                        ((t.updateKey = a[0].updateKey || a[0].key), a.shift()),
                      a.push(t)),
                  { notices: a }
                );
              });
            }),
            (r.remove = function (t) {
              r.setState(function (e) {
                return {
                  notices: e.notices.filter(function (e) {
                    return e.key !== t;
                  }),
                };
              });
            }),
            (i = n),
            E()(r, i)
          );
        }
        return (
          I()(e, t),
          w()(e, [
            {
              key: "getTransitionName",
              value: function () {
                var t = this.props,
                  e = t.transitionName;
                return (
                  !e && t.animation && (e = t.prefixCls + "-" + t.animation), e
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this,
                  n = this.props,
                  r = this.state.notices,
                  i = r.map(function (t, i) {
                    var o = Boolean(i === r.length - 1 && t.updateKey),
                      a = t.updateKey ? t.updateKey : t.key,
                      s = Object(C.a)(e.remove.bind(e, t.key), t.onClose);
                    return c.a.createElement(
                      N,
                      m()({ prefixCls: n.prefixCls }, t, {
                        key: a,
                        update: o,
                        onClose: s,
                        onClick: t.onClick,
                        closeIcon: n.closeIcon,
                      }),
                      t.content
                    );
                  }),
                  o =
                    ((t = {}),
                    d()(t, n.prefixCls, 1),
                    d()(t, n.className, !!n.className),
                    t);
                return c.a.createElement(
                  "div",
                  { className: l()(o), style: n.style },
                  c.a.createElement(
                    U.a,
                    { transitionName: this.getTransitionName() },
                    i
                  )
                );
              },
            },
          ]),
          e
        );
      })(s.Component);
      (j.propTypes = {
        prefixCls: O.a.string,
        transitionName: O.a.string,
        animation: O.a.oneOfType([O.a.string, O.a.object]),
        style: O.a.object,
        maxCount: O.a.number,
        closeIcon: O.a.node,
      }),
        (j.defaultProps = {
          prefixCls: "rc-notification",
          animation: "fade",
          style: { top: 65, left: "50%" },
        }),
        (j.newInstance = function (t, e) {
          var n = t || {},
            r = n.getContainer,
            i = f()(n, ["getContainer"]),
            o = document.createElement("div");
          r ? r().appendChild(o) : document.body.appendChild(o);
          var a = !1;
          R.a.render(
            c.a.createElement(
              j,
              m()({}, i, {
                ref: function (t) {
                  a ||
                    ((a = !0),
                    e({
                      notice: function (e) {
                        t.add(e);
                      },
                      removeNotice: function (e) {
                        t.remove(e);
                      },
                      component: t,
                      destroy: function () {
                        R.a.unmountComponentAtNode(o),
                          o.parentNode.removeChild(o);
                      },
                    }));
                },
              })
            ),
            o
          );
        });
      var L,
        B,
        x,
        W,
        G = j,
        F = n("njtY"),
        H = ["content", "duration", "type", "onClose"],
        V = 3,
        q = 1,
        J = "nimo-message",
        K = "move-up";
      function z(t) {
        B
          ? t(B)
          : G.newInstance(
              {
                prefixCls: J,
                transitionName: K,
                style: { top: L },
                getContainer: x,
                maxCount: W,
              },
              function (e) {
                B ? t(B) : ((B = e), t(e));
              }
            );
      }
      function Q(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V,
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0,
          o = i || {},
          c = o.className,
          u = {
            info: "error-circle",
            success: "success",
            error: "ic-sensitiveword",
            warning: "warning",
            loading: "loading",
          }[n];
        "function" === typeof e && ((r = e), (e = V));
        var p = q;
        q += 1;
        var f = new Promise(function (i) {
            var o = function () {
              return "function" === typeof r && r(), i(!0);
            };
            z(function (r) {
              r.notice({
                key: p,
                duration: e,
                style: {},
                className: c,
                content: s.createElement(
                  "div",
                  {
                    className: l()(
                      "".concat(J, "-custom-content"),
                      a()({}, "".concat(J, "-").concat(n), n)
                    ),
                  },
                  u ? s.createElement(F.a, { type: u }) : null,
                  s.createElement("span", null, t)
                ),
                onClose: o,
              });
            });
          }),
          h = function () {
            B && B.removeNotice(p);
          };
        return (
          (h.then = function (t, e) {
            return f.then(t, e);
          }),
          (h.promise = f),
          h
        );
      }
      e.a = {
        info: function (t, e, n) {
          return Q(t, e, "info", n);
        },
        success: function (t, e, n) {
          return Q(t, e, "success", n);
        },
        error: function (t, e, n) {
          return Q(t, e, "error", n);
        },
        warning: function (t, e, n) {
          return Q(t, e, "warning", n);
        },
        loading: function (t, e, n) {
          return Q(t, e, "loading", n);
        },
        custom: function (t) {
          var e = t || {};
          return Q(e.content, e.duration, e.type, e.onClose, i()(e, H));
        },
        config: function (t) {
          void 0 !== t.top && ((L = t.top), (B = null)),
            void 0 !== t.duration && (V = t.duration),
            void 0 !== t.prefixCls && (J = t.prefixCls),
            void 0 !== t.getContainer && (x = t.getContainer),
            void 0 !== t.transitionName && ((K = t.transitionName), (B = null)),
            void 0 !== t.maxCount && ((W = t.maxCount), (B = null));
        },
        destroy: function () {
          B && (B.destroy(), (B = null));
        },
      };
    },
    ES7g: function (t, e, n) {
      var r = n("HxfZ");
      t.exports = function (t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    ExQa: function (t, e, n) {
      var r = n("2Wv2"),
        i = n("YYjS"),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        s = a
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  r(a(t), function (e) {
                    return o.call(t, e);
                  }));
            }
          : i;
      t.exports = s;
    },
    F1Vu: function (t, e, n) {
      var r = n("pfDB"),
        i = n("4cNG"),
        o = n("dZ9T"),
        a = {};
      (a["[object Float32Array]"] =
        a["[object Float64Array]"] =
        a["[object Int8Array]"] =
        a["[object Int16Array]"] =
        a["[object Int32Array]"] =
        a["[object Uint8Array]"] =
        a["[object Uint8ClampedArray]"] =
        a["[object Uint16Array]"] =
        a["[object Uint32Array]"] =
          !0),
        (a["[object Arguments]"] =
          a["[object Array]"] =
          a["[object ArrayBuffer]"] =
          a["[object Boolean]"] =
          a["[object DataView]"] =
          a["[object Date]"] =
          a["[object Error]"] =
          a["[object Function]"] =
          a["[object Map]"] =
          a["[object Number]"] =
          a["[object Object]"] =
          a["[object RegExp]"] =
          a["[object Set]"] =
          a["[object String]"] =
          a["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return o(t) && i(t.length) && !!a[r(t)];
        });
    },
    FDWG: function (t, e, n) {
      t.exports = n("4KFe")(127);
    },
    FXfC: function (t, e, n) {
      t.exports =
        n.p + "images/game10-top.b6d3222273ca133921ead6d84fc440dc.png";
    },
    FeFf: function (t, e) {
      t.exports = function (t, e) {
        var n = -1,
          r = t.length;
        for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
        return e;
      };
    },
    FpfA: function (t, e, n) {
      "use strict";
      var r = n("APG2"),
        i = n.n(r),
        o = n("UJcg"),
        a = n("nimoua"),
        s = n.n(a),
        c = n("KFtC"),
        u = n("cQwn"),
        l = n.n(u),
        p = n("X8JN"),
        f = n("KkFV");
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var d = { udbUserId: "", guid: "" };
      s.a.isInNimoApp &&
        n("mTTC")
          .default.getUserInfo()
          .then(function (t) {
            var e = t.udbUserId,
              n = t.guid;
            e && "-1" !== e && -1 !== e && (d.udbUserId = String(e)),
              n && (d.guid = n);
          });
      var v,
        m = function () {
          return (
            s.a.isInNimoApp ||
              ((d.guid = Object(p.a)()),
              (d.udbUserId = f.a.get("udbUserId") || "")),
            (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? h(Object(n), !0).forEach(function (e) {
                      l()(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : h(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({}, d)
          );
        },
        y = new o.f({
          getUid: function () {
            return m().udbUserId || "0";
          },
          getDeviceId: function () {
            return Object(c.l)();
          },
          getCountry: function () {
            return Object(c.g)();
          },
          getGuid: function () {
            return m().guid;
          },
          host: "https://metric.nimo.tv",
          isDebug: "false",
          isMobile:
            "mobile" ===
              (null === i.a ||
              void 0 === i.a ||
              null === (v = i.a.__NIMO_APP_DATA__) ||
              void 0 === v
                ? void 0
                : v.platform) || s.a.isWap,
          metricVerSuffix: "",
        });
      y.report.bind(y), (e.a = y);
    },
    G29E: function (t, e) {
      t.exports = function (t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
        return -1;
      };
    },
    GGlh: function (t, e, n) {
      var r = n("XVtd"),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        s = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = o.call(t, s),
          n = t[s];
        try {
          t[s] = void 0;
          var r = !0;
        } catch (c) {}
        var i = a.call(t);
        return r && (e ? (t[s] = n) : delete t[s]), i;
      };
    },
    GW7J: function (t, e) {
      var n = /\s/;
      t.exports = function (t) {
        for (var e = t.length; e-- && n.test(t.charAt(e)); );
        return e;
      };
    },
    Gx0h: function (t, e) {
      t.exports = function (t) {
        return t;
      };
    },
    Gzln: function (t, e, n) {
      var r = n("nC47"),
        i = n("k9ao"),
        o = n("2xoy");
      t.exports = function (t) {
        return r(t, o, i);
      };
    },
    HJHO: function (t, e, n) {
      var r = n("ZIlV"),
        i = n("AolX"),
        o = n("mW+N"),
        a = n("Jj6+");
      t.exports = function (t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t));
      };
    },
    HNvz: function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r = a(n("jd3G")),
        i = a(n("aH/G")),
        o = a(n("Jgc1"));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default = function (t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              ("undefined" === typeof e ? "undefined" : (0, o.default)(e))
          );
        (t.prototype = (0, i.default)(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e && (r.default ? (0, r.default)(t, e) : (t.__proto__ = e));
      };
    },
    Hbj9: function (t, e, n) {
      var r = n("ebMM")(n("nD2Q"), "Set");
      t.exports = r;
    },
    HqbC: function (t, e, n) {
      var r = n("bkuk"),
        i = n("VZ3+"),
        o = n("gjmc"),
        a = n("XS4o"),
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        u = Object.prototype,
        l = c.toString,
        p = u.hasOwnProperty,
        f = RegExp(
          "^" +
            l
              .call(p)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!o(t) || i(t)) && (r(t) ? f : s).test(a(t));
      };
    },
    HxfZ: function (t, e, n) {
      var r = n("ebMM")(Object, "create");
      t.exports = r;
    },
    I1K6: function (t, e, n) {
      var r = n("nC47"),
        i = n("ExQa"),
        o = n("nB/V");
      t.exports = function (t) {
        return r(t, o, i);
      };
    },
    I4Pt: function (t, e, n) {
      var r = n("KW9x"),
        i = n("6jXG");
      t.exports = function (t, e) {
        return e.length < 2 ? t : r(t, i(e, 0, -1));
      };
    },
    I81O: function (t, e) {
      !(function () {
        "use strict";
        if ("object" === typeof window)
          if (
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
          )
            "isIntersecting" in window.IntersectionObserverEntry.prototype ||
              Object.defineProperty(
                window.IntersectionObserverEntry.prototype,
                "isIntersecting",
                {
                  get: function () {
                    return this.intersectionRatio > 0;
                  },
                }
              );
          else {
            var t = window.document,
              e = [],
              n = null,
              r = null;
            (o.prototype.THROTTLE_TIMEOUT = 100),
              (o.prototype.POLL_INTERVAL = null),
              (o.prototype.USE_MUTATION_OBSERVER = !0),
              (o._setupCrossOriginUpdater = function () {
                return (
                  n ||
                    (n = function (t, n) {
                      (r =
                        t && n
                          ? p(t, n)
                          : {
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              width: 0,
                              height: 0,
                            }),
                        e.forEach(function (t) {
                          t._checkForIntersections();
                        });
                    }),
                  n
                );
              }),
              (o._resetCrossOriginUpdater = function () {
                (n = null), (r = null);
              }),
              (o.prototype.observe = function (t) {
                if (
                  !this._observationTargets.some(function (e) {
                    return e.element == t;
                  })
                ) {
                  if (!t || 1 != t.nodeType)
                    throw new Error("target must be an Element");
                  this._registerInstance(),
                    this._observationTargets.push({ element: t, entry: null }),
                    this._monitorIntersections(t.ownerDocument),
                    this._checkForIntersections();
                }
              }),
              (o.prototype.unobserve = function (t) {
                (this._observationTargets = this._observationTargets.filter(
                  function (e) {
                    return e.element != t;
                  }
                )),
                  this._unmonitorIntersections(t.ownerDocument),
                  0 == this._observationTargets.length &&
                    this._unregisterInstance();
              }),
              (o.prototype.disconnect = function () {
                (this._observationTargets = []),
                  this._unmonitorAllIntersections(),
                  this._unregisterInstance();
              }),
              (o.prototype.takeRecords = function () {
                var t = this._queuedEntries.slice();
                return (this._queuedEntries = []), t;
              }),
              (o.prototype._initThresholds = function (t) {
                var e = t || [0];
                return (
                  Array.isArray(e) || (e = [e]),
                  e.sort().filter(function (t, e, n) {
                    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                      throw new Error(
                        "threshold must be a number between 0 and 1 inclusively"
                      );
                    return t !== n[e - 1];
                  })
                );
              }),
              (o.prototype._parseRootMargin = function (t) {
                var e = (t || "0px").split(/\s+/).map(function (t) {
                  var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                  if (!e)
                    throw new Error(
                      "rootMargin must be specified in pixels or percent"
                    );
                  return { value: parseFloat(e[1]), unit: e[2] };
                });
                return (
                  (e[1] = e[1] || e[0]),
                  (e[2] = e[2] || e[0]),
                  (e[3] = e[3] || e[1]),
                  e
                );
              }),
              (o.prototype._monitorIntersections = function (e) {
                var n = e.defaultView;
                if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                  var r = this._checkForIntersections,
                    i = null,
                    o = null;
                  if (
                    (this.POLL_INTERVAL
                      ? (i = n.setInterval(r, this.POLL_INTERVAL))
                      : (a(n, "resize", r, !0),
                        a(e, "scroll", r, !0),
                        this.USE_MUTATION_OBSERVER &&
                          "MutationObserver" in n &&
                          (o = new n.MutationObserver(r)).observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0,
                          })),
                    this._monitoringDocuments.push(e),
                    this._monitoringUnsubscribes.push(function () {
                      var t = e.defaultView;
                      t && (i && t.clearInterval(i), s(t, "resize", r, !0)),
                        s(e, "scroll", r, !0),
                        o && o.disconnect();
                    }),
                    e != ((this.root && this.root.ownerDocument) || t))
                  ) {
                    var c = d(e);
                    c && this._monitorIntersections(c.ownerDocument);
                  }
                }
              }),
              (o.prototype._unmonitorIntersections = function (e) {
                var n = this._monitoringDocuments.indexOf(e);
                if (-1 != n) {
                  var r = (this.root && this.root.ownerDocument) || t;
                  if (
                    !this._observationTargets.some(function (t) {
                      var n = t.element.ownerDocument;
                      if (n == e) return !0;
                      for (; n && n != r; ) {
                        var i = d(n);
                        if ((n = i && i.ownerDocument) == e) return !0;
                      }
                      return !1;
                    })
                  ) {
                    var i = this._monitoringUnsubscribes[n];
                    if (
                      (this._monitoringDocuments.splice(n, 1),
                      this._monitoringUnsubscribes.splice(n, 1),
                      i(),
                      e != r)
                    ) {
                      var o = d(e);
                      o && this._unmonitorIntersections(o.ownerDocument);
                    }
                  }
                }
              }),
              (o.prototype._unmonitorAllIntersections = function () {
                var t = this._monitoringUnsubscribes.slice(0);
                (this._monitoringDocuments.length = 0),
                  (this._monitoringUnsubscribes.length = 0);
                for (var e = 0; e < t.length; e++) t[e]();
              }),
              (o.prototype._checkForIntersections = function () {
                if (this.root || !n || r) {
                  var t = this._rootIsInDom(),
                    e = t
                      ? this._getRootRect()
                      : {
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          width: 0,
                          height: 0,
                        };
                  this._observationTargets.forEach(function (r) {
                    var o = r.element,
                      a = u(o),
                      s = this._rootContainsTarget(o),
                      c = r.entry,
                      l =
                        t &&
                        s &&
                        this._computeTargetAndRootIntersection(o, a, e),
                      p = (r.entry = new i({
                        time:
                          window.performance &&
                          performance.now &&
                          performance.now(),
                        target: o,
                        boundingClientRect: a,
                        rootBounds: n && !this.root ? null : e,
                        intersectionRect: l,
                      }));
                    c
                      ? t && s
                        ? this._hasCrossedThreshold(c, p) &&
                          this._queuedEntries.push(p)
                        : c && c.isIntersecting && this._queuedEntries.push(p)
                      : this._queuedEntries.push(p);
                  }, this),
                    this._queuedEntries.length &&
                      this._callback(this.takeRecords(), this);
                }
              }),
              (o.prototype._computeTargetAndRootIntersection = function (
                e,
                i,
                o
              ) {
                if ("none" != window.getComputedStyle(e).display) {
                  for (var a = i, s = h(e), l = !1; !l && s; ) {
                    var f = null,
                      d = 1 == s.nodeType ? window.getComputedStyle(s) : {};
                    if ("none" == d.display) return null;
                    if (s == this.root || 9 == s.nodeType)
                      if (((l = !0), s == this.root || s == t))
                        n && !this.root
                          ? !r || (0 == r.width && 0 == r.height)
                            ? ((s = null), (f = null), (a = null))
                            : (f = r)
                          : (f = o);
                      else {
                        var v = h(s),
                          m = v && u(v),
                          y =
                            v &&
                            this._computeTargetAndRootIntersection(v, m, o);
                        m && y
                          ? ((s = v), (f = p(m, y)))
                          : ((s = null), (a = null));
                      }
                    else {
                      var g = s.ownerDocument;
                      s != g.body &&
                        s != g.documentElement &&
                        "visible" != d.overflow &&
                        (f = u(s));
                    }
                    if ((f && (a = c(f, a)), !a)) break;
                    s = s && h(s);
                  }
                  return a;
                }
              }),
              (o.prototype._getRootRect = function () {
                var e;
                if (this.root) e = u(this.root);
                else {
                  var n = t.documentElement,
                    r = t.body;
                  e = {
                    top: 0,
                    left: 0,
                    right: n.clientWidth || r.clientWidth,
                    width: n.clientWidth || r.clientWidth,
                    bottom: n.clientHeight || r.clientHeight,
                    height: n.clientHeight || r.clientHeight,
                  };
                }
                return this._expandRectByRootMargin(e);
              }),
              (o.prototype._expandRectByRootMargin = function (t) {
                var e = this._rootMarginValues.map(function (e, n) {
                    return "px" == e.unit
                      ? e.value
                      : (e.value * (n % 2 ? t.width : t.height)) / 100;
                  }),
                  n = {
                    top: t.top - e[0],
                    right: t.right + e[1],
                    bottom: t.bottom + e[2],
                    left: t.left - e[3],
                  };
                return (
                  (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
                );
              }),
              (o.prototype._hasCrossedThreshold = function (t, e) {
                var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                  r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                if (n !== r)
                  for (var i = 0; i < this.thresholds.length; i++) {
                    var o = this.thresholds[i];
                    if (o == n || o == r || o < n !== o < r) return !0;
                  }
              }),
              (o.prototype._rootIsInDom = function () {
                return !this.root || f(t, this.root);
              }),
              (o.prototype._rootContainsTarget = function (e) {
                return (
                  f(this.root || t, e) &&
                  (!this.root || this.root.ownerDocument == e.ownerDocument)
                );
              }),
              (o.prototype._registerInstance = function () {
                e.indexOf(this) < 0 && e.push(this);
              }),
              (o.prototype._unregisterInstance = function () {
                var t = e.indexOf(this);
                -1 != t && e.splice(t, 1);
              }),
              (window.IntersectionObserver = o),
              (window.IntersectionObserverEntry = i);
          }
        function i(t) {
          (this.time = t.time),
            (this.target = t.target),
            (this.rootBounds = l(t.rootBounds)),
            (this.boundingClientRect = l(t.boundingClientRect)),
            (this.intersectionRect = l(
              t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0,
              }
            )),
            (this.isIntersecting = !!t.intersectionRect);
          var e = this.boundingClientRect,
            n = e.width * e.height,
            r = this.intersectionRect,
            i = r.width * r.height;
          this.intersectionRatio = n
            ? Number((i / n).toFixed(4))
            : this.isIntersecting
            ? 1
            : 0;
        }
        function o(t, e) {
          var n = e || {};
          if ("function" != typeof t)
            throw new Error("callback must be a function");
          if (n.root && 1 != n.root.nodeType)
            throw new Error("root must be an Element");
          (this._checkForIntersections = (function (t, e) {
            var n = null;
            return function () {
              n ||
                (n = setTimeout(function () {
                  t(), (n = null);
                }, e));
            };
          })(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT)),
            (this._callback = t),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(n.rootMargin)),
            (this.thresholds = this._initThresholds(n.threshold)),
            (this.root = n.root || null),
            (this.rootMargin = this._rootMarginValues
              .map(function (t) {
                return t.value + t.unit;
              })
              .join(" ")),
            (this._monitoringDocuments = []),
            (this._monitoringUnsubscribes = []);
        }
        function a(t, e, n, r) {
          "function" == typeof t.addEventListener
            ? t.addEventListener(e, n, r || !1)
            : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n);
        }
        function s(t, e, n, r) {
          "function" == typeof t.removeEventListener
            ? t.removeEventListener(e, n, r || !1)
            : "function" == typeof t.detatchEvent &&
              t.detatchEvent("on" + e, n);
        }
        function c(t, e) {
          var n = Math.max(t.top, e.top),
            r = Math.min(t.bottom, e.bottom),
            i = Math.max(t.left, e.left),
            o = Math.min(t.right, e.right),
            a = o - i,
            s = r - n;
          return (
            (a >= 0 &&
              s >= 0 && {
                top: n,
                bottom: r,
                left: i,
                right: o,
                width: a,
                height: s,
              }) ||
            null
          );
        }
        function u(t) {
          var e;
          try {
            e = t.getBoundingClientRect();
          } catch (n) {}
          return e
            ? ((e.width && e.height) ||
                (e = {
                  top: e.top,
                  right: e.right,
                  bottom: e.bottom,
                  left: e.left,
                  width: e.right - e.left,
                  height: e.bottom - e.top,
                }),
              e)
            : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
        function l(t) {
          return !t || "x" in t
            ? t
            : {
                top: t.top,
                y: t.top,
                bottom: t.bottom,
                left: t.left,
                x: t.left,
                right: t.right,
                width: t.width,
                height: t.height,
              };
        }
        function p(t, e) {
          var n = e.top - t.top,
            r = e.left - t.left;
          return {
            top: n,
            left: r,
            height: e.height,
            width: e.width,
            bottom: n + e.height,
            right: r + e.width,
          };
        }
        function f(t, e) {
          for (var n = e; n; ) {
            if (n == t) return !0;
            n = h(n);
          }
          return !1;
        }
        function h(e) {
          var n = e.parentNode;
          return 9 == e.nodeType && e != t
            ? d(e)
            : n && 11 == n.nodeType && n.host
            ? n.host
            : n && n.assignedSlot
            ? n.assignedSlot.parentNode
            : n;
        }
        function d(t) {
          try {
            return (t.defaultView && t.defaultView.frameElement) || null;
          } catch (e) {
            return null;
          }
        }
      })();
    },
    IDCC: function (t, e, n) {
      "use strict";
      var r = n("rIiI"),
        i = n.n(r),
        o = n("58BP"),
        a = n.n(o),
        s = n("cQwn"),
        c = n.n(s),
        u = n("gtb+"),
        l = n.n(u),
        p = n("q4i/"),
        f = n.n(p),
        h = n("nimoua"),
        d = n.n(h),
        v = n("KFtC"),
        m = n("dBYC"),
        y = (n("RlNQ"), n("YQsQ")),
        g = n.n(y),
        b = n("Ptek"),
        w = n.n(b),
        S = n("gy9q"),
        E = n.n(S),
        _ = n("7DFi"),
        I = n.n(_),
        T = n("TJEx"),
        O = n.n(T),
        k = n("RA07"),
        R = n("jKdo"),
        U = n("xB+L"),
        C = n("+H5Y"),
        P = n("LpuD");
      function N(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = O()(t);
          if (e) {
            var i = O()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return I()(this, n);
        };
      }
      var A = (function (t) {
          E()(n, t);
          var e = N(n);
          function n(t) {
            var r;
            return (
              i()(this, n),
              (r = e.call(this, t)),
              c()(w()(r), "_msgCallback", function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  e = f()(t, 2),
                  n = e[0],
                  i = e[1],
                  o = Object(k.a)("data:text/plain;base64,".concat(i));
                Object(R.c)(o)
                  .then(function (t) {
                    var e = P.a.get(n);
                    return Object(R.d)(t, e, n);
                  })
                  .then(function (t) {
                    r.emit(n, Object(k.f)(n, t));
                  });
              }),
              c()(w()(r), "_protocolCallback", function (t) {
                var e = f()(t, 2),
                  n = e[0],
                  i = e[1];
                r._logger.success("[msgCallback]", n, i);
                var o = Object(k.b)("data:text/plain;base64,".concat(i));
                try {
                  var a = JSON.parse(o);
                  r._logger.success("[msgCallback]", n, a), r.emit(n, a);
                } catch (s) {
                  r._logger.err("[msgCallback]", n, i);
                }
              }),
              c()(w()(r), "_businessMsgCallback", function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = t.msgCallback,
                  n = function (t) {
                    var n = t || [],
                      i = f()(n, 2),
                      o = i[0],
                      a = i[1],
                      s = Object(k.b)("data:text/plain;base64,".concat(a));
                    r._logger.log("[msgCallback]", o, a, g()(s), s);
                    try {
                      var c = JSON.parse(s);
                      "function" === typeof e && e([o, c]);
                    } catch (u) {
                      r._logger.err(u);
                    }
                  };
                Object(U.setBusinessMsgCallback)({ msgCallback: n });
              }),
              (r.clientType = "webview"),
              (r._logger = r.createLogger()),
              (r._timer = null),
              r.init(),
              r
            );
          }
          return (
            a()(n, [
              {
                key: "init",
                value: function () {
                  var t = this;
                  this.initialized ||
                    this._timer ||
                    (this._timer = setTimeout(function () {
                      Object(U.setSocketMsgCallback)({
                        msgCallback: t._msgCallback,
                        protocolCallback: t._protocolCallback,
                      }),
                        (t.initialized = !0);
                    }, 200));
                },
              },
              {
                key: "_sendBizMsg",
                value: function (t, e) {
                  switch (t) {
                    case m.b.REGISTER_SOCKET_MSG:
                      Object(U.registerSocketMsg)(e);
                      break;
                    case m.b.UNREGISTER_SOCKET_MSG:
                      Object(U.unregisterSocketMsg)(e);
                      break;
                    case m.b.SHOW_TOAST:
                      Object(U.showToastByApp)(e);
                      break;
                    case m.b.JUMP_TO_LIVE_ROOM:
                      Object(U.jumpToLiveRoom)(e);
                      break;
                    case m.b.POPUP_LOGIN:
                      Object(U.toastLoginBoxByApp)(e);
                      break;
                    case m.b.REGISTER_BUSINESS_MSG:
                      Object(U.registerBusinessMsg)(e);
                      break;
                    case m.b.UNREGISTER_BUSINESS_MSG:
                      Object(U.unregisterBusinessMsg)(e);
                      break;
                    case m.b.SET_BUSINESS_MSG_CALLBACK:
                      this._businessMsgCallback(e);
                      break;
                    case m.b.GET_LIVE_ROOM_INFO:
                      var n = (e || {}).successCallback;
                      Object(U.getLiveroomInfo)(e).then(n);
                      break;
                    case m.b.SHOW_USER_INFO_DIALOG:
                      Object(U.showUserInfoDialog)(e);
                      break;
                    case m.b.POPUP_JOIN_FANS_MODAL:
                      Object(U.popupJoinFansModal)(e);
                      break;
                    case m.b.POPUP_PAID_SUBSCRIPTION_MODAL:
                      Object(U.popupPaidSubscriptionModal)(e);
                      break;
                    case m.b.FOLLOW_EVENT:
                      Object(U.followEvent)(e);
                      break;
                    case m.b.SUBSCRIBE_TOPIC:
                      Object(U.subscribeTopic)(e);
                      break;
                    case m.b.UNSUBSCRIBE_TOPIC:
                      Object(U.unsubscribeTopic)(e);
                      break;
                    case m.b.POPUP_SHARE:
                      Object(U.toastShareBoxByApp)(e);
                      break;
                    case m.b.JUMP_OUTER_BROWSER:
                      Object(U.jumpToOuterBrowser)(e);
                      break;
                    case m.b.UPDATE_ACCOUNT_BALANCE:
                      break;
                    case m.b.CLOSE_SELF:
                      Object(U.closeWebView)();
                      break;
                    case m.b.OPEN_INNER_BROWSER:
                      Object(U.jumpToInnerBrowser)(e);
                      break;
                    default:
                      Object(U.sendBussinessMsg)(t, e);
                  }
                },
              },
            ]),
            n
          );
        })(C.a),
        M = n("f2qI"),
        D = n.n(M),
        j = n("7Qmc"),
        L = n("p1oI"),
        B = n("7eNh"),
        x = function () {
          if (location.ancestorOrigins && location.ancestorOrigins.length > 0)
            return location.ancestorOrigins[0];
          var t = document.referrer;
          if (t) {
            var e = /^\w+:\/\/[^/?#]+/.exec(t);
            if (e) return e[0];
          }
          return "";
        },
        W = ["type", "_uuid"];
      function G(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function F(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? G(Object(n), !0).forEach(function (e) {
                c()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function H(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = O()(t);
          if (e) {
            var i = O()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return I()(this, n);
        };
      }
      var V = (function (t) {
        E()(n, t);
        var e = H(n);
        function n(t) {
          var r;
          i()(this, n),
            (r = e.call(this, t)),
            c()(w()(r), "initialized", !1),
            c()(
              w()(r),
              "getUrlParams",
              Object(j.a)(function (t) {
                return Object(L.a)(t, window.location.search);
              })
            ),
            c()(w()(r), "_handleMessage", function (t) {
              var e = (t || {}).data || {},
                n = e.type,
                i = e._uuid,
                o = D()(e, W);
              if (i === r._uuid)
                switch (n) {
                  case "taf_msg":
                    r._msgCallback(o);
                    break;
                  case "java_msg":
                    r._protocolCallback(o);
                    break;
                  case "biz_msg":
                    r._bizCallback(o);
                    break;
                  case "biz_func":
                    r._callBizFunc(o);
                }
            }),
            (r.clientType = "iframe"),
            (r._logger = r.createLogger()),
            (r._uuid = r.getUrlParams("_uuid")),
            r.init(),
            (r._callbackParams = {}),
            (r._callback_prefix = "i_".concat(
              Math.random().toString(32).slice(2, 10)
            )),
            (r._fId = 0);
          var o = window.top !== window ? x() : "";
          return (r._parentOrigin = o && B.a.includes(o) ? o : ""), r;
        }
        return (
          a()(n, [
            {
              key: "getCallbackId",
              value: function () {
                return (
                  (this._fId += 1),
                  "".concat(this._callback_prefix, "_").concat(this._fId)
                );
              },
            },
            {
              key: "init",
              value: function () {
                this.initialized ||
                  ((this.initialized = !0),
                  window.addEventListener("message", this._handleMessage));
              },
            },
            {
              key: "_sendBizMsg",
              value: function (t, e) {
                switch (t) {
                  case m.b.SET_BUSINESS_MSG_CALLBACK:
                    var n = this.getCallbackId();
                    this._registerCallback({
                      callbackId: n,
                      callback: e.msgCallback,
                      messageId: t,
                      once: !1,
                    }),
                      this._sendBizMsgToParentWithCallback(t, {
                        msgCallback: n,
                      });
                    break;
                  case m.b.GET_LIVE_ROOM_INFO:
                    var r = this.getCallbackId();
                    this._registerCallback({
                      callbackId: r,
                      callback: e.successCallback,
                      messageId: t,
                    }),
                      this._sendBizMsgToParentWithCallback(t, {
                        successCallback: r,
                      });
                    break;
                  case m.b.POPUP_PAID_SUBSCRIPTION_MODAL:
                    window.parent.postMessage(
                      { messageId: t, _uuid: this._uuid },
                      "*"
                    );
                    break;
                  case m.b.POPUP_SHARE:
                    var i = this.getCallbackId();
                    this._registerCallback({
                      callbackId: i,
                      callback: e.platformCallback,
                      messageId: t,
                    }),
                      this._sendBizMsgToParentWithCallback(
                        t,
                        F(F({}, e), {}, { platformCallback: i })
                      );
                    break;
                  case m.b.POPUP_JOIN_FANS_MODAL:
                    var o = this.getCallbackId();
                    this._registerCallback({
                      callbackId: o,
                      callback: e.clickJoinCallback,
                      messageId: t,
                    }),
                      this._sendBizMsgToParentWithCallback(t, {
                        clickJoinCallback: o,
                      });
                    break;
                  default:
                    this._sendBizMsgToParent(t, e);
                }
              },
            },
            {
              key: "_msgCallback",
              value: function (t) {
                var e = this,
                  n = t || {},
                  r = n.uri,
                  i = n.data,
                  o = P.a.get(r);
                o &&
                  Object(R.d)(i, o, r).then(function (t) {
                    e.emit(r, Object(k.f)(r, t));
                  });
              },
            },
            {
              key: "_protocolCallback",
              value: function (t) {
                var e = t || {},
                  n = e.sProtocolName,
                  r = e.data;
                this._logger.success("[protocolCallback]", n, r),
                  this.emit(n, r);
              },
            },
            {
              key: "_bizCallback",
              value: function (t) {
                var e = t || {},
                  n = e.messageId,
                  r = e.data;
                this._logger.success("[bizCallback]", n, r),
                  this.emit("business_message", t);
              },
            },
            {
              key: "_sendBizMsgToParent",
              value: function (t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = n.callbackType;
                if (
                  window.parent &&
                  "function" === typeof window.parent.postMessage
                ) {
                  var i = { messageId: t, data: e, _uuid: this._uuid };
                  r && (i.callbackType = r);
                  var o = m.d.includes(t);
                  o
                    ? this._parentOrigin &&
                      window.parent.postMessage(i, this._parentOrigin)
                    : window.parent.postMessage(i, "*");
                }
              },
            },
            {
              key: "_sendBizMsgToParentWithCallback",
              value: function (t, e) {
                this._sendBizMsgToParent(t, e, { callbackType: "postMessage" });
              },
            },
            {
              key: "_registerCallback",
              value: function (t) {
                var e = t.callbackId,
                  n = t.callback;
                (window[e] = n), (this._callbackParams[e] = t);
              },
            },
            {
              key: "_unregisterCallback",
              value: function (t) {
                delete window[t], delete this._callbackParams[t];
              },
            },
            {
              key: "_callBizFunc",
              value: function (t) {
                var e = t.callbackId,
                  n = t.args;
                if (
                  Object.prototype.hasOwnProperty.call(this._callbackParams, e)
                ) {
                  var r = this._callbackParams[e];
                  if (r) {
                    var i = r.callback,
                      o = r.once,
                      a = void 0 === o || o,
                      s = r.messageId;
                    if (
                      "function" === typeof i &&
                      (void 0 === n || Array.isArray(n))
                    ) {
                      try {
                        void 0 === n ? i() : i.apply(void 0, l()(n)),
                          this._logger.success("[biz_func]", s, e, n);
                      } catch (p) {
                        var c, u;
                        "function" ===
                          typeof (null === (c = window) ||
                          void 0 === c ||
                          null === (u = c.Sentry) ||
                          void 0 === u
                            ? void 0
                            : u.captureException) &&
                          window.Sentry.captureException(p),
                          this._logger.error("[biz_func]", s, e, n, p);
                      }
                      a && this._unregisterCallback(e);
                    }
                  }
                }
              },
            },
          ]),
          n
        );
      })(C.a);
      function q(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = O()(t);
          if (e) {
            var i = O()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return I()(this, n);
        };
      }
      var J = (function (t) {
          E()(n, t);
          var e = q(n);
          function n(t) {
            var r;
            return (
              i()(this, n),
              (r = e.call(this, t)),
              c()(w()(r), "_messengerPhone", void 0),
              c()(w()(r), "initialized", !1),
              c()(w()(r), "handleMessengerPhoneCall", function (t) {
                var e = t || {},
                  n = e.type,
                  i = e.data;
                switch (n) {
                  case "taf_msg":
                    r._msgCallback(i);
                    break;
                  case "java_msg":
                    r._protocolCallback(i);
                    break;
                  case "biz_msg":
                    r._bizCallback(i);
                }
              }),
              (r.clientType = "web"),
              (r._logger = r.createLogger()),
              r
            );
          }
          return (
            a()(n, [
              {
                key: "messengerPhone",
                get: function () {
                  if (this._messengerPhone) return this._messengerPhone;
                  throw new ReferenceError("[messengerPhone] is undefined.");
                },
                set: function (t) {
                  if (!t)
                    throw new ReferenceError("[messengerPhone] is undefined.");
                  this._messengerPhone = t;
                },
              },
              {
                key: "init",
                value: function () {
                  this.initialized ||
                    ((this.initialized = !0),
                    this.messengerPhone.on(
                      "incomingCall",
                      this.handleMessengerPhoneCall
                    ));
                },
              },
              {
                key: "dispose",
                value: function () {
                  (this.initialized = !1),
                    this.messengerPhone.off(
                      "incomingCall",
                      this.handleMessengerPhoneCall
                    );
                },
              },
              {
                key: "_sendBizMsg",
                value: function (t, e) {
                  (t !== m.b.CLOSE_ACTIVITY_MODAL || this._messengerPhone) &&
                    this.messengerPhone.emit("message", {
                      messageId: t,
                      data: e,
                    });
                },
              },
              {
                key: "_msgCallback",
                value: function (t) {
                  var e = t || {},
                    n = e.uri,
                    r = e.data;
                  this.emit(n, Object(k.f)(n, r));
                },
              },
              {
                key: "_protocolCallback",
                value: function (t) {
                  var e = t || {},
                    n = e.sProtocolName,
                    r = e.data;
                  this._logger.success("[protocolCallback]", n, r),
                    this.emit(n, r);
                },
              },
              {
                key: "_bizCallback",
                value: function (t) {
                  var e = t || [],
                    n = f()(e, 2),
                    r = n[0],
                    i = n[1];
                  this._logger.success("[bizCallback]", r, i),
                    this.emit("business_message", [r, i]);
                },
              },
            ]),
            n
          );
        })(C.a),
        K = n("3vdS"),
        z = (function () {
          function t() {
            i()(this, t),
              c()(this, "messenger", null),
              (this.messenger = t.createMessenger()),
              (this._logger = this.messenger.createLogger()),
              this.initAPI();
          }
          return (
            a()(
              t,
              [
                {
                  key: "eMessageName",
                  get: function () {
                    return m.c.map(function (t) {
                      return f()(t, 2)[1];
                    });
                  },
                },
                {
                  key: "eBusinessMessageId",
                  get: function () {
                    return m.a;
                  },
                },
                {
                  key: "initAPI",
                  value: function () {
                    var t = this;
                    ["init", "on", "off", "emit"]
                      .concat(l()(this.eMessageName))
                      .forEach(function (e) {
                        "undefined" === typeof t[e] &&
                          (t[e] = function () {
                            var n;
                            return (n = t.messenger)[e].apply(n, arguments);
                          });
                      });
                  },
                },
                {
                  key: "setMessengerPhone",
                  value: function (t) {
                    this.messenger.messengerPhone = t;
                  },
                },
              ],
              [
                {
                  key: "createInstance",
                  value: function () {
                    return new t();
                  },
                },
                {
                  key: "createMessenger",
                  value: function () {
                    var t = Object(K.a)();
                    return (
                      t ||
                      (d.a.isInNimoApp
                        ? new A()
                        : Object(v.t)()
                        ? new V()
                        : new J())
                    );
                  },
                },
              ]
            ),
            t
          );
        })(),
        Q = (function () {
          function t() {
            i()(this, t);
          }
          return (
            a()(t, null, [
              {
                key: "getInstance",
                value: function () {
                  return (
                    null === t._instance && (t._instance = z.createInstance()),
                    t._instance
                  );
                },
              },
            ]),
            t
          );
        })();
      c()(Q, "_instance", null);
      e.a = Q;
    },
    IDDi: function (t, e, n) {
      var r = n("pfDB"),
        i = n("dZ9T");
      t.exports = function (t) {
        return i(t) && "[object Arguments]" == r(t);
      };
    },
    JEK1: function (t, e, n) {
      t.exports = n.p + "images/firstred.fac86d7fb19898bc61af3d2c56226680.png";
    },
    JRup: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return k;
      });
      n("RlNQ");
      var r = n("58BP"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("gy9q"),
        c = n.n(s),
        u = n("7DFi"),
        l = n.n(u),
        p = n("TJEx"),
        f = n.n(p),
        h = n("2/Zn"),
        d = n("TrR6"),
        v = n("ZMLX"),
        m = n("ZxgU"),
        y = function () {
          (this.lUid = 0),
            (this.lPresenterUid = 0),
            (this.lRoomId = 0),
            (this.sPresenterName = ""),
            (this.sSenderName = ""),
            (this.iPropsId = 0),
            (this.iLuckyGiftType = 0),
            (this.iAwardPayType = 0),
            (this.iAwardCount = 0),
            (this.iTimeStamp = 0);
        };
      (y.prototype._clone = function () {
        return new v.a.LuckyWinnerTips();
      }),
        (y.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (y.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (y.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lUid),
            t.writeInt64(1, this.lPresenterUid),
            t.writeInt64(2, this.lRoomId),
            t.writeString(3, this.sPresenterName),
            t.writeString(4, this.sSenderName),
            t.writeInt32(5, this.iPropsId),
            t.writeInt32(6, this.iLuckyGiftType),
            t.writeInt32(7, this.iAwardPayType),
            t.writeInt32(8, this.iAwardCount),
            t.writeInt32(9, this.iTimeStamp);
        }),
        (y.prototype.readFrom = function (t) {
          (this.lUid = t.readInt64(0, !1, this.lUid)),
            (this.lPresenterUid = t.readInt64(1, !1, this.lPresenterUid)),
            (this.lRoomId = t.readInt64(2, !1, this.lRoomId)),
            (this.sPresenterName = t.readString(3, !1, this.sPresenterName)),
            (this.sSenderName = t.readString(4, !1, this.sSenderName)),
            (this.iPropsId = t.readInt32(5, !1, this.iPropsId)),
            (this.iLuckyGiftType = t.readInt32(6, !1, this.iLuckyGiftType)),
            (this.iAwardPayType = t.readInt32(7, !1, this.iAwardPayType)),
            (this.iAwardCount = t.readInt32(8, !1, this.iAwardCount)),
            (this.iTimeStamp = t.readInt32(9, !1, this.iTimeStamp));
        }),
        (v.a.LuckyWinnerTips = y);
      n("wYX4");
      var g = { ENormalTreasure: 0, ELuckyTreasure: 1 };
      v.a.ELuckyGiftType = g;
      n("l/4b");
      var b = n("4TRz"),
        w =
          (n("s5/g"),
          function () {
            (this.lUid = 0),
              (this.lRoomId = 0),
              (this.tItem = new v.a.GiftItemInfo()),
              (this.iSendItemCount = 0);
          });
      (w.prototype._clone = function () {
        return new v.a.LuckyAwardNotice();
      }),
        (w.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (w.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (w.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lUid),
            t.writeInt64(1, this.lRoomId),
            t.writeStruct(2, this.tItem),
            t.writeInt32(3, this.iSendItemCount);
        }),
        (w.prototype.readFrom = function (t) {
          (this.lUid = t.readInt64(0, !1, this.lUid)),
            (this.lRoomId = t.readInt64(1, !1, this.lRoomId)),
            (this.tItem = t.readStruct(2, !1, this.tItem)),
            (this.iSendItemCount = t.readInt32(3, !1, this.iSendItemCount));
        }),
        (v.a.LuckyAwardNotice = w);
      var S = w,
        E = function () {
          (this.iNewStatus = 0), (this.iEndTs = 0);
        };
      (E.prototype._clone = function () {
        return new v.a.LuckyGiftSuperScoreChangeNotice();
      }),
        (E.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (E.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (E.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iNewStatus), t.writeInt32(1, this.iEndTs);
        }),
        (E.prototype.readFrom = function (t) {
          (this.iNewStatus = t.readInt32(0, !1, this.iNewStatus)),
            (this.iEndTs = t.readInt32(1, !1, this.iEndTs));
        }),
        (v.a.LuckyGiftSuperScoreChangeNotice = E);
      var _ = function () {
        (this.iGiftPieceNum = 0),
          (this.iExchangeGiftNum = 0),
          (this.sGiftPieceName = "");
      };
      (_.prototype._clone = function () {
        return new v.a.GiftBoxPieceAwardNotice();
      }),
        (_.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (_.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (_.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iGiftPieceNum),
            t.writeInt32(1, this.iExchangeGiftNum),
            t.writeString(2, this.sGiftPieceName);
        }),
        (_.prototype.readFrom = function (t) {
          (this.iGiftPieceNum = t.readInt32(0, !1, this.iGiftPieceNum)),
            (this.iExchangeGiftNum = t.readInt32(1, !1, this.iExchangeGiftNum)),
            (this.sGiftPieceName = t.readString(2, !1, this.sGiftPieceName));
        }),
        (v.a.GiftBoxPieceAwardNotice = _);
      n("JasO");
      var I = function () {
        this.vRecordList = new m.b.Vector(new v.a.LuckyPrizeRecord());
      };
      (I.prototype._clone = function () {
        return new v.a.GiftBoxGlobalPrizeRecordList();
      }),
        (I.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (I.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (I.prototype.writeTo = function (t) {
          t.writeVector(0, this.vRecordList);
        }),
        (I.prototype.readFrom = function (t) {
          this.vRecordList = t.readVector(0, !1, this.vRecordList);
        }),
        (v.a.GiftBoxGlobalPrizeRecordList = I);
      var T = I;
      function O(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = f()(t);
          if (e) {
            var i = f()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l()(this, n);
        };
      }
      var k = { id: "".concat(d.a.kAppId), subId: ["1400"] },
        R = b.a.EUriLuckyAwardNotice,
        U =
          (b.a.EUriLuckyGiftRewardRoom,
          b.a.EUriLuckyGiftSuperScoreChangeNotice,
          b.a.EUriLuckyGiftPieceAwardNotice,
          b.a.EUriLuckyGiftPrizeRecordListNotice),
        C = new ((function (t) {
          c()(n, t);
          var e = O(n);
          function n() {
            return a()(this, n), e.apply(this, arguments);
          }
          return i()(n);
        })(h.g))({
          broadcasts: {
            LuckyGiftNotice: [R, S],
            LuckyGiftPrizeRecordListNotice: [U, T],
          },
        });
      e.a = C;
    },
    JasO: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i = n("ZxgU"),
        o =
          (n("s5/g"),
          function () {
            (this.lUid = 0),
              (this.lRoomId = 0),
              (this.iTimeStamp = 0),
              (this.iSendItemType = 0),
              (this.iSendItemCount = 0),
              (this.iGiftBoxType = 0),
              (this.iGiftBoxCount = 0),
              (this.vRecvItem = new i.b.Vector(new r.a.GiftItemInfo())),
              (this.sSendName = ""),
              (this.sRecvName = ""),
              (this.lAnchorUid = 0);
          });
      (o.prototype._clone = function () {
        return new r.a.LuckyPrizeRecord();
      }),
        (o.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (o.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (o.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lUid),
            t.writeInt64(1, this.lRoomId),
            t.writeInt32(2, this.iTimeStamp),
            t.writeInt32(3, this.iSendItemType),
            t.writeInt32(4, this.iSendItemCount),
            t.writeInt32(5, this.iGiftBoxType),
            t.writeInt32(6, this.iGiftBoxCount),
            t.writeVector(7, this.vRecvItem),
            t.writeString(8, this.sSendName),
            t.writeString(9, this.sRecvName),
            t.writeInt64(10, this.lAnchorUid);
        }),
        (o.prototype.readFrom = function (t) {
          (this.lUid = t.readInt64(0, !1, this.lUid)),
            (this.lRoomId = t.readInt64(1, !1, this.lRoomId)),
            (this.iTimeStamp = t.readInt32(2, !1, this.iTimeStamp)),
            (this.iSendItemType = t.readInt32(3, !1, this.iSendItemType)),
            (this.iSendItemCount = t.readInt32(4, !1, this.iSendItemCount)),
            (this.iGiftBoxType = t.readInt32(5, !1, this.iGiftBoxType)),
            (this.iGiftBoxCount = t.readInt32(6, !1, this.iGiftBoxCount)),
            (this.vRecvItem = t.readVector(7, !1, this.vRecvItem)),
            (this.sSendName = t.readString(8, !1, this.sSendName)),
            (this.sRecvName = t.readString(9, !1, this.sRecvName)),
            (this.lAnchorUid = t.readInt64(10, !1, this.lAnchorUid));
        }),
        (r.a.LuckyPrizeRecord = o);
    },
    Jgc1: function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r = a(n("kX2Q")),
        i = a(n("fTte")),
        o =
          "function" === typeof i.default && "symbol" === typeof r.default
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof i.default &&
                  t.constructor === i.default &&
                  t !== i.default.prototype
                  ? "symbol"
                  : typeof t;
              };
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default =
        "function" === typeof i.default && "symbol" === o(r.default)
          ? function (t) {
              return "undefined" === typeof t ? "undefined" : o(t);
            }
          : function (t) {
              return t &&
                "function" === typeof i.default &&
                t.constructor === i.default &&
                t !== i.default.prototype
                ? "symbol"
                : "undefined" === typeof t
                ? "undefined"
                : o(t);
            };
    },
    "Jj6+": function (t, e, n) {
      var r = n("knjD");
      t.exports = function (t) {
        return null == t ? "" : r(t);
      };
    },
    JtW8: function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r = n("f2qI"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("58BP"),
        c = n.n(s),
        u = n("Ptek"),
        l = n.n(u),
        p = n("tWqE"),
        f = n.n(p),
        h = n("gy9q"),
        d = n.n(h),
        v = n("7DFi"),
        m = n.n(v),
        y = n("TJEx"),
        g = n.n(y),
        b = n("cQwn"),
        w = n.n(b),
        S = n("CbEt"),
        E = n.n(S),
        _ = n("Kw0i"),
        I = n("RA07"),
        T = n("jKdo"),
        O = n("USXb"),
        k = n("4TRz"),
        R = n("cOjp"),
        U = n("LpuD"),
        C = ["sData"];
      function P(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? P(Object(n), !0).forEach(function (e) {
                w()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function A(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = g()(t);
          if (e) {
            var i = g()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return m()(this, n);
        };
      }
      var M = k.a.EUriJServerPacket,
        D = (function (t) {
          d()(n, t);
          var e = A(n);
          function n() {
            var t;
            return (
              a()(this, n),
              (t = e.call(this)),
              w()(l()(t), "_uriQueue", []),
              w()(l()(t), "_protocolQueue", []),
              w()(l()(t), "_eventListenerCount", 0),
              w()(l()(t), "_bizMsgQueue", []),
              w()(l()(t), "_bizMsgEventListenerCount", 0),
              w()(l()(t), "handleReceiveTafMsg", function (e) {
                var n = Object(I.c)(e.uri);
                t._uriQueue.indexOf(n) > -1 &&
                  (n === M
                    ? t.sendJavaMsg(N(N({}, e), {}, { uri: n }))
                    : t.sendTafMsg(N(N({}, e), {}, { uri: n })));
              }),
              w()(l()(t), "handleBizMsg", function (e) {
                t.emit("business_message", { type: "biz_msg", data: e });
              }),
              (t._logger = new R.a({ prefix: "nm-interphone" })),
              t
            );
          }
          return (
            c()(n, [
              {
                key: "dispose",
                value: function () {
                  _.b.off(_.a.TAF_MESSAGE_RECEIVE, this.handleReceiveTafMsg),
                    _.b.off(_.a.GLOBAL_BUSINESS_MESSAGE, this.handleBizMsg),
                    (this._uriQueue = null),
                    (this._protocolQueue = null),
                    (this._eventListenerCount = null),
                    (this._bizMsgQueue = null),
                    (this._bizMsgEventListenerCount = null);
                },
              },
              {
                key: "registerSocketMsg",
                value: function (t) {
                  var e = this,
                    n = t || {},
                    r = n.ids,
                    i = void 0 === r ? [] : r,
                    o = n.protocols,
                    a = void 0 === o ? [] : o;
                  i.forEach(function (t) {
                    -1 === e._uriQueue.indexOf(t) && e._uriQueue.push(t);
                  }),
                    a.forEach(function (t) {
                      -1 === e._protocolQueue.indexOf(t) &&
                        e._protocolQueue.push(t);
                    });
                },
              },
              {
                key: "unregisterSocketMsg",
                value: function (t) {
                  var e = t || {},
                    n = e.ids,
                    r = void 0 === n ? [] : n,
                    i = e.protocols,
                    o = void 0 === i ? [] : i;
                  if (Array.isArray(r) && r.length > 0) {
                    for (
                      var a = [], s = this._uriQueue.length, c = 0;
                      c < s;
                      c++
                    ) {
                      var u = this._uriQueue[c];
                      -1 === r.indexOf(u) && a.push(u);
                    }
                    this._uriQueue = a;
                  }
                  Array.isArray(o) &&
                    o.length > 0 &&
                    (this._protocolQueue = this._protocolQueue.filter(function (
                      t
                    ) {
                      return -1 === o.indexOf(t);
                    }));
                },
              },
              {
                key: "registerBusinessMsg",
                value: function (t) {
                  var e = this,
                    n = (t || {}).ids;
                  (void 0 === n ? [] : n).forEach(function (t) {
                    -1 === e._bizMsgQueue.indexOf(t) && e._bizMsgQueue.push(t);
                  });
                },
              },
              {
                key: "unregisterBusinessMsg",
                value: function (t) {
                  var e = (t || {}).ids,
                    n = void 0 === e ? [] : e;
                  Array.isArray(n) &&
                    n.length > 0 &&
                    (this._uriQueue = this._uriQueue.filter(function (t) {
                      return -1 === n.indexOf(t);
                    }));
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  f()(g()(n.prototype), "on", this).call(this, t, e),
                    "message" === t &&
                      !this._eventListenerCount &&
                      (this._uriQueue.length > 0 ||
                        this._protocolQueue.length > 0) &&
                      (_.b.on(
                        _.a.TAF_MESSAGE_RECEIVE,
                        this.handleReceiveTafMsg
                      ),
                      (this._eventListenerCount += 1)),
                    "business_message" === t &&
                      !this._bizMsgEventListenerCount &&
                      this._bizMsgQueue.length > 0 &&
                      (_.b.on(_.a.GLOBAL_BUSINESS_MESSAGE, this.handleBizMsg),
                      (this._bizMsgEventListenerCount += 1));
                },
              },
              {
                key: "off",
                value: function (t, e) {
                  f()(g()(n.prototype), "off", this).call(this, t, e),
                    "message" === t &&
                      this._eventListenerCount &&
                      0 === this._uriQueue.length &&
                      0 === this._protocolQueue.length &&
                      (_.b.off(
                        _.a.TAF_MESSAGE_RECEIVE,
                        this.handleReceiveTafMsg
                      ),
                      (this._eventListenerCount -= 1)),
                    "business_message" === t &&
                      this._bizMsgEventListenerCount &&
                      0 === this._bizMsgQueue.length &&
                      (_.b.off(_.a.GLOBAL_BUSINESS_MESSAGE, this.handleBizMsg),
                      (this._bizMsgEventListenerCount -= 1));
                },
              },
              {
                key: "sendTafMsg",
                value: function (t) {
                  var e = this,
                    n = t || {},
                    r = n.uri,
                    i = n.data;
                  if (this._uriQueue.indexOf(r) > -1) {
                    var o = U.a.get(r);
                    o &&
                      Object(T.d)(i, o, r)
                        .then(function (t) {
                          e._logger.success("[sendTafMsg]", t),
                            e.emit("message", {
                              type: "taf_msg",
                              data: { uri: r, data: t },
                            });
                        })
                        .catch(function (t) {
                          e._logger.error("[sendTafMsg]", t);
                        });
                  }
                },
              },
              {
                key: "sendJavaMsg",
                value: function (t) {
                  var e = this,
                    n = t || {},
                    r = n.uri,
                    o = n.data;
                  Object(T.d)(o, O.a, r).then(function (t) {
                    var n,
                      r = t || {},
                      o = r.sData,
                      a = i()(r, C),
                      s = a.sProtocolName;
                    try {
                      (n = JSON.parse(o)),
                        e._protocolQueue.indexOf(s) > -1 &&
                          e.emit("message", {
                            type: "java_msg",
                            data: N(N({}, a), {}, { data: n }),
                          });
                    } catch (c) {
                      return Promise.reject(c);
                    }
                  });
                },
              },
            ]),
            n
          );
        })(E.a);
      e.a = D;
    },
    KW9x: function (t, e, n) {
      var r = n("HJHO"),
        i = n("3FAr");
      t.exports = function (t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; )
          t = t[i(e[n++])];
        return n && n == o ? t : void 0;
      };
    },
    "Kj+h": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return G;
      });
      var r = n("BUsv"),
        i = (n("RlNQ"), n("YQsQ")),
        o = n.n(i),
        a = n("gtb+"),
        s = n.n(a),
        c = n("rIiI"),
        u = n.n(c),
        l = n("58BP"),
        p = n.n(l),
        f = n("Ptek"),
        h = n.n(f),
        d = n("gy9q"),
        v = n.n(d),
        m = n("7DFi"),
        y = n.n(m),
        g = n("TJEx"),
        b = n.n(g),
        w = n("cQwn"),
        S = n.n(w),
        E = n("W7YU"),
        _ = n("ZMLX"),
        I =
          (n("ZxgU"),
          n("leMB"),
          function () {
            (this.tUser = new _.a.UserId()),
              (this.eOp = 0),
              (this.lPid = 0),
              (this.lRoomId = 0),
              (this.bWatchVideo = !1),
              (this.sTraceSource = ""),
              (this.sTraceData = "");
          });
      (I.prototype._clone = function () {
        return new _.a.UserEventReq();
      }),
        (I.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (I.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (I.prototype.writeTo = function (t) {
          t.writeStruct(0, this.tUser),
            t.writeInt32(1, this.eOp),
            t.writeInt64(2, this.lPid),
            t.writeInt64(3, this.lRoomId),
            t.writeBoolean(4, this.bWatchVideo),
            t.writeString(5, this.sTraceSource),
            t.writeString(6, this.sTraceData);
        }),
        (I.prototype.readFrom = function (t) {
          (this.tUser = t.readStruct(0, !1, this.tUser)),
            (this.eOp = t.readInt32(1, !1, this.eOp)),
            (this.lPid = t.readInt64(2, !1, this.lPid)),
            (this.lRoomId = t.readInt64(3, !1, this.lRoomId)),
            (this.bWatchVideo = t.readBoolean(4, !1, this.bWatchVideo)),
            (this.sTraceSource = t.readString(5, !1, this.sTraceSource)),
            (this.sTraceData = t.readString(6, !1, this.sTraceData));
        }),
        (_.a.UserEventReq = I);
      var T = I,
        O = function () {
          (this.iCode = 0), (this.iUserHeartBeatInterval = 20);
        };
      (O.prototype._clone = function () {
        return new _.a.UserEventRsp();
      }),
        (O.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (O.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (O.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode),
            t.writeInt32(1, this.iUserHeartBeatInterval);
        }),
        (O.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.iUserHeartBeatInterval = t.readInt32(
              1,
              !1,
              this.iUserHeartBeatInterval
            ));
        }),
        (_.a.UserEventRsp = O);
      var k = O,
        R = function () {
          (this.tUser = new _.a.UserId()),
            (this.lPid = 0),
            (this.lRoomId = 0),
            (this.bWatchVideo = !1);
        };
      (R.prototype._clone = function () {
        return new _.a.UserHeartBeatReq();
      }),
        (R.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (R.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (R.prototype.writeTo = function (t) {
          t.writeStruct(0, this.tUser),
            t.writeInt64(1, this.lPid),
            t.writeInt64(2, this.lRoomId),
            t.writeBoolean(3, this.bWatchVideo);
        }),
        (R.prototype.readFrom = function (t) {
          (this.tUser = t.readStruct(0, !1, this.tUser)),
            (this.lPid = t.readInt64(1, !1, this.lPid)),
            (this.lRoomId = t.readInt64(2, !1, this.lRoomId)),
            (this.bWatchVideo = t.readBoolean(3, !1, this.bWatchVideo));
        }),
        (_.a.UserHeartBeatReq = R);
      var U = R,
        C = function () {
          (this.iCode = 0), (this.iTimestamp = 0);
        };
      (C.prototype._clone = function () {
        return new _.a.UserHeartBeatRsp();
      }),
        (C.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (C.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (C.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode), t.writeInt32(1, this.iTimestamp);
        }),
        (C.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.iTimestamp = t.readInt32(1, !1, this.iTimestamp));
        }),
        (_.a.UserHeartBeatRsp = C);
      var P = C,
        N = { OP_USER_IN: 1, OP_USER_OUT: 2 };
      _.a.EUserOperation = N;
      var A = N,
        M = n("WQyD"),
        D = n("iU4o"),
        j = n("jKdo"),
        L = n("TrR6");
      function B(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b()(t);
          if (e) {
            var i = b()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return y()(this, n);
        };
      }
      var x = n("BYFT").a ? "web" : "wap";
      function W(t) {
        var e = [],
          n = t || {},
          r = n.roomId,
          i = n.anchorLang,
          o = n.gameId,
          a = n.anchorCountryCode,
          s = E.i.user || {},
          c = s.lang,
          u = s.sCountry,
          l = r || E.i.liveRoom.roomId,
          p = i || E.i.liveRoom.anchorLang,
          f = o || E.i.liveRoom.gameId,
          h = a || E.i.liveRoom.anchorCountryCode;
        return (
          l &&
            (e.push("nimo:all"),
            e.push("nimo:".concat(L.a.kRoom, "_").concat(l)),
            e.push("nimo:".concat(L.a.kRoomPlat, "_").concat(l, "_").concat(x)),
            u &&
              e.push(
                "nimo:"
                  .concat(L.a.kRoom, "_")
                  .concat(l, "_")
                  .concat(u, "_")
                  .concat(x)
              )),
          u && e.push("nimo:".concat(L.a.kCountry, "_").concat(u)),
          e.push("nimo:".concat(L.a.kPlatform, "_").concat(x)),
          c &&
            (e.push("nimo:".concat(L.a.kLang, "_").concat(c)),
            e.push(
              "nimo:".concat(L.a.kLangPlat, "_").concat(c, "_").concat(x)
            )),
          c &&
            u &&
            (e.push(
              "nimo:".concat(L.a.kCountryLang, "_").concat(u, "_").concat(c)
            ),
            e.push(
              "nimo:"
                .concat(L.a.kCountryLangPlat, "_")
                .concat(u, "_")
                .concat(c, "_")
                .concat(x)
            )),
          p && e.push("nimo:".concat(L.a.kRoomLang, "_").concat(p)),
          f &&
            p &&
            e.push(
              "nimo:".concat(L.a.kRoomTypeLang, "_").concat(f, "_").concat(p)
            ),
          f && e.push("nimo:".concat(L.a.kRoomType, "_").concat(f)),
          h && e.push("nimo:".concat(L.a.kAnchorCountry, "_").concat(h)),
          h &&
            f &&
            e.push(
              "nimo:"
                .concat(L.a.kAnchorCountryType, "_")
                .concat(h, "_")
                .concat(f)
            ),
          l &&
            c &&
            (e.push(
              "nimo:".concat(L.a.kRoomUserLang, "_").concat(l, "_").concat(c)
            ),
            u &&
              e.push(
                "nimo:"
                  .concat(L.a.kRoomCountryLangPlat, "_")
                  .concat(l, "_")
                  .concat(u, "_")
                  .concat(c, "_")
                  .concat(x)
              )),
          e
        );
      }
      var G = new ((function (t) {
          v()(n, t);
          var e = B(n);
          function n(t) {
            var r;
            return (
              u()(this, n),
              (r = e.call(this, t)),
              S()(h()(r), "heartbeatInterval", 2e4),
              S()(h()(r), "heartbeatTimer", null),
              S()(h()(r), "socket", null),
              S()(h()(r), "broadcastWithUser", !1),
              S()(h()(r), "registerHandler", !1),
              S()(h()(r), "_groups", []),
              S()(h()(r), "_unsubTopicList", []),
              (r.heartbeatInterval =
                (t && t.heartbeatInterval) || r.heartbeatInterval),
              (r.handleSubRsp = r.handleSubRsp.bind(h()(r))),
              (r.handleUnsubRsp = r.handleUnsubRsp.bind(h()(r))),
              (r.handleHeartBeatRsp = r.handleHeartBeatRsp.bind(h()(r))),
              (r.handleUserEventRsp = r.handleUserEventRsp.bind(h()(r))),
              r
            );
          }
          return (
            p()(n, [
              {
                key: "dispose",
                value: function () {
                  this.close(),
                    (this.heartbeatInterval = null),
                    this.heartbeatTimer &&
                      (clearTimeout(this.heartbeatTimer),
                      (this.heartbeatTimer = null)),
                    this.socket.offGroup(!0, this.handleSubRsp),
                    this.socket.offGroup(!1, this.handleUnsubRsp),
                    (this.socket = null);
                },
              },
              {
                key: "handleSubRsp",
                value: function (t) {
                  j.a.vip("[channel] The topics have been subscribed", t);
                },
              },
              {
                key: "handleUnsubRsp",
                value: function (t) {
                  j.a.vip("[channel] The topics have been unsubscribed", t);
                },
              },
              {
                key: "handleHeartBeatRsp",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = t.response;
                  j.a.log("[channel] UserHeartbeat", e);
                },
              },
              {
                key: "handleUserEventRsp",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = t.response;
                  if (e) {
                    var n = e.iUserHeartBeatInterval;
                    ("number" !== typeof n || isNaN(n) || n < 0) && (n = 20),
                      (this.heartbeatInterval = 1e3 * n);
                  }
                  j.a.info("[channel] userEvent Rsp", e);
                },
              },
              {
                key: "open",
                value: function (t, e) {
                  var n = E.i.channel,
                    r = E.i.liveRoom,
                    i = n.roomId,
                    o = parseInt(r.roomId, 10);
                  (this.socket = t),
                    this.registerHandler ||
                      (t.onGroup(!0, this.handleSubRsp),
                      t.onGroup(!1, this.handleUnsubRsp),
                      (this.registerHandler = !0)),
                    n.isOpened("signal")
                      ? 0 === i || (+i !== +o && 0 !== o)
                        ? this.reOpen()
                        : e && this.subTopic()
                      : this.doOpen();
                },
              },
              {
                key: "doOpen",
                value: function () {
                  if (E.i.user.isReady()) {
                    if (!E.i.liveRoom.isReady() && !this.broadcastWithUser)
                      return (
                        E.i.channel.close(),
                        void j.a.warning(
                          "[channel] close channel when runtime liveRoom is not ready."
                        )
                      );
                    this.updateRuntimeChannel(),
                      this.subTopic(),
                      this.subTopicList(),
                      this.heartbeat(),
                      j.a.log("[channel] do open channel");
                  } else D.a.user.add(this.open);
                },
              },
              {
                key: "reOpen",
                value: function () {
                  this.updateRuntimeChannel(),
                    j.a.log("[channel] redo open channel");
                },
              },
              {
                key: "close",
                value: function () {
                  E.i.channel.close(),
                    this.unsubTopic(),
                    j.a.vip("[channel] close channel");
                },
              },
              {
                key: "subTopic",
                value: function (t) {
                  if (this.socket) {
                    var e = W(t);
                    (this._groups = e),
                      this.socket.sendGroup(!0, e),
                      ((null !== t && void 0 !== t && t.roomId) ||
                        E.i.liveRoom.roomId) &&
                        this.sendUserEvent(t, !0),
                      j.a.info("[channel] subscribe topic", e);
                  }
                },
              },
              {
                key: "subTopicList",
                value: function () {
                  var t,
                    e,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [];
                  if (
                    (null === n || void 0 === n ? void 0 : n.length) > 0 ||
                    (null === (t = this._unsubTopicList) || void 0 === t
                      ? void 0
                      : t.length) > 0
                  )
                    if (
                      null !== (e = this.socket) &&
                      void 0 !== e &&
                      e.socket
                    ) {
                      var r = n.concat(this._unsubTopicList).map(function (t) {
                        return "nimo:".concat(
                          [
                            "".concat(
                              null === t || void 0 === t ? void 0 : t.id
                            ),
                          ]
                            .concat(
                              s()(
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.subId) || []
                              )
                            )
                            .join("_")
                        );
                      });
                      this._groups.concat(r),
                        this.socket.sendGroup(!0, r),
                        (this._unsubTopicList = []),
                        j.a.info("[channel] subscribe topic list", r);
                    } else
                      this._unsubTopicList = this._unsubTopicList.concat(n);
                },
              },
              {
                key: "unsubTopic",
                value: function (t) {
                  if (this.socket) {
                    var e = W(t);
                    this.socket.sendGroup(!1, e),
                      ((null !== t && void 0 !== t && t.roomId) ||
                        E.i.liveRoom.roomId) &&
                        this.sendUserEvent(t, !1),
                      j.a.info("[channel] unsubscribe topic", e);
                  }
                },
              },
              {
                key: "unsubTopicList",
                value: function (t) {
                  if (this.socket) {
                    var e = t.map(function (t) {
                      return "nimo:".concat(
                        ["".concat(null === t || void 0 === t ? void 0 : t.id)]
                          .concat(
                            s()(
                              (null === t || void 0 === t ? void 0 : t.subId) ||
                                []
                            )
                          )
                          .join("_")
                      );
                    });
                    this.socket.sendGroup(!1, e),
                      j.a.info("[channel] unsubscribe topic list", e);
                  }
                },
              },
              {
                key: "heartbeat",
                value: function (t) {
                  var e = new U(),
                    n = t || {},
                    r = n.roomId,
                    i = void 0 === r ? E.i.liveRoom.roomId : r,
                    o = n.auId,
                    a = void 0 === o ? E.i.liveRoom.auId : o;
                  Object(E.j)(e.tUser),
                    i && ((e.lRoomId = i), (e.bWatchVideo = !0)),
                    a && (e.lPid = a),
                    this.send("OnUserHeartBeat", e, P).then(
                      this.handleHeartBeatRsp
                    ),
                    this.heartbeatTimer && clearTimeout(this.heartbeatTimer),
                    this.heartbeatInterval > 0 &&
                      (this.heartbeatTimer = setTimeout(
                        this.heartbeat.bind(this),
                        this.heartbeatInterval
                      ));
                },
              },
              {
                key: "sendUserEvent",
                value: function (t, e) {
                  var n = new T(),
                    r = t || {},
                    i = r.roomId,
                    o = void 0 === i ? E.i.liveRoom.roomId : i,
                    a = r.auId,
                    s = void 0 === a ? E.i.liveRoom.auId : a,
                    c = r.traceSource,
                    u = void 0 === c ? E.i.liveRoom.traceSource : c,
                    l = r.traceData,
                    p = void 0 === l ? E.i.liveRoom.traceData : l;
                  Object(E.j)(n.tUser),
                    o && ((n.lRoomId = o), (n.bWatchVideo = !0)),
                    e &&
                      ((n.sTraceSource = u || "ignore"),
                      (n.sTraceData = p || "")),
                    (E.i.liveRoom.traceSource = ""),
                    (E.i.liveRoom.traceData = ""),
                    s && (n.lPid = s),
                    (n.eOp = e ? A.OP_USER_IN : A.OP_USER_OUT),
                    this.send("OnUserEvent", n, k).then(
                      this.handleUserEventRsp
                    ),
                    j.a.info("[channel] userEvent Req", n);
                },
              },
              {
                key: "send",
                value: function (t, e, n) {
                  if (this.socket) return this.socket.send(t, e, n);
                  throw new Error(
                    "this.socket is typeof ".concat(o()(this.socket), ".")
                  );
                },
              },
              {
                key: "updateRuntimeChannel",
                value: function () {
                  var t = parseInt(E.i.liveRoom.roomId, 10);
                  E.i.channel.open({ roomId: t, type: "signal" }),
                    j.a.vip("[channel] Runtime Channel updated", E.i.channel);
                },
              },
              {
                key: "groups",
                get: function () {
                  return this._groups;
                },
              },
            ]),
            n
          );
        })(M.a))(),
        F = n("q4i/"),
        H = n.n(F),
        V = n("f2qI"),
        q = n.n(V),
        J = n("zvxk"),
        K = n("b3NQ"),
        z = n("ntvm"),
        Q = ["requestId"];
      function Y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Z(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Y(Object(n), !0).forEach(function (e) {
                S()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var X = 0,
        $ = 1,
        tt = 2,
        et = 3,
        nt = (function () {
          function t(e) {
            u()(this, t),
              S()(this, "signal", null),
              S()(this, "queue", new E.a()),
              S()(this, "rejectPools", Object.create(null)),
              S()(this, "reconnectCount", 0),
              S()(this, "isReconnection", !1),
              S()(this, "timer", null),
              S()(this, "readyState", X),
              S()(this, "timeout", 2e4),
              S()(this, "_bulkRejectTimer", null),
              S()(this, "_bulkRejectInterval", 1e4),
              (this.props = e || {}),
              (this.connected = !1),
              (this.handleOpen = this.handleOpen.bind(this)),
              (this.handleClose = this.handleClose.bind(this)),
              (this.handleError = this.handleError.bind(this)),
              (this.handleMessage = this.handleMessage.bind(this)),
              (this._handleSocketStateChange =
                this._handleSocketStateChange.bind(this)),
              "number" === typeof e.timeout && (this.timeout = e.timeout);
          }
          return (
            p()(t, [
              {
                key: "close",
                value: function () {
                  this.signal &&
                    (this.signal.off(J.a.WEBSOCKET_DOLAUNCH, this.handleOpen),
                    this.signal.off(
                      J.a.WS_CONNET_STATE,
                      this._handleSocketStateChange
                    ),
                    Object(z.c)(this.handleMessage),
                    (this.readyState = et));
                },
              },
              {
                key: "handleOpen",
                value: function (t) {
                  var e = this.props.onOpen;
                  (this.readyState = $),
                    j.a.vip("[signal] signal opened!"),
                    e(t, this.isReconnection, this),
                    (this.connected = !0),
                    this.queue.runAndClear(),
                    this.clearTimer();
                },
              },
              {
                key: "handleClose",
                value: function (t) {
                  var e = this.props.onClose;
                  (this.readyState = tt),
                    (this.isReconnection = !1),
                    j.a.error("[signal] signal closed."),
                    e(t, this),
                    this.reconnect();
                },
              },
              {
                key: "handleError",
                value: function (t) {
                  var e = this.props.onError;
                  j.a.error("[signal] signal error."), e(t), this.reconnect();
                },
              },
              {
                key: "handleMessage",
                value: function (t) {
                  (0, this.props.onMessage)({ data: t });
                },
              },
              {
                key: "createWebSocket",
                value: function () {
                  var t = this;
                  Object(J.b)({ noConnect: 0 }).then(function (e) {
                    (t.signal = e),
                      e.wsLaunch
                        ? t.handleOpen()
                        : e.on(J.a.WEBSOCKET_DOLAUNCH, t.handleOpen),
                      e.on(J.a.WS_CONNET_STATE, t._handleSocketStateChange),
                      Object(z.a)(e),
                      Object(z.e)(t.handleMessage);
                  });
                },
              },
              {
                key: "_handleSocketStateChange",
                value: function (t) {
                  var e = t.connected,
                    n = t.type,
                    r = t.code,
                    i = t.reason;
                  "close" === n
                    ? ((this.connected = !1),
                      this.handleClose({ reason: i, code: r, connected: e }))
                    : "error" === n &&
                      ((this.connected = !1),
                      this.handleError({ type: r, reason: i, connected: e }));
                },
              },
              {
                key: "sendRegisterGroup",
                value: function (t, e) {
                  this.connected
                    ? this.signal.sendRegisterGroup(t, e)
                    : this.queue.add(this.sendRegisterGroup, arguments, this);
                },
              },
              {
                key: "sendUnRegisterGroup",
                value: function (t) {
                  this.connected
                    ? this.signal.sendUnRegisterGroup(t)
                    : this.queue.add(this.sendUnRegisterGroup, arguments, this);
                },
              },
              {
                key: "onRegisterGroup",
                value: function (t) {
                  this.connected
                    ? this.signal.on(J.a.WS_REGISTER_GROUP_RSP, t)
                    : this.queue.add(this.onRegisterGroup, arguments, this);
                },
              },
              {
                key: "onUnRegisterGroup",
                value: function (t) {
                  this.connected
                    ? this.signal.on(J.a.WS_UNREGISTER_GROUP_RSP, t)
                    : this.queue.add(this.onUnRegisterGroup, arguments, this);
                },
              },
              {
                key: "offRegisterGroup",
                value: function (t) {
                  this.connected
                    ? this.signal.off(J.a.WS_REGISTER_GROUP_RSP, t)
                    : this.queue.add(this.offRegisterGroup, arguments, this);
                },
              },
              {
                key: "offUnRegisterGroup",
                value: function (t) {
                  this.connected
                    ? this.signal.off(J.a.WS_UNREGISTER_GROUP_RSP, t)
                    : this.queue.add(this.offUnRegisterGroup, arguments, this);
                },
              },
              {
                key: "onUriNotice",
                value: function (t) {
                  this.connected
                    ? this.signal.on(J.a.WS_URI_NOTICE, t)
                    : this.queue.add(this.onUriNotice, arguments, this);
                },
              },
              {
                key: "offUriNotice",
                value: function (t) {
                  this.connected
                    ? this.signal.off(J.a.WS_URI_NOTICE, t)
                    : this.queue.add(this.offUriNotice, arguments, this);
                },
              },
              {
                key: "connect",
                value: function (t) {
                  (this.props = Z(Z({}, this.props), {}, { wsServer: t })),
                    j.a.warn("[signal] signal connecting..."),
                    (this.isReconnection = !1),
                    this.open();
                },
              },
              {
                key: "reconnect",
                value: function () {
                  var t = this,
                    e = this.props.reconnectInterval,
                    n = void 0 === e ? 2e3 : e;
                  this.isReconnected() ||
                    this.isReconnecting() ||
                    (j.a.log("[signal] signal reconnecting..."),
                    (this.isReconnection = !0),
                    this.open(),
                    (this.reconnectCount += 1),
                    (this.timer = setTimeout(function () {
                      t.clearTimer(), t.reconnect();
                    }, n)));
                },
              },
              {
                key: "clearTimer",
                value: function () {
                  this.timer && (clearTimeout(this.timer), (this.timer = null));
                },
              },
              {
                key: "open",
                value: function () {
                  this.signal
                    ? this.signal.reconnetWS()
                    : this.createWebSocket();
                },
              },
              {
                key: "send",
                value: function (t, e, n, r) {
                  var i = arguments,
                    o = this;
                  return new Promise(function (a, c) {
                    if (o.isOpened()) {
                      o._startBulkReject();
                      var u = "".concat(Date.now(), ".").concat(e);
                      (o.rejectPools[u] = c),
                        o.signal.registerWup(e, r),
                        o.signal.sendWup(t, e, n, function (t) {
                          var r = t || {},
                            i = (r.requestId, q()(r, Q));
                          delete o.rejectPools[u],
                            a({ type: e, data: n, response: i });
                        });
                    } else {
                      o.queue.add(
                        function (t, e, n) {
                          o.send
                            .apply(o, s()(n))
                            .then(function (e) {
                              t(e);
                            })
                            .catch(function (t) {
                              e(t);
                            });
                        },
                        [a, c, i],
                        o
                      ),
                        o.reconnect();
                    }
                  }).catch(function () {});
                },
              },
              {
                key: "isOpening",
                value: function () {
                  return Boolean(this.readyState === X);
                },
              },
              {
                key: "isOpened",
                value: function () {
                  return Boolean(this.readyState === $);
                },
              },
              {
                key: "isClosing",
                value: function () {
                  return Boolean(this.readyState === tt);
                },
              },
              {
                key: "isClosed",
                value: function () {
                  return Boolean(this.readyState === et);
                },
              },
              {
                key: "isReconnected",
                value: function () {
                  return this.isOpening() || this.isOpened();
                },
              },
              {
                key: "isReconnecting",
                value: function () {
                  return !!this.timer;
                },
              },
              {
                key: "_startBulkReject",
                value: function () {
                  var t = this;
                  this._bulkRejectTimer ||
                    (this._bulkRejectTimer = setTimeout(function () {
                      t._bulkRejectTimer = null;
                      var e = Object.entries(t.rejectPools);
                      if (e.length) {
                        var n = Date.now();
                        e.forEach(function (e) {
                          var r = H()(e, 2),
                            i = r[0],
                            o = r[1];
                          n - parseFloat(i) >= t.timeout &&
                            (j.a.error("request timeout"),
                            o(Object(K.h)("Error occurred with timeout")),
                            delete t.rejectPools[i]);
                        }),
                          t._startBulkReject();
                      }
                    }, this._bulkRejectInterval));
                },
              },
              {
                key: "_stopBulkReject",
                value: function () {
                  this._bulkRejectTimer &&
                    (clearTimeout(this._bulkRejectTimer),
                    (this._bulkRejectTimer = null));
                },
              },
            ]),
            t
          );
        })();
      n("WgMg"),
        n("RA07"),
        (e.b = new r.b({
          channel: G,
          socket: function (t) {
            return new nt(t);
          },
        }));
    },
    Kr19: function (t, e, n) {
      var r = n("HxfZ");
      t.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    L0GJ: function (t, e, n) {
      "use strict";
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("avFb"),
        a = n.n(o),
        s = n("hks1"),
        c = n("cQwn"),
        u = n.n(c),
        l = n("f2qI"),
        p = n.n(l),
        f = n("kPK6"),
        h = n.n(f),
        d = ["prefixCls", "size", "className", "children"],
        v = function (t) {
          var e = t.prefixCls,
            n = void 0 === e ? "nimo-btn-group" : e,
            r = t.size,
            a = t.className,
            s = t.children,
            c = p()(t, d),
            l = "";
          switch (r) {
            case "large":
              l = "lg";
              break;
            case "small":
              l = "sm";
          }
          var f = h()(n, u()({}, "".concat(n, "-").concat(l), l), a);
          return o.createElement("div", i()({}, c, { className: f }), s);
        },
        m =
          (n("5KyW"),
          Object(o.forwardRef)(function (t, e) {
            return a.a.createElement(s.a, i()({}, t, { nodeRef: e }));
          }));
      (s.a.Group = v), (m.Group = v);
      e.a = m;
    },
    L7RH: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "MODULE_NIMO_UI", function () {
          return a;
        }),
        n.d(e, "useSignal", function () {
          return s;
        });
      var r = n("BUsv");
      n.d(e, "setTubeId", function () {
        return r.g;
      }),
        n.d(e, "genTubeKey", function () {
          return r.d;
        }),
        n.d(e, "genDownMsgKey", function () {
          return r.c;
        }),
        n.d(e, "SocketModel", function () {
          return r.a;
        }),
        n.d(e, "userSocketModel", function () {
          return r.i;
        }),
        n.d(e, "unpackCommon", function () {
          return r.h;
        }),
        n.d(e, "logger", function () {
          return r.e;
        });
      var i = n("W7YU");
      n.d(e, "runtime", function () {
        return i.i;
      }),
        n.d(e, "eventEmitter", function () {
          return i.e;
        });
      var o = n("jqZc");
      n.d(e, "channel", function () {
        return o.a;
      });
      var a = "nimoui",
        s = !0;
    },
    LAFo: function (t, e, n) {
      var r = n("qEdh"),
        i = n("pSl2"),
        o = n("ndow");
      t.exports = function (t) {
        return o(i(t, void 0, r), t + "");
      };
    },
    LJnb: function (t, e, n) {
      var r = n("qr0I"),
        i = n("gjmc"),
        o = n("l1vn"),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (o(t)) return NaN;
        if (i(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = i(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = s.test(t);
        return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t;
      };
    },
    LWFJ: function (t, e, n) {
      var r = n("ebMM")(n("nD2Q"), "Promise");
      t.exports = r;
    },
    LlUs: function (t, e, n) {
      t.exports = n("4KFe")(222);
    },
    LpuD: function (t, e, n) {
      "use strict";
      var r = {};
      e.a = {
        add: function (t, e) {
          e && (r[t] = e);
        },
        get: function (t) {
          return !!{}.hasOwnProperty.call(r, t) && r[t];
        },
        remove: function (t) {
          return (
            !!{}.hasOwnProperty.call(r, t) && ((r[t] = null), delete r[t], !0)
          );
        },
      };
    },
    M5AP: function (t, e, n) {
      var r = n("9Cfe"),
        i = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return (
          !(n < 0) &&
          (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, !0)
        );
      };
    },
    M5nW: function (t, e, n) {
      "use strict";
      var r = n("AeXG"),
        i = n.n(r),
        o = n("CmDh"),
        a = n.n(o),
        s = n("P+UK"),
        c = n.n(s),
        u = n("ax1G"),
        l = n.n(u),
        p = n("vlBN"),
        f = n.n(p),
        h = n("HNvz"),
        d = n.n(h),
        v = n("avFb"),
        m = n.n(v),
        y = n("jmMi"),
        g = n.n(y),
        b = function (t) {
          var e = t.prototype;
          if (!e || !e.isReactComponent)
            throw new Error("Can only polyfill class components");
          return "function" !== typeof e.componentWillReceiveProps
            ? t
            : m.a.Profiler
            ? ((e.UNSAFE_componentWillReceiveProps =
                e.componentWillReceiveProps),
              delete e.componentWillReceiveProps,
              t)
            : t;
        };
      function w(t) {
        var e = [];
        return (
          m.a.Children.forEach(t, function (t) {
            e.push(t);
          }),
          e
        );
      }
      function S(t, e) {
        var n = null;
        return (
          t &&
            t.forEach(function (t) {
              n || (t && t.key === e && (n = t));
            }),
          n
        );
      }
      function E(t, e, n) {
        var r = null;
        return (
          t &&
            t.forEach(function (t) {
              if (t && t.key === e && t.props[n]) {
                if (r)
                  throw new Error(
                    "two child with same key for <rc-animate> children"
                  );
                r = t;
              }
            }),
          r
        );
      }
      var _ = n("6Zxk"),
        I = n.n(_),
        T = n("Jgc1"),
        O = n.n(T),
        k = {
          transitionstart: {
            transition: "transitionstart",
            WebkitTransition: "webkitTransitionStart",
            MozTransition: "mozTransitionStart",
            OTransition: "oTransitionStart",
            msTransition: "MSTransitionStart",
          },
          animationstart: {
            animation: "animationstart",
            WebkitAnimation: "webkitAnimationStart",
            MozAnimation: "mozAnimationStart",
            OAnimation: "oAnimationStart",
            msAnimation: "MSAnimationStart",
          },
        },
        R = {
          transitionend: {
            transition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "mozTransitionEnd",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
          },
          animationend: {
            animation: "animationend",
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "mozAnimationEnd",
            OAnimation: "oAnimationEnd",
            msAnimation: "MSAnimationEnd",
          },
        },
        U = [],
        C = [];
      function P(t, e, n) {
        t.addEventListener(e, n, !1);
      }
      function N(t, e, n) {
        t.removeEventListener(e, n, !1);
      }
      "undefined" !== typeof window &&
        "undefined" !== typeof document &&
        (function () {
          var t = document.createElement("div").style;
          function e(e, n) {
            for (var r in e)
              if (e.hasOwnProperty(r)) {
                var i = e[r];
                for (var o in i)
                  if (o in t) {
                    n.push(i[o]);
                    break;
                  }
              }
          }
          "AnimationEvent" in window ||
            (delete k.animationstart.animation,
            delete R.animationend.animation),
            "TransitionEvent" in window ||
              (delete k.transitionstart.transition,
              delete R.transitionend.transition),
            e(k, U),
            e(R, C);
        })();
      var A = {
          startEvents: U,
          addStartEventListener: function (t, e) {
            0 !== U.length
              ? U.forEach(function (n) {
                  P(t, n, e);
                })
              : window.setTimeout(e, 0);
          },
          removeStartEventListener: function (t, e) {
            0 !== U.length &&
              U.forEach(function (n) {
                N(t, n, e);
              });
          },
          endEvents: C,
          addEndEventListener: function (t, e) {
            0 !== C.length
              ? C.forEach(function (n) {
                  P(t, n, e);
                })
              : window.setTimeout(e, 0);
          },
          removeEndEventListener: function (t, e) {
            0 !== C.length &&
              C.forEach(function (n) {
                N(t, n, e);
              });
          },
        },
        M = n("Wnpw"),
        D = n.n(M),
        j = 0 !== A.endEvents.length,
        L = ["Webkit", "Moz", "O", "ms"],
        B = ["-webkit-", "-moz-", "-o-", "ms-", ""];
      function x(t, e) {
        for (
          var n = window.getComputedStyle(t, null), r = "", i = 0;
          i < B.length && !(r = n.getPropertyValue(B[i] + e));
          i++
        );
        return r;
      }
      function W(t) {
        if (j) {
          var e = parseFloat(x(t, "transition-delay")) || 0,
            n = parseFloat(x(t, "transition-duration")) || 0,
            r = parseFloat(x(t, "animation-delay")) || 0,
            i = parseFloat(x(t, "animation-duration")) || 0,
            o = Math.max(n + e, i + r);
          t.rcEndAnimTimeout = setTimeout(function () {
            (t.rcEndAnimTimeout = null), t.rcEndListener && t.rcEndListener();
          }, 1e3 * o + 200);
        }
      }
      function G(t) {
        t.rcEndAnimTimeout &&
          (clearTimeout(t.rcEndAnimTimeout), (t.rcEndAnimTimeout = null));
      }
      var F = function (t, e, n) {
        var r = "object" === ("undefined" === typeof e ? "undefined" : O()(e)),
          i = r ? e.name : e,
          o = r ? e.active : e + "-active",
          a = n,
          s = void 0,
          c = void 0,
          u = D()(t);
        return (
          n &&
            "[object Object]" === Object.prototype.toString.call(n) &&
            ((a = n.end), (s = n.start), (c = n.active)),
          t.rcEndListener && t.rcEndListener(),
          (t.rcEndListener = function (e) {
            (e && e.target !== t) ||
              (t.rcAnimTimeout &&
                (clearTimeout(t.rcAnimTimeout), (t.rcAnimTimeout = null)),
              G(t),
              u.remove(i),
              u.remove(o),
              A.removeEndEventListener(t, t.rcEndListener),
              (t.rcEndListener = null),
              a && a());
          }),
          A.addEndEventListener(t, t.rcEndListener),
          s && s(),
          u.add(i),
          (t.rcAnimTimeout = setTimeout(function () {
            (t.rcAnimTimeout = null), u.add(o), c && setTimeout(c, 0), W(t);
          }, 30)),
          {
            stop: function () {
              t.rcEndListener && t.rcEndListener();
            },
          }
        );
      };
      (F.style = function (t, e, n) {
        t.rcEndListener && t.rcEndListener(),
          (t.rcEndListener = function (e) {
            (e && e.target !== t) ||
              (t.rcAnimTimeout &&
                (clearTimeout(t.rcAnimTimeout), (t.rcAnimTimeout = null)),
              G(t),
              A.removeEndEventListener(t, t.rcEndListener),
              (t.rcEndListener = null),
              n && n());
          }),
          A.addEndEventListener(t, t.rcEndListener),
          (t.rcAnimTimeout = setTimeout(function () {
            for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
            (t.rcAnimTimeout = null), W(t);
          }, 0));
      }),
        (F.setTransition = function (t, e, n) {
          var r = e,
            i = n;
          void 0 === n && ((i = r), (r = "")),
            (r = r || ""),
            L.forEach(function (e) {
              t.style[e + "Transition" + r] = i;
            });
        }),
        (F.isCssAnimationSupported = j);
      var H = F,
        V = {
          isAppearSupported: function (t) {
            return (
              (t.transitionName && t.transitionAppear) || t.animation.appear
            );
          },
          isEnterSupported: function (t) {
            return (t.transitionName && t.transitionEnter) || t.animation.enter;
          },
          isLeaveSupported: function (t) {
            return (t.transitionName && t.transitionLeave) || t.animation.leave;
          },
          allowAppearCallback: function (t) {
            return t.transitionAppear || t.animation.appear;
          },
          allowEnterCallback: function (t) {
            return t.transitionEnter || t.animation.enter;
          },
          allowLeaveCallback: function (t) {
            return t.transitionLeave || t.animation.leave;
          },
        },
        q = {
          enter: "transitionEnter",
          appear: "transitionAppear",
          leave: "transitionLeave",
        },
        J = (function (t) {
          function e() {
            return (
              c()(this, e),
              f()(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            d()(e, t),
            l()(e, [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.stop();
                },
              },
              {
                key: "componentWillEnter",
                value: function (t) {
                  V.isEnterSupported(this.props)
                    ? this.transition("enter", t)
                    : t();
                },
              },
              {
                key: "componentWillAppear",
                value: function (t) {
                  V.isAppearSupported(this.props)
                    ? this.transition("appear", t)
                    : t();
                },
              },
              {
                key: "componentWillLeave",
                value: function (t) {
                  V.isLeaveSupported(this.props)
                    ? this.transition("leave", t)
                    : t();
                },
              },
              {
                key: "transition",
                value: function (t, e) {
                  var n = this,
                    r = I.a.findDOMNode(this),
                    i = this.props,
                    o = i.transitionName,
                    a = "object" === typeof o;
                  this.stop();
                  var s = function () {
                    (n.stopper = null), e();
                  };
                  if ((j || !i.animation[t]) && o && i[q[t]]) {
                    var c = a ? o[t] : o + "-" + t,
                      u = c + "-active";
                    a && o[t + "Active"] && (u = o[t + "Active"]),
                      (this.stopper = H(r, { name: c, active: u }, s));
                  } else this.stopper = i.animation[t](r, s);
                },
              },
              {
                key: "stop",
                value: function () {
                  var t = this.stopper;
                  t && ((this.stopper = null), t.stop());
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            e
          );
        })(m.a.Component);
      J.propTypes = {
        children: g.a.any,
        animation: g.a.any,
        transitionName: g.a.any,
      };
      var K = J,
        z = "rc_animate_" + Date.now();
      function Q(t) {
        var e = t.children;
        return m.a.isValidElement(e) && !e.key
          ? m.a.cloneElement(e, { key: z })
          : e;
      }
      function Y() {}
      var Z = (function (t) {
        function e(t) {
          c()(this, e);
          var n = f()(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
          );
          return (
            X.call(n),
            (n.currentlyAnimatingKeys = {}),
            (n.keysToEnter = []),
            (n.keysToLeave = []),
            (n.state = { children: w(Q(t)) }),
            (n.childrenRefs = {}),
            n
          );
        }
        return (
          d()(e, t),
          l()(e, [
            {
              key: "componentDidMount",
              value: function () {
                var t = this,
                  e = this.props.showProp,
                  n = this.state.children;
                e &&
                  (n = n.filter(function (t) {
                    return !!t.props[e];
                  })),
                  n.forEach(function (e) {
                    e && t.performAppear(e.key);
                  });
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (t) {
                var e = this;
                this.nextProps = t;
                var n = w(Q(t)),
                  r = this.props;
                r.exclusive &&
                  Object.keys(this.currentlyAnimatingKeys).forEach(function (
                    t
                  ) {
                    e.stop(t);
                  });
                var i = r.showProp,
                  o = this.currentlyAnimatingKeys,
                  s = r.exclusive ? w(Q(r)) : this.state.children,
                  c = [];
                i
                  ? (s.forEach(function (t) {
                      var e = t && S(n, t.key),
                        r = void 0;
                      (r =
                        (e && e.props[i]) || !t.props[i]
                          ? e
                          : m.a.cloneElement(e || t, a()({}, i, !0))) &&
                        c.push(r);
                    }),
                    n.forEach(function (t) {
                      (t && S(s, t.key)) || c.push(t);
                    }))
                  : (c = (function (t, e) {
                      var n = [],
                        r = {},
                        i = [];
                      return (
                        t.forEach(function (t) {
                          t && S(e, t.key)
                            ? i.length && ((r[t.key] = i), (i = []))
                            : i.push(t);
                        }),
                        e.forEach(function (t) {
                          t &&
                            Object.prototype.hasOwnProperty.call(r, t.key) &&
                            (n = n.concat(r[t.key])),
                            n.push(t);
                        }),
                        (n = n.concat(i))
                      );
                    })(s, n)),
                  this.setState({ children: c }),
                  n.forEach(function (t) {
                    var n = t && t.key;
                    if (!t || !o[n]) {
                      var r = t && S(s, n);
                      if (i) {
                        var a = t.props[i];
                        if (r) !E(s, n, i) && a && e.keysToEnter.push(n);
                        else a && e.keysToEnter.push(n);
                      } else r || e.keysToEnter.push(n);
                    }
                  }),
                  s.forEach(function (t) {
                    var r = t && t.key;
                    if (!t || !o[r]) {
                      var a = t && S(n, r);
                      if (i) {
                        var s = t.props[i];
                        if (a) !E(n, r, i) && s && e.keysToLeave.push(r);
                        else s && e.keysToLeave.push(r);
                      } else a || e.keysToLeave.push(r);
                    }
                  });
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                var t = this.keysToEnter;
                (this.keysToEnter = []), t.forEach(this.performEnter);
                var e = this.keysToLeave;
                (this.keysToLeave = []), e.forEach(this.performLeave);
              },
            },
            {
              key: "isValidChildByKey",
              value: function (t, e) {
                var n = this.props.showProp;
                return n ? E(t, e, n) : S(t, e);
              },
            },
            {
              key: "stop",
              value: function (t) {
                delete this.currentlyAnimatingKeys[t];
                var e = this.childrenRefs[t];
                e && e.stop();
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props;
                this.nextProps = e;
                var n = this.state.children,
                  r = null;
                n &&
                  (r = n.map(function (n) {
                    if (null === n || void 0 === n) return n;
                    if (!n.key)
                      throw new Error("must set key for <rc-animate> children");
                    return m.a.createElement(
                      K,
                      {
                        key: n.key,
                        ref: function (e) {
                          t.childrenRefs[n.key] = e;
                        },
                        animation: e.animation,
                        transitionName: e.transitionName,
                        transitionEnter: e.transitionEnter,
                        transitionAppear: e.transitionAppear,
                        transitionLeave: e.transitionLeave,
                      },
                      n
                    );
                  }));
                var o = e.component;
                if (o) {
                  var a = e;
                  return (
                    "string" === typeof o &&
                      (a = i()(
                        { className: e.className, style: e.style },
                        e.componentProps
                      )),
                    m.a.createElement(o, a, r)
                  );
                }
                return r[0] || null;
              },
            },
          ]),
          e
        );
      })(m.a.Component);
      (Z.isAnimate = !0),
        (Z.propTypes = {
          className: g.a.string,
          style: g.a.object,
          component: g.a.any,
          componentProps: g.a.object,
          animation: g.a.object,
          transitionName: g.a.oneOfType([g.a.string, g.a.object]),
          transitionEnter: g.a.bool,
          transitionAppear: g.a.bool,
          exclusive: g.a.bool,
          transitionLeave: g.a.bool,
          onEnd: g.a.func,
          onEnter: g.a.func,
          onLeave: g.a.func,
          onAppear: g.a.func,
          showProp: g.a.string,
          children: g.a.node,
        }),
        (Z.defaultProps = {
          animation: {},
          component: "span",
          componentProps: {},
          transitionEnter: !0,
          transitionLeave: !0,
          transitionAppear: !1,
          onEnd: Y,
          onEnter: Y,
          onLeave: Y,
          onAppear: Y,
        });
      var X = function () {
        var t = this;
        (this.performEnter = function (e) {
          t.childrenRefs[e] &&
            ((t.currentlyAnimatingKeys[e] = !0),
            t.childrenRefs[e].componentWillEnter(
              t.handleDoneAdding.bind(t, e, "enter")
            ));
        }),
          (this.performAppear = function (e) {
            t.childrenRefs[e] &&
              ((t.currentlyAnimatingKeys[e] = !0),
              t.childrenRefs[e].componentWillAppear(
                t.handleDoneAdding.bind(t, e, "appear")
              ));
          }),
          (this.handleDoneAdding = function (e, n) {
            var r = t.props;
            if (
              (delete t.currentlyAnimatingKeys[e],
              !r.exclusive || r === t.nextProps)
            ) {
              var i = w(Q(r));
              t.isValidChildByKey(i, e)
                ? "appear" === n
                  ? V.allowAppearCallback(r) && (r.onAppear(e), r.onEnd(e, !0))
                  : V.allowEnterCallback(r) && (r.onEnter(e), r.onEnd(e, !0))
                : t.performLeave(e);
            }
          }),
          (this.performLeave = function (e) {
            t.childrenRefs[e] &&
              ((t.currentlyAnimatingKeys[e] = !0),
              t.childrenRefs[e].componentWillLeave(
                t.handleDoneLeaving.bind(t, e)
              ));
          }),
          (this.handleDoneLeaving = function (e) {
            var n = t.props;
            if (
              (delete t.currentlyAnimatingKeys[e],
              !n.exclusive || n === t.nextProps)
            ) {
              var r = w(Q(n));
              if (t.isValidChildByKey(r, e)) t.performEnter(e);
              else {
                var i = function () {
                  V.allowLeaveCallback(n) && (n.onLeave(e), n.onEnd(e, !1));
                };
                !(function (t, e, n) {
                  var r = t.length === e.length;
                  return (
                    r &&
                      t.forEach(function (t, i) {
                        var o = e[i];
                        t &&
                          o &&
                          ((t && !o) ||
                            (!t && o) ||
                            t.key !== o.key ||
                            (n && t.props[n] !== o.props[n])) &&
                          (r = !1);
                      }),
                    r
                  );
                })(t.state.children, r, n.showProp)
                  ? t.setState({ children: r }, i)
                  : i();
              }
            }
          });
      };
      e.a = b(Z);
    },
    MCIh: function (t, e, n) {
      var r = n("VFYJ"),
        i = n("gjmc");
      t.exports = function (t, e, n) {
        var o = !0,
          a = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          i(n) &&
            ((o = "leading" in n ? !!n.leading : o),
            (a = "trailing" in n ? !!n.trailing : a)),
          r(t, e, { leading: o, maxWait: e, trailing: a })
        );
      };
    },
    Mf8U: function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t) {
        var e = (function (t, e) {
          if ("object" !== r(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" !== r(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === r(e) ? e : String(e);
      }
      n.d(e, "a", function () {
        return i;
      });
    },
    N1gY: function (t, e, n) {
      var r = n("ecr1"),
        i = n("taEb"),
        o = n("WNm1");
      t.exports = function (t, e) {
        var n = this.__data__;
        if (n instanceof r) {
          var a = n.__data__;
          if (!i || a.length < 199)
            return a.push([t, e]), (this.size = ++n.size), this;
          n = this.__data__ = new o(a);
        }
        return n.set(t, e), (this.size = n.size), this;
      };
    },
    N4fI: function (t, e) {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    N8OG: function (t, e, n) {
      "use strict";
      function r(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    NTPb: function (t, e, n) {
      var r = n("ebMM")(n("nD2Q"), "DataView");
      t.exports = r;
    },
    Nb65: function (t, e, n) {
      var r = n("45ek");
      t.exports = function (t) {
        var e = r(t, function (t) {
            return 500 === n.size && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    Nrxr: function (t, e, n) {
      t.exports = { default: n("lTfp"), __esModule: !0 };
    },
    Nxq2: function (t, e, n) {
      "use strict";
      var r;
      e.a = function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        r
          ? r.apply(void 0, e)
          : n
              .e("3d1d1")
              .then(n.bind(null, "dsvQ"))
              .then(function (t) {
                var n = t.default;
                (r = n), n.apply(void 0, e);
              });
      };
    },
    O5qi: function (t, e) {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    OHLN: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return m;
      }),
        n.d(e, "a", function () {
          return y;
        });
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("cQwn"),
        a = n.n(o),
        s = n("f2qI"),
        c = n.n(s),
        u = n("avFb"),
        l = n.n(u),
        p = n("kPK6"),
        f = n.n(p),
        h = ["wrapperClassName", "className", "loading", "size", "type"],
        d = "nimo-loading-linear";
      function v(t) {
        var e,
          n = t || {},
          r = n.wrapperClassName,
          o = n.className,
          s = n.loading,
          u = void 0 === s || s,
          p = n.size,
          v = n.type,
          m = c()(n, h),
          y = "";
        switch (p) {
          case "large":
            y = "lg";
            break;
          case "small":
            y = "sm";
        }
        var g = f()(
          d,
          o,
          ((e = {}),
          a()(e, "".concat(d, "-").concat(v), v),
          a()(e, "".concat(d, "-").concat(y), y),
          e)
        );
        return u
          ? l.a.createElement(
              "div",
              i()({ className: r || "" }, m),
              l.a.createElement("div", {
                className: "".concat(d, " ").concat(g),
              })
            )
          : null;
      }
      function m(t) {
        var e = t.loading,
          n = t.content,
          r = void 0 === n ? "loading" : n;
        return e
          ? l.a.createElement(
              "div",
              { className: "H_tips j-loading" },
              l.a.createElement(v, null),
              r
            )
          : l.a.createElement("div", null);
      }
      function y(t) {
        var e = t.loading,
          n = t.className,
          r = t.style,
          i = void 0 === r ? null : r;
        return e
          ? l.a.createElement(
              "div",
              { className: "i-center_loading ".concat(n || ""), style: i },
              l.a.createElement(v, null)
            )
          : l.a.createElement("div", null);
      }
      e.c = v;
    },
    OkdH: function (t, e, n) {
      t.exports =
        n.p + "images/gamemachine-bottom.c551724fb6f30b53a636865084f834fa.png";
    },
    OtpM: function (t, e, n) {
      var r = n("o+lK")(Object.keys, Object);
      t.exports = r;
    },
    OxTg: function (t, e, n) {
      t.exports = n("4KFe")(220);
    },
    "P+UK": function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.default = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        });
    },
    PFs9: function (t, e, n) {
      t.exports =
        n.p + "images/box-header.f0a48a85a046a3e2145517ed838341a5.png";
    },
    PHlO: function (t, e, n) {
      var r = n("nD2Q");
      t.exports = function () {
        return r.Date.now();
      };
    },
    Ptek: function (t, e, n) {
      t.exports = n("4KFe")(119);
    },
    Pxal: function (t, e) {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    "Q/Ce": function (t, e, n) {
      var r = n("NTPb"),
        i = n("taEb"),
        o = n("LWFJ"),
        a = n("Hbj9"),
        s = n("3eAy"),
        c = n("pfDB"),
        u = n("XS4o"),
        l = "[object Map]",
        p = "[object Promise]",
        f = "[object Set]",
        h = "[object WeakMap]",
        d = "[object DataView]",
        v = u(r),
        m = u(i),
        y = u(o),
        g = u(a),
        b = u(s),
        w = c;
      ((r && w(new r(new ArrayBuffer(1))) != d) ||
        (i && w(new i()) != l) ||
        (o && w(o.resolve()) != p) ||
        (a && w(new a()) != f) ||
        (s && w(new s()) != h)) &&
        (w = function (t) {
          var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? u(n) : "";
          if (r)
            switch (r) {
              case v:
                return d;
              case m:
                return l;
              case y:
                return p;
              case g:
                return f;
              case b:
                return h;
            }
          return e;
        }),
        (t.exports = w);
    },
    QWVB: function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    RA07: function (t, e, n) {
      "use strict";
      n.d(e, "e", function () {
        return p;
      }),
        n.d(e, "d", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "f", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return v;
        }),
        n.d(e, "b", function () {
          return m;
        });
      var r = n("cQwn"),
        i = n.n(r),
        o = n("q4i/"),
        a = n.n(o),
        s = n("W7YU"),
        c = n("1wtr"),
        u = n("uYE1");
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(t) {
        return Object(s.g)(c.a.ETube, t);
      }
      function f(t) {
        return Object(s.g)(u.a.kTDownMsg, t);
      }
      function h(t) {
        var e = Object(s.c)(t) || [],
          n = a()(e, 2),
          r = n[0],
          i = n[1],
          o = void 0 === i ? "" : i;
        return Number(r && !o ? r : o);
      }
      function d(t, e) {
        return (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? l(Object(n), !0).forEach(function (e) {
                  i()(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        })({ __msgtype__: t }, e);
      }
      function v(t) {
        for (
          var e = t.split(","),
            n = e[0].match(/:(.*?);/)[1],
            r = atob(e[1]),
            i = r.length,
            o = new Uint8Array(i);
          i--;

        )
          o[i] = r.charCodeAt(i);
        return new Blob([o], { type: n });
      }
      function m(t) {
        var e = t.split(",");
        return decodeURIComponent(escape(atob(e[1])));
      }
    },
    "S+Sw": function (t, e, n) {
      t.exports = n("4KFe")(128);
    },
    Savh: function (t, e, n) {
      var r = n("XVtd"),
        i = n("5x0A"),
        o = n("ZIlV"),
        a = r ? r.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return o(t) || i(t) || !!(a && t && t[a]);
      };
    },
    SbaQ: function (t, e, n) {
      t.exports =
        n.p + "images/gamemachine-top.7ce086fcfbfb9c023a9e6224329db364.png";
    },
    SqF8: function (t, e, n) {
      var r = n("nD2Q").Uint8Array;
      t.exports = r;
    },
    TTyQ: function (t, e, n) {
      var r = n("ebMM"),
        i = (function () {
          try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (e) {}
        })();
      t.exports = i;
    },
    TXqB: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e, n, r) {
          function i(e) {
            var r = new o.default(e);
            n.call(t, r);
          }
          if (t.addEventListener) {
            var a = (function () {
              var n = !1;
              return (
                "object" === typeof r
                  ? (n = r.capture || !1)
                  : "boolean" === typeof r && (n = r),
                t.addEventListener(e, i, r || !1),
                {
                  v: {
                    remove: function () {
                      t.removeEventListener(e, i, n);
                    },
                  },
                }
              );
            })();
            if ("object" === typeof a) return a.v;
          } else if (t.attachEvent)
            return (
              t.attachEvent("on" + e, i),
              {
                remove: function () {
                  t.detachEvent("on" + e, i);
                },
              }
            );
        });
      var r,
        i = n("1YeO"),
        o = (r = i) && r.__esModule ? r : { default: r };
      t.exports = e.default;
    },
    TZmE: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return d;
        });
      var r = n("q4i/"),
        i = n.n(r),
        o = n("cQwn"),
        a = n.n(o),
        s = n("KFtC"),
        c = n("AA7u");
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                a()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = /nimo/.test(navigator.userAgent);
      function f(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = c.a || {},
          r = n.user;
        r.sGuid || p || (r.sGuid = Object(s.j)());
        var i = l(l({}, r), e || {});
        (t.lUid = i.uid),
          (t.sToken = i.token),
          (t.sUDBVer = i.version),
          (t.iRegOrigin = i.regOrigin),
          (t.sUA = i.sUA),
          (t.sLang = i.lang),
          (t.sCountry = i.sCountry),
          (t.sRegion = i.sRegion),
          (t.sOpSeq = i.sOpSeq),
          (t.iNetType = i.iNetType),
          i.sGuid && (t.sGuid = i.sGuid);
      }
      var h = [
        ["nick", "userName"],
        ["lcid", "clang"],
        ["uid", "udbUserId"],
        ["token", "bizToken"],
      ];
      function d(t, e) {
        var n;
        if (e) {
          n = l({}, e);
          var r = Object.prototype.hasOwnProperty;
          h.forEach(function (t) {
            var e = i()(t, 2),
              o = e[0],
              a = e[1];
            r.call(n, a) && (n[o] = n[o] || n[a]);
          });
        }
        f(t, n);
      }
    },
    TqI2: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return v;
      });
      var r = n("cQwn"),
        i = n.n(r),
        o = n("f2qI"),
        a = n.n(o),
        s = n("q4i/"),
        c = n.n(s),
        u = n("mTTC"),
        l = n("W7YU"),
        p = [
          "avatar",
          "avatarUrl",
          "guid",
          "ua",
          "userid",
          "userName",
          "bizToken",
          "lang",
          "clang",
          "country",
          "udbUserId",
          "version",
        ];
      function f(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var d = (l.i || {}).user;
      function v() {
        return new Promise(function (t, e) {
          try {
            d.isReady()
              ? t(d)
              : Promise.all([
                  u.default.getUserInfo(),
                  u.default.checkLogin(),
                ]).then(function (e) {
                  var n = c()(e, 2),
                    r = n[0],
                    i = n[1],
                    o = r || {},
                    s = (o.avatar, o.avatarUrl, o.guid),
                    u = o.ua,
                    l = (o.userid, o.userName),
                    f = o.bizToken,
                    d = o.lang,
                    v = o.clang,
                    m = o.country,
                    y = o.udbUserId,
                    g = o.version,
                    b = h(
                      h({}, a()(o, p)),
                      {},
                      {
                        isAnonymous: !i,
                        nick: l,
                        lcid: v,
                        uid: y,
                        token: f,
                        lang: d,
                        version: g,
                        sCountry: m,
                      }
                    );
                  u && (b.sUA = u), s && (b.sGuid = s), t(b);
                });
          } catch (n) {
            e(n);
          }
        });
      }
    },
    TrR6: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          {
            kRoom: 1,
            kCountry: 2,
            kPlatform: 3,
            kLang: 4,
            kCountryLang: 5,
            kCountryLangPlat: 6,
            kLangPlat: 7,
            kRoomLang: 8,
            kRoomTypeLang: 9,
            kRoomType: 10,
            kAnchorCountry: 11,
            kAnchorCountryType: 12,
            kRoomPlat: 13,
            kRoomUserLang: 14,
            kRoomCountryLangPlat: 15,
            kAppId: 16,
            kAnchorLang: 17,
            kAnchorLangPlat: 18,
            kAnchorCountryLang: 19,
            kAnchorCountryLangPlat: 20,
          });
      (r.a.ETopicType = i), (e.a = i);
    },
    Ttg1: function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      };
    },
    "U/LN": function (t, e, n) {
      (function (t) {
        var r = n("2LO6"),
          i = e && !e.nodeType && e,
          o = i && "object" == typeof t && t && !t.nodeType && t,
          a = o && o.exports === i && r.process,
          s = (function () {
            try {
              var t = o && o.require && o.require("util").types;
              return t || (a && a.binding && a.binding("util"));
            } catch (e) {}
          })();
        t.exports = s;
      }.call(this, n("QWVB")(t)));
    },
    UJcg: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return S;
      }),
        n.d(e, "b", function () {
          return y;
        }),
        n.d(e, "c", function () {
          return b;
        }),
        n.d(e, "d", function () {
          return w;
        }),
        n.d(e, "e", function () {
          return g;
        }),
        n.d(e, "f", function () {
          return I;
        }),
        n.d(e, "g", function () {
          return _;
        });
      var r = n("Bh9K"),
        i = n("fMM5"),
        o = n("+6U0"),
        a = n("7/jX"),
        s = n("UuOv"),
        c = n("w4Qk"),
        u = n("ucgO"),
        l = n("Y5An"),
        p = n.n(l),
        f = n("mMZ6"),
        h = n("APG2"),
        d = n.n(h);
      function v(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(a.a)(t);
          if (e) {
            var i = Object(a.a)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Object(o.a)(this, n);
        };
      }
      var y = {
          NET_ERROR: "net_err",
          BUSINESS_ERROR: "business_err",
          JS_ERROR: "js_err",
        },
        g = {
          JAVA: "java",
          TAF: "taf",
          SIGNALING: "signaling",
          SIGNAL: "signal",
          JAVA_SIGNAL: "java signal",
          SAIL: "sail",
          HAPI: "hapi",
          UDBAPI: "udbapi",
        },
        b = "nimo.api.responseinfo",
        w = "nimo.api.responseinfo_xl",
        S = "nimo.web_cgi.error";
      function E(t) {
        return "object" === typeof t
          ? (function (t) {
              return "[object Object]" === Object.prototype.toString.call(t);
            })(t) || Array.isArray(t)
            ? JSON.stringify(t)
            : ""
          : Number.isInteger(t)
          ? "".concat(t)
          : t || "";
      }
      function _() {
        return Math.floor(Date.now() / 1e3);
      }
      var I = (function (t) {
        Object(i.a)(n, t);
        var e = m(n);
        function n(t) {
          var i;
          return (
            Object(c.a)(this, n),
            (i = e.call(
              this,
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? v(Object(n), !0).forEach(function (e) {
                        Object(r.a)(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : v(Object(n)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(n, e)
                        );
                      });
                }
                return t;
              })({ logger: new f.b({ prefix: "MetricReport" }) }, t)
            )).loadStatReport(),
            i
          );
        }
        return (
          Object(u.a)(n, [
            {
              key: "loadStatReport",
              value: function () {
                if (d.a && d.a.getLoadStatData) {
                  var t = d.a.getLoadStatData() || {},
                    e = t.pageType,
                    n = t.isLoaded,
                    r = location.protocol;
                  this.report(
                    {
                      dim: {
                        platform: this.platform,
                        version: this.version,
                        page_type: e || "",
                        path: location.pathname,
                        schema: r.substr(0, r.length - 1),
                        success: n ? "1" : "0",
                        retcode: "0",
                        load_diff: window.__NM_DIFF__,
                        abtest: "",
                        temp: (function () {
                          try {
                            return window.matchMedia(
                              "(display-mode: standalone)"
                            ).matches
                              ? "pwa-1"
                              : "pwa-0";
                          } catch (t) {
                            return "";
                          }
                        })(),
                      },
                      field: { value: 1 },
                      name: "fed.page.loadstatus",
                    },
                    _()
                  );
                }
              },
            },
          ]),
          n
        );
      })(
        (function () {
          function t(e) {
            var n = e.getUid,
              r = void 0 === n ? function () {} : n,
              i = e.getDeviceId,
              o = void 0 === i ? function () {} : i,
              a = e.getGuid,
              s = void 0 === a ? function () {} : a,
              u = e.getCountry,
              l = void 0 === u ? function () {} : u,
              p = e.logger,
              f = e.host,
              h = e.isDebug,
              d = e.isMobile,
              v = e.metricVerSuffix,
              m = void 0 === v ? "" : v;
            Object(c.a)(this, t),
              (this.host = f),
              (this.isDebug = h),
              (this.isMobile = d),
              (this.platform = this.isMobile ? "wap" : "web"),
              (this.version = "1.2.0".concat(m)),
              (this.ua = "".concat(this.platform, "&").concat(this.version)),
              (this._getDeviceId = o),
              (this._getUid = r),
              (this._getCountry = l),
              (this._getGuid = s),
              (this.logger = p || {
                log: function () {},
                error: function () {},
              });
          }
          return (
            Object(u.a)(t, [
              {
                key: "report",
                value: (function () {
                  var t = Object(s.a)(
                    p.a.mark(function t(e, n) {
                      var r;
                      return p.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this._getUid();
                              case 2:
                                if (((t.t0 = t.sent), t.t0)) {
                                  t.next = 5;
                                  break;
                                }
                                t.t0 = "0";
                              case 5:
                                return (
                                  (r = t.t0),
                                  (this.uid = r),
                                  t.abrupt("return", this._report(e, n))
                                );
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_report",
                value: function (t, e) {
                  var n = this,
                    r = this.transformData(t, e);
                  return (
                    (r = (function (t, e) {
                      var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        c,
                        u,
                        l,
                        p,
                        f,
                        h,
                        d,
                        v =
                          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                      (n = r = i = ""), (o = a = 0);
                      var m = (function (t) {
                        for (var e = [], n = 0; n < t.length; n++) {
                          var r = t.charCodeAt(n);
                          r < 128
                            ? e.push(r)
                            : r < 2048
                            ? e.push(192 | (r >> 6), 128 | (63 & r))
                            : r < 55296 || r >= 57344
                            ? e.push(
                                224 | (r >> 12),
                                128 | ((r >> 6) & 63),
                                128 | (63 & r)
                              )
                            : (n++,
                              (r =
                                65536 +
                                (((1023 & r) << 10) |
                                  (1023 & t.charCodeAt(n)))),
                              e.push(
                                240 | (r >> 18),
                                128 | ((r >> 12) & 63),
                                128 | ((r >> 6) & 63),
                                128 | (63 & r)
                              ));
                        }
                        return e;
                      })(t);
                      for (o = m.length - 1, s = 0; o >= 0; o--)
                        (r = m[o] ^ e.charCodeAt(s) ^ a),
                          (n += String.fromCharCode(r)),
                          (s = ++s % e.length),
                          (a = r);
                      for (o = 0; o < n.length; )
                        (p = (c = n.charCodeAt(o++)) >> 2),
                          (f = ((3 & c) << 4) | ((u = n.charCodeAt(o++)) >> 4)),
                          (h =
                            ((15 & u) << 2) | ((l = n.charCodeAt(o++)) >> 6)),
                          (d = 63 & l),
                          isNaN(u) ? (h = d = 64) : isNaN(l) && (d = 64),
                          (i =
                            i +
                            v.charAt(p) +
                            v.charAt(f) +
                            v.charAt(h) +
                            v.charAt(d));
                      return i;
                    })(JSON.stringify(r), String(e))),
                    fetch("".concat(this.host, "?ts=").concat(e), {
                      method: "POST",
                      body: r,
                    }).catch(function (t) {
                      n.logger.error("fail to fetch", t);
                    })
                  );
                },
              },
              {
                key: "transformData",
                value: function (t, e) {
                  var n = (d.a.navigator || {}).connection,
                    r = (n = void 0 === n ? {} : n).rtt,
                    i = void 0 === r ? -1 : r,
                    o = n.downlink,
                    a = void 0 === o ? -1 : o,
                    s = { dim: {}, field: {}, exlog: {} };
                  if (
                    ((s.dim = t.dim),
                    void 0 === s.dim.success && (s.dim.success = "1"),
                    void 0 === s.dim.retcode && (s.dim.retcode = "0"),
                    void 0 === s.dim.platform &&
                      (s.dim.platform = this.platform),
                    void 0 === s.dim.curl &&
                      (s.dim.curl = (d.a.location && d.a.location.href) || ""),
                    (s.field = t.field),
                    void 0 === s.field.network_rtt && (s.field.network_rtt = i),
                    void 0 === s.field.network_downlink &&
                      (s.field.network_downlink = a),
                    (s.exlog.cookie_enabled = f.s.cookie ? "true" : "false"),
                    void 0 === s.dim.cookie_enabled &&
                      (s.dim.cookie_enabled = f.s.cookie ? "1" : "0"),
                    "undefined" === typeof s.dim.device_id &&
                      (s.dim.device_id = this._getDeviceId() || 0),
                    "undefined" === typeof s.dim.sguid &&
                      (s.dim.sguid = this._getGuid() || 0),
                    "undefined" === typeof s.dim.country_flg &&
                      (s.dim.country_flg = this._getCountry()),
                    (s.exlog.useragent =
                      (d.a.navigator && d.a.navigator.userAgent) || ""),
                    (s.name = t.name),
                    (s.its = e),
                    t.exlog)
                  )
                    for (var c in t.exlog)
                      if (Object.prototype.hasOwnProperty.call(t.exlog, c)) {
                        var u = E(t.exlog[c]);
                        "" !== u && (s.exlog[c] = u);
                      }
                  var l = String(t.uid || this.uid);
                  return (
                    this.logger.log(s.name, s.field, s.dim, l),
                    { m: [s], ua: this.ua, uid: l }
                  );
                },
              },
            ]),
            t
          );
        })()
      );
    },
    USXb: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          function () {
            (this.sProtocolName = ""), (this.sData = "");
          });
      (i.prototype._clone = function () {
        return new r.a.WS_JServerPacket();
      }),
        (i.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (i.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (i.prototype.writeTo = function (t) {
          t.writeString(0, this.sProtocolName), t.writeString(1, this.sData);
        }),
        (i.prototype.readFrom = function (t) {
          (this.sProtocolName = t.readString(0, !1, this.sProtocolName)),
            (this.sData = t.readString(1, !1, this.sData));
        }),
        (r.a.WS_JServerPacket = i),
        (e.a = i);
    },
    UuOv: function (t, e, n) {
      "use strict";
      function r(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function i(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, o) {
            var a = t.apply(e, n);
            function s(t) {
              r(a, i, o, s, c, "next", t);
            }
            function c(t) {
              r(a, i, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      n.d(e, "a", function () {
        return i;
      });
    },
    VFYJ: function (t, e, n) {
      var r = n("gjmc"),
        i = n("PHlO"),
        o = n("LJnb"),
        a = Math.max,
        s = Math.min;
      t.exports = function (t, e, n) {
        var c,
          u,
          l,
          p,
          f,
          h,
          d = 0,
          v = !1,
          m = !1,
          y = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function g(e) {
          var n = c,
            r = u;
          return (c = u = void 0), (d = e), (p = t.apply(r, n));
        }
        function b(t) {
          return (d = t), (f = setTimeout(S, e)), v ? g(t) : p;
        }
        function w(t) {
          var n = t - h;
          return void 0 === h || n >= e || n < 0 || (m && t - d >= l);
        }
        function S() {
          var t = i();
          if (w(t)) return E(t);
          f = setTimeout(
            S,
            (function (t) {
              var n = e - (t - h);
              return m ? s(n, l - (t - d)) : n;
            })(t)
          );
        }
        function E(t) {
          return (f = void 0), y && c ? g(t) : ((c = u = void 0), p);
        }
        function _() {
          var t = i(),
            n = w(t);
          if (((c = arguments), (u = this), (h = t), n)) {
            if (void 0 === f) return b(h);
            if (m) return clearTimeout(f), (f = setTimeout(S, e)), g(h);
          }
          return void 0 === f && (f = setTimeout(S, e)), p;
        }
        return (
          (e = o(e) || 0),
          r(n) &&
            ((v = !!n.leading),
            (l = (m = "maxWait" in n) ? a(o(n.maxWait) || 0, e) : l),
            (y = "trailing" in n ? !!n.trailing : y)),
          (_.cancel = function () {
            void 0 !== f && clearTimeout(f), (d = 0), (c = h = u = f = void 0);
          }),
          (_.flush = function () {
            return void 0 === f ? p : E(i());
          }),
          _
        );
      };
    },
    "VZ3+": function (t, e, n) {
      var r = n("6FYE"),
        i = (function () {
          var t = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })();
      t.exports = function (t) {
        return !!i && i in t;
      };
    },
    VhCM: function (t, e, n) {
      var r = n("81u2"),
        i = n("nB/V");
      t.exports = function (t, e) {
        return t && r(e, i(e), t);
      };
    },
    W7YU: function (t, e, n) {
      "use strict";
      var r = n("ZxgU");
      n.d(e, "b", function () {
        return r.b;
      }),
        n.d(e, "e", function () {
          return r.d;
        }),
        n.d(e, "k", function () {
          return r.g;
        }),
        n.d(e, "g", function () {
          return r.f;
        }),
        n.d(e, "c", function () {
          return r.c;
        }),
        n.d(e, "f", function () {
          return r.e;
        });
      var i = n("mMZ6");
      n.d(e, "a", function () {
        return i.c;
      });
      var o = n("TZmE");
      n.d(e, "j", function () {
        return o.a;
      });
      var a = n("w5j5");
      n.d(e, "h", function () {
        return a.a;
      });
      var s = n("AA7u");
      n.d(e, "i", function () {
        return s.a;
      });
      new i.b({ prefix: "nm-taf" });
      e.d = r.b;
    },
    WNm1: function (t, e, n) {
      var r = n("qtuz"),
        i = n("4cfo"),
        o = n("/2A3"),
        a = n("6UMe"),
        s = n("pAzl");
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = i),
        (c.prototype.get = o),
        (c.prototype.has = a),
        (c.prototype.set = s),
        (t.exports = c);
    },
    WQyD: function (t, e, n) {
      "use strict";
      var r = n("rIiI"),
        i = n.n(r),
        o = n("58BP"),
        a = n.n(o),
        s = n("W7YU"),
        c = n("jKdo"),
        u = n("RA07"),
        l = n("ntvm"),
        p = (function () {
          function t() {
            i()(this, t);
          }
          return (
            a()(t, [
              {
                key: "on",
                value: function () {
                  return this._onSignal.apply(this, arguments), this;
                },
              },
              {
                key: "once",
                value: function () {
                  return this._onceSignal.apply(this, arguments), this;
                },
              },
              {
                key: "off",
                value: function () {
                  return this._offSignal.apply(this, arguments), this;
                },
              },
              {
                key: "_onSignal",
                value: function (t, e, n) {
                  return Object(l.d)(t, e, n), this;
                },
              },
              {
                key: "_onceSignal",
                value: function (t, e, n) {
                  return Object(l.f)(t, e, n), this;
                },
              },
              {
                key: "_offSignal",
                value: function (t, e) {
                  return Object(l.b)(t, e), this;
                },
              },
              {
                key: "onProtocol",
                value: function () {
                  return s.e.onProtocol.apply(s.e, arguments), this;
                },
              },
              {
                key: "offProtocol",
                value: function () {
                  return s.e.offProtocol.apply(s.e, arguments), this;
                },
              },
              {
                key: "setTubeId",
                value: function (t) {
                  Object(c.e)(t);
                },
              },
              {
                key: "genDownMsgKey",
                value: function (t) {
                  return Object(u.d)(t);
                },
              },
              {
                key: "genTubeKey",
                value: function (t) {
                  return Object(u.e)(t);
                },
              },
              {
                key: "mark",
                value: function (t, e) {
                  return Object(u.f)(t, e);
                },
              },
            ]),
            t
          );
        })();
      e.a = p;
    },
    WgMg: function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r = n("rIiI"),
        i = n.n(r),
        o = n("58BP"),
        a = n.n(o),
        s = n("gy9q"),
        c = n.n(s),
        u = n("7DFi"),
        l = n.n(u),
        p = n("TJEx"),
        f = n.n(p),
        h = n("W7YU"),
        d = n("WQyD"),
        v = n("jKdo"),
        m = n("iU4o");
      function y(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = f()(t);
          if (e) {
            var i = f()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l()(this, n);
        };
      }
      var g = (function (t) {
        c()(n, t);
        var e = y(n);
        function n() {
          return i()(this, n), e.apply(this, arguments);
        }
        return (
          a()(n, [
            {
              key: "init",
              value: function (t) {
                h.i.user.isReady() || this.initRuntimeUser(t)();
              },
            },
            {
              key: "initRuntimeUser",
              value: function (t) {
                return (
                  h.i.user.init(t),
                  function () {
                    m.a.user.clear();
                  }
                );
              },
            },
            {
              key: "updateRuntimeUser",
              value: function (t) {
                h.i.user && h.i.user.set(t),
                  v.a.vip("[user] Runtime User updated", h.i.user);
              },
            },
            {
              key: "getUserAgent",
              value: function (t) {
                return Object(h.h)(t);
              },
            },
          ]),
          n
        );
      })(d.a);
      e.a = new g();
    },
    Wnpw: function (t, e, n) {
      try {
        var r = n("G29E");
      } catch (s) {
        r = n("G29E");
      }
      var i = /\s+/,
        o = Object.prototype.toString;
      function a(t) {
        if (!t || !t.nodeType)
          throw new Error("A DOM element reference is required");
        (this.el = t), (this.list = t.classList);
      }
      (t.exports = function (t) {
        return new a(t);
      }),
        (a.prototype.add = function (t) {
          if (this.list) return this.list.add(t), this;
          var e = this.array();
          return ~r(e, t) || e.push(t), (this.el.className = e.join(" ")), this;
        }),
        (a.prototype.remove = function (t) {
          if ("[object RegExp]" == o.call(t)) return this.removeMatching(t);
          if (this.list) return this.list.remove(t), this;
          var e = this.array(),
            n = r(e, t);
          return ~n && e.splice(n, 1), (this.el.className = e.join(" ")), this;
        }),
        (a.prototype.removeMatching = function (t) {
          for (var e = this.array(), n = 0; n < e.length; n++)
            t.test(e[n]) && this.remove(e[n]);
          return this;
        }),
        (a.prototype.toggle = function (t, e) {
          return this.list
            ? ("undefined" !== typeof e
                ? e !== this.list.toggle(t, e) && this.list.toggle(t)
                : this.list.toggle(t),
              this)
            : ("undefined" !== typeof e
                ? e
                  ? this.add(t)
                  : this.remove(t)
                : this.has(t)
                ? this.remove(t)
                : this.add(t),
              this);
        }),
        (a.prototype.array = function () {
          var t = (this.el.getAttribute("class") || "")
            .replace(/^\s+|\s+$/g, "")
            .split(i);
          return "" === t[0] && t.shift(), t;
        }),
        (a.prototype.has = a.prototype.contains =
          function (t) {
            return this.list ? this.list.contains(t) : !!~r(this.array(), t);
          });
    },
    Wntp: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = 0,
        i = 2,
        o = 3,
        a = 4,
        s = 5,
        c = 127;
      function u() {
        var t,
          e = null === (t = window) || void 0 === t ? void 0 : t.navigator,
          n = e.onLine,
          u = e.connection,
          l = e.mozConnection,
          p = e.webkitConnection,
          f = u || l || p;
        if (f)
          if (f.effectiveType) {
            if ("4g" === f.effectiveType) return s;
            if ("3g" === f.effectiveType) return a;
            if ("2g" === f.effectiveType || "slow-2g" === f.effectiveType)
              return o;
          } else if ("wifi" === f.type) return r;
        return !1 === n ? i : c;
      }
    },
    "X9u+": function (t, e, n) {
      var r = n("/603");
      t.exports = function (t, e) {
        var n = e ? r(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.byteLength);
      };
    },
    XS4o: function (t, e) {
      var n = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return n.call(t);
          } catch (e) {}
          try {
            return t + "";
          } catch (e) {}
        }
        return "";
      };
    },
    XVtd: function (t, e, n) {
      var r = n("nD2Q").Symbol;
      t.exports = r;
    },
    XrMN: function (t, e, n) {
      var r = n("q5c1"),
        i = n("tC9N"),
        o = n("YaT/");
      t.exports = function (t) {
        return "function" != typeof t.constructor || o(t) ? {} : r(i(t));
      };
    },
    Xw7g: function (t, e, n) {},
    XzvF: function (t, e, n) {
      "use strict";
      t.exports = n("mSMB");
    },
    Y13O: function (t, e) {
      var n = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = t.length,
          r = new t.constructor(e);
        return (
          e &&
            "string" == typeof t[0] &&
            n.call(t, "index") &&
            ((r.index = t.index), (r.input = t.input)),
          r
        );
      };
    },
    Y5An: function (t, e, n) {
      t.exports = n("28PD");
    },
    YQsQ: function (t, e, n) {
      t.exports = n("4KFe")(236);
    },
    YYjS: function (t, e) {
      t.exports = function () {
        return [];
      };
    },
    "YaT/": function (t, e) {
      var n = Object.prototype;
      t.exports = function (t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || n);
      };
    },
    Yxsh: function (t, e, n) {
      "use strict";
      e.a = function (t) {
        return new Promise(function (e, n) {
          var r = document.createElement("img");
          r.setAttribute("fetchpriority", "high"),
            (r.onload = function () {
              e(t), (r = null);
            }),
            (r.onerror = function (t) {
              n(t), (r = null);
            }),
            (r.src = t);
        });
      };
    },
    Z9i3: function (t, e, n) {
      var r = n("XVtd"),
        i = r ? r.prototype : void 0,
        o = i ? i.valueOf : void 0;
      t.exports = function (t) {
        return o ? Object(o.call(t)) : {};
      };
    },
    ZIlV: function (t, e) {
      var n = Array.isArray;
      t.exports = n;
    },
    Zb4k: function (t, e, n) {
      var r = n("Q/Ce"),
        i = n("dZ9T");
      t.exports = function (t) {
        return i(t) && "[object Set]" == r(t);
      };
    },
    "a1+A": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n("2/Ax");
      function i(t, e) {
        if (null == t) return {};
        var n,
          i,
          o = Object(r.a)(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
    },
    a5Qt: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return f;
      }),
        n.d(e, "b", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return y;
        });
      var r = n("/h5q");
      function i(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var o = n("nimoua"),
        a = n.n(o),
        s = n("XzvF"),
        c = n.n(s),
        u = ["userInfo", "isDebug", "debugIP"];
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var p,
        f = {
          SIGNAL_ERROR_LOCAL_TIMEOUT: -1,
          SIGNAL_ERROR_LOCAL_ERROR: -3,
          SIGNAL_ERROR_NO_INIT: -10,
          SIGNAL_ERROR_FIRST_PACKAGE: -500,
          SIGNAL_ERROR_WS_SEND_ERROR: -10092,
          SIGNAL_ERROR_READ_ERROR: -10504,
          SIGNAL_ERROR_WRITE_ERROR: -20001,
          SIGNAL_ERROR_NO_REGISTER: -20002,
          SIGNAL_HTTP_REQUEST_ERROR: -20003,
        },
        h = c.a.events,
        d = !1,
        v = [],
        m = (a.a || {}).browser;
      function y(t) {
        if (p)
          return (
            t.noConnect || p.isWSConnected() || p.startWS(), Promise.resolve(p)
          );
        if (d)
          return new Promise(function (t, e) {
            v.push({ resolve: t, reject: e });
          });
        d = !0;
        var e = t || {},
          n = e.userInfo,
          o = e.isDebug,
          a = e.debugIP,
          s = i(e, u),
          f = n || {},
          h = f.uid,
          y = f.sGuid,
          g = f.lang,
          b = f.sCountry,
          w = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? l(Object(n), !0).forEach(function (e) {
                    Object(r.a)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : l(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            {
              appSrc: "NIMO&".concat(b, "&").concat(g),
              APPID: "NIMO",
              uid: h || "0",
              guid: y || "0",
              ua: "webh5&0.0.1&nimo",
              isDebug: o,
              DEBUG_IP: a,
              isForeign: 1,
              reportUrl: "https://statwup.nimo.tv",
              device: null == m ? void 0 : m.name,
              osver: null == m ? void 0 : m.version,
              domain: ".nimo.tv",
              enableTrace: 1,
            },
            s
          );
        for (p = new c.a.init(w); v.length; ) {
          (0, v.shift().resolve)(p);
        }
        return p;
      }
    },
    "aH/G": function (t, e, n) {
      t.exports = { default: n("OxTg"), __esModule: !0 };
    },
    aPbn: function (t, e) {
      t.exports = function (t) {
        var e = null == t ? 0 : t.length;
        return e ? t[e - 1] : void 0;
      };
    },
    ax1G: function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r,
        i = n("ve36"),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              (0, o.default)(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })();
    },
    b3NQ: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return B;
      }),
        n.d(e, "b", function () {
          return x;
        }),
        n.d(e, "c", function () {
          return _;
        }),
        n.d(e, "d", function () {
          return E;
        }),
        n.d(e, "e", function () {
          return S;
        }),
        n.d(e, "f", function () {
          return T;
        }),
        n.d(e, "g", function () {
          return C;
        }),
        n.d(e, "h", function () {
          return K;
        }),
        n.d(e, "i", function () {
          return W;
        }),
        n.d(e, "k", function () {
          return z;
        }),
        n.d(e, "l", function () {
          return gt;
        }),
        n.d(e, "m", function () {
          return nt;
        }),
        n.d(e, "n", function () {
          return I;
        }),
        n.d(e, "o", function () {
          return rt;
        }),
        n.d(e, "p", function () {
          return dt;
        }),
        n.d(e, "q", function () {
          return vt;
        });
      var r = n("a1+A"),
        i = n("Bh9K"),
        o = n("UuOv"),
        a = n("fMM5"),
        s = n("+6U0"),
        c = n("7/jX"),
        u = n("w4Qk"),
        l = n("ucgO"),
        p = n("Y5An"),
        f = n.n(p),
        h = n("mMZ6");
      n.d(e, "j", function () {
        return h.e;
      });
      var d = n("a5Qt"),
        v = ["requestId", "bcode", "sdkcode"],
        m = ["baseURL", "data"],
        y = ["baseURL", "delay", "timeout", "data"];
      function g(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(n), !0).forEach(function (e) {
                Object(i.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function w(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Object(c.a)(t);
          if (e) {
            var i = Object(c.a)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Object(s.a)(this, n);
        };
      }
      var S = (function () {
          function t() {
            Object(u.a)(this, t);
          }
          return (
            Object(l.a)(t, null, [
              {
                key: "number",
                value: function (t) {
                  return "number" === typeof t;
                },
              },
              {
                key: "string",
                value: function (t) {
                  return "string" === typeof t;
                },
              },
            ]),
            t
          );
        })(),
        E = "/",
        _ = "-",
        I = {
          paramsConnector: E,
          paramsSeparator: E,
          paramsSerializer: function (t) {
            return O(t).join(E);
          },
        },
        T = {
          paramsConnector: _,
          paramsSeparator: _,
          paramsSerializer: function (t) {
            return O(t).join(_);
          },
        };
      function O(t) {
        var e = Object.prototype.toString,
          n = [];
        return (
          "[object Array]" === e.call(t) &&
            t.map(function (t) {
              if (
                ((S.string(t) || S.number(t)) && (t = { value: t }),
                "[object Object]" !== e.call(t))
              )
                throw new TypeError("queryParams has invalid item(s).");
              var r = (t || {}).value;
              n.push(r);
            }),
          n
        );
      }
      var k = (function () {
        function t() {
          Object(u.a)(this, t), (this.handlers = []);
        }
        return (
          Object(l.a)(t, [
            {
              key: "push",
              value: function (t, e) {
                return (
                  this.handlers.push({ onFulfilled: t, onRejected: e }),
                  this.handlers.length - 1
                );
              },
            },
            {
              key: "unshift",
              value: function (t, e) {
                return (
                  this.handlers.unshift({ onFulfilled: t, onRejected: e }),
                  this.handlers.length - 1
                );
              },
            },
            {
              key: "remove",
              value: function (t) {
                this.handlers[t] && (this.handlers[t] = null);
              },
            },
            {
              key: "forEach",
              value: function (t) {
                this.handlers.forEach(function (e) {
                  null !== e && t(e);
                });
              },
            },
          ]),
          t
        );
      })();
      function R(t, e, n) {
        return n
          ? (n.forEach(function (n) {
              t = n(t, e);
            }),
            t)
          : t;
      }
      function U(t, e, n) {
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            var i = e[r];
            t[r] = n && "function" === typeof i ? i.bind(n) : i;
          }
        return t;
      }
      var C = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return e.reduce(function (t, e) {
          return e(t);
        });
      };
      function P(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function N(t, e, n) {
        var r,
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "?",
          o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : "&";
        if (!e) return t;
        if (n) r = n(e);
        else if (Object(h.l)(e)) r = e.toString();
        else {
          var a = [];
          Object.keys(e).forEach(function (t) {
            var n = e[t];
            null !== n &&
              "undefined" !== typeof n &&
              (Array.isArray(n) ? (t += "[]") : (n = [n]),
              n.forEach(function (e) {
                Object(h.j)(e)
                  ? (e = e.toISOString())
                  : Object(h.k)(e) && (e = JSON.stringify(e)),
                  a.push("".concat(P(t), "=").concat(P(e)));
              }));
          }),
            (r = a.join("&"));
        }
        if (r) {
          var s = t.indexOf("#");
          -1 !== s && (t = t.slice(0, s)),
            (t += (-1 === t.indexOf(i) ? i : o) + r);
        }
        return t;
      }
      function A(t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
      }
      function M(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
      }
      function D(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      function j(t, e) {
        var n = D(e).then(function () {
          var t = new Error("Request timed out after ".concat(e, " ms."));
          throw ((t.name = "TimeoutError"), t);
        });
        return Promise.race([t, n]);
      }
      var L = (function () {
          function t(e, n) {
            Object(u.a)(this, t);
            var r = n || {},
              i = r.baseURL,
              o = r.url,
              a = r.pathname,
              s = r.server,
              c = "string" === typeof e ? new Error(e) : e;
            (this.message = c.message),
              (this.name = "ApiError"),
              (this.description = c.description),
              (this.number = c.number),
              (this.fileName = c.fileName),
              (this.lineNumber = c.lineNumber),
              (this.columnNumber = c.columnNumber),
              (this.stack = c.stack),
              (this.server = s),
              (this.origin = i),
              (this.pathname = a || o),
              (this.config = n);
          }
          return (
            Object(l.a)(t, [
              {
                key: "toJSON",
                value: function () {
                  return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                  };
                },
              },
              {
                key: "toString",
                value: function () {
                  return (
                    (this.name ? this.name : "") +
                    ": " +
                    (this.message ? this.message : "")
                  );
                },
              },
            ]),
            t
          );
        })(),
        B = (function (t) {
          Object(a.a)(n, t);
          var e = w(n);
          function n(t, r) {
            var i;
            return (
              Object(u.a)(this, n),
              ((i = e.call(this, t, r)).name = t.name || "JSError"),
              (i.type = "js_err"),
              i
            );
          }
          return Object(l.a)(n);
        })(L),
        x = (function (t) {
          Object(a.a)(n, t);
          var e = w(n);
          function n(t, r, i) {
            var o;
            return (
              Object(u.a)(this, n),
              ((o = e.call(this, t, r)).name = "NetError"),
              (o.type = "net_err"),
              (o.status = (i && i.status) || 0),
              (o.code = o.status),
              o
            );
          }
          return Object(l.a)(n);
        })(L);
      function W(t, e) {
        return G.apply(this, arguments);
      }
      function G() {
        return (G = Object(o.a)(
          f.a.mark(function t(e, n) {
            var i, o, a, s, c, u, l, p;
            return f.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((a = e.url),
                        e.baseURL && !M(e.url) && (a = A(e.baseURL, e.url)),
                        null === e.queryParams ||
                          "object" !== typeof e.queryParams)
                      ) {
                        t.next = 10;
                        break;
                      }
                      (t.prev = 3),
                        (a = N(
                          a,
                          e.queryParams,
                          e.paramsSerializer,
                          e.paramsConnector,
                          e.paramsSeparator
                        )),
                        (t.next = 10);
                      break;
                    case 7:
                      throw ((t.prev = 7), (t.t0 = t.catch(3)), new B(t.t0, e));
                    case 10:
                      (t.prev = 10),
                        (e.body = R(e.data, e, e.transformRequest)),
                        (t.next = 17);
                      break;
                    case 14:
                      throw (
                        ((t.prev = 14), (t.t1 = t.catch(10)), new B(t.t1, e))
                      );
                    case 17:
                      if (
                        (window.AbortController &&
                          "function" === typeof window.AbortController &&
                          ((i = new AbortController()), (o = i.signal)),
                        (s = e || {}).baseURL,
                        (c = s.delay),
                        (u = s.timeout),
                        s.data,
                        (l = Object(r.a)(s, y)),
                        (p = fetch(a, b(b({}, l), { signal: o }))),
                        !(Number.isInteger(c) && c > 0))
                      ) {
                        t.next = 23;
                        break;
                      }
                      return (t.next = 23), D(c);
                    case 23:
                      return (
                        Number.isInteger(u) &&
                          u > 0 &&
                          Number.isFinite(u) &&
                          (p = j(p, u).catch(function (t) {
                            return i && i.abort(), Promise.reject(t);
                          })),
                        t.abrupt(
                          "return",
                          p.then(
                            function (t) {
                              if (((n.response = t), t.ok))
                                return Promise.resolve(t);
                              throw new x(
                                "Request failed with status code ".concat(
                                  t.status
                                ),
                                e,
                                { status: t.status }
                              );
                            },
                            function (t) {
                              throw new x(t, e);
                            }
                          )
                        )
                      );
                    case 25:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [
                [3, 7],
                [10, 14],
              ]
            );
          })
        )).apply(this, arguments);
      }
      var F = (function (t) {
        Object(a.a)(n, t);
        var e = w(n);
        function n(t, r, i, o) {
          var a;
          return (
            Object(u.a)(this, n),
            ((a = e.call(this, t, r)).code = i),
            (a.name = "BusinessError"),
            (a.type = "business_err"),
            (a.data = o),
            a.data && void 0 === a.data.code && (a.data.code = i),
            a
          );
        }
        return Object(l.a)(n);
      })(L);
      function H(t, e) {
        var n = t.adapter,
          r = void 0 === n ? W : n,
          i = t.transformResponse,
          o = t.beforeRequest,
          a = t.afterUnpack,
          s = t.afterResponse,
          c = t.onError,
          u = t.exportReportParams,
          l = t.customHandleError,
          p = t.transformError;
        return (
          "function" === typeof o && o(t),
          r(t, e)
            .then(function (e) {
              return (
                a(t, (null == e ? void 0 : e.status) || 0),
                R(e, t, i).then(
                  function (t) {
                    var e = t || {},
                      n = e.code,
                      r = e.isSuccess,
                      i = e.config,
                      o = e.rawData;
                    if (!r)
                      throw new F(
                        "A Business Error occurred with code ".concat(n),
                        i,
                        n,
                        o
                      );
                    return t;
                  },
                  function (e) {
                    if (e instanceof x) throw e;
                    throw new B(e, t);
                  }
                )
              );
            })
            .then(function (t) {
              if (u) return t;
              var e = t || {},
                n = e.data,
                r = e.code,
                i = e.isSuccess,
                o = e.config;
              return s(o, { isBusinessSuccess: i, code: r }, t), n;
            })
            .catch(function (e) {
              if (u) throw e;
              if (
                (p && R(e, t, p),
                s(e.config, { isBusinessSuccess: !1, status: e.code }, e),
                c(e),
                l || e)
              )
                throw e instanceof F ? e.data : e;
            })
        );
      }
      function V(t) {
        (this.defaults = t),
          (this.interceptors = { request: new k(), response: new k() });
      }
      V.prototype.request = function (t, e) {
        var n;
        "string" === typeof t ? ((n = e || {}).url = t) : (n = t || {}),
          ((n = b(b({}, this.defaults), n)).method = n.method
            ? n.method.toLowerCase()
            : "get");
        var r = [H, void 0],
          i = Promise.resolve(n);
        this.interceptors.request.forEach(function (t) {
          r.unshift(t.onFulfilled, t.onRejected);
        }),
          this.interceptors.response.forEach(function (t) {
            r.push(t.onFulfilled, t.onRejected);
          });
        for (var o = { config: n, response: null }; r.length; ) {
          var a = r.shift(),
            s = r.shift();
          i = i.then(q(a, o), q(s, o));
        }
        return (
          i
            .then(function () {
              o = null;
            })
            .catch(function () {
              o = null;
            }),
          i
        );
      };
      var q = function (t, e) {
          return "function" !== typeof t
            ? t
            : function () {
                for (
                  var n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                return r.push(e), t.apply(t, r);
              };
        },
        J = {
          baseURL: "",
          collector: !1,
          delay: 0,
          timeout: 0,
          signal: null,
          onProgress: function () {},
        };
      function K(t) {
        return new Error("http: ".concat(t));
      }
      function z(t) {
        var e = (t || {}).fetchArray,
          n = { isResolve: !1, rejectCount: 0 };
        return (
          Object.seal(n),
          new Promise(function (t, r) {
            var i = e.length;
            e.forEach(function (e) {
              e.then(function (e) {
                n.isResolve || ((n.isResolve = !0), t(e));
              }).catch(function (t) {
                (n.rejectCount += 1), n.rejectCount === i && r(t);
              });
            });
          })
        );
      }
      var Q = Object.create(null),
        Y = !1,
        Z = function () {},
        X = null,
        $ = 0;
      var tt = function (t, e, n) {
          if ("function" !== typeof t) return null;
          var r = ($ += 1);
          return (
            (Q[r] = { func: t, store: e, config: n }),
            function () {
              delete Q[r];
            }
          );
        },
        et = function (t) {
          var e = t || {},
            n = e.type,
            r = e.code;
          if ("error" === n || "close" === n) {
            var i = null != r ? r : -112001;
            X = !1;
            for (var o = Object.values(Q); o.length; ) {
              var a = o.shift(),
                s = a.func,
                c = a.store,
                u = a.config;
              (c.response = b(b({}, t), {}, { status: i })),
                s(
                  new x(
                    "Request failed with signal socket "
                      .concat(n, " with code ")
                      .concat(i),
                    u,
                    { status: i }
                  )
                );
            }
            Z();
          }
        };
      function nt(t, e) {
        for (
          var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          i[o - 2] = arguments[o];
        var a = function (t) {
          Y ||
            ((Y = !0),
            t.on(e.WS_CONNET_STATE, et),
            t.on(e.WEBSOCKET_DOLAUNCH, function () {
              X = !0;
            }),
            (Z = function () {
              t.reconnetWS();
            }));
        };
        return function (e, n) {
          var o = e || {},
            s = o.data,
            c = o.retry,
            u = void 0 === c ? 0 : c,
            l = o.url,
            p = i[1] || l,
            f = i[2] || e.structure,
            h = i[0] || e.moduleName;
          return t({ noConnect: 1 }).then(function (t) {
            return (
              a(t),
              null === X && (X = t.wsLaunch),
              (e.baseURL = (t && t.tafHandler && t.tafHandler.url) || ""),
              new Promise(function (i, o) {
                t.registerWup(p, f);
                var a = t.tafHandler.connected ? tt(o, n, e) : null;
                t.sendWup(
                  h,
                  p,
                  s,
                  function (t) {
                    var s = t || {},
                      c = (s.requestId, s.bcode),
                      u = s.sdkcode,
                      l = Object(r.a)(s, v);
                    if ((a && a(), !u && c >= 0))
                      i(b(b({}, l), {}, { funcName: p, returnValue: c }));
                    else {
                      var f = u || c;
                      (n.response = { status: f, response: t }),
                        u === d.a.SIGNAL_ERROR_NO_REGISTER &&
                          i(b(b({}, l), {}, { funcName: p, returnValue: 0 })),
                        o(
                          new x(
                            "Request failed with ".concat(
                              u
                                ? "sdkcode error: ".concat(u)
                                : "signal channel error: ".concat(c)
                            ),
                            e,
                            { status: f }
                          )
                        );
                    }
                  },
                  u + 1
                );
              })
            );
          });
        };
      }
      function rt(t) {
        var e = Object.prototype.toString.call(t);
        if ("[object Object]" === e) return !0;
        if ("[object Array]" === e)
          t.map(function (t) {
            if ("[object Object]" === Object.prototype.toString.call(t)) {
              var e = t || {},
                n = e.key,
                r = e.value,
                i = e.validator;
              if (!i(r))
                throw new TypeError(
                  "".concat(n, " is not ").concat(i.name || "valid")
                );
            }
          });
        else if (t)
          throw new TypeError(
            "The type of params is ".concat(e, ", not an object or an array.")
          );
        return !0;
      }
      function it(t) {
        var e = new V(t),
          n = V.prototype.request.bind(e);
        return (n = U(n, V.prototype, e)), (n = U(n, e));
      }
      var ot = it(J);
      ot.create = function (t) {
        return it(b(b({}, fetch.defaults), t));
      };
      var at = Object(l.a)(function t(e) {
          var n = e.value,
            r = e.prev,
            i = e.next,
            o = e.list;
          Object(u.a)(this, t),
            (this.value = n),
            (this.prev = r),
            (this.next = i),
            (this.list = o);
        }),
        st = (function () {
          function t() {
            Object(u.a)(this, t),
              Object(i.a)(this, "length", 0),
              Object(i.a)(this, "head", null),
              Object(i.a)(this, "tail", null);
          }
          return (
            Object(l.a)(t, [
              {
                key: "remove",
                value: function (t) {
                  if (!t) return !1;
                  var e = t.prev,
                    n = t.next;
                  return (
                    n && (n.prev = e),
                    e && (e.next = n),
                    t === this.head && (this.head = n),
                    t === this.tail && (this.tail = e),
                    (this.length -= 1),
                    (t.next = null),
                    (t.prev = null),
                    (t.list = null),
                    t
                  );
                },
              },
              {
                key: "unshift",
                value: function (t) {
                  return (
                    t.list && t.list.remove(t),
                    (t.list = this),
                    (t.next = this.head),
                    (t.prev = null),
                    this.head && (this.head.prev = t),
                    (this.head = t),
                    this.tail || (this.tail = t),
                    (this.length += 1),
                    !0
                  );
                },
              },
              {
                key: "shift",
                value: function () {
                  var t = this.head;
                  if (t) {
                    var e = t.next;
                    return (
                      (this.head = e),
                      this.head ? (e.prev = null) : (this.tail = null),
                      (this.length -= 1),
                      t
                    );
                  }
                },
              },
              {
                key: "pop",
                value: function () {
                  var t = this.tail;
                  if (t) {
                    var e = t.prev;
                    return (
                      (this.tail = e),
                      this.tail ? (e.next = null) : (this.head = null),
                      (this.length -= 1),
                      t
                    );
                  }
                },
              },
              {
                key: "push",
                value: function (t) {
                  return (
                    t.list && t.list.remove(t),
                    (t.list = this),
                    (t.next = null),
                    (t.prev = this.tail),
                    this.tail && (this.tail.next = t),
                    (this.tail = t),
                    this.head || (this.head = t),
                    (this.length += 1),
                    !0
                  );
                },
              },
            ]),
            t
          );
        })();
      st.Node = at;
      var ct = (function () {
          function t(e) {
            Object(u.a)(this, t);
            var n = e || {},
              r = n.length,
              i = n.maxAge;
            (this._maxLength = r || 100),
              (this._maxAge = i || 3e5),
              (this._store = Object.create(null)),
              (this._list = new st());
          }
          return (
            Object(l.a)(t, [
              {
                key: "length",
                get: function () {
                  return this._list.length;
                },
              },
              {
                key: "get",
                value: function (t) {
                  var e = this._store[t];
                  if (e) {
                    var n = Date.now(),
                      r = e.expirationTime,
                      i = e.node,
                      o = e.data;
                    return n >= r || !o
                      ? (this._list.remove(i), this.delete(t), null)
                      : (this._list.unshift(i),
                        (this._store[t] = {
                          expirationTime: r,
                          data: o,
                          node: this._list.head,
                        }),
                        o);
                  }
                  return null;
                },
              },
              {
                key: "set",
                value: function (t, e) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : this._maxAge;
                  if (!t || !e) return !1;
                  var r = Date.now(),
                    i = this._store[t],
                    o = i || {},
                    a = o.node;
                  if (i) this._list.unshift(a);
                  else {
                    var s = new st.Node({
                      value: { key: t, value: e },
                      next: this._list.head,
                      prev: null,
                      list: null,
                    });
                    this._list.unshift(s);
                  }
                  return (
                    (this._store[t] = {
                      expirationTime: r + n,
                      data: e,
                      node: this._list.head,
                    }),
                    this.trim(),
                    !0
                  );
                },
              },
              {
                key: "setWithoutUpdate",
                value: function (t, e) {
                  if (!t || !e) return !1;
                  var n = this._store[t];
                  return (
                    !!n && ((this._store[t] = b(b({}, n), {}, { data: e })), !0)
                  );
                },
              },
              {
                key: "delete",
                value: function (t) {
                  if (!t) return !1;
                  var e = this._store[t];
                  if (e) {
                    var n = e.node;
                    n && this._list.remove(n), delete this._store[t];
                  }
                  return !0;
                },
              },
              {
                key: "trim",
                value: function () {
                  if (this._list.length > this._maxLength) {
                    var t = this._list.tail.value.key;
                    this.delete(t);
                  }
                },
              },
            ]),
            t
          );
        })(),
        ut = function (t) {
          var e = t.data,
            n = t.structure,
            r = t.moduleName,
            i = t.baseURL,
            o = t.url,
            a = "";
          if (!!r && !!n)
            a = ""
              .concat(r, "/")
              .concat(o, "@")
              .concat(n.toString(), "@")
              .concat(JSON.stringify(e));
          else
            try {
              a = N(
                i && !M(o) ? A(i, o) : o,
                t.queryParams,
                t.paramsSerializer,
                t.paramsConnector,
                t.paramsSeparator
              );
              var s = Object.keys(e).sort(),
                c = [];
              s.forEach(function (t) {
                var n = e[t];
                c.push("".concat(t, "=").concat(n));
              }),
                (a += "?".concat(c.join("&")));
            } catch (u) {
              a = null;
            }
          return a;
        },
        lt = null,
        pt = "cache_pending",
        ft = Object.create(null),
        ht = function (t) {
          if (!lt) {
            var e = new ct(b({ length: 1e3, maxAge: 6e5 }, t));
            lt = e;
          }
          return lt;
        };
      var dt = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function (e) {
            return function (n) {
              for (
                var r = n.useCache,
                  i = arguments.length,
                  o = new Array(i > 1 ? i - 1 : 0),
                  a = 1;
                a < i;
                a++
              )
                o[a - 1] = arguments[a];
              if (r) {
                var s = t || {},
                  c = s.defaultCache,
                  u = c || ht(t),
                  l = ut(n),
                  p = u.get(l),
                  f = function (t, e) {
                    Object.defineProperty(n, t, { value: e, writable: !1 });
                  };
                return p === pt
                  ? new Promise(function (t, e) {
                      var n = ft[l] || [];
                      n.push({ resolve: t, reject: e }),
                        (ft[l] = n),
                        f("responseFrom", "queue");
                    })
                  : p
                  ? (p.clone && u.setWithoutUpdate(l, p.clone()),
                    f("responseFrom", "cache"),
                    Promise.resolve(p))
                  : (u.set(l, pt, 3e3),
                    e
                      .apply(void 0, [n].concat(o))
                      .then(function (t) {
                        for (
                          var e = ft[l],
                            n = function () {
                              return t.clone ? t.clone() : t;
                            };
                          Array.isArray(e) && e.length;

                        ) {
                          (0, e.shift().resolve)(n());
                        }
                        return (
                          delete ft[l],
                          u.set(l, n(), "boolean" !== typeof r ? r : void 0),
                          t
                        );
                      })
                      .catch(function (t) {
                        u.delete(l);
                        for (var e = ft[l]; Array.isArray(e) && e.length; ) {
                          (0, e.shift().reject)(t);
                        }
                        return delete ft[l], Promise.reject(t);
                      }));
              }
              return e.apply(void 0, [n].concat(o));
            };
          };
        },
        vt = function (t) {
          return function (e) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            var o = e.retry,
              a = void 0 === o ? 0 : o,
              s = 0,
              c = function () {
                Object.defineProperty(e, "retryCount", {
                  value: s,
                  writable: !1,
                });
              },
              u = function () {
                return t
                  .apply(void 0, [e].concat(r))
                  .then(function (t) {
                    return c(), t;
                  })
                  .catch(function (t) {
                    if (t instanceof x) return l(t);
                    throw t;
                  });
              },
              l = function (t) {
                return a > s ? ((s += 1), u()) : (c(), Promise.reject(t));
              };
            return u();
          };
        },
        mt = ot.create(),
        yt = {};
      function gt(t, e) {
        var n = e || {},
          i = n.baseURL,
          o = n.data,
          a = void 0 === o ? {} : o,
          s = Object(r.a)(n, m);
        return mt(t, b(b({ baseURL: i, data: a }, yt), s));
      }
    },
    bkuk: function (t, e, n) {
      var r = n("pfDB"),
        i = n("gjmc");
      t.exports = function (t) {
        if (!i(t)) return !1;
        var e = r(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    cHWY: function (t, e, n) {
      t.exports =
        n.p + "images/box-header2.cd4c506eee0bd759df39b075fcdcaf9d.png";
    },
    crpe: function (t, e) {
      var n = Date.now;
      t.exports = function (t) {
        var e = 0,
          r = 0;
        return function () {
          var i = n(),
            o = 16 - (i - r);
          if (((r = i), o > 0)) {
            if (++e >= 800) return arguments[0];
          } else e = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    dBYC: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "d", function () {
          return s;
        });
      var r = n("w6NW"),
        i = {
          JUMP_OUTER_BROWSER: 990,
          POPUP_SHARE: 991,
          FOLLOW_EVENT: 992,
          SHOW_USER_INFO_DIALOG: 993,
          GET_LIVE_ROOM_INFO: 994,
          POPUP_LOGIN: 995,
          JUMP_TO_LIVE_ROOM: 996,
          SHOW_TOAST: 997,
          REGISTER_SOCKET_MSG: 998,
          UNREGISTER_SOCKET_MSG: 999,
          OPEN_ACTIVITY_MODAL: 1e3,
          RESIZE_WEB_VIEW: 1001,
          OPEN_ROOM_GIFT_PANEL: 1002,
          REGISTER_BUSINESS_MSG: 1003,
          SET_BUSINESS_MSG_CALLBACK: 1004,
          UNREGISTER_BUSINESS_MSG: 1005,
          POPUP_JOIN_FANS_MODAL: 1008,
          POPUP_PAID_SUBSCRIPTION_MODAL: 1009,
          CLOSE_ACTIVITY_MODAL: 1010,
          SUBSCRIBE_TOPIC: 1011,
          UNSUBSCRIBE_TOPIC: 1012,
          UPDATE_ACCOUNT_BALANCE: 1013,
          OPEN_FINAL_BOX: 1014,
          HOIST_EMBED_INFO: 1015,
          OPEN_FANS_BOX: 1016,
          CLOSE_SELF: 1017,
          OPEN_RAMADAN_BOX: 1018,
          OPEN_WEEK_STAR_ACTIVITY_MODAL: 1019,
          OPEN_WORLD_CUP_MODAL: 1020,
          OPEN_INNER_BROWSER: 1021,
          DISPATCH_PLAYER_EVENT: 10001,
        },
        o = Object.keys(i).map(function (t) {
          return [i[t], Object(r.l)(t)];
        }),
        a = {
          SYNC_ROOM_INFO: 2e3,
          SYNC_MODAL_VISIBILITY: 2001,
          INVOKE_PLAYER_PLAY: 3001,
          INVOKE_PLAYER_PAUSE: 3002,
          INVOKE_PLAYER_GET_PLAYER_STATE: 3003,
          INVOKE_PLAYER_MUTED: 3004,
        },
        s = [i.HOIST_EMBED_INFO];
    },
    dDXP: function (t, e, n) {
      var r = n("/603"),
        i = n("X9u+"),
        o = n("yXRO"),
        a = n("Z9i3"),
        s = n("7OaQ");
      t.exports = function (t, e, n) {
        var c = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return r(t);
          case "[object Boolean]":
          case "[object Date]":
            return new c(+t);
          case "[object DataView]":
            return i(t, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return s(t, n);
          case "[object Map]":
            return new c();
          case "[object Number]":
          case "[object String]":
            return new c(t);
          case "[object RegExp]":
            return o(t);
          case "[object Set]":
            return new c();
          case "[object Symbol]":
            return a(t);
        }
      };
    },
    dZ9T: function (t, e) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    doAf: function (t, e, n) {
      var r = n("9Cfe");
      t.exports = function (t, e) {
        var n = this.__data__,
          i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
      };
    },
    eJEa: function (t, e) {
      t.exports = function () {
        return !1;
      };
    },
    eSnk: function (t, e, n) {
      "use strict";
      var r = n("4oOK");
      e.a = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
          i = 0,
          o = function o() {
            for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
              s[c] = arguments[c];
            return (
              (i += 1),
              t.apply(void 0, s).catch(function (t) {
                if (i < n)
                  return Object(r.a)(e).then(function () {
                    return o.apply(void 0, s);
                  });
                throw t;
              })
            );
          };
        return o;
      };
    },
    ebMM: function (t, e, n) {
      var r = n("HqbC"),
        i = n("Pxal");
      t.exports = function (t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0;
      };
    },
    ecr1: function (t, e, n) {
      var r = n("O5qi"),
        i = n("M5AP"),
        o = n("olh8"),
        a = n("mE5N"),
        s = n("doAf");
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = i),
        (c.prototype.get = o),
        (c.prototype.has = a),
        (c.prototype.set = s),
        (t.exports = c);
    },
    f4f7: function (t, e, n) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    f7Gn: function (t, e, n) {
      var r = n("81u2"),
        i = n("k9ao");
      t.exports = function (t, e) {
        return r(t, i(t), e);
      };
    },
    fMM5: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n("8m9Z");
      function i(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Object(r.a)(t, e);
      }
    },
    fN8n: function (t, e, n) {
      var r = n("Q/Ce"),
        i = n("dZ9T");
      t.exports = function (t) {
        return i(t) && "[object Map]" == r(t);
      };
    },
    fTte: function (t, e, n) {
      t.exports = { default: n("jDd3"), __esModule: !0 };
    },
    g1wE: function (t, e, n) {
      var r = n("YaT/"),
        i = n("OtpM"),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t))
          o.call(t, n) && "constructor" != n && e.push(n);
        return e;
      };
    },
    gaLA: function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    gjmc: function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    hks1: function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("f2qI"),
        a = n.n(o),
        s = n("rIiI"),
        c = n.n(s),
        u = n("58BP"),
        l = n.n(u),
        p = n("Ptek"),
        f = n.n(p),
        h = n("gy9q"),
        d = n.n(h),
        v = n("7DFi"),
        m = n.n(v),
        y = n("TJEx"),
        g = n.n(y),
        b = n("cQwn"),
        w = n.n(b),
        S = n("avFb"),
        E = n.n(S),
        _ = n("kPK6"),
        I = n.n(_),
        T = n("uZd7"),
        O = n.n(T),
        k = n("VFYJ"),
        R = n.n(k),
        U = n("MCIh"),
        C = n.n(U),
        P = n("njtY"),
        N = [
          "prefixCls",
          "ghost",
          "block",
          "className",
          "children",
          "childrenClassName",
          "wrapType",
          "type",
          "htmlType",
          "icon",
          "iconProps",
          "size",
          "shape",
          "append",
          "debounce",
          "debounceTime",
          "throttle",
          "throttleTime",
          "clicked",
          "preventDefault",
          "from",
          "nodeRef",
        ];
      function A(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = g()(t);
          if (e) {
            var i = g()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return m()(this, n);
        };
      }
      var M = (function (t) {
        d()(n, t);
        var e = A(n);
        function n(t) {
          var r;
          c()(this, n);
          var i = t.debounce,
            o = t.debounceTime,
            a = t.throttle,
            s = t.throttleTime;
          return (
            (r = e.call(this, t)),
            w()(f()(r), "timeout", null),
            w()(f()(r), "delayTimeout", null),
            w()(f()(r), "handleClick", function (t) {
              var e = r.props,
                n = e.clicked,
                i = e.onClick,
                o = e.preventDefault;
              n &&
                (r.setState({ clicked: !0 }),
                r.timeout && clearTimeout(r.timeout),
                (r.timeout = window.setTimeout(function () {
                  return r.setState({ clicked: !1 });
                }, 500))),
                o &&
                  (t.persist(),
                  t.nativeEvent &&
                    (t.nativeEvent.preventDefault(),
                    t.nativeEvent.stopImmediatePropagation())),
                i && i(t);
            }),
            (r.state = { loading: t.loading, clicked: !1 }),
            !0 === i
              ? (r.handleClick = R()(r.handleClick, o))
              : !0 === a && (r.handleClick = C()(r.handleClick, s)),
            r
          );
        }
        return (
          l()(n, [
            {
              key: "UNSAFE_componentWillReceiveProps",
              value: function (t) {
                var e = this,
                  n = this.props.loading,
                  r = t.loading;
                n && clearTimeout(this.delayTimeout),
                  "boolean" !== typeof r && r && r.delay
                    ? (this.delayTimeout = window.setTimeout(function () {
                        return e.setState({ loading: r });
                      }, r.delay))
                    : this.setState({ loading: r });
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.timeout &&
                  (clearTimeout(this.timeout), (this.timeout = null)),
                  this.delayTimeout &&
                    (clearTimeout(this.delayTimeout),
                    (this.delayTimeout = null));
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  n = e.prefixCls,
                  r = e.ghost,
                  o = e.block,
                  s = e.className,
                  c = e.children,
                  u = e.childrenClassName,
                  l = e.wrapType,
                  p = e.type,
                  f = e.htmlType,
                  h = e.icon,
                  d = e.iconProps,
                  v = e.size,
                  m = e.shape,
                  y = e.append,
                  g =
                    (e.debounce,
                    e.debounceTime,
                    e.throttle,
                    e.throttleTime,
                    e.clicked),
                  b = (e.preventDefault, e.from),
                  S = e.nodeRef,
                  _ = a()(e, N),
                  T = this.state,
                  k = T.loading,
                  R = T.clicked,
                  U = _.href ? "a" : l || "button",
                  C = "";
                switch (v) {
                  case "large":
                    C = "lg";
                    break;
                  case "small":
                    C = "sm";
                }
                var A = I()(
                    n,
                    s,
                    ((t = {}),
                    w()(t, "".concat(n, "-").concat(p), p),
                    w()(t, "".concat(n, "-").concat(C), C),
                    w()(t, "".concat(n, "-").concat(m), m),
                    w()(t, "".concat(n, "-ghost"), r),
                    w()(t, "".concat(n, "-block"), o),
                    w()(t, "".concat(n, "-clicked"), g && R),
                    t)
                  ),
                  M = k ? "loading" : h,
                  D = M ? E.a.createElement(P.a, i()({ type: M }, d)) : null,
                  j = c
                    ? "games" === b
                      ? E.a.createElement(
                          "h2",
                          { className: I()(u, "n-as-fs14") },
                          c
                        )
                      : E.a.createElement("span", { className: u }, c)
                    : null;
                return E.a.createElement(
                  U,
                  i()({}, O()(_, ["loading"]), {
                    type: _.href || "button" !== l ? void 0 : f || "button",
                    className: A,
                    href: _.href ? _.href : void 0,
                    target: _.href && _.target ? _.target : void 0,
                    onClick: this.handleClick,
                    ref: S,
                  }),
                  D,
                  j,
                  y
                );
              },
            },
          ]),
          n
        );
      })(S.Component);
      w()(M, "defaultProps", {
        prefixCls: "nimo-btn",
        block: !1,
        ghost: !1,
        htmlType: "button",
        wrapType: "button",
        loading: !1,
        disabled: !1,
        size: "default",
        type: "default",
        debounce: !1,
        debounceTime: 100,
        throttle: !1,
        throttleTime: 100,
        clicked: !0,
        preventDefault: !1,
      }),
        (e.a = M);
    },
    "home.fragments.lucky-gift": function (t, e, n) {
      n("D+av"), n("7S++"), (t.exports = n("pYZ2"));
    },
    hvIL: function (t, e, n) {
      t.exports =
        n.p + "images/bottom-continue2.e441b28b4fb86e23174f31c150979fab.png";
    },
    iU4o: function (t, e, n) {
      "use strict";
      var r = n("W7YU");
      e.a = { user: new r.a() };
    },
    iUK9: function (t, e, n) {
      t.exports =
        n.p + "images/gamemachine-bottom2.f07a595f6c020b69207c0a244cbde0b3.png";
    },
    igRQ: function (t, e) {
      var n = Object.prototype.toString;
      t.exports = function (t) {
        return n.call(t);
      };
    },
    jDd3: function (t, e, n) {
      t.exports = n("4KFe")(201);
    },
    jKdo: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "d", function () {
          return p;
        }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "f", function () {
          return h;
        }),
        n.d(e, "e", function () {
          return d;
        });
      var r = n("W7YU"),
        i = n("mMZ6"),
        o = n("ZMLX"),
        a = n("ZxgU"),
        s = function () {
          (this.iUri = 0), (this.sMsg = new a.b.BinBuffer());
        };
      (s.prototype._clone = function () {
        return new o.a.DOWN_PACKET();
      }),
        (s.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (s.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (s.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iUri), t.writeBytes(1, this.sMsg);
        }),
        (s.prototype.readFrom = function (t) {
          (this.iUri = t.readInt32(0, !1, this.iUri)),
            (this.sMsg = t.readBytes(1, !1, this.sMsg));
        }),
        (o.a.DOWN_PACKET = s);
      n("uYE1");
      var c = new i.b({ prefix: "nm-socket" });
      function u(t, e) {
        var n = new r.d.BinBuffer();
        return (
          n.writeInt32(t),
          n.writeInt32(0),
          n.writeInt32(0),
          n.writeInt32(e.len),
          n.writeBytes(e),
          n.getBuffer()
        );
      }
      function l(t) {
        return new Promise(function (e, n) {
          FileReader || n(new Error("[readAsArrayBuffer]Not support"));
          try {
            var i = new FileReader();
            (i.onload = function () {
              var t = new r.d.BinBuffer(i.result);
              c.success("[readAsArrayBuffer]", t), e(t);
            }),
              i.readAsArrayBuffer(t);
          } catch (o) {
            c.error("[readAsArrayBuffer]Catch error", o), n(o);
          }
        });
      }
      var p = function (t, e, n) {
        if (e) {
          var i = h(t, e, n);
          return (
            (i = Object(r.f)(i)),
            c.success("[readInputStream]", n, i),
            Promise.resolve(i)
          );
        }
        return (
          c.warning(
            "[readInputStream]No unpacking structure is specified for ".concat(
              n
            ),
            n,
            e
          ),
          Promise.reject()
        );
      };
      function f(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = new r.d.JceOutputStream();
        e.writeTo(i);
        var o = i.getBinBuffer();
        return c.info("[packSocket]", t, e), n && !t ? o : u(t, o);
      }
      function h(t, e, n) {
        var i = new r.d.JceInputStream(t),
          o = new e();
        return o.readFrom(i), (o.funcName = n), o;
      }
      function d(t) {
        var e = (r.i || {}).user;
        (t.iIdType = 0 === e.uid ? 2 : 1),
          (t.lUserid = e.uid),
          (t.sToken = e.token),
          (t.sUDBVer = e.version),
          (t.iRegOrigin = e.regOrigin),
          (t.sUA = e.sUA),
          (t.sCountry = e.sCountry),
          (t.sRegion = e.sRegion),
          (t.sOpSeq = e.sOpSeq),
          (t.sLang = e.lang),
          e.sGuid && (t.sGuid = e.sGuid);
      }
    },
    jbCr: function (t, e, n) {
      var r = n("gjmc"),
        i = n("YaT/"),
        o = n("kgnW"),
        a = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!r(t)) return o(t);
        var e = i(t),
          n = [];
        for (var s in t)
          ("constructor" != s || (!e && a.call(t, s))) && n.push(s);
        return n;
      };
    },
    jd3G: function (t, e, n) {
      t.exports = { default: n("LlUs"), __esModule: !0 };
    },
    jmMi: function (t, e, n) {
      t.exports = n("0gZ9")();
    },
    jqZc: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return O;
      });
      var r = n("cQwn"),
        i = n.n(r),
        o = n("q4i/"),
        a = n.n(o),
        s = n("Kj+h"),
        c = n("jKdo"),
        u = n("RA07"),
        l = n("W7YU"),
        p = n("UJcg"),
        f = n("b3NQ"),
        h = n("Kw0i"),
        d = n("L7RH"),
        v = n("TqI2"),
        m = n("zoiq");
      function y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      n.d(e, "a", function () {
        return s.a;
      });
      var b = { wsServer: "ws.va.huya.com" },
        w = new m.a();
      function S(t) {
        var e = a()(t, 3),
          n = e[0],
          r = e[1],
          i = e[2];
        return (
          c.a.info("signal socket send", n, r),
          Promise.resolve({
            type: n,
            data: r,
            requestData: [d.MODULE_NIMO_UI, n, r, i],
          })
        );
      }
      function E(t) {
        var e = t.funcName,
          n = t.listener,
          r = t.data;
        return (
          c.a.info("signal received", e, r),
          n(Object(u.f)(e, Object(l.f)(r))),
          Promise.resolve()
        );
      }
      function _(t) {
        void 0 !== t && w.reportError(new f.a(t, { server: p.e.SIGNAL }));
      }
      function I(t) {
        var e = t || {},
          n = e.uri,
          r = e.data;
        h.b.emit(h.a.TAF_MESSAGE_RECEIVE, { uri: n, data: r });
      }
      var T = !1,
        O = function () {
          return (
            T ||
              ((T = !0),
              s.b.interceptors.request.unshift(S, void 0),
              s.b.interceptors.response.push(E, void 0),
              s.b.interceptors.response.push(void 0, _),
              Object(v.a)().then(function (t) {
                s.b.init(
                  g(
                    g({}, b),
                    {},
                    {
                      user: t,
                      onSocketOpen: function (t) {
                        t.onUriNotice(I);
                      },
                      onSocketClose: function (t) {
                        t.offUriNotice(I);
                      },
                    }
                  )
                );
              })),
            s.b
          );
        };
      s.b;
    },
    k4n3: function (t, e, n) {
      var r = n("4RWa"),
        i = n("2MFa"),
        o = n("9H9C"),
        a = n("VhCM"),
        s = n("loXl"),
        c = n("smBo"),
        u = n("FeFf"),
        l = n("rxEE"),
        p = n("f7Gn"),
        f = n("I1K6"),
        h = n("Gzln"),
        d = n("Q/Ce"),
        v = n("Y13O"),
        m = n("dDXP"),
        y = n("XrMN"),
        g = n("ZIlV"),
        b = n("6dHw"),
        w = n("/Coi"),
        S = n("gjmc"),
        E = n("mlmT"),
        _ = n("nB/V"),
        I = n("2xoy"),
        T = "[object Arguments]",
        O = "[object Function]",
        k = "[object Object]",
        R = {};
      (R[T] =
        R["[object Array]"] =
        R["[object ArrayBuffer]"] =
        R["[object DataView]"] =
        R["[object Boolean]"] =
        R["[object Date]"] =
        R["[object Float32Array]"] =
        R["[object Float64Array]"] =
        R["[object Int8Array]"] =
        R["[object Int16Array]"] =
        R["[object Int32Array]"] =
        R["[object Map]"] =
        R["[object Number]"] =
        R[k] =
        R["[object RegExp]"] =
        R["[object Set]"] =
        R["[object String]"] =
        R["[object Symbol]"] =
        R["[object Uint8Array]"] =
        R["[object Uint8ClampedArray]"] =
        R["[object Uint16Array]"] =
        R["[object Uint32Array]"] =
          !0),
        (R["[object Error]"] = R[O] = R["[object WeakMap]"] = !1),
        (t.exports = function t(e, n, U, C, P, N) {
          var A,
            M = 1 & n,
            D = 2 & n,
            j = 4 & n;
          if ((U && (A = P ? U(e, C, P, N) : U(e)), void 0 !== A)) return A;
          if (!S(e)) return e;
          var L = g(e);
          if (L) {
            if (((A = v(e)), !M)) return u(e, A);
          } else {
            var B = d(e),
              x = B == O || "[object GeneratorFunction]" == B;
            if (b(e)) return c(e, M);
            if (B == k || B == T || (x && !P)) {
              if (((A = D || x ? {} : y(e)), !M))
                return D ? p(e, s(A, e)) : l(e, a(A, e));
            } else {
              if (!R[B]) return P ? e : {};
              A = m(e, B, M);
            }
          }
          N || (N = new r());
          var W = N.get(e);
          if (W) return W;
          N.set(e, A),
            E(e)
              ? e.forEach(function (r) {
                  A.add(t(r, n, U, r, e, N));
                })
              : w(e) &&
                e.forEach(function (r, i) {
                  A.set(i, t(r, n, U, i, e, N));
                });
          var G = L ? void 0 : (j ? (D ? h : f) : D ? I : _)(e);
          return (
            i(G || e, function (r, i) {
              G && (r = e[(i = r)]), o(A, i, t(r, n, U, i, e, N));
            }),
            A
          );
        });
    },
    k9ao: function (t, e, n) {
      var r = n("+o4R"),
        i = n("tC9N"),
        o = n("ExQa"),
        a = n("YYjS"),
        s = Object.getOwnPropertySymbols
          ? function (t) {
              for (var e = []; t; ) r(e, o(t)), (t = i(t));
              return e;
            }
          : a;
      t.exports = s;
    },
    kEzd: function (t, e, n) {
      t.exports = n("4KFe")(212);
    },
    kPK6: function (t, e, n) {
      var r;
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var n = {}.hasOwnProperty;
        function i() {
          for (var t = [], e = 0; e < arguments.length; e++) {
            var r = arguments[e];
            if (r) {
              var o = typeof r;
              if ("string" === o || "number" === o) t.push(r);
              else if (Array.isArray(r) && r.length) {
                var a = i.apply(null, r);
                a && t.push(a);
              } else if ("object" === o)
                for (var s in r) n.call(r, s) && r[s] && t.push(s);
            }
          }
          return t.join(" ");
        }
        t.exports
          ? ((i.default = i), (t.exports = i))
          : void 0 ===
              (r = function () {
                return i;
              }.apply(e, [])) || (t.exports = r);
      })();
    },
    kVJS: function (t, e, n) {
      var r = n("ecr1");
      t.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    kX2Q: function (t, e, n) {
      t.exports = { default: n("kEzd"), __esModule: !0 };
    },
    ka7B: function (t, e) {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    kgnW: function (t, e) {
      t.exports = function (t) {
        var e = [];
        if (null != t) for (var n in Object(t)) e.push(n);
        return e;
      };
    },
    knjD: function (t, e, n) {
      var r = n("XVtd"),
        i = n("qFNm"),
        o = n("ZIlV"),
        a = n("l1vn"),
        s = r ? r.prototype : void 0,
        c = s ? s.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return c ? c.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -Infinity ? "-0" : n;
      };
    },
    "l/4b": function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          {
            EPROP_PLAY_NONE: 1,
            EPROP_PLAY_BOX: 2,
            EPROP_PLAY_LUCKY: 3,
            EPROP_PLAY_CHIP: 4,
            EPROP_PLAY_ROYAL: 5,
            EPROP_PLAY_FORTUNE: 6,
            EPROP_PLAY_STICKER: 7,
            EPROP_PLAY_HUDONGBOX: 8,
            EPROP_PLAY_WEEEKSTAR: 9,
            EPROP_PLAY_FAMILY: 10,
            EPROP_PLAY_SUPER_TREASURE: 11,
            EPROP_PLAY_VOICE: 12,
            EPROP_PLAY_ACTIVITY: 13,
            EPROP_PLAY_LOVE: 14,
            EPROP_PLAY_LUCKYBAG: 15,
            EPROP_PLAY_BLINDBOX: 16,
          });
      r.a.EPropPlayType = i;
    },
    l1vn: function (t, e, n) {
      var r = n("pfDB"),
        i = n("dZ9T");
      t.exports = function (t) {
        return "symbol" == typeof t || (i(t) && "[object Symbol]" == r(t));
      };
    },
    lTfp: function (t, e, n) {
      t.exports = n("4KFe")(194);
    },
    lWxV: function (t, e, n) {
      var r = n("+o4R"),
        i = n("Savh");
      t.exports = function t(e, n, o, a, s) {
        var c = -1,
          u = e.length;
        for (o || (o = i), s || (s = []); ++c < u; ) {
          var l = e[c];
          n > 0 && o(l)
            ? n > 1
              ? t(l, n - 1, o, a, s)
              : r(s, l)
            : a || (s[s.length] = l);
        }
        return s;
      };
    },
    leMB: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          function () {
            (this.lUid = 0),
              (this.sGuid = ""),
              (this.sToken = ""),
              (this.sUA = ""),
              (this.sCookie = ""),
              (this.sLang = ""),
              (this.sUDBVer = ""),
              (this.iRegOrigin = 0),
              (this.sCountry = ""),
              (this.sRegion = ""),
              (this.sOpSeq = ""),
              (this.iNetType = 127),
              (this.lDevInstallTime = 0);
          });
      (i.prototype._clone = function () {
        return new r.a.UserId();
      }),
        (i.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (i.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (i.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lUid),
            t.writeString(1, this.sGuid),
            t.writeString(2, this.sToken),
            t.writeString(3, this.sUA),
            t.writeString(4, this.sCookie),
            t.writeString(5, this.sLang),
            t.writeString(6, this.sUDBVer),
            t.writeInt32(7, this.iRegOrigin),
            t.writeString(8, this.sCountry),
            t.writeString(9, this.sRegion),
            t.writeString(10, this.sOpSeq),
            t.writeInt32(11, this.iNetType),
            t.writeInt64(12, this.lDevInstallTime);
        }),
        (i.prototype.readFrom = function (t) {
          (this.lUid = t.readInt64(0, !1, this.lUid)),
            (this.sGuid = t.readString(1, !1, this.sGuid)),
            (this.sToken = t.readString(2, !1, this.sToken)),
            (this.sUA = t.readString(3, !1, this.sUA)),
            (this.sCookie = t.readString(4, !1, this.sCookie)),
            (this.sLang = t.readString(5, !1, this.sLang)),
            (this.sUDBVer = t.readString(6, !1, this.sUDBVer)),
            (this.iRegOrigin = t.readInt32(7, !1, this.iRegOrigin)),
            (this.sCountry = t.readString(8, !1, this.sCountry)),
            (this.sRegion = t.readString(9, !1, this.sRegion)),
            (this.sOpSeq = t.readString(10, !1, this.sOpSeq)),
            (this.iNetType = t.readInt32(11, !1, this.iNetType)),
            (this.lDevInstallTime = t.readInt64(12, !1, this.lDevInstallTime));
        }),
        (r.a.UserId = i);
    },
    lhie: function (t, e, n) {
      "use strict";
      var r = n("DzzQ");
      e.a = r.a;
    },
    loXl: function (t, e, n) {
      var r = n("81u2"),
        i = n("2xoy");
      t.exports = function (t, e) {
        return t && r(e, i(e), t);
      };
    },
    mE5N: function (t, e, n) {
      var r = n("9Cfe");
      t.exports = function (t) {
        return r(this.__data__, t) > -1;
      };
    },
    mMBF: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e, n, o) {
          var a = i.default.unstable_batchedUpdates
            ? function (t) {
                i.default.unstable_batchedUpdates(n, t);
              }
            : n;
          return (0, r.default)(t, e, a, o);
        });
      var r = o(n("TXqB")),
        i = o(n("6Zxk"));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
    },
    mSMB: function (t, e, n) {
      t.exports = (function () {
        "use strict";
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(e);
        }
        function e(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function r(t, e, r) {
          return e && n(t.prototype, e), r && n(t, r), t;
        }
        function i(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? i(n, !0).forEach(function (e) {
                  var r, i, o;
                  (r = t),
                    (o = n[(i = e)]),
                    i in r
                      ? Object.defineProperty(r, i, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[i] = o);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : i(n).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function a(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++)
                  n[e] = t[e];
                return n;
              }
            })(t) ||
            (function (t) {
              if (
                Symbol.iterator in Object(t) ||
                "[object Arguments]" === Object.prototype.toString.call(t)
              )
                return Array.from(t);
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        }
        var s = "1.1.17",
          c = {
            ISDEBUG: !1,
            appSrc: "",
            userId: null,
            uid: 0,
            guid: 0,
            ua: "",
            config: null,
            iRequestId: 0,
            dims: {},
          };
        (c.ver = s),
          (c.report = null),
          (c.enableTrace = 0),
          (c.setEnableTrace = function () {
            if (c.config.hasOwnProperty("enableTrace"))
              c.enableTrace = c.config.enableTrace;
            else {
              var t = Math.random() < 0.1;
              c.enableTrace = t ? 1 : 0;
            }
          }),
          (c.getTraceId = function () {
            return "xxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
              var e = (16 * Math.random()) | 0;
              return ("x" == t ? e : (3 & e) | 8).toString(16);
            });
          }),
          (c.reportAPI = null);
        var u = {
          Wup: function () {
            (this.iVersion = 3),
              (this.cPacketType = 0),
              (this.iMessageType = 0),
              (this.iRequestId = 0),
              (this.sServantName = ""),
              (this.sFuncName = ""),
              (this.sBuffer = new u.BinBuffer()),
              (this.iTimeout = 0),
              (this.context = new u.Map(new u.STRING(), new u.STRING())),
              (this.status = new u.Map(new u.STRING(), new u.STRING())),
              (this.data = new u.Map(
                new u.STRING(),
                new u.Map(new u.STRING(), new u.BinBuffer())
              )),
              (this.newdata = new u.Map(new u.STRING(), new u.BinBuffer()));
          },
        };
        (u.Wup.prototype.setVersion = function (t) {
          this.iVersion = t;
        }),
          (u.Wup.prototype.getVersion = function (t) {
            return this.iVersion;
          }),
          (u.Wup.prototype.setServant = function (t) {
            this.sServantName = t;
          }),
          (u.Wup.prototype.setFunc = function (t) {
            this.sFuncName = t;
          }),
          (u.Wup.prototype.setRequestId = function (t) {
            this.iRequestId = t || ++this.iRequestId;
          }),
          (u.Wup.prototype.getRequestId = function () {
            return this.iRequestId;
          }),
          (u.Wup.prototype.setTimeOut = function (t) {
            this.iTimeout = t;
          }),
          (u.Wup.prototype.getTimeOut = function () {
            return this.iTimeout;
          }),
          (u.Wup.prototype.writeTo = function () {
            var t = new u.JceOutputStream();
            return (
              t.writeInt16(1, this.iVersion),
              t.writeInt8(2, this.cPacketType),
              t.writeInt32(3, this.iMessageType),
              t.writeInt32(4, this.iRequestId),
              t.writeString(5, this.sServantName),
              t.writeString(6, this.sFuncName),
              t.writeBytes(7, this.sBuffer),
              t.writeInt32(8, this.iTimeout),
              t.writeMap(9, this.context),
              t.writeMap(10, this.status),
              new u.BinBuffer(t.getBuffer())
            );
          }),
          (u.Wup.prototype.encode = function () {
            var t = new u.JceOutputStream();
            3 == this.iVersion
              ? t.writeMap(0, this.newdata)
              : t.writeMap(0, this.data),
              (this.sBuffer = t.getBinBuffer());
            var e = new u.BinBuffer();
            e = this.writeTo();
            var n = new u.BinBuffer();
            return n.writeInt32(4 + e.len), n.writeBytes(e), n;
          }),
          (u.Wup.prototype.writeBoolean = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeBoolean(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t),
                i = u.TypeHelp.BOOLEAN;
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new u.BinBuffer(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeInt8 = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeInt8(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t),
                i = u.TypeHelp.CHAR;
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new u.BinBuffer(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeInt16 = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeInt16(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t),
                i = u.TypeHelp.SHORT;
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeInt32 = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeInt32(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t),
                i = u.TypeHelp.INT32;
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeInt64 = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeInt64(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t),
                i = u.TypeHelp.INT64;
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeFloat = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeFloat(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t),
                i = u.TypeHelp.FLOAT;
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeDouble = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeDouble(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t),
                i = u.TypeHelp.DOUBLE;
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeString = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeString(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t),
                i = u.TypeHelp.STRING;
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeVector = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeVector(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBinBuffer()));
            else {
              var r = this.data.get(t),
                i = e._className();
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeStruct = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeStruct(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t);
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(" ", new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeBytes = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeBytes(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t);
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put("vec", new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.writeMap = function (t, e) {
            var n = new u.JceOutputStream();
            if ((n.writeMap(0, e), 3 == this.iVersion))
              this.newdata.put(t, new u.BinBuffer(n.getBuffer()));
            else {
              var r = this.data.get(t),
                i = u.Util.getClassType(e);
              null == r && (r = new u.Map(u.STRING, u.STRING)),
                r.put(i, new Uint8Array(n.getBuffer())),
                this.data.put(t, r);
            }
          }),
          (u.Wup.prototype.readFrom = function (t) {
            (this.iVersion = t.readInt16(1, !0)),
              (this.cPacketType = t.readInt8(2, !0)),
              (this.iMessageType = t.readInt32(3, !0)),
              (this.iRequestId = t.readInt32(4, !0)),
              (this.sServantName = t.readString(5, !0)),
              (this.sFuncName = t.readString(6, !0)),
              localStorage.__wup &&
                console.info(
                  "%c@@@ " + this.sServantName + "." + this.sFuncName,
                  "color:white;background:black;",
                  this
                ),
              (this.sBuffer = t.readBytes(7, !0)),
              (this.iTimeout = t.readInt32(8, !0)),
              (this.context = t.readMap(
                9,
                !0,
                new u.Map(new u.STRING(), new u.STRING())
              )),
              (this.status = t.readMap(
                10,
                !0,
                new u.Map(new u.STRING(), new u.STRING())
              ));
          }),
          (u.Wup.prototype.decode = function (t) {
            var e = new u.JceInputStream(t);
            if (e.buf.vew.getInt32(e.buf.position) < 4)
              throw Error("packet length too short");
            (e.buf.position += 4),
              this.readFrom(e),
              (e = new u.JceInputStream(this.sBuffer.getBuffer())),
              3 == this.iVersion
                ? (this.newdata.clear(), e.readMap(0, !0, this.newdata))
                : (this.data.clear(), e.readMap(0, !0, this.data));
          }),
          (u.Wup.prototype.readBoolean = function (t) {
            var e, n;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              n = new u.JceInputStream(e.buffer).readBoolean(0, !0, n);
            } else {
              if (null == (e = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var r = u.TypeHelp.BOOLEAN,
                i = e.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              n = new u.JceInputStream(i).readBoolean(0, !0, n);
            }
            return n;
          }),
          (u.Wup.prototype.readInt8 = function (t) {
            var e, n;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              n = new u.JceInputStream(e.buffer).readInt8(0, !0, n);
            } else {
              if (null == (e = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var r = u.TypeHelp.CHAR,
                i = e.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              n = new u.JceInputStream(i).readInt8(0, !0, n);
            }
            return n;
          }),
          (u.Wup.prototype.readInt16 = function (t) {
            var e, n;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              n = (o = new u.JceInputStream(e.buffer)).readInt16(0, !0, n);
            } else {
              if (null == (e = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var r = u.TypeHelp.SHORT,
                i = e.get(r),
                o = new u.JceInputStream(i);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              n = o.readInt16(0, !0, n);
            }
            return n;
          }),
          (u.Wup.prototype.readInt32 = function (t) {
            var e, n;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              n = new u.JceInputStream(e.buffer).readInt32(0, !0, n);
            } else {
              if (null == (e = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var r = u.TypeHelp.INT32,
                i = e.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              n = new u.JceInputStream(i).readInt32(0, !0, n);
            }
            return n;
          }),
          (u.Wup.prototype.readInt64 = function (t) {
            var e, n;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              n = new u.JceInputStream(e.buffer).readInt64(0, !0, n);
            } else {
              if (null == (e = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var r = u.TypeHelp.INT64,
                i = e.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              n = new u.JceInputStream(i).readInt64(0, !0, n);
            }
            return n;
          }),
          (u.Wup.prototype.readFloat = function (t) {
            var e, n;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              n = new u.JceInputStream(e.buffer).readFloat(0, !0, n);
            } else {
              if (null == (e = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var r = u.TypeHelp.FLOAT,
                i = e.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              n = new u.JceInputStream(i).readFloat(0, !0, n);
            }
            return n;
          }),
          (u.Wup.prototype.readDouble = function (t) {
            var e;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var n = new u.JceInputStream(e.buffer);
              def = n.readDouble(0, !0, def);
            } else {
              if (null == (e = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var r = u.TypeHelp.DOUBLE,
                i = e.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              (n = new u.JceInputStream(i)), (def = n.readDouble(0, !0, def));
            }
            return def;
          }),
          (u.Wup.prototype.readVector = function (t, e, n) {
            var r;
            if (3 == this.iVersion) {
              if (null == (r = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              e = new u.JceInputStream(r.buffer).readVector(0, !0, e);
            } else {
              if (null == (r = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var i = r.get(n);
              if (null == i) throw Error("UniAttribute not found type:" + n);
              e = new u.JceInputStream(i).readVector(0, !0, e);
            }
            return e;
          }),
          (u.Wup.prototype.readStruct = function (t, e, n) {
            var r;
            if (3 == this.iVersion) {
              if (null == (r = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              e = new u.JceInputStream(r.buffer).readStruct(0, !0, e);
            } else {
              if (null == (r = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var i = r.get(n);
              if (null == i) throw Error("UniAttribute not found type:" + n);
              e = new u.JceInputStream(i).readStruct(0, !0, e);
            }
            return e;
          }),
          (u.Wup.prototype.readMap = function (t, e, n) {
            var r;
            if (3 == this.iVersion) {
              if (null == (r = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              e = new u.JceInputStream(r.buffer).readMap(0, !0, e);
            } else {
              if (null == (r = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var i = r.get(n);
              if (null == i) throw Error("UniAttribute not found type:" + n);
              e = new u.JceInputStream(i).readMap(0, !0, e);
            }
            return e;
          }),
          (u.Wup.prototype.readBytes = function (t, e, n) {
            var r;
            if (3 == this.iVersion) {
              if (null == (r = this.newdata.get(t)))
                throw Error("UniAttribute not found key:" + t);
              e = new u.JceInputStream(r.buffer).readBytes(0, !0, e);
            } else {
              if (null == (r = this.data.get(t)))
                throw Error("UniAttribute not found key:" + t);
              var i = r.get(n);
              if (null == i) throw Error("UniAttribute not found type:" + n);
              e = new u.JceInputStream(i).readBytes(0, !0, e);
            }
            return e;
          }),
          (u.DataHelp = {
            EN_INT8: 0,
            EN_INT16: 1,
            EN_INT32: 2,
            EN_INT64: 3,
            EN_FLOAT: 4,
            EN_DOUBLE: 5,
            EN_STRING1: 6,
            EN_STRING4: 7,
            EN_MAP: 8,
            EN_LIST: 9,
            EN_STRUCTBEGIN: 10,
            EN_STRUCTEND: 11,
            EN_ZERO: 12,
            EN_SIMPLELIST: 13,
          }),
          (u.TypeHelp = {
            BOOLEAN: "bool",
            CHAR: "char",
            SHORT: "short",
            INT32: "int32",
            INT64: "int64",
            FLOAT: "float",
            DOUBLE: "double",
            STRING: "string",
            VECTOR: "list<$t>",
            MAP: "map<$k, $v>",
          }),
          (u.BinBuffer = function (t) {
            (this.buf = null),
              (this.vew = null),
              (this.len = 0),
              (this.position = 0),
              null != t &&
                null != t &&
                t instanceof u.BinBuffer &&
                ((this.buf = t.buf),
                (this.vew = new DataView(this.buf)),
                (this.len = t.length),
                (this.position = t.position)),
              null != t &&
                null != t &&
                t instanceof ArrayBuffer &&
                ((this.buf = t),
                (this.vew = new DataView(this.buf)),
                (this.len = this.vew.byteLength),
                (this.position = 0)),
              this.__defineGetter__("length", function () {
                return this.len;
              }),
              this.__defineGetter__("buffer", function () {
                return this.buf;
              });
          }),
          (u.BinBuffer.prototype._write = function (t, e, n) {
            return t.writeBytes(e, n);
          }),
          (u.BinBuffer.prototype._read = function (t, e, n) {
            return t.readBytes(e, !0, n);
          }),
          (u.BinBuffer.prototype._clone = function () {
            return new u.BinBuffer();
          }),
          (u.BinBuffer.prototype.allocate = function (t) {
            if (
              ((t = this.position + t),
              !(null != this.buf && this.buf.length > t))
            ) {
              var e = new ArrayBuffer(Math.max(256, 2 * t));
              null != this.buf &&
                (new Uint8Array(e).set(new Uint8Array(this.buf)),
                (this.buf = void 0)),
                (this.buf = e),
                (this.vew = void 0),
                (this.vew = new DataView(this.buf));
            }
          }),
          (u.BinBuffer.prototype.getBuffer = function () {
            var t = new ArrayBuffer(this.len);
            return (
              new Uint8Array(t).set(new Uint8Array(this.buf, 0, this.len)), t
            );
          }),
          (u.BinBuffer.prototype.memset = function (t, e, n) {
            this.allocate(n),
              new Uint8Array(this.buf).set(
                new Uint8Array(t, e, n),
                this.position
              );
          }),
          (u.BinBuffer.prototype.writeInt8 = function (t) {
            this.allocate(1),
              this.vew.setInt8(this.position, t),
              (this.position += 1),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeUInt8 = function (t) {
            this.allocate(1),
              this.vew.setUint8(this.position++, t),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeInt16 = function (t) {
            this.allocate(2),
              this.vew.setInt16(this.position, t),
              (this.position += 2),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeUInt16 = function (t) {
            this.allocate(2),
              this.vew.setUint16(this.position, t),
              (this.position += 2),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeInt32 = function (t) {
            this.allocate(4),
              this.vew.setInt32(this.position, t),
              (this.position += 4),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeUInt32 = function (t) {
            this.allocate(4),
              this.vew.setUint32(this.position, t),
              (this.position += 4),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeInt64 = function (t) {
            if ("string" == typeof t) {
              this.allocate(8);
              for (
                var e = 4294967296,
                  n = 0,
                  r = 0,
                  i = (t = t.toLowerCase()).length,
                  o = 0;
                o < i;
                o++
              ) {
                var a = t.charCodeAt(o) - 48;
                9 < a && (a -= 39),
                  (n = 10 * n + a),
                  (r = 10 * r + Math.floor(n / e)),
                  (n %= e);
              }
              return (
                this.vew.setUint32(this.position, r),
                this.vew.setUint32(this.position + 4, n),
                (this.position += 8),
                void (this.len = this.position)
              );
            }
            this.allocate(8),
              this.vew.setUint32(this.position, parseInt(t / 4294967296)),
              this.vew.setUint32(this.position + 4, t % 4294967296),
              (this.position += 8),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeFloat = function (t) {
            this.allocate(4),
              this.vew.setFloat32(this.position, t),
              (this.position += 4),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeDouble = function (t) {
            this.allocate(8),
              this.vew.setFloat64(this.position, t),
              (this.position += 8),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeString = function (t) {
            for (var e = [], n = 0; n < t.length; n++)
              e.push(255 & t.charCodeAt(n));
            this.allocate(e.length),
              new Uint8Array(this.buf).set(new Uint8Array(e), this.position),
              (this.position += e.length),
              (this.len = this.position);
          }),
          (u.BinBuffer.prototype.writeBytes = function (t) {
            0 != t.length &&
              null != t.buf &&
              (this.allocate(t.length),
              new Uint8Array(this.buf).set(
                new Uint8Array(t.buf, 0, t.length),
                this.position
              ),
              (this.position += t.length),
              (this.len = this.position));
          }),
          (u.BinBuffer.prototype.readInt8 = function () {
            return this.vew.getInt8(this.position++);
          }),
          (u.BinBuffer.prototype.readInt16 = function () {
            return (this.position += 2), this.vew.getInt16(this.position - 2);
          }),
          (u.BinBuffer.prototype.readInt32 = function () {
            return (this.position += 4), this.vew.getInt32(this.position - 4);
          }),
          (u.BinBuffer.prototype.readUInt8 = function () {
            return (this.position += 1), this.vew.getUint8(this.position - 1);
          }),
          (u.BinBuffer.prototype.readUInt16 = function () {
            return (this.position += 2), this.vew.getUint16(this.position - 2);
          }),
          (u.BinBuffer.prototype.readUInt32 = function () {
            return (this.position += 4), this.vew.getUint32(this.position - 4);
          });
        var l = Math.pow(2, 53);
        function p(t) {
          return "function" == typeof t ? new t()._className() : t._className();
        }
        (u.BinBuffer.prototype.readInt64 = function () {
          var t = this.vew.getUint32(this.position),
            e = this.vew.getUint32(this.position + 4);
          this.position += 8;
          var n = 4294967296 * t + e;
          if (n < l) return n;
          for (var r, i, o, a = "", s = Math.pow(2, 32); 0 != t || 0 != e; )
            (a = (i = (o = (r = t % 10) * s + e) % 10).toString(10) + a),
              (t = (t - r) / 10),
              (e = (o - i) / 10);
          return a;
        }),
          (u.BinBuffer.prototype.readFloat = function () {
            var t = this.vew.getFloat32(this.position);
            return (this.position += 4), t;
          }),
          (u.BinBuffer.prototype.readDouble = function () {
            var t = this.vew.getFloat64(this.position);
            return (this.position += 8), t;
          }),
          (u.BinBuffer.prototype.readString = function (t) {
            for (var e = [], n = 0; n < t; n++)
              e.push(String.fromCharCode(this.vew.getUint8(this.position++)));
            var r = e.join("");
            try {
              r = decodeURIComponent(escape(r));
            } catch (t) {}
            return r;
          }),
          (u.BinBuffer.prototype.readBytes = function (t) {
            var e = new u.BinBuffer();
            return (
              e.allocate(t),
              e.memset(this.buf, this.position, t),
              (e.position = 0),
              (e.len = t),
              (this.position = this.position + t),
              e
            );
          }),
          (u.JceOutputStream = function () {
            (this.buf = new u.BinBuffer()),
              (this.getBinBuffer = function () {
                return this.buf;
              }),
              (this.getBuffer = function () {
                return this.buf.getBuffer();
              });
          }),
          (u.JceOutputStream.prototype.writeTo = function (t, e) {
            t < 15
              ? this.buf.writeUInt8(((t << 4) & 240) | e)
              : this.buf.writeUInt16(((240 | e) << 8) | t);
          }),
          (u.JceOutputStream.prototype.writeBoolean = function (t, e) {
            this.writeInt8(t, 1 == e ? 1 : 0);
          }),
          (u.JceOutputStream.prototype.writeInt8 = function (t, e) {
            0 == e
              ? this.writeTo(t, u.DataHelp.EN_ZERO)
              : (this.writeTo(t, u.DataHelp.EN_INT8), this.buf.writeInt8(e));
          }),
          (u.JceOutputStream.prototype.writeInt16 = function (t, e) {
            -128 <= e && e <= 127
              ? this.writeInt8(t, e)
              : (this.writeTo(t, u.DataHelp.EN_INT16), this.buf.writeInt16(e));
          }),
          (u.JceOutputStream.prototype.writeInt32 = function (t, e) {
            -32768 <= e && e <= 32767
              ? this.writeInt16(t, e)
              : (this.writeTo(t, u.DataHelp.EN_INT32), this.buf.writeInt32(e));
          }),
          (u.JceOutputStream.prototype.writeInt64 = function (t, e) {
            -2147483648 <= e && e <= 2147483647
              ? this.writeInt32(t, e)
              : (this.writeTo(t, u.DataHelp.EN_INT64), this.buf.writeInt64(e));
          }),
          (u.JceOutputStream.prototype.writeUInt8 = function (t, e) {
            this.writeInt16(t, e);
          }),
          (u.JceOutputStream.prototype.writeUInt16 = function (t, e) {
            this.writeInt32(t, e);
          }),
          (u.JceOutputStream.prototype.writeUInt32 = function (t, e) {
            this.writeInt64(t, e);
          }),
          (u.JceOutputStream.prototype.writeFloat = function (t, e) {
            0 == e
              ? this.writeTo(t, u.DataHelp.EN_ZERO)
              : (this.writeTo(t, u.DataHelp.EN_FLOAT), this.buf.writeFloat(e));
          }),
          (u.JceOutputStream.prototype.writeDouble = function (t, e) {
            0 == e
              ? this.writeTo(t, u.DataHelp.EN_ZERO)
              : (this.writeTo(t, u.DataHelp.EN_DOUBLE),
                this.buf.writeDouble(e));
          }),
          (u.JceOutputStream.prototype.writeStruct = function (t, e) {
            if (null == e.writeTo) throw Error("not defined writeTo Function");
            this.writeTo(t, u.DataHelp.EN_STRUCTBEGIN),
              e.writeTo(this),
              this.writeTo(0, u.DataHelp.EN_STRUCTEND);
          }),
          (u.JceOutputStream.prototype.writeString = function (t, e) {
            var n = e;
            try {
              n = unescape(encodeURIComponent(n));
            } catch (t) {}
            255 < n.length
              ? (this.writeTo(t, u.DataHelp.EN_STRING4),
                this.buf.writeUInt32(n.length))
              : (this.writeTo(t, u.DataHelp.EN_STRING1),
                this.buf.writeUInt8(n.length)),
              this.buf.writeString(n);
          }),
          (u.JceOutputStream.prototype.writeBytes = function (t, e) {
            this.writeTo(t, u.DataHelp.EN_SIMPLELIST),
              this.writeTo(0, u.DataHelp.EN_INT8),
              this.writeInt32(0, e.length),
              this.buf.writeBytes(e);
          }),
          (u.JceOutputStream.prototype.writeVector = function (t, e) {
            var n = e.value.length;
            this.writeTo(t, u.DataHelp.EN_LIST), this.writeInt32(0, n);
            for (var r = 0; r < n; r++)
              ("function" == typeof e.proto ? new e.proto() : e.proto)._write(
                this,
                0,
                e.value[r]
              );
          }),
          (u.JceOutputStream.prototype.writeMap = function (t, e) {
            for (var n in (this.writeTo(t, u.DataHelp.EN_MAP),
            this.writeInt32(0, e.size()),
            e.value)) {
              var r = "function" == typeof e.kproto ? new e.kproto() : e.kproto,
                i = "function" == typeof e.vproto ? new e.vproto() : e.vproto;
              r._write(this, 0, n), i._write(this, 1, e.value[n]);
            }
          }),
          (u.JceInputStream = function (t) {
            this.buf = new u.BinBuffer(t);
          }),
          (u.JceInputStream.prototype.readFrom = function () {
            var t = this.buf.readUInt8(),
              e = (240 & t) >> 4,
              n = 15 & t;
            return 15 <= e && (e = this.buf.readUInt8()), { tag: e, type: n };
          }),
          (u.JceInputStream.prototype.peekFrom = function () {
            var t = this.buf.position,
              e = this.readFrom();
            return (
              (this.buf.position = t),
              { tag: e.tag, type: e.type, size: 15 <= e.tag ? 2 : 1 }
            );
          }),
          (u.JceInputStream.prototype.skipField = function (t) {
            switch (t) {
              case u.DataHelp.EN_INT8:
                this.buf.position += 1;
                break;
              case u.DataHelp.EN_INT16:
                this.buf.position += 2;
                break;
              case u.DataHelp.EN_INT32:
                this.buf.position += 4;
                break;
              case u.DataHelp.EN_INT64:
                this.buf.position += 8;
                break;
              case u.DataHelp.EN_STRING1:
                var e = this.buf.readUInt8();
                this.buf.position += e;
                break;
              case u.DataHelp.EN_STRING4:
                var n = this.buf.readInt32();
                this.buf.position += n;
                break;
              case u.DataHelp.EN_STRUCTBEGIN:
                this.skipToStructEnd();
                break;
              case u.DataHelp.EN_STRUCTEND:
              case u.DataHelp.EN_ZERO:
                break;
              case u.DataHelp.EN_MAP:
                for (var r = this.readInt32(0, !0), i = 0; i < 2 * r; ++i) {
                  var o = this.readFrom();
                  this.skipField(o.type);
                }
                break;
              case u.DataHelp.EN_SIMPLELIST:
                if ((o = this.readFrom()).type != u.DataHelp.EN_INT8)
                  throw Error(
                    "skipField with invalid type, type value: " +
                      t +
                      "," +
                      o.type
                  );
                (e = this.readInt32(0, !0)), (this.buf.position += e);
                break;
              case u.DataHelp.EN_LIST:
                for (r = this.readInt32(0, !0), i = 0; i < r; ++i)
                  (o = this.readFrom()), this.skipField(o.type);
                break;
              case u.DataHelp.EN_FLOAT:
                this.buf.position += 4;
                break;
              case u.DataHelp.EN_DOUBLE:
                this.buf.position += 8;
                break;
              default:
                throw new Error(
                  "skipField with invalid type, type value: " + t
                );
            }
          }),
          (u.JceInputStream.prototype.skipToStructEnd = function () {
            for (;;) {
              var t = this.readFrom();
              if ((this.skipField(t.type), t.type == u.DataHelp.EN_STRUCTEND))
                return;
            }
          }),
          (u.JceInputStream.prototype.skipToTag = function (t, e) {
            for (; this.buf.position < this.buf.length; ) {
              var n = this.peekFrom();
              if (t <= n.tag || n.type == u.DataHelp.EN_STRUCTEND)
                return n.type != u.DataHelp.EN_STRUCTEND && t == n.tag;
              (this.buf.position += n.size), this.skipField(n.type);
            }
            if (e) throw Error("require field not exist, tag:" + t);
            return !1;
          }),
          (u.JceInputStream.prototype.readBoolean = function (t, e, n) {
            return 1 == this.readInt8(t, e, n);
          }),
          (u.JceInputStream.prototype.readInt8 = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            var r = this.readFrom();
            switch (r.type) {
              case u.DataHelp.EN_ZERO:
                return 0;
              case u.DataHelp.EN_INT8:
                return this.buf.readInt8();
            }
            throw Error(
              "read int8 type mismatch, tag:" + t + ", get type:" + r.type
            );
          }),
          (u.JceInputStream.prototype.readInt16 = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            var r = this.readFrom();
            switch (r.type) {
              case u.DataHelp.EN_ZERO:
                return 0;
              case u.DataHelp.EN_INT8:
                return this.buf.readInt8();
              case u.DataHelp.EN_INT16:
                return this.buf.readInt16();
            }
            throw Error(
              "read int8 type mismatch, tag:" + t + ", get type:" + r.type
            );
          }),
          (u.JceInputStream.prototype.readInt32 = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            var r = this.readFrom();
            switch (r.type) {
              case u.DataHelp.EN_ZERO:
                return 0;
              case u.DataHelp.EN_INT8:
                return this.buf.readInt8();
              case u.DataHelp.EN_INT16:
                return this.buf.readInt16();
              case u.DataHelp.EN_INT32:
                return this.buf.readInt32();
            }
            throw Error(
              "read int8 type mismatch, tag:" + t + ", get type:" + r.type
            );
          }),
          (u.JceInputStream.prototype.readInt64 = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            switch (this.readFrom().type) {
              case u.DataHelp.EN_ZERO:
                return 0;
              case u.DataHelp.EN_INT8:
                return this.buf.readInt8();
              case u.DataHelp.EN_INT16:
                return this.buf.readInt16();
              case u.DataHelp.EN_INT32:
                return this.buf.readInt32();
              case u.DataHelp.EN_INT64:
                return this.buf.readInt64();
            }
            throw Error(
              "read int64 type mismatch, tag:" + t + ", get type:" + h.type
            );
          }),
          (u.JceInputStream.prototype.readFloat = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            switch (this.readFrom().type) {
              case u.DataHelp.EN_ZERO:
                return 0;
              case u.DataHelp.EN_FLOAT:
                return this.buf.readFloat();
            }
            throw Error(
              "read float type mismatch, tag:" + t + ", get type:" + h.type
            );
          }),
          (u.JceInputStream.prototype.readDouble = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            switch (this.readFrom().type) {
              case u.DataHelp.EN_ZERO:
                return 0;
              case u.DataHelp.EN_DOUBLE:
                return this.buf.readDouble();
            }
            throw Error(
              "read double type mismatch, tag:" + t + ", get type:" + h.type
            );
          }),
          (u.JceInputStream.prototype.readUInt8 = function (t, e, n) {
            return this.readInt16(t, e, n);
          }),
          (u.JceInputStream.prototype.readUInt16 = function (t, e, n) {
            return this.readInt32(t, e, n);
          }),
          (u.JceInputStream.prototype.readUInt32 = function (t, e, n) {
            return this.readInt64(t, e, n);
          }),
          (u.JceInputStream.prototype.readStruct = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            var r = this.readFrom();
            if (r.type != u.DataHelp.EN_STRUCTBEGIN)
              throw Error(
                "read struct type mismatch, tag: " + t + ", get type:" + r.type
              );
            return n.readFrom(this), this.skipToStructEnd(), n;
          }),
          (u.JceInputStream.prototype.readString = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            var r = this.readFrom();
            if (r.type == u.DataHelp.EN_STRING1)
              return this.buf.readString(this.buf.readUInt8());
            if (r.type == u.DataHelp.EN_STRING4)
              return this.buf.readString(this.buf.readUInt32());
            throw Error(
              "read 'string' type mismatch, tag: " +
                t +
                ", get type: " +
                r.type +
                "."
            );
          }),
          (u.JceInputStream.prototype.readString2 = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            var r = this.readFrom();
            if (r.type == u.DataHelp.EN_STRING1)
              return this.buf.readBytes(this.buf.readUInt8());
            if (r.type == u.DataHelp.EN_STRING4)
              return this.buf.readBytes(this.buf.readUInt32());
            throw Error(
              "read 'string' type mismatch, tag: " +
                t +
                ", get type: " +
                r.type +
                "."
            );
          }),
          (u.JceInputStream.prototype.readBytes = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            var r = this.readFrom();
            if (r.type == u.DataHelp.EN_SIMPLELIST) {
              var i = this.readFrom();
              if (i.type != u.DataHelp.EN_INT8)
                throw Error(
                  "type mismatch, tag:" + t + ",type:" + r.type + "," + i.type
                );
              if ((o = this.readInt32(0, !0)) < 0)
                throw Error(
                  "invalid size, tag:" + t + ",type:" + r.type + "," + i.type
                );
              return this.buf.readBytes(o);
            }
            if (r.type != u.DataHelp.EN_LIST)
              throw Error("type mismatch, tag:" + t + ",type:" + r.type);
            var o = this.readInt32(0, !0);
            return this.buf.readBytes(o);
          }),
          (u.JceInputStream.prototype.readVector = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            var r = this.readFrom();
            if (r.type != u.DataHelp.EN_LIST)
              throw Error(
                "read 'vector' type mismatch, tag: " +
                  t +
                  ", get type: " +
                  r.type
              );
            var i = this.readInt32(0, !0);
            if (i < 0)
              throw Error(
                "invalid size, tag: " + t + ", type: " + r.type + ", size: " + i
              );
            for (var o = 0; o < i; ++o) {
              var a = "function" == typeof n.proto ? new n.proto() : n.proto;
              n.value.push(a._read(this, 0, a._clone()));
            }
            return n;
          }),
          (u.JceInputStream.prototype.readMap = function (t, e, n) {
            if (0 == this.skipToTag(t, e)) return n;
            var r = this.readFrom();
            if (r.type != u.DataHelp.EN_MAP)
              throw Error(
                "read 'map' type mismatch, tag: " + t + ", get type: " + r.type
              );
            var i = this.readInt32(0, !0);
            if (i < 0) throw Error("invalid map, tag: " + t + ", size: " + i);
            for (var o = 0; o < i; o++) {
              var a = "function" == typeof n.kproto ? new n.kproto() : n.kproto,
                s = "function" == typeof n.vproto ? new n.vproto() : n.vproto,
                c = a._read(this, 0, a._clone()),
                l = s._read(this, 1, s._clone());
              n.put(c, l);
            }
            return n;
          }),
          (u.Util = u.Util || {}),
          (u.Util.jcestream = function (t, e) {
            if (null != t && null != t)
              if (t instanceof ArrayBuffer) {
                e = e || 16;
                for (
                  var n = new Uint8Array(t), r = "", i = 0;
                  i < n.length;
                  i++
                )
                  0 != i && i % e == 0 ? (r += "\n") : 0 != i && (r += " "),
                    (r += (15 < n[i] ? "" : "0") + n[i].toString(16));
                console.log(r.toUpperCase());
              } else
                console.log("Taf.Util.jcestream::value is not ArrayBuffer");
            else console.log("Taf.Util.jcestream::value is null or undefined");
          }),
          (u.Util.str2ab = function (t) {
            var e,
              n = t.length,
              r = new Array(n);
            for (e = 0; e < n; ++e) r[e] = t.charCodeAt(e);
            return new Uint8Array(r).buffer;
          }),
          (u.Util.ajax = function (t, e, n, r) {
            var i = new XMLHttpRequest();
            i.overrideMimeType("text/plain; charset=x-user-defined"),
              i.addEventListener("readystatechange", function t() {
                4 === i.readyState &&
                  (200 === i.status || 304 === i.status
                    ? n(u.Util.str2ab(i.response))
                    : r(i.status),
                  i.removeEventListener("readystatechange", t),
                  (i = void 0));
              }),
              i.open("post", t),
              i.send(e);
          }),
          (u.INT8 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeInt8(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readInt8(e, !0, n);
              }),
              (this._className = function () {
                return u.CHAR;
              });
          }),
          (u.INT16 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeInt16(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readInt16(e, !0, n);
              }),
              (this._className = function () {
                return u.SHORT;
              });
          }),
          (u.INT32 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeInt32(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readInt32(e, !0, n);
              }),
              (this._className = function () {
                return u.INT32;
              });
          }),
          (u.INT64 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeInt64(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readInt64(e, !0, n);
              }),
              (this._className = function () {
                return u.INT64;
              });
          }),
          (u.UINT8 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeInt16(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readInt16(e, !0, n);
              }),
              (this._className = function () {
                return u.SHORT;
              });
          }),
          (u.UInt16 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeInt32(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readInt32(e, !0, n);
              }),
              (this._className = function () {
                return u.INT32;
              });
          }),
          (u.UInt32 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeInt64(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readInt64(e, !0, n);
              }),
              (this._className = function () {
                return u.INT64;
              });
          }),
          (u.Float = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeFloat(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readFloat(e, !0, n);
              }),
              (this._className = function () {
                return u.FLOAT;
              });
          }),
          (u.Double = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeDouble(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readDouble(e, !0, n);
              }),
              (this._className = function () {
                return u.DOUBLE;
              });
          }),
          (u.STRING = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeString(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readString(e, !0, n);
              }),
              (this._className = function () {
                return u.STRING;
              });
          }),
          (u.BOOLEAN = function () {
            (this._clone = function () {
              return !1;
            }),
              (this._write = function (t, e, n) {
                return t.writeBoolean(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readBoolean(e, !0, n);
              }),
              (this._className = function () {
                return u.BOOLEAN;
              });
          }),
          (u.ENUM = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, e, n) {
                return t.writeInt32(e, n);
              }),
              (this._read = function (t, e, n) {
                return t.readInt32(e, !0, n);
              });
          }),
          (u.Vector = function (t) {
            (this.proto = t), (this.value = []);
          }),
          (u.Vector.prototype._clone = function () {
            return new u.Vector(
              "function" == typeof this.proto ? new this.proto() : this.proto
            );
          }),
          (u.Vector.prototype._write = function (t, e, n) {
            return t.writeVector(e, n);
          }),
          (u.Vector.prototype._read = function (t, e, n) {
            return t.readVector(e, !0, n);
          }),
          (u.Vector.prototype._className = function () {
            var t = p(this.proto);
            return u.TypeHelp.VECTOR.replace("$t", t);
          }),
          (u.Map = function (t, e) {
            (this.kproto = t), (this.vproto = e), (this.value = new Object());
          }),
          (u.Map.prototype._clone = function () {
            var t =
                "function" == typeof this.kproto
                  ? new this.kproto()
                  : this.kproto,
              e =
                "function" == typeof this.vproto
                  ? new this.vproto()
                  : this.vproto;
            return new u.Map(t, e);
          }),
          (u.Map.prototype._write = function (t, e, n) {
            return t.writeMap(e, n);
          }),
          (u.Map.prototype._read = function (t, e, n) {
            return t.readMap(e, !0, n);
          }),
          (u.Map.prototype.put = function (t, e) {
            this.value[t] = e;
          }),
          (u.Map.prototype.get = function (t) {
            return this.value[t];
          }),
          (u.Map.prototype.remove = function (t) {
            delete this.value[t];
          }),
          (u.Map.prototype.clear = function () {
            this.value = new Object();
          }),
          (u.Map.prototype.size = function () {
            var t = 0;
            for (var e in this.value) t++;
            return t;
          }),
          (u.Map.prototype._className = function () {
            var t = p(this.kproto),
              e = p(this.vproto);
            return u.TypeHelp.Map.replace("$k", t).replace("$v", e);
          });
        var f = {
          EWebSocketCommandType: {
            EWSCmd_NULL: 0,
            EWSCmd_RegisterReq: 1,
            EWSCmd_RegisterRsp: 2,
            EWSCmd_WupReq: 3,
            EWSCmd_WupRsp: 4,
            EWSCmdC2S_HeartBeat: 5,
            EWSCmdS2C_HeartBeatAck: 6,
            EWSCmdS2C_MsgPushReq: 7,
            EWSCmdC2S_DeregisterReq: 8,
            EWSCmdS2C_DeRegisterRsp: 9,
            EWSCmdC2S_VerifyCookieReq: 10,
            EWSCmdS2C_VerifyCookieRsp: 11,
            EWSCmdC2S_VerifyHuyaTokenReq: 12,
            EWSCmdS2C_VerifyHuyaTokenRsp: 13,
            EWSCmdC2S_UNVerifyReq: 14,
            EWSCmdS2C_UNVerifyRsp: 15,
            EWSCmdC2S_RegisterGroupReq: 16,
            EWSCmdS2C_RegisterGroupRsp: 17,
            EWSCmdC2S_UnRegisterGroupReq: 18,
            EWSCmdS2C_UnRegisterGroupRsp: 19,
            EWSCmdC2S_HeartBeatReq: 20,
            EWSCmdS2C_HeartBeatRsp: 21,
            EWSCmdS2C_MsgPushReq_V2: 22,
            EWSCmdC2S_UpdateUserExpsReq: 23,
            EWSCmdS2C_UpdateUserExpsRsp: 24,
            EWSCmdC2S_WSHistoryMsgReq: 25,
            EWSCmdS2C_WSHistoryMsgRsp: 26,
            EWSCmdS2C_EnterP2P: 27,
            EWSCmdS2C_EnterP2PAck: 28,
            EWSCmdS2C_ExitP2P: 29,
            EWSCmdS2C_ExitP2PAck: 30,
            EWSCmdC2S_SyncGroupReq: 31,
            EWSCmdS2C_SyncGroupRsp: 32,
            EWSCmdC2S_UpdateUserInfoReq: 33,
            EWSCmdS2C_UpdateUserInfoRsp: 34,
            EWSCmdC2S_MsgAckReq: 35,
            EWSCmdS2C_MsgAckRsp: 36,
            EWSCmdC2S_CloudGameReq: 37,
            EWSCmdS2C_CloudGamePush: 38,
            EWSCmdS2C_CloudGameRsp: 39,
            EWSCmdS2C_RpcReq: 40,
            EWSCmdC2S_RpcRsp: 41,
            EWSCmdS2C_RpcRspRsp: 42,
            EWSCmdC2S_GetStunPortReq: 101,
            EWSCmdS2C_GetStunPortRsp: 102,
            EWSCmdC2S_WebRTCOfferReq: 103,
            EWSCmdS2C_WebRTCOfferRsp: 104,
            EWSCmdC2S_SignalUpgradeReq: 105,
            EWSCmdS2C_SignalUpgradeRsp: 106,
          },
          ELiveSource: { PC_YY: 0, PC_HUYA: 1, MOBILE_HUYA: 2, WEB_HUYA: 3 },
          EGender: { MALE: 0, FEMALE: 1 },
          TemplateType: { PRIMARY: 1, RECEPTION: 2 },
          EStreamLineType: {
            STREAM_LINE_OLD_YY: 0,
            STREAM_LINE_WS: 1,
            STREAM_LINE_NEW_YY: 2,
            STREAM_LINE_AL: 3,
            STREAM_LINE_HUYA: 4,
            STREAM_LINE_TX: 5,
            STREAM_LINE_CDN: 8,
            STREAM_LINE_HW: 6,
            STREAM_LINE_BD: 7,
            STREAM_LINE_GG: 9,
            STREAM_LINE_CF: 10,
            STREAM_LINE_QUICK_HUYA: 99,
          },
          eUserOperation: { USER_IN: 1, USER_OUT: 2, USER_MOVE: 3 },
          WebSocketCommand: function () {
            (this.iCmdType = 0),
              (this.vData = new u.BinBuffer()),
              (this.lRequestId = 0),
              (this.traceId = ""),
              (this.iEncryptType = 0),
              (this.lTime = 0),
              (this.sMD5 = "");
          },
        };
        (f.WebSocketCommand.prototype._clone = function () {
          return new f.WebSocketCommand();
        }),
          (f.WebSocketCommand.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WebSocketCommand.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WebSocketCommand.prototype.writeTo = function (t) {
            t.writeInt32(0, this.iCmdType),
              t.writeBytes(1, this.vData),
              t.writeInt64(2, this.lRequestId),
              t.writeString(3, this.traceId),
              t.writeInt32(4, this.iEncryptType),
              t.writeInt64(5, this.lTime),
              t.writeString(6, this.sMD5);
          }),
          (f.WebSocketCommand.prototype.readFrom = function (t) {
            (this.iCmdType = t.readInt32(0, !1, this.iCmdType)),
              (this.vData = t.readBytes(1, !1, this.vData)),
              (this.lRequestId = t.readInt64(2, !1, this.lRequestId)),
              (this.traceId = t.readString(3, !1, this.traceId)),
              (this.iEncryptType = t.readInt32(4, !1, this.iEncryptType)),
              (this.lTime = t.readInt64(5, !1, this.lTime)),
              (this.sMD5 = t.readString(6, !1, this.sMD5));
          }),
          (f.WSRegisterRsp = function () {
            (this.iResCode = 0),
              (this.lRequestId = 0),
              (this.sMessage = ""),
              (this.sBCConnHost = "");
          }),
          (f.WSRegisterRsp.prototype._clone = function () {
            return new f.WSRegisterRsp();
          }),
          (f.WSRegisterRsp.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSRegisterRsp.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSRegisterRsp.prototype.readFrom = function (t) {
            (this.iResCode = t.readInt32(0, !1, this.iResCode)),
              (this.lRequestId = t.readInt64(1, !1, this.lRequestId)),
              (this.sMessage = t.readString(2, !1, this.sMessage)),
              (this.sBCConnHost = t.readString(3, !1, this.sBCConnHost));
          }),
          (f.WSPushMessage = function () {
            (this.ePushType = 0),
              (this.iUri = 0),
              (this.sMsg = new u.BinBuffer()),
              (this.iProtocolType = 0),
              (this.sGroupId = ""),
              (this.lMsgId = 0),
              (this.iMsgTag = 0);
          }),
          (f.WSPushMessage.prototype._clone = function () {
            return new f.WSPushMessage();
          }),
          (f.WSPushMessage.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSPushMessage.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSPushMessage.prototype.writeTo = function (t) {
            t.writeInt32(0, this.ePushType),
              t.writeInt64(1, this.iUri),
              t.writeBytes(2, this.sMsg),
              t.writeInt32(3, this.iProtocolType),
              t.writeString(4, this.sGroupId),
              t.writeInt64(5, this.lMsgId),
              t.writeInt32(6, this.iMsgTag);
          }),
          (f.WSPushMessage.prototype.readFrom = function (t) {
            (this.ePushType = t.readInt32(0, !1, this.ePushType)),
              (this.iUri = t.readInt64(1, !1, this.iUri)),
              (this.sMsg = t.readBytes(2, !1, this.sMsg)),
              (this.iProtocolType = t.readInt32(3, !1, this.iProtocolType)),
              (this.sGroupId = t.readString(4, !1, this.sGroupId)),
              (this.lMsgId = t.readInt64(5, !1, this.lMsgId)),
              (this.iMsgTag = t.readInt32(6, !1, this.iMsgTag));
          }),
          (f.WSUserInfo = function () {
            (this.lUid = 0),
              (this.bAnonymous = !0),
              (this.sGuid = ""),
              (this.sToken = ""),
              (this.lTid = 0),
              (this.lSid = 0),
              (this.lGroupId = 0),
              (this.lGroupType = 0),
              (this.sAppId = ""),
              (this.sUA = "");
          }),
          (f.WSUserInfo.prototype._clone = function () {
            return new f.WSUserInfo();
          }),
          (f.WSUserInfo.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSUserInfo.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSUserInfo.prototype.writeTo = function (t) {
            t.writeInt64(0, this.lUid),
              t.writeBoolean(1, this.bAnonymous),
              t.writeString(2, this.sGuid),
              t.writeString(3, this.sToken),
              t.writeInt64(4, this.lTid),
              t.writeInt64(5, this.lSid),
              t.writeInt64(6, this.lGroupId),
              t.writeInt64(7, this.lGroupType),
              t.writeString(8, this.sAppId),
              t.writeString(9, this.sUA);
          }),
          (f.WSUserInfo.prototype.readFrom = function (t) {
            (this.lUid = t.readInt64(0, !1, this.lUid)),
              (this.bAnonymous = t.readBoolean(1, !1, this.bAnonymous)),
              (this.sGuid = t.readString(2, !1, this.sGuid)),
              (this.sToken = t.readString(3, !1, this.sToken)),
              (this.lTid = t.readInt64(4, !1, this.lTid)),
              (this.lSid = t.readInt64(5, !1, this.lSid)),
              (this.lGroupId = t.readInt64(6, !1, this.lGroupId)),
              (this.lGroupType = t.readInt64(7, !1, this.lGroupType)),
              (this.sAppId = t.readString(8, !1, this.sAppId)),
              (this.sUA = t.readString(9, !1, this.sUA));
          }),
          (f.WSVerifyCookieReq = function () {
            (this.lUid = 0),
              (this.sUA = ""),
              (this.sCookie = ""),
              (this.sGuid = ""),
              (this.bAutoRegisterUid = 0),
              (this.sAppSrc = "");
          }),
          (f.WSVerifyCookieReq.prototype._clone = function () {
            return new f.WSVerifyCookieReq();
          }),
          (f.WSVerifyCookieReq.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSVerifyCookieReq.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSVerifyCookieReq.prototype.writeTo = function (t) {
            t.writeInt64(0, this.lUid),
              t.writeString(1, this.sUA),
              t.writeString(2, this.sCookie),
              t.writeString(3, this.sGuid),
              t.writeInt32(4, this.bAutoRegisterUid),
              t.writeString(5, this.sAppSrc);
          }),
          (f.WSVerifyCookieRsp = function () {
            this.iValidate = 0;
          }),
          (f.WSVerifyCookieRsp.prototype._clone = function () {
            return new f.WSVerifyCookieRsp();
          }),
          (f.WSVerifyCookieRsp.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSVerifyCookieRsp.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSVerifyCookieRsp.prototype.readFrom = function (t) {
            this.iValidate = t.readInt32(0, !1, this.iValidate);
          }),
          (f.UserId = function () {
            (this.lUid = 0),
              (this.sGuid = ""),
              (this.sToken = ""),
              (this.sHuYaUA = ""),
              (this.sCookie = ""),
              (this.iTokenType = 0),
              (this.sDeviceInfo = "");
          }),
          (f.UserId.prototype._clone = function () {
            return new f.UserId();
          }),
          (f.UserId.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.UserId.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.UserId.prototype.writeTo = function (t) {
            t.writeInt64(0, this.lUid),
              t.writeString(1, this.sGuid),
              t.writeString(2, this.sToken),
              t.writeString(3, this.sHuYaUA),
              t.writeString(4, this.sCookie),
              t.writeInt32(5, this.iTokenType),
              t.writeString(6, this.sDeviceInfo);
          }),
          (f.UserId.prototype.readFrom = function (t) {
            (this.lUid = t.readInt64(0, !1, this.lUid)),
              (this.sGuid = t.readString(1, !1, this.sGuid)),
              (this.sToken = t.readString(2, !1, this.sToken)),
              (this.sHuYaUA = t.readString(3, !1, this.sHuYaUA)),
              (this.sCookie = t.readString(4, !1, this.sCookie)),
              (this.iTokenType = t.readInt32(5, !1, this.iTokenType)),
              (this.sDeviceInfo = t.readString(6, !1, this.sDeviceInfo));
          }),
          (f.WSRegisterGroupReq = function () {
            (this.vGroupId = new u.Vector(new u.STRING())), (this.sToken = "");
          }),
          (f.WSRegisterGroupReq.prototype._clone = function () {
            return new f.WSRegisterGroupReq();
          }),
          (f.WSRegisterGroupReq.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSRegisterGroupReq.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSRegisterGroupReq.prototype.writeTo = function (t) {
            t.writeVector(0, this.vGroupId), t.writeString(1, this.sToken);
          }),
          (f.WSRegisterGroupRsp = function () {
            (this.iResCode = 0),
              (this.vSupportP2PGroupId = new u.Vector(new u.STRING()));
          }),
          (f.WSRegisterGroupRsp.prototype._clone = function () {
            return new f.WSRegisterGroupRsp();
          }),
          (f.WSRegisterGroupRsp.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSRegisterGroupRsp.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSRegisterGroupRsp.prototype.readFrom = function (t) {
            (this.iResCode = t.readInt32(0, !1, this.iResCode)),
              (this.vSupportP2PGroupId = t.readVector(
                1,
                !1,
                this.vSupportP2PGroupId
              ));
          }),
          (f.WSUpdateUserInfoReq = function () {
            (this.sAppSrc = ""),
              (this.sGuid = ""),
              (this.iReportMsgIdRatio = 0),
              (this.iSupportAck = 0),
              (this.tWSMsgStatInfo = new f.WSMsgStatInfo());
          }),
          (f.WSUpdateUserInfoReq.prototype._clone = function () {
            return new f.WSUpdateUserInfoReq();
          }),
          (f.WSUpdateUserInfoReq.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSUpdateUserInfoReq.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSUpdateUserInfoReq.prototype.writeTo = function (t) {
            t.writeString(0, this.sAppSrc),
              t.writeString(1, this.sGuid),
              t.writeInt32(2, this.iReportMsgIdRatio),
              t.writeInt32(3, this.iSupportAck),
              t.writeStruct(6, this.tWSMsgStatInfo);
          }),
          (f.WSUpdateUserInfoRsp = function () {
            (this.iResCode = 0), (this.iSupportAckMsgStat = 0);
          }),
          (f.WSUpdateUserInfoRsp.prototype._clone = function () {
            return new f.WSUpdateUserInfoRsp();
          }),
          (f.WSUpdateUserInfoRsp.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSUpdateUserInfoRsp.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSUpdateUserInfoRsp.prototype.readFrom = function (t) {
            (this.iResCode = t.readInt32(0, !1, this.iResCode)),
              (this.iSupportAckMsgStat = t.readInt32(
                1,
                !1,
                this.iSupportAckMsgStat
              ));
          }),
          (f.WSMsgStatInfo = function () {
            (this.mSignalPushUriCount = new u.Map(
              new u.STRING(),
              new u.Map(new u.INT64(), new u.INT32())
            )),
              (this.mP2pPushUriCount = new u.Map(
                new u.STRING(),
                new u.Map(new u.INT64(), new u.INT32())
              )),
              (this.iSupportAckMsgStat = 0);
          }),
          (f.WSMsgStatInfo.prototype._clone = function () {
            return new f.WSMsgStatInfo();
          }),
          (f.WSMsgStatInfo.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSMsgStatInfo.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSMsgStatInfo.prototype.writeTo = function (t) {
            t.writeMap(0, this.mSignalPushUriCount),
              t.writeMap(1, this.mP2pPushUriCount),
              t.writeInt32(3, this.iSupportAckMsgStat);
          }),
          (f.WSMsgStatInfo.prototype.readFrom = function (t) {
            (this.mSignalPushUriCount = t.readMap(
              0,
              !1,
              this.mSignalPushUriCount
            )),
              (this.mP2pPushUriCount = t.readMap(1, !1, this.mP2pPushUriCount)),
              (this.iSupportAckMsgStat = t.readInt32(
                3,
                !1,
                this.iSupportAckMsgStat
              ));
          }),
          (f.WSRedirect = function () {
            (this.vRemoveIps = new u.Vector(new u.STRING())),
              (this.sRedirectIp = "");
          }),
          (f.WSRedirect.prototype._clone = function () {
            return new f.WSRedirect();
          }),
          (f.WSRedirect.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSRedirect.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSRedirect.prototype.writeTo = function (t) {
            t.writeVector(0, this.vRemoveIps),
              t.writeString(1, this.sRedirectIp);
          }),
          (f.WSRedirect.prototype.readFrom = function (t) {
            (this.vRemoveIps = t.readVector(0, !1, this.vRemoveIps)),
              (this.sRedirectIp = t.readString(1, !1, this.sRedirectIp));
          }),
          (f.WSPushMessage_V2 = function () {
            (this.sGroupId = ""),
              (this.vMsgItem = new u.Vector(new f.WSMsgItem()));
          }),
          (f.WSPushMessage_V2.prototype._clone = function () {
            return new f.WSPushMessage_V2();
          }),
          (f.WSPushMessage_V2.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSPushMessage_V2.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSPushMessage_V2.prototype.writeTo = function (t) {
            t.writeString(0, this.sGroupId), t.writeVector(1, this.vMsgItem);
          }),
          (f.WSPushMessage_V2.prototype.readFrom = function (t) {
            (this.sGroupId = t.readString(0, !1, this.sGroupId)),
              (this.vMsgItem = t.readVector(1, !1, this.vMsgItem));
          }),
          (f.WSMsgItem = function () {
            (this.iUri = 0), (this.sMsg = new u.BinBuffer()), (this.lMsgId = 0);
          }),
          (f.WSMsgItem.prototype._clone = function () {
            return new f.WSMsgItem();
          }),
          (f.WSMsgItem.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSMsgItem.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSMsgItem.prototype.writeTo = function (t) {
            t.writeInt64(0, this.iUri),
              t.writeBytes(1, this.sMsg),
              t.writeInt64(2, this.lMsgId);
          }),
          (f.WSMsgItem.prototype.readFrom = function (t) {
            (this.iUri = t.readInt64(0, !1, this.iUri)),
              (this.sMsg = t.readBytes(1, !1, this.sMsg)),
              (this.lMsgId = t.readInt64(2, !1, this.lMsgId));
          }),
          (f.LiveLaunchReq = function () {
            (this.tId = new f.UserId()),
              (this.tLiveUB = new f.LiveUserbase()),
              (this.bSupportDomain = 0);
          }),
          (f.LiveLaunchReq.prototype._clone = function () {
            return new f.LiveLaunchReq();
          }),
          (f.LiveLaunchReq.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.LiveLaunchReq.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.LiveLaunchReq.prototype.writeTo = function (t) {
            t.writeStruct(0, this.tId),
              t.writeStruct(1, this.tLiveUB),
              t.writeInt32(2, this.bSupportDomain);
          }),
          (f.LiveLaunchRsp = function () {
            (this.sGuid = ""),
              (this.iTime = 0),
              (this.vProxyList = new u.Vector(new f.LiveProxyValue())),
              (this.eAccess = 0),
              (this.sClientIp = "");
          }),
          (f.LiveLaunchRsp.prototype._clone = function () {
            return new f.LiveLaunchRsp();
          }),
          (f.LiveLaunchRsp.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.LiveLaunchRsp.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.LiveLaunchRsp.prototype.readFrom = function (t) {
            (this.sGuid = t.readString(0, !1, this.sGuid)),
              (this.iTime = t.readInt32(1, !1, this.iTime)),
              (this.vProxyList = t.readVector(2, !1, this.vProxyList)),
              (this.eAccess = t.readInt32(3, !1, this.eAccess)),
              (this.sClientIp = t.readString(4, !1, this.sClientIp));
          }),
          (f.LiveProxyValue = function () {
            (this.eProxyType = 0), (this.sProxy = new u.Vector(new u.STRING()));
          }),
          (f.LiveProxyValue.prototype._clone = function () {
            return new f.LiveProxyValue();
          }),
          (f.LiveProxyValue.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.LiveProxyValue.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.LiveProxyValue.prototype.writeTo = function (t) {
            t.writeInt32(0, this.eProxyType), t.writeVector(1, this.sProxy);
          }),
          (f.LiveProxyValue.prototype.readFrom = function (t) {
            (this.eProxyType = t.readInt32(0, !1, this.eProxyType)),
              (this.sProxy = t.readVector(1, !1, this.sProxy));
          }),
          (f.WSLaunchReq = function () {
            (this.lUid = 0),
              (this.sGuid = ""),
              (this.sUA = ""),
              (this.sAppSrc = ""),
              (this.tDeviceInfo = new f.WSDeviceInfo());
          }),
          (f.WSLaunchReq.prototype._clone = function () {
            return new f.WSLaunchReq();
          }),
          (f.WSLaunchReq.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSLaunchReq.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSLaunchReq.prototype.writeTo = function (t) {
            t.writeInt64(0, this.lUid),
              t.writeString(1, this.sGuid),
              t.writeString(2, this.sUA),
              t.writeString(3, this.sAppSrc),
              t.writeStruct(4, this.tDeviceInfo);
          }),
          (f.WSLaunchRsp = function () {
            (this.sGuid = ""), (this.sClientIp = "");
          }),
          (f.WSLaunchRsp.prototype._clone = function () {
            return new f.WSLaunchRsp();
          }),
          (f.WSLaunchRsp.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSLaunchRsp.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSLaunchRsp.prototype.readFrom = function (t) {
            (this.sGuid = t.readString(0, !1, this.sGuid)),
              (this.sClientIp = t.readString(1, !1, this.sClientIp));
          }),
          (f.WSDeviceInfo = function () {
            (this.sIMEI = ""),
              (this.sAPN = ""),
              (this.sNetType = ""),
              (this.sDeviceId = ""),
              (this.sMId = "");
          }),
          (f.WSDeviceInfo.prototype._clone = function () {
            return new f.WSDeviceInfo();
          }),
          (f.WSDeviceInfo.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSDeviceInfo.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSDeviceInfo.prototype.writeTo = function (t) {
            t.writeString(0, this.sIMEI),
              t.writeString(1, this.sAPN),
              t.writeString(2, this.sNetType),
              t.writeString(3, this.sDeviceId),
              t.writeString(4, this.sMId);
          }),
          (f.WSDeviceInfo.prototype.readFrom = function (t) {
            (this.sIMEI = t.readString(0, !1, this.sIMEI)),
              (this.sAPN = t.readString(1, !1, this.sAPN)),
              (this.sNetType = t.readString(2, !1, this.sNetType)),
              (this.sDeviceId = t.readString(3, !1, this.sDeviceId)),
              (this.sMId = t.readString(4, !1, this.sMId));
          }),
          (f.QueryHttpDnsReq = function () {
            (this.lUid = 0),
              (this.sUA = ""),
              (this.vDomain = new u.Vector(new u.STRING())),
              (this.sAppSrc = ""),
              (this.sClientIp = ""),
              (this.iIpStack = 0),
              (this.iIpType = 0);
          }),
          (f.QueryHttpDnsReq.prototype._clone = function () {
            return new f.QueryHttpDnsReq();
          }),
          (f.QueryHttpDnsReq.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.QueryHttpDnsReq.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.QueryHttpDnsReq.prototype.writeTo = function (t) {
            t.writeInt64(0, this.lUid),
              t.writeString(1, this.sUA),
              t.writeVector(2, this.vDomain),
              t.writeString(3, this.sAppSrc),
              t.writeString(4, this.sClientIp),
              t.writeInt32(5, this.iIpStack),
              t.writeInt32(6, this.iIpType);
          }),
          (f.QueryHttpDnsRsp = function () {
            (this.mDomain2Ip = new u.Map(new u.STRING(), new f.HttpDnsItem())),
              (this.iEnvType = 0);
          }),
          (f.QueryHttpDnsRsp.prototype._clone = function () {
            return new f.QueryHttpDnsRsp();
          }),
          (f.QueryHttpDnsRsp.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.QueryHttpDnsRsp.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.QueryHttpDnsRsp.prototype.readFrom = function (t) {
            (this.mDomain2Ip = t.readMap(0, !1, this.mDomain2Ip)),
              (this.iEnvType = t.readInt32(1, !1, this.iEnvType));
          }),
          (f.HttpDnsItem = function () {
            (this.vIp = new u.Vector(new u.STRING())),
              (this.iExpireTime = 0),
              (this.vIpv6 = new u.Vector(new u.STRING()));
          }),
          (f.HttpDnsItem.prototype._clone = function () {
            return new f.HttpDnsItem();
          }),
          (f.HttpDnsItem.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.HttpDnsItem.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.HttpDnsItem.prototype.writeTo = function (t) {
            t.writeVector(0, this.vIp),
              t.writeInt64(1, this.iExpireTime),
              t.writeVector(2, this.vIpv6);
          }),
          (f.HttpDnsItem.prototype.readFrom = function (t) {
            (this.vIp = t.readVector(0, !1, this.vIp)),
              (this.iExpireTime = t.readInt64(1, !1, this.iExpireTime)),
              (this.vIpv6 = t.readVector(2, !1, this.vIpv6));
          }),
          (f.MetricDetailSet = function () {
            (this.tId = new f.UserId()),
              (this.vMetricDetail = new u.Vector(new f.MetricDetail()));
          }),
          (f.MetricDetailSet.prototype._clone = function () {
            return new f.MetricDetailSet();
          }),
          (f.MetricDetailSet.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.MetricDetailSet.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.MetricDetailSet.prototype.writeTo = function (t) {
            t.writeStruct(0, this.tId), t.writeVector(1, this.vMetricDetail);
          }),
          (f.MetricDetailSet.prototype.readFrom = function (t) {
            (this.tId = t.readStruct(0, !0, this.tId)),
              (this.vMetricDetail = t.readVector(1, !0, this.vMetricDetail));
          }),
          (f.MetricDetail = function () {
            (this.sMetricName = ""),
              (this.iTS = 0),
              (this.vDimension = new u.Vector(new f.Dimension())),
              (this.vFiled = new u.Vector(new f.Field())),
              (this.vExLog = new u.Vector(new f.Dimension()));
          }),
          (f.MetricDetail.prototype._clone = function () {
            return new f.MetricDetail();
          }),
          (f.MetricDetail.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.MetricDetail.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.MetricDetail.prototype.writeTo = function (t) {
            t.writeString(0, this.sMetricName),
              t.writeInt64(1, this.iTS),
              t.writeVector(2, this.vDimension),
              t.writeVector(3, this.vFiled),
              t.writeVector(4, this.vExLog);
          }),
          (f.MetricDetail.prototype.readFrom = function (t) {
            (this.sMetricName = t.readString(0, !0, this.sMetricName)),
              (this.iTS = t.readInt64(1, !1, this.iTS)),
              (this.vDimension = t.readVector(2, !1, this.vDimension)),
              (this.vFiled = t.readVector(3, !1, this.vFiled)),
              (this.vExLog = t.readVector(4, !1, this.vExLog));
          }),
          (f.Field = function () {
            (this.sName = ""), (this.fValue = 0);
          }),
          (f.Field.prototype._clone = function () {
            return new f.Field();
          }),
          (f.Field.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.Field.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.Field.prototype.writeTo = function (t) {
            t.writeString(0, this.sName), t.writeDouble(1, this.fValue);
          }),
          (f.Field.prototype.readFrom = function (t) {
            (this.sName = t.readString(0, !1, this.sName)),
              (this.fValue = t.readDouble(1, !1, this.fValue));
          }),
          (f.Dimension = function () {
            (this.sName = ""), (this.sValue = "");
          }),
          (f.Dimension.prototype._clone = function () {
            return new f.Dimension();
          }),
          (f.Dimension.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.Dimension.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.Dimension.prototype.writeTo = function (t) {
            t.writeString(0, this.sName), t.writeString(1, this.sValue);
          }),
          (f.Dimension.prototype.readFrom = function (t) {
            (this.sName = t.readString(0, !1, this.sName)),
              (this.sValue = t.readString(1, !1, this.sValue));
          }),
          (f.WSUnRegisterGroupReq = function () {
            this.vGroupId = new u.Vector(new u.STRING());
          }),
          (f.WSUnRegisterGroupReq.prototype._clone = function () {
            return new f.WSUnRegisterGroupReq();
          }),
          (f.WSUnRegisterGroupReq.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSUnRegisterGroupReq.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSUnRegisterGroupReq.prototype.writeTo = function (t) {
            t.writeVector(0, this.vGroupId);
          }),
          (f.WSUnRegisterGroupRsp = function () {
            this.iResCode = 0;
          }),
          (f.WSUnRegisterGroupRsp.prototype._clone = function () {
            return new f.WSUnRegisterGroupRsp();
          }),
          (f.WSUnRegisterGroupRsp.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSUnRegisterGroupRsp.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSUnRegisterGroupRsp.prototype.readFrom = function (t) {
            this.iResCode = t.readInt32(0, !1, this.iResCode);
          }),
          (f.WSConnectParaInfo = function () {
            (this.lUid = 0),
              (this.sGuid = ""),
              (this.sUA = ""),
              (this.sAppSrc = ""),
              (this.sMid = ""),
              (this.sExp = ""),
              (this.iTokenType = 0),
              (this.sToken = ""),
              (this.sCookie = ""),
              (this.sTraceId = ""),
              (this.mCustomHeaders = new u.Map(new u.STRING(), new u.STRING()));
          }),
          (f.WSConnectParaInfo.prototype._clone = function () {
            return new f.WSConnectParaInfo();
          }),
          (f.WSConnectParaInfo.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.WSConnectParaInfo.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.WSConnectParaInfo.prototype.writeTo = function (t) {
            t.writeInt64(0, this.lUid),
              t.writeString(1, this.sGuid),
              t.writeString(2, this.sUA),
              t.writeString(3, this.sAppSrc),
              t.writeString(4, this.sMid),
              t.writeString(5, this.sExp),
              t.writeInt32(6, this.iTokenType),
              t.writeString(7, this.sToken),
              t.writeString(8, this.sCookie),
              t.writeString(9, this.sTraceId),
              t.writeMap(10, this.mCustomHeaders);
          }),
          (f.WSConnectParaInfo.prototype.readFrom = function (t) {
            (this.lUid = t.readInt64(0, !1, this.lUid)),
              (this.sGuid = t.readString(1, !1, this.sGuid)),
              (this.sUA = t.readString(2, !1, this.sUA)),
              (this.sAppSrc = t.readString(3, !1, this.sAppSrc)),
              (this.sMid = t.readString(4, !1, this.sMid)),
              (this.sExp = t.readString(5, !1, this.sExp)),
              (this.iTokenType = t.readInt32(6, !1, this.iTokenType)),
              (this.sToken = t.readString(7, !1, this.sToken)),
              (this.sCookie = t.readString(8, !1, this.sCookie)),
              (this.sTraceId = t.readString(9, !1, this.sTraceId)),
              (this.mCustomHeaders = t.readMap(10, !1, this.mCustomHeaders));
          }),
          (f.CloudGamePacket = function () {
            (this.sToken = ""),
              (this.sCommand = ""),
              (this.packetBytes = new u.BinBuffer()),
              (this.sRequestId = "");
          }),
          (f.CloudGamePacket.prototype._clone = function () {
            return new f.CloudGamePacket();
          }),
          (f.CloudGamePacket.prototype._write = function (t, e, n) {
            t.writeStruct(e, n);
          }),
          (f.CloudGamePacket.prototype._read = function (t, e, n) {
            return t.readStruct(e, !0, n);
          }),
          (f.CloudGamePacket.prototype.writeTo = function (t) {
            t.writeString(0, this.sToken),
              t.writeString(1, this.sCommand),
              t.writeBytes(2, this.packetBytes),
              t.writeString(3, this.sRequestId);
          }),
          (f.CloudGamePacket.prototype.readFrom = function (t) {
            (this.sToken = t.readString(0, !1, this.sToken)),
              (this.sCommand = t.readString(1, !1, this.sCommand)),
              (this.packetBytes = t.readBytes(2, !1, this.packetBytes)),
              (this.sRequestId = t.readString(3, !1, this.sRequestId));
          });
        var d = 0,
          v = 1,
          m = 2,
          y = -1,
          g = -3,
          b = -10,
          w = -500,
          S = -10092,
          E = -10504,
          _ = -20001,
          I = -20002,
          T = -20003,
          O = {
            storeDns: function (t, e) {
              for (
                var n = "",
                  r = this.getIpsKey(!0),
                  i = t.join("|").toLocaleLowerCase(),
                  o = 0,
                  a = i.length;
                o < a;
                o++
              ) {
                var s = r[i.charAt(o)],
                  c = (Math.random() * s.length) >> 0;
                n += s.charAt(c);
              }
              localStorage["wssdns".concat(e)] = n;
            },
            getDns: function (t) {
              var e = localStorage["wssdns".concat(t)];
              if (!e) return [];
              for (
                var n = "", r = this.getIpsKey(!1), i = 0, o = e.length;
                i < o;
                i++
              )
                n += r[e.charAt(i)];
              return n.split("|");
            },
            storeIps: function (t, e) {
              for (
                var n = "",
                  r = this.getIpsKey(!0),
                  i = t.join("|").toLocaleLowerCase(),
                  o = 0,
                  a = i.length;
                o < a;
                o++
              ) {
                var s = r[i.charAt(o)],
                  c = (Math.random() * s.length) >> 0;
                n += s.charAt(c);
              }
              localStorage["wssips".concat(e)] = n;
            },
            getIps: function (t) {
              var e = localStorage["wssips".concat(t)];
              if (!e) return [];
              for (
                var n = "", r = this.getIpsKey(!1), i = 0, o = e.length;
                i < o;
                i++
              )
                n += r[e.charAt(i)];
              return n.split("|");
            },
            getIpsKey: function (t) {
              for (
                var e = ["-", ".", ":", "|"],
                  n =
                    "_N1Y%/ny^6?Mi7|wCe#$VmT=.GBut]3L*f<acX2Eop>d}WqKPQ@r;zx!s`(:IHFRZ~[A{Jb-O&D)v0Ukj95,8lg+h4S",
                  r = {},
                  i = 0;
                i < 40;
                i++
              ) {
                var o = i < 11 ? 3 : 2,
                  a = n.substr(0, o);
                n = n.substr(o);
                var s = i + "";
                if (
                  (13 < i
                    ? (s = String.fromCharCode(i + 83))
                    : 9 < i && (s = e[i - 10]),
                  t)
                )
                  r[s] = a;
                else for (var c = 0; c < a.length; c++) r[a.charAt(c)] = s;
              }
              return r;
            },
            getQueryString: function (t) {
              var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                n = window.location.search.substr(1).match(e);
              return null != n ? unescape(n[2]) : null;
            },
            parseQueryString: function (t) {
              for (var e = /([^\?\=\&]+)\=([^\?\=\&]*)/g, n = {}; e.exec(t); )
                n[RegExp.$1] = RegExp.$2;
              return n;
            },
            ab2str: function (t, e) {
              for (
                var n = new DataView(t), r = n.byteLength, i = 0, o = [], a = 0;
                a < r;
                a++
              )
                o.push(String.fromCharCode(n.getUint8(i++)));
              var s = o.join("");
              if (e)
                try {
                  s = decodeURIComponent(escape(s));
                } catch (t) {}
              return s;
            },
            copy: function (t, e) {
              for (var n in e) t[n] = e[n];
              return t;
            },
          },
          k = {};
        (k.UriMapping = o({}, k.UriMapping, { 1025305: f.WSRedirect })),
          (k.WupMapping = o({}, k.WupMapping, {
            wsLaunch: f.WSLaunchRsp,
            queryHttpDns: f.QueryHttpDnsRsp,
          }));
        var R = 99;
        function U(t, e) {
          var n = t.toString().length,
            r = Math.max(0, e - n);
          return "0".repeat(r) + t;
        }
        function C() {
          var t = new Date(),
            e = t.getFullYear(),
            n = U(t.getMonth() + 1, 2),
            r = U(t.getDate(), 2),
            i = U(t.getHours(), 2),
            o = U(t.getMinutes(), 2),
            a = U(t.getSeconds(), 2),
            s = U(t.getMilliseconds(), 3);
          return ""
            .concat(e, "-")
            .concat(n, "-")
            .concat(r, " ")
            .concat(i, ":")
            .concat(o, ":")
            .concat(a, ".")
            .concat(s, " ");
        }
        var P = {
            _data: [],
            _length: 0,
            init: function () {
              var t = Number(localStorage && localStorage._logLevel);
              isNaN(t) || (R = t);
            },
            debug: function () {
              var t = C(),
                e = Array.prototype.slice.call(arguments);
              (e[0] = t + e[0]), R <= -1 && console.log.apply(console, e);
            },
            log: function (t) {
              var e = C(),
                n = Array.prototype.slice.call(arguments);
              (n[0] = e + n[0]),
                R <= 0 && console.log.apply(console, n),
                P.record(n, "log");
            },
            info: function (t) {
              var e = C(),
                n = Array.prototype.slice.call(arguments);
              (n[0] = e + n[0]),
                R <= 1 && console.info.apply(console, n),
                P.record(n, "info");
            },
            warn: function (t) {
              var e = C(),
                n = Array.prototype.slice.call(arguments);
              (n[0] = e + n[0]),
                R <= 2 && console.warn.apply(console, n),
                P.record(n, "warn");
            },
            error: function (t) {
              var e = C(),
                n = Array.prototype.slice.call(arguments);
              (n[0] = e + n[0]),
                R <= 3 && console.error.apply(console, n),
                P.record(n, "error");
            },
            group: function (t) {
              var e = C(),
                n = Array.prototype.slice.call(arguments);
              (n[0] = e + n[0]),
                R <= 1 &&
                  (
                    console.groupCollapsed ||
                    console.group ||
                    console.log
                  ).apply(console, n),
                P.record(n, "group");
            },
            groupEnd: function () {
              console.groupEnd && console.groupEnd.apply(console);
            },
            setLevel: function (t) {
              t != R &&
                (console.log(C() + " set log level from " + R + " to " + t),
                (R = t));
            },
            getLevel: function () {
              return R;
            },
            record: function (e, n) {
              1100 === P._length && (P._data.splice(0, 100), (P._length = 1e3));
              var r = 0,
                i = (e.shift() || "").toString();
              for (
                i = i.replace(/\%c/gi, function (t, e) {
                  return r++, "";
                });
                r-- && e.length;

              )
                e.shift();
              for (var o = 0, a = e.length; o < a; o++)
                "object" == t(e[o]) && (e[o] = "");
              e.unshift(i);
              var s = e.join(" ");
              P._length++, P._data.push("[".concat(n, "]").concat(s));
            },
            getLog: function () {
              return P._data;
            },
            logcss: function (t) {
              return "color:" + t + ";font-weight:900";
            },
          },
          N = {
            WEBSOCKET_CONNECTED: "WEBSOCKET_CONNECTED",
            WEBSOCKET_DOLAUNCH: "WEBSOCKET_DOLAUNCH",
            VERIFYCOOKIE_PASS: "VERIFYCOOKIE_PASS",
            WS_REGISTER_GROUP_RSP: "WS_REGISTER_GROUP_RSP",
            WS_UNREGISTER_GROUP_RSP: "WS_UNREGISTER_GROUP_RSP",
            WS_CONNET_STATE: "WS_CONNET_STATE",
            WS_URI_NOTICE: "WS_URI_NOTICE",
            EXT_TAF_DATA: "extTafData",
            CLOUD_GAME_DATA: "CLOUD_GAME_DATA",
          },
          A = {
            setCookie: function (t, e, n, r, i) {
              var o = new Date();
              o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
              var a = t + "=" + e + "; expires=" + o.toUTCString();
              r && (a += "; domain=" + r),
                i && (a += "; path=" + i),
                (document.cookie = a);
            },
            getCookie: function (t) {
              for (
                var e = t + "=",
                  n = document.cookie.split(";"),
                  r = 0,
                  i = n.length;
                r < i;
                r++
              ) {
                var o = n[r].trim();
                if (0 == o.indexOf(e)) return o.substr(e.length);
              }
              return "";
            },
            clearCookie: function (t) {
              setCookie(t, "", -1);
            },
          },
          M = (function () {
            function t() {
              e(this, t),
                (this.list = []),
                (this.tickHandler = 0),
                (this.trytime = c.config.tryCime || 8);
            }
            return (
              r(t, [
                {
                  key: "add",
                  value: function (t) {
                    -1 != t.id &&
                      ((t.trycount = 1),
                      (t.time = 0),
                      (t.paramlist = t.paramlist || [
                        t.moduleName,
                        t.funcName,
                        t.data,
                        t.id,
                        t.callbackFun,
                      ]),
                      this.list.push(t),
                      this.turnOn());
                  },
                },
                {
                  key: "getCallBack",
                  value: function (t) {
                    for (var e in this.list)
                      if (this.list[e].id == t) return this.list[e].callbackFun;
                    return null;
                  },
                },
                {
                  key: "del",
                  value: function (t) {
                    if (-1 != t)
                      for (var e in this.list)
                        if (this.list[e].id == t) {
                          this.list.splice(e, 1);
                          break;
                        }
                  },
                },
                {
                  key: "getDataById",
                  value: function (t) {
                    for (var e in this.list)
                      if (this.list[e].id == t) return this.list[e];
                    return null;
                  },
                },
                {
                  key: "loop",
                  value: function () {
                    var t = [];
                    for (var e in this.list) {
                      var n = this.list[e];
                      if (n.time < this.trytime) n.time++;
                      else if (
                        (n.trycount++, (n.time = 0), n.trycount > n.tryCountMax)
                      )
                        n.errFun(n.id, n.funcName, n.callbackFun), t.push(n.id);
                      else {
                        var r = n.paramlist;
                        n.reSend && n.reSend.apply(this, r),
                          c.report.setDim(n.id, "trycount", n.trycount);
                      }
                    }
                    for (var i in t) this.del(t[i]);
                    0 == this.list.length && this.turnOff();
                  },
                },
                {
                  key: "turnOn",
                  value: function () {
                    var t = this;
                    0 == this.tickHandler &&
                      (this.tickHandler = setInterval(function () {
                        t.loop();
                      }, 1e3));
                  },
                },
                {
                  key: "turnOff",
                  value: function () {
                    clearInterval(this.tickHandler), (this.tickHandler = 0);
                  },
                },
              ]),
              t
            );
          })(),
          D = {},
          j = null,
          L = {},
          B = {
            addEvent: function (t, e) {
              return (
                void 0 === D[t] && (D[t] = []),
                "function" == typeof e && D[t].push(e),
                this
              );
            },
            removeEvent: function (t, e) {
              if (null != t && t === j)
                return void 0 === L[t] && (L[t] = []), L[t].push(e), this;
              var n = D[t];
              if (n instanceof Array)
                if ("function" == typeof e) {
                  for (var r = 0, i = n.length; r < i; r++)
                    if (n[r] === e) {
                      n.splice(r, 1);
                      break;
                    }
                  0 == n.length && delete D[t];
                } else null == e && delete D[t];
              return this;
            },
            fireEvent: function (t, e) {
              var n = D[(j = t)];
              if (n instanceof Array)
                for (var r = 0, i = n.length; r < i; r++)
                  "function" == typeof n[r] && n[r](e);
              if (((j = null), (n = L[t]) instanceof Array)) {
                for (r = 0, i = n.length; r < i; r++) this.removeEvent(t, n[r]);
                delete L[t];
              }
              return this;
            },
            hasListener: function (t, e) {
              if (!t) return !1;
              var n = D[t];
              if (n instanceof Array)
                if ("function" == typeof e) {
                  for (var r = 0, i = n.length; r < i; r++)
                    if (n[r] === e) return !0;
                } else if (null == e && 0 < n.length) return !0;
              return !1;
            },
          },
          x = (function () {
            function t() {
              e(this, t),
                (this.index = 0),
                (this.MAX_MESSAGE_COUNT = 1e3),
                (this.cacheArr = []);
            }
            return (
              r(t, [
                {
                  key: "cache",
                  value: function (t) {
                    var e = this.cacheArr.indexOf(t);
                    return (
                      this.index >= this.MAX_MESSAGE_COUNT && (this.index = 0),
                      (this.cacheArr[this.index] = t),
                      this.index++,
                      -1 != e
                    );
                  },
                },
              ]),
              t
            );
          })(),
          W = (function () {
            function n() {
              var t = this,
                r =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              e(this, n),
                (this.DEBUG_IP = r.DEBUG_IP || "testws.va.huya.com:80"),
                (this.DEFAULT_IP = r.DEFAULT_IP || "ws.api.huya.com"),
                (this.CDN_IP = r.CDN_IP || "cdnws.api.huya.com"),
                (this.WSS_DEBUG_IP =
                  r.WSS_DEBUG_IP || "testws.va.huya.com:443"),
                (this.WSS_DEFAULT_IP = r.WSS_DEFAULT_IP || "wsapi.huya.com"),
                (this.WSS_CDN_IP = r.WSS_CDN_IP || "cdnws.api.huya.com"),
                (this.HTTP_IP = r.HTTP_IP || "cdnws.api.huya.com"),
                (this.HTTP_DEBUG_IP = r.HTTP_DEBUG_IP || "testws.va.huya.com"),
                (this.STORE_DNS = this.WSS_CDN_IP),
                (this.connected = !1),
                (this.ws = null),
                (this.url = ""),
                (this.wsType = r.wsType || 0),
                (this.listeners = {}),
                (this.lockType = null),
                (this.delayRemove = {}),
                (this._pingTimer = 0),
                (this.isDoLaunch = !1),
                (this.isHttps = -1 < location.protocol.indexOf("https")),
                (this.baseinfo = "?baseinfo=default"),
                (this.wsBaseInfo = "?baseinfo=default"),
                (this.extTafFunNameList = []),
                (this.wsProtocol =
                  !c.ISDEBUG || this.isHttps ? "wss://" : "ws://"),
                (this.connectType = r.connectType || 0),
                (this.wsConnectTime = 0),
                (this.reConnectTimes = 0),
                (this.reconnectDecay = 1.5),
                (this.maxReconnectInterval = 3e4),
                (this.reconnectInterval = 1e3),
                (this.reconnectTimeId = 0),
                (this.reconnectMax = 120),
                (this.cloudGameIpList = []),
                (this.signalCache = new x()),
                (this.wsurl = ""),
                (this.wsIps = []),
                (this.httpWs = []),
                (this.wsBaseInfo = this.setBaseinfo(!1, "")),
                (this.retry = new M()),
                1 != this.connectType &&
                  (P.log("configs", r),
                  P.log("G", c),
                  r.isForeign &&
                    ((this.WSS_DEBUG_IP =
                      r.WSS_DEBUG_IP || "testws.master.live:443"),
                    (this.WSS_DEFAULT_IP = r.WSS_DEFAULT_IP || "wsapi.nimo.tv"),
                    (this.WSS_CDN_IP = r.WSS_CDN_IP || "wsapi-global.nimo.tv"),
                    (this.HTTP_IP = r.HTTP_IP || "wsapi.nimo.tv"),
                    (this.HTTP_DEBUG_IP =
                      r.HTTP_DEBUG_IP || "testws.master.live"),
                    (this.STORE_DNS = this.WSS_DEFAULT_IP),
                    P.log("======", this.WSS_DEBUG_IP)),
                  B.addEvent("1025305", function (e) {
                    t.onWSRedirect(e);
                  }));
            }
            return (
              r(n, [
                {
                  key: "start",
                  value: function () {
                    (this.wsConnectTime = Date.now()),
                      (this._testws = localStorage._testws),
                      (this._testws && "" != this._testws) || c.ISDEBUG
                        ? this.connecting()
                        : this.testWsIp(),
                      setTimeout(
                        function () {
                          this.wsIps.unshift(
                            c.ISDEBUG ? this.CDN_IP : this.WSS_CDN_IP
                          ),
                            this.connecting();
                        }.bind(this),
                        5e3
                      );
                  },
                },
                {
                  key: "testWsIp",
                  value: function (t) {
                    var e;
                    t && 0 < t.length
                      ? (e = t)
                      : c.ISDEBUG
                      ? ((e = O.getIps(this.connectType)),
                        delete localStorage.wssips)
                      : ((e = O.getDns(this.connectType)),
                        delete localStorage.wssdns);
                    var n = e.length;
                    0 == n && this.connecting();
                    for (
                      var r = !1,
                        i = [],
                        o = function (t) {
                          var e = t.currentTarget,
                            n = e.ip;
                          (e.onopen = e.onclose = e.onerror = void 0),
                            r
                              ? (this.wsIps.push(n), e.close())
                              : ((r = !0),
                                (this.url = this.wsProtocol + n),
                                this.connecting(e),
                                this.onopen());
                        },
                        a = function (t) {
                          var e = t.currentTarget.ip;
                          -1 == i.indexOf(e) && i.push(e),
                            i.length != n ||
                              r ||
                              1 == this.connectType ||
                              this.connecting();
                        },
                        s = 0;
                      s < n;
                      s++
                    ) {
                      var u = e[s],
                        l = this.wsProtocol + u + this.wsBaseInfo;
                      P.log("WebSocket", l);
                      var p = new WebSocket(l);
                      (p.ip = u),
                        (p.onopen = o.bind(this)),
                        (p.onclose = a.bind(this)),
                        (p.onerror = a.bind(this));
                    }
                  },
                },
                {
                  key: "connecting",
                  value: function (t) {
                    if (!this.connected) {
                      if ((P.log("connecting"), this.ws)) {
                        this.releaseWs(this.ws);
                        var e = this.url.replace(this.wsProtocol, "");
                        1 == this.wsType
                          ? this.wsIps.push(e)
                          : 2 == this.wsType && this.httpWs.push(e);
                      }
                      if (t) (this.ws = t), (this.wsType = 1);
                      else {
                        var n = "",
                          r = localStorage._testws;
                        r && "" != r
                          ? ((this.wsType = 3), (n = r))
                          : ((this.wsType = 0),
                            (n = c.ISDEBUG
                              ? this.DEFAULT_IP
                              : this.WSS_DEFAULT_IP),
                            c.report.setCommonDim("iptype", 2),
                            c.ISDEBUG
                              ? ((this.wsType = 4),
                                (n = this.isHttps
                                  ? this.WSS_DEBUG_IP
                                  : this.DEBUG_IP),
                                c.report.setCommonDim("iptype", 1))
                              : 0 < this.wsIps.length
                              ? ((this.wsType = 1),
                                (n = this.wsIps.shift()),
                                this.WSS_CDN_IP == n
                                  ? c.report.setCommonDim("iptype", 5)
                                  : c.report.setCommonDim("iptype", 4))
                              : 0 < this.httpWs.length &&
                                ((this.wsType = 2), (n = this.httpWs.shift()))),
                          (this.url = this.wsProtocol + n),
                          P.log("WebSocket,connet", this.url + this.wsBaseInfo),
                          (this.ws = new WebSocket(this.url + this.wsBaseInfo));
                      }
                      (this.ws.onopen = this.onopen.bind(this)),
                        (this.ws.onclose = this.onclose.bind(this)),
                        (this.ws.onerror = this.onerror.bind(this)),
                        (this.ws.onmessage = this.onmessage.bind(this));
                    }
                  },
                },
                {
                  key: "releaseWs",
                  value: function (t) {
                    if (t) {
                      P.log("===== releaseWs =====", t),
                        clearInterval(this._pingTimer),
                        (this._pingTimer = 0),
                        (t.onopen =
                          t.onclose =
                          t.onerror =
                          t.onmessage =
                            void 0);
                      try {
                        t.close();
                      } catch (t) {}
                    }
                  },
                },
                {
                  key: "doLaunch",
                  value: function () {
                    if (!this.isDoLaunch) {
                      this.isDoLaunch = !0;
                      var t = new f.WSLaunchReq();
                      (t.lUid = c.uid),
                        (t.sGuid = c.guid),
                        (t.sUA = c.ua),
                        (t.sAppSrc = c.appSrc),
                        this.sendWup(
                          "launch",
                          "wsLaunch",
                          t,
                          this.onDoLaunch.bind(this)
                        );
                    }
                  },
                },
                {
                  key: "onDoLaunch",
                  value: function (t) {
                    if (
                      (c.guid != t.sGuid &&
                        ((c.guid = t.sGuid),
                        (c.userId.sGuid = c.guid),
                        this.sendWSUpdateUserInfoReq("", t.sGuid)),
                      localStorage)
                    )
                      try {
                        localStorage.setItem("_SIGNAL_GUID_", c.guid);
                      } catch (t) {}
                    window._SIGNAL_GUID_ = c.guid;
                    var e = c.config.domain || "";
                    A.setCookie("guid", t.sGuid, 365, e, "/"),
                      this.queryHttpDns(),
                      B.fireEvent(N.WEBSOCKET_DOLAUNCH, { guid: c.guid });
                  },
                },
                {
                  key: "queryHttpDns",
                  value: function () {
                    var t,
                      e = this,
                      n = new f.QueryHttpDnsReq();
                    (n.lUid = c.uid),
                      (n.sUA = c.ua),
                      (n.sAppSrc = c.appSrc),
                      (n.iIpType = 1);
                    var r = [this.STORE_DNS];
                    (t = n.vDomain.value).push.apply(t, r),
                      this.sendWupHttp(
                        "launch",
                        "queryHttpDns",
                        n,
                        -1,
                        function (t) {
                          e.onGueryHttpDns(t);
                        }
                      );
                  },
                },
                {
                  key: "onGueryHttpDns",
                  value: function (t) {
                    if (!c.ISDEBUG)
                      for (var e in t.mDomain2Ip.value)
                        if (e == this.STORE_DNS) {
                          var n = t.mDomain2Ip.value[e].vIp.value;
                          O.storeDns(n, this.connectType);
                          break;
                        }
                  },
                },
                {
                  key: "send",
                  value: function (t) {
                    this.ws && this.connected && this.ws.send(t);
                  },
                },
                {
                  key: "onopen",
                  value: function () {
                    var t = this;
                    (this.wsurl = this.url.replace(this.wsProtocol, "")),
                      this.connected ||
                        0 != this.reConnectTimes ||
                        (this.wsConnectTime = Date.now() - this.wsConnectTime),
                      P.log("onopen", this.wsurl),
                      (this.connected = !0),
                      B.fireEvent(N.WEBSOCKET_CONNECTED, {
                        type: this.connectType,
                      }),
                      B.fireEvent(N.WS_CONNET_STATE, {
                        connected: this.connected,
                        type: "open",
                        connectType: this.connectType,
                      }),
                      clearInterval(this._pingTimer),
                      (this._pingTimer = setInterval(function () {
                        t.sendHeartBeat();
                      }, 6e4)),
                      (this.reConnectTimes = 0),
                      clearTimeout(this.reconnectTimeId),
                      1 != this.connectType &&
                        (this.doLaunch(), this.sendVerifyCookie());
                  },
                },
                {
                  key: "onclose",
                  value: function (t) {
                    var e = this;
                    if (
                      ((this.connected = !1),
                      (this.isDoLaunch = !1),
                      B.fireEvent(N.WS_CONNET_STATE, {
                        connected: this.connected,
                        type: "close",
                        code: t.code,
                        reason: t.reason,
                        connectType: this.connectType,
                      }),
                      this.reConnectTimes++,
                      this.reConnectTimes > this.reconnectMax)
                    )
                      P.log(
                        "%c=== WebSocket重连次数超标 ===",
                        "font-size:120%"
                      );
                    else {
                      1 == this.connectType && (this.reconnectDecay = 0.1);
                      var n =
                        this.reconnectInterval *
                        Math.pow(this.reconnectDecay, this.reConnectTimes);
                      clearTimeout(this.reconnectTimeId),
                        (this.reconnectTimeId = setTimeout(
                          function () {
                            e.reconnect(!0),
                              P.log(
                                "%c=== WebSocket 重连" +
                                  e.reConnectTimes +
                                  "===" +
                                  e.wsurl,
                                "font-size:120%"
                              );
                          },
                          n > this.maxReconnectInterval
                            ? this.maxReconnectInterval
                            : n
                        ));
                    }
                  },
                },
                {
                  key: "reconnetWS",
                  value: function () {
                    this.wsconnected ||
                      ((this.reConnectTimes = 0),
                      (this.isDoLaunch = !1),
                      this.connecting());
                  },
                },
                {
                  key: "onerror",
                  value: function (t) {
                    (this.connected = !1),
                      B.fireEvent(N.WS_CONNET_STATE, {
                        connected: this.connected,
                        type: "error",
                        connectType: this.connectType,
                      }),
                      P.log("%c=== WebSocket Error ===", "font-size:120%", t);
                  },
                },
                {
                  key: "sendHeartBeat",
                  value: function () {
                    var t = new f.WebSocketCommand();
                    t.iCmdType = f.EWebSocketCommandType.EWSCmdC2S_HeartBeatReq;
                    var e = new u.JceOutputStream();
                    t.writeTo(e), this.send(e.getBuffer());
                  },
                },
                {
                  key: "onmessage",
                  value: function (t) {
                    var e = this,
                      n = new FileReader();
                    (n.onload = function () {
                      e.decodeTaf(n);
                    }),
                      n.readAsArrayBuffer(t.data);
                  },
                },
                {
                  key: "decodeTaf",
                  value: function (t) {
                    var e = t.result;
                    1 < localStorage.__wup && u.Util.jcestream(e, 32);
                    var n = new u.JceInputStream(e),
                      r = new f.WebSocketCommand();
                    switch ((r.readFrom(n), r.iCmdType)) {
                      case f.EWebSocketCommandType.EWSCmd_RegisterRsp:
                        n = new u.JceInputStream(r.vData.buffer);
                        var i = new f.WSRegisterRsp();
                        i.readFrom(n), B.fireEvent("WSRegisterRsp", i);
                        break;
                      case f.EWebSocketCommandType.EWSCmdS2C_RegisterGroupRsp:
                        n = new u.JceInputStream(r.vData.buffer);
                        var o = new f.WSRegisterGroupRsp();
                        o.readFrom(n),
                          P.log(
                            "%c<<<<<<< %crspregisterGroup",
                            P.logcss("#0000E3"),
                            P.logcss("#D9006C"),
                            o
                          ),
                          B.fireEvent(N.WS_REGISTER_GROUP_RSP, o),
                          this.retry.del("group");
                        break;
                      case f.EWebSocketCommandType.EWSCmdS2C_UnRegisterGroupRsp:
                        n = new u.JceInputStream(r.vData.buffer);
                        var a = new f.WSUnRegisterGroupRsp();
                        a.readFrom(n),
                          P.log(
                            "%c<<<<<<< %crspunRegisterGroup",
                            P.logcss("#0000E3"),
                            P.logcss("#D9006C"),
                            a
                          ),
                          B.fireEvent(N.WS_UNREGISTER_GROUP_RSP, a);
                        break;
                      case f.EWebSocketCommandType.EWSCmd_WupRsp:
                        var s = new u.Wup();
                        s.decode(r.vData.buffer);
                        var l = -1,
                          p = !1;
                        try {
                          l = s.readInt32("");
                        } catch (t) {
                          (p = !0), P.log("获取返回值失败", t);
                        }
                        var h = s.iRequestId,
                          v = s.sFuncName,
                          y = s.sServantName;
                        c.report.setField(h, "hysignal_response"),
                          c.report.setDim(h, "retcode", l),
                          l < 0
                            ? c.report.setDim(h, "success", m)
                            : c.report.setDim(h, "success", d),
                          c.report.setField(h, "decode_response_begin"),
                          c.report.setField(h, "unipacket_decode_begin"),
                          c.report.setField(h, "unipacket_decode_end"),
                          this.fireExtTafData(0, v, r.vData.buffer);
                        var g = k.WupMapping[v],
                          b = this.retry.getCallBack(h),
                          w = { id: h, fn: v, cb: b };
                        if (g) {
                          var S = new g();
                          S.bcode = l;
                          try {
                            if (0 <= l) {
                              var _ = 3 == s.iVersion ? s.newdata : s.data,
                                T = this.getWupKey(_, p);
                              c.report.setField(h, "unipacket_read_rsp_end"),
                                "noKey" != T && s.readStruct(T, S, g);
                            }
                          } catch (t) {
                            return (
                              P.log("ConstEnum.SIGNAL_ERROR_READ_ERROR", t),
                              (w.code = E),
                              void this.reportError(w)
                            );
                          }
                          c.report.setField(h, "decode_response_end"),
                            0 < h && (S.iRequestId = h),
                            P.log(
                              "%c<<<<<<< %crspWup:%c " + v,
                              P.logcss("#0000E3"),
                              P.logcss("black"),
                              P.logcss("#0000E3"),
                              y,
                              S
                            ),
                            c.report.setField(h, "join_dispatcher_thread"),
                            c.report.setField(
                              h,
                              "dispatcher_thread_execute_time"
                            ),
                            (S.sdkcode = 0),
                            B.fireEvent(0 < h ? v + h : v, S);
                        } else
                          b && b({ sdkcode: I, bcode: l }),
                            c.report.clearData(h),
                            this.retry.del(h);
                        break;
                      case f.EWebSocketCommandType.EWSCmdS2C_MsgPushReq:
                        (n = new u.JceInputStream(r.vData.buffer)),
                          (L = new f.WSPushMessage()).readFrom(n);
                        var O = L.iUri,
                          R = L.lMsgId,
                          U = L.sGroupId,
                          C = this.signalCache.cache(R);
                        if (R && C) return void P.log("重复的消息id", R, U);
                        n = new u.JceInputStream(L.sMsg.buffer);
                        var A = k.UriMapping[L.iUri];
                        if (A) {
                          var M = new A();
                          M.readFrom(n),
                            P.log(
                              "%c<<<<<<< %crspMsgPush, %curi=" + O,
                              P.logcss("#0000E3"),
                              P.logcss("black"),
                              P.logcss("#8600FF"),
                              M
                            ),
                            B.fireEvent(O, M);
                        } else
                          P.log("收到未映射的 WSPushMessage，uri=" + L.iUri);
                        B.fireEvent("origin:" + O, {
                          data: L.sMsg.buffer,
                          groupId: U,
                          connectType: this.connectType,
                        }),
                          B.fireEvent(N.WS_URI_NOTICE, {
                            uri: O,
                            data: L.sMsg.buffer,
                            groupId: U,
                            connectType: this.connectType,
                          }),
                          this.fireExtTafData(O, "", L.sMsg.buffer);
                        break;
                      case f.EWebSocketCommandType.EWSCmdS2C_HeartBeatRsp:
                        break;
                      case f.EWebSocketCommandType.EWSCmdS2C_VerifyCookieRsp:
                        n = new u.JceInputStream(r.vData.buffer);
                        var D = new f.WSVerifyCookieRsp();
                        D.readFrom(n);
                        var j = 0 == D.iValidate;
                        B.fireEvent(N.VERIFYCOOKIE_PASS, j),
                          P.log("VerifyCookie校验" + (j ? "通过！" : "失败！"));
                        break;
                      case f.EWebSocketCommandType.EWSCmdS2C_MsgPushReq_V2:
                        var L;
                        (n = new u.JceInputStream(r.vData.buffer)),
                          (L = new f.WSPushMessage_V2()).readFrom(n);
                        for (
                          var x = 0, W = L.vMsgItem.value.length;
                          x < W;
                          x++
                        ) {
                          var G = L.vMsgItem.value[x],
                            F = G.iUri,
                            H = G.lMsgId,
                            V = k.UriMapping[F],
                            q = L.sGroupId,
                            J = this.signalCache.cache(H);
                          if (H && J) P.log("重复的消息id", H, q);
                          else if (
                            (B.fireEvent("origin:" + F, {
                              data: G.sMsg.buffer,
                              groupId: q,
                              connectType: this.connectType,
                            }),
                            B.fireEvent(N.WS_URI_NOTICE, {
                              uri: F,
                              data: G.sMsg.buffer,
                              groupId: q,
                              connectType: this.connectType,
                            }),
                            this.fireExtTafData(F, "", G.sMsg.buffer),
                            V)
                          ) {
                            var K = new V(),
                              z = new u.JceInputStream(G.sMsg);
                            K.readFrom(z),
                              P.log(
                                "%c<<<<<<< %crspMsgPushV2, %curi=" + F,
                                P.logcss("#0000E3"),
                                P.logcss("black"),
                                P.logcss("#8600FF"),
                                K
                              ),
                              B.fireEvent(F, K);
                          } else
                            P.log("收到未映射的 WSPushMessage_V2 uri=" + F);
                        }
                        break;
                      case f.EWebSocketCommandType.EWSCmdS2C_CloudGamePush:
                        n = new u.JceInputStream(r.vData.buffer);
                        var Q = new f.CloudGamePacket();
                        Q.readFrom(n),
                          Q.sRequestId,
                          B.fireEvent(N.CLOUD_GAME_DATA, Q),
                          P.log(
                            "%c<<<<<<< %ccloundGameData:",
                            P.logcss("#0000E3"),
                            P.logcss("black"),
                            Q
                          );
                        break;
                      default:
                        P.log("%c<<<<<<< Not matched CmdType: " + r.iCmdType);
                    }
                  },
                },
                {
                  key: "getWupKey",
                  value: function (t, e) {
                    return t.get("tRsp")
                      ? "tRsp"
                      : e && t.get("")
                      ? ""
                      : "noKey";
                  },
                },
                {
                  key: "onWSRedirect",
                  value: function (t) {
                    var e = t.vRemoveIps.value;
                    P.log("---onWSRedirect---"),
                      P.log("vRemoveIps", e),
                      P.log("this.wsurl", this.wsurl);
                    for (var n = 0; n < this.wsIps.length; n++)
                      for (var r = 0; r < e.length; r++)
                        this.wsIps[n] == e[r] && this.wsIps.splice(n, 1),
                          this.wsurl == e[r] && this.reconnect();
                    P.log("storeDns", this.wsIps),
                      O.storeDns(this.wsIps, this.connectType);
                  },
                },
                {
                  key: "reconnect",
                  value: function (t) {
                    t || (this.reConnectTimes = 0),
                      this.releaseWs(this.ws),
                      (this.ws = null),
                      (this.connected = !1),
                      (this.isDoLaunch = !1),
                      1 == this.connectType
                        ? this.connectIPList(this.cloudGameIpList)
                        : this.connecting();
                  },
                },
                {
                  key: "_sendWup",
                  value: function (t, e, n, r, i) {
                    P.log(
                      "%c>>>>>>> %creqWup: %c" + e,
                      P.logcss("#009100"),
                      P.logcss("black"),
                      P.logcss("#009100"),
                      t,
                      n
                    ),
                      c.report.setDim(r, "path", "/" + t + "/" + e),
                      c.report.setDim(r, "channel", "ws"),
                      c.report.setDim(r, "ip", this.wsurl),
                      c.report.setDim(
                        r,
                        "curl",
                        (window.location && window.location.href) || ""
                      ),
                      c.report.setField(r, "unipacket_encode_begin");
                    var o = { id: r, fn: e, cb: i };
                    try {
                      var a = new u.Wup();
                      a.setServant(t),
                        a.setFunc(e),
                        a.setRequestId(r),
                        a.writeStruct("tReq", n);
                      var s = new f.WebSocketCommand();
                      (s.iCmdType = f.EWebSocketCommandType.EWSCmd_WupReq),
                        (s.vData = a.encode());
                      var l = c.report.getTraceId(r);
                      if (l) {
                        var p = ""
                          .concat(l, ":")
                          .concat(l, ":")
                          .concat(0, ":")
                          .concat(c.enableTrace);
                        s.traceId = p;
                      }
                      var h = new u.JceOutputStream();
                      s.writeTo(h),
                        c.report.setField(r, "unipacket_encode_end");
                    } catch (t) {
                      return P.log(t), (o.code = _), void this.reportError(o);
                    }
                    try {
                      this.send(h.getBuffer());
                    } catch (t) {
                      return P.log(t), (o.code = S), void this.reportError(o);
                    }
                    c.report.setField(r, "hysignal_enqueue");
                  },
                },
                {
                  key: "sendWup",
                  value: function (t, e, n, r, i, o) {
                    var a = this,
                      s = 3 < arguments.length && void 0 !== r ? r : null,
                      u = 4 < arguments.length && void 0 !== i ? i : -1,
                      l = 5 < arguments.length && void 0 !== o ? o : 1,
                      p = +new Date();
                    "function" == typeof s &&
                      B.addEvent(0 < u ? e + u : e, function n(r) {
                        c.report.setField(u, "execute_end"),
                          s && s(r),
                          a.sendReport(u),
                          c.report.clearData(u),
                          a.retry.del(u),
                          B.removeEvent(0 < u ? e + u : e, n),
                          c.reportAPI &&
                            c.reportAPI({
                              type: "reportApiTime",
                              state: "end",
                              moduleName: t,
                              funcName: e,
                              startTime: p,
                              endTime: +new Date(),
                            });
                      });
                    var f = {
                      id: u,
                      reSend: this._sendWup.bind(this),
                      moduleName: t,
                      funcName: e,
                      data: n,
                      tryCountMax: l,
                      errFun: this.sendTimeoutReport.bind(this),
                      callbackFun: s,
                    };
                    this.retry.add(f),
                      this._sendWup(t, e, n, u, s),
                      c.reportAPI &&
                        c.reportAPI({
                          type: "reportApiTime",
                          state: "start",
                          moduleName: t,
                          funcName: e,
                          startTime: p,
                        });
                  },
                },
                {
                  key: "sendRegister",
                  value: function (t) {
                    var e = new u.JceOutputStream();
                    t.writeTo(e);
                    var n = new f.WebSocketCommand();
                    (n.iCmdType = f.EWebSocketCommandType.EWSCmd_RegisterReq),
                      (n.vData = e.getBinBuffer()),
                      (e = new u.JceOutputStream()),
                      n.writeTo(e),
                      this.send(e.getBuffer());
                  },
                },
                {
                  key: "sendRegisterGroup",
                  value: function (t, e) {
                    var n = this;
                    this._sendRegisterGroup(t, e);
                    var r = {
                      id: "group",
                      reSend: function (t, e) {
                        var r = 1 < arguments.length && void 0 !== e ? e : "";
                        n._sendRegisterGroup(t, r);
                      },
                      moduleName: "group",
                      funcName: "group",
                      data: null,
                      tryCountMax: 2,
                      errFun: this.sendRegisterGroupErr,
                      callbackFun: null,
                      paramlist: [t],
                    };
                    this.retry.add(r);
                  },
                },
                {
                  key: "_sendRegisterGroup",
                  value: function (t, e) {
                    var n,
                      r = new f.WSRegisterGroupReq();
                    (n = r.vGroupId.value).push.apply(n, a(t)),
                      (r.sToken = e || ""),
                      P.log(
                        "%c>>>>>>> %creqRegisterGroup:",
                        P.logcss("#009100"),
                        P.logcss("#D26900"),
                        r
                      );
                    var i = new u.JceOutputStream();
                    r.writeTo(i);
                    var o = new f.WebSocketCommand();
                    (o.iCmdType =
                      f.EWebSocketCommandType.EWSCmdC2S_RegisterGroupReq),
                      (o.vData = i.getBinBuffer()),
                      (i = new u.JceOutputStream()),
                      o.writeTo(i),
                      this.send(i.getBuffer());
                  },
                },
                {
                  key: "sendRegisterGroupErr",
                  value: function () {
                    P.log("进组重试超过次数");
                  },
                },
                {
                  key: "sendUnRegisterGroup",
                  value: function (t) {
                    var e,
                      n = new f.WSUnRegisterGroupReq();
                    (e = n.vGroupId.value).push.apply(e, a(t)),
                      P.log(
                        "%c>>>>>>> %creqUnRegisterGroup:",
                        P.logcss("#009100"),
                        P.logcss("#D26900"),
                        n
                      );
                    var r = new u.JceOutputStream();
                    n.writeTo(r);
                    var i = new f.WebSocketCommand();
                    (i.iCmdType =
                      f.EWebSocketCommandType.EWSCmdC2S_UnRegisterGroupReq),
                      (i.vData = r.getBinBuffer()),
                      (r = new u.JceOutputStream()),
                      i.writeTo(r),
                      this.send(r.getBuffer()),
                      this.retry.del("group");
                  },
                },
                {
                  key: "sendWSUpdateUserInfoReq",
                  value: function (t, e) {
                    P.log(">>>>>>>  sendWSUpdateUserInfoReq:", t, e);
                    var n = new f.WSUpdateUserInfoReq();
                    (n.sAppSrc = t || c.appSrc), (n.sGuid = e || c.guid);
                    var r = new u.JceOutputStream();
                    n.writeTo(r);
                    var i = new f.WebSocketCommand();
                    (i.iCmdType =
                      f.EWebSocketCommandType.EWSCmdC2S_UpdateUserInfoReq),
                      (i.vData = r.getBinBuffer()),
                      (r = new u.JceOutputStream()),
                      i.writeTo(r),
                      this.send(r.getBuffer());
                  },
                },
                {
                  key: "sendVerifyCookie",
                  value: function () {
                    var t = new f.WSVerifyCookieReq();
                    (t.lUid = c.uid),
                      (t.sGuid = c.guid),
                      (t.sUA = c.ua),
                      (t.bAutoRegisterUid = 1),
                      (t.sAppSrc = c.appSrc),
                      (t.sCookie = document.cookie);
                    var e = new u.JceOutputStream();
                    t.writeTo(e);
                    var n = new f.WebSocketCommand();
                    (n.iCmdType =
                      f.EWebSocketCommandType.EWSCmdC2S_VerifyCookieReq),
                      (n.vData = e.getBinBuffer()),
                      (e = new u.JceOutputStream()),
                      n.writeTo(e),
                      this.send(e.getBuffer()),
                      P.log("VerifyCookie:", t);
                  },
                },
                {
                  key: "sendReport",
                  value: function (t) {
                    if (-1 !== t && !(c.enableTrace <= 0)) {
                      var e = new f.MetricDetailSet(),
                        n = new f.UserId();
                      O.copy(n, c.userId),
                        (n.sHuYaUA =
                          c.config.APPID.toLowerCase() +
                          "&" +
                          c.ver +
                          "&signalsdk"),
                        (e.tId = n),
                        e.vMetricDetail.value.push(this.createDetailById(t)),
                        P.log("sendReport", e),
                        this.sendReportHttp("metric", "reportDetailV2", e);
                    }
                  },
                },
                {
                  key: "createDetailById",
                  value: function (t) {
                    var e = new f.MetricDetail();
                    (e.sMetricName = "hymtp.hyns.monitor.client"),
                      (e.iTS = Date.now());
                    var n = c.report.getFieldData(t),
                      r = c.report.getDimData(t);
                    return (
                      this.fillField(n, e.vFiled.value),
                      this.fillDimension(r, e.vDimension.value),
                      e
                    );
                  },
                },
                {
                  key: "fillField",
                  value: function (t, e) {
                    if (t)
                      for (var n in t) {
                        var r = new f.Field();
                        (r.sName = n), (r.fValue = t[n]), e.push(r);
                      }
                  },
                },
                {
                  key: "fillDimension",
                  value: function (t, e) {
                    for (var n in t) {
                      var r = new f.Dimension();
                      (r.sName = n), (r.sValue = t[n]), e.push(r);
                    }
                  },
                },
                {
                  key: "sendDataMetric",
                  value: function (t, e) {
                    var n = new f.MetricDetailSet(),
                      r = new f.UserId();
                    O.copy(r, c.userId), e && (r.sHuYaUA = e), (n.tId = r);
                    var i = Date.now();
                    for (var o in t)
                      n.vMetricDetail.value.push(this.createDetail(t[o], i));
                    P.log("sendDataMetric", n),
                      this.sendReportHttp("metric", "reportDetailV2", n);
                  },
                },
                {
                  key: "createDetail",
                  value: function (t, e) {
                    var n = new f.MetricDetail();
                    return (
                      (n.sMetricName = t.sMetricName),
                      (n.iTS = e),
                      this.fillField(t.vField, n.vFiled.value),
                      this.fillDimension(t.vDimension, n.vDimension.value),
                      this.fillExLog(t.vExLog, n.vExLog.value),
                      n
                    );
                  },
                },
                {
                  key: "fillExLog",
                  value: function (t, e) {
                    this.fillDimension(t, e);
                  },
                },
                {
                  key: "rspDecode",
                  value: function (t, e) {
                    var n = new u.Wup();
                    n.decode(t);
                    var r = k.WupMapping[n.sFuncName];
                    if (r) {
                      var i = new r(),
                        o = 3 == n.iVersion ? n.newdata : n.data,
                        a = this.getWupKey(o);
                      return n.readStruct(a, i, e), i;
                    }
                    return null;
                  },
                },
                {
                  key: "sendReportHttp",
                  value: function (t, e, n) {
                    var r = new u.Wup();
                    r.setServant(t), r.setFunc(e), r.writeStruct("tReq", n);
                    var i = r.encode().getBuffer(),
                      o = new Date().getTime(),
                      a = c.config.reportUrl || "https://statwup.huya.com";
                    u.Util.ajax(
                      a + "?timestamp=" + o,
                      i,
                      function () {},
                      function (t) {
                        P.log("上报失败", t);
                      }
                    );
                  },
                },
                {
                  key: "sendExtWup",
                  value: function (t) {
                    var e = t.buff,
                      n = t.funcName;
                    -1 == this.extTafFunNameList.indexOf(n) &&
                      this.extTafFunNameList.push(n),
                      e && this.send(e);
                  },
                },
                {
                  key: "fireExtTafData",
                  value: function (t, e, n) {
                    (t || (e && -1 != this.extTafFunNameList.indexOf(e))) &&
                      B.fireEvent(N.EXT_TAF_DATA, {
                        uri: t,
                        funcName: e,
                        data: n,
                      });
                  },
                },
                {
                  key: "sendWupHttp",
                  value: function (t, e, n, r, i) {
                    var o = this,
                      a = +new Date(),
                      s = { id: r, fn: e, cb: i },
                      l = new u.Wup();
                    c.report.setDim(r, "path", "/" + t + "/" + e),
                      c.report.setField(r, "unipacket_encode_begin"),
                      c.report.setDim(r, "channel", "http"),
                      c.report.setDim(
                        r,
                        "curl",
                        (window.location && window.location.href) || ""
                      );
                    var p = c.ISDEBUG ? this.HTTP_DEBUG_IP : this.HTTP_IP;
                    c.report.setDim(r, "ip", p);
                    try {
                      l.setServant(t),
                        l.setFunc(e),
                        l.setRequestId(r),
                        l.writeStruct("tReq", n),
                        P.log(
                          "%c>>>>>>> %c http reqWup: %c" + e,
                          P.logcss("#009100"),
                          P.logcss("black"),
                          P.logcss("#009100"),
                          t,
                          n
                        );
                      var f = l.encode().getBuffer();
                    } catch (n) {
                      return (
                        P.log("writeStruct错误", n),
                        (s.code = _),
                        void this.reportError(s)
                      );
                    }
                    var h = new Date().getTime(),
                      v = c.report.getTraceId(r);
                    v &&
                      (v = ""
                        .concat(v, ":")
                        .concat(v, ":")
                        .concat(0, ":")
                        .concat(c.enableTrace)),
                      (this.baseinfo = this.setBaseinfo(!0, v));
                    var y = "https://".concat(p).concat(this.baseinfo);
                    c.report.setField(r, "unipacket_encode_end"),
                      c.report.setField(r, "hysignal_enqueue");
                    try {
                      u.Util.ajax(
                        y + "&timestamp=" + h,
                        f,
                        function (n) {
                          var r, l;
                          try {
                            (r = new u.Wup()).decode(n);
                          } catch (n) {
                            return (
                              P.log("decodewup错误", n),
                              (s.code = w),
                              void o.reportError(s)
                            );
                          }
                          var p = !1;
                          try {
                            l = r.readInt32("");
                          } catch (n) {
                            p = !0;
                          }
                          var f = r.iRequestId,
                            h = r.sFuncName,
                            v = r.sServantName;
                          c.report.setField(f, "hysignal_response"),
                            c.report.setDim(f, "retcode", l),
                            l < 0
                              ? c.report.setDim(f, "success", m)
                              : c.report.setDim(f, "success", d),
                            c.report.setField(f, "decode_response_begin"),
                            c.report.setField(f, "unipacket_decode_begin"),
                            c.report.setField(f, "unipacket_decode_end");
                          var y = k.WupMapping[h];
                          if (y) {
                            var g = new y();
                            g.bcode = l;
                            try {
                              if (0 <= l) {
                                var b = 3 == r.iVersion ? r.newdata : r.data,
                                  S = o.getWupKey(b, p);
                                c.report.setField(f, "unipacket_read_rsp_end"),
                                  "noKey" != S && r.readStruct(S, g, y);
                              }
                            } catch (n) {
                              return (
                                P.log("readStruct错误", n),
                                (s.code = E),
                                void o.reportError(s)
                              );
                            }
                            c.report.setField(f, "decode_response_end"),
                              0 < f && (g.iRequestId = f),
                              P.log(
                                "%c<<<<<<< %chttp rspWup:%c" + e,
                                P.logcss("#0000E3"),
                                P.logcss("black"),
                                P.logcss("#0000E3"),
                                v,
                                g
                              ),
                              c.report.setField(f, "join_dispatcher_thread"),
                              c.report.setField(
                                f,
                                "dispatcher_thread_execute_time"
                              ),
                              c.report.setField(f, "execute_end"),
                              o.sendReport(f),
                              (g.sdkcode = 0),
                              i && i(g),
                              c.reportAPI &&
                                c.reportAPI({
                                  type: "reportApiTime",
                                  state: "end",
                                  servantName: t,
                                  funcName: e,
                                  startTime: a,
                                  endTime: +new Date(),
                                });
                          } else
                            i && i({ sdkcode: I, bcode: l }),
                              c.report.clearData(f),
                              o.retry.del(f);
                        },
                        function (n) {
                          (s.code = T),
                            o.reportError(s, n),
                            P.log("http请求失败", t, e, n);
                        }
                      ),
                        c.reportAPI &&
                          c.reportAPI({
                            type: "reportApiTime",
                            state: "start",
                            servantName: t,
                            funcName: e,
                            startTime: a,
                          });
                    } catch (n) {
                      P.log("http请求error", n),
                        (s.code = S),
                        this.reportError(s);
                    }
                  },
                },
                {
                  key: "sendTimeoutReport",
                  value: function (t, e, n) {
                    var r = { id: t, fn: e, code: y, cb: n };
                    this.reportError(r);
                  },
                },
                {
                  key: "reportError",
                  value: function (t, e) {
                    var n = t.fn,
                      r = t.id,
                      i = t.code;
                    c.report.setDim(r, "retcode", i),
                      c.report.setDim(r, "success", v),
                      c.report.setField(r, "execute_end"),
                      this.sendReport(r),
                      c.report.clearData(r),
                      this.retry.del(r);
                    var o,
                      a = k.WupMapping[n];
                    if (a) {
                      var s = new a();
                      (s.bcode = void 0 === e ? 0 : e),
                        (s.sdkcode = i),
                        t.cb && (t.cb(s), B.removeEvent(n + r, t.cb));
                    } else
                      (o = { sdkcode: i }),
                        t.cb && (t.cb(o), B.removeEvent(n + r, t.cb));
                  },
                },
                {
                  key: "setBaseinfo",
                  value: function (t, e) {
                    try {
                      var n = this.makeBaseInfo(t, e);
                      return P.log("baseinfo", n), n;
                    } catch (t) {
                      return P.log("setBaseinfo", t), "?baseinfo=default";
                    }
                  },
                },
                {
                  key: "makeBaseInfo",
                  value: function (e, n) {
                    var r = new f.WSConnectParaInfo();
                    (r.lUid = c.uid),
                      (r.sGuid = c.guid || ""),
                      (r.sUA = c.ua),
                      (r.sAppSrc = c.appSrc),
                      e &&
                        ((r.sCookie = document.cookie), n && (r.sTraceId = n));
                    var i = c.config.customHeaders;
                    i && "object" === t(i) && O.copy(r.mCustomHeaders.value, i);
                    var o = new u.JceOutputStream();
                    r.writeTo(o);
                    var a = o.getBuffer(),
                      s = O.ab2str(a, !1),
                      l = window.btoa(s);
                    return "?baseinfo=".concat(encodeURIComponent(l));
                  },
                },
                {
                  key: "connectIPList",
                  value: function (t) {
                    for (
                      var e = [], n = 0, r = (this.cloudGameIpList = t).length;
                      n < r;
                      n++
                    ) {
                      var i = t[n],
                        o = i.host,
                        a = i.ip,
                        s = this.isHttps ? "".concat(o) : "".concat(a || o);
                      e.push(s);
                    }
                    this.testWsIp(e);
                  },
                },
                {
                  key: "sendCloudGameReq",
                  value: function (t) {
                    var e = new u.JceOutputStream();
                    t.writeTo(e);
                    var n = new f.WebSocketCommand();
                    (n.iCmdType =
                      f.EWebSocketCommandType.EWSCmdC2S_CloudGameReq),
                      (n.vData = e.getBinBuffer()),
                      (e = new u.JceOutputStream()),
                      n.writeTo(e),
                      this.send(e.getBuffer()),
                      P.log(
                        "%c>>>>>>> %csendCloudGameReq:",
                        P.logcss("#009100"),
                        P.logcss("black"),
                        t
                      );
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this.releaseWs(this.ws), (this.ws = null);
                  },
                },
                {
                  key: "getCurrentWSUrl",
                  value: function () {
                    return this.wsurl;
                  },
                },
                {
                  key: "logcss",
                  value: function (t) {
                    return "color:" + t + ";font-weight:900";
                  },
                },
              ]),
              n
            );
          })(),
          G = (function () {
            function t() {
              e(this, t),
                (this.fieldsList = {}),
                (this.dimsList = {}),
                (this.dims = {});
              var n =
                window.navigator &&
                window.navigator.connection &&
                window.navigator.connection.effectiveType;
              (this.dims.appid = c.config.APPID.toLowerCase()),
                (this.dims.platform = "web"),
                (this.dims.schema = "hysignal"),
                (this.dims.nettype = n || ""),
                (this.dims.osver = c.config.osver || ""),
                (this.dims.iptype = "0"),
                (this.dims.device = c.config.device || ""),
                (this.dims.sguid = c.config.guid),
                (this.dims.ns_version = c.ver),
                (this.dims.ns_compat = "0"),
                (this.dims.trycount = 1),
                (this.dims.prodenv = c.ISDEBUG ? "test" : "prod");
            }
            return (
              r(t, [
                {
                  key: "setField",
                  value: function (t, e) {
                    this.fieldsList[t] = this.fieldsList[t] || {};
                    var n = this.fieldsList[t];
                    (n.ctime =
                      n.ctime ||
                      (performance && performance.now()) ||
                      Date.now()),
                      (n.data = n.data || {});
                    var r = (performance && performance.now()) || Date.now();
                    (n.data[e] = r - n.ctime),
                      "execute" == e && (n.begintime = r),
                      "execute_end" == e &&
                        (n.data.response_time = r - n.begintime),
                      (n.ctime = r);
                  },
                },
                {
                  key: "getFieldData",
                  value: function (t) {
                    return this.fieldsList[t]
                      ? o({}, this.fieldsList[t].data)
                      : {};
                  },
                },
                {
                  key: "setDim",
                  value: function (t, e, n) {
                    (this.dimsList[t] = this.dimsList[t] || o({}, this.dims)),
                      (this.dimsList[t][e] = n);
                  },
                },
                {
                  key: "getTraceId",
                  value: function (t) {
                    return this.dimsList[t] ? this.dimsList[t].traceid : "";
                  },
                },
                {
                  key: "getDimData",
                  value: function (t) {
                    return this.dimsList[t] ? o({}, this.dimsList[t]) : {};
                  },
                },
                {
                  key: "clearData",
                  value: function (t) {
                    delete this.fieldsList[t], delete this.dimsList[t];
                  },
                },
                {
                  key: "setCommonDim",
                  value: function (t, e) {
                    this.dims[t] = e;
                  },
                },
              ]),
              t
            );
          })(),
          F = (function () {
            function t(n) {
              var r = this;
              e(this, t),
                P.init(),
                P.log("初始化", n),
                (c.ISDEBUG = n.isDebug || 0),
                (c.appSrc = n.appSrc || ""),
                (c.uid = n.uid || 0),
                (c.guid = n.guid || A.getCookie("guid")),
                (c.ua = n.ua || ""),
                (c.config = n),
                c.setEnableTrace(),
                A.setCookie("huya_ua", c.ua, 365),
                this.creatUserId(n),
                (c.report = new G()),
                (this.TafHandlerList = []),
                (this.tafHandler = new W(n)),
                n.noConnect ||
                  (this.tafHandler.start(), (this.doSocketConnect = !0)),
                (this.doSocketConnect = !1),
                this.TafHandlerList.push(this.tafHandler),
                (this.wsLaunch = !1),
                (this.queue = []),
                this.on(N.WEBSOCKET_DOLAUNCH, function () {
                  P.log("sendWup 缓存队列"),
                    (r.wsLaunch = !0),
                    r.queue.forEach(function (t) {
                      return t();
                    }),
                    (r.queue = []);
                }),
                (this.inited = !0);
            }
            return (
              r(t, [
                {
                  key: "creatUserId",
                  value: function (t) {
                    (c.userId = new f.UserId()),
                      (c.userId.lUid = c.uid),
                      (c.userId.sGuid = c.guid),
                      (c.userId.sToken = ""),
                      (c.userId.sHuYaUA = c.ua),
                      (c.userId.sCookie = document.cookie),
                      (c.userId.sDeviceInfo = t.device || "");
                  },
                },
                {
                  key: "bindWup",
                  value: function (t) {
                    var e = this;
                    return function (n) {
                      var r = n.funcName,
                        i = n.resStruct;
                      return (
                        e.registerWup(r, i),
                        function (n) {
                          var i = n.data,
                            o = n.callback,
                            a = n.iRequestId;
                          e.sendWup(t, r, i, o, a);
                        }
                      );
                    };
                  },
                },
                {
                  key: "sendWup",
                  value: function (t, e, n, r, i) {
                    var o = 4 < arguments.length && void 0 !== i ? i : 1;
                    c.iRequestId++;
                    var a = c.getTraceId();
                    c.report.setDim(c.iRequestId, "traceid", a),
                      c.report.setDim(c.iRequestId, "spanid", a),
                      c.report.setField(c.iRequestId, "execute");
                    var s = { id: c.iRequestId, fn: e, cb: r };
                    if (!this.inited)
                      return (s.code = b), void this.tafHandler.reportError(s);
                    try {
                      this.tafHandler.connected
                        ? (P.log("sendWup", e),
                          this.tafHandler.sendWup(t, e, n, r, c.iRequestId, o))
                        : (P.log("sendWupHttp", e),
                          this.tafHandler.sendWupHttp(
                            t,
                            e,
                            n,
                            c.iRequestId,
                            r
                          ));
                    } catch (t) {
                      (s.code = g), this.tafHandler.reportError(s);
                    }
                  },
                },
                {
                  key: "sendWupHttp",
                  value: function (t, e, n, r) {
                    c.iRequestId++;
                    var i = c.getTraceId();
                    c.report.setDim(c.iRequestId, "traceid", i),
                      c.report.setDim(c.iRequestId, "spanid", i),
                      c.report.setField(c.iRequestId, "execute");
                    var o = { id: c.iRequestId, fn: e, cb: r };
                    if (!this.inited)
                      return (o.code = b), void this.tafHandler.reportError(o);
                    this.tafHandler.sendWupHttp(t, e, n, c.iRequestId, r);
                  },
                },
                {
                  key: "registerUri",
                  value: function (t, e) {
                    this.startWS(), (k.UriMapping[t + ""] = e);
                  },
                },
                {
                  key: "registerUriMap",
                  value: function (t) {
                    for (var e in t) {
                      var n = t[e];
                      k.UriMapping[e + ""] = n;
                    }
                  },
                },
                {
                  key: "registerWup",
                  value: function (t, e) {
                    k.WupMapping[t] = e;
                  },
                },
                {
                  key: "registerWupMap",
                  value: function (t) {
                    for (var e in t) {
                      var n = t[e];
                      k.WupMapping[e] = n;
                    }
                  },
                },
                {
                  key: "on",
                  value: function (t, e) {
                    B.addEvent(t, e);
                  },
                },
                {
                  key: "off",
                  value: function (t, e) {
                    B.removeEvent(t, e);
                  },
                },
                {
                  key: "has",
                  value: function (t, e) {
                    return B.hasListener(t, e);
                  },
                },
                {
                  key: "sendRegisterGroup",
                  value: function (t, e) {
                    var n = 1 < arguments.length && void 0 !== e ? e : "";
                    this.tafHandler.sendRegisterGroup(t, n);
                  },
                },
                {
                  key: "sendUnRegisterGroup",
                  value: function (t) {
                    this.tafHandler.sendUnRegisterGroup(t);
                  },
                },
                {
                  key: "sendVerifyCookie",
                  value: function (t, e, n) {
                    var r =
                      2 < arguments.length && void 0 !== n
                        ? n
                        : "webh5&0.0.1&huya";
                    this.tafHandler.sendVerifyCookie(t, e, r);
                  },
                },
                {
                  key: "reconnetWS",
                  value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : 0,
                      n = this.TafHandlerList.find(function (t) {
                        return t.connectType === e;
                      });
                    if (n) return n.reconnetWS();
                  },
                },
                {
                  key: "isWSConnected",
                  value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : 0,
                      n = this.TafHandlerList.find(function (t) {
                        return t.connectType === e;
                      });
                    return !!n && n.connected;
                  },
                },
                {
                  key: "isWSLaunch",
                  value: function () {
                    return this.wsLaunch;
                  },
                },
                {
                  key: "sendWSUpdateUserInfoReq",
                  value: function (t) {
                    this.tafHandler.sendWSUpdateUserInfoReq(t);
                  },
                },
                {
                  key: "getTaf",
                  value: function () {
                    return u;
                  },
                },
                {
                  key: "getUserId",
                  value: function () {
                    return c.userId;
                  },
                },
                {
                  key: "getTafProtocol",
                  value: function () {
                    return { HUYA: f, TafMx: k, Taf: u };
                  },
                },
                {
                  key: "rspDecode",
                  value: function (t, e) {
                    return this.tafHandler.rspDecode(t, e);
                  },
                },
                {
                  key: "sendDataMetric",
                  value: function (t, e) {
                    this.tafHandler.sendDataMetric(t, e);
                  },
                },
                {
                  key: "sendExtWup",
                  value: function (t) {
                    this.tafHandler.sendExtWup(t);
                  },
                },
                {
                  key: "connectCloudGameWS",
                  value: function (t) {
                    P.log("云游戏建连", t),
                      this.cloudTaf && this.clearCloudTaf();
                    var e = o({}, c.config, { connectType: 1 });
                    return (
                      (this.cloudTaf = new W(e)),
                      this.cloudTaf.connectIPList(t),
                      this.TafHandlerList.push(this.cloudTaf),
                      this.cloudTaf
                    );
                  },
                },
                {
                  key: "clearCloudTaf",
                  value: function () {
                    var t = this.TafHandlerList.indexOf(this.cloudTaf);
                    -1 < t && this.TafHandlerList.splice(t, 1),
                      this.cloudTaf.clear(),
                      (this.cloudTaf = null);
                  },
                },
                {
                  key: "sendCloudGameReq",
                  value: function (t) {
                    this.cloudTaf
                      ? this.cloudTaf.sendCloudGameReq(t)
                      : P.log("云游戏连接未创建");
                  },
                },
                {
                  key: "getCurrentWSUrl",
                  value: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : 0,
                      n = this.TafHandlerList.find(function (t) {
                        return t.connectType === e;
                      });
                    return n ? n.getCurrentWSUrl() : "";
                  },
                },
                {
                  key: "setReportAPI",
                  value: function (t) {
                    c.reportAPI = t;
                  },
                },
                {
                  key: "startWS",
                  value: function () {
                    this.isWSConnected() ||
                      this.doSocketConnect ||
                      (this.tafHandler.start(), (this.doSocketConnect = !0));
                  },
                },
              ]),
              t
            );
          })();
        return {
          HUYA: f,
          Taf: u,
          init: function (t) {
            return new F(t);
          },
          events: N,
          utils: O,
          store: A,
          version: s,
        };
      })();
    },
    "mW+N": function (t, e, n) {
      var r = n("Nb65"),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(i, function (t, n, r, i) {
              e.push(r ? i.replace(o, "$1") : n || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    mlmT: function (t, e, n) {
      var r = n("Zb4k"),
        i = n("5meL"),
        o = n("U/LN"),
        a = o && o.isSet,
        s = a ? i(a) : r;
      t.exports = s;
    },
    "nB/V": function (t, e, n) {
      var r = n("v0Em"),
        i = n("g1wE"),
        o = n("yWrL");
      t.exports = function (t) {
        return o(t) ? r(t) : i(t);
      };
    },
    nC47: function (t, e, n) {
      var r = n("+o4R"),
        i = n("ZIlV");
      t.exports = function (t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t));
      };
    },
    nD2Q: function (t, e, n) {
      var r = n("2LO6"),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
      t.exports = o;
    },
    nUlD: function (t, e, n) {
      var r = n("pfDB"),
        i = n("tC9N"),
        o = n("dZ9T"),
        a = Function.prototype,
        s = Object.prototype,
        c = a.toString,
        u = s.hasOwnProperty,
        l = c.call(Object);
      t.exports = function (t) {
        if (!o(t) || "[object Object]" != r(t)) return !1;
        var e = i(t);
        if (null === e) return !0;
        var n = u.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && c.call(n) == l;
      };
    },
    nZ4e: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return j;
      });
      var r = n("cQwn"),
        i = n.n(r),
        o = n("ZTQi"),
        a = n.n(o),
        s = n("avFb"),
        c = n("6Zxk"),
        u = n("kPK6"),
        l = n.n(u),
        p = n("njtY"),
        f = n("9Fjj"),
        h = (n("RlNQ"), n("f2qI")),
        d = n.n(h),
        v = n("rIiI"),
        m = n.n(v),
        y = n("58BP"),
        g = n.n(y),
        b = n("Ptek"),
        w = n.n(b),
        S = n("gy9q"),
        E = n.n(S),
        _ = n("7DFi"),
        I = n.n(_),
        T = n("TJEx"),
        O = n.n(T),
        k = n("L0GJ"),
        R = [
          "prefixCls",
          "type",
          "autoFocus",
          "actionFn",
          "closeModal",
          "children",
          "buttonComponent",
        ];
      function U(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = O()(t);
          if (e) {
            var i = O()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return I()(this, n);
        };
      }
      var C = (function (t) {
        E()(n, t);
        var e = U(n);
        function n(t) {
          var r;
          return (
            m()(this, n),
            (r = e.call(this, t)),
            i()(w()(r), "onClick", function () {
              var t,
                e = r.props,
                n = e.actionFn,
                i = e.closeModal;
              n
                ? (n.length ? (t = n(i)) : (t = n()) || i(),
                  t &&
                    t.then &&
                    (r.setState({ loading: !0 }),
                    t.then(
                      function () {
                        i.apply(void 0, arguments);
                      },
                      function () {
                        r.setState({ loading: !1 });
                      }
                    )))
                : i();
            }),
            (r.state = { loading: !1 }),
            r
          );
        }
        return (
          g()(n, [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = (t.prefixCls, t.type),
                  n = (t.autoFocus, t.actionFn, t.closeModal, t.children),
                  r = t.buttonComponent,
                  i = d()(t, R),
                  o = this.state.loading;
                return s.createElement(
                  r,
                  a()({}, i, {
                    type: e,
                    onClick: this.onClick,
                    loading: o,
                    size: "large",
                  }),
                  n
                );
              },
            },
          ]),
          n
        );
      })(s.Component);
      i()(C, "defaultProps", {
        prefixCls: "nimo-modal-action-button",
        buttonComponent: k.a,
      });
      var P = C;
      function N(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? N(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var M = function (t) {
        var e = t.onCancel,
          n = t.onOk,
          r = t.okButtonProps,
          i = t.centered,
          o = void 0 === i || i,
          c = t.close,
          u = t.zIndex,
          h = t.afterClose,
          d = t.visible,
          v = t.keyboard,
          m = t.getContainer,
          y = t.wrapClassName,
          g = t.closeIcon,
          b = t.removeHidden,
          w = t.closable,
          S = t.buttonComponent,
          E = t.useModalTitle,
          _ = t.contentLength,
          I = t.primaryButtonFirst,
          T = t.iconType || "question-circle",
          O = t.okType || "secondary",
          k = t.cancelType || "assistant",
          R = t.prefixCls || "nimo-confirm",
          U = !("okCancel" in t) || t.okCancel,
          C = t.width || 416,
          N = t.style || {},
          A = void 0 === t.mask || t.mask,
          M = void 0 !== t.maskClosable && t.maskClosable,
          D = void 0 === t.maskStyle ? {} : t.maskStyle,
          j = t.okText || U,
          L = t.cancelText,
          B = l()(
            R,
            "".concat(R, "-").concat(t.type),
            "".concat(R, "__").concat(_),
            t.className
          ),
          x = s.createElement(
            P,
            a()({}, r, {
              type: O,
              actionFn: n,
              closeModal: c,
              autoFocus: !0,
              buttonComponent: S,
              key: "1",
            }),
            j
          ),
          W =
            U &&
            s.createElement(
              P,
              {
                type: k,
                actionFn: e,
                closeModal: c,
                buttonComponent: S,
                key: "2",
              },
              L
            ),
          G = I ? [x, W] : [W, x];
        return s.createElement(
          f.a,
          {
            className: B,
            wrapClassName: y,
            onCancel: function () {
              c({ triggerCancel: !0 });
            },
            visible: d,
            getContainer: m,
            title: E ? t.title : "",
            transitionName: "zoom",
            footer: "",
            maskTransitionName: "fade",
            maskClosable: M,
            maskStyle: D,
            mask: A,
            style: N,
            width: C,
            zIndex: u,
            afterClose: h,
            keyboard: v,
            closeIcon: g,
            centered: o,
            removeHidden: b,
            closable: w,
          },
          s.createElement(
            "div",
            { className: "".concat(R, "-body-wrapper") },
            s.createElement(
              "div",
              {
                className: ""
                  .concat(R, "-body ")
                  .concat(R, "-body__")
                  .concat(_),
              },
              !E && t.title
                ? s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(p.a, { type: T }),
                    s.createElement(
                      "span",
                      { className: "".concat(R, "-title") },
                      t.title
                    )
                  )
                : null,
              t.content
                ? s.createElement(
                    "div",
                    {
                      className: ""
                        .concat(R, "-content ")
                        .concat(R, "-content__")
                        .concat(_),
                    },
                    t.content
                  )
                : null
            ),
            s.createElement("div", { className: "".concat(R, "-btns") }, G)
          )
        );
      };
      M.defaultProps = { contentLength: "long" };
      var D = !1;
      function j(t) {
        var e = document.createElement("div");
        t.getContainer
          ? t.getContainer().appendChild(e)
          : ((t.getContainer = function () {
              return document.body;
            }),
            document.body.appendChild(e));
        var n = A(A({}, t), {}, { close: r, visible: !0 });
        function r() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          o(
            A(
              A({}, n),
              {},
              { visible: !1, afterClose: i.bind.apply(i, [this].concat(e)) }
            )
          );
        }
        function i() {
          var t = c.unmountComponentAtNode(e);
          t && e.parentNode && e.parentNode.removeChild(e);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          var a,
            s =
              i &&
              i.length &&
              i.some(function (t) {
                return t && t.triggerCancel;
              });
          n.onCancel && s && (a = n).onCancel.apply(a, i);
        }
        function o(t) {
          var n = t.visible,
            r = t.onClose,
            i = !1;
          n !== D && (!1 === n && (i = !0), (D = n)),
            c.render(s.createElement(M, t), e, function () {
              i && "function" === typeof r && r();
            });
        }
        return (
          o(n),
          {
            destroy: r,
            update: function (t) {
              o((n = A(A({}, n), {}, { visible: !0 }, t)));
            },
            getVisible: function () {
              return D;
            },
          }
        );
      }
    },
    ndow: function (t, e, n) {
      var r = n("onXY"),
        i = n("crpe")(r);
      t.exports = i;
    },
    nimoua: function (t, e) {
      t.exports = window.__NIMO_UA__;
    },
    njtY: function (t, e, n) {
      "use strict";
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("cQwn"),
        a = n.n(o),
        s = n("f2qI"),
        c = n.n(s),
        u = n("avFb"),
        l = n("kPK6"),
        p = n.n(l),
        f = ["prefixCls", "type", "className", "spin", "rotate"],
        h = function (t) {
          var e,
            n = t.prefixCls,
            r = t.type,
            o = t.className,
            s = void 0 === o ? "" : o,
            l = t.spin,
            h = t.rotate,
            d = c()(t, f),
            v = p()(
              ((e = {}),
              a()(e, n, !0),
              a()(e, "".concat(n, "-spin"), !!l || "loading" === r),
              a()(e, "".concat(n, "-rotate"), !!h),
              a()(e, "".concat(n, "-").concat(r), !0),
              e),
              s
            );
          return u.createElement("i", i()({}, d, { className: v }));
        };
      (h.defaultProps = { prefixCls: "nimo-icon" }), (e.a = h);
    },
    nrty: function (t, e, n) {
      var r = n("12xL");
      t.exports = function (t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
      };
    },
    ntvm: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return m;
        }),
        n.d(e, "b", function () {
          return y;
        }),
        n.d(e, "f", function () {
          return g;
        });
      var r = n("CbEt"),
        i = n.n(r),
        o = n("W7YU"),
        a = void 0,
        s = "__NIMO_SIGNAL_ON__",
        c = new i.a(),
        u = new o.a(),
        l = Object.create(null),
        p = !1,
        f = null,
        h = function (t) {
          (p = !0), (f = t), u.runAndClear();
        },
        d = function (t) {
          c.on(s, t);
        },
        v = function (t) {
          c.off(s, t);
        },
        m = function t(e, n, r) {
          p && f
            ? (f.registerUri(e, n),
              f.on(
                e,
                (function (t, e) {
                  var n = function (n) {
                    c.emit(s, { funcName: t, listener: e, data: n });
                  };
                  return (
                    l[t] || (l[t] = []),
                    l[t].push({ listener: e, wrapper: n }),
                    n
                  );
                })(e, r)
              ))
            : u.add(t, [e, n, r], a);
        },
        y = function t(e, n) {
          if (p && f)
            if (n) {
              var r = (function (t, e) {
                var n = l[t];
                if (!n) return null;
                for (var r = 0; r < n.length; r += 1) {
                  var i = n[r];
                  if (i.listener === e)
                    return n.splice(r, 1), n.length || delete l[t], i.wrapper;
                }
                return null;
              })(e, n);
              r && f.off(e, r);
            } else f.off(e, null);
          else u.add(t, [e, n], a);
        },
        g = function t(e, n, r) {
          p && f
            ? (f.registerUri(e, n),
              f.on(
                e,
                (function (t, e) {
                  var n = function n(r) {
                    c.emit(s, { funcName: t, listener: e, data: r }), y(t, n);
                  };
                  return (
                    l[t] || (l[t] = []),
                    l[t].push({ listener: e, wrapper: n }),
                    n
                  );
                })(e, r)
              ))
            : u.add(t, [e, n, r], a);
        };
    },
    "o+lK": function (t, e) {
      t.exports = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      };
    },
    oYgU: function (t, e) {
      t.exports = function (t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      };
    },
    olh8: function (t, e, n) {
      var r = n("9Cfe");
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return n < 0 ? void 0 : e[n][1];
      };
    },
    onXY: function (t, e, n) {
      var r = n("ka7B"),
        i = n("TTyQ"),
        o = n("Gx0h"),
        a = i
          ? function (t, e) {
              return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0,
              });
            }
          : o;
      t.exports = a;
    },
    pAzl: function (t, e, n) {
      var r = n("nrty");
      t.exports = function (t, e) {
        var n = r(this, t),
          i = n.size;
        return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
      };
    },
    pSl2: function (t, e, n) {
      var r = n("oYgU"),
        i = Math.max;
      t.exports = function (t, e, n) {
        return (
          (e = i(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var o = arguments, a = -1, s = i(o.length - e, 0), c = Array(s);
              ++a < s;

            )
              c[a] = o[e + a];
            a = -1;
            for (var u = Array(e + 1); ++a < e; ) u[a] = o[a];
            return (u[e] = n(c)), r(t, this, u);
          }
        );
      };
    },
    pYZ2: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("avFb"),
        i = n.n(r),
        o = n("6Zxk"),
        a = n.n(o),
        s = n("2/Zn"),
        c = n("mTTC"),
        u = n("nimoua"),
        l = n.n(u),
        p = (n("BJtW"), n("KFtC")),
        f = n("JRup"),
        h = n("Yxsh"),
        d = n("PFs9"),
        v = n.n(d),
        m = n("SbaQ"),
        y = n.n(m),
        g = n("JEK1"),
        b = n.n(g),
        w = n("OkdH"),
        S = n.n(w),
        E = n("cHWY"),
        _ = n.n(E),
        I = n("FXfC"),
        T = n.n(I),
        O = n("iUK9"),
        k = n.n(O),
        R = n("hvIL"),
        U = n.n(R),
        C = function () {
          var t = [v.a, y.a, b.a, S.a, _.a, T.a, k.a, U.a];
          setTimeout(function () {
            t.map(function (t) {
              return Object(h.a)(t);
            });
          }, 0);
        },
        P = Object(r.lazy)(function () {
          return Promise.all([n.e("c0c90"), n.e("9ef4b")]).then(
            n.bind(null, "Pjm3")
          );
        });
      C();
      var N = s.f.getInstance(),
        A = new s.e();
      if (
        (N.setMessengerPhone(A), N.init(), !l.a.isInNimoApp && !Object(p.t)())
      ) {
        var M = new s.c();
        new s.d({ interphone: M, messengerPhone: A }).init(),
          n
            .e("55f32")
            .then(n.bind(null, "OI0W"))
            .then(function (t) {
              t.default.loginChannel();
            });
      }
      c.default.getUserInfo().then(function (t) {
        a.a.render(
          i.a.createElement(
            r.Suspense,
            { fallback: i.a.createElement("div", null) },
            i.a.createElement(P, { userInfo: t, socketModel: f.a })
          ),
          document.getElementById("page-lucky-gift-container")
        );
      });
    },
    pfDB: function (t, e, n) {
      var r = n("XVtd"),
        i = n("GGlh"),
        o = n("igRQ"),
        a = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(t)
          ? i(t)
          : o(t);
      };
    },
    pqOk: function (t, e, n) {
      t.exports = n("4KFe")(227);
    },
    q5c1: function (t, e, n) {
      var r = n("gjmc"),
        i = Object.create,
        o = (function () {
          function t() {}
          return function (e) {
            if (!r(e)) return {};
            if (i) return i(e);
            t.prototype = e;
            var n = new t();
            return (t.prototype = void 0), n;
          };
        })();
      t.exports = o;
    },
    qEdh: function (t, e, n) {
      var r = n("lWxV");
      t.exports = function (t) {
        return (null == t ? 0 : t.length) ? r(t, 1) : [];
      };
    },
    qFNm: function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
          i[n] = e(t[n], n, t);
        return i;
      };
    },
    "qX/W": function (t, e) {
      t.exports = function (t) {
        var e = this.__data__,
          n = e.delete(t);
        return (this.size = e.size), n;
      };
    },
    qhxG: function (t, e) {
      t.exports = function (t, e) {
        return t === e || (t !== t && e !== e);
      };
    },
    qqnM: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e) {
          var n = e;
          for (; n; ) {
            if (n === t) return !0;
            n = n.parentNode;
          }
          return !1;
        });
    },
    qr0I: function (t, e, n) {
      var r = n("GW7J"),
        i = /^\s+/;
      t.exports = function (t) {
        return t ? t.slice(0, r(t) + 1).replace(i, "") : t;
      };
    },
    qtuz: function (t, e, n) {
      var r = n("xPc9"),
        i = n("ecr1"),
        o = n("taEb");
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (o || i)(),
            string: new r(),
          });
      };
    },
    "rD/L": function (t, e, n) {
      "use strict";
      e.a = function (t) {
        return {
          all: (t = t || new Map()),
          on: function (e, n) {
            var r = t.get(e);
            r ? r.push(n) : t.set(e, [n]);
          },
          off: function (e, n) {
            var r = t.get(e);
            r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : t.set(e, []));
          },
          emit: function (e, n) {
            var r = t.get(e);
            r &&
              r.slice().map(function (t) {
                t(n);
              }),
              (r = t.get("*")) &&
                r.slice().map(function (t) {
                  t(e, n);
                });
          },
        };
      };
    },
    rxEE: function (t, e, n) {
      var r = n("81u2"),
        i = n("ExQa");
      t.exports = function (t, e) {
        return r(t, i(t), e);
      };
    },
    "s5/g": function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          function () {
            (this.iItemType = 0),
              (this.iItemCount = 0),
              (this.iItemValue = 0),
              (this.iBoxAwardType = 0),
              (this.sIconUrl = ""),
              (this.iItemId = 0),
              (this.sItemName = "");
          });
      (i.prototype._clone = function () {
        return new r.a.GiftItemInfo();
      }),
        (i.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (i.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (i.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iItemType),
            t.writeInt32(1, this.iItemCount),
            t.writeInt32(2, this.iItemValue),
            t.writeInt32(3, this.iBoxAwardType),
            t.writeString(4, this.sIconUrl),
            t.writeInt32(5, this.iItemId),
            t.writeString(6, this.sItemName);
        }),
        (i.prototype.readFrom = function (t) {
          (this.iItemType = t.readInt32(0, !1, this.iItemType)),
            (this.iItemCount = t.readInt32(1, !1, this.iItemCount)),
            (this.iItemValue = t.readInt32(2, !1, this.iItemValue)),
            (this.iBoxAwardType = t.readInt32(3, !1, this.iBoxAwardType)),
            (this.sIconUrl = t.readString(4, !1, this.sIconUrl)),
            (this.iItemId = t.readInt32(5, !1, this.iItemId)),
            (this.sItemName = t.readString(6, !1, this.sItemName));
        }),
        (r.a.GiftItemInfo = i);
    },
    smBo: function (t, e, n) {
      (function (t) {
        var r = n("nD2Q"),
          i = e && !e.nodeType && e,
          o = i && "object" == typeof t && t && !t.nodeType && t,
          a = o && o.exports === i ? r.Buffer : void 0,
          s = a ? a.allocUnsafe : void 0;
        t.exports = function (t, e) {
          if (e) return t.slice();
          var n = t.length,
            r = s ? s(n) : new t.constructor(n);
          return t.copy(r), r;
        };
      }.call(this, n("QWVB")(t)));
    },
    svwH: function (t, e, n) {
      t.exports = n("4KFe")(122);
    },
    swr8: function (t, e, n) {
      var r = n("Jj6+"),
        i = /[\\^$.*+?()[\]{}|]/g,
        o = RegExp(i.source);
      t.exports = function (t) {
        return (t = r(t)) && o.test(t) ? t.replace(i, "\\$&") : t;
      };
    },
    tC9N: function (t, e, n) {
      var r = n("o+lK")(Object.getPrototypeOf, Object);
      t.exports = r;
    },
    taEb: function (t, e, n) {
      var r = n("ebMM")(n("nD2Q"), "Map");
      t.exports = r;
    },
    tbCU: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return C;
      }),
        n.d(e, "b", function () {
          return M;
        });
      n("RlNQ");
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("f2qI"),
        a = n.n(o),
        s = n("rIiI"),
        c = n.n(s),
        u = n("58BP"),
        l = n.n(u),
        p = n("Ptek"),
        f = n.n(p),
        h = n("gy9q"),
        d = n.n(h),
        v = n("7DFi"),
        m = n.n(v),
        y = n("TJEx"),
        g = n.n(y),
        b = n("cQwn"),
        w = n.n(b),
        S = n("avFb"),
        E = n.n(S),
        _ = n("zUuL"),
        I = n("AVt5"),
        T = n("eSnk"),
        O = n("OHLN"),
        k = ["canLoad", "forceLoad", "onLazyLoad"],
        R = [
          "canLoad",
          "forceLoad",
          "timeToForceLoad",
          "onLazyLoad",
          "forwardedRef",
        ];
      function U(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = g()(t);
          if (e) {
            var i = g()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return m()(this, n);
        };
      }
      var C = "DCL",
        P = "L",
        N = 1,
        A = new I.a({
          onShow: function (t, e) {
            var n = (e || {})._comp;
            n &&
              (n._removeObserver(), (n._removeObserver = null), n.loadComp());
          },
          rootMargin: "100px 0px 100px 0px",
        });
      function M(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.displayName,
          r = e.loading,
          o = void 0 === r || r,
          s = e.when,
          u = void 0 !== s && s,
          p = e.async,
          h = void 0 !== p && p,
          v = e.forwardRef,
          m = void 0 !== v && v,
          y = e.retry,
          g = void 0 === y ? 0 : y,
          b = e.retryDelay,
          S = void 0 === b ? 5e3 : b,
          I = (function (e) {
            d()(r, e);
            var n = U(r);
            function r(t) {
              var e;
              return (
                c()(this, r),
                (e = n.call(this, t)),
                w()(f()(e), "q", null),
                w()(f()(e), "_forceLoadTimer", null),
                w()(f()(e), "_componentId", "_lazy_comp_".concat(N)),
                w()(f()(e), "loading", !1),
                w()(f()(e), "renderLoading", function (t) {
                  return "function" === typeof t
                    ? E.a.createElement(t, { id: e._componentId })
                    : E.a.isValidElement(t)
                    ? E.a.cloneElement(t, { id: e._componentId })
                    : E.a.createElement(O.c, {
                        id: e._componentId,
                        wrapperClassName: "nimo-page-loading n-as-abs",
                      });
                }),
                (e.state = { Comp: null }),
                (e.q = new _.a()),
                (e.loadComp = e.loadComp.bind(f()(e))),
                (N += 1),
                e
              );
            }
            return (
              l()(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    h && this.useObserver();
                    var t = document.readyState;
                    switch (u) {
                      case C:
                        "loading" === t
                          ? (document.addEventListener(
                              "DOMContentLoaded",
                              this.loadComp
                            ),
                            this.forceLoadComp())
                          : this.loadComp();
                        break;
                      case P:
                        "complete" !== t
                          ? (window.addEventListener("load", this.loadComp),
                            this.forceLoadComp())
                          : this.loadComp();
                        break;
                      default:
                        this.loadComp();
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (t, e, n) {
                    var r = this.props.forceLoad;
                    !0 === n &&
                      (null !== this.q
                        ? this.q.runAndClear()
                        : (u && !0 !== r) || this.loadComp());
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    switch (((this.unmounted = !0), u)) {
                      case C:
                        document.removeEventListener(
                          "DOMContentLoaded",
                          this.loadComp
                        );
                        break;
                      case P:
                        window.removeEventListener("load", this.loadComp);
                    }
                    this.q && (this.q.clear(), (this.q = null)),
                      this._removeObserver &&
                        (this._removeObserver(), (this._removeObserver = null)),
                      this._clearForceLoadTimer();
                  },
                },
                {
                  key: "getSnapshotBeforeUpdate",
                  value: function (t) {
                    var e = this.props.canLoad;
                    return !1 === t.canLoad && !0 === e;
                  },
                },
                {
                  key: "useObserver",
                  value: function () {
                    var t = document.querySelector(
                      "#".concat(this._componentId)
                    );
                    this._removeObserver = A.add(t, { _comp: this });
                  },
                },
                {
                  key: "loadComp",
                  value: function () {
                    var e = this,
                      n = this.props,
                      r = n.canLoad,
                      i = (n.forceLoad, n.onLazyLoad),
                      o = a()(n, k),
                      s = this.state.Comp;
                    if (r && !s) {
                      if (this.loading || (h && this._removeObserver)) return;
                      (this.loading = !0),
                        (g > 0 ? Object(T.a)(t, S, g + 1) : t)(o)
                          .then(function (t) {
                            var n = t.default;
                            if (!e.unmounted) {
                              if (!n) throw new Error("load fail");
                              e.setState({ Comp: n }, function () {
                                "function" === typeof i && i();
                              });
                            }
                          })
                          .catch(function (t) {
                            var n = e.props.onLazyError;
                            e.unmounted || "function" !== typeof n || n(t);
                          }),
                        this._clearForceLoadTimer();
                    } else this.q.add(this.loadComp);
                  },
                },
                {
                  key: "forceLoadComp",
                  value: function () {
                    var t = this.props.timeToForceLoad;
                    this._forceLoadTimer = setTimeout(this.loadComp, t);
                  },
                },
                {
                  key: "_clearForceLoadTimer",
                  value: function () {
                    this._forceLoadTimer &&
                      (clearTimeout(this._forceLoadTimer),
                      (this._forceLoadTimer = null));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e =
                        (t.canLoad,
                        t.forceLoad,
                        t.timeToForceLoad,
                        t.onLazyLoad,
                        t.forwardedRef),
                      n = a()(t, R),
                      r = this.state.Comp,
                      s = !!r;
                    return E.a.createElement(
                      E.a.Fragment,
                      null,
                      s ? E.a.createElement(r, i()({}, n, { ref: e })) : null,
                      !s && o ? this.renderLoading(o) : null,
                      s || o
                        ? null
                        : E.a.createElement("div", { id: this._componentId })
                    );
                  },
                },
              ]),
              r
            );
          })(E.a.PureComponent);
        return (
          w()(I, "displayName", n || "LazyLoad"),
          w()(I, "defaultProps", {
            canLoad: !0,
            forceLoad: !1,
            timeToForceLoad: 3e3,
            onLazyLoad: function () {},
          }),
          m
            ? E.a.forwardRef(function (t, e) {
                return E.a.createElement(I, i()({}, t, { forwardedRef: e }));
              })
            : I
        );
      }
    },
    uYE1: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          {
            kTLoginReq: 100,
            kTLoginRsp: 101,
            kTLogoutReq: 102,
            kTLogoutRsp: 103,
            kTSubReq: 104,
            kTSubRsp: 105,
            kTUnsubReq: 106,
            kTUnsubRsp: 107,
            kTHeartBeatReq: 108,
            kTHeartBeatRsp: 109,
            kTUnbindGuidReq: 201,
            kTUnbindGuidRsp: 202,
            kTUpMsg: 300,
            kTDownMsg: 301,
          });
      (r.a.EPktType = i), (e.a = i);
    },
    uZd7: function (t, e, n) {
      var r = n("qFNm"),
        i = n("k4n3"),
        o = n("wiAK"),
        a = n("HJHO"),
        s = n("81u2"),
        c = n("0d/0"),
        u = n("LAFo"),
        l = n("Gzln"),
        p = u(function (t, e) {
          var n = {};
          if (null == t) return n;
          var u = !1;
          (e = r(e, function (e) {
            return (e = a(e, t)), u || (u = e.length > 1), e;
          })),
            s(t, l(t), n),
            u && (n = i(n, 7, c));
          for (var p = e.length; p--; ) o(n, e[p]);
          return n;
        });
      t.exports = p;
    },
    v0Em: function (t, e, n) {
      var r = n("Ttg1"),
        i = n("5x0A"),
        o = n("ZIlV"),
        a = n("6dHw"),
        s = n("7XLi"),
        c = n("znSZ"),
        u = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var n = o(t),
          l = !n && i(t),
          p = !n && !l && a(t),
          f = !n && !l && !p && c(t),
          h = n || l || p || f,
          d = h ? r(t.length, String) : [],
          v = d.length;
        for (var m in t)
          (!e && !u.call(t, m)) ||
            (h &&
              ("length" == m ||
                (p && ("offset" == m || "parent" == m)) ||
                (f &&
                  ("buffer" == m || "byteLength" == m || "byteOffset" == m)) ||
                s(m, v))) ||
            d.push(m);
        return d;
      };
    },
    ve36: function (t, e, n) {
      t.exports = { default: n("pqOk"), __esModule: !0 };
    },
    vlBN: function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r,
        i = n("Jgc1"),
        o = (r = i) && r.__esModule ? r : { default: r };
      e.default = function (t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e ||
          ("object" !==
            ("undefined" === typeof e ? "undefined" : (0, o.default)(e)) &&
            "function" !== typeof e)
          ? t
          : e;
      };
    },
    w5j5: function (t, e, n) {
      "use strict";
      function r() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "web";
        return "".concat(t, "&1.0.4&nimoTV");
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    w6NW: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "d", function () {
          return o;
        }),
        n.d(e, "e", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "g", function () {
          return c;
        }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "j", function () {
          return p;
        }),
        n.d(e, "i", function () {
          return f;
        }),
        n.d(e, "m", function () {
          return h;
        }),
        n.d(e, "n", function () {
          return d;
        }),
        n.d(e, "h", function () {
          return v;
        }),
        n.d(e, "k", function () {
          return m;
        }),
        n.d(e, "l", function () {
          return y;
        });
      n("swr8"), n("avFb");
      var r = n("cOjp");
      function i(t, e) {
        return "string" !== typeof t
          ? ""
          : t.replace(/(%s)(\d{1,})/gi, function (t, n, r) {
              return e && "undefined" !== typeof e[+r] ? e[+r] : t;
            });
      }
      function o(t, e) {
        return "string" !== typeof t
          ? []
          : t.split(/(%s\d*)/gi).map(function (t) {
              if (/^%s\d*$/gi.test(t)) {
                var n = +t.replace("%s", "");
                return "undefined" === typeof e[n] ? t : e[n];
              }
              return t;
            });
      }
      function a(t, e) {
        if ("string" !== typeof t) return [];
        var n = 0;
        return t.split(/(%s)/gi).map(function (t) {
          var r = t;
          return (
            /^%s$/gi.test(t) &&
              "undefined" !==
                typeof (null === e || void 0 === e ? void 0 : e[n]) &&
              ((r = e[n]), (n += 1)),
            r
          );
        });
      }
      function s(t, e) {
        if ("string" !== typeof t) return "";
        var n = 0;
        return t.replace(/(%s)/gi, function (t, r, i) {
          var o = e && void 0 !== e[n] ? e[n] : t;
          return n++, o;
        });
      }
      function c(t, e) {
        var n = 0;
        return "string" != typeof t
          ? ""
          : t.replace(/(%s)/gi, function (t, r, i) {
              var o = e && void 0 !== e[n] ? e[n] : "";
              return n++, o;
            });
      }
      function u(t, e) {
        return "string" != typeof t
          ? ""
          : t.replace(/\{\$([^}]*)\}/gi, function (t, n, r) {
              return e && void 0 !== e[n] ? e[n] : "";
            });
      }
      function l(t) {
        return /[https?:]*\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
          t
        );
      }
      function p(t) {
        return (
          t ||
            r.b.error(
              "%c<util - string - toUpperFirstLetter> str is undefined."
            ),
          t.substring(0, 1).toUpperCase() + t.substring(1)
        );
      }
      function f(t) {
        return (
          t ||
            r.b.error(
              "%c<util - string - toLowerFirstLetter> str is undefined."
            ),
          t.substring(0, 1).toLowerCase() + t.substring(1)
        );
      }
      var h = function (t) {
          return t.replace(/\s+/g, "");
        },
        d = function (t) {
          return t.replace(/^\s+|\s+$/gm, "");
        },
        v = function (t) {
          return function (e) {
            if (!e) return e;
            var n = e.substring(0, t + 1),
              r = n.lastIndexOf(" ");
            return ~r ? n.substring(0, Math.min(t, r + 1)) : n;
          };
        },
        m = function (t) {
          return t && "string" === typeof t
            ? t.replace(/-([a-zA-Z])/g, function (t, e) {
                return e.toUpperCase();
              })
            : t;
        },
        y = function (t) {
          return t && "string" === typeof t
            ? t.toLowerCase().replace(/_([a-zA-Z])/g, function (t, e) {
                return e.toUpperCase();
              })
            : t;
        };
    },
    wYX4: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          {
            PAY_TYPE_R: 900,
            PAY_TYPE_DIAMOND: 1002,
            PAY_TYPE_COIN: 1003,
            PAY_TYPE_CDKEY: 1004,
            PAY_TYPE_GIFT: 1005,
            PAY_TYPE_GOLDBEAN: 3008,
            PAY_TYPE_FCOIN: 1073,
          });
      (r.a.PayType = i), (e.a = i);
    },
    wiAK: function (t, e, n) {
      var r = n("HJHO"),
        i = n("aPbn"),
        o = n("I4Pt"),
        a = n("3FAr");
      t.exports = function (t, e) {
        return (e = r(e, t)), null == (t = o(t, e)) || delete t[a(i(e))];
      };
    },
    wkQf: function (t, e, n) {
      "use strict";
      var r = n("tbCU"),
        i = Object(r.b)(
          function () {
            return n.e("9ca1d").then(n.bind(null, "YMeG"));
          },
          { loading: !1, forwardRef: !0 }
        );
      e.a = i;
    },
    xPc9: function (t, e, n) {
      var r = n("Kr19"),
        i = n("3cEJ"),
        o = n("7aM1"),
        a = n("8Gkh"),
        s = n("ES7g");
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = i),
        (c.prototype.get = o),
        (c.prototype.has = a),
        (c.prototype.set = s),
        (t.exports = c);
    },
    yWrL: function (t, e, n) {
      var r = n("bkuk"),
        i = n("4cNG");
      t.exports = function (t) {
        return null != t && i(t.length) && !r(t);
      };
    },
    yXRO: function (t, e) {
      var n = /\w*$/;
      t.exports = function (t) {
        var e = new t.constructor(t.source, n.exec(t));
        return (e.lastIndex = t.lastIndex), e;
      };
    },
    zUuL: function (t, e, n) {
      "use strict";
      var r = n("rIiI"),
        i = n.n(r),
        o = n("58BP"),
        a = n.n(o),
        s = n("cOjp"),
        c = (function () {
          function t() {
            i()(this, t), (this.q = []);
          }
          return (
            a()(t, [
              {
                key: "dispose",
                value: function () {
                  this.clear(), (this.q = null);
                },
              },
              {
                key: "add",
                value: function (t, e, n) {
                  if ("function" !== typeof t)
                    return (
                      s.b.error(
                        "%c<utils queue add> not function:",
                        "color:gray;",
                        t
                      ),
                      !1
                    );
                  this.q.push({ func: t, params: e, object: n });
                },
              },
              {
                key: "run",
                value: function (t) {
                  if (!this.q.length) return !1;
                  for (var e in this.q) {
                    var n = this.q[e];
                    n &&
                      "function" === typeof n.func &&
                      (t ? n.func(t) : n.func.apply(n.object, n.params));
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  this.q = [];
                },
              },
              {
                key: "runAndClear",
                value: function (t) {
                  this.run(t), this.clear();
                },
              },
            ]),
            t
          );
        })();
      e.a = c;
    },
    zc4o: function (t, e, n) {
      t.exports = n("4KFe")(58);
    },
    znSZ: function (t, e, n) {
      var r = n("F1Vu"),
        i = n("5meL"),
        o = n("U/LN"),
        a = o && o.isTypedArray,
        s = a ? i(a) : r;
      t.exports = s;
    },
    zoiq: function (t, e, n) {
      "use strict";
      var r = n("cQwn"),
        i = n.n(r),
        o = n("f2qI"),
        a = n.n(o),
        s = n("YQsQ"),
        c = n.n(s),
        u = n("rIiI"),
        l = n.n(u),
        p = n("58BP"),
        f = n.n(p),
        h = (n("5DbK"), n("FpfA")),
        d = n("KFtC"),
        v = n("UJcg"),
        m = ["message"];
      function y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      v.b;
      var b = (function () {
        function t() {
          l()(this, t);
        }
        return (
          f()(t, [
            {
              key: "updateRequestConfig",
              value: function (t, e, n) {
                "object" === c()(t) && t && (t[e] = n);
              },
            },
            {
              key: "metricReportError",
              value: function (t) {
                var e = t.type,
                  n = t.reason,
                  r = t.server,
                  i = v.a,
                  o = Math.floor(Date.now() / 1e3),
                  s = n || {},
                  c = s.config,
                  u = s.code,
                  l = c || {},
                  p = l.url,
                  f = l.baseURL,
                  d = l.funcName,
                  y = n.toJSON ? n.toJSON() : {},
                  b = y.message,
                  w = a()(y, m),
                  S = {
                    server: r,
                    type: e,
                    host: f,
                    uri: p || d,
                    errCode: "".concat(u),
                    errmsg: b,
                    sub_version: "1.1.0",
                  };
                h.a.report(
                  {
                    name: i,
                    dim: g({}, S),
                    field: { value: 1 },
                    exlog: g({}, w),
                  },
                  o
                );
              },
            },
            {
              key: "reportError",
              value: function (t) {
                var e = t.code ? "".concat(t.code) : "";
                h.a.report(
                  {
                    name: v.a,
                    dim: {
                      server: t.server,
                      type: t.type,
                      host: t.origin,
                      uri: t.pathname,
                      errCode: e,
                      err_code: e,
                      errmsg: t.toString(),
                      sub_version: "1.1.0",
                    },
                    field: { value: 1 },
                    exlog: t.toJSON ? t.toJSON() : {},
                  },
                  Object(v.g)()
                );
              },
            },
            {
              key: "metricReportBeforeRequest",
              value: function (t) {
                var e = t.reportResult,
                  n = t.exportReportParams;
                (e || n) && (t.requestTs = Date.now());
              },
            },
            {
              key: "metricReportAfterResponse",
              value: function (t, e) {
                this._metricReportAfterResponse(v.c, t, e);
              },
            },
            {
              key: "metricReportAfterResponseForSignaling",
              value: function (t, e) {
                this._metricReportAfterResponse(v.d, t, e);
              },
            },
            {
              key: "_metricReportAfterResponse",
              value: function (t, e, n) {
                if (e && n) {
                  var r = e.requestTs,
                    i = void 0 === r ? 0 : r,
                    o = e.reportResult,
                    a = e.tag,
                    s = e.baseURL,
                    c = e.url,
                    u = void 0 === c ? "" : c,
                    l = e.pathname,
                    p = e.responseTs,
                    f = void 0 === p ? Date.now() : p,
                    v = e.status,
                    m = void 0 === v ? 0 : v,
                    y = e.temp,
                    b = e.requestBy,
                    w = void 0 === b ? "" : b,
                    S = e.extReportData,
                    E = void 0 === S ? null : S,
                    _ = n.status,
                    I = void 0 === _ ? m : _,
                    T = n.isBusinessSuccess,
                    O = void 0 !== T && T,
                    k = n.code,
                    R = void 0 === k ? "" : k;
                  if (o) {
                    var U = Object(d.I)(s),
                      C = u ? "/".concat(u.replace(/^\/+/, "")) : "",
                      P = {};
                    "string" === typeof y && (P = { temp: y });
                    var N = {
                      dim: g(
                        {
                          domain: U.host || "",
                          path: l || C,
                          useTag: a,
                          api_retcode: "".concat(I),
                          api_busscode: "".concat(R),
                          api_success: "".concat(O ? 1 : 0),
                          carrier: w,
                          sub_version: "1.1.0",
                        },
                        P
                      ),
                      field: { value: f - i },
                      name: t,
                    };
                    E && E.uid && (N.uid = E.uid), h.a.report(N, f);
                  }
                }
              },
            },
          ]),
          t
        );
      })();
      e.a = b;
    },
    zvxk: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return d;
      });
      var r = n("cQwn"),
        i = n.n(r),
        o = n("V4gF"),
        a = n.n(o),
        s = (n("28PD"), n("a5Qt"));
      n.d(e, "a", function () {
        return s.b;
      });
      var c = n("+xEq"),
        u = n("TqI2");
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var f = c.a.isDebug,
        h = c.a.signaling_wss_ip,
        d = (function () {
          var t = a()(
            regeneratorRuntime.mark(function t(e) {
              var n;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(u.a)();
                    case 2:
                      return (
                        (n = t.sent),
                        t.abrupt(
                          "return",
                          Object(s.c)(
                            p(
                              {
                                userInfo: n,
                                isDebug: "true" === f,
                                debugIP: h,
                              },
                              e
                            )
                          )
                        )
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
    },
  },
  [["home.fragments.lucky-gift", "d5452", "4b99f", "46981"]],
]);
