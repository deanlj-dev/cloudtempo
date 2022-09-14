/**
 * Minified by jsDelivr using Terser v5.13.1.
 * Original file: /npm/minisearch@5.0.0/dist/umd/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).MiniSearch =
        t());
})(this, function () {
  "use strict";
  var e = function () {
    return (
      (e =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      e.apply(this, arguments)
    );
  };
  function t(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      r = t && e[t],
      n = 0;
    if (r) return r.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return (
            e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function r(e, t) {
    var r = "function" == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n,
      i,
      o = r.call(e),
      u = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
        u.push(n.value);
    } catch (e) {
      i = { error: e };
    } finally {
      try {
        n && !n.done && (r = o.return) && r.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return u;
  }
  var n,
    i = "KEYS",
    o = "VALUES",
    u = "",
    a = (function () {
      function e(e, t) {
        var r = e._tree,
          n = Array.from(r.keys());
        (this.set = e),
          (this._type = t),
          (this._path = n.length > 0 ? [{ node: r, keys: n }] : []);
      }
      return (
        (e.prototype.next = function () {
          var e = this.dive();
          return this.backtrack(), e;
        }),
        (e.prototype.dive = function () {
          if (0 === this._path.length) return { done: !0, value: void 0 };
          var e = s(this._path),
            t = e.node,
            r = e.keys;
          if (s(r) === u) return { done: !1, value: this.result() };
          var n = t.get(s(r));
          return (
            this._path.push({ node: n, keys: Array.from(n.keys()) }),
            this.dive()
          );
        }),
        (e.prototype.backtrack = function () {
          if (0 !== this._path.length) {
            var e = s(this._path).keys;
            e.pop(), e.length > 0 || (this._path.pop(), this.backtrack());
          }
        }),
        (e.prototype.key = function () {
          return (
            this.set._prefix +
            this._path
              .map(function (e) {
                var t = e.keys;
                return s(t);
              })
              .filter(function (e) {
                return e !== u;
              })
              .join("")
          );
        }),
        (e.prototype.value = function () {
          return s(this._path).node.get(u);
        }),
        (e.prototype.result = function () {
          switch (this._type) {
            case o:
              return this.value();
            case i:
              return this.key();
            default:
              return [this.key(), this.value()];
          }
        }),
        (e.prototype[Symbol.iterator] = function () {
          return this;
        }),
        e
      );
    })(),
    s = function (e) {
      return e[e.length - 1];
    },
    l = function (e, r, n, i, o, a, s, f) {
      var c,
        h,
        d = a * s;
      try {
        e: for (var v = t(e.keys()), y = v.next(); !y.done; y = v.next()) {
          var p = y.value;
          if (p === u) {
            var m = o[d - 1];
            m <= n && i.set(f, [e.get(p), m]);
          } else {
            for (var g = a, F = 0; F < p.length; ++F, ++g) {
              for (
                var x = p[F],
                  _ = s * g,
                  w = _ - s,
                  A = o[_],
                  E = Math.max(0, g - n - 1),
                  z = Math.min(s - 1, g + n),
                  b = E;
                b < z;
                ++b
              ) {
                var C = x !== r[b],
                  k = o[w + b] + +C,
                  D = o[w + b + 1] + 1,
                  I = o[_ + b] + 1,
                  S = (o[_ + b + 1] = Math.min(k, D, I));
                S < A && (A = S);
              }
              if (A > n) continue e;
            }
            l(e.get(p), r, n, i, o, g, s, f + p);
          }
        }
      } catch (e) {
        c = { error: e };
      } finally {
        try {
          y && !y.done && (h = v.return) && h.call(v);
        } finally {
          if (c) throw c.error;
        }
      }
    },
    f = (function () {
      function e(e, t) {
        void 0 === e && (e = new Map()),
          void 0 === t && (t = ""),
          (this._size = void 0),
          (this._tree = e),
          (this._prefix = t);
      }
      return (
        (e.prototype.atPrefix = function (n) {
          var i, o;
          if (!n.startsWith(this._prefix)) throw new Error("Mismatched prefix");
          var a = r(c(this._tree, n.slice(this._prefix.length)), 2),
            s = a[0],
            l = a[1];
          if (void 0 === s) {
            var f = r(m(l), 2),
              h = f[0],
              d = f[1];
            try {
              for (var v = t(h.keys()), y = v.next(); !y.done; y = v.next()) {
                var p = y.value;
                if (p !== u && p.startsWith(d)) {
                  var g = new Map();
                  return g.set(p.slice(d.length), h.get(p)), new e(g, n);
                }
              }
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                y && !y.done && (o = v.return) && o.call(v);
              } finally {
                if (i) throw i.error;
              }
            }
          }
          return new e(s, n);
        }),
        (e.prototype.clear = function () {
          (this._size = void 0), this._tree.clear();
        }),
        (e.prototype.delete = function (e) {
          return (this._size = void 0), v(this._tree, e);
        }),
        (e.prototype.entries = function () {
          return new a(this, "ENTRIES");
        }),
        (e.prototype.forEach = function (e) {
          var n, i;
          try {
            for (var o = t(this), u = o.next(); !u.done; u = o.next()) {
              var a = r(u.value, 2);
              e(a[0], a[1], this);
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              u && !u.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
        }),
        (e.prototype.fuzzyGet = function (e, t) {
          return (function (e, t, r) {
            var n = new Map();
            if (void 0 === t) return n;
            for (
              var i = t.length + 1,
                o = i + r,
                u = new Uint8Array(o * i).fill(r + 1),
                a = 0;
              a < i;
              ++a
            )
              u[a] = a;
            for (var s = 1; s < o; ++s) u[s * i] = s;
            return l(e, t, r, n, u, 1, i, ""), n;
          })(this._tree, e, t);
        }),
        (e.prototype.get = function (e) {
          var t = h(this._tree, e);
          return void 0 !== t ? t.get(u) : void 0;
        }),
        (e.prototype.has = function (e) {
          var t = h(this._tree, e);
          return void 0 !== t && t.has(u);
        }),
        (e.prototype.keys = function () {
          return new a(this, i);
        }),
        (e.prototype.set = function (e, t) {
          if ("string" != typeof e) throw new Error("key must be a string");
          return (this._size = void 0), d(this._tree, e).set(u, t), this;
        }),
        Object.defineProperty(e.prototype, "size", {
          get: function () {
            if (this._size) return this._size;
            this._size = 0;
            for (var e = this.entries(); !e.next().done; ) this._size += 1;
            return this._size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.update = function (e, t) {
          if ("string" != typeof e) throw new Error("key must be a string");
          this._size = void 0;
          var r = d(this._tree, e);
          return r.set(u, t(r.get(u))), this;
        }),
        (e.prototype.fetch = function (e, t) {
          if ("string" != typeof e) throw new Error("key must be a string");
          this._size = void 0;
          var r = d(this._tree, e),
            n = r.get(u);
          return void 0 === n && r.set(u, (n = t())), n;
        }),
        (e.prototype.values = function () {
          return new a(this, o);
        }),
        (e.prototype[Symbol.iterator] = function () {
          return this.entries();
        }),
        (e.from = function (n) {
          var i,
            o,
            u = new e();
          try {
            for (var a = t(n), s = a.next(); !s.done; s = a.next()) {
              var l = r(s.value, 2),
                f = l[0],
                c = l[1];
              u.set(f, c);
            }
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              s && !s.done && (o = a.return) && o.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return u;
        }),
        (e.fromObject = function (t) {
          return e.from(Object.entries(t));
        }),
        e
      );
    })(),
    c = function (e, r, n) {
      var i, o;
      if ((void 0 === n && (n = []), 0 === r.length || null == e))
        return [e, n];
      try {
        for (var a = t(e.keys()), s = a.next(); !s.done; s = a.next()) {
          var l = s.value;
          if (l !== u && r.startsWith(l))
            return n.push([e, l]), c(e.get(l), r.slice(l.length), n);
        }
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          s && !s.done && (o = a.return) && o.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      return n.push([e, r]), c(void 0, "", n);
    },
    h = function (e, r) {
      var n, i;
      if (0 === r.length || null == e) return e;
      try {
        for (var o = t(e.keys()), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          if (s !== u && r.startsWith(s)) return h(e.get(s), r.slice(s.length));
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          a && !a.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
    },
    d = function (e, r) {
      var n,
        i,
        o = r.length;
      e: for (var a = 0; e && a < o; ) {
        try {
          for (
            var s = ((n = void 0), t(e.keys())), l = s.next();
            !l.done;
            l = s.next()
          ) {
            var f = l.value;
            if (f !== u && r[a] === f[0]) {
              for (
                var c = Math.min(o - a, f.length), h = 1;
                h < c && r[a + h] === f[h];

              )
                ++h;
              var d = e.get(f);
              if (h === f.length) e = d;
              else {
                var v = new Map();
                v.set(f.slice(h), d),
                  e.set(r.slice(a, a + h), v),
                  e.delete(f),
                  (e = v);
              }
              a += h;
              continue e;
            }
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            l && !l.done && (i = s.return) && i.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        var y = new Map();
        return e.set(r.slice(a), y), y;
      }
      return e;
    },
    v = function (e, t) {
      var n = r(c(e, t), 2),
        i = n[0],
        o = n[1];
      if (void 0 !== i)
        if ((i.delete(u), 0 === i.size)) y(o);
        else if (1 === i.size) {
          var a = r(i.entries().next().value, 2),
            s = a[0],
            l = a[1];
          p(o, s, l);
        }
    },
    y = function (e) {
      if (0 !== e.length) {
        var t = r(m(e), 2),
          n = t[0],
          i = t[1];
        if ((n.delete(i), 0 === n.size)) y(e.slice(0, -1));
        else if (1 === n.size) {
          var o = r(n.entries().next().value, 2),
            a = o[0],
            s = o[1];
          a !== u && p(e.slice(0, -1), a, s);
        }
      }
    },
    p = function (e, t, n) {
      if (0 !== e.length) {
        var i = r(m(e), 2),
          o = i[0],
          u = i[1];
        o.set(u + t, n), o.delete(u);
      }
    },
    m = function (e) {
      return e[e.length - 1];
    },
    g = "or",
    F = (function () {
      function n(t) {
        if (null == (null == t ? void 0 : t.fields))
          throw new Error('MiniSearch: option "fields" must be provided');
        (this._options = e(e(e({}, E), t), {
          searchOptions: e(e({}, z), t.searchOptions || {}),
          autoSuggestOptions: e(e({}, b), t.autoSuggestOptions || {}),
        })),
          (this._index = new f()),
          (this._documentCount = 0),
          (this._documentIds = new Map()),
          (this._fieldIds = {}),
          (this._fieldLength = new Map()),
          (this._avgFieldLength = []),
          (this._nextId = 0),
          (this._storedFields = new Map()),
          this.addFields(this._options.fields);
      }
      return (
        (n.prototype.add = function (e) {
          var r,
            n,
            i,
            o,
            u = this._options,
            a = u.extractField,
            s = u.tokenize,
            l = u.processTerm,
            f = u.fields,
            c = u.idField,
            h = a(e, c);
          if (null == h)
            throw new Error(
              'MiniSearch: document does not have ID field "'.concat(c, '"')
            );
          var d = this.addDocumentId(h);
          this.saveStoredFields(d, e);
          try {
            for (var v = t(f), y = v.next(); !y.done; y = v.next()) {
              var p = y.value,
                m = a(e, p);
              if (null != m) {
                var g = s(m.toString(), p),
                  F = this._fieldIds[p],
                  x = new Set(g).size;
                this.addFieldLength(d, F, this._documentCount - 1, x);
                try {
                  for (
                    var _ = ((i = void 0), t(g)), w = _.next();
                    !w.done;
                    w = _.next()
                  ) {
                    var A = l(w.value, p);
                    A && this.addTerm(F, d, A);
                  }
                } catch (e) {
                  i = { error: e };
                } finally {
                  try {
                    w && !w.done && (o = _.return) && o.call(_);
                  } finally {
                    if (i) throw i.error;
                  }
                }
              }
            }
          } catch (e) {
            r = { error: e };
          } finally {
            try {
              y && !y.done && (n = v.return) && n.call(v);
            } finally {
              if (r) throw r.error;
            }
          }
        }),
        (n.prototype.addAll = function (e) {
          var r, n;
          try {
            for (var i = t(e), o = i.next(); !o.done; o = i.next()) {
              var u = o.value;
              this.add(u);
            }
          } catch (e) {
            r = { error: e };
          } finally {
            try {
              o && !o.done && (n = i.return) && n.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
        }),
        (n.prototype.addAllAsync = function (e, t) {
          var r = this;
          void 0 === t && (t = {});
          var n = t.chunkSize,
            i = void 0 === n ? 10 : n,
            o = { chunk: [], promise: Promise.resolve() },
            u = e.reduce(function (e, t, n) {
              var o = e.chunk,
                u = e.promise;
              return (
                o.push(t),
                (n + 1) % i == 0
                  ? {
                      chunk: [],
                      promise: u
                        .then(function () {
                          return new Promise(function (e) {
                            return setTimeout(e, 0);
                          });
                        })
                        .then(function () {
                          return r.addAll(o);
                        }),
                    }
                  : { chunk: o, promise: u }
              );
            }, o),
            a = u.chunk;
          return u.promise.then(function () {
            return r.addAll(a);
          });
        }),
        (n.prototype.remove = function (e) {
          var n,
            i,
            o,
            u,
            a,
            s,
            l = this._options,
            f = l.tokenize,
            c = l.processTerm,
            h = l.extractField,
            d = l.fields,
            v = l.idField,
            y = h(e, v);
          if (null == y)
            throw new Error(
              'MiniSearch: document does not have ID field "'.concat(v, '"')
            );
          try {
            for (
              var p = t(this._documentIds), m = p.next();
              !m.done;
              m = p.next()
            ) {
              var g = r(m.value, 2),
                F = g[0];
              if (y === g[1]) {
                try {
                  for (
                    var x = ((o = void 0), t(d)), _ = x.next();
                    !_.done;
                    _ = x.next()
                  ) {
                    var w = _.value,
                      A = h(e, w);
                    if (null != A) {
                      var E = f(A.toString(), w),
                        z = this._fieldIds[w],
                        b = new Set(E).size;
                      this.removeFieldLength(F, z, this._documentCount, b);
                      try {
                        for (
                          var C = ((a = void 0), t(E)), k = C.next();
                          !k.done;
                          k = C.next()
                        ) {
                          var D = c(k.value, w);
                          D && this.removeTerm(z, F, D);
                        }
                      } catch (e) {
                        a = { error: e };
                      } finally {
                        try {
                          k && !k.done && (s = C.return) && s.call(C);
                        } finally {
                          if (a) throw a.error;
                        }
                      }
                    }
                  }
                } catch (e) {
                  o = { error: e };
                } finally {
                  try {
                    _ && !_.done && (u = x.return) && u.call(x);
                  } finally {
                    if (o) throw o.error;
                  }
                }
                return (
                  this._storedFields.delete(F),
                  this._documentIds.delete(F),
                  this._fieldLength.delete(F),
                  void (this._documentCount -= 1)
                );
              }
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              m && !m.done && (i = p.return) && i.call(p);
            } finally {
              if (n) throw n.error;
            }
          }
          throw new Error(
            "MiniSearch: cannot remove document with ID ".concat(
              y,
              ": it is not in the index"
            )
          );
        }),
        (n.prototype.removeAll = function (e) {
          var r, n;
          if (e)
            try {
              for (var i = t(e), o = i.next(); !o.done; o = i.next()) {
                var u = o.value;
                this.remove(u);
              }
            } catch (e) {
              r = { error: e };
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i);
              } finally {
                if (r) throw r.error;
              }
            }
          else {
            if (arguments.length > 0)
              throw new Error(
                "Expected documents to be present. Omit the argument to remove all documents."
              );
            (this._index = new f()),
              (this._documentCount = 0),
              (this._documentIds = new Map()),
              (this._fieldLength = new Map()),
              (this._avgFieldLength = []),
              (this._storedFields = new Map()),
              (this._nextId = 0);
          }
        }),
        (n.prototype.search = function (e, n) {
          var i, o;
          void 0 === n && (n = {});
          var u = this.executeQuery(e, n),
            a = [];
          try {
            for (var s = t(u), l = s.next(); !l.done; l = s.next()) {
              var f = r(l.value, 2),
                c = f[0],
                h = f[1],
                d = h.score,
                v = h.terms,
                y = h.match,
                p = v.length,
                m = {
                  id: this._documentIds.get(c),
                  score: d * p,
                  terms: Object.keys(y),
                  match: y,
                };
              Object.assign(m, this._storedFields.get(c)),
                (null == n.filter || n.filter(m)) && a.push(m);
            }
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              l && !l.done && (o = s.return) && o.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          return a.sort(D), a;
        }),
        (n.prototype.autoSuggest = function (n, i) {
          var o, u, a, s;
          void 0 === i && (i = {}),
            (i = e(e({}, this._options.autoSuggestOptions), i));
          var l = new Map();
          try {
            for (
              var f = t(this.search(n, i)), c = f.next();
              !c.done;
              c = f.next()
            ) {
              var h = c.value,
                d = h.score,
                v = (_ = h.terms).join(" ");
              null != (F = l.get(v))
                ? ((F.score += d), (F.count += 1))
                : l.set(v, { score: d, terms: _, count: 1 });
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              c && !c.done && (u = f.return) && u.call(f);
            } finally {
              if (o) throw o.error;
            }
          }
          var y = [];
          try {
            for (var p = t(l), m = p.next(); !m.done; m = p.next()) {
              var g = r(m.value, 2),
                F = g[0],
                x = g[1],
                _ = ((d = x.score), x.terms),
                w = x.count;
              y.push({ suggestion: F, terms: _, score: d / w });
            }
          } catch (e) {
            a = { error: e };
          } finally {
            try {
              m && !m.done && (s = p.return) && s.call(p);
            } finally {
              if (a) throw a.error;
            }
          }
          return y.sort(D), y;
        }),
        Object.defineProperty(n.prototype, "documentCount", {
          get: function () {
            return this._documentCount;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.loadJSON = function (e, t) {
          if (null == t)
            throw new Error(
              "MiniSearch: loadJSON should be given the same options used when serializing the index"
            );
          return n.loadJS(JSON.parse(e), t);
        }),
        (n.getDefault = function (e) {
          if (E.hasOwnProperty(e)) return x(E, e);
          throw new Error('MiniSearch: unknown option "'.concat(e, '"'));
        }),
        (n.loadJS = function (e, i) {
          var o,
            u,
            a,
            s,
            l = e.index,
            c = e.documentCount,
            h = e.nextId,
            d = e.documentIds,
            v = e.fieldIds,
            y = e.fieldLength,
            p = e.averageFieldLength,
            m = e.storedFields,
            g = e.serializationVersion;
          if (1 !== g && 2 !== g)
            throw new Error(
              "MiniSearch: cannot deserialize an index created with an incompatible version"
            );
          var F = new n(i);
          (F._documentCount = c),
            (F._nextId = h),
            (F._documentIds = S(d)),
            (F._fieldIds = v),
            (F._fieldLength = S(y)),
            (F._avgFieldLength = p),
            (F._storedFields = S(m)),
            (F._index = new f());
          try {
            for (var x = t(l), _ = x.next(); !_.done; _ = x.next()) {
              var w = r(_.value, 2),
                A = w[0],
                E = w[1],
                z = new Map();
              try {
                for (
                  var b = ((a = void 0), t(Object.keys(E))), C = b.next();
                  !C.done;
                  C = b.next()
                ) {
                  var k = C.value,
                    D = E[k];
                  1 === g && (D = D.ds), z.set(parseInt(k, 10), S(D));
                }
              } catch (e) {
                a = { error: e };
              } finally {
                try {
                  C && !C.done && (s = b.return) && s.call(b);
                } finally {
                  if (a) throw a.error;
                }
              }
              F._index.set(A, z);
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              _ && !_.done && (u = x.return) && u.call(x);
            } finally {
              if (o) throw o.error;
            }
          }
          return F;
        }),
        (n.prototype.executeQuery = function (t, r) {
          var n = this;
          if ((void 0 === r && (r = {}), "string" != typeof t)) {
            var i = e(e(e({}, r), t), { queries: void 0 }),
              o = t.queries.map(function (e) {
                return n.executeQuery(e, i);
              });
            return this.combineResults(o, t.combineWith);
          }
          var u = this._options,
            a = u.tokenize,
            s = u.processTerm,
            l = u.searchOptions,
            f = e(e({ tokenize: a, processTerm: s }, l), r),
            c = f.tokenize,
            h = f.processTerm,
            d = c(t)
              .map(function (e) {
                return h(e);
              })
              .filter(function (e) {
                return !!e;
              })
              .map(A(f))
              .map(function (e) {
                return n.executeQuerySpec(e, f);
              });
          return this.combineResults(d, f.combineWith);
        }),
        (n.prototype.executeQuerySpec = function (n, i) {
          var o,
            u,
            a,
            s,
            l,
            f,
            c = e(e({}, this._options.searchOptions), i),
            h = (c.fields || this._options.fields).reduce(function (t, r) {
              var n;
              return e(e({}, t), (((n = {})[r] = x(t, r) || 1), n));
            }, c.boost || {}),
            d = c.boostDocument,
            v = c.weights,
            y = c.maxFuzzy,
            p = e(e({}, z.weights), v),
            m = p.fuzzy,
            g = p.prefix,
            F = this._index.get(n.term),
            _ = this.termResults(n.term, n.term, 1, F, h, d);
          if ((n.prefix && (l = this._index.atPrefix(n.term)), n.fuzzy)) {
            var w = !0 === n.fuzzy ? 0.2 : n.fuzzy,
              A = w < 1 ? Math.min(y, Math.round(n.term.length * w)) : w;
            A && (f = this._index.fuzzyGet(n.term, A));
          }
          if (l)
            try {
              for (var E = t(l), b = E.next(); !b.done; b = E.next()) {
                var C = r(b.value, 2),
                  k = C[0],
                  D = C[1];
                if ((O = k.length - n.term.length)) {
                  null == f || f.delete(k);
                  var I = (g * k.length) / (k.length + 0.3 * O);
                  this.termResults(n.term, k, I, D, h, d, _);
                }
              }
            } catch (e) {
              o = { error: e };
            } finally {
              try {
                b && !b.done && (u = E.return) && u.call(E);
              } finally {
                if (o) throw o.error;
              }
            }
          if (f)
            try {
              for (var S = t(f.keys()), M = S.next(); !M.done; M = S.next()) {
                k = M.value;
                var O,
                  L = r(f.get(k), 2),
                  B = L[0];
                if ((O = L[1])) {
                  I = (m * k.length) / (k.length + O);
                  this.termResults(n.term, k, I, B, h, d, _);
                }
              }
            } catch (e) {
              a = { error: e };
            } finally {
              try {
                M && !M.done && (s = S.return) && s.call(S);
              } finally {
                if (a) throw a.error;
              }
            }
          return _;
        }),
        (n.prototype.combineResults = function (e, t) {
          if ((void 0 === t && (t = g), 0 === e.length)) return new Map();
          var r = t.toLowerCase();
          return e.reduce(_[r]) || new Map();
        }),
        (n.prototype.toJSON = function () {
          var e,
            n,
            i,
            o,
            u = [];
          try {
            for (var a = t(this._index), s = a.next(); !s.done; s = a.next()) {
              var l = r(s.value, 2),
                f = l[0],
                c = l[1],
                h = {};
              try {
                for (
                  var d = ((i = void 0), t(c)), v = d.next();
                  !v.done;
                  v = d.next()
                ) {
                  var y = r(v.value, 2),
                    p = y[0],
                    m = y[1];
                  h[p] = Object.fromEntries(m);
                }
              } catch (e) {
                i = { error: e };
              } finally {
                try {
                  v && !v.done && (o = d.return) && o.call(d);
                } finally {
                  if (i) throw i.error;
                }
              }
              u.push([f, h]);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (n = a.return) && n.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
          return {
            documentCount: this._documentCount,
            nextId: this._nextId,
            documentIds: Object.fromEntries(this._documentIds),
            fieldIds: this._fieldIds,
            fieldLength: Object.fromEntries(this._fieldLength),
            averageFieldLength: this._avgFieldLength,
            storedFields: Object.fromEntries(this._storedFields),
            index: u,
            serializationVersion: 2,
          };
        }),
        (n.prototype.termResults = function (e, r, n, i, o, u, a) {
          var s, l, f, c, h;
          if ((void 0 === a && (a = new Map()), null == i)) return a;
          try {
            for (
              var d = t(Object.keys(o)), v = d.next();
              !v.done;
              v = d.next()
            ) {
              var y = v.value,
                p = o[y],
                m = this._fieldIds[y],
                g = i.get(m);
              if (null != g) {
                var F = g.size,
                  _ = this._avgFieldLength[m];
                try {
                  for (
                    var A = ((f = void 0), t(g.keys())), E = A.next();
                    !E.done;
                    E = A.next()
                  ) {
                    var z = E.value,
                      b = u ? u(this._documentIds.get(z), r) : 1;
                    if (b) {
                      var k = g.get(z),
                        D = this._fieldLength.get(z)[m],
                        I = n * p * b * w(k, F, this._documentCount, D, _),
                        S = a.get(z);
                      if (S) {
                        (S.score += I), C(S.terms, e);
                        var M = x(S.match, r);
                        M ? M.push(y) : (S.match[r] = [y]);
                      } else
                        a.set(z, {
                          score: I,
                          terms: [e],
                          match: ((h = {}), (h[r] = [y]), h),
                        });
                    }
                  }
                } catch (e) {
                  f = { error: e };
                } finally {
                  try {
                    E && !E.done && (c = A.return) && c.call(A);
                  } finally {
                    if (f) throw f.error;
                  }
                }
              }
            }
          } catch (e) {
            s = { error: e };
          } finally {
            try {
              v && !v.done && (l = d.return) && l.call(d);
            } finally {
              if (s) throw s.error;
            }
          }
          return a;
        }),
        (n.prototype.addTerm = function (e, t, r) {
          var n = this._index.fetch(r, I),
            i = n.get(e);
          if (null == i) (i = new Map()).set(t, 1), n.set(e, i);
          else {
            var o = i.get(t);
            i.set(t, (o || 0) + 1);
          }
        }),
        (n.prototype.removeTerm = function (e, t, r) {
          if (this._index.has(r)) {
            var n = this._index.fetch(r, I),
              i = n.get(e);
            null == i || null == i.get(t)
              ? this.warnDocumentChanged(t, e, r)
              : i.get(t) <= 1
              ? i.size <= 1
                ? n.delete(e)
                : i.delete(t)
              : i.set(t, i.get(t) - 1),
              0 === this._index.get(r).size && this._index.delete(r);
          } else this.warnDocumentChanged(t, e, r);
        }),
        (n.prototype.warnDocumentChanged = function (e, r, n) {
          var i, o;
          if (null != console && null != console.warn)
            try {
              for (
                var u = t(Object.keys(this._fieldIds)), a = u.next();
                !a.done;
                a = u.next()
              ) {
                var s = a.value;
                if (this._fieldIds[s] === r)
                  return void console.warn(
                    "MiniSearch: document with ID "
                      .concat(
                        this._documentIds.get(e),
                        ' has changed before removal: term "'
                      )
                      .concat(n, '" was not present in field "')
                      .concat(
                        s,
                        '". Removing a document after it has changed can corrupt the index!'
                      )
                  );
              }
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                a && !a.done && (o = u.return) && o.call(u);
              } finally {
                if (i) throw i.error;
              }
            }
        }),
        (n.prototype.addDocumentId = function (e) {
          var t = this._nextId;
          return (
            this._documentIds.set(t, e),
            (this._documentCount += 1),
            (this._nextId += 1),
            t
          );
        }),
        (n.prototype.addFields = function (e) {
          for (var t = 0; t < e.length; t++) this._fieldIds[e[t]] = t;
        }),
        (n.prototype.addFieldLength = function (e, t, r, n) {
          var i = this._fieldLength.get(e);
          null == i && this._fieldLength.set(e, (i = [])), (i[t] = n);
          var o = (this._avgFieldLength[t] || 0) * r + n;
          this._avgFieldLength[t] = o / (r + 1);
        }),
        (n.prototype.removeFieldLength = function (e, t, r, n) {
          var i = this._avgFieldLength[t] * r - n;
          this._avgFieldLength[t] = i / (r - 1);
        }),
        (n.prototype.saveStoredFields = function (e, r) {
          var n,
            i,
            o = this._options,
            u = o.storeFields,
            a = o.extractField;
          if (null != u && 0 !== u.length) {
            var s = this._storedFields.get(e);
            null == s && this._storedFields.set(e, (s = {}));
            try {
              for (var l = t(u), f = l.next(); !f.done; f = l.next()) {
                var c = f.value,
                  h = a(r, c);
                void 0 !== h && (s[c] = h);
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                f && !f.done && (i = l.return) && i.call(l);
              } finally {
                if (n) throw n.error;
              }
            }
          }
        }),
        n
      );
    })(),
    x = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
    },
    _ =
      (((n = {}).or = function (e, r) {
        var n, i;
        try {
          for (var o = t(r.keys()), u = o.next(); !u.done; u = o.next()) {
            var a = u.value,
              s = e.get(a);
            if (null == s) e.set(a, r.get(a));
            else {
              var l = r.get(a),
                f = l.score,
                c = l.terms,
                h = l.match;
              (s.score = s.score + f),
                (s.match = Object.assign(s.match, h)),
                k(s.terms, c);
            }
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            u && !u.done && (i = o.return) && i.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return e;
      }),
      (n.and = function (e, r) {
        var n,
          i,
          o = new Map();
        try {
          for (var u = t(r.keys()), a = u.next(); !a.done; a = u.next()) {
            var s = a.value,
              l = e.get(s);
            if (null != l) {
              var f = r.get(s),
                c = f.score,
                h = f.terms,
                d = f.match;
              k(l.terms, h),
                o.set(s, {
                  score: l.score + c,
                  terms: l.terms,
                  match: Object.assign(l.match, d),
                });
            }
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            a && !a.done && (i = u.return) && i.call(u);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      }),
      (n.and_not = function (e, r) {
        var n, i;
        try {
          for (var o = t(r.keys()), u = o.next(); !u.done; u = o.next()) {
            var a = u.value;
            e.delete(a);
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            u && !u.done && (i = o.return) && i.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return e;
      }),
      n),
    w = function (e, t, r, n, i) {
      return (
        Math.log(1 + (r - t + 0.5) / (t + 0.5)) *
        (0.5 + (2.2 * e) / (e + 1.2 * (1 - 0.7 + (0.7 * n) / i)))
      );
    },
    A = function (e) {
      return function (t, r, n) {
        return {
          term: t,
          fuzzy:
            "function" == typeof e.fuzzy ? e.fuzzy(t, r, n) : e.fuzzy || !1,
          prefix:
            "function" == typeof e.prefix ? e.prefix(t, r, n) : !0 === e.prefix,
        };
      };
    },
    E = {
      idField: "id",
      extractField: function (e, t) {
        return e[t];
      },
      tokenize: function (e, t) {
        return e.split(M);
      },
      processTerm: function (e, t) {
        return e.toLowerCase();
      },
      fields: void 0,
      searchOptions: void 0,
      storeFields: [],
    },
    z = {
      combineWith: g,
      prefix: !1,
      fuzzy: !1,
      maxFuzzy: 6,
      boost: {},
      weights: { fuzzy: 0.45, prefix: 0.375 },
    },
    b = {
      combineWith: "and",
      prefix: function (e, t, r) {
        return t === r.length - 1;
      },
    },
    C = function (e, t) {
      e.includes(t) || e.push(t);
    },
    k = function (e, r) {
      var n, i;
      try {
        for (var o = t(r), u = o.next(); !u.done; u = o.next()) {
          var a = u.value;
          e.includes(a) || e.push(a);
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          u && !u.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
    },
    D = function (e, t) {
      var r = e.score;
      return t.score - r;
    },
    I = function () {
      return new Map();
    },
    S = function (e) {
      var r,
        n,
        i = new Map();
      try {
        for (var o = t(Object.keys(e)), u = o.next(); !u.done; u = o.next()) {
          var a = u.value;
          i.set(parseInt(a, 10), e[a]);
        }
      } catch (e) {
        r = { error: e };
      } finally {
        try {
          u && !u.done && (n = o.return) && n.call(o);
        } finally {
          if (r) throw r.error;
        }
      }
      return i;
    },
    M =
      /[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;
  return F;
});
//# sourceMappingURL=/sm/310b6e820732e852b72a503f5791da0b18885c5e6042ef237047a18c9a8e7e5d.map
