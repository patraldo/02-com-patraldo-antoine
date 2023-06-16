<script>
    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;

</script>

<nav style="font-size:3vw; {path.toUpperCase()}">
<a href="/" class:active={$page.url.pathname == "/"}>Acerca</a>
<a href="/dibujos" class:active={$page.url.pathname == "/dibujos"}>Dibujos</a>
<a href="/animaciones" class:active={$page.url.pathname == "/animaciones"}>Animaciones</a>
<a href="/proyecciones" class:active={$page.url.pathname == "/proyecciones"}>Proyecciones</a>
<a href="/talleres" class:active={$page.url.pathname == "/talleres"}>Talleres</a>
<a href="/contacto" class:active={$page.url.pathname == "/contacto"}>Contacto</a>
</nav>

<!-- <h1 style="font-size:10vw;"> {path.toUpperCase()}</h1> -->


<style>
@import url('https://fonts.googleapis.com/css2?family=Hurricane&family=Inspiration&family=Special+Elite&display=swap');
/* Define variables for your colors */
h1 {
font-family: 'Special Elite';
}


nav a.active {
   background-color: grey;
   font-family: 'Special Elite';
   font-size:6vw !important;
   border-radius: 25px;

   
  }
:root {
	--color-shades-dark: rgb(25, 25, 25);
}

/* Use the alternative box model
Details: <https://web.dev/learn/css/box-model/> */
*{
	box-sizing: border-box;
}

/* Basic font styling */


nav a {
    color: #000;
    text-decoration: none;
    border: transparent solid 3px;
}


nav a:hover {
    color: #FFF;
    background-color: #252525;
    border-bottom: red solid 1px;
    font-family: "Special Elite";
}

nav a:focus{
    color: orange;
    text-decoration: underline;
}
nav a:active {
color: yellow;
text-decoration: underline !important;
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

</style>


<slot></slot>
