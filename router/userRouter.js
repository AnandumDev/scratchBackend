const express = require("express")
const { usercreate, getdata, getbyid, updatedata, deletedata } = require("../controler/userControler")
const router = express.Router()






router.route('/signup').post(usercreate)
router.route('/getdata').get(getdata)
router.route('/getid/:id').get(getbyid)
router.route('/update/:id').put(updatedata)
router.route('/deleteid/:id').delete(deletedata)




module.exports = router