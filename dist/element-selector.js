import ge, { useRef as W, useEffect as Q, useState as U, useMemo as me, useCallback as V } from "react";
import ye from "react-dom/client";
var ce = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ce() {
  if (be) return le;
  be = 1;
  var r = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function a(c, l, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), l.key !== void 0 && (s = "" + l.key), "key" in l) {
      o = {};
      for (var b in l)
        b !== "key" && (o[b] = l[b]);
    } else o = l;
    return l = o.ref, {
      $$typeof: r,
      type: c,
      key: s,
      ref: l !== void 0 ? l : null,
      props: o
    };
  }
  return le.Fragment = d, le.jsx = a, le.jsxs = a, le;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function _e() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case R:
          return "Fragment";
        case w:
          return "Profiler";
        case g:
          return "StrictMode";
        case $:
          return "Suspense";
        case B:
          return "SuspenseList";
        case oe:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case m:
            return "Portal";
          case D:
            return (e.displayName || "Context") + ".Provider";
          case T:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var f = e.render;
            return e = e.displayName, e || (e = f.displayName || f.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return f = e.displayName || null, f !== null ? f : r(e.type) || "Memo";
          case p:
            f = e._payload, e = e._init;
            try {
              return r(e(f));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function a(e) {
      try {
        d(e);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var E = f.error, _ = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return E.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), d(e);
      }
    }
    function c(e) {
      if (e === R) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === p)
        return "<...>";
      try {
        var f = r(e);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = M.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(e) {
      if (H.call(e, "key")) {
        var f = Object.getOwnPropertyDescriptor(e, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, f) {
      function E() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: E,
        configurable: !0
      });
    }
    function h() {
      var e = r(this.type);
      return O[e] || (O[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function y(e, f, E, _, j, F, ie, te) {
      return E = F.ref, e = {
        $$typeof: u,
        type: e,
        key: f,
        props: F,
        _owner: j
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: h
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
        value: ie
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function i(e, f, E, _, j, F, ie, te) {
      var C = f.children;
      if (C !== void 0)
        if (_)
          if (G(C)) {
            for (_ = 0; _ < C.length; _++)
              k(C[_]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(C);
      if (H.call(f, "key")) {
        C = r(e);
        var J = Object.keys(f).filter(function(I) {
          return I !== "key";
        });
        _ = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", ee[C + _] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          C,
          J,
          C
        ), ee[C + _] = !0);
      }
      if (C = null, E !== void 0 && (a(E), C = "" + E), s(f) && (a(f.key), C = "" + f.key), "key" in f) {
        E = {};
        for (var re in f)
          re !== "key" && (E[re] = f[re]);
      } else E = f;
      return C && b(
        E,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), y(
        e,
        C,
        F,
        j,
        l(),
        E,
        ie,
        te
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === u && e._store && (e._store.validated = 1);
    }
    var n = ge, u = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), D = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), M = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, G = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    n = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, O = {}, L = n.react_stack_bottom_frame.bind(
      n,
      o
    )(), ne = A(c(o)), ee = {};
    se.Fragment = R, se.jsx = function(e, f, E, _, j) {
      var F = 1e4 > M.recentlyCreatedOwnerStacks++;
      return i(
        e,
        f,
        E,
        !1,
        _,
        j,
        F ? Error("react-stack-top-frame") : L,
        F ? A(c(e)) : ne
      );
    }, se.jsxs = function(e, f, E, _, j) {
      var F = 1e4 > M.recentlyCreatedOwnerStacks++;
      return i(
        e,
        f,
        E,
        !0,
        _,
        j,
        F ? Error("react-stack-top-frame") : L,
        F ? A(c(e)) : ne
      );
    };
  }()), se;
}
var he;
function je() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? ce.exports = Ce() : ce.exports = _e()), ce.exports;
}
var v = je();
function we(r) {
  if (!r) return [];
  const d = r.className;
  if (typeof d == "string")
    return d.split(/\s+/).filter(Boolean);
  const a = d?.baseVal;
  return typeof a == "string" ? a.split(/\s+/).filter(Boolean) : r.classList ? Array.from(r.classList).filter(Boolean) : [];
}
function fe(r, d) {
  const a = document.elementsFromPoint(r, d);
  for (const c of a)
    if (!(c.id === "element-selector-overlay" || c.closest("#element-selector-overlay") || c.id === "element-selector-root" || c.closest("#element-selector-root")) && !(c.tagName !== "svg" && c.tagName !== "SVG" && c.closest("svg")))
      return c;
  return document.body;
}
function He(r) {
  if (!r || r === document.body)
    return "body";
  if (r.id)
    return `#${CSS.escape(r.id)}`;
  const d = [];
  let a = r;
  for (; a && a !== document.body; ) {
    let c = a.tagName.toLowerCase();
    const l = we(a).filter((o) => !o.includes(":")).slice(0, 2);
    if (l.length > 0) {
      const o = l.map((s) => `.${CSS.escape(s)}`).join("");
      c += o;
    }
    if (a.parentElement) {
      const o = a.tagName, b = Array.from(a.parentElement.children).filter(
        (h) => h.tagName === o
      );
      if (b.length > 1) {
        const h = b.indexOf(a) + 1;
        c += `:nth-of-type(${h})`;
      }
    }
    d.unshift(c);
    try {
      const o = d.join(" > "), s = document.querySelectorAll(o);
      if (s.length === 1 && s[0] === r)
        return o;
    } catch {
    }
    a = a.parentElement;
  }
  return d.join(" > ");
}
function Ee(r) {
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
function Ie(r, d = 300, { maxAncestors: a = 10 } = {}) {
  if (!r || !r.parentNode)
    throw new Error("Node must be attached to the DOM (with a parent).");
  const c = (n) => n.nodeType === Node.ELEMENT_NODE ? n.outerHTML : n.nodeType === Node.TEXT_NODE ? (n.textContent ?? "").toString() : new XMLSerializer().serializeToString(n), l = (n, u) => {
    const m = [];
    let R = u;
    for (; R && R !== n; ) {
      const g = R.parentNode;
      if (!g)
        throw new Error("Failed to resolve node path for context extraction.");
      const w = Array.prototype.indexOf.call(g.childNodes, R);
      if (w === -1)
        throw new Error("Unable to map node into cloned context tree.");
      m.unshift(w), R = g;
    }
    if (R !== n)
      throw new Error("Context root does not contain the requested node.");
    return m;
  }, o = (n) => {
    n.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    ).forEach((m) => m.remove());
  }, s = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`
  }, b = (n) => {
    const u = document.createElement("div"), m = n.cloneNode(!0);
    if (u.appendChild(m), o(u), !u.firstChild)
      return {
        beforeHtml: "",
        elementHtml: c(r),
        afterHtml: ""
      };
    const R = l(n, r);
    let g = u.firstChild;
    for (const oe of R) {
      const q = g.childNodes.item(oe);
      if (!q)
        throw new Error("Failed to mirror node inside cloned context tree.");
      g = q;
    }
    const w = g.parentNode;
    if (!w)
      return {
        beforeHtml: "",
        elementHtml: c(r),
        afterHtml: ""
      };
    const T = document.createTextNode(s.start), D = document.createTextNode(s.end);
    w.insertBefore(T, g), w.insertBefore(D, g.nextSibling), w.removeChild(g);
    const X = u.innerHTML, $ = X.indexOf(s.start), B = X.indexOf(s.end);
    if ($ === -1 || B === -1 || B < $)
      throw new Error("Failed to locate context markers during serialization.");
    const Z = X.slice(0, $), p = X.slice(B + s.end.length);
    return {
      beforeHtml: Z,
      elementHtml: c(r),
      afterHtml: p
    };
  }, h = (n) => n.parentNode ? n.parentNode.nodeType === Node.DOCUMENT_NODE ? n.parentNode.documentElement ?? null : n.parentNode : null;
  let y = 0, i = r.parentNode ?? r, k = b(i);
  for (; y < a && (k.beforeHtml.length < d || k.afterHtml.length < d); ) {
    const n = h(i);
    if (!n || n === i || (y += 1, i = n, k = b(i), !i.parentNode || i.parentNode.nodeType === Node.DOCUMENT_NODE))
      break;
  }
  return k;
}
function Pe({
  targetElement: r,
  friendlySelectors: d = !1,
  rect: a = null
}) {
  const c = W(null);
  Q(() => {
    const o = c.current;
    if (!o) return;
    if (!a) {
      o.style.opacity = "0";
      return;
    }
    const s = 1;
    o.style.top = `${a.top - s}px`, o.style.left = `${a.left - s}px`, o.style.width = `${a.width + s * 2}px`, o.style.height = `${a.height + s * 2}px`, o.style.opacity = "1";
  }, [a]);
  const l = r ? {
    tag: r.tagName.toLowerCase(),
    friendlyTag: d ? Ee(r.tagName) : r.tagName.toLowerCase(),
    id: r.id,
    classes: we(r).slice(0, 2)
  } : null;
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      ref: c,
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
        l && /* @__PURE__ */ v.jsxs(
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
              /* @__PURE__ */ v.jsx("strong", { children: l.friendlyTag }),
              l.id && /* @__PURE__ */ v.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                l.id
              ] }),
              l.classes?.length > 0 && /* @__PURE__ */ v.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                l.classes.join(".")
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
function Se({ targetElement: r, onDeselect: d, variant: a = "interactive", rect: c = null }) {
  const l = W(null), [o, s] = U(!1), b = a === "interactive";
  return Q(() => {
    const h = l.current;
    if (!h) return;
    if (!c) {
      h.style.opacity = "0";
      return;
    }
    const y = 1;
    h.style.top = `${c.top - y}px`, h.style.left = `${c.left - y}px`, h.style.width = `${c.width + y * 2}px`, h.style.height = `${c.height + y * 2}px`, h.style.opacity = "1";
  }, [c]), /* @__PURE__ */ v.jsxs(
    "button",
    {
      ref: l,
      "data-selected-element": "true",
      onClick: (h) => {
        b && (h.stopPropagation(), h.preventDefault(), d());
      },
      onMouseEnter: () => b && s(!0),
      onMouseLeave: () => b && s(!1),
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
        pointerEvents: b ? "auto" : "none"
      },
      children: [
        b && o && /* @__PURE__ */ v.jsx(
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
const ae = 4;
function ke({
  element: r,
  position: d,
  axis: a,
  friendlySelectors: c = !1,
  rect: l = null
}) {
  const o = W(null), s = W(null);
  Q(() => {
    if (!(!o.current || !s.current)) {
      if (!l) {
        o.current.style.opacity = "0", s.current.style.opacity = "0";
        return;
      }
      if (o.current.style.opacity = "1", s.current.style.opacity = "1", a === "horizontal") {
        const i = d === "before" ? l.top : l.bottom;
        o.current.style.top = `${i - ae / 2}px`, o.current.style.left = `${l.left}px`, o.current.style.width = `${Math.max(l.width, 1)}px`, o.current.style.height = `${ae}px`;
        const k = d === "before" ? i - 32 : i + 8;
        s.current.style.top = `${k}px`, s.current.style.left = `${l.left}px`;
      } else {
        const i = d === "before" ? l.left : l.right;
        o.current.style.left = `${i - ae / 2}px`, o.current.style.top = `${l.top}px`, o.current.style.height = `${Math.max(l.height, 1)}px`, o.current.style.width = `${ae}px`;
        const k = d === "before" ? i - 140 : i + 12;
        s.current.style.left = `${k}px`, s.current.style.top = `${l.top}px`;
      }
    }
  }, [l, a, d]);
  const b = r.tagName.toLowerCase(), h = c ? Ee(r.tagName) : b, y = `${d === "before" ? "Insert before" : "Insert after"} ${h}`;
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx(
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
          borderRadius: ae
        }
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: s,
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
        children: y
      }
    )
  ] });
}
function Re(r, { skipOffscreen: d = !0, debug: a = !1 } = {}) {
  const [c, l] = U(
    () => /* @__PURE__ */ new Map()
  ), o = W(/* @__PURE__ */ new Map()), s = W(null), b = me(() => {
    const h = /* @__PURE__ */ new Set(), y = [];
    for (const i of r)
      i && !h.has(i) && (h.add(i), y.push(i));
    return y;
  }, [r]);
  return Q(() => {
    if (!b.length) {
      l(/* @__PURE__ */ new Map());
      return;
    }
    let h = null, y = null;
    const i = () => {
      s.current === null && (s.current = requestAnimationFrame(() => {
        s.current = null, l((k) => {
          const n = /* @__PURE__ */ new Map();
          let u = !1;
          for (const m of b) {
            const R = !d || o.current.get(m) || o.current.size === 0;
            if (!R) {
              a && console.debug("[element-selector] skip measure (offscreen)", {
                tag: m.tagName,
                id: m.id,
                className: m.className
              });
              const D = k.get(m);
              D && n.set(m, D);
              continue;
            }
            const g = m.getBoundingClientRect(), w = k.get(m);
            (!w || g.top !== w.top || g.left !== w.left || g.width !== w.width || g.height !== w.height) && (u = !0, a && console.debug("[element-selector] measure", {
              tag: m.tagName,
              id: m.id,
              className: m.className,
              rect: {
                top: g.top,
                left: g.left,
                width: g.width,
                height: g.height
              },
              visible: R
            })), n.set(m, g);
          }
          return !u && k.size === n.size ? k : n;
        });
      }));
    };
    return h = new ResizeObserver(i), b.forEach((k) => h?.observe(k)), "IntersectionObserver" in window && (y = new IntersectionObserver(
      (k) => {
        k.forEach((n) => {
          o.current.set(n.target, n.isIntersecting);
        }), i();
      },
      { root: null, threshold: 0 }
    ), b.forEach((k) => y?.observe(k))), window.addEventListener("scroll", i, !0), window.addEventListener("resize", i), i(), () => {
      h && h.disconnect(), y && y.disconnect(), window.removeEventListener("scroll", i, !0), window.removeEventListener("resize", i), s.current !== null && (cancelAnimationFrame(s.current), s.current = null);
    };
  }, [b, d]), c;
}
const Ae = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
}, Oe = 300;
function Me(r) {
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
function pe(r) {
  if (!r)
    return {};
  const d = (a) => r.getAttribute(a) || void 0;
  return {
    src: d("data-ai-src"),
    routeId: d("data-ai-route-id"),
    routeFile: d("data-ai-route-file")
  };
}
function ve(r, d, a) {
  if (!r || r === document.documentElement)
    return null;
  const c = r.getBoundingClientRect();
  if (c.width === 0 && c.height === 0)
    return null;
  const l = [
    { edge: "top", value: Math.abs(a - c.top) },
    { edge: "bottom", value: Math.abs(a - c.bottom) },
    { edge: "left", value: Math.abs(d - c.left) },
    { edge: "right", value: Math.abs(d - c.right) }
  ];
  l.sort((b, h) => b.value - h.value);
  const o = l[0];
  if (!o)
    return null;
  const s = Ae[o.edge];
  return {
    element: r,
    position: s.position,
    axis: s.axis
  };
}
function Le({
  onElementSelected: r,
  onCancel: d,
  multiSelect: a = !1,
  friendlySelectors: c = !1,
  initialMode: l = "select",
  allowModeToggle: o = !0,
  optionsPanelPosition: s,
  selectionBarText: b,
  theme: h = "dark",
  debug: y = !1
}) {
  const [i, k] = U(l), n = i === "select" && a, u = Me(h), [m, R] = U(null), [g, w] = U(null), [T, D] = U([]), [X, $] = U(!1), [B, Z] = U(null), [p, oe] = U(() => typeof window > "u" ? !1 : window.matchMedia("(max-width: 640px)").matches), q = me(() => {
    const t = [];
    return m && t.push(m), g?.element && !t.includes(g.element) && t.push(g.element), T.forEach((N) => {
      t.includes(N) || t.push(N);
    }), t;
  }, [m, g, T]), M = Re(q, { skipOffscreen: !0, debug: y }), H = V(
    (...t) => {
      y && console.debug("[element-selector]", ...t);
    },
    [y]
  );
  Q(() => {
    !y || !m || H("current hover rect", {
      tag: m.tagName,
      id: m.id,
      className: m.className,
      rect: M.get(m) ?? null
    });
  }, [m, M, y, H]);
  const G = W({ x: 0, y: 0 }), A = W(null), Y = W(null), O = W(null), L = V(
    (t, N = {}) => {
      const S = (() => {
        try {
          return Ie(t, Oe);
        } catch {
          return {
            beforeHtml: "",
            elementHtml: t.outerHTML || "",
            afterHtml: ""
          };
        }
      })(), x = {
        element: t,
        selector: He(t),
        tag: t.tagName.toLowerCase(),
        id: t.id || null,
        classes: t.className || "",
        textPreview: t.textContent?.substring(0, 50) || "",
        beforeHtml: S.beforeHtml,
        elementHtml: S.elementHtml,
        afterHtml: S.afterHtml,
        ...pe(t),
        ...N
      };
      if (x.mode === "insert") {
        x.insertionBeforeHtml = x.insertionPosition === "after" ? x.beforeHtml + x.elementHtml : x.beforeHtml, x.insertionAfterHtml = x.insertionPosition === "before" ? x.elementHtml + x.afterHtml : x.afterHtml;
        const P = x.insertionPosition === "before" ? "before" : "after", Te = P === "before" ? t.previousElementSibling : t, Ne = P === "before" ? t : t.nextElementSibling, de = pe(Te), ue = pe(Ne);
        x.beforeSrc = de.src, x.beforeRouteId = de.routeId, x.beforeRouteFile = de.routeFile, x.afterSrc = ue.src, x.afterRouteId = ue.routeId, x.afterRouteFile = ue.routeFile;
      } else
        x.insertionBeforeHtml = x.beforeHtml, x.insertionAfterHtml = x.afterHtml;
      return x;
    },
    []
  ), ne = V(() => {
    const t = fe(
      G.current.x,
      G.current.y
    );
    if (H("hover update", {
      point: { ...G.current },
      target: t?.tagName,
      id: t?.id,
      className: t?.className
    }), i === "insert") {
      const S = ve(
        t,
        G.current.x,
        G.current.y
      );
      (S && (!O.current || O.current.element !== S.element || O.current.position !== S.position || O.current.axis !== S.axis) || !S && O.current) && (O.current = S, w(S ?? null)), $(!!S), R(S ? S.element : null), Y.current = S ? S.element : null;
      return;
    }
    if (O.current && (O.current = null, w(null)), n && T.some((S) => S.contains(t))) {
      $(!1), R(null), Y.current = null;
      return;
    }
    Y.current !== t && (Y.current = t, R(t), $(!0), H("setCurrentHover", {
      tag: t.tagName,
      id: t.id,
      className: t.className,
      rect: M.get(t) ?? null
    }));
  }, [n, i, T, M, H]), ee = V(
    (t) => {
      if (t.target.closest('[data-element-selector-ui="true"]')) {
        A.current && (clearTimeout(A.current), A.current = null), R(null), w(null), Y.current = null, O.current = null, $(!1);
        return;
      }
      G.current = {
        x: t.clientX,
        y: t.clientY
      }, A.current && clearTimeout(A.current), A.current = setTimeout(() => {
        ne();
      }, 50);
    },
    [ne]
  ), e = V(() => {
    A.current && (clearTimeout(A.current), A.current = null), R(null), w(null), Y.current = null, O.current = null, $(!1);
  }, []), f = V(
    (t) => {
      t !== i && (H("mode toggle", { from: i, to: t }), k(t), D([]), w(null), Z(null), R(null), Y.current = null, O.current = null, $(!1));
    },
    [i, H]
  ), E = V(
    (t) => {
      const N = p && !n, S = t.target;
      if (S.closest('[data-selected-element="true"]') || S.closest('[data-element-selector-ui="true"]'))
        return;
      if (t.preventDefault(), t.stopPropagation(), i === "insert") {
        const P = ve(
          fe(t.clientX, t.clientY),
          t.clientX,
          t.clientY
        );
        if (!P) {
          H("insert click with no candidate", {
            point: { x: t.clientX, y: t.clientY }
          });
          return;
        }
        if (N) {
          Z(P), w(P), D([]);
          return;
        }
        r([
          L(P.element, {
            mode: "insert",
            insertionPosition: P.position,
            insertionAxis: P.axis
          })
        ]);
        return;
      }
      const x = fe(
        t.clientX,
        t.clientY
      );
      if (x && !(n && T.some((P) => P.contains(x)))) {
        if (n) {
          D((P) => P.includes(x) ? P : [...P, x]);
          return;
        }
        if (N) {
          D([x]), Z(null);
          return;
        }
        r([
          L(x, { mode: "select" })
        ]), H("select click", {
          tag: x.tagName,
          id: x.id,
          className: x.className,
          rect: M.get(x) ?? null
        });
      }
    },
    [n, p, i, r, T, L, M, H]
  ), _ = V((t) => {
    D(
      (N) => N.filter((S) => S !== t)
    );
  }, []);
  Q(() => (document.addEventListener("mousemove", ee, !0), document.addEventListener("mouseleave", e, !0), document.addEventListener("click", E, !0), H("selector mounted", {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    tracked: q.length
  }), () => {
    document.removeEventListener("mousemove", ee, !0), document.removeEventListener("mouseleave", e, !0), document.removeEventListener("click", E, !0), A.current && clearTimeout(A.current), H("selector unmounted");
  }), [ee, e, E, q.length, H]), Q(() => {
    const t = (N) => {
      switch (N.key) {
        case "Escape":
          d();
          break;
        case "Enter":
          if (i === "insert" && g) {
            r([
              L(g.element, {
                mode: "insert",
                insertionPosition: g.position,
                insertionAxis: g.axis
              })
            ]);
            break;
          }
          if (n && T.length > 0) {
            const S = T.map(
              (x) => L(x, { mode: "select" })
            );
            r(S);
          }
          break;
      }
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [
    n,
    g,
    i,
    d,
    r,
    T,
    L
  ]), Q(() => {
    const t = window.matchMedia("(max-width: 640px)"), N = () => oe(t.matches);
    return N(), t.addEventListener("change", N), () => t.removeEventListener("change", N);
  }, []);
  const j = {
    selectLabel: b?.selectLabel ?? "Select",
    insertLabel: b?.insertLabel ?? "Insert",
    instructionSelectSingle: b?.instructionSelectSingle ?? "Click an element to select",
    instructionSelectMulti: b?.instructionSelectMulti ?? "Click elements to select",
    instructionInsert: b?.instructionInsert ?? "Click to choose where to insert new content",
    confirmLabel: b?.confirmLabel ?? "✓",
    cancelLabel: b?.cancelLabel ?? "✕"
  }, F = i === "insert" ? j.instructionInsert : n ? j.instructionSelectMulti : j.instructionSelectSingle, ie = V(() => {
    const t = p && !n;
    if (n && T.length > 0) {
      const N = T.map(
        (S) => L(S, { mode: "select" })
      );
      r(N);
      return;
    }
    if (t) {
      if (i === "select" && T[0]) {
        r([
          L(T[0], { mode: "select" })
        ]);
        return;
      }
      i === "insert" && B && r([
        L(B.element, {
          mode: "insert",
          insertionPosition: B.position,
          insertionAxis: B.axis
        })
      ]);
    }
  }, [
    n,
    p,
    i,
    r,
    B,
    T,
    L
  ]), te = p && !n, C = n ? T.length > 0 : te ? i === "select" ? T.length > 0 : !!B : !1, J = n || te, re = {
    vertical: s?.vertical ?? "top",
    horizontal: s?.horizontal ?? "center"
  }, I = {
    position: "fixed",
    background: u.panelBg,
    color: u.textColor,
    padding: p ? "14px 16px" : "16px 24px",
    borderRadius: p ? "16px" : "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: u.shadow,
    border: u.border,
    zIndex: 100001,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: p ? "10px" : "16px",
    pointerEvents: "auto",
    width: p ? "calc(100% - 24px)" : void 0,
    maxWidth: p ? "min(720px, calc(100% - 24px))" : "min(960px, calc(100% - 48px))",
    boxSizing: "border-box",
    flexWrap: "nowrap",
    overflowX: "auto",
    justifyContent: "space-between"
  };
  if (p)
    I.left = "12px", I.right = "12px", I.bottom = "16px", I.top = void 0, I.transform = "none";
  else
    switch (re.vertical === "top" ? I.top = "24px" : I.bottom = "24px", re.horizontal) {
      case "left":
        I.left = "24px", I.transform = "none";
        break;
      case "right":
        I.right = "24px", I.transform = "none";
        break;
      default:
        I.left = "50%", I.transform = "translateX(-50%)";
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
            style: I,
            children: [
              o && /* @__PURE__ */ v.jsx(
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
                    flexGrow: p ? 1 : void 0
                  },
                  children: /* @__PURE__ */ v.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        gap: p ? "6px" : "4px",
                        flex: p ? "1 1 auto" : void 0,
                        flexShrink: 1
                      },
                      children: [
                        /* @__PURE__ */ v.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (t) => {
                              t.preventDefault(), t.stopPropagation(), f("select");
                            },
                            style: {
                              border: i === "select" ? "1px solid " + u.toggleSelectedBg : h === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "999px 0 0 999px",
                              padding: p ? "10px 12px" : "6px 14px",
                              minHeight: p ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: i === "select" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: p ? 1 : void 0,
                              background: i === "select" ? u.toggleSelectedBg : "transparent",
                              color: i === "select" ? u.toggleSelectedText : u.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": i === "select" ? u.toggleSelectedText : u.toggleIdleTextHover
                            },
                            children: j.selectLabel
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (t) => {
                              t.preventDefault(), t.stopPropagation(), f("insert");
                            },
                            style: {
                              border: i === "insert" ? "1px solid " + u.toggleSelectedBg : h === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "0 999px 999px 0",
                              padding: p ? "10px 12px" : "6px 14px",
                              minHeight: p ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: i === "insert" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: p ? 1 : void 0,
                              background: i === "insert" ? u.toggleSelectedBg : "transparent",
                              color: i === "insert" ? u.toggleSelectedText : u.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": i === "insert" ? u.toggleSelectedText : u.toggleIdleTextHover
                            },
                            children: j.insertLabel
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              !p && /* @__PURE__ */ v.jsx(
                "span",
                {
                  className: "element-selector-instruction",
                  style: {
                    color: u.instructionTextColor,
                    fontWeight: 600,
                    flex: 1,
                    textAlign: "center",
                    lineHeight: 1.4,
                    fontSize: "15px"
                  },
                  children: F
                }
              ),
              /* @__PURE__ */ v.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: p ? "10px" : "8px",
                    width: void 0,
                    justifyContent: "flex-end",
                    flex: p ? "1 1 auto" : void 0,
                    flexWrap: "nowrap"
                  },
                  children: [
                    J && /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        disabled: !C,
                        className: "element-selector-action element-selector-confirm",
                        onClick: (t) => {
                          t.preventDefault(), t.stopPropagation(), C && ie();
                        },
                        style: {
                          border: "none",
                          borderRadius: p ? "10px" : "8px",
                          padding: p ? "12px 14px" : "8px 12px",
                          minHeight: p ? "44px" : void 0,
                          flex: p ? "0 1 auto" : void 0,
                          cursor: C ? "pointer" : "not-allowed",
                          fontSize: p ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": u.actionBg,
                          "--es-action-bg-hover": u.actionBgHover,
                          "--es-action-bg-disabled": u.actionBgDisabled,
                          "--es-action-color": u.actionColor,
                          "--es-action-color-hover": u.actionColorHover,
                          "--es-action-color-disabled": u.actionColorDisabled
                        },
                        "aria-label": j.confirmLabel,
                        children: j.confirmLabel
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-action element-selector-cancel",
                        onClick: (t) => {
                          t.preventDefault(), t.stopPropagation(), d();
                        },
                        style: {
                          border: "none",
                          borderRadius: p ? "10px" : "8px",
                          padding: p ? "12px 14px" : "8px 12px",
                          cursor: "pointer",
                          fontSize: p ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": u.actionBg,
                          "--es-action-bg-hover": u.actionBgHover,
                          "--es-action-bg-disabled": u.actionBgDisabled,
                          "--es-action-color": u.actionColor,
                          "--es-action-color-hover": u.actionColorHover,
                          "--es-action-color-disabled": u.actionColorDisabled,
                          flex: p ? "0 1 auto" : void 0,
                          marginLeft: p ? "6px" : void 0
                        },
                        "aria-label": j.cancelLabel,
                        children: j.cancelLabel
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        i === "select" && m && (!n || !T.includes(m)) && !p && /* @__PURE__ */ v.jsx(
          Pe,
          {
            targetElement: m,
            friendlySelectors: c,
            rect: M.get(m) ?? null
          }
        ),
        i === "insert" && g && /* @__PURE__ */ v.jsx(
          ke,
          {
            element: g.element,
            position: g.position,
            axis: g.axis,
            friendlySelectors: c,
            rect: M.get(g.element) ?? null
          }
        ),
        (n || p && T.length > 0) && T.map((t, N) => /* @__PURE__ */ v.jsx(
          Se,
          {
            targetElement: t,
            onDeselect: () => _(t),
            rect: M.get(t) ?? null
          },
          `selected-${N}`
        )),
        /* @__PURE__ */ v.jsx("style", { children: `
        body {
          cursor: ${X ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${X ? "crosshair" : "default"} !important;
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
let z = null, K = null;
function ze() {
  return z && K || (z = document.createElement("div"), z.id = "element-selector-persistent-highlights", z.style.position = "fixed", z.style.inset = "0", z.style.pointerEvents = "none", z.style.zIndex = "99998", document.body.appendChild(z), K = ye.createRoot(z)), K;
}
function De({
  elements: r,
  friendlySelectors: d
}) {
  const a = me(
    () => r.map((l) => l.element),
    [r]
  ), c = Re(a);
  return r.length ? /* @__PURE__ */ v.jsx(v.Fragment, { children: r.map((l, o) => {
    const s = c.get(l.element) ?? null;
    return l.mode === "insert" && l.insertionPosition && l.insertionAxis ? /* @__PURE__ */ v.jsx(
      ke,
      {
        element: l.element,
        position: l.insertionPosition,
        axis: l.insertionAxis,
        friendlySelectors: d,
        rect: s
      },
      `persistent-insert-${o}`
    ) : /* @__PURE__ */ v.jsx(
      Se,
      {
        targetElement: l.element,
        onDeselect: () => {
        },
        variant: "passive",
        rect: s
      },
      `persistent-select-${o}`
    );
  }) }) : null;
}
function $e(r, d) {
  if (!r.length) return;
  ze().render(
    /* @__PURE__ */ v.jsx(ge.StrictMode, { children: /* @__PURE__ */ v.jsx(De, { elements: r, friendlySelectors: d }) })
  );
}
function Be() {
  K && (K.unmount(), K = null), z?.parentNode && z.parentNode.removeChild(z), z = null;
}
function We(r = {}) {
  const {
    multiSelect: d = !1,
    friendlySelectors: a = !1,
    mode: c = "select",
    allowModeToggle: l = !0,
    retainSelectionHighlights: o = !1,
    optionsPanelPosition: s,
    selectionBarText: b,
    theme: h = "dark",
    debug: y = !1
  } = r;
  return Be(), new Promise((i, k) => {
    const n = document.createElement("div");
    n.id = "element-selector-root", n.style.position = "fixed", n.style.zIndex = "999999", n.style.inset = "0", document.body.appendChild(n);
    const u = ye.createRoot(n), m = () => {
      u.unmount(), n.parentNode && n.parentNode.removeChild(n);
    }, R = (w) => {
      o && $e(w, a), m(), !d && w.length > 0 ? i(w[0]) : i(w);
    }, g = () => {
      m(), k(new Error("Element selection cancelled by user"));
    };
    u.render(
      /* @__PURE__ */ v.jsx(ge.StrictMode, { children: /* @__PURE__ */ v.jsx(
        Le,
        {
          onElementSelected: R,
          onCancel: g,
          multiSelect: d,
          friendlySelectors: a,
          initialMode: c,
          allowModeToggle: l,
          optionsPanelPosition: s,
          selectionBarText: b,
          theme: h,
          debug: y
        }
      ) })
    );
  });
}
export {
  Le as ElementSelector,
  He as buildElementSelector,
  fe as findElementAtCoordinates,
  We as launchSelector,
  Be as resetSelectionHighlights
};
