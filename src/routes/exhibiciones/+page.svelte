<script>
    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;

</script>
<!-- <p style="font-size:5vw;">{path}Exhibiciones</p> -->

<div class='desc'>
  <p style="font-size:5vw;">Estamos preparando la exhibición inaugural de "Tray Chic". Ponemos que será en Octubre de 2023 en el lugar del difunto restaurante ¡Pinche Poutine! Más detalles próximamente.</p>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Marmelad&family=Pacifico&family=Special+Elite&family=Tangerine:wght@400;700&family=Ultra&display=swap');

.desc {
border: 10px dotted black;
 background: #C3ABB3;
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


