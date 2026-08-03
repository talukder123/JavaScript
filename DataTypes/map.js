let arr = [2, 4, 6, 8 ,10]

// template --:
// const valiable_name = array_name.map_keyword( pass the function -> (iterator) => {
//        your conditions ........
// })

const double = arr.map((i) => { // using callback function! | arrow function
    return i*2
} )

console.log(double)