try {
    let cd = new Date()
    console.log(cd.getMonth())
}
catch (e) {
    console.log("Error :" + e)
}
finally {
   console.log("Finally")   
}
 
console.log("The End")
 