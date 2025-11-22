import fe, { useRef as D, useEffect as G, useState as W, useMemo as pe, useCallback as U } from "react";
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
function ke() {
  if (ge) return ne;
  ge = 1;
  var r = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function a(s, n, o) {
    var c = null;
    if (o !== void 0 && (c = "" + o), n.key !== void 0 && (c = "" + n.key), "key" in n) {
      o = {};
      for (var f in n)
        f !== "key" && (o[f] = n[f]);
    } else o = n;
    return n = o.ref, {
      $$typeof: r,
      type: s,
      key: c,
      ref: n !== void 0 ? n : null,
      props: o
    };
  }
  return ne.Fragment = u, ne.jsx = a, ne.jsxs = a, ne;
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
function Te() {
  return me || (me = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === X ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case m:
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
            var p = e.render;
            return e = e.displayName, e || (e = p.displayName || p.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case g:
            return p = e.displayName || null, p !== null ? p : r(e.type) || "Memo";
          case Q:
            p = e._payload, e = e._init;
            try {
              return r(e(p));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function a(e) {
      try {
        u(e);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var h = p.error, _ = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return h.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), u(e);
      }
    }
    function s(e) {
      if (e === m) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Q)
        return "<...>";
      try {
        var p = r(e);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function c(e) {
      if (H.call(e, "key")) {
        var p = Object.getOwnPropertyDescriptor(e, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, p) {
      function h() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: h,
        configurable: !0
      });
    }
    function y() {
      var e = r(this.type);
      return te[e] || (te[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function l(e, p, h, _, $, O, q, oe) {
      return h = O.ref, e = {
        $$typeof: w,
        type: e,
        key: p,
        props: O,
        _owner: $
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: y
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
        value: q
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, p, h, _, $, O, q, oe) {
      var C = p.children;
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
      if (H.call(p, "key")) {
        C = r(e);
        var T = Object.keys(p).filter(function(k) {
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
      if (C = null, h !== void 0 && (a(h), C = "" + h), c(p) && (a(p.key), C = "" + p.key), "key" in p) {
        h = {};
        for (var t in p)
          t !== "key" && (h[t] = p[t]);
      } else h = p;
      return C && f(
        h,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), l(
        e,
        C,
        O,
        $,
        n(),
        h,
        q,
        oe
      );
    }
    function d(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var i = fe, w = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), J = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), X = Symbol.for("react.client.reference"), F = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, Y = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    i = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var A, te = {}, Z = i.react_stack_bottom_frame.bind(
      i,
      o
    )(), K = I(s(o)), re = {};
    ie.Fragment = m, ie.jsx = function(e, p, h, _, $) {
      var O = 1e4 > F.recentlyCreatedOwnerStacks++;
      return x(
        e,
        p,
        h,
        !1,
        _,
        $,
        O ? Error("react-stack-top-frame") : Z,
        O ? I(s(e)) : K
      );
    }, ie.jsxs = function(e, p, h, _, $) {
      var O = 1e4 > F.recentlyCreatedOwnerStacks++;
      return x(
        e,
        p,
        h,
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
function Ce() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? se.exports = ke() : se.exports = Te()), se.exports;
}
var b = Ce();
function de(r, u) {
  const a = document.elementsFromPoint(r, u);
  for (const s of a)
    if (!(s.id === "element-selector-overlay" || s.closest("#element-selector-overlay") || s.id === "element-selector-root" || s.closest("#element-selector-root")) && !(s.tagName !== "svg" && s.tagName !== "SVG" && s.closest("svg")))
      return s;
  return document.body;
}
function Ne(r) {
  if (!r || r === document.body)
    return "body";
  if (r.id)
    return `#${CSS.escape(r.id)}`;
  const u = [];
  let a = r;
  for (; a && a !== document.body; ) {
    let s = a.tagName.toLowerCase();
    if (a.className && typeof a.className == "string") {
      const n = a.className.split(/\s+/).filter((o) => o && !o.includes(":")).map((o) => `.${CSS.escape(o)}`).slice(0, 2).join("");
      n && (s += n);
    }
    if (a.parentElement) {
      const n = a.tagName, c = Array.from(a.parentElement.children).filter(
        (f) => f.tagName === n
      );
      if (c.length > 1) {
        const f = c.indexOf(a) + 1;
        s += `:nth-of-type(${f})`;
      }
    }
    u.unshift(s);
    try {
      const n = u.join(" > "), o = document.querySelectorAll(n);
      if (o.length === 1 && o[0] === r)
        return n;
    } catch {
    }
    a = a.parentElement;
  }
  return u.join(" > ");
}
function ve(r) {
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
  }[r.toLowerCase()] || r.toLowerCase();
}
function _e(r, u = 300, { maxAncestors: a = 10 } = {}) {
  if (!r || !r.parentNode)
    throw new Error("Node must be attached to the DOM (with a parent).");
  const s = (i) => i.nodeType === Node.ELEMENT_NODE ? i.outerHTML : i.nodeType === Node.TEXT_NODE ? (i.textContent ?? "").toString() : new XMLSerializer().serializeToString(i), n = (i, w) => {
    const N = [];
    let m = w;
    for (; m && m !== i; ) {
      const E = m.parentNode;
      if (!E)
        throw new Error("Failed to resolve node path for context extraction.");
      const S = Array.prototype.indexOf.call(E.childNodes, m);
      if (S === -1)
        throw new Error("Unable to map node into cloned context tree.");
      N.unshift(S), m = E;
    }
    if (m !== i)
      throw new Error("Context root does not contain the requested node.");
    return N;
  }, o = (i) => {
    i.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    ).forEach((N) => N.remove());
  }, c = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`
  }, f = (i) => {
    const w = document.createElement("div"), N = i.cloneNode(!0);
    if (w.appendChild(N), o(w), !w.firstChild)
      return {
        beforeHtml: "",
        elementHtml: s(r),
        afterHtml: ""
      };
    const m = n(i, r);
    let E = w.firstChild;
    for (const ee of m) {
      const X = E.childNodes.item(ee);
      if (!X)
        throw new Error("Failed to mirror node inside cloned context tree.");
      E = X;
    }
    const S = E.parentNode;
    if (!S)
      return {
        beforeHtml: "",
        elementHtml: s(r),
        afterHtml: ""
      };
    const L = document.createTextNode(c.start), J = document.createTextNode(c.end);
    S.insertBefore(L, E), S.insertBefore(J, E.nextSibling), S.removeChild(E);
    const P = w.innerHTML, z = P.indexOf(c.start), B = P.indexOf(c.end);
    if (z === -1 || B === -1 || B < z)
      throw new Error("Failed to locate context markers during serialization.");
    const g = P.slice(0, z), Q = P.slice(B + c.end.length);
    return {
      beforeHtml: g,
      elementHtml: s(r),
      afterHtml: Q
    };
  }, y = (i) => i.parentNode ? i.parentNode.nodeType === Node.DOCUMENT_NODE ? i.parentNode.documentElement ?? null : i.parentNode : null;
  let l = 0, x = r.parentNode ?? r, d = f(x);
  for (; l < a && (d.beforeHtml.length < u || d.afterHtml.length < u); ) {
    const i = y(x);
    if (!i || i === x || (l += 1, x = i, d = f(x), !x.parentNode || x.parentNode.nodeType === Node.DOCUMENT_NODE))
      break;
  }
  return d;
}
function je({
  targetElement: r,
  friendlySelectors: u = !1,
  rect: a = null
}) {
  const s = D(null);
  G(() => {
    const o = s.current;
    if (!o) return;
    if (!a) {
      o.style.opacity = "0";
      return;
    }
    const c = 1;
    o.style.top = `${a.top - c}px`, o.style.left = `${a.left - c}px`, o.style.width = `${a.width + c * 2}px`, o.style.height = `${a.height + c * 2}px`, o.style.opacity = "1";
  }, [a]);
  const n = r ? {
    tag: r.tagName.toLowerCase(),
    friendlyTag: u ? ve(r.tagName) : r.tagName.toLowerCase(),
    id: r.id,
    classes: r.className?.split(" ").filter((o) => o).slice(0, 2)
  } : null;
  return /* @__PURE__ */ b.jsxs(
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
        n && /* @__PURE__ */ b.jsxs(
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
              /* @__PURE__ */ b.jsx("strong", { children: n.friendlyTag }),
              n.id && /* @__PURE__ */ b.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                n.id
              ] }),
              n.classes?.length > 0 && /* @__PURE__ */ b.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                n.classes.join(".")
              ] })
            ]
          }
        ),
        /* @__PURE__ */ b.jsx("style", { children: `
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
function ye({ targetElement: r, onDeselect: u, variant: a = "interactive", rect: s = null }) {
  const n = D(null), [o, c] = W(!1), f = a === "interactive";
  return G(() => {
    const y = n.current;
    if (!y) return;
    if (!s) {
      y.style.opacity = "0";
      return;
    }
    const l = 1;
    y.style.top = `${s.top - l}px`, y.style.left = `${s.left - l}px`, y.style.width = `${s.width + l * 2}px`, y.style.height = `${s.height + l * 2}px`, y.style.opacity = "1";
  }, [s]), /* @__PURE__ */ b.jsxs(
    "button",
    {
      ref: n,
      "data-selected-element": "true",
      onClick: (y) => {
        f && (y.stopPropagation(), y.preventDefault(), u());
      },
      onMouseEnter: () => f && c(!0),
      onMouseLeave: () => f && c(!1),
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
        pointerEvents: f ? "auto" : "none"
      },
      children: [
        f && o && /* @__PURE__ */ b.jsx(
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
        /* @__PURE__ */ b.jsx(
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
function we({
  element: r,
  position: u,
  axis: a,
  friendlySelectors: s = !1,
  rect: n = null
}) {
  const o = D(null), c = D(null);
  G(() => {
    if (!(!o.current || !c.current)) {
      if (!n) {
        o.current.style.opacity = "0", c.current.style.opacity = "0";
        return;
      }
      if (o.current.style.opacity = "1", c.current.style.opacity = "1", a === "horizontal") {
        const x = u === "before" ? n.top : n.bottom;
        o.current.style.top = `${x - le / 2}px`, o.current.style.left = `${n.left}px`, o.current.style.width = `${Math.max(n.width, 1)}px`, o.current.style.height = `${le}px`;
        const d = u === "before" ? x - 32 : x + 8;
        c.current.style.top = `${d}px`, c.current.style.left = `${n.left}px`;
      } else {
        const x = u === "before" ? n.left : n.right;
        o.current.style.left = `${x - le / 2}px`, o.current.style.top = `${n.top}px`, o.current.style.height = `${Math.max(n.height, 1)}px`, o.current.style.width = `${le}px`;
        const d = u === "before" ? x - 140 : x + 12;
        c.current.style.left = `${d}px`, c.current.style.top = `${n.top}px`;
      }
    }
  }, [n, a, u]);
  const f = r.tagName.toLowerCase(), y = s ? ve(r.tagName) : f, l = `${u === "before" ? "Insert before" : "Insert after"} ${y}`;
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
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
    /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: c,
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
function Ee(r, { skipOffscreen: u = !0 } = {}) {
  const [a, s] = W(
    () => /* @__PURE__ */ new Map()
  ), n = D(/* @__PURE__ */ new Map()), o = D(null), c = pe(() => {
    const f = /* @__PURE__ */ new Set(), y = [];
    for (const l of r)
      l && !f.has(l) && (f.add(l), y.push(l));
    return y;
  }, [r]);
  return G(() => {
    if (!c.length) {
      s(/* @__PURE__ */ new Map());
      return;
    }
    let f = null, y = null;
    const l = () => {
      o.current === null && (o.current = requestAnimationFrame(() => {
        o.current = null, s((x) => {
          const d = /* @__PURE__ */ new Map();
          let i = !1;
          for (const w of c) {
            if (!(!u || n.current.get(w) || n.current.size === 0)) {
              const L = x.get(w);
              L && d.set(w, L);
              continue;
            }
            const m = w.getBoundingClientRect(), E = x.get(w);
            (!E || m.top !== E.top || m.left !== E.left || m.width !== E.width || m.height !== E.height) && (i = !0), d.set(w, m);
          }
          return !i && x.size === d.size ? x : d;
        });
      }));
    };
    return f = new ResizeObserver(l), c.forEach((x) => f?.observe(x)), "IntersectionObserver" in window && (y = new IntersectionObserver(
      (x) => {
        x.forEach((d) => {
          n.current.set(d.target, d.isIntersecting);
        }), l();
      },
      { root: null, threshold: 0 }
    ), c.forEach((x) => y?.observe(x))), window.addEventListener("scroll", l, !0), window.addEventListener("resize", l), l(), () => {
      f && f.disconnect(), y && y.disconnect(), window.removeEventListener("scroll", l, !0), window.removeEventListener("resize", l), o.current !== null && (cancelAnimationFrame(o.current), o.current = null);
    };
  }, [c, u]), a;
}
const Ie = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
}, He = 300;
function Pe(r) {
  return r === "light" ? {
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
function ue(r) {
  if (!r)
    return {};
  const u = (a) => r.getAttribute(a) || void 0;
  return {
    src: u("data-ai-src"),
    routeId: u("data-ai-route-id"),
    routeFile: u("data-ai-route-file")
  };
}
function xe(r, u, a) {
  if (!r || r === document.documentElement)
    return null;
  const s = r.getBoundingClientRect();
  if (s.width === 0 && s.height === 0)
    return null;
  const n = [
    { edge: "top", value: Math.abs(a - s.top) },
    { edge: "bottom", value: Math.abs(a - s.bottom) },
    { edge: "left", value: Math.abs(u - s.left) },
    { edge: "right", value: Math.abs(u - s.right) }
  ];
  n.sort((f, y) => f.value - y.value);
  const o = n[0];
  if (!o)
    return null;
  const c = Ie[o.edge];
  return {
    element: r,
    position: c.position,
    axis: c.axis
  };
}
function Ae({
  onElementSelected: r,
  onCancel: u,
  multiSelect: a = !1,
  friendlySelectors: s = !1,
  initialMode: n = "select",
  allowModeToggle: o = !0,
  optionsPanelPosition: c,
  selectionBarText: f,
  theme: y = "dark"
}) {
  const [l, x] = W(n), d = l === "select" && a, i = Pe(y), [w, N] = W(null), [m, E] = W(null), [S, L] = W([]), [J, P] = W(!1), [z, B] = W(null), [g, Q] = W(() => typeof window > "u" ? !1 : window.matchMedia("(max-width: 640px)").matches), ee = pe(() => {
    const t = [];
    return w && t.push(w), m?.element && !t.includes(m.element) && t.push(m.element), S.forEach((k) => {
      t.includes(k) || t.push(k);
    }), t;
  }, [w, m, S]), X = Ee(ee), F = D({ x: 0, y: 0 }), H = D(null), Y = D(null), I = D(null), A = U(
    (t, k = {}) => {
      const R = (() => {
        try {
          return _e(t, He);
        } catch {
          return {
            beforeHtml: "",
            elementHtml: t.outerHTML || "",
            afterHtml: ""
          };
        }
      })(), v = {
        element: t,
        selector: Ne(t),
        tag: t.tagName.toLowerCase(),
        id: t.id || null,
        classes: t.className || "",
        textPreview: t.textContent?.substring(0, 50) || "",
        beforeHtml: R.beforeHtml,
        elementHtml: R.elementHtml,
        afterHtml: R.afterHtml,
        ...ue(t),
        ...k
      };
      if (v.mode === "insert") {
        v.insertionBeforeHtml = v.insertionPosition === "after" ? v.beforeHtml + v.elementHtml : v.beforeHtml, v.insertionAfterHtml = v.insertionPosition === "before" ? v.elementHtml + v.afterHtml : v.afterHtml;
        const j = v.insertionPosition === "before" ? "before" : "after", Se = j === "before" ? t.previousElementSibling : t, Re = j === "before" ? t : t.nextElementSibling, ae = ue(Se), ce = ue(Re);
        v.beforeSrc = ae.src, v.beforeRouteId = ae.routeId, v.beforeRouteFile = ae.routeFile, v.afterSrc = ce.src, v.afterRouteId = ce.routeId, v.afterRouteFile = ce.routeFile;
      } else
        v.insertionBeforeHtml = v.beforeHtml, v.insertionAfterHtml = v.afterHtml;
      return v;
    },
    []
  ), te = U(() => {
    const t = de(
      F.current.x,
      F.current.y
    );
    if (l === "insert") {
      const R = xe(
        t,
        F.current.x,
        F.current.y
      );
      (R && (!I.current || I.current.element !== R.element || I.current.position !== R.position || I.current.axis !== R.axis) || !R && I.current) && (I.current = R, E(R ?? null)), P(!!R), N(R ? R.element : null), Y.current = R ? R.element : null;
      return;
    }
    if (I.current && (I.current = null, E(null)), d && S.some((R) => R.contains(t))) {
      P(!1), N(null), Y.current = null;
      return;
    }
    Y.current !== t && (Y.current = t, N(t), P(!0));
  }, [d, l, S]), Z = U(
    (t) => {
      if (t.target.closest('[data-element-selector-ui="true"]')) {
        H.current && (clearTimeout(H.current), H.current = null), N(null), E(null), Y.current = null, I.current = null, P(!1);
        return;
      }
      F.current = {
        x: t.clientX,
        y: t.clientY
      }, H.current && clearTimeout(H.current), H.current = setTimeout(() => {
        te();
      }, 50);
    },
    [te]
  ), K = U(() => {
    H.current && (clearTimeout(H.current), H.current = null), N(null), E(null), Y.current = null, I.current = null, P(!1);
  }, []), re = U(
    (t) => {
      t !== l && (x(t), L([]), E(null), B(null), N(null), Y.current = null, I.current = null, P(!1));
    },
    [l]
  ), e = U(
    (t) => {
      const k = g && !d, R = t.target;
      if (R.closest('[data-selected-element="true"]') || R.closest('[data-element-selector-ui="true"]'))
        return;
      if (t.preventDefault(), t.stopPropagation(), l === "insert") {
        const j = xe(
          de(t.clientX, t.clientY),
          t.clientX,
          t.clientY
        );
        if (!j)
          return;
        if (k) {
          B(j), E(j), L([]);
          return;
        }
        r([
          A(j.element, {
            mode: "insert",
            insertionPosition: j.position,
            insertionAxis: j.axis
          })
        ]);
        return;
      }
      const v = de(
        t.clientX,
        t.clientY
      );
      if (v && !(d && S.some((j) => j.contains(v)))) {
        if (d) {
          L((j) => j.includes(v) ? j : [...j, v]);
          return;
        }
        if (k) {
          L([v]), B(null);
          return;
        }
        r([
          A(v, { mode: "select" })
        ]);
      }
    },
    [d, g, l, r, S, A]
  ), p = U((t) => {
    L(
      (k) => k.filter((R) => R !== t)
    );
  }, []);
  G(() => (document.addEventListener("mousemove", Z, !0), document.addEventListener("mouseleave", K, !0), document.addEventListener("click", e, !0), () => {
    document.removeEventListener("mousemove", Z, !0), document.removeEventListener("mouseleave", K, !0), document.removeEventListener("click", e, !0), H.current && clearTimeout(H.current);
  }), [Z, K, e]), G(() => {
    const t = (k) => {
      switch (k.key) {
        case "Escape":
          u();
          break;
        case "Enter":
          if (l === "insert" && m) {
            r([
              A(m.element, {
                mode: "insert",
                insertionPosition: m.position,
                insertionAxis: m.axis
              })
            ]);
            break;
          }
          if (d && S.length > 0) {
            const R = S.map(
              (v) => A(v, { mode: "select" })
            );
            r(R);
          }
          break;
      }
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [
    d,
    m,
    l,
    u,
    r,
    S,
    A
  ]), G(() => {
    const t = window.matchMedia("(max-width: 640px)"), k = () => Q(t.matches);
    return k(), t.addEventListener("change", k), () => t.removeEventListener("change", k);
  }, []);
  const h = {
    selectLabel: f?.selectLabel ?? "Select",
    insertLabel: f?.insertLabel ?? "Insert",
    instructionSelectSingle: f?.instructionSelectSingle ?? "Click an element to select",
    instructionSelectMulti: f?.instructionSelectMulti ?? "Click elements to select",
    instructionInsert: f?.instructionInsert ?? "Click to choose where to insert new content",
    confirmLabel: f?.confirmLabel ?? "✓",
    cancelLabel: f?.cancelLabel ?? "✕"
  }, _ = l === "insert" ? h.instructionInsert : d ? h.instructionSelectMulti : h.instructionSelectSingle, $ = U(() => {
    const t = g && !d;
    if (d && S.length > 0) {
      const k = S.map(
        (R) => A(R, { mode: "select" })
      );
      r(k);
      return;
    }
    if (t) {
      if (l === "select" && S[0]) {
        r([
          A(S[0], { mode: "select" })
        ]);
        return;
      }
      l === "insert" && z && r([
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
    r,
    z,
    S,
    A
  ]), O = g && !d, q = d ? S.length > 0 : O ? l === "select" ? S.length > 0 : !!z : !1, oe = d || O, C = {
    vertical: c?.vertical ?? "top",
    horizontal: c?.horizontal ?? "center"
  }, T = {
    position: "fixed",
    background: i.panelBg,
    color: i.textColor,
    padding: g ? "14px 16px" : "16px 24px",
    borderRadius: g ? "16px" : "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: i.shadow,
    border: i.border,
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
  return /* @__PURE__ */ b.jsxs(
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
        /* @__PURE__ */ b.jsxs(
          "div",
          {
            "data-element-selector-ui": "true",
            style: T,
            children: [
              o && /* @__PURE__ */ b.jsx(
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
                  children: /* @__PURE__ */ b.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        gap: g ? "6px" : "4px",
                        flex: g ? "1 1 auto" : void 0,
                        flexShrink: 1
                      },
                      children: [
                        /* @__PURE__ */ b.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (t) => {
                              t.preventDefault(), t.stopPropagation(), re("select");
                            },
                            style: {
                              border: l === "select" ? "1px solid " + i.toggleSelectedBg : y === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "999px 0 0 999px",
                              padding: g ? "10px 12px" : "6px 14px",
                              minHeight: g ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: l === "select" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: g ? 1 : void 0,
                              background: l === "select" ? i.toggleSelectedBg : "transparent",
                              color: l === "select" ? i.toggleSelectedText : i.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": l === "select" ? i.toggleSelectedText : i.toggleIdleTextHover
                            },
                            children: h.selectLabel
                          }
                        ),
                        /* @__PURE__ */ b.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (t) => {
                              t.preventDefault(), t.stopPropagation(), re("insert");
                            },
                            style: {
                              border: l === "insert" ? "1px solid " + i.toggleSelectedBg : y === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "0 999px 999px 0",
                              padding: g ? "10px 12px" : "6px 14px",
                              minHeight: g ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: l === "insert" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: g ? 1 : void 0,
                              background: l === "insert" ? i.toggleSelectedBg : "transparent",
                              color: l === "insert" ? i.toggleSelectedText : i.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": l === "insert" ? i.toggleSelectedText : i.toggleIdleTextHover
                            },
                            children: h.insertLabel
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              !g && /* @__PURE__ */ b.jsx(
                "span",
                {
                  className: "element-selector-instruction",
                  style: {
                    color: i.instructionTextColor,
                    fontWeight: 600,
                    flex: 1,
                    textAlign: "center",
                    lineHeight: 1.4,
                    fontSize: "15px"
                  },
                  children: _
                }
              ),
              /* @__PURE__ */ b.jsxs(
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
                    oe && /* @__PURE__ */ b.jsx(
                      "button",
                      {
                        type: "button",
                        disabled: !q,
                        className: "element-selector-action element-selector-confirm",
                        onClick: (t) => {
                          t.preventDefault(), t.stopPropagation(), q && $();
                        },
                        style: {
                          border: "none",
                          borderRadius: g ? "10px" : "8px",
                          padding: g ? "12px 14px" : "8px 12px",
                          minHeight: g ? "44px" : void 0,
                          flex: g ? "0 1 auto" : void 0,
                          cursor: q ? "pointer" : "not-allowed",
                          fontSize: g ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": i.actionBg,
                          "--es-action-bg-hover": i.actionBgHover,
                          "--es-action-bg-disabled": i.actionBgDisabled,
                          "--es-action-color": i.actionColor,
                          "--es-action-color-hover": i.actionColorHover,
                          "--es-action-color-disabled": i.actionColorDisabled
                        },
                        "aria-label": h.confirmLabel,
                        children: h.confirmLabel
                      }
                    ),
                    /* @__PURE__ */ b.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-action element-selector-cancel",
                        onClick: (t) => {
                          t.preventDefault(), t.stopPropagation(), u();
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
                          "--es-action-bg": i.actionBg,
                          "--es-action-bg-hover": i.actionBgHover,
                          "--es-action-bg-disabled": i.actionBgDisabled,
                          "--es-action-color": i.actionColor,
                          "--es-action-color-hover": i.actionColorHover,
                          "--es-action-color-disabled": i.actionColorDisabled,
                          flex: g ? "0 1 auto" : void 0,
                          marginLeft: g ? "6px" : void 0
                        },
                        "aria-label": h.cancelLabel,
                        children: h.cancelLabel
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        l === "select" && w && (!d || !S.includes(w)) && !g && /* @__PURE__ */ b.jsx(
          je,
          {
            targetElement: w,
            friendlySelectors: s,
            rect: X.get(w) ?? null
          }
        ),
        l === "insert" && m && /* @__PURE__ */ b.jsx(
          we,
          {
            element: m.element,
            position: m.position,
            axis: m.axis,
            friendlySelectors: s,
            rect: X.get(m.element) ?? null
          }
        ),
        (d || g && S.length > 0) && S.map((t, k) => /* @__PURE__ */ b.jsx(
          ye,
          {
            targetElement: t,
            onDeselect: () => p(t),
            rect: X.get(t) ?? null
          },
          `selected-${k}`
        )),
        /* @__PURE__ */ b.jsx("style", { children: `
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
let M = null, V = null;
function Oe() {
  return M && V || (M = document.createElement("div"), M.id = "element-selector-persistent-highlights", M.style.position = "fixed", M.style.inset = "0", M.style.pointerEvents = "none", M.style.zIndex = "99998", document.body.appendChild(M), V = he.createRoot(M)), V;
}
function Me({
  elements: r,
  friendlySelectors: u
}) {
  const a = pe(
    () => r.map((n) => n.element),
    [r]
  ), s = Ee(a);
  return r.length ? /* @__PURE__ */ b.jsx(b.Fragment, { children: r.map((n, o) => {
    const c = s.get(n.element) ?? null;
    return n.mode === "insert" && n.insertionPosition && n.insertionAxis ? /* @__PURE__ */ b.jsx(
      we,
      {
        element: n.element,
        position: n.insertionPosition,
        axis: n.insertionAxis,
        friendlySelectors: u,
        rect: c
      },
      `persistent-insert-${o}`
    ) : /* @__PURE__ */ b.jsx(
      ye,
      {
        targetElement: n.element,
        onDeselect: () => {
        },
        variant: "passive",
        rect: c
      },
      `persistent-select-${o}`
    );
  }) }) : null;
}
function Le(r, u) {
  if (!r.length) return;
  Oe().render(
    /* @__PURE__ */ b.jsx(fe.StrictMode, { children: /* @__PURE__ */ b.jsx(Me, { elements: r, friendlySelectors: u }) })
  );
}
function ze() {
  V && (V.unmount(), V = null), M?.parentNode && M.parentNode.removeChild(M), M = null;
}
function Be(r = {}) {
  const {
    multiSelect: u = !1,
    friendlySelectors: a = !1,
    mode: s = "select",
    allowModeToggle: n = !0,
    retainSelectionHighlights: o = !1,
    optionsPanelPosition: c,
    selectionBarText: f,
    theme: y = "dark"
  } = r;
  return ze(), new Promise((l, x) => {
    const d = document.createElement("div");
    d.id = "element-selector-root", d.style.position = "fixed", d.style.zIndex = "999999", d.style.inset = "0", document.body.appendChild(d);
    const i = he.createRoot(d), w = () => {
      i.unmount(), d.parentNode && d.parentNode.removeChild(d);
    }, N = (E) => {
      o && Le(E, a), w(), !u && E.length > 0 ? l(E[0]) : l(E);
    }, m = () => {
      w(), x(new Error("Element selection cancelled by user"));
    };
    i.render(
      /* @__PURE__ */ b.jsx(fe.StrictMode, { children: /* @__PURE__ */ b.jsx(
        Ae,
        {
          onElementSelected: N,
          onCancel: m,
          multiSelect: u,
          friendlySelectors: a,
          initialMode: s,
          allowModeToggle: n,
          optionsPanelPosition: c,
          selectionBarText: f,
          theme: y
        }
      ) })
    );
  });
}
export {
  Ae as ElementSelector,
  Ne as buildElementSelector,
  de as findElementAtCoordinates,
  Be as launchSelector,
  ze as resetSelectionHighlights
};
