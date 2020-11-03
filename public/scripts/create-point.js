//Cadastro de endereço
function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      }
    });
}

populateUFs();

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");

  const ufValue = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  citySelect.innerHTML = "<option value> Selecione a Cidade</option>";
  citySelect.disabled = true;

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (const city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
      }

      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

//Itens de coleta
//pega todos os li.
//Cada um item adiciona uma callback para ser executada toda vez que for clicada
const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

//pegando items de coleta
//atualizar o campo escondido com os itens selecionados parte 1
const collectedItems = document.querySelector("input[name=items]");

//colocando os valores
let selectItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;

  //adicionar ou remover uma classe com javascript
  itemLi.classList.toggle("selected");

  const itemId = event.target.dataset.id;

  console.log("ITEM ID: ", itemId);

  //verificando se existe itens selecionados, se sim
  //pegar os itens selecionados
  const alreadySelected = selectItems.findIndex((item) => {
    const itemFound = item == itemId; //verdadeiro ou falso
    return itemFound;
  });

  //se já estiver selecionado, tirar da seleção
  if (alreadySelected >= 0) {
    //tirando a seleção
    const filteredItems = selectItems.filter((item) => {
      const itemIsDiferent = item != itemId;
      return itemIsDiferent;
    });
    selectItems = filteredItems;
  } else {
    //se não tiver selecionado, adicionar à seleção
    selectItems.push(itemId);
  }

  console.log("ITEM ID: ", itemId);

  //atualizar o campo escondido com os itens selecionados parte 2
  collectedItems.value = selectItems;
}
