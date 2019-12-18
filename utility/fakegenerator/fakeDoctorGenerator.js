const fs = require('fs');
const faker = require('faker');

const countDoctor = 12;
let arrayDoctor = '';
const specialist = ['headache', 'nosebleed', 'cough', 'fever', 'diarrhea', 'vomiting']

for (let i = 0; i < countDoctor; i++) {
    let randomName       = faker.name.findName();
    let username         = `${randomName.split(' ')[1].toLowerCase()}@cakravan.com`; 
    let randomPassword   = faker.internet.password().slice(10); 
    let randomSpecialist = specialist[Math.floor(Math.random()*6)]
    arrayDoctor += (`${randomName},${username},${randomPassword},${randomSpecialist}\n`);
}
// console.log(arrayDoctor);
fs.writeFileSync('doctor.csv',arrayDoctor.slice(0,arrayDoctor.length-1),'utf-8')
