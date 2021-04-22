/*
Code inspiration from 
https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
Using window session storage to count number of button clicks
before a particular button can be available to the player.
*/

function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      count = sessionStorage.clickcount;
       if (count >16){
          document.getElementById("invisible").style.display="";
	   }
			else {
				document.getElementById("invisible").style.display="none";
			}
      
    } else {
      sessionStorage.clickcount = 1;
	  document.getElementById("invisible").style.display="none";
    }
  } 
}
