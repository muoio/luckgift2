(window.webpackJsonp = window.webpackJsonp || []).push([
  ["c0c90"],
  {
    "6v+G": function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, "isSvgaUrl", function () {
          return N;
        });
      i("RlNQ");
      var r = i("rIiI"),
        a = i.n(r),
        n = i("58BP"),
        o = i.n(n),
        s = i("Ptek"),
        h = i.n(s),
        c = i("gy9q"),
        l = i.n(c),
        d = i("7DFi"),
        m = i.n(d),
        u = i("TJEx"),
        f = i.n(u),
        _ = i("cQwn"),
        p = i.n(_),
        y = i("avFb"),
        v = i("kPK6"),
        g = i.n(v),
        w = i("vARU"),
        b = i("GKjE"),
        x = i("Ukdx"),
        C = i("x+/V"),
        F = i("7Qmc");
      function A(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
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
          var i,
            r = f()(t);
          if (e) {
            var a = f()(this).constructor;
            i = Reflect.construct(r, arguments, a);
          } else i = r.apply(this, arguments);
          return m()(this, i);
        };
      }
      Object(C.b)();
      var I = (function (t) {
        l()(i, t);
        var e = T(i);
        function i(t) {
          var r;
          return (
            a()(this, i),
            (r = e.call(this, t)),
            p()(h()(r), "container", null),
            p()(h()(r), "player", null),
            p()(
              h()(r),
              "getStyle",
              Object(F.a)(function (t, e, i) {
                return (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? A(Object(i), !0).forEach(function (e) {
                          p()(t, e, i[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(i)
                        )
                      : A(Object(i)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(i, e)
                          );
                        });
                  }
                  return t;
                })({ width: e, height: i }, t);
              })
            ),
            (r.state = { loaded: !0 }),
            (r.saveContainer = function (t) {
              r.container = t;
            }),
            r
          );
        }
        return (
          o()(i, [
            {
              key: "_updateRef",
              value: function (t) {
                var e = this.props.innerRef;
                "function" === typeof e ? e(t) : e && (e.current = t);
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var t = this,
                  e = this.props.src;
                this.container && (this.player = new b.a(this.container)),
                  this.player &&
                    ([
                      "loops",
                      "clearsAfterStop",
                      "fillMode",
                      "resizeOnUpdate",
                      "width",
                      "height",
                    ].forEach(function (e) {
                      var i = t.props[e];
                      "undefined" !== typeof i && (t.player[e] = i);
                    }),
                    this.player.width > 0 &&
                      this.player.height > 0 &&
                      (this.player.resizeOnUpdate = !1),
                    [
                      "startAnimation",
                      "stopAnimation",
                      "pauseAnimation",
                      "clear",
                      "setImage",
                      "setText",
                      "startAnimationWithRange",
                    ].forEach(function (e) {
                      t[e] ||
                        "function" !== typeof t.player[e] ||
                        (t[e] = function () {
                          var i;
                          return (
                            t.player && (i = t.player)[e].apply(i, arguments)
                          );
                        });
                    }),
                    ["onFinished", "onFrame", "onPercentage"].forEach(function (
                      e
                    ) {
                      var i = t.props[e];
                      "function" === typeof i && t.player[e](i);
                    })),
                  this.load(e),
                  this._updateRef(this.player);
              },
            },
            {
              key: "UNSAFE_componentWillReceiveProps",
              value: function (t) {
                var e = this.props.src;
                t.src !== e && (this.stopPlayer(), this.load(t.src));
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (t) {
                return (
                  t.src !== this.props.src ||
                  t.className !== this.props.className
                );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                (this.unmounted = !0),
                  this.stopPlayer(),
                  (this.container = null),
                  (this.player = null),
                  this._updateRef(null);
              },
            },
            {
              key: "stopPlayer",
              value: function () {
                this.player &&
                  (this.player.stopAnimation(), this.player.clear());
              },
            },
            {
              key: "load",
              value: function (t) {
                var e = this,
                  i = this.props,
                  r = i.onLoad,
                  a = i.onError,
                  n = i.onSrcError,
                  o = i.isDisableWorker;
                this.testSrc(t)
                  ? Object(x.a)(t, o).then(
                      function (t) {
                        if (!e.unmounted) {
                          if (e.player) {
                            var i = e.props,
                              a = i.autoPlay,
                              n = i.range;
                            e.player.setVideoItem(t),
                              !1 !== a &&
                                (n
                                  ? e.player.startAnimationWithRange(n(t))
                                  : e.player.startAnimation());
                          }
                          e.setState({ loaded: !0 }),
                            "function" === typeof r && r(e.player);
                        }
                      },
                      function (t) {
                        e.unmounted || ("function" === typeof a && a(t));
                      }
                    )
                  : "function" === typeof n && n(t);
              },
            },
            {
              key: "testSrc",
              value: function (t) {
                return N(t);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.prefixCls,
                  i = t.className,
                  r = t.style,
                  a = t.alt,
                  n = t.onClick,
                  o = t.width,
                  s = t.height,
                  h = this.state.loaded,
                  c = g()(e, i, "nimo-svga-gift"),
                  l = o > 0 && s > 0 ? this.getStyle(r, o, s) : r;
                return y.createElement(
                  y.Fragment,
                  null,
                  h
                    ? y.createElement("div", {
                        ref: this.saveContainer,
                        className: c,
                        style: l,
                        onClick: n,
                      })
                    : null,
                  h
                    ? null
                    : y.createElement(w.a, {
                        className: c,
                        style: l,
                        alt: a,
                        onClick: n,
                      })
                );
              },
            },
          ]),
          i
        );
      })(y.Component);
      function N(t) {
        return "string" === typeof t && /.svga$/.test(t);
      }
      p()(I, "defaultProps", {
        prefixCls: "",
        className: "",
        src: "",
        onLoad: function () {},
        onError: function () {},
        onSrcError: function () {},
        loops: 0,
        onFinished: function () {},
        onFrame: function () {},
        onPercentage: function () {},
        autoPlay: !0,
        resizeOnUpdate: !0,
      });
      e.default = I;
    },
    GKjE: function (t, e, i) {
      "use strict";
      var r = function (t, e, i) {
        (this._d = t), (this._transform = e), (this._styles = i);
      };
      function a(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          n(t, e);
      }
      function n(t, e) {
        return (n =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var o = (function (t) {
          function e(e, i, r, a, n, o) {
            var s;
            return (
              ((s = t.call(this) || this)._x = e),
              (s._y = i),
              (s._radiusX = r),
              (s._radiusY = a),
              (s._transform = n),
              (s._styles = o),
              s
            );
          }
          return a(e, t), e;
        })(r),
        s = (function (t) {
          function e(e, i, r, a, n, o, s) {
            var h;
            return (
              ((h = t.call(this) || this)._x = e),
              (h._y = i),
              (h._width = r),
              (h._height = a),
              (h._cornerRadius = n),
              (h._transform = o),
              (h._styles = s),
              h
            );
          }
          return a(e, t), e;
        })(r),
        h = function (t, e) {
          return t.substring(0, e.length) === e;
        },
        c = (function () {
          function t(t) {
            (this._owner = void 0),
              (this._prepared = !1),
              (this._undrawFrame = void 0),
              (this._bitmapCache = void 0),
              (this._soundsQueue = []),
              (this._owner = t);
          }
          var e = t.prototype;
          return (
            (e.dataURLtoBlob = function (t) {
              for (
                var e = t.split(","),
                  i = e[0].match(/:(.*?);/)[1],
                  r = atob(e[1]),
                  a = r.length,
                  n = new Uint8Array(a);
                a--;

              )
                n[a] = r.charCodeAt(a);
              return new Blob([n], { type: i });
            }),
            (e.prepare = function () {
              var t,
                e,
                i = this;
              if (
                ((this._prepared = !1),
                (this._bitmapCache = void 0),
                void 0 === this._owner._videoItem.images ||
                  0 == Object.keys(this._owner._videoItem.images).length)
              )
                return (this._bitmapCache = {}), void (this._prepared = !0);
              void 0 === this._bitmapCache &&
                (function () {
                  i._bitmapCache = {};
                  var r = 0,
                    a = 0,
                    n = function () {
                      a == r &&
                        ((i._prepared = !0),
                        "number" == typeof i._undrawFrame &&
                          (i.drawFrame(i._undrawFrame),
                          (i._undrawFrame = void 0)));
                    };
                  for (t in i._owner._videoItem.images) {
                    var o = i._owner._videoItem.images[t];
                    if ("string" != typeof o) {
                      r++, a++;
                      var s = t.replace(".matte", "");
                      i._bitmapCache[s] = o;
                    } else if (h(o, "iVBO") || h(o, "/9j/2w")) {
                      r++;
                      var c = document.createElement("img");
                      (c.onload = function () {
                        a++, n();
                      }),
                        (c.src = "data:image/png;base64," + o);
                      var l = t.replace(".matte", "");
                      i._bitmapCache[l] = c;
                    } else
                      h(o, "SUQz") &&
                        void 0 !== window.Howl &&
                        (r++,
                        (e = new Howl({
                          src: [
                            "Google Inc." === navigator.vendor
                              ? URL.createObjectURL(
                                  i.dataURLtoBlob(
                                    "data:audio/x-mpeg;base64," + o
                                  )
                                )
                              : "data:audio/x-mpeg;base64," + o,
                          ],
                          html5: "Google Inc." === navigator.vendor || void 0,
                          preload: "Google Inc." === navigator.vendor || void 0,
                          format:
                            "Google Inc." === navigator.vendor
                              ? ["mp3"]
                              : void 0,
                        })).once("load", function () {
                          a++, n();
                        }),
                        e.on("loaderror", function (t) {
                          console.error(t);
                        }),
                        (i._bitmapCache[t] = e));
                    n();
                  }
                })();
            }),
            (e.clear = function () {
              var t = (
                  this._owner._drawingCanvas || this._owner._container
                ).getContext("2d"),
                e = {
                  x: 0,
                  y: 0,
                  width: (this._owner._drawingCanvas || this._owner._container)
                    .width,
                  height: (this._owner._drawingCanvas || this._owner._container)
                    .height,
                };
              t.clearRect(e.x, e.y, e.width, e.height);
            }),
            (e.clearAudios = function () {
              this._soundsQueue.forEach(function (t) {
                t.player.stop(t.playID);
              }),
                (this._soundsQueue = []);
            }),
            (e.drawFrame = function (t) {
              var e = this;
              if (this._prepared) {
                var i = (
                    this._owner._drawingCanvas || this._owner._container
                  ).getContext("2d"),
                  r = {
                    x: 0,
                    y: 0,
                    width: (
                      this._owner._drawingCanvas || this._owner._container
                    ).width,
                    height: (
                      this._owner._drawingCanvas || this._owner._container
                    ).height,
                  };
                i.clearRect(r.x, r.y, r.width, r.height);
                var a = new Map(),
                  n = !1,
                  o = this._owner._videoItem.sprites;
                o.forEach(function (r, s) {
                  if (-1 != o[0].imageKey.indexOf(".matte"))
                    if (-1 == r.imageKey.indexOf(".matte")) {
                      var h = o[s - 1];
                      if (
                        n &&
                        (null == r.matteKey ||
                          0 == r.matteKey.length ||
                          r.matteKey != h.matteKey)
                      ) {
                        n = !1;
                        var c = a.get(r.matteKey);
                        (i.globalCompositeOperation = "destination-in"),
                          e.drawSprite(c, i, t),
                          (i.globalCompositeOperation = "source-over"),
                          i.restore();
                      }
                      null == r.matteKey ||
                        (null != h.matteKey &&
                          0 != h.matteKey.length &&
                          h.matteKey == r.matteKey) ||
                        ((n = !0), i.save()),
                        e.drawSprite(r, i, t),
                        n &&
                          s == o.length - 1 &&
                          ((c = a.get(r.matteKey)),
                          (i.globalCompositeOperation = "destination-in"),
                          e.drawSprite(c, i, t),
                          (i.globalCompositeOperation = "source-over"),
                          i.restore());
                    } else a.set(r.imageKey, r);
                  else e.drawSprite(r, i, t);
                });
              } else this._undrawFrame = t;
            }),
            (e.drawSprite = function (t, e, i) {
              var a = this,
                n = t.frames[this._owner._currentFrame];
              if (!(n.alpha < 0.05)) {
                e.save(),
                  this._owner._globalTransform &&
                    e.transform(
                      this._owner._globalTransform.a,
                      this._owner._globalTransform.b,
                      this._owner._globalTransform.c,
                      this._owner._globalTransform.d,
                      this._owner._globalTransform.tx,
                      this._owner._globalTransform.ty
                    ),
                  (e.globalAlpha = n.alpha),
                  e.transform(
                    n.transform.a,
                    n.transform.b,
                    n.transform.c,
                    n.transform.d,
                    n.transform.tx,
                    n.transform.ty
                  );
                var c = t.imageKey.replace(".matte", ""),
                  l =
                    this._owner._dynamicImage[c] ||
                    this._bitmapCache[c] ||
                    this._owner._videoItem.images[c];
                if ("string" == typeof l) {
                  var d =
                      this._bitmapCache[t.imageKey] ||
                      document.createElement("img"),
                    m = void 0,
                    u = void 0;
                  if (
                    (h(l, "iVBO") || h(l, "/9j/2w")
                      ? (d.src = "data:image/png;base64," + l)
                      : (d._svgaSrc !== l && ((d._svgaSrc = l), (d.src = l)),
                        (m = n.layout.width),
                        (u = n.layout.height)),
                    (this._bitmapCache[t.imageKey] = d),
                    null != n.maskPath &&
                      (this.drawBezier(e, n.maskPath), e.clip()),
                    void 0 !== this._owner._dynamicImageTransform[t.imageKey])
                  ) {
                    e.save();
                    var f = this._owner._dynamicImageTransform[t.imageKey];
                    e.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
                  }
                  m && u ? e.drawImage(d, 0, 0, m, u) : e.drawImage(d, 0, 0),
                    void 0 !== this._owner._dynamicImageTransform[t.imageKey] &&
                      e.restore();
                } else if ("object" == typeof l) {
                  if (
                    (null != n.maskPath &&
                      ((n.maskPath._styles = void 0),
                      this.drawBezier(e, n.maskPath),
                      e.clip()),
                    void 0 !== this._owner._dynamicImageTransform[t.imageKey])
                  ) {
                    e.save();
                    var _ = this._owner._dynamicImageTransform[t.imageKey];
                    e.transform(_[0], _[1], _[2], _[3], _[4], _[5]);
                  }
                  e.drawImage(l, 0, 0),
                    void 0 !== this._owner._dynamicImageTransform[t.imageKey] &&
                      e.restore();
                }
                n.shapes &&
                  n.shapes.forEach(function (t) {
                    "shape" === t.type &&
                      t.pathArgs &&
                      t.pathArgs.d &&
                      a.drawBezier(
                        e,
                        new r(t.pathArgs.d, t.transform, t.styles)
                      ),
                      "ellipse" === t.type &&
                        t.pathArgs &&
                        a.drawEllipse(
                          e,
                          new o(
                            parseFloat(t.pathArgs.x) || 0,
                            parseFloat(t.pathArgs.y) || 0,
                            parseFloat(t.pathArgs.radiusX) || 0,
                            parseFloat(t.pathArgs.radiusY) || 0,
                            t.transform,
                            t.styles
                          )
                        ),
                      "rect" === t.type &&
                        t.pathArgs &&
                        a.drawRect(
                          e,
                          new s(
                            parseFloat(t.pathArgs.x) || 0,
                            parseFloat(t.pathArgs.y) || 0,
                            parseFloat(t.pathArgs.width) || 0,
                            parseFloat(t.pathArgs.height) || 0,
                            parseFloat(t.pathArgs.cornerRadius) || 0,
                            t.transform,
                            t.styles
                          )
                        );
                  });
                var p = this._owner._dynamicText[t.imageKey];
                if (void 0 !== p) {
                  (e.textBaseline = "middle"), (e.font = p.style);
                  var y = e.measureText(p.text).width;
                  e.fillStyle = p.color;
                  var v =
                      void 0 !== p.offset && void 0 !== p.offset.x
                        ? isNaN(parseFloat(p.offset.x))
                          ? 0
                          : parseFloat(p.offset.x)
                        : 0,
                    g =
                      void 0 !== p.offset && void 0 !== p.offset.y
                        ? isNaN(parseFloat(p.offset.y))
                          ? 0
                          : parseFloat(p.offset.y)
                        : 0;
                  e.fillText(
                    p.text,
                    (n.layout.width - y) / 2 + v,
                    n.layout.height / 2 + g
                  );
                }
                e.restore();
              }
            }),
            (e.playAudio = function (t) {
              var e = this;
              if (
                this._owner._forwardAnimating &&
                this._owner._videoItem.audios instanceof Array
              ) {
                this._owner._videoItem.audios.forEach(function (i) {
                  if (
                    i.startFrame === t &&
                    void 0 !== e._bitmapCache[i.audioKey] &&
                    "function" == typeof e._bitmapCache[i.audioKey].play
                  ) {
                    var r = {
                      playID: e._bitmapCache[i.audioKey].play(),
                      player: e._bitmapCache[i.audioKey],
                      endFrame: i.endFrame,
                    };
                    r.player.seek(i.startTime / 1e3, r.playID),
                      e._soundsQueue.push(r);
                  }
                });
                var i = !1;
                this._soundsQueue.forEach(function (e) {
                  t >= e.endFrame && ((i = !0), e.player.stop(e.playID));
                }),
                  i &&
                    (this._soundsQueue = this._soundsQueue.filter(function (e) {
                      return t < e.endFrame;
                    }));
              }
            }),
            (e.resetShapeStyles = function (t, e) {
              var i = e._styles;
              void 0 !== i &&
                ((t.strokeStyle =
                  i && i.stroke
                    ? "rgba(" +
                      parseInt(255 * i.stroke[0]) +
                      ", " +
                      parseInt(255 * i.stroke[1]) +
                      ", " +
                      parseInt(255 * i.stroke[2]) +
                      ", " +
                      i.stroke[3] +
                      ")"
                    : "transparent"),
                i &&
                  ((t.lineWidth = i.strokeWidth || void 0),
                  (t.lineCap = i.lineCap || void 0),
                  (t.lineJoin = i.lineJoin || void 0),
                  (t.miterLimit = i.miterLimit || void 0)),
                (t.fillStyle =
                  i && i.fill
                    ? "rgba(" +
                      parseInt(255 * i.fill[0]) +
                      ", " +
                      parseInt(255 * i.fill[1]) +
                      ", " +
                      parseInt(255 * i.fill[2]) +
                      ", " +
                      i.fill[3] +
                      ")"
                    : "transparent"),
                i && i.lineDash && t.setLineDash(i.lineDash));
            }),
            (e.drawBezier = function (t, e) {
              var i = this;
              t.save(),
                this.resetShapeStyles(t, e),
                null != e._transform &&
                  t.transform(
                    e._transform.a,
                    e._transform.b,
                    e._transform.c,
                    e._transform.d,
                    e._transform.tx,
                    e._transform.ty
                  );
              var r = { x: 0, y: 0, x1: 0, y1: 0, x2: 0, y2: 0 };
              t.beginPath(),
                e._d
                  .replace(/([a-zA-Z])/g, "|||$1 ")
                  .replace(/,/g, " ")
                  .split("|||")
                  .forEach(function (e) {
                    if (0 != e.length) {
                      var a = e.substr(0, 1);
                      if ("MLHVCSQAZmlhvcsqaz".indexOf(a) >= 0) {
                        var n = e.substr(1).trim().split(" ");
                        i.drawBezierElement(t, r, a, n);
                      }
                    }
                  }),
                e._styles && e._styles.fill && t.fill(),
                e._styles && e._styles.stroke && t.stroke(),
                t.restore();
            }),
            (e.drawBezierElement = function (t, e, i, r) {
              switch (i) {
                case "M":
                  (e.x = Number(r[0])),
                    (e.y = Number(r[1])),
                    t.moveTo(e.x, e.y);
                  break;
                case "m":
                  (e.x += Number(r[0])),
                    (e.y += Number(r[1])),
                    t.moveTo(e.x, e.y);
                  break;
                case "L":
                  (e.x = Number(r[0])),
                    (e.y = Number(r[1])),
                    t.lineTo(e.x, e.y);
                  break;
                case "l":
                  (e.x += Number(r[0])),
                    (e.y += Number(r[1])),
                    t.lineTo(e.x, e.y);
                  break;
                case "H":
                  (e.x = Number(r[0])), t.lineTo(e.x, e.y);
                  break;
                case "h":
                  (e.x += Number(r[0])), t.lineTo(e.x, e.y);
                  break;
                case "V":
                  (e.y = Number(r[0])), t.lineTo(e.x, e.y);
                  break;
                case "v":
                  (e.y += Number(r[0])), t.lineTo(e.x, e.y);
                  break;
                case "C":
                  (e.x1 = Number(r[0])),
                    (e.y1 = Number(r[1])),
                    (e.x2 = Number(r[2])),
                    (e.y2 = Number(r[3])),
                    (e.x = Number(r[4])),
                    (e.y = Number(r[5])),
                    t.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y);
                  break;
                case "c":
                  (e.x1 = e.x + Number(r[0])),
                    (e.y1 = e.y + Number(r[1])),
                    (e.x2 = e.x + Number(r[2])),
                    (e.y2 = e.y + Number(r[3])),
                    (e.x += Number(r[4])),
                    (e.y += Number(r[5])),
                    t.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y);
                  break;
                case "S":
                  e.x1 && e.y1 && e.x2 && e.y2
                    ? ((e.x1 = e.x - e.x2 + e.x),
                      (e.y1 = e.y - e.y2 + e.y),
                      (e.x2 = Number(r[0])),
                      (e.y2 = Number(r[1])),
                      (e.x = Number(r[2])),
                      (e.y = Number(r[3])),
                      t.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y))
                    : ((e.x1 = Number(r[0])),
                      (e.y1 = Number(r[1])),
                      (e.x = Number(r[2])),
                      (e.y = Number(r[3])),
                      t.quadraticCurveTo(e.x1, e.y1, e.x, e.y));
                  break;
                case "s":
                  e.x1 && e.y1 && e.x2 && e.y2
                    ? ((e.x1 = e.x - e.x2 + e.x),
                      (e.y1 = e.y - e.y2 + e.y),
                      (e.x2 = e.x + Number(r[0])),
                      (e.y2 = e.y + Number(r[1])),
                      (e.x += Number(r[2])),
                      (e.y += Number(r[3])),
                      t.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y))
                    : ((e.x1 = e.x + Number(r[0])),
                      (e.y1 = e.y + Number(r[1])),
                      (e.x += Number(r[2])),
                      (e.y += Number(r[3])),
                      t.quadraticCurveTo(e.x1, e.y1, e.x, e.y));
                  break;
                case "Q":
                  (e.x1 = Number(r[0])),
                    (e.y1 = Number(r[1])),
                    (e.x = Number(r[2])),
                    (e.y = Number(r[3])),
                    t.quadraticCurveTo(e.x1, e.y1, e.x, e.y);
                  break;
                case "q":
                  (e.x1 = e.x + Number(r[0])),
                    (e.y1 = e.y + Number(r[1])),
                    (e.x += Number(r[2])),
                    (e.y += Number(r[3])),
                    t.quadraticCurveTo(e.x1, e.y1, e.x, e.y);
                  break;
                case "A":
                case "a":
                  break;
                case "Z":
                case "z":
                  t.closePath();
              }
            }),
            (e.drawEllipse = function (t, e) {
              t.save(),
                this.resetShapeStyles(t, e),
                null != e._transform &&
                  t.transform(
                    e._transform.a,
                    e._transform.b,
                    e._transform.c,
                    e._transform.d,
                    e._transform.tx,
                    e._transform.ty
                  );
              var i = e._x - e._radiusX,
                r = e._y - e._radiusY,
                a = 2 * e._radiusX,
                n = 2 * e._radiusY,
                o = 0.5522848,
                s = (a / 2) * o,
                h = (n / 2) * o,
                c = i + a,
                l = r + n,
                d = i + a / 2,
                m = r + n / 2;
              t.beginPath(),
                t.moveTo(i, m),
                t.bezierCurveTo(i, m - h, d - s, r, d, r),
                t.bezierCurveTo(d + s, r, c, m - h, c, m),
                t.bezierCurveTo(c, m + h, d + s, l, d, l),
                t.bezierCurveTo(d - s, l, i, m + h, i, m),
                e._styles && e._styles.fill && t.fill(),
                e._styles && e._styles.stroke && t.stroke(),
                t.restore();
            }),
            (e.drawRect = function (t, e) {
              t.save(),
                this.resetShapeStyles(t, e),
                null != e._transform &&
                  t.transform(
                    e._transform.a,
                    e._transform.b,
                    e._transform.c,
                    e._transform.d,
                    e._transform.tx,
                    e._transform.ty
                  );
              var i = e._x,
                r = e._y,
                a = e._width,
                n = e._height,
                o = e._cornerRadius;
              a < 2 * o && (o = a / 2),
                n < 2 * o && (o = n / 2),
                t.beginPath(),
                t.moveTo(i + o, r),
                t.arcTo(i + a, r, i + a, r + n, o),
                t.arcTo(i + a, r + n, i, r + n, o),
                t.arcTo(i, r + n, i, r, o),
                t.arcTo(i, r, i + a, r, o),
                t.closePath(),
                e._styles && e._styles.fill && t.fill(),
                e._styles && e._styles.stroke && t.stroke(),
                t.restore();
            }),
            t
          );
        })(),
        l = (function () {
          function t() {
            (this.startValue = 0),
              (this.endValue = 0),
              (this.duration = 0),
              (this.loops = 1),
              (this.fillRule = 0),
              (this.onStart = function () {}),
              (this.onUpdate = function () {}),
              (this.onEnd = function () {}),
              (this.mRunning = !1),
              (this.mStartTime = 0),
              (this.mCurrentFrication = 0),
              (this.mReverse = !1);
          }
          var e,
            i,
            r = t.prototype;
          return (
            (r.start = function (t) {
              void 0 === t && (t = void 0), this.doStart(!1, t);
            }),
            (r.reverse = function (t) {
              void 0 === t && (t = void 0), this.doStart(!0, t);
            }),
            (r.stop = function () {
              this.doStop();
            }),
            (r.doStart = function (e, i) {
              void 0 === e && (e = !1),
                void 0 === i && (i = void 0),
                (this.mReverse = e),
                (this.mRunning = !0),
                (this.mStartTime = t.currentTimeMillsecond()),
                i &&
                  (this.mStartTime -= e
                    ? (1 - i / (this.endValue - this.startValue)) *
                      this.duration
                    : (i / (this.endValue - this.startValue)) * this.duration),
                (this.mCurrentFrication = 0),
                this.onStart(),
                this.doFrame();
            }),
            (r.doStop = function () {
              this.mRunning = !1;
            }),
            (r.doFrame = function () {
              this.mRunning &&
                (this.doDeltaTime(t.currentTimeMillsecond() - this.mStartTime),
                this.mRunning &&
                  t.requestAnimationFrame(this.doFrame.bind(this)));
            }),
            (r.doDeltaTime = function (t) {
              t >= this.duration * this.loops
                ? ((this.mCurrentFrication = 1 === this.fillRule ? 0 : 1),
                  (this.mRunning = !1))
                : ((this.mCurrentFrication =
                    (t % this.duration) / this.duration),
                  this.mReverse &&
                    (this.mCurrentFrication = 1 - this.mCurrentFrication)),
                this.onUpdate(this.animatedValue),
                !1 === this.mRunning && this.onEnd();
            }),
            (e = t),
            (i = [
              {
                key: "animatedValue",
                get: function () {
                  return (
                    (this.endValue - this.startValue) * this.mCurrentFrication +
                    this.startValue
                  );
                },
              },
            ]) &&
              (function (t, e) {
                for (var i = 0; i < e.length; i++) {
                  var r = e[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              })(e.prototype, i),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
      (l.currentTimeMillsecond = function () {
        return "undefined" == typeof performance
          ? new Date().getTime()
          : performance.now();
      }),
        (l.requestAnimationFrame = function (t) {
          return "undefined" == typeof requestAnimationFrame
            ? setTimeout(t, 16)
            : window.requestAnimationFrame(t);
        });
      var d = (function () {
        function t(t) {
          (this.loops = 0),
            (this.clearsAfterStop = !0),
            (this.fillMode = "Forward"),
            (this.resizeOnUpdate = !0),
            (this.width = 0),
            (this.height = 0),
            (this._asChild = !1),
            (this._container = void 0),
            (this._renderer = void 0),
            (this._animator = void 0),
            (this._drawingCanvas = void 0),
            (this._contentMode = "AspectFit"),
            (this._videoItem = void 0),
            (this._forwardAnimating = !1),
            (this._currentFrame = 0),
            (this._dynamicImage = {}),
            (this._dynamicImageTransform = {}),
            (this._dynamicText = {}),
            (this._onFinished = void 0),
            (this._onFrame = void 0),
            (this._onPercentage = void 0),
            (this._container =
              "string" == typeof t ? document.querySelector(t) : t),
            (this._asChild = void 0 === t),
            this._init();
        }
        var e = t.prototype;
        return (
          (e.setVideoItem = function (t) {
            (this._currentFrame = 0),
              (this._videoItem = t),
              this._renderer.prepare(),
              this.clear(),
              this._update(!0);
          }),
          (e.setContentMode = function (t) {
            (this._contentMode = t), this._update(!0);
          }),
          (e.setClipsToBounds = function (t) {
            this._container instanceof HTMLDivElement &&
              (this._container.style.overflowX =
                this._container.style.overflowY =
                  t ? "hidden" : void 0);
          }),
          (e.startAnimation = function (t) {
            this.stopAnimation(!1), this._doStart(void 0, t, void 0);
          }),
          (e.startAnimationWithRange = function (t, e) {
            this.stopAnimation(!1), this._doStart(t, e, t.location);
          }),
          (e.pauseAnimation = function () {
            this.stopAnimation(!1);
          }),
          (e.stopAnimation = function (t) {
            (this._forwardAnimating = !1),
              void 0 !== this._animator && this._animator.stop(),
              void 0 === t && (t = this.clearsAfterStop),
              t && this.clear();
          }),
          (e.clear = function () {
            this._renderer.clear(), this._renderer.clearAudios();
          }),
          (e.stepToFrame = function (t, e) {
            t >= this._videoItem.frames ||
              t < 0 ||
              (this.pauseAnimation(),
              (this._currentFrame = t),
              this._update(!0),
              e && this._doStart(void 0, !1, this._currentFrame));
          }),
          (e.stepToPercentage = function (t, e) {
            var i = parseInt(t * this._videoItem.frames);
            i >= this._videoItem.frames &&
              i > 0 &&
              (i = this._videoItem.frames - 1),
              this.stepToFrame(i, e);
          }),
          (e.setImage = function (t, e, i) {
            (this._dynamicImage[e] = t),
              void 0 !== i &&
                i instanceof Array &&
                6 == i.length &&
                (this._dynamicImageTransform[e] = i);
          }),
          (e.setText = function (t, e) {
            this._dynamicText[e] = {
              text: "string" == typeof t ? t : t.text,
              style:
                (("object" == typeof t ? t.size : "14px") || "14px") +
                " " +
                (("object" == typeof t ? t.family : "Arial") || "Arial"),
              color: ("object" == typeof t ? t.color : "#000000") || "#000000",
              offset: ("object" == typeof t ? t.offset : { x: 0, y: 0 }) || {
                x: 0,
                y: 0,
              },
            };
          }),
          (e.clearDynamicObjects = function () {
            (this._dynamicImage = {}),
              (this._dynamicImageTransform = {}),
              (this._dynamicText = {});
          }),
          (e.onFinished = function (t) {
            this._onFinished = t;
          }),
          (e.onFrame = function (t) {
            this._onFrame = t;
          }),
          (e.onPercentage = function (t) {
            this._onPercentage = t;
          }),
          (e.drawOnContext = function (t, e, i, r, a) {
            this._drawingCanvas &&
              this._videoItem &&
              t.drawImage(
                this._drawingCanvas,
                e,
                i,
                r || this._videoItem.videoSize.width,
                a || this._videoItem.videoSize.height
              );
          }),
          (e._init = function () {
            if (this._container instanceof HTMLDivElement || this._asChild) {
              if (this._container)
                for (
                  var t = this._container.querySelectorAll("canvas"), e = 0;
                  e < t.length;
                  e++
                ) {
                  var i = t[e];
                  void 0 !== i &&
                    i.__isPlayer &&
                    this._container.removeChild(i);
                }
              (this._drawingCanvas = document.createElement("canvas")),
                (this._drawingCanvas.__isPlayer = !0),
                (this._drawingCanvas.style.backgroundColor = "transparent"),
                this._container &&
                  (this._container.appendChild(this._drawingCanvas),
                  (this._container.style.textAlign = "left"));
            }
            this._renderer = new c(this);
          }),
          (e._doStart = function (t, e, i) {
            var r = this;
            (this._animator = new l()),
              void 0 !== t
                ? ((this._animator.startValue = Math.max(0, t.location)),
                  (this._animator.endValue = Math.min(
                    this._videoItem.frames - 1,
                    t.location + t.length
                  )),
                  (this._animator.duration =
                    (1 / this._videoItem.FPS) *
                    (this._animator.endValue - this._animator.startValue + 1) *
                    1e3))
                : ((this._animator.startValue = 0),
                  (this._animator.endValue = this._videoItem.frames - 1),
                  (this._animator.duration =
                    this._videoItem.frames * (1 / this._videoItem.FPS) * 1e3)),
              (this._animator.loops = this.loops <= 0 ? 1 / 0 : this.loops),
              (this._animator.fillRule = "Backward" === this.fillMode ? 1 : 0),
              (this._animator.onUpdate = function (t) {
                r._currentFrame !== Math.floor(t) &&
                  (r._forwardAnimating &&
                    r._currentFrame > Math.floor(t) &&
                    r._renderer.clearAudios(),
                  (r._currentFrame = Math.floor(t)),
                  r._update(),
                  "function" == typeof r._onFrame &&
                    r._onFrame(r._currentFrame),
                  "function" == typeof r._onPercentage &&
                    r._onPercentage(
                      parseFloat(r._currentFrame + 1) /
                        parseFloat(r._videoItem.frames)
                    ));
              }),
              (this._animator.onEnd = function () {
                (r._forwardAnimating = !1),
                  !0 === r.clearsAfterStop && r.clear(),
                  "function" == typeof r._onFinished && r._onFinished();
              }),
              !0 === e
                ? (this._animator.reverse(i), (this._forwardAnimating = !1))
                : (this._animator.start(i), (this._forwardAnimating = !0)),
              (this._currentFrame = this._animator.startValue),
              this._update(!0);
          }),
          (e._resize = function () {
            var t = !1;
            if (this._drawingCanvas) {
              var e;
              this.width > 0 && this.height > 0
                ? (e = { width: this.width, height: this.height })
                : this._drawingCanvas.parentNode
                ? ((e = {
                    width: this._drawingCanvas.parentNode.clientWidth,
                    height: this._drawingCanvas.parentNode.clientHeight,
                  }),
                  this.resizeOnUpdate ||
                    (this._isNotShow = 0 === e.height || 0 === e.width))
                : (e = this._videoItem.videoSize);
              var i = this._videoItem.videoSize;
              if (e.width >= i.width && e.height >= i.height)
                (this._drawingCanvas.width = e.width),
                  (this._drawingCanvas.height = e.height),
                  (this._drawingCanvas.style.webkitTransform =
                    this._drawingCanvas.style.transform =
                      ""),
                  (t = !0);
              else {
                if (
                  ((this._drawingCanvas.width = i.width),
                  (this._drawingCanvas.height = i.height),
                  "Fill" === this._contentMode)
                ) {
                  var r = e.width / i.width,
                    a = e.height / i.height;
                  this._drawingCanvas.style.webkitTransform =
                    this._drawingCanvas.style.transform =
                      "matrix(" +
                      r +
                      ", 0.0, 0.0, " +
                      a +
                      ", " +
                      (i.width * r - i.width) / 2 +
                      ", " +
                      (i.height * a - i.height) / 2 +
                      ")";
                } else if (
                  "AspectFit" === this._contentMode ||
                  "AspectFill" === this._contentMode
                ) {
                  var n = i.width / i.height,
                    o = e.width / e.height;
                  if (
                    (n >= o && "AspectFit" === this._contentMode) ||
                    (n <= o && "AspectFill" === this._contentMode)
                  ) {
                    var s = e.width / i.width;
                    this._drawingCanvas.style.webkitTransform =
                      this._drawingCanvas.style.transform =
                        "matrix(" +
                        s +
                        ", 0.0, 0.0, " +
                        s +
                        ", " +
                        (i.width * s - i.width) / 2 +
                        ", " +
                        ((i.height * s - i.height) / 2 +
                          (e.height - i.height * s) / 2) +
                        ")";
                  } else if (
                    (n < o && "AspectFit" === this._contentMode) ||
                    (n > o && "AspectFill" === this._contentMode)
                  ) {
                    var h = e.height / i.height;
                    this._drawingCanvas.style.webkitTransform =
                      this._drawingCanvas.style.transform =
                        "matrix(" +
                        h +
                        ", 0.0, 0.0, " +
                        h +
                        ", " +
                        ((i.width * h - i.width) / 2 +
                          (e.width - i.width * h) / 2) +
                        ", " +
                        (i.height * h - i.height) / 2 +
                        ")";
                  }
                }
                this._globalTransform = void 0;
              }
            }
            if (void 0 === this._drawingCanvas || !0 === t) {
              var c = 1,
                l = 1,
                d = 0,
                m = 0,
                u = {
                  width:
                    void 0 !== this._container
                      ? this._container.clientWidth
                      : 0,
                  height:
                    void 0 !== this._container
                      ? this._container.clientHeight
                      : 0,
                },
                f = this._videoItem.videoSize;
              if ("Fill" === this._contentMode)
                (c = u.width / f.width), (l = u.height / f.height);
              else if (
                "AspectFit" === this._contentMode ||
                "AspectFill" === this._contentMode
              ) {
                var _ = f.width / f.height,
                  p = u.width / u.height;
                (_ >= p && "AspectFit" === this._contentMode) ||
                (_ <= p && "AspectFill" === this._contentMode)
                  ? ((c = l = u.width / f.width),
                    (m = (u.height - f.height * l) / 2))
                  : ((_ < p && "AspectFit" === this._contentMode) ||
                      (_ > p && "AspectFill" === this._contentMode)) &&
                    ((c = l = u.height / f.height),
                    (d = (u.width - f.width * c) / 2));
              }
              this._globalTransform = { a: c, b: 0, c: 0, d: l, tx: d, ty: m };
            }
          }),
          (e._update = function (t) {
            void 0 !== this._videoItem &&
              ((this.resizeOnUpdate || t || this._isNotShow) && this._resize(),
              this._renderer.drawFrame(this._currentFrame),
              this._renderer.playAudio(this._currentFrame));
          }),
          t
        );
      })();
      e.a = d;
    },
  },
]);
