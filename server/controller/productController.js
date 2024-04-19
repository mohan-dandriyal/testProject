const uploadCloudinaryFile = require("../midlewhere/cloudinary")
const ProductModule = require("../module/productModule")



const FindProduct = async (req, res) => {
    try {
        const findProduct = await ProductModule.find({})

        res.status(200).json({
            message: "ok",
            data: findProduct
        })
    }
    catch (err) {
        res.status(500).json({
            message: "internal server Error"
        })
    }
}

const createProduct = async (req, res) => {
    const { productName, productDescription, productPrice } = req.body;


    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "File not provided"
            });
        }

        const response = await uploadCloudinaryFile(req.file.path);

        if (response) {
            const newProduct = new ProductModule({
                productName: productName,
                productImage: response.url,
                productDescription: productDescription,
                productPrice: productPrice
            })

            //    save the new product 
            await newProduct.save()
            res.status(201).json({
                message: "Product created successfully",
                product: newProduct
            });
        }
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

module.exports = {
    FindProduct,
    createProduct
}