import le, { useRef as k, useEffect as $, useState as z, useCallback as A } from "react";
import de from "react-dom/client";
var B = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oe;
function fe() {
  if (oe) return q;
  oe = 1;
  var t = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function a(o, n, s) {
    var r = null;
    if (s !== void 0 && (r = "" + s), n.key !== void 0 && (r = "" + n.key), "key" in n) {
      s = {};
      for (var l in n)
        l !== "key" && (s[l] = n[l]);
    } else s = n;
    return n = s.ref, {
      $$typeof: t,
      type: o,
      key: r,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return q.Fragment = u, q.jsx = a, q.jsxs = a, q;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se;
function pe() {
  return se || (se = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === D ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case I:
          return "Fragment";
        case O:
          return "Profiler";
        case N:
          return "StrictMode";
        case C:
          return "Suspense";
        case X:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Y:
            return "Portal";
          case j:
            return (e.displayName || "Context") + ".Provider";
          case S:
            return (e._context.displayName || "Context") + ".Consumer";
          case R:
            var c = e.render;
            return e = e.displayName, e || (e = c.displayName || c.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case F:
            return c = e.displayName || null, c !== null ? c : t(e.type) || "Memo";
          case L:
            c = e._payload, e = e._init;
            try {
              return t(e(c));
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
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var m = c.error, h = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return m.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), u(e);
      }
    }
    function o(e) {
      if (e === I) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === L)
        return "<...>";
      try {
        var c = t(e);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = W.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function r(e) {
      if (V.call(e, "key")) {
        var c = Object.getOwnPropertyDescriptor(e, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, c) {
      function m() {
        v || (v = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: m,
        configurable: !0
      });
    }
    function f() {
      var e = t(this.type);
      return p[e] || (p[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, c, m, h, P, _, Z, Q) {
      return m = _.ref, e = {
        $$typeof: w,
        type: e,
        key: c,
        props: _,
        _owner: P
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: f
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
        value: Z
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, c, m, h, P, _, Z, Q) {
      var y = c.children;
      if (y !== void 0)
        if (h)
          if (J(y)) {
            for (h = 0; h < y.length; h++)
              b(y[h]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(y);
      if (V.call(c, "key")) {
        y = t(e);
        var M = Object.keys(c).filter(function(ue) {
          return ue !== "key";
        });
        h = 0 < M.length ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}", ne[y + h] || (M = 0 < M.length ? "{" + M.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          y,
          M,
          y
        ), ne[y + h] = !0);
      }
      if (y = null, m !== void 0 && (a(m), y = "" + m), r(c) && (a(c.key), y = "" + c.key), "key" in c) {
        m = {};
        for (var K in c)
          K !== "key" && (m[K] = c[K]);
      } else m = c;
      return y && l(
        m,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        y,
        _,
        P,
        n(),
        m,
        Z,
        Q
      );
    }
    function b(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var g = le, w = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), j = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), W = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, J = Array.isArray, i = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var v, p = {}, E = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), re = i(o(s)), ne = {};
    H.Fragment = I, H.jsx = function(e, c, m, h, P) {
      var _ = 1e4 > W.recentlyCreatedOwnerStacks++;
      return x(
        e,
        c,
        m,
        !1,
        h,
        P,
        _ ? Error("react-stack-top-frame") : E,
        _ ? i(o(e)) : re
      );
    }, H.jsxs = function(e, c, m, h, P) {
      var _ = 1e4 > W.recentlyCreatedOwnerStacks++;
      return x(
        e,
        c,
        m,
        !0,
        h,
        P,
        _ ? Error("react-stack-top-frame") : E,
        _ ? i(o(e)) : re
      );
    };
  }()), H;
}
var ie;
function me() {
  return ie || (ie = 1, process.env.NODE_ENV === "production" ? B.exports = fe() : B.exports = pe()), B.exports;
}
var d = me();
function te(t, u = 60) {
  const a = k(null), o = k(null), n = k(t);
  $(() => {
    n.current = t;
  }, [t]), $(() => {
    const s = 1e3 / u, r = (l) => {
      o.current !== null ? l - o.current >= s && (n.current(), o.current = l) : (o.current = l, n.current()), a.current = requestAnimationFrame(r);
    };
    return a.current = requestAnimationFrame(r), () => {
      a.current && (cancelAnimationFrame(a.current), a.current = null), o.current = null;
    };
  }, [u]);
}
function ee(t, u) {
  const a = document.elementsFromPoint(t, u);
  for (const o of a)
    if (!(o.id === "element-selector-overlay" || o.closest("#element-selector-overlay") || o.id === "element-selector-root" || o.closest("#element-selector-root")) && !(o.tagName !== "svg" && o.tagName !== "SVG" && o.closest("svg")))
      return o;
  return document.body;
}
function be(t) {
  if (!t || t === document.body)
    return "body";
  if (t.id)
    return `#${CSS.escape(t.id)}`;
  const u = [];
  let a = t;
  for (; a && a !== document.body; ) {
    let o = a.tagName.toLowerCase();
    if (a.className && typeof a.className == "string") {
      const n = a.className.split(/\s+/).filter((s) => s && !s.includes(":")).map((s) => `.${CSS.escape(s)}`).slice(0, 2).join("");
      n && (o += n);
    }
    if (a.parentElement) {
      const n = a.tagName, r = Array.from(a.parentElement.children).filter(
        (l) => l.tagName === n
      );
      if (r.length > 1) {
        const l = r.indexOf(a) + 1;
        o += `:nth-of-type(${l})`;
      }
    }
    u.unshift(o);
    try {
      const n = u.join(" > "), s = document.querySelectorAll(n);
      if (s.length === 1 && s[0] === t)
        return n;
    } catch {
    }
    a = a.parentElement;
  }
  return u.join(" > ");
}
function ce(t) {
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
function xe({ targetElement: t, friendlySelectors: u = !1 }) {
  const a = k(null), o = () => {
    if (!a.current || !t) return;
    const s = t.getBoundingClientRect(), r = a.current, l = 1;
    r.style.top = `${s.top - l}px`, r.style.left = `${s.left - l}px`, r.style.width = `${s.width + l * 2}px`, r.style.height = `${s.height + l * 2}px`, r.style.opacity = "1";
  };
  $(() => {
    o();
  }, [t, o]), te(o, 30);
  const n = t ? {
    tag: t.tagName.toLowerCase(),
    friendlyTag: u ? ce(t.tagName) : t.tagName.toLowerCase(),
    id: t.id,
    classes: t.className?.split(" ").filter((s) => s).slice(0, 2)
  } : null;
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: a,
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
        n && /* @__PURE__ */ d.jsxs(
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
              /* @__PURE__ */ d.jsx("strong", { children: n.friendlyTag }),
              n.id && /* @__PURE__ */ d.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                n.id
              ] }),
              n.classes?.length > 0 && /* @__PURE__ */ d.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                n.classes.join(".")
              ] })
            ]
          }
        ),
        /* @__PURE__ */ d.jsx("style", { children: `
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
function ge({ targetElement: t, onDeselect: u }) {
  const a = k(null), [o, n] = z(!1), s = () => {
    if (!a.current || !t) return;
    const r = t.getBoundingClientRect(), l = a.current, f = 1;
    l.style.top = `${r.top - f}px`, l.style.left = `${r.left - f}px`, l.style.width = `${r.width + f * 2}px`, l.style.height = `${r.height + f * 2}px`, l.style.opacity = "1";
  };
  return $(() => {
    s();
  }, [t, s]), te(s, 30), /* @__PURE__ */ d.jsxs(
    "button",
    {
      ref: a,
      "data-selected-element": "true",
      onClick: (r) => {
        r.stopPropagation(), r.preventDefault(), u();
      },
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      style: {
        position: "fixed",
        zIndex: 1e5,
        opacity: 0,
        transition: "border-color 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out",
        boxSizing: "border-box",
        border: o ? "3px solid #ef4444" : "3px solid #8b5cf6",
        padding: 0,
        background: o ? "rgba(239, 68, 68, 0.15)" : "rgba(139, 92, 246, 0.15)",
        borderRadius: "8px",
        cursor: o ? "pointer" : "default",
        boxShadow: o ? "0 0 20px rgba(239, 68, 68, 0.5), inset 0 0 20px rgba(239, 68, 68, 0.2)" : "0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.2)",
        pointerEvents: "auto"
        // Make it clickable
      },
      children: [
        o && /* @__PURE__ */ d.jsx(
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
        /* @__PURE__ */ d.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "-12px",
              right: "-12px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: o ? "#ef4444" : "#8b5cf6",
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
const U = 4;
function he({
  element: t,
  position: u,
  axis: a,
  friendlySelectors: o = !1
}) {
  const n = k(null), s = k(null), r = A(() => {
    if (!n.current || !s.current) return;
    const x = t.getBoundingClientRect();
    if (a === "horizontal") {
      const b = u === "before" ? x.top : x.bottom;
      n.current.style.top = `${b - U / 2}px`, n.current.style.left = `${x.left}px`, n.current.style.width = `${Math.max(x.width, 1)}px`, n.current.style.height = `${U}px`;
      const g = u === "before" ? b - 32 : b + 8;
      s.current.style.top = `${g}px`, s.current.style.left = `${x.left}px`;
    } else {
      const b = u === "before" ? x.left : x.right;
      n.current.style.left = `${b - U / 2}px`, n.current.style.top = `${x.top}px`, n.current.style.height = `${Math.max(x.height, 1)}px`, n.current.style.width = `${U}px`;
      const g = u === "before" ? b - 140 : b + 12;
      s.current.style.left = `${g}px`, s.current.style.top = `${x.top}px`;
    }
  }, [t, u, a]);
  $(() => {
    r();
  }, [r]), te(r, 30);
  const l = t.tagName.toLowerCase(), f = o ? ce(t.tagName) : l, T = `${u === "before" ? "Insert before" : "Insert after"} ${f}`;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: n,
        style: {
          position: "fixed",
          pointerEvents: "none",
          zIndex: 1e5,
          background: "linear-gradient(90deg, rgba(147, 197, 253, 0.9), rgba(59, 130, 246, 0.9))",
          boxShadow: "0 0 18px rgba(59, 130, 246, 0.6)",
          borderRadius: U
        }
      }
    ),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: s,
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
        children: T
      }
    )
  ] });
}
const ye = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
};
function ae(t, u, a) {
  if (!t || t === document.documentElement)
    return null;
  const o = t.getBoundingClientRect();
  if (o.width === 0 && o.height === 0)
    return null;
  const n = [
    { edge: "top", value: Math.abs(a - o.top) },
    { edge: "bottom", value: Math.abs(a - o.bottom) },
    { edge: "left", value: Math.abs(u - o.left) },
    { edge: "right", value: Math.abs(u - o.right) }
  ];
  n.sort((l, f) => l.value - f.value);
  const s = n[0];
  if (!s)
    return null;
  const r = ye[s.edge];
  return {
    element: t,
    position: r.position,
    axis: r.axis
  };
}
function ve({
  onElementSelected: t,
  onCancel: u,
  multiSelect: a = !1,
  friendlySelectors: o = !1,
  initialMode: n = "select",
  allowModeToggle: s = !0
}) {
  const [r, l] = z(n), f = r === "select" && a, [T, x] = z(null), [b, g] = z(null), [w, Y] = z([]), [I, N] = z(!1), O = k({ x: 0, y: 0 }), S = k(null), j = k(null), R = k(null), C = A(
    (i, v = {}) => ({
      element: i,
      selector: be(i),
      tag: i.tagName.toLowerCase(),
      id: i.id || null,
      classes: i.className || "",
      textPreview: i.textContent?.substring(0, 50) || "",
      ...v
    }),
    []
  ), X = A(() => {
    const i = ee(
      O.current.x,
      O.current.y
    );
    if (r === "insert") {
      const p = ae(
        i,
        O.current.x,
        O.current.y
      );
      (p && (!R.current || R.current.element !== p.element || R.current.position !== p.position || R.current.axis !== p.axis) || !p && R.current) && (R.current = p, g(p ?? null)), N(!!p), x(p ? p.element : null), j.current = p ? p.element : null;
      return;
    }
    R.current && (R.current = null, g(null)), f && w.includes(i) ? (N(!1), x(null), j.current = null) : j.current !== i && (j.current = i, x(i), N(!0));
  }, [f, r, w]), F = A(
    (i) => {
      O.current = {
        x: i.clientX,
        y: i.clientY
      }, S.current && clearTimeout(S.current), S.current = setTimeout(() => {
        X();
      }, 50);
    },
    [X]
  ), L = A(() => {
    S.current && (clearTimeout(S.current), S.current = null), x(null), g(null), j.current = null, R.current = null, N(!1);
  }, []), G = A(
    (i) => {
      i !== r && (l(i), Y([]), g(null), x(null), j.current = null, R.current = null, N(!1));
    },
    [r]
  ), D = A(
    (i) => {
      const v = i.target;
      if (v.closest('[data-selected-element="true"]') || v.closest('[data-element-selector-ui="true"]'))
        return;
      if (i.preventDefault(), i.stopPropagation(), r === "insert") {
        const E = ae(
          ee(i.clientX, i.clientY),
          i.clientX,
          i.clientY
        );
        if (!E)
          return;
        t([
          C(E.element, {
            mode: "insert",
            insertionPosition: E.position,
            insertionAxis: E.axis
          })
        ]);
        return;
      }
      const p = ee(
        i.clientX,
        i.clientY
      );
      if (p) {
        if (f) {
          Y((E) => E.includes(p) ? E : [...E, p]);
          return;
        }
        t([
          C(p, { mode: "select" })
        ]);
      }
    },
    [f, r, t, C]
  ), W = A((i) => {
    Y(
      (v) => v.filter((p) => p !== i)
    );
  }, []);
  $(() => (document.addEventListener("mousemove", F, !0), document.addEventListener("mouseleave", L, !0), document.addEventListener("click", D, !0), () => {
    document.removeEventListener("mousemove", F, !0), document.removeEventListener("mouseleave", L, !0), document.removeEventListener("click", D, !0), S.current && clearTimeout(S.current);
  }), [F, L, D]), $(() => {
    const i = (v) => {
      switch (v.key) {
        case "Escape":
          u();
          break;
        case "Enter":
          if (r === "insert" && b) {
            t([
              C(b.element, {
                mode: "insert",
                insertionPosition: b.position,
                insertionAxis: b.axis
              })
            ]);
            break;
          }
          if (f && w.length > 0) {
            const p = w.map(
              (E) => C(E, { mode: "select" })
            );
            t(p);
          }
          break;
      }
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [
    f,
    b,
    r,
    u,
    t,
    w,
    C
  ]);
  const V = r === "insert" ? "Click to choose where to insert new content" : `Click ${f ? "elements" : "an element"} to select`, J = r === "insert" ? "Click to confirm • Esc to cancel" : f ? "Enter to confirm • Esc to cancel" : "Esc to cancel";
  return /* @__PURE__ */ d.jsxs(
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
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            "data-element-selector-ui": "true",
            style: {
              position: "fixed",
              top: "24px",
              left: "50%",
              transform: "translateX(-50%)",
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
            },
            children: [
              s && /* @__PURE__ */ d.jsxs(
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
                    /* @__PURE__ */ d.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (i) => {
                          i.preventDefault(), i.stopPropagation(), G("select");
                        },
                        style: {
                          border: "none",
                          borderRadius: "999px",
                          padding: "6px 14px",
                          cursor: r === "select" ? "default" : "pointer",
                          backgroundColor: r === "select" ? "#38bdf8" : "transparent",
                          color: r === "select" ? "#0f172a" : "#e2e8f0",
                          fontWeight: r === "select" ? 600 : 500,
                          transition: "background-color 120ms ease, color 120ms ease"
                        },
                        children: "Select"
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (i) => {
                          i.preventDefault(), i.stopPropagation(), G("insert");
                        },
                        style: {
                          border: "none",
                          borderRadius: "999px",
                          padding: "6px 14px",
                          cursor: r === "insert" ? "default" : "pointer",
                          backgroundColor: r === "insert" ? "#38bdf8" : "transparent",
                          color: r === "insert" ? "#0f172a" : "#e2e8f0",
                          fontWeight: r === "insert" ? 600 : 500,
                          transition: "background-color 120ms ease, color 120ms ease"
                        },
                        children: "Insert"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ d.jsx("span", { children: V }),
              f && /* @__PURE__ */ d.jsxs(
                "span",
                {
                  style: {
                    background: "#475569",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    fontWeight: "bold"
                  },
                  children: [
                    w.length,
                    " selected"
                  ]
                }
              ),
              /* @__PURE__ */ d.jsx("span", { style: { opacity: 0.8 }, children: J })
            ]
          }
        ),
        r === "select" && T && (!f || !w.includes(T)) && /* @__PURE__ */ d.jsx(
          xe,
          {
            targetElement: T,
            friendlySelectors: o
          }
        ),
        r === "insert" && b && /* @__PURE__ */ d.jsx(
          he,
          {
            element: b.element,
            position: b.position,
            axis: b.axis,
            friendlySelectors: o
          }
        ),
        f && w.map((i, v) => /* @__PURE__ */ d.jsx(
          ge,
          {
            targetElement: i,
            onDeselect: () => W(i)
          },
          `selected-${v}`
        )),
        /* @__PURE__ */ d.jsx("style", { children: `
        body {
          cursor: ${I ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${I ? "crosshair" : "default"} !important;
        }
      ` })
      ]
    }
  );
}
function we(t = {}) {
  const {
    multiSelect: u = !1,
    friendlySelectors: a = !1,
    mode: o = "select",
    allowModeToggle: n = !0
  } = t;
  return new Promise((s, r) => {
    const l = document.createElement("div");
    l.id = "element-selector-root", l.style.position = "fixed", l.style.zIndex = "999999", l.style.inset = "0", document.body.appendChild(l);
    const f = de.createRoot(l), T = () => {
      f.unmount(), l.parentNode && l.parentNode.removeChild(l);
    }, x = (g) => {
      T(), !u && g.length > 0 ? s(g[0]) : s(g);
    }, b = () => {
      T(), r(new Error("Element selection cancelled by user"));
    };
    f.render(
      /* @__PURE__ */ d.jsx(le.StrictMode, { children: /* @__PURE__ */ d.jsx(
        ve,
        {
          onElementSelected: x,
          onCancel: b,
          multiSelect: u,
          friendlySelectors: a,
          initialMode: o,
          allowModeToggle: n
        }
      ) })
    );
  });
}
export {
  ve as ElementSelector,
  be as buildElementSelector,
  ee as findElementAtCoordinates,
  we as launchSelector
};
