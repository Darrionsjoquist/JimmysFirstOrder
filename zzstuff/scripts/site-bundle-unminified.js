!(function (e) {
  function t(o) {
      if (n[o]) return n[o].exports;
      var r = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ""), t(0);
})([
  function (e, t, n) {
      e.exports = n(1);
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      n(2);
      var r = n(35),
          i = o(r),
          a = n(89),
          s = n(95),
          u = o(s),
          c = n(114),
          l = o(c),
          f = n(117),
          d = o(f),
          p = n(167),
          h = o(p),
          v = n(168),
          y = o(v),
          m = n(186),
          A = o(m),
          g = n(188),
          w = o(g),
          b = n(191),
          _ = o(b),
          E = n(192),
          k = o(E),
          x = n(195),
          L = o(x),
          S = n(197),
          T = o(S),
          M = n(198),
          O = o(M),
          P = n(199),
          j = o(P),
          I = n(221),
          C = o(I),
          R = n(222),
          N = o(R),
          F = n(223),
          V = o(F),
          B = n(224),
          D = o(B),
          U = n(225),
          z = o(U),
          H = n(226),
          q = o(H),
          W = n(227),
          G = o(W);
      i.default.register("FolderToggle", l.default),
          i.default.register("GalleryLayout", d.default),
          i.default.register("GalleryVideoHandler", h.default),
          i.default.register("HeaderOverflow", y.default),
          i.default.register("HeaderScroll", A.default),
          i.default.register("IndexGallery", w.default),
          i.default.register("IndexNavOverflow", _.default),
          i.default.register("IndexNavScroll", k.default),
          i.default.register("IndexSetup", L.default),
          i.default.register("IndexPositioning", T.default),
          i.default.register("MainContentPositioning", O.default),
          i.default.register("MercuryLoader", j.default),
          i.default.register("NavToggle", C.default),
          i.default.register("OverlayNavOverflow", N.default),
          i.default.register("PageBanners", V.default),
          i.default.register("SetActiveNavLink", D.default),
          i.default.register("SocialIconFadein", z.default),
          i.default.register("TitleCardHandler", q.default),
          i.default.register("UserAccountsSetup", G.default),
          i.default.register("VideoBackground", function (e) {
              return (0, u.default)(e, function (e) {
                  var t = e.handleTweak;
                  a.Tweak.watch(["tweak-page-banner-image-height", "tweak-show-page-banner-image"], t);
              });
          });
  },
  function (e, t, n) {
      n(3), (e.exports = n(6).Array.find);
  },
  function (e, t, n) {
      "use strict";
      var o = n(4),
          r = n(22)(5),
          i = "find",
          a = !0;
      i in [] &&
          Array(1)[i](function () {
              a = !1;
          }),
          o(o.P + o.F * a, "Array", {
              find: function (e) {
                  return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
          }),
          n(34)(i);
  },
  function (e, t, n) {
      var o = n(5),
          r = n(6),
          i = n(7),
          a = n(17),
          s = n(20),
          u = "prototype",
          c = function (e, t, n) {
              var l,
                  f,
                  d,
                  p,
                  h = e & c.F,
                  v = e & c.G,
                  y = e & c.S,
                  m = e & c.P,
                  A = e & c.B,
                  g = v ? o : y ? o[t] || (o[t] = {}) : (o[t] || {})[u],
                  w = v ? r : r[t] || (r[t] = {}),
                  b = w[u] || (w[u] = {});
              v && (n = t);
              for (l in n)
                  (f = !h && g && void 0 !== g[l]), (d = (f ? g : n)[l]), (p = A && f ? s(d, o) : m && "function" == typeof d ? s(Function.call, d) : d), g && a(g, l, d, e & c.U), w[l] != d && i(w, l, p), m && b[l] != d && (b[l] = d);
          };
      (o.core = r), (c.F = 1), (c.G = 2), (c.S = 4), (c.P = 8), (c.B = 16), (c.W = 32), (c.U = 64), (c.R = 128), (e.exports = c);
  },
  function (e, t) {
      var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
      "number" == typeof __g && (__g = n);
  },
  function (e, t) {
      var n = (e.exports = { version: "2.4.0" });
      "number" == typeof __e && (__e = n);
  },
  function (e, t, n) {
      var o = n(8),
          r = n(16);
      e.exports = n(12)
          ? function (e, t, n) {
                return o.f(e, t, r(1, n));
            }
          : function (e, t, n) {
                return (e[t] = n), e;
            };
  },
  function (e, t, n) {
      var o = n(9),
          r = n(11),
          i = n(15),
          a = Object.defineProperty;
      t.f = n(12)
          ? Object.defineProperty
          : function (e, t, n) {
                if ((o(e), (t = i(t, !0)), o(n), r))
                    try {
                        return a(e, t, n);
                    } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e;
            };
  },
  function (e, t, n) {
      var o = n(10);
      e.exports = function (e) {
          if (!o(e)) throw TypeError(e + " is not an object!");
          return e;
      };
  },
  function (e, t) {
      e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
      };
  },
  function (e, t, n) {
      e.exports =
          !n(12) &&
          !n(13)(function () {
              return (
                  7 !=
                  Object.defineProperty(n(14)("div"), "a", {
                      get: function () {
                          return 7;
                      },
                  }).a
              );
          });
  },
  function (e, t, n) {
      e.exports = !n(13)(function () {
          return (
              7 !=
              Object.defineProperty({}, "a", {
                  get: function () {
                      return 7;
                  },
              }).a
          );
      });
  },
  function (e, t) {
      e.exports = function (e) {
          try {
              return !!e();
          } catch (e) {
              return !0;
          }
      };
  },
  function (e, t, n) {
      var o = n(10),
          r = n(5).document,
          i = o(r) && o(r.createElement);
      e.exports = function (e) {
          return i ? r.createElement(e) : {};
      };
  },
  function (e, t, n) {
      var o = n(10);
      e.exports = function (e, t) {
          if (!o(e)) return e;
          var n, r;
          if (t && "function" == typeof (n = e.toString) && !o((r = n.call(e)))) return r;
          if ("function" == typeof (n = e.valueOf) && !o((r = n.call(e)))) return r;
          if (!t && "function" == typeof (n = e.toString) && !o((r = n.call(e)))) return r;
          throw TypeError("Can't convert object to primitive value");
      };
  },
  function (e, t) {
      e.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
      };
  },
  function (e, t, n) {
      var o = n(5),
          r = n(7),
          i = n(18),
          a = n(19)("src"),
          s = "toString",
          u = Function[s],
          c = ("" + u).split(s);
      (n(6).inspectSource = function (e) {
          return u.call(e);
      }),
          (e.exports = function (e, t, n, s) {
              var u = "function" == typeof n;
              u && (i(n, "name") || r(n, "name", t)), e[t] !== n && (u && (i(n, a) || r(n, a, e[t] ? "" + e[t] : c.join(String(t)))), e === o ? (e[t] = n) : s ? (e[t] ? (e[t] = n) : r(e, t, n)) : (delete e[t], r(e, t, n)));
          })(Function.prototype, s, function () {
              return ("function" == typeof this && this[a]) || u.call(this);
          });
  },
  function (e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function (e, t) {
          return n.call(e, t);
      };
  },
  function (e, t) {
      var n = 0,
          o = Math.random();
      e.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36));
      };
  },
  function (e, t, n) {
      var o = n(21);
      e.exports = function (e, t, n) {
          if ((o(e), void 0 === t)) return e;
          switch (n) {
              case 1:
                  return function (n) {
                      return e.call(t, n);
                  };
              case 2:
                  return function (n, o) {
                      return e.call(t, n, o);
                  };
              case 3:
                  return function (n, o, r) {
                      return e.call(t, n, o, r);
                  };
          }
          return function () {
              return e.apply(t, arguments);
          };
      };
  },
  function (e, t) {
      e.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
      };
  },
  function (e, t, n) {
      var o = n(20),
          r = n(23),
          i = n(25),
          a = n(27),
          s = n(29);
      e.exports = function (e, t) {
          var n = 1 == e,
              u = 2 == e,
              c = 3 == e,
              l = 4 == e,
              f = 6 == e,
              d = 5 == e || f,
              p = t || s;
          return function (t, s, h) {
              for (var v, y, m = i(t), A = r(m), g = o(s, h, 3), w = a(A.length), b = 0, _ = n ? p(t, w) : u ? p(t, 0) : void 0; w > b; b++)
                  if ((d || b in A) && ((v = A[b]), (y = g(v, b, m)), e))
                      if (n) _[b] = y;
                      else if (y)
                          switch (e) {
                              case 3:
                                  return !0;
                              case 5:
                                  return v;
                              case 6:
                                  return b;
                              case 2:
                                  _.push(v);
                          }
                      else if (l) return !1;
              return f ? -1 : c || l ? l : _;
          };
      };
  },
  function (e, t, n) {
      var o = n(24);
      e.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
                return "String" == o(e) ? e.split("") : Object(e);
            };
  },
  function (e, t) {
      var n = {}.toString;
      e.exports = function (e) {
          return n.call(e).slice(8, -1);
      };
  },
  function (e, t, n) {
      var o = n(26);
      e.exports = function (e) {
          return Object(o(e));
      };
  },
  function (e, t) {
      e.exports = function (e) {
          if (void 0 == e) throw TypeError("Can't call method on  " + e);
          return e;
      };
  },
  function (e, t, n) {
      var o = n(28),
          r = Math.min;
      e.exports = function (e) {
          return e > 0 ? r(o(e), 9007199254740991) : 0;
      };
  },
  function (e, t) {
      var n = Math.ceil,
          o = Math.floor;
      e.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? o : n)(e);
      };
  },
  function (e, t, n) {
      var o = n(30);
      e.exports = function (e, t) {
          return new (o(e))(t);
      };
  },
  function (e, t, n) {
      var o = n(10),
          r = n(31),
          i = n(32)("species");
      e.exports = function (e) {
          var t;
          return r(e) && ((t = e.constructor), "function" != typeof t || (t !== Array && !r(t.prototype)) || (t = void 0), o(t) && ((t = t[i]), null === t && (t = void 0))), void 0 === t ? Array : t;
      };
  },
  function (e, t, n) {
      var o = n(24);
      e.exports =
          Array.isArray ||
          function (e) {
              return "Array" == o(e);
          };
  },
  function (e, t, n) {
      var o = n(33)("wks"),
          r = n(19),
          i = n(5).Symbol,
          a = "function" == typeof i,
          s = (e.exports = function (e) {
              return o[e] || (o[e] = (a && i[e]) || (a ? i : r)("Symbol." + e));
          });
      s.store = o;
  },
  function (e, t, n) {
      var o = n(5),
          r = "__core-js_shared__",
          i = o[r] || (o[r] = {});
      e.exports = function (e) {
          return i[e] || (i[e] = {});
      };
  },
  function (e, t, n) {
      var o = n(32)("unscopables"),
          r = Array.prototype;
      void 0 == r[o] && n(7)(r, o, {}),
          (e.exports = function (e) {
              r[o][e] = !0;
          });
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          return e.fn && e.element ? e.fn(e.element) : null;
      }
      function i(e, t) {
          return !!(e.element && t.element && e.fn && t.fn) && e.element === t.element && e.fn === t.fn;
      }
      function a(e, t) {
          l[e] = t;
      }
      function s() {
          var e = (0, c.default)(document.querySelectorAll("[data-controller]")),
              t = [];
          e.forEach(function (e) {
              var n = e.getAttribute("data-controller").split(",");
              n.forEach(function (n) {
                  n = n.trim();
                  var o = l[n];
                  o && t.push({ namespace: n, element: e, fn: o });
              });
          }),
              (f = f.filter(function (e) {
                  var n = t.some(function (t) {
                      return i(e, t);
                  });
                  return (
                      n
                          ? (e.methods && e.methods.sync && e.methods.sync.apply(e.element, null),
                            (t = t.filter(function (t) {
                                return !i(e, t);
                            })))
                          : e.methods && e.methods.destroy && e.methods.destroy.apply(e.element, null),
                      n
                  );
              })),
              t.forEach(function (e) {
                  (e.methods = r(e)), f.push(e);
                  var t = [];
                  if (e.element.hasAttribute("data-controllers-bound")) {
                      var n = e.element.getAttribute("data-controllers-bound").split(", ");
                      t = t.concat(n);
                  }
                  t.push(e.namespace), e.element.setAttribute("data-controllers-bound", t.join(", "));
              });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = n(36),
          c = o(u),
          l = {},
          f = [];
      document.addEventListener("DOMContentLoaded", s), (t.default = { refresh: s, register: a }), (e.exports = t.default);
  },
  function (e, t, n) {
      e.exports = { default: n(37), __esModule: !0 };
  },
  function (e, t, n) {
      n(38), n(82), (e.exports = n(46).Array.from);
  },
  function (e, t, n) {
      "use strict";
      var o = n(39)(!0);
      n(42)(
          String,
          "String",
          function (e) {
              (this._t = String(e)), (this._i = 0);
          },
          function () {
              var e,
                  t = this._t,
                  n = this._i;
              return n >= t.length ? { value: void 0, done: !0 } : ((e = o(t, n)), (this._i += e.length), { value: e, done: !1 });
          }
      );
  },
  function (e, t, n) {
      var o = n(40),
          r = n(41);
      e.exports = function (e) {
          return function (t, n) {
              var i,
                  a,
                  s = String(r(t)),
                  u = o(n),
                  c = s.length;
              return u < 0 || u >= c
                  ? e
                      ? ""
                      : void 0
                  : ((i = s.charCodeAt(u)), i < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? (e ? s.charAt(u) : i) : e ? s.slice(u, u + 2) : ((i - 55296) << 10) + (a - 56320) + 65536);
          };
      };
  },
  function (e, t) {
      var n = Math.ceil,
          o = Math.floor;
      e.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? o : n)(e);
      };
  },
  function (e, t) {
      e.exports = function (e) {
          if (void 0 == e) throw TypeError("Can't call method on  " + e);
          return e;
      };
  },
  function (e, t, n) {
      "use strict";
      var o = n(43),
          r = n(44),
          i = n(59),
          a = n(49),
          s = n(60),
          u = n(61),
          c = n(62),
          l = n(78),
          f = n(80),
          d = n(79)("iterator"),
          p = !([].keys && "next" in [].keys()),
          h = "@@iterator",
          v = "keys",
          y = "values",
          m = function () {
              return this;
          };
      e.exports = function (e, t, n, A, g, w, b) {
          c(n, t, A);
          var _,
              E,
              k,
              x = function (e) {
                  if (!p && e in M) return M[e];
                  switch (e) {
                      case v:
                          return function () {
                              return new n(this, e);
                          };
                      case y:
                          return function () {
                              return new n(this, e);
                          };
                  }
                  return function () {
                      return new n(this, e);
                  };
              },
              L = t + " Iterator",
              S = g == y,
              T = !1,
              M = e.prototype,
              O = M[d] || M[h] || (g && M[g]),
              P = O || x(g),
              j = g ? (S ? x("entries") : P) : void 0,
              I = "Array" == t ? M.entries || O : O;
          if (
              (I && ((k = f(I.call(new e()))), k !== Object.prototype && (l(k, L, !0), o || s(k, d) || a(k, d, m))),
              S &&
                  O &&
                  O.name !== y &&
                  ((T = !0),
                  (P = function () {
                      return O.call(this);
                  })),
              (o && !b) || (!p && !T && M[d]) || a(M, d, P),
              (u[t] = P),
              (u[L] = m),
              g)
          )
              if (((_ = { values: S ? P : x(y), keys: w ? P : x(v), entries: j }), b)) for (E in _) E in M || i(M, E, _[E]);
              else r(r.P + r.F * (p || T), t, _);
          return _;
      };
  },
  function (e, t) {
      e.exports = !0;
  },
  function (e, t, n) {
      var o = n(45),
          r = n(46),
          i = n(47),
          a = n(49),
          s = "prototype",
          u = function (e, t, n) {
              var c,
                  l,
                  f,
                  d = e & u.F,
                  p = e & u.G,
                  h = e & u.S,
                  v = e & u.P,
                  y = e & u.B,
                  m = e & u.W,
                  A = p ? r : r[t] || (r[t] = {}),
                  g = A[s],
                  w = p ? o : h ? o[t] : (o[t] || {})[s];
              p && (n = t);
              for (c in n)
                  (l = !d && w && void 0 !== w[c]),
                      (l && c in A) ||
                          ((f = l ? w[c] : n[c]),
                          (A[c] =
                              p && "function" != typeof w[c]
                                  ? n[c]
                                  : y && l
                                  ? i(f, o)
                                  : m && w[c] == f
                                  ? (function (e) {
                                        var t = function (t, n, o) {
                                            if (this instanceof e) {
                                                switch (arguments.length) {
                                                    case 0:
                                                        return new e();
                                                    case 1:
                                                        return new e(t);
                                                    case 2:
                                                        return new e(t, n);
                                                }
                                                return new e(t, n, o);
                                            }
                                            return e.apply(this, arguments);
                                        };
                                        return (t[s] = e[s]), t;
                                    })(f)
                                  : v && "function" == typeof f
                                  ? i(Function.call, f)
                                  : f),
                          v && (((A.virtual || (A.virtual = {}))[c] = f), e & u.R && g && !g[c] && a(g, c, f)));
          };
      (u.F = 1), (u.G = 2), (u.S = 4), (u.P = 8), (u.B = 16), (u.W = 32), (u.U = 64), (u.R = 128), (e.exports = u);
  },
  function (e, t) {
      var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
      "number" == typeof __g && (__g = n);
  },
  function (e, t) {
      var n = (e.exports = { version: "2.4.0" });
      "number" == typeof __e && (__e = n);
  },
  function (e, t, n) {
      var o = n(48);
      e.exports = function (e, t, n) {
          if ((o(e), void 0 === t)) return e;
          switch (n) {
              case 1:
                  return function (n) {
                      return e.call(t, n);
                  };
              case 2:
                  return function (n, o) {
                      return e.call(t, n, o);
                  };
              case 3:
                  return function (n, o, r) {
                      return e.call(t, n, o, r);
                  };
          }
          return function () {
              return e.apply(t, arguments);
          };
      };
  },
  function (e, t) {
      e.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
      };
  },
  function (e, t, n) {
      var o = n(50),
          r = n(58);
      e.exports = n(54)
          ? function (e, t, n) {
                return o.f(e, t, r(1, n));
            }
          : function (e, t, n) {
                return (e[t] = n), e;
            };
  },
  function (e, t, n) {
      var o = n(51),
          r = n(53),
          i = n(57),
          a = Object.defineProperty;
      t.f = n(54)
          ? Object.defineProperty
          : function (e, t, n) {
                if ((o(e), (t = i(t, !0)), o(n), r))
                    try {
                        return a(e, t, n);
                    } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e;
            };
  },
  function (e, t, n) {
      var o = n(52);
      e.exports = function (e) {
          if (!o(e)) throw TypeError(e + " is not an object!");
          return e;
      };
  },
  function (e, t) {
      e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
      };
  },
  function (e, t, n) {
      e.exports =
          !n(54) &&
          !n(55)(function () {
              return (
                  7 !=
                  Object.defineProperty(n(56)("div"), "a", {
                      get: function () {
                          return 7;
                      },
                  }).a
              );
          });
  },
  function (e, t, n) {
      e.exports = !n(55)(function () {
          return (
              7 !=
              Object.defineProperty({}, "a", {
                  get: function () {
                      return 7;
                  },
              }).a
          );
      });
  },
  function (e, t) {
      e.exports = function (e) {
          try {
              return !!e();
          } catch (e) {
              return !0;
          }
      };
  },
  function (e, t, n) {
      var o = n(52),
          r = n(45).document,
          i = o(r) && o(r.createElement);
      e.exports = function (e) {
          return i ? r.createElement(e) : {};
      };
  },
  function (e, t, n) {
      var o = n(52);
      e.exports = function (e, t) {
          if (!o(e)) return e;
          var n, r;
          if (t && "function" == typeof (n = e.toString) && !o((r = n.call(e)))) return r;
          if ("function" == typeof (n = e.valueOf) && !o((r = n.call(e)))) return r;
          if (!t && "function" == typeof (n = e.toString) && !o((r = n.call(e)))) return r;
          throw TypeError("Can't convert object to primitive value");
      };
  },
  function (e, t) {
      e.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
      };
  },
  function (e, t, n) {
      e.exports = n(49);
  },
  function (e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function (e, t) {
          return n.call(e, t);
      };
  },
  function (e, t) {
      e.exports = {};
  },
  function (e, t, n) {
      "use strict";
      var o = n(63),
          r = n(58),
          i = n(78),
          a = {};
      n(49)(a, n(79)("iterator"), function () {
          return this;
      }),
          (e.exports = function (e, t, n) {
              (e.prototype = o(a, { next: r(1, n) })), i(e, t + " Iterator");
          });
  },
  function (e, t, n) {
      var o = n(51),
          r = n(64),
          i = n(76),
          a = n(73)("IE_PROTO"),
          s = function () {},
          u = "prototype",
          c = function () {
              var e,
                  t = n(56)("iframe"),
                  o = i.length,
                  r = "<",
                  a = ">";
              for (t.style.display = "none", n(77).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(r + "script" + a + "document.F=Object" + r + "/script" + a), e.close(), c = e.F; o--; )
                  delete c[u][i[o]];
              return c();
          };
      e.exports =
          Object.create ||
          function (e, t) {
              var n;
              return null !== e ? ((s[u] = o(e)), (n = new s()), (s[u] = null), (n[a] = e)) : (n = c()), void 0 === t ? n : r(n, t);
          };
  },
  function (e, t, n) {
      var o = n(50),
          r = n(51),
          i = n(65);
      e.exports = n(54)
          ? Object.defineProperties
          : function (e, t) {
                r(e);
                for (var n, a = i(t), s = a.length, u = 0; s > u; ) o.f(e, (n = a[u++]), t[n]);
                return e;
            };
  },
  function (e, t, n) {
      var o = n(66),
          r = n(76);
      e.exports =
          Object.keys ||
          function (e) {
              return o(e, r);
          };
  },
  function (e, t, n) {
      var o = n(60),
          r = n(67),
          i = n(70)(!1),
          a = n(73)("IE_PROTO");
      e.exports = function (e, t) {
          var n,
              s = r(e),
              u = 0,
              c = [];
          for (n in s) n != a && o(s, n) && c.push(n);
          for (; t.length > u; ) o(s, (n = t[u++])) && (~i(c, n) || c.push(n));
          return c;
      };
  },
  function (e, t, n) {
      var o = n(68),
          r = n(41);
      e.exports = function (e) {
          return o(r(e));
      };
  },
  function (e, t, n) {
      var o = n(69);
      e.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
                return "String" == o(e) ? e.split("") : Object(e);
            };
  },
  function (e, t) {
      var n = {}.toString;
      e.exports = function (e) {
          return n.call(e).slice(8, -1);
      };
  },
  function (e, t, n) {
      var o = n(67),
          r = n(71),
          i = n(72);
      e.exports = function (e) {
          return function (t, n, a) {
              var s,
                  u = o(t),
                  c = r(u.length),
                  l = i(a, c);
              if (e && n != n) {
                  for (; c > l; ) if (((s = u[l++]), s != s)) return !0;
              } else for (; c > l; l++) if ((e || l in u) && u[l] === n) return e || l || 0;
              return !e && -1;
          };
      };
  },
  function (e, t, n) {
      var o = n(40),
          r = Math.min;
      e.exports = function (e) {
          return e > 0 ? r(o(e), 9007199254740991) : 0;
      };
  },
  function (e, t, n) {
      var o = n(40),
          r = Math.max,
          i = Math.min;
      e.exports = function (e, t) {
          return (e = o(e)), e < 0 ? r(e + t, 0) : i(e, t);
      };
  },
  function (e, t, n) {
      var o = n(74)("keys"),
          r = n(75);
      e.exports = function (e) {
          return o[e] || (o[e] = r(e));
      };
  },
  function (e, t, n) {
      var o = n(45),
          r = "__core-js_shared__",
          i = o[r] || (o[r] = {});
      e.exports = function (e) {
          return i[e] || (i[e] = {});
      };
  },
  function (e, t) {
      var n = 0,
          o = Math.random();
      e.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36));
      };
  },
  function (e, t) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  },
  function (e, t, n) {
      e.exports = n(45).document && document.documentElement;
  },
  function (e, t, n) {
      var o = n(50).f,
          r = n(60),
          i = n(79)("toStringTag");
      e.exports = function (e, t, n) {
          e && !r((e = n ? e : e.prototype), i) && o(e, i, { configurable: !0, value: t });
      };
  },
  function (e, t, n) {
      var o = n(74)("wks"),
          r = n(75),
          i = n(45).Symbol,
          a = "function" == typeof i,
          s = (e.exports = function (e) {
              return o[e] || (o[e] = (a && i[e]) || (a ? i : r)("Symbol." + e));
          });
      s.store = o;
  },
  function (e, t, n) {
      var o = n(60),
          r = n(81),
          i = n(73)("IE_PROTO"),
          a = Object.prototype;
      e.exports =
          Object.getPrototypeOf ||
          function (e) {
              return (e = r(e)), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
          };
  },
  function (e, t, n) {
      var o = n(41);
      e.exports = function (e) {
          return Object(o(e));
      };
  },
  function (e, t, n) {
      "use strict";
      var o = n(47),
          r = n(44),
          i = n(81),
          a = n(83),
          s = n(84),
          u = n(71),
          c = n(85),
          l = n(86);
      r(
          r.S +
              r.F *
                  !n(88)(function (e) {
                      Array.from(e);
                  }),
          "Array",
          {
              from: function (e) {
                  var t,
                      n,
                      r,
                      f,
                      d = i(e),
                      p = "function" == typeof this ? this : Array,
                      h = arguments.length,
                      v = h > 1 ? arguments[1] : void 0,
                      y = void 0 !== v,
                      m = 0,
                      A = l(d);
                  if ((y && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), void 0 == A || (p == Array && s(A)))) for (t = u(d.length), n = new p(t); t > m; m++) c(n, m, y ? v(d[m], m) : d[m]);
                  else for (f = A.call(d), n = new p(); !(r = f.next()).done; m++) c(n, m, y ? a(f, v, [r.value, m], !0) : r.value);
                  return (n.length = m), n;
              },
          }
      );
  },
  function (e, t, n) {
      var o = n(51);
      e.exports = function (e, t, n, r) {
          try {
              return r ? t(o(n)[0], n[1]) : t(n);
          } catch (t) {
              var i = e.return;
              throw (void 0 !== i && o(i.call(e)), t);
          }
      };
  },
  function (e, t, n) {
      var o = n(61),
          r = n(79)("iterator"),
          i = Array.prototype;
      e.exports = function (e) {
          return void 0 !== e && (o.Array === e || i[r] === e);
      };
  },
  function (e, t, n) {
      "use strict";
      var o = n(50),
          r = n(58);
      e.exports = function (e, t, n) {
          t in e ? o.f(e, t, r(0, n)) : (e[t] = n);
      };
  },
  function (e, t, n) {
      var o = n(87),
          r = n(79)("iterator"),
          i = n(61);
      e.exports = n(46).getIteratorMethod = function (e) {
          if (void 0 != e) return e[r] || e["@@iterator"] || i[o(e)];
      };
  },
  function (e, t, n) {
      var o = n(69),
          r = n(79)("toStringTag"),
          i =
              "Arguments" ==
              o(
                  (function () {
                      return arguments;
                  })()
              ),
          a = function (e, t) {
              try {
                  return e[t];
              } catch (e) {}
          };
      e.exports = function (e) {
          var t, n, s;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = a((t = Object(e)), r)) ? n : i ? o(t) : "Object" == (s = o(t)) && "function" == typeof t.callee ? "Arguments" : s;
      };
  },
  function (e, t, n) {
      var o = n(79)("iterator"),
          r = !1;
      try {
          var i = [7][o]();
          (i.return = function () {
              r = !0;
          }),
              Array.from(i, function () {
                  throw 2;
              });
      } catch (e) {}
      e.exports = function (e, t) {
          if (!t && !r) return !1;
          var n = !1;
          try {
              var i = [7],
                  a = i[o]();
              (a.next = function () {
                  return { done: (n = !0) };
              }),
                  (i[o] = function () {
                      return a;
                  }),
                  e(i);
          } catch (e) {}
          return n;
      };
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var r = o(n(90)),
          i = o(n(91)),
          a = o(n(92)),
          s = o(n(93)),
          u = { ImageLoader: r.default, Lifecycle: i.default, Tweak: a.default, UserAccounts: s.default },
          c = u;
      (t.default = c), (e.exports = t.default);
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      /**
       * @license
       * Copyright 2016 Squarespace, INC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = {
              load: function (e, t) {
                  return window.ImageLoader.load(e, t);
              },
          },
          o = n;
      (t.default = o), (e.exports = t.default);
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      /**
       * @license
       * Copyright 2016 Squarespace, INC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var n = {
              init: function () {
                  (window.Squarespace.AFTER_BODY_LOADED = !1), window.Squarespace.afterBodyLoad();
              },
              destroy: function () {
                  window.Squarespace.globalDestroy(window.Y);
              },
          },
          o = n;
      (t.default = o), (e.exports = t.default);
  },
  function (e, t) {
      "use strict";
      function n() {
          window.Y.Global.on("tweak:change", function (e) {
              var t = e.getName(),
                  n = { name: t, value: (e.config && e.config.value) || e.value };
              r[t] &&
                  r[t].callbacks.forEach(function (e) {
                      try {
                          e(n);
                      } catch (e) {
                          console.error(e);
                      }
                  }),
                  r.all.callbacks.length > 0 &&
                      r.all.callbacks.forEach(function (e) {
                          try {
                              e(n);
                          } catch (e) {
                              console.error(e);
                          }
                      });
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      /**
       * @license
       * Copyright 2016 Squarespace, INC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      var o = window.Static.SQUARESPACE_CONTEXT.authenticatedAccount,
          r = { all: { callbacks: [] } },
          i = {
              getValue: function (e) {
                  return e && "string" == typeof e
                      ? window.Static.SQUARESPACE_CONTEXT.tweakJSON[e] || window.Static.SQUARESPACE_CONTEXT.tweakJSON[e.replace("@", "").replace(".", "")]
                      : (console.error("squarespace-core: Invalid tweak name " + e), null);
              },
              watch: function () {
                  var e = arguments;
                  if (o) {
                      if (0 === arguments.length) return void console.error("squarespace-core: Tweak.watch must be called with at least one parameter");
                      if (1 === arguments.length) return void ("function" == typeof arguments[0] && r.all.callbacks.push(arguments[0]));
                      if ("string" == typeof arguments[0] && "function" == typeof arguments[1]) {
                          var t = arguments[0];
                          r[t] || (r[t] = { callbacks: [] }), r[t].callbacks.push(arguments[1]);
                      } else
                          arguments[0].constructor === Array &&
                              "function" == typeof arguments[1] &&
                              arguments[0].forEach(function (t) {
                                  r[t] || (r[t] = { callbacks: [] }), r[t].callbacks.push(e[1]);
                              });
                  }
              },
          };
      o && ("complete" !== document.readyState ? window.addEventListener("load", n) : window.Y && window.Y.Global && n());
      var a = i;
      (t.default = a), (e.exports = t.default);
  },
  function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
      var o = n(94),
          r = "UserAccounts API not available",
          i = function () {
              console.warn(r);
          },
          a = function () {
              var e, t, n;
              return null !== (e = null === (t = window) || void 0 === t ? void 0 : null === (n = t[o.USER_ACCOUNT_API]) || void 0 === n ? void 0 : n[o.IS_USER_AUTHENTICATED]()) && void 0 !== e ? e : i();
          },
          s = function () {
              var e, t, n;
              return null !== (e = null === (t = window) || void 0 === t ? void 0 : null === (n = t[o.USER_ACCOUNT_API]) || void 0 === n ? void 0 : n[o.OPEN_ACCOUNT_SCREEN]()) && void 0 !== e ? e : i();
          },
          u = { isUserAuthenticated: a, openAccountScreen: s };
      (t.default = u), (e.exports = t.default);
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.OPEN_ACCOUNT_SCREEN = t.IS_USER_AUTHENTICATED = t.USER_ACCOUNT_API = void 0);
      var n = "UserAccountApi";
      t.USER_ACCOUNT_API = n;
      var o = "isUserAuthenticated";
      t.IS_USER_AUTHENTICATED = o;
      var r = "openAccountScreen";
      t.OPEN_ACCOUNT_SCREEN = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
          var n = e.querySelector(".sqs-video-background"),
              o = (0, s.default)(n),
              r = new i.VideoBackground(o),
              a = function () {
                  r.scaleVideo();
              },
              u = function () {
                  r.destroy(), (r = new i.VideoBackground(o));
              };
          return (
              "function" == typeof t && t({ handleResize: a, handleTweak: u }),
              {
                  destroy: function () {
                      r.destroy();
                  },
              }
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(96),
          a = n(113),
          s = o(a);
      (t.default = r), (e.exports = t.default);
  },
  function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0), n(97);
      var o = n(98);
      (t.VideoBackground = o.VideoBackground), (t.VideoFilterPropertyValues = o.VideoFilterPropertyValues), (t.videoAutoplayTest = o.videoAutoplayTest);
  },
  function (e, t) {
      !(function () {
          function e(e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
              var n = document.createEvent("CustomEvent");
              return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
          }
          return "function" != typeof window.CustomEvent && ((e.prototype = window.Event.prototype), void (window.CustomEvent = e));
      })();
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0);
      var r = n(99),
          i = o(r),
          a = n(112),
          s = n(102),
          u = o(s);
      (t.VideoBackground = i.default), (t.VideoFilterPropertyValues = a.filterProperties), (t.videoAutoplayTest = u.default);
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
              function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                      var o = t[n];
                      (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                  }
              }
              return function (t, n, o) {
                  return n && e(t.prototype, n), o && e(t, o), t;
              };
          })(),
          a = n(100),
          s = o(a),
          u = n(102),
          c = o(u),
          l = n(104),
          f = n(111),
          d = n(106),
          p = n(112),
          h = n(105),
          v = { vimeo: { api: l.initializeVimeoAPI, player: l.initializeVimeoPlayer }, youtube: { api: f.initializeYouTubeAPI, player: f.initializeYouTubePlayer } },
          y = (function () {
              function e(t) {
                  var n = this,
                      o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                  r(this, e),
                      (this.windowContext = o),
                      (this.events = []),
                      (this.browserCanAutoPlay = !1),
                      (this.videoCanAutoPlay = !1),
                      this.setInstanceProperties(t),
                      (0, c.default)()
                          .then(
                              function (e) {
                                  n.logger(e), (n.browserCanAutoPlay = !0), n.initializeVideoAPI();
                              },
                              function (e) {
                                  n.logger(e), (n.browserCanAutoPlay = !1), n.renderFallbackBehavior();
                              }
                          )
                          .then(function () {
                              n.setDisplayEffects(), n.bindUI(), n.DEBUG.enabled === !0 && (window.vdbg = n);
                          });
              }
              return (
                  i(e, [
                      {
                          key: "destroy",
                          value: function () {
                              this.events &&
                                  this.events.forEach(function (e) {
                                      return e.target.removeEventListener(e.type, e.handler, !0);
                                  }),
                                  (this.events = null),
                                  this.player &&
                                      "function" == typeof this.player.destroy &&
                                      (this.player.iframe.classList.remove("ready"), clearTimeout(this.playTimeout), (this.playTimeout = null), this.player.destroy(), (this.player = {})),
                                  "number" == typeof this.timer && (clearTimeout(this.timer), (this.timer = null));
                          },
                      },
                      {
                          key: "bindUI",
                          value: function () {
                              var e = this,
                                  t = function () {
                                      e.windowContext.requestAnimationFrame(function () {
                                          e.scaleVideo();
                                      });
                                  };
                              this.events.push({ target: this.windowContext, type: "resize", handler: t }), this.windowContext.addEventListener("resize", t, !0);
                          },
                      },
                      {
                          key: "setInstanceProperties",
                          value: function () {
                              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                              return (
                                  (e = (0, s.default)({}, d.DEFAULT_PROPERTY_VALUES, e)),
                                  1 === e.container.nodeType ? (this.container = e.container) : "string" == typeof e.container && (this.container = document.querySelector(e.container)),
                                  this.container
                                      ? ((this.videoSource = (0, h.getVideoSource)(e.url)),
                                        (this.videoId = (0, h.getVideoID)(e.url, this.videoSource)),
                                        (this.customFallbackImage = (0, h.validatedImage)(e.customFallbackImage)),
                                        (this.filter = e.filter),
                                        (this.filterStrength = e.filterStrength),
                                        (this.fitMode = e.fitMode),
                                        (this.scaleFactor = e.scaleFactor),
                                        (this.playbackSpeed = parseFloat(e.playbackSpeed) < 0.5 ? 1 : parseFloat(e.playbackSpeed)),
                                        (this.timeCode = { start: (0, h.getStartTime)(e.url, this.videoSource) || e.timeCode.start, end: e.timeCode.end }),
                                        (this.player = {}),
                                        void (this.DEBUG = e.DEBUG))
                                      : (console.error("Container " + e.container + " not found"), !1)
                              );
                          },
                      },
                      {
                          key: "setFallbackImage",
                          value: function () {
                              var e = this.customFallbackImage;
                              if (!(!e || (this.browserCanAutoPlay && this.videoCanAutoPlay)))
                                  return (
                                      e.addEventListener(
                                          "load",
                                          function () {
                                              e.classList.add("loaded");
                                          },
                                          { once: !0 }
                                      ),
                                      this.windowContext.ImageLoader ? void this.windowContext.ImageLoader.load(e, { load: !0 }) : void (e.src = e.src)
                                  );
                          },
                      },
                      {
                          key: "initializeVideoAPI",
                          value: function () {
                              var e = this;
                              if (this.browserCanAutoPlay && this.videoSource && this.videoId) {
                                  this.player.ready = !1;
                                  var t = v[this.videoSource].api,
                                      n = t(this.windowContext);
                                  n.then(function (t) {
                                      e.logger(t), (e.player.ready = !1), e.initializeVideoPlayer();
                                  }).catch(function (t) {
                                      e.renderFallbackBehavior(), document.body.classList.add("ready"), e.logger(t);
                                  });
                              } else this.renderFallbackBehavior(), document.body.classList.add("ready");
                          },
                      },
                      {
                          key: "initializeVideoPlayer",
                          value: function () {
                              var e = this;
                              if (this.player.ready) {
                                  try {
                                      this.player.destroy();
                                  } catch (e) {}
                                  this.player.ready = !1;
                              }
                              var t = v[this.videoSource].player,
                                  n = t({
                                      instance: this,
                                      container: this.container,
                                      win: this.windowContext,
                                      videoId: this.videoId,
                                      startTime: this.timeCode.start,
                                      speed: this.playbackSpeed,
                                      readyCallback: function (t, n) {
                                          e.player.iframe.classList.add("background-video"), (e.videoAspectRatio = (0, h.findPlayerAspectRatio)(e.container, e.player, e.videoSource)), e.syncPlayer();
                                          var o = new CustomEvent("ready");
                                          e.container.dispatchEvent(o);
                                      },
                                      stateChangeCallback: function (t, n) {
                                          switch (t) {
                                              case "buffering":
                                                  e.testVideoEmbedAutoplay();
                                                  break;
                                              case "playing":
                                                  (null === e.playTimeout && e.videoCanAutoPlay) || e.testVideoEmbedAutoplay(!0);
                                          }
                                          t && e.logger(t), n && e.logger(n);
                                      },
                                  });
                              n.then(
                                  function (t) {
                                      e.player = t;
                                  },
                                  function (t) {
                                      e.logger(t), e.testVideoEmbedAutoplay(!1);
                                  }
                              );
                          },
                      },
                      {
                          key: "testVideoEmbedAutoplay",
                          value: function () {
                              var e = this,
                                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                              return (
                                  void 0 === t &&
                                      (this.logger("test video autoplay: begin"),
                                      this.playTimeout && (clearTimeout(this.playTimeout), (this.playTimeout = null)),
                                      (this.playTimeout = setTimeout(function () {
                                          e.testVideoEmbedAutoplay(!1);
                                      }, d.TIMEOUT))),
                                  t === !0
                                      ? (clearTimeout(this.playTimeout),
                                        this.logger("test video autoplay: success"),
                                        (this.playTimeout = null),
                                        (this.videoCanAutoPlay = !0),
                                        (this.player.ready = !0),
                                        this.player.iframe.classList.add("ready"),
                                        void this.container.classList.remove("mobile"))
                                      : t === !1
                                      ? (clearTimeout(this.playTimeout), this.logger("test video autoplay: failure"), (this.playTimeout = null), (this.videoCanAutoPlay = !1), void this.renderFallbackBehavior())
                                      : void 0
                              );
                          },
                      },
                      {
                          key: "renderFallbackBehavior",
                          value: function () {
                              this.setFallbackImage(), this.container.classList.add("mobile"), this.logger("added mobile");
                          },
                      },
                      {
                          key: "syncPlayer",
                          value: function () {
                              this.setDisplayEffects(), this.setSpeed(), this.scaleVideo();
                          },
                      },
                      {
                          key: "scaleVideo",
                          value: function (e) {
                              this.setFallbackImage();
                              var t = this.player.iframe;
                              if (t) {
                                  var n = e || this.scaleFactor;
                                  if ("fill" !== this.fitMode) return (t.style.width = ""), void (t.style.height = "");
                                  var o = t.parentNode.clientWidth,
                                      r = t.parentNode.clientHeight,
                                      i = o / r,
                                      a = 0,
                                      s = 0;
                                  i > this.videoAspectRatio ? ((a = o * n), (s = (o * n) / this.videoAspectRatio)) : this.videoAspectRatio > i ? ((a = r * n * this.videoAspectRatio), (s = r * n)) : ((a = o * n), (s = r * n)),
                                      (t.style.width = a + "px"),
                                      (t.style.height = s + "px"),
                                      (t.style.left = 0 - (a - o) / 2 + "px"),
                                      (t.style.top = 0 - (s - r) / 2 + "px");
                              }
                          },
                      },
                      {
                          key: "setSpeed",
                          value: function (e) {
                              (this.playbackSpeed = parseFloat(this.playbackSpeed)), this.player.setPlaybackRate && this.player.setPlaybackRate(this.playbackSpeed);
                          },
                      },
                      {
                          key: "setDisplayEffects",
                          value: function () {
                              this.setFilter();
                          },
                      },
                      {
                          key: "setFilter",
                          value: function () {
                              var e = this.container.style,
                                  t = p.filterOptions[this.filter - 1],
                                  n = "";
                              "none" !== t && (n = this.getFilterStyle(t, this.filterStrength));
                              var o = "blur" === t;
                              (e.webkitFilter = o ? "" : n),
                                  (e.filter = o ? "" : n),
                                  this.container.classList.toggle("filter-blur", o),
                                  Array.prototype.slice.call(this.container.children).forEach(function (e) {
                                      (e.style.webkitFilter = o ? n : ""), (e.style.filter = o ? n : "");
                                  });
                          },
                      },
                      {
                          key: "getFilterStyle",
                          value: function (e, t) {
                              return e + "(" + (p.filterProperties[e].modifier(t) + p.filterProperties[e].unit) + ")";
                          },
                      },
                      {
                          key: "logger",
                          value: function (e) {
                              this.DEBUG.enabled && this.DEBUG.verbose && this.windowContext.console.log(e);
                          },
                      },
                  ]),
                  e
              );
          })();
      t.default = y;
  },
  function (e, t, n) {
      (function (e, n) {
          function o(e, t, n) {
              switch (n.length) {
                  case 0:
                      return e.call(t);
                  case 1:
                      return e.call(t, n[0]);
                  case 2:
                      return e.call(t, n[0], n[1]);
                  case 3:
                      return e.call(t, n[0], n[1], n[2]);
              }
              return e.apply(t, n);
          }
          function r(e, t) {
              for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
              return o;
          }
          function i(e) {
              return function (t) {
                  return e(t);
              };
          }
          function a(e, t) {
              return null == e ? void 0 : e[t];
          }
          function s(e, t) {
              return function (n) {
                  return e(t(n));
              };
          }
          function u(e) {
              var t = -1,
                  n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                  var o = e[t];
                  this.set(o[0], o[1]);
              }
          }
          function c() {
              (this.__data__ = Ht ? Ht(null) : {}), (this.size = 0);
          }
          function l(e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
          }
          function f(e) {
              var t = this.__data__;
              if (Ht) {
                  var n = t[e];
                  return n === Se ? void 0 : n;
              }
              return kt.call(t, e) ? t[e] : void 0;
          }
          function d(e) {
              var t = this.__data__;
              return Ht ? void 0 !== t[e] : kt.call(t, e);
          }
          function p(e, t) {
              var n = this.__data__;
              return (this.size += this.has(e) ? 0 : 1), (n[e] = Ht && void 0 === t ? Se : t), this;
          }
          function h(e) {
              var t = -1,
                  n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                  var o = e[t];
                  this.set(o[0], o[1]);
              }
          }
          function v() {
              (this.__data__ = []), (this.size = 0);
          }
          function y(e) {
              var t = this.__data__,
                  n = R(t, e);
              if (n < 0) return !1;
              var o = t.length - 1;
              return n == o ? t.pop() : Nt.call(t, n, 1), --this.size, !0;
          }
          function m(e) {
              var t = this.__data__,
                  n = R(t, e);
              return n < 0 ? void 0 : t[n][1];
          }
          function A(e) {
              return R(this.__data__, e) > -1;
          }
          function g(e, t) {
              var n = this.__data__,
                  o = R(n, e);
              return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
          }
          function w(e) {
              var t = -1,
                  n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                  var o = e[t];
                  this.set(o[0], o[1]);
              }
          }
          function b() {
              (this.size = 0), (this.__data__ = { hash: new u(), map: new (zt || h)(), string: new u() });
          }
          function _(e) {
              var t = K(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
          }
          function E(e) {
              return K(this, e).get(e);
          }
          function k(e) {
              return K(this, e).has(e);
          }
          function x(e, t) {
              var n = K(this, e),
                  o = n.size;
              return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
          }
          function L(e) {
              var t = (this.__data__ = new h(e));
              this.size = t.size;
          }
          function S() {
              (this.__data__ = new h()), (this.size = 0);
          }
          function T(e) {
              var t = this.__data__,
                  n = t.delete(e);
              return (this.size = t.size), n;
          }
          function M(e) {
              return this.__data__.get(e);
          }
          function O(e) {
              return this.__data__.has(e);
          }
          function P(e, t) {
              var n = this.__data__;
              if (n instanceof h) {
                  var o = n.__data__;
                  if (!zt || o.length < Le - 1) return o.push([e, t]), (this.size = ++n.size), this;
                  n = this.__data__ = new w(o);
              }
              return n.set(e, t), (this.size = n.size), this;
          }
          function j(e, t) {
              var n = Zt(e),
                  o = !n && Qt(e),
                  i = !n && !o && Jt(e),
                  a = !n && !o && !i && Xt(e),
                  s = n || o || i || a,
                  u = s ? r(e.length, String) : [],
                  c = u.length;
              for (var l in e) (!t && !kt.call(e, l)) || (s && ("length" == l || (i && ("offset" == l || "parent" == l)) || (a && ("buffer" == l || "byteLength" == l || "byteOffset" == l)) || ne(l, c))) || u.push(l);
              return u;
          }
          function I(e, t, n) {
              ((void 0 === n || pe(e[t], n)) && (void 0 !== n || t in e)) || N(e, t, n);
          }
          function C(e, t, n) {
              var o = e[t];
              (kt.call(e, t) && pe(o, n) && (void 0 !== n || t in e)) || N(e, t, n);
          }
          function R(e, t) {
              for (var n = e.length; n--; ) if (pe(e[n][0], t)) return n;
              return -1;
          }
          function N(e, t, n) {
              "__proto__" == t && Vt ? Vt(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[t] = n);
          }
          function F(e) {
              return null == e ? (void 0 === e ? Ye : Ue) : Ft && Ft in Object(e) ? ee(e) : ue(e);
          }
          function V(e) {
              return ge(e) && F(e) == Pe;
          }
          function B(e) {
              if (!Ae(e) || ie(e)) return !1;
              var t = ye(e) ? Tt : st;
              return t.test(de(e));
          }
          function D(e) {
              return ge(e) && me(e.length) && !!ct[F(e)];
          }
          function U(e) {
              if (!Ae(e)) return se(e);
              var t = ae(e),
                  n = [];
              for (var o in e) ("constructor" != o || (!t && kt.call(e, o))) && n.push(o);
              return n;
          }
          function z(e, t, n, o, r) {
              e !== t &&
                  Wt(
                      t,
                      function (i, a) {
                          if ((r || (r = new L()), Ae(i))) H(e, t, a, n, z, o, r);
                          else {
                              var s = o ? o(le(e, a), i, a + "", e, t, r) : void 0;
                              void 0 === s && (s = i), I(e, a, s);
                          }
                      },
                      _e
                  );
          }
          function H(e, t, n, o, r, i, a) {
              var s = le(e, n),
                  u = le(t, n),
                  c = a.get(u);
              if (c) return void I(e, n, c);
              var l = i ? i(s, u, n + "", e, t, a) : void 0,
                  f = void 0 === l;
              if (f) {
                  var d = Zt(u),
                      p = !d && Jt(u),
                      h = !d && !p && Xt(u);
                  (l = u),
                      d || p || h
                          ? Zt(s)
                              ? (l = s)
                              : ve(s)
                              ? (l = Q(s))
                              : p
                              ? ((f = !1), (l = W(u, !0)))
                              : h
                              ? ((f = !1), (l = Y(u, !0)))
                              : (l = [])
                          : we(u) || Qt(u)
                          ? ((l = s), Qt(s) ? (l = be(s)) : (Ae(s) && !ye(s)) || (l = te(u)))
                          : (f = !1);
              }
              f && (a.set(u, l), r(l, u, o, i, a), a.delete(u)), I(e, n, l);
          }
          function q(e, t) {
              return Yt(ce(e, t, ke), e + "");
          }
          function W(e, t) {
              if (t) return e.slice();
              var n = e.length,
                  o = jt ? jt(n) : new e.constructor(n);
              return e.copy(o), o;
          }
          function G(e) {
              var t = new e.constructor(e.byteLength);
              return new Pt(t).set(new Pt(e)), t;
          }
          function Y(e, t) {
              var n = t ? G(e.buffer) : e.buffer;
              return new e.constructor(n, e.byteOffset, e.length);
          }
          function Q(e, t) {
              var n = -1,
                  o = e.length;
              for (t || (t = Array(o)); ++n < o; ) t[n] = e[n];
              return t;
          }
          function Z(e, t, n, o) {
              var r = !n;
              n || (n = {});
              for (var i = -1, a = t.length; ++i < a; ) {
                  var s = t[i],
                      u = o ? o(n[s], e[s], s, n, e) : void 0;
                  void 0 === u && (u = e[s]), r ? N(n, s, u) : C(n, s, u);
              }
              return n;
          }
          function J(e) {
              return q(function (t, n) {
                  var o = -1,
                      r = n.length,
                      i = r > 1 ? n[r - 1] : void 0,
                      a = r > 2 ? n[2] : void 0;
                  for (i = e.length > 3 && "function" == typeof i ? (r--, i) : void 0, a && oe(n[0], n[1], a) && ((i = r < 3 ? void 0 : i), (r = 1)), t = Object(t); ++o < r; ) {
                      var s = n[o];
                      s && e(t, s, o, i);
                  }
                  return t;
              });
          }
          function X(e) {
              return function (t, n, o) {
                  for (var r = -1, i = Object(t), a = o(t), s = a.length; s--; ) {
                      var u = a[e ? s : ++r];
                      if (n(i[u], u, i) === !1) break;
                  }
                  return t;
              };
          }
          function K(e, t) {
              var n = e.__data__;
              return re(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
          }
          function $(e, t) {
              var n = a(e, t);
              return B(n) ? n : void 0;
          }
          function ee(e) {
              var t = kt.call(e, Ft),
                  n = e[Ft];
              try {
                  e[Ft] = void 0;
                  var o = !0;
              } catch (e) {}
              var r = Lt.call(e);
              return o && (t ? (e[Ft] = n) : delete e[Ft]), r;
          }
          function te(e) {
              return "function" != typeof e.constructor || ae(e) ? {} : qt(It(e));
          }
          function ne(e, t) {
              var n = typeof e;
              return (t = null == t ? Oe : t), !!t && ("number" == n || ("symbol" != n && ut.test(e))) && e > -1 && e % 1 == 0 && e < t;
          }
          function oe(e, t, n) {
              if (!Ae(n)) return !1;
              var o = typeof t;
              return !!("number" == o ? he(n) && ne(t, n.length) : "string" == o && t in n) && pe(n[t], e);
          }
          function re(e) {
              var t = typeof e;
              return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
          }
          function ie(e) {
              return !!xt && xt in e;
          }
          function ae(e) {
              var t = e && e.constructor,
                  n = ("function" == typeof t && t.prototype) || bt;
              return e === n;
          }
          function se(e) {
              var t = [];
              if (null != e) for (var n in Object(e)) t.push(n);
              return t;
          }
          function ue(e) {
              return Lt.call(e);
          }
          function ce(e, t, n) {
              return (
                  (t = Dt(void 0 === t ? e.length - 1 : t, 0)),
                  function () {
                      for (var r = arguments, i = -1, a = Dt(r.length - t, 0), s = Array(a); ++i < a; ) s[i] = r[t + i];
                      i = -1;
                      for (var u = Array(t + 1); ++i < t; ) u[i] = r[i];
                      return (u[t] = n(s)), o(e, this, u);
                  }
              );
          }
          function le(e, t) {
              if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
          }
          function fe(e) {
              var t = 0,
                  n = 0;
              return function () {
                  var o = Ut(),
                      r = Me - (o - n);
                  if (((n = o), r > 0)) {
                      if (++t >= Te) return arguments[0];
                  } else t = 0;
                  return e.apply(void 0, arguments);
              };
          }
          function de(e) {
              if (null != e) {
                  try {
                      return Et.call(e);
                  } catch (e) {}
                  try {
                      return e + "";
                  } catch (e) {}
              }
              return "";
          }
          function pe(e, t) {
              return e === t || (e !== e && t !== t);
          }
          function he(e) {
              return null != e && me(e.length) && !ye(e);
          }
          function ve(e) {
              return ge(e) && he(e);
          }
          function ye(e) {
              if (!Ae(e)) return !1;
              var t = F(e);
              return t == Fe || t == Ve || t == Ie || t == He;
          }
          function me(e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Oe;
          }
          function Ae(e) {
              var t = typeof e;
              return null != e && ("object" == t || "function" == t);
          }
          function ge(e) {
              return null != e && "object" == typeof e;
          }
          function we(e) {
              if (!ge(e) || F(e) != ze) return !1;
              var t = It(e);
              if (null === t) return !0;
              var n = kt.call(t, "constructor") && t.constructor;
              return "function" == typeof n && n instanceof n && Et.call(n) == St;
          }
          function be(e) {
              return Z(e, _e(e));
          }
          function _e(e) {
              return he(e) ? j(e, !0) : U(e);
          }
          function Ee(e) {
              return function () {
                  return e;
              };
          }
          function ke(e) {
              return e;
          }
          function xe() {
              return !1;
          }
          var Le = 200,
              Se = "__lodash_hash_undefined__",
              Te = 800,
              Me = 16,
              Oe = 9007199254740991,
              Pe = "[object Arguments]",
              je = "[object Array]",
              Ie = "[object AsyncFunction]",
              Ce = "[object Boolean]",
              Re = "[object Date]",
              Ne = "[object Error]",
              Fe = "[object Function]",
              Ve = "[object GeneratorFunction]",
              Be = "[object Map]",
              De = "[object Number]",
              Ue = "[object Null]",
              ze = "[object Object]",
              He = "[object Proxy]",
              qe = "[object RegExp]",
              We = "[object Set]",
              Ge = "[object String]",
              Ye = "[object Undefined]",
              Qe = "[object WeakMap]",
              Ze = "[object ArrayBuffer]",
              Je = "[object DataView]",
              Xe = "[object Float32Array]",
              Ke = "[object Float64Array]",
              $e = "[object Int8Array]",
              et = "[object Int16Array]",
              tt = "[object Int32Array]",
              nt = "[object Uint8Array]",
              ot = "[object Uint8ClampedArray]",
              rt = "[object Uint16Array]",
              it = "[object Uint32Array]",
              at = /[\\^$.*+?()[\]{}|]/g,
              st = /^\[object .+?Constructor\]$/,
              ut = /^(?:0|[1-9]\d*)$/,
              ct = {};
          (ct[Xe] = ct[Ke] = ct[$e] = ct[et] = ct[tt] = ct[nt] = ct[ot] = ct[rt] = ct[it] = !0), (ct[Pe] = ct[je] = ct[Ze] = ct[Ce] = ct[Je] = ct[Re] = ct[Ne] = ct[Fe] = ct[Be] = ct[De] = ct[ze] = ct[qe] = ct[We] = ct[Ge] = ct[Qe] = !1);
          var lt = "object" == typeof e && e && e.Object === Object && e,
              ft = "object" == typeof self && self && self.Object === Object && self,
              dt = lt || ft || Function("return this")(),
              pt = "object" == typeof t && t && !t.nodeType && t,
              ht = pt && "object" == typeof n && n && !n.nodeType && n,
              vt = ht && ht.exports === pt,
              yt = vt && lt.process,
              mt = (function () {
                  try {
                      var e = ht && ht.require && ht.require("util").types;
                      return e ? e : yt && yt.binding && yt.binding("util");
                  } catch (e) {}
              })(),
              At = mt && mt.isTypedArray,
              gt = Array.prototype,
              wt = Function.prototype,
              bt = Object.prototype,
              _t = dt["__core-js_shared__"],
              Et = wt.toString,
              kt = bt.hasOwnProperty,
              xt = (function () {
                  var e = /[^.]+$/.exec((_t && _t.keys && _t.keys.IE_PROTO) || "");
                  return e ? "Symbol(src)_1." + e : "";
              })(),
              Lt = bt.toString,
              St = Et.call(Object),
              Tt = RegExp(
                  "^" +
                      Et.call(kt)
                          .replace(at, "\\$&")
                          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                      "$"
              ),
              Mt = vt ? dt.Buffer : void 0,
              Ot = dt.Symbol,
              Pt = dt.Uint8Array,
              jt = Mt ? Mt.allocUnsafe : void 0,
              It = s(Object.getPrototypeOf, Object),
              Ct = Object.create,
              Rt = bt.propertyIsEnumerable,
              Nt = gt.splice,
              Ft = Ot ? Ot.toStringTag : void 0,
              Vt = (function () {
                  try {
                      var e = $(Object, "defineProperty");
                      return e({}, "", {}), e;
                  } catch (e) {}
              })(),
              Bt = Mt ? Mt.isBuffer : void 0,
              Dt = Math.max,
              Ut = Date.now,
              zt = $(dt, "Map"),
              Ht = $(Object, "create"),
              qt = (function () {
                  function e() {}
                  return function (t) {
                      if (!Ae(t)) return {};
                      if (Ct) return Ct(t);
                      e.prototype = t;
                      var n = new e();
                      return (e.prototype = void 0), n;
                  };
              })();
          (u.prototype.clear = c),
              (u.prototype.delete = l),
              (u.prototype.get = f),
              (u.prototype.has = d),
              (u.prototype.set = p),
              (h.prototype.clear = v),
              (h.prototype.delete = y),
              (h.prototype.get = m),
              (h.prototype.has = A),
              (h.prototype.set = g),
              (w.prototype.clear = b),
              (w.prototype.delete = _),
              (w.prototype.get = E),
              (w.prototype.has = k),
              (w.prototype.set = x),
              (L.prototype.clear = S),
              (L.prototype.delete = T),
              (L.prototype.get = M),
              (L.prototype.has = O),
              (L.prototype.set = P);
          var Wt = X(),
              Gt = Vt
                  ? function (e, t) {
                        return Vt(e, "toString", { configurable: !0, enumerable: !1, value: Ee(t), writable: !0 });
                    }
                  : ke,
              Yt = fe(Gt),
              Qt = V(
                  (function () {
                      return arguments;
                  })()
              )
                  ? V
                  : function (e) {
                        return ge(e) && kt.call(e, "callee") && !Rt.call(e, "callee");
                    },
              Zt = Array.isArray,
              Jt = Bt || xe,
              Xt = At ? i(At) : D,
              Kt = J(function (e, t, n) {
                  z(e, t, n);
              });
          n.exports = Kt;
      }.call(
          t,
          (function () {
              return this;
          })(),
          n(101)(e)
      ));
  },
  function (e, t) {
      e.exports = function (e) {
          return e.webpackPolyfill || ((e.deprecate = function () {}), (e.paths = []), (e.children = []), (e.webpackPolyfill = 1)), e;
      };
  },
  function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = !1,
          r = n(103),
          i = r.OggVideo,
          a = r.Mp4Video,
          s = function () {
              return new Promise(function (e, t) {
                  if ("resolve" === o) return void e("resolved for debugging");
                  if ("reject" === o) return void t("rejected for debugging");
                  var n = document.createElement("video");
                  (n.autoplay = !0),
                      n.setAttribute("autoplay", !0),
                      (n.muted = !0),
                      n.setAttribute("muted", !0),
                      (n.playsinline = !0),
                      n.setAttribute("playsinline", !0),
                      (n.volume = 0),
                      n.setAttribute("data-is-playing", "false"),
                      n.setAttribute("style", "width: 1px; height: 1px; position: fixed; top: 0; left: 0; z-index: 100;"),
                      document.body.appendChild(n);
                  var r = null,
                      s = function () {
                          r && (clearTimeout(r), (r = null));
                          try {
                              document.body.removeChild(n);
                          } catch (e) {
                              return;
                          }
                      };
                  try {
                      if (n.canPlayType('video/ogg; codecs="theora"').match(/^(probably)|(maybe)/)) n.src = i;
                      else {
                          if (!n.canPlayType('video/mp4; codecs="avc1.42E01E"').match(/^(probably)|(maybe)/)) return s(), void t("no autoplay: element does not support mp4 or ogg format");
                          n.src = a;
                      }
                  } catch (e) {
                      return s(), void t("no autoplay: " + e);
                  }
                  n.addEventListener("play", function () {
                      n.setAttribute("data-is-playing", "true"),
                          (r = setTimeout(function () {
                              s(), t("no autoplay: unsure");
                          }, 3e3));
                  }),
                      n.addEventListener("canplay", function () {
                          return "true" === n.getAttribute("data-is-playing") ? (s(), e("autoplay supported"), !0) : (s(), t("no autoplay: browser does not support autoplay"), !1);
                      }),
                      n.load(),
                      n.play();
              });
          };
      t.default = s;
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
              "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A",
          o =
              "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==";
      (t.OggVideo = n), (t.Mp4Video = o);
  },
  function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initializeVimeoPlayer = t.initializeVimeoAPI = void 0);
      var o = n(105),
          r = n(106),
          i = void 0,
          a = "*",
          s = null,
          u = function () {
              return new Promise(function (e, t) {
                  e("no api needed");
              });
          },
          c = function (e, t) {
              var n = { method: e };
              t && (n.value = t);
              var o = JSON.stringify(n);
              i.ownerDocument.defaultView.eval("(function(playerIframe){ playerIframe.contentWindow.postMessage(" + o + ", " + JSON.stringify(a) + ") })")(i);
          },
          l = function (e) {
              var t = e.win,
                  n = e.instance,
                  u = e.container,
                  l = e.videoId,
                  f = e.startTime,
                  d = e.readyCallback,
                  p = e.stateChangeCallback;
              return new Promise(function (e, h) {
                  var v = n.logger || function () {};
                  (i = t.document.createElement("iframe")), (i.id = "vimeoplayer");
                  var y = "&background=1";
                  i.src = "//player.vimeo.com/video/" + l + "?api=1" + y;
                  var m = (0, o.getPlayerElement)(u);
                  m.appendChild(i);
                  var A = { iframe: i, setPlaybackRate: function () {} };
                  e(A);
                  var g = function () {
                          c("getDuration"), c("getVideoHeight"), c("getVideoWidth");
                      },
                      w = null,
                      b = function () {
                          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                          (e || (A.dimensions.width && A.dimensions.height && A.duration)) &&
                              (e && g(),
                              (A.dimensions.width = A.dimensions.width || A.iframe.parentNode.offsetWidth),
                              (A.dimensions.height = A.dimensions.height || A.iframe.parentNode.offsetHeight),
                              (A.duration = A.duration || 10),
                              c("setVolume", "0"),
                              c("setLoop", "true"),
                              c("seekTo", f),
                              c("addEventListener", "playProgress"),
                              d(A));
                      },
                      _ = function () {
                          s && (clearTimeout(s), (s = null)),
                              A.dimensions ||
                                  ((A.dimensions = {}),
                                  g(),
                                  p("buffering"),
                                  (w = setTimeout(function () {
                                      v.call(n, "retrying"), b(!0);
                                  }, 0.75 * r.TIMEOUT)));
                      },
                      E = function (e) {
                          if (!/^https?:\/\/player.vimeo.com/.test(e.origin)) return !1;
                          a = e.origin;
                          var t = e.data;
                          switch (("string" == typeof t && (t = JSON.parse(t)), t.event)) {
                              case "ready":
                                  _(a);
                                  break;
                              case "playProgress":
                              case "timeupdate":
                                  w && (clearTimeout(w), (w = null)), p("playing", t), c("setVolume", "0"), t.data.percent >= 0.98 && f > 0 && c("seekTo", f);
                          }
                          switch (t.method) {
                              case "getVideoHeight":
                                  v.call(n, t.method), (A.dimensions.height = t.value), b();
                                  break;
                              case "getVideoWidth":
                                  v.call(n, t.method), (A.dimensions.width = t.value), b();
                                  break;
                              case "getDuration":
                                  v.call(n, t.method), (A.duration = t.value), f >= A.duration && (f = 0), b();
                          }
                      },
                      k = function (e) {
                          E(e);
                      };
                  t.addEventListener("message", k, !1),
                      (A.destroy = function () {
                          t.removeEventListener("message", k), A.iframe.parentElement && A.iframe.parentElement.removeChild(A.iframe);
                      }),
                      (s = setTimeout(function () {
                          h("Ran out of time");
                      }, r.TIMEOUT));
              });
          };
      (t.initializeVimeoAPI = u), (t.initializeVimeoPlayer = l);
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.validatedImage = t.getVideoSource = t.getVideoID = t.getStartTime = t.getPlayerElement = t.findPlayerAspectRatio = void 0);
      var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (e) {
                        return typeof e;
                    }
                  : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    },
          i = n(106),
          a = n(107),
          s = o(a),
          u = n(110),
          c = o(u),
          l = function (e) {
              var t = void 0,
                  n = void 0;
              for (var o in e) {
                  var i = e[o];
                  if ("object" === ("undefined" == typeof i ? "undefined" : r(i)) && i.width && i.height) {
                      (t = i.width), (n = i.height);
                      break;
                  }
              }
              return { w: t, h: n };
          },
          f = function (e) {
              var t = void 0,
                  n = void 0;
              return e.dimensions ? ((t = e.dimensions.width), (n = e.dimensions.height)) : e.iframe && ((t = e.iframe.clientWidth), (n = e.iframe.clientHeight)), { w: t, h: n };
          },
          d = { youtube: { parsePath: "query.t", timeRegex: /[hms]/, idRegex: i.YOUTUBE_REGEX, getDimensions: l }, vimeo: { parsePath: null, timeRegex: /[#t=s]/, idRegex: i.VIMEO_REGEX, getDimensions: f } },
          p = function (e, t) {
              return d[t].parsePath ? (0, c.default)(e, d[t].parsePath) : null;
          },
          h = function (e, t) {
              var n = new s.default(e, !0),
                  o = p(n, t);
              if (o) {
                  var r = o.split(d[t].timeRegex).filter(Boolean),
                      i = parseInt(r.pop(), 10) || 0,
                      a = 60 * parseInt(r.pop(), 10) || 0,
                      u = 3600 * parseInt(r.pop(), 10) || 0;
                  return u + a + i;
              }
          },
          v = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.DEFAULT_PROPERTY_VALUES.url,
                  t = e.match(i.YOUTUBE_REGEX);
              return t && t[2].length ? "youtube" : ((t = e.match(i.VIMEO_REGEX)), t && t[2].length ? "vimeo" : void console.error("Video source " + e + " does not match supported types"));
          },
          y = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.DEFAULT_PROPERTY_VALUES.url,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                  n = e.match(d[t].idRegex);
              return n && n[2].length ? n[2] : void console.error("Video id at " + e + " is not valid");
          },
          m = function (e) {
              if (!e) return !1;
              var t = "IMG" === e.nodeName && e;
              return t || console.warn("Element is not a valid image element."), t;
          },
          A = function (e, t, n) {
              var o = void 0,
                  r = void 0;
              if (t) {
                  var i = d[n].getDimensions(t);
                  (o = i.w), (r = i.h);
              }
              return (o && r) || ((o = e.clientWidth), (r = e.clientHeight), console.warn("No width and height found in " + n + " player " + t + ". Using container dimensions.")), parseInt(o, 10) / parseInt(r, 10);
          },
          g = function (e) {
              var t = e.querySelector("#player");
              return t || ((t = e.ownerDocument.createElement("div")), (t.id = "player"), e.appendChild(t)), t.setAttribute("style", "position: absolute; top: 0; bottom: 0; left: 0; right: 0;"), t;
          };
      (t.findPlayerAspectRatio = A), (t.getPlayerElement = g), (t.getStartTime = h), (t.getVideoID = y), (t.getVideoSource = v), (t.validatedImage = m);
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = { enabled: !0, verbose: !1 },
          o = { container: "body", url: "https://youtu.be/xkEmYQvJ_68", source: "youtube", fitMode: "fill", scaleFactor: 1, playbackSpeed: 1, filter: 1, filterStrength: 50, timeCode: { start: 0, end: null }, DEBUG: n },
          r = 2500,
          i = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/,
          a = /^.*(vimeo\.com\/)([0-9]{7,}(#t\=.*s)?)/;
      (t.DEBUG = n), (t.DEFAULT_PROPERTY_VALUES = o), (t.TIMEOUT = r), (t.YOUTUBE_REGEX = i), (t.VIMEO_REGEX = a);
  },
  function (e, t, n) {
      (function (t) {
          "use strict";
          function o(e) {
              return (e ? e : "").toString().replace(m, "");
          }
          function r(e) {
              var n;
              n = "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
              var o = n.location || {};
              e = e || o;
              var r,
                  i = {},
                  a = typeof e;
              if ("blob:" === e.protocol) i = new u(unescape(e.pathname), {});
              else if ("string" === a) {
                  i = new u(e, {});
                  for (r in g) delete i[r];
              } else if ("object" === a) {
                  for (r in e) r in g || (i[r] = e[r]);
                  void 0 === i.slashes && (i.slashes = p.test(e.href));
              }
              return i;
          }
          function i(e) {
              return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e;
          }
          function a(e, t) {
              (e = o(e)), (t = t || {});
              var n,
                  r = h.exec(e),
                  a = r[1] ? r[1].toLowerCase() : "",
                  s = !!r[2],
                  u = !!r[3],
                  c = 0;
              return (
                  s ? (u ? ((n = r[2] + r[3] + r[4]), (c = r[2].length + r[3].length)) : ((n = r[2] + r[4]), (c = r[2].length))) : u ? ((n = r[3] + r[4]), (c = r[3].length)) : (n = r[4]),
                  "file:" === a ? c >= 2 && (n = n.slice(2)) : i(a) ? (n = r[4]) : a ? s && (n = n.slice(2)) : c >= 2 && i(t.protocol) && (n = r[4]),
                  { protocol: a, slashes: s || i(a), slashesCount: c, rest: n }
              );
          }
          function s(e, t) {
              if ("" === e) return t;
              for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), o = n.length, r = n[o - 1], i = !1, a = 0; o--; )
                  "." === n[o] ? n.splice(o, 1) : ".." === n[o] ? (n.splice(o, 1), a++) : a && (0 === o && (i = !0), n.splice(o, 1), a--);
              return i && n.unshift(""), ("." !== r && ".." !== r) || n.push(""), n.join("/");
          }
          function u(e, t, n) {
              if (((e = o(e)), !(this instanceof u))) return new u(e, t, n);
              var c,
                  l,
                  p,
                  h,
                  y,
                  m,
                  g = A.slice(),
                  w = typeof t,
                  b = this,
                  _ = 0;
              for (
                  "object" !== w && "string" !== w && ((n = t), (t = null)),
                      n && "function" != typeof n && (n = d.parse),
                      t = r(t),
                      l = a(e || "", t),
                      c = !l.protocol && !l.slashes,
                      b.slashes = l.slashes || (c && t.slashes),
                      b.protocol = l.protocol || t.protocol || "",
                      e = l.rest,
                      (("file:" === l.protocol && (2 !== l.slashesCount || v.test(e))) || (!l.slashes && (l.protocol || l.slashesCount < 2 || !i(b.protocol)))) && (g[3] = [/(.*)/, "pathname"]);
                  _ < g.length;
                  _++
              )
                  (h = g[_]),
                      "function" != typeof h
                          ? ((p = h[0]),
                            (m = h[1]),
                            p !== p
                                ? (b[m] = e)
                                : "string" == typeof p
                                ? ~(y = e.indexOf(p)) && ("number" == typeof h[2] ? ((b[m] = e.slice(0, y)), (e = e.slice(y + h[2]))) : ((b[m] = e.slice(y)), (e = e.slice(0, y))))
                                : (y = p.exec(e)) && ((b[m] = y[1]), (e = e.slice(0, y.index))),
                            (b[m] = b[m] || (c && h[3] ? t[m] || "" : "")),
                            h[4] && (b[m] = b[m].toLowerCase()))
                          : (e = h(e, b));
              n && (b.query = n(b.query)),
                  c && t.slashes && "/" !== b.pathname.charAt(0) && ("" !== b.pathname || "" !== t.pathname) && (b.pathname = s(b.pathname, t.pathname)),
                  "/" !== b.pathname.charAt(0) && i(b.protocol) && (b.pathname = "/" + b.pathname),
                  f(b.port, b.protocol) || ((b.host = b.hostname), (b.port = "")),
                  (b.username = b.password = ""),
                  b.auth && ((h = b.auth.split(":")), (b.username = h[0] || ""), (b.password = h[1] || "")),
                  (b.origin = "file:" !== b.protocol && i(b.protocol) && b.host ? b.protocol + "//" + b.host : "null"),
                  (b.href = b.toString());
          }
          function c(e, t, n) {
              var o = this;
              switch (e) {
                  case "query":
                      "string" == typeof t && t.length && (t = (n || d.parse)(t)), (o[e] = t);
                      break;
                  case "port":
                      (o[e] = t), f(t, o.protocol) ? t && (o.host = o.hostname + ":" + t) : ((o.host = o.hostname), (o[e] = ""));
                      break;
                  case "hostname":
                      (o[e] = t), o.port && (t += ":" + o.port), (o.host = t);
                      break;
                  case "host":
                      (o[e] = t), /:\d+$/.test(t) ? ((t = t.split(":")), (o.port = t.pop()), (o.hostname = t.join(":"))) : ((o.hostname = t), (o.port = ""));
                      break;
                  case "protocol":
                      (o.protocol = t.toLowerCase()), (o.slashes = !n);
                      break;
                  case "pathname":
                  case "hash":
                      if (t) {
                          var r = "pathname" === e ? "/" : "#";
                          o[e] = t.charAt(0) !== r ? r + t : t;
                      } else o[e] = t;
                      break;
                  default:
                      o[e] = t;
              }
              for (var a = 0; a < A.length; a++) {
                  var s = A[a];
                  s[4] && (o[s[1]] = o[s[1]].toLowerCase());
              }
              return (o.origin = "file:" !== o.protocol && i(o.protocol) && o.host ? o.protocol + "//" + o.host : "null"), (o.href = o.toString()), o;
          }
          function l(e) {
              (e && "function" == typeof e) || (e = d.stringify);
              var t,
                  n = this,
                  o = n.protocol;
              o && ":" !== o.charAt(o.length - 1) && (o += ":");
              var r = o + (n.slashes || i(n.protocol) ? "//" : "");
              return (
                  n.username && ((r += n.username), n.password && (r += ":" + n.password), (r += "@")),
                  (r += n.host + n.pathname),
                  (t = "object" == typeof n.query ? e(n.query) : n.query),
                  t && (r += "?" !== t.charAt(0) ? "?" + t : t),
                  n.hash && (r += n.hash),
                  r
              );
          }
          var f = n(108),
              d = n(109),
              p = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
              h = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
              v = /^[a-zA-Z]:/,
              y = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
              m = new RegExp("^" + y + "+"),
              A = [
                  ["#", "hash"],
                  ["?", "query"],
                  function (e, t) {
                      return i(t.protocol) ? e.replace(/\\/g, "/") : e;
                  },
                  ["/", "pathname"],
                  ["@", "auth", 1],
                  [NaN, "host", void 0, 1, 1],
                  [/:(\d+)$/, "port", void 0, 1],
                  [NaN, "hostname", void 0, 1, 1],
              ],
              g = { hash: 1, query: 1 };
          (u.prototype = { set: c, toString: l }), (u.extractProtocol = a), (u.location = r), (u.trimLeft = o), (u.qs = d), (e.exports = u);
      }.call(
          t,
          (function () {
              return this;
          })()
      ));
  },
  function (e, t) {
      "use strict";
      e.exports = function (e, t) {
          if (((t = t.split(":")[0]), (e = +e), !e)) return !1;
          switch (t) {
              case "http":
              case "ws":
                  return 80 !== e;
              case "https":
              case "wss":
                  return 443 !== e;
              case "ftp":
                  return 21 !== e;
              case "gopher":
                  return 70 !== e;
              case "file":
                  return !1;
          }
          return 0 !== e;
      };
  },
  function (e, t) {
      "use strict";
      function n(e) {
          try {
              return decodeURIComponent(e.replace(/\+/g, " "));
          } catch (e) {
              return null;
          }
      }
      function o(e) {
          try {
              return encodeURIComponent(e);
          } catch (e) {
              return null;
          }
      }
      function r(e) {
          for (var t, o = /([^=?#&]+)=?([^&]*)/g, r = {}; (t = o.exec(e)); ) {
              var i = n(t[1]),
                  a = n(t[2]);
              null === i || null === a || i in r || (r[i] = a);
          }
          return r;
      }
      function i(e, t) {
          t = t || "";
          var n,
              r,
              i = [];
          "string" != typeof t && (t = "?");
          for (r in e)
              if (s.call(e, r)) {
                  if (((n = e[r]), n || (null !== n && n !== a && !isNaN(n)) || (n = ""), (r = o(r)), (n = o(n)), null === r || null === n)) continue;
                  i.push(r + "=" + n);
              }
          return i.length ? t + i.join("&") : "";
      }
      var a,
          s = Object.prototype.hasOwnProperty;
      (t.stringify = i), (t.parse = r);
  },
  function (e, t) {
      (function (t) {
          function n(e, t) {
              return null == e ? void 0 : e[t];
          }
          function o(e) {
              var t = !1;
              if (null != e && "function" != typeof e.toString)
                  try {
                      t = !!(e + "");
                  } catch (e) {}
              return t;
          }
          function r(e) {
              var t = -1,
                  n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                  var o = e[t];
                  this.set(o[0], o[1]);
              }
          }
          function i() {
              this.__data__ = ye ? ye(null) : {};
          }
          function a(e) {
              return this.has(e) && delete this.__data__[e];
          }
          function s(e) {
              var t = this.__data__;
              if (ye) {
                  var n = t[e];
                  return n === H ? void 0 : n;
              }
              return le.call(t, e) ? t[e] : void 0;
          }
          function u(e) {
              var t = this.__data__;
              return ye ? void 0 !== t[e] : le.call(t, e);
          }
          function c(e, t) {
              var n = this.__data__;
              return (n[e] = ye && void 0 === t ? H : t), this;
          }
          function l(e) {
              var t = -1,
                  n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                  var o = e[t];
                  this.set(o[0], o[1]);
              }
          }
          function f() {
              this.__data__ = [];
          }
          function d(e) {
              var t = this.__data__,
                  n = _(t, e);
              if (n < 0) return !1;
              var o = t.length - 1;
              return n == o ? t.pop() : he.call(t, n, 1), !0;
          }
          function p(e) {
              var t = this.__data__,
                  n = _(t, e);
              return n < 0 ? void 0 : t[n][1];
          }
          function h(e) {
              return _(this.__data__, e) > -1;
          }
          function v(e, t) {
              var n = this.__data__,
                  o = _(n, e);
              return o < 0 ? n.push([e, t]) : (n[o][1] = t), this;
          }
          function y(e) {
              var t = -1,
                  n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                  var o = e[t];
                  this.set(o[0], o[1]);
              }
          }
          function m() {
              this.__data__ = { hash: new r(), map: new (ve || l)(), string: new r() };
          }
          function A(e) {
              return S(this, e).delete(e);
          }
          function g(e) {
              return S(this, e).get(e);
          }
          function w(e) {
              return S(this, e).has(e);
          }
          function b(e, t) {
              return S(this, e).set(e, t), this;
          }
          function _(e, t) {
              for (var n = e.length; n--; ) if (R(e[n][0], t)) return n;
              return -1;
          }
          function E(e, t) {
              t = M(t, e) ? [t] : L(t);
              for (var n = 0, o = t.length; null != e && n < o; ) e = e[j(t[n++])];
              return n && n == o ? e : void 0;
          }
          function k(e) {
              if (!F(e) || P(e)) return !1;
              var t = N(e) || o(e) ? de : ee;
              return t.test(I(e));
          }
          function x(e) {
              if ("string" == typeof e) return e;
              if (B(e)) return Ae ? Ae.call(e) : "";
              var t = e + "";
              return "0" == t && 1 / e == -q ? "-0" : t;
          }
          function L(e) {
              return we(e) ? e : ge(e);
          }
          function S(e, t) {
              var n = e.__data__;
              return O(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
          }
          function T(e, t) {
              var o = n(e, t);
              return k(o) ? o : void 0;
          }
          function M(e, t) {
              if (we(e)) return !1;
              var n = typeof e;
              return !("number" != n && "symbol" != n && "boolean" != n && null != e && !B(e)) || Z.test(e) || !Q.test(e) || (null != t && e in Object(t));
          }
          function O(e) {
              var t = typeof e;
              return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
          }
          function P(e) {
              return !!ue && ue in e;
          }
          function j(e) {
              if ("string" == typeof e || B(e)) return e;
              var t = e + "";
              return "0" == t && 1 / e == -q ? "-0" : t;
          }
          function I(e) {
              if (null != e) {
                  try {
                      return ce.call(e);
                  } catch (e) {}
                  try {
                      return e + "";
                  } catch (e) {}
              }
              return "";
          }
          function C(e, t) {
              if ("function" != typeof e || (t && "function" != typeof t)) throw new TypeError(z);
              var n = function () {
                  var o = arguments,
                      r = t ? t.apply(this, o) : o[0],
                      i = n.cache;
                  if (i.has(r)) return i.get(r);
                  var a = e.apply(this, o);
                  return (n.cache = i.set(r, a)), a;
              };
              return (n.cache = new (C.Cache || y)()), n;
          }
          function R(e, t) {
              return e === t || (e !== e && t !== t);
          }
          function N(e) {
              var t = F(e) ? fe.call(e) : "";
              return t == W || t == G;
          }
          function F(e) {
              var t = typeof e;
              return !!e && ("object" == t || "function" == t);
          }
          function V(e) {
              return !!e && "object" == typeof e;
          }
          function B(e) {
              return "symbol" == typeof e || (V(e) && fe.call(e) == Y);
          }
          function D(e) {
              return null == e ? "" : x(e);
          }
          function U(e, t, n) {
              var o = null == e ? void 0 : E(e, t);
              return void 0 === o ? n : o;
          }
          var z = "Expected a function",
              H = "__lodash_hash_undefined__",
              q = 1 / 0,
              W = "[object Function]",
              G = "[object GeneratorFunction]",
              Y = "[object Symbol]",
              Q = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              Z = /^\w*$/,
              J = /^\./,
              X = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              K = /[\\^$.*+?()[\]{}|]/g,
              $ = /\\(\\)?/g,
              ee = /^\[object .+?Constructor\]$/,
              te = "object" == typeof t && t && t.Object === Object && t,
              ne = "object" == typeof self && self && self.Object === Object && self,
              oe = te || ne || Function("return this")(),
              re = Array.prototype,
              ie = Function.prototype,
              ae = Object.prototype,
              se = oe["__core-js_shared__"],
              ue = (function () {
                  var e = /[^.]+$/.exec((se && se.keys && se.keys.IE_PROTO) || "");
                  return e ? "Symbol(src)_1." + e : "";
              })(),
              ce = ie.toString,
              le = ae.hasOwnProperty,
              fe = ae.toString,
              de = RegExp(
                  "^" +
                      ce
                          .call(le)
                          .replace(K, "\\$&")
                          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                      "$"
              ),
              pe = oe.Symbol,
              he = re.splice,
              ve = T(oe, "Map"),
              ye = T(Object, "create"),
              me = pe ? pe.prototype : void 0,
              Ae = me ? me.toString : void 0;
          (r.prototype.clear = i),
              (r.prototype.delete = a),
              (r.prototype.get = s),
              (r.prototype.has = u),
              (r.prototype.set = c),
              (l.prototype.clear = f),
              (l.prototype.delete = d),
              (l.prototype.get = p),
              (l.prototype.has = h),
              (l.prototype.set = v),
              (y.prototype.clear = m),
              (y.prototype.delete = A),
              (y.prototype.get = g),
              (y.prototype.has = w),
              (y.prototype.set = b);
          var ge = C(function (e) {
              e = D(e);
              var t = [];
              return (
                  J.test(e) && t.push(""),
                  e.replace(X, function (e, n, o, r) {
                      t.push(o ? r.replace($, "$1") : n || e);
                  }),
                  t
              );
          });
          C.Cache = y;
          var we = Array.isArray;
          e.exports = U;
      }.call(
          t,
          (function () {
              return this;
          })()
      ));
  },
  function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.initializeYouTubePlayer = t.initializeYouTubeAPI = void 0);
      var o = n(105),
          r = function (e) {
              return new Promise(function (t, n) {
                  if (e.document.documentElement.querySelector('script[src*="www.youtube.com/iframe_api"].loaded')) return void t("already loaded");
                  var o = e.document.createElement("script");
                  o.src = "https://www.youtube.com/iframe_api";
                  var r = e.document.getElementsByTagName("script")[0];
                  r.parentNode.insertBefore(o, r),
                      o.addEventListener(
                          "load",
                          function (e) {
                              e.currentTarget.classList.add("loaded"), t("api script tag created and loaded");
                          },
                          !0
                      ),
                      o.addEventListener("error", function (e) {
                          n("Failed to load YouTube script: ", e);
                      });
              });
          },
          i = function (e, t) {
              var n = e.target;
              (n.iframe = n.getIframe()), n.mute(), (n.ready = !0), n.seekTo(t < n.getDuration() ? t : 0), n.playVideo();
          },
          a = function (e, t, n) {
              var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                  r = e.target,
                  i = (r.getDuration() - t) / o,
                  a = function e() {
                      r.getCurrentTime() + 0.1 >= r.getDuration() && (r.pauseVideo(), r.seekTo(t), r.playVideo()), requestAnimationFrame(e);
                  };
              return e.data === n.YT.PlayerState.BUFFERING && 1 !== r.getVideoLoadedFraction() && (0 === r.getCurrentTime() || r.getCurrentTime() > i - -0.1)
                  ? "buffering"
                  : e.data === n.YT.PlayerState.PLAYING
                  ? (requestAnimationFrame(a), "playing")
                  : void (e.data === n.YT.PlayerState.ENDED && r.playVideo());
          },
          s = function (e) {
              var t = e.container,
                  n = e.win,
                  r = e.videoId,
                  s = e.startTime,
                  u = e.speed,
                  c = e.readyCallback,
                  l = e.stateChangeCallback,
                  f = (0, o.getPlayerElement)(t),
                  d = function () {
                      return new n.YT.Player(f, {
                          videoId: r,
                          playerVars: { autohide: 1, autoplay: 0, controls: 0, enablejsapi: 1, iv_load_policy: 3, loop: 0, modestbranding: 1, playsinline: 1, rel: 0, showinfo: 0, wmode: "opaque" },
                          events: {
                              onReady: function (e) {
                                  i(e, s), c(e.target);
                              },
                              onStateChange: function (e) {
                                  var t = a(e, s, n, u);
                                  l(t, t);
                              },
                          },
                      });
                  };
              return new Promise(function (e, t) {
                  var o = function t() {
                      1 === n.YT.loaded ? e(d()) : setTimeout(t, 100);
                  };
                  o();
              });
          };
      (t.initializeYouTubeAPI = r), (t.initializeYouTubePlayer = s);
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = ["none", "blur", "brightness", "contrast", "invert", "opacity", "saturate", "sepia", "drop-shadow", "grayscale", "hue-rotate"],
          o = {
              blur: {
                  modifier: function (e) {
                      return 0.3 * e;
                  },
                  unit: "px",
              },
              brightness: {
                  modifier: function (e) {
                      return 0.009 * e + 0.1;
                  },
                  unit: "",
              },
              contrast: {
                  modifier: function (e) {
                      return 0.4 * e + 80;
                  },
                  unit: "%",
              },
              grayscale: {
                  modifier: function (e) {
                      return e;
                  },
                  unit: "%",
              },
              "hue-rotate": {
                  modifier: function (e) {
                      return 3.6 * e;
                  },
                  unit: "deg",
              },
              invert: {
                  modifier: function (e) {
                      return 1;
                  },
                  unit: "",
              },
              opacity: {
                  modifier: function (e) {
                      return e;
                  },
                  unit: "%",
              },
              saturate: {
                  modifier: function (e) {
                      return 2 * e;
                  },
                  unit: "%",
              },
              sepia: {
                  modifier: function (e) {
                      return e;
                  },
                  unit: "%",
              },
          };
      (t.filterOptions = n), (t.filterProperties = o);
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
          var t = { container: e };
          return (
              e.getAttribute("data-config-url") && (t.url = e.getAttribute("data-config-url")),
              e.getAttribute("data-config-playback-speed") && (t.playbackSpeed = e.getAttribute("data-config-playback-speed")),
              e.getAttribute("data-config-filter") && (t.filter = e.getAttribute("data-config-filter")),
              e.getAttribute("data-config-filter-strength") && (t.filterStrength = e.getAttribute("data-config-filter-strength")),
              t
          );
      };
      (t.default = n), (e.exports = t.default);
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = document.querySelector(".site-header"),
              n = 200,
              o = function (e) {
                  return (0, a.default)(e, ".folder-open").length > 0;
              },
              r = function (r) {
                  e.classList.contains("folder-open")
                      ? (e.classList.remove("folder-open"),
                        setTimeout(function () {
                            t.classList.remove("folder-overflow");
                        }, n))
                      : (o(e) && document.querySelector(".folder-open").classList.remove("folder-open"), e.classList.add("folder-open"), t.classList.add("folder-overflow"));
              };
          e.addEventListener("click", r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(115),
          a = o(i);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      var r = n(36),
          i = o(r);
      n(116),
          (e.exports = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*",
                  n = (0, i.default)(e.parentNode.children);
              return n.filter(function (n) {
                  return n !== e && n.matches(t);
              });
          });
  },
  function (e, t) {
      !(function () {
          Element.prototype.matches ||
              (Element.prototype.matches =
                  Element.prototype.matchesSelector ||
                  Element.prototype.mozMatchesSelector ||
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.oMatchesSelector ||
                  Element.prototype.webkitMatchesSelector ||
                  function (e) {
                      for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this; );
                      return n > -1;
                  });
      })();
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = (0, a.default)(e.querySelectorAll(".grid-image-wrapper img")),
              n = void 0,
              o = void 0,
              r = e.querySelector(".grid-wrapper"),
              i = document.documentElement.clientWidth,
              s = ["tweak-gallery-gutter", "tweak-gallery-style", "tweak-full-width-first-landscape", "tweak-show-gallery-image-captions", "tweak-site-outer-padding", "tweak-gallery-title-overlay"],
              c = function () {
                  return {
                      galleryStyle: p.Tweak.getValue("tweak-gallery-style").toLowerCase(),
                      titleOverlaySetting: p.Tweak.getValue("tweak-show-gallery-title-overlay").toLowerCase(),
                      gutter: p.Tweak.getValue("tweak-gallery-gutter"),
                      isFullWidthLandscape: "true" === p.Tweak.getValue("tweak-full-width-first-landscape"),
                  };
              },
              f = function () {
                  var t = e.querySelectorAll(".grid-hidden"),
                      n = 0,
                      o = setInterval(function () {
                          t[n] ? (t[n].classList.remove("grid-hidden"), n++) : clearInterval(o);
                      }, 130);
              },
              h = function (t) {
                  if (t.target.classList.contains("info-button")) {
                      e.querySelector(".grid-image-wrapper").classList.remove("info-view");
                      var n = '[data-slide-id="' + t.target.getAttribute("data-slide-id") + '"]';
                      o && clearTimeout(o), e.querySelector(".grid-image-wrapper" + n).classList.add("info-view");
                  }
              },
              y = function (t) {
                  if (t.target.classList.contains("info-button")) {
                      var n = '[data-slide-id="' + t.target.getAttribute("data-slide-id") + '"]';
                      o && clearTimeout(o),
                          (o = setTimeout(function () {
                              e.querySelector(".grid-image-wrapper" + n).classList.remove("info-view");
                          }, 200));
                  }
              },
              A = function (t) {
                  if (t.target.classList.contains("info-button")) {
                      var n = '[data-slide-id="' + t.target.getAttribute("data-slide-id") + '"]';
                      e.querySelector(".grid-image-wrapper" + n).classList.toggle("info-view");
                  }
              },
              g = function () {
                  if (window.innerWidth > m.default.mobileBreakpoint) return (window.innerWidth * parseFloat(c().gutter)) / 100;
              },
              w = function (e) {
                  e && n && (n.destroy(), (n = null));
                  var o = c();
                  window.innerWidth <= m.default.mobileBreakpoint
                      ? t.forEach(function (e) {
                            p.ImageLoader.load(e, { mode: null, load: !0 });
                        })
                      : "masonry" === o.galleryStyle
                      ? ((n = new l.default(r, {
                            gutter: (window.innerWidth * parseFloat(o.gutter)) / 100,
                            minColumns: 2,
                            maxColumns: 2,
                            childSelector: ".grid-item-wrapper",
                            imageWrapperSelector: ".grid-image-wrapper",
                            afterLayout: f,
                            autoLoadImages: !0,
                        })),
                        n.layout())
                      : "horizontal" === o.galleryStyle
                      ? ((n = new d.default(r, {
                            gutter: (window.innerWidth * parseFloat(o.gutter)) / 100,
                            columns: 2,
                            childSelector: "grid-item-wrapper",
                            imgWrapperSelector: "grid-image-wrapper",
                            isFullWidthLandscape: o.isFullWidthLandscape,
                            afterLayout: f,
                            autoLoadImages: !0,
                        })),
                        n.layout())
                      : t.forEach(function (e) {
                            p.ImageLoader.load(e, { mode: null, load: !0 });
                        });
              },
              b = function (e) {
                  if (document.documentElement.clientWidth !== i) {
                      if (window.innerWidth <= m.default.mobileBreakpoint)
                          n && (n.destroy(), (n = null)),
                              t.forEach(function (e) {
                                  p.ImageLoader.load(e, { mode: null, load: !0 });
                              });
                      else if (n) {
                          var o = g();
                          n.layout({ gutter: o });
                      } else w(!1);
                      i = document.documentElement.clientWidth;
                  }
              },
              _ = (0, u.default)(b, 120),
              E = function () {
                  window.addEventListener("resize", _), (0, v.default)() ? r.addEventListener("click", A) : (r.addEventListener("mouseover", h), r.addEventListener("mouseout", y));
              },
              k = function () {
                  w(!1);
              },
              x = function () {
                  w(!1), E();
              },
              L = function () {
                  _.cancel(), window.removeEventListener("resize", _), r.removeEventListener("mouseover", h), r.removeEventListener("mouseout", y), r.removeEventListener("click", A);
              };
          return (
              x(),
              p.Tweak.watch(s, function (e) {
                  var t = ["tweak-gallery-style", "tweak-gallery-gutter", "tweak-site-outer-padding", "tweak-full-width-first-landscape"],
                      n = t.some(function (t) {
                          return e.name === t;
                      });
                  n && w(!0),
                      "tweak-show-gallery-image-captions" === e.name &&
                          (r.removeEventListener("mouseover", h),
                          r.removeEventListener("mouseout", y),
                          r.removeEventListener("click", A),
                          "on hover" === e.value.toLowerCase() && (0, v.default)() ? r.addEventListener("click", A) : "on hover" === e.value.toLowerCase() && (r.addEventListener("mouseover", h), r.addEventListener("mouseout", y)));
              }),
              { sync: k, destroy: L }
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(36),
          a = o(i),
          s = n(118),
          u = o(s),
          c = n(126),
          l = o(c),
          f = n(146),
          d = o(f),
          p = n(89),
          h = n(165),
          v = o(h),
          y = n(166),
          m = o(y);
      t.default = r;
  },
  function (e, t, n) {
      function o(e, t, n) {
          function o(t) {
              var n = A,
                  o = g;
              return (A = g = void 0), (k = t), (b = e.apply(o, n));
          }
          function l(e) {
              return (k = e), (_ = setTimeout(p, t)), x ? o(e) : b;
          }
          function f(e) {
              var n = e - E,
                  o = e - k,
                  r = t - n;
              return L ? c(r, w - o) : r;
          }
          function d(e) {
              var n = e - E,
                  o = e - k;
              return void 0 === E || n >= t || n < 0 || (L && o >= w);
          }
          function p() {
              var e = i();
              return d(e) ? h(e) : void (_ = setTimeout(p, f(e)));
          }
          function h(e) {
              return (_ = void 0), S && A ? o(e) : ((A = g = void 0), b);
          }
          function v() {
              void 0 !== _ && clearTimeout(_), (k = 0), (A = E = g = _ = void 0);
          }
          function y() {
              return void 0 === _ ? b : h(i());
          }
          function m() {
              var e = i(),
                  n = d(e);
              if (((A = arguments), (g = this), (E = e), n)) {
                  if (void 0 === _) return l(E);
                  if (L) return (_ = setTimeout(p, t)), o(E);
              }
              return void 0 === _ && (_ = setTimeout(p, t)), b;
          }
          var A,
              g,
              w,
              b,
              _,
              E,
              k = 0,
              x = !1,
              L = !1,
              S = !0;
          if ("function" != typeof e) throw new TypeError(s);
          return (t = a(t) || 0), r(n) && ((x = !!n.leading), (L = "maxWait" in n), (w = L ? u(a(n.maxWait) || 0, t) : w), (S = "trailing" in n ? !!n.trailing : S)), (m.cancel = v), (m.flush = y), m;
      }
      var r = n(119),
          i = n(120),
          a = n(123),
          s = "Expected a function",
          u = Math.max,
          c = Math.min;
      e.exports = o;
  },
  function (e, t) {
      function n(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
      }
      e.exports = n;
  },
  function (e, t, n) {
      var o = n(121),
          r = function () {
              return o.Date.now();
          };
      e.exports = r;
  },
  function (e, t, n) {
      var o = n(122),
          r = "object" == typeof self && self && self.Object === Object && self,
          i = o || r || Function("return this")();
      e.exports = i;
  },
  function (e, t) {
      (function (t) {
          var n = "object" == typeof t && t && t.Object === Object && t;
          e.exports = n;
      }.call(
          t,
          (function () {
              return this;
          })()
      ));
  },
  function (e, t, n) {
      function o(e) {
          if ("number" == typeof e) return e;
          if (i(e)) return a;
          if (r(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = r(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(s, "");
          var n = c.test(e);
          return n || l.test(e) ? f(e.slice(2), n ? 2 : 8) : u.test(e) ? a : +e;
      }
      var r = n(119),
          i = n(124),
          a = NaN,
          s = /^\s+|\s+$/g,
          u = /^[-+]0x[0-9a-f]+$/i,
          c = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          f = parseInt;
      e.exports = o;
  },
  function (e, t, n) {
      function o(e) {
          return "symbol" == typeof e || (r(e) && s.call(e) == i);
      }
      var r = n(125),
          i = "[object Symbol]",
          a = Object.prototype,
          s = a.toString;
      e.exports = o;
  },
  function (e, t) {
      function n(e) {
          return !!e && "object" == typeof e;
      }
      e.exports = n;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = (function () {
              function e(e, t) {
                  var n = [],
                      o = !0,
                      r = !1,
                      i = void 0;
                  try {
                      for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                  } catch (e) {
                      (r = !0), (i = e);
                  } finally {
                      try {
                          !o && s.return && s.return();
                      } finally {
                          if (r) throw i;
                      }
                  }
                  return n;
              }
              return function (t, n) {
                  if (Array.isArray(t)) return t;
                  if (Symbol.iterator in Object(t)) return e(t, n);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
          })(),
          u =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                  }
                  return e;
              },
          c = (function () {
              function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                      var o = t[n];
                      (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                  }
              }
              return function (t, n, o) {
                  return n && e(t.prototype, n), o && e(t, o), t;
              };
          })(),
          l = n(127),
          f = o(l),
          d = n(89),
          p = { rootNode: "autocolumns-wrapper", childNodes: "autocolumns-item-wrapper", imageNodes: "autocolumns-image-wrapper" },
          h = { minColumns: 1, maxColumns: 12, minColumnWidth: 300, gutter: 5, autoLoadImages: !1 },
          v = (function (e) {
              function t(e) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  r(this, t);
                  var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u({}, h, n)));
                  return (
                      o.rootNode.classList.add(p.rootNode),
                      o.childNodes.forEach(function (e) {
                          e.classList.add(p.childNodes);
                          var t = e.querySelector(o.config.imageWrapperSelector);
                          t && t.classList.add(p.imageNodes);
                      }),
                      o
                  );
              }
              return (
                  a(t, e),
                  c(t, [
                      {
                          key: "getImageRatio",
                          value: function (e) {
                              if ("" !== e.getAttribute("data-image-dimensions")) {
                                  var t = e
                                          .getAttribute("data-image-dimensions")
                                          .split("x")
                                          .map(function (e) {
                                              return parseFloat(e, 10);
                                          }),
                                      n = s(t, 2),
                                      o = n[0],
                                      r = n[1];
                                  return r / o;
                              }
                              return 1;
                          },
                      },
                      {
                          key: "setIntrinsicPadding",
                          value: function (e) {
                              var t = this.getImageRatio(e.querySelector("img"));
                              e.style.paddingBottom = Math.floor(100 * t) + "%";
                          },
                      },
                      {
                          key: "loadImage",
                          value: function (e) {
                              d.ImageLoader.load(e, { mode: "none", load: !0 });
                          },
                      },
                      {
                          key: "getNumberOfColumns",
                          value: function (e) {
                              var t = e + this.config.gutter,
                                  n = this.config.minColumnWidth + this.config.gutter,
                                  o = Math.floor(t / n);
                              return (o = Math.min(o, this.config.maxColumns)), (o = Math.max(o, this.config.minColumns)), Math.max(o, 1);
                          },
                      },
                      {
                          key: "getFinalColumnWidth",
                          value: function (e, t) {
                              return (e - (t - 1) * this.config.gutter) / t;
                          },
                      },
                      {
                          key: "placeitem",
                          value: function (e, t, n) {
                              (e.style.top = n + "px"), (e.style.left = t + "px");
                          },
                      },
                      {
                          key: "afterChildLoaded",
                          value: function (e) {
                              "function" == typeof this.config.afterChildLoaded && this.config.afterChildLoaded(e);
                          },
                      },
                      {
                          key: "layout",
                          value: function () {
                              var e = this,
                                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                              this.beforeLayout(t);
                              var n = this.rootNode.offsetWidth,
                                  o = this.getNumberOfColumns(n),
                                  r = this.getFinalColumnWidth(n, o),
                                  i = 0,
                                  a = 0,
                                  s = 0,
                                  u = [];
                              this.childNodes.forEach(function (t, n) {
                                  var c = t.querySelector("img[data-src]"),
                                      l = void 0,
                                      f = void 0;
                                  (t.style.width = r + "px"),
                                      c && (c.removeAttribute("data-load"), e.setIntrinsicPadding(t.querySelector("." + p.imageNodes)), e.config.autoLoadImages && e.loadImage(c)),
                                      n < o
                                          ? (e.placeitem(t, a, s), (l = t.offsetTop), (f = t.offsetHeight), u.push([a, l + f]), (a += r + e.config.gutter))
                                          : (u.sort(function (e, t) {
                                                return e[1] - t[1];
                                            }),
                                            (s = u[0][1] + e.config.gutter),
                                            (a = u[0][0]),
                                            e.placeitem(t, a, s),
                                            u.splice(0, 1),
                                            (l = t.offsetTop),
                                            (f = t.offsetHeight),
                                            u.push([a, l + f])),
                                      e.afterChildLoaded(t),
                                      (i = Math.max(i, l + f));
                              }),
                                  (this.rootNode.style.height = i + "px"),
                                  this.afterLayout();
                          },
                      },
                      {
                          key: "reset",
                          value: function () {
                              this.childNodes.forEach(function (e) {
                                  var t = e.querySelector("." + p.imageNodes);
                                  t && (t.style.paddingBottom = ""), (e.style.top = ""), (e.style.left = ""), (e.style.width = "");
                              });
                          },
                      },
                      {
                          key: "afterResize",
                          value: function () {
                              this.reset(), this.layout();
                          },
                      },
                      {
                          key: "destroy",
                          value: function () {
                              var e = this;
                              this.beforeDestroy(),
                                  this.reset(),
                                  (this.rootNode.style.height = ""),
                                  this.config.rootNode !== p.rootNode && this.rootNode.classList.remove(p.rootNode),
                                  this.childNodes.forEach(function (t) {
                                      e.config.childNodes !== p.childNodes && t.classList.remove(p.childNodes);
                                      var n = t.querySelector("." + p.imageNodes);
                                      n && e.config.imageNodes !== p.imageNodes && n.classList.remove(p.imageNodes);
                                  }),
                                  this.afterDestroy();
                          },
                      },
                  ]),
                  t
              );
          })(f.default);
      (t.default = v), (e.exports = t.default);
  },
  function (e, t, n) {
      "use strict";
      var o = n(128),
          r = n(129);
      r(t, "__esModule", { value: !0 }), (t.default = void 0);
      var i = o(n(132)),
          a = o(n(133)),
          s = o(n(138)),
          u = o(n(129)),
          c = o(n(144)),
          l = o(n(145)),
          f = n(118),
          d = { resizeHandler: !0, resizeDebounceTime: 250, resizeMaxWait: 2500 },
          p = (function () {
              function e(t) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  if (((0, c.default)(this, e), 1 !== t.nodeType)) throw new Error("rootNode must be a DOM Node!");
                  (this.rootNode = t), (this.document = this.rootNode.ownerDocument), (this.window = this.document.defaultView);
                  var o = d;
                  if (
                      ((0, u.default)(this, "config", {
                          configurable: !1,
                          enumerable: !0,
                          get: function () {
                              return o;
                          },
                          set: function (e) {
                              (o = (0, s.default)({}, o, e)), (0, a.default)(o);
                          },
                      }),
                      (this.config = n),
                      (this.childNodes = []),
                      this.config.childSelector)
                  )
                      try {
                          var r = this.rootNode.querySelectorAll(this.config.childSelector);
                          this.childNodes = (0, i.default)(r);
                      } catch (e) {
                          throw new Error("childNode error: " + e);
                      }
                  this.config.resizeHandler && ((this._boundResize = this._handleResize.bind(this)), this._createResizeListeners()), (this.hasRunInitialLayout = !1);
              }
              return (
                  (0, l.default)(e, [
                      {
                          key: "_createResizeListeners",
                          value: function () {
                              var e = this,
                                  t = function () {
                                      "function" == typeof e.beforeResize && e.beforeResize(), "function" == typeof e.config.beforeResize && e.config.beforeResize(e.layout.bind(e));
                                  },
                                  n = function () {
                                      "function" == typeof e.afterResize ? e.afterResize() : e.layout(), "function" == typeof e.config.afterResize && e.config.afterResize(e.layout.bind(e));
                                  };
                              (this._boundBeforeResize = f(t, this.config.resizeDebounceTime, { leading: !0, trailing: !1 })),
                                  (this._boundAfterResize = f(n, this.config.resizeDebounceTime, { maxWait: this.config.resizeMaxWait, leading: !1, trailing: !0 }));
                          },
                      },
                      {
                          key: "_handleResize",
                          value: function () {
                              this._boundBeforeResize && this._boundBeforeResize(), this._boundAfterResize && this._boundAfterResize();
                          },
                      },
                      {
                          key: "beforeLayout",
                          value: function (e) {
                              (this.config = e), this.hasRunInitialLayout || this.beforeInitialLayout(), "function" == typeof this.config.beforeLayout && this.config.beforeLayout.apply(this);
                          },
                      },
                      {
                          key: "beforeInitialLayout",
                          value: function () {
                              "function" == typeof this.config.beforeInitialLayout && this.config.beforeInitialLayout.apply(this);
                          },
                      },
                      {
                          key: "afterLayout",
                          value: function () {
                              this.hasRunInitialLayout || (this.afterInitialLayout(), (this.hasRunInitialLayout = !0)), "function" == typeof this.config.afterLayout && this.config.afterLayout.apply(this);
                          },
                      },
                      {
                          key: "afterInitialLayout",
                          value: function () {
                              "function" == typeof this.config.afterInitialLayout && this.config.afterInitialLayout.apply(this), this.config.resizeHandler && this.window.addEventListener("resize", this._boundResize);
                          },
                      },
                      {
                          key: "beforeDestroy",
                          value: function () {
                              this.config.resizeHandler && this.window.removeEventListener("resize", this._boundResize), "function" == typeof this.config.beforeDestroy && this.config.beforeDestroy.apply(this);
                          },
                      },
                      {
                          key: "afterDestroy",
                          value: function () {
                              "function" == typeof this.config.afterDestroy && this.config.afterDestroy.apply(this);
                          },
                      },
                  ]),
                  e
              );
          })(),
          h = p;
      (t.default = h), (e.exports = t.default);
  },
  function (e, t) {
      function n(e) {
          return e && e.__esModule ? e : { default: e };
      }
      (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  function (e, t, n) {
      e.exports = n(130);
  },
  function (e, t, n) {
      n(131);
      var o = n(46).Object;
      e.exports = function (e, t, n) {
          return o.defineProperty(e, t, n);
      };
  },
  function (e, t, n) {
      var o = n(44);
      o(o.S + o.F * !n(54), "Object", { defineProperty: n(50).f });
  },
  function (e, t, n) {
      e.exports = n(37);
  },
  function (e, t, n) {
      e.exports = n(134);
  },
  function (e, t, n) {
      n(135), (e.exports = n(46).Object.freeze);
  },
  function (e, t, n) {
      var o = n(52),
          r = n(136).onFreeze;
      n(137)("freeze", function (e) {
          return function (t) {
              return e && o(t) ? e(r(t)) : t;
          };
      });
  },
  function (e, t, n) {
      var o = n(75)("meta"),
          r = n(52),
          i = n(60),
          a = n(50).f,
          s = 0,
          u =
              Object.isExtensible ||
              function () {
                  return !0;
              },
          c = !n(55)(function () {
              return u(Object.preventExtensions({}));
          }),
          l = function (e) {
              a(e, o, { value: { i: "O" + ++s, w: {} } });
          },
          f = function (e, t) {
              if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
              if (!i(e, o)) {
                  if (!u(e)) return "F";
                  if (!t) return "E";
                  l(e);
              }
              return e[o].i;
          },
          d = function (e, t) {
              if (!i(e, o)) {
                  if (!u(e)) return !0;
                  if (!t) return !1;
                  l(e);
              }
              return e[o].w;
          },
          p = function (e) {
              return c && h.NEED && u(e) && !i(e, o) && l(e), e;
          },
          h = (e.exports = { KEY: o, NEED: !1, fastKey: f, getWeak: d, onFreeze: p });
  },
  function (e, t, n) {
      var o = n(44),
          r = n(46),
          i = n(55);
      e.exports = function (e, t) {
          var n = (r.Object || {})[e] || Object[e],
              a = {};
          (a[e] = t(n)),
              o(
                  o.S +
                      o.F *
                          i(function () {
                              n(1);
                          }),
                  "Object",
                  a
              );
      };
  },
  function (e, t, n) {
      e.exports = n(139);
  },
  function (e, t, n) {
      n(140), (e.exports = n(46).Object.assign);
  },
  function (e, t, n) {
      var o = n(44);
      o(o.S + o.F, "Object", { assign: n(141) });
  },
  function (e, t, n) {
      "use strict";
      var o = n(65),
          r = n(142),
          i = n(143),
          a = n(81),
          s = n(68),
          u = Object.assign;
      e.exports =
          !u ||
          n(55)(function () {
              var e = {},
                  t = {},
                  n = Symbol(),
                  o = "abcdefghijklmnopqrst";
              return (
                  (e[n] = 7),
                  o.split("").forEach(function (e) {
                      t[e] = e;
                  }),
                  7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != o
              );
          })
              ? function (e, t) {
                    for (var n = a(e), u = arguments.length, c = 1, l = r.f, f = i.f; u > c; ) for (var d, p = s(arguments[c++]), h = l ? o(p).concat(l(p)) : o(p), v = h.length, y = 0; v > y; ) f.call(p, (d = h[y++])) && (n[d] = p[d]);
                    return n;
                }
              : u;
  },
  function (e, t) {
      t.f = Object.getOwnPropertySymbols;
  },
  function (e, t) {
      t.f = {}.propertyIsEnumerable;
  },
  function (e, t) {
      function n(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  function (e, t, n) {
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), i(e, o.key, o);
          }
      }
      function r(e, t, n) {
          return t && o(e.prototype, t), n && o(e, n), e;
      }
      var i = n(129);
      (e.exports = r), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(147),
          i = o(r),
          a = n(150),
          s = o(a),
          u = n(36),
          c = o(u),
          l = n(161),
          f = o(l),
          d = n(162),
          p = o(d),
          h = n(163),
          v = o(h),
          y = n(118),
          m = (o(y), n(89)),
          A = { wrapperSelector: "autorows-wrapper", childSelector: "autorows-item-wrapper", imgWrapperSelector: "autorows-image-wrapper" },
          g = { columns: 4, gutter: 5, autoLoadImages: !1, isFullWidthLandscape: !1 },
          w = (function () {
              function e(t) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  if (((0, p.default)(this, e), (this.rootNode = t), (this.config = (0, f.default)({}, g, n)), !this.rootNode.nodeName)) throw new Error("No root element given");
                  t.classList.contains(A.wrapperSelector) || this.rootNode.classList.add(A.wrapperSelector), (this.items = this.setupItems());
              }
              return (
                  (0, v.default)(e, [
                      {
                          key: "setupItems",
                          value: function () {
                              var e = this,
                                  t = (0, c.default)(this.rootNode.querySelectorAll("." + this.config.childSelector));
                              t.forEach(function (t) {
                                  t.classList.add(A.childSelector), t.querySelector("." + e.config.imgWrapperSelector).classList.add(A.imgWrapperSelector);
                              });
                          },
                      },
                      {
                          key: "loadImage",
                          value: function (e) {
                              m.ImageLoader.load(e, { mode: null, load: !0 });
                          },
                      },
                      {
                          key: "getImageRatio",
                          value: function (e) {
                              if ("" !== e.getAttribute("data-image-dimensions")) {
                                  var t = e
                                          .getAttribute("data-image-dimensions")
                                          .split("x")
                                          .map(function (e) {
                                              return parseFloat(e, 10);
                                          }),
                                      n = (0, s.default)(t, 2),
                                      o = n[0],
                                      r = n[1];
                                  return (100 * r) / o;
                              }
                              return 100;
                          },
                      },
                      {
                          key: "setIntrinsicPadding",
                          value: function (e) {
                              var t = this.getImageRatio(e.querySelector("img"));
                              e.style.paddingBottom = t + "%";
                          },
                      },
                      {
                          key: "getRowWidthRatios",
                          value: function (e) {
                              var t = 0,
                                  n = 600,
                                  o = e.map(function (e) {
                                      var o = void 0;
                                      return (o = "" !== e.getAttribute("data-image-dimensions") ? JSON.parse("[" + e.getAttribute("data-image-dimensions").split("x") + "]") : [100, 100]), (t += (o[0] * n) / o[1]), o;
                                  });
                              return o.map(function (e) {
                                  var o = n / e[1];
                                  return (e[0] * o) / t;
                              });
                          },
                      },
                      {
                          key: "positionItemsInRow",
                          value: function (e, t, n, o) {
                              var r = this,
                                  i = 0;
                              e.forEach(function (e, a) {
                                  (e.style.width = t[a] * n + "px"), (e.style.left = i + "px"), (e.style.top = o + "px"), (i += Math.floor(t[a] * n + r.config.gutter));
                              });
                          },
                      },
                      {
                          key: "afterLayout",
                          value: function (e) {
                              (this.rootNode.style.height = e + "px"), "function" == typeof this.config.afterLayout && this.config.afterLayout();
                          },
                      },
                      {
                          key: "layout",
                          value: function () {
                              var e = this,
                                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                              t &&
                                  (0, i.default)(t).forEach(function (n) {
                                      e.config.hasOwnProperty(n) && (e.config[n] = t[n]);
                                  });
                              for (
                                  var n = this.rootNode.offsetWidth - this.config.gutter * (this.config.columns - 1),
                                      o = (0, c.default)(this.rootNode.querySelectorAll("." + this.config.childSelector)),
                                      r = (0, c.default)(this.rootNode.querySelectorAll("." + this.config.imgWrapperSelector + " img")),
                                      a = 0,
                                      s = 0,
                                      u = this.config.columns,
                                      l = 0,
                                      f = o.slice(s, u),
                                      d = r.slice(s, u),
                                      p = o.length;
                                  p > 0;

                              ) {
                                  if ((this.getImageRatio(d[0]) < 100 && this.config.isFullWidthLandscape) || 1 === p)
                                      this.setIntrinsicPadding(d[0].parentNode),
                                          (f[0].style.width = Math.ceil(this.rootNode.offsetWidth) + "px"),
                                          (f[0].style.left = "0px"),
                                          (f[0].style.top = l + "px"),
                                          (l = Math.floor(f[0].offsetTop + f[0].offsetHeight + this.config.gutter - 1)),
                                          (s += 1),
                                          (u += 1),
                                          (f = o.slice(s, u)),
                                          (d = r.slice(s, u)),
                                          p--;
                                  else {
                                      var h = this.getRowWidthRatios(d);
                                      d.forEach(function (t) {
                                          e.setIntrinsicPadding(t.parentNode);
                                      }),
                                          this.positionItemsInRow(f, h, n, l),
                                          (l = Math.floor(f[0].offsetTop + f[0].offsetHeight + this.config.gutter - 1)),
                                          (s += this.config.columns),
                                          (u += this.config.columns),
                                          (p -= this.config.columns),
                                          (f = o.slice(s, u)),
                                          (d = r.slice(s, u));
                                  }
                                  a = l - this.config.gutter;
                              }
                              r.forEach(function (t) {
                                  e.config.autoLoadImages && (t.removeAttribute("data-load"), e.loadImage(t));
                              }),
                                  this.afterLayout(a);
                          },
                      },
                      {
                          key: "reset",
                          value: function () {
                              var e = this,
                                  t = this.rootNode.querySelectorAll("." + this.config.childSelector);
                              (0, c.default)(t).forEach(function (t) {
                                  (t.style.top = ""), (t.style.left = ""), (t.style.width = ""), (t.querySelector("." + e.config.imgWrapperSelector).style.paddingBottom = "");
                              }),
                                  (this.rootNode.style.height = "");
                          },
                      },
                      {
                          key: "afterResize",
                          value: function () {
                              this.reset(), this.layout();
                          },
                      },
                      {
                          key: "destroy",
                          value: function () {
                              var e = this;
                              this.reset(), this.rootNode.classList.remove(A.wrapperSelector);
                              var t = this.rootNode.querySelectorAll("." + A.childSelector);
                              (0, c.default)(t).forEach(function (t) {
                                  t.classList.remove(A.childSelector), t.querySelector("." + e.config.imgWrapperSelector).classList.remove(A.imgWrapperSelector);
                              });
                          },
                      },
                  ]),
                  e
              );
          })();
      t.default = w;
  },
  function (e, t, n) {
      e.exports = { default: n(148), __esModule: !0 };
  },
  function (e, t, n) {
      n(149), (e.exports = n(46).Object.keys);
  },
  function (e, t, n) {
      var o = n(81),
          r = n(65);
      n(137)("keys", function () {
          return function (e) {
              return r(o(e));
          };
      });
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var r = n(151),
          i = o(r),
          a = n(158),
          s = o(a);
      t.default = (function () {
          function e(e, t) {
              var n = [],
                  o = !0,
                  r = !1,
                  i = void 0;
              try {
                  for (var a, u = (0, s.default)(e); !(o = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
              } catch (e) {
                  (r = !0), (i = e);
              } finally {
                  try {
                      !o && u.return && u.return();
                  } finally {
                      if (r) throw i;
                  }
              }
              return n;
          }
          return function (t, n) {
              if (Array.isArray(t)) return t;
              if ((0, i.default)(Object(t))) return e(t, n);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
      })();
  },
  function (e, t, n) {
      e.exports = { default: n(152), __esModule: !0 };
  },
  function (e, t, n) {
      n(153), n(38), (e.exports = n(157));
  },
  function (e, t, n) {
      n(154);
      for (var o = n(45), r = n(49), i = n(61), a = n(79)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
          var c = s[u],
              l = o[c],
              f = l && l.prototype;
          f && !f[a] && r(f, a, c), (i[c] = i.Array);
      }
  },
  function (e, t, n) {
      "use strict";
      var o = n(155),
          r = n(156),
          i = n(61),
          a = n(67);
      (e.exports = n(42)(
          Array,
          "Array",
          function (e, t) {
              (this._t = a(e)), (this._i = 0), (this._k = t);
          },
          function () {
              var e = this._t,
                  t = this._k,
                  n = this._i++;
              return !e || n >= e.length ? ((this._t = void 0), r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]]);
          },
          "values"
      )),
          (i.Arguments = i.Array),
          o("keys"),
          o("values"),
          o("entries");
  },
  function (e, t) {
      e.exports = function () {};
  },
  function (e, t) {
      e.exports = function (e, t) {
          return { value: t, done: !!e };
      };
  },
  function (e, t, n) {
      var o = n(87),
          r = n(79)("iterator"),
          i = n(61);
      e.exports = n(46).isIterable = function (e) {
          var t = Object(e);
          return void 0 !== t[r] || "@@iterator" in t || i.hasOwnProperty(o(t));
      };
  },
  function (e, t, n) {
      e.exports = { default: n(159), __esModule: !0 };
  },
  function (e, t, n) {
      n(153), n(38), (e.exports = n(160));
  },
  function (e, t, n) {
      var o = n(51),
          r = n(86);
      e.exports = n(46).getIterator = function (e) {
          var t = r(e);
          if ("function" != typeof t) throw TypeError(e + " is not iterable!");
          return o(t.call(e));
      };
  },
  function (e, t, n) {
      e.exports = { default: n(139), __esModule: !0 };
  },
  function (e, t) {
      "use strict";
      (t.__esModule = !0),
          (t.default = function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          });
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var r = n(164),
          i = o(r);
      t.default = (function () {
          function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), (0, i.default)(e, o.key, o);
              }
          }
          return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
          };
      })();
  },
  function (e, t, n) {
      e.exports = { default: n(130), __esModule: !0 };
  },
  function (e, t) {
      "use strict";
      e.exports = function () {
          return !!("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch) || window.navigator.msMaxTouchPoints);
      };
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = { isAuthenticated: document.documentElement.classList.contains("authenticated-account"), debug: !0, mobileBreakpoint: 640, tabletBreakpoint: 1024 };
      t.default = n;
  },
  function (e, t) {
      "use strict";
      function n(e) {
          var t = e.querySelector(".sqs-video-wrapper"),
              n = function (e) {
                  e.preventDefault();
                  var n = new window.Y.Squarespace.Lightbox2({ content: window.Y.one(t), controls: { previous: !1, next: !1 } });
                  n.render();
              },
              o = function () {
                  t && (t.parentNode.removeChild(t), e.addEventListener("click", n));
              },
              r = function () {
                  e.removeEventListener("click", n);
              };
          return o(), { sync: o, destroy: r };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = e.querySelector(".site-header"),
              n = void 0,
              o = {
                  header: ".site-header",
                  siteTitle: ".site-branding h1",
                  siteTagline: ".site-tagline",
                  icon: ".nav-toggle",
                  nav: ".main-navigation",
                  socialNav: ".header-social-icons-with-nav",
                  socialRight: ".header-social-icons-right",
                  cartIcon: ".Cart--icon",
                  customerAccountsIcon: ".user-accounts-link--icon",
              },
              r = [
                  "tweak-site-title-font",
                  "tweak-site-tagline-font",
                  "tweak-nav-font",
                  "tweak-logo-height",
                  "tweak-header-outer-padding",
                  "tweak-header-element-spacing",
                  "tweak-display-social-icons",
                  "tweak-social-icons-on-right",
                  "tweak-nav-link-spacing",
                  "tweak-nav-style",
                  "tweak-menu-icon-size",
                  "tweak-template-social-icon-size",
                  "tweak-cart-link-display",
              ],
              i = function (e) {
                  var t = parseFloat(e);
                  return (0, u.default)(t) ? 0 : t;
              },
              s = function (t) {
                  var n = {};
                  return (
                      t.forEach(function (t) {
                          var r = e.querySelector(o[t]);
                          r ? (n[t] = i(window.getComputedStyle(r).width)) : (n[t] = 0);
                      }),
                      n
                  );
              },
              c = function () {
                  var e = "true" === f.Tweak.getValue("tweak-display-social-icons"),
                      r = "icon on right" === f.Tweak.getValue("tweak-cart-link-display").toLowerCase(),
                      i = "icon on right" === f.Tweak.getValue("tweak-user-account-link-position").toLowerCase(),
                      u = window.innerWidth <= v.default.tabletBreakpoint ? 1.5 : 1,
                      c = parseFloat(f.Tweak.getValue("tweak-header-element-spacing")),
                      l = (c * u * window.innerWidth) / 100,
                      d = s((0, a.default)(o)),
                      p = d.siteTitle + d.siteTagline,
                      h = d.header;
                  document.body.classList.remove("mobile-style-nav", "hide-tagline", "move-social"),
                      (h -= d.icon + l),
                      e && (h -= d.socialRight + l),
                      r && (h -= d.cartIcon + l),
                      i && (h -= d.customerAccountsIcon + l),
                      p + n + l > h && document.body.classList.add("mobile-style-nav"),
                      p + l > h && document.body.classList.add("hide-tagline"),
                      d.siteTitle > h && document.body.classList.add("move-social"),
                      t.classList.add("show");
              },
              d = function () {
                  var t = window.getComputedStyle(e.querySelector(".main-navigation")).width;
                  (n = i(parseInt(t, 10))), c();
              },
              h = function () {
                  t.classList.remove("show"), c();
              },
              y = (0, l.default)(h, 120),
              m = function () {
                  t.classList.remove("show"), window.removeEventListener("resize", y);
              },
              A = function () {
                  var t = new p.default([e.querySelector(".site-branding")]);
                  t.check().then(d), window.addEventListener("resize", y);
              };
          return A(), f.Tweak.watch(r, c), { sync: d, destroy: m };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(147),
          a = o(i),
          s = n(169),
          u = o(s),
          c = n(118),
          l = o(c),
          f = n(89),
          d = n(172),
          p = o(d),
          h = n(166),
          v = o(h);
      t.default = r;
  },
  function (e, t, n) {
      e.exports = { default: n(170), __esModule: !0 };
  },
  function (e, t, n) {
      n(171), (e.exports = n(46).Number.isNaN);
  },
  function (e, t, n) {
      var o = n(44);
      o(o.S, "Number", {
          isNaN: function (e) {
              return e != e;
          },
      });
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(173),
          i = o(r);
      t.default = i.default;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(174),
          i = o(r),
          a = n(162),
          s = o(a),
          u = n(163),
          c = o(u),
          l = "#%-&GgWwOoqQLlAaSs680",
          f = (function () {
              function e(t) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
                  (0, s.default)(this, e), this.getFontFamilies(t), this.createFontElements(), (this.initialWidths = this.getWidths()), (this.hasLoaded = !1), (this.maxCheckCount = n);
              }
              return (
                  (0, c.default)(e, [
                      {
                          key: "destroy",
                          value: function () {
                              clearInterval(this.checkInterval);
                              var e = this.testWrapper.parentNode;
                              e && e.removeChild(this.testWrapper);
                          },
                      },
                      {
                          key: "check",
                          value: function () {
                              var e = this;
                              return new i.default(function (t) {
                                  var n = e.maxCheckCount,
                                      o = 0;
                                  e.checkInterval = setInterval(function () {
                                      (o === n || e.allChanged()) && ((e.hasLoaded = !0), t({ checkCount: o, maxCheckCount: n }), e.destroy()), o++;
                                  }, 50);
                              });
                          },
                      },
                      {
                          key: "getFontFamilies",
                          value: function (e) {
                              this.fontFamilies = e.map(function (e) {
                                  return getComputedStyle(e)["font-family"];
                              });
                          },
                      },
                      {
                          key: "createFontElements",
                          value: function () {
                              var e = document.createElement("div");
                              (this.testWrapper = e),
                                  (e.style.cssText = "position: absolute; visibility: hidden; z-index: -1; pointer-events: none;"),
                                  e.setAttribute("aria-role", "hidden"),
                                  this.fontFamilies.forEach(function (t) {
                                      var n = document.createElement("span");
                                      (n.style.cssText = "font-family: " + t + "font-size: 300px; white-space: nowrap;"), n.setAttribute("aria-role", "hidden"), (n.innerHTML = l), e.appendChild(n);
                                  }),
                                  document.body.appendChild(e);
                          },
                      },
                      {
                          key: "getWidths",
                          value: function () {
                              var e = Array.prototype.slice.call(this.testWrapper.childNodes);
                              return e.map(function (e) {
                                  return e.offsetWidth;
                              });
                          },
                      },
                      {
                          key: "allChanged",
                          value: function () {
                              var e = this;
                              return this.getWidths().every(function (t, n) {
                                  return t !== e.initialWidths[n];
                              });
                          },
                      },
                  ]),
                  e
              );
          })();
      t.default = f;
  },
  function (e, t, n) {
      e.exports = { default: n(175), __esModule: !0 };
  },
  function (e, t, n) {
      n(176), n(38), n(153), n(177), (e.exports = n(46).Promise);
  },
  function (e, t) {},
  function (e, t, n) {
      "use strict";
      var o,
          r,
          i,
          a = n(43),
          s = n(45),
          u = n(47),
          c = n(87),
          l = n(44),
          f = n(52),
          d = n(48),
          p = n(178),
          h = n(179),
          v = n(180),
          y = n(181).set,
          m = n(183)(),
          A = "Promise",
          g = s.TypeError,
          w = s.process,
          b = s[A],
          w = s.process,
          _ = "process" == c(w),
          E = function () {},
          k = !!(function () {
              try {
                  var e = b.resolve(1),
                      t = ((e.constructor = {})[n(79)("species")] = function (e) {
                          e(E, E);
                      });
                  return (_ || "function" == typeof PromiseRejectionEvent) && e.then(E) instanceof t;
              } catch (e) {}
          })(),
          x = function (e, t) {
              return e === t || (e === b && t === i);
          },
          L = function (e) {
              var t;
              return !(!f(e) || "function" != typeof (t = e.then)) && t;
          },
          S = function (e) {
              return x(b, e) ? new T(e) : new r(e);
          },
          T = (r = function (e) {
              var t, n;
              (this.promise = new e(function (e, o) {
                  if (void 0 !== t || void 0 !== n) throw g("Bad Promise constructor");
                  (t = e), (n = o);
              })),
                  (this.resolve = d(t)),
                  (this.reject = d(n));
          }),
          M = function (e) {
              try {
                  e();
              } catch (e) {
                  return { error: e };
              }
          },
          O = function (e, t) {
              if (!e._n) {
                  e._n = !0;
                  var n = e._c;
                  m(function () {
                      for (
                          var o = e._v,
                              r = 1 == e._s,
                              i = 0,
                              a = function (t) {
                                  var n,
                                      i,
                                      a = r ? t.ok : t.fail,
                                      s = t.resolve,
                                      u = t.reject,
                                      c = t.domain;
                                  try {
                                      a
                                          ? (r || (2 == e._h && I(e), (e._h = 1)), a === !0 ? (n = o) : (c && c.enter(), (n = a(o)), c && c.exit()), n === t.promise ? u(g("Promise-chain cycle")) : (i = L(n)) ? i.call(n, s, u) : s(n))
                                          : u(o);
                                  } catch (e) {
                                      u(e);
                                  }
                              };
                          n.length > i;

                      )
                          a(n[i++]);
                      (e._c = []), (e._n = !1), t && !e._h && P(e);
                  });
              }
          },
          P = function (e) {
              y.call(s, function () {
                  var t,
                      n,
                      o,
                      r = e._v;
                  if (
                      (j(e) &&
                          ((t = M(function () {
                              _ ? w.emit("unhandledRejection", r, e) : (n = s.onunhandledrejection) ? n({ promise: e, reason: r }) : (o = s.console) && o.error && o.error("Unhandled promise rejection", r);
                          })),
                          (e._h = _ || j(e) ? 2 : 1)),
                      (e._a = void 0),
                      t)
                  )
                      throw t.error;
              });
          },
          j = function (e) {
              if (1 == e._h) return !1;
              for (var t, n = e._a || e._c, o = 0; n.length > o; ) if (((t = n[o++]), t.fail || !j(t.promise))) return !1;
              return !0;
          },
          I = function (e) {
              y.call(s, function () {
                  var t;
                  _ ? w.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({ promise: e, reason: e._v });
              });
          },
          C = function (e) {
              var t = this;
              t._d || ((t._d = !0), (t = t._w || t), (t._v = e), (t._s = 2), t._a || (t._a = t._c.slice()), O(t, !0));
          },
          R = function (e) {
              var t,
                  n = this;
              if (!n._d) {
                  (n._d = !0), (n = n._w || n);
                  try {
                      if (n === e) throw g("Promise can't be resolved itself");
                      (t = L(e))
                          ? m(function () {
                                var o = { _w: n, _d: !1 };
                                try {
                                    t.call(e, u(R, o, 1), u(C, o, 1));
                                } catch (e) {
                                    C.call(o, e);
                                }
                            })
                          : ((n._v = e), (n._s = 1), O(n, !1));
                  } catch (e) {
                      C.call({ _w: n, _d: !1 }, e);
                  }
              }
          };
      k ||
          ((b = function (e) {
              p(this, b, A, "_h"), d(e), o.call(this);
              try {
                  e(u(R, this, 1), u(C, this, 1));
              } catch (e) {
                  C.call(this, e);
              }
          }),
          (o = function (e) {
              (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
          }),
          (o.prototype = n(184)(b.prototype, {
              then: function (e, t) {
                  var n = S(v(this, b));
                  return (n.ok = "function" != typeof e || e), (n.fail = "function" == typeof t && t), (n.domain = _ ? w.domain : void 0), this._c.push(n), this._a && this._a.push(n), this._s && O(this, !1), n.promise;
              },
              catch: function (e) {
                  return this.then(void 0, e);
              },
          })),
          (T = function () {
              var e = new o();
              (this.promise = e), (this.resolve = u(R, e, 1)), (this.reject = u(C, e, 1));
          })),
          l(l.G + l.W + l.F * !k, { Promise: b }),
          n(78)(b, A),
          n(185)(A),
          (i = n(46)[A]),
          l(l.S + l.F * !k, A, {
              reject: function (e) {
                  var t = S(this),
                      n = t.reject;
                  return n(e), t.promise;
              },
          }),
          l(l.S + l.F * (a || !k), A, {
              resolve: function (e) {
                  if (e instanceof b && x(e.constructor, this)) return e;
                  var t = S(this),
                      n = t.resolve;
                  return n(e), t.promise;
              },
          }),
          l(
              l.S +
                  l.F *
                      !(
                          k &&
                          n(88)(function (e) {
                              b.all(e).catch(E);
                          })
                      ),
              A,
              {
                  all: function (e) {
                      var t = this,
                          n = S(t),
                          o = n.resolve,
                          r = n.reject,
                          i = M(function () {
                              var n = [],
                                  i = 0,
                                  a = 1;
                              h(e, !1, function (e) {
                                  var s = i++,
                                      u = !1;
                                  n.push(void 0),
                                      a++,
                                      t.resolve(e).then(function (e) {
                                          u || ((u = !0), (n[s] = e), --a || o(n));
                                      }, r);
                              }),
                                  --a || o(n);
                          });
                      return i && r(i.error), n.promise;
                  },
                  race: function (e) {
                      var t = this,
                          n = S(t),
                          o = n.reject,
                          r = M(function () {
                              h(e, !1, function (e) {
                                  t.resolve(e).then(n.resolve, o);
                              });
                          });
                      return r && o(r.error), n.promise;
                  },
              }
          );
  },
  function (e, t) {
      e.exports = function (e, t, n, o) {
          if (!(e instanceof t) || (void 0 !== o && o in e)) throw TypeError(n + ": incorrect invocation!");
          return e;
      };
  },
  function (e, t, n) {
      var o = n(47),
          r = n(83),
          i = n(84),
          a = n(51),
          s = n(71),
          u = n(86),
          c = {},
          l = {},
          t = (e.exports = function (e, t, n, f, d) {
              var p,
                  h,
                  v,
                  y,
                  m = d
                      ? function () {
                            return e;
                        }
                      : u(e),
                  A = o(n, f, t ? 2 : 1),
                  g = 0;
              if ("function" != typeof m) throw TypeError(e + " is not iterable!");
              if (i(m)) {
                  for (p = s(e.length); p > g; g++) if (((y = t ? A(a((h = e[g]))[0], h[1]) : A(e[g])), y === c || y === l)) return y;
              } else for (v = m.call(e); !(h = v.next()).done; ) if (((y = r(v, A, h.value, t)), y === c || y === l)) return y;
          });
      (t.BREAK = c), (t.RETURN = l);
  },
  function (e, t, n) {
      var o = n(51),
          r = n(48),
          i = n(79)("species");
      e.exports = function (e, t) {
          var n,
              a = o(e).constructor;
          return void 0 === a || void 0 == (n = o(a)[i]) ? t : r(n);
      };
  },
  function (e, t, n) {
      var o,
          r,
          i,
          a = n(47),
          s = n(182),
          u = n(77),
          c = n(56),
          l = n(45),
          f = l.process,
          d = l.setImmediate,
          p = l.clearImmediate,
          h = l.MessageChannel,
          v = 0,
          y = {},
          m = "onreadystatechange",
          A = function () {
              var e = +this;
              if (y.hasOwnProperty(e)) {
                  var t = y[e];
                  delete y[e], t();
              }
          },
          g = function (e) {
              A.call(e.data);
          };
      (d && p) ||
          ((d = function (e) {
              for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
              return (
                  (y[++v] = function () {
                      s("function" == typeof e ? e : Function(e), t);
                  }),
                  o(v),
                  v
              );
          }),
          (p = function (e) {
              delete y[e];
          }),
          "process" == n(69)(f)
              ? (o = function (e) {
                    f.nextTick(a(A, e, 1));
                })
              : h
              ? ((r = new h()), (i = r.port2), (r.port1.onmessage = g), (o = a(i.postMessage, i, 1)))
              : l.addEventListener && "function" == typeof postMessage && !l.importScripts
              ? ((o = function (e) {
                    l.postMessage(e + "", "*");
                }),
                l.addEventListener("message", g, !1))
              : (o =
                    m in c("script")
                        ? function (e) {
                              u.appendChild(c("script"))[m] = function () {
                                  u.removeChild(this), A.call(e);
                              };
                          }
                        : function (e) {
                              setTimeout(a(A, e, 1), 0);
                          })),
          (e.exports = { set: d, clear: p });
  },
  function (e, t) {
      e.exports = function (e, t, n) {
          var o = void 0 === n;
          switch (t.length) {
              case 0:
                  return o ? e() : e.call(n);
              case 1:
                  return o ? e(t[0]) : e.call(n, t[0]);
              case 2:
                  return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
              case 3:
                  return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
              case 4:
                  return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
          }
          return e.apply(n, t);
      };
  },
  function (e, t, n) {
      var o = n(45),
          r = n(181).set,
          i = o.MutationObserver || o.WebKitMutationObserver,
          a = o.process,
          s = o.Promise,
          u = "process" == n(69)(a);
      e.exports = function () {
          var e,
              t,
              n,
              c = function () {
                  var o, r;
                  for (u && (o = a.domain) && o.exit(); e; ) {
                      (r = e.fn), (e = e.next);
                      try {
                          r();
                      } catch (o) {
                          throw (e ? n() : (t = void 0), o);
                      }
                  }
                  (t = void 0), o && o.enter();
              };
          if (u)
              n = function () {
                  a.nextTick(c);
              };
          else if (i) {
              var l = !0,
                  f = document.createTextNode("");
              new i(c).observe(f, { characterData: !0 }),
                  (n = function () {
                      f.data = l = !l;
                  });
          } else if (s && s.resolve) {
              var d = s.resolve();
              n = function () {
                  d.then(c);
              };
          } else
              n = function () {
                  r.call(o, c);
              };
          return function (o) {
              var r = { fn: o, next: void 0 };
              t && (t.next = r), e || ((e = r), n()), (t = r);
          };
      };
  },
  function (e, t, n) {
      var o = n(49);
      e.exports = function (e, t, n) {
          for (var r in t) n && e[r] ? (e[r] = t[r]) : o(e, r, t[r]);
          return e;
      };
  },
  function (e, t, n) {
      "use strict";
      var o = n(45),
          r = n(46),
          i = n(50),
          a = n(54),
          s = n(79)("species");
      e.exports = function (e) {
          var t = "function" == typeof r[e] ? r[e] : o[e];
          a &&
              t &&
              !t[s] &&
              i.f(t, s, {
                  configurable: !0,
                  get: function () {
                      return this;
                  },
              });
      };
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = void 0,
              n = e.querySelector(".site-header"),
              o = function () {
                  var o = window.pageYOffset,
                      r = e.offsetHeight;
                  o > 0 && n.classList.add("hide-header"),
                      (o < t || o >= r || 0 === o) && n.classList.remove("hide-header"),
                      document.body.classList.remove("swap-header-color"),
                      o >= r - 40 && document.body.classList.add("swap-header-color"),
                      (t = window.pageYOffset);
              },
              r = (0, a.default)(o, 10),
              i = function () {
                  t = window.pageYOffset;
              },
              s = function () {
                  window.removeEventListener("scroll", r), i(), window.addEventListener("scroll", r);
              },
              c = (0, u.default)(s, 120);
          window.addEventListener("resize", c), window.addEventListener("scroll", r);
          var l = function () {
              n.classList.remove("hide-header"), document.body.classList.remove("swap-header-color"), window.removeEventListener("scroll", r), window.removeEventListener("resize", c);
          };
          return (
              (window.onLoad = function () {
                  i();
              }),
              { sync: i, destroy: l }
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(187),
          a = o(i),
          s = n(118),
          u = o(s);
      t.default = r;
  },
  function (e, t, n) {
      function o(e, t, n) {
          var o = !0,
              s = !0;
          if ("function" != typeof e) throw new TypeError(a);
          return i(n) && ((o = "leading" in n ? !!n.leading : o), (s = "trailing" in n ? !!n.trailing : s)), r(e, t, { leading: o, maxWait: t, trailing: s });
      }
      var r = n(118),
          i = n(119),
          a = "Expected a function";
      e.exports = o;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = void 0,
              n = ["tweak-site-outer-padding", "tweak-index-slideshow-on", "tweak-index-slideshow-delay", "tweak-index-inactive-on-load"],
              o = e.querySelector(".index-main-image"),
              r = function () {
                  e.classList.remove("hide-desc"),
                      d() || ((0, c.default)() && p())
                          ? (t && t.destroy(),
                            (t = new s.default(e, {
                                selector: v(),
                                slideshowDelay: h(),
                                afterSetSlide: function (t) {
                                    var n = t === o;
                                    f() && !n ? e.classList.add("hide-desc") : e.classList.remove("hide-desc");
                                },
                            })),
                            t.init())
                          : t && t.destroy();
              },
              a = function () {
                  t && t.destroy();
              };
          return i.Tweak.watch(n, r), r(), { destroy: a };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(89),
          a = n(189),
          s = o(a),
          u = n(165),
          c = o(u),
          l = function () {
              return "true" === i.Tweak.getValue("tweak-index-inactive-on-load");
          },
          f = function () {
              return "true" === i.Tweak.getValue("tweak-hide-index-desc-on-hover");
          },
          d = function () {
              return "true" === i.Tweak.getValue("tweak-index-slideshow-on");
          },
          p = function () {
              return "true" === i.Tweak.getValue("tweak-index-slideshow-touch-on");
          },
          h = function () {
              return 1e3 * parseFloat(i.Tweak.getValue("tweak-index-slideshow-delay"));
          },
          v = function () {
              return l() ? ".collection-images .image-container" : ".collection-images .image-container:not(.index-main-image)";
          };
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      var r = n(36),
          i = o(r),
          a = n(162),
          s = o(a),
          u = n(163),
          c = o(u),
          l = n(190),
          f = ".collection-nav",
          d = (function () {
              function e(t) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  (0, s.default)(this, e),
                      (this.rootNode = t),
                      (this.config = n),
                      (this.imageWrappers = (0, i.default)(t.querySelectorAll(n.selector))),
                      (this.collectionNav = t.querySelector(f)),
                      (this.collectionLinks = (0, i.default)(t.querySelectorAll(f + " div"))),
                      (this.slideInterval = null),
                      (this._currentSlide = 0),
                      (this.boundHandleMouseover = this.handleMouseover.bind(this)),
                      (this.boundHandleMouseleave = this.handleMouseleave.bind(this));
              }
              return (
                  (0, c.default)(e, [
                      {
                          key: "startSlideshow",
                          value: function () {
                              var e = this;
                              this.rootNode.classList.remove("animation-paused"),
                                  (this.slideInterval = setInterval(function () {
                                      "number" == typeof e.currentSlide && e.currentSlide < e.imageWrappers.length - 1 ? e.currentSlide++ : (e.currentSlide = 0);
                                  }, this.config.slideshowDelay));
                          },
                      },
                      {
                          key: "handleMouseover",
                          value: function (e) {
                              e.target.classList.contains("collection-nav-item-span") && (this.slideInterval && clearInterval(this.slideInterval), this.rootNode.classList.add("animation-paused"));
                          },
                      },
                      {
                          key: "handleMouseleave",
                          value: function () {
                              this.slideInterval && clearInterval(this.slideInterval),
                                  (0, l.setActive)(this.imageWrappers[this.currentSlide]),
                                  (0, l.setActive)((0, l.getCurrentLink)(this.imageWrappers[this._currentSlide], this.collectionLinks)),
                                  this.startSlideshow();
                          },
                      },
                      {
                          key: "destroy",
                          value: function () {
                              this.slideInterval && clearInterval(this.slideInterval),
                                  this.collectionNav.removeEventListener("mouseover", this.boundHandleMouseover),
                                  this.collectionNav.removeEventListener("mouseleave", this.boundHandleMouseleave);
                          },
                      },
                      {
                          key: "init",
                          value: function () {
                              this.startSlideshow(), this.collectionNav.addEventListener("mouseover", this.boundHandleMouseover), this.collectionNav.addEventListener("mouseleave", this.boundHandleMouseleave);
                          },
                      },
                      {
                          key: "currentSlide",
                          get: function () {
                              return this._currentSlide;
                          },
                          set: function (e) {
                              (this._currentSlide = e || 0),
                                  this.imageWrappers.forEach(l.removeActive),
                                  this.collectionLinks.forEach(l.removeActive),
                                  (0, l.setActive)(this.imageWrappers[e]),
                                  (0, l.setActive)((0, l.getCurrentLink)(this.imageWrappers[e], this.collectionLinks)),
                                  "function" == typeof this.config.afterSetSlide && this.config.afterSetSlide(this.imageWrappers[e], e);
                          },
                      },
                  ]),
                  e
              );
          })();
      e.exports = d;
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      (t.setActive = function (e) {
          return e && e.classList.add("active");
      }),
          (t.removeActive = function (e) {
              return e && e.classList.remove("active");
          }),
          (t.getCurrentLink = function (e, t) {
              return t.find(function (t) {
                  return t.getAttribute("data-url-id") === e.getAttribute("data-url-id");
              });
          });
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = e.querySelector(".collection-nav"),
              n = e.querySelector(".collection-nav-desc-wrapper"),
              o = e.querySelector(".collection-desc"),
              r = document.querySelector(".site-header"),
              i = function () {
                  return {
                      descPosition: s.Tweak.getValue("tweak-index-desc-position").toLowerCase(),
                      descVisible: "true" === s.Tweak.getValue("tweak-show-index-desc"),
                      hasDescription: null !== o,
                      menuDescSpacing: parseFloat(s.Tweak.getValue("tweak-index-menu-desc-spacing")),
                      menuPadding: parseFloat(s.Tweak.getValue("tweak-index-menu-padding")),
                      menuPosition: s.Tweak.getValue("tweak-index-nav-position").toLowerCase(),
                      spacingMultiplier: window.innerWidth <= f.default.tabletBreakpoint ? 1.5 : 1,
                  };
              },
              u = [
                  "tweak-header-outer-padding",
                  "tweak-logo-height",
                  "tweak-index-menu-font",
                  "tweak-site-outer-padding",
                  "tweak-index-menu-font-min",
                  "tweak-index-desc-font",
                  "tweak-index-desc-font-min",
                  "tweak-index-nav-position",
                  "tweak-index-nav-layout",
                  "tweak-index-menu-max-width",
                  "tweak-index-menu-spacing",
                  "tweak-index-menu-padding",
                  "tweak-index-desc-position",
                  "tweak-index-desc-max-width",
                  "tweak-index-menu-desc-spacing",
                  "tweak-show-index-desc",
              ],
              l = function (e, i) {
                  var a = r.offsetHeight,
                      s = (e.menuPadding * window.innerWidth) / 100,
                      u = window.innerHeight,
                      c = i ? n : t,
                      l = "left" === e.menuPosition || "center" === e.menuPosition,
                      f = u - a - s;
                  e.descVisible && e.hasDescription && "middle" === e.descPosition && !i
                      ? (f = u / 2 - o.offsetHeight / 2 - s)
                      : e.descVisible && e.hasDescription && l && !i
                      ? (f = u - 2 * o.getBoundingClientRect().bottom)
                      : e.descVisible && e.hasDescription && !i
                      ? (f = u - o.getBoundingClientRect().bottom - s)
                      : !e.descVisible && l && (f = u - 2 * a);
                  var d = c.offsetHeight;
                  return d > f;
              },
              d = function () {
                  n.classList.remove("too-tall", "show"), (t.style.cssText = ""), (n.style.cssText = "");
              },
              p = function () {
                  var e = i(),
                      a = "middle" === e.descPosition && ("left" === e.menuPosition || "center" === e.menuPosition),
                      s = r.offsetHeight;
                  if (
                      (e.descVisible && e.hasDescription && "middle" === e.descPosition && !a ? (s = window.innerHeight / 2 + o.offsetHeight / 2) : e.descVisible && e.hasDescription && !a && (s = o.getBoundingClientRect().bottom),
                      l(e, a))
                  ) {
                      var u = a ? n : t;
                      n.classList.add("too-tall"), (u.style.top = s + "px"), (u.style.bottom = "auto"), (u.style.paddingBottom = e.menuPadding + "vw");
                  }
                  n.classList.add("show");
              },
              h = function () {
                  d(), p();
              },
              v = (0, a.default)(h, 120),
              y = function () {
                  window.removeEventListener("resize", v);
              },
              m = function () {
                  var t = new c.default([e.querySelector(".collection-nav")]);
                  t.check().then(p), window.addEventListener("resize", v);
              };
          return (
              m(),
              s.Tweak.watch(u, function (e) {
                  d(), p();
              }),
              { destroy: y }
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(118),
          a = o(i),
          s = n(89),
          u = n(172),
          c = o(u),
          l = n(166),
          f = o(l);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = void 0,
              n = function () {
                  var n = window.pageYOffset;
                  n >= t - 20 ? e.classList.add("scrollable") : e.classList.remove("scrollable");
              },
              o = (0, a.default)(n, 10),
              r = function () {
                  (t = document.querySelector(".content-outer-wrapper").offsetHeight), window.addEventListener("scroll", o);
              },
              i = function () {
                  window.removeEventListener("scroll", o), r();
              },
              s = (0, u.default)(i, 120),
              c = function () {
                  window.removeEventListener("scroll", o), window.removeEventListener("resize", s);
              };
          return (
              window.addEventListener("resize", s),
              (0, l.default)(document.querySelector(".content-outer-wrapper"), function () {
                  r();
              }),
              { destroy: c }
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(187),
          a = o(i),
          s = n(118),
          u = o(s),
          c = n(193),
          l = o(c);
      t.default = r;
  },
  function (e, t, n) {
      var o, r;
      /*!
       * imagesLoaded v4.1.0
       * JavaScript is all like "You images are done yet or what?"
       * MIT License
       */
      !(function (i, a) {
          "use strict";
          (o = [n(194)]),
              (r = function (e) {
                  return a(i, e);
              }.apply(t, o)),
              !(void 0 !== r && (e.exports = r));
      })(window, function (e, t) {
          "use strict";
          function n(e, t) {
              for (var n in t) e[n] = t[n];
              return e;
          }
          function o(e) {
              var t = [];
              if (Array.isArray(e)) t = e;
              else if ("number" == typeof e.length) for (var n = 0; n < e.length; n++) t.push(e[n]);
              else t.push(e);
              return t;
          }
          function r(e, t, i) {
              return this instanceof r
                  ? ("string" == typeof e && (e = document.querySelectorAll(e)),
                    (this.elements = o(e)),
                    (this.options = n({}, this.options)),
                    "function" == typeof t ? (i = t) : n(this.options, t),
                    i && this.on("always", i),
                    this.getImages(),
                    s && (this.jqDeferred = new s.Deferred()),
                    void setTimeout(
                        function () {
                            this.check();
                        }.bind(this)
                    ))
                  : new r(e, t, i);
          }
          function i(e) {
              this.img = e;
          }
          function a(e, t) {
              (this.url = e), (this.element = t), (this.img = new Image());
          }
          var s = e.jQuery,
              u = e.console;
          (r.prototype = Object.create(t.prototype)),
              (r.prototype.options = {}),
              (r.prototype.getImages = function () {
                  (this.images = []), this.elements.forEach(this.addElementImages, this);
              }),
              (r.prototype.addElementImages = function (e) {
                  "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
                  var t = e.nodeType;
                  if (t && c[t]) {
                      for (var n = e.querySelectorAll("img"), o = 0; o < n.length; o++) {
                          var r = n[o];
                          this.addImage(r);
                      }
                      if ("string" == typeof this.options.background) {
                          var i = e.querySelectorAll(this.options.background);
                          for (o = 0; o < i.length; o++) {
                              var a = i[o];
                              this.addElementBackgroundImages(a);
                          }
                      }
                  }
              });
          var c = { 1: !0, 9: !0, 11: !0 };
          return (
              (r.prototype.addElementBackgroundImages = function (e) {
                  var t = getComputedStyle(e);
                  if (t)
                      for (var n = /url\((['"])?(.*?)\1\)/gi, o = n.exec(t.backgroundImage); null !== o; ) {
                          var r = o && o[2];
                          r && this.addBackground(r, e), (o = n.exec(t.backgroundImage));
                      }
              }),
              (r.prototype.addImage = function (e) {
                  var t = new i(e);
                  this.images.push(t);
              }),
              (r.prototype.addBackground = function (e, t) {
                  var n = new a(e, t);
                  this.images.push(n);
              }),
              (r.prototype.check = function () {
                  function e(e, n, o) {
                      setTimeout(function () {
                          t.progress(e, n, o);
                      });
                  }
                  var t = this;
                  return (
                      (this.progressedCount = 0),
                      (this.hasAnyBroken = !1),
                      this.images.length
                          ? void this.images.forEach(function (t) {
                                t.once("progress", e), t.check();
                            })
                          : void this.complete()
                  );
              }),
              (r.prototype.progress = function (e, t, n) {
                  this.progressedCount++,
                      (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                      this.emitEvent("progress", [this, e, t]),
                      this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
                      this.progressedCount == this.images.length && this.complete(),
                      this.options.debug && u && u.log("progress: " + n, e, t);
              }),
              (r.prototype.complete = function () {
                  var e = this.hasAnyBroken ? "fail" : "done";
                  if (((this.isComplete = !0), this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                      var t = this.hasAnyBroken ? "reject" : "resolve";
                      this.jqDeferred[t](this);
                  }
              }),
              (i.prototype = Object.create(t.prototype)),
              (i.prototype.check = function () {
                  var e = this.getIsImageComplete();
                  return e
                      ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                      : ((this.proxyImage = new Image()),
                        this.proxyImage.addEventListener("load", this),
                        this.proxyImage.addEventListener("error", this),
                        this.img.addEventListener("load", this),
                        this.img.addEventListener("error", this),
                        void (this.proxyImage.src = this.img.src));
              }),
              (i.prototype.getIsImageComplete = function () {
                  return this.img.complete && void 0 !== this.img.naturalWidth;
              }),
              (i.prototype.confirm = function (e, t) {
                  (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
              }),
              (i.prototype.handleEvent = function (e) {
                  var t = "on" + e.type;
                  this[t] && this[t](e);
              }),
              (i.prototype.onload = function () {
                  this.confirm(!0, "onload"), this.unbindEvents();
              }),
              (i.prototype.onerror = function () {
                  this.confirm(!1, "onerror"), this.unbindEvents();
              }),
              (i.prototype.unbindEvents = function () {
                  this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
              }),
              (a.prototype = Object.create(i.prototype)),
              (a.prototype.check = function () {
                  this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
                  var e = this.getIsImageComplete();
                  e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
              }),
              (a.prototype.unbindEvents = function () {
                  this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
              }),
              (a.prototype.confirm = function (e, t) {
                  (this.isLoaded = e), this.emitEvent("progress", [this, this.element, t]);
              }),
              (r.makeJQueryPlugin = function (t) {
                  (t = t || e.jQuery),
                      t &&
                          ((s = t),
                          (s.fn.imagesLoaded = function (e, t) {
                              var n = new r(this, e, t);
                              return n.jqDeferred.promise(s(this));
                          }));
              }),
              r.makeJQueryPlugin(),
              r
          );
      });
  },
  function (e, t, n) {
      var o, r;
      !(function (i, a) {
          (o = a), (r = "function" == typeof o ? o.call(t, n, t, e) : o), !(void 0 !== r && (e.exports = r));
      })("undefined" != typeof window ? window : this, function () {
          "use strict";
          function e() {}
          var t = e.prototype;
          return (
              (t.on = function (e, t) {
                  if (e && t) {
                      var n = (this._events = this._events || {}),
                          o = (n[e] = n[e] || []);
                      return o.indexOf(t) == -1 && o.push(t), this;
                  }
              }),
              (t.once = function (e, t) {
                  if (e && t) {
                      this.on(e, t);
                      var n = (this._onceEvents = this._onceEvents || {}),
                          o = (n[e] = n[e] || {});
                      return (o[t] = !0), this;
                  }
              }),
              (t.off = function (e, t) {
                  var n = this._events && this._events[e];
                  if (n && n.length) {
                      var o = n.indexOf(t);
                      return o != -1 && n.splice(o, 1), this;
                  }
              }),
              (t.emitEvent = function (e, t) {
                  var n = this._events && this._events[e];
                  if (n && n.length) {
                      var o = 0,
                          r = n[o];
                      t = t || [];
                      for (var i = this._onceEvents && this._onceEvents[e]; r; ) {
                          var a = i && i[r];
                          a && (this.off(e, r), delete i[r]), r.apply(this, t), (o += a ? 0 : 1), (r = n[o]);
                      }
                      return this;
                  }
              }),
              e
          );
      });
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = e.querySelector(".collection-nav"),
              n = (0, a.default)(e.querySelectorAll(".collection-nav-item")),
              o = (0, a.default)(e.querySelectorAll(".collection-images .image-container")),
              r = (0, a.default)(e.querySelectorAll(".collection-images .image-container img[data-src]")),
              i = "true" === f.Tweak.getValue("tweak-hide-index-desc-on-hover"),
              s = "true" === f.Tweak.getValue("tweak-index-slideshow-on"),
              c = n.find(h),
              v = o.find(h),
              y = function () {
                  var t = "true" === f.Tweak.getValue("tweak-index-inactive-on-load");
                  return t && !e.classList.contains("index-item-navigation");
              },
              m = function (t) {
                  if (t.target.classList.contains("collection-nav-item-span")) {
                      var r = t.target.closest("[data-url-id]"),
                          a = r.getAttribute("data-url-id"),
                          s = e.querySelector('.collection-images .image-container[data-url-id="' + a + '"]');
                      n.forEach(d.removeActive), o.forEach(d.removeActive), (0, d.setActive)(r), (0, d.setActive)(s), e.classList.add("nav-hovered"), i && e.classList.add("hide-desc");
                  }
              },
              A = function () {
                  n.forEach(d.removeActive),
                      o.forEach(d.removeActive),
                      (s && !e.classList.contains("index-item-navigation")) || (c ? ((0, d.setActive)(c), (0, d.setActive)(v)) : y() ? (0, d.setActive)(o[0]) : ((0, d.setActive)(o[1]), (0, d.setActive)((0, d.getCurrentLink)(o[1], n)))),
                      e.classList.remove("nav-hovered"),
                      s || e.classList.remove("hide-desc");
              },
              g = function () {
                  r.forEach(function (e) {
                      f.ImageLoader.load(e, { mode: "fill", load: !0 });
                  });
              },
              w = function () {
                  (e.style.height = window.innerHeight + "px"), g();
              },
              b = (0, u.default)(w, 120),
              _ = function () {
                  t.addEventListener("mouseover", m), t.addEventListener("mouseleave", A), window.addEventListener("resize", b);
              },
              E = function () {
                  t.removeEventListener("mouseover", m), t.removeEventListener("mouseleave", A), window.removeEventListener("resize", b);
              },
              k = function () {
                  (0, l.default)() && e.classList.add("has-touch"),
                      (e.style.height = window.innerHeight + "px"),
                      _(),
                      g(),
                      e.classList.contains("index-item-navigation") && c ? ((0, d.setActive)(c), (0, d.setActive)(v)) : y() ? (0, d.setActive)(o[0]) : ((0, d.setActive)(o[1]), (0, d.setActive)((0, d.getCurrentLink)(o[1], n)));
              },
              x = function () {
                  E(), _(), n.forEach(d.removeActive), o.forEach(d.removeActive), y() ? (0, d.setActive)(o[0]) : ((0, d.setActive)(o[1]), (0, d.setActive)((0, d.getCurrentLink)(o[1], n)));
              };
          return f.Tweak.watch(p, x), k(), { destroy: E };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(36),
          a = o(i),
          s = n(118),
          u = o(s);
      n(196);
      var c = n(165),
          l = o(c),
          f = n(89),
          d = n(190),
          p = ["tweak-index-inactive-on-load", "tweak-index-slideshow-on", "tweak-hide-index-desc-on-hover"],
          h = function (e) {
              return e.classList.contains("active-page");
          };
      t.default = r;
  },
  function (e, t, n) {
      n(116),
          (function (e) {
              "function" != typeof e.closest &&
                  (e.closest = function (e) {
                      for (var t = this; t && 1 === t.nodeType; ) {
                          if (t.matches(e)) return t;
                          t = t.parentNode;
                      }
                      return null;
                  });
          })(window.Element.prototype);
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = e.querySelector(".collection-desc"),
              n = document.querySelector(".site-header"),
              o = function () {
                  t.style.top = n.offsetHeight + "px";
              },
              r = (0, a.default)(o, 120),
              i = function (e) {
                  (t.style.top = ""), window.removeEventListener("resize", r), "top" === e.value.toLowerCase() && (o(), window.addEventListener("resize", r));
              },
              u = function () {
                  window.removeEventListener("resize", r);
              },
              c = function () {
                  var e = "top" === s.Tweak.getValue("tweak-index-desc-position").toLowerCase();
                  t && e && (o(), window.addEventListener("resize", r));
              };
          return c(), s.Tweak.watch("tweak-index-desc-position", i), { destroy: u };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(118),
          a = o(i),
          s = n(89);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = e.querySelector(".main-content"),
              n = e.querySelector(".site-header"),
              o = function () {
                  var o = e.classList.contains("collection-type-gallery") || e.classList.contains("collection-type-index");
                  t.style.paddingTop = "";
                  var r =
                      e.matches(".tweak-show-page-banner-image-always.has-main-image:not(.view-item)") ||
                      e.matches(".tweak-show-page-banner-image-in-index.has-index-nav.has-main-image:not(.view-item)") ||
                      e.matches(".tweak-show-page-banner-image-not-in-index:not(.has-index-nav).has-main-image:not(.view-item)");
                  if (!o && !r) {
                      var i = n.offsetHeight;
                      t.style.paddingTop = i + "px";
                  }
              },
              r = (0, a.default)(o, 120),
              i = [
                  "tweak-header-outer-padding",
                  "tweak-display-social-icons",
                  "tweak-site-title-font",
                  "tweak-site-tagline-font",
                  "tweak-logo-height",
                  "tweak-nav-font",
                  "tweak-menu-icon-size",
                  "tweak-nav-style",
                  "tweak-template-social-icon-size",
                  "tweak-show-page-banner-image",
              ],
              u = function () {
                  window.removeEventListener("resize", r);
              };
          return o(), window.addEventListener("resize", r), s.Tweak.watch(i, o), { sync: o, destroy: u };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(118),
          a = o(i);
      n(116);
      var s = n(89);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = document.querySelector(".sqs-slide-container"),
              n = "true" === c.Tweak.getValue("tweak-site-ajax-loading-enable");
          if (n && !a.default.isAuthenticated && !t) {
              new f.default({
                  enableCache: !0,
                  updateMatrix: [
                      { selector: "body", updateHTML: !1, updateAttrs: !0 },
                      { selector: "head meta", updateHTML: !1, updateAttrs: !0 },
                      { selector: "head title", updateHTML: !0, updateAttrs: !0 },
                      { selector: ".content-outer-wrapper", updateHTML: !1, updateAttrs: !0 },
                      { selector: ".index-gallery-wrapper", updateHTML: !1, updateAttrs: !0 },
                      { selector: ".gallery-wrapper", updateHTML: !1, updateAttrs: !0 },
                      { selector: ".nav-item.folder", updateHTML: !1, updateAttrs: !0 },
                      { selector: ".main-content", updateHTML: !0, updateAttrs: !1 },
                      { selector: ".index-nav", updateHTML: !0, updateAttrs: !1 },
                      { selector: ".page-banner-wrapper", updateHTML: !1, updateAttrs: !0 },
                      { selector: ".page-banner-image-wrapper", updateHTML: !1, updateAttrs: !0 },
                      { selector: ".title-card-wrapper", updateHTML: !1, updateAttrs: !0 },
                      { selector: ".main-navigation", updateHTML: !1, updateAttrs: !0 },
                      { selector: ".header-social-icons-with-nav", updateHMTL: !1, updateAttrs: !0 },
                      { selector: ".header-social-icons-on-right", updateHMTL: !1, updateAttrs: !0 },
                      { selector: ".header-social-icons--overlay", updateHMTL: !1, updateAttrs: !0 },
                      { selector: ".overlay-nav-wrapper", updateHMTL: !1, updateAttrs: !0 },
                      { selector: 'meta[property="og:title"]', updateAttrs: !0 },
                      { selector: 'meta[property="og:latitude"]', updateAttrs: !0 },
                      { selector: 'meta[property="og:longitude"]', updateAttrs: !0 },
                      { selector: 'meta[property="og:url"]', updateAttrs: !0 },
                      { selector: 'meta[property="og:type"]', updateAttrs: !0 },
                      { selector: 'meta[property="og:description"]', updateAttrs: !0 },
                      { selector: 'meta[property="og:image"]', updateAttrs: !0 },
                      { selector: 'meta[itemprop="name"]', updateAttrs: !0 },
                      { selector: 'meta[itemprop="url"]', updateAttrs: !0 },
                      { selector: 'meta[itemprop="description"]', updateAttrs: !0 },
                      { selector: 'meta[itemprop="thumbnailUrl"]', updateAttrs: !0 },
                      { selector: 'meta[itemprop="image"]', updateAttrs: !0 },
                      { selector: 'meta[name="twitter:title"]', updateAttrs: !0 },
                      { selector: 'meta[name="twitter:image"]', updateAttrs: !0 },
                      { selector: 'meta[name="twitter:url"]', updateAttrs: !0 },
                      { selector: 'meta[name="twitter:card"]', updateAttrs: !0 },
                      { selector: 'meta[name="twitter:description"]', updateAttrs: !0 },
                      { selector: 'meta[name="twitter:url"]', updateAttrs: !0 },
                      { selector: 'meta[name="description"]', updateAttrs: !0 },
                      { selector: 'link[rel="canonical"]', updateAttrs: !0 },
                      { selector: 'link[rel="image_src"]', updateAttrs: !0 },
                      { selector: 'link[rel="alternate"]', updateAttrs: !0 },
                      { selector: 'script[data-name="static-context"]', updateScript: !0 },
                  ],
                  onClickExceptions: ['[href^="/commerce"]'],
                  onRequestExceptions: ["sqs-slide-container"],
                  onLoadDelay: 500,
                  onLoad: function () {
                      document.querySelector(".mercury-transition-wrapper").classList.remove("fade"), c.Lifecycle.init(), u.default.refresh();
                  },
                  onUnload: function (e) {
                      c.Lifecycle.destroy();
                  },
                  onNavigate: function () {
                      document.querySelector(".mercury-transition-wrapper").classList.add("fade");
                  },
              });
          }
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(166),
          a = o(i),
          s = n(35),
          u = o(s),
          c = n(89),
          l = n(200),
          f = o(l);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), n(97);
      var r = n(201),
          i = o(r);
      (t.default = i.default), (e.exports = t.default);
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(162),
          i = o(r),
          a = n(163),
          s = o(a),
          u = n(202),
          c = n(203),
          l = n(204),
          f = (function () {
              function e(t) {
                  return (
                      (0, i.default)(this, e),
                      window.history && window.history.pushState && document.querySelector
                          ? void (
                                this.validateAndAssignConfig(t) &&
                                ("scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"),
                                this.enableCache && (this.cache = {}),
                                (this.loadEvent = new CustomEvent("mercury:load")),
                                (this.unloadEvent = new CustomEvent("mercury:unload")),
                                (this.navigateEvent = new CustomEvent("mercury:navigate")),
                                (this.boundOnClick = this.onClick.bind(this)),
                                (this.boundOnPopState = this.onPopState.bind(this)),
                                this.bindListeners())
                            )
                          : void console.error("Your browser does not support Mercury.")
                  );
              }
              return (
                  (0, s.default)(e, [
                      {
                          key: "validateAndAssignConfig",
                          value: function (e) {
                              var t = e.updateMatrix,
                                  n = e.onClickExceptions,
                                  o = void 0 === n ? [] : n,
                                  r = e.onRequestExceptions,
                                  i = void 0 === r ? [] : r,
                                  a = e.enableCache,
                                  s = e.timeout,
                                  u = e.onLoad,
                                  f = e.onUnload,
                                  d = e.onNavigate,
                                  p = e.onLoadDelay;
                              return (
                                  !!(0, l.isValidUpdateMatrix)(t) &&
                                  ((this.updateMatrix = t),
                                  (this.timeout = (0, l.validateOptionalParam)(s, "number", 5e3)),
                                  (this.enableCache = (0, l.validateOptionalParam)(a, "boolean", !1)),
                                  (this.onLoad = (0, l.validateOptionalParam)(u, "function", function () {})),
                                  (this.onUnload = (0, l.validateOptionalParam)(f, "function", function () {})),
                                  (this.onNavigate = (0, l.validateOptionalParam)(d, "function", function () {})),
                                  (this.onLoadDelay = (0, l.validateOnLoadDelay)(p)),
                                  Array.isArray(o) ? (this.onClickExceptionSelector = c.BASE_ON_CLICK_EXCEPTIONS.concat(o).join(",")) : (this.onClickExceptionSelector = c.BASE_ON_CLICK_EXCEPTIONS.join(",")),
                                  Array.isArray(i) && i.length && (this.onRequestExceptionRegex = new RegExp(i.join("|"), "gi")),
                                  !0)
                              );
                          },
                      },
                      {
                          key: "replaceHistoryStateWithScrollPosition",
                          value: function () {
                              var e = window.location.pathname + window.location.search,
                                  t = { url: e, scroll: { x: window.pageXOffset, y: window.pageYOffset }, type: "mercury" };
                              window.history.replaceState(t, document.title, e);
                          },
                      },
                      {
                          key: "updateDOM",
                          value: function (e, t) {
                              var n = this,
                                  o = new DOMParser(),
                                  r = o.parseFromString(t, "text/html");
                              this.updateMatrix.forEach(function (t) {
                                  var o = document.querySelector(t.selector),
                                      i = r.querySelector(t.selector);
                                  if (o && i) {
                                      if (t.updateHTML) {
                                          var a = n.enableCache && n.cache[e] && n.cache[e][t.selector],
                                              s = a ? n.cache[e][t.selector] : i.innerHTML;
                                          o.innerHTML = s;
                                      }
                                      t.updateAttrs && (0, u.replaceAttributes)(o, i), t.updateScript && (0, u.replaceScript)(o, i);
                                  } else o && o.parentNode.removeChild(o);
                              }),
                                  window.scrollTo(0, 0);
                          },
                      },
                      {
                          key: "makeRequest",
                          value: function (e, t, n) {
                              var o = this;
                              window.dispatchEvent(this.navigateEvent),
                                  this.onNavigate && this.onNavigate(),
                                  this.replaceHistoryStateWithScrollPosition(),
                                  (this.XHR = new XMLHttpRequest()),
                                  (this.XHR.onreadystatechange = function (r) {
                                      if (r.target.readyState === XMLHttpRequest.DONE) {
                                          if (200 !== r.target.status) return void (window.location = e);
                                          try {
                                              var i = o.onRequestExceptionRegex && o.onRequestExceptionRegex.constructor === RegExp,
                                                  a = null !== r.target.responseText.match(o.onRequestExceptionRegex);
                                              if (i && a) return void (window.location = e);
                                              window.dispatchEvent(o.unloadEvent),
                                                  o.onLoadDelay
                                                      ? (o.onLoadDelayTimeout = window.setTimeout(function () {
                                                            o.modifyPageAndHistory(e, t, n, r.target.responseText);
                                                        }, o.onLoadDelay))
                                                      : o.modifyPageAndHistory(e, t, n, r.target.responseText);
                                          } catch (e) {
                                              console.error(e);
                                          }
                                      }
                                  }),
                                  (this.XHR.ontimeout = function () {
                                      window.location = e;
                                  }),
                                  (this.XHR.onerror = function () {
                                      window.location = e;
                                  }),
                                  this.XHR.open("GET", e, !0),
                                  (this.XHR.timeout = this.timeout),
                                  this.XHR.send();
                          },
                      },
                      {
                          key: "modifyPageAndHistory",
                          value: function (e, t, n, o) {
                              if (!t) {
                                  var r = { url: e, type: "mercury" };
                                  window.history.pushState(r, document.title, e);
                              }
                              this.updateDOM(e, o), n && n(), window.dispatchEvent(this.loadEvent);
                          },
                      },
                      {
                          key: "isKeyModified",
                          value: function (e) {
                              return e.metaKey || e.ctrlKey || e.altKey || e.shiftKey;
                          },
                      },
                      {
                          key: "onClick",
                          value: function (e) {
                              if (!this.isKeyModified(e)) {
                                  for (var t = e.target; t && t !== document.body && "A" !== t.tagName.toUpperCase(); ) t = t.parentElement;
                                  t &&
                                      t !== document.body &&
                                      !t.matches(this.onClickExceptionSelector) &&
                                      (e.preventDefault(), this.XHR && (this.XHR.abort(), window.clearTimeout(this.onLoadDelayTimeout)), this.makeRequest(t.getAttribute("href"), !1, null));
                              }
                          },
                      },
                      {
                          key: "onPopState",
                          value: function (e) {
                              if (e.state && "mercury" === e.state.type) {
                                  var t = function () {
                                      e.state.scroll ? window.scrollTo(e.state.scroll.x, e.state.scroll.y) : window.scrollTo(0, 0);
                                  };
                                  this.XHR && (this.XHR.abort(), window.clearTimeout(this.onLoadDelayTimeout)), this.makeRequest(e.state.url, !0, t);
                              }
                          },
                      },
                      {
                          key: "commitCacheEntry",
                          value: function (e, t) {
                              this.enableCache && e && t && ((this.cache[e] = this.cache[e] || {}), (this.cache[e][t] = document.querySelector(t).innerHTML));
                          },
                      },
                      {
                          key: "bindListeners",
                          value: function () {
                              document.body.addEventListener("click", this.boundOnClick),
                                  window.addEventListener("popstate", this.boundOnPopState),
                                  window.addEventListener(this.loadEvent.type, this.onLoad),
                                  window.addEventListener(this.unloadEvent.type, this.onUnload);
                          },
                      },
                      {
                          key: "destroy",
                          value: function () {
                              this.XHR && this.XHR.abort(),
                                  window.clearTimeout(this.onLoadDelayTimeout),
                                  document.body.removeEventListener("click", this.boundOnClick),
                                  window.removeEventListener("popstate", this.boundOnPopState),
                                  window.removeEventListener(this.loadEvent.type, this.onLoad),
                                  window.removeEventListener(this.unloadEvent.type, this.onUnload);
                          },
                      },
                  ]),
                  e
              );
          })();
      (t.default = f), (e.exports = t.default);
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.replaceScript = t.replaceAttributes = void 0);
      var r = n(36),
          i = o(r),
          a = (t.replaceAttributes = function (e, t) {
              for (var n = (0, i.default)(e.attributes), o = 0; o < n.length; o++) e.removeAttribute(n[o].name);
              for (var r = 0; r < t.attributes.length; r++) e.setAttribute(t.attributes[r].name, t.attributes[r].value);
          });
      t.replaceScript = function (e, t) {
          var n = e.parentElement,
              o = document.createElement("script");
          (o.innerHTML = t.innerHTML), a(o, e), n.removeChild(e), n.appendChild(o);
      };
  },
  function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.BASE_ON_CLICK_EXCEPTIONS = ["a:not([href])", '[href^="http"]', '[href^="#"]', '[href^="/#"]', '[target="_blank"]', '[href^="tel"]', '[href^="mailto"]', '[href^="javascript"]'];
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.validateOnLoadDelay = t.validateOptionalParam = t.isValidUpdateMatrix = void 0);
      var r = n(205),
          i = o(r);
      (t.isValidUpdateMatrix = function (e) {
          return Array.isArray(e)
              ? e.every(function (e) {
                    var t = e.selector,
                        n = e.updateHTML,
                        o = e.updateAttrs,
                        r = e.updateScript;
                    if ("string" != typeof t) return console.error(t + " is not a valid selector."), !1;
                    var i = "undefined" != typeof n && "boolean" != typeof n,
                        a = "undefined" != typeof o && "boolean" != typeof o,
                        s = "undefined" != typeof r && "boolean" != typeof r;
                    return !(i || a || s) || (console.error("Non-boolean updateHTML, updateAttrs, or updateScript provided for selector " + t + "."), !1);
                })
              : (console.error("updateMatrix is not an Array"), !1);
      }),
          (t.validateOptionalParam = function (e, t, n) {
              return void 0 === e ? n : ("undefined" == typeof e ? "undefined" : (0, i.default)(e)) !== t ? (console.error(e + " is not a " + t + "."), n) : e;
          }),
          (t.validateOnLoadDelay = function (e) {
              return void 0 === e ? 0 : "number" != typeof e ? (console.error(e + " is not a number."), 0) : e < 0 ? (console.error(e + " is less than 0."), 0) : e;
          });
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      t.__esModule = !0;
      var r = n(206),
          i = o(r),
          a = n(209),
          s = o(a),
          u =
              "function" == typeof s.default && "symbol" == typeof i.default
                  ? function (e) {
                        return typeof e;
                    }
                  : function (e) {
                        return e && "function" == typeof s.default && e.constructor === s.default ? "symbol" : typeof e;
                    };
      t.default =
          "function" == typeof s.default && "symbol" === u(i.default)
              ? function (e) {
                    return "undefined" == typeof e ? "undefined" : u(e);
                }
              : function (e) {
                    return e && "function" == typeof s.default && e.constructor === s.default ? "symbol" : "undefined" == typeof e ? "undefined" : u(e);
                };
  },
  function (e, t, n) {
      e.exports = { default: n(207), __esModule: !0 };
  },
  function (e, t, n) {
      n(38), n(153), (e.exports = n(208).f("iterator"));
  },
  function (e, t, n) {
      t.f = n(79);
  },
  function (e, t, n) {
      e.exports = { default: n(210), __esModule: !0 };
  },
  function (e, t, n) {
      n(211), n(176), n(219), n(220), (e.exports = n(46).Symbol);
  },
  function (e, t, n) {
      "use strict";
      var o = n(45),
          r = n(60),
          i = n(54),
          a = n(44),
          s = n(59),
          u = n(136).KEY,
          c = n(55),
          l = n(74),
          f = n(78),
          d = n(75),
          p = n(79),
          h = n(208),
          v = n(212),
          y = n(213),
          m = n(214),
          A = n(215),
          g = n(51),
          w = n(67),
          b = n(57),
          _ = n(58),
          E = n(63),
          k = n(216),
          x = n(218),
          L = n(50),
          S = n(65),
          T = x.f,
          M = L.f,
          O = k.f,
          P = o.Symbol,
          j = o.JSON,
          I = j && j.stringify,
          C = "prototype",
          R = p("_hidden"),
          N = p("toPrimitive"),
          F = {}.propertyIsEnumerable,
          V = l("symbol-registry"),
          B = l("symbols"),
          D = l("op-symbols"),
          U = Object[C],
          z = "function" == typeof P,
          H = o.QObject,
          q = !H || !H[C] || !H[C].findChild,
          W =
              i &&
              c(function () {
                  return (
                      7 !=
                      E(
                          M({}, "a", {
                              get: function () {
                                  return M(this, "a", { value: 7 }).a;
                              },
                          })
                      ).a
                  );
              })
                  ? function (e, t, n) {
                        var o = T(U, t);
                        o && delete U[t], M(e, t, n), o && e !== U && M(U, t, o);
                    }
                  : M,
          G = function (e) {
              var t = (B[e] = E(P[C]));
              return (t._k = e), t;
          },
          Y =
              z && "symbol" == typeof P.iterator
                  ? function (e) {
                        return "symbol" == typeof e;
                    }
                  : function (e) {
                        return e instanceof P;
                    },
          Q = function (e, t, n) {
              return (
                  e === U && Q(D, t, n),
                  g(e),
                  (t = b(t, !0)),
                  g(n),
                  r(B, t) ? (n.enumerable ? (r(e, R) && e[R][t] && (e[R][t] = !1), (n = E(n, { enumerable: _(0, !1) }))) : (r(e, R) || M(e, R, _(1, {})), (e[R][t] = !0)), W(e, t, n)) : M(e, t, n)
              );
          },
          Z = function (e, t) {
              g(e);
              for (var n, o = m((t = w(t))), r = 0, i = o.length; i > r; ) Q(e, (n = o[r++]), t[n]);
              return e;
          },
          J = function (e, t) {
              return void 0 === t ? E(e) : Z(E(e), t);
          },
          X = function (e) {
              var t = F.call(this, (e = b(e, !0)));
              return !(this === U && r(B, e) && !r(D, e)) && (!(t || !r(this, e) || !r(B, e) || (r(this, R) && this[R][e])) || t);
          },
          K = function (e, t) {
              if (((e = w(e)), (t = b(t, !0)), e !== U || !r(B, t) || r(D, t))) {
                  var n = T(e, t);
                  return !n || !r(B, t) || (r(e, R) && e[R][t]) || (n.enumerable = !0), n;
              }
          },
          $ = function (e) {
              for (var t, n = O(w(e)), o = [], i = 0; n.length > i; ) r(B, (t = n[i++])) || t == R || t == u || o.push(t);
              return o;
          },
          ee = function (e) {
              for (var t, n = e === U, o = O(n ? D : w(e)), i = [], a = 0; o.length > a; ) !r(B, (t = o[a++])) || (n && !r(U, t)) || i.push(B[t]);
              return i;
          };
      z ||
          ((P = function () {
              if (this instanceof P) throw TypeError("Symbol is not a constructor!");
              var e = d(arguments.length > 0 ? arguments[0] : void 0),
                  t = function (n) {
                      this === U && t.call(D, n), r(this, R) && r(this[R], e) && (this[R][e] = !1), W(this, e, _(1, n));
                  };
              return i && q && W(U, e, { configurable: !0, set: t }), G(e);
          }),
          s(P[C], "toString", function () {
              return this._k;
          }),
          (x.f = K),
          (L.f = Q),
          (n(217).f = k.f = $),
          (n(143).f = X),
          (n(142).f = ee),
          i && !n(43) && s(U, "propertyIsEnumerable", X, !0),
          (h.f = function (e) {
              return G(p(e));
          })),
          a(a.G + a.W + a.F * !z, { Symbol: P });
      for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; ) p(te[ne++]);
      for (var te = S(p.store), ne = 0; te.length > ne; ) v(te[ne++]);
      a(a.S + a.F * !z, "Symbol", {
          for: function (e) {
              return r(V, (e += "")) ? V[e] : (V[e] = P(e));
          },
          keyFor: function (e) {
              if (Y(e)) return y(V, e);
              throw TypeError(e + " is not a symbol!");
          },
          useSetter: function () {
              q = !0;
          },
          useSimple: function () {
              q = !1;
          },
      }),
          a(a.S + a.F * !z, "Object", { create: J, defineProperty: Q, defineProperties: Z, getOwnPropertyDescriptor: K, getOwnPropertyNames: $, getOwnPropertySymbols: ee }),
          j &&
              a(
                  a.S +
                      a.F *
                          (!z ||
                              c(function () {
                                  var e = P();
                                  return "[null]" != I([e]) || "{}" != I({ a: e }) || "{}" != I(Object(e));
                              })),
                  "JSON",
                  {
                      stringify: function (e) {
                          if (void 0 !== e && !Y(e)) {
                              for (var t, n, o = [e], r = 1; arguments.length > r; ) o.push(arguments[r++]);
                              return (
                                  (t = o[1]),
                                  "function" == typeof t && (n = t),
                                  (!n && A(t)) ||
                                      (t = function (e, t) {
                                          if ((n && (t = n.call(this, e, t)), !Y(t))) return t;
                                      }),
                                  (o[1] = t),
                                  I.apply(j, o)
                              );
                          }
                      },
                  }
              ),
          P[C][N] || n(49)(P[C], N, P[C].valueOf),
          f(P, "Symbol"),
          f(Math, "Math", !0),
          f(o.JSON, "JSON", !0);
  },
  function (e, t, n) {
      var o = n(45),
          r = n(46),
          i = n(43),
          a = n(208),
          s = n(50).f;
      e.exports = function (e) {
          var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
          "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) });
      };
  },
  function (e, t, n) {
      var o = n(65),
          r = n(67);
      e.exports = function (e, t) {
          for (var n, i = r(e), a = o(i), s = a.length, u = 0; s > u; ) if (i[(n = a[u++])] === t) return n;
      };
  },
  function (e, t, n) {
      var o = n(65),
          r = n(142),
          i = n(143);
      e.exports = function (e) {
          var t = o(e),
              n = r.f;
          if (n) for (var a, s = n(e), u = i.f, c = 0; s.length > c; ) u.call(e, (a = s[c++])) && t.push(a);
          return t;
      };
  },
  function (e, t, n) {
      var o = n(69);
      e.exports =
          Array.isArray ||
          function (e) {
              return "Array" == o(e);
          };
  },
  function (e, t, n) {
      var o = n(67),
          r = n(217).f,
          i = {}.toString,
          a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          s = function (e) {
              try {
                  return r(e);
              } catch (e) {
                  return a.slice();
              }
          };
      e.exports.f = function (e) {
          return a && "[object Window]" == i.call(e) ? s(e) : r(o(e));
      };
  },
  function (e, t, n) {
      var o = n(66),
          r = n(76).concat("length", "prototype");
      t.f =
          Object.getOwnPropertyNames ||
          function (e) {
              return o(e, r);
          };
  },
  function (e, t, n) {
      var o = n(143),
          r = n(58),
          i = n(67),
          a = n(57),
          s = n(60),
          u = n(53),
          c = Object.getOwnPropertyDescriptor;
      t.f = n(54)
          ? c
          : function (e, t) {
                if (((e = i(e)), (t = a(t, !0)), u))
                    try {
                        return c(e, t);
                    } catch (e) {}
                if (s(e, t)) return r(!o.f.call(e, t), e[t]);
            };
  },
  function (e, t, n) {
      n(212)("asyncIterator");
  },
  function (e, t, n) {
      n(212)("observable");
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = function () {
                  return (0, a.default)() && document.body.classList.contains("mobile-style-nav");
              },
              n = e.querySelector(".overlay-nav-wrapper"),
              o = function (e) {
                  n.classList.contains("too-tall") || e.preventDefault();
              },
              r = function () {
                  document.body.classList.contains("nav-open")
                      ? (n.removeEventListener("touchmove", o, !1), document.body.classList.remove("nav-open"))
                      : (t() && n.addEventListener("touchmove", o, !1), document.body.classList.add("nav-open"));
              };
          e.querySelector(".nav-toggle").addEventListener("click", r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(165),
          a = o(i);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = e.querySelector(".overlay-nav-wrapper"),
              n = e.querySelector(".overlay-nav-inner-wrapper"),
              o = e.querySelector(".site-header"),
              r = e.querySelector(".overlay-nav-inner-wrapper .folder"),
              i = function () {
                  var e = n.offsetHeight,
                      r = o.offsetHeight,
                      i = window.innerHeight - 2 * r;
                  e > i && (t.classList.add("too-tall"), (t.style.paddingTop = r + "px"));
              },
              s = function () {
                  t.classList.remove("too-tall"), (t.style.paddingTop = ""), i();
              },
              u = function (e) {
                  e.target.parentNode.classList.contains("folder") && s();
              },
              c = (0, a.default)(s, 120),
              l = function () {
                  t.classList.remove("too-tall"), (t.style.paddingTop = ""), t.removeEventListener("click", u), window.removeEventListener("resize", c);
              };
          return window.addEventListener("resize", c), r && t.addEventListener("click", u), i(), { destroy: l };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(118),
          a = o(i);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = void 0,
              n = function () {
                  t && s.ImageLoader.load(t, { mode: "fill", load: !0 });
              },
              o = (0, a.default)(n, 120),
              r = function () {
                  (t = e.querySelector(".page-banner-wrapper img")), t && s.ImageLoader.load(t, { mode: "fill", load: !0 });
              },
              i = function () {
                  window.removeEventListener("resize", o);
              };
          return (
              r(),
              window.addEventListener("resize", o),
              s.Tweak.watch(["tweak-page-banner-image-height", "tweak-show-page-banner-image"], function (e) {
                  t && s.ImageLoader.load(t, { mode: "fill", load: !0 });
              }),
              { sync: r, destroy: i }
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(118),
          a = o(i),
          s = n(89);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = document.querySelector(".sqs-slide-container"),
              n = "true" === c.Tweak.getValue("tweak-site-ajax-loading-enable"),
              o = e.querySelector(".site-branding .image") ? "h1.image img" : ".site-title",
              r = function (e) {
                  return e.target.parentNode.getAttribute("href");
              },
              i = function (t) {
                  if (t.target.parentNode.hasAttribute("href")) {
                      var n = 'a[href="' + r(t) + '"]';
                      e.querySelector(".folder-open") &&
                          (0, a.default)(e.querySelectorAll(".folder-open")).forEach(function (e) {
                              e.classList.remove("folder-open");
                          }),
                          e.querySelector(".main-navigation .active") && (e.querySelector(".main-navigation .active").classList.remove("active"), e.querySelector(".main-navigation--overlay .active").classList.remove("active")),
                          e.querySelector(".main-navigation " + n) && e.querySelector(".main-navigation " + n).parentNode.classList.add("active"),
                          e.querySelector(".main-navigation--overlay " + n) && e.querySelector(".main-navigation--overlay " + n).parentNode.classList.add("active");
                  }
              };
          !n ||
              u.default.isAuthenticated ||
              t ||
              (e.querySelector(".main-navigation").addEventListener("click", i), e.querySelector(".main-navigation--overlay").addEventListener("click", i), e.querySelector(o).addEventListener("click", i));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(36),
          a = o(i),
          s = n(166),
          u = o(s),
          c = n(89);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          var t = e.querySelector(".header-social-icons-with-nav");
          if (t) {
              var n = e.querySelector(".nav-toggle"),
                  o = e.querySelector(".header-social-icons--overlay"),
                  i = e.querySelector(".nav-item:nth-last-child(2)"),
                  a = "right" === r.Tweak.getValue("tweak-nav-position").toLowerCase(),
                  s = function () {
                      var e = document.createElement("transition-tester"),
                          t = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                      for (var n in t) if (void 0 !== e.style[n]) return t[n];
                  },
                  u = s(),
                  c = function e(n) {
                      "opacity" === n.propertyName &&
                          (document.body.classList.contains("nav-open") ? (t.classList.add("show"), o.classList.add("show")) : (t.classList.remove("show"), o.classList.remove("show")), i.removeEventListener(u, e));
                  },
                  l = function () {
                      !a || document.body.classList.contains("mobile-style-nav") ? i.addEventListener(u, c) : document.body.classList.contains("nav-open") ? t.classList.add("show") : t.classList.remove("show");
                  },
                  f = function () {
                      n.removeEventListener("click", l), i.removeEventListener(u, c);
                  };
              return n.addEventListener("click", l), { destroy: f };
          }
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(89);
      t.default = o;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
          var t = [
                  "tweak-show-gallery-title-overlay",
                  "tweak-show-page-title-overlay",
                  "tweak-header-outer-padding",
                  "tweak-display-social-icons",
                  "tweak-site-title-font",
                  "tweak-site-tagline-font",
                  "tweak-logo-height",
                  "tweak-nav-font",
                  "tweak-menu-icon-size",
                  "tweak-nav-style",
                  "tweak-template-social-icon-size",
                  "tweak-gallery-title-position",
                  "tweak-page-title-position",
              ],
              n = e.querySelector(".title-desc-inner-wrapper"),
              o = e.querySelector(".title-card"),
              r = document.body.classList.contains("collection-type-gallery"),
              i = function () {
                  return document.querySelector(".site-header").offsetHeight;
              },
              s = function () {
                  var e = r ? "tweak-gallery-title-position" : "tweak-page-title-position",
                      t = c.Tweak.getValue(e).toLowerCase().indexOf("top") >= 0;
                  return t ? void (n.style.marginTop = i() + "px") : void (n.style.marginTop = "");
              },
              l = function () {
                  window.pageYOffset > 0 ? e.classList.add("hide-title-card") : e.classList.remove("hide-title-card");
              },
              f = function () {
                  e.classList.add("hide-title-card");
              },
              d = (0, u.default)(s, 120),
              p = (0, a.default)(l, 10),
              h = function () {
                  window.addEventListener("scroll", p), o.addEventListener("click", f), window.addEventListener("resize", d);
              },
              v = function () {
                  var e = r ? c.Tweak.getValue("tweak-show-gallery-title-overlay").toLowerCase() : c.Tweak.getValue("tweak-show-page-title-overlay").toLowerCase();
                  "never" !== e && h();
              },
              y = function () {
                  window.removeEventListener("scroll", p), o.removeEventListener("click", f), window.removeEventListener("resize", d);
              },
              m = function () {
                  s();
              };
          return (
              m(),
              v(),
              c.Tweak.watch(t, function (e) {
                  "tweak-show-gallery-title-overlay" === e.name || "tweak-show-page-title-overlay" === e.name ? (y(), "never" !== e.value.toLowerCase() && h()) : s();
              }),
              { destroy: y }
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(187),
          a = o(i),
          s = n(118),
          u = o(s),
          c = n(89);
      t.default = r;
  },
  function (e, t, n) {
      "use strict";
      function o(e) {
          var t = function (e) {
                  e.preventDefault(), r.UserAccounts.openAccountScreen();
              },
              n = function () {
                  var n = r.UserAccounts.isUserAuthenticated() ? ".sign-in" : ".my-account",
                      o = e.querySelector(n);
                  o && o.parentNode.removeChild(o), e.classList.add("loaded"), e.addEventListener("click", t);
              },
              o = function () {
                  e.removeEventListener("click", t);
              };
          return n(), { destroy: o };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(89);
      t.default = o;
  },
]);
