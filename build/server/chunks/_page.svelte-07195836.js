import { c as create_ssr_component } from './index2-07f5b75e.js';

const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Marmelad&family=Pacifico&family=Special+Elite&family=Tangerine:wght@400;700&family=Ultra&display=swap');.amboscontactos.svelte-szteum{background-color:#5f5f87;color:white;border:2px solid black;margin:20px;padding:20px}.antoinecontacto.svelte-szteum{background-color:#bcbcbc;color:white;border:2px solid black;margin:20px;padding:20px}.chriscontacto.svelte-szteum{background-color:#bcbcbc;color:white;border:2px solid black;margin:20px;padding:20px}h1.svelte-szteum{font-family:'Special Elite', cursive;font-size:3.5rem;padding:10px;text-align:center}p.svelte-szteum{font-family:'Special Elite', sans-serif;font-size:2rem;text-align:center;color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-14rrzmh_START -->${$$result.title = `<title>Contact</title>`, ""}<!-- HEAD_svelte-14rrzmh_END -->`, ""}

<div class="amboscontactos svelte-szteum"><h1 class="svelte-szteum">Contacto</h1>

<div class="antoinecontacto svelte-szteum"><p class="svelte-szteum"><a href="mailto:antoine@patraldo.com">Mándame un Email</a></p>
<p class="svelte-szteum"><a rel="me" href="https://mastodonte.red/@antoine">Conecta conmigo en Mastodonte Punto Red</a><br>
<a rel="me" href="https://karlmarx.social/@antoine">Conecta conmigo en Karl Marx Social</a><br>
<a rel="me" href="https://aynrand.social/@antoine">Conecta conmigo en Ayn Rand Social</a><br></p></div>
<div class="chriscontacto svelte-szteum"><p class="svelte-szteum"><a rel="me" href="https://aynrand.social/@christophe">O si prefieres hablar con mi representante, Christophe R</a></p></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-07195836.js.map
