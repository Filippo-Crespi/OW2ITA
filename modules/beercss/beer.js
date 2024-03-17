export default (() => {
  let k, F, N, P;
  const s = { light: "", dark: "" },
    Z = [];
  async function X(t) {
    return await new Promise((n) => setTimeout(n, t));
  }
  function Y() {
    return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
      const n = (Math.random() * 16) | 0;
      return (t === "x" ? n : (n & 3) | 8).toString(16);
    });
  }
  function h(t, n) {
    try {
      return typeof t == "string"
        ? (n != null ? n : document).querySelector(t)
        : t;
    } catch {
      return null;
    }
  }
  function l(t, n) {
    try {
      return typeof t == "string"
        ? (n != null ? n : document).querySelectorAll(t)
        : t != null
        ? t
        : Z;
    } catch {
      return Z;
    }
  }
  function f(t, n) {
    var e, r;
    return (r =
      (e = t == null ? void 0 : t.classList) == null
        ? void 0
        : e.contains(n)) != null
      ? r
      : !1;
  }
  function L(t, n) {
    var e;
    return (
      ((e = t == null ? void 0 : t.tagName) == null
        ? void 0
        : e.toLowerCase()) === n
    );
  }
  function m(t, n) {
    var e;
    return (
      ((e = t == null ? void 0 : t.type) == null ? void 0 : e.toLowerCase()) ===
      n
    );
  }
  function p(t, n) {
    var e;
    (e = t == null ? void 0 : t.classList) == null || e.add(n);
  }
  function u(t, n) {
    var e;
    (e = t == null ? void 0 : t.classList) == null || e.remove(n);
  }
  function g(t, n, e, r = !0) {
    t == null || t.addEventListener(n, e, r);
  }
  function G(t, n, e, r = !0) {
    t == null || t.removeEventListener(n, e, r);
  }
  function J(t, n) {
    var e;
    (e = n == null ? void 0 : n.parentNode) == null || e.insertBefore(t, n);
  }
  function D(t) {
    return t == null ? void 0 : t.previousElementSibling;
  }
  function H(t) {
    return t == null ? void 0 : t.nextElementSibling;
  }
  function T(t) {
    return t == null ? void 0 : t.parentElement;
  }
  function tt(t) {
    const n = document.createElement("div");
    for (const e in t) n.setAttribute(e, t[e]);
    return n;
  }
  function x(t) {
    const n = t;
    m(n, "number") && !n.value && (n.value = ""),
      n.placeholder || (n.placeholder = " "),
      t.getAttribute("data-ui") && V(t, null);
  }
  function nt(t) {
    V(t.currentTarget, null, null, t);
  }
  function et(t) {
    const n = t.currentTarget,
      e = T(n),
      r = h(
        "input:not([type=file], [type=checkbox], [type=radio]), select, textarea",
        e
      );
    r && r.focus();
  }
  function rt(t) {
    const n = t.currentTarget;
    x(n);
  }
  function at(t) {
    const n = t.currentTarget;
    x(n);
  }
  function Q(t) {
    G(document.body, "click", Q);
    const n = t.target;
    l("menu.active").forEach((r) => z(n, r, t));
  }
  function it(t) {
    const n = t.currentTarget;
    u(n, "active"), k && clearTimeout(k);
  }
  function ot(t) {
    const n = t.currentTarget;
    q(n);
  }
  function ct(t) {
    const n = t.currentTarget;
    I(n);
  }
  function ut(t) {
    const n = t.currentTarget;
    q(n, t);
  }
  function st(t) {
    const n = t.currentTarget;
    I(n, t);
  }
  function j() {
    F && clearTimeout(F),
      (F = setTimeout(() => {
        A();
      }, 180));
  }
  function q(t, n) {
    if (n && n.key === "Enter") {
      const i = D(t);
      return m(i, "file") ? i.click() : void 0;
    }
    const e = t,
      r = H(t);
    !m(r, "text") ||
      ((r.value = e.files
        ? Array.from(e.files)
            .map((i) => i.name)
            .join(", ")
        : ""),
      (r.readOnly = !0),
      g(r, "keydown", ut, !1),
      x(r));
  }
  function I(t, n) {
    if (n && n.key === "Enter") {
      const i = D(t);
      return m(i, "color") ? i.click() : void 0;
    }
    const e = t,
      r = H(t);
    !m(r, "text") ||
      ((r.readOnly = !0), (r.value = e.value), g(r, "keydown", st, !1), x(r));
  }
  function W(t) {
    const n = T(t),
      e = h("span", n),
      r = l("input", n);
    if (!r.length || !e) return;
    const i =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue("--size")
        ) || 16,
      c = (0.25 * i * 100) / r[0].offsetWidth,
      o = [],
      a = [];
    for (let y = 0; y < r.length; y++) {
      const B = parseFloat(r[y].min),
        O = parseFloat(r[y].max),
        K = parseFloat(r[y].value),
        E = B || 0,
        $ = O || 100,
        w = K || 0,
        R = ((w - E) * 100) / ($ - E),
        U = c / 2 - (c * R) / 100;
      o.push(R + U),
        a.push(w),
        B !== E && (r[y].min = `${E}`),
        O !== $ && (r[y].max = `${$}`),
        K !== w && (r[y].value = `${w}`);
    }
    let d = o[0],
      v = 0,
      b = 100 - v - d,
      S = a[0],
      M = a[1] || 0;
    r.length > 1 &&
      ((d = Math.abs(o[1] - o[0])),
      (v = o[1] > o[0] ? o[0] : o[1]),
      (b = 100 - v - d),
      M > S && ((S = a[1] || 0), (M = a[0]))),
      n.style.setProperty("---start", `${v}%`),
      n.style.setProperty("---end", `${b}%`),
      n.style.setProperty("---value1", `'${S}'`),
      n.style.setProperty("---value2", `'${M}'`);
  }
  function _(t) {
    if (t) {
      const e = t.target;
      if (e.type === "range") return W(e);
    }
    const n = l(".slider > input[type=range]");
    n.length ? g(globalThis, "input", _, !1) : G(globalThis, "input", _, !1),
      n.forEach(W);
  }
  async function V(t, n, e, r) {
    if (!(!n && ((n = h(t.getAttribute("data-ui"))), !n))) {
      if (L(n, "dialog")) return await ft(t, n);
      if (L(n, "menu")) return z(t, n, r);
      if (f(n, "snackbar")) return dt(t, n, e);
      if (f(n, "page")) return lt(t, n);
      if ((C(t), f(n, "active"))) return u(n, "active");
      p(n, "active");
    }
  }
  function C(t) {
    t.id && f(t, "page") && (t = h(`[data-ui="#${t.id}"]`));
    const n = T(t);
    if (!f(n, "tabs")) return;
    l("a", n).forEach((r) => u(r, "active")), p(t, "active");
  }
  function lt(t, n) {
    C(t);
    const e = T(n);
    if (e)
      for (let r = 0; r < e.children.length; r++)
        f(e.children[r], "page") && u(e.children[r], "active");
    p(n, "active");
  }
  function z(t, n, e) {
    N && clearTimeout(N),
      (N = setTimeout(() => {
        var i, c;
        if ((g(document.body, "click", Q), C(t), f(n, "active"))) {
          if (!e) return u(n, "active");
          const o = e.target,
            a = h((i = o.getAttribute("data-ui")) != null ? i : ""),
            d = o.closest("menu"),
            v = !h("menu", (c = o.closest("[data-ui]")) != null ? c : void 0);
          return a && a !== d ? z(o, a) : !a && !v && d ? !1 : u(n, "active");
        }
        l("menu.active").forEach((o) => u(o, "active")), p(n, "active");
      }, 90));
  }
  async function ft(t, n) {
    var d;
    (d = document.activeElement) == null || d.blur(), C(t);
    let e = D(n);
    const r = n,
      i = f(n, "active") || r.open,
      c = f(n, "modal"),
      o = T(n),
      a = L(o, "nav");
    f(e, "overlay") || ((e = tt({ class: "overlay" })), J(e, n), await X(90)),
      (e.onclick = () => {
        c || (u(t, "active"), u(n, "active"), u(e, "active"), r.close());
      }),
      a &&
        l("dialog, a, .overlay", o).forEach((b) => {
          u(b, "active"), b.open && b.close();
        }),
      i
        ? (u(t, "active"), u(e, "active"), u(n, "active"), r.close())
        : (!L(t, "button") &&
            !f(t, "button") &&
            !f(t, "chip") &&
            p(t, "active"),
          p(e, "active"),
          p(n, "active"),
          c ? r.showModal() : r.show());
  }
  function dt(t, n, e) {
    var i;
    (i = document.activeElement) == null || i.blur(),
      C(t),
      l(".snackbar.active").forEach((c) => u(c, "active")),
      p(n, "active"),
      g(n, "click", it),
      k && clearTimeout(k),
      e !== -1 &&
        (k = setTimeout(
          () => {
            u(n, "active");
          },
          e != null ? e : 6e3
        ));
  }
  function gt() {
    if (s.light && s.dark) return s;
    const t = document.createElement("body");
    (t.className = "light"), document.body.appendChild(t);
    const n = document.createElement("body");
    (n.className = "dark"), document.body.appendChild(n);
    const e = getComputedStyle(t),
      r = getComputedStyle(n),
      i = [
        "--primary",
        "--on-primary",
        "--primary-container",
        "--on-primary-container",
        "--secondary",
        "--on-secondary",
        "--secondary-container",
        "--on-secondary-container",
        "--tertiary",
        "--on-tertiary",
        "--tertiary-container",
        "--on-tertiary-container",
        "--error",
        "--on-error",
        "--error-container",
        "--on-error-container",
        "--background",
        "--on-background",
        "--surface",
        "--on-surface",
        "--surface-variant",
        "--on-surface-variant",
        "--outline",
        "--outline-variant",
        "--shadow",
        "--scrim",
        "--inverse-surface",
        "--inverse-on-surface",
        "--inverse-primary",
        "--surface-dim",
        "--surface-bright",
        "--surface-container-lowest",
        "--surface-container-low",
        "--surface-container",
        "--surface-container-high",
        "--surface-container-highest",
      ];
    for (let c = 0; c < i.length; c++)
      (s.light += i[c] + ":" + e.getPropertyValue(i[c]) + ";"),
        (s.dark += i[c] + ":" + r.getPropertyValue(i[c]) + ";");
    return document.body.removeChild(t), document.body.removeChild(n), s;
  }
  function yt(t) {
    if (!t || !globalThis.materialDynamicColors) return gt();
    const n = /dark/i.test(document.body.className) ? "dark" : "light";
    return t.light && t.dark
      ? ((s.light = t.light),
        (s.dark = t.dark),
        document.body.setAttribute("style", t[n]),
        t)
      : globalThis.materialDynamicColors(t).then((e) => {
          const r = (i) => {
            let c = "";
            for (const o in i) {
              const a = o
                  .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
                  .toLowerCase(),
                d = i[o];
              c += "--" + a + ":" + d + ";";
            }
            return c;
          };
          return (
            (s.light = r(e.light)),
            (s.dark = r(e.dark)),
            document.body.setAttribute("style", s[n]),
            s
          );
        });
  }
  function pt(t) {
    if (!t) return /dark/i.test(document.body.className) ? "dark" : "light";
    document.body.classList.remove("light", "dark"),
      document.body.classList.add(t);
    const n = t === "light" ? s.light : s.dark;
    return (
      globalThis.materialDynamicColors &&
        document.body.setAttribute("style", n),
      t
    );
  }
  function vt() {
    P ||
      ((P = new MutationObserver(j)),
      P.observe(document.body, { childList: !0, subtree: !0 }),
      j());
  }
  function A(t, n) {
    if (t) {
      if (t === "setup") return vt();
      if (t === "guid") return Y();
      if (t === "mode") return pt(n);
      if (t === "theme") return yt(n);
      const a = h(t);
      if (!a) return;
      V(a, a, n);
    }
    l("[data-ui]").forEach((a) => g(a, "click", nt)),
      l(".field > label").forEach((a) => g(a, "click", et)),
      l(
        ".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea"
      ).forEach((a) => {
        g(a, "focus", rt), g(a, "blur", at), x(a);
      }),
      l(".field > input[type=file]").forEach((a) => {
        g(a, "change", ot), q(a);
      }),
      l(".field > input[type=color]").forEach((a) => {
        g(a, "change", ct), I(a);
      }),
      _();
  }
  globalThis.addEventListener &&
    globalThis.addEventListener("load", async () => await A("setup"));
  globalThis.beercss = A;
  globalThis.ui = A;
  return globalThis.ui;
})();
