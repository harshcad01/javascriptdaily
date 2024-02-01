console.log("HOW TO CREATE OBJECT");

const cars= {
  brand: "Toyota",
  carname: "Crista",
  model: "2021",
};
console.log(cars.brand);
console.log(cars.carname);
console.log(cars.model);

console.log("Creating a function in side the object");
//Adding a method to the object

  const pizza = {
    type: "margherita",
    size: "small",
    toppings: "double cheese",
    bake: function () {
      const message = `baking a ${this.type} ${this.size} crust ${this.toppings} pizza.`;
      console.log(message);
      return message;
    }
  };
 pizza.bake();
 