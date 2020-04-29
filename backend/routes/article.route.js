//let mongoose = require('mongoose'),
let express = require('express'),
router = express.Router();

let articleSchema = require('../models/Article');
let commentSchema = require('../models/Comment');

/*router.route('/').get((req, res) => {
    articleSchema.find((error, data) => {
        if(error) {
            console.log(error)
            res.json('')
        } else {
            res.json(data)
        }
    })
})*/

router.route('/').get((req, res) => {
    articleSchema.find((error, data) => {
        if(error) {
            console.log(error)
            return res.json('')
        } else {
            return res.json(data)
        }
    })
})


router.route('/edit-article/:id').get((req, res) => {
    articleSchema.findById(req.params.id, (error, data) => {
        if(error) {
            console.log(error)
            res.json('')
        } else {
            res.json(data)
        }
    })
})

router.route('/read-panel/:id').get((req, res) => {
    articleSchema.findById(req.params.id, (error, data) => {
        if(error) {
            console.log(error)
            res.json('')
        } else {
            res.json(data)
        }
    })
})

router.route('/read-panel/create-comment').post((req, res, next) => {
    commentSchema.create(req.body, (error, data) => {
        if(error) {
            return next(error)
        } else {
            console.log(data);
            res.json(data)
        }
    })
})

/*router.route('/comments/:id').get((req, res) => {
    commentSchema.findById(req.params.id, (error, data) => {
        if(error) {
            console.log(error)
            res.json('')
        } else {
            res.json(data)
        }
    })
})*/

router.route('/comments').get((req, res) => {
    commentSchema.find((error, data) => {
        if(error) {
            console.log(error)
            return res.json('')
        } else {
            return res.json(data)
        }
    })
})

router.route('/read-panel/delete-comment/:id').delete((req, res, next) => {
    commentSchema.findOneAndRemove(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


router.route('/create-article').post((req, res, next) => {
   articleSchema.create(req.body, (error, data) => {
       if(error) {
           return next(error)
       } else {
           console.log(data);
           res.json(data)
       }
   })
});

router.route('/update-article/:id').put((req, res, next) => {
    articleSchema.findByIdAndUpdate(req.params.id, {$set: req.body},
        (error, data) => {
        if(error) {
            console.log(error)
            return next(error)
        } else {
            res.json(data)
            console.log("Updated!")
        }
    })
})

router.route('/delete-article/:id').delete((req, res, next) => {
    articleSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

router.route('/')

module.exports = router;

