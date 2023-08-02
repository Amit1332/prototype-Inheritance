
// let parent = {
//     name:'amit',

//     calc:function(a,b){
//         console.log(a+b)
//         console.log(a-b)

//     }
// }

// let child = Object.create(parent)
// console.log(child.calc(5,4))
// child.name ="rahul"  
// console.log(child.name)// if we create same name vairable then  this will be first priority rahul will print else amit if not found then get from prototype
// console.log(Object.getPrototypeOf(child)) // return prototype of child
// let ff =Object.getPrototypeOf(child) // store child prototype in vriable
// console.log(ff.name)  // accessing stored child prototype name



// let arr =[1,2,4]

// let arr1 =Object.create(arr)
// console.log(arr1)

// let arr2 =Object.getPrototypeOf(arr1)
// console.log(arr2)
// let arr3 =Object.getPrototypeOf(arr2)
// console.log(arr3)

