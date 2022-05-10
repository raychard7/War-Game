
class Card { 
    constructor(suit,rank, value){
        this.suit = suit;
        this.rank= rank;
        this.value = value;
    }

}


class Deck{
    constructor(){
        this.cards=[];

    }

    createDeck(){
        let suits = ["♠", "♣", "♥", "♦"];
        let ranks= ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        let values= [1,2,3,4,5,6,7,8,9,10,11,12,13];
        //          [0,1,2,3,4,5,6,7,8, 9,10,11,12]


       for(let i=0;i<suits.length;i++){ //i=0;i<52;
           for(let j=0;j<ranks.length;j++){
              this.cards.push(new Card(suits[i],ranks[j],values[j]));  //Bring in Card Class to create Card Objects Fisher yates way.
           }
       }
    }
    shuffleDeck(){
        for( let i=0;i<this.cards.length;i++){   //why use the reverse loop method? i= arr.length-1; i>0;i--
          let currentCard= this.cards[i];  //var holds initial card value
          let randomIndex= Math.floor(Math.random()*this.cards.length); // //Math.floor(Math.random()*10) //returns a random integer from 0 to 9
          this.cards[i]=this.cards[randomIndex]; //the i postion gets changes w/ the random card, it's ok to change because value was already saved to currentCard
          this.cards[randomIndex]=currentCard; //The random card gets swapped w/ our initial card.

        }
    }
}




//==========================================================================

class Player{
    constructor(playerName){
        this.playerName=playerName;
        this.playerCards=[]; //cards dealt to each player
        this.discardPile=[];
        this.points=0

    }

}

class Board{
    constructor(){
        
        this.warCardsInMiddle=[];
        this.players = [];
    }

    start(playerOneName, playerTwoName){
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let newDeck= new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();
        this.players[0].playerCards = newDeck.cards.slice(0,26); //0-25=26cards //slice(start,end)end number not included. slice(1,4)=1->3
        this.players[1].playerCards = newDeck.cards.slice(26-52) //26-51=
        //console.log(this.players[0].playerCards)
        //console.log(this.players[1].playerCards)
        //Both players now have decks.


            for(let j=0;j<26;j++){
               
                    this.players[0].playerCards[j]
                    this.players[1].playerCards[j]
                        //Loads middle array with first 2 cards from each player then leaves. 
                        //console.log(this.cardsInMiddle) 
                  //Player 0 higher he keeps cards in discard pile.      
                  if(this.players[0].playerCards[j].value > this.players[1].playerCards[j].value){
                      this.players[0].points+=1
                    console.log(`player 1 wins round ${j} score ${this.players[0].points}`)
                }  
                  else if(this.players[1].playerCards[j].value > this.players[0].playerCards[j].value){
                      this.players[1].points+=1;
                      console.log(`player 2 wins round ${j} score ${this.players[1].points}`)
                  }    
                
                  // cards are a tie. WAR!!
                  else if(this.players[0].playerCards[j].value === this.players[1].playerCards[j].value){
                      console.log("War tie, continue!")

                          }
                    
                        
                 } 
            //Show winner     
            if(this.players[0].points>this.players[1].points){
                alert(`Player 1 is the GOD OF WAR! 
            Player 1: ${this.players[0].points} 
            Player 2: ${this.players[1].points} `)
            } else if(this.players[1].points>this.players[0].points){
            alert(`Player 2 is the GOD OF WAR! 
            Player 2: ${this.players[1].points}
            Player 1: ${this.players[0].points} 
             `)
            }       
            
                
            
        
        
        
    }

}


let gameBoard=new Board();

gameBoard.start('Mario','Luigi');
console.log(gameBoard.players)
