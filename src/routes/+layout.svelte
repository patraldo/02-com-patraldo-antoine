<script>
    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;

</script>

<nav style="font-size:4vw;">
<ul>
<li><a href="/" class:active={$page.url.pathname == "/"}>Acerca</a></li>
<li><a href="/dibujos" class:active={$page.url.pathname == "/dibujos"}>Dibujos</a></li>
<li><a href="/animaciones" class:active={$page.url.pathname == "/animaciones"}>Animaciones</a></li>
<li><a href="/videos" class:active={$page.url.pathname == "/videos"}>Videos</a></li>
<li><a href="/blog" class:active={$page.url.pathname == "/blog"}>Blog</a></li>
<li><a href="/proyecciones" class:active={$page.url.pathname == "/proyecciones"}>Proyecciones</a></li>
<li><a href="/talleres" class:active={$page.url.pathname == "/talleres"}>Talleres</a></li>
<li><a href="/contacto" class:active={$page.url.pathname == "/contacto"}>Contacto</a></li>

</ul>
</nav>

<!-- <h1 style="font-size:10vw;"> {path.toUpperCase()}</h1> -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Hurricane&family=Inspiration&family=Special+Elite&display=swap');


nav ul {
    flex-direction: column;
}

nav li {
    list-style: none;
    margin: 10px;
  }

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
   border-radius: 15px;
  }

</style>


<slot />
