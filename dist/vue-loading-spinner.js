import { defineComponent as v, computed as n, openBlock as r, createElementBlock as o, normalizeStyle as c, createElementVNode as l, createStaticVNode as p, Fragment as z, renderList as y, normalizeClass as g, toDisplayString as m, ref as k } from "vue";
const w = /* @__PURE__ */ v({
  __name: "Circle",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (i, t) => (r(), o("svg", {
      style: c(s.value),
      class: "spinner spinner--circle",
      viewBox: "0 0 66 66",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...t[0] || (t[0] = [
      l("circle", {
        class: "path",
        fill: "none",
        "stroke-width": "6",
        "stroke-linecap": "round",
        cx: "33",
        cy: "33",
        r: "30"
      }, null, -1)
    ])], 4));
  }
}), b = (e, a) => {
  const s = e.__vccOpts || e;
  for (const [i, t] of a)
    s[i] = t;
  return s;
}, I = /* @__PURE__ */ b(w, [["__scopeId", "data-v-9169c0da"]]), S = /* @__PURE__ */ v({
  __name: "Circle2",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    secondaryColor: { default: "#35495e" },
    stroke: { default: "5px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size,
      border: a.stroke + " solid " + a.color,
      borderTopColor: a.secondaryColor
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--circle-2"
    }, null, 4));
  }
}), C = /* @__PURE__ */ b(S, [["__scopeId", "data-v-0e822796"]]), $ = /* @__PURE__ */ v({
  __name: "Circle3",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    dotSize: { default: 0 }
  },
  setup(e) {
    const a = e, s = n(() => {
      const i = parseInt(a.size), t = i / 3, d = a.dotSize || i / 3 + 1;
      return {
        width: a.size,
        height: a.size,
        border: "0px solid " + a.color,
        boxShadow: "0 -" + t + "px 0 " + d + "px " + a.color + " inset"
      };
    });
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--circle-3"
    }, null, 4));
  }
}), V = /* @__PURE__ */ b($, [["__scopeId", "data-v-b412acc6"]]), q = /* @__PURE__ */ v({
  __name: "Circle4",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--circle-4"
    }, null, 4));
  }
}), H = /* @__PURE__ */ b(q, [["__scopeId", "data-v-6a7dc9c6"]]), M = /* @__PURE__ */ v({
  __name: "Circle5",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--circle-5"
    }, null, 4));
  }
}), L = /* @__PURE__ */ b(M, [["__scopeId", "data-v-08f35be0"]]), D = { class: "anim-0" }, R = ["fill"], B = /* @__PURE__ */ v({
  __name: "Circle6",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (i, t) => (r(), o("svg", {
      style: c(s.value),
      class: "spinner spinner--circle-6",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100"
    }, [
      l("g", D, [
        l("circle", {
          cx: "50",
          cy: "50",
          r: "50",
          fill: e.color
        }, null, 8, R)
      ]),
      t[0] || (t[0] = p('<g class="anim-1" data-v-968bba93><circle cx="50" cy="50" r="5" fill="white" data-v-968bba93></circle></g><g class="anim-2" data-v-968bba93><circle cx="75" cy="50" r="5" fill="white" data-v-968bba93></circle><line x1="25" y1="50" x2="75" y2="50" stroke="white" stroke-width="3" data-v-968bba93></line></g><g class="anim-3" data-v-968bba93><circle cx="50" cy="25" r="5" fill="white" data-v-968bba93></circle><line x1="50" y1="25" x2="25" y2="75" stroke="white" stroke-width="3" data-v-968bba93></line><line x1="50" y1="25" x2="75" y2="75" stroke="white" stroke-width="3" data-v-968bba93></line></g><g class="anim-4" data-v-968bba93><circle cx="75" cy="25" r="5" fill="white" data-v-968bba93></circle><line x1="75" y1="25" x2="25" y2="25" stroke="white" stroke-width="3" data-v-968bba93></line></g>', 4))
    ], 4));
  }
}), P = /* @__PURE__ */ b(B, [["__scopeId", "data-v-968bba93"]]), G = /* @__PURE__ */ v({
  __name: "Circle7",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => {
      const i = parseInt(a.size);
      return {
        width: a.size,
        height: a.size,
        transform: "scale(" + i / 75 + ")"
      };
    });
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--circle-7"
    }, [...t[0] || (t[0] = [
      l("div", { class: "spinner-inner" }, null, -1)
    ])], 4));
  }
}), O = /* @__PURE__ */ b(G, [["__scopeId", "data-v-bcc23681"]]), T = /* @__PURE__ */ v({
  __name: "Circle8",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: "scale(" + parseInt(a.size) / 44 + ")"
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--circle-8"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        p('<div class="ball-container" data-v-2f5b8987><div class="contener_mixte" data-v-2f5b8987><div class="ballcolor ball_1" data-v-2f5b8987> </div></div><div class="contener_mixte" data-v-2f5b8987><div class="ballcolor ball_2" data-v-2f5b8987> </div></div><div class="contener_mixte" data-v-2f5b8987><div class="ballcolor ball_3" data-v-2f5b8987> </div></div><div class="contener_mixte" data-v-2f5b8987><div class="ballcolor ball_4" data-v-2f5b8987> </div></div></div>', 1)
      ])], 4)
    ], 4));
  }
}), N = /* @__PURE__ */ b(T, [["__scopeId", "data-v-2f5b8987"]]), j = /* @__PURE__ */ v({
  __name: "Circle9",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: "scale(" + parseInt(a.size) / 120 + ")"
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--circle-9"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        p('<div class="loading spin-1" data-v-68eb9164><div class="loading spin-2" data-v-68eb9164><div class="loading spin-3" data-v-68eb9164><div class="loading spin-4" data-v-68eb9164><div class="loading spin-5" data-v-68eb9164><div class="loading spin-6" data-v-68eb9164></div></div></div></div></div></div>', 1)
      ])], 4)
    ], 4));
  }
}), E = /* @__PURE__ */ b(j, [["__scopeId", "data-v-68eb9164"]]), J = /* @__PURE__ */ v({
  __name: "Circle10",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: "scale(" + parseInt(a.size) / 100 + ")"
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--circle-10"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        l("div", { class: "loader-xbox" }, null, -1)
      ])], 4)
    ], 4));
  }
}), A = /* @__PURE__ */ b(J, [["__scopeId", "data-v-7a7dd8d0"]]), W = /* @__PURE__ */ v({
  __name: "Circle11",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--circle-11"
    }, [...t[0] || (t[0] = [
      l("div", { class: "spinner-inner" }, null, -1)
    ])], 4));
  }
}), F = /* @__PURE__ */ b(W, [["__scopeId", "data-v-b261fc0a"]]), K = /* @__PURE__ */ v({
  __name: "CubeShadow",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    duration: { default: "1.8s" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size,
      backgroundColor: a.color,
      animationDuration: a.duration
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--cube-shadow"
    }, null, 4));
  }
}), Q = /* @__PURE__ */ b(K, [["__scopeId", "data-v-cc0a9a30"]]), U = /* @__PURE__ */ v({
  __name: "Diamond",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => {
      const t = parseInt(a.size);
      return {
        width: t / 4 + "px",
        height: t / 4 + "px",
        "--bg-color": a.color
      };
    }), i = n(() => {
      const t = parseInt(a.size);
      return {
        width: a.size,
        height: t / 4 + "px"
      };
    });
    return (t, d) => (r(), o("span", {
      style: c(i.value),
      class: "spinner spinner--rotate-diamond"
    }, [
      l("div", {
        style: c(s.value),
        class: "diamond"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "diamond"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "diamond"
      }, null, 4)
    ], 4));
  }
}), X = /* @__PURE__ */ b(U, [["__scopeId", "data-v-283891d8"]]), Y = /* @__PURE__ */ v({
  __name: "DoubleBounce",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    duration: { default: "2.0s" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      backgroundColor: a.color,
      animationDuration: a.duration
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--double-bounce"
    }, [
      l("div", {
        class: "double-bounce1",
        style: c(s.value)
      }, null, 4),
      l("div", {
        class: "double-bounce2",
        style: c(s.value)
      }, null, 4)
    ], 4));
  }
}), Z = /* @__PURE__ */ b(Y, [["__scopeId", "data-v-39230f84"]]), aa = /* @__PURE__ */ v({
  __name: "Gauge",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: "scale(" + parseInt(a.size) / 60 + ")"
    })), i = n(() => {
      const t = parseInt(a.size);
      return {
        width: a.size,
        height: t / 2 + "px"
      };
    });
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--gauge"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, null, 4)
    ], 4));
  }
}), sa = /* @__PURE__ */ b(aa, [["__scopeId", "data-v-7207c0db"]]), ea = /* @__PURE__ */ v({
  __name: "Google",
  props: {
    size: { default: "40px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--google"
    }, null, 4));
  }
}), ta = /* @__PURE__ */ b(ea, [["__scopeId", "data-v-f4fb3943"]]), ca = /* @__PURE__ */ v({
  __name: "Hexagon",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    spinnerColor: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: `scale(${parseInt(a.size) / 164})`,
      "--bg-color": a.color,
      "--spinner-color": a.spinnerColor
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--hexagon"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        p('<ul class="hexagon-container" data-v-92f60cd3><li class="hexagon hex_1" data-v-92f60cd3></li><li class="hexagon hex_2" data-v-92f60cd3></li><li class="hexagon hex_3" data-v-92f60cd3></li><li class="hexagon hex_4" data-v-92f60cd3></li><li class="hexagon hex_5" data-v-92f60cd3></li><li class="hexagon hex_6" data-v-92f60cd3></li><li class="hexagon hex_7" data-v-92f60cd3></li></ul>', 1)
      ])], 4)
    ], 4));
  }
}), ia = /* @__PURE__ */ b(ca, [["__scopeId", "data-v-92f60cd3"]]), la = /* @__PURE__ */ v({
  __name: "HourGlass",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: `scale(${parseInt(a.size) / 64})`,
      "--bg-color": a.color
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--hour-glass"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        l("svg", {
          class: "hourglass",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 120 206",
          preserveAspectRatio: "none"
        }, [
          l("path", {
            class: "middle",
            d: "M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z"
          }),
          l("path", {
            class: "outer",
            d: "M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z"
          })
        ], -1)
      ])], 4)
    ], 4));
  }
}), na = /* @__PURE__ */ b(la, [["__scopeId", "data-v-f7e1a4fa"]]), da = { class: "spinner spinner--jawn" }, ra = /* @__PURE__ */ v({
  __name: "Jawn",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: `scale(${parseInt(a.size) / 70})`
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", da, [
      l("div", {
        style: c(i.value),
        class: "spinner-inner"
      }, [
        l("div", {
          style: c(s.value),
          class: "jawn"
        }, null, 4)
      ], 4)
    ]));
  }
}), oa = /* @__PURE__ */ b(ra, [["__scopeId", "data-v-1529f143"]]), va = /* @__PURE__ */ v({
  __name: "Jumper",
  props: {
    size: { default: "50px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size
    })), i = n(() => ({
      ...s.value,
      "--bg-color": a.color
    }));
    return (t, d) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--jumper"
    }, [
      l("div", {
        style: c(i.value)
      }, null, 4),
      l("div", {
        style: c(i.value)
      }, null, 4),
      l("div", {
        style: c(i.value)
      }, null, 4)
    ], 4));
  }
}), ba = /* @__PURE__ */ b(va, [["__scopeId", "data-v-ebb33dd6"]]), ua = { class: "cube panelLoad" }, pa = /* @__PURE__ */ v({
  __name: "LetterCube",
  props: {
    size: { default: "40px" },
    letters: { default: () => ["A", "E", "G", "O", "N", "P"] },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: `scale(${parseInt(a.size) / 2 / 75})`,
      "--bg-color": a.color
    })), i = n(() => ({
      width: a.size,
      height: a.size
    })), t = n(() => ["front", "back", "left", "right", "bottom", "top"].map((h, u) => ({
      side: h,
      letter: a.letters[u]
    })));
    return (d, h) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--socker"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [
        l("div", ua, [
          (r(!0), o(z, null, y(t.value, ({ side: u, letter: _ }) => (r(), o("div", {
            key: u,
            class: g(`cube-face cube-face-${u}`)
          }, m(_), 3))), 128))
        ])
      ], 4)
    ], 4));
  }
}), ha = /* @__PURE__ */ b(pa, [["__scopeId", "data-v-747be002"]]), _a = /* @__PURE__ */ v({
  __name: "Mikepad",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: `scale(${parseInt(a.size) / 31})`,
      "--bg-color": a.color
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--mikepad"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        p('<div class="binding" data-v-bf144757></div><div class="pad" data-v-bf144757><div class="line line1" data-v-bf144757></div><div class="line line2" data-v-bf144757></div><div class="line line3" data-v-bf144757></div></div>', 2)
      ])], 4)
    ], 4));
  }
}), xa = /* @__PURE__ */ b(_a, [["__scopeId", "data-v-bf144757"]]), fa = /* @__PURE__ */ v({
  __name: "Origami",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    secondaryColor: { default: "#31855e" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: `scale(${parseInt(a.size) / 60})`,
      "--bg-color": a.color,
      "--secondary-color": a.secondaryColor
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner-origami"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner loading"
      }, [...d[0] || (d[0] = [
        p('<span class="slice" data-v-9246adaf></span><span class="slice" data-v-9246adaf></span><span class="slice" data-v-9246adaf></span><span class="slice" data-v-9246adaf></span><span class="slice" data-v-9246adaf></span><span class="slice" data-v-9246adaf></span>', 6)
      ])], 4)
    ], 4));
  }
}), za = /* @__PURE__ */ b(fa, [["__scopeId", "data-v-9246adaf"]]), ya = /* @__PURE__ */ v({
  __name: "Pencil",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: "auto",
      fill: a.color
    }));
    return (i, t) => (r(), o("svg", {
      style: c(s.value),
      class: "spinner spinner--pencil",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 677.34762 182.15429"
    }, [...t[0] || (t[0] = [
      l("g", null, [
        l("path", {
          class: "body-pencil",
          d: "M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z"
        }),
        l("path", {
          class: "line",
          d: "M134.482 157.147v25l518.57.008.002-25-518.572-.008z"
        })
      ], -1)
    ])], 4));
  }
}), ga = /* @__PURE__ */ b(ya, [["__scopeId", "data-v-8e655a93"]]), ma = /* @__PURE__ */ v({
  __name: "PingPong",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    ballColor: { default: "#f7484e" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: `scale(${parseInt(a.size) / 250})`,
      "--bg-color": a.color,
      "--ball-color": a.ballColor
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--ping-pong"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        l("div", { class: "board" }, [
          l("div", { class: "left" }),
          l("div", { class: "right" }),
          l("div", { class: "ball" })
        ], -1)
      ])], 4)
    ], 4));
  }
}), ka = /* @__PURE__ */ b(ma, [["__scopeId", "data-v-b35d7638"]]), wa = /* @__PURE__ */ v({
  __name: "Plane",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    secondaryColor: { default: "#32855f" }
  },
  setup(e) {
    const a = e, s = n(() => {
      const t = parseInt(a.size);
      return {
        width: t + "px",
        height: a.size,
        transform: `scale(${t / 70})`,
        "--bg-color": a.color,
        "--secondary-color": a.secondaryColor
      };
    }), i = n(() => ({
      width: parseInt(a.size) + "px",
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--plane"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        p('<div id="top" class="mask" data-v-04610faf><div class="plane" data-v-04610faf></div></div><div id="middle" class="mask" data-v-04610faf><div class="plane" data-v-04610faf></div></div><div id="bottom" class="mask" data-v-04610faf><div class="plane" data-v-04610faf></div></div>', 3)
      ])], 4)
    ], 4));
  }
}), Ia = /* @__PURE__ */ b(wa, [["__scopeId", "data-v-04610faf"]]), Sa = /* @__PURE__ */ v({
  __name: "RotateSquare",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    duration: { default: "1.2s" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      backgroundColor: a.color,
      width: a.size,
      height: a.size,
      animationDuration: a.duration
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--rotate-square"
    }, null, 4));
  }
}), Ca = /* @__PURE__ */ b(Sa, [["__scopeId", "data-v-666c8fb0"]]), $a = /* @__PURE__ */ v({
  __name: "RotateSquare2",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size,
      "--bg-color": a.color
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--rotate-square-2"
    }, null, 4));
  }
}), Va = /* @__PURE__ */ b($a, [["__scopeId", "data-v-feda27c2"]]), qa = ["fill"], Ha = /* @__PURE__ */ v({
  __name: "RotateSquare3",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (i, t) => (r(), o("svg", {
      style: c(s.value),
      class: "spinner spinner--cube",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 500.00001 500.00001"
    }, [
      l("g", { fill: e.color }, [...t[0] || (t[0] = [
        p('<path class="b0" d="M66.734 66.734v366.533h366.532V66.734H66.734zm15 15h336.532v336.533H81.734V81.734z" data-v-9b5aa1f9></path><path class="b2" d="M354.16 2.5v143.34H497.5V2.5H354.16zm10 10H487.5v123.34H364.16V12.5z" data-v-9b5aa1f9></path><path class="b1" d="M0 2.5v143.34h143.34V2.5H0zm10 10h123.34v123.34H10V12.5z" data-v-9b5aa1f9></path><path class="b3" d="M354.16 356.66V500H497.5V356.66H354.16zm10 10H487.5V490H364.16V366.66z" data-v-9b5aa1f9></path><path class="b4" d="M0 356.66V500h143.34V356.66H0zm10 10h123.34V490H10V366.66z" data-v-9b5aa1f9></path>', 5)
      ])], 8, qa)
    ], 4));
  }
}), Ma = /* @__PURE__ */ b(Ha, [["__scopeId", "data-v-9b5aa1f9"]]), La = /* @__PURE__ */ v({
  __name: "RotateSquare4",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size,
      "--bg-color": a.color
    }));
    return (i, t) => (r(), o("span", {
      style: c(s.value),
      class: "spinner spinner--rotate-square4"
    }, [...t[0] || (t[0] = [
      l("span", { class: "loader-inner" }, null, -1)
    ])], 4));
  }
}), Da = /* @__PURE__ */ b(La, [["__scopeId", "data-v-45d72dc2"]]), Ra = /* @__PURE__ */ v({
  __name: "RotateSquare5",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: `scale(${parseInt(a.size) / 80})`,
      "--bg-color": a.color
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--rotate-square-5"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        l("span", { class: "load3 one" }, null, -1),
        l("span", { class: "load3 two" }, null, -1),
        l("span", { class: "load3-center" }, null, -1)
      ])], 4)
    ], 4));
  }
}), Ba = /* @__PURE__ */ b(Ra, [["__scopeId", "data-v-6057632b"]]), Pa = /* @__PURE__ */ v({
  __name: "RotateSquare6",
  props: {
    size: { default: "90px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e;
    function s(u) {
      const _ = 45 * Math.PI / 180, x = Math.abs(Math.cos(_)), f = Math.abs(Math.sin(_));
      return (u * f - u * x) / (Math.pow(f, 2) - Math.pow(x, 2));
    }
    const i = n(() => s(parseInt(a.size))), t = n(() => {
      const u = i.value + "px";
      return {
        border: "2px solid " + a.color,
        width: u,
        height: u
      };
    }), d = n(() => {
      const u = s(i.value) + "px";
      return {
        border: "2px solid " + a.color,
        width: u,
        height: u
      };
    }), h = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (u, _) => (r(), o("div", {
      style: c(h.value),
      class: "spinner spinner--rotate-square-6"
    }, [
      l("div", {
        style: c(t.value),
        class: "inner-square inner-square-1"
      }, null, 4),
      l("div", {
        style: c(d.value),
        class: "inner-square inner-square-2"
      }, null, 4)
    ], 4));
  }
}), Ga = /* @__PURE__ */ b(Pa, [["__scopeId", "data-v-604a0005"]]), Oa = /* @__PURE__ */ v({
  __name: "ScaleOut",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    duration: { default: "1.0s" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size,
      backgroundColor: a.color,
      animationDuration: a.duration
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--scale-out"
    }, null, 4));
  }
}), Ta = /* @__PURE__ */ b(Oa, [["__scopeId", "data-v-841d084f"]]), Na = /* @__PURE__ */ v({
  __name: "Socket",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    secondaryColor: { default: "#286b4b" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      transform: `scale(${parseInt(a.size) / 220})`,
      "--bg-color": a.color,
      "--secondary-color": a.secondaryColor
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--socker"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, [...d[0] || (d[0] = [
        p('<div class="gel center-gel" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c1 r1" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c2 r1" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c3 r1" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c4 r1" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c5 r1" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c6 r1" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c7 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c8 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c9 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c10 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c11 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c12 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c13 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c14 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c15 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c16 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c17 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c18 r2" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c19 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c20 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c21 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c22 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c23 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c24 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c25 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c26 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c28 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c29 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c30 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c31 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c32 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c33 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c34 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c35 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c36 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div><div class="gel c37 r3" data-v-1a03cbba><div class="hex-brick h1" data-v-1a03cbba></div><div class="hex-brick h2" data-v-1a03cbba></div><div class="hex-brick h3" data-v-1a03cbba></div></div>', 37)
      ])], 4)
    ], 4));
  }
}), ja = /* @__PURE__ */ b(Na, [["__scopeId", "data-v-1a03cbba"]]), Ea = /* @__PURE__ */ v({
  __name: "SpinLine",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    stroke: { default: "5px" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.stroke,
      background: a.color,
      borderRadius: a.stroke
    })), i = n(() => {
      const t = parseInt(a.size);
      return {
        width: a.size,
        height: a.size,
        transform: "scale(" + t / 75 + ")"
      };
    });
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--spin-line"
    }, [
      l("div", {
        style: c(s.value),
        class: "spinner-inner"
      }, null, 4)
    ], 4));
  }
}), Ja = /* @__PURE__ */ b(Ea, [["__scopeId", "data-v-5417f831"]]), Aa = /* @__PURE__ */ v({
  __name: "SquareGrid",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    duration: { default: "1.3s" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      backgroundColor: a.color,
      animationDuration: a.duration
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--square-grid"
    }, [
      l("div", {
        style: c(s.value),
        class: "sk-cube sk-cube1"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "sk-cube sk-cube2"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "sk-cube sk-cube3"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "sk-cube sk-cube4"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "sk-cube sk-cube5"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "sk-cube sk-cube6"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "sk-cube sk-cube7"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "sk-cube sk-cube8"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "sk-cube sk-cube9"
      }, null, 4)
    ], 4));
  }
}), Wa = /* @__PURE__ */ b(Aa, [["__scopeId", "data-v-0231a949"]]), Fa = /* @__PURE__ */ v({
  __name: "Stretch",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    duration: { default: "1.2s" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      backgroundColor: a.color,
      animationDuration: a.duration
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--stretch"
    }, [
      l("div", {
        style: c(s.value),
        class: "rect rect-1"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "rect rect-2"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "rect rect-3"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "rect rect-4"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "rect rect-5"
      }, null, 4)
    ], 4));
  }
}), Ka = /* @__PURE__ */ b(Fa, [["__scopeId", "data-v-49810f9b"]]), Qa = /* @__PURE__ */ v({
  __name: "Texture",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      width: a.size,
      height: a.size,
      "--bg-color": a.color
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--texture"
    }, null, 4));
  }
}), Ua = /* @__PURE__ */ b(Qa, [["__scopeId", "data-v-b620beae"]]), Xa = /* @__PURE__ */ v({
  __name: "ThreeDots",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      borderColor: a.color
    })), i = n(() => ({
      borderColor: a.color,
      background: a.color
    })), t = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (d, h) => (r(), o("div", {
      style: c(t.value),
      class: "spinner"
    }, [
      l("div", {
        style: c(s.value),
        class: "blob top"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "blob bottom"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "blob left"
      }, null, 4),
      l("div", {
        style: c(i.value),
        class: "blob move-blob"
      }, null, 4)
    ], 4));
  }
}), Ya = /* @__PURE__ */ b(Xa, [["__scopeId", "data-v-9c6be44a"]]), Za = /* @__PURE__ */ v({
  __name: "TwoCube",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" },
    duration: { default: "1.8s" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      backgroundColor: a.color,
      animationName: "sk-cubemove",
      animationDuration: a.duration
    })), i = n(() => ({
      width: a.size,
      height: a.size
    }));
    return (t, d) => (r(), o("div", {
      style: c(i.value),
      class: "spinner spinner--two-cube"
    }, [
      l("div", {
        style: c(s.value),
        class: "cube1"
      }, null, 4),
      l("div", {
        style: c(s.value),
        class: "cube2"
      }, null, 4)
    ], 4));
  }
}), as = /* @__PURE__ */ b(Za, [["__scopeId", "data-v-d9787091"]]), ss = /* @__PURE__ */ v({
  __name: "Wave",
  props: {
    size: { default: "40px" },
    color: { default: "#41b883" }
  },
  setup(e) {
    const a = e, s = n(() => ({
      border: "1px solid " + a.color,
      width: a.size,
      height: a.size
    }));
    return (i, t) => (r(), o("div", {
      style: c(s.value),
      class: "spinner spinner--wave"
    }, [...t[0] || (t[0] = [
      l("div", null, null, -1),
      l("div", null, null, -1),
      l("div", null, null, -1)
    ])], 4));
  }
}), es = /* @__PURE__ */ b(ss, [["__scopeId", "data-v-f76de885"]]);
function is(e) {
  return { sizeStyle: n(() => ({
    width: e.size,
    height: e.size
  })) };
}
function ls(e, a) {
  const s = n(() => ({
    width: e.size,
    height: e.size
  })), i = n(() => {
    const t = {
      transform: `scale(${parseInt(e.size) / a})`
    };
    return e.color && (t["--bg-color"] = e.color), t;
  });
  return { sizeStyle: s, innerStyle: i };
}
function ns(e = !1) {
  const a = k(e);
  return { isLoading: a, startLoading: () => {
    a.value = !0;
  }, stopLoading: () => {
    a.value = !1;
  }, withLoading: async (d) => {
    a.value = !0;
    try {
      return await d();
    } finally {
      a.value = !1;
    }
  } };
}
const ts = {
  Circle: I,
  Circle2: C,
  Circle3: V,
  Circle4: H,
  Circle5: L,
  Circle6: P,
  Circle7: O,
  Circle8: N,
  Circle9: E,
  Circle10: A,
  Circle11: F,
  CubeShadow: Q,
  Diamond: X,
  DoubleBounce: Z,
  Gauge: sa,
  Google: ta,
  Hexagon: ia,
  HourGlass: na,
  Jawn: oa,
  Jumper: ba,
  LetterCube: ha,
  MikePad: xa,
  Origami: za,
  Pencil: ga,
  PingPong: ka,
  Plane: Ia,
  RotateSquare: Ca,
  RotateSquare2: Va,
  RotateSquare3: Ma,
  RotateSquare4: Da,
  RotateSquare5: Ba,
  RotateSquare6: Ga,
  ScaleOut: Ta,
  Socket: ja,
  SpinLine: Ja,
  SquareGrid: Wa,
  Stretch: Ka,
  Texture: Ua,
  ThreeDots: Ya,
  TwoCube: as,
  Wave: es
}, ds = {
  install(e) {
    for (const [a, s] of Object.entries(ts))
      e.component(a, s);
  }
};
export {
  I as Circle,
  A as Circle10,
  F as Circle11,
  C as Circle2,
  V as Circle3,
  H as Circle4,
  L as Circle5,
  P as Circle6,
  O as Circle7,
  N as Circle8,
  E as Circle9,
  Q as CubeShadow,
  X as Diamond,
  Z as DoubleBounce,
  sa as Gauge,
  ta as Google,
  ia as Hexagon,
  na as HourGlass,
  oa as Jawn,
  ba as Jumper,
  ha as LetterCube,
  xa as MikePad,
  za as Origami,
  ga as Pencil,
  ka as PingPong,
  Ia as Plane,
  Ca as RotateSquare,
  Va as RotateSquare2,
  Ma as RotateSquare3,
  Da as RotateSquare4,
  Ba as RotateSquare5,
  Ga as RotateSquare6,
  Ta as ScaleOut,
  ja as Socket,
  Ja as SpinLine,
  Wa as SquareGrid,
  Ka as Stretch,
  Ua as Texture,
  Ya as ThreeDots,
  as as TwoCube,
  es as Wave,
  ds as default,
  ns as useLoading,
  ls as useScaledSpinner,
  is as useSpinner
};
