const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const ProductModel = require('./Product.js')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Company')
.then(() => console.log('DB connected'))
.catch(err => console.log(err))


//Create Rest API 
app.post('/addProduct', async (req,res)=>{
    try{
        await ProductModel.create(req.body)
        res.json({message:'Product Added Successfully'})
    }
    catch(error){
         res.json(error)
    } 
 })
 
 //Read All - Rest API 
 app.get('/viewProducts', async (req,res)=>{
     try{
         const records = await ProductModel.find()
         res.json(records)
     }
     catch(error){
          res.json(error)
     } 
 })
 
 //Read By ID Rest API - to display before updation (EditProduct)
 app.get('/findProduct/:id', async (req,res)=>{
     try{
         const record =  await ProductModel.findById(req.params.id)
         res.json(record)
     }
     catch(error){
          res.json(error)
     } 
 })
 
 //Update - REST API 
 app.put('/editProduct/:id', async (req,res)=>  {
     try {
         const updatedProduct = await ProductModel.findByIdAndUpdate(
              req.params.id,  req.body, {new:true})
         if (!updatedProduct) {
             return res.send('Item not found');
         }
         res.json({message:'Product Updated Successfully'});
     } catch (err) {
         res.json(err);
     }
 })
 
 //Delete - REST API 
 app.delete('/deleteProduct/:id',async (req,res)=>{
     try{
      const deletedItem = await ProductModel.findByIdAndDelete({_id:req.params.id})
      res.json({message:'Item Deleted Successfully!'})
     }
     catch(error){
          res.json(error)
     } 
 })
 
//config PORT and Start Server
const PORT = 8000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

