const fs = require('fs');
const faker = require('faker');

const countPatient = 24;
let strPatient = '';

for (let i = 0; i < countPatient; i++) {
    let randomName       = faker.name.findName();
    let username         = `${randomName.split(' ')[1].toLowerCase()}@mail.com`; 
    let randomPassword   = faker.internet.password().slice(10); 
    strPatient += (`${randomName},${username},${randomPassword}\n`);
}
// console.log(strPatient);
fs.writeFileSync('patient.csv',strPatient.slice(0,strPatient.length-1),'utf-8')
