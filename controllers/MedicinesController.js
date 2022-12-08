const express = require('express');
const models = require('../models');

const GetAlldata = async (req, res)=>{
    const medicines = await models.Medicines.findAll({});
    res.status(200).send({
        status : 200,
        message : "Berhasil",
        data: medicines
    }) ;
};
const Addmedicine =  async (req, res)=>{
    try {
        const {price, quantity, code, merk, type, expired} = req.body;
        const Medicines = await models.Medicines.create({
            price,
            quantity,
            code,
            merk,
            type,
            expired
        });
        res.status(200).send({status:200, message :" Medicine Added", data : Medicines });
        
    } catch (error) {
        res.status(500).send({status:500, message :error.message });
    }
};
const Updatemedicine =  async (req, res)=>{
    try {
        const id_medicine = req.params.id;
        const {price, quantity, code, merk, type, expired} = req.body;
        const Medicines = await models.Medicines.update({
            price,
            quantity,
            code,
            merk,
            type,
            expired
        },{
            where:{
                id : id_medicine,
            },
        });
        res.status(200).send({status:200, message :"Medicine Updated", data : Medicines });
        
    } catch (error) {
        res.status(500).send({status:500, message :error.message });
    }
};
const deleteMedicine =  async (req, res)=>{
    try {
        const id_medicine = req.params.id;
        await models.Medicines.destroy({
            where:{
                id : id_medicine,
            },
        });
        res.status(200).send({status:200, message :"Medicine Deleted"});    
    } catch (error) {
        res.status(500).send({status:500, message :error.message });
    }
};
module.exports={GetAlldata, Addmedicine, Updatemedicine, deleteMedicine};