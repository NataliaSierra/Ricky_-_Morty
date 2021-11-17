const URL = "https://rickandmortyapi.com/api/character/";
const select = document.getElementById('opt-character');
const paintCard = document.getElementById('main');

select.addEventListener('change',renderCard);
getCharacter();

function getCharacter() {
  fetch(URL)
  .then(response=>response.json())
  .then(data=>{
    data.results.forEach(element => {
      const option_element = document.createElement('option');
      option_element.value = element.name;
      option_element.textContent = element.name;
      select.appendChild(option_element);
      //console.log(element);//Trae nombre de los personajes:  console.log(element.name);
      console.log(option_element.value);//Nombres de los personajes.
    });
  })
}

function createCard(character){
  const divCard = document.createElement('div');
  const nameTitle = document.createElement('h2');
  const genderCharacter = document.createElement('p');
  const imageCharacter = document.createElement('img');

  nameTitle.textContent = character.name;
  genderCharacter.textContent = character.gender;
  imageCharacter.setAttribute('src', character.image);
  imageCharacter.setAttribute('alt', character.name);
  
  divCard.appendChild(nameTitle);
  divCard.appendChild(genderCharacter);
  divCard.appendChild(imageCharacter);

  main.appendChild(divCard);
}

function renderCard(){
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    if(select.value == 'everybody'){
      data.results.forEach(card => {main.innerHtml = '';createCard(card)})
    } else {
      data.results.forEach(card=>{
        if(card.name == select.value) {
          main.innerHtml = '';
          createCard(card)
        }
      });
    }
  })
}