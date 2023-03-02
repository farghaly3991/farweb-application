
const AdminData = require('../models/adminData');
const { uploadFile } = require('../middlewares/file_upload');


exports.getAdminData = async(req, res) => {
    try {
        const apps = await AdminData.find();
        res.json({apps});
    } catch(err) {
        console.log(err);
        res.json({err});
     }
}

exports.getTeacherDataById = async(req, res) => {
    try {
        const teacherData = await AdminData.findOne({_id: req.params.id});
        if(!teacherData) throw('No teacher found');
        res.json({teacherData});
    } catch(err) {
        console.log(err);
        res.json({err});
     }
}

exports.updateAdminData = async(req, res) => {
    try {
        if(req.files) {
            const url = await uploadFile(req.files.image, req.body.siteName.replace(" ", "-"));
            req.body['image'] = url;
        }
        const adminData = await AdminData.find({phone: req.body.phone}).count();
        if(adminData > 0) {
            const updated = await AdminData.updateOne({phone: req.body.phone}, req.body);
            if(updated.n == 0) throw("No thing updated");
        } else {
            const newApp = await new AdminData(req.body).save();
            if(!newApp) throw("No thing added");
        }
        res.status(200).json({image: req.body.image});
    } catch(err) {
        console.log(err);
        res.json({err: errr.message? err.message: err});
     }
}

