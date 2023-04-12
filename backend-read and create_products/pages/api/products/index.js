import dbConnect from "db/connect";
import Product from "db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "POST") {
    try {
      const productData = request.body;
      const product = new Product(productData);
      await product.save((err, data))
      console.log(data);

      response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.log(error);
      response.status(400), json({ error: error.message });
    }
  }

  if (request.method === "GET") {
    const product = await Product.find();
    return response.status(200).json(product);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
/*

switch (request.method === "POST") {
case:
try {
  const productData= request.body;
  const product = new Product(productData);
  await product.save()

  response.status(201).json({status: "Product created."})
} catch (error) {
  console.log(error);
  response.status(400),json({error: error.message})
  
}
break
case (request.method === "GET"):
const product = await Product.find();
    return response.status(200).json(product);
default:
  response.status(405).json({ message: "Method not allowed" });

} */
