// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const section = document.getElementById('pokemon');

const topRow = [1, 2, 3, 4, 5, 6];
const bottomRow = [7, 8, 9];

function createRow(numbers) {
  const row = document.createElement('div');
  row.classList.add('pokemon-row');

  numbers.map(i => {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    pokemon.appendChild(newImg);
    row.appendChild(pokemon);
  });

  return row;

}

section.appendChild(createRow(topRow));
section.appendChild(createRow(bottomRow));
