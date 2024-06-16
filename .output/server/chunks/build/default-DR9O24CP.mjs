import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
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

const _sfc_main$4 = {
  components: {}
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-f6364a0e><nav data-v-f6364a0e><ul data-v-f6364a0e><li data-v-f6364a0e> \u30EA\u30F3\u30AF1 </li><li data-v-f6364a0e> \u30EA\u30F3\u30AF2 </li><li data-v-f6364a0e> \u30EA\u30F3\u30AF3 </li><li data-v-f6364a0e> \u30EA\u30F3\u30AF4 </li></ul></nav></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/headerNav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-f6364a0e"]]);
const _sfc_main$3 = {
  components: {
    HeaderNav: __nuxt_component_0$1
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderNav = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-5809a647><header data-v-5809a647>`);
  _push(ssrRenderComponent(_component_HeaderNav, null, null, _parent));
  _push(`</header></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-5809a647"]]);
const _imports_0 = "" + buildAssetsURL("IMG_4547.B2JtEwef.png");
const _sfc_main$2 = {
  name: "NuxtTutorial"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0" }, _attrs))}><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet"><div class="max-w-4xl mx-auto sm:px-6 lg:px-8"><img${ssrRenderAttr("src", _imports_0)}><div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"><h2 class="text-2xl leading-7 font-semibold"> Welcome to Ryosei Kunii&#39;s Portfolio </h2><p class="mt-3 text-gray-600"><li>Software Engineer</li></p></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Welcome.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "NuxtTutorial"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-top justify-center bg-gray-100 sm:items-center sm:pt-0" }, _attrs))}><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet"><div class="max-w-4xl mx-auto sm:px-6 lg:px-8"><div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"><h1 class="text-2xl leading-7 font-semibold"> Works </h1><h2 class="text-2xl leading-7 font-semibold"> \u81EA\u6CBB\u4F53\u5411\u3051\u5B66\u6821\u7D66\u98DF\u7BA1\u7406Web\u30B7\u30B9\u30C6\u30E0\u958B\u767A </h2><p class="mt-3 text-gray-600"><li>Software Engineer</li></p></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Works1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Nuxt = resolveComponent("Nuxt");
  const _component_Welcome = __nuxt_component_1;
  const _component_Works1 = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Nuxt, null, null, _parent));
  _push(ssrRenderComponent(_component_Welcome, null, null, _parent));
  _push(ssrRenderComponent(_component_Works1, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DR9O24CP.mjs.map
