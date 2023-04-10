(window.webpackJsonp = window.webpackJsonp || []).push([
  ["7dcca"],
  {
    "CS+x": function (e, t, o) {
      e.exports = o.p + "images/back.eed4b6c30a45285ce4e3d0a0609056fd.png";
    },
    Hs70: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        i = o("avFb"),
        r = a(i),
        s = a(o("jmMi"));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var o = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" !== typeof t && "function" !== typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (o.scrollListener = o.scrollListener.bind(o)),
            (o.eventListenerOptions = o.eventListenerOptions.bind(o)),
            (o.mousewheelListener = o.mousewheelListener.bind(o)),
            o
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          n(t, [
            {
              key: "componentDidMount",
              value: function () {
                (this.pageLoaded = this.props.pageStart),
                  (this.options = this.eventListenerOptions()),
                  this.attachScrollListener();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                if (this.props.isReverse && this.loadMore) {
                  var e = this.getParentElement(this.scrollComponent);
                  (e.scrollTop =
                    e.scrollHeight -
                    this.beforeScrollHeight +
                    this.beforeScrollTop),
                    (this.loadMore = !1);
                }
                this.attachScrollListener();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.detachScrollListener(), this.detachMousewheelListener();
              },
            },
            {
              key: "isPassiveSupported",
              value: function () {
                var e = !1,
                  t = {
                    get passive() {
                      e = !0;
                    },
                  };
                try {
                  document.addEventListener("test", null, t),
                    document.removeEventListener("test", null, t);
                } catch (o) {}
                return e;
              },
            },
            {
              key: "eventListenerOptions",
              value: function () {
                this.props.useCapture;
                return this.isPassiveSupported()
                  ? { useCapture: this.props.useCapture, passive: !0 }
                  : { passive: !1 };
              },
            },
            {
              key: "setDefaultLoader",
              value: function (e) {
                this.defaultLoader = e;
              },
            },
            {
              key: "detachMousewheelListener",
              value: function () {
                var e = window;
                !1 === this.props.useWindow &&
                  (e = this.scrollComponent.parentNode),
                  e.removeEventListener(
                    "mousewheel",
                    this.mousewheelListener,
                    this.options ? this.options : this.props.useCapture
                  );
              },
            },
            {
              key: "detachScrollListener",
              value: function () {
                var e = window;
                !1 === this.props.useWindow &&
                  (e = this.getParentElement(this.scrollComponent)),
                  e.removeEventListener(
                    "scroll",
                    this.scrollListener,
                    this.options ? this.options : this.props.useCapture
                  ),
                  e.removeEventListener(
                    "resize",
                    this.scrollListener,
                    this.options ? this.options : this.props.useCapture
                  );
              },
            },
            {
              key: "getParentElement",
              value: function (e) {
                var t =
                  this.props.getScrollParent && this.props.getScrollParent();
                return null != t ? t : e && e.parentNode;
              },
            },
            {
              key: "filterProps",
              value: function (e) {
                return e;
              },
            },
            {
              key: "attachScrollListener",
              value: function () {
                var e = this.getParentElement(this.scrollComponent);
                if (this.props.hasMore && e) {
                  var t = window;
                  !1 === this.props.useWindow && (t = e),
                    t.addEventListener(
                      "mousewheel",
                      this.mousewheelListener,
                      this.options ? this.options : this.props.useCapture
                    ),
                    t.addEventListener(
                      "scroll",
                      this.scrollListener,
                      this.options ? this.options : this.props.useCapture
                    ),
                    t.addEventListener(
                      "resize",
                      this.scrollListener,
                      this.options ? this.options : this.props.useCapture
                    ),
                    this.props.initialLoad && this.scrollListener();
                }
              },
            },
            {
              key: "mousewheelListener",
              value: function (e) {
                1 !== e.deltaY ||
                  this.isPassiveSupported() ||
                  e.preventDefault();
              },
            },
            {
              key: "scrollListener",
              value: function () {
                var e = this.scrollComponent,
                  t = window,
                  o = this.getParentElement(e),
                  n = void 0;
                if (this.props.useWindow) {
                  var i =
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body,
                    r = void 0 !== t.pageYOffset ? t.pageYOffset : i.scrollTop;
                  n = this.props.isReverse ? r : this.calculateOffset(e, r);
                } else
                  n = this.props.isReverse
                    ? o.scrollTop
                    : e.scrollHeight - o.scrollTop - o.clientHeight;
                n < Number(this.props.threshold) &&
                  e &&
                  null !== e.offsetParent &&
                  (this.detachScrollListener(),
                  (this.beforeScrollHeight = o.scrollHeight),
                  (this.beforeScrollTop = o.scrollTop),
                  "function" === typeof this.props.loadMore &&
                    (this.props.loadMore((this.pageLoaded += 1)),
                    (this.loadMore = !0)));
              },
            },
            {
              key: "calculateOffset",
              value: function (e, t) {
                return e
                  ? this.calculateTopPosition(e) +
                      (e.offsetHeight - t - window.innerHeight)
                  : 0;
              },
            },
            {
              key: "calculateTopPosition",
              value: function (e) {
                return e
                  ? e.offsetTop + this.calculateTopPosition(e.offsetParent)
                  : 0;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.filterProps(this.props),
                  o = t.children,
                  n = t.element,
                  i = t.hasMore,
                  s = (t.initialLoad, t.isReverse),
                  a = t.loader,
                  l = (t.loadMore, t.pageStart, t.ref),
                  c =
                    (t.threshold,
                    t.useCapture,
                    t.useWindow,
                    t.getScrollParent,
                    (function (e, t) {
                      var o = {};
                      for (var n in e)
                        t.indexOf(n) >= 0 ||
                          (Object.prototype.hasOwnProperty.call(e, n) &&
                            (o[n] = e[n]));
                      return o;
                    })(t, [
                      "children",
                      "element",
                      "hasMore",
                      "initialLoad",
                      "isReverse",
                      "loader",
                      "loadMore",
                      "pageStart",
                      "ref",
                      "threshold",
                      "useCapture",
                      "useWindow",
                      "getScrollParent",
                    ]));
                c.ref = function (t) {
                  (e.scrollComponent = t), l && l(t);
                };
                var u = [o];
                return (
                  i &&
                    (a
                      ? s
                        ? u.unshift(a)
                        : u.push(a)
                      : this.defaultLoader &&
                        (s
                          ? u.unshift(this.defaultLoader)
                          : u.push(this.defaultLoader))),
                  r.default.createElement(n, c, u)
                );
              },
            },
          ]),
          t
        );
      })(i.Component);
      (l.propTypes = {
        children: s.default.node.isRequired,
        element: s.default.node,
        hasMore: s.default.bool,
        initialLoad: s.default.bool,
        isReverse: s.default.bool,
        loader: s.default.node,
        loadMore: s.default.func.isRequired,
        pageStart: s.default.number,
        ref: s.default.func,
        getScrollParent: s.default.func,
        threshold: s.default.number,
        useCapture: s.default.bool,
        useWindow: s.default.bool,
      }),
        (l.defaultProps = {
          element: "div",
          hasMore: !1,
          initialLoad: !0,
          pageStart: 0,
          ref: null,
          threshold: 250,
          useWindow: !0,
          isReverse: !1,
          useCapture: !1,
          loader: null,
          getScrollParent: null,
        }),
        (t.default = l),
        (e.exports = t.default);
    },
    P3Bp: function (e, t, o) {
      e.exports = o("Hs70");
    },
    XsKL: function (e, t, o) {
      e.exports =
        o.p + "images/record-bottom.6aea68b9193028333b9a1e38fb521bcd.png";
    },
    an19: function (e, t, o) {
      e.exports =
        o.p + "images/record-box1.b930d843edc683f1c998807ab9b21212.png";
    },
    lPro: function (e, t, o) {
      "use strict";
      o.r(t);
      o("RlNQ");
      var n = o("rIiI"),
        i = o.n(n),
        r = o("58BP"),
        s = o.n(r),
        a = o("Ptek"),
        l = o.n(a),
        c = o("gy9q"),
        u = o.n(c),
        d = o("7DFi"),
        p = o.n(d),
        h = o("TJEx"),
        f = o.n(h),
        v = o("cQwn"),
        m = o.n(v),
        b = o("avFb"),
        g = o("kPK6"),
        L = o.n(g),
        w = o("P3Bp"),
        y = o.n(w),
        P = o("ZCgF"),
        E = o.n(P),
        S = o("cOjp"),
        C = o("vARU"),
        N = o("J6jk"),
        R = o("iYl+"),
        k = o("XsKL"),
        x = o.n(k),
        _ = o("an19"),
        M = o.n(_),
        O = o("zhGi"),
        T = o.n(O),
        I = o("CS+x"),
        j = o.n(I);
      function H(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var o,
            n = f()(e);
          if (t) {
            var i = f()(this).constructor;
            o = Reflect.construct(n, arguments, i);
          } else o = n.apply(this, arguments);
          return p()(this, o);
        };
      }
      var D = S.b.log,
        W = (function (e) {
          u()(o, e);
          var t = H(o);
          function o(e) {
            var n;
            return (
              i()(this, o),
              (n = t.call(this, e)),
              m()(l()(n), "fetchRecordData", function (e) {
                if (!n.isLoading) {
                  var t = null === e || void 0 === e ? void 0 : e.isNewFetch;
                  !0 === t && n.setState({ pageNum: 0, awardList: [] });
                  var o = n.state,
                    i = o.pageNum,
                    r = o.awardList;
                  (0 === i || t) && n.setState({ firstLoad: !0 }),
                    (n.isLoading = !0),
                    N.a
                      .getUserPrizeRecordList({
                        iStart: t ? 0 : 10 * i,
                        iCount: 10,
                      })
                      .then(function (e) {
                        var o;
                        D("获取到".concat(t ? 1 : i + 1, "页中奖记录"), e),
                          n.setState({
                            awardList: t
                              ? null === e || void 0 === e
                                ? void 0
                                : e.vRecordList
                              : r.concat(
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.vRecordList
                                ),
                            pageNum: t ? 1 : i + 1,
                            firstLoad: !1,
                            hasMore:
                              (null === e ||
                              void 0 === e ||
                              null === (o = e.vRecordList) ||
                              void 0 === o
                                ? void 0
                                : o.length) >= 10,
                          }),
                          (n.isLoading = !1);
                      })
                      .catch(function (e) {
                        D("获取".concat(t ? 1 : i + 1, "页中奖记录失败"), e),
                          n.setState({ firstLoad: !1 }),
                          (n.isLoading = !1);
                      });
                }
              }),
              m()(l()(n), "changePayType", function (e) {
                switch (e) {
                  case 1002:
                    return "diamond";
                  case 1003:
                    return "coin";
                  default:
                    return "";
                }
              }),
              m()(l()(n), "handleGoBack", function () {
                (0, n.props.changeCurPanel)(1);
              }),
              (n.state = {
                firstLoad: !1,
                awardList: [],
                pageNum: 0,
                hasMore: !0,
              }),
              (n.isLoading = !1),
              n
            );
          }
          return (
            s()(o, [
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t;
                  3 !== (null === e || void 0 === e ? void 0 : e.curPanel) &&
                    3 ===
                      (null === (t = this.props) || void 0 === t
                        ? void 0
                        : t.curPanel) &&
                    this.fetchRecordData({ isNewFetch: !0 });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    o = e.className,
                    n = e.langPkg,
                    i = e.curPanel,
                    r = this.state,
                    s = r.firstLoad,
                    a = r.awardList,
                    l = r.hasMore,
                    c = n || {},
                    u = c.noRecord,
                    d = c.loading,
                    p = c.gift,
                    h = c.rewards,
                    f = c.livingRoom,
                    v = c.time,
                    m = c.winningRecords,
                    g = L()(t, o, "n-as-rel");
                  return 3 === i
                    ? b.createElement(
                        "div",
                        { className: g },
                        b.createElement(
                          "div",
                          { className: "".concat(t, "__nav n-fx-bc") },
                          b.createElement(
                            "div",
                            {
                              onClick: this.handleGoBack,
                              className: "n-as-pointer",
                            },
                            b.createElement(C.a, {
                              src: j.a,
                              width: 20,
                              className: "".concat(t, "__back-btn"),
                            })
                          )
                        ),
                        b.createElement(
                          "div",
                          {
                            className: "".concat(t, "__title n-fx-cc n-as-fw"),
                          },
                          m
                        ),
                        b.createElement(
                          "div",
                          {
                            className: "".concat(
                              t,
                              "__header n-as-bd-box n-fx-bc"
                            ),
                          },
                          b.createElement("div", { className: "box" }, p),
                          b.createElement("div", { className: "prize" }, h),
                          b.createElement("div", { className: "room" }, f),
                          b.createElement("div", { className: "time" }, v)
                        ),
                        b.createElement(
                          "div",
                          { className: "".concat(t, "__center n-as-bd-box") },
                          b.createElement(
                            y.a,
                            {
                              loadMore: this.fetchRecordData,
                              hasMore: l,
                              initialLoad: !1,
                              useWindow: !0,
                            },
                            0 === a.length && s
                              ? b.createElement(
                                  "div",
                                  {
                                    className: "".concat(
                                      t,
                                      "__load-data n-fx-cc"
                                    ),
                                  },
                                  d
                                )
                              : null,
                            0 !== a.length || s
                              ? null
                              : b.createElement(
                                  "div",
                                  {
                                    className: "".concat(
                                      t,
                                      "__no-data n-fx-cc"
                                    ),
                                  },
                                  u
                                ),
                            a.length > 0
                              ? a.map(function (e, t) {
                                  var o, n, i, r, s, a, l, c, u, d;
                                  return b.createElement(
                                    "div",
                                    {
                                      key: t,
                                      className: "row c9  n-as-bd-box n-fx-bc",
                                    },
                                    b.createElement(
                                      "div",
                                      { className: "box" },
                                      b.createElement(C.a, {
                                        className:
                                          10 ===
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.iSendItemCount)
                                            ? "box-img-type2"
                                            : "box-img-type1",
                                        src:
                                          10 ===
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.iSendItemCount)
                                            ? T.a
                                            : M.a,
                                      })
                                    ),
                                    b.createElement(
                                      "div",
                                      { className: "prize n-fx-cc" },
                                      b.createElement(C.a, {
                                        src:
                                          null === e ||
                                          void 0 === e ||
                                          null === (o = e.vRecvItem) ||
                                          void 0 === o ||
                                          null === (n = o[0]) ||
                                          void 0 === n
                                            ? void 0
                                            : n.sIconUrl,
                                      }),
                                      "*",
                                      (~[2, 10].indexOf(
                                        null === e ||
                                          void 0 === e ||
                                          null === (i = e.vRecvItem) ||
                                          void 0 === i ||
                                          null === (r = i[0]) ||
                                          void 0 === r
                                          ? void 0
                                          : r.iBoxAwardType
                                      )
                                        ? (null === e ||
                                          void 0 === e ||
                                          null === (s = e.vRecvItem) ||
                                          void 0 === s ||
                                          null === (a = s[0]) ||
                                          void 0 === a
                                            ? void 0
                                            : a.iItemCount) *
                                          (null === e ||
                                          void 0 === e ||
                                          null === (l = e.vRecvItem) ||
                                          void 0 === l ||
                                          null === (c = l[0]) ||
                                          void 0 === c
                                            ? void 0
                                            : c.iItemValue)
                                        : null === e ||
                                          void 0 === e ||
                                          null === (u = e.vRecvItem) ||
                                          void 0 === u ||
                                          null === (d = u[0]) ||
                                          void 0 === d
                                        ? void 0
                                        : d.iItemCount) || 1
                                    ),
                                    b.createElement(
                                      "div",
                                      { className: "room" },
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.sRecvName
                                    ),
                                    b.createElement(
                                      "div",
                                      { className: "time" },
                                      null !== e && void 0 !== e && e.iTimeStamp
                                        ? E()(1e3 * e.iTimeStamp).format(
                                            "MM-DD HH:mm"
                                          )
                                        : ""
                                    )
                                  );
                                })
                              : null
                          )
                        ),
                        b.createElement(C.a, {
                          src: x.a,
                          className: "".concat(t, "__bottom"),
                        })
                      )
                    : "";
                },
              },
            ]),
            o
          );
        })(b.Component);
      m()(W, "defaultProps", {
        prefixCls: "LuckyGiftRecord",
        className: "",
        langPkg: {},
      }),
        (t.default = Object(R.b)(W));
    },
    zhGi: function (e, t, o) {
      e.exports =
        o.p + "images/record-box2.aa45d6109bca3e69eda83ba9421b3e18.png";
    },
  },
]);
