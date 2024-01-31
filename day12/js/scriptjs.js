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
function Mypizza() {
  const pizza = {
    type: document.getElementById("pizzatype").value,
    size: document.getElementById("pizzasiza").value,
    toppings: document.getElementById("pizzatop").value,
    bake: function () {
      const message = `baking a ${this.type} ${this.size} crust ${this.toppings} pizza.`;
      console.log(message);
      return message;
    }
  };

  document.getElementById("value").innerHTML = pizza.bake();
}








