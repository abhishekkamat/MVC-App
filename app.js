const houses= [
    {
        code:"ST",
        name:"Stark"
    },
    {
        code:"TA",
        name:"Targaryen"
    },
    {
        code:"LA",
        name:"Lannister"
    },
    {
        code:"BA",
        name:"Baratheon"
    }
];

const getCharacters= housecode=>{
    switch(housecode){
        case "ST":
            return ["Eddard", "Catelyn", "Jon Snow", "Rob", "Arya", "Sansa"];
        case "LA":
            return["Tywin", "Tyrion", "Jamie", "Cersei"];
        case "TA":
            return["Danerys", "Aerys", "Viserys"];
        case "BA":
            return["Robert", "Stannis", "Renly", "Jofferey"];
        default:
            return[];
    }
};

const createOptionElement=(text,value)=>{
    const element=document.createElement("option");
    element.textContent=text;
    element.value=value;
    return element;
}

const createLiElement=text=>{
    const element=document.createElement("li");
    element.textContent=text;
    return element;
};

const houseElement=document.querySelector("select");

houses.forEach(house=>{
    houseElement.appendChild(createOptionElement(house.name,house.code));
});

houseElement.addEventListener("change", e => {
    // The value of the event target is the house code
    const characters = getCharacters(e.target.value);
    const characterElement = document.getElementById("characters");
    // Empty the list
    characterElement.innerHTML = "";
    // Add each character to the list
    characters.forEach(character => {
      characterElement.appendChild(createLiElement(character));
    });
  });


