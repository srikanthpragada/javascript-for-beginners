let p = { fullname: 'Larry', company: "Google" }

let { fullname, company, age = 30} = p

console.log(fullname, company, age)

let { fullname: n, company: c } = p
console.log(n, c)




