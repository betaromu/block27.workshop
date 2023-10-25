// What is MATH?
Math.random()

console.log(typeof Math)

console.log(Math.PI)

let myMath = {
    PI: 3.14159265,
    sum: function (a, b) {
        return a + b
    },
}
console.log(myMath.PI)

console.log(myMath.sum(5,7))

//--------------------

let myString = "HELLO"

let myStringObject = {
    0: "H",
    1: "E",
    2: "L",
    3: "L",
    4: "O",
    toString: function () {
        let str = ''
        for (let i = 0; i< 5; i++) {
            str += myStringObject[i]
        }
        return str
    },
    length: 5,

}

console.log(myStringObject)
console.log(myStringObject.toString())

/*

Class to represent my Candy

*/

let CandyBag = {
    bag: ['tootsie-roll', 'dots', 'butterfinger', 'lollipop', 'kit-kat', 'jolly-rancher', 'reeses', '3 musketeers', '100 grand'],
    doubleCandy: function () {

        //"This" refers to specific context of the method
        //In a method, the context is the object we are inside of
        let doubleBag = this.bag.concat(this.bag)

        CandyBag.bag = doubleBag
    },
    testMethod1: () => {
        console.log(this.bag)
    },
    testMethod2: function () {
        console.log(this.bag)
    }
}

console.log('Original bag:', CandyBag.bag)
CandyBag.doubleCandy()
console.log('New Bag:', CandyBag.bag)

console.log(this)

class MyCandyBag {
    constructor(candy) {
        //SETUP (initializing variables/data and general setup)
        this.bag = candy
    }
    doubleCandy() {
        let doubleBag = this.bag.concat(this.bag)
        this.bag = doubleBag
    }
}

//"new" creates a new instance of hte class with its own bag and methods that work on it
//the values in the parentheses when creating a class go to the constructor method
let elissasBagOfCandy = new MyCandyBag(['skittles', 'm&ms'])
let aaronsBagOfCandy = new MyCandyBag(['snickers', 'reeses'])

console.log(elissasBagOfCandy)
console.log(aaronsBagOfCandy)

elissasBagOfCandy.doubleCandy()
elissasBagOfCandy.doubleCandy()
console.log(elissasBagOfCandy)

//CLASSES ARE CAPITALIZED (classesarecap)