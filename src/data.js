// estas funciones son de ejemplo

//Filtro por género
export const filterGender = (dataCharacters,filterSelected) => {
  const filteredArray = dataCharacters.filter((charac) => charac.gender === filterSelected); 
  //console.log(filteredArray);
  const newArray = dataCharacters.filter((charac) => charac.gender === "Female Male");
  //console.log(newArray);
  const nuevoArray = filteredArray.concat(newArray); 
  //console.log(nuevoArray);
  return nuevoArray;
  
}

//Filtro por casa de estudio
export const filterHouse = (dataCharacters,houseSelected) => {
  const nuevoArray = dataCharacters.filter((charac) => charac.house === houseSelected); 
  //console.log(nuevoArray);
  return nuevoArray;
  
}

export const sortBooks = (dataBooks, sortSelected) => {
  let arraySort = [];
  if(sortSelected === "Newest"){
    arraySort =dataBooks.sort((a, b) => {
      if(a.id > b.id) { // a debe ser mayor que b
        return -1;     // a antes que b  
      }
      return 1;    //b antes que a
    })} 

  else if(sortSelected === "Oldest")  
    arraySort =dataBooks.sort((a, b) => {
      if(a.id < b.id) { //a debe ser menor que b
        return -1; 
      }     
    }); 
  //console.log(arraySort);
  return arraySort;
}


/*export const order=(dataCharacters,ordercontent) => {
  const sortArray= dataCharacters.sort((a, b) => {
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return sortArray;
  })
}*/

