const express = require('express');
const app = express();
const port = 3000;

const homeRouter = require('./routes/homeRouter.js');
const patientRouter = require('./routes/patientRouter.js');
const doctorRouter = require('./routes/doctorRouter.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended : true }));

app.use('/', homeRouter);
app.use('/patients', patientRouter);
app.use('/doctors', doctorRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})