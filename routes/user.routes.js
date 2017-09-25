var router = require('express').Router();
var User = require('.././models/user');
router.post('/user', function(request, response) {
    var name = request.query.name;
    var email = request.query.email;
    var password = request.query.password;

    // create a new user
    var newUser = User({
        name: name,
        email: email,
        password: password
    });

    // save the user
    newUser.save(function(err) {
        if (err) throw err;

        console.log('User created!');
    });

});

router.get('/user', function(request, response) {
    User.find({}, function(err, users) {
        var userMap = {};

        users.forEach(function(user) {
            userMap[user._id] = user;
        });

        response.json(userMap);
    });
});

router.delete('/user', function(request, response) {
    console.log(request.query.id);
    User.remove({ _id: request.query.id }, function(err) {
        if (!err) {
            console.log('removed');    
        }
        else {
            console.log(err);           
        }
    });
});


module.exports = router;