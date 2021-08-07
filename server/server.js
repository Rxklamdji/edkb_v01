require("dotenv").config();
const express = require("express");
//Middleware
const morgan =require("morgan");
const app = express();
const db = require("./db");
const cors = require("cors");



app.use(cors());
app.use(express.json());

//Get all compounds
app.get("/api/v1/compounds", async (req, res) =>{

    try {
        const results = await db.query("select * from cmp");
        
        res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            compounds: results.rows,
        },
        
    });

    }  catch (err){console.log(err);}
    
});


//Get a Compound
app.get("/api/v1/compounds/:id", async (req, res) => {
    console.log(req.params.id);
    try {
        const results = await db.query('SELECT * FROM cmp where id = $1', [req.params.id,]);

        res.status(200).json({
            status: "sucess",
            data: {
                compound: results.rows[0],
            },
        });

    } catch (err){console.log(err);}
});


//Create a Compound
app.post("/api/v1/compounds", async (req, res) =>{
    console.log(req.body);
 
    try {
        const results = await db.query
        ('INSERT INTO cmp (compound_name, endpoint_value, endpoint_name, assay_name, species_strain, cas_number, fmla, molecular_weight, authors, title, volume_number, start_page, year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) returning *', 
        [req.body.compound_name, req.body.endpoint_value, req.body.endpoint_name, req.body.assay_name, req.body.species_strain, req.body.cas_number, req.body.fmla, req.body.molecular_weight, req.body.authors, req.body.title, req.body.volume_number, req.body.start_page, req.body.year])

        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                compound: results.rows[0],
            },
        });

    } catch (err) {console.log(err);}

});


//Update Compounds
app.put("/api/v1/compounds/:id", async (req, res) =>{

    try {
        const results = await db.query
        ('UPDATE cmp SET compound_name = $1, endpoint_value = $2, endpoint_name = $3, assay_name = $4, species_strain = $5, cas_number = $6, fmla = $7, molecular_weight = $8, authors = $9, title = $10, volume_number = $11, start_page = $12, year = $13 where id = $14 returning *',
        [req.body.compound_name, req.body.endpoint_value, req.body.endpoint_name, req.body.assay_name, req.body.species_strain, req.body.cas_number, req.body.fmla, req.body.molecular_weight, req.body.authors, req.body.title, req.body.volume_number, req.body.start_page, req.body.year, req.params.id])

        res.status(200).json({
            status: "success",
            data: {
                compound: results.rows[0],
            },
        });

    } catch (err) {console.log(err);}

    console.log(req.params.code);
    console.log(req.body);
    
});


//Delete Compounds
app.delete("/api/v1/compounds/:id", async (req, res) => {

    try {
        const results = db.query('DELETE FROM cmp WHERE id = $1', [req.params.id])
        
    res.status(204).json({
        status: "sucess",
    });

    } catch (err) {console.log(err);}

});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and being used on port ${port}`);
});