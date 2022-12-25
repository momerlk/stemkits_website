const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://president:stupid_is_grape@cluster0.k1gpw.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);


class Order {
    constructor(name , email , tel , zip , address1 , address2 , city , province ){
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.zip = zip;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.province = province;
        this.country = "Pakistan";

        try {
            const database = client.db('Stemkits');
            const coll = database.collection('Orders');
            coll.insertOne({
                name : this.name,
                email : this.email , 
                tel : this.tel,
                zip : this.zip,
                address1 : this.address1 , 
                address2 : this.address2 , 
                city : this.city , 
                province : this.province , 
                country : this.country,
            }) 
        } finally {
            // Ensures that the client will close when you finish/error
        }
    }

}