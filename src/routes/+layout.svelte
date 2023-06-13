<div>
<style>

	:global(body) {
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
	/* this will apply to all `<div>` elements in the DOM */
color: goldenrod;
}
</style>
<ul>
<li>
<a href="/">Home</a>
</li>
<li>
<a href="/talleres">Talleres</a>
</li>
<li>
<a href="/about" aria-current="page">Acerca de Antoine</a>
</li>
<li>
<a href="/contact">Contacto</a>
</li>
</ul>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hurricane&family=Inspiration&family=Special+Elite&display=swap');
/* Define variables for your colors */
:root {
	--color-shades-dark: rgb(25, 25, 25);
}

/* Use the alternative box model
Details: <https://web.dev/learn/css/box-model/> */
*{
	box-sizing: border-box;
}

/* Basic font styling */
ul {
	font-family: "Special Elite";
	font-size: 2.5rem;
}
/* Define variables for your colors */
:root {
	--color-shades-dark: rgb(25, 25, 25);
	--color-shades-light: rgb(165, 167, 175);
	--color-highlight: rgb(24, 54, 145);
}

/* Use the alternative box model */
* {
	box-sizing: border-box;
}

/* Basic link styling */
a {
	--text-color: var(--color-shades-dark);

	border-block-end: 3px solid var(--border-color, transparent);
color: var(--text-color);
display: inline-block;
	 margin-block-end: 0.5rem;
	 margin-inline-end: 0.5rem;
padding: 0.1rem;
	 text-decoration: none;
}

/* Change the border-color on :hover and :focus */
a:where(:hover, :focus) {
	  --border-color: var(--text-color);
  }

/* Change border-color and color for the active page */
[aria-current="page"] {
	--border-color: var(--color-highlight);
	--text-color: var(--color-highlight);
}


</style>

<slot></slot>
