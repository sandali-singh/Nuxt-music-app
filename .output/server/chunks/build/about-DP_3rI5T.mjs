import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const aboutData = [
  {
    image: "32.jpg",
    title: "Welcome Keynote",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "35.jpg",
    title: "What's new in Web?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "13.jpg",
    title: "Mobile App ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "24.jpg",
    title: "Google Cloud Enterprise",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];
const _sfc_main$1 = {
  __name: "avatar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_row, mergeProps({ class: "section flex max-w-screen-xl items-center justify-start mt-24" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(aboutData), (item, index) => {
              _push2(ssrRenderComponent(_component_v_col, {
                key: index,
                cols: "12",
                md: "3",
                sm: "6",
                class: "text-slate-200 w-[300px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `/img/${item.image}`)} alt="blog item"${_scopeId2}><div class="text-xl mb-20 flex flex-col items-start justify-center"${_scopeId2}>${ssrInterpolate(item.title)}</div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: `/img/${item.image}`,
                        alt: "blog item"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "text-xl mb-20 flex flex-col items-start justify-center" }, toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(aboutData), (item, index) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: index,
                  cols: "12",
                  md: "3",
                  sm: "6",
                  class: "text-slate-200 w-[300px]"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: `/img/${item.image}`,
                      alt: "blog item"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "text-xl mb-20 flex flex-col items-start justify-center" }, toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/avatar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("6.C_M7-xUI.jpg");
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_avatar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_row, { class: "section" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "12",
              class: "text-slate-200 flex flex-col items-center justify-center mt-24"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-6xl mb-10"${_scopeId2}>About Us</h1><div class="text-xl mb-20 flex flex-col items-center justify-center"${_scopeId2}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque <p${_scopeId2}> placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor </p><p${_scopeId2}> sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, </p><p${_scopeId2}>illum dolorum iste eaque voluptatibus rem.</p></div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-6xl mb-10" }, "About Us"),
                    createVNode("div", { class: "text-xl mb-20 flex flex-col items-center justify-center" }, [
                      createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque "),
                      createVNode("p", null, " placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor "),
                      createVNode("p", null, " sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, "),
                      createVNode("p", null, "illum dolorum iste eaque voluptatibus rem.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                md: "12",
                class: "text-slate-200 flex flex-col items-center justify-center mt-24"
              }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-6xl mb-10" }, "About Us"),
                  createVNode("div", { class: "text-xl mb-20 flex flex-col items-center justify-center" }, [
                    createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque "),
                    createVNode("p", null, " placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor "),
                    createVNode("p", null, " sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, "),
                    createVNode("p", null, "illum dolorum iste eaque voluptatibus rem.")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "section" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "12",
              class: "text-slate-200 bg-pink-600 flex items-center justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="min-w-full h-[600px] inline-block"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "",
                      class: "min-w-full h-[600px] inline-block"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                md: "12",
                class: "text-slate-200 bg-pink-600 flex items-center justify-center"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "",
                    class: "min-w-full h-[600px] inline-block"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "section flex max-w-screen-xl items-start justify-between mt-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6",
              sm: "6",
              class: "text-slate-200 w-[500px] items-start justify-between flex flex-col"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-6xl font-bold text-amber-500"${_scopeId2}>Know Us</h1>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<p class="text-xl"${_scopeId2}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor </p>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-6xl font-bold text-amber-500" }, "Know Us"),
                    createVNode(_component_v_spacer),
                    createVNode("p", { class: "text-xl" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6",
              sm: "6",
              class: "text-slate-200 w-[500px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-2xl"${_scopeId2}> placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, illum dolorum iste eaque voluptatibus rem. </p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-2xl" }, " placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, illum dolorum iste eaque voluptatibus rem. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                md: "6",
                sm: "6",
                class: "text-slate-200 w-[500px] items-start justify-between flex flex-col"
              }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-6xl font-bold text-amber-500" }, "Know Us"),
                  createVNode(_component_v_spacer),
                  createVNode("p", { class: "text-xl" }, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor ")
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "6",
                sm: "6",
                class: "text-slate-200 w-[500px]"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-2xl" }, " placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, illum dolorum iste eaque voluptatibus rem. ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_row, { class: "section flex max-w-screen-xl items-center justify-start mt-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(aboutData), (item, index) => {
              _push2(ssrRenderComponent(_component_v_col, {
                key: index,
                cols: "12",
                md: "3",
                sm: "6",
                class: "text-slate-200 w-[300px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 class="text-2xl mb-10 mt-20 font-bold text-amber-600"${_scopeId2}>${ssrInterpolate(item.title)}</h2><div class="text-xl mb-20 flex flex-col items-start justify-center"${_scopeId2}>${ssrInterpolate(item.desc)}</div>`);
                  } else {
                    return [
                      createVNode("h2", { class: "text-2xl mb-10 mt-20 font-bold text-amber-600" }, toDisplayString(item.title), 1),
                      createVNode("div", { class: "text-xl mb-20 flex flex-col items-start justify-center" }, toDisplayString(item.desc), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(aboutData), (item, index) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: index,
                  cols: "12",
                  md: "3",
                  sm: "6",
                  class: "text-slate-200 w-[300px]"
                }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "text-2xl mb-10 mt-20 font-bold text-amber-600" }, toDisplayString(item.title), 1),
                    createVNode("div", { class: "text-xl mb-20 flex flex-col items-start justify-center" }, toDisplayString(item.desc), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_avatar, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-DP_3rI5T.mjs.map
