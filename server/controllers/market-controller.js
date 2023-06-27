const Item =require('../models/market-model')

const newItem = async(req, res) => {
    const {seller, itemName, price, details,type,phone, image} = req.body

    let emptyFields = [];

    if (!seller) {
        emptyFields.push('seller');
    }
    if (!itemName) {
        emptyFields.push('item');
    }
    if (!price) {
        emptyFields.push('price');
    }
    if (!type) {
        emptyFields.push('type');
    }
    if (!image) {
        emptyFields.push('image');
    }
    if (emptyFields.length > 0) {
        return res
        .status(400)
        .json({ error: 'Please fill in all the fields', emptyFields });
    }


    try{
       const newItem = await Item.create({seller, itemName , price, details,type,phone, image})
       res.status(200).json( newItem)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getItems = async (req, res) => {
    try {
      const items = await Item.find({}).sort({ createdAt: -1 }).exec();
      res.status(200).json(items);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  const getSportsItems = async (req, res) => {
    try {
      const sportsItems = await Item.find({ type: 'sports' }).sort({ createdAt: -1 }).exec();
      res.status(200).json(sportsItems);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const getGamingItems = async (req, res) => {
    try {
      const gamingItems = await Item.find({ type: 'gaming' }).sort({ createdAt: -1 }).exec();
      res.status(200).json(gamingItems);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const getEquipmentItems = async (req, res) => {
    try {
      const equipmentItems = await Item.find({ type: 'equipment' }).sort({ createdAt: -1 }).exec();
      res.status(200).json(equipmentItems);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


module.exports = {newItem, getItems, getSportsItems, getGamingItems, getEquipmentItems}