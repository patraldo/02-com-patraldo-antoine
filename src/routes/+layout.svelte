<script>
    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;

</script>

<nav style="font-size:3vw;">
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

nav a {
    color: #000;
    font-family: 'Special Elite';
    text-decoration: none;
    border: transparent solid 3px;
}

nav a:visited {
  color: grey;
  font-family: 'Special Elite';
}

nav a:hover {
    color: #FFF;
    background-color: #252525;
    font-family: "Special Elite";
}

nav a.active {
   background-color: #ddd392;
   font-family: 'Special Elite';
   font-size:6vw !important;
   border-radius: 25px;
  }

</style>


<slot></slot>
