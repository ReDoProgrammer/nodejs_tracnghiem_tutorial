const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('home/index',{
        layout:'layouts/_front_layout'
    });
})




module.exports = router;