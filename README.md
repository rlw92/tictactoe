# tictactoe
The tic tac toe project in the Odin Project

design ideas:

* I currently have a small border indicating which colour the player is. When hovering over a grid I 
would like to be able to tell which player it is by having a trasparent colored marker show on the surface.
When the marker is down the marker should be in the players color.

*The congratulations message should be comepletely in the players color.


pseudocode for players

when player clicks on a square:
the index of the div gets put iinto that players choice array.
The players choice array is then compared to each winning array to see if it  matches
if it matches one of the winning arrays then the game is stopped, a message appears congratulating the player
and the game resets

pseudocode for winning hand 

every time  a player clicks a box his index is  entered into his array and his array is then  put into a function
that loops through each winning array, if a number matches then it put into the winning hand array and if 
there are three matches (winningHand.length === 3) then the player wins and if not then the game continues with the next player.



