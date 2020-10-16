const { Package, Passenger } = require("./models");

const passengers = [
  { name: "Tony Stark", code: "KLP89" },
  { name: "Lionel Messi", code: "KLP89" },
  { name: "Lucas Escudero", code: "KLP89" },
  { name: "Elon Musk", code: "KLP89" }
];

const packages = [
  { category: 1, PassengerId: 1 },
  { category: 1, PassengerId: 2 },
  { category: 1, PassengerId: 3 },
  { category: 1, PassengerId: 4 },
  { category: 2, PassengerId: 1 },
  { category: 2, PassengerId: 2 },
  { category: 2, PassengerId: 3 },
  { category: 2, PassengerId: 4 },
  { category: 3, PassengerId: 1 },
  { category: 3, PassengerId: 2 }
];

Passenger.bulkCreate(passengers)
  .then(() => {
    Package.bulkCreate(packages)
      .then(() => console.log("El seed se completo sin problemas."))
      .catch(console.log);
  })
  .catch(console.log);
