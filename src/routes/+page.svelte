<script>
    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;

</script>
<p style="font-size:5vw;">{path}Acerca de ANTOINEX</p>


<style>
@import url('https://fonts.googleapis.com/css2?family=Marmelad&family=Pacifico&family=Special+Elite&family=Tangerine:wght@400;700&family=Ultra&display=swap');

h1{
font-family: 'Special Elite';
margin: 2 8 1.0rem 0;
}

h2 {
margin: 0 8 1.0rem 0;
color: black;
padding: 5px;
font-family: 'Special Elite';
                }

h1:has(+ h2, p) {
  margin: 2 10 0.25rem 0;
}

p {
font-family: 'Special Elite', sans-serif;

                }

</style>

<div> 
  <h1 style="font-size:10vw;">¡Hola!</h1>   
  <h2 style="font-size:8vw;">Bienvenid@ a mi galería en linea: La Musa que Más Aplauda</h2>
  <p style="font-size:5vw;">Dibujar es un placer. Me permite descubrir lo que tengo en mi imaginación. Me gusta expresarme de esta manera. Poco a poco voy descubriendo la magia de animación, proyecciónes, murales y todo tipo de maneras de incorporar mis dibujos en la vida cotidiana.</p>
</div>
