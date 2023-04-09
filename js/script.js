const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const pokemontype = document.querySelector('.types')
const pokemonkick = document.querySelector('.kicks')

const pokemonHp = document.querySelector('.pokemon__hp')
const pokemonAtk = document.querySelector('.pokemon__atk')
const pokemonDef = document.querySelector('.pokemon__def')

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

const footer = document.querySelector('.logo');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonHp.innerHTML =  data['stats']['0']['base_stat'];
    pokemonAtk.innerHTML = data['stats']['1']['base_stat'];
    pokemonDef.innerHTML = data['stats']['2']['base_stat'];

    if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'fire'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/fire.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'water'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/agua.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'grass'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/grama.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'poison'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/poison.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'bug'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/bug.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'normal'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/normal.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'electric'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/eletric.png')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'ground'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/graund.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'fairy'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/fairy.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'fighting'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/ringbox.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'psychic'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/psychic.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'ghost'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/ghost.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else if(pokemontype.innerHTML = data['types']['0']['type']['name']  == 'dragon'){
      var body = document.body;
      body.style.backgroundRepeat = "no-repeat";
      body.style.background = "url('./images/dragon.jpg')";
      body.style.backgroundSize = "cover";
      footer.setAttribute('src', './images/logo-branco.png');
    }
    else{
      document.body.style.background = ""
      footer.setAttribute('src', './images/logo.png');
    }

    if(pokemontype.innerHTML = data['types']['1'] == null){
      pokemontype.innerHTML = 'Tipo: ' + data['types']['0']['type']['name']    
    }
    else{
      pokemontype.innerHTML = 'Tipo: ' + data['types']['0']['type']['name'] + ' / ' + data['types']['1']['type']['name'] ;
     
    }  
    if(pokemonkick.innerHTML = data['abilities']['1'] == null){
      pokemonkick.innerHTML = 'ATK: ' + data['abilities']['0']['ability']['name'] 
    }
    else{
      pokemonkick.innerHTML = 'ATK: ' + data['abilities']['0']['ability']['name']  + ' / ' + data['abilities']['1']['ability']['name'] ;
    }  
    if((pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']) == null){
      pokemonImage.src = data['sprites']['front_default'];
    }
    input.value = '';
    searchPokemon = data.id;
  } else {
    
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found :c';
    pokemonNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
  
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
