class Person {
    constructor(name, age) {
        // properties or instance fields
        this.name = name
        this.age = age
    }
    // Methods
    isMajor() {
        return this.age >= 21
    }
}


let p1 = new Person("Ellison", 60)   // Create an object 
console.log(p1.name)
p1.age = 19
p1.email = "ellison@oracle.com"

console.log(p1)
console.log(p1.isMajor())

let p2 = new Person() 
console.log(p2)



