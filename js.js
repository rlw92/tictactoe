 
 //constructor function
 const player = (name,marker) => {
    return{name,marker};

 }

 // array of players information
 let playerBase = [];
 let gameBoard=["","","","","","","","",""]
 let mip;
 

//my first module. it controls the initial forms at the start
 const formcontrols = (()=>{
   //gets the first form data and hides it
  const toinp2 = () => {
   let name = document.getElementById("name").value;
   document.getElementById("player1name").textContent = name;
   let marker = document.getElementById("marker").value;
   document.getElementById("player1marker").textContent = marker;

   document.querySelector(".inputscreen1").style.display = "none"
   document.querySelector(".inputscreen2").style.display = "flex"

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
mip = playerBase[0].marker;


}


     return {toinp2,
           togame,
            }
 })();


 //mip = markerinplay
 function chan(){
   document.body.style = "background-color:yellow;";
  
   if(mip === playerBase[0].marker){mip = playerBase[1].marker}
   else if(mip === playerBase[1].marker){mip = playerBase[0].marker}
   else{mip = playerBase[0].marker}
  
   
 }

 


 const playRound= (()=> {

 const selectbox = ()=>{

 let fields = document.querySelectorAll(".field");
for (let i = 0; i < fields.length; i++) {
  fields[i].textContent = ""
 fields[i].addEventListener("click",()=>{fields[i].textContent = mip;
                                         fields[i].style.color = "blue";
                                         chan();
                                        });
}
}

return {selectbox}

})();
 
playRound.selectbox();

