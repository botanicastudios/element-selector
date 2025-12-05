function bx(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var Zm = { exports: {} }, tv = {}, Jm = { exports: {} }, Nt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ox;
function Ck() {
  if (ox) return Nt;
  ox = 1;
  var S = Symbol.for("react.element"), _ = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), g = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), X = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), q = Symbol.iterator;
  function P(O) {
    return O === null || typeof O != "object" ? null : (O = q && O[q] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ce = Object.assign, ie = {};
  function we(O, V, Xe) {
    this.props = O, this.context = V, this.refs = ie, this.updater = Xe || K;
  }
  we.prototype.isReactComponent = {}, we.prototype.setState = function(O, V) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, V, "setState");
  }, we.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function Ct() {
  }
  Ct.prototype = we.prototype;
  function Ue(O, V, Xe) {
    this.props = O, this.context = V, this.refs = ie, this.updater = Xe || K;
  }
  var Fe = Ue.prototype = new Ct();
  Fe.constructor = Ue, ce(Fe, we.prototype), Fe.isPureReactComponent = !0;
  var je = Array.isArray, De = Object.prototype.hasOwnProperty, rt = { current: null }, Me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Dt(O, V, Xe) {
    var Be, ft = {}, ot = null, et = null;
    if (V != null) for (Be in V.ref !== void 0 && (et = V.ref), V.key !== void 0 && (ot = "" + V.key), V) De.call(V, Be) && !Me.hasOwnProperty(Be) && (ft[Be] = V[Be]);
    var dt = arguments.length - 2;
    if (dt === 1) ft.children = Xe;
    else if (1 < dt) {
      for (var Ke = Array(dt), Qt = 0; Qt < dt; Qt++) Ke[Qt] = arguments[Qt + 2];
      ft.children = Ke;
    }
    if (O && O.defaultProps) for (Be in dt = O.defaultProps, dt) ft[Be] === void 0 && (ft[Be] = dt[Be]);
    return { $$typeof: S, type: O, key: ot, ref: et, props: ft, _owner: rt.current };
  }
  function Ot(O, V) {
    return { $$typeof: S, type: O.type, key: V, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function Wt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === S;
  }
  function _t(O) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(Xe) {
      return V[Xe];
    });
  }
  var St = /\/+/g;
  function Pe(O, V) {
    return typeof O == "object" && O !== null && O.key != null ? _t("" + O.key) : V.toString(36);
  }
  function xe(O, V, Xe, Be, ft) {
    var ot = typeof O;
    (ot === "undefined" || ot === "boolean") && (O = null);
    var et = !1;
    if (O === null) et = !0;
    else switch (ot) {
      case "string":
      case "number":
        et = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case S:
          case _:
            et = !0;
        }
    }
    if (et) return et = O, ft = ft(et), O = Be === "" ? "." + Pe(et, 0) : Be, je(ft) ? (Xe = "", O != null && (Xe = O.replace(St, "$&/") + "/"), xe(ft, V, Xe, "", function(Qt) {
      return Qt;
    })) : ft != null && (Wt(ft) && (ft = Ot(ft, Xe + (!ft.key || et && et.key === ft.key ? "" : ("" + ft.key).replace(St, "$&/") + "/") + O)), V.push(ft)), 1;
    if (et = 0, Be = Be === "" ? "." : Be + ":", je(O)) for (var dt = 0; dt < O.length; dt++) {
      ot = O[dt];
      var Ke = Be + Pe(ot, dt);
      et += xe(ot, V, Xe, Ke, ft);
    }
    else if (Ke = P(O), typeof Ke == "function") for (O = Ke.call(O), dt = 0; !(ot = O.next()).done; ) ot = ot.value, Ke = Be + Pe(ot, dt++), et += xe(ot, V, Xe, Ke, ft);
    else if (ot === "object") throw V = String(O), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return et;
  }
  function At(O, V, Xe) {
    if (O == null) return O;
    var Be = [], ft = 0;
    return xe(O, Be, "", "", function(ot) {
      return V.call(Xe, ot, ft++);
    }), Be;
  }
  function Lt(O) {
    if (O._status === -1) {
      var V = O._result;
      V = V(), V.then(function(Xe) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = Xe);
      }, function(Xe) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = Xe);
      }), O._status === -1 && (O._status = 0, O._result = V);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var Ce = { current: null }, ne = { transition: null }, Le = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: ne, ReactCurrentOwner: rt };
  function pe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Nt.Children = { map: At, forEach: function(O, V, Xe) {
    At(O, function() {
      V.apply(this, arguments);
    }, Xe);
  }, count: function(O) {
    var V = 0;
    return At(O, function() {
      V++;
    }), V;
  }, toArray: function(O) {
    return At(O, function(V) {
      return V;
    }) || [];
  }, only: function(O) {
    if (!Wt(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Nt.Component = we, Nt.Fragment = b, Nt.Profiler = W, Nt.PureComponent = Ue, Nt.StrictMode = ee, Nt.Suspense = Y, Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Le, Nt.act = pe, Nt.cloneElement = function(O, V, Xe) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var Be = ce({}, O.props), ft = O.key, ot = O.ref, et = O._owner;
    if (V != null) {
      if (V.ref !== void 0 && (ot = V.ref, et = rt.current), V.key !== void 0 && (ft = "" + V.key), O.type && O.type.defaultProps) var dt = O.type.defaultProps;
      for (Ke in V) De.call(V, Ke) && !Me.hasOwnProperty(Ke) && (Be[Ke] = V[Ke] === void 0 && dt !== void 0 ? dt[Ke] : V[Ke]);
    }
    var Ke = arguments.length - 2;
    if (Ke === 1) Be.children = Xe;
    else if (1 < Ke) {
      dt = Array(Ke);
      for (var Qt = 0; Qt < Ke; Qt++) dt[Qt] = arguments[Qt + 2];
      Be.children = dt;
    }
    return { $$typeof: S, type: O.type, key: ft, ref: ot, props: Be, _owner: et };
  }, Nt.createContext = function(O) {
    return O = { $$typeof: g, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: Q, _context: O }, O.Consumer = O;
  }, Nt.createElement = Dt, Nt.createFactory = function(O) {
    var V = Dt.bind(null, O);
    return V.type = O, V;
  }, Nt.createRef = function() {
    return { current: null };
  }, Nt.forwardRef = function(O) {
    return { $$typeof: le, render: O };
  }, Nt.isValidElement = Wt, Nt.lazy = function(O) {
    return { $$typeof: ve, _payload: { _status: -1, _result: O }, _init: Lt };
  }, Nt.memo = function(O, V) {
    return { $$typeof: X, type: O, compare: V === void 0 ? null : V };
  }, Nt.startTransition = function(O) {
    var V = ne.transition;
    ne.transition = {};
    try {
      O();
    } finally {
      ne.transition = V;
    }
  }, Nt.unstable_act = pe, Nt.useCallback = function(O, V) {
    return Ce.current.useCallback(O, V);
  }, Nt.useContext = function(O) {
    return Ce.current.useContext(O);
  }, Nt.useDebugValue = function() {
  }, Nt.useDeferredValue = function(O) {
    return Ce.current.useDeferredValue(O);
  }, Nt.useEffect = function(O, V) {
    return Ce.current.useEffect(O, V);
  }, Nt.useId = function() {
    return Ce.current.useId();
  }, Nt.useImperativeHandle = function(O, V, Xe) {
    return Ce.current.useImperativeHandle(O, V, Xe);
  }, Nt.useInsertionEffect = function(O, V) {
    return Ce.current.useInsertionEffect(O, V);
  }, Nt.useLayoutEffect = function(O, V) {
    return Ce.current.useLayoutEffect(O, V);
  }, Nt.useMemo = function(O, V) {
    return Ce.current.useMemo(O, V);
  }, Nt.useReducer = function(O, V, Xe) {
    return Ce.current.useReducer(O, V, Xe);
  }, Nt.useRef = function(O) {
    return Ce.current.useRef(O);
  }, Nt.useState = function(O) {
    return Ce.current.useState(O);
  }, Nt.useSyncExternalStore = function(O, V, Xe) {
    return Ce.current.useSyncExternalStore(O, V, Xe);
  }, Nt.useTransition = function() {
    return Ce.current.useTransition();
  }, Nt.version = "18.3.1", Nt;
}
var iv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
iv.exports;
var ux;
function Rk() {
  return ux || (ux = 1, function(S, _) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var b = "18.3.1", ee = Symbol.for("react.element"), W = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), X = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), we = Symbol.iterator, Ct = "@@iterator";
      function Ue(h) {
        if (h === null || typeof h != "object")
          return null;
        var R = we && h[we] || h[Ct];
        return typeof R == "function" ? R : null;
      }
      var Fe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {
        transition: null
      }, De = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, rt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Me = {}, Dt = null;
      function Ot(h) {
        Dt = h;
      }
      Me.setExtraStackFrame = function(h) {
        Dt = h;
      }, Me.getCurrentStack = null, Me.getStackAddendum = function() {
        var h = "";
        Dt && (h += Dt);
        var R = Me.getCurrentStack;
        return R && (h += R() || ""), h;
      };
      var Wt = !1, _t = !1, St = !1, Pe = !1, xe = !1, At = {
        ReactCurrentDispatcher: Fe,
        ReactCurrentBatchConfig: je,
        ReactCurrentOwner: rt
      };
      At.ReactDebugCurrentFrame = Me, At.ReactCurrentActQueue = De;
      function Lt(h) {
        {
          for (var R = arguments.length, H = new Array(R > 1 ? R - 1 : 0), B = 1; B < R; B++)
            H[B - 1] = arguments[B];
          ne("warn", h, H);
        }
      }
      function Ce(h) {
        {
          for (var R = arguments.length, H = new Array(R > 1 ? R - 1 : 0), B = 1; B < R; B++)
            H[B - 1] = arguments[B];
          ne("error", h, H);
        }
      }
      function ne(h, R, H) {
        {
          var B = At.ReactDebugCurrentFrame, de = B.getStackAddendum();
          de !== "" && (R += "%s", H = H.concat([de]));
          var Ge = H.map(function(me) {
            return String(me);
          });
          Ge.unshift("Warning: " + R), Function.prototype.apply.call(console[h], console, Ge);
        }
      }
      var Le = {};
      function pe(h, R) {
        {
          var H = h.constructor, B = H && (H.displayName || H.name) || "ReactClass", de = B + "." + R;
          if (Le[de])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, B), Le[de] = !0;
        }
      }
      var O = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, R, H) {
          pe(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, R, H, B) {
          pe(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, R, H, B) {
          pe(h, "setState");
        }
      }, V = Object.assign, Xe = {};
      Object.freeze(Xe);
      function Be(h, R, H) {
        this.props = h, this.context = R, this.refs = Xe, this.updater = H || O;
      }
      Be.prototype.isReactComponent = {}, Be.prototype.setState = function(h, R) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, R, "setState");
      }, Be.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ft = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ot = function(h, R) {
          Object.defineProperty(Be.prototype, h, {
            get: function() {
              Lt("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
            }
          });
        };
        for (var et in ft)
          ft.hasOwnProperty(et) && ot(et, ft[et]);
      }
      function dt() {
      }
      dt.prototype = Be.prototype;
      function Ke(h, R, H) {
        this.props = h, this.context = R, this.refs = Xe, this.updater = H || O;
      }
      var Qt = Ke.prototype = new dt();
      Qt.constructor = Ke, V(Qt, Be.prototype), Qt.isPureReactComponent = !0;
      function En() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Kn = Array.isArray;
      function cn(h) {
        return Kn(h);
      }
      function Fn(h) {
        {
          var R = typeof Symbol == "function" && Symbol.toStringTag, H = R && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return H;
        }
      }
      function Cn(h) {
        try {
          return Rn(h), !1;
        } catch {
          return !0;
        }
      }
      function Rn(h) {
        return "" + h;
      }
      function rr(h) {
        if (Cn(h))
          return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(h)), Rn(h);
      }
      function Kr(h, R, H) {
        var B = h.displayName;
        if (B)
          return B;
        var de = R.displayName || R.name || "";
        return de !== "" ? H + "(" + de + ")" : H;
      }
      function sr(h) {
        return h.displayName || "Context";
      }
      function jn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Q:
            return "Fragment";
          case W:
            return "Portal";
          case le:
            return "Profiler";
          case g:
            return "StrictMode";
          case q:
            return "Suspense";
          case P:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case X:
              var R = h;
              return sr(R) + ".Consumer";
            case Y:
              var H = h;
              return sr(H._context) + ".Provider";
            case ve:
              return Kr(h, h.render, "ForwardRef");
            case K:
              var B = h.displayName || null;
              return B !== null ? B : jn(h.type) || "Memo";
            case ce: {
              var de = h, Ge = de._payload, me = de._init;
              try {
                return jn(me(Ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var It = Object.prototype.hasOwnProperty, On = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yn, ha, xn;
      xn = {};
      function Pn(h) {
        if (It.call(h, "ref")) {
          var R = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Lr(h) {
        if (It.call(h, "key")) {
          var R = Object.getOwnPropertyDescriptor(h, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function cr(h, R) {
        var H = function() {
          yn || (yn = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        H.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: H,
          configurable: !0
        });
      }
      function ma(h, R) {
        var H = function() {
          ha || (ha = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        H.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: H,
          configurable: !0
        });
      }
      function oe(h) {
        if (typeof h.ref == "string" && rt.current && h.__self && rt.current.stateNode !== h.__self) {
          var R = jn(rt.current.type);
          xn[R] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R, h.ref), xn[R] = !0);
        }
      }
      var L = function(h, R, H, B, de, Ge, me) {
        var tt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ee,
          // Built-in properties that belong on the element
          type: h,
          key: R,
          ref: H,
          props: me,
          // Record the component responsible for creating this element.
          _owner: Ge
        };
        return tt._store = {}, Object.defineProperty(tt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(tt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: B
        }), Object.defineProperty(tt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: de
        }), Object.freeze && (Object.freeze(tt.props), Object.freeze(tt)), tt;
      };
      function fe(h, R, H) {
        var B, de = {}, Ge = null, me = null, tt = null, wt = null;
        if (R != null) {
          Pn(R) && (me = R.ref, oe(R)), Lr(R) && (rr(R.key), Ge = "" + R.key), tt = R.__self === void 0 ? null : R.__self, wt = R.__source === void 0 ? null : R.__source;
          for (B in R)
            It.call(R, B) && !On.hasOwnProperty(B) && (de[B] = R[B]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          de.children = H;
        else if ($t > 1) {
          for (var dn = Array($t), rn = 0; rn < $t; rn++)
            dn[rn] = arguments[rn + 2];
          Object.freeze && Object.freeze(dn), de.children = dn;
        }
        if (h && h.defaultProps) {
          var Rt = h.defaultProps;
          for (B in Rt)
            de[B] === void 0 && (de[B] = Rt[B]);
        }
        if (Ge || me) {
          var an = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ge && cr(de, an), me && ma(de, an);
        }
        return L(h, Ge, me, tt, wt, rt.current, de);
      }
      function Qe(h, R) {
        var H = L(h.type, R, h.ref, h._self, h._source, h._owner, h.props);
        return H;
      }
      function ye(h, R, H) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var B, de = V({}, h.props), Ge = h.key, me = h.ref, tt = h._self, wt = h._source, $t = h._owner;
        if (R != null) {
          Pn(R) && (me = R.ref, $t = rt.current), Lr(R) && (rr(R.key), Ge = "" + R.key);
          var dn;
          h.type && h.type.defaultProps && (dn = h.type.defaultProps);
          for (B in R)
            It.call(R, B) && !On.hasOwnProperty(B) && (R[B] === void 0 && dn !== void 0 ? de[B] = dn[B] : de[B] = R[B]);
        }
        var rn = arguments.length - 2;
        if (rn === 1)
          de.children = H;
        else if (rn > 1) {
          for (var Rt = Array(rn), an = 0; an < rn; an++)
            Rt[an] = arguments[an + 2];
          de.children = Rt;
        }
        return L(h.type, Ge, me, tt, wt, $t, de);
      }
      function Mt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === ee;
      }
      var Ie = ".", Ut = ":";
      function Ze(h) {
        var R = /[=:]/g, H = {
          "=": "=0",
          ":": "=2"
        }, B = h.replace(R, function(de) {
          return H[de];
        });
        return "$" + B;
      }
      var it = !1, Bt = /\/+/g;
      function Mr(h) {
        return h.replace(Bt, "$&/");
      }
      function Bn(h, R) {
        return typeof h == "object" && h !== null && h.key != null ? (rr(h.key), Ze("" + h.key)) : R.toString(36);
      }
      function wr(h, R, H, B, de) {
        var Ge = typeof h;
        (Ge === "undefined" || Ge === "boolean") && (h = null);
        var me = !1;
        if (h === null)
          me = !0;
        else
          switch (Ge) {
            case "string":
            case "number":
              me = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case ee:
                case W:
                  me = !0;
              }
          }
        if (me) {
          var tt = h, wt = de(tt), $t = B === "" ? Ie + Bn(tt, 0) : B;
          if (cn(wt)) {
            var dn = "";
            $t != null && (dn = Mr($t) + "/"), wr(wt, R, dn, "", function(Jf) {
              return Jf;
            });
          } else wt != null && (Mt(wt) && (wt.key && (!tt || tt.key !== wt.key) && rr(wt.key), wt = Qe(
            wt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            H + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (wt.key && (!tt || tt.key !== wt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Mr("" + wt.key) + "/"
            ) : "") + $t
          )), R.push(wt));
          return 1;
        }
        var rn, Rt, an = 0, bn = B === "" ? Ie : B + Ut;
        if (cn(h))
          for (var bl = 0; bl < h.length; bl++)
            rn = h[bl], Rt = bn + Bn(rn, bl), an += wr(rn, R, H, Rt, de);
        else {
          var Ku = Ue(h);
          if (typeof Ku == "function") {
            var $i = h;
            Ku === $i.entries && (it || Lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), it = !0);
            for (var Zu = Ku.call($i), co, Zf = 0; !(co = Zu.next()).done; )
              rn = co.value, Rt = bn + Bn(rn, Zf++), an += wr(rn, R, H, Rt, de);
          } else if (Ge === "object") {
            var fc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (fc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : fc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return an;
      }
      function Pi(h, R, H) {
        if (h == null)
          return h;
        var B = [], de = 0;
        return wr(h, B, "", "", function(Ge) {
          return R.call(H, Ge, de++);
        }), B;
      }
      function to(h) {
        var R = 0;
        return Pi(h, function() {
          R++;
        }), R;
      }
      function no(h, R, H) {
        Pi(h, function() {
          R.apply(this, arguments);
        }, H);
      }
      function hl(h) {
        return Pi(h, function(R) {
          return R;
        }) || [];
      }
      function ml(h) {
        if (!Mt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ro(h) {
        var R = {
          $$typeof: X,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        R.Provider = {
          $$typeof: Y,
          _context: R
        };
        var H = !1, B = !1, de = !1;
        {
          var Ge = {
            $$typeof: X,
            _context: R
          };
          Object.defineProperties(Ge, {
            Provider: {
              get: function() {
                return B || (B = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
              },
              set: function(me) {
                R.Provider = me;
              }
            },
            _currentValue: {
              get: function() {
                return R._currentValue;
              },
              set: function(me) {
                R._currentValue = me;
              }
            },
            _currentValue2: {
              get: function() {
                return R._currentValue2;
              },
              set: function(me) {
                R._currentValue2 = me;
              }
            },
            _threadCount: {
              get: function() {
                return R._threadCount;
              },
              set: function(me) {
                R._threadCount = me;
              }
            },
            Consumer: {
              get: function() {
                return H || (H = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), R.Consumer;
              }
            },
            displayName: {
              get: function() {
                return R.displayName;
              },
              set: function(me) {
                de || (Lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", me), de = !0);
              }
            }
          }), R.Consumer = Ge;
        }
        return R._currentRenderer = null, R._currentRenderer2 = null, R;
      }
      var Nr = -1, zr = 0, fr = 1, pi = 2;
      function qa(h) {
        if (h._status === Nr) {
          var R = h._result, H = R();
          if (H.then(function(Ge) {
            if (h._status === zr || h._status === Nr) {
              var me = h;
              me._status = fr, me._result = Ge;
            }
          }, function(Ge) {
            if (h._status === zr || h._status === Nr) {
              var me = h;
              me._status = pi, me._result = Ge;
            }
          }), h._status === Nr) {
            var B = h;
            B._status = zr, B._result = H;
          }
        }
        if (h._status === fr) {
          var de = h._result;
          return de === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, de), "default" in de || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, de), de.default;
        } else
          throw h._result;
      }
      function vi(h) {
        var R = {
          // We use these fields to store the result.
          _status: Nr,
          _result: h
        }, H = {
          $$typeof: ce,
          _payload: R,
          _init: qa
        };
        {
          var B, de;
          Object.defineProperties(H, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return B;
              },
              set: function(Ge) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), B = Ge, Object.defineProperty(H, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return de;
              },
              set: function(Ge) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), de = Ge, Object.defineProperty(H, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return H;
      }
      function hi(h) {
        h != null && h.$$typeof === K ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ce("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var R = {
          $$typeof: ve,
          render: h
        };
        {
          var H;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(B) {
              H = B, !h.name && !h.displayName && (h.displayName = B);
            }
          });
        }
        return R;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function Z(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Q || h === le || xe || h === g || h === q || h === P || Pe || h === ie || Wt || _t || St || typeof h == "object" && h !== null && (h.$$typeof === ce || h.$$typeof === K || h.$$typeof === Y || h.$$typeof === X || h.$$typeof === ve || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === x || h.getModuleId !== void 0));
      }
      function ge(h, R) {
        Z(h) || Ce("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var H = {
          $$typeof: K,
          type: h,
          compare: R === void 0 ? null : R
        };
        {
          var B;
          Object.defineProperty(H, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(de) {
              B = de, !h.name && !h.displayName && (h.displayName = de);
            }
          });
        }
        return H;
      }
      function Oe() {
        var h = Fe.current;
        return h === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function mt(h) {
        var R = Oe();
        if (h._context !== void 0) {
          var H = h._context;
          H.Consumer === h ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : H.Provider === h && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return R.useContext(h);
      }
      function pt(h) {
        var R = Oe();
        return R.useState(h);
      }
      function Tt(h, R, H) {
        var B = Oe();
        return B.useReducer(h, R, H);
      }
      function xt(h) {
        var R = Oe();
        return R.useRef(h);
      }
      function Ln(h, R) {
        var H = Oe();
        return H.useEffect(h, R);
      }
      function fn(h, R) {
        var H = Oe();
        return H.useInsertionEffect(h, R);
      }
      function vn(h, R) {
        var H = Oe();
        return H.useLayoutEffect(h, R);
      }
      function dr(h, R) {
        var H = Oe();
        return H.useCallback(h, R);
      }
      function Xa(h, R) {
        var H = Oe();
        return H.useMemo(h, R);
      }
      function Ka(h, R, H) {
        var B = Oe();
        return B.useImperativeHandle(h, R, H);
      }
      function yt(h, R) {
        {
          var H = Oe();
          return H.useDebugValue(h, R);
        }
      }
      function Et() {
        var h = Oe();
        return h.useTransition();
      }
      function Za(h) {
        var R = Oe();
        return R.useDeferredValue(h);
      }
      function ao() {
        var h = Oe();
        return h.useId();
      }
      function io(h, R, H) {
        var B = Oe();
        return B.useSyncExternalStore(h, R, H);
      }
      var yl = 0, Xo, gl, Zr, Qu, Ar, sc, cc;
      function Ko() {
      }
      Ko.__reactDisabledLog = !0;
      function Sl() {
        {
          if (yl === 0) {
            Xo = console.log, gl = console.info, Zr = console.warn, Qu = console.error, Ar = console.group, sc = console.groupCollapsed, cc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ko,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          yl++;
        }
      }
      function ya() {
        {
          if (yl--, yl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: V({}, h, {
                value: Xo
              }),
              info: V({}, h, {
                value: gl
              }),
              warn: V({}, h, {
                value: Zr
              }),
              error: V({}, h, {
                value: Qu
              }),
              group: V({}, h, {
                value: Ar
              }),
              groupCollapsed: V({}, h, {
                value: sc
              }),
              groupEnd: V({}, h, {
                value: cc
              })
            });
          }
          yl < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ja = At.ReactCurrentDispatcher, ei;
      function Zo(h, R, H) {
        {
          if (ei === void 0)
            try {
              throw Error();
            } catch (de) {
              var B = de.stack.trim().match(/\n( *(at )?)/);
              ei = B && B[1] || "";
            }
          return `
` + ei + h;
        }
      }
      var lo = !1, El;
      {
        var Jo = typeof WeakMap == "function" ? WeakMap : Map;
        El = new Jo();
      }
      function eu(h, R) {
        if (!h || lo)
          return "";
        {
          var H = El.get(h);
          if (H !== void 0)
            return H;
        }
        var B;
        lo = !0;
        var de = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ge;
        Ge = Ja.current, Ja.current = null, Sl();
        try {
          if (R) {
            var me = function() {
              throw Error();
            };
            if (Object.defineProperty(me.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(me, []);
              } catch (bn) {
                B = bn;
              }
              Reflect.construct(h, [], me);
            } else {
              try {
                me.call();
              } catch (bn) {
                B = bn;
              }
              h.call(me.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (bn) {
              B = bn;
            }
            h();
          }
        } catch (bn) {
          if (bn && B && typeof bn.stack == "string") {
            for (var tt = bn.stack.split(`
`), wt = B.stack.split(`
`), $t = tt.length - 1, dn = wt.length - 1; $t >= 1 && dn >= 0 && tt[$t] !== wt[dn]; )
              dn--;
            for (; $t >= 1 && dn >= 0; $t--, dn--)
              if (tt[$t] !== wt[dn]) {
                if ($t !== 1 || dn !== 1)
                  do
                    if ($t--, dn--, dn < 0 || tt[$t] !== wt[dn]) {
                      var rn = `
` + tt[$t].replace(" at new ", " at ");
                      return h.displayName && rn.includes("<anonymous>") && (rn = rn.replace("<anonymous>", h.displayName)), typeof h == "function" && El.set(h, rn), rn;
                    }
                  while ($t >= 1 && dn >= 0);
                break;
              }
          }
        } finally {
          lo = !1, Ja.current = Ge, ya(), Error.prepareStackTrace = de;
        }
        var Rt = h ? h.displayName || h.name : "", an = Rt ? Zo(Rt) : "";
        return typeof h == "function" && El.set(h, an), an;
      }
      function Bi(h, R, H) {
        return eu(h, !1);
      }
      function Xf(h) {
        var R = h.prototype;
        return !!(R && R.isReactComponent);
      }
      function Vi(h, R, H) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return eu(h, Xf(h));
        if (typeof h == "string")
          return Zo(h);
        switch (h) {
          case q:
            return Zo("Suspense");
          case P:
            return Zo("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ve:
              return Bi(h.render);
            case K:
              return Vi(h.type, R, H);
            case ce: {
              var B = h, de = B._payload, Ge = B._init;
              try {
                return Vi(Ge(de), R, H);
              } catch {
              }
            }
          }
        return "";
      }
      var Gt = {}, tu = At.ReactDebugCurrentFrame;
      function Vt(h) {
        if (h) {
          var R = h._owner, H = Vi(h.type, h._source, R ? R.type : null);
          tu.setExtraStackFrame(H);
        } else
          tu.setExtraStackFrame(null);
      }
      function Gu(h, R, H, B, de) {
        {
          var Ge = Function.call.bind(It);
          for (var me in h)
            if (Ge(h, me)) {
              var tt = void 0;
              try {
                if (typeof h[me] != "function") {
                  var wt = Error((B || "React class") + ": " + H + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw wt.name = "Invariant Violation", wt;
                }
                tt = h[me](R, me, B, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch ($t) {
                tt = $t;
              }
              tt && !(tt instanceof Error) && (Vt(de), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", H, me, typeof tt), Vt(null)), tt instanceof Error && !(tt.message in Gt) && (Gt[tt.message] = !0, Vt(de), Ce("Failed %s type: %s", H, tt.message), Vt(null));
            }
        }
      }
      function mi(h) {
        if (h) {
          var R = h._owner, H = Vi(h.type, h._source, R ? R.type : null);
          Ot(H);
        } else
          Ot(null);
      }
      var ct;
      ct = !1;
      function nu() {
        if (rt.current) {
          var h = jn(rt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function pr(h) {
        if (h !== void 0) {
          var R = h.fileName.replace(/^.*[\\\/]/, ""), H = h.lineNumber;
          return `

Check your code at ` + R + ":" + H + ".";
        }
        return "";
      }
      function yi(h) {
        return h != null ? pr(h.__source) : "";
      }
      var Ur = {};
      function gi(h) {
        var R = nu();
        if (!R) {
          var H = typeof h == "string" ? h : h.displayName || h.name;
          H && (R = `

Check the top-level render call using <` + H + ">.");
        }
        return R;
      }
      function hn(h, R) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var H = gi(R);
          if (!Ur[H]) {
            Ur[H] = !0;
            var B = "";
            h && h._owner && h._owner !== rt.current && (B = " It was passed a child from " + jn(h._owner.type) + "."), mi(h), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, B), mi(null);
          }
        }
      }
      function nn(h, R) {
        if (typeof h == "object") {
          if (cn(h))
            for (var H = 0; H < h.length; H++) {
              var B = h[H];
              Mt(B) && hn(B, R);
            }
          else if (Mt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var de = Ue(h);
            if (typeof de == "function" && de !== h.entries)
              for (var Ge = de.call(h), me; !(me = Ge.next()).done; )
                Mt(me.value) && hn(me.value, R);
          }
        }
      }
      function Cl(h) {
        {
          var R = h.type;
          if (R == null || typeof R == "string")
            return;
          var H;
          if (typeof R == "function")
            H = R.propTypes;
          else if (typeof R == "object" && (R.$$typeof === ve || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          R.$$typeof === K))
            H = R.propTypes;
          else
            return;
          if (H) {
            var B = jn(R);
            Gu(H, h.props, "prop", B, h);
          } else if (R.PropTypes !== void 0 && !ct) {
            ct = !0;
            var de = jn(R);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Zn(h) {
        {
          for (var R = Object.keys(h.props), H = 0; H < R.length; H++) {
            var B = R[H];
            if (B !== "children" && B !== "key") {
              mi(h), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), mi(null);
              break;
            }
          }
          h.ref !== null && (mi(h), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), mi(null));
        }
      }
      function Hr(h, R, H) {
        var B = Z(h);
        if (!B) {
          var de = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ge = yi(R);
          Ge ? de += Ge : de += nu();
          var me;
          h === null ? me = "null" : cn(h) ? me = "array" : h !== void 0 && h.$$typeof === ee ? (me = "<" + (jn(h.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : me = typeof h, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, de);
        }
        var tt = fe.apply(this, arguments);
        if (tt == null)
          return tt;
        if (B)
          for (var wt = 2; wt < arguments.length; wt++)
            nn(arguments[wt], h);
        return h === Q ? Zn(tt) : Cl(tt), tt;
      }
      var Da = !1;
      function oo(h) {
        var R = Hr.bind(null, h);
        return R.type = h, Da || (Da = !0, Lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", {
          enumerable: !1,
          get: function() {
            return Lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), R;
      }
      function qu(h, R, H) {
        for (var B = ye.apply(this, arguments), de = 2; de < arguments.length; de++)
          nn(arguments[de], B.type);
        return Cl(B), B;
      }
      function Xu(h, R) {
        var H = je.transition;
        je.transition = {};
        var B = je.transition;
        je.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (je.transition = H, H === null && B._updatedFibers) {
            var de = B._updatedFibers.size;
            de > 10 && Lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), B._updatedFibers.clear();
          }
        }
      }
      var Rl = !1, uo = null;
      function Kf(h) {
        if (uo === null)
          try {
            var R = ("require" + Math.random()).slice(0, 7), H = S && S[R];
            uo = H.call(S, "timers").setImmediate;
          } catch {
            uo = function(de) {
              Rl === !1 && (Rl = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ge = new MessageChannel();
              Ge.port1.onmessage = de, Ge.port2.postMessage(void 0);
            };
          }
        return uo(h);
      }
      var Oa = 0, ti = !1;
      function Si(h) {
        {
          var R = Oa;
          Oa++, De.current === null && (De.current = []);
          var H = De.isBatchingLegacy, B;
          try {
            if (De.isBatchingLegacy = !0, B = h(), !H && De.didScheduleLegacyUpdate) {
              var de = De.current;
              de !== null && (De.didScheduleLegacyUpdate = !1, xl(de));
            }
          } catch (Rt) {
            throw La(R), Rt;
          } finally {
            De.isBatchingLegacy = H;
          }
          if (B !== null && typeof B == "object" && typeof B.then == "function") {
            var Ge = B, me = !1, tt = {
              then: function(Rt, an) {
                me = !0, Ge.then(function(bn) {
                  La(R), Oa === 0 ? ru(bn, Rt, an) : Rt(bn);
                }, function(bn) {
                  La(R), an(bn);
                });
              }
            };
            return !ti && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              me || (ti = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), tt;
          } else {
            var wt = B;
            if (La(R), Oa === 0) {
              var $t = De.current;
              $t !== null && (xl($t), De.current = null);
              var dn = {
                then: function(Rt, an) {
                  De.current === null ? (De.current = [], ru(wt, Rt, an)) : Rt(wt);
                }
              };
              return dn;
            } else {
              var rn = {
                then: function(Rt, an) {
                  Rt(wt);
                }
              };
              return rn;
            }
          }
        }
      }
      function La(h) {
        h !== Oa - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function ru(h, R, H) {
        {
          var B = De.current;
          if (B !== null)
            try {
              xl(B), Kf(function() {
                B.length === 0 ? (De.current = null, R(h)) : ru(h, R, H);
              });
            } catch (de) {
              H(de);
            }
          else
            R(h);
        }
      }
      var au = !1;
      function xl(h) {
        if (!au) {
          au = !0;
          var R = 0;
          try {
            for (; R < h.length; R++) {
              var H = h[R];
              do
                H = H(!0);
              while (H !== null);
            }
            h.length = 0;
          } catch (B) {
            throw h = h.slice(R + 1), B;
          } finally {
            au = !1;
          }
        }
      }
      var so = Hr, iu = qu, lu = oo, ni = {
        map: Pi,
        forEach: no,
        count: to,
        toArray: hl,
        only: ml
      };
      _.Children = ni, _.Component = Be, _.Fragment = Q, _.Profiler = le, _.PureComponent = Ke, _.StrictMode = g, _.Suspense = q, _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = At, _.act = Si, _.cloneElement = iu, _.createContext = ro, _.createElement = so, _.createFactory = lu, _.createRef = En, _.forwardRef = hi, _.isValidElement = Mt, _.lazy = vi, _.memo = ge, _.startTransition = Xu, _.unstable_act = Si, _.useCallback = dr, _.useContext = mt, _.useDebugValue = yt, _.useDeferredValue = Za, _.useEffect = Ln, _.useId = ao, _.useImperativeHandle = Ka, _.useInsertionEffect = fn, _.useLayoutEffect = vn, _.useMemo = Xa, _.useReducer = Tt, _.useRef = xt, _.useState = pt, _.useSyncExternalStore = io, _.useTransition = Et, _.version = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(iv, iv.exports)), iv.exports;
}
var sx;
function lv() {
  return sx || (sx = 1, process.env.NODE_ENV === "production" ? Jm.exports = Ck() : Jm.exports = Rk()), Jm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cx;
function xk() {
  if (cx) return tv;
  cx = 1;
  var S = lv(), _ = Symbol.for("react.element"), b = Symbol.for("react.fragment"), ee = Object.prototype.hasOwnProperty, W = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(le, Y, X) {
    var ve, q = {}, P = null, K = null;
    X !== void 0 && (P = "" + X), Y.key !== void 0 && (P = "" + Y.key), Y.ref !== void 0 && (K = Y.ref);
    for (ve in Y) ee.call(Y, ve) && !Q.hasOwnProperty(ve) && (q[ve] = Y[ve]);
    if (le && le.defaultProps) for (ve in Y = le.defaultProps, Y) q[ve] === void 0 && (q[ve] = Y[ve]);
    return { $$typeof: _, type: le, key: P, ref: K, props: q, _owner: W.current };
  }
  return tv.Fragment = b, tv.jsx = g, tv.jsxs = g, tv;
}
var nv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fx;
function bk() {
  return fx || (fx = 1, process.env.NODE_ENV !== "production" && function() {
    var S = lv(), _ = Symbol.for("react.element"), b = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), le = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), ce = Symbol.iterator, ie = "@@iterator";
    function we(x) {
      if (x === null || typeof x != "object")
        return null;
      var Z = ce && x[ce] || x[ie];
      return typeof Z == "function" ? Z : null;
    }
    var Ct = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ue(x) {
      {
        for (var Z = arguments.length, ge = new Array(Z > 1 ? Z - 1 : 0), Oe = 1; Oe < Z; Oe++)
          ge[Oe - 1] = arguments[Oe];
        Fe("error", x, ge);
      }
    }
    function Fe(x, Z, ge) {
      {
        var Oe = Ct.ReactDebugCurrentFrame, mt = Oe.getStackAddendum();
        mt !== "" && (Z += "%s", ge = ge.concat([mt]));
        var pt = ge.map(function(Tt) {
          return String(Tt);
        });
        pt.unshift("Warning: " + Z), Function.prototype.apply.call(console[x], console, pt);
      }
    }
    var je = !1, De = !1, rt = !1, Me = !1, Dt = !1, Ot;
    Ot = Symbol.for("react.module.reference");
    function Wt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === ee || x === Q || Dt || x === W || x === X || x === ve || Me || x === K || je || De || rt || typeof x == "object" && x !== null && (x.$$typeof === P || x.$$typeof === q || x.$$typeof === g || x.$$typeof === le || x.$$typeof === Y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === Ot || x.getModuleId !== void 0));
    }
    function _t(x, Z, ge) {
      var Oe = x.displayName;
      if (Oe)
        return Oe;
      var mt = Z.displayName || Z.name || "";
      return mt !== "" ? ge + "(" + mt + ")" : ge;
    }
    function St(x) {
      return x.displayName || "Context";
    }
    function Pe(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && Ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case ee:
          return "Fragment";
        case b:
          return "Portal";
        case Q:
          return "Profiler";
        case W:
          return "StrictMode";
        case X:
          return "Suspense";
        case ve:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case le:
            var Z = x;
            return St(Z) + ".Consumer";
          case g:
            var ge = x;
            return St(ge._context) + ".Provider";
          case Y:
            return _t(x, x.render, "ForwardRef");
          case q:
            var Oe = x.displayName || null;
            return Oe !== null ? Oe : Pe(x.type) || "Memo";
          case P: {
            var mt = x, pt = mt._payload, Tt = mt._init;
            try {
              return Pe(Tt(pt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xe = Object.assign, At = 0, Lt, Ce, ne, Le, pe, O, V;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function Be() {
      {
        if (At === 0) {
          Lt = console.log, Ce = console.info, ne = console.warn, Le = console.error, pe = console.group, O = console.groupCollapsed, V = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        At++;
      }
    }
    function ft() {
      {
        if (At--, At === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xe({}, x, {
              value: Lt
            }),
            info: xe({}, x, {
              value: Ce
            }),
            warn: xe({}, x, {
              value: ne
            }),
            error: xe({}, x, {
              value: Le
            }),
            group: xe({}, x, {
              value: pe
            }),
            groupCollapsed: xe({}, x, {
              value: O
            }),
            groupEnd: xe({}, x, {
              value: V
            })
          });
        }
        At < 0 && Ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ot = Ct.ReactCurrentDispatcher, et;
    function dt(x, Z, ge) {
      {
        if (et === void 0)
          try {
            throw Error();
          } catch (mt) {
            var Oe = mt.stack.trim().match(/\n( *(at )?)/);
            et = Oe && Oe[1] || "";
          }
        return `
` + et + x;
      }
    }
    var Ke = !1, Qt;
    {
      var En = typeof WeakMap == "function" ? WeakMap : Map;
      Qt = new En();
    }
    function Kn(x, Z) {
      if (!x || Ke)
        return "";
      {
        var ge = Qt.get(x);
        if (ge !== void 0)
          return ge;
      }
      var Oe;
      Ke = !0;
      var mt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pt;
      pt = ot.current, ot.current = null, Be();
      try {
        if (Z) {
          var Tt = function() {
            throw Error();
          };
          if (Object.defineProperty(Tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Tt, []);
            } catch (yt) {
              Oe = yt;
            }
            Reflect.construct(x, [], Tt);
          } else {
            try {
              Tt.call();
            } catch (yt) {
              Oe = yt;
            }
            x.call(Tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yt) {
            Oe = yt;
          }
          x();
        }
      } catch (yt) {
        if (yt && Oe && typeof yt.stack == "string") {
          for (var xt = yt.stack.split(`
`), Ln = Oe.stack.split(`
`), fn = xt.length - 1, vn = Ln.length - 1; fn >= 1 && vn >= 0 && xt[fn] !== Ln[vn]; )
            vn--;
          for (; fn >= 1 && vn >= 0; fn--, vn--)
            if (xt[fn] !== Ln[vn]) {
              if (fn !== 1 || vn !== 1)
                do
                  if (fn--, vn--, vn < 0 || xt[fn] !== Ln[vn]) {
                    var dr = `
` + xt[fn].replace(" at new ", " at ");
                    return x.displayName && dr.includes("<anonymous>") && (dr = dr.replace("<anonymous>", x.displayName)), typeof x == "function" && Qt.set(x, dr), dr;
                  }
                while (fn >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        Ke = !1, ot.current = pt, ft(), Error.prepareStackTrace = mt;
      }
      var Xa = x ? x.displayName || x.name : "", Ka = Xa ? dt(Xa) : "";
      return typeof x == "function" && Qt.set(x, Ka), Ka;
    }
    function cn(x, Z, ge) {
      return Kn(x, !1);
    }
    function Fn(x) {
      var Z = x.prototype;
      return !!(Z && Z.isReactComponent);
    }
    function Cn(x, Z, ge) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return Kn(x, Fn(x));
      if (typeof x == "string")
        return dt(x);
      switch (x) {
        case X:
          return dt("Suspense");
        case ve:
          return dt("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case Y:
            return cn(x.render);
          case q:
            return Cn(x.type, Z, ge);
          case P: {
            var Oe = x, mt = Oe._payload, pt = Oe._init;
            try {
              return Cn(pt(mt), Z, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var Rn = Object.prototype.hasOwnProperty, rr = {}, Kr = Ct.ReactDebugCurrentFrame;
    function sr(x) {
      if (x) {
        var Z = x._owner, ge = Cn(x.type, x._source, Z ? Z.type : null);
        Kr.setExtraStackFrame(ge);
      } else
        Kr.setExtraStackFrame(null);
    }
    function jn(x, Z, ge, Oe, mt) {
      {
        var pt = Function.call.bind(Rn);
        for (var Tt in x)
          if (pt(x, Tt)) {
            var xt = void 0;
            try {
              if (typeof x[Tt] != "function") {
                var Ln = Error((Oe || "React class") + ": " + ge + " type `" + Tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              xt = x[Tt](Z, Tt, Oe, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              xt = fn;
            }
            xt && !(xt instanceof Error) && (sr(mt), Ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", ge, Tt, typeof xt), sr(null)), xt instanceof Error && !(xt.message in rr) && (rr[xt.message] = !0, sr(mt), Ue("Failed %s type: %s", ge, xt.message), sr(null));
          }
      }
    }
    var It = Array.isArray;
    function On(x) {
      return It(x);
    }
    function yn(x) {
      {
        var Z = typeof Symbol == "function" && Symbol.toStringTag, ge = Z && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return ge;
      }
    }
    function ha(x) {
      try {
        return xn(x), !1;
      } catch {
        return !0;
      }
    }
    function xn(x) {
      return "" + x;
    }
    function Pn(x) {
      if (ha(x))
        return Ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yn(x)), xn(x);
    }
    var Lr = Ct.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ma, oe;
    function L(x) {
      if (Rn.call(x, "ref")) {
        var Z = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function fe(x) {
      if (Rn.call(x, "key")) {
        var Z = Object.getOwnPropertyDescriptor(x, "key").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Qe(x, Z) {
      typeof x.ref == "string" && Lr.current;
    }
    function ye(x, Z) {
      {
        var ge = function() {
          ma || (ma = !0, Ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        ge.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function Mt(x, Z) {
      {
        var ge = function() {
          oe || (oe = !0, Ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        ge.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var Ie = function(x, Z, ge, Oe, mt, pt, Tt) {
      var xt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: x,
        key: Z,
        ref: ge,
        props: Tt,
        // Record the component responsible for creating this element.
        _owner: pt
      };
      return xt._store = {}, Object.defineProperty(xt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.defineProperty(xt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: mt
      }), Object.freeze && (Object.freeze(xt.props), Object.freeze(xt)), xt;
    };
    function Ut(x, Z, ge, Oe, mt) {
      {
        var pt, Tt = {}, xt = null, Ln = null;
        ge !== void 0 && (Pn(ge), xt = "" + ge), fe(Z) && (Pn(Z.key), xt = "" + Z.key), L(Z) && (Ln = Z.ref, Qe(Z, mt));
        for (pt in Z)
          Rn.call(Z, pt) && !cr.hasOwnProperty(pt) && (Tt[pt] = Z[pt]);
        if (x && x.defaultProps) {
          var fn = x.defaultProps;
          for (pt in fn)
            Tt[pt] === void 0 && (Tt[pt] = fn[pt]);
        }
        if (xt || Ln) {
          var vn = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          xt && ye(Tt, vn), Ln && Mt(Tt, vn);
        }
        return Ie(x, xt, Ln, mt, Oe, Lr.current, Tt);
      }
    }
    var Ze = Ct.ReactCurrentOwner, it = Ct.ReactDebugCurrentFrame;
    function Bt(x) {
      if (x) {
        var Z = x._owner, ge = Cn(x.type, x._source, Z ? Z.type : null);
        it.setExtraStackFrame(ge);
      } else
        it.setExtraStackFrame(null);
    }
    var Mr;
    Mr = !1;
    function Bn(x) {
      return typeof x == "object" && x !== null && x.$$typeof === _;
    }
    function wr() {
      {
        if (Ze.current) {
          var x = Pe(Ze.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Pi(x) {
      return "";
    }
    var to = {};
    function no(x) {
      {
        var Z = wr();
        if (!Z) {
          var ge = typeof x == "string" ? x : x.displayName || x.name;
          ge && (Z = `

Check the top-level render call using <` + ge + ">.");
        }
        return Z;
      }
    }
    function hl(x, Z) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var ge = no(Z);
        if (to[ge])
          return;
        to[ge] = !0;
        var Oe = "";
        x && x._owner && x._owner !== Ze.current && (Oe = " It was passed a child from " + Pe(x._owner.type) + "."), Bt(x), Ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Oe), Bt(null);
      }
    }
    function ml(x, Z) {
      {
        if (typeof x != "object")
          return;
        if (On(x))
          for (var ge = 0; ge < x.length; ge++) {
            var Oe = x[ge];
            Bn(Oe) && hl(Oe, Z);
          }
        else if (Bn(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var mt = we(x);
          if (typeof mt == "function" && mt !== x.entries)
            for (var pt = mt.call(x), Tt; !(Tt = pt.next()).done; )
              Bn(Tt.value) && hl(Tt.value, Z);
        }
      }
    }
    function ro(x) {
      {
        var Z = x.type;
        if (Z == null || typeof Z == "string")
          return;
        var ge;
        if (typeof Z == "function")
          ge = Z.propTypes;
        else if (typeof Z == "object" && (Z.$$typeof === Y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Z.$$typeof === q))
          ge = Z.propTypes;
        else
          return;
        if (ge) {
          var Oe = Pe(Z);
          jn(ge, x.props, "prop", Oe, x);
        } else if (Z.PropTypes !== void 0 && !Mr) {
          Mr = !0;
          var mt = Pe(Z);
          Ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", mt || "Unknown");
        }
        typeof Z.getDefaultProps == "function" && !Z.getDefaultProps.isReactClassApproved && Ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nr(x) {
      {
        for (var Z = Object.keys(x.props), ge = 0; ge < Z.length; ge++) {
          var Oe = Z[ge];
          if (Oe !== "children" && Oe !== "key") {
            Bt(x), Ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), Bt(null);
            break;
          }
        }
        x.ref !== null && (Bt(x), Ue("Invalid attribute `ref` supplied to `React.Fragment`."), Bt(null));
      }
    }
    var zr = {};
    function fr(x, Z, ge, Oe, mt, pt) {
      {
        var Tt = Wt(x);
        if (!Tt) {
          var xt = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (xt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = Pi();
          Ln ? xt += Ln : xt += wr();
          var fn;
          x === null ? fn = "null" : On(x) ? fn = "array" : x !== void 0 && x.$$typeof === _ ? (fn = "<" + (Pe(x.type) || "Unknown") + " />", xt = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof x, Ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, xt);
        }
        var vn = Ut(x, Z, ge, mt, pt);
        if (vn == null)
          return vn;
        if (Tt) {
          var dr = Z.children;
          if (dr !== void 0)
            if (Oe)
              if (On(dr)) {
                for (var Xa = 0; Xa < dr.length; Xa++)
                  ml(dr[Xa], x);
                Object.freeze && Object.freeze(dr);
              } else
                Ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ml(dr, x);
        }
        if (Rn.call(Z, "key")) {
          var Ka = Pe(x), yt = Object.keys(Z).filter(function(ao) {
            return ao !== "key";
          }), Et = yt.length > 0 ? "{key: someKey, " + yt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!zr[Ka + Et]) {
            var Za = yt.length > 0 ? "{" + yt.join(": ..., ") + ": ...}" : "{}";
            Ue(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Et, Ka, Za, Ka), zr[Ka + Et] = !0;
          }
        }
        return x === ee ? Nr(vn) : ro(vn), vn;
      }
    }
    function pi(x, Z, ge) {
      return fr(x, Z, ge, !0);
    }
    function qa(x, Z, ge) {
      return fr(x, Z, ge, !1);
    }
    var vi = qa, hi = pi;
    nv.Fragment = ee, nv.jsx = vi, nv.jsxs = hi;
  }()), nv;
}
var dx;
function Tk() {
  return dx || (dx = 1, process.env.NODE_ENV === "production" ? Zm.exports = xk() : Zm.exports = bk()), Zm.exports;
}
var zt = Tk(), at = lv();
const Tx = /* @__PURE__ */ bx(at);
var qf = {}, ey = { exports: {} }, Qa = {}, ty = { exports: {} }, C0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var px;
function wk() {
  return px || (px = 1, function(S) {
    function _(ne, Le) {
      var pe = ne.length;
      ne.push(Le);
      e: for (; 0 < pe; ) {
        var O = pe - 1 >>> 1, V = ne[O];
        if (0 < W(V, Le)) ne[O] = Le, ne[pe] = V, pe = O;
        else break e;
      }
    }
    function b(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    function ee(ne) {
      if (ne.length === 0) return null;
      var Le = ne[0], pe = ne.pop();
      if (pe !== Le) {
        ne[0] = pe;
        e: for (var O = 0, V = ne.length, Xe = V >>> 1; O < Xe; ) {
          var Be = 2 * (O + 1) - 1, ft = ne[Be], ot = Be + 1, et = ne[ot];
          if (0 > W(ft, pe)) ot < V && 0 > W(et, ft) ? (ne[O] = et, ne[ot] = pe, O = ot) : (ne[O] = ft, ne[Be] = pe, O = Be);
          else if (ot < V && 0 > W(et, pe)) ne[O] = et, ne[ot] = pe, O = ot;
          else break e;
        }
      }
      return Le;
    }
    function W(ne, Le) {
      var pe = ne.sortIndex - Le.sortIndex;
      return pe !== 0 ? pe : ne.id - Le.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Q = performance;
      S.unstable_now = function() {
        return Q.now();
      };
    } else {
      var g = Date, le = g.now();
      S.unstable_now = function() {
        return g.now() - le;
      };
    }
    var Y = [], X = [], ve = 1, q = null, P = 3, K = !1, ce = !1, ie = !1, we = typeof setTimeout == "function" ? setTimeout : null, Ct = typeof clearTimeout == "function" ? clearTimeout : null, Ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Fe(ne) {
      for (var Le = b(X); Le !== null; ) {
        if (Le.callback === null) ee(X);
        else if (Le.startTime <= ne) ee(X), Le.sortIndex = Le.expirationTime, _(Y, Le);
        else break;
        Le = b(X);
      }
    }
    function je(ne) {
      if (ie = !1, Fe(ne), !ce) if (b(Y) !== null) ce = !0, Lt(De);
      else {
        var Le = b(X);
        Le !== null && Ce(je, Le.startTime - ne);
      }
    }
    function De(ne, Le) {
      ce = !1, ie && (ie = !1, Ct(Dt), Dt = -1), K = !0;
      var pe = P;
      try {
        for (Fe(Le), q = b(Y); q !== null && (!(q.expirationTime > Le) || ne && !_t()); ) {
          var O = q.callback;
          if (typeof O == "function") {
            q.callback = null, P = q.priorityLevel;
            var V = O(q.expirationTime <= Le);
            Le = S.unstable_now(), typeof V == "function" ? q.callback = V : q === b(Y) && ee(Y), Fe(Le);
          } else ee(Y);
          q = b(Y);
        }
        if (q !== null) var Xe = !0;
        else {
          var Be = b(X);
          Be !== null && Ce(je, Be.startTime - Le), Xe = !1;
        }
        return Xe;
      } finally {
        q = null, P = pe, K = !1;
      }
    }
    var rt = !1, Me = null, Dt = -1, Ot = 5, Wt = -1;
    function _t() {
      return !(S.unstable_now() - Wt < Ot);
    }
    function St() {
      if (Me !== null) {
        var ne = S.unstable_now();
        Wt = ne;
        var Le = !0;
        try {
          Le = Me(!0, ne);
        } finally {
          Le ? Pe() : (rt = !1, Me = null);
        }
      } else rt = !1;
    }
    var Pe;
    if (typeof Ue == "function") Pe = function() {
      Ue(St);
    };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), At = xe.port2;
      xe.port1.onmessage = St, Pe = function() {
        At.postMessage(null);
      };
    } else Pe = function() {
      we(St, 0);
    };
    function Lt(ne) {
      Me = ne, rt || (rt = !0, Pe());
    }
    function Ce(ne, Le) {
      Dt = we(function() {
        ne(S.unstable_now());
      }, Le);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, S.unstable_continueExecution = function() {
      ce || K || (ce = !0, Lt(De));
    }, S.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ot = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, S.unstable_getFirstCallbackNode = function() {
      return b(Y);
    }, S.unstable_next = function(ne) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var Le = 3;
          break;
        default:
          Le = P;
      }
      var pe = P;
      P = Le;
      try {
        return ne();
      } finally {
        P = pe;
      }
    }, S.unstable_pauseExecution = function() {
    }, S.unstable_requestPaint = function() {
    }, S.unstable_runWithPriority = function(ne, Le) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var pe = P;
      P = ne;
      try {
        return Le();
      } finally {
        P = pe;
      }
    }, S.unstable_scheduleCallback = function(ne, Le, pe) {
      var O = S.unstable_now();
      switch (typeof pe == "object" && pe !== null ? (pe = pe.delay, pe = typeof pe == "number" && 0 < pe ? O + pe : O) : pe = O, ne) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = pe + V, ne = { id: ve++, callback: Le, priorityLevel: ne, startTime: pe, expirationTime: V, sortIndex: -1 }, pe > O ? (ne.sortIndex = pe, _(X, ne), b(Y) === null && ne === b(X) && (ie ? (Ct(Dt), Dt = -1) : ie = !0, Ce(je, pe - O))) : (ne.sortIndex = V, _(Y, ne), ce || K || (ce = !0, Lt(De))), ne;
    }, S.unstable_shouldYield = _t, S.unstable_wrapCallback = function(ne) {
      var Le = P;
      return function() {
        var pe = P;
        P = Le;
        try {
          return ne.apply(this, arguments);
        } finally {
          P = pe;
        }
      };
    };
  }(C0)), C0;
}
var R0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vx;
function _k() {
  return vx || (vx = 1, function(S) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var _ = !1, b = 5;
      function ee(oe, L) {
        var fe = oe.length;
        oe.push(L), g(oe, L, fe);
      }
      function W(oe) {
        return oe.length === 0 ? null : oe[0];
      }
      function Q(oe) {
        if (oe.length === 0)
          return null;
        var L = oe[0], fe = oe.pop();
        return fe !== L && (oe[0] = fe, le(oe, fe, 0)), L;
      }
      function g(oe, L, fe) {
        for (var Qe = fe; Qe > 0; ) {
          var ye = Qe - 1 >>> 1, Mt = oe[ye];
          if (Y(Mt, L) > 0)
            oe[ye] = L, oe[Qe] = Mt, Qe = ye;
          else
            return;
        }
      }
      function le(oe, L, fe) {
        for (var Qe = fe, ye = oe.length, Mt = ye >>> 1; Qe < Mt; ) {
          var Ie = (Qe + 1) * 2 - 1, Ut = oe[Ie], Ze = Ie + 1, it = oe[Ze];
          if (Y(Ut, L) < 0)
            Ze < ye && Y(it, Ut) < 0 ? (oe[Qe] = it, oe[Ze] = L, Qe = Ze) : (oe[Qe] = Ut, oe[Ie] = L, Qe = Ie);
          else if (Ze < ye && Y(it, L) < 0)
            oe[Qe] = it, oe[Ze] = L, Qe = Ze;
          else
            return;
        }
      }
      function Y(oe, L) {
        var fe = oe.sortIndex - L.sortIndex;
        return fe !== 0 ? fe : oe.id - L.id;
      }
      var X = 1, ve = 2, q = 3, P = 4, K = 5;
      function ce(oe, L) {
      }
      var ie = typeof performance == "object" && typeof performance.now == "function";
      if (ie) {
        var we = performance;
        S.unstable_now = function() {
          return we.now();
        };
      } else {
        var Ct = Date, Ue = Ct.now();
        S.unstable_now = function() {
          return Ct.now() - Ue;
        };
      }
      var Fe = 1073741823, je = -1, De = 250, rt = 5e3, Me = 1e4, Dt = Fe, Ot = [], Wt = [], _t = 1, St = null, Pe = q, xe = !1, At = !1, Lt = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, Le = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function pe(oe) {
        for (var L = W(Wt); L !== null; ) {
          if (L.callback === null)
            Q(Wt);
          else if (L.startTime <= oe)
            Q(Wt), L.sortIndex = L.expirationTime, ee(Ot, L);
          else
            return;
          L = W(Wt);
        }
      }
      function O(oe) {
        if (Lt = !1, pe(oe), !At)
          if (W(Ot) !== null)
            At = !0, xn(V);
          else {
            var L = W(Wt);
            L !== null && Pn(O, L.startTime - oe);
          }
      }
      function V(oe, L) {
        At = !1, Lt && (Lt = !1, Lr()), xe = !0;
        var fe = Pe;
        try {
          var Qe;
          if (!_) return Xe(oe, L);
        } finally {
          St = null, Pe = fe, xe = !1;
        }
      }
      function Xe(oe, L) {
        var fe = L;
        for (pe(fe), St = W(Ot); St !== null && !(St.expirationTime > fe && (!oe || Kr())); ) {
          var Qe = St.callback;
          if (typeof Qe == "function") {
            St.callback = null, Pe = St.priorityLevel;
            var ye = St.expirationTime <= fe, Mt = Qe(ye);
            fe = S.unstable_now(), typeof Mt == "function" ? St.callback = Mt : St === W(Ot) && Q(Ot), pe(fe);
          } else
            Q(Ot);
          St = W(Ot);
        }
        if (St !== null)
          return !0;
        var Ie = W(Wt);
        return Ie !== null && Pn(O, Ie.startTime - fe), !1;
      }
      function Be(oe, L) {
        switch (oe) {
          case X:
          case ve:
          case q:
          case P:
          case K:
            break;
          default:
            oe = q;
        }
        var fe = Pe;
        Pe = oe;
        try {
          return L();
        } finally {
          Pe = fe;
        }
      }
      function ft(oe) {
        var L;
        switch (Pe) {
          case X:
          case ve:
          case q:
            L = q;
            break;
          default:
            L = Pe;
            break;
        }
        var fe = Pe;
        Pe = L;
        try {
          return oe();
        } finally {
          Pe = fe;
        }
      }
      function ot(oe) {
        var L = Pe;
        return function() {
          var fe = Pe;
          Pe = L;
          try {
            return oe.apply(this, arguments);
          } finally {
            Pe = fe;
          }
        };
      }
      function et(oe, L, fe) {
        var Qe = S.unstable_now(), ye;
        if (typeof fe == "object" && fe !== null) {
          var Mt = fe.delay;
          typeof Mt == "number" && Mt > 0 ? ye = Qe + Mt : ye = Qe;
        } else
          ye = Qe;
        var Ie;
        switch (oe) {
          case X:
            Ie = je;
            break;
          case ve:
            Ie = De;
            break;
          case K:
            Ie = Dt;
            break;
          case P:
            Ie = Me;
            break;
          case q:
          default:
            Ie = rt;
            break;
        }
        var Ut = ye + Ie, Ze = {
          id: _t++,
          callback: L,
          priorityLevel: oe,
          startTime: ye,
          expirationTime: Ut,
          sortIndex: -1
        };
        return ye > Qe ? (Ze.sortIndex = ye, ee(Wt, Ze), W(Ot) === null && Ze === W(Wt) && (Lt ? Lr() : Lt = !0, Pn(O, ye - Qe))) : (Ze.sortIndex = Ut, ee(Ot, Ze), !At && !xe && (At = !0, xn(V))), Ze;
      }
      function dt() {
      }
      function Ke() {
        !At && !xe && (At = !0, xn(V));
      }
      function Qt() {
        return W(Ot);
      }
      function En(oe) {
        oe.callback = null;
      }
      function Kn() {
        return Pe;
      }
      var cn = !1, Fn = null, Cn = -1, Rn = b, rr = -1;
      function Kr() {
        var oe = S.unstable_now() - rr;
        return !(oe < Rn);
      }
      function sr() {
      }
      function jn(oe) {
        if (oe < 0 || oe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        oe > 0 ? Rn = Math.floor(1e3 / oe) : Rn = b;
      }
      var It = function() {
        if (Fn !== null) {
          var oe = S.unstable_now();
          rr = oe;
          var L = !0, fe = !0;
          try {
            fe = Fn(L, oe);
          } finally {
            fe ? On() : (cn = !1, Fn = null);
          }
        } else
          cn = !1;
      }, On;
      if (typeof Le == "function")
        On = function() {
          Le(It);
        };
      else if (typeof MessageChannel < "u") {
        var yn = new MessageChannel(), ha = yn.port2;
        yn.port1.onmessage = It, On = function() {
          ha.postMessage(null);
        };
      } else
        On = function() {
          Ce(It, 0);
        };
      function xn(oe) {
        Fn = oe, cn || (cn = !0, On());
      }
      function Pn(oe, L) {
        Cn = Ce(function() {
          oe(S.unstable_now());
        }, L);
      }
      function Lr() {
        ne(Cn), Cn = -1;
      }
      var cr = sr, ma = null;
      S.unstable_IdlePriority = K, S.unstable_ImmediatePriority = X, S.unstable_LowPriority = P, S.unstable_NormalPriority = q, S.unstable_Profiling = ma, S.unstable_UserBlockingPriority = ve, S.unstable_cancelCallback = En, S.unstable_continueExecution = Ke, S.unstable_forceFrameRate = jn, S.unstable_getCurrentPriorityLevel = Kn, S.unstable_getFirstCallbackNode = Qt, S.unstable_next = ft, S.unstable_pauseExecution = dt, S.unstable_requestPaint = cr, S.unstable_runWithPriority = Be, S.unstable_scheduleCallback = et, S.unstable_shouldYield = Kr, S.unstable_wrapCallback = ot, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(R0)), R0;
}
var hx;
function wx() {
  return hx || (hx = 1, process.env.NODE_ENV === "production" ? ty.exports = wk() : ty.exports = _k()), ty.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mx;
function kk() {
  if (mx) return Qa;
  mx = 1;
  var S = lv(), _ = wx();
  function b(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ee = /* @__PURE__ */ new Set(), W = {};
  function Q(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (W[n] = r, n = 0; n < r.length; n++) ee.add(r[n]);
  }
  var le = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Y = Object.prototype.hasOwnProperty, X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, q = {};
  function P(n) {
    return Y.call(q, n) ? !0 : Y.call(ve, n) ? !1 : X.test(n) ? q[n] = !0 : (ve[n] = !0, !1);
  }
  function K(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ce(n, r, l, u) {
    if (r === null || typeof r > "u" || K(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ie(n, r, l, u, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var we = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    we[n] = new ie(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    we[r] = new ie(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    we[n] = new ie(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    we[n] = new ie(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    we[n] = new ie(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    we[n] = new ie(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    we[n] = new ie(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    we[n] = new ie(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    we[n] = new ie(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ct = /[\-:]([a-z])/g;
  function Ue(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ct,
      Ue
    );
    we[r] = new ie(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ct, Ue);
    we[r] = new ie(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ct, Ue);
    we[r] = new ie(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    we[n] = new ie(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), we.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    we[n] = new ie(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Fe(n, r, l, u) {
    var c = we.hasOwnProperty(r) ? we[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ce(r, l, c, u) && (l = null), u || c === null ? P(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var je = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), rt = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), Dt = Symbol.for("react.strict_mode"), Ot = Symbol.for("react.profiler"), Wt = Symbol.for("react.provider"), _t = Symbol.for("react.context"), St = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), Lt = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function Le(n) {
    return n === null || typeof n != "object" ? null : (n = ne && n[ne] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var pe = Object.assign, O;
  function V(n) {
    if (O === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      O = r && r[1] || "";
    }
    return `
` + O + n;
  }
  var Xe = !1;
  function Be(n, r) {
    if (!n || Xe) return "";
    Xe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (F) {
          var u = F;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (F) {
          u = F;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          u = F;
        }
        n();
      }
    } catch (F) {
      if (F && u && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = u.stack.split(`
`), m = c.length - 1, C = d.length - 1; 1 <= m && 0 <= C && c[m] !== d[C]; ) C--;
        for (; 1 <= m && 0 <= C; m--, C--) if (c[m] !== d[C]) {
          if (m !== 1 || C !== 1)
            do
              if (m--, C--, 0 > C || c[m] !== d[C]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= C);
          break;
        }
      }
    } finally {
      Xe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? V(n) : "";
  }
  function ft(n) {
    switch (n.tag) {
      case 5:
        return V(n.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Be(n.type, !1), n;
      case 11:
        return n = Be(n.type.render, !1), n;
      case 1:
        return n = Be(n.type, !0), n;
      default:
        return "";
    }
  }
  function ot(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Me:
        return "Fragment";
      case rt:
        return "Portal";
      case Ot:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case _t:
        return (n.displayName || "Context") + ".Consumer";
      case Wt:
        return (n._context.displayName || "Context") + ".Provider";
      case St:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case At:
        return r = n.displayName || null, r !== null ? r : ot(n.type) || "Memo";
      case Lt:
        r = n._payload, n = n._init;
        try {
          return ot(n(r));
        } catch {
        }
    }
    return null;
  }
  function et(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ot(r);
      case 8:
        return r === Dt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function dt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ke(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Qt(n) {
    var r = Ke(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        u = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(m) {
        u = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function En(n) {
    n._valueTracker || (n._valueTracker = Qt(n));
  }
  function Kn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = Ke(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Fn(n, r) {
    var l = r.checked;
    return pe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = dt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Rn(n, r) {
    r = r.checked, r != null && Fe(n, "checked", r, !1);
  }
  function rr(n, r) {
    Rn(n, r);
    var l = dt(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sr(n, r.type, l) : r.hasOwnProperty("defaultValue") && sr(n, r.type, dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Kr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sr(n, r, l) {
    (r !== "number" || cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var jn = Array.isArray;
  function It(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + dt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function On(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(b(91));
    return pe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function yn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(b(92));
        if (jn(l)) {
          if (1 < l.length) throw Error(b(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: dt(l) };
  }
  function ha(n, r) {
    var l = dt(r.value), u = dt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function xn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Pn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Lr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Pn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var cr, ma = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (cr = cr || document.createElement("div"), cr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = cr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function oe(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var L = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, fe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(L).forEach(function(n) {
    fe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), L[r] = L[n];
    });
  });
  function Qe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || L.hasOwnProperty(n) && L[n] ? ("" + r).trim() : r + "px";
  }
  function ye(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, c = Qe(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Mt = pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ie(n, r) {
    if (r) {
      if (Mt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(b(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(b(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(b(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(b(62));
    }
  }
  function Ut(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ze = null;
  function it(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Bt = null, Mr = null, Bn = null;
  function wr(n) {
    if (n = Ye(n)) {
      if (typeof Bt != "function") throw Error(b(280));
      var r = n.stateNode;
      r && (r = Tn(r), Bt(n.stateNode, n.type, r));
    }
  }
  function Pi(n) {
    Mr ? Bn ? Bn.push(n) : Bn = [n] : Mr = n;
  }
  function to() {
    if (Mr) {
      var n = Mr, r = Bn;
      if (Bn = Mr = null, wr(n), r) for (n = 0; n < r.length; n++) wr(r[n]);
    }
  }
  function no(n, r) {
    return n(r);
  }
  function hl() {
  }
  var ml = !1;
  function ro(n, r, l) {
    if (ml) return n(r, l);
    ml = !0;
    try {
      return no(n, r, l);
    } finally {
      ml = !1, (Mr !== null || Bn !== null) && (hl(), to());
    }
  }
  function Nr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = Tn(l);
    if (u === null) return null;
    l = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(b(231, r, typeof l));
    return l;
  }
  var zr = !1;
  if (le) try {
    var fr = {};
    Object.defineProperty(fr, "passive", { get: function() {
      zr = !0;
    } }), window.addEventListener("test", fr, fr), window.removeEventListener("test", fr, fr);
  } catch {
    zr = !1;
  }
  function pi(n, r, l, u, c, d, m, C, T) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, F);
    } catch (re) {
      this.onError(re);
    }
  }
  var qa = !1, vi = null, hi = !1, x = null, Z = { onError: function(n) {
    qa = !0, vi = n;
  } };
  function ge(n, r, l, u, c, d, m, C, T) {
    qa = !1, vi = null, pi.apply(Z, arguments);
  }
  function Oe(n, r, l, u, c, d, m, C, T) {
    if (ge.apply(this, arguments), qa) {
      if (qa) {
        var F = vi;
        qa = !1, vi = null;
      } else throw Error(b(198));
      hi || (hi = !0, x = F);
    }
  }
  function mt(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function pt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Tt(n) {
    if (mt(n) !== n) throw Error(b(188));
  }
  function xt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = mt(n), r === null) throw Error(b(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Tt(c), n;
          if (d === u) return Tt(c), r;
          d = d.sibling;
        }
        throw Error(b(188));
      }
      if (l.return !== u.return) l = c, u = d;
      else {
        for (var m = !1, C = c.child; C; ) {
          if (C === l) {
            m = !0, l = c, u = d;
            break;
          }
          if (C === u) {
            m = !0, u = c, l = d;
            break;
          }
          C = C.sibling;
        }
        if (!m) {
          for (C = d.child; C; ) {
            if (C === l) {
              m = !0, l = d, u = c;
              break;
            }
            if (C === u) {
              m = !0, u = d, l = c;
              break;
            }
            C = C.sibling;
          }
          if (!m) throw Error(b(189));
        }
      }
      if (l.alternate !== u) throw Error(b(190));
    }
    if (l.tag !== 3) throw Error(b(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ln(n) {
    return n = xt(n), n !== null ? fn(n) : null;
  }
  function fn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = fn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var vn = _.unstable_scheduleCallback, dr = _.unstable_cancelCallback, Xa = _.unstable_shouldYield, Ka = _.unstable_requestPaint, yt = _.unstable_now, Et = _.unstable_getCurrentPriorityLevel, Za = _.unstable_ImmediatePriority, ao = _.unstable_UserBlockingPriority, io = _.unstable_NormalPriority, yl = _.unstable_LowPriority, Xo = _.unstable_IdlePriority, gl = null, Zr = null;
  function Qu(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function") try {
      Zr.onCommitFiberRoot(gl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ar = Math.clz32 ? Math.clz32 : Ko, sc = Math.log, cc = Math.LN2;
  function Ko(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (sc(n) / cc | 0) | 0;
  }
  var Sl = 64, ya = 4194304;
  function Ja(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ei(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var C = m & ~c;
      C !== 0 ? u = Ja(C) : (d &= m, d !== 0 && (u = Ja(d)));
    } else m = l & ~c, m !== 0 ? u = Ja(m) : d !== 0 && (u = Ja(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & c) === 0 && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - Ar(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function Zo(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function lo(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Ar(d), C = 1 << m, T = c[m];
      T === -1 ? ((C & l) === 0 || (C & u) !== 0) && (c[m] = Zo(C, r)) : T <= r && (n.expiredLanes |= C), d &= ~C;
    }
  }
  function El(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Jo() {
    var n = Sl;
    return Sl <<= 1, (Sl & 4194240) === 0 && (Sl = 64), n;
  }
  function eu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Bi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ar(r), n[r] = l;
  }
  function Xf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Ar(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Ar(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Gt = 0;
  function tu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Vt, Gu, mi, ct, nu, pr = !1, yi = [], Ur = null, gi = null, hn = null, nn = /* @__PURE__ */ new Map(), Cl = /* @__PURE__ */ new Map(), Zn = [], Hr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Da(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ur = null;
        break;
      case "dragenter":
      case "dragleave":
        gi = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        nn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cl.delete(r.pointerId);
    }
  }
  function oo(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ye(r), r !== null && Gu(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qu(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return Ur = oo(Ur, n, r, l, u, c), !0;
      case "dragenter":
        return gi = oo(gi, n, r, l, u, c), !0;
      case "mouseover":
        return hn = oo(hn, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return nn.set(d, oo(nn.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cl.set(d, oo(Cl.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function Xu(n) {
    var r = yo(n.target);
    if (r !== null) {
      var l = mt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = pt(l), r !== null) {
            n.blockedOn = r, nu(n.priority, function() {
              mi(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Rl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = iu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        Ze = u, l.target.dispatchEvent(u), Ze = null;
      } else return r = Ye(l), r !== null && Gu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function uo(n, r, l) {
    Rl(n) && l.delete(r);
  }
  function Kf() {
    pr = !1, Ur !== null && Rl(Ur) && (Ur = null), gi !== null && Rl(gi) && (gi = null), hn !== null && Rl(hn) && (hn = null), nn.forEach(uo), Cl.forEach(uo);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, pr || (pr = !0, _.unstable_scheduleCallback(_.unstable_NormalPriority, Kf)));
  }
  function ti(n) {
    function r(c) {
      return Oa(c, n);
    }
    if (0 < yi.length) {
      Oa(yi[0], n);
      for (var l = 1; l < yi.length; l++) {
        var u = yi[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Ur !== null && Oa(Ur, n), gi !== null && Oa(gi, n), hn !== null && Oa(hn, n), nn.forEach(r), Cl.forEach(r), l = 0; l < Zn.length; l++) u = Zn[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Zn.length && (l = Zn[0], l.blockedOn === null); ) Xu(l), l.blockedOn === null && Zn.shift();
  }
  var Si = je.ReactCurrentBatchConfig, La = !0;
  function ru(n, r, l, u) {
    var c = Gt, d = Si.transition;
    Si.transition = null;
    try {
      Gt = 1, xl(n, r, l, u);
    } finally {
      Gt = c, Si.transition = d;
    }
  }
  function au(n, r, l, u) {
    var c = Gt, d = Si.transition;
    Si.transition = null;
    try {
      Gt = 4, xl(n, r, l, u);
    } finally {
      Gt = c, Si.transition = d;
    }
  }
  function xl(n, r, l, u) {
    if (La) {
      var c = iu(n, r, l, u);
      if (c === null) Rc(n, r, u, so, l), Da(n, u);
      else if (qu(c, n, r, l, u)) u.stopPropagation();
      else if (Da(n, u), r & 4 && -1 < Hr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ye(c);
          if (d !== null && Vt(d), d = iu(n, r, l, u), d === null && Rc(n, r, u, so, l), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Rc(n, r, u, null, l);
    }
  }
  var so = null;
  function iu(n, r, l, u) {
    if (so = null, n = it(u), n = yo(n), n !== null) if (r = mt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = pt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return so = n, null;
  }
  function lu(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Et()) {
          case Za:
            return 1;
          case ao:
            return 4;
          case io:
          case yl:
            return 16;
          case Xo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ni = null, h = null, R = null;
  function H() {
    if (R) return R;
    var n, r = h, l = r.length, u, c = "value" in ni ? ni.value : ni.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (u = 1; u <= m && r[l - u] === c[d - u]; u++) ;
    return R = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function B(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function de() {
    return !0;
  }
  function Ge() {
    return !1;
  }
  function me(n) {
    function r(l, u, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var C in n) n.hasOwnProperty(C) && (l = n[C], this[C] = l ? l(d) : d[C]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? de : Ge, this.isPropagationStopped = Ge, this;
    }
    return pe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = de);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = de);
    }, persist: function() {
    }, isPersistent: de }), r;
  }
  var tt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, wt = me(tt), $t = pe({}, tt, { view: 0, detail: 0 }), dn = me($t), rn, Rt, an, bn = pe({}, $t, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== an && (an && n.type === "mousemove" ? (rn = n.screenX - an.screenX, Rt = n.screenY - an.screenY) : Rt = rn = 0, an = n), rn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Rt;
  } }), bl = me(bn), Ku = pe({}, bn, { dataTransfer: 0 }), $i = me(Ku), Zu = pe({}, $t, { relatedTarget: 0 }), co = me(Zu), Zf = pe({}, tt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fc = me(Zf), Jf = pe({}, tt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ov = me(Jf), ed = pe({}, tt, { data: 0 }), td = me(ed), uv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, sv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, iy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ii(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = iy[n]) ? !!r[n] : !1;
  }
  function nd() {
    return Ii;
  }
  var rd = pe({}, $t, { key: function(n) {
    if (n.key) {
      var r = uv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = B(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? sv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nd, charCode: function(n) {
    return n.type === "keypress" ? B(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? B(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ad = me(rd), id = pe({}, bn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cv = me(id), dc = pe({}, $t, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nd }), fv = me(dc), Jr = pe({}, tt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yi = me(Jr), Vn = pe({}, bn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wi = me(Vn), ld = [9, 13, 27, 32], ou = le && "CompositionEvent" in window, Ju = null;
  le && "documentMode" in document && (Ju = document.documentMode);
  var es = le && "TextEvent" in window && !Ju, dv = le && (!ou || Ju && 8 < Ju && 11 >= Ju), pv = " ", pc = !1;
  function vv(n, r) {
    switch (n) {
      case "keyup":
        return ld.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var uu = !1;
  function mv(n, r) {
    switch (n) {
      case "compositionend":
        return hv(r);
      case "keypress":
        return r.which !== 32 ? null : (pc = !0, pv);
      case "textInput":
        return n = r.data, n === pv && pc ? null : n;
      default:
        return null;
    }
  }
  function ly(n, r) {
    if (uu) return n === "compositionend" || !ou && vv(n, r) ? (n = H(), R = h = ni = null, uu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return dv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var oy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!oy[n.type] : r === "textarea";
  }
  function od(n, r, l, u) {
    Pi(u), r = ls(r, "onChange"), 0 < r.length && (l = new wt("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var Ei = null, fo = null;
  function gv(n) {
    ho(n, 0);
  }
  function ts(n) {
    var r = ai(n);
    if (Kn(r)) return n;
  }
  function uy(n, r) {
    if (n === "change") return r;
  }
  var Sv = !1;
  if (le) {
    var ud;
    if (le) {
      var sd = "oninput" in document;
      if (!sd) {
        var Ev = document.createElement("div");
        Ev.setAttribute("oninput", "return;"), sd = typeof Ev.oninput == "function";
      }
      ud = sd;
    } else ud = !1;
    Sv = ud && (!document.documentMode || 9 < document.documentMode);
  }
  function Cv() {
    Ei && (Ei.detachEvent("onpropertychange", Rv), fo = Ei = null);
  }
  function Rv(n) {
    if (n.propertyName === "value" && ts(fo)) {
      var r = [];
      od(r, fo, n, it(n)), ro(gv, r);
    }
  }
  function sy(n, r, l) {
    n === "focusin" ? (Cv(), Ei = r, fo = l, Ei.attachEvent("onpropertychange", Rv)) : n === "focusout" && Cv();
  }
  function xv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ts(fo);
  }
  function cy(n, r) {
    if (n === "click") return ts(r);
  }
  function bv(n, r) {
    if (n === "input" || n === "change") return ts(r);
  }
  function fy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ri = typeof Object.is == "function" ? Object.is : fy;
  function ns(n, r) {
    if (ri(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!Y.call(r, c) || !ri(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Tv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function vc(n, r) {
    var l = Tv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Tv(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function rs() {
    for (var n = window, r = cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = cn(n.document);
    }
    return r;
  }
  function hc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function su(n) {
    var r = rs(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (u !== null && hc(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = vc(l, d);
          var m = vc(
            l,
            u
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var dy = le && "documentMode" in document && 11 >= document.documentMode, cu = null, cd = null, as = null, fd = !1;
  function dd(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    fd || cu == null || cu !== cn(u) || (u = cu, "selectionStart" in u && hc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), as && ns(as, u) || (as = u, u = ls(cd, "onSelect"), 0 < u.length && (r = new wt("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = cu)));
  }
  function mc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var po = { animationend: mc("Animation", "AnimationEnd"), animationiteration: mc("Animation", "AnimationIteration"), animationstart: mc("Animation", "AnimationStart"), transitionend: mc("Transition", "TransitionEnd") }, vr = {}, pd = {};
  le && (pd = document.createElement("div").style, "AnimationEvent" in window || (delete po.animationend.animation, delete po.animationiteration.animation, delete po.animationstart.animation), "TransitionEvent" in window || delete po.transitionend.transition);
  function yc(n) {
    if (vr[n]) return vr[n];
    if (!po[n]) return n;
    var r = po[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in pd) return vr[n] = r[l];
    return n;
  }
  var wv = yc("animationend"), _v = yc("animationiteration"), kv = yc("animationstart"), Dv = yc("transitionend"), vd = /* @__PURE__ */ new Map(), gc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ma(n, r) {
    vd.set(n, r), Q(r, [n]);
  }
  for (var hd = 0; hd < gc.length; hd++) {
    var vo = gc[hd], py = vo.toLowerCase(), vy = vo[0].toUpperCase() + vo.slice(1);
    Ma(py, "on" + vy);
  }
  Ma(wv, "onAnimationEnd"), Ma(_v, "onAnimationIteration"), Ma(kv, "onAnimationStart"), Ma("dblclick", "onDoubleClick"), Ma("focusin", "onFocus"), Ma("focusout", "onBlur"), Ma(Dv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Q("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Q("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Q("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Q("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Q("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Q("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), md = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function Sc(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, Oe(u, r, void 0, n), n.currentTarget = null;
  }
  function ho(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = u.length - 1; 0 <= m; m--) {
          var C = u[m], T = C.instance, F = C.currentTarget;
          if (C = C.listener, T !== d && c.isPropagationStopped()) break e;
          Sc(c, C, F), d = T;
        }
        else for (m = 0; m < u.length; m++) {
          if (C = u[m], T = C.instance, F = C.currentTarget, C = C.listener, T !== d && c.isPropagationStopped()) break e;
          Sc(c, C, F), d = T;
        }
      }
    }
    if (hi) throw n = x, hi = !1, x = null, n;
  }
  function en(n, r) {
    var l = r[ss];
    l === void 0 && (l = r[ss] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (Ov(r, n, 2, !1), l.add(u));
  }
  function Ec(n, r, l) {
    var u = 0;
    r && (u |= 4), Ov(l, n, u, r);
  }
  var Cc = "_reactListening" + Math.random().toString(36).slice(2);
  function fu(n) {
    if (!n[Cc]) {
      n[Cc] = !0, ee.forEach(function(l) {
        l !== "selectionchange" && (md.has(l) || Ec(l, !1, n), Ec(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Cc] || (r[Cc] = !0, Ec("selectionchange", !1, r));
    }
  }
  function Ov(n, r, l, u) {
    switch (lu(r)) {
      case 1:
        var c = ru;
        break;
      case 4:
        c = au;
        break;
      default:
        c = xl;
    }
    l = c.bind(null, r, l, n), c = void 0, !zr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Rc(n, r, l, u, c) {
    var d = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var m = u.tag;
      if (m === 3 || m === 4) {
        var C = u.stateNode.containerInfo;
        if (C === c || C.nodeType === 8 && C.parentNode === c) break;
        if (m === 4) for (m = u.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; C !== null; ) {
          if (m = yo(C), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            u = d = m;
            continue e;
          }
          C = C.parentNode;
        }
      }
      u = u.return;
    }
    ro(function() {
      var F = d, re = it(l), ue = [];
      e: {
        var te = vd.get(n);
        if (te !== void 0) {
          var be = wt, Ne = n;
          switch (n) {
            case "keypress":
              if (B(l) === 0) break e;
            case "keydown":
            case "keyup":
              be = ad;
              break;
            case "focusin":
              Ne = "focus", be = co;
              break;
            case "focusout":
              Ne = "blur", be = co;
              break;
            case "beforeblur":
            case "afterblur":
              be = co;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              be = bl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              be = $i;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              be = fv;
              break;
            case wv:
            case _v:
            case kv:
              be = fc;
              break;
            case Dv:
              be = Yi;
              break;
            case "scroll":
              be = dn;
              break;
            case "wheel":
              be = Wi;
              break;
            case "copy":
            case "cut":
            case "paste":
              be = ov;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              be = cv;
          }
          var He = (r & 4) !== 0, Un = !He && n === "scroll", M = He ? te !== null ? te + "Capture" : null : te;
          He = [];
          for (var k = F, A; k !== null; ) {
            A = k;
            var ae = A.stateNode;
            if (A.tag === 5 && ae !== null && (A = ae, M !== null && (ae = Nr(k, M), ae != null && He.push(du(k, ae, A)))), Un) break;
            k = k.return;
          }
          0 < He.length && (te = new be(te, Ne, null, l, re), ue.push({ event: te, listeners: He }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (te = n === "mouseover" || n === "pointerover", be = n === "mouseout" || n === "pointerout", te && l !== Ze && (Ne = l.relatedTarget || l.fromElement) && (yo(Ne) || Ne[Qi])) break e;
          if ((be || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, be ? (Ne = l.relatedTarget || l.toElement, be = F, Ne = Ne ? yo(Ne) : null, Ne !== null && (Un = mt(Ne), Ne !== Un || Ne.tag !== 5 && Ne.tag !== 6) && (Ne = null)) : (be = null, Ne = F), be !== Ne)) {
            if (He = bl, ae = "onMouseLeave", M = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (He = cv, ae = "onPointerLeave", M = "onPointerEnter", k = "pointer"), Un = be == null ? te : ai(be), A = Ne == null ? te : ai(Ne), te = new He(ae, k + "leave", be, l, re), te.target = Un, te.relatedTarget = A, ae = null, yo(re) === F && (He = new He(M, k + "enter", Ne, l, re), He.target = A, He.relatedTarget = Un, ae = He), Un = ae, be && Ne) t: {
              for (He = be, M = Ne, k = 0, A = He; A; A = wl(A)) k++;
              for (A = 0, ae = M; ae; ae = wl(ae)) A++;
              for (; 0 < k - A; ) He = wl(He), k--;
              for (; 0 < A - k; ) M = wl(M), A--;
              for (; k--; ) {
                if (He === M || M !== null && He === M.alternate) break t;
                He = wl(He), M = wl(M);
              }
              He = null;
            }
            else He = null;
            be !== null && Lv(ue, te, be, He, !1), Ne !== null && Un !== null && Lv(ue, Un, Ne, He, !0);
          }
        }
        e: {
          if (te = F ? ai(F) : window, be = te.nodeName && te.nodeName.toLowerCase(), be === "select" || be === "input" && te.type === "file") var ze = uy;
          else if (yv(te)) if (Sv) ze = bv;
          else {
            ze = xv;
            var Je = sy;
          }
          else (be = te.nodeName) && be.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (ze = cy);
          if (ze && (ze = ze(n, F))) {
            od(ue, ze, l, re);
            break e;
          }
          Je && Je(n, te, F), n === "focusout" && (Je = te._wrapperState) && Je.controlled && te.type === "number" && sr(te, "number", te.value);
        }
        switch (Je = F ? ai(F) : window, n) {
          case "focusin":
            (yv(Je) || Je.contentEditable === "true") && (cu = Je, cd = F, as = null);
            break;
          case "focusout":
            as = cd = cu = null;
            break;
          case "mousedown":
            fd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fd = !1, dd(ue, l, re);
            break;
          case "selectionchange":
            if (dy) break;
          case "keydown":
          case "keyup":
            dd(ue, l, re);
        }
        var nt;
        if (ou) e: {
          switch (n) {
            case "compositionstart":
              var st = "onCompositionStart";
              break e;
            case "compositionend":
              st = "onCompositionEnd";
              break e;
            case "compositionupdate":
              st = "onCompositionUpdate";
              break e;
          }
          st = void 0;
        }
        else uu ? vv(n, l) && (st = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (st = "onCompositionStart");
        st && (dv && l.locale !== "ko" && (uu || st !== "onCompositionStart" ? st === "onCompositionEnd" && uu && (nt = H()) : (ni = re, h = "value" in ni ? ni.value : ni.textContent, uu = !0)), Je = ls(F, st), 0 < Je.length && (st = new td(st, n, null, l, re), ue.push({ event: st, listeners: Je }), nt ? st.data = nt : (nt = hv(l), nt !== null && (st.data = nt)))), (nt = es ? mv(n, l) : ly(n, l)) && (F = ls(F, "onBeforeInput"), 0 < F.length && (re = new td("onBeforeInput", "beforeinput", null, l, re), ue.push({ event: re, listeners: F }), re.data = nt));
      }
      ho(ue, r);
    });
  }
  function du(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Nr(n, l), d != null && u.unshift(du(n, d, c)), d = Nr(n, r), d != null && u.push(du(n, d, c))), n = n.return;
    }
    return u;
  }
  function wl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Lv(n, r, l, u, c) {
    for (var d = r._reactName, m = []; l !== null && l !== u; ) {
      var C = l, T = C.alternate, F = C.stateNode;
      if (T !== null && T === u) break;
      C.tag === 5 && F !== null && (C = F, c ? (T = Nr(l, d), T != null && m.unshift(du(l, T, C))) : c || (T = Nr(l, d), T != null && m.push(du(l, T, C)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Mv = /\r\n?/g, hy = /\u0000|\uFFFD/g;
  function Nv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Mv, `
`).replace(hy, "");
  }
  function xc(n, r, l) {
    if (r = Nv(r), Nv(n) !== r && l) throw Error(b(425));
  }
  function _l() {
  }
  var os = null, mo = null;
  function bc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Tc = typeof setTimeout == "function" ? setTimeout : void 0, yd = typeof clearTimeout == "function" ? clearTimeout : void 0, zv = typeof Promise == "function" ? Promise : void 0, pu = typeof queueMicrotask == "function" ? queueMicrotask : typeof zv < "u" ? function(n) {
    return zv.resolve(null).then(n).catch(wc);
  } : Tc;
  function wc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function vu(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (u === 0) {
          n.removeChild(c), ti(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    ti(r);
  }
  function Ci(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Av(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var kl = Math.random().toString(36).slice(2), Ri = "__reactFiber$" + kl, us = "__reactProps$" + kl, Qi = "__reactContainer$" + kl, ss = "__reactEvents$" + kl, hu = "__reactListeners$" + kl, my = "__reactHandles$" + kl;
  function yo(n) {
    var r = n[Ri];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ri]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Av(n); n !== null; ) {
          if (l = n[Ri]) return l;
          n = Av(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ye(n) {
    return n = n[Ri] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ai(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(b(33));
  }
  function Tn(n) {
    return n[us] || null;
  }
  var Ht = [], Na = -1;
  function za(n) {
    return { current: n };
  }
  function pn(n) {
    0 > Na || (n.current = Ht[Na], Ht[Na] = null, Na--);
  }
  function $e(n, r) {
    Na++, Ht[Na] = n.current, n.current = r;
  }
  var _r = {}, Dn = za(_r), Jn = za(!1), ea = _r;
  function ta(n, r) {
    var l = n.type.contextTypes;
    if (!l) return _r;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function $n(n) {
    return n = n.childContextTypes, n != null;
  }
  function mu() {
    pn(Jn), pn(Dn);
  }
  function Uv(n, r, l) {
    if (Dn.current !== _r) throw Error(b(168));
    $e(Dn, r), $e(Jn, l);
  }
  function cs(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(b(108, et(n) || "Unknown", c));
    return pe({}, l, u);
  }
  function ar(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _r, ea = Dn.current, $e(Dn, n), $e(Jn, Jn.current), !0;
  }
  function _c(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(b(169));
    l ? (n = cs(n, r, ea), u.__reactInternalMemoizedMergedChildContext = n, pn(Jn), pn(Dn), $e(Dn, n)) : pn(Jn), $e(Jn, l);
  }
  var xi = null, yu = !1, Gi = !1;
  function kc(n) {
    xi === null ? xi = [n] : xi.push(n);
  }
  function Dl(n) {
    yu = !0, kc(n);
  }
  function bi() {
    if (!Gi && xi !== null) {
      Gi = !0;
      var n = 0, r = Gt;
      try {
        var l = xi;
        for (Gt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        xi = null, yu = !1;
      } catch (c) {
        throw xi !== null && (xi = xi.slice(n + 1)), vn(Za, bi), c;
      } finally {
        Gt = r, Gi = !1;
      }
    }
    return null;
  }
  var Ol = [], Ll = 0, Ml = null, qi = 0, In = [], Aa = 0, ga = null, Ti = 1, wi = "";
  function go(n, r) {
    Ol[Ll++] = qi, Ol[Ll++] = Ml, Ml = n, qi = r;
  }
  function Hv(n, r, l) {
    In[Aa++] = Ti, In[Aa++] = wi, In[Aa++] = ga, ga = n;
    var u = Ti;
    n = wi;
    var c = 32 - Ar(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - Ar(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (u & (1 << m) - 1).toString(32), u >>= m, c -= m, Ti = 1 << 32 - Ar(r) + c | l << c | u, wi = d + n;
    } else Ti = 1 << d | l << c | u, wi = n;
  }
  function Dc(n) {
    n.return !== null && (go(n, 1), Hv(n, 1, 0));
  }
  function Oc(n) {
    for (; n === Ml; ) Ml = Ol[--Ll], Ol[Ll] = null, qi = Ol[--Ll], Ol[Ll] = null;
    for (; n === ga; ) ga = In[--Aa], In[Aa] = null, wi = In[--Aa], In[Aa] = null, Ti = In[--Aa], In[Aa] = null;
  }
  var na = null, ra = null, gn = !1, Ua = null;
  function gd(n, r) {
    var l = Ba(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Fv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, na = n, ra = Ci(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, na = n, ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ga !== null ? { id: Ti, overflow: wi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ba(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, na = n, ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Sd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ed(n) {
    if (gn) {
      var r = ra;
      if (r) {
        var l = r;
        if (!Fv(n, r)) {
          if (Sd(n)) throw Error(b(418));
          r = Ci(l.nextSibling);
          var u = na;
          r && Fv(n, r) ? gd(u, l) : (n.flags = n.flags & -4097 | 2, gn = !1, na = n);
        }
      } else {
        if (Sd(n)) throw Error(b(418));
        n.flags = n.flags & -4097 | 2, gn = !1, na = n;
      }
    }
  }
  function er(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    na = n;
  }
  function Lc(n) {
    if (n !== na) return !1;
    if (!gn) return er(n), gn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !bc(n.type, n.memoizedProps)), r && (r = ra)) {
      if (Sd(n)) throw fs(), Error(b(418));
      for (; r; ) gd(n, r), r = Ci(r.nextSibling);
    }
    if (er(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(b(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ra = Ci(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ra = null;
      }
    } else ra = na ? Ci(n.stateNode.nextSibling) : null;
    return !0;
  }
  function fs() {
    for (var n = ra; n; ) n = Ci(n.nextSibling);
  }
  function Nl() {
    ra = na = null, gn = !1;
  }
  function Xi(n) {
    Ua === null ? Ua = [n] : Ua.push(n);
  }
  var yy = je.ReactCurrentBatchConfig;
  function So(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(b(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(b(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var C = c.refs;
          m === null ? delete C[d] : C[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(b(284));
      if (!l._owner) throw Error(b(290, n));
    }
    return n;
  }
  function Mc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(b(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function jv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Eo(n) {
    function r(M, k) {
      if (n) {
        var A = M.deletions;
        A === null ? (M.deletions = [k], M.flags |= 16) : A.push(k);
      }
    }
    function l(M, k) {
      if (!n) return null;
      for (; k !== null; ) r(M, k), k = k.sibling;
      return null;
    }
    function u(M, k) {
      for (M = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? M.set(k.key, k) : M.set(k.index, k), k = k.sibling;
      return M;
    }
    function c(M, k) {
      return M = Bl(M, k), M.index = 0, M.sibling = null, M;
    }
    function d(M, k, A) {
      return M.index = A, n ? (A = M.alternate, A !== null ? (A = A.index, A < k ? (M.flags |= 2, k) : A) : (M.flags |= 2, k)) : (M.flags |= 1048576, k);
    }
    function m(M) {
      return n && M.alternate === null && (M.flags |= 2), M;
    }
    function C(M, k, A, ae) {
      return k === null || k.tag !== 6 ? (k = Kd(A, M.mode, ae), k.return = M, k) : (k = c(k, A), k.return = M, k);
    }
    function T(M, k, A, ae) {
      var ze = A.type;
      return ze === Me ? re(M, k, A.props.children, ae, A.key) : k !== null && (k.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === Lt && jv(ze) === k.type) ? (ae = c(k, A.props), ae.ref = So(M, k, A), ae.return = M, ae) : (ae = Bs(A.type, A.key, A.props, null, M.mode, ae), ae.ref = So(M, k, A), ae.return = M, ae);
    }
    function F(M, k, A, ae) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== A.containerInfo || k.stateNode.implementation !== A.implementation ? (k = df(A, M.mode, ae), k.return = M, k) : (k = c(k, A.children || []), k.return = M, k);
    }
    function re(M, k, A, ae, ze) {
      return k === null || k.tag !== 7 ? (k = nl(A, M.mode, ae, ze), k.return = M, k) : (k = c(k, A), k.return = M, k);
    }
    function ue(M, k, A) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Kd("" + k, M.mode, A), k.return = M, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case De:
            return A = Bs(k.type, k.key, k.props, null, M.mode, A), A.ref = So(M, null, k), A.return = M, A;
          case rt:
            return k = df(k, M.mode, A), k.return = M, k;
          case Lt:
            var ae = k._init;
            return ue(M, ae(k._payload), A);
        }
        if (jn(k) || Le(k)) return k = nl(k, M.mode, A, null), k.return = M, k;
        Mc(M, k);
      }
      return null;
    }
    function te(M, k, A, ae) {
      var ze = k !== null ? k.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number") return ze !== null ? null : C(M, k, "" + A, ae);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case De:
            return A.key === ze ? T(M, k, A, ae) : null;
          case rt:
            return A.key === ze ? F(M, k, A, ae) : null;
          case Lt:
            return ze = A._init, te(
              M,
              k,
              ze(A._payload),
              ae
            );
        }
        if (jn(A) || Le(A)) return ze !== null ? null : re(M, k, A, ae, null);
        Mc(M, A);
      }
      return null;
    }
    function be(M, k, A, ae, ze) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number") return M = M.get(A) || null, C(k, M, "" + ae, ze);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case De:
            return M = M.get(ae.key === null ? A : ae.key) || null, T(k, M, ae, ze);
          case rt:
            return M = M.get(ae.key === null ? A : ae.key) || null, F(k, M, ae, ze);
          case Lt:
            var Je = ae._init;
            return be(M, k, A, Je(ae._payload), ze);
        }
        if (jn(ae) || Le(ae)) return M = M.get(A) || null, re(k, M, ae, ze, null);
        Mc(k, ae);
      }
      return null;
    }
    function Ne(M, k, A, ae) {
      for (var ze = null, Je = null, nt = k, st = k = 0, or = null; nt !== null && st < A.length; st++) {
        nt.index > st ? (or = nt, nt = null) : or = nt.sibling;
        var Kt = te(M, nt, A[st], ae);
        if (Kt === null) {
          nt === null && (nt = or);
          break;
        }
        n && nt && Kt.alternate === null && r(M, nt), k = d(Kt, k, st), Je === null ? ze = Kt : Je.sibling = Kt, Je = Kt, nt = or;
      }
      if (st === A.length) return l(M, nt), gn && go(M, st), ze;
      if (nt === null) {
        for (; st < A.length; st++) nt = ue(M, A[st], ae), nt !== null && (k = d(nt, k, st), Je === null ? ze = nt : Je.sibling = nt, Je = nt);
        return gn && go(M, st), ze;
      }
      for (nt = u(M, nt); st < A.length; st++) or = be(nt, M, st, A[st], ae), or !== null && (n && or.alternate !== null && nt.delete(or.key === null ? st : or.key), k = d(or, k, st), Je === null ? ze = or : Je.sibling = or, Je = or);
      return n && nt.forEach(function(Il) {
        return r(M, Il);
      }), gn && go(M, st), ze;
    }
    function He(M, k, A, ae) {
      var ze = Le(A);
      if (typeof ze != "function") throw Error(b(150));
      if (A = ze.call(A), A == null) throw Error(b(151));
      for (var Je = ze = null, nt = k, st = k = 0, or = null, Kt = A.next(); nt !== null && !Kt.done; st++, Kt = A.next()) {
        nt.index > st ? (or = nt, nt = null) : or = nt.sibling;
        var Il = te(M, nt, Kt.value, ae);
        if (Il === null) {
          nt === null && (nt = or);
          break;
        }
        n && nt && Il.alternate === null && r(M, nt), k = d(Il, k, st), Je === null ? ze = Il : Je.sibling = Il, Je = Il, nt = or;
      }
      if (Kt.done) return l(
        M,
        nt
      ), gn && go(M, st), ze;
      if (nt === null) {
        for (; !Kt.done; st++, Kt = A.next()) Kt = ue(M, Kt.value, ae), Kt !== null && (k = d(Kt, k, st), Je === null ? ze = Kt : Je.sibling = Kt, Je = Kt);
        return gn && go(M, st), ze;
      }
      for (nt = u(M, nt); !Kt.done; st++, Kt = A.next()) Kt = be(nt, M, st, Kt.value, ae), Kt !== null && (n && Kt.alternate !== null && nt.delete(Kt.key === null ? st : Kt.key), k = d(Kt, k, st), Je === null ? ze = Kt : Je.sibling = Kt, Je = Kt);
      return n && nt.forEach(function(Ch) {
        return r(M, Ch);
      }), gn && go(M, st), ze;
    }
    function Un(M, k, A, ae) {
      if (typeof A == "object" && A !== null && A.type === Me && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case De:
            e: {
              for (var ze = A.key, Je = k; Je !== null; ) {
                if (Je.key === ze) {
                  if (ze = A.type, ze === Me) {
                    if (Je.tag === 7) {
                      l(M, Je.sibling), k = c(Je, A.props.children), k.return = M, M = k;
                      break e;
                    }
                  } else if (Je.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === Lt && jv(ze) === Je.type) {
                    l(M, Je.sibling), k = c(Je, A.props), k.ref = So(M, Je, A), k.return = M, M = k;
                    break e;
                  }
                  l(M, Je);
                  break;
                } else r(M, Je);
                Je = Je.sibling;
              }
              A.type === Me ? (k = nl(A.props.children, M.mode, ae, A.key), k.return = M, M = k) : (ae = Bs(A.type, A.key, A.props, null, M.mode, ae), ae.ref = So(M, k, A), ae.return = M, M = ae);
            }
            return m(M);
          case rt:
            e: {
              for (Je = A.key; k !== null; ) {
                if (k.key === Je) if (k.tag === 4 && k.stateNode.containerInfo === A.containerInfo && k.stateNode.implementation === A.implementation) {
                  l(M, k.sibling), k = c(k, A.children || []), k.return = M, M = k;
                  break e;
                } else {
                  l(M, k);
                  break;
                }
                else r(M, k);
                k = k.sibling;
              }
              k = df(A, M.mode, ae), k.return = M, M = k;
            }
            return m(M);
          case Lt:
            return Je = A._init, Un(M, k, Je(A._payload), ae);
        }
        if (jn(A)) return Ne(M, k, A, ae);
        if (Le(A)) return He(M, k, A, ae);
        Mc(M, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, k !== null && k.tag === 6 ? (l(M, k.sibling), k = c(k, A), k.return = M, M = k) : (l(M, k), k = Kd(A, M.mode, ae), k.return = M, M = k), m(M)) : l(M, k);
    }
    return Un;
  }
  var Mn = Eo(!0), Se = Eo(!1), Sa = za(null), aa = null, gu = null, Cd = null;
  function Rd() {
    Cd = gu = aa = null;
  }
  function xd(n) {
    var r = Sa.current;
    pn(Sa), n._currentValue = r;
  }
  function bd(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function wn(n, r) {
    aa = n, Cd = gu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Wn = !0), n.firstContext = null);
  }
  function Ha(n) {
    var r = n._currentValue;
    if (Cd !== n) if (n = { context: n, memoizedValue: r, next: null }, gu === null) {
      if (aa === null) throw Error(b(308));
      gu = n, aa.dependencies = { lanes: 0, firstContext: n };
    } else gu = gu.next = n;
    return r;
  }
  var Co = null;
  function Td(n) {
    Co === null ? Co = [n] : Co.push(n);
  }
  function wd(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Td(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ea(n, u);
  }
  function Ea(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ca = !1;
  function _d(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Pv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function zl(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Ft & 2) !== 0) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ea(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Td(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ea(n, l);
  }
  function Nc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Vi(n, l);
    }
  }
  function Bv(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ds(n, r, l, u) {
    var c = n.updateQueue;
    Ca = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var T = C, F = T.next;
      T.next = null, m === null ? d = F : m.next = F, m = T;
      var re = n.alternate;
      re !== null && (re = re.updateQueue, C = re.lastBaseUpdate, C !== m && (C === null ? re.firstBaseUpdate = F : C.next = F, re.lastBaseUpdate = T));
    }
    if (d !== null) {
      var ue = c.baseState;
      m = 0, re = F = T = null, C = d;
      do {
        var te = C.lane, be = C.eventTime;
        if ((u & te) === te) {
          re !== null && (re = re.next = {
            eventTime: be,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var Ne = n, He = C;
            switch (te = r, be = l, He.tag) {
              case 1:
                if (Ne = He.payload, typeof Ne == "function") {
                  ue = Ne.call(be, ue, te);
                  break e;
                }
                ue = Ne;
                break e;
              case 3:
                Ne.flags = Ne.flags & -65537 | 128;
              case 0:
                if (Ne = He.payload, te = typeof Ne == "function" ? Ne.call(be, ue, te) : Ne, te == null) break e;
                ue = pe({}, ue, te);
                break e;
              case 2:
                Ca = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (n.flags |= 64, te = c.effects, te === null ? c.effects = [C] : te.push(C));
        } else be = { eventTime: be, lane: te, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, re === null ? (F = re = be, T = ue) : re = re.next = be, m |= te;
        if (C = C.next, C === null) {
          if (C = c.shared.pending, C === null) break;
          te = C, C = te.next, te.next = null, c.lastBaseUpdate = te, c.shared.pending = null;
        }
      } while (!0);
      if (re === null && (T = ue), c.baseState = T, c.firstBaseUpdate = F, c.lastBaseUpdate = re, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Li |= m, n.lanes = m, n.memoizedState = ue;
    }
  }
  function kd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = l, typeof c != "function") throw Error(b(191, c));
        c.call(u);
      }
    }
  }
  var ps = {}, _i = za(ps), vs = za(ps), hs = za(ps);
  function Ro(n) {
    if (n === ps) throw Error(b(174));
    return n;
  }
  function Dd(n, r) {
    switch ($e(hs, r), $e(vs, n), $e(_i, ps), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Lr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Lr(r, n);
    }
    pn(_i), $e(_i, r);
  }
  function xo() {
    pn(_i), pn(vs), pn(hs);
  }
  function Vv(n) {
    Ro(hs.current);
    var r = Ro(_i.current), l = Lr(r, n.type);
    r !== l && ($e(vs, n), $e(_i, l));
  }
  function zc(n) {
    vs.current === n && (pn(_i), pn(vs));
  }
  var _n = za(0);
  function Ac(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ms = [];
  function We() {
    for (var n = 0; n < ms.length; n++) ms[n]._workInProgressVersionPrimary = null;
    ms.length = 0;
  }
  var bt = je.ReactCurrentDispatcher, qt = je.ReactCurrentBatchConfig, ln = 0, Xt = null, Yn = null, ir = null, Uc = !1, ys = !1, bo = 0, J = 0;
  function Yt() {
    throw Error(b(321));
  }
  function lt(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ri(n[l], r[l])) return !1;
    return !0;
  }
  function Al(n, r, l, u, c, d) {
    if (ln = d, Xt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bt.current = n === null || n.memoizedState === null ? Kc : xs, n = l(u, c), ys) {
      d = 0;
      do {
        if (ys = !1, bo = 0, 25 <= d) throw Error(b(301));
        d += 1, ir = Yn = null, r.updateQueue = null, bt.current = Zc, n = l(u, c);
      } while (ys);
    }
    if (bt.current = Do, r = Yn !== null && Yn.next !== null, ln = 0, ir = Yn = Xt = null, Uc = !1, r) throw Error(b(300));
    return n;
  }
  function ii() {
    var n = bo !== 0;
    return bo = 0, n;
  }
  function kr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ir === null ? Xt.memoizedState = ir = n : ir = ir.next = n, ir;
  }
  function Nn() {
    if (Yn === null) {
      var n = Xt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Yn.next;
    var r = ir === null ? Xt.memoizedState : ir.next;
    if (r !== null) ir = r, Yn = n;
    else {
      if (n === null) throw Error(b(310));
      Yn = n, n = { memoizedState: Yn.memoizedState, baseState: Yn.baseState, baseQueue: Yn.baseQueue, queue: Yn.queue, next: null }, ir === null ? Xt.memoizedState = ir = n : ir = ir.next = n;
    }
    return ir;
  }
  function Zi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ul(n) {
    var r = Nn(), l = r.queue;
    if (l === null) throw Error(b(311));
    l.lastRenderedReducer = n;
    var u = Yn, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var C = m = null, T = null, F = d;
      do {
        var re = F.lane;
        if ((ln & re) === re) T !== null && (T = T.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), u = F.hasEagerState ? F.eagerState : n(u, F.action);
        else {
          var ue = {
            lane: re,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          T === null ? (C = T = ue, m = u) : T = T.next = ue, Xt.lanes |= re, Li |= re;
        }
        F = F.next;
      } while (F !== null && F !== d);
      T === null ? m = u : T.next = C, ri(u, r.memoizedState) || (Wn = !0), r.memoizedState = u, r.baseState = m, r.baseQueue = T, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Xt.lanes |= d, Li |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function To(n) {
    var r = Nn(), l = r.queue;
    if (l === null) throw Error(b(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ri(d, r.memoizedState) || (Wn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function Hc() {
  }
  function Fc(n, r) {
    var l = Xt, u = Nn(), c = r(), d = !ri(u.memoizedState, c);
    if (d && (u.memoizedState = c, Wn = !0), u = u.queue, gs(Bc.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || ir !== null && ir.memoizedState.tag & 1) {
      if (l.flags |= 2048, wo(9, Pc.bind(null, l, u, c, r), void 0, null), tr === null) throw Error(b(349));
      (ln & 30) !== 0 || jc(l, r, c);
    }
    return c;
  }
  function jc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Xt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Xt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Pc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Vc(r) && $c(n);
  }
  function Bc(n, r, l) {
    return l(function() {
      Vc(r) && $c(n);
    });
  }
  function Vc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ri(n, l);
    } catch {
      return !0;
    }
  }
  function $c(n) {
    var r = Ea(n, 1);
    r !== null && Br(r, n, 1, -1);
  }
  function Ic(n) {
    var r = kr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zi, lastRenderedState: n }, r.queue = n, n = n.dispatch = ko.bind(null, Xt, n), [r.memoizedState, n];
  }
  function wo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = Xt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Xt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Yc() {
    return Nn().memoizedState;
  }
  function Su(n, r, l, u) {
    var c = kr();
    Xt.flags |= n, c.memoizedState = wo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function Eu(n, r, l, u) {
    var c = Nn();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (Yn !== null) {
      var m = Yn.memoizedState;
      if (d = m.destroy, u !== null && lt(u, m.deps)) {
        c.memoizedState = wo(r, l, d, u);
        return;
      }
    }
    Xt.flags |= n, c.memoizedState = wo(1 | r, l, d, u);
  }
  function Wc(n, r) {
    return Su(8390656, 8, n, r);
  }
  function gs(n, r) {
    return Eu(2048, 8, n, r);
  }
  function Qc(n, r) {
    return Eu(4, 2, n, r);
  }
  function Ss(n, r) {
    return Eu(4, 4, n, r);
  }
  function _o(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Gc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Eu(4, 4, _o.bind(null, r, n), l);
  }
  function Es() {
  }
  function qc(n, r) {
    var l = Nn();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && lt(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Xc(n, r) {
    var l = Nn();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && lt(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Od(n, r, l) {
    return (ln & 21) === 0 ? (n.baseState && (n.baseState = !1, Wn = !0), n.memoizedState = l) : (ri(l, r) || (l = Jo(), Xt.lanes |= l, Li |= l, n.baseState = !0), r);
  }
  function Cs(n, r) {
    var l = Gt;
    Gt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = qt.transition;
    qt.transition = {};
    try {
      n(!1), r();
    } finally {
      Gt = l, qt.transition = u;
    }
  }
  function Ld() {
    return Nn().memoizedState;
  }
  function Rs(n, r, l) {
    var u = Mi(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, ia(n)) $v(r, l);
    else if (l = wd(n, r, l, u), l !== null) {
      var c = qn();
      Br(l, n, u, c), sn(l, r, u);
    }
  }
  function ko(n, r, l) {
    var u = Mi(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ia(n)) $v(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, C = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = C, ri(C, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Td(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = wd(n, r, c, u), l !== null && (c = qn(), Br(l, n, u, c), sn(l, r, u));
    }
  }
  function ia(n) {
    var r = n.alternate;
    return n === Xt || r !== null && r === Xt;
  }
  function $v(n, r) {
    ys = Uc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function sn(n, r, l) {
    if ((l & 4194240) !== 0) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Vi(n, l);
    }
  }
  var Do = { readContext: Ha, useCallback: Yt, useContext: Yt, useEffect: Yt, useImperativeHandle: Yt, useInsertionEffect: Yt, useLayoutEffect: Yt, useMemo: Yt, useReducer: Yt, useRef: Yt, useState: Yt, useDebugValue: Yt, useDeferredValue: Yt, useTransition: Yt, useMutableSource: Yt, useSyncExternalStore: Yt, useId: Yt, unstable_isNewReconciler: !1 }, Kc = { readContext: Ha, useCallback: function(n, r) {
    return kr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ha, useEffect: Wc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Su(
      4194308,
      4,
      _o.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Su(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Su(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = kr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = kr();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Rs.bind(null, Xt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = kr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ic, useDebugValue: Es, useDeferredValue: function(n) {
    return kr().memoizedState = n;
  }, useTransition: function() {
    var n = Ic(!1), r = n[0];
    return n = Cs.bind(null, n[1]), kr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = Xt, c = kr();
    if (gn) {
      if (l === void 0) throw Error(b(407));
      l = l();
    } else {
      if (l = r(), tr === null) throw Error(b(349));
      (ln & 30) !== 0 || jc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Wc(Bc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, wo(9, Pc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = kr(), r = tr.identifierPrefix;
    if (gn) {
      var l = wi, u = Ti;
      l = (u & ~(1 << 32 - Ar(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = bo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = J++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, xs = {
    readContext: Ha,
    useCallback: qc,
    useContext: Ha,
    useEffect: gs,
    useImperativeHandle: Gc,
    useInsertionEffect: Qc,
    useLayoutEffect: Ss,
    useMemo: Xc,
    useReducer: Ul,
    useRef: Yc,
    useState: function() {
      return Ul(Zi);
    },
    useDebugValue: Es,
    useDeferredValue: function(n) {
      var r = Nn();
      return Od(r, Yn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ul(Zi)[0], r = Nn().memoizedState;
      return [n, r];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Fc,
    useId: Ld,
    unstable_isNewReconciler: !1
  }, Zc = { readContext: Ha, useCallback: qc, useContext: Ha, useEffect: gs, useImperativeHandle: Gc, useInsertionEffect: Qc, useLayoutEffect: Ss, useMemo: Xc, useReducer: To, useRef: Yc, useState: function() {
    return To(Zi);
  }, useDebugValue: Es, useDeferredValue: function(n) {
    var r = Nn();
    return Yn === null ? r.memoizedState = n : Od(r, Yn.memoizedState, n);
  }, useTransition: function() {
    var n = To(Zi)[0], r = Nn().memoizedState;
    return [n, r];
  }, useMutableSource: Hc, useSyncExternalStore: Fc, useId: Ld, unstable_isNewReconciler: !1 };
  function li(n, r) {
    if (n && n.defaultProps) {
      r = pe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Md(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : pe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Jc = { isMounted: function(n) {
    return (n = n._reactInternals) ? mt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = qn(), c = Mi(n), d = Ki(u, c);
    d.payload = r, l != null && (d.callback = l), r = zl(n, d, c), r !== null && (Br(r, n, c, u), Nc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = qn(), c = Mi(n), d = Ki(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = zl(n, d, c), r !== null && (Br(r, n, c, u), Nc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = qn(), u = Mi(n), c = Ki(l, u);
    c.tag = 2, r != null && (c.callback = r), r = zl(n, c, u), r !== null && (Br(r, n, u, l), Nc(r, n, u));
  } };
  function Iv(n, r, l, u, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ns(l, u) || !ns(c, d) : !0;
  }
  function ef(n, r, l) {
    var u = !1, c = _r, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ha(d) : (c = $n(r) ? ea : Dn.current, u = r.contextTypes, d = (u = u != null) ? ta(n, c) : _r), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Jc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Yv(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Jc.enqueueReplaceState(r, r.state, null);
  }
  function bs(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, _d(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ha(d) : (d = $n(r) ? ea : Dn.current, c.context = ta(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Md(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Jc.enqueueReplaceState(c, c.state, null), ds(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Oo(n, r) {
    try {
      var l = "", u = r;
      do
        l += ft(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Nd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function zd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var tf = typeof WeakMap == "function" ? WeakMap : Map;
  function Wv(n, r, l) {
    l = Ki(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      wu || (wu = !0, No = u), zd(n, r);
    }, l;
  }
  function Ad(n, r, l) {
    l = Ki(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        zd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      zd(n, r), typeof u != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ud(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new tf();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = by.bind(null, n, r, l), r.then(n, n));
  }
  function Qv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Hl(n, r, l, u, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ki(-1, 1), r.tag = 2, zl(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Ts = je.ReactCurrentOwner, Wn = !1;
  function hr(n, r, l, u) {
    r.child = n === null ? Se(r, null, l, u) : Mn(r, n.child, l, u);
  }
  function la(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return wn(r, c), u = Al(n, r, l, u, d, c), l = ii(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ja(n, r, c)) : (gn && l && Dc(r), r.flags |= 1, hr(n, r, u, c), r.child);
  }
  function Lo(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Xd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, gt(n, r, d, u, c)) : (n = Bs(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ns, l(m, u) && n.ref === r.ref) return ja(n, r, c);
    }
    return r.flags |= 1, n = Bl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function gt(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ns(d, u) && n.ref === r.ref) if (Wn = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) (n.flags & 131072) !== 0 && (Wn = !0);
      else return r.lanes = n.lanes, ja(n, r, c);
    }
    return Gv(n, r, l, u, c);
  }
  function ws(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(xu, Ra), Ra |= l;
    else {
      if ((l & 1073741824) === 0) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, $e(xu, Ra), Ra |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, $e(xu, Ra), Ra |= u;
    }
    else d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, $e(xu, Ra), Ra |= u;
    return hr(n, r, c, l), r.child;
  }
  function Hd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Gv(n, r, l, u, c) {
    var d = $n(l) ? ea : Dn.current;
    return d = ta(r, d), wn(r, c), l = Al(n, r, l, u, d, c), u = ii(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ja(n, r, c)) : (gn && u && Dc(r), r.flags |= 1, hr(n, r, l, c), r.child);
  }
  function qv(n, r, l, u, c) {
    if ($n(l)) {
      var d = !0;
      ar(r);
    } else d = !1;
    if (wn(r, c), r.stateNode === null) Fa(n, r), ef(r, l, u), bs(r, l, u, c), u = !0;
    else if (n === null) {
      var m = r.stateNode, C = r.memoizedProps;
      m.props = C;
      var T = m.context, F = l.contextType;
      typeof F == "object" && F !== null ? F = Ha(F) : (F = $n(l) ? ea : Dn.current, F = ta(r, F));
      var re = l.getDerivedStateFromProps, ue = typeof re == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      ue || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== u || T !== F) && Yv(r, m, u, F), Ca = !1;
      var te = r.memoizedState;
      m.state = te, ds(r, u, m, c), T = r.memoizedState, C !== u || te !== T || Jn.current || Ca ? (typeof re == "function" && (Md(r, l, re, u), T = r.memoizedState), (C = Ca || Iv(r, l, C, u, te, T, F)) ? (ue || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = T), m.props = u, m.state = T, m.context = F, u = C) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      m = r.stateNode, Pv(n, r), C = r.memoizedProps, F = r.type === r.elementType ? C : li(r.type, C), m.props = F, ue = r.pendingProps, te = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ha(T) : (T = $n(l) ? ea : Dn.current, T = ta(r, T));
      var be = l.getDerivedStateFromProps;
      (re = typeof be == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (C !== ue || te !== T) && Yv(r, m, u, T), Ca = !1, te = r.memoizedState, m.state = te, ds(r, u, m, c);
      var Ne = r.memoizedState;
      C !== ue || te !== Ne || Jn.current || Ca ? (typeof be == "function" && (Md(r, l, be, u), Ne = r.memoizedState), (F = Ca || Iv(r, l, F, u, te, Ne, T) || !1) ? (re || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(u, Ne, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(u, Ne, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || C === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ne), m.props = u, m.state = Ne, m.context = T, u = F) : (typeof m.componentDidUpdate != "function" || C === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || C === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return _s(n, r, l, u, d, c);
  }
  function _s(n, r, l, u, c, d) {
    Hd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!u && !m) return c && _c(r, l, !1), ja(n, r, d);
    u = r.stateNode, Ts.current = r;
    var C = m && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && m ? (r.child = Mn(r, n.child, null, d), r.child = Mn(r, null, C, d)) : hr(n, r, C, d), r.memoizedState = u.state, c && _c(r, l, !0), r.child;
  }
  function Cu(n) {
    var r = n.stateNode;
    r.pendingContext ? Uv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Uv(n, r.context, !1), Dd(n, r.containerInfo);
  }
  function Xv(n, r, l, u, c) {
    return Nl(), Xi(c), r.flags |= 256, hr(n, r, l, u), r.child;
  }
  var nf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function rf(n, r, l) {
    var u = r.pendingProps, c = _n.current, d = !1, m = (r.flags & 128) !== 0, C;
    if ((C = m) || (C = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), C ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), $e(_n, c & 1), n === null)
      return Ed(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, m = { mode: "hidden", children: m }, (u & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Vl(m, u, 0, null), n = nl(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Fd(l), r.memoizedState = nf, n) : jd(r, m));
    if (c = n.memoizedState, c !== null && (C = c.dehydrated, C !== null)) return Kv(n, r, m, u, C, c, l);
    if (d) {
      d = u.fallback, m = r.mode, c = n.child, C = c.sibling;
      var T = { mode: "hidden", children: u.children };
      return (m & 1) === 0 && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = T, r.deletions = null) : (u = Bl(c, T), u.subtreeFlags = c.subtreeFlags & 14680064), C !== null ? d = Bl(C, d) : (d = nl(d, m, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, m = n.child.memoizedState, m = m === null ? Fd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = nf, u;
    }
    return d = n.child, n = d.sibling, u = Bl(d, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function jd(n, r) {
    return r = Vl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ks(n, r, l, u) {
    return u !== null && Xi(u), Mn(r, n.child, null, l), n = jd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Kv(n, r, l, u, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Nd(Error(b(422))), ks(n, r, m, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Vl({ mode: "visible", children: u.children }, c, 0, null), d = nl(d, c, m, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, (r.mode & 1) !== 0 && Mn(r, n.child, null, m), r.child.memoizedState = Fd(m), r.memoizedState = nf, d);
    if ((r.mode & 1) === 0) return ks(n, r, m, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var C = u.dgst;
      return u = C, d = Error(b(419)), u = Nd(d, u, void 0), ks(n, r, m, u);
    }
    if (C = (m & n.childLanes) !== 0, Wn || C) {
      if (u = tr, u !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (u.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ea(n, c), Br(u, n, c, -1));
      }
      return qd(), u = Nd(Error(b(421))), ks(n, r, m, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ty.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ra = Ci(c.nextSibling), na = r, gn = !0, Ua = null, n !== null && (In[Aa++] = Ti, In[Aa++] = wi, In[Aa++] = ga, Ti = n.id, wi = n.overflow, ga = r), r = jd(r, u.children), r.flags |= 4096, r);
  }
  function Pd(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), bd(n.return, r, l);
  }
  function Fr(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function ki(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (hr(n, r, u.children, l), u = _n.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Pd(n, l, r);
        else if (n.tag === 19) Pd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if ($e(_n, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Ac(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Fr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Ac(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Fr(r, !0, l, null, d);
        break;
      case "together":
        Fr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Fa(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ja(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Li |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(b(153));
    if (r.child !== null) {
      for (n = r.child, l = Bl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Bl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ds(n, r, l) {
    switch (r.tag) {
      case 3:
        Cu(r), Nl();
        break;
      case 5:
        Vv(r);
        break;
      case 1:
        $n(r.type) && ar(r);
        break;
      case 4:
        Dd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        $e(Sa, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? ($e(_n, _n.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? rf(n, r, l) : ($e(_n, _n.current & 1), n = ja(n, r, l), n !== null ? n.sibling : null);
        $e(_n, _n.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (u) return ki(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), $e(_n, _n.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ws(n, r, l);
    }
    return ja(n, r, l);
  }
  var Pa, Qn, Zv, Jv;
  Pa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Qn = function() {
  }, Zv = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Ro(_i.current);
      var d = null;
      switch (l) {
        case "input":
          c = Fn(n, c), u = Fn(n, u), d = [];
          break;
        case "select":
          c = pe({}, c, { value: void 0 }), u = pe({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = On(n, c), u = On(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = _l);
      }
      Ie(l, u);
      var m;
      l = null;
      for (F in c) if (!u.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null) if (F === "style") {
        var C = c[F];
        for (m in C) C.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (W.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in u) {
        var T = u[F];
        if (C = c?.[F], u.hasOwnProperty(F) && T !== C && (T != null || C != null)) if (F === "style") if (C) {
          for (m in C) !C.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && C[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          F,
          l
        )), l = T;
        else F === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, C = C ? C.__html : void 0, T != null && C !== T && (d = d || []).push(F, T)) : F === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(F, "" + T) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (W.hasOwnProperty(F) ? (T != null && F === "onScroll" && en("scroll", n), d || C === T || (d = [])) : (d = d || []).push(F, T));
      }
      l && (d = d || []).push("style", l);
      var F = d;
      (r.updateQueue = F) && (r.flags |= 4);
    }
  }, Jv = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function Os(n, r) {
    if (!gn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function lr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function eh(n, r, l) {
    var u = r.pendingProps;
    switch (Oc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return lr(r), null;
      case 1:
        return $n(r.type) && mu(), lr(r), null;
      case 3:
        return u = r.stateNode, xo(), pn(Jn), pn(Dn), We(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Lc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Ua !== null && (zo(Ua), Ua = null))), Qn(n, r), lr(r), null;
      case 5:
        zc(r);
        var c = Ro(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) Zv(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(b(166));
            return lr(r), null;
          }
          if (n = Ro(_i.current), Lc(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[Ri] = r, u[us] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                en("cancel", u), en("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                en("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < is.length; c++) en(is[c], u);
                break;
              case "source":
                en("error", u);
                break;
              case "img":
              case "image":
              case "link":
                en(
                  "error",
                  u
                ), en("load", u);
                break;
              case "details":
                en("toggle", u);
                break;
              case "input":
                Cn(u, d), en("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, en("invalid", u);
                break;
              case "textarea":
                yn(u, d), en("invalid", u);
            }
            Ie(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var C = d[m];
              m === "children" ? typeof C == "string" ? u.textContent !== C && (d.suppressHydrationWarning !== !0 && xc(u.textContent, C, n), c = ["children", C]) : typeof C == "number" && u.textContent !== "" + C && (d.suppressHydrationWarning !== !0 && xc(
                u.textContent,
                C,
                n
              ), c = ["children", "" + C]) : W.hasOwnProperty(m) && C != null && m === "onScroll" && en("scroll", u);
            }
            switch (l) {
              case "input":
                En(u), Kr(u, d, !0);
                break;
              case "textarea":
                En(u), xn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = _l);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Pn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = m.createElement(l, { is: u.is }) : (n = m.createElement(l), l === "select" && (m = n, u.multiple ? m.multiple = !0 : u.size && (m.size = u.size))) : n = m.createElementNS(n, l), n[Ri] = r, n[us] = u, Pa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Ut(l, u), l) {
                case "dialog":
                  en("cancel", n), en("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  en("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < is.length; c++) en(is[c], n);
                  c = u;
                  break;
                case "source":
                  en("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  en(
                    "error",
                    n
                  ), en("load", n), c = u;
                  break;
                case "details":
                  en("toggle", n), c = u;
                  break;
                case "input":
                  Cn(n, u), c = Fn(n, u), en("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = pe({}, u, { value: void 0 }), en("invalid", n);
                  break;
                case "textarea":
                  yn(n, u), c = On(n, u), en("invalid", n);
                  break;
                default:
                  c = u;
              }
              Ie(l, c), C = c;
              for (d in C) if (C.hasOwnProperty(d)) {
                var T = C[d];
                d === "style" ? ye(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ma(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && oe(n, T) : typeof T == "number" && oe(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (W.hasOwnProperty(d) ? T != null && d === "onScroll" && en("scroll", n) : T != null && Fe(n, d, T, m));
              }
              switch (l) {
                case "input":
                  En(n), Kr(n, u, !1);
                  break;
                case "textarea":
                  En(n), xn(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + dt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? It(n, !!u.multiple, d, !1) : u.defaultValue != null && It(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = _l);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return lr(r), null;
      case 6:
        if (n && r.stateNode != null) Jv(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(b(166));
          if (l = Ro(hs.current), Ro(_i.current), Lc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Ri] = r, (d = u.nodeValue !== l) && (n = na, n !== null)) switch (n.tag) {
              case 3:
                xc(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && xc(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Ri] = r, r.stateNode = u;
        }
        return lr(r), null;
      case 13:
        if (pn(_n), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (gn && ra !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) fs(), Nl(), r.flags |= 98560, d = !1;
          else if (d = Lc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(b(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(b(317));
              d[Ri] = r;
            } else Nl(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            lr(r), d = !1;
          } else Ua !== null && (zo(Ua), Ua = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (_n.current & 1) !== 0 ? An === 0 && (An = 3) : qd())), r.updateQueue !== null && (r.flags |= 4), lr(r), null);
      case 4:
        return xo(), Qn(n, r), n === null && fu(r.stateNode.containerInfo), lr(r), null;
      case 10:
        return xd(r.type._context), lr(r), null;
      case 17:
        return $n(r.type) && mu(), lr(r), null;
      case 19:
        if (pn(_n), d = r.memoizedState, d === null) return lr(r), null;
        if (u = (r.flags & 128) !== 0, m = d.rendering, m === null) if (u) Os(d, !1);
        else {
          if (An !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (m = Ac(n), m !== null) {
              for (r.flags |= 128, Os(d, !1), u = m.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) d = l, n = u, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return $e(_n, _n.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && yt() > Tu && (r.flags |= 128, u = !0, Os(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Ac(m), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Os(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !gn) return lr(r), null;
          } else 2 * yt() - d.renderingStartTime > Tu && l !== 1073741824 && (r.flags |= 128, u = !0, Os(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = yt(), r.sibling = null, l = _n.current, $e(_n, u ? l & 1 | 2 : l & 1), r) : (lr(r), null);
      case 22:
      case 23:
        return Gd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ra & 1073741824) !== 0 && (lr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : lr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(b(156, r.tag));
  }
  function af(n, r) {
    switch (Oc(r), r.tag) {
      case 1:
        return $n(r.type) && mu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xo(), pn(Jn), pn(Dn), We(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return zc(r), null;
      case 13:
        if (pn(_n), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(b(340));
          Nl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return pn(_n), null;
      case 4:
        return xo(), null;
      case 10:
        return xd(r.type._context), null;
      case 22:
      case 23:
        return Gd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ls = !1, Dr = !1, gy = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function Ru(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      Sn(n, r, u);
    }
    else l.current = null;
  }
  function lf(n, r, l) {
    try {
      l();
    } catch (u) {
      Sn(n, r, u);
    }
  }
  var th = !1;
  function nh(n, r) {
    if (os = La, n = rs(), hc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, C = -1, T = -1, F = 0, re = 0, ue = n, te = null;
          t: for (; ; ) {
            for (var be; ue !== l || c !== 0 && ue.nodeType !== 3 || (C = m + c), ue !== d || u !== 0 && ue.nodeType !== 3 || (T = m + u), ue.nodeType === 3 && (m += ue.nodeValue.length), (be = ue.firstChild) !== null; )
              te = ue, ue = be;
            for (; ; ) {
              if (ue === n) break t;
              if (te === l && ++F === c && (C = m), te === d && ++re === u && (T = m), (be = ue.nextSibling) !== null) break;
              ue = te, te = ue.parentNode;
            }
            ue = be;
          }
          l = C === -1 || T === -1 ? null : { start: C, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (mo = { focusedElem: n, selectionRange: l }, La = !1, ke = r; ke !== null; ) if (r = ke, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ke = n;
    else for (; ke !== null; ) {
      r = ke;
      try {
        var Ne = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ne !== null) {
              var He = Ne.memoizedProps, Un = Ne.memoizedState, M = r.stateNode, k = M.getSnapshotBeforeUpdate(r.elementType === r.type ? He : li(r.type, He), Un);
              M.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var A = r.stateNode.containerInfo;
            A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(b(163));
        }
      } catch (ae) {
        Sn(r, r.return, ae);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ke = n;
        break;
      }
      ke = r.return;
    }
    return Ne = th, th = !1, Ne;
  }
  function Ms(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && lf(r, l, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Ns(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Bd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function of(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, of(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ri], delete r[us], delete r[ss], delete r[hu], delete r[my])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function zs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ji(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || zs(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Di(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = _l));
    else if (u !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  function Oi(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Oi(n, r, l), n = n.sibling; n !== null; ) Oi(n, r, l), n = n.sibling;
  }
  var zn = null, jr = !1;
  function Pr(n, r, l) {
    for (l = l.child; l !== null; ) rh(n, r, l), l = l.sibling;
  }
  function rh(n, r, l) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function") try {
      Zr.onCommitFiberUnmount(gl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Dr || Ru(l, r);
      case 6:
        var u = zn, c = jr;
        zn = null, Pr(n, r, l), zn = u, jr = c, zn !== null && (jr ? (n = zn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : zn.removeChild(l.stateNode));
        break;
      case 18:
        zn !== null && (jr ? (n = zn, l = l.stateNode, n.nodeType === 8 ? vu(n.parentNode, l) : n.nodeType === 1 && vu(n, l), ti(n)) : vu(zn, l.stateNode));
        break;
      case 4:
        u = zn, c = jr, zn = l.stateNode.containerInfo, jr = !0, Pr(n, r, l), zn = u, jr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && lf(l, r, m), c = c.next;
          } while (c !== u);
        }
        Pr(n, r, l);
        break;
      case 1:
        if (!Dr && (Ru(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (C) {
          Sn(l, r, C);
        }
        Pr(n, r, l);
        break;
      case 21:
        Pr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Dr = (u = Dr) || l.memoizedState !== null, Pr(n, r, l), Dr = u) : Pr(n, r, l);
        break;
      default:
        Pr(n, r, l);
    }
  }
  function ah(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new gy()), r.forEach(function(u) {
        var c = ph.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function oi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var c = l[u];
      try {
        var d = n, m = r, C = m;
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 5:
              zn = C.stateNode, jr = !1;
              break e;
            case 3:
              zn = C.stateNode.containerInfo, jr = !0;
              break e;
            case 4:
              zn = C.stateNode.containerInfo, jr = !0;
              break e;
          }
          C = C.return;
        }
        if (zn === null) throw Error(b(160));
        rh(d, m, c), zn = null, jr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (F) {
        Sn(c, r, F);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Vd(r, n), r = r.sibling;
  }
  function Vd(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (oi(r, n), oa(n), u & 4) {
          try {
            Ms(3, n, n.return), Ns(3, n);
          } catch (He) {
            Sn(n, n.return, He);
          }
          try {
            Ms(5, n, n.return);
          } catch (He) {
            Sn(n, n.return, He);
          }
        }
        break;
      case 1:
        oi(r, n), oa(n), u & 512 && l !== null && Ru(l, l.return);
        break;
      case 5:
        if (oi(r, n), oa(n), u & 512 && l !== null && Ru(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            oe(c, "");
          } catch (He) {
            Sn(n, n.return, He);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, C = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            C === "input" && d.type === "radio" && d.name != null && Rn(c, d), Ut(C, m);
            var F = Ut(C, d);
            for (m = 0; m < T.length; m += 2) {
              var re = T[m], ue = T[m + 1];
              re === "style" ? ye(c, ue) : re === "dangerouslySetInnerHTML" ? ma(c, ue) : re === "children" ? oe(c, ue) : Fe(c, re, ue, F);
            }
            switch (C) {
              case "input":
                rr(c, d);
                break;
              case "textarea":
                ha(c, d);
                break;
              case "select":
                var te = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var be = d.value;
                be != null ? It(c, !!d.multiple, be, !1) : te !== !!d.multiple && (d.defaultValue != null ? It(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : It(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[us] = d;
          } catch (He) {
            Sn(n, n.return, He);
          }
        }
        break;
      case 6:
        if (oi(r, n), oa(n), u & 4) {
          if (n.stateNode === null) throw Error(b(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (He) {
            Sn(n, n.return, He);
          }
        }
        break;
      case 3:
        if (oi(r, n), oa(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ti(r.containerInfo);
        } catch (He) {
          Sn(n, n.return, He);
        }
        break;
      case 4:
        oi(r, n), oa(n);
        break;
      case 13:
        oi(r, n), oa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Yd = yt())), u & 4 && ah(n);
        break;
      case 22:
        if (re = l !== null && l.memoizedState !== null, n.mode & 1 ? (Dr = (F = Dr) || re, oi(r, n), Dr = F) : oi(r, n), oa(n), u & 8192) {
          if (F = n.memoizedState !== null, (n.stateNode.isHidden = F) && !re && (n.mode & 1) !== 0) for (ke = n, re = n.child; re !== null; ) {
            for (ue = ke = re; ke !== null; ) {
              switch (te = ke, be = te.child, te.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ms(4, te, te.return);
                  break;
                case 1:
                  Ru(te, te.return);
                  var Ne = te.stateNode;
                  if (typeof Ne.componentWillUnmount == "function") {
                    u = te, l = te.return;
                    try {
                      r = u, Ne.props = r.memoizedProps, Ne.state = r.memoizedState, Ne.componentWillUnmount();
                    } catch (He) {
                      Sn(u, l, He);
                    }
                  }
                  break;
                case 5:
                  Ru(te, te.return);
                  break;
                case 22:
                  if (te.memoizedState !== null) {
                    As(ue);
                    continue;
                  }
              }
              be !== null ? (be.return = te, ke = be) : As(ue);
            }
            re = re.sibling;
          }
          e: for (re = null, ue = n; ; ) {
            if (ue.tag === 5) {
              if (re === null) {
                re = ue;
                try {
                  c = ue.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (C = ue.stateNode, T = ue.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, C.style.display = Qe("display", m));
                } catch (He) {
                  Sn(n, n.return, He);
                }
              }
            } else if (ue.tag === 6) {
              if (re === null) try {
                ue.stateNode.nodeValue = F ? "" : ue.memoizedProps;
              } catch (He) {
                Sn(n, n.return, He);
              }
            } else if ((ue.tag !== 22 && ue.tag !== 23 || ue.memoizedState === null || ue === n) && ue.child !== null) {
              ue.child.return = ue, ue = ue.child;
              continue;
            }
            if (ue === n) break e;
            for (; ue.sibling === null; ) {
              if (ue.return === null || ue.return === n) break e;
              re === ue && (re = null), ue = ue.return;
            }
            re === ue && (re = null), ue.sibling.return = ue.return, ue = ue.sibling;
          }
        }
        break;
      case 19:
        oi(r, n), oa(n), u & 4 && ah(n);
        break;
      case 21:
        break;
      default:
        oi(
          r,
          n
        ), oa(n);
    }
  }
  function oa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (zs(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(b(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (oe(c, ""), u.flags &= -33);
            var d = Ji(n);
            Oi(n, d, c);
            break;
          case 3:
          case 4:
            var m = u.stateNode.containerInfo, C = Ji(n);
            Di(n, C, m);
            break;
          default:
            throw Error(b(161));
        }
      } catch (T) {
        Sn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Sy(n, r, l) {
    ke = n, $d(n);
  }
  function $d(n, r, l) {
    for (var u = (n.mode & 1) !== 0; ke !== null; ) {
      var c = ke, d = c.child;
      if (c.tag === 22 && u) {
        var m = c.memoizedState !== null || Ls;
        if (!m) {
          var C = c.alternate, T = C !== null && C.memoizedState !== null || Dr;
          C = Ls;
          var F = Dr;
          if (Ls = m, (Dr = T) && !F) for (ke = c; ke !== null; ) m = ke, T = m.child, m.tag === 22 && m.memoizedState !== null ? Id(c) : T !== null ? (T.return = m, ke = T) : Id(c);
          for (; d !== null; ) ke = d, $d(d), d = d.sibling;
          ke = c, Ls = C, Dr = F;
        }
        ih(n);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, ke = d) : ih(n);
    }
  }
  function ih(n) {
    for (; ke !== null; ) {
      var r = ke;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Dr || Ns(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !Dr) if (l === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : li(r.type, l.memoizedProps);
                u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && kd(r, d, u);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                kd(r, m, l);
              }
              break;
            case 5:
              var C = r.stateNode;
              if (l === null && r.flags & 4) {
                l = C;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var F = r.alternate;
                if (F !== null) {
                  var re = F.memoizedState;
                  if (re !== null) {
                    var ue = re.dehydrated;
                    ue !== null && ti(ue);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
          Dr || r.flags & 512 && Bd(r);
        } catch (te) {
          Sn(r, r.return, te);
        }
      }
      if (r === n) {
        ke = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ke = l;
        break;
      }
      ke = r.return;
    }
  }
  function As(n) {
    for (; ke !== null; ) {
      var r = ke;
      if (r === n) {
        ke = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ke = l;
        break;
      }
      ke = r.return;
    }
  }
  function Id(n) {
    for (; ke !== null; ) {
      var r = ke;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ns(4, r);
            } catch (T) {
              Sn(r, l, T);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (T) {
                Sn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Bd(r);
            } catch (T) {
              Sn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Bd(r);
            } catch (T) {
              Sn(r, m, T);
            }
        }
      } catch (T) {
        Sn(r, r.return, T);
      }
      if (r === n) {
        ke = null;
        break;
      }
      var C = r.sibling;
      if (C !== null) {
        C.return = r.return, ke = C;
        break;
      }
      ke = r.return;
    }
  }
  var Ey = Math.ceil, Fl = je.ReactCurrentDispatcher, Mo = je.ReactCurrentOwner, mr = je.ReactCurrentBatchConfig, Ft = 0, tr = null, Gn = null, yr = 0, Ra = 0, xu = za(0), An = 0, Us = null, Li = 0, bu = 0, uf = 0, Hs = null, ua = null, Yd = 0, Tu = 1 / 0, xa = null, wu = !1, No = null, jl = null, sf = !1, el = null, Fs = 0, Pl = 0, _u = null, js = -1, Or = 0;
  function qn() {
    return (Ft & 6) !== 0 ? yt() : js !== -1 ? js : js = yt();
  }
  function Mi(n) {
    return (n.mode & 1) === 0 ? 1 : (Ft & 2) !== 0 && yr !== 0 ? yr & -yr : yy.transition !== null ? (Or === 0 && (Or = Jo()), Or) : (n = Gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : lu(n.type)), n);
  }
  function Br(n, r, l, u) {
    if (50 < Pl) throw Pl = 0, _u = null, Error(b(185));
    Bi(n, l, u), ((Ft & 2) === 0 || n !== tr) && (n === tr && ((Ft & 2) === 0 && (bu |= l), An === 4 && ui(n, yr)), sa(n, u), l === 1 && Ft === 0 && (r.mode & 1) === 0 && (Tu = yt() + 500, yu && bi()));
  }
  function sa(n, r) {
    var l = n.callbackNode;
    lo(n, r);
    var u = ei(n, n === tr ? yr : 0);
    if (u === 0) l !== null && dr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && dr(l), r === 1) n.tag === 0 ? Dl(Wd.bind(null, n)) : kc(Wd.bind(null, n)), pu(function() {
        (Ft & 6) === 0 && bi();
      }), l = null;
      else {
        switch (tu(u)) {
          case 1:
            l = Za;
            break;
          case 4:
            l = ao;
            break;
          case 16:
            l = io;
            break;
          case 536870912:
            l = Xo;
            break;
          default:
            l = io;
        }
        l = hh(l, cf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function cf(n, r) {
    if (js = -1, Or = 0, (Ft & 6) !== 0) throw Error(b(327));
    var l = n.callbackNode;
    if (ku() && n.callbackNode !== l) return null;
    var u = ei(n, n === tr ? yr : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || r) r = ff(n, u);
    else {
      r = u;
      var c = Ft;
      Ft |= 2;
      var d = oh();
      (tr !== n || yr !== r) && (xa = null, Tu = yt() + 500, tl(n, r));
      do
        try {
          uh();
          break;
        } catch (C) {
          lh(n, C);
        }
      while (!0);
      Rd(), Fl.current = d, Ft = c, Gn !== null ? r = 0 : (tr = null, yr = 0, r = An);
    }
    if (r !== 0) {
      if (r === 2 && (c = El(n), c !== 0 && (u = c, r = Ps(n, c))), r === 1) throw l = Us, tl(n, 0), ui(n, u), sa(n, yt()), l;
      if (r === 6) ui(n, u);
      else {
        if (c = n.current.alternate, (u & 30) === 0 && !Cy(c) && (r = ff(n, u), r === 2 && (d = El(n), d !== 0 && (u = d, r = Ps(n, d))), r === 1)) throw l = Us, tl(n, 0), ui(n, u), sa(n, yt()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(b(345));
          case 2:
            Uo(n, ua, xa);
            break;
          case 3:
            if (ui(n, u), (u & 130023424) === u && (r = Yd + 500 - yt(), 10 < r)) {
              if (ei(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                qn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Tc(Uo.bind(null, n, ua, xa), r);
              break;
            }
            Uo(n, ua, xa);
            break;
          case 4:
            if (ui(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var m = 31 - Ar(u);
              d = 1 << m, m = r[m], m > c && (c = m), u &= ~d;
            }
            if (u = c, u = yt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Ey(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Tc(Uo.bind(null, n, ua, xa), u);
              break;
            }
            Uo(n, ua, xa);
            break;
          case 5:
            Uo(n, ua, xa);
            break;
          default:
            throw Error(b(329));
        }
      }
    }
    return sa(n, yt()), n.callbackNode === l ? cf.bind(null, n) : null;
  }
  function Ps(n, r) {
    var l = Hs;
    return n.current.memoizedState.isDehydrated && (tl(n, r).flags |= 256), n = ff(n, r), n !== 2 && (r = ua, ua = l, r !== null && zo(r)), n;
  }
  function zo(n) {
    ua === null ? ua = n : ua.push.apply(ua, n);
  }
  function Cy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var c = l[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ri(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ui(n, r) {
    for (r &= ~uf, r &= ~bu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Ar(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Wd(n) {
    if ((Ft & 6) !== 0) throw Error(b(327));
    ku();
    var r = ei(n, 0);
    if ((r & 1) === 0) return sa(n, yt()), null;
    var l = ff(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = El(n);
      u !== 0 && (r = u, l = Ps(n, u));
    }
    if (l === 1) throw l = Us, tl(n, 0), ui(n, r), sa(n, yt()), l;
    if (l === 6) throw Error(b(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Uo(n, ua, xa), sa(n, yt()), null;
  }
  function Qd(n, r) {
    var l = Ft;
    Ft |= 1;
    try {
      return n(r);
    } finally {
      Ft = l, Ft === 0 && (Tu = yt() + 500, yu && bi());
    }
  }
  function Ao(n) {
    el !== null && el.tag === 0 && (Ft & 6) === 0 && ku();
    var r = Ft;
    Ft |= 1;
    var l = mr.transition, u = Gt;
    try {
      if (mr.transition = null, Gt = 1, n) return n();
    } finally {
      Gt = u, mr.transition = l, Ft = r, (Ft & 6) === 0 && bi();
    }
  }
  function Gd() {
    Ra = xu.current, pn(xu);
  }
  function tl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, yd(l)), Gn !== null) for (l = Gn.return; l !== null; ) {
      var u = l;
      switch (Oc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && mu();
          break;
        case 3:
          xo(), pn(Jn), pn(Dn), We();
          break;
        case 5:
          zc(u);
          break;
        case 4:
          xo();
          break;
        case 13:
          pn(_n);
          break;
        case 19:
          pn(_n);
          break;
        case 10:
          xd(u.type._context);
          break;
        case 22:
        case 23:
          Gd();
      }
      l = l.return;
    }
    if (tr = n, Gn = n = Bl(n.current, null), yr = Ra = r, An = 0, Us = null, uf = bu = Li = 0, ua = Hs = null, Co !== null) {
      for (r = 0; r < Co.length; r++) if (l = Co[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var c = u.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, u.next = m;
        }
        l.pending = u;
      }
      Co = null;
    }
    return n;
  }
  function lh(n, r) {
    do {
      var l = Gn;
      try {
        if (Rd(), bt.current = Do, Uc) {
          for (var u = Xt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Uc = !1;
        }
        if (ln = 0, ir = Yn = Xt = null, ys = !1, bo = 0, Mo.current = null, l === null || l.return === null) {
          An = 1, Us = r, Gn = null;
          break;
        }
        e: {
          var d = n, m = l.return, C = l, T = r;
          if (r = yr, C.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var F = T, re = C, ue = re.tag;
            if ((re.mode & 1) === 0 && (ue === 0 || ue === 11 || ue === 15)) {
              var te = re.alternate;
              te ? (re.updateQueue = te.updateQueue, re.memoizedState = te.memoizedState, re.lanes = te.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var be = Qv(m);
            if (be !== null) {
              be.flags &= -257, Hl(be, m, C, d, r), be.mode & 1 && Ud(d, F, r), r = be, T = F;
              var Ne = r.updateQueue;
              if (Ne === null) {
                var He = /* @__PURE__ */ new Set();
                He.add(T), r.updateQueue = He;
              } else Ne.add(T);
              break e;
            } else {
              if ((r & 1) === 0) {
                Ud(d, F, r), qd();
                break e;
              }
              T = Error(b(426));
            }
          } else if (gn && C.mode & 1) {
            var Un = Qv(m);
            if (Un !== null) {
              (Un.flags & 65536) === 0 && (Un.flags |= 256), Hl(Un, m, C, d, r), Xi(Oo(T, C));
              break e;
            }
          }
          d = T = Oo(T, C), An !== 4 && (An = 2), Hs === null ? Hs = [d] : Hs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var M = Wv(d, T, r);
                Bv(d, M);
                break e;
              case 1:
                C = T;
                var k = d.type, A = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (jl === null || !jl.has(A)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ae = Ad(d, C, r);
                  Bv(d, ae);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ch(l);
      } catch (ze) {
        r = ze, Gn === l && l !== null && (Gn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function oh() {
    var n = Fl.current;
    return Fl.current = Do, n === null ? Do : n;
  }
  function qd() {
    (An === 0 || An === 3 || An === 2) && (An = 4), tr === null || (Li & 268435455) === 0 && (bu & 268435455) === 0 || ui(tr, yr);
  }
  function ff(n, r) {
    var l = Ft;
    Ft |= 2;
    var u = oh();
    (tr !== n || yr !== r) && (xa = null, tl(n, r));
    do
      try {
        Ry();
        break;
      } catch (c) {
        lh(n, c);
      }
    while (!0);
    if (Rd(), Ft = l, Fl.current = u, Gn !== null) throw Error(b(261));
    return tr = null, yr = 0, An;
  }
  function Ry() {
    for (; Gn !== null; ) sh(Gn);
  }
  function uh() {
    for (; Gn !== null && !Xa(); ) sh(Gn);
  }
  function sh(n) {
    var r = vh(n.alternate, n, Ra);
    n.memoizedProps = n.pendingProps, r === null ? ch(n) : Gn = r, Mo.current = null;
  }
  function ch(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = eh(l, r, Ra), l !== null) {
          Gn = l;
          return;
        }
      } else {
        if (l = af(l, r), l !== null) {
          l.flags &= 32767, Gn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          An = 6, Gn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Gn = r;
        return;
      }
      Gn = r = n;
    } while (r !== null);
    An === 0 && (An = 5);
  }
  function Uo(n, r, l) {
    var u = Gt, c = mr.transition;
    try {
      mr.transition = null, Gt = 1, xy(n, r, l, u);
    } finally {
      mr.transition = c, Gt = u;
    }
    return null;
  }
  function xy(n, r, l, u) {
    do
      ku();
    while (el !== null);
    if ((Ft & 6) !== 0) throw Error(b(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(b(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Xf(n, d), n === tr && (Gn = tr = null, yr = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || sf || (sf = !0, hh(io, function() {
      return ku(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = mr.transition, mr.transition = null;
      var m = Gt;
      Gt = 1;
      var C = Ft;
      Ft |= 4, Mo.current = null, nh(n, l), Vd(l, n), su(mo), La = !!os, mo = os = null, n.current = l, Sy(l), Ka(), Ft = C, Gt = m, mr.transition = d;
    } else n.current = l;
    if (sf && (sf = !1, el = n, Fs = c), d = n.pendingLanes, d === 0 && (jl = null), Qu(l.stateNode), sa(n, yt()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (wu) throw wu = !1, n = No, No = null, n;
    return (Fs & 1) !== 0 && n.tag !== 0 && ku(), d = n.pendingLanes, (d & 1) !== 0 ? n === _u ? Pl++ : (Pl = 0, _u = n) : Pl = 0, bi(), null;
  }
  function ku() {
    if (el !== null) {
      var n = tu(Fs), r = mr.transition, l = Gt;
      try {
        if (mr.transition = null, Gt = 16 > n ? 16 : n, el === null) var u = !1;
        else {
          if (n = el, el = null, Fs = 0, (Ft & 6) !== 0) throw Error(b(331));
          var c = Ft;
          for (Ft |= 4, ke = n.current; ke !== null; ) {
            var d = ke, m = d.child;
            if ((ke.flags & 16) !== 0) {
              var C = d.deletions;
              if (C !== null) {
                for (var T = 0; T < C.length; T++) {
                  var F = C[T];
                  for (ke = F; ke !== null; ) {
                    var re = ke;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ms(8, re, d);
                    }
                    var ue = re.child;
                    if (ue !== null) ue.return = re, ke = ue;
                    else for (; ke !== null; ) {
                      re = ke;
                      var te = re.sibling, be = re.return;
                      if (of(re), re === F) {
                        ke = null;
                        break;
                      }
                      if (te !== null) {
                        te.return = be, ke = te;
                        break;
                      }
                      ke = be;
                    }
                  }
                }
                var Ne = d.alternate;
                if (Ne !== null) {
                  var He = Ne.child;
                  if (He !== null) {
                    Ne.child = null;
                    do {
                      var Un = He.sibling;
                      He.sibling = null, He = Un;
                    } while (He !== null);
                  }
                }
                ke = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null) m.return = d, ke = m;
            else e: for (; ke !== null; ) {
              if (d = ke, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ms(9, d, d.return);
              }
              var M = d.sibling;
              if (M !== null) {
                M.return = d.return, ke = M;
                break e;
              }
              ke = d.return;
            }
          }
          var k = n.current;
          for (ke = k; ke !== null; ) {
            m = ke;
            var A = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && A !== null) A.return = m, ke = A;
            else e: for (m = k; ke !== null; ) {
              if (C = ke, (C.flags & 2048) !== 0) try {
                switch (C.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ns(9, C);
                }
              } catch (ze) {
                Sn(C, C.return, ze);
              }
              if (C === m) {
                ke = null;
                break e;
              }
              var ae = C.sibling;
              if (ae !== null) {
                ae.return = C.return, ke = ae;
                break e;
              }
              ke = C.return;
            }
          }
          if (Ft = c, bi(), Zr && typeof Zr.onPostCommitFiberRoot == "function") try {
            Zr.onPostCommitFiberRoot(gl, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Gt = l, mr.transition = r;
      }
    }
    return !1;
  }
  function fh(n, r, l) {
    r = Oo(l, r), r = Wv(n, r, 1), n = zl(n, r, 1), r = qn(), n !== null && (Bi(n, 1, r), sa(n, r));
  }
  function Sn(n, r, l) {
    if (n.tag === 3) fh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        fh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (jl === null || !jl.has(u))) {
          n = Oo(l, n), n = Ad(r, n, 1), r = zl(r, n, 1), n = qn(), r !== null && (Bi(r, 1, n), sa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function by(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = qn(), n.pingedLanes |= n.suspendedLanes & l, tr === n && (yr & l) === l && (An === 4 || An === 3 && (yr & 130023424) === yr && 500 > yt() - Yd ? tl(n, 0) : uf |= l), sa(n, r);
  }
  function dh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = ya, ya <<= 1, (ya & 130023424) === 0 && (ya = 4194304)));
    var l = qn();
    n = Ea(n, r), n !== null && (Bi(n, r, l), sa(n, l));
  }
  function Ty(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), dh(n, l);
  }
  function ph(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(b(314));
    }
    u !== null && u.delete(r), dh(n, l);
  }
  var vh;
  vh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Jn.current) Wn = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return Wn = !1, Ds(n, r, l);
      Wn = (n.flags & 131072) !== 0;
    }
    else Wn = !1, gn && (r.flags & 1048576) !== 0 && Hv(r, qi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Fa(n, r), n = r.pendingProps;
        var c = ta(r, Dn.current);
        wn(r, l), c = Al(null, r, u, n, c, l);
        var d = ii();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, $n(u) ? (d = !0, ar(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, _d(r), c.updater = Jc, r.stateNode = c, c._reactInternals = r, bs(r, u, n, l), r = _s(null, r, u, !0, d, l)) : (r.tag = 0, gn && d && Dc(r), hr(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Fa(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = _y(u), n = li(u, n), c) {
            case 0:
              r = Gv(null, r, u, n, l);
              break e;
            case 1:
              r = qv(null, r, u, n, l);
              break e;
            case 11:
              r = la(null, r, u, n, l);
              break e;
            case 14:
              r = Lo(null, r, u, li(u.type, n), l);
              break e;
          }
          throw Error(b(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : li(u, c), Gv(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : li(u, c), qv(n, r, u, c, l);
      case 3:
        e: {
          if (Cu(r), n === null) throw Error(b(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Pv(n, r), ds(r, u, null, l);
          var m = r.memoizedState;
          if (u = m.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Oo(Error(b(423)), r), r = Xv(n, r, u, l, c);
            break e;
          } else if (u !== c) {
            c = Oo(Error(b(424)), r), r = Xv(n, r, u, l, c);
            break e;
          } else for (ra = Ci(r.stateNode.containerInfo.firstChild), na = r, gn = !0, Ua = null, l = Se(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Nl(), u === c) {
              r = ja(n, r, l);
              break e;
            }
            hr(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Vv(r), n === null && Ed(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, bc(u, c) ? m = null : d !== null && bc(u, d) && (r.flags |= 32), Hd(n, r), hr(n, r, m, l), r.child;
      case 6:
        return n === null && Ed(r), null;
      case 13:
        return rf(n, r, l);
      case 4:
        return Dd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Mn(r, null, u, l) : hr(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : li(u, c), la(n, r, u, c, l);
      case 7:
        return hr(n, r, r.pendingProps, l), r.child;
      case 8:
        return hr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return hr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, $e(Sa, u._currentValue), u._currentValue = m, d !== null) if (ri(d.value, m)) {
            if (d.children === c.children && !Jn.current) {
              r = ja(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var C = d.dependencies;
            if (C !== null) {
              m = d.child;
              for (var T = C.firstContext; T !== null; ) {
                if (T.context === u) {
                  if (d.tag === 1) {
                    T = Ki(-1, l & -l), T.tag = 2;
                    var F = d.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var re = F.pending;
                      re === null ? T.next = T : (T.next = re.next, re.next = T), F.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), bd(
                    d.return,
                    l,
                    r
                  ), C.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(b(341));
              m.lanes |= l, C = m.alternate, C !== null && (C.lanes |= l), bd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          hr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, wn(r, l), c = Ha(c), u = u(c), r.flags |= 1, hr(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = li(u, r.pendingProps), c = li(u.type, c), Lo(n, r, u, c, l);
      case 15:
        return gt(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : li(u, c), Fa(n, r), r.tag = 1, $n(u) ? (n = !0, ar(r)) : n = !1, wn(r, l), ef(r, u, c), bs(r, u, c, l), _s(null, r, u, !0, n, l);
      case 19:
        return ki(n, r, l);
      case 22:
        return ws(n, r, l);
    }
    throw Error(b(156, r.tag));
  };
  function hh(n, r) {
    return vn(n, r);
  }
  function wy(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ba(n, r, l, u) {
    return new wy(n, r, l, u);
  }
  function Xd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function _y(n) {
    if (typeof n == "function") return Xd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === St) return 11;
      if (n === At) return 14;
    }
    return 2;
  }
  function Bl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ba(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Bs(n, r, l, u, c, d) {
    var m = 2;
    if (u = n, typeof n == "function") Xd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Me:
        return nl(l.children, c, d, r);
      case Dt:
        m = 8, c |= 8;
        break;
      case Ot:
        return n = Ba(12, l, r, c | 2), n.elementType = Ot, n.lanes = d, n;
      case Pe:
        return n = Ba(13, l, r, c), n.elementType = Pe, n.lanes = d, n;
      case xe:
        return n = Ba(19, l, r, c), n.elementType = xe, n.lanes = d, n;
      case Ce:
        return Vl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Wt:
            m = 10;
            break e;
          case _t:
            m = 9;
            break e;
          case St:
            m = 11;
            break e;
          case At:
            m = 14;
            break e;
          case Lt:
            m = 16, u = null;
            break e;
        }
        throw Error(b(130, n == null ? n : typeof n, ""));
    }
    return r = Ba(m, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function nl(n, r, l, u) {
    return n = Ba(7, n, u, r), n.lanes = l, n;
  }
  function Vl(n, r, l, u) {
    return n = Ba(22, n, u, r), n.elementType = Ce, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Kd(n, r, l) {
    return n = Ba(6, n, null, r), n.lanes = l, n;
  }
  function df(n, r, l) {
    return r = Ba(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function mh(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eu(0), this.expirationTimes = eu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eu(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function pf(n, r, l, u, c, d, m, C, T) {
    return n = new mh(n, r, l, C, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ba(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _d(d), n;
  }
  function ky(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: rt, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function Zd(n) {
    if (!n) return _r;
    n = n._reactInternals;
    e: {
      if (mt(n) !== n || n.tag !== 1) throw Error(b(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if ($n(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(b(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if ($n(l)) return cs(n, l, r);
    }
    return r;
  }
  function yh(n, r, l, u, c, d, m, C, T) {
    return n = pf(l, u, !0, n, c, d, m, C, T), n.context = Zd(null), l = n.current, u = qn(), c = Mi(l), d = Ki(u, c), d.callback = r ?? null, zl(l, d, c), n.current.lanes = c, Bi(n, c, u), sa(n, u), n;
  }
  function vf(n, r, l, u) {
    var c = r.current, d = qn(), m = Mi(c);
    return l = Zd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ki(d, m), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = zl(c, r, m), n !== null && (Br(n, c, m, d), Nc(n, c, m)), m;
  }
  function hf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Jd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function mf(n, r) {
    Jd(n, r), (n = n.alternate) && Jd(n, r);
  }
  function gh() {
    return null;
  }
  var Ho = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ep(n) {
    this._internalRoot = n;
  }
  yf.prototype.render = ep.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(b(409));
    vf(n, r, null, null);
  }, yf.prototype.unmount = ep.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ao(function() {
        vf(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function yf(n) {
    this._internalRoot = n;
  }
  yf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ct();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Zn.length && r !== 0 && r < Zn[l].priority; l++) ;
      Zn.splice(l, 0, n), l === 0 && Xu(n);
    }
  };
  function tp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function gf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Sh() {
  }
  function Dy(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var F = hf(m);
          d.call(F);
        };
      }
      var m = yh(r, u, n, 0, null, !1, !1, "", Sh);
      return n._reactRootContainer = m, n[Qi] = m.current, fu(n.nodeType === 8 ? n.parentNode : n), Ao(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var C = u;
      u = function() {
        var F = hf(T);
        C.call(F);
      };
    }
    var T = pf(n, 0, !1, null, null, !1, !1, "", Sh);
    return n._reactRootContainer = T, n[Qi] = T.current, fu(n.nodeType === 8 ? n.parentNode : n), Ao(function() {
      vf(r, T, l, u);
    }), T;
  }
  function Vs(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var C = c;
        c = function() {
          var T = hf(m);
          C.call(T);
        };
      }
      vf(r, m, n, c);
    } else m = Dy(l, r, n, c, u);
    return hf(m);
  }
  Vt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ja(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), sa(r, yt()), (Ft & 6) === 0 && (Tu = yt() + 500, bi()));
        }
        break;
      case 13:
        Ao(function() {
          var u = Ea(n, 1);
          if (u !== null) {
            var c = qn();
            Br(u, n, 1, c);
          }
        }), mf(n, 1);
    }
  }, Gu = function(n) {
    if (n.tag === 13) {
      var r = Ea(n, 134217728);
      if (r !== null) {
        var l = qn();
        Br(r, n, 134217728, l);
      }
      mf(n, 134217728);
    }
  }, mi = function(n) {
    if (n.tag === 13) {
      var r = Mi(n), l = Ea(n, r);
      if (l !== null) {
        var u = qn();
        Br(l, n, r, u);
      }
      mf(n, r);
    }
  }, ct = function() {
    return Gt;
  }, nu = function(n, r) {
    var l = Gt;
    try {
      return Gt = n, r();
    } finally {
      Gt = l;
    }
  }, Bt = function(n, r, l) {
    switch (r) {
      case "input":
        if (rr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = Tn(u);
              if (!c) throw Error(b(90));
              Kn(u), rr(u, c);
            }
          }
        }
        break;
      case "textarea":
        ha(n, l);
        break;
      case "select":
        r = l.value, r != null && It(n, !!l.multiple, r, !1);
    }
  }, no = Qd, hl = Ao;
  var Oy = { usingClientEntryPoint: !1, Events: [Ye, ai, Tn, Pi, to, Qd] }, $s = { findFiberByHostInstance: yo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Eh = { bundleType: $s.bundleType, version: $s.version, rendererPackageName: $s.rendererPackageName, rendererConfig: $s.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: $s.findFiberByHostInstance || gh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$l.isDisabled && $l.supportsFiber) try {
      gl = $l.inject(Eh), Zr = $l;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tp(r)) throw Error(b(200));
    return ky(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!tp(n)) throw Error(b(299));
    var l = !1, u = "", c = Ho;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = pf(n, 1, !1, null, null, l, !1, u, c), n[Qi] = r.current, fu(n.nodeType === 8 ? n.parentNode : n), new ep(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(b(188)) : (n = Object.keys(n).join(","), Error(b(268, n)));
    return n = Ln(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Ao(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!gf(r)) throw Error(b(200));
    return Vs(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!tp(n)) throw Error(b(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", m = Ho;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = yh(r, null, n, 1, l ?? null, c, !1, d, m), n[Qi] = r.current, fu(n), u) for (n = 0; n < u.length; n++) l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new yf(r);
  }, Qa.render = function(n, r, l) {
    if (!gf(r)) throw Error(b(200));
    return Vs(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!gf(n)) throw Error(b(40));
    return n._reactRootContainer ? (Ao(function() {
      Vs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = Qd, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!gf(l)) throw Error(b(200));
    if (n == null || n._reactInternals === void 0) throw Error(b(38));
    return Vs(n, r, l, !1, u);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Ga = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yx;
function Dk() {
  return yx || (yx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var S = lv(), _ = wx(), b = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ee = !1;
    function W(e) {
      ee = e;
    }
    function Q(e) {
      if (!ee) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        le("warn", e, a);
      }
    }
    function g(e) {
      if (!ee) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        le("error", e, a);
      }
    }
    function le(e, t, a) {
      {
        var i = b.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Y = 0, X = 1, ve = 2, q = 3, P = 4, K = 5, ce = 6, ie = 7, we = 8, Ct = 9, Ue = 10, Fe = 11, je = 12, De = 13, rt = 14, Me = 15, Dt = 16, Ot = 17, Wt = 18, _t = 19, St = 21, Pe = 22, xe = 23, At = 24, Lt = 25, Ce = !0, ne = !1, Le = !1, pe = !1, O = !1, V = !0, Xe = !0, Be = !0, ft = !0, ot = /* @__PURE__ */ new Set(), et = {}, dt = {};
    function Ke(e, t) {
      Qt(e, t), Qt(e + "Capture", t);
    }
    function Qt(e, t) {
      et[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), et[e] = t;
      {
        var a = e.toLowerCase();
        dt[a] = e, e === "onDoubleClick" && (dt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ot.add(t[i]);
    }
    var En = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Kn = Object.prototype.hasOwnProperty;
    function cn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Fn(e) {
      try {
        return Cn(e), !1;
      } catch {
        return !0;
      }
    }
    function Cn(e) {
      return "" + e;
    }
    function Rn(e, t) {
      if (Fn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, cn(e)), Cn(e);
    }
    function rr(e) {
      if (Fn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cn(e)), Cn(e);
    }
    function Kr(e, t) {
      if (Fn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, cn(e)), Cn(e);
    }
    function sr(e, t) {
      if (Fn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, cn(e)), Cn(e);
    }
    function jn(e) {
      if (Fn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", cn(e)), Cn(e);
    }
    function It(e) {
      if (Fn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", cn(e)), Cn(e);
    }
    var On = 0, yn = 1, ha = 2, xn = 3, Pn = 4, Lr = 5, cr = 6, ma = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", oe = ma + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", L = new RegExp("^[" + ma + "][" + oe + "]*$"), fe = {}, Qe = {};
    function ye(e) {
      return Kn.call(Qe, e) ? !0 : Kn.call(fe, e) ? !1 : L.test(e) ? (Qe[e] = !0, !0) : (fe[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Mt(e, t, a) {
      return t !== null ? t.type === On : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Ie(e, t, a, i) {
      if (a !== null && a.type === On)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ut(e, t, a, i) {
      if (t === null || typeof t > "u" || Ie(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case xn:
            return !t;
          case Pn:
            return t === !1;
          case Lr:
            return isNaN(t);
          case cr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Ze(e) {
      return Bt.hasOwnProperty(e) ? Bt[e] : null;
    }
    function it(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === ha || t === xn || t === Pn, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Bt = {}, Mr = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Mr.forEach(function(e) {
      Bt[e] = new it(
        e,
        On,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Bt[t] = new it(
        t,
        yn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Bt[e] = new it(
        e,
        ha,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Bt[e] = new it(
        e,
        ha,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Bt[e] = new it(
        e,
        xn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Bt[e] = new it(
        e,
        xn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Bt[e] = new it(
        e,
        Pn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Bt[e] = new it(
        e,
        cr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Bt[e] = new it(
        e,
        Lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Bn = /[\-\:]([a-z])/g, wr = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Bn, wr);
      Bt[t] = new it(
        t,
        yn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Bn, wr);
      Bt[t] = new it(
        t,
        yn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Bn, wr);
      Bt[t] = new it(
        t,
        yn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Bt[e] = new it(
        e,
        yn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Pi = "xlinkHref";
    Bt[Pi] = new it(
      "xlinkHref",
      yn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Bt[e] = new it(
        e,
        yn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var to = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, no = !1;
    function hl(e) {
      !no && to.test(e) && (no = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ml(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Rn(a, t), i.sanitizeURL && hl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Pn) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Ut(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Ut(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === xn)
            return a;
          f = e.getAttribute(s);
        }
        return Ut(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ro(e, t, a, i) {
      {
        if (!ye(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Rn(a, t), o === "" + a ? a : o;
      }
    }
    function Nr(e, t, a, i) {
      var o = Ze(t);
      if (!Mt(t, o, i)) {
        if (Ut(t, a, o, i) && (a = null), i || o === null) {
          if (ye(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Rn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var p = o.propertyName;
          if (a === null) {
            var v = o.type;
            e[p] = v === xn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = o.attributeName, E = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var D = o.type, w;
          D === xn || D === Pn && a === !0 ? w = "" : (Rn(a, y), w = "" + a, o.sanitizeURL && hl(w.toString())), E ? e.setAttributeNS(E, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var zr = Symbol.for("react.element"), fr = Symbol.for("react.portal"), pi = Symbol.for("react.fragment"), qa = Symbol.for("react.strict_mode"), vi = Symbol.for("react.profiler"), hi = Symbol.for("react.provider"), x = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), mt = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), Tt = Symbol.for("react.scope"), xt = Symbol.for("react.debug_trace_mode"), Ln = Symbol.for("react.offscreen"), fn = Symbol.for("react.legacy_hidden"), vn = Symbol.for("react.cache"), dr = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, Ka = "@@iterator";
    function yt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[Ka];
      return typeof t == "function" ? t : null;
    }
    var Et = Object.assign, Za = 0, ao, io, yl, Xo, gl, Zr, Qu;
    function Ar() {
    }
    Ar.__reactDisabledLog = !0;
    function sc() {
      {
        if (Za === 0) {
          ao = console.log, io = console.info, yl = console.warn, Xo = console.error, gl = console.group, Zr = console.groupCollapsed, Qu = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ar,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Za++;
      }
    }
    function cc() {
      {
        if (Za--, Za === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Et({}, e, {
              value: ao
            }),
            info: Et({}, e, {
              value: io
            }),
            warn: Et({}, e, {
              value: yl
            }),
            error: Et({}, e, {
              value: Xo
            }),
            group: Et({}, e, {
              value: gl
            }),
            groupCollapsed: Et({}, e, {
              value: Zr
            }),
            groupEnd: Et({}, e, {
              value: Qu
            })
          });
        }
        Za < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ko = b.ReactCurrentDispatcher, Sl;
    function ya(e, t, a) {
      {
        if (Sl === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            Sl = i && i[1] || "";
          }
        return `
` + Sl + e;
      }
    }
    var Ja = !1, ei;
    {
      var Zo = typeof WeakMap == "function" ? WeakMap : Map;
      ei = new Zo();
    }
    function lo(e, t) {
      if (!e || Ja)
        return "";
      {
        var a = ei.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ja = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ko.current, Ko.current = null, sc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (j) {
              i = j;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            i = j;
          }
          e();
        }
      } catch (j) {
        if (j && i && typeof j.stack == "string") {
          for (var p = j.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, E = v.length - 1; y >= 1 && E >= 0 && p[y] !== v[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (p[y] !== v[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || p[y] !== v[E]) {
                    var D = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ei.set(e, D), D;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Ja = !1, Ko.current = s, cc(), Error.prepareStackTrace = o;
      }
      var w = e ? e.displayName || e.name : "", U = w ? ya(w) : "";
      return typeof e == "function" && ei.set(e, U), U;
    }
    function El(e, t, a) {
      return lo(e, !0);
    }
    function Jo(e, t, a) {
      return lo(e, !1);
    }
    function eu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Bi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return lo(e, eu(e));
      if (typeof e == "string")
        return ya(e);
      switch (e) {
        case ge:
          return ya("Suspense");
        case Oe:
          return ya("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Z:
            return Jo(e.render);
          case mt:
            return Bi(e.type, t, a);
          case pt: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Bi(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Xf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case K:
          return ya(e.type);
        case Dt:
          return ya("Lazy");
        case De:
          return ya("Suspense");
        case _t:
          return ya("SuspenseList");
        case Y:
        case ve:
        case Me:
          return Jo(e.type);
        case Fe:
          return Jo(e.type.render);
        case X:
          return El(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Xf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Gt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function tu(e) {
      return e.displayName || "Context";
    }
    function Vt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case pi:
          return "Fragment";
        case fr:
          return "Portal";
        case vi:
          return "Profiler";
        case qa:
          return "StrictMode";
        case ge:
          return "Suspense";
        case Oe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return tu(t) + ".Consumer";
          case hi:
            var a = e;
            return tu(a._context) + ".Provider";
          case Z:
            return Gt(e, e.render, "ForwardRef");
          case mt:
            var i = e.displayName || null;
            return i !== null ? i : Vt(e.type) || "Memo";
          case pt: {
            var o = e, s = o._payload, f = o._init;
            try {
              return Vt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Gu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function mi(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case At:
          return "Cache";
        case Ct:
          var i = a;
          return mi(i) + ".Consumer";
        case Ue:
          var o = a;
          return mi(o._context) + ".Provider";
        case Wt:
          return "DehydratedFragment";
        case Fe:
          return Gu(a, a.render, "ForwardRef");
        case ie:
          return "Fragment";
        case K:
          return a;
        case P:
          return "Portal";
        case q:
          return "Root";
        case ce:
          return "Text";
        case Dt:
          return Vt(a);
        case we:
          return a === qa ? "StrictMode" : "Mode";
        case Pe:
          return "Offscreen";
        case je:
          return "Profiler";
        case St:
          return "Scope";
        case De:
          return "Suspense";
        case _t:
          return "SuspenseList";
        case Lt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case X:
        case Y:
        case Ot:
        case ve:
        case rt:
        case Me:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var nu = b.ReactDebugCurrentFrame, pr = null, yi = !1;
    function Ur() {
      {
        if (pr === null)
          return null;
        var e = pr._debugOwner;
        if (e !== null && typeof e < "u")
          return ct(e);
      }
      return null;
    }
    function gi() {
      return pr === null ? "" : Vi(pr);
    }
    function hn() {
      nu.getCurrentStack = null, pr = null, yi = !1;
    }
    function nn(e) {
      nu.getCurrentStack = e === null ? null : gi, pr = e, yi = !1;
    }
    function Cl() {
      return pr;
    }
    function Zn(e) {
      yi = e;
    }
    function Hr(e) {
      return "" + e;
    }
    function Da(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return It(e), e;
        default:
          return "";
      }
    }
    var oo = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function qu(e, t) {
      oo[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Rl(e) {
      return e._valueTracker;
    }
    function uo(e) {
      e._valueTracker = null;
    }
    function Kf(e) {
      var t = "";
      return e && (Xu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = Xu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      It(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            It(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            It(p), i = "" + p;
          },
          stopTracking: function() {
            uo(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ti(e) {
      Rl(e) || (e._valueTracker = Oa(e));
    }
    function Si(e) {
      if (!e)
        return !1;
      var t = Rl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Kf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function La(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ru = !1, au = !1, xl = !1, so = !1;
    function iu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function lu(e, t) {
      var a = e, i = t.checked, o = Et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function ni(e, t) {
      qu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !au && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), au = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ru && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), ru = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Da(t.value != null ? t.value : i),
        controlled: iu(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && Nr(a, "checked", i, !1);
    }
    function R(e, t) {
      var a = e;
      {
        var i = iu(t);
        !a._wrapperState.controlled && i && !so && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), so = !0), a._wrapperState.controlled && !i && !xl && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xl = !0);
      }
      h(e, t);
      var o = Da(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Hr(o)) : a.value !== Hr(o) && (a.value = Hr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ge(a, t.type, o) : t.hasOwnProperty("defaultValue") && Ge(a, t.type, Da(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function H(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Hr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function B(e, t) {
      var a = e;
      R(a, t), de(a, t);
    }
    function de(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Rn(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Fh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Si(f), R(f, p);
          }
        }
      }
    }
    function Ge(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || La(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Hr(e._wrapperState.initialValue) : e.defaultValue !== Hr(a) && (e.defaultValue = Hr(a)));
    }
    var me = !1, tt = !1, wt = !1;
    function $t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? S.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || tt || (tt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (wt || (wt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !me && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), me = !0);
    }
    function dn(e, t) {
      t.value != null && e.setAttribute("value", Hr(Da(t.value)));
    }
    var rn = Array.isArray;
    function Rt(e) {
      return rn(e);
    }
    var an;
    an = !1;
    function bn() {
      var e = Ur();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var bl = ["value", "defaultValue"];
    function Ku(e) {
      {
        qu("select", e);
        for (var t = 0; t < bl.length; t++) {
          var a = bl[t];
          if (e[a] != null) {
            var i = Rt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, bn()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, bn());
          }
        }
      }
    }
    function $i(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < o.length; v++) {
          var y = f.hasOwnProperty("$" + o[v].value);
          o[v].selected !== y && (o[v].selected = y), y && i && (o[v].defaultSelected = !0);
        }
      } else {
        for (var E = Hr(Da(a)), D = null, w = 0; w < o.length; w++) {
          if (o[w].value === E) {
            o[w].selected = !0, i && (o[w].defaultSelected = !0);
            return;
          }
          D === null && !o[w].disabled && (D = o[w]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function Zu(e, t) {
      return Et({}, t, {
        value: void 0
      });
    }
    function co(e, t) {
      var a = e;
      Ku(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !an && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), an = !0);
    }
    function Zf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? $i(a, !!t.multiple, i, !1) : t.defaultValue != null && $i(a, !!t.multiple, t.defaultValue, !0);
    }
    function fc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? $i(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? $i(a, !!t.multiple, t.defaultValue, !0) : $i(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Jf(e, t) {
      var a = e, i = t.value;
      i != null && $i(a, !!t.multiple, i, !1);
    }
    var ov = !1;
    function ed(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Hr(a._wrapperState.initialValue)
      });
      return i;
    }
    function td(e, t) {
      var a = e;
      qu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ov && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component"), ov = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Rt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Da(i)
      };
    }
    function uv(e, t) {
      var a = e, i = Da(t.value), o = Da(t.defaultValue);
      if (i != null) {
        var s = Hr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Hr(o));
    }
    function sv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function iy(e, t) {
      uv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", nd = "http://www.w3.org/1998/Math/MathML", rd = "http://www.w3.org/2000/svg";
    function ad(e) {
      switch (e) {
        case "svg":
          return rd;
        case "math":
          return nd;
        default:
          return Ii;
      }
    }
    function id(e, t) {
      return e == null || e === Ii ? ad(t) : e === rd && t === "foreignObject" ? Ii : e;
    }
    var cv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, dc, fv = cv(function(e, t) {
      if (e.namespaceURI === rd && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Jr = 1, Yi = 3, Vn = 8, Wi = 9, ld = 11, ou = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ju = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, es = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function dv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var pv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(es).forEach(function(e) {
      pv.forEach(function(t) {
        es[dv(t, e)] = es[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(es.hasOwnProperty(e) && es[e]) ? t + "px" : (sr(t, e), ("" + t).trim());
    }
    var vv = /([A-Z])/g, hv = /^ms-/;
    function uu(e) {
      return e.replace(vv, "-$1").toLowerCase().replace(hv, "-ms-");
    }
    var mv = function() {
    };
    {
      var ly = /^(?:webkit|moz|o)[A-Z]/, oy = /^-ms-/, yv = /-(.)/g, od = /;\s*$/, Ei = {}, fo = {}, gv = !1, ts = !1, uy = function(e) {
        return e.replace(yv, function(t, a) {
          return a.toUpperCase();
        });
      }, Sv = function(e) {
        Ei.hasOwnProperty(e) && Ei[e] || (Ei[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          uy(e.replace(oy, "ms-"))
        ));
      }, ud = function(e) {
        Ei.hasOwnProperty(e) && Ei[e] || (Ei[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, sd = function(e, t) {
        fo.hasOwnProperty(t) && fo[t] || (fo[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(od, "")));
      }, Ev = function(e, t) {
        gv || (gv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Cv = function(e, t) {
        ts || (ts = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      mv = function(e, t) {
        e.indexOf("-") > -1 ? Sv(e) : ly.test(e) ? ud(e) : od.test(t) && sd(e, t), typeof t == "number" && (isNaN(t) ? Ev(e, t) : isFinite(t) || Cv(e, t));
      };
    }
    var Rv = mv;
    function sy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : uu(i)) + ":", t += pc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function xv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Rv(i, t[i]);
          var s = pc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function cy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function bv(e) {
      var t = {};
      for (var a in e)
        for (var i = Ju[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function fy(e, t) {
      {
        if (!t)
          return;
        var a = bv(e), i = bv(t), o = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (o[v])
              continue;
            o[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", cy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ri = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ns = Et({
      menuitem: !0
    }, ri), Tv = "__html";
    function vc(e, t) {
      if (t) {
        if (ns[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Tv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var rs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, hc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, su = {}, dy = new RegExp("^(aria)-[" + oe + "]*$"), cu = new RegExp("^(aria)[A-Z][" + oe + "]*$");
    function cd(e, t) {
      {
        if (Kn.call(su, t) && su[t])
          return !0;
        if (cu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = hc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), su[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), su[t] = !0, !0;
        }
        if (dy.test(t)) {
          var o = t.toLowerCase(), s = hc.hasOwnProperty(o) ? o : null;
          if (s == null)
            return su[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), su[t] = !0, !0;
        }
      }
      return !0;
    }
    function as(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = cd(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function fd(e, t) {
      Tl(e, t) || as(e, t);
    }
    var dd = !1;
    function mc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !dd && (dd = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var po = function() {
    };
    {
      var vr = {}, pd = /^on./, yc = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + oe + "]*$"), _v = new RegExp("^(aria)[A-Z][" + oe + "]*$");
      po = function(e, t, a, i) {
        if (Kn.call(vr, t) && vr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), vr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), vr[t] = !0, !0;
          if (pd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), vr[t] = !0, !0;
        } else if (pd.test(t))
          return yc.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), vr[t] = !0, !0;
        if (wv.test(t) || _v.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), vr[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), vr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), vr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), vr[t] = !0, !0;
        var v = Ze(t), y = v !== null && v.type === On;
        if (rs.hasOwnProperty(o)) {
          var E = rs[o];
          if (E !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, E), vr[t] = !0, !0;
        } else if (!y && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), vr[t] = !0, !0;
        return typeof a == "boolean" && Ie(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), vr[t] = !0, !0) : y ? !0 : Ie(t, a, v, !1) ? (vr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === xn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), vr[t] = !0), !0);
      };
    }
    var kv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = po(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Dv(e, t, a) {
      Tl(e, t) || kv(e, t, a);
    }
    var vd = 1, gc = 2, Ma = 4, hd = vd | gc | Ma, vo = null;
    function py(e) {
      vo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), vo = e;
    }
    function vy() {
      vo === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), vo = null;
    }
    function is(e) {
      return e === vo;
    }
    function md(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var Sc = null, ho = null, en = null;
    function Ec(e) {
      var t = Lu(e);
      if (t) {
        if (typeof Sc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Fh(a);
          Sc(t.stateNode, t.type, i);
        }
      }
    }
    function Cc(e) {
      Sc = e;
    }
    function fu(e) {
      ho ? en ? en.push(e) : en = [e] : ho = e;
    }
    function Ov() {
      return ho !== null || en !== null;
    }
    function Rc() {
      if (ho) {
        var e = ho, t = en;
        if (ho = null, en = null, Ec(e), t)
          for (var a = 0; a < t.length; a++)
            Ec(t[a]);
      }
    }
    var du = function(e, t) {
      return e(t);
    }, ls = function() {
    }, wl = !1;
    function Lv() {
      var e = Ov();
      e && (ls(), Rc());
    }
    function Mv(e, t, a) {
      if (wl)
        return e(t, a);
      wl = !0;
      try {
        return du(e, t, a);
      } finally {
        wl = !1, Lv();
      }
    }
    function hy(e, t, a) {
      du = e, ls = a;
    }
    function Nv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function xc(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Nv(t));
        default:
          return !1;
      }
    }
    function _l(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Fh(a);
      if (i === null)
        return null;
      var o = i[t];
      if (xc(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var os = !1;
    if (En)
      try {
        var mo = {};
        Object.defineProperty(mo, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", mo, mo), window.removeEventListener("test", mo, mo);
      } catch {
        os = !1;
      }
    function bc(e, t, a, i, o, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (E) {
        this.onError(E);
      }
    }
    var Tc = bc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var yd = document.createElement("react");
      Tc = function(t, a, i, o, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var E = document.createEvent("Event"), D = !1, w = !0, U = window.event, j = Object.getOwnPropertyDescriptor(window, "event");
        function $() {
          yd.removeEventListener(I, qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var Ee = Array.prototype.slice.call(arguments, 3);
        function qe() {
          D = !0, $(), a.apply(i, Ee), w = !1;
        }
        var Ve, Pt = !1, kt = !1;
        function N(z) {
          if (Ve = z.error, Pt = !0, Ve === null && z.colno === 0 && z.lineno === 0 && (kt = !0), z.defaultPrevented && Ve != null && typeof Ve == "object")
            try {
              Ve._suppressLogging = !0;
            } catch {
            }
        }
        var I = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", N), yd.addEventListener(I, qe, !1), E.initEvent(I, !1, !1), yd.dispatchEvent(E), j && Object.defineProperty(window, "event", j), D && w && (Pt ? kt && (Ve = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ve = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ve)), window.removeEventListener("error", N), !D)
          return $(), bc.apply(this, arguments);
      };
    }
    var zv = Tc, pu = !1, wc = null, vu = !1, Ci = null, Av = {
      onError: function(e) {
        pu = !0, wc = e;
      }
    };
    function kl(e, t, a, i, o, s, f, p, v) {
      pu = !1, wc = null, zv.apply(Av, arguments);
    }
    function Ri(e, t, a, i, o, s, f, p, v) {
      if (kl.apply(this, arguments), pu) {
        var y = ss();
        vu || (vu = !0, Ci = y);
      }
    }
    function us() {
      if (vu) {
        var e = Ci;
        throw vu = !1, Ci = null, e;
      }
    }
    function Qi() {
      return pu;
    }
    function ss() {
      if (pu) {
        var e = wc;
        return pu = !1, wc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function hu(e) {
      return e._reactInternals;
    }
    function my(e) {
      return e._reactInternals !== void 0;
    }
    function yo(e, t) {
      e._reactInternals = t;
    }
    var Ye = (
      /*                      */
      0
    ), ai = (
      /*                */
      1
    ), Tn = (
      /*                    */
      2
    ), Ht = (
      /*                       */
      4
    ), Na = (
      /*                */
      16
    ), za = (
      /*                 */
      32
    ), pn = (
      /*                     */
      64
    ), $e = (
      /*                   */
      128
    ), _r = (
      /*            */
      256
    ), Dn = (
      /*                          */
      512
    ), Jn = (
      /*                     */
      1024
    ), ea = (
      /*                      */
      2048
    ), ta = (
      /*                    */
      4096
    ), $n = (
      /*                   */
      8192
    ), mu = (
      /*             */
      16384
    ), Uv = (
      /*               */
      32767
    ), cs = (
      /*                   */
      32768
    ), ar = (
      /*                */
      65536
    ), _c = (
      /* */
      131072
    ), xi = (
      /*                       */
      1048576
    ), yu = (
      /*                    */
      2097152
    ), Gi = (
      /*                 */
      4194304
    ), kc = (
      /*                */
      8388608
    ), Dl = (
      /*               */
      16777216
    ), bi = (
      /*              */
      33554432
    ), Ol = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ht | Jn | 0
    ), Ll = Tn | Ht | Na | za | Dn | ta | $n, Ml = Ht | pn | Dn | $n, qi = ea | Na, In = Gi | kc | yu, Aa = b.ReactCurrentOwner;
    function ga(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Tn | ta)) !== Ye && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === q ? a : null;
    }
    function Ti(e) {
      if (e.tag === De) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wi(e) {
      return e.tag === q ? e.stateNode.containerInfo : null;
    }
    function go(e) {
      return ga(e) === e;
    }
    function Hv(e) {
      {
        var t = Aa.current;
        if (t !== null && t.tag === X) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = hu(e);
      return o ? ga(o) === o : !1;
    }
    function Dc(e) {
      if (ga(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Oc(e) {
      var t = e.alternate;
      if (!t) {
        var a = ga(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = o = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Dc(s), e;
            if (v === o)
              return Dc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var y = !1, E = s.child; E; ) {
            if (E === i) {
              y = !0, i = s, o = f;
              break;
            }
            if (E === o) {
              y = !0, o = s, i = f;
              break;
            }
            E = E.sibling;
          }
          if (!y) {
            for (E = f.child; E; ) {
              if (E === i) {
                y = !0, i = f, o = s;
                break;
              }
              if (E === o) {
                y = !0, o = f, i = s;
                break;
              }
              E = E.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== q)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function na(e) {
      var t = Oc(e);
      return t !== null ? ra(t) : null;
    }
    function ra(e) {
      if (e.tag === K || e.tag === ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ra(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function gn(e) {
      var t = Oc(e);
      return t !== null ? Ua(t) : null;
    }
    function Ua(e) {
      if (e.tag === K || e.tag === ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== P) {
          var a = Ua(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var gd = _.unstable_scheduleCallback, Fv = _.unstable_cancelCallback, Sd = _.unstable_shouldYield, Ed = _.unstable_requestPaint, er = _.unstable_now, Lc = _.unstable_getCurrentPriorityLevel, fs = _.unstable_ImmediatePriority, Nl = _.unstable_UserBlockingPriority, Xi = _.unstable_NormalPriority, yy = _.unstable_LowPriority, So = _.unstable_IdlePriority, Mc = _.unstable_yieldValue, jv = _.unstable_setDisableYieldValue, Eo = null, Mn = null, Se = null, Sa = !1, aa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function gu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Xe && (e = Et({}, e, {
          getLaneLabelMap: Co,
          injectProfilingHooks: Ha
        })), Eo = t.inject(e), Mn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Cd(e, t) {
      if (Mn && typeof Mn.onScheduleFiberRoot == "function")
        try {
          Mn.onScheduleFiberRoot(Eo, e, t);
        } catch (a) {
          Sa || (Sa = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Rd(e, t) {
      if (Mn && typeof Mn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & $e) === $e;
          if (Be) {
            var i;
            switch (t) {
              case Fr:
                i = fs;
                break;
              case ki:
                i = Nl;
                break;
              case Fa:
                i = Xi;
                break;
              case ja:
                i = So;
                break;
              default:
                i = Xi;
                break;
            }
            Mn.onCommitFiberRoot(Eo, e, i, a);
          }
        } catch (o) {
          Sa || (Sa = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function xd(e) {
      if (Mn && typeof Mn.onPostCommitFiberRoot == "function")
        try {
          Mn.onPostCommitFiberRoot(Eo, e);
        } catch (t) {
          Sa || (Sa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function bd(e) {
      if (Mn && typeof Mn.onCommitFiberUnmount == "function")
        try {
          Mn.onCommitFiberUnmount(Eo, e);
        } catch (t) {
          Sa || (Sa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function wn(e) {
      if (typeof Mc == "function" && (jv(e), W(e)), Mn && typeof Mn.setStrictMode == "function")
        try {
          Mn.setStrictMode(Eo, e);
        } catch (t) {
          Sa || (Sa = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ha(e) {
      Se = e;
    }
    function Co() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < bo; a++) {
          var i = $v(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Td(e) {
      Se !== null && typeof Se.markCommitStarted == "function" && Se.markCommitStarted(e);
    }
    function wd() {
      Se !== null && typeof Se.markCommitStopped == "function" && Se.markCommitStopped();
    }
    function Ea(e) {
      Se !== null && typeof Se.markComponentRenderStarted == "function" && Se.markComponentRenderStarted(e);
    }
    function Ca() {
      Se !== null && typeof Se.markComponentRenderStopped == "function" && Se.markComponentRenderStopped();
    }
    function _d(e) {
      Se !== null && typeof Se.markComponentPassiveEffectMountStarted == "function" && Se.markComponentPassiveEffectMountStarted(e);
    }
    function Pv() {
      Se !== null && typeof Se.markComponentPassiveEffectMountStopped == "function" && Se.markComponentPassiveEffectMountStopped();
    }
    function Ki(e) {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStarted == "function" && Se.markComponentPassiveEffectUnmountStarted(e);
    }
    function zl() {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStopped == "function" && Se.markComponentPassiveEffectUnmountStopped();
    }
    function Nc(e) {
      Se !== null && typeof Se.markComponentLayoutEffectMountStarted == "function" && Se.markComponentLayoutEffectMountStarted(e);
    }
    function Bv() {
      Se !== null && typeof Se.markComponentLayoutEffectMountStopped == "function" && Se.markComponentLayoutEffectMountStopped();
    }
    function ds(e) {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStarted == "function" && Se.markComponentLayoutEffectUnmountStarted(e);
    }
    function kd() {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStopped == "function" && Se.markComponentLayoutEffectUnmountStopped();
    }
    function ps(e, t, a) {
      Se !== null && typeof Se.markComponentErrored == "function" && Se.markComponentErrored(e, t, a);
    }
    function _i(e, t, a) {
      Se !== null && typeof Se.markComponentSuspended == "function" && Se.markComponentSuspended(e, t, a);
    }
    function vs(e) {
      Se !== null && typeof Se.markLayoutEffectsStarted == "function" && Se.markLayoutEffectsStarted(e);
    }
    function hs() {
      Se !== null && typeof Se.markLayoutEffectsStopped == "function" && Se.markLayoutEffectsStopped();
    }
    function Ro(e) {
      Se !== null && typeof Se.markPassiveEffectsStarted == "function" && Se.markPassiveEffectsStarted(e);
    }
    function Dd() {
      Se !== null && typeof Se.markPassiveEffectsStopped == "function" && Se.markPassiveEffectsStopped();
    }
    function xo(e) {
      Se !== null && typeof Se.markRenderStarted == "function" && Se.markRenderStarted(e);
    }
    function Vv() {
      Se !== null && typeof Se.markRenderYielded == "function" && Se.markRenderYielded();
    }
    function zc() {
      Se !== null && typeof Se.markRenderStopped == "function" && Se.markRenderStopped();
    }
    function _n(e) {
      Se !== null && typeof Se.markRenderScheduled == "function" && Se.markRenderScheduled(e);
    }
    function Ac(e, t) {
      Se !== null && typeof Se.markForceUpdateScheduled == "function" && Se.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      Se !== null && typeof Se.markStateUpdateScheduled == "function" && Se.markStateUpdateScheduled(e, t);
    }
    var We = (
      /*                         */
      0
    ), bt = (
      /*                 */
      1
    ), qt = (
      /*                    */
      2
    ), ln = (
      /*               */
      8
    ), Xt = (
      /*              */
      16
    ), Yn = Math.clz32 ? Math.clz32 : ys, ir = Math.log, Uc = Math.LN2;
    function ys(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ir(t) / Uc | 0) | 0;
    }
    var bo = 31, J = (
      /*                        */
      0
    ), Yt = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), Al = (
      /*    */
      2
    ), ii = (
      /*             */
      4
    ), kr = (
      /*            */
      8
    ), Nn = (
      /*                     */
      16
    ), Zi = (
      /*                */
      32
    ), Ul = (
      /*                       */
      4194240
    ), To = (
      /*                        */
      64
    ), Hc = (
      /*                        */
      128
    ), Fc = (
      /*                        */
      256
    ), jc = (
      /*                        */
      512
    ), Pc = (
      /*                        */
      1024
    ), Bc = (
      /*                        */
      2048
    ), Vc = (
      /*                        */
      4096
    ), $c = (
      /*                        */
      8192
    ), Ic = (
      /*                        */
      16384
    ), wo = (
      /*                       */
      32768
    ), Yc = (
      /*                       */
      65536
    ), Su = (
      /*                       */
      131072
    ), Eu = (
      /*                       */
      262144
    ), Wc = (
      /*                       */
      524288
    ), gs = (
      /*                       */
      1048576
    ), Qc = (
      /*                       */
      2097152
    ), Ss = (
      /*                            */
      130023424
    ), _o = (
      /*                             */
      4194304
    ), Gc = (
      /*                             */
      8388608
    ), Es = (
      /*                             */
      16777216
    ), qc = (
      /*                             */
      33554432
    ), Xc = (
      /*                             */
      67108864
    ), Od = _o, Cs = (
      /*          */
      134217728
    ), Ld = (
      /*                          */
      268435455
    ), Rs = (
      /*               */
      268435456
    ), ko = (
      /*                        */
      536870912
    ), ia = (
      /*                   */
      1073741824
    );
    function $v(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & Al)
          return "InputContinuousHydration";
        if (e & ii)
          return "InputContinuous";
        if (e & kr)
          return "DefaultHydration";
        if (e & Nn)
          return "Default";
        if (e & Zi)
          return "TransitionHydration";
        if (e & Ul)
          return "Transition";
        if (e & Ss)
          return "Retry";
        if (e & Cs)
          return "SelectiveHydration";
        if (e & Rs)
          return "IdleHydration";
        if (e & ko)
          return "Idle";
        if (e & ia)
          return "Offscreen";
      }
    }
    var sn = -1, Do = To, Kc = _o;
    function xs(e) {
      switch (Hl(e)) {
        case lt:
          return lt;
        case Al:
          return Al;
        case ii:
          return ii;
        case kr:
          return kr;
        case Nn:
          return Nn;
        case Zi:
          return Zi;
        case To:
        case Hc:
        case Fc:
        case jc:
        case Pc:
        case Bc:
        case Vc:
        case $c:
        case Ic:
        case wo:
        case Yc:
        case Su:
        case Eu:
        case Wc:
        case gs:
        case Qc:
          return e & Ul;
        case _o:
        case Gc:
        case Es:
        case qc:
        case Xc:
          return e & Ss;
        case Cs:
          return Cs;
        case Rs:
          return Rs;
        case ko:
          return ko;
        case ia:
          return ia;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Zc(e, t) {
      var a = e.pendingLanes;
      if (a === J)
        return J;
      var i = J, o = e.suspendedLanes, s = e.pingedLanes, f = a & Ld;
      if (f !== J) {
        var p = f & ~o;
        if (p !== J)
          i = xs(p);
        else {
          var v = f & s;
          v !== J && (i = xs(v));
        }
      } else {
        var y = a & ~o;
        y !== J ? i = xs(y) : s !== J && (i = xs(s));
      }
      if (i === J)
        return J;
      if (t !== J && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === J) {
        var E = Hl(i), D = Hl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          E >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          E === Nn && (D & Ul) !== J
        )
          return t;
      }
      (i & ii) !== J && (i |= a & Nn);
      var w = e.entangledLanes;
      if (w !== J)
        for (var U = e.entanglements, j = i & w; j > 0; ) {
          var $ = Wn(j), Ee = 1 << $;
          i |= U[$], j &= ~Ee;
        }
      return i;
    }
    function li(e, t) {
      for (var a = e.eventTimes, i = sn; t > 0; ) {
        var o = Wn(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Md(e, t) {
      switch (e) {
        case lt:
        case Al:
        case ii:
          return t + 250;
        case kr:
        case Nn:
        case Zi:
        case To:
        case Hc:
        case Fc:
        case jc:
        case Pc:
        case Bc:
        case Vc:
        case $c:
        case Ic:
        case wo:
        case Yc:
        case Su:
        case Eu:
        case Wc:
        case gs:
        case Qc:
          return t + 5e3;
        case _o:
        case Gc:
        case Es:
        case qc:
        case Xc:
          return sn;
        case Cs:
        case Rs:
        case ko:
        case ia:
          return sn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), sn;
      }
    }
    function Jc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wn(f), v = 1 << p, y = s[p];
        y === sn ? ((v & i) === J || (v & o) !== J) && (s[p] = Md(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Iv(e) {
      return xs(e.pendingLanes);
    }
    function ef(e) {
      var t = e.pendingLanes & ~ia;
      return t !== J ? t : t & ia ? ia : J;
    }
    function Yv(e) {
      return (e & lt) !== J;
    }
    function bs(e) {
      return (e & Ld) !== J;
    }
    function Oo(e) {
      return (e & Ss) === e;
    }
    function Nd(e) {
      var t = lt | ii | Nn;
      return (e & t) === J;
    }
    function zd(e) {
      return (e & Ul) === e;
    }
    function tf(e, t) {
      var a = Al | ii | kr | Nn;
      return (t & a) !== J;
    }
    function Wv(e, t) {
      return (t & e.expiredLanes) !== J;
    }
    function Ad(e) {
      return (e & Ul) !== J;
    }
    function Ud() {
      var e = Do;
      return Do <<= 1, (Do & Ul) === J && (Do = To), e;
    }
    function Qv() {
      var e = Kc;
      return Kc <<= 1, (Kc & Ss) === J && (Kc = _o), e;
    }
    function Hl(e) {
      return e & -e;
    }
    function Ts(e) {
      return Hl(e);
    }
    function Wn(e) {
      return 31 - Yn(e);
    }
    function hr(e) {
      return Wn(e);
    }
    function la(e, t) {
      return (e & t) !== J;
    }
    function Lo(e, t) {
      return (e & t) === t;
    }
    function gt(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Hd(e, t) {
      return e & t;
    }
    function Gv(e) {
      return e;
    }
    function qv(e, t) {
      return e !== Yt && e < t ? e : t;
    }
    function _s(e) {
      for (var t = [], a = 0; a < bo; a++)
        t.push(e);
      return t;
    }
    function Cu(e, t, a) {
      e.pendingLanes |= t, t !== ko && (e.suspendedLanes = J, e.pingedLanes = J);
      var i = e.eventTimes, o = hr(t);
      i[o] = a;
    }
    function Xv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Wn(i), s = 1 << o;
        a[o] = sn, i &= ~s;
      }
    }
    function nf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Fd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = J, e.pingedLanes = J, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Wn(f), v = 1 << p;
        i[p] = J, o[p] = sn, s[p] = sn, f &= ~v;
      }
    }
    function rf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Wn(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function jd(e, t) {
      var a = Hl(t), i;
      switch (a) {
        case ii:
          i = Al;
          break;
        case Nn:
          i = kr;
          break;
        case To:
        case Hc:
        case Fc:
        case jc:
        case Pc:
        case Bc:
        case Vc:
        case $c:
        case Ic:
        case wo:
        case Yc:
        case Su:
        case Eu:
        case Wc:
        case gs:
        case Qc:
        case _o:
        case Gc:
        case Es:
        case qc:
        case Xc:
          i = Zi;
          break;
        case ko:
          i = Rs;
          break;
        default:
          i = Yt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Yt ? Yt : i;
    }
    function ks(e, t, a) {
      if (aa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = hr(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function Kv(e, t) {
      if (aa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = hr(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Pd(e, t) {
      return null;
    }
    var Fr = lt, ki = ii, Fa = Nn, ja = ko, Ds = Yt;
    function Pa() {
      return Ds;
    }
    function Qn(e) {
      Ds = e;
    }
    function Zv(e, t) {
      var a = Ds;
      try {
        return Ds = e, t();
      } finally {
        Ds = a;
      }
    }
    function Jv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Os(e, t) {
      return e > t ? e : t;
    }
    function lr(e, t) {
      return e !== 0 && e < t;
    }
    function eh(e) {
      var t = Hl(e);
      return lr(Fr, t) ? lr(ki, t) ? bs(t) ? Fa : ja : ki : Fr;
    }
    function af(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ls;
    function Dr(e) {
      Ls = e;
    }
    function gy(e) {
      Ls(e);
    }
    var ke;
    function Ru(e) {
      ke = e;
    }
    var lf;
    function th(e) {
      lf = e;
    }
    var nh;
    function Ms(e) {
      nh = e;
    }
    var Ns;
    function Bd(e) {
      Ns = e;
    }
    var of = !1, zs = [], Ji = null, Di = null, Oi = null, zn = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Map(), Pr = [], rh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ah(e) {
      return rh.indexOf(e) > -1;
    }
    function oi(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function Vd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          Di = null;
          break;
        case "mouseover":
        case "mouseout":
          Oi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          zn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          jr.delete(i);
          break;
        }
      }
    }
    function oa(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = oi(t, a, i, o, s);
        if (t !== null) {
          var p = Lu(t);
          p !== null && ke(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return o !== null && v.indexOf(o) === -1 && v.push(o), e;
    }
    function Sy(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return Ji = oa(Ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return Di = oa(Di, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = o;
          return Oi = oa(Oi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = o, y = v.pointerId;
          return zn.set(y, oa(zn.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var E = o, D = E.pointerId;
          return jr.set(D, oa(jr.get(D) || null, e, t, a, i, E)), !0;
        }
      }
      return !1;
    }
    function $d(e) {
      var t = Ws(e.target);
      if (t !== null) {
        var a = ga(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var o = Ti(a);
            if (o !== null) {
              e.blockedOn = o, Ns(e.priority, function() {
                lf(a);
              });
              return;
            }
          } else if (i === q) {
            var s = a.stateNode;
            if (af(s)) {
              e.blockedOn = wi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ih(e) {
      for (var t = nh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Pr.length && lr(t, Pr[i].priority); i++)
        ;
      Pr.splice(i, 0, a), i === 0 && $d(a);
    }
    function As(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = bu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          py(s), o.target.dispatchEvent(s), vy();
        } else {
          var f = Lu(i);
          return f !== null && ke(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Id(e, t, a) {
      As(e) && a.delete(t);
    }
    function Ey() {
      of = !1, Ji !== null && As(Ji) && (Ji = null), Di !== null && As(Di) && (Di = null), Oi !== null && As(Oi) && (Oi = null), zn.forEach(Id), jr.forEach(Id);
    }
    function Fl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, of || (of = !0, _.unstable_scheduleCallback(_.unstable_NormalPriority, Ey)));
    }
    function Mo(e) {
      if (zs.length > 0) {
        Fl(zs[0], e);
        for (var t = 1; t < zs.length; t++) {
          var a = zs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ji !== null && Fl(Ji, e), Di !== null && Fl(Di, e), Oi !== null && Fl(Oi, e);
      var i = function(p) {
        return Fl(p, e);
      };
      zn.forEach(i), jr.forEach(i);
      for (var o = 0; o < Pr.length; o++) {
        var s = Pr[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Pr.length > 0; ) {
        var f = Pr[0];
        if (f.blockedOn !== null)
          break;
        $d(f), f.blockedOn === null && Pr.shift();
      }
    }
    var mr = b.ReactCurrentBatchConfig, Ft = !0;
    function tr(e) {
      Ft = !!e;
    }
    function Gn() {
      return Ft;
    }
    function yr(e, t, a) {
      var i = uf(t), o;
      switch (i) {
        case Fr:
          o = Ra;
          break;
        case ki:
          o = xu;
          break;
        case Fa:
        default:
          o = An;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Ra(e, t, a, i) {
      var o = Pa(), s = mr.transition;
      mr.transition = null;
      try {
        Qn(Fr), An(e, t, a, i);
      } finally {
        Qn(o), mr.transition = s;
      }
    }
    function xu(e, t, a, i) {
      var o = Pa(), s = mr.transition;
      mr.transition = null;
      try {
        Qn(ki), An(e, t, a, i);
      } finally {
        Qn(o), mr.transition = s;
      }
    }
    function An(e, t, a, i) {
      Ft && Us(e, t, a, i);
    }
    function Us(e, t, a, i) {
      var o = bu(e, t, a, i);
      if (o === null) {
        Hy(e, t, i, Li, a), Vd(e, i);
        return;
      }
      if (Sy(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Vd(e, i), t & Ma && ah(e)) {
        for (; o !== null; ) {
          var s = Lu(o);
          s !== null && gy(s);
          var f = bu(e, t, a, i);
          if (f === null && Hy(e, t, i, Li, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Hy(e, t, i, null, a);
    }
    var Li = null;
    function bu(e, t, a, i) {
      Li = null;
      var o = md(i), s = Ws(o);
      if (s !== null) {
        var f = ga(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === De) {
            var v = Ti(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === q) {
            var y = f.stateNode;
            if (af(y))
              return wi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Li = s, null;
    }
    function uf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Fr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ki;
        case "message": {
          var t = Lc();
          switch (t) {
            case fs:
              return Fr;
            case Nl:
              return ki;
            case Xi:
            case yy:
              return Fa;
            case So:
              return ja;
            default:
              return Fa;
          }
        }
        default:
          return Fa;
      }
    }
    function Hs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ua(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Yd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Tu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var xa = null, wu = null, No = null;
    function jl(e) {
      return xa = e, wu = Fs(), !0;
    }
    function sf() {
      xa = null, wu = null, No = null;
    }
    function el() {
      if (No)
        return No;
      var e, t = wu, a = t.length, i, o = Fs(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return No = o.slice(e, p), No;
    }
    function Fs() {
      return "value" in xa ? xa.value : xa.textContent;
    }
    function Pl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _u() {
      return !0;
    }
    function js() {
      return !1;
    }
    function Or(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = _u : this.isDefaultPrevented = js, this.isPropagationStopped = js, this;
      }
      return Et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _u);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _u);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: _u
      }), t;
    }
    var qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Mi = Or(qn), Br = Et({}, qn, {
      view: 0,
      detail: 0
    }), sa = Or(Br), cf, Ps, zo;
    function Cy(e) {
      e !== zo && (zo && e.type === "mousemove" ? (cf = e.screenX - zo.screenX, Ps = e.screenY - zo.screenY) : (cf = 0, Ps = 0), zo = e);
    }
    var ui = Et({}, Br, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Sn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Cy(e), cf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ps;
      }
    }), Wd = Or(ui), Qd = Et({}, ui, {
      dataTransfer: 0
    }), Ao = Or(Qd), Gd = Et({}, Br, {
      relatedTarget: 0
    }), tl = Or(Gd), lh = Et({}, qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oh = Or(lh), qd = Et({}, qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ff = Or(qd), Ry = Et({}, qn, {
      data: 0
    }), uh = Or(Ry), sh = uh, ch = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Uo = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function xy(e) {
      if (e.key) {
        var t = ch[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Pl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Uo[e.keyCode] || "Unidentified" : "";
    }
    var ku = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function fh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ku[e];
      return i ? !!a[i] : !1;
    }
    function Sn(e) {
      return fh;
    }
    var by = Et({}, Br, {
      key: xy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Pl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), dh = Or(by), Ty = Et({}, ui, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), ph = Or(Ty), vh = Et({}, Br, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sn
    }), hh = Or(vh), wy = Et({}, qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ba = Or(wy), Xd = Et({}, ui, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), _y = Or(Xd), Bl = [9, 13, 27, 32], Bs = 229, nl = En && "CompositionEvent" in window, Vl = null;
    En && "documentMode" in document && (Vl = document.documentMode);
    var Kd = En && "TextEvent" in window && !Vl, df = En && (!nl || Vl && Vl > 8 && Vl <= 11), mh = 32, pf = String.fromCharCode(mh);
    function ky() {
      Ke("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ke("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ke("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ke("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Zd = !1;
    function yh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function hf(e, t) {
      return e === "keydown" && t.keyCode === Bs;
    }
    function Jd(e, t) {
      switch (e) {
        case "keyup":
          return Bl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Bs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function mf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function gh(e) {
      return e.locale === "ko";
    }
    var Ho = !1;
    function ep(e, t, a, i, o) {
      var s, f;
      if (nl ? s = vf(t) : Ho ? Jd(t, i) && (s = "onCompositionEnd") : hf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      df && !gh(i) && (!Ho && s === "onCompositionStart" ? Ho = jl(o) : s === "onCompositionEnd" && Ho && (f = el()));
      var p = Th(a, s);
      if (p.length > 0) {
        var v = new uh(s, t, null, i, o);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = mf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function yf(e, t) {
      switch (e) {
        case "compositionend":
          return mf(t);
        case "keypress":
          var a = t.which;
          return a !== mh ? null : (Zd = !0, pf);
        case "textInput":
          var i = t.data;
          return i === pf && Zd ? null : i;
        default:
          return null;
      }
    }
    function tp(e, t) {
      if (Ho) {
        if (e === "compositionend" || !nl && Jd(e, t)) {
          var a = el();
          return sf(), Ho = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!yh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return df && !gh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function gf(e, t, a, i, o) {
      var s;
      if (Kd ? s = yf(t, i) : s = tp(t, i), !s)
        return null;
      var f = Th(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new sh("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Sh(e, t, a, i, o, s, f) {
      ep(e, t, a, i, o), gf(e, t, a, i, o);
    }
    var Dy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Vs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Dy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Oy(e) {
      if (!En)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function $s() {
      Ke("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Eh(e, t, a, i) {
      fu(i);
      var o = Th(t, "onChange");
      if (o.length > 0) {
        var s = new Mi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var $l = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      Eh(t, n, e, md(e)), Mv(u, t);
    }
    function u(e) {
      F0(e, 0);
    }
    function c(e) {
      var t = bf(e);
      if (Si(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    En && (m = Oy("input") && (!document.documentMode || document.documentMode > 9));
    function C(e, t) {
      $l = e, n = t, $l.attachEvent("onpropertychange", F);
    }
    function T() {
      $l && ($l.detachEvent("onpropertychange", F), $l = null, n = null);
    }
    function F(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function re(e, t, a) {
      e === "focusin" ? (T(), C(t, a)) : e === "focusout" && T();
    }
    function ue(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function te(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function be(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ne(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function He(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ge(e, "number", e.value);
    }
    function Un(e, t, a, i, o, s, f) {
      var p = a ? bf(a) : window, v, y;
      if (r(p) ? v = d : Vs(p) ? m ? v = Ne : (v = ue, y = re) : te(p) && (v = be), v) {
        var E = v(t, a);
        if (E) {
          Eh(e, E, i, o);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && He(p);
    }
    function M() {
      Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function k(e, t, a, i, o, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !is(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ws(y) || hp(y)))
          return;
      }
      if (!(!v && !p)) {
        var E;
        if (o.window === o)
          E = o;
        else {
          var D = o.ownerDocument;
          D ? E = D.defaultView || D.parentWindow : E = window;
        }
        var w, U;
        if (v) {
          var j = i.relatedTarget || i.toElement;
          if (w = a, U = j ? Ws(j) : null, U !== null) {
            var $ = ga(U);
            (U !== $ || U.tag !== K && U.tag !== ce) && (U = null);
          }
        } else
          w = null, U = a;
        if (w !== U) {
          var Ee = Wd, qe = "onMouseLeave", Ve = "onMouseEnter", Pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ee = ph, qe = "onPointerLeave", Ve = "onPointerEnter", Pt = "pointer");
          var kt = w == null ? E : bf(w), N = U == null ? E : bf(U), I = new Ee(qe, Pt + "leave", w, i, o);
          I.target = kt, I.relatedTarget = N;
          var z = null, se = Ws(o);
          if (se === a) {
            var _e = new Ee(Ve, Pt + "enter", U, i, o);
            _e.target = N, _e.relatedTarget = kt, z = _e;
          }
          Jx(e, I, z, w, U);
        }
      }
    }
    function A(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ae = typeof Object.is == "function" ? Object.is : A;
    function ze(e, t) {
      if (ae(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!Kn.call(t, s) || !ae(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function nt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function st(e, t) {
      for (var a = Je(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Yi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Je(nt(a));
      }
    }
    function or(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Kt(e, o, s, f, p);
    }
    function Kt(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, E = e, D = null;
      e: for (; ; ) {
        for (var w = null; E === t && (a === 0 || E.nodeType === Yi) && (f = s + a), E === i && (o === 0 || E.nodeType === Yi) && (p = s + o), E.nodeType === Yi && (s += E.nodeValue.length), (w = E.firstChild) !== null; )
          D = E, E = w;
        for (; ; ) {
          if (E === e)
            break e;
          if (D === t && ++v === a && (f = s), D === i && ++y === o && (p = s), (w = E.nextSibling) !== null)
            break;
          E = D, D = E.parentNode;
        }
        E = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Il(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = st(e, f), E = st(e, p);
        if (y && E) {
          if (o.rangeCount === 1 && o.anchorNode === y.node && o.anchorOffset === y.offset && o.focusNode === E.node && o.focusOffset === E.offset)
            return;
          var D = a.createRange();
          D.setStart(y.node, y.offset), o.removeAllRanges(), f > p ? (o.addRange(D), o.extend(E.node, E.offset)) : (D.setEnd(E.node, E.offset), o.addRange(D));
        }
      }
    }
    function Ch(e) {
      return e && e.nodeType === Yi;
    }
    function _0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ch(e) ? !1 : Ch(t) ? _0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Ax(e) {
      return e && e.ownerDocument && _0(e.ownerDocument.documentElement, e);
    }
    function Ux(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function k0() {
      for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
        if (Ux(t))
          e = t.contentWindow;
        else
          return t;
        t = La(e.document);
      }
      return t;
    }
    function Ly(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Hx() {
      var e = k0();
      return {
        focusedElem: e,
        selectionRange: Ly(e) ? jx(e) : null
      };
    }
    function Fx(e) {
      var t = k0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Ax(a)) {
        i !== null && Ly(a) && Px(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Jr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var p = o[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function jx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = or(e), t || {
        start: 0,
        end: 0
      };
    }
    function Px(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Il(e, t);
    }
    var Bx = En && "documentMode" in document && document.documentMode <= 11;
    function Vx() {
      Ke("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, My = null, np = null, Ny = !1;
    function $x(e) {
      if ("selectionStart" in e && Ly(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Ix(e) {
      return e.window === e ? e.document : e.nodeType === Wi ? e : e.ownerDocument;
    }
    function D0(e, t, a) {
      var i = Ix(a);
      if (!(Ny || Sf == null || Sf !== La(i))) {
        var o = $x(Sf);
        if (!np || !ze(np, o)) {
          np = o;
          var s = Th(My, "onSelect");
          if (s.length > 0) {
            var f = new Mi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function Yx(e, t, a, i, o, s, f) {
      var p = a ? bf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Vs(p) || p.contentEditable === "true") && (Sf = p, My = a, np = null);
          break;
        case "focusout":
          Sf = null, My = null, np = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Ny = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ny = !1, D0(e, i, o);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (Bx)
            break;
        // falls through
        case "keydown":
        case "keyup":
          D0(e, i, o);
      }
    }
    function Rh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ef = {
      animationend: Rh("Animation", "AnimationEnd"),
      animationiteration: Rh("Animation", "AnimationIteration"),
      animationstart: Rh("Animation", "AnimationStart"),
      transitionend: Rh("Transition", "TransitionEnd")
    }, zy = {}, O0 = {};
    En && (O0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function xh(e) {
      if (zy[e])
        return zy[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in O0)
          return zy[e] = t[a];
      return e;
    }
    var L0 = xh("animationend"), M0 = xh("animationiteration"), N0 = xh("animationstart"), z0 = xh("transitionend"), A0 = /* @__PURE__ */ new Map(), U0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Du(e, t) {
      A0.set(e, t), Ke(t, [e]);
    }
    function Wx() {
      for (var e = 0; e < U0.length; e++) {
        var t = U0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Du(a, "on" + i);
      }
      Du(L0, "onAnimationEnd"), Du(M0, "onAnimationIteration"), Du(N0, "onAnimationStart"), Du("dblclick", "onDoubleClick"), Du("focusin", "onFocus"), Du("focusout", "onBlur"), Du(z0, "onTransitionEnd");
    }
    function Qx(e, t, a, i, o, s, f) {
      var p = A0.get(t);
      if (p !== void 0) {
        var v = Mi, y = t;
        switch (t) {
          case "keypress":
            if (Pl(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = dh;
            break;
          case "focusin":
            y = "focus", v = tl;
            break;
          case "focusout":
            y = "blur", v = tl;
            break;
          case "beforeblur":
          case "afterblur":
            v = tl;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Wd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ao;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = hh;
            break;
          case L0:
          case M0:
          case N0:
            v = oh;
            break;
          case z0:
            v = Ba;
            break;
          case "scroll":
            v = sa;
            break;
          case "wheel":
            v = _y;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ph;
            break;
        }
        var E = (s & Ma) !== 0;
        {
          var D = !E && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = Kx(a, p, i.type, E, D);
          if (w.length > 0) {
            var U = new v(p, y, null, i, o);
            e.push({
              event: U,
              listeners: w
            });
          }
        }
      }
    }
    Wx(), M(), $s(), Vx(), ky();
    function Gx(e, t, a, i, o, s, f) {
      Qx(e, t, a, i, o, s);
      var p = (s & hd) === 0;
      p && (k(e, t, a, i, o), Un(e, t, a, i, o), Yx(e, t, a, i, o), Sh(e, t, a, i, o));
    }
    var rp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ay = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(rp));
    function H0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ri(i, t, void 0, e), e.currentTarget = null;
    }
    function qx(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          H0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var E = t[y], D = E.instance, w = E.currentTarget, U = E.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          H0(e, U, w), i = D;
        }
    }
    function F0(e, t) {
      for (var a = (t & Ma) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        qx(s, f, a);
      }
      us();
    }
    function Xx(e, t, a, i, o) {
      var s = md(a), f = [];
      Gx(f, e, i, a, s, t), F0(f, t);
    }
    function kn(e, t) {
      Ay.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = wT(t), o = eb(e);
      i.has(o) || (j0(t, e, gc, a), i.add(o));
    }
    function Uy(e, t, a) {
      Ay.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ma), j0(a, e, i, t);
    }
    var bh = "_reactListening" + Math.random().toString(36).slice(2);
    function ap(e) {
      if (!e[bh]) {
        e[bh] = !0, ot.forEach(function(a) {
          a !== "selectionchange" && (Ay.has(a) || Uy(a, !1, e), Uy(a, !0, e));
        });
        var t = e.nodeType === Wi ? e : e.ownerDocument;
        t !== null && (t[bh] || (t[bh] = !0, Uy("selectionchange", !1, t)));
      }
    }
    function j0(e, t, a, i, o) {
      var s = yr(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Yd(e, t, s, f) : ua(e, t, s) : f !== void 0 ? Tu(e, t, s, f) : Hs(e, t, s);
    }
    function P0(e, t) {
      return e === t || e.nodeType === Vn && e.parentNode === t;
    }
    function Hy(e, t, a, i, o) {
      var s = i;
      if ((t & vd) === 0 && (t & gc) === 0) {
        var f = o;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === q || v === P) {
              var y = p.stateNode.containerInfo;
              if (P0(y, f))
                break;
              if (v === P)
                for (var E = p.return; E !== null; ) {
                  var D = E.tag;
                  if (D === q || D === P) {
                    var w = E.stateNode.containerInfo;
                    if (P0(w, f))
                      return;
                  }
                  E = E.return;
                }
              for (; y !== null; ) {
                var U = Ws(y);
                if (U === null)
                  return;
                var j = U.tag;
                if (j === K || j === ce) {
                  p = s = U;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Mv(function() {
        return Xx(e, t, a, s);
      });
    }
    function ip(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Kx(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, E = null; y !== null; ) {
        var D = y, w = D.stateNode, U = D.tag;
        if (U === K && w !== null && (E = w, p !== null)) {
          var j = _l(y, p);
          j != null && v.push(ip(y, j, E));
        }
        if (o)
          break;
        y = y.return;
      }
      return v;
    }
    function Th(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, p = s.tag;
        if (p === K && f !== null) {
          var v = f, y = _l(o, a);
          y != null && i.unshift(ip(o, y, v));
          var E = _l(o, t);
          E != null && i.push(ip(o, E, v));
        }
        o = o.return;
      }
      return i;
    }
    function Cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== K);
      return e || null;
    }
    function Zx(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Cf(s))
        o++;
      for (var f = 0, p = i; p; p = Cf(p))
        f++;
      for (; o - f > 0; )
        a = Cf(a), o--;
      for (; f - o > 0; )
        i = Cf(i), f--;
      for (var v = o; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Cf(a), i = Cf(i);
      }
      return null;
    }
    function B0(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, E = v.stateNode, D = v.tag;
        if (y !== null && y === i)
          break;
        if (D === K && E !== null) {
          var w = E;
          if (o) {
            var U = _l(p, s);
            U != null && f.unshift(ip(p, U, w));
          } else if (!o) {
            var j = _l(p, s);
            j != null && f.push(ip(p, j, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function Jx(e, t, a, i, o) {
      var s = i && o ? Zx(i, o) : null;
      i !== null && B0(e, t, i, s, !1), o !== null && a !== null && B0(e, a, o, s, !0);
    }
    function eb(e, t) {
      return e + "__bubble";
    }
    var Va = !1, lp = "dangerouslySetInnerHTML", wh = "suppressContentEditableWarning", Ou = "suppressHydrationWarning", V0 = "autoFocus", Is = "children", Ys = "style", _h = "__html", Fy, kh, op, $0, Dh, I0, Y0;
    Fy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, kh = function(e, t) {
      fd(e, t), mc(e, t), Dv(e, t, {
        registrationNameDependencies: et,
        possibleRegistrationNames: dt
      });
    }, I0 = En && !document.documentMode, op = function(e, t, a) {
      if (!Va) {
        var i = Oh(a), o = Oh(t);
        o !== i && (Va = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, $0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Dh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Y0 = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var tb = /\r\n?/g, nb = /\u0000|\uFFFD/g;
    function Oh(e) {
      jn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(tb, `
`).replace(nb, "");
    }
    function Lh(e, t, a, i) {
      var o = Oh(t), s = Oh(e);
      if (s !== o && (i && (Va || (Va = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function W0(e) {
      return e.nodeType === Wi ? e : e.ownerDocument;
    }
    function rb() {
    }
    function Mh(e) {
      e.onclick = rb;
    }
    function ab(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ys)
            f && Object.freeze(f), xv(t, f);
          else if (s === lp) {
            var p = f ? f[_h] : void 0;
            p != null && fv(t, p);
          } else if (s === Is)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ou(t, f);
            } else typeof f == "number" && ou(t, "" + f);
          else s === wh || s === Ou || s === V0 || (et.hasOwnProperty(s) ? f != null && (typeof f != "function" && Dh(s, f), s === "onScroll" && kn("scroll", t)) : f != null && Nr(t, s, f, o));
        }
    }
    function ib(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === Ys ? xv(e, f) : s === lp ? fv(e, f) : s === Is ? ou(e, f) : Nr(e, s, f, i);
      }
    }
    function lb(e, t, a, i) {
      var o, s = W0(a), f, p = i;
      if (p === Ii && (p = ad(e)), p === Ii) {
        if (o = Tl(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var E = f;
          t.multiple ? E.multiple = !0 : t.size && (E.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ii && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Kn.call(Fy, e) && (Fy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function ob(e, t) {
      return W0(t).createTextNode(e);
    }
    function ub(e, t, a, i) {
      var o = Tl(t, a);
      kh(t, a);
      var s;
      switch (t) {
        case "dialog":
          kn("cancel", e), kn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < rp.length; f++)
            kn(rp[f], e);
          s = a;
          break;
        case "source":
          kn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e), s = a;
          break;
        case "details":
          kn("toggle", e), s = a;
          break;
        case "input":
          ni(e, a), s = lu(e, a), kn("invalid", e);
          break;
        case "option":
          $t(e, a), s = a;
          break;
        case "select":
          co(e, a), s = Zu(e, a), kn("invalid", e);
          break;
        case "textarea":
          td(e, a), s = ed(e, a), kn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), ab(t, e, i, s, o), t) {
        case "input":
          ti(e), H(e, a, !1);
          break;
        case "textarea":
          ti(e), sv(e);
          break;
        case "option":
          dn(e, a);
          break;
        case "select":
          Zf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Mh(e);
          break;
      }
    }
    function sb(e, t, a, i, o) {
      kh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = lu(e, a), p = lu(e, i), s = [];
          break;
        case "select":
          f = Zu(e, a), p = Zu(e, i), s = [];
          break;
        case "textarea":
          f = ed(e, a), p = ed(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Mh(e);
          break;
      }
      vc(t, p);
      var v, y, E = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ys) {
            var D = f[v];
            for (y in D)
              D.hasOwnProperty(y) && (E || (E = {}), E[y] = "");
          } else v === lp || v === Is || v === wh || v === Ou || v === V0 || (et.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], U = f?.[v];
        if (!(!p.hasOwnProperty(v) || w === U || w == null && U == null))
          if (v === Ys)
            if (w && Object.freeze(w), U) {
              for (y in U)
                U.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (E || (E = {}), E[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && U[y] !== w[y] && (E || (E = {}), E[y] = w[y]);
            } else
              E || (s || (s = []), s.push(v, E)), E = w;
          else if (v === lp) {
            var j = w ? w[_h] : void 0, $ = U ? U[_h] : void 0;
            j != null && $ !== j && (s = s || []).push(v, j);
          } else v === Is ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === wh || v === Ou || (et.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Dh(v, w), v === "onScroll" && kn("scroll", e)), !s && U !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return E && (fy(E, p[Ys]), (s = s || []).push(Ys, E)), s;
    }
    function cb(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && h(e, o);
      var s = Tl(a, i), f = Tl(a, o);
      switch (ib(e, t, s, f), a) {
        case "input":
          R(e, o);
          break;
        case "textarea":
          uv(e, o);
          break;
        case "select":
          fc(e, o);
          break;
      }
    }
    function fb(e) {
      {
        var t = e.toLowerCase();
        return rs.hasOwnProperty(t) && rs[t] || null;
      }
    }
    function db(e, t, a, i, o, s, f) {
      var p, v;
      switch (p = Tl(t, a), kh(t, a), t) {
        case "dialog":
          kn("cancel", e), kn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < rp.length; y++)
            kn(rp[y], e);
          break;
        case "source":
          kn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e);
          break;
        case "details":
          kn("toggle", e);
          break;
        case "input":
          ni(e, a), kn("invalid", e);
          break;
        case "option":
          $t(e, a);
          break;
        case "select":
          co(e, a), kn("invalid", e);
          break;
        case "textarea":
          td(e, a), kn("invalid", e);
          break;
      }
      vc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var E = e.attributes, D = 0; D < E.length; D++) {
          var w = E[D].name.toLowerCase();
          switch (w) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(E[D].name);
          }
        }
      }
      var U = null;
      for (var j in a)
        if (a.hasOwnProperty(j)) {
          var $ = a[j];
          if (j === Is)
            typeof $ == "string" ? e.textContent !== $ && (a[Ou] !== !0 && Lh(e.textContent, $, s, f), U = [Is, $]) : typeof $ == "number" && e.textContent !== "" + $ && (a[Ou] !== !0 && Lh(e.textContent, $, s, f), U = [Is, "" + $]);
          else if (et.hasOwnProperty(j))
            $ != null && (typeof $ != "function" && Dh(j, $), j === "onScroll" && kn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Ee = void 0, qe = Ze(j);
            if (a[Ou] !== !0) {
              if (!(j === wh || j === Ou || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === lp) {
                  var Ve = e.innerHTML, Pt = $ ? $[_h] : void 0;
                  if (Pt != null) {
                    var kt = Y0(e, Pt);
                    kt !== Ve && op(j, Ve, kt);
                  }
                } else if (j === Ys) {
                  if (v.delete(j), I0) {
                    var N = sy($);
                    Ee = e.getAttribute("style"), N !== Ee && op(j, Ee, N);
                  }
                } else if (p && !O)
                  v.delete(j.toLowerCase()), Ee = ro(e, j, $), $ !== Ee && op(j, Ee, $);
                else if (!Mt(j, qe, p) && !Ut(j, $, qe, p)) {
                  var I = !1;
                  if (qe !== null)
                    v.delete(qe.attributeName), Ee = ml(e, j, $, qe);
                  else {
                    var z = i;
                    if (z === Ii && (z = ad(t)), z === Ii)
                      v.delete(j.toLowerCase());
                    else {
                      var se = fb(j);
                      se !== null && se !== j && (I = !0, v.delete(se)), v.delete(j);
                    }
                    Ee = ro(e, j, $);
                  }
                  var _e = O;
                  !_e && $ !== Ee && !I && op(j, Ee, $);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Ou] !== !0 && $0(v), t) {
        case "input":
          ti(e), H(e, a, !0);
          break;
        case "textarea":
          ti(e), sv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Mh(e);
          break;
      }
      return U;
    }
    function pb(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function jy(e, t) {
      {
        if (Va)
          return;
        Va = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Py(e, t) {
      {
        if (Va)
          return;
        Va = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function By(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Vy(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function vb(e, t, a) {
      switch (t) {
        case "input":
          B(e, a);
          return;
        case "textarea":
          iy(e, a);
          return;
        case "select":
          Jf(e, a);
          return;
      }
    }
    var up = function() {
    }, sp = function() {
    };
    {
      var hb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Q0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], mb = Q0.concat(["button"]), yb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], G0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      sp = function(e, t) {
        var a = Et({}, e || G0), i = {
          tag: t
        };
        return Q0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), mb.indexOf(t) !== -1 && (a.pTagInButtonScope = null), hb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var gb = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return yb.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Sb = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, q0 = {};
      up = function(e, t, a) {
        a = a || G0;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = gb(e, o) ? null : i, f = s ? null : Sb(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!q0[y]) {
            q0[y] = !0;
            var E = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? E = "Text nodes" : (E = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : E = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", E, v, D, w);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", E, v);
          }
        }
      };
    }
    var Nh = "suppressHydrationWarning", zh = "$", Ah = "/$", cp = "$?", fp = "$!", Eb = "style", $y = null, Iy = null;
    function Cb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Wi:
        case ld: {
          t = i === Wi ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : id(null, "");
          break;
        }
        default: {
          var s = i === Vn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = id(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = sp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function Rb(e, t, a) {
      {
        var i = e, o = id(i.namespace, t), s = sp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function qk(e) {
      return e;
    }
    function xb(e) {
      $y = Gn(), Iy = Hx();
      var t = null;
      return tr(!1), t;
    }
    function bb(e) {
      Fx(Iy), tr($y), $y = null, Iy = null;
    }
    function Tb(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (up(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = sp(f.ancestorInfo, e);
          up(null, p, v);
        }
        s = f.namespace;
      }
      var y = lb(e, t, a, s);
      return vp(o, y), Zy(y, t), y;
    }
    function wb(e, t) {
      e.appendChild(t);
    }
    function _b(e, t, a, i, o) {
      switch (ub(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function kb(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = sp(f.ancestorInfo, t);
          up(null, p, v);
        }
      }
      return sb(e, t, a, i);
    }
    function Yy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Db(e, t, a, i) {
      {
        var o = a;
        up(null, e, o.ancestorInfo);
      }
      var s = ob(e, t);
      return vp(i, s), s;
    }
    function Ob() {
      var e = window.event;
      return e === void 0 ? Fa : uf(e.type);
    }
    var Wy = typeof setTimeout == "function" ? setTimeout : void 0, Lb = typeof clearTimeout == "function" ? clearTimeout : void 0, Qy = -1, X0 = typeof Promise == "function" ? Promise : void 0, Mb = typeof queueMicrotask == "function" ? queueMicrotask : typeof X0 < "u" ? function(e) {
      return X0.resolve(null).then(e).catch(Nb);
    } : Wy;
    function Nb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function zb(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Ab(e, t, a, i, o, s) {
      cb(e, t, a, i, o), Zy(e, o);
    }
    function K0(e) {
      ou(e, "");
    }
    function Ub(e, t, a) {
      e.nodeValue = a;
    }
    function Hb(e, t) {
      e.appendChild(t);
    }
    function Fb(e, t) {
      var a;
      e.nodeType === Vn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Mh(a);
    }
    function jb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Pb(e, t, a) {
      e.nodeType === Vn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Bb(e, t) {
      e.removeChild(t);
    }
    function Vb(e, t) {
      e.nodeType === Vn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Gy(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Vn) {
          var s = o.data;
          if (s === Ah)
            if (i === 0) {
              e.removeChild(o), Mo(t);
              return;
            } else
              i--;
          else (s === zh || s === cp || s === fp) && i++;
        }
        a = o;
      } while (a);
      Mo(t);
    }
    function $b(e, t) {
      e.nodeType === Vn ? Gy(e.parentNode, t) : e.nodeType === Jr && Gy(e, t), Mo(e);
    }
    function Ib(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Yb(e) {
      e.nodeValue = "";
    }
    function Wb(e, t) {
      e = e;
      var a = t[Eb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function Qb(e, t) {
      e.nodeValue = t;
    }
    function Gb(e) {
      e.nodeType === Jr ? e.textContent = "" : e.nodeType === Wi && e.documentElement && e.removeChild(e.documentElement);
    }
    function qb(e, t, a) {
      return e.nodeType !== Jr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Xb(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function Kb(e) {
      return e.nodeType !== Vn ? null : e;
    }
    function Z0(e) {
      return e.data === cp;
    }
    function qy(e) {
      return e.data === fp;
    }
    function Zb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function Jb(e, t) {
      e._reactRetry = t;
    }
    function Uh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Jr || t === Yi)
          break;
        if (t === Vn) {
          var a = e.data;
          if (a === zh || a === fp || a === cp)
            break;
          if (a === Ah)
            return null;
        }
      }
      return e;
    }
    function dp(e) {
      return Uh(e.nextSibling);
    }
    function eT(e) {
      return Uh(e.firstChild);
    }
    function tT(e) {
      return Uh(e.firstChild);
    }
    function nT(e) {
      return Uh(e.nextSibling);
    }
    function rT(e, t, a, i, o, s, f) {
      vp(s, e), Zy(e, a);
      var p;
      {
        var v = o;
        p = v.namespace;
      }
      var y = (s.mode & bt) !== We;
      return db(e, t, a, p, i, y, f);
    }
    function aT(e, t, a, i) {
      return vp(a, e), a.mode & bt, pb(e, t);
    }
    function iT(e, t) {
      vp(t, e);
    }
    function lT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Vn) {
          var i = t.data;
          if (i === Ah) {
            if (a === 0)
              return dp(t);
            a--;
          } else (i === zh || i === fp || i === cp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function J0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Vn) {
          var i = t.data;
          if (i === zh || i === fp || i === cp) {
            if (a === 0)
              return t;
            a--;
          } else i === Ah && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function oT(e) {
      Mo(e);
    }
    function uT(e) {
      Mo(e);
    }
    function sT(e) {
      return e !== "head" && e !== "body";
    }
    function cT(e, t, a, i) {
      var o = !0;
      Lh(t.nodeValue, a, i, o);
    }
    function fT(e, t, a, i, o, s) {
      if (t[Nh] !== !0) {
        var f = !0;
        Lh(i.nodeValue, o, s, f);
      }
    }
    function dT(e, t) {
      t.nodeType === Jr ? jy(e, t) : t.nodeType === Vn || Py(e, t);
    }
    function pT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Jr ? jy(a, t) : t.nodeType === Vn || Py(a, t));
      }
    }
    function vT(e, t, a, i, o) {
      (o || t[Nh] !== !0) && (i.nodeType === Jr ? jy(a, i) : i.nodeType === Vn || Py(a, i));
    }
    function hT(e, t, a) {
      By(e, t);
    }
    function mT(e, t) {
      Vy(e, t);
    }
    function yT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && By(i, t);
      }
    }
    function gT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Vy(a, t);
      }
    }
    function ST(e, t, a, i, o, s) {
      (s || t[Nh] !== !0) && By(a, i);
    }
    function ET(e, t, a, i, o) {
      (o || t[Nh] !== !0) && Vy(a, i);
    }
    function CT(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function RT(e) {
      ap(e);
    }
    var Rf = Math.random().toString(36).slice(2), xf = "__reactFiber$" + Rf, Xy = "__reactProps$" + Rf, pp = "__reactContainer$" + Rf, Ky = "__reactEvents$" + Rf, xT = "__reactListeners$" + Rf, bT = "__reactHandles$" + Rf;
    function TT(e) {
      delete e[xf], delete e[Xy], delete e[Ky], delete e[xT], delete e[bT];
    }
    function vp(e, t) {
      t[xf] = e;
    }
    function Hh(e, t) {
      t[pp] = e;
    }
    function eE(e) {
      e[pp] = null;
    }
    function hp(e) {
      return !!e[pp];
    }
    function Ws(e) {
      var t = e[xf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[pp] || a[xf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = J0(e); o !== null; ) {
              var s = o[xf];
              if (s)
                return s;
              o = J0(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Lu(e) {
      var t = e[xf] || e[pp];
      return t && (t.tag === K || t.tag === ce || t.tag === De || t.tag === q) ? t : null;
    }
    function bf(e) {
      if (e.tag === K || e.tag === ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Fh(e) {
      return e[Xy] || null;
    }
    function Zy(e, t) {
      e[Xy] = t;
    }
    function wT(e) {
      var t = e[Ky];
      return t === void 0 && (t = e[Ky] = /* @__PURE__ */ new Set()), t;
    }
    var tE = {}, nE = b.ReactDebugCurrentFrame;
    function jh(e) {
      if (e) {
        var t = e._owner, a = Bi(e.type, e._source, t ? t.type : null);
        nE.setExtraStackFrame(a);
      } else
        nE.setExtraStackFrame(null);
    }
    function rl(e, t, a, i, o) {
      {
        var s = Function.call.bind(Kn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (jh(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), jh(null)), p instanceof Error && !(p.message in tE) && (tE[p.message] = !0, jh(o), g("Failed %s type: %s", a, p.message), jh(null));
          }
      }
    }
    var Jy = [], Ph;
    Ph = [];
    var Fo = -1;
    function Mu(e) {
      return {
        current: e
      };
    }
    function ca(e, t) {
      if (Fo < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Ph[Fo] && g("Unexpected Fiber popped."), e.current = Jy[Fo], Jy[Fo] = null, Ph[Fo] = null, Fo--;
    }
    function fa(e, t, a) {
      Fo++, Jy[Fo] = e.current, Ph[Fo] = a, e.current = t;
    }
    var eg;
    eg = {};
    var si = {};
    Object.freeze(si);
    var jo = Mu(si), Yl = Mu(!1), tg = si;
    function Tf(e, t, a) {
      return a && Wl(t) ? tg : jo.current;
    }
    function rE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function wf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return si;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = ct(e) || "Unknown";
          rl(i, s, "context", p);
        }
        return o && rE(e, t, s), s;
      }
    }
    function Bh() {
      return Yl.current;
    }
    function Wl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Vh(e) {
      ca(Yl, e), ca(jo, e);
    }
    function ng(e) {
      ca(Yl, e), ca(jo, e);
    }
    function aE(e, t, a) {
      {
        if (jo.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fa(jo, t, e), fa(Yl, a, e);
      }
    }
    function iE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ct(e) || "Unknown";
            eg[s] || (eg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((ct(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = ct(e) || "Unknown";
          rl(o, f, "child context", v);
        }
        return Et({}, a, f);
      }
    }
    function $h(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return tg = jo.current, fa(jo, a, e), fa(Yl, Yl.current, e), !0;
      }
    }
    function lE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = iE(e, t, tg);
          i.__reactInternalMemoizedMergedChildContext = o, ca(Yl, e), ca(jo, e), fa(jo, o, e), fa(Yl, a, e);
        } else
          ca(Yl, e), fa(Yl, a, e);
      }
    }
    function _T(e) {
      {
        if (!go(e) || e.tag !== X)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case q:
              return t.stateNode.context;
            case X: {
              var a = t.type;
              if (Wl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Nu = 0, Ih = 1, Po = null, rg = !1, ag = !1;
    function oE(e) {
      Po === null ? Po = [e] : Po.push(e);
    }
    function kT(e) {
      rg = !0, oE(e);
    }
    function uE() {
      rg && zu();
    }
    function zu() {
      if (!ag && Po !== null) {
        ag = !0;
        var e = 0, t = Pa();
        try {
          var a = !0, i = Po;
          for (Qn(Fr); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Po = null, rg = !1;
        } catch (s) {
          throw Po !== null && (Po = Po.slice(e + 1)), gd(fs, zu), s;
        } finally {
          Qn(t), ag = !1;
        }
      }
      return null;
    }
    var _f = [], kf = 0, Yh = null, Wh = 0, Ni = [], zi = 0, Qs = null, Bo = 1, Vo = "";
    function DT(e) {
      return qs(), (e.flags & xi) !== Ye;
    }
    function OT(e) {
      return qs(), Wh;
    }
    function LT() {
      var e = Vo, t = Bo, a = t & ~MT(t);
      return a.toString(32) + e;
    }
    function Gs(e, t) {
      qs(), _f[kf++] = Wh, _f[kf++] = Yh, Yh = e, Wh = t;
    }
    function sE(e, t, a) {
      qs(), Ni[zi++] = Bo, Ni[zi++] = Vo, Ni[zi++] = Qs, Qs = e;
      var i = Bo, o = Vo, s = Qh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Qh(t) + s;
      if (v > 30) {
        var y = s - s % 5, E = (1 << y) - 1, D = (f & E).toString(32), w = f >> y, U = s - y, j = Qh(t) + U, $ = p << U, Ee = $ | w, qe = D + o;
        Bo = 1 << j | Ee, Vo = qe;
      } else {
        var Ve = p << s, Pt = Ve | f, kt = o;
        Bo = 1 << v | Pt, Vo = kt;
      }
    }
    function ig(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Gs(e, a), sE(e, a, i);
      }
    }
    function Qh(e) {
      return 32 - Yn(e);
    }
    function MT(e) {
      return 1 << Qh(e) - 1;
    }
    function lg(e) {
      for (; e === Yh; )
        Yh = _f[--kf], _f[kf] = null, Wh = _f[--kf], _f[kf] = null;
      for (; e === Qs; )
        Qs = Ni[--zi], Ni[zi] = null, Vo = Ni[--zi], Ni[zi] = null, Bo = Ni[--zi], Ni[zi] = null;
    }
    function NT() {
      return qs(), Qs !== null ? {
        id: Bo,
        overflow: Vo
      } : null;
    }
    function zT(e, t) {
      qs(), Ni[zi++] = Bo, Ni[zi++] = Vo, Ni[zi++] = Qs, Bo = t.id, Vo = t.overflow, Qs = e;
    }
    function qs() {
      $r() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Vr = null, Ai = null, al = !1, Xs = !1, Au = null;
    function AT() {
      al && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function cE() {
      Xs = !0;
    }
    function UT() {
      return Xs;
    }
    function HT(e) {
      var t = e.stateNode.containerInfo;
      return Ai = tT(t), Vr = e, al = !0, Au = null, Xs = !1, !0;
    }
    function FT(e, t, a) {
      return Ai = nT(t), Vr = e, al = !0, Au = null, Xs = !1, a !== null && zT(e, a), !0;
    }
    function fE(e, t) {
      switch (e.tag) {
        case q: {
          dT(e.stateNode.containerInfo, t);
          break;
        }
        case K: {
          var a = (e.mode & bt) !== We;
          vT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && pT(i.dehydrated, t);
          break;
        }
      }
    }
    function dE(e, t) {
      fE(e, t);
      var a = V_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Na) : i.push(a);
    }
    function og(e, t) {
      {
        if (Xs)
          return;
        switch (e.tag) {
          case q: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case K:
                var i = t.type;
                t.pendingProps, hT(a, i);
                break;
              case ce:
                var o = t.pendingProps;
                mT(a, o);
                break;
            }
            break;
          }
          case K: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case K: {
                var v = t.type, y = t.pendingProps, E = (e.mode & bt) !== We;
                ST(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
              case ce: {
                var D = t.pendingProps, w = (e.mode & bt) !== We;
                ET(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case De: {
            var U = e.memoizedState, j = U.dehydrated;
            if (j !== null) switch (t.tag) {
              case K:
                var $ = t.type;
                t.pendingProps, yT(j, $);
                break;
              case ce:
                var Ee = t.pendingProps;
                gT(j, Ee);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function pE(e, t) {
      t.flags = t.flags & ~ta | Tn, og(e, t);
    }
    function vE(e, t) {
      switch (e.tag) {
        case K: {
          var a = e.type;
          e.pendingProps;
          var i = qb(t, a);
          return i !== null ? (e.stateNode = i, Vr = e, Ai = eT(i), !0) : !1;
        }
        case ce: {
          var o = e.pendingProps, s = Xb(t, o);
          return s !== null ? (e.stateNode = s, Vr = e, Ai = null, !0) : !1;
        }
        case De: {
          var f = Kb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: NT(),
              retryLane: ia
            };
            e.memoizedState = p;
            var v = $_(f);
            return v.return = e, e.child = v, Vr = e, Ai = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ug(e) {
      return (e.mode & bt) !== We && (e.flags & $e) === Ye;
    }
    function sg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function cg(e) {
      if (al) {
        var t = Ai;
        if (!t) {
          ug(e) && (og(Vr, e), sg()), pE(Vr, e), al = !1, Vr = e;
          return;
        }
        var a = t;
        if (!vE(e, t)) {
          ug(e) && (og(Vr, e), sg()), t = dp(a);
          var i = Vr;
          if (!t || !vE(e, t)) {
            pE(Vr, e), al = !1, Vr = e;
            return;
          }
          dE(i, a);
        }
      }
    }
    function jT(e, t, a) {
      var i = e.stateNode, o = !Xs, s = rT(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function PT(e) {
      var t = e.stateNode, a = e.memoizedProps, i = aT(t, a, e);
      if (i) {
        var o = Vr;
        if (o !== null)
          switch (o.tag) {
            case q: {
              var s = o.stateNode.containerInfo, f = (o.mode & bt) !== We;
              cT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case K: {
              var p = o.type, v = o.memoizedProps, y = o.stateNode, E = (o.mode & bt) !== We;
              fT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                E
              );
              break;
            }
          }
      }
      return i;
    }
    function BT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      iT(a, e);
    }
    function VT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return lT(a);
    }
    function hE(e) {
      for (var t = e.return; t !== null && t.tag !== K && t.tag !== q && t.tag !== De; )
        t = t.return;
      Vr = t;
    }
    function Gh(e) {
      if (e !== Vr)
        return !1;
      if (!al)
        return hE(e), al = !0, !1;
      if (e.tag !== q && (e.tag !== K || sT(e.type) && !Yy(e.type, e.memoizedProps))) {
        var t = Ai;
        if (t)
          if (ug(e))
            mE(e), sg();
          else
            for (; t; )
              dE(e, t), t = dp(t);
      }
      return hE(e), e.tag === De ? Ai = VT(e) : Ai = Vr ? dp(e.stateNode) : null, !0;
    }
    function $T() {
      return al && Ai !== null;
    }
    function mE(e) {
      for (var t = Ai; t; )
        fE(e, t), t = dp(t);
    }
    function Df() {
      Vr = null, Ai = null, al = !1, Xs = !1;
    }
    function yE() {
      Au !== null && (cR(Au), Au = null);
    }
    function $r() {
      return al;
    }
    function fg(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    var IT = b.ReactCurrentBatchConfig, YT = null;
    function WT() {
      return IT.transition;
    }
    var il = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var QT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ln && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, mp = [], yp = [], gp = [], Sp = [], Ep = [], Cp = [], Zs = /* @__PURE__ */ new Set();
      il.recordUnsafeLifecycleWarnings = function(e, t) {
        Zs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillMount == "function" && yp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillReceiveProps == "function" && Sp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & ln && typeof t.UNSAFE_componentWillUpdate == "function" && Cp.push(e));
      }, il.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(w) {
          e.add(ct(w) || "Component"), Zs.add(w.type);
        }), mp = []);
        var t = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(w) {
          t.add(ct(w) || "Component"), Zs.add(w.type);
        }), yp = []);
        var a = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(w) {
          a.add(ct(w) || "Component"), Zs.add(w.type);
        }), gp = []);
        var i = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(w) {
          i.add(ct(w) || "Component"), Zs.add(w.type);
        }), Sp = []);
        var o = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(w) {
          o.add(ct(w) || "Component"), Zs.add(w.type);
        }), Ep = []);
        var s = /* @__PURE__ */ new Set();
        if (Cp.length > 0 && (Cp.forEach(function(w) {
          s.add(ct(w) || "Component"), Zs.add(w.type);
        }), Cp = []), t.size > 0) {
          var f = Ks(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ks(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ks(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ks(e);
          Q(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var E = Ks(a);
          Q(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (o.size > 0) {
          var D = Ks(o);
          Q(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var qh = /* @__PURE__ */ new Map(), gE = /* @__PURE__ */ new Set();
      il.recordLegacyContextWarning = function(e, t) {
        var a = QT(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!gE.has(e.type)) {
          var i = qh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], qh.set(a, i)), i.push(e));
        }
      }, il.flushLegacyContextWarning = function() {
        qh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ct(s) || "Component"), gE.add(s.type);
            });
            var o = Ks(i);
            try {
              nn(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              hn();
            }
          }
        });
      }, il.discardPendingWarnings = function() {
        mp = [], yp = [], gp = [], Sp = [], Ep = [], Cp = [], qh = /* @__PURE__ */ new Map();
      };
    }
    var dg, pg, vg, hg, mg, SE = function(e, t) {
    };
    dg = !1, pg = !1, vg = {}, hg = {}, mg = {}, SE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ct(t) || "Component";
        hg[a] || (hg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function GT(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Rp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ln || V) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== X) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !GT(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = ct(e) || "Component";
          vg[o] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), vg[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== X)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Kr(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var E = function(D) {
            var w = v.refs;
            D === null ? delete w[y] : w[y] = D;
          };
          return E._stringRef = y, E;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Xh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Kh(e) {
      {
        var t = ct(e) || "Component";
        if (mg[t])
          return;
        mg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function EE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function CE(e) {
      function t(N, I) {
        if (e) {
          var z = N.deletions;
          z === null ? (N.deletions = [I], N.flags |= Na) : z.push(I);
        }
      }
      function a(N, I) {
        if (!e)
          return null;
        for (var z = I; z !== null; )
          t(N, z), z = z.sibling;
        return null;
      }
      function i(N, I) {
        for (var z = /* @__PURE__ */ new Map(), se = I; se !== null; )
          se.key !== null ? z.set(se.key, se) : z.set(se.index, se), se = se.sibling;
        return z;
      }
      function o(N, I) {
        var z = oc(N, I);
        return z.index = 0, z.sibling = null, z;
      }
      function s(N, I, z) {
        if (N.index = z, !e)
          return N.flags |= xi, I;
        var se = N.alternate;
        if (se !== null) {
          var _e = se.index;
          return _e < I ? (N.flags |= Tn, I) : _e;
        } else
          return N.flags |= Tn, I;
      }
      function f(N) {
        return e && N.alternate === null && (N.flags |= Tn), N;
      }
      function p(N, I, z, se) {
        if (I === null || I.tag !== ce) {
          var _e = f0(z, N.mode, se);
          return _e.return = N, _e;
        } else {
          var Re = o(I, z);
          return Re.return = N, Re;
        }
      }
      function v(N, I, z, se) {
        var _e = z.type;
        if (_e === pi)
          return E(N, I, z.props.children, se, z.key);
        if (I !== null && (I.elementType === _e || // Keep this check inline so it only runs on the false path:
        wR(I, z) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof _e == "object" && _e !== null && _e.$$typeof === pt && EE(_e) === I.type)) {
          var Re = o(I, z.props);
          return Re.ref = Rp(N, I, z), Re.return = N, Re._debugSource = z._source, Re._debugOwner = z._owner, Re;
        }
        var ut = c0(z, N.mode, se);
        return ut.ref = Rp(N, I, z), ut.return = N, ut;
      }
      function y(N, I, z, se) {
        if (I === null || I.tag !== P || I.stateNode.containerInfo !== z.containerInfo || I.stateNode.implementation !== z.implementation) {
          var _e = d0(z, N.mode, se);
          return _e.return = N, _e;
        } else {
          var Re = o(I, z.children || []);
          return Re.return = N, Re;
        }
      }
      function E(N, I, z, se, _e) {
        if (I === null || I.tag !== ie) {
          var Re = Wu(z, N.mode, se, _e);
          return Re.return = N, Re;
        } else {
          var ut = o(I, z);
          return ut.return = N, ut;
        }
      }
      function D(N, I, z) {
        if (typeof I == "string" && I !== "" || typeof I == "number") {
          var se = f0("" + I, N.mode, z);
          return se.return = N, se;
        }
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case zr: {
              var _e = c0(I, N.mode, z);
              return _e.ref = Rp(N, null, I), _e.return = N, _e;
            }
            case fr: {
              var Re = d0(I, N.mode, z);
              return Re.return = N, Re;
            }
            case pt: {
              var ut = I._payload, ht = I._init;
              return D(N, ht(ut), z);
            }
          }
          if (Rt(I) || yt(I)) {
            var un = Wu(I, N.mode, z, null);
            return un.return = N, un;
          }
          Xh(N, I);
        }
        return typeof I == "function" && Kh(N), null;
      }
      function w(N, I, z, se) {
        var _e = I !== null ? I.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number")
          return _e !== null ? null : p(N, I, "" + z, se);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case zr:
              return z.key === _e ? v(N, I, z, se) : null;
            case fr:
              return z.key === _e ? y(N, I, z, se) : null;
            case pt: {
              var Re = z._payload, ut = z._init;
              return w(N, I, ut(Re), se);
            }
          }
          if (Rt(z) || yt(z))
            return _e !== null ? null : E(N, I, z, se, null);
          Xh(N, z);
        }
        return typeof z == "function" && Kh(N), null;
      }
      function U(N, I, z, se, _e) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var Re = N.get(z) || null;
          return p(I, Re, "" + se, _e);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case zr: {
              var ut = N.get(se.key === null ? z : se.key) || null;
              return v(I, ut, se, _e);
            }
            case fr: {
              var ht = N.get(se.key === null ? z : se.key) || null;
              return y(I, ht, se, _e);
            }
            case pt:
              var un = se._payload, Zt = se._init;
              return U(N, I, z, Zt(un), _e);
          }
          if (Rt(se) || yt(se)) {
            var nr = N.get(z) || null;
            return E(I, nr, se, _e, null);
          }
          Xh(I, se);
        }
        return typeof se == "function" && Kh(I), null;
      }
      function j(N, I, z) {
        {
          if (typeof N != "object" || N === null)
            return I;
          switch (N.$$typeof) {
            case zr:
            case fr:
              SE(N, z);
              var se = N.key;
              if (typeof se != "string")
                break;
              if (I === null) {
                I = /* @__PURE__ */ new Set(), I.add(se);
                break;
              }
              if (!I.has(se)) {
                I.add(se);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case pt:
              var _e = N._payload, Re = N._init;
              j(Re(_e), I, z);
              break;
          }
        }
        return I;
      }
      function $(N, I, z, se) {
        for (var _e = null, Re = 0; Re < z.length; Re++) {
          var ut = z[Re];
          _e = j(ut, _e, N);
        }
        for (var ht = null, un = null, Zt = I, nr = 0, Jt = 0, Xn = null; Zt !== null && Jt < z.length; Jt++) {
          Zt.index > Jt ? (Xn = Zt, Zt = null) : Xn = Zt.sibling;
          var pa = w(N, Zt, z[Jt], se);
          if (pa === null) {
            Zt === null && (Zt = Xn);
            break;
          }
          e && Zt && pa.alternate === null && t(N, Zt), nr = s(pa, nr, Jt), un === null ? ht = pa : un.sibling = pa, un = pa, Zt = Xn;
        }
        if (Jt === z.length) {
          if (a(N, Zt), $r()) {
            var Xr = Jt;
            Gs(N, Xr);
          }
          return ht;
        }
        if (Zt === null) {
          for (; Jt < z.length; Jt++) {
            var fi = D(N, z[Jt], se);
            fi !== null && (nr = s(fi, nr, Jt), un === null ? ht = fi : un.sibling = fi, un = fi);
          }
          if ($r()) {
            var _a = Jt;
            Gs(N, _a);
          }
          return ht;
        }
        for (var ka = i(N, Zt); Jt < z.length; Jt++) {
          var va = U(ka, N, Jt, z[Jt], se);
          va !== null && (e && va.alternate !== null && ka.delete(va.key === null ? Jt : va.key), nr = s(va, nr, Jt), un === null ? ht = va : un.sibling = va, un = va);
        }
        if (e && ka.forEach(function(Gf) {
          return t(N, Gf);
        }), $r()) {
          var qo = Jt;
          Gs(N, qo);
        }
        return ht;
      }
      function Ee(N, I, z, se) {
        var _e = yt(z);
        if (typeof _e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          z[Symbol.toStringTag] === "Generator" && (pg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), pg = !0), z.entries === _e && (dg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), dg = !0);
          var Re = _e.call(z);
          if (Re)
            for (var ut = null, ht = Re.next(); !ht.done; ht = Re.next()) {
              var un = ht.value;
              ut = j(un, ut, N);
            }
        }
        var Zt = _e.call(z);
        if (Zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var nr = null, Jt = null, Xn = I, pa = 0, Xr = 0, fi = null, _a = Zt.next(); Xn !== null && !_a.done; Xr++, _a = Zt.next()) {
          Xn.index > Xr ? (fi = Xn, Xn = null) : fi = Xn.sibling;
          var ka = w(N, Xn, _a.value, se);
          if (ka === null) {
            Xn === null && (Xn = fi);
            break;
          }
          e && Xn && ka.alternate === null && t(N, Xn), pa = s(ka, pa, Xr), Jt === null ? nr = ka : Jt.sibling = ka, Jt = ka, Xn = fi;
        }
        if (_a.done) {
          if (a(N, Xn), $r()) {
            var va = Xr;
            Gs(N, va);
          }
          return nr;
        }
        if (Xn === null) {
          for (; !_a.done; Xr++, _a = Zt.next()) {
            var qo = D(N, _a.value, se);
            qo !== null && (pa = s(qo, pa, Xr), Jt === null ? nr = qo : Jt.sibling = qo, Jt = qo);
          }
          if ($r()) {
            var Gf = Xr;
            Gs(N, Gf);
          }
          return nr;
        }
        for (var ev = i(N, Xn); !_a.done; Xr++, _a = Zt.next()) {
          var eo = U(ev, N, Xr, _a.value, se);
          eo !== null && (e && eo.alternate !== null && ev.delete(eo.key === null ? Xr : eo.key), pa = s(eo, pa, Xr), Jt === null ? nr = eo : Jt.sibling = eo, Jt = eo);
        }
        if (e && ev.forEach(function(Ek) {
          return t(N, Ek);
        }), $r()) {
          var Sk = Xr;
          Gs(N, Sk);
        }
        return nr;
      }
      function qe(N, I, z, se) {
        if (I !== null && I.tag === ce) {
          a(N, I.sibling);
          var _e = o(I, z);
          return _e.return = N, _e;
        }
        a(N, I);
        var Re = f0(z, N.mode, se);
        return Re.return = N, Re;
      }
      function Ve(N, I, z, se) {
        for (var _e = z.key, Re = I; Re !== null; ) {
          if (Re.key === _e) {
            var ut = z.type;
            if (ut === pi) {
              if (Re.tag === ie) {
                a(N, Re.sibling);
                var ht = o(Re, z.props.children);
                return ht.return = N, ht._debugSource = z._source, ht._debugOwner = z._owner, ht;
              }
            } else if (Re.elementType === ut || // Keep this check inline so it only runs on the false path:
            wR(Re, z) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ut == "object" && ut !== null && ut.$$typeof === pt && EE(ut) === Re.type) {
              a(N, Re.sibling);
              var un = o(Re, z.props);
              return un.ref = Rp(N, Re, z), un.return = N, un._debugSource = z._source, un._debugOwner = z._owner, un;
            }
            a(N, Re);
            break;
          } else
            t(N, Re);
          Re = Re.sibling;
        }
        if (z.type === pi) {
          var Zt = Wu(z.props.children, N.mode, se, z.key);
          return Zt.return = N, Zt;
        } else {
          var nr = c0(z, N.mode, se);
          return nr.ref = Rp(N, I, z), nr.return = N, nr;
        }
      }
      function Pt(N, I, z, se) {
        for (var _e = z.key, Re = I; Re !== null; ) {
          if (Re.key === _e)
            if (Re.tag === P && Re.stateNode.containerInfo === z.containerInfo && Re.stateNode.implementation === z.implementation) {
              a(N, Re.sibling);
              var ut = o(Re, z.children || []);
              return ut.return = N, ut;
            } else {
              a(N, Re);
              break;
            }
          else
            t(N, Re);
          Re = Re.sibling;
        }
        var ht = d0(z, N.mode, se);
        return ht.return = N, ht;
      }
      function kt(N, I, z, se) {
        var _e = typeof z == "object" && z !== null && z.type === pi && z.key === null;
        if (_e && (z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case zr:
              return f(Ve(N, I, z, se));
            case fr:
              return f(Pt(N, I, z, se));
            case pt:
              var Re = z._payload, ut = z._init;
              return kt(N, I, ut(Re), se);
          }
          if (Rt(z))
            return $(N, I, z, se);
          if (yt(z))
            return Ee(N, I, z, se);
          Xh(N, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" ? f(qe(N, I, "" + z, se)) : (typeof z == "function" && Kh(N), a(N, I));
      }
      return kt;
    }
    var Of = CE(!0), RE = CE(!1);
    function qT(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = oc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = oc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function XT(e, t) {
      for (var a = e.child; a !== null; )
        H_(a, t), a = a.sibling;
    }
    var yg = Mu(null), gg;
    gg = {};
    var Zh = null, Lf = null, Sg = null, Jh = !1;
    function em() {
      Zh = null, Lf = null, Sg = null, Jh = !1;
    }
    function xE() {
      Jh = !0;
    }
    function bE() {
      Jh = !1;
    }
    function TE(e, t, a) {
      fa(yg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== gg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = gg;
    }
    function Eg(e, t) {
      var a = yg.current;
      ca(yg, t), e._currentValue = a;
    }
    function Cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Lo(i.childLanes, t) ? o !== null && !Lo(o.childLanes, t) && (o.childLanes = gt(o.childLanes, t)) : (i.childLanes = gt(i.childLanes, t), o !== null && (o.childLanes = gt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function KT(e, t, a) {
      ZT(e, t, a);
    }
    function ZT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === X) {
                var p = Ts(a), v = $o(sn, p);
                v.tag = nm;
                var y = i.updateQueue;
                if (y !== null) {
                  var E = y.shared, D = E.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), E.pending = v;
                }
              }
              i.lanes = gt(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = gt(w.lanes, a)), Cg(i.return, a, e), s.lanes = gt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ue)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Wt) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = gt(U.lanes, a);
          var j = U.alternate;
          j !== null && (j.lanes = gt(j.lanes, a)), Cg(U, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var $ = o.sibling;
            if ($ !== null) {
              $.return = o.return, o = $;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Mf(e, t) {
      Zh = e, Lf = null, Sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (la(a.lanes, t) && Hp(), a.firstContext = null);
      }
    }
    function ur(e) {
      Jh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (Zh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, Zh.dependencies = {
            lanes: J,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var Js = null;
    function Rg(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function JT() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Js = null;
      }
    }
    function wE(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Rg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, tm(e, i);
    }
    function e1(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Rg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function t1(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Rg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, tm(e, i);
    }
    function $a(e, t) {
      return tm(e, t);
    }
    var n1 = tm;
    function tm(e, t) {
      e.lanes = gt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = gt(a.lanes, t)), a === null && (e.flags & (Tn | ta)) !== Ye && RR(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = gt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = gt(a.childLanes, t) : (o.flags & (Tn | ta)) !== Ye && RR(e), i = o, o = o.return;
      if (i.tag === q) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var _E = 0, kE = 1, nm = 2, xg = 3, rm = !1, bg, am;
    bg = !1, am = null;
    function Tg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: J
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function DE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function $o(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: _E,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (am === o && !bg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), bg = !0), e_()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, n1(e, a);
      } else
        return t1(e, o, t, a);
    }
    function im(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Ad(a)) {
          var s = o.lanes;
          s = Hd(s, e.pendingLanes);
          var f = gt(s, a);
          o.lanes = f, rf(e, f);
        }
      }
    }
    function wg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var E = a.lastBaseUpdate;
      E === null ? a.firstBaseUpdate = t : E.next = t, a.lastBaseUpdate = t;
    }
    function r1(e, t, a, i, o, s) {
      switch (a.tag) {
        case kE: {
          var f = a.payload;
          if (typeof f == "function") {
            xE();
            var p = f.call(s, i, o);
            {
              if (e.mode & ln) {
                wn(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  wn(!1);
                }
              }
              bE();
            }
            return p;
          }
          return f;
        }
        case xg:
          e.flags = e.flags & ~ar | $e;
        // Intentional fallthrough
        case _E: {
          var v = a.payload, y;
          if (typeof v == "function") {
            xE(), y = v.call(s, i, o);
            {
              if (e.mode & ln) {
                wn(!0);
                try {
                  v.call(s, i, o);
                } finally {
                  wn(!1);
                }
              }
              bE();
            }
          } else
            y = v;
          return y == null ? i : Et({}, i, y);
        }
        case nm:
          return rm = !0, i;
      }
      return i;
    }
    function lm(e, t, a, i) {
      var o = e.updateQueue;
      rm = !1, am = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending;
      if (p !== null) {
        o.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var E = e.alternate;
        if (E !== null) {
          var D = E.updateQueue, w = D.lastBaseUpdate;
          w !== f && (w === null ? D.firstBaseUpdate = y : w.next = y, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var U = o.baseState, j = J, $ = null, Ee = null, qe = null, Ve = s;
        do {
          var Pt = Ve.lane, kt = Ve.eventTime;
          if (Lo(i, Pt)) {
            if (qe !== null) {
              var I = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yt,
                tag: Ve.tag,
                payload: Ve.payload,
                callback: Ve.callback,
                next: null
              };
              qe = qe.next = I;
            }
            U = r1(e, o, Ve, U, t, a);
            var z = Ve.callback;
            if (z !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ve.lane !== Yt) {
              e.flags |= pn;
              var se = o.effects;
              se === null ? o.effects = [Ve] : se.push(Ve);
            }
          } else {
            var N = {
              eventTime: kt,
              lane: Pt,
              tag: Ve.tag,
              payload: Ve.payload,
              callback: Ve.callback,
              next: null
            };
            qe === null ? (Ee = qe = N, $ = U) : qe = qe.next = N, j = gt(j, Pt);
          }
          if (Ve = Ve.next, Ve === null) {
            if (p = o.shared.pending, p === null)
              break;
            var _e = p, Re = _e.next;
            _e.next = null, Ve = Re, o.lastBaseUpdate = _e, o.shared.pending = null;
          }
        } while (!0);
        qe === null && ($ = U), o.baseState = $, o.firstBaseUpdate = Ee, o.lastBaseUpdate = qe;
        var ut = o.shared.interleaved;
        if (ut !== null) {
          var ht = ut;
          do
            j = gt(j, ht.lane), ht = ht.next;
          while (ht !== ut);
        } else s === null && (o.shared.lanes = J);
        qp(j), e.lanes = j, e.memoizedState = U;
      }
      am = null;
    }
    function a1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function OE() {
      rm = !1;
    }
    function om() {
      return rm;
    }
    function LE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, a1(f, a));
        }
    }
    var xp = {}, Hu = Mu(xp), bp = Mu(xp), um = Mu(xp);
    function sm(e) {
      if (e === xp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function ME() {
      var e = sm(um.current);
      return e;
    }
    function _g(e, t) {
      fa(um, t, e), fa(bp, e, e), fa(Hu, xp, e);
      var a = Cb(t);
      ca(Hu, e), fa(Hu, a, e);
    }
    function Nf(e) {
      ca(Hu, e), ca(bp, e), ca(um, e);
    }
    function kg() {
      var e = sm(Hu.current);
      return e;
    }
    function NE(e) {
      sm(um.current);
      var t = sm(Hu.current), a = Rb(t, e.type);
      t !== a && (fa(bp, e, e), fa(Hu, a, e));
    }
    function Dg(e) {
      bp.current === e && (ca(Hu, e), ca(bp, e));
    }
    var i1 = 0, zE = 1, AE = 1, Tp = 2, ll = Mu(i1);
    function Og(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & zE;
    }
    function Lg(e, t) {
      return e & zE | t;
    }
    function l1(e, t) {
      return e | t;
    }
    function Fu(e, t) {
      fa(ll, t, e);
    }
    function Af(e) {
      ca(ll, e);
    }
    function o1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function cm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Z0(i) || qy(i))
              return t;
          }
        } else if (t.tag === _t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & $e) !== Ye;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ia = (
      /*   */
      0
    ), gr = (
      /* */
      1
    ), Ql = (
      /*  */
      2
    ), Sr = (
      /*    */
      4
    ), Ir = (
      /*   */
      8
    ), Mg = [];
    function Ng() {
      for (var e = 0; e < Mg.length; e++) {
        var t = Mg[e];
        t._workInProgressVersionPrimary = null;
      }
      Mg.length = 0;
    }
    function u1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Te = b.ReactCurrentDispatcher, wp = b.ReactCurrentBatchConfig, zg, Uf;
    zg = /* @__PURE__ */ new Set();
    var ec = J, on = null, Er = null, Cr = null, fm = !1, _p = !1, kp = 0, s1 = 0, c1 = 25, G = null, Ui = null, ju = -1, Ag = !1;
    function tn() {
      {
        var e = G;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function he() {
      {
        var e = G;
        Ui !== null && (ju++, Ui[ju] !== e && f1(e));
      }
    }
    function Hf(e) {
      e != null && !Rt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", G, typeof e);
    }
    function f1(e) {
      {
        var t = ct(on);
        if (!zg.has(t) && (zg.add(t), Ui !== null)) {
          for (var a = "", i = 30, o = 0; o <= ju; o++) {
            for (var s = Ui[o], f = o === ju ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function da() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ug(e, t) {
      if (Ag)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", G), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, G, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ae(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, o, s) {
      ec = s, on = t, Ui = e !== null ? e._debugHookTypes : null, ju = -1, Ag = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = J, e !== null && e.memoizedState !== null ? Te.current = rC : Ui !== null ? Te.current = nC : Te.current = tC;
      var f = a(i, o);
      if (_p) {
        var p = 0;
        do {
          if (_p = !1, kp = 0, p >= c1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Ag = !1, Er = null, Cr = null, t.updateQueue = null, ju = -1, Te.current = aC, f = a(i, o);
        } while (_p);
      }
      Te.current = bm, t._debugHookTypes = Ui;
      var v = Er !== null && Er.next !== null;
      if (ec = J, on = null, Er = null, Cr = null, G = null, Ui = null, ju = -1, e !== null && (e.flags & In) !== (t.flags & In) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & bt) !== We && g("Internal React error: Expected static flag was missing. Please notify the React team."), fm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jf() {
      var e = kp !== 0;
      return kp = 0, e;
    }
    function UE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Xt) !== We ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function HE() {
      if (Te.current = bm, fm) {
        for (var e = on.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        fm = !1;
      }
      ec = J, on = null, Er = null, Cr = null, Ui = null, ju = -1, G = null, XE = !1, _p = !1, kp = 0;
    }
    function Gl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Cr === null ? on.memoizedState = Cr = e : Cr = Cr.next = e, Cr;
    }
    function Hi() {
      var e;
      if (Er === null) {
        var t = on.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Er.next;
      var a;
      if (Cr === null ? a = on.memoizedState : a = Cr.next, a !== null)
        Cr = a, a = Cr.next, Er = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Er = e;
        var i = {
          memoizedState: Er.memoizedState,
          baseState: Er.baseState,
          baseQueue: Er.baseQueue,
          queue: Er.queue,
          next: null
        };
        Cr === null ? on.memoizedState = Cr = i : Cr = Cr.next = i;
      }
      return Cr;
    }
    function FE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Fg(e, t, a) {
      var i = Gl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = h1.bind(null, on, s);
      return [i.memoizedState, f];
    }
    function jg(e, t, a) {
      var i = Hi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = Er, f = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var E = f.next, D = s.baseState, w = null, U = null, j = null, $ = E;
        do {
          var Ee = $.lane;
          if (Lo(ec, Ee)) {
            if (j !== null) {
              var Ve = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Yt,
                action: $.action,
                hasEagerState: $.hasEagerState,
                eagerState: $.eagerState,
                next: null
              };
              j = j.next = Ve;
            }
            if ($.hasEagerState)
              D = $.eagerState;
            else {
              var Pt = $.action;
              D = e(D, Pt);
            }
          } else {
            var qe = {
              lane: Ee,
              action: $.action,
              hasEagerState: $.hasEagerState,
              eagerState: $.eagerState,
              next: null
            };
            j === null ? (U = j = qe, w = D) : j = j.next = qe, on.lanes = gt(on.lanes, Ee), qp(Ee);
          }
          $ = $.next;
        } while ($ !== null && $ !== E);
        j === null ? w = D : j.next = U, ae(D, i.memoizedState) || Hp(), i.memoizedState = D, i.baseState = w, i.baseQueue = j, o.lastRenderedState = D;
      }
      var kt = o.interleaved;
      if (kt !== null) {
        var N = kt;
        do {
          var I = N.lane;
          on.lanes = gt(on.lanes, I), qp(I), N = N.next;
        } while (N !== kt);
      } else f === null && (o.lanes = J);
      var z = o.dispatch;
      return [i.memoizedState, z];
    }
    function Pg(e, t, a) {
      var i = Hi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, p = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var v = f.next, y = v;
        do {
          var E = y.action;
          p = e(p, E), y = y.next;
        } while (y !== v);
        ae(p, i.memoizedState) || Hp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function Xk(e, t, a) {
    }
    function Kk(e, t, a) {
    }
    function Bg(e, t, a) {
      var i = on, o = Gl(), s, f = $r();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Uf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      } else {
        if (s = t(), !Uf) {
          var p = t();
          ae(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
        }
        var v = $m();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        tf(v, ec) || jE(i, t, s);
      }
      o.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return o.queue = y, mm(BE.bind(null, i, y, e), [e]), i.flags |= ea, Dp(gr | Ir, PE.bind(null, i, y, s, t), void 0, null), s;
    }
    function dm(e, t, a) {
      var i = on, o = Hi(), s = t();
      if (!Uf) {
        var f = t();
        ae(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      }
      var p = o.memoizedState, v = !ae(p, s);
      v && (o.memoizedState = s, Hp());
      var y = o.queue;
      if (Lp(BE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Cr !== null && Cr.memoizedState.tag & gr) {
        i.flags |= ea, Dp(gr | Ir, PE.bind(null, i, y, s, t), void 0, null);
        var E = $m();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        tf(E, ec) || jE(i, t, s);
      }
      return s;
    }
    function jE(e, t, a) {
      e.flags |= mu;
      var i = {
        getSnapshot: t,
        value: a
      }, o = on.updateQueue;
      if (o === null)
        o = FE(), on.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function PE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, VE(t) && $E(e);
    }
    function BE(e, t, a) {
      var i = function() {
        VE(t) && $E(e);
      };
      return a(i);
    }
    function VE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ae(a, i);
      } catch {
        return !0;
      }
    }
    function $E(e) {
      var t = $a(e, lt);
      t !== null && Tr(t, e, lt, sn);
    }
    function pm(e) {
      var t = Gl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = m1.bind(null, on, a);
      return [t.memoizedState, i];
    }
    function Vg(e) {
      return jg(Hg);
    }
    function $g(e) {
      return Pg(Hg);
    }
    function Dp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = on.updateQueue;
      if (s === null)
        s = FE(), on.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var p = f.next;
          f.next = o, o.next = p, s.lastEffect = o;
        }
      }
      return o;
    }
    function Ig(e) {
      var t = Gl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function vm(e) {
      var t = Hi();
      return t.memoizedState;
    }
    function Op(e, t, a, i) {
      var o = Gl(), s = i === void 0 ? null : i;
      on.flags |= e, o.memoizedState = Dp(gr | t, a, void 0, s);
    }
    function hm(e, t, a, i) {
      var o = Hi(), s = i === void 0 ? null : i, f = void 0;
      if (Er !== null) {
        var p = Er.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ug(s, v)) {
            o.memoizedState = Dp(t, a, f, s);
            return;
          }
        }
      }
      on.flags |= e, o.memoizedState = Dp(gr | t, a, f, s);
    }
    function mm(e, t) {
      return (on.mode & Xt) !== We ? Op(bi | ea | kc, Ir, e, t) : Op(ea | kc, Ir, e, t);
    }
    function Lp(e, t) {
      return hm(ea, Ir, e, t);
    }
    function Yg(e, t) {
      return Op(Ht, Ql, e, t);
    }
    function ym(e, t) {
      return hm(Ht, Ql, e, t);
    }
    function Wg(e, t) {
      var a = Ht;
      return a |= Gi, (on.mode & Xt) !== We && (a |= Dl), Op(a, Sr, e, t);
    }
    function gm(e, t) {
      return hm(Ht, Sr, e, t);
    }
    function IE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function Qg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Ht;
      return o |= Gi, (on.mode & Xt) !== We && (o |= Dl), Op(o, Sr, IE.bind(null, t, e), i);
    }
    function Sm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return hm(Ht, Sr, IE.bind(null, t, e), i);
    }
    function d1(e, t) {
    }
    var Em = d1;
    function Gg(e, t) {
      var a = Gl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Cm(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (Ug(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function qg(e, t) {
      var a = Gl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Rm(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (Ug(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Xg(e) {
      var t = Gl();
      return t.memoizedState = e, e;
    }
    function YE(e) {
      var t = Hi(), a = Er, i = a.memoizedState;
      return QE(t, i, e);
    }
    function WE(e) {
      var t = Hi();
      if (Er === null)
        return t.memoizedState = e, e;
      var a = Er.memoizedState;
      return QE(t, a, e);
    }
    function QE(e, t, a) {
      var i = !Nd(ec);
      if (i) {
        if (!ae(a, t)) {
          var o = Ud();
          on.lanes = gt(on.lanes, o), qp(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function p1(e, t, a) {
      var i = Pa();
      Qn(Jv(i, ki)), e(!0);
      var o = wp.transition;
      wp.transition = {};
      var s = wp.transition;
      wp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Qn(i), wp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Q("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Kg() {
      var e = pm(!1), t = e[0], a = e[1], i = p1.bind(null, a), o = Gl();
      return o.memoizedState = i, [t, i];
    }
    function GE() {
      var e = Vg(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    function qE() {
      var e = $g(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    var XE = !1;
    function v1() {
      return XE;
    }
    function Zg() {
      var e = Gl(), t = $m(), a = t.identifierPrefix, i;
      if ($r()) {
        var o = LT();
        i = ":" + a + "R" + o;
        var s = kp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = s1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function xm() {
      var e = Hi(), t = e.memoizedState;
      return t;
    }
    function h1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Iu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KE(e))
        ZE(t, o);
      else {
        var s = wE(e, t, o, i);
        if (s !== null) {
          var f = wa();
          Tr(s, e, i, f), JE(s, t, i);
        }
      }
      eC(e, i);
    }
    function m1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Iu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KE(e))
        ZE(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === J && (s === null || s.lanes === J)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Te.current, Te.current = ol;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (o.hasEagerState = !0, o.eagerState = y, ae(y, v)) {
                e1(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Te.current = p;
            }
          }
        }
        var E = wE(e, t, o, i);
        if (E !== null) {
          var D = wa();
          Tr(E, e, i, D), JE(E, t, i);
        }
      }
      eC(e, i);
    }
    function KE(e) {
      var t = e.alternate;
      return e === on || t !== null && t === on;
    }
    function ZE(e, t) {
      _p = fm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function JE(e, t, a) {
      if (Ad(a)) {
        var i = t.lanes;
        i = Hd(i, e.pendingLanes);
        var o = gt(i, a);
        t.lanes = o, rf(e, o);
      }
    }
    function eC(e, t, a) {
      ms(e, t);
    }
    var bm = {
      readContext: ur,
      useCallback: da,
      useContext: da,
      useEffect: da,
      useImperativeHandle: da,
      useInsertionEffect: da,
      useLayoutEffect: da,
      useMemo: da,
      useReducer: da,
      useRef: da,
      useState: da,
      useDebugValue: da,
      useDeferredValue: da,
      useTransition: da,
      useMutableSource: da,
      useSyncExternalStore: da,
      useId: da,
      unstable_isNewReconciler: ne
    }, tC = null, nC = null, rC = null, aC = null, ql = null, ol = null, Tm = null;
    {
      var Jg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, vt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      tC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", tn(), Hf(t), Gg(e, t);
        },
        useContext: function(e) {
          return G = "useContext", tn(), ur(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", tn(), Hf(t), mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", tn(), Hf(a), Qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", tn(), Hf(t), Yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", tn(), Hf(t), Wg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", tn(), Hf(t);
          var a = Te.current;
          Te.current = ql;
          try {
            return qg(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", tn();
          var i = Te.current;
          Te.current = ql;
          try {
            return Fg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", tn(), Ig(e);
        },
        useState: function(e) {
          G = "useState", tn();
          var t = Te.current;
          Te.current = ql;
          try {
            return pm(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", tn(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", tn(), Xg(e);
        },
        useTransition: function() {
          return G = "useTransition", tn(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", tn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", tn(), Bg(e, t, a);
        },
        useId: function() {
          return G = "useId", tn(), Zg();
        },
        unstable_isNewReconciler: ne
      }, nC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", he(), Gg(e, t);
        },
        useContext: function(e) {
          return G = "useContext", he(), ur(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", he(), mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", he(), Qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", he(), Yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", he(), Wg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", he();
          var a = Te.current;
          Te.current = ql;
          try {
            return qg(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", he();
          var i = Te.current;
          Te.current = ql;
          try {
            return Fg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", he(), Ig(e);
        },
        useState: function(e) {
          G = "useState", he();
          var t = Te.current;
          Te.current = ql;
          try {
            return pm(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", he(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", he(), Xg(e);
        },
        useTransition: function() {
          return G = "useTransition", he(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", he(), Bg(e, t, a);
        },
        useId: function() {
          return G = "useId", he(), Zg();
        },
        unstable_isNewReconciler: ne
      }, rC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", he(), Cm(e, t);
        },
        useContext: function(e) {
          return G = "useContext", he(), ur(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", he(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", he(), Sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", he(), ym(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", he(), gm(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", he();
          var a = Te.current;
          Te.current = ol;
          try {
            return Rm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", he();
          var i = Te.current;
          Te.current = ol;
          try {
            return jg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", he(), vm();
        },
        useState: function(e) {
          G = "useState", he();
          var t = Te.current;
          Te.current = ol;
          try {
            return Vg(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", he(), Em();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", he(), YE(e);
        },
        useTransition: function() {
          return G = "useTransition", he(), GE();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", he(), dm(e, t);
        },
        useId: function() {
          return G = "useId", he(), xm();
        },
        unstable_isNewReconciler: ne
      }, aC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", he(), Cm(e, t);
        },
        useContext: function(e) {
          return G = "useContext", he(), ur(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", he(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", he(), Sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", he(), ym(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", he(), gm(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", he();
          var a = Te.current;
          Te.current = Tm;
          try {
            return Rm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", he();
          var i = Te.current;
          Te.current = Tm;
          try {
            return Pg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", he(), vm();
        },
        useState: function(e) {
          G = "useState", he();
          var t = Te.current;
          Te.current = Tm;
          try {
            return $g(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", he(), Em();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", he(), WE(e);
        },
        useTransition: function() {
          return G = "useTransition", he(), qE();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", he(), dm(e, t);
        },
        useId: function() {
          return G = "useId", he(), xm();
        },
        unstable_isNewReconciler: ne
      }, ql = {
        readContext: function(e) {
          return Jg(), ur(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", vt(), tn(), Gg(e, t);
        },
        useContext: function(e) {
          return G = "useContext", vt(), tn(), ur(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", vt(), tn(), mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", vt(), tn(), Qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", vt(), tn(), Yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", vt(), tn(), Wg(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", vt(), tn();
          var a = Te.current;
          Te.current = ql;
          try {
            return qg(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", vt(), tn();
          var i = Te.current;
          Te.current = ql;
          try {
            return Fg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", vt(), tn(), Ig(e);
        },
        useState: function(e) {
          G = "useState", vt(), tn();
          var t = Te.current;
          Te.current = ql;
          try {
            return pm(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", vt(), tn(), void 0;
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", vt(), tn(), Xg(e);
        },
        useTransition: function() {
          return G = "useTransition", vt(), tn(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", vt(), tn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", vt(), tn(), Bg(e, t, a);
        },
        useId: function() {
          return G = "useId", vt(), tn(), Zg();
        },
        unstable_isNewReconciler: ne
      }, ol = {
        readContext: function(e) {
          return Jg(), ur(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", vt(), he(), Cm(e, t);
        },
        useContext: function(e) {
          return G = "useContext", vt(), he(), ur(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", vt(), he(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", vt(), he(), Sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", vt(), he(), ym(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", vt(), he(), gm(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", vt(), he();
          var a = Te.current;
          Te.current = ol;
          try {
            return Rm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", vt(), he();
          var i = Te.current;
          Te.current = ol;
          try {
            return jg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", vt(), he(), vm();
        },
        useState: function(e) {
          G = "useState", vt(), he();
          var t = Te.current;
          Te.current = ol;
          try {
            return Vg(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", vt(), he(), Em();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", vt(), he(), YE(e);
        },
        useTransition: function() {
          return G = "useTransition", vt(), he(), GE();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", vt(), he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", vt(), he(), dm(e, t);
        },
        useId: function() {
          return G = "useId", vt(), he(), xm();
        },
        unstable_isNewReconciler: ne
      }, Tm = {
        readContext: function(e) {
          return Jg(), ur(e);
        },
        useCallback: function(e, t) {
          return G = "useCallback", vt(), he(), Cm(e, t);
        },
        useContext: function(e) {
          return G = "useContext", vt(), he(), ur(e);
        },
        useEffect: function(e, t) {
          return G = "useEffect", vt(), he(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return G = "useImperativeHandle", vt(), he(), Sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return G = "useInsertionEffect", vt(), he(), ym(e, t);
        },
        useLayoutEffect: function(e, t) {
          return G = "useLayoutEffect", vt(), he(), gm(e, t);
        },
        useMemo: function(e, t) {
          G = "useMemo", vt(), he();
          var a = Te.current;
          Te.current = ol;
          try {
            return Rm(e, t);
          } finally {
            Te.current = a;
          }
        },
        useReducer: function(e, t, a) {
          G = "useReducer", vt(), he();
          var i = Te.current;
          Te.current = ol;
          try {
            return Pg(e, t, a);
          } finally {
            Te.current = i;
          }
        },
        useRef: function(e) {
          return G = "useRef", vt(), he(), vm();
        },
        useState: function(e) {
          G = "useState", vt(), he();
          var t = Te.current;
          Te.current = ol;
          try {
            return $g(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return G = "useDebugValue", vt(), he(), Em();
        },
        useDeferredValue: function(e) {
          return G = "useDeferredValue", vt(), he(), WE(e);
        },
        useTransition: function() {
          return G = "useTransition", vt(), he(), qE();
        },
        useMutableSource: function(e, t, a) {
          return G = "useMutableSource", vt(), he(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return G = "useSyncExternalStore", vt(), he(), dm(e, t);
        },
        useId: function() {
          return G = "useId", vt(), he(), xm();
        },
        unstable_isNewReconciler: ne
      };
    }
    var Pu = _.unstable_now, iC = 0, wm = -1, Mp = -1, _m = -1, eS = !1, km = !1;
    function lC() {
      return eS;
    }
    function y1() {
      km = !0;
    }
    function g1() {
      eS = !1, km = !1;
    }
    function S1() {
      eS = km, km = !1;
    }
    function oC() {
      return iC;
    }
    function uC() {
      iC = Pu();
    }
    function tS(e) {
      Mp = Pu(), e.actualStartTime < 0 && (e.actualStartTime = Pu());
    }
    function sC(e) {
      Mp = -1;
    }
    function Dm(e, t) {
      if (Mp >= 0) {
        var a = Pu() - Mp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Mp = -1;
      }
    }
    function Xl(e) {
      if (wm >= 0) {
        var t = Pu() - wm;
        wm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case je:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function nS(e) {
      if (_m >= 0) {
        var t = Pu() - _m;
        _m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case je:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Kl() {
      wm = Pu();
    }
    function rS() {
      _m = Pu();
    }
    function aS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = Et({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var iS = {}, lS, oS, uS, sS, cS, cC, Om, fS, dS, pS, Np;
    {
      lS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), Np = /* @__PURE__ */ new Set();
      var fC = /* @__PURE__ */ new Set();
      Om = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          fC.has(a) || (fC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, cC = function(e, t) {
        if (t === void 0) {
          var a = Vt(e) || "Component";
          cS.has(a) || (cS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(iS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(iS);
    }
    function vS(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & ln) {
          wn(!0);
          try {
            s = a(i, o);
          } finally {
            wn(!1);
          }
        }
        cC(t, s);
      }
      var f = s == null ? o : Et({}, o, s);
      if (e.memoizedState = f, e.lanes === J) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var hS = {
      isMounted: Hv,
      enqueueSetState: function(e, t, a) {
        var i = hu(e), o = wa(), s = Iu(i), f = $o(o, s);
        f.payload = t, a != null && (Om(a, "setState"), f.callback = a);
        var p = Uu(i, f, s);
        p !== null && (Tr(p, i, s, o), im(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = hu(e), o = wa(), s = Iu(i), f = $o(o, s);
        f.tag = kE, f.payload = t, a != null && (Om(a, "replaceState"), f.callback = a);
        var p = Uu(i, f, s);
        p !== null && (Tr(p, i, s, o), im(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = hu(e), i = wa(), o = Iu(a), s = $o(i, o);
        s.tag = nm, t != null && (Om(t, "forceUpdate"), s.callback = t);
        var f = Uu(a, s, o);
        f !== null && (Tr(f, a, o, i), im(f, a, o)), Ac(a, o);
      }
    };
    function dC(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ln) {
            wn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              wn(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Vt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ze(a, i) || !ze(o, s) : !0;
    }
    function E1(e, t, a) {
      var i = e.stateNode;
      {
        var o = Vt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ln) === We && (Np.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !Np.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ln) === We && (Np.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !dS.has(t) && (dS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Vt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !uS.has(t) && (uS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Vt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || Rt(p)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function pC(e, t) {
      t.updater = hS, e.stateNode = t, yo(t, e), t._reactInternalInstance = iS;
    }
    function vC(e, t, a) {
      var i = !1, o = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === x && f._context === void 0
        );
        if (!p && !pS.has(t)) {
          pS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === hi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Vt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ur(f);
      else {
        o = Tf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? wf(e, o) : si;
      }
      var E = new t(a, s);
      if (e.mode & ln) {
        wn(!0);
        try {
          E = new t(a, s);
        } finally {
          wn(!1);
        }
      }
      var D = e.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null;
      pC(e, E);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var w = Vt(t) || "Component";
          oS.has(w) || (oS.add(w), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, E.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof E.getSnapshotBeforeUpdate == "function") {
          var U = null, j = null, $ = null;
          if (typeof E.componentWillMount == "function" && E.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof E.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof E.componentWillReceiveProps == "function" && E.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof E.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof E.componentWillUpdate == "function" && E.componentWillUpdate.__suppressDeprecationWarning !== !0 ? $ = "componentWillUpdate" : typeof E.UNSAFE_componentWillUpdate == "function" && ($ = "UNSAFE_componentWillUpdate"), U !== null || j !== null || $ !== null) {
            var Ee = Vt(t) || "Component", qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            sS.has(Ee) || (sS.add(Ee), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ee, qe, U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : "", $ !== null ? `
  ` + $ : ""));
          }
        }
      }
      return i && rE(e, o, s), E;
    }
    function C1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ct(e) || "Component"), hS.enqueueReplaceState(t, t.state, null));
    }
    function hC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = ct(e) || "Component";
          lS.has(s) || (lS.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        hS.enqueueReplaceState(t, t.state, null);
      }
    }
    function mS(e, t, a, i) {
      E1(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, Tg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = ur(s);
      else {
        var f = Tf(e, t, !0);
        o.context = wf(e, f);
      }
      {
        if (o.state === a) {
          var p = Vt(t) || "Component";
          fS.has(p) || (fS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ln && il.recordLegacyContextWarning(e, o), il.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (vS(e, t, v, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (C1(e, o), lm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var y = Ht;
        y |= Gi, (e.mode & Xt) !== We && (y |= Dl), e.flags |= y;
      }
    }
    function R1(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, v = si;
      if (typeof p == "object" && p !== null)
        v = ur(p);
      else {
        var y = Tf(e, t, !0);
        v = wf(e, y);
      }
      var E = t.getDerivedStateFromProps, D = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !D && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== v) && hC(e, o, a, v), OE();
      var w = e.memoizedState, U = o.state = w;
      if (lm(e, a, o, i), U = e.memoizedState, s === a && w === U && !Bh() && !om()) {
        if (typeof o.componentDidMount == "function") {
          var j = Ht;
          j |= Gi, (e.mode & Xt) !== We && (j |= Dl), e.flags |= j;
        }
        return !1;
      }
      typeof E == "function" && (vS(e, t, E, a), U = e.memoizedState);
      var $ = om() || dC(e, t, s, a, w, U, v);
      if ($) {
        if (!D && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Ee = Ht;
          Ee |= Gi, (e.mode & Xt) !== We && (Ee |= Dl), e.flags |= Ee;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var qe = Ht;
          qe |= Gi, (e.mode & Xt) !== We && (qe |= Dl), e.flags |= qe;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return o.props = a, o.state = U, o.context = v, $;
    }
    function x1(e, t, a, i, o) {
      var s = t.stateNode;
      DE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, E = a.contextType, D = si;
      if (typeof E == "object" && E !== null)
        D = ur(E);
      else {
        var w = Tf(t, a, !0);
        D = wf(t, w);
      }
      var U = a.getDerivedStateFromProps, j = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !j && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== D) && hC(t, s, i, D), OE();
      var $ = t.memoizedState, Ee = s.state = $;
      if (lm(t, i, s, o), Ee = t.memoizedState, f === v && $ === Ee && !Bh() && !om() && !Le)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Ht), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Jn), !1;
      typeof U == "function" && (vS(t, a, U, i), Ee = t.memoizedState);
      var qe = om() || dC(t, a, p, i, $, Ee, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Le;
      return qe ? (!j && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ee, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ee, D)), typeof s.componentDidUpdate == "function" && (t.flags |= Ht), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Jn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Ht), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || $ !== e.memoizedState) && (t.flags |= Jn), t.memoizedProps = i, t.memoizedState = Ee), s.props = i, s.state = Ee, s.context = D, qe;
    }
    function tc(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function yS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function b1(e, t) {
      return !0;
    }
    function gS(e, t) {
      try {
        var a = b1(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === X)
            return;
          console.error(i);
        }
        var p = o ? ct(o) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === q)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var E = ct(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + E + ".");
        }
        var D = v + `
` + f + `

` + ("" + y);
        console.error(D);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var T1 = typeof WeakMap == "function" ? WeakMap : Map;
    function mC(e, t, a) {
      var i = $o(sn, a);
      i.tag = xg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        y_(o), gS(e, t);
      }, i;
    }
    function SS(e, t, a) {
      var i = $o(sn, a);
      i.tag = xg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          _R(e), gS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        _R(e), gS(e, t), typeof o != "function" && h_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof o != "function" && (la(e.lanes, lt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ct(e) || "Unknown"));
      }), i;
    }
    function yC(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new T1(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = g_.bind(null, e, t, a);
        aa && Xp(e, a), t.then(s, s);
      }
    }
    function w1(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function _1(e, t) {
      var a = e.tag;
      if ((e.mode & bt) === We && (a === Y || a === Fe || a === Me)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function gC(e) {
      var t = e;
      do {
        if (t.tag === De && o1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function SC(e, t, a, i, o) {
      if ((e.mode & bt) === We) {
        if (e === t)
          e.flags |= ar;
        else {
          if (e.flags |= $e, a.flags |= _c, a.flags &= -52805, a.tag === X) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ot;
            else {
              var f = $o(sn, lt);
              f.tag = nm, Uu(a, f, lt);
            }
          }
          a.lanes = gt(a.lanes, lt);
        }
        return e;
      }
      return e.flags |= ar, e.lanes = o, e;
    }
    function k1(e, t, a, i, o) {
      if (a.flags |= cs, aa && Xp(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        _1(a), $r() && a.mode & bt && cE();
        var f = gC(t);
        if (f !== null) {
          f.flags &= ~_r, SC(f, t, a, e, o), f.mode & bt && yC(e, s, o), w1(f, e, s);
          return;
        } else {
          if (!Yv(o)) {
            yC(e, s, o), ZS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if ($r() && a.mode & bt) {
        cE();
        var v = gC(t);
        if (v !== null) {
          (v.flags & ar) === Ye && (v.flags |= _r), SC(v, t, a, e, o), fg(tc(i, a));
          return;
        }
      }
      i = tc(i, a), o_(i);
      var y = t;
      do {
        switch (y.tag) {
          case q: {
            var E = i;
            y.flags |= ar;
            var D = Ts(o);
            y.lanes = gt(y.lanes, D);
            var w = mC(y, E, D);
            wg(y, w);
            return;
          }
          case X:
            var U = i, j = y.type, $ = y.stateNode;
            if ((y.flags & $e) === Ye && (typeof j.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && !gR($))) {
              y.flags |= ar;
              var Ee = Ts(o);
              y.lanes = gt(y.lanes, Ee);
              var qe = SS(y, U, Ee);
              wg(y, qe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function D1() {
      return null;
    }
    var zp = b.ReactCurrentOwner, sl = !1, ES, Ap, CS, RS, xS, nc, bS, Lm, Up;
    ES = {}, Ap = {}, CS = {}, RS = {}, xS = {}, nc = !1, bS = {}, Lm = {}, Up = {};
    function ba(e, t, a, i) {
      e === null ? t.child = RE(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function O1(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function EC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && rl(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Mf(t, o), Ea(t);
      {
        if (zp.current = t, Zn(!0), v = Ff(e, t, f, i, p, o), y = jf(), t.mode & ln) {
          wn(!0);
          try {
            v = Ff(e, t, f, i, p, o), y = jf();
          } finally {
            wn(!1);
          }
        }
        Zn(!1);
      }
      return Ca(), e !== null && !sl ? (UE(e, t, o), Io(e, t, o)) : ($r() && y && ig(t), t.flags |= ai, ba(e, t, v, o), t.child);
    }
    function CC(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (A_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Qf(s), t.tag = Me, t.type = f, _S(t, s), RC(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          if (p && rl(
            p,
            i,
            // Resolved props
            "prop",
            Vt(s)
          ), a.defaultProps !== void 0) {
            var v = Vt(s) || "Unknown";
            Up[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Up[v] = !0);
          }
        }
        var y = s0(a.type, null, i, t, t.mode, o);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var E = a.type, D = E.propTypes;
        D && rl(
          D,
          i,
          // Resolved props
          "prop",
          Vt(E)
        );
      }
      var w = e.child, U = NS(e, o);
      if (!U) {
        var j = w.memoizedProps, $ = a.compare;
        if ($ = $ !== null ? $ : ze, $(j, i) && e.ref === t.ref)
          return Io(e, t, o);
      }
      t.flags |= ai;
      var Ee = oc(w, i);
      return Ee.ref = t.ref, Ee.return = t, t.child = Ee, Ee;
    }
    function RC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === pt) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && rl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Vt(s)
          );
        }
      }
      if (e !== null) {
        var E = e.memoizedProps;
        if (ze(E, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (sl = !1, t.pendingProps = i = E, NS(e, o))
            (e.flags & _c) !== Ye && (sl = !0);
          else return t.lanes = e.lanes, Io(e, t, o);
      }
      return TS(e, t, a, i, o);
    }
    function xC(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || pe)
        if ((t.mode & bt) === We) {
          var f = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Im(t, a);
        } else if (la(a, ia)) {
          var D = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var w = s !== null ? s.baseLanes : a;
          Im(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = gt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ia;
          var E = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = E, t.updateQueue = null, Im(t, v), null;
        }
      else {
        var U;
        s !== null ? (U = gt(s.baseLanes, a), t.memoizedState = null) : U = a, Im(t, U);
      }
      return ba(e, t, o, a), t.child;
    }
    function L1(e, t, a) {
      var i = t.pendingProps;
      return ba(e, t, i, a), t.child;
    }
    function M1(e, t, a) {
      var i = t.pendingProps.children;
      return ba(e, t, i, a), t.child;
    }
    function N1(e, t, a) {
      {
        t.flags |= Ht;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return ba(e, t, s, a), t.child;
    }
    function bC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Dn, t.flags |= yu);
    }
    function TS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && rl(
          s,
          i,
          // Resolved props
          "prop",
          Vt(a)
        );
      }
      var f;
      {
        var p = Tf(t, a, !0);
        f = wf(t, p);
      }
      var v, y;
      Mf(t, o), Ea(t);
      {
        if (zp.current = t, Zn(!0), v = Ff(e, t, a, i, f, o), y = jf(), t.mode & ln) {
          wn(!0);
          try {
            v = Ff(e, t, a, i, f, o), y = jf();
          } finally {
            wn(!1);
          }
        }
        Zn(!1);
      }
      return Ca(), e !== null && !sl ? (UE(e, t, o), Io(e, t, o)) : ($r() && y && ig(t), t.flags |= ai, ba(e, t, v, o), t.child);
    }
    function TC(e, t, a, i, o) {
      {
        switch (X_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= $e, t.flags |= ar;
            var y = new Error("Simulated error coming from DevTools"), E = Ts(o);
            t.lanes = gt(t.lanes, E);
            var D = SS(t, tc(y, t), E);
            wg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && rl(
            w,
            i,
            // Resolved props
            "prop",
            Vt(a)
          );
        }
      }
      var U;
      Wl(a) ? (U = !0, $h(t)) : U = !1, Mf(t, o);
      var j = t.stateNode, $;
      j === null ? (Nm(e, t), vC(t, a, i), mS(t, a, i, o), $ = !0) : e === null ? $ = R1(t, a, i, o) : $ = x1(e, t, a, i, o);
      var Ee = wS(e, t, a, $, U, o);
      {
        var qe = t.stateNode;
        $ && qe.props !== i && (nc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ct(t) || "a component"), nc = !0);
      }
      return Ee;
    }
    function wS(e, t, a, i, o, s) {
      bC(e, t);
      var f = (t.flags & $e) !== Ye;
      if (!i && !f)
        return o && lE(t, a, !1), Io(e, t, s);
      var p = t.stateNode;
      zp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, sC();
      else {
        Ea(t);
        {
          if (Zn(!0), v = p.render(), t.mode & ln) {
            wn(!0);
            try {
              p.render();
            } finally {
              wn(!1);
            }
          }
          Zn(!1);
        }
        Ca();
      }
      return t.flags |= ai, e !== null && f ? O1(e, t, v, s) : ba(e, t, v, s), t.memoizedState = p.state, o && lE(t, a, !0), t.child;
    }
    function wC(e) {
      var t = e.stateNode;
      t.pendingContext ? aE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && aE(e, t.context, !1), _g(e, t.containerInfo);
    }
    function z1(e, t, a) {
      if (wC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      DE(e, t), lm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (o.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & _r) {
          var E = tc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return _C(e, t, p, a, E);
        } else if (p !== s) {
          var D = tc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return _C(e, t, p, a, D);
        } else {
          HT(t);
          var w = RE(t, null, p, a);
          t.child = w;
          for (var U = w; U; )
            U.flags = U.flags & ~Tn | ta, U = U.sibling;
        }
      } else {
        if (Df(), p === s)
          return Io(e, t, a);
        ba(e, t, p, a);
      }
      return t.child;
    }
    function _C(e, t, a, i, o) {
      return Df(), fg(o), t.flags |= _r, ba(e, t, a, i), t.child;
    }
    function A1(e, t, a) {
      NE(t), e === null && cg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = Yy(i, o);
      return p ? f = null : s !== null && Yy(i, s) && (t.flags |= za), bC(e, t), ba(e, t, f, a), t.child;
    }
    function U1(e, t) {
      return e === null && cg(t), null;
    }
    function H1(e, t, a, i) {
      Nm(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = U_(v), E = ul(v, o), D;
      switch (y) {
        case Y:
          return _S(t, v), t.type = v = Qf(v), D = TS(null, t, v, E, i), D;
        case X:
          return t.type = v = r0(v), D = TC(null, t, v, E, i), D;
        case Fe:
          return t.type = v = a0(v), D = EC(null, t, v, E, i), D;
        case rt: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && rl(
              w,
              E,
              // Resolved for outer only
              "prop",
              Vt(v)
            );
          }
          return D = CC(
            null,
            t,
            v,
            ul(v.type, E),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var U = "";
      throw v !== null && typeof v == "object" && v.$$typeof === pt && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function F1(e, t, a, i, o) {
      Nm(e, t), t.tag = X;
      var s;
      return Wl(a) ? (s = !0, $h(t)) : s = !1, Mf(t, o), vC(t, a, i), mS(t, a, i, o), wS(null, t, a, !0, s, o);
    }
    function j1(e, t, a, i) {
      Nm(e, t);
      var o = t.pendingProps, s;
      {
        var f = Tf(t, a, !1);
        s = wf(t, f);
      }
      Mf(t, i);
      var p, v;
      Ea(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Vt(a) || "Unknown";
          ES[y] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), ES[y] = !0);
        }
        t.mode & ln && il.recordLegacyContextWarning(t, null), Zn(!0), zp.current = t, p = Ff(null, t, a, o, s, i), v = jf(), Zn(!1);
      }
      if (Ca(), t.flags |= ai, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var E = Vt(a) || "Unknown";
        Ap[E] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", E, E, E), Ap[E] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = Vt(a) || "Unknown";
          Ap[D] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), Ap[D] = !0);
        }
        t.tag = X, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Wl(a) ? (w = !0, $h(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Tg(t), pC(t, p), mS(t, a, o, i), wS(null, t, a, !0, w, i);
      } else {
        if (t.tag = Y, t.mode & ln) {
          wn(!0);
          try {
            p = Ff(null, t, a, o, s, i), v = jf();
          } finally {
            wn(!1);
          }
        }
        return $r() && v && ig(t), ba(null, t, p, i), _S(t, a), t.child;
      }
    }
    function _S(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ur();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), xS[o] || (xS[o] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Vt(t) || "Unknown";
          Up[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Up[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Vt(t) || "Unknown";
          RS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), RS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Vt(t) || "Unknown";
          CS[v] || (g("%s: Function components do not support contextType.", v), CS[v] = !0);
        }
      }
    }
    var kS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Yt
    };
    function DS(e) {
      return {
        baseLanes: e,
        cachePool: D1(),
        transitions: null
      };
    }
    function P1(e, t) {
      var a = null;
      return {
        baseLanes: gt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function B1(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return Og(e, Tp);
    }
    function V1(e, t) {
      return ws(e.childLanes, t);
    }
    function kC(e, t, a) {
      var i = t.pendingProps;
      K_(t) && (t.flags |= $e);
      var o = ll.current, s = !1, f = (t.flags & $e) !== Ye;
      if (f || B1(o, e) ? (s = !0, t.flags &= ~$e) : (e === null || e.memoizedState !== null) && (o = l1(o, AE)), o = zf(o), Fu(t, o), e === null) {
        cg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Q1(t, v);
        }
        var y = i.children, E = i.fallback;
        if (s) {
          var D = $1(t, y, E, a), w = t.child;
          return w.memoizedState = DS(a), t.memoizedState = kS, D;
        } else
          return OS(t, y);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var j = U.dehydrated;
          if (j !== null)
            return G1(e, t, f, i, j, U, a);
        }
        if (s) {
          var $ = i.fallback, Ee = i.children, qe = Y1(e, t, Ee, $, a), Ve = t.child, Pt = e.child.memoizedState;
          return Ve.memoizedState = Pt === null ? DS(a) : P1(Pt, a), Ve.childLanes = V1(e, a), t.memoizedState = kS, qe;
        } else {
          var kt = i.children, N = I1(e, t, kt, a);
          return t.memoizedState = null, N;
        }
      }
    }
    function OS(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = LS(o, i);
      return s.return = e, e.child = s, s;
    }
    function $1(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (o & bt) === We && s !== null ? (p = s, p.childLanes = J, p.pendingProps = f, e.mode & qt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Wu(a, o, i, null)) : (p = LS(f, o), v = Wu(a, o, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function LS(e, t, a) {
      return DR(e, t, J, null);
    }
    function DC(e, t) {
      return oc(e, t);
    }
    function I1(e, t, a, i) {
      var o = e.child, s = o.sibling, f = DC(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & bt) === We && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Na) : p.push(s);
      }
      return t.child = f, f;
    }
    function Y1(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & bt) === We && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var E = t.child;
        y = E, y.childLanes = J, y.pendingProps = v, t.mode & qt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = DC(f, v), y.subtreeFlags = f.subtreeFlags & In;
      var D;
      return p !== null ? D = oc(p, i) : (D = Wu(i, s, o, null), D.flags |= Tn), D.return = t, y.return = t, y.sibling = D, t.child = y, D;
    }
    function Mm(e, t, a, i) {
      i !== null && fg(i), Of(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = OS(t, s);
      return f.flags |= Tn, t.memoizedState = null, f;
    }
    function W1(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = LS(f, s), v = Wu(i, s, o, null);
      return v.flags |= Tn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & bt) !== We && Of(t, e.child, null, o), v;
    }
    function Q1(e, t, a) {
      return (e.mode & bt) === We ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : qy(t) ? e.lanes = kr : e.lanes = ia, null;
    }
    function G1(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & _r) {
          t.flags &= ~_r;
          var N = yS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Mm(e, t, f, N);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= $e, null;
          var I = i.children, z = i.fallback, se = W1(e, t, I, z, f), _e = t.child;
          return _e.memoizedState = DS(f), t.memoizedState = kS, se;
        }
      else {
        if (AT(), (t.mode & bt) === We)
          return Mm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (qy(o)) {
          var p, v, y;
          {
            var E = Zb(o);
            p = E.digest, v = E.message, y = E.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = yS(D, p, y);
          return Mm(e, t, f, w);
        }
        var U = la(f, e.childLanes);
        if (sl || U) {
          var j = $m();
          if (j !== null) {
            var $ = jd(j, f);
            if ($ !== Yt && $ !== s.retryLane) {
              s.retryLane = $;
              var Ee = sn;
              $a(e, $), Tr(j, e, $, Ee);
            }
          }
          ZS();
          var qe = yS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Mm(e, t, f, qe);
        } else if (Z0(o)) {
          t.flags |= $e, t.child = e.child;
          var Ve = S_.bind(null, e);
          return Jb(o, Ve), null;
        } else {
          FT(t, o, s.treeContext);
          var Pt = i.children, kt = OS(t, Pt);
          return kt.flags |= ta, kt;
        }
      }
    }
    function OC(e, t, a) {
      e.lanes = gt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = gt(i.lanes, t)), Cg(e.return, t, a);
    }
    function q1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var o = i.memoizedState;
          o !== null && OC(i, a, e);
        } else if (i.tag === _t)
          OC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function X1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && cm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function K1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !bS[e])
        if (bS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Z1(e, t) {
      e !== void 0 && !Lm[e] && (e !== "collapsed" && e !== "hidden" ? (Lm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Lm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function LC(e, t) {
      {
        var a = Rt(e), i = !a && typeof yt(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function J1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Rt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!LC(e[a], a))
              return;
        } else {
          var i = yt(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!LC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function MS(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function MC(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      K1(o), Z1(s, o), J1(f, o), ba(e, t, f, a);
      var p = ll.current, v = Og(p, Tp);
      if (v)
        p = Lg(p, Tp), t.flags |= $e;
      else {
        var y = e !== null && (e.flags & $e) !== Ye;
        y && q1(t, t.child, a), p = zf(p);
      }
      if (Fu(t, p), (t.mode & bt) === We)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var E = X1(t.child), D;
            E === null ? (D = t.child, t.child = null) : (D = E.sibling, E.sibling = null), MS(
              t,
              !1,
              // isBackwards
              D,
              E,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var j = U.alternate;
              if (j !== null && cm(j) === null) {
                t.child = U;
                break;
              }
              var $ = U.sibling;
              U.sibling = w, w = U, U = $;
            }
            MS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            MS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function ew(e, t, a) {
      _g(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : ba(e, t, i, a), t.child;
    }
    var NC = !1;
    function tw(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || NC || (NC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && rl(v, s, "prop", "Context.Provider");
      }
      if (TE(t, o, p), f !== null) {
        var y = f.value;
        if (ae(y, p)) {
          if (f.children === s.children && !Bh())
            return Io(e, t, a);
        } else
          KT(t, o, a);
      }
      var E = s.children;
      return ba(e, t, E, a), t.child;
    }
    var zC = !1;
    function nw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (zC || (zC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mf(t, a);
      var f = ur(i);
      Ea(t);
      var p;
      return zp.current = t, Zn(!0), p = s(f), Zn(!1), Ca(), t.flags |= ai, ba(e, t, p, a), t.child;
    }
    function Hp() {
      sl = !0;
    }
    function Nm(e, t) {
      (t.mode & bt) === We && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tn);
    }
    function Io(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), sC(), qp(t.lanes), la(a, t.childLanes) ? (qT(e, t), t.child) : null;
    }
    function rw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Na) : s.push(e), a.flags |= Tn, a;
      }
    }
    function NS(e, t) {
      var a = e.lanes;
      return !!la(a, t);
    }
    function aw(e, t, a) {
      switch (t.tag) {
        case q:
          wC(t), t.stateNode, Df();
          break;
        case K:
          NE(t);
          break;
        case X: {
          var i = t.type;
          Wl(i) && $h(t);
          break;
        }
        case P:
          _g(t, t.stateNode.containerInfo);
          break;
        case Ue: {
          var o = t.memoizedProps.value, s = t.type._context;
          TE(t, s, o);
          break;
        }
        case je:
          {
            var f = la(a, t.childLanes);
            f && (t.flags |= Ht);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Fu(t, zf(ll.current)), t.flags |= $e, null;
            var y = t.child, E = y.childLanes;
            if (la(a, E))
              return kC(e, t, a);
            Fu(t, zf(ll.current));
            var D = Io(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            Fu(t, zf(ll.current));
          break;
        }
        case _t: {
          var w = (e.flags & $e) !== Ye, U = la(a, t.childLanes);
          if (w) {
            if (U)
              return MC(e, t, a);
            t.flags |= $e;
          }
          var j = t.memoizedState;
          if (j !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), Fu(t, ll.current), U)
            break;
          return null;
        }
        case Pe:
        case xe:
          return t.lanes = J, xC(e, t, a);
      }
      return Io(e, t, a);
    }
    function AC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return rw(e, t, s0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          sl = !0;
        else {
          var s = NS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & $e) === Ye)
            return sl = !1, aw(e, t, a);
          (e.flags & _c) !== Ye ? sl = !0 : sl = !1;
        }
      } else if (sl = !1, $r() && DT(t)) {
        var f = t.index, p = OT();
        sE(t, p, f);
      }
      switch (t.lanes = J, t.tag) {
        case ve:
          return j1(e, t, t.type, a);
        case Dt: {
          var v = t.elementType;
          return H1(e, t, v, a);
        }
        case Y: {
          var y = t.type, E = t.pendingProps, D = t.elementType === y ? E : ul(y, E);
          return TS(e, t, y, D, a);
        }
        case X: {
          var w = t.type, U = t.pendingProps, j = t.elementType === w ? U : ul(w, U);
          return TC(e, t, w, j, a);
        }
        case q:
          return z1(e, t, a);
        case K:
          return A1(e, t, a);
        case ce:
          return U1(e, t);
        case De:
          return kC(e, t, a);
        case P:
          return ew(e, t, a);
        case Fe: {
          var $ = t.type, Ee = t.pendingProps, qe = t.elementType === $ ? Ee : ul($, Ee);
          return EC(e, t, $, qe, a);
        }
        case ie:
          return L1(e, t, a);
        case we:
          return M1(e, t, a);
        case je:
          return N1(e, t, a);
        case Ue:
          return tw(e, t, a);
        case Ct:
          return nw(e, t, a);
        case rt: {
          var Ve = t.type, Pt = t.pendingProps, kt = ul(Ve, Pt);
          if (t.type !== t.elementType) {
            var N = Ve.propTypes;
            N && rl(
              N,
              kt,
              // Resolved for outer only
              "prop",
              Vt(Ve)
            );
          }
          return kt = ul(Ve.type, kt), CC(e, t, Ve, kt, a);
        }
        case Me:
          return RC(e, t, t.type, t.pendingProps, a);
        case Ot: {
          var I = t.type, z = t.pendingProps, se = t.elementType === I ? z : ul(I, z);
          return F1(e, t, I, se, a);
        }
        case _t:
          return MC(e, t, a);
        case St:
          break;
        case Pe:
          return xC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= Ht;
    }
    function UC(e) {
      e.flags |= Dn, e.flags |= yu;
    }
    var HC, zS, FC, jC;
    HC = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === K || o.tag === ce)
          wb(e, o.stateNode);
        else if (o.tag !== P) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, zS = function(e, t) {
    }, FC = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = kg(), v = kb(f, a, s, i, o, p);
        t.updateQueue = v, v && Pf(t);
      }
    }, jC = function(e, t, a, i) {
      a !== i && Pf(t);
    };
    function Fp(e, t) {
      if (!$r())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = J, i = Ye;
      if (t) {
        if ((e.mode & qt) !== We) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = gt(a, gt(y.lanes, y.childLanes)), i |= y.subtreeFlags & In, i |= y.flags & In, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var E = e.child; E !== null; )
            a = gt(a, gt(E.lanes, E.childLanes)), i |= E.subtreeFlags & In, i |= E.flags & In, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & qt) !== We) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = gt(a, gt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = gt(a, gt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function iw(e, t, a) {
      if ($T() && (t.mode & bt) !== We && (t.flags & $e) === Ye)
        return mE(t), Df(), t.flags |= _r | cs | ar, !1;
      var i = Gh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (BT(t), Yr(t), (t.mode & qt) !== We) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & $e) === Ye && (t.memoizedState = null), t.flags |= Ht, Yr(t), (t.mode & qt) !== We) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return yE(), !0;
    }
    function PC(e, t, a) {
      var i = t.pendingProps;
      switch (lg(t), t.tag) {
        case ve:
        case Dt:
        case Me:
        case Y:
        case Fe:
        case ie:
        case we:
        case je:
        case Ct:
        case rt:
          return Yr(t), null;
        case X: {
          var o = t.type;
          return Wl(o) && Vh(t), Yr(t), null;
        }
        case q: {
          var s = t.stateNode;
          if (Nf(t), ng(t), Ng(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Gh(t);
            if (f)
              Pf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _r) !== Ye) && (t.flags |= Jn, yE());
            }
          }
          return zS(e, t), Yr(t), null;
        }
        case K: {
          Dg(t);
          var v = ME(), y = t.type;
          if (e !== null && t.stateNode != null)
            FC(e, t, y, i, v), e.ref !== t.ref && UC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var E = kg(), D = Gh(t);
            if (D)
              jT(t, v, E) && Pf(t);
            else {
              var w = Tb(y, i, v, E, t);
              HC(w, t, !1, !1), t.stateNode = w, _b(w, y, i, v) && Pf(t);
            }
            t.ref !== null && UC(t);
          }
          return Yr(t), null;
        }
        case ce: {
          var U = i;
          if (e && t.stateNode != null) {
            var j = e.memoizedProps;
            jC(e, t, j, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var $ = ME(), Ee = kg(), qe = Gh(t);
            qe ? PT(t) && Pf(t) : t.stateNode = Db(U, $, Ee, t);
          }
          return Yr(t), null;
        }
        case De: {
          Af(t);
          var Ve = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Pt = iw(e, t, Ve);
            if (!Pt)
              return t.flags & ar ? t : null;
          }
          if ((t.flags & $e) !== Ye)
            return t.lanes = a, (t.mode & qt) !== We && aS(t), t;
          var kt = Ve !== null, N = e !== null && e.memoizedState !== null;
          if (kt !== N && kt) {
            var I = t.child;
            if (I.flags |= $n, (t.mode & bt) !== We) {
              var z = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              z || Og(ll.current, AE) ? l_() : ZS();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= Ht), Yr(t), (t.mode & qt) !== We && kt) {
            var _e = t.child;
            _e !== null && (t.treeBaseDuration -= _e.treeBaseDuration);
          }
          return null;
        }
        case P:
          return Nf(t), zS(e, t), e === null && RT(t.stateNode.containerInfo), Yr(t), null;
        case Ue:
          var Re = t.type._context;
          return Eg(Re, t), Yr(t), null;
        case Ot: {
          var ut = t.type;
          return Wl(ut) && Vh(t), Yr(t), null;
        }
        case _t: {
          Af(t);
          var ht = t.memoizedState;
          if (ht === null)
            return Yr(t), null;
          var un = (t.flags & $e) !== Ye, Zt = ht.rendering;
          if (Zt === null)
            if (un)
              Fp(ht, !1);
            else {
              var nr = u_() && (e === null || (e.flags & $e) === Ye);
              if (!nr)
                for (var Jt = t.child; Jt !== null; ) {
                  var Xn = cm(Jt);
                  if (Xn !== null) {
                    un = !0, t.flags |= $e, Fp(ht, !1);
                    var pa = Xn.updateQueue;
                    return pa !== null && (t.updateQueue = pa, t.flags |= Ht), t.subtreeFlags = Ye, XT(t, a), Fu(t, Lg(ll.current, Tp)), t.child;
                  }
                  Jt = Jt.sibling;
                }
              ht.tail !== null && er() > oR() && (t.flags |= $e, un = !0, Fp(ht, !1), t.lanes = Od);
            }
          else {
            if (!un) {
              var Xr = cm(Zt);
              if (Xr !== null) {
                t.flags |= $e, un = !0;
                var fi = Xr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= Ht), Fp(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !Zt.alternate && !$r())
                  return Yr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              er() * 2 - ht.renderingStartTime > oR() && a !== ia && (t.flags |= $e, un = !0, Fp(ht, !1), t.lanes = Od);
            }
            if (ht.isBackwards)
              Zt.sibling = t.child, t.child = Zt;
            else {
              var _a = ht.last;
              _a !== null ? _a.sibling = Zt : t.child = Zt, ht.last = Zt;
            }
          }
          if (ht.tail !== null) {
            var ka = ht.tail;
            ht.rendering = ka, ht.tail = ka.sibling, ht.renderingStartTime = er(), ka.sibling = null;
            var va = ll.current;
            return un ? va = Lg(va, Tp) : va = zf(va), Fu(t, va), ka;
          }
          return Yr(t), null;
        }
        case St:
          break;
        case Pe:
        case xe: {
          KS(t);
          var qo = t.memoizedState, Gf = qo !== null;
          if (e !== null) {
            var ev = e.memoizedState, eo = ev !== null;
            eo !== Gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !pe && (t.flags |= $n);
          }
          return !Gf || (t.mode & bt) === We ? Yr(t) : la(Jl, ia) && (Yr(t), t.subtreeFlags & (Tn | Ht) && (t.flags |= $n)), null;
        }
        case At:
          return null;
        case Lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lw(e, t, a) {
      switch (lg(t), t.tag) {
        case X: {
          var i = t.type;
          Wl(i) && Vh(t);
          var o = t.flags;
          return o & ar ? (t.flags = o & ~ar | $e, (t.mode & qt) !== We && aS(t), t) : null;
        }
        case q: {
          t.stateNode, Nf(t), ng(t), Ng();
          var s = t.flags;
          return (s & ar) !== Ye && (s & $e) === Ye ? (t.flags = s & ~ar | $e, t) : null;
        }
        case K:
          return Dg(t), null;
        case De: {
          Af(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var p = t.flags;
          return p & ar ? (t.flags = p & ~ar | $e, (t.mode & qt) !== We && aS(t), t) : null;
        }
        case _t:
          return Af(t), null;
        case P:
          return Nf(t), null;
        case Ue:
          var v = t.type._context;
          return Eg(v, t), null;
        case Pe:
        case xe:
          return KS(t), null;
        case At:
          return null;
        default:
          return null;
      }
    }
    function BC(e, t, a) {
      switch (lg(t), t.tag) {
        case X: {
          var i = t.type.childContextTypes;
          i != null && Vh(t);
          break;
        }
        case q: {
          t.stateNode, Nf(t), ng(t), Ng();
          break;
        }
        case K: {
          Dg(t);
          break;
        }
        case P:
          Nf(t);
          break;
        case De:
          Af(t);
          break;
        case _t:
          Af(t);
          break;
        case Ue:
          var o = t.type._context;
          Eg(o, t);
          break;
        case Pe:
        case xe:
          KS(t);
          break;
      }
    }
    var VC = null;
    VC = /* @__PURE__ */ new Set();
    var zm = !1, Wr = !1, ow = typeof WeakSet == "function" ? WeakSet : Set, Ae = null, Bf = null, Vf = null;
    function uw(e) {
      kl(null, function() {
        throw e;
      }), ss();
    }
    var sw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & qt)
        try {
          Kl(), t.componentWillUnmount();
        } finally {
          Xl(e);
        }
      else
        t.componentWillUnmount();
    };
    function $C(e, t) {
      try {
        Bu(Sr, e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function AS(e, t, a) {
      try {
        sw(e, a);
      } catch (i) {
        mn(e, t, i);
      }
    }
    function cw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        mn(e, t, i);
      }
    }
    function IC(e, t) {
      try {
        WC(e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function $f(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Be && ft && e.mode & qt)
              try {
                Kl(), i = a(null);
              } finally {
                Xl(e);
              }
            else
              i = a(null);
          } catch (o) {
            mn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          a.current = null;
    }
    function Am(e, t, a) {
      try {
        a();
      } catch (i) {
        mn(e, t, i);
      }
    }
    var YC = !1;
    function fw(e, t) {
      xb(e.containerInfo), Ae = t, dw();
      var a = YC;
      return YC = !1, a;
    }
    function dw() {
      for (; Ae !== null; ) {
        var e = Ae, t = e.child;
        (e.subtreeFlags & Ol) !== Ye && t !== null ? (t.return = e, Ae = t) : pw();
      }
    }
    function pw() {
      for (; Ae !== null; ) {
        var e = Ae;
        nn(e);
        try {
          vw(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        hn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ae = t;
          return;
        }
        Ae = e.return;
      }
    }
    function vw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Jn) !== Ye) {
        switch (nn(e), e.tag) {
          case Y:
          case Fe:
          case Me:
            break;
          case X: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !nc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), o);
              {
                var p = VC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ct(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case q: {
            {
              var v = e.stateNode;
              Gb(v.containerInfo);
            }
            break;
          }
          case K:
          case ce:
          case P:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        hn();
      }
    }
    function cl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ir) !== Ia ? Ki(t) : (e & Sr) !== Ia && ds(t), (e & Ql) !== Ia && Kp(!0), Am(t, a, p), (e & Ql) !== Ia && Kp(!1), (e & Ir) !== Ia ? zl() : (e & Sr) !== Ia && kd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Bu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Ir) !== Ia ? _d(t) : (e & Sr) !== Ia && Nc(t);
            var f = s.create;
            (e & Ql) !== Ia && Kp(!0), s.destroy = f(), (e & Ql) !== Ia && Kp(!1), (e & Ir) !== Ia ? Pv() : (e & Sr) !== Ia && Bv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Sr) !== Ye ? v = "useLayoutEffect" : (s.tag & Ql) !== Ye ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function hw(e, t) {
      if ((t.flags & Ht) !== Ye)
        switch (t.tag) {
          case je: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = oC(), p = t.alternate === null ? "mount" : "update";
            lC() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case q:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case je:
                  var E = v.stateNode;
                  E.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function mw(e, t, a, i) {
      if ((a.flags & Ml) !== Ye)
        switch (a.tag) {
          case Y:
          case Fe:
          case Me: {
            if (!Wr)
              if (a.mode & qt)
                try {
                  Kl(), Bu(Sr | gr, a);
                } finally {
                  Xl(a);
                }
              else
                Bu(Sr | gr, a);
            break;
          }
          case X: {
            var o = a.stateNode;
            if (a.flags & Ht && !Wr)
              if (t === null)
                if (a.type === a.elementType && !nc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & qt)
                  try {
                    Kl(), o.componentDidMount();
                  } finally {
                    Xl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !nc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & qt)
                  try {
                    Kl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Xl(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !nc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), LE(a, p, o));
            break;
          }
          case q: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case K:
                    y = a.child.stateNode;
                    break;
                  case X:
                    y = a.child.stateNode;
                    break;
                }
              LE(a, v, y);
            }
            break;
          }
          case K: {
            var E = a.stateNode;
            if (t === null && a.flags & Ht) {
              var D = a.type, w = a.memoizedProps;
              zb(E, D, w);
            }
            break;
          }
          case ce:
            break;
          case P:
            break;
          case je: {
            {
              var U = a.memoizedProps, j = U.onCommit, $ = U.onRender, Ee = a.stateNode.effectDuration, qe = oC(), Ve = t === null ? "mount" : "update";
              lC() && (Ve = "nested-update"), typeof $ == "function" && $(a.memoizedProps.id, Ve, a.actualDuration, a.treeBaseDuration, a.actualStartTime, qe);
              {
                typeof j == "function" && j(a.memoizedProps.id, Ve, Ee, qe), p_(a);
                var Pt = a.return;
                e: for (; Pt !== null; ) {
                  switch (Pt.tag) {
                    case q:
                      var kt = Pt.stateNode;
                      kt.effectDuration += Ee;
                      break e;
                    case je:
                      var N = Pt.stateNode;
                      N.effectDuration += Ee;
                      break e;
                  }
                  Pt = Pt.return;
                }
              }
            }
            break;
          }
          case De: {
            bw(e, a);
            break;
          }
          case _t:
          case Ot:
          case St:
          case Pe:
          case xe:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & Dn && WC(a);
    }
    function yw(e) {
      switch (e.tag) {
        case Y:
        case Fe:
        case Me: {
          if (e.mode & qt)
            try {
              Kl(), $C(e, e.return);
            } finally {
              Xl(e);
            }
          else
            $C(e, e.return);
          break;
        }
        case X: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && cw(e, e.return, t), IC(e, e.return);
          break;
        }
        case K: {
          IC(e, e.return);
          break;
        }
      }
    }
    function gw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === K) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Ib(o) : Wb(i.stateNode, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
          }
        } else if (i.tag === ce) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Yb(s) : Qb(s, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
        } else if (!((i.tag === Pe || i.tag === xe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function WC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case K:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & qt)
            try {
              Kl(), o = t(i);
            } finally {
              Xl(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ct(e)), t.current = i;
      }
    }
    function Sw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function QC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, QC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === K) {
          var a = e.stateNode;
          a !== null && TT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Ew(e) {
      for (var t = e.return; t !== null; ) {
        if (GC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function GC(e) {
      return e.tag === K || e.tag === q || e.tag === P;
    }
    function qC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || GC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== K && t.tag !== ce && t.tag !== Wt; ) {
          if (t.flags & Tn || t.child === null || t.tag === P)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Tn))
          return t.stateNode;
      }
    }
    function Cw(e) {
      var t = Ew(e);
      switch (t.tag) {
        case K: {
          var a = t.stateNode;
          t.flags & za && (K0(a), t.flags &= ~za);
          var i = qC(e);
          HS(e, i, a);
          break;
        }
        case q:
        case P: {
          var o = t.stateNode.containerInfo, s = qC(e);
          US(e, s, o);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function US(e, t, a) {
      var i = e.tag, o = i === K || i === ce;
      if (o) {
        var s = e.stateNode;
        t ? Pb(a, s, t) : Fb(a, s);
      } else if (i !== P) {
        var f = e.child;
        if (f !== null) {
          US(f, t, a);
          for (var p = f.sibling; p !== null; )
            US(p, t, a), p = p.sibling;
        }
      }
    }
    function HS(e, t, a) {
      var i = e.tag, o = i === K || i === ce;
      if (o) {
        var s = e.stateNode;
        t ? jb(a, s, t) : Hb(a, s);
      } else if (i !== P) {
        var f = e.child;
        if (f !== null) {
          HS(f, t, a);
          for (var p = f.sibling; p !== null; )
            HS(p, t, a), p = p.sibling;
        }
      }
    }
    var Qr = null, fl = !1;
    function Rw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case K: {
              Qr = i.stateNode, fl = !1;
              break e;
            }
            case q: {
              Qr = i.stateNode.containerInfo, fl = !0;
              break e;
            }
            case P: {
              Qr = i.stateNode.containerInfo, fl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        XC(e, t, a), Qr = null, fl = !1;
      }
      Sw(a);
    }
    function Vu(e, t, a) {
      for (var i = a.child; i !== null; )
        XC(e, t, i), i = i.sibling;
    }
    function XC(e, t, a) {
      switch (bd(a), a.tag) {
        case K:
          Wr || $f(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ce: {
          {
            var i = Qr, o = fl;
            Qr = null, Vu(e, t, a), Qr = i, fl = o, Qr !== null && (fl ? Vb(Qr, a.stateNode) : Bb(Qr, a.stateNode));
          }
          return;
        }
        case Wt: {
          Qr !== null && (fl ? $b(Qr, a.stateNode) : Gy(Qr, a.stateNode));
          return;
        }
        case P: {
          {
            var s = Qr, f = fl;
            Qr = a.stateNode.containerInfo, fl = !0, Vu(e, t, a), Qr = s, fl = f;
          }
          return;
        }
        case Y:
        case Fe:
        case rt:
        case Me: {
          if (!Wr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, E = y;
                do {
                  var D = E, w = D.destroy, U = D.tag;
                  w !== void 0 && ((U & Ql) !== Ia ? Am(a, t, w) : (U & Sr) !== Ia && (ds(a), a.mode & qt ? (Kl(), Am(a, t, w), Xl(a)) : Am(a, t, w), kd())), E = E.next;
                } while (E !== y);
              }
            }
          }
          Vu(e, t, a);
          return;
        }
        case X: {
          if (!Wr) {
            $f(a, t);
            var j = a.stateNode;
            typeof j.componentWillUnmount == "function" && AS(a, t, j);
          }
          Vu(e, t, a);
          return;
        }
        case St: {
          Vu(e, t, a);
          return;
        }
        case Pe: {
          if (
            // TODO: Remove this dead flag
            a.mode & bt
          ) {
            var $ = Wr;
            Wr = $ || a.memoizedState !== null, Vu(e, t, a), Wr = $;
          } else
            Vu(e, t, a);
          break;
        }
        default: {
          Vu(e, t, a);
          return;
        }
      }
    }
    function xw(e) {
      e.memoizedState;
    }
    function bw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && uT(s);
          }
        }
      }
    }
    function KC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ow()), t.forEach(function(i) {
          var o = E_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), aa)
              if (Bf !== null && Vf !== null)
                Xp(Vf, Bf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function Tw(e, t, a) {
      Bf = a, Vf = e, nn(t), ZC(t, e), nn(t), Bf = null, Vf = null;
    }
    function dl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            Rw(e, t, s);
          } catch (v) {
            mn(s, t, v);
          }
        }
      var f = Cl();
      if (t.subtreeFlags & Ll)
        for (var p = t.child; p !== null; )
          nn(p), ZC(p, e), p = p.sibling;
      nn(f);
    }
    function ZC(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case Y:
        case Fe:
        case rt:
        case Me: {
          if (dl(t, e), Zl(e), o & Ht) {
            try {
              cl(Ql | gr, e, e.return), Bu(Ql | gr, e);
            } catch (ut) {
              mn(e, e.return, ut);
            }
            if (e.mode & qt) {
              try {
                Kl(), cl(Sr | gr, e, e.return);
              } catch (ut) {
                mn(e, e.return, ut);
              }
              Xl(e);
            } else
              try {
                cl(Sr | gr, e, e.return);
              } catch (ut) {
                mn(e, e.return, ut);
              }
          }
          return;
        }
        case X: {
          dl(t, e), Zl(e), o & Dn && i !== null && $f(i, i.return);
          return;
        }
        case K: {
          dl(t, e), Zl(e), o & Dn && i !== null && $f(i, i.return);
          {
            if (e.flags & za) {
              var s = e.stateNode;
              try {
                K0(s);
              } catch (ut) {
                mn(e, e.return, ut);
              }
            }
            if (o & Ht) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, E = e.updateQueue;
                if (e.updateQueue = null, E !== null)
                  try {
                    Ab(f, E, y, v, p, e);
                  } catch (ut) {
                    mn(e, e.return, ut);
                  }
              }
            }
          }
          return;
        }
        case ce: {
          if (dl(t, e), Zl(e), o & Ht) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, w = e.memoizedProps, U = i !== null ? i.memoizedProps : w;
            try {
              Ub(D, U, w);
            } catch (ut) {
              mn(e, e.return, ut);
            }
          }
          return;
        }
        case q: {
          if (dl(t, e), Zl(e), o & Ht && i !== null) {
            var j = i.memoizedState;
            if (j.isDehydrated)
              try {
                oT(t.containerInfo);
              } catch (ut) {
                mn(e, e.return, ut);
              }
          }
          return;
        }
        case P: {
          dl(t, e), Zl(e);
          return;
        }
        case De: {
          dl(t, e), Zl(e);
          var $ = e.child;
          if ($.flags & $n) {
            var Ee = $.stateNode, qe = $.memoizedState, Ve = qe !== null;
            if (Ee.isHidden = Ve, Ve) {
              var Pt = $.alternate !== null && $.alternate.memoizedState !== null;
              Pt || i_();
            }
          }
          if (o & Ht) {
            try {
              xw(e);
            } catch (ut) {
              mn(e, e.return, ut);
            }
            KC(e);
          }
          return;
        }
        case Pe: {
          var kt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & bt
          ) {
            var N = Wr;
            Wr = N || kt, dl(t, e), Wr = N;
          } else
            dl(t, e);
          if (Zl(e), o & $n) {
            var I = e.stateNode, z = e.memoizedState, se = z !== null, _e = e;
            if (I.isHidden = se, se && !kt && (_e.mode & bt) !== We) {
              Ae = _e;
              for (var Re = _e.child; Re !== null; )
                Ae = Re, _w(Re), Re = Re.sibling;
            }
            gw(_e, se);
          }
          return;
        }
        case _t: {
          dl(t, e), Zl(e), o & Ht && KC(e);
          return;
        }
        case St:
          return;
        default: {
          dl(t, e), Zl(e);
          return;
        }
      }
    }
    function Zl(e) {
      var t = e.flags;
      if (t & Tn) {
        try {
          Cw(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        e.flags &= ~Tn;
      }
      t & ta && (e.flags &= ~ta);
    }
    function ww(e, t, a) {
      Bf = a, Vf = t, Ae = e, JC(e, t, a), Bf = null, Vf = null;
    }
    function JC(e, t, a) {
      for (var i = (e.mode & bt) !== We; Ae !== null; ) {
        var o = Ae, s = o.child;
        if (o.tag === Pe && i) {
          var f = o.memoizedState !== null, p = f || zm;
          if (p) {
            FS(e, t, a);
            continue;
          } else {
            var v = o.alternate, y = v !== null && v.memoizedState !== null, E = y || Wr, D = zm, w = Wr;
            zm = p, Wr = E, Wr && !w && (Ae = o, kw(o));
            for (var U = s; U !== null; )
              Ae = U, JC(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            Ae = o, zm = D, Wr = w, FS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & Ml) !== Ye && s !== null ? (s.return = o, Ae = s) : FS(e, t, a);
      }
    }
    function FS(e, t, a) {
      for (; Ae !== null; ) {
        var i = Ae;
        if ((i.flags & Ml) !== Ye) {
          var o = i.alternate;
          nn(i);
          try {
            mw(t, o, i, a);
          } catch (f) {
            mn(i, i.return, f);
          }
          hn();
        }
        if (i === e) {
          Ae = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ae = s;
          return;
        }
        Ae = i.return;
      }
    }
    function _w(e) {
      for (; Ae !== null; ) {
        var t = Ae, a = t.child;
        switch (t.tag) {
          case Y:
          case Fe:
          case rt:
          case Me: {
            if (t.mode & qt)
              try {
                Kl(), cl(Sr, t, t.return);
              } finally {
                Xl(t);
              }
            else
              cl(Sr, t, t.return);
            break;
          }
          case X: {
            $f(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && AS(t, t.return, i);
            break;
          }
          case K: {
            $f(t, t.return);
            break;
          }
          case Pe: {
            var o = t.memoizedState !== null;
            if (o) {
              eR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ae = a) : eR(e);
      }
    }
    function eR(e) {
      for (; Ae !== null; ) {
        var t = Ae;
        if (t === e) {
          Ae = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ae = a;
          return;
        }
        Ae = t.return;
      }
    }
    function kw(e) {
      for (; Ae !== null; ) {
        var t = Ae, a = t.child;
        if (t.tag === Pe) {
          var i = t.memoizedState !== null;
          if (i) {
            tR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ae = a) : tR(e);
      }
    }
    function tR(e) {
      for (; Ae !== null; ) {
        var t = Ae;
        nn(t);
        try {
          yw(t);
        } catch (i) {
          mn(t, t.return, i);
        }
        if (hn(), t === e) {
          Ae = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ae = a;
          return;
        }
        Ae = t.return;
      }
    }
    function Dw(e, t, a, i) {
      Ae = t, Ow(t, e, a, i);
    }
    function Ow(e, t, a, i) {
      for (; Ae !== null; ) {
        var o = Ae, s = o.child;
        (o.subtreeFlags & qi) !== Ye && s !== null ? (s.return = o, Ae = s) : Lw(e, t, a, i);
      }
    }
    function Lw(e, t, a, i) {
      for (; Ae !== null; ) {
        var o = Ae;
        if ((o.flags & ea) !== Ye) {
          nn(o);
          try {
            Mw(t, o, a, i);
          } catch (f) {
            mn(o, o.return, f);
          }
          hn();
        }
        if (o === e) {
          Ae = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Ae = s;
          return;
        }
        Ae = o.return;
      }
    }
    function Mw(e, t, a, i) {
      switch (t.tag) {
        case Y:
        case Fe:
        case Me: {
          if (t.mode & qt) {
            rS();
            try {
              Bu(Ir | gr, t);
            } finally {
              nS(t);
            }
          } else
            Bu(Ir | gr, t);
          break;
        }
      }
    }
    function Nw(e) {
      Ae = e, zw();
    }
    function zw() {
      for (; Ae !== null; ) {
        var e = Ae, t = e.child;
        if ((Ae.flags & Na) !== Ye) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Ae = o, Hw(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ae = e;
          }
        }
        (e.subtreeFlags & qi) !== Ye && t !== null ? (t.return = e, Ae = t) : Aw();
      }
    }
    function Aw() {
      for (; Ae !== null; ) {
        var e = Ae;
        (e.flags & ea) !== Ye && (nn(e), Uw(e), hn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ae = t;
          return;
        }
        Ae = e.return;
      }
    }
    function Uw(e) {
      switch (e.tag) {
        case Y:
        case Fe:
        case Me: {
          e.mode & qt ? (rS(), cl(Ir | gr, e, e.return), nS(e)) : cl(Ir | gr, e, e.return);
          break;
        }
      }
    }
    function Hw(e, t) {
      for (; Ae !== null; ) {
        var a = Ae;
        nn(a), jw(a, t), hn();
        var i = a.child;
        i !== null ? (i.return = a, Ae = i) : Fw(e);
      }
    }
    function Fw(e) {
      for (; Ae !== null; ) {
        var t = Ae, a = t.sibling, i = t.return;
        if (QC(t), t === e) {
          Ae = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ae = a;
          return;
        }
        Ae = i;
      }
    }
    function jw(e, t) {
      switch (e.tag) {
        case Y:
        case Fe:
        case Me: {
          e.mode & qt ? (rS(), cl(Ir, e, t), nS(e)) : cl(Ir, e, t);
          break;
        }
      }
    }
    function Pw(e) {
      switch (e.tag) {
        case Y:
        case Fe:
        case Me: {
          try {
            Bu(Sr | gr, e);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case X: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Bw(e) {
      switch (e.tag) {
        case Y:
        case Fe:
        case Me: {
          try {
            Bu(Ir | gr, e);
          } catch (t) {
            mn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Vw(e) {
      switch (e.tag) {
        case Y:
        case Fe:
        case Me: {
          try {
            cl(Sr | gr, e, e.return);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case X: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && AS(e, e.return, t);
          break;
        }
      }
    }
    function $w(e) {
      switch (e.tag) {
        case Y:
        case Fe:
        case Me:
          try {
            cl(Ir | gr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var jp = Symbol.for;
      jp("selector.component"), jp("selector.has_pseudo_class"), jp("selector.role"), jp("selector.test_id"), jp("selector.text");
    }
    var Iw = [];
    function Yw() {
      Iw.forEach(function(e) {
        return e();
      });
    }
    var Ww = b.ReactCurrentActQueue;
    function Qw(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function nR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Ww.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Gw = Math.ceil, jS = b.ReactCurrentDispatcher, PS = b.ReactCurrentOwner, Gr = b.ReactCurrentBatchConfig, pl = b.ReactCurrentActQueue, Rr = (
      /*             */
      0
    ), rR = (
      /*               */
      1
    ), qr = (
      /*                */
      2
    ), Fi = (
      /*                */
      4
    ), Yo = 0, Pp = 1, rc = 2, Um = 3, Bp = 4, aR = 5, BS = 6, jt = Rr, Ta = null, Hn = null, xr = J, Jl = J, VS = Mu(J), br = Yo, Vp = null, Hm = J, $p = J, Fm = J, Ip = null, Ya = null, $S = 0, iR = 500, lR = 1 / 0, qw = 500, Wo = null;
    function Yp() {
      lR = er() + qw;
    }
    function oR() {
      return lR;
    }
    var jm = !1, IS = null, If = null, ac = !1, $u = null, Wp = J, YS = [], WS = null, Xw = 50, Qp = 0, QS = null, GS = !1, Pm = !1, Kw = 50, Yf = 0, Bm = null, Gp = sn, Vm = J, uR = !1;
    function $m() {
      return Ta;
    }
    function wa() {
      return (jt & (qr | Fi)) !== Rr ? er() : (Gp !== sn || (Gp = er()), Gp);
    }
    function Iu(e) {
      var t = e.mode;
      if ((t & bt) === We)
        return lt;
      if ((jt & qr) !== Rr && xr !== J)
        return Ts(xr);
      var a = WT() !== YT;
      if (a) {
        if (Gr.transition !== null) {
          var i = Gr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Vm === Yt && (Vm = Ud()), Vm;
      }
      var o = Pa();
      if (o !== Yt)
        return o;
      var s = Ob();
      return s;
    }
    function Zw(e) {
      var t = e.mode;
      return (t & bt) === We ? lt : Qv();
    }
    function Tr(e, t, a, i) {
      R_(), uR && g("useInsertionEffect must not schedule updates."), GS && (Pm = !0), Cu(e, a, i), (jt & qr) !== J && e === Ta ? T_(t) : (aa && ks(e, t, a), w_(t), e === Ta && ((jt & qr) === Rr && ($p = gt($p, a)), br === Bp && Yu(e, xr)), Wa(e, i), a === lt && jt === Rr && (t.mode & bt) === We && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !pl.isBatchingLegacy && (Yp(), uE()));
    }
    function Jw(e, t, a) {
      var i = e.current;
      i.lanes = t, Cu(e, t, a), Wa(e, a);
    }
    function e_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (jt & qr) !== Rr
      );
    }
    function Wa(e, t) {
      var a = e.callbackNode;
      Jc(e, t);
      var i = Zc(e, e === Ta ? xr : J);
      if (i === J) {
        a !== null && bR(a), e.callbackNode = null, e.callbackPriority = Yt;
        return;
      }
      var o = Hl(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(pl.current !== null && a !== t0)) {
        a == null && s !== lt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && bR(a);
      var f;
      if (o === lt)
        e.tag === Nu ? (pl.isBatchingLegacy !== null && (pl.didScheduleLegacyUpdate = !0), kT(fR.bind(null, e))) : oE(fR.bind(null, e)), pl.current !== null ? pl.current.push(zu) : Mb(function() {
          (jt & (qr | Fi)) === Rr && zu();
        }), f = null;
      else {
        var p;
        switch (eh(i)) {
          case Fr:
            p = fs;
            break;
          case ki:
            p = Nl;
            break;
          case Fa:
            p = Xi;
            break;
          case ja:
            p = So;
            break;
          default:
            p = Xi;
            break;
        }
        f = n0(p, sR.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function sR(e, t) {
      if (g1(), Gp = sn, Vm = J, (jt & (qr | Fi)) !== Rr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Go();
      if (i && e.callbackNode !== a)
        return null;
      var o = Zc(e, e === Ta ? xr : J);
      if (o === J)
        return null;
      var s = !tf(e, o) && !Wv(e, o) && !t, f = s ? c_(e, o) : Ym(e, o);
      if (f !== Yo) {
        if (f === rc) {
          var p = ef(e);
          p !== J && (o = p, f = qS(e, p));
        }
        if (f === Pp) {
          var v = Vp;
          throw ic(e, J), Yu(e, o), Wa(e, er()), v;
        }
        if (f === BS)
          Yu(e, o);
        else {
          var y = !tf(e, o), E = e.current.alternate;
          if (y && !n_(E)) {
            if (f = Ym(e, o), f === rc) {
              var D = ef(e);
              D !== J && (o = D, f = qS(e, D));
            }
            if (f === Pp) {
              var w = Vp;
              throw ic(e, J), Yu(e, o), Wa(e, er()), w;
            }
          }
          e.finishedWork = E, e.finishedLanes = o, t_(e, f, o);
        }
      }
      return Wa(e, er()), e.callbackNode === a ? sR.bind(null, e) : null;
    }
    function qS(e, t) {
      var a = Ip;
      if (af(e)) {
        var i = ic(e, t);
        i.flags |= _r, CT(e.containerInfo);
      }
      var o = Ym(e, t);
      if (o !== rc) {
        var s = Ya;
        Ya = a, s !== null && cR(s);
      }
      return o;
    }
    function cR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function t_(e, t, a) {
      switch (t) {
        case Yo:
        case Pp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case rc: {
          lc(e, Ya, Wo);
          break;
        }
        case Um: {
          if (Yu(e, a), Oo(a) && // do not delay if we're inside an act() scope
          !TR()) {
            var i = $S + iR - er();
            if (i > 10) {
              var o = Zc(e, J);
              if (o !== J)
                break;
              var s = e.suspendedLanes;
              if (!Lo(s, a)) {
                wa(), nf(e, s);
                break;
              }
              e.timeoutHandle = Wy(lc.bind(null, e, Ya, Wo), i);
              break;
            }
          }
          lc(e, Ya, Wo);
          break;
        }
        case Bp: {
          if (Yu(e, a), zd(a))
            break;
          if (!TR()) {
            var f = li(e, a), p = f, v = er() - p, y = C_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Wy(lc.bind(null, e, Ya, Wo), y);
              break;
            }
          }
          lc(e, Ya, Wo);
          break;
        }
        case aR: {
          lc(e, Ya, Wo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function n_(e) {
      for (var t = e; ; ) {
        if (t.flags & mu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!ae(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & mu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yu(e, t) {
      t = ws(t, Fm), t = ws(t, $p), Xv(e, t);
    }
    function fR(e) {
      if (S1(), (jt & (qr | Fi)) !== Rr)
        throw new Error("Should not already be working.");
      Go();
      var t = Zc(e, J);
      if (!la(t, lt))
        return Wa(e, er()), null;
      var a = Ym(e, t);
      if (e.tag !== Nu && a === rc) {
        var i = ef(e);
        i !== J && (t = i, a = qS(e, i));
      }
      if (a === Pp) {
        var o = Vp;
        throw ic(e, J), Yu(e, t), Wa(e, er()), o;
      }
      if (a === BS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, lc(e, Ya, Wo), Wa(e, er()), null;
    }
    function r_(e, t) {
      t !== J && (rf(e, gt(t, lt)), Wa(e, er()), (jt & (qr | Fi)) === Rr && (Yp(), zu()));
    }
    function XS(e, t) {
      var a = jt;
      jt |= rR;
      try {
        return e(t);
      } finally {
        jt = a, jt === Rr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !pl.isBatchingLegacy && (Yp(), uE());
      }
    }
    function a_(e, t, a, i, o) {
      var s = Pa(), f = Gr.transition;
      try {
        return Gr.transition = null, Qn(Fr), e(t, a, i, o);
      } finally {
        Qn(s), Gr.transition = f, jt === Rr && Yp();
      }
    }
    function Qo(e) {
      $u !== null && $u.tag === Nu && (jt & (qr | Fi)) === Rr && Go();
      var t = jt;
      jt |= rR;
      var a = Gr.transition, i = Pa();
      try {
        return Gr.transition = null, Qn(Fr), e ? e() : void 0;
      } finally {
        Qn(i), Gr.transition = a, jt = t, (jt & (qr | Fi)) === Rr && zu();
      }
    }
    function dR() {
      return (jt & (qr | Fi)) !== Rr;
    }
    function Im(e, t) {
      fa(VS, Jl, e), Jl = gt(Jl, t);
    }
    function KS(e) {
      Jl = VS.current, ca(VS, e);
    }
    function ic(e, t) {
      e.finishedWork = null, e.finishedLanes = J;
      var a = e.timeoutHandle;
      if (a !== Qy && (e.timeoutHandle = Qy, Lb(a)), Hn !== null)
        for (var i = Hn.return; i !== null; ) {
          var o = i.alternate;
          BC(o, i), i = i.return;
        }
      Ta = e;
      var s = oc(e.current, null);
      return Hn = s, xr = Jl = t, br = Yo, Vp = null, Hm = J, $p = J, Fm = J, Ip = null, Ya = null, JT(), il.discardPendingWarnings(), s;
    }
    function pR(e, t) {
      do {
        var a = Hn;
        try {
          if (em(), HE(), hn(), PS.current = null, a === null || a.return === null) {
            br = Pp, Vp = t, Hn = null;
            return;
          }
          if (Be && a.mode & qt && Dm(a, !0), Xe)
            if (Ca(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              _i(a, i, xr);
            } else
              ps(a, t, xr);
          k1(e, a.return, a, t, xr), yR(a);
        } catch (o) {
          t = o, Hn === a && a !== null ? (a = a.return, Hn = a) : a = Hn;
          continue;
        }
        return;
      } while (!0);
    }
    function vR() {
      var e = jS.current;
      return jS.current = bm, e === null ? bm : e;
    }
    function hR(e) {
      jS.current = e;
    }
    function i_() {
      $S = er();
    }
    function qp(e) {
      Hm = gt(e, Hm);
    }
    function l_() {
      br === Yo && (br = Um);
    }
    function ZS() {
      (br === Yo || br === Um || br === rc) && (br = Bp), Ta !== null && (bs(Hm) || bs($p)) && Yu(Ta, xr);
    }
    function o_(e) {
      br !== Bp && (br = rc), Ip === null ? Ip = [e] : Ip.push(e);
    }
    function u_() {
      return br === Yo;
    }
    function Ym(e, t) {
      var a = jt;
      jt |= qr;
      var i = vR();
      if (Ta !== e || xr !== t) {
        if (aa) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Xp(e, xr), o.clear()), Kv(e, t);
        }
        Wo = Pd(), ic(e, t);
      }
      xo(t);
      do
        try {
          s_();
          break;
        } catch (s) {
          pR(e, s);
        }
      while (!0);
      if (em(), jt = a, hR(i), Hn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return zc(), Ta = null, xr = J, br;
    }
    function s_() {
      for (; Hn !== null; )
        mR(Hn);
    }
    function c_(e, t) {
      var a = jt;
      jt |= qr;
      var i = vR();
      if (Ta !== e || xr !== t) {
        if (aa) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Xp(e, xr), o.clear()), Kv(e, t);
        }
        Wo = Pd(), Yp(), ic(e, t);
      }
      xo(t);
      do
        try {
          f_();
          break;
        } catch (s) {
          pR(e, s);
        }
      while (!0);
      return em(), hR(i), jt = a, Hn !== null ? (Vv(), Yo) : (zc(), Ta = null, xr = J, br);
    }
    function f_() {
      for (; Hn !== null && !Sd(); )
        mR(Hn);
    }
    function mR(e) {
      var t = e.alternate;
      nn(e);
      var a;
      (e.mode & qt) !== We ? (tS(e), a = JS(t, e, Jl), Dm(e, !0)) : a = JS(t, e, Jl), hn(), e.memoizedProps = e.pendingProps, a === null ? yR(e) : Hn = a, PS.current = null;
    }
    function yR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & cs) === Ye) {
          nn(t);
          var o = void 0;
          if ((t.mode & qt) === We ? o = PC(a, t, Jl) : (tS(t), o = PC(a, t, Jl), Dm(t, !1)), hn(), o !== null) {
            Hn = o;
            return;
          }
        } else {
          var s = lw(a, t);
          if (s !== null) {
            s.flags &= Uv, Hn = s;
            return;
          }
          if ((t.mode & qt) !== We) {
            Dm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= cs, i.subtreeFlags = Ye, i.deletions = null;
          else {
            br = BS, Hn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Hn = v;
          return;
        }
        t = i, Hn = t;
      } while (t !== null);
      br === Yo && (br = aR);
    }
    function lc(e, t, a) {
      var i = Pa(), o = Gr.transition;
      try {
        Gr.transition = null, Qn(Fr), d_(e, t, a, i);
      } finally {
        Gr.transition = o, Qn(i);
      }
      return null;
    }
    function d_(e, t, a, i) {
      do
        Go();
      while ($u !== null);
      if (x_(), (jt & (qr | Fi)) !== Rr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Td(s), o === null)
        return wd(), null;
      if (s === J && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = J, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Yt;
      var f = gt(o.lanes, o.childLanes);
      Fd(e, f), e === Ta && (Ta = null, Hn = null, xr = J), ((o.subtreeFlags & qi) !== Ye || (o.flags & qi) !== Ye) && (ac || (ac = !0, WS = a, n0(Xi, function() {
        return Go(), null;
      })));
      var p = (o.subtreeFlags & (Ol | Ll | Ml | qi)) !== Ye, v = (o.flags & (Ol | Ll | Ml | qi)) !== Ye;
      if (p || v) {
        var y = Gr.transition;
        Gr.transition = null;
        var E = Pa();
        Qn(Fr);
        var D = jt;
        jt |= Fi, PS.current = null, fw(e, o), uC(), Tw(e, o, s), bb(e.containerInfo), e.current = o, vs(s), ww(o, e, s), hs(), Ed(), jt = D, Qn(E), Gr.transition = y;
      } else
        e.current = o, uC();
      var w = ac;
      if (ac ? (ac = !1, $u = e, Wp = s) : (Yf = 0, Bm = null), f = e.pendingLanes, f === J && (If = null), w || CR(e.current, !1), Rd(o.stateNode, i), aa && e.memoizedUpdaters.clear(), Yw(), Wa(e, er()), t !== null)
        for (var U = e.onRecoverableError, j = 0; j < t.length; j++) {
          var $ = t[j], Ee = $.stack, qe = $.digest;
          U($.value, {
            componentStack: Ee,
            digest: qe
          });
        }
      if (jm) {
        jm = !1;
        var Ve = IS;
        throw IS = null, Ve;
      }
      return la(Wp, lt) && e.tag !== Nu && Go(), f = e.pendingLanes, la(f, lt) ? (y1(), e === QS ? Qp++ : (Qp = 0, QS = e)) : Qp = 0, zu(), wd(), null;
    }
    function Go() {
      if ($u !== null) {
        var e = eh(Wp), t = Os(Fa, e), a = Gr.transition, i = Pa();
        try {
          return Gr.transition = null, Qn(t), v_();
        } finally {
          Qn(i), Gr.transition = a;
        }
      }
      return !1;
    }
    function p_(e) {
      YS.push(e), ac || (ac = !0, n0(Xi, function() {
        return Go(), null;
      }));
    }
    function v_() {
      if ($u === null)
        return !1;
      var e = WS;
      WS = null;
      var t = $u, a = Wp;
      if ($u = null, Wp = J, (jt & (qr | Fi)) !== Rr)
        throw new Error("Cannot flush passive effects while already rendering.");
      GS = !0, Pm = !1, Ro(a);
      var i = jt;
      jt |= Fi, Nw(t.current), Dw(t, t.current, a, e);
      {
        var o = YS;
        YS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          hw(t, f);
        }
      }
      Dd(), CR(t.current, !0), jt = i, zu(), Pm ? t === Bm ? Yf++ : (Yf = 0, Bm = t) : Yf = 0, GS = !1, Pm = !1, xd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function gR(e) {
      return If !== null && If.has(e);
    }
    function h_(e) {
      If === null ? If = /* @__PURE__ */ new Set([e]) : If.add(e);
    }
    function m_(e) {
      jm || (jm = !0, IS = e);
    }
    var y_ = m_;
    function SR(e, t, a) {
      var i = tc(a, t), o = mC(e, i, lt), s = Uu(e, o, lt), f = wa();
      s !== null && (Cu(s, lt, f), Wa(s, f));
    }
    function mn(e, t, a) {
      if (uw(a), Kp(!1), e.tag === q) {
        SR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === q) {
          SR(i, e, a);
          return;
        } else if (i.tag === X) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !gR(s)) {
            var f = tc(a, e), p = SS(i, f, lt), v = Uu(i, p, lt), y = wa();
            v !== null && (Cu(v, lt, y), Wa(v, y));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function g_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = wa();
      nf(e, a), __(e), Ta === e && Lo(xr, a) && (br === Bp || br === Um && Oo(xr) && er() - $S < iR ? ic(e, J) : Fm = gt(Fm, a)), Wa(e, o);
    }
    function ER(e, t) {
      t === Yt && (t = Zw(e));
      var a = wa(), i = $a(e, t);
      i !== null && (Cu(i, t, a), Wa(i, a));
    }
    function S_(e) {
      var t = e.memoizedState, a = Yt;
      t !== null && (a = t.retryLane), ER(e, a);
    }
    function E_(e, t) {
      var a = Yt, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case _t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), ER(e, a);
    }
    function C_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Gw(e / 1960) * 1960;
    }
    function R_() {
      if (Qp > Xw)
        throw Qp = 0, QS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Yf > Kw && (Yf = 0, Bm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function x_() {
      il.flushLegacyContextWarning(), il.flushPendingUnsafeLifecycleWarnings();
    }
    function CR(e, t) {
      nn(e), Wm(e, Dl, Vw), t && Wm(e, bi, $w), Wm(e, Dl, Pw), t && Wm(e, bi, Bw), hn();
    }
    function Wm(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ye ? i = i.child : ((i.flags & t) !== Ye && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var Qm = null;
    function RR(e) {
      {
        if ((jt & qr) !== Rr || !(e.mode & bt))
          return;
        var t = e.tag;
        if (t !== ve && t !== q && t !== X && t !== Y && t !== Fe && t !== rt && t !== Me)
          return;
        var a = ct(e) || "ReactComponent";
        if (Qm !== null) {
          if (Qm.has(a))
            return;
          Qm.add(a);
        } else
          Qm = /* @__PURE__ */ new Set([a]);
        var i = pr;
        try {
          nn(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? nn(e) : hn();
        }
      }
    }
    var JS;
    {
      var b_ = null;
      JS = function(e, t, a) {
        var i = OR(b_, t);
        try {
          return AC(e, t, a);
        } catch (s) {
          if (UT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (em(), HE(), BC(e, t), OR(t, i), t.mode & qt && tS(t), kl(null, AC, null, e, t, a), Qi()) {
            var o = ss();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var xR = !1, e0;
    e0 = /* @__PURE__ */ new Set();
    function T_(e) {
      if (yi && !v1())
        switch (e.tag) {
          case Y:
          case Fe:
          case Me: {
            var t = Hn && ct(Hn) || "Unknown", a = t;
            if (!e0.has(a)) {
              e0.add(a);
              var i = ct(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case X: {
            xR || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), xR = !0);
            break;
          }
        }
    }
    function Xp(e, t) {
      if (aa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          ks(e, i, t);
        });
      }
    }
    var t0 = {};
    function n0(e, t) {
      {
        var a = pl.current;
        return a !== null ? (a.push(t), t0) : gd(e, t);
      }
    }
    function bR(e) {
      if (e !== t0)
        return Fv(e);
    }
    function TR() {
      return pl.current !== null;
    }
    function w_(e) {
      {
        if (e.mode & bt) {
          if (!nR())
            return;
        } else if (!Qw() || jt !== Rr || e.tag !== Y && e.tag !== Fe && e.tag !== Me)
          return;
        if (pl.current === null) {
          var t = pr;
          try {
            nn(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ct(e));
          } finally {
            t ? nn(e) : hn();
          }
        }
      }
    }
    function __(e) {
      e.tag !== Nu && nR() && pl.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Kp(e) {
      uR = e;
    }
    var ji = null, Wf = null, k_ = function(e) {
      ji = e;
    };
    function Qf(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function r0(e) {
      return Qf(e);
    }
    function a0(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Z,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function wR(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case X: {
            typeof i == "function" && (o = !0);
            break;
          }
          case Y: {
            (typeof i == "function" || s === pt) && (o = !0);
            break;
          }
          case Fe: {
            (s === Z || s === pt) && (o = !0);
            break;
          }
          case rt:
          case Me: {
            (s === mt || s === pt) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = ji(a);
          if (f !== void 0 && f === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function _R(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        Wf === null && (Wf = /* @__PURE__ */ new WeakSet()), Wf.add(e);
      }
    }
    var D_ = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Go(), Qo(function() {
          i0(e.current, i, a);
        });
      }
    }, O_ = function(e, t) {
      {
        if (e.context !== si)
          return;
        Go(), Qo(function() {
          Zp(t, e, null, null);
        });
      }
    };
    function i0(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Y:
          case Me:
          case X:
            v = p;
            break;
          case Fe:
            v = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, E = !1;
        if (v !== null) {
          var D = ji(v);
          D !== void 0 && (a.has(D) ? E = !0 : t.has(D) && (f === X ? E = !0 : y = !0));
        }
        if (Wf !== null && (Wf.has(e) || i !== null && Wf.has(i)) && (E = !0), E && (e._debugNeedsRemount = !0), E || y) {
          var w = $a(e, lt);
          w !== null && Tr(w, e, lt, sn);
        }
        o !== null && !E && i0(o, t, a), s !== null && i0(s, t, a);
      }
    }
    var L_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return l0(e.current, i, a), a;
      }
    };
    function l0(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Y:
          case Me:
          case X:
            p = f;
            break;
          case Fe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? M_(e, a) : i !== null && l0(i, t, a), o !== null && l0(o, t, a);
      }
    }
    function M_(e, t) {
      {
        var a = N_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case K:
              t.add(i.stateNode);
              return;
            case P:
              t.add(i.stateNode.containerInfo);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function N_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === K)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var o0;
    {
      o0 = !1;
      try {
        var kR = Object.preventExtensions({});
      } catch {
        o0 = !0;
      }
    }
    function z_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ye, this.subtreeFlags = Ye, this.deletions = null, this.lanes = J, this.childLanes = J, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !o0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new z_(e, t, a, i);
    };
    function u0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function A_(e) {
      return typeof e == "function" && !u0(e) && e.defaultProps === void 0;
    }
    function U_(e) {
      if (typeof e == "function")
        return u0(e) ? X : Y;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Z)
          return Fe;
        if (t === mt)
          return rt;
      }
      return ve;
    }
    function oc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ye, a.subtreeFlags = Ye, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & In, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ve:
        case Y:
        case Me:
          a.type = Qf(e.type);
          break;
        case X:
          a.type = r0(e.type);
          break;
        case Fe:
          a.type = a0(e.type);
          break;
      }
      return a;
    }
    function H_(e, t) {
      e.flags &= In | Tn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = J, e.lanes = t, e.child = null, e.subtreeFlags = Ye, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ye, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function F_(e, t, a) {
      var i;
      return e === Ih ? (i = bt, t === !0 && (i |= ln, i |= Xt)) : i = We, aa && (i |= qt), ci(q, null, null, i);
    }
    function s0(e, t, a, i, o, s) {
      var f = ve, p = e;
      if (typeof e == "function")
        u0(e) ? (f = X, p = r0(p)) : p = Qf(p);
      else if (typeof e == "string")
        f = K;
      else
        e: switch (e) {
          case pi:
            return Wu(a.children, o, s, t);
          case qa:
            f = we, o |= ln, (o & bt) !== We && (o |= Xt);
            break;
          case vi:
            return j_(a, o, s, t);
          case ge:
            return P_(a, o, s, t);
          case Oe:
            return B_(a, o, s, t);
          case Ln:
            return DR(a, o, s, t);
          case fn:
          // eslint-disable-next-line no-fallthrough
          case Tt:
          // eslint-disable-next-line no-fallthrough
          case vn:
          // eslint-disable-next-line no-fallthrough
          case dr:
          // eslint-disable-next-line no-fallthrough
          case xt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case hi:
                  f = Ue;
                  break e;
                case x:
                  f = Ct;
                  break e;
                case Z:
                  f = Fe, p = a0(p);
                  break e;
                case mt:
                  f = rt;
                  break e;
                case pt:
                  f = Dt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? ct(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var E = ci(f, a, t, o);
      return E.elementType = e, E.type = p, E.lanes = s, E._debugOwner = i, E;
    }
    function c0(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, p = s0(o, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Wu(e, t, a, i) {
      var o = ci(ie, e, i, t);
      return o.lanes = a, o;
    }
    function j_(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = ci(je, e, i, t | qt);
      return o.elementType = vi, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function P_(e, t, a, i) {
      var o = ci(De, e, i, t);
      return o.elementType = ge, o.lanes = a, o;
    }
    function B_(e, t, a, i) {
      var o = ci(_t, e, i, t);
      return o.elementType = Oe, o.lanes = a, o;
    }
    function DR(e, t, a, i) {
      var o = ci(Pe, e, i, t);
      o.elementType = Ln, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function f0(e, t, a) {
      var i = ci(ce, e, null, t);
      return i.lanes = a, i;
    }
    function V_() {
      var e = ci(K, null, null, We);
      return e.elementType = "DELETED", e;
    }
    function $_(e) {
      var t = ci(Wt, null, null, We);
      return t.stateNode = e, t;
    }
    function d0(e, t, a) {
      var i = e.children !== null ? e.children : [], o = ci(P, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function OR(e, t) {
      return e === null && (e = ci(ve, null, null, We)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function I_(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Qy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Yt, this.eventTimes = _s(J), this.expirationTimes = _s(sn), this.pendingLanes = J, this.suspendedLanes = J, this.pingedLanes = J, this.expiredLanes = J, this.mutableReadLanes = J, this.finishedLanes = J, this.entangledLanes = J, this.entanglements = _s(J), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < bo; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Ih:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Nu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function LR(e, t, a, i, o, s, f, p, v, y) {
      var E = new I_(e, t, a, p, v), D = F_(t, s);
      E.current = D, D.stateNode = E;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = w;
      }
      return Tg(D), E;
    }
    var p0 = "18.3.1";
    function Y_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return rr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: fr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var v0, h0;
    v0 = !1, h0 = {};
    function MR(e) {
      if (!e)
        return si;
      var t = hu(e), a = _T(t);
      if (t.tag === X) {
        var i = t.type;
        if (Wl(i))
          return iE(t, i, a);
      }
      return a;
    }
    function W_(e, t) {
      {
        var a = hu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = na(a);
        if (o === null)
          return null;
        if (o.mode & ln) {
          var s = ct(a) || "Component";
          if (!h0[s]) {
            h0[s] = !0;
            var f = pr;
            try {
              nn(o), a.mode & ln ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? nn(f) : hn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function NR(e, t, a, i, o, s, f, p) {
      var v = !1, y = null;
      return LR(e, t, v, y, a, i, o, s, f);
    }
    function zR(e, t, a, i, o, s, f, p, v, y) {
      var E = !0, D = LR(a, i, E, e, o, s, f, p, v);
      D.context = MR(null);
      var w = D.current, U = wa(), j = Iu(w), $ = $o(U, j);
      return $.callback = t ?? null, Uu(w, $, j), Jw(D, j, U), D;
    }
    function Zp(e, t, a, i) {
      Cd(t, e);
      var o = t.current, s = wa(), f = Iu(o);
      _n(f);
      var p = MR(a);
      t.context === null ? t.context = p : t.pendingContext = p, yi && pr !== null && !v0 && (v0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ct(pr) || "Unknown"));
      var v = $o(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Uu(o, v, f);
      return y !== null && (Tr(y, o, f, s), im(y, o, f)), f;
    }
    function Gm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case K:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Q_(e) {
      switch (e.tag) {
        case q: {
          var t = e.stateNode;
          if (af(t)) {
            var a = Iv(t);
            r_(t, a);
          }
          break;
        }
        case De: {
          Qo(function() {
            var o = $a(e, lt);
            if (o !== null) {
              var s = wa();
              Tr(o, e, lt, s);
            }
          });
          var i = lt;
          m0(e, i);
          break;
        }
      }
    }
    function AR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = qv(a.retryLane, t));
    }
    function m0(e, t) {
      AR(e, t);
      var a = e.alternate;
      a && AR(a, t);
    }
    function G_(e) {
      if (e.tag === De) {
        var t = Cs, a = $a(e, t);
        if (a !== null) {
          var i = wa();
          Tr(a, e, t, i);
        }
        m0(e, t);
      }
    }
    function q_(e) {
      if (e.tag === De) {
        var t = Iu(e), a = $a(e, t);
        if (a !== null) {
          var i = wa();
          Tr(a, e, t, i);
        }
        m0(e, t);
      }
    }
    function UR(e) {
      var t = gn(e);
      return t === null ? null : t.stateNode;
    }
    var HR = function(e) {
      return null;
    };
    function X_(e) {
      return HR(e);
    }
    var FR = function(e) {
      return !1;
    };
    function K_(e) {
      return FR(e);
    }
    var jR = null, PR = null, BR = null, VR = null, $R = null, IR = null, YR = null, WR = null, QR = null;
    {
      var GR = function(e, t, a) {
        var i = t[a], o = Rt(e) ? e.slice() : Et({}, e);
        return a + 1 === t.length ? (Rt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = GR(e[i], t, a + 1), o);
      }, qR = function(e, t) {
        return GR(e, t, 0);
      }, XR = function(e, t, a, i) {
        var o = t[i], s = Rt(e) ? e.slice() : Et({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], Rt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = XR(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, KR = function(e, t, a) {
        if (t.length !== a.length) {
          Q("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Q("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return XR(e, t, a, 0);
      }, ZR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Rt(e) ? e.slice() : Et({}, e);
        return s[o] = ZR(e[o], t, a + 1, i), s;
      }, JR = function(e, t, a) {
        return ZR(e, t, 0, a);
      }, y0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      jR = function(e, t, a, i) {
        var o = y0(e, t);
        if (o !== null) {
          var s = JR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Et({}, e.memoizedProps);
          var f = $a(e, lt);
          f !== null && Tr(f, e, lt, sn);
        }
      }, PR = function(e, t, a) {
        var i = y0(e, t);
        if (i !== null) {
          var o = qR(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = Et({}, e.memoizedProps);
          var s = $a(e, lt);
          s !== null && Tr(s, e, lt, sn);
        }
      }, BR = function(e, t, a, i) {
        var o = y0(e, t);
        if (o !== null) {
          var s = KR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Et({}, e.memoizedProps);
          var f = $a(e, lt);
          f !== null && Tr(f, e, lt, sn);
        }
      }, VR = function(e, t, a) {
        e.pendingProps = JR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, lt);
        i !== null && Tr(i, e, lt, sn);
      }, $R = function(e, t) {
        e.pendingProps = qR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, lt);
        a !== null && Tr(a, e, lt, sn);
      }, IR = function(e, t, a) {
        e.pendingProps = KR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, lt);
        i !== null && Tr(i, e, lt, sn);
      }, YR = function(e) {
        var t = $a(e, lt);
        t !== null && Tr(t, e, lt, sn);
      }, WR = function(e) {
        HR = e;
      }, QR = function(e) {
        FR = e;
      };
    }
    function Z_(e) {
      var t = na(e);
      return t === null ? null : t.stateNode;
    }
    function J_(e) {
      return null;
    }
    function ek() {
      return pr;
    }
    function tk(e) {
      var t = e.findFiberByHostInstance, a = b.ReactCurrentDispatcher;
      return gu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: jR,
        overrideHookStateDeletePath: PR,
        overrideHookStateRenamePath: BR,
        overrideProps: VR,
        overridePropsDeletePath: $R,
        overridePropsRenamePath: IR,
        setErrorHandler: WR,
        setSuspenseHandler: QR,
        scheduleUpdate: YR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Z_,
        findFiberByHostInstance: t || J_,
        // React Refresh
        findHostInstancesForRefresh: L_,
        scheduleRefresh: D_,
        scheduleRoot: O_,
        setRefreshHandler: k_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ek,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: p0
      });
    }
    var ex = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function g0(e) {
      this._internalRoot = e;
    }
    qm.prototype.render = g0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Xm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Vn) {
          var i = UR(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Zp(e, t, null, null);
    }, qm.prototype.unmount = g0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dR() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Qo(function() {
          Zp(null, e, null, null);
        }), eE(t);
      }
    };
    function nk(e, t) {
      if (!Xm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      tx(e);
      var a = !1, i = !1, o = "", s = ex;
      t != null && (t.hydrate ? Q("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === zr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = NR(e, Ih, null, a, i, o, s);
      Hh(f.current, e);
      var p = e.nodeType === Vn ? e.parentNode : e;
      return ap(p), new g0(f);
    }
    function qm(e) {
      this._internalRoot = e;
    }
    function rk(e) {
      e && ih(e);
    }
    qm.prototype.unstable_scheduleHydration = rk;
    function ak(e, t, a) {
      if (!Xm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      tx(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = ex;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = zR(t, null, e, Ih, i, s, f, p, v);
      if (Hh(y.current, e), ap(e), o)
        for (var E = 0; E < o.length; E++) {
          var D = o[E];
          u1(y, D);
        }
      return new qm(y);
    }
    function Xm(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === Wi || e.nodeType === ld));
    }
    function Jp(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === Wi || e.nodeType === ld || e.nodeType === Vn && e.nodeValue === " react-mount-point-unstable "));
    }
    function tx(e) {
      e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), hp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ik = b.ReactCurrentOwner, nx;
    nx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Vn) {
        var t = UR(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = S0(e), o = !!(i && Lu(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function S0(e) {
      return e ? e.nodeType === Wi ? e.documentElement : e.firstChild : null;
    }
    function rx() {
    }
    function lk(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Gm(f);
            s.call(w);
          };
        }
        var f = zR(
          t,
          i,
          e,
          Nu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rx
        );
        e._reactRootContainer = f, Hh(f.current, e);
        var p = e.nodeType === Vn ? e.parentNode : e;
        return ap(p), Qo(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Gm(E);
            y.call(w);
          };
        }
        var E = NR(
          e,
          Nu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rx
        );
        e._reactRootContainer = E, Hh(E.current, e);
        var D = e.nodeType === Vn ? e.parentNode : e;
        return ap(D), Qo(function() {
          Zp(t, E, a, i);
        }), E;
      }
    }
    function ok(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Km(e, t, a, i, o) {
      nx(a), ok(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = lk(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var p = o;
          o = function() {
            var v = Gm(f);
            p.call(v);
          };
        }
        Zp(t, f, e, o);
      }
      return Gm(f);
    }
    var ax = !1;
    function uk(e) {
      {
        ax || (ax = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = ik.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Vt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Jr ? e : W_(e, "findDOMNode");
    }
    function sk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Jp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = hp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Km(null, e, t, !0, a);
    }
    function ck(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Jp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = hp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Km(null, e, t, !1, a);
    }
    function fk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Jp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !my(e))
        throw new Error("parentComponent must be a valid React Component");
      return Km(e, t, a, !1, i);
    }
    var ix = !1;
    function dk(e) {
      if (ix || (ix = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Jp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = hp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = S0(e), i = a && !Lu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Qo(function() {
          Km(null, null, e, !1, function() {
            e._reactRootContainer = null, eE(e);
          });
        }), !0;
      } else {
        {
          var o = S0(e), s = !!(o && Lu(o)), f = e.nodeType === Jr && Jp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Dr(Q_), Ru(G_), th(q_), Ms(Pa), Bd(Zv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Cc(vb), hy(XS, a_, Qo);
    function pk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xm(t))
        throw new Error("Target container is not a DOM element.");
      return Y_(e, t, null, a);
    }
    function vk(e, t, a, i) {
      return fk(e, t, a, i);
    }
    var E0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Lu, bf, Fh, fu, Rc, XS]
    };
    function hk(e, t) {
      return E0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), nk(e, t);
    }
    function mk(e, t, a) {
      return E0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ak(e, t, a);
    }
    function yk(e) {
      return dR() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Qo(e);
    }
    var gk = tk({
      findFiberByHostInstance: Ws,
      bundleType: 1,
      version: p0,
      rendererPackageName: "react-dom"
    });
    if (!gk && En && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var lx = window.location.protocol;
      /^(https?|file):$/.test(lx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (lx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E0, Ga.createPortal = pk, Ga.createRoot = hk, Ga.findDOMNode = uk, Ga.flushSync = yk, Ga.hydrate = sk, Ga.hydrateRoot = mk, Ga.render = ck, Ga.unmountComponentAtNode = dk, Ga.unstable_batchedUpdates = XS, Ga.unstable_renderSubtreeIntoContainer = vk, Ga.version = p0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ga;
}
var gx;
function Ok() {
  if (gx) return ey.exports;
  gx = 1;
  function S() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (_) {
        console.error(_);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (S(), ey.exports = kk()) : ey.exports = Dk(), ey.exports;
}
var Sx;
function Lk() {
  if (Sx) return qf;
  Sx = 1;
  var S = Ok();
  if (process.env.NODE_ENV === "production")
    qf.createRoot = S.createRoot, qf.hydrateRoot = S.hydrateRoot;
  else {
    var _ = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    qf.createRoot = function(b, ee) {
      _.usingClientEntryPoint = !0;
      try {
        return S.createRoot(b, ee);
      } finally {
        _.usingClientEntryPoint = !1;
      }
    }, qf.hydrateRoot = function(b, ee, W) {
      _.usingClientEntryPoint = !0;
      try {
        return S.hydrateRoot(b, ee, W);
      } finally {
        _.usingClientEntryPoint = !1;
      }
    };
  }
  return qf;
}
var Mk = Lk();
const _x = /* @__PURE__ */ bx(Mk);
function kx(S) {
  if (!S) return [];
  const _ = S.className;
  if (typeof _ == "string")
    return _.split(/\s+/).filter(Boolean);
  const b = _?.baseVal;
  return typeof b == "string" ? b.split(/\s+/).filter(Boolean) : S.classList ? Array.from(S.classList).filter(Boolean) : [];
}
function x0(S, _) {
  const b = (le) => !!le && (le.id === "element-selector-overlay" || le.closest("#element-selector-overlay") || le.id === "element-selector-root" || le.closest("#element-selector-root")), ee = (le, Y, X, ve = /* @__PURE__ */ new Set()) => {
    if (ve.has(le)) return null;
    ve.add(le);
    const q = le.elementFromPoint;
    if (!q) return null;
    const P = q.call(le, Y, X);
    if (!P) return null;
    if (P instanceof HTMLSlotElement) {
      const K = P.assignedElements({ flatten: !0 }), ce = K.find((ie) => {
        const we = ie.getBoundingClientRect();
        return Y >= we.left && Y <= we.right && X >= we.top && X <= we.bottom;
      }) || K[0];
      if (ce) {
        if (ce.shadowRoot && !ve.has(ce.shadowRoot)) {
          const ie = ee(ce.shadowRoot, Y, X, ve);
          if (ie) return ie;
        }
        return ce;
      }
    }
    if (P.shadowRoot && !ve.has(P.shadowRoot)) {
      const K = ee(P.shadowRoot, Y, X, ve);
      if (K) return K;
    }
    return P;
  }, W = () => {
    const le = document.elementsFromPoint(S, _).filter(
      (X) => X instanceof HTMLElement && !b(X)
    );
    return le.find(
      (X) => X !== document.documentElement && X !== document.body
    ) ?? le[0] ?? null;
  }, g = (() => {
    let le = ee(document, S, _);
    if (le?.shadowRoot) {
      const Y = ee(le.shadowRoot, S, _);
      Y && (le = Y);
    }
    return le && !b(le) && le !== document.body && le !== document.documentElement ? le : W();
  })() ?? document.body;
  return g.tagName !== "svg" && g.tagName !== "SVG" && g.closest("svg") ? g.closest("svg") || document.body : g;
}
function Dx(S) {
  if (!S || S === document.body)
    return "body";
  if (S.id)
    return `#${CSS.escape(S.id)}`;
  const _ = [];
  let b = S;
  for (; b && b !== document.body; ) {
    let ee = b.tagName.toLowerCase();
    const W = kx(b).filter((Q) => !Q.includes(":")).slice(0, 2);
    if (W.length > 0) {
      const Q = W.map((g) => `.${CSS.escape(g)}`).join("");
      ee += Q;
    }
    if (b.parentElement) {
      const Q = b.tagName, le = Array.from(b.parentElement.children).filter(
        (Y) => Y.tagName === Q
      );
      if (le.length > 1) {
        const Y = le.indexOf(b) + 1;
        ee += `:nth-of-type(${Y})`;
      }
    }
    _.unshift(ee);
    try {
      const Q = _.join(" > "), g = document.querySelectorAll(Q);
      if (g.length === 1 && g[0] === S)
        return Q;
    } catch {
    }
    b = b.parentElement;
  }
  return _.join(" > ");
}
function Ox(S) {
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
  }[S.toLowerCase()] || S.toLowerCase();
}
function ny(S) {
  return S.width === 0 && S.height === 0;
}
function b0(S) {
  return getComputedStyle(S).display === "contents";
}
function Ex(S) {
  const _ = Math.min(...S.map((Q) => Q.left)), b = Math.min(...S.map((Q) => Q.top)), ee = Math.max(...S.map((Q) => Q.right)), W = Math.max(...S.map((Q) => Q.bottom));
  return new DOMRectReadOnly(_, b, ee - _, W - b);
}
function Nk(S) {
  const _ = S.cloneNode(!0), b = Array.from(S.querySelectorAll("slot"));
  return Array.from(_.querySelectorAll("slot")).forEach((W, Q) => {
    const g = b[Q];
    if (!(g instanceof HTMLSlotElement)) return;
    const le = g.assignedNodes({ flatten: !0 });
    if (!le.length) return;
    const Y = le.map((X) => X.cloneNode(!0));
    W.replaceWith(...Y);
  }), _;
}
function ay(S) {
  if (!S) return null;
  const _ = S.getRootNode(), b = S.getBoundingClientRect();
  if (!ny(b) && !b0(S))
    return { element: S, rect: b };
  if (b0(S)) {
    const W = Array.from(S.children).filter((Q) => Q instanceof HTMLElement).map((Q) => Q.getBoundingClientRect()).filter((Q) => !ny(Q));
    if (W.length)
      return { element: S, rect: Ex(W) };
  }
  if (S instanceof HTMLSlotElement) {
    const W = S.assignedElements({ flatten: !0 }).map((Q) => Q.getBoundingClientRect()).filter((Q) => !ny(Q));
    if (W.length)
      return { element: S, rect: Ex(W) };
  }
  let ee = S;
  for (; ee; ) {
    const W = ee.parentElement;
    if (!W || W === document.body || W.getRootNode() !== _)
      break;
    const Q = W.getBoundingClientRect();
    if (!ny(Q) && !b0(W))
      return { element: W, rect: Q };
    ee = W;
  }
  return { element: S, rect: b };
}
function zk(S, _ = 300, { maxAncestors: b = 10 } = {}) {
  if (!S || !S.parentNode)
    throw new Error("Node must be attached to the DOM (with a parent).");
  const ee = (P) => P.nodeType === Node.ELEMENT_NODE ? Nk(P).outerHTML : P.nodeType === Node.TEXT_NODE ? (P.textContent ?? "").toString() : new XMLSerializer().serializeToString(P), W = (P, K) => {
    const ce = [];
    let ie = K;
    for (; ie && ie !== P; ) {
      const we = ie.parentNode;
      if (!we)
        throw new Error("Failed to resolve node path for context extraction.");
      const Ct = Array.prototype.indexOf.call(we.childNodes, ie);
      if (Ct === -1)
        throw new Error("Unable to map node into cloned context tree.");
      ce.unshift(Ct), ie = we;
    }
    if (ie !== P)
      throw new Error("Context root does not contain the requested node.");
    return ce;
  }, Q = (P) => {
    P.querySelectorAll(
      "#element-selector-root, #element-selector-overlay"
    ).forEach((ce) => ce.remove());
  }, g = {
    start: `__element_selector_start_${Math.random().toString(36).slice(2)}__`,
    end: `__element_selector_end_${Math.random().toString(36).slice(2)}__`
  }, le = (P) => {
    const K = document.createElement("div"), ce = P instanceof ShadowRoot ? (() => {
      const _t = document.createDocumentFragment();
      return P.childNodes.forEach(
        (St) => _t.appendChild(St.cloneNode(!0))
      ), _t;
    })() : P.cloneNode(!0), ie = ce.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (() => {
      const _t = document.createElement("div");
      return _t.appendChild(ce), _t;
    })() : ce;
    K.appendChild(ie), Q(K);
    const we = ie;
    if (!we.firstChild)
      return {
        beforeHtml: "",
        elementHtml: ee(S),
        afterHtml: ""
      };
    const Ct = W(P, S);
    let Ue = we;
    for (const _t of Ct) {
      const St = Ue.childNodes.item(_t);
      if (!St)
        throw new Error("Failed to mirror node inside cloned context tree.");
      Ue = St;
    }
    const Fe = Ue.parentNode;
    if (!Fe)
      return {
        beforeHtml: "",
        elementHtml: ee(S),
        afterHtml: ""
      };
    const je = document.createTextNode(g.start), De = document.createTextNode(g.end);
    Fe.insertBefore(je, Ue), Fe.insertBefore(De, Ue.nextSibling), Fe.removeChild(Ue);
    const rt = P.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? ie.innerHTML : K.innerHTML, Me = rt.indexOf(g.start), Dt = rt.indexOf(g.end);
    if (Me === -1 || Dt === -1 || Dt < Me)
      throw new Error("Failed to locate context markers during serialization.");
    const Ot = rt.slice(0, Me), Wt = rt.slice(Dt + g.end.length);
    return {
      beforeHtml: Ot,
      elementHtml: ee(S),
      afterHtml: Wt
    };
  }, Y = (P) => P.parentNode ? P.parentNode.nodeType === Node.DOCUMENT_NODE ? P.parentNode.documentElement ?? null : P.parentNode : null;
  let X = 0, ve = S.parentNode ?? S, q = le(ve);
  for (; X < b && (q.beforeHtml.length < _ || q.afterHtml.length < _); ) {
    const P = Y(ve);
    if (!P || P === ve || (X += 1, ve = P, q = le(ve), !ve.parentNode || ve.parentNode.nodeType === Node.DOCUMENT_NODE))
      break;
  }
  return q;
}
function Ak({
  targetElement: S,
  friendlySelectors: _ = !1,
  rect: b = null
}) {
  const ee = at.useRef(null);
  at.useEffect(() => {
    const Q = ee.current;
    if (!Q) return;
    if (!b) {
      Q.style.opacity = "0";
      return;
    }
    const g = 1;
    Q.style.top = `${b.top - g}px`, Q.style.left = `${b.left - g}px`, Q.style.width = `${b.width + g * 2}px`, Q.style.height = `${b.height + g * 2}px`, Q.style.opacity = "1";
  }, [b]);
  const W = S ? {
    tag: S.tagName.toLowerCase(),
    friendlyTag: _ ? Ox(S.tagName) : S.tagName.toLowerCase(),
    id: S.id,
    classes: kx(S).slice(0, 2)
  } : null;
  return /* @__PURE__ */ zt.jsxs(
    "div",
    {
      ref: ee,
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
        W && /* @__PURE__ */ zt.jsxs(
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
              /* @__PURE__ */ zt.jsx("strong", { children: W.friendlyTag }),
              W.id && /* @__PURE__ */ zt.jsxs("span", { style: { opacity: 0.9 }, children: [
                "#",
                W.id
              ] }),
              W.classes?.length > 0 && /* @__PURE__ */ zt.jsxs("span", { style: { opacity: 0.8 }, children: [
                ".",
                W.classes.join(".")
              ] })
            ]
          }
        ),
        /* @__PURE__ */ zt.jsx("style", { children: `
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
function w0({ targetElement: S, onDeselect: _, variant: b = "interactive", rect: ee = null }) {
  const W = at.useRef(null), [Q, g] = at.useState(!1), le = b === "interactive", Y = le ? 1e5 : 99990;
  return at.useEffect(() => {
    const X = W.current;
    if (!X) return;
    if (!ee) {
      X.style.opacity = "0";
      return;
    }
    const ve = 1;
    X.style.top = `${ee.top - ve}px`, X.style.left = `${ee.left - ve}px`, X.style.width = `${ee.width + ve * 2}px`, X.style.height = `${ee.height + ve * 2}px`, X.style.opacity = "1";
  }, [ee]), /* @__PURE__ */ zt.jsxs(
    "button",
    {
      ref: W,
      "data-selected-element": "true",
      onClick: (X) => {
        le && (X.stopPropagation(), X.preventDefault(), _());
      },
      onMouseEnter: () => le && g(!0),
      onMouseLeave: () => le && g(!1),
      style: {
        position: "fixed",
        zIndex: Y,
        opacity: 0,
        transition: "border-color 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out",
        boxSizing: "border-box",
        border: le ? Q ? "3px solid #dc2626" : "3px solid #f59e0b" : "2px solid rgba(56, 189, 248, 0.8)",
        padding: 0,
        background: le ? Q ? "rgba(220, 38, 38, 0.14)" : "rgba(245, 158, 11, 0.16)" : "rgba(56, 189, 248, 0.08)",
        borderRadius: "8px",
        cursor: le && Q ? "pointer" : "default",
        boxShadow: le ? Q ? "0 0 18px rgba(220, 38, 38, 0.45), inset 0 0 16px rgba(220, 38, 38, 0.18)" : "0 0 18px rgba(245, 158, 11, 0.45), inset 0 0 16px rgba(245, 158, 11, 0.18)" : "0 0 12px rgba(56, 189, 248, 0.25)",
        pointerEvents: le ? "auto" : "none"
      },
      children: [
        le && Q && /* @__PURE__ */ zt.jsx(
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
        le && /* @__PURE__ */ zt.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "-12px",
              right: "-12px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: Q ? "#dc2626" : "#f59e0b",
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
const rv = 4;
function Lx({
  element: S,
  position: _,
  axis: b,
  friendlySelectors: ee = !1,
  rect: W = null
}) {
  const Q = at.useRef(null), g = at.useRef(null);
  at.useEffect(() => {
    if (!(!Q.current || !g.current)) {
      if (!W) {
        Q.current.style.opacity = "0", g.current.style.opacity = "0";
        return;
      }
      if (Q.current.style.opacity = "1", g.current.style.opacity = "1", b === "horizontal") {
        const ve = _ === "before" ? W.top : W.bottom;
        Q.current.style.top = `${ve - rv / 2}px`, Q.current.style.left = `${W.left}px`, Q.current.style.width = `${Math.max(W.width, 1)}px`, Q.current.style.height = `${rv}px`;
        const q = _ === "before" ? ve - 32 : ve + 8;
        g.current.style.top = `${q}px`, g.current.style.left = `${W.left}px`;
      } else {
        const ve = _ === "before" ? W.left : W.right;
        Q.current.style.left = `${ve - rv / 2}px`, Q.current.style.top = `${W.top}px`, Q.current.style.height = `${Math.max(W.height, 1)}px`, Q.current.style.width = `${rv}px`;
        const q = _ === "before" ? ve - 140 : ve + 12;
        g.current.style.left = `${q}px`, g.current.style.top = `${W.top}px`;
      }
    }
  }, [W, b, _]);
  const le = S.tagName.toLowerCase(), Y = ee ? Ox(S.tagName) : le, X = `${_ === "before" ? "Insert before" : "Insert after"} ${Y}`;
  return /* @__PURE__ */ zt.jsxs(zt.Fragment, { children: [
    /* @__PURE__ */ zt.jsx(
      "div",
      {
        ref: Q,
        style: {
          position: "fixed",
          pointerEvents: "none",
          zIndex: 1e5,
          opacity: 0,
          background: "#f59e0b",
          boxShadow: "0 0 14px rgba(245, 158, 11, 0.45)",
          borderRadius: rv
        }
      }
    ),
    /* @__PURE__ */ zt.jsx(
      "div",
      {
        ref: g,
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
        children: X
      }
    )
  ] });
}
function Mx(S, { debug: _ = !1 } = {}) {
  const [b, ee] = at.useState(
    () => /* @__PURE__ */ new Map()
  ), W = at.useRef(null), Q = at.useMemo(() => {
    const g = /* @__PURE__ */ new Set(), le = [];
    for (const Y of S)
      Y && !g.has(Y) && (g.add(Y), le.push(Y));
    return le;
  }, [S]);
  return at.useEffect(() => {
    if (!Q.length) {
      ee(/* @__PURE__ */ new Map());
      return;
    }
    let g = null;
    const le = () => {
      W.current === null && (W.current = requestAnimationFrame(() => {
        W.current = null, ee((Y) => {
          const X = /* @__PURE__ */ new Map();
          let ve = !1;
          for (const q of Q) {
            const K = ay(q)?.rect;
            if (!K) {
              const we = Y.get(q);
              we && X.set(q, we);
              continue;
            }
            const ce = Y.get(q);
            (!ce || K.top !== ce.top || K.left !== ce.left || K.width !== ce.width || K.height !== ce.height) && (ve = !0, _ && console.debug("[element-selector] measure", {
              tag: q.tagName,
              id: q.id,
              className: q.className,
              rect: {
                top: K.top,
                left: K.left,
                width: K.width,
                height: K.height
              }
            })), X.set(q, K);
          }
          return !ve && Y.size === X.size ? Y : X;
        });
      }));
    };
    return g = new ResizeObserver(le), Q.forEach((Y) => g?.observe(Y)), window.addEventListener("scroll", le, !0), window.addEventListener("resize", le), le(), () => {
      g && g.disconnect(), window.removeEventListener("scroll", le, !0), window.removeEventListener("resize", le), W.current !== null && (cancelAnimationFrame(W.current), W.current = null);
    };
  }, [Q]), b;
}
const Uk = {
  top: { position: "before", axis: "horizontal" },
  bottom: { position: "after", axis: "horizontal" },
  left: { position: "before", axis: "vertical" },
  right: { position: "after", axis: "vertical" }
}, Hk = 300;
function Fk(S) {
  return S === "light" ? {
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
function av(S) {
  if (!S)
    return {};
  const _ = {}, b = [
    ["src", "data-ai-src"],
    ["routeId", "data-ai-route-id"],
    ["routeFile", "data-ai-route-file"]
  ];
  let ee = S;
  for (; ee; ) {
    const W = ee;
    if (b.forEach(([g, le]) => {
      if (_[g] !== void 0) return;
      const Y = W.getAttribute(le);
      Y && (_[g] = Y);
    }), _.src && _.routeId && _.routeFile)
      break;
    if (ee.parentElement) {
      ee = ee.parentElement;
      continue;
    }
    const Q = ee.getRootNode();
    ee = Q instanceof ShadowRoot ? Q.host : null;
  }
  return _;
}
const jk = (S) => {
  const b = (S.innerText ?? S.textContent ?? "").toString().replace(/\s+/g, " ").trim(), ee = 1024;
  return b.length <= ee ? b : `${b.slice(0, ee)}<!-- SNIPPET FOR BREVITY -->`;
};
function Cx(S, _, b) {
  if (!S || S === document.documentElement)
    return null;
  const ee = S.getBoundingClientRect();
  if (ee.width === 0 && ee.height === 0)
    return null;
  const W = [
    { edge: "top", value: Math.abs(b - ee.top) },
    { edge: "bottom", value: Math.abs(b - ee.bottom) },
    { edge: "left", value: Math.abs(_ - ee.left) },
    { edge: "right", value: Math.abs(_ - ee.right) }
  ];
  W.sort((le, Y) => le.value - Y.value);
  const Q = W[0];
  if (!Q)
    return null;
  const g = Uk[Q.edge];
  return {
    element: S,
    position: g.position,
    axis: g.axis
  };
}
function Nx(S) {
  return S ? !!(S.id === "element-selector-overlay" || S.closest("#element-selector-overlay") || S.id === "element-selector-root" || S.closest("#element-selector-root")) : !1;
}
function zx(S) {
  return S === document.body || S === document.documentElement;
}
function T0(S, _) {
  return _ && S && S.shadowRoot && _.getRootNode() === S.shadowRoot ? _ : S && !zx(S) ? S : _;
}
function Rx(S) {
  const _ = S.composedPath?.() ?? [];
  for (const b of _)
    if (b instanceof HTMLElement && !Nx(b))
      return b;
  return null;
}
function xx(S) {
  if (!S) return null;
  if (S.parentElement) return S.parentElement;
  const _ = S.getRootNode();
  return _ instanceof ShadowRoot ? _.host : null;
}
function Pk({
  onElementSelected: S,
  onCancel: _,
  multiSelect: b = !1,
  friendlySelectors: ee = !1,
  initialMode: W = "select",
  allowModeToggle: Q = !0,
  lasso: g = !1,
  optionsPanelPosition: le,
  selectionBarText: Y,
  theme: X = "dark",
  debug: ve = !1
}) {
  const q = W === "lasso" && !g ? "select" : W, [P, K] = at.useState(q), ce = P === "select" && b, ie = Fk(X), [we, Ct] = at.useState(null), [Ue, Fe] = at.useState(null), [je, De] = at.useState([]), [rt, Me] = at.useState(!1), [Dt, Ot] = at.useState(
    null
  ), [Wt, _t] = at.useState(null), [St, Pe] = at.useState([]), [xe, At] = at.useState(() => typeof window > "u" ? !1 : window.matchMedia("(max-width: 640px)").matches), Lt = at.useMemo(() => {
    const L = [];
    return we && L.push(we), Ue?.element && !L.includes(Ue.element) && L.push(Ue.element), je.forEach((fe) => {
      L.includes(fe) || L.push(fe);
    }), St.forEach((fe) => {
      L.includes(fe) || L.push(fe);
    }), L;
  }, [we, Ue, je, St]), Ce = Mx(Lt, {
    debug: ve
  }), ne = at.useCallback(
    (...L) => {
      ve && console.debug("[element-selector]", ...L);
    },
    [ve]
  );
  at.useEffect(() => {
    !ve || !we || ne("current hover rect", {
      tag: we.tagName,
      id: we.id,
      className: we.className,
      rect: Ce.get(we) ?? null
    });
  }, [we, Ce, ve, ne]);
  const Le = at.useRef({ x: 0, y: 0 }), pe = at.useRef(null), O = at.useRef(null), V = at.useRef(null), Xe = at.useRef(null), Be = at.useRef(null), ft = at.useRef([]), ot = at.useRef(!1), et = at.useRef(null), dt = at.useRef(!1), Ke = at.useCallback(
    (L, fe = {}) => {
      const Qe = (() => {
        try {
          return zk(L, Hk);
        } catch {
          return {
            beforeHtml: "",
            elementHtml: L.outerHTML || "",
            afterHtml: ""
          };
        }
      })(), ye = {
        element: L,
        selector: Dx(L),
        tag: L.tagName.toLowerCase(),
        id: L.id || null,
        classes: L.className || "",
        textPreview: jk(L),
        beforeHtml: Qe.beforeHtml,
        elementHtml: Qe.elementHtml,
        afterHtml: Qe.afterHtml,
        ...av(L),
        ...fe
      }, Mt = L.previousElementSibling, Ie = L.nextElementSibling, Ut = av(Mt), Ze = av(Ie);
      if (ye.beforeSrc = Ut.src, ye.beforeRouteId = Ut.routeId, ye.beforeRouteFile = Ut.routeFile, ye.afterSrc = Ze.src, ye.afterRouteId = Ze.routeId, ye.afterRouteFile = Ze.routeFile, ye.mode === "insert") {
        ye.insertionBeforeHtml = ye.insertionPosition === "after" ? ye.beforeHtml + ye.elementHtml : ye.beforeHtml, ye.insertionAfterHtml = ye.insertionPosition === "before" ? ye.elementHtml + ye.afterHtml : ye.afterHtml;
        const it = ye.insertionPosition === "before" ? "before" : "after", Bt = it === "before" ? L.previousElementSibling : L, Mr = it === "before" ? L : L.nextElementSibling, Bn = av(Bt), wr = av(Mr);
        ye.beforeSrc = Bn.src, ye.beforeRouteId = Bn.routeId, ye.beforeRouteFile = Bn.routeFile, ye.afterSrc = wr.src, ye.afterRouteId = wr.routeId, ye.afterRouteFile = wr.routeFile;
      } else
        ye.insertionBeforeHtml = ye.beforeHtml, ye.insertionAfterHtml = ye.afterHtml;
      return ye;
    },
    []
  ), Qt = at.useCallback(
    (L) => {
      const fe = [], Qe = Array.from(document.body.querySelectorAll("*"));
      for (const Ie of Qe) {
        if (Nx(Ie) || Ie.closest('[data-element-selector-ui="true"]') || zx(Ie)) continue;
        const Ut = ay(Ie), Ze = Ut?.rect, it = Ut?.element ?? Ie;
        if (!Ze || Ze.width === 0 || Ze.height === 0) continue;
        Ze.left >= L.left && Ze.right <= L.right && Ze.top >= L.top && Ze.bottom <= L.bottom && fe.push(it);
      }
      const ye = new Set(fe);
      return fe.filter((Ie) => {
        let Ut = xx(Ie);
        for (; Ut; ) {
          if (ye.has(Ut)) return !1;
          Ut = xx(Ut);
        }
        return !0;
      });
    },
    []
  ), En = at.useCallback(() => {
    if (P === "lasso")
      return;
    const L = x0(
      Le.current.x,
      Le.current.y
    ), fe = T0(
      Be.current,
      L
    ), ye = ay(fe)?.element ?? fe;
    if (ne("hover update", {
      point: { ...Le.current },
      composedTarget: Be.current?.tagName,
      pointTarget: L?.tagName,
      chosenTarget: fe?.tagName,
      measurableTarget: ye?.tagName,
      id: fe?.id,
      className: fe?.className,
      pointRoot: L?.getRootNode() instanceof ShadowRoot ? L.getRootNode().host.tagName : null,
      composedRoot: Be.current?.getRootNode() instanceof ShadowRoot ? Be.current.getRootNode().host.tagName : null
    }), P === "insert") {
      const Ie = Cx(
        ye,
        Le.current.x,
        Le.current.y
      );
      (Ie && (!V.current || V.current.element !== Ie.element || V.current.position !== Ie.position || V.current.axis !== Ie.axis) || !Ie && V.current) && (V.current = Ie, Fe(Ie ?? null)), Me(!!Ie), Ct(Ie ? Ie.element : null), O.current = Ie ? Ie.element : null;
      return;
    }
    if (V.current && (V.current = null, Fe(null)), ce && je.some((Ie) => Ie.contains(ye ?? fe ?? Ie))) {
      Me(!1), Ct(null), O.current = null;
      return;
    }
    O.current !== ye && (O.current = ye, Ct(ye), Me(!0), ne("setCurrentHover", {
      tag: ye?.tagName,
      id: ye?.id,
      className: ye?.className,
      rect: ye ? Ce.get(ye) ?? null : null
    }));
  }, [ce, P, je, Ce, ne]), Kn = at.useCallback(
    (L) => {
      const fe = Rx(L);
      if ((fe ?? L.target)?.closest('[data-element-selector-ui="true"]')) {
        pe.current && (clearTimeout(pe.current), pe.current = null), Xe.current = null, Be.current = null, Ct(null), Fe(null), O.current = null, V.current = null, Me(!1);
        return;
      }
      if (ot.current && et.current && P === "lasso") {
        const Mt = { x: L.clientX, y: L.clientY };
        _t({ start: et.current, current: Mt });
        const Ie = Math.min(et.current.x, Mt.x), Ut = Math.max(et.current.x, Mt.x), Ze = Math.min(et.current.y, Mt.y), it = Math.max(et.current.y, Mt.y);
        if (Math.abs(Ut - Ie) > 2 && Math.abs(it - Ze) > 2) {
          const Bt = Qt({ left: Ie, right: Ut, top: Ze, bottom: it });
          ft.current = Bt, Pe(Bt), Me(!0);
        }
        return;
      }
      const ye = x0(L.clientX, L.clientY);
      Be.current = fe, Xe.current = T0(fe, ye), Le.current = {
        x: L.clientX,
        y: L.clientY
      }, pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
        En();
      }, 50), P === "lasso" && (Ct(null), Fe(null), Me(!0));
    },
    [En, Qt, P]
  ), cn = at.useCallback(() => {
    ot.current = !1, et.current = null, ft.current = [], _t(null), Pe([]);
  }, []), Fn = at.useCallback(() => {
    if (!ot.current) return;
    const L = ft.current;
    if (cn(), dt.current = !0, setTimeout(() => {
      dt.current = !1;
    }, 0), L.length) {
      const fe = L.map(
        (Qe) => Ke(Qe, { mode: "select" })
      );
      S(fe);
    }
  }, [cn, S, Ke]), Cn = at.useCallback(
    (L) => {
      if (!g || P !== "lasso" || L.button !== 0) return;
      const fe = L.target;
      if (fe?.closest('[data-element-selector-ui="true"]') || fe?.closest('[data-selected-element="true"]'))
        return;
      L.preventDefault(), L.stopPropagation();
      const Qe = { x: L.clientX, y: L.clientY };
      ot.current = !0, et.current = Qe, ft.current = [], Pe([]), _t({ start: Qe, current: Qe }), Ct(null), Fe(null), Me(!0);
    },
    [g, P]
  ), Rn = at.useCallback(
    (L) => {
      !ot.current || P !== "lasso" || (L.preventDefault(), L.stopPropagation(), Fn());
    },
    [P, Fn]
  ), rr = at.useCallback(() => {
    pe.current && (clearTimeout(pe.current), pe.current = null), Ct(null), Fe(null), O.current = null, V.current = null, Me(!1), Xe.current = null, Be.current = null, ot.current && cn();
  }, [cn]), Kr = at.useCallback(
    (L) => {
      L === "lasso" && !g || L !== P && (ne("mode toggle", { from: P, to: L }), K(L), De([]), Fe(null), Ot(null), Ct(null), O.current = null, V.current = null, Me(L === "lasso"), _t(null), Pe([]), ft.current = [], ot.current = !1, et.current = null);
    },
    [P, ne, g]
  ), sr = at.useCallback(
    (L) => {
      const fe = xe && !ce;
      if (dt.current) {
        dt.current = !1, L.preventDefault(), L.stopPropagation();
        return;
      }
      if (P === "lasso") {
        L.preventDefault(), L.stopPropagation();
        return;
      }
      const Qe = L.target;
      if (Qe.closest('[data-selected-element="true"]') || Qe.closest('[data-element-selector-ui="true"]'))
        return;
      L.preventDefault(), L.stopPropagation();
      const ye = Rx(L), Mt = x0(L.clientX, L.clientY), Ie = T0(ye, Mt) ?? Mt, Ze = ay(Ie)?.element ?? Ie;
      if (P === "insert") {
        const it = Cx(
          Ze,
          L.clientX,
          L.clientY
        );
        if (!it) {
          ne("insert click with no candidate", {
            point: { x: L.clientX, y: L.clientY }
          });
          return;
        }
        if (fe) {
          Ot(it), Fe(it), De([]);
          return;
        }
        S([
          Ke(it.element, {
            mode: "insert",
            insertionPosition: it.position,
            insertionAxis: it.axis
          })
        ]);
        return;
      }
      if (Ze && !(ce && je.some((it) => it.contains(Ze)))) {
        if (ce) {
          De((it) => it.includes(Ze) ? it : [...it, Ze]);
          return;
        }
        if (fe) {
          De([Ze]), Ot(null);
          return;
        }
        S([Ke(Ze, { mode: "select" })]), ne("select click", {
          tag: Ze.tagName,
          id: Ze.id,
          className: Ze.className,
          rect: Ce.get(Ze) ?? null
        });
      }
    },
    [
      ce,
      xe,
      P,
      S,
      je,
      Ke,
      Ce,
      ne
    ]
  ), jn = at.useCallback((L) => {
    De(
      (fe) => fe.filter((Qe) => Qe !== L)
    );
  }, []);
  at.useEffect(() => (document.addEventListener("mousemove", Kn, !0), document.addEventListener("mouseleave", rr, !0), document.addEventListener("click", sr, !0), document.addEventListener("mousedown", Cn, !0), document.addEventListener("mouseup", Rn, !0), ne("selector mounted", {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    tracked: Lt.length
  }), () => {
    document.removeEventListener("mousemove", Kn, !0), document.removeEventListener("mouseleave", rr, !0), document.removeEventListener("click", sr, !0), document.removeEventListener("mousedown", Cn, !0), document.removeEventListener("mouseup", Rn, !0), pe.current && clearTimeout(pe.current), ne("selector unmounted");
  }), [
    Kn,
    rr,
    sr,
    Cn,
    Rn,
    Lt.length,
    ne
  ]), at.useEffect(() => {
    const L = (fe) => {
      switch (fe.key) {
        case "Escape":
          _();
          break;
        case "Enter":
          if (P === "lasso")
            return;
          if (P === "insert" && Ue) {
            S([
              Ke(Ue.element, {
                mode: "insert",
                insertionPosition: Ue.position,
                insertionAxis: Ue.axis
              })
            ]);
            break;
          }
          if (ce && je.length > 0) {
            const Qe = je.map(
              (ye) => Ke(ye, { mode: "select" })
            );
            S(Qe);
          }
          break;
      }
    };
    return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
  }, [
    ce,
    Ue,
    P,
    _,
    S,
    je,
    Ke
  ]), at.useEffect(() => {
    const L = window.matchMedia("(max-width: 640px)"), fe = () => At(L.matches);
    return fe(), L.addEventListener("change", fe), () => L.removeEventListener("change", fe);
  }, []);
  const It = {
    selectLabel: Y?.selectLabel ?? "Select",
    insertLabel: Y?.insertLabel ?? "Insert",
    lassoLabel: Y?.lassoLabel ?? "Lasso",
    instructionSelectSingle: Y?.instructionSelectSingle ?? "Click an element to select",
    instructionSelectMulti: Y?.instructionSelectMulti ?? "Click elements to select",
    instructionInsert: Y?.instructionInsert ?? "Click to choose where to insert new content",
    instructionLasso: Y?.instructionLasso ?? "Click and drag to select everything inside the box",
    confirmLabel: Y?.confirmLabel ?? "✓",
    cancelLabel: Y?.cancelLabel ?? "✕"
  }, On = P === "lasso" ? It.instructionLasso : P === "insert" ? It.instructionInsert : ce ? It.instructionSelectMulti : It.instructionSelectSingle, yn = P === "lasso", ha = at.useCallback(() => {
    if (yn) return;
    const L = xe && !ce;
    if (ce && je.length > 0) {
      const fe = je.map(
        (Qe) => Ke(Qe, { mode: "select" })
      );
      S(fe);
      return;
    }
    if (L) {
      if (P === "select" && je[0]) {
        S([
          Ke(je[0], { mode: "select" })
        ]);
        return;
      }
      P === "insert" && Dt && S([
        Ke(Dt.element, {
          mode: "insert",
          insertionPosition: Dt.position,
          insertionAxis: Dt.axis
        })
      ]);
    }
  }, [
    ce,
    xe,
    P,
    S,
    Dt,
    je,
    Ke,
    yn
  ]), xn = !yn && xe && !ce, Pn = yn ? !1 : ce ? je.length > 0 : xn ? P === "select" ? je.length > 0 : !!Dt : !1, Lr = !yn && (ce || xn), cr = at.useMemo(() => {
    if (!Wt) return null;
    const { start: L, current: fe } = Wt;
    return {
      left: Math.min(L.x, fe.x),
      top: Math.min(L.y, fe.y),
      width: Math.abs(fe.x - L.x),
      height: Math.abs(fe.y - L.y)
    };
  }, [Wt]), ma = {
    vertical: le?.vertical ?? "top",
    horizontal: le?.horizontal ?? "center"
  }, oe = {
    position: "fixed",
    background: ie.panelBg,
    color: ie.textColor,
    padding: xe ? "14px 16px" : "16px 24px",
    borderRadius: xe ? "16px" : "12px",
    fontSize: "15px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: ie.shadow,
    border: ie.border,
    zIndex: 100001,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: xe ? "10px" : "16px",
    pointerEvents: "auto",
    width: xe ? "calc(100% - 24px)" : void 0,
    maxWidth: xe ? "min(720px, calc(100% - 24px))" : "min(960px, calc(100% - 48px))",
    boxSizing: "border-box",
    flexWrap: "nowrap",
    overflowX: "auto",
    justifyContent: "space-between"
  };
  if (xe)
    oe.left = "12px", oe.right = "12px", oe.bottom = "16px", oe.top = void 0, oe.transform = "none";
  else
    switch (ma.vertical === "top" ? oe.top = "24px" : oe.bottom = "24px", ma.horizontal) {
      case "left":
        oe.left = "24px", oe.transform = "none";
        break;
      case "right":
        oe.right = "24px", oe.transform = "none";
        break;
      default:
        oe.left = "50%", oe.transform = "translateX(-50%)";
        break;
    }
  return /* @__PURE__ */ zt.jsxs(
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
        /* @__PURE__ */ zt.jsxs(
          "div",
          {
            "data-element-selector-ui": "true",
            style: {
              pointerEvents: "auto",
              ...oe
            },
            children: [
              Q && /* @__PURE__ */ zt.jsx(
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
                    flexGrow: xe ? 1 : void 0
                  },
                  children: /* @__PURE__ */ zt.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        gap: xe ? "6px" : "4px",
                        flex: xe ? "1 1 auto" : void 0,
                        flexShrink: 1
                      },
                      children: [
                        /* @__PURE__ */ zt.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (L) => {
                              L.preventDefault(), L.stopPropagation(), Kr("select");
                            },
                            style: {
                              border: P === "select" ? "1px solid " + ie.toggleSelectedBg : X === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "999px 0 0 999px",
                              padding: xe ? "10px 12px" : "6px 14px",
                              minHeight: xe ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: P === "select" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: xe ? 1 : void 0,
                              background: P === "select" ? ie.toggleSelectedBg : "transparent",
                              color: P === "select" ? ie.toggleSelectedText : ie.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": P === "select" ? ie.toggleSelectedText : ie.toggleIdleTextHover
                            },
                            children: It.selectLabel
                          }
                        ),
                        /* @__PURE__ */ zt.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (L) => {
                              L.preventDefault(), L.stopPropagation(), Kr("insert");
                            },
                            style: {
                              border: P === "insert" ? "1px solid " + ie.toggleSelectedBg : X === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: g ? "0" : "0 999px 999px 0",
                              padding: xe ? "10px 12px" : "6px 14px",
                              minHeight: xe ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: P === "insert" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: xe ? 1 : void 0,
                              background: P === "insert" ? ie.toggleSelectedBg : "transparent",
                              color: P === "insert" ? ie.toggleSelectedText : ie.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": P === "insert" ? ie.toggleSelectedText : ie.toggleIdleTextHover
                            },
                            children: It.insertLabel
                          }
                        ),
                        g && /* @__PURE__ */ zt.jsx(
                          "button",
                          {
                            type: "button",
                            className: "element-selector-toggle",
                            onClick: (L) => {
                              L.preventDefault(), L.stopPropagation(), Kr("lasso");
                            },
                            style: {
                              border: P === "lasso" ? "1px solid " + ie.toggleSelectedBg : X === "light" ? "1px solid rgba(0, 0, 0, 0.24)" : "1px solid rgba(255, 255, 255, 0.32)",
                              borderRadius: "0 999px 999px 0",
                              padding: xe ? "10px 12px" : "6px 14px",
                              minHeight: xe ? "44px" : void 0,
                              cursor: "pointer",
                              fontWeight: P === "lasso" ? 600 : 500,
                              transition: "background-color 120ms ease, color 120ms ease",
                              boxShadow: "none",
                              transform: "none",
                              flex: xe ? 1 : void 0,
                              background: P === "lasso" ? ie.toggleSelectedBg : "transparent",
                              color: P === "lasso" ? ie.toggleSelectedText : ie.toggleIdleText,
                              "--es-toggle-bg": "transparent",
                              "--es-toggle-bg-hover": "transparent",
                              "--es-toggle-color": "inherit",
                              "--es-toggle-color-hover": P === "lasso" ? ie.toggleSelectedText : ie.toggleIdleTextHover
                            },
                            children: It.lassoLabel
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              !xe && /* @__PURE__ */ zt.jsx(
                "span",
                {
                  className: "element-selector-instruction",
                  style: {
                    color: ie.instructionTextColor,
                    fontWeight: 600,
                    flex: 1,
                    textAlign: "center",
                    lineHeight: 1.4,
                    fontSize: "15px"
                  },
                  children: On
                }
              ),
              /* @__PURE__ */ zt.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: xe ? "10px" : "8px",
                    width: void 0,
                    justifyContent: "flex-end",
                    flex: xe ? "1 1 auto" : void 0,
                    flexWrap: "nowrap"
                  },
                  children: [
                    Lr && /* @__PURE__ */ zt.jsx(
                      "button",
                      {
                        type: "button",
                        disabled: !Pn,
                        className: "element-selector-action element-selector-confirm",
                        onClick: (L) => {
                          L.preventDefault(), L.stopPropagation(), Pn && ha();
                        },
                        style: {
                          border: "none",
                          borderRadius: xe ? "10px" : "8px",
                          padding: xe ? "12px 14px" : "8px 12px",
                          minHeight: xe ? "44px" : void 0,
                          flex: xe ? "0 1 auto" : void 0,
                          cursor: Pn ? "pointer" : "not-allowed",
                          fontSize: xe ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": ie.actionBg,
                          "--es-action-bg-hover": ie.actionBgHover,
                          "--es-action-bg-disabled": ie.actionBgDisabled,
                          "--es-action-color": ie.actionColor,
                          "--es-action-color-hover": ie.actionColorHover,
                          "--es-action-color-disabled": ie.actionColorDisabled
                        },
                        "aria-label": It.confirmLabel,
                        children: It.confirmLabel
                      }
                    ),
                    /* @__PURE__ */ zt.jsx(
                      "button",
                      {
                        type: "button",
                        className: "element-selector-action element-selector-cancel",
                        onClick: (L) => {
                          L.preventDefault(), L.stopPropagation(), _();
                        },
                        style: {
                          border: "none",
                          borderRadius: xe ? "10px" : "8px",
                          padding: xe ? "12px 14px" : "8px 12px",
                          cursor: "pointer",
                          fontSize: xe ? "15px" : "14px",
                          fontWeight: 700,
                          transition: "background-color 120ms ease, color 120ms ease",
                          boxShadow: "none",
                          transform: "none",
                          "--es-action-bg": ie.actionBg,
                          "--es-action-bg-hover": ie.actionBgHover,
                          "--es-action-bg-disabled": ie.actionBgDisabled,
                          "--es-action-color": ie.actionColor,
                          "--es-action-color-hover": ie.actionColorHover,
                          "--es-action-color-disabled": ie.actionColorDisabled,
                          flex: xe ? "0 1 auto" : void 0,
                          marginLeft: xe ? "6px" : void 0
                        },
                        "aria-label": It.cancelLabel,
                        children: It.cancelLabel
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        yn && cr && /* @__PURE__ */ zt.jsx(
          "div",
          {
            style: {
              position: "fixed",
              pointerEvents: "none",
              zIndex: 100002,
              left: `${cr.left}px`,
              top: `${cr.top}px`,
              width: `${cr.width}px`,
              height: `${cr.height}px`,
              border: "2px dashed #38bdf8",
              background: "rgba(56, 189, 248, 0.12)",
              borderRadius: "10px",
              boxShadow: "0 0 18px rgba(56, 189, 248, 0.35)"
            }
          }
        ),
        yn && St.map((L, fe) => /* @__PURE__ */ zt.jsx(
          w0,
          {
            targetElement: L,
            onDeselect: () => {
            },
            variant: "passive",
            rect: Ce.get(L) ?? null
          },
          `lasso-${fe}`
        )),
        P === "select" && we && (!ce || !je.includes(we)) && !xe && /* @__PURE__ */ zt.jsx(
          Ak,
          {
            targetElement: we,
            friendlySelectors: ee,
            rect: Ce.get(we) ?? null
          }
        ),
        P === "insert" && Ue && /* @__PURE__ */ zt.jsx(
          Lx,
          {
            element: Ue.element,
            position: Ue.position,
            axis: Ue.axis,
            friendlySelectors: ee,
            rect: Ce.get(Ue.element) ?? null
          }
        ),
        (ce || xe && je.length > 0) && je.map((L, fe) => /* @__PURE__ */ zt.jsx(
          w0,
          {
            targetElement: L,
            onDeselect: () => jn(L),
            rect: Ce.get(L) ?? null
          },
          `selected-${fe}`
        )),
        /* @__PURE__ */ zt.jsx("style", { children: `
        body {
          cursor: ${rt ? "crosshair" : "default"} !important;
        }
        body * {
          cursor: ${rt ? "crosshair" : "default"} !important;
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
let di = null, uc = null;
function Bk() {
  return di && uc || (di = document.createElement("div"), di.id = "element-selector-persistent-highlights", di.style.position = "fixed", di.style.inset = "0", di.style.pointerEvents = "none", di.style.zIndex = "99998", document.body.appendChild(di), uc = _x.createRoot(di)), uc;
}
function Vk({
  elements: S,
  friendlySelectors: _
}) {
  const b = at.useMemo(
    () => S.map((W) => W.element),
    [S]
  ), ee = Mx(b);
  return S.length ? /* @__PURE__ */ zt.jsx(zt.Fragment, { children: S.map((W, Q) => {
    const g = ee.get(W.element) ?? null;
    return W.mode === "insert" && W.insertionPosition && W.insertionAxis ? /* @__PURE__ */ zt.jsx(
      Lx,
      {
        element: W.element,
        position: W.insertionPosition,
        axis: W.insertionAxis,
        friendlySelectors: _,
        rect: g
      },
      `persistent-insert-${Q}`
    ) : /* @__PURE__ */ zt.jsx(
      w0,
      {
        targetElement: W.element,
        onDeselect: () => {
        },
        variant: "passive",
        rect: g
      },
      `persistent-select-${Q}`
    );
  }) }) : null;
}
function $k(S, _) {
  if (!S.length) return;
  Bk().render(
    /* @__PURE__ */ zt.jsx(Tx.StrictMode, { children: /* @__PURE__ */ zt.jsx(Vk, { elements: S, friendlySelectors: _ }) })
  );
}
const Ik = (S) => {
  const b = (S.innerText ?? S.textContent ?? "").toString().replace(/\s+/g, " ").trim(), ee = 1024;
  return b.length <= ee ? b : `${b.slice(0, ee)}<!-- SNIPPET FOR BREVITY -->`;
}, ry = (S) => S ? {
  element: S,
  html: S.outerHTML ?? null,
  classes: S.className || null,
  id: S.id || null,
  textPreview: Ik(S),
  tag: S.tagName.toLowerCase(),
  selector: Dx(S)
} : {
  element: null,
  html: null,
  classes: null,
  id: null,
  textPreview: null,
  tag: null,
  selector: null
}, Yk = (S) => {
  const _ = [];
  _.push("The user has selected an HTML element:");
  const b = S.selectedElementTag ? `tag: "${S.selectedElementTag}"` : null;
  b && _.push(b), S.selectedElementId && _.push(`id: "#${S.selectedElementId}"`), S.selectedElementClasses && _.push(`class: "${S.selectedElementClasses}"`), S.selectedSrc && _.push(`source code ref: "${S.selectedSrc}"`);
  const ee = S.beforeSrc && S.beforeSrc !== S.selectedSrc, W = S.afterSrc && S.afterSrc !== S.selectedSrc;
  return ee && _.push(`source code ref BEFORE the selected element: "${S.beforeSrc}"`), W && _.push(`source code ref AFTER the selected element: "${S.afterSrc}"`), S.selectedElementHtml && _.push("", "source:", "```html", S.selectedElementHtml, "```"), S.elementBeforeHtml && _.push(
    "",
    "This is the element BEFORE the selected element:",
    "",
    "```html",
    S.elementBeforeHtml,
    "```"
  ), S.elementAfterHtml && _.push(
    "",
    "This is the element AFTER the selected element:",
    "",
    "```html",
    S.elementAfterHtml,
    "```"
  ), _.join(`
`);
}, Wk = (S) => {
  const _ = [];
  _.push("The user has selected an insertion point:");
  const b = !!S.srcBefore, ee = !!S.srcAfter;
  return b && ee && S.srcBefore === S.srcAfter && S.srcBefore ? _.push(`source code around the insertion point: "${S.srcBefore}"`) : (S.srcBefore && _.push(`source code ref BEFORE the insertion point: "${S.srcBefore}"`), S.srcAfter && _.push(`source code ref AFTER the insertion point: "${S.srcAfter}"`)), S.htmlWithMarker && _.push("", "```html", S.htmlWithMarker, "```"), _.join(`
`);
}, vl = (S, _) => {
  if (!S) return S;
  const b = _ === !1 ? null : _ === !0 || _ === void 0 ? 2e3 : typeof _ == "number" && _ > 0 ? _ : null;
  if (!b) return S;
  const ee = Math.max(1, Math.floor(b / 2));
  if (S.length <= b) return S;
  const W = S.slice(0, ee), Q = S.slice(-ee);
  return `${W}
<!-- SNIPPED FOR BREVITY -->
${Q}`;
};
function Qk(S, _) {
  if (S.mode === "insert") {
    const le = S.insertionPosition ?? "after", Y = le === "before" ? S.element.previousElementSibling : S.element, X = le === "before" ? S.element : S.element.nextElementSibling, ve = ry(Y), q = ry(X), P = vl(
      S.insertionBeforeHtml ?? S.beforeHtml,
      _.snipHtml
    ) ?? "", K = vl(
      S.insertionAfterHtml ?? S.afterHtml,
      _.snipHtml
    ) ?? "", ce = {
      mode: "insert",
      htmlBefore: P,
      elementBefore: ve.element,
      htmlAfter: K,
      elementAfter: q.element,
      elementBeforeHtml: vl(
        ve.html,
        _.snipElementHtml
      ),
      elementAfterHtml: vl(
        q.html,
        _.snipElementHtml
      ),
      htmlWithMarker: `${vl(ve.html, _.snipElementHtml) ?? ""}
<!-- INSERTION POINT -->
${vl(q.html, _.snipElementHtml) ?? ""}`,
      srcBefore: S.beforeSrc,
      srcAfter: S.afterSrc,
      routeIdBefore: S.beforeRouteId,
      routeIdAfter: S.afterRouteId,
      routeFileBefore: S.beforeRouteFile,
      routeFileAfter: S.afterRouteFile,
      elementBeforeClasses: ve.classes,
      elementBeforeId: ve.id,
      elementBeforeTextPreview: ve.textPreview,
      elementBeforeTag: ve.tag,
      elementBeforeSelector: ve.selector,
      elementAfterClasses: q.classes,
      elementAfterId: q.id,
      elementAfterTextPreview: q.textPreview,
      elementAfterTag: q.tag,
      elementAfterSelector: q.selector,
      markdownSummary: ""
    };
    return ce.markdownSummary = Wk(ce), ce;
  }
  const b = S.element.previousElementSibling, ee = S.element.nextElementSibling, W = ry(b), Q = ry(ee), g = {
    mode: "select",
    selectedElement: S.element,
    htmlBefore: vl(S.beforeHtml, _.snipHtml) ?? "",
    elementBefore: W.element,
    elementBeforeHtml: vl(
      W.html,
      _.snipElementHtml
    ),
    htmlAfter: vl(S.afterHtml, _.snipHtml) ?? "",
    elementAfter: Q.element,
    elementAfterHtml: vl(
      Q.html,
      _.snipElementHtml
    ),
    selectedSrc: S.src,
    selectedRouteId: S.routeId,
    selectedRouteFile: S.routeFile,
    selectedElementHtml: vl(S.elementHtml, _.snipElementHtml) ?? "",
    selectedElementClasses: S.classes,
    selectedElementId: S.id,
    selectedElementTextPreview: S.textPreview,
    selectedElementTag: S.tag,
    selectedElementSelector: S.selector,
    beforeSrc: S.beforeSrc,
    afterSrc: S.afterSrc,
    markdownSummary: ""
  };
  return g.markdownSummary = Yk(g), g;
}
function Gk() {
  uc && (uc.unmount(), uc = null), di?.parentNode && di.parentNode.removeChild(di), di = null;
}
function Zk(S = {}) {
  const {
    multiSelect: _ = !1,
    friendlySelectors: b = !1,
    mode: ee = "select",
    allowModeToggle: W = !0,
    lasso: Q = !1,
    retainSelectionHighlights: g = !1,
    optionsPanelPosition: le,
    selectionBarText: Y,
    theme: X = "dark",
    debug: ve = !1,
    snipElementHtml: q = !0,
    snipHtml: P = !0
  } = S;
  return Gk(), new Promise((K, ce) => {
    const ie = document.createElement("div");
    ie.id = "element-selector-root", ie.style.position = "fixed", ie.style.zIndex = "999999", ie.style.inset = "0", ie.style.pointerEvents = "none", document.body.appendChild(ie);
    const we = _x.createRoot(ie), Ct = () => {
      we.unmount(), ie.parentNode && ie.parentNode.removeChild(ie);
    }, Ue = {
      snipElementHtml: q,
      snipHtml: P
    }, Fe = (De) => {
      g && $k(De, b);
      const rt = De.map(
        (Me) => Qk(Me, Ue)
      );
      if (Ct(), !_ && rt.length === 1) {
        K(rt[0]);
        return;
      }
      K(rt);
    }, je = () => {
      Ct(), ce(new Error("Element selection cancelled by user"));
    };
    we.render(
      /* @__PURE__ */ zt.jsx(Tx.StrictMode, { children: /* @__PURE__ */ zt.jsx(
        Pk,
        {
          onElementSelected: Fe,
          onCancel: je,
          multiSelect: _,
          friendlySelectors: b,
          initialMode: ee,
          allowModeToggle: W,
          lasso: Q,
          optionsPanelPosition: le,
          selectionBarText: Y,
          theme: X,
          debug: ve
        }
      ) })
    );
  });
}
export {
  Pk as ElementSelector,
  Dx as buildElementSelector,
  x0 as findElementAtCoordinates,
  Zk as launchSelector,
  Gk as resetSelectionHighlights
};
