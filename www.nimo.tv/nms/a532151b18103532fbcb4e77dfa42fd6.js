!(function () {
  var e = function (e, t, r) {
      (this._d = e), (this._transform = t), (this._styles = r);
    },
    t = function t(r) {
      (this.alpha = 0),
        (this.transform = { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }),
        (this.layout = { x: 0, y: 0, width: 0, height: 0 }),
        (this.nx = 0),
        (this.ny = 0),
        (this.maskPath = null),
        (this.shapes = []),
        (this.alpha = parseFloat(r.alpha) || 0),
        r.layout &&
          ((this.layout.x = parseFloat(r.layout.x) || 0),
          (this.layout.y = parseFloat(r.layout.y) || 0),
          (this.layout.width = parseFloat(r.layout.width) || 0),
          (this.layout.height = parseFloat(r.layout.height) || 0)),
        r.transform &&
          ((this.transform.a = parseFloat(r.transform.a) || 1),
          (this.transform.b = parseFloat(r.transform.b) || 0),
          (this.transform.c = parseFloat(r.transform.c) || 0),
          (this.transform.d = parseFloat(r.transform.d) || 1),
          (this.transform.tx = parseFloat(r.transform.tx) || 0),
          (this.transform.ty = parseFloat(r.transform.ty) || 0)),
        r.clipPath &&
          r.clipPath.length > 0 &&
          (this.maskPath = new e(r.clipPath, void 0, { fill: "#000000" })),
        r.shapes &&
          (r.shapes instanceof Array &&
            r.shapes.forEach(function (e) {
              switch (((e.pathArgs = e.args), e.type)) {
                case 0:
                  (e.type = "shape"), (e.pathArgs = e.shape);
                  break;
                case 1:
                  (e.type = "rect"), (e.pathArgs = e.rect);
                  break;
                case 2:
                  (e.type = "ellipse"), (e.pathArgs = e.ellipse);
                  break;
                case 3:
                  e.type = "keep";
              }
              if (e.styles) {
                e.styles.fill &&
                  ("number" == typeof e.styles.fill.r &&
                    (e.styles.fill[0] = e.styles.fill.r),
                  "number" == typeof e.styles.fill.g &&
                    (e.styles.fill[1] = e.styles.fill.g),
                  "number" == typeof e.styles.fill.b &&
                    (e.styles.fill[2] = e.styles.fill.b),
                  "number" == typeof e.styles.fill.a &&
                    (e.styles.fill[3] = e.styles.fill.a)),
                  e.styles.stroke &&
                    ("number" == typeof e.styles.stroke.r &&
                      (e.styles.stroke[0] = e.styles.stroke.r),
                    "number" == typeof e.styles.stroke.g &&
                      (e.styles.stroke[1] = e.styles.stroke.g),
                    "number" == typeof e.styles.stroke.b &&
                      (e.styles.stroke[2] = e.styles.stroke.b),
                    "number" == typeof e.styles.stroke.a &&
                      (e.styles.stroke[3] = e.styles.stroke.a));
                var t = e.styles.lineDash || [];
                switch (
                  (e.styles.lineDashI > 0 && t.push(e.styles.lineDashI),
                  e.styles.lineDashII > 0 &&
                    (t.length < 1 && t.push(0),
                    t.push(e.styles.lineDashII),
                    t.push(0)),
                  e.styles.lineDashIII > 0 &&
                    (t.length < 2 && (t.push(0), t.push(0)),
                    (t[2] = e.styles.lineDashIII)),
                  (e.styles.lineDash = t),
                  e.styles.lineJoin)
                ) {
                  case 0:
                    e.styles.lineJoin = "miter";
                    break;
                  case 1:
                    e.styles.lineJoin = "round";
                    break;
                  case 2:
                    e.styles.lineJoin = "bevel";
                }
                switch (e.styles.lineCap) {
                  case 0:
                    e.styles.lineCap = "butt";
                    break;
                  case 1:
                    e.styles.lineCap = "round";
                    break;
                  case 2:
                    e.styles.lineCap = "square";
                }
              }
            }),
          r.shapes[0] && "keep" === r.shapes[0].type
            ? (this.shapes = t.lastShapes)
            : ((this.shapes = r.shapes), (t.lastShapes = r.shapes)));
      var i =
          this.transform.a * this.layout.x +
          this.transform.c * this.layout.y +
          this.transform.tx,
        s =
          this.transform.a * (this.layout.x + this.layout.width) +
          this.transform.c * this.layout.y +
          this.transform.tx,
        n =
          this.transform.b * this.layout.x +
          this.transform.d * this.layout.y +
          this.transform.ty,
        o =
          this.transform.b * (this.layout.x + this.layout.width) +
          this.transform.d * this.layout.y +
          this.transform.ty,
        a =
          this.transform.b * this.layout.x +
          this.transform.d * (this.layout.y + this.layout.height) +
          this.transform.ty,
        f =
          this.transform.b * (this.layout.x + this.layout.width) +
          this.transform.d * (this.layout.y + this.layout.height) +
          this.transform.ty;
      (this.nx = Math.min(
        Math.min(
          this.transform.a * this.layout.x +
            this.transform.c * (this.layout.y + this.layout.height) +
            this.transform.tx,
          this.transform.a * (this.layout.x + this.layout.width) +
            this.transform.c * (this.layout.y + this.layout.height) +
            this.transform.tx
        ),
        Math.min(i, s)
      )),
        (this.ny = Math.min(Math.min(a, f), Math.min(n, o)));
    },
    r = function (e) {
      (this.matteKey = null),
        (this.imageKey = null),
        (this.frames = []),
        (this.matteKey = e.matteKey),
        (this.imageKey = e.imageKey),
        e.frames &&
          (this.frames = e.frames.map(function (e) {
            return new t(e);
          }));
    };
  function i(e) {
    var t = { exports: {} };
    return e(t, t.exports), t.exports;
  }
  var s,
    n = i(function (e, t) {
      t.build = "minimal";
    }),
    o = a;
  function a(e, t) {
    (this.options = t),
      (this.name = e),
      (this.parent = null),
      (this.resolved = !1),
      (this.comment = null),
      (this.filename = null);
  }
  (a.className = "ReflectionObject"),
    (a.prototype.onAdd = function (e) {
      this.parent && this.parent !== e && this.parent.remove(this),
        (this.parent = e),
        (this.resolved = !1);
      var t = e.root;
      t instanceof s && t._handleAdd(this);
    }),
    (a.prototype.resolve = function () {
      return (
        this.resolved || (this.root instanceof s && (this.resolved = !0)), this
      );
    }),
    (a.prototype.getOption = function (e) {
      if (this.options) return this.options[e];
    }),
    (a._configure = function (e) {
      s = e;
    });
  var f = l;
  function l(e, t, r, i, s) {
    if ((o.call(this, e, r), t && "object" != typeof t))
      throw TypeError("values must be an object");
    if (
      ((this.valuesById = {}),
      (this.values = Object.create(this.valuesById)),
      (this.comment = i),
      (this.comments = s || {}),
      (this.reserved = void 0),
      t)
    )
      for (var n = Object.keys(t), a = 0; a < n.length; ++a)
        "number" == typeof t[n[a]] &&
          (this.valuesById[(this.values[n[a]] = t[n[a]])] = n[a]);
  }
  (((l.prototype = Object.create(o.prototype)).constructor = l).className =
    "Enum"),
    (l.fromJSON = function (e, t) {
      var r = new l(e, t.values, t.options, t.comment, t.comments);
      return (r.reserved = t.reserved), r;
    });
  var h = p(p);
  function p(e) {
    return (
      "undefined" != typeof Float32Array
        ? (function () {
            var t = new Float32Array([-0]),
              r = new Uint8Array(t.buffer),
              i = 128 === r[3];
            function s(e, i, s) {
              (t[0] = e),
                (i[s] = r[0]),
                (i[s + 1] = r[1]),
                (i[s + 2] = r[2]),
                (i[s + 3] = r[3]);
            }
            function n(e, i, s) {
              (t[0] = e),
                (i[s] = r[3]),
                (i[s + 1] = r[2]),
                (i[s + 2] = r[1]),
                (i[s + 3] = r[0]);
            }
            function o(e, i) {
              return (
                (r[0] = e[i]),
                (r[1] = e[i + 1]),
                (r[2] = e[i + 2]),
                (r[3] = e[i + 3]),
                t[0]
              );
            }
            function a(e, i) {
              return (
                (r[3] = e[i]),
                (r[2] = e[i + 1]),
                (r[1] = e[i + 2]),
                (r[0] = e[i + 3]),
                t[0]
              );
            }
            (e.writeFloatLE = i ? s : n),
              (e.writeFloatBE = i ? n : s),
              (e.readFloatLE = i ? o : a),
              (e.readFloatBE = i ? a : o);
          })()
        : (function () {
            function t(e, t, r, i) {
              var s = t < 0 ? 1 : 0;
              if ((s && (t = -t), 0 === t)) e(1 / t > 0 ? 0 : 2147483648, r, i);
              else if (isNaN(t)) e(2143289344, r, i);
              else if (t > 34028234663852886e22)
                e(((s << 31) | 2139095040) >>> 0, r, i);
              else if (t < 11754943508222875e-54)
                e(
                  ((s << 31) | Math.round(t / 1401298464324817e-60)) >>> 0,
                  r,
                  i
                );
              else {
                var n = Math.floor(Math.log(t) / Math.LN2);
                e(
                  ((s << 31) |
                    ((n + 127) << 23) |
                    (8388607 & Math.round(t * Math.pow(2, -n) * 8388608))) >>>
                    0,
                  r,
                  i
                );
              }
            }
            function r(e, t, r) {
              var i = e(t, r),
                s = 2 * (i >> 31) + 1,
                n = (i >>> 23) & 255,
                o = 8388607 & i;
              return 255 === n
                ? o
                  ? NaN
                  : (1 / 0) * s
                : 0 === n
                ? 1401298464324817e-60 * s * o
                : s * Math.pow(2, n - 150) * (o + 8388608);
            }
            (e.writeFloatLE = t.bind(null, u)),
              (e.writeFloatBE = t.bind(null, d)),
              (e.readFloatLE = r.bind(null, y)),
              (e.readFloatBE = r.bind(null, c));
          })(),
      "undefined" != typeof Float64Array
        ? (function () {
            var t = new Float64Array([-0]),
              r = new Uint8Array(t.buffer),
              i = 128 === r[7];
            function s(e, i, s) {
              (t[0] = e),
                (i[s] = r[0]),
                (i[s + 1] = r[1]),
                (i[s + 2] = r[2]),
                (i[s + 3] = r[3]),
                (i[s + 4] = r[4]),
                (i[s + 5] = r[5]),
                (i[s + 6] = r[6]),
                (i[s + 7] = r[7]);
            }
            function n(e, i, s) {
              (t[0] = e),
                (i[s] = r[7]),
                (i[s + 1] = r[6]),
                (i[s + 2] = r[5]),
                (i[s + 3] = r[4]),
                (i[s + 4] = r[3]),
                (i[s + 5] = r[2]),
                (i[s + 6] = r[1]),
                (i[s + 7] = r[0]);
            }
            function o(e, i) {
              return (
                (r[0] = e[i]),
                (r[1] = e[i + 1]),
                (r[2] = e[i + 2]),
                (r[3] = e[i + 3]),
                (r[4] = e[i + 4]),
                (r[5] = e[i + 5]),
                (r[6] = e[i + 6]),
                (r[7] = e[i + 7]),
                t[0]
              );
            }
            function a(e, i) {
              return (
                (r[7] = e[i]),
                (r[6] = e[i + 1]),
                (r[5] = e[i + 2]),
                (r[4] = e[i + 3]),
                (r[3] = e[i + 4]),
                (r[2] = e[i + 5]),
                (r[1] = e[i + 6]),
                (r[0] = e[i + 7]),
                t[0]
              );
            }
            (e.writeDoubleLE = i ? s : n),
              (e.writeDoubleBE = i ? n : s),
              (e.readDoubleLE = i ? o : a),
              (e.readDoubleBE = i ? a : o);
          })()
        : (function () {
            function t(e, t, r, i, s, n) {
              var o = i < 0 ? 1 : 0;
              if ((o && (i = -i), 0 === i))
                e(0, s, n + t), e(1 / i > 0 ? 0 : 2147483648, s, n + r);
              else if (isNaN(i)) e(0, s, n + t), e(2146959360, s, n + r);
              else if (i > 17976931348623157e292)
                e(0, s, n + t), e(((o << 31) | 2146435072) >>> 0, s, n + r);
              else {
                var a;
                if (i < 22250738585072014e-324)
                  e((a = i / 5e-324) >>> 0, s, n + t),
                    e(((o << 31) | (a / 4294967296)) >>> 0, s, n + r);
                else {
                  var f = Math.floor(Math.log(i) / Math.LN2);
                  1024 === f && (f = 1023),
                    e(
                      (4503599627370496 * (a = i * Math.pow(2, -f))) >>> 0,
                      s,
                      n + t
                    ),
                    e(
                      ((o << 31) |
                        ((f + 1023) << 20) |
                        ((1048576 * a) & 1048575)) >>>
                        0,
                      s,
                      n + r
                    );
                }
              }
            }
            function r(e, t, r, i, s) {
              var n = e(i, s + t),
                o = e(i, s + r),
                a = 2 * (o >> 31) + 1,
                f = (o >>> 20) & 2047,
                l = 4294967296 * (1048575 & o) + n;
              return 2047 === f
                ? l
                  ? NaN
                  : (1 / 0) * a
                : 0 === f
                ? 5e-324 * a * l
                : a * Math.pow(2, f - 1075) * (l + 4503599627370496);
            }
            (e.writeDoubleLE = t.bind(null, u, 0, 4)),
              (e.writeDoubleBE = t.bind(null, d, 4, 0)),
              (e.readDoubleLE = r.bind(null, y, 0, 4)),
              (e.readDoubleBE = r.bind(null, c, 4, 0));
          })(),
      e
    );
  }
  function u(e, t, r) {
    (t[r] = 255 & e),
      (t[r + 1] = (e >>> 8) & 255),
      (t[r + 2] = (e >>> 16) & 255),
      (t[r + 3] = e >>> 24);
  }
  function d(e, t, r) {
    (t[r] = e >>> 24),
      (t[r + 1] = (e >>> 16) & 255),
      (t[r + 2] = (e >>> 8) & 255),
      (t[r + 3] = 255 & e);
  }
  function y(e, t) {
    return (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0;
  }
  function c(e, t) {
    return ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0;
  }
  var v = i(function (e, t) {
      var r = t;
      (r.length = function (e) {
        for (var t = 0, r = 0, i = 0; i < e.length; ++i)
          (r = e.charCodeAt(i)) < 128
            ? (t += 1)
            : r < 2048
            ? (t += 2)
            : 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(i + 1))
            ? (++i, (t += 4))
            : (t += 3);
        return t;
      }),
        (r.read = function (e, t, r) {
          if (r - t < 1) return "";
          for (var i, s = null, n = [], o = 0; t < r; )
            (i = e[t++]) < 128
              ? (n[o++] = i)
              : i > 191 && i < 224
              ? (n[o++] = ((31 & i) << 6) | (63 & e[t++]))
              : i > 239 && i < 365
              ? ((i =
                  (((7 & i) << 18) |
                    ((63 & e[t++]) << 12) |
                    ((63 & e[t++]) << 6) |
                    (63 & e[t++])) -
                  65536),
                (n[o++] = 55296 + (i >> 10)),
                (n[o++] = 56320 + (1023 & i)))
              : (n[o++] =
                  ((15 & i) << 12) | ((63 & e[t++]) << 6) | (63 & e[t++])),
              o > 8191 &&
                ((s || (s = [])).push(String.fromCharCode.apply(String, n)),
                (o = 0));
          return s
            ? (o && s.push(String.fromCharCode.apply(String, n.slice(0, o))),
              s.join(""))
            : String.fromCharCode.apply(String, n.slice(0, o));
        }),
        (r.write = function (e, t, r) {
          for (var i, s, n = r, o = 0; o < e.length; ++o)
            (i = e.charCodeAt(o)) < 128
              ? (t[r++] = i)
              : i < 2048
              ? ((t[r++] = (i >> 6) | 192), (t[r++] = (63 & i) | 128))
              : 55296 == (64512 & i) &&
                56320 == (64512 & (s = e.charCodeAt(o + 1)))
              ? (++o,
                (t[r++] =
                  ((i = 65536 + ((1023 & i) << 10) + (1023 & s)) >> 18) | 240),
                (t[r++] = ((i >> 12) & 63) | 128),
                (t[r++] = ((i >> 6) & 63) | 128),
                (t[r++] = (63 & i) | 128))
              : ((t[r++] = (i >> 12) | 224),
                (t[r++] = ((i >> 6) & 63) | 128),
                (t[r++] = (63 & i) | 128));
          return r - n;
        });
    }),
    m = i(function (e, t) {
      var r = t;
      (r.float = h),
        (r.utf8 = v),
        (r.emptyArray = Object.freeze ? Object.freeze([]) : []),
        (r.emptyObject = Object.freeze ? Object.freeze({}) : {}),
        (r.isInteger =
          Number.isInteger ||
          function (e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
          }),
        (r.isString = function (e) {
          return "string" == typeof e || e instanceof String;
        }),
        (r.isObject = function (e) {
          return e && "object" == typeof e;
        }),
        (r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array),
        (r._configure = function () {
          var e = r.Buffer;
          e
            ? ((r._Buffer_from =
                (e.from !== Uint8Array.from && e.from) ||
                function (t, r) {
                  return new e(t, r);
                }),
              (r._Buffer_allocUnsafe =
                e.allocUnsafe ||
                function (t) {
                  return new e(t);
                }))
            : (r._Buffer_from = r._Buffer_allocUnsafe = null);
        });
    }),
    g = b;
  function b(e, t) {
    "string" == typeof e && ((t = e), (e = void 0));
    var r = [];
    function i(e) {
      if ("string" != typeof e) {
        var t = s();
        if (
          (b.verbose && console.log("codegen: " + t), (t = "return " + t), e)
        ) {
          for (
            var n = Object.keys(e),
              o = new Array(n.length + 1),
              a = new Array(n.length),
              f = 0;
            f < n.length;

          )
            (o[f] = n[f]), (a[f] = e[n[f++]]);
          return (o[f] = t), Function.apply(null, o).apply(null, a);
        }
        return Function(t)();
      }
      for (var l = new Array(arguments.length - 1), h = 0; h < l.length; )
        l[h] = arguments[++h];
      if (
        ((h = 0),
        (e = e.replace(/%([%dfijs])/g, function (e, t) {
          var r = l[h++];
          switch (t) {
            case "d":
            case "f":
              return String(Number(r));
            case "i":
              return String(Math.floor(r));
            case "j":
              return JSON.stringify(r);
            case "s":
              return String(r);
          }
          return "%";
        })),
        h !== l.length)
      )
        throw Error("parameter count mismatch");
      return r.push(e), i;
    }
    function s(i) {
      return (
        "function " +
        (i || t || "") +
        "(" +
        ((e && e.join(",")) || "") +
        "){\n  " +
        r.join("\n  ") +
        "\n}"
      );
    }
    return (i.toString = s), i;
  }
  b.verbose = !1;
  var w,
    A = i(function (e) {
      var t = (e.exports = m);
      (t.codegen = g),
        (t.toArray = function (e) {
          if (e) {
            for (
              var t = Object.keys(e), r = new Array(t.length), i = 0;
              i < t.length;

            )
              r[i] = e[t[i++]];
            return r;
          }
          return [];
        });
      var r = /\\/g,
        i = /"/g;
      (t.isReserved = function (e) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
          e
        );
      }),
        (t.safeProp = function (e) {
          return !/^[$\w_]+$/.test(e) || t.isReserved(e)
            ? '["' + e.replace(r, "\\\\").replace(i, '\\"') + '"]'
            : "." + e;
        });
    }),
    k = i(function (e, t) {
      var r = t,
        i = [
          "double",
          "float",
          "int32",
          "uint32",
          "sint32",
          "fixed32",
          "sfixed32",
          "int64",
          "uint64",
          "sint64",
          "fixed64",
          "sfixed64",
          "bool",
          "string",
          "bytes",
        ];
      function s(e, t) {
        var r = 0,
          s = {};
        for (t |= 0; r < e.length; ) s[i[r + t]] = e[r++];
        return s;
      }
      (r.basic = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2])),
        (r.defaults = s([
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          !1,
          "",
          A.emptyArray,
          null,
        ])),
        (r.long = s([0, 0, 0, 1, 1], 7)),
        (r.mapKey = s([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2)),
        (r.packed = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]));
    }),
    O = S;
  ((S.prototype = Object.create(o.prototype)).constructor = S).className =
    "Field";
  var E = /^required|optional|repeated$/;
  function S(e, t, r, i, s, n, a) {
    if (
      (A.isObject(i)
        ? ((a = s), (n = i), (i = s = void 0))
        : A.isObject(s) && ((a = n), (n = s), (s = void 0)),
      o.call(this, e, n),
      !A.isInteger(t) || t < 0)
    )
      throw TypeError("id must be a non-negative integer");
    if (!A.isString(r)) throw TypeError("type must be a string");
    if (void 0 !== i && !E.test((i = i.toString().toLowerCase())))
      throw TypeError("rule must be a string rule");
    if (void 0 !== s && !A.isString(s))
      throw TypeError("extend must be a string");
    (this.rule = i && "optional" !== i ? i : void 0),
      (this.type = r),
      (this.id = t),
      (this.extend = s || void 0),
      (this.required = "required" === i),
      (this.optional = !this.required),
      (this.repeated = "repeated" === i),
      (this.map = !1),
      (this.message = null),
      (this.partOf = null),
      (this.typeDefault = null),
      (this.defaultValue = null),
      (this.long = !!A.Long && void 0 !== k.long[r]),
      (this.bytes = "bytes" === r),
      (this.resolvedType = null),
      (this.extensionField = null),
      (this.declaringField = null),
      (this._packed = null),
      (this.comment = a);
  }
  (S.fromJSON = function (e, t) {
    return new S(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
  }),
    (S.prototype.setOption = function (e, t, r) {
      return (
        "packed" === e && (this._packed = null),
        o.prototype.setOption.call(this, e, t, r)
      );
    }),
    (S.prototype.resolve = function () {
      if (this.resolved) return this;
      if (
        (void 0 === (this.typeDefault = k.defaults[this.type]) &&
          ((this.resolvedType = (
            this.declaringField ? this.declaringField.parent : this.parent
          ).lookupTypeOrEnum(this.type)),
          (this.typeDefault =
            this.resolvedType instanceof w
              ? null
              : this.resolvedType.values[
                  Object.keys(this.resolvedType.values)[0]
                ])),
        this.options &&
          null != this.options.default &&
          ((this.typeDefault = this.options.default),
          this.resolvedType instanceof f &&
            "string" == typeof this.typeDefault &&
            (this.typeDefault = this.resolvedType.values[this.typeDefault])),
        this.options &&
          ((!0 !== this.options.packed &&
            (void 0 === this.options.packed ||
              !this.resolvedType ||
              this.resolvedType instanceof f)) ||
            delete this.options.packed,
          Object.keys(this.options).length || (this.options = void 0)),
        this.long)
      )
        (this.typeDefault = A.Long.fromNumber(
          this.typeDefault,
          "u" === this.type.charAt(0)
        )),
          Object.freeze && Object.freeze(this.typeDefault);
      else if (this.bytes && "string" == typeof this.typeDefault) {
        var e;
        A.base64.test(this.typeDefault)
          ? A.base64.decode(
              this.typeDefault,
              (e = A.newBuffer(A.base64.length(this.typeDefault))),
              0
            )
          : A.utf8.write(
              this.typeDefault,
              (e = A.newBuffer(A.utf8.length(this.typeDefault))),
              0
            ),
          (this.typeDefault = e);
      }
      return (
        (this.defaultValue = this.map
          ? A.emptyObject
          : this.repeated
          ? A.emptyArray
          : this.typeDefault),
        this.parent instanceof w &&
          (this.parent.ctor.prototype[this.name] = this.defaultValue),
        o.prototype.resolve.call(this)
      );
    }),
    (S._configure = function (e) {
      w = e;
    });
  var _,
    x,
    T,
    N = j;
  function j(e, t) {
    o.call(this, e, t), (this.nested = void 0), (this._nestedArray = null);
  }
  (((j.prototype = Object.create(o.prototype)).constructor = j).className =
    "Namespace"),
    (j.fromJSON = function (e, t) {
      return new j(e, t.options).addJSON(t.nested);
    }),
    (j.isReservedId = function (e, t) {
      if (e)
        for (var r = 0; r < e.length; ++r)
          if ("string" != typeof e[r] && e[r][0] <= t && e[r][1] >= t)
            return !0;
      return !1;
    }),
    (j.isReservedName = function (e, t) {
      if (e) for (var r = 0; r < e.length; ++r) if (e[r] === t) return !0;
      return !1;
    }),
    Object.defineProperty(j.prototype, "nestedArray", {
      get: function () {
        return (
          this._nestedArray || (this._nestedArray = A.toArray(this.nested))
        );
      },
    }),
    (j.prototype.addJSON = function (e) {
      if (e)
        for (var t, r = Object.keys(e), i = 0; i < r.length; ++i)
          this.add(
            (void 0 !== (t = e[r[i]]).fields
              ? _.fromJSON
              : void 0 !== t.values
              ? T.fromJSON
              : void 0 !== t.methods
              ? x.fromJSON
              : void 0 !== t.id
              ? O.fromJSON
              : j.fromJSON)(r[i], t)
          );
      return this;
    }),
    (j.prototype.get = function (e) {
      return (this.nested && this.nested[e]) || null;
    }),
    (j.prototype.add = function (e) {
      if (
        !(
          (e instanceof O && void 0 !== e.extend) ||
          e instanceof _ ||
          e instanceof T ||
          e instanceof x ||
          e instanceof j
        )
      )
        throw TypeError("object must be a valid nested object");
      if (this.nested) {
        var t = this.get(e.name);
        if (t) {
          if (
            !(t instanceof j && e instanceof j) ||
            t instanceof _ ||
            t instanceof x
          )
            throw Error("duplicate name '" + e.name + "' in " + this);
          for (var r = t.nestedArray, i = 0; i < r.length; ++i) e.add(r[i]);
          this.remove(t),
            this.nested || (this.nested = {}),
            e.setOptions(t.options, !0);
        }
      } else this.nested = {};
      return (
        (this.nested[e.name] = e),
        e.onAdd(this),
        (function (e) {
          return (e._nestedArray = null), e;
        })(this)
      );
    }),
    (j.prototype.lookup = function (e, t, r) {
      if (
        ("boolean" == typeof t
          ? ((r = t), (t = void 0))
          : t && !Array.isArray(t) && (t = [t]),
        A.isString(e) && e.length)
      ) {
        if ("." === e) return this.root;
        e = e.split(".");
      } else if (!e.length) return this;
      if ("" === e[0]) return this.root.lookup(e.slice(1), t);
      var i = this.get(e[0]);
      if (i) {
        if (1 === e.length) {
          if (!t || t.indexOf(i.constructor) > -1) return i;
        } else if (i instanceof j && (i = i.lookup(e.slice(1), t, !0)))
          return i;
      } else
        for (var s = 0; s < this.nestedArray.length; ++s)
          if (
            this._nestedArray[s] instanceof j &&
            (i = this._nestedArray[s].lookup(e, t, !0))
          )
            return i;
      return null === this.parent || r ? null : this.parent.lookup(e, t);
    }),
    (j.prototype.lookupType = function (e) {
      var t = this.lookup(e, [_]);
      if (!t) throw Error("no such type: " + e);
      return t;
    }),
    (j.prototype.lookupTypeOrEnum = function (e) {
      var t = this.lookup(e, [_, T]);
      if (!t) throw Error("no such Type or Enum '" + e + "' in " + this);
      return t;
    }),
    (j._configure = function (e, t, r) {
      (_ = e), (x = t), (T = r);
    });
  var B = F;
  function F(e, t, r, i) {
    if (
      (Array.isArray(t) || ((r = t), (t = void 0)),
      o.call(this, e, r),
      void 0 !== t && !Array.isArray(t))
    )
      throw TypeError("fieldNames must be an Array");
    (this.oneof = t || []), (this.fieldsArray = []), (this.comment = i);
  }
  function I(e) {
    if (e.parent)
      for (var t = 0; t < e.fieldsArray.length; ++t)
        e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
  }
  (((F.prototype = Object.create(o.prototype)).constructor = F).className =
    "OneOf"),
    (F.fromJSON = function (e, t) {
      return new F(e, t.oneof, t.options, t.comment);
    }),
    (F.prototype.toJSON = function (e) {
      var t = !!e && Boolean(e.keepComments);
      return A.toObject([
        "options",
        this.options,
        "oneof",
        this.oneof,
        "comment",
        t ? this.comment : void 0,
      ]);
    }),
    (F.prototype.add = function (e) {
      if (!(e instanceof O)) throw TypeError("field must be a Field");
      return (
        e.parent && e.parent !== this.parent && e.parent.remove(e),
        this.oneof.push(e.name),
        this.fieldsArray.push(e),
        (e.partOf = this),
        I(this),
        this
      );
    }),
    (F.prototype.remove = function (e) {
      if (!(e instanceof O)) throw TypeError("field must be a Field");
      var t = this.fieldsArray.indexOf(e);
      if (t < 0) throw Error(e + " is not a member of " + this);
      return (
        this.fieldsArray.splice(t, 1),
        (t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1),
        (e.partOf = null),
        this
      );
    }),
    (F.prototype.onAdd = function (e) {
      o.prototype.onAdd.call(this, e);
      for (var t = 0; t < this.oneof.length; ++t) {
        var r = e.get(this.oneof[t]);
        r && !r.partOf && ((r.partOf = this), this.fieldsArray.push(r));
      }
      I(this);
    }),
    (F.prototype.onRemove = function (e) {
      for (var t, r = 0; r < this.fieldsArray.length; ++r)
        (t = this.fieldsArray[r]).parent && t.parent.remove(t);
      o.prototype.onRemove.call(this, e);
    }),
    (F.d = function () {
      for (var e = new Array(arguments.length), t = 0; t < arguments.length; )
        e[t] = arguments[t++];
      return function (t, r) {
        A.decorateType(t.constructor).add(new F(r, e)),
          Object.defineProperty(t, r, {
            get: A.oneOfGetter(e),
            set: A.oneOfSetter(e),
          });
      };
    });
  var D,
    R = M;
  function M(e) {
    N.call(this, "", e), (this.deferred = []), (this.files = []);
  }
  (((M.prototype = Object.create(N.prototype)).constructor = M).className =
    "Root"),
    (M.fromJSON = function (e, t) {
      return (
        t || (t = new M()),
        e.options && t.setOptions(e.options),
        t.addJSON(e.nested)
      );
    });
  var J = /^[A-Z]/;
  function L(e, t) {
    var r = t.parent.lookup(t.extend);
    if (r) {
      var i = new O(t.fullName, t.id, t.type, t.rule, void 0, t.options);
      return (i.declaringField = t), (t.extensionField = i), r.add(i), !0;
    }
    return !1;
  }
  (M.prototype._handleAdd = function (e) {
    if (e instanceof O)
      void 0 === e.extend ||
        e.extensionField ||
        L(0, e) ||
        this.deferred.push(e);
    else if (e instanceof f) J.test(e.name) && (e.parent[e.name] = e.values);
    else if (!(e instanceof B)) {
      if (e instanceof D)
        for (var t = 0; t < this.deferred.length; )
          L(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
      for (var r = 0; r < e.nestedArray.length; ++r)
        this._handleAdd(e._nestedArray[r]);
      J.test(e.name) && (e.parent[e.name] = e);
    }
  }),
    (M._configure = function (e, t, r) {
      D = e;
    });
  var C = P;
  function P(e, t, r, i, s, n) {
    if ((O.call(this, e, t, i, void 0, void 0, s, n), !A.isString(r)))
      throw TypeError("keyType must be a string");
    (this.keyType = r), (this.resolvedKeyType = null), (this.map = !0);
  }
  (((P.prototype = Object.create(O.prototype)).constructor = P).className =
    "MapField"),
    (P.fromJSON = function (e, t) {
      return new P(e, t.id, t.keyType, t.type, t.options, t.comment);
    });
  var U = z;
  function z(e, t) {
    N.call(this, e, t), (this.methods = {}), (this._methodsArray = null);
  }
  ((z.prototype = Object.create(N.prototype)).constructor = z).className =
    "Service";
  var K = G,
    $ = m.utf8;
  function q(e, t) {
    return RangeError(
      "index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len
    );
  }
  function G(e) {
    (this.buf = e), (this.pos = 0), (this.len = e.length);
  }
  var V,
    H =
      "undefined" != typeof Uint8Array
        ? function (e) {
            if (e instanceof Uint8Array || Array.isArray(e)) return new G(e);
            throw Error("illegal buffer");
          }
        : function (e) {
            if (Array.isArray(e)) return new G(e);
            throw Error("illegal buffer");
          };
  function W(e, t) {
    return (
      (e[t - 4] | (e[t - 3] << 8) | (e[t - 2] << 16) | (e[t - 1] << 24)) >>> 0
    );
  }
  function Y(e) {
    return "missing required '" + e.name + "'";
  }
  (G.create = m.Buffer
    ? function (e) {
        return (G.create = function (e) {
          return m.Buffer.isBuffer(e) ? new (void 0)(e) : H(e);
        })(e);
      }
    : H),
    (G.prototype._slice =
      m.Array.prototype.subarray || m.Array.prototype.slice),
    (G.prototype.uint32 =
      ((V = 4294967295),
      function () {
        if (
          ((V = (127 & this.buf[this.pos]) >>> 0), this.buf[this.pos++] < 128)
        )
          return V;
        if (
          ((V = (V | ((127 & this.buf[this.pos]) << 7)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return V;
        if (
          ((V = (V | ((127 & this.buf[this.pos]) << 14)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return V;
        if (
          ((V = (V | ((127 & this.buf[this.pos]) << 21)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return V;
        if (
          ((V = (V | ((15 & this.buf[this.pos]) << 28)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return V;
        if ((this.pos += 5) > this.len)
          throw ((this.pos = this.len), q(this, 10));
        return V;
      })),
    (G.prototype.int32 = function () {
      return 0 | this.uint32();
    }),
    (G.prototype.sint32 = function () {
      var e = this.uint32();
      return ((e >>> 1) ^ -(1 & e)) | 0;
    }),
    (G.prototype.bool = function () {
      return 0 !== this.uint32();
    }),
    (G.prototype.fixed32 = function () {
      if (this.pos + 4 > this.len) throw q(this, 4);
      return W(this.buf, (this.pos += 4));
    }),
    (G.prototype.sfixed32 = function () {
      if (this.pos + 4 > this.len) throw q(this, 4);
      return 0 | W(this.buf, (this.pos += 4));
    }),
    (G.prototype.float = function () {
      if (this.pos + 4 > this.len) throw q(this, 4);
      var e = m.float.readFloatLE(this.buf, this.pos);
      return (this.pos += 4), e;
    }),
    (G.prototype.double = function () {
      if (this.pos + 8 > this.len) throw q(this, 4);
      var e = m.float.readDoubleLE(this.buf, this.pos);
      return (this.pos += 8), e;
    }),
    (G.prototype.bytes = function () {
      var e = this.uint32(),
        t = this.pos,
        r = this.pos + e;
      if (r > this.len) throw q(this, e);
      return (
        (this.pos += e),
        Array.isArray(this.buf)
          ? this.buf.slice(t, r)
          : t === r
          ? new this.buf.constructor(0)
          : this._slice.call(this.buf, t, r)
      );
    }),
    (G.prototype.string = function () {
      var e = this.bytes();
      return $.read(e, 0, e.length);
    }),
    (G.prototype.skip = function (e) {
      if ("number" == typeof e) {
        if (this.pos + e > this.len) throw q(this, e);
        this.pos += e;
      } else
        do {
          if (this.pos >= this.len) throw q(this);
        } while (128 & this.buf[this.pos++]);
      return this;
    }),
    (G.prototype.skipType = function (e) {
      switch (e) {
        case 0:
          this.skip();
          break;
        case 1:
          this.skip(8);
          break;
        case 2:
          this.skip(this.uint32());
          break;
        case 3:
          for (; 4 != (e = 7 & this.uint32()); ) this.skipType(e);
          break;
        case 5:
          this.skip(4);
          break;
        default:
          throw Error("invalid wire type " + e + " at offset " + this.pos);
      }
      return this;
    });
  var X = Q;
  function Q(e, t) {
    N.call(this, e, t),
      (this.fields = {}),
      (this.oneofs = void 0),
      (this.extensions = void 0),
      (this.reserved = void 0),
      (this.group = void 0),
      (this._fieldsById = null),
      (this._fieldsArray = null),
      (this._oneofsArray = null),
      (this._ctor = null);
  }
  (((Q.prototype = Object.create(N.prototype)).constructor = Q).className =
    "Type"),
    Object.defineProperties(Q.prototype, {
      fieldsById: {
        get: function () {
          if (this._fieldsById) return this._fieldsById;
          this._fieldsById = {};
          for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
            var r = this.fields[e[t]],
              i = r.id;
            if (this._fieldsById[i])
              throw Error("duplicate id " + i + " in " + this);
            this._fieldsById[i] = r;
          }
          return this._fieldsById;
        },
      },
      fieldsArray: {
        get: function () {
          return (
            this._fieldsArray || (this._fieldsArray = A.toArray(this.fields))
          );
        },
      },
      oneofsArray: {
        get: function () {
          return (
            this._oneofsArray || (this._oneofsArray = A.toArray(this.oneofs))
          );
        },
      },
      ctor: {
        get: function () {
          return this._ctor || (this.ctor = Q.generateConstructor(this)());
        },
        set: function (e) {
          (e.$type = e.prototype.$type = this), (this._ctor = e);
          for (var t = 0; t < this.fieldsArray.length; ++t)
            this._fieldsArray[t].resolve();
          var r = {};
          for (t = 0; t < this.oneofsArray.length; ++t)
            r[this._oneofsArray[t].resolve().name] = {
              get: A.oneOfGetter(this._oneofsArray[t].oneof),
              set: A.oneOfSetter(this._oneofsArray[t].oneof),
            };
          t && Object.defineProperties(e.prototype, r);
        },
      },
    }),
    (Q.generateConstructor = function (e) {
      for (
        var t, r = A.codegen(["p"], e.name), i = 0;
        i < e.fieldsArray.length;
        ++i
      )
        (t = e._fieldsArray[i]).map
          ? r("this%s={}", A.safeProp(t.name))
          : t.repeated && r("this%s=[]", A.safeProp(t.name));
      return r(
        "if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)"
      )("this[ks[i]]=p[ks[i]]");
    }),
    (Q.fromJSON = function (e, t) {
      var r = new Q(e, t.options);
      (r.extensions = t.extensions), (r.reserved = t.reserved);
      for (var i = Object.keys(t.fields), s = 0; s < i.length; ++s)
        r.add(
          (void 0 !== t.fields[i[s]].keyType ? C.fromJSON : O.fromJSON)(
            i[s],
            t.fields[i[s]]
          )
        );
      if (t.nested)
        for (i = Object.keys(t.nested), s = 0; s < i.length; ++s) {
          var n = t.nested[i[s]];
          r.add(
            (void 0 !== n.id
              ? O.fromJSON
              : void 0 !== n.fields
              ? Q.fromJSON
              : void 0 !== n.values
              ? f.fromJSON
              : void 0 !== n.methods
              ? U.fromJSON
              : N.fromJSON)(i[s], n)
          );
        }
      return (
        t.extensions && t.extensions.length && (r.extensions = t.extensions),
        t.reserved && t.reserved.length && (r.reserved = t.reserved),
        t.group && (r.group = !0),
        t.comment && (r.comment = t.comment),
        r
      );
    }),
    (Q.prototype.add = function (e) {
      if (this.get(e.name))
        throw Error("duplicate name '" + e.name + "' in " + this);
      if (e instanceof O && void 0 === e.extend) {
        if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id])
          throw Error("duplicate id " + e.id + " in " + this);
        if (this.isReservedId(e.id))
          throw Error("id " + e.id + " is reserved in " + this);
        if (this.isReservedName(e.name))
          throw Error("name '" + e.name + "' is reserved in " + this);
        return (
          e.parent && e.parent.remove(e),
          (this.fields[e.name] = e),
          (e.message = this),
          e.onAdd(this),
          (function (e) {
            return (
              (e._fieldsById = e._fieldsArray = e._oneofsArray = null),
              delete e.encode,
              delete e.decode,
              delete e.verify,
              e
            );
          })(this)
        );
      }
      return N.prototype.add.call(this, e);
    }),
    (Q.prototype.isReservedId = function (e) {
      return N.isReservedId(this.reserved, e);
    }),
    (Q.prototype.isReservedName = function (e) {
      return N.isReservedName(this.reserved, e);
    }),
    (Q.prototype.setup = function () {
      for (var e = [], t = 0; t < this.fieldsArray.length; ++t)
        e.push(this._fieldsArray[t].resolve().resolvedType);
      return (
        (this.decode = (function (e) {
          var t = A.codegen(
            ["r", "l"],
            e.name + "$decode"
          )("if(!(r instanceof Reader))")("r=Reader.create(r)")(
            "var c=l===undefined?r.len:r.pos+l,m=new this.ctor" +
              (e.fieldsArray.filter(function (e) {
                return e.map;
              }).length
                ? ",k"
                : "")
          )("while(r.pos<c){")("var t=r.uint32()");
          e.group && t("if((t&7)===4)")("break"), t("switch(t>>>3){");
          for (var r = 0; r < e.fieldsArray.length; ++r) {
            var i = e._fieldsArray[r].resolve(),
              s = i.resolvedType instanceof f ? "int32" : i.type,
              n = "m" + A.safeProp(i.name);
            t("case %i:", i.id),
              i.map
                ? (t("r.skip().pos++")("if(%s===util.emptyObject)", n)(
                    "%s={}",
                    n
                  )(
                    "k=r.%s()",
                    i.keyType
                  )("r.pos++"),
                  void 0 !== k.long[i.keyType]
                    ? void 0 === k.basic[s]
                      ? t(
                          '%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())',
                          n,
                          r
                        )
                      : t(
                          '%s[typeof k==="object"?util.longToHash(k):k]=r.%s()',
                          n,
                          s
                        )
                    : void 0 === k.basic[s]
                    ? t("%s[k]=types[%i].decode(r,r.uint32())", n, r)
                    : t("%s[k]=r.%s()", n, s))
                : i.repeated
                ? (t("if(!(%s&&%s.length))", n, n)("%s=[]", n),
                  void 0 !== k.packed[s] &&
                    t("if((t&7)===2){")("var c2=r.uint32()+r.pos")(
                      "while(r.pos<c2)"
                    )(
                      "%s.push(r.%s())",
                      n,
                      s
                    )("}else"),
                  void 0 === k.basic[s]
                    ? t(
                        i.resolvedType.group
                          ? "%s.push(types[%i].decode(r))"
                          : "%s.push(types[%i].decode(r,r.uint32()))",
                        n,
                        r
                      )
                    : t("%s.push(r.%s())", n, s))
                : void 0 === k.basic[s]
                ? t(
                    i.resolvedType.group
                      ? "%s=types[%i].decode(r)"
                      : "%s=types[%i].decode(r,r.uint32())",
                    n,
                    r
                  )
                : t("%s=r.%s()", n, s),
              t("break");
          }
          for (
            t("default:")("r.skipType(t&7)")("break")("}")("}"), r = 0;
            r < e._fieldsArray.length;
            ++r
          ) {
            var o = e._fieldsArray[r];
            o.required &&
              t("if(!m.hasOwnProperty(%j))", o.name)(
                "throw util.ProtocolError(%j,{instance:m})",
                Y(o)
              );
          }
          return t("return m");
        })(this)({ Reader: K, types: e, util: A })),
        this
      );
    }),
    (Q.prototype.decode = function (e, t) {
      return this.setup().decode(e, t);
    });
  var Z = i(function (e) {
      var t = (e.exports = n);
      (t.build = "light"),
        (t.ReflectionObject = o),
        (t.Namespace = N),
        (t.Root = R),
        (t.Enum = f),
        (t.Type = X),
        (t.Field = O),
        (t.Service = U),
        t.ReflectionObject._configure(t.Root),
        t.Namespace._configure(t.Type, t.Service, t.Enum),
        t.Root._configure(t.Type),
        t.Field._configure(t.Type);
    }),
    ee = i(function (e) {
      (e.exports = Z).build = "full";
    }),
    te = JSON.parse(
      '{"nested":{"com":{"nested":{"opensource":{"nested":{"svga":{"options":{"objc_class_prefix":"SVGAProto","java_package":"com.opensource.svgaplayer.proto"},"nested":{"MovieParams":{"fields":{"viewBoxWidth":{"type":"float","id":1},"viewBoxHeight":{"type":"float","id":2},"fps":{"type":"int32","id":3},"frames":{"type":"int32","id":4}}},"SpriteEntity":{"fields":{"imageKey":{"type":"string","id":1},"frames":{"rule":"repeated","type":"FrameEntity","id":2},"matteKey":{"type":"string","id":3}}},"AudioEntity":{"fields":{"audioKey":{"type":"string","id":1},"startFrame":{"type":"int32","id":2},"endFrame":{"type":"int32","id":3},"startTime":{"type":"int32","id":4},"totalTime":{"type":"int32","id":5}}},"Layout":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4}}},"Transform":{"fields":{"a":{"type":"float","id":1},"b":{"type":"float","id":2},"c":{"type":"float","id":3},"d":{"type":"float","id":4},"tx":{"type":"float","id":5},"ty":{"type":"float","id":6}}},"ShapeEntity":{"oneofs":{"args":{"oneof":["shape","rect","ellipse"]}},"fields":{"type":{"type":"ShapeType","id":1},"shape":{"type":"ShapeArgs","id":2},"rect":{"type":"RectArgs","id":3},"ellipse":{"type":"EllipseArgs","id":4},"styles":{"type":"ShapeStyle","id":10},"transform":{"type":"Transform","id":11}},"nested":{"ShapeType":{"values":{"SHAPE":0,"RECT":1,"ELLIPSE":2,"KEEP":3}},"ShapeArgs":{"fields":{"d":{"type":"string","id":1}}},"RectArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4},"cornerRadius":{"type":"float","id":5}}},"EllipseArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"radiusX":{"type":"float","id":3},"radiusY":{"type":"float","id":4}}},"ShapeStyle":{"fields":{"fill":{"type":"RGBAColor","id":1},"stroke":{"type":"RGBAColor","id":2},"strokeWidth":{"type":"float","id":3},"lineCap":{"type":"LineCap","id":4},"lineJoin":{"type":"LineJoin","id":5},"miterLimit":{"type":"float","id":6},"lineDashI":{"type":"float","id":7},"lineDashII":{"type":"float","id":8},"lineDashIII":{"type":"float","id":9}},"nested":{"RGBAColor":{"fields":{"r":{"type":"float","id":1},"g":{"type":"float","id":2},"b":{"type":"float","id":3},"a":{"type":"float","id":4}}},"LineCap":{"values":{"LineCap_BUTT":0,"LineCap_ROUND":1,"LineCap_SQUARE":2}},"LineJoin":{"values":{"LineJoin_MITER":0,"LineJoin_ROUND":1,"LineJoin_BEVEL":2}}}}}},"FrameEntity":{"fields":{"alpha":{"type":"float","id":1},"layout":{"type":"Layout","id":2},"transform":{"type":"Transform","id":3},"clipPath":{"type":"string","id":4},"shapes":{"rule":"repeated","type":"ShapeEntity","id":5}}},"MovieEntity":{"fields":{"version":{"type":"string","id":1},"params":{"type":"MovieParams","id":2},"images":{"keyType":"string","type":"bytes","id":3},"sprites":{"rule":"repeated","type":"SpriteEntity","id":4},"audios":{"rule":"repeated","type":"AudioEntity","id":5}}}}}}}}}}}'
    ),
    re = ee.Root.fromJSON(te).lookupType("com.opensource.svga.MovieEntity"),
    ie = (function () {
      function e(e, t) {
        (this.version = ""),
          (this.videoSize = { width: 0, height: 0 }),
          (this.FPS = 20),
          (this.frames = 0),
          (this.images = {}),
          (this.sprites = []),
          (this.audios = []),
          "object" == typeof e && e.$type == re
            ? ("object" == typeof e.params &&
                ((this.version = e.ver),
                (this.videoSize.width = e.params.viewBoxWidth || 0),
                (this.videoSize.height = e.params.viewBoxHeight || 0),
                (this.FPS = e.params.fps || 20),
                (this.frames = e.params.frames || 0)),
              this.resetSprites(e),
              (this.audios = e.audios))
            : e &&
              (e.movie &&
                (e.movie.viewBox &&
                  ((this.videoSize.width =
                    parseFloat(e.movie.viewBox.width) || 0),
                  (this.videoSize.height =
                    parseFloat(e.movie.viewBox.height) || 0)),
                (this.version = e.ver),
                (this.FPS = parseInt(e.movie.fps) || 20),
                (this.frames = parseInt(e.movie.frames) || 0)),
              this.resetSprites(e)),
          t && (this.images = t);
      }
      return (
        (e.prototype.resetSprites = function (e) {
          e.sprites instanceof Array &&
            (this.sprites = e.sprites.map(function (e) {
              return new r(e);
            }));
        }),
        e
      );
    })(),
    se = Uint8Array,
    ne = Uint16Array,
    oe = Uint32Array,
    ae = new se([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    fe = new se([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    le = new se([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    he = function (e, t) {
      for (var r = new ne(31), i = 0; i < 31; ++i) r[i] = t += 1 << e[i - 1];
      var s = new oe(r[30]);
      for (i = 1; i < 30; ++i)
        for (var n = r[i]; n < r[i + 1]; ++n) s[n] = ((n - r[i]) << 5) | i;
      return [r, s];
    },
    pe = he(ae, 2),
    ue = pe[0],
    de = pe[1];
  (ue[28] = 258), (de[258] = 28);
  for (var ye = he(fe, 0)[0], ce = new ne(32768), ve = 0; ve < 32768; ++ve) {
    var me = ((43690 & ve) >>> 1) | ((21845 & ve) << 1);
    ce[ve] =
      (((65280 &
        (me =
          ((61680 & (me = ((52428 & me) >>> 2) | ((13107 & me) << 2))) >>> 4) |
          ((3855 & me) << 4))) >>>
        8) |
        ((255 & me) << 8)) >>>
      1;
  }
  var ge = function (e, t, r) {
      for (var i = e.length, s = 0, n = new ne(t); s < i; ++s)
        e[s] && ++n[e[s] - 1];
      var o,
        a = new ne(t);
      for (s = 0; s < t; ++s) a[s] = (a[s - 1] + n[s - 1]) << 1;
      if (r) {
        o = new ne(1 << t);
        var f = 15 - t;
        for (s = 0; s < i; ++s)
          if (e[s])
            for (
              var l = (s << 4) | e[s],
                h = t - e[s],
                p = a[e[s] - 1]++ << h,
                u = p | ((1 << h) - 1);
              p <= u;
              ++p
            )
              o[ce[p] >>> f] = l;
      } else
        for (o = new ne(i), s = 0; s < i; ++s)
          e[s] && (o[s] = ce[a[e[s] - 1]++] >>> (15 - e[s]));
      return o;
    },
    be = new se(288);
  for (ve = 0; ve < 144; ++ve) be[ve] = 8;
  for (ve = 144; ve < 256; ++ve) be[ve] = 9;
  for (ve = 256; ve < 280; ++ve) be[ve] = 7;
  for (ve = 280; ve < 288; ++ve) be[ve] = 8;
  var we = new se(32);
  for (ve = 0; ve < 32; ++ve) we[ve] = 5;
  var Ae = ge(be, 9, 1),
    ke = ge(we, 5, 1),
    Oe = function (e) {
      for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
      return t;
    },
    Ee = function (e, t, r) {
      var i = (t / 8) | 0;
      return ((e[i] | (e[i + 1] << 8)) >> (7 & t)) & r;
    },
    Se = function (e, t) {
      var r = (t / 8) | 0;
      return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (7 & t);
    },
    _e = [
      "unexpected EOF",
      "invalid block type",
      "invalid length/literal",
      "invalid distance",
      "stream finished",
      "no stream handler",
      ,
      "no callback",
      "invalid UTF-8 data",
      "extra field too long",
      "date not in range 1980-2099",
      "filename too long",
      "stream finishing",
      "invalid zip data",
    ],
    xe = function (e, t, r) {
      var i = new Error(t || _e[e]);
      if (
        ((i.code = e),
        Error.captureStackTrace && Error.captureStackTrace(i, xe),
        !r)
      )
        throw i;
      return i;
    },
    Te = new se(0),
    Ne = "undefined" != typeof TextDecoder && new TextDecoder();
  try {
    Ne.decode(Te, { stream: !0 });
  } catch (e) {}
  var je = self.DecompressionStream
      ? function (e, t) {
          try {
            var r = new DecompressionStream("deflate"),
              i = new Blob([e]).stream().pipeThrough(r);
            new Response(i).arrayBuffer().then(function (e) {
              return t(null, new Uint8Array(e));
            }, t);
          } catch (e) {
            t(e);
          }
        }
      : function (e, t) {
          var r;
          try {
            r = (function (e, t) {
              return (function (e, t, r) {
                var i = e.length;
                if (!i || (r && r.f && !r.l)) return t || new se(0);
                var s = !t || r,
                  n = !r || r.i;
                r || (r = {}), t || (t = new se(3 * i));
                var o = function (e) {
                    var r = t.length;
                    if (e > r) {
                      var i = new se(Math.max(2 * r, e));
                      i.set(t), (t = i);
                    }
                  },
                  a = r.f || 0,
                  f = r.p || 0,
                  l = r.b || 0,
                  h = r.l,
                  p = r.d,
                  u = r.m,
                  d = r.n,
                  y = 8 * i;
                do {
                  if (!h) {
                    a = Ee(e, f, 1);
                    var c = Ee(e, f + 1, 3);
                    if (((f += 3), !c)) {
                      var v =
                          e[(x = 4 + (((f + 7) / 8) | 0)) - 4] |
                          (e[x - 3] << 8),
                        m = x + v;
                      if (m > i) {
                        n && xe(0);
                        break;
                      }
                      s && o(l + v),
                        t.set(e.subarray(x, m), l),
                        (r.b = l += v),
                        (r.p = f = 8 * m),
                        (r.f = a);
                      continue;
                    }
                    if (1 == c) (h = Ae), (p = ke), (u = 9), (d = 5);
                    else if (2 == c) {
                      var g = Ee(e, f, 31) + 257,
                        b = Ee(e, f + 10, 15) + 4,
                        w = g + Ee(e, f + 5, 31) + 1;
                      f += 14;
                      for (var A = new se(w), k = new se(19), O = 0; O < b; ++O)
                        k[le[O]] = Ee(e, f + 3 * O, 7);
                      f += 3 * b;
                      var E = Oe(k),
                        S = (1 << E) - 1,
                        _ = ge(k, E, 1);
                      for (O = 0; O < w; ) {
                        var x,
                          T = _[Ee(e, f, S)];
                        if (((f += 15 & T), (x = T >>> 4) < 16)) A[O++] = x;
                        else {
                          var N = 0,
                            j = 0;
                          for (
                            16 == x
                              ? ((j = 3 + Ee(e, f, 3)),
                                (f += 2),
                                (N = A[O - 1]))
                              : 17 == x
                              ? ((j = 3 + Ee(e, f, 7)), (f += 3))
                              : 18 == x && ((j = 11 + Ee(e, f, 127)), (f += 7));
                            j--;

                          )
                            A[O++] = N;
                        }
                      }
                      var B = A.subarray(0, g),
                        F = A.subarray(g);
                      (u = Oe(B)),
                        (d = Oe(F)),
                        (h = ge(B, u, 1)),
                        (p = ge(F, d, 1));
                    } else xe(1);
                    if (f > y) {
                      n && xe(0);
                      break;
                    }
                  }
                  s && o(l + 131072);
                  for (var I = (1 << u) - 1, D = (1 << d) - 1, R = f; ; R = f) {
                    var M = (N = h[Se(e, f) & I]) >>> 4;
                    if ((f += 15 & N) > y) {
                      n && xe(0);
                      break;
                    }
                    if ((N || xe(2), M < 256)) t[l++] = M;
                    else {
                      if (256 == M) {
                        (R = f), (h = null);
                        break;
                      }
                      var J = M - 254;
                      M > 264 &&
                        ((J =
                          Ee(e, f, (1 << (P = ae[(O = M - 257)])) - 1) + ue[O]),
                        (f += P));
                      var L = p[Se(e, f) & D],
                        C = L >>> 4;
                      if ((L || xe(3), (f += 15 & L), (F = ye[C]), C > 3)) {
                        var P = fe[C];
                        (F += Se(e, f) & ((1 << P) - 1)), (f += P);
                      }
                      if (f > y) {
                        n && xe(0);
                        break;
                      }
                      s && o(l + 131072);
                      for (var U = l + J; l < U; l += 4)
                        (t[l] = t[l - F]),
                          (t[l + 1] = t[l + 1 - F]),
                          (t[l + 2] = t[l + 2 - F]),
                          (t[l + 3] = t[l + 3 - F]);
                      l = U;
                    }
                  }
                  (r.l = h),
                    (r.p = R),
                    (r.b = l),
                    (r.f = a),
                    h && ((a = 1), (r.m = u), (r.d = p), (r.n = d));
                } while (!a);
                return l == t.length
                  ? t
                  : (function (e, t, r) {
                      (null == t || t < 0) && (t = 0),
                        (null == r || r > e.length) && (r = e.length);
                      var i = new (
                        2 == e.BYTES_PER_ELEMENT
                          ? ne
                          : 4 == e.BYTES_PER_ELEMENT
                          ? oe
                          : se
                      )(r - t);
                      return i.set(e.subarray(t, r)), i;
                    })(t, 0, l);
              })(
                ((8 != (15 & (r = e)[0]) ||
                  r[0] >>> 4 > 7 ||
                  ((r[0] << 8) | r[1]) % 31) &&
                  xe(6, "invalid zlib data"),
                32 & r[1] &&
                  xe(6, "invalid zlib data: preset dictionaries not supported"),
                e.subarray(2, -4)),
                void 0
              );
              var r;
            })(e);
          } catch (e) {
            return void t(e);
          }
          t(null, r);
        },
    Be = new ((function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.load = function (e, t, r) {
          this.loadViaWorker(e, t, r);
        }),
        (t.loadViaWorker = function (e, t, r) {
          !(function (e, t, r) {
            var i = new XMLHttpRequest();
            i.open("GET", e, !0),
              (i.responseType = "arraybuffer"),
              (i.onload = function () {
                !(function (e, t, r) {
                  var i = function (e) {
                    if (!r) throw (console.error(e), e);
                    r(e);
                  };
                  je(new Uint8Array(e), function (e, r) {
                    if (e) i(e);
                    else
                      try {
                        var s = re.decode(r),
                          n = {};
                        !(function (e, t, r) {
                          if ("object" == typeof t && t.$type == re) {
                            var i = [],
                              s = function (r) {
                                if (t.images.hasOwnProperty(r)) {
                                  var s = t.images[r];
                                  if (
                                    self.createImageBitmap &&
                                    (s.length < 6 ||
                                      !(function (e, t) {
                                        for (var r = 0; r < t.length; r++)
                                          if (t[r] !== e[r]) return !1;
                                        return !0;
                                      })(
                                        new Uint16Array(s.buffer, 0, 3),
                                        [73, 68, 51]
                                      ))
                                  )
                                    i.push(
                                      createImageBitmap(new Blob([s])).then(
                                        function (t) {
                                          return (e[r] = t), t;
                                        }
                                      )
                                    );
                                  else {
                                    var n = (function (e) {
                                      for (
                                        var t = [], r = 0;
                                        r < e.length;
                                        r += 32768
                                      )
                                        t.push(
                                          String.fromCharCode.apply(
                                            null,
                                            e.subarray(r, r + 32768)
                                          )
                                        );
                                      return t.join("");
                                    })(s);
                                    e[r] = btoa(n);
                                  }
                                }
                              };
                            for (var n in t.images) s(n);
                            i.length > 0
                              ? Promise.all(i).then(function (e) {
                                  r(e);
                                })
                              : r();
                          }
                        })(n, s, function (e) {
                          (s.ver = "2.0"),
                            t({ movie: s, images: n, imageBitMaps: e });
                        });
                      } catch (e) {
                        i(e);
                      }
                  });
                })(i.response, t, r);
              }),
              (i.onerror = function (e) {
                if (!r) throw (console.error(e), e);
                r(e);
              }),
              i.send();
          })(
            e,
            function (e) {
              var r = e.movie;
              r.version = e.ver;
              var i = new ie(r, e.images);
              t(i, e.imageBitMaps);
            },
            r
          );
        }),
        e
      );
    })())();
  (self.onmessage = function (e) {
    var t = e.data;
    if (t) {
      var r = t.id;
      if ("load" === t.type) {
        var i = t.url;
        try {
          Be.load(
            i,
            function (e, t) {
              var i = { type: "loaded", id: r, video: e };
              t && t.length > 0 ? postMessage(i, t) : postMessage(i);
            },
            function (e) {
              postMessage({ type: "loaderror", id: r, error: "" + e });
            }
          );
        } catch (e) {
          postMessage({ type: "loaderror", id: r, error: "" + e });
        }
      }
    }
  }),
    postMessage({ type: "inited" });
})();
