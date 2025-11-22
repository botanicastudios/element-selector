import be, { useRef as W, useEffect as Q, useState as U, useMemo as he, useCallback as V } from "react";
import Ee from "react-dom/client";
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
var xe;
function je() {
  if (xe) return le;
  xe = 1;
  var t = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function a(f, n, o) {
    var c = null;
    if (o !== void 0 && (c = "" + o), n.key !== void 0 && (c = "" + n.key), "key" in n) {
      o = {};
      for (var g in n)
        g !== "key" && (o[g] = n[g]);
    } else o = n;
    return n = o.ref, {
      $$typeof: t,
      type: f,
      key: c,
      ref: n !== void 0 ? n : null,
      props: o
    };
  }
  return le.Fragment = s, le.jsx = a, le.jsxs = a, le;
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
var ve;
function He() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case S:
          return "Profiler";
        case h:
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
          case x:
            return "Portal";
          case D:
            return (e.displayName || "Context") + ".Provider";
          case T:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var m = e.render;
            return e = e.displayName, e || (e = m.displayName || m.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return m = e.displayName || null, m !== null ? m : t(e.type) || "Memo";
          case b:
            m = e._payload, e = e._init;
            try {
              return t(e(m));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function a(e) {
      try {
        s(e);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var R = m.error, C = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return R.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), s(e);
      }
    }
    function f(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === b)
        return "<...>";
      try {
        var m = t(e);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = M.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function c(e) {
      if (H.call(e, "key")) {
        var m = Object.getOwnPropertyDescriptor(e, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function g(e, m) {
      function R() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: R,
        configurable: !0
      });
    }
    function p() {
      var e = t(this.type);
      return A[e] || (A[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function y(e, m, R, C, _, F, ie, te) {
      return R = F.ref, e = {
        $$typeof: d,
        type: e,
        key: m,
        props: F,
        _owner: _
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
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
    function i(e, m, R, C, _, F, ie, te) {
      var N = m.children;
      if (N !== void 0)
        if (C)
          if (G(N)) {
            for (C = 0; C < N.length; C++)
              E(N[C]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(N);
      if (H.call(m, "key")) {
        N = t(e);
        var J = Object.keys(m).filter(function(I) {
          return I !== "key";
        });
        C = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", ee[N + C] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          N,
          J,
          N
        ), ee[N + C] = !0);
      }
      if (N = null, R !== void 0 && (a(R), N = "" + R), c(m) && (a(m.key), N = "" + m.key), "key" in m) {
        R = {};
        for (var re in m)
          re !== "key" && (R[re] = m[re]);
      } else R = m;
      return N && g(
        R,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), y(
        e,
        N,
        F,
        _,
        n(),
        R,
        ie,
        te
      );
    }
    function E(e) {
      typeof e == "object" && e !== null && e.$$typeof === d && e._store && (e._store.validated = 1);
    }
    var l = be, d = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), D = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), M = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, G = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    l = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, A = {}, L = l.react_stack_bottom_frame.bind(
      l,
      o
    )(), ne = P(f(o)), ee = {};
    se.Fragment = k, se.jsx = function(e, m, R, C, _) {
      var F = 1e4 > M.recentlyCreatedOwnerStacks++;
      return i(
        e,
        m,
        R,
        !1,
        C,
        _,
        F ? Error("react-stack-top-frame") : L,
        F ? P(f(e)) : ne
      );
    }, se.jsxs = function(e, m, R, C, _) {
      var F = 1e4 > M.recentlyCreatedOwnerStacks++;
      return i(
        e,
        m,
        R,
        !0,
        C,
        _,
        F ? Error("react-stack-top-frame") : L,
        F ? P(f(e)) : ne
      );
    };
  }()), se;
}
var ye;
function Ie() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? ce.exports = je() : ce.exports = He()), ce.exports;
}
var v = Ie();
function Se(t) {
  if (!t) return [];
  const s = t.className;
  if (typeof s == "string")
    return s.split(/\s+/).filter(Boolean);
  const a = s?.baseVal;
  return typeof a == "string" ? a.split(/\s+/).filter(Boolean) : t.classList ? Array.from(t.classList).filter(Boolean) : [];
}
function fe(t, s) {
  const a = (o) => !!o && (o.id === "element-selector-overlay" || o.closest("#element-selector-overlay") || o.id === "element-selector-root" || o.closest("#element-selector-root")), f = (o, c, g) => {
    const p = o.elementFromPoint(c, g);
    if (!p) return null;
    if (p.tagName === "SLOT") {
      const y = p.assignedElements({ flatten: !0 });
      if (y.length > 0) {
        const i = y[0];
        if (i.shadowRoot) {
          const E = f(i.shadowRoot, c, g);
          if (E) return E;
        }
        return i;
      }
    }
    if (p.shadowRoot) {
      const y = f(p.shadowRoot, c, g);
      if (y) return y;
    }
    return p;
  };
  let n = f(document, t, s);
  return a(n) && (n = document.elementsFromPoint(t, s).find((c) => !a(c)) ?? null), n ? n.tagName !== "svg" && n.tagName !== "SVG" && n.closest("svg") ? n.closest("svg") || document.body : n : document.body;
}
function Pe(t) {
  if (!t || t === document.body)
    return "body";
  if (t.id)
    return `#${CSS.escape(t.id)}`;
  const s = [];
  let a = t;
  for (; a && a !== document.body; ) {
    let f = a.tagName.toLowerCase();
    const n = Se(a).filter((o) => !o.includes(":")).slice(0, 2);
    if (n.length > 0) {
      const o = n.map((c) => `.${CSS.escape(c)}`).join("");
      f += o;
    }
    if (a.parentElement) {
      const o = a.tagName, g = Array.from(a.parentElement.children).filter(
        (p) => p.tagName === o
      );
      if (g.length > 1) {
        const p = g.indexOf(a) + 1;
        f += `:nth-of-type(${p})`;
      }
    }
    s.unshift(f);
    try {
      const o = s.join(" > "), c = document.querySelectorAll(o);
      if (c.length === 1 && c[0] === t)
        return o;
    } catch {
    }
    a = a.parentElement;
  }
  return s.join(" > ");
}
function Re(t) {
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
function Ae(t, s = 300, { maxAncestors: a = 10 } = {}) {
  if (!t || !t.parentNode)
    throw new Error("Node must be attached to the DOM (with a parent).");
  const f = (l) => l.nodeType === Node.ELEMENT_NODE ? l.outerHTML : l.nodeType === Node.TEXT_NODE ? (l.textContent ?? "").toString() : new XMLSerializer().serializeToString(l), n = (l, d) => {
    const x = [];
    let k = d;
    for (; k && k !== l; ) {
      const h = k.parentNode;
      if (!h)
        throw new Error("Failed to resolve node path for context extraction.");
      const S = Array.prototype.indexOf.call(h.childNodes, k);
      if (S === -1)
        throw new Error("Unable to map node into cloned context tree.");
      x.unshift(S), k = h;
    }
    if (k !== l)
      throw new Error("Context root does not contain the requested node.");
    return x;
  }, o = (l) => {
    l.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    ).forEach((x) => x.remove());
  }, c = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`
  }, g = (l) => {
    const d = document.createElement("div"), x = l.cloneNode(!0);
    if (d.appendChild(x), o(d), !d.firstChild)
      return {
        beforeHtml: "",
        elementHtml: f(t),
        afterHtml: ""
      };
    const k = n(l, t);
    let h = d.firstChild;
    for (const oe of k) {
      const q = h.childNodes.item(oe);
      if (!q)
        throw new Error("Failed to mirror node inside cloned context tree.");
      h = q;
    }
    const S = h.parentNode;
    if (!S)
      return {
        beforeHtml: "",
        elementHtml: f(t),
        afterHtml: ""
      };
    const T = document.createTextNode(c.start), D = document.createTextNode(c.end);
    S.insertBefore(T, h), S.insertBefore(D, h.nextSibling), S.removeChild(h);
    const X = d.innerHTML, $ = X.indexOf(c.start), B = X.indexOf(c.end);
    if ($ === -1 || B === -1 || B < $)
      throw new Error("Failed to locate context markers during serialization.");
    const Z = X.slice(0, $), b = X.slice(B + c.end.length);
    return {
      beforeHtml: Z,
      elementHtml: f(t),
      afterHtml: b
    };
  }, p = (l) => l.parentNode ? l.parentNode.nodeType === Node.DOCUMENT_NODE ? l.parentNode.documentElement ?? null : l.parentNode : null;
  let y = 0, i = t.parentNode ?? t, E = g(i);
  for (; y < a && (E.beforeHtml.length < s || E.afterHtml.length < s); ) {
    const l = p(i);
    if (!l || l === i || (y += 1, i = l, E = g(i), !i.parentNode || i.parentNode.nodeType === Node.DOCUMENT_NODE))
      break;
  }
  return E;
}
function Oe({
  targetElement: t,
  friendlySelectors: s = !1,
  rect: a = null
}) {
  const f = W(null);
  Q(() => {
    const o = f.current;
    if (!o) return;
    if (!a) {
      o.style.opacity = "0";
      return;
    }
    const c = 1;
    o.style.top = `${a.top - c}px`, o.style.left = `${a.left - c}px`, o.style.width = `${a.width + c * 2}px`, o.style.height = `${a.height + c * 2}px`, o.style.opacity = "1";
  }, [a]);
  const n = t ? {
    tag: t.tagName.toLowerCase(),
    friendlyTag: s ? Re(t.tagName) : t.tagName.toLowerCase(),
    id: t.id,
    classes: Se(t).slice(0, 2)
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
        n && /* @__PURE__ */ v.jsxs(
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
              /* @__PURE__ */ v.jsx("strong", { children: n.friendlyTag }),
              n.id && /* @__PURE__ */ v.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                n.id
              ] }),
              n.classes?.length > 0 && /* @__PURE__ */ v.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                n.classes.join(".")
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
function ke({ targetElement: t, onDeselect: s, variant: a = "interactive", rect: f = null }) {
  const n = W(null), [o, c] = U(!1), g = a === "interactive";
  return Q(() => {
    const p = n.current;
    if (!p) return;
    if (!f) {
      p.style.opacity = "0";
      return;
    }
    const y = 1;
    p.style.top = `${f.top - y}px`, p.style.left = `${f.left - y}px`, p.style.width = `${f.width + y * 2}px`, p.style.height = `${f.height + y * 2}px`, p.style.opacity = "1";
  }, [f]), /* @__PURE__ */ v.jsxs(
    "button",
    {
      ref: n,
      "data-selected-element": "true",
      onClick: (p) => {
        g && (p.stopPropagation(), p.preventDefault(), s());
      },
      onMouseEnter: () => g && c(!0),
      onMouseLeave: () => g && c(!1),
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
        pointerEvents: g ? "auto" : "none"
      },
      children: [
        g && o && /* @__PURE__ */ v.jsx(
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
function Te({
  element: t,
  position: s,
  axis: a,
  friendlySelectors: f = !1,
  rect: n = null
}) {
  const o = W(null), c = W(null);
  Q(() => {
    if (!(!o.current || !c.current)) {
      if (!n) {
        o.current.style.opacity = "0", c.current.style.opacity = "0";
        return;
      }
      if (o.current.style.opacity = "1", c.current.style.opacity = "1", a === "horizontal") {
        const i = s === "before" ? n.top : n.bottom;
        o.current.style.top = `${i - ae / 2}px`, o.current.style.left = `${n.left}px`, o.current.style.width = `${Math.max(n.width, 1)}px`, o.current.style.height = `${ae}px`;
        const E = s === "before" ? i - 32 : i + 8;
        c.current.style.top = `${E}px`, c.current.style.left = `${n.left}px`;
      } else {
        const i = s === "before" ? n.left : n.right;
        o.current.style.left = `${i - ae / 2}px`, o.current.style.top = `${n.top}px`, o.current.style.height = `${Math.max(n.height, 1)}px`, o.current.style.width = `${ae}px`;
        const E = s === "before" ? i - 140 : i + 12;
        c.current.style.left = `${E}px`, c.current.style.top = `${n.top}px`;
      }
    }
  }, [n, a, s]);
  const g = t.tagName.toLowerCase(), p = f ? Re(t.tagName) : g, y = `${s === "before" ? "Insert before" : "Insert after"} ${p}`;
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
        children: y
      }
    )
  ] });
}
function Ne(t, { skipOffscreen: s = !0, debug: a = !1 } = {}) {
  const [f, n] = U(
    () => /* @__PURE__ */ new Map()
  ), o = W(/* @__PURE__ */ new Map()), c = W(null), g = he(() => {
    const p = /* @__PURE__ */ new Set(), y = [];
    for (const i of t)
      i && !p.has(i) && (p.add(i), y.push(i));
    return y;
  }, [t]);
  return Q(() => {
    if (!g.length) {
      n(/* @__PURE__ */ new Map());
      return;
    }
    let p = null, y = null;
    const i = () => {
      c.current === null && (c.current = requestAnimationFrame(() => {
        c.current = null, n((E) => {
          const l = /* @__PURE__ */ new Map();
          let d = !1;
          for (const x of g) {
            const k = !s || o.current.get(x) || o.current.size === 0;
            if (!k) {
              a && console.debug("[element-selector] skip measure (offscreen)", {
                tag: x.tagName,
                id: x.id,
                className: x.className
              });
              const D = E.get(x);
              D && l.set(x, D);
              continue;
            }
            const h = x.getBoundingClientRect(), S = E.get(x);
            (!S || h.top !== S.top || h.left !== S.left || h.width !== S.width || h.height !== S.height) && (d = !0, a && console.debug("[element-selector] measure", {
              tag: x.tagName,
              id: x.id,
              className: x.className,
              rect: {
                top: h.top,
                left: h.left,
                width: h.width,
                height: h.height
              },
              visible: k
            })), l.set(x, h);
          }
          return !d && E.size === l.size ? E : l;
        });
      }));
    };
    return p = new ResizeObserver(i), g.forEach((E) => p?.observe(E)), "IntersectionObserver" in window && (y = new IntersectionObserver(
      (E) => {
        E.forEach((l) => {
          o.current.set(l.target, l.isIntersecting);
        }), i();
      },
      { root: null, threshold: 0 }
    ), g.forEach((E) => y?.observe(E))), window.addEventListener("scroll", i, !0), window.addEventListener("resize", i), i(), () => {
      p && p.disconnect(), y && y.disconnect(), window.removeEventListener("scroll", i, !0), window.removeEventListener("resize", i), c.current !== null && (cancelAnimationFrame(c.current), c.current = null);
    };
  }, [g, s]), f;
}
const Me = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
}, Le = 300;
function ze(t) {
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
function pe(t) {
  if (!t)
    return {};
  const s = (a) => t.getAttribute(a) || void 0;
  return {
    src: s("data-ai-src"),
    routeId: s("data-ai-route-id"),
    routeFile: s("data-ai-route-file")
  };
}
function we(t, s, a) {
  if (!t || t === document.documentElement)
    return null;
  const f = t.getBoundingClientRect();
  if (f.width === 0 && f.height === 0)
    return null;
  const n = [
    { edge: "top", value: Math.abs(a - f.top) },
    { edge: "bottom", value: Math.abs(a - f.bottom) },
    { edge: "left", value: Math.abs(s - f.left) },
    { edge: "right", value: Math.abs(s - f.right) }
  ];
  n.sort((g, p) => g.value - p.value);
  const o = n[0];
  if (!o)
    return null;
  const c = Me[o.edge];
  return {
    element: t,
    position: c.position,
    axis: c.axis
  };
}
function ge(t) {
  let s = t;
  for (; s; ) {
    const a = s.getBoundingClientRect();
    if (a.width !== 0 || a.height !== 0 || !s.parentElement || s === document.body)
      return s;
    s = s.parentElement;
  }
  return null;
}
function De(t) {
  return t ? !!(t.id === "element-selector-overlay" || t.closest("#element-selector-overlay") || t.id === "element-selector-root" || t.closest("#element-selector-root")) : !1;
}
function me(t) {
  const s = t.composedPath?.() ?? [];
  for (const a of s)
    if (a instanceof HTMLElement && !De(a))
      return a;
  return null;
}
function $e({
  onElementSelected: t,
  onCancel: s,
  multiSelect: a = !1,
  friendlySelectors: f = !1,
  initialMode: n = "select",
  allowModeToggle: o = !0,
  optionsPanelPosition: c,
  selectionBarText: g,
  theme: p = "dark",
  debug: y = !1
}) {
  const [i, E] = U(n), l = i === "select" && a, d = ze(p), [x, k] = U(null), [h, S] = U(null), [T, D] = U([]), [X, $] = U(!1), [B, Z] = U(null), [b, oe] = U(() => typeof window > "u" ? !1 : window.matchMedia("(max-width: 640px)").matches), q = he(() => {
    const r = [];
    return x && r.push(x), h?.element && !r.includes(h.element) && r.push(h.element), T.forEach((w) => {
      r.includes(w) || r.push(w);
    }), r;
  }, [x, h, T]), M = Ne(q, { skipOffscreen: !1, debug: y }), H = V(
    (...r) => {
      y && console.debug("[element-selector]", ...r);
    },
    [y]
  );
  Q(() => {
    !y || !x || H("current hover rect", {
      tag: x.tagName,
      id: x.id,
      className: x.className,
      rect: M.get(x) ?? null
    });
  }, [x, M, y, H]);
  const G = W({ x: 0, y: 0 }), P = W(null), Y = W(null), A = W(null), L = V(
    (r, w = {}) => {
      const O = (() => {
        try {
          return Ae(r, Le);
        } catch {
          return {
            beforeHtml: "",
            elementHtml: r.outerHTML || "",
            afterHtml: ""
          };
        }
      })(), u = {
        element: r,
        selector: Pe(r),
        tag: r.tagName.toLowerCase(),
        id: r.id || null,
        classes: r.className || "",
        textPreview: r.textContent?.substring(0, 50) || "",
        beforeHtml: O.beforeHtml,
        elementHtml: O.elementHtml,
        afterHtml: O.afterHtml,
        ...pe(r),
        ...w
      };
      if (u.mode === "insert") {
        u.insertionBeforeHtml = u.insertionPosition === "after" ? u.beforeHtml + u.elementHtml : u.beforeHtml, u.insertionAfterHtml = u.insertionPosition === "before" ? u.elementHtml + u.afterHtml : u.afterHtml;
        const j = u.insertionPosition === "before" ? "before" : "after", Ce = j === "before" ? r.previousElementSibling : r, _e = j === "before" ? r : r.nextElementSibling, ue = pe(Ce), de = pe(_e);
        u.beforeSrc = ue.src, u.beforeRouteId = ue.routeId, u.beforeRouteFile = ue.routeFile, u.afterSrc = de.src, u.afterRouteId = de.routeId, u.afterRouteFile = de.routeFile;
      } else
        u.insertionBeforeHtml = u.beforeHtml, u.insertionAfterHtml = u.afterHtml;
      return u;
    },
    []
  ), ne = V(() => {
    const r = fe(
      G.current.x,
      G.current.y
    ), w = ge(r);
    if (H("hover update", {
      point: { ...G.current },
      target: r?.tagName,
      measurableTarget: w?.tagName,
      id: r?.id,
      className: r?.className
    }), i === "insert") {
      const u = we(
        w,
        G.current.x,
        G.current.y
      );
      (u && (!A.current || A.current.element !== u.element || A.current.position !== u.position || A.current.axis !== u.axis) || !u && A.current) && (A.current = u, S(u ?? null)), $(!!u), k(u ? u.element : null), Y.current = u ? u.element : null;
      return;
    }
    if (A.current && (A.current = null, S(null)), l && T.some((u) => u.contains(r))) {
      $(!1), k(null), Y.current = null;
      return;
    }
    Y.current !== r && (Y.current = w, k(w), $(!0), H("setCurrentHover", {
      tag: w?.tagName,
      id: w?.id,
      className: w?.className,
      rect: w ? M.get(w) ?? null : null
    }));
  }, [l, i, T, M, H]), ee = V(
    (r) => {
      if ((me(r) ?? r.target)?.closest('[data-element-selector-ui="true"]')) {
        P.current && (clearTimeout(P.current), P.current = null), k(null), S(null), Y.current = null, A.current = null, $(!1);
        return;
      }
      G.current = {
        x: r.clientX,
        y: r.clientY
      }, P.current && clearTimeout(P.current), P.current = setTimeout(() => {
        ne();
      }, 50);
    },
    [ne]
  ), e = V(() => {
    P.current && (clearTimeout(P.current), P.current = null), k(null), S(null), Y.current = null, A.current = null, $(!1);
  }, []), m = V(
    (r) => {
      r !== i && (H("mode toggle", { from: i, to: r }), E(r), D([]), S(null), Z(null), k(null), Y.current = null, A.current = null, $(!1));
    },
    [i, H]
  ), R = V(
    (r) => {
      const w = b && !l, O = r.target;
      if (O.closest('[data-selected-element="true"]') || O.closest('[data-element-selector-ui="true"]'))
        return;
      if (r.preventDefault(), r.stopPropagation(), i === "insert") {
        const j = we(
          ge(
            me(r) ?? fe(r.clientX, r.clientY)
          ),
          r.clientX,
          r.clientY
        );
        if (!j) {
          H("insert click with no candidate", {
            point: { x: r.clientX, y: r.clientY }
          });
          return;
        }
        if (w) {
          Z(j), S(j), D([]);
          return;
        }
        t([
          L(j.element, {
            mode: "insert",
            insertionPosition: j.position,
            insertionAxis: j.axis
          })
        ]);
        return;
      }
      const u = ge(
        me(r) ?? fe(r.clientX, r.clientY)
      );
      if (u && !(l && T.some((j) => j.contains(u)))) {
        if (l) {
          D((j) => j.includes(u) ? j : [...j, u]);
          return;
        }
        if (w) {
          D([u]), Z(null);
          return;
        }
        t([
          L(u, { mode: "select" })
        ]), H("select click", {
          tag: u.tagName,
          id: u.id,
          className: u.className,
          rect: M.get(u) ?? null
        });
      }
    },
    [l, b, i, t, T, L, M, H]
  ), C = V((r) => {
    D(
      (w) => w.filter((O) => O !== r)
    );
  }, []);
  Q(() => (document.addEventListener("mousemove", ee, !0), document.addEventListener("mouseleave", e, !0), document.addEventListener("click", R, !0), H("selector mounted", {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    tracked: q.length
  }), () => {
    document.removeEventListener("mousemove", ee, !0), document.removeEventListener("mouseleave", e, !0), document.removeEventListener("click", R, !0), P.current && clearTimeout(P.current), H("selector unmounted");
  }), [ee, e, R, q.length, H]), Q(() => {
    const r = (w) => {
      switch (w.key) {
        case "Escape":
          s();
          break;
        case "Enter":
          if (i === "insert" && h) {
            t([
              L(h.element, {
                mode: "insert",
                insertionPosition: h.position,
                insertionAxis: h.axis
              })
            ]);
            break;
          }
          if (l && T.length > 0) {
            const O = T.map(
              (u) => L(u, { mode: "select" })
            );
            t(O);
          }
          break;
      }
    };
    return window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r);
  }, [
    l,
    h,
    i,
    s,
    t,
    T,
    L
  ]), Q(() => {
    const r = window.matchMedia("(max-width: 640px)"), w = () => oe(r.matches);
    return w(), r.addEventListener("change", w), () => r.removeEventListener("change", w);
  }, []);
  const _ = {
    selectLabel: g?.selectLabel ?? "Select",
    insertLabel: g?.insertLabel ?? "Insert",
    instructionSelectSingle: g?.instructionSelectSingle ?? "Click an element to select",
    instructionSelectMulti: g?.instructionSelectMulti ?? "Click elements to select",
    instructionInsert: g?.instructionInsert ?? "Click to choose where to insert new content",
    confirmLabel: g?.confirmLabel ?? "✓",
    cancelLabel: g?.cancelLabel ?? "✕"
  }, F = i === "insert" ? _.instructionInsert : l ? _.instructionSelectMulti : _.instructionSelectSingle, ie = V(() => {
    const r = b && !l;
    if (l && T.length > 0) {
      const w = T.map(
        (O) => L(O, { mode: "select" })
      );
      t(w);
      return;
    }
    if (r) {
      if (i === "select" && T[0]) {
        t([
          L(T[0], { mode: "select" })
        ]);
        return;
      }
      i === "insert" && B && t([
        L(B.element, {
          mode: "insert",
          insertionPosition: B.position,
          insertionAxis: B.axis
        })
      ]);
    }
  }, [
    l,
    b,
    i,
    t,
    B,
    T,
    L
  ]), te = b && !l, N = l ? T.length > 0 : te ? i === "select" ? T.length > 0 : !!B : !1, J = l || te, re = {
    vertical: c?.vertical ?? "top",
    horizontal: c?.horizontal ?? "center"
  }, I = {
    position: "fixed",
    background: d.panelBg,
    color: d.textColor,
    padding: b ? "14px 16px" : "16px 24px",
    borderRadius: b ? "16px" : "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: d.shadow,
    border: d.border,
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
                            onClick: (r) => {
                              r.preventDefault(), r.stopPropagation(), m("select");
                            },
                            style: {
                              border: i === "select" ? "1px solid " + d.toggleSelectedBg : p === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "999px 0 0 999px",
                              padding: b ? "10px 12px" : "6px 14px",
                              minHeight: b ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: i === "select" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: b ? 1 : void 0,
                              background: i === "select" ? d.toggleSelectedBg : "transparent",
                              color: i === "select" ? d.toggleSelectedText : d.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": i === "select" ? d.toggleSelectedText : d.toggleIdleTextHover
                            },
                            children: _.selectLabel
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (r) => {
                              r.preventDefault(), r.stopPropagation(), m("insert");
                            },
                            style: {
                              border: i === "insert" ? "1px solid " + d.toggleSelectedBg : p === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "0 999px 999px 0",
                              padding: b ? "10px 12px" : "6px 14px",
                              minHeight: b ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: i === "insert" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: b ? 1 : void 0,
                              background: i === "insert" ? d.toggleSelectedBg : "transparent",
                              color: i === "insert" ? d.toggleSelectedText : d.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": i === "insert" ? d.toggleSelectedText : d.toggleIdleTextHover
                            },
                            children: _.insertLabel
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
                    color: d.instructionTextColor,
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
                    gap: b ? "10px" : "8px",
                    width: void 0,
                    justifyContent: "flex-end",
                    flex: b ? "1 1 auto" : void 0,
                    flexWrap: "nowrap"
                  },
                  children: [
                    J && /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        disabled: !N,
                        className: "element-selector-action element-selector-confirm",
                        onClick: (r) => {
                          r.preventDefault(), r.stopPropagation(), N && ie();
                        },
                        style: {
                          border: "none",
                          borderRadius: b ? "10px" : "8px",
                          padding: b ? "12px 14px" : "8px 12px",
                          minHeight: b ? "44px" : void 0,
                          flex: b ? "0 1 auto" : void 0,
                          cursor: N ? "pointer" : "not-allowed",
                          fontSize: b ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": d.actionBg,
                          "--es-action-bg-hover": d.actionBgHover,
                          "--es-action-bg-disabled": d.actionBgDisabled,
                          "--es-action-color": d.actionColor,
                          "--es-action-color-hover": d.actionColorHover,
                          "--es-action-color-disabled": d.actionColorDisabled
                        },
                        "aria-label": _.confirmLabel,
                        children: _.confirmLabel
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-action element-selector-cancel",
                        onClick: (r) => {
                          r.preventDefault(), r.stopPropagation(), s();
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
                          "--es-action-bg": d.actionBg,
                          "--es-action-bg-hover": d.actionBgHover,
                          "--es-action-bg-disabled": d.actionBgDisabled,
                          "--es-action-color": d.actionColor,
                          "--es-action-color-hover": d.actionColorHover,
                          "--es-action-color-disabled": d.actionColorDisabled,
                          flex: b ? "0 1 auto" : void 0,
                          marginLeft: b ? "6px" : void 0
                        },
                        "aria-label": _.cancelLabel,
                        children: _.cancelLabel
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        i === "select" && x && (!l || !T.includes(x)) && !b && /* @__PURE__ */ v.jsx(
          Oe,
          {
            targetElement: x,
            friendlySelectors: f,
            rect: M.get(x) ?? null
          }
        ),
        i === "insert" && h && /* @__PURE__ */ v.jsx(
          Te,
          {
            element: h.element,
            position: h.position,
            axis: h.axis,
            friendlySelectors: f,
            rect: M.get(h.element) ?? null
          }
        ),
        (l || b && T.length > 0) && T.map((r, w) => /* @__PURE__ */ v.jsx(
          ke,
          {
            targetElement: r,
            onDeselect: () => C(r),
            rect: M.get(r) ?? null
          },
          `selected-${w}`
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
function Be() {
  return z && K || (z = document.createElement("div"), z.id = "element-selector-persistent-highlights", z.style.position = "fixed", z.style.inset = "0", z.style.pointerEvents = "none", z.style.zIndex = "99998", document.body.appendChild(z), K = Ee.createRoot(z)), K;
}
function Fe({
  elements: t,
  friendlySelectors: s
}) {
  const a = he(
    () => t.map((n) => n.element),
    [t]
  ), f = Ne(a);
  return t.length ? /* @__PURE__ */ v.jsx(v.Fragment, { children: t.map((n, o) => {
    const c = f.get(n.element) ?? null;
    return n.mode === "insert" && n.insertionPosition && n.insertionAxis ? /* @__PURE__ */ v.jsx(
      Te,
      {
        element: n.element,
        position: n.insertionPosition,
        axis: n.insertionAxis,
        friendlySelectors: s,
        rect: c
      },
      `persistent-insert-${o}`
    ) : /* @__PURE__ */ v.jsx(
      ke,
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
function Ye(t, s) {
  if (!t.length) return;
  Be().render(
    /* @__PURE__ */ v.jsx(be.StrictMode, { children: /* @__PURE__ */ v.jsx(Fe, { elements: t, friendlySelectors: s }) })
  );
}
function We() {
  K && (K.unmount(), K = null), z?.parentNode && z.parentNode.removeChild(z), z = null;
}
function Ue(t = {}) {
  const {
    multiSelect: s = !1,
    friendlySelectors: a = !1,
    mode: f = "select",
    allowModeToggle: n = !0,
    retainSelectionHighlights: o = !1,
    optionsPanelPosition: c,
    selectionBarText: g,
    theme: p = "dark",
    debug: y = !1
  } = t;
  return We(), new Promise((i, E) => {
    const l = document.createElement("div");
    l.id = "element-selector-root", l.style.position = "fixed", l.style.zIndex = "999999", l.style.inset = "0", document.body.appendChild(l);
    const d = Ee.createRoot(l), x = () => {
      d.unmount(), l.parentNode && l.parentNode.removeChild(l);
    }, k = (S) => {
      o && Ye(S, a), x(), !s && S.length > 0 ? i(S[0]) : i(S);
    }, h = () => {
      x(), E(new Error("Element selection cancelled by user"));
    };
    d.render(
      /* @__PURE__ */ v.jsx(be.StrictMode, { children: /* @__PURE__ */ v.jsx(
        $e,
        {
          onElementSelected: k,
          onCancel: h,
          multiSelect: s,
          friendlySelectors: a,
          initialMode: f,
          allowModeToggle: n,
          optionsPanelPosition: c,
          selectionBarText: g,
          theme: p,
          debug: y
        }
      ) })
    );
  });
}
export {
  $e as ElementSelector,
  Pe as buildElementSelector,
  fe as findElementAtCoordinates,
  Ue as launchSelector,
  We as resetSelectionHighlights
};
