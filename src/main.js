/* eslint-disable no-unused-vars */
import { filterGender, filterHouse } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';


const dataCharacters = data.characters;
const dataBooks = data.books;
const nameList=document.querySelector("#characterscontenido");

//boton home
document.getElementById("home").addEventListener("click",function(){
  showhome();
});
function showhome(){
  nameList.innerHTML="";
  document.getElementById("pantallapersonajes").style.display="none";
  document.getElementById("filtrobooks").style.display="none";
  document.getElementById("cajaHome").style.display="block";

}
//Botón personajes
document.getElementById("characters").addEventListener("click",function(){
  showCharacters(dataCharacters);
  document.getElementById("cajaHome").style.display="none";

});
//console.log(dataCharacters);

//Crea la lista con los personajes
function showCharacters(data){
  document.getElementById("cajadefiltros").style.display="block";
  document.getElementById("pantallapersonajes").style.display="block";
  document.getElementById("filtrobooks").style.display="none";
  nameList.innerHTML="";
  //allcharacters.forEach(function(data){

  data.forEach((charac) => {
    const line = document.createElement('li');
    const content = document.createTextNode( "Name: " + charac.name + ", Date of birth: " + charac.birth +  ", Specie :" + charac.species +  ", House: " + charac.house + ", Gender: " + charac.gender);
    line.appendChild(content); // para que aparezca lo creado
    nameList.appendChild(line);
  });
}

const filterSelected = document.getElementById("gender");
//console.log(filterSelected);

filterSelected.addEventListener("change", function (){
  nameList.innerHTML = "";
  if(filterSelected.value==="Selected")
    showCharacters(dataCharacters);
  else
    showCharacters(filterGender(dataCharacters, filterSelected.value));

});

const houseSelected = document.getElementById("filterhouse");
//console.log(filterSelected);

houseSelected.addEventListener("change", function (){
  nameList.innerHTML = "";
  if(houseSelected.value==="Selected")
    showCharacters(dataCharacters);
  else
    showCharacters(filterHouse(dataCharacters, houseSelected.value));

});



//boton libros
document.getElementById("books").addEventListener("click",function(){
  showbooks();
});

function showbooks(){
  nameList.innerHTML="";
  document.getElementById("cajadefiltros").style.display="block";
  document.getElementById("pantallapersonajes").style.display="none";
  document.getElementById("filtrobooks").style.display="block";
  document.getElementById("cajaHome").style.display="none";


  let booksBox="";
  let divFront="";
  let img="";
  let divBack="";
  let lineBack="";

  let releaseDay = [];
  let description = [];
  let covers = [];

  covers = ["./imagenes/book1.jpg",
    "./imagenes/book2.jpg",
    "./imagenes/book3.jpg",
    "./imagenes/book4.jpg",
    "./imagenes/book5.jpg",
    "./imagenes/book6.jpg",
    "./imagenes/book7.jpg",
    "./imagenes/book8.jpg"];


  releaseDay = dataBooks.map(({releaseDay}) => ({releaseDay}));
  //releaseDay = Object.entries(dataBooks.releaseDay).map(i=>i[0]);
  description = dataBooks.map(({description}) => ({description}));
  //description = Object.entries(dataBooks.description).map(i=>i[0]);
  //const descripcion = Object.values(description);
  //console.log(descripcion);

  console.log(covers);
  console.log(releaseDay);
  console.log(description);

  for (const property in dataBooks) {
    //console.log(`${property}: ${dataBooks[property]}`);
  }

  for(let i=0; i<covers.length; i++){

    booksBox =document.createElement('div');
    booksBox.setAttribute("class","booksBox");
    divFront = document.createElement('div');
    divFront.setAttribute("class","bookDesignFront");
    img = document.createElement('img');
    img.setAttribute("src",covers[i]);

    divFront.append(img); // para que aparezca lo creado

    for(let j=0; j<description.length; j++) {

      divBack = document.createElement('div');
      divBack.setAttribute("class","bookDesignBack");
      lineBack = document.createElement('p');
      //const contentBack = document.createTextNode("ReleaseDay: " + book1.releaseDay + "Description" + book1.description);
      //const newRelease = JSON.stringify({ releaseDay });
      lineBack.append("Release Day: " + releaseDay[j] + " Description: " + description[j]);
      divBack.append(lineBack); // para que aparezca lo creado

      booksBox.append(divFront, divBack);
      nameList.append(booksBox);

      console.log(booksBox);

    }
  }


}
/*
  dataBooks.forEach((book) => {

    booksBox =document.createElement('div');
    booksBox.setAttribute("class","booksBox");
    divFront = document.createElement('div');
    divFront.setAttribute("class","bookDesignFront");
    img = document.createElement('img');
    img.src = "./imagenes/book1.jpg"


    divFront.append(img); // para que aparezca lo creado
    //nameList.appendChild(lineFront);



    const divBack = document.createElement('div');
    const lineBack = document.createElement('p');
    //const contentBack = document.createTextNode("ReleaseDay: " + book1.releaseDay + "Description" + book1.description);
    lineBack.append("Release Day: " + book.releaseDay + " Description: " + book.description);
    divBack.appendChild(lineBack); // para que aparezca lo creado
    //nameList.appendChild(lineBack);

    divBack.setAttribute("class","bookDesignBack");

    booksBox.append(divFront, divBack);
    nameList.append(booksBox);

  })
} */
