 
 //constructor function
 const player = (name,marker) => {
    return{name,marker};

 }

 // array of players information
 let playerBase = [{name:'example',
                    mark:'z'}];

 

 
//my first module. it controls the initial forms at the start
 const formcontrols = (()=>{
   //gets the first form data and hides it
  const toinp2 = () => {
   let name = document.getElementById("name").value;
   document.getElementById("player1name").textContent = name;
   let marker = document.getElementById("marker").value;
   document.getElementById("player1marker").textContent = marker;

   document.querySelector(".inputscreen1").style.visibility = "hidden"
   document.querySelector(".inputscreen2").style.visibility = "visible"
   const newplayer = player(name,marker);
playerBase.push(newplayer);
  }

   //gets the second form data, hides it and displays the grid
  const togame = () => {
    let name = document.getElementById("name2").value;
   document.getElementById("player2name").textContent = name;
   let marker = document.getElementById("marker2").value;
   document.getElementById("player2marker").textContent = marker;

   document.querySelector(".inputscreen1").style.display = "none"
   document.querySelector(".inputscreen2").style.display = "none"
   document.querySelector(".screen").style.visibility = "visible"
   const newplayer = player(name,marker);
playerBase.push(newplayer);
   
  }


   return {toinp2,
           togame};
 })();

 const gameBoardd = 

