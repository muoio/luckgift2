(window.webpackJsonp = window.webpackJsonp || []).push([
  ["9f1b0"],
  {
    "CS+x": function (e, t, n) {
      e.exports = n.p + "images/back.eed4b6c30a45285ce4e3d0a0609056fd.png";
    },
    M8wd: function (e, t, n) {
      "use strict";
      n.r(t);
      n("RlNQ");
      var a = n("rIiI"),
        i = n.n(a),
        c = n("58BP"),
        o = n.n(c),
        r = n("Ptek"),
        s = n.n(r),
        l = n("gy9q"),
        u = n.n(l),
        f = n("7DFi"),
        d = n.n(f),
        m = n("TJEx"),
        h = n.n(m),
        p = n("cQwn"),
        v = n.n(p),
        g = n("avFb"),
        b = n("kPK6"),
        k = n.n(b),
        y = n("vARU"),
        _ = n("+xEq"),
        w = n("KFtC"),
        x = n("lK0P"),
        E = n.n(x),
        P = n("etuh"),
        N = n.n(P),
        R = n("CS+x"),
        C = n.n(R);
      function I(e) {
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
          var n,
            a = h()(e);
          if (t) {
            var i = h()(this).constructor;
            n = Reflect.construct(a, arguments, i);
          } else n = a.apply(this, arguments);
          return d()(this, n);
        };
      }
      var L = (function (e) {
        u()(n, e);
        var t = I(n);
        function n(e) {
          var a;
          return (
            i()(this, n),
            (a = t.call(this, e)),
            v()(s()(a), "initIframeDom", function (e) {
              a.iframe = e;
            }),
            v()(s()(a), "initIframe", function () {
              a.iframe.contentWindow.postMessage(
                { uid: a.ruleKey, type: "height" },
                "*"
              );
            }),
            v()(s()(a), "handleWndMessage", function (e) {
              var t = e.data;
              if (Object(w.u)(e.origin)) {
                var n = (null === t || void 0 === t ? void 0 : t.height) || 80;
                (a.isLoadHeight =
                  (null === t || void 0 === t ? void 0 : t.height) > 0),
                  a.setState({ iframeHeight: n });
              }
            }),
            v()(s()(a), "handleGoBack", function () {
              (0, a.props.changeCurPanel)(1);
            }),
            (a.state = { iframeHeight: 80 }),
            (a.lang = Object(w.k)()),
            (a.isLoadHeight = !1),
            (a.ruleKey = "rule"),
            a
          );
        }
        return (
          o()(n, [
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t;
                this.isLoadHeight ||
                  2 === (null === e || void 0 === e ? void 0 : e.curPanel) ||
                  2 !==
                    (null === (t = this.props) || void 0 === t
                      ? void 0
                      : t.curPanel) ||
                  (window.addEventListener(
                    "message",
                    this.handleWndMessage,
                    !1
                  ),
                  this.initIframe());
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                window.removeEventListener(
                  "message",
                  this.handleWndMessage,
                  !1
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.prefixCls,
                  n = e.className,
                  a = e.userInfo,
                  i = e.langPkg,
                  c = e.curPanel,
                  o = this.state.iframeHeight;
                return 2 === c
                  ? g.createElement(
                      "div",
                      { className: k()(t, n) },
                      g.createElement(
                        "div",
                        { className: "".concat(t, "__nav n-fx-bc") },
                        g.createElement(
                          "div",
                          {
                            onClick: this.handleGoBack,
                            className: "n-as-pointer",
                          },
                          g.createElement(y.a, {
                            src: C.a,
                            width: 20,
                            className: "".concat(t, "__back-btn"),
                          })
                        )
                      ),
                      g.createElement(
                        "div",
                        { className: "".concat(t, "__title n-fx-cc n-as-fw") },
                        null === i || void 0 === i ? void 0 : i.playRules
                      ),
                      g.createElement(y.a, {
                        src: E.a,
                        className: "".concat(t, "__top"),
                      }),
                      g.createElement(
                        "div",
                        { className: "".concat(t, "__center") },
                        g.createElement("iframe", {
                          ref: this.initIframeDom,
                          title: "rule",
                          className: "".concat(t, "__iframe"),
                          scrolling: "no",
                          onLoad: this.initIframe,
                          height: "".concat(o, "px"),
                          src: ""
                            .concat(
                              _.a.article_domain,
                              "/p/multi/luckybox.html?_lang="
                            )
                            .concat(
                              (null === a || void 0 === a ? void 0 : a.lang) ||
                                1033
                            ),
                        })
                      ),
                      g.createElement(y.a, {
                        src: N.a,
                        className: "".concat(t, "__bottom"),
                      })
                    )
                  : "";
              },
            },
          ]),
          n
        );
      })(g.Component);
      v()(L, "defaultProps", {
        prefixCls: "LuckyGiftRule",
        className: "",
        langPkg: {},
      }),
        (t.default = L);
    },
    etuh: function (e, t, n) {
      e.exports =
        n.p + "images/rule-bottom.28027e0d8c52e4ffc0479ae12173224e.png";
    },
    lK0P: function (e, t, n) {
      e.exports = n.p + "images/rule-top.ddbba2db830a2e1104346111137b41fc.png";
    },
  },
]);
