function addInfoAnimal() {
  let type = document.querySelector("#category").value;

  let name = document.querySelector("#name").value;

  let diet = document.querySelector("#diet").value;

  let averageLife = document.querySelector("#average-life").value;

  let reg = new RegExp("^[0-9]+$");

  let size = document.querySelector("#size").value;

  let weight = document.querySelector("#weight").value;

  let livePic = document.querySelector("#live-picture").value;

  let animalPic = document.querySelector("#animal-picture").value;

  let about = document.querySelector("#about").value;
  console.log(event.target);

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

  if (type === "Choose") {
    return false;
  } else if (name.length < 2) {
    return false;
  } else if (diet.lengt < 2) {
    return false;
  } else if (!reg.test(averageLife) || averageLife.lengt < 0) {
    return false;
  }

  event.target.setAttribute("data-dismiss", "modal");

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

  animals[cat].forEach((item, index) => {
    document.querySelector("#table tbody").innerHTML += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${item.name}</td>
      <td>${item.type}</td>
      <td>
        <button type="button" class="btn btn-outline-success" onclick="showinfo('${
          item.name
        }', '${cat}')" data-toggle="modal" data-target="#exampleModalLong">
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

// search hissesi

function searchData() {
  event.preventDefault();
  let data = getStorage("animals");

  let searchVal = document.querySelector("#searchInput").value;

  let dataArr = [];
  let dataObjects = Object.keys(data);

  dataObjects.forEach(item => {
    data[item].map(item => {
      if (item.name.search(searchVal) !== -1) {
        dataArr.push(item);
      }
    });
    renderDOM(dataArr, searchVal);
  });
}

function renderDOM(value, userValue) {
  if (userValue == "") {
    document.querySelector("#push").innerHTML = "";
    return false;
  }

  // document.querySelector("#push").innerHTML = "";
  value.forEach((item, index) => {
    document.querySelector("#push").innerHTML = `
      <div class="card">
          <div class="card-header" id="heading${index}">
          <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">${index +
      1}. 
              ${item.name}
              </button>
          </h5>
          </div>

          <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#push">
          <img src="${item.animalPic}">
          <ul class="list-group">
              <li class="list-group-item">Name: ${item.name}</li>
              <li class="list-group-item">Diet: ${item.diet}</li>
              <li class="list-group-item">Average Life: ${item.averageLife}</li>
              <li class="list-group-item">Size: ${item.size}</li>
              <li class="list-group-item">Weight: ${item.weight}</li>
              <li class="list-group-item">About: ${item.about}</li>
      </ul>
      <img src="${item.livePic}"></img> 
          </div>
      </div>
      `;
  });
}

function showInfoAnimal(animalName, category) {
  let data = JSON.parse(localStorage.getItem("animals"));

  data[category].forEach(item => {
    if (item.name === animalName) {
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

// function getSearch() {
//   let input = $("#searchInput").val();
//   console.log(input);

//   let data = JSON.parse(localStorage.getItem("animals"));

//   // console.log(data);

//   let keys = Object.keys(data);
//   keys.forEach(item => {
//     data[item].map(item => {
//       if (input === item.name) {
//         document.querySelector("#push").innerHTML = `
//        <ul class="list-group">

//        <li class="list-group-item">Name: ${item.name}</li>
//        <li class="list-group-item">Diet: ${item.diet}</li>
//        <li class="list-group-item">Average Life: ${item.averageLife}</li>
//        <li class="list-group-item">Size: ${item.size}</li>
//        <li class="list-group-item">Weight: ${item.weight}</li>
//        <li class="list-group-item">About: ${item.about}</li>

//      </ul>
//        `;
//       }
//     });
//   });
// }
