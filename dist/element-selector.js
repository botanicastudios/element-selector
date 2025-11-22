import se, { useRef as P, useEffect as W, useState as G, useCallback as L } from "react";
import fe from "react-dom/client";
var re = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function he() {
  if (le) return J;
  le = 1;
  var r = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function s(o, n, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), n.key !== void 0 && (f = "" + n.key), "key" in n) {
      l = {};
      for (var m in n)
        m !== "key" && (l[m] = n[m]);
    } else l = n;
    return n = l.ref, {
      $$typeof: r,
      type: o,
      key: f,
      ref: n !== void 0 ? n : null,
      props: l
    };
  }
  return J.Fragment = u, J.jsx = s, J.jsxs = s, J;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function xe() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === $ ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case j:
          return "Profiler";
        case T:
          return "StrictMode";
        case _:
          return "Suspense";
        case w:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case k:
            return "Portal";
          case H:
            return (e.displayName || "Context") + ".Provider";
          case O:
            return (e._context.displayName || "Context") + ".Consumer";
          case E:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case A:
            return a = e.displayName || null, a !== null ? a : r(e.type) || "Memo";
          case M:
            a = e._payload, e = e._init;
            try {
              return r(e(a));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function s(e) {
      try {
        u(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var t = a.error, b = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), u(e);
      }
    }
    function o(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var a = r(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = q.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (U.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, a) {
      function t() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function d() {
      var e = r(this.type);
      return K[e] || (K[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, a, t, b, g, c, F, V) {
      return t = c.ref, e = {
        $$typeof: v,
        type: e,
        key: a,
        props: c,
        _owner: g
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: d
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
        value: F
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function i(e, a, t, b, g, c, F, V) {
      var R = a.children;
      if (R !== void 0)
        if (b)
          if (ne(R)) {
            for (b = 0; b < R.length; b++)
              y(R[b]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(R);
      if (U.call(a, "key")) {
        R = r(e);
        var I = Object.keys(a).filter(function(ge) {
          return ge !== "key";
        });
        b = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", te[R + b] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          R,
          I,
          R
        ), te[R + b] = !0);
      }
      if (R = null, t !== void 0 && (s(t), R = "" + t), f(a) && (s(a.key), R = "" + a.key), "key" in a) {
        t = {};
        for (var D in a)
          D !== "key" && (t[D] = a[D]);
      } else t = a;
      return R && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        R,
        c,
        g,
        n(),
        t,
        F,
        V
      );
    }
    function y(e) {
      typeof e == "object" && e !== null && e.$$typeof === v && e._store && (e._store.validated = 1);
    }
    var p = se, v = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), H = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), q = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, ne = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Q, K = {}, ee = p.react_stack_bottom_frame.bind(
      p,
      l
    )(), X = N(o(l)), te = {};
    B.Fragment = x, B.jsx = function(e, a, t, b, g) {
      var c = 1e4 > q.recentlyCreatedOwnerStacks++;
      return i(
        e,
        a,
        t,
        !1,
        b,
        g,
        c ? Error("react-stack-top-frame") : ee,
        c ? N(o(e)) : X
      );
    }, B.jsxs = function(e, a, t, b, g) {
      var c = 1e4 > q.recentlyCreatedOwnerStacks++;
      return i(
        e,
        a,
        t,
        !0,
        b,
        g,
        c ? Error("react-stack-top-frame") : ee,
        c ? N(o(e)) : X
      );
    };
  }()), B;
}
var ue;
function ve() {
  return ue || (ue = 1, process.env.NODE_ENV === "production" ? re.exports = he() : re.exports = xe()), re.exports;
}
var h = ve();
function ae(r, u = 60) {
  const s = P(null), o = P(null), n = P(r);
  W(() => {
    n.current = r;
  }, [r]), W(() => {
    const l = 1e3 / u, f = (m) => {
      o.current !== null ? m - o.current >= l && (n.current(), o.current = m) : (o.current = m, n.current()), s.current = requestAnimationFrame(f);
    };
    return s.current = requestAnimationFrame(f), () => {
      s.current && (cancelAnimationFrame(s.current), s.current = null), o.current = null;
    };
  }, [u]);
}
function oe(r, u) {
  const s = document.elementsFromPoint(r, u);
  for (const o of s)
    if (!(o.id === "element-selector-overlay" || o.closest("#element-selector-overlay") || o.id === "element-selector-root" || o.closest("#element-selector-root")) && !(o.tagName !== "svg" && o.tagName !== "SVG" && o.closest("svg")))
      return o;
  return document.body;
}
function ye(r) {
  if (!r || r === document.body)
    return "body";
  if (r.id)
    return `#${CSS.escape(r.id)}`;
  const u = [];
  let s = r;
  for (; s && s !== document.body; ) {
    let o = s.tagName.toLowerCase();
    if (s.className && typeof s.className == "string") {
      const n = s.className.split(/\s+/).filter((l) => l && !l.includes(":")).map((l) => `.${CSS.escape(l)}`).slice(0, 2).join("");
      n && (o += n);
    }
    if (s.parentElement) {
      const n = s.tagName, f = Array.from(s.parentElement.children).filter(
        (m) => m.tagName === n
      );
      if (f.length > 1) {
        const m = f.indexOf(s) + 1;
        o += `:nth-of-type(${m})`;
      }
    }
    u.unshift(o);
    try {
      const n = u.join(" > "), l = document.querySelectorAll(n);
      if (l.length === 1 && l[0] === r)
        return n;
    } catch {
    }
    s = s.parentElement;
  }
  return u.join(" > ");
}
function pe(r) {
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
function Ee(r, u = 300, { maxAncestors: s = 10 } = {}) {
  if (!r || !r.parentNode)
    throw new Error("Node must be attached to the DOM (with a parent).");
  const o = (p) => p.nodeType === Node.ELEMENT_NODE ? p.outerHTML : p.nodeType === Node.TEXT_NODE ? (p.textContent ?? "").toString() : new XMLSerializer().serializeToString(p), n = (p, v) => {
    const k = [];
    let x = v;
    for (; x && x !== p; ) {
      const T = x.parentNode;
      if (!T)
        throw new Error("Failed to resolve node path for context extraction.");
      const j = Array.prototype.indexOf.call(T.childNodes, x);
      if (j === -1)
        throw new Error("Unable to map node into cloned context tree.");
      k.unshift(j), x = T;
    }
    if (x !== p)
      throw new Error("Context root does not contain the requested node.");
    return k;
  }, l = (p) => {
    p.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    ).forEach((k) => k.remove());
  }, f = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`
  }, m = (p) => {
    const v = document.createElement("div"), k = p.cloneNode(!0);
    if (v.appendChild(k), l(v), !v.firstChild)
      return {
        beforeHtml: "",
        elementHtml: o(r),
        afterHtml: ""
      };
    const x = n(p, r);
    let T = v.firstChild;
    for (const z of x) {
      const $ = T.childNodes.item(z);
      if (!$)
        throw new Error("Failed to mirror node inside cloned context tree.");
      T = $;
    }
    const j = T.parentNode;
    if (!j)
      return {
        beforeHtml: "",
        elementHtml: o(r),
        afterHtml: ""
      };
    const O = document.createTextNode(f.start), H = document.createTextNode(f.end);
    j.insertBefore(O, T), j.insertBefore(H, T.nextSibling), j.removeChild(T);
    const E = v.innerHTML, _ = E.indexOf(f.start), w = E.indexOf(f.end);
    if (_ === -1 || w === -1 || w < _)
      throw new Error("Failed to locate context markers during serialization.");
    const A = E.slice(0, _), M = E.slice(w + f.end.length);
    return {
      beforeHtml: A,
      elementHtml: o(r),
      afterHtml: M
    };
  }, d = (p) => p.parentNode ? p.parentNode.nodeType === Node.DOCUMENT_NODE ? p.parentNode.documentElement ?? null : p.parentNode : null;
  let S = 0, i = r.parentNode ?? r, y = m(i);
  for (; S < s && (y.beforeHtml.length < u || y.afterHtml.length < u); ) {
    const p = d(i);
    if (!p || p === i || (S += 1, i = p, y = m(i), !i.parentNode || i.parentNode.nodeType === Node.DOCUMENT_NODE))
      break;
  }
  return y;
}
function Re({ targetElement: r, friendlySelectors: u = !1 }) {
  const s = P(null), o = () => {
    if (!s.current || !r) return;
    const l = r.getBoundingClientRect(), f = s.current, m = 1;
    f.style.top = `${l.top - m}px`, f.style.left = `${l.left - m}px`, f.style.width = `${l.width + m * 2}px`, f.style.height = `${l.height + m * 2}px`, f.style.opacity = "1";
  };
  W(() => {
    o();
  }, [r, o]), ae(o, 30);
  const n = r ? {
    tag: r.tagName.toLowerCase(),
    friendlyTag: u ? pe(r.tagName) : r.tagName.toLowerCase(),
    id: r.id,
    classes: r.className?.split(" ").filter((l) => l).slice(0, 2)
  } : null;
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      ref: s,
      style: {
        position: "fixed",
        pointerEvents: "none",
        zIndex: 1e5,
        opacity: 0,
        transition: "opacity 150ms ease-out",
        // Thick dashed border with strong color
        border: "3px dashed #0ea5e9",
        borderRadius: "8px",
        background: "rgba(14, 165, 233, 0.2)",
        boxShadow: "0 0 20px rgba(14, 165, 233, 0.6), inset 0 0 20px rgba(14, 165, 233, 0.3)",
        animation: "pulse 1.5s infinite",
        boxSizing: "border-box"
      },
      children: [
        n && /* @__PURE__ */ h.jsxs(
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
              background: "linear-gradient(135deg, #3b82f6, #10b981)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              whiteSpace: "nowrap"
            },
            children: [
              /* @__PURE__ */ h.jsx("strong", { children: n.friendlyTag }),
              n.id && /* @__PURE__ */ h.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                n.id
              ] }),
              n.classes?.length > 0 && /* @__PURE__ */ h.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                n.classes.join(".")
              ] })
            ]
          }
        ),
        /* @__PURE__ */ h.jsx("style", { children: `
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.6), inset 0 0 20px rgba(14, 165, 233, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(14, 165, 233, 0.9), inset 0 0 30px rgba(14, 165, 233, 0.4);
          }
        }
      ` })
      ]
    }
  );
}
function me({ targetElement: r, onDeselect: u, variant: s = "interactive" }) {
  const o = P(null), [n, l] = G(!1), f = s === "interactive", m = () => {
    if (!o.current || !r) return;
    const d = r.getBoundingClientRect(), S = o.current, i = 1;
    S.style.top = `${d.top - i}px`, S.style.left = `${d.left - i}px`, S.style.width = `${d.width + i * 2}px`, S.style.height = `${d.height + i * 2}px`, S.style.opacity = "1";
  };
  return W(() => {
    m();
  }, [r, m]), ae(m, 30), /* @__PURE__ */ h.jsxs(
    "button",
    {
      ref: o,
      "data-selected-element": "true",
      onClick: (d) => {
        f && (d.stopPropagation(), d.preventDefault(), u());
      },
      onMouseEnter: () => f && l(!0),
      onMouseLeave: () => f && l(!1),
      style: {
        position: "fixed",
        zIndex: 1e5,
        opacity: 0,
        transition: "border-color 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out",
        boxSizing: "border-box",
        border: n ? "3px solid #ef4444" : "3px solid #8b5cf6",
        padding: 0,
        background: n ? "rgba(239, 68, 68, 0.15)" : "rgba(139, 92, 246, 0.15)",
        borderRadius: "8px",
        cursor: n ? "pointer" : "default",
        boxShadow: n ? "0 0 20px rgba(239, 68, 68, 0.5), inset 0 0 20px rgba(239, 68, 68, 0.2)" : "0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.2)",
        pointerEvents: f ? "auto" : "none"
      },
      children: [
        f && n && /* @__PURE__ */ h.jsx(
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
        /* @__PURE__ */ h.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "-12px",
              right: "-12px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: n ? "#ef4444" : "#8b5cf6",
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
const Z = 4;
function be({
  element: r,
  position: u,
  axis: s,
  friendlySelectors: o = !1
}) {
  const n = P(null), l = P(null), f = L(() => {
    if (!n.current || !l.current) return;
    const i = r.getBoundingClientRect();
    if (s === "horizontal") {
      const y = u === "before" ? i.top : i.bottom;
      n.current.style.top = `${y - Z / 2}px`, n.current.style.left = `${i.left}px`, n.current.style.width = `${Math.max(i.width, 1)}px`, n.current.style.height = `${Z}px`;
      const p = u === "before" ? y - 32 : y + 8;
      l.current.style.top = `${p}px`, l.current.style.left = `${i.left}px`;
    } else {
      const y = u === "before" ? i.left : i.right;
      n.current.style.left = `${y - Z / 2}px`, n.current.style.top = `${i.top}px`, n.current.style.height = `${Math.max(i.height, 1)}px`, n.current.style.width = `${Z}px`;
      const p = u === "before" ? y - 140 : y + 12;
      l.current.style.left = `${p}px`, l.current.style.top = `${i.top}px`;
    }
  }, [r, u, s]);
  W(() => {
    f();
  }, [f]), ae(f, 30);
  const m = r.tagName.toLowerCase(), d = o ? pe(r.tagName) : m, S = `${u === "before" ? "Insert before" : "Insert after"} ${d}`;
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: n,
        style: {
          position: "fixed",
          pointerEvents: "none",
          zIndex: 1e5,
          background: "linear-gradient(90deg, rgba(147, 197, 253, 0.9), rgba(59, 130, 246, 0.9))",
          boxShadow: "0 0 18px rgba(59, 130, 246, 0.6)",
          borderRadius: Z
        }
      }
    ),
    /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: l,
        style: {
          position: "fixed",
          pointerEvents: "none",
          zIndex: 100001,
          background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
          color: "#f8fafc",
          padding: "6px 12px",
          borderRadius: "8px",
          fontSize: "12px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxShadow: "0 8px 20px rgba(14, 165, 233, 0.3)",
          whiteSpace: "nowrap"
        },
        children: S
      }
    )
  ] });
}
const we = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
}, Se = 300;
function ie(r) {
  if (!r)
    return {};
  const u = (s) => r.getAttribute(s) || void 0;
  return {
    src: u("data-ai-src"),
    routeId: u("data-ai-route-id"),
    routeFile: u("data-ai-route-file")
  };
}
function de(r, u, s) {
  if (!r || r === document.documentElement)
    return null;
  const o = r.getBoundingClientRect();
  if (o.width === 0 && o.height === 0)
    return null;
  const n = [
    { edge: "top", value: Math.abs(s - o.top) },
    { edge: "bottom", value: Math.abs(s - o.bottom) },
    { edge: "left", value: Math.abs(u - o.left) },
    { edge: "right", value: Math.abs(u - o.right) }
  ];
  n.sort((m, d) => m.value - d.value);
  const l = n[0];
  if (!l)
    return null;
  const f = we[l.edge];
  return {
    element: r,
    position: f.position,
    axis: f.axis
  };
}
function ke({
  onElementSelected: r,
  onCancel: u,
  multiSelect: s = !1,
  friendlySelectors: o = !1,
  initialMode: n = "select",
  allowModeToggle: l = !0,
  optionsPanelPosition: f,
  selectionBarText: m
}) {
  const [d, S] = G(n), i = d === "select" && s, [y, p] = G(null), [v, k] = G(null), [x, T] = G([]), [j, O] = G(!1), H = P({ x: 0, y: 0 }), E = P(null), _ = P(null), w = P(null), A = L(
    (t, b = {}) => {
      const g = (() => {
        try {
          return Ee(t, Se);
        } catch {
          return {
            beforeHtml: "",
            elementHtml: t.outerHTML || "",
            afterHtml: ""
          };
        }
      })(), c = {
        element: t,
        selector: ye(t),
        tag: t.tagName.toLowerCase(),
        id: t.id || null,
        classes: t.className || "",
        textPreview: t.textContent?.substring(0, 50) || "",
        beforeHtml: g.beforeHtml,
        elementHtml: g.elementHtml,
        afterHtml: g.afterHtml,
        ...ie(t),
        ...b
      };
      if (c.mode === "insert") {
        c.insertionBeforeHtml = c.insertionPosition === "after" ? c.beforeHtml + c.elementHtml : c.beforeHtml, c.insertionAfterHtml = c.insertionPosition === "before" ? c.elementHtml + c.afterHtml : c.afterHtml;
        const F = c.insertionPosition === "before" ? "before" : "after", V = F === "before" ? t.previousElementSibling : t, R = F === "before" ? t : t.nextElementSibling, I = ie(V), D = ie(R);
        c.beforeSrc = I.src, c.beforeRouteId = I.routeId, c.beforeRouteFile = I.routeFile, c.afterSrc = D.src, c.afterRouteId = D.routeId, c.afterRouteFile = D.routeFile;
      } else
        c.insertionBeforeHtml = c.beforeHtml, c.insertionAfterHtml = c.afterHtml;
      return c;
    },
    []
  ), M = L(() => {
    const t = oe(
      H.current.x,
      H.current.y
    );
    if (d === "insert") {
      const g = de(
        t,
        H.current.x,
        H.current.y
      );
      (g && (!w.current || w.current.element !== g.element || w.current.position !== g.position || w.current.axis !== g.axis) || !g && w.current) && (w.current = g, k(g ?? null)), O(!!g), p(g ? g.element : null), _.current = g ? g.element : null;
      return;
    }
    w.current && (w.current = null, k(null)), i && x.includes(t) ? (O(!1), p(null), _.current = null) : _.current !== t && (_.current = t, p(t), O(!0));
  }, [i, d, x]), z = L(
    (t) => {
      if (t.target.closest('[data-element-selector-ui="true"]')) {
        E.current && (clearTimeout(E.current), E.current = null), p(null), k(null), _.current = null, w.current = null, O(!1);
        return;
      }
      H.current = {
        x: t.clientX,
        y: t.clientY
      }, E.current && clearTimeout(E.current), E.current = setTimeout(() => {
        M();
      }, 50);
    },
    [M]
  ), $ = L(() => {
    E.current && (clearTimeout(E.current), E.current = null), p(null), k(null), _.current = null, w.current = null, O(!1);
  }, []), q = L(
    (t) => {
      t !== d && (S(t), T([]), k(null), p(null), _.current = null, w.current = null, O(!1));
    },
    [d]
  ), U = L(
    (t) => {
      const b = t.target;
      if (b.closest('[data-selected-element="true"]') || b.closest('[data-element-selector-ui="true"]'))
        return;
      if (t.preventDefault(), t.stopPropagation(), d === "insert") {
        const c = de(
          oe(t.clientX, t.clientY),
          t.clientX,
          t.clientY
        );
        if (!c)
          return;
        r([
          A(c.element, {
            mode: "insert",
            insertionPosition: c.position,
            insertionAxis: c.axis
          })
        ]);
        return;
      }
      const g = oe(
        t.clientX,
        t.clientY
      );
      if (g) {
        if (i) {
          T((c) => c.includes(g) ? c : [...c, g]);
          return;
        }
        r([
          A(g, { mode: "select" })
        ]);
      }
    },
    [i, d, r, A]
  ), ne = L((t) => {
    T(
      (b) => b.filter((g) => g !== t)
    );
  }, []);
  W(() => (document.addEventListener("mousemove", z, !0), document.addEventListener("mouseleave", $, !0), document.addEventListener("click", U, !0), () => {
    document.removeEventListener("mousemove", z, !0), document.removeEventListener("mouseleave", $, !0), document.removeEventListener("click", U, !0), E.current && clearTimeout(E.current);
  }), [z, $, U]), W(() => {
    const t = (b) => {
      switch (b.key) {
        case "Escape":
          u();
          break;
        case "Enter":
          if (d === "insert" && v) {
            r([
              A(v.element, {
                mode: "insert",
                insertionPosition: v.position,
                insertionAxis: v.axis
              })
            ]);
            break;
          }
          if (i && x.length > 0) {
            const g = x.map(
              (c) => A(c, { mode: "select" })
            );
            r(g);
          }
          break;
      }
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [
    i,
    v,
    d,
    u,
    r,
    x,
    A
  ]);
  const N = {
    selectLabel: m?.selectLabel ?? "Select",
    insertLabel: m?.insertLabel ?? "Insert",
    instructionSelectSingle: m?.instructionSelectSingle ?? "Click an element to select",
    instructionSelectMulti: m?.instructionSelectMulti ?? "Click elements to select",
    instructionInsert: m?.instructionInsert ?? "Click to choose where to insert new content",
    selectedCount: m?.selectedCount ?? "{count} selected",
    confirmLabel: m?.confirmLabel ?? "✓",
    cancelLabel: m?.cancelLabel ?? "✕"
  }, Q = (t) => {
    const { selectedCount: b } = N;
    return typeof b == "function" ? b(t) : b.replace("{count}", String(t));
  }, K = d === "insert" ? N.instructionInsert : i ? N.instructionSelectMulti : N.instructionSelectSingle, ee = L(() => {
    if (i && x.length > 0) {
      const t = x.map(
        (b) => A(b, { mode: "select" })
      );
      r(t);
    }
  }, [i, r, x, A]), X = i && x.length > 0, te = i, e = {
    vertical: f?.vertical ?? "top",
    horizontal: f?.horizontal ?? "center"
  }, a = {
    position: "fixed",
    background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
    color: "#f1f5f9",
    padding: "16px 24px",
    borderRadius: "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
    zIndex: 100001,
    display: "flex",
    alignItems: "center",
    gap: "16px",
    pointerEvents: "auto"
  };
  switch (e.vertical === "top" ? a.top = "24px" : a.bottom = "24px", e.horizontal) {
    case "left":
      a.left = "24px", a.transform = "none";
      break;
    case "right":
      a.right = "24px", a.transform = "none";
      break;
    default:
      a.left = "50%", a.transform = "translateX(-50%)";
      break;
  }
  return /* @__PURE__ */ h.jsxs(
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
        /* @__PURE__ */ h.jsxs(
          "div",
          {
            "data-element-selector-ui": "true",
            style: a,
            children: [
              l && /* @__PURE__ */ h.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    background: "#1f2937",
                    borderRadius: "999px",
                    padding: "4px",
                    gap: "4px"
                  },
                  children: [
                    /* @__PURE__ */ h.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-toggle",
                        onClick: (t) => {
                          t.preventDefault(), t.stopPropagation(), q("select");
                        },
                        style: {
                          border: "none",
                          borderRadius: "999px",
                          padding: "6px 14px",
                          cursor: d === "select" ? "default" : "pointer",
                          fontWeight: d === "select" ? 600 : 500,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-toggle-bg": d === "select" ? "#38bdf8" : "transparent",
                          "--es-toggle-bg-hover": d === "select" ? "#38bdf8" : "rgba(56, 189, 248, 0.18)",
                          "--es-toggle-color": d === "select" ? "#0f172a" : "#e2e8f0",
                          "--es-toggle-color-hover": d === "select" ? "#0f172a" : "#e2e8f0"
                        },
                        children: N.selectLabel
                      }
                    ),
                    /* @__PURE__ */ h.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-toggle",
                        onClick: (t) => {
                          t.preventDefault(), t.stopPropagation(), q("insert");
                        },
                        style: {
                          border: "none",
                          borderRadius: "999px",
                          padding: "6px 14px",
                          cursor: d === "insert" ? "default" : "pointer",
                          fontWeight: d === "insert" ? 600 : 500,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-toggle-bg": d === "insert" ? "#38bdf8" : "transparent",
                          "--es-toggle-bg-hover": d === "insert" ? "#38bdf8" : "rgba(56, 189, 248, 0.18)",
                          "--es-toggle-color": d === "insert" ? "#0f172a" : "#e2e8f0",
                          "--es-toggle-color-hover": d === "insert" ? "#0f172a" : "#e2e8f0"
                        },
                        children: N.insertLabel
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx("span", { children: K }),
              i && /* @__PURE__ */ h.jsx(
                "span",
                {
                  style: {
                    background: "#475569",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    fontWeight: "bold"
                  },
                  children: Q(x.length)
                }
              ),
              /* @__PURE__ */ h.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  },
                  children: [
                    te && /* @__PURE__ */ h.jsx(
                      "button",
                      {
                        type: "button",
                        disabled: !X,
                        className: "element-selector-action element-selector-confirm",
                        onClick: (t) => {
                          t.preventDefault(), t.stopPropagation(), X && ee();
                        },
                        style: {
                          border: "none",
                          borderRadius: "8px",
                          padding: "8px 12px",
                          cursor: X ? "pointer" : "not-allowed",
                          fontSize: "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": "rgba(255, 255, 255, 0.08)",
                          "--es-action-bg-hover": "rgba(255, 255, 255, 0.22)",
                          "--es-action-bg-disabled": "rgba(255, 255, 255, 0.04)",
                          "--es-action-color": "#e2e8f0",
                          "--es-action-color-hover": "#f8fafc",
                          "--es-action-color-disabled": "#94a3b8"
                        },
                        "aria-label": N.confirmLabel,
                        children: N.confirmLabel
                      }
                    ),
                    /* @__PURE__ */ h.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-action element-selector-cancel",
                        onClick: (t) => {
                          t.preventDefault(), t.stopPropagation(), u();
                        },
                        style: {
                          border: "none",
                          borderRadius: "8px",
                          padding: "8px 12px",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": "rgba(255, 255, 255, 0.08)",
                          "--es-action-bg-hover": "rgba(255, 255, 255, 0.22)",
                          "--es-action-bg-disabled": "rgba(255, 255, 255, 0.08)",
                          "--es-action-color": "#e2e8f0",
                          "--es-action-color-hover": "#f8fafc",
                          "--es-action-color-disabled": "#e2e8f0"
                        },
                        "aria-label": N.cancelLabel,
                        children: N.cancelLabel
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        d === "select" && y && (!i || !x.includes(y)) && /* @__PURE__ */ h.jsx(
          Re,
          {
            targetElement: y,
            friendlySelectors: o
          }
        ),
        d === "insert" && v && /* @__PURE__ */ h.jsx(
          be,
          {
            element: v.element,
            position: v.position,
            axis: v.axis,
            friendlySelectors: o
          }
        ),
        i && x.map((t, b) => /* @__PURE__ */ h.jsx(
          me,
          {
            targetElement: t,
            onDeselect: () => ne(t)
          },
          `selected-${b}`
        )),
        /* @__PURE__ */ h.jsx("style", { children: `
        body {
          cursor: ${j ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${j ? "crosshair" : "default"} !important;
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
      ` })
      ]
    }
  );
}
let C = null, Y = null;
function Te() {
  return C && Y || (C = document.createElement("div"), C.id = "element-selector-persistent-highlights", C.style.position = "fixed", C.style.inset = "0", C.style.pointerEvents = "none", C.style.zIndex = "99998", document.body.appendChild(C), Y = fe.createRoot(C)), Y;
}
function Ne(r, u) {
  if (!r.length) return;
  Te().render(
    /* @__PURE__ */ h.jsx(se.StrictMode, { children: /* @__PURE__ */ h.jsx(h.Fragment, { children: r.map((o, n) => o.mode === "insert" && o.insertionPosition && o.insertionAxis ? /* @__PURE__ */ h.jsx(
      be,
      {
        element: o.element,
        position: o.insertionPosition,
        axis: o.insertionAxis,
        friendlySelectors: u
      },
      `persistent-insert-${n}`
    ) : /* @__PURE__ */ h.jsx(
      me,
      {
        targetElement: o.element,
        onDeselect: () => {
        },
        variant: "passive"
      },
      `persistent-select-${n}`
    )) }) })
  );
}
function _e() {
  Y && (Y.unmount(), Y = null), C?.parentNode && C.parentNode.removeChild(C), C = null;
}
function Ae(r = {}) {
  const {
    multiSelect: u = !1,
    friendlySelectors: s = !1,
    mode: o = "select",
    allowModeToggle: n = !0,
    retainSelectionHighlights: l = !1,
    optionsPanelPosition: f,
    selectionBarText: m
  } = r;
  return _e(), new Promise((d, S) => {
    const i = document.createElement("div");
    i.id = "element-selector-root", i.style.position = "fixed", i.style.zIndex = "999999", i.style.inset = "0", document.body.appendChild(i);
    const y = fe.createRoot(i), p = () => {
      y.unmount(), i.parentNode && i.parentNode.removeChild(i);
    }, v = (x) => {
      l && Ne(x, s), p(), !u && x.length > 0 ? d(x[0]) : d(x);
    }, k = () => {
      p(), S(new Error("Element selection cancelled by user"));
    };
    y.render(
      /* @__PURE__ */ h.jsx(se.StrictMode, { children: /* @__PURE__ */ h.jsx(
        ke,
        {
          onElementSelected: v,
          onCancel: k,
          multiSelect: u,
          friendlySelectors: s,
          initialMode: o,
          allowModeToggle: n,
          optionsPanelPosition: f,
          selectionBarText: m
        }
      ) })
    );
  });
}
export {
  ke as ElementSelector,
  ye as buildElementSelector,
  oe as findElementAtCoordinates,
  Ae as launchSelector,
  _e as resetSelectionHighlights
};
