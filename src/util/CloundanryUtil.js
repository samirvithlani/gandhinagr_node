const cloudnary = require('cloudinary').v2;

const uploadFileToCloudinary = async (file) => {


    cloudnary.config({
        cloud_name:"",
        api_key:"",
        api_secret:""
    })

    const response = await cloudnary.uploader.upload(file.path);

    return response;

}

module.exports = {
    uploadFileToCloudinary
}
