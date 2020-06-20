//const userRoutes = express.Router();
const router = require('express').Router();
let User = require('../models/user.models');
//const { json } = require('body-parser');
//const { models } = require('mongoose');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('error'+res)); 
    });

    
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
      .then(users => res.json(users))
      .catch(err => res.status(400).json('error'+res)); 
  });

    router.route('/delete/:id').delete((req, res, next) => { 
           User.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
              return next(error);
            } else {
              res.status(200).json({
                msg: data
              })
            }
          })
        
        });


    router.route('/add').post((req, res) => {
        const username = req.body.username;
        const newUser = new User({username});
        newUser.save()
            .then(()=> res.json('added'))
            .catch(err => res.status(400).json('error:'+err)); 

           // res.redirect('https://app.example.io');
          
          });
    
        router.route('/update/:id').post((req, res) => {
          const id = req.params.id;
          User.findById(id)
          .then(users => {
            users.username = req.body.username;
            users.save()
            .then(users => res.json(users))
            .catch(err => res.status(400).json('error'+res)); 
              })
    
       
});
          

module.exports =  router;