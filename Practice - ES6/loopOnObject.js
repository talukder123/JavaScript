
const forin = (oo) => {

    let arr = []
    for (const i in oo) {
     arr.push ([i, oo[i]]);
    }

    return arr;
}

const forofentries = (oo) => {

    let arr = []

    for (const [key, value] of Object.entries(oo)) {
    arr.push(key, value);
    }

    return arr;
}


//  --> map()-এর ভিতরে destructuring !
const entriesDestructure = (obj) => {
    const result = Object.entries(obj).map(([key, value]) =>  {
        return [key, value];
    });
    return result
};


const student = {
    name : "talukder",
    age : 23,
    term: 3,
    cgpa: 3.80
}

console.log(forin(student))
console.log(forofentries(student))
console.log(entriesDestructure(student))
