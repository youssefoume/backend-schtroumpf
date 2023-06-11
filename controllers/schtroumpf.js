const Schtroumpf=require('../models/schtroumpfdata');



const getSchtroumpfs = async (req, res) => { 
    try {
        const schtroumpf= await Schtroumpf.find();
        
        res.status(200).json(schtroumpf);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const registerSchtroumpf =  async (req, res) => {
    console.log(req.body);
    const newSchtroumpf = new Schtroumpf({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
       
    })
    try {
        await newSchtroumpf.save();

        res.status(201).json(newSchtroumpf);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }}

const login= async (req, res) => {
   
        const { username, password } = req.body;
        try {
            const schtroumpf= await Schtroumpf.find({ username: username, password: password});
            console.log(schtroumpf);
            if (schtroumpf.length===0)res.status(404).json({message: "schtroumpf not found"});
            else res.status(200).json(schtroumpf);
        } catch(error) {
            res.status(404).json({message: error.message});
        }
}

const findSchtroump=async (req, res) => {
    const id= req.params.id;
    try {
        const schtroumpf= await Schtroumpf.findById(id);
        
        res.status(200).json(schtroumpf);
    }catch(error) {
        res.status(404).json({message: error.message});
    }
}
const modifierSchtroumpf =async (req, res) => {
    const id=req.params.id
    const role = req.body.role
    try{
        const schtroumpf= await Schtroumpf.findByIdAndUpdate(id,{role:role});
        res.status(200).json(schtroumpf);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}
const ajoutAmis=async (req, res) => {
    const id = req.params.id;
    const friendId = req.body.id;
    console.log(id, friendId);
    try{
        const schtroumpf= await Schtroumpf.findByIdAndUpdate(id,{$push: {amis: friendId}});
        res.status(200).json(schtroumpf);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}
const supprissionAmis=async (req, res) => {
    const id = req.params.id;
    const friendId = req.body.id;
    try{
        const schtroumpf= await Schtroumpf.findByIdAndUpdate(id,{$pull: {amis: friendId}});
        res.status(200).json(schtroumpf);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}
module.exports={
    getSchtroumpfs,registerSchtroumpf,login,
    findSchtroump,modifierSchtroumpf,ajoutAmis
    ,supprissionAmis
}