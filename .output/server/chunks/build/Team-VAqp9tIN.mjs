import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("19.K6uViiaS.jpg");
const _imports_1 = "" + buildAssetsURL("20.DPE7CWgA.jpg");
const _imports_2 = "" + buildAssetsURL("21.DIbTqShJ.jpg");
const _imports_3 = "" + buildAssetsURL("23.CFIA-1hv.jpg");
const _imports_4 = "" + buildAssetsURL("25.XhFRibBu.jpg");
const _imports_5 = "" + buildAssetsURL("24.BSHo8UVX.jpg");
const _imports_6 = "" + buildAssetsURL("13.C_VSgQsS.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Team" }, _attrs))}>`);
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
              _push3(`<p class="text-amber-500 text-xl"${_scopeId2}>Get to know our team members !</p><h1 class="text-6xl mb-10"${_scopeId2}>Team Members</h1><div class="text-xl mb-20 flex flex-col items-center justify-center"${_scopeId2}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque <p${_scopeId2}> placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor </p><p${_scopeId2}> sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, </p><p${_scopeId2}>Eillum dolorum iste eaque voluptatibus rem.</p></div>`);
            } else {
              return [
                createVNode("p", { class: "text-amber-500 text-xl" }, "Get to know our team members !"),
                createVNode("h1", { class: "text-6xl mb-10" }, "Team Members"),
                createVNode("div", { class: "text-xl mb-20 flex flex-col items-center justify-center" }, [
                  createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque "),
                  createVNode("p", null, " placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor "),
                  createVNode("p", null, " sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, "),
                  createVNode("p", null, "Eillum dolorum iste eaque voluptatibus rem.")
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
              createVNode("p", { class: "text-amber-500 text-xl" }, "Get to know our team members !"),
              createVNode("h1", { class: "text-6xl mb-10" }, "Team Members"),
              createVNode("div", { class: "text-xl mb-20 flex flex-col items-center justify-center" }, [
                createTextVNode(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque "),
                createVNode("p", null, " placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor "),
                createVNode("p", null, " sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, "),
                createVNode("p", null, "Eillum dolorum iste eaque voluptatibus rem.")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_row, { class: "section flex items-center justify-center mt-24 max-w-screen-xl" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "4",
          class: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="person1" loading="lazy" class="w-[400px]"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "person1",
                  loading: "lazy",
                  class: "w-[400px]"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "4",
          class: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="person2" loading="lazy" class="w-[400px]"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_1,
                  alt: "person2",
                  loading: "lazy",
                  class: "w-[400px]"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "4",
          class: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_2)} alt="person3" loading="lazy" class="w-[400px]"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_2,
                  alt: "person3",
                  loading: "lazy",
                  class: "w-[400px]"
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
            md: "4",
            class: ""
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0,
                alt: "person1",
                loading: "lazy",
                class: "w-[400px]"
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            md: "4",
            class: ""
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_1,
                alt: "person2",
                loading: "lazy",
                class: "w-[400px]"
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            md: "4",
            class: ""
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_2,
                alt: "person3",
                loading: "lazy",
                class: "w-[400px]"
              })
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
          class: "rounded-lg p-20 mt-24 max-w-screen-lg flex items-center justify-between text-slate-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h2 class="text-5xl"${_scopeId2}>Start your business with us.</h2>`);
              _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, { class: "rounded cursor-pointer px-10 py-4 mr-5 bg-slate-700 text-white drop-shadow-md hover:bg-slate-600 active:bg-slate-700 focus:outline-none" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` sign in `);
                  } else {
                    return [
                      createTextVNode(" sign in ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("h2", { class: "text-5xl" }, "Start your business with us."),
                createVNode(_component_v_spacer),
                createVNode(_component_v_btn, { class: "rounded cursor-pointer px-10 py-4 mr-5 bg-slate-700 text-white drop-shadow-md hover:bg-slate-600 active:bg-slate-700 focus:outline-none" }, {
                  default: withCtx(() => [
                    createTextVNode(" sign in ")
                  ]),
                  _: 1
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
            class: "rounded-lg p-20 mt-24 max-w-screen-lg flex items-center justify-between text-slate-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          }, {
            default: withCtx(() => [
              createVNode("h2", { class: "text-5xl" }, "Start your business with us."),
              createVNode(_component_v_spacer),
              createVNode(_component_v_btn, { class: "rounded cursor-pointer px-10 py-4 mr-5 bg-slate-700 text-white drop-shadow-md hover:bg-slate-600 active:bg-slate-700 focus:outline-none" }, {
                default: withCtx(() => [
                  createTextVNode(" sign in ")
                ]),
                _: 1
              })
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
          class: "my-24 bg-red-500 flex items-center justify-between"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_3)} alt="person3" loading="lazy" class="w-[600px] h-[250px]"${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} alt="person3" loading="lazy" class="w-[600px] h-[250px]"${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} alt="person3" loading="lazy" class="w-[600px] h-[250px]"${_scopeId2}><img${ssrRenderAttr("src", _imports_6)} alt="person3" loading="lazy" class="w-[600px] h-[250px]"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_3,
                  alt: "person3",
                  loading: "lazy",
                  class: "w-[600px] h-[250px]"
                }),
                createVNode("img", {
                  src: _imports_4,
                  alt: "person3",
                  loading: "lazy",
                  class: "w-[600px] h-[250px]"
                }),
                createVNode("img", {
                  src: _imports_5,
                  alt: "person3",
                  loading: "lazy",
                  class: "w-[600px] h-[250px]"
                }),
                createVNode("img", {
                  src: _imports_6,
                  alt: "person3",
                  loading: "lazy",
                  class: "w-[600px] h-[250px]"
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
            class: "my-24 bg-red-500 flex items-center justify-between"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_3,
                alt: "person3",
                loading: "lazy",
                class: "w-[600px] h-[250px]"
              }),
              createVNode("img", {
                src: _imports_4,
                alt: "person3",
                loading: "lazy",
                class: "w-[600px] h-[250px]"
              }),
              createVNode("img", {
                src: _imports_5,
                alt: "person3",
                loading: "lazy",
                class: "w-[600px] h-[250px]"
              }),
              createVNode("img", {
                src: _imports_6,
                alt: "person3",
                loading: "lazy",
                class: "w-[600px] h-[250px]"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Team = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Team as default };
//# sourceMappingURL=Team-VAqp9tIN.mjs.map
