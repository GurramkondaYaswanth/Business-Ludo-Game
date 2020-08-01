const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
const box7 = document.querySelector("#box7");
const box8 = document.querySelector("#box8");
const box9 = document.querySelector("#box9");
const box10 = document.querySelector("#box10");
const box11 = document.querySelector("#box11");
const box12 = document.querySelector("#box12");
const box13 = document.querySelector("#box13");
const box14 = document.querySelector("#box14");
const box15 = document.querySelector("#box15");
const box16 = document.querySelector("#box16");
const box17 = document.querySelector("#box17");
const box18 = document.querySelector("#box18");
const box19 = document.querySelector("#box19");
const box20 = document.querySelector("#box20");
const box21 = document.querySelector("#box21");
const box22 = document.querySelector("#box22");
const box23 = document.querySelector("#box23");
const box24 = document.querySelector("#box24");
const box25 = document.querySelector("#box25");
const box26 = document.querySelector("#box26");
const box27 = document.querySelector("#box27");
const box28 = document.querySelector("#box28");
const box29 = document.querySelector("#box29");
const box30 = document.querySelector("#box30");
const box31 = document.querySelector("#box31");
const box32 = document.querySelector("#box32");
const box33 = document.querySelector("#box33");
const box34 = document.querySelector("#box34");
const box35 = document.querySelector("#box35");
const box36 = document.querySelector("#box36");
const box37 = document.querySelector("#box37");
const box38 = document.querySelector("#box38");
const box39 = document.querySelector("#box39");
const box40 = document.querySelector("#box40");
const box41 = document.querySelector("#box41");
const box42 = document.querySelector("#box42");
const box43 = document.querySelector("#box43");
const box44 = document.querySelector("#box44");
const box45 = document.querySelector("#box45");
const box46 = document.querySelector("#box46");
const box47 = document.querySelector("#box47");
const box48 = document.querySelector("#box48");

var money = []; //for display of coins in each box
var k = 0;
for (var i = 5; i < 240;) {
  money[k++] = i;
  i = i + 5;
}
money[47] = "endpoint";
console.log(money);

// var arrdiv = [];
// for (var j = 0; j < 48; j++) {
//   arrdiv[j] = "box" + (j + 1);
// }
// console.log(arrdiv);

var arrdiv = [
  //each box representations
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  box10,
  box11,
  box12,
  box13,
  box14,
  box15,
  box16,
  box17,
  box18,
  box19,
  box20,
  box21,
  box22,
  box23,
  box24,
  box25,
  box26,
  box27,
  box28,
  box29,
  box30,
  box31,
  box32,
  box33,
  box34,
  box35,
  box36,
  box37,
  box38,
  box39,
  box40,
  box41,
  box42,
  box43,
  box44,
  box45,
  box46,
  box47,
  box48,
];

const magicCard = document.getElementById("image"); //magic card default display id

const pawn11 = document.getElementById("magic11"); //pawns used after rolling the magic card
pawn11.style.visibility = "hidden";
const pawn12 = document.getElementById("magic12");
pawn12.style.visibility = "hidden";
const pawn13 = document.getElementById("magic13");
pawn13.style.visibility = "hidden";
const pawn21 = document.getElementById("magic21");
pawn21.style.visibility = "hidden";
const pawn22 = document.getElementById("magic22");
pawn22.style.visibility = "hidden";
const pawn23 = document.getElementById("magic23");
pawn23.style.visibility = "hidden";

alert(
  "Welcome! to Business Ludo game, at the right side of the screen u will see instructions text, click on that for rules and instructions for playing. If u already know then start the game and enjoy✌️"
);
var diceCount1 = 0; // for counting how many consective times he is pressing the button
var diceCount2 = 0;
var safeArr1 = []; //array for storing the safe box places of team1
var T1 = 0; //index of safearr1
var safeArr2 = []; //array for storing the safe box places of team2
var T2 = 0; //index of safearr2
//movement of team1 pawns
const player1 = document.getElementById("player-1");

player1.addEventListener("click", rollDice1);

var person11 = ["player1", -1, 10000, 0, 0]; //team1 pawn1  //playerName position coins diceRoll endpoint
var person12 = ["player1", -1, 10000, 0, 0]; //team1 pawn2
var person13 = ["player1", -1, 10000, 0, 0]; //team1 pawn3

function rollDice1() {
  //roll dice for team1
  diceCount1++;
  diceCount2 = 0;
  if (diceCount1 == 1) {
    // let template1 =
    //   '<img src="./images/dice1.png" style="width: 35px" alt="1">';
    // // '<img src="./images/UnconsciousLegalDoe-size_restricted.gif" style="width: 35px" "background-repeat:no-repeat" id="GIF"  alt=""></img>';

    // document.querySelector("#dice").innerHTML = template1;
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player1 rolls ", position);
    // document.querySelector("#dice").innerHTML = position;
    document.querySelector("#teamName").innerHTML = "Team 1 ";
    person11[3] = position; //loading the dice roll value for all pawns in the team
    person12[3] = position;
    person13[3] = position;
    // player1.style.visibility = "hidden";
    // player2.style.visibility = "visible";
    showDice(position);
    magicCard.style.visibility = "visible"; //default magic card again
    pawn1Hidden(); //magic card releated pawn buttons to be hidden
    pawn2Hidden();
  } else {
    //alert for the teams if anyone rolls more than once
    alert(
      "U can only roll dice once, now Team2's chance, if u haven't moved ur pawn u can click on the desired pawn button of urs to move"
    );
  }
}

function showDice(num) {
  if (num == 1) {
    let template1 =
      '<img src="./images/dice1.png" style="width: 35px" alt="1">';
    document.querySelector("#dice").innerHTML = template1;
  } else if (num == 2) {
    let template1 =
      '<img src="./images/dice2.png" style="width: 35px" alt="2">';
    document.querySelector("#dice").innerHTML = template1;
  } else if (num == 3) {
    let template1 =
      '<img src="./images/dice3.png" style="width: 35px" alt="3">';
    document.querySelector("#dice").innerHTML = template1;
  } else if (num == 4) {
    let template1 =
      '<img src="./images/dice4.png" style="width: 35px" alt="4">';
    document.querySelector("#dice").innerHTML = template1;
  } else if (num == 5) {
    let template1 =
      '<img src="./images/dice5.png" style="width: 35px" alt="5">';
    document.querySelector("#dice").innerHTML = template1;
  } else if (num == 6) {
    let template1 =
      '<img src="./images/dice6.png" style="width: 35px" alt="6">';
    document.querySelector("#dice").innerHTML = template1;
  }
}
//pawn1 team1 position and balance
const player11 = document.getElementById("player11");
player11.addEventListener("click", changePosition11);

var count = 0;
var endpoint1 = 0; //counting how many pawns reached endpoint in team1

