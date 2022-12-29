// estas funciones son de ejemplo

export const filterGender = (allcharacters,filterSelected) => {
  const nuevoArray = allcharacters.filter((obj) => obj.gender === filterSelected); //female Male
  console.log(nuevoArray);
  return nuevoArray;
  
}
