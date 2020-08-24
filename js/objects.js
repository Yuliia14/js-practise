const house = {
  address: "смт Щасливе, вул. Лісова, 15",
  floors: 2,
  square: 85,
  bedrooms: 3,
  changeAddress(newAddress) {
    this.address = newAddress;
  },
};
house.changeAddress("смт Щасливе, вул.Лісова, 20");

house.bathrooms = 2;

console.log(house);

/*const bedroomsQuantity = "bedrooms";
console.log(house);

console.log(house[bedroomsQuantity]);
console.log(house["bedrooms"]);

const massive = [1, 2, 3, 4];

massive.push(5);

console.log(massive);
console.log(massive.push);

/*const name = "Yuliia";
const email = "bevko.yulka@gmail.com";

const signupData = {
  name,
  email,
};

console.log(signupData);

const inputName = "color";
const inputValue = "blue";

const colorData = {
  [inputName]: inputValue,
};

console.log(colorData);*/