function changePosition11(old, currentPos) {
  old = person11[1]; //old position of pawn before rolling
  currentPos = person11[3]; //dice roll value
  person12[3] = 0;
  person13[3] = 0; //making sure with one roll we can't move all three pawns
  if (currentPos == 1 && old < 0) {
    //initial conditions when pawn is in home, checking for 1
    var newPosition = old + currentPos; //adding them to get final position of pawn after rolling dice
    person11[1] = newPosition;
    document.querySelector("#item11").innerHTML = money[newPosition]; //display of pawn position in number
    person11[3] = 0;
    console.log(" count" + count);
    if (newPosition >= 0) {
      const img11 = document.getElementById("img11"); //hidding the pawn in team1 home
      img11.style.visibility = "hidden";
    }
    let template =
      '<img src="./images/img11.png" id="img111" alt="green" ></img>';
    arrdiv[newPosition].innerHTML += template; //displaying the pawn on the board
    console.log(person11[1]);
    changeMoney1(person11[1]);
  } else if (currentPos > 0 && old >= 0) {
    //movement of pawn, when it is in the board previously also
    count++;
    var newPosition = old + currentPos;
    console.log(newPosition);
    pawn11M(newPosition, currentPos); //calling the function for display and movement of pawn in the board
  } else if (currentPos != 1 && old < 0) {
    //msg for players that they can't move pawn from home until u get 1
    alert("u can only move the coin when the player rolls dice 1");
  } else {
    alert("u have already moved the pawn");
  }
}
console.log("endpoint", endpoint1);

//team1 pawn2

const player12 = document.getElementById("player12"); //in the middle of the playing area
player12.addEventListener("click", changePosition12);

var count1 = 0;

function changePosition12(old, currentPos) {
  old = person12[1];
  currentPos = person12[3];
  person11[3] = 0;
  person13[3] = 0;
  if (currentPos == 1 && old < 0) {
    var newPosition = old + currentPos;
    person12[1] = newPosition;
    document.querySelector("#item12").innerHTML = money[newPosition];
    person12[3] = 0;
    if (newPosition >= 0) {
      var img12 = document.getElementById("img12"); //hidding the pawn in team1 home
      img12.style.visibility = "hidden";
    }
    let template =
      '<img src="./images/img11.png" id="img121" alt="green"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person12[1]);
    changeMoney1(person12[1]);
  } else if (currentPos > 0 && old >= 0) {
    count1++;
    var newPosition = old + currentPos;
    pawn12M(newPosition, currentPos);
  } else if (currentPos != 1 && old < 0) {
    alert("u can only move the coin when the player rolls dice 1");
  } else {
    alert("u have already moved the pawn");
  }
}

//team1 pawn3
const player13 = document.getElementById("player13"); //in the middle of the playing area
player13.addEventListener("click", changePosition13);

var count3 = 0;

