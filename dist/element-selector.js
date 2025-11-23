import Te, { useRef as X, useEffect as re, useState as ee, useMemo as Ne, useCallback as K } from "react";
import Me from "react-dom/client";
var ge = { exports: {} }, de = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Ye() {
  if (Ce) return de;
  Ce = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function l(i, n, r) {
    var u = null;
    if (r !== void 0 && (u = "" + r), n.key !== void 0 && (u = "" + n.key), "key" in n) {
      r = {};
      for (var a in n)
        a !== "key" && (r[a] = n[a]);
    } else r = n;
    return n = r.ref, {
      $$typeof: e,
      type: i,
      key: u,
      ref: n !== void 0 ? n : null,
      props: r
    };
  }
  return de.Fragment = t, de.jsx = l, de.jsxs = l, de;
}
var fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function We() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === ne ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case y:
          return "Fragment";
        case P:
          return "Profiler";
        case w:
          return "StrictMode";
        case L:
          return "Suspense";
        case _:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case p:
            return "Portal";
          case B:
            return (o.displayName || "Context") + ".Provider";
          case R:
            return (o._context.displayName || "Context") + ".Consumer";
          case J:
            var b = o.render;
            return o = o.displayName, o || (o = b.displayName || b.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case Z:
            return b = o.displayName || null, b !== null ? b : e(o.type) || "Memo";
          case h:
            b = o._payload, o = o._init;
            try {
              return e(o(b));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function l(o) {
      try {
        t(o);
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var T = b.error, H = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return T.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t(o);
      }
    }
    function i(o) {
      if (o === y) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === h)
        return "<...>";
      try {
        var b = e(o);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var o = N.A;
      return o === null ? null : o.getOwner();
    }
    function r() {
      return Error("react-stack-top-frame");
    }
    function u(o) {
      if (k.call(o, "key")) {
        var b = Object.getOwnPropertyDescriptor(o, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function a(o, b) {
      function T() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: T,
        configurable: !0
      });
    }
    function m() {
      var o = e(this.type);
      return O[o] || (O[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function x(o, b, T, H, W, V, z, ae) {
      return T = V.ref, o = {
        $$typeof: f,
        type: o,
        key: b,
        props: V,
        _owner: W
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function c(o, b, T, H, W, V, z, ae) {
      var A = b.children;
      if (A !== void 0)
        if (H)
          if (te(A)) {
            for (H = 0; H < A.length; H++)
              v(A[H]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(A);
      if (k.call(b, "key")) {
        A = e(o);
        var Q = Object.keys(b).filter(function(xe) {
          return xe !== "key";
        });
        H = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", D[A + H] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          A,
          Q,
          A
        ), D[A + H] = !0);
      }
      if (A = null, T !== void 0 && (l(T), A = "" + T), u(b) && (l(b.key), A = "" + b.key), "key" in b) {
        T = {};
        for (var oe in b)
          oe !== "key" && (T[oe] = b[oe]);
      } else T = b;
      return A && a(
        T,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), x(
        o,
        A,
        V,
        W,
        n(),
        T,
        z,
        ae
      );
    }
    function v(o) {
      typeof o == "object" && o !== null && o.$$typeof === f && o._store && (o._store.validated = 1);
    }
    var d = Te, f = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), B = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), N = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, te = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var q, O = {}, se = d.react_stack_bottom_frame.bind(
      d,
      r
    )(), G = M(i(r)), D = {};
    fe.Fragment = y, fe.jsx = function(o, b, T, H, W) {
      var V = 1e4 > N.recentlyCreatedOwnerStacks++;
      return c(
        o,
        b,
        T,
        !1,
        H,
        W,
        V ? Error("react-stack-top-frame") : se,
        V ? M(i(o)) : G
      );
    }, fe.jsxs = function(o, b, T, H, W) {
      var V = 1e4 > N.recentlyCreatedOwnerStacks++;
      return c(
        o,
        b,
        T,
        !0,
        H,
        W,
        V ? Error("react-stack-top-frame") : se,
        V ? M(i(o)) : G
      );
    };
  }()), fe;
}
var Ae;
function Ve() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? ge.exports = Ye() : ge.exports = We()), ge.exports;
}
var E = Ve();
function je(e) {
  if (!e) return [];
  const t = e.className;
  if (typeof t == "string")
    return t.split(/\s+/).filter(Boolean);
  const l = t?.baseVal;
  return typeof l == "string" ? l.split(/\s+/).filter(Boolean) : e.classList ? Array.from(e.classList).filter(Boolean) : [];
}
function we(e, t) {
  const l = (a) => !!a && (a.id === "element-selector-overlay" || a.closest("#element-selector-overlay") || a.id === "element-selector-root" || a.closest("#element-selector-root")), i = (a, m, x, c = /* @__PURE__ */ new Set()) => {
    if (c.has(a)) return null;
    c.add(a);
    const v = a.elementFromPoint;
    if (!v) return null;
    const d = v.call(a, m, x);
    if (!d) return null;
    if (d instanceof HTMLSlotElement) {
      const f = d.assignedElements({ flatten: !0 }), p = f.find((y) => {
        const w = y.getBoundingClientRect();
        return m >= w.left && m <= w.right && x >= w.top && x <= w.bottom;
      }) || f[0];
      if (p) {
        if (p.shadowRoot && !c.has(p.shadowRoot)) {
          const y = i(p.shadowRoot, m, x, c);
          if (y) return y;
        }
        return p;
      }
    }
    if (d.shadowRoot && !c.has(d.shadowRoot)) {
      const f = i(d.shadowRoot, m, x, c);
      if (f) return f;
    }
    return d;
  }, n = () => {
    const a = document.elementsFromPoint(e, t).filter(
      (x) => x instanceof HTMLElement && !l(x)
    );
    return a.find(
      (x) => x !== document.documentElement && x !== document.body
    ) ?? a[0] ?? null;
  }, u = (() => {
    let a = i(document, e, t);
    if (a?.shadowRoot) {
      const m = i(a.shadowRoot, e, t);
      m && (a = m);
    }
    return a && !l(a) && a !== document.body && a !== document.documentElement ? a : n();
  })() ?? document.body;
  return u.tagName !== "svg" && u.tagName !== "SVG" && u.closest("svg") ? u.closest("svg") || document.body : u;
}
function Be(e) {
  if (!e || e === document.body)
    return "body";
  if (e.id)
    return `#${CSS.escape(e.id)}`;
  const t = [];
  let l = e;
  for (; l && l !== document.body; ) {
    let i = l.tagName.toLowerCase();
    const n = je(l).filter((r) => !r.includes(":")).slice(0, 2);
    if (n.length > 0) {
      const r = n.map((u) => `.${CSS.escape(u)}`).join("");
      i += r;
    }
    if (l.parentElement) {
      const r = l.tagName, a = Array.from(l.parentElement.children).filter(
        (m) => m.tagName === r
      );
      if (a.length > 1) {
        const m = a.indexOf(l) + 1;
        i += `:nth-of-type(${m})`;
      }
    }
    t.unshift(i);
    try {
      const r = t.join(" > "), u = document.querySelectorAll(r);
      if (u.length === 1 && u[0] === e)
        return r;
    } catch {
    }
    l = l.parentElement;
  }
  return t.join(" > ");
}
function Le(e) {
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
function he(e) {
  return e.width === 0 && e.height === 0;
}
function ye(e) {
  return getComputedStyle(e).display === "contents";
}
function Ie(e) {
  const t = Math.min(...e.map((r) => r.left)), l = Math.min(...e.map((r) => r.top)), i = Math.max(...e.map((r) => r.right)), n = Math.max(...e.map((r) => r.bottom));
  return new DOMRectReadOnly(t, l, i - t, n - l);
}
function Se(e) {
  if (!e) return null;
  const t = e.getRootNode(), l = e.getBoundingClientRect();
  if (!he(l) && !ye(e))
    return { element: e, rect: l };
  if (ye(e)) {
    const n = Array.from(e.children).filter((r) => r instanceof HTMLElement).map((r) => r.getBoundingClientRect()).filter((r) => !he(r));
    if (n.length)
      return { element: e, rect: Ie(n) };
  }
  if (e instanceof HTMLSlotElement) {
    const n = e.assignedElements({ flatten: !0 }).map((r) => r.getBoundingClientRect()).filter((r) => !he(r));
    if (n.length)
      return { element: e, rect: Ie(n) };
  }
  let i = e;
  for (; i; ) {
    const n = i.parentElement;
    if (!n || n === document.body || n.getRootNode() !== t)
      break;
    const r = n.getBoundingClientRect();
    if (!he(r) && !ye(n))
      return { element: n, rect: r };
    i = n;
  }
  return { element: e, rect: l };
}
function Ue(e, t = 300, { maxAncestors: l = 10 } = {}) {
  if (!e || !e.parentNode)
    throw new Error("Node must be attached to the DOM (with a parent).");
  const i = (d) => d.nodeType === Node.ELEMENT_NODE ? d.outerHTML : d.nodeType === Node.TEXT_NODE ? (d.textContent ?? "").toString() : new XMLSerializer().serializeToString(d), n = (d, f) => {
    const p = [];
    let y = f;
    for (; y && y !== d; ) {
      const w = y.parentNode;
      if (!w)
        throw new Error("Failed to resolve node path for context extraction.");
      const P = Array.prototype.indexOf.call(w.childNodes, y);
      if (P === -1)
        throw new Error("Unable to map node into cloned context tree.");
      p.unshift(P), y = w;
    }
    if (y !== d)
      throw new Error("Context root does not contain the requested node.");
    return p;
  }, r = (d) => {
    d.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    ).forEach((p) => p.remove());
  }, u = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`
  }, a = (d) => {
    const f = document.createElement("div"), p = d instanceof ShadowRoot ? (() => {
      const N = document.createDocumentFragment();
      return d.childNodes.forEach(
        (k) => N.appendChild(k.cloneNode(!0))
      ), N;
    })() : d.cloneNode(!0), y = p.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (() => {
      const N = document.createElement("div");
      return N.appendChild(p), N;
    })() : p;
    f.appendChild(y), r(f);
    const w = y;
    if (!w.firstChild)
      return {
        beforeHtml: "",
        elementHtml: i(e),
        afterHtml: ""
      };
    const P = n(d, e);
    let R = w;
    for (const N of P) {
      const k = R.childNodes.item(N);
      if (!k)
        throw new Error("Failed to mirror node inside cloned context tree.");
      R = k;
    }
    const B = R.parentNode;
    if (!B)
      return {
        beforeHtml: "",
        elementHtml: i(e),
        afterHtml: ""
      };
    const J = document.createTextNode(u.start), L = document.createTextNode(u.end);
    B.insertBefore(J, R), B.insertBefore(L, R.nextSibling), B.removeChild(R);
    const _ = d.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.innerHTML : f.innerHTML, Z = _.indexOf(u.start), h = _.indexOf(u.end);
    if (Z === -1 || h === -1 || h < Z)
      throw new Error("Failed to locate context markers during serialization.");
    const ie = _.slice(0, Z), ne = _.slice(h + u.end.length);
    return {
      beforeHtml: ie,
      elementHtml: i(e),
      afterHtml: ne
    };
  }, m = (d) => d.parentNode ? d.parentNode.nodeType === Node.DOCUMENT_NODE ? d.parentNode.documentElement ?? null : d.parentNode : null;
  let x = 0, c = e.parentNode ?? e, v = a(c);
  for (; x < l && (v.beforeHtml.length < t || v.afterHtml.length < t); ) {
    const d = m(c);
    if (!d || d === c || (x += 1, c = d, v = a(c), !c.parentNode || c.parentNode.nodeType === Node.DOCUMENT_NODE))
      break;
  }
  return v;
}
function Xe({
  targetElement: e,
  friendlySelectors: t = !1,
  rect: l = null
}) {
  const i = X(null);
  re(() => {
    const r = i.current;
    if (!r) return;
    if (!l) {
      r.style.opacity = "0";
      return;
    }
    const u = 1;
    r.style.top = `${l.top - u}px`, r.style.left = `${l.left - u}px`, r.style.width = `${l.width + u * 2}px`, r.style.height = `${l.height + u * 2}px`, r.style.opacity = "1";
  }, [l]);
  const n = e ? {
    tag: e.tagName.toLowerCase(),
    friendlyTag: t ? Le(e.tagName) : e.tagName.toLowerCase(),
    id: e.id,
    classes: je(e).slice(0, 2)
  } : null;
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      ref: i,
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
        n && /* @__PURE__ */ E.jsxs(
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
              /* @__PURE__ */ E.jsx("strong", { children: n.friendlyTag }),
              n.id && /* @__PURE__ */ E.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                n.id
              ] }),
              n.classes?.length > 0 && /* @__PURE__ */ E.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                n.classes.join(".")
              ] })
            ]
          }
        ),
        /* @__PURE__ */ E.jsx("style", { children: `
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
function Oe({ targetElement: e, onDeselect: t, variant: l = "interactive", rect: i = null }) {
  const n = X(null), [r, u] = ee(!1), a = l === "interactive";
  return re(() => {
    const m = n.current;
    if (!m) return;
    if (!i) {
      m.style.opacity = "0";
      return;
    }
    const x = 1;
    m.style.top = `${i.top - x}px`, m.style.left = `${i.left - x}px`, m.style.width = `${i.width + x * 2}px`, m.style.height = `${i.height + x * 2}px`, m.style.opacity = "1";
  }, [i]), /* @__PURE__ */ E.jsxs(
    "button",
    {
      ref: n,
      "data-selected-element": "true",
      onClick: (m) => {
        a && (m.stopPropagation(), m.preventDefault(), t());
      },
      onMouseEnter: () => a && u(!0),
      onMouseLeave: () => a && u(!1),
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
        pointerEvents: a ? "auto" : "none"
      },
      children: [
        a && r && /* @__PURE__ */ E.jsx(
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
        /* @__PURE__ */ E.jsx(
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
const me = 4;
function Fe({
  element: e,
  position: t,
  axis: l,
  friendlySelectors: i = !1,
  rect: n = null
}) {
  const r = X(null), u = X(null);
  re(() => {
    if (!(!r.current || !u.current)) {
      if (!n) {
        r.current.style.opacity = "0", u.current.style.opacity = "0";
        return;
      }
      if (r.current.style.opacity = "1", u.current.style.opacity = "1", l === "horizontal") {
        const c = t === "before" ? n.top : n.bottom;
        r.current.style.top = `${c - me / 2}px`, r.current.style.left = `${n.left}px`, r.current.style.width = `${Math.max(n.width, 1)}px`, r.current.style.height = `${me}px`;
        const v = t === "before" ? c - 32 : c + 8;
        u.current.style.top = `${v}px`, u.current.style.left = `${n.left}px`;
      } else {
        const c = t === "before" ? n.left : n.right;
        r.current.style.left = `${c - me / 2}px`, r.current.style.top = `${n.top}px`, r.current.style.height = `${Math.max(n.height, 1)}px`, r.current.style.width = `${me}px`;
        const v = t === "before" ? c - 140 : c + 12;
        u.current.style.left = `${v}px`, u.current.style.top = `${n.top}px`;
      }
    }
  }, [n, l, t]);
  const a = e.tagName.toLowerCase(), m = i ? Le(e.tagName) : a, x = `${t === "before" ? "Insert before" : "Insert after"} ${m}`;
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsx(
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
          borderRadius: me
        }
      }
    ),
    /* @__PURE__ */ E.jsx(
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
        children: x
      }
    )
  ] });
}
function $e(e, { debug: t = !1 } = {}) {
  const [l, i] = ee(
    () => /* @__PURE__ */ new Map()
  ), n = X(null), r = Ne(() => {
    const u = /* @__PURE__ */ new Set(), a = [];
    for (const m of e)
      m && !u.has(m) && (u.add(m), a.push(m));
    return a;
  }, [e]);
  return re(() => {
    if (!r.length) {
      i(/* @__PURE__ */ new Map());
      return;
    }
    let u = null;
    const a = () => {
      n.current === null && (n.current = requestAnimationFrame(() => {
        n.current = null, i((m) => {
          const x = /* @__PURE__ */ new Map();
          let c = !1;
          for (const v of r) {
            const f = Se(v)?.rect;
            if (!f) {
              const w = m.get(v);
              w && x.set(v, w);
              continue;
            }
            const p = m.get(v);
            (!p || f.top !== p.top || f.left !== p.left || f.width !== p.width || f.height !== p.height) && (c = !0, t && console.debug("[element-selector] measure", {
              tag: v.tagName,
              id: v.id,
              className: v.className,
              rect: {
                top: f.top,
                left: f.left,
                width: f.width,
                height: f.height
              }
            })), x.set(v, f);
          }
          return !c && m.size === x.size ? m : x;
        });
      }));
    };
    return u = new ResizeObserver(a), r.forEach((m) => u?.observe(m)), window.addEventListener("scroll", a, !0), window.addEventListener("resize", a), a(), () => {
      u && u.disconnect(), window.removeEventListener("scroll", a, !0), window.removeEventListener("resize", a), n.current !== null && (cancelAnimationFrame(n.current), n.current = null);
    };
  }, [r]), l;
}
const qe = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
}, Ge = 300;
function Je(e) {
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
function pe(e) {
  if (!e)
    return {};
  const t = {}, l = [
    ["src", "data-ai-src"],
    ["routeId", "data-ai-route-id"],
    ["routeFile", "data-ai-route-file"]
  ];
  let i = e;
  for (; i; ) {
    const n = i;
    if (l.forEach(([u, a]) => {
      if (t[u] !== void 0) return;
      const m = n.getAttribute(a);
      m && (t[u] = m);
    }), t.src && t.routeId && t.routeFile)
      break;
    if (i.parentElement) {
      i = i.parentElement;
      continue;
    }
    const r = i.getRootNode();
    i = r instanceof ShadowRoot ? r.host : null;
  }
  return t;
}
const Ze = (e) => {
  const l = (e.innerText ?? e.textContent ?? "").toString().replace(/\s+/g, " ").trim(), i = 1024;
  return l.length <= i ? l : `${l.slice(0, i)}<!-- SNIPPET FOR BREVITY -->`;
};
function Pe(e, t, l) {
  if (!e || e === document.documentElement)
    return null;
  const i = e.getBoundingClientRect();
  if (i.width === 0 && i.height === 0)
    return null;
  const n = [
    { edge: "top", value: Math.abs(l - i.top) },
    { edge: "bottom", value: Math.abs(l - i.bottom) },
    { edge: "left", value: Math.abs(t - i.left) },
    { edge: "right", value: Math.abs(t - i.right) }
  ];
  n.sort((a, m) => a.value - m.value);
  const r = n[0];
  if (!r)
    return null;
  const u = qe[r.edge];
  return {
    element: e,
    position: u.position,
    axis: u.axis
  };
}
function Qe(e) {
  return e ? !!(e.id === "element-selector-overlay" || e.closest("#element-selector-overlay") || e.id === "element-selector-root" || e.closest("#element-selector-root")) : !1;
}
function Ke(e) {
  return e === document.body || e === document.documentElement;
}
function Re(e, t) {
  return t && e && e.shadowRoot && t.getRootNode() === e.shadowRoot ? t : e && !Ke(e) ? e : t;
}
function _e(e) {
  const t = e.composedPath?.() ?? [];
  for (const l of t)
    if (l instanceof HTMLElement && !Qe(l))
      return l;
  return null;
}
function et({
  onElementSelected: e,
  onCancel: t,
  multiSelect: l = !1,
  friendlySelectors: i = !1,
  initialMode: n = "select",
  allowModeToggle: r = !0,
  optionsPanelPosition: u,
  selectionBarText: a,
  theme: m = "dark",
  debug: x = !1
}) {
  const [c, v] = ee(n), d = c === "select" && l, f = Je(m), [p, y] = ee(null), [w, P] = ee(null), [R, B] = ee([]), [J, L] = ee(!1), [_, Z] = ee(
    null
  ), [h, ie] = ee(() => typeof window > "u" ? !1 : window.matchMedia("(max-width: 640px)").matches), ne = Ne(() => {
    const s = [];
    return p && s.push(p), w?.element && !s.includes(w.element) && s.push(w.element), R.forEach((S) => {
      s.includes(S) || s.push(S);
    }), s;
  }, [p, w, R]), N = $e(ne, {
    debug: x
  }), k = K(
    (...s) => {
      x && console.debug("[element-selector]", ...s);
    },
    [x]
  );
  re(() => {
    !x || !p || k("current hover rect", {
      tag: p.tagName,
      id: p.id,
      className: p.className,
      rect: N.get(p) ?? null
    });
  }, [p, N, x, k]);
  const te = X({ x: 0, y: 0 }), M = X(null), q = X(null), O = X(null), se = X(null), G = X(null), D = K(
    (s, S = {}) => {
      const $ = (() => {
        try {
          return Ue(s, Ge);
        } catch {
          return {
            beforeHtml: "",
            elementHtml: s.outerHTML || "",
            afterHtml: ""
          };
        }
      })(), g = {
        element: s,
        selector: Be(s),
        tag: s.tagName.toLowerCase(),
        id: s.id || null,
        classes: s.className || "",
        textPreview: Ze(s),
        beforeHtml: $.beforeHtml,
        elementHtml: $.elementHtml,
        afterHtml: $.afterHtml,
        ...pe(s),
        ...S
      }, ce = s.previousElementSibling, C = s.nextElementSibling, ue = pe(ce), j = pe(C);
      if (g.beforeSrc = ue.src, g.beforeRouteId = ue.routeId, g.beforeRouteFile = ue.routeFile, g.afterSrc = j.src, g.afterRouteId = j.routeId, g.afterRouteFile = j.routeFile, g.mode === "insert") {
        g.insertionBeforeHtml = g.insertionPosition === "after" ? g.beforeHtml + g.elementHtml : g.beforeHtml, g.insertionAfterHtml = g.insertionPosition === "before" ? g.elementHtml + g.afterHtml : g.afterHtml;
        const I = g.insertionPosition === "before" ? "before" : "after", De = I === "before" ? s.previousElementSibling : s, ze = I === "before" ? s : s.nextElementSibling, ve = pe(De), Ee = pe(ze);
        g.beforeSrc = ve.src, g.beforeRouteId = ve.routeId, g.beforeRouteFile = ve.routeFile, g.afterSrc = Ee.src, g.afterRouteId = Ee.routeId, g.afterRouteFile = Ee.routeFile;
      } else
        g.insertionBeforeHtml = g.beforeHtml, g.insertionAfterHtml = g.afterHtml;
      return g;
    },
    []
  ), o = K(() => {
    const s = we(
      te.current.x,
      te.current.y
    ), S = Re(
      G.current,
      s
    ), g = Se(S)?.element ?? S;
    if (k("hover update", {
      point: { ...te.current },
      composedTarget: G.current?.tagName,
      pointTarget: s?.tagName,
      chosenTarget: S?.tagName,
      measurableTarget: g?.tagName,
      id: S?.id,
      className: S?.className,
      pointRoot: s?.getRootNode() instanceof ShadowRoot ? s.getRootNode().host.tagName : null,
      composedRoot: G.current?.getRootNode() instanceof ShadowRoot ? G.current.getRootNode().host.tagName : null
    }), c === "insert") {
      const C = Pe(
        g,
        te.current.x,
        te.current.y
      );
      (C && (!O.current || O.current.element !== C.element || O.current.position !== C.position || O.current.axis !== C.axis) || !C && O.current) && (O.current = C, P(C ?? null)), L(!!C), y(C ? C.element : null), q.current = C ? C.element : null;
      return;
    }
    if (O.current && (O.current = null, P(null)), d && R.some((C) => C.contains(g ?? S ?? C))) {
      L(!1), y(null), q.current = null;
      return;
    }
    q.current !== g && (q.current = g, y(g), L(!0), k("setCurrentHover", {
      tag: g?.tagName,
      id: g?.id,
      className: g?.className,
      rect: g ? N.get(g) ?? null : null
    }));
  }, [d, c, R, N, k]), b = K(
    (s) => {
      const S = _e(s);
      if ((S ?? s.target)?.closest('[data-element-selector-ui="true"]')) {
        M.current && (clearTimeout(M.current), M.current = null), se.current = null, G.current = null, y(null), P(null), q.current = null, O.current = null, L(!1);
        return;
      }
      const g = we(s.clientX, s.clientY);
      G.current = S, se.current = Re(S, g), te.current = {
        x: s.clientX,
        y: s.clientY
      }, M.current && clearTimeout(M.current), M.current = setTimeout(() => {
        o();
      }, 50);
    },
    [o]
  ), T = K(() => {
    M.current && (clearTimeout(M.current), M.current = null), y(null), P(null), q.current = null, O.current = null, L(!1), se.current = null, G.current = null;
  }, []), H = K(
    (s) => {
      s !== c && (k("mode toggle", { from: c, to: s }), v(s), B([]), P(null), Z(null), y(null), q.current = null, O.current = null, L(!1));
    },
    [c, k]
  ), W = K(
    (s) => {
      const S = h && !d, $ = s.target;
      if ($.closest('[data-selected-element="true"]') || $.closest('[data-element-selector-ui="true"]'))
        return;
      s.preventDefault(), s.stopPropagation();
      const g = _e(s), ce = we(s.clientX, s.clientY), C = Re(g, ce) ?? ce, j = Se(C)?.element ?? C;
      if (c === "insert") {
        const I = Pe(
          j,
          s.clientX,
          s.clientY
        );
        if (!I) {
          k("insert click with no candidate", {
            point: { x: s.clientX, y: s.clientY }
          });
          return;
        }
        if (S) {
          Z(I), P(I), B([]);
          return;
        }
        e([
          D(I.element, {
            mode: "insert",
            insertionPosition: I.position,
            insertionAxis: I.axis
          })
        ]);
        return;
      }
      if (j && !(d && R.some((I) => I.contains(j)))) {
        if (d) {
          B((I) => I.includes(j) ? I : [...I, j]);
          return;
        }
        if (S) {
          B([j]), Z(null);
          return;
        }
        e([D(j, { mode: "select" })]), k("select click", {
          tag: j.tagName,
          id: j.id,
          className: j.className,
          rect: N.get(j) ?? null
        });
      }
    },
    [
      d,
      h,
      c,
      e,
      R,
      D,
      N,
      k
    ]
  ), V = K((s) => {
    B(
      (S) => S.filter(($) => $ !== s)
    );
  }, []);
  re(() => (document.addEventListener("mousemove", b, !0), document.addEventListener("mouseleave", T, !0), document.addEventListener("click", W, !0), k("selector mounted", {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    tracked: ne.length
  }), () => {
    document.removeEventListener("mousemove", b, !0), document.removeEventListener("mouseleave", T, !0), document.removeEventListener("click", W, !0), M.current && clearTimeout(M.current), k("selector unmounted");
  }), [
    b,
    T,
    W,
    ne.length,
    k
  ]), re(() => {
    const s = (S) => {
      switch (S.key) {
        case "Escape":
          t();
          break;
        case "Enter":
          if (c === "insert" && w) {
            e([
              D(w.element, {
                mode: "insert",
                insertionPosition: w.position,
                insertionAxis: w.axis
              })
            ]);
            break;
          }
          if (d && R.length > 0) {
            const $ = R.map(
              (g) => D(g, { mode: "select" })
            );
            e($);
          }
          break;
      }
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [
    d,
    w,
    c,
    t,
    e,
    R,
    D
  ]), re(() => {
    const s = window.matchMedia("(max-width: 640px)"), S = () => ie(s.matches);
    return S(), s.addEventListener("change", S), () => s.removeEventListener("change", S);
  }, []);
  const z = {
    selectLabel: a?.selectLabel ?? "Select",
    insertLabel: a?.insertLabel ?? "Insert",
    instructionSelectSingle: a?.instructionSelectSingle ?? "Click an element to select",
    instructionSelectMulti: a?.instructionSelectMulti ?? "Click elements to select",
    instructionInsert: a?.instructionInsert ?? "Click to choose where to insert new content",
    confirmLabel: a?.confirmLabel ?? "✓",
    cancelLabel: a?.cancelLabel ?? "✕"
  }, ae = c === "insert" ? z.instructionInsert : d ? z.instructionSelectMulti : z.instructionSelectSingle, A = K(() => {
    const s = h && !d;
    if (d && R.length > 0) {
      const S = R.map(
        ($) => D($, { mode: "select" })
      );
      e(S);
      return;
    }
    if (s) {
      if (c === "select" && R[0]) {
        e([
          D(R[0], { mode: "select" })
        ]);
        return;
      }
      c === "insert" && _ && e([
        D(_.element, {
          mode: "insert",
          insertionPosition: _.position,
          insertionAxis: _.axis
        })
      ]);
    }
  }, [
    d,
    h,
    c,
    e,
    _,
    R,
    D
  ]), Q = h && !d, oe = d ? R.length > 0 : Q ? c === "select" ? R.length > 0 : !!_ : !1, xe = d || Q, ke = {
    vertical: u?.vertical ?? "top",
    horizontal: u?.horizontal ?? "center"
  }, F = {
    position: "fixed",
    background: f.panelBg,
    color: f.textColor,
    padding: h ? "14px 16px" : "16px 24px",
    borderRadius: h ? "16px" : "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: f.shadow,
    border: f.border,
    zIndex: 100001,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: h ? "10px" : "16px",
    pointerEvents: "auto",
    width: h ? "calc(100% - 24px)" : void 0,
    maxWidth: h ? "min(720px, calc(100% - 24px))" : "min(960px, calc(100% - 48px))",
    boxSizing: "border-box",
    flexWrap: "nowrap",
    overflowX: "auto",
    justifyContent: "space-between"
  };
  if (h)
    F.left = "12px", F.right = "12px", F.bottom = "16px", F.top = void 0, F.transform = "none";
  else
    switch (ke.vertical === "top" ? F.top = "24px" : F.bottom = "24px", ke.horizontal) {
      case "left":
        F.left = "24px", F.transform = "none";
        break;
      case "right":
        F.right = "24px", F.transform = "none";
        break;
      default:
        F.left = "50%", F.transform = "translateX(-50%)";
        break;
    }
  return /* @__PURE__ */ E.jsxs(
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
        /* @__PURE__ */ E.jsxs(
          "div",
          {
            "data-element-selector-ui": "true",
            style: {
              pointerEvents: "auto",
              ...F
            },
            children: [
              r && /* @__PURE__ */ E.jsx(
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
                    flexGrow: h ? 1 : void 0
                  },
                  children: /* @__PURE__ */ E.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        gap: h ? "6px" : "4px",
                        flex: h ? "1 1 auto" : void 0,
                        flexShrink: 1
                      },
                      children: [
                        /* @__PURE__ */ E.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (s) => {
                              s.preventDefault(), s.stopPropagation(), H("select");
                            },
                            style: {
                              border: c === "select" ? "1px solid " + f.toggleSelectedBg : m === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "999px 0 0 999px",
                              padding: h ? "10px 12px" : "6px 14px",
                              minHeight: h ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: c === "select" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: h ? 1 : void 0,
                              background: c === "select" ? f.toggleSelectedBg : "transparent",
                              color: c === "select" ? f.toggleSelectedText : f.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": c === "select" ? f.toggleSelectedText : f.toggleIdleTextHover
                            },
                            children: z.selectLabel
                          }
                        ),
                        /* @__PURE__ */ E.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (s) => {
                              s.preventDefault(), s.stopPropagation(), H("insert");
                            },
                            style: {
                              border: c === "insert" ? "1px solid " + f.toggleSelectedBg : m === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "0 999px 999px 0",
                              padding: h ? "10px 12px" : "6px 14px",
                              minHeight: h ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: c === "insert" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: h ? 1 : void 0,
                              background: c === "insert" ? f.toggleSelectedBg : "transparent",
                              color: c === "insert" ? f.toggleSelectedText : f.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": c === "insert" ? f.toggleSelectedText : f.toggleIdleTextHover
                            },
                            children: z.insertLabel
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              !h && /* @__PURE__ */ E.jsx(
                "span",
                {
                  className: "element-selector-instruction",
                  style: {
                    color: f.instructionTextColor,
                    fontWeight: 600,
                    flex: 1,
                    textAlign: "center",
                    lineHeight: 1.4,
                    fontSize: "15px"
                  },
                  children: ae
                }
              ),
              /* @__PURE__ */ E.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: h ? "10px" : "8px",
                    width: void 0,
                    justifyContent: "flex-end",
                    flex: h ? "1 1 auto" : void 0,
                    flexWrap: "nowrap"
                  },
                  children: [
                    xe && /* @__PURE__ */ E.jsx(
                      "button",
                      {
                        type: "button",
                        disabled: !oe,
                        className: "element-selector-action element-selector-confirm",
                        onClick: (s) => {
                          s.preventDefault(), s.stopPropagation(), oe && A();
                        },
                        style: {
                          border: "none",
                          borderRadius: h ? "10px" : "8px",
                          padding: h ? "12px 14px" : "8px 12px",
                          minHeight: h ? "44px" : void 0,
                          flex: h ? "0 1 auto" : void 0,
                          cursor: oe ? "pointer" : "not-allowed",
                          fontSize: h ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": f.actionBg,
                          "--es-action-bg-hover": f.actionBgHover,
                          "--es-action-bg-disabled": f.actionBgDisabled,
                          "--es-action-color": f.actionColor,
                          "--es-action-color-hover": f.actionColorHover,
                          "--es-action-color-disabled": f.actionColorDisabled
                        },
                        "aria-label": z.confirmLabel,
                        children: z.confirmLabel
                      }
                    ),
                    /* @__PURE__ */ E.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-action element-selector-cancel",
                        onClick: (s) => {
                          s.preventDefault(), s.stopPropagation(), t();
                        },
                        style: {
                          border: "none",
                          borderRadius: h ? "10px" : "8px",
                          padding: h ? "12px 14px" : "8px 12px",
                          cursor: "pointer",
                          fontSize: h ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": f.actionBg,
                          "--es-action-bg-hover": f.actionBgHover,
                          "--es-action-bg-disabled": f.actionBgDisabled,
                          "--es-action-color": f.actionColor,
                          "--es-action-color-hover": f.actionColorHover,
                          "--es-action-color-disabled": f.actionColorDisabled,
                          flex: h ? "0 1 auto" : void 0,
                          marginLeft: h ? "6px" : void 0
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
        c === "select" && p && (!d || !R.includes(p)) && !h && /* @__PURE__ */ E.jsx(
          Xe,
          {
            targetElement: p,
            friendlySelectors: i,
            rect: N.get(p) ?? null
          }
        ),
        c === "insert" && w && /* @__PURE__ */ E.jsx(
          Fe,
          {
            element: w.element,
            position: w.position,
            axis: w.axis,
            friendlySelectors: i,
            rect: N.get(w.element) ?? null
          }
        ),
        (d || h && R.length > 0) && R.map((s, S) => /* @__PURE__ */ E.jsx(
          Oe,
          {
            targetElement: s,
            onDeselect: () => V(s),
            rect: N.get(s) ?? null
          },
          `selected-${S}`
        )),
        /* @__PURE__ */ E.jsx("style", { children: `
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
let Y = null, le = null;
function tt() {
  return Y && le || (Y = document.createElement("div"), Y.id = "element-selector-persistent-highlights", Y.style.position = "fixed", Y.style.inset = "0", Y.style.pointerEvents = "none", Y.style.zIndex = "99998", document.body.appendChild(Y), le = Me.createRoot(Y)), le;
}
function rt({
  elements: e,
  friendlySelectors: t
}) {
  const l = Ne(
    () => e.map((n) => n.element),
    [e]
  ), i = $e(l);
  return e.length ? /* @__PURE__ */ E.jsx(E.Fragment, { children: e.map((n, r) => {
    const u = i.get(n.element) ?? null;
    return n.mode === "insert" && n.insertionPosition && n.insertionAxis ? /* @__PURE__ */ E.jsx(
      Fe,
      {
        element: n.element,
        position: n.insertionPosition,
        axis: n.insertionAxis,
        friendlySelectors: t,
        rect: u
      },
      `persistent-insert-${r}`
    ) : /* @__PURE__ */ E.jsx(
      Oe,
      {
        targetElement: n.element,
        onDeselect: () => {
        },
        variant: "passive",
        rect: u
      },
      `persistent-select-${r}`
    );
  }) }) : null;
}
function nt(e, t) {
  if (!e.length) return;
  tt().render(
    /* @__PURE__ */ E.jsx(Te.StrictMode, { children: /* @__PURE__ */ E.jsx(rt, { elements: e, friendlySelectors: t }) })
  );
}
const ot = (e) => {
  const l = (e.innerText ?? e.textContent ?? "").toString().replace(/\s+/g, " ").trim(), i = 1024;
  return l.length <= i ? l : `${l.slice(0, i)}<!-- SNIPPET FOR BREVITY -->`;
}, be = (e) => e ? {
  element: e,
  html: e.outerHTML ?? null,
  classes: e.className || null,
  id: e.id || null,
  textPreview: ot(e),
  tag: e.tagName.toLowerCase(),
  selector: Be(e)
} : {
  element: null,
  html: null,
  classes: null,
  id: null,
  textPreview: null,
  tag: null,
  selector: null
}, lt = (e) => {
  const t = [];
  t.push("The user has selected an HTML element:");
  const l = e.selectedElementTag ? `tag: "${e.selectedElementTag}"` : null;
  l && t.push(l), e.selectedElementId && t.push(`id: "#${e.selectedElementId}"`), e.selectedElementClasses && t.push(`class: "${e.selectedElementClasses}"`), e.selectedSrc && t.push(`source code ref: "${e.selectedSrc}"`);
  const i = e.beforeSrc && e.beforeSrc !== e.selectedSrc, n = e.afterSrc && e.afterSrc !== e.selectedSrc;
  return i && t.push(`source code ref BEFORE the selected element: "${e.beforeSrc}"`), n && t.push(`source code ref AFTER the selected element: "${e.afterSrc}"`), e.selectedElementHtml && t.push("", "source:", "```html", e.selectedElementHtml, "```"), e.elementBeforeHtml && t.push(
    "",
    "This is the element BEFORE the selected element:",
    "",
    "```html",
    e.elementBeforeHtml,
    "```"
  ), e.elementAfterHtml && t.push(
    "",
    "This is the element AFTER the selected element:",
    "",
    "```html",
    e.elementAfterHtml,
    "```"
  ), t.join(`
`);
}, st = (e) => {
  const t = [];
  t.push("The user has selected an insertion point:");
  const l = !!e.srcBefore, i = !!e.srcAfter;
  return l && i && e.srcBefore === e.srcAfter && e.srcBefore ? t.push(`source code around the insertion point: "${e.srcBefore}"`) : (e.srcBefore && t.push(`source code ref BEFORE the insertion point: "${e.srcBefore}"`), e.srcAfter && t.push(`source code ref AFTER the insertion point: "${e.srcAfter}"`)), e.htmlWithMarker && t.push("", "```html", e.htmlWithMarker, "```"), t.join(`
`);
}, U = (e, t) => {
  if (!e) return e;
  const l = t === !1 ? null : t === !0 || t === void 0 ? 2e3 : typeof t == "number" && t > 0 ? t : null;
  if (!l) return e;
  const i = Math.max(1, Math.floor(l / 2));
  if (e.length <= l) return e;
  const n = e.slice(0, i), r = e.slice(-i);
  return `${n}
<!-- SNIPPED FOR BREVITY -->
${r}`;
};
function it(e, t) {
  if (e.mode === "insert") {
    const a = e.insertionPosition ?? "after", m = a === "before" ? e.element.previousElementSibling : e.element, x = a === "before" ? e.element : e.element.nextElementSibling, c = be(m), v = be(x), d = U(
      e.insertionBeforeHtml ?? e.beforeHtml,
      t.snipHtml
    ) ?? "", f = U(
      e.insertionAfterHtml ?? e.afterHtml,
      t.snipHtml
    ) ?? "", p = {
      mode: "insert",
      htmlBefore: d,
      elementBefore: c.element,
      htmlAfter: f,
      elementAfter: v.element,
      elementBeforeHtml: U(
        c.html,
        t.snipElementHtml
      ),
      elementAfterHtml: U(
        v.html,
        t.snipElementHtml
      ),
      htmlWithMarker: `${U(c.html, t.snipElementHtml) ?? ""}
<!-- INSERTION POINT -->
${U(v.html, t.snipElementHtml) ?? ""}`,
      srcBefore: e.beforeSrc,
      srcAfter: e.afterSrc,
      routeIdBefore: e.beforeRouteId,
      routeIdAfter: e.afterRouteId,
      routeFileBefore: e.beforeRouteFile,
      routeFileAfter: e.afterRouteFile,
      elementBeforeClasses: c.classes,
      elementBeforeId: c.id,
      elementBeforeTextPreview: c.textPreview,
      elementBeforeTag: c.tag,
      elementBeforeSelector: c.selector,
      elementAfterClasses: v.classes,
      elementAfterId: v.id,
      elementAfterTextPreview: v.textPreview,
      elementAfterTag: v.tag,
      elementAfterSelector: v.selector,
      markdownSummary: ""
    };
    return p.markdownSummary = st(p), p;
  }
  const l = e.element.previousElementSibling, i = e.element.nextElementSibling, n = be(l), r = be(i), u = {
    mode: "select",
    selectedElement: e.element,
    htmlBefore: U(e.beforeHtml, t.snipHtml) ?? "",
    elementBefore: n.element,
    elementBeforeHtml: U(
      n.html,
      t.snipElementHtml
    ),
    htmlAfter: U(e.afterHtml, t.snipHtml) ?? "",
    elementAfter: r.element,
    elementAfterHtml: U(
      r.html,
      t.snipElementHtml
    ),
    selectedSrc: e.src,
    selectedRouteId: e.routeId,
    selectedRouteFile: e.routeFile,
    selectedElementHtml: U(e.elementHtml, t.snipElementHtml) ?? "",
    selectedElementClasses: e.classes,
    selectedElementId: e.id,
    selectedElementTextPreview: e.textPreview,
    selectedElementTag: e.tag,
    selectedElementSelector: e.selector,
    beforeSrc: e.beforeSrc,
    afterSrc: e.afterSrc,
    markdownSummary: ""
  };
  return u.markdownSummary = lt(u), u;
}
function at() {
  le && (le.unmount(), le = null), Y?.parentNode && Y.parentNode.removeChild(Y), Y = null;
}
function dt(e = {}) {
  const {
    multiSelect: t = !1,
    friendlySelectors: l = !1,
    mode: i = "select",
    allowModeToggle: n = !0,
    retainSelectionHighlights: r = !1,
    optionsPanelPosition: u,
    selectionBarText: a,
    theme: m = "dark",
    debug: x = !1,
    snipElementHtml: c = !0,
    snipHtml: v = !0
  } = e;
  return at(), new Promise((d, f) => {
    const p = document.createElement("div");
    p.id = "element-selector-root", p.style.position = "fixed", p.style.zIndex = "999999", p.style.inset = "0", p.style.pointerEvents = "none", document.body.appendChild(p);
    const y = Me.createRoot(p), w = () => {
      y.unmount(), p.parentNode && p.parentNode.removeChild(p);
    }, P = {
      snipElementHtml: c,
      snipHtml: v
    }, R = (J) => {
      r && nt(J, l);
      const L = J.map(
        (_) => it(_, P)
      );
      w(), !t && L.length > 0 ? d(L[0]) : d(L);
    }, B = () => {
      w(), f(new Error("Element selection cancelled by user"));
    };
    y.render(
      /* @__PURE__ */ E.jsx(Te.StrictMode, { children: /* @__PURE__ */ E.jsx(
        et,
        {
          onElementSelected: R,
          onCancel: B,
          multiSelect: t,
          friendlySelectors: l,
          initialMode: i,
          allowModeToggle: n,
          optionsPanelPosition: u,
          selectionBarText: a,
          theme: m,
          debug: x
        }
      ) })
    );
  });
}
export {
  et as ElementSelector,
  Be as buildElementSelector,
  we as findElementAtCoordinates,
  dt as launchSelector,
  at as resetSelectionHighlights
};
