let colorArray = ["White", "Blue", "Black", "Red","Green"]
let whitePacks = ["Doctor", "Holy", "Angels", "Cats"]
let bluePacks = ["Archaelogy", "Scrying", "Detective"]
let blackPacks = ["Rats","Zombies"];
let redPacks = ["Golbins","Lightning","Fiery","Cycling"]
let greenPacks = ["Elves"]
let currColor = colorArray[Math.floor(Math.random() * colorArray.length)]
let firstPicked = false;
let secondPicked = false;
//Buttons
const whiteButt = document.getElementById("white-input")
const blueButt = document.getElementById("blue-input")
const blackButt = document.getElementById("black-input")
const redButt = document.getElementById("red-input")
const greenButt = document.getElementById("green-input")
const reloadButt = document.getElementById("reload")
const randomColor = document.getElementById("random-color")
const chosenColor = document.getElementById("chosen-color")
const packOne = document.getElementById("first-pack")
const packTwo = document.getElementById("second-pack")

packOne.innerText = "Your 1st Pack";
packTwo.innerText = "Your 2nd Pack";
chosenColor.innerText = ""

const pickColor = () => {
  currColor = colorArray[Math.floor(Math.random() * colorArray.length)]
  chosenColor.innerText = `${currColor}`;  
}

const choosePack = (color) => {
  if (firstPicked == false){
    firstPicked = true;
    if (color == "White") {
    packOne.innerText = whitePacks[Math.floor(Math.random() * whitePacks.length)]
    }
    if (color == "Blue") {
      packOne.innerText = bluePacks[Math.floor(Math.random() * bluePacks.length)]
      }
    if (color == "Black") {
      packOne.innerText = blackPacks[Math.floor(Math.random() * blackPacks.length)]
      }
    if (color == "Red") {
      packOne.innerText = redPacks[Math.floor(Math.random() * redPacks.length)]
      }  
    if (color == "Green") {
      packOne.innerText = greenPacks[Math.floor(Math.random() * greenPacks.length)]
      }     
  }else if (secondPicked == false){
    secondPicked = true;
    if (color == "White") {
      packTwo.innerText = whitePacks[Math.floor(Math.random() * whitePacks.length)]
      }
      if (color == "Blue") {
        packTwo.innerText = bluePacks[Math.floor(Math.random() * bluePacks.length)]
        }
      if (color == "Black") {
        packTwo.innerText = blackPacks[Math.floor(Math.random() * blackPacks.length)]
        }
      if (color == "Red") {
        packTwo.innerText = redPacks[Math.floor(Math.random() * redPacks.length)]
        }  
      if (color == "Green") {
        packTwo.innerText = greenPacks[Math.floor(Math.random() * greenPacks.length)]
        }
      }    
 console.log(color);
}

const clear = () => { //reloads page for new game
  location.reload();
  }

randomColor.addEventListener("click", pickColor);
whiteButt.addEventListener("click", () => { choosePack("White"); });
blueButt.addEventListener("click", () => { choosePack("Blue"); });
blackButt.addEventListener("click", () => { choosePack("Black"); });
redButt.addEventListener("click", () => { choosePack("Red"); });
greenButt.addEventListener("click", () => { choosePack("Green"); });
reloadButt.addEventListener("click", clear);