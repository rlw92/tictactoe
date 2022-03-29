 
 //constructor function
 const player = (name,marker) => {
    return{name,marker};

 }

 // array of players information
 let playerBase = [];
 let gameBoard=["","","","","","","","",""]
 let mip;
 let col;
 

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
//mip is marker in play
mip = playerBase[0].marker;
col = "red";


}


     return {toinp2,
           togame,
            }
 })();

 const playRound= (()=> {

  const chan = ()=>{ document.body.style = "background-color:yellow;";
  
  if(mip === playerBase[0].marker){mip = playerBase[1].marker; col = "blue";}
  else if(mip === playerBase[1].marker){mip = playerBase[0].marker; col = "red";}
  else{mip = playerBase[0].marker; col = "red";}
}

 const selectbox = ()=>{

 let fields = document.querySelectorAll(".field");
for (let i = 0; i < fields.length; i++) {
  fields[i].textContent = ""
 fields[i].addEventListener("click",()=>{fields[i].textContent = mip;
                                         fields[i].style.color = col;
                                         let f = fields[i].dataset.index
                                         gameBoard.splice(+f, 1, +f);
                                         playRound.chan();
                                         //added below log just to check theyre being added
                                         console.log(gameBoard);
                                        });
}
}

return {selectbox, chan}

})();
 
playRound.selectbox();

//winning arrays:
let winArr = [
[0,3,6],
[0,4,8],
[0,1,2],
[1,4,7],
[2,5,8],
[2,4,6],
[2,5,8],
[3,4,5],
[6,7,8]
]