function addInfoAnimal() {
  let type = document.querySelector("#category").value;
  console.log(type);

  let name = document.querySelector("#name").value;
  console.log(name);

  let diet = document.querySelector("#diet").value;
  console.log(diet);

  let averageLife = document.querySelector("#average-life").value;
  console.log(averageLife);

  let size = document.querySelector("#size").value;
  console.log(size);

  let weight = document.querySelector("#weight").value;
  console.log(weight);

  let livePic = document.querySelector("#live-picture").value;
  console.log(livePic);

  let animalPic = document.querySelector("#animal-picture").value;
  console.log(animalPic);

  let about = document.querySelector("#about").value;
  console.log(about);

  const json = {
    type,
    name,
    diet,
    averageLife,
    size,
    weight,
    livePic,
    animalPic,
    about
  };

  pushToCategory("animals", json);

  document.querySelector("#category").value = "Choose";
  document.querySelector("#name").value = "";
  document.querySelector("#diet").value = "";
  document.querySelector("#average-life").value = "";
  document.querySelector("#size").value = "";
  document.querySelector("#weight").value = "";
  document.querySelector("#live-picture").value = "";
  document.querySelector("#animal-picture").value = "";
  document.querySelector("#about").value = "";
}

function getStorage(key) {
  let arr = {};
  let storage = localStorage.getItem(key);
  if (storage !== null) {
    arr = JSON.parse(storage);
  }
  return arr;
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function pushToCategory(key, value) {
  let data = getStorage(key);
  if (data[value.type] === undefined) {
    return false;
  }
  data[value.type].push(value);
  setStorage(key, data);
}

if (localStorage.getItem("animals") === null) {
  let initialState = {
    mammals: [],
    birds: [],
    reptiles: [],
    amphibians: [],
    invertebrates: [],
    fish: []
  };
  setStorage("animals", initialState);
}

function getAnimals(val) {
  let cat = val.split("=")[1];

  let animals = JSON.parse(localStorage.getItem("animals"));

  animals[cat].forEach(item => {
    document.querySelector("#table tbody").innerHTML += `<tr>
      <th scope="row">1</th>
      <td>${item.name}</td>
      <td>${item.type}</td>
      <td>
        <button type="button" class="btn btn-outline-success" onclick="showinfo('${item.name}', '${cat}')" data-toggle="modal" data-target="#exampleModalLong">
          info 
        </button>
      </td>
    </tr>`;
  });
}

function showinfo(val, cat) {
  let data = JSON.parse(localStorage.getItem("animals"));

  data[cat].forEach(item => {
    if (item.name == val) {
      document.querySelector("#modal-content").innerHTML = `
      <img src="${item.animalPic}">
      <ul class="list-group">
    
      <li class="list-group-item">Name: ${item.name}</li>
      <li class="list-group-item">Diet: ${item.diet}</li>
      <li class="list-group-item">Average Life: ${item.averageLife}</li>
      <li class="list-group-item">Size: ${item.size}</li>
      <li class="list-group-item">Weight: ${item.weight}</li>
      <li class="list-group-item">About: ${item.about}</li>
    
    </ul>
    <img src="${item.livePic}"></img> `;
    }
  });
}
