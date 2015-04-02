// asks for your name
var name = prompt("What's your name");
// the cash they have in the begining then how many life they have in the begining
var moneyearned = 0;
var lifeline = 3;

function lifelineCheck() {
// this function checks the lifeline and if they have 0 it will brain them to the end screen!
  if (lifeline===0) {
   alert("YOU HAVE LOST ALL YOUR LIFELINE!");
   alert("Great Job making so far in this challenger this is the total amount of $"+ moneyearned +" Your score will be recorded! Better Luck Next Time!");
   throw new Error("GAME OVER");
  }
   
}
  

  alert("Welcome "+name +" You have been selected in Who wants to be a Billionaire! Answer the following questions and work your way up to a Billion dollars! All the answers are 1 word answers!");

// QUESTION 1
var Q1 = prompt("Brothers and sisters I have none but this man's father is my father's son. Who is the man?" ).toUpperCase();

var q2ready=0;

  switch(Q1) {
// ANSWERS also have the add the cash together and have the moneyearned and bank balance
    case "SON":
        alert("Excellent you made $100");
        Q2ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
// LIFELINE/MATHQUESTION for the lifeline I used the function where they can find out if they run out of lifeline and will bring them to the end screen!
// all the follows are in the same format 
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("50+1=?");
          switch(L1) {
            case '51':
              Q2ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 2");
              break;
// this is to give them a goodbye after they get the math question wrong
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }

// QUESTION 2
if (Q2ready===1) {
    var Q2 = prompt("What is greater than God,more evil than the devil,the poor have it,the rich need it,and if you eat it, you'll die?").toUpperCase();

var q3ready=0;

  switch(Q2) {
//ANSWERS 
    case "NOTHING":
        alert("Excellent you made $100");
        Q3ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
//LIFELINE/MATHQUESTION
         lifelineCheck();
         lifeline--;
         alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
         alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("1+10=?");
          switch(L1) {
            case '11':
              Q3ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 3");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 3
if (Q3ready===1) {
    var Q3 = prompt("Who makes it, has no need of it.Who buys it, has no use for it. Who uses it can neither see nor feel it. What is it?").toUpperCase();

var q4ready=0;

  switch(Q3) {
      //ANSWERS 
    case "COFFIN":
        alert("Excellent you made $100");
        Q4ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("4+5=?");
          switch(L1) {
            case '9':
              Q4ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 4");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 4
if (Q4ready===1) {
    var Q4 = prompt("Forward I am heavy, but backward I am not. What am I?").toUpperCase();

var q5ready=0;

  switch(Q4) {
      //ANSWERS 
    case "TON":
        alert("Excellent you made $100");
        Q5ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("56+82=?");
          switch(L1) {
            case '138':
              Q5ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 5");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 5
if (Q5ready===1) {
    var Q5 = prompt("What can travel around the world while staying in a corner?").toUpperCase();

var q6ready=0;

  switch(Q5) {
      //ANSWERS 
    case "STAMP":
        alert("Excellent you made $100");
        Q6ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("91+54=?");
          switch(L1) {
            case '145':
              Q6ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 6");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 6
if (Q6ready===1) {
    var Q6 = prompt("What gets wetter and wetter the more it dries?").toUpperCase();

var q7ready=0;

  switch(Q6) {
      //ANSWERS 
    case "TOWEL":
        alert("Excellent you made $100");
        Q7ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("97+46=?");
          switch(L1) {
            case '143':
              Q7ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 7");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 7
if (Q7ready===1) {
    var Q7 = prompt("Paul's height is six feet, he's an assistant at a butcher's shop, and wears size 9 shoes. What does he weigh?").toUpperCase();

var q8ready=0;

  switch(Q7) {
      //ANSWERS 
    case "MEAT":
        alert("Excellent you made $100");
        Q8ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("34+21=?");
          switch(L1) {
            case '55':
              Q8ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 8");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 8
if (Q8ready===1) {
    var Q8 = prompt("There was a green house. Inside the green house there was a white house. Inside the white house there was a red house. Inside the red house there were lots of babies. What is it?").toUpperCase();

var q9ready=0;

  switch(Q8) {
      //ANSWERS 
    case "WATERMELON":
        alert("Excellent you made $100");
        Q9ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("82+63=?");
          switch(L1) {
            case '145':
              Q9ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 9");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 9
if (Q9ready===1) {
    var Q9= prompt("What kind of room has no doors or windows?").toUpperCase();

var q10ready=0;

  switch(Q9) {
      //ANSWERS 
    case "MUSHROOM":
        alert("Excellent you made $100");
        Q10ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("65+35=?");
          switch(L1) {
            case '100':
              Q10ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 10");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 10
if (Q10ready===1) {
    var Q10= prompt("What kind of tree can you carry in your hand?").toUpperCase();

var q11ready=0;

  switch(Q10){
      //ANSWERS 
    case "PALM":
        alert("Excellent you made $100");
        Q11ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("34+98=?");
          switch(L1) {
            case '132':
              Q11ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 11");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 11
if (Q11ready===1){ 
    var Q11= prompt("Which word in the dictionary is spelled incorrectly?").toUpperCase();

var q12ready=0;

  switch(Q11){
      //ANSWERS 
    case "INCORRECTLY":
        alert("Excellent you made $100");
        Q12ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline); 
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("68+98=?");
          switch(L1) {
            case '166':
              Q12ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 12");
              break;
            default:
             alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 12
if (Q12ready===1) {
    var Q12= prompt("If you have me, you want to share me. If you share me, you haven't got me. What am I?").toUpperCase();

var q13ready=0;

  switch(Q12) {
      //ANSWERS 
    case "SECRET":
        alert("Excellent you made $100");
        Q13ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("98+36=?");
          switch(L1) {
            case '134':
              Q13ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 13");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 13
if (Q13ready===1) {
    var Q13 = prompt("What gets broken without being held?").toUpperCase();

var q14ready=0;

  switch(Q13) {
      //ANSWERS 
    case "PROMISE":
        alert("Excellent you made $100");
        Q14ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("38+56=?");
          switch(L1) {
            case '94':
              Q14ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 14");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 14
if (Q14ready===1) {
    var Q14 = prompt("Feed me and I live, yet give me a drink and I die.").toUpperCase();

var q15ready=0;

  switch(Q14) {
      //ANSWERS 
    case "FIRE":
        alert("Excellent you made $100");
        Q15ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline); 
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("23+45=?");
          switch(L1) {
            case '68':
              Q15ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 15");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 15
if (Q15ready===1) { 
    var Q15 = prompt("A man is pushing his car along the road when he comes to a hotel. He shouts, I'm bankrupt! Why?").toUpperCase();

var q15ready=0;

  switch(Q15) {
      //ANSWERS 
    case "MONOPOLY":
        alert("Excellent you made $100");
        Q16ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("13+45=?");
          switch(L1) {
            case '58':
              Q16ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 16");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 16
if (Q16ready===1) {
    var Q16 = prompt("He has married many women, but has never been married. Who is he?").toUpperCase();

var q1ready=0;

  switch(Q16) {
      //ANSWERS 
    case "PREACHER":
        alert("Excellent you made $100");
        Q17ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("33+75=?");
          switch(L1) {
            case '108':
              Q17ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 17");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 17
if (Q17ready===1) {
    var Q17 = prompt("How many of each species did Moses take on the ark with him?").toUpperCase();

var q1ready=0;

  switch(Q17) {
      //ANSWERS 
    case "NONE":
        alert("Excellent you made $100");
        Q18ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("4+4=?");
          switch(L1) {
            case '8':
              Q18ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 18");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 18
if (Q18ready===1) {
    var Q18 = prompt("Take off my skin - I won't cry, but you will! What am I?").toUpperCase();

var q1ready=0;

  switch(Q18) {
      //ANSWERS 
    case "ONION":
        alert("Excellent you made $100");
        Q19ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("45+4=?");
          switch(L1) {
            case '49':
              Q19ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 19");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 19
if (Q19ready===1) {
    var Q19 = prompt("Imagine you are in a dark room. How do you get out?").toUpperCase();

var q1ready=0;

  switch(Q19) {
      //ANSWERS 
    case "STOP-IMAGINING":
        alert("Excellent you made $100");
        Q20ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline);
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("45+54=?");
          switch(L1) {
            case '99':
              Q20ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 20");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// QUESTION 20
if (Q20ready===1) {
    var Q20 = prompt("What invention lets you look right through a wall?").toUpperCase();

var q1ready=0;

  switch(Q20) {
      //ANSWERS 
    case "WINDOW":
        alert("Excellent you made $100");
        Q21ready=1;
        var moneyearned = moneyearned + 100;
        alert ("You bank balance is $" + moneyearned);
        break;
    default:
      //LIFELINE/MATHQUESTION
        lifelineCheck();
        lifeline--;
        alert("OH NO!! Wrong Answer - Now you have to try to use a lifeline " + lifeline); 
        alert("Answer this math problem to skip the question, if you fail you lose"); 
        var L1 = prompt("49+51=?");
          switch(L1) {
            case '100':
              Q21ready=1;
              alert("Amazing you saved yourself - no money made, but you get to move to Question 21");
              break;
            default:
              alert("Sorry you made $"+ moneyearned +" bye bye!");
              break;
          }
        break;
    }
}
// GAMEOVER
if (Q21ready===1) {
   alert("YOU REACHED THE END OF THE GAME!!!"); 
   alert("YOU MADE A TOTAL AMOUNT OF $"+ moneyearned +" and a total amount of lifeline left " + lifeline +" GOOD JOB YOUR SCORE WILL BE RECORDED!!");
}  
 