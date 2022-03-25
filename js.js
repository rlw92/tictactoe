 
 //constructor function
 const player = (name,marker) => {
    return{name,marker};

 }

 // array of players information
 let playerBase = [{name:'rhys',
                    mark:'O'}];

 function createPlayer(){
   let name = document.getElementById('name').value;
   let marker = document.getElementById('marker').value;

  const newplayer = player(name,marker);
playerBase.push(newplayer);
 }

 //creates the inputs for the players to choose their name and marker
 /*commented out because I wanted to create the initial design first
then build on it later with this*/
/*
 function displayform(){
 let playerinput = document.createElement('input');
 playerinput.setAttribute('id','name');
 let markerinput = document.createElement('input');
 markerinput.setAttribute('id','marker');
 let submitButton = document.createElement('button');
 submitButton.classList.add("create");

document.body.appendChild(playerinput);
document.body.appendChild(markerinput);
document.body.appendChild(submitButton);}
displayform();*/

//document.querySelector('.create').addEventListener('click',createPlayer);

//create the tic tac toe grid
/*commented out because I wanted to create the initial design first
then build on it later with this*/

 function displayGrid(){
 let crecontainer = document.createElement('div');
 crecontainer.classList.add('container');
document.body.appendChild(crecontainer);
 let container = document.querySelector('.gamegrid');
document.querySelector('.gamegrid').style = 'display:flex;flex-wrap:wrap;justify-content:center;';
 for(i=0;i<9;i++) {
 let div = document.createElement('div');
div.style='padding:2px;width:20vw;height:30vh;background-color:white;border:solid black 2px;'
container.appendChild(div);}
 }
 displayGrid();
 
