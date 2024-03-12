
let emails = []

emails['joe'] = 'joe@gmail.com'
emails['andy'] = 'andy@yahoo.com'
emails['joe'] = 'joey@gmail.com'   // overwrite existing value at the key 

console.log(emails)

for (let name in emails)
    console.log(emails[name])

