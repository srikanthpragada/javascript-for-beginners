let names = ["JavaScript", "Java", "Python"]

names[5] = "TypeScript"  // add new
names[1] = "Java 20"     // update existing 

console.log(names)

for (let idx in names) { // keys/indexes
    console.log(`Value at ${idx} is ${names[idx]}`)
}

for (let name of names) {  // values 
    console.log(name)
}