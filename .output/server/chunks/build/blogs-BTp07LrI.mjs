import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_2 } from './2-a1HdP4Tc.mjs';
import '../routes/renderer.mjs';
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

const blogsData = [
  {
    image: "10.jpg",
    title: " Joy blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "11.jpg",
    title: "Branda blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "8.jpg",
    title: "Mack blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "12.jpg",
    title: "Anthony blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "19.jpg",
    title: "Carlo blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "9.jpg",
    title: "Hanna blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "7.jpg",
    title: "sandras blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "10.jpg",
    title: "Hinta blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "1.jpg",
    title: " Joy blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "28.jpg",
    title: "Branda blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "20.jpg",
    title: "Mack blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "27.jpg",
    title: "Anthony blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];
function splitArray(arr, chunkSize) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}
const _sfc_main = {
  __name: "blogs",
  __ssrInlineRender: true,
  setup(__props) {
    const [firstHalf, secondHalf, thirdHalf] = splitArray(blogsData, 4);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_spacer = resolveComponent("v-spacer");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog" }, _attrs))}>`);
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
                  _push3(`<h1 class="text-6xl"${_scopeId2}>Blog Posts</h1><p class="text-amber-500 text-xl mb-10"${_scopeId2}>News Feed And Blogs</p><div class="text-2xl mb-20 flex flex-col items-center justify-center"${_scopeId2}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque <p${_scopeId2}> placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor </p><p${_scopeId2}> sit amet consectetur adipisicing elit. Error explicabo minus rerum iusto numquam ex et delectus quasi sapiente expedita distinctio architecto, esse magni, </p><p${_scopeId2}>illum dolorum iste eaque voluptatibus rem.</p></div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-6xl" }, "Blog Posts"),
                    createVNode("p", { class: "text-amber-500 text-xl mb-10" }, "News Feed And Blogs"),
                    createVNode("div", { class: "text-2xl mb-20 flex flex-col items-center justify-center" }, [
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
                  createVNode("h1", { class: "text-6xl" }, "Blog Posts"),
                  createVNode("p", { class: "text-amber-500 text-xl mb-10" }, "News Feed And Blogs"),
                  createVNode("div", { class: "text-2xl mb-20 flex flex-col items-center justify-center" }, [
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
      _push(ssrRenderComponent(_component_v_row, { class: "section flex flex-col items-center justify-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6",
              class: "text-slate-200 flex items-center justify-center mt-24 w-[700px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"${_scopeId2}> voluptatibus </div><div class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"${_scopeId2}> Consectetur </div><div class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"${_scopeId2}> Adipisicing </div>`);
                } else {
                  return [
                    createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " voluptatibus "),
                    createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Consectetur "),
                    createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Adipisicing ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "6",
              class: "text-slate-200 flex items-center justify-around mt-24 w-[700px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"${_scopeId2}> Distinctioned </div><div class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"${_scopeId2}> Numquadem </div><div class="rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]"${_scopeId2}> Exercitationem </div>`);
                } else {
                  return [
                    createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Distinctioned "),
                    createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Numquadem "),
                    createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Exercitationem ")
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
                class: "text-slate-200 flex items-center justify-center mt-24 w-[700px]"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " voluptatibus "),
                  createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Consectetur "),
                  createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Adipisicing ")
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "6",
                class: "text-slate-200 flex items-center justify-around mt-24 w-[700px]"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Distinctioned "),
                  createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Numquadem "),
                  createVNode("div", { class: "rounded-lg border-2 border-slate-700 hover:bg-slate-800 px-16 py-6 text-2xl w-[200px]" }, " Exercitationem ")
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
              class: "text-slate-200 bg-pink-600 mt-24 flex items-center justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_2)} alt="" class="min-w-full h-[700px] inline-block"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_2,
                      alt: "",
                      class: "min-w-full h-[700px] inline-block"
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
                class: "text-slate-200 bg-pink-600 mt-24 flex items-center justify-center"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: _imports_2,
                    alt: "",
                    class: "min-w-full h-[700px] inline-block"
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
                  _push3(`<h1 class="text-6xl font-semibold text-amber-500"${_scopeId2}>seeking knowledge</h1>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<p class="text-xl"${_scopeId2}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia, consequuntur eius rem corporis itaque placeat quos illum voluptas harum exercitationem ullam! Soluta odio accusantium odit explicabo alias maxime dicta. Lorem ipsum dolor </p>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-6xl font-semibold text-amber-500" }, "seeking knowledge"),
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
                  createVNode("h1", { class: "text-6xl font-semibold text-amber-500" }, "seeking knowledge"),
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
            ssrRenderList(unref(firstHalf), (item, index) => {
              _push2(ssrRenderComponent(_component_v_col, {
                key: index,
                cols: "12",
                md: "3",
                sm: "6",
                class: "text-slate-200 w-[300px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `/img/${item.image}`)} alt="blog item"${_scopeId2}><h2 class="text-2xl mb-10 mt-20 font-bold text-amber-600"${_scopeId2}>${ssrInterpolate(item.title)}</h2><div class="text-xl mb-20 flex flex-col items-start justify-center"${_scopeId2}>${ssrInterpolate(item.desc)}</div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: `/img/${item.image}`,
                        alt: "blog item"
                      }, null, 8, ["src"]),
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(firstHalf), (item, index) => {
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
      _push(ssrRenderComponent(_component_v_row, { class: "section flex max-w-screen-xl items-center justify-start mt-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(secondHalf), (item, index) => {
              _push2(ssrRenderComponent(_component_v_col, {
                key: index,
                cols: "12",
                md: "2",
                sm: "6",
                class: "text-slate-200 w-[300px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `/img/${item.image}`)} alt="blog item"${_scopeId2}><h2 class="text-2xl mb-10 mt-20 font-bold text-amber-600"${_scopeId2}>${ssrInterpolate(item.title)}</h2><div class="text-xl mb-20 flex flex-col items-start justify-center"${_scopeId2}>${ssrInterpolate(item.desc)}</div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: `/img/${item.image}`,
                        alt: "blog item"
                      }, null, 8, ["src"]),
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(secondHalf), (item, index) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: index,
                  cols: "12",
                  md: "2",
                  sm: "6",
                  class: "text-slate-200 w-[300px]"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: `/img/${item.image}`,
                      alt: "blog item"
                    }, null, 8, ["src"]),
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
      _push(ssrRenderComponent(_component_v_row, { class: "section flex max-w-screen-xl items-center justify-start mt-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(thirdHalf), (item, index) => {
              _push2(ssrRenderComponent(_component_v_col, {
                key: index,
                cols: "12",
                md: "2",
                sm: "6",
                class: "text-slate-200 w-[300px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `/img/${item.image}`)} alt="blog item"${_scopeId2}><h2 class="text-2xl mb-10 mt-20 font-bold text-amber-600"${_scopeId2}>${ssrInterpolate(item.title)}</h2><div class="text-xl mb-20 flex flex-col items-start justify-center"${_scopeId2}>${ssrInterpolate(item.desc)}</div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: `/img/${item.image}`,
                        alt: "blog item"
                      }, null, 8, ["src"]),
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(thirdHalf), (item, index) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: index,
                  cols: "12",
                  md: "2",
                  sm: "6",
                  class: "text-slate-200 w-[300px]"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: `/img/${item.image}`,
                      alt: "blog item"
                    }, null, 8, ["src"]),
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blogs-BTp07LrI.mjs.map
