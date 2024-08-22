import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _imports_2 } from './2-a1HdP4Tc.mjs';
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

const _sfc_main$1 = {
  name: "SolarGlobalLinear"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "6em",
    height: "6em",
    viewBox: "0 0 24 24"
  }, _attrs))}><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"></path><path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z"></path><path stroke-linecap="round" d="M2 12h20"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/globe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("17.BMS6lMfY.jpg");
const _imports_1 = "" + buildAssetsURL("7.CS6eIuto.jpg");
const _imports_3 = "" + buildAssetsURL("3.wR8e8uoJ.jpg");
const _imports_4 = "" + buildAssetsURL("4.BOAXkwpS.jpg");
const _imports_5 = "" + buildAssetsURL("16.RaylBW9M.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_icons_globe = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Home" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_v_row, { class: "section max-w-screen-lg" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "12",
          class: "text-slate-200 relative pb-10"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="min-w-full h-[700px]"${_scopeId2}><div class="absolute bottom-10 left-40 flex flex-col content-center justify-center w-[1700px] h-full bg-gradient-to-bl from-slate-900 to-transparent"${_scopeId2}><div class="ms-96"${_scopeId2}><h1 class="text-7xl mb-12 font-bold"${_scopeId2}>Talk Less Do More !</h1><p class="text-2xl mb-10"${_scopeId2}> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br${_scopeId2}>Quis sed error culpa officiis sint quibusdam. Aut sint recusandae similique cum quo rerum, <br${_scopeId2}>voluptatibus voluptas quod perferendis omnis doloremque. Quaerat, iure. <br${_scopeId2}>Quis sed error culpa officiis sint quibusdam. Aut sint recusandae similique cum quo rerum, </p>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                type: "button",
                class: "text-xl ml-0 rounded-full cursor-pointer text-white px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-md hover:from-teal-400 hover:to-blue-500"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Know More`);
                  } else {
                    return [
                      createTextVNode("Know More")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  class: "min-w-full h-[700px]"
                }),
                createVNode("div", { class: "absolute bottom-10 left-40 flex flex-col content-center justify-center w-[1700px] h-full bg-gradient-to-bl from-slate-900 to-transparent" }, [
                  createVNode("div", { class: "ms-96" }, [
                    createVNode("h1", { class: "text-7xl mb-12 font-bold" }, "Talk Less Do More !"),
                    createVNode("p", { class: "text-2xl mb-10" }, [
                      createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                      createVNode("br"),
                      createTextVNode("Quis sed error culpa officiis sint quibusdam. Aut sint recusandae similique cum quo rerum, "),
                      createVNode("br"),
                      createTextVNode("voluptatibus voluptas quod perferendis omnis doloremque. Quaerat, iure. "),
                      createVNode("br"),
                      createTextVNode("Quis sed error culpa officiis sint quibusdam. Aut sint recusandae similique cum quo rerum, ")
                    ]),
                    createVNode(_component_v_btn, {
                      type: "button",
                      class: "text-xl ml-0 rounded-full cursor-pointer text-white px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-md hover:from-teal-400 hover:to-blue-500"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Know More")
                      ]),
                      _: 1
                    })
                  ])
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
            class: "text-slate-200 relative pb-10"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                class: "min-w-full h-[700px]"
              }),
              createVNode("div", { class: "absolute bottom-10 left-40 flex flex-col content-center justify-center w-[1700px] h-full bg-gradient-to-bl from-slate-900 to-transparent" }, [
                createVNode("div", { class: "ms-96" }, [
                  createVNode("h1", { class: "text-7xl mb-12 font-bold" }, "Talk Less Do More !"),
                  createVNode("p", { class: "text-2xl mb-10" }, [
                    createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                    createVNode("br"),
                    createTextVNode("Quis sed error culpa officiis sint quibusdam. Aut sint recusandae similique cum quo rerum, "),
                    createVNode("br"),
                    createTextVNode("voluptatibus voluptas quod perferendis omnis doloremque. Quaerat, iure. "),
                    createVNode("br"),
                    createTextVNode("Quis sed error culpa officiis sint quibusdam. Aut sint recusandae similique cum quo rerum, ")
                  ]),
                  createVNode(_component_v_btn, {
                    type: "button",
                    class: "text-xl ml-0 rounded-full cursor-pointer text-white px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-md hover:from-teal-400 hover:to-blue-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Know More")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_row, { class: "section flex items-center justify-evenly w-[1020px] py-10" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "6",
          class: "text-slate-200flex flex-col"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p class="text-xl text-amber-500 mt-24"${_scopeId2}>Hello There !!</p><h2 class="text-4xl mb-4"${_scopeId2}>We Develop Digital <br${_scopeId2}>Products</h2>`);
              _push3(ssrRenderComponent(_component_v_row, { class: "flex items-center justify-evenly w-[600px]" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h2 class="text-3xl font-bold text-amber-500"${_scopeId4}>Ibusdam</h2><p class="text-xl"${_scopeId4}> Lorem ipsum dolor sit amet consectetur adipisicing <br${_scopeId4}>elit. Quis sed error culpa <br${_scopeId4}>officiis sint quibusdam. </p>`);
                        } else {
                          return [
                            createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Ibusdam"),
                            createVNode("p", { class: "text-xl" }, [
                              createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing "),
                              createVNode("br"),
                              createTextVNode("elit. Quis sed error culpa "),
                              createVNode("br"),
                              createTextVNode("officiis sint quibusdam. ")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h2 class="text-3xl font-bold text-amber-500"${_scopeId4}>Earumnl</h2><p class="text-xl"${_scopeId4}> Molestiae eaque, voluptas nam , corporis suscipit <br${_scopeId4}> esse inventore earum corrupti . <br${_scopeId4}> Error tenetur earum corrupti! </p>`);
                        } else {
                          return [
                            createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Earumnl"),
                            createVNode("p", { class: "text-xl" }, [
                              createTextVNode(" Molestiae eaque, voluptas nam , corporis suscipit "),
                              createVNode("br"),
                              createTextVNode(" esse inventore earum corrupti . "),
                              createVNode("br"),
                              createTextVNode(" Error tenetur earum corrupti! ")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Ibusdam"),
                          createVNode("p", { class: "text-xl" }, [
                            createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing "),
                            createVNode("br"),
                            createTextVNode("elit. Quis sed error culpa "),
                            createVNode("br"),
                            createTextVNode("officiis sint quibusdam. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Earumnl"),
                          createVNode("p", { class: "text-xl" }, [
                            createTextVNode(" Molestiae eaque, voluptas nam , corporis suscipit "),
                            createVNode("br"),
                            createTextVNode(" esse inventore earum corrupti . "),
                            createVNode("br"),
                            createTextVNode(" Error tenetur earum corrupti! ")
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_row, { class: "flex w-[600px] items-center justify-evenly" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h2 class="text-3xl font-bold text-amber-500"${_scopeId4}>Consectetur</h2><p class="text-xl"${_scopeId4}> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br${_scopeId4}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>`);
                        } else {
                          return [
                            createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Consectetur"),
                            createVNode("p", { class: "text-xl" }, [
                              createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                              createVNode("br"),
                              createTextVNode(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. ")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h2 class="text-3xl font-bold text-amber-500"${_scopeId4}>Ipsum</h2><p class="text-xl"${_scopeId4}> Lorem ipsum dolor sit amet consectetur adipisicing <br${_scopeId4}>elit. Quis sed error culpa officiis sint quibusdam. </p>`);
                        } else {
                          return [
                            createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Ipsum"),
                            createVNode("p", { class: "text-xl" }, [
                              createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing "),
                              createVNode("br"),
                              createTextVNode("elit. Quis sed error culpa officiis sint quibusdam. ")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Consectetur"),
                          createVNode("p", { class: "text-xl" }, [
                            createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                            createVNode("br"),
                            createTextVNode(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6",
                        class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Ipsum"),
                          createVNode("p", { class: "text-xl" }, [
                            createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing "),
                            createVNode("br"),
                            createTextVNode("elit. Quis sed error culpa officiis sint quibusdam. ")
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("p", { class: "text-xl text-amber-500 mt-24" }, "Hello There !!"),
                createVNode("h2", { class: "text-4xl mb-4" }, [
                  createTextVNode("We Develop Digital "),
                  createVNode("br"),
                  createTextVNode("Products")
                ]),
                createVNode(_component_v_row, { class: "flex items-center justify-evenly w-[600px]" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Ibusdam"),
                        createVNode("p", { class: "text-xl" }, [
                          createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing "),
                          createVNode("br"),
                          createTextVNode("elit. Quis sed error culpa "),
                          createVNode("br"),
                          createTextVNode("officiis sint quibusdam. ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Earumnl"),
                        createVNode("p", { class: "text-xl" }, [
                          createTextVNode(" Molestiae eaque, voluptas nam , corporis suscipit "),
                          createVNode("br"),
                          createTextVNode(" esse inventore earum corrupti . "),
                          createVNode("br"),
                          createTextVNode(" Error tenetur earum corrupti! ")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_row, { class: "flex w-[600px] items-center justify-evenly" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Consectetur"),
                        createVNode("p", { class: "text-xl" }, [
                          createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                          createVNode("br"),
                          createTextVNode(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6",
                      class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Ipsum"),
                        createVNode("p", { class: "text-xl" }, [
                          createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing "),
                          createVNode("br"),
                          createTextVNode("elit. Quis sed error culpa officiis sint quibusdam. ")
                        ])
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
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "6",
          class: "text-slate-200"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_1)} alt="" class="w-[400px] h-[600px] mt-20 inline-block object-fill"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_1,
                  alt: "",
                  class: "w-[400px] h-[600px] mt-20 inline-block object-fill"
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
            md: "6",
            class: "text-slate-200flex flex-col"
          }, {
            default: withCtx(() => [
              createVNode("p", { class: "text-xl text-amber-500 mt-24" }, "Hello There !!"),
              createVNode("h2", { class: "text-4xl mb-4" }, [
                createTextVNode("We Develop Digital "),
                createVNode("br"),
                createTextVNode("Products")
              ]),
              createVNode(_component_v_row, { class: "flex items-center justify-evenly w-[600px]" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "6",
                    class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Ibusdam"),
                      createVNode("p", { class: "text-xl" }, [
                        createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing "),
                        createVNode("br"),
                        createTextVNode("elit. Quis sed error culpa "),
                        createVNode("br"),
                        createTextVNode("officiis sint quibusdam. ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "6",
                    class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Earumnl"),
                      createVNode("p", { class: "text-xl" }, [
                        createTextVNode(" Molestiae eaque, voluptas nam , corporis suscipit "),
                        createVNode("br"),
                        createTextVNode(" esse inventore earum corrupti . "),
                        createVNode("br"),
                        createTextVNode(" Error tenetur earum corrupti! ")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { class: "flex w-[600px] items-center justify-evenly" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "6",
                    class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Consectetur"),
                      createVNode("p", { class: "text-xl" }, [
                        createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
                        createVNode("br"),
                        createTextVNode(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "6",
                    class: "text-slate-200 flex flex-col items-start justify-evenly h-[180px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-3xl font-bold text-amber-500" }, "Ipsum"),
                      createVNode("p", { class: "text-xl" }, [
                        createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing "),
                        createVNode("br"),
                        createTextVNode("elit. Quis sed error culpa officiis sint quibusdam. ")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            md: "6",
            class: "text-slate-200"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_1,
                alt: "",
                class: "w-[400px] h-[600px] mt-20 inline-block object-fill"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_row, { class: "section py-24 max-w-screen-lg" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "12",
          class: "text-slate-200 max-w-screen-lg flex flex-col items-start justify-evenly"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p class="text-xl text-amber-500 mt-24"${_scopeId2}>Hello There !!</p><h2 class="text-5xl mb-4"${_scopeId2}> Almost Before We Knew it ! <br${_scopeId2}>We had left the ground </h2>`);
            } else {
              return [
                createVNode("p", { class: "text-xl text-amber-500 mt-24" }, "Hello There !!"),
                createVNode("h2", { class: "text-5xl mb-4" }, [
                  createTextVNode(" Almost Before We Knew it ! "),
                  createVNode("br"),
                  createTextVNode("We had left the ground ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "4",
          class: "text-slate-200 flex items-start justify-evenly max-w-screen-lg"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex flex-col items-center justify-evenly w-[300px] h-[450px]"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="" class="object-fill w-[300px] h-[290px]"${_scopeId2}><p${_scopeId2}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br${_scopeId2}>Cum suscipit libero delectus doloremque! Laborum natus ullam praesentium, <br${_scopeId2}> at culpa excepturi iusto porro voluptatum debitis? Deserunt commodi ipsam ex autem laborum! </p></div><div class="flex flex-col items-center justify-evenly w-[300px] h-[450px]"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} alt="" class="w-[300px] h-[290px] object-fill"${_scopeId2}><p${_scopeId2}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum suscipit <br${_scopeId2}>libero delectus doloremque! Laborum natus ullam praesentium, at culpa excepturi <br${_scopeId2}>iusto porro voluptatum debitis? Deserunt commodi ipsam ex autem laborum! </p></div><div class="flex flex-col items-center justify-evenly w-[300px] h-[450px]"${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} alt="" class="w-[300px] h-[290px] object-fill"${_scopeId2}><p${_scopeId2}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br${_scopeId2}>Cum suscipit libero delectus doloremque! Laborum natus <br${_scopeId2}>ullam praesentium, at culpa excepturi iusto porro voluptatum debitis? Deserunt commodi ipsam ex autem laborum! </p></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center justify-evenly w-[300px] h-[450px]" }, [
                  createVNode("img", {
                    src: _imports_2,
                    alt: "",
                    class: "object-fill w-[300px] h-[290px]"
                  }),
                  createVNode("p", null, [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),
                    createVNode("br"),
                    createTextVNode("Cum suscipit libero delectus doloremque! Laborum natus ullam praesentium, "),
                    createVNode("br"),
                    createTextVNode(" at culpa excepturi iusto porro voluptatum debitis? Deserunt commodi ipsam ex autem laborum! ")
                  ])
                ]),
                createVNode("div", { class: "flex flex-col items-center justify-evenly w-[300px] h-[450px]" }, [
                  createVNode("img", {
                    src: _imports_3,
                    alt: "",
                    class: "w-[300px] h-[290px] object-fill"
                  }),
                  createVNode("p", null, [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum suscipit "),
                    createVNode("br"),
                    createTextVNode("libero delectus doloremque! Laborum natus ullam praesentium, at culpa excepturi "),
                    createVNode("br"),
                    createTextVNode("iusto porro voluptatum debitis? Deserunt commodi ipsam ex autem laborum! ")
                  ])
                ]),
                createVNode("div", { class: "flex flex-col items-center justify-evenly w-[300px] h-[450px]" }, [
                  createVNode("img", {
                    src: _imports_4,
                    alt: "",
                    class: "w-[300px] h-[290px] object-fill"
                  }),
                  createVNode("p", null, [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),
                    createVNode("br"),
                    createTextVNode("Cum suscipit libero delectus doloremque! Laborum natus "),
                    createVNode("br"),
                    createTextVNode("ullam praesentium, at culpa excepturi iusto porro voluptatum debitis? Deserunt commodi ipsam ex autem laborum! ")
                  ])
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
            class: "text-slate-200 max-w-screen-lg flex flex-col items-start justify-evenly"
          }, {
            default: withCtx(() => [
              createVNode("p", { class: "text-xl text-amber-500 mt-24" }, "Hello There !!"),
              createVNode("h2", { class: "text-5xl mb-4" }, [
                createTextVNode(" Almost Before We Knew it ! "),
                createVNode("br"),
                createTextVNode("We had left the ground ")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            md: "4",
            class: "text-slate-200 flex items-start justify-evenly max-w-screen-lg"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "flex flex-col items-center justify-evenly w-[300px] h-[450px]" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: "",
                  class: "object-fill w-[300px] h-[290px]"
                }),
                createVNode("p", null, [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),
                  createVNode("br"),
                  createTextVNode("Cum suscipit libero delectus doloremque! Laborum natus ullam praesentium, "),
                  createVNode("br"),
                  createTextVNode(" at culpa excepturi iusto porro voluptatum debitis? Deserunt commodi ipsam ex autem laborum! ")
                ])
              ]),
              createVNode("div", { class: "flex flex-col items-center justify-evenly w-[300px] h-[450px]" }, [
                createVNode("img", {
                  src: _imports_3,
                  alt: "",
                  class: "w-[300px] h-[290px] object-fill"
                }),
                createVNode("p", null, [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum suscipit "),
                  createVNode("br"),
                  createTextVNode("libero delectus doloremque! Laborum natus ullam praesentium, at culpa excepturi "),
                  createVNode("br"),
                  createTextVNode("iusto porro voluptatum debitis? Deserunt commodi ipsam ex autem laborum! ")
                ])
              ]),
              createVNode("div", { class: "flex flex-col items-center justify-evenly w-[300px] h-[450px]" }, [
                createVNode("img", {
                  src: _imports_4,
                  alt: "",
                  class: "w-[300px] h-[290px] object-fill"
                }),
                createVNode("p", null, [
                  createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),
                  createVNode("br"),
                  createTextVNode("Cum suscipit libero delectus doloremque! Laborum natus "),
                  createVNode("br"),
                  createTextVNode("ullam praesentium, at culpa excepturi iusto porro voluptatum debitis? Deserunt commodi ipsam ex autem laborum! ")
                ])
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
          class: "text-slate-200 flex items-start justify-start max-w-screen-lg"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h2 class="text-5xl mt-20 mb-10"${_scopeId2}>What we do !</h2>`);
            } else {
              return [
                createVNode("h2", { class: "text-5xl mt-20 mb-10" }, "What we do !")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_col, {
          cols: "12",
          md: "12",
          class: "text-slate-200 flex items-start justify-evenly max-w-screen-lg"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4",
                class: "w-[320px] h-[260px] flex flex-col items-center justify-evenly text-slate-200 bg-gradient-to-br from-slate-800 via-slate-500 to-indigo-400"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_icons_globe, null, null, _parent4, _scopeId3));
                    _push4(`<p class="text-xl"${_scopeId3}> Lorem ipsum dolor sit amet, doloremque!<br${_scopeId3}> consectetur adipisicing elit. suscipitgfshs<br${_scopeId3}> libero delectus doloremque! Laborum<br${_scopeId3}> ullam praesentium, at culpa excepturitersdr </p>`);
                  } else {
                    return [
                      createVNode(_component_icons_globe),
                      createVNode("p", { class: "text-xl" }, [
                        createTextVNode(" Lorem ipsum dolor sit amet, doloremque!"),
                        createVNode("br"),
                        createTextVNode(" consectetur adipisicing elit. suscipitgfshs"),
                        createVNode("br"),
                        createTextVNode(" libero delectus doloremque! Laborum"),
                        createVNode("br"),
                        createTextVNode(" ullam praesentium, at culpa excepturitersdr ")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-slate-200 w-[320px] h-[260px]"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_5)} alt="" class="w-[320px] h-[260px] object-fill"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _imports_5,
                        alt: "",
                        class: "w-[320px] h-[260px] object-fill"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-slate-200 w-[320px] h-[260px] flex flex-col items-start justify-around mb-24"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${_scopeId3}><h2 class="text-5xl"${_scopeId3}>Almost Before We Knew it !</h2><p class="text-base text-amber-500 mb-4"${_scopeId3}> consectetur adipisicing elit !! </p></div><p class="text-xl"${_scopeId3}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br${_scopeId3}>Rum suscipit libero delectus <br${_scopeId3}> doloremque! Laborum natus ullam praesentium, <br${_scopeId3}>at culpa excepturi </p>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h2", { class: "text-5xl" }, "Almost Before We Knew it !"),
                        createVNode("p", { class: "text-base text-amber-500 mb-4" }, " consectetur adipisicing elit !! ")
                      ]),
                      createVNode("p", { class: "text-xl" }, [
                        createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),
                        createVNode("br"),
                        createTextVNode("Rum suscipit libero delectus "),
                        createVNode("br"),
                        createTextVNode(" doloremque! Laborum natus ullam praesentium, "),
                        createVNode("br"),
                        createTextVNode("at culpa excepturi ")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "4",
                  class: "w-[320px] h-[260px] flex flex-col items-center justify-evenly text-slate-200 bg-gradient-to-br from-slate-800 via-slate-500 to-indigo-400"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_icons_globe),
                    createVNode("p", { class: "text-xl" }, [
                      createTextVNode(" Lorem ipsum dolor sit amet, doloremque!"),
                      createVNode("br"),
                      createTextVNode(" consectetur adipisicing elit. suscipitgfshs"),
                      createVNode("br"),
                      createTextVNode(" libero delectus doloremque! Laborum"),
                      createVNode("br"),
                      createTextVNode(" ullam praesentium, at culpa excepturitersdr ")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "4",
                  class: "text-slate-200 w-[320px] h-[260px]"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_5,
                      alt: "",
                      class: "w-[320px] h-[260px] object-fill"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "4",
                  class: "text-slate-200 w-[320px] h-[260px] flex flex-col items-start justify-around mb-24"
                }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("h2", { class: "text-5xl" }, "Almost Before We Knew it !"),
                      createVNode("p", { class: "text-base text-amber-500 mb-4" }, " consectetur adipisicing elit !! ")
                    ]),
                    createVNode("p", { class: "text-xl" }, [
                      createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),
                      createVNode("br"),
                      createTextVNode("Rum suscipit libero delectus "),
                      createVNode("br"),
                      createTextVNode(" doloremque! Laborum natus ullam praesentium, "),
                      createVNode("br"),
                      createTextVNode("at culpa excepturi ")
                    ])
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
            class: "text-slate-200 flex items-start justify-start max-w-screen-lg"
          }, {
            default: withCtx(() => [
              createVNode("h2", { class: "text-5xl mt-20 mb-10" }, "What we do !")
            ]),
            _: 1
          }),
          createVNode(_component_v_col, {
            cols: "12",
            md: "12",
            class: "text-slate-200 flex items-start justify-evenly max-w-screen-lg"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "4",
                class: "w-[320px] h-[260px] flex flex-col items-center justify-evenly text-slate-200 bg-gradient-to-br from-slate-800 via-slate-500 to-indigo-400"
              }, {
                default: withCtx(() => [
                  createVNode(_component_icons_globe),
                  createVNode("p", { class: "text-xl" }, [
                    createTextVNode(" Lorem ipsum dolor sit amet, doloremque!"),
                    createVNode("br"),
                    createTextVNode(" consectetur adipisicing elit. suscipitgfshs"),
                    createVNode("br"),
                    createTextVNode(" libero delectus doloremque! Laborum"),
                    createVNode("br"),
                    createTextVNode(" ullam praesentium, at culpa excepturitersdr ")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-slate-200 w-[320px] h-[260px]"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_5,
                    alt: "",
                    class: "w-[320px] h-[260px] object-fill"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "4",
                class: "text-slate-200 w-[320px] h-[260px] flex flex-col items-start justify-around mb-24"
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-5xl" }, "Almost Before We Knew it !"),
                    createVNode("p", { class: "text-base text-amber-500 mb-4" }, " consectetur adipisicing elit !! ")
                  ]),
                  createVNode("p", { class: "text-xl" }, [
                    createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. "),
                    createVNode("br"),
                    createTextVNode("Rum suscipit libero delectus "),
                    createVNode("br"),
                    createTextVNode(" doloremque! Laborum natus ullam praesentium, "),
                    createVNode("br"),
                    createTextVNode("at culpa excepturi ")
                  ])
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
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-pSCeIG4W.mjs.map
