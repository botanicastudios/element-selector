import te, { useRef as w, useEffect as S, useState as L, useCallback as C } from "react";
import ce from "react-dom/client";
var I = { exports: {} }, O = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function ue() {
  if (B) return O;
  B = 1;
  var r = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function n(a, s, t) {
    var o = null;
    if (t !== void 0 && (o = "" + t), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      t = {};
      for (var l in s)
        l !== "key" && (t[l] = s[l]);
    } else t = s;
    return s = t.ref, {
      $$typeof: r,
      type: a,
      key: o,
      ref: s !== void 0 ? s : null,
      props: t
    };
  }
  return O.Fragment = c, O.jsx = n, O.jsxs = n, O;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z;
function de() {
  return Z || (Z = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === se ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case F:
          return "Profiler";
        case P:
          return "StrictMode";
        case E:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case ae:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case A:
            return "Portal";
          case p:
            return (e.displayName || "Context") + ".Provider";
          case u:
            return (e._context.displayName || "Context") + ".Consumer";
          case N:
            var i = e.render;
            return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case oe:
            return i = e.displayName || null, i !== null ? i : r(e.type) || "Memo";
          case W:
            i = e._payload, e = e._init;
            try {
              return r(e(i));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function n(e) {
      try {
        c(e);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var d = i.error, m = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return d.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
        ), c(e);
      }
    }
    function a(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === W)
        return "<...>";
      try {
        var i = r(e);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function o(e) {
      if (U.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, i) {
      function d() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      d.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: d,
        configurable: !0
      });
    }
    function x() {
      var e = r(this.type);
      return J[e] || (J[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, i, d, m, R, v, D, M) {
      return d = v.ref, e = {
        $$typeof: j,
        type: e,
        key: i,
        props: v,
        _owner: R
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
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
        value: D
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, i, d, m, R, v, D, M) {
      var b = i.children;
      if (b !== void 0)
        if (m)
          if (ie(b)) {
            for (m = 0; m < b.length; m++)
              g(b[m]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(b);
      if (U.call(i, "key")) {
        b = r(e);
        var _ = Object.keys(i).filter(function(le) {
          return le !== "key";
        });
        m = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", G[b + m] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          b,
          _,
          b
        ), G[b + m] = !0);
      }
      if (b = null, d !== void 0 && (n(d), b = "" + d), o(i) && (n(i.key), b = "" + i.key), "key" in i) {
        d = {};
        for (var q in i)
          q !== "key" && (d[q] = i[q]);
      } else d = i;
      return b && l(
        d,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        b,
        v,
        R,
        s(),
        d,
        D,
        M
      );
    }
    function g(e) {
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var y = te, j = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), p = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), Y = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, ie = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var H, J = {}, V = y.react_stack_bottom_frame.bind(
      y,
      t
    )(), X = z(a(t)), G = {};
    $.Fragment = k, $.jsx = function(e, i, d, m, R) {
      var v = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return h(
        e,
        i,
        d,
        !1,
        m,
        R,
        v ? Error("react-stack-top-frame") : V,
        v ? z(a(e)) : X
      );
    }, $.jsxs = function(e, i, d, m, R) {
      var v = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return h(
        e,
        i,
        d,
        !0,
        m,
        R,
        v ? Error("react-stack-top-frame") : V,
        v ? z(a(e)) : X
      );
    };
  }()), $;
}
var Q;
function fe() {
  return Q || (Q = 1, process.env.NODE_ENV === "production" ? I.exports = ue() : I.exports = de()), I.exports;
}
var f = fe();
function re(r, c = 60) {
  const n = w(null), a = w(null), s = w(r);
  S(() => {
    s.current = r;
  }, [r]), S(() => {
    const t = 1e3 / c, o = (l) => {
      a.current !== null ? l - a.current >= t && (s.current(), a.current = l) : (a.current = l, s.current()), n.current = requestAnimationFrame(o);
    };
    return n.current = requestAnimationFrame(o), () => {
      n.current && (cancelAnimationFrame(n.current), n.current = null), a.current = null;
    };
  }, [c]);
}
function K(r, c) {
  const n = document.elementsFromPoint(r, c);
  for (const a of n)
    if (!(a.id === "element-selector-overlay" || a.closest("#element-selector-overlay") || a.id === "element-selector-root" || a.closest("#element-selector-root")) && !(a.tagName !== "svg" && a.tagName !== "SVG" && a.closest("svg")))
      return a;
  return document.body;
}
function ee(r) {
  if (!r || r === document.body)
    return "body";
  if (r.id)
    return `#${CSS.escape(r.id)}`;
  const c = [];
  let n = r;
  for (; n && n !== document.body; ) {
    let a = n.tagName.toLowerCase();
    if (n.className && typeof n.className == "string") {
      const s = n.className.split(/\s+/).filter((t) => t && !t.includes(":")).map((t) => `.${CSS.escape(t)}`).slice(0, 2).join("");
      s && (a += s);
    }
    if (n.parentElement) {
      const s = n.tagName, o = Array.from(n.parentElement.children).filter(
        (l) => l.tagName === s
      );
      if (o.length > 1) {
        const l = o.indexOf(n) + 1;
        a += `:nth-of-type(${l})`;
      }
    }
    c.unshift(a);
    try {
      const s = c.join(" > "), t = document.querySelectorAll(s);
      if (t.length === 1 && t[0] === r)
        return s;
    } catch {
    }
    n = n.parentElement;
  }
  return c.join(" > ");
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
function me({ targetElement: r, friendlySelectors: c = !1 }) {
  const n = w(null), a = () => {
    if (!n.current || !r) return;
    const t = r.getBoundingClientRect(), o = n.current, l = 1;
    o.style.top = `${t.top - l}px`, o.style.left = `${t.left - l}px`, o.style.width = `${t.width + l * 2}px`, o.style.height = `${t.height + l * 2}px`, o.style.opacity = "1";
  };
  S(() => {
    a();
  }, [r, a]), re(a, 30);
  const s = r ? {
    tag: r.tagName.toLowerCase(),
    friendlyTag: c ? pe(r.tagName) : r.tagName.toLowerCase(),
    id: r.id,
    classes: r.className?.split(" ").filter((t) => t).slice(0, 2)
  } : null;
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      ref: n,
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
        s && /* @__PURE__ */ f.jsxs(
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
              /* @__PURE__ */ f.jsx("strong", { children: s.friendlyTag }),
              s.id && /* @__PURE__ */ f.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                s.id
              ] }),
              s.classes?.length > 0 && /* @__PURE__ */ f.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                s.classes.join(".")
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f.jsx("style", { children: `
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
function be({ targetElement: r, onDeselect: c }) {
  const n = w(null), [a, s] = L(!1), t = () => {
    if (!n.current || !r) return;
    const o = r.getBoundingClientRect(), l = n.current, x = 1;
    l.style.top = `${o.top - x}px`, l.style.left = `${o.left - x}px`, l.style.width = `${o.width + x * 2}px`, l.style.height = `${o.height + x * 2}px`, l.style.opacity = "1";
  };
  return S(() => {
    t();
  }, [r, t]), re(t, 30), /* @__PURE__ */ f.jsxs(
    "button",
    {
      ref: n,
      "data-selected-element": "true",
      onClick: (o) => {
        o.stopPropagation(), o.preventDefault(), c();
      },
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      style: {
        position: "fixed",
        zIndex: 1e5,
        opacity: 0,
        transition: "border-color 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out",
        boxSizing: "border-box",
        border: a ? "3px solid #ef4444" : "3px solid #8b5cf6",
        padding: 0,
        background: a ? "rgba(239, 68, 68, 0.15)" : "rgba(139, 92, 246, 0.15)",
        borderRadius: "8px",
        cursor: a ? "pointer" : "default",
        boxShadow: a ? "0 0 20px rgba(239, 68, 68, 0.5), inset 0 0 20px rgba(239, 68, 68, 0.2)" : "0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.2)",
        pointerEvents: "auto"
        // Make it clickable
      },
      children: [
        a && /* @__PURE__ */ f.jsx(
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
        /* @__PURE__ */ f.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "-12px",
              right: "-12px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: a ? "#ef4444" : "#8b5cf6",
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
function xe({
  onElementSelected: r,
  onCancel: c,
  multiSelect: n = !1,
  friendlySelectors: a = !1
}) {
  const [s, t] = L(null), [o, l] = L([]), [x, T] = L(!1), h = w({ x: 0, y: 0 }), g = w(null), y = w(null), j = C(() => {
    const u = K(
      h.current.x,
      h.current.y
    );
    o.includes(u) ? (T(!1), t(null), y.current = null) : y.current !== u && (y.current = u, t(u), T(!0));
  }, [o]), A = C(
    (u) => {
      h.current = {
        x: u.clientX,
        y: u.clientY
      }, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        j();
      }, 50);
    },
    [j]
  ), k = C(() => {
    g.current && (clearTimeout(g.current), g.current = null), t(null), y.current = null;
  }, []), P = C(
    (u) => {
      if (u.target.closest('[data-selected-element="true"]'))
        return;
      u.preventDefault(), u.stopPropagation();
      const p = K(
        u.clientX,
        u.clientY
      );
      if (!(!p || o.includes(p)))
        if (n)
          l([...o, p]);
        else {
          const N = [
            {
              element: p,
              selector: ee(p),
              tag: p.tagName.toLowerCase(),
              id: p.id || null,
              classes: p.className || "",
              textPreview: p.textContent?.substring(0, 50) || ""
            }
          ];
          r(N);
        }
    },
    [o, n, r]
  ), F = C(
    (u) => {
      l(o.filter((p) => p !== u));
    },
    [o]
  );
  return S(() => (document.addEventListener("mousemove", A, !0), document.addEventListener("mouseleave", k, !0), document.addEventListener("click", P, !0), () => {
    document.removeEventListener("mousemove", A, !0), document.removeEventListener("mouseleave", k, !0), document.removeEventListener("click", P, !0), g.current && clearTimeout(g.current);
  }), [A, k, P]), S(() => {
    const u = (p) => {
      switch (p.key) {
        case "Escape":
          c();
          break;
        case "Enter":
          if (o.length > 0) {
            const N = o.map((E) => ({
              element: E,
              selector: ee(E),
              tag: E.tagName.toLowerCase(),
              id: E.id || null,
              classes: E.className || "",
              textPreview: E.textContent?.substring(0, 50) || ""
            }));
            r(N);
          }
          break;
      }
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [o, c, r]), /* @__PURE__ */ f.jsxs(
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
        // Allow clicks to pass through
        zIndex: 99999
      },
      children: [
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            style: {
              position: "fixed",
              top: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
              color: "#f1f5f9",
              padding: "16px 32px",
              borderRadius: "12px",
              fontSize: "15px",
              fontFamily: "system-ui, -apple-system, sans-serif",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
              zIndex: 100001,
              display: "flex",
              alignItems: "center",
              gap: "16px",
              pointerEvents: "auto"
              // Instructions can be clicked
            },
            children: [
              /* @__PURE__ */ f.jsxs("span", { children: [
                "Click ",
                n ? "elements" : "an element",
                " to select"
              ] }),
              n && /* @__PURE__ */ f.jsxs(
                "span",
                {
                  style: {
                    background: "#475569",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    fontWeight: "bold"
                  },
                  children: [
                    o.length,
                    " selected"
                  ]
                }
              ),
              /* @__PURE__ */ f.jsxs("span", { style: { opacity: 0.8 }, children: [
                n ? "Enter to confirm • " : "",
                "Esc to cancel"
              ] })
            ]
          }
        ),
        s && !o.includes(s) && /* @__PURE__ */ f.jsx(
          me,
          {
            targetElement: s,
            friendlySelectors: a
          }
        ),
        n && o.map((u, p) => /* @__PURE__ */ f.jsx(
          be,
          {
            targetElement: u,
            onDeselect: () => F(u)
          },
          `selected-${p}`
        )),
        /* @__PURE__ */ f.jsx("style", { children: `
        body {
          cursor: ${x ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${x ? "crosshair" : "default"} !important;
        }
      ` })
      ]
    }
  );
}
function ve(r = {}) {
  const { multiSelect: c = !1, friendlySelectors: n = !1 } = r;
  return new Promise((a, s) => {
    const t = document.createElement("div");
    t.id = "element-selector-root", t.style.position = "fixed", t.style.zIndex = "999999", t.style.inset = "0", document.body.appendChild(t);
    const o = ce.createRoot(t), l = () => {
      o.unmount(), t.parentNode && t.parentNode.removeChild(t);
    }, x = (h) => {
      l(), !c && h.length > 0 ? a(h[0]) : a(h);
    }, T = () => {
      l(), s(new Error("Element selection cancelled by user"));
    };
    o.render(
      /* @__PURE__ */ f.jsx(te.StrictMode, { children: /* @__PURE__ */ f.jsx(
        xe,
        {
          onElementSelected: x,
          onCancel: T,
          multiSelect: c,
          friendlySelectors: n
        }
      ) })
    );
  });
}
export {
  xe as ElementSelector,
  ee as buildElementSelector,
  K as findElementAtCoordinates,
  ve as launchSelector
};
