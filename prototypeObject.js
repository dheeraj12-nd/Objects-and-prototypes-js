let arr = [1, 2, 3, 4, 5];
let myObject1={
    name: 'dheeraj',
    city: "PrayagRaj",
    getInf0: function(){
        console.log(this.name+ " form " +this.city);
    }
}


// prototyple-inheritance--
let myObject2 = {
    name: "Neeraj",
}
myObject2.__proto__= myObject1;
console.log(myObject2.getInf0());