// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const section = document.getElementById('pokemon');

for (let i = 1; i <= 9; i++) {
  const pokemon = document.createElement('div');//<div> タグを新しく1個作る。まだHTMLには追加していない、メモリの中だけにある状態。
  pokemon.classList.add('pokemon');//CSSを当てるための準備

  const newImg = document.createElement('img');
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  pokemon.appendChild(newImg);
  section.appendChild(pokemon);
}