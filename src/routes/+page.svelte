<script>
    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;

</script>
<!-- <p style="font-size:5vw;">{path}Acerca de ANTOINEX</p> -->

<div class='bienvenido'> 
  <h1 style="font-size:8vw;">Bienvenid@ a mi galería en linea:</h1>
</div>
<div class='musa'> 
  <h1 style="font-size:7vw;">La Musa que Más Aplauda</h1>
</div>
<div class='desc'>
  <p style="font-size:5vw;">Dibujar es un placer. Me permite descubrir lo que tengo en mi imaginación. Me gusta expresarme de esta manera. Poco a poco voy descubriendo la magia de animación, proyecciónes, murales y todo tipo de maneras de incorporar mis dibujos en la vida cotidiana.</p>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Marmelad&family=Pacifico&family=Special+Elite&family=Tangerine:wght@400;700&family=Ultra&display=swap');

.bienvenido {
border: 10px dotted black;
 background: #827179;
 background-clip: padding-box;
font-family: 'Special Elite';
margin: 10px;
padding: 10px;
text-align: center;
color: white;
}

.musa {
border: 10px dotted black;
 background: #ddd392;
 background-clip: padding-box;
font-family: 'Special Elite';
margin: 10px;
padding: 10px;
text-align: center;
color: black;
}

.musa a:hover {
color: green;
}
.desc {
border: 10px dotted black;
 background: #6c8ea9;
 background-clip: padding-box;
font-family: 'Special Elite';
margin: 10px;
padding: 10px;
text-align: center;
color: white;
}

.desc a:hover {
color: green;
}

</style>


