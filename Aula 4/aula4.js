var listaFilmes = [
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg",
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/19592-cartaz.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg",
  "http://vortexcultural.com.br/images/2016/11/Harry-Potter-e-o-C%C3%A1lice-de-Fogo.jpg",
  "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/7/174520140528-uau-posters-filmes-harry-potter-5-e-a-ordem-da-fenix--harry-potter-and-the-order-of-the-phoeni.jpg",
  "https://m.media-amazon.com/images/I/81irhjzNBeL._AC_SY741_.jpg",
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7767-cartaz.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Harry_Potter_and_the_Deathly_Hallows_-_Part_2.jpg/250px-Harry_Potter_and_the_Deathly_Hallows_-_Part_2.jpg"
];

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<img src=" + listaFilmes[indice] + ">");
}
