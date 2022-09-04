import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()
  
  switch(method) {
        case 'GET':
            try {
                const products = await Product.find()
                res.status(200).json(products)
            } catch (error) {
                res.status(500).json(error)
            }
            break
        case 'POST':
            try {
                const product = await Product.create(req.body)
                res.status(200).json(product)
            } catch (error) {
                res.status(500).json(error)
            }
            break
    }
}