//viet code ket noi co so du lieu
const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});

//khai bao duong dan ket noi 
const uri = 'mongodb+srv://hienph32983:hienokph32983@cluster0.kevxigz.mongodb.net/md18402';

const mongoose= require('mongoose');

const carModel = require('./carModel');
const CarModel = require('./carModel');

app.get('/', async(req, res)=>{
    await mongoose.connect(uri);

    let cars = await carModel.find();//ham lay ra tat ca du lieu trong danh sach 
    //bat cu lenh nao ket noi co so du lieu deu phai co await
    console.log(cars);

    res.send(cars);
})

app.post('/add_xe', async(req, res)=>{
    await mongoose.connect(uri);

    // let car ={
    //     ten:'xe 9', 
    //     namSX: 2024,
    //     hang: 'HienOk',
    //     gia:7500
    // }

    let car= req.body;

    let kq = await carModel.create(car);
    console.log(kq);

    let cars = await carModel.find();//ham lay ra tat ca du lieu trong danh sach 
    //bat cu lenh nao ket noi co so du lieu deu phai co await
    console.log(cars);

    res.send(cars);
})

app.get('/xoa/:id', async(req, res)=>{

    await mongoose.connect(uri);

    let id = req.params.id;
    console.log(id);
    //xu li loi khi id khong dung
    await CarModel.deleteOne({_id:id});

    res.redirect('../')
})

app.get('/update/:ten', async(req,res)=>{

    await mongoose.connect(uri);
    console.log('Ket noi thanh cong');

    let tenXe = req.params.ten;//co the update theo id duoc
    console.log(tenXe);

    let tenXeMoi = tenXe + 'Phien ban moi 2024';

    await CarModel.updateOne({ten:tenXe}, {ten:tenXeMoi});

    let xehois = await carModel.find({});

    res.send(xehois);
})