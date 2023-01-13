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

  for(let i=0; i<data.length; i++){
    //const charac = dataCharacters[i];


    //data.forEach((charac) => {
    const line = document.createElement('li');
    const content = document.createTextNode( "Name: " + data[i].name + ", Date of birth: " + data[i].birth +  ", Specie :" + data[i].species +  ", House: " + data[i].house + ", Gender: " + data[i].gender);
    line.appendChild(content); // para que aparezca lo creado
    nameList.appendChild(line);
    //content.sort(charac.name);
    //onsole.log(content);
  }
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

  const releaseDay = [];
  const description = [];
  let covers = [];

  covers = ["./imagenes/book1.jpg",
    "./imagenes/book2.jpg",
    "./imagenes/book3.jpg",
    "./imagenes/book4.jpg",
    "./imagenes/book5.jpg",
    "./imagenes/book6.jpg",
    "./imagenes/book7.jpg",
    "./imagenes/book8.jpg"];

  for(let i=0; i<covers.length; i++){

    booksBox =document.createElement('div');
    booksBox.setAttribute("class","booksBox");
    divFront = document.createElement('div');
    divFront.setAttribute("class","bookDesignFront");
    img = document.createElement('img');
    img.setAttribute("src",covers[i]);

    divFront.append(img); // para que aparezca lo creado
    divBack = document.createElement('div');
    divBack.setAttribute("class","bookDesignBack");
    lineBack = document.createElement('p');
    //const contentBack = document.createTextNode("ReleaseDay: " + book1.releaseDay + "Description" + book1.description);
    //const newRelease = JSON.stringify({ releaseDay });
    lineBack.append("Release Day: " + dataBooks[i].releaseDay + " Description: " + dataBooks[i].description);
    divBack.append(lineBack); // para que aparezca lo creado

    booksBox.append(divFront, divBack);
    nameList.append(booksBox);

    //console.log(booksBox);
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
