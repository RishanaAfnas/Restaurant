/*! jQuery v2.2.2 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.2",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]]
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ca(b),
            i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        var e = {},
            f = a === tb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function zb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Hb = {
            0: 200,
            1223: 204
        },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
    }, b || (a.jQuery = a.$ = n), n
});


/*! jQuery UI - v1.12.1 - 2016-09-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = e.ownerDocument.defaultView,
            n = o.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }

    function r(e) {
        return 11 === e ? pe : 10 === e ? se : pe || se
    }

    function p(e) {
        if (!e) return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }

    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }

    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }

    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }

    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(t, 'top'),
            i = l(t, 'left'),
            r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
    }

    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top',
            n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }

    function h(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }

    function c(e) {
        var t = e.body,
            o = e.documentElement,
            n = r(10) && getComputedStyle(o);
        return {
            height: h('Height', t, o, n),
            width: h('Width', t, o, n)
        }
    }

    function g(e) {
        return fe({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top'),
                    i = l(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i
            } else o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
            d = s.width || e.clientWidth || p.right - p.left,
            a = s.height || e.clientHeight || p.bottom - p.top,
            f = e.offsetWidth - d,
            h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
        }
        return g(p)
    }

    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            p = r(10),
            s = 'HTML' === o.nodeName,
            d = u(e),
            a = u(o),
            l = n(e),
            m = t(o),
            h = parseFloat(m.borderTopWidth, 10),
            c = parseFloat(m.borderLeftWidth, 10);
        i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
            var w = parseFloat(m.marginTop, 10),
                y = parseFloat(m.marginLeft, 10);
            b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
    }

    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = b(e, o),
            i = ee(o.clientWidth, window.innerWidth || 0),
            r = ee(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o),
            s = t ? 0 : l(o, 'left'),
            d = {
                top: p - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: i,
                height: r
            };
        return g(d)
    }

    function y(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) return !1;
        if ('fixed' === t(e, 'position')) return !0;
        var i = o(e);
        return !!i && y(i)
    }

    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
        return o || document.documentElement
    }

    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = {
                top: 0,
                left: 0
            },
            d = p ? E(e) : a(e, t);
        if ('viewport' === r) s = w(d, p);
        else {
            var l;
            'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
            var f = b(l, d, p);
            if ('HTML' === l.nodeName && !y(d)) {
                var m = c(e.ownerDocument),
                    h = m.height,
                    g = m.width;
                s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
            } else s = f
        }
        i = i || 0;
        var u = 'number' == typeof i;
        return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s
    }

    function x(e) {
        var t = e.width,
            o = e.height;
        return t * o
    }

    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = v(o, n, r, i),
            s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            },
            d = Object.keys(s).map(function(e) {
                return fe({
                    key: e
                }, s[e], {
                    area: x(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            a = d.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }

    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            i = n ? E(t) : a(t, o);
        return b(o, i, n)
    }

    function S(e) {
        var t = e.ownerDocument.defaultView,
            o = t.getComputedStyle(e),
            n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
            i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
            r = {
                width: e.offsetWidth + i,
                height: e.offsetHeight + n
            };
        return r
    }

    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function D(e, t, o) {
        o = o.split('-')[0];
        var n = S(e),
            i = {
                width: n.width,
                height: n.height
            },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
    }

    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function N(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o
        });
        var n = C(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }

    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
        }), o
    }

    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function W(e, t) {
        return e.some(function(e) {
            var o = e.name,
                n = e.enabled;
            return n && o === t
        })
    }

    function H(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n],
                r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r]) return r
        }
        return null
    }

    function B() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || M(n(p.parentNode), t, o, i), i.push(p)
    }

    function F(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
    }

    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
        })
    }

    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function q(e, t) {
        var o = e.offsets,
            n = o.popper,
            i = o.reference,
            r = $,
            p = function(e) {
                return e
            },
            s = r(i.width),
            d = r(n.width),
            a = -1 !== ['left', 'right'].indexOf(e.placement),
            l = -1 !== e.placement.indexOf('-'),
            f = t ? a || l || s % 2 == d % 2 ? r : Z : p,
            m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        }
    }

    function K(e, t, o) {
        var n = C(e, function(e) {
                var o = e.name;
                return o === t
            }),
            i = !!n && e.some(function(e) {
                return e.name === o && e.enabled && e.order < n.order
            });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }

    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ce.indexOf(e),
            n = ce.slice(o + 1).concat(ce.slice(0, o));
        return t ? n.reverse() : n
    }

    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function X(e, t, o, n) {
        var i = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(n),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = p.indexOf(C(p, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width',
                p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return _(e, i, t, o)
            })
        }), a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }), i
    }

    function J(e, t) {
        var o, n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }
    for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1)
        if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
            ne = 1;
            break
        }
    var i = te && window.Promise,
        re = i ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, ne))
            }
        },
        pe = te && !!(window.MSInputMethodContext && document.documentMode),
        se = te && /MSIE 10/.test(navigator.userAgent),
        de = function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        },
        ae = function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function(t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(),
        le = function(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        },
        fe = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        },
        me = te && /Firefox/i.test(navigator.userAgent),
        he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        ce = he.slice(3),
        ge = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        },
        ue = function() {
            function t(o, n) {
                var i = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                de(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return fe({
                        name: e
                    }, i.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }
            return ae(t, [{
                key: 'update',
                value: function() {
                    return k.call(this)
                }
            }, {
                key: 'destroy',
                value: function() {
                    return B.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function() {
                    return I.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function() {
                    return U.call(this)
                }
            }]), t
        }();
    return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets,
                            r = i.reference,
                            p = i.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = {
                                start: le({}, d, r[d]),
                                end: le({}, d, r[d] + r[a] - p[a])
                            };
                        e.offsets.popper = fe({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: J,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = H('transform'),
                        i = e.instance.popper.style,
                        r = i.top,
                        s = i.left,
                        d = i[n];
                    i.top = '', i.left = '', i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                    var l = t.priority,
                        f = e.offsets.popper,
                        m = {
                            primary: function(e) {
                                var o = f[e];
                                return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o)
                            },
                            secondary: function(e) {
                                var o = 'right' === e ? 'left' : 'top',
                                    n = f[o];
                                return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n)
                            }
                        };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = fe({}, f, m[t](e))
                    }), e.offsets.popper = f, e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        o = t.popper,
                        n = t.reference,
                        i = e.placement.split('-')[0],
                        r = Z,
                        p = -1 !== ['top', 'bottom'].indexOf(i),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var r = e.placement.split('-')[0],
                        p = e.offsets,
                        s = p.popper,
                        d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r),
                        l = a ? 'height' : 'width',
                        f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(),
                        h = a ? 'left' : 'top',
                        c = a ? 'bottom' : 'right',
                        u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2,
                        w = t(e.instance.popper),
                        y = parseFloat(w['margin' + f], 10),
                        E = parseFloat(w['border' + f + 'Width'], 10),
                        v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        n = e.placement.split('-')[0],
                        i = T(n),
                        r = e.placement.split('-')[1] || '',
                        p = [];
                    switch (t.behavior) {
                        case ge.FLIP:
                            p = [n, i];
                            break;
                        case ge.CLOCKWISE:
                            p = G(n);
                            break;
                        case ge.COUNTERCLOCKWISE:
                            p = G(n, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = T(n);
                        var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = Z,
                            m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left),
                            c = f(a.right) > f(o.right),
                            g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                            w = -1 !== ['top', 'bottom'].indexOf(n),
                            y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
                        (m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        n = e.offsets,
                        i = n.popper,
                        r = n.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference,
                        o = C(e.instance.modifiers, function(e) {
                            return 'preventOverflow' === e.name
                        }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x,
                        n = t.y,
                        i = e.offsets.popper,
                        r = C(e.instance.modifiers, function(e) {
                            return 'applyStyle' === e.name
                        }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r,
                        l = p(e.instance.popper),
                        f = u(l),
                        m = {
                            position: i.position
                        },
                        h = q(e, 2 > window.devicePixelRatio || !me),
                        c = 'bottom' === o ? 'top' : 'bottom',
                        g = 'right' === n ? 'left' : 'right',
                        b = H('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
                    else {
                        var w = 'bottom' == c ? -1 : 1,
                            y = 'right' == g ? -1 : 1;
                        m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed),
                        p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), j(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }), o
                },
                gpuAcceleration: void 0
            }
        }
    }, ue
});


/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, g, u) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), e.forEach(function(t) {
                var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;
    var e = "transitionend";

    function n(t) {
        var e = this,
            n = !1;
        return g(this).one(_.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || _.triggerTransitionEnd(e)
        }, t), this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function(t) {
            if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = g.fn[o],
        h = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        },
        f = "alert",
        d = "fade",
        m = "show",
        p = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() {
                g.removeData(this._element, r), this._element = null
            }, t._getRootElement = function(t) {
                var e = _.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n
            }, t._triggerCloseEvent = function(t) {
                var e = g.Event(h.CLOSE);
                return g(t).trigger(e), e
            }, t._removeElement = function(e) {
                var n = this;
                if (g(e).removeClass(m), g(e).hasClass(d)) {
                    var t = _.getTransitionDurationFromElement(e);
                    g(e).one(_.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) {
                g(t).detach().trigger(h.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(r);
                    e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function() {
        return g.fn[o] = c, p._jQueryInterface
    };
    var v = "button",
        y = "bs.button",
        E = "." + y,
        C = ".data-api",
        T = g.fn[v],
        S = "active",
        b = "btn",
        I = "focus",
        D = '[data-toggle^="button"]',
        w = '[data-toggle="buttons"]',
        A = 'input:not([type="hidden"])',
        N = ".active",
        O = ".btn",
        k = {
            CLICK_DATA_API: "click" + E + C,
            FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
        },
        P = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = g(this._element).closest(w)[0];
                if (n) {
                    var i = this._element.querySelector(A);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(S)) t = !1;
                            else {
                                var o = n.querySelector(N);
                                o && g(o).removeClass(S)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(S), g(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S)
            }, t.dispose = function() {
                g.removeData(this._element, y), this._element = null
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(y);
                    t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), n
        }();
    g(document).on(k.CLICK_DATA_API, D, function(t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle")
    }).on(k.FOCUS_BLUR_DATA_API, D, function(t) {
        var e = g(t.target).closest(O)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function() {
        return g.fn[v] = T, P._jQueryInterface
    };
    var L = "carousel",
        j = "bs.carousel",
        H = "." + j,
        R = ".data-api",
        x = g.fn[L],
        F = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        U = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        W = "next",
        q = "prev",
        M = "left",
        K = "right",
        Q = {
            SLIDE: "slide" + H,
            SLID: "slid" + H,
            KEYDOWN: "keydown" + H,
            MOUSEENTER: "mouseenter" + H,
            MOUSELEAVE: "mouseleave" + H,
            TOUCHSTART: "touchstart" + H,
            TOUCHMOVE: "touchmove" + H,
            TOUCHEND: "touchend" + H,
            POINTERDOWN: "pointerdown" + H,
            POINTERUP: "pointerup" + H,
            DRAG_START: "dragstart" + H,
            LOAD_DATA_API: "load" + H + R,
            CLICK_DATA_API: "click" + H + R
        },
        B = "carousel",
        V = "active",
        Y = "slide",
        z = "carousel-item-right",
        X = "carousel-item-left",
        $ = "carousel-item-next",
        G = "carousel-item-prev",
        J = "pointer-event",
        Z = ".active",
        tt = ".active.carousel-item",
        et = ".carousel-item",
        nt = ".carousel-item img",
        it = ".carousel-item-next, .carousel-item-prev",
        ot = ".carousel-indicators",
        rt = "[data-slide], [data-slide-to]",
        st = '[data-ride="carousel"]',
        at = {
            TOUCH: "touch",
            PEN: "pen"
        },
        lt = function() {
            function r(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function() {
                this._isSliding || this._slide(W)
            }, t.nextWhenVisible = function() {
                !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(q)
            }, t.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(tt);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) g(this._element).one(Q.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? W : q;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() {
                g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(t) {
                return t = l({}, F, t), _.typeCheckConfig(L, t, U), t
            }, t._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    0 < e && this.prev(), e < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && g(this._element).on(Q.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(Q.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var n = this;
                if (this._touchSupported) {
                    var e = function(t) {
                            n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) {
                                return n.cycle(t)
                            }, 500 + n._config.interval))
                        };
                    g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
                        return t.preventDefault()
                    }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                        return e(t)
                    }), g(this._element).on(Q.POINTERUP, function(t) {
                        return i(t)
                    }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function(t) {
                        return e(t)
                    }), g(this._element).on(Q.TOUCHMOVE, function(t) {
                        var e;
                        (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                    }), g(this._element).on(Q.TOUCHEND, function(t) {
                        return i(t)
                    }))
                }
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t)
            }, t._getItemByDirection = function(t, e) {
                var n = t === W,
                    i = t === q,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === q ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(tt)),
                    o = g.Event(Q.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                return g(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                    g(e).removeClass(V);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && g(n).addClass(V)
                }
            }, t._slide = function(t, e) {
                var n, i, o, r = this,
                    s = this._element.querySelector(tt),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval);
                if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                    var u = g.Event(Q.SLID, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    if (g(this._element).hasClass(Y)) {
                        g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                        var d = _.getTransitionDurationFromElement(s);
                        g(s).one(_.TRANSITION_END, function() {
                            g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function() {
                                return g(r._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);
                    h && this.cycle()
                }
            }, r._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this).data(j),
                        e = l({}, F, g(this).data());
                    "object" == typeof i && (e = l({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && e.ride && (t.pause(), t.cycle())
                })
            }, r._dataApiClickHandler = function(t) {
                var e = _.getSelectorFromElement(this);
                if (e) {
                    var n = g(e)[0];
                    if (n && g(n).hasClass(B)) {
                        var i = l({}, g(n).data(), g(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault()
                    }
                }
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return F
                }
            }]), r
        }();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            lt._jQueryInterface.call(i, i.data())
        }
    }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function() {
        return g.fn[L] = x, lt._jQueryInterface
    };
    var ct = "collapse",
        ht = "bs.collapse",
        ut = "." + ht,
        ft = g.fn[ct],
        dt = {
            toggle: !0,
            parent: ""
        },
        gt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        _t = {
            SHOW: "show" + ut,
            SHOWN: "shown" + ut,
            HIDE: "hide" + ut,
            HIDDEN: "hidden" + ut,
            CLICK_DATA_API: "click" + ut + ".data-api"
        },
        mt = "show",
        pt = "collapse",
        vt = "collapsing",
        yt = "collapsed",
        Et = "width",
        Ct = "height",
        Tt = ".show, .collapsing",
        St = '[data-toggle="collapse"]',
        bt = function() {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = _.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                g(this._element).hasClass(mt) ? this.hide() : this.show()
            }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t) {
                        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
                    })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                    var i = g.Event(_t.SHOW);
                    if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
                        var o = this._getDimension();
                        g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                    var e = g.Event(_t.HIDE);
                    if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var r = this._triggerArray[o],
                                    s = _.getSelectorFromElement(r);
                                if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function(t) {
                this._isTransitioning = t
            }, t.dispose = function() {
                g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(t) {
                return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t
            }, t._getDimension = function() {
                return g(this._element).hasClass(Et) ? Et : Ct
            }, t._getParent = function() {
                var t, n = this;
                _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e));
                return g(i).each(function(t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                var n = g(t).hasClass(mt);
                e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function(t) {
                var e = _.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(ht),
                        n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return dt
                }
            }]), a
        }();
    g(document).on(_t.CLICK_DATA_API, St, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this),
            e = _.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() {
            var t = g(this),
                e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e)
        })
    }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function() {
        return g.fn[ct] = ft, bt._jQueryInterface
    };
    var It = "dropdown",
        Dt = "bs.dropdown",
        wt = "." + Dt,
        At = ".data-api",
        Nt = g.fn[It],
        Ot = new RegExp("38|40|27"),
        kt = {
            HIDE: "hide" + wt,
            HIDDEN: "hidden" + wt,
            SHOW: "show" + wt,
            SHOWN: "shown" + wt,
            CLICK: "click" + wt,
            CLICK_DATA_API: "click" + wt + At,
            KEYDOWN_DATA_API: "keydown" + wt + At,
            KEYUP_DATA_API: "keyup" + wt + At
        },
        Pt = "disabled",
        Lt = "show",
        jt = "dropup",
        Ht = "dropright",
        Rt = "dropleft",
        xt = "dropdown-menu-right",
        Ft = "position-static",
        Ut = '[data-toggle="dropdown"]',
        Wt = ".dropdown form",
        qt = ".dropdown-menu",
        Mt = ".navbar-nav",
        Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Qt = "top-start",
        Bt = "top-end",
        Vt = "bottom-start",
        Yt = "bottom-end",
        zt = "right-start",
        Xt = "left-start",
        $t = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        Gt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        Jt = function() {
            function c(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                    var t = c._getParentFromElement(this._element),
                        e = g(this._menu).hasClass(Lt);
                    if (c._clearMenus(), !e) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = g.Event(kt.SHOW, n);
                        if (g(t).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                        }
                    }
                }
            }, t.show = function() {
                if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                    var t = {
                            relatedTarget: this._element
                        },
                        e = g.Event(kt.SHOW, t),
                        n = c._getParentFromElement(this._element);
                    g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
                }
            }, t.hide = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                    var t = {
                            relatedTarget: this._element
                        },
                        e = g.Event(kt.HIDE, t),
                        n = c._getParentFromElement(this._element);
                    g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
                }
            }, t.dispose = function() {
                g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                g(this._element).on(kt.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(t) {
                return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(qt))
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = g(this._element.parentNode),
                    e = Vt;
                return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e
            }, t._detectNavbar = function() {
                return 0 < g(this._element).closest(".navbar").length
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), t
            }, c._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(Dt);
                    if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, c._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                        var o = c._getParentFromElement(e[n]),
                            r = g(e[n]).data(Dt),
                            s = {
                                relatedTarget: e[n]
                            };
                        if (t && "click" === t.type && (s.clickEvent = t), r) {
                            var a = r._menu;
                            if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                                var l = g.Event(kt.HIDE, s);
                                g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(t) {
                var e, n = _.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, c._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
                    var e = c._getParentFromElement(this),
                        n = g(e).hasClass(Lt);
                    if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = [].slice.call(e.querySelectorAll(Kt));
                        if (0 !== i.length) {
                            var o = i.indexOf(t.target);
                            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var r = e.querySelector(Ut);
                            g(r).trigger("focus")
                        }
                        g(this).trigger("click")
                    }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return $t
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Gt
                }
            }]), c
        }();
    g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function(t) {
        t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle")
    }).on(kt.CLICK_DATA_API, Wt, function(t) {
        t.stopPropagation()
    }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function() {
        return g.fn[It] = Nt, Jt._jQueryInterface
    };
    var Zt = "modal",
        te = "bs.modal",
        ee = "." + te,
        ne = g.fn[Zt],
        ie = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        oe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        re = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            FOCUSIN: "focusin" + ee,
            RESIZE: "resize" + ee,
            CLICK_DISMISS: "click.dismiss" + ee,
            KEYDOWN_DISMISS: "keydown.dismiss" + ee,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
            CLICK_DATA_API: "click" + ee + ".data-api"
        },
        se = "modal-dialog-scrollable",
        ae = "modal-scrollbar-measure",
        le = "modal-backdrop",
        ce = "modal-open",
        he = "fade",
        ue = "show",
        fe = ".modal-dialog",
        de = ".modal-body",
        ge = '[data-toggle="modal"]',
        _e = '[data-dismiss="modal"]',
        me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        pe = ".sticky-top",
        ve = function() {
            function o(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = o.prototype;
            return t.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    g(this._element).hasClass(he) && (this._isTransitioning = !0);
                    var n = g.Event(re.SHOW, {
                        relatedTarget: t
                    });
                    g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function(t) {
                        return e.hide(t)
                    }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                        g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = g.Event(re.HIDE);
                    if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = g(this._element).hasClass(he);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
                            var o = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) {
                    return g(t).off(ee)
                }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(t) {
                return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t
            }, t._showElement = function(t) {
                var e = this,
                    n = g(this._element).hasClass(he);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();
                var i = g.Event(re.SHOWN, {
                        relatedTarget: t
                    }),
                    o = function() {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i)
                    };
                if (n) {
                    var r = _.getTransitionDurationFromElement(this._dialog);
                    g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else o()
            }, t._enforceFocus = function() {
                var e = this;
                g(document).off(re.FOCUSIN).on(re.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? g(window).on(re.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : g(window).off(re.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN)
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(t) {
                var e = this,
                    n = g(this._element).hasClass(he) ? he : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;
                    if (!n) return void t();
                    var i = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    g(this._backdrop).removeClass(ue);
                    var o = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (g(this._element).hasClass(he)) {
                        var r = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o()
                } else t && t()
            }, t._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var o = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(me)),
                        e = [].slice.call(document.querySelectorAll(pe));
                    g(t).each(function(t, e) {
                        var n = e.style.paddingRight,
                            i = g(e).css("padding-right");
                        g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                    }), g(e).each(function(t, e) {
                        var n = e.style.marginRight,
                            i = g(e).css("margin-right");
                        g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = g(document.body).css("padding-right");
                    g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                g(document.body).addClass(ce)
            }, t._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(me));
                g(t).each(function(t, e) {
                    var n = g(e).data("padding-right");
                    g(e).removeData("padding-right"), e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + pe));
                g(e).each(function(t, e) {
                    var n = g(e).data("margin-right");
                    "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
                });
                var n = g(document.body).data("padding-right");
                g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = ae, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = g(this).data(te),
                        e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ie
                }
            }]), o
        }();
    g(document).on(re.CLICK_DATA_API, ge, function(t) {
        var e, n = this,
            i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(re.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(re.HIDDEN, function() {
                g(n).is(":visible") && n.focus()
            })
        });
        ve._jQueryInterface.call(g(e), o, this)
    }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function() {
        return g.fn[Zt] = ne, ve._jQueryInterface
    };
    var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ee = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function Se(t, s, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(t, e) {
                var n = l[t],
                    i = n.nodeName.toLowerCase();
                if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var o = [].slice.call(n.attributes),
                    r = [].concat(s["*"] || [], s[i] || []);
                o.forEach(function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                        for (var i = e.filter(function(t) {
                                return t instanceof RegExp
                            }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(t, r) || n.removeAttribute(t.nodeName)
                })
            }, o = 0, r = l.length; o < r; o++) i(o);
        return n.body.innerHTML
    }
    var be = "tooltip",
        Ie = "bs.tooltip",
        De = "." + Ie,
        we = g.fn[be],
        Ae = "bs-tooltip",
        Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
        Oe = ["sanitize", "whiteList", "sanitizeFn"],
        ke = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Pe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Le = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Ee
        },
        je = "show",
        He = "out",
        Re = {
            HIDE: "hide" + De,
            HIDDEN: "hidden" + De,
            SHOW: "show" + De,
            SHOWN: "shown" + De,
            INSERTED: "inserted" + De,
            CLICK: "click" + De,
            FOCUSIN: "focusin" + De,
            FOCUSOUT: "focusout" + De,
            MOUSEENTER: "mouseenter" + De,
            MOUSELEAVE: "mouseleave" + De
        },
        xe = "fade",
        Fe = "show",
        Ue = ".tooltip-inner",
        We = ".arrow",
        qe = "hover",
        Me = "focus",
        Ke = "click",
        Qe = "manual",
        Be = function() {
            function i(t, e) {
                if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = g(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = g.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    g(this.element).trigger(t);
                    var n = _.findShadowRoot(this.element),
                        i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                        r = _.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
                        placement: a,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: We
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                    var c = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e)
                    };
                    if (g(this.tip).hasClass(xe)) {
                        var h = _.getTransitionDurationFromElement(this.tip);
                        g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                    } else c()
                }
            }, t.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = g.Event(this.constructor.Event.HIDE),
                    o = function() {
                        e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
                        var r = _.getTransitionDurationFromElement(n);
                        g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass(Ae + "-" + t)
            }, t.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe)
            }, t.setElementContent = function(t, e) {
                "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
            }, t.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function() {
                return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
            }, t._getAttachment = function(t) {
                return Pe[t.toUpperCase()]
            }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                    else if (t !== Qe) {
                        var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        g(i.element).on(e, i.config.selector, function(t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function(t) {
                            return i._leave(t)
                        })
                    }
                }), g(this.element).closest(".modal").on("hide.bs.modal", function() {
                    i.element && i.hide()
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === je && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === He && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) {
                var e = g(this.element).data();
                return Object.keys(e).forEach(function(t) {
                    -1 !== Oe.indexOf(t) && delete e[t]
                }), "number" == typeof(t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t
            }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = g(this.getTipElement()),
                    e = t.attr("class").match(Ne);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(Ie),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Le
                }
            }, {
                key: "NAME",
                get: function() {
                    return be
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ie
                }
            }, {
                key: "Event",
                get: function() {
                    return Re
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return De
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ke
                }
            }]), i
        }();
    g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function() {
        return g.fn[be] = we, Be._jQueryInterface
    };
    var Ve = "popover",
        Ye = "bs.popover",
        ze = "." + Ye,
        Xe = g.fn[Ve],
        $e = "bs-popover",
        Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
        Je = l({}, Be.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Ze = l({}, Be.DefaultType, {
            content: "(string|element|function)"
        }),
        tn = "fade",
        en = "show",
        nn = ".popover-header",
        on = ".popover-body",
        rn = {
            HIDE: "hide" + ze,
            HIDDEN: "hidden" + ze,
            SHOW: "show" + ze,
            SHOWN: "shown" + ze,
            INSERTED: "inserted" + ze,
            CLICK: "click" + ze,
            FOCUSIN: "focusin" + ze,
            FOCUSOUT: "focusout" + ze,
            MOUSEENTER: "mouseenter" + ze,
            MOUSELEAVE: "mouseleave" + ze
        },
        sn = function(t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass($e + "-" + t)
            }, o.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, o.setContent = function() {
                var t = g(this.getTipElement());
                this.setElementContent(t.find(nn), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en)
            }, o._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function() {
                var t = g(this.getTipElement()),
                    e = t.attr("class").match(Ge);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(Ye),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Je
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ve
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ye
                }
            }, {
                key: "Event",
                get: function() {
                    return rn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ze
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ze
                }
            }]), i
        }(Be);
    g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function() {
        return g.fn[Ve] = Xe, sn._jQueryInterface
    };
    var an = "scrollspy",
        ln = "bs.scrollspy",
        cn = "." + ln,
        hn = g.fn[an],
        un = {
            offset: 10,
            method: "auto",
            target: ""
        },
        fn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        dn = {
            ACTIVATE: "activate" + cn,
            SCROLL: "scroll" + cn,
            LOAD_DATA_API: "load" + cn + ".data-api"
        },
        gn = "dropdown-item",
        _n = "active",
        mn = '[data-spy="scroll"]',
        pn = ".nav, .list-group",
        vn = ".nav-link",
        yn = ".nav-item",
        En = ".list-group-item",
        Cn = ".dropdown",
        Tn = ".dropdown-item",
        Sn = ".dropdown-toggle",
        bn = "offset",
        In = "position",
        Dn = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function(t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? bn : In,
                    o = "auto" === this._config.method ? t : this._config.method,
                    r = o === In ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                    var e, n = _.getSelectorFromElement(t);
                    if (n && (e = document.querySelector(n)), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [g(e)[o]().top + r, n]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(t) {
                if ("string" != typeof(t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                    var e = g(t.target).attr("id");
                    e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e
                }
                return _.typeCheckConfig(an, t, fn), t
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    n = g([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                    return t.classList.contains(_n)
                }).forEach(function(t) {
                    return t.classList.remove(_n)
                })
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(ln);
                    if (t || (t = new n(this, "object" == typeof e && e), g(this).data(ln, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return un
                }
            }]), n
        }();
    g(window).on(dn.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
            var n = g(t[e]);
            Dn._jQueryInterface.call(n, n.data())
        }
    }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function() {
        return g.fn[an] = hn, Dn._jQueryInterface
    };
    var wn = "bs.tab",
        An = "." + wn,
        Nn = g.fn.tab,
        On = {
            HIDE: "hide" + An,
            HIDDEN: "hidden" + An,
            SHOW: "show" + An,
            SHOWN: "shown" + An,
            CLICK_DATA_API: "click" + An + ".data-api"
        },
        kn = "dropdown-menu",
        Pn = "active",
        Ln = "disabled",
        jn = "fade",
        Hn = "show",
        Rn = ".dropdown",
        xn = ".nav, .list-group",
        Fn = ".active",
        Un = "> li > .active",
        Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        qn = ".dropdown-toggle",
        Mn = "> .dropdown-menu .active",
        Kn = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
                    var t, i, e = g(this._element).closest(xn)[0],
                        o = _.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                        i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                    }
                    var s = g.Event(On.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = g.Event(On.SHOW, {
                            relatedTarget: i
                        });
                    if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, e);
                        var l = function() {
                            var t = g.Event(On.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                e = g.Event(On.SHOWN, {
                                    relatedTarget: i
                                });
                            g(i).trigger(t), g(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() {
                g.removeData(this._element, wn), this._element = null
            }, t._activate = function(t, e, n) {
                var i = this,
                    o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
                    r = n && o && g(o).hasClass(jn),
                    s = function() {
                        return i._transitionComplete(t, o, n)
                    };
                if (o && r) {
                    var a = _.getTransitionDurationFromElement(o);
                    g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    g(e).removeClass(Pn);
                    var i = g(e.parentNode).find(Mn)[0];
                    i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
                    var o = g(t).closest(Rn)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(qn));
                        g(r).addClass(Pn)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(wn);
                    if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    g(document).on(On.CLICK_DATA_API, Wn, function(t) {
        t.preventDefault(), Kn._jQueryInterface.call(g(this), "show")
    }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function() {
        return g.fn.tab = Nn, Kn._jQueryInterface
    };
    var Qn = "toast",
        Bn = "bs.toast",
        Vn = "." + Bn,
        Yn = g.fn[Qn],
        zn = {
            CLICK_DISMISS: "click.dismiss" + Vn,
            HIDE: "hide" + Vn,
            HIDDEN: "hidden" + Vn,
            SHOW: "show" + Vn,
            SHOWN: "shown" + Vn
        },
        Xn = "fade",
        $n = "hide",
        Gn = "show",
        Jn = "showing",
        Zn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        ti = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ei = '[data-dismiss="toast"]',
        ni = function() {
            function i(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }
            var t = i.prototype;
            return t.show = function() {
                var t = this;
                g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);
                var e = function() {
                    t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide()
                };
                if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, t.hide = function(t) {
                var e = this;
                this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function() {
                    e._close()
                }, this._config.delay))
            }, t.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null
            }, t._getConfig = function(t) {
                return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t
            }, t._setListeners = function() {
                var t = this;
                g(this._element).on(zn.CLICK_DISMISS, ei, function() {
                    return t.hide(!0)
                })
            }, t._close = function() {
                var t = this,
                    e = function() {
                        t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN)
                    };
                if (this._element.classList.remove(Gn), this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(Bn);
                    if (e || (e = new i(this, "object" == typeof n && n), t.data(Bn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](this)
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Zn
                }
            }, {
                key: "Default",
                get: function() {
                    return ti
                }
            }]), i
        }();
    g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function() {
            return g.fn[Qn] = Yn, ni._jQueryInterface
        },
        function() {
            if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", {
            value: !0
        })
});




/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = {
                    merge: !1,
                    width: b
                }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], e.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(a("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length) return this._items = b.get().map(function(b) {
            return a(b)
        }), this._mergers = this._items.map(function() {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var a, b, c;
            a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var e = -1,
            f = 30,
            g = this.width(),
            h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
            return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
        }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }, e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
            return b
        })
    }, e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            if (b = this._items.length)
                for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings,
                        e = c.center && Math.ceil(c.items / 2) || c.items,
                        f = c.center && -1 * e || 0,
                        g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                        h = this._core.clones().length,
                        i = a.proxy(function(a, b) {
                            this.load(b)
                        }, this);
                    for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(c) {
        this._core = c, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
            d._core.settings.autoHeight && d.update()
        }), a(b).resize(function() {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() {
                d.update()
            }, 250))
        })
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(b, c),
            f = [],
            g = 0;
        a.each(e, function(b, c) {
            f.push(a(c).height())
        }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function(a, b) {
        var c = function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(c) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
                    class: "owl-video-tn " + j,
                    srcType: c
                }) : a("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + c + ")"
                }), b.after(d), b.after(e)
            };
        if (b.wrap(a("<div/>", {
                class: "owl-video-wrapper",
                style: g
            })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
    }, e.prototype.read = function() {
        return (new Date).getTime() - this._time
    }, e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
    }, e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
    }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


//InView
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    function i() {
        var b, c, d = {
            height: f.innerHeight,
            width: f.innerWidth
        };
        return d.height || (b = e.compatMode, (b || !a.support.boxModel) && (c = "CSS1Compat" === b ? g : e.body, d = {
            height: c.clientHeight,
            width: c.clientWidth
        })), d
    }

    function j() {
        return {
            top: f.pageYOffset || g.scrollTop || e.body.scrollTop,
            left: f.pageXOffset || g.scrollLeft || e.body.scrollLeft
        }
    }

    function k() {
        if (b.length) {
            var e = 0,
                f = a.map(b, function(a) {
                    var b = a.data.selector,
                        c = a.$element;
                    return b ? c.find(b) : c
                });
            for (c = c || i(), d = d || j(); e < b.length; e++)
                if (a.contains(g, f[e][0])) {
                    var h = a(f[e]),
                        k = {
                            height: h[0].offsetHeight,
                            width: h[0].offsetWidth
                        },
                        l = h.offset(),
                        m = h.data("inview");
                    if (!d || !c) return;
                    l.top + k.height > d.top && l.top < d.top + c.height && l.left + k.width > d.left && l.left < d.left + c.width ? m || h.data("inview", !0).trigger("inview", [!0]) : m && h.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    var c, d, h, b = [],
        e = document,
        f = window,
        g = e.documentElement;
    a.event.special.inview = {
        add: function(c) {
            b.push({
                data: c,
                $element: a(this),
                element: this
            }), !h && b.length && (h = setInterval(k, 250))
        },
        remove: function(a) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.element === this && d.data.guid === a.guid) {
                    b.splice(c, 1);
                    break
                }
            }
            b.length || (clearInterval(h), h = null)
        }
    }, a(f).on("scroll resize scrollstop", function() {
        c = d = null
    }), !g.addEventListener && g.attachEvent && g.attachEvent("onfocusin", function() {
        d = null
    })
});