const fs = require('fs');
const data = fs.readFileSync('../../doctorFixed.csv','utf8').split('\n');
const hashPassword = require('../../helpers/hashPassword.js')

let finalData = '';
for (let i = 0; i < data.length; i++) {
  if(data[i] !== ''){
    let input = data[i].split(',')
     
    let randomName      = input[0]
    let username        = input[1]
    let email           = input[2]
    let randomPassword  = hashPassword(input[3])
    let randomSpecialist= input[4]
    finalData += (`${randomName},${username},${email},${randomPassword},${randomSpecialist}\n`)
  }
}
fs.writeFileSync('doctorFixedHash.csv',finalData.slice(0,finalData.length-1),'utf-8')
