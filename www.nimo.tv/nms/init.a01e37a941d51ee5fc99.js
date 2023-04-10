(window.webpackJsonp = window.webpackJsonp || []).push([
  ["46981"],
  {
    "+Nu2": function (t, n) {
      (t.exports = function (t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    "0Xft": function (t, n, e) {
      "use strict";
      var r;
      e.d(n, "a", function () {
        return i;
      }),
        e.d(n, "b", function () {
          return u;
        });
      var o = function () {
          return (
            r ||
              "function" !== typeof window.BroadcastChannel ||
              (r = new BroadcastChannel("nimo-auth")),
            r
          );
        },
        i = function () {
          try {
            var t = o();
            t && t.postMessage({ type: "update" });
          } catch (n) {}
        },
        u = function (t) {
          var n = o();
          return n
            ? (n.addEventListener("message", t),
              function () {
                n.removeEventListener("message", t);
              })
            : function () {};
        };
    },
    "0eRt": function (t, n, e) {
      "use strict";
      function r(t) {
        if (Array.isArray(t)) return t;
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    "0sLj": function (t, n, e) {
      t.exports = (function () {
        "use strict";
        var t = {
          Wup: function () {
            (this.iVersion = 3),
              (this.cPacketType = 0),
              (this.iMessageType = 0),
              (this.iRequestId = 0),
              (this.sServantName = ""),
              (this.sFuncName = ""),
              (this.sBuffer = new t.BinBuffer()),
              (this.iTimeout = 0),
              (this.context = new t.Map(new t.STRING(), new t.STRING())),
              (this.status = new t.Map(new t.STRING(), new t.STRING())),
              (this.data = new t.Map(
                new t.STRING(),
                new t.Map(new t.STRING(), new t.BinBuffer())
              )),
              (this.newdata = new t.Map(new t.STRING(), new t.BinBuffer()));
          },
        };
        (t.Wup.prototype.setVersion = function (t) {
          this.iVersion = t;
        }),
          (t.Wup.prototype.getVersion = function (t) {
            return this.iVersion;
          }),
          (t.Wup.prototype.setServant = function (t) {
            this.sServantName = t;
          }),
          (t.Wup.prototype.setFunc = function (t) {
            this.sFuncName = t;
          }),
          (t.Wup.prototype.setRequestId = function (t) {
            this.iRequestId = t || ++this.iRequestId;
          }),
          (t.Wup.prototype.getRequestId = function () {
            return this.iRequestId;
          }),
          (t.Wup.prototype.setTimeOut = function (t) {
            this.iTimeout = t;
          }),
          (t.Wup.prototype.getTimeOut = function () {
            return this.iTimeout;
          }),
          (t.Wup.prototype.writeTo = function () {
            var n = new t.JceOutputStream();
            return (
              n.writeInt16(1, this.iVersion),
              n.writeInt8(2, this.cPacketType),
              n.writeInt32(3, this.iMessageType),
              n.writeInt32(4, this.iRequestId),
              n.writeString(5, this.sServantName),
              n.writeString(6, this.sFuncName),
              n.writeBytes(7, this.sBuffer),
              n.writeInt32(8, this.iTimeout),
              n.writeMap(9, this.context),
              n.writeMap(10, this.status),
              new t.BinBuffer(n.getBuffer())
            );
          }),
          (t.Wup.prototype.encode = function () {
            var n = new t.JceOutputStream();
            3 == this.iVersion
              ? n.writeMap(0, this.newdata)
              : n.writeMap(0, this.data),
              (this.sBuffer = n.getBinBuffer());
            var e = new t.BinBuffer();
            e = this.writeTo();
            var r = new t.BinBuffer();
            return r.writeInt32(4 + e.len), r.writeBytes(e), r;
          }),
          (t.Wup.prototype.writeBoolean = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeBoolean(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n),
                i = TAF.TypeHelp.BOOLEAN;
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new t.BinBuffer(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeInt8 = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeInt8(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n),
                i = TAF.TypeHelp.CHAR;
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new t.BinBuffer(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeInt16 = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeInt16(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n),
                i = TAF.TypeHelp.SHORT;
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeInt32 = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeInt32(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n),
                i = TAF.TypeHelp.INT32;
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeInt64 = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeInt64(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n),
                i = TAF.TypeHelp.INT64;
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeFloat = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeFloat(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n),
                i = TAF.TypeHelp.FLOAT;
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeDouble = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeDouble(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n),
                i = TAF.TypeHelp.DOUBLE;
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeString = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeString(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n),
                i = t.TypeHelp.STRING;
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeVector = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeVector(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBinBuffer()));
            else {
              var o = this.data.get(n),
                i = e._className();
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeStruct = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeStruct(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n);
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(" ", new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeBytes = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeBytes(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n);
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put("vec", new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.writeMap = function (n, e) {
            var r = new t.JceOutputStream();
            if ((r.writeMap(0, e), 3 == this.iVersion))
              this.newdata.put(n, new t.BinBuffer(r.getBuffer()));
            else {
              var o = this.data.get(n),
                i = t.Util.getClassType(e);
              null == o && (o = new t.Map(t.STRING, t.STRING)),
                o.put(i, new Uint8Array(r.getBuffer())),
                this.data.put(n, o);
            }
          }),
          (t.Wup.prototype.readFrom = function (n) {
            (this.iVersion = n.readInt16(1, !0)),
              (this.cPacketType = n.readInt8(2, !0)),
              (this.iMessageType = n.readInt32(3, !0)),
              (this.iRequestId = n.readInt32(4, !0)),
              (this.sServantName = n.readString(5, !0)),
              (this.sFuncName = n.readString(6, !0)),
              (this.sBuffer = n.readBytes(7, !0)),
              (this.iTimeout = n.readInt32(8, !0)),
              (this.context = n.readMap(
                9,
                !0,
                new t.Map(new t.STRING(), new t.STRING())
              )),
              (this.status = n.readMap(
                10,
                !0,
                new t.Map(new t.STRING(), new t.STRING())
              ));
          }),
          (t.Wup.prototype.decode = function (n) {
            var e = new t.JceInputStream(n);
            if (e.buf.vew.getInt32(e.buf.position) < 4)
              throw Error("packet length too short");
            (e.buf.position += 4),
              this.readFrom(e),
              (e = new t.JceInputStream(this.sBuffer.getBuffer())),
              3 == this.iVersion
                ? (this.newdata.clear(), e.readMap(0, !0, this.newdata))
                : (this.data.clear(), e.readMap(0, !0, this.data));
          }),
          (t.Wup.prototype.readBoolean = function (n) {
            var e, r;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              r = new t.JceInputStream(e.buffer).readBoolean(0, !0, r);
            } else {
              if (null == (e = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var o = t.TypeHelp.BOOLEAN,
                i = e.get(o);
              if (null == i) throw Error("UniAttribute not found type:" + o);
              r = new t.JceInputStream(i).readBoolean(0, !0, r);
            }
            return r;
          }),
          (t.Wup.prototype.readInt8 = function (n) {
            var e, r;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              r = new t.JceInputStream(e.buffer).readInt8(0, !0, r);
            } else {
              if (null == (e = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var o = t.TypeHelp.CHAR,
                i = e.get(o);
              if (null == i) throw Error("UniAttribute not found type:" + o);
              r = new t.JceInputStream(i).readInt8(0, !0, r);
            }
            return r;
          }),
          (t.Wup.prototype.readInt16 = function (n) {
            var e, r;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              r = (u = new t.JceInputStream(e.buffer)).readInt16(0, !0, r);
            } else {
              if (null == (e = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var o = t.TypeHelp.SHORT,
                i = e.get(o),
                u = new t.JceInputStream(i);
              if (null == i) throw Error("UniAttribute not found type:" + o);
              r = u.readInt16(0, !0, r);
            }
            return r;
          }),
          (t.Wup.prototype.readInt32 = function (n) {
            var e, r;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              r = new t.JceInputStream(e.buffer).readInt32(0, !0, r);
            } else {
              if (null == (e = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var o = t.TypeHelp.INT32,
                i = e.get(o);
              if (null == i) throw Error("UniAttribute not found type:" + o);
              r = new t.JceInputStream(i).readInt32(0, !0, r);
            }
            return r;
          }),
          (t.Wup.prototype.readInt64 = function (n) {
            var e, r;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              r = new t.JceInputStream(e.buffer).readInt64(0, !0, r);
            } else {
              if (null == (e = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var o = t.TypeHelp.INT64,
                i = e.get(o);
              if (null == i) throw Error("UniAttribute not found type:" + o);
              r = new t.JceInputStream(i).readInt64(0, !0, r);
            }
            return r;
          }),
          (t.Wup.prototype.readFloat = function (n) {
            var e, r;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              r = new t.JceInputStream(e.buffer).readFloat(0, !0, r);
            } else {
              if (null == (e = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var o = t.TypeHelp.FLOAT,
                i = e.get(o);
              if (null == i) throw Error("UniAttribute not found type:" + o);
              r = new t.JceInputStream(i).readFloat(0, !0, r);
            }
            return r;
          }),
          (t.Wup.prototype.readDouble = function (n) {
            var e;
            if (3 == this.iVersion) {
              if (null == (e = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var r = new t.JceInputStream(e.buffer);
              def = r.readDouble(0, !0, def);
            } else {
              if (null == (e = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var o = t.TypeHelp.DOUBLE,
                i = e.get(o);
              if (null == i) throw Error("UniAttribute not found type:" + o);
              (r = new t.JceInputStream(i)), (def = r.readDouble(0, !0, def));
            }
            return def;
          }),
          (t.Wup.prototype.readVector = function (n, e, r) {
            var o;
            if (3 == this.iVersion) {
              if (null == (o = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              e = new t.JceInputStream(o.buffer).readVector(0, !0, e);
            } else {
              if (null == (o = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var i = o.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              e = new t.JceInputStream(i).readVector(0, !0, e);
            }
            return e;
          }),
          (t.Wup.prototype.readStruct = function (n, e, r) {
            var o;
            if (3 == this.iVersion) {
              if (null == (o = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              e = new t.JceInputStream(o.buffer).readStruct(0, !0, e);
            } else {
              if (null == (o = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var i = o.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              e = new t.JceInputStream(i).readStruct(0, !0, e);
            }
            return e;
          }),
          (t.Wup.prototype.readMap = function (n, e, r) {
            var o;
            if (3 == this.iVersion) {
              if (null == (o = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              e = new t.JceInputStream(o.buffer).readMap(0, !0, e);
            } else {
              if (null == (o = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var i = o.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              e = new t.JceInputStream(i).readMap(0, !0, e);
            }
            return e;
          }),
          (t.Wup.prototype.readBytes = function (n, e, r) {
            var o;
            if (3 == this.iVersion) {
              if (null == (o = this.newdata.get(n)))
                throw Error("UniAttribute not found key:" + n);
              e = new t.JceInputStream(o.buffer).readBytes(0, !0, e);
            } else {
              if (null == (o = this.data.get(n)))
                throw Error("UniAttribute not found key:" + n);
              var i = o.get(r);
              if (null == i) throw Error("UniAttribute not found type:" + r);
              e = new t.JceInputStream(i).readBytes(0, !0, e);
            }
            return e;
          }),
          (t.DataHelp = {
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
          (t.TypeHelp = {
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
          (t.BinBuffer = function (n) {
            (this.buf = null),
              (this.vew = null),
              (this.len = 0),
              (this.position = 0),
              null != n &&
                null != n &&
                n instanceof t.BinBuffer &&
                ((this.buf = n.buf),
                (this.vew = new DataView(this.buf)),
                (this.len = n.length),
                (this.position = n.position)),
              null != n &&
                null != n &&
                n instanceof ArrayBuffer &&
                ((this.buf = n),
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
          (t.BinBuffer.prototype._write = function (t, n, e) {
            return t.writeBytes(n, e);
          }),
          (t.BinBuffer.prototype._read = function (t, n, e) {
            return t.readBytes(n, !0, e);
          }),
          (t.BinBuffer.prototype._clone = function () {
            return new t.BinBuffer();
          }),
          (t.BinBuffer.prototype.allocate = function (t) {
            if (
              ((t = this.position + t),
              !(null != this.buf && this.buf.length > t))
            ) {
              var n = new ArrayBuffer(Math.max(256, 2 * t));
              null != this.buf &&
                (new Uint8Array(n).set(new Uint8Array(this.buf)),
                (this.buf = void 0)),
                (this.buf = n),
                (this.vew = void 0),
                (this.vew = new DataView(this.buf));
            }
          }),
          (t.BinBuffer.prototype.getBuffer = function () {
            var t = new ArrayBuffer(this.len);
            return (
              new Uint8Array(t).set(new Uint8Array(this.buf, 0, this.len)), t
            );
          }),
          (t.BinBuffer.prototype.memset = function (t, n, e) {
            this.allocate(e),
              new Uint8Array(this.buf).set(
                new Uint8Array(t, n, e),
                this.position
              );
          }),
          (t.BinBuffer.prototype.writeInt8 = function (t) {
            this.allocate(1),
              this.vew.setInt8(this.position, t),
              (this.position += 1),
              (this.len = this.position);
          }),
          (t.BinBuffer.prototype.writeUInt8 = function (t) {
            this.allocate(1),
              this.vew.setUint8(this.position++, t),
              (this.len = this.position);
          }),
          (t.BinBuffer.prototype.writeInt16 = function (t) {
            this.allocate(2),
              this.vew.setInt16(this.position, t),
              (this.position += 2),
              (this.len = this.position);
          }),
          (t.BinBuffer.prototype.writeUInt16 = function (t) {
            this.allocate(2),
              this.vew.setUint16(this.position, t),
              (this.position += 2),
              (this.len = this.position);
          }),
          (t.BinBuffer.prototype.writeInt32 = function (t) {
            this.allocate(4),
              this.vew.setInt32(this.position, t),
              (this.position += 4),
              (this.len = this.position);
          }),
          (t.BinBuffer.prototype.writeUInt32 = function (t) {
            this.allocate(4),
              this.vew.setUint32(this.position, t),
              (this.position += 4),
              (this.len = this.position);
          }),
          (t.BinBuffer.prototype.writeInt64 = function (t) {
            if ("string" == typeof t) {
              this.allocate(8), (t = t.toLowerCase());
              for (var n = 4294967296, e = 0, r = 0, o = 0; o < t.length; o++) {
                var i = t.charCodeAt(o) - 48;
                9 < i && (i -= 39),
                  (e = 10 * e + i),
                  (r = 10 * r + Math.floor(e / n)),
                  (e %= n);
              }
              return (
                this.vew.setUint32(this.position, r),
                this.vew.setUint32(this.position + 4, e),
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
          (t.BinBuffer.prototype.writeFloat = function (t) {
            this.allocate(4),
              this.vew.setFloat32(this.position, t),
              (this.position += 4),
              (this.len = this.position);
          }),
          (t.BinBuffer.prototype.writeDouble = function (t) {
            this.allocate(8),
              this.vew.setFloat64(this.position, t),
              (this.position += 8),
              (this.len = this.position);
          }),
          (t.BinBuffer.prototype.writeString = function (t) {
            for (var n = [], e = 0; e < t.length; e++)
              n.push(255 & t.charCodeAt(e));
            this.allocate(n.length),
              new Uint8Array(this.buf).set(new Uint8Array(n), this.position),
              (this.position += n.length),
              (this.len = this.position);
          }),
          (t.BinBuffer.prototype.writeBytes = function (t) {
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
          (t.BinBuffer.prototype.readInt8 = function () {
            return this.vew.getInt8(this.position++);
          }),
          (t.BinBuffer.prototype.readInt16 = function () {
            return (this.position += 2), this.vew.getInt16(this.position - 2);
          }),
          (t.BinBuffer.prototype.readInt32 = function () {
            return (this.position += 4), this.vew.getInt32(this.position - 4);
          }),
          (t.BinBuffer.prototype.readUInt8 = function () {
            return (this.position += 1), this.vew.getUint8(this.position - 1);
          }),
          (t.BinBuffer.prototype.readUInt16 = function () {
            return (this.position += 2), this.vew.getUint16(this.position - 2);
          }),
          (t.BinBuffer.prototype.readUInt32 = function () {
            return (this.position += 4), this.vew.getUint32(this.position - 4);
          });
        var n = Math.pow(2, 53);
        function e(t) {
          return "function" == typeof t ? new t()._className() : t._className();
        }
        return (
          (t.BinBuffer.prototype.readInt64 = function () {
            var t = this.vew.getUint32(this.position),
              e = this.vew.getUint32(this.position + 4);
            this.position += 8;
            var r = 4294967296 * t + e;
            if (r < n) return r;
            for (var o, i, u, a = "", c = Math.pow(2, 32); 0 != t || 0 != e; )
              (a = (i = (u = (o = t % 10) * c + e) % 10).toString(10) + a),
                (t = (t - o) / 10),
                (e = (u - i) / 10);
            return a;
          }),
          (t.BinBuffer.prototype.readFloat = function () {
            var t = this.vew.getFloat32(this.position);
            return (this.position += 4), t;
          }),
          (t.BinBuffer.prototype.readDouble = function () {
            var t = this.vew.getFloat64(this.position);
            return (this.position += 8), t;
          }),
          (t.BinBuffer.prototype.readString = function (t) {
            for (var n = [], e = 0; e < t; e++)
              n.push(String.fromCharCode(this.vew.getUint8(this.position++)));
            var r = n.join("");
            try {
              r = decodeURIComponent(escape(r));
            } catch (t) {}
            return r;
          }),
          (t.BinBuffer.prototype.readBytes = function (n) {
            var e = new t.BinBuffer();
            return (
              e.allocate(n),
              e.memset(this.buf, this.position, n),
              (e.position = 0),
              (e.len = n),
              (this.position = this.position + n),
              e
            );
          }),
          (t.JceOutputStream = function () {
            (this.buf = new t.BinBuffer()),
              (this.getBinBuffer = function () {
                return this.buf;
              }),
              (this.getBuffer = function () {
                return this.buf.getBuffer();
              });
          }),
          (t.JceOutputStream.prototype.writeTo = function (t, n) {
            t < 15
              ? this.buf.writeUInt8(((t << 4) & 240) | n)
              : this.buf.writeUInt16(((240 | n) << 8) | t);
          }),
          (t.JceOutputStream.prototype.writeBoolean = function (t, n) {
            this.writeInt8(t, 1 == n ? 1 : 0);
          }),
          (t.JceOutputStream.prototype.writeInt8 = function (n, e) {
            0 == e
              ? this.writeTo(n, t.DataHelp.EN_ZERO)
              : (this.writeTo(n, t.DataHelp.EN_INT8), this.buf.writeInt8(e));
          }),
          (t.JceOutputStream.prototype.writeInt16 = function (n, e) {
            -128 <= e && e <= 127
              ? this.writeInt8(n, e)
              : (this.writeTo(n, t.DataHelp.EN_INT16), this.buf.writeInt16(e));
          }),
          (t.JceOutputStream.prototype.writeInt32 = function (n, e) {
            -32768 <= e && e <= 32767
              ? this.writeInt16(n, e)
              : (this.writeTo(n, t.DataHelp.EN_INT32), this.buf.writeInt32(e));
          }),
          (t.JceOutputStream.prototype.writeInt64 = function (n, e) {
            -2147483648 <= e && e <= 2147483647
              ? this.writeInt32(n, e)
              : (this.writeTo(n, t.DataHelp.EN_INT64), this.buf.writeInt64(e));
          }),
          (t.JceOutputStream.prototype.writeUInt8 = function (t, n) {
            this.writeInt16(t, n);
          }),
          (t.JceOutputStream.prototype.writeUInt16 = function (t, n) {
            this.writeInt32(t, n);
          }),
          (t.JceOutputStream.prototype.writeUInt32 = function (t, n) {
            this.writeInt64(t, n);
          }),
          (t.JceOutputStream.prototype.writeFloat = function (n, e) {
            0 == e
              ? this.writeTo(n, t.DataHelp.EN_ZERO)
              : (this.writeTo(n, t.DataHelp.EN_FLOAT), this.buf.writeFloat(e));
          }),
          (t.JceOutputStream.prototype.writeDouble = function (n, e) {
            0 == e
              ? this.writeTo(n, t.DataHelp.EN_ZERO)
              : (this.writeTo(n, t.DataHelp.EN_DOUBLE),
                this.buf.writeDouble(e));
          }),
          (t.JceOutputStream.prototype.writeStruct = function (n, e) {
            if (null == e.writeTo) throw Error("not defined writeTo Function");
            this.writeTo(n, t.DataHelp.EN_STRUCTBEGIN),
              e.writeTo(this),
              this.writeTo(0, t.DataHelp.EN_STRUCTEND);
          }),
          (t.JceOutputStream.prototype.writeString = function (n, e) {
            var r = e;
            try {
              r = unescape(encodeURIComponent(r));
            } catch (n) {}
            255 < r.length
              ? (this.writeTo(n, t.DataHelp.EN_STRING4),
                this.buf.writeUInt32(r.length))
              : (this.writeTo(n, t.DataHelp.EN_STRING1),
                this.buf.writeUInt8(r.length)),
              this.buf.writeString(r);
          }),
          (t.JceOutputStream.prototype.writeBytes = function (n, e) {
            this.writeTo(n, t.DataHelp.EN_SIMPLELIST),
              this.writeTo(0, t.DataHelp.EN_INT8),
              this.writeInt32(0, e.length),
              this.buf.writeBytes(e);
          }),
          (t.JceOutputStream.prototype.writeVector = function (n, e) {
            var r = e.value.length;
            this.writeTo(n, t.DataHelp.EN_LIST), this.writeInt32(0, r);
            for (var o = 0; o < r; o++)
              ("function" == typeof e.proto ? new e.proto() : e.proto)._write(
                this,
                0,
                e.value[o]
              );
          }),
          (t.JceOutputStream.prototype.writeMap = function (n, e) {
            for (var r in (this.writeTo(n, t.DataHelp.EN_MAP),
            this.writeInt32(0, e.size()),
            e.value)) {
              var o = "function" == typeof e.kproto ? new e.kproto() : e.kproto,
                i = "function" == typeof e.vproto ? new e.vproto() : e.vproto;
              o._write(this, 0, r), i._write(this, 1, e.value[r]);
            }
          }),
          (t.JceInputStream = function (n) {
            this.buf = new t.BinBuffer(n);
          }),
          (t.JceInputStream.prototype.readFrom = function () {
            var t = this.buf.readUInt8(),
              n = (240 & t) >> 4,
              e = 15 & t;
            return 15 <= n && (n = this.buf.readUInt8()), { tag: n, type: e };
          }),
          (t.JceInputStream.prototype.peekFrom = function () {
            var t = this.buf.position,
              n = this.readFrom();
            return (
              (this.buf.position = t),
              { tag: n.tag, type: n.type, size: 15 <= n.tag ? 2 : 1 }
            );
          }),
          (t.JceInputStream.prototype.skipField = function (n) {
            switch (n) {
              case t.DataHelp.EN_INT8:
                this.buf.position += 1;
                break;
              case t.DataHelp.EN_INT16:
                this.buf.position += 2;
                break;
              case t.DataHelp.EN_INT32:
                this.buf.position += 4;
                break;
              case t.DataHelp.EN_INT64:
                this.buf.position += 8;
                break;
              case t.DataHelp.EN_STRING1:
                var e = this.buf.readUInt8();
                this.buf.position += e;
                break;
              case t.DataHelp.EN_STRING4:
                var r = this.buf.readInt32();
                this.buf.position += r;
                break;
              case t.DataHelp.EN_STRUCTBEGIN:
                this.skipToStructEnd();
                break;
              case t.DataHelp.EN_STRUCTEND:
              case t.DataHelp.EN_ZERO:
                break;
              case t.DataHelp.EN_MAP:
                for (var o = this.readInt32(0, !0), i = 0; i < 2 * o; ++i) {
                  var u = this.readFrom();
                  this.skipField(u.type);
                }
                break;
              case t.DataHelp.EN_SIMPLELIST:
                if ((u = this.readFrom()).type != t.DataHelp.EN_INT8)
                  throw Error(
                    "skipField with invalid type, type value: " +
                      n +
                      "," +
                      u.type
                  );
                (e = this.readInt32(0, !0)), (this.buf.position += e);
                break;
              case t.DataHelp.EN_LIST:
                for (o = this.readInt32(0, !0), i = 0; i < o; ++i)
                  (u = this.readFrom()), this.skipField(u.type);
                break;
              case t.DataHelp.EN_FLOAT:
                this.buf.position += 4;
                break;
              case t.DataHelp.EN_DOUBLE:
                this.buf.position += 8;
                break;
              default:
                throw new Error(
                  "skipField with invalid type, type value: " + n
                );
            }
          }),
          (t.JceInputStream.prototype.skipToStructEnd = function () {
            for (;;) {
              var n = this.readFrom();
              if ((this.skipField(n.type), n.type == t.DataHelp.EN_STRUCTEND))
                return;
            }
          }),
          (t.JceInputStream.prototype.skipToTag = function (n, e) {
            for (; this.buf.position < this.buf.length; ) {
              var r = this.peekFrom();
              if (n <= r.tag || r.type == t.DataHelp.EN_STRUCTEND)
                return r.type != t.DataHelp.EN_STRUCTEND && n == r.tag;
              (this.buf.position += r.size), this.skipField(r.type);
            }
            if (e) throw Error("require field not exist, tag:" + n);
            return !1;
          }),
          (t.JceInputStream.prototype.readBoolean = function (t, n, e) {
            return 1 == this.readInt8(t, n, e);
          }),
          (t.JceInputStream.prototype.readInt8 = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            var o = this.readFrom();
            switch (o.type) {
              case t.DataHelp.EN_ZERO:
                return 0;
              case t.DataHelp.EN_INT8:
                return this.buf.readInt8();
            }
            throw Error(
              "read int8 type mismatch, tag:" + n + ", get type:" + o.type
            );
          }),
          (t.JceInputStream.prototype.readInt16 = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            var o = this.readFrom();
            switch (o.type) {
              case t.DataHelp.EN_ZERO:
                return 0;
              case t.DataHelp.EN_INT8:
                return this.buf.readInt8();
              case t.DataHelp.EN_INT16:
                return this.buf.readInt16();
            }
            throw Error(
              "read int8 type mismatch, tag:" + n + ", get type:" + o.type
            );
          }),
          (t.JceInputStream.prototype.readInt32 = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            var o = this.readFrom();
            switch (o.type) {
              case t.DataHelp.EN_ZERO:
                return 0;
              case t.DataHelp.EN_INT8:
                return this.buf.readInt8();
              case t.DataHelp.EN_INT16:
                return this.buf.readInt16();
              case t.DataHelp.EN_INT32:
                return this.buf.readInt32();
            }
            throw Error(
              "read int8 type mismatch, tag:" + n + ", get type:" + o.type
            );
          }),
          (t.JceInputStream.prototype.readInt64 = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            switch (this.readFrom().type) {
              case t.DataHelp.EN_ZERO:
                return 0;
              case t.DataHelp.EN_INT8:
                return this.buf.readInt8();
              case t.DataHelp.EN_INT16:
                return this.buf.readInt16();
              case t.DataHelp.EN_INT32:
                return this.buf.readInt32();
              case t.DataHelp.EN_INT64:
                return this.buf.readInt64();
            }
            throw Error(
              "read int64 type mismatch, tag:" + n + ", get type:" + h.type
            );
          }),
          (t.JceInputStream.prototype.readFloat = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            switch (this.readFrom().type) {
              case t.DataHelp.EN_ZERO:
                return 0;
              case t.DataHelp.EN_FLOAT:
                return this.buf.readFloat();
            }
            throw Error(
              "read float type mismatch, tag:" + n + ", get type:" + h.type
            );
          }),
          (t.JceInputStream.prototype.readDouble = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            switch (this.readFrom().type) {
              case t.DataHelp.EN_ZERO:
                return 0;
              case t.DataHelp.EN_DOUBLE:
                return this.buf.readDouble();
            }
            throw Error(
              "read double type mismatch, tag:" + n + ", get type:" + h.type
            );
          }),
          (t.JceInputStream.prototype.readUInt8 = function (t, n, e) {
            return this.readInt16(t, n, e);
          }),
          (t.JceInputStream.prototype.readUInt16 = function (t, n, e) {
            return this.readInt32(t, n, e);
          }),
          (t.JceInputStream.prototype.readUInt32 = function (t, n, e) {
            return this.readInt64(t, n, e);
          }),
          (t.JceInputStream.prototype.readStruct = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            var o = this.readFrom();
            if (o.type != t.DataHelp.EN_STRUCTBEGIN)
              throw Error(
                "read struct type mismatch, tag: " + n + ", get type:" + o.type
              );
            return r.readFrom(this), this.skipToStructEnd(), r;
          }),
          (t.JceInputStream.prototype.readString = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            var o = this.readFrom();
            if (o.type == t.DataHelp.EN_STRING1)
              return this.buf.readString(this.buf.readUInt8());
            if (o.type == t.DataHelp.EN_STRING4)
              return this.buf.readString(this.buf.readUInt32());
            throw Error(
              "read 'string' type mismatch, tag: " +
                n +
                ", get type: " +
                o.type +
                "."
            );
          }),
          (t.JceInputStream.prototype.readString2 = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            var o = this.readFrom();
            if (o.type == t.DataHelp.EN_STRING1)
              return this.buf.readBytes(this.buf.readUInt8());
            if (o.type == t.DataHelp.EN_STRING4)
              return this.buf.readBytes(this.buf.readUInt32());
            throw Error(
              "read 'string' type mismatch, tag: " +
                n +
                ", get type: " +
                o.type +
                "."
            );
          }),
          (t.JceInputStream.prototype.readBytes = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            var o = this.readFrom();
            if (o.type == t.DataHelp.EN_SIMPLELIST) {
              var i = this.readFrom();
              if (i.type != t.DataHelp.EN_INT8)
                throw Error(
                  "type mismatch, tag:" + n + ",type:" + o.type + "," + i.type
                );
              if ((u = this.readInt32(0, !0)) < 0)
                throw Error(
                  "invalid size, tag:" + n + ",type:" + o.type + "," + i.type
                );
              return this.buf.readBytes(u);
            }
            if (o.type != t.DataHelp.EN_LIST)
              throw Error("type mismatch, tag:" + n + ",type:" + o.type);
            var u = this.readInt32(0, !0);
            return this.buf.readBytes(u);
          }),
          (t.JceInputStream.prototype.readVector = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            var o = this.readFrom();
            if (o.type != t.DataHelp.EN_LIST)
              throw Error(
                "read 'vector' type mismatch, tag: " +
                  n +
                  ", get type: " +
                  o.type
              );
            var i = this.readInt32(0, !0);
            if (i < 0)
              throw Error(
                "invalid size, tag: " + n + ", type: " + o.type + ", size: " + i
              );
            for (var u = 0; u < i; ++u) {
              var a = "function" == typeof r.proto ? new r.proto() : r.proto;
              r.value.push(a._read(this, 0, a._clone()));
            }
            return r;
          }),
          (t.JceInputStream.prototype.readMap = function (n, e, r) {
            if (0 == this.skipToTag(n, e)) return r;
            var o = this.readFrom();
            if (o.type != t.DataHelp.EN_MAP)
              throw Error(
                "read 'map' type mismatch, tag: " + n + ", get type: " + o.type
              );
            var i = this.readInt32(0, !0);
            if (i < 0) throw Error("invalid map, tag: " + n + ", size: " + i);
            for (var u = 0; u < i; u++) {
              var a = "function" == typeof r.kproto ? new r.kproto() : r.kproto,
                c = "function" == typeof r.vproto ? new r.vproto() : r.vproto,
                s = a._read(this, 0, a._clone()),
                f = c._read(this, 1, c._clone());
              r.put(s, f);
            }
            return r;
          }),
          (t.Util = t.Util || {}),
          (t.Util.jcestream = function (t, n) {
            if (null != t && null != t && t instanceof ArrayBuffer) {
              n = n || 16;
              for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
                e[r], e[r].toString(16);
            }
          }),
          (t.Util.str2ab = function (t) {
            var n,
              e = t.length,
              r = new Array(e);
            for (n = 0; n < e; ++n) r[n] = t.charCodeAt(n);
            return new Uint8Array(r).buffer;
          }),
          (t.Util.ajax = function (n, e, r, o) {
            var i = new XMLHttpRequest();
            i.overrideMimeType("text/plain; charset=x-user-defined"),
              i.addEventListener("readystatechange", function n() {
                4 === i.readyState &&
                  (200 === i.status || 304 === i.status
                    ? r(t.Util.str2ab(i.response))
                    : o(i.status),
                  i.removeEventListener("readystatechange", n),
                  (i = void 0));
              }),
              i.open("post", n),
              i.send(e);
          }),
          (t.INT8 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeInt8(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readInt8(n, !0, e);
              }),
              (this._className = function () {
                return t.CHAR;
              });
          }),
          (t.INT16 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeInt16(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readInt16(n, !0, e);
              }),
              (this._className = function () {
                return t.SHORT;
              });
          }),
          (t.INT32 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeInt32(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readInt32(n, !0, e);
              }),
              (this._className = function () {
                return t.INT32;
              });
          }),
          (t.INT64 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeInt64(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readInt64(n, !0, e);
              }),
              (this._className = function () {
                return t.INT64;
              });
          }),
          (t.UINT8 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeInt16(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readInt16(n, !0, e);
              }),
              (this._className = function () {
                return t.SHORT;
              });
          }),
          (t.UInt16 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeInt32(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readInt32(n, !0, e);
              }),
              (this._className = function () {
                return t.INT32;
              });
          }),
          (t.UInt32 = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeInt64(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readInt64(n, !0, e);
              }),
              (this._className = function () {
                return t.INT64;
              });
          }),
          (t.Float = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeFloat(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readFloat(n, !0, e);
              }),
              (this._className = function () {
                return t.FLOAT;
              });
          }),
          (t.Double = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeDouble(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readDouble(n, !0, e);
              }),
              (this._className = function () {
                return t.DOUBLE;
              });
          }),
          (t.STRING = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeString(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readString(n, !0, e);
              }),
              (this._className = function () {
                return t.STRING;
              });
          }),
          (t.BOOLEAN = function () {
            (this._clone = function () {
              return !1;
            }),
              (this._write = function (t, n, e) {
                return t.writeBoolean(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readBoolean(n, !0, e);
              }),
              (this._className = function () {
                return t.BOOLEAN;
              });
          }),
          (t.ENUM = function () {
            (this._clone = function () {
              return 0;
            }),
              (this._write = function (t, n, e) {
                return t.writeInt32(n, e);
              }),
              (this._read = function (t, n, e) {
                return t.readInt32(n, !0, e);
              });
          }),
          (t.Vector = function (t) {
            (this.proto = t), (this.value = new Array());
          }),
          (t.Vector.prototype._clone = function () {
            return new t.Vector(
              "function" == typeof this.proto ? new this.proto() : this.proto
            );
          }),
          (t.Vector.prototype._write = function (t, n, e) {
            return t.writeVector(n, e);
          }),
          (t.Vector.prototype._read = function (t, n, e) {
            return t.readVector(n, !0, e);
          }),
          (t.Vector.prototype._className = function () {
            var n = e(this.proto);
            return t.TypeHelp.VECTOR.replace("$t", n);
          }),
          (t.Map = function (t, n) {
            (this.kproto = t), (this.vproto = n), (this.value = new Object());
          }),
          (t.Map.prototype._clone = function () {
            var n =
                "function" == typeof this.kproto
                  ? new this.kproto()
                  : this.kproto,
              e =
                "function" == typeof this.vproto
                  ? new this.vproto()
                  : this.vproto;
            return new t.Map(n, e);
          }),
          (t.Map.prototype._write = function (t, n, e) {
            return t.writeMap(n, e);
          }),
          (t.Map.prototype._read = function (t, n, e) {
            return t.readMap(n, !0, e);
          }),
          (t.Map.prototype.put = function (t, n) {
            this.value[t] = n;
          }),
          (t.Map.prototype.get = function (t) {
            return this.value[t];
          }),
          (t.Map.prototype.remove = function (t) {
            delete this.value[t];
          }),
          (t.Map.prototype.clear = function () {
            this.value = new Object();
          }),
          (t.Map.prototype.size = function () {
            var t = 0;
            for (var n in this.value) t++;
            return t;
          }),
          (t.Map.prototype._className = function () {
            var n = e(this.kproto),
              r = e(this.vproto);
            return t.TypeHelp.Map.replace("$k", n).replace("$v", r);
          }),
          t
        );
      })();
    },
    "28PD": function (t, n, e) {
      t.exports = e("4KFe")(191);
    },
    "3Yl8": function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e("58BP"),
        o = e.n(r),
        i = e("rIiI"),
        u = e.n(i),
        a = e("cQwn"),
        c = e.n(a),
        s = e("4oOK"),
        f = e("KkFV"),
        l = e("p1oI"),
        p = e("KFtC"),
        d = e("JwEE"),
        h = e("fGII"),
        v = e("nimoua"),
        y = e.n(v),
        m = e("q4i/"),
        g = e.n(m),
        w = e("avFb"),
        b = e.n(w),
        _ = function () {
          return Promise.all([e.e("4b99f"), e.e("ad9e8")]).then(
            e.bind(null, "JxiG")
          );
        },
        I = !1,
        O = document.createElement("div");
      document.querySelector("body").appendChild(O);
      var S = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Promise.all([e.e("4b99f").then(e.t.bind(null, "6Zxk", 7)), _()]).then(
            function (e) {
              var r = g()(e, 2),
                o = r[0],
                i = r[1].default;
              i.setinitedType(t),
                o.render(
                  b.a.createElement(i, {
                    visible: !0,
                    onClose: function () {
                      o.unmountComponentAtNode(O);
                    },
                    config: n,
                  }),
                  O
                ),
                (I = !1);
            }
          );
        },
        E = {
          showLogin: function (t) {
            I || ((I = !0), S("login", t));
          },
          showRegister: function () {
            I || ((I = !0), S("register"));
          },
          showForgetPass: function () {
            I || ((I = !0), S("forget_password"));
          },
          autoLogin: function (t, n, e, r) {
            _().then(function (o) {
              (0,
              o.NimoLogin)(t, n, e, void 0, void 0, void 0, void 0, void 0, r);
            });
          },
        },
        A = e("uofp"),
        T = e("sNZr"),
        k = e("0Xft"),
        N = ["s.syzs.qq.com"],
        L = function () {
          return e
            .e("d8d32")
            .then(e.bind(null, "7Vhv"))
            .catch(function () {
              return Promise.reject(new Error("load loginSDK fail"));
            });
        },
        C = new (o()(function t() {
          var n = this;
          u()(this, t),
            c()(this, "autoLogin", function () {
              var t = Object(l.a)("_udbtoken"),
                e = Object(l.a)("_udbid"),
                r = Object(l.a)("_udbver"),
                o = 0;
              t &&
                e &&
                r &&
                ((n._isAutoLogin = !0),
                n.initUDB(),
                Object(T.b)({ token: t, uid: e, countryCode: Object(p.g)() })
                  .then(function () {
                    var n = f.a.get("udb_biztoken"),
                      i = f.a.get("udb_version"),
                      u = f.a.get("udb_uid");
                    n && u && i && ((t = n), (e = u), (r = i), (o = 25));
                  })
                  .catch(function () {})
                  .finally(function () {
                    E.autoLogin(decodeURIComponent(t), e, r, {
                      cookieExpires: o,
                    });
                  }));
            }),
            c()(this, "initUDB", function () {
              L().then(function (t) {
                t.default.isInitUDB({
                  success: function () {},
                  error: function () {
                    console.error("UDB_init_error");
                  },
                });
              });
            }),
            c()(this, "logout", function () {
              L().then(function (t) {
                t.default.logout({
                  success: function (t) {
                    f.a.remove("avatarUrl"),
                      f.a.remove("userName"),
                      f.a.remove("version"),
                      f.a.remove("bizToken"),
                      f.a.remove("udb_biztoken"),
                      f.a.remove("udb_guiddata"),
                      f.a.remove("udb_openid"),
                      f.a.remove("udb_passport"),
                      f.a.remove("udb_uid"),
                      f.a.remove("udbUserId"),
                      f.a.remove("yyuid"),
                      f.a.remove("userid"),
                      !0 === ((t || {}).data || {}).destroyUser
                        ? Object(h.a)()
                        : location.reload(),
                      Object(k.a)();
                  },
                });
              });
            }),
            c()(this, "login", function (t) {
              L()
                .then(function (n) {
                  n.default.login(t);
                })
                .catch(function (n) {
                  "function" === typeof t.error && t.error(n);
                });
            }),
            c()(this, "checkLogin", function () {
              var t = f.a.get("bizToken"),
                n = f.a.get("udbUserId"),
                e = f.a.get("version");
              return n && n.length && t && t.length && e;
            }),
            c()(this, "getUserInfo", function () {
              var t = f.a.get("userid"),
                e = f.a.get("userName"),
                r = f.a.get("avatarUrl") || void 0,
                o = f.a.get("bizToken"),
                i = f.a.get("udbUserId"),
                u = f.a.get("version"),
                a = f.a.get("isAnchor"),
                c = Object(p.d)(),
                s = Object(p.j)(),
                l = Object(p.k)(),
                d = Object(p.g)(),
                h = Object(p.f)(),
                v = Object(p.l)(),
                y = Object(p.l)(),
                m = f.b.get("sdid") || "";
              return {
                userId: t,
                userName: e,
                userImg: r,
                bizToken: o,
                udbUserId: i,
                version: u,
                lang: l,
                country: d,
                cCountry: c,
                clang: h,
                guid: s,
                ua: n.ua,
                mid: v,
                deviceId: y,
                safeDeviceId: m,
                isAnchor: a,
              };
            }),
            c()(this, "getCurrUid", function () {
              var t = n.getUserInfo();
              return t && t.udbUserId ? t.udbUserId - 0 : 0;
            }),
            c()(this, "register", function (t) {
              return L()
                .then(function (n) {
                  n.default.register(t);
                })
                .catch(function (n) {
                  "function" === typeof t.error && t.error(n);
                });
            }),
            c()(this, "codeSend", function (t) {
              return L()
                .then(function (n) {
                  n.default.codeSend(t);
                })
                .catch(function (n) {
                  "function" === typeof t.error && t.error(n);
                });
            }),
            c()(this, "thirdLogin", function (t) {
              return L()
                .then(function (n) {
                  n.default.thirdLogin(t);
                })
                .catch(function (n) {
                  "function" === typeof t.error && t.error(n);
                });
            }),
            c()(this, "passFind", function (t) {
              return L()
                .then(function (n) {
                  n.default.passFind(t);
                })
                .catch(function (n) {
                  "function" === typeof t.error && t.error(n);
                });
            }),
            c()(this, "thirdLoginConnect", function (t) {
              return L()
                .then(function (n) {
                  n.default.thirdLoginConnect(t);
                })
                .catch(function (n) {
                  "function" === typeof t.error && t.error(n);
                });
            }),
            c()(this, "codeVerify", function (t) {
              return L().then(function (n) {
                n.default.codeVerify(t);
              });
            }),
            c()(this, "getAppInfo", function (t) {
              return L().then(function (n) {
                n.default.appInfo(t);
              });
            }),
            c()(this, "oauthPasswordLogin", function (t) {
              return L().then(function (n) {
                n.default.oauthPasswordLogin(t);
              });
            }),
            c()(this, "anonymousLogin", function (t) {
              return L().then(function (n) {
                n.default.anonymousLogin(t);
              });
            }),
            (this._isAutoLogin = !1),
            (null !== y.a &&
              void 0 !== y.a &&
              y.a.isInNimoPc &&
              Object(l.a)("_userid")) ||
              this.autoLogin(),
            (this.ua = "web&1.0.4&nimoTV");
        }))(),
        B = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            (window.self !== window.top && -1 === N.indexOf(Object(p.n)())) ||
            window._NIMO_NEW_PAGE_LOGIN_
          )
            d.b.login(t);
          else {
            var e = {
              login: "showLogin",
              register: "showRegister",
              reset: "showForgetPass",
            };
            E[e[t]](n);
          }
        };
      n.default = {
        initUDB: function () {
          C.initUDB();
        },
        login: function (t) {
          C.login(t);
        },
        loginOut: function () {
          C.logout();
        },
        autoLogout: function () {
          Object(s.a)(800).then(function () {
            return C.logout();
          });
        },
        checkLogin: function (t) {
          return !!C.checkLogin() || (t && (B("login"), Object(A.c)()), !1);
        },
        showLogin: function (t) {
          return B("login", t);
        },
        showRegister: function () {
          return B("register");
        },
        showForgetPass: function () {
          return B("reset");
        },
        checkIsAutoLogin: function () {
          return C._isAutoLogin;
        },
        getUserInfo: C.getUserInfo,
        currUid: C.getCurrUid(),
        register: C.register,
        passFind: C.passFind,
        codeSend: C.codeSend,
        thirdLogin: C.thirdLogin,
        thirdLoginWithBizData: C.thirdLoginWithBizData,
        thirdLoginConnect: C.thirdLoginConnect,
        codeVerify: C.codeVerify,
        getAppInfo: C.getAppInfo,
        oauthPasswordLogin: C.oauthPasswordLogin,
        anonymousLogin: C.anonymousLogin,
      };
    },
    "4n1x": function (t, n, e) {
      var r = e("EWIN");
      (t.exports = function (t) {
        if (Array.isArray(t)) return r(t);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    "4oOK": function (t, n, e) {
      "use strict";
      n.a = function (t) {
        return new Promise(function (n) {
          return setTimeout(function () {
            return n();
          }, t);
        });
      };
    },
    "51+F": function (t, n) {
      (t.exports = function (t) {
        if (Array.isArray(t)) return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    "58BP": function (t, n, e) {
      t.exports = e("4KFe")(231);
    },
    "5HYm": function (t, n, e) {
      t.exports = e("4KFe")(34);
    },
    "5yvJ": function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return a;
      });
      var r,
        o = e("KkFV"),
        i = e("uq/f"),
        u = "__yamid_new";
      function a() {
        if (!r) {
          var t =
            o.a.get(u) ||
            o.b.get(u) ||
            (function () {
              var t = "";
              try {
                t = YA.cookie.get("__yamid_new");
              } catch (n) {}
              return t;
            })();
          t
            ? (r = t)
            : ((r = Object(i.a)()),
              (window.__yamid_new = r),
              o.a.set(u, r, 730),
              o.b.set(u, r));
        }
        return r;
      }
    },
    "66+j": function (t, n, e) {
      "use strict";
      var r = e("gtb+"),
        o = e.n(r);
      n.a = function (t, n) {
        if (!n) return t;
        var e = (t || "").split("?"),
          r = Object.keys(n),
          i = new RegExp("(".concat(r.join("|"), ")=(\\w|.)+")),
          u =
            "undefined" !== typeof e[1]
              ? e[1].split("&").filter(function (t) {
                  return !i.test(t);
                })
              : [],
          a = [].concat(
            o()(u),
            o()(
              r.map(function (t) {
                return "".concat(t, "=").concat(n[t]);
              })
            )
          );
        return ""
          .concat(e[0])
          .concat(
            Array.isArray(a) && a.length > 0 ? "?".concat(a.join("&")) : ""
          );
      };
    },
    "7DFi": function (t, n, e) {
      t.exports = e("4KFe")(235);
    },
    "7S++": function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e("YZRX"),
        o = e("mTTC"),
        i = e("O+iE");
      Object(i.a)().then(function (t) {
        if (t) {
          var n = o.default.getPureCache(),
            e = function (n) {
              var e = n.udbUserId;
              t.setTag("udbUserId", e > 0 ? e : 0);
            };
          n ? e(n) : o.default.getUserInfo().then(e);
        }
      });
      var u = Object(r.e)(),
        a = "rtl" === document.dir;
      "1025" === u ? a || (document.dir = "rtl") : a && (document.dir = "");
    },
    "82bv": function (t, n, e) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    "9ZvN": function (t, n, e) {
      "use strict";
      var r = e("ZMLX"),
        o =
          (e("ZxgU"),
          {
            ClientTypeIos: 100,
            ClientTypeAndroid: 200,
            ClientTypeWinPhone: 300,
            ClientTypePc: 400,
            ClientTypeWeb: 500,
          });
      (r.a.EClientType = o), (n.a = o);
    },
    BYFT: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return r;
      }),
        e.d(n, "d", function () {
          return i;
        }),
        e.d(n, "e", function () {
          return u;
        }),
        e.d(n, "f", function () {
          return a;
        }),
        e.d(n, "g", function () {
          return c;
        }),
        e.d(n, "b", function () {
          return s;
        }),
        e.d(n, "c", function () {
          return f;
        });
      var r =
          location.hostname === location.hostname ||
          "dashboard.nimo.tv" === location.hostname,
        o = location.protocol;
      "https:" !== o && "http:" !== o && (o = "https:");
      var i = o,
        u = r ? location.hostname : "m.nimo.tv",
        a = "".concat(i, "//").concat(u),
        c = "m.nimo.tv",
        s = location.hostname,
        f = [
          "".concat(i, "//").concat(c),
          "".concat(i, "//").concat(s),
          "".concat(i, "//").concat("dashboard.nimo.tv"),
        ];
    },
    Bh9K: function (t, n, e) {
      "use strict";
      function r(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    C6AJ: function (t, n, e) {
      t.exports = e("4KFe")(1);
    },
    CbEt: function (t, n, e) {
      "use strict";
      var r,
        o = "object" === typeof Reflect ? Reflect : null,
        i =
          o && "function" === typeof o.apply
            ? o.apply
            : function (t, n, e) {
                return Function.prototype.apply.call(t, n, e);
              };
      r =
        o && "function" === typeof o.ownKeys
          ? o.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var u =
        Number.isNaN ||
        function (t) {
          return t !== t;
        };
      function a() {
        a.init.call(this);
      }
      (t.exports = a),
        (t.exports.once = function (t, n) {
          return new Promise(function (e, r) {
            function o(e) {
              t.removeListener(n, i), r(e);
            }
            function i() {
              "function" === typeof t.removeListener &&
                t.removeListener("error", o),
                e([].slice.call(arguments));
            }
            m(t, n, i, { once: !0 }),
              "error" !== n &&
                (function (t, n, e) {
                  "function" === typeof t.on && m(t, "error", n, e);
                })(t, o, { once: !0 });
          });
        }),
        (a.EventEmitter = a),
        (a.prototype._events = void 0),
        (a.prototype._eventsCount = 0),
        (a.prototype._maxListeners = void 0);
      var c = 10;
      function s(t) {
        if ("function" !== typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
      }
      function f(t) {
        return void 0 === t._maxListeners
          ? a.defaultMaxListeners
          : t._maxListeners;
      }
      function l(t, n, e, r) {
        var o, i, u, a;
        if (
          (s(e),
          void 0 === (i = t._events)
            ? ((i = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== i.newListener &&
                (t.emit("newListener", n, e.listener ? e.listener : e),
                (i = t._events)),
              (u = i[n])),
          void 0 === u)
        )
          (u = i[n] = e), ++t._eventsCount;
        else if (
          ("function" === typeof u
            ? (u = i[n] = r ? [e, u] : [u, e])
            : r
            ? u.unshift(e)
            : u.push(e),
          (o = f(t)) > 0 && u.length > o && !u.warned)
        ) {
          u.warned = !0;
          var c = new Error(
            "Possible EventEmitter memory leak detected. " +
              u.length +
              " " +
              String(n) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (c.name = "MaxListenersExceededWarning"),
            (c.emitter = t),
            (c.type = n),
            (c.count = u.length),
            (a = c),
            console && console.warn && console.warn(a);
        }
        return t;
      }
      function p() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function d(t, n, e) {
        var r = { fired: !1, wrapFn: void 0, target: t, type: n, listener: e },
          o = p.bind(r);
        return (o.listener = e), (r.wrapFn = o), o;
      }
      function h(t, n, e) {
        var r = t._events;
        if (void 0 === r) return [];
        var o = r[n];
        return void 0 === o
          ? []
          : "function" === typeof o
          ? e
            ? [o.listener || o]
            : [o]
          : e
          ? (function (t) {
              for (var n = new Array(t.length), e = 0; e < n.length; ++e)
                n[e] = t[e].listener || t[e];
              return n;
            })(o)
          : y(o, o.length);
      }
      function v(t) {
        var n = this._events;
        if (void 0 !== n) {
          var e = n[t];
          if ("function" === typeof e) return 1;
          if (void 0 !== e) return e.length;
        }
        return 0;
      }
      function y(t, n) {
        for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t[r];
        return e;
      }
      function m(t, n, e, r) {
        if ("function" === typeof t.on) r.once ? t.once(n, e) : t.on(n, e);
        else {
          if ("function" !== typeof t.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof t
            );
          t.addEventListener(n, function o(i) {
            r.once && t.removeEventListener(n, o), e(i);
          });
        }
      }
      Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return c;
        },
        set: function (t) {
          if ("number" !== typeof t || t < 0 || u(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          c = t;
        },
      }),
        (a.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (a.prototype.setMaxListeners = function (t) {
          if ("number" !== typeof t || t < 0 || u(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (a.prototype.getMaxListeners = function () {
          return f(this);
        }),
        (a.prototype.emit = function (t) {
          for (var n = [], e = 1; e < arguments.length; e++)
            n.push(arguments[e]);
          var r = "error" === t,
            o = this._events;
          if (void 0 !== o) r = r && void 0 === o.error;
          else if (!r) return !1;
          if (r) {
            var u;
            if ((n.length > 0 && (u = n[0]), u instanceof Error)) throw u;
            var a = new Error(
              "Unhandled error." + (u ? " (" + u.message + ")" : "")
            );
            throw ((a.context = u), a);
          }
          var c = o[t];
          if (void 0 === c) return !1;
          if ("function" === typeof c) i(c, this, n);
          else {
            var s = c.length,
              f = y(c, s);
            for (e = 0; e < s; ++e) i(f[e], this, n);
          }
          return !0;
        }),
        (a.prototype.addListener = function (t, n) {
          return l(this, t, n, !1);
        }),
        (a.prototype.on = a.prototype.addListener),
        (a.prototype.prependListener = function (t, n) {
          return l(this, t, n, !0);
        }),
        (a.prototype.once = function (t, n) {
          return s(n), this.on(t, d(this, t, n)), this;
        }),
        (a.prototype.prependOnceListener = function (t, n) {
          return s(n), this.prependListener(t, d(this, t, n)), this;
        }),
        (a.prototype.removeListener = function (t, n) {
          var e, r, o, i, u;
          if ((s(n), void 0 === (r = this._events))) return this;
          if (void 0 === (e = r[t])) return this;
          if (e === n || e.listener === n)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete r[t],
                r.removeListener &&
                  this.emit("removeListener", t, e.listener || n));
          else if ("function" !== typeof e) {
            for (o = -1, i = e.length - 1; i >= 0; i--)
              if (e[i] === n || e[i].listener === n) {
                (u = e[i].listener), (o = i);
                break;
              }
            if (o < 0) return this;
            0 === o
              ? e.shift()
              : (function (t, n) {
                  for (; n + 1 < t.length; n++) t[n] = t[n + 1];
                  t.pop();
                })(e, o),
              1 === e.length && (r[t] = e[0]),
              void 0 !== r.removeListener &&
                this.emit("removeListener", t, u || n);
          }
          return this;
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.removeAllListeners = function (t) {
          var n, e, r;
          if (void 0 === (e = this._events)) return this;
          if (void 0 === e.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== e[t] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete e[t]),
              this
            );
          if (0 === arguments.length) {
            var o,
              i = Object.keys(e);
            for (r = 0; r < i.length; ++r)
              "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (n = e[t])) this.removeListener(t, n);
          else if (void 0 !== n)
            for (r = n.length - 1; r >= 0; r--) this.removeListener(t, n[r]);
          return this;
        }),
        (a.prototype.listeners = function (t) {
          return h(this, t, !0);
        }),
        (a.prototype.rawListeners = function (t) {
          return h(this, t, !1);
        }),
        (a.listenerCount = function (t, n) {
          return "function" === typeof t.listenerCount
            ? t.listenerCount(n)
            : v.call(t, n);
        }),
        (a.prototype.listenerCount = v),
        (a.prototype.eventNames = function () {
          return this._eventsCount > 0 ? r(this._events) : [];
        });
    },
    "D+av": function (t, n, e) {
      t.exports = e("4KFe")(121);
    },
    EWIN: function (t, n) {
      (t.exports = function (t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    FHD1: function (t, n, e) {
      t.exports = e("4KFe")(60);
    },
    FIla: function (t, n, e) {
      "use strict";
      function r(t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    Ftqi: function (t, n, e) {
      t.exports = e("4KFe")(179);
    },
    Fvii: function (t, n, e) {
      t.exports = e("4KFe")(66);
    },
    G5Pb: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e("3Yl8");
      n.default = function () {
        return (
          !r.default.checkIsAutoLogin() &&
          (r.default.checkLogin()
            ? r.default.getUserInfo()
            : void (window.location = "//".concat(location.hostname)))
        );
      };
    },
    "I7c/": function (t, n, e) {
      "use strict";
      var r = e("lwBl"),
        o = e("5HYm"),
        i = e("ZZY+"),
        u = e("L2qc"),
        a = [].sort,
        c = [1, 2, 3];
      r(
        r.P +
          r.F *
            (u(function () {
              c.sort(void 0);
            }) ||
              !u(function () {
                c.sort(null);
              }) ||
              !e("FHD1")(a)),
        "Array",
        {
          sort: function (t) {
            return void 0 === t ? a.call(i(this)) : a.call(i(this), o(t));
          },
        }
      );
    },
    JGns: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e("f2qI"),
        o = e.n(r),
        i = e("rIiI"),
        u = e.n(i),
        a = e("58BP"),
        c = e.n(a),
        s = e("cQwn"),
        f = e.n(s),
        l = e("KkFV"),
        p = e("KFtC"),
        d = e("JwEE"),
        h = e("fGII"),
        v = e("4oOK"),
        y = e("0Xft"),
        m = ["bizData"];
      function g(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function w(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? g(Object(e), !0).forEach(function (n) {
                f()(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : g(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var b = function () {
          return e.e("d8d32").then(e.bind(null, "7Vhv"));
        },
        _ = 25,
        I = (function () {
          function t() {
            u()(this, t),
              f()(this, "initUDB", function () {
                b().then(function (t) {
                  t.default.isInitUDB({
                    success: function () {},
                    error: function () {
                      console.error("UDB_init_error");
                    },
                  });
                });
              }),
              f()(this, "getAppInfo", function (t) {
                return b().then(function (n) {
                  n.default.appInfo(t);
                });
              }),
              f()(this, "oauthPasswordLogin", function (t) {
                return b().then(function (n) {
                  n.default.oauthPasswordLogin(t);
                });
              }),
              f()(this, "anonymousLogin", function (t) {
                return b().then(function (n) {
                  n.default.anonymousLogin(t);
                });
              }),
              (this.bizToken = ""),
              (this.country = ""),
              (this.version = ""),
              (this.avatarUrl = ""),
              (this.lang = ""),
              (this.nickName = ""),
              (this.udbUserId = 0),
              (this.isLogin = !1),
              (this.ua = "wap&1.0.4&nimoTV"),
              (this.isAnchor = ""),
              this.getUserInfo();
          }
          return (
            c()(t, [
              {
                key: "getUserInfo",
                value: function () {
                  return (
                    (this.udbUserId = parseInt(l.a.get("udbUserId") || 0, 10)),
                    (this.bizToken = l.a.get("bizToken")),
                    (this.userid = l.a.get("userid")),
                    (this.nickName = l.a.get("userName")),
                    (this.avatarUrl = l.a.get("avatarUrl")),
                    (this.version = l.a.get("version")),
                    (this.isAnchor = l.a.get("isAnchor")),
                    (this.lang = Object(p.k)()),
                    (this.country = Object(p.g)()),
                    (this.cCountry = Object(p.d)()),
                    (this.clang = Object(p.f)()),
                    (this.guid = Object(p.j)()),
                    (this.mid = Object(p.l)()),
                    (this.deviceId = Object(p.l)()),
                    (this.safeDeviceId = l.b.get("sdid") || ""),
                    (this.isLogin = this.udbUserId > 0),
                    {
                      userid: this.userid,
                      udbUserId: this.udbUserId,
                      bizToken: this.bizToken,
                      userName: this.nickName,
                      avatarUrl: this.avatarUrl,
                      version: this.version,
                      lang: this.lang,
                      country: this.country,
                      cCountry: this.cCountry,
                      clang: this.clang,
                      ua: this.ua,
                      guid: this.guid,
                      mid: this.mid,
                      deviceId: this.deviceId,
                      safeDeviceId: this.safeDeviceId,
                      isAnchor: this.isAnchor,
                    }
                  );
                },
              },
              {
                key: "login",
                value: function (t) {
                  var n = this,
                    e = t.phone,
                    r = t.password,
                    o = t.success,
                    i = t.error,
                    u = function () {
                      i.apply(void 0, arguments);
                    },
                    a = function (t) {
                      return n.loginSuccessCallback(t).then(o).catch(u);
                    };
                  b().then(function (t) {
                    t.default.login({
                      phone: e,
                      password: r,
                      success: a,
                      error: u,
                    });
                  });
                },
              },
              {
                key: "thirdLogin",
                value: function (t) {
                  var n = this,
                    e = t.style,
                    r = t.type,
                    i = t.success,
                    u = t.error,
                    a = t.data,
                    c = function () {
                      u.apply(void 0, arguments);
                    },
                    s = function (t) {
                      t.bizData;
                      var e = o()(t, m),
                        u = JSON.parse(a.bizData),
                        s = u.birthday,
                        f = void 0 === s ? null : s,
                        l = u.countryCode;
                      return n
                        .loginSuccessCallback(
                          w(w({}, e), {}, { birthday: f, countryCode: l }),
                          !0,
                          r
                        )
                        .then(i)
                        .catch(c);
                    };
                  b().then(function (t) {
                    t.default.thirdLogin({
                      style: e,
                      type: r,
                      data: a,
                      success: s,
                      error: c,
                    });
                  });
                },
              },
              {
                key: "thirdLoginConnect",
                value: function (t) {
                  var n = this,
                    e = t.style,
                    r = t.type,
                    o = t.success,
                    i = t.error,
                    u = t.data,
                    a = function () {
                      i.apply(void 0, arguments);
                    },
                    c = function (t) {
                      var e = JSON.parse(u.bizData),
                        i = e.birthday,
                        c = void 0 === i ? null : i,
                        s = e.countryCode,
                        f = void 0 === s ? "" : s;
                      return n
                        .loginSuccessCallback(
                          w(w({}, t), {}, { birthday: c, countryCode: f }),
                          !0,
                          r
                        )
                        .then(o)
                        .catch(a);
                    };
                  b().then(function (t) {
                    t.default.thirdLoginConnect({
                      style: e,
                      type: r,
                      data: u,
                      success: c,
                      error: a,
                    });
                  });
                },
              },
              {
                key: "loginSuccessCallback",
                value: function (t, n, r) {
                  var o = t.data;
                  return (function (t) {
                    var n = this,
                      r = t.biztoken,
                      o = t.uid,
                      i = t.version,
                      u = t.birthday,
                      a = void 0 === u ? null : u,
                      c = t.countryCode,
                      s = void 0 === c ? Object(p.g)() : c,
                      f = t.isThirdLogin,
                      d = t.type;
                    l.a.set("version", i, _), l.a.set("bizToken", r, _);
                    var h = {
                        tw: 1,
                        gg: 3,
                        fb: 2,
                        phone: 4,
                        line: 7,
                        ins: 6,
                        zalo: 8,
                      },
                      v = {
                        lcid: Object(p.k)(),
                        countryCode: s,
                        accountType: d ? h[d] : h.phone,
                        version: i,
                        udbDeviceType: "WEB",
                        bizToken: r,
                        udbUserId: o,
                        avatarUrl: f
                          ? decodeURIComponent(l.a.get("avatar"))
                          : void 0,
                        nickName: f ? l.a.get("nickname") : void 0,
                      };
                    "string" === typeof a && (v.birthday = Number(a));
                    return e
                      .e("21c95")
                      .then(e.bind(null, "f0HM"))
                      .then(function (t) {
                        return t.userInfoModel
                          .registerOrLogin(v, { uid: o })
                          .then(
                            function (t) {
                              return (
                                l.a.set("userid", t.userId, _),
                                l.a.set("userName", t.nickName, _),
                                l.a.set("udbUserId", t.udbUserId, _),
                                l.a.set("udb_uid", t.udbUserId, _),
                                l.a.set("isAnchor", t.isAnchor, _),
                                null == t.avatarUrl
                                  ? l.a.remove("avatarUrl")
                                  : l.a.set("avatarUrl", t.avatarUrl, _),
                                Object(y.a)(),
                                t
                              );
                            },
                            function (t) {
                              return (
                                10405 === t.code &&
                                  setTimeout(function () {
                                    n.logout();
                                  }, 800),
                                t
                              );
                            }
                          );
                      });
                  })({
                    biztoken: o.biztoken,
                    uid: o.uid,
                    version: o.version,
                    birthday: t.birthday,
                    countryCode: t.countryCode,
                    isThirdLogin: n,
                    type: r,
                  });
                },
              },
              {
                key: "logout",
                value: function () {
                  b().then(function (t) {
                    t.default.logout({
                      success: function (t) {
                        l.a.remove("avatarUrl"),
                          l.a.remove("userName"),
                          l.a.remove("version"),
                          l.a.remove("bizToken"),
                          l.a.remove("udb_biztoken"),
                          l.a.remove("udb_guiddata"),
                          l.a.remove("udb_openid"),
                          l.a.remove("udb_passport"),
                          l.a.remove("udb_uid"),
                          l.a.remove("udbUserId"),
                          l.a.remove("yyuid"),
                          l.a.remove("userid"),
                          !0 === ((t || {}).data || {}).destroyUser
                            ? Object(h.a)()
                            : location.reload(),
                          Object(y.a)();
                      },
                    });
                  });
                },
              },
              {
                key: "autoLogout",
                value: function () {
                  var t = this;
                  Object(v.a)(800).then(function () {
                    return t.logout();
                  });
                },
              },
              {
                key: "checkLogin",
                value: function (t, n) {
                  return (
                    this.getUserInfo(),
                    !!this.isLogin ||
                      (t && this.openAuthView("login", "", n), !1)
                  );
                },
              },
              {
                key: "openAuthView",
                value: function (t) {
                  var n = this,
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    o = r.redirectDelay;
                  window.self !== window.top || window._NIMO_NEW_PAGE_LOGIN_
                    ? d.b.login(t)
                    : o
                    ? setTimeout(function () {
                        n.redirectAuth(e, t);
                      }, o)
                    : this.redirectAuth(e, t);
                },
              },
              {
                key: "redirectAuth",
                value: function (t, n) {
                  var e = window.location.search,
                    r = "?next="
                      .concat(encodeURIComponent(t || location.href))
                      .concat(e ? "&".concat(e.substring(1)) : ""),
                    o = ""
                      .concat(location.protocol, "//")
                      .concat("m.nimo.tv", "/")
                      .concat(n)
                      .concat(r);
                  window.location.href = o;
                },
              },
              {
                key: "sendVerifyCode",
                value: function (t) {
                  b().then(function (n) {
                    n.default.codeSend(t);
                  });
                },
              },
              {
                key: "register",
                value: function (t) {
                  var n = this,
                    e = t.phone,
                    r = t.password,
                    o = t.smsCode,
                    i = t.birthday,
                    u = t.success,
                    a = t.error,
                    c = function () {
                      a.apply(void 0, arguments);
                    },
                    s = function (t) {
                      return n
                        .loginSuccessCallback(w(w({}, t), {}, { birthday: i }))
                        .then(u)
                        .catch(c);
                    };
                  b().then(function (t) {
                    t.default.register({
                      phone: e,
                      password: r,
                      smsCode: o,
                      success: s,
                      error: c,
                    });
                  });
                },
              },
              {
                key: "findPassword",
                value: function (t) {
                  var n = t.phone,
                    e = t.password,
                    r = t.smsCode,
                    o = t.success,
                    i = t.error;
                  b().then(function (t) {
                    t.default.passFind({
                      phone: n,
                      password: e,
                      smsCode: r,
                      success: o,
                      error: i,
                    });
                  });
                },
              },
            ]),
            t
          );
        })();
      n.default = new I();
    },
    JwEE: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return r;
      });
      var r = "".concat("NiMO_IFRAME_LOGIN", "_LOGIN"),
        o = { LOGIN: r };
      n.b = {
        login: function (t) {
          Promise.all([e.e("4b99f"), e.e("170a7")])
            .then(e.bind(null, "uOuc"))
            .then(function (n) {
              (0, n.default)({ type: t, events: o });
            });
        },
      };
    },
    KFtC: function (t, n, e) {
      "use strict";
      e.d(n, "Q", function () {
        return r.l;
      }),
        e.d(n, "k", function () {
          return r.e;
        }),
        e.d(n, "P", function () {
          return r.k;
        }),
        e.d(n, "p", function () {
          return r.f;
        }),
        e.d(n, "N", function () {
          return r.i;
        }),
        e.d(n, "O", function () {
          return r.j;
        }),
        e.d(n, "g", function () {
          return r.d;
        }),
        e.d(n, "d", function () {
          return r.b;
        }),
        e.d(n, "f", function () {
          return r.c;
        }),
        e.d(n, "R", function () {
          return r.m;
        }),
        e.d(n, "r", function () {
          return r.g;
        }),
        e.d(n, "a", function () {
          return r.a;
        }),
        e.d(n, "I", function () {
          return p.a;
        }),
        e.d(n, "E", function () {
          return y;
        }),
        e.d(n, "J", function () {
          return m;
        }),
        e.d(n, "s", function () {
          return g;
        }),
        e.d(n, "L", function () {
          return w;
        }),
        e.d(n, "T", function () {
          return b;
        }),
        e.d(n, "M", function () {
          return _;
        }),
        e.d(n, "K", function () {
          return I;
        }),
        e.d(n, "H", function () {
          return O;
        }),
        e.d(n, "q", function () {
          return S;
        }),
        e.d(n, "u", function () {
          return E;
        }),
        e.d(n, "B", function () {
          return A;
        }),
        e.d(n, "z", function () {
          return T;
        }),
        e.d(n, "A", function () {
          return k;
        }),
        e.d(n, "v", function () {
          return N;
        }),
        e.d(n, "y", function () {
          return L;
        }),
        e.d(n, "U", function () {
          return C;
        }),
        e.d(n, "G", function () {
          return B;
        }),
        e.d(n, "o", function () {
          return R;
        }),
        e.d(n, "h", function () {
          return P;
        }),
        e.d(n, "x", function () {
          return U;
        }),
        e.d(n, "t", function () {
          return j;
        }),
        e.d(n, "c", function () {
          return D;
        }),
        e.d(n, "m", function () {
          return M;
        }),
        e.d(n, "l", function () {
          return d.a;
        }),
        e.d(n, "j", function () {
          return h.a;
        }),
        e.d(n, "n", function () {
          return x;
        }),
        e.d(n, "F", function () {
          return F;
        }),
        e.d(n, "b", function () {
          return G;
        }),
        e.d(n, "w", function () {
          return V;
        }),
        e.d(n, "D", function () {
          return J;
        }),
        e.d(n, "C", function () {
          return H;
        }),
        e.d(n, "e", function () {
          return K;
        }),
        e.d(n, "i", function () {
          return W;
        }),
        e.d(n, "S", function () {
          return z;
        });
      e("ZTQi"), e("I7c/");
      var r = e("YZRX"),
        o = e("nimoua"),
        i = e.n(o),
        u = e("cOjp"),
        a = e("lpJ4"),
        c = e("66+j"),
        s = e("BYFT"),
        f = e("VdUd"),
        l = (e("9ZvN"), {}),
        p = e("yTNv"),
        d = e("5yvJ"),
        h = e("X8JN"),
        v = u.b.log,
        y = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 200;
          if (window.isHomeSPA) a.a.push(t);
          else {
            var e = function () {
              location.href = "//".concat(location.hostname).concat(t);
            };
            "number" === typeof n && n > 0 ? setTimeout(e, n) : e();
          }
        },
        m = function () {
          var t = 0,
            n = 0,
            e = Array.prototype.slice.apply(arguments),
            r = e.length;
          0 === r && (n = 1),
            1 === r && (n = e[0]),
            2 === r && ((t = e[0]), (n = e[1]));
          var o = (n *= 1) - (t *= 1) + 1,
            i = Math.random(),
            u = t + Math.floor(i * o);
          return u;
        },
        g = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : -8,
            n = new Date(),
            e = n.getTime() - 6e4 * n.getTimezoneOffset(),
            r = new Date(e + 36e5 * t);
          return r;
        },
        w = function (t) {
          var n = t || {},
            e = n.alias,
            r = n._extraParams,
            o = (t || {}).alise,
            i = S(t),
            u = (o = o || e) ? "/".concat(o) : "/live/".concat(i);
          return void 0 !== r && (u = Object(c.a)(u, r)), u;
        },
        b = function (t) {
          var n = t || {},
            e = n.alias,
            r = n._extraParams,
            o = (t || {}).alise,
            i = S(t),
            u = "/user/".concat((o = o || e) || i);
          return void 0 !== r && (u = Object(c.a)(u, r)), u;
        },
        _ = function (t) {
          var n = w(t);
          return "".concat(s.f).concat(n);
        },
        I = function t(n) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          t.queue.forEach(function (t, e) {
            try {
              t(n, e);
            } catch (r) {
              console.error(r);
            }
          });
          var r = i.a.isInNimoApp,
            o = i.a.isInNimoPc;
          if (
            (v("触发roomEnter -> ", { isInNimoApp: r, data: n, opt: e }),
            r ||
              o ||
              Object(f.a)({
                from:
                  (null === n || void 0 === n ? void 0 : n._from) ||
                  "other_click",
                traceData:
                  (null === n || void 0 === n ? void 0 : n.traceData) || "",
              }),
            r)
          ) {
            var u = null === n || void 0 === n ? void 0 : n.anchorId,
              c = null === n || void 0 === n ? void 0 : n.roomId;
            c &&
              u &&
              null !== e &&
              void 0 !== e &&
              e.jumpToLiveRoom &&
              (null === e ||
                void 0 === e ||
                e.jumpToLiveRoom({ anchorId: u, roomId: c }));
          } else
            o && l.openBrowser
              ? l.openBrowser("".concat(s.f).concat(w(n)))
              : (null !== e && void 0 !== e && e.openNewTab) ||
                window._IS_POPOUT_
              ? window.open("".concat(s.f).concat(w(n)))
              : window.isHomeSPA
              ? ((window.__clickRoomFrom =
                  (null === n || void 0 === n ? void 0 : n._from) ||
                  "other_click"),
                (window.__clickRoomTs = P()),
                a.a.push(w(n)))
              : setTimeout(function () {
                  location.href = "".concat(s.f).concat(w(n));
                }, 200);
        };
      (I.queue = []),
        (I.add = function (t) {
          I.queue.push(t);
        });
      var O = function (t, n) {
          if (i.a.isInNimoApp) {
            var e;
            null === n ||
              void 0 === n ||
              null === (e = n.showUserInfoDialog) ||
              void 0 === e ||
              e.call(n, {
                udbUserId: null === t || void 0 === t ? void 0 : t.udbUserId,
                from: null === n || void 0 === n ? void 0 : n.from,
              });
          } else {
            var r = t.userId,
              o = t.roomId,
              u = "https://".concat(location.hostname, "/user/").concat(r || o);
            null !== n && void 0 !== n && n.openNewTab
              ? window.open(u, "_blank")
              : window.isHomeSPA
              ? a.a.push("/user/".concat(r || o))
              : window.open(u, "_self");
          }
        },
        S = function (t) {
          return (
            (null === t || void 0 === t ? void 0 : t.roomId) ||
            (null === t || void 0 === t ? void 0 : t.roomID) ||
            (null === t || void 0 === t ? void 0 : t.roomid) ||
            (null === t || void 0 === t ? void 0 : t.id)
          );
        },
        E = function (t) {
          return (
            [
              "https://article.nimo.tv",
              "https://web-article.nimostatic.tv",
            ].indexOf(t) > -1
          );
        },
        A = function (t) {
          return [
            "https://s3-static.nimo.tv",
            "https://s3-pre-static.nimo.tv",
          ].includes(t);
        },
        T = function (t) {
          return (
            [
              "https://www.nimo.tv",
              "https://m.nimo.tv",
              "https://dashboard.nimo.tv",
              "https://".concat(location.hostname),
              "https://".concat("m.nimo.tv"),
              "https://".concat("dashboard.nimo.tv"),
            ].indexOf(t) > -1
          );
        },
        k = function () {
          var t = (Object(p.a)() || {}).pathArray;
          return "i" === (void 0 === t ? [] : t)[0];
        };
      function N(t) {
        var n = new Date(t),
          e = n.getFullYear();
        return n.setHours(0, 0, 0, 0), n.setFullYear(e + 18), n <= new Date();
      }
      var L = function () {
          return /^.*(nimo).*$/.test(navigator.userAgent);
        },
        C = function () {
          var t = Array.from(arguments),
            n = window.open.apply(void 0, t);
          return (n.location.href = decodeURIComponent(t[0])), n;
        },
        B = function (t) {
          if (!t || "number" !== typeof t) return null;
          var n = "th";
          switch (t % 10) {
            case 1:
              n = "st";
              break;
            case 2:
              n = "nd";
              break;
            case 3:
              n = "rd";
          }
          return n;
        },
        R = function (t) {
          var n;
          for (n = ""; n.length < t; n += Math.random().toString(36).substr(2));
          return n.substr(0, t);
        },
        P = function () {
          return window.performance &&
            "function" === typeof window.performance.now
            ? Math.floor(performance.now())
            : Date.now();
        },
        U = function () {
          return self.frameElement && "IFRAME" === self.frameElement.tagName;
        };
      function j() {
        return window.self !== window.top;
      }
      function D(t) {
        return decodeURIComponent(String(t).replace(/\+/g, " "));
      }
      function M() {
        if (i.a.isInNimoStreamer) return "nimostreamer";
        var t = i.a.os.name.toLocaleLowerCase();
        return i.a.isInNimoApp ? t : i.a.isWap ? "wap" : "web";
      }
      var x = function () {
          var t = (function () {
            var t = "";
            if (window.parent !== window)
              try {
                t = parent.location.href;
              } catch (n) {
                t = document.referrer;
              }
            return t;
          })();
          return new URL(t).host;
        },
        F = function () {},
        G = function (t) {
          var n = Number(t);
          return -1 === [185, 420, 208, 210, 211, 263].indexOf(n);
        },
        V = function (t) {
          return "function" === typeof t;
        },
        J = function (t) {
          return "undefined" === typeof t;
        },
        H = function (t) {
          return "string" === typeof t;
        },
        K = function () {
          var t = navigator.platform.match(/(Win|Mac|Linux)/);
          return {
            os: (t && t[1]) || "",
            arch:
              navigator.userAgent.match(/x86_64|Win64|WOW64/) ||
              "x64" === navigator.cpuClass
                ? "x64"
                : "x86",
          };
        },
        W = function () {
          var t = location.hostname,
            n = "m.nimo.tv";
          return i.a.isWeb ? t : n;
        },
        z = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2;
          return t >= 0 && t <= 999
            ? t
            : t >= 1e3 && t <= 999999
            ? "".concat((t / 1e3).toFixed(n), "K")
            : t >= 1e6
            ? "".concat((t / 1e6).toFixed(n), "M")
            : t;
        };
    },
    KNwJ: function (t) {
      t.exports = JSON.parse(
        '{"CU":[1034],"DZ":[1025],"AF":[1025],"AR":[1034],"AE":[1025],"OM":[1025],"AZ":[1055,1049],"EG":[1025],"AG":[1033],"BS":[1033],"PK":[1000,1033],"PY":[1034],"PS":[1025],"BH":[1025],"PA":[1034],"BR":[1046],"BO":[1034],"BZ":[1033,1034],"RU":[1049],"EC":[1034],"ER":[1025],"PH":[1033,1124],"CO":[1034],"CR":[1034],"GD":[1033],"HT":[1033],"HN":[1034],"DJ":[1025],"CA":[1033],"KH":[1000],"QA":[1025],"KM":[1025],"KW":[1025],"LA":[1000],"LB":[1025],"LY":[1025],"MY":[1086,1057],"MR":[1025],"US":[1033,1034],"BD":[1000],"PE":[1034],"MM":[1000],"MA":[1025],"MX":[1034],"NI":[1034],"JP":[1041],"SV":[1034,1033],"SA":[1025],"SD":[1025],"SO":[1025],"TH":[1054],"TT":[1033],"ABC":[1000,1057,1066,1054],"TN":[1025],"TR":[1055],"GT":[1034],"VE":[1034],"BN":[1086,1033],"UY":[1034],"ES":[1034],"SG":[1033,1028],"SY":[1025],"JM":[1033],"YE":[1025],"IQ":[1025],"IR":[1025],"IL":[1025],"IN":[1081,1033],"ID":[1057],"JO":[1025],"VN":[1066],"TD":[1025],"CL":[1034],"CN":[1028],"MO":[1028],"TW":[1028],"HK":[1028]}'
      );
    },
    KkFV: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return o;
      }),
        e.d(n, "b", function () {
          return i;
        }),
        e.d(n, "c", function () {
          return u;
        });
      var r = "nimo.tv",
        o = {
          get: function (t) {
            var n = document.cookie.match(
              new RegExp("(^| )".concat(t, "=([^;]*)(;|$)"))
            );
            return null != n ? decodeURI(n[2]) : null;
          },
          set: function (t, n, e, o) {
            var i = null !== e && void 0 !== e ? e : 30,
              u = o || r,
              a = 0;
            if (i) {
              var c = new Date();
              c.setTime(c.getTime() + 864e5 * i), (a = c.toGMTString());
            }
            var s = "expires=".concat(a),
              f = ""
                .concat(t, "=")
                .concat(encodeURI(n), ";domain=.")
                .concat(u, ";path=/;")
                .concat(s);
            document.cookie = f;
          },
          remove: function (t, n) {
            var e = n || r,
              o = new Date();
            o.setTime(o.getTime() - 1);
            var i = this.get(t);
            null != i &&
              (document.cookie = ""
                .concat(t, "=")
                .concat(i, ";domain=.")
                .concat(e, ";path=/;expires=")
                .concat(o.toGMTString()));
          },
          del: function () {
            o.remove.apply(o, arguments);
          },
          clear: function () {
            for (
              var t = document.cookie.split(";"), n = 0;
              n < t.length;
              n += 1
            ) {
              var e,
                r,
                o =
                  null ===
                    (r = (
                      null === (e = t[n]) || void 0 === e
                        ? void 0
                        : e.split("=")
                    )[0]) || void 0 === r
                    ? void 0
                    : r.trim();
              this.remove(o), this.remove(o, window.location.host);
            }
          },
        },
        i = {
          get: function (t) {
            try {
              return window.localStorage.getItem(t.toLowerCase()) || null;
            } catch (n) {
              console.log(n);
            }
            return null;
          },
          set: function (t, n) {
            try {
              window.localStorage.setItem(t.toLowerCase(), n);
            } catch (e) {
              console.log(e);
            }
          },
          remove: function (t) {
            try {
              window.localStorage.removeItem(t.toLowerCase());
            } catch (n) {
              console.log(n);
            }
          },
          has: function (t) {
            try {
              return window.localStorage.hasOwnProperty(t.toLowerCase());
            } catch (n) {
              console.log(n);
            }
            return !1;
          },
          clear: function () {
            try {
              window.localStorage.clear();
            } catch (t) {
              console.log(t);
            }
          },
        },
        u = {
          get: function (t) {
            try {
              return window.sessionStorage.getItem(t.toLowerCase()) || null;
            } catch (n) {
              console.log(n);
            }
            return null;
          },
          set: function (t, n) {
            try {
              window.sessionStorage.setItem(t.toLowerCase(), n);
            } catch (e) {
              console.log(e);
            }
          },
          remove: function (t) {
            try {
              window.sessionStorage.removeItem(t.toLowerCase());
            } catch (n) {
              console.log(n);
            }
          },
          clear: function () {
            try {
              window.sessionStorage.clear();
            } catch (t) {
              console.log(t);
            }
          },
        };
    },
    Kw0i: function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return I;
      }),
        e.d(n, "a", function () {
          return b;
        });
      e("RlNQ");
      var r = e("gtb+"),
        o = e.n(r),
        i = e("rIiI"),
        u = e.n(i),
        a = e("58BP"),
        c = e.n(a),
        s = e("tWqE"),
        f = e.n(s),
        l = e("gy9q"),
        p = e.n(l),
        d = e("7DFi"),
        h = e.n(d),
        v = e("TJEx"),
        y = e.n(v),
        m = e("CbEt"),
        g = e.n(m);
      function w(t) {
        var n = (function () {
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
          var e,
            r = y()(t);
          if (n) {
            var o = y()(this).constructor;
            e = Reflect.construct(r, arguments, o);
          } else e = r.apply(this, arguments);
          return h()(this, e);
        };
      }
      var b = {
          PLAYER_TECH_LOADED: "player.tech.ready",
          PLAYER_LOAD_TIMEOUT: "player.load.timeout",
          PLAYER_LOAD_ERROR: "player.load.error",
          PLAYER_STAT_INFO: "player.stat.info",
          PLAYER_STREAM_CHANGE: "player.stream.change",
          PLAYER_CHANGE_LOCK_STATE: "player.change.lock.state",
          CLIPBOARD_COPY: "clipboard.copy",
          ROOMCHAT_RECV: "taf.roomchat.recv",
          ROOMCHAT_SEND: "taf.roomchat.send",
          GIFT_LIST_RECV: "taf.gift.recv",
          LIVE_ROOM_SHARE: "live.room.share",
          LIVE_SHARED: "live.shared",
          LIVE_STREAM_STOP: "live.stream.stop",
          LIVE_STREAM_NEW: "live.stream.new",
          PLAYBACK_NOTIFY: "playback.notify",
          THEME_CHANGE: "theme.change",
          SIDEBAR_LOCATION: "sidebar.location",
          PROFILE_LANG_CHANGE: "profilelang.change",
          PLAYER_FULLSCREEN: "palyer.fullscreen",
          PLAYER_EXIT_FULLSCREEN: "palyer.exit_fullscreen",
          FOLLOW: "follow",
          UNFOLLOW: "unfollow",
          FANS_GROUP_CONSUME_FANS_GIFT: "fansGroup.consumeFansGift",
          FANS_GROUP_BADGE_LIST_UPDATE: "fansGroup.badgeListUpdate",
          ROOMCHAT_TOP_GUIDE_MSG: "taf.roomchat.topGuideMsg",
          TEXT_BULLETSCREEN_SETTINGS: "text.bulletscreen.settings",
          LIVE_INTERACTIVE_POP_OUT: "live.interactive.pop.out",
          ROOM_SEND_MSG_SUCCEED: "room.send.msg.succeed",
          ROOM_SEND_GIFT_STATUS: "room.send.gift.status",
          TAF_MESSAGE_RECEIVE: "taf.message.receive",
          BSLOTTERY_STATE: "bslottery.state",
          GLOBAL_BUSINESS_MESSAGE: "global.business.message",
          SHOW_USER_INFO_DIALOG: "show.user.info.dialog",
          POPUP_JOIN_FANS_MODAL: "fansGroup.popup.joinFansModal",
          POPUP_PAID_SUBSCRIPTION_MODAL: "room.subscribePay.pop",
          OPEN_WEEK_STAR_ACTIVITY_MODAL: "room.week.star.activity.modal",
          POPUP_FANS_PRIVILEGE_POPOVER: "fansGroup.popup.fansPrivilegePopover",
          AT_USER_IN_BARRAGE_OR_IM: "chat.at.user.barrage",
          POPUP_FORTUNE_GIFT_MODAL: "fortuneGift.popup.fortuneGiftModal",
          UPDATE_ACCOUNT_BALANCE: "room.account.balance.update",
          POPOUT_SOCIAL_MEDIA: "social.media.popout",
          ROOM_INTERACTIVE_MODULE_POPOUT: "room.interactive.module.popout",
          ROOM_INTERACTIVE_GIFT_MODULE_POPOUT:
            "room.interactiveGift.module.popout",
          CHATBOX_FILL_CONTENT: "room.chatbox.fillcontent",
          DASHBOARD_OPEN_ACTION: "dashboard.open.action",
          DASHBOARD_OPEN_FEEDBACK: "dashboard.open.feedback",
          TEXT_FORBID: "TEXT_FORBID",
          DASHBOARD_OPEN_LEVEL_UP: "dashboard.open.level_up",
          POPUP_WEEKLY_STAR_MODAL: "weeklyStar.popup.modal",
          OPEN_FINAL_BOX: "revenue.open.final.modal",
          REPLY_COMMENT: "reply.comment",
          REPLY_COMMENT_SUCCESS: "reply.comment.success",
          OPEN_FANS_BOX: "revenue.open.fans.modal",
          GIFT_PACK_TIP: "GIFT_PACK_TIP",
          SHOW_ANCHOR_DAILY_TASK_MODAL: "room.anchorDailyTask.modal.show",
          DASHBOARD_GRAPHIC_CONFIG_DATA: "dashboard.graphic.config.data",
          PERSONAL_COMMENT: "personal.comment",
          PERSONAL_DEL_COMMENT: "personal.del.comment",
          OPEN_BOSS_COMING_PANEL: "open.boss.coming.panel",
          OPEN_RAMADAN_BOX: "revenue.open.ramadan.modal",
          ANMOSID_UPDATE: "anmosid.update",
          GIFT_SENDED: "GIFT_SENDED",
          OPEN_WORLD_CUP_MODAL: "revenue.open.world.cup.modal",
        },
        _ = [b.WS_CONNECT, b.SIDEBAR_LOCATION],
        I = new ((function (t) {
          p()(e, t);
          var n = w(e);
          function e() {
            var t;
            return (
              u()(this, e),
              ((t = n.call(this)).emitedEvents = {}),
              t.initOneTimeEventListener(),
              t
            );
          }
          return (
            c()(e, [
              {
                key: "initOneTimeEventListener",
                value: function () {
                  var t = this;
                  _.forEach(function (n) {
                    t.once(n, function () {
                      for (
                        var e = arguments.length, r = new Array(e), o = 0;
                        o < e;
                        o++
                      )
                        r[o] = arguments[o];
                      t.saveEvent.apply(t, [n].concat(r));
                    });
                  });
                },
              },
              {
                key: "emit",
                value: function () {
                  for (
                    var t, n = arguments.length, r = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  (t = f()(y()(e.prototype), "emit", this)).call.apply(
                    t,
                    [this].concat(r)
                  );
                },
              },
              {
                key: "re_emit",
                value: function (t) {
                  if (this.hasEmited(t)) {
                    var n = this.emitedEvents[t];
                    this.emit.apply(this, [t].concat(o()(n)));
                  }
                },
              },
              {
                key: "hasEmited",
                value: function (t) {
                  return void 0 !== this.emitedEvents[t];
                },
              },
              {
                key: "saveEvent",
                value: function (t) {
                  for (
                    var n = arguments.length,
                      e = new Array(n > 1 ? n - 1 : 0),
                      r = 1;
                    r < n;
                    r++
                  )
                    e[r - 1] = arguments[r];
                  this.emitedEvents[t] = e;
                },
              },
              {
                key: "on",
                value: function (t, n) {
                  var r = _.indexOf(t) > -1;
                  f()(y()(e.prototype), "on", this).call(this, t, n),
                    r && this.hasEmited(t) && this.re_emit(t);
                },
              },
              {
                key: "off",
                value: function (t, n) {
                  if (n)
                    f()(y()(e.prototype), "removeListener", this).call(
                      this,
                      t,
                      n
                    );
                  else {
                    var r = this._events || {};
                    (r[t] || null) && delete r[t];
                  }
                },
              },
              {
                key: "addListener",
                value: function () {
                  this.on.apply(this, arguments);
                },
              },
            ]),
            e
          );
        })(g.a))();
      I.setMaxListeners(12);
    },
    L2qc: function (t, n, e) {
      t.exports = e("4KFe")(9);
    },
    NkSV: function (t) {
      t.exports = JSON.parse(
        '{"AC":["en"],"AD":["ca"],"AE":["ar","en"],"AF":["fa"],"AG":["en"],"AI":["en"],"AL":["ar","fr"],"AM":["hy"],"AN":["en"],"AO":["pt"],"AQ":["en"],"AR":["es"],"AS":["en"],"AT":["de"],"AU":["en"],"AW":["nl"],"AX":["sv"],"AZ":["az","ru"],"BA":["en","sh","hr"],"BB":["en"],"BD":["bn"],"BE":["fr","nl","en"],"BF":["fr"],"BG":["bg"],"BH":["ar","en"],"BI":["fr"],"BJ":["en"],"BL":["fr"],"BM":["en"],"BN":["ms","en"],"BO":["es"],"BQ":["nl"],"BR":["pt","es"],"BS":["es"],"BT":["dz"],"BV":["en"],"BW":["en"],"BY":["ru","be"],"BZ":["en","es"],"CA":["en"],"CC":["en"],"CD":["fr"],"CF":["fr"],"CG":["fr"],"CH":["de","fr","it"],"CI":["fr"],"CK":["en"],"CL":["es"],"CM":["fr","en"],"CN":["zh"],"CO":["es"],"CR":["es"],"CU":["es"],"CV":["pt"],"CW":["es"],"CX":["en"],"CY":["en","el","tr"],"CZ":["cs"],"DE":["de"],"DG":["en"],"DJ":["fr","ar"],"DK":["da"],"DM":["es"],"DO":["es"],"DZ":["ar","fr"],"EC":["es"],"EE":["et"],"EG":["ar","en","fr"],"EH":["ar"],"ER":["en","ar"],"ES":["es"],"ET":["am"],"FI":["fi","sv"],"FJ":["en"],"FK":["en"],"FM":["en"],"FO":["da","fo"],"FR":["fr"],"GA":["fr"],"GB":["en"],"GD":["en"],"GE":["ka"],"GF":["fr"],"GG":["en"],"GH":["en"],"Gl":["en","es"],"GL":["en"],"GM":["en"],"GN":["fr"],"GP":["fr"],"GQ":["es"],"GR":["el"],"GS":["en"],"GT":["es"],"GU":["en"],"GW":["ht"],"GY":["en"],"HK":["zh","en"],"HM":["en"],"HN":["es"],"HR":["hr"],"HT":["fr"],"HU":["hu"],"ID":["id","in"],"IE":["en","ga"],"IL":["he"],"IM":["en"],"IN":["hi"],"IO":["en"],"IQ":["ar"],"IR":["fa"],"IS":["is"],"IT":["it"],"JE":["en"],"JM":["en"],"JO":["en"],"JP":["ja"],"KE":["en","sw"],"KG":["ru","ky"],"KH":["km"],"KI":["en"],"KM":["ar","fr"],"KN":["en"],"KP":["ko"],"KR":["ko"],"KW":["ar","en"],"KY":["en"],"KZ":["ru","kk"],"LA":["lo"],"LB":["ar"],"LC":["en"],"LI":["de"],"LK":["ta","si"],"LR":["en"],"LS":["en"],"LT":["lt"],"LU":["de","fr","lb"],"LV":["lv"],"LY":["ar"],"MA":["ar","fr"],"MC":["fr"],"MD":["mo"],"ME":["sr"],"MF":["fr"],"MG":["fr"],"MH":["mh"],"MK":["mk"],"ML":["fr"],"MM":["my"],"MN":["mn"],"MO":["zh"],"MP":["en"],"MQ":["fr"],"MR":["ar"],"MS":["en"],"MT":["en","mt"],"MU":["en","fr"],"MV":["en","dv"],"MW":["en"],"MX":["es"],"MY":["ms","en"],"MZ":["pt"],"NA":["en"],"NC":["fr"],"NE":["fr"],"NF":["en"],"NG":["en"],"NI":["es"],"NL":["nl"],"NO":["no"],"NP":["ne"],"NR":["en"],"NU":["en"],"NZ":["en"],"OM":["ar","en"],"PA":["es"],"PE":["es"],"PF":["fr"],"PG":["en"],"PH":["fil","tl","en"],"PK":["ur"],"PL":["pl"],"PM":["fr"],"PN":["en"],"PR":["es","en"],"PS":["ar"],"PT":["pt"],"PW":["en"],"PY":["es"],"QA":["ar","en"],"RE":["fr"],"RO":["ro","en"],"RS":["sr"],"RU":["ru"],"RW":["fr","rw"],"SA":["ar"],"SB":["en"],"SC":["fr","ht"],"SD":["ar"],"SE":["sv"],"SG":["en","zh"],"SH":["en"],"SI":["sl"],"SJ":["no"],"SK":["sk"],"SL":["en"],"SM":["it"],"SN":["fr"],"SO":["ar","so"],"SR":["nl","to"],"SS":["ar"],"ST":["pt"],"SV":["es"],"SX":["nl"],"SY":["ar"],"SZ":["en"],"TC":["en"],"TD":["ar","fr"],"TF":["fr"],"TG":["fr"],"TH":["th"],"TJ":["ru","fa"],"TK":["en"],"TL":["pt"],"TM":["tk"],"TN":["ar"],"TO":["en"],"TP":["pt"],"TR":["tr"],"TT":["en"],"TV":["en"],"TW":["zh"],"TZ":["sw"],"UA":["ru","uk"],"UG":["en"],"UM":["en"],"US":["abc"],"UY":["es"],"UZ":["en","uz"],"VA":["it"],"VC":["en"],"VE":["es"],"VG":["en"],"VI":["en"],"VN":["vi"],"VU":["en"],"WF":["fr"],"WS":["en"],"YE":["ar"],"YT":["fr"],"ZA":["zu","af","en"],"ZM":["en"],"ZW":["en"]}'
      );
    },
    "O+iE": function (t, n, e) {
      "use strict";
      function r() {
        return new Promise(function (t) {
          if (window.Sentry) t(window.Sentry);
          else {
            var n = document.getElementById("nimo-sentry-script");
            if (n) {
              var e = function e() {
                n.removeEventListener("load", e),
                  n.removeEventListener("error", e),
                  window.Sentry ? t(window.Sentry) : t();
              };
              n.addEventListener("load", e), n.addEventListener("error", e);
            } else t();
          }
        });
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    QoJ3: function (t, n, e) {
      "use strict";
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function u(t) {
        if (null === t || void 0 === t)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(t);
      }
      t.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var n = {}, e = 0; e < 10; e++)
            n["_" + String.fromCharCode(e)] = e;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(n)
              .map(function (t) {
                return n[t];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (t) {
              r[t] = t;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (o) {
          return !1;
        }
      })()
        ? Object.assign
        : function (t, n) {
            for (var e, a, c = u(t), s = 1; s < arguments.length; s++) {
              for (var f in (e = Object(arguments[s])))
                o.call(e, f) && (c[f] = e[f]);
              if (r) {
                a = r(e);
                for (var l = 0; l < a.length; l++)
                  i.call(e, a[l]) && (c[a[l]] = e[a[l]]);
              }
            }
            return c;
          };
    },
    QtRC: function (t, n, e) {
      t.exports = e("4KFe")(5);
    },
    RlNQ: function (t, n, e) {
      var r = e("lwBl"),
        o = e("Fvii"),
        i = e("5HYm"),
        u = e("QtRC"),
        a = e("vNXk"),
        c = e("L2qc"),
        s = e("bcKt"),
        f = (e("C6AJ").Reflect || {}).construct,
        l = c(function () {
          function t() {}
          return !(f(function () {}, [], t) instanceof t);
        }),
        p = !c(function () {
          f(function () {});
        });
      r(r.S + r.F * (l || p), "Reflect", {
        construct: function (t, n) {
          i(t), u(n);
          var e = arguments.length < 3 ? t : i(arguments[2]);
          if (p && !l) return f(t, n, e);
          if (t == e) {
            switch (n.length) {
              case 0:
                return new t();
              case 1:
                return new t(n[0]);
              case 2:
                return new t(n[0], n[1]);
              case 3:
                return new t(n[0], n[1], n[2]);
              case 4:
                return new t(n[0], n[1], n[2], n[3]);
            }
            var r = [null];
            return r.push.apply(r, n), new (s.apply(t, r))();
          }
          var c = e.prototype,
            d = o(a(c) ? c : Object.prototype),
            h = Function.apply.call(t, d, n);
          return a(h) ? h : d;
        },
      });
    },
    TJEx: function (t, n, e) {
      t.exports = e("4KFe")(237);
    },
    TRr4: function (t, n) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    V4gF: function (t, n) {
      function e(t, n, e, r, o, i, u) {
        try {
          var a = t[i](u),
            c = a.value;
        } catch (s) {
          return void e(s);
        }
        a.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      (t.exports = function (t) {
        return function () {
          var n = this,
            r = arguments;
          return new Promise(function (o, i) {
            var u = t.apply(n, r);
            function a(t) {
              e(u, o, i, a, c, "next", t);
            }
            function c(t) {
              e(u, o, i, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    VdUd: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return o;
      });
      var r = e("KkFV"),
        o = function (t) {
          try {
            r.c.set("roomenterinfo", JSON.stringify(t)),
              r.c.set(
                "roomenterTraceData",
                JSON.stringify({ traceData: t.traceData })
              );
          } catch (n) {}
        };
    },
    WcAj: function (t, n) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    "X+NX": function (t, n) {
      (t.exports = function (t, n) {
        if (null == t) return {};
        var e,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (e = i[r]), n.indexOf(e) >= 0 || (o[e] = t[e]);
        return o;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    X8JN: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return o;
      });
      var r = e("KkFV");
      function o() {
        return (
          r.a.get("guid") ||
          (function (t) {
            var n = "";
            try {
              n = localStorage.getItem(t);
            } catch (e) {}
            return n;
          })("_SIGNAL_GUID_") ||
          window._SIGNAL_GUID_ ||
          ""
        );
      }
    },
    YZRX: function (t, n, e) {
      "use strict";
      e.d(n, "l", function () {
        return C;
      }),
        e.d(n, "e", function () {
          return B;
        }),
        e.d(n, "k", function () {
          return D;
        }),
        e.d(n, "f", function () {
          return F;
        }),
        e.d(n, "i", function () {
          return G;
        }),
        e.d(n, "j", function () {
          return K;
        }),
        e.d(n, "d", function () {
          return W;
        }),
        e.d(n, "b", function () {
          return z;
        }),
        e.d(n, "c", function () {
          return Y;
        }),
        e.d(n, "h", function () {
          return Z;
        }),
        e.d(n, "m", function () {
          return $;
        }),
        e.d(n, "g", function () {
          return X;
        }),
        e.d(n, "a", function () {
          return tt;
        });
      var r,
        o = e("q4i/"),
        i = e.n(o),
        u = e("V4gF"),
        a = e.n(u),
        c = e("ZTQi"),
        s = e.n(c),
        f = (e("28PD"), e("KkFV")),
        l = function () {
          return fetch("".concat("https://webapi.nimo.tv", "/geo")).then(
            function (t) {
              if (200 === t.status)
                return t.json().then(function (t) {
                  return null === t || void 0 === t ? void 0 : t.data;
                });
              throw new Error(t.status);
            }
          );
        },
        p = e("Kw0i"),
        d = e("cacY"),
        h = e("p1oI"),
        v = "lang",
        y = "1033",
        m = "clang",
        g = "country",
        w = "theme",
        b = "ccountry",
        _ = [
          "zh",
          "en",
          "id",
          "fil",
          "vi",
          "th",
          "ms",
          "pt",
          "es",
          "hi",
          "tr",
          "ar",
          "ru",
          "ja",
        ],
        I = {
          global: "1000",
          en: "1033",
          zh: "1028",
          id: "1057",
          fil: "1124",
          vi: "1066",
          th: "1054",
          ms: "1086",
          pt: "1046",
          es: "1034",
          hi: "1081",
          tr: "1055",
          ar: "1025",
          ru: "1049",
          ja: "1041",
        },
        O = null;
      function S(t) {
        return (O ||
          ((O = {}),
          _.forEach(function (t) {
            O[I[t]] = 1;
          })),
        O).hasOwnProperty(t);
      }
      function E(t) {
        return t ? (S(t) ? t : t === I.global ? y : null) : null;
      }
      function A(t) {
        return (function (t) {
          return t && /^\d{4,5}$/.test(t);
        })(t)
          ? t
          : null;
      }
      var T,
        k = function () {
          var t = navigator,
            n = t.languages || t.language || t.browserLanguage || "";
          Array.isArray(n) && (n = n.join(",")), (n = n.toLowerCase());
          var e = _.join("|");
          e = e.replace(/(-\w{2,5})/g, function (t) {
            return "(".concat(t, ")?");
          });
          var r = n.match(new RegExp(e));
          return (r = r && r[0] ? N(r[0]) : "");
        },
        N = function (t) {
          var n = t;
          return "zh" === t && (n = "zh"), "en" === t && (n = "en"), n;
        },
        L = !1,
        C = function (t) {
          var n,
            e = L;
          L = !0;
          var r = !1,
            o = null === t || void 0 === t ? void 0 : t.cookie,
            i =
              E(null === (n = o) || void 0 === n ? void 0 : n.code) ||
              E(null === t || void 0 === t ? void 0 : t.code);
          if (null === t || void 0 === t || !t.forceCookie) {
            if (
              (i ||
                e ||
                (i = (function () {
                  var t = Object(h.b)("_lang");
                  return E(t) || E(I[t]);
                })()),
              !i)
            ) {
              var u = f.a.get(v);
              u === I.global ? (i = E(u)) : (i = E(u)) && (r = !0);
            }
            var a;
            if (!i)
              i =
                null === (a = window.__NIMO_APP_DATA__) || void 0 === a
                  ? void 0
                  : a.lang;
          }
          if (
            (i ||
              (i = (function () {
                var t = k();
                return E(t) || E(I[t]);
              })()),
            i || (i = y),
            !r || !e)
          ) {
            var c = { key: v, expire: 24090 };
            (o = s()(c, o)), f.a.set(o.key, i, o.expire);
          }
          return String(i);
        },
        B = function () {
          return C();
        },
        R =
          (null === (r = window.__NIMO_APP_DATA__) || void 0 === r
            ? void 0
            : r.country) || f.a.get(g);
      function P(t) {
        return "string" === typeof t && "" !== t;
      }
      function U(t) {
        var n = t.toUpperCase();
        f.a.set(g, n, 360), (R = n);
      }
      function j() {
        return (j = a()(
          regeneratorRuntime.mark(function t() {
            var n, e;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!R) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return", R);
                  case 2:
                    return (t.next = 4), l();
                  case 4:
                    if (((t.t0 = t.sent), t.t0)) {
                      t.next = 7;
                      break;
                    }
                    t.t0 = {};
                  case 7:
                    return (
                      (n = t.t0),
                      U((e = P(n.country) ? n.country.toUpperCase() : "ID")),
                      t.abrupt("return", e)
                    );
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function D(t) {
        return (
          P(null === t || void 0 === t ? void 0 : t.code) && U(t.code),
          R
            ? Promise.resolve(R)
            : (T ||
                (T = (function () {
                  return j.apply(this, arguments);
                })()),
              T)
        );
      }
      function M(t) {
        return P(t) ? t : null;
      }
      P(R) && U(R);
      var x = !1;
      function F(t, n) {
        var e = t,
          r = n;
        if (t) {
          var o = d.a[t];
          r = o && o.length > 0 ? o[0] : null;
        } else {
          var i = d.b[n];
          i && i.length > 0 && (e = i.indexOf(R) > 0 ? R : i[0]);
        }
        return [e, r];
      }
      function G(t) {
        var n,
          e = t || {},
          r = e.code,
          o = e.country,
          u = M(r),
          a = !1,
          c = x;
        if (((x = !0), !u && !c)) {
          var s = F(
              (function () {
                var t = (M(Object(h.b)("_ccountry")) || "").toUpperCase();
                return ~Object.keys(d.a).indexOf(t) ? t : null;
              })(),
              J()
            ),
            l = i()(s, 2);
          (u = l[0]), (n = l[1]);
        }
        if (!u) {
          var p = F(M(f.a.get(b)), A(f.a.get(m))),
            v = i()(p, 2),
            y = v[0];
          (n = v[1]), (u = y) && (a = !0);
        }
        if (
          (!u && "string" === typeof o && o && (u = o.toUpperCase()),
          u || (u = "ABC"),
          !n)
        ) {
          var g = d.a[u];
          n = g && g.length > 0 ? g[0] : null;
        }
        return (
          (a && c) ||
            (u &&
              (function (t) {
                var n = t.toUpperCase();
                f.a.set(b, n, 360);
              })(u),
            n && V(n)),
          u
        );
      }
      function V(t) {
        f.a.set(m, t, 365);
      }
      function J() {
        return A(Object(h.b)("_clang"));
      }
      var H = !1;
      function K(t) {
        var n = t || {},
          e = n.code,
          r = n.country,
          o = !1,
          i = H;
        H = !0;
        var u = A(e);
        if (
          (u || i || (u = J()),
          u || ((u = A(f.a.get(m))) && (o = !0)),
          !u && "string" === typeof r && r)
        ) {
          var a = r.toUpperCase();
          u = "1000";
          var c = d.c[a];
          if (c) {
            var s = k().split("-")[0].toLowerCase(),
              l =
                c.find(function (t) {
                  return t === s;
                }) || c[0];
            d.d[l] && (u = d.d[l]);
          }
        }
        return !u || (o && i) || V(u), u;
      }
      function W() {
        return R || (D(), null);
      }
      function z() {
        var t = G({ country: R });
        return (
          t ||
          (D().then(function (t) {
            return G({ country: t });
          }),
          null)
        );
      }
      function Y() {
        var t = K({ country: R });
        return (
          t ||
          (D().then(function (t) {
            return K({ country: t });
          }),
          null)
        );
      }
      var q = { 1: "", 2: "nimo-theme-dark" },
        Z = function (t) {
          return t && q.hasOwnProperty(t) ? Number(t) : 1;
        },
        Q = function (t) {
          var n = document.body;
          if (n && n.classList) {
            var e = q.hasOwnProperty(t) && q[t];
            Object.keys(q).forEach(function (t) {
              var r = q[t];
              r && e !== r && n.classList.contains(r) && n.classList.remove(r);
            }),
              e && !n.classList.contains(e) && n.classList.add(e);
          }
        },
        $ = function (t) {
          var n = Z(t);
          f.a.set(w, n, 365), Q(n), p.b.emit(p.a.THEME_CHANGE, { theme: n });
        },
        X = function () {
          return Z(f.a.get(w));
        },
        tt = function () {
          var t;
          null !== (t = window.nimo_base) &&
            void 0 !== t &&
            t.hasMulTheme &&
            Q(X());
        };
    },
    ZMLX: function (t, n, e) {
      "use strict";
      var r = r || {};
      n.a = r;
    },
    ZTQi: function (t, n, e) {
      t.exports = e("4KFe")(239);
    },
    "ZZY+": function (t, n, e) {
      t.exports = e("4KFe")(14);
    },
    ZrlE: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return O;
      }),
        e.d(n, "b", function () {
          return N;
        }),
        e.d(n, "d", function () {
          return C;
        }),
        e.d(n, "c", function () {
          return v;
        }),
        e.d(n, "f", function () {
          return y;
        }),
        e.d(n, "e", function () {
          return h;
        });
      var r = e("82bv");
      function o(t) {
        return "/" === t.charAt(0);
      }
      function i(t, n) {
        for (var e = n, r = e + 1, o = t.length; r < o; e += 1, r += 1)
          t[e] = t[r];
        t.pop();
      }
      var u = function (t, n) {
        void 0 === n && (n = "");
        var e,
          r = (t && t.split("/")) || [],
          u = (n && n.split("/")) || [],
          a = t && o(t),
          c = n && o(n),
          s = a || c;
        if (
          (t && o(t) ? (u = r) : r.length && (u.pop(), (u = u.concat(r))),
          !u.length)
        )
          return "/";
        if (u.length) {
          var f = u[u.length - 1];
          e = "." === f || ".." === f || "" === f;
        } else e = !1;
        for (var l = 0, p = u.length; p >= 0; p--) {
          var d = u[p];
          "." === d
            ? i(u, p)
            : ".." === d
            ? (i(u, p), l++)
            : l && (i(u, p), l--);
        }
        if (!s) for (; l--; l) u.unshift("..");
        !s || "" === u[0] || (u[0] && o(u[0])) || u.unshift("");
        var h = u.join("/");
        return e && "/" !== h.substr(-1) && (h += "/"), h;
      };
      function a(t) {
        return t.valueOf ? t.valueOf() : Object.prototype.valueOf.call(t);
      }
      var c = function t(n, e) {
          if (n === e) return !0;
          if (null == n || null == e) return !1;
          if (Array.isArray(n))
            return (
              Array.isArray(e) &&
              n.length === e.length &&
              n.every(function (n, r) {
                return t(n, e[r]);
              })
            );
          if ("object" === typeof n || "object" === typeof e) {
            var r = a(n),
              o = a(e);
            return r !== n || o !== e
              ? t(r, o)
              : Object.keys(Object.assign({}, n, e)).every(function (r) {
                  return t(n[r], e[r]);
                });
          }
          return !1;
        },
        s = e("pYR3");
      function f(t) {
        return "/" === t.charAt(0) ? t : "/" + t;
      }
      function l(t) {
        return "/" === t.charAt(0) ? t.substr(1) : t;
      }
      function p(t, n) {
        return (function (t, n) {
          return (
            0 === t.toLowerCase().indexOf(n.toLowerCase()) &&
            -1 !== "/?#".indexOf(t.charAt(n.length))
          );
        })(t, n)
          ? t.substr(n.length)
          : t;
      }
      function d(t) {
        return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t;
      }
      function h(t) {
        var n = t.pathname,
          e = t.search,
          r = t.hash,
          o = n || "/";
        return (
          e && "?" !== e && (o += "?" === e.charAt(0) ? e : "?" + e),
          r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r),
          o
        );
      }
      function v(t, n, e, o) {
        var i;
        "string" === typeof t
          ? ((i = (function (t) {
              var n = t || "/",
                e = "",
                r = "",
                o = n.indexOf("#");
              -1 !== o && ((r = n.substr(o)), (n = n.substr(0, o)));
              var i = n.indexOf("?");
              return (
                -1 !== i && ((e = n.substr(i)), (n = n.substr(0, i))),
                {
                  pathname: n,
                  search: "?" === e ? "" : e,
                  hash: "#" === r ? "" : r,
                }
              );
            })(t)).state = n)
          : (void 0 === (i = Object(r.a)({}, t)).pathname && (i.pathname = ""),
            i.search
              ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search)
              : (i.search = ""),
            i.hash
              ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash)
              : (i.hash = ""),
            void 0 !== n && void 0 === i.state && (i.state = n));
        try {
          i.pathname = decodeURI(i.pathname);
        } catch (a) {
          throw a instanceof URIError
            ? new URIError(
                'Pathname "' +
                  i.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : a;
        }
        return (
          e && (i.key = e),
          o
            ? i.pathname
              ? "/" !== i.pathname.charAt(0) &&
                (i.pathname = u(i.pathname, o.pathname))
              : (i.pathname = o.pathname)
            : i.pathname || (i.pathname = "/"),
          i
        );
      }
      function y(t, n) {
        return (
          t.pathname === n.pathname &&
          t.search === n.search &&
          t.hash === n.hash &&
          t.key === n.key &&
          c(t.state, n.state)
        );
      }
      function m() {
        var t = null;
        var n = [];
        return {
          setPrompt: function (n) {
            return (
              (t = n),
              function () {
                t === n && (t = null);
              }
            );
          },
          confirmTransitionTo: function (n, e, r, o) {
            if (null != t) {
              var i = "function" === typeof t ? t(n, e) : t;
              "string" === typeof i
                ? "function" === typeof r
                  ? r(i, o)
                  : o(!0)
                : o(!1 !== i);
            } else o(!0);
          },
          appendListener: function (t) {
            var e = !0;
            function r() {
              e && t.apply(void 0, arguments);
            }
            return (
              n.push(r),
              function () {
                (e = !1),
                  (n = n.filter(function (t) {
                    return t !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            n.forEach(function (t) {
              return t.apply(void 0, e);
            });
          },
        };
      }
      var g = !(
        "undefined" === typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function w(t, n) {
        n(window.confirm(t));
      }
      var b = "popstate",
        _ = "hashchange";
      function I() {
        try {
          return window.history.state || {};
        } catch (t) {
          return {};
        }
      }
      function O(t) {
        void 0 === t && (t = {}), g || Object(s.a)(!1);
        var n = window.history,
          e = (function () {
            var t = window.navigator.userAgent;
            return (
              ((-1 === t.indexOf("Android 2.") &&
                -1 === t.indexOf("Android 4.0")) ||
                -1 === t.indexOf("Mobile Safari") ||
                -1 !== t.indexOf("Chrome") ||
                -1 !== t.indexOf("Windows Phone")) &&
              window.history &&
              "pushState" in window.history
            );
          })(),
          o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          i = t,
          u = i.forceRefresh,
          a = void 0 !== u && u,
          c = i.getUserConfirmation,
          l = void 0 === c ? w : c,
          y = i.keyLength,
          O = void 0 === y ? 6 : y,
          S = t.basename ? d(f(t.basename)) : "";
        function E(t) {
          var n = t || {},
            e = n.key,
            r = n.state,
            o = window.location,
            i = o.pathname + o.search + o.hash;
          return S && (i = p(i, S)), v(i, r, e);
        }
        function A() {
          return Math.random().toString(36).substr(2, O);
        }
        var T = m();
        function k(t) {
          Object(r.a)(F, t),
            (F.length = n.length),
            T.notifyListeners(F.location, F.action);
        }
        function N(t) {
          (function (t) {
            return (
              void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
            );
          })(t) || B(E(t.state));
        }
        function L() {
          B(E(I()));
        }
        var C = !1;
        function B(t) {
          if (C) (C = !1), k();
          else {
            T.confirmTransitionTo(t, "POP", l, function (n) {
              n
                ? k({ action: "POP", location: t })
                : (function (t) {
                    var n = F.location,
                      e = P.indexOf(n.key);
                    -1 === e && (e = 0);
                    var r = P.indexOf(t.key);
                    -1 === r && (r = 0);
                    var o = e - r;
                    o && ((C = !0), j(o));
                  })(t);
            });
          }
        }
        var R = E(I()),
          P = [R.key];
        function U(t) {
          return S + h(t);
        }
        function j(t) {
          n.go(t);
        }
        var D = 0;
        function M(t) {
          1 === (D += t) && 1 === t
            ? (window.addEventListener(b, N),
              o && window.addEventListener(_, L))
            : 0 === D &&
              (window.removeEventListener(b, N),
              o && window.removeEventListener(_, L));
        }
        var x = !1;
        var F = {
          length: n.length,
          action: "POP",
          location: R,
          createHref: U,
          push: function (t, r) {
            var o = "PUSH",
              i = v(t, r, A(), F.location);
            T.confirmTransitionTo(i, o, l, function (t) {
              if (t) {
                var r = U(i),
                  u = i.key,
                  c = i.state;
                if (e)
                  if ((n.pushState({ key: u, state: c }, null, r), a))
                    window.location.href = r;
                  else {
                    var s = P.indexOf(F.location.key),
                      f = P.slice(0, s + 1);
                    f.push(i.key), (P = f), k({ action: o, location: i });
                  }
                else window.location.href = r;
              }
            });
          },
          replace: function (t, r) {
            var o = "REPLACE",
              i = v(t, r, A(), F.location);
            T.confirmTransitionTo(i, o, l, function (t) {
              if (t) {
                var r = U(i),
                  u = i.key,
                  c = i.state;
                if (e)
                  if ((n.replaceState({ key: u, state: c }, null, r), a))
                    window.location.replace(r);
                  else {
                    var s = P.indexOf(F.location.key);
                    -1 !== s && (P[s] = i.key), k({ action: o, location: i });
                  }
                else window.location.replace(r);
              }
            });
          },
          go: j,
          goBack: function () {
            j(-1);
          },
          goForward: function () {
            j(1);
          },
          block: function (t) {
            void 0 === t && (t = !1);
            var n = T.setPrompt(t);
            return (
              x || (M(1), (x = !0)),
              function () {
                return x && ((x = !1), M(-1)), n();
              }
            );
          },
          listen: function (t) {
            var n = T.appendListener(t);
            return (
              M(1),
              function () {
                M(-1), n();
              }
            );
          },
        };
        return F;
      }
      var S = "hashchange",
        E = {
          hashbang: {
            encodePath: function (t) {
              return "!" === t.charAt(0) ? t : "!/" + l(t);
            },
            decodePath: function (t) {
              return "!" === t.charAt(0) ? t.substr(1) : t;
            },
          },
          noslash: { encodePath: l, decodePath: f },
          slash: { encodePath: f, decodePath: f },
        };
      function A(t) {
        var n = t.indexOf("#");
        return -1 === n ? t : t.slice(0, n);
      }
      function T() {
        var t = window.location.href,
          n = t.indexOf("#");
        return -1 === n ? "" : t.substring(n + 1);
      }
      function k(t) {
        window.location.replace(A(window.location.href) + "#" + t);
      }
      function N(t) {
        void 0 === t && (t = {}), g || Object(s.a)(!1);
        var n = window.history,
          e = (window.navigator.userAgent.indexOf("Firefox"), t),
          o = e.getUserConfirmation,
          i = void 0 === o ? w : o,
          u = e.hashType,
          a = void 0 === u ? "slash" : u,
          c = t.basename ? d(f(t.basename)) : "",
          l = E[a],
          y = l.encodePath,
          b = l.decodePath;
        function _() {
          var t = b(T());
          return c && (t = p(t, c)), v(t);
        }
        var I = m();
        function O(t) {
          Object(r.a)(F, t),
            (F.length = n.length),
            I.notifyListeners(F.location, F.action);
        }
        var N = !1,
          L = null;
        function C() {
          var t,
            n,
            e = T(),
            r = y(e);
          if (e !== r) k(r);
          else {
            var o = _(),
              u = F.location;
            if (
              !N &&
              ((n = o),
              (t = u).pathname === n.pathname &&
                t.search === n.search &&
                t.hash === n.hash)
            )
              return;
            if (L === h(o)) return;
            (L = null),
              (function (t) {
                if (N) (N = !1), O();
                else {
                  var n = "POP";
                  I.confirmTransitionTo(t, n, i, function (e) {
                    e
                      ? O({ action: n, location: t })
                      : (function (t) {
                          var n = F.location,
                            e = U.lastIndexOf(h(n));
                          -1 === e && (e = 0);
                          var r = U.lastIndexOf(h(t));
                          -1 === r && (r = 0);
                          var o = e - r;
                          o && ((N = !0), j(o));
                        })(t);
                  });
                }
              })(o);
          }
        }
        var B = T(),
          R = y(B);
        B !== R && k(R);
        var P = _(),
          U = [h(P)];
        function j(t) {
          n.go(t);
        }
        var D = 0;
        function M(t) {
          1 === (D += t) && 1 === t
            ? window.addEventListener(S, C)
            : 0 === D && window.removeEventListener(S, C);
        }
        var x = !1;
        var F = {
          length: n.length,
          action: "POP",
          location: P,
          createHref: function (t) {
            var n = document.querySelector("base"),
              e = "";
            return (
              n && n.getAttribute("href") && (e = A(window.location.href)),
              e + "#" + y(c + h(t))
            );
          },
          push: function (t, n) {
            var e = "PUSH",
              r = v(t, void 0, void 0, F.location);
            I.confirmTransitionTo(r, e, i, function (t) {
              if (t) {
                var n = h(r),
                  o = y(c + n);
                if (T() !== o) {
                  (L = n),
                    (function (t) {
                      window.location.hash = t;
                    })(o);
                  var i = U.lastIndexOf(h(F.location)),
                    u = U.slice(0, i + 1);
                  u.push(n), (U = u), O({ action: e, location: r });
                } else O();
              }
            });
          },
          replace: function (t, n) {
            var e = "REPLACE",
              r = v(t, void 0, void 0, F.location);
            I.confirmTransitionTo(r, e, i, function (t) {
              if (t) {
                var n = h(r),
                  o = y(c + n);
                T() !== o && ((L = n), k(o));
                var i = U.indexOf(h(F.location));
                -1 !== i && (U[i] = n), O({ action: e, location: r });
              }
            });
          },
          go: j,
          goBack: function () {
            j(-1);
          },
          goForward: function () {
            j(1);
          },
          block: function (t) {
            void 0 === t && (t = !1);
            var n = I.setPrompt(t);
            return (
              x || (M(1), (x = !0)),
              function () {
                return x && ((x = !1), M(-1)), n();
              }
            );
          },
          listen: function (t) {
            var n = I.appendListener(t);
            return (
              M(1),
              function () {
                M(-1), n();
              }
            );
          },
        };
        return F;
      }
      function L(t, n, e) {
        return Math.min(Math.max(t, n), e);
      }
      function C(t) {
        void 0 === t && (t = {});
        var n = t,
          e = n.getUserConfirmation,
          o = n.initialEntries,
          i = void 0 === o ? ["/"] : o,
          u = n.initialIndex,
          a = void 0 === u ? 0 : u,
          c = n.keyLength,
          s = void 0 === c ? 6 : c,
          f = m();
        function l(t) {
          Object(r.a)(b, t),
            (b.length = b.entries.length),
            f.notifyListeners(b.location, b.action);
        }
        function p() {
          return Math.random().toString(36).substr(2, s);
        }
        var d = L(a, 0, i.length - 1),
          y = i.map(function (t) {
            return v(t, void 0, "string" === typeof t ? p() : t.key || p());
          }),
          g = h;
        function w(t) {
          var n = L(b.index + t, 0, b.entries.length - 1),
            r = b.entries[n];
          f.confirmTransitionTo(r, "POP", e, function (t) {
            t ? l({ action: "POP", location: r, index: n }) : l();
          });
        }
        var b = {
          length: y.length,
          action: "POP",
          location: y[d],
          index: d,
          entries: y,
          createHref: g,
          push: function (t, n) {
            var r = "PUSH",
              o = v(t, n, p(), b.location);
            f.confirmTransitionTo(o, r, e, function (t) {
              if (t) {
                var n = b.index + 1,
                  e = b.entries.slice(0);
                e.length > n ? e.splice(n, e.length - n, o) : e.push(o),
                  l({ action: r, location: o, index: n, entries: e });
              }
            });
          },
          replace: function (t, n) {
            var r = "REPLACE",
              o = v(t, n, p(), b.location);
            f.confirmTransitionTo(o, r, e, function (t) {
              t && ((b.entries[b.index] = o), l({ action: r, location: o }));
            });
          },
          go: w,
          goBack: function () {
            w(-1);
          },
          goForward: function () {
            w(1);
          },
          canGo: function (t) {
            var n = b.index + t;
            return n >= 0 && n < b.entries.length;
          },
          block: function (t) {
            return void 0 === t && (t = !1), f.setPrompt(t);
          },
          listen: function (t) {
            return f.appendListener(t);
          },
        };
        return b;
      }
    },
    ZvXx: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return o;
      });
      var r = e("tvFO");
      function o(t, n) {
        if (t) {
          if ("string" === typeof t) return Object(r.a)(t, n);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === e && t.constructor && (e = t.constructor.name),
            "Map" === e || "Set" === e
              ? Array.from(t)
              : "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              ? Object(r.a)(t, n)
              : void 0
          );
        }
      }
    },
    ZxgU: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return s;
      }),
        e.d(n, "c", function () {
          return p;
        }),
        e.d(n, "d", function () {
          return h;
        }),
        e.d(n, "e", function () {
          return y;
        }),
        e.d(n, "f", function () {
          return l;
        }),
        e.d(n, "g", function () {
          return d;
        });
      var r = e("w4Qk"),
        o = e("ucgO"),
        i = e("gYi6"),
        u = e.n(i);
      e.d(n, "b", function () {
        return u.a;
      });
      var a = e("CbEt"),
        c = e.n(a),
        s =
          (e("mMZ6"),
          (function () {
            function t(n) {
              Object(r.a)(this, t), this.set(n), (this._ready = !1);
            }
            return (
              Object(o.a)(t, [
                {
                  key: "init",
                  value: function (t) {
                    return (this._ready = this.set(t)), this._ready;
                  },
                },
                {
                  key: "refresh",
                  value: function (t) {
                    this.init(t);
                  },
                },
                {
                  key: "reset",
                  value: function (t) {
                    this.set(t), (this._ready = !1);
                  },
                },
                {
                  key: "set",
                  value: function (t, n) {
                    var e = this;
                    if ("[object Object]" === Object.prototype.toString.call(t))
                      Object.keys(t).forEach(function (n) {
                        Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                      });
                    else {
                      if (
                        !Object.hasOwnProperty.call(this, t) ||
                        "function" === typeof this[t]
                      )
                        return !1;
                      this[t] = n;
                    }
                    return !0;
                  },
                },
                {
                  key: "get",
                  value: function () {
                    return this;
                  },
                },
                {
                  key: "isReady",
                  value: function () {
                    return this._ready;
                  },
                },
              ]),
              t
            );
          })()),
        f = {};
      function l(t, n) {
        return "".concat(t, "_").concat(n);
      }
      function p(t) {
        return "undefined" !== typeof t ? "".concat(t).split("_") : [];
      }
      var d = {
          add: function (t, n) {
            n && (f[t] = n);
          },
          get: function (t) {
            return !!{}.hasOwnProperty.call(f, t) && f[t];
          },
          remove: function (t) {
            return (
              !!{}.hasOwnProperty.call(f, t) && ((f[t] = null), delete f[t], !0)
            );
          },
        },
        h = new ((function () {
          function t() {
            Object(r.a)(this, t), (this.ee = new c.a());
          }
          return (
            Object(o.a)(t, [
              {
                key: "on",
                value: function (t, n, e) {
                  var r;
                  return (
                    "function" === typeof e
                      ? (this._addUnpacker(t, n), (r = e))
                      : "function" === typeof n && (r = n),
                    r && this.ee.on(t, r),
                    this
                  );
                },
              },
              {
                key: "once",
                value: function (t, n, e) {
                  var r,
                    o = this;
                  return (
                    "function" === typeof e
                      ? (this._addUnpacker(t, n), (r = e))
                      : "function" === typeof n && (r = n),
                    this.ee.once(t, function (n) {
                      r &&
                        (e(n),
                        0 === o._listenerCount(t) && o._removeUnpacker(t));
                    }),
                    this
                  );
                },
              },
              {
                key: "off",
                value: function (t, n) {
                  return (
                    "function" === typeof n &&
                      (this.ee.off(t, n),
                      0 === this._listenerCount(t) && this._removeUnpacker(t)),
                    this
                  );
                },
              },
              {
                key: "emit",
                value: function (t) {
                  for (
                    var n,
                      e = arguments.length,
                      r = new Array(e > 1 ? e - 1 : 0),
                      o = 1;
                    o < e;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  (n = this.ee).emit.apply(n, [t].concat(r));
                },
              },
              {
                key: "onProtocol",
                value: function (t, n) {
                  return this.ee.on(t, n), this;
                },
              },
              {
                key: "offProtocol",
                value: function (t, n) {
                  return this.ee.off(t, n), this;
                },
              },
              {
                key: "_listenerCount",
                value: function (t) {
                  return this.ee.listenerCount(t);
                },
              },
              {
                key: "_addUnpacker",
                value: function (t, n) {
                  d.add(t, n);
                },
              },
              {
                key: "_removeUnpacker",
                value: function (t) {
                  d.remove(t);
                },
              },
            ]),
            t
          );
        })())();
      function v(t) {
        var n = {};
        for (var e in t)
          if (Object.hasOwnProperty.call(t, e)) {
            var r = t[e];
            n[e] = y(r);
          }
        return n;
      }
      function y(t) {
        var n = Object.prototype.toString;
        return t instanceof u.a.Vector
          ? (function (t) {
              return ((t && t.value) || []).map(function (t) {
                return y(t);
              });
            })(t)
          : t instanceof u.a.Map
          ? (function (t) {
              return v((t && t.value) || {});
            })(t)
          : t instanceof u.a.BinBuffer
          ? t
          : "[object Object]" === n.call(t)
          ? v(t)
          : "[object Array]" === n.call(t)
          ? (function (t) {
              for (var n = [], e = 0; e < t.length; e++) {
                var r = t[e];
                n[e] = y(r);
              }
              return n;
            })(t)
          : t;
      }
    },
    avFb: function (t, n, e) {
      "use strict";
      t.exports = e("igG3");
    },
    azGL: function (t, n, e) {
      var r = e("TJEx");
      (t.exports = function (t, n) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = r(t));

        );
        return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    bTN7: function (t, n, e) {
      "use strict";
      function r() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    bUku: function (t) {
      t.exports = JSON.parse(
        '{"appId":"1005","bizToken":"AQAb8kXZruoHT9RkEBS1JEohD2Mei1zqN6boxube9j3wVjHxvAN7V6LKP_QX7fC70pHz4vkkNTDbJbgGfOLDFSOOCfrZIWtswd-A69KyqApa7uwklPCRMamN3XhdpMLaTPqinLXniRuDPadBvMCsEnqn7gSnmUuaDIEQ6l8DRVGGPLSi1IKd9iGENjdpJCPmkETuGNHx3Oo80xATDYhc8LokjaqXye9BdiFA2DSB47uqB69LA4YNS8cKsLWbszmTG143e7KRVHqFKHSsWKCiWc2zsgxqNrgkSHufYBArk89hIqmI2gmgiwpkhyGCim_sOdAxCFol0spcigI-SA-j-dDl","clang":"1000","country":"IN","version":"2.1","lang":"1081","nickName":"\\\\\\\\u0022\\\\u005C/>\\"\'\\\\\'\\\\\\"\\\\\\\\n1","uid":50020281,"jsApiVersion":12,"isLogin":true,"isHost":true,"udbUserId":1599511670827,"avatarUrl":"https://server-avatar-test.nimostatic.tv/201902261551173107825-6331959_avatar.png?t=1551173205000","sex":0,"birthday":0,"NORMAL_VERSION":-1}'
      );
    },
    bcKt: function (t, n, e) {
      "use strict";
      var r = e("5HYm"),
        o = e("vNXk"),
        i = e("Ftqi"),
        u = [].slice,
        a = {},
        c = function (t, n, e) {
          if (!(n in a)) {
            for (var r = [], o = 0; o < n; o++) r[o] = "a[" + o + "]";
            a[n] = Function("F,a", "return new F(" + r.join(",") + ")");
          }
          return a[n](t, e);
        };
      t.exports =
        Function.bind ||
        function (t) {
          var n = r(this),
            e = u.call(arguments, 1),
            a = function () {
              var r = e.concat(u.call(arguments));
              return this instanceof a ? c(n, r.length, r) : i(n, r, t);
            };
          return o(n.prototype) && (a.prototype = n.prototype), a;
        };
    },
    cOjp: function (t, n, e) {
      "use strict";
      var r = e("mMZ6");
      e.d(n, "a", function () {
        return r.b;
      });
      Object(r.o)(false), (n.b = new r.b({ prefix: "nm" }));
    },
    cQwn: function (t, n, e) {
      t.exports = e("4KFe")(234);
    },
    cacY: function (t, n, e) {
      "use strict";
      var r = e("NkSV");
      e.d(n, "c", function () {
        return r;
      });
      var o = e("dJTG");
      e.d(n, "d", function () {
        return o;
      });
      var i = e("KNwJ");
      e.d(n, "a", function () {
        return i;
      });
      var u = e("omnE");
      e.d(n, "b", function () {
        return u;
      });
    },
    dJTG: function (t) {
      t.exports = JSON.parse(
        '{"af":"1078","am":"1118","ar":"1025","az":"1068","be":"1059","bg":"1026","bn":"1093","ca":"1027","cs":"1029","da":"1030","de":"1031","dv":"1125","dz":"3153","el":"1032","en":"1033","es":"1034","et":"1061","fa":"1065","fi":"1035","fo":"1080","fr":"1036","ga":"2108","he":"1037","hi":"1081","hr":"1050","ht":"4096","hu":"1038","hy":"1067","in":"1057","is":"1039","it":"1040","ja":"1041","ka":"1079","kk":"1087","km":"1107","ko":"1042","ky":"1088","lb":"1134","lo":"1108","lt":"1063","lv":"1062","mh":"4096","mk":"1071","mn":"1104","mo":"2072","ms":"1086","mt":"1082","my":"1109","ne":"1121","nl":"1043","no":"2068","pl":"1045","pt":"1046","ro":"1048","ru":"1049","rw":"1159","si":"1115","sk":"1051","sl":"1060","so":"1143","sr":"3098","sv":"2077","sw":"1089","ta":"1097","th":"1054","tk":"1090","tl":"1124","to":"4096","tr":"1055","uk":"1058","ur":"1056","uz":"1091","vi":"1066","zh":"1028","zu":"1077","fil":"1124","id":"1057","abc":"1000"}'
      );
    },
    f2qI: function (t, n, e) {
      var r = e("X+NX");
      (t.exports = function (t, n) {
        if (null == t) return {};
        var e,
          o,
          i = r(t, n);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(t);
          for (o = 0; o < u.length; o++)
            (e = u[o]),
              n.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, e) &&
                  (i[e] = t[e]));
        }
        return i;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    fGII: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return u;
      });
      var r = e("V4gF"),
        o = e.n(r),
        i = (e("28PD"), e("KkFV"));
      function u() {
        return a.apply(this, arguments);
      }
      function a() {
        return (a = o()(
          regeneratorRuntime.mark(function t() {
            var n, e, r, o;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (i.b.clear(),
                      i.c.clear(),
                      i.a.clear(),
                      history.pushState({}, ""),
                      !navigator.serviceWorker)
                    ) {
                      t.next = 15;
                      break;
                    }
                    return (
                      (t.next = 7), navigator.serviceWorker.getRegistrations()
                    );
                  case 7:
                    (n = t.sent), (e = 0);
                  case 9:
                    if (!(e < n.length)) {
                      t.next = 15;
                      break;
                    }
                    return (
                      (t.next = 12),
                      null === (r = n[e]) || void 0 === r
                        ? void 0
                        : r.unregister()
                    );
                  case 12:
                    e++, (t.next = 9);
                    break;
                  case 15:
                    return (
                      (o = function () {
                        return new Promise(function (t) {
                          var n;
                          null !== (n = window.indexedDB) &&
                          void 0 !== n &&
                          n.databases
                            ? window.indexedDB
                                .databases()
                                .then(function (n) {
                                  0 === n.length && t();
                                  for (
                                    var e = 0,
                                      r = [],
                                      o = function () {
                                        e++;
                                      },
                                      i = function (o) {
                                        return function () {
                                          for (
                                            var i,
                                              u,
                                              a = 0,
                                              c =
                                                null === (i = r[o]) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i.result,
                                              s =
                                                (null === c ||
                                                void 0 === c ||
                                                null ===
                                                  (u = c.objectStoreNames) ||
                                                void 0 === u
                                                  ? void 0
                                                  : u.length) || 0,
                                              f = function () {
                                                ++a === s &&
                                                  ++e === n.length &&
                                                  t();
                                              },
                                              l = 0;
                                            l < s;
                                            l++
                                          ) {
                                            var p,
                                              d,
                                              h,
                                              v =
                                                null === c ||
                                                void 0 === c ||
                                                null ===
                                                  (p = c.objectStoreNames) ||
                                                void 0 === p
                                                  ? void 0
                                                  : p[l],
                                              y =
                                                null === c ||
                                                void 0 === c ||
                                                null ===
                                                  (d = c.transaction(
                                                    v,
                                                    "readwrite"
                                                  )) ||
                                                void 0 === d ||
                                                null ===
                                                  (h = d.objectStore(v)) ||
                                                void 0 === h
                                                  ? void 0
                                                  : h.clear();
                                            (y.onsuccess = f),
                                              (y.onerror = f),
                                              (y.onblocked = f);
                                          }
                                        };
                                      },
                                      u = 0;
                                    u < n.length;
                                    u++
                                  ) {
                                    var a;
                                    (r[u] = window.indexedDB.open(
                                      null === (a = n[u]) || void 0 === a
                                        ? void 0
                                        : a.name
                                    )),
                                      (r[u].onsuccess = i(u)),
                                      (r[u].onblocked = o),
                                      (r[u].onerror = o);
                                  }
                                  setTimeout(function () {
                                    t();
                                  }, 5e3);
                                })
                                .catch(function (n) {
                                  t();
                                })
                            : t();
                        });
                      }),
                      (t.next = 18),
                      o()
                    );
                  case 18:
                    location.replace(location.origin);
                  case 19:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    gYi6: function (t, n, e) {
      "use strict";
      t.exports = e("0sLj");
    },
    "gtb+": function (t, n, e) {
      var r = e("4n1x"),
        o = e("+Nu2"),
        i = e("ruNt"),
        u = e("TRr4");
      (t.exports = function (t) {
        return r(t) || o(t) || i(t) || u();
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    gy9q: function (t, n, e) {
      t.exports = e("4KFe")(232);
    },
    igG3: function (t, n, e) {
      "use strict";
      /** @license React v16.14.0
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = e("QoJ3"),
        o = "function" === typeof Symbol && Symbol.for,
        i = o ? Symbol.for("react.element") : 60103,
        u = o ? Symbol.for("react.portal") : 60106,
        a = o ? Symbol.for("react.fragment") : 60107,
        c = o ? Symbol.for("react.strict_mode") : 60108,
        s = o ? Symbol.for("react.profiler") : 60114,
        f = o ? Symbol.for("react.provider") : 60109,
        l = o ? Symbol.for("react.context") : 60110,
        p = o ? Symbol.for("react.forward_ref") : 60112,
        d = o ? Symbol.for("react.suspense") : 60113,
        h = o ? Symbol.for("react.memo") : 60115,
        v = o ? Symbol.for("react.lazy") : 60116,
        y = "function" === typeof Symbol && Symbol.iterator;
      function m(t) {
        for (
          var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
            e = 1;
          e < arguments.length;
          e++
        )
          n += "&args[]=" + encodeURIComponent(arguments[e]);
        return (
          "Minified React error #" +
          t +
          "; visit " +
          n +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var g = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        w = {};
      function b(t, n, e) {
        (this.props = t),
          (this.context = n),
          (this.refs = w),
          (this.updater = e || g);
      }
      function _() {}
      function I(t, n, e) {
        (this.props = t),
          (this.context = n),
          (this.refs = w),
          (this.updater = e || g);
      }
      (b.prototype.isReactComponent = {}),
        (b.prototype.setState = function (t, n) {
          if ("object" !== typeof t && "function" !== typeof t && null != t)
            throw Error(m(85));
          this.updater.enqueueSetState(this, t, n, "setState");
        }),
        (b.prototype.forceUpdate = function (t) {
          this.updater.enqueueForceUpdate(this, t, "forceUpdate");
        }),
        (_.prototype = b.prototype);
      var O = (I.prototype = new _());
      (O.constructor = I), r(O, b.prototype), (O.isPureReactComponent = !0);
      var S = { current: null },
        E = Object.prototype.hasOwnProperty,
        A = { key: !0, ref: !0, __self: !0, __source: !0 };
      function T(t, n, e) {
        var r,
          o = {},
          u = null,
          a = null;
        if (null != n)
          for (r in (void 0 !== n.ref && (a = n.ref),
          void 0 !== n.key && (u = "" + n.key),
          n))
            E.call(n, r) && !A.hasOwnProperty(r) && (o[r] = n[r]);
        var c = arguments.length - 2;
        if (1 === c) o.children = e;
        else if (1 < c) {
          for (var s = Array(c), f = 0; f < c; f++) s[f] = arguments[f + 2];
          o.children = s;
        }
        if (t && t.defaultProps)
          for (r in (c = t.defaultProps)) void 0 === o[r] && (o[r] = c[r]);
        return {
          $$typeof: i,
          type: t,
          key: u,
          ref: a,
          props: o,
          _owner: S.current,
        };
      }
      function k(t) {
        return "object" === typeof t && null !== t && t.$$typeof === i;
      }
      var N = /\/+/g,
        L = [];
      function C(t, n, e, r) {
        if (L.length) {
          var o = L.pop();
          return (
            (o.result = t),
            (o.keyPrefix = n),
            (o.func = e),
            (o.context = r),
            (o.count = 0),
            o
          );
        }
        return { result: t, keyPrefix: n, func: e, context: r, count: 0 };
      }
      function B(t) {
        (t.result = null),
          (t.keyPrefix = null),
          (t.func = null),
          (t.context = null),
          (t.count = 0),
          10 > L.length && L.push(t);
      }
      function R(t, n, e, r) {
        var o = typeof t;
        ("undefined" !== o && "boolean" !== o) || (t = null);
        var a = !1;
        if (null === t) a = !0;
        else
          switch (o) {
            case "string":
            case "number":
              a = !0;
              break;
            case "object":
              switch (t.$$typeof) {
                case i:
                case u:
                  a = !0;
              }
          }
        if (a) return e(r, t, "" === n ? "." + U(t, 0) : n), 1;
        if (((a = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
          for (var c = 0; c < t.length; c++) {
            var s = n + U((o = t[c]), c);
            a += R(o, s, e, r);
          }
        else if (
          (null === t || "object" !== typeof t
            ? (s = null)
            : (s =
                "function" === typeof (s = (y && t[y]) || t["@@iterator"])
                  ? s
                  : null),
          "function" === typeof s)
        )
          for (t = s.call(t), c = 0; !(o = t.next()).done; )
            a += R((o = o.value), (s = n + U(o, c++)), e, r);
        else if ("object" === o)
          throw (
            ((e = "" + t),
            Error(
              m(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
                ""
              )
            ))
          );
        return a;
      }
      function P(t, n, e) {
        return null == t ? 0 : R(t, "", n, e);
      }
      function U(t, n) {
        return "object" === typeof t && null !== t && null != t.key
          ? (function (t) {
              var n = { "=": "=0", ":": "=2" };
              return (
                "$" +
                ("" + t).replace(/[=:]/g, function (t) {
                  return n[t];
                })
              );
            })(t.key)
          : n.toString(36);
      }
      function j(t, n) {
        t.func.call(t.context, n, t.count++);
      }
      function D(t, n, e) {
        var r = t.result,
          o = t.keyPrefix;
        (t = t.func.call(t.context, n, t.count++)),
          Array.isArray(t)
            ? M(t, r, e, function (t) {
                return t;
              })
            : null != t &&
              (k(t) &&
                (t = (function (t, n) {
                  return {
                    $$typeof: i,
                    type: t.type,
                    key: n,
                    ref: t.ref,
                    props: t.props,
                    _owner: t._owner,
                  };
                })(
                  t,
                  o +
                    (!t.key || (n && n.key === t.key)
                      ? ""
                      : ("" + t.key).replace(N, "$&/") + "/") +
                    e
                )),
              r.push(t));
      }
      function M(t, n, e, r, o) {
        var i = "";
        null != e && (i = ("" + e).replace(N, "$&/") + "/"),
          P(t, D, (n = C(n, i, r, o))),
          B(n);
      }
      var x = { current: null };
      function F() {
        var t = x.current;
        if (null === t) throw Error(m(321));
        return t;
      }
      var G = {
        ReactCurrentDispatcher: x,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: S,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (n.Children = {
        map: function (t, n, e) {
          if (null == t) return t;
          var r = [];
          return M(t, r, null, n, e), r;
        },
        forEach: function (t, n, e) {
          if (null == t) return t;
          P(t, j, (n = C(null, null, n, e))), B(n);
        },
        count: function (t) {
          return P(
            t,
            function () {
              return null;
            },
            null
          );
        },
        toArray: function (t) {
          var n = [];
          return (
            M(t, n, null, function (t) {
              return t;
            }),
            n
          );
        },
        only: function (t) {
          if (!k(t)) throw Error(m(143));
          return t;
        },
      }),
        (n.Component = b),
        (n.Fragment = a),
        (n.Profiler = s),
        (n.PureComponent = I),
        (n.StrictMode = c),
        (n.Suspense = d),
        (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
        (n.cloneElement = function (t, n, e) {
          if (null === t || void 0 === t) throw Error(m(267, t));
          var o = r({}, t.props),
            u = t.key,
            a = t.ref,
            c = t._owner;
          if (null != n) {
            if (
              (void 0 !== n.ref && ((a = n.ref), (c = S.current)),
              void 0 !== n.key && (u = "" + n.key),
              t.type && t.type.defaultProps)
            )
              var s = t.type.defaultProps;
            for (f in n)
              E.call(n, f) &&
                !A.hasOwnProperty(f) &&
                (o[f] = void 0 === n[f] && void 0 !== s ? s[f] : n[f]);
          }
          var f = arguments.length - 2;
          if (1 === f) o.children = e;
          else if (1 < f) {
            s = Array(f);
            for (var l = 0; l < f; l++) s[l] = arguments[l + 2];
            o.children = s;
          }
          return {
            $$typeof: i,
            type: t.type,
            key: u,
            ref: a,
            props: o,
            _owner: c,
          };
        }),
        (n.createContext = function (t, n) {
          return (
            void 0 === n && (n = null),
            ((t = {
              $$typeof: l,
              _calculateChangedBits: n,
              _currentValue: t,
              _currentValue2: t,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: f, _context: t }),
            (t.Consumer = t)
          );
        }),
        (n.createElement = T),
        (n.createFactory = function (t) {
          var n = T.bind(null, t);
          return (n.type = t), n;
        }),
        (n.createRef = function () {
          return { current: null };
        }),
        (n.forwardRef = function (t) {
          return { $$typeof: p, render: t };
        }),
        (n.isValidElement = k),
        (n.lazy = function (t) {
          return { $$typeof: v, _ctor: t, _status: -1, _result: null };
        }),
        (n.memo = function (t, n) {
          return { $$typeof: h, type: t, compare: void 0 === n ? null : n };
        }),
        (n.useCallback = function (t, n) {
          return F().useCallback(t, n);
        }),
        (n.useContext = function (t, n) {
          return F().useContext(t, n);
        }),
        (n.useDebugValue = function () {}),
        (n.useEffect = function (t, n) {
          return F().useEffect(t, n);
        }),
        (n.useImperativeHandle = function (t, n, e) {
          return F().useImperativeHandle(t, n, e);
        }),
        (n.useLayoutEffect = function (t, n) {
          return F().useLayoutEffect(t, n);
        }),
        (n.useMemo = function (t, n) {
          return F().useMemo(t, n);
        }),
        (n.useReducer = function (t, n, e) {
          return F().useReducer(t, n, e);
        }),
        (n.useRef = function (t) {
          return F().useRef(t);
        }),
        (n.useState = function (t) {
          return F().useState(t);
        }),
        (n.version = "16.14.0");
    },
    lpJ4: function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return a;
      }),
        e.d(n, "c", function () {
          return c;
        });
      var r = e("ZrlE"),
        o = e("nimoua"),
        i = e.n(o),
        u = Object(r.a)(),
        a = function (t) {
          u.length > 1
            ? u.goBack()
            : i.a.isInNimoApp
            ? (null === t || void 0 === t ? void 0 : t.closeWebView) &&
              (null === t || void 0 === t || t.closeWebView())
            : u.replace("/");
        },
        c = function (t) {
          return function (n) {
            return "function" !== typeof n
              ? function () {}
              : u.block(function () {
                  return !n() || t;
                });
          };
        };
      n.a = u;
    },
    lwBl: function (t, n, e) {
      t.exports = e("4KFe")(0);
    },
    mMZ6: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return g;
      }),
        e.d(n, "b", function () {
          return S;
        }),
        e.d(n, "c", function () {
          return k;
        }),
        e.d(n, "d", function () {
          return D;
        }),
        e.d(n, "e", function () {
          return B;
        }),
        e.d(n, "f", function () {
          return P;
        }),
        e.d(n, "g", function () {
          return U;
        }),
        e.d(n, "h", function () {
          return A;
        }),
        e.d(n, "i", function () {
          return R;
        }),
        e.d(n, "j", function () {
          return C;
        }),
        e.d(n, "k", function () {
          return L;
        }),
        e.d(n, "l", function () {
          return N;
        }),
        e.d(n, "m", function () {
          return h;
        }),
        e.d(n, "n", function () {
          return I;
        }),
        e.d(n, "o", function () {
          return T;
        }),
        e.d(n, "p", function () {
          return j;
        }),
        e.d(n, "q", function () {
          return M;
        }),
        e.d(n, "r", function () {
          return E;
        }),
        e.d(n, "s", function () {
          return x;
        });
      var r = e("rjEi"),
        o = e("Bh9K"),
        i = e("w4Qk"),
        u = e("ucgO"),
        a = e("oE18"),
        c = e("0eRt"),
        s = e("FIla"),
        f = e("ZvXx"),
        l = e("bTN7");
      function p(t) {
        return (
          Object(c.a)(t) || Object(s.a)(t) || Object(f.a)(t) || Object(l.a)()
        );
      }
      function d(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      var h = {
          get: function (t) {
            try {
              return window.localStorage.getItem(t.toLowerCase()) || null;
            } catch (n) {
              console.log(n);
            }
            return null;
          },
          set: function (t, n) {
            try {
              window.localStorage.setItem(t.toLowerCase(), n);
            } catch (e) {
              console.log(e);
            }
          },
          remove: function (t) {
            try {
              window.localStorage.removeItem(t.toLowerCase());
            } catch (n) {
              console.log(n);
            }
          },
          has: function (t) {
            try {
              return window.localStorage.hasOwnProperty(t.toLowerCase());
            } catch (n) {
              console.log(n);
            }
          },
          clear: function () {
            try {
              return window.localStorage.clear();
            } catch (t) {
              logger.log(t);
            }
          },
        },
        v = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return "000".concat(t).slice(-1 * n);
        };
      function y(t) {
        var n = t ? new Date(t) : new Date(),
          e = n.getFullYear(),
          r = v(n.getMonth() + 1),
          o = v(n.getDate()),
          i = v(n.getHours()),
          u = v(n.getMinutes()),
          a = v(n.getSeconds()),
          c = v(n.getMilliseconds(), 3);
        return ""
          .concat(e, "-")
          .concat(r, "-")
          .concat(o, " ")
          .concat(i, ":")
          .concat(u, ":")
          .concat(a, ".")
          .concat(c);
      }
      var m = "nimo_log_level",
        g = {
          OFF: 0,
          FATAL: -1,
          ERROR: -2,
          WARN: -3,
          INFO: -4,
          DEBUG: -5,
          ALL: -6,
        },
        w = Number(h.get(m));
      w = isNaN(w) ? g.OFF : w;
      var b = !1,
        _ = {
          log: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            var r,
              o = n[0],
              i = n.slice(1),
              u = p(i),
              c = u[0],
              s = u.slice(1),
              f = y(),
              l = "string" === typeof c,
              d = l
                ? "".concat(f, "|Lv").concat(Math.abs(o), " ").concat(c)
                : f,
              h = l ? s : i;
            if (w <= o)
              if (o >= g.ERROR)
                (r = console).error.apply(r, [d].concat(Object(a.a)(h)));
              else if (o >= g.WARN) {
                var v;
                (v = console).warn.apply(v, [d].concat(Object(a.a)(h)));
              } else if (b) {
                var m;
                (m = console).log.apply(m, [d].concat(Object(a.a)(h)));
              }
          },
        };
      [
        "time",
        "timeEnd",
        "group",
        "groupCollapsed",
        "groupEnd",
        "table",
      ].forEach(function (t) {
        _[t] = function () {
          var n;
          w <= g.ALL && (n = console)[t].apply(n, arguments);
        };
      });
      var I = {
          log: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            _.log.apply(_, [g.DEBUG].concat(n));
          },
          success: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            var r = n[0],
              o = n.slice(1);
            _.log.apply(
              _,
              [
                g.INFO,
                "%c".concat(r),
                "background-color: #00a854;color: #fff;",
              ].concat(Object(a.a)(o))
            );
          },
          warning: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            var r = n[0],
              o = n.slice(1);
            _.log.apply(
              _,
              [
                g.WARN,
                "%c".concat(r),
                "background-color: #ffc000;color: #fff;",
              ].concat(Object(a.a)(o))
            );
          },
          warn: function () {
            I.warning.apply(I, arguments);
          },
          error: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            var r = n[0],
              o = n.slice(1);
            _.log.apply(
              _,
              [
                g.ERROR,
                "%c".concat(r),
                "background-color: #f04134;color: #fff;",
              ].concat(Object(a.a)(o))
            );
          },
          info: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            var r = n[0],
              o = n.slice(1);
            _.log.apply(
              _,
              [
                g.INFO,
                "%c".concat(r),
                "background-color: #343ed1;color: #fff;",
              ].concat(Object(a.a)(o))
            );
          },
          vip: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            var r = n[0],
              o = n.slice(1);
            _.log.apply(
              _,
              [
                g.WARN,
                "%c".concat(r),
                "background-color: #d752ff;color: #fff;",
              ].concat(Object(a.a)(o))
            );
          },
          title: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            var r = n[0],
              o = n[1],
              i = n.slice(2),
              u = 12 + 2 * Math.max(6 - o, 0);
            _.log.apply(
              _,
              [
                g.DEBUG,
                "%c".concat(r),
                "font-weight: "
                  .concat(o <= 3 ? "bolder" : "normal", ";font-size: ")
                  .concat(u, "px"),
              ].concat(Object(a.a)(i))
            );
          },
          time: function () {
            _.time.apply(_, arguments);
          },
          timeEnd: function () {
            _.timeEnd.apply(_, arguments);
          },
          group: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            var r = n[0],
              o = n.slice(1),
              i = y();
            _.group.apply(
              _,
              ["".concat(i, " ").concat(r)].concat(Object(a.a)(o))
            );
          },
          groupCollapsed: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            var r = n[0],
              o = n.slice(1),
              i = y();
            _.groupCollapsed.apply(
              _,
              ["".concat(i, " ").concat(r)].concat(Object(a.a)(o))
            );
          },
          groupEnd: function () {
            _.groupEnd.apply(_, arguments);
          },
          table: function () {
            _.table.apply(_, arguments);
          },
        },
        O = (function () {
          function t(n) {
            Object(i.a)(this, t);
            var e = (n || {}).maxCount,
              r = void 0 === e ? 0 : e;
            (this.maxCount = r), (this.pool = []);
          }
          return (
            Object(u.a)(t, [
              {
                key: "dispose",
                value: function () {
                  this.pool = null;
                },
              },
              {
                key: "add",
                value: function () {
                  var t,
                    n = (t = this.pool).push.apply(t, arguments);
                  n > this.maxCount && this.pool.splice(0, n - this.maxCount);
                },
              },
              {
                key: "toString",
                value: function () {
                  return JSON.stringify(this.pool.join("\n"));
                },
              },
            ]),
            t
          );
        })(),
        S = (function () {
          function t(n) {
            Object(i.a)(this, t),
              (this.defaults = (function (t) {
                for (var n = 1; n < arguments.length; n++) {
                  var e = null != arguments[n] ? arguments[n] : {};
                  n % 2
                    ? d(Object(e), !0).forEach(function (n) {
                        Object(o.a)(t, n, e[n]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(e)
                      )
                    : d(Object(e)).forEach(function (n) {
                        Object.defineProperty(
                          t,
                          n,
                          Object.getOwnPropertyDescriptor(e, n)
                        );
                      });
                }
                return t;
              })({}, n));
            var e = (n || {}).cached;
            void 0 !== e && e && (this.logCache = new O({ maxCount: 1e3 })),
              this.initAPI();
          }
          return (
            Object(u.a)(t, [
              {
                key: "dispose",
                value: function () {
                  (this.cachePool = null),
                    this.logCache &&
                      (this.logCache.dispose(), (this.logCache = null)),
                    (this.defaults = null);
                },
              },
              {
                key: "initAPI",
                value: function () {
                  var t = this,
                    n = this.defaults.prefix,
                    e = function (e) {
                      if (Object.prototype.hasOwnProperty.call(I, e)) {
                        var r = I[e];
                        t[e] = function () {
                          for (
                            var o = arguments.length, i = new Array(o), u = 0;
                            u < o;
                            u++
                          )
                            i[u] = arguments[u];
                          var c = i[0],
                            s = i.slice(1);
                          if (
                            (["table"].indexOf(e) > -1
                              ? r(c)
                              : r.apply(
                                  void 0,
                                  [
                                    ""
                                      .concat(n ? "[".concat(n, "] ") : "")
                                      .concat(c),
                                  ].concat(Object(a.a)(s))
                                ),
                            t.logCache)
                          ) {
                            var f = y(),
                              l = [
                                f,
                                "["
                                  .concat(e, "]")
                                  .concat(n ? "[".concat(n, "] ") : "")
                                  .concat(c),
                              ].concat(Object(a.a)(s));
                            t.logCache.add(l.join(" "));
                          }
                        };
                      }
                    };
                  for (var r in I) e(r);
                },
              },
              {
                key: "getLogCache",
                value: function () {
                  return (
                    this.logCache &&
                    this.logCache.toString &&
                    this.logCache.toString()
                  );
                },
              },
            ]),
            t
          );
        })();
      function E() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : g.WARN;
        h.set(m, String(t)), (w = t);
      }
      function A() {
        return w;
      }
      function T(t) {
        b = t;
      }
      var k = (function () {
        function t() {
          Object(i.a)(this, t), (this.q = []);
        }
        return (
          Object(u.a)(t, [
            {
              key: "dispose",
              value: function () {
                this.clear(), (this.q = null);
              },
            },
            {
              key: "add",
              value: function (t, n, e) {
                if ("function" !== typeof t)
                  return (
                    I.error(
                      "%c<utils queue add> not function:",
                      "color:gray;",
                      t
                    ),
                    !1
                  );
                this.q.push({ func: t, params: n, object: e });
              },
            },
            {
              key: "run",
              value: function (t) {
                if (!this.q.length) return !1;
                for (var n in this.q) {
                  var e = this.q[n];
                  e &&
                    "function" === typeof e.func &&
                    (t ? e.func(t) : e.func.apply(e.object, e.params));
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
      function N(t) {
        return (
          "undefined" !== typeof URLSearchParams && t instanceof URLSearchParams
        );
      }
      function L(t) {
        return null !== t && "object" === typeof t;
      }
      function C(t) {
        return "[object Date]" === toString.call(t);
      }
      function B(t) {
        var n = new FormData();
        for (var e in t)
          Object.prototype.hasOwnProperty.call(t, e) && n.append(e, t[e]);
        return n;
      }
      function R(t) {
        for (
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window.location.search,
            e = n.substring(1),
            o = e.split("&"),
            i = "[object Array]" === Object.prototype.toString.call(t),
            u = {},
            a = 0;
          a < o.length;
          a++
        ) {
          var c = o[a].split("="),
            s = c || [],
            f = Object(r.a)(s, 2),
            l = f[0],
            p = f[1];
          if (i && t.indexOf(l >= 0)) u[l] = p;
          else if (l === t) return p;
        }
        return !!i && u;
      }
      function P() {
        for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
          n[e] = arguments[e];
        var r = n.length,
          o = n.reduce(function (t, n) {
            return t + n;
          }, 0);
        return function () {
          var t = 0,
            e = 0,
            i = Math.random() * o;
          return n.findIndex(function (n, o) {
            return (
              (e += n),
              (i >= t && i < e) || (o === r - 1 && i === e) || ((t += n), !1)
            );
          });
        };
      }
      function U() {
        var t = P.apply(void 0, arguments);
        return t();
      }
      function j(t) {
        var n = 0;
        if (((n = parseInt(h.get(t), 10)), isNaN(n))) {
          for (
            var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1;
            o < e;
            o++
          )
            r[o - 1] = arguments[o];
          (n = U.apply(void 0, r)), h.set(t, n);
        }
        return n;
      }
      function D(t) {
        h.has(t) && h.remove(t);
      }
      function M() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = R("_".concat(t.toLowerCase()));
        n = parseInt(n, 10);
        for (
          var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1;
          o < e;
          o++
        )
          r[o - 1] = arguments[o];
        return n >= 0 && n < r.length ? n : j.apply(void 0, [t].concat(r));
      }
      var x = {
          cookie: (function () {
            try {
              document.cookie = "cookietest=1";
              var t = -1 !== document.cookie.indexOf("cookietest=");
              return (
                (document.cookie =
                  "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"),
                t
              );
            } catch (n) {
              return !1;
            }
          })(),
          localStorage: (function () {
            var t = !1;
            try {
              localStorage.setItem("locals_test", "y"),
                "y" === localStorage.getItem("locals_test") &&
                  ((t = !0), localStorage.removeItem("locals_test"));
            } catch (n) {}
            return t;
          })(),
        },
        F = function () {
          if ("object" === typeof self && self) return self;
          if ("object" === typeof window && window) return window;
          throw new Error("Unable to resolve global `this`");
        };
      !(function () {
        if (this) return this;
        if ("object" === typeof globalThis && globalThis) return globalThis;
        try {
          Object.defineProperty(Object.prototype, "__global__", {
            get: function () {
              return this;
            },
            configurable: !0,
          });
        } catch (t) {
          return F();
        }
        try {
          return __global__ || F();
        } finally {
          delete Object.prototype.__global__;
        }
        F();
      })();
    },
    mTTC: function (t, n, e) {
      "use strict";
      e.r(n);
      var r = e("V4gF"),
        o = e.n(r),
        i = e("rIiI"),
        u = e.n(i),
        a = e("58BP"),
        c = e.n(a),
        s = e("cQwn"),
        f = e.n(s),
        l = (e("28PD"), e("nimoua")),
        p = e.n(l),
        d = e("KkFV");
      function h(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function v(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? h(Object(e), !0).forEach(function (n) {
                f()(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : h(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var y = p.a.isWap,
        m = p.a.isInNimoApp,
        g = 0,
        w = 1,
        b = 2,
        _ = (function () {
          function t() {
            var n = this;
            u()(this, t),
              f()(this, "getCachedUserInfo", function () {
                return n._cacheAuth || n.getUserInfo(), n._cacheAuth;
              }),
              (this.initState = g),
              (this.pendingQueue = []);
          }
          return (
            c()(t, [
              {
                key: "initAPI",
                value: function () {
                  this.initState !== w &&
                    ((this.initState = w),
                    m
                      ? window.parent === window
                        ? this.initJSBridgeAPI()
                        : this.initAppIframeAPI()
                      : y
                      ? this.initWapAPI()
                      : this.initWebAPI());
                },
              },
              {
                key: "initWebAPI",
                value: function () {
                  var t = e("3Yl8").default;
                  (this._getUserInfo = I(function () {
                    var n = t.getUserInfo(),
                      e = n.userName,
                      r = n.userImg,
                      o = n.udbUserId,
                      i = n.userId;
                    return v(
                      v({}, n),
                      {},
                      {
                        uid: parseInt(o || 0, 10),
                        nick: e || "",
                        avatar: r || "",
                        userid: i || "",
                      }
                    );
                  })),
                    (this._checkLogin = I(function (n) {
                      return t.checkLogin(n);
                    })),
                    (this._isLogin = this._checkLogin),
                    (this._login = function (n) {
                      var e = n.phone,
                        r = n.password;
                      return new Promise(function (n, o) {
                        t.login({
                          phone: e,
                          password: r,
                          success: function () {
                            return n.apply(void 0, arguments);
                          },
                          error: function (t) {
                            return o(t);
                          },
                        });
                      });
                    }),
                    (this._autoLogout = function () {
                      t.autoLogout();
                    }),
                    (this._logout = function () {
                      return new Promise(function (n, e) {
                        t.loginOut({
                          success: function () {
                            return n.apply(void 0, arguments);
                          },
                          error: function (t) {
                            return e(t);
                          },
                        });
                      });
                    }),
                    (this._openLoginView = I(function () {
                      t.checkLogin(!0);
                    })),
                    (this._initUDB = function () {
                      return new Promise(function (n, e) {
                        t.initUDB({
                          success: function () {
                            return n.apply(void 0, arguments);
                          },
                          error: function (t) {
                            return e(t);
                          },
                        });
                      });
                    }),
                    (this._anonymousLogin = I(function (n) {
                      return t.anonymousLogin(n);
                    })),
                    (this.initState = b),
                    this.flushPendingQueue();
                },
              },
              {
                key: "initWapAPI",
                value: function () {
                  var t = e("JGns").default;
                  (this._getUserInfo = I(function () {
                    var n = t.getUserInfo(),
                      e = n.userName,
                      r = n.udbUserId,
                      o = n.avatarUrl;
                    return v(
                      v({}, n),
                      {},
                      {
                        uid: parseInt(-1 === r ? 0 : r, 10),
                        avatar: o || "",
                        nick: e || "",
                      }
                    );
                  })),
                    (this._checkLogin = I(function (n) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = e.wap;
                      return t.checkLogin(n, r);
                    })),
                    (this._isLogin = this._checkLogin),
                    (this._login = function (n) {
                      var e = n.phone,
                        r = n.password;
                      return new Promise(function (n, o) {
                        t.login({
                          phone: e,
                          password: r,
                          success: function () {
                            return n.apply(void 0, arguments);
                          },
                          error: function (t) {
                            return o(t);
                          },
                        });
                      });
                    }),
                    (this._logout = function () {
                      return new Promise(function (n, e) {
                        t.logout({
                          success: function () {
                            return n.apply(void 0, arguments);
                          },
                          error: function (t) {
                            return e(t);
                          },
                        });
                      });
                    }),
                    (this._autoLogout = function () {
                      t.autoLogout();
                    }),
                    (this._openLoginView = I(function () {
                      var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                      t.checkLogin(!1) || t.openAuthView("login", n);
                    })),
                    (this._initUDB = function () {
                      return new Promise(function (n, e) {
                        t.initUDB({
                          success: function () {
                            return n.apply(void 0, arguments);
                          },
                          error: function (t) {
                            return e(t);
                          },
                        });
                      });
                    }),
                    (this._anonymousLogin = I(function (n) {
                      return t.anonymousLogin(n);
                    })),
                    (this.initState = b),
                    this.flushPendingQueue();
                },
              },
              {
                key: "initJSBridgeAPI",
                value: function () {
                  var t = !1,
                    n = e("xB+L");
                  (this._getUserInfo = function () {
                    return n.getUserInfoFromApp().then(function (n) {
                      var e = n.nickName,
                        r = n.udbUserId,
                        o = n.uid,
                        i = n.avatarUrl,
                        u = n.appMid,
                        a = n.appGuid,
                        c = parseInt(-1 === r ? 0 : r, 10),
                        s = -1 === c ? 0 : c;
                      return (
                        t ||
                          ((t = !0),
                          (document.cookie = "yyuid=".concat(
                            s || "",
                            "; domain=.nimo.tv; path=/"
                          )),
                          u && d.a.set("appMid", u, 365),
                          a && d.a.set("guid", a, 365)),
                        v(
                          v({}, n),
                          {},
                          {
                            userid: o,
                            uid: c,
                            avatar: i || "",
                            nick: e || "",
                            mid: u,
                          }
                        )
                      );
                    });
                  }),
                    (this._checkLogin = function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return n.getUserInfoFromApp().then(function (r) {
                        var o = r.udbUserId;
                        return (
                          Number(o) > 0 || (!!t && n.toastLoginBoxByApp(e))
                        );
                      });
                    }),
                    (this._isLogin = function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return n.getUserInfoFromApp().then(function (r) {
                        var o = r.udbUserId;
                        return (
                          Number(o) > 0 || (t && n.toastLoginBoxByApp(e), !1)
                        );
                      });
                    }),
                    (this._login = I(function () {})),
                    (this._logout = I(function () {})),
                    (this._autoLogout = I(function () {})),
                    (this._initUDB = I(function () {})),
                    (this._anonymousLogin = I(function () {})),
                    (this._openLoginView = function () {
                      return new Promise(function (t) {
                        n.toastLoginBoxByApp({
                          reloadSucCallback: function () {
                            t.apply(void 0, arguments);
                          },
                        });
                      });
                    }),
                    (this.initState = b),
                    this.flushPendingQueue();
                },
              },
              {
                key: "initAppIframeAPI",
                value: function () {
                  var t = e("JGns").default;
                  (this._getUserInfo = I(function () {
                    var n = t.getUserInfo(),
                      e = n.userName,
                      r = n.udbUserId,
                      o = n.avatarUrl;
                    return v(
                      v({}, n),
                      {},
                      {
                        uid: parseInt(-1 === r || "-1" === r ? 0 : r, 10),
                        avatar: o || "",
                        nick: e || "",
                      }
                    );
                  })),
                    (this._checkLogin = I(function () {
                      return t.checkLogin();
                    })),
                    (this._isLogin = this._checkLogin);
                  var n = I(function () {});
                  (this._login = n),
                    (this._logout = n),
                    (this._openLoginView = n),
                    (this._initUDB = n),
                    (this.initState = b),
                    this.flushPendingQueue();
                },
              },
              {
                key: "appendPendingQueue",
                value: function (t) {
                  var n = this;
                  return new Promise(function (e) {
                    n.pendingQueue.push(function () {
                      t().then(function () {
                        return e.apply(void 0, arguments);
                      });
                    });
                  });
                },
              },
              {
                key: "flushPendingQueue",
                value: function () {
                  for (var t = this.pendingQueue; t.length; ) t.shift()();
                },
              },
              {
                key: "invokeInitedAPI",
                value: function (t) {
                  for (
                    var n = this,
                      e = arguments.length,
                      r = new Array(e > 1 ? e - 1 : 0),
                      o = 1;
                    o < e;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  var i = this["_".concat(t)];
                  if (this.initState === b)
                    return i && "function" === typeof i
                      ? i.bind(this).apply(void 0, r)
                      : new Promise(function (t, n) {
                          n();
                        });
                  var u = this.appendPendingQueue(function () {
                    return n.invokeInitedAPI.apply(n, [t].concat(r));
                  });
                  return this.initAPI(), u;
                },
              },
              {
                key: "getUserInfo",
                value: function () {
                  var t = this,
                    n = this.invokeInitedAPI("getUserInfo");
                  return (
                    n.then(function (n) {
                      t._cacheAuth = n;
                    }),
                    n
                  );
                },
              },
              {
                key: "checkLogin",
                value: function () {
                  var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return this.invokeInitedAPI("checkLogin", t, n);
                },
              },
              {
                key: "isLogin",
                value: function () {
                  var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return this.invokeInitedAPI("isLogin", t, n);
                },
              },
              {
                key: "autoLogout",
                value: function () {
                  return this.invokeInitedAPI("autoLogout");
                },
              },
              {
                key: "login",
                value: function (t) {
                  return this.invokeInitedAPI("login", t);
                },
              },
              {
                key: "logout",
                value: function () {
                  return this.invokeInitedAPI("logout");
                },
              },
              {
                key: "openLoginView",
                value: function () {
                  return this.invokeInitedAPI("openLoginView");
                },
              },
              {
                key: "initUDB",
                value: function () {
                  return this.invokeInitedAPI("initUDB");
                },
              },
              {
                key: "anonymousLogin",
                value: function (t) {
                  return this.invokeInitedAPI("anonymousLogin", t);
                },
              },
              {
                key: "getPureCache",
                value: function () {
                  return this._cacheAuth;
                },
              },
            ]),
            t
          );
        })();
      function I(t) {
        return o()(
          regeneratorRuntime.mark(function n() {
            var e = arguments;
            return regeneratorRuntime.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return n.abrupt("return", t.apply(void 0, e));
                  case 1:
                  case "end":
                    return n.stop();
                }
            }, n);
          })
        );
      }
      n.default = new _();
    },
    oE18: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return u;
      });
      var r = e("tvFO");
      var o = e("FIla"),
        i = e("ZvXx");
      function u(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Object(r.a)(t);
          })(t) ||
          Object(o.a)(t) ||
          Object(i.a)(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    omnE: function (t) {
      t.exports = JSON.parse(
        '{"1000":["ABC"],"1025":["DZ","AF","AE","OM","EG","PS","BH","ER","DJ","QA","KM","KW","LB","LY","MR","MA","SA","SD","SO","TN","SY","YE","IQ","IR","IL","JO","TD"],"1028":["CN","MO","TW","HK","SG"],"1033":["AG","BS","BZ","PH","GD","HT","CA","US","TT","SG","JM","PK","SV","BN","IN"],"1034":["CU","AR","PY","PA","BO","EC","CO","CR","HN","PE","MX","NI","SV","GT","VE","UY","ES","CL","BZ","US"],"1041":["JP"],"1046":["BR"],"1049":["RU","AZ"],"1054":["TH"],"1055":["TR","AZ"],"1057":["ID","MY","MY"],"1066":["VN"],"1081":["IN"],"1086":["MY","BN"],"1124":["PH"]}'
      );
    },
    p1oI: function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return i;
      });
      var r = e("q4i/"),
        o = e.n(r);
      n.a = function (t) {
        for (
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window.location.search,
            e = n.substring(1),
            r = e.split("&"),
            i = "[object Array]" === Object.prototype.toString.call(t),
            u = {},
            a = 0;
          a < r.length;
          a++
        ) {
          var c = r[a].split("="),
            s = c || [],
            f = o()(s, 2),
            l = f[0],
            p = f[1];
          if (i && t.indexOf(l >= 0)) u[l] = p;
          else if (l === t) return p;
        }
        return !!i && u;
      };
      var i = function (t) {
        for (
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window.location.search,
            e = n.substring(1),
            r = e.split("&"),
            o = !1,
            i = 0;
          i < r.length;
          i++
        ) {
          var u = r[i].split("=");
          u[0] === t && (o = u[1]);
        }
        return o;
      };
    },
    pYR3: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return o;
      });
      var r = "Invariant failed";
      function o(t, n) {
        if (!t) throw new Error(r);
      }
    },
    "q4i/": function (t, n, e) {
      var r = e("51+F"),
        o = e("z4vH"),
        i = e("ruNt"),
        u = e("WcAj");
      (t.exports = function (t, n) {
        return r(t) || o(t, n) || i(t, n) || u();
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    rIiI: function (t, n, e) {
      t.exports = e("4KFe")(238);
    },
    rjEi: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return u;
      });
      var r = e("0eRt");
      var o = e("ZvXx"),
        i = e("bTN7");
      function u(t, n) {
        return (
          Object(r.a)(t) ||
          (function (t, n) {
            var e =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != e) {
              var r,
                o,
                i = [],
                u = !0,
                a = !1;
              try {
                for (
                  e = e.call(t);
                  !(u = (r = e.next()).done) &&
                  (i.push(r.value), !n || i.length !== n);
                  u = !0
                );
              } catch (c) {
                (a = !0), (o = c);
              } finally {
                try {
                  u || null == e.return || e.return();
                } finally {
                  if (a) throw o;
                }
              }
              return i;
            }
          })(t, n) ||
          Object(o.a)(t, n) ||
          Object(i.a)()
        );
      }
    },
    ruNt: function (t, n, e) {
      var r = e("EWIN");
      (t.exports = function (t, n) {
        if (t) {
          if ("string" === typeof t) return r(t, n);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === e && t.constructor && (e = t.constructor.name),
            "Map" === e || "Set" === e
              ? Array.from(t)
              : "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              ? r(t, n)
              : void 0
          );
        }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    sNZr: function (t, n, e) {
      "use strict";
      e.d(n, "c", function () {
        return _;
      }),
        e.d(n, "d", function () {
          return I;
        }),
        e.d(n, "a", function () {
          return k;
        }),
        e.d(n, "b", function () {
          return N;
        });
      var r = e("V4gF"),
        o = e.n(r),
        i = e("q4i/"),
        u = e.n(i),
        a = e("cQwn"),
        c = e.n(a),
        s = (e("28PD"), e("p1oI")),
        f = e("KkFV"),
        l = e("nimoua"),
        p = e.n(l);
      function d(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function h(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? d(Object(e), !0).forEach(function (n) {
                c()(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : d(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var v = function (t) {
        if (t) {
          var n = t.udbUserId,
            e = t.userName,
            r = t.userImg,
            o = t.userId;
          return h(
            h({}, t),
            {},
            {
              uid: parseInt(n || 0, 10),
              nick: e || "",
              avatar: r || "",
              userid: o || "",
            }
          );
        }
        return t;
      };
      function y(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function m(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? y(Object(e), !0).forEach(function (n) {
                c()(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : y(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var g = {
          _nickname: "userName",
          _avatarUrl: "avatarUrl",
          _userid: "userid",
          _lang: "lang",
          _clang: "clang",
          _country: "country",
          _guid: "guid",
          _theme: "theme",
        },
        w = { _udbtoken: "bizToken", _udbid: "udbUserId", _udbver: "version" },
        b = m(m({}, g), w),
        _ = function () {
          return (
            Object.entries(b).forEach(function (t) {
              var n = u()(t, 2),
                e = n[0],
                r = n[1],
                o = Object(s.a)(e);
              o && (f.a.remove(r), f.a.set(r, decodeURIComponent(o), 0));
            }),
            e("3Yl8").default.getUserInfo()
          );
        },
        I = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { bizToken: "", udbUserId: "", version: "" };
          Object.values(w).forEach(function (n) {
            var e = t[n];
            e && (f.a.remove(n), f.a.set(n, decodeURIComponent(e), 25));
          }),
            Object.entries(g).forEach(function (t) {
              var n = u()(t, 2),
                e = n[0],
                r = n[1],
                o = Object(s.a)(e);
              o && (f.a.remove(r), f.a.set(r, decodeURIComponent(o), 25));
            });
          var n = e("3Yl8").default;
          return n.getUserInfo();
        },
        O = (function () {
          var t = o()(
            regeneratorRuntime.mark(function t() {
              var n, e;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = {}),
                        (e = !1),
                        (t.next = 4),
                        N()
                          .then(function () {
                            var t = f.a.get("udb_biztoken"),
                              e = f.a.get("udb_version"),
                              r = f.a.get("udb_uid");
                            n =
                              t && e && r
                                ? I({ bizToken: t, udbUserId: r, version: e })
                                : _();
                          })
                          .catch(function () {
                            n = _();
                          })
                          .finally(function () {
                            var t = n,
                              r = t.bizToken,
                              o = t.udbUserId,
                              i = t.version;
                            r && o && i && (e = v(n));
                          })
                      );
                    case 4:
                      return t.abrupt("return", e);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        S = function () {
          var t = e("mTTC").default;
          return t.checkLogin(!0).then(function (n) {
            return (
              !!n &&
              t
                .getUserInfo()
                .then(function (t) {
                  return t || !1;
                })
                .catch(function () {
                  return !1;
                })
            );
          });
        },
        E = function () {
          var t = (0, e("G5Pb").default)();
          return !!t && v(t);
        },
        A = function () {
          return p.a.isInNimoPc && Object(s.a)("_userid");
        },
        T = function () {
          return p.a.isInNimoApp;
        },
        k = (function () {
          var t = o()(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!A()) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return", O());
                    case 4:
                      if (!T()) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt("return", S());
                    case 8:
                      return t.abrupt("return", E());
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        N = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.token,
            e = t.uid,
            r = t.countryCode,
            o = n || Object(s.a)("_udbtoken"),
            i = e || Object(s.a)("_udbid"),
            u = r || Object(s.a)("_country");
          return new Promise(function (t, n) {
            fetch(
              ""
                .concat("https", "://")
                .concat("udblgn", ".")
                .concat("nimo.tv", "/login/biztoken/web"),
              {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  appId: 1005,
                  countryCode: u,
                  data: { uid: i, biztoken: o },
                }),
              }
            )
              .then(function (t) {
                return t.json();
              })
              .then(function (e) {
                0 === (e || {}).returnCode ? t(e) : n(e);
              })
              .catch(n);
          });
        };
    },
    tWqE: function (t, n, e) {
      var r = e("azGL");
      function o(n, e, i) {
        return (
          "undefined" !== typeof Reflect && Reflect.get
            ? ((t.exports = o = Reflect.get),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0))
            : ((t.exports = o =
                function (t, n, e) {
                  var o = r(t, n);
                  if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, n);
                    return i.get ? i.get.call(e) : i.value;
                  }
                }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0)),
          o(n, e, i || n)
        );
      }
      (t.exports = o),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    tvFO: function (t, n, e) {
      "use strict";
      function r(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    ucgO: function (t, n, e) {
      "use strict";
      function r(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function o(t, n, e) {
        return n && r(t.prototype, n), e && r(t, e), t;
      }
      e.d(n, "a", function () {
        return o;
      });
    },
    uofp: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return r;
      }),
        e.d(n, "b", function () {
          return i;
        }),
        e.d(n, "d", function () {
          return u;
        }),
        e.d(n, "c", function () {
          return a;
        });
      var r = {
          requestFullscreen: "",
          exitFullscreen: "",
          fullscreenElement: "",
          fullscreenEnabled: "",
          fullscreenchange: "",
          fullscreenerror: "",
        },
        o = !1;
      function i() {
        if (!o) {
          o = !0;
          for (
            var t = [
                [
                  "requestFullscreen",
                  "exitFullscreen",
                  "fullscreenElement",
                  "fullscreenEnabled",
                  "fullscreenchange",
                  "fullscreenerror",
                ],
                [
                  "webkitRequestFullscreen",
                  "webkitExitFullscreen",
                  "webkitFullscreenElement",
                  "webkitFullscreenEnabled",
                  "webkitfullscreenchange",
                  "webkitfullscreenerror",
                ],
                [
                  "webkitRequestFullScreen",
                  "webkitCancelFullScreen",
                  "webkitCurrentFullScreenElement",
                  "webkitCancelFullScreen",
                  "webkitfullscreenchange",
                  "webkitfullscreenerror",
                ],
                [
                  "mozRequestFullScreen",
                  "mozCancelFullScreen",
                  "mozFullScreenElement",
                  "mozFullScreenEnabled",
                  "mozfullscreenchange",
                  "mozfullscreenerror",
                ],
                [
                  "msRequestFullscreen",
                  "msExitFullscreen",
                  "msFullscreenElement",
                  "msFullscreenEnabled",
                  "MSFullscreenChange",
                  "MSFullscreenError",
                ],
              ],
              n = t[0],
              e = [],
              i = 0;
            i < t.length;
            i += 1
          )
            if (t[i][1] in document) {
              e = t[i];
              break;
            }
          if (e) for (var u = 0; u < e.length; u += 1) r[n[u]] = e[u];
        }
      }
      var u = function () {
          return i(), Boolean(document[r.fullscreenElement]);
        },
        a = function () {
          i(),
            u() && document[r.exitFullscreen] && document[r.exitFullscreen]();
        };
    },
    "uq/f": function (t, n, e) {
      "use strict";
      var r = {
        generate32: function () {
          var t = new Date(1582, 10, 15, 0, 0, 0, 0),
            n = new Date().getTime() - t.getTime();
          return (
            this.generateBits(n, 0, 31) +
            "" +
            this.generateBits(n, 32, 47) +
            (this.generateBits(n, 48, 59) + "1") +
            this.generateBits(this.rand(4095), 0, 7) +
            this.generateBits(this.rand(4095), 0, 7) +
            (this.generateBits(this.rand(8191), 0, 7) +
              this.generateBits(this.rand(8191), 8, 15) +
              this.generateBits(this.rand(8191), 0, 7) +
              this.generateBits(this.rand(8191), 8, 15) +
              this.generateBits(this.rand(8191), 0, 15))
          );
        },
        generateBits: function (t, n, e) {
          var r = this.returnBase(t, 16),
            o = new Array(),
            i = "",
            u = 0;
          for (u = 0; u < r.length; u++) o.push(r.substring(u, u + 1));
          for (u = Math.floor(n / 4); u <= Math.floor(e / 4); u++)
            i += o[u] && "" != o[u] ? o[u] : "0";
          return i;
        },
        returnBase: function (t, n) {
          var e = [
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
          if (n > t) var r = e[t];
          else {
            var o = "" + Math.floor(t / n),
              i = t - o * n;
            if (o >= n) r = this.returnBase(o, n) + e[i];
            else r = e[o] + e[i];
          }
          return r;
        },
        rand: function (t) {
          return Math.floor(Math.random() * t);
        },
      };
      n.a = function () {
        return r.generate32();
      };
    },
    vNXk: function (t, n, e) {
      t.exports = e("4KFe")(3);
    },
    w4Qk: function (t, n, e) {
      "use strict";
      function r(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      e.d(n, "a", function () {
        return r;
      });
    },
    w54A: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return u;
      });
      var r = e("nimoua"),
        o = e.n(r),
        i = function (t) {
          return t && /^\d+$/.test(t);
        },
        u = function (t, n) {
          var e =
            n ||
            (function (t) {
              if ("string" !== typeof t) return "";
              var n = t.match(/\d+(?:\.\d+)*/);
              return n ? n[0] : "";
            })(o.a.appBrowser.version);
          if (!e || !t) return !1;
          for (
            var r = t.split("."), u = e.split("."), a = 0;
            a < r.length;
            a += 1
          ) {
            var c = r[a],
              s = u[a];
            if (!i(c) || !i(s)) return !1;
            var f = Number(c),
              l = Number(s);
            if (f < l) return !0;
            if (f > l) return !1;
          }
          return !0;
        };
    },
    "xB+L": function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "isInNimoApp", function () {
          return U;
        }),
        e.d(n, "isInNimoTv", function () {
          return j;
        }),
        e.d(n, "isInNimoStreamer", function () {
          return D;
        }),
        e.d(n, "getVersion", function () {
          return M;
        }),
        e.d(n, "isLowerLastedVersion", function () {
          return x;
        }),
        e.d(n, "invokeJsBridge", function () {
          return V;
        }),
        e.d(n, "checkJsApiVersionIsNoLessThen", function () {
          return H;
        }),
        e.d(n, "jumpToLiveRoom", function () {
          return W;
        }),
        e.d(n, "jumpToOuterBrowser", function () {
          return z;
        }),
        e.d(n, "jumpToInnerBrowser", function () {
          return Y;
        }),
        e.d(n, "jumpToMessageCenter", function () {
          return q;
        }),
        e.d(n, "jumpToMessageCenterPage", function () {
          return Z;
        }),
        e.d(n, "getUserInfoFromApp", function () {
          return $;
        }),
        e.d(n, "toastLoginBoxByApp", function () {
          return tt;
        }),
        e.d(n, "toastShareBoxByApp", function () {
          return nt;
        }),
        e.d(n, "showShareBtn", function () {
          return et;
        }),
        e.d(n, "hideShareBtn", function () {
          return rt;
        }),
        e.d(n, "copyToClipboardByApp", function () {
          return ot;
        }),
        e.d(n, "showToastByApp", function () {
          return it;
        }),
        e.d(n, "jumpToStartStreamer", function () {
          return ut;
        }),
        e.d(n, "followEvent", function () {
          return at;
        }),
        e.d(n, "jump2Recharge", function () {
          return ct;
        }),
        e.d(n, "jump2RechargeInRoom", function () {
          return st;
        }),
        e.d(n, "setNavigationBar", function () {
          return ft;
        }),
        e.d(n, "setTitle", function () {
          return lt;
        }),
        e.d(n, "setNavigationBar2", function () {
          return pt;
        }),
        e.d(n, "jumpToPlayerPage", function () {
          return dt;
        }),
        e.d(n, "jumpGamePage", function () {
          return ht;
        }),
        e.d(n, "jumpChatRoomPage", function () {
          return vt;
        }),
        e.d(n, "closeWebView", function () {
          return yt;
        }),
        e.d(n, "discordAuthSuccess", function () {
          return mt;
        }),
        e.d(n, "downloadFile", function () {
          return gt;
        }),
        e.d(n, "resizeEvents", function () {
          return wt;
        }),
        e.d(n, "getLiveroomInfo", function () {
          return _t;
        }),
        e.d(n, "registerSocketMsg", function () {
          return Ot;
        }),
        e.d(n, "unregisterSocketMsg", function () {
          return St;
        }),
        e.d(n, "setSocketMsgCallback", function () {
          return Et;
        }),
        e.d(n, "sendBussinessMsg", function () {
          return At;
        }),
        e.d(n, "openActivityModal", function () {
          return Tt;
        }),
        e.d(n, "resizeWebView", function () {
          return kt;
        }),
        e.d(n, "setNavEntry", function () {
          return Lt;
        }),
        e.d(n, "setNavEntry2", function () {
          return Bt;
        }),
        e.d(n, "openRoomGiftPanel", function () {
          return Rt;
        }),
        e.d(n, "showUserInfoDialog", function () {
          return Pt;
        }),
        e.d(n, "playMusic", function () {
          return Ut;
        }),
        e.d(n, "pauseMusic", function () {
          return jt;
        }),
        e.d(n, "registerBusinessMsg", function () {
          return Dt;
        }),
        e.d(n, "unregisterBusinessMsg", function () {
          return Mt;
        }),
        e.d(n, "setBusinessMsgCallback", function () {
          return xt;
        }),
        e.d(n, "subscribePay", function () {
          return Ft;
        }),
        e.d(n, "jumpTopUpRecord", function () {
          return Gt;
        }),
        e.d(n, "gdprAccountCancel", function () {
          return Vt;
        }),
        e.d(n, "popupJoinFansModal", function () {
          return Jt;
        }),
        e.d(n, "popupPaidSubscriptionModal", function () {
          return Ht;
        }),
        e.d(n, "pickerModal", function () {
          return Kt;
        }),
        e.d(n, "setBackButton", function () {
          return Wt;
        }),
        e.d(n, "subscribeTopic", function () {
          return zt;
        }),
        e.d(n, "unsubscribeTopic", function () {
          return Yt;
        }),
        e.d(n, "topup", function () {
          return qt;
        }),
        e.d(n, "topup2", function () {
          return Zt;
        }),
        e.d(n, "openNativePageInRoom", function () {
          return Qt;
        }),
        e.d(n, "subscribeActivity", function () {
          return $t;
        }),
        e.d(n, "bindPhone", function () {
          return Xt;
        }),
        e.d(n, "shareToPlatformByShareId", function () {
          return tn;
        }),
        e.d(n, "jump2Feedback", function () {
          return nn;
        }),
        e.d(n, "shareToTikTok", function () {
          return en;
        }),
        e.d(n, "topupWithCoupon", function () {
          return rn;
        }),
        e.d(n, "recieveRechargeTicketSuccess", function () {
          return on;
        }),
        e.d(n, "steamerGrowthProgram", function () {
          return un;
        }),
        e.d(n, "getAppflyShareParams", function () {
          return an;
        }),
        e.d(n, "blackCardPay", function () {
          return cn;
        }),
        e.d(n, "updateBalance", function () {
          return sn;
        }),
        e.d(n, "showPersonalPage", function () {
          return fn;
        }),
        e.d(n, "setTooltip", function () {
          return ln;
        }),
        e.d(n, "turnOnMeetingMic", function () {
          return pn;
        }),
        e.d(n, "openRecharge", function () {
          return dn;
        }),
        e.d(n, "updatePostStatus", function () {
          return hn;
        }),
        e.d(n, "openWeeklyStar", function () {
          return vn;
        }),
        e.d(n, "jumpToPostEditPage", function () {
          return yn;
        }),
        e.d(n, "jumoToRecommendPage", function () {
          return mn;
        }),
        e.d(n, "jumoToProfileEdit", function () {
          return gn;
        }),
        e.d(n, "sendDataToWebview", function () {
          return wn;
        }),
        e.d(n, "entryMyAudioRoom", function () {
          return bn;
        }),
        e.d(n, "entryMyAudioRoomDashboard", function () {
          return _n;
        }),
        e.d(n, "startRandomPK", function () {
          return In;
        }),
        e.d(n, "openInviteListPanel", function () {
          return On;
        }),
        e.d(n, "getLocalVideoCover", function () {
          return Sn;
        }),
        e.d(n, "playVideo", function () {
          return En;
        }),
        e.d(n, "uploadPostVideo", function () {
          return An;
        }),
        e.d(n, "getVideoInfoInPhotoAlbum", function () {
          return Tn;
        }),
        e.d(n, "followHashTagEvent", function () {
          return kn;
        });
      var r = e("f2qI"),
        o = e.n(r),
        i = e("V4gF"),
        u = e.n(i),
        a = e("cQwn"),
        c = e.n(a),
        s = (e("28PD"), e("66+j")),
        f = e("gtb+"),
        l = e.n(f),
        p = function (t, n) {
          if (!n) return t;
          var e = (t || "").split("?"),
            r = Object.keys(n),
            o = new RegExp("(".concat(r.join("|"), ")=(\\w|.)+")),
            i =
              "undefined" !== typeof e[1]
                ? e[1].split("&").filter(function (t) {
                    return !o.test(t);
                  })
                : [],
            u = [].concat(
              l()(i),
              l()(
                r.map(function (t) {
                  return ""
                    .concat(t, "=")
                    .concat(encodeURIComponent(n[t] || ""));
                })
              )
            );
          return ""
            .concat(e[0])
            .concat(
              Array.isArray(u) && u.length > 0 ? "?".concat(u.join("&")) : ""
            );
        },
        d = e("cOjp"),
        h = e("q4i/"),
        v = e.n(h),
        y = e("rIiI"),
        m = e.n(y),
        g = e("58BP"),
        w = e.n(g),
        b = e("KFtC"),
        _ = new ((function () {
          function t() {
            m()(this, t),
              c()(this, "appId", void 0),
              c()(this, "bizToken", void 0),
              c()(this, "clang", void 0),
              c()(this, "country", void 0),
              c()(this, "version", void 0),
              c()(this, "lang", Object(b.k)()),
              c()(this, "nickName", void 0),
              c()(this, "uid", -1),
              c()(this, "jsApiVersion", void 0),
              c()(this, "isLogin", !1),
              c()(this, "isHost", !1),
              c()(this, "udbUserId", -1),
              c()(this, "avatarUrl", void 0),
              c()(this, "sex", 0),
              c()(this, "birthday", 0),
              c()(this, "stauts", 0),
              c()(this, "NORMAL_VERSION", -1),
              c()(this, "ua", ""),
              c()(this, "guid", ""),
              c()(this, "deviceId", ""),
              c()(this, "safeDeviceId", "");
          }
          return (
            w()(t, [
              {
                key: "setAuthFromApp",
                value: function (t) {
                  if (t) {
                    var n = JSON.parse(t);
                    if (
                      ((this.safe_top =
                        null === n || void 0 === n ? void 0 : n.safe_top),
                      (this.safe_left =
                        null === n || void 0 === n ? void 0 : n.safe_left),
                      (this.safe_right =
                        null === n || void 0 === n ? void 0 : n.safe_right),
                      (this.safe_bottom =
                        null === n || void 0 === n ? void 0 : n.safe_bottom),
                      (this.appId =
                        null === n || void 0 === n ? void 0 : n.appId),
                      (this.bizToken =
                        null === n || void 0 === n ? void 0 : n.bizToken),
                      (this.clang =
                        null === n || void 0 === n ? void 0 : n.clang),
                      (this.country =
                        null === n || void 0 === n ? void 0 : n.country),
                      (this.cCountry =
                        null === n || void 0 === n ? void 0 : n.ccountry),
                      !this.cCountry)
                    ) {
                      if (this.clang) {
                        var e = Object(b.p)("", this.clang),
                          r = v()(e, 1)[0];
                        this.cCountry = r;
                      }
                      this.cCountry || (this.cCountry = this.country);
                    }
                    (this.version =
                      null === n || void 0 === n ? void 0 : n.version),
                      (this.lang =
                        (null === n || void 0 === n ? void 0 : n.lang) || 1033),
                      (this.nickName =
                        null === n || void 0 === n ? void 0 : n.nickName),
                      (this.uid =
                        (null === n || void 0 === n ? void 0 : n.uid) || -1),
                      (this.udbUserId =
                        (null === n || void 0 === n ? void 0 : n.udbUserId) ||
                        -1),
                      (this.jsApiVersion =
                        null === n || void 0 === n ? void 0 : n.jsApiVersion),
                      (this.isLogin = -1 !== this.uid),
                      (this.avatarUrl =
                        null === n || void 0 === n ? void 0 : n.avatarUrl),
                      (this.sex = null === n || void 0 === n ? void 0 : n.sex),
                      (this.birthday =
                        null === n || void 0 === n ? void 0 : n.birthday),
                      (this.NORMAL_VERSION =
                        (null === n || void 0 === n
                          ? void 0
                          : n.NORMAL_VERSION) || -1);
                    var o = null === n || void 0 === n ? void 0 : n.ua;
                    (this.ua = o || "web&1.0.4&nimoTV"),
                      (this.isUAFromApp = !!o);
                    var i =
                        (null === n || void 0 === n ? void 0 : n.guid) || "",
                      u = Object(b.l)();
                    (this.guid = i || u),
                      (this.webMid = u),
                      (this.appGuid = i),
                      (this.isGuidFromApp = !!i),
                      (this.appMid =
                        (null === n || void 0 === n ? void 0 : n.mid) ||
                        (null === n || void 0 === n ? void 0 : n.appMid) ||
                        ""),
                      (this.mid = this.appMid),
                      (this.deviceId =
                        (null === n || void 0 === n ? void 0 : n.deviceId) ||
                        ""),
                      (this.safeDeviceId =
                        (null === n || void 0 === n
                          ? void 0
                          : n.safeDeviceId) || ""),
                      (this.bindMobilePhoneNum =
                        (null === n || void 0 === n
                          ? void 0
                          : n.bindMobilePhoneNum) || "");
                  }
                },
              },
              {
                key: "getUdbUserInfo",
                value: function () {
                  return {
                    udbUserId: this.udbUserId,
                    bizToken: this.bizToken,
                    userName: this.nickName,
                    avatarUrl: this.avatarUrl,
                    version: this.version,
                    lang: this.lang,
                    country: this.country,
                    cCountry: this.cCountry,
                    ua: this.ua,
                    guid: this.guid,
                  };
                },
              },
              {
                key: "setIsHost",
                value: function (t) {
                  this.isHost = t;
                },
              },
              {
                key: "setStatus",
                value: function (t) {
                  this.stauts = t;
                },
              },
            ]),
            t
          );
        })())(),
        I = e("nimoua"),
        O = e.n(I),
        S = e("w54A"),
        E = e("O+iE"),
        A = ["clickCallback"],
        T = ["clickCallback"],
        k = ["callback"],
        N = [
          "callback",
          "productType",
          "productId",
          "productName",
          "productDesc",
          "diamond",
          "money",
          "anchorId",
          "orderType",
          "businessId",
          "channelId",
        ];
      function L(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function C(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? L(Object(e), !0).forEach(function (n) {
                c()(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : L(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var B,
        R = d.b.log,
        P = -1,
        U = function () {
          return /^.*(nimo).*$/.test(navigator.userAgent);
        },
        j = function () {
          return /^.*(nimotv).*$/.test(navigator.userAgent);
        },
        D = function () {
          return /^.*(nimostreamer).*$/.test(navigator.userAgent);
        },
        M = function () {
          if (!U()) return P;
          if (j()) {
            var t = navigator.userAgent.match(/^.*nimotv-(.*)$/);
            return t ? t[1] : P;
          }
          if (D()) {
            var n = navigator.userAgent.match(/^.*nimostreamer-(.*)$/);
            return n ? n[1] : P;
          }
        },
        x = function () {
          return !0;
        },
        F = !1,
        G = [];
      function V(t) {
        F
          ? G.push(t)
          : ((F = !0),
            B
              ? (B.src = t)
              : (((B = document.createElement("iframe")).src = t),
                (B.className = "js-bridge-iframe"),
                (B.style.display = "none"),
                document.body.appendChild(B)),
            R("invokeJsBridge", Date.now(), t),
            setTimeout(function () {
              (F = !1), G.length > 0 && V(G.shift());
            }, 200));
      }
      function J(t, n) {
        var e = "nimo://huya.nimo.com/".concat(t),
          r = "";
        if ("[object Object]" === Object.prototype.toString.call(n)) {
          var o = [];
          Object.keys(n).forEach(function (t) {
            o.push("".concat(t, "=").concat(encodeURIComponent(n[t])));
          }),
            (r = o.join("&"));
        }
        return "" !== r && (e += "?".concat(r)), e;
      }
      function H(t, n) {
        return $(C({ isMock: !1 }, n)).then(function (n) {
          var e = (n || {}).jsApiVersion;
          return R("jsbridge version".concat(e)), e >= t;
        });
      }
      var K,
        W = function (t) {
          var n,
            e = t.anchorId,
            r = t.roomId,
            o = t.from,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function (t) {
                    return t;
                  };
          M() !== P
            ? ((n = "nimo://huya.nimo.com/living_room?anchor_id="
                .concat(e, "&room_id=")
                .concat(r)),
              o && (n += "&from=".concat(o)))
            : (n = "//".concat("m.nimo.tv", "/live/").concat(r)),
            "function" === typeof i && (n = i(n)),
            V(n);
        },
        z = function (t) {
          var n = t.url;
          V(
            "nimo://huya.nimo.com/web_browser?url=".concat(
              encodeURIComponent(n)
            )
          );
        },
        Y = function (t) {
          var n = t.url;
          R("调用-内部浏览器-js桥"),
            V(
              "nimo://huya.nimo.com/inner_browser?url=".concat(
                encodeURIComponent(n)
              )
            );
        },
        q = function (t) {
          var n = t.messageId;
          V("nimo://huya.nimo.com/message_center?message_id=".concat(n));
        },
        Z = function () {
          V("nimo://huya.nimo.com/message_center");
        };
      function Q() {
        return new Promise(function (t) {
          X.push(function (n) {
            _.setAuthFromApp(n), t(_);
          }),
            V(
              "nimo://huya.nimo.com/get_user_info?callback=JS_BRIDGE_GET_USER_INFO"
            );
        });
      }
      var $ = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.isMock,
            r = void 0 !== n && n;
          return new Promise(function (t, n) {
            return -1 !== M() || r
              ? !0 === r
                ? (_.setAuthFromApp(JSON.stringify(e("bUku"))),
                  (P = _.NORMAL_VERSION),
                  t(_),
                  !1)
                : _.isLogin
                ? (t(_), !1)
                : (K ||
                    (K = Q()).then(function () {
                      K = null;
                    }),
                  void t(K))
              : (t(_), !1);
          });
        },
        X = [];
      window.JS_BRIDGE_GET_USER_INFO = function (t) {
        X.forEach(function (n, e) {
          n && n(t);
        }),
          (X = []);
      };
      var tt = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.isReload,
            e = void 0 === n || n,
            r = t.reloadSucCallback,
            o = t.from,
            i = void 0 === o ? "webView" : o,
            u = t.type,
            a = void 0 === u ? 0 : u;
          return new Promise(function (t, n) {
            return (
              -1 !== M() &&
              !_.isLogin &&
              ((window.JS_BRIDGE_LOGIN_SUCCESS = function (n) {
                R("登录js桥回调", n, e, r),
                  e
                    ? (r && r(n), window.location.reload())
                    : r
                    ? r(n)
                    : (_.setAuthFromApp(n), t(_));
              }),
              void V(
                "nimo://huya.nimo.com/login?callback=JS_BRIDGE_LOGIN_SUCCESS&from="
                  .concat(i, "&type=")
                  .concat(a)
              ))
            );
          });
        },
        nt = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.title,
            e = void 0 === n ? "" : n,
            r = t.image_url,
            o = void 0 === r ? "" : r,
            i = t.content,
            u = t.link,
            a = void 0 === u ? "" : u,
            c = t.platformCallback,
            s = void 0 === c ? "" : c,
            f = t.originId,
            l = void 0 === f ? 0 : f,
            p = t.encodedLink,
            d = void 0 === p ? "" : p,
            h = t.typeid,
            v = t.extrainfo,
            y = t.af_adr_ios_url,
            m = void 0 === y ? "" : y,
            g = t.af_web_url,
            w = void 0 === g ? "" : g,
            b = t.af_dp_link,
            _ = void 0 === b ? "" : b;
          if (-1 === M()) return !1;
          if (
            (R(
              "调起分享js桥",
              "originId:".concat(l, " content:").concat(i, " link:").concat(a)
            ),
            "function" === typeof s)
          ) {
            var I = s;
            (window.JS_BRIDGE_SHARE_CALLBACK = function (t, n) {
              R("分享js桥回调", t, n), I({ platform: t, status: n });
            }),
              (s = "JS_BRIDGE_SHARE_CALLBACK");
          }
          V(
            "nimo://huya.nimo.com/share?title="
              .concat(e, "&content=")
              .concat(i, "&link=")
              .concat(a, "&image_url=")
              .concat(o)
              .concat(s ? "&platformCallback=" + s : "", "&originId=")
              .concat(l)
              .concat(d ? "&encodedLink=" + d : "")
              .concat(h ? "&typeid=" + encodeURIComponent(h) : "")
              .concat(v ? "&extrainfo=" + encodeURIComponent(v) : "")
              .concat(m ? "&af_adr_ios_url=" + encodeURIComponent(m) : "")
              .concat(w ? "&af_web_url=" + encodeURIComponent(w) : "")
              .concat(_ ? "&af_dp_link=" + encodeURIComponent(_) : "")
          );
        },
        et = function (t) {
          var n = t.title,
            e = void 0 === n ? "" : n,
            r = t.image_url,
            o = void 0 === r ? "" : r,
            i = t.content,
            u = t.link,
            a = void 0 === u ? "" : u,
            c = t.encodedLink,
            s = void 0 === c ? "" : c;
          if (-1 === M()) return !1;
          $({ isMock: !1 }).then(function (t) {
            if (!(t.jsApiVersion >= 3)) return !1;
            V(
              "nimo://huya.nimo.com/show_share_btn?title="
                .concat(e, "&content=")
                .concat(i, "&link=")
                .concat(a, "&image_url=")
                .concat(o)
                .concat(s ? "&encodedLink=" + s : "")
            );
          });
        },
        rt = function () {
          if (-1 === M()) return !1;
          $().then(function (t) {
            if (!(t.jsApiVersion >= 3)) return !1;
            V("nimo://huya.nimo.com/hide_share_btn");
          });
        },
        ot = function (t) {
          var n = t.content;
          if (-1 === M()) return !1;
          V("nimo://huya.nimo.com/copy_to_clipboard?content=".concat(n));
        },
        it = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.content,
            e = t.time_length,
            r = void 0 === e ? "" : e,
            o = t.position,
            i = void 0 === o ? 0 : o;
          if (-1 === M()) return !1;
          V(
            "nimo://huya.nimo.com/toast?content="
              .concat(n, "&time_length=")
              .concat(r, "&position=")
              .concat(i)
          );
        },
        ut = function (t) {
          if (j())
            return $({ isMock: !1 }).then(function (n) {
              if (n.jsApiVersion >= 4) {
                var e = "nimo://huya.nimo.com/start_streamer";
                return (
                  V(
                    null !== t && void 0 !== t && t.from
                      ? ""
                          .concat(e, "?streamer_from_type=")
                          .concat(null === t || void 0 === t ? void 0 : t.from)
                      : e
                  ),
                  !0
                );
              }
              return !1;
            });
          if (D()) {
            var n = (t || {}).streamer_from_type;
            return At(1007, { streamer_from_type: n });
          }
          return Promise.resolve(!1);
        },
        at = function (t) {
          if (!j()) return !1;
          $({ isMock: !1 }).then(function (n) {
            return (
              R("followEvent -- auth.jsApiVersion", n.jsApiVersion),
              n.jsApiVersion >= 10
                ? (V("nimo://huya.nimo.com/follow_event?aid=".concat(t)), !0)
                : n.jsApiVersion >= 5 &&
                  (V("nimo://huya.nimo.com/update_follow_anchor_list"), !0)
            );
          });
        },
        ct = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            n = arguments.length > 1 ? arguments[1] : void 0,
            e = arguments.length > 2 ? arguments[2] : void 0;
          return $({ isMock: !1 }).then(function (r) {
            if (r.jsApiVersion >= 6) {
              var o = "nimo://huya.nimo.com/recharge_diamond_page?type=".concat(
                t
              );
              return (
                n && (o += "&orderType=".concat(n)),
                e && (o += "&anchorId=".concat(e)),
                V(o),
                !0
              );
            }
            return !1;
          });
        },
        st = function (t) {
          var n = t.type,
            e = void 0 === n ? 1 : n,
            r = t.orderType,
            o = void 0 === r ? "" : r,
            i = t.anchorId,
            u = void 0 === i ? "" : i,
            a = t.closeWebview,
            c = void 0 === a || a;
          return $({ isMock: !1 }).then(function (t) {
            var n = function () {
              if (t.jsApiVersion >= 34) {
                var n =
                  "nimo://huya.nimo.com/living_room_recharge_page?type=".concat(
                    e
                  );
                return (
                  o && (n += "&orderType=".concat(o)),
                  u && (n += "&anchorId=".concat(u)),
                  V(n),
                  !0
                );
              }
              return !1;
            };
            c
              ? (n(),
                setTimeout(function () {
                  yt();
                }, 0))
              : n();
          });
        },
        ft = function (t) {
          if (!(Object.keys(t).length <= 0) || U)
            return $({ isMock: !1 }).then(function (n) {
              if (n.jsApiVersion >= 8) {
                var e = (t || {}).title;
                return (
                  V(
                    Object(s.a)("nimo://huya.nimo.com/set_navigation_bar", {
                      title: encodeURIComponent(e),
                    })
                  ),
                  !0
                );
              }
              return !1;
            });
        },
        lt = function (t) {
          t &&
            (j()
              ? ft({ title: t })
              : ((document.title = ""), (document.title = t)));
        },
        pt = (function () {
          var t = u()(
            regeneratorRuntime.mark(function t(n) {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!(Object.keys(n).length <= 0) || U) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (t.next = 4), $({ isMock: !1 });
                    case 4:
                      if (!(t.sent.jsApiVersion >= 45)) {
                        t.next = 10;
                        break;
                      }
                      return (
                        V(p("nimo://huya.nimo.com/set_navigation_bar2", n)),
                        t.abrupt("return", !0)
                      );
                    case 10:
                      return t.abrupt("return", !1);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        dt = function (t) {
          var n = t.title,
            e = t.videoUrl,
            r = t.businessType,
            o = t.resourceId,
            i = t.cdnFlag,
            u = t.videoResolution,
            a = t.roomId,
            c = t.anchorId,
            s = t._tagId,
            f = t._tagType,
            l = t._tagName,
            p = t._searchType,
            d = t.from,
            h = void 0 === d ? "h5" : d,
            v =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            y = v.infoTabIndex,
            m = void 0 === y ? 0 : y;
          return (
            -1 !== M() &&
            $({ isMock: !1 }).then(function (t) {
              if (t.jsApiVersion >= 9) {
                var d = {
                    title: encodeURIComponent(n),
                    videoUrl: encodeURIComponent(
                      e.replace("https://", "http://")
                    ),
                    businessType: r,
                    resourceId: o,
                    cdnFlag: encodeURIComponent(i || ""),
                    videoResolution: encodeURIComponent(u || ""),
                    roomId: a,
                    anchorId: c,
                    infoTabIndex: m,
                    _tagId: s,
                    _tagType: f,
                    _tagName: l,
                    _searchType: p,
                    from: h,
                  },
                  v = Object.keys(d)
                    .map(function (t) {
                      return "".concat(t, "=").concat(d[t]);
                    })
                    .join("&");
                return (
                  V("nimo://huya.nimo.com/start_demand_player?".concat(v)), !0
                );
              }
              return !1;
            })
          );
        },
        ht = function (t) {
          return $({ isMock: !1 }).then(function (n) {
            if (n.jsApiVersion >= 9) {
              var e = t.gameType,
                r = t.gameName,
                o = t.businessType;
              return (
                V(
                  "nimo://huya.nimo.com/game_catogires?gameType="
                    .concat(e, "&gameName=")
                    .concat(r, "&businessType=")
                    .concat(o)
                ),
                !0
              );
            }
            return !1;
          });
        },
        vt = function (t) {
          return $({ isMock: !1 }).then(function (n) {
            if (n.jsApiVersion >= 9) {
              var e = t.udbUserId,
                r = t.nickName,
                o = t.avatarUrl,
                i = t.followStatus,
                u = void 0 === i ? "" : i;
              return (
                V(
                  "nimo://huya.nimo.com/chat_room?udbUserId="
                    .concat(e, "&nickName=")
                    .concat(encodeURIComponent(r || ""), "&avatarUrl=")
                    .concat(encodeURIComponent(o || ""), "&followStatus=")
                    .concat(u)
                ),
                !0
              );
            }
            return !1;
          });
        },
        yt = function () {
          return (
            R("调用closeWebView"),
            $({ isMock: !1 }).then(function (t) {
              return (
                R(
                  "调用closeWebView - auth.jsApiVersion",
                  null === t || void 0 === t ? void 0 : t.jsApiVersion
                ),
                t.jsApiVersion >= 1 &&
                  (V("nimo://huya.nimo.com/close_window"), !0)
              );
            })
          );
        },
        mt = function (t) {
          return (
            R("调用discordAuthSuccess"),
            $({ isMock: !1 }).then(function (t) {
              return (
                R(
                  "调用discordAuthSuccess-auth.jsApiVersion",
                  null === t || void 0 === t ? void 0 : t.jsApiVersion
                ),
                t.jsApiVersion >= 1 &&
                  (V("nimo://huya.nimo.com/discord_auth_success"), !0)
              );
            })
          );
        },
        gt = function (t) {
          var n = t.actionType,
            e = void 0 === n ? 0 : n,
            r = t.url,
            o = t.progressCallback;
          _.jsApiVersion >= 10 &&
            V(
              "nimo://huya.nimo.com/downloadFile?actionType="
                .concat(e, "&url=")
                .concat(encodeURIComponent(r))
                .concat(o ? "&progressCallback=" + o : "")
            );
        },
        wt = function (t) {
          document.location =
            "nimo://huya.nimo.com/resizeEvents?isExpand=".concat(t);
        },
        bt = 0,
        _t = function () {
          if ((R("JS桥-获取直播间信息-开始"), !1 === !!O.a.isInNimoApp))
            return Promise.resolve(!1);
          bt++;
          var t = "JS_BRIDGE_GET_LIVEROOM_INFO_".concat(bt);
          return new Promise(function (n, e) {
            window[t] ||
              (window[t] = function (t) {
                try {
                  var e = JSON.parse(t);
                  R("JS桥-获取直播间信息-回调触发 - ", e), n(e);
                } catch (r) {
                  R("JS桥-获取直播间信息-数据错误 - ", t),
                    n({}),
                    Object(E.a)().then(function (n) {
                      n &&
                        n.configureScope(function (e) {
                          e.setContext("jsb_get_liveroom_info", { json: t }),
                            n.captureException(r);
                        });
                    });
                }
              }),
              $({ isMock: !1 }).then(function (n) {
                R(
                  "调用getLiveroomInfo.jsApiVersion",
                  null === n || void 0 === n ? void 0 : n.jsApiVersion
                ),
                  n.jsApiVersion >= 11 &&
                    V(
                      "nimo://huya.nimo.com/get_liveroom_info?callback=".concat(
                        t
                      )
                    );
              });
          });
        };
      function It() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.ids,
          e = void 0 === n ? [] : n,
          r = t.protocols,
          o = void 0 === r ? [] : r,
          i = {};
        return (
          Array.isArray(e) && (i.ids = e.join(",")),
          Array.isArray(o) && (i.protocols = o.join(",")),
          i
        );
      }
      var Ot = function (t) {
          H(12).then(function (n) {
            n && V(J("register_socket_msg", It(t)));
          });
        },
        St = function (t) {
          H(12).then(function (n) {
            n && V(J("unregister_socket_msg", It(t)));
          });
        },
        Et = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.msgCallback,
            e = t.protocolCallback,
            r = {};
          H(12).then(function (t) {
            t &&
              ("function" === typeof n &&
                (window.JS_BRIDGE_SET_SOCKET_MSG_CALLBACK ||
                  (window.JS_BRIDGE_SET_SOCKET_MSG_CALLBACK = function () {
                    for (
                      var t = arguments.length, e = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      e[r] = arguments[r];
                    return n(e);
                  }),
                (r.msg_callback = "JS_BRIDGE_SET_SOCKET_MSG_CALLBACK")),
              "function" === typeof e &&
                (window.JS_BRIDGE_SET_SOCKET_PROTOCOL_CALLBACK ||
                  (window.JS_BRIDGE_SET_SOCKET_PROTOCOL_CALLBACK = function () {
                    for (
                      var t = arguments.length, n = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    return e(n);
                  }),
                (r.protocol_callback =
                  "JS_BRIDGE_SET_SOCKET_PROTOCOL_CALLBACK")),
              V(J("set_socket_msg_callback", r)));
          });
        },
        At = function (t, n, e) {
          return H(null !== e && void 0 !== e ? e : 12).then(function (e) {
            return (
              e &&
                (R("sendBussinessMsg", t, n),
                V(J("send_bussiness_msg", C({ messageId: t }, n)))),
              e
            );
          });
        },
        Tt = function (t, n) {
          return At(1e3, C({ url: t }, n));
        },
        kt = function (t, n) {
          return At(1001, { width: t, height: n });
        },
        Nt = function () {},
        Lt = function (t) {
          var n = t.clickCallback,
            e = o()(t, A);
          H(13).then(function (t) {
            if (t) {
              var r = "JS_BRIDGE_SET_NAV_ENTRY_CLICK_CALLBACK";
              "function" === typeof n && e.show
                ? (window[r] = n)
                : (window[r] = Nt),
                (e.clickCallback = r),
                V(J("set_nav_entry", e));
            }
          });
        },
        Ct = O.a.isInNimoApp && !O.a.isInNimoStreamer && O.a.isAdr,
        Bt = function (t) {
          var n = t.clickCallback,
            e = o()(t, T);
          H(13).then(function (t) {
            if (t && (!Ct || Object(S.a)("1.9.79"))) {
              var r = "JS_BRIDGE_SET_NAV_ENTRY_CLICK_CALLBACK";
              "function" === typeof n && e.show
                ? (window[r] = n)
                : (window[r] = Nt),
                (e.clickCallback = r),
                V(J("set_nav_entry", e));
            }
          });
        },
        Rt = function (t) {
          return At(1002, t);
        },
        Pt = function (t) {
          var n = t.udbUserId,
            e = t.from,
            r = t.avatarUrl,
            o = t.nickName;
          H(13).then(function (t) {
            if (t) {
              var i = "nimo://huya.nimo.com/show_userInfo_dialog?udbuserid="
                .concat(n, "&from=")
                .concat(e);
              r && (i += "&avatarUrl=".concat(encodeURIComponent(r))),
                o && (i += "&nickName=".concat(encodeURIComponent(o))),
                R("showUserInfoDialog - 调起用户卡片", i),
                V(i);
            }
          });
        },
        Ut = function (t) {
          var n = t.urls,
            e = void 0 === n ? [] : n;
          null !== e &&
            void 0 !== e &&
            e.length &&
            H(1).then(function (t) {
              if (t) {
                var n = Object(s.a)("nimo://huya.nimo.com/play_music", {
                  url: e.map(function (t) {
                    return encodeURIComponent(t);
                  }),
                });
                R("play_music - 播放背景音乐", n), V(n);
              }
            });
        },
        jt = function () {
          H(1).then(function (t) {
            if (t) {
              var n = "nimo://huya.nimo.com/pause_music";
              R("pause_music - 暂停背景音乐的播放", n), V(n);
            }
          });
        },
        Dt = function (t) {
          return At(1003, It(t));
        },
        Mt = function (t) {
          return At(1005, It(t));
        },
        xt = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.msgCallback,
            e = {};
          if ("function" !== typeof n)
            throw new ReferenceError("[msgCallback] is not a function.");
          window.JS_BRIDGE_SET_BUSINESS_MSG_CALLBACK ||
            (window.JS_BRIDGE_SET_BUSINESS_MSG_CALLBACK = function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              return n(e);
            }),
            (e.msg_callback = "JS_BRIDGE_SET_BUSINESS_MSG_CALLBACK"),
            At(1004, e);
        },
        Ft = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          R("触发-JS桥-subscribePay", { ua: O.a });
          t.callback;
          var n = o()(t, k);
          if (O.a.isInNimoApp) {
            var e = "__subscribePayCallback__";
            return (
              (window[e] = function (n) {
                R("触发回调函数-JS桥", { res: n, params: t });
                try {
                  (n = JSON.parse(n)), !0 === !!t.callback && t.callback(n);
                } catch (e) {
                  R("返回数据解析错误", { error: e, res: n, params: t });
                }
              }),
              "undefined" === typeof n.isEveryMonth && (n.isEveryMonth = !1),
              (n.callbackName = e),
              At(1006, n)
            );
          }
          return !1;
        },
        Gt = function (t) {
          return H(14).then(function (n) {
            return n && V(J("top_up_record", t)), n;
          });
        },
        Vt = function (t) {
          var n = t.reason;
          H(15).then(function (t) {
            t && V(J("gdpr_account_cancel", { reason: n }));
          });
        },
        Jt = function () {
          return At(1008);
        },
        Ht = function () {
          return At(1009);
        },
        Kt = function (t) {
          var n = t.data,
            e = t.type,
            r = t.callback,
            o = t.title,
            i = "JS_BRIDGE_PICKER_MODAL_CALLBACK";
          R("picker model entry invoke"),
            H(16).then(function (t) {
              t &&
                ((window[i] = "function" === typeof r ? r : Nt),
                At(1010, {
                  type: e,
                  data: JSON.stringify(n),
                  callback: i,
                  title: o,
                }));
            });
        },
        Wt = function (t) {
          H(16).then(function (n) {
            n && At(1011, { show: t });
          });
        },
        zt = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          H(18).then(function (n) {
            n && At(1012, { ids: JSON.stringify(t) });
          });
        },
        Yt = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          H(18).then(function (n) {
            n && At(1013, JSON.stringify({ ids: t }));
          });
        },
        qt = function (t) {
          var n = t.callback,
            e = t.productId,
            r = t.productName,
            o = t.productDesc,
            i = t.diamond,
            u = t.money,
            a = t.anchorId,
            c = t.orderType,
            s = "JS_BRIDGE_TOPUP_CALLBACK";
          R("topup jsbridege"),
            H(20).then(function (t) {
              t &&
                ((window[s] =
                  "function" === typeof n
                    ? function (t) {
                        if ((R("topup callback", t), "string" === typeof t))
                          try {
                            t = JSON.parse(t);
                          } catch (e) {
                            R("topup parse error", e);
                          }
                        n(t);
                      }
                    : Nt),
                At(1014, {
                  callbackName: s,
                  productId: e,
                  productName: r,
                  productDesc: o,
                  diamond: i,
                  money: u,
                  anchorId: a,
                  orderType: c,
                }));
            });
        },
        Zt = function (t) {
          var n = t.callback,
            e = t.productType,
            r = t.productId,
            i = t.productName,
            u = t.productDesc,
            a = t.diamond,
            c = t.money,
            s = t.anchorId,
            f = t.orderType,
            l = t.businessId,
            p = t.channelId,
            d = o()(t, N),
            h = "JS_BRIDGE_TOPUP_2_CALLBACK";
          R("topup2 jsbridege"),
            H(21).then(function (t) {
              t &&
                ((window[h] =
                  "function" === typeof n
                    ? function (t) {
                        if ((R("topup2 callback", t), "string" === typeof t))
                          try {
                            t = JSON.parse(t);
                          } catch (e) {
                            R("topup2 parse error", e);
                          }
                        n(t);
                      }
                    : Nt),
                At(
                  1017,
                  C(
                    {
                      callbackName: h,
                      productType: e,
                      productId: r,
                      productName: i,
                      productDesc: u,
                      diamond: a,
                      money: c,
                      anchorId: s,
                      orderType: f,
                      businessId: l,
                      channelId: p,
                    },
                    d
                  )
                ));
            });
        },
        Qt = function (t, n) {
          return H(12).then(function (e) {
            if (e) {
              var r = { id: t };
              n &&
                "[object Object]" === Object.prototype.toString.call(n) &&
                (r.data = JSON.stringify(n)),
                At(1015, r);
            }
            return !1;
          });
        },
        $t = function (t) {
          var n = t.title,
            e = t.startTime,
            r = t.endTime,
            o = t.activityId;
          At(1016, { title: n, startTime: e, endTime: r, activityId: o });
        },
        Xt = function (t) {
          var n = t.callback;
          H(23).then(function (t) {
            if (t) {
              var e = "JS_BRIDGE_BIND_PHONE_CALLBACK";
              (window[e] =
                "function" === typeof n
                  ? function (t) {
                      R("bind phone callback status: ".concat(t)), n(!!+t);
                    }
                  : Nt),
                At(1018, { callbackName: e });
            }
          });
        },
        tn = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (-1 === M()) return !1;
          var n = t.platformId,
            e = t.title,
            r = void 0 === e ? "" : e,
            o = t.image_url,
            i = void 0 === o ? "" : o,
            u = t.content,
            a = t.link,
            c = void 0 === a ? "" : a,
            s = t.platformCallback,
            f = void 0 === s ? "" : s,
            l = t.originId,
            p = void 0 === l ? 0 : l,
            d = t.encodedLink,
            h = void 0 === d ? "" : d,
            v = t.typeid,
            y = t.extrainfo;
          R(
            "调起分享js桥",
            "platformId:"
              .concat(n, " originId:")
              .concat(p, " content:")
              .concat(u, " link:")
              .concat(c)
          ),
            O.a.isAdr
              ? H(24).then(function (e) {
                  e
                    ? At(1019, {
                        platformId: n,
                        title: r,
                        image_url: i,
                        content: u,
                        link: c,
                        platformCallback: f,
                        originId: p,
                        encodedLink: h,
                        typeid: v,
                        extrainfo: y,
                      })
                    : nt(t);
                })
              : nt(t);
        },
        nn = function () {
          return H(25).then(function (t) {
            return t && At(1020), t;
          });
        },
        en = function (t) {
          var n = t.videoUrl,
            e = t.anchorId,
            r = t.roomId;
          return H(26).then(function (t) {
            return (
              t &&
                At(1021, {
                  videoUrl: encodeURIComponent(n),
                  anchorId: e,
                  roomId: r,
                }),
              t
            );
          });
        },
        rn = function (t) {
          return H(27).then(function (n) {
            if (n) {
              var e = "";
              try {
                e = t ? JSON.stringify(t) : "";
              } catch (r) {
                return Promise.reject(r);
              }
              At(1022, { pkgInfo: encodeURIComponent(e) });
            }
            return n;
          });
        },
        on = function () {
          At(1023);
        },
        un = function (t) {
          V(J("streamer_growth_program", { type: t }));
        },
        an = function () {
          var t = "JS_BRIDGE_GET_APPFLY_SHARE_PARAMS";
          return new Promise(function (n, e) {
            (window[t] = function (t) {
              R("JS桥-获取appfly分享参数-回调原始数据 - ", t);
              try {
                var r = JSON.parse(t);
                R("JS桥-获取appfly分享参数-回调触发 - ", r), n(r, n, e);
              } catch (o) {
                R("JS桥-获取appfly分享参数-数据错误 - ", o), e(o, n, e);
              }
            }),
              H(29).then(function (n) {
                n &&
                  V(
                    "nimo://huya.nimo.com/appfly_share_params?callback=".concat(
                      t
                    )
                  );
              });
          });
        },
        cn = function (t) {
          var n = t.productId,
            e = t.amount,
            r = t.productName,
            o = t.isEveryMonth,
            i = void 0 === o ? 1 : o,
            u = t.callback,
            a = "JS_BRIDGE_BLACK_CARD_PAY_CALLBACK";
          return (
            R("black card pay jsbridge"),
            H(28).then(function (t) {
              t &&
                ((window[a] =
                  "function" === typeof u
                    ? function (t) {
                        if (
                          (R("black card pay jsbridge callback", t),
                          "string" === typeof t)
                        )
                          try {
                            t = JSON.parse(t);
                          } catch (n) {
                            throw (R("black card pay parse error", n), n);
                          }
                        u(t);
                      }
                    : Nt),
                At(1024, {
                  callbackName: a,
                  productId: n,
                  amount: e,
                  productName: r,
                  isEveryMonth: i,
                }));
            })
          );
        },
        sn = function () {
          return H(30).then(function (t) {
            t && At(1025);
          });
        },
        fn = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          return H(31).then(function (r) {
            return (
              !!r &&
              (V(
                "nimo://huya.nimo.com/show_personal_page?udbuserid="
                  .concat(t, "&roomid=")
                  .concat(n, "&tabtype=")
                  .concat(e)
              ),
              !0)
            );
          });
        },
        ln = function (t) {
          var n = t.text,
            e = t.visible,
            r = t.duration,
            o = void 0 === r ? 3 : r;
          if (O.a.isInNimoTv) {
            if (O.a.isIOS && (!e || !n)) return;
            At(1026, {
              text: (e ? n : "") || "",
              visible: !(!n || !e),
              duration: e ? o : 0,
            });
          }
        },
        pn = function () {
          At(1027);
        },
        dn = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return O.a.isInNimoTv && O.a.isIOS && !Object(S.a)("1.9.88")
            ? Promise.resolve(!1)
            : At(1028, t, 35);
        },
        hn = (function () {
          var t = u()(
            regeneratorRuntime.mark(function t(n) {
              var e, r, o, i, u, a, c, s, f, l, p, d, h, v;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = n.contentId),
                        (r = n.anchorId),
                        (o = n.favourCount),
                        (i = n.isFavour),
                        (u = n.commentCount),
                        (a = n.videoId),
                        (c = void 0 === a ? "" : a),
                        (s = n.isUseFavourInfo),
                        (f = void 0 === s ? 1 : s),
                        (l = n.isDelete),
                        (p = void 0 === l ? 0 : l),
                        (t.next = 3),
                        $({ isMock: !1 })
                      );
                    case 3:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 6;
                        break;
                      }
                      t.t0 = {};
                    case 6:
                      if (((d = t.t0), (h = d.jsApiVersion), h >= 36)) {
                        t.next = 11;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 11:
                      return (
                        (v =
                          "nimo://huya.nimo.com/update_post_status?contentId="
                            .concat(e, "&anchorId=")
                            .concat(r, "&favourCount=")
                            .concat(o, "&isFavour=")
                            .concat(i, "&commentCount=")
                            .concat(u, "&videoId=")
                            .concat(c, "&isUseFavourInfo=")
                            .concat(f)),
                        h >= 37 && (v += "&isDelete=".concat(p)),
                        V(v),
                        t.abrupt("return", !0)
                      );
                    case 16:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        vn = (function () {
          var t = u()(
            regeneratorRuntime.mark(function t(n) {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), H(40);
                    case 2:
                      if (t.sent) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 5:
                      return (
                        V(
                          "nimo://huya.nimo.com/open_ops_tab?tabName=".concat(n)
                        ),
                        t.abrupt("return", !0)
                      );
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        yn = (function () {
          var t = u()(
            regeneratorRuntime.mark(function t(n, e, r) {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), H(39);
                    case 2:
                      if (t.sent) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 5:
                      return (
                        V(
                          J("post_edit_page", {
                            activityid: n,
                            hashtagName: e,
                            hashtagId: r,
                          })
                        ),
                        t.abrupt("return", !0)
                      );
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (n, e, r) {
            return t.apply(this, arguments);
          };
        })(),
        mn = function () {
          At(1029);
        },
        gn = function () {
          At(1030);
        },
        wn = function (t) {
          return H(42).then(function (n) {
            n && At(1031, t);
          });
        },
        bn = (function () {
          var t = u()(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), H(40);
                    case 2:
                      if (t.sent) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 5:
                      return (
                        V(J("entry_my_audio_room")), t.abrupt("return", !0)
                      );
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        _n = (function () {
          var t = u()(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), H(40);
                    case 2:
                      if (t.sent) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 5:
                      return (
                        V(J("entry_my_audio_room_dashboard")),
                        t.abrupt("return", !0)
                      );
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        In = function () {
          return H(43).then(function (t) {
            t && At(1032);
          });
        },
        On = function (t) {
          return H(44).then(function (n) {
            n && At(1033, t);
          });
        },
        Sn = function (t) {
          var n = t.liveId,
            e = t.callback;
          return H(44).then(function (t) {
            if (t) {
              var r = "JS_BRIDGE_GET_VIDEO_COVER_CALLBACK";
              "function" === typeof e &&
                (window[r] = function (t) {
                  var n = t.cover;
                  R("JS_BRIDGE_GET_VIDEO_COVER_CALLBACK", { cover: n }),
                    e({ cover: n }),
                    delete window[r];
                }),
                At(1034, { liveId: n, callback: r });
            }
          });
        },
        En = function (t) {
          var n = t.liveId,
            e = t.livepath,
            r = void 0 === e ? "" : e;
          return H(44).then(function (t) {
            t && At(1035, { liveId: n, livepath: r });
          });
        },
        An = function (t) {
          var n = t.callback,
            e = t.liveId,
            r = void 0 === e ? "" : e,
            o = t.livepath,
            i = void 0 === o ? "" : o;
          return H(44).then(function (t) {
            if (t) {
              var e = "JS_BRIDGE_UPLOAD_VIDEO_CALLBACK";
              "function" === typeof n &&
                (window[e] = function (t) {
                  var r = t.id,
                    o = t.status;
                  R("JS_BRIDGE_UPLOAD_VIDEO_CALLBACK", { id: r, status: o }),
                    n({ id: r, status: o }),
                    delete window[e];
                }),
                At(1036, { callback: e, liveId: r, livepath: i });
            }
          });
        },
        Tn = function (t) {
          return H(44).then(function (n) {
            if (n) {
              var e = "JS_BRIDGE_GET_VIDEO_CALLBACK";
              "function" === typeof t &&
                (window[e] = function (n) {
                  var r = n.liveId,
                    o = n.cover,
                    i = n.duration,
                    u = n.livepath;
                  R("JS_BRIDGE_GET_VIDEO_CALLBACK", {
                    liveId: r,
                    cover: o,
                    duration: i,
                    livepath: u,
                  }),
                    t({ liveId: r, cover: o, duration: i, livepath: u }),
                    delete window[e];
                }),
                At(1037, { callback: e });
            }
          });
        },
        kn = (function () {
          var t = u()(
            regeneratorRuntime.mark(function t(n, e) {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = O.a.isInNimoApp), !t.t0)) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 4), H(45);
                    case 4:
                      t.t0 = t.sent;
                    case 5:
                      if (!t.t0) {
                        t.next = 7;
                        break;
                      }
                      V(J("follow_hashtag_event", { type: n, hashtagid: e }));
                    case 7:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (n, e) {
            return t.apply(this, arguments);
          };
        })();
    },
    yTNv: function (t, n, e) {
      "use strict";
      var r = e("q4i/"),
        o = e.n(r);
      n.a = function (t) {
        var n,
          e = t || location.href,
          r = e.match(
            /^(?:(\w+):\/{2,3})?(?:(\w+):?(\w+)?@)?([^:/?#]+)(?::(\d+))?(\/[^?#]+)?(?:\?([^#]+))?(?:#(\w+))?/
          ),
          i = r[4];
        n = (n = e.match(/((\?))((?!#).)*/g)) ? n[0] : "";
        var u = r[6] || "",
          a = e.match(/[^?#]*\//)[0],
          c = (e.match(/tps?:\/\/[^/]+(.+)/) || ["", ""])[1],
          s = c.match(/([^?#]*\/)?/)[0];
        return {
          href: e,
          protocol: r[1],
          username: r[2],
          password: r[3],
          host: i,
          port: r[5],
          query: n,
          params: (function () {
            for (
              var t = {},
                e = n.replace(/^\?/, "").split("&"),
                r = e.length,
                i = 0;
              i < r;
              i += 1
            )
              if (e[i]) {
                var u = e[i].split("="),
                  a = o()(u, 2),
                  c = a[0],
                  s = a[1];
                t[c] = s;
              }
            return t;
          })(),
          file: (u.match(/\/([^/?#]+)$/i) || ["", ""])[1],
          hash: r[8] ? r[8].replace("#", "") : "",
          dirname: a,
          path: s,
          pathname: u,
          relative: c,
          segments: s.replace(/^\/|\/$/g, "").split("/"),
          pathArray: u.replace(/^\/|\/$/g, "").split("/"),
        };
      };
    },
    z4vH: function (t, n) {
      (t.exports = function (t, n) {
        var e =
          null == t
            ? null
            : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != e) {
          var r,
            o,
            i = [],
            u = !0,
            a = !1;
          try {
            for (
              e = e.call(t);
              !(u = (r = e.next()).done) &&
              (i.push(r.value), !n || i.length !== n);
              u = !0
            );
          } catch (c) {
            (a = !0), (o = c);
          } finally {
            try {
              u || null == e.return || e.return();
            } finally {
              if (a) throw o;
            }
          }
          return i;
        }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
  },
]);
