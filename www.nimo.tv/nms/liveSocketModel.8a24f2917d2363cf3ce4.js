(window.webpackJsonp = window.webpackJsonp || []).push([
  ["55f32", "3d9a4"],
  {
    "9SJS": function (t, e, i) {
      "use strict";
      i.r(e);
      i("RlNQ");
      var n = i("YQsQ"),
        o = i.n(n),
        r = i("V4gF"),
        s = i.n(r),
        a = i("rIiI"),
        u = i.n(a),
        d = i("58BP"),
        h = i.n(d),
        c = i("Ptek"),
        p = i.n(c),
        f = i("tWqE"),
        l = i.n(f),
        m = i("gy9q"),
        y = i.n(m),
        I = i("7DFi"),
        w = i.n(I),
        v = i("TJEx"),
        R = i.n(v),
        S = i("cQwn"),
        C = i.n(S),
        L = (i("28PD"), i("L7RH")),
        T = i("jqZc");
      function g(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(i), !0).forEach(function (e) {
                C()(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : g(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
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
          var i,
            n = R()(t);
          if (e) {
            var o = R()(this).constructor;
            i = Reflect.construct(n, arguments, o);
          } else i = n.apply(this, arguments);
          return w()(this, i);
        };
      }
      i.d(e, "unpackCommon", function () {
        return L.unpackCommon;
      });
      var b = (function (t) {
        y()(i, t);
        var e = U(i);
        function i(t) {
          var n;
          return (
            u()(this, i),
            (n = e.call(this, t)),
            C()(p()(n), "_ws", null),
            (n.defaults = _({}, t)),
            (n.moduleName = (t && t.moduleName) || L.MODULE_NIMO_UI),
            (n.channel = T.a),
            (n._ws = Object(T.b)()),
            (n._inited = !1),
            n
          );
        }
        return (
          h()(i, [
            {
              key: "init",
              value: function (t) {
                return (
                  (!0 ===
                    (null === t || void 0 === t ? void 0 : t.avoidRepeatSub) &&
                    this.inited) ||
                    ((this.channel.broadcastWithUser = !1),
                    this._updateRuntimeLiveRoom(t),
                    this._subscribeChannelTopic(t),
                    (this.inited = !0)),
                  this
                );
              },
            },
            {
              key: "dispose",
              value: function () {
                var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return (
                  this._unsubscribeChannelTopic(),
                  t || this._clearRuntimeLiveRoom(),
                  (this._inited = !1),
                  this
                );
              },
            },
            {
              key: "on",
              value: function (t, e, n) {
                return (
                  L.logger.log("on", t),
                  l()(R()(i.prototype), "on", this).call(this, t, e, n)
                );
              },
            },
            {
              key: "off",
              value: function (t, e) {
                return (
                  L.logger.log("off", t),
                  l()(R()(i.prototype), "off", this).call(this, t, e)
                );
              },
            },
            {
              key: "onSocketOpen",
              value: function (t) {
                return l()(R()(i.prototype), "on", this).call(this, "open", t);
              },
            },
            {
              key: "offSocketOpen",
              value: function (t) {
                return l()(R()(i.prototype), "off", this).call(this, "open", t);
              },
            },
            {
              key: "waitUntilSocketOpen",
              value: (function () {
                var t = s()(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!this._ws.ready) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return");
                            case 2:
                              return (
                                (t.next = 4),
                                new Promise(function (t) {
                                  L.eventEmitter.on("open", function e() {
                                    L.eventEmitter.off("open", e), t();
                                  });
                                })
                              );
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: "send",
              value: function () {
                var t;
                return (t = this._ws).send.apply(t, arguments);
              },
            },
            {
              key: "invoke",
              value: function (t, e) {
                "function" === typeof t && t(e);
              },
            },
            {
              key: "loginChannel",
              value: function () {
                (this.channel.broadcastWithUser = !0),
                  L.runtime.channel &&
                    (L.runtime.channel.isOpened() ||
                      this.channel.open(this._ws));
              },
            },
            {
              key: "_updateRuntimeLiveRoom",
              value: function (t) {
                var e = t || {},
                  i = e.roomId,
                  n = e.auId;
                if (void 0 === i || void 0 === n)
                  throw new ReferenceError(
                    "roomId is type of "
                      .concat(o()(i), " and auId is type of ")
                      .concat(o()(n), ", invalid.")
                  );
                L.runtime.liveRoom &&
                  !L.runtime.liveRoom.isReady() &&
                  (L.runtime.liveRoom.init(_({}, t)),
                  L.logger.vip("Runtime liveRoom updated", L.runtime.liveRoom));
              },
            },
            {
              key: "_clearRuntimeLiveRoom",
              value: function () {
                L.runtime.liveRoom &&
                  (L.runtime.liveRoom.clear(),
                  L.logger.vip("Runtime liveRoom cleared", L.runtime.liveRoom));
              },
            },
            {
              key: "_subscribeChannelTopic",
              value: function (t) {
                L.runtime.channel &&
                  (L.runtime.channel.isOpened()
                    ? (this.channel.heartbeat(t), this.channel.subTopic(t))
                    : this.channel.open(this._ws));
              },
            },
            {
              key: "setPlatform",
              value: function (t) {
                var e = L.userSocketModel.getUserAgent(t);
                return this.updateRuntimeUser({ sUA: e }), this;
              },
            },
            {
              key: "updateRuntimeUser",
              value: function (t) {
                L.userSocketModel.updateRuntimeUser(t);
              },
            },
            {
              key: "initInNimoApp",
              value: function (t) {
                (L.runtime.user.isUAFromApp && L.runtime.user.isGuidFromApp) ||
                  (this.setPlatform("wap"),
                  this.updateRuntimeUser({ sGuid: "component" })),
                  this.init(t);
              },
            },
            {
              key: "initInComponent",
              value: function (t) {
                this.updateRuntimeUser({ sGuid: "component" }), this.init(t);
              },
            },
            {
              key: "_unsubscribeChannelTopic",
              value: function (t) {
                L.runtime.channel &&
                  L.runtime.channel.isOpened() &&
                  this.channel.unsubTopic(t);
              },
            },
            {
              key: "_getBroadcast",
              value: function (t) {
                var e = this.defaults.broadcasts,
                  i = (void 0 === e ? {} : e)[t];
                if (void 0 === i)
                  throw new TypeError(
                    "the broadcast [".concat(t, "] is not found.")
                  );
                return i;
              },
            },
          ]),
          i
        );
      })(L.SocketModel);
      e.default = b;
    },
    Bvyh: function (t, e, i) {
      "use strict";
      var n = i("ZMLX"),
        o =
          (i("ZxgU"),
          function () {
            (this.videourl = ""),
              (this.Duration = 0),
              (this.vtype = 0),
              (this.iCdn = 0),
              (this.lVid = 0),
              (this.sVideoTypeName = "");
          });
      (o.prototype._clone = function () {
        return new n.a.VideoData();
      }),
        (o.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (o.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (o.prototype.writeTo = function (t) {
          t.writeString(0, this.videourl),
            t.writeInt32(1, this.Duration),
            t.writeInt32(2, this.vtype),
            t.writeInt32(3, this.iCdn),
            t.writeInt64(4, this.lVid),
            t.writeString(5, this.sVideoTypeName);
        }),
        (o.prototype.readFrom = function (t) {
          (this.videourl = t.readString(0, !1, this.videourl)),
            (this.Duration = t.readInt32(1, !1, this.Duration)),
            (this.vtype = t.readInt32(2, !1, this.vtype)),
            (this.iCdn = t.readInt32(3, !1, this.iCdn)),
            (this.lVid = t.readInt64(4, !1, this.lVid)),
            (this.sVideoTypeName = t.readString(5, !1, this.sVideoTypeName));
        }),
        (n.a.VideoData = o);
    },
    OI0W: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, "WS_StreamStop", function () {
          return y;
        }),
        i.d(e, "WS_StreamNew", function () {
          return w;
        }),
        i.d(e, "WS_RoomAttendeeChange", function () {
          return R;
        }),
        i.d(e, "NoticeVideoList", function () {
          return C;
        }),
        i.d(e, "AnchorPanelInfo", function () {
          return T;
        }),
        i.d(e, "EUriRoomAttendeeChange", function () {
          return B;
        }),
        i.d(e, "EUriRoomAttendeeChangeForUid", function () {
          return E;
        }),
        i.d(e, "EUriVideoPlayBlackNotify2", function () {
          return P;
        }),
        i.d(e, "EUriAnchorPanelInfo", function () {
          return O;
        }),
        i.d(e, "LiveBeginNotice", function () {
          return V;
        }),
        i.d(e, "EUriLiveEndNotice", function () {
          return H;
        });
      i("RlNQ");
      var n = i("rIiI"),
        o = i.n(n),
        r = i("58BP"),
        s = i.n(r),
        a = i("gy9q"),
        u = i.n(a),
        d = i("7DFi"),
        h = i.n(d),
        c = i("TJEx"),
        p = i.n(c),
        f = i("ZMLX"),
        l = i("ZxgU"),
        m = function () {
          this.lRoomId = 0;
        };
      (m.prototype._clone = function () {
        return new f.a.WS_StreamStop();
      }),
        (m.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (m.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (m.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomId);
        }),
        (m.prototype.readFrom = function (t) {
          this.lRoomId = t.readInt64(0, !1, this.lRoomId);
        }),
        (f.a.WS_StreamStop = m);
      var y = m,
        I =
          (i("qiiG"),
          function () {
            (this.lRoomId = 0), (this.roomLine = new f.a.RoomLineInfo());
          });
      (I.prototype._clone = function () {
        return new f.a.WS_StreamNew();
      }),
        (I.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (I.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (I.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomId), t.writeStruct(1, this.roomLine);
        }),
        (I.prototype.readFrom = function (t) {
          (this.lRoomId = t.readInt64(0, !1, this.lRoomId)),
            (this.roomLine = t.readStruct(1, !1, this.roomLine));
        }),
        (f.a.WS_StreamNew = I);
      var w = I,
        v = function () {
          (this.lRoomId = 0),
            (this.iAttendee = 0),
            (this.bIfAttendeeChange = !0),
            (this.iFans = 0),
            (this.bIfFansChange = !0);
        };
      (v.prototype._clone = function () {
        return new f.a.WS_RoomAttendeeChange();
      }),
        (v.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (v.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (v.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomId),
            t.writeInt32(1, this.iAttendee),
            t.writeBoolean(2, this.bIfAttendeeChange),
            t.writeInt32(3, this.iFans),
            t.writeBoolean(4, this.bIfFansChange);
        }),
        (v.prototype.readFrom = function (t) {
          (this.lRoomId = t.readInt64(0, !1, this.lRoomId)),
            (this.iAttendee = t.readInt32(1, !1, this.iAttendee)),
            (this.bIfAttendeeChange = t.readBoolean(
              2,
              !1,
              this.bIfAttendeeChange
            )),
            (this.iFans = t.readInt32(3, !1, this.iFans)),
            (this.bIfFansChange = t.readBoolean(4, !1, this.bIfFansChange));
        }),
        (f.a.WS_RoomAttendeeChange = v);
      var R = v,
        S =
          (i("Bvyh"),
          function () {
            (this.lRoomId = 0),
              (this.iVedoNums = 0),
              (this.vVedioList = new l.b.Vector(new f.a.VideoData())),
              (this.iRecommendCode = 0),
              (this.sBizVideoID = ""),
              (this.iPassReview = 1);
          });
      (S.prototype._clone = function () {
        return new f.a.NoticeVideoList();
      }),
        (S.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (S.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (S.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomId),
            t.writeInt32(1, this.iVedoNums),
            t.writeVector(2, this.vVedioList),
            t.writeInt32(3, this.iRecommendCode),
            t.writeString(4, this.sBizVideoID),
            t.writeInt32(5, this.iPassReview);
        }),
        (S.prototype.readFrom = function (t) {
          (this.lRoomId = t.readInt64(0, !1, this.lRoomId)),
            (this.iVedoNums = t.readInt32(1, !1, this.iVedoNums)),
            (this.vVedioList = t.readVector(2, !1, this.vVedioList)),
            (this.iRecommendCode = t.readInt32(3, !1, this.iRecommendCode)),
            (this.sBizVideoID = t.readString(4, !1, this.sBizVideoID)),
            (this.iPassReview = t.readInt32(5, !1, this.iPassReview));
        }),
        (f.a.NoticeVideoList = S);
      var C = S,
        L = function () {
          (this.lRoomId = 0),
            (this.lUid = 0),
            (this.iAttendee = 0),
            (this.iGemsAdd = 0),
            (this.iSubsAdd = 0),
            (this.iFansAdd = 0),
            (this.iLiveTime = 0),
            (this.iStreamState = 0),
            (this.iVipsAdd = 0);
        };
      (L.prototype._clone = function () {
        return new f.a.AnchorPanelInfo();
      }),
        (L.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (L.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (L.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomId),
            t.writeInt64(1, this.lUid),
            t.writeInt32(2, this.iAttendee),
            t.writeInt32(3, this.iGemsAdd),
            t.writeInt32(4, this.iSubsAdd),
            t.writeInt32(5, this.iFansAdd),
            t.writeInt32(6, this.iLiveTime),
            t.writeInt32(7, this.iStreamState),
            t.writeInt32(8, this.iVipsAdd);
        }),
        (L.prototype.readFrom = function (t) {
          (this.lRoomId = t.readInt64(0, !1, this.lRoomId)),
            (this.lUid = t.readInt64(1, !1, this.lUid)),
            (this.iAttendee = t.readInt32(2, !1, this.iAttendee)),
            (this.iGemsAdd = t.readInt32(3, !1, this.iGemsAdd)),
            (this.iSubsAdd = t.readInt32(4, !1, this.iSubsAdd)),
            (this.iFansAdd = t.readInt32(5, !1, this.iFansAdd)),
            (this.iLiveTime = t.readInt32(6, !1, this.iLiveTime)),
            (this.iStreamState = t.readInt32(7, !1, this.iStreamState)),
            (this.iVipsAdd = t.readInt32(8, !1, this.iVipsAdd));
        }),
        (f.a.AnchorPanelInfo = L);
      var T = L,
        g = function () {
          (this.lRoomId = 0),
            (this.lUid = 0),
            (this.lLiveId = 0),
            (this.iLiveType = 0),
            (this.lEntranceFee = 0);
        };
      (g.prototype._clone = function () {
        return new f.a.LiveInfo();
      }),
        (g.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (g.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (g.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomId),
            t.writeInt64(1, this.lUid),
            t.writeInt64(2, this.lLiveId),
            t.writeInt32(3, this.iLiveType),
            t.writeInt64(4, this.lEntranceFee);
        }),
        (g.prototype.readFrom = function (t) {
          (this.lRoomId = t.readInt64(0, !1, this.lRoomId)),
            (this.lUid = t.readInt64(1, !1, this.lUid)),
            (this.lLiveId = t.readInt64(2, !1, this.lLiveId)),
            (this.iLiveType = t.readInt32(3, !1, this.iLiveType)),
            (this.lEntranceFee = t.readInt64(4, !1, this.lEntranceFee));
        }),
        (f.a.LiveInfo = g);
      var _ = function () {
        (this.tLiveInfo = new f.a.LiveInfo()), (this.iType = 0);
      };
      (_.prototype._clone = function () {
        return new f.a.LiveEndNotice();
      }),
        (_.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (_.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (_.prototype.writeTo = function (t) {
          t.writeStruct(0, this.tLiveInfo), t.writeInt32(1, this.iType);
        }),
        (_.prototype.readFrom = function (t) {
          (this.tLiveInfo = t.readStruct(0, !1, this.tLiveInfo)),
            (this.iType = t.readInt32(1, !1, this.iType));
        }),
        (f.a.LiveEndNotice = _);
      var U = _,
        b = function () {
          (this.lRoomType = 0),
            (this.mRoomTypeNameLang = new l.b.Map(
              new l.b.STRING(),
              new l.b.STRING()
            )),
            (this.sRoomTheme = ""),
            (this.iLcid = 0),
            (this.iTemplateType = 0),
            (this.iBusinessType = 0),
            (this.iRoomSort = 0);
        };
      (b.prototype._clone = function () {
        return new f.a.LiveSetting();
      }),
        (b.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (b.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (b.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomType),
            t.writeMap(1, this.mRoomTypeNameLang),
            t.writeString(2, this.sRoomTheme),
            t.writeInt32(3, this.iLcid),
            t.writeInt32(4, this.iTemplateType),
            t.writeInt32(5, this.iBusinessType),
            t.writeInt32(6, this.iRoomSort);
        }),
        (b.prototype.readFrom = function (t) {
          (this.lRoomType = t.readInt64(0, !1, this.lRoomType)),
            (this.mRoomTypeNameLang = t.readMap(1, !1, this.mRoomTypeNameLang)),
            (this.sRoomTheme = t.readString(2, !1, this.sRoomTheme)),
            (this.iLcid = t.readInt32(3, !1, this.iLcid)),
            (this.iTemplateType = t.readInt32(4, !1, this.iTemplateType)),
            (this.iBusinessType = t.readInt32(5, !1, this.iBusinessType)),
            (this.iRoomSort = t.readInt32(6, !1, this.iRoomSort));
        }),
        (f.a.LiveSetting = b);
      var N = function () {
        (this.tLiveInfo = new f.a.LiveInfo()),
          (this.tLiveSet = new f.a.LiveSetting());
      };
      (N.prototype._clone = function () {
        return new f.a.LiveBeginNotice();
      }),
        (N.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (N.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (N.prototype.writeTo = function (t) {
          t.writeStruct(0, this.tLiveInfo), t.writeStruct(1, this.tLiveSet);
        }),
        (N.prototype.readFrom = function (t) {
          (this.tLiveInfo = t.readStruct(0, !1, this.tLiveInfo)),
            (this.tLiveSet = t.readStruct(1, !1, this.tLiveSet));
        }),
        (f.a.LiveBeginNotice = N);
      var V = N,
        A = i("4TRz"),
        F = i("9SJS");
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
          var i,
            n = p()(t);
          if (e) {
            var o = p()(this).constructor;
            i = Reflect.construct(n, arguments, o);
          } else i = n.apply(this, arguments);
          return h()(this, i);
        };
      }
      var B = A.a.EUriRoomAttendeeChange,
        E = A.a.EUriRoomAttendeeChangeForUid,
        P = A.a.EUriVideoPlayBlackNotify2,
        O = A.a.EUriAnchorPanelInfo,
        H = A.a.EUriLiveEndNotice,
        D = A.a.EUriLiveBeginNotice,
        W = (function (t) {
          u()(i, t);
          var e = k(i);
          function i() {
            return o()(this, i), e.apply(this, arguments);
          }
          return (
            s()(i, [
              {
                key: "onNoticeVideoList",
                value: function (t) {
                  return this.on(P, C, t);
                },
              },
              {
                key: "offNoticeVideoList",
                value: function (t) {
                  return this.off(P, t);
                },
              },
              {
                key: "onRoomAttendeeChange",
                value: function (t) {
                  return this.on(B, R, t);
                },
              },
              {
                key: "offRoomAttendeeChange",
                value: function (t) {
                  return this.off(B, t);
                },
              },
              {
                key: "onRoomAttendeeChangeForUid",
                value: function (t) {
                  return this.on(E, R, t);
                },
              },
              {
                key: "offRoomAttendeeChangeForUid",
                value: function (t) {
                  return this.off(E, t);
                },
              },
              {
                key: "onAnchorPanelInfo",
                value: function (t) {
                  return this.on(O, T, t);
                },
              },
              {
                key: "offAnchorPanelInfo",
                value: function (t) {
                  return this.off(O, t);
                },
              },
              {
                key: "onLiveBeginNotice",
                value: function (t) {
                  return this.on(D, V, t);
                },
              },
              {
                key: "offLiveBeginNotice",
                value: function (t) {
                  return this.off(D, t);
                },
              },
              {
                key: "onLiveEndNotice",
                value: function (t) {
                  return this.on(H, U, t);
                },
              },
              {
                key: "offLiveEndNotice",
                value: function (t) {
                  return this.off(H, t);
                },
              },
            ]),
            i
          );
        })(F.default);
      e.default = new W();
    },
    qiiG: function (t, e, i) {
      "use strict";
      var n = i("ZMLX"),
        o = i("ZxgU"),
        r = function () {
          (this.iCdnType = 0),
            (this.iBitRate = 0),
            (this.sFlvUrl = ""),
            (this.sHlsUrl = ""),
            (this.sRtmpUrl = ""),
            (this.iNameCode = 0);
        };
      (r.prototype._clone = function () {
        return new n.a.CdnLineInfo();
      }),
        (r.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (r.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (r.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCdnType),
            t.writeInt32(1, this.iBitRate),
            t.writeString(2, this.sFlvUrl),
            t.writeString(3, this.sHlsUrl),
            t.writeString(4, this.sRtmpUrl),
            t.writeInt32(5, this.iNameCode);
        }),
        (r.prototype.readFrom = function (t) {
          (this.iCdnType = t.readInt32(0, !1, this.iCdnType)),
            (this.iBitRate = t.readInt32(1, !1, this.iBitRate)),
            (this.sFlvUrl = t.readString(2, !1, this.sFlvUrl)),
            (this.sHlsUrl = t.readString(3, !1, this.sHlsUrl)),
            (this.sRtmpUrl = t.readString(4, !1, this.sRtmpUrl)),
            (this.iNameCode = t.readInt32(5, !1, this.iNameCode));
        }),
        (n.a.CdnLineInfo = r);
      var s = function () {
        (this.iCdnType = 0),
          (this.sFlvUrl = ""),
          (this.sHlsUrl = ""),
          (this.sRtmpUrl = ""),
          (this.iCdnTypeHY = 0);
      };
      (s.prototype._clone = function () {
        return new n.a.CodeLineInfo();
      }),
        (s.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (s.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (s.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCdnType),
            t.writeString(1, this.sFlvUrl),
            t.writeString(2, this.sHlsUrl),
            t.writeString(3, this.sRtmpUrl),
            t.writeInt32(4, this.iCdnTypeHY);
        }),
        (s.prototype.readFrom = function (t) {
          (this.iCdnType = t.readInt32(0, !1, this.iCdnType)),
            (this.sFlvUrl = t.readString(1, !1, this.sFlvUrl)),
            (this.sHlsUrl = t.readString(2, !1, this.sHlsUrl)),
            (this.sRtmpUrl = t.readString(3, !1, this.sRtmpUrl)),
            (this.iCdnTypeHY = t.readInt32(4, !1, this.iCdnTypeHY));
        }),
        (n.a.CodeLineInfo = s);
      var a = function () {
        (this.iNameCode = 0),
          (this.iBitRate = 0),
          (this.vCdns = new o.b.Vector(new n.a.CodeLineInfo()));
      };
      (a.prototype._clone = function () {
        return new n.a.CodeLine();
      }),
        (a.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (a.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (a.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iNameCode),
            t.writeInt32(1, this.iBitRate),
            t.writeVector(2, this.vCdns);
        }),
        (a.prototype.readFrom = function (t) {
          (this.iNameCode = t.readInt32(0, !1, this.iNameCode)),
            (this.iBitRate = t.readInt32(1, !1, this.iBitRate)),
            (this.vCdns = t.readVector(2, !1, this.vCdns));
        }),
        (n.a.CodeLine = a);
      var u = function () {
        (this.imediaType = 0), (this.smediaUrl = "");
      };
      (u.prototype._clone = function () {
        return new n.a.CdnUrlInfo();
      }),
        (u.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (u.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (u.prototype.writeTo = function (t) {
          t.writeInt32(0, this.imediaType), t.writeString(1, this.smediaUrl);
        }),
        (u.prototype.readFrom = function (t) {
          (this.imediaType = t.readInt32(0, !1, this.imediaType)),
            (this.smediaUrl = t.readString(1, !1, this.smediaUrl));
        }),
        (n.a.CdnUrlInfo = u);
      var d = function () {
        (this.iCdnType = 0),
          (this.vCdnUrls = new o.b.Vector(new n.a.CdnUrlInfo())),
          (this.iCdnTypeHY = 0);
      };
      (d.prototype._clone = function () {
        return new n.a.CodeLineInfo2();
      }),
        (d.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (d.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (d.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iCdnType),
            t.writeVector(1, this.vCdnUrls),
            t.writeInt32(2, this.iCdnTypeHY);
        }),
        (d.prototype.readFrom = function (t) {
          (this.iCdnType = t.readInt32(0, !1, this.iCdnType)),
            (this.vCdnUrls = t.readVector(1, !1, this.vCdnUrls)),
            (this.iCdnTypeHY = t.readInt32(2, !1, this.iCdnTypeHY));
        }),
        (n.a.CodeLineInfo2 = d);
      var h = function () {
        (this.iNameCode = 0),
          (this.iBitRate = 0),
          (this.vCdns = new o.b.Vector(new n.a.CodeLineInfo2()));
      };
      (h.prototype._clone = function () {
        return new n.a.CodeLine2();
      }),
        (h.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (h.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (h.prototype.writeTo = function (t) {
          t.writeInt32(0, this.iNameCode),
            t.writeInt32(1, this.iBitRate),
            t.writeVector(2, this.vCdns);
        }),
        (h.prototype.readFrom = function (t) {
          (this.iNameCode = t.readInt32(0, !1, this.iNameCode)),
            (this.iBitRate = t.readInt32(1, !1, this.iBitRate)),
            (this.vCdns = t.readVector(2, !1, this.vCdns));
        }),
        (n.a.CodeLine2 = h);
      var c = function () {
        (this.lRoomId = 0),
          (this.mLineInfo = new o.b.Map(
            new o.b.INT32(),
            new o.b.Vector(new n.a.CdnLineInfo())
          )),
          (this.iRecommendCode = 0),
          (this.vCodeLines = new o.b.Vector(new n.a.CodeLine())),
          (this.vCodeLines2 = new o.b.Vector(new n.a.CodeLine2())),
          (this.bIfLiveInter = !0),
          (this.iBusinessType = 0),
          (this.iWidth = 0),
          (this.iHeight = 0),
          (this.lUid = 0),
          (this.iTemplateType = 0);
      };
      (c.prototype._clone = function () {
        return new n.a.RoomLineInfo();
      }),
        (c.prototype._write = function (t, e, i) {
          t.writeStruct(e, i);
        }),
        (c.prototype._read = function (t, e, i) {
          return t.readStruct(e, !0, i);
        }),
        (c.prototype.writeTo = function (t) {
          t.writeInt64(0, this.lRoomId),
            t.writeMap(1, this.mLineInfo),
            t.writeInt32(2, this.iRecommendCode),
            t.writeVector(3, this.vCodeLines),
            t.writeVector(4, this.vCodeLines2),
            t.writeBoolean(5, this.bIfLiveInter),
            t.writeInt32(6, this.iBusinessType),
            t.writeInt32(7, this.iWidth),
            t.writeInt32(8, this.iHeight),
            t.writeInt64(9, this.lUid),
            t.writeInt32(10, this.iTemplateType);
        }),
        (c.prototype.readFrom = function (t) {
          (this.lRoomId = t.readInt64(0, !1, this.lRoomId)),
            (this.mLineInfo = t.readMap(1, !1, this.mLineInfo)),
            (this.iRecommendCode = t.readInt32(2, !1, this.iRecommendCode)),
            (this.vCodeLines = t.readVector(3, !1, this.vCodeLines)),
            (this.vCodeLines2 = t.readVector(4, !1, this.vCodeLines2)),
            (this.bIfLiveInter = t.readBoolean(5, !1, this.bIfLiveInter)),
            (this.iBusinessType = t.readInt32(6, !1, this.iBusinessType)),
            (this.iWidth = t.readInt32(7, !1, this.iWidth)),
            (this.iHeight = t.readInt32(8, !1, this.iHeight)),
            (this.lUid = t.readInt64(9, !1, this.lUid)),
            (this.iTemplateType = t.readInt32(10, !1, this.iTemplateType));
        }),
        (n.a.RoomLineInfo = c);
    },
  },
]);
