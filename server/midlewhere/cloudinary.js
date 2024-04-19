const cloudinary = require('cloudinary').v2;



cloudinary.config({
    cloud_name: 'dhaxdt4yd',
    api_key: '174813113554334',
    api_secret: 'vrddagw3BPZD_LuYQRQHsC7mmC0'
});


const uploadCloudinaryFile = async (filePath) => {
    if (filePath) {
        const result = await cloudinary.uploader.upload(filePath, { resource_type: "auto" });
        return result
    } else {
        return null
    };
}

module.exports = uploadCloudinaryFile;
