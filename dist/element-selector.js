import fe, { useRef as D, useEffect as G, useState as W, useMemo as pe, useCallback as X } from "react";
import he from "react-dom/client";
var se = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Te() {
  if (ge) return ne;
  ge = 1;
  var t = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function u(s, i, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      o = {};
      for (var p in i)
        p !== "key" && (o[p] = i[p]);
    } else o = i;
    return i = o.ref, {
      $$typeof: t,
      type: s,
      key: a,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return ne.Fragment = c, ne.jsx = u, ne.jsxs = u, ne;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function Ce() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === V ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case S:
          return "Profiler";
        case E:
          return "StrictMode";
        case z:
          return "Suspense";
        case B:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case N:
            return "Portal";
          case J:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case P:
            var f = e.render;
            return e = e.displayName, e || (e = f.displayName || f.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case g:
            return f = e.displayName || null, f !== null ? f : t(e.type) || "Memo";
          case Q:
            f = e._payload, e = e._init;
            try {
              return t(e(f));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function u(e) {
      try {
        c(e);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var v = f.error, _ = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return v.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), c(e);
      }
    }
    function s(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Q)
        return "<...>";
      try {
        var f = t(e);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(e) {
      if (H.call(e, "key")) {
        var f = Object.getOwnPropertyDescriptor(e, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, f) {
      function v() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: v,
        configurable: !0
      });
    }
    function m() {
      var e = t(this.type);
      return te[e] || (te[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function l(e, f, v, _, $, O, U, oe) {
      return v = O.ref, e = {
        $$typeof: w,
        type: e,
        key: f,
        props: O,
        _owner: $
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, f, v, _, $, O, U, oe) {
      var C = f.children;
      if (C !== void 0)
        if (_)
          if (Y(C)) {
            for (_ = 0; _ < C.length; _++)
              d(C[_]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(C);
      if (H.call(f, "key")) {
        C = t(e);
        var T = Object.keys(f).filter(function(k) {
          return k !== "key";
        });
        _ = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", re[C + _] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          C,
          T,
          C
        ), re[C + _] = !0);
      }
      if (C = null, v !== void 0 && (u(v), C = "" + v), a(f) && (u(f.key), C = "" + f.key), "key" in f) {
        v = {};
        for (var r in f)
          r !== "key" && (v[r] = f[r]);
      } else v = f;
      return C && p(
        v,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), l(
        e,
        C,
        O,
        $,
        i(),
        v,
        U,
        oe
      );
    }
    function d(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var n = fe, w = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), J = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), F = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, Y = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    n = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var A, te = {}, Z = n.react_stack_bottom_frame.bind(
      n,
      o
    )(), K = I(s(o)), re = {};
    ie.Fragment = b, ie.jsx = function(e, f, v, _, $) {
      var O = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        f,
        v,
        !1,
        _,
        $,
        O ? Error("react-stack-top-frame") : Z,
        O ? I(s(e)) : K
      );
    }, ie.jsxs = function(e, f, v, _, $) {
      var O = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        f,
        v,
        !0,
        _,
        $,
        O ? Error("react-stack-top-frame") : Z,
        O ? I(s(e)) : K
      );
    };
  }()), ie;
}
var be;
function Ne() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? se.exports = Te() : se.exports = Ce()), se.exports;
}
var x = Ne();
function ve(t) {
  if (!t) return [];
  const c = t.className;
  if (typeof c == "string")
    return c.split(/\s+/).filter(Boolean);
  const u = c?.baseVal;
  return typeof u == "string" ? u.split(/\s+/).filter(Boolean) : t.classList ? Array.from(t.classList).filter(Boolean) : [];
}
function ue(t, c) {
  const u = document.elementsFromPoint(t, c);
  for (const s of u)
    if (!(s.id === "element-selector-overlay" || s.closest("#element-selector-overlay") || s.id === "element-selector-root" || s.closest("#element-selector-root")) && !(s.tagName !== "svg" && s.tagName !== "SVG" && s.closest("svg")))
      return s;
  return document.body;
}
function _e(t) {
  if (!t || t === document.body)
    return "body";
  if (t.id)
    return `#${CSS.escape(t.id)}`;
  const c = [];
  let u = t;
  for (; u && u !== document.body; ) {
    let s = u.tagName.toLowerCase();
    const i = ve(u).filter((o) => !o.includes(":")).slice(0, 2);
    if (i.length > 0) {
      const o = i.map((a) => `.${CSS.escape(a)}`).join("");
      s += o;
    }
    if (u.parentElement) {
      const o = u.tagName, p = Array.from(u.parentElement.children).filter(
        (m) => m.tagName === o
      );
      if (p.length > 1) {
        const m = p.indexOf(u) + 1;
        s += `:nth-of-type(${m})`;
      }
    }
    c.unshift(s);
    try {
      const o = c.join(" > "), a = document.querySelectorAll(o);
      if (a.length === 1 && a[0] === t)
        return o;
    } catch {
    }
    u = u.parentElement;
  }
  return c.join(" > ");
}
function ye(t) {
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
  }[t.toLowerCase()] || t.toLowerCase();
}
function je(t, c = 300, { maxAncestors: u = 10 } = {}) {
  if (!t || !t.parentNode)
    throw new Error("Node must be attached to the DOM (with a parent).");
  const s = (n) => n.nodeType === Node.ELEMENT_NODE ? n.outerHTML : n.nodeType === Node.TEXT_NODE ? (n.textContent ?? "").toString() : new XMLSerializer().serializeToString(n), i = (n, w) => {
    const N = [];
    let b = w;
    for (; b && b !== n; ) {
      const E = b.parentNode;
      if (!E)
        throw new Error("Failed to resolve node path for context extraction.");
      const S = Array.prototype.indexOf.call(E.childNodes, b);
      if (S === -1)
        throw new Error("Unable to map node into cloned context tree.");
      N.unshift(S), b = E;
    }
    if (b !== n)
      throw new Error("Context root does not contain the requested node.");
    return N;
  }, o = (n) => {
    n.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    ).forEach((N) => N.remove());
  }, a = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`
  }, p = (n) => {
    const w = document.createElement("div"), N = n.cloneNode(!0);
    if (w.appendChild(N), o(w), !w.firstChild)
      return {
        beforeHtml: "",
        elementHtml: s(t),
        afterHtml: ""
      };
    const b = i(n, t);
    let E = w.firstChild;
    for (const ee of b) {
      const V = E.childNodes.item(ee);
      if (!V)
        throw new Error("Failed to mirror node inside cloned context tree.");
      E = V;
    }
    const S = E.parentNode;
    if (!S)
      return {
        beforeHtml: "",
        elementHtml: s(t),
        afterHtml: ""
      };
    const L = document.createTextNode(a.start), J = document.createTextNode(a.end);
    S.insertBefore(L, E), S.insertBefore(J, E.nextSibling), S.removeChild(E);
    const P = w.innerHTML, z = P.indexOf(a.start), B = P.indexOf(a.end);
    if (z === -1 || B === -1 || B < z)
      throw new Error("Failed to locate context markers during serialization.");
    const g = P.slice(0, z), Q = P.slice(B + a.end.length);
    return {
      beforeHtml: g,
      elementHtml: s(t),
      afterHtml: Q
    };
  }, m = (n) => n.parentNode ? n.parentNode.nodeType === Node.DOCUMENT_NODE ? n.parentNode.documentElement ?? null : n.parentNode : null;
  let l = 0, h = t.parentNode ?? t, d = p(h);
  for (; l < u && (d.beforeHtml.length < c || d.afterHtml.length < c); ) {
    const n = m(h);
    if (!n || n === h || (l += 1, h = n, d = p(h), !h.parentNode || h.parentNode.nodeType === Node.DOCUMENT_NODE))
      break;
  }
  return d;
}
function Ie({
  targetElement: t,
  friendlySelectors: c = !1,
  rect: u = null
}) {
  const s = D(null);
  G(() => {
    const o = s.current;
    if (!o) return;
    if (!u) {
      o.style.opacity = "0";
      return;
    }
    const a = 1;
    o.style.top = `${u.top - a}px`, o.style.left = `${u.left - a}px`, o.style.width = `${u.width + a * 2}px`, o.style.height = `${u.height + a * 2}px`, o.style.opacity = "1";
  }, [u]);
  const i = t ? {
    tag: t.tagName.toLowerCase(),
    friendlyTag: c ? ye(t.tagName) : t.tagName.toLowerCase(),
    id: t.id,
    classes: ve(t).slice(0, 2)
  } : null;
  return /* @__PURE__ */ x.jsxs(
    "div",
    {
      ref: s,
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
        i && /* @__PURE__ */ x.jsxs(
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
              /* @__PURE__ */ x.jsx("strong", { children: i.friendlyTag }),
              i.id && /* @__PURE__ */ x.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                i.id
              ] }),
              i.classes?.length > 0 && /* @__PURE__ */ x.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                i.classes.join(".")
              ] })
            ]
          }
        ),
        /* @__PURE__ */ x.jsx("style", { children: `
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
function we({ targetElement: t, onDeselect: c, variant: u = "interactive", rect: s = null }) {
  const i = D(null), [o, a] = W(!1), p = u === "interactive";
  return G(() => {
    const m = i.current;
    if (!m) return;
    if (!s) {
      m.style.opacity = "0";
      return;
    }
    const l = 1;
    m.style.top = `${s.top - l}px`, m.style.left = `${s.left - l}px`, m.style.width = `${s.width + l * 2}px`, m.style.height = `${s.height + l * 2}px`, m.style.opacity = "1";
  }, [s]), /* @__PURE__ */ x.jsxs(
    "button",
    {
      ref: i,
      "data-selected-element": "true",
      onClick: (m) => {
        p && (m.stopPropagation(), m.preventDefault(), c());
      },
      onMouseEnter: () => p && a(!0),
      onMouseLeave: () => p && a(!1),
      style: {
        position: "fixed",
        zIndex: 1e5,
        opacity: 0,
        transition: "border-color 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out",
        boxSizing: "border-box",
        border: o ? "3px solid #dc2626" : "3px solid #f59e0b",
        padding: 0,
        background: o ? "rgba(220, 38, 38, 0.14)" : "rgba(245, 158, 11, 0.16)",
        borderRadius: "8px",
        cursor: o ? "pointer" : "default",
        boxShadow: o ? "0 0 18px rgba(220, 38, 38, 0.45), inset 0 0 16px rgba(220, 38, 38, 0.18)" : "0 0 18px rgba(245, 158, 11, 0.45), inset 0 0 16px rgba(245, 158, 11, 0.18)",
        pointerEvents: p ? "auto" : "none"
      },
      children: [
        p && o && /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "-12px",
              right: "-12px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: o ? "#dc2626" : "#f59e0b",
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
const le = 4;
function Ee({
  element: t,
  position: c,
  axis: u,
  friendlySelectors: s = !1,
  rect: i = null
}) {
  const o = D(null), a = D(null);
  G(() => {
    if (!(!o.current || !a.current)) {
      if (!i) {
        o.current.style.opacity = "0", a.current.style.opacity = "0";
        return;
      }
      if (o.current.style.opacity = "1", a.current.style.opacity = "1", u === "horizontal") {
        const h = c === "before" ? i.top : i.bottom;
        o.current.style.top = `${h - le / 2}px`, o.current.style.left = `${i.left}px`, o.current.style.width = `${Math.max(i.width, 1)}px`, o.current.style.height = `${le}px`;
        const d = c === "before" ? h - 32 : h + 8;
        a.current.style.top = `${d}px`, a.current.style.left = `${i.left}px`;
      } else {
        const h = c === "before" ? i.left : i.right;
        o.current.style.left = `${h - le / 2}px`, o.current.style.top = `${i.top}px`, o.current.style.height = `${Math.max(i.height, 1)}px`, o.current.style.width = `${le}px`;
        const d = c === "before" ? h - 140 : h + 12;
        a.current.style.left = `${d}px`, a.current.style.top = `${i.top}px`;
      }
    }
  }, [i, u, c]);
  const p = t.tagName.toLowerCase(), m = s ? ye(t.tagName) : p, l = `${c === "before" ? "Insert before" : "Insert after"} ${m}`;
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(
      "div",
      {
        ref: o,
        style: {
          position: "fixed",
          pointerEvents: "none",
          zIndex: 1e5,
          opacity: 0,
          background: "#f59e0b",
          boxShadow: "0 0 14px rgba(245, 158, 11, 0.45)",
          borderRadius: le
        }
      }
    ),
    /* @__PURE__ */ x.jsx(
      "div",
      {
        ref: a,
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
        children: l
      }
    )
  ] });
}
function Se(t, { skipOffscreen: c = !0 } = {}) {
  const [u, s] = W(
    () => /* @__PURE__ */ new Map()
  ), i = D(/* @__PURE__ */ new Map()), o = D(null), a = pe(() => {
    const p = /* @__PURE__ */ new Set(), m = [];
    for (const l of t)
      l && !p.has(l) && (p.add(l), m.push(l));
    return m;
  }, [t]);
  return G(() => {
    if (!a.length) {
      s(/* @__PURE__ */ new Map());
      return;
    }
    let p = null, m = null;
    const l = () => {
      o.current === null && (o.current = requestAnimationFrame(() => {
        o.current = null, s((h) => {
          const d = /* @__PURE__ */ new Map();
          let n = !1;
          for (const w of a) {
            if (!(!c || i.current.get(w) || i.current.size === 0)) {
              const L = h.get(w);
              L && d.set(w, L);
              continue;
            }
            const b = w.getBoundingClientRect(), E = h.get(w);
            (!E || b.top !== E.top || b.left !== E.left || b.width !== E.width || b.height !== E.height) && (n = !0), d.set(w, b);
          }
          return !n && h.size === d.size ? h : d;
        });
      }));
    };
    return p = new ResizeObserver(l), a.forEach((h) => p?.observe(h)), "IntersectionObserver" in window && (m = new IntersectionObserver(
      (h) => {
        h.forEach((d) => {
          i.current.set(d.target, d.isIntersecting);
        }), l();
      },
      { root: null, threshold: 0 }
    ), a.forEach((h) => m?.observe(h))), window.addEventListener("scroll", l, !0), window.addEventListener("resize", l), l(), () => {
      p && p.disconnect(), m && m.disconnect(), window.removeEventListener("scroll", l, !0), window.removeEventListener("resize", l), o.current !== null && (cancelAnimationFrame(o.current), o.current = null);
    };
  }, [a, c]), u;
}
const He = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
}, Pe = 300;
function Ae(t) {
  return t === "light" ? {
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
function de(t) {
  if (!t)
    return {};
  const c = (u) => t.getAttribute(u) || void 0;
  return {
    src: c("data-ai-src"),
    routeId: c("data-ai-route-id"),
    routeFile: c("data-ai-route-file")
  };
}
function xe(t, c, u) {
  if (!t || t === document.documentElement)
    return null;
  const s = t.getBoundingClientRect();
  if (s.width === 0 && s.height === 0)
    return null;
  const i = [
    { edge: "top", value: Math.abs(u - s.top) },
    { edge: "bottom", value: Math.abs(u - s.bottom) },
    { edge: "left", value: Math.abs(c - s.left) },
    { edge: "right", value: Math.abs(c - s.right) }
  ];
  i.sort((p, m) => p.value - m.value);
  const o = i[0];
  if (!o)
    return null;
  const a = He[o.edge];
  return {
    element: t,
    position: a.position,
    axis: a.axis
  };
}
function Oe({
  onElementSelected: t,
  onCancel: c,
  multiSelect: u = !1,
  friendlySelectors: s = !1,
  initialMode: i = "select",
  allowModeToggle: o = !0,
  optionsPanelPosition: a,
  selectionBarText: p,
  theme: m = "dark"
}) {
  const [l, h] = W(i), d = l === "select" && u, n = Ae(m), [w, N] = W(null), [b, E] = W(null), [S, L] = W([]), [J, P] = W(!1), [z, B] = W(null), [g, Q] = W(() => typeof window > "u" ? !1 : window.matchMedia("(max-width: 640px)").matches), ee = pe(() => {
    const r = [];
    return w && r.push(w), b?.element && !r.includes(b.element) && r.push(b.element), S.forEach((k) => {
      r.includes(k) || r.push(k);
    }), r;
  }, [w, b, S]), V = Se(ee), F = D({ x: 0, y: 0 }), H = D(null), Y = D(null), I = D(null), A = X(
    (r, k = {}) => {
      const R = (() => {
        try {
          return je(r, Pe);
        } catch {
          return {
            beforeHtml: "",
            elementHtml: r.outerHTML || "",
            afterHtml: ""
          };
        }
      })(), y = {
        element: r,
        selector: _e(r),
        tag: r.tagName.toLowerCase(),
        id: r.id || null,
        classes: r.className || "",
        textPreview: r.textContent?.substring(0, 50) || "",
        beforeHtml: R.beforeHtml,
        elementHtml: R.elementHtml,
        afterHtml: R.afterHtml,
        ...de(r),
        ...k
      };
      if (y.mode === "insert") {
        y.insertionBeforeHtml = y.insertionPosition === "after" ? y.beforeHtml + y.elementHtml : y.beforeHtml, y.insertionAfterHtml = y.insertionPosition === "before" ? y.elementHtml + y.afterHtml : y.afterHtml;
        const j = y.insertionPosition === "before" ? "before" : "after", Re = j === "before" ? r.previousElementSibling : r, ke = j === "before" ? r : r.nextElementSibling, ae = de(Re), ce = de(ke);
        y.beforeSrc = ae.src, y.beforeRouteId = ae.routeId, y.beforeRouteFile = ae.routeFile, y.afterSrc = ce.src, y.afterRouteId = ce.routeId, y.afterRouteFile = ce.routeFile;
      } else
        y.insertionBeforeHtml = y.beforeHtml, y.insertionAfterHtml = y.afterHtml;
      return y;
    },
    []
  ), te = X(() => {
    const r = ue(
      F.current.x,
      F.current.y
    );
    if (l === "insert") {
      const R = xe(
        r,
        F.current.x,
        F.current.y
      );
      (R && (!I.current || I.current.element !== R.element || I.current.position !== R.position || I.current.axis !== R.axis) || !R && I.current) && (I.current = R, E(R ?? null)), P(!!R), N(R ? R.element : null), Y.current = R ? R.element : null;
      return;
    }
    if (I.current && (I.current = null, E(null)), d && S.some((R) => R.contains(r))) {
      P(!1), N(null), Y.current = null;
      return;
    }
    Y.current !== r && (Y.current = r, N(r), P(!0));
  }, [d, l, S]), Z = X(
    (r) => {
      if (r.target.closest('[data-element-selector-ui="true"]')) {
        H.current && (clearTimeout(H.current), H.current = null), N(null), E(null), Y.current = null, I.current = null, P(!1);
        return;
      }
      F.current = {
        x: r.clientX,
        y: r.clientY
      }, H.current && clearTimeout(H.current), H.current = setTimeout(() => {
        te();
      }, 50);
    },
    [te]
  ), K = X(() => {
    H.current && (clearTimeout(H.current), H.current = null), N(null), E(null), Y.current = null, I.current = null, P(!1);
  }, []), re = X(
    (r) => {
      r !== l && (h(r), L([]), E(null), B(null), N(null), Y.current = null, I.current = null, P(!1));
    },
    [l]
  ), e = X(
    (r) => {
      const k = g && !d, R = r.target;
      if (R.closest('[data-selected-element="true"]') || R.closest('[data-element-selector-ui="true"]'))
        return;
      if (r.preventDefault(), r.stopPropagation(), l === "insert") {
        const j = xe(
          ue(r.clientX, r.clientY),
          r.clientX,
          r.clientY
        );
        if (!j)
          return;
        if (k) {
          B(j), E(j), L([]);
          return;
        }
        t([
          A(j.element, {
            mode: "insert",
            insertionPosition: j.position,
            insertionAxis: j.axis
          })
        ]);
        return;
      }
      const y = ue(
        r.clientX,
        r.clientY
      );
      if (y && !(d && S.some((j) => j.contains(y)))) {
        if (d) {
          L((j) => j.includes(y) ? j : [...j, y]);
          return;
        }
        if (k) {
          L([y]), B(null);
          return;
        }
        t([
          A(y, { mode: "select" })
        ]);
      }
    },
    [d, g, l, t, S, A]
  ), f = X((r) => {
    L(
      (k) => k.filter((R) => R !== r)
    );
  }, []);
  G(() => (document.addEventListener("mousemove", Z, !0), document.addEventListener("mouseleave", K, !0), document.addEventListener("click", e, !0), () => {
    document.removeEventListener("mousemove", Z, !0), document.removeEventListener("mouseleave", K, !0), document.removeEventListener("click", e, !0), H.current && clearTimeout(H.current);
  }), [Z, K, e]), G(() => {
    const r = (k) => {
      switch (k.key) {
        case "Escape":
          c();
          break;
        case "Enter":
          if (l === "insert" && b) {
            t([
              A(b.element, {
                mode: "insert",
                insertionPosition: b.position,
                insertionAxis: b.axis
              })
            ]);
            break;
          }
          if (d && S.length > 0) {
            const R = S.map(
              (y) => A(y, { mode: "select" })
            );
            t(R);
          }
          break;
      }
    };
    return window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r);
  }, [
    d,
    b,
    l,
    c,
    t,
    S,
    A
  ]), G(() => {
    const r = window.matchMedia("(max-width: 640px)"), k = () => Q(r.matches);
    return k(), r.addEventListener("change", k), () => r.removeEventListener("change", k);
  }, []);
  const v = {
    selectLabel: p?.selectLabel ?? "Select",
    insertLabel: p?.insertLabel ?? "Insert",
    instructionSelectSingle: p?.instructionSelectSingle ?? "Click an element to select",
    instructionSelectMulti: p?.instructionSelectMulti ?? "Click elements to select",
    instructionInsert: p?.instructionInsert ?? "Click to choose where to insert new content",
    confirmLabel: p?.confirmLabel ?? "✓",
    cancelLabel: p?.cancelLabel ?? "✕"
  }, _ = l === "insert" ? v.instructionInsert : d ? v.instructionSelectMulti : v.instructionSelectSingle, $ = X(() => {
    const r = g && !d;
    if (d && S.length > 0) {
      const k = S.map(
        (R) => A(R, { mode: "select" })
      );
      t(k);
      return;
    }
    if (r) {
      if (l === "select" && S[0]) {
        t([
          A(S[0], { mode: "select" })
        ]);
        return;
      }
      l === "insert" && z && t([
        A(z.element, {
          mode: "insert",
          insertionPosition: z.position,
          insertionAxis: z.axis
        })
      ]);
    }
  }, [
    d,
    g,
    l,
    t,
    z,
    S,
    A
  ]), O = g && !d, U = d ? S.length > 0 : O ? l === "select" ? S.length > 0 : !!z : !1, oe = d || O, C = {
    vertical: a?.vertical ?? "top",
    horizontal: a?.horizontal ?? "center"
  }, T = {
    position: "fixed",
    background: n.panelBg,
    color: n.textColor,
    padding: g ? "14px 16px" : "16px 24px",
    borderRadius: g ? "16px" : "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: n.shadow,
    border: n.border,
    zIndex: 100001,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: g ? "10px" : "16px",
    pointerEvents: "auto",
    width: g ? "calc(100% - 24px)" : void 0,
    maxWidth: g ? "min(720px, calc(100% - 24px))" : "min(960px, calc(100% - 48px))",
    boxSizing: "border-box",
    flexWrap: "nowrap",
    overflowX: "auto",
    justifyContent: "space-between"
  };
  if (g)
    T.left = "12px", T.right = "12px", T.bottom = "16px", T.top = void 0, T.transform = "none";
  else
    switch (C.vertical === "top" ? T.top = "24px" : T.bottom = "24px", C.horizontal) {
      case "left":
        T.left = "24px", T.transform = "none";
        break;
      case "right":
        T.right = "24px", T.transform = "none";
        break;
      default:
        T.left = "50%", T.transform = "translateX(-50%)";
        break;
    }
  return /* @__PURE__ */ x.jsxs(
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
        /* @__PURE__ */ x.jsxs(
          "div",
          {
            "data-element-selector-ui": "true",
            style: T,
            children: [
              o && /* @__PURE__ */ x.jsx(
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
                    flexGrow: g ? 1 : void 0
                  },
                  children: /* @__PURE__ */ x.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        gap: g ? "6px" : "4px",
                        flex: g ? "1 1 auto" : void 0,
                        flexShrink: 1
                      },
                      children: [
                        /* @__PURE__ */ x.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (r) => {
                              r.preventDefault(), r.stopPropagation(), re("select");
                            },
                            style: {
                              border: l === "select" ? "1px solid " + n.toggleSelectedBg : m === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "999px 0 0 999px",
                              padding: g ? "10px 12px" : "6px 14px",
                              minHeight: g ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: l === "select" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: g ? 1 : void 0,
                              background: l === "select" ? n.toggleSelectedBg : "transparent",
                              color: l === "select" ? n.toggleSelectedText : n.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": l === "select" ? n.toggleSelectedText : n.toggleIdleTextHover
                            },
                            children: v.selectLabel
                          }
                        ),
                        /* @__PURE__ */ x.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (r) => {
                              r.preventDefault(), r.stopPropagation(), re("insert");
                            },
                            style: {
                              border: l === "insert" ? "1px solid " + n.toggleSelectedBg : m === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "0 999px 999px 0",
                              padding: g ? "10px 12px" : "6px 14px",
                              minHeight: g ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: l === "insert" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: g ? 1 : void 0,
                              background: l === "insert" ? n.toggleSelectedBg : "transparent",
                              color: l === "insert" ? n.toggleSelectedText : n.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": l === "insert" ? n.toggleSelectedText : n.toggleIdleTextHover
                            },
                            children: v.insertLabel
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              !g && /* @__PURE__ */ x.jsx(
                "span",
                {
                  className: "element-selector-instruction",
                  style: {
                    color: n.instructionTextColor,
                    fontWeight: 600,
                    flex: 1,
                    textAlign: "center",
                    lineHeight: 1.4,
                    fontSize: "15px"
                  },
                  children: _
                }
              ),
              /* @__PURE__ */ x.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: g ? "10px" : "8px",
                    width: void 0,
                    justifyContent: "flex-end",
                    flex: g ? "1 1 auto" : void 0,
                    flexWrap: "nowrap"
                  },
                  children: [
                    oe && /* @__PURE__ */ x.jsx(
                      "button",
                      {
                        type: "button",
                        disabled: !U,
                        className: "element-selector-action element-selector-confirm",
                        onClick: (r) => {
                          r.preventDefault(), r.stopPropagation(), U && $();
                        },
                        style: {
                          border: "none",
                          borderRadius: g ? "10px" : "8px",
                          padding: g ? "12px 14px" : "8px 12px",
                          minHeight: g ? "44px" : void 0,
                          flex: g ? "0 1 auto" : void 0,
                          cursor: U ? "pointer" : "not-allowed",
                          fontSize: g ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": n.actionBg,
                          "--es-action-bg-hover": n.actionBgHover,
                          "--es-action-bg-disabled": n.actionBgDisabled,
                          "--es-action-color": n.actionColor,
                          "--es-action-color-hover": n.actionColorHover,
                          "--es-action-color-disabled": n.actionColorDisabled
                        },
                        "aria-label": v.confirmLabel,
                        children: v.confirmLabel
                      }
                    ),
                    /* @__PURE__ */ x.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-action element-selector-cancel",
                        onClick: (r) => {
                          r.preventDefault(), r.stopPropagation(), c();
                        },
                        style: {
                          border: "none",
                          borderRadius: g ? "10px" : "8px",
                          padding: g ? "12px 14px" : "8px 12px",
                          cursor: "pointer",
                          fontSize: g ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": n.actionBg,
                          "--es-action-bg-hover": n.actionBgHover,
                          "--es-action-bg-disabled": n.actionBgDisabled,
                          "--es-action-color": n.actionColor,
                          "--es-action-color-hover": n.actionColorHover,
                          "--es-action-color-disabled": n.actionColorDisabled,
                          flex: g ? "0 1 auto" : void 0,
                          marginLeft: g ? "6px" : void 0
                        },
                        "aria-label": v.cancelLabel,
                        children: v.cancelLabel
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        l === "select" && w && (!d || !S.includes(w)) && !g && /* @__PURE__ */ x.jsx(
          Ie,
          {
            targetElement: w,
            friendlySelectors: s,
            rect: V.get(w) ?? null
          }
        ),
        l === "insert" && b && /* @__PURE__ */ x.jsx(
          Ee,
          {
            element: b.element,
            position: b.position,
            axis: b.axis,
            friendlySelectors: s,
            rect: V.get(b.element) ?? null
          }
        ),
        (d || g && S.length > 0) && S.map((r, k) => /* @__PURE__ */ x.jsx(
          we,
          {
            targetElement: r,
            onDeselect: () => f(r),
            rect: V.get(r) ?? null
          },
          `selected-${k}`
        )),
        /* @__PURE__ */ x.jsx("style", { children: `
        body {
          cursor: ${J ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${J ? "crosshair" : "default"} !important;
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
let M = null, q = null;
function Me() {
  return M && q || (M = document.createElement("div"), M.id = "element-selector-persistent-highlights", M.style.position = "fixed", M.style.inset = "0", M.style.pointerEvents = "none", M.style.zIndex = "99998", document.body.appendChild(M), q = he.createRoot(M)), q;
}
function Le({
  elements: t,
  friendlySelectors: c
}) {
  const u = pe(
    () => t.map((i) => i.element),
    [t]
  ), s = Se(u);
  return t.length ? /* @__PURE__ */ x.jsx(x.Fragment, { children: t.map((i, o) => {
    const a = s.get(i.element) ?? null;
    return i.mode === "insert" && i.insertionPosition && i.insertionAxis ? /* @__PURE__ */ x.jsx(
      Ee,
      {
        element: i.element,
        position: i.insertionPosition,
        axis: i.insertionAxis,
        friendlySelectors: c,
        rect: a
      },
      `persistent-insert-${o}`
    ) : /* @__PURE__ */ x.jsx(
      we,
      {
        targetElement: i.element,
        onDeselect: () => {
        },
        variant: "passive",
        rect: a
      },
      `persistent-select-${o}`
    );
  }) }) : null;
}
function ze(t, c) {
  if (!t.length) return;
  Me().render(
    /* @__PURE__ */ x.jsx(fe.StrictMode, { children: /* @__PURE__ */ x.jsx(Le, { elements: t, friendlySelectors: c }) })
  );
}
function $e() {
  q && (q.unmount(), q = null), M?.parentNode && M.parentNode.removeChild(M), M = null;
}
function Fe(t = {}) {
  const {
    multiSelect: c = !1,
    friendlySelectors: u = !1,
    mode: s = "select",
    allowModeToggle: i = !0,
    retainSelectionHighlights: o = !1,
    optionsPanelPosition: a,
    selectionBarText: p,
    theme: m = "dark"
  } = t;
  return $e(), new Promise((l, h) => {
    const d = document.createElement("div");
    d.id = "element-selector-root", d.style.position = "fixed", d.style.zIndex = "999999", d.style.inset = "0", document.body.appendChild(d);
    const n = he.createRoot(d), w = () => {
      n.unmount(), d.parentNode && d.parentNode.removeChild(d);
    }, N = (E) => {
      o && ze(E, u), w(), !c && E.length > 0 ? l(E[0]) : l(E);
    }, b = () => {
      w(), h(new Error("Element selection cancelled by user"));
    };
    n.render(
      /* @__PURE__ */ x.jsx(fe.StrictMode, { children: /* @__PURE__ */ x.jsx(
        Oe,
        {
          onElementSelected: N,
          onCancel: b,
          multiSelect: c,
          friendlySelectors: u,
          initialMode: s,
          allowModeToggle: i,
          optionsPanelPosition: a,
          selectionBarText: p,
          theme: m
        }
      ) })
    );
  });
}
export {
  Oe as ElementSelector,
  _e as buildElementSelector,
  ue as findElementAtCoordinates,
  Fe as launchSelector,
  $e as resetSelectionHighlights
};
