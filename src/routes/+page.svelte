<script>
    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;

</script>
<!-- <p style="font-size:5vw;">{path}Exhibiciones</p> -->

<div class='bienvenido'> 
  <h1 style="font-size:8vw;">Bienvenid@ a mi galería en Santa Tere, Guadalajara:</h1>
</div>
<div class='musa'> 
  <h1 style="font-size:7vw;">La Musa que Más Aplauda</h1>
</div>
<div class='desc'>
  <p style="font-size:5vw;">Estamos preparando la exhibición inagural de "Tray Chic". Ponemos que será en Octubre de 2023 en el lugar del difunto restaurante ¡Pinche Poutine! Más detalles próximamente.</p>
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


