(window.webpackJsonp = window.webpackJsonp || []).push([
  ["9ef4b", "bd40e"],
  {
    "+nIE": function (t, e, n) {
      t.exports = n.p + "images/button10.efcbe956915d48c235c068f2b09930cf.png";
    },
    "/L9M": function (t, e, n) {
      t.exports = n("4KFe")(68);
    },
    0: function (t, e) {},
    "0unM": function (t, e, n) {
      t.exports = n("4KFe")(13);
    },
    1: function (t, e) {},
    "1Xss": function (t, e, n) {
      var r = n("lwBl"),
        i = Math.imul;
      r(
        r.S +
          r.F *
            n("L2qc")(function () {
              return -5 != i(4294967295, 5) || 2 != i.length;
            }),
        "Math",
        {
          imul: function (t, e) {
            var n = 65535,
              r = +t,
              i = +e,
              o = n & r,
              a = n & i;
            return (
              0 |
              (o * a +
                ((((n & (r >>> 16)) * a + o * (n & (i >>> 16))) << 16) >>> 0))
            );
          },
        }
      );
    },
    "1zRR": function (t, e, n) {
      "use strict";
      var r;
      var i = n("7PSS").codes,
        o = i.ERR_MISSING_ARGS,
        a = i.ERR_STREAM_DESTROYED;
      function s(t) {
        if (t) throw t;
      }
      function c(t, e, i, o) {
        o = (function (t) {
          var e = !1;
          return function () {
            e || ((e = !0), t.apply(void 0, arguments));
          };
        })(o);
        var s = !1;
        t.on("close", function () {
          s = !0;
        }),
          void 0 === r && (r = n("yq2O")),
          r(t, { readable: e, writable: i }, function (t) {
            if (t) return o(t);
            (s = !0), o();
          });
        var c = !1;
        return function (e) {
          if (!s && !c)
            return (
              (c = !0),
              (function (t) {
                return t.setHeader && "function" === typeof t.abort;
              })(t)
                ? t.abort()
                : "function" === typeof t.destroy
                ? t.destroy()
                : void o(e || new a("pipe"))
            );
        };
      }
      function u(t) {
        t();
      }
      function l(t, e) {
        return t.pipe(e);
      }
      function f(t) {
        return t.length
          ? "function" !== typeof t[t.length - 1]
            ? s
            : t.pop()
          : s;
      }
      t.exports = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        var r,
          i = f(e);
        if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
          throw new o("streams");
        var a = e.map(function (t, n) {
          var o = n < e.length - 1;
          return c(t, o, n > 0, function (t) {
            r || (r = t), t && a.forEach(u), o || (a.forEach(u), i(r));
          });
        });
        return e.reduce(l);
      };
    },
    "2+ni": function (t, e, n) {
      n("gYY0")("Int32", 4, function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    "2MzT": function (t, e, n) {
      "use strict";
      var r = n("AeXG"),
        i = n.n(r),
        o = n("9sp7"),
        a = n.n(o),
        s = n("P+UK"),
        c = n.n(s),
        u = n("vlBN"),
        l = n.n(u),
        f = n("HNvz"),
        h = n.n(f),
        p = n("avFb"),
        d = n.n(p),
        _ = n("jmMi"),
        v = n.n(_),
        m = n("lftJ"),
        g = { adjustX: 1, adjustY: 1 },
        y = [0, 0],
        R = {
          left: {
            points: ["cr", "cl"],
            overflow: g,
            offset: [-4, 0],
            targetOffset: y,
          },
          right: {
            points: ["cl", "cr"],
            overflow: g,
            offset: [4, 0],
            targetOffset: y,
          },
          top: {
            points: ["bc", "tc"],
            overflow: g,
            offset: [0, -4],
            targetOffset: y,
          },
          bottom: {
            points: ["tc", "bc"],
            overflow: g,
            offset: [0, 4],
            targetOffset: y,
          },
          topLeft: {
            points: ["bl", "tl"],
            overflow: g,
            offset: [0, -4],
            targetOffset: y,
          },
          leftTop: {
            points: ["tr", "tl"],
            overflow: g,
            offset: [-4, 0],
            targetOffset: y,
          },
          topRight: {
            points: ["br", "tr"],
            overflow: g,
            offset: [0, -4],
            targetOffset: y,
          },
          rightTop: {
            points: ["tl", "tr"],
            overflow: g,
            offset: [4, 0],
            targetOffset: y,
          },
          bottomRight: {
            points: ["tr", "br"],
            overflow: g,
            offset: [0, 4],
            targetOffset: y,
          },
          rightBottom: {
            points: ["bl", "br"],
            overflow: g,
            offset: [4, 0],
            targetOffset: y,
          },
          bottomLeft: {
            points: ["tl", "bl"],
            overflow: g,
            offset: [0, 4],
            targetOffset: y,
          },
          leftBottom: {
            points: ["br", "bl"],
            overflow: g,
            offset: [-4, 0],
            targetOffset: y,
          },
        },
        b = (function (t) {
          function e() {
            return c()(this, e), l()(this, t.apply(this, arguments));
          }
          return (
            h()(e, t),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.trigger;
              t && t.forcePopupAlign();
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.overlay,
                n = t.prefixCls,
                r = t.id;
              return d.a.createElement(
                "div",
                { className: n + "-inner", id: r, role: "tooltip" },
                "function" === typeof e ? e() : e
              );
            }),
            e
          );
        })(d.a.Component);
      b.propTypes = {
        prefixCls: v.a.string,
        overlay: v.a.oneOfType([v.a.node, v.a.func]).isRequired,
        id: v.a.string,
        trigger: v.a.any,
      };
      var w = b,
        E = (function (t) {
          function e() {
            var n, r, i;
            c()(this, e);
            for (var o = arguments.length, a = Array(o), s = 0; s < o; s++)
              a[s] = arguments[s];
            return (
              (n = r = l()(this, t.call.apply(t, [this].concat(a)))),
              (r.getPopupElement = function () {
                var t = r.props,
                  e = t.arrowContent,
                  n = t.overlay,
                  i = t.prefixCls,
                  o = t.id;
                return [
                  d.a.createElement(
                    "div",
                    { className: i + "-arrow", key: "arrow" },
                    e
                  ),
                  d.a.createElement(w, {
                    key: "content",
                    trigger: r.trigger,
                    prefixCls: i,
                    id: o,
                    overlay: n,
                  }),
                ];
              }),
              (r.saveTrigger = function (t) {
                r.trigger = t;
              }),
              (i = n),
              l()(r, i)
            );
          }
          return (
            h()(e, t),
            (e.prototype.getPopupDomNode = function () {
              return this.trigger.getPopupDomNode();
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.overlayClassName,
                n = t.trigger,
                r = t.mouseEnterDelay,
                o = t.mouseLeaveDelay,
                s = t.overlayStyle,
                c = t.prefixCls,
                u = t.children,
                l = t.onVisibleChange,
                f = t.afterVisibleChange,
                h = t.transitionName,
                p = t.animation,
                _ = t.placement,
                v = t.align,
                g = t.destroyTooltipOnHide,
                y = t.defaultVisible,
                b = t.getTooltipContainer,
                w = a()(t, [
                  "overlayClassName",
                  "trigger",
                  "mouseEnterDelay",
                  "mouseLeaveDelay",
                  "overlayStyle",
                  "prefixCls",
                  "children",
                  "onVisibleChange",
                  "afterVisibleChange",
                  "transitionName",
                  "animation",
                  "placement",
                  "align",
                  "destroyTooltipOnHide",
                  "defaultVisible",
                  "getTooltipContainer",
                ]),
                E = i()({}, w);
              return (
                "visible" in this.props &&
                  (E.popupVisible = this.props.visible),
                d.a.createElement(
                  m.a,
                  i()(
                    {
                      popupClassName: e,
                      ref: this.saveTrigger,
                      prefixCls: c,
                      popup: this.getPopupElement,
                      action: n,
                      builtinPlacements: R,
                      popupPlacement: _,
                      popupAlign: v,
                      getPopupContainer: b,
                      onPopupVisibleChange: l,
                      afterPopupVisibleChange: f,
                      popupTransitionName: h,
                      popupAnimation: p,
                      defaultPopupVisible: y,
                      destroyPopupOnHide: g,
                      mouseLeaveDelay: o,
                      popupStyle: s,
                      mouseEnterDelay: r,
                    },
                    E
                  ),
                  u
                )
              );
            }),
            e
          );
        })(p.Component);
      (E.propTypes = {
        trigger: v.a.any,
        children: v.a.any,
        defaultVisible: v.a.bool,
        visible: v.a.bool,
        placement: v.a.string,
        transitionName: v.a.oneOfType([v.a.string, v.a.object]),
        animation: v.a.any,
        onVisibleChange: v.a.func,
        afterVisibleChange: v.a.func,
        overlay: v.a.oneOfType([v.a.node, v.a.func]).isRequired,
        overlayStyle: v.a.object,
        overlayClassName: v.a.string,
        prefixCls: v.a.string,
        mouseEnterDelay: v.a.number,
        mouseLeaveDelay: v.a.number,
        getTooltipContainer: v.a.func,
        destroyTooltipOnHide: v.a.bool,
        align: v.a.object,
        arrowContent: v.a.any,
        id: v.a.string,
      }),
        (E.defaultProps = {
          prefixCls: "rc-tooltip",
          mouseEnterDelay: 0,
          destroyTooltipOnHide: !1,
          mouseLeaveDelay: 0.1,
          align: {},
          placement: "right",
          trigger: ["hover"],
          arrowContent: null,
        });
      var C = E;
      e.a = C;
    },
    "2ufl": function (t, e, n) {
      ((e = t.exports = n("tJMH")).Stream = e),
        (e.Readable = e),
        (e.Writable = n("n12j")),
        (e.Duplex = n("AeNx")),
        (e.Transform = n("trWP")),
        (e.PassThrough = n("QJbY")),
        (e.finished = n("yq2O")),
        (e.pipeline = n("1zRR"));
    },
    "3mSk": function (t, e, n) {
      "use strict";
      var r = n("C6AJ"),
        i = n("Y0+P"),
        o = n("LUnx"),
        a = n("9TcU"),
        s = n("6nwj"),
        c = n("f/wc"),
        u = n("L2qc"),
        l = n("NWdW"),
        f = n("V+4i"),
        h = n("Vwta"),
        p = n("S3hb"),
        d = n("Pmkc").f,
        _ = n("fDZT").f,
        v = n("Df7L"),
        m = n("cHkT"),
        g = "ArrayBuffer",
        y = "DataView",
        R = "Wrong index!",
        b = r.ArrayBuffer,
        w = r.DataView,
        E = r.Math,
        C = r.RangeError,
        T = r.Infinity,
        S = b,
        I = E.abs,
        O = E.pow,
        M = E.floor,
        P = E.log,
        k = E.LN2,
        A = "buffer",
        N = "byteLength",
        L = "byteOffset",
        x = i ? "_b" : A,
        D = i ? "_l" : N,
        B = i ? "_o" : L;
      function G(t, e, n) {
        var r,
          i,
          o,
          a = new Array(n),
          s = 8 * n - e - 1,
          c = (1 << s) - 1,
          u = c >> 1,
          l = 23 === e ? O(2, -24) - O(2, -77) : 0,
          f = 0,
          h = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          (t = I(t)) != t || t === T
            ? ((i = t != t ? 1 : 0), (r = c))
            : ((r = M(P(t) / k)),
              t * (o = O(2, -r)) < 1 && (r--, (o *= 2)),
              (t += r + u >= 1 ? l / o : l * O(2, 1 - u)) * o >= 2 &&
                (r++, (o /= 2)),
              r + u >= c
                ? ((i = 0), (r = c))
                : r + u >= 1
                ? ((i = (t * o - 1) * O(2, e)), (r += u))
                : ((i = t * O(2, u - 1) * O(2, e)), (r = 0)));
          e >= 8;
          a[f++] = 255 & i, i /= 256, e -= 8
        );
        for (
          r = (r << e) | i, s += e;
          s > 0;
          a[f++] = 255 & r, r /= 256, s -= 8
        );
        return (a[--f] |= 128 * h), a;
      }
      function U(t, e, n) {
        var r,
          i = 8 * n - e - 1,
          o = (1 << i) - 1,
          a = o >> 1,
          s = i - 7,
          c = n - 1,
          u = t[c--],
          l = 127 & u;
        for (u >>= 7; s > 0; l = 256 * l + t[c], c--, s -= 8);
        for (
          r = l & ((1 << -s) - 1), l >>= -s, s += e;
          s > 0;
          r = 256 * r + t[c], c--, s -= 8
        );
        if (0 === l) l = 1 - a;
        else {
          if (l === o) return r ? NaN : u ? -T : T;
          (r += O(2, e)), (l -= a);
        }
        return (u ? -1 : 1) * r * O(2, l - e);
      }
      function j(t) {
        return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
      }
      function F(t) {
        return [255 & t];
      }
      function V(t) {
        return [255 & t, (t >> 8) & 255];
      }
      function Y(t) {
        return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
      }
      function W(t) {
        return G(t, 52, 8);
      }
      function H(t) {
        return G(t, 23, 4);
      }
      function K(t, e, n) {
        _(t.prototype, e, {
          get: function () {
            return this[n];
          },
        });
      }
      function z(t, e, n, r) {
        var i = p(+n);
        if (i + e > t[D]) throw C(R);
        var o = t[x]._b,
          a = i + t[B],
          s = o.slice(a, a + e);
        return r ? s : s.reverse();
      }
      function X(t, e, n, r, i, o) {
        var a = p(+n);
        if (a + e > t[D]) throw C(R);
        for (var s = t[x]._b, c = a + t[B], u = r(+i), l = 0; l < e; l++)
          s[c + l] = u[o ? l : e - l - 1];
      }
      if (a.ABV) {
        if (
          !u(function () {
            b(1);
          }) ||
          !u(function () {
            new b(-1);
          }) ||
          u(function () {
            return new b(), new b(1.5), new b(NaN), b.name != g;
          })
        ) {
          for (
            var q,
              Q = ((b = function (t) {
                return l(this, b), new S(p(t));
              }).prototype = S.prototype),
              J = d(S),
              Z = 0;
            J.length > Z;

          )
            (q = J[Z++]) in b || s(b, q, S[q]);
          o || (Q.constructor = b);
        }
        var $ = new w(new b(2)),
          tt = w.prototype.setInt8;
        $.setInt8(0, 2147483648),
          $.setInt8(1, 2147483649),
          (!$.getInt8(0) && $.getInt8(1)) ||
            c(
              w.prototype,
              {
                setInt8: function (t, e) {
                  tt.call(this, t, (e << 24) >> 24);
                },
                setUint8: function (t, e) {
                  tt.call(this, t, (e << 24) >> 24);
                },
              },
              !0
            );
      } else
        (b = function (t) {
          l(this, b, g);
          var e = p(t);
          (this._b = v.call(new Array(e), 0)), (this[D] = e);
        }),
          (w = function (t, e, n) {
            l(this, w, y), l(t, b, y);
            var r = t[D],
              i = f(e);
            if (i < 0 || i > r) throw C("Wrong offset!");
            if (i + (n = void 0 === n ? r - i : h(n)) > r)
              throw C("Wrong length!");
            (this[x] = t), (this[B] = i), (this[D] = n);
          }),
          i && (K(b, N, "_l"), K(w, A, "_b"), K(w, N, "_l"), K(w, L, "_o")),
          c(w.prototype, {
            getInt8: function (t) {
              return (z(this, 1, t)[0] << 24) >> 24;
            },
            getUint8: function (t) {
              return z(this, 1, t)[0];
            },
            getInt16: function (t) {
              var e = z(this, 2, t, arguments[1]);
              return (((e[1] << 8) | e[0]) << 16) >> 16;
            },
            getUint16: function (t) {
              var e = z(this, 2, t, arguments[1]);
              return (e[1] << 8) | e[0];
            },
            getInt32: function (t) {
              return j(z(this, 4, t, arguments[1]));
            },
            getUint32: function (t) {
              return j(z(this, 4, t, arguments[1])) >>> 0;
            },
            getFloat32: function (t) {
              return U(z(this, 4, t, arguments[1]), 23, 4);
            },
            getFloat64: function (t) {
              return U(z(this, 8, t, arguments[1]), 52, 8);
            },
            setInt8: function (t, e) {
              X(this, 1, t, F, e);
            },
            setUint8: function (t, e) {
              X(this, 1, t, F, e);
            },
            setInt16: function (t, e) {
              X(this, 2, t, V, e, arguments[2]);
            },
            setUint16: function (t, e) {
              X(this, 2, t, V, e, arguments[2]);
            },
            setInt32: function (t, e) {
              X(this, 4, t, Y, e, arguments[2]);
            },
            setUint32: function (t, e) {
              X(this, 4, t, Y, e, arguments[2]);
            },
            setFloat32: function (t, e) {
              X(this, 4, t, H, e, arguments[2]);
            },
            setFloat64: function (t, e) {
              X(this, 8, t, W, e, arguments[2]);
            },
          });
      m(b, g),
        m(w, y),
        s(w.prototype, a.VIEW, !0),
        (e.ArrayBuffer = b),
        (e.DataView = w);
    },
    "4OHv": function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          function () {
            (this.lUid = 0),
              (this.sLang = ""),
              (this.lRoomType = 0),
              (this.sCountry = ""),
              (this.lRoomId = 0),
              (this.sSystemCode = ""),
              (this.sDeviceModel = "");
          });
      (i.prototype._clone = function () {
        return new r.a.AnchorInfo();
      }),
        (i.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (i.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (i.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lUid),
            t.writeString(1, this.sLang),
            t.writeInt64(2, this.lRoomType),
            t.writeString(3, this.sCountry),
            t.writeInt64(4, this.lRoomId),
            t.writeString(5, this.sSystemCode),
            t.writeString(6, this.sDeviceModel);
        }),
        (i.prototype.readFrom = function (t) {
          (this.lUid = t.readInt64(0, !1, this.lUid)),
            (this.sLang = t.readString(1, !1, this.sLang)),
            (this.lRoomType = t.readInt64(2, !1, this.lRoomType)),
            (this.sCountry = t.readString(3, !1, this.sCountry)),
            (this.lRoomId = t.readInt64(4, !1, this.lRoomId)),
            (this.sSystemCode = t.readString(5, !1, this.sSystemCode)),
            (this.sDeviceModel = t.readString(6, !1, this.sDeviceModel));
        }),
        (r.a.AnchorInfo = i);
    },
    "4fyB": function (t, e, n) {
      var r = n("ZZY+"),
        i = n("WA5N");
      n("5rNb")("getPrototypeOf", function () {
        return function (t) {
          return i(r(t));
        };
      });
    },
    "5orL": function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i = n("ZxgU"),
        o = function () {
          this.sResource = "";
        };
      (o.prototype._clone = function () {
        return new r.a.ChatMsgEffect();
      }),
        (o.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (o.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (o.prototype.writeTo = function (t) {
          t.writeString(0, this.sResource);
        }),
        (o.prototype.readFrom = function (t) {
          this.sResource = t.readString(0, !1, this.sResource);
        }),
        (r.a.ChatMsgEffect = o);
      var a = function () {
        (this.sResource = ""),
          (this.iRoomStatus = 0),
          (this.iMP4Width = 0),
          (this.iMP4Height = 0),
          (this.sMP4Resource = "");
      };
      (a.prototype._clone = function () {
        return new r.a.BigAnimEffect();
      }),
        (a.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (a.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (a.prototype.writeTo = function (t) {
          t.writeString(0, this.sResource),
            t.writeInt32(1, this.iRoomStatus),
            t.writeInt32(2, this.iMP4Width),
            t.writeInt32(3, this.iMP4Height),
            t.writeString(4, this.sMP4Resource);
        }),
        (a.prototype.readFrom = function (t) {
          (this.sResource = t.readString(0, !1, this.sResource)),
            (this.iRoomStatus = t.readInt32(1, !1, this.iRoomStatus)),
            (this.iMP4Width = t.readInt32(2, !1, this.iMP4Width)),
            (this.iMP4Height = t.readInt32(3, !1, this.iMP4Height)),
            (this.sMP4Resource = t.readString(4, !1, this.sMP4Resource));
        }),
        (r.a.BigAnimEffect = a);
      var s = function () {
        this.sResource = "";
      };
      (s.prototype._clone = function () {
        return new r.a.MainAnimEffect();
      }),
        (s.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (s.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (s.prototype.writeTo = function (t) {
          t.writeString(0, this.sResource);
        }),
        (s.prototype.readFrom = function (t) {
          this.sResource = t.readString(0, !1, this.sResource);
        }),
        (r.a.MainAnimEffect = s);
      var c = function () {
        this.iStreamerLevel = 0;
      };
      (c.prototype._clone = function () {
        return new r.a.ChatBannerEffect();
      }),
        (c.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (c.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (c.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iStreamerLevel);
        }),
        (c.prototype.readFrom = function (t) {
          this.iStreamerLevel = t.readInt32(0, !1, this.iStreamerLevel);
        }),
        (r.a.ChatBannerEffect = c);
      var u = function () {
        (this.sResource = ""), (this.lTriggerCondition = 0);
      };
      (u.prototype._clone = function () {
        return new r.a.BulletMsgEffect();
      }),
        (u.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (u.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (u.prototype.writeTo = function (t) {
          t.writeString(0, this.sResource),
            t.writeInt64(1, this.lTriggerCondition);
        }),
        (u.prototype.readFrom = function (t) {
          (this.sResource = t.readString(0, !1, this.sResource)),
            (this.lTriggerCondition = t.readInt64(
              1,
              !1,
              this.lTriggerCondition
            ));
        }),
        (r.a.BulletMsgEffect = u);
      var l = function () {
        (this.sResource = ""),
          (this.lTriggerCondition = 0),
          (this.iChannelType = 0),
          (this.iJumpType = 0),
          (this.sJumpUrl = "");
      };
      (l.prototype._clone = function () {
        return new r.a.WorldBannerEffect();
      }),
        (l.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (l.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (l.prototype.writeTo = function (t) {
          t.writeString(0, this.sResource),
            t.writeInt64(1, this.lTriggerCondition),
            t.writeInt32(2, this.iChannelType),
            t.writeInt32(3, this.iJumpType),
            t.writeString(4, this.sJumpUrl);
        }),
        (l.prototype.readFrom = function (t) {
          (this.sResource = t.readString(0, !1, this.sResource)),
            (this.lTriggerCondition = t.readInt64(
              1,
              !1,
              this.lTriggerCondition
            )),
            (this.iChannelType = t.readInt32(2, !1, this.iChannelType)),
            (this.iJumpType = t.readInt32(3, !1, this.iJumpType)),
            (this.sJumpUrl = t.readString(4, !1, this.sJumpUrl));
        }),
        (r.a.WorldBannerEffect = l);
      n("vVVP");
      var f = function () {
        (this.vChatMsgEffect = new i.b.Vector(new r.a.ChatMsgEffect())),
          (this.vBigAnimEffect = new i.b.Vector(new r.a.BigAnimEffect())),
          (this.vMainAnimEffect = new i.b.Vector(new r.a.MainAnimEffect())),
          (this.vChatBannerEffect = new i.b.Vector(new r.a.ChatBannerEffect())),
          (this.vBulletMsgEffect = new i.b.Vector(new r.a.BulletMsgEffect())),
          (this.vWorldBannerEffect = new i.b.Vector(
            new r.a.WorldBannerEffect()
          )),
          (this.vStickerEffect = new i.b.Vector(new r.a.StickerEffect()));
      };
      (f.prototype._clone = function () {
        return new r.a.GiftEffect();
      }),
        (f.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (f.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (f.prototype.writeTo = function (t) {
          t.writeVector(0, this.vChatMsgEffect),
            t.writeVector(1, this.vBigAnimEffect),
            t.writeVector(2, this.vMainAnimEffect),
            t.writeVector(3, this.vChatBannerEffect),
            t.writeVector(4, this.vBulletMsgEffect),
            t.writeVector(5, this.vWorldBannerEffect),
            t.writeVector(6, this.vStickerEffect);
        }),
        (f.prototype.readFrom = function (t) {
          (this.vChatMsgEffect = t.readVector(0, !1, this.vChatMsgEffect)),
            (this.vBigAnimEffect = t.readVector(1, !1, this.vBigAnimEffect)),
            (this.vMainAnimEffect = t.readVector(2, !1, this.vMainAnimEffect)),
            (this.vChatBannerEffect = t.readVector(
              3,
              !1,
              this.vChatBannerEffect
            )),
            (this.vBulletMsgEffect = t.readVector(
              4,
              !1,
              this.vBulletMsgEffect
            )),
            (this.vWorldBannerEffect = t.readVector(
              5,
              !1,
              this.vWorldBannerEffect
            )),
            (this.vStickerEffect = t.readVector(6, !1, this.vStickerEffect));
        }),
        (r.a.GiftEffect = f);
    },
    "5rNb": function (t, e, n) {
      t.exports = n("4KFe")(100);
    },
    "6nwj": function (t, e, n) {
      t.exports = n("4KFe")(17);
    },
    "6tLl": function (t, e, n) {
      t.exports = n("4KFe")(99);
    },
    "7AZq": function (t, e, n) {
      "use strict";
      n.r(e),
        (e.default = {
          namespace: "common_lucky-gift",
          loaders: {
            1025: function () {
              return n.e("e97f9").then(n.bind(null, "Ss6w"));
            },
            1028: function () {
              return n.e("6677f").then(n.bind(null, "XxP4"));
            },
            1033: function () {
              return n.e("ee934").then(n.bind(null, "u3Yx"));
            },
            1034: function () {
              return n.e("e1d24").then(n.bind(null, "kBZE"));
            },
            1041: function () {
              return n.e("49af3").then(n.bind(null, "fFx4"));
            },
            1046: function () {
              return n.e("c5a9c").then(n.bind(null, "tskw"));
            },
            1049: function () {
              return n.e("9013e").then(n.bind(null, "0akh"));
            },
            1054: function () {
              return n.e("cafe6").then(n.bind(null, "LMXJ"));
            },
            1055: function () {
              return n.e("434bc").then(n.bind(null, "02BP"));
            },
            1057: function () {
              return n.e("9d865").then(n.bind(null, "WSp5"));
            },
            1066: function () {
              return n.e("1a8cf").then(n.bind(null, "5Ifi"));
            },
            1081: function () {
              return n.e("db4cd").then(n.bind(null, "1HXM"));
            },
            1086: function () {
              return n.e("b27e9").then(n.bind(null, "i8mP"));
            },
            1124: function () {
              return n.e("205fb").then(n.bind(null, "xxh2"));
            },
          },
        });
    },
    "7Nv/": function (t, e, n) {
      t.exports = n("4KFe")(103);
    },
    "7PSS": function (t, e, n) {
      "use strict";
      var r = {};
      function i(t, e, n) {
        n || (n = Error);
        var i = (function (t) {
          var n, r;
          function i(n, r, i) {
            return (
              t.call(
                this,
                (function (t, n, r) {
                  return "string" === typeof e ? e : e(t, n, r);
                })(n, r, i)
              ) || this
            );
          }
          return (
            (r = t),
            ((n = i).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (n.__proto__ = r),
            i
          );
        })(n);
        (i.prototype.name = n.name), (i.prototype.code = t), (r[t] = i);
      }
      function o(t, e) {
        if (Array.isArray(t)) {
          var n = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            n > 2
              ? "one of "
                  .concat(e, " ")
                  .concat(t.slice(0, n - 1).join(", "), ", or ") + t[n - 1]
              : 2 === n
              ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
              : "of ".concat(e, " ").concat(t[0])
          );
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      i(
        "ERR_INVALID_OPT_VALUE",
        function (t, e) {
          return 'The value "' + e + '" is invalid for option "' + t + '"';
        },
        TypeError
      ),
        i(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, n) {
            var r, i, a, s;
            if (
              ("string" === typeof e &&
              ((i = "not "), e.substr(!a || a < 0 ? 0 : +a, i.length) === i)
                ? ((r = "must not be"), (e = e.replace(/^not /, "")))
                : (r = "must be"),
              (function (t, e, n) {
                return (
                  (void 0 === n || n > t.length) && (n = t.length),
                  t.substring(n - e.length, n) === e
                );
              })(t, " argument"))
            )
              s = "The ".concat(t, " ").concat(r, " ").concat(o(e, "type"));
            else {
              var c = (function (t, e, n) {
                return (
                  "number" !== typeof n && (n = 0),
                  !(n + e.length > t.length) && -1 !== t.indexOf(e, n)
                );
              })(t, ".")
                ? "property"
                : "argument";
              s = 'The "'
                .concat(t, '" ')
                .concat(c, " ")
                .concat(r, " ")
                .concat(o(e, "type"));
            }
            return (s += ". Received type ".concat(typeof n));
          },
          TypeError
        ),
        i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        i("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        i("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        i(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        i(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError
        ),
        i(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (t.exports.codes = r);
    },
    "7W03": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return D;
      });
      n("RlNQ");
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("58BP"),
        c = n.n(s),
        u = n("Ptek"),
        l = n.n(u),
        f = n("gy9q"),
        h = n.n(f),
        p = n("7DFi"),
        d = n.n(p),
        _ = n("TJEx"),
        v = n.n(_),
        m = n("cQwn"),
        g = n.n(m),
        y = n("avFb"),
        R = n("kPK6"),
        b = n.n(R),
        w = n("2MzT"),
        E = n("uZd7"),
        C = n.n(E),
        T = n("dQjy");
      function S(t, e) {
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
      function I(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? S(Object(n), !0).forEach(function (e) {
                g()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var O = { adjustX: 1, adjustY: 1 },
        M = { adjustX: 0, adjustY: 0 },
        P = [0, 0];
      function k(t) {
        return "boolean" === typeof t ? (t ? O : M) : I(I({}, M), t);
      }
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
      function N(t) {
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
      function L(t) {
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
            r = v()(t);
          if (e) {
            var i = v()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var x = (function (t) {
        h()(n, t);
        var e = L(n);
        function n(t) {
          var r;
          return (
            a()(this, n),
            (r = e.call(this, t)),
            g()(l()(r), "tooltip", null),
            g()(l()(r), "onVisibleChange", function (t) {
              var e = r.props.onVisibleChange;
              "visible" in r.props ||
                r.setState({ visible: !r.isNoTitle() && t }),
                e && !r.isNoTitle() && e(t);
            }),
            g()(l()(r), "onPopupAlign", function (t, e) {
              var n = r.getPlacements(),
                i = Object.keys(n).filter(function (t) {
                  return (
                    n[t].points[0] === e.points[0] &&
                    n[t].points[1] === e.points[1]
                  );
                })[0];
              if (i) {
                var o = t.getBoundingClientRect(),
                  a = { top: "50%", left: "50%" };
                i.indexOf("top") >= 0 || i.indexOf("Bottom") >= 0
                  ? (a.top = "".concat(o.height - e.offset[1], "px"))
                  : (i.indexOf("Top") >= 0 || i.indexOf("bottom") >= 0) &&
                    (a.top = "".concat(-e.offset[1], "px")),
                  i.indexOf("left") >= 0 || i.indexOf("Right") >= 0
                    ? (a.left = "".concat(o.width - e.offset[0], "px"))
                    : (i.indexOf("right") >= 0 || i.indexOf("Left") >= 0) &&
                      (a.left = "".concat(-e.offset[0], "px")),
                  (t.style.transformOrigin = ""
                    .concat(a.left, " ")
                    .concat(a.top));
              }
            }),
            g()(l()(r), "saveTooltip", function (t) {
              r.tooltip = t;
            }),
            (r.state = { visible: !!t.visible || !!t.defaultVisible }),
            r
          );
        }
        return (
          c()(
            n,
            [
              {
                key: "getPopupDomNode",
                value: function () {
                  return this.tooltip.getPopupDomNode();
                },
              },
              {
                key: "getPlacements",
                value: function () {
                  var t = this.props,
                    e = t.builtinPlacements,
                    n = t.arrowPointAtCenter,
                    r = t.autoAdjustOverflow;
                  return (
                    e ||
                    (function (t) {
                      var e = t.arrowWidth,
                        n = void 0 === e ? 5 : e,
                        r = t.horizontalArrowShift,
                        i = void 0 === r ? 16 : r,
                        o = t.verticalArrowShift,
                        a = void 0 === o ? 12 : o,
                        s = t.autoAdjustOverflow,
                        c = void 0 === s || s,
                        u = {
                          left: { points: ["cr", "cl"], offset: [-4, 0] },
                          right: { points: ["cl", "cr"], offset: [4, 0] },
                          top: { points: ["bc", "tc"], offset: [0, -4] },
                          bottom: { points: ["tc", "bc"], offset: [0, 4] },
                          topLeft: {
                            points: ["bl", "tc"],
                            offset: [-(i + n), -4],
                          },
                          leftTop: {
                            points: ["tr", "cl"],
                            offset: [-4, -(a + n)],
                          },
                          topRight: {
                            points: ["br", "tc"],
                            offset: [i + n, -4],
                          },
                          rightTop: {
                            points: ["tl", "cr"],
                            offset: [4, -(a + n)],
                          },
                          bottomRight: {
                            points: ["tr", "bc"],
                            offset: [i + n, 4],
                          },
                          rightBottom: {
                            points: ["bl", "cr"],
                            offset: [4, a + n],
                          },
                          bottomLeft: {
                            points: ["tl", "bc"],
                            offset: [-(i + n), 4],
                          },
                          leftBottom: {
                            points: ["br", "cl"],
                            offset: [-4, a + n],
                          },
                        };
                      return (
                        Object.keys(u).forEach(function (e) {
                          u[e] = t.arrowPointAtCenter
                            ? I(
                                I({}, u[e]),
                                {},
                                { overflow: k(c), targetOffset: P }
                              )
                            : I(I({}, T.placements[e]), {}, { overflow: k(c) });
                        }),
                        u
                      );
                    })({
                      arrowPointAtCenter: n,
                      verticalArrowShift: 8,
                      autoAdjustOverflow: r,
                    })
                  );
                },
              },
              {
                key: "isHoverTrigger",
                value: function () {
                  var t = this.props.trigger;
                  return (
                    !t ||
                    "hover" === t ||
                    (!!Array.isArray(t) && t.indexOf("hover") >= 0)
                  );
                },
              },
              {
                key: "getDisabledCompatibleChildren",
                value: function (t) {
                  if (
                    (t.type.__ANT_BUTTON || "button" === t.type) &&
                    t.props.disabled &&
                    this.isHoverTrigger()
                  ) {
                    var e = N(
                        N(
                          { display: "inline-block" },
                          C()(t.props.style, [
                            "position",
                            "left",
                            "right",
                            "top",
                            "bottom",
                            "float",
                            "display",
                            "zIndex",
                          ])
                        ),
                        {},
                        { cursor: "not-allowed" }
                      ),
                      n = N(
                        N({}, [
                          "position",
                          "left",
                          "right",
                          "top",
                          "bottom",
                          "float",
                          "display",
                          "zIndex",
                        ]),
                        {},
                        { pointerEvents: "none" }
                      ),
                      r = Object(y.cloneElement)(t, {
                        style: n,
                        className: null,
                      });
                    return y.createElement(
                      "span",
                      { style: e, className: t.props.className },
                      r
                    );
                  }
                  return t;
                },
              },
              {
                key: "isNoTitle",
                value: function () {
                  var t = this.props,
                    e = t.title,
                    n = t.overlay;
                  return !e && !n;
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.prefixCls,
                    n = t.title,
                    r = t.overlay,
                    o = t.openClassName,
                    a = t.getPopupContainer,
                    s = t.children,
                    c = this.state.visible;
                  !("visible" in this.props) && this.isNoTitle() && (c = !1);
                  var u = this.getDisabledCompatibleChildren(
                      y.isValidElement(s) ? s : y.createElement("span", null, s)
                    ),
                    l = u.props,
                    f = b()(
                      l.className,
                      g()({}, o || "".concat(e, "-open"), !0)
                    );
                  return y.createElement(
                    w.a,
                    i()({}, this.props, {
                      getTooltipContainer: a,
                      ref: this.saveTooltip,
                      builtinPlacements: this.getPlacements(),
                      overlay: r || n || "",
                      visible: c,
                      onVisibleChange: this.onVisibleChange,
                      onPopupAlign: this.onPopupAlign,
                    }),
                    c ? Object(y.cloneElement)(u, { className: f }) : u
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  return "visible" in t && t.visible !== e.visible
                    ? { visible: t.visible }
                    : null;
                },
              },
            ]
          ),
          n
        );
      })(y.Component);
      function D() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "left";
        return "rtl" === document.dir && "left" === t ? "topRight" : "topLeft";
      }
      g()(x, "defaultProps", {
        prefixCls: "nimo-tooltip",
        placement: "top",
        transitionName: "zoom-big-fast",
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        arrowPointAtCenter: !1,
        autoAdjustOverflow: !0,
      });
      e.a = x;
    },
    "7s/s": function (t, e, n) {
      t.exports =
        n.p + "images/title-diamond.7268a14325138c00b90ddccd2b360952.png";
    },
    "80GY": function (t, e, n) {
      "use strict";
      var r = n("AeXG"),
        i = n.n(r),
        o = n("P+UK"),
        a = n.n(o),
        s = n("ax1G"),
        c = n.n(s),
        u = n("vlBN"),
        l = n.n(u),
        f = n("HNvz"),
        h = n.n(f),
        p = n("avFb"),
        d = n.n(p),
        _ = 251,
        v = 10,
        m = 0.3;
      function g(t, e) {
        return Math.sqrt(t * t + e * e);
      }
      function y(t, e) {
        var n = Math.atan2(e, t);
        return 180 / (Math.PI / n);
      }
      function R() {
        return Date.now();
      }
      function b(t) {
        if (!(t.length < 2)) {
          var e = t[0],
            n = e.x,
            r = e.y,
            i = t[1],
            o = i.x - n,
            a = i.y - r;
          return { x: o, y: a, z: g(o, a), angle: y(o, a) };
        }
      }
      function w(t, e) {
        return t + e[0].toUpperCase() + e.slice(1);
      }
      function E(t) {
        var e = void 0;
        switch (t) {
          case 1:
            break;
          case 2:
            e = "left";
            break;
          case 4:
            e = "right";
            break;
          case 8:
            e = "up";
            break;
          case 16:
            e = "down";
        }
        return e;
      }
      var C = { all: 30, vertical: 24, horizontal: 6 },
        T = (function (t) {
          function e(t) {
            a()(this, e);
            var n = l()(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
            );
            return (
              (n.state = {}),
              (n.triggerEvent = function (t) {
                for (
                  var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1;
                  i < e;
                  i++
                )
                  r[i - 1] = arguments[i];
                var o = n.props[t];
                "function" === typeof o &&
                  o.apply(void 0, [n.getGestureState()].concat(r));
              }),
              (n.triggerCombineEvent = function (t, e) {
                for (
                  var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2;
                  o < r;
                  o++
                )
                  i[o - 2] = arguments[o];
                n.triggerEvent.apply(n, [t].concat(i)),
                  n.triggerSubEvent.apply(n, [t, e].concat(i));
              }),
              (n.triggerSubEvent = function (t, e) {
                for (
                  var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2;
                  o < r;
                  o++
                )
                  i[o - 2] = arguments[o];
                if (e) {
                  var a = w(t, e);
                  n.triggerEvent.apply(n, [a].concat(i));
                }
              }),
              (n.triggerPinchEvent = function (t, e) {
                for (
                  var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2;
                  o < r;
                  o++
                )
                  i[o - 2] = arguments[o];
                var a = n.gesture.scale;
                "move" === e &&
                  "number" === typeof a &&
                  (a > 1 && n.triggerEvent("onPinchOut"),
                  a < 1 && n.triggerEvent("onPinchIn")),
                  n.triggerCombineEvent.apply(n, [t, e].concat(i));
              }),
              (n.initPressTimer = function () {
                n.cleanPressTimer(),
                  (n.pressTimer = setTimeout(function () {
                    n.setGestureState({ press: !0 }), n.triggerEvent("onPress");
                  }, _));
              }),
              (n.cleanPressTimer = function () {
                n.pressTimer && clearTimeout(n.pressTimer);
              }),
              (n.setGestureState = function (t) {
                n.gesture || (n.gesture = {}),
                  n.gesture.touches &&
                    (n.gesture.preTouches = n.gesture.touches),
                  (n.gesture = i()({}, n.gesture, t));
              }),
              (n.getGestureState = function () {
                return n.gesture ? i()({}, n.gesture) : n.gesture;
              }),
              (n.cleanGestureState = function () {
                delete n.gesture;
              }),
              (n.getTouches = function (t) {
                return Array.prototype.slice.call(t.touches).map(function (t) {
                  return { x: t.screenX, y: t.screenY };
                });
              }),
              (n.triggerUserCb = function (t, e) {
                var r = w("onTouch", t);
                r in n.props && n.props[r](e);
              }),
              (n._handleTouchStart = function (t) {
                n.triggerUserCb("start", t),
                  (n.event = t),
                  t.touches.length > 1 && t.preventDefault(),
                  n.initGestureStatus(t),
                  n.initPressTimer(),
                  n.checkIfMultiTouchStart();
              }),
              (n.initGestureStatus = function (t) {
                n.cleanGestureState();
                var e = n.getTouches(t),
                  r = R(),
                  i = b(e);
                n.setGestureState({
                  startTime: r,
                  startTouches: e,
                  startMutliFingerStatus: i,
                  time: r,
                  touches: e,
                  mutliFingerStatus: i,
                  srcEvent: n.event,
                });
              }),
              (n.checkIfMultiTouchStart = function () {
                var t = n.props,
                  e = t.enablePinch,
                  r = t.enableRotate,
                  i = n.gesture.touches;
                if (i.length > 1 && (e || r)) {
                  if (e) {
                    var o = b(i);
                    n.setGestureState({
                      startMutliFingerStatus: o,
                      pinch: !0,
                      scale: 1,
                    }),
                      n.triggerCombineEvent("onPinch", "start");
                  }
                  r &&
                    (n.setGestureState({ rotate: !0, rotation: 0 }),
                    n.triggerCombineEvent("onRotate", "start"));
                }
              }),
              (n._handleTouchMove = function (t) {
                n.triggerUserCb("move", t),
                  (n.event = t),
                  n.gesture &&
                    (n.cleanPressTimer(),
                    n.updateGestureStatus(t),
                    n.checkIfSingleTouchMove(),
                    n.checkIfMultiTouchMove());
              }),
              (n.checkIfMultiTouchMove = function () {
                var t = n.gesture,
                  e = t.pinch,
                  r = t.rotate,
                  i = t.touches,
                  o = t.startMutliFingerStatus,
                  a = t.mutliFingerStatus;
                if (e || r) {
                  if (i.length < 2)
                    return (
                      n.setGestureState({ pinch: !1, rotate: !1 }),
                      e && n.triggerCombineEvent("onPinch", "cancel"),
                      void (r && n.triggerCombineEvent("onRotate", "cancel"))
                    );
                  if (e) {
                    var s = a.z / o.z;
                    n.setGestureState({ scale: s }),
                      n.triggerPinchEvent("onPinch", "move");
                  }
                  if (r) {
                    var c = (function (t, e) {
                      var n = t.angle;
                      return e.angle - n;
                    })(o, a);
                    n.setGestureState({ rotation: c }),
                      n.triggerCombineEvent("onRotate", "move");
                  }
                }
              }),
              (n.allowGesture = function () {
                return (t = n.gesture.direction), !!(n.directionSetting & t);
                var t;
              }),
              (n.checkIfSingleTouchMove = function () {
                var t = n.gesture,
                  e = t.pan,
                  r = t.touches,
                  i = t.moveStatus,
                  o = t.preTouches,
                  a = t.availablePan,
                  s = void 0 === a || a;
                if (r.length > 1)
                  return (
                    n.setGestureState({ pan: !1 }),
                    void (e && n.triggerCombineEvent("onPan", "cancel"))
                  );
                if (i && s) {
                  var c = (function (t, e) {
                    var n = t.x,
                      r = t.y,
                      i = e.x - n,
                      o = e.y - r;
                    return 0 === i && 0 === o
                      ? 1
                      : Math.abs(i) >= Math.abs(o)
                      ? i < 0
                        ? 2
                        : 4
                      : o < 0
                      ? 8
                      : 16;
                  })(o[0], r[0]);
                  n.setGestureState({ direction: c });
                  var u = E(c);
                  if (!n.allowGesture())
                    return void (e || n.setGestureState({ availablePan: !1 }));
                  e
                    ? (n.triggerCombineEvent("onPan", u),
                      n.triggerSubEvent("onPan", "move"))
                    : (n.triggerCombineEvent("onPan", "start"),
                      n.setGestureState({ pan: !0, availablePan: !0 }));
                }
              }),
              (n.checkIfMultiTouchEnd = function (t) {
                var e = n.gesture,
                  r = e.pinch,
                  i = e.rotate;
                r && n.triggerCombineEvent("onPinch", t),
                  i && n.triggerCombineEvent("onRotate", t);
              }),
              (n.updateGestureStatus = function (t) {
                var e = R();
                if (
                  (n.setGestureState({ time: e }),
                  t.touches && t.touches.length)
                ) {
                  var r = n.gesture,
                    i = r.startTime,
                    o = r.startTouches,
                    a = r.pinch,
                    s = r.rotate,
                    c = n.getTouches(t),
                    u = (function (t, e, n) {
                      var r = t[0],
                        i = r.x,
                        o = r.y,
                        a = e[0],
                        s = a.x - i,
                        c = a.y - o,
                        u = g(s, c);
                      return {
                        x: s,
                        y: c,
                        z: u,
                        time: n,
                        velocity: u / n,
                        angle: y(s, c),
                      };
                    })(o, c, e - i),
                    l = void 0;
                  (a || s) && (l = b(c)),
                    n.setGestureState({
                      touches: c,
                      mutliFingerStatus: l,
                      moveStatus: u,
                    });
                }
              }),
              (n._handleTouchEnd = function (t) {
                n.triggerUserCb("end", t),
                  (n.event = t),
                  n.gesture &&
                    (n.cleanPressTimer(),
                    n.updateGestureStatus(t),
                    n.doSingleTouchEnd("end"),
                    n.checkIfMultiTouchEnd("end"));
              }),
              (n._handleTouchCancel = function (t) {
                n.triggerUserCb("cancel", t),
                  (n.event = t),
                  n.gesture &&
                    (n.cleanPressTimer(),
                    n.updateGestureStatus(t),
                    n.doSingleTouchEnd("cancel"),
                    n.checkIfMultiTouchEnd("cancel"));
              }),
              (n.triggerAllowEvent = function (t, e) {
                n.allowGesture()
                  ? n.triggerCombineEvent(t, e)
                  : n.triggerSubEvent(t, e);
              }),
              (n.doSingleTouchEnd = function (t) {
                var e = n.gesture,
                  r = e.moveStatus,
                  i = e.pinch,
                  o = e.rotate,
                  a = e.press,
                  s = e.pan,
                  c = e.direction;
                if (!i && !o) {
                  if (r) {
                    var u = (function (t, e) {
                      return Math.abs(t) >= v && Math.abs(e) > m;
                    })(r.z, r.velocity);
                    if (
                      (n.setGestureState({ swipe: u }),
                      s && n.triggerAllowEvent("onPan", t),
                      u)
                    ) {
                      var l = E(c);
                      return void n.triggerAllowEvent("onSwipe", l);
                    }
                  }
                  a ? n.triggerEvent("onPressUp") : n.triggerEvent("onTap");
                }
              }),
              (n.getTouchAction = function () {
                var t = n.props,
                  e = t.enablePinch,
                  r = t.enableRotate,
                  i = n.directionSetting;
                return e || r || 30 === i
                  ? "pan-x pan-y"
                  : 24 === i
                  ? "pan-x"
                  : 6 === i
                  ? "pan-y"
                  : "auto";
              }),
              (n.directionSetting = C[t.direction]),
              n
            );
          }
          return (
            h()(e, t),
            c()(e, [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.cleanPressTimer();
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props.children,
                    e = d.a.Children.only(t),
                    n = this.getTouchAction(),
                    r = {
                      onTouchStart: this._handleTouchStart,
                      onTouchMove: this._handleTouchMove,
                      onTouchCancel: this._handleTouchCancel,
                      onTouchEnd: this._handleTouchEnd,
                    };
                  return d.a.cloneElement(
                    e,
                    i()({}, r, {
                      style: i()({ touchAction: n }, e.props.style || {}),
                    })
                  );
                },
              },
            ]),
            e
          );
        })(p.Component);
      e.a = T;
      T.defaultProps = { enableRotate: !1, enablePinch: !1, direction: "all" };
    },
    "8Vek": function (t, e, n) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
      var r = n("WvPa"),
        i = r.Buffer;
      function o(t, e) {
        for (var n in t) e[n] = t[n];
      }
      function a(t, e, n) {
        return i(t, e, n);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = r)
        : (o(r, e), (e.Buffer = a)),
        (a.prototype = Object.create(i.prototype)),
        o(i, a),
        (a.from = function (t, e, n) {
          if ("number" === typeof t)
            throw new TypeError("Argument must not be a number");
          return i(t, e, n);
        }),
        (a.alloc = function (t, e, n) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          var r = i(t);
          return (
            void 0 !== e
              ? "string" === typeof n
                ? r.fill(e, n)
                : r.fill(e)
              : r.fill(0),
            r
          );
        }),
        (a.allocUnsafe = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return i(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return r.SlowBuffer(t);
        });
    },
    "8g70": function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          function () {
            (this.iPlay = 0), (this.iPlayBoxId = 0), (this.iRoyalLevel = 0);
          });
      (i.prototype._clone = function () {
        return new r.a.GiftPlay();
      }),
        (i.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (i.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (i.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iPlay),
            t.writeInt32(1, this.iPlayBoxId),
            t.writeInt32(2, this.iRoyalLevel);
        }),
        (i.prototype.readFrom = function (t) {
          (this.iPlay = t.readInt32(0, !1, this.iPlay)),
            (this.iPlayBoxId = t.readInt32(1, !1, this.iPlayBoxId)),
            (this.iRoyalLevel = t.readInt32(2, !1, this.iRoyalLevel));
        }),
        (r.a.GiftPlay = i);
    },
    "9TcU": function (t, e, n) {
      for (
        var r,
          i = n("C6AJ"),
          o = n("6nwj"),
          a = n("aLcf"),
          s = a("typed_array"),
          c = a("view"),
          u = !(!i.ArrayBuffer || !i.DataView),
          l = u,
          f = 0,
          h =
            "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(
              ","
            );
        f < 9;

      )
        (r = i[h[f++]])
          ? (o(r.prototype, s, !0), o(r.prototype, c, !0))
          : (l = !1);
      t.exports = { ABV: u, CONSTR: l, TYPED: s, VIEW: c };
    },
    "9dcq": function (t, e, n) {
      t.exports = n("4KFe")(104);
    },
    AXM1: function (t, e, n) {
      t.exports = n("4KFe")(41);
    },
    AeNx: function (t, e, n) {
      "use strict";
      (function (e) {
        var r =
          Object.keys ||
          function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return e;
          };
        t.exports = u;
        var i = n("tJMH"),
          o = n("n12j");
        n("dBkQ")(u, i);
        for (var a = r(o.prototype), s = 0; s < a.length; s++) {
          var c = a[s];
          u.prototype[c] || (u.prototype[c] = o.prototype[c]);
        }
        function u(t) {
          if (!(this instanceof u)) return new u(t);
          i.call(this, t),
            o.call(this, t),
            (this.allowHalfOpen = !0),
            t &&
              (!1 === t.readable && (this.readable = !1),
              !1 === t.writable && (this.writable = !1),
              !1 === t.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", l)));
        }
        function l() {
          this._writableState.ended || e.nextTick(f, this);
        }
        function f(t) {
          t.end();
        }
        Object.defineProperty(u.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(u.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(u.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(u.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (t) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = t),
                (this._writableState.destroyed = t));
            },
          });
      }.call(this, n("vphx")));
    },
    BYH5: function (t, e, n) {
      t.exports =
        n.p + "images/game10-middle.9d898c64c2d42607803906a123feb49a.png";
    },
    CBG9: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("avFb"),
        i = n.n(r),
        o = n("kPK6"),
        a = n.n(o),
        s = n("vARU"),
        c = n("G5Cn"),
        u = n("MpZv"),
        l = n("Cqb9"),
        f = n.n(l),
        h = function (t) {
          var e = t.prefixCls,
            n = void 0 === e ? "Jackpot" : e,
            r = t.className,
            o = void 0 === r ? "" : r,
            l = t.langPkg,
            h = void 0 === l ? {} : l,
            p = t.vCountrySuperScore;
          return i.a.createElement(
            "div",
            { className: a()(n, o, "n-as-bd-box") },
            i.a.createElement(
              "div",
              { className: "".concat(n, "__header n-fx-bc") },
              i.a.createElement(
                "div",
                { className: "box n-as-text-center" },
                null === h || void 0 === h ? void 0 : h.country
              ),
              i.a.createElement(
                "div",
                { className: "prize n-as-text-center" },
                null === h || void 0 === h ? void 0 : h.prizePool
              ),
              i.a.createElement(
                "div",
                { className: "time n-as-text-right" },
                null === h || void 0 === h ? void 0 : h.time
              )
            ),
            i.a.createElement(
              "div",
              { className: "".concat(n, "__center n-as-bd-box") },
              p.map(function (t) {
                return i.a.createElement(
                  "div",
                  { key: t, className: " row c9  n-as-bd-box n-fx-bc" },
                  i.a.createElement(
                    "div",
                    { className: "box n-as-text-center n-fx-cc" },
                    i.a.createElement(s.a, {
                      src: ""
                        .concat("https://article.nimo.tv", "/img/country_flag/")
                        .concat(
                          (
                            (null === t || void 0 === t
                              ? void 0
                              : t.sCountry) || "HK"
                          ).toLowerCase(),
                          ".png"
                        ),
                      alt: "",
                      className: "flag-container",
                    })
                  ),
                  i.a.createElement(
                    "div",
                    { className: "prize n-as-text-center n-fx-cc" },
                    null === t || void 0 === t ? void 0 : t.lCurScore,
                    i.a.createElement(s.a, {
                      src: f.a,
                      alt: "",
                      className: "diamond",
                    })
                  ),
                  i.a.createElement(
                    "div",
                    { className: "time n-as-text-right" },
                    2 === (null === t || void 0 === t ? void 0 : t.iStatus)
                      ? null === h || void 0 === h
                        ? void 0
                        : h.status2
                      : i.a.createElement(
                          c.a,
                          {
                            cdTime:
                              1e3 *
                              (null === t || void 0 === t
                                ? void 0
                                : t.iRemainTime),
                            interval: 1e3,
                            min: -1,
                            autoStart: !0,
                          },
                          function (t) {
                            var e = t.cdTime;
                            return e > 0
                              ? Object(u.e)(Math.floor(e / 1e3))
                              : "---";
                          }
                        )
                  )
                );
              })
            )
          );
        };
      e.default = Object(r.memo)(h);
    },
    Cqb9: function (t, e, n) {
      t.exports = n.p + "images/diamond.87b017316fcf875970610fb4fa034fb5.png";
    },
    Dbg6: function (t, e, n) {
      t.exports = n("4KFe")(97);
    },
    Df7L: function (t, e, n) {
      t.exports = n("4KFe")(132);
    },
    DiPh: function (t, e) {
      (t.exports = function (t, e, n, r, i) {
        var o = {};
        return (
          Object.keys(r).forEach(function (t) {
            o[t] = r[t];
          }),
          (o.enumerable = !!o.enumerable),
          (o.configurable = !!o.configurable),
          ("value" in o || o.initializer) && (o.writable = !0),
          (o = n
            .slice()
            .reverse()
            .reduce(function (n, r) {
              return r(t, e, n) || n;
            }, o)),
          i &&
            void 0 !== o.initializer &&
            ((o.value = o.initializer ? o.initializer.call(i) : void 0),
            (o.initializer = void 0)),
          void 0 === o.initializer &&
            (Object.defineProperty(t, e, o), (o = null)),
          o
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    EObr: function (t, e, n) {
      var r = n("lwBl");
      r(r.S, "Math", {
        clz32: function (t) {
          return (t >>>= 0)
            ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E)
            : 32;
        },
      });
    },
    Ep2V: function (t, e, n) {
      t.exports = n("4KFe")(172);
    },
    FazQ: function (t, e, n) {
      t.exports = n("4KFe")(134);
    },
    "Fd/z": function (t, e, n) {
      t.exports = n("4KFe")(12);
    },
    G5Cn: function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r = n("rIiI"),
        i = n.n(r),
        o = n("58BP"),
        a = n.n(o),
        s = n("Ptek"),
        c = n.n(s),
        u = n("gy9q"),
        l = n.n(u),
        f = n("7DFi"),
        h = n.n(f),
        p = n("TJEx"),
        d = n.n(p),
        _ = n("cQwn"),
        v = n.n(_),
        m = n("avFb");
      function g(t) {
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
            r = d()(t);
          if (e) {
            var i = d()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return h()(this, n);
        };
      }
      var y = (function (t) {
        l()(n, t);
        var e = g(n);
        function n(t) {
          var r;
          return (
            i()(this, n),
            (r = e.call(this, t)),
            v()(c()(r), "_timer", null),
            v()(c()(r), "_updateCdTime", function () {
              var t = r.props,
                e = t.interval,
                n = t.min,
                i = t.max,
                o = t.onChange,
                a = t.correctDelay,
                s = r.state.cdTime;
              s >= n &&
                (null === i || s <= i) &&
                (r._timer = setTimeout(function () {
                  var t = a ? r.initCdTime - (Date.now() - r.preTime) : s - e;
                  r._setCdTime(t, function () {
                    r._updateCdTime(), "function" === typeof o && o(t);
                  });
                }, e));
            }),
            (r.state = { cdTime: t.cdTime }),
            (r.preTime = 0),
            (r.initCdTime = t.cdTime),
            r
          );
        }
        return (
          a()(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.autoStart && this.restart();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t, e) {
                var n = this.props,
                  r = n.cdTime,
                  i = n.onDidChange;
                if (
                  (t.cdTime === r ||
                    "number" !== typeof r ||
                    isNaN(r) ||
                    this.restart(),
                  i)
                ) {
                  var o = this.state.cdTime;
                  e.cdTime !== o && i(o);
                }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._timer && clearTimeout(this._timer);
              },
            },
            {
              key: "start",
              value: function () {
                this._updateCdTime();
              },
            },
            {
              key: "pause",
              value: function () {
                this._clearTimer();
              },
            },
            {
              key: "stop",
              value: function () {
                this._clearTimer(), this._setCdTime(-1);
              },
            },
            {
              key: "restart",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.cdTime,
                  r = e.onChange;
                (this.preTime = Date.now()),
                  (this.initCdTime = n),
                  this._setCdTime(n, function () {
                    "function" === typeof r && r(n),
                      t._clearTimer(),
                      t._updateCdTime();
                  });
              },
            },
            {
              key: "_clearTimer",
              value: function () {
                this._timer && clearTimeout(this._timer);
              },
            },
            {
              key: "_setCdTime",
              value: function (t, e) {
                this.setState({ cdTime: t }, e);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props.children,
                  e = void 0 === t ? null : t,
                  n = { cdTime: this.state.cdTime };
                return "function" === typeof e
                  ? e(n)
                  : m.Children.map(e, function (t) {
                      return m.cloneElement(t, n);
                    });
              },
            },
          ]),
          n
        );
      })(m.PureComponent);
      v()(y, "defaultProps", {
        correctDelay: !1,
        cdTime: -1,
        autoStart: !0,
        interval: 1e3,
        min: 0,
        max: null,
        onChange: function () {},
      }),
        (e.a = y);
    },
    GSgY: function (t, e, n) {
      var r = n("gfHD"),
        i = n("SImQ");
      t.exports = function (t, e) {
        return null != t && i(t, e, r);
      };
    },
    GbMy: function (t, e, n) {
      t.exports = n.p + "images/openBox.07e2064cda646e81c49c2d0c130023b0.svga";
    },
    HNdP: function (t, e, n) {
      "use strict";
      (function (e) {
        function n(t, e) {
          i(t, e), r(t);
        }
        function r(t) {
          (t._writableState && !t._writableState.emitClose) ||
            (t._readableState && !t._readableState.emitClose) ||
            t.emit("close");
        }
        function i(t, e) {
          t.emit("error", e);
        }
        t.exports = {
          destroy: function (t, o) {
            var a = this,
              s = this._readableState && this._readableState.destroyed,
              c = this._writableState && this._writableState.destroyed;
            return s || c
              ? (o
                  ? o(t)
                  : t &&
                    (this._writableState
                      ? this._writableState.errorEmitted ||
                        ((this._writableState.errorEmitted = !0),
                        e.nextTick(i, this, t))
                      : e.nextTick(i, this, t)),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(t || null, function (t) {
                  !o && t
                    ? a._writableState
                      ? a._writableState.errorEmitted
                        ? e.nextTick(r, a)
                        : ((a._writableState.errorEmitted = !0),
                          e.nextTick(n, a, t))
                      : e.nextTick(n, a, t)
                    : o
                    ? (e.nextTick(r, a), o(t))
                    : e.nextTick(r, a);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
          errorOrDestroy: function (t, e) {
            var n = t._readableState,
              r = t._writableState;
            (n && n.autoDestroy) || (r && r.autoDestroy)
              ? t.destroy(e)
              : t.emit("error", e);
          },
        };
      }.call(this, n("vphx")));
    },
    HQGd: function (t, e, n) {
      t.exports = n("4KFe")(2);
    },
    Iplr: function (t, e, n) {
      "use strict";
      n.d(e, "e", function () {
        return k;
      }),
        n.d(e, "f", function () {
          return D;
        }),
        n.d(e, "a", function () {
          return V;
        }),
        n.d(e, "b", function () {
          return Y;
        }),
        n.d(e, "d", function () {
          return W;
        }),
        n.d(e, "c", function () {
          return Q;
        });
      var r,
        i = n("gtb+"),
        o = n.n(i),
        a = n("YQsQ"),
        s = n.n(a),
        c = n("q4i/"),
        u = n.n(c),
        l = n("V4gF"),
        f = n.n(l),
        h = n("ZTQi"),
        p = n.n(h),
        d = n("cQwn"),
        _ = n.n(d),
        v = (n("fMXq"), n("I7c/"), n("28PD"), n("VBJl")),
        m = n.n(v),
        g = n("cOjp"),
        y = n("KFtC");
      function R(t, e) {
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
            ? R(Object(n), !0).forEach(function (e) {
                _()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var w,
        E = null === (r = Object(y.I)()) || void 0 === r ? void 0 : r.params,
        C = g.b.log,
        T = "production",
        S = {},
        I = function (t) {
          return new m.a().update(t).digest("hex");
        },
        O = function () {
          var t;
          if (w) return w;
          var e = location.pathname.split("/").slice(1).join("_");
          return (w =
            ((null === (t = S) || void 0 === t ? void 0 : t.activityName) ||
              e) + ((null === E || void 0 === E ? void 0 : E._actKey) || ""));
        },
        M = {},
        P = {},
        k = function (t, e) {
          var n = S.api,
            r = t,
            i = e;
          if (
            ("httpProxy" === t &&
              ((r = "".concat(t, "#").concat(e.sProxyName)),
              (i = JSON.parse(e.sContent))),
            n[r])
          ) {
            var o,
              a = n[r],
              s = a.uKeyParams,
              c = a.moreParams,
              u = F(r, i, s, c);
            C("读取-md5加密后的key:", u);
            var l = O(),
              f = ""
                .concat(T, "/")
                .concat(l, "/")
                .concat(
                  null === (o = r) || void 0 === o
                    ? void 0
                    : o.replace("#", "_"),
                  "/"
                )
                .concat(u);
            return window
              .fetch(
                "https://article.nimo.tv/interfaceData/".concat(f, ".json"),
                { method: "GET", mode: "cors" }
              )
              .then(function (t) {
                return t.json();
              });
          }
          return C("funcNameConfig"), C(r), !0;
        },
        A = function (t) {
          var e,
            n = t.moreParams,
            r = void 0 === n ? {} : n,
            i = t.params;
          if (0 === Object.keys(r).length) return i;
          var o = [];
          return (
            null ===
              (e = (function (t, e) {
                var n = {};
                return (
                  Object.keys(t).forEach(function (r) {
                    var i;
                    n[r] =
                      null === (i = t[r]) || void 0 === i
                        ? void 0
                        : i.split("|").map(function (t) {
                            var n = H(e, r);
                            return "null" === t
                              ? null
                              : "undefined" !== t
                              ? "number" === typeof n
                                ? Number(t)
                                : t
                              : void 0;
                          });
                  }),
                  Object.keys(n).reduce(function (t, e) {
                    return n[e].reduce(function (n, r) {
                      return t.length
                        ? n.concat(
                            t.map(function (t) {
                              return p()({}, t, _()({}, e, r));
                            })
                          )
                        : n.concat(_()({}, e, r));
                    }, []);
                  }, [])
                );
              })(r, i[0])) ||
              void 0 === e ||
              e.forEach(function (t) {
                i.forEach(function (e) {
                  var n,
                    r = JSON.parse(JSON.stringify(e));
                  null === (n = Object.keys(t)) ||
                    void 0 === n ||
                    n.forEach(function (e) {
                      z(r, e, t[e]);
                    }),
                    o.push(r);
                });
              }),
            o
          );
        },
        N = (function () {
          var t = f()(
            regeneratorRuntime.mark(function t(e, n, r) {
              var i, o, a, s, c, u, l, f, h, p, d, _, v, m, g, y, R, b, w;
              return regeneratorRuntime.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (o = (i = S).api),
                          (a = i.jcePath),
                          (s = o[e]),
                          (c = s.uKeyParams),
                          (u = s.moreParams),
                          (l = j(e, n)),
                          (f = l.funcName),
                          (h = l.data),
                          (p = F(e, n, c, u)),
                          C("读取-md5加密后的key:", p),
                          (d = a[f].moduleName),
                          (_ = a[f].Req.default),
                          (v = a[f].Rsp.default),
                          (m = new _()),
                          Object.keys(K(h)).forEach(function (t) {
                            var e = H(h, t);
                            z(m, t, e);
                          }),
                          (g = new r({ moduleName: d })),
                          (t.prev = 11),
                          (t.next = 14),
                          g.fetch(f, m, v)
                        );
                      case 14:
                        (y = t.sent), (t.next = 21);
                        break;
                      case 17:
                        throw (
                          ((t.prev = 17),
                          (t.t0 = t.catch(11)),
                          (y = t.t0),
                          new Error("请求出错"))
                        );
                      case 21:
                        return (
                          C("tar请求结果", y),
                          (R = O()),
                          (b = ""
                            .concat(R, "/")
                            .concat(
                              null === e || void 0 === e
                                ? void 0
                                : e.replace("#", "_"),
                              "/"
                            )
                            .concat(p)),
                          (t.prev = 24),
                          (t.next = 27),
                          window.fetch(
                            "https://ops-article.nimo.tv/api/s3/postDataToFile/"
                              .concat(T, "/")
                              .concat(b, ".json"),
                            {
                              method: "POST",
                              mode: "cors",
                              body: JSON.stringify(y),
                            }
                          )
                        );
                      case 27:
                        return (
                          (w = t.sent), (t.t1 = C), (t.next = 31), w.json()
                        );
                      case 31:
                        (t.t2 = t.sent),
                          (0, t.t1)("上传结果", t.t2),
                          (t.next = 39);
                        break;
                      case 35:
                        throw (
                          ((t.prev = 35),
                          (t.t3 = t.catch(24)),
                          C("err", t.t3),
                          new Error("上传出错"))
                        );
                      case 39:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [
                  [11, 17],
                  [24, 35],
                ]
              );
            })
          );
          return function (e, n, r) {
            return t.apply(this, arguments);
          };
        })();
      function L(t) {
        return new Promise(function (e) {
          return setTimeout(e, t);
        });
      }
      var x,
        D = (function () {
          var t = f()(
            regeneratorRuntime.mark(function t(e) {
              var n, r, i, o, a, s, c, u;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      for (
                        n = S.api, r = Object.keys(n), i = [], o = 0;
                        o < r.length;
                        o++
                      )
                        for (a = r[o], s = A(n[a]), c = 0; c < s.length; c++)
                          (u = s[c]), i.push({ key: a, params: u });
                      B(i, e);
                    case 5:
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
      function B() {
        return G.apply(this, arguments);
      }
      function G() {
        return (G = f()(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              i,
              a,
              s,
              c,
              u,
              l,
              f,
              h,
              p,
              d,
              _,
              v,
              m,
              g,
              y = arguments;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((e = y.length > 0 && void 0 !== y[0] ? y[0] : []),
                        (n = y.length > 1 ? y[1] : void 0),
                        !((r = y.length > 2 && void 0 !== y[2] ? y[2] : 0) > 3))
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (
                        U("重试次数过多，请查看网络-".concat(e.length), !0),
                        C("allReqData", e),
                        t.abrupt("return", !1)
                      );
                    case 7:
                      (i = r >= 1 ? "失败集合重试(".concat(r, "/3)-") : ""),
                        (a = 5),
                        (s = []),
                        (c = []),
                        (u = 0),
                        (l = e.length),
                        (f = Date.now()),
                        (h = []),
                        (p = 0);
                    case 16:
                      if (!(p < e.length)) {
                        t.next = 43;
                        break;
                      }
                      if (
                        ((d = e[p]),
                        (_ = d.key),
                        (v = d.params),
                        c.push({ key: _, params: v }),
                        s.push(N(_, v, n)),
                        !(s.length >= a))
                      ) {
                        t.next = 40;
                        break;
                      }
                      return (t.prev = 21), (t.next = 24), Promise.all(s);
                    case 24:
                      t.next = 29;
                      break;
                    case 26:
                      (t.prev = 26),
                        (t.t0 = t.catch(21)),
                        (h = [].concat(o()(h), c));
                    case 29:
                      if (
                        ((u += a),
                        (s.length = 0),
                        (c.length = 0),
                        (m = Date.now() - f),
                        C("频率控制", m),
                        !(m < 1e3))
                      ) {
                        t.next = 38;
                        break;
                      }
                      return C("频率控制", m), (t.next = 38), L(1e3 - m);
                    case 38:
                      (f = Date.now()),
                        U(
                          ""
                            .concat(i, "处理进度：")
                            .concat(u, "/")
                            .concat(l, ",失败数量:")
                            .concat(h.length)
                        );
                    case 40:
                      p++, (t.next = 16);
                      break;
                    case 43:
                      return (t.prev = 43), (t.next = 46), Promise.all(s);
                    case 46:
                      t.next = 51;
                      break;
                    case 48:
                      (t.prev = 48),
                        (t.t1 = t.catch(43)),
                        (h = [].concat(o()(h), c));
                    case 51:
                      if (((g = !0), !(h.length > 0))) {
                        t.next = 56;
                        break;
                      }
                      return (t.next = 55), B(h, n, r + 1);
                    case 55:
                      g = t.sent;
                    case 56:
                      return g && U("接口数据保存成功"), t.abrupt("return", g);
                    case 58:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [
                [21, 26],
                [43, 48],
              ]
            );
          })
        )).apply(this, arguments);
      }
      function U(t, e) {
        x ||
          ((x = document.createElement("div")).setAttribute("id", "myAlert"),
          (x.style.padding = "10px"),
          (x.style.background = "#fff"),
          (x.style.color = "#000"),
          (x.style.position = "fixed"),
          (x.style.top = "20px"),
          (x.style.left = "50%"),
          (x.style.transform = "translateX(-50%)"),
          (x.style.borderRadius = "4px"),
          (x.style.zIndex = "999")),
          (x.innerText = t),
          (x.style.color = e ? "red" : "#000"),
          document.body.appendChild(x);
      }
      var j = function (t, e) {
          var n = t,
            r = e;
          if (t.startsWith("httpProxy#")) {
            var i = t.split("#"),
              o = u()(i, 2);
            (n = o[0]), (r = { sProxyName: o[1], sContent: JSON.stringify(e) });
          }
          return { funcName: n, data: r };
        },
        F = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = "",
            o = b(b({}, r), n);
          return (
            Object.keys(K(e))
              .sort()
              .forEach(function (t) {
                var n = H(e, t);
                void 0 !== n && o[t] && (i += "".concat(t, "=").concat(n, "&"));
              }),
            C("加密前的key:", t + i),
            I(t + i)
          );
        },
        V = function () {
          return S;
        },
        Y = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          S = t;
        },
        W = function (t, e, n) {
          C("正在拦截请求生成配置 =》 输入 interceptGetConfig 即可查看");
          var r = I(t + JSON.stringify(e));
          "httpProxy" === t
            ? ((M[r] = {
                funcName: "".concat(t, "#").concat(e.sProxyName),
                data: JSON.parse(e.sContent),
              }),
              (P[t] = {
                Req: "$require('@client/jce/Nimo/HttpProxyReq')$",
                Rsp: "$require('@client/jce/Nimo/HttpProxyRsp')$",
                moduleName: n,
              }))
            : ((M[r] = { funcName: t, data: e }),
              (P[t] = {
                Req: "$require('@client/jce/')$",
                Rsp: "$require('@client/jce/')$",
                moduleName: n,
              }));
          var i = {};
          Object.values(M).forEach(function (t) {
            i[t.funcName] ||
              (i[t.funcName] = { moreParams: {}, uKeyParams: {}, params: [] }),
              i[t.funcName].params.push(t.data);
          }),
            Object.keys(i).forEach(function (t) {
              var e = (function (t) {
                  var e = {};
                  null === t ||
                    void 0 === t ||
                    t.forEach(function (t) {
                      var n = K(t);
                      Object.keys(n).forEach(function (t) {
                        e[t] || (e[t] = {}), (e[t][n[t]] = 1);
                      });
                    });
                  var n = {},
                    r = {};
                  return (
                    Object.keys(e).forEach(function (t) {
                      var i = Object.keys(e[t]);
                      i.length > 1 && ((n[t] = i.join("|")), (r[t] = !0));
                    }),
                    { moreParams: n, uKeyParams: r }
                  );
                })(i[t].params),
                n = e.moreParams,
                r = e.uKeyParams;
              (i[t].moreParams = n), (i[t].uKeyParams = r);
            }),
            (window.interceptGetConfig = "export default ".concat(
              JSON.stringify({ jcePath: P, api: i }).replace(/("\$)|(\$")/g, "")
            ));
        };
      function H(t, e) {
        var n, r;
        return (
          null === e ||
            void 0 === e ||
            null === (n = e.split(".")) ||
            void 0 === n ||
            n.forEach(function (e, n) {
              var i,
                o,
                a,
                s,
                c,
                u =
                  null === (i = e) ||
                  void 0 === i ||
                  null === (o = i.replace(/\s/g, "")) ||
                  void 0 === o
                    ? void 0
                    : o.match(/\[[0-9]+\]/g);
              (null === u || void 0 === u ? void 0 : u.length) > 0 &&
                (e =
                  null === (a = e) ||
                  void 0 === a ||
                  null === (s = a.split("[")) ||
                  void 0 === s
                    ? void 0
                    : s[0]),
                (r =
                  0 === n
                    ? null === t || void 0 === t
                      ? void 0
                      : t[e]
                    : null === (c = r) || void 0 === c
                    ? void 0
                    : c[e]),
                (null === u || void 0 === u ? void 0 : u.length) > 0 &&
                  (null === u ||
                    void 0 === u ||
                    u.forEach(function (t) {
                      var e,
                        n =
                          null === t || void 0 === t
                            ? void 0
                            : t.replace(/\[|\]/g, "");
                      r = null === (e = r) || void 0 === e ? void 0 : e[n];
                    }));
            }),
          r
        );
      }
      function K(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (t && "object" === s()(t))
          null === (e = Object.keys(t)) ||
            void 0 === e ||
            e.forEach(function (e) {
              r.push(Array.isArray(t) ? "[".concat(e, "]") : e),
                K(t[e], n, r, i + 1),
                r.pop();
            });
        else if (r.length > 0) {
          var o;
          n[
            null === (o = r.join(".")) || void 0 === o
              ? void 0
              : o.replace(/\.\[/g, "[")
          ] = t;
        }
        return n;
      }
      function z() {
        var t,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = arguments.length > 2 ? arguments[2] : void 0,
          i = e;
        return (
          null === n ||
            void 0 === n ||
            null === (t = n.split(".")) ||
            void 0 === t ||
            t.forEach(function (t, e, n) {
              var o,
                a,
                c,
                u,
                l,
                f,
                h =
                  null === (o = t) ||
                  void 0 === o ||
                  null === (a = o.replace(/\s/g, "")) ||
                  void 0 === a
                    ? void 0
                    : a.match(/\[[0-9]+\]/g);
              (null === h || void 0 === h ? void 0 : h.length) > 0 &&
                (t =
                  null === (c = t) ||
                  void 0 === c ||
                  null === (u = c.split("[")) ||
                  void 0 === u
                    ? void 0
                    : u[0]);
              var p =
                ("object" ===
                  s()(null === (l = i) || void 0 === l ? void 0 : l[t]) &&
                  (null === (f = i) || void 0 === f ? void 0 : f[t])) ||
                ((null === h || void 0 === h ? void 0 : h.length) > 0
                  ? []
                  : {});
              (i[t] =
                e < n.length - 1 ||
                (null === h || void 0 === h ? void 0 : h.length) > 0
                  ? p
                  : r),
                (i = i[t]),
                null === h ||
                  void 0 === h ||
                  h.forEach(function (t, o, a) {
                    var c,
                      u,
                      l =
                        null === t || void 0 === t
                          ? void 0
                          : t.replace(/\[|\]/g, ""),
                      f =
                        ("object" ===
                          s()(
                            null === (c = i) || void 0 === c ? void 0 : c[l]
                          ) &&
                          (null === (u = i) || void 0 === u ? void 0 : u[l])) ||
                        (o < a.length - 1 ? [] : {});
                    (i[l] = e < n.length - 1 || o < a.length - 1 ? f : r),
                      (i = i[l]);
                  });
            }),
          e
        );
      }
      function X(t, e) {
        var n,
          r,
          i,
          o,
          a =
            null === t ||
            void 0 === t ||
            null === (n = t.data) ||
            void 0 === n ||
            null === (r = n.result) ||
            void 0 === r
              ? void 0
              : r.rankInfoList;
        if (window.__getRankId) {
          var s,
            c = window.__getRankId(
              null === t ||
                void 0 === t ||
                null === (s = t.data) ||
                void 0 === s
                ? void 0
                : s.result
            );
          if (c) return void (e[c] = !0);
        }
        null ===
          (i = Object.values(
            null === t || void 0 === t || null === (o = t.data) || void 0 === o
              ? void 0
              : o.result
          )) ||
          void 0 === i ||
          i.forEach(function (t) {
            "".concat(t).startsWith("50000") && (e[t] = !0);
          }),
          a &&
            a.length > 0 &&
            a.forEach(function (t) {
              Object.values(t).forEach(function (t) {
                "".concat(t).startsWith("50000") && (e[t] = !0);
              });
            });
      }
      var q = function () {
          var t = S.api,
            e = "httpProxy#rank_revenue_activityinfo",
            n = "ID|VN|BR|TR|ZD|TH|XY";
          for (var r in t) {
            var i, o, a, s, c;
            if (null !== (i = t[r]) && void 0 !== i && i.isActivityInfo)
              if (
                ((e = r),
                null !== (o = t[r]) &&
                  void 0 !== o &&
                  null !== (a = o.moreParams) &&
                  void 0 !== a &&
                  a.anchorIdCountryCode)
              )
                n =
                  null === (s = t[r]) ||
                  void 0 === s ||
                  null === (c = s.moreParams) ||
                  void 0 === c
                    ? void 0
                    : c.anchorIdCountryCode;
          }
          return { apiName: e, anchorIdCountryCode: n };
        },
        Q = (function () {
          var t = f()(
            regeneratorRuntime.mark(function t(e) {
              var n, r, i, o, a, s, c, u, l, h, d, _, v, m, g, y, R, w;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((i = (r = S).api),
                        (o = r.jcePath),
                        (a = "httpProxy"),
                        (s = q()),
                        (c = s.apiName),
                        (u = s.anchorIdCountryCode),
                        (l = "nimoui"),
                        (h = null === i || void 0 === i ? void 0 : i[c]),
                        i && h)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 7:
                      return (
                        (d =
                          null === h ||
                          void 0 === h ||
                          null === (n = h.params) ||
                          void 0 === n
                            ? void 0
                            : n[0]),
                        (_ = o[a].Req.default),
                        (v = o[a].Rsp.default),
                        (m = new e({ moduleName: l })),
                        (g = u.split("|").map(
                          (function () {
                            var t = f()(
                              regeneratorRuntime.mark(function t(e) {
                                var n, r, i, o, a;
                                return regeneratorRuntime.wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (n = b(
                                              b({}, d),
                                              {},
                                              { anchorIdCountryCode: e }
                                            )),
                                            (r = new _()),
                                            (i = j(c, n)),
                                            p()(r, i.data),
                                            (t.prev = 4),
                                            (t.next = 7),
                                            m.fetch(i.funcName, r, v)
                                          );
                                        case 7:
                                          (o = t.sent),
                                            (o = JSON.parse(
                                              null === (a = o) || void 0 === a
                                                ? void 0
                                                : a.sRsp
                                            )),
                                            (t.next = 16);
                                          break;
                                        case 11:
                                          throw (
                                            ((t.prev = 11),
                                            (t.t0 = t.catch(4)),
                                            (o = t.t0),
                                            C("请求结果", o),
                                            new Error("请求出错"))
                                          );
                                        case 16:
                                          return t.abrupt("return", o);
                                        case 17:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[4, 11]]
                                );
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        )),
                        (t.next = 14),
                        Promise.all(g)
                      );
                    case 14:
                      (y = t.sent),
                        (R = {}),
                        y.forEach(function (t) {
                          X(t, R);
                        }),
                        (w = ""),
                        Object.keys(R)
                          .sort()
                          .forEach(function (t) {
                            w += "".concat(t, "|");
                          }),
                        (w = w.slice(0, -1)),
                        (window.rankType = w),
                        C("所有rankType:\n", w);
                    case 22:
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
    J6jk: function (t, e, n) {
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
        f = n("TJEx"),
        h = n.n(f),
        p = n("DiPh"),
        d = n.n(p),
        _ = n("ZMLX"),
        v = n("ZxgU"),
        m =
          (n("leMB"),
          function () {
            (this.tUserId = new _.a.UserId()),
              (this.iStart = 0),
              (this.iCount = 0);
          });
      (m.prototype._clone = function () {
        return new _.a.UserPrizeRecordListReq();
      }),
        (m.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (m.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (m.prototype.writeTo = function (t) {
          t.writeStruct(0, this.tUserId),
            t.writeInt32(1, this.iStart),
            t.writeInt32(2, this.iCount);
        }),
        (m.prototype.readFrom = function (t) {
          (this.tUserId = t.readStruct(0, !1, this.tUserId)),
            (this.iStart = t.readInt32(1, !1, this.iStart)),
            (this.iCount = t.readInt32(2, !1, this.iCount));
        }),
        (_.a.UserPrizeRecordListReq = m);
      var g = m,
        y =
          (n("JasO"),
          function () {
            (this.iCode = 0),
              (this.vRecordList = new v.b.Vector(new _.a.LuckyPrizeRecord()));
          });
      (y.prototype._clone = function () {
        return new _.a.UserPrizeRecordListRsp();
      }),
        (y.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (y.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (y.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode), t.writeVector(1, this.vRecordList);
        }),
        (y.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.vRecordList = t.readVector(1, !1, this.vRecordList));
        }),
        (_.a.UserPrizeRecordListRsp = y);
      var R = y,
        b = function () {
          (this.tUserId = new _.a.UserId()),
            (this.lRoomId = 0),
            (this.iLcid = 0),
            (this.iBoxGiftId = 64);
        };
      (b.prototype._clone = function () {
        return new _.a.GetBoxPanelInfoReq();
      }),
        (b.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (b.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (b.prototype.writeTo = function (t) {
          t.writeStruct(0, this.tUserId),
            t.writeInt64(1, this.lRoomId),
            t.writeInt32(2, this.iLcid),
            t.writeInt32(3, this.iBoxGiftId);
        }),
        (b.prototype.readFrom = function (t) {
          (this.tUserId = t.readStruct(0, !1, this.tUserId)),
            (this.lRoomId = t.readInt64(1, !1, this.lRoomId)),
            (this.iLcid = t.readInt32(2, !1, this.iLcid)),
            (this.iBoxGiftId = t.readInt32(3, !1, this.iBoxGiftId));
        }),
        (_.a.GetBoxPanelInfoReq = b);
      var w = b,
        E = function () {
          (this.lRoomId = 0),
            (this.iStatus = 0),
            (this.iRemainTime = 0),
            (this.lCurScore = 0),
            (this.lNextScore = 0),
            (this.iNextTimestamp = 0),
            (this.lMinScore = 0),
            (this.lMaxScore = 0),
            (this.sCountry = "");
        };
      (E.prototype._clone = function () {
        return new _.a.BoxScore();
      }),
        (E.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (E.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (E.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomId),
            t.writeInt32(1, this.iStatus),
            t.writeInt32(2, this.iRemainTime),
            t.writeInt64(3, this.lCurScore),
            t.writeInt64(4, this.lNextScore),
            t.writeInt32(5, this.iNextTimestamp),
            t.writeInt64(6, this.lMinScore),
            t.writeInt64(7, this.lMaxScore),
            t.writeString(8, this.sCountry);
        }),
        (E.prototype.readFrom = function (t) {
          (this.lRoomId = t.readInt64(0, !1, this.lRoomId)),
            (this.iStatus = t.readInt32(1, !1, this.iStatus)),
            (this.iRemainTime = t.readInt32(2, !1, this.iRemainTime)),
            (this.lCurScore = t.readInt64(3, !1, this.lCurScore)),
            (this.lNextScore = t.readInt64(4, !1, this.lNextScore)),
            (this.iNextTimestamp = t.readInt32(5, !1, this.iNextTimestamp)),
            (this.lMinScore = t.readInt64(6, !1, this.lMinScore)),
            (this.lMaxScore = t.readInt64(7, !1, this.lMaxScore)),
            (this.sCountry = t.readString(8, !1, this.sCountry));
        }),
        (_.a.BoxScore = E);
      n("s5/g");
      var C = function () {
        (this.iCode = 0),
          (this.tScoreInfo = new _.a.BoxScore()),
          (this.vGiftList = new v.b.Vector(new _.a.GiftItemInfo())),
          (this.vRecordList = new v.b.Vector(new _.a.LuckyPrizeRecord())),
          (this.lRoomId = 0),
          (this.tLastLuckyWinner = new _.a.LuckyPrizeRecord()),
          (this.vSmallGiftList = new v.b.Vector(new _.a.GiftItemInfo())),
          (this.vCountrySuperScore = new v.b.Vector(new _.a.BoxScore())),
          (this.sCountry = "");
      };
      (C.prototype._clone = function () {
        return new _.a.GetBoxPanelInfoRsp();
      }),
        (C.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (C.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (C.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode),
            t.writeStruct(1, this.tScoreInfo),
            t.writeVector(2, this.vGiftList),
            t.writeVector(3, this.vRecordList),
            t.writeInt64(4, this.lRoomId),
            t.writeStruct(5, this.tLastLuckyWinner),
            t.writeVector(6, this.vSmallGiftList),
            t.writeVector(7, this.vCountrySuperScore),
            t.writeString(8, this.sCountry);
        }),
        (C.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.tScoreInfo = t.readStruct(1, !1, this.tScoreInfo)),
            (this.vGiftList = t.readVector(2, !1, this.vGiftList)),
            (this.vRecordList = t.readVector(3, !1, this.vRecordList)),
            (this.lRoomId = t.readInt64(4, !1, this.lRoomId)),
            (this.tLastLuckyWinner = t.readStruct(
              5,
              !1,
              this.tLastLuckyWinner
            )),
            (this.vSmallGiftList = t.readVector(6, !1, this.vSmallGiftList)),
            (this.vCountrySuperScore = t.readVector(
              7,
              !1,
              this.vCountrySuperScore
            )),
            (this.sCountry = t.readString(8, !1, this.sCountry));
        }),
        (_.a.GetBoxPanelInfoRsp = C);
      var T = C,
        S = function () {
          this.lRoomId = 0;
        };
      (S.prototype._clone = function () {
        return new _.a.GetLuckyPoolReq();
      }),
        (S.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (S.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (S.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomId);
        }),
        (S.prototype.readFrom = function (t) {
          this.lRoomId = t.readInt64(0, !1, this.lRoomId);
        }),
        (_.a.GetLuckyPoolReq = S);
      var I = S,
        O = function () {
          (this.iCode = 0),
            (this.lRoomId = 0),
            (this.iStatus = 0),
            (this.iEndTs = 0);
        };
      (O.prototype._clone = function () {
        return new _.a.GetLuckyPoolRsp();
      }),
        (O.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (O.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (O.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode),
            t.writeInt64(1, this.lRoomId),
            t.writeInt32(2, this.iStatus),
            t.writeInt32(3, this.iEndTs);
        }),
        (O.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.lRoomId = t.readInt64(1, !1, this.lRoomId)),
            (this.iStatus = t.readInt32(2, !1, this.iStatus)),
            (this.iEndTs = t.readInt32(3, !1, this.iEndTs));
        }),
        (_.a.GetLuckyPoolRsp = O);
      var M,
        P = O,
        k = n("eZQP"),
        A = n("O+Z0"),
        N = n("Kxmo"),
        L = n("w0rY"),
        x = n("Mk7s");


      
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
            r = h()(t);
          if (e) {
            var i = h()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l()(this, n);
        };
      }
      var B = N.a.kUserLuckyGift,
        G =
          ((M = (function (t) {
            c()(n, t);
            var e = D(n);
            function n() {
              return i()(this, n), e.apply(this, arguments);
            }
            return (
              a()(n, [
                {
                  key: "getUserPrizeRecordList",
                  value: function (t) {
                    var e = t || {},
                      n = e.iStart,
                      r = e.iCount,
                      i = new g();
                    return (
                      this.setUserId(i.tUserId),
                      (i.iStart = n),
                      (i.iCount = r),
                      this.fetch("getUserPrizeRecordList", i, R, {
                        customHandleError: !0,
                      })
                    );
                  },
                },
                {
                  key: "getBoxPanelInfo",
                  value: function (t) {
                    var e = t.lRoomId,
                      n = t.iLcid,
                      r = t.iBoxGiftId,
                      i = new w();
                    return (
                      this.setUserId(i.tUserId),
                      (i.lRoomId = e),
                      (i.iLcid = n),
                      r && (i.iBoxGiftId = r),
                      this.fetch("getBoxPanelInfo", i, T, {
                        customHandleError: !0,
                      })
                    );
                  },
                },
                {
                  key: "GetLuckyPoolStatus",
                  value: function (t) {
                    var e = new I();
                    return (
                      (e.lRoomId = t),
                      this.fetch("getLuckyPool", e, P, {
                        customHandleError: !0,
                      })
                    );
                  },
                },
                {
                  key: "CheckBlackWhiteList",
                  value: function (t) {
                    var e = t.anchorId,
                      n = t.anchorLang,
                      r = t.roomType,
                      i = t.anchorCountry,
                      o = new k.a();
                    return (
                      (o.vFunctionIDs.value = [B]),
                      (o.tAnchorInfo.lUid = e),
                      (o.tAnchorInfo.sLang = n),
                      (o.tAnchorInfo.lRoomType = r),
                      (o.tAnchorInfo.sCountry = i),
                      this.setUserId(o.tUserId),
                      this.fetch("checkBlackWhiteList", o, A.a, {
                        customHandleError: !0,
                      })
                    );
                  },
                },
              ]),
              n
            );
          })(L.a)),
          d()(
            M.prototype,
            "getUserPrizeRecordList",
            [x.a],
            Object.getOwnPropertyDescriptor(
              M.prototype,
              "getUserPrizeRecordList"
            ),
            M.prototype
          ),
          d()(
            M.prototype,
            "getBoxPanelInfo",
            [x.a],
            Object.getOwnPropertyDescriptor(M.prototype, "getBoxPanelInfo"),
            M.prototype
          ),
          d()(
            M.prototype,
            "CheckBlackWhiteList",
            [x.a],
            Object.getOwnPropertyDescriptor(M.prototype, "CheckBlackWhiteList"),
            M.prototype
          ),
          M);
      e.a = new G();
    },
    K0CG: function (t, e, n) {
      "use strict";
      n.d(e, "h", function () {
        return a;
      }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "e", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "j", function () {
          return p;
        }),
        n.d(e, "g", function () {
          return d;
        }),
        n.d(e, "i", function () {
          return _;
        });
      n("q4i/");
      var r = n("7Qmc");
      function i(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e3,
          n = (t / e).toFixed(1);
        return n;
      }
      function o(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        return +"".concat(Math.floor(+"".concat(t / e, "e1")), "e-1");
      }
      function a(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ",",
          n = /(-?\d+)(\d{3})/,
          r = null,
          i = "",
          o = "";
        if (isNaN(t)) return t;
        if (!isFinite(t)) return 0;
        if (
          ((o = t = "number" === typeof t ? "".concat(t) : t),
          (r = t.indexOf(".")) > -1 &&
            ((o = t.substring(0, r)), (i = t.substring(r + 1))),
          "string" === typeof o)
        )
          for (; n.test(o); ) o = o.replace(n, "$1".concat(e, "$2"));
        return i && (o += ".".concat(i)), o;
      }
      var s = function (t) {
          var e;
          return isNaN(t)
            ? t
            : isFinite(t)
            ? (e = "number" !== typeof t ? +t : t) < 1e3
              ? e
              : e < Math.pow(10, 6)
              ? ((e = i(e, 1e3)), "".concat(a(e), "k"))
              : e < Math.pow(10, 9)
              ? ((e = i(e, Math.pow(10, 6))), "".concat(a(e), "m"))
              : ((e = i(e, Math.pow(10, 9))), "".concat(a(e), "b"))
            : 0;
        },
        c = function (t) {
          var e;
          return isNaN(t)
            ? t
            : isFinite(t)
            ? (e = "number" !== typeof t ? +t : t) < 1e3
              ? e
              : e < Math.pow(10, 6)
              ? ((e = o(e, 1e3)), "".concat(a(e), "k"))
              : e < Math.pow(10, 9)
              ? ((e = o(e, Math.pow(10, 6))), "".concat(a(e), "m"))
              : ((e = o(e, Math.pow(10, 9))), "".concat(a(e), "b"))
            : 0;
        },
        u = Object(r.a)(function (t) {
          var e = (function (t) {
            return 16777215 & t;
          })(t);
          return "#".concat(e.toString(16)) || !1;
        });
      var l = Object(r.a)(function (t) {
        return t.replace(/#([a-zA-Z0-9]{2})([a-zA-Z0-9]*)/, "#$2$1");
      });
      var f = c;
      function h(t) {
        return isNaN(t) ? t : Math.floor(t);
      }
      function p(t) {
        return "0".concat((t = t || 0)).substr(-2);
      }
      function d(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          n = Math.pow(10, e);
        return t >= n ? "".concat(n - 1, "+") : t;
      }
      function _(t) {
        var e,
          n =
            "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ".split(
              ""
            ),
          r = n.length,
          i = +t,
          o = [];
        do {
          (i = (i - (e = i % r)) / r), o.unshift(n[e]);
        } while (i);
        return o.join("");
      }
    },
    KEvM: function (t, e, n) {
      "use strict";
      n.d(e, "f", function () {
        return _;
      }),
        n.d(e, "c", function () {
          return v;
        }),
        n.d(e, "g", function () {
          return g;
        }),
        n.d(e, "b", function () {
          return w;
        }),
        n.d(e, "d", function () {
          return C;
        }),
        n.d(e, "h", function () {
          return T;
        }),
        n.d(e, "a", function () {
          return I;
        }),
        n.d(e, "e", function () {
          return O;
        });
      var r = n("V4gF"),
        i = n.n(r),
        o = (n("28PD"), n("KFtC")),
        a = n("p1oI"),
        s = n("ODcA"),
        c = n("mTTC"),
        u = n("GSgY"),
        l = n.n(u),
        f = n("eSnk"),
        h = n("nimoua"),
        p = n.n(h),
        d = "illegal lang registry",
        _ = {},
        v = function (t) {
          return t === _;
        },
        m = function (t) {
          return t && t.__esModule && t.default ? t.default : t;
        },
        g = function (t) {
          var e = m(t);
          return e && e.loaders && e.namespace ? e : null;
        },
        y = Object(o.k)(),
        R = {},
        b = function (t, e) {
          var n = !t || t < 0 ? y : t;
          return l()(e, n) ? n : "1033";
        },
        w = function (t, e) {
          var n,
            r = g(t);
          if (!r) return null;
          var i = r.loaders,
            o = r.namespace,
            a = b(e, i);
          return null === (n = R[a]) || void 0 === n ? void 0 : n[o];
        },
        E = (function () {
          var t = i()(
            regeneratorRuntime.mark(function t(e, n) {
              var r, i, o, a, s, c, u, l, f;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ((i = g(e))) {
                        t.next = 3;
                        break;
                      }
                      throw Error(d);
                    case 3:
                      if (
                        ((o = i.loaders),
                        (a = i.namespace),
                        (s = b(n, o)),
                        !(c =
                          null === (r = R[s]) || void 0 === r ? void 0 : r[a]))
                      ) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt("return", c);
                    case 8:
                      if ("function" === typeof (u = o[s])) {
                        t.next = 11;
                        break;
                      }
                      throw Error(d);
                    case 11:
                      return (t.next = 13), u();
                    case 13:
                      return (
                        (l = t.sent),
                        (f = m(l)),
                        R[s] || (R[s] = {}),
                        (R[s][a] = f),
                        t.abrupt("return", f)
                      );
                    case 18:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })(),
        C = Object(f.a)(E, 1e3, 5),
        T = function () {
          var t = "_lang";
          return Object(a.a)(t) ? Object(s.b)(t) : null;
        },
        S = "";
      function I() {
        var t;
        S ||
          (p.a.isInNimoApp
            ? "number" ===
                typeof (S =
                  (null === (t = c.default.getPureCache()) || void 0 === t
                    ? void 0
                    : t.lang) ||
                  Object(a.a)("_lang") ||
                  "") && (S = String(S))
            : (S = y));
        return S;
      }
      var O = function (t, e) {
        var n = e || I();
        return n
          ? C(t, n)
          : c.default.getUserInfo().then(function (e) {
              return C(t, e.lang);
            });
      };
    },
    Kxmo: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          {
            kAnchorCheckRoom: 1006,
            kAnchorVirtualIdol: 2001,
            kAnchorTabooMax: 10001,
            kAnchorAllGear: 10004,
            kAnchorAward: 10006,
            kAnchorEndLiveTutorial: 10007,
            kUserLuckyGift: 10008,
            kAnchorLottery: 10009,
            kAnchorLiveInProhibitedArea: 10010,
            kAnchorMessage: 10012,
            kAnchorThirdPartyRepushWatermark: 10014,
            kUserGoldenBeansGamesCollect: 10017,
            kAnchorMultiLinkMic: 10018,
            kUserGroupChat: 10019,
            kUserGoldenBeansGamesExchange: 10020,
            kUserGoldBeanLottery: 10021,
            kUserGoldBeanBlackList: 20005,
            kUserOfficialStaff: 10023,
            kUserEnterpriseWithdrawalLimit: 10024,
            kAnchorShareRewardWhiteList: 10026,
            kAnchorShareRewardBlackList: 10027,
            kUserCurrencyDealer: 10028,
            kAnchorPush: 10029,
            kAlertBoxDIYResource: 10036,
            kLiveMeetingTakeSeatPush: 10041,
            kAnchorLiveReplay4App: 10042,
            kAnchorLiveRecord: 20001,
            kUserLuckyGift2: 30001,
            kAnchorAirRaid: 100852,
            kWealthFamilyCreate: 1001e3,
            kAnchorThirdPartyRepush: 1000702,
            kAnchorPickMe: 1000801,
            kAnchorPickMeBlack: 1000850,
            kSlotMachineWhite: 10030,
            kSlotMachineBlack: 20009,
            kUserPickMeJackpot: 10035,
            kAnchorBigAnchor: 10037,
            kSlotMachineDiamonWhite: 10039,
            kUserLevelExpNoDayLimit: 10044,
            kAnchorThirdPartyRepushDelay: 10045,
            kRouletteServer: 10049,
            kGoldBeanMall: 10050,
            kBoosGame: 10053,
            kBoosGameBlack: 20016,
            kReplay1080P: 10051,
            kFishingGame: 10054,
            kWarConflictGame: 10055,
            kAlertBoxTextToSpeech: 10056,
            kEntrust: 10058,
            kAnchorPrivateRoom: 10059,
            kHorseRaceWhite: 10061,
            kSlotMachineFCoinWhite: 10065,
            kBaucuaWhitelist: 10066,
            kPaidPotentialList: 10067,
            kLudoGameWhiteList: 10068,
            kHorseRaceBlack: 20018,
            kAnchorRecordBlack: 20020,
            kAnchorWatchByApp: 1000001,
            kAnchorAutoGeneratedVideo: 1000002,
            kAnchorOptionalGeneratedVideo: 1000003,
            kAnchorAllowClip: 1000004,
            kAnchorAppRecommend: 1000005,
            kAnchorWebRecommend: 1000006,
            kAnchorNeedWaterMark: 1000007,
            kRoomTypeWatchByApp: 1000008,
            kRoomTypeAutoGeneratedVideo: 1000009,
            kRoomTypeOptionalGeneratedVideo: 1000010,
            kRoomTypeAllowClip: 1000011,
            kRoomTypeAppRecommend: 1000012,
            kRoomTypeWebRecommend: 1000013,
            kRoomTypeNeedWaterMark: 1000014,
            kGameControlToShowForWeb: 1000015,
            kGameControlForServer: 1000016,
          });
      (r.a.OMSFunctionID = i), (e.a = i);
    },
    L7xG: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var r = n("rIiI"),
        i = n.n(r),
        o = n("58BP"),
        a = n.n(o),
        s = n("KkFV"),
        c = {
          VERSION: "version",
          BIZ_TOKEN: "bizToken",
          UDB_USER_ID: "udbUserId",
          LANG: "lang",
          CONTENT_LANG: "clang",
          COUNTRY_CODE: "country",
          SELECT_CONTENT_LANG: "sel_clang",
          DEVICE_ID: "__yamid_new",
          USER_ID: "userid",
          MID: "__yamid_new",
          USER_NAME: "userName",
          CONTENT_COUNTRY: "ccountry",
        },
        u = { LANG: "1033", CONTENT_LANG: "1000", COUNTRY_CODE: "ID" },
        l = Object.values(c),
        f = (function () {
          function t() {
            i()(this, t);
          }
          return (
            a()(t, [
              {
                key: "get",
                value: function (t) {
                  if (!this.validate(t))
                    throw new ReferenceError("".concat(this.name));
                  var e = s.a.get(t);
                  return e || 0 === e ? e : u[t];
                },
              },
              {
                key: "validate",
                value: function (t) {
                  return ~l.indexOf(t);
                },
              },
            ]),
            t
          );
        })();
      e.b = new f();
    },
    LUnx: function (t, e, n) {
      t.exports = n("4KFe")(25);
    },
    "M2/Y": function (t, e, n) {
      t.exports = n.p + "images/rule-btn.7eed90c246a110525520db4d40a748c2.png";
    },
    Mk7s: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n("YQsQ"),
        i = n.n(r),
        o = n("W7YU"),
        a = n("TqI2");
      function s(t, e, n) {
        var r = n.value;
        if ("function" !== typeof r)
          throw new TypeError(
            "@withUser decorator can only be applied to methods not: ".concat(
              i()(r)
            )
          );
        return (
          (n.value = function () {
            for (
              var t = this, e = arguments.length, n = new Array(e), i = 0;
              i < e;
              i++
            )
              n[i] = arguments[i];
            return o.i.user.isReady()
              ? r.apply(this, n)
              : Object(a.a)()
                  .then(function (t) {
                    o.i.user.init(t);
                  })
                  .then(function () {
                    return r.apply(t, n);
                  });
          }),
          n
        );
      }
    },
    MpZv: function (t, e, n) {
      "use strict";
      n.d(e, "g", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "e", function () {
          return a;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return c;
        }),
        n.d(e, "d", function () {
          return u;
        });
      var r = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return "000".concat(t).slice(-1 * e);
        },
        i = function (t, e, n, r, i, o) {
          var a = new Date(Date.UTC(e, n - 1, r, i, o)).getTime();
          return new Date(a - 36e5 * t).getTime();
        },
        o = function (t, e) {
          var n = t;
          e && (n = Math.abs(t - e));
          var r = n % 864e5,
            i = r % 36e5,
            o = i % 6e4;
          return {
            day: Math.floor(n / 864e5),
            hour: Math.floor(r / 36e5),
            minute: Math.floor(i / 6e4),
            second: Math.floor(o / 1e3),
          };
        };
      function a(t) {
        var e = "";
        if (t > -1) {
          var n = Math.floor(t / 3600),
            r = Math.floor(t / 60) % 60,
            i = t % 60;
          n > 0 && (e = n < 10 ? "0".concat(n, ":") : "".concat(n, ":")),
            r < 10 && (e += "0"),
            (e += "".concat(r, ":")),
            i < 10 && (e += "0"),
            (e += i);
        }
        return e;
      }
      var s = function (t) {
          var e = t < 0 ? 0 : t,
            n = "";
          if (e > -1) {
            var r = parseInt(e / 86400, 10),
              i = parseInt((e % 86400) / 3600, 10),
              o = parseInt((e % 3600) / 60, 10),
              a = parseInt(e % 60, 10);
            r > 0 && (n = r < 10 ? "0".concat(r, ":") : "".concat(r, ":")),
              i > 0 && (n += i < 10 ? "0".concat(i, ":") : "".concat(i, ":")),
              o < 10 && (n += "0"),
              (n += "".concat(o, ":")),
              a < 10 && (n += "0"),
              (n += a);
          }
          return n;
        },
        c = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new Date().getFullYear(),
            n = [1, 3, 5, 7, 8, 10, 12];
          return -1 !== n.indexOf(t)
            ? 31
            : 2 === t
            ? e % 4 === 0
              ? 29
              : 28
            : 30;
        };
      var u = function (t) {
        var e = t.slice(0, 4),
          n = t.slice(4, 6),
          r = t.slice(6, 8),
          i = t.slice(8, 10),
          o = t.slice(10, 12);
        return Date.UTC(
          Number(e),
          Number(n) - 1,
          Number(r),
          Number(i),
          Number(o)
        );
      };
    },
    NWdW: function (t, e, n) {
      t.exports = n("4KFe")(49);
    },
    "O+Z0": function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i = n("ZxgU"),
        o = function () {
          (this.iField = 0),
            (this.sMatchReason = ""),
            (this.sMatchKey = ""),
            (this.sTimeReason = "");
        };
      (o.prototype._clone = function () {
        return new r.a.BlackWhiteListMatchInfo();
      }),
        (o.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (o.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (o.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iField),
            t.writeString(1, this.sMatchReason),
            t.writeString(2, this.sMatchKey),
            t.writeString(3, this.sTimeReason);
        }),
        (o.prototype.readFrom = function (t) {
          (this.iField = t.readInt32(0, !1, this.iField)),
            (this.sMatchReason = t.readString(1, !1, this.sMatchReason)),
            (this.sMatchKey = t.readString(2, !1, this.sMatchKey)),
            (this.sTimeReason = t.readString(3, !1, this.sTimeReason));
        }),
        (r.a.BlackWhiteListMatchInfo = o);
      var a = function () {
        (this.bInBlack = !1),
          (this.bInWhite = !1),
          (this.bHasPermission = !1),
          (this.sMessage = ""),
          (this.lEndTimestamp = 0),
          (this.sAttribute = ""),
          (this.tMatchInfo = new r.a.BlackWhiteListMatchInfo());
      };
      (a.prototype._clone = function () {
        return new r.a.BlackWhiteListResult();
      }),
        (a.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (a.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (a.prototype.writeTo = function (t) {
          t.writeBoolean(0, this.bInBlack),
            t.writeBoolean(1, this.bInWhite),
            t.writeBoolean(2, this.bHasPermission),
            t.writeString(3, this.sMessage),
            t.writeInt64(4, this.lEndTimestamp),
            t.writeString(5, this.sAttribute),
            t.writeStruct(6, this.tMatchInfo);
        }),
        (a.prototype.readFrom = function (t) {
          (this.bInBlack = t.readBoolean(0, !1, this.bInBlack)),
            (this.bInWhite = t.readBoolean(1, !1, this.bInWhite)),
            (this.bHasPermission = t.readBoolean(2, !1, this.bHasPermission)),
            (this.sMessage = t.readString(3, !1, this.sMessage)),
            (this.lEndTimestamp = t.readInt64(4, !1, this.lEndTimestamp)),
            (this.sAttribute = t.readString(5, !1, this.sAttribute)),
            (this.tMatchInfo = t.readStruct(6, !1, this.tMatchInfo));
        }),
        (r.a.BlackWhiteListResult = a);
      var s = function () {
        (this.iCode = 0),
          (this.mIsInList = new i.b.Map(
            new i.b.INT64(),
            new r.a.BlackWhiteListResult()
          ));
      };
      (s.prototype._clone = function () {
        return new r.a.BlackWhiteListRsp();
      }),
        (s.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (s.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (s.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode), t.writeMap(1, this.mIsInList);
        }),
        (s.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.mIsInList = t.readMap(1, !1, this.mIsInList));
        }),
        (r.a.BlackWhiteListRsp = s);
      e.a = s;
    },
    ODcA: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        });
      var r = ["_pop", "_udbid", "_udbtoken", "_udbver"];
      function i(t, e) {
        var n = t.split("?"),
          r = e;
        e instanceof Array && (r = e.join("|"));
        var i = new RegExp("(".concat(r, ")=(\\w|.)+")),
          o = n[1]
            ? n[1]
                .split("&")
                .filter(function (t) {
                  return !i.test(t);
                })
                .join("&")
            : "";
        return "".concat(n[0]).concat(o ? "?".concat(o) : "");
      }
      e.b = function (t) {
        var e = window.location.href
            .replace(location.hash, "")
            .replace("#", "")
            .split("?"),
          n = t;
        t instanceof Array && (n = t.join("|"));
        var r = new RegExp("(".concat(n, ")=(\\w|.)+")),
          i = e[1]
            ? e[1]
                .split("&")
                .filter(function (t) {
                  return !r.test(t);
                })
                .join("&")
            : "";
        return "".concat(e[0]).concat(i ? "?".concat(i) : "");
      };
    },
    OK13: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          function () {
            (this.iLevel = 0),
              (this.iDurationMS = 0),
              (this.sUrl = ""),
              (this.iMin = 0),
              (this.iMax = 0),
              (this.iTerminalType = 0),
              (this.iRecordId = 0),
              (this.iShowLevel = 0),
              (this.iComboPattern = 0),
              (this.iComboCurrent = 0),
              (this.iComboPre = 0);
          });
      (i.prototype._clone = function () {
        return new r.a.StreamerEffect();
      }),
        (i.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (i.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (i.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iLevel),
            t.writeInt32(1, this.iDurationMS),
            t.writeString(2, this.sUrl),
            t.writeInt32(3, this.iMin),
            t.writeInt32(4, this.iMax),
            t.writeInt32(5, this.iTerminalType),
            t.writeInt32(6, this.iRecordId),
            t.writeInt32(7, this.iShowLevel),
            t.writeInt32(8, this.iComboPattern),
            t.writeInt32(9, this.iComboCurrent),
            t.writeInt32(10, this.iComboPre);
        }),
        (i.prototype.readFrom = function (t) {
          (this.iLevel = t.readInt32(0, !1, this.iLevel)),
            (this.iDurationMS = t.readInt32(1, !1, this.iDurationMS)),
            (this.sUrl = t.readString(2, !1, this.sUrl)),
            (this.iMin = t.readInt32(3, !1, this.iMin)),
            (this.iMax = t.readInt32(4, !1, this.iMax)),
            (this.iTerminalType = t.readInt32(5, !1, this.iTerminalType)),
            (this.iRecordId = t.readInt32(6, !1, this.iRecordId)),
            (this.iShowLevel = t.readInt32(7, !1, this.iShowLevel)),
            (this.iComboPattern = t.readInt32(8, !1, this.iComboPattern)),
            (this.iComboCurrent = t.readInt32(9, !1, this.iComboCurrent)),
            (this.iComboPre = t.readInt32(10, !1, this.iComboPre));
        }),
        (r.a.StreamerEffect = i);
    },
    OVxc: function (t, e, n) {
      t.exports = n.p + "images/diamonds.a2f51a343119d1a1ae37f9d625f2fbc2.png";
    },
    OaMi: function (t, e, n) {
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
        f = n("gy9q"),
        h = n.n(f),
        p = n("7DFi"),
        d = n.n(p),
        _ = n("TJEx"),
        v = n.n(_),
        m = n("cQwn"),
        g = n.n(m),
        y = n("avFb"),
        R = n.n(y),
        b = n("7Qmc"),
        w = n("kPK6"),
        E = n.n(w),
        C = n("80GY");
      function T(t, e) {
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
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? T(Object(n), !0).forEach(function (e) {
                g()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function I(t) {
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
            r = v()(t);
          if (e) {
            var i = v()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var O = (function (t) {
        h()(n, t);
        var e = I(n);
        function n() {
          var t;
          a()(this, n);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(i))),
            g()(l()(t), "state", {
              tabBarMove: 0,
              moving: !1,
              showPreShadow: !1,
              showNextShadow: !1,
            }),
            g()(l()(t), "wrapper", null),
            g()(l()(t), "lastOffset", 0),
            g()(l()(t), "movingOffset", 0),
            g()(l()(t), "setTabBar", function (e) {
              var n = t.props,
                r = n.needScroll,
                i = n.findIndex,
                o = n.direction,
                a = i(e || ""),
                s = "rtl" === o,
                c = 0;
              if (r && t.wrapper) {
                var u = t.wrapper.data,
                  l = u.canScroll,
                  f = u.clientWidth;
                (c =
                  t._calcPercentage(a * t.width) -
                  (f - t._calcPercentage(t.width)) / 2),
                  (c = s ? c : -1 * c),
                  s
                    ? ((c = Math.min(c, -l)), (c = Math.max(c, 0)))
                    : ((c = Math.max(c, l)), (c = Math.min(c, 0))),
                  (t.lastOffset = c),
                  t.setState({ tabBarMove: c });
              }
            }),
            g()(l()(t), "saveWrapper", function (e) {
              (t.wrapper = e), t.updateWrapperData();
            }),
            g()(l()(t), "onPanStart", function () {
              t.setState({ moving: !0 });
            }),
            g()(l()(t), "onPanMove", function (e) {
              var n = "rtl" === t.props.direction;
              if (e.moveStatus && t.wrapper) {
                var r = t.wrapper.data.canScroll,
                  i = t.lastOffset + e.moveStatus.x,
                  o = !1,
                  a = !1;
                n
                  ? ((i = Math.max(i, 0)),
                    (o = (i = Math.min(i, -r)) < -r),
                    (a = i > 0))
                  : ((i = Math.min(i, 0)),
                    (o = -(i = Math.max(i, r)) > 0),
                    (a = i > r)),
                  (t.movingOffset = i),
                  t.setState({
                    tabBarMove: i,
                    showPreShadow: o,
                    showNextShadow: a,
                  });
              }
            }),
            g()(l()(t), "onPanEnd", function () {
              (t.lastOffset = t.movingOffset), t.setState({ moving: !1 });
            }),
            g()(l()(t), "_getTabBarStyle", function () {
              var e = t.props.needScroll,
                n = t.state.tabBarMove;
              return e
                ? { transform: "translate3d(".concat(n, "px, 0px, 0px)") }
                : null;
            }),
            g()(l()(t), "_getUnderLineStyle", function (e) {
              var n = t.props,
                r = n.underlineWidth,
                i = n.findIndex,
                o = n.direction,
                a = n.tabBarUnderlineStyle,
                s = r || "".concat(e, "%"),
                c = e * i() + e / 2,
                u = "".concat(c, "%"),
                l = "rtl" === o,
                f = S(
                  {
                    bottom: 0,
                    width: s,
                    transform: "translateX(".concat(l ? "" : "-", "50%)"),
                  },
                  a
                );
              return l ? (f.right = u) : (f.left = u), f;
            }),
            g()(l()(t), "_calcPercentage", function (e) {
              return t.wrapper ? t.wrapper.data.clientWidth * (e / 100) : 0;
            }),
            g()(l()(t), "handleTabClick", function (e) {
              return function () {
                (0, t.props.onClick)(e), t.setTabBar(e);
              };
            }),
            g()(
              l()(t),
              "_calcWidth",
              Object(b.a)(function (t) {
                return t ? Math.round((100 / t) * 100) / 100 : 0;
              })
            ),
            g()(l()(t), "_renderTabBar", function (e, n) {
              var r,
                i = t.props,
                o = i.prefixCls,
                a = i.findIndex,
                s = i.type,
                c = e.key,
                u = e.props.tab,
                l = a() === n,
                f = E()(
                  "".concat(
                    o,
                    "-tab-bar-item n-as-pad-xs n-fx-sr0 n-fx-gr0 n-as-bd-box"
                  ),
                  ((r = {}),
                  g()(r, "".concat(o, "-tab-bar-item_active"), a() === n),
                  g()(r, "c11", l && "primary" === s),
                  g()(r, "c1 n-as-fw", l && "secondary" === s),
                  g()(r, "c3", !l && "secondary" === s),
                  r)
                );
              return R.a.createElement(
                "div",
                {
                  key: c,
                  className: f,
                  style: { width: "".concat(t.width, "%") },
                  onClick: t.handleTabClick(c),
                },
                R.a.createElement("span", null, u)
              );
            }),
            t
          );
        }
        return (
          c()(n, [
            {
              key: "componentDidMount",
              value: function () {
                this.setTabBar();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e,
                  n = this.props,
                  r = n.current,
                  i = n.children;
                (null === i || void 0 === i ? void 0 : i.length) !==
                  (null === (e = t.children) || void 0 === e
                    ? void 0
                    : e.length) && this.updateWrapperData(),
                  t.current !== r && this.setTabBar();
              },
            },
            {
              key: "updateWrapperData",
              value: function () {
                var t = this.wrapper;
                if (t) {
                  var e = t.clientHeight,
                    n = t.clientWidth,
                    r = t.scrollHeight,
                    i = t.scrollWidth;
                  this.wrapper.data = {
                    clientHeight: e,
                    clientWidth: n,
                    scrollHeight: r,
                    scrollWidth: i,
                    canScroll: -i + n,
                  };
                }
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this,
                  n = this.props,
                  r = n.prefixCls,
                  o = n.children,
                  a = n.tabBarClassName,
                  s = n.needScroll,
                  c = n.oneRowCount,
                  u = this.state,
                  l = u.moving,
                  f = u.showNextShadow,
                  h = u.showPreShadow;
                this.width = this._calcWidth(c);
                var p = E()(
                    "".concat(
                      r,
                      "-tab-bar n-as-text-center n-as-bdb bdc1 c2 n-as-rel n-as-pointer"
                    ),
                    ((t = {}), g()(t, a, a), g()(t, "animated", !l), t)
                  ),
                  d = s
                    ? {
                        onPanStart: this.onPanStart,
                        onPanMove: this.onPanMove,
                        onPanEnd: this.onPanEnd,
                      }
                    : null;
                return R.a.createElement(
                  "div",
                  { className: p },
                  h
                    ? R.a.createElement("div", {
                        className: "".concat(r, "-tab-bar-pre-shadow"),
                      })
                    : null,
                  R.a.createElement(
                    C.a,
                    i()({ direction: "horizontal" }, d),
                    R.a.createElement(
                      "div",
                      {
                        className: "".concat(
                          r,
                          "-tab-bar_inner n-fx-sc n-as-rel"
                        ),
                        ref: this.saveWrapper,
                        style: this._getTabBarStyle(),
                      },
                      R.a.Children.map(o, function (t, n) {
                        return e._renderTabBar(t, n);
                      }),
                      R.a.createElement("div", {
                        className: "".concat(
                          r,
                          "-tab-bar-underline n-as-abs bc3 n-as-rnd"
                        ),
                        style: this._getUnderLineStyle(this.width),
                      })
                    )
                  ),
                  f
                    ? R.a.createElement("div", {
                        className: "".concat(r, "-tab-bar-next-shadow"),
                      })
                    : null
                );
              },
            },
          ]),
          n
        );
      })(R.a.Component);
      function M(t) {
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
            r = v()(t);
          if (e) {
            var i = v()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var P = (function (t) {
        h()(n, t);
        var e = M(n);
        function n() {
          var t;
          a()(this, n);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(i))),
            g()(l()(t), "state", { moving: !1, tabPaneMove: 0 }),
            g()(l()(t), "lastOffset", 0),
            g()(l()(t), "pageTurnOffset", 100),
            g()(l()(t), "wrapper", null),
            g()(l()(t), "saveWrapper", function (e) {
              t.wrapper = e;
            }),
            g()(l()(t), "_getTabPaneStyle", function () {
              var e = t.props,
                n = e.direction,
                r = e.findIndex,
                i = e.childrenLength,
                o = t.state.tabPaneMove,
                a = r(),
                s = "-".concat(100 * a, "%"),
                c = "rtl" === n,
                u = {};
              return (
                (0 === a && o >= 0) || (a === i - 1 && o <= 0)
                  ? c
                    ? (u.right = s)
                    : (u.left = s)
                  : c
                  ? (u.right = "calc(".concat(s, " + ").concat(o, "px)"))
                  : (u.left = "calc(".concat(s, " + ").concat(o, "px)")),
                u
              );
            }),
            g()(l()(t), "onPanStart", function () {
              t.setState({ moving: !0 });
            }),
            g()(l()(t), "onPanMove", function (e) {
              if (e.moveStatus) {
                var n = "rtl" === t.props.direction,
                  r = e.moveStatus.x;
                n && (r = -r),
                  (t.movingOffset = r),
                  t.setState({ tabPaneMove: r });
              }
            }),
            g()(l()(t), "onPanEnd", function () {
              var e = t.props.goToNext;
              Math.abs(t.movingOffset) > t.pageTurnOffset
                ? (e(t.movingOffset > 0 ? -1 : 1),
                  t.setState({ moving: !1, tabPaneMove: 0 }))
                : t.setState({ moving: !1, tabPaneMove: 0 });
            }),
            t
          );
        }
        return (
          c()(n, [
            {
              key: "componentDidMount",
              value: function () {
                var t = (0, this.props.findIndex)();
                (this.lastOffset = "-".concat(100 * t, "%")),
                  this.wrapper &&
                    (this.pageTurnOffset = this.wrapper.clientWidth / 3);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.prefixCls,
                  n = t.children,
                  r = t.swipeable,
                  o = this.state.moving,
                  a = r
                    ? {
                        onPanEnd: this.onPanEnd,
                        onPanMove: this.onPanMove,
                        onPanStart: this.onPanStart,
                      }
                    : null;
                return R.a.createElement(
                  C.a,
                  i()({ direction: "horizontal" }, a),
                  R.a.createElement(
                    "div",
                    {
                      className: ""
                        .concat(e, "-tab-content n-as-rel ")
                        .concat(o ? "" : "animated"),
                      style: this._getTabPaneStyle(),
                    },
                    n
                  )
                );
              },
            },
          ]),
          n
        );
      })(R.a.PureComponent);
      function k(t) {
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
            r = v()(t);
          if (e) {
            var i = v()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var A = function () {},
        N = function (t) {
          var e = t.defaultActiveKey,
            n = t.activeKey,
            r = t.children,
            i = e || n,
            o = "",
            a = !1;
          return (
            R.a.Children.map(r, function (t, e) {
              0 === e && (o = t.key), i === t.key && (a = !0);
            }),
            a || (i = o),
            i
          );
        },
        L = Object(b.a)(function (t) {
          return R.a.Children.count(t);
        }),
        x = function (t, e) {
          return Math.min(L(t), e);
        },
        D = (function (t) {
          h()(n, t);
          var e = k(n);
          function n(t) {
            var r;
            return (
              a()(this, n),
              (r = e.call(this, t)),
              g()(l()(r), "_findIndex", function (t) {
                var e = r.state.current,
                  n = t || e,
                  i = r.props.children;
                if (!n) return 0;
                if (r._keyMap[n]) return r._keyMap[n];
                var o = 0;
                return (
                  R.a.Children.map(i, function (t, e) {
                    (r._keyMap[t.key] = e), t.key === n && (o = e);
                  }),
                  o
                );
              }),
              g()(l()(r), "handleTabBarClick", function (t) {
                var e = r.props.onChange;
                r.setState({ current: t }), e(t);
              }),
              g()(l()(r), "goToNext", function (t) {
                var e = (r.props.children[r._findIndex() + t] || {}).key;
                e && r.handleTabBarClick(e);
              }),
              g()(l()(r), "renderTabContent", function () {
                var t = r.props,
                  e = t.children,
                  n = t.prefixCls,
                  i = t.direction,
                  o = t.destroyInactiveTabPane,
                  a = t.swipeable,
                  s = r.state,
                  c = s.current,
                  u = s.childrenLength;
                return R.a.createElement(
                  P,
                  {
                    direction: i,
                    prefixCls: n,
                    findIndex: r._findIndex,
                    childrenLength: u,
                    goToNext: r.goToNext,
                    swipeable: a,
                  },
                  R.a.Children.map(e, function (t, e) {
                    return R.a.cloneElement(t, {
                      isCurrent: c === t.key,
                      index: e,
                      destroyInactiveTabPane: o,
                    });
                  })
                );
              }),
              (r.state = { current: N(t), oneRowCount: 0, childrenLength: 0 }),
              (r._keyMap = Object.create(null)),
              r
            );
          }
          return (
            c()(
              n,
              [
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.prefixCls,
                      n = t.disableTabBarClick,
                      r = t.className,
                      o = void 0 === r ? "" : r,
                      a = t.type,
                      s = this.state,
                      c = s.oneRowCount,
                      u = s.childrenLength,
                      l = s.current;
                    return R.a.createElement(
                      "div",
                      {
                        className: ""
                          .concat(e, " ")
                          .concat(o, " ")
                          .concat(e, "-")
                          .concat(a),
                      },
                      R.a.createElement(
                        O,
                        i()({}, this.props, {
                          oneRowCount: c,
                          findIndex: this._findIndex,
                          onClick: n ? A : this.handleTabBarClick,
                          needScroll: u > c,
                          current: l,
                          type: a,
                        })
                      ),
                      this.renderTabContent()
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (t, e) {
                    var n = t.children,
                      r = t.page,
                      i = t.activeKey,
                      o = L(n);
                    return (void 0 !== i && i !== e.current) ||
                      o !== e.childrenLength
                      ? {
                          current: N(t),
                          childrenLength: o,
                          oneRowCount: x(n, r),
                        }
                      : null;
                  },
                },
              ]
            ),
            n
          );
        })(R.a.Component);
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
            r = v()(t);
          if (e) {
            var i = v()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      g()(D, "defaultProps", {
        onChange: A,
        prefixCls: "nm-tabs",
        direction: "ltr",
        page: 4,
        destroyInactiveTabPane: !1,
        swipeable: !0,
        disableTabBarClick: !1,
        underlineWidth: null,
        type: "primary",
      });
      var G = (function (t) {
        h()(n, t);
        var e = B(n);
        function n() {
          var t;
          a()(this, n);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(i))), g()(l()(t), "_load", !1), t
          );
        }
        return (
          c()(n, [
            {
              key: "render",
              value: function () {
                var t,
                  e = this.props,
                  n = e.prefixCls,
                  r = void 0 === n ? "nm-tabs-tab-pane-item" : n,
                  i = e.children,
                  o = e.isCurrent,
                  a = e.destroyInactiveTabPane,
                  s = e.className,
                  c = E()(
                    "".concat(r, " n-as-w100"),
                    ((t = {}),
                    g()(t, "".concat(r, "_active"), o),
                    g()(t, "".concat(r, "_hide"), !o),
                    g()(t, s, s),
                    t)
                  );
                return (
                  o && (this._load = !a),
                  R.a.createElement(
                    "div",
                    { className: c },
                    o || this._load ? i : null
                  )
                );
              },
            },
          ]),
          n
        );
      })(R.a.PureComponent);
      D.TabPane = G;
      e.a = D;
    },
    OuPn: function (t, e, n) {
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
        f = n("gy9q"),
        h = n.n(f),
        p = n("7DFi"),
        d = n.n(p),
        _ = n("TJEx"),
        v = n.n(_),
        m = n("cQwn"),
        g = n.n(m),
        y = n("avFb"),
        R = n("uZd7"),
        b = n.n(R),
        w = n("7W03");
      n.d(e, "b", function () {
        return w.b;
      });
      n("R/7o");
      function E(t) {
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
            r = v()(t);
          if (e) {
            var i = v()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return d()(this, n);
        };
      }
      var C = (function (t) {
        h()(n, t);
        var e = E(n);
        function n(t) {
          var r;
          return (
            a()(this, n),
            (r = e.call(this, t)),
            g()(l()(r), "tooltip", null),
            g()(l()(r), "saveTooltip", function (t) {
              r.tooltip = t;
            }),
            (r.state = {}),
            r
          );
        }
        return (
          c()(n, [
            {
              key: "getPopupDomNode",
              value: function () {
                return this.tooltip.getPopupDomNode();
              },
            },
            {
              key: "getOverlay",
              value: function () {
                var t = this.props,
                  e = t.title,
                  n = t.prefixCls,
                  r = t.content,
                  i = t.titleClass,
                  o = t.className;
                return y.createElement(
                  "div",
                  { className: o },
                  e &&
                    y.createElement(
                      "div",
                      { className: "".concat(n, "-title c1 ").concat(i) },
                      e
                    ),
                  y.createElement(
                    "div",
                    { className: "".concat(n, "-inner-content c2") },
                    r
                  )
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = b()(this.props, ["title"]);
                return y.createElement(
                  w.a,
                  i()({}, t, {
                    ref: this.saveTooltip,
                    overlay: this.getOverlay(),
                  })
                );
              },
            },
          ]),
          n
        );
      })(y.Component);
      g()(C, "defaultProps", {
        prefixCls: "nimo-popover",
        placement: "top",
        transitionName: "zoom-big",
        trigger: "hover",
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        overlayStyle: {},
        titleClass: "",
      }),
        (e.a = C);
    },
    PWmO: function (t, e, n) {
      t.exports = n("4KFe")(18);
    },
    Pjm3: function (t, e, n) {
      "use strict";
      n.r(e);
      n("RlNQ");
      var r = n("rIiI"),
        i = n.n(r),
        o = n("58BP"),
        a = n.n(o),
        s = n("gy9q"),
        c = n.n(s),
        u = n("7DFi"),
        l = n.n(u),
        f = n("TJEx"),
        h = n.n(f),
        p = n("cQwn"),
        d = n.n(p),
        _ = n("avFb"),
        v = n.n(_),
        m = n("kPK6"),
        g = n.n(m),
        y = n("KFtC"),
        R = n("Ptek"),
        b = n.n(R),
        w = n("+xEq"),
        E = n("q4i/"),
        C = n.n(E);
      function T() {
        var t = "Page Performance Data",
          e = (function () {
            var t,
              e,
              n,
              r,
              i = window.performance.timing,
              o = [];
            return (
              (o.TTFB = i.responseStart - i.navigationStart),
              (o.TTI = i.domInteractive - i.navigationStart),
              (o.DCL = i.domContentLoadedEventEnd - i.navigationStart),
              (o["Page Load"] = i.loadEventEnd - i.loadEventStart),
              (o.Latency = i.responseStart - i.fetchStart),
              (o.DNS = i.domainLookupEnd - i.domainLookupStart),
              (o["Server connect Time"] = i.connectEnd - i.connectStart),
              (o["Server Response Time"] = i.responseStart - i.requestStart),
              (o["Page Load time"] = i.loadEventStart - i.navigationStart),
              (o["Transfer/Page Download Time"] =
                i.responseEnd - i.responseStart),
              (o["DOM Processing to Interactive"] =
                i.domInteractive - i.domLoading),
              (o["DOM Interactive to Complete"] =
                i.domComplete - i.domInteractive),
              (o["First Paint Time"] = Math.round(
                (null === (t = performance.getEntriesByName("first-paint")) ||
                void 0 === t ||
                null === (e = t[0]) ||
                void 0 === e
                  ? void 0
                  : e.startTime) || 0
              )),
              (o["First Contentful Paint"] = Math.round(
                (null ===
                  (n = performance.getEntriesByName(
                    "first-contentful-paint"
                  )) ||
                void 0 === n ||
                null === (r = n[0]) ||
                void 0 === r
                  ? void 0
                  : r.startTime) || 0
              )),
              o
            );
          })(),
          n = { TTFB: [100, 300] };
        for (var r in (console.group(t), e))
          if (e.hasOwnProperty(r)) {
            var i = e[r],
              o = n[r],
              a = "grey";
            if (o) {
              var s = o || [],
                c = C()(s, 2),
                u = c[0],
                l = c[1];
              i <= u ? (a = "green") : i >= l && (a = "red");
            }
            console.log(
              "%c".concat(r, ": %c").concat(i, "ms"),
              "color: grey",
              "color: ".concat(a)
            );
          }
        console.groupEnd(t);
      }
      function S(t) {
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
            r = h()(t);
          if (e) {
            var i = h()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l()(this, n);
        };
      }
      var I = n("KEvM"),
        O = n("tdpk"),
        M = n("mTTC"),
        P = n("nimoua"),
        k = n.n(P),
        A = n("lhie"),
        N = n("2/Zn"),
        L = n("oaUe"),
        x = n("iYl+"),
        D = n("tbCU"),
        B =
          (Object(D.b)(
            function () {
              return Promise.resolve().then(n.bind(null, "CBG9"));
            },
            { loading: !1, when: D.a }
          ),
          Object(D.b)(
            function () {
              return n.e("9f1b0").then(n.bind(null, "M8wd"));
            },
            { loading: !1, when: D.a }
          )),
        G = Object(D.b)(
          function () {
            return Promise.all([n.e("0cfc8"), n.e("7dcca")]).then(
              n.bind(null, "lPro")
            );
          },
          { loading: !1, when: D.a }
        ),
        U = n("ZTQi"),
        j = n.n(U),
        F = n("f2qI"),
        V = n.n(F),
        Y = n("gtb+"),
        W = n.n(Y),
        H = n("vARU"),
        K = n("cOjp"),
        z = n("OaMi"),
        X = n("xB+L"),
        q = n("J6jk"),
        Q = n("6v+G"),
        J = n("G5Cn"),
        Z = n("w6NW"),
        $ = n("MpZv"),
        tt = n("OuPn"),
        et = n("Cqb9"),
        nt = n.n(et),
        rt = n("CBG9");
      function it(t) {
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
            r = h()(t);
          if (e) {
            var i = h()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l()(this, n);
        };
      }
      var ot = "".concat(
          "rtl" === document.dir ? "marqueeRtl" : "marquee",
          " 8s linear infinite forwards"
        ),
        at = N.f.getInstance(),
        st = (function (t) {
          c()(n, t);
          var e = it(n);
          function n(t) {
            var r;
            return (
              i()(this, n),
              (r = e.call(this, t)),
              d()(b()(r), "handleTimeChange", function (t) {
                var e = r.props.getPanelInfo;
                t || e();
              }),
              d()(b()(r), "handleClickHeader", function () {
                var t = r.props,
                  e = t.status,
                  n = t.luckyPrizeRecord;
                3 === e &&
                  at.jumpToLiveRoom({
                    roomId: null === n || void 0 === n ? void 0 : n.lRoomId,
                    anchorId:
                      null === n || void 0 === n ? void 0 : n.lAnchorUid,
                  });
              }),
              (r.countryFlag = v.a.createRef()),
              r
            );
          }
          return (
            a()(n, [
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.prizePoolNum,
                    r = e.remainTime,
                    i = void 0 === r ? 0 : r,
                    o = e.prefixCls,
                    a = void 0 === o ? "LuckyGiftHeader" : o,
                    s = e.status,
                    c = void 0 === s ? 0 : s,
                    u = e.langPkg,
                    l = void 0 === u ? {} : u,
                    f = e.luckyPrizeRecord,
                    h = void 0 === f ? {} : f,
                    p = e.minScore,
                    d = e.anchorCountryCode,
                    _ = void 0 === d ? "" : d,
                    m = e.vCountrySuperScore,
                    g = e.curGiftType,
                    y = void 0 === g ? 1 : g,
                    R = e.handleChangeGiftType,
                    b = void 0 === R ? function () {} : R,
                    w = "";
                  w = ~[0, 1].indexOf(c)
                    ? v.a.createElement(
                        J.a,
                        {
                          cdTime: 1e3 * i,
                          interval: 1e3,
                          min: -1,
                          autoStart: !0,
                          onChange: this.handleTimeChange,
                        },
                        function (t) {
                          var e = t.cdTime;
                          return 0 === c
                            ? Object(Z.c)(
                                null === l || void 0 === l
                                  ? void 0
                                  : l.statusTips0,
                                [p, e > 0 ? Object($.e)(e / 1e3) : "---"]
                              )
                            : Object(Z.c)(
                                null === l || void 0 === l
                                  ? void 0
                                  : l.statusTips1,
                                [e > 0 ? Object($.e)(e / 1e3) : "---"]
                              );
                        }
                      )
                    : 2 === c
                    ? Object(Z.d)(
                        null === l || void 0 === l ? void 0 : l.statusTips2,
                        [
                          v.a.createElement(
                            "span",
                            null,
                            null === l || void 0 === l ? void 0 : l.premiumBox
                          ),
                        ]
                      )
                    : Object(Z.c)(
                        null === l || void 0 === l ? void 0 : l.statusTips3,
                        [
                          null === h || void 0 === h ? void 0 : h.sSendName,
                          null === h || void 0 === h ? void 0 : h.sRecvName,
                        ]
                      );
                  var E = 1 === c ? {} : { animation: ot, WebkitAnimation: ot };
                  return v.a.createElement(
                    "div",
                    {
                      className: ""
                        .concat(a, "  status")
                        .concat(c, " gift-type")
                        .concat(y, " n-as-rel"),
                    },
                    v.a.createElement(
                      "div",
                      {
                        className: "".concat(a, "__top n-fx-cc"),
                        ref: this.countryFlag,
                      },
                      _ &&
                        v.a.createElement(
                          tt.a,
                          {
                            trigger: "click",
                            placement: "bottom",
                            overlayClassName: "country-popover-container",
                            content: v.a.createElement(rt.default, {
                              langPkg: l,
                              vCountrySuperScore: m,
                            }),
                            getPopupContainer: function () {
                              return t.countryFlag.current;
                            },
                          },
                          v.a.createElement(
                            "div",
                            { className: "top-container n-fx-cc" },
                            v.a.createElement(
                              "div",
                              {
                                className: "".concat(
                                  a,
                                  "__country n-as-pointer n-as-rel"
                                ),
                              },
                              v.a.createElement(H.a, {
                                src: ""
                                  .concat(
                                    "https://article.nimo.tv",
                                    "/img/country_flag/"
                                  )
                                  .concat(_.toLowerCase(), ".png"),
                                className: "".concat(a, "__flag"),
                              })
                            ),
                            v.a.createElement(
                              "div",
                              {
                                className: "".concat(a, "__pool-statu n-as-fw"),
                              },
                              null === l || void 0 === l
                                ? void 0
                                : l["status".concat(c || 0)]
                            )
                          )
                        )
                    ),
                    v.a.createElement(
                      "div",
                      {
                        className: ""
                          .concat(a, "__prize-pool c9 n-as-fw n-fx-cc ")
                          .concat(3 === c ? "n-as-pointer" : ""),
                        onClick: this.handleClickHeader,
                      },
                      -1 !== n &&
                        v.a.createElement(
                          v.a.Fragment,
                          null,
                          n,
                          v.a.createElement(H.a, { src: nt.a, width: 30 })
                        )
                    ),
                    v.a.createElement(
                      "div",
                      { className: "".concat(a, "__tips c9 n-fx-cc") },
                      v.a.createElement(
                        "div",
                        {
                          className: "text-area n-as-of-hidden ".concat(
                            1 === c ? "n-fx-cc" : ""
                          ),
                        },
                        v.a.createElement("span", { style: E }, w)
                      ),
                      1 === y &&
                        2 === c &&
                        v.a.createElement("div", {
                          className: "".concat(a, "__go-type2 n-as-pointer"),
                          "data-gift-type": 2,
                          onClick: function () {
                            b("2");
                          },
                        })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(v.a.Component),
        ct = n("QxPk"),
        ut = Object(x.b)(function (t) {
          var e = t.prefixCls,
            n = void 0 === e ? "LuckyGiftBox" : e,
            r = t.className,
            i = void 0 === r ? "" : r,
            o = t.dataSource,
            a = void 0 === o ? [] : o,
            s = t.langPkg,
            c = void 0 === s ? {} : s,
            u = t.curGiftType,
            l = void 0 === u ? 1 : u,
            f = g()(n, i, " n-fx-wrap c9", "gift-type".concat(l));
          return _.createElement(
            "div",
            { className: f },
            a.length
              ? _.createElement(ct.a, {
                  className: "lucky-gift-race-lamp n-as-bd-box n-as-fs-12",
                  interval: 1800,
                  showNum: 3,
                  data: a,
                  raceLampRender: function (t) {
                    var e, n, r, i;
                    return _.createElement(
                      "div",
                      {
                        className: "racelamp-text n-fx-sc",
                        key: null === t || void 0 === t ? void 0 : t.recordKey,
                      },
                      Object(Z.d)(
                        null === c || void 0 === c ? void 0 : c.centerRecord,
                        [
                          _.createElement(
                            "span",
                            { className: "send-name" },
                            null === t || void 0 === t ? void 0 : t.sSendName
                          ),
                          _.createElement(
                            "span",
                            { className: "recv-name" },
                            null === t || void 0 === t ? void 0 : t.sRecvName
                          ),
                          _.createElement(
                            "span",
                            { className: "award-icon n-fx-sc" },
                            _.createElement(H.a, {
                              src:
                                null === t ||
                                void 0 === t ||
                                null === (e = t.vRecvItem) ||
                                void 0 === e ||
                                null === (n = e[0]) ||
                                void 0 === n
                                  ? void 0
                                  : n.sIconUrl,
                            }),
                            "x",
                            (null === t ||
                            void 0 === t ||
                            null === (r = t.vRecvItem) ||
                            void 0 === r ||
                            null === (i = r[0]) ||
                            void 0 === i
                              ? void 0
                              : i.iItemCount) || 1
                          ),
                        ]
                      )
                    );
                  },
                })
              : _.createElement(
                  "div",
                  { className: "lucky-gift-race-lamp no-record n-fx-cc" },
                  null === c || void 0 === c ? void 0 : c.noOneWinPrize
                )
          );
        }),
        lt = ["children", "imgSrc", "imgProps", "className"],
        ft = function (t) {
          var e = t.children,
            n = t.imgSrc,
            r = t.imgProps,
            i = t.className,
            o = V()(t, lt);
          return v.a.createElement(
            "div",
            j()({ className: "n-as-rel ".concat(i) }, o),
            v.a.createElement(
              H.a,
              j()({ src: n }, r, {
                className: "n-as-abs",
                style: { top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 },
              })
            ),
            e
          );
        },
        ht = Object(_.memo)(ft),
        pt = n("Vgli"),
        dt = n.n(pt),
        _t = n("BYH5"),
        vt = n.n(_t),
        mt = n("hGl+"),
        gt = n.n(mt),
        yt = n("+nIE"),
        Rt = n.n(yt),
        bt = function (t) {
          var e = t.prefixCls,
            n = void 0 === e ? "LuckyGiftBottom" : e,
            r = t.handleSendGift,
            i = void 0 === r ? function () {} : r,
            o = t.curGiftType;
          return v.a.createElement(
            ht,
            {
              imgSrc: 1 === o ? dt.a : vt.a,
              className: "".concat(n, " n-fx-bc n-fx-col n-as-bd-box n-as-rel"),
            },
            v.a.createElement(H.a, {
              src: 1 === o ? gt.a : Rt.a,
              "data-type": o,
              className: "".concat(
                n,
                "__send-btn n-as-text-center n-as-pointer n-as-abs"
              ),
              onClick: i,
            })
          );
        },
        wt = Object(_.memo)(bt),
        Et = n("JRup"),
        Ct = n("ba4X"),
        Tt = n.n(Ct),
        St = n("okpa"),
        It = n.n(St),
        Ot = n("OVxc"),
        Mt = n.n(Ot),
        Pt = n("M2/Y"),
        kt = n.n(Pt),
        At = n("uoB0"),
        Nt = n.n(At),
        Lt = n("7s/s"),
        xt = n.n(Lt),
        Dt = n("GbMy"),
        Bt = n.n(Dt),
        Gt = n("cNwj"),
        Ut = n.n(Gt),
        jt = ["className"];
      function Ft(t, e) {
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
      function Vt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ft(Object(n), !0).forEach(function (e) {
                d()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Ft(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function Yt(t) {
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
            r = h()(t);
          if (e) {
            var i = h()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l()(this, n);
        };
      }

      function inject(){
        let send_success_num = 0;
        let params;
        let cookies;
        let iStatus = 0;
        let index = -1;
        let current_period = 1000;
        let time_arr;

        let update_panel_status_loop = setInterval(get_panel_status,500);
        let update_index_loop = setInterval(update_index,100);

        function time_to_int(h,m,s){
          return parseInt(h)*60*60*1000+parseInt(m)*60*1000+parseInt(s)*1000;
        }
        function get_index(){
          let d = new Date();
          let m = d.getMinutes();
          let h = d.getHours();
          let s = d.getSeconds();
          let current_time = time_to_int(h,m,s);

          time_arr = JSON.parse(localStorage.time_pivot);
          for(let i=0;i<time_arr.length;++i){
            let time_parts = time_arr[i][0].split(':');
            let time_int = time_to_int(time_parts[0],time_parts[1],time_parts[2]);
            if (current_time >= time_int) return i;
          }
          return -1;
        }

        function get_panel_status(){
          q.a.getBoxPanelInfo({lRoomId:params._roomId,
            iLcid:_anchorLang}).then(t=>t.text())
            .then(t=>t.json())
            .then(t=>{
              iStatus = parseInt(t.tScoreInfo.iStatus)
            })
            .catch(error=>console.log)
        }

        function update_index(){
          let new_index = get_index();
          current_period = new_index>-1 ? time_arr[new_index]:1000;

          if (index == -1 && new_index>-1) send_gift();
          index = new_index;
        }

        function send_gift(){
          let num_per_send = parseInt(localStorage.num_per_send);
          console.log('send_gift ', num_per_send, parseInt(localStorage.bet_amount));
          send_success_num++;
          document.getElementById('send_success_num').textContent = send_success_num;

          // while(num_per_send--)
          //   L.i.giftConsume({
          //     iPayType: 1002,
          //     iItemType: 64,
          //     lPresenterUid: parseInt(params._anchorId),
          //     lRoomId: parseInt(params._roomId),
          //     iItemCount: 1,//parseInt(localStorage.bet_amount),
          //     iFromType: 500,
          //   }).then((t)=>{
          //     console.log("susscess",t);
          //     send_success_num++;
          //     document.getElementById('send_success_num').textContent = send_success_num;
          //   })
          //   .catch(error=>{
          //     console.log("error", error);
          //     document.getElementById('send_success_num').textContent += ' error';
          //   })
          if(index>-1) setTimeout(send_gift, current_period);
        }

        window.addEventListener('message', function(event) {
          let message = JSON.parse(event.data);  

          if(message.greeting == 'load_variables'){
            cookies = message.cookies;
            params = message.params;
            
            L.i.nickname = cookies.userName;
            L.i.udbBizToken = cookies.udb_biztoken;
            L.i.udbUserId = cookies.udbUserId;
            L.i.udbVersion = cookies.udb_version;
            L.i.userId = cookies.userid;
            L.i.sGuid = cookies.guid;

            let run_inject = document.getElementById('run_inject');
            run_inject.addEventListener('click', function(){
                if (run_inject.style.backgroundColor == "lightpink"){
                    run_inject.textContent = "START";
                    run_inject.style.backgroundColor = "greenyellow"
                    clearInterval(update_panel_status_loop);
                    clearInterval(update_index_loop);
                    index = -1;
                }
                else {
                    run_inject.textContent = "STOP";
                    run_inject.style.backgroundColor = "lightpink"

                    update_panel_status_loop = setInterval(get_panel_status,500);
                    update_index_loop = setInterval(update_index,100);
                    //send_gift();
                }
            });
          }
        });
      }
      inject();


      var Wt = K.b.log,
        Ht = L.h || {},
        Kt = Ht.kMRC_PAYRESPCODE_NOTENOUGHMONEY,
        zt = Ht.kMRC_PAYRESPCODE_OVERFREQUENCY,
        Xt = (function (t) {
          c()(n, t);
          var e = Yt(n);
          function n(t) {
            var r;
            return (
              i()(this, n),
              (r = e.call(this, t)),
              d()(b()(r), "getPanelInfo", function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = t || {},
                  n = e.isFirst,
                  i = void 0 !== n && n,
                  o = r.props,
                  a = o.roomId,
                  s = o.anchorLang,
                  c = void 0 === s ? -1 : s;
                a &&
                  q.a
                    .getBoxPanelInfo({ lRoomId: a, iLcid: c })
                    .then(function (t) {
                      var e, n, o, a, s, c;
                      Wt("获取面板礼物成功", t);
                      var u = W()(
                          (null === t || void 0 === t ? void 0 : t.vGiftList) ||
                            []
                        ),
                        l = W()(
                          (null === t || void 0 === t
                            ? void 0
                            : t.vSmallGiftList) || []
                        ),
                        f =
                          u.filter(function (t) {
                            return (
                              10 !==
                              (null === t || void 0 === t
                                ? void 0
                                : t.iBoxAwardType)
                            );
                          }) || [],
                        h = {
                          prizePoolStatus:
                            null === t ||
                            void 0 === t ||
                            null === (e = t.tScoreInfo) ||
                            void 0 === e
                              ? void 0
                              : e.iStatus,
                          prizePoolNum:
                            null === t ||
                            void 0 === t ||
                            null === (n = t.tScoreInfo) ||
                            void 0 === n
                              ? void 0
                              : n.lCurScore,
                          remainTime:
                            null === t ||
                            void 0 === t ||
                            null === (o = t.tScoreInfo) ||
                            void 0 === o
                              ? void 0
                              : o.iRemainTime,
                          panelGiftListLong: f,
                          luckyPrizeRecord:
                            (null === t || void 0 === t
                              ? void 0
                              : t.tLastLuckyWinner) || {},
                          anchorCountryCode:
                            null === t || void 0 === t ? void 0 : t.sCountry,
                          vCountrySuperScore:
                            (null === t || void 0 === t
                              ? void 0
                              : t.vCountrySuperScore) || [],
                          panelGiftListSmall:
                            l.filter(function (t) {
                              return (
                                10 !==
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.iBoxAwardType)
                              );
                            }) || [],
                          hasPrizePool:
                            0 !==
                              (null === t ||
                              void 0 === t ||
                              null === (a = t.tScoreInfo) ||
                              void 0 === a
                                ? void 0
                                : a.iNextTimestamp) &&
                            0 !==
                              (null === t ||
                              void 0 === t ||
                              null === (s = t.tScoreInfo) ||
                              void 0 === s
                                ? void 0
                                : s.lMinScore),
                          minScore:
                            (null === t ||
                            void 0 === t ||
                            null === (c = t.tScoreInfo) ||
                            void 0 === c
                              ? void 0
                              : c.lMinScore) || 0,
                        };
                      (!i && r.isNewSocketMode) ||
                        (h.recordList = r.filterRecordList(
                          null === t || void 0 === t ? void 0 : t.vRecordList
                        )),
                        r.setState(h),
                        r.pollingKey ||
                          (r.pollingKey = setInterval(function () {
                            r.getPanelInfo();
                          }, 1e4));
                    })
                    .catch(function () {
                      r.pollingKey &&
                        (clearInterval(r.pollingKey), (r.pollingKey = ""));
                    });
              }),
              d()(b()(r), "filterRecordList", function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  e = {},
                  n = t.map(function (t) {
                    var n,
                      i =
                        (null === (n = r.recordKeyMap) || void 0 === n
                          ? void 0
                          : n[
                              ""
                                .concat(
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.iTimeStamp,
                                  "_"
                                )
                                .concat(
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.lAnchorUid,
                                  "_"
                                )
                                .concat(
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.lRoomId
                                )
                            ]) || r.recordCounter++;
                    return (
                      (e[
                        ""
                          .concat(
                            null === t || void 0 === t ? void 0 : t.iTimeStamp,
                            "_"
                          )
                          .concat(
                            null === t || void 0 === t ? void 0 : t.lAnchorUid,
                            "_"
                          )
                          .concat(
                            null === t || void 0 === t ? void 0 : t.lRoomId
                          )
                      ] = i),
                      Vt(Vt({}, t), {}, { key: i })
                    );
                  });
                return (r.recordKeyMap = e), n;
              }),
              d()(b()(r), "handleSendLuckyGift", function (t) {
                var e,
                  n,
                  i =
                    "1" ===
                    (null === (e = t.currentTarget) ||
                    void 0 === e ||
                    null === (n = e.dataset) ||
                    void 0 === n
                      ? void 0
                      : n.type)
                      ? 1
                      : 10;
                M.default.checkLogin().then(function (t) {
                  var e = r.state,
                    n = e.report,
                    o = e.sendGiftSvga;
                  if (
                    (10 === i
                      ? "function" ===
                          typeof (null === n || void 0 === n
                            ? void 0
                            : n.clickLuckyBoxSendTen) &&
                        n.clickLuckyBoxSendTen()
                      : "function" ===
                          typeof (null === n || void 0 === n
                            ? void 0
                            : n.clickLuckyBoxSendOne) &&
                        n.clickLuckyBoxSendOne(),
                    t)
                  ) {
                    var a = r.props,
                      s = a.roomId,
                      c = a.luckygiftList,
                      u = a.anchorId,
                      l = a.langPkg,
                      f = ((null === c || void 0 === c ? void 0 : c[0]) || {})
                        .iPropsId;
                    f &&
                      (r.setState({
                        sendGiftSvga: o || (10 === i ? Ut.a : Bt.a),
                      }),
                      L.i
                        .giftConsume({
                          iPayType: L.g.PAY_TYPE_GOLD,
                          iItemType: f,
                          lPresenterUid: u,
                          lRoomId: s,
                          iItemCount: i,
                          iFromType: k.a.isIOS
                            ? L.a.ClientTypeIos
                            : k.a.isAdr
                            ? L.a.ClientTypeAndroid
                            : L.a.ClientTypeWeb,
                        })
                        .then(function () {
                          r.isNewSocketMode || r.getPanelInfo();
                        })
                        .catch(function (t) {
                          var e = t || {},
                            i = e.returnValue,
                            o = e.sTips;
                          switch ((Wt("送礼失败", t), i)) {
                            case Kt:
                              A.a.warning(
                                null === l || void 0 === l
                                  ? void 0
                                  : l.insufficientBalance
                              ),
                                k.a.isInNimoApp
                                  ? Object(X.jump2Recharge)()
                                  : window.open(
                                      "//".concat(
                                        w.a.maindomain,
                                        "/popout/recharge"
                                      ),
                                      "_blank"
                                    );
                              break;
                            case zt:
                              break;
                            default:
                              A.a.error(
                                o ||
                                  (null === l || void 0 === l
                                    ? void 0
                                    : l.giftConsumeFailed)
                              );
                          }
                          r.handleClearSendGiftSvga(),
                            "function" ===
                              typeof (null === n || void 0 === n
                                ? void 0
                                : n.receiveLuckyBoxResult) &&
                              n.receiveLuckyBoxResult("fail", "", s);
                        }));
                  } else r._messenger.popupLogin();
                });
              }),
              d()(b()(r), "handleLuckyGiftNotice", function (t) {
                var e,
                  n,
                  i,
                  o = r.props,
                  a = o.report,
                  s = o.roomId;
                "function" ===
                  typeof (null === a || void 0 === a
                    ? void 0
                    : a.receiveLuckyBoxResult) &&
                  a.receiveLuckyBoxResult(
                    "success",
                    null === t ||
                      void 0 === t ||
                      null === (e = t.tItem) ||
                      void 0 === e
                      ? void 0
                      : e.iItemId,
                    s
                  );
                ((r.awardList = r.awardList.concat([
                  Vt(
                    Vt({}, null === t || void 0 === t ? void 0 : t.tItem),
                    {},
                    {
                      id: r.counter,
                      sendItemCount:
                        null === t || void 0 === t ? void 0 : t.iSendItemCount,
                    }
                  ),
                ])),
                Wt("收到开奖结果，当前结果队列", r.awardList),
                (r.counter += 1),
                r.isBoxAnimation) ||
                  r.setState({
                    sendGiftSvga:
                      10 ===
                      (null === (n = r.awardList) ||
                      void 0 === n ||
                      null === (i = n[0]) ||
                      void 0 === i
                        ? void 0
                        : i.sendItemCount)
                        ? Ut.a
                        : Bt.a,
                  });
              }),
              d()(b()(r), "handleLuckyGiftPrizeRecordListNotice", function (t) {
                var e;
                Wt("收到中奖记录广播", t);
                var n = r.state.recordList,
                  i =
                    (null === t ||
                    void 0 === t ||
                    null === (e = t.vRecordList) ||
                    void 0 === e
                      ? void 0
                      : e[0]) || {};
                if (r.isFirstReceiveNotice && n.length > 0) {
                  var o = n[n.length - 1];
                  if (
                    ((r.isFirstReceiveNotice = !1),
                    o && JSON.stringify(i) === JSON.stringify(o))
                  )
                    return void Wt("丢掉重复数据", t);
                }
                (i.key = r.recordCounter),
                  (r.recordCounter += 1),
                  r.setState({ recordList: n.slice(1).concat([i]) });
              }),
              d()(b()(r), "handleClearSendGiftSvga", function () {
                (r.framenum = null),
                  r.setState({ sendGiftSvga: "", curAward: "" }, function () {
                    var t, e;
                    r.awardList.length > 0
                      ? r.setState({
                          sendGiftSvga:
                            10 ===
                            (null === (t = r.awardList) ||
                            void 0 === t ||
                            null === (e = t[0]) ||
                            void 0 === e
                              ? void 0
                              : e.sendItemCount)
                              ? Ut.a
                              : Bt.a,
                        })
                      : (r.isBoxAnimation = !1);
                  });
              }),
              d()(b()(r), "handleSVGALoad", function (t) {
                Wt("动画开始", t),
                  (r.isBoxAnimation = !0),
                  (r.svgaPlayer = t),
                  r.svgaPlayer.stopAnimation(),
                  r.svgaPlayer.startAnimationWithRange({
                    location: 0,
                    length: 10,
                  });
              }),
              d()(b()(r), "handleSVGAFrame", function (t) {
                if (
                  ((r.isBoxAnimation = !0),
                  Wt("+frame", t),
                  ((t <= 9 && r.framenum < t && r.framenum) ||
                    null === r.framenum) &&
                    (r.framenum = t),
                  9 === t || (r.framenum > t && r.framenum < 9))
                ) {
                  Wt("+首次前9帧中的最后一帧", r.framenum),
                    Wt("第一阶段"),
                    r.svgaPlayer.startAnimationWithRange({
                      location: 10,
                      length: 20,
                    }),
                    (r.isLoadOpenBoxAnimation = !1);
                  var e = r.props.langPkg;
                  r.animateDisappear = setTimeout(function () {
                    r.handleClearSendGiftSvga(),
                      A.a.info(
                        null === e || void 0 === e ? void 0 : e.networkError
                      );
                  }, 4e3);
                } else if (
                  t < 44 &&
                  t > 9 &&
                  r.awardList.length > 0 &&
                  !r.isLoadOpenBoxAnimation
                ) {
                  var n, i, o;
                  clearTimeout(r.animateDisappear),
                    Wt("循环阶段"),
                    r.svgaPlayer.startAnimationWithRange({
                      location: 30,
                      length: 15,
                    }),
                    (r.isLoadOpenBoxAnimation = !0),
                    r.setState({
                      curAward:
                        (null === (n = r.awardList) || void 0 === n
                          ? void 0
                          : n[0]) || {},
                      sendGiftSvga:
                        10 ===
                        (null === (i = r.awardList) ||
                        void 0 === i ||
                        null === (o = i[0]) ||
                        void 0 === o
                          ? void 0
                          : o.sendItemCount)
                          ? Ut.a
                          : Bt.a,
                    });
                } else if (44 === t)
                  Wt("开出阶段"),
                    r.svgaPlayer.startAnimationWithRange({
                      location: 45,
                      length: 20,
                    });
                else if (64 === t) {
                  var a, s, c;
                  if (
                    (Wt("动画结束阶段"),
                    (r.isLoadOpenBoxAnimation = !1),
                    r.awardList.shift(),
                    r.awardList.length > 0)
                  )
                    Wt("循环45-20"),
                      r.setState({
                        curAward:
                          (null === (a = r.awardList) || void 0 === a
                            ? void 0
                            : a[0]) || {},
                        sendGiftSvga:
                          10 ===
                          (null === (s = r.awardList) ||
                          void 0 === s ||
                          null === (c = s[0]) ||
                          void 0 === c
                            ? void 0
                            : c.sendItemCount)
                            ? Ut.a
                            : Bt.a,
                      }),
                      r.svgaPlayer.startAnimationWithRange({
                        location: 45,
                        length: 20,
                      });
                  else r.handleClearSendGiftSvga();
                }
              }),
              d()(b()(r), "handleChangeTab", function (t) {
                r.setState({ curGiftType: t });
              }),
              d()(b()(r), "handleClickRecordOrRule", function (t) {
                var e,
                  n,
                  i = r.props.changeCurPanel,
                  o = Number(
                    null === t ||
                      void 0 === t ||
                      null === (e = t.currentTarget) ||
                      void 0 === e ||
                      null === (n = e.dataset) ||
                      void 0 === n
                      ? void 0
                      : n.panel
                  );
                o && i(o);
              }),
              d()(b()(r), "getTabBar", function (t) {
                var e = r.props,
                  n = e.langPkg,
                  i = e.prefixCls,
                  o = r.state.curGiftType;
                return 1 === t
                  ? _.createElement(
                      "div",
                      {
                        className: ""
                          .concat(i, "__normal-type n-fx-cc n-as-pointer ")
                          .concat("1" === o ? "active" : ""),
                        onClick: function () {
                          r.handleChangeTab("1");
                        },
                      },
                      null === n || void 0 === n ? void 0 : n.normalBox
                    )
                  : _.createElement(
                      "div",
                      {
                        className: ""
                          .concat(i, "__advanced-type n-fx-cc n-as-pointer ")
                          .concat("2" === o ? "active" : ""),
                        onClick: function () {
                          r.handleChangeTab("2");
                        },
                      },
                      null === n || void 0 === n ? void 0 : n.premiumBox,
                      _.createElement(H.a, { src: xt.a, width: 20 })
                    );
              }),
              d()(b()(r), "getGiftArr", function (t) {
                return 1 === t
                  ? [[1, 3], [0], [2, 4]]
                  : [
                      [4, 2, 6],
                      [0, 1],
                      [5, 3, 7],
                    ];
              }),
              d()(b()(r), "getGiftContent", function (t) {
                var e;
                return null === (e = r.state) || void 0 === e
                  ? void 0
                  : e[1 === t ? "panelGiftListSmall" : "panelGiftListLong"];
              }),
              (r.state = {
                panelGiftListLong: [],
                panelGiftListSmall: [],
                prizePoolNum: null,
                prizePoolStatus: -1,
                remainTime: 0,
                minScore: 0,
                recordList: [],
                sendGiftSvga: "",
                luckyPrizeRecord: {},
                curAward: "",
                anchorCountryCode: "",
                vCountrySuperScore: [],
                hasPrizePool: !0,
                curGiftType: "1",
              }),
              (r.awardList = []),
              (r.recordCounter = 0),
              (r.pollingKey = null),
              (r._messenger = N.f.getInstance()),
              (r.uid = ""),
              (r.maxId = 0),
              (r.counter = 0),
              (r.setTimeout = null),
              (r.isLoadOpenBoxAnimation = !1),
              (r.isBoxAnimation = !1),
              (r.isNewSocketMode = !1),
              (r.recordKeyMap = {}),
              (r.isFirstReceiveNotice = !0),
              (r.framenum = null),
              r
            );
          }
          return (
            a()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var t = this,
                    e = this.props.socketModel;
                  (this.getPanelInfo({ isFirst: !0 }),
                  (this.pollingKey = setInterval(function () {
                    t.getPanelInfo();
                  }, 1e4)),
                  k.a.isInNimoApp)
                    ? Object(X.checkJsApiVersionIsNoLessThen)(18).then(
                        function (e) {
                          e &&
                            ((t.isNewSocketMode = !0),
                            t.props.socketModel.on(
                              "LuckyGiftPrizeRecordListNotice",
                              t.handleLuckyGiftPrizeRecordListNotice
                            ),
                            t._messenger.subscribeTopic([Et.b]));
                        }
                      )
                    : ((this.isNewSocketMode = !0),
                      this.props.socketModel.on(
                        "LuckyGiftPrizeRecordListNotice",
                        this.handleLuckyGiftPrizeRecordListNotice
                      ),
                      this._messenger.subscribeTopic([Et.b]));
                  e.on("LuckyGiftNotice", this.handleLuckyGiftNotice);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.pollingKey && clearInterval(this.pollingKey);
                  var t = this.props.socketModel;
                  this.isNewSocketMode &&
                    (t.off(
                      "LuckyGiftPrizeRecordListNotice",
                      this.handleLuckyGiftPrizeRecordListNotice
                    ),
                    this._messenger.unsubscribeTopic([Et.b])),
                    t.off("LuckyGiftNotice", this.handleLuckyGiftNotice),
                    (this.svgaPlayer = null);
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.prefixCls,
                    r = e.className,
                    i = e.langPkg,
                    o = e.userInfo,
                    a = e.luckygiftList,
                    s = e.curPanel,
                    c = this.state,
                    u = c.prizePoolNum,
                    l = c.prizePoolStatus,
                    f = c.remainTime,
                    h = c.recordList,
                    p = c.sendGiftSvga,
                    v = c.luckyPrizeRecord,
                    m = c.anchorCountryCode,
                    y = c.curAward,
                    R = c.minScore,
                    b = c.vCountrySuperScore,
                    w = c.hasPrizePool,
                    E = c.curGiftType,
                    C = g()(n, r, "n-as-rel", "cur-type".concat(E));
                  return 1 === s
                    ? _.createElement(
                        "div",
                        { ref: this.savePanelRef, className: C },
                        _.createElement(
                          "div",
                          { className: "".concat(n, "__nav n-fx-bc n-as-abs") },
                          _.createElement(
                            "div",
                            {
                              className: "".concat(
                                n,
                                "__rule-btn n-as-pointer n-fx-cc"
                              ),
                              onClick: this.handleClickRecordOrRule,
                              "data-panel": 2,
                            },
                            _.createElement(H.a, { src: kt.a, width: 20 })
                          ),
                          _.createElement(
                            "div",
                            {
                              className: "".concat(
                                n,
                                "__record-btn n-as-pointer n-fx-cc"
                              ),
                              onClick: this.handleClickRecordOrRule,
                              "data-panel": 3,
                            },
                            _.createElement(H.a, { src: Nt.a, width: 20 })
                          )
                        ),
                        _.createElement(
                          z.a,
                          {
                            activeKey: E,
                            onChange: this.handleChangeTab,
                            animated: !1,
                            underlineWidth: "52%",
                            tabBarUnderlineStyle: d()(
                              { transform: "none" },
                              "margin".concat(
                                "rtl" === document.dir ? "Right" : "Left"
                              ),
                              "-26%"
                            ),
                            direction: document.dir,
                          },
                          [1, 2].map(function (e) {
                            var r;
                            return _.createElement(
                              ht,
                              {
                                imgSrc: 1 === e ? Tt.a : It.a,
                                className: ""
                                  .concat(n, "__cur-gift-type-")
                                  .concat(e, " n-fx-cc n-fx-col"),
                                key: e,
                                tab: t.getTabBar(e),
                              },
                              w
                                ? _.createElement(st, {
                                    prizePoolNum: u,
                                    langPkg: i,
                                    remainTime: f,
                                    status: l,
                                    lang:
                                      null === o || void 0 === o
                                        ? void 0
                                        : o.lang,
                                    luckyPrizeRecord: v,
                                    luckyGiftName:
                                      null === a ||
                                      void 0 === a ||
                                      null === (r = a[0]) ||
                                      void 0 === r
                                        ? void 0
                                        : r.sPropsName,
                                    getPanelInfo: t.getPanelInfo,
                                    curGiftType: e,
                                    minScore: R,
                                    anchorCountryCode: m,
                                    vCountrySuperScore: b,
                                    handleChangeGiftType: t.handleChangeTab,
                                  })
                                : null,
                              _.createElement(
                                "div",
                                {
                                  className: ""
                                    .concat(n, "__body n-as-bd-box ")
                                    .concat(1 === e ? "common" : "senior"),
                                },
                                _.createElement(
                                  "div",
                                  {
                                    className: ""
                                      .concat(
                                        n,
                                        "__gift-list n-fx-cc n-as-rel "
                                      )
                                      .concat(1 === e ? "common" : "senior"),
                                  },
                                  _.createElement(
                                    "div",
                                    {
                                      className: "".concat(
                                        n,
                                        "__gift-list-container n-fx-cc n-as-rel"
                                      ),
                                    },
                                    t.getGiftArr(e).map(function (r, i) {
                                      return _.createElement(
                                        "div",
                                        {
                                          key: i,
                                          className: "gift-column-"
                                            .concat(i, " n-fx-cc n-fx-col ")
                                            .concat(
                                              1 === e ? "common" : "senior"
                                            ),
                                        },
                                        _.createElement(
                                          "div",
                                          {
                                            className:
                                              "column-container ".concat(
                                                2 === e ? "n-as-of-hidden" : ""
                                              ),
                                          },
                                          r.map(function (r) {
                                            var i, o, a, s;
                                            return _.createElement(
                                              "div",
                                              {
                                                key: r,
                                                className: ""
                                                  .concat(
                                                    n,
                                                    "__gift gift-item n-as-bd-box c9 n-fx-cc gift-"
                                                  )
                                                  .concat(r, " ")
                                                  .concat(
                                                    1 === e
                                                      ? "common"
                                                      : "senior"
                                                  ),
                                              },
                                              null !==
                                                (i = t.getGiftContent(e)) &&
                                                void 0 !== i &&
                                                null !== (o = i[r]) &&
                                                void 0 !== o &&
                                                o.sIconUrl
                                                ? _.createElement(
                                                    "div",
                                                    {
                                                      className:
                                                        "img-container n-fx-cc",
                                                    },
                                                    _.createElement(H.a, {
                                                      src:
                                                        null ===
                                                          (a =
                                                            t.getGiftContent(
                                                              e
                                                            )) ||
                                                        void 0 === a ||
                                                        null === (s = a[r]) ||
                                                        void 0 === s
                                                          ? void 0
                                                          : s.sIconUrl,
                                                      className: "n-fx0",
                                                    })
                                                  )
                                                : null
                                            );
                                          })
                                        )
                                      );
                                    })
                                  )
                                ),
                                _.createElement(wt, {
                                  handleSendGift: t.handleSendLuckyGift,
                                  status: l,
                                  lang:
                                    null === o || void 0 === o
                                      ? void 0
                                      : o.lang,
                                  curGiftType: e,
                                }),
                                _.createElement(ut, {
                                  dataSource: h,
                                  curGiftType: e,
                                })
                              )
                            );
                          })
                        ),
                        p
                          ? _.createElement(
                              "div",
                              {
                                className: "".concat(
                                  n,
                                  "__result-animation n-as-abs"
                                ),
                              },
                              _.createElement(Q.default, {
                                className: "open-box",
                                src: p,
                                fillMode: "Backward",
                                autoPlay: !1,
                                onLoad: this.handleSVGALoad,
                                onFrame: this.handleSVGAFrame,
                                clearsAfterStop: !1,
                              }),
                              y ? _.createElement(Qt, { curAward: y }) : ""
                            )
                          : null
                      )
                    : "";
                },
              },
            ]),
            n
          );
        })(_.Component);
      d()(Xt, "defaultProps", { prefixCls: "LuckyGiftPanel", className: "" }),
        d()(Xt, "contextType", x.a);
      var qt,
        Qt =
          ((qt = function (t) {
            var e = t.curAward,
              n = void 0 === e ? {} : e,
              r = t.className,
              i =
                10 === (null === n || void 0 === n ? void 0 : n.iBoxAwardType)
                  ? Mt.a
                  : null === n || void 0 === n
                  ? void 0
                  : n.sIconUrl;
            return _.createElement(
              _.Fragment,
              null,
              _.createElement(H.a, {
                key: null === n || void 0 === n ? void 0 : n.id,
                src: i,
                className: g()(r, "n-as-abs lucky-gift-result"),
              }),
              _.createElement(
                "div",
                {
                  className: g()(
                    r,
                    "n-as-abs lucky-gift-result-num n-as-text-center"
                  ),
                },
                null !== n && void 0 !== n && n.iItemCount
                  ? "x".concat(n.iItemCount)
                  : ""
              )
            );
          }),
          (function (t) {
            c()(n, t);
            var e = Yt(n);
            function n() {
              var t;
              i()(this, n);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (
                (t = e.call.apply(e, [this].concat(o))),
                d()(b()(t), "timer", null),
                d()(b()(t), "dDisplayDuration", 2e3),
                d()(b()(t), "state", { entered: !1 }),
                d()(b()(t), "handleBgLoaded", function () {
                  t.setState({ entered: !0 });
                }),
                t
              );
            }
            return (
              a()(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.setState({ entered: !0, leaved: !1 });
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (t) {
                    var e,
                      n = (this.props || {}).curAward;
                    (null === n || void 0 === n ? void 0 : n.id) !==
                      (null === (e = t.curAward) || void 0 === e
                        ? void 0
                        : e.id) && this.setState({ entered: !0 });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.className,
                      n = V()(t, jt),
                      r = this.state.entered,
                      i = g()(e, "zoom-big-enter", {
                        "zoom-big-enter-active": r,
                      });
                    return _.createElement(
                      qt,
                      j()({}, n, {
                        className: i,
                        onBgLoaded: this.handleBgLoaded,
                      })
                    );
                  },
                },
              ]),
              n
            );
          })(_.Component)),
        Jt = Object(x.b)(Xt);
      function Zt(t) {
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
            r = h()(t);
          if (e) {
            var i = h()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l()(this, n);
        };
      }
      var $t = (function (t) {
        c()(r, t);
        var e = Zt(r);
        function r(t) {
          var o;
          i()(this, r),
            (o = e.call(this, t)),
            d()(b()(o), "changeCurPanel", function (t) {
              var e = o.props.report;
              2 === t
                ? "function" ===
                    typeof (null === e || void 0 === e
                      ? void 0
                      : e.clickLuckyBoxRule) && e.clickLuckyBoxRule()
                : 3 === t &&
                  ("function" ===
                    typeof (null === e || void 0 === e
                      ? void 0
                      : e.clickLuckyBoxRecord) && e.clickLuckyBoxRecord(),
                  M.default.checkLogin().then(function (t) {
                    t || o._messenger.popupLogin();
                  })),
                o.setState({ curPanel: t });
            }),
            d()(b()(o), "getLuckyGiftList", function () {
              var t = o.props,
                e = t.langPkg,
                r = t.userInfo,
                i = L.a.ClientTypeWeb;
              return (
                k.a.isAdr && (i = L.a.ClientTypeAndroid),
                k.a.isIOS && (i = L.a.ClientTypeIos),
                L.i
                  .getPropsListByType({
                    iPropsListType: L.c.EPROPS_LIST_LUCKY,
                    sClientType: i,
                  })
                  .then(function (t) {
                    var e = (t || {}).vPropsItemList;
                    o.setState({ luckygiftList: e });
                  })
                  .catch(function () {
                    null !== e && void 0 !== e && e.netError
                      ? A.a.error(e.netError)
                      : Object(I.d)(
                          n("7AZq"),
                          (null === r || void 0 === r ? void 0 : r.lang) || 1033
                        ).then(function (t) {
                          A.a.error(
                            null === t || void 0 === t ? void 0 : t.netError
                          );
                        });
                  })
              );
            }),
            (o.state = { curPanel: 1, luckygiftList: [] }),
            (o._messenger = N.f.getInstance());
          var a = t.initMGInApp,
            s = t.socketModel;
          return (
            a ||
              ((s.messenger = o._messenger),
              s.registerSocketMsg({
                ids: ["LuckyGiftNotice", "LuckyGiftPrizeRecordListNotice"],
              })),
            o
          );
        }
        return (
          a()(r, [
            {
              key: "componentDidMount",
              value: function () {
                this.getLuckyGiftList();
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.prefixCls,
                  n = t.className,
                  r = t.langPkg,
                  i = t.userInfo,
                  o = this.state,
                  a = o.luckygiftList,
                  s = o.curPanel;
                return v.a.createElement(
                  "div",
                  { className: g()(e, n) },
                  v.a.createElement(Jt, {
                    luckygiftList: a,
                    ref: this.savePanel,
                    changeCurPanel: this.changeCurPanel,
                    curPanel: s,
                  }),
                  v.a.createElement(B, {
                    userInfo: i,
                    langPkg: r,
                    changeCurPanel: this.changeCurPanel,
                    curPanel: s,
                  }),
                  v.a.createElement(G, {
                    luckyGift:
                      (null === a || void 0 === a ? void 0 : a[0]) || {},
                    changeCurPanel: this.changeCurPanel,
                    curPanel: s,
                  })
                );
              },
            },
          ]),
          r
        );
      })(v.a.Component);
      d()($t, "defaultProps", { prefixCls: "LuckyGift", className: "" }),
        d()($t, "contextType", x.a);
      var te,
        ee,
        ne = Object(x.b)($t);
      function re(t) {
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
            r = h()(t);
          if (e) {
            var i = h()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return l()(this, n);
        };
      }
      var ie =
        (function (t) {
          return (function (e) {
            c()(r, e);
            var n = S(r);
            function r(t) {
              var e;
              return (
                i()(this, r),
                ((e = n.call(this, t)).handleWndLoad = e.handleWndLoad.bind(
                  b()(e)
                )),
                window.addEventListener("load", e.handleWndLoad),
                e
              );
            }
            return (
              a()(r, [
                {
                  key: "componentWillUnmount",
                  value: function () {
                    window.removeEventListener("load", this.handleWndLoad);
                  },
                },
                {
                  key: "handleWndLoad",
                  value: function () {
                    "true" === w.a.isDebug && T();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return v.a.createElement(t, this.props);
                  },
                },
              ]),
              r
            );
          })(v.a.Component);
        })(
          ((ee = (function (t) {
            c()(r, t);
            var e = re(r);
            function r(t) {
              var n, o, a;
              return (
                i()(this, r),
                ((o = e.call(this, t)).state = { langPkg: {} }),
                (o.report =
                  ((a = O.a),
                  {
                    showLuckyBoxDetail: function () {
                      a.report(
                        a._formatReportObj(
                          "usr/shown/luckybox/detail",
                          "用户/浏览/拆礼盒详情页"
                        )
                      );
                    },
                    clickLuckyBoxRule: function () {
                      a.report(
                        a._formatReportObj(
                          "usr/click/luckybox/rule",
                          "用户/点击/拆礼盒面板/玩法说明"
                        )
                      );
                    },
                    clickLuckyBoxRecord: function () {
                      a.report(
                        a._formatReportObj(
                          "usr/click/luckybox/record",
                          "用户/点击/拆礼盒面板/中奖记录"
                        )
                      );
                    },
                    clickLuckyBoxSendOne: function () {
                      a.report(
                        a._formatReportObj(
                          "usr/click/luckybox/one",
                          "用户/点击/拆礼盒面板/拆1次"
                        )
                      );
                    },
                    clickLuckyBoxSendTen: function () {
                      a.report(
                        a._formatReportObj(
                          "usr/click/luckybox/ten",
                          "用户/点击/拆礼盒面板/拆10次"
                        )
                      );
                    },
                    receiveLuckyBoxResult: function (t, e, n) {
                      a.report(
                        a._formatReportObj(
                          "usr/click/luckybox/send",
                          "用户/点击/拆礼盒面板/赠送礼盒",
                          { result_: t, reward_: e, type_: n }
                        )
                      );
                    },
                  })),
                (o.params =
                  null === (n = Object(y.I)()) || void 0 === n
                    ? void 0
                    : n.params),
                o
              );
            }
            return (
              a()(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var t,
                      e = this,
                      r = (this.props.userInfo || {}).lang,
                      i = void 0 === r ? "1033" : r;
                    Object(I.d)(n("7AZq"), i).then(function (t) {
                      e.setState({ langPkg: t });
                    }),
                      "function" ===
                        typeof (null === (t = this.report) || void 0 === t
                          ? void 0
                          : t.showLuckyBoxDetail) &&
                        this.report.showLuckyBoxDetail();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t,
                      e,
                      n,
                      r = this.props,
                      i = r.prefixCls,
                      o = r.className,
                      a = r.userInfo,
                      s = r.socketModel,
                      c = r.initMGInApp,
                      u = this.state.langPkg,
                      l =
                        Number(
                          null === (t = this.params) || void 0 === t
                            ? void 0
                            : t._roomId
                        ) || 0,
                      f =
                        Number(
                          null === (e = this.params) || void 0 === e
                            ? void 0
                            : e._anchorId
                        ) || 0,
                      h =
                        Number(
                          null === (n = this.params) || void 0 === n
                            ? void 0
                            : n._anchorLang
                        ) || -1,
                      p = g()(i, o);
                    return _.createElement(
                      x.a.Provider,
                      {
                        value: {
                          roomId: l,
                          anchorLang: h,
                          anchorId: f,
                          userInfo: a,
                          langPkg: u,
                          report: this.report,
                          socketModel: s,
                          initMGInApp: c,
                        },
                      },
                      _.createElement(ne, {
                        className: p,
                        roomId: l,
                        report: this.report,
                      })
                    );
                  },
                },
              ]),
              r
            );
          })(_.Component)),
          d()(ee, "defaultProps", {
            prefixCls: "LuckyGiftFragment",
            className: "",
          }),
          (te = ee))
        ) || te;
      e.default = ie;
    },
    Pmkc: function (t, e, n) {
      t.exports = n("4KFe")(67);
    },
    QJbY: function (t, e, n) {
      "use strict";
      t.exports = i;
      var r = n("trWP");
      function i(t) {
        if (!(this instanceof i)) return new i(t);
        r.call(this, t);
      }
      n("dBkQ")(i, r),
        (i.prototype._transform = function (t, e, n) {
          n(null, t);
        });
    },
    QxPk: function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r = n("rIiI"),
        i = n.n(r),
        o = n("58BP"),
        a = n.n(o),
        s = n("Ptek"),
        c = n.n(s),
        u = n("gy9q"),
        l = n.n(u),
        f = n("7DFi"),
        h = n.n(f),
        p = n("TJEx"),
        d = n.n(p),
        _ = n("cQwn"),
        v = n.n(_),
        m = n("avFb"),
        g = n.n(m);
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
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(n), !0).forEach(function (e) {
                v()(t, e, n[e]);
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
      function b(t) {
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
            r = d()(t);
          if (e) {
            var i = d()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return h()(this, n);
        };
      }
      var w = n("cOjp").b.log,
        E = (function (t) {
          l()(n, t);
          var e = b(n);
          function n(t) {
            var r;
            return (
              i()(this, n),
              (r = e.call(this, t)),
              v()(c()(r), "checkNewData", function () {
                if (!r.isAnimateStart)
                  if (((r.isAnimateStart = !0), r.newData.length > 0)) {
                    var t = r.props.showNum,
                      e = r.state.curData.concat(r.newData.shift());
                    (r.state.curData = e),
                      r.setState(),
                      e.length > t ? r.step() : (r.isAnimateStart = !1);
                  } else r.isAnimateStart = !1;
              }),
              v()(c()(r), "step", function () {
                var t = r.state,
                  e = t.currentIndex + 1,
                  n = t.curData;
                r.setState({
                  currentIndex: e,
                  currenTranslateY: -e * r.itemHeight,
                  curData: n,
                  stopAnimate: !1,
                }),
                  (r.isAnimateStart = !1),
                  setTimeout(function () {
                    r.checkNewData();
                  }, r.duration);
              }),
              (r.state = {
                currentIndex: 0,
                currenTranslateY: 0,
                stopAnimate: !1,
                curData: t.data,
              }),
              (r.duration = 500),
              (r.length = 0),
              (r.itemHeight = 0),
              (r.isAnimateStart = !1),
              (r.newData = []),
              (r.updateTag = 0),
              r
            );
          }
          return (
            a()(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var t, e, n, r, i, o, a;
                  (this.length = this.marquee.childElementCount),
                    w("当前队列子节点数量", this.marquee.childElementCount),
                    (this.itemHeight =
                      ((null === (t = this.marquee.children) ||
                      void 0 === t ||
                      null === (e = t[0]) ||
                      void 0 === e
                        ? void 0
                        : e.getBoundingClientRect) &&
                        (null === (n = this.marquee.children) ||
                        void 0 === n ||
                        null === (r = n[0]) ||
                        void 0 === r ||
                        null === (i = r.getBoundingClientRect()) ||
                        void 0 === i
                          ? void 0
                          : i.height)) ||
                      (null === (o = this.marquee.children) ||
                      void 0 === o ||
                      null === (a = o[0]) ||
                      void 0 === a
                        ? void 0
                        : a.clientHeight));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t) {
                  var e,
                    n = this;
                  if (
                    (null === t || void 0 === t ? void 0 : t.data) !==
                    (null === (e = this.props) || void 0 === e
                      ? void 0
                      : e.data)
                  ) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      c,
                      u,
                      l,
                      f = ((null === t || void 0 === t ? void 0 : t.data) || [])
                        .concat(this.newData)
                        .map(function (t) {
                          return t.key;
                        }),
                      h = (
                        (null === (r = this.props) || void 0 === r
                          ? void 0
                          : r.data) || []
                      ).filter(function (t) {
                        return -1 === f.indexOf(t.key);
                      });
                    h.length > 0 &&
                      ((this.updateTag += 1),
                      h.map(function (t) {
                        return R(R({}, t), {}, { updateTag: n.updateTag });
                      })),
                      w("有数据更新", h),
                      (this.itemHeight =
                        ((null === (i = this.marquee.children) ||
                        void 0 === i ||
                        null === (o = i[0]) ||
                        void 0 === o
                          ? void 0
                          : o.getBoundingClientRect) &&
                          (null === (a = this.marquee.children) ||
                          void 0 === a ||
                          null === (s = a[0]) ||
                          void 0 === s ||
                          null === (c = s.getBoundingClientRect()) ||
                          void 0 === c
                            ? void 0
                            : c.height)) ||
                        (null === (u = this.marquee.children) ||
                        void 0 === u ||
                        null === (l = u[0]) ||
                        void 0 === l
                          ? void 0
                          : l.clientHeight)),
                      (this.newData = this.newData.concat(h)),
                      h.length > 0 && this.checkNewData();
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props,
                    n = e.raceLampRender,
                    r = e.prefixCls,
                    i = e.className,
                    o = (e.showNum, this.state),
                    a = o.stopAnimate,
                    s = o.currenTranslateY,
                    c = o.curData;
                  return g.a.createElement(
                    "div",
                    { className: "".concat(r, "_container ").concat(i) },
                    g.a.createElement(
                      "div",
                      {
                        style: {
                          transform: "translate(0, ".concat(s, "px)"),
                          WebkitTransform: "translate(0, ".concat(s, "px)"),
                          msTransform: "translate(0, ".concat(s, "px)"),
                          OTransform: "translate(0, ".concat(s, "px)"),
                          transition: "transform ".concat(
                            a ? 0 : this.duration,
                            "ms ease-in-out"
                          ),
                          willChange: "transform",
                        },
                        ref: function (e) {
                          return (t.marquee = e);
                        },
                      },
                      c.map(n)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(g.a.Component);
      v()(E, "defaultProps", {
        prefixCls: "nimo-race-lamp",
        className: "",
        interval: 2e3,
        data: [],
      });
      var C = E;
      e.a = C;
    },
    "R/7o": function (t, e, n) {},
    S3hb: function (t, e, n) {
      var r = n("V+4i"),
        i = n("Vwta");
      t.exports = function (t) {
        if (void 0 === t) return 0;
        var e = r(t),
          n = i(e);
        if (e !== n) throw RangeError("Wrong length!");
        return n;
      };
    },
    SImQ: function (t, e, n) {
      var r = n("HJHO"),
        i = n("5x0A"),
        o = n("ZIlV"),
        a = n("7XLi"),
        s = n("4cNG"),
        c = n("3FAr");
      t.exports = function (t, e, n) {
        for (var u = -1, l = (e = r(e, t)).length, f = !1; ++u < l; ) {
          var h = c(e[u]);
          if (!(f = null != t && n(t, h))) break;
          t = t[h];
        }
        return f || ++u != l
          ? f
          : !!(l = null == t ? 0 : t.length) &&
              s(l) &&
              a(h, l) &&
              (o(t) || i(t));
      };
    },
    U2p0: function (t, e, n) {
      (function (t) {
        var r,
          i,
          o,
          a,
          s = n("YQsQ");
        n("RlNQ"),
          n("broN"),
          n("4fyB"),
          n("f+xG"),
          n("2+ni"),
          n("EObr"),
          n("1Xss"),
          window,
          (a = function () {
            return (function (t) {
              var e = {};
              function n(r) {
                if (e[r]) return e[r].exports;
                var i = (e[r] = { i: r, l: !1, exports: {} });
                return (
                  t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
                );
              }
              return (
                (n.m = t),
                (n.c = e),
                (n.d = function (t, e, r) {
                  n.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: r });
                }),
                (n.r = function (t) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
                }),
                (n.t = function (t, e) {
                  if ((1 & e && (t = n(t)), 8 & e)) return t;
                  if (4 & e && "object" == s(t) && t && t.__esModule) return t;
                  var r = Object.create(null);
                  if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: t,
                    }),
                    2 & e && "string" != typeof t)
                  )
                    for (var i in t)
                      n.d(
                        r,
                        i,
                        function (e) {
                          return t[e];
                        }.bind(null, i)
                      );
                  return r;
                }),
                (n.n = function (t) {
                  var e =
                    t && t.__esModule
                      ? function () {
                          return t.default;
                        }
                      : function () {
                          return t;
                        };
                  return n.d(e, "a", e), e;
                }),
                (n.o = function (t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (n.p = ""),
                n((n.s = 1))
              );
            })([
              function (t, e) {
                var n = (function () {
                  "use strict";
                  function t(t, e) {
                    var n = t.l + e.l,
                      r = {
                        h: (t.h + e.h + ((n / 2) >>> 31)) >>> 0,
                        l: n >>> 0,
                      };
                    (t.h = r.h), (t.l = r.l);
                  }
                  function e(t, e) {
                    (t.h ^= e.h), (t.h >>>= 0), (t.l ^= e.l), (t.l >>>= 0);
                  }
                  function n(t, e) {
                    var n = {
                      h: (t.h << e) | (t.l >>> (32 - e)),
                      l: (t.l << e) | (t.h >>> (32 - e)),
                    };
                    (t.h = n.h), (t.l = n.l);
                  }
                  function r(t) {
                    var e = t.l;
                    (t.l = t.h), (t.h = e);
                  }
                  function i(i, o, a, s) {
                    t(i, o),
                      t(a, s),
                      n(o, 13),
                      n(s, 16),
                      e(o, i),
                      e(s, a),
                      r(i),
                      t(a, o),
                      t(i, s),
                      n(o, 17),
                      n(s, 21),
                      e(o, a),
                      e(s, i),
                      r(a);
                  }
                  function o(t, e) {
                    return (
                      (t[e + 3] << 24) |
                      (t[e + 2] << 16) |
                      (t[e + 1] << 8) |
                      t[e]
                    );
                  }
                  function a(t, n) {
                    "string" == typeof n && (n = s(n));
                    var r = { h: t[1] >>> 0, l: t[0] >>> 0 },
                      a = { h: t[3] >>> 0, l: t[2] >>> 0 },
                      c = { h: r.h, l: r.l },
                      u = r,
                      l = { h: a.h, l: a.l },
                      f = a,
                      h = n.length,
                      p = h - 7,
                      d = new Uint8Array(new ArrayBuffer(8));
                    e(c, { h: 1936682341, l: 1886610805 }),
                      e(l, { h: 1685025377, l: 1852075885 }),
                      e(u, { h: 1819895653, l: 1852142177 }),
                      e(f, { h: 1952801890, l: 2037671283 });
                    for (var _ = 0; _ < p; ) {
                      var v = { h: o(n, _ + 4), l: o(n, _) };
                      e(f, v), i(c, l, u, f), i(c, l, u, f), e(c, v), (_ += 8);
                    }
                    d[7] = h;
                    for (var m = 0; _ < h; ) d[m++] = n[_++];
                    for (; m < 7; ) d[m++] = 0;
                    var g = {
                      h: (d[7] << 24) | (d[6] << 16) | (d[5] << 8) | d[4],
                      l: (d[3] << 24) | (d[2] << 16) | (d[1] << 8) | d[0],
                    };
                    e(f, g),
                      i(c, l, u, f),
                      i(c, l, u, f),
                      e(c, g),
                      e(u, { h: 0, l: 255 }),
                      i(c, l, u, f),
                      i(c, l, u, f),
                      i(c, l, u, f),
                      i(c, l, u, f);
                    var y = c;
                    return e(y, l), e(y, u), e(y, f), y;
                  }
                  function s(t) {
                    if ("function" == typeof TextEncoder)
                      return new TextEncoder().encode(t);
                    t = unescape(encodeURIComponent(t));
                    for (
                      var e = new Uint8Array(t.length), n = 0, r = t.length;
                      n < r;
                      n++
                    )
                      e[n] = t.charCodeAt(n);
                    return e;
                  }
                  return {
                    hash: a,
                    hash_hex: function (t, e) {
                      var n = a(t, e);
                      return (
                        ("0000000" + n.h.toString(16)).substr(-8) +
                        ("0000000" + n.l.toString(16)).substr(-8)
                      );
                    },
                    hash_uint: function (t, e) {
                      var n = a(t, e);
                      return 4294967296 * (2097151 & n.h) + n.l;
                    },
                    string16_to_key: function (t) {
                      var e = s(t);
                      if (16 !== e.length)
                        throw Error("Key length must be 16 bytes");
                      var n = new Uint32Array(4);
                      return (
                        (n[0] = o(e, 0)),
                        (n[1] = o(e, 4)),
                        (n[2] = o(e, 8)),
                        (n[3] = o(e, 12)),
                        n
                      );
                    },
                    string_to_u8: s,
                  };
                })();
                (t = t || {}).exports = n;
              },
              function (t, e, n) {
                "use strict";
                n.r(e);
                var r = n(0),
                  i = n.n(r);
                function o(t) {
                  return (o =
                    "function" == typeof Symbol &&
                    "symbol" == s(Symbol.iterator)
                      ? function (t) {
                          return s(t);
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : s(t);
                        })(t);
                }
                function a(t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(t, r.key, r);
                  }
                }
                function c(t, e) {
                  return !e || ("object" !== o(e) && "function" != typeof e)
                    ? (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return t;
                      })(t)
                    : e;
                }
                function u(t) {
                  var e = "function" == typeof Map ? new Map() : void 0;
                  return (u = function (t) {
                    if (
                      null === t ||
                      ((n = t),
                      -1 === Function.toString.call(n).indexOf("[native code]"))
                    )
                      return t;
                    var n;
                    if ("function" != typeof t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    if (void 0 !== e) {
                      if (e.has(t)) return e.get(t);
                      e.set(t, r);
                    }
                    function r() {
                      return l(t, arguments, p(this).constructor);
                    }
                    return (
                      (r.prototype = Object.create(t.prototype, {
                        constructor: {
                          value: r,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                      h(r, t)
                    );
                  })(t);
                }
                function l(t, e, n) {
                  return (l = f()
                    ? Reflect.construct
                    : function (t, e, n) {
                        var r = [null];
                        r.push.apply(r, e);
                        var i = new (Function.bind.apply(t, r))();
                        return n && h(i, n.prototype), i;
                      }).apply(null, arguments);
                }
                function f() {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
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
                }
                function h(t, e) {
                  return (h =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t;
                    })(t, e);
                }
                function p(t) {
                  return (p = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
                }
                var d = (function (t) {
                  !(function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      e && h(t, e);
                  })(l, t);
                  var e,
                    n,
                    r,
                    i,
                    s,
                    u =
                      ((e = l),
                      (n = f()),
                      function () {
                        var t,
                          r = p(e);
                        if (n) {
                          var i = p(this).constructor;
                          t = Reflect.construct(r, arguments, i);
                        } else t = r.apply(this, arguments);
                        return c(this, t);
                      });
                  function l(t, e) {
                    var n;
                    if (
                      ((function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, l),
                      t > l.__kMaxLength)
                    )
                      throw new RangeError("Maximum BigInt size exceeded");
                    return ((n = u.call(this, t)).sign = e), n;
                  }
                  return (
                    (r = l),
                    (s = [
                      {
                        key: "BigInt",
                        value: function (t) {
                          if ("number" == typeof t) {
                            if (0 === t) return l.__zero();
                            if ((0 | t) === t)
                              return t < 0
                                ? l.__oneDigit(-t, !0)
                                : l.__oneDigit(t, !1);
                            if (!Number.isFinite(t) || Math.floor(t) !== t)
                              throw new RangeError(
                                "The number " +
                                  t +
                                  " cannot be converted to BigInt because it is not an integer"
                              );
                            return l.__fromDouble(t);
                          }
                          if ("string" == typeof t) {
                            var e = l.__fromString(t);
                            if (null === e)
                              throw new SyntaxError(
                                "Cannot convert " + t + " to a BigInt"
                              );
                            return e;
                          }
                          if ("boolean" == typeof t)
                            return !0 === t ? l.__oneDigit(1, !1) : l.__zero();
                          if ("object" === o(t)) {
                            if (t.constructor === l) return t;
                            var n = l.__toPrimitive(t);
                            return l.BigInt(n);
                          }
                          throw new TypeError(
                            "Cannot convert " + t + " to a BigInt"
                          );
                        },
                      },
                      {
                        key: "toNumber",
                        value: function (t) {
                          var e = t.length;
                          if (0 === e) return 0;
                          if (1 === e) {
                            var n = t.__unsignedDigit(0);
                            return t.sign ? -n : n;
                          }
                          var r = t.__digit(e - 1),
                            i = l.__clz32(r),
                            o = 32 * e - i;
                          if (o > 1024) return t.sign ? -1 / 0 : 1 / 0;
                          var a = o - 1,
                            s = r,
                            c = e - 1,
                            u = i + 1,
                            f = 32 === u ? 0 : s << u;
                          f >>>= 12;
                          var h = u - 12,
                            p = u >= 12 ? 0 : s << (20 + u),
                            d = 20 + u;
                          h > 0 &&
                            c > 0 &&
                            (c--,
                            (f |= (s = t.__digit(c)) >>> (32 - h)),
                            (p = s << h),
                            (d = h)),
                            d > 0 &&
                              c > 0 &&
                              (c--,
                              (p |= (s = t.__digit(c)) >>> (32 - d)),
                              (d -= 32));
                          var _ = l.__decideRounding(t, d, c, s);
                          if (
                            (1 === _ || (0 === _ && 1 == (1 & p))) &&
                            0 == (p = (p + 1) >>> 0) &&
                            ++f >>> 20 != 0 &&
                            ((f = 0), ++a > 1023)
                          )
                            return t.sign ? -1 / 0 : 1 / 0;
                          var v = t.sign ? 1 << 31 : 0;
                          return (
                            (a = (a + 1023) << 20),
                            (l.__kBitConversionInts[1] = v | a | f),
                            (l.__kBitConversionInts[0] = p),
                            l.__kBitConversionDouble[0]
                          );
                        },
                      },
                      {
                        key: "remainder",
                        value: function (t, e) {
                          if (0 === e.length)
                            throw new RangeError("Division by zero");
                          if (l.__absoluteCompare(t, e) < 0) return t;
                          var n = e.__unsignedDigit(0);
                          if (1 === e.length && n <= 65535) {
                            if (1 === n) return l.__zero();
                            var r = l.__absoluteModSmall(t, n);
                            return 0 === r
                              ? l.__zero()
                              : l.__oneDigit(r, t.sign);
                          }
                          var i = l.__absoluteDivLarge(t, e, !1, !0);
                          return (i.sign = t.sign), i.__trim();
                        },
                      },
                      {
                        key: "asIntN",
                        value: function (t, e) {
                          if (0 === e.length) return e;
                          if (0 === t) return l.__zero();
                          if (t >= l.__kMaxLengthBits) return e;
                          var n = (t + 31) >>> 5;
                          if (e.length < n) return e;
                          var r = e.__unsignedDigit(n - 1),
                            i = 1 << ((t - 1) & 31);
                          if (e.length === n && r < i) return e;
                          if ((r & i) !== i) return l.__truncateToNBits(t, e);
                          if (!e.sign)
                            return l.__truncateAndSubFromPowerOfTwo(t, e, !0);
                          if (0 == (r & (i - 1))) {
                            for (var o = n - 2; o >= 0; o--)
                              if (0 !== e.__digit(o))
                                return l.__truncateAndSubFromPowerOfTwo(
                                  t,
                                  e,
                                  !1
                                );
                            return e.length === n && r === i
                              ? e
                              : l.__truncateToNBits(t, e);
                          }
                          return l.__truncateAndSubFromPowerOfTwo(t, e, !1);
                        },
                      },
                      {
                        key: "__zero",
                        value: function () {
                          return new l(0, !1);
                        },
                      },
                      {
                        key: "__oneDigit",
                        value: function (t, e) {
                          var n = new l(1, e);
                          return n.__setDigit(0, t), n;
                        },
                      },
                      {
                        key: "__decideRounding",
                        value: function (t, e, n, r) {
                          if (e > 0) return -1;
                          var i;
                          if (e < 0) i = -e - 1;
                          else {
                            if (0 === n) return -1;
                            n--, (r = t.__digit(n)), (i = 31);
                          }
                          var o = 1 << i;
                          if (0 == (r & o)) return -1;
                          if (0 != (r & (o -= 1))) return 1;
                          for (; n > 0; )
                            if ((n--, 0 !== t.__digit(n))) return 1;
                          return 0;
                        },
                      },
                      {
                        key: "__fromDouble",
                        value: function (t) {
                          var e = t < 0;
                          l.__kBitConversionDouble[0] = t;
                          var n,
                            r =
                              ((l.__kBitConversionInts[1] >>> 20) & 2047) -
                              1023,
                            i = 1 + (r >>> 5),
                            o = new l(i, e),
                            a = (1048575 & l.__kBitConversionInts[1]) | 1048576,
                            s = l.__kBitConversionInts[0],
                            c = 31 & r,
                            u = 0;
                          if (c < 20) {
                            var f = 20 - c;
                            (u = f + 32),
                              (n = a >>> f),
                              (a = (a << (32 - f)) | (s >>> f)),
                              (s <<= 32 - f);
                          } else if (20 === c) (u = 32), (n = a), (a = s);
                          else {
                            var h = c - 20;
                            (u = 32 - h),
                              (n = (a << h) | (s >>> (32 - h))),
                              (a = s << h);
                          }
                          o.__setDigit(i - 1, n);
                          for (var p = i - 2; p >= 0; p--)
                            u > 0 ? ((u -= 32), (n = a), (a = s)) : (n = 0),
                              o.__setDigit(p, n);
                          return o.__trim();
                        },
                      },
                      {
                        key: "__isWhitespace",
                        value: function (t) {
                          return (
                            (t <= 13 && t >= 9) ||
                            (t <= 159
                              ? 32 === t
                              : t <= 131071
                              ? 160 === t || 5760 === t
                              : t <= 196607
                              ? (t &= 131071) <= 10 ||
                                40 === t ||
                                41 === t ||
                                47 === t ||
                                95 === t ||
                                4096 === t
                              : 65279 === t)
                          );
                        },
                      },
                      {
                        key: "__fromString",
                        value: function (t) {
                          var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0,
                            n = 0,
                            r = t.length,
                            i = 0;
                          if (i === r) return l.__zero();
                          for (var o = t.charCodeAt(i); l.__isWhitespace(o); ) {
                            if (++i === r) return l.__zero();
                            o = t.charCodeAt(i);
                          }
                          if (43 === o) {
                            if (++i === r) return null;
                            (o = t.charCodeAt(i)), (n = 1);
                          } else if (45 === o) {
                            if (++i === r) return null;
                            (o = t.charCodeAt(i)), (n = -1);
                          }
                          if (0 === e) {
                            if (((e = 10), 48 === o)) {
                              if (++i === r) return l.__zero();
                              if (88 === (o = t.charCodeAt(i)) || 120 === o) {
                                if (((e = 16), ++i === r)) return null;
                                o = t.charCodeAt(i);
                              } else if (79 === o || 111 === o) {
                                if (((e = 8), ++i === r)) return null;
                                o = t.charCodeAt(i);
                              } else if (66 === o || 98 === o) {
                                if (((e = 2), ++i === r)) return null;
                                o = t.charCodeAt(i);
                              }
                            }
                          } else if (16 === e && 48 === o) {
                            if (++i === r) return l.__zero();
                            if (88 === (o = t.charCodeAt(i)) || 120 === o) {
                              if (++i === r) return null;
                              o = t.charCodeAt(i);
                            }
                          }
                          for (; 48 === o; ) {
                            if (++i === r) return l.__zero();
                            o = t.charCodeAt(i);
                          }
                          var a = r - i,
                            s = l.__kMaxBitsPerChar[e],
                            c = l.__kBitsPerCharTableMultiplier - 1;
                          if (a > (1 << 30) / s) return null;
                          var u = (s * a + c) >>> l.__kBitsPerCharTableShift,
                            f = (u + 31) >>> 5,
                            h = new l(f, !1),
                            p = e < 10 ? e : 10,
                            d = e > 10 ? e - 10 : 0;
                          if (0 == (e & (e - 1))) {
                            s >>= l.__kBitsPerCharTableShift;
                            var _ = [],
                              v = [],
                              m = !1;
                            do {
                              for (var g = 0, y = 0; ; ) {
                                var R = void 0;
                                if ((o - 48) >>> 0 < p) R = o - 48;
                                else {
                                  if (!(((32 | o) - 97) >>> 0 < d)) {
                                    m = !0;
                                    break;
                                  }
                                  R = (32 | o) - 87;
                                }
                                if (((y += s), (g = (g << s) | R), ++i === r)) {
                                  m = !0;
                                  break;
                                }
                                if (((o = t.charCodeAt(i)), y + s > 32)) break;
                              }
                              _.push(g), v.push(y);
                            } while (!m);
                            l.__fillFromParts(h, _, v);
                          } else {
                            h.__initializeDigits();
                            var b = !1,
                              w = 0;
                            do {
                              for (var E = 0, C = 1; ; ) {
                                var T = void 0;
                                if ((o - 48) >>> 0 < p) T = o - 48;
                                else {
                                  if (!(((32 | o) - 97) >>> 0 < d)) {
                                    b = !0;
                                    break;
                                  }
                                  T = (32 | o) - 87;
                                }
                                var S = C * e;
                                if (S > 4294967295) break;
                                if (
                                  ((C = S), (E = E * e + T), w++, ++i === r)
                                ) {
                                  b = !0;
                                  break;
                                }
                                o = t.charCodeAt(i);
                              }
                              var I =
                                (s * w +
                                  (c =
                                    32 * l.__kBitsPerCharTableMultiplier -
                                    1)) >>>
                                (l.__kBitsPerCharTableShift + 5);
                              h.__inplaceMultiplyAdd(C, E, I);
                            } while (!b);
                          }
                          if (i !== r) {
                            if (!l.__isWhitespace(o)) return null;
                            for (i++; i < r; i++)
                              if (((o = t.charCodeAt(i)), !l.__isWhitespace(o)))
                                return null;
                          }
                          return 0 !== n && 10 !== e
                            ? null
                            : ((h.sign = -1 === n), h.__trim());
                        },
                      },
                      {
                        key: "__fillFromParts",
                        value: function (t, e, n) {
                          for (
                            var r = 0, i = 0, o = 0, a = e.length - 1;
                            a >= 0;
                            a--
                          ) {
                            var s = e[a],
                              c = n[a];
                            (i |= s << o),
                              32 === (o += c)
                                ? (t.__setDigit(r++, i), (o = 0), (i = 0))
                                : o > 32 &&
                                  (t.__setDigit(r++, i),
                                  (i = s >>> (c - (o -= 32))));
                          }
                          if (0 !== i) {
                            if (r >= t.length)
                              throw new Error("implementation bug");
                            t.__setDigit(r++, i);
                          }
                          for (; r < t.length; r++) t.__setDigit(r, 0);
                        },
                      },
                      {
                        key: "__toStringBasePowerOfTwo",
                        value: function (t, e) {
                          var n = t.length,
                            r = e - 1,
                            i = (r =
                              (((r =
                                (((r = ((r >>> 1) & 85) + (85 & r)) >>> 2) &
                                  51) +
                                (51 & r)) >>>
                                4) &
                                15) +
                              (15 & r)),
                            o = e - 1,
                            a = t.__digit(n - 1),
                            s = ((32 * n - l.__clz32(a) + i - 1) / i) | 0;
                          if ((t.sign && s++, s > 1 << 28))
                            throw new Error("string too long");
                          for (
                            var c = new Array(s),
                              u = s - 1,
                              f = 0,
                              h = 0,
                              p = 0;
                            p < n - 1;
                            p++
                          ) {
                            var d = t.__digit(p),
                              _ = (f | (d << h)) & o;
                            c[u--] = l.__kConversionChars[_];
                            var v = i - h;
                            for (f = d >>> v, h = 32 - v; h >= i; )
                              (c[u--] = l.__kConversionChars[f & o]),
                                (f >>>= i),
                                (h -= i);
                          }
                          var m = (f | (a << h)) & o;
                          for (
                            c[u--] = l.__kConversionChars[m], f = a >>> (i - h);
                            0 !== f;

                          )
                            (c[u--] = l.__kConversionChars[f & o]), (f >>>= i);
                          if ((t.sign && (c[u--] = "-"), -1 !== u))
                            throw new Error("implementation bug");
                          return c.join("");
                        },
                      },
                      {
                        key: "__absoluteCompare",
                        value: function (t, e) {
                          var n = t.length - e.length;
                          if (0 !== n) return n;
                          for (
                            var r = t.length - 1;
                            r >= 0 && t.__digit(r) === e.__digit(r);

                          )
                            r--;
                          return r < 0
                            ? 0
                            : t.__unsignedDigit(r) > e.__unsignedDigit(r)
                            ? 1
                            : -1;
                        },
                      },
                      {
                        key: "__internalMultiplyAdd",
                        value: function (t, e, n, r, i) {
                          for (var o = n, a = 0, s = 0; s < r; s++) {
                            var c = t.__digit(s),
                              u = l.__imul(65535 & c, e),
                              f = (65535 & u) + a + o;
                            o = f >>> 16;
                            var h = l.__imul(c >>> 16, e),
                              p = (65535 & h) + (u >>> 16) + o;
                            (o = p >>> 16),
                              (a = h >>> 16),
                              i.__setDigit(s, (p << 16) | (65535 & f));
                          }
                          if (i.length > r)
                            for (i.__setDigit(r++, o + a); r < i.length; )
                              i.__setDigit(r++, 0);
                          else if (o + a !== 0)
                            throw new Error("implementation bug");
                        },
                      },
                      {
                        key: "__absoluteModSmall",
                        value: function (t, e) {
                          for (var n = 0, r = 2 * t.length - 1; r >= 0; r--)
                            n = (((n << 16) | t.__halfDigit(r)) >>> 0) % e | 0;
                          return n;
                        },
                      },
                      {
                        key: "__absoluteDivLarge",
                        value: function (t, e, n, r) {
                          var i = e.__halfDigitLength(),
                            o = e.length,
                            a = t.__halfDigitLength() - i,
                            s = null;
                          n &&
                            (s = new l((a + 2) >>> 1, !1)).__initializeDigits();
                          var c = new l((i + 2) >>> 1, !1);
                          c.__initializeDigits();
                          var u = l.__clz16(e.__halfDigit(i - 1));
                          u > 0 && (e = l.__specialLeftShift(e, u, 0));
                          for (
                            var f = l.__specialLeftShift(t, u, 1),
                              h = e.__halfDigit(i - 1),
                              p = 0,
                              d = a;
                            d >= 0;
                            d--
                          ) {
                            var _ = 65535,
                              v = f.__halfDigit(d + i);
                            if (v !== h) {
                              var m =
                                ((v << 16) | f.__halfDigit(d + i - 1)) >>> 0;
                              _ = (m / h) | 0;
                              for (
                                var g = m % h | 0,
                                  y = e.__halfDigit(i - 2),
                                  R = f.__halfDigit(d + i - 2);
                                l.__imul(_, y) >>> 0 > ((g << 16) | R) >>> 0 &&
                                (_--, !((g += h) > 65535));

                              );
                            }
                            l.__internalMultiplyAdd(e, _, 0, o, c);
                            var b = f.__inplaceSub(c, d, i + 1);
                            0 !== b &&
                              ((b = f.__inplaceAdd(e, d, i)),
                              f.__setHalfDigit(d + i, f.__halfDigit(d + i) + b),
                              _--),
                              n &&
                                (1 & d
                                  ? (p = _ << 16)
                                  : s.__setDigit(d >>> 1, p | _));
                          }
                          return r
                            ? (f.__inplaceRightShift(u),
                              n ? { quotient: s, remainder: f } : f)
                            : n
                            ? s
                            : void 0;
                        },
                      },
                      {
                        key: "__clz16",
                        value: function (t) {
                          return l.__clz32(t) - 16;
                        },
                      },
                      {
                        key: "__specialLeftShift",
                        value: function (t, e, n) {
                          var r = t.length,
                            i = new l(r + n, !1);
                          if (0 === e) {
                            for (var o = 0; o < r; o++)
                              i.__setDigit(o, t.__digit(o));
                            return n > 0 && i.__setDigit(r, 0), i;
                          }
                          for (var a = 0, s = 0; s < r; s++) {
                            var c = t.__digit(s);
                            i.__setDigit(s, (c << e) | a), (a = c >>> (32 - e));
                          }
                          return n > 0 && i.__setDigit(r, a), i;
                        },
                      },
                      {
                        key: "__toPrimitive",
                        value: function (t) {
                          var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "default";
                          if ("object" !== o(t)) return t;
                          if (t.constructor === l) return t;
                          var n = t[Symbol.toPrimitive];
                          if (n) {
                            var r = n(e);
                            if ("object" !== o(r)) return r;
                            throw new TypeError(
                              "Cannot convert object to primitive value"
                            );
                          }
                          var i = t.valueOf;
                          if (i) {
                            var a = i.call(t);
                            if ("object" !== o(a)) return a;
                          }
                          var s = t.toString;
                          if (s) {
                            var c = s.call(t);
                            if ("object" !== o(c)) return c;
                          }
                          throw new TypeError(
                            "Cannot convert object to primitive value"
                          );
                        },
                      },
                      {
                        key: "__truncateToNBits",
                        value: function (t, e) {
                          for (
                            var n = (t + 31) >>> 5,
                              r = new l(n, e.sign),
                              i = n - 1,
                              o = 0;
                            o < i;
                            o++
                          )
                            r.__setDigit(o, e.__digit(o));
                          var a = e.__digit(i);
                          if (0 != (31 & t)) {
                            var s = 32 - (31 & t);
                            a = (a << s) >>> s;
                          }
                          return r.__setDigit(i, a), r.__trim();
                        },
                      },
                      {
                        key: "__truncateAndSubFromPowerOfTwo",
                        value: function (t, e, n) {
                          for (
                            var r = (t + 31) >>> 5,
                              i = new l(r, n),
                              o = 0,
                              a = r - 1,
                              s = 0,
                              c = Math.min(a, e.length);
                            o < c;
                            o++
                          ) {
                            var u = e.__digit(o),
                              f = 0 - (65535 & u) - s,
                              h = 0 - (u >>> 16) - (s = (f >>> 16) & 1);
                            (s = (h >>> 16) & 1),
                              i.__setDigit(o, (65535 & f) | (h << 16));
                          }
                          for (; o < a; o++) i.__setDigit(o, 0 | -s);
                          var p,
                            d = a < e.length ? e.__digit(a) : 0,
                            _ = 31 & t;
                          if (0 === _) {
                            var v = 0 - (65535 & d) - s;
                            p =
                              (65535 & v) |
                              ((0 - (d >>> 16) - (s = (v >>> 16) & 1)) << 16);
                          } else {
                            var m = 32 - _,
                              g = 1 << (32 - m),
                              y =
                                (65535 & g) -
                                (65535 & (d = (d << m) >>> m)) -
                                s;
                            (p =
                              (65535 & y) |
                              (((g >>> 16) -
                                (d >>> 16) -
                                (s = (y >>> 16) & 1)) <<
                                16)),
                              (p &= g - 1);
                          }
                          return i.__setDigit(a, p), i.__trim();
                        },
                      },
                    ]),
                    (i = [
                      {
                        key: "__trim",
                        value: function () {
                          for (var t = this.length, e = this[t - 1]; 0 === e; )
                            (e = this[--t - 1]), this.pop();
                          return 0 === t && (this.sign = !1), this;
                        },
                      },
                      {
                        key: "__initializeDigits",
                        value: function () {
                          for (var t = 0; t < this.length; t++) this[t] = 0;
                        },
                      },
                      {
                        key: "__inplaceMultiplyAdd",
                        value: function (t, e, n) {
                          n > this.length && (n = this.length);
                          for (
                            var r = 65535 & t,
                              i = t >>> 16,
                              o = 0,
                              a = 65535 & e,
                              s = e >>> 16,
                              c = 0;
                            c < n;
                            c++
                          ) {
                            var u = this.__digit(c),
                              f = 65535 & u,
                              h = u >>> 16,
                              p = l.__imul(f, r),
                              d = l.__imul(f, i),
                              _ = l.__imul(h, r),
                              v = l.__imul(h, i),
                              m = a + (65535 & p),
                              g =
                                s +
                                o +
                                (m >>> 16) +
                                (p >>> 16) +
                                (65535 & d) +
                                (65535 & _);
                            (o =
                              (a =
                                (d >>> 16) +
                                (_ >>> 16) +
                                (65535 & v) +
                                (g >>> 16)) >>> 16),
                              (a &= 65535),
                              (s = v >>> 16);
                            var y = (65535 & m) | (g << 16);
                            this.__setDigit(c, y);
                          }
                          if (0 !== o || 0 !== a || 0 !== s)
                            throw new Error("implementation bug");
                        },
                      },
                      {
                        key: "__inplaceAdd",
                        value: function (t, e, n) {
                          for (var r = 0, i = 0; i < n; i++) {
                            var o =
                              this.__halfDigit(e + i) + t.__halfDigit(i) + r;
                            (r = o >>> 16), this.__setHalfDigit(e + i, o);
                          }
                          return r;
                        },
                      },
                      {
                        key: "__inplaceSub",
                        value: function (t, e, n) {
                          var r = (n - 1) >>> 1,
                            i = 0;
                          if (1 & e) {
                            e >>= 1;
                            for (
                              var o = this.__digit(e), a = 65535 & o, s = 0;
                              s < r;
                              s++
                            ) {
                              var c = t.__digit(s),
                                u = (o >>> 16) - (65535 & c) - i;
                              (i = (u >>> 16) & 1),
                                this.__setDigit(e + s, (u << 16) | (65535 & a)),
                                (i =
                                  ((a =
                                    (65535 & (o = this.__digit(e + s + 1))) -
                                    (c >>> 16) -
                                    i) >>>
                                    16) &
                                  1);
                            }
                            var l = t.__digit(s),
                              f = (o >>> 16) - (65535 & l) - i;
                            (i = (f >>> 16) & 1),
                              this.__setDigit(e + s, (f << 16) | (65535 & a));
                            var h = l >>> 16;
                            if (e + s + 1 >= this.length)
                              throw new RangeError("out of bounds");
                            0 == (1 & n) &&
                              ((i =
                                ((a =
                                  (65535 & (o = this.__digit(e + s + 1))) -
                                  h -
                                  i) >>>
                                  16) &
                                1),
                              this.__setDigit(
                                e + t.length,
                                (4294901760 & o) | (65535 & a)
                              ));
                          } else {
                            e >>= 1;
                            for (var p = 0; p < t.length - 1; p++) {
                              var d = this.__digit(e + p),
                                _ = t.__digit(p),
                                v = (65535 & d) - (65535 & _) - i,
                                m =
                                  (d >>> 16) -
                                  (_ >>> 16) -
                                  (i = (v >>> 16) & 1);
                              (i = (m >>> 16) & 1),
                                this.__setDigit(e + p, (m << 16) | (65535 & v));
                            }
                            var g = this.__digit(e + p),
                              y = t.__digit(p),
                              R = (65535 & g) - (65535 & y) - i;
                            i = (R >>> 16) & 1;
                            var b = 0;
                            0 == (1 & n) &&
                              (i =
                                ((b = (g >>> 16) - (y >>> 16) - i) >>> 16) & 1),
                              this.__setDigit(e + p, (b << 16) | (65535 & R));
                          }
                          return i;
                        },
                      },
                      {
                        key: "__inplaceRightShift",
                        value: function (t) {
                          if (0 !== t) {
                            for (
                              var e = this.__digit(0) >>> t,
                                n = this.length - 1,
                                r = 0;
                              r < n;
                              r++
                            ) {
                              var i = this.__digit(r + 1);
                              this.__setDigit(r, (i << (32 - t)) | e),
                                (e = i >>> t);
                            }
                            this.__setDigit(n, e);
                          }
                        },
                      },
                      {
                        key: "__digit",
                        value: function (t) {
                          return this[t];
                        },
                      },
                      {
                        key: "__unsignedDigit",
                        value: function (t) {
                          return this[t] >>> 0;
                        },
                      },
                      {
                        key: "__setDigit",
                        value: function (t, e) {
                          this[t] = 0 | e;
                        },
                      },
                      {
                        key: "__halfDigitLength",
                        value: function () {
                          var t = this.length;
                          return this.__unsignedDigit(t - 1) <= 65535
                            ? 2 * t - 1
                            : 2 * t;
                        },
                      },
                      {
                        key: "__halfDigit",
                        value: function (t) {
                          return (this[t >>> 1] >>> ((1 & t) << 4)) & 65535;
                        },
                      },
                      {
                        key: "__setHalfDigit",
                        value: function (t, e) {
                          var n = t >>> 1,
                            r = this.__digit(n),
                            i =
                              1 & t
                                ? (65535 & r) | (e << 16)
                                : (4294901760 & r) | (65535 & e);
                          this.__setDigit(n, i);
                        },
                      },
                    ]) && a(r.prototype, i),
                    s && a(r, s),
                    l
                  );
                })(u(Array));
                (d.__kMaxLength = 1 << 25),
                  (d.__kMaxLengthBits = d.__kMaxLength << 5),
                  (d.__kMaxBitsPerChar = [
                    0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119,
                    122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149,
                    151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166,
                  ]),
                  (d.__kBitsPerCharTableShift = 5),
                  (d.__kBitsPerCharTableMultiplier =
                    1 << d.__kBitsPerCharTableShift),
                  (d.__kConversionChars =
                    "0123456789abcdefghijklmnopqrstuvwxyz".split("")),
                  (d.__kBitConversionBuffer = new ArrayBuffer(8)),
                  (d.__kBitConversionDouble = new Float64Array(
                    d.__kBitConversionBuffer
                  )),
                  (d.__kBitConversionInts = new Int32Array(
                    d.__kBitConversionBuffer
                  )),
                  (d.__clz32 =
                    Math.clz32 ||
                    function (t) {
                      return 0 === t
                        ? 32
                        : (31 - ((Math.log(t >>> 0) / Math.LN2) | 0)) | 0;
                    }),
                  (d.__imul =
                    Math.imul ||
                    function (t, e) {
                      return (t * e) | 0;
                    });
                var _ = d;
                function v(t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(t, r.key, r);
                  }
                }
                var m = (function () {
                  function t(e, n) {
                    if (
                      ((function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                      !e ||
                        "[object Array]" !== Object.prototype.toString.call(e))
                    )
                      throw Error(
                        "the params parameter of ABTEST must be Array"
                      );
                    e.forEach(function (t) {
                      if (
                        !t ||
                        "[object Array]" !== Object.prototype.toString.call(t)
                      )
                        throw Error(
                          "ABTEST的参数abConfig必须为object组成的Array"
                        );
                      for (var e = 0; e < t.length; e++) {
                        if (
                          !t[e] ||
                          "[object Object]" !==
                            Object.prototype.toString.call(t[e])
                        )
                          throw Error(
                            "ABTEST的参数abConfig必须为object组成的Array"
                          );
                        var n = t[e],
                          r = n.oexp,
                          i = n.params;
                        if (
                          !r ||
                          !i ||
                          "[object Object]" !==
                            Object.prototype.toString.call(i)
                        )
                          throw Error("params参数必须是object");
                        if (r.indexOf(".") < 0) throw Error("oexp参数格式有误");
                        var o = i.groupId,
                          a = i.g_trafficAlloc,
                          s = i.salt,
                          c = i.v_trafficAlloc;
                        if (
                          !(
                            o &&
                            s &&
                            a &&
                            "[object Array]" ===
                              Object.prototype.toString.call(a) &&
                            c &&
                            "[object Array]" ===
                              Object.prototype.toString.call(c)
                          )
                        )
                          throw Error("params的参数有误");
                        for (var u = 0; u < a.length; u++) {
                          if (a[u].indexOf("~") < 0)
                            throw Error("params的流量参数有误");
                          var l = a[u].split("~")[0],
                            f = a[u].split("~")[1];
                          if (
                            isNaN(Number(l)) ||
                            isNaN(Number(f)) ||
                            "" === l ||
                            "" === f ||
                            l > 1e4 ||
                            f > 1e4
                          )
                            throw Error("params的流量g_trafficAlloc参数有误");
                        }
                        for (var h = 0; h < c.length; h++) {
                          if (c[h].indexOf("~") < 0)
                            throw Error("params的流量参数有误");
                          var p = c[h].split("~")[0],
                            d = c[h].split("~")[1];
                          if (
                            isNaN(Number(p)) ||
                            isNaN(Number(d)) ||
                            "" === p ||
                            "" === d ||
                            p > 1e4 ||
                            d > 1e4
                          )
                            throw Error("params的流量v_trafficAlloc参数有误");
                        }
                      }
                    }),
                      (this.params = e),
                      (this.mid = n),
                      (this.thisKey = n);
                  }
                  var e, n;
                  return (
                    (e = t),
                    (n = [
                      {
                        key: "config",
                        value: function () {
                          return this.getConfig();
                        },
                      },
                      {
                        key: "to64bit",
                        value: function (t) {
                          var e = i.a.hash_hex([0, 0, 0, 0], t);
                          return _.toNumber(
                            _.remainder(
                              _.asIntN(64, _.BigInt("0x".concat(e))),
                              _.BigInt(1e4)
                            )
                          );
                        },
                      },
                      {
                        key: "getConfig",
                        value: function () {
                          var t = this;
                          return this.params.map(function (e) {
                            for (var n = 0; n < e.length; n++)
                              for (
                                var r = e[n],
                                  i = r.oexp,
                                  o = r.params,
                                  a = o.groupId,
                                  s = o.g_trafficAlloc,
                                  c = o.salt,
                                  u = o.v_trafficAlloc,
                                  l =
                                    (t.to64bit("".concat(t.mid).concat(a)) +
                                      1e4) %
                                    1e4,
                                  f = 0;
                                f < s.length;
                                f++
                              ) {
                                var h = s[f],
                                  p = h.split("~")[0],
                                  d = h.split("~")[1];
                                if (Number(p) <= l && l <= Number(d)) {
                                  var _ =
                                      (t.to64bit(
                                        ""
                                          .concat(t.mid)
                                          .concat(a, ".")
                                          .concat(c)
                                      ) +
                                        1e4) %
                                      1e4,
                                    v = u[0],
                                    m = v.split("~")[0],
                                    g = v.split("~")[1];
                                  if (Number(m) <= _ && _ <= Number(g))
                                    return i;
                                  if (n === e.length - 1) return "";
                                }
                              }
                            return "";
                          });
                        },
                      },
                    ]) && v(e.prototype, n),
                    t
                  );
                })();
                (e.default = m), (window.ABTEST = m);
              },
            ]);
          }),
          "object" == s(e) && "object" == s(t)
            ? (t.exports = a())
            : ((i = []),
              void 0 ===
                (o = "function" === typeof (r = a) ? r.apply(e, i) : r) ||
                (t.exports = o));
      }.call(this, n("QWVB")(t)));
    },
    UUa7: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          {
            kMRC_OK: 0,
            kMRC_FAILED: 1,
            kMRC_NOTFOUND: 2,
            kMRC_UNKNOWN: 3,
            kMRC_DB_FAILED: 4,
            kMRC_REDIS_FAILED: 5,
            kMRC_PARAMETER_ERR: 6,
            kMRC_OVERFREQUENCY: 7,
            kMRC_TARGET_NOTFOUND: 8,
            kMRC_LIMIT_NUM: 9,
            kMRC_NO_CONFIG: 10,
            kMRC_FORBIDDEN: 11,
            kMRC_DCACHE_FAILED: 12,
            kMRC_DUPLICATE: 13,
            kMRC_AUTH_ERR: 101,
            kMRC_INVALID_USER: 102,
            kMRC_UDBTOKEN_ERR: 103,
            kMRC_UDBTOKEN_EXPIRED: 104,
            kMRC_AUTH_UDBBANED: 105,
            kMRC_ANONYMOUS_USER: 106,
            kMRC_CANCELLATION_USER: 107,
            kMRC_JAVATOKEN_FAILED: 108,
            kMRC_NO_PERMISSION: 109,
            kMRC_PIC_AUDIT_FAILED: 150,
            kMRC_PIC_AUDIT_IN_REVIEW: 151,
            kMRC_PRESENTER_AUTH_ERR: 201,
            kMRC_MASTEROFFLINE: 202,
            kMRC_AUTH_FORBID: 203,
            kMRC_PLAYBLACK_FINISHED: 204,
            kMRC_FORBID_AREA: 205,
            kMRC_PRESENTER_ONLINE: 206,
            kMRC_ROOMTYPE_ILLEGAL: 207,
            kMRC_MAX_CHARACTERS: 208,
            kMRC_USER_PROHIBITED_EDIT: 209,
            kMRC_REQ_AUDIT_TEXT_FAILED: 210,
            kMRC_TEXTURL_DECODE_EXCRPT: 211,
            kMRC_TEXTURL_ENCODE_EXCRPT: 212,
            kMRC_REQ_JAVA_FAILED: 213,
            KMRC_ROOM_THEME_EMPTY: 214,
            KMRC_ROOM_NOTEXIST: 215,
            kMRC_SENSITIVE_CONTENT: 216,
            kMRC_PRESENTER_LIVING: 217,
            KMRC_MATCH_FORBID_ROOMTYPE: 218,
            KMRC_MEDIA_SET_ROOM_FAILED: 219,
            kMRC_CHANGE_LIVETYPE_LIMIT: 220,
            kMRC_CAN_NOT_STOP_PAY_LIVE: 221,
            kMRC_CHANGE_LIVETYPE_IN_LINK: 222,
            kMRC_CONTINUE_LIVE: 223,
            kMRC_ROOM_VIEWER_LIMIT: 230,
            kMRC_USER_LEVEL_LIMIT: 231,
            kMRC_MESSAGE_SENWORD: 300,
            kMRC_MESSAGE_BAN: 301,
            kMRC_MESSAGE_BLAKLIST: 302,
            kMRC_MESSAGE_INVALID_EMOTICON: 303,
            kMRC_MESSAGE_GM_REQUEST: 304,
            kMRC_MESSAGE_FANS_ONLY: 305,
            kMRC_MESSAGE_PAYCHAT_FAIL: 306,
            kMRC_MESSAGE_PAYCHAT_NOTENOUGHMONEY: 307,
            kMRC_MESSAGE_FOLLOWER_ONLY: 308,
            kMRC_MESSAGE_SLOWMODE_LIMIT: 309,
            kMRC_MESSAGE_PAYCHAT_ANCHOR_NOT: 310,
            kMRC_MESSAGE_PAYCHAT_NUM_LIMIT: 311,
            kMRC_MESSAGE_PAYCHAT_OPTION_NOT: 312,
            kMRC_MESSAGE_SAY_HELLO_ALREADY: 313,
            kMRC_MESSAGE_BE_BLOCKED: 314,
            kMRC_MESSAGE_SEND_KISS_ALREADY: 315,
            kMRC_CHATBOT_COMMAND_EXIST: 380,
            kMRC_CHATBOT_COMMAND_LIMIT_NUM: 381,
            kMRC_CHATBOT_TIMER_LIMIT_NUM: 382,
            kMRC_CHATBOT_FEATURE_LIMIT_NUM: 383,
            kMRC_CHATBOT_ANCHOR_LEVEL_LIMIT: 384,
            kMRC_CHATBOT_MESSAGE_AUDIT_FAIL: 385,
            kMRC_CHATBOT_COMMAND_UNAVAILABLE: 386,
            kMRC_PROP_LIST_OK: 400,
            kMRC_PROP_LIST_EXIST: 401,
            kMRC_PROP_LIST_NOTEXIST: 402,
            kMRC_NOBLE_VALID_DAY_LIMIT: 450,
            kMRC_NOBLE_JOIN_FAIL: 451,
            kMRC_NOBLE_RENEW_FAIL: 452,
            kMRC_NOBLE_NETWORK_ERROR: 453,
            kMRC_NOBLE_BLACK_USER: 454,
            kMRC_NOBLE_PRICE_CHANGE: 455,
            kMRC_PAYRESPCODE_OK: 500,
            kMRC_PAYRESPCODE_CONFIRM: 501,
            kMRC_PAYRESPCODE_FAIL: 502,
            kMRC_PAYRESPCODE_NOTENOUGHMONEY: 503,
            kMRC_PAYRESPCODE_CLOSE: 504,
            kMRC_PAYRESPCODE_PAYINFORETURN: 505,
            kMRC_PAYRESPCODE_INVAILDTYPE: 506,
            kMRC_PAYRESPCODE_OVERLIMIT: 507,
            kMRC_PAYRESPCODE_UDB: 508,
            kMRC_PAYRESPCODE_ANTIBRUSH: 509,
            kMRC_PAYRESPCODE_PARAM: 510,
            kMRC_PAYRESPCODE_ACCOUNTDJ: 511,
            kMRC_PAYRESPCODE_OVERFREQUENCY: 512,
            kMRC_PAYRESPCODE_OVERTOTALLIMIT: 513,
            kMRC_PAYRESPCODE_ORDEREXIST: 514,
            kMRC_PAYRESPCODE_INBACKLIST: 515,
            kMRC_PAYRESPCODE_UNKNOWN: 518,
            kMRC_PAYRESPCODE_SYSTEM_BUSY: 519,
            kMRC_PAYRESPCODE_GENORDERFAIL: 520,
            kMRC_PAYRESPCODE_PROPSTATUS: 521,
            kMRC_PAYRESPCODE_PAYHTTPTIMEOUT: 522,
            kMRC_PAYRESPCODE_ROOMCACHEFAIL: 523,
            kMRC_PAYRESPCODE_BACKPACK_EXPIRED: 524,
            kMRC_PAYRESPCODE_BACKPACK_FAIL: 525,
            kMRC_PAYRESPCODE_BACKPACK_TAKE: 526,
            kMRC_PAYRESPCODE_USERINFO_FAIL: 527,
            kMRC_PAYRESPCODE_CHIP_GIFT: 528,
            kMRC_PAYRESPCODE_ROYAL_GIFT: 529,
            kMRC_PAYRESPCODE_CANNOT_MYSELF: 530,
            kMRC_PAYRESPCODE_CANNOT_THIS_ROOM: 531,
            kMRC_PAYRESPCODE_CHANNEL_WRONG: 532,
            kMRC_PAYRESPCODE_FAMILY_GIFT: 533,
            kMRC_PAYRESPCODE_COIN_DEALER: 534,
            kMRC_PAYRESPCODE_VOICEROOM: 535,
            kMRC_PAYRESPCODE_LUCKY_BAG_GIFT: 536,
            kMRC_USER_NOTROOMER: 600,
            kMRC_USER_BOXTASK_STATE: 601,
            kMRC_USER_BOXTASK_BOXNOTEXIST: 602,
            kMRC_USER_BOXTASK_TIME: 603,
            kMRC_USER_BOXTASK_STAT: 604,
            kMRC_USER_BOXTASK_GENORDERFAIL: 605,
            kMRC_USER_BOXTASK_JSERVER_TIMEOUT: 606,
            kMRC_USER_BOXTASK_GETCOINFAIL: 607,
            kMRC_USER_BOXTASK_GETCOINF_JSERVERFAIL: 608,
            kMRC_USER_BOXTASK_EXCEED_MAXNUM: 609,
            kMRC_USER_ACT_OBTAINFAIL: 610,
            kMRC_USER_NOT_ANCHOR: 611,
            kMRC_USER_ERR_STATE: 612,
            kMRC_USER_HAS_OBTAIN: 613,
            kMRC_USER_NO_IN_ACT: 614,
            kMRC_USER_OBTAIN_TOO_OFTEN: 615,
            kMRC_USER_USERIVALID: 616,
            kMRC_USER_ALLREADY_MANAGER: 617,
            kMRC_USER_NOT_MANAGER: 618,
            kMRC_USER_MANAGER_NUM_LIMIT: 619,
            kMRC_USER_ALREADY_HAVE_DECORATION: 620,
            kMRC_USER_NOT_HAVE_DECORATION: 621,
            kMRC_DECORATION_NOT_EXIST: 622,
            kMRC_USER_CANCEL: 623,
            kMRC_USER_ROYAL_SYIP_CANNOT_BAN: 624,
            kMRC_USER_ALREADY_CHAT_BAN: 625,
            kMRC_USER_BOXTASK_HAVE_RECEIVE_DOUBLE: 626,
            kMRC_USER_NOT_IN_WHITE_LIST: 627,
            kMRC_BADGE_USING_LIMIT: 628,
            kMRC_NO_MATCHROUND: 700,
            kMRC_MATCHROUND_ERROR: 701,
            kMRC_MSG_RESENT: 800,
            kMRC_MSG_NOT_RECEIVE: 801,
            kMRC_MSG_BLACKWORD: 802,
            kMRC_MSG_STG_NUM_LIMIT: 803,
            kMRC_MSG_TOTAL_NUM_LIMIT: 804,
            kMRC_MSG_ON_BLACKLIST: 805,
            kMRC_MSG_SNDR_SIGNON_TIME_LIMIT: 806,
            kMRC_MSG_NOT_BOTH_FOLLOW: 807,
            kMRC_MSG_GROUP_NOT_OWNER: 808,
            kMRC_MSG_GROUP_KICKEDOUT_LIMIT: 809,
            kMRC_MSG_GROUP_MEMBER_LIMIT: 810,
            kMRC_MSG_GROUP_NOT_MEMBER: 811,
            kMRC_MSG_GROUP_ALREADY_JOIN: 812,
            kMRC_MSG_CREATE_GROUP_NUM_LIMIT: 813,
            kMRC_MSG_INVITE_JOIN_GROUP_LIMIT: 814,
            kMRC_MSG_GROUP_JOIN_AUTH: 815,
            kMRC_MSG_GROUP_AUTN_NOT_JOIN: 816,
            kMRC_MSG_GROUP_AUTN_NOT_LEAVE: 817,
            kMRC_MSG_GROUP_AUTN_NOT_KICK: 818,
            kMRC_MSG_GROUP_AUTN_NOT_SHARE: 819,
            kMRC_MSG_GROUP_AUTN_NOT_ADD: 820,
            kMRC_MSG_STG_FIRST: 821,
            kMRC_MSG_PIC_AUDIT_FAILED: 822,
            kMRC_BSL_EVENT_ALREADY_EXIST: 900,
            kMRC_BSL_EVENT_NOT_EXIST: 901,
            kMRC_BSL_EVENT_OVERTIME: 902,
            kMRC_BSL_CREATE_ID_FAIL: 903,
            kMRC_BSL_AHCHOR_HAS_NOT_AUTH: 904,
            kMRC_BSL_ROOM_IN_EVENT: 905,
            kMRC_BSL_JASON_PARSE_FAIL: 906,
            kMRC_BSL_JASON_ENCODE_FAIL: 907,
            kMRC_BSL_EVENT_STATUS_ERROR: 908,
            kMRC_BSL_EVENT_NOT_FINISH: 909,
            kMRC_BSL_EVENT_TYPE_ERROR: 910,
            kMRC_BSL_FROZEN_FUND_ERROR: 911,
            kMRC_BSL_TRANSFER_FUND_ERROR: 912,
            kMRC_BSL_ROOM_NOT_VALID: 913,
            kMRC_BSL_NOT_ANCHOR_FANS: 914,
            kMRC_BSL_ANCHOR_SELF_LOT: 915,
            kMRC_BSL_NOT_FANS_GROUP: 916,
            kMRC_BSL_LIVE_NOT_ACTIVE: 917,
            kMRC_BSL_NOT_SUBS_AUTH: 918,
            kMRC_ACT_NO_OPEN: 1e3,
            kMRC_ACT_NO_LOGIN: 1001,
            kMRC_ACT_NO_PRIZE_TIMES: 1002,
            kMRC_ACT_NO_PRIZES: 1003,
            kMRC_ACT_NO_EXIST: 1004,
            kMRC_ACT_LIMIT: 1005,
            kMRC_ACT_BLACK: 1006,
            kMRC_ACT_NO_ACCESS_COUNTRY: 1007,
            kMRC_ACT_END: 1008,
            kMRC_GOLD_LACK: 1009,
            kMRC_DIAMOND_LACK: 1010,
            kMRC_JSERVER_BALANCE_FAIL: 1011,
            kMRC_LOTTERY_PLATFORM_LIMIT: 1012,
            kMRC_ACT_DAY_TIMES_LIMIT: 1013,
            kMRC_ERROR_OPEN_LOTTERY_FROZEN_FUND: 1014,
            kMRC_ERROR_OPEN_LOTTERY_THAW_FUND: 1015,
            kMRC_ERROR_CAL_PRIZE: 1016,
            kMRC_ERROR_GENERATE_UNIQUE: 1017,
            kMRC_ERROR_CAN_NOT_REMOVE: 1018,
            kMRC_ERROR_REPEAT_REMOVE: 1019,
            kMRC_ERROR_UNMATCH_REMOVE_PRIZEID: 1020,
            kMRC_TASK_UNFINISH: 1021,
            kMRC_REPEAT_RECV_PRIZE: 1022,
            kMRC_NO_TASK: 1023,
            kMRC_NO_ACCESS_ROOMTYPE: 1024,
            kMRC_ROOM_GRADE_NOT_OPEN: 1025,
            kMRC_ROOM_GRADE_CANNOT_CHG: 1026,
            kMRC_ROOM_GRADE_PAY_REPEAT: 1027,
            kMRC_ROOM_GRADE_PAY_SYS_FAILED: 1028,
            kMRC_ROOM_GRADE_LACK_MONEY: 1029,
            kMRC_ROOM_GRADE_PAY_ERROR: 1030,
            kMRC_CREATE_VOICEROOM_FAILED: 1031,
            kMRC_VOICEROOM_MEMBER_INFO_FAILED: 1032,
            kMRC_VOICEROOM_IN_ROOM: 1033,
            kMRC_VOICEROOM_NOT_IN_ROOM: 1034,
            kMRC_VOICEROOM_REPEAT_JOIN: 1035,
            kMRC_VOICEROOM_MEM_COUNT_FAILED: 1036,
            kMRC_VOICEROOM_JOIN_LIMIT: 1037,
            kMRC_VOICEROOM_FULL: 1038,
            kMRC_VOICEROOM_JOIN_LACK_MONEY: 1039,
            kMRC_VOICEROOM_JOIN_PAY_ERROR: 1040,
            kMRC_VOICEROOM_IS_MANAGER: 1041,
            kMRC_VOICEROOM_IS_ROOM_OWNER: 1042,
            kMRC_VOICEROOM_NOT_MANAGER: 1043,
            kMRC_VOICEROOM_MANAGER_LIMIT: 1044,
            kMRC_VOICEROOM_NOT_ROOM_OWNER: 1045,
            kMRC_VOICEROOM_DAY_REWARD_LIMIT: 1046,
            kMRC_VOICEROOM_SET_MANAGER_NO_PERMISSION: 1047,
            kMRC_VOICEROOM_SET_MANAGER_JOIN_LIMIT: 1048,
            kMRC_VOICEROOM_SET_MANAGER_ROOMFULL: 1049,
            kMRC_VOICEROOM_FIRE_MANAGER_NO_PERMISSION: 1050,
            kMRC_VOICEROOM_BE_FIRED_NOT_MANAGER: 1051,
            kMRC_VOICEROOM_CONVENE_LIMIT: 1060,
            kMRC_VOTE_PROHIBIT: 1100,
            kMRC_VOTE_ACTIVING: 1102,
            kMRC_VOTE_NOACTIVING: 1104,
            kMRC_VOTE_AUDIT_ERROR: 1105,
            kMRC_SEN_REPEAT_ADD: 1200,
            kMRC_UNEXPECTED_ANCHOR_LEVEL: 1300,
            kMRC_ANCHOR_NOT_FOUND: 1301,
            kMRC_REDIS_KEY_EXISTS: 1302,
            kMRC_ANCHOR_TASK_ALREADY_COMPLETE: 1303,
            kMRC_ANCHOR_UNEXPECTED_TASK_TYPE: 1304,
            kMRC_ANCHOR_PARSE_TASK_PARAMS_FAILED: 1305,
            kMRC_ANCHOR_TASK_ADD_EXP: 1306,
            kMRC_ANCHOR_TASK_DETAIL_MODIFED: 1307,
            kMRC_ANCHOR_UNEXPECTED_PARAM: 1308,
            kMRC_ANCHOR_PK_INVALID_DURATION: 1321,
            kMRC_ANCHOR_PK_FROM_ANCHOR_WAIT_ANSWER: 1322,
            kMRC_ANCHOR_PK_FROM_ANCHOR_TO_ANSWER: 1323,
            kMRC_ANCHOR_PK_FROM_ANCHOR_PKING: 1324,
            kMRC_ANCHOR_PK_FROM_ANCHOR_SHOW_RESULT: 1325,
            kMRC_ANCHOR_PK_FROM_ANCHOR_FLEE_PUNISH: 1326,
            kMRC_ANCHOR_PK_TO_ANCHOR_WAIT_ANSWER: 1327,
            kMRC_ANCHOR_PK_TO_ANCHOR_TO_ANSWER: 1328,
            kMRC_ANCHOR_PK_TO_ANCHOR_PKING: 1329,
            kMRC_ANCHOR_PK_TO_ANCHOR_SHOW_RESULT: 1330,
            kMRC_ANCHOR_PK_TO_ANCHOR_FLEE_PUNISH: 1331,
            kMRC_ANCHOR_PK_ASK_PK_DAILY_MAX_COUNT: 1332,
            kMRC_ANCHOR_PK_ANSWER_PK_TIMEOUT: 1333,
            kMRC_ANCHOR_PK_FROM_ANCHOR_STATE_ERROR: 1334,
            kMRC_ANCHOR_PK_TO_ANCHOR_STATE_ERROR: 1335,
            kMRC_ANCHOR_PK_NOT_IN_LIVE_INTER: 1336,
            kMRC_ANCHOR_PK_PK_NOT_FOUND: 1337,
            kMRC_ANCHOR_PK_PUNISH_CONTENT_SENSITIVE: 1338,
            kMRC_ANCHOR_PK_NOT_HAVE_ACTIVITY: 1339,
            kMRC_ANCHOR_PK_LOW_VERSION: 1340,
            kMRC_BOX_LOTTERY_UNEXPECTED_ROUND: 1400,
            kMRC_BOX_LOTTERY_ROUND_NOT_CLOSE: 1401,
            kMRC_BOX_LOTTERY_UNEXPECTED_BET_GEMS: 1402,
            kMRC_BOX_LOTTERY_UNEXPECTED_BOX_ID: 1403,
            kMRC_BOX_LOTTERY_CONSUME_BLACK_USER: 1404,
            kMRC_BOX_LOTTERY_CONSUME_BAD_PARAM: 1405,
            kMRC_BOX_LOTTERY_REPEAT_CONSUME: 1406,
            kMRC_BOX_LOTTERY_CONSUME_REQUEST_TOO_OFTEN: 1407,
            kMRC_BOX_LOTTERY_CONSUME_BAD_BUSINESSID: 1408,
            kMRC_BOX_LOTTERY_INSUFFICIENT_BALANCE: 1409,
            kMRC_BOX_LOTTERY_LACK_OF_BALANCE: 1410,
            kMRC_BOX_LOTTERY_CONSUME_ERROR: 1411,
            kMRC_BOX_LOTTERY_CONSUME_INTERNAL_ERROR: 1412,
            kMRC_BOX_LOTTERY_CONSUME_IP_ERROR: 1413,
            kMRC_BOX_LOTTERY_CONSUME_UDB_TOKEN_ERROR: 1414,
            kMRC_BOX_LOTTERY_CHECK_CURRENCY_FAIL: 1415,
            kMRC_BOX_LOTTERY_MQ_CONSUME_ERROR: 1416,
            kMRC_BOX_LOTTERY_CONSUME_AMOUNT_ERROR: 1417,
            kMRC_BOX_LOTTERY_CONSUME_GIF_ERROR: 1418,
            kMRC_BOX_LOTTERY_CONSUME_GIF_PRICE_ERROR: 1419,
            kMRC_BOX_LOTTERY_CONSUME_GIF_NOT_CONSISTENCY: 1420,
            kMRC_BOX_LOTTERY_CONSUME_NO_BETTING: 1421,
            kMRC_BOX_LOTTERY_CONSUME_SIGN_ERROR: 1422,
            kMRC_BOX_LOTTERY_NOT_IN_WHITE_LIST: 1423,
            kMRC_BOX_LOTTERY_BOX_EXCESS_LIMIT: 1424,
            kMRC_BOX_LOTTERY_NOT_BET_STAGE: 1425,
            kMRC_AV_POST_CDN_REQ_FAILED: 1500,
            kMRC_AV_POST_UNEXPECTED_PATH: 1501,
            kMRC_AV_POST_UNEXPECTED_TX_VOD_EVENT: 1502,
            kMRC_JSON_PARSE_FAILED: 1503,
            kMRC_AV_POST_UNEXPECTED_CDN: 1504,
            kMRC_AV_POST_SIGN_NOT_MATCH: 1505,
            kMRC_AV_POST_TASK_CALLBACK_HANDLED: 1506,
            kMRC_AV_POST_TASK_RUN_FAILED: 1507,
            kMRC_AV_POST_RSC_NOT_FOUND_IN_CALLBACK: 1508,
            kMRC_AV_POST_CDN_CONFIG_NOT_FOUND: 1509,
            kMRC_AV_POST_TASK_ID_NOT_FOUND: 1510,
            kMRC_AV_POST_NOT_SUPPORT_YET: 1511,
            kMRC_AV_POST_NEED_COLLECT: 1512,
            kMRC_AV_POST_WAIT_COLLECT: 1513,
            kMRC_BG_NO_BOX: 1600,
            kMRC_BG_USER_AWARDED: 1601,
            kMRC_BG_AWARD_FAILED: 1602,
            kMRC_BG_NO_AWARD: 1603,
            kMRC_BG_NOT_AWARDING: 1604,
            kMRC_CHECKIN_ALREADY_CHECKIN: 1700,
            kMRC_CHECKIN_ACTIVITYID_ERR: 1701,
            kMRC_CHECKIN_ACTIVITY_NOT_READY: 1702,
            kMRC_CHECKIN_ACTIVITY_NO_COUNTRY: 1703,
            kMRC_LUCKYGIFT_NOT_BEGIN: 1800,
            kMRC_TASKBOX_ACTIVITY_NOT_FOUND: 1900,
            kMRC_TASKBOX_ACTIVITY_NO_COUNTRY: 1901,
            kMRC_TASKBOX_USER_GAME_OVER: 1902,
            kMRC_TASKBOX_NO_REWARD_LEFT: 1903,
            kMRC_PICKME_ANCHOR_NOT_AUTH: 2e3,
            kMRC_PICKME_NOT_FOUND: 2001,
            kMRC_PICKME_STATE_ERROR: 2002,
            kMRC_PICKME_TYPE_ERROR: 2003,
            kMRC_PICKME_SELF_PART: 2004,
            kMRC_PICKME_NOT_QUALIFIED: 2005,
            kMRC_PICKME_AUDIT_ERROR: 2006,
            kMRC_PICKME_INTASK_MAXCOUNTS: 2007,
            kMRC_PICKME_FROZEN_FUND_ERROR: 2008,
            kMRC_PICKME_NOT_SHARED: 2009,
            kMRC_PICKME_NOT_FANS_GROUP: 2010,
            kMRC_PICKME_NOT_SUBS: 2011,
            kMRC_PICKME_AWARD_MAXNUM: 2012,
            kMRC_PICKME_ONGOING_EXIST: 2013,
            kMRC_BIND_DUPLICATE: 2100,
            kMRC_LIVE_IS_ON: 2101,
            kMRC_START_REPUSH: 2102,
            kMRC_REPUSH_DOING: 2103,
            kMRC_MEETING_NOT_SUPPORT_VERSION: 2200,
            kMRC_MEETING_INVAILD_SESSIONID: 2201,
            kMRC_MEETING_UP_ALREADY: 2202,
            kMRC_MEETING_WAIT_ALREADY: 2203,
            kMRC_MEETING_INVITE_INVAILD: 2204,
            kMRC_MEETING_INVITE_TIMEOUT: 2205,
            kMRC_MEETING_CLOSED: 2206,
            kMRC_MEETING_NOT_UP: 2207,
            kMRC_MEETING_NOT_WAIT: 2208,
            kMRC_MEETING_ANCHOR_MUTE_ALL: 2209,
            kMRC_MEETING_ANCHOR_LOCK_ALL: 2210,
            kMRC_MEETING_WAIT_REACH_LIMIT: 2211,
            kMRC_MEETING_USER_MUTE_SELF_OR_EXIT: 2212,
            kMRC_MEETING_BANNED: 2213,
            kMRC_MEETING_BANNED_BY_AUTH: 2214,
            kMRC_LINKMIC_NOT_SUPPORT_VERSION: 2300,
            kMRC_LINKMIC_NOT_SUPPORT_GAMEID: 2301,
            kMRC_LINKMIC_NOT_SPPPORT_AREA: 2302,
            kMRC_LINKMIC_AIR_AUTH_FAILED: 2303,
            kMRC_LINKMIC_LIVE_OFFLINE: 2304,
            kMRC_LINKMIC_REFUSE_INVITE_BY_CONF: 2305,
            kMRC_LINKMIC_PROCESSING: 2306,
            kMRC_LINKMIC_RANDOM_NOT_OPEN: 2307,
            kMRC_LINKMIC_RANDOM_WAITING: 2308,
            kMRC_LINKMIC_RANDOM_NOT_WAITING: 2309,
            kMRC_LINKMIC_RANDOM_WAIT_RESPONSE: 2310,
            kMRC_LINKMIC_RANDOM_INVAILD_MATCH: 2311,
            kMRC_LINKMIC_RANK_PK_NOT_OPEN: 2312,
            kMRC_LINKMIC_RANK_PK_WAITING: 2313,
            kMRC_LINKMIC_RANK_PK_NOT_WAITING: 2314,
            kMRC_LINKMIC_RANK_PK_WAIT_RESPONSE: 2315,
            kMRC_LINKMIC_RANK_PK_INVAILD_MATCH: 2316,
            kMRC_LINKMIC_RANK_PK_NOT_AVAILABLE_PK: 2317,
            kMRC_LINKMIC_AUDIENCE_WAIT_FULL: 2350,
            kMRC_LINKMIC_AUDIENCE_NOT_IN_ROOM: 2351,
            kMRC_LINKMIC_AUDIENCE_NOT_AVAILABLE_SEAT: 2352,
            kMRC_AIR_RAID_PROCESSING: 2400,
            kMRC_WEALTH_FAMILY_CREATE_LIMIT: 2500,
            kMRC_WEALTH_FAMILY_NAME_ILLEAGE: 2501,
            kMRC_WEALTH_FAMILY_SLOGAN_ILLEAGE: 2502,
            kMRC_WEALTH_FAMILY_NAMEREPEAT: 2503,
            kMRC_WEALTH_FAMILY_CREATE_NOAUTH: 2504,
            kMRC_WEALTH_FAMILY_IN_OTHER_FAMILY: 2505,
            kMRC_WEALTH_FAMILY_APPLY_WAIT: 2506,
            kMRC_WEALTH_FAMILY_NOT_OWNER: 2507,
            kMRC_WEALTH_FAMILY_MEMBER_LIMIT: 2508,
            kMRC_WEALTH_FAMILY_REMOVE_OWNER: 2509,
            kMRC_WEALTH_FAMILY_NOT_MEMBER: 2510,
            kMRC_WEALTH_FAMILY_APPLY_EXPIRE: 2511,
            kMRC_WEALTH_FAMILY_REVOKE_PUNISH: 2512,
            kMRC_WEALTH_FAMILY_USER_REVOKE: 2513,
            kMRC_WEALTH_FAMILY_NOT_AUTHORITY: 2514,
            kMRC_WEALTH_FAMILY_NOT_ENOUGH: 2515,
            kMRC_WEALTH_FAMILY_WEALTH_NOT_ENOUGH: 2516,
            kMRC_WEALTH_FAMILY_CLUMP_PROCESSING: 2517,
            kMRC_WEALTH_FAMILY_CLUMP_NUM_LIMIT: 2518,
            kMRC_WEALTH_FAMILY_FOLLOW_USER_LIMIT: 2519,
            kMRC_WEALTH_FAMILY_FOLLOW_FAMILY_LIMIT: 2520,
            kMRC_WEALTH_FAMILY_FOLLOW_MEMBER_UNFOLLOW: 2521,
            kMRC_WEALTH_FAMILY_AVATAR_IN_REVIEW: 2522,
            kMRC_WEALTH_FAMILY_AVATAR_AUDIT_LIMIT: 2523,
            kMRC_THIRD_PARTY_END: 2600,
            kMRC_PROMOTRE_OVERDUE: 2601,
            kMRC_START_ACTIVITY_FAIL: 2602,
            kMRC_REPEAT_REQUEST: 2603,
            kMRC_IG_NOT_FOUND: 2701,
            kMRC_IG_STATUS_ERROR: 2702,
            kMRC_IG_TYPE_ERROR: 2703,
            kMRC_IG_SELF_PART: 2704,
            kMRC_IG_AUDIT_ERROR: 2706,
            kMRC_IG_FROZEN_FUND_ERROR: 2708,
            kMRC_IG_ACTIVITY_ALREADY_EXECUTED: 2709,
            kMRC_SLOTMACHINE_NOT_FREE_MODE: 2800,
            kMRC_SLOTMACHINE_NOT_IN_WHITE_LIST: 2801,
            kMRC_SLOTMACHINE_IN_BLACK_LIST: 2802,
            kMRC_SLOTMACHINE_INSUFFICIENT_BALANCE_EXCHANGE: 2803,
            kMRC_ROULETTE_NOT_BET_STAGE: 2804,
            kMRC_GAMEPROMOTE_ACCEPTED: 2805,
            kMRC_SLOTMACHINE_JACKPOT_INBALANCE: 2806,
            kMRC_PRIZE_POOL_RUN_OUT: 2807,
            kMRC_BAUCUA_NOT_BET_STATUS: 2808,
            kMRC_AD_WATCHTOGETHER_NOT_AUTH: 2901,
            kMRC_TURNTABLE_START_ERROR: 3e3,
            kMRC_TURNTABLE_NOT_ENOUGH_MONEY: 3001,
            kMRC_TURNTABLE_STATUS_ERROR: 3002,
            kMRC_TURNTABLE_NOT_ACTIVITY: 3003,
            kMRC_TURNTABLE_ENOUGH_PLAYER: 3004,
            kMRC_TURNTABLE_ALREADY_PARTIC: 3005,
            kMRC_TURNTABLE_ROOM_NOT_ONLINE: 3006,
            kMRC_TURNTABLE_DEDUCTION_FUND_FAIL: 3007,
            kMRC_TURNTABLE_REQ_FUNC_FAIL: 3008,
            kMRC_TURNTABLE_START_ERR_AUTH: 3009,
            kMRC_TURNTABLE_PARTICIPATE_ERR_AUTH: 3010,
            kMRC_TURNTABLE_GOING_ERR_AUTH: 3011,
            kMRC_TURNTABLE_HS_START_ERR_AUTH: 3030,
            kMRC_TURNTABLE_HS_PARTICIPATE_ERR_AUTH: 3031,
            kMRC_TURNTABLE_HS_GO_ERR_AUTH: 3032,
            kMRC_TURNTABLE_HS_EXIT_ERR_AUTH: 3033,
            kMRC_TURNTABLE_HS_START_ERROR: 3034,
            kMRC_ITEM_TALLY_TEXT_AUTH_ERR: 3100,
            kMRC_ANCHOR_GROWTH_TASK_NOT_START: 3200,
            kMRC_ANCHOR_GROWTH_TASK_EXPIRED: 3201,
            kMRC_VOICE_ROOM_PAIRING_NOT_IN_WHITELIST: 3300,
            kMRC_VOICE_ROOM_PAIRING_NO_PERMISSION: 3301,
            kMRC_VOICE_ROOM_PAIRING_STATUS_ERR: 3302,
            kMRC_VOICE_ROOM_PAIRING_NOT_ENOUGH_CONSUMPTION: 3303,
            KMRC_FAMILY_CLUMP_START_ERR_NOT_AUTH: 3400,
            KMRC_FAMILY_CLUMP_START_ERR_LIMIT: 3401,
            KMRC_FAMILY_CLUMP_START_ERR_DOING: 3402,
            KMRC_FAMILY_CLUMP_PARTIC_ERR_NOT_FOLLOW: 3403,
            KMRC_FAMILY_CLUMP_PARTIC_ERR_ALREADY: 3404,
            KMRC_FAMILY_CLUMP_START_ERR_NOT_ENOUGH: 3405,
            KMRC_FAMILY_CLUMP_START_ERR_ROOM_LIMIT: 3406,
            KMRC_FAMILY_CLUMP_PARTIC_ERR_NOT_ACTIVITY: 3407,
            KMRC_DRAW_PARTIC_ERR_NOT_AUTH: 3520,
            KMRC_DRAW_ERR_TIMES_LIMIT: 3522,
            KMRC_DRAW_PARTIC_ERR_FAIL: 3521,
            KMRC_DRAW_PARTIC_ERR_ACTIVITY_END: 3523,
            KMRC_DRAW_PARTIC_ERR_NOT_ACTIVITY: 3524,
            KMRC_DRAW_PARTIC_ERR_STATUS_ERR: 3525,
            KMRC_DRAW_ERR_NOT_ACTIVITY: 3526,
            KMRC_DRAW_ERR_STATUS_ERR: 3527,
            KMRC_DRAW_ERR_REPEAT_REQUEST: 3528,
            KMRC_DRAW_GET_ERR_SOLD_OUT: 3530,
            KMRC_DRAW_GET_ERR_DO_REWARD: 3531,
            KMRC_FALL_GIFT_RECEIVE_ERR_ROOM_LIMIT: 3600,
            KMRC_FALL_GIFT_RECEIVE_ERR_TOTAL_LIMIT: 3601,
            KMRC_VINDICATE_WALL_NO_BALANCE: 3700,
            KMRC_VINDICATE_WALL_DEDUCTION_FAIL: 3701,
            KMRC_VINDICATE_WALL_TEXT_AUDIT: 3702,
            KMRC_VINDICATE_WALL_ACT_TIME_LIMIT: 3703,
            kMRC_REPLAY_REALTIME_NOT_SUPPORT: 3800,
            kMRC_BOSS_GAME_ERR_NO_PERMISSION: 3900,
            kMRC_BOSS_GAME_ERR_TIMES_LIMIT: 3901,
            kMRC_BOSS_GAME_ERR_IN_BLACK_LIST: 3902,
            kMRC_BOSS_GAME_ERR_IS_ONGOING: 3903,
            KMRC_BOSS_GAME_ERR_NOT_OPEN: 3904,
            kMRC_FISING_PRIZE_POOL_ERROR: 4e3,
            kMRC_FISING_GAME_NOT_EXIST: 4001,
            kMRC_FISING_LACK_OF_BALANCE: 4002,
            kMRC_FISING_GAME_NUM_LIMIT: 4003,
            kMRC_FISING_CATCH_REQ_REPEAT: 4004,
          });
      (r.a.NimoRspCode = i), (e.a = i);
    },
    Ukdx: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return S;
      });
      var r = n("V4gF"),
        i = n.n(r),
        o = (n("28PD"), n("oE18")),
        a = n("rjEi"),
        s = n("w4Qk"),
        c = n("ucgO"),
        u = n("fMM5"),
        l = n("+6U0"),
        f = n("7/jX"),
        h = n("8m9Z");
      function p() {
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
      }
      function d(t, e, n) {
        return (d = p()
          ? Reflect.construct
          : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var i = new (Function.bind.apply(t, r))();
              return n && Object(h.a)(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function _(t) {
        var e = "function" === typeof Map ? new Map() : void 0;
        return (_ = function (t) {
          if (
            null === t ||
            ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return t;
          var n;
          if ("function" !== typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
          }
          function r() {
            return d(t, arguments, Object(f.a)(this).constructor);
          }
          return (
            (r.prototype = Object.create(t.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            Object(h.a)(r, t)
          );
        })(t);
      }
      var v = n("Y5An"),
        m = n.n(v);
      function g(t, e) {
        var n =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return y(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return y(t, e);
            })(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
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
            r = Object(f.a)(t);
          if (e) {
            var i = Object(f.a)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return Object(l.a)(this, n);
        };
      }
      var b = (function (t, e, n) {
          Object(u.a)(i, t);
          var r = R(i);
          function i() {
            var t,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if (
              (Object(s.a)(this, i),
              (t = r.call(this)),
              !(e.maxSize && e.maxSize > 0))
            )
              throw new TypeError("`maxSize` must be a number greater than 0");
            if ("number" === typeof e.maxAge && 0 === e.maxAge)
              throw new TypeError("`maxAge` must be a number greater than 0");
            return (
              (t.maxSize = e.maxSize),
              (t.maxAge = e.maxAge || Number.POSITIVE_INFINITY),
              (t.onEviction = e.onEviction),
              (t.cache = new Map()),
              (t.oldCache = new Map()),
              (t._size = 0),
              t
            );
          }
          return (
            Object(c.a)(i, [
              {
                key: "_emitEvictions",
                value: function (t) {
                  if ("function" === typeof this.onEviction) {
                    var e,
                      n = g(t);
                    try {
                      for (n.s(); !(e = n.n()).done; ) {
                        var r = Object(a.a)(e.value, 2),
                          i = r[0],
                          o = r[1];
                        this.onEviction(i, o.value);
                      }
                    } catch (s) {
                      n.e(s);
                    } finally {
                      n.f();
                    }
                  }
                },
              },
              {
                key: "_deleteIfExpired",
                value: function (t, e) {
                  return (
                    "number" === typeof e.expiry &&
                    e.expiry <= Date.now() &&
                    ("function" === typeof this.onEviction &&
                      this.onEviction(t, e.value),
                    this.delete(t))
                  );
                },
              },
              {
                key: "_getOrDeleteIfExpired",
                value: function (t, e) {
                  if (!1 === this._deleteIfExpired(t, e)) return e.value;
                },
              },
              {
                key: "_getItemValue",
                value: function (t, e) {
                  return e.expiry ? this._getOrDeleteIfExpired(t, e) : e.value;
                },
              },
              {
                key: "_peek",
                value: function (t, e) {
                  var n = e.get(t);
                  return this._getItemValue(t, n);
                },
              },
              {
                key: "_set",
                value: function (t, e) {
                  this.cache.set(t, e),
                    this._size++,
                    this._size >= this.maxSize &&
                      ((this._size = 0),
                      this._emitEvictions(this.oldCache),
                      (this.oldCache = this.cache),
                      (this.cache = new Map()));
                },
              },
              {
                key: "_moveToRecent",
                value: function (t, e) {
                  this.oldCache.delete(t), this._set(t, e);
                },
              },
              {
                key: "_entriesAscending",
                value: m.a.mark(function t() {
                  var e, n, r, i, o, s, c, u, l, f, h, p;
                  return m.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (e = g(this.oldCache)), (t.prev = 1), e.s();
                          case 3:
                            if ((n = e.n()).done) {
                              t.next = 13;
                              break;
                            }
                            if (
                              ((r = n.value),
                              (i = Object(a.a)(r, 2)),
                              (o = i[0]),
                              (s = i[1]),
                              this.cache.has(o))
                            ) {
                              t.next = 11;
                              break;
                            }
                            if (!1 !== this._deleteIfExpired(o, s)) {
                              t.next = 11;
                              break;
                            }
                            return (t.next = 11), r;
                          case 11:
                            t.next = 3;
                            break;
                          case 13:
                            t.next = 18;
                            break;
                          case 15:
                            (t.prev = 15), (t.t0 = t.catch(1)), e.e(t.t0);
                          case 18:
                            return (t.prev = 18), e.f(), t.finish(18);
                          case 21:
                            (c = g(this.cache)), (t.prev = 22), c.s();
                          case 24:
                            if ((u = c.n()).done) {
                              t.next = 33;
                              break;
                            }
                            if (
                              ((l = u.value),
                              (f = Object(a.a)(l, 2)),
                              (h = f[0]),
                              (p = f[1]),
                              !1 !== this._deleteIfExpired(h, p))
                            ) {
                              t.next = 31;
                              break;
                            }
                            return (t.next = 31), l;
                          case 31:
                            t.next = 24;
                            break;
                          case 33:
                            t.next = 38;
                            break;
                          case 35:
                            (t.prev = 35), (t.t1 = t.catch(22)), c.e(t.t1);
                          case 38:
                            return (t.prev = 38), c.f(), t.finish(38);
                          case 41:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [
                      [1, 15, 18, 21],
                      [22, 35, 38, 41],
                    ]
                  );
                }),
              },
              {
                key: "get",
                value: function (t) {
                  if (this.cache.has(t)) {
                    var e = this.cache.get(t);
                    return this._getItemValue(t, e);
                  }
                  if (this.oldCache.has(t)) {
                    var n = this.oldCache.get(t);
                    if (!1 === this._deleteIfExpired(t, n))
                      return this._moveToRecent(t, n), n.value;
                  }
                },
              },
              {
                key: "set",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r = n.maxAge,
                    i = void 0 === r ? this.maxAge : r,
                    o =
                      "number" === typeof i && i !== Number.POSITIVE_INFINITY
                        ? Date.now() + i
                        : void 0;
                  this.cache.has(t)
                    ? this.cache.set(t, { value: e, expiry: o })
                    : this._set(t, { value: e, expiry: o });
                },
              },
              {
                key: "has",
                value: function (t) {
                  return this.cache.has(t)
                    ? !this._deleteIfExpired(t, this.cache.get(t))
                    : !!this.oldCache.has(t) &&
                        !this._deleteIfExpired(t, this.oldCache.get(t));
                },
              },
              {
                key: "peek",
                value: function (t) {
                  return this.cache.has(t)
                    ? this._peek(t, this.cache)
                    : this.oldCache.has(t)
                    ? this._peek(t, this.oldCache)
                    : void 0;
                },
              },
              {
                key: "delete",
                value: function (t) {
                  var e = this.cache.delete(t);
                  return e && this._size--, this.oldCache.delete(t) || e;
                },
              },
              {
                key: "clear",
                value: function () {
                  this.cache.clear(), this.oldCache.clear(), (this._size = 0);
                },
              },
              {
                key: "resize",
                value: function (t) {
                  if (!(t && t > 0))
                    throw new TypeError(
                      "`maxSize` must be a number greater than 0"
                    );
                  var e = Object(o.a)(this._entriesAscending()),
                    n = e.length - t;
                  n < 0
                    ? ((this.cache = new Map(e)),
                      (this.oldCache = new Map()),
                      (this._size = e.length))
                    : (n > 0 && this._emitEvictions(e.slice(0, n)),
                      (this.oldCache = new Map(e.slice(n))),
                      (this.cache = new Map()),
                      (this._size = 0)),
                    (this.maxSize = t);
                },
              },
              {
                key: "keys",
                value: m.a.mark(function t() {
                  var e, n, r, i;
                  return m.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (e = g(this)), (t.prev = 1), e.s();
                          case 3:
                            if ((n = e.n()).done) {
                              t.next = 9;
                              break;
                            }
                            return (
                              (r = Object(a.a)(n.value, 1)),
                              (i = r[0]),
                              (t.next = 7),
                              i
                            );
                          case 7:
                            t.next = 3;
                            break;
                          case 9:
                            t.next = 14;
                            break;
                          case 11:
                            (t.prev = 11), (t.t0 = t.catch(1)), e.e(t.t0);
                          case 14:
                            return (t.prev = 14), e.f(), t.finish(14);
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[1, 11, 14, 17]]
                  );
                }),
              },
              {
                key: "values",
                value: m.a.mark(function t() {
                  var e, n, r, i;
                  return m.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (e = g(this)), (t.prev = 1), e.s();
                          case 3:
                            if ((n = e.n()).done) {
                              t.next = 9;
                              break;
                            }
                            return (
                              (r = Object(a.a)(n.value, 2)),
                              (i = r[1]),
                              (t.next = 7),
                              i
                            );
                          case 7:
                            t.next = 3;
                            break;
                          case 9:
                            t.next = 14;
                            break;
                          case 11:
                            (t.prev = 11), (t.t0 = t.catch(1)), e.e(t.t0);
                          case 14:
                            return (t.prev = 14), e.f(), t.finish(14);
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[1, 11, 14, 17]]
                  );
                }),
              },
              {
                key: e,
                value: m.a.mark(function () {
                  var t, e, n, r, i, o, s, c, u, l, f, h;
                  return m.a.wrap(
                    function (p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            (t = g(this.cache)), (p.prev = 1), t.s();
                          case 3:
                            if ((e = t.n()).done) {
                              p.next = 12;
                              break;
                            }
                            if (
                              ((n = e.value),
                              (r = Object(a.a)(n, 2)),
                              (i = r[0]),
                              (o = r[1]),
                              !1 !== this._deleteIfExpired(i, o))
                            ) {
                              p.next = 10;
                              break;
                            }
                            return (p.next = 10), [i, o.value];
                          case 10:
                            p.next = 3;
                            break;
                          case 12:
                            p.next = 17;
                            break;
                          case 14:
                            (p.prev = 14), (p.t0 = p.catch(1)), t.e(p.t0);
                          case 17:
                            return (p.prev = 17), t.f(), p.finish(17);
                          case 20:
                            (s = g(this.oldCache)), (p.prev = 21), s.s();
                          case 23:
                            if ((c = s.n()).done) {
                              p.next = 33;
                              break;
                            }
                            if (
                              ((u = c.value),
                              (l = Object(a.a)(u, 2)),
                              (f = l[0]),
                              (h = l[1]),
                              this.cache.has(f))
                            ) {
                              p.next = 31;
                              break;
                            }
                            if (!1 !== this._deleteIfExpired(f, h)) {
                              p.next = 31;
                              break;
                            }
                            return (p.next = 31), [f, h.value];
                          case 31:
                            p.next = 23;
                            break;
                          case 33:
                            p.next = 38;
                            break;
                          case 35:
                            (p.prev = 35), (p.t1 = p.catch(21)), s.e(p.t1);
                          case 38:
                            return (p.prev = 38), s.f(), p.finish(38);
                          case 41:
                          case "end":
                            return p.stop();
                        }
                    },
                    o,
                    this,
                    [
                      [1, 14, 17, 20],
                      [21, 35, 38, 41],
                    ]
                  );
                }),
              },
              {
                key: "entriesDescending",
                value: m.a.mark(function t() {
                  var e, n, r, i, s, c, u, l, f, h, p;
                  return m.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (e = Object(o.a)(this.cache)), (n = e.length - 1);
                          case 2:
                            if (!(n >= 0)) {
                              t.next = 12;
                              break;
                            }
                            if (
                              ((r = e[n]),
                              (i = Object(a.a)(r, 2)),
                              (s = i[0]),
                              (c = i[1]),
                              !1 !== this._deleteIfExpired(s, c))
                            ) {
                              t.next = 9;
                              break;
                            }
                            return (t.next = 9), [s, c.value];
                          case 9:
                            --n, (t.next = 2);
                            break;
                          case 12:
                            (e = Object(o.a)(this.oldCache)),
                              (u = e.length - 1);
                          case 14:
                            if (!(u >= 0)) {
                              t.next = 25;
                              break;
                            }
                            if (
                              ((l = e[u]),
                              (f = Object(a.a)(l, 2)),
                              (h = f[0]),
                              (p = f[1]),
                              this.cache.has(h))
                            ) {
                              t.next = 22;
                              break;
                            }
                            if (!1 !== this._deleteIfExpired(h, p)) {
                              t.next = 22;
                              break;
                            }
                            return (t.next = 22), [h, p.value];
                          case 22:
                            --u, (t.next = 14);
                            break;
                          case 25:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                }),
              },
              {
                key: "entriesAscending",
                value: m.a.mark(function t() {
                  var e, n, r, i, o;
                  return m.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (e = g(this._entriesAscending())),
                              (t.prev = 1),
                              e.s();
                          case 3:
                            if ((n = e.n()).done) {
                              t.next = 9;
                              break;
                            }
                            return (
                              (r = Object(a.a)(n.value, 2)),
                              (i = r[0]),
                              (o = r[1]),
                              (t.next = 7),
                              [i, o.value]
                            );
                          case 7:
                            t.next = 3;
                            break;
                          case 9:
                            t.next = 14;
                            break;
                          case 11:
                            (t.prev = 11), (t.t0 = t.catch(1)), e.e(t.t0);
                          case 14:
                            return (t.prev = 14), e.f(), t.finish(14);
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[1, 11, 14, 17]]
                  );
                }),
              },
              {
                key: "size",
                get: function () {
                  if (!this._size) return this.oldCache.size;
                  var t,
                    e = 0,
                    n = g(this.oldCache.keys());
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      var r = t.value;
                      this.cache.has(r) || e++;
                    }
                  } catch (i) {
                    n.e(i);
                  } finally {
                    n.f();
                  }
                  return Math.min(this._size + e, this.maxSize);
                },
              },
              {
                key: "entries",
                value: function () {
                  return this.entriesAscending();
                },
              },
              {
                key: "forEach",
                value: function (t) {
                  var e,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this,
                    r = g(this.entriesAscending());
                  try {
                    for (r.s(); !(e = r.n()).done; ) {
                      var i = Object(a.a)(e.value, 2),
                        o = i[0],
                        s = i[1];
                      t.call(n, s, o, this);
                    }
                  } catch (c) {
                    r.e(c);
                  } finally {
                    r.f();
                  }
                },
              },
              {
                key: n,
                value: function () {
                  return JSON.stringify(Object(o.a)(this.entriesAscending()));
                },
              },
            ]),
            i
          );
        })(_(Map), Symbol.iterator, Symbol.toStringTag),
        w = n("x+/V"),
        E = {},
        C = new b({ maxSize: 8, maxAge: 6e4, updateAgeOnGet: !0 }),
        T =
          "undefined" !== typeof performance &&
          null !== performance &&
          performance.now
            ? function () {
                return performance.now();
              }
            : function () {
                return new Date().getTime();
              },
        S = (function () {
          var t = i()(
            regeneratorRuntime.mark(function t(e, n) {
              var r, i, o, a;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!(r = C.get(e))) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", r);
                    case 3:
                      if (
                        ((o = T()), E[e] && o - E[e].t < 1e4 && (i = E[e].p), i)
                      ) {
                        t.next = 12;
                        break;
                      }
                      return (t.next = 8), Object(w.a)(n);
                    case 8:
                      (a = t.sent),
                        (i = new Promise(function (t, n) {
                          a.load(
                            e,
                            function (n) {
                              C.set(e, n), t(n);
                            },
                            function (t) {
                              n(t);
                            }
                          );
                        })),
                        (E[e] = { p: i, t: o }),
                        i
                          .catch(function () {})
                          .finally(function () {
                            var t;
                            (null === (t = E[e]) || void 0 === t
                              ? void 0
                              : t.p) === i && (E[e] = null);
                          });
                    case 12:
                      return t.abrupt("return", i);
                    case 13:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })();
    },
    "V+4i": function (t, e, n) {
      t.exports = n("4KFe")(45);
    },
    V7zW: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return S;
      }),
        n.d(e, "c", function () {
          return N;
        }),
        n.d(e, "d", function () {
          return x;
        });
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("58BP"),
        c = n.n(s),
        u = n("cQwn"),
        l = n.n(u),
        f = n("KFtC"),
        h = n("cOjp"),
        p = n("w6NW"),
        d = n("nimoua"),
        _ = n.n(d),
        v = n("zGzV"),
        m = n("+xEq"),
        g = n("Kw0i"),
        y = function (t) {
          var e = document.cookie.match(
            new RegExp("(^| )" + t + "=([^;]*)(;|$)")
          );
          return null != e ? decodeURI(e[2]) : null;
        };
      function R(t, e) {
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
            ? R(Object(n), !0).forEach(function (e) {
                l()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var w = _.a.isInNimoApp,
        E = _.a.isInNimoTv,
        C = _.a.isInNimoStreamer,
        T = _.a.isInNimoPc,
        S = { loginFrom: "ya_popup_login_from" },
        I = {
          domain: "nimo.tv",
          dty: "outlive",
          pro: "nimo_web_test",
          pas: y("username") || "",
          yyuid: "",
          pageType: "root",
          rso: "",
          rso_desc: "",
          eid: "",
          eid_desc: "",
        },
        O = null,
        M = (function () {
          function t(e) {
            var n = this;
            a()(this, t),
              l()(this, "_reportProductStartUp", function (t, e) {
                var r = n.config,
                  o = r.pro,
                  a = r.rso,
                  s = r.rso_desc,
                  c = i()(
                    {},
                    { pro: o, rso: a, rso_desc: s, ref: y("ya_eid") },
                    t
                  ),
                  u = e || n.ya;
                u &&
                  "function" === typeof u.reportProductStartUp &&
                  (u.reportProductStartUp(c), n.logger.log("startup"));
              }),
              l()(this, "_startProductHeartbeat", function (t, e) {
                var r = n.config,
                  o = r.pro,
                  a = r.rso,
                  s = r.rso_desc,
                  c = i()(
                    {},
                    { pro: o, rso: a, rso_desc: s, ref: y("ya_eid") },
                    t
                  ),
                  u = e || n.ya;
                u &&
                  "function" === typeof u.startProductHeartbeat &&
                  (u.startProductHeartbeat(c), n.logger.log("heartbeat"));
              }),
              l()(this, "_reportProductEvent", function (t, e) {
                var r = e || n.ya;
                if (n.isYaInit(r)) {
                  var o = n.config,
                    a = o.eid,
                    s = o.eid_desc,
                    c = o.rso,
                    u = o.rso_desc,
                    l = o.game_id,
                    f = o.game_name,
                    h = o.ayyuid,
                    p = i()(
                      {},
                      {
                        eid: a,
                        eid_desc: s,
                        rso: c,
                        rso_desc: u,
                        ref: y("ya_eid"),
                      },
                      t
                    );
                  l && (p.game_id = l),
                    f && (p.game_name = f),
                    h && (p.ayyuid = h),
                    r.reportProductEvent(p),
                    n.logger.log(p.eid, p.prop);
                }
              }),
              (this.config = i()({}, I, e)),
              (this.domain = this.config.domain),
              (this.logger = new h.a({
                prefix: "Report|".concat(this.config.pro),
              })),
              (this.ya = !1),
              (this._data = []),
              (this._callback = []),
              (this._initFailed = !1),
              A(this.config, function (t, e, r) {
                t
                  ? ((n._callback = []),
                    (n._data = []),
                    n.logger.error(
                      "report init error",
                      null === t || void 0 === t ? void 0 : t.message,
                      null === t || void 0 === t ? void 0 : t.stack,
                      t
                    ),
                    (n._initFailed = !0))
                  : e &&
                    ((n.ya = e),
                    r && i()(n.config, r),
                    n._callback.length &&
                      n._callback.forEach(function (t) {
                        return t();
                      }),
                    (n._callback = []),
                    n._data.forEach(function (t) {
                      n.reportYa(t);
                    }),
                    (n._data = []));
              }),
              (this.report = this.report.bind(this)),
              (this._formatReportObj = N),
              (this.formatReportObj = N),
              (this._commonProp = {}),
              "nimo_activity" === this.config.pro &&
                ((this._reportActivity = !0),
                (this.clientType = t.getClientType()),
                this.extendProp({ clientType_: this.clientType })),
              (this.formatAndSend = L.bind(this));
          }
          return (
            c()(
              t,
              [
                {
                  key: "init",
                  value: function () {
                    var t = this;
                    this._inited ||
                      ((this._inited = !0),
                      this.onInit(function () {
                        var e = t._reportActivity
                          ? {
                              prop: JSON.stringify({
                                clientType_: t.clientType,
                              }),
                            }
                          : null;
                        t.setGuid(),
                          t.setPty(),
                          t._reportProductStartUp(e),
                          t._startProductHeartbeat(e),
                          t._reportProductEvent(),
                          t._recordInitReport();
                      })),
                      g.b.on(g.a.ANMOSID_UPDATE, function (e) {
                        (t.anmosid = e), t.setAnmosid(e);
                      });
                  },
                },
                {
                  key: "_recordInitReport",
                  value: function () {
                    var t = this.config.pro;
                    O
                      ? this._reportSentry(
                          new Error(
                            "nimo event:[startup repeat] product is ".concat(
                              [O, t].join(",")
                            )
                          )
                        )
                      : (O = t),
                      window.NIMO_INIT_YA_PRO !== t &&
                        this._reportSentry(
                          new Error(
                            "nimo event:[different report pro] pageview is "
                              .concat(window.NIMO_INIT_YA_PRO, ", startup is ")
                              .concat(t)
                          )
                        );
                  },
                },
                {
                  key: "_reportSentry",
                  value: function (t) {
                    var e, n;
                    "function" ===
                      typeof (null === (e = window) ||
                      void 0 === e ||
                      null === (n = e.Sentry) ||
                      void 0 === n
                        ? void 0
                        : n.captureEvent) && window.Sentry.captureException(t);
                  },
                },
                {
                  key: "setPty",
                  value: function () {
                    var t = window.G_PAGE_TYPE;
                    if ("string" === typeof t) {
                      var e = this.ya;
                      e && e.setExtParam("pty=".concat(t)),
                        this._roomYa &&
                          this._roomYa.setExtParam("pty=".concat(t));
                    }
                  },
                },
                {
                  key: "setGuid",
                  value: function () {
                    var t = (this.config || {}).guid;
                    if (!w && !t) {
                      (t = this._guid || Object(f.j)()), (this._guid = t);
                      var e = this.ya;
                      t &&
                        (e &&
                          !this._guidSet &&
                          ((this._guidSet = !0),
                          e.setExtParam("sguid=".concat(t))),
                        this._roomYa &&
                          !this._roomGuidSet &&
                          ((this._roomGuidSet = !0),
                          this._roomYa.setExtParam("sguid=".concat(t))));
                    }
                  },
                },
                {
                  key: "setAnmosid",
                  value: function (t) {
                    if (!w) {
                      var e = this.ya;
                      e && e.setExtParam("anmos_uid=".concat(t)),
                        this._roomYa &&
                          this._roomYa.setExtParam("anmos_uid=".concat(t));
                    }
                  },
                },
                {
                  key: "isYaInit",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.ya;
                    return t && "function" === typeof t.reportProductEvent;
                  },
                },
                {
                  key: "onInit",
                  value: function (t) {
                    "function" === typeof t &&
                      (this.isYaInit()
                        ? t()
                        : this._initFailed || this._callback.push(t));
                  },
                },
                {
                  key: "pushReportData",
                  value: function (t) {
                    this.isYaInit()
                      ? this.reportYa(t)
                      : this._initFailed || this._data.push(t);
                  },
                },
                {
                  key: "spaLocationChangeReport",
                  value: function () {
                    if (
                      this.ya &&
                      this.ya.reportInstance &&
                      this.ya.reportInstance.clientInfo &&
                      this.ya.reportInstance.sessionData
                    ) {
                      var t = encodeURIComponent(location.href);
                      this.ya.reportInstance.clientInfo.add("curl", t),
                        this.ya.reportInstance.sessionData.add("curl", t);
                    }
                    this.setGuid(),
                      this.setPty(),
                      this._pageviewReport(),
                      this._reportProductStartUp(),
                      this._reportProductEvent();
                  },
                },
                {
                  key: "_pageviewReport",
                  value: function () {
                    window.YA && window.YA.static.pageViewReport();
                  },
                },
                {
                  key: "initRoom",
                  value: function (t) {
                    var e = this,
                      n = t || {},
                      r = n.gameId,
                      o = n.gameName,
                      a = n.ayyuid,
                      s = { game_id: r, game_name: o, ayyuid: a };
                    this._roomInited ||
                      ((this._roomInited = !0),
                      (this._cancelRoomInit = A(
                        b(b({}, this.config), {}, { pageType: "sub" }),
                        function (n, r, o) {
                          if (n) e.logger.error("room report init error", n);
                          else if (r) {
                            if (
                              (o && i()(e.config, s),
                              e.extendObj(e.config, s),
                              (e._roomYa = r),
                              e.setGuid(),
                              e.setPty(),
                              e._reportProductStartUp(s, r),
                              e._startProductHeartbeat(s, r),
                              e._reportProductEvent(s, r),
                              e.extendProp(b({}, t)),
                              Object(v.a)(a))
                            ) {
                              var c = Object(v.b)(e._isWap());
                              c &&
                                e.ya &&
                                (Array.isArray(c) && (c = c.join(",")),
                                e.ya.setExtParam("oexp=".concat(c)));
                            }
                            e.anmosid &&
                              e._roomYa.setExtParam(
                                "anmos_uid=".concat(e.anmosid)
                              );
                          }
                        }
                      )));
                  },
                },
                {
                  key: "disposeRoom",
                  value: function () {
                    (this._roomInited = !1),
                      (this._roomGuidSet = !1),
                      this._roomYa &&
                        (this._roomYa.stopProductHeartbeat(),
                        (this._roomYa = null)),
                      "function" === typeof this._cancelRoomInit &&
                        (this._cancelRoomInit(), (this._cancelRoomInit = null)),
                      this.reduceObj(
                        this.config,
                        "game_id",
                        "game_name",
                        "ayyuid"
                      );
                  },
                },
                {
                  key: "setProp",
                  value: function (t) {
                    this.extendProp(t);
                  },
                },
                {
                  key: "report",
                  value: function (t) {
                    var e = 0 === Object.keys(this._commonProp).length,
                      n = (t || {}).prop;
                    (!(n = "string" === typeof n ? JSON.parse(n) : n) && e) ||
                      (t.prop = JSON.stringify(b(b({}, this._commonProp), n))),
                      this.pushReportData(t);
                  },
                },
                {
                  key: "reportYa",
                  value: function (t) {
                    var e = t.eid_desc,
                      n = t.cref;
                    e &&
                      ((t.eid_desc = encodeURIComponent(e)),
                      (t.cref = encodeURIComponent(n))),
                      this.setGuid(),
                      this._reportProductEvent(t);
                  },
                },
                {
                  key: "reportGtag",
                  value: function (t) {
                    var e = t.eid,
                      n = t.prop;
                    "function" === typeof window.gtag &&
                      (n
                        ? window.gtag("event", e, JSON.parse(n))
                        : window.gtag("event", e));
                  },
                },
                {
                  key: "extendProp",
                  value: function (t) {
                    var e = this;
                    "[object Object]" === Object.prototype.toString.call(t) &&
                      Object.keys(t).forEach(function (n) {
                        var r = t[n];
                        null === r && void 0 !== e._commonProp[n]
                          ? delete e._commonProp[n]
                          : (e._commonProp = b(
                              b({}, e._commonProp),
                              {},
                              l()({}, n, r)
                            ));
                      });
                  },
                },
                {
                  key: "extendObj",
                  value: function (t, e) {
                    "[object Object]" === Object.prototype.toString.call(e) &&
                      Object.keys(e).forEach(function (n) {
                        var r = e[n];
                        void 0 === t[n] && (t[n] = r);
                      });
                  },
                },
                {
                  key: "reduceObj",
                  value: function (t) {
                    for (
                      var e = arguments.length,
                        n = new Array(e > 1 ? e - 1 : 0),
                        r = 1;
                      r < e;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    Array.isArray(n) &&
                      n.forEach(function (e) {
                        void 0 !== t[e] && delete t[e];
                      });
                  },
                },
                {
                  key: "bindPcEvent",
                  value: function () {
                    var t = this;
                    !(function (t, e, n, r) {
                      t.addEventListener(
                        e,
                        function (e) {
                          for (var i = e.target, o = !0; i && o && i !== t; )
                            i.matches(n) && (o = !1 !== r.call(i, e)),
                              (i = i.parentNode),
                              o || e.preventDefault();
                        },
                        !1
                      );
                    })(
                      document.body,
                      "click",
                      "[report],[data-report]",
                      function (e) {
                        if (window.YA) {
                          var n = this;
                          try {
                            var r = JSON.parse(
                              n.getAttribute("report") ||
                                n.getAttribute("data-report")
                            );
                            if (n.href)
                              !(function (t, e, n, r, i) {
                                var o = ""
                                  .concat(t, "=")
                                  .concat(e, "; domain=")
                                  .concat(n, "; path=")
                                  .concat(r);
                                i > 0 &&
                                  (o = ""
                                    .concat(o, "; expires=")
                                    .concat(i.toGMTString())),
                                  (document.cookie = o);
                              })(
                                "ya_eid",
                                null === r || void 0 === r
                                  ? void 0
                                  : r.position,
                                "nimo.tv",
                                "/"
                              );
                            r && r.prop && (r.prop = JSON.stringify(r.prop)),
                              (r.ref = YA.cookie.get("ya_eid")),
                              t.report(r),
                              (function (t) {
                                var e = t.target,
                                  n = e.tagName,
                                  r = e.href,
                                  i = e.target,
                                  o = t.target;
                                "click" === t.type &&
                                  "A" === n &&
                                  Object(p.a)(r) &&
                                  "_blank" !== i &&
                                  1 !== +o.getAttribute("_stop_event") &&
                                  (t.preventDefault(),
                                  setTimeout(function () {
                                    window.open(r, i || "_self");
                                  }, 200));
                              })(e);
                          } catch (i) {
                            this.logger.log(i);
                          }
                        }
                      }
                    );
                  },
                },
                {
                  key: "_isWap",
                  value: function () {
                    var t;
                    return (
                      (null === (t = this.config) || void 0 === t
                        ? void 0
                        : t.pro) === m.a.pasnimowap
                    );
                  },
                },
              ],
              [
                {
                  key: "getClientType",
                  value: function () {
                    return C
                      ? "nimoStreamer"
                      : E
                      ? "nimoTv"
                      : w
                      ? "nimoApp"
                      : T
                      ? "nimoPc"
                      : "oldVersionOrBrowser";
                  },
                },
              ]
            ),
            t
          );
        })();
      function P(t, e) {
        var n,
          r = new Promise(function (r, i) {
            var o = (e || {}).timeout,
              a = void 0 === o ? 6e4 : o,
              s = document.getElementById(t);
            if (s) {
              var c,
                u = !1;
              (c = setTimeout(function () {
                (c = null), i(Error("timeout")), l();
              }, a)),
                (n = function () {
                  i(Error("cancel")), l();
                }),
                s.addEventListener("load", f),
                s.addEventListener("error", h);
            } else i(Error("not-found"));
            function l() {
              u ||
                ((u = !0),
                (n = null),
                c && clearTimeout(c),
                s.removeEventListener("load", f),
                s.removeEventListener("error", h));
            }
            function f() {
              r(), l();
            }
            function h() {
              i(Error("load-error")), l();
            }
          });
        return (
          (r.cancel = function () {
            n && n();
          }),
          r
        );
      }
      function k(t) {
        var e = t.pro,
          n = t.pas,
          r = t.pageType,
          i = t.yyuid,
          o = t.dty,
          a = t.guid,
          s = t.appMid,
          c = new YA(e, n, { pageType: r, yyuid: i });
        c.setExtParam("dty=".concat(o)), a && c.setExtParam("sguid=".concat(a));
        var u = Object(f.g)();
        return (
          u && c.setExtParam("countryid=".concat(u)),
          s && c.setAppMidParam(s),
          c
        );
      }
      function A(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : function () {};
        if ("undefined" === typeof YA) {
          var r = P("yaScript");
          return (
            r.then(
              function () {
                "undefined" !== typeof YA
                  ? A(t, e)
                  : e(Error("YA is undefined"));
              },
              function (t) {
                e(t);
              }
            ),
            r.cancel
          );
        }
        if (w && window.parent === window) {
          var i = n("mTTC").default;
          i.getUserInfo().then(function (n) {
            var r = n || {},
              i = r.appGuid,
              o = r.udbUserId,
              a = r.appMid,
              s = {};
            !t.yyuid && o && "-1" !== o && -1 !== o && (s.yyuid = String(o)),
              !t.guid && i && (s.guid = i),
              !t.appMid && a && (s.appMid = a);
            var c = k(b(b({}, t), s));
            e(null, c, s);
          });
        } else {
          var o = {};
          t.guid || (o.guid = Object(f.j)()),
            t.yyuid || (o.yyuid = y(w ? "yyuid" : "udbUserId") || ""),
            w && !t.appMid && (o.appMid = y("appMid") || "");
          var a = k(b(b({}, t), o));
          e(null, a, o);
        }
        return function () {};
      }
      function N(t, e, n) {
        var r = { eid: t, eid_desc: e };
        return n && (r.prop = JSON.stringify(n)), r;
      }
      function L() {
        this.report(N.apply(void 0, arguments));
      }
      function x() {
        return window.NIMO_REP || "";
      }
      e.b = M;
    },
    VBJl: function (t, e, n) {
      "use strict";
      var r = n("dBkQ"),
        i = n("wc2d"),
        o = n("8Vek").Buffer,
        a = new Array(16);
      function s() {
        i.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878);
      }
      function c(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function u(t, e, n, r, i, o, a) {
        return (c((t + ((e & n) | (~e & r)) + i + o) | 0, a) + e) | 0;
      }
      function l(t, e, n, r, i, o, a) {
        return (c((t + ((e & r) | (n & ~r)) + i + o) | 0, a) + e) | 0;
      }
      function f(t, e, n, r, i, o, a) {
        return (c((t + (e ^ n ^ r) + i + o) | 0, a) + e) | 0;
      }
      function h(t, e, n, r, i, o, a) {
        return (c((t + (n ^ (e | ~r)) + i + o) | 0, a) + e) | 0;
      }
      r(s, i),
        (s.prototype._update = function () {
          for (var t = a, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e);
          var n = this._a,
            r = this._b,
            i = this._c,
            o = this._d;
          (n = u(n, r, i, o, t[0], 3614090360, 7)),
            (o = u(o, n, r, i, t[1], 3905402710, 12)),
            (i = u(i, o, n, r, t[2], 606105819, 17)),
            (r = u(r, i, o, n, t[3], 3250441966, 22)),
            (n = u(n, r, i, o, t[4], 4118548399, 7)),
            (o = u(o, n, r, i, t[5], 1200080426, 12)),
            (i = u(i, o, n, r, t[6], 2821735955, 17)),
            (r = u(r, i, o, n, t[7], 4249261313, 22)),
            (n = u(n, r, i, o, t[8], 1770035416, 7)),
            (o = u(o, n, r, i, t[9], 2336552879, 12)),
            (i = u(i, o, n, r, t[10], 4294925233, 17)),
            (r = u(r, i, o, n, t[11], 2304563134, 22)),
            (n = u(n, r, i, o, t[12], 1804603682, 7)),
            (o = u(o, n, r, i, t[13], 4254626195, 12)),
            (i = u(i, o, n, r, t[14], 2792965006, 17)),
            (n = l(
              n,
              (r = u(r, i, o, n, t[15], 1236535329, 22)),
              i,
              o,
              t[1],
              4129170786,
              5
            )),
            (o = l(o, n, r, i, t[6], 3225465664, 9)),
            (i = l(i, o, n, r, t[11], 643717713, 14)),
            (r = l(r, i, o, n, t[0], 3921069994, 20)),
            (n = l(n, r, i, o, t[5], 3593408605, 5)),
            (o = l(o, n, r, i, t[10], 38016083, 9)),
            (i = l(i, o, n, r, t[15], 3634488961, 14)),
            (r = l(r, i, o, n, t[4], 3889429448, 20)),
            (n = l(n, r, i, o, t[9], 568446438, 5)),
            (o = l(o, n, r, i, t[14], 3275163606, 9)),
            (i = l(i, o, n, r, t[3], 4107603335, 14)),
            (r = l(r, i, o, n, t[8], 1163531501, 20)),
            (n = l(n, r, i, o, t[13], 2850285829, 5)),
            (o = l(o, n, r, i, t[2], 4243563512, 9)),
            (i = l(i, o, n, r, t[7], 1735328473, 14)),
            (n = f(
              n,
              (r = l(r, i, o, n, t[12], 2368359562, 20)),
              i,
              o,
              t[5],
              4294588738,
              4
            )),
            (o = f(o, n, r, i, t[8], 2272392833, 11)),
            (i = f(i, o, n, r, t[11], 1839030562, 16)),
            (r = f(r, i, o, n, t[14], 4259657740, 23)),
            (n = f(n, r, i, o, t[1], 2763975236, 4)),
            (o = f(o, n, r, i, t[4], 1272893353, 11)),
            (i = f(i, o, n, r, t[7], 4139469664, 16)),
            (r = f(r, i, o, n, t[10], 3200236656, 23)),
            (n = f(n, r, i, o, t[13], 681279174, 4)),
            (o = f(o, n, r, i, t[0], 3936430074, 11)),
            (i = f(i, o, n, r, t[3], 3572445317, 16)),
            (r = f(r, i, o, n, t[6], 76029189, 23)),
            (n = f(n, r, i, o, t[9], 3654602809, 4)),
            (o = f(o, n, r, i, t[12], 3873151461, 11)),
            (i = f(i, o, n, r, t[15], 530742520, 16)),
            (n = h(
              n,
              (r = f(r, i, o, n, t[2], 3299628645, 23)),
              i,
              o,
              t[0],
              4096336452,
              6
            )),
            (o = h(o, n, r, i, t[7], 1126891415, 10)),
            (i = h(i, o, n, r, t[14], 2878612391, 15)),
            (r = h(r, i, o, n, t[5], 4237533241, 21)),
            (n = h(n, r, i, o, t[12], 1700485571, 6)),
            (o = h(o, n, r, i, t[3], 2399980690, 10)),
            (i = h(i, o, n, r, t[10], 4293915773, 15)),
            (r = h(r, i, o, n, t[1], 2240044497, 21)),
            (n = h(n, r, i, o, t[8], 1873313359, 6)),
            (o = h(o, n, r, i, t[15], 4264355552, 10)),
            (i = h(i, o, n, r, t[6], 2734768916, 15)),
            (r = h(r, i, o, n, t[13], 1309151649, 21)),
            (n = h(n, r, i, o, t[4], 4149444226, 6)),
            (o = h(o, n, r, i, t[11], 3174756917, 10)),
            (i = h(i, o, n, r, t[2], 718787259, 15)),
            (r = h(r, i, o, n, t[9], 3951481745, 21)),
            (this._a = (this._a + n) | 0),
            (this._b = (this._b + r) | 0),
            (this._c = (this._c + i) | 0),
            (this._d = (this._d + o) | 0);
        }),
        (s.prototype._digest = function () {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var t = o.allocUnsafe(16);
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
          );
        }),
        (t.exports = s);
    },
    Vgli: function (t, e, n) {
      t.exports =
        n.p + "images/gamemachine-middle.004e7c15c67a2de3227ecb2a7c496dc0.png";
    },
    Vwta: function (t, e, n) {
      t.exports = n("4KFe")(26);
    },
    WA5N: function (t, e, n) {
      t.exports = n("4KFe")(161);
    },
    WYnh: function (t, e, n) {
      t.exports = n("4KFe")(136);
    },
    WbDt: function (t, e, n) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          n = e[0],
          r = e[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (e.toByteArray = function (t) {
          var e,
            n,
            r = u(t),
            a = r[0],
            s = r[1],
            c = new o(
              (function (t, e, n) {
                return (3 * (e + n)) / 4 - n;
              })(0, a, s)
            ),
            l = 0,
            f = s > 0 ? a - 4 : a;
          for (n = 0; n < f; n += 4)
            (e =
              (i[t.charCodeAt(n)] << 18) |
              (i[t.charCodeAt(n + 1)] << 12) |
              (i[t.charCodeAt(n + 2)] << 6) |
              i[t.charCodeAt(n + 3)]),
              (c[l++] = (e >> 16) & 255),
              (c[l++] = (e >> 8) & 255),
              (c[l++] = 255 & e);
          2 === s &&
            ((e = (i[t.charCodeAt(n)] << 2) | (i[t.charCodeAt(n + 1)] >> 4)),
            (c[l++] = 255 & e));
          1 === s &&
            ((e =
              (i[t.charCodeAt(n)] << 10) |
              (i[t.charCodeAt(n + 1)] << 4) |
              (i[t.charCodeAt(n + 2)] >> 2)),
            (c[l++] = (e >> 8) & 255),
            (c[l++] = 255 & e));
          return c;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], a = 16383, s = 0, c = n - i;
            s < c;
            s += a
          )
            o.push(l(t, s, s + a > c ? c : s + a));
          1 === i
            ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
            : 2 === i &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var r = [],
          i = [],
          o = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          c = a.length;
        s < c;
        ++s
      )
        (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function l(t, e, n) {
        for (var i, o, a = [], s = e; s < n; s += 3)
          (i =
            ((t[s] << 16) & 16711680) +
            ((t[s + 1] << 8) & 65280) +
            (255 & t[s + 2])),
            a.push(
              r[((o = i) >> 18) & 63] +
                r[(o >> 12) & 63] +
                r[(o >> 6) & 63] +
                r[63 & o]
            );
        return a.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    WvPa: function (t, e, n) {
      "use strict";
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var r = n("WbDt"),
          i = n("Yvaf"),
          o = n("rRvS");
        function a() {
          return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function s(t, e) {
          if (a() < e) throw new RangeError("Invalid typed array length");
          return (
            c.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = c.prototype)
              : (null === t && (t = new c(e)), (t.length = e)),
            t
          );
        }
        function c(t, e, n) {
          if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c))
            return new c(t, e, n);
          if ("number" === typeof t) {
            if ("string" === typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return f(this, t);
          }
          return u(this, t, e, n);
        }
        function u(t, e, n, r) {
          if ("number" === typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, n, r) {
                if ((e.byteLength, n < 0 || e.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === n && void 0 === r
                    ? new Uint8Array(e)
                    : void 0 === r
                    ? new Uint8Array(e, n)
                    : new Uint8Array(e, n, r);
                c.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = c.prototype)
                  : (t = h(t, e));
                return t;
              })(t, e, n, r)
            : "string" === typeof e
            ? (function (t, e, n) {
                ("string" === typeof n && "" !== n) || (n = "utf8");
                if (!c.isEncoding(n))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | d(e, n),
                  i = (t = s(t, r)).write(e, n);
                i !== r && (t = t.slice(0, i));
                return t;
              })(t, e, n)
            : (function (t, e) {
                if (c.isBuffer(e)) {
                  var n = 0 | p(e.length);
                  return 0 === (t = s(t, n)).length || e.copy(t, 0, 0, n), t;
                }
                if (e) {
                  if (
                    ("undefined" !== typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" !== typeof e.length || (r = e.length) !== r
                      ? s(t, 0)
                      : h(t, e);
                  if ("Buffer" === e.type && o(e.data)) return h(t, e.data);
                }
                var r;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
        }
        function l(t) {
          if ("number" !== typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function f(t, e) {
          if ((l(e), (t = s(t, e < 0 ? 0 : 0 | p(e))), !c.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < e; ++n) t[n] = 0;
          return t;
        }
        function h(t, e) {
          var n = e.length < 0 ? 0 : 0 | p(e.length);
          t = s(t, n);
          for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
          return t;
        }
        function p(t) {
          if (t >= a())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function d(t, e) {
          if (c.isBuffer(t)) return t.length;
          if (
            "undefined" !== typeof ArrayBuffer &&
            "function" === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" !== typeof t && (t = "" + t);
          var n = t.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
              case void 0:
                return F(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return V(t).length;
              default:
                if (r) return F(t).length;
                (e = ("" + e).toLowerCase()), (r = !0);
            }
        }
        function _(t, e, n) {
          var r = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
            return "";
          if ((n >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return P(this, e, n);
              case "utf8":
              case "utf-8":
                return S(this, e, n);
              case "ascii":
                return O(this, e, n);
              case "latin1":
              case "binary":
                return M(this, e, n);
              case "base64":
                return T(this, e, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return k(this, e, n);
              default:
                if (r) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (r = !0);
            }
        }
        function v(t, e, n) {
          var r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function m(t, e, n, r, i) {
          if (0 === t.length) return -1;
          if (
            ("string" === typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (i) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (("string" === typeof e && (e = c.from(e, r)), c.isBuffer(e)))
            return 0 === e.length ? -1 : g(t, e, n, r, i);
          if ("number" === typeof e)
            return (
              (e &= 255),
              c.TYPED_ARRAY_SUPPORT &&
              "function" === typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : g(t, [e], n, r, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function g(t, e, n, r, i) {
          var o,
            a = 1,
            s = t.length,
            c = e.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (a = 2), (s /= 2), (c /= 2), (n /= 2);
          }
          function u(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
          }
          if (i) {
            var l = -1;
            for (o = n; o < s; o++)
              if (u(t, o) === u(e, -1 === l ? 0 : o - l)) {
                if ((-1 === l && (l = o), o - l + 1 === c)) return l * a;
              } else -1 !== l && (o -= o - l), (l = -1);
          } else
            for (n + c > s && (n = s - c), o = n; o >= 0; o--) {
              for (var f = !0, h = 0; h < c; h++)
                if (u(t, o + h) !== u(e, h)) {
                  f = !1;
                  break;
                }
              if (f) return o;
            }
          return -1;
        }
        function y(t, e, n, r) {
          n = Number(n) || 0;
          var i = t.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          var o = e.length;
          if (o % 2 !== 0) throw new TypeError("Invalid hex string");
          r > o / 2 && (r = o / 2);
          for (var a = 0; a < r; ++a) {
            var s = parseInt(e.substr(2 * a, 2), 16);
            if (isNaN(s)) return a;
            t[n + a] = s;
          }
          return a;
        }
        function R(t, e, n, r) {
          return Y(F(e, t.length - n), t, n, r);
        }
        function b(t, e, n, r) {
          return Y(
            (function (t) {
              for (var e = [], n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            r
          );
        }
        function w(t, e, n, r) {
          return b(t, e, n, r);
        }
        function E(t, e, n, r) {
          return Y(V(e), t, n, r);
        }
        function C(t, e, n, r) {
          return Y(
            (function (t, e) {
              for (
                var n, r, i, o = [], a = 0;
                a < t.length && !((e -= 2) < 0);
                ++a
              )
                (r = (n = t.charCodeAt(a)) >> 8),
                  (i = n % 256),
                  o.push(i),
                  o.push(r);
              return o;
            })(e, t.length - n),
            t,
            n,
            r
          );
        }
        function T(t, e, n) {
          return 0 === e && n === t.length
            ? r.fromByteArray(t)
            : r.fromByteArray(t.slice(e, n));
        }
        function S(t, e, n) {
          n = Math.min(t.length, n);
          for (var r = [], i = e; i < n; ) {
            var o,
              a,
              s,
              c,
              u = t[i],
              l = null,
              f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
            if (i + f <= n)
              switch (f) {
                case 1:
                  u < 128 && (l = u);
                  break;
                case 2:
                  128 === (192 & (o = t[i + 1])) &&
                    (c = ((31 & u) << 6) | (63 & o)) > 127 &&
                    (l = c);
                  break;
                case 3:
                  (o = t[i + 1]),
                    (a = t[i + 2]),
                    128 === (192 & o) &&
                      128 === (192 & a) &&
                      (c = ((15 & u) << 12) | ((63 & o) << 6) | (63 & a)) >
                        2047 &&
                      (c < 55296 || c > 57343) &&
                      (l = c);
                  break;
                case 4:
                  (o = t[i + 1]),
                    (a = t[i + 2]),
                    (s = t[i + 3]),
                    128 === (192 & o) &&
                      128 === (192 & a) &&
                      128 === (192 & s) &&
                      (c =
                        ((15 & u) << 18) |
                        ((63 & o) << 12) |
                        ((63 & a) << 6) |
                        (63 & s)) > 65535 &&
                      c < 1114112 &&
                      (l = c);
              }
            null === l
              ? ((l = 65533), (f = 1))
              : l > 65535 &&
                ((l -= 65536),
                r.push(((l >>> 10) & 1023) | 55296),
                (l = 56320 | (1023 & l))),
              r.push(l),
              (i += f);
          }
          return (function (t) {
            var e = t.length;
            if (e <= I) return String.fromCharCode.apply(String, t);
            var n = "",
              r = 0;
            for (; r < e; )
              n += String.fromCharCode.apply(String, t.slice(r, (r += I)));
            return n;
          })(r);
        }
        (e.Buffer = c),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return c.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (c.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        "function" === typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = a()),
          (c.poolSize = 8192),
          (c._augment = function (t) {
            return (t.__proto__ = c.prototype), t;
          }),
          (c.from = function (t, e, n) {
            return u(null, t, e, n);
          }),
          c.TYPED_ARRAY_SUPPORT &&
            ((c.prototype.__proto__ = Uint8Array.prototype),
            (c.__proto__ = Uint8Array),
            "undefined" !== typeof Symbol &&
              Symbol.species &&
              c[Symbol.species] === c &&
              Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (c.alloc = function (t, e, n) {
            return (function (t, e, n, r) {
              return (
                l(e),
                e <= 0
                  ? s(t, e)
                  : void 0 !== n
                  ? "string" === typeof r
                    ? s(t, e).fill(n, r)
                    : s(t, e).fill(n)
                  : s(t, e)
              );
            })(null, t, e, n);
          }),
          (c.allocUnsafe = function (t) {
            return f(null, t);
          }),
          (c.allocUnsafeSlow = function (t) {
            return f(null, t);
          }),
          (c.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (c.compare = function (t, e) {
            if (!c.isBuffer(t) || !c.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var n = t.length, r = e.length, i = 0, o = Math.min(n, r);
              i < o;
              ++i
            )
              if (t[i] !== e[i]) {
                (n = t[i]), (r = e[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (c.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (c.concat = function (t, e) {
            if (!o(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return c.alloc(0);
            var n;
            if (void 0 === e)
              for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = c.allocUnsafe(e),
              i = 0;
            for (n = 0; n < t.length; ++n) {
              var a = t[n];
              if (!c.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(r, i), (i += a.length);
            }
            return r;
          }),
          (c.byteLength = d),
          (c.prototype._isBuffer = !0),
          (c.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 !== 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) v(this, e, e + 1);
            return this;
          }),
          (c.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 !== 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              v(this, e, e + 3), v(this, e + 1, e + 2);
            return this;
          }),
          (c.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 !== 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              v(this, e, e + 7),
                v(this, e + 1, e + 6),
                v(this, e + 2, e + 5),
                v(this, e + 3, e + 4);
            return this;
          }),
          (c.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? S(this, 0, t)
              : _.apply(this, arguments);
          }),
          (c.prototype.equals = function (t) {
            if (!c.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === c.compare(this, t);
          }),
          (c.prototype.inspect = function () {
            var t = "",
              n = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
                this.length > n && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (c.prototype.compare = function (t, e, n, r, i) {
            if (!c.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              e < 0 || n > t.length || r < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (this === t) return 0;
            for (
              var o = (i >>>= 0) - (r >>>= 0),
                a = (n >>>= 0) - (e >>>= 0),
                s = Math.min(o, a),
                u = this.slice(r, i),
                l = t.slice(e, n),
                f = 0;
              f < s;
              ++f
            )
              if (u[f] !== l[f]) {
                (o = u[f]), (a = l[f]);
                break;
              }
            return o < a ? -1 : a < o ? 1 : 0;
          }),
          (c.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (c.prototype.indexOf = function (t, e, n) {
            return m(this, t, e, n, !0);
          }),
          (c.prototype.lastIndexOf = function (t, e, n) {
            return m(this, t, e, n, !1);
          }),
          (c.prototype.write = function (t, e, n, r) {
            if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
            else if (void 0 === n && "string" === typeof e)
              (r = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            }
            var i = this.length - e;
            if (
              ((void 0 === n || n > i) && (n = i),
              (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ; )
              switch (r) {
                case "hex":
                  return y(this, t, e, n);
                case "utf8":
                case "utf-8":
                  return R(this, t, e, n);
                case "ascii":
                  return b(this, t, e, n);
                case "latin1":
                case "binary":
                  return w(this, t, e, n);
                case "base64":
                  return E(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return C(this, t, e, n);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (o = !0);
              }
          }),
          (c.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var I = 4096;
        function O(t, e, n) {
          var r = "";
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
          return r;
        }
        function M(t, e, n) {
          var r = "";
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
          return r;
        }
        function P(t, e, n) {
          var r = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
          for (var i = "", o = e; o < n; ++o) i += j(t[o]);
          return i;
        }
        function k(t, e, n) {
          for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2)
            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          return i;
        }
        function A(t, e, n) {
          if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function N(t, e, n, r, i, o) {
          if (!c.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length) throw new RangeError("Index out of range");
        }
        function L(t, e, n, r) {
          e < 0 && (e = 65535 + e + 1);
          for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i)
            t[n + i] =
              (e & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
        function x(t, e, n, r) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i)
            t[n + i] = (e >>> (8 * (r ? i : 3 - i))) & 255;
        }
        function D(t, e, n, r, i, o) {
          if (n + r > t.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function B(t, e, n, r, o) {
          return o || D(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
        }
        function G(t, e, n, r, o) {
          return o || D(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
        }
        (c.prototype.slice = function (t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t),
            c.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = c.prototype;
          else {
            var i = e - t;
            n = new c(i, void 0);
            for (var o = 0; o < i; ++o) n[o] = this[o + t];
          }
          return n;
        }),
          (c.prototype.readUIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || A(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              r += this[t + o] * i;
            return r;
          }),
          (c.prototype.readUIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || A(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); )
              r += this[t + --e] * i;
            return r;
          }),
          (c.prototype.readUInt8 = function (t, e) {
            return e || A(t, 1, this.length), this[t];
          }),
          (c.prototype.readUInt16LE = function (t, e) {
            return e || A(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (c.prototype.readUInt16BE = function (t, e) {
            return e || A(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (c.prototype.readUInt32LE = function (t, e) {
            return (
              e || A(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (c.prototype.readUInt32BE = function (t, e) {
            return (
              e || A(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (c.prototype.readIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || A(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              r += this[t + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
          }),
          (c.prototype.readIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || A(t, e, this.length);
            for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256); )
              o += this[t + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
          }),
          (c.prototype.readInt8 = function (t, e) {
            return (
              e || A(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (c.prototype.readInt16LE = function (t, e) {
            e || A(t, 2, this.length);
            var n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (c.prototype.readInt16BE = function (t, e) {
            e || A(t, 2, this.length);
            var n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (c.prototype.readInt32LE = function (t, e) {
            return (
              e || A(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (c.prototype.readInt32BE = function (t, e) {
            return (
              e || A(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (c.prototype.readFloatLE = function (t, e) {
            return e || A(t, 4, this.length), i.read(this, t, !0, 23, 4);
          }),
          (c.prototype.readFloatBE = function (t, e) {
            return e || A(t, 4, this.length), i.read(this, t, !1, 23, 4);
          }),
          (c.prototype.readDoubleLE = function (t, e) {
            return e || A(t, 8, this.length), i.read(this, t, !0, 52, 8);
          }),
          (c.prototype.readDoubleBE = function (t, e) {
            return e || A(t, 8, this.length), i.read(this, t, !1, 52, 8);
          }),
          (c.prototype.writeUIntLE = function (t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < n && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + n;
          }),
          (c.prototype.writeUIntBE = function (t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + n;
          }),
          (c.prototype.writeUInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 1, 255, 0),
              c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (c.prototype.writeUInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : L(this, t, e, !0),
              e + 2
            );
          }),
          (c.prototype.writeUInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 2, 65535, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : L(this, t, e, !1),
              e + 2
            );
          }),
          (c.prototype.writeUInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : x(this, t, e, !0),
              e + 4
            );
          }),
          (c.prototype.writeUInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 4, 4294967295, 0),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : x(this, t, e, !1),
              e + 4
            );
          }),
          (c.prototype.writeIntLE = function (t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              N(this, t, e, n, i - 1, -i);
            }
            var o = 0,
              a = 1,
              s = 0;
            for (this[e] = 255 & t; ++o < n && (a *= 256); )
              t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
                (this[e + o] = (((t / a) >> 0) - s) & 255);
            return e + n;
          }),
          (c.prototype.writeIntBE = function (t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              N(this, t, e, n, i - 1, -i);
            }
            var o = n - 1,
              a = 1,
              s = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); )
              t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
                (this[e + o] = (((t / a) >> 0) - s) & 255);
            return e + n;
          }),
          (c.prototype.writeInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 1, 127, -128),
              c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (c.prototype.writeInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : L(this, t, e, !0),
              e + 2
            );
          }),
          (c.prototype.writeInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 2, 32767, -32768),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : L(this, t, e, !1),
              e + 2
            );
          }),
          (c.prototype.writeInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 4, 2147483647, -2147483648),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : x(this, t, e, !0),
              e + 4
            );
          }),
          (c.prototype.writeInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || N(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              c.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : x(this, t, e, !1),
              e + 4
            );
          }),
          (c.prototype.writeFloatLE = function (t, e, n) {
            return B(this, t, e, !0, n);
          }),
          (c.prototype.writeFloatBE = function (t, e, n) {
            return B(this, t, e, !1, n);
          }),
          (c.prototype.writeDoubleLE = function (t, e, n) {
            return G(this, t, e, !0, n);
          }),
          (c.prototype.writeDoubleBE = function (t, e, n) {
            return G(this, t, e, !1, n);
          }),
          (c.prototype.copy = function (t, e, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              t.length - e < r - n && (r = t.length - e + n);
            var i,
              o = r - n;
            if (this === t && n < e && e < r)
              for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
            else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) t[i + e] = this[i + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
            return o;
          }),
          (c.prototype.fill = function (t, e, n, r) {
            if ("string" === typeof t) {
              if (
                ("string" === typeof e
                  ? ((r = e), (e = 0), (n = this.length))
                  : "string" === typeof n && ((r = n), (n = this.length)),
                1 === t.length)
              ) {
                var i = t.charCodeAt(0);
                i < 256 && (t = i);
              }
              if (void 0 !== r && "string" !== typeof r)
                throw new TypeError("encoding must be a string");
              if ("string" === typeof r && !c.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            } else "number" === typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= e) return this;
            var o;
            if (
              ((e >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              t || (t = 0),
              "number" === typeof t)
            )
              for (o = e; o < n; ++o) this[o] = t;
            else {
              var a = c.isBuffer(t) ? t : F(new c(t, r).toString()),
                s = a.length;
              for (o = 0; o < n - e; ++o) this[o + e] = a[o % s];
            }
            return this;
          });
        var U = /[^+\/0-9A-Za-z-_]/g;
        function j(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function F(t, e) {
          var n;
          e = e || 1 / 0;
          for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
            if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === r) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((e -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              o.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              o.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return o;
        }
        function V(t) {
          return r.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(U, "")).length < 2
              )
                return "";
              for (; t.length % 4 !== 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function Y(t, e, n, r) {
          for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
            e[i + n] = t[i];
          return i;
        }
      }.call(this, n("AeT1")));
    },
    "Y0+P": function (t, e, n) {
      t.exports = n("4KFe")(6);
    },
    Yvaf: function (t, e) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      (e.read = function (t, e, n, r, i) {
        var o,
          a,
          s = 8 * i - r - 1,
          c = (1 << s) - 1,
          u = c >> 1,
          l = -7,
          f = n ? i - 1 : 0,
          h = n ? -1 : 1,
          p = t[e + f];
        for (
          f += h, o = p & ((1 << -l) - 1), p >>= -l, l += s;
          l > 0;
          o = 256 * o + t[e + f], f += h, l -= 8
        );
        for (
          a = o & ((1 << -l) - 1), o >>= -l, l += r;
          l > 0;
          a = 256 * a + t[e + f], f += h, l -= 8
        );
        if (0 === o) o = 1 - u;
        else {
          if (o === c) return a ? NaN : (1 / 0) * (p ? -1 : 1);
          (a += Math.pow(2, r)), (o -= u);
        }
        return (p ? -1 : 1) * a * Math.pow(2, o - r);
      }),
        (e.write = function (t, e, n, r, i, o) {
          var a,
            s,
            c,
            u = 8 * o - i - 1,
            l = (1 << u) - 1,
            f = l >> 1,
            h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : o - 1,
            d = r ? 1 : -1,
            _ = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((s = isNaN(e) ? 1 : 0), (a = l))
                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                  e * (c = Math.pow(2, -a)) < 1 && (a--, (c *= 2)),
                  (e += a + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2 &&
                    (a++, (c /= 2)),
                  a + f >= l
                    ? ((s = 0), (a = l))
                    : a + f >= 1
                    ? ((s = (e * c - 1) * Math.pow(2, i)), (a += f))
                    : ((s = e * Math.pow(2, f - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            t[n + p] = 255 & s, p += d, s /= 256, i -= 8
          );
          for (
            a = (a << i) | s, u += i;
            u > 0;
            t[n + p] = 255 & a, p += d, a /= 256, u -= 8
          );
          t[n + p - d] |= 128 * _;
        });
    },
    aLcf: function (t, e, n) {
      t.exports = n("4KFe")(33);
    },
    anwY: function (t, e, n) {
      "use strict";
      function r(t, e) {
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
      function i(t, e, n) {
        return (
          e in t
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
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var a = n("WvPa").Buffer,
        s = n(1).inspect,
        c = (s && s.custom) || "inspect";
      t.exports = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        var e, n, u;
        return (
          (e = t),
          (n = [
            {
              key: "push",
              value: function (t) {
                var e = { data: t, next: null };
                this.length > 0 ? (this.tail.next = e) : (this.head = e),
                  (this.tail = e),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (t) {
                var e = { data: t, next: this.head };
                0 === this.length && (this.tail = e),
                  (this.head = e),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    t
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (t) {
                if (0 === this.length) return "";
                for (var e = this.head, n = "" + e.data; (e = e.next); )
                  n += t + e.data;
                return n;
              },
            },
            {
              key: "concat",
              value: function (t) {
                if (0 === this.length) return a.alloc(0);
                for (
                  var e, n, r, i = a.allocUnsafe(t >>> 0), o = this.head, s = 0;
                  o;

                )
                  (e = o.data),
                    (n = i),
                    (r = s),
                    a.prototype.copy.call(e, n, r),
                    (s += o.data.length),
                    (o = o.next);
                return i;
              },
            },
            {
              key: "consume",
              value: function (t, e) {
                var n;
                return (
                  t < this.head.data.length
                    ? ((n = this.head.data.slice(0, t)),
                      (this.head.data = this.head.data.slice(t)))
                    : (n =
                        t === this.head.data.length
                          ? this.shift()
                          : e
                          ? this._getString(t)
                          : this._getBuffer(t)),
                  n
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (t) {
                var e = this.head,
                  n = 1,
                  r = e.data;
                for (t -= r.length; (e = e.next); ) {
                  var i = e.data,
                    o = t > i.length ? i.length : t;
                  if (
                    (o === i.length ? (r += i) : (r += i.slice(0, t)),
                    0 === (t -= o))
                  ) {
                    o === i.length
                      ? (++n,
                        e.next
                          ? (this.head = e.next)
                          : (this.head = this.tail = null))
                      : ((this.head = e), (e.data = i.slice(o)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), r;
              },
            },
            {
              key: "_getBuffer",
              value: function (t) {
                var e = a.allocUnsafe(t),
                  n = this.head,
                  r = 1;
                for (n.data.copy(e), t -= n.data.length; (n = n.next); ) {
                  var i = n.data,
                    o = t > i.length ? i.length : t;
                  if ((i.copy(e, e.length - t, 0, o), 0 === (t -= o))) {
                    o === i.length
                      ? (++r,
                        n.next
                          ? (this.head = n.next)
                          : (this.head = this.tail = null))
                      : ((this.head = n), (n.data = i.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), e;
              },
            },
            {
              key: c,
              value: function (t, e) {
                return s(
                  this,
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? r(Object(n), !0).forEach(function (e) {
                            i(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : r(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  })({}, e, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]) && o(e.prototype, n),
          u && o(e, u),
          t
        );
      })();
    },
    ba4X: function (t, e, n) {
      t.exports = n.p + "images/bg.f30e040b65237ad1b07e12f4298b2a5d.png";
    },
    broN: function (t, e, n) {
      var r = n("lwBl");
      r(r.S, "Object", { setPrototypeOf: n("Ep2V").set });
    },
    cHZA: function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r,
        i = n("f2qI"),
        o = n.n(i),
        a = n("rIiI"),
        s = n.n(a),
        c = n("58BP"),
        u = n.n(c),
        l = n("Ptek"),
        f = n.n(l),
        h = n("tWqE"),
        p = n.n(h),
        d = n("gy9q"),
        _ = n.n(d),
        v = n("7DFi"),
        m = n.n(v),
        g = n("TJEx"),
        y = n.n(g),
        R = n("cQwn"),
        b = n.n(R),
        w = n("ZxgU"),
        E = n("b3NQ"),
        C = n("UUa7"),
        T = n("+xEq"),
        S = n("zvxk"),
        I = n("qxPZ"),
        O = n("KFtC"),
        M = n("Iplr"),
        P = [
          "server",
          "okCode",
          "transformRequest",
          "transformResponse",
          "adapter",
          "prefix",
        ];
      function k(t, e) {
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
            ? k(Object(n), !0).forEach(function (e) {
                b()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
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
            r = y()(t);
          if (e) {
            var i = y()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return m()(this, n);
        };
      }
      var L = null === (r = Object(O.I)()) || void 0 === r ? void 0 : r.params,
        x = Object(E.m)(S.b, S.a),
        D = Object(E.g)(x, Object(E.p)({ length: 50, maxAge: 12e4 })),
        B = (function (t) {
          _()(n, t);
          var e = N(n);
          function n(t) {
            var r;
            return (
              s()(this, n),
              (r = e.call(
                this,
                A({ baseURL: T.a.httpServer, prefix: "nimoui" }, t)
              )),
              b()(f()(r), "useSignal", !0),
              t && "useSignal" in t && (r.useSignal = t.useSignal),
              r
            );
          }
          return (
            u()(n, [
              {
                key: "fetch",
                value: function (t, e, r, i) {
                  var a = i || {},
                    s = a.server,
                    c = a.okCode,
                    u = a.transformRequest,
                    l = void 0 === u ? [] : u,
                    f = a.transformResponse,
                    h = void 0 === f ? [] : f,
                    d = (a.adapter, a.prefix),
                    _ = void 0 === d ? this.prefix : d,
                    v = o()(a, P);
                  return 1 === +(null === L || void 0 === L ? void 0 : L._cache)
                    ? Object(M.e)(t, e)
                    : (1 ===
                        +(null === L || void 0 === L
                          ? void 0
                          : L._interfaceConfig) && Object(M.d)(t, e, _),
                      p()(y()(n.prototype), "fetch", this).call(
                        this,
                        t,
                        A(
                          {
                            adapter: D,
                            server: s,
                            baseURL: this.baseURL,
                            method: "POST",
                            pathname: "/".concat(_, "/").concat(t),
                            moduleName: _,
                            structure: r,
                            data: e,
                            transformRequest: l.concat([
                              function (t) {
                                return t;
                              },
                            ]),
                            transformResponse: [
                              function (t, e) {
                                return Promise.resolve(t).then(function (t) {
                                  var n = Object(w.e)(t),
                                    r = (function () {
                                      var t,
                                        e =
                                          arguments.length > 0 &&
                                          void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {},
                                        n =
                                          arguments.length > 1 &&
                                          void 0 !== arguments[1]
                                            ? arguments[1]
                                            : [],
                                        r = e.returnValue,
                                        i = e.iCode,
                                        o = e.iErrCode,
                                        a = e.iErrorCode,
                                        s = e.code;
                                      n.push(C.a.kMRC_OK),
                                        (t =
                                          -1 === n.indexOf(r)
                                            ? r
                                            : -1 !== n.indexOf(i) || i
                                            ? i
                                            : -1 !== n.indexOf(o) || o
                                            ? o
                                            : -1 !== n.indexOf(a) || a
                                            ? a
                                            : -1 !== n.indexOf(s) || s
                                            ? s
                                            : r);
                                      return {
                                        code: t,
                                        isSuccess: n.indexOf(t) > -1,
                                      };
                                    })(n, c);
                                  return {
                                    data: n,
                                    code: r.code,
                                    isSuccess: r.isSuccess,
                                    config: e,
                                    rawData: n,
                                  };
                                });
                              },
                            ].concat(h),
                          },
                          v
                        )
                      ));
                },
              },
            ]),
            n
          );
        })(I.a);
      e.a = B;
    },
    cHkT: function (t, e, n) {
      t.exports = n("4KFe")(39);
    },
    cNwj: function (t, e, n) {
      t.exports =
        n.p + "images/openBox10.434122552a2f8229ee570059a740fa97.svga";
    },
    dBkQ: function (t, e) {
      "function" === typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var n = function () {};
              (n.prototype = e.prototype),
                (t.prototype = new n()),
                (t.prototype.constructor = t);
            }
          });
    },
    dQjy: function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r = { adjustX: 1, adjustY: 1 },
        i = [0, 0],
        o = (e.placements = {
          left: {
            points: ["cr", "cl"],
            overflow: r,
            offset: [-4, 0],
            targetOffset: i,
          },
          right: {
            points: ["cl", "cr"],
            overflow: r,
            offset: [4, 0],
            targetOffset: i,
          },
          top: {
            points: ["bc", "tc"],
            overflow: r,
            offset: [0, -4],
            targetOffset: i,
          },
          bottom: {
            points: ["tc", "bc"],
            overflow: r,
            offset: [0, 4],
            targetOffset: i,
          },
          topLeft: {
            points: ["bl", "tl"],
            overflow: r,
            offset: [0, -4],
            targetOffset: i,
          },
          leftTop: {
            points: ["tr", "tl"],
            overflow: r,
            offset: [-4, 0],
            targetOffset: i,
          },
          topRight: {
            points: ["br", "tr"],
            overflow: r,
            offset: [0, -4],
            targetOffset: i,
          },
          rightTop: {
            points: ["tl", "tr"],
            overflow: r,
            offset: [4, 0],
            targetOffset: i,
          },
          bottomRight: {
            points: ["tr", "br"],
            overflow: r,
            offset: [0, 4],
            targetOffset: i,
          },
          rightBottom: {
            points: ["bl", "br"],
            overflow: r,
            offset: [4, 0],
            targetOffset: i,
          },
          bottomLeft: {
            points: ["tl", "bl"],
            overflow: r,
            offset: [0, 4],
            targetOffset: i,
          },
          leftBottom: {
            points: ["br", "bl"],
            overflow: r,
            offset: [-4, 0],
            targetOffset: i,
          },
        });
      e.default = o;
    },
    diWg: function (t, e, n) {
      t.exports = n.p + "a532151b18103532fbcb4e77dfa42fd6.js";
    },
    eZQP: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i = n("ZxgU"),
        o =
          (n("leMB"),
          n("4OHv"),
          function () {
            (this.tUserId = new r.a.UserId()),
              (this.vFunctionIDs = new i.b.Vector(new i.b.INT64())),
              (this.tAnchorInfo = new r.a.AnchorInfo());
          });
      (o.prototype._clone = function () {
        return new r.a.BlackWhiteListReq();
      }),
        (o.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (o.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (o.prototype.writeTo = function (t) {
          t.writeStruct(0, this.tUserId),
            t.writeVector(1, this.vFunctionIDs),
            t.writeStruct(2, this.tAnchorInfo);
        }),
        (o.prototype.readFrom = function (t) {
          (this.tUserId = t.readStruct(0, !1, this.tUserId)),
            (this.vFunctionIDs = t.readVector(1, !1, this.vFunctionIDs)),
            (this.tAnchorInfo = t.readStruct(2, !1, this.tAnchorInfo));
        }),
        (r.a.BlackWhiteListReq = o),
        (e.a = o);
    },
    "f+xG": function (t, e, n) {
      n("gYY0")("Float64", 8, function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    "f/wc": function (t, e, n) {
      t.exports = n("4KFe")(48);
    },
    fCPl: function (t, e, n) {
      t.exports = n("CbEt").EventEmitter;
    },
    fDZT: function (t, e, n) {
      t.exports = n("4KFe")(8);
    },
    fMXq: function (t, e, n) {
      "use strict";
      var r = n("lwBl"),
        i = n("Vwta"),
        o = n("FazQ"),
        a = "startsWith",
        s = "".startsWith;
      r(r.P + r.F * n("WYnh")(a), "String", {
        startsWith: function (t) {
          var e = o(this, t, a),
            n = i(
              Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)
            ),
            r = String(t);
          return s ? s.call(e, r, n) : e.slice(n, n + r.length) === r;
        },
      });
    },
    fgcy: function (t, e, n) {
      t.exports = n("4KFe")(93);
    },
    g9v5: function (t, e, n) {
      (function (e) {
        function n(t) {
          try {
            if (!e.localStorage) return !1;
          } catch (r) {
            return !1;
          }
          var n = e.localStorage[t];
          return null != n && "true" === String(n).toLowerCase();
        }
        t.exports = function (t, e) {
          if (n("noDeprecation")) return t;
          var r = !1;
          return function () {
            if (!r) {
              if (n("throwDeprecation")) throw new Error(e);
              n("traceDeprecation") ? console.trace(e) : console.warn(e),
                (r = !0);
            }
            return t.apply(this, arguments);
          };
        };
      }.call(this, n("AeT1")));
    },
    gYY0: function (t, e, n) {
      "use strict";
      if (n("Y0+P")) {
        var r = n("LUnx"),
          i = n("C6AJ"),
          o = n("L2qc"),
          a = n("lwBl"),
          s = n("9TcU"),
          c = n("3mSk"),
          u = n("0unM"),
          l = n("NWdW"),
          f = n("tQhV"),
          h = n("6nwj"),
          p = n("f/wc"),
          d = n("V+4i"),
          _ = n("Vwta"),
          v = n("S3hb"),
          m = n("vvOr"),
          g = n("zc4o"),
          y = n("Fd/z"),
          R = n("/L9M"),
          b = n("vNXk"),
          w = n("ZZY+"),
          E = n("Dbg6"),
          C = n("Fvii"),
          T = n("WA5N"),
          S = n("Pmkc").f,
          I = n("6tLl"),
          O = n("aLcf"),
          M = n("HQGd"),
          P = n("PWmO"),
          k = n("fgcy"),
          A = n("9dcq"),
          N = n("uTDL"),
          L = n("AXM1"),
          x = n("t/Ns"),
          D = n("7Nv/"),
          B = n("Df7L"),
          G = n("vQry"),
          U = n("fDZT"),
          j = n("xyCw"),
          F = U.f,
          V = j.f,
          Y = i.RangeError,
          W = i.TypeError,
          H = i.Uint8Array,
          K = "ArrayBuffer",
          z = "SharedArrayBuffer",
          X = "BYTES_PER_ELEMENT",
          q = Array.prototype,
          Q = c.ArrayBuffer,
          J = c.DataView,
          Z = P(0),
          $ = P(2),
          tt = P(3),
          et = P(4),
          nt = P(5),
          rt = P(6),
          it = k(!0),
          ot = k(!1),
          at = N.values,
          st = N.keys,
          ct = N.entries,
          ut = q.lastIndexOf,
          lt = q.reduce,
          ft = q.reduceRight,
          ht = q.join,
          pt = q.sort,
          dt = q.slice,
          _t = q.toString,
          vt = q.toLocaleString,
          mt = M("iterator"),
          gt = M("toStringTag"),
          yt = O("typed_constructor"),
          Rt = O("def_constructor"),
          bt = s.CONSTR,
          wt = s.TYPED,
          Et = s.VIEW,
          Ct = "Wrong length!",
          Tt = P(1, function (t, e) {
            return Pt(A(t, t[Rt]), e);
          }),
          St = o(function () {
            return 1 === new H(new Uint16Array([1]).buffer)[0];
          }),
          It =
            !!H &&
            !!H.prototype.set &&
            o(function () {
              new H(1).set({});
            }),
          Ot = function (t, e) {
            var n = d(t);
            if (n < 0 || n % e) throw Y("Wrong offset!");
            return n;
          },
          Mt = function (t) {
            if (b(t) && wt in t) return t;
            throw W(t + " is not a typed array!");
          },
          Pt = function (t, e) {
            if (!b(t) || !(yt in t))
              throw W("It is not a typed array constructor!");
            return new t(e);
          },
          kt = function (t, e) {
            return At(A(t, t[Rt]), e);
          },
          At = function (t, e) {
            for (var n = 0, r = e.length, i = Pt(t, r); r > n; ) i[n] = e[n++];
            return i;
          },
          Nt = function (t, e, n) {
            F(t, e, {
              get: function () {
                return this._d[n];
              },
            });
          },
          Lt = function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              s = w(t),
              c = arguments.length,
              l = c > 1 ? arguments[1] : void 0,
              f = void 0 !== l,
              h = I(s);
            if (void 0 != h && !E(h)) {
              for (a = h.call(s), r = [], e = 0; !(o = a.next()).done; e++)
                r.push(o.value);
              s = r;
            }
            for (
              f && c > 2 && (l = u(l, arguments[2], 2)),
                e = 0,
                n = _(s.length),
                i = Pt(this, n);
              n > e;
              e++
            )
              i[e] = f ? l(s[e], e) : s[e];
            return i;
          },
          xt = function () {
            for (var t = 0, e = arguments.length, n = Pt(this, e); e > t; )
              n[t] = arguments[t++];
            return n;
          },
          Dt =
            !!H &&
            o(function () {
              vt.call(new H(1));
            }),
          Bt = function () {
            return vt.apply(Dt ? dt.call(Mt(this)) : Mt(this), arguments);
          },
          Gt = {
            copyWithin: function (t, e) {
              return G.call(
                Mt(this),
                t,
                e,
                arguments.length > 2 ? arguments[2] : void 0
              );
            },
            every: function (t) {
              return et(
                Mt(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            fill: function (t) {
              return B.apply(Mt(this), arguments);
            },
            filter: function (t) {
              return kt(
                this,
                $(Mt(this), t, arguments.length > 1 ? arguments[1] : void 0)
              );
            },
            find: function (t) {
              return nt(
                Mt(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            findIndex: function (t) {
              return rt(
                Mt(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            forEach: function (t) {
              Z(Mt(this), t, arguments.length > 1 ? arguments[1] : void 0);
            },
            indexOf: function (t) {
              return ot(
                Mt(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            includes: function (t) {
              return it(
                Mt(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            join: function (t) {
              return ht.apply(Mt(this), arguments);
            },
            lastIndexOf: function (t) {
              return ut.apply(Mt(this), arguments);
            },
            map: function (t) {
              return Tt(
                Mt(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            reduce: function (t) {
              return lt.apply(Mt(this), arguments);
            },
            reduceRight: function (t) {
              return ft.apply(Mt(this), arguments);
            },
            reverse: function () {
              for (
                var t, e = this, n = Mt(e).length, r = Math.floor(n / 2), i = 0;
                i < r;

              )
                (t = e[i]), (e[i++] = e[--n]), (e[n] = t);
              return e;
            },
            some: function (t) {
              return tt(
                Mt(this),
                t,
                arguments.length > 1 ? arguments[1] : void 0
              );
            },
            sort: function (t) {
              return pt.call(Mt(this), t);
            },
            subarray: function (t, e) {
              var n = Mt(this),
                r = n.length,
                i = m(t, r);
              return new (A(n, n[Rt]))(
                n.buffer,
                n.byteOffset + i * n.BYTES_PER_ELEMENT,
                _((void 0 === e ? r : m(e, r)) - i)
              );
            },
          },
          Ut = function (t, e) {
            return kt(this, dt.call(Mt(this), t, e));
          },
          jt = function (t) {
            Mt(this);
            var e = Ot(arguments[1], 1),
              n = this.length,
              r = w(t),
              i = _(r.length),
              o = 0;
            if (i + e > n) throw Y(Ct);
            for (; o < i; ) this[e + o] = r[o++];
          },
          Ft = {
            entries: function () {
              return ct.call(Mt(this));
            },
            keys: function () {
              return st.call(Mt(this));
            },
            values: function () {
              return at.call(Mt(this));
            },
          },
          Vt = function (t, e) {
            return (
              b(t) &&
              t[wt] &&
              "symbol" != typeof e &&
              e in t &&
              String(+e) == String(e)
            );
          },
          Yt = function (t, e) {
            return Vt(t, (e = g(e, !0))) ? f(2, t[e]) : V(t, e);
          },
          Wt = function (t, e, n) {
            return !(Vt(t, (e = g(e, !0))) && b(n) && y(n, "value")) ||
              y(n, "get") ||
              y(n, "set") ||
              n.configurable ||
              (y(n, "writable") && !n.writable) ||
              (y(n, "enumerable") && !n.enumerable)
              ? F(t, e, n)
              : ((t[e] = n.value), t);
          };
        bt || ((j.f = Yt), (U.f = Wt)),
          a(a.S + a.F * !bt, "Object", {
            getOwnPropertyDescriptor: Yt,
            defineProperty: Wt,
          }),
          o(function () {
            _t.call({});
          }) &&
            (_t = vt =
              function () {
                return ht.call(this);
              });
        var Ht = p({}, Gt);
        p(Ht, Ft),
          h(Ht, mt, Ft.values),
          p(Ht, {
            slice: Ut,
            set: jt,
            constructor: function () {},
            toString: _t,
            toLocaleString: Bt,
          }),
          Nt(Ht, "buffer", "b"),
          Nt(Ht, "byteOffset", "o"),
          Nt(Ht, "byteLength", "l"),
          Nt(Ht, "length", "e"),
          F(Ht, gt, {
            get: function () {
              return this[wt];
            },
          }),
          (t.exports = function (t, e, n, c) {
            var u = t + ((c = !!c) ? "Clamped" : "") + "Array",
              f = "get" + t,
              p = "set" + t,
              d = i[u],
              m = d || {},
              g = d && T(d),
              y = !d || !s.ABV,
              w = {},
              E = d && d.prototype,
              I = function (t, n) {
                F(t, n, {
                  get: function () {
                    return (function (t, n) {
                      var r = t._d;
                      return r.v[f](n * e + r.o, St);
                    })(this, n);
                  },
                  set: function (t) {
                    return (function (t, n, r) {
                      var i = t._d;
                      c &&
                        (r =
                          (r = Math.round(r)) < 0
                            ? 0
                            : r > 255
                            ? 255
                            : 255 & r),
                        i.v[p](n * e + i.o, r, St);
                    })(this, n, t);
                  },
                  enumerable: !0,
                });
              };
            y
              ? ((d = n(function (t, n, r, i) {
                  l(t, d, u, "_d");
                  var o,
                    a,
                    s,
                    c,
                    f = 0,
                    p = 0;
                  if (b(n)) {
                    if (!(n instanceof Q || (c = R(n)) == K || c == z))
                      return wt in n ? At(d, n) : Lt.call(d, n);
                    (o = n), (p = Ot(r, e));
                    var m = n.byteLength;
                    if (void 0 === i) {
                      if (m % e) throw Y(Ct);
                      if ((a = m - p) < 0) throw Y(Ct);
                    } else if ((a = _(i) * e) + p > m) throw Y(Ct);
                    s = a / e;
                  } else (s = v(n)), (o = new Q((a = s * e)));
                  for (
                    h(t, "_d", { b: o, o: p, l: a, e: s, v: new J(o) });
                    f < s;

                  )
                    I(t, f++);
                })),
                (E = d.prototype = C(Ht)),
                h(E, "constructor", d))
              : (o(function () {
                  d(1);
                }) &&
                  o(function () {
                    new d(-1);
                  }) &&
                  x(function (t) {
                    new d(), new d(null), new d(1.5), new d(t);
                  }, !0)) ||
                ((d = n(function (t, n, r, i) {
                  var o;
                  return (
                    l(t, d, u),
                    b(n)
                      ? n instanceof Q || (o = R(n)) == K || o == z
                        ? void 0 !== i
                          ? new m(n, Ot(r, e), i)
                          : void 0 !== r
                          ? new m(n, Ot(r, e))
                          : new m(n)
                        : wt in n
                        ? At(d, n)
                        : Lt.call(d, n)
                      : new m(v(n))
                  );
                })),
                Z(
                  g !== Function.prototype ? S(m).concat(S(g)) : S(m),
                  function (t) {
                    t in d || h(d, t, m[t]);
                  }
                ),
                (d.prototype = E),
                r || (E.constructor = d));
            var O = E[mt],
              M = !!O && ("values" == O.name || void 0 == O.name),
              P = Ft.values;
            h(d, yt, !0),
              h(E, wt, u),
              h(E, Et, !0),
              h(E, Rt, d),
              (c ? new d(1)[gt] == u : gt in E) ||
                F(E, gt, {
                  get: function () {
                    return u;
                  },
                }),
              (w[u] = d),
              a(a.G + a.W + a.F * (d != m), w),
              a(a.S, u, { BYTES_PER_ELEMENT: e }),
              a(
                a.S +
                  a.F *
                    o(function () {
                      m.of.call(d, 1);
                    }),
                u,
                { from: Lt, of: xt }
              ),
              X in E || h(E, X, e),
              a(a.P, u, Gt),
              D(u),
              a(a.P + a.F * It, u, { set: jt }),
              a(a.P + a.F * !M, u, Ft),
              r || E.toString == _t || (E.toString = _t),
              a(
                a.P +
                  a.F *
                    o(function () {
                      new d(1).slice();
                    }),
                u,
                { slice: Ut }
              ),
              a(
                a.P +
                  a.F *
                    (o(function () {
                      return (
                        [1, 2].toLocaleString() !=
                        new d([1, 2]).toLocaleString()
                      );
                    }) ||
                      !o(function () {
                        E.toLocaleString.call([1, 2]);
                      })),
                u,
                { toLocaleString: Bt }
              ),
              (L[u] = M ? O : P),
              r || M || h(E, mt, P);
          });
      } else t.exports = function () {};
    },
    gfHD: function (t, e) {
      var n = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        return null != t && n.call(t, e);
      };
    },
    "h+kL": function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          n("5orL"),
          function () {
            (this.sIcon = ""),
              (this.sDynamicResource = ""),
              (this.sCornerIcon = ""),
              (this.tGiftEffect = new r.a.GiftEffect());
          });
      (i.prototype._clone = function () {
        return new r.a.GiftResource();
      }),
        (i.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (i.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (i.prototype.writeTo = function (t) {
          t.writeString(0, this.sIcon),
            t.writeString(1, this.sDynamicResource),
            t.writeString(2, this.sCornerIcon),
            t.writeStruct(3, this.tGiftEffect);
        }),
        (i.prototype.readFrom = function (t) {
          (this.sIcon = t.readString(0, !1, this.sIcon)),
            (this.sDynamicResource = t.readString(
              1,
              !1,
              this.sDynamicResource
            )),
            (this.sCornerIcon = t.readString(2, !1, this.sCornerIcon)),
            (this.tGiftEffect = t.readStruct(3, !1, this.tGiftEffect));
        }),
        (r.a.GiftResource = i);
    },
    "hGl+": function (t, e, n) {
      t.exports = n.p + "images/button1.3164d0f57cdebcf72ef12cce19841cf8.png";
    },
    "iYl+": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return s;
      });
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("avFb"),
        a = o.createContext();
      function s(t) {
        return o.forwardRef(function (e, n) {
          return o.createElement(a.Consumer, null, function (r) {
            return o.createElement(t, i()({}, r, e, { ref: n }));
          });
        });
      }
      e.a = a;
    },
    j3Dz: function (t, e, n) {
      "use strict";
      (function (e) {
        var r;
        function i(t, e, n) {
          return (
            e in t
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
        var o = n("yq2O"),
          a = Symbol("lastResolve"),
          s = Symbol("lastReject"),
          c = Symbol("error"),
          u = Symbol("ended"),
          l = Symbol("lastPromise"),
          f = Symbol("handlePromise"),
          h = Symbol("stream");
        function p(t, e) {
          return { value: t, done: e };
        }
        function d(t) {
          var e = t[a];
          if (null !== e) {
            var n = t[h].read();
            null !== n &&
              ((t[l] = null), (t[a] = null), (t[s] = null), e(p(n, !1)));
          }
        }
        function _(t) {
          e.nextTick(d, t);
        }
        var v = Object.getPrototypeOf(function () {}),
          m = Object.setPrototypeOf(
            (i(
              (r = {
                get stream() {
                  return this[h];
                },
                next: function () {
                  var t = this,
                    n = this[c];
                  if (null !== n) return Promise.reject(n);
                  if (this[u]) return Promise.resolve(p(void 0, !0));
                  if (this[h].destroyed)
                    return new Promise(function (n, r) {
                      e.nextTick(function () {
                        t[c] ? r(t[c]) : n(p(void 0, !0));
                      });
                    });
                  var r,
                    i = this[l];
                  if (i)
                    r = new Promise(
                      (function (t, e) {
                        return function (n, r) {
                          t.then(function () {
                            e[u] ? n(p(void 0, !0)) : e[f](n, r);
                          }, r);
                        };
                      })(i, this)
                    );
                  else {
                    var o = this[h].read();
                    if (null !== o) return Promise.resolve(p(o, !1));
                    r = new Promise(this[f]);
                  }
                  return (this[l] = r), r;
                },
              }),
              Symbol.asyncIterator,
              function () {
                return this;
              }
            ),
            i(r, "return", function () {
              var t = this;
              return new Promise(function (e, n) {
                t[h].destroy(null, function (t) {
                  t ? n(t) : e(p(void 0, !0));
                });
              });
            }),
            r),
            v
          );
        t.exports = function (t) {
          var e,
            n = Object.create(
              m,
              (i((e = {}), h, { value: t, writable: !0 }),
              i(e, a, { value: null, writable: !0 }),
              i(e, s, { value: null, writable: !0 }),
              i(e, c, { value: null, writable: !0 }),
              i(e, u, { value: t._readableState.endEmitted, writable: !0 }),
              i(e, f, {
                value: function (t, e) {
                  var r = n[h].read();
                  r
                    ? ((n[l] = null), (n[a] = null), (n[s] = null), t(p(r, !1)))
                    : ((n[a] = t), (n[s] = e));
                },
                writable: !0,
              }),
              e)
            );
          return (
            (n[l] = null),
            o(t, function (t) {
              if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                var e = n[s];
                return (
                  null !== e &&
                    ((n[l] = null), (n[a] = null), (n[s] = null), e(t)),
                  void (n[c] = t)
                );
              }
              var r = n[a];
              null !== r &&
                ((n[l] = null), (n[a] = null), (n[s] = null), r(p(void 0, !0))),
                (n[u] = !0);
            }),
            t.on("readable", _.bind(null, n)),
            n
          );
        };
      }.call(this, n("vphx")));
    },
    lQGm: function (t, e, n) {
      "use strict";
      var r,
        i = n("V7zW"),
        o = n("nimoua"),
        a = n.n(o),
        s = a.a.isInNimoApp,
        c = a.a.isWap,
        u = {
          activity: "nimo_activity",
          desktop: "nimo_web",
          mobile: "nimo_wap",
        },
        l =
          Object(i.d)() ||
          u[null === (r = window) || void 0 === r ? void 0 : r.G_REPORT_TYPE] ||
          "";
      l || (l = s ? "nimo_activity" : c ? "nimo_wap" : "nimo_web");
      var f = new i.b({ pro: l });
      e.a = f;
    },
    lftJ: function (t, e, n) {
      "use strict";
      var r = n("AeXG"),
        i = n.n(r),
        o = n("P+UK"),
        a = n.n(o),
        s = n("vlBN"),
        c = n.n(s),
        u = n("HNvz"),
        l = n.n(u),
        f = n("avFb"),
        h = n.n(f),
        p = n("jmMi"),
        d = n.n(p),
        _ = n("6Zxk"),
        v = n.n(_);
      function m(t, e) {
        for (var n = e; n; ) {
          if (n === t) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      var g = n("o9KI");
      function y(t) {
        return (y =
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
      function R(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function b(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function w(t, e) {
        return (w =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function E(t) {
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
            r = T(t);
          if (e) {
            var i = T(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return C(this, n);
        };
      }
      function C(t, e) {
        return !e || ("object" !== y(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function T(t) {
        return (T = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var S = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && w(t, e);
        })(o, t);
        var e,
          n,
          r,
          i = E(o);
        function o() {
          var t;
          R(this, o);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            ((t = i.call.apply(i, [this].concat(n))).removeContainer =
              function () {
                t.container &&
                  (v.a.unmountComponentAtNode(t.container),
                  t.container.parentNode.removeChild(t.container),
                  (t.container = null));
              }),
            (t.renderComponent = function (e, n) {
              var r = t.props,
                i = r.visible,
                o = r.getComponent,
                a = r.forceRender,
                s = r.getContainer,
                c = r.parent;
              (i || c._component || a) &&
                (t.container || (t.container = s()),
                v.a.unstable_renderSubtreeIntoContainer(
                  c,
                  o(e),
                  t.container,
                  function () {
                    n && n.call(this);
                  }
                ));
            }),
            t
          );
        }
        return (
          (e = o),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.autoMount && this.renderComponent();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.props.autoMount && this.renderComponent();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.props.autoDestroy && this.removeContainer();
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.children({
                  renderComponent: this.renderComponent,
                  removeContainer: this.removeContainer,
                });
              },
            },
          ]) && b(e.prototype, n),
          r && b(e, r),
          o
        );
      })(h.a.Component);
      function I(t) {
        return (I =
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
      function O(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function M(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function P(t, e) {
        return (P =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function k(t) {
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
            r = N(t);
          if (e) {
            var i = N(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return A(this, n);
        };
      }
      function A(t, e) {
        return !e || ("object" !== I(e) && "function" !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function N(t) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      (S.propTypes = {
        autoMount: d.a.bool,
        autoDestroy: d.a.bool,
        visible: d.a.bool,
        forceRender: d.a.bool,
        parent: d.a.any,
        getComponent: d.a.func.isRequired,
        getContainer: d.a.func.isRequired,
        children: d.a.func.isRequired,
      }),
        (S.defaultProps = { autoMount: !0, autoDestroy: !0, forceRender: !1 });
      var L = (function (t) {
        !(function (t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && P(t, e);
        })(o, t);
        var e,
          n,
          r,
          i = k(o);
        function o() {
          return O(this, o), i.apply(this, arguments);
        }
        return (
          (e = o),
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
                  ? v.a.createPortal(this.props.children, this._container)
                  : null;
              },
            },
          ]) && M(e.prototype, n),
          r && M(e, r),
          o
        );
      })(h.a.Component);
      L.propTypes = {
        getContainer: d.a.func.isRequired,
        children: d.a.node.isRequired,
        didUpdate: d.a.func,
      };
      var x = n("kPK6"),
        D = n.n(x);
      function B(t, e, n) {
        return n ? t[0] === e[0] : t[0] === e[0] && t[1] === e[1];
      }
      function G(t, e) {
        this[t] = e;
      }
      var U,
        j = n("ax1G"),
        F = n.n(j);
      function V(t, e) {
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
            ? V(Object(n), !0).forEach(function (e) {
                H(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function W(t) {
        return (W =
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
      function H(t, e, n) {
        return (
          e in t
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
      var K = { Webkit: "-webkit-", Moz: "-moz-", ms: "-ms-", O: "-o-" };
      function z() {
        if (void 0 !== U) return U;
        U = "";
        var t = document.createElement("p").style;
        for (var e in K) e + "Transform" in t && (U = e);
        return U;
      }
      function X() {
        return z()
          ? "".concat(z(), "TransitionProperty")
          : "transitionProperty";
      }
      function q() {
        return z() ? "".concat(z(), "Transform") : "transform";
      }
      function Q(t, e) {
        var n = X();
        n &&
          ((t.style[n] = e),
          "transitionProperty" !== n && (t.style.transitionProperty = e));
      }
      function J(t, e) {
        var n = q();
        n && ((t.style[n] = e), "transform" !== n && (t.style.transform = e));
      }
      var Z,
        $ = /matrix\((.*)\)/,
        tt = /matrix3d\((.*)\)/;
      function et(t) {
        var e = t.style.display;
        (t.style.display = "none"), t.offsetHeight, (t.style.display = e);
      }
      function nt(t, e, n) {
        var r = n;
        if ("object" !== W(e))
          return "undefined" !== typeof r
            ? ("number" === typeof r && (r = "".concat(r, "px")),
              void (t.style[e] = r))
            : Z(t, e);
        for (var i in e) e.hasOwnProperty(i) && nt(t, i, e[i]);
      }
      function rt(t, e) {
        var n = t["page".concat(e ? "Y" : "X", "Offset")],
          r = "scroll".concat(e ? "Top" : "Left");
        if ("number" !== typeof n) {
          var i = t.document;
          "number" !== typeof (n = i.documentElement[r]) && (n = i.body[r]);
        }
        return n;
      }
      function it(t) {
        return rt(t);
      }
      function ot(t) {
        return rt(t, !0);
      }
      function at(t) {
        var e = (function (t) {
            var e,
              n,
              r,
              i = t.ownerDocument,
              o = i.body,
              a = i && i.documentElement;
            return (
              (n = (e = t.getBoundingClientRect()).left),
              (r = e.top),
              {
                left: (n -= a.clientLeft || o.clientLeft || 0),
                top: (r -= a.clientTop || o.clientTop || 0),
              }
            );
          })(t),
          n = t.ownerDocument,
          r = n.defaultView || n.parentWindow;
        return (e.left += it(r)), (e.top += ot(r)), e;
      }
      function st(t) {
        return null !== t && void 0 !== t && t == t.window;
      }
      function ct(t) {
        return st(t) ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      }
      var ut = new RegExp(
          "^(".concat(
            /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            ")(?!px)[a-z%]+$"
          ),
          "i"
        ),
        lt = /^(top|right|bottom|left)$/;
      function ft(t, e) {
        return "left" === t
          ? e.useCssRight
            ? "right"
            : t
          : e.useCssBottom
          ? "bottom"
          : t;
      }
      function ht(t) {
        return "left" === t
          ? "right"
          : "right" === t
          ? "left"
          : "top" === t
          ? "bottom"
          : "bottom" === t
          ? "top"
          : void 0;
      }
      function pt(t, e, n) {
        "static" === nt(t, "position") && (t.style.position = "relative");
        var r = -999,
          i = -999,
          o = ft("left", n),
          a = ft("top", n),
          s = ht(o),
          c = ht(a);
        "left" !== o && (r = 999), "top" !== a && (i = 999);
        var u,
          l = "",
          f = at(t);
        ("left" in e || "top" in e) &&
          ((l = (u = t).style.transitionProperty || u.style[X()] || ""),
          Q(t, "none")),
          "left" in e && ((t.style[s] = ""), (t.style[o] = "".concat(r, "px"))),
          "top" in e && ((t.style[c] = ""), (t.style[a] = "".concat(i, "px"))),
          et(t);
        var h = at(t),
          p = {};
        for (var d in e)
          if (e.hasOwnProperty(d)) {
            var _ = ft(d, n),
              v = "left" === d ? r : i,
              m = f[d] - h[d];
            p[_] = _ === d ? v + m : v - m;
          }
        nt(t, p), et(t), ("left" in e || "top" in e) && Q(t, l);
        var g = {};
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var R = ft(y, n),
              b = e[y] - f[y];
            g[R] = y === R ? p[R] + b : p[R] - b;
          }
        nt(t, g);
      }
      function dt(t, e) {
        var n = at(t),
          r = (function (t) {
            var e = window.getComputedStyle(t, null),
              n = e.getPropertyValue("transform") || e.getPropertyValue(q());
            if (n && "none" !== n) {
              var r = n.replace(/[^0-9\-.,]/g, "").split(",");
              return {
                x: parseFloat(r[12] || r[4], 0),
                y: parseFloat(r[13] || r[5], 0),
              };
            }
            return { x: 0, y: 0 };
          })(t),
          i = { x: r.x, y: r.y };
        "left" in e && (i.x = r.x + e.left - n.left),
          "top" in e && (i.y = r.y + e.top - n.top),
          (function (t, e) {
            var n = window.getComputedStyle(t, null),
              r = n.getPropertyValue("transform") || n.getPropertyValue(q());
            if (r && "none" !== r) {
              var i,
                o = r.match($);
              o
                ? (((i = (o = o[1]).split(",").map(function (t) {
                    return parseFloat(t, 10);
                  }))[4] = e.x),
                  (i[5] = e.y),
                  J(t, "matrix(".concat(i.join(","), ")")))
                : (((i = r
                    .match(tt)[1]
                    .split(",")
                    .map(function (t) {
                      return parseFloat(t, 10);
                    }))[12] = e.x),
                  (i[13] = e.y),
                  J(t, "matrix3d(".concat(i.join(","), ")")));
            } else
              J(
                t,
                "translateX("
                  .concat(e.x, "px) translateY(")
                  .concat(e.y, "px) translateZ(0)")
              );
          })(t, i);
      }
      function _t(t, e) {
        for (var n = 0; n < t.length; n++) e(t[n]);
      }
      function vt(t) {
        return "border-box" === Z(t, "boxSizing");
      }
      "undefined" !== typeof window &&
        (Z = window.getComputedStyle
          ? function (t, e, n) {
              var r = n,
                i = "",
                o = ct(t);
              return (
                (r = r || o.defaultView.getComputedStyle(t, null)) &&
                  (i = r.getPropertyValue(e) || r[e]),
                i
              );
            }
          : function (t, e) {
              var n = t.currentStyle && t.currentStyle[e];
              if (ut.test(n) && !lt.test(e)) {
                var r = t.style,
                  i = r.left,
                  o = t.runtimeStyle.left;
                (t.runtimeStyle.left = t.currentStyle.left),
                  (r.left = "fontSize" === e ? "1em" : n || 0),
                  (n = r.pixelLeft + "px"),
                  (r.left = i),
                  (t.runtimeStyle.left = o);
              }
              return "" === n ? "auto" : n;
            });
      var mt = ["margin", "border", "padding"];
      function gt(t, e, n) {
        var r,
          i = {},
          o = t.style;
        for (r in e) e.hasOwnProperty(r) && ((i[r] = o[r]), (o[r] = e[r]));
        for (r in (n.call(t), e)) e.hasOwnProperty(r) && (o[r] = i[r]);
      }
      function yt(t, e, n) {
        var r,
          i,
          o,
          a = 0;
        for (i = 0; i < e.length; i++)
          if ((r = e[i]))
            for (o = 0; o < n.length; o++) {
              var s = void 0;
              (s =
                "border" === r ? "".concat(r).concat(n[o], "Width") : r + n[o]),
                (a += parseFloat(Z(t, s)) || 0);
            }
        return a;
      }
      var Rt = {
        getParent: function (t) {
          var e = t;
          do {
            e = 11 === e.nodeType && e.host ? e.host : e.parentNode;
          } while (e && 1 !== e.nodeType && 9 !== e.nodeType);
          return e;
        },
      };
      function bt(t, e, n) {
        var r = n;
        if (st(t))
          return "width" === e ? Rt.viewportWidth(t) : Rt.viewportHeight(t);
        if (9 === t.nodeType)
          return "width" === e ? Rt.docWidth(t) : Rt.docHeight(t);
        var i = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
          o =
            "width" === e
              ? t.getBoundingClientRect().width
              : t.getBoundingClientRect().height,
          a = vt(t),
          s = 0;
        (null === o || void 0 === o || o <= 0) &&
          ((o = void 0),
          (null === (s = Z(t, e)) || void 0 === s || Number(s) < 0) &&
            (s = t.style[e] || 0),
          (s = parseFloat(s) || 0)),
          void 0 === r && (r = a ? 1 : -1);
        var c = void 0 !== o || a,
          u = o || s;
        return -1 === r
          ? c
            ? u - yt(t, ["border", "padding"], i)
            : s
          : c
          ? 1 === r
            ? u
            : u + (2 === r ? -yt(t, ["border"], i) : yt(t, ["margin"], i))
          : s + yt(t, mt.slice(r), i);
      }
      _t(["Width", "Height"], function (t) {
        (Rt["doc".concat(t)] = function (e) {
          var n = e.document;
          return Math.max(
            n.documentElement["scroll".concat(t)],
            n.body["scroll".concat(t)],
            Rt["viewport".concat(t)](n)
          );
        }),
          (Rt["viewport".concat(t)] = function (e) {
            var n = "client".concat(t),
              r = e.document,
              i = r.body,
              o = r.documentElement[n];
            return ("CSS1Compat" === r.compatMode && o) || (i && i[n]) || o;
          });
      });
      var wt = { position: "absolute", visibility: "hidden", display: "block" };
      function Et() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        var r,
          i = e[0];
        return (
          0 !== i.offsetWidth
            ? (r = bt.apply(void 0, e))
            : gt(i, wt, function () {
                r = bt.apply(void 0, e);
              }),
          r
        );
      }
      function Ct(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
      }
      _t(["width", "height"], function (t) {
        var e = t.charAt(0).toUpperCase() + t.slice(1);
        Rt["outer".concat(e)] = function (e, n) {
          return e && Et(e, t, n ? 0 : 1);
        };
        var n = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"];
        Rt[t] = function (e, r) {
          var i = r;
          return void 0 !== i
            ? e
              ? (vt(e) && (i += yt(e, ["padding", "border"], n)), nt(e, t, i))
              : void 0
            : e && Et(e, t, -1);
        };
      });
      var Tt = {
        getWindow: function (t) {
          if (t && t.document && t.setTimeout) return t;
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow;
        },
        getDocument: ct,
        offset: function (t, e, n) {
          if ("undefined" === typeof e) return at(t);
          !(function (t, e, n) {
            if (n.ignoreShake) {
              var r = at(t),
                i = r.left.toFixed(0),
                o = r.top.toFixed(0),
                a = e.left.toFixed(0),
                s = e.top.toFixed(0);
              if (i === a && o === s) return;
            }
            n.useCssRight || n.useCssBottom
              ? pt(t, e, n)
              : n.useCssTransform && q() in document.body.style
              ? dt(t, e)
              : pt(t, e, n);
          })(t, e, n || {});
        },
        isWindow: st,
        each: _t,
        css: nt,
        clone: function (t) {
          var e,
            n = {};
          for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
          if (t.overflow)
            for (e in t) t.hasOwnProperty(e) && (n.overflow[e] = t.overflow[e]);
          return n;
        },
        mix: Ct,
        getWindowScrollLeft: function (t) {
          return it(t);
        },
        getWindowScrollTop: function (t) {
          return ot(t);
        },
        merge: function () {
          for (var t = {}, e = 0; e < arguments.length; e++)
            Tt.mix(t, e < 0 || arguments.length <= e ? void 0 : arguments[e]);
          return t;
        },
        viewportWidth: 0,
        viewportHeight: 0,
      };
      Ct(Tt, Rt);
      var St = Tt.getParent;
      function It(t) {
        if (Tt.isWindow(t) || 9 === t.nodeType) return null;
        var e,
          n = Tt.getDocument(t).body,
          r = Tt.css(t, "position");
        if (!("fixed" === r || "absolute" === r))
          return "html" === t.nodeName.toLowerCase() ? null : St(t);
        for (e = St(t); e && e !== n && 9 !== e.nodeType; e = St(e))
          if ("static" !== (r = Tt.css(e, "position"))) return e;
        return null;
      }
      var Ot = Tt.getParent;
      function Mt(t, e) {
        for (
          var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
            r = It(t),
            i = Tt.getDocument(t),
            o = i.defaultView || i.parentWindow,
            a = i.body,
            s = i.documentElement;
          r;

        ) {
          if (
            (-1 !== navigator.userAgent.indexOf("MSIE") &&
              0 === r.clientWidth) ||
            r === a ||
            r === s ||
            "visible" === Tt.css(r, "overflow")
          ) {
            if (r === a || r === s) break;
          } else {
            var c = Tt.offset(r);
            (c.left += r.clientLeft),
              (c.top += r.clientTop),
              (n.top = Math.max(n.top, c.top)),
              (n.right = Math.min(n.right, c.left + r.clientWidth)),
              (n.bottom = Math.min(n.bottom, c.top + r.clientHeight)),
              (n.left = Math.max(n.left, c.left));
          }
          r = It(r);
        }
        var u = null;
        Tt.isWindow(t) ||
          9 === t.nodeType ||
          ((u = t.style.position),
          "absolute" === Tt.css(t, "position") && (t.style.position = "fixed"));
        var l = Tt.getWindowScrollLeft(o),
          f = Tt.getWindowScrollTop(o),
          h = Tt.viewportWidth(o),
          p = Tt.viewportHeight(o),
          d = s.scrollWidth,
          _ = s.scrollHeight,
          v = window.getComputedStyle(a);
        if (
          ("hidden" === v.overflowX && (d = o.innerWidth),
          "hidden" === v.overflowY && (_ = o.innerHeight),
          t.style && (t.style.position = u),
          e ||
            (function (t) {
              if (Tt.isWindow(t) || 9 === t.nodeType) return !1;
              var e = Tt.getDocument(t),
                n = e.body,
                r = null;
              for (r = Ot(t); r && r !== n && r !== e; r = Ot(r))
                if ("fixed" === Tt.css(r, "position")) return !0;
              return !1;
            })(t))
        )
          (n.left = Math.max(n.left, l)),
            (n.top = Math.max(n.top, f)),
            (n.right = Math.min(n.right, l + h)),
            (n.bottom = Math.min(n.bottom, f + p));
        else {
          var m = Math.max(d, l + h);
          n.right = Math.min(n.right, m);
          var g = Math.max(_, f + p);
          n.bottom = Math.min(n.bottom, g);
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
          ? n
          : null;
      }
      function Pt(t) {
        var e, n, r;
        if (Tt.isWindow(t) || 9 === t.nodeType) {
          var i = Tt.getWindow(t);
          (e = {
            left: Tt.getWindowScrollLeft(i),
            top: Tt.getWindowScrollTop(i),
          }),
            (n = Tt.viewportWidth(i)),
            (r = Tt.viewportHeight(i));
        } else
          (e = Tt.offset(t)), (n = Tt.outerWidth(t)), (r = Tt.outerHeight(t));
        return (e.width = n), (e.height = r), e;
      }
      function kt(t, e) {
        var n = e.charAt(0),
          r = e.charAt(1),
          i = t.width,
          o = t.height,
          a = t.left,
          s = t.top;
        return (
          "c" === n ? (s += o / 2) : "b" === n && (s += o),
          "c" === r ? (a += i / 2) : "r" === r && (a += i),
          { left: a, top: s }
        );
      }
      function At(t, e, n, r, i) {
        var o = kt(e, n[1]),
          a = kt(t, n[0]),
          s = [a.left - o.left, a.top - o.top];
        return {
          left: Math.round(t.left - s[0] + r[0] - i[0]),
          top: Math.round(t.top - s[1] + r[1] - i[1]),
        };
      }
      function Nt(t, e, n) {
        return t.left < n.left || t.left + e.width > n.right;
      }
      function Lt(t, e, n) {
        return t.top < n.top || t.top + e.height > n.bottom;
      }
      function xt(t, e, n) {
        var r = [];
        return (
          Tt.each(t, function (t) {
            r.push(
              t.replace(e, function (t) {
                return n[t];
              })
            );
          }),
          r
        );
      }
      function Dt(t, e) {
        return (t[e] = -t[e]), t;
      }
      function Bt(t, e) {
        return (
          (/%$/.test(t)
            ? (parseInt(t.substring(0, t.length - 1), 10) / 100) * e
            : parseInt(t, 10)) || 0
        );
      }
      function Gt(t, e) {
        (t[0] = Bt(t[0], e.width)), (t[1] = Bt(t[1], e.height));
      }
      function Ut(t, e, n, r) {
        var i = n.points,
          o = n.offset || [0, 0],
          a = n.targetOffset || [0, 0],
          s = n.overflow,
          c = n.source || t;
        (o = [].concat(o)), (a = [].concat(a));
        var u = {},
          l = 0,
          f = Mt(c, !(!(s = s || {}) || !s.alwaysByViewport)),
          h = Pt(c);
        Gt(o, h), Gt(a, e);
        var p = At(h, e, i, o, a),
          d = Tt.merge(h, p);
        if (f && (s.adjustX || s.adjustY) && r) {
          if (s.adjustX && Nt(p, h, f)) {
            var _ = xt(i, /[lr]/gi, { l: "r", r: "l" }),
              v = Dt(o, 0),
              m = Dt(a, 0);
            (function (t, e, n) {
              return t.left > n.right || t.left + e.width < n.left;
            })(At(h, e, _, v, m), h, f) || ((l = 1), (i = _), (o = v), (a = m));
          }
          if (s.adjustY && Lt(p, h, f)) {
            var g = xt(i, /[tb]/gi, { t: "b", b: "t" }),
              y = Dt(o, 1),
              R = Dt(a, 1);
            (function (t, e, n) {
              return t.top > n.bottom || t.top + e.height < n.top;
            })(At(h, e, g, y, R), h, f) || ((l = 1), (i = g), (o = y), (a = R));
          }
          l && ((p = At(h, e, i, o, a)), Tt.mix(d, p));
          var b = Nt(p, h, f),
            w = Lt(p, h, f);
          if (b || w) {
            var E = i;
            b && (E = xt(i, /[lr]/gi, { l: "r", r: "l" })),
              w && (E = xt(i, /[tb]/gi, { t: "b", b: "t" })),
              (i = E),
              (o = n.offset || [0, 0]),
              (a = n.targetOffset || [0, 0]);
          }
          (u.adjustX = s.adjustX && b),
            (u.adjustY = s.adjustY && w),
            (u.adjustX || u.adjustY) &&
              (d = (function (t, e, n, r) {
                var i = Tt.clone(t),
                  o = { width: e.width, height: e.height };
                return (
                  r.adjustX && i.left < n.left && (i.left = n.left),
                  r.resizeWidth &&
                    i.left >= n.left &&
                    i.left + o.width > n.right &&
                    (o.width -= i.left + o.width - n.right),
                  r.adjustX &&
                    i.left + o.width > n.right &&
                    (i.left = Math.max(n.right - o.width, n.left)),
                  r.adjustY && i.top < n.top && (i.top = n.top),
                  r.resizeHeight &&
                    i.top >= n.top &&
                    i.top + o.height > n.bottom &&
                    (o.height -= i.top + o.height - n.bottom),
                  r.adjustY &&
                    i.top + o.height > n.bottom &&
                    (i.top = Math.max(n.bottom - o.height, n.top)),
                  Tt.mix(i, o)
                );
              })(p, h, f, u));
        }
        return (
          d.width !== h.width &&
            Tt.css(c, "width", Tt.width(c) + d.width - h.width),
          d.height !== h.height &&
            Tt.css(c, "height", Tt.height(c) + d.height - h.height),
          Tt.offset(
            c,
            { left: d.left, top: d.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            }
          ),
          { points: i, offset: o, targetOffset: a, overflow: u }
        );
      }
      function jt(t, e, n) {
        var r = n.target || e;
        return Ut(
          t,
          Pt(r),
          n,
          !(function (t, e) {
            var n = Mt(t, e),
              r = Pt(t);
            return (
              !n ||
              r.left + r.width <= n.left ||
              r.top + r.height <= n.top ||
              r.left >= n.right ||
              r.top >= n.bottom
            );
          })(r, n.overflow && n.overflow.alwaysByViewport)
        );
      }
      function Ft(t, e, n) {
        var r,
          i,
          o = Tt.getDocument(t),
          a = o.defaultView || o.parentWindow,
          s = Tt.getWindowScrollLeft(a),
          c = Tt.getWindowScrollTop(a),
          u = Tt.viewportWidth(a),
          l = Tt.viewportHeight(a),
          f = {
            left: (r = "pageX" in e ? e.pageX : s + e.clientX),
            top: (i = "pageY" in e ? e.pageY : c + e.clientY),
            width: 0,
            height: 0,
          },
          h = r >= 0 && r <= s + u && i >= 0 && i <= c + l,
          p = [n.points[0], "cc"];
        return Ut(t, f, Y(Y({}, n), {}, { points: p }), h);
      }
      (jt.__getOffsetParent = It), (jt.__getVisibleRectForElement = Mt);
      function Vt(t) {
        return t && "object" === typeof t && t.window === t;
      }
      function Yt(t, e) {
        var n = Math.floor(t),
          r = Math.floor(e);
        return Math.abs(n - r) <= 1;
      }
      function Wt(t, e) {
        t !== document.activeElement && m(e, t) && t.focus();
      }
      function Ht(t) {
        return "function" === typeof t && t ? t() : null;
      }
      function Kt(t) {
        return "object" === typeof t && t ? t : null;
      }
      var zt = (function (t) {
        function e() {
          var t, n, r, i;
          a()(this, e);
          for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
            s[u] = arguments[u];
          return (
            (n = r =
              c()(
                this,
                (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                  t,
                  [this].concat(s)
                )
              )),
            (r.forceAlign = function () {
              var t = r.props,
                e = t.disabled,
                n = t.target,
                i = t.align,
                o = t.onAlign;
              if (!e && n) {
                var a = v.a.findDOMNode(r),
                  s = void 0,
                  c = Ht(n),
                  u = Kt(n),
                  l = document.activeElement;
                c ? (s = jt(a, c, i)) : u && (s = Ft(a, u, i)),
                  Wt(l, a),
                  o && o(a, s);
              }
            }),
            (i = n),
            c()(r, i)
          );
        }
        return (
          l()(e, t),
          F()(e, [
            {
              key: "componentDidMount",
              value: function () {
                var t = this.props;
                this.forceAlign(),
                  !t.disabled &&
                    t.monitorWindowResize &&
                    this.startMonitorWindowResize();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                var e,
                  n,
                  r = !1,
                  i = this.props;
                if (!i.disabled) {
                  var o = v.a.findDOMNode(this),
                    a = o ? o.getBoundingClientRect() : null;
                  if (t.disabled) r = !0;
                  else {
                    var s = Ht(t.target),
                      c = Ht(i.target),
                      u = Kt(t.target),
                      l = Kt(i.target);
                    Vt(s) && Vt(c)
                      ? (r = !1)
                      : (s !== c ||
                          (s && !c && l) ||
                          (u && l && c) ||
                          (l &&
                            !(
                              (e = u) === (n = l) ||
                              (e &&
                                n &&
                                ("pageX" in n && "pageY" in n
                                  ? e.pageX === n.pageX && e.pageY === n.pageY
                                  : "clientX" in n &&
                                    "clientY" in n &&
                                    e.clientX === n.clientX &&
                                    e.clientY === n.clientY))
                            ))) &&
                        (r = !0);
                    var f = this.sourceRect || {};
                    r ||
                      !o ||
                      (Yt(f.width, a.width) && Yt(f.height, a.height)) ||
                      (r = !0);
                  }
                  this.sourceRect = a;
                }
                r && this.forceAlign(),
                  i.monitorWindowResize && !i.disabled
                    ? this.startMonitorWindowResize()
                    : this.stopMonitorWindowResize();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.stopMonitorWindowResize();
              },
            },
            {
              key: "startMonitorWindowResize",
              value: function () {
                this.resizeHandler ||
                  ((this.bufferMonitor = (function (t, e) {
                    var n = void 0;
                    function r() {
                      n && (clearTimeout(n), (n = null));
                    }
                    function i() {
                      r(), (n = setTimeout(t, e));
                    }
                    return (i.clear = r), i;
                  })(this.forceAlign, this.props.monitorBufferTime)),
                  (this.resizeHandler = Object(g.a)(
                    window,
                    "resize",
                    this.bufferMonitor
                  )));
              },
            },
            {
              key: "stopMonitorWindowResize",
              value: function () {
                this.resizeHandler &&
                  (this.bufferMonitor.clear(),
                  this.resizeHandler.remove(),
                  (this.resizeHandler = null));
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  n = e.childrenProps,
                  r = e.children,
                  i = h.a.Children.only(r);
                if (n) {
                  var o = {};
                  return (
                    Object.keys(n).forEach(function (e) {
                      o[e] = t.props[n[e]];
                    }),
                    h.a.cloneElement(i, o)
                  );
                }
                return i;
              },
            },
          ]),
          e
        );
      })(f.Component);
      (zt.propTypes = {
        childrenProps: d.a.object,
        align: d.a.object.isRequired,
        target: d.a.oneOfType([
          d.a.func,
          d.a.shape({
            clientX: d.a.number,
            clientY: d.a.number,
            pageX: d.a.number,
            pageY: d.a.number,
          }),
        ]),
        onAlign: d.a.func,
        monitorBufferTime: d.a.number,
        monitorWindowResize: d.a.bool,
        disabled: d.a.bool,
        children: d.a.any,
      }),
        (zt.defaultProps = {
          target: function () {
            return window;
          },
          monitorBufferTime: 50,
          monitorWindowResize: !1,
          disabled: !1,
        });
      var Xt = zt,
        qt = n("M5nW"),
        Qt = n("9sp7"),
        Jt = n.n(Qt),
        Zt = (function (t) {
          function e() {
            return a()(this, e), c()(this, t.apply(this, arguments));
          }
          return (
            l()(e, t),
            (e.prototype.shouldComponentUpdate = function (t) {
              return t.hiddenClassName || t.visible;
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.hiddenClassName,
                n = t.visible,
                r = Jt()(t, ["hiddenClassName", "visible"]);
              return e || h.a.Children.count(r.children) > 1
                ? (!n && e && (r.className += " " + e),
                  h.a.createElement("div", r))
                : h.a.Children.only(r.children);
            }),
            e
          );
        })(f.Component);
      Zt.propTypes = {
        children: d.a.any,
        className: d.a.string,
        visible: d.a.bool,
        hiddenClassName: d.a.string,
      };
      var $t = Zt,
        te = (function (t) {
          function e() {
            return a()(this, e), c()(this, t.apply(this, arguments));
          }
          return (
            l()(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.className;
              return (
                t.visible || (e += " " + t.hiddenClassName),
                h.a.createElement(
                  "div",
                  {
                    className: e,
                    onMouseEnter: t.onMouseEnter,
                    onMouseLeave: t.onMouseLeave,
                    onMouseDown: t.onMouseDown,
                    onTouchStart: t.onTouchStart,
                    style: t.style,
                  },
                  h.a.createElement(
                    $t,
                    { className: t.prefixCls + "-content", visible: t.visible },
                    t.children
                  )
                )
              );
            }),
            e
          );
        })(f.Component);
      te.propTypes = {
        hiddenClassName: d.a.string,
        className: d.a.string,
        prefixCls: d.a.string,
        onMouseEnter: d.a.func,
        onMouseLeave: d.a.func,
        onMouseDown: d.a.func,
        onTouchStart: d.a.func,
        children: d.a.any,
      };
      var ee = te,
        ne = (function (t) {
          function e(n) {
            a()(this, e);
            var r = c()(this, t.call(this, n));
            return (
              re.call(r),
              (r.state = {
                stretchChecked: !1,
                targetWidth: void 0,
                targetHeight: void 0,
              }),
              (r.savePopupRef = G.bind(r, "popupInstance")),
              (r.saveAlignRef = G.bind(r, "alignInstance")),
              r
            );
          }
          return (
            l()(e, t),
            (e.prototype.componentDidMount = function () {
              (this.rootNode = this.getPopupDomNode()), this.setStretchSize();
            }),
            (e.prototype.componentDidUpdate = function () {
              this.setStretchSize();
            }),
            (e.prototype.getPopupDomNode = function () {
              return v.a.findDOMNode(this.popupInstance);
            }),
            (e.prototype.getMaskTransitionName = function () {
              var t = this.props,
                e = t.maskTransitionName,
                n = t.maskAnimation;
              return !e && n && (e = t.prefixCls + "-" + n), e;
            }),
            (e.prototype.getTransitionName = function () {
              var t = this.props,
                e = t.transitionName;
              return (
                !e && t.animation && (e = t.prefixCls + "-" + t.animation), e
              );
            }),
            (e.prototype.getClassName = function (t) {
              return (
                this.props.prefixCls + " " + this.props.className + " " + t
              );
            }),
            (e.prototype.getPopupElement = function () {
              var t = this,
                e = this.savePopupRef,
                n = this.state,
                r = n.stretchChecked,
                o = n.targetHeight,
                a = n.targetWidth,
                s = this.props,
                c = s.align,
                u = s.visible,
                l = s.prefixCls,
                f = s.style,
                p = s.getClassNameFromAlign,
                d = s.destroyPopupOnHide,
                _ = s.stretch,
                v = s.children,
                m = s.onMouseEnter,
                g = s.onMouseLeave,
                y = s.onMouseDown,
                R = s.onTouchStart,
                b = this.getClassName(this.currentAlignClassName || p(c)),
                w = l + "-hidden";
              u || (this.currentAlignClassName = null);
              var E = {};
              _ &&
                (-1 !== _.indexOf("height")
                  ? (E.height = o)
                  : -1 !== _.indexOf("minHeight") && (E.minHeight = o),
                -1 !== _.indexOf("width")
                  ? (E.width = a)
                  : -1 !== _.indexOf("minWidth") && (E.minWidth = a),
                r ||
                  ((E.visibility = "hidden"),
                  setTimeout(function () {
                    t.alignInstance && t.alignInstance.forceAlign();
                  }, 0)));
              var C = {
                className: b,
                prefixCls: l,
                ref: e,
                onMouseEnter: m,
                onMouseLeave: g,
                onMouseDown: y,
                onTouchStart: R,
                style: i()({}, E, f, this.getZIndexStyle()),
              };
              return d
                ? h.a.createElement(
                    qt.a,
                    {
                      component: "",
                      exclusive: !0,
                      transitionAppear: !0,
                      transitionName: this.getTransitionName(),
                    },
                    u
                      ? h.a.createElement(
                          Xt,
                          {
                            target: this.getAlignTarget(),
                            key: "popup",
                            ref: this.saveAlignRef,
                            monitorWindowResize: !0,
                            align: c,
                            onAlign: this.onAlign,
                          },
                          h.a.createElement(ee, i()({ visible: !0 }, C), v)
                        )
                      : null
                  )
                : h.a.createElement(
                    qt.a,
                    {
                      component: "",
                      exclusive: !0,
                      transitionAppear: !0,
                      transitionName: this.getTransitionName(),
                      showProp: "xVisible",
                    },
                    h.a.createElement(
                      Xt,
                      {
                        target: this.getAlignTarget(),
                        key: "popup",
                        ref: this.saveAlignRef,
                        monitorWindowResize: !0,
                        xVisible: u,
                        childrenProps: { visible: "xVisible" },
                        disabled: !u,
                        align: c,
                        onAlign: this.onAlign,
                      },
                      h.a.createElement(ee, i()({ hiddenClassName: w }, C), v)
                    )
                  );
            }),
            (e.prototype.getZIndexStyle = function () {
              var t = {},
                e = this.props;
              return void 0 !== e.zIndex && (t.zIndex = e.zIndex), t;
            }),
            (e.prototype.getMaskElement = function () {
              var t = this.props,
                e = void 0;
              if (t.mask) {
                var n = this.getMaskTransitionName();
                (e = h.a.createElement($t, {
                  style: this.getZIndexStyle(),
                  key: "mask",
                  className: t.prefixCls + "-mask",
                  hiddenClassName: t.prefixCls + "-mask-hidden",
                  visible: t.visible,
                })),
                  n &&
                    (e = h.a.createElement(
                      qt.a,
                      {
                        key: "mask",
                        showProp: "visible",
                        transitionAppear: !0,
                        component: "",
                        transitionName: n,
                      },
                      e
                    ));
              }
              return e;
            }),
            (e.prototype.render = function () {
              return h.a.createElement(
                "div",
                null,
                this.getMaskElement(),
                this.getPopupElement()
              );
            }),
            e
          );
        })(f.Component);
      ne.propTypes = {
        visible: d.a.bool,
        style: d.a.object,
        getClassNameFromAlign: d.a.func,
        onAlign: d.a.func,
        getRootDomNode: d.a.func,
        align: d.a.any,
        destroyPopupOnHide: d.a.bool,
        className: d.a.string,
        prefixCls: d.a.string,
        onMouseEnter: d.a.func,
        onMouseLeave: d.a.func,
        onMouseDown: d.a.func,
        onTouchStart: d.a.func,
        stretch: d.a.string,
        children: d.a.node,
        point: d.a.shape({ pageX: d.a.number, pageY: d.a.number }),
      };
      var re = function () {
          var t = this;
          (this.onAlign = function (e, n) {
            var r = t.props,
              i = r.getClassNameFromAlign(n);
            t.currentAlignClassName !== i &&
              ((t.currentAlignClassName = i),
              (e.className = t.getClassName(i))),
              r.onAlign(e, n);
          }),
            (this.setStretchSize = function () {
              var e = t.props,
                n = e.stretch,
                r = e.getRootDomNode,
                i = e.visible,
                o = t.state,
                a = o.stretchChecked,
                s = o.targetHeight,
                c = o.targetWidth;
              if (n && i) {
                var u = r();
                if (u) {
                  var l = u.offsetHeight,
                    f = u.offsetWidth;
                  (s === l && c === f && a) ||
                    t.setState({
                      stretchChecked: !0,
                      targetHeight: l,
                      targetWidth: f,
                    });
                }
              } else a && t.setState({ stretchChecked: !1 });
            }),
            (this.getTargetElement = function () {
              return t.props.getRootDomNode();
            }),
            (this.getAlignTarget = function () {
              var e = t.props.point;
              return e || t.getTargetElement;
            });
        },
        ie = ne;
      function oe() {}
      var ae = [
          "onClick",
          "onMouseDown",
          "onTouchStart",
          "onMouseEnter",
          "onMouseLeave",
          "onFocus",
          "onBlur",
          "onContextMenu",
        ],
        se = !!_.createPortal,
        ce = { rcTrigger: d.a.shape({ onPopupMouseDown: d.a.func }) },
        ue = (function (t) {
          function e(n) {
            a()(this, e);
            var r = c()(this, t.call(this, n));
            le.call(r);
            var i = void 0;
            return (
              (i =
                "popupVisible" in n
                  ? !!n.popupVisible
                  : !!n.defaultPopupVisible),
              (r.prevPopupVisible = i),
              (r.state = { popupVisible: i }),
              r
            );
          }
          return (
            l()(e, t),
            (e.prototype.getChildContext = function () {
              return { rcTrigger: { onPopupMouseDown: this.onPopupMouseDown } };
            }),
            (e.prototype.componentWillMount = function () {
              var t = this;
              ae.forEach(function (e) {
                t["fire" + e] = function (n) {
                  t.fireEvents(e, n);
                };
              });
            }),
            (e.prototype.componentDidMount = function () {
              this.componentDidUpdate(
                {},
                { popupVisible: this.state.popupVisible }
              );
            }),
            (e.prototype.componentWillReceiveProps = function (t) {
              var e = t.popupVisible;
              void 0 !== e && this.setState({ popupVisible: e });
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              var n = this.props,
                r = this.state;
              if (
                (se ||
                  this.renderComponent(null, function () {
                    e.popupVisible !== r.popupVisible &&
                      n.afterPopupVisibleChange(r.popupVisible);
                  }),
                (this.prevPopupVisible = e.popupVisible),
                r.popupVisible)
              ) {
                var i = void 0;
                return (
                  this.clickOutsideHandler ||
                    (!this.isClickToHide() && !this.isContextMenuToShow()) ||
                    ((i = n.getDocument()),
                    (this.clickOutsideHandler = Object(g.a)(
                      i,
                      "mousedown",
                      this.onDocumentClick
                    ))),
                  this.touchOutsideHandler ||
                    ((i = i || n.getDocument()),
                    (this.touchOutsideHandler = Object(g.a)(
                      i,
                      "touchstart",
                      this.onDocumentClick
                    ))),
                  !this.contextMenuOutsideHandler1 &&
                    this.isContextMenuToShow() &&
                    ((i = i || n.getDocument()),
                    (this.contextMenuOutsideHandler1 = Object(g.a)(
                      i,
                      "scroll",
                      this.onContextMenuClose
                    ))),
                  void (
                    !this.contextMenuOutsideHandler2 &&
                    this.isContextMenuToShow() &&
                    (this.contextMenuOutsideHandler2 = Object(g.a)(
                      window,
                      "blur",
                      this.onContextMenuClose
                    ))
                  )
                );
              }
              this.clearOutsideHandler();
            }),
            (e.prototype.componentWillUnmount = function () {
              this.clearDelayTimer(),
                this.clearOutsideHandler(),
                clearTimeout(this.mouseDownTimeout);
            }),
            (e.prototype.getPopupDomNode = function () {
              return this._component && this._component.getPopupDomNode
                ? this._component.getPopupDomNode()
                : null;
            }),
            (e.prototype.getPopupAlign = function () {
              var t = this.props,
                e = t.popupPlacement,
                n = t.popupAlign,
                r = t.builtinPlacements;
              return e && r
                ? (function (t, e, n) {
                    var r = t[e] || {};
                    return i()({}, r, n);
                  })(r, e, n)
                : n;
            }),
            (e.prototype.setPopupVisible = function (t, e) {
              var n = this.props.alignPoint;
              this.clearDelayTimer(),
                this.state.popupVisible !== t &&
                  ("popupVisible" in this.props ||
                    this.setState({ popupVisible: t }),
                  this.props.onPopupVisibleChange(t)),
                n && e && this.setPoint(e);
            }),
            (e.prototype.delaySetPopupVisible = function (t, e, n) {
              var r = this,
                i = 1e3 * e;
              if ((this.clearDelayTimer(), i)) {
                var o = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                this.delayTimer = setTimeout(function () {
                  r.setPopupVisible(t, o), r.clearDelayTimer();
                }, i);
              } else this.setPopupVisible(t, n);
            }),
            (e.prototype.clearDelayTimer = function () {
              this.delayTimer &&
                (clearTimeout(this.delayTimer), (this.delayTimer = null));
            }),
            (e.prototype.clearOutsideHandler = function () {
              this.clickOutsideHandler &&
                (this.clickOutsideHandler.remove(),
                (this.clickOutsideHandler = null)),
                this.contextMenuOutsideHandler1 &&
                  (this.contextMenuOutsideHandler1.remove(),
                  (this.contextMenuOutsideHandler1 = null)),
                this.contextMenuOutsideHandler2 &&
                  (this.contextMenuOutsideHandler2.remove(),
                  (this.contextMenuOutsideHandler2 = null)),
                this.touchOutsideHandler &&
                  (this.touchOutsideHandler.remove(),
                  (this.touchOutsideHandler = null));
            }),
            (e.prototype.createTwoChains = function (t) {
              var e = this.props.children.props,
                n = this.props;
              return e[t] && n[t] ? this["fire" + t] : e[t] || n[t];
            }),
            (e.prototype.isClickToShow = function () {
              var t = this.props,
                e = t.action,
                n = t.showAction;
              return -1 !== e.indexOf("click") || -1 !== n.indexOf("click");
            }),
            (e.prototype.isContextMenuToShow = function () {
              var t = this.props,
                e = t.action,
                n = t.showAction;
              return (
                -1 !== e.indexOf("contextMenu") ||
                -1 !== n.indexOf("contextMenu")
              );
            }),
            (e.prototype.isClickToHide = function () {
              var t = this.props,
                e = t.action,
                n = t.hideAction;
              return -1 !== e.indexOf("click") || -1 !== n.indexOf("click");
            }),
            (e.prototype.isMouseEnterToShow = function () {
              var t = this.props,
                e = t.action,
                n = t.showAction;
              return (
                -1 !== e.indexOf("hover") || -1 !== n.indexOf("mouseEnter")
              );
            }),
            (e.prototype.isMouseLeaveToHide = function () {
              var t = this.props,
                e = t.action,
                n = t.hideAction;
              return (
                -1 !== e.indexOf("hover") || -1 !== n.indexOf("mouseLeave")
              );
            }),
            (e.prototype.isFocusToShow = function () {
              var t = this.props,
                e = t.action,
                n = t.showAction;
              return -1 !== e.indexOf("focus") || -1 !== n.indexOf("focus");
            }),
            (e.prototype.isBlurToHide = function () {
              var t = this.props,
                e = t.action,
                n = t.hideAction;
              return -1 !== e.indexOf("focus") || -1 !== n.indexOf("blur");
            }),
            (e.prototype.forcePopupAlign = function () {
              this.state.popupVisible &&
                this._component &&
                this._component.alignInstance &&
                this._component.alignInstance.forceAlign();
            }),
            (e.prototype.fireEvents = function (t, e) {
              var n = this.props.children.props[t];
              n && n(e);
              var r = this.props[t];
              r && r(e);
            }),
            (e.prototype.close = function () {
              this.setPopupVisible(!1);
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.state.popupVisible,
                n = this.props,
                r = n.children,
                i = n.forceRender,
                o = n.alignPoint,
                a = n.className,
                s = h.a.Children.only(r),
                c = { key: "trigger" };
              this.isContextMenuToShow()
                ? (c.onContextMenu = this.onContextMenu)
                : (c.onContextMenu = this.createTwoChains("onContextMenu")),
                this.isClickToHide() || this.isClickToShow()
                  ? ((c.onClick = this.onClick),
                    (c.onMouseDown = this.onMouseDown),
                    (c.onTouchStart = this.onTouchStart))
                  : ((c.onClick = this.createTwoChains("onClick")),
                    (c.onMouseDown = this.createTwoChains("onMouseDown")),
                    (c.onTouchStart = this.createTwoChains("onTouchStart"))),
                this.isMouseEnterToShow()
                  ? ((c.onMouseEnter = this.onMouseEnter),
                    o && (c.onMouseMove = this.onMouseMove))
                  : (c.onMouseEnter = this.createTwoChains("onMouseEnter")),
                this.isMouseLeaveToHide()
                  ? (c.onMouseLeave = this.onMouseLeave)
                  : (c.onMouseLeave = this.createTwoChains("onMouseLeave")),
                this.isFocusToShow() || this.isBlurToHide()
                  ? ((c.onFocus = this.onFocus), (c.onBlur = this.onBlur))
                  : ((c.onFocus = this.createTwoChains("onFocus")),
                    (c.onBlur = this.createTwoChains("onBlur")));
              var u = D()(s && s.props && s.props.className, a);
              u && (c.className = u);
              var l = h.a.cloneElement(s, c);
              if (!se)
                return h.a.createElement(
                  S,
                  {
                    parent: this,
                    visible: e,
                    autoMount: !1,
                    forceRender: i,
                    getComponent: this.getComponent,
                    getContainer: this.getContainer,
                  },
                  function (e) {
                    var n = e.renderComponent;
                    return (t.renderComponent = n), l;
                  }
                );
              var f = void 0;
              return (
                (e || this._component || i) &&
                  (f = h.a.createElement(
                    L,
                    {
                      key: "portal",
                      getContainer: this.getContainer,
                      didUpdate: this.handlePortalUpdate,
                    },
                    this.getComponent()
                  )),
                [l, f]
              );
            }),
            e
          );
        })(h.a.Component);
      (ue.propTypes = {
        children: d.a.any,
        action: d.a.oneOfType([d.a.string, d.a.arrayOf(d.a.string)]),
        showAction: d.a.any,
        hideAction: d.a.any,
        getPopupClassNameFromAlign: d.a.any,
        onPopupVisibleChange: d.a.func,
        afterPopupVisibleChange: d.a.func,
        popup: d.a.oneOfType([d.a.node, d.a.func]).isRequired,
        popupStyle: d.a.object,
        prefixCls: d.a.string,
        popupClassName: d.a.string,
        className: d.a.string,
        popupPlacement: d.a.string,
        builtinPlacements: d.a.object,
        popupTransitionName: d.a.oneOfType([d.a.string, d.a.object]),
        popupAnimation: d.a.any,
        mouseEnterDelay: d.a.number,
        mouseLeaveDelay: d.a.number,
        zIndex: d.a.number,
        focusDelay: d.a.number,
        blurDelay: d.a.number,
        getPopupContainer: d.a.func,
        getDocument: d.a.func,
        forceRender: d.a.bool,
        destroyPopupOnHide: d.a.bool,
        mask: d.a.bool,
        maskClosable: d.a.bool,
        onPopupAlign: d.a.func,
        popupAlign: d.a.object,
        popupVisible: d.a.bool,
        defaultPopupVisible: d.a.bool,
        maskTransitionName: d.a.oneOfType([d.a.string, d.a.object]),
        maskAnimation: d.a.string,
        stretch: d.a.string,
        alignPoint: d.a.bool,
      }),
        (ue.contextTypes = ce),
        (ue.childContextTypes = ce),
        (ue.defaultProps = {
          prefixCls: "rc-trigger-popup",
          getPopupClassNameFromAlign: function () {
            return "";
          },
          getDocument: function () {
            return window.document;
          },
          onPopupVisibleChange: oe,
          afterPopupVisibleChange: oe,
          onPopupAlign: oe,
          popupClassName: "",
          mouseEnterDelay: 0,
          mouseLeaveDelay: 0.1,
          focusDelay: 0,
          blurDelay: 0.15,
          popupStyle: {},
          destroyPopupOnHide: !1,
          popupAlign: {},
          defaultPopupVisible: !1,
          mask: !1,
          maskClosable: !0,
          action: [],
          showAction: [],
          hideAction: [],
        });
      var le = function () {
        var t = this;
        (this.onMouseEnter = function (e) {
          var n = t.props.mouseEnterDelay;
          t.fireEvents("onMouseEnter", e),
            t.delaySetPopupVisible(!0, n, n ? null : e);
        }),
          (this.onMouseMove = function (e) {
            t.fireEvents("onMouseMove", e), t.setPoint(e);
          }),
          (this.onMouseLeave = function (e) {
            t.fireEvents("onMouseLeave", e),
              t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
          }),
          (this.onPopupMouseEnter = function () {
            t.clearDelayTimer();
          }),
          (this.onPopupMouseLeave = function (e) {
            (e.relatedTarget &&
              !e.relatedTarget.setTimeout &&
              t._component &&
              t._component.getPopupDomNode &&
              m(t._component.getPopupDomNode(), e.relatedTarget)) ||
              t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
          }),
          (this.onFocus = function (e) {
            t.fireEvents("onFocus", e),
              t.clearDelayTimer(),
              t.isFocusToShow() &&
                ((t.focusTime = Date.now()),
                t.delaySetPopupVisible(!0, t.props.focusDelay));
          }),
          (this.onMouseDown = function (e) {
            t.fireEvents("onMouseDown", e), (t.preClickTime = Date.now());
          }),
          (this.onTouchStart = function (e) {
            t.fireEvents("onTouchStart", e), (t.preTouchTime = Date.now());
          }),
          (this.onBlur = function (e) {
            t.fireEvents("onBlur", e),
              t.clearDelayTimer(),
              t.isBlurToHide() && t.delaySetPopupVisible(!1, t.props.blurDelay);
          }),
          (this.onContextMenu = function (e) {
            e.preventDefault(),
              t.fireEvents("onContextMenu", e),
              t.setPopupVisible(!0, e);
          }),
          (this.onContextMenuClose = function () {
            t.isContextMenuToShow() && t.close();
          }),
          (this.onClick = function (e) {
            if ((t.fireEvents("onClick", e), t.focusTime)) {
              var n = void 0;
              if (
                (t.preClickTime && t.preTouchTime
                  ? (n = Math.min(t.preClickTime, t.preTouchTime))
                  : t.preClickTime
                  ? (n = t.preClickTime)
                  : t.preTouchTime && (n = t.preTouchTime),
                Math.abs(n - t.focusTime) < 20)
              )
                return;
              t.focusTime = 0;
            }
            (t.preClickTime = 0),
              (t.preTouchTime = 0),
              e && e.preventDefault && e.preventDefault();
            var r = !t.state.popupVisible;
            ((t.isClickToHide() && !r) || (r && t.isClickToShow())) &&
              t.setPopupVisible(!t.state.popupVisible, e);
          }),
          (this.onPopupMouseDown = function () {
            var e = t.context.rcTrigger,
              n = void 0 === e ? {} : e;
            (t.hasPopupMouseDown = !0),
              clearTimeout(t.mouseDownTimeout),
              (t.mouseDownTimeout = setTimeout(function () {
                t.hasPopupMouseDown = !1;
              }, 0)),
              n.onPopupMouseDown && n.onPopupMouseDown.apply(n, arguments);
          }),
          (this.onDocumentClick = function (e) {
            if (!t.props.mask || t.props.maskClosable) {
              var n = e.target;
              m(Object(_.findDOMNode)(t), n) ||
                t.hasPopupMouseDown ||
                t.close();
            }
          }),
          (this.getRootDomNode = function () {
            return Object(_.findDOMNode)(t);
          }),
          (this.getPopupClassNameFromAlign = function (e) {
            var n = [],
              r = t.props,
              i = r.popupPlacement,
              o = r.builtinPlacements,
              a = r.prefixCls,
              s = r.alignPoint,
              c = r.getPopupClassNameFromAlign;
            return (
              i &&
                o &&
                n.push(
                  (function (t, e, n, r) {
                    var i = n.points;
                    for (var o in t)
                      if (t.hasOwnProperty(o) && B(t[o].points, i, r))
                        return e + "-placement-" + o;
                    return "";
                  })(o, a, e, s)
                ),
              c && n.push(c(e)),
              n.join(" ")
            );
          }),
          (this.getComponent = function () {
            var e = t.props,
              n = e.prefixCls,
              r = e.destroyPopupOnHide,
              o = e.popupClassName,
              a = e.action,
              s = e.onPopupAlign,
              c = e.popupAnimation,
              u = e.popupTransitionName,
              l = e.popupStyle,
              f = e.mask,
              p = e.maskAnimation,
              d = e.maskTransitionName,
              _ = e.zIndex,
              v = e.popup,
              m = e.stretch,
              g = e.alignPoint,
              y = t.state,
              R = y.popupVisible,
              b = y.point,
              w = t.getPopupAlign(),
              E = {};
            return (
              t.isMouseEnterToShow() && (E.onMouseEnter = t.onPopupMouseEnter),
              t.isMouseLeaveToHide() && (E.onMouseLeave = t.onPopupMouseLeave),
              (E.onMouseDown = t.onPopupMouseDown),
              (E.onTouchStart = t.onPopupMouseDown),
              h.a.createElement(
                ie,
                i()(
                  {
                    prefixCls: n,
                    destroyPopupOnHide: r,
                    visible: R,
                    point: g && b,
                    className: o,
                    action: a,
                    align: w,
                    onAlign: s,
                    animation: c,
                    getClassNameFromAlign: t.getPopupClassNameFromAlign,
                  },
                  E,
                  {
                    stretch: m,
                    getRootDomNode: t.getRootDomNode,
                    style: l,
                    mask: f,
                    zIndex: _,
                    transitionName: u,
                    maskAnimation: p,
                    maskTransitionName: d,
                    ref: t.savePopup,
                  }
                ),
                "function" === typeof v ? v() : v
              )
            );
          }),
          (this.getContainer = function () {
            var e = t.props,
              n = document.createElement("div");
            return (
              (n.style.position = "absolute"),
              (n.style.top = "0"),
              (n.style.left = "0"),
              (n.style.width = "100%"),
              (e.getPopupContainer
                ? e.getPopupContainer(Object(_.findDOMNode)(t))
                : e.getDocument().body
              ).appendChild(n),
              n
            );
          }),
          (this.setPoint = function (e) {
            t.props.alignPoint &&
              e &&
              t.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
          }),
          (this.handlePortalUpdate = function () {
            t.prevPopupVisible !== t.state.popupVisible &&
              t.props.afterPopupVisibleChange(t.state.popupVisible);
          }),
          (this.savePopup = function (e) {
            t._component = e;
          });
      };
      e.a = ue;
    },
    n12j: function (t, e, n) {
      "use strict";
      (function (e, r) {
        function i(t) {
          var e = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (t, e, n) {
                var r = t.entry;
                t.entry = null;
                for (; r; ) {
                  var i = r.callback;
                  e.pendingcb--, i(n), (r = r.next);
                }
                e.corkedRequestsFree.next = t;
              })(e, t);
            });
        }
        var o;
        (t.exports = T), (T.WritableState = C);
        var a = { deprecate: n("g9v5") },
          s = n("fCPl"),
          c = n("WvPa").Buffer,
          u = e.Uint8Array || function () {};
        var l,
          f = n("HNdP"),
          h = n("oY5E").getHighWaterMark,
          p = n("7PSS").codes,
          d = p.ERR_INVALID_ARG_TYPE,
          _ = p.ERR_METHOD_NOT_IMPLEMENTED,
          v = p.ERR_MULTIPLE_CALLBACK,
          m = p.ERR_STREAM_CANNOT_PIPE,
          g = p.ERR_STREAM_DESTROYED,
          y = p.ERR_STREAM_NULL_VALUES,
          R = p.ERR_STREAM_WRITE_AFTER_END,
          b = p.ERR_UNKNOWN_ENCODING,
          w = f.errorOrDestroy;
        function E() {}
        function C(t, e, a) {
          (o = o || n("AeNx")),
            (t = t || {}),
            "boolean" !== typeof a && (a = e instanceof o),
            (this.objectMode = !!t.objectMode),
            a && (this.objectMode = this.objectMode || !!t.writableObjectMode),
            (this.highWaterMark = h(this, t, "writableHighWaterMark", a)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var s = !1 === t.decodeStrings;
          (this.decodeStrings = !s),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (t) {
              !(function (t, e) {
                var n = t._writableState,
                  i = n.sync,
                  o = n.writecb;
                if ("function" !== typeof o) throw new v();
                if (
                  ((function (t) {
                    (t.writing = !1),
                      (t.writecb = null),
                      (t.length -= t.writelen),
                      (t.writelen = 0);
                  })(n),
                  e)
                )
                  !(function (t, e, n, i, o) {
                    --e.pendingcb,
                      n
                        ? (r.nextTick(o, i),
                          r.nextTick(k, t, e),
                          (t._writableState.errorEmitted = !0),
                          w(t, i))
                        : (o(i),
                          (t._writableState.errorEmitted = !0),
                          w(t, i),
                          k(t, e));
                  })(t, n, i, e, o);
                else {
                  var a = M(n) || t.destroyed;
                  a ||
                    n.corked ||
                    n.bufferProcessing ||
                    !n.bufferedRequest ||
                    O(t, n),
                    i ? r.nextTick(I, t, n, a, o) : I(t, n, a, o);
                }
              })(e, t);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new i(this));
        }
        function T(t) {
          var e = this instanceof (o = o || n("AeNx"));
          if (!e && !l.call(T, this)) return new T(t);
          (this._writableState = new C(t, this, e)),
            (this.writable = !0),
            t &&
              ("function" === typeof t.write && (this._write = t.write),
              "function" === typeof t.writev && (this._writev = t.writev),
              "function" === typeof t.destroy && (this._destroy = t.destroy),
              "function" === typeof t.final && (this._final = t.final)),
            s.call(this);
        }
        function S(t, e, n, r, i, o, a) {
          (e.writelen = r),
            (e.writecb = a),
            (e.writing = !0),
            (e.sync = !0),
            e.destroyed
              ? e.onwrite(new g("write"))
              : n
              ? t._writev(i, e.onwrite)
              : t._write(i, o, e.onwrite),
            (e.sync = !1);
        }
        function I(t, e, n, r) {
          n ||
            (function (t, e) {
              0 === e.length &&
                e.needDrain &&
                ((e.needDrain = !1), t.emit("drain"));
            })(t, e),
            e.pendingcb--,
            r(),
            k(t, e);
        }
        function O(t, e) {
          e.bufferProcessing = !0;
          var n = e.bufferedRequest;
          if (t._writev && n && n.next) {
            var r = e.bufferedRequestCount,
              o = new Array(r),
              a = e.corkedRequestsFree;
            a.entry = n;
            for (var s = 0, c = !0; n; )
              (o[s] = n), n.isBuf || (c = !1), (n = n.next), (s += 1);
            (o.allBuffers = c),
              S(t, e, !0, e.length, o, "", a.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              a.next
                ? ((e.corkedRequestsFree = a.next), (a.next = null))
                : (e.corkedRequestsFree = new i(e)),
              (e.bufferedRequestCount = 0);
          } else {
            for (; n; ) {
              var u = n.chunk,
                l = n.encoding,
                f = n.callback;
              if (
                (S(t, e, !1, e.objectMode ? 1 : u.length, u, l, f),
                (n = n.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break;
            }
            null === n && (e.lastBufferedRequest = null);
          }
          (e.bufferedRequest = n), (e.bufferProcessing = !1);
        }
        function M(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          );
        }
        function P(t, e) {
          t._final(function (n) {
            e.pendingcb--,
              n && w(t, n),
              (e.prefinished = !0),
              t.emit("prefinish"),
              k(t, e);
          });
        }
        function k(t, e) {
          var n = M(e);
          if (
            n &&
            ((function (t, e) {
              e.prefinished ||
                e.finalCalled ||
                ("function" !== typeof t._final || e.destroyed
                  ? ((e.prefinished = !0), t.emit("prefinish"))
                  : (e.pendingcb++, (e.finalCalled = !0), r.nextTick(P, t, e)));
            })(t, e),
            0 === e.pendingcb &&
              ((e.finished = !0), t.emit("finish"), e.autoDestroy))
          ) {
            var i = t._readableState;
            (!i || (i.autoDestroy && i.endEmitted)) && t.destroy();
          }
          return n;
        }
        n("dBkQ")(T, s),
          (C.prototype.getBuffer = function () {
            for (var t = this.bufferedRequest, e = []; t; )
              e.push(t), (t = t.next);
            return e;
          }),
          (function () {
            try {
              Object.defineProperty(C.prototype, "buffer", {
                get: a.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (t) {}
          })(),
          "function" === typeof Symbol &&
          Symbol.hasInstance &&
          "function" === typeof Function.prototype[Symbol.hasInstance]
            ? ((l = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(T, Symbol.hasInstance, {
                value: function (t) {
                  return (
                    !!l.call(this, t) ||
                    (this === T && t && t._writableState instanceof C)
                  );
                },
              }))
            : (l = function (t) {
                return t instanceof this;
              }),
          (T.prototype.pipe = function () {
            w(this, new m());
          }),
          (T.prototype.write = function (t, e, n) {
            var i,
              o = this._writableState,
              a = !1,
              s = !o.objectMode && ((i = t), c.isBuffer(i) || i instanceof u);
            return (
              s &&
                !c.isBuffer(t) &&
                (t = (function (t) {
                  return c.from(t);
                })(t)),
              "function" === typeof e && ((n = e), (e = null)),
              s ? (e = "buffer") : e || (e = o.defaultEncoding),
              "function" !== typeof n && (n = E),
              o.ending
                ? (function (t, e) {
                    var n = new R();
                    w(t, n), r.nextTick(e, n);
                  })(this, n)
                : (s ||
                    (function (t, e, n, i) {
                      var o;
                      return (
                        null === n
                          ? (o = new y())
                          : "string" === typeof n ||
                            e.objectMode ||
                            (o = new d("chunk", ["string", "Buffer"], n)),
                        !o || (w(t, o), r.nextTick(i, o), !1)
                      );
                    })(this, o, t, n)) &&
                  (o.pendingcb++,
                  (a = (function (t, e, n, r, i, o) {
                    if (!n) {
                      var a = (function (t, e, n) {
                        t.objectMode ||
                          !1 === t.decodeStrings ||
                          "string" !== typeof e ||
                          (e = c.from(e, n));
                        return e;
                      })(e, r, i);
                      r !== a && ((n = !0), (i = "buffer"), (r = a));
                    }
                    var s = e.objectMode ? 1 : r.length;
                    e.length += s;
                    var u = e.length < e.highWaterMark;
                    u || (e.needDrain = !0);
                    if (e.writing || e.corked) {
                      var l = e.lastBufferedRequest;
                      (e.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null,
                      }),
                        l
                          ? (l.next = e.lastBufferedRequest)
                          : (e.bufferedRequest = e.lastBufferedRequest),
                        (e.bufferedRequestCount += 1);
                    } else S(t, e, !1, s, r, i, o);
                    return u;
                  })(this, o, s, t, e, n))),
              a
            );
          }),
          (T.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (T.prototype.uncork = function () {
            var t = this._writableState;
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                O(this, t));
          }),
          (T.prototype.setDefaultEncoding = function (t) {
            if (
              ("string" === typeof t && (t = t.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((t + "").toLowerCase()) > -1
              ))
            )
              throw new b(t);
            return (this._writableState.defaultEncoding = t), this;
          }),
          Object.defineProperty(T.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(T.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (T.prototype._write = function (t, e, n) {
            n(new _("_write()"));
          }),
          (T.prototype._writev = null),
          (T.prototype.end = function (t, e, n) {
            var i = this._writableState;
            return (
              "function" === typeof t
                ? ((n = t), (t = null), (e = null))
                : "function" === typeof e && ((n = e), (e = null)),
              null !== t && void 0 !== t && this.write(t, e),
              i.corked && ((i.corked = 1), this.uncork()),
              i.ending ||
                (function (t, e, n) {
                  (e.ending = !0),
                    k(t, e),
                    n && (e.finished ? r.nextTick(n) : t.once("finish", n));
                  (e.ended = !0), (t.writable = !1);
                })(this, i, n),
              this
            );
          }),
          Object.defineProperty(T.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(T.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (t) {
              this._writableState && (this._writableState.destroyed = t);
            },
          }),
          (T.prototype.destroy = f.destroy),
          (T.prototype._undestroy = f.undestroy),
          (T.prototype._destroy = function (t, e) {
            e(t);
          });
      }.call(this, n("AeT1"), n("vphx")));
    },
    nt5Y: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i = n("ZxgU"),
        o =
          (n("h+kL"),
          n("8g70"),
          function () {
            (this.iGiftId = 0),
              (this.sGiftName = ""),
              (this.sGiftDesc = ""),
              (this.iCostDiamond = 0),
              (this.iCostCoin = 0),
              (this.vSelectNum = new i.b.Vector(new i.b.INT32())),
              (this.iWeight = 0),
              (this.iMaxNum = 0),
              (this.tGiftResource = new r.a.GiftResource()),
              (this.tGiftPlay = new r.a.GiftPlay()),
              (this.iShowType = 0),
              (this.bIsNew = !0),
              (this.vGiftPlay = new i.b.Vector(new r.a.GiftPlay())),
              (this.iSpecialId = 0),
              (this.iCostBean = 0),
              (this.mExtraData = new i.b.Map(
                new i.b.INT32(),
                new i.b.BinBuffer()
              )),
              (this.iPayType = 0),
              (this.iGiftPrice = 0),
              (this.iSubScript = 0),
              (this.lAvailableStartTime = 0),
              (this.lAvailableEndTime = 0),
              (this.lAvailableRemainSec = 0),
              (this.iTimeShelf = 0),
              (this.iFCoin = 0);
          });
      (o.prototype._clone = function () {
        return new r.a.GiftItem();
      }),
        (o.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (o.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (o.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iGiftId),
            t.writeString(1, this.sGiftName),
            t.writeString(2, this.sGiftDesc),
            t.writeInt32(3, this.iCostDiamond),
            t.writeInt32(4, this.iCostCoin),
            t.writeVector(5, this.vSelectNum),
            t.writeInt32(6, this.iWeight),
            t.writeInt32(7, this.iMaxNum),
            t.writeStruct(8, this.tGiftResource),
            t.writeStruct(9, this.tGiftPlay),
            t.writeInt32(10, this.iShowType),
            t.writeBoolean(11, this.bIsNew),
            t.writeVector(12, this.vGiftPlay),
            t.writeInt32(13, this.iSpecialId),
            t.writeInt32(14, this.iCostBean),
            t.writeMap(15, this.mExtraData),
            t.writeInt32(16, this.iPayType),
            t.writeInt32(17, this.iGiftPrice),
            t.writeInt32(18, this.iSubScript),
            t.writeInt64(19, this.lAvailableStartTime),
            t.writeInt64(20, this.lAvailableEndTime),
            t.writeInt64(21, this.lAvailableRemainSec),
            t.writeInt32(22, this.iTimeShelf),
            t.writeInt32(23, this.iFCoin);
        }),
        (o.prototype.readFrom = function (t) {
          (this.iGiftId = t.readInt32(0, !1, this.iGiftId)),
            (this.sGiftName = t.readString(1, !1, this.sGiftName)),
            (this.sGiftDesc = t.readString(2, !1, this.sGiftDesc)),
            (this.iCostDiamond = t.readInt32(3, !1, this.iCostDiamond)),
            (this.iCostCoin = t.readInt32(4, !1, this.iCostCoin)),
            (this.vSelectNum = t.readVector(5, !1, this.vSelectNum)),
            (this.iWeight = t.readInt32(6, !1, this.iWeight)),
            (this.iMaxNum = t.readInt32(7, !1, this.iMaxNum)),
            (this.tGiftResource = t.readStruct(8, !1, this.tGiftResource)),
            (this.tGiftPlay = t.readStruct(9, !1, this.tGiftPlay)),
            (this.iShowType = t.readInt32(10, !1, this.iShowType)),
            (this.bIsNew = t.readBoolean(11, !1, this.bIsNew)),
            (this.vGiftPlay = t.readVector(12, !1, this.vGiftPlay)),
            (this.iSpecialId = t.readInt32(13, !1, this.iSpecialId)),
            (this.iCostBean = t.readInt32(14, !1, this.iCostBean)),
            (this.mExtraData = t.readMap(15, !1, this.mExtraData)),
            (this.iPayType = t.readInt32(16, !1, this.iPayType)),
            (this.iGiftPrice = t.readInt32(17, !1, this.iGiftPrice)),
            (this.iSubScript = t.readInt32(18, !1, this.iSubScript)),
            (this.lAvailableStartTime = t.readInt64(
              19,
              !1,
              this.lAvailableStartTime
            )),
            (this.lAvailableEndTime = t.readInt64(
              20,
              !1,
              this.lAvailableEndTime
            )),
            (this.lAvailableRemainSec = t.readInt64(
              21,
              !1,
              this.lAvailableRemainSec
            )),
            (this.iTimeShelf = t.readInt32(22, !1, this.iTimeShelf)),
            (this.iFCoin = t.readInt32(23, !1, this.iFCoin));
        }),
        (r.a.GiftItem = o);
    },
    o9KI: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n("TXqB"),
        i = n.n(r),
        o = n("6Zxk"),
        a = n.n(o);
      function s(t, e, n, r) {
        var o = a.a.unstable_batchedUpdates
          ? function (t) {
              a.a.unstable_batchedUpdates(n, t);
            }
          : n;
        return i()(t, e, o, r);
      }
    },
    oY5E: function (t, e, n) {
      "use strict";
      var r = n("7PSS").codes.ERR_INVALID_OPT_VALUE;
      t.exports = {
        getHighWaterMark: function (t, e, n, i) {
          var o = (function (t, e, n) {
            return null != t.highWaterMark ? t.highWaterMark : e ? t[n] : null;
          })(e, i, n);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new r(i ? n : "highWaterMark", o);
            return Math.floor(o);
          }
          return t.objectMode ? 16 : 16384;
        },
      };
    },
    oaUe: function (t, e, n) {
      "use strict";
      n.d(e, "g", function () {
        return w;
      }),
        n.d(e, "a", function () {
          return C.a;
        }),
        n.d(e, "h", function () {
          return T.a;
        }),
        n.d(e, "b", function () {
          return I;
        }),
        n.d(e, "e", function () {
          return M;
        }),
        n.d(e, "c", function () {
          return N;
        }),
        n.d(e, "f", function () {
          return mt;
        }),
        n.d(e, "d", function () {
          return St;
        });
      n("RlNQ");
      var r = n("cQwn"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("58BP"),
        c = n.n(s),
        u = n("gy9q"),
        l = n.n(u),
        f = n("7DFi"),
        h = n.n(f),
        p = n("TJEx"),
        d = n.n(p),
        _ = n("DiPh"),
        v = n.n(_),
        m = n("KFtC"),
        g = n("ZMLX"),
        y = n("ZxgU"),
        R = {
          ESPEC_PROP_ROOM: 0,
          ESPEC_PROP_COUN_GAME: 1,
          ESPEC_PROP_COUN: 2,
          ESPEC_PROP_GAME: 3,
          ESPEC_PROP_LANG: 4,
        };
      g.a.ESpecPropType = R;
      var b = {
        PAY_TYPE_GOLD: 1002,
        PAY_TYPE_SILVER: 1003,
        PAY_TYPE_FREE: 1018,
        PAY_TYPE_BEAN: 3008,
        PAY_TYPE_F: 1073,
      };
      g.a.GiftPayType = b;
      var w = b,
        E = {
          kGIFT_TAB_HOT: 1,
          kGIFT_TAB_GOLDBEAN: 2,
          kGIFT_TAB_NEW_HOT: 3,
          kGIFT_WORLD_CUP: 4,
        };
      g.a.EGiftTabType = E;
      var C = n("9ZvN"),
        T = n("UUa7"),
        S = {
          EPROP_CHANNEL_HIDE: -1,
          EPROP_CHANNEL_ALL: 0,
          EPROP_CHANNEL_ROOM: 1,
          EPROP_CHANNEL_GAME: 2,
          EPROP_CHANNEL_LANG: 3,
        };
      g.a.EPropChannelType = S;
      var I = S,
        O = {
          EFFECT_TYPE_SENDER: 111,
          EFFECT_TYPE_MESSAGE: 112,
          EFFECT_TYPE_CHAT_BANNER: 113,
          EFFECT_TYPE_ROOM_BANNER: 114,
          EFFECT_TYPE_BULLET: 115,
          EFFECT_TYPE_WORLD_BANNER: 116,
          EFFECT_TYPE_ANIM: 117,
          EFFECT_TYPE_BIG_ANIM: 118,
          EFFECT_TYPE_STICKER: 119,
        };
      g.a.GiftEffectType = O;
      var M = O,
        P = {
          CHANNEL_TYPE_HOT: 0,
          CHANNEL_TYPE_BACKPACK: 1,
          CHANNEL_TYPE_EMOJIPAY: 2,
          CHANNEL_TYPE_GOLDBEAN: 3,
          CHANNEL_TYPE_PAYCHAT: 4,
          CHANNEL_TYPE_PK_RIDICULE: 5,
          CHANNEL_TYPE_WORLD_CUP: 6,
          CHANNEL_TYPE_PAYVIEW: 7,
          CHANNEL_TYPE_FLY_KISS: 8,
        };
      g.a.GiftChannelType = P;
      var k = P,
        A = { EPROPS_LIST_LUCKY: 1 };
      g.a.EPropsListType = A;
      var N = A,
        L = (n("l/4b"), n("4TRz")),
        x =
          (n("leMB"),
          function () {
            (this.user = new g.a.UserId()),
              (this.sLang = ""),
              (this.sClientType = ""),
              (this.sMd5 = ""),
              (this.iVersion = 0);
          });
      (x.prototype._clone = function () {
        return new g.a.GetPropsListReq();
      }),
        (x.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (x.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (x.prototype.writeTo = function (t) {
          t.writeStruct(0, this.user),
            t.writeString(1, this.sLang),
            t.writeString(2, this.sClientType),
            t.writeString(3, this.sMd5),
            t.writeInt32(4, this.iVersion);
        }),
        (x.prototype.readFrom = function (t) {
          (this.user = t.readStruct(0, !1, this.user)),
            (this.sLang = t.readString(1, !1, this.sLang)),
            (this.sClientType = t.readString(2, !1, this.sClientType)),
            (this.sMd5 = t.readString(3, !1, this.sMd5)),
            (this.iVersion = t.readInt32(4, !1, this.iVersion));
        }),
        (g.a.GetPropsListReq = x);
      var D = x,
        B = function () {
          (this.sIcon = ""),
            (this.sAndroidSource = ""),
            (this.sIosSource = ""),
            (this.sWebSource = "");
        };
      (B.prototype._clone = function () {
        return new g.a.PropsResource();
      }),
        (B.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (B.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (B.prototype.writeTo = function (t) {
          t.writeString(0, this.sIcon),
            t.writeString(1, this.sAndroidSource),
            t.writeString(2, this.sIosSource),
            t.writeString(3, this.sWebSource);
        }),
        (B.prototype.readFrom = function (t) {
          (this.sIcon = t.readString(0, !1, this.sIcon)),
            (this.sAndroidSource = t.readString(1, !1, this.sAndroidSource)),
            (this.sIosSource = t.readString(2, !1, this.sIosSource)),
            (this.sWebSource = t.readString(3, !1, this.sWebSource));
        }),
        (g.a.PropsResource = B);
      var G = function () {
        (this.iEffectType = 0),
          (this.iPropsCount = 1),
          (this.sResource = ""),
          (this.iConfigType = 0),
          (this.dDisplayDuration = 0),
          (this.lTriggerCondition = 0),
          (this.iEdition = 0),
          (this.iChannel = 0),
          (this.iPosition = 0),
          (this.iRoomStatus = 0),
          (this.iStreamerLevel = 0),
          (this.iMP4Width = 0),
          (this.iMP4Height = 0),
          (this.sMP4Resource = ""),
          (this.iJumpType = 0),
          (this.sJumpUrl = "");
      };
      (G.prototype._clone = function () {
        return new g.a.GiftEffectInfo();
      }),
        (G.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (G.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (G.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iEffectType),
            t.writeInt32(1, this.iPropsCount),
            t.writeString(2, this.sResource),
            t.writeInt32(3, this.iConfigType),
            t.writeDouble(4, this.dDisplayDuration),
            t.writeInt64(5, this.lTriggerCondition),
            t.writeInt32(6, this.iEdition),
            t.writeInt32(7, this.iChannel),
            t.writeInt32(8, this.iPosition),
            t.writeInt32(9, this.iRoomStatus),
            t.writeInt32(10, this.iStreamerLevel),
            t.writeInt32(11, this.iMP4Width),
            t.writeInt32(12, this.iMP4Height),
            t.writeString(13, this.sMP4Resource),
            t.writeInt32(14, this.iJumpType),
            t.writeString(15, this.sJumpUrl);
        }),
        (G.prototype.readFrom = function (t) {
          (this.iEffectType = t.readInt32(0, !1, this.iEffectType)),
            (this.iPropsCount = t.readInt32(1, !1, this.iPropsCount)),
            (this.sResource = t.readString(2, !1, this.sResource)),
            (this.iConfigType = t.readInt32(3, !1, this.iConfigType)),
            (this.dDisplayDuration = t.readDouble(
              4,
              !1,
              this.dDisplayDuration
            )),
            (this.lTriggerCondition = t.readInt64(
              5,
              !1,
              this.lTriggerCondition
            )),
            (this.iEdition = t.readInt32(6, !1, this.iEdition)),
            (this.iChannel = t.readInt32(7, !1, this.iChannel)),
            (this.iPosition = t.readInt32(8, !1, this.iPosition)),
            (this.iRoomStatus = t.readInt32(9, !1, this.iRoomStatus)),
            (this.iStreamerLevel = t.readInt32(10, !1, this.iStreamerLevel)),
            (this.iMP4Width = t.readInt32(11, !1, this.iMP4Width)),
            (this.iMP4Height = t.readInt32(12, !1, this.iMP4Height)),
            (this.sMP4Resource = t.readString(13, !1, this.sMP4Resource)),
            (this.iJumpType = t.readInt32(14, !1, this.iJumpType)),
            (this.sJumpUrl = t.readString(15, !1, this.sJumpUrl));
        }),
        (g.a.GiftEffectInfo = G);
      var U = function () {
        (this.iPropsId = 0),
          (this.sPropsName = ""),
          (this.sPropsDesc = ""),
          (this.fCostGold = 0),
          (this.fCostSilver = 0),
          (this.fExchangeMoney = 0),
          (this.vSelectNum = new y.b.Vector(new y.b.INT32())),
          (this.iWeights = 0),
          (this.iClass = 0),
          (this.iMaxNum = 0),
          (this.tPhoneResource = new g.a.PropsResource()),
          (this.tWebResource = new g.a.PropsResource()),
          (this.vEffectInfo = new y.b.Vector(new g.a.GiftEffectInfo())),
          (this.vRoomsId = new y.b.Vector(new y.b.INT64())),
          (this.mStatus = new y.b.Map(new y.b.INT32(), new y.b.INT32())),
          (this.mNameLangs = new y.b.Map(new y.b.STRING(), new y.b.STRING())),
          (this.mDescLangs = new y.b.Map(new y.b.STRING(), new y.b.STRING())),
          (this.iGiftType = 0),
          (this.iChannelType = 0),
          (this.vChannelData = new y.b.Vector(new y.b.STRING())),
          (this.iBackpackValidity = 0),
          (this.sMarkeIcon = ""),
          (this.iMarkerStatus = 0),
          (this.iPlay = 0),
          (this.iPlayBoxId = 0),
          (this.iSubChannelType = 0),
          (this.vSubChannelData = new y.b.Vector(new y.b.STRING()));
      };
      (U.prototype._clone = function () {
        return new g.a.PropsItem();
      }),
        (U.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (U.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (U.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iPropsId),
            t.writeString(1, this.sPropsName),
            t.writeString(2, this.sPropsDesc),
            t.writeFloat(3, this.fCostGold),
            t.writeFloat(4, this.fCostSilver),
            t.writeFloat(5, this.fExchangeMoney),
            t.writeVector(6, this.vSelectNum),
            t.writeInt32(7, this.iWeights),
            t.writeInt32(8, this.iClass),
            t.writeInt32(9, this.iMaxNum),
            t.writeStruct(10, this.tPhoneResource),
            t.writeStruct(11, this.tWebResource),
            t.writeVector(12, this.vEffectInfo),
            t.writeVector(13, this.vRoomsId),
            t.writeMap(14, this.mStatus),
            t.writeMap(15, this.mNameLangs),
            t.writeMap(16, this.mDescLangs),
            t.writeInt32(17, this.iGiftType),
            t.writeInt32(18, this.iChannelType),
            t.writeVector(19, this.vChannelData),
            t.writeInt32(20, this.iBackpackValidity),
            t.writeString(21, this.sMarkeIcon),
            t.writeInt32(22, this.iMarkerStatus),
            t.writeInt32(23, this.iPlay),
            t.writeInt32(24, this.iPlayBoxId),
            t.writeInt32(25, this.iSubChannelType),
            t.writeVector(26, this.vSubChannelData);
        }),
        (U.prototype.readFrom = function (t) {
          (this.iPropsId = t.readInt32(0, !1, this.iPropsId)),
            (this.sPropsName = t.readString(1, !1, this.sPropsName)),
            (this.sPropsDesc = t.readString(2, !1, this.sPropsDesc)),
            (this.fCostGold = t.readFloat(3, !1, this.fCostGold)),
            (this.fCostSilver = t.readFloat(4, !1, this.fCostSilver)),
            (this.fExchangeMoney = t.readFloat(5, !1, this.fExchangeMoney)),
            (this.vSelectNum = t.readVector(6, !1, this.vSelectNum)),
            (this.iWeights = t.readInt32(7, !1, this.iWeights)),
            (this.iClass = t.readInt32(8, !1, this.iClass)),
            (this.iMaxNum = t.readInt32(9, !1, this.iMaxNum)),
            (this.tPhoneResource = t.readStruct(10, !1, this.tPhoneResource)),
            (this.tWebResource = t.readStruct(11, !1, this.tWebResource)),
            (this.vEffectInfo = t.readVector(12, !1, this.vEffectInfo)),
            (this.vRoomsId = t.readVector(13, !1, this.vRoomsId)),
            (this.mStatus = t.readMap(14, !1, this.mStatus)),
            (this.mNameLangs = t.readMap(15, !1, this.mNameLangs)),
            (this.mDescLangs = t.readMap(16, !1, this.mDescLangs)),
            (this.iGiftType = t.readInt32(17, !1, this.iGiftType)),
            (this.iChannelType = t.readInt32(18, !1, this.iChannelType)),
            (this.vChannelData = t.readVector(19, !1, this.vChannelData)),
            (this.iBackpackValidity = t.readInt32(
              20,
              !1,
              this.iBackpackValidity
            )),
            (this.sMarkeIcon = t.readString(21, !1, this.sMarkeIcon)),
            (this.iMarkerStatus = t.readInt32(22, !1, this.iMarkerStatus)),
            (this.iPlay = t.readInt32(23, !1, this.iPlay)),
            (this.iPlayBoxId = t.readInt32(24, !1, this.iPlayBoxId)),
            (this.iSubChannelType = t.readInt32(25, !1, this.iSubChannelType)),
            (this.vSubChannelData = t.readVector(26, !1, this.vSubChannelData));
        }),
        (g.a.PropsItem = U);
      var j = function () {
        (this.iType = 0),
          (this.vDataByType = new y.b.Vector(new y.b.STRING())),
          (this.tSpecPropItem = new g.a.PropsItem()),
          (this.iConfigId = 0);
      };
      (j.prototype._clone = function () {
        return new g.a.SpecPropItem();
      }),
        (j.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (j.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (j.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iType),
            t.writeVector(1, this.vDataByType),
            t.writeStruct(2, this.tSpecPropItem),
            t.writeInt32(3, this.iConfigId);
        }),
        (j.prototype.readFrom = function (t) {
          (this.iType = t.readInt32(0, !1, this.iType)),
            (this.vDataByType = t.readVector(1, !1, this.vDataByType)),
            (this.tSpecPropItem = t.readStruct(2, !1, this.tSpecPropItem)),
            (this.iConfigId = t.readInt32(3, !1, this.iConfigId));
        }),
        (g.a.SpecPropItem = j);
      var F = function () {
        this.iPropId = 0;
      };
      (F.prototype._clone = function () {
        return new g.a.QuickPropItem();
      }),
        (F.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (F.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (F.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iPropId);
        }),
        (F.prototype.readFrom = function (t) {
          this.iPropId = t.readInt32(0, !1, this.iPropId);
        }),
        (g.a.QuickPropItem = F);
      var V = function () {
        (this.sWebUrl = ""),
          (this.sAdrVerticalUrl = ""),
          (this.sAdrHorizontalUrl = ""),
          (this.sIosVerticalUrl = ""),
          (this.sIosHorizontalUrl = "");
      };
      (V.prototype._clone = function () {
        return new g.a.OverlayEffect();
      }),
        (V.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (V.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (V.prototype.writeTo = function (t) {
          t.writeString(0, this.sWebUrl),
            t.writeString(1, this.sAdrVerticalUrl),
            t.writeString(2, this.sAdrHorizontalUrl),
            t.writeString(3, this.sIosVerticalUrl),
            t.writeString(4, this.sIosHorizontalUrl);
        }),
        (V.prototype.readFrom = function (t) {
          (this.sWebUrl = t.readString(0, !1, this.sWebUrl)),
            (this.sAdrVerticalUrl = t.readString(1, !1, this.sAdrVerticalUrl)),
            (this.sAdrHorizontalUrl = t.readString(
              2,
              !1,
              this.sAdrHorizontalUrl
            )),
            (this.sIosVerticalUrl = t.readString(3, !1, this.sIosVerticalUrl)),
            (this.sIosHorizontalUrl = t.readString(
              4,
              !1,
              this.sIosHorizontalUrl
            ));
        }),
        (g.a.OverlayEffect = V);
      n("OK13");
      var Y = function () {
        (this.vPropsItemList = new y.b.Vector(new g.a.PropsItem())),
          (this.sLang = ""),
          (this.sClientType = ""),
          (this.sMd5 = ""),
          (this.mSpecPropsItemList = new y.b.Map(
            new y.b.INT32(),
            new y.b.Vector(new g.a.SpecPropItem())
          )),
          (this.mShowQuickPropList = new y.b.Map(
            new y.b.INT32(),
            new y.b.Map(new y.b.STRING(), new g.a.QuickPropItem())
          )),
          (this.vQuickPropTypeList = new y.b.Vector(new y.b.INT32())),
          (this.iComboCountDown = 0),
          (this.mOverlayEffect = new y.b.Map(
            new y.b.INT32(),
            new g.a.OverlayEffect()
          )),
          (this.mStreamerEffect = new y.b.Map(
            new y.b.INT32(),
            new y.b.Vector(new g.a.StreamerEffect())
          ));
      };
      (Y.prototype._clone = function () {
        return new g.a.GetPropsListRsp();
      }),
        (Y.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (Y.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (Y.prototype.writeTo = function (t) {
          t.writeVector(0, this.vPropsItemList),
            t.writeString(1, this.sLang),
            t.writeString(2, this.sClientType),
            t.writeString(3, this.sMd5),
            t.writeMap(4, this.mSpecPropsItemList),
            t.writeMap(5, this.mShowQuickPropList),
            t.writeVector(6, this.vQuickPropTypeList),
            t.writeInt32(7, this.iComboCountDown),
            t.writeMap(8, this.mOverlayEffect),
            t.writeMap(9, this.mStreamerEffect);
        }),
        (Y.prototype.readFrom = function (t) {
          (this.vPropsItemList = t.readVector(0, !1, this.vPropsItemList)),
            (this.sLang = t.readString(1, !1, this.sLang)),
            (this.sClientType = t.readString(2, !1, this.sClientType)),
            (this.sMd5 = t.readString(3, !1, this.sMd5)),
            (this.mSpecPropsItemList = t.readMap(
              4,
              !1,
              this.mSpecPropsItemList
            )),
            (this.mShowQuickPropList = t.readMap(
              5,
              !1,
              this.mShowQuickPropList
            )),
            (this.vQuickPropTypeList = t.readVector(
              6,
              !1,
              this.vQuickPropTypeList
            )),
            (this.iComboCountDown = t.readInt32(7, !1, this.iComboCountDown)),
            (this.mOverlayEffect = t.readMap(8, !1, this.mOverlayEffect)),
            (this.mStreamerEffect = t.readMap(9, !1, this.mStreamerEffect));
        }),
        (g.a.GetPropsListRsp = Y);
      var W = Y,
        H = function () {
          (this.user = new g.a.UserId()),
            (this.lRoomId = 0),
            (this.lPresenterUid = 0),
            (this.iItemType = 0),
            (this.iItemCount = 0),
            (this.sPayId = ""),
            (this.sSendContent = ""),
            (this.sSenderNick = ""),
            (this.sPresenterNick = ""),
            (this.iPayType = 0),
            (this.iFromType = 0),
            (this.sGameId = ""),
            (this.sMid = ""),
            (this.sSenderAvatarUrl = ""),
            (this.iChannelType = 0),
            (this.lRoomType = 0),
            (this.iLcid = 0),
            (this.sAlise = ""),
            (this.sPresenterUrl = ""),
            (this.sPresenterCountry = ""),
            (this.sSenderCountry = ""),
            (this.iActivityId = 0),
            (this.iJavaGiftType = 0),
            (this.iConsumeSource = 0),
            (this.iVersion = 0),
            (this.lRecipientId = 0),
            (this.mExtParam = new y.b.Map(new y.b.STRING(), new y.b.STRING()));
        };
      (H.prototype._clone = function () {
        return new g.a.GiftConsumeReq();
      }),
        (H.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (H.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (H.prototype.writeTo = function (t) {
          t.writeStruct(0, this.user),
            t.writeInt64(1, this.lRoomId),
            t.writeInt64(2, this.lPresenterUid),
            t.writeInt32(3, this.iItemType),
            t.writeInt32(4, this.iItemCount),
            t.writeString(5, this.sPayId),
            t.writeString(6, this.sSendContent),
            t.writeString(7, this.sSenderNick),
            t.writeString(8, this.sPresenterNick),
            t.writeInt32(9, this.iPayType),
            t.writeInt32(10, this.iFromType),
            t.writeString(11, this.sGameId),
            t.writeString(12, this.sMid),
            t.writeString(13, this.sSenderAvatarUrl),
            t.writeInt32(14, this.iChannelType),
            t.writeInt64(15, this.lRoomType),
            t.writeInt32(16, this.iLcid),
            t.writeString(17, this.sAlise),
            t.writeString(18, this.sPresenterUrl),
            t.writeString(19, this.sPresenterCountry),
            t.writeString(20, this.sSenderCountry),
            t.writeInt32(21, this.iActivityId),
            t.writeInt32(22, this.iJavaGiftType),
            t.writeInt32(23, this.iConsumeSource),
            t.writeInt32(24, this.iVersion),
            t.writeInt64(25, this.lRecipientId),
            t.writeMap(26, this.mExtParam);
        }),
        (H.prototype.readFrom = function (t) {
          (this.user = t.readStruct(0, !1, this.user)),
            (this.lRoomId = t.readInt64(1, !1, this.lRoomId)),
            (this.lPresenterUid = t.readInt64(2, !1, this.lPresenterUid)),
            (this.iItemType = t.readInt32(3, !1, this.iItemType)),
            (this.iItemCount = t.readInt32(4, !1, this.iItemCount)),
            (this.sPayId = t.readString(5, !1, this.sPayId)),
            (this.sSendContent = t.readString(6, !1, this.sSendContent)),
            (this.sSenderNick = t.readString(7, !1, this.sSenderNick)),
            (this.sPresenterNick = t.readString(8, !1, this.sPresenterNick)),
            (this.iPayType = t.readInt32(9, !1, this.iPayType)),
            (this.iFromType = t.readInt32(10, !1, this.iFromType)),
            (this.sGameId = t.readString(11, !1, this.sGameId)),
            (this.sMid = t.readString(12, !1, this.sMid)),
            (this.sSenderAvatarUrl = t.readString(
              13,
              !1,
              this.sSenderAvatarUrl
            )),
            (this.iChannelType = t.readInt32(14, !1, this.iChannelType)),
            (this.lRoomType = t.readInt64(15, !1, this.lRoomType)),
            (this.iLcid = t.readInt32(16, !1, this.iLcid)),
            (this.sAlise = t.readString(17, !1, this.sAlise)),
            (this.sPresenterUrl = t.readString(18, !1, this.sPresenterUrl)),
            (this.sPresenterCountry = t.readString(
              19,
              !1,
              this.sPresenterCountry
            )),
            (this.sSenderCountry = t.readString(20, !1, this.sSenderCountry)),
            (this.iActivityId = t.readInt32(21, !1, this.iActivityId)),
            (this.iJavaGiftType = t.readInt32(22, !1, this.iJavaGiftType)),
            (this.iConsumeSource = t.readInt32(23, !1, this.iConsumeSource)),
            (this.iVersion = t.readInt32(24, !1, this.iVersion)),
            (this.lRecipientId = t.readInt64(25, !1, this.lRecipientId)),
            (this.mExtParam = t.readMap(26, !1, this.mExtParam));
        }),
        (g.a.GiftConsumeReq = H);
      var K = H,
        z = function () {
          (this.iPayRespCode = 0),
            (this.iItemType = 0),
            (this.iItemCount = 0),
            (this.strPayId = ""),
            (this.strPayConfirmUrl = ""),
            (this.strSendContent = ""),
            (this.lPresenterUid = 0),
            (this.sExpand = ""),
            (this.strPayItemInfo = ""),
            (this.iPayType = 0),
            (this.iComboScore = 0),
            (this.iBPGiftRemainCount = 0),
            (this.iMaxNum = 0),
            (this.sTips = ""),
            (this.lRecipientId = 0);
        };
      (z.prototype._clone = function () {
        return new g.a.GiftConsumeRsp();
      }),
        (z.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (z.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (z.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iPayRespCode),
            t.writeInt32(1, this.iItemType),
            t.writeInt32(2, this.iItemCount),
            t.writeString(3, this.strPayId),
            t.writeString(4, this.strPayConfirmUrl),
            t.writeString(5, this.strSendContent),
            t.writeInt64(6, this.lPresenterUid),
            t.writeString(7, this.sExpand),
            t.writeString(8, this.strPayItemInfo),
            t.writeInt32(9, this.iPayType),
            t.writeInt32(10, this.iComboScore),
            t.writeInt32(11, this.iBPGiftRemainCount),
            t.writeInt32(12, this.iMaxNum),
            t.writeString(13, this.sTips),
            t.writeInt64(14, this.lRecipientId);
        }),
        (z.prototype.readFrom = function (t) {
          (this.iPayRespCode = t.readInt32(0, !1, this.iPayRespCode)),
            (this.iItemType = t.readInt32(1, !1, this.iItemType)),
            (this.iItemCount = t.readInt32(2, !1, this.iItemCount)),
            (this.strPayId = t.readString(3, !1, this.strPayId)),
            (this.strPayConfirmUrl = t.readString(
              4,
              !1,
              this.strPayConfirmUrl
            )),
            (this.strSendContent = t.readString(5, !1, this.strSendContent)),
            (this.lPresenterUid = t.readInt64(6, !1, this.lPresenterUid)),
            (this.sExpand = t.readString(7, !1, this.sExpand)),
            (this.strPayItemInfo = t.readString(8, !1, this.strPayItemInfo)),
            (this.iPayType = t.readInt32(9, !1, this.iPayType)),
            (this.iComboScore = t.readInt32(10, !1, this.iComboScore)),
            (this.iBPGiftRemainCount = t.readInt32(
              11,
              !1,
              this.iBPGiftRemainCount
            )),
            (this.iMaxNum = t.readInt32(12, !1, this.iMaxNum)),
            (this.sTips = t.readString(13, !1, this.sTips)),
            (this.lRecipientId = t.readInt64(14, !1, this.lRecipientId));
        }),
        (g.a.GiftConsumeRsp = z);
      var X = z,
        q = function () {
          (this.user = new g.a.UserId()),
            (this.sLang = ""),
            (this.sClientType = ""),
            (this.iPropsListType = 0),
            (this.iCallType = 0);
        };
      (q.prototype._clone = function () {
        return new g.a.GetPropsListByTypeReq();
      }),
        (q.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (q.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (q.prototype.writeTo = function (t) {
          t.writeStruct(0, this.user),
            t.writeString(1, this.sLang),
            t.writeString(2, this.sClientType),
            t.writeInt32(3, this.iPropsListType),
            t.writeInt32(4, this.iCallType);
        }),
        (q.prototype.readFrom = function (t) {
          (this.user = t.readStruct(0, !1, this.user)),
            (this.sLang = t.readString(1, !1, this.sLang)),
            (this.sClientType = t.readString(2, !1, this.sClientType)),
            (this.iPropsListType = t.readInt32(3, !1, this.iPropsListType)),
            (this.iCallType = t.readInt32(4, !1, this.iCallType));
        }),
        (g.a.GetPropsListByTypeReq = q);
      var Q = q,
        J = function () {
          (this.iCode = 0),
            (this.sLang = ""),
            (this.sClientType = ""),
            (this.iPropsListType = 0),
            (this.vPropsItemList = new y.b.Vector(new g.a.PropsItem())),
            (this.mSpecPropsItemList = new y.b.Map(
              new y.b.INT32(),
              new y.b.Vector(new g.a.SpecPropItem())
            ));
        };
      (J.prototype._clone = function () {
        return new g.a.GetPropsListByTypeRsp();
      }),
        (J.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (J.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (J.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode),
            t.writeString(1, this.sLang),
            t.writeString(2, this.sClientType),
            t.writeInt32(3, this.iPropsListType),
            t.writeVector(4, this.vPropsItemList),
            t.writeMap(5, this.mSpecPropsItemList);
        }),
        (J.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.sLang = t.readString(1, !1, this.sLang)),
            (this.sClientType = t.readString(2, !1, this.sClientType)),
            (this.iPropsListType = t.readInt32(3, !1, this.iPropsListType)),
            (this.vPropsItemList = t.readVector(4, !1, this.vPropsItemList)),
            (this.mSpecPropsItemList = t.readMap(
              5,
              !1,
              this.mSpecPropsItemList
            ));
        }),
        (g.a.GetPropsListByTypeRsp = J);
      var Z = J,
        $ =
          (n("4OHv"),
          function () {
            (this.user = new g.a.UserId()),
              (this.sLang = ""),
              (this.sClientType = ""),
              (this.sGiftItemListMD5 = ""),
              (this.iVersion = 0),
              (this.tAnchorInfo = new g.a.AnchorInfo());
          });
      ($.prototype._clone = function () {
        return new g.a.GetGiftListByRoomReq();
      }),
        ($.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        ($.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        ($.prototype.writeTo = function (t) {
          t.writeStruct(0, this.user),
            t.writeString(1, this.sLang),
            t.writeString(2, this.sClientType),
            t.writeString(3, this.sGiftItemListMD5),
            t.writeInt32(4, this.iVersion),
            t.writeStruct(5, this.tAnchorInfo);
        }),
        ($.prototype.readFrom = function (t) {
          (this.user = t.readStruct(0, !1, this.user)),
            (this.sLang = t.readString(1, !1, this.sLang)),
            (this.sClientType = t.readString(2, !1, this.sClientType)),
            (this.sGiftItemListMD5 = t.readString(
              3,
              !1,
              this.sGiftItemListMD5
            )),
            (this.iVersion = t.readInt32(4, !1, this.iVersion)),
            (this.tAnchorInfo = t.readStruct(5, !1, this.tAnchorInfo));
        }),
        (g.a.GetGiftListByRoomReq = $);
      var tt = $,
        et =
          (n("nt5Y"),
          function () {
            (this.sTabName = ""),
              (this.vGiftId = new y.b.Vector(new y.b.INT32())),
              (this.iTabId = 0),
              (this.iTabType = 0),
              (this.mExtraData = new y.b.Map(
                new y.b.STRING(),
                new y.b.STRING()
              )),
              (this.sBackground = ""),
              (this.sGotoURL = ""),
              (this.sDescription = "");
          });
      (et.prototype._clone = function () {
        return new g.a.GiftTab();
      }),
        (et.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (et.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (et.prototype.writeTo = function (t) {
          t.writeString(0, this.sTabName),
            t.writeVector(1, this.vGiftId),
            t.writeInt32(2, this.iTabId),
            t.writeInt32(3, this.iTabType),
            t.writeMap(4, this.mExtraData),
            t.writeString(5, this.sBackground),
            t.writeString(6, this.sGotoURL),
            t.writeString(7, this.sDescription);
        }),
        (et.prototype.readFrom = function (t) {
          (this.sTabName = t.readString(0, !1, this.sTabName)),
            (this.vGiftId = t.readVector(1, !1, this.vGiftId)),
            (this.iTabId = t.readInt32(2, !1, this.iTabId)),
            (this.iTabType = t.readInt32(3, !1, this.iTabType)),
            (this.mExtraData = t.readMap(4, !1, this.mExtraData)),
            (this.sBackground = t.readString(5, !1, this.sBackground)),
            (this.sGotoURL = t.readString(6, !1, this.sGotoURL)),
            (this.sDescription = t.readString(7, !1, this.sDescription));
        }),
        (g.a.GiftTab = et);
      var nt = function () {
        (this.iCode = 0),
          (this.vGiftItem = new y.b.Vector(new g.a.GiftItem())),
          (this.sGiftItemListMD5 = ""),
          (this.vReplaceItem = new y.b.Vector(new g.a.GiftItem())),
          (this.tQuickGiftItem = new g.a.QuickPropItem()),
          (this.mStreamerEffect = new y.b.Map(
            new y.b.INT32(),
            new y.b.Vector(new g.a.StreamerEffect())
          )),
          (this.iComboCountDown = 0),
          (this.lRoomId = 0),
          (this.vGiftTab = new y.b.Vector(new g.a.GiftTab()));
      };
      (nt.prototype._clone = function () {
        return new g.a.GetGiftListByRoomRsp();
      }),
        (nt.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (nt.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (nt.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode),
            t.writeVector(1, this.vGiftItem),
            t.writeString(2, this.sGiftItemListMD5),
            t.writeVector(3, this.vReplaceItem),
            t.writeStruct(4, this.tQuickGiftItem),
            t.writeMap(5, this.mStreamerEffect),
            t.writeInt32(6, this.iComboCountDown),
            t.writeInt64(7, this.lRoomId),
            t.writeVector(8, this.vGiftTab);
        }),
        (nt.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.vGiftItem = t.readVector(1, !1, this.vGiftItem)),
            (this.sGiftItemListMD5 = t.readString(
              2,
              !1,
              this.sGiftItemListMD5
            )),
            (this.vReplaceItem = t.readVector(3, !1, this.vReplaceItem)),
            (this.tQuickGiftItem = t.readStruct(4, !1, this.tQuickGiftItem)),
            (this.mStreamerEffect = t.readMap(5, !1, this.mStreamerEffect)),
            (this.iComboCountDown = t.readInt32(6, !1, this.iComboCountDown)),
            (this.lRoomId = t.readInt64(7, !1, this.lRoomId)),
            (this.vGiftTab = t.readVector(8, !1, this.vGiftTab));
        }),
        (g.a.GetGiftListByRoomRsp = nt);
      var rt = nt,
        it = function () {
          (this.user = new g.a.UserId()),
            (this.sLang = ""),
            (this.sClientType = ""),
            (this.iGiftListType = 0),
            (this.iCallType = 0);
        };
      (it.prototype._clone = function () {
        return new g.a.GetGiftListByTypeReq();
      }),
        (it.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (it.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (it.prototype.writeTo = function (t) {
          t.writeStruct(0, this.user),
            t.writeString(1, this.sLang),
            t.writeString(2, this.sClientType),
            t.writeInt32(3, this.iGiftListType),
            t.writeInt32(4, this.iCallType);
        }),
        (it.prototype.readFrom = function (t) {
          (this.user = t.readStruct(0, !1, this.user)),
            (this.sLang = t.readString(1, !1, this.sLang)),
            (this.sClientType = t.readString(2, !1, this.sClientType)),
            (this.iGiftListType = t.readInt32(3, !1, this.iGiftListType)),
            (this.iCallType = t.readInt32(4, !1, this.iCallType));
        }),
        (g.a.GetGiftListByTypeReq = it);
      var ot = it,
        at = function () {
          (this.iChannelType = 0),
            (this.vChannelData = new y.b.Vector(new y.b.STRING()));
        };
      (at.prototype._clone = function () {
        return new g.a.GiftChannel();
      }),
        (at.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (at.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (at.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iChannelType),
            t.writeVector(1, this.vChannelData);
        }),
        (at.prototype.readFrom = function (t) {
          (this.iChannelType = t.readInt32(0, !1, this.iChannelType)),
            (this.vChannelData = t.readVector(1, !1, this.vChannelData));
        }),
        (g.a.GiftChannel = at);
      n("5orL"), n("8g70");
      var st = function () {
        (this.tGiftItem = new g.a.GiftItem()),
          (this.iGiftType = 0),
          (this.fExchangeMoney = 0),
          (this.mStatus = new y.b.Map(new y.b.STRING(), new y.b.INT32())),
          (this.mNameLang = new y.b.Map(new y.b.STRING(), new y.b.STRING())),
          (this.mDescLang = new y.b.Map(new y.b.STRING(), new y.b.STRING())),
          (this.mDynamicResource = new y.b.Map(
            new y.b.STRING(),
            new y.b.STRING()
          )),
          (this.mPackNum = new y.b.Map(
            new y.b.STRING(),
            new y.b.Vector(new y.b.INT32())
          )),
          (this.vGiftChannel = new y.b.Vector(new g.a.GiftChannel())),
          (this.bIsAllRoomCanSee = !0),
          (this.mGiftEffect = new y.b.Map(
            new y.b.STRING(),
            new g.a.GiftEffect()
          )),
          (this.iGiftLevel = 0),
          (this.vGiftPlay = new y.b.Vector(new g.a.GiftPlay())),
          (this.lCreateTime = 0),
          (this.bIsActivityGift = !0),
          (this.iTabAll = 0),
          (this.iGiftChannelRelation = 0);
      };
      (st.prototype._clone = function () {
        return new g.a.GiftConfig();
      }),
        (st.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (st.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (st.prototype.writeTo = function (t) {
          t.writeStruct(0, this.tGiftItem),
            t.writeInt32(1, this.iGiftType),
            t.writeFloat(2, this.fExchangeMoney),
            t.writeMap(3, this.mStatus),
            t.writeMap(4, this.mNameLang),
            t.writeMap(5, this.mDescLang),
            t.writeMap(6, this.mDynamicResource),
            t.writeMap(7, this.mPackNum),
            t.writeVector(8, this.vGiftChannel),
            t.writeBoolean(9, this.bIsAllRoomCanSee),
            t.writeMap(10, this.mGiftEffect),
            t.writeInt32(11, this.iGiftLevel),
            t.writeVector(12, this.vGiftPlay),
            t.writeInt64(13, this.lCreateTime),
            t.writeBoolean(14, this.bIsActivityGift),
            t.writeInt32(15, this.iTabAll),
            t.writeInt32(16, this.iGiftChannelRelation);
        }),
        (st.prototype.readFrom = function (t) {
          (this.tGiftItem = t.readStruct(0, !1, this.tGiftItem)),
            (this.iGiftType = t.readInt32(1, !1, this.iGiftType)),
            (this.fExchangeMoney = t.readFloat(2, !1, this.fExchangeMoney)),
            (this.mStatus = t.readMap(3, !1, this.mStatus)),
            (this.mNameLang = t.readMap(4, !1, this.mNameLang)),
            (this.mDescLang = t.readMap(5, !1, this.mDescLang)),
            (this.mDynamicResource = t.readMap(6, !1, this.mDynamicResource)),
            (this.mPackNum = t.readMap(7, !1, this.mPackNum)),
            (this.vGiftChannel = t.readVector(8, !1, this.vGiftChannel)),
            (this.bIsAllRoomCanSee = t.readBoolean(
              9,
              !1,
              this.bIsAllRoomCanSee
            )),
            (this.mGiftEffect = t.readMap(10, !1, this.mGiftEffect)),
            (this.iGiftLevel = t.readInt32(11, !1, this.iGiftLevel)),
            (this.vGiftPlay = t.readVector(12, !1, this.vGiftPlay)),
            (this.lCreateTime = t.readInt64(13, !1, this.lCreateTime)),
            (this.bIsActivityGift = t.readBoolean(
              14,
              !1,
              this.bIsActivityGift
            )),
            (this.iTabAll = t.readInt32(15, !1, this.iTabAll)),
            (this.iGiftChannelRelation = t.readInt32(
              16,
              !1,
              this.iGiftChannelRelation
            ));
        }),
        (g.a.GiftConfig = st);
      var ct = function () {
        (this.iCode = 0), (this.vGift = new y.b.Vector(new g.a.GiftConfig()));
      };
      (ct.prototype._clone = function () {
        return new g.a.GetGiftListByTypeRsp();
      }),
        (ct.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (ct.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (ct.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode), t.writeVector(1, this.vGift);
        }),
        (ct.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.vGift = t.readVector(1, !1, this.vGift));
        }),
        (g.a.GetGiftListByTypeRsp = ct);
      var ut = ct,
        lt = function () {
          (this.vGiftId = new y.b.Vector(new y.b.INT32())),
            (this.iGetCategory = 0);
        };
      (lt.prototype._clone = function () {
        return new g.a.GetGiftListByIdReq();
      }),
        (lt.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (lt.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (lt.prototype.writeTo = function (t) {
          t.writeVector(0, this.vGiftId), t.writeInt32(1, this.iGetCategory);
        }),
        (lt.prototype.readFrom = function (t) {
          (this.vGiftId = t.readVector(0, !1, this.vGiftId)),
            (this.iGetCategory = t.readInt32(1, !1, this.iGetCategory));
        }),
        (g.a.GetGiftListByIdReq = lt);
      var ft = lt,
        ht =
          (n("h+kL"),
          n("vVVP"),
          function () {
            (this.iConfigId = 0),
              (this.iType = 0),
              (this.vDataByType = new y.b.Vector(new y.b.STRING())),
              (this.iGiftId = 0),
              (this.mNameLang = new y.b.Map(
                new y.b.STRING(),
                new y.b.STRING()
              )),
              (this.mDescLang = new y.b.Map(
                new y.b.STRING(),
                new y.b.STRING()
              )),
              (this.mDynamicResource = new y.b.Map(
                new y.b.STRING(),
                new y.b.STRING()
              )),
              (this.tGiftResource = new g.a.GiftResource()),
              (this.mGiftEffect = new y.b.Map(
                new y.b.STRING(),
                new g.a.GiftEffect()
              )),
              (this.vGiftChannel = new y.b.Vector(new g.a.GiftChannel())),
              (this.lUpdateTime = 0),
              (this.lCreateTime = 0),
              (this.mStickerEffect = new y.b.Map(
                new y.b.STRING(),
                new g.a.StickerEffect()
              )),
              (this.iSubScript = 0),
              (this.lAvailableStartTime = 0),
              (this.lAvailableEndTime = 0),
              (this.lAvailableRemainSec = 0),
              (this.iTimeShelf = 0);
          });
      (ht.prototype._clone = function () {
        return new g.a.SpecialGiftItem();
      }),
        (ht.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (ht.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (ht.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iConfigId),
            t.writeInt32(1, this.iType),
            t.writeVector(2, this.vDataByType),
            t.writeInt32(3, this.iGiftId),
            t.writeMap(4, this.mNameLang),
            t.writeMap(5, this.mDescLang),
            t.writeMap(6, this.mDynamicResource),
            t.writeStruct(7, this.tGiftResource),
            t.writeMap(8, this.mGiftEffect),
            t.writeVector(9, this.vGiftChannel),
            t.writeInt64(10, this.lUpdateTime),
            t.writeInt64(11, this.lCreateTime),
            t.writeMap(12, this.mStickerEffect),
            t.writeInt32(13, this.iSubScript),
            t.writeInt64(14, this.lAvailableStartTime),
            t.writeInt64(15, this.lAvailableEndTime),
            t.writeInt64(16, this.lAvailableRemainSec),
            t.writeInt32(17, this.iTimeShelf);
        }),
        (ht.prototype.readFrom = function (t) {
          (this.iConfigId = t.readInt32(0, !1, this.iConfigId)),
            (this.iType = t.readInt32(1, !1, this.iType)),
            (this.vDataByType = t.readVector(2, !1, this.vDataByType)),
            (this.iGiftId = t.readInt32(3, !1, this.iGiftId)),
            (this.mNameLang = t.readMap(4, !1, this.mNameLang)),
            (this.mDescLang = t.readMap(5, !1, this.mDescLang)),
            (this.mDynamicResource = t.readMap(6, !1, this.mDynamicResource)),
            (this.tGiftResource = t.readStruct(7, !1, this.tGiftResource)),
            (this.mGiftEffect = t.readMap(8, !1, this.mGiftEffect)),
            (this.vGiftChannel = t.readVector(9, !1, this.vGiftChannel)),
            (this.lUpdateTime = t.readInt64(10, !1, this.lUpdateTime)),
            (this.lCreateTime = t.readInt64(11, !1, this.lCreateTime)),
            (this.mStickerEffect = t.readMap(12, !1, this.mStickerEffect)),
            (this.iSubScript = t.readInt32(13, !1, this.iSubScript)),
            (this.lAvailableStartTime = t.readInt64(
              14,
              !1,
              this.lAvailableStartTime
            )),
            (this.lAvailableEndTime = t.readInt64(
              15,
              !1,
              this.lAvailableEndTime
            )),
            (this.lAvailableRemainSec = t.readInt64(
              16,
              !1,
              this.lAvailableRemainSec
            )),
            (this.iTimeShelf = t.readInt32(17, !1, this.iTimeShelf));
        }),
        (g.a.SpecialGiftItem = ht);
      var pt = function () {
        (this.iCode = 0),
          (this.vGift = new y.b.Vector(new g.a.GiftConfig())),
          (this.mSpecialGift = new y.b.Map(
            new y.b.INT32(),
            new y.b.Vector(new g.a.SpecialGiftItem())
          )),
          (this.vGiftChannelPriority = new y.b.Vector(new y.b.INT32()));
      };
      (pt.prototype._clone = function () {
        return new g.a.GetGiftListByIdRsp();
      }),
        (pt.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (pt.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (pt.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCode),
            t.writeVector(1, this.vGift),
            t.writeMap(2, this.mSpecialGift),
            t.writeVector(3, this.vGiftChannelPriority);
        }),
        (pt.prototype.readFrom = function (t) {
          (this.iCode = t.readInt32(0, !1, this.iCode)),
            (this.vGift = t.readVector(1, !1, this.vGift)),
            (this.mSpecialGift = t.readMap(2, !1, this.mSpecialGift)),
            (this.vGiftChannelPriority = t.readVector(
              3,
              !1,
              this.vGiftChannelPriority
            ));
        }),
        (g.a.GetGiftListByIdRsp = pt);
      var dt = pt,
        _t = { kGIFT_LIST_LUCKY: 1, kGIFT_LIST_FORTUNE: 2 };
      g.a.EGiftListType = _t;
      var vt,
        mt = _t,
        gt = n("voLu"),
        yt = n("K0CG"),
        Rt = n("Kw0i"),
        bt = n("w0rY"),
        wt = n("Mk7s");
      function Et(t, e) {
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
      function Ct(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Et(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Et(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function Tt(t) {
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
            r = d()(t);
          if (e) {
            var i = d()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return h()(this, n);
        };
      }
      var St = L.a.EUriGiftEffectBroadCastNotice;
      Object(gt.a)("nimo_giftconsume_with_id_grey_0111"),
        Object(gt.a)("nimo_giftconsume_with_id_grey_0127");
      var It =
          ((vt = (function (t) {
            l()(n, t);
            var e = Tt(n);
            function n(t) {
              var r;
              return (
                a()(this, n),
                ((r = e.call(this, t)).version = t && t.version),
                (r.mid = (t && t.mid) || ""),
                r
              );
            }
            return (
              c()(n, [
                {
                  key: "getPropsList",
                  value: function (t) {
                    var e = new D();
                    return (
                      (e.sClientType = C.a.ClientTypeWeb),
                      this.setUserId(e.user),
                      (e.sLang = e.user.sLang),
                      (e.iVersion = this.version),
                      (e.sMd5 = t),
                      this.fetch("getPropsList", e, W, {
                        okCode: [
                          T.a.kMRC_PROP_LIST_OK,
                          T.a.kMRC_PROP_LIST_EXIST,
                        ],
                      })
                    );
                  },
                },
                {
                  key: "giftConsume",
                  value: function (t) {
                    var e = new K();
                    this.setUserId(e.user),
                      (e.lPresenterUid = t.lPresenterUid || bt.b.liveRoom.auId),
                      (e.lRecipientId = t.lRecipientId || bt.b.liveRoom.auId),
                      (e.lRoomId = t.lRoomId || bt.b.liveRoom.roomId),
                      (e.iPayType = t.iPayType || 0),
                      (e.iItemType = t.iItemType),
                      (e.iItemCount = t.iItemCount),
                      (e.iActivityId = t.iActivityId),
                      (e.iChannelType =
                        void 0 !== t.iChannelType
                          ? t.iChannelType
                          : k.CHANNEL_TYPE_HOT);
                    var n = new Date();
                    return (
                      (e.sPayId = Object(yt.i)(
                        ""
                          .concat(n.getMinutes())
                          .concat(n.getSeconds())
                          .concat(n.getMilliseconds())
                          .concat(Math.round(100 * Math.random()))
                      )),
                      (e.iVersion = 2),
                      t.iChannelType && (e.iChannelType = t.iChannelType),
                      (e.iFromType = t.iFromType || C.a.ClientTypeWeb),
                      (e.sMid = this.mid),
                      t.iVersion && !e.iVersion && (e.iVersion = t.iVersion),
                      t.mExtParam && (e.mExtParam.value = t.mExtParam),

                      e.user.lUid = this.udbUserId,
                      e.user.sToken = this.udbBizToken,
                      e.user.sUDBVer = this.udbVersion,
                      e.user.sGuid = this.sGuid,

                      this.authFetch("giftConsume", e, X, {
                        customHandleError: !0,
                        reportResult: !0,
                        useSignal: !0,
                        tag: "living_send_gift",
                        retry: 1,
                      })
                        .then(function (t) {
                          if (2 === e.iVersion && t.iPayRespCode) {
                            var n = Ct(
                              Ct({}, t),
                              {},
                              { returnValue: t.iPayRespCode }
                            );
                            return (
                              Rt.b.emit(Rt.a.ROOM_SEND_GIFT_STATUS, {
                                response: n,
                              }),
                              Promise.reject(n)
                            );
                          }
                          return (
                            Rt.b.emit(Rt.a.ROOM_SEND_GIFT_STATUS, {
                              response: t,
                            }),
                            Promise.resolve(t)
                          );
                        })
                        .catch(function (t) {
                          return (
                            Rt.b.emit(Rt.a.ROOM_SEND_GIFT_STATUS, {
                              response: t,
                            }),
                            Promise.reject(t)
                          );
                        })
                    );
                  },
                },
                {
                  key: "getPropsListByType",
                  value: function (t) {
                    var e = t.iPropsListType,
                      n = t.sClientType,
                      r = void 0 === n ? C.a.ClientTypeWeb : n,
                      i = new Q();
                    return (
                      (i.sClientType = r),
                      this.setUserId(i.user),
                      (i.sLang = i.user.sLang),
                      (i.iPropsListType = e),
                      this.fetch("getPropsListByType", i, Z)
                    );
                  },
                },
                {
                  key: "getGiftListByRoom",
                  value: function (t) {
                    var e = t.sClientType,
                      n = void 0 === e ? C.a.ClientTypeWeb : e,
                      r = t.sGiftItemListMD5,
                      i = t.tAnchorInfo,
                      o = new tt();
                    return (
                      this.setUserId(o.user),
                      (o.sLang = o.user.sLang),
                      (o.sClientType = n),
                      (o.sGiftItemListMD5 = r),
                      (o.iVersion = this.version),
                      i &&
                        ((o.tAnchorInfo.lUid = i.anchorId),
                        (o.tAnchorInfo.sLang = i.anchorLang),
                        (o.tAnchorInfo.lRoomType = i.gameId),
                        (o.tAnchorInfo.sCountry = i.anchorCountryCode),
                        (o.tAnchorInfo.lRoomId = i.roomId)),
                      this.fetch("getGiftListByRoom", o, rt, {
                        customHandleError: !0,
                      })
                    );
                  },
                },
                {
                  key: "getGiftListByType",
                  value: function (t) {
                    var e = t.sClientType,
                      n = t.iGiftListType,
                      r = t.iCallType,
                      i = new ot();
                    return (
                      this.setUserId(i.user),
                      (i.sLang = i.user.sLang),
                      (i.sClientType = e),
                      (i.iGiftListType = n),
                      (i.iCallType = r),
                      this.fetch("getGiftListByType", i, ut, {
                        customHandleError: !0,
                      })
                    );
                  },
                },
                {
                  key: "getGiftListById",
                  value: function (t) {
                    var e = new ft();
                    return (
                      (e.vGiftId.value = t),
                      (e.iGetCategory = 1),
                      this.fetch("getGiftListById", e, dt, {
                        customHandleError: !0,
                      })
                    );
                  },
                },
              ]),
              n
            );
          })(bt.a)),
          v()(
            vt.prototype,
            "getPropsList",
            [wt.a],
            Object.getOwnPropertyDescriptor(vt.prototype, "getPropsList"),
            vt.prototype
          ),
          v()(
            vt.prototype,
            "giftConsume",
            [wt.a],
            Object.getOwnPropertyDescriptor(vt.prototype, "giftConsume"),
            vt.prototype
          ),
          v()(
            vt.prototype,
            "getPropsListByType",
            [wt.a],
            Object.getOwnPropertyDescriptor(vt.prototype, "getPropsListByType"),
            vt.prototype
          ),
          v()(
            vt.prototype,
            "getGiftListByRoom",
            [wt.a],
            Object.getOwnPropertyDescriptor(vt.prototype, "getGiftListByRoom"),
            vt.prototype
          ),
          v()(
            vt.prototype,
            "getGiftListByType",
            [wt.a],
            Object.getOwnPropertyDescriptor(vt.prototype, "getGiftListByType"),
            vt.prototype
          ),
          vt),
        Ot = Object(m.l)();
      e.i = new It({ mid: Ot, version: 7 });
    },
    okpa: function (t, e, n) {
      t.exports = n.p + "images/bg2.abb9d1ad0e6f4a85a86ef49658d4def1.png";
    },
    qxPZ: function (t, e, n) {
      "use strict";
      var r = n("f2qI"),
        i = n.n(r),
        o = n("rIiI"),
        a = n.n(o),
        s = n("58BP"),
        c = n.n(s),
        u = n("cQwn"),
        l = n.n(u),
        f = n("b3NQ"),
        h = n("mMZ6"),
        p = n("Wntp"),
        d = n("L7xG"),
        _ = n("5yvJ"),
        v = n("zoiq"),
        m = n("KFtC"),
        g = ["baseURL"],
        y = ["config"];
      function R(t, e) {
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
            ? R(Object(n), !0).forEach(function (e) {
                l()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var w = new v.a(),
        E = new h.b({ prefix: "http" }),
        C = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            a()(this, t),
              l()(this, "baseURL", ""),
              l()(this, "prefix", ""),
              l()(this, "version", ""),
              (this.udbVersion = d.b.get(d.a.VERSION)),
              (this.udbBizToken = d.b.get(d.a.BIZ_TOKEN)),
              (this.udbUserId = d.b.get(d.a.UDB_USER_ID)),
              (this.userId = d.b.get(d.a.USER_ID)),
              (this.deviceId = Object(_.a)()),
              (this.nickname = d.b.get(d.a.USER_NAME)),
              (this.netType = Object(p.a)()),
              e && void 0 !== e.baseURL && (this.baseURL = e.baseURL),
              !e ||
                (void 0 === e.moduleName && void 0 === e.prefix) ||
                (this.prefix = e.moduleName || e.prefix);
          }
          return (
            c()(t, [
              {
                key: "countryCode",
                get: function () {
                  return Object(m.g)();
                },
              },
              {
                key: "lang",
                get: function () {
                  return Object(m.k)();
                },
              },
              {
                key: "clang",
                get: function () {
                  return Object(m.f)();
                },
              },
              {
                key: "cCountryCode",
                get: function () {
                  return Object(m.d)();
                },
              },
              {
                key: "fetch",
                value: function (t, e) {
                  var n = e || {},
                    r = n.baseURL,
                    o = i()(n, g);
                  return Object(f.l)(
                    b(
                      {
                        url: t,
                        baseURL: r || this.baseURL,
                        beforeRequest: function (t) {
                          w.metricReportBeforeRequest(t),
                            E.info(
                              "req",
                              t.url || t.pathname,
                              t.queryParams,
                              t.data
                            );
                        },
                        afterUnpack: function (t, e) {
                          w.updateRequestConfig(t, "responseTs", Date.now()),
                            w.updateRequestConfig(t, "status", e);
                        },
                        afterResponse: function (t, e, n) {
                          w.metricReportAfterResponse(t, e),
                            E.success(
                              "rsp"
                                .concat(
                                  null !== t && void 0 !== t && t.retryCount
                                    ? " retryCount: ".concat(t.retryCount)
                                    : ""
                                )
                                .concat(
                                  null !== t && void 0 !== t && t.responseFrom
                                    ? " responseFrom: ".concat(t.responseFrom)
                                    : ""
                                ),
                              (null === t || void 0 === t ? void 0 : t.url) ||
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.pathname),
                              null === e || void 0 === e ? void 0 : e.code,
                              null === n || void 0 === n ? void 0 : n.data
                            );
                        },
                        onError: function (t) {
                          (e &&
                            e.noReportCode &&
                            e.noReportCode.includes(
                              null === t || void 0 === t ? void 0 : t.code
                            )) ||
                            w.reportError(t);
                        },
                      },
                      o
                    )
                  );
                },
              },
              {
                key: "raceFetch",
                value: function (t, e) {
                  return this.fetch(
                    "",
                    b(
                      {
                        adapter: f.k,
                        fetchArray: t,
                        transformResponse: [
                          function (t, e) {
                            var n = t || {},
                              r = n.config,
                              o = i()(n, y),
                              a = e || {},
                              s = a.reportResult,
                              c = a.tag;
                            return Promise.resolve(
                              b(
                                {
                                  config: b(
                                    b({}, r),
                                    {},
                                    { reportResult: s, tag: c }
                                  ),
                                },
                                o
                              )
                            );
                          },
                        ],
                        transformError: [
                          function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {},
                              n = e.reportResult,
                              r = e.tag;
                            return (
                              t.config &&
                                (t.config = b(
                                  b({}, t.config),
                                  {},
                                  { reportResult: n, tag: r }
                                )),
                              t
                            );
                          },
                        ],
                      },
                      e
                    )
                  );
                },
              },
              {
                key: "buildUri",
                value: function (t, e) {
                  var n = e || {},
                    r = n.prefix,
                    i = void 0 === r ? this.prefix : r,
                    o = n.version;
                  return [i, void 0 === o ? this.version : o, t]
                    .filter(function (t) {
                      return "string" === typeof t && "" !== t;
                    })
                    .join("/");
                },
              },
            ]),
            t
          );
        })();
      e.a = C;
    },
    "r0/O": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n("YQsQ"),
        i = n.n(r);
      function o(t) {
        if ("function" !== typeof t)
          throw Error("first argument must be a function!");
        return function () {
          for (
            var e = t._store, n = arguments.length, r = new Array(n), o = 0;
            o < n;
            o++
          )
            r[o] = arguments[o];
          var a = r[0];
          if (
            "object" === i()(a) &&
            Object.prototype.hasOwnProperty.call(a, "id")
          )
            a = a.id;
          else if ("object" === i()(a)) return t.apply(this, r);
          if (e && a in e) return e[a];
          var s = t.apply(this, r);
          return (t._store = e || Object.create(null)), (t._store[a] = s), s;
        };
      }
    },
    rRvS: function (t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == n.call(t);
        };
    },
    sJQa: function (t, e, n) {
      "use strict";
      var r = n("8Vek").Buffer,
        i =
          r.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(t) {
        var e;
        switch (
          ((this.encoding = (function (t) {
            var e = (function (t) {
              if (!t) return "utf8";
              for (var e; ; )
                switch (t) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t;
                  default:
                    if (e) return;
                    (t = ("" + t).toLowerCase()), (e = !0);
                }
            })(t);
            if ("string" !== typeof e && (r.isEncoding === i || !i(t)))
              throw new Error("Unknown encoding: " + t);
            return e || t;
          })(t)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = c), (this.end = u), (e = 4);
            break;
          case "utf8":
            (this.fillLast = s), (e = 4);
            break;
          case "base64":
            (this.text = l), (this.end = f), (e = 3);
            break;
          default:
            return (this.write = h), void (this.end = p);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = r.allocUnsafe(e));
      }
      function a(t) {
        return t <= 127
          ? 0
          : t >> 5 === 6
          ? 2
          : t >> 4 === 14
          ? 3
          : t >> 3 === 30
          ? 4
          : t >> 6 === 2
          ? -1
          : -2;
      }
      function s(t) {
        var e = this.lastTotal - this.lastNeed,
          n = (function (t, e, n) {
            if (128 !== (192 & e[0])) return (t.lastNeed = 0), "�";
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 !== (192 & e[1])) return (t.lastNeed = 1), "�";
              if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2]))
                return (t.lastNeed = 2), "�";
            }
          })(this, t);
        return void 0 !== n
          ? n
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length));
      }
      function c(t, e) {
        if ((t.length - e) % 2 === 0) {
          var n = t.toString("utf16le", e);
          if (n) {
            var r = n.charCodeAt(n.length - 1);
            if (r >= 55296 && r <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                n.slice(0, -1)
              );
          }
          return n;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", e, t.length - 1)
        );
      }
      function u(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString("utf16le", 0, n);
        }
        return e;
      }
      function l(t, e) {
        var n = (t.length - e) % 3;
        return 0 === n
          ? t.toString("base64", e)
          : ((this.lastNeed = 3 - n),
            (this.lastTotal = 3),
            1 === n
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", e, t.length - n));
      }
      function f(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : e;
      }
      function h(t) {
        return t.toString(this.encoding);
      }
      function p(t) {
        return t && t.length ? this.write(t) : "";
      }
      (e.StringDecoder = o),
        (o.prototype.write = function (t) {
          if (0 === t.length) return "";
          var e, n;
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            (n = this.lastNeed), (this.lastNeed = 0);
          } else n = 0;
          return n < t.length
            ? e
              ? e + this.text(t, n)
              : this.text(t, n)
            : e || "";
        }),
        (o.prototype.end = function (t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed ? e + "�" : e;
        }),
        (o.prototype.text = function (t, e) {
          var n = (function (t, e, n) {
            var r = e.length - 1;
            if (r < n) return 0;
            var i = a(e[r]);
            if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
            if (--r < n || -2 === i) return 0;
            if ((i = a(e[r])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
            if (--r < n || -2 === i) return 0;
            if ((i = a(e[r])) >= 0)
              return i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i;
            return 0;
          })(this, t, e);
          if (!this.lastNeed) return t.toString("utf8", e);
          this.lastTotal = n;
          var r = t.length - (n - this.lastNeed);
          return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r);
        }),
        (o.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    "t/Ns": function (t, e, n) {
      t.exports = n("4KFe")(72);
    },
    tJMH: function (t, e, n) {
      "use strict";
      (function (e, r) {
        var i;
        (t.exports = T), (T.ReadableState = C);
        n("CbEt").EventEmitter;
        var o = function (t, e) {
            return t.listeners(e).length;
          },
          a = n("fCPl"),
          s = n("WvPa").Buffer,
          c = e.Uint8Array || function () {};
        var u,
          l = n(0);
        u = l && l.debuglog ? l.debuglog("stream") : function () {};
        var f,
          h,
          p,
          d = n("anwY"),
          _ = n("HNdP"),
          v = n("oY5E").getHighWaterMark,
          m = n("7PSS").codes,
          g = m.ERR_INVALID_ARG_TYPE,
          y = m.ERR_STREAM_PUSH_AFTER_EOF,
          R = m.ERR_METHOD_NOT_IMPLEMENTED,
          b = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        n("dBkQ")(T, a);
        var w = _.errorOrDestroy,
          E = ["error", "close", "destroy", "pause", "resume"];
        function C(t, e, r) {
          (i = i || n("AeNx")),
            (t = t || {}),
            "boolean" !== typeof r && (r = e instanceof i),
            (this.objectMode = !!t.objectMode),
            r && (this.objectMode = this.objectMode || !!t.readableObjectMode),
            (this.highWaterMark = v(this, t, "readableHighWaterMark", r)),
            (this.buffer = new d()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (f || (f = n("sJQa").StringDecoder),
              (this.decoder = new f(t.encoding)),
              (this.encoding = t.encoding));
        }
        function T(t) {
          if (((i = i || n("AeNx")), !(this instanceof T))) return new T(t);
          var e = this instanceof i;
          (this._readableState = new C(t, this, e)),
            (this.readable = !0),
            t &&
              ("function" === typeof t.read && (this._read = t.read),
              "function" === typeof t.destroy && (this._destroy = t.destroy)),
            a.call(this);
        }
        function S(t, e, n, r, i) {
          u("readableAddChunk", e);
          var o,
            a = t._readableState;
          if (null === e)
            (a.reading = !1),
              (function (t, e) {
                if ((u("onEofChunk"), e.ended)) return;
                if (e.decoder) {
                  var n = e.decoder.end();
                  n &&
                    n.length &&
                    (e.buffer.push(n),
                    (e.length += e.objectMode ? 1 : n.length));
                }
                (e.ended = !0),
                  e.sync
                    ? P(t)
                    : ((e.needReadable = !1),
                      e.emittedReadable || ((e.emittedReadable = !0), k(t)));
              })(t, a);
          else if (
            (i ||
              (o = (function (t, e) {
                var n;
                (r = e),
                  s.isBuffer(r) ||
                    r instanceof c ||
                    "string" === typeof e ||
                    void 0 === e ||
                    t.objectMode ||
                    (n = new g("chunk", ["string", "Buffer", "Uint8Array"], e));
                var r;
                return n;
              })(a, e)),
            o)
          )
            w(t, o);
          else if (a.objectMode || (e && e.length > 0))
            if (
              ("string" === typeof e ||
                a.objectMode ||
                Object.getPrototypeOf(e) === s.prototype ||
                (e = (function (t) {
                  return s.from(t);
                })(e)),
              r)
            )
              a.endEmitted ? w(t, new b()) : I(t, a, e, !0);
            else if (a.ended) w(t, new y());
            else {
              if (a.destroyed) return !1;
              (a.reading = !1),
                a.decoder && !n
                  ? ((e = a.decoder.write(e)),
                    a.objectMode || 0 !== e.length ? I(t, a, e, !1) : A(t, a))
                  : I(t, a, e, !1);
            }
          else r || ((a.reading = !1), A(t, a));
          return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
        }
        function I(t, e, n, r) {
          e.flowing && 0 === e.length && !e.sync
            ? ((e.awaitDrain = 0), t.emit("data", n))
            : ((e.length += e.objectMode ? 1 : n.length),
              r ? e.buffer.unshift(n) : e.buffer.push(n),
              e.needReadable && P(t)),
            A(t, e);
        }
        Object.defineProperty(T.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (t) {
            this._readableState && (this._readableState.destroyed = t);
          },
        }),
          (T.prototype.destroy = _.destroy),
          (T.prototype._undestroy = _.undestroy),
          (T.prototype._destroy = function (t, e) {
            e(t);
          }),
          (T.prototype.push = function (t, e) {
            var n,
              r = this._readableState;
            return (
              r.objectMode
                ? (n = !0)
                : "string" === typeof t &&
                  ((e = e || r.defaultEncoding) !== r.encoding &&
                    ((t = s.from(t, e)), (e = "")),
                  (n = !0)),
              S(this, t, e, !1, n)
            );
          }),
          (T.prototype.unshift = function (t) {
            return S(this, t, null, !0, !1);
          }),
          (T.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (T.prototype.setEncoding = function (t) {
            f || (f = n("sJQa").StringDecoder);
            var e = new f(t);
            (this._readableState.decoder = e),
              (this._readableState.encoding =
                this._readableState.decoder.encoding);
            for (var r = this._readableState.buffer.head, i = ""; null !== r; )
              (i += e.write(r.data)), (r = r.next);
            return (
              this._readableState.buffer.clear(),
              "" !== i && this._readableState.buffer.push(i),
              (this._readableState.length = i.length),
              this
            );
          });
        var O = 1073741824;
        function M(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
            ? 1
            : t !== t
            ? e.flowing && e.length
              ? e.buffer.head.data.length
              : e.length
            : (t > e.highWaterMark &&
                (e.highWaterMark = (function (t) {
                  return (
                    t >= O
                      ? (t = O)
                      : (t--,
                        (t |= t >>> 1),
                        (t |= t >>> 2),
                        (t |= t >>> 4),
                        (t |= t >>> 8),
                        (t |= t >>> 16),
                        t++),
                    t
                  );
                })(t)),
              t <= e.length
                ? t
                : e.ended
                ? e.length
                : ((e.needReadable = !0), 0));
        }
        function P(t) {
          var e = t._readableState;
          u("emitReadable", e.needReadable, e.emittedReadable),
            (e.needReadable = !1),
            e.emittedReadable ||
              (u("emitReadable", e.flowing),
              (e.emittedReadable = !0),
              r.nextTick(k, t));
        }
        function k(t) {
          var e = t._readableState;
          u("emitReadable_", e.destroyed, e.length, e.ended),
            e.destroyed ||
              (!e.length && !e.ended) ||
              (t.emit("readable"), (e.emittedReadable = !1)),
            (e.needReadable =
              !e.flowing && !e.ended && e.length <= e.highWaterMark),
            B(t);
        }
        function A(t, e) {
          e.readingMore || ((e.readingMore = !0), r.nextTick(N, t, e));
        }
        function N(t, e) {
          for (
            ;
            !e.reading &&
            !e.ended &&
            (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

          ) {
            var n = e.length;
            if ((u("maybeReadMore read 0"), t.read(0), n === e.length)) break;
          }
          e.readingMore = !1;
        }
        function L(t) {
          var e = t._readableState;
          (e.readableListening = t.listenerCount("readable") > 0),
            e.resumeScheduled && !e.paused
              ? (e.flowing = !0)
              : t.listenerCount("data") > 0 && t.resume();
        }
        function x(t) {
          u("readable nexttick read 0"), t.read(0);
        }
        function D(t, e) {
          u("resume", e.reading),
            e.reading || t.read(0),
            (e.resumeScheduled = !1),
            t.emit("resume"),
            B(t),
            e.flowing && !e.reading && t.read(0);
        }
        function B(t) {
          var e = t._readableState;
          for (u("flow", e.flowing); e.flowing && null !== t.read(); );
        }
        function G(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (n = e.buffer.shift())
                : !t || t >= e.length
                ? ((n = e.decoder
                    ? e.buffer.join("")
                    : 1 === e.buffer.length
                    ? e.buffer.first()
                    : e.buffer.concat(e.length)),
                  e.buffer.clear())
                : (n = e.buffer.consume(t, e.decoder)),
              n);
          var n;
        }
        function U(t) {
          var e = t._readableState;
          u("endReadable", e.endEmitted),
            e.endEmitted || ((e.ended = !0), r.nextTick(j, e, t));
        }
        function j(t, e) {
          if (
            (u("endReadableNT", t.endEmitted, t.length),
            !t.endEmitted &&
              0 === t.length &&
              ((t.endEmitted = !0),
              (e.readable = !1),
              e.emit("end"),
              t.autoDestroy))
          ) {
            var n = e._writableState;
            (!n || (n.autoDestroy && n.finished)) && e.destroy();
          }
        }
        function F(t, e) {
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        }
        (T.prototype.read = function (t) {
          u("read", t), (t = parseInt(t, 10));
          var e = this._readableState,
            n = t;
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              ((0 !== e.highWaterMark
                ? e.length >= e.highWaterMark
                : e.length > 0) ||
                e.ended))
          )
            return (
              u("read: emitReadable", e.length, e.ended),
              0 === e.length && e.ended ? U(this) : P(this),
              null
            );
          if (0 === (t = M(t, e)) && e.ended)
            return 0 === e.length && U(this), null;
          var r,
            i = e.needReadable;
          return (
            u("need readable", i),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              u("length less than watermark", (i = !0)),
            e.ended || e.reading
              ? u("reading or ended", (i = !1))
              : i &&
                (u("do read"),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = M(n, e))),
            null === (r = t > 0 ? G(t, e) : null)
              ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
              : ((e.length -= t), (e.awaitDrain = 0)),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), n !== t && e.ended && U(this)),
            null !== r && this.emit("data", r),
            r
          );
        }),
          (T.prototype._read = function (t) {
            w(this, new R("_read()"));
          }),
          (T.prototype.pipe = function (t, e) {
            var n = this,
              i = this._readableState;
            switch (i.pipesCount) {
              case 0:
                i.pipes = t;
                break;
              case 1:
                i.pipes = [i.pipes, t];
                break;
              default:
                i.pipes.push(t);
            }
            (i.pipesCount += 1), u("pipe count=%d opts=%j", i.pipesCount, e);
            var a =
              (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? c : v;
            function s(e, r) {
              u("onunpipe"),
                e === n &&
                  r &&
                  !1 === r.hasUnpiped &&
                  ((r.hasUnpiped = !0),
                  u("cleanup"),
                  t.removeListener("close", d),
                  t.removeListener("finish", _),
                  t.removeListener("drain", l),
                  t.removeListener("error", p),
                  t.removeListener("unpipe", s),
                  n.removeListener("end", c),
                  n.removeListener("end", v),
                  n.removeListener("data", h),
                  (f = !0),
                  !i.awaitDrain ||
                    (t._writableState && !t._writableState.needDrain) ||
                    l());
            }
            function c() {
              u("onend"), t.end();
            }
            i.endEmitted ? r.nextTick(a) : n.once("end", a), t.on("unpipe", s);
            var l = (function (t) {
              return function () {
                var e = t._readableState;
                u("pipeOnDrain", e.awaitDrain),
                  e.awaitDrain && e.awaitDrain--,
                  0 === e.awaitDrain &&
                    o(t, "data") &&
                    ((e.flowing = !0), B(t));
              };
            })(n);
            t.on("drain", l);
            var f = !1;
            function h(e) {
              u("ondata");
              var r = t.write(e);
              u("dest.write", r),
                !1 === r &&
                  (((1 === i.pipesCount && i.pipes === t) ||
                    (i.pipesCount > 1 && -1 !== F(i.pipes, t))) &&
                    !f &&
                    (u("false write response, pause", i.awaitDrain),
                    i.awaitDrain++),
                  n.pause());
            }
            function p(e) {
              u("onerror", e),
                v(),
                t.removeListener("error", p),
                0 === o(t, "error") && w(t, e);
            }
            function d() {
              t.removeListener("finish", _), v();
            }
            function _() {
              u("onfinish"), t.removeListener("close", d), v();
            }
            function v() {
              u("unpipe"), n.unpipe(t);
            }
            return (
              n.on("data", h),
              (function (t, e, n) {
                if ("function" === typeof t.prependListener)
                  return t.prependListener(e, n);
                t._events && t._events[e]
                  ? Array.isArray(t._events[e])
                    ? t._events[e].unshift(n)
                    : (t._events[e] = [n, t._events[e]])
                  : t.on(e, n);
              })(t, "error", p),
              t.once("close", d),
              t.once("finish", _),
              t.emit("pipe", n),
              i.flowing || (u("pipe resume"), n.resume()),
              t
            );
          }),
          (T.prototype.unpipe = function (t) {
            var e = this._readableState,
              n = { hasUnpiped: !1 };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount)
              return (
                (t && t !== e.pipes) ||
                  (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit("unpipe", this, n)),
                this
              );
            if (!t) {
              var r = e.pipes,
                i = e.pipesCount;
              (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
              for (var o = 0; o < i; o++)
                r[o].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var a = F(e.pipes, t);
            return (
              -1 === a ||
                (e.pipes.splice(a, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit("unpipe", this, n)),
              this
            );
          }),
          (T.prototype.on = function (t, e) {
            var n = a.prototype.on.call(this, t, e),
              i = this._readableState;
            return (
              "data" === t
                ? ((i.readableListening = this.listenerCount("readable") > 0),
                  !1 !== i.flowing && this.resume())
                : "readable" === t &&
                  (i.endEmitted ||
                    i.readableListening ||
                    ((i.readableListening = i.needReadable = !0),
                    (i.flowing = !1),
                    (i.emittedReadable = !1),
                    u("on readable", i.length, i.reading),
                    i.length ? P(this) : i.reading || r.nextTick(x, this))),
              n
            );
          }),
          (T.prototype.addListener = T.prototype.on),
          (T.prototype.removeListener = function (t, e) {
            var n = a.prototype.removeListener.call(this, t, e);
            return "readable" === t && r.nextTick(L, this), n;
          }),
          (T.prototype.removeAllListeners = function (t) {
            var e = a.prototype.removeAllListeners.apply(this, arguments);
            return ("readable" !== t && void 0 !== t) || r.nextTick(L, this), e;
          }),
          (T.prototype.resume = function () {
            var t = this._readableState;
            return (
              t.flowing ||
                (u("resume"),
                (t.flowing = !t.readableListening),
                (function (t, e) {
                  e.resumeScheduled ||
                    ((e.resumeScheduled = !0), r.nextTick(D, t, e));
                })(this, t)),
              (t.paused = !1),
              this
            );
          }),
          (T.prototype.pause = function () {
            return (
              u("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (u("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (T.prototype.wrap = function (t) {
            var e = this,
              n = this._readableState,
              r = !1;
            for (var i in (t.on("end", function () {
              if ((u("wrapped end"), n.decoder && !n.ended)) {
                var t = n.decoder.end();
                t && t.length && e.push(t);
              }
              e.push(null);
            }),
            t.on("data", function (i) {
              (u("wrapped data"),
              n.decoder && (i = n.decoder.write(i)),
              !n.objectMode || (null !== i && void 0 !== i)) &&
                (n.objectMode || (i && i.length)) &&
                (e.push(i) || ((r = !0), t.pause()));
            }),
            t))
              void 0 === this[i] &&
                "function" === typeof t[i] &&
                (this[i] = (function (e) {
                  return function () {
                    return t[e].apply(t, arguments);
                  };
                })(i));
            for (var o = 0; o < E.length; o++)
              t.on(E[o], this.emit.bind(this, E[o]));
            return (
              (this._read = function (e) {
                u("wrapped _read", e), r && ((r = !1), t.resume());
              }),
              this
            );
          }),
          "function" === typeof Symbol &&
            (T.prototype[Symbol.asyncIterator] = function () {
              return void 0 === h && (h = n("j3Dz")), h(this);
            }),
          Object.defineProperty(T.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(T.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(T.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (t) {
              this._readableState && (this._readableState.flowing = t);
            },
          }),
          (T._fromList = G),
          Object.defineProperty(T.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          "function" === typeof Symbol &&
            (T.from = function (t, e) {
              return void 0 === p && (p = n("ybye")), p(T, t, e);
            });
      }.call(this, n("AeT1"), n("vphx")));
    },
    tQhV: function (t, e, n) {
      t.exports = n("4KFe")(32);
    },
    tdpk: function (t, e, n) {
      "use strict";
      var r = n("lQGm"),
        i = n("KFtC"),
        o = n("nimoua"),
        a = n.n(o);
      r.a.init(),
        (function () {
          var t,
            e =
              (null === (t = Object(i.I)()) || void 0 === t
                ? void 0
                : t.params) || {},
            n = e.c,
            o = e.af_sub1,
            s = e.af_sub2,
            c = e.af_sub3,
            u = e.af_sub4,
            l = e.af_sub5;
          if ("common_share" === n) {
            var f = {
              from: o,
              share_content: +s,
              share_id: +c,
              share_platform: u,
            };
            a.a.isWap && (f.wap_mid = l || "null"),
              r.a.formatAndSend(
                "sys/show/heartbeat_from_commonshare",
                "系统曝光来自分享的访问",
                f
              );
          }
        })(),
        (e.a = r.a);
    },
    trWP: function (t, e, n) {
      "use strict";
      t.exports = l;
      var r = n("7PSS").codes,
        i = r.ERR_METHOD_NOT_IMPLEMENTED,
        o = r.ERR_MULTIPLE_CALLBACK,
        a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = r.ERR_TRANSFORM_WITH_LENGTH_0,
        c = n("AeNx");
      function u(t, e) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (null === r) return this.emit("error", new o());
        (n.writechunk = null),
          (n.writecb = null),
          null != e && this.push(e),
          r(t);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function l(t) {
        if (!(this instanceof l)) return new l(t);
        c.call(this, t),
          (this._transformState = {
            afterTransform: u.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" === typeof t.transform &&
              (this._transform = t.transform),
            "function" === typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", f);
      }
      function f() {
        var t = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? h(this, null, null)
          : this._flush(function (e, n) {
              h(t, e, n);
            });
      }
      function h(t, e, n) {
        if (e) return t.emit("error", e);
        if ((null != n && t.push(n), t._writableState.length)) throw new s();
        if (t._transformState.transforming) throw new a();
        return t.push(null);
      }
      n("dBkQ")(l, c),
        (l.prototype.push = function (t, e) {
          return (
            (this._transformState.needTransform = !1),
            c.prototype.push.call(this, t, e)
          );
        }),
        (l.prototype._transform = function (t, e, n) {
          n(new i("_transform()"));
        }),
        (l.prototype._write = function (t, e, n) {
          var r = this._transformState;
          if (
            ((r.writecb = n),
            (r.writechunk = t),
            (r.writeencoding = e),
            !r.transforming)
          ) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (l.prototype._read = function (t) {
          var e = this._transformState;
          null === e.writechunk || e.transforming
            ? (e.needTransform = !0)
            : ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform));
        }),
        (l.prototype._destroy = function (t, e) {
          c.prototype._destroy.call(this, t, function (t) {
            e(t);
          });
        });
    },
    uTDL: function (t, e, n) {
      t.exports = n("4KFe")(71);
    },
    uZ7N: function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r = n("ZTQi"),
        i = n.n(r),
        o = n("q4i/"),
        a = n.n(o),
        s = n("f2qI"),
        c = n.n(s),
        u = n("rIiI"),
        l = n.n(u),
        f = n("58BP"),
        h = n.n(f),
        p = n("Ptek"),
        d = n.n(p),
        _ = n("gy9q"),
        v = n.n(_),
        m = n("7DFi"),
        g = n.n(m),
        y = n("TJEx"),
        R = n.n(y),
        b = n("cQwn"),
        w = n.n(b),
        E = n("avFb"),
        C = n("kPK6"),
        T = n.n(C),
        S = n("7Qmc"),
        I = n("r0/O"),
        O = n("xwl0"),
        M = [
          "prefixCls",
          "src",
          "className",
          "onClick",
          "imgStyle",
          "isLazyload",
          "width",
          "height",
          "radius",
          "webp",
          "cover",
          "alt",
          "onError",
          "AI",
          "withoutEnlargement",
          "responseWidth",
          "useResponse",
          "blur",
          "brightness",
          "saturate",
          "skipOriginWebp",
          "draggable",
          "objectFit",
          "w",
          "h",
        ];
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
      function k(t) {
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
            r = R()(t);
          if (e) {
            var i = R()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return g()(this, n);
        };
      }
      var N,
        L = "srcSet",
        x = function (t, e) {
          return t
            ? "".concat(t ? "data-" : "").concat(e.toLocaleLowerCase())
            : e;
        },
        D = 999,
        B =
          ((N = 2),
          Object(I.a)(function (t, e) {
            var n = e.width,
              r = e.height;
            if (!n && !r) return { width: 0, height: 0 };
            var i = n * N,
              o = r * N,
              a = i,
              s = o;
            return (
              i > D && !r
                ? (a = D)
                : o > D && !n
                ? (s = D)
                : n &&
                  r &&
                  (i > D || o > D) &&
                  (n === r
                    ? (a = s = D)
                    : n > r
                    ? ((a = D), (s = D / (n / r)))
                    : ((s = D), (a = (n / r) * D))),
              { width: a, height: s }
            );
          })),
        G = !1;
      if ("undefined" !== typeof window) {
        var U,
          j,
          F =
            null === (U = window) ||
            void 0 === U ||
            null === (j = U.navigator) ||
            void 0 === j
              ? void 0
              : j.connection,
          V = function () {
            var t = F || {},
              e = t.effectiveType,
              n = t.saveData;
            G = !("4g" === e && !n);
          };
        V(),
          F &&
            F.addEventListener("change", function () {
              V();
            });
      }
      var Y = (function (t) {
        v()(n, t);
        var e = A(n);
        function n(t) {
          var r;
          return (
            l()(this, n),
            (r = e.call(this, t)),
            w()(
              d()(r),
              "_checkWebp",
              Object(S.a)(function (t) {
                return /\.webp([^/]*)?$/.test(t);
              })
            ),
            w()(d()(r), "handleImgLoaded", function (t) {
              var e = r.props.onLoad;
              "function" === typeof e && e(t);
            }),
            w()(d()(r), "handleImgLoadError", function (t) {
              var e = r.props,
                n = e.cover,
                i = e.onError,
                o = t.target.currentSrc || t.target.src;
              if (
                (0 === n.indexOf("//")
                  ? (n = "".concat(window.location.protocol).concat(n))
                  : -1 === n.indexOf("https://") &&
                    (n = ""
                      .concat(window.location.origin)
                      .concat("/".concat(n).replace("//", "/"))),
                n && o !== n && o)
              ) {
                (t.target.src = n), (t.target.srcset = n);
                for (var a = t.target; a.previousElementSibling; )
                  (a.previousElementSibling.srcset = n),
                    (a = a.previousElementSibling);
                "function" === typeof i && i(t);
              }
            }),
            (r.state = {}),
            (r.useResponse = !1),
            r
          );
        }
        return (
          h()(n, [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.prefixCls,
                  n = t.src,
                  r = t.className,
                  o = t.onClick,
                  s = t.imgStyle,
                  u = t.isLazyload,
                  l = t.width,
                  f = t.height,
                  h = t.radius,
                  p = t.webp,
                  d = t.cover,
                  _ = t.alt,
                  v = (t.onError, t.AI),
                  m = t.withoutEnlargement,
                  g = t.responseWidth,
                  y = t.useResponse,
                  R = t.blur,
                  b = t.brightness,
                  w = t.saturate,
                  C = t.skipOriginWebp,
                  S = t.draggable,
                  I = t.objectFit,
                  P = t.w,
                  A = t.h,
                  N = c()(t, M),
                  D = T()(e, r),
                  U = this._checkWebp(n),
                  j = [],
                  F = {
                    AI: v,
                    radius: h,
                    blur: R,
                    brightness: b,
                    saturate: w,
                    withoutEnlargement: m,
                  },
                  V = B("".concat(l, "_").concat(f), { width: l, height: f }),
                  Y = V.width,
                  W = V.height;
                l || f
                  ? (j.push({ width: Y, height: W, transform: U ? "png" : "" }),
                    j.push({ width: Y, height: W, transform: "webp" }))
                  : (j.push({ transform: U ? "png" : "" }),
                    j.push({ transform: "webp" })),
                  (y || G) &&
                    (l || f) &&
                    (j.push({ width: l, height: f, transform: U ? "png" : "" }),
                    j.push({ width: l, height: f, transform: "webp" }));
                var H = [];
                g &&
                  Array.isArray(g) &&
                  g.forEach(function (t) {
                    var e = t.w || 0,
                      r = t.h || 0,
                      i = B("".concat(e, "_").concat(r), {
                        width: e || 0,
                        height: r || 0,
                      }),
                      o = i.width,
                      s = i.height,
                      c =
                        Object(O.b)(
                          n,
                          [
                            { width: o, height: s, transform: "webp" },
                            { width: o, height: s, transform: "" },
                          ],
                          F
                        ) || [],
                      u = a()(c, 2),
                      l = u[0],
                      f = u[1],
                      h = k(k({}, t), {}, { src2w: l, src2o: f });
                    if (y || G) {
                      var p =
                          Object(O.b)(
                            n,
                            [
                              { width: e, height: r, transform: "webp" },
                              { width: e, height: r, transform: "" },
                            ],
                            F
                          ) || [],
                        d = a()(p, 2),
                        _ = d[0],
                        v = d[1];
                      (h.src1w = _), (h.src1o = v), _ !== l && H.push(h);
                    } else H.push(h);
                  });
                var K = Object(O.b)(n, j, F) || [],
                  z = a()(K, 4),
                  X = z[0],
                  q = z[1],
                  Q = z[2],
                  J = z[3];
                C && U && (q = J = n);
                var Z = this._checkWebp(q),
                  $ = {},
                  tt = {};
                if (n) {
                  var et = x(u, L);
                  ($[x(u, "src")] = X),
                    (tt[et] = q),
                    Q &&
                      X !== Q &&
                      (($[et] = "".concat(Q, " 1x, ").concat(X, " 2x")),
                      (tt[et] = "".concat(J, " 1x, ").concat(q, " 2x")));
                }
                void 0 !== S && ($.draggable = S);
                var nt = d ? { src: d } : {},
                  rt = k(
                    k(k(k({ width: P, height: A }, s), nt), $),
                    {},
                    {
                      onError: this.handleImgLoadError,
                      onLoad: this.handleImgLoaded,
                      alt: _ || "Nimo TV",
                    }
                  );
                return (
                  void 0 !== I &&
                    (rt.style || (rt.style = {}), (rt.style.objectFit = I)),
                  E.createElement(
                    "span",
                    i()({}, N, { className: D, onClick: o }),
                    E.createElement(
                      "picture",
                      null,
                      H.length
                        ? H.map(function (t, e) {
                            var n = {},
                              r = {},
                              o = x(u, L);
                            return (
                              t.src1w
                                ? ((n[o] = ""
                                    .concat(t.src1w, " 1x, ")
                                    .concat(t.src2w, " 2x")),
                                  (r[o] = ""
                                    .concat(t.src1o, " 1x, ")
                                    .concat(t.src2o, " 2x")))
                                : ((n[o] = "".concat(t.src2w)),
                                  (r[o] = "".concat(t.src2o))),
                              E.createElement(
                                E.Fragment,
                                { key: e },
                                E.createElement(
                                  "source",
                                  i()(
                                    { media: "(min-width:".concat(t.d, "px)") },
                                    n,
                                    { type: "image/webp" }
                                  )
                                ),
                                E.createElement(
                                  "source",
                                  i()(
                                    { media: "(min-width:".concat(t.d, "px)") },
                                    r
                                  )
                                )
                              )
                            );
                          })
                        : null,
                      p && Z
                        ? E.createElement(
                            "source",
                            i()({}, tt, { type: "image/webp" })
                          )
                        : null,
                      E.createElement("img", rt)
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(E.PureComponent);
      w()(Y, "defaultProps", {
        prefixCls: "nimo-image",
        className: "",
        src: "",
        children: "",
        onClick: null,
        imgStyle: null,
        width: 0,
        height: 0,
        isLazyload: !1,
        cover: "",
        AI: !1,
        webp: !0,
        withoutEnlargement: 0,
        responseWidth: !1,
        useResponse: !1,
        radius: 0,
        blur: 0,
        brightness: 0,
        saturate: 0,
        skipOriginWebp: !1,
      }),
        (e.a = Y);
    },
    uoB0: function (t, e, n) {
      t.exports =
        n.p + "images/record-btn.ccb6ec6e2933564dc991c6da0ce6071f.png";
    },
    vARU: function (t, e, n) {
      "use strict";
      var r = n("uZ7N");
      e.a = r.a;
    },
    vQry: function (t, e, n) {
      "use strict";
      var r = n("ZZY+"),
        i = n("vvOr"),
        o = n("Vwta");
      t.exports =
        [].copyWithin ||
        function (t, e) {
          var n = r(this),
            a = o(n.length),
            s = i(t, a),
            c = i(e, a),
            u = arguments.length > 2 ? arguments[2] : void 0,
            l = Math.min((void 0 === u ? a : i(u, a)) - c, a - s),
            f = 1;
          for (
            c < s && s < c + l && ((f = -1), (c += l - 1), (s += l - 1));
            l-- > 0;

          )
            c in n ? (n[s] = n[c]) : delete n[s], (s += f), (c += f);
          return n;
        };
    },
    vVVP: function (t, e, n) {
      "use strict";
      var r = n("ZMLX"),
        i =
          (n("ZxgU"),
          function () {
            this.sResource = "";
          });
      (i.prototype._clone = function () {
        return new r.a.StickerEffect();
      }),
        (i.prototype._write = function (t, e, n) {
          t.writeStruct(e, n);
        }),
        (i.prototype._read = function (t, e, n) {
          return t.readStruct(e, !0, n);
        }),
        (i.prototype.writeTo = function (t) {
          t.writeString(0, this.sResource);
        }),
        (i.prototype.readFrom = function (t) {
          this.sResource = t.readString(0, !1, this.sResource);
        }),
        (r.a.StickerEffect = i);
    },
    voLu: function (t, e, n) {
      "use strict";
      var r = n("mMZ6");
      n.d(e, "b", function () {
        return r.p;
      }),
        n.d(e, "a", function () {
          return r.d;
        }),
        n.d(e, "c", function () {
          return r.q;
        });
    },
    vphx: function (t, e, n) {
      t.exports = n("4KFe")(190);
    },
    vvOr: function (t, e, n) {
      t.exports = n("4KFe")(61);
    },
    w0rY: function (t, e, n) {
      "use strict";
      n("RlNQ");
      var r = n("cQwn"),
        i = n.n(r),
        o = n("f2qI"),
        a = n.n(o),
        s = n("rIiI"),
        c = n.n(s),
        u = n("58BP"),
        l = n.n(u),
        f = n("tWqE"),
        h = n.n(f),
        p = n("gy9q"),
        d = n.n(p),
        _ = n("7DFi"),
        v = n.n(_),
        m = n("TJEx"),
        g = n.n(m),
        y = n("UJcg"),
        R = n("W7YU"),
        b = n("cOjp"),
        w = n("cHZA");
      n.d(e, "b", function () {
        return R.i;
      });
      var E = ["useSignal"];
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
      function T(t) {
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
          return v()(this, n);
        };
      }
      var S = (function (t) {
        d()(n, t);
        var e = T(n);
        function n() {
          return c()(this, n), e.apply(this, arguments);
        }
        return (
          l()(n, [
            {
              key: "fetch",
              value: function (t, e, r, o) {
                var s = o || {},
                  c = s.useSignal,
                  u = void 0 === c ? this.useSignal : c,
                  l = a()(s, E);
                return h()(g()(n.prototype), "fetch", this).call(
                  this,
                  t,
                  e,
                  r,
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? C(Object(n), !0).forEach(function (e) {
                            i()(t, e, n[e]);
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
                  })({ server: u ? y.e.SIGNALING : y.e.TAF, useSignal: u }, l)
                );
              },
            },
            {
              key: "authFetch",
              value: function (t, e, n, r) {
                return this.fetch(t, e, n, r);
              //   return R.i.user.isReady()
              //     ? !0 === R.i.user.isAnonymous
              //       ? (b.b.log(
              //           "%c<chatroom send message> send message error , anonymous can't send",
              //           "color: red"
              //         ),
              //         Promise.reject())
              //       : this.fetch(t, e, n, r)
              //     : Promise.reject();
              },
            },
            {
              key: "setUserId",
              value: function (t, e) {
                Object(R.j)(t, e);
              },
            },
          ]),
          n
        );
      })(w.a);
      e.a = S;
    },
    wc2d: function (t, e, n) {
      "use strict";
      var r = n("8Vek").Buffer,
        i = n("2ufl").Transform;
      function o(t) {
        i.call(this),
          (this._block = r.allocUnsafe(t)),
          (this._blockSize = t),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1);
      }
      n("dBkQ")(o, i),
        (o.prototype._transform = function (t, e, n) {
          var r = null;
          try {
            this.update(t, e);
          } catch (i) {
            r = i;
          }
          n(r);
        }),
        (o.prototype._flush = function (t) {
          var e = null;
          try {
            this.push(this.digest());
          } catch (n) {
            e = n;
          }
          t(e);
        }),
        (o.prototype.update = function (t, e) {
          if (
            ((function (t, e) {
              if (!r.isBuffer(t) && "string" !== typeof t)
                throw new TypeError(e + " must be a string or a buffer");
            })(t, "Data"),
            this._finalized)
          )
            throw new Error("Digest already called");
          r.isBuffer(t) || (t = r.from(t, e));
          for (
            var n = this._block, i = 0;
            this._blockOffset + t.length - i >= this._blockSize;

          ) {
            for (var o = this._blockOffset; o < this._blockSize; )
              n[o++] = t[i++];
            this._update(), (this._blockOffset = 0);
          }
          for (; i < t.length; ) n[this._blockOffset++] = t[i++];
          for (var a = 0, s = 8 * t.length; s > 0; ++a)
            (this._length[a] += s),
              (s = (this._length[a] / 4294967296) | 0) > 0 &&
                (this._length[a] -= 4294967296 * s);
          return this;
        }),
        (o.prototype._update = function () {
          throw new Error("_update is not implemented");
        }),
        (o.prototype.digest = function (t) {
          if (this._finalized) throw new Error("Digest already called");
          this._finalized = !0;
          var e = this._digest();
          void 0 !== t && (e = e.toString(t)),
            this._block.fill(0),
            (this._blockOffset = 0);
          for (var n = 0; n < 4; ++n) this._length[n] = 0;
          return e;
        }),
        (o.prototype._digest = function () {
          throw new Error("_digest is not implemented");
        }),
        (t.exports = o);
    },
    "x+/V": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "b", function () {
          return p;
        });
      var r,
        i,
        o = (function () {
          function t(t) {
            (this.workerURL = t),
              (this._id = 0),
              (this._callbacks = new Map()),
              (this._initError = !1);
          }
          t.caniuseWorker = function () {
            return "function" == typeof Worker;
          };
          var e = t.prototype;
          return (
            (e.initWorker = function () {
              var t = this;
              if (!this._initError && !this.worker && window.Worker) {
                var e = function () {
                  t._initError = !0;
                  var e = new Error("worker init error");
                  t._callbacks.forEach(function (t) {
                    var n = t.failure;
                    if (n)
                      try {
                        n(e);
                      } catch (t) {}
                  }),
                    t.terminate();
                };
                (this._initTimer = setTimeout(e, 3e4)),
                  (this.worker = new Worker(this.workerURL)),
                  (this.worker.onerror = e),
                  (this.worker.onmessage = function (e) {
                    var n = e.data,
                      r = n.error,
                      i = n.video,
                      o = n.id;
                    switch (n.type) {
                      case "inited":
                        t._initTimer &&
                          (clearTimeout(t._initTimer), (t._initTimer = null)),
                          t.worker && (t.worker.onerror = null);
                        break;
                      case "loaded":
                        var a = t._callbacks.get(o);
                        a && (t._callbacks.delete(o), a.success(i));
                        break;
                      case "loaderror":
                        var s = t._callbacks.get(o);
                        s &&
                          (t._callbacks.delete(o),
                          s.failure && (0, s.failure)(new Error(r)));
                    }
                  });
              }
            }),
            (e.terminate = function () {
              (this._callbacks = new Map()),
                this.worker &&
                  ((this.worker.onerror = null),
                  (this.worker.onmessage = null),
                  this.worker.terminate(),
                  (this.worker = null)),
                this._initTimer &&
                  (clearTimeout(this._initTimer), (this._initTimer = null));
            }),
            (e.asyncError = function (t, e) {
              e &&
                Promise.resolve().then(function () {
                  e(new Error(t));
                });
            }),
            (e.load = function (t, e, n) {
              this._id += 1;
              var r = this._id;
              this.initWorker(),
                this._initError
                  ? this.asyncError("worker init error", n)
                  : this.worker
                  ? (this._callbacks.set(r, { success: e, failure: n }),
                    this.worker.postMessage({ type: "load", url: t, id: r }))
                  : this.asyncError("not support web worker", n);
            }),
            t
          );
        })(),
        a = n("diWg"),
        s = n.n(a),
        c = n("cOjp"),
        u = function () {
          return n
            .e("6d1fa")
            .then(n.bind(null, "DPzF"))
            .then(function (t) {
              var e = new (0, t.default)();
              return (i = e), e;
            });
        },
        l = !1,
        f = function () {
          l ||
            ((l = !0),
            !r && o.caniuseWorker() && (r = new o(s.a)).initWorker(),
            r || i || u());
        },
        h = function (t) {
          return f(), !t && r ? r : i || u();
        },
        p = function () {
          if (!l)
            try {
              f();
            } catch (t) {
              setTimeout(function () {
                c.b.error(t);
              }, 0);
            }
        };
    },
    xwl0: function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return f;
      }),
        n.d(e, "a", function () {
          return m;
        }),
        n.d(e, "b", function () {
          return g;
        }),
        n.d(e, "c", function () {
          return y;
        });
      var r = n("cQwn"),
        i = n.n(r),
        o = n("q4i/"),
        a = n.n(o);
      n("ZTQi");
      function s(t, e) {
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
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                i()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function u(t, e) {
        var n =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return l(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return l(t, e);
            })(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (o = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var f = {
        "server-avatar.nimostatic.tv": "t",
        "web-ops.nimostatic.tv": "o",
        "nimo-prod-server-cover.s3.ap-southeast-1.amazonaws.com": "s3-c",
        "server-cover-prod.nimostatic.tv": "c",
        "server-sharepicture.nimostatic.tv": "s",
        "txvid.vod.nimo.tv": "vt",
        "wsvid.vod.nimo.tv": "vw",
        "web-article.nimostatic.tv": "as",
        "article.nimo.tv": "an",
        "amzvid.vod.nimo.tv": "va",
        "web-www.nimostatic.tv": "w",
        "www.nimo.tv": "nw",
        "m.nimo.tv": "nm",
        "msg-pic.nimostatic.tv": "mp",
        "nimo-expression.nimostatic.tv": "ne",
        "vppimage.vod.nimo.tv": "vp",
        "vppimage-vod.nimo.tv": "vpp",
      };
      var h = [1, 2, 3, 4, 5],
        p = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        d = [0, 1],
        _ = new RegExp(
          "^(https?:)?//("
            .concat(
              Object.keys(f)
                .map(function (t) {
                  return t.replace(/\./g, "\\.");
                })
                .join("|"),
              ")/(((\\s|\\S)+).("
            )
            .concat(["jpg", "png", "jpeg", "webp"].join("|"), "))")
        ),
        v = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            r = e || {},
            i = r.width,
            o = r.height,
            s = r.radius,
            c = r.AI,
            u = r.position,
            l = r.fit,
            _ = r.withoutEnlargement,
            v = void 0 === _ ? 0 : _,
            m = r.blur,
            g = r.brightness,
            y = r.saturate,
            R = r.isService,
            b = void 0 !== R && R;
          if (!t) return null;
          var w = a()(t, 7),
            E = w[2],
            C = w[3],
            T = w[6],
            S = [
              i ? "w".concat(i) : "",
              o ? "h".concat(o) : "",
              s > 0 ? "r".concat(s) : "",
              c ? "a1" : "",
              h.includes(l) ? "f".concat(l) : "",
              p.includes(u) ? "p".concat(u) : "",
              d.includes(v) ? "l".concat(v) : "",
              m ? "b".concat(m) : "",
              g ? "mb".concat(g) : "",
              y ? "ms".concat(y) : "",
            ],
            I = S.reduce(function (t, e) {
              return e
                ? ""
                    .concat(t)
                    .concat(t ? "_" : "")
                    .concat(e)
                : t;
            }, "");
          return ""
            .concat(
              b ? "https://img-service.nimo.tv" : "https://img.nimo.tv",
              "/"
            )
            .concat(f[E], "/")
            .concat(C.replace(/ /g, "%20"), "/")
            .concat(I, "/img.")
            .concat(n || T);
        },
        m = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
          if ("string" !== typeof t) return t;
          var r = t.match(_);
          return r ? v(r, e, n) : t;
        },
        g = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          if ("string" !== typeof t) return t;
          var r = t.match(_);
          Array.isArray(e) || (e = [e || {}]);
          var i,
            o = [],
            a = u(e);
          try {
            for (a.s(); !(i = a.n()).done; ) {
              var s = i.value;
              (s = c(c({}, n), s)), o.push(r ? v(r, s, s.transform) : t);
            }
          } catch (l) {
            a.e(l);
          } finally {
            a.f();
          }
          return o.length > 1 ? o : o[0];
        },
        y = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
          return m(t, c(c({}, e), {}, { isService: !0 }), n);
        };
    },
    xyCw: function (t, e, n) {
      t.exports = n("4KFe")(47);
    },
    ybye: function (t, e) {
      t.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    yq2O: function (t, e, n) {
      "use strict";
      var r = n("7PSS").codes.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      t.exports = function t(e, n, o) {
        if ("function" === typeof n) return t(e, null, n);
        n || (n = {}),
          (o = (function (t) {
            var e = !1;
            return function () {
              if (!e) {
                e = !0;
                for (
                  var n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                t.apply(this, r);
              }
            };
          })(o || i));
        var a = n.readable || (!1 !== n.readable && e.readable),
          s = n.writable || (!1 !== n.writable && e.writable),
          c = function () {
            e.writable || l();
          },
          u = e._writableState && e._writableState.finished,
          l = function () {
            (s = !1), (u = !0), a || o.call(e);
          },
          f = e._readableState && e._readableState.endEmitted,
          h = function () {
            (a = !1), (f = !0), s || o.call(e);
          },
          p = function (t) {
            o.call(e, t);
          },
          d = function () {
            var t;
            return a && !f
              ? ((e._readableState && e._readableState.ended) || (t = new r()),
                o.call(e, t))
              : s && !u
              ? ((e._writableState && e._writableState.ended) || (t = new r()),
                o.call(e, t))
              : void 0;
          },
          _ = function () {
            e.req.on("finish", l);
          };
        return (
          !(function (t) {
            return t.setHeader && "function" === typeof t.abort;
          })(e)
            ? s && !e._writableState && (e.on("end", c), e.on("close", c))
            : (e.on("complete", l),
              e.on("abort", d),
              e.req ? _() : e.on("request", _)),
          e.on("end", h),
          e.on("finish", l),
          !1 !== n.error && e.on("error", p),
          e.on("close", d),
          function () {
            e.removeListener("complete", l),
              e.removeListener("abort", d),
              e.removeListener("request", _),
              e.req && e.req.removeListener("finish", l),
              e.removeListener("end", c),
              e.removeListener("close", c),
              e.removeListener("finish", l),
              e.removeListener("end", h),
              e.removeListener("error", p),
              e.removeListener("close", d);
          }
        );
      };
    },
    zGzV: function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return w;
      }),
        n.d(e, "a", function () {
          return y;
        });
      var r = n("KFtC"),
        i = n("p1oI"),
        o = n("U2p0"),
        a = n.n(o),
        s = n("+xEq"),
        c = "3891.5573",
        u = [
          [
            {
              params: {
                groupId: "3071",
                g_trafficAlloc: ["0~9999"],
                salt: "72907319",
                v_trafficAlloc: ["0~4999"],
              },
              oexp: "3891.5572",
            },
            {
              params: {
                groupId: "3071",
                g_trafficAlloc: ["0~9999"],
                salt: "72907319",
                v_trafficAlloc: ["5000~9999"],
              },
              oexp: c,
            },
          ],
        ],
        l = "907.1178",
        f = [
          [
            {
              params: {
                groupId: "821",
                g_trafficAlloc: ["0~9999"],
                salt: "17e14e10",
                v_trafficAlloc: ["0~4999"],
              },
              oexp: "907.1177",
            },
            {
              params: {
                groupId: "821",
                g_trafficAlloc: ["0~9999"],
                salt: "17e14e10",
                v_trafficAlloc: ["5000~9999"],
              },
              oexp: l,
            },
          ],
        ],
        h = "3919.5623",
        p = [
          [
            {
              params: {
                groupId: "3091",
                g_trafficAlloc: ["0~9999"],
                salt: "af98ae98",
                v_trafficAlloc: ["0~4999"],
              },
              oexp: "3919.5622",
            },
            {
              params: {
                groupId: "3091",
                g_trafficAlloc: ["0~9999"],
                salt: "af98ae98",
                v_trafficAlloc: ["5000~9999"],
              },
              oexp: h,
            },
          ],
        ],
        d = "919.1197",
        _ = [
          [
            {
              params: {
                groupId: "831",
                g_trafficAlloc: ["0~9999"],
                salt: "9015575a",
                v_trafficAlloc: ["0~4999"],
              },
              oexp: "919.1196",
            },
            {
              params: {
                groupId: "831",
                g_trafficAlloc: ["0~9999"],
                salt: "9015575a",
                v_trafficAlloc: ["5000~9999"],
              },
              oexp: d,
            },
          ],
        ],
        v = [1939512917502, 2039512636771, 2459511631271, 1599511702867],
        m = [1599511717347],
        g = "true" === s.a.isDebug;
      function y(t) {
        return t && (g ? m : v).indexOf(t) > -1;
      }
      var R = Object(r.l)();
      function b(t) {
        var e = (function (t) {
          return t ? (g ? _ : p) : g ? f : u;
        })(t);
        return new a.a(e, R).config();
      }
      function w(t) {
        var e = Object(i.a)("_sphd");
        if (e) return "1" === e;
        var n = b(t),
          r = (function (t) {
            return t ? (g ? d : h) : g ? l : c;
          })(t);
        return Array.isArray(n) ? n.indexOf(r) > -1 : n === r;
      }
      e.b = b;
    },
  },
]);
