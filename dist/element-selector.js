import le, { useRef as A, useEffect as D, useState as q, useCallback as L } from "react";
import de from "react-dom/client";
var V = { exports: {} }, U = {};
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
  if (oe) return U;
  oe = 1;
  var t = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function a(o, n, i) {
    var r = null;
    if (i !== void 0 && (r = "" + i), n.key !== void 0 && (r = "" + n.key), "key" in n) {
      i = {};
      for (var l in n)
        l !== "key" && (i[l] = n[l]);
    } else i = n;
    return n = i.ref, {
      $$typeof: t,
      type: o,
      key: r,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return U.Fragment = d, U.jsx = a, U.jsxs = a, U;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function pe() {
  return ie || (ie = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === I ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case k:
          return "Profiler";
        case v:
          return "StrictMode";
        case j:
          return "Suspense";
        case H:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case S:
            return "Portal";
          case P:
            return (e.displayName || "Context") + ".Provider";
          case C:
            return (e._context.displayName || "Context") + ".Consumer";
          case E:
            var u = e.render;
            return e = e.displayName, e || (e = u.displayName || u.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case z:
            return u = e.displayName || null, u !== null ? u : t(e.type) || "Memo";
          case $:
            u = e._payload, e = e._init;
            try {
              return t(e(u));
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
        var u = !1;
      } catch {
        u = !0;
      }
      if (u) {
        u = console;
        var g = u.error, w = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return g.call(
          u,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), d(e);
      }
    }
    function o(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var u = t(e);
        return u ? "<" + u + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = W.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function r(e) {
      if (G.call(e, "key")) {
        var u = Object.getOwnPropertyDescriptor(e, "key").get;
        if (u && u.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, u) {
      function g() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          u
        ));
      }
      g.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: g,
        configurable: !0
      });
    }
    function m() {
      var e = t(this.type);
      return b[e] || (b[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function N(e, u, g, w, M, O, Q, K) {
      return g = O.ref, e = {
        $$typeof: y,
        type: e,
        key: u,
        props: O,
        _owner: M
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: Q
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function p(e, u, g, w, M, O, Q, K) {
      var R = u.children;
      if (R !== void 0)
        if (w)
          if (J(R)) {
            for (w = 0; w < R.length; w++)
              x(R[w]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(R);
      if (G.call(u, "key")) {
        R = t(e);
        var Y = Object.keys(u).filter(function(ue) {
          return ue !== "key";
        });
        w = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", ne[R + w] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          R,
          Y,
          R
        ), ne[R + w] = !0);
      }
      if (R = null, g !== void 0 && (a(g), R = "" + g), r(u) && (a(u.key), R = "" + u.key), "key" in u) {
        g = {};
        for (var ee in u)
          ee !== "key" && (g[ee] = u[ee]);
      } else g = u;
      return R && l(
        g,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), N(
        e,
        R,
        O,
        M,
        n(),
        g,
        Q,
        K
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === y && e._store && (e._store.validated = 1);
    }
    var c = le, y = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), P = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), W = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, J = Array.isArray, s = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var _, b = {}, f = c.react_stack_bottom_frame.bind(
      c,
      i
    )(), Z = s(o(i)), ne = {};
    X.Fragment = T, X.jsx = function(e, u, g, w, M) {
      var O = 1e4 > W.recentlyCreatedOwnerStacks++;
      return p(
        e,
        u,
        g,
        !1,
        w,
        M,
        O ? Error("react-stack-top-frame") : f,
        O ? s(o(e)) : Z
      );
    }, X.jsxs = function(e, u, g, w, M) {
      var O = 1e4 > W.recentlyCreatedOwnerStacks++;
      return p(
        e,
        u,
        g,
        !0,
        w,
        M,
        O ? Error("react-stack-top-frame") : f,
        O ? s(o(e)) : Z
      );
    };
  }()), X;
}
var se;
function me() {
  return se || (se = 1, process.env.NODE_ENV === "production" ? V.exports = fe() : V.exports = pe()), V.exports;
}
var h = me();
function re(t, d = 60) {
  const a = A(null), o = A(null), n = A(t);
  D(() => {
    n.current = t;
  }, [t]), D(() => {
    const i = 1e3 / d, r = (l) => {
      o.current !== null ? l - o.current >= i && (n.current(), o.current = l) : (o.current = l, n.current()), a.current = requestAnimationFrame(r);
    };
    return a.current = requestAnimationFrame(r), () => {
      a.current && (cancelAnimationFrame(a.current), a.current = null), o.current = null;
    };
  }, [d]);
}
function te(t, d) {
  const a = document.elementsFromPoint(t, d);
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
  const d = [];
  let a = t;
  for (; a && a !== document.body; ) {
    let o = a.tagName.toLowerCase();
    if (a.className && typeof a.className == "string") {
      const n = a.className.split(/\s+/).filter((i) => i && !i.includes(":")).map((i) => `.${CSS.escape(i)}`).slice(0, 2).join("");
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
    d.unshift(o);
    try {
      const n = d.join(" > "), i = document.querySelectorAll(n);
      if (i.length === 1 && i[0] === t)
        return n;
    } catch {
    }
    a = a.parentElement;
  }
  return d.join(" > ");
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
function xe(t, d = 300, { maxAncestors: a = 10 } = {}) {
  if (!t || !t.parentNode)
    throw new Error("Node must be attached to the DOM (with a parent).");
  const o = (c) => c.nodeType === Node.ELEMENT_NODE ? c.outerHTML : c.nodeType === Node.TEXT_NODE ? (c.textContent ?? "").toString() : new XMLSerializer().serializeToString(c), n = (c, y) => {
    const S = [];
    let T = y;
    for (; T && T !== c; ) {
      const v = T.parentNode;
      if (!v)
        throw new Error("Failed to resolve node path for context extraction.");
      const k = Array.prototype.indexOf.call(v.childNodes, T);
      if (k === -1)
        throw new Error("Unable to map node into cloned context tree.");
      S.unshift(k), T = v;
    }
    if (T !== c)
      throw new Error("Context root does not contain the requested node.");
    return S;
  }, i = (c) => {
    c.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    ).forEach((S) => S.remove());
  }, r = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`
  }, l = (c) => {
    const y = document.createElement("div"), S = c.cloneNode(!0);
    if (y.appendChild(S), i(y), !y.firstChild)
      return {
        beforeHtml: "",
        elementHtml: o(t),
        afterHtml: ""
      };
    const T = n(c, t);
    let v = y.firstChild;
    for (const F of T) {
      const I = v.childNodes.item(F);
      if (!I)
        throw new Error("Failed to mirror node inside cloned context tree.");
      v = I;
    }
    const k = v.parentNode;
    if (!k)
      return {
        beforeHtml: "",
        elementHtml: o(t),
        afterHtml: ""
      };
    const C = document.createTextNode(r.start), P = document.createTextNode(r.end);
    k.insertBefore(C, v), k.insertBefore(P, v.nextSibling), k.removeChild(v);
    const E = y.innerHTML, j = E.indexOf(r.start), H = E.indexOf(r.end);
    if (j === -1 || H === -1 || H < j)
      throw new Error("Failed to locate context markers during serialization.");
    const z = E.slice(0, j), $ = E.slice(H + r.end.length);
    return {
      beforeHtml: z,
      elementHtml: o(t),
      afterHtml: $
    };
  }, m = (c) => c.parentNode ? c.parentNode.nodeType === Node.DOCUMENT_NODE ? c.parentNode.documentElement ?? null : c.parentNode : null;
  let N = 0, p = t.parentNode ?? t, x = l(p);
  for (; N < a && (x.beforeHtml.length < d || x.afterHtml.length < d); ) {
    const c = m(p);
    if (!c || c === p || (N += 1, p = c, x = l(p), !p.parentNode || p.parentNode.nodeType === Node.DOCUMENT_NODE))
      break;
  }
  return x;
}
function he({ targetElement: t, friendlySelectors: d = !1 }) {
  const a = A(null), o = () => {
    if (!a.current || !t) return;
    const i = t.getBoundingClientRect(), r = a.current, l = 1;
    r.style.top = `${i.top - l}px`, r.style.left = `${i.left - l}px`, r.style.width = `${i.width + l * 2}px`, r.style.height = `${i.height + l * 2}px`, r.style.opacity = "1";
  };
  D(() => {
    o();
  }, [t, o]), re(o, 30);
  const n = t ? {
    tag: t.tagName.toLowerCase(),
    friendlyTag: d ? ce(t.tagName) : t.tagName.toLowerCase(),
    id: t.id,
    classes: t.className?.split(" ").filter((i) => i).slice(0, 2)
  } : null;
  return /* @__PURE__ */ h.jsxs(
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
function ge({ targetElement: t, onDeselect: d }) {
  const a = A(null), [o, n] = q(!1), i = () => {
    if (!a.current || !t) return;
    const r = t.getBoundingClientRect(), l = a.current, m = 1;
    l.style.top = `${r.top - m}px`, l.style.left = `${r.left - m}px`, l.style.width = `${r.width + m * 2}px`, l.style.height = `${r.height + m * 2}px`, l.style.opacity = "1";
  };
  return D(() => {
    i();
  }, [t, i]), re(i, 30), /* @__PURE__ */ h.jsxs(
    "button",
    {
      ref: a,
      "data-selected-element": "true",
      onClick: (r) => {
        r.stopPropagation(), r.preventDefault(), d();
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
        o && /* @__PURE__ */ h.jsx(
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
const B = 4;
function ye({
  element: t,
  position: d,
  axis: a,
  friendlySelectors: o = !1
}) {
  const n = A(null), i = A(null), r = L(() => {
    if (!n.current || !i.current) return;
    const p = t.getBoundingClientRect();
    if (a === "horizontal") {
      const x = d === "before" ? p.top : p.bottom;
      n.current.style.top = `${x - B / 2}px`, n.current.style.left = `${p.left}px`, n.current.style.width = `${Math.max(p.width, 1)}px`, n.current.style.height = `${B}px`;
      const c = d === "before" ? x - 32 : x + 8;
      i.current.style.top = `${c}px`, i.current.style.left = `${p.left}px`;
    } else {
      const x = d === "before" ? p.left : p.right;
      n.current.style.left = `${x - B / 2}px`, n.current.style.top = `${p.top}px`, n.current.style.height = `${Math.max(p.height, 1)}px`, n.current.style.width = `${B}px`;
      const c = d === "before" ? x - 140 : x + 12;
      i.current.style.left = `${c}px`, i.current.style.top = `${p.top}px`;
    }
  }, [t, d, a]);
  D(() => {
    r();
  }, [r]), re(r, 30);
  const l = t.tagName.toLowerCase(), m = o ? ce(t.tagName) : l, N = `${d === "before" ? "Insert before" : "Insert after"} ${m}`;
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
          borderRadius: B
        }
      }
    ),
    /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: i,
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
        children: N
      }
    )
  ] });
}
const ve = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
}, Ee = 300;
function ae(t, d, a) {
  if (!t || t === document.documentElement)
    return null;
  const o = t.getBoundingClientRect();
  if (o.width === 0 && o.height === 0)
    return null;
  const n = [
    { edge: "top", value: Math.abs(a - o.top) },
    { edge: "bottom", value: Math.abs(a - o.bottom) },
    { edge: "left", value: Math.abs(d - o.left) },
    { edge: "right", value: Math.abs(d - o.right) }
  ];
  n.sort((l, m) => l.value - m.value);
  const i = n[0];
  if (!i)
    return null;
  const r = ve[i.edge];
  return {
    element: t,
    position: r.position,
    axis: r.axis
  };
}
function we({
  onElementSelected: t,
  onCancel: d,
  multiSelect: a = !1,
  friendlySelectors: o = !1,
  initialMode: n = "select",
  allowModeToggle: i = !0
}) {
  const [r, l] = q(n), m = r === "select" && a, [N, p] = q(null), [x, c] = q(null), [y, S] = q([]), [T, v] = q(!1), k = A({ x: 0, y: 0 }), C = A(null), P = A(null), E = A(null), j = L(
    (s, _ = {}) => {
      const b = (() => {
        try {
          return xe(s, Ee);
        } catch {
          return {
            beforeHtml: "",
            elementHtml: s.outerHTML || "",
            afterHtml: ""
          };
        }
      })(), f = {
        element: s,
        selector: be(s),
        tag: s.tagName.toLowerCase(),
        id: s.id || null,
        classes: s.className || "",
        textPreview: s.textContent?.substring(0, 50) || "",
        beforeHtml: b.beforeHtml,
        elementHtml: b.elementHtml,
        afterHtml: b.afterHtml,
        ..._
      };
      return f.mode === "insert" ? (f.insertionBeforeHtml = f.insertionPosition === "after" ? f.beforeHtml + f.elementHtml : f.beforeHtml, f.insertionAfterHtml = f.insertionPosition === "before" ? f.elementHtml + f.afterHtml : f.afterHtml) : (f.insertionBeforeHtml = f.beforeHtml, f.insertionAfterHtml = f.afterHtml), f;
    },
    []
  ), H = L(() => {
    const s = te(
      k.current.x,
      k.current.y
    );
    if (r === "insert") {
      const b = ae(
        s,
        k.current.x,
        k.current.y
      );
      (b && (!E.current || E.current.element !== b.element || E.current.position !== b.position || E.current.axis !== b.axis) || !b && E.current) && (E.current = b, c(b ?? null)), v(!!b), p(b ? b.element : null), P.current = b ? b.element : null;
      return;
    }
    E.current && (E.current = null, c(null)), m && y.includes(s) ? (v(!1), p(null), P.current = null) : P.current !== s && (P.current = s, p(s), v(!0));
  }, [m, r, y]), z = L(
    (s) => {
      k.current = {
        x: s.clientX,
        y: s.clientY
      }, C.current && clearTimeout(C.current), C.current = setTimeout(() => {
        H();
      }, 50);
    },
    [H]
  ), $ = L(() => {
    C.current && (clearTimeout(C.current), C.current = null), p(null), c(null), P.current = null, E.current = null, v(!1);
  }, []), F = L(
    (s) => {
      s !== r && (l(s), S([]), c(null), p(null), P.current = null, E.current = null, v(!1));
    },
    [r]
  ), I = L(
    (s) => {
      const _ = s.target;
      if (_.closest('[data-selected-element="true"]') || _.closest('[data-element-selector-ui="true"]'))
        return;
      if (s.preventDefault(), s.stopPropagation(), r === "insert") {
        const f = ae(
          te(s.clientX, s.clientY),
          s.clientX,
          s.clientY
        );
        if (!f)
          return;
        t([
          j(f.element, {
            mode: "insert",
            insertionPosition: f.position,
            insertionAxis: f.axis
          })
        ]);
        return;
      }
      const b = te(
        s.clientX,
        s.clientY
      );
      if (b) {
        if (m) {
          S((f) => f.includes(b) ? f : [...f, b]);
          return;
        }
        t([
          j(b, { mode: "select" })
        ]);
      }
    },
    [m, r, t, j]
  ), W = L((s) => {
    S(
      (_) => _.filter((b) => b !== s)
    );
  }, []);
  D(() => (document.addEventListener("mousemove", z, !0), document.addEventListener("mouseleave", $, !0), document.addEventListener("click", I, !0), () => {
    document.removeEventListener("mousemove", z, !0), document.removeEventListener("mouseleave", $, !0), document.removeEventListener("click", I, !0), C.current && clearTimeout(C.current);
  }), [z, $, I]), D(() => {
    const s = (_) => {
      switch (_.key) {
        case "Escape":
          d();
          break;
        case "Enter":
          if (r === "insert" && x) {
            t([
              j(x.element, {
                mode: "insert",
                insertionPosition: x.position,
                insertionAxis: x.axis
              })
            ]);
            break;
          }
          if (m && y.length > 0) {
            const b = y.map(
              (f) => j(f, { mode: "select" })
            );
            t(b);
          }
          break;
      }
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [
    m,
    x,
    r,
    d,
    t,
    y,
    j
  ]);
  const G = r === "insert" ? "Click to choose where to insert new content" : `Click ${m ? "elements" : "an element"} to select`, J = r === "insert" ? "Click to confirm • Esc to cancel" : m ? "Enter to confirm • Esc to cancel" : "Esc to cancel";
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
              i && /* @__PURE__ */ h.jsxs(
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
                        onClick: (s) => {
                          s.preventDefault(), s.stopPropagation(), F("select");
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
                    /* @__PURE__ */ h.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (s) => {
                          s.preventDefault(), s.stopPropagation(), F("insert");
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
              /* @__PURE__ */ h.jsx("span", { children: G }),
              m && /* @__PURE__ */ h.jsxs(
                "span",
                {
                  style: {
                    background: "#475569",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    fontWeight: "bold"
                  },
                  children: [
                    y.length,
                    " selected"
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx("span", { style: { opacity: 0.8 }, children: J })
            ]
          }
        ),
        r === "select" && N && (!m || !y.includes(N)) && /* @__PURE__ */ h.jsx(
          he,
          {
            targetElement: N,
            friendlySelectors: o
          }
        ),
        r === "insert" && x && /* @__PURE__ */ h.jsx(
          ye,
          {
            element: x.element,
            position: x.position,
            axis: x.axis,
            friendlySelectors: o
          }
        ),
        m && y.map((s, _) => /* @__PURE__ */ h.jsx(
          ge,
          {
            targetElement: s,
            onDeselect: () => W(s)
          },
          `selected-${_}`
        )),
        /* @__PURE__ */ h.jsx("style", { children: `
        body {
          cursor: ${T ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${T ? "crosshair" : "default"} !important;
        }
      ` })
      ]
    }
  );
}
function ke(t = {}) {
  const {
    multiSelect: d = !1,
    friendlySelectors: a = !1,
    mode: o = "select",
    allowModeToggle: n = !0
  } = t;
  return new Promise((i, r) => {
    const l = document.createElement("div");
    l.id = "element-selector-root", l.style.position = "fixed", l.style.zIndex = "999999", l.style.inset = "0", document.body.appendChild(l);
    const m = de.createRoot(l), N = () => {
      m.unmount(), l.parentNode && l.parentNode.removeChild(l);
    }, p = (c) => {
      N(), !d && c.length > 0 ? i(c[0]) : i(c);
    }, x = () => {
      N(), r(new Error("Element selection cancelled by user"));
    };
    m.render(
      /* @__PURE__ */ h.jsx(le.StrictMode, { children: /* @__PURE__ */ h.jsx(
        we,
        {
          onElementSelected: p,
          onCancel: x,
          multiSelect: d,
          friendlySelectors: a,
          initialMode: o,
          allowModeToggle: n
        }
      ) })
    );
  });
}
export {
  we as ElementSelector,
  be as buildElementSelector,
  te as findElementAtCoordinates,
  ke as launchSelector
};
