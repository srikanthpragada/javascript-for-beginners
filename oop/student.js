//superclass 
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    isMajor() {
        return this.age >= 21
    }

    setAge(age) {
        this.age = age 
    }

    show() {
        console.log(`Name : ${this.name}`)
        console.log(`Age  : ${this.age}`)
    }
}
// Subclass 
class Student extends Person {
    constructor(name, age, course) {
        super(name, age) // call superclass constructor
        this.course = course
    }
    setCourse(course) {
        this.course = course;
    }
    // Overriding 
    show() {
        super.show()    // call superclass's version 
        console.log(`Course  : ${this.course}`)
    }
}

let p1 = new Person("Ellison", 60)   // Create an object 
console.log(p1)
let s = new Student("Mark", 20, "MS CS")
s.setCourse("MS IT")
s.setAge(22)
s.show()  // call version in subclass 

// console.log(s)
// console.log(s.isMajor())

