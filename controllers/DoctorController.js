const Doctor = require('../models').Doctor;
const Patient = require('../models').Patient;
const helper = require('../helpers/checkPassword.js');

class DoctorController {

    static register(req,res){
        Doctor.findAll({where: {email: req.body.email}})
                .then(data => {
                    if(data.length == 0) {
                        return Doctor.create({
                            name: req.body.name,
                            username: req.body.username,
                            email: req.body.email,
                            password: req.body.password,
                            specialist: req.body.specialist
                        })
                    }
                })
                .then((data) => {
                    res.redirect(`${data.id}/edit`);
                })
                .catch((err) => {
                    res.send(err.message);
                })
    }

    static edit(req,res){
        Doctor.findByPk(req.params.id)
                .then(Doctor => {
                    res.render('profile', {Doctor});
                })
    }

    static submitEdit(req,res){
        Doctor.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.redirect('/home');
        })
    }

    static login(req,res){
        let Doctor = {}
        Doctor.findOne({where: {email: req.body.email}})
        .then((data) => {
            Doctor = data
            let checkPassword = helper(req.body.password, data.password);
            console.log(checkPassword);
            if(checkPassword) {
            }else{
                throw new Error('error login')
            }
        })
        .then((patients) => {
            res.render('Doctor/Welcome', {Doctor, patients: patients});
        })
        .catch(err => {
            res.send(err.message);
        })
    }

    static delete(req,res) {
        Doctor.destroy({where: {id: req.params.id}})
        .then(data => {
            res.redirect('/');
        })
        .catch((err) => {
			res.send(err);
		})
    }

    static logout(req,res) {
        if(req.session.user) { 
            delete req.session.user;
        }
        Patient.findAll()
		.then((data) => {
			data = data.map(item => item.dataValues);
			res.render('home', {data});
		})
		.catch((err) => {
			res.send(err);
		})
    }
}

module.exports = DoctorController 