function changePosition13(old, currentPos) {
  old = person13[1];
  currentPos = person13[3];
  person11[3] = 0;
  person12[3] = 0;
  if (currentPos == 1 && old < 0) {
    var newPosition = old + currentPos;
    person13[1] = newPosition;
    document.querySelector("#item13").innerHTML = money[newPosition];
    person13[3] = 0;
    if (newPosition >= 0) {
      var img13 = document.getElementById("img13"); //hidding the pawn in team1 home
      img13.style.visibility = "hidden";
    }
    let template =
      '<img src="./images/img11.png" id="img131" alt="green"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person13[1]);
    changeMoney1(person13[1]);
  } else if (currentPos > 0 && old >= 0) {
    count3++;
    var newPosition = old + currentPos;
    pawn13M(newPosition, currentPos);
  } else if (currentPos != 1 && old < 0) {
    alert("u can only move the coin when the player rolls dice 1");
  } else {
    alert("u have already moved the pawn");
  }
}
//movements of pawn after birth
function pawn11M(newPosition, currentPos) {
  if (newPosition == 47) {
    //end point, hidding the pawn and it's button
    var butt11 = document.getElementById("player11"); //button to move the pawn
    butt11.style.visibility = "hidden";
    var pos11 = document.getElementById("item11"); //display the position of pawn
    pos11.style.visibility = "hidden";
    var elem = document.getElementById("img111");
    elem.remove();
    endpoint1++;
    console.log("endpoint", endpoint1); // document.querySelector("#end1").innerHTML = endpoint1;
    if (endpoint1 == 3) {
      document.querySelector(".item3").innerHTML = "Team1 won";
      alert("Congratulations Team1🥳🥳, U have won this game");
    } else {
      alert("Congratulations Team1🥳🥳, one of ur pawn has reached End point");
    }
  } else if (newPosition > 47) {
    alert(
      "you can not move the pawn out of the board, roll next time and reach end point :), Now u can move other pawn"
    );
    person12[3] = currentPos;
    person13[3] = currentPos;
  } else {
    person11[1] = newPosition;
    document.querySelector("#item11").innerHTML = money[newPosition]; //pawn position
    var match2 = 0; //checking whether the pawn is in opp safe box
    for (i = 0; i < safeArr2.length; i++) {
      if (person11[1] == safeArr2[i]) {
        match2++;
        console.log("match2", match2);
      }
    }
    if (match2 == 0) {
      if (person11[1] == person21[1] && person11[1] > 0) {
        //killing the opp pawn
        person21[1] = -1;
        img21.style.visibility = "visible";
        var elem = document.getElementById("img221"); //removing pawn from old place
        document.querySelector("#item21").innerHTML = 0;
        elem.remove();
      } else if (person11[1] == person22[1] && person11[1] > 0) {
        person22[1] = -1;
        img22.style.visibility = "visible";
        var elem = document.getElementById("img222"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item22").innerHTML = 0;
      } else if (person11[1] == person23[1] && person11[1] > 0) {
        person23[1] = -1;
        img23.style.visibility = "visible";
        var elem = document.getElementById("img231"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item23").innerHTML = 0;
      }
    } else {
      person11[2] = person11[2] - money[person11[1]];
      document.querySelector(".item3").innerHTML = person11[2];
      person21[2] = person21[2] + money[person11[1]];
      document.querySelector(".item4").innerHTML = person21[2];
    }

    person11[3] = 0;
    if (count >= 0) {
      var elem = document.getElementById("img111"); //removing pawn from old place
      elem.remove();
    }

    let template =
      '<img src="./images/img11.png" id="img111" alt="green"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person11[1]);
    changeMoney1(person11[1]);
  }
}

function pawn12M(newPosition, currentPos) {
  if (newPosition == 47) {
    var butt12 = document.getElementById("player12");
    butt12.style.visibility = "hidden";
    var pos12 = document.getElementById("item12");
    pos12.style.visibility = "hidden";
    var elem = document.getElementById("img121"); //removing pawn from old place
    elem.remove();
    endpoint1++;
    console.log("endpoint", endpoint1);
    // document.querySelector("#end1").innerHTML = endpoint1;
    if (endpoint1 == 3) {
      document.querySelector(".item3").innerHTML = "Team1 won";
      alert("Congratulations Team1🥳🥳, U have won this game");
    } else {
      alert("Congratulations Team1🥳🥳, one of ur pawn has reached End point");
    }
  } else if (newPosition > 47) {
    alert(
      "you can not move the pawn out of the board, roll next time and reach end point :), Now u can move other pawn"
    );
    person11[3] = currentPos;
    person13[3] = currentPos;
  } else {
    person12[1] = newPosition;
    document.querySelector("#item12").innerHTML = money[newPosition];
    var match2 = 0;
    for (i = 0; i < safeArr2.length; i++) {
      if (person12[1] == safeArr2[i]) {
        match2++;
        console.log("match2", match2);
      }
    }
    if (match2 == 0) {
      if (person12[1] == person21[1] && person12[1] > 0) {
        person21[1] = -1;
        img21.style.visibility = "visible";
        var elem = document.getElementById("img221"); //removing pawn from old place
        document.querySelector("#item21").innerHTML = 0;
        elem.remove();
      } else if (person12[1] == person22[1] && person12[1] > 0) {
        person22[1] = -1;
        img22.style.visibility = "visible";
        var elem = document.getElementById("img222"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item22").innerHTML = 0;
      } else if (person12[1] == person23[1] && person12[1] > 0) {
        person23[1] = -1;
        img23.style.visibility = "visible";
        var elem = document.getElementById("img231"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item23").innerHTML = 0;
      }
    } else {
      person11[2] = person11[2] - money[person12[1]];
      document.querySelector(".item3").innerHTML = person11[2];
      person21[2] = person21[2] + money[person12[1]];
      document.querySelector(".item4").innerHTML = person21[2];
    }

    person12[3] = 0;
    console.log(" count" + count1);
    if (count1 >= 0) {
      var elem = document.getElementById("img121"); //removing pawn from old place
      elem.remove();
    }

    let template =
      '<img src="./images/img11.png" id="img121" alt="green"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person12[1]);
    changeMoney1(person12[1]);
  }
}

function pawn13M(newPosition, currentPos) {
  person13[1] = newPosition;
  if (newPosition == 47) {
    var butt13 = document.getElementById("player13");
    butt13.style.visibility = "hidden";
    var pos13 = document.getElementById("item13");
    pos13.style.visibility = "hidden";
    var elem = document.getElementById("img131"); //removing pawn from old place
    elem.remove();
    endpoint1++;
    console.log("endpoint", endpoint1);
    // document.querySelector("#end1").innerHTML = endpoint1;
    if (endpoint1 == 3) {
      document.querySelector(".item3").innerHTML = "Team1 won";
      alert("Congratulations Team1🥳🥳, U have won this game");
    } else {
      alert("Congratulations Team1🥳🥳, one of ur pawn has reached End point");
    }
  } else if (newPosition > 47) {
    alert(
      "you can not move the pawn out of the board, roll next time and reach end point :), Now u can move other pawn"
    );
    person12[3] = currentPos;
    person11[3] = currentPos;
  } else {
    document.querySelector("#item13").innerHTML = money[newPosition];

    var match2 = 0;
    for (i = 0; i < safeArr2.length; i++) {
      if (person13[1] == safeArr2[i]) {
        match2++;
        console.log("match2", match2);
      }
    }
    if (match2 == 0) {
      if (person13[1] == person21[1] && person13[1] > 0) {
        person21[1] = -1;
        img21.style.visibility = "visible";
        var elem = document.getElementById("img221"); //removing pawn from old place
        document.querySelector("#item21").innerHTML = 0;
        elem.remove();
      } else if (person13[1] == person22[1] && person13[1] > 0) {
        person22[1] = -1;
        img22.style.visibility = "visible";
        var elem = document.getElementById("img222"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item22").innerHTML = 0;
      } else if (person13[1] == person23[1] && person13[1] > 0) {
        person23[1] = -1;
        img23.style.visibility = "visible";
        var elem = document.getElementById("img231"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item23").innerHTML = 0;
      }
    } else {
      person11[2] = person11[2] - money[person13[1]];
      document.querySelector(".item3").innerHTML = person11[2];
      person21[2] = person21[2] + money[person13[1]];
      document.querySelector(".item4").innerHTML = person21[2];
    }

    person13[3] = 0;
    console.log(" count" + count3);
    if (count3 >= 0) {
      var elem = document.getElementById("img131"); //removing pawn from old place
      elem.remove();
    }

    let template =
      '<img src="./images/img11.png" id="img131" alt="green"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person13[1]);
    changeMoney1(person13[1]);
  }
}
//update money for team1
function changeMoney1(pos) {
  var updateMoney = 0;

  updateMoney = person11[2] - money[pos];
  console.log(updateMoney);
  person11[2] = updateMoney;
  person12[2] = updateMoney;
  person13[2] = updateMoney;
  // document.querySelector(".item11").innerHTML = person11[1];
  if (updateMoney > 0) {
    document.querySelector(".item3").innerHTML = updateMoney;
  } else {
    document.querySelector(".item3").innerHTML = "Team2 win";
    alert("Congratulations Team2🥳🥳, U have won this game");
  }
}

//team2
const player2 = document.getElementById("player-2");
player2.addEventListener("click", rollDice2);
var endpoint2 = 0;

var person21 = ["player2", -1, 10000, 0, 0]; //team2 pawn1 //playerName position coins diceRoll endpoint
var person22 = ["player2", -1, 10000, 0, 0]; //team2 pawn2
var person23 = ["player2", -1, 10000, 0, 0]; //team2 pawn3

function rollDice2() {
  diceCount1 = 0;
  diceCount2++;
  if (diceCount2 == 1) {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player2 rolls ", position);
    document.querySelector("#dice").innerHTML = position; //dice value
    document.querySelector("#teamName").innerHTML = "Team 2";
    person21[3] = position;
    person22[3] = position;
    person23[3] = position;
    showDice(position);
    magicCard.style.visibility = "visible";
    // player2.style.visibility = "hidden";
    // player1.style.visibility = "visible";
    pawn1Hidden();
    pawn2Hidden();
  } else {
    alert(
      "U can only roll dice once, now Team1's chance, if u haven't moved ur pawn u can click on the desired pawn button of urs to move"
    );
  }
}
//pawn1 team2 position and money balance
const player21 = document.getElementById("player21");
player21.addEventListener("click", changePosition21);

var count21 = 0;

function changePosition21(old, currentPos) {
  old = person21[1];
  currentPos = person21[3];
  person22[3] = 0;
  person23[3] = 0;
  if (currentPos == 1 && old < 0) {
    //starting for opening the pawn
    var newPosition = old + currentPos;
    person21[1] = newPosition;
    document.querySelector("#item21").innerHTML = money[newPosition]; //position
    person21[3] = 0;
    console.log(" count" + count);
    if (newPosition >= 0) {
      var img21 = document.getElementById("img21"); //hidding the pawn in team1 home
      img21.style.visibility = "hidden";
    }
    let template =
      '<img src="./images/img22.png" id="img221" alt="red"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person21[1]);
    changeMoney2(person21[1]);
  } else if (currentPos > 0 && old >= 0) {
    //after pawn is arrived at board
    count21++;
    var newPosition = old + currentPos;
    pawn21M(newPosition, currentPos);
  } else if (currentPos != 1 && old < 0) {
    alert("u can only move the coin when the player rolls dice 1");
  } else {
    alert("u have already moved the pawn");
  }
}

function pawn21M(newPosition, currentPos) {
  if (newPosition == 47) {
    //end point
    var butt21 = document.getElementById("player21");
    butt21.style.visibility = "hidden";
    var pos21 = document.getElementById("item21");
    pos21.style.visibility = "hidden";
    var elem = document.getElementById("img111");
    var elem = document.getElementById("img221"); //removing pawn from old place
    elem.remove();
    endpoint2++;
    console.log("endpoint", endpoint2);
    document.querySelector("#end2").innerHTML = endpoint2;
    if (endpoint2 == 3) {
      document.querySelector(".item4").innerHTML = "Team2 won";
      alert("Congratulations Team2🥳🥳, U have won this game");
    } else {
      alert("Congratulations Team2🥳🥳, one of ur pawn has reached End point");
    }
  } else if (newPosition > 47) {
    alert(
      "you can not move the pawn out of the board, roll next time and reach end point :), Now u can move other pawn"
    );
    person22[3] = currentPos;
    person23[3] = currentPos;
  } else {
    person21[1] = newPosition;
    document.querySelector("#item21").innerHTML = money[newPosition];
    var match1 = 0;
    for (i = 0; i < safeArr1.length; i++) {
      if (person21[1] == safeArr1[i]) {
        match1++;
        console.log("match1", match1);
      }
    }
    if (match1 == 0) {
      if (person11[1] == person21[1] && person21[1] > 0) {
        //killing opp pawn
        person11[1] = -1;
        img11.style.visibility = "visible";
        var elem = document.getElementById("img111"); //removing pawn from old place
        document.querySelector("#item11").innerHTML = 0;
        elem.remove();
      } else if (person12[1] == person21[1] && person21[1] > 0) {
        person12[1] = -1;
        img12.style.visibility = "visible";
        var elem = document.getElementById("img121"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item12").innerHTML = 0;
      } else if (person13[1] == person21[1] && person21[1] > 0) {
        person13[1] = -1;
        img13.style.visibility = "visible";
        var elem = document.getElementById("img131"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item13").innerHTML = 0;
      }
    } else {
      person21[2] = person21[2] - money[person21[1]];
      document.querySelector(".item4").innerHTML = person21[2];
      person11[2] = person11[2] + money[person21[1]];
      document.querySelector(".item3").innerHTML = person11[2];
    }

    person21[3] = 0;
    if (count >= 0) {
      var elem = document.getElementById("img221"); //removing pawn from old place
      elem.remove();
    }

    let template =
      '<img src="./images/img22.png" id="img221" alt="red" ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person21[1]);
    changeMoney2(person21[1]);
  }
}

//team2 pawn2

const player22 = document.getElementById("player22");
player22.addEventListener("click", changePosition22);

var count22 = 0;

function changePosition22(old, currentPos) {
  old = person22[1];
  currentPos = person22[3];
  person21[3] = 0;
  person23[3] = 0;
  if (currentPos == 1 && old < 0) {
    var newPosition = old + currentPos;
    person22[1] = newPosition;
    document.querySelector("#item22").innerHTML = money[newPosition];
    person22[3] = 0;
    if (newPosition >= 0) {
      var img22 = document.getElementById("img22"); //hidding the pawn in team1 home
      img22.style.visibility = "hidden";
    }
    let template =
      '<img src="./images/img22.png" id="img222" alt="red"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person22[1]);
    changeMoney2(person22[1]);
  } else if (currentPos > 0 && old >= 0) {
    count22++;
    var newPosition = old + currentPos;
    pawn22M(newPosition, currentPos);
  } else if (currentPos != 1 && old < 0) {
    alert("u can only move the coin when the player rolls dice 1");
  } else {
    alert("u have already moved the pawn");
  }
}

function pawn22M(newPosition, currentPos) {
  if (newPosition == 47) {
    var butt22 = document.getElementById("player22");
    butt22.style.visibility = "hidden";
    var pos22 = document.getElementById("item22");
    pos22.style.visibility = "hidden";
    var elem = document.getElementById("img222"); //removing pawn from old place
    elem.remove();
    endpoint2++;
    console.log("endpoint", endpoint2);
    document.querySelector("#end2").innerHTML = endpoint2;
    if (endpoint2 == 3) {
      document.querySelector(".item4").innerHTML = "Team2 won";
      alert("Congratulations Team2🥳🥳, U have won this game");
    } else {
      alert("Congratulations Team2🥳🥳, one of ur pawn has reached End point");
    }
  } else if (newPosition > 47) {
    alert(
      "you can not move the pawn out of the board, roll next time and reach end point :), Now u can move other pawn"
    );
    person21[3] = currentPos;
    person23[3] = currentPos;
  } else {
    person22[1] = newPosition;
    document.querySelector("#item22").innerHTML = money[newPosition];
    var match1 = 0;
    for (i = 0; i < safeArr1.length; i++) {
      if (person22[1] == safeArr1[i]) {
        match1++;
        console.log("match1", match1);
      }
    }
    if (match1 == 0) {
      if (person11[1] == person22[1] && person22[1] > 0) {
        //killing opp pawn
        person11[1] = -1;
        img11.style.visibility = "visible";
        var elem = document.getElementById("img111"); //removing pawn from old place
        document.querySelector("#item11").innerHTML = 0;
        elem.remove();
      } else if (person12[1] == person22[1] && person22[1] > 0) {
        person12[1] = -1;
        img12.style.visibility = "visible";
        var elem = document.getElementById("img121"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item12").innerHTML = 0;
      } else if (person13[1] == person22[1] && person22[1] > 0) {
        person13[1] = -1;
        img13.style.visibility = "visible";
        var elem = document.getElementById("img131"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item13").innerHTML = 0;
      }
    } else {
      person21[2] = person21[2] - money[person22[1]];
      document.querySelector(".item4").innerHTML = person21[2];
      person11[2] = person11[2] + money[person22[1]];
      document.querySelector(".item3").innerHTML = person11[2];
    }
    person22[3] = 0;
    console.log(" count" + count22);
    if (count22 >= 0) {
      var elem = document.getElementById("img222"); //removing pawn from old place
      elem.remove();
    }

    let template =
      '<img src="./images/img22.png" id="img222" alt="red"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person22[1]);
    changeMoney2(person22[1]);
  }
}

//team2 pawn3
const player23 = document.getElementById("player23"); //in the middle of the playing area
player23.addEventListener("click", changePosition23);

var count23 = 0;

function changePosition23(old, currentPos) {
  old = person23[1];
  currentPos = person23[3];
  person21[3] = 0;
  person22[3] = 0;
  if (currentPos == 1 && old < 0) {
    var newPosition = old + currentPos;
    person23[1] = newPosition;
    document.querySelector("#item23").innerHTML = money[newPosition];
    person23[3] = 0;
    if (newPosition >= 0) {
      var img23 = document.getElementById("img23"); //hidding the pawn in team1 home
      img23.style.visibility = "hidden";
    }
    let template =
      '<img src="./images/img22.png" id="img231" alt="green"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person23[1]);
    changeMoney2(person23[1]);
  } else if (currentPos > 0 && old >= 0) {
    count23++;
    var newPosition = old + currentPos;
    pawn23M(newPosition, currentPos);
  } else if (currentPos != 1 && old < 0) {
    alert("u can only move the coin when the player rolls dice 1");
  } else {
    alert("u have already moved the pawn");
  }
}

function pawn23M(newPosition, currentPos) {
  if (newPosition == 47) {
    var butt23 = document.getElementById("player23");
    butt23.style.visibility = "hidden";
    var pos23 = document.getElementById("item23");
    pos23.style.visibility = "hidden";
    var elem = document.getElementById("img231"); //removing pawn from old place
    elem.remove();
    endpoint2++;
    console.log("endpoint", endpoint2);
    document.querySelector("#end2").innerHTML = endpoint2;
    if (endpoint2 == 3) {
      document.querySelector(".item4").innerHTML = "Team2 won";
      alert("Congratulations Team2🥳🥳, U have won this game");
    } else {
      alert("Congratulations Team2🥳🥳, one of ur pawn has reached End point");
    }
  } else if (newPosition > 47) {
    alert(
      "you can not move the pawn out of the board, roll next time and reach end point :), Now u can move other pawn"
    );
    person22[3] = currentPos;
    person21[3] = currentPos;
  } else {
    person23[1] = newPosition;
    document.querySelector("#item23").innerHTML = money[newPosition];
    var match1 = 0; //count of similar elements of the pawn position and safeArr1
    for (i = 0; i < safeArr1.length; i++) {
      if (person23[1] == safeArr1[i]) {
        match1++;
        console.log("match1", match1);
      }
    }
    if (match1 == 0) {
      if (person11[1] == person23[1] && person23[1] > 0) {
        //killing opp pawn
        person11[1] = -1;
        img11.style.visibility = "visible";
        var elem = document.getElementById("img111"); //removing pawn from old place
        document.querySelector("#item11").innerHTML = 0;
        elem.remove();
      } else if (person12[1] == person23[1] && person23[1] > 0) {
        person12[1] = -1;
        img12.style.visibility = "visible";
        var elem = document.getElementById("img121"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item12").innerHTML = 0;
      } else if (person13[1] == person23[1] && person23[1] > 0) {
        person13[1] = -1;
        img13.style.visibility = "visible";
        var elem = document.getElementById("img131"); //removing pawn from old place
        elem.remove();
        document.querySelector("#item13").innerHTML = 0;
      } else {
        person21[2] = person21[2] - money[person23[1]];
        document.querySelector(".item4").innerHTML = person21[2];
        person11[2] = person11[2] + money[person23[1]];
        document.querySelector(".item3").innerHTML = person11[2];
      }
    }

    person23[3] = 0;
    console.log(" count" + count23);
    if (count23 >= 0) {
      var elem = document.getElementById("img231"); //removing pawn from old place
      elem.remove();
    }

    let template =
      '<img src="./images/img22.png" id="img231" alt="red"  ></img>';
    arrdiv[newPosition].innerHTML += template;
    console.log(person23[1]);
    changeMoney2(person23[1]);
  }
}

//update money for team1
function changeMoney2(pos) {
  var updateMoney = 0;

  updateMoney = person21[2] - money[pos];
  console.log(updateMoney);
  person21[2] = updateMoney;
  person22[2] = updateMoney;
  person23[2] = updateMoney;
  if (updateMoney > 0) {
    document.querySelector(".item4").innerHTML = updateMoney;
  } else {
    document.querySelector(".item4").innerHTML = "player1 win";
    alert("Congratulations Team1🥳🥳, U have won this game");
  }
}

//magic card
const MagicCard = document.getElementById("Magic1");
const MagicCard1 = document.getElementById("Magic2");
MagicCard.addEventListener("click", display_random_image1);
MagicCard1.addEventListener("click", display_random_image2);

function display_random_image1() {
  display_random_image(1);
}

function display_random_image2() {
  display_random_image(2);
}

function display_random_image(n) {
  var theImages = [{
      src: "./images/1000Coins.png",
      width: "320",
      height: "280",
    },
    {
      src: "./images/250.png",
      width: "320",
      height: "280",
    },
    {
      src: "./images/0.png",
      width: "320",
      height: "280",
    },
    {
      src: "./images/2000.png",
      width: "320",
      height: "280",
    },
    {
      src: "./images/kill5.jpg",
      width: "300",
      height: "280",
    },
    {
      src: "./images/add5.jpg",
      width: "300",
      height: "280",
    },
    {
      src: "./images/add7.jpg",
      width: "300",
      height: "280",
    },
    {
      src: "./images/sub5.jpg",
      width: "300",
      height: "280",
    },
  ];

  var preBuffer = [];
  for (var i = 0, j = theImages.length; i < j; i++) {
    preBuffer[i] = new Image();
    preBuffer[i].src = theImages[i].src;
    preBuffer[i].width = theImages[i].width;
    preBuffer[i].height = theImages[i].height;
    preBuffer[i].className = "magic";
  }

  // create random image number
  function getRandomInt(min, max) {
    var imn = Math.floor(Math.random() * (max - min + 1)) + min; //image index
    console.log(imn);
    console.log(preBuffer[imn]);
    //console.log("number", n);
    rewards(imn, n);
    return preBuffer[imn];
  }
  // 0 is first image,   preBuffer.length - 1 is  last image

  var newImage = getRandomInt(0, preBuffer.length - 1);

  // remove the previous images
  var images = document.getElementsByClassName("magic");
  var l = images.length;
  for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
  }
  // display the image
  magicCard.style.visibility = "hidden";
  document.body.appendChild(newImage).style.margin = "395px 0px 0px 1000px";
  console.log(newImage);
  //document.getElementById("image").innerHTML = newImage;//document.body.image.appendChild(newImage);;
  //document.body.write(newImage)
}
var flip1 = 0;
var flip2 = 0;

function rewards(imn, n) {
  console.log("card number", imn);
  console.log("number", n);

  if (n == 1) {
    //team1 flip
    flip1++;

    console.log("flip", flip1);
    if (flip1 > 6) {
      magicCard.style.visibility = "visible";
      alert(
        "You have used the magic card for maximum number of times in this game i.e 6 times"
      );
    } else {
      document.querySelector("#card1").innerHTML = flip1;
      var bonusCoins = 0;
      var once = 1;
      if (imn == 0) {
        bonusCoins += 1000; //1000 coins bonus
      } else if (imn == 1) {
        bonusCoins += 250; //250 coins bonus
      } else if (imn == 2) {
        bonusCoins += 0; //0 coins
      } else if (imn == 3) {
        bonusCoins += 2000; //2000 coins bonus
      } else if (imn == 4) {
        pawn2Visible(); //kill oponent
        pawn21.addEventListener("click", zero21);
        pawn22.addEventListener("click", zero22);
        pawn23.addEventListener("click", zero23);

        function zero21() {
          //killing the pawn1 of team2
          if (n == 1 && once == 1) {
            if (person21[1] < 48 && person21[1] >= 0) {
              //checking whether it reached endpoint or not, can't kill if it reached end point
              once++;
              person21[1] = -1;
              img21.style.visibility = "visible";
              var elem = document.getElementById("img221"); //removing pawn from old place
              document.querySelector("#item21").innerHTML = 0;
              elem.remove();
              pawn2Hidden();
            } else {
              alert(
                "U can't kill the pawn which has reached end point or at the home, choose other pawn"
              );
            }
          }
        }

        function zero22() {
          //killing the pawn2 of team2
          if (n == 1 && once == 1) {
            if (person22[1] < 48 && person22[1] >= 0) {
              //checking whether it reached endpoint or not, can't kill if it reached end point
              once++;
              person22[1] = -1;
              img22.style.visibility = "visible";
              var elem = document.getElementById("img222"); //removing pawn from old place
              elem.remove();
              document.querySelector("#item22").innerHTML = 0;
              pawn2Hidden();
            } else {
              alert(
                "U can't kill the pawn which has reached end point or at the home, choose other pawn"
              );
            }
          }
        }

        function zero23() {
          //killing the pawn3 of team2
          if (n == 1 && once == 1) {
            if (person23[1] < 48 && person23[1] >= 0) {
              once++;
              person23[1] = -1;
              img23.style.visibility = "visible";
              var elem = document.getElementById("img231"); //removing pawn from old place
              elem.remove();
              document.querySelector("#item23").innerHTML = 0;
              pawn2Hidden();
            } else {
              alert(
                "U can't kill the pawn which has reached end point or at the home, choose other pawn"
              );
            }
          }
        }
      } else if (imn >= 5) {
        //for +5, -5, +7 places
        pawn1Visible();
        pawn11.addEventListener("click", zero11);
        pawn12.addEventListener("click", zero12);
        pawn13.addEventListener("click", zero13);

        function zero11() {
          if (imn == 5 && n == 1 && once == 1) {
            //5 places add
            if (person11[1] + 5 < 48 && person11[1] >= 0) {
              once++;
              person11[1] += 5;
              var newPosition = person11[1];
              person11[2] = person11[2] + money[person11[1]];
              pawn11M(newPosition);
              pawn1Hidden();
            } // if (person11[1] > 0)
            else if (person11[1] > 0) {
              once++;
              newPosition = person11[1] + (47 - person11[1]);
              pawn11M(newPosition);
              pawn1Hidden();
            }
          }
          if (imn == 6 && n == 1 && once == 1) {
            //7 places add
            if (person11[1] + 7 < 48 && person11[1] >= 0) {
              once++;
              person11[1] += 7;
              var newPosition = person11[1];
              person11[2] = person11[2] + money[person11[1]];
              pawn11M(newPosition);
              pawn1Hidden();
            } else if (person11[1] > 0) {
              once++;
              newPosition = person11[1] + (47 - person11[1]);
              pawn11M(newPosition);
              pawn1Hidden();
            }
          }
          if (imn == 7 && n == 1 && once == 1) {
            //5 blaces back
            if (person11[1] - 5 > 0 && person11[1] >= 0) {
              once++;
              var newPosition = person11[1] - 5;
              person11[2] = person11[2] + money[newPosition];
              pawn11M(newPosition);
              pawn1Hidden();
            } else if (person11[1] >= 0) {
              once++;
              newPosition = 0;
              pawn11M(newPosition);
              pawn1Hidden();
            }
          }
        }

        function zero12() {
          if (imn == 5 && n == 1 && once == 1) {
            console.log("person12", person12[1]);
            if (person12[1] + 5 < 48 && person12[1] >= 0) {
              once++;
              console.log("person12", person12[1]);
              person12[1] += 5;
              var newPosition = person12[1];
              person11[2] = person11[2] + money[person12[1]];
              pawn12M(newPosition);
              console.log("person12", person12[1]);
              pawn1Hidden();
            } else if (person12[1] > 0) {
              once++;
              newPosition = person12[1] + (47 - person12[1]);
              pawn12M(newPosition);
              pawn1Hidden();
            }
          }
          if (imn == 6 && n == 1 && once == 1) {
            if (person12[1] + 7 < 48 && person12[1] >= 0) {
              once++;
              person12[1] += 7;
              var newPosition = person12[1];
              person11[2] = person11[2] + money[person12[1]];
              pawn12M(newPosition);
              pawn1Hidden();
            } else if (person12[1] > 0) {
              once++;
              newPosition = person12[1] + (47 - person12[1]);
              pawn12M(newPosition);
              pawn1Hidden();
            }
          }
          if (imn == 7 && n == 1 && once == 1) {
            if (person12[1] - 5 > 0 && person12[1] >= 0) {
              once++;
              var newPosition = person12[1] - 5;
              person11[2] = person11[2] + money[newPosition];
              pawn12M(newPosition);
              pawn1Hidden();
            } else if (person12[1] >= 0) {
              once++;
              newPosition = 0;
              person11[2] = person11[2] + money[person12[1]];
              pawn12M(newPosition);
              pawn1Hidden();
            }
          }
        }

        function zero13() {
          if (imn == 5 && n == 1 && once == 1) {
            if (person13[1] + 5 < 48 && person13[1] >= 0) {
              once++;
              person13[1] += 5;
              var newPosition = person13[1];
              person11[2] = person11[2] + money[newPosition];
              pawn13M(newPosition);
              pawn1Hidden();
            } else if (person13[1] > 0) {
              once++;
              newPosition = person13[1] + (47 - person13[1]);
              pawn13M(newPosition);
              pawn1Hidden();
            }
          }
          if (imn == 6 && n == 1 && once == 1) {
            if (person13[1] + 7 < 48 && person13[1] >= 0) {
              once++;
              person13[1] += 7;
              var newPosition = person13[1];
              person11[2] = person11[2] + money[newPosition];
              pawn13M(newPosition);
              pawn1Hidden();
            } else if (person13[1] > 0) {
              once++;
              newPosition = person13[1] + (47 - person13[1]);
              pawn13M(newPosition);
              pawn1Hidden();
            }
          }
          if (imn == 7 && n == 1 && once == 1) {
            if (person13[1] - 5 > 0 && person13[1] >= 0) {
              once++;
              var newPosition = person13[1] - 5;
              person11[2] = person11[2] + money[newPosition];
              pawn13M(newPosition);
              pawn1Hidden();
            } else if (person13[1] >= 0) {
              once++;
              newPosition = 0;
              person11[2] = person11[2] + money[newPosition];
              pawn13M(newPosition);
              pawn1Hidden();
            }
          }
        }
      }
      person11[2] = person11[2] - 500 + bonusCoins; //reduce 500 coins for using bonus card and add the gained coins
      person12[2] = person12[2] - 500 + bonusCoins;
      person13[2] = person13[2] - 500 + bonusCoins;
      document.querySelector(".item3").innerHTML = person11[2];
      // alert("You can still use the magic card for " + (6 - flip1) + " times only in this game");
    }
  } else if (n == 2) {
    //magic card for team2
    flip2++;
    console.log("flip2", flip2);
    if (flip2 > 6) {
      magicCard.style.visibility = "visible";
      alert(
        "You have used the magic card for maximum number of times in this game i.e 6 times"
      );
    } else {
      document.querySelector("#card2").innerHTML = flip2;
      var once = 1;
      var bonusCoins = 0;
      if (imn == 0) {
        bonusCoins += 1000; //1000 coins bonus
      } else if (imn == 1) {
        bonusCoins += 250; //250 coins bonus
      } else if (imn == 2) {
        bonusCoins += 0; //0 coins
      } else if (imn == 3) {
        bonusCoins += 2000; //2000 coins bonus
      } else if (imn == 4) {
        pawn1Visible(); //kill oponent
        pawn11.addEventListener("click", zero11);
        pawn12.addEventListener("click", zero12);
        pawn13.addEventListener("click", zero13);

        function zero11() {
          //to kill pawn1 of team1
          if (n == 2 && once == 1) {
            if (person11[1] < 48 && person11[1] >= 0) {
              //checking whether it reached endpoint or not, can't kill if it reached end point
              once++;
              person11[1] = -1;
              img11.style.visibility = "visible";
              var elem = document.getElementById("img111"); //removing pawn from old place
              document.querySelector("#item11").innerHTML = 0;
              elem.remove();
              pawn1Hidden();
            } else {
              alert(
                "U can't kill the pawn which has reached end point or at the home, choose other pawn"
              );
            }
          }
        }

        function zero12() {
          //to kill pawn2 of team1
          if (n == 2 && once == 1) {
            if (person12[1] < 48 && person12[1] >= 0) {
              //checking whether it reached endpoint or not, can't kill if it reached end point
              once++;
              person12[1] = -1;
              img12.style.visibility = "visible";
              var elem = document.getElementById("img121"); //removing pawn from old place
              elem.remove();
              document.querySelector("#item12").innerHTML = 0;
              pawn1Hidden();
            } else {
              alert(
                "U can't kill the pawn which has reached end point or at the home, choose other pawn"
              );
            }
          }
        }

        function zero13() {
          //to kill pawn3 of team1
          if (n == 2 && once == 1) {
            if (person13[1] < 48 && person13[1] >= 0) {
              //checking whether it reached endpoint or not, can't kill if it reached end point
              once++;
              person13[1] = -1;
              img13.style.visibility = "visible";
              var elem = document.getElementById("img131"); //removing pawn from old place
              elem.remove();
              document.querySelector("#item13").innerHTML = 0;
              pawn1Hidden();
            } else {
              alert(
                "U can't kill the pawn which has reached end point or at the home, choose other pawn"
              );
            }
          }
        }
      } else if (imn >= 5) {
        //for +5, +7, -5
        console.log("once", once);
        pawn2Visible();
        pawn21.addEventListener("click", zero21);
        pawn22.addEventListener("click", zero22);
        pawn23.addEventListener("click", zero23);

        function zero21() {
          if (imn == 5 && n == 2 && once == 1) {
            //5 places add
            if (person21[1] + 5 < 48 && person21[1] >= 0) {
              once++;
              person21[1] += 5;
              var newPosition = person21[1];
              person21[2] = person21[2] + money[newPosition];
              pawn21M(newPosition);
              pawn2Hidden();
            } else if (person11[1] > 0) {
              once++;
              newPosition = person11[1] + (47 - person11[1]);
              pawn21M(newPosition);
              pawn2Hidden();
            }
          }
          if (imn == 6 && n == 2 && once == 1) {
            //7 places add
            if (person21[1] + 7 < 48 && person21[1] >= 0) {
              once++;
              person21[1] += 7;
              var newPosition = person21[1];
              person21[2] = person21[2] + money[newPosition];
              pawn21M(newPosition);
              pawn2Hidden();
            } else if (person21[1] > 0) {
              once++;
              newPosition = person21[1] + (47 - person21[1]);
              pawn21M(newPosition);
              pawn2Hidden();
            }
          }
          if (imn == 7 && n == 2 && once == 1) {
            //5 blaces back
            if (person21[1] - 5 > 0 && person21[1] >= 0) {
              once++;
              var newPosition = person21[1] - 5;
              person21[2] = person21[2] + money[newPosition];
              pawn21M(newPosition);
              pawn2Hidden();
            } else if (person21[1] >= 0) {
              once++;
              newPosition = 0;
              pawn21M(newPosition);
              pawn2Hidden();
            }
          }
        }

        function zero22() {
          if (imn == 5 && n == 2 && once == 1) {
            if (person22[1] + 5 < 48 && person22[1] >= 0) {
              once++;
              person22[1] += 5;
              var newPosition = person22[1];
              person21[2] = person21[2] + money[newPosition];
              pawn22M(newPosition);
              pawn2Hidden();
            } else if (person22[1] > 0) {
              once++;
              newPosition = person22[1] + (47 - person22[1]);
              pawn22M(newPosition);
              pawn2Hidden();
            }
          }
          if (imn == 6 && n == 2 && once == 1) {
            if (person22[1] + 7 < 48 && person22[1] >= 0) {
              once++;
              person22[1] += 7;
              var newPosition = person22[1];
              person21[2] = person21[2] + money[newPosition];
              pawn22M(newPosition);
              pawn2Hidden();
            } else if (person22[1] > 0) {
              once++;
              newPosition = person12[1] + (47 - person12[1]);
              pawn22M(newPosition);
              pawn2Hidden();
            }
          }
          if (imn == 7 && n == 2 && once == 1) {
            if (person22[1] - 5 > 0 && person22[1] >= 0) {
              once++;
              var newPosition = person22[1] - 5;
              person21[2] = person21[2] + money[newPosition];
              pawn22M(newPosition);
              pawn2Hidden();
            } else if (person22[1] >= 0) {
              once++;
              newPosition = 0;
              person21[2] = person21[2] + money[newPosition];
              pawn22M(newPosition);
              pawn2Hidden();
            }
          }
        }

        function zero23() {
          if (imn == 5 && n == 2 && once == 1) {
            if (person23[1] + 5 < 48 && person23[1] >= 0) {
              once++;
              person23[1] += 5;
              var newPosition = person23[1];
              person21[2] = person21[2] + money[newPosition];
              pawn23M(newPosition);
              pawn2Hidden();
            } else if (person23[1] > 0) {
              once++;
              newPosition = person23[1] + (47 - person23[1]);
              pawn23M(newPosition);
              pawn2Hidden();
            }
          }
          if (imn == 6 && n == 2 && once == 1) {
            if (person23[1] + 7 < 48 && person23[1] >= 0) {
              once++;
              person23[1] += 7;
              var newPosition = person23[1];
              person21[2] = person21[2] + money[newPosition];
              pawn23M(newPosition);
              pawn2Hidden();
            } else if (person23[1] > 0) {
              once++;
              newPosition = person23[1] + (47 - person23[1]);
              pawn23M(newPosition);
              pawn2Hidden();
            }
          }
          if (imn == 7 && n == 2 && once == 1) {
            if (person23[1] - 5 > 0 && person23[1] >= 0) {
              once++;
              var newPosition = person23[1] - 5;
              person21[2] = person21[2] + money[newPosition];
              pawn23M(newPosition);
              pawn2Hidden();
            } else if (person23[1] >= 0) {
              once++;
              newPosition = 0;
              person21[2] = person21[2] + money[newPosition];
              pawn23M(newPosition);
              pawn2Hidden();
            }
          }
        }
      }
      person21[2] = person21[2] - 500 + bonusCoins; //reduce 500 coins for using and add the bonus
      person22[2] = person22[2] - 500 + bonusCoins;
      person23[2] = person23[2] - 500 + bonusCoins;
      document.querySelector(".item4").innerHTML = person21[2];
      // alert("You can still use the magic card for " + (6 - flip2) + " times only in this game");
    }
  }
}

function pawn1Hidden() {
  pawn11.style.visibility = "hidden";
  pawn12.style.visibility = "hidden";
  pawn13.style.visibility = "hidden";
}

function pawn1Visible() {
  pawn11.style.visibility = "visible";
  pawn12.style.visibility = "visible";
  pawn13.style.visibility = "visible";
}

function pawn2Hidden() {
  pawn21.style.visibility = "hidden";
  pawn22.style.visibility = "hidden";
  pawn23.style.visibility = "hidden";
}

function pawn2Visible() {
  pawn21.style.visibility = "visible";
  pawn22.style.visibility = "visible";
  pawn23.style.visibility = "visible";
}

const safe = document.getElementById("safe");
safe.addEventListener("click", SafeBox);

function SafeBox() {
  pawn1Visible(); //all pawns visible
  pawn2Visible();
  pawn21.addEventListener("click", safe21);
  pawn22.addEventListener("click", safe22);
  pawn23.addEventListener("click", safe23);
  pawn11.addEventListener("click", safe11);
  pawn12.addEventListener("click", safe12);
  pawn13.addEventListener("click", safe13);
  var once = 1;

  function safe11() {
    var safeNumber = person11[1];
    safeTeam1(safeNumber);
  }

  function safe12() {
    var safeNumber = person12[1];
    safeTeam1(safeNumber);
  }

  function safe13() {
    var safeNumber = person13[1];
    safeTeam1(safeNumber);
  }

  function safe21() {
    var safeNumber = person21[1];
    safeTeam2(safeNumber);
  }

  function safe22() {
    var safeNumber = person22[1];
    safeTeam2(safeNumber);
  }

  function safe23() {
    var safeNumber = person23[1];
    safeTeam2(safeNumber);
  }

  function safeTeam1(safeNumber) {
    //safe box for team1
    var match1 = 0; //checking whether the pawn is in opp safe box
    for (i = 0; i < safeArr2.length; i++) {
      if (safeNumber == safeArr2[i]) {
        match1++;
        console.log("match1", match1);
      }
    }
    var match12 = 0; //checking whether it's already a safe box of urs
    for (i = 0; i < safeArr1.length; i++) {
      if (safeNumber == safeArr1[i]) {
        match12++;
        console.log("match12", match12);
      }
    }
    if (once == 1) {
      if (safeNumber >= 0 && safeNumber < 48 && match1 == 0 && match12 == 0) {
        once++;
        console.log(money[safeNumber]);
        console.log("5 * money[safeNumber]", 5 * money[safeNumber]);
        person11[2] = person11[2] - 5 * money[safeNumber];
        document.querySelector(".item3").innerHTML = person11[2]; //displaying money after buying
        safeArr1[T1++] = safeNumber; //array for storing the sage place box numbers of team2
        console.log(safeArr1);
        arrdiv[safeNumber].style.backgroundColor = "greenyellow";
        pawn1Hidden(); //magic card releated pawn buttons to be hidden
        pawn2Hidden();
      } else if (match1 == 1) {
        alert(
          "This box is already a safe box to the opponent team, choose other box"
        );
      } else if (match12 == 1) {
        alert("This box is already a safe box of urs, choose other box");
      }
    }
  }

  function safeTeam2(safeNumber) {
    var match2 = 0; //checking whether the pawn is in opp safe box
    for (i = 0; i < safeArr1.length; i++) {
      if (safeNumber == safeArr1[i]) {
        match2++;
        console.log("match2", match2);
      }
    }
    var match21 = 0; //checking whether the pawn is in opp safe box
    for (i = 0; i < safeArr2.length; i++) {
      if (safeNumber == safeArr2[i]) {
        match21++;
        console.log("match21", match21);
      }
    }
    //safe box for team2
    if (once == 1) {
      if (safeNumber >= 0 && safeNumber < 48 && match2 == 0 && match21 == 0) {
        once++;
        console.log(money[safeNumber]);
        console.log("5 * money[safeNumber]", 5 * money[safeNumber]);
        person21[2] = person21[2] - 5 * money[safeNumber];
        document.querySelector(".item4").innerHTML = person21[2]; //displaying money after buying
        safeArr2[T2++] = safeNumber; //array for storing the sage place box numbers of team2
        console.log(safeArr2);
        arrdiv[safeNumber].style.backgroundColor = "orangered";
        pawn1Hidden(); //magic card releated pawn buttons to be hidden
        pawn2Hidden();
      } else if (match2 == 1) {
        alert(
          "This box is already a safe box to the opponent team, choose other box"
        );
      } else if (match21 == 1) {
        alert("This box is already a safe box of urs, choose other box");
      }
    }
  }
}

const instructions = document.getElementById("but1");
instructions.addEventListener("click", openForm);
const instructionsClose = document.getElementById("close1");
instructionsClose.addEventListener("click", closeForm);
const faq = document.getElementById("but2");
faq.addEventListener("click", openForm1);
const faqClose = document.getElementById("close2");
faqClose.addEventListener("click", closeForm1);

function openForm() {
  //instructions to be displayed, when we click on instructions button
  document.getElementById("myForm").style.display = "block";
}

function openForm1() {
  //instructions closing when we click close
  document.getElementById("myForm1").style.display = "block";
}

function closeForm() {
  //faqs to be displayed, when we click on faqs button
  document.getElementById("myForm").style.display = "none";
}

function closeForm1() {
  //faq's closing when we click close
  document.getElementById("myForm1").style.display = "none";
}