
import { filterGender, filterHouse } from '../src/data.js';


describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('returns filtro de genero', () => {
    const dataCharacters =[{"name": "Euan Abercrombie","gender": "Male"},{"name": "Hannah Abbott's mother","gender": "Female"},{"name": "Fallen Fifty", "gender": "Female"},];
    const filterSelected = "Female";
    expect(filterGender(dataCharacters,filterSelected)).toEqual([{"name": "Hannah Abbott's mother","gender": "Female"}, {"name": "Fallen Fifty", "gender": "Female"}]);
  });
});


describe('filterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  it('returns filtro de casas', () => {
    const dataCharacters=[{"name": "Euan Abercrombie","house": "Gryffindor"}];
    const houseSelected = "Gryffindor";
    expect(filterHouse(dataCharacters,houseSelected)).toEqual([{"name": "Euan Abercrombie","house": "Gryffindor",}]);
  });
});

