import { c as create_ssr_component } from './index2-07f5b75e.js';

const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Hurricane&family=Inspiration&family=Special+Elite&display=swap');:root{--color-shades-dark:rgb(25, 25, 25)}.svelte-1yxkatj{box-sizing:border-box}ul.svelte-1yxkatj{font-family:"Special Elite";font-size:2.5rem}:root{--color-shades-dark:rgb(25, 25, 25);--color-shades-light:rgb(165, 167, 175);--color-highlight:rgb(24, 54, 145)}.svelte-1yxkatj{box-sizing:border-box}a.svelte-1yxkatj{--text-color:var(--color-shades-dark);border-block-end:3px solid var(--border-color, transparent);color:var(--text-color);display:inline-block;margin-block-end:0.5rem;margin-inline-end:0.5rem;padding:0.1rem;text-decoration:none}a.svelte-1yxkatj:where(:hover, :focus){--border-color:var(--text-color)}[aria-current="page"].svelte-1yxkatj{--border-color:var(--color-highlight);--text-color:var(--color-highlight)}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-1yxkatj"><style class="svelte-1yxkatj">:global(body) {
		/* this will apply to <body> */
		margin: 0;
	}

	div :global(strong) {
		/* this will apply to all <strong> elements, in any
			 component, that are inside <div> elements belonging
			 to this component */
		color: goldenrod;
	}

	p:global(.red) {
		/* this will apply to all <p> elements belonging to this 
			 component with a class of red, even if class="red" does
			 not initially appear in the markup, and is instead 
			 added at runtime. This is useful when the class 
			 of the element is dynamically applied, for instance 
			 when updating the element's classList property directly. */
	}
/* this style tag will be inserted as-is */
div {
	/* this will apply to all \`<div>\` elements in the DOM */
color: goldenrod;
}
</style>
<ul class="svelte-1yxkatj"><li class="svelte-1yxkatj"><a href="/" class="svelte-1yxkatj">Home</a></li>
<li class="svelte-1yxkatj"><a href="/talleres" class="svelte-1yxkatj">Talleres</a></li>
<li class="svelte-1yxkatj"><a href="/about" aria-current="page" class="svelte-1yxkatj">Acerca de Antoine</a></li>
<li class="svelte-1yxkatj"><a href="/contact" class="svelte-1yxkatj">Contacto</a></li></ul></div>



${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-0e517371.js.map
