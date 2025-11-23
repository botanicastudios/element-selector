import we, { useRef as X, useEffect as te, useState as Q, useMemo as Ee, useCallback as Z } from "react";
import He from "react-dom/client";
var fe = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Le() {
  if (Se) return ce;
  Se = 1;
  var e = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function a(f, o, r) {
    var u = null;
    if (r !== void 0 && (u = "" + r), o.key !== void 0 && (u = "" + o.key), "key" in o) {
      r = {};
      for (var s in o)
        s !== "key" && (r[s] = o[s]);
    } else r = o;
    return o = r.ref, {
      $$typeof: e,
      type: f,
      key: u,
      ref: o !== void 0 ? o : null,
      props: r
    };
  }
  return ce.Fragment = i, ce.jsx = a, ce.jsxs = a, ce;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Oe() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === K ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case R:
          return "Fragment";
        case k:
          return "Profiler";
        case y:
          return "StrictMode";
        case B:
          return "Suspense";
        case F:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case x:
            return "Portal";
          case q:
            return (t.displayName || "Context") + ".Provider";
          case T:
            return (t._context.displayName || "Context") + ".Consumer";
          case G:
            var g = t.render;
            return t = t.displayName, t || (t = g.displayName || g.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case re:
            return g = t.displayName || null, g !== null ? g : e(t.type) || "Memo";
          case b:
            g = t._payload, t = t._init;
            try {
              return e(t(g));
            } catch {
            }
        }
      return null;
    }
    function i(t) {
      return "" + t;
    }
    function a(t) {
      try {
        i(t);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var S = g.error, C = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return S.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), i(t);
      }
    }
    function f(t) {
      if (t === R) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === b)
        return "<...>";
      try {
        var g = e(t);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var t = O.A;
      return t === null ? null : t.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function u(t) {
      if (H.call(t, "key")) {
        var g = Object.getOwnPropertyDescriptor(t, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function s(t, g) {
      function S() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: S,
        configurable: !0
      });
    }
    function p() {
      var t = e(this.type);
      return I[t] || (I[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function h(t, g, S, C, Y, W, z, ae) {
      return S = W.ref, t = {
        $$typeof: c,
        type: t,
        key: g,
        props: W,
        _owner: Y
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function d(t, g, S, C, Y, W, z, ae) {
      var _ = g.children;
      if (_ !== void 0)
        if (C)
          if (ee(_)) {
            for (C = 0; C < _.length; C++)
              w(_[C]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(_);
      if (H.call(g, "key")) {
        _ = e(t);
        var J = Object.keys(g).filter(function(ge) {
          return ge !== "key";
        });
        C = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", D[_ + C] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          _,
          J,
          _
        ), D[_ + C] = !0);
      }
      if (_ = null, S !== void 0 && (a(S), _ = "" + S), u(g) && (a(g.key), _ = "" + g.key), "key" in g) {
        S = {};
        for (var oe in g)
          oe !== "key" && (S[oe] = g[oe]);
      } else S = g;
      return _ && s(
        S,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), h(
        t,
        _,
        W,
        Y,
        o(),
        S,
        z,
        ae
      );
    }
    function w(t) {
      typeof t == "object" && t !== null && t.$$typeof === c && t._store && (t._store.validated = 1);
    }
    var l = we, c = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, ee = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var U, I = {}, se = l.react_stack_bottom_frame.bind(
      l,
      r
    )(), V = j(f(r)), D = {};
    ue.Fragment = R, ue.jsx = function(t, g, S, C, Y) {
      var W = 1e4 > O.recentlyCreatedOwnerStacks++;
      return d(
        t,
        g,
        S,
        !1,
        C,
        Y,
        W ? Error("react-stack-top-frame") : se,
        W ? j(f(t)) : V
      );
    }, ue.jsxs = function(t, g, S, C, Y) {
      var W = 1e4 > O.recentlyCreatedOwnerStacks++;
      return d(
        t,
        g,
        S,
        !0,
        C,
        Y,
        W ? Error("react-stack-top-frame") : se,
        W ? j(f(t)) : V
      );
    };
  }()), ue;
}
var ke;
function De() {
  return ke || (ke = 1, process.env.NODE_ENV === "production" ? fe.exports = Le() : fe.exports = Oe()), fe.exports;
}
var v = De();
function Pe(e) {
  if (!e) return [];
  const i = e.className;
  if (typeof i == "string")
    return i.split(/\s+/).filter(Boolean);
  const a = i?.baseVal;
  return typeof a == "string" ? a.split(/\s+/).filter(Boolean) : e.classList ? Array.from(e.classList).filter(Boolean) : [];
}
function be(e, i) {
  const a = (s) => !!s && (s.id === "element-selector-overlay" || s.closest("#element-selector-overlay") || s.id === "element-selector-root" || s.closest("#element-selector-root")), f = (s, p, h) => {
    const d = s.elementFromPoint;
    if (!d) return null;
    const w = d.call(s, p, h);
    if (!w) return null;
    if (w instanceof HTMLSlotElement) {
      const l = w.assignedElements({ flatten: !0 }), c = l.find((x) => {
        const R = x.getBoundingClientRect();
        return p >= R.left && p <= R.right && h >= R.top && h <= R.bottom;
      }) || l[0];
      if (c) {
        if (c.shadowRoot) {
          const x = f(c.shadowRoot, p, h);
          if (x) return x;
        }
        return c;
      }
    }
    if (w.shadowRoot) {
      const l = f(w.shadowRoot, p, h);
      if (l) return l;
    }
    return w;
  }, o = () => {
    const s = document.elementsFromPoint(e, i).filter(
      (h) => h instanceof HTMLElement && !a(h)
    );
    return s.find(
      (h) => h !== document.documentElement && h !== document.body
    ) ?? s[0] ?? null;
  }, u = (() => {
    let s = f(document, e, i);
    if (s?.shadowRoot) {
      const p = f(s.shadowRoot, e, i);
      p && (s = p);
    }
    return s && !a(s) && s !== document.body && s !== document.documentElement ? s : o();
  })() ?? document.body;
  return u.tagName !== "svg" && u.tagName !== "SVG" && u.closest("svg") ? u.closest("svg") || document.body : u;
}
function ze(e) {
  if (!e || e === document.body)
    return "body";
  if (e.id)
    return `#${CSS.escape(e.id)}`;
  const i = [];
  let a = e;
  for (; a && a !== document.body; ) {
    let f = a.tagName.toLowerCase();
    const o = Pe(a).filter((r) => !r.includes(":")).slice(0, 2);
    if (o.length > 0) {
      const r = o.map((u) => `.${CSS.escape(u)}`).join("");
      f += r;
    }
    if (a.parentElement) {
      const r = a.tagName, s = Array.from(a.parentElement.children).filter(
        (p) => p.tagName === r
      );
      if (s.length > 1) {
        const p = s.indexOf(a) + 1;
        f += `:nth-of-type(${p})`;
      }
    }
    i.unshift(f);
    try {
      const r = i.join(" > "), u = document.querySelectorAll(r);
      if (u.length === 1 && u[0] === e)
        return r;
    } catch {
    }
    a = a.parentElement;
  }
  return i.join(" > ");
}
function je(e) {
  return {
    // Links
    a: "link",
    // Text content
    p: "paragraph",
    span: "text",
    strong: "bold text",
    b: "bold text",
    em: "italic text",
    i: "italic text",
    u: "underlined text",
    code: "code",
    pre: "code block",
    blockquote: "quote",
    // Headings
    h1: "heading 1",
    h2: "heading 2",
    h3: "heading 3",
    h4: "heading 4",
    h5: "heading 5",
    h6: "heading 6",
    // Lists
    ul: "unordered list",
    ol: "ordered list",
    li: "list item",
    dl: "description list",
    dt: "term",
    dd: "description",
    // Structure
    div: "container",
    section: "section",
    article: "article",
    aside: "sidebar",
    header: "header",
    footer: "footer",
    nav: "navigation",
    main: "main content",
    // Forms
    form: "form",
    input: "input field",
    button: "button",
    textarea: "text area",
    select: "dropdown",
    option: "option",
    label: "label",
    fieldset: "field group",
    legend: "field group title",
    // Media
    img: "image",
    video: "video",
    audio: "audio",
    picture: "picture",
    figure: "figure",
    figcaption: "caption",
    // Tables
    table: "table",
    thead: "table header",
    tbody: "table body",
    tfoot: "table footer",
    tr: "table row",
    th: "table header cell",
    td: "table cell",
    // Other
    br: "line break",
    hr: "horizontal line",
    iframe: "embedded frame",
    canvas: "canvas",
    svg: "graphic"
  }[e.toLowerCase()] || e.toLowerCase();
}
function pe(e) {
  return e.width === 0 && e.height === 0;
}
function he(e) {
  return getComputedStyle(e).display === "contents";
}
function Ne(e) {
  const i = Math.min(...e.map((r) => r.left)), a = Math.min(...e.map((r) => r.top)), f = Math.max(...e.map((r) => r.right)), o = Math.max(...e.map((r) => r.bottom));
  return new DOMRectReadOnly(i, a, f - i, o - a);
}
function ye(e) {
  if (!e) return null;
  const i = e.getRootNode(), a = e.getBoundingClientRect();
  if (!pe(a) && !he(e))
    return { element: e, rect: a };
  if (he(e)) {
    const o = Array.from(e.children).filter((r) => r instanceof HTMLElement).map((r) => r.getBoundingClientRect()).filter((r) => !pe(r));
    if (o.length)
      return { element: e, rect: Ne(o) };
  }
  if (e instanceof HTMLSlotElement) {
    const o = e.assignedElements({ flatten: !0 }).map((r) => r.getBoundingClientRect()).filter((r) => !pe(r));
    if (o.length)
      return { element: e, rect: Ne(o) };
  }
  let f = e;
  for (; f; ) {
    const o = f.parentElement;
    if (!o || o === document.body || o.getRootNode() !== i)
      break;
    const r = o.getBoundingClientRect();
    if (!pe(r) && !he(o))
      return { element: o, rect: r };
    f = o;
  }
  return { element: e, rect: a };
}
function $e(e, i = 300, { maxAncestors: a = 10 } = {}) {
  if (!e || !e.parentNode)
    throw new Error("Node must be attached to the DOM (with a parent).");
  const f = (l) => l.nodeType === Node.ELEMENT_NODE ? l.outerHTML : l.nodeType === Node.TEXT_NODE ? (l.textContent ?? "").toString() : new XMLSerializer().serializeToString(l), o = (l, c) => {
    const x = [];
    let R = c;
    for (; R && R !== l; ) {
      const y = R.parentNode;
      if (!y)
        throw new Error("Failed to resolve node path for context extraction.");
      const k = Array.prototype.indexOf.call(y.childNodes, R);
      if (k === -1)
        throw new Error("Unable to map node into cloned context tree.");
      x.unshift(k), R = y;
    }
    if (R !== l)
      throw new Error("Context root does not contain the requested node.");
    return x;
  }, r = (l) => {
    l.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    ).forEach((x) => x.remove());
  }, u = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`
  }, s = (l) => {
    const c = document.createElement("div"), x = l.cloneNode(!0);
    if (c.appendChild(x), r(c), !c.firstChild)
      return {
        beforeHtml: "",
        elementHtml: f(e),
        afterHtml: ""
      };
    const R = o(l, e);
    let y = c.firstChild;
    for (const le of R) {
      const K = y.childNodes.item(le);
      if (!K)
        throw new Error("Failed to mirror node inside cloned context tree.");
      y = K;
    }
    const k = y.parentNode;
    if (!k)
      return {
        beforeHtml: "",
        elementHtml: f(e),
        afterHtml: ""
      };
    const T = document.createTextNode(u.start), q = document.createTextNode(u.end);
    k.insertBefore(T, y), k.insertBefore(q, y.nextSibling), k.removeChild(y);
    const G = c.innerHTML, B = G.indexOf(u.start), F = G.indexOf(u.end);
    if (B === -1 || F === -1 || F < B)
      throw new Error("Failed to locate context markers during serialization.");
    const re = G.slice(0, B), b = G.slice(F + u.end.length);
    return {
      beforeHtml: re,
      elementHtml: f(e),
      afterHtml: b
    };
  }, p = (l) => l.parentNode ? l.parentNode.nodeType === Node.DOCUMENT_NODE ? l.parentNode.documentElement ?? null : l.parentNode : null;
  let h = 0, d = e.parentNode ?? e, w = s(d);
  for (; h < a && (w.beforeHtml.length < i || w.afterHtml.length < i); ) {
    const l = p(d);
    if (!l || l === d || (h += 1, d = l, w = s(d), !d.parentNode || d.parentNode.nodeType === Node.DOCUMENT_NODE))
      break;
  }
  return w;
}
function Be({
  targetElement: e,
  friendlySelectors: i = !1,
  rect: a = null
}) {
  const f = X(null);
  te(() => {
    const r = f.current;
    if (!r) return;
    if (!a) {
      r.style.opacity = "0";
      return;
    }
    const u = 1;
    r.style.top = `${a.top - u}px`, r.style.left = `${a.left - u}px`, r.style.width = `${a.width + u * 2}px`, r.style.height = `${a.height + u * 2}px`, r.style.opacity = "1";
  }, [a]);
  const o = e ? {
    tag: e.tagName.toLowerCase(),
    friendlyTag: i ? je(e.tagName) : e.tagName.toLowerCase(),
    id: e.id,
    classes: Pe(e).slice(0, 2)
  } : null;
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      ref: f,
      style: {
        position: "fixed",
        pointerEvents: "none",
        zIndex: 1e5,
        opacity: 0,
        transition: "opacity 150ms ease-out",
        // Thick dashed border with warm color
        border: "3px dashed #f59e0b",
        borderRadius: "8px",
        background: "rgba(245, 158, 11, 0.18)",
        boxShadow: "0 0 20px rgba(245, 158, 11, 0.55), inset 0 0 18px rgba(245, 158, 11, 0.3)",
        animation: "pulse 1.5s infinite",
        boxSizing: "border-box"
      },
      children: [
        o && /* @__PURE__ */ v.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              top: "-32px",
              left: "0",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "12px",
              fontFamily: "ui-monospace, monospace",
              background: "#2b1b0a",
              color: "#f6f1e8",
              padding: "4px 8px",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              whiteSpace: "nowrap"
            },
            children: [
              /* @__PURE__ */ v.jsx("strong", { children: o.friendlyTag }),
              o.id && /* @__PURE__ */ v.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                o.id
              ] }),
              o.classes?.length > 0 && /* @__PURE__ */ v.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                o.classes.join(".")
              ] })
            ]
          }
        ),
        /* @__PURE__ */ v.jsx("style", { children: `
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.55), inset 0 0 20px rgba(245, 158, 11, 0.28);
          }
          50% {
            box-shadow: 0 0 28px rgba(245, 158, 11, 0.75), inset 0 0 24px rgba(245, 158, 11, 0.34);
          }
        }
      ` })
      ]
    }
  );
}
function Ae({ targetElement: e, onDeselect: i, variant: a = "interactive", rect: f = null }) {
  const o = X(null), [r, u] = Q(!1), s = a === "interactive";
  return te(() => {
    const p = o.current;
    if (!p) return;
    if (!f) {
      p.style.opacity = "0";
      return;
    }
    const h = 1;
    p.style.top = `${f.top - h}px`, p.style.left = `${f.left - h}px`, p.style.width = `${f.width + h * 2}px`, p.style.height = `${f.height + h * 2}px`, p.style.opacity = "1";
  }, [f]), /* @__PURE__ */ v.jsxs(
    "button",
    {
      ref: o,
      "data-selected-element": "true",
      onClick: (p) => {
        s && (p.stopPropagation(), p.preventDefault(), i());
      },
      onMouseEnter: () => s && u(!0),
      onMouseLeave: () => s && u(!1),
      style: {
        position: "fixed",
        zIndex: 1e5,
        opacity: 0,
        transition: "border-color 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out",
        boxSizing: "border-box",
        border: r ? "3px solid #dc2626" : "3px solid #f59e0b",
        padding: 0,
        background: r ? "rgba(220, 38, 38, 0.14)" : "rgba(245, 158, 11, 0.16)",
        borderRadius: "8px",
        cursor: r ? "pointer" : "default",
        boxShadow: r ? "0 0 18px rgba(220, 38, 38, 0.45), inset 0 0 16px rgba(220, 38, 38, 0.18)" : "0 0 18px rgba(245, 158, 11, 0.45), inset 0 0 16px rgba(245, 158, 11, 0.18)",
        pointerEvents: s ? "auto" : "none"
      },
      children: [
        s && r && /* @__PURE__ */ v.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(239, 68, 68, 0.95)",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              pointerEvents: "none",
              zIndex: 1
            },
            children: "Deselect"
          }
        ),
        /* @__PURE__ */ v.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "-12px",
              right: "-12px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: r ? "#dc2626" : "#f59e0b",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              pointerEvents: "none"
            },
            children: "✓"
          }
        )
      ]
    }
  );
}
const de = 4;
function Ie({
  element: e,
  position: i,
  axis: a,
  friendlySelectors: f = !1,
  rect: o = null
}) {
  const r = X(null), u = X(null);
  te(() => {
    if (!(!r.current || !u.current)) {
      if (!o) {
        r.current.style.opacity = "0", u.current.style.opacity = "0";
        return;
      }
      if (r.current.style.opacity = "1", u.current.style.opacity = "1", a === "horizontal") {
        const d = i === "before" ? o.top : o.bottom;
        r.current.style.top = `${d - de / 2}px`, r.current.style.left = `${o.left}px`, r.current.style.width = `${Math.max(o.width, 1)}px`, r.current.style.height = `${de}px`;
        const w = i === "before" ? d - 32 : d + 8;
        u.current.style.top = `${w}px`, u.current.style.left = `${o.left}px`;
      } else {
        const d = i === "before" ? o.left : o.right;
        r.current.style.left = `${d - de / 2}px`, r.current.style.top = `${o.top}px`, r.current.style.height = `${Math.max(o.height, 1)}px`, r.current.style.width = `${de}px`;
        const w = i === "before" ? d - 140 : d + 12;
        u.current.style.left = `${w}px`, u.current.style.top = `${o.top}px`;
      }
    }
  }, [o, a, i]);
  const s = e.tagName.toLowerCase(), p = f ? je(e.tagName) : s, h = `${i === "before" ? "Insert before" : "Insert after"} ${p}`;
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: r,
        style: {
          position: "fixed",
          pointerEvents: "none",
          zIndex: 1e5,
          opacity: 0,
          background: "#f59e0b",
          boxShadow: "0 0 14px rgba(245, 158, 11, 0.45)",
          borderRadius: de
        }
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: u,
        style: {
          position: "fixed",
          pointerEvents: "none",
          zIndex: 100001,
          opacity: 0,
          background: "#2b1b0a",
          color: "#f6f1e8",
          padding: "6px 12px",
          borderRadius: "8px",
          fontSize: "12px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.28)",
          whiteSpace: "nowrap"
        },
        children: h
      }
    )
  ] });
}
function Me(e, { debug: i = !1 } = {}) {
  const [a, f] = Q(
    () => /* @__PURE__ */ new Map()
  ), o = X(null), r = Ee(() => {
    const u = /* @__PURE__ */ new Set(), s = [];
    for (const p of e)
      p && !u.has(p) && (u.add(p), s.push(p));
    return s;
  }, [e]);
  return te(() => {
    if (!r.length) {
      f(/* @__PURE__ */ new Map());
      return;
    }
    let u = null;
    const s = () => {
      o.current === null && (o.current = requestAnimationFrame(() => {
        o.current = null, f((p) => {
          const h = /* @__PURE__ */ new Map();
          let d = !1;
          for (const w of r) {
            const c = ye(w)?.rect;
            if (!c) {
              const y = p.get(w);
              y && h.set(w, y);
              continue;
            }
            const x = p.get(w);
            (!x || c.top !== x.top || c.left !== x.left || c.width !== x.width || c.height !== x.height) && (d = !0, i && console.debug("[element-selector] measure", {
              tag: w.tagName,
              id: w.id,
              className: w.className,
              rect: {
                top: c.top,
                left: c.left,
                width: c.width,
                height: c.height
              }
            })), h.set(w, c);
          }
          return !d && p.size === h.size ? p : h;
        });
      }));
    };
    return u = new ResizeObserver(s), r.forEach((p) => u?.observe(p)), window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), s(), () => {
      u && u.disconnect(), window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s), o.current !== null && (cancelAnimationFrame(o.current), o.current = null);
    };
  }, [r]), a;
}
const Fe = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
}, Ye = 300;
function We(e) {
  return e === "light" ? {
    panelBg: "#f7f7f7",
    textColor: "#111111",
    subTextColor: "#1f1f1f",
    pillBg: "#e6e6e6",
    pillBorder: "rgba(0, 0, 0, 0.10)",
    toggleSelectedBg: "#0f0f0f",
    toggleHoverBg: "rgba(0, 0, 0, 0.08)",
    toggleSelectedText: "#f7f7f7",
    toggleIdleText: "#111111",
    toggleIdleTextHover: "#111111",
    chipBg: "#e6e6e6",
    chipColor: "#111111",
    actionBg: "rgba(0, 0, 0, 0.05)",
    actionBgHover: "rgba(0, 0, 0, 0.12)",
    actionBgDisabled: "rgba(0, 0, 0, 0.03)",
    actionColor: "#111111",
    actionColorHover: "#000000",
    actionColorDisabled: "#6b7280",
    instructionTextColor: "#111111",
    shadow: "0 8px 28px rgba(0, 0, 0, 0.16)",
    border: "1px solid rgba(0, 0, 0, 0.08)"
  } : {
    panelBg: "#0f0f10",
    textColor: "#f5f5f5",
    subTextColor: "#e5e5e5",
    pillBg: "#181818",
    pillBorder: "rgba(255, 255, 255, 0.18)",
    toggleSelectedBg: "#f5f5f5",
    toggleHoverBg: "rgba(255, 255, 255, 0.14)",
    toggleSelectedText: "#0f0f10",
    toggleIdleText: "#f5f5f5",
    toggleIdleTextHover: "#ffffff",
    chipBg: "rgba(255, 255, 255, 0.12)",
    chipColor: "#f5f5f5",
    actionBg: "rgba(255, 255, 255, 0.10)",
    actionBgHover: "rgba(255, 255, 255, 0.18)",
    actionBgDisabled: "rgba(255, 255, 255, 0.06)",
    actionColor: "#f5f5f5",
    actionColorHover: "#ffffff",
    actionColorDisabled: "#9ca3af",
    instructionTextColor: "#f5f5f5",
    shadow: "0 6px 28px rgba(0, 0, 0, 0.38)",
    border: "1px solid rgba(255, 255, 255, 0.12)"
  };
}
function xe(e) {
  if (!e)
    return {};
  const i = (a) => e.getAttribute(a) || void 0;
  return {
    src: i("data-ai-src"),
    routeId: i("data-ai-route-id"),
    routeFile: i("data-ai-route-file")
  };
}
function Ce(e, i, a) {
  if (!e || e === document.documentElement)
    return null;
  const f = e.getBoundingClientRect();
  if (f.width === 0 && f.height === 0)
    return null;
  const o = [
    { edge: "top", value: Math.abs(a - f.top) },
    { edge: "bottom", value: Math.abs(a - f.bottom) },
    { edge: "left", value: Math.abs(i - f.left) },
    { edge: "right", value: Math.abs(i - f.right) }
  ];
  o.sort((s, p) => s.value - p.value);
  const r = o[0];
  if (!r)
    return null;
  const u = Fe[r.edge];
  return {
    element: e,
    position: u.position,
    axis: u.axis
  };
}
function Xe(e) {
  return e ? !!(e.id === "element-selector-overlay" || e.closest("#element-selector-overlay") || e.id === "element-selector-root" || e.closest("#element-selector-root")) : !1;
}
function Ue(e) {
  return e === document.body || e === document.documentElement;
}
function ve(e, i) {
  return i && e && e.shadowRoot && i.getRootNode() === e.shadowRoot ? i : e && !Ue(e) ? e : i;
}
function _e(e) {
  const i = e.composedPath?.() ?? [];
  for (const a of i)
    if (a instanceof HTMLElement && !Xe(a))
      return a;
  return null;
}
function Ve({
  onElementSelected: e,
  onCancel: i,
  multiSelect: a = !1,
  friendlySelectors: f = !1,
  initialMode: o = "select",
  allowModeToggle: r = !0,
  optionsPanelPosition: u,
  selectionBarText: s,
  theme: p = "dark",
  debug: h = !1
}) {
  const [d, w] = Q(o), l = d === "select" && a, c = We(p), [x, R] = Q(null), [y, k] = Q(null), [T, q] = Q([]), [G, B] = Q(!1), [F, re] = Q(
    null
  ), [b, le] = Q(() => typeof window > "u" ? !1 : window.matchMedia("(max-width: 640px)").matches), K = Ee(() => {
    const n = [];
    return x && n.push(x), y?.element && !n.includes(y.element) && n.push(y.element), T.forEach((E) => {
      n.includes(E) || n.push(E);
    }), n;
  }, [x, y, T]), O = Me(K, {
    debug: h
  }), H = Z(
    (...n) => {
      h && console.debug("[element-selector]", ...n);
    },
    [h]
  );
  te(() => {
    !h || !x || H("current hover rect", {
      tag: x.tagName,
      id: x.id,
      className: x.className,
      rect: O.get(x) ?? null
    });
  }, [x, O, h, H]);
  const ee = X({ x: 0, y: 0 }), j = X(null), U = X(null), I = X(null), se = X(null), V = X(null), D = Z(
    (n, E = {}) => {
      const L = (() => {
        try {
          return $e(n, Ye);
        } catch {
          return {
            beforeHtml: "",
            elementHtml: n.outerHTML || "",
            afterHtml: ""
          };
        }
      })(), m = {
        element: n,
        selector: ze(n),
        tag: n.tagName.toLowerCase(),
        id: n.id || null,
        classes: n.className || "",
        textPreview: n.textContent?.substring(0, 50) || "",
        beforeHtml: L.beforeHtml,
        elementHtml: L.elementHtml,
        afterHtml: L.afterHtml,
        ...xe(n),
        ...E
      };
      if (m.mode === "insert") {
        m.insertionBeforeHtml = m.insertionPosition === "after" ? m.beforeHtml + m.elementHtml : m.beforeHtml, m.insertionAfterHtml = m.insertionPosition === "before" ? m.elementHtml + m.afterHtml : m.afterHtml;
        const ne = m.insertionPosition === "before" ? "before" : "after", N = ne === "before" ? n.previousElementSibling : n, me = ne === "before" ? n : n.nextElementSibling, A = xe(N), P = xe(me);
        m.beforeSrc = A.src, m.beforeRouteId = A.routeId, m.beforeRouteFile = A.routeFile, m.afterSrc = P.src, m.afterRouteId = P.routeId, m.afterRouteFile = P.routeFile;
      } else
        m.insertionBeforeHtml = m.beforeHtml, m.insertionAfterHtml = m.afterHtml;
      return m;
    },
    []
  ), t = Z(() => {
    const n = be(
      ee.current.x,
      ee.current.y
    ), E = ve(
      V.current,
      n
    ), m = ye(E)?.element ?? E;
    if (H("hover update", {
      point: { ...ee.current },
      composedTarget: V.current?.tagName,
      pointTarget: n?.tagName,
      chosenTarget: E?.tagName,
      measurableTarget: m?.tagName,
      id: E?.id,
      className: E?.className,
      pointRoot: n?.getRootNode() instanceof ShadowRoot ? n.getRootNode().host.tagName : null,
      composedRoot: V.current?.getRootNode() instanceof ShadowRoot ? V.current.getRootNode().host.tagName : null
    }), d === "insert") {
      const N = Ce(
        m,
        ee.current.x,
        ee.current.y
      );
      (N && (!I.current || I.current.element !== N.element || I.current.position !== N.position || I.current.axis !== N.axis) || !N && I.current) && (I.current = N, k(N ?? null)), B(!!N), R(N ? N.element : null), U.current = N ? N.element : null;
      return;
    }
    if (I.current && (I.current = null, k(null)), l && T.some((N) => N.contains(m ?? E ?? N))) {
      B(!1), R(null), U.current = null;
      return;
    }
    U.current !== m && (U.current = m, R(m), B(!0), H("setCurrentHover", {
      tag: m?.tagName,
      id: m?.id,
      className: m?.className,
      rect: m ? O.get(m) ?? null : null
    }));
  }, [l, d, T, O, H]), g = Z(
    (n) => {
      const E = _e(n);
      if ((E ?? n.target)?.closest('[data-element-selector-ui="true"]')) {
        j.current && (clearTimeout(j.current), j.current = null), se.current = null, V.current = null, R(null), k(null), U.current = null, I.current = null, B(!1);
        return;
      }
      const m = be(n.clientX, n.clientY);
      V.current = E, se.current = ve(E, m), ee.current = {
        x: n.clientX,
        y: n.clientY
      }, j.current && clearTimeout(j.current), j.current = setTimeout(() => {
        t();
      }, 50);
    },
    [t]
  ), S = Z(() => {
    j.current && (clearTimeout(j.current), j.current = null), R(null), k(null), U.current = null, I.current = null, B(!1), se.current = null, V.current = null;
  }, []), C = Z(
    (n) => {
      n !== d && (H("mode toggle", { from: d, to: n }), w(n), q([]), k(null), re(null), R(null), U.current = null, I.current = null, B(!1));
    },
    [d, H]
  ), Y = Z(
    (n) => {
      const E = b && !l, L = n.target;
      if (L.closest('[data-selected-element="true"]') || L.closest('[data-element-selector-ui="true"]'))
        return;
      n.preventDefault(), n.stopPropagation();
      const m = _e(n), ne = be(n.clientX, n.clientY), N = ve(m, ne) ?? ne, A = ye(N)?.element ?? N;
      if (d === "insert") {
        const P = Ce(
          A,
          n.clientX,
          n.clientY
        );
        if (!P) {
          H("insert click with no candidate", {
            point: { x: n.clientX, y: n.clientY }
          });
          return;
        }
        if (E) {
          re(P), k(P), q([]);
          return;
        }
        e([
          D(P.element, {
            mode: "insert",
            insertionPosition: P.position,
            insertionAxis: P.axis
          })
        ]);
        return;
      }
      if (A && !(l && T.some((P) => P.contains(A)))) {
        if (l) {
          q((P) => P.includes(A) ? P : [...P, A]);
          return;
        }
        if (E) {
          q([A]), re(null);
          return;
        }
        e([D(A, { mode: "select" })]), H("select click", {
          tag: A.tagName,
          id: A.id,
          className: A.className,
          rect: O.get(A) ?? null
        });
      }
    },
    [
      l,
      b,
      d,
      e,
      T,
      D,
      O,
      H
    ]
  ), W = Z((n) => {
    q(
      (E) => E.filter((L) => L !== n)
    );
  }, []);
  te(() => (document.addEventListener("mousemove", g, !0), document.addEventListener("mouseleave", S, !0), document.addEventListener("click", Y, !0), H("selector mounted", {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    tracked: K.length
  }), () => {
    document.removeEventListener("mousemove", g, !0), document.removeEventListener("mouseleave", S, !0), document.removeEventListener("click", Y, !0), j.current && clearTimeout(j.current), H("selector unmounted");
  }), [
    g,
    S,
    Y,
    K.length,
    H
  ]), te(() => {
    const n = (E) => {
      switch (E.key) {
        case "Escape":
          i();
          break;
        case "Enter":
          if (d === "insert" && y) {
            e([
              D(y.element, {
                mode: "insert",
                insertionPosition: y.position,
                insertionAxis: y.axis
              })
            ]);
            break;
          }
          if (l && T.length > 0) {
            const L = T.map(
              (m) => D(m, { mode: "select" })
            );
            e(L);
          }
          break;
      }
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [
    l,
    y,
    d,
    i,
    e,
    T,
    D
  ]), te(() => {
    const n = window.matchMedia("(max-width: 640px)"), E = () => le(n.matches);
    return E(), n.addEventListener("change", E), () => n.removeEventListener("change", E);
  }, []);
  const z = {
    selectLabel: s?.selectLabel ?? "Select",
    insertLabel: s?.insertLabel ?? "Insert",
    instructionSelectSingle: s?.instructionSelectSingle ?? "Click an element to select",
    instructionSelectMulti: s?.instructionSelectMulti ?? "Click elements to select",
    instructionInsert: s?.instructionInsert ?? "Click to choose where to insert new content",
    confirmLabel: s?.confirmLabel ?? "✓",
    cancelLabel: s?.cancelLabel ?? "✕"
  }, ae = d === "insert" ? z.instructionInsert : l ? z.instructionSelectMulti : z.instructionSelectSingle, _ = Z(() => {
    const n = b && !l;
    if (l && T.length > 0) {
      const E = T.map(
        (L) => D(L, { mode: "select" })
      );
      e(E);
      return;
    }
    if (n) {
      if (d === "select" && T[0]) {
        e([
          D(T[0], { mode: "select" })
        ]);
        return;
      }
      d === "insert" && F && e([
        D(F.element, {
          mode: "insert",
          insertionPosition: F.position,
          insertionAxis: F.axis
        })
      ]);
    }
  }, [
    l,
    b,
    d,
    e,
    F,
    T,
    D
  ]), J = b && !l, oe = l ? T.length > 0 : J ? d === "select" ? T.length > 0 : !!F : !1, ge = l || J, Re = {
    vertical: u?.vertical ?? "top",
    horizontal: u?.horizontal ?? "center"
  }, M = {
    position: "fixed",
    background: c.panelBg,
    color: c.textColor,
    padding: b ? "14px 16px" : "16px 24px",
    borderRadius: b ? "16px" : "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: c.shadow,
    border: c.border,
    zIndex: 100001,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: b ? "10px" : "16px",
    pointerEvents: "auto",
    width: b ? "calc(100% - 24px)" : void 0,
    maxWidth: b ? "min(720px, calc(100% - 24px))" : "min(960px, calc(100% - 48px))",
    boxSizing: "border-box",
    flexWrap: "nowrap",
    overflowX: "auto",
    justifyContent: "space-between"
  };
  if (b)
    M.left = "12px", M.right = "12px", M.bottom = "16px", M.top = void 0, M.transform = "none";
  else
    switch (Re.vertical === "top" ? M.top = "24px" : M.bottom = "24px", Re.horizontal) {
      case "left":
        M.left = "24px", M.transform = "none";
        break;
      case "right":
        M.right = "24px", M.transform = "none";
        break;
      default:
        M.left = "50%", M.transform = "translateX(-50%)";
        break;
    }
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      id: "element-selector-overlay",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 99999
      },
      children: [
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            "data-element-selector-ui": "true",
            style: {
              pointerEvents: "auto",
              ...M
            },
            children: [
              r && /* @__PURE__ */ v.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    background: "transparent",
                    borderRadius: "999px",
                    padding: 0,
                    gap: 0,
                    boxShadow: "none",
                    width: void 0,
                    justifyContent: "flex-start",
                    flexShrink: 1,
                    flexGrow: b ? 1 : void 0
                  },
                  children: /* @__PURE__ */ v.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        gap: b ? "6px" : "4px",
                        flex: b ? "1 1 auto" : void 0,
                        flexShrink: 1
                      },
                      children: [
                        /* @__PURE__ */ v.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (n) => {
                              n.preventDefault(), n.stopPropagation(), C("select");
                            },
                            style: {
                              border: d === "select" ? "1px solid " + c.toggleSelectedBg : p === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "999px 0 0 999px",
                              padding: b ? "10px 12px" : "6px 14px",
                              minHeight: b ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: d === "select" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: b ? 1 : void 0,
                              background: d === "select" ? c.toggleSelectedBg : "transparent",
                              color: d === "select" ? c.toggleSelectedText : c.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": d === "select" ? c.toggleSelectedText : c.toggleIdleTextHover
                            },
                            children: z.selectLabel
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (n) => {
                              n.preventDefault(), n.stopPropagation(), C("insert");
                            },
                            style: {
                              border: d === "insert" ? "1px solid " + c.toggleSelectedBg : p === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "0 999px 999px 0",
                              padding: b ? "10px 12px" : "6px 14px",
                              minHeight: b ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: d === "insert" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: b ? 1 : void 0,
                              background: d === "insert" ? c.toggleSelectedBg : "transparent",
                              color: d === "insert" ? c.toggleSelectedText : c.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": d === "insert" ? c.toggleSelectedText : c.toggleIdleTextHover
                            },
                            children: z.insertLabel
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              !b && /* @__PURE__ */ v.jsx(
                "span",
                {
                  className: "element-selector-instruction",
                  style: {
                    color: c.instructionTextColor,
                    fontWeight: 600,
                    flex: 1,
                    textAlign: "center",
                    lineHeight: 1.4,
                    fontSize: "15px"
                  },
                  children: ae
                }
              ),
              /* @__PURE__ */ v.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: b ? "10px" : "8px",
                    width: void 0,
                    justifyContent: "flex-end",
                    flex: b ? "1 1 auto" : void 0,
                    flexWrap: "nowrap"
                  },
                  children: [
                    ge && /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        disabled: !oe,
                        className: "element-selector-action element-selector-confirm",
                        onClick: (n) => {
                          n.preventDefault(), n.stopPropagation(), oe && _();
                        },
                        style: {
                          border: "none",
                          borderRadius: b ? "10px" : "8px",
                          padding: b ? "12px 14px" : "8px 12px",
                          minHeight: b ? "44px" : void 0,
                          flex: b ? "0 1 auto" : void 0,
                          cursor: oe ? "pointer" : "not-allowed",
                          fontSize: b ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": c.actionBg,
                          "--es-action-bg-hover": c.actionBgHover,
                          "--es-action-bg-disabled": c.actionBgDisabled,
                          "--es-action-color": c.actionColor,
                          "--es-action-color-hover": c.actionColorHover,
                          "--es-action-color-disabled": c.actionColorDisabled
                        },
                        "aria-label": z.confirmLabel,
                        children: z.confirmLabel
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-action element-selector-cancel",
                        onClick: (n) => {
                          n.preventDefault(), n.stopPropagation(), i();
                        },
                        style: {
                          border: "none",
                          borderRadius: b ? "10px" : "8px",
                          padding: b ? "12px 14px" : "8px 12px",
                          cursor: "pointer",
                          fontSize: b ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": c.actionBg,
                          "--es-action-bg-hover": c.actionBgHover,
                          "--es-action-bg-disabled": c.actionBgDisabled,
                          "--es-action-color": c.actionColor,
                          "--es-action-color-hover": c.actionColorHover,
                          "--es-action-color-disabled": c.actionColorDisabled,
                          flex: b ? "0 1 auto" : void 0,
                          marginLeft: b ? "6px" : void 0
                        },
                        "aria-label": z.cancelLabel,
                        children: z.cancelLabel
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        d === "select" && x && (!l || !T.includes(x)) && !b && /* @__PURE__ */ v.jsx(
          Be,
          {
            targetElement: x,
            friendlySelectors: f,
            rect: O.get(x) ?? null
          }
        ),
        d === "insert" && y && /* @__PURE__ */ v.jsx(
          Ie,
          {
            element: y.element,
            position: y.position,
            axis: y.axis,
            friendlySelectors: f,
            rect: O.get(y.element) ?? null
          }
        ),
        (l || b && T.length > 0) && T.map((n, E) => /* @__PURE__ */ v.jsx(
          Ae,
          {
            targetElement: n,
            onDeselect: () => W(n),
            rect: O.get(n) ?? null
          },
          `selected-${E}`
        )),
        /* @__PURE__ */ v.jsx("style", { children: `
        body {
          cursor: ${G ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${G ? "crosshair" : "default"} !important;
        }
        #element-selector-overlay [data-element-selector-ui="true"],
        #element-selector-overlay [data-element-selector-ui="true"] * {
          cursor: default !important;
        }
        #element-selector-overlay .element-selector-toggle,
        #element-selector-overlay .element-selector-action,
        #element-selector-overlay button {
          cursor: pointer !important;
        }
        #element-selector-overlay .element-selector-toggle {
          background-color: var(--es-toggle-bg);
          color: var(--es-toggle-color);
        }
        #element-selector-overlay .element-selector-toggle:hover {
          background-color: var(--es-toggle-bg-hover);
          color: var(--es-toggle-color-hover);
        }
        #element-selector-overlay .element-selector-action {
          background-color: var(--es-action-bg);
          color: var(--es-action-color);
        }
        #element-selector-overlay .element-selector-action:hover:not(:disabled) {
          background-color: var(--es-action-bg-hover);
          color: var(--es-action-color-hover, var(--es-action-color));
        }
        #element-selector-overlay .element-selector-action:disabled {
          background-color: var(--es-action-bg-disabled);
          color: var(--es-action-color-disabled);
        }
        #element-selector-overlay .element-selector-instruction {
          text-align: center;
        }
        @media (min-width: 768px) {
          #element-selector-overlay .element-selector-instruction {
            min-width: 22em;
          }
        }
      ` })
      ]
    }
  );
}
let $ = null, ie = null;
function qe() {
  return $ && ie || ($ = document.createElement("div"), $.id = "element-selector-persistent-highlights", $.style.position = "fixed", $.style.inset = "0", $.style.pointerEvents = "none", $.style.zIndex = "99998", document.body.appendChild($), ie = He.createRoot($)), ie;
}
function Ge({
  elements: e,
  friendlySelectors: i
}) {
  const a = Ee(
    () => e.map((o) => o.element),
    [e]
  ), f = Me(a);
  return e.length ? /* @__PURE__ */ v.jsx(v.Fragment, { children: e.map((o, r) => {
    const u = f.get(o.element) ?? null;
    return o.mode === "insert" && o.insertionPosition && o.insertionAxis ? /* @__PURE__ */ v.jsx(
      Ie,
      {
        element: o.element,
        position: o.insertionPosition,
        axis: o.insertionAxis,
        friendlySelectors: i,
        rect: u
      },
      `persistent-insert-${r}`
    ) : /* @__PURE__ */ v.jsx(
      Ae,
      {
        targetElement: o.element,
        onDeselect: () => {
        },
        variant: "passive",
        rect: u
      },
      `persistent-select-${r}`
    );
  }) }) : null;
}
function Je(e, i) {
  if (!e.length) return;
  qe().render(
    /* @__PURE__ */ v.jsx(we.StrictMode, { children: /* @__PURE__ */ v.jsx(Ge, { elements: e, friendlySelectors: i }) })
  );
}
function Ze() {
  ie && (ie.unmount(), ie = null), $?.parentNode && $.parentNode.removeChild($), $ = null;
}
function et(e = {}) {
  const {
    multiSelect: i = !1,
    friendlySelectors: a = !1,
    mode: f = "select",
    allowModeToggle: o = !0,
    retainSelectionHighlights: r = !1,
    optionsPanelPosition: u,
    selectionBarText: s,
    theme: p = "dark",
    debug: h = !1
  } = e;
  return Ze(), new Promise((d, w) => {
    const l = document.createElement("div");
    l.id = "element-selector-root", l.style.position = "fixed", l.style.zIndex = "999999", l.style.inset = "0", l.style.pointerEvents = "none", document.body.appendChild(l);
    const c = He.createRoot(l), x = () => {
      c.unmount(), l.parentNode && l.parentNode.removeChild(l);
    }, R = (k) => {
      r && Je(k, a), x(), !i && k.length > 0 ? d(k[0]) : d(k);
    }, y = () => {
      x(), w(new Error("Element selection cancelled by user"));
    };
    c.render(
      /* @__PURE__ */ v.jsx(we.StrictMode, { children: /* @__PURE__ */ v.jsx(
        Ve,
        {
          onElementSelected: R,
          onCancel: y,
          multiSelect: i,
          friendlySelectors: a,
          initialMode: f,
          allowModeToggle: o,
          optionsPanelPosition: u,
          selectionBarText: s,
          theme: p,
          debug: h
        }
      ) })
    );
  });
}
export {
  Ve as ElementSelector,
  ze as buildElementSelector,
  be as findElementAtCoordinates,
  et as launchSelector,
  Ze as resetSelectionHighlights
};
