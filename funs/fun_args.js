function print(a, b, c) {
    console.log(a)
    console.log(b)
    if (c)
        console.log('Value = ', c)
    else
        console.log('Undefined for c')

    console.log(arguments)  
}


print(10)
print(10, 20, 30)
print(10, 20, 30, 40)
