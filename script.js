// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const section = document.getElementById('pokemon');

for (let i = 1; i <= 9; i++) {

  const topRow = [1, 2, 3, 4, 5, 6];
  const bottomRow = [7, 8, 9];

  function creatRow(number) {
    const row = document.createElement('div');
    row.classList.add('pokemon-row');

    number.map(i => {
      const pokemon = document.createElement('div');
      pokemon.classList.add('pokemon');

      const newImg = document.createElement('img');
      newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
      // 途中です！！！

    })
  }




  pokemon.appendChild(newImg);
  section.appendChild(pokemon);
}