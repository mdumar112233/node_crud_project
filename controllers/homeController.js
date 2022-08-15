import studentModel from "../models/Student.js";

export const homeController = async (req, res) => {
    try {
        const result = await studentModel.find();
        res.render('index', {data: result});
    } catch (error) {
        return console.log(error)
    }
};

export const createDoc = async (req, res) => {
    try {
        const {name, age, fees} = req.body;
        const doc = new studentModel({
            name: name,
            age: age,
            fees: fees
        });

        await doc.save();
        res.redirect("/home");
    } catch (error) {
        return console.log(error);
    }
};

export const updateController = async (req, res) => {
    try {
        const result = await studentModel.findById(req.params.id);
        res.render('edit', {data: result});
    } catch (error) {
        console.log(error);
    }
};

export const updateById = async (req, res) => {
    try {
        console.log(req.body, req.params)
        // const {name, age, fees} = req.body;
        const result = await studentModel.findByIdAndUpdate(req.params.id, req.body);

        res.redirect('/home');        
    } catch (error) {
        console.log(error);
    }
};


export const DeleteById = async (req, res) => {
    try {
        console.log(req.params.id)
        await studentModel.findByIdAndDelete(req.params.id);
        res.redirect('/home');
    } catch (error) {
        console.log(error)
    }
};