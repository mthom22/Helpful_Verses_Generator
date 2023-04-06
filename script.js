let noun = ['I', 'We', 'You'];
let adverbA = ['will be', 'can be', 'are']; //For We and You
let adverbB = ['will be', 'can be', 'am']; //For I
let verb = ['special', 'important', 'powerful', 'loved', 'beautiful', 'amazing'];

const userChoice = noun => {
    for (let i = 0; i > noun.length; i++) {
        for (let j = 0; j > adverbA.length; j++);
        for (let k = 0; k > adverbB.length; k++);
        for (let m = 0; m > verb.length; m++)
    
    if (i === [0]){
        console.log (`${this.noun} ${[k]} more ${[m]} than ${this.noun} know!`);
    } else if (i === [1] || [2]) {
        console.log (`${this.noun} ${[j]} more ${[m]} than ${this.noun} know!`);
    } else {
        console.log ('Invalid Entry')
    }
    }
}
console.log (userChoice('I'));
