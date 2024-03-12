class Person {
    #age    // private fields 
    constructor(name, age) {
        // properties or instance fields
        this.name = name
        this.#age = age 
    }
    // Methods
    isMajor() {
        return this.#age >= 21
    }
}


let p1 = new Person("Ellison", 60)   // Create an object 
console.log(p1.name)
console.log(p1.isMajor())
console.log(p1.#age)



 



