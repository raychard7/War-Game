//Create these variables so you don't have to write chai.expect, chai.assert everytime.
//https://www.sitepoint.com/unit-test-javascript-mocha-chai/
let expect= chai.expect;
let assert= chai.assert;

//describe is the top level where you'll hold certain types of tests inside. Here it was for the deck class
describe('#Deck class',function(){
    it("Ensure constructor creates a new instance of the Deck", function(){
        let testDeck1 = new Deck();
        expect(testDeck1).to.be.an('object');
    })
    it("createDeck() adds 52 cards to array this.mycards", function(){
        let testDeck2 = new Deck();
        testDeck2.createDeck()
        assert(testDeck2.cards.length,52);
    })
})


