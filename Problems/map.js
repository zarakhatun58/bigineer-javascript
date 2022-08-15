//map function

const animals=["cow", "cat", "goat","lamp"];

const newAnimals=animals.map(el =>{
    const animalUpperCase=el.toUpperCase();
    console.log(animalUpperCase);

    return animalUpperCase;
})