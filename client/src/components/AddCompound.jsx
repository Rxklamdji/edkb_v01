import React, {useContext, useState} from 'react';
import CompoundFinder from "../apis/CompoundFinder"
import { CompoundsContext } from '../context/CompoundsContext';

const AddCompound = () => {

    const {addCompounds} = useContext(CompoundsContext);

    const [compound_name, setCompound_Name] = useState ("");
    const [endpoint_value, setEndpoint_Value] = useState ("");
    const [endpoint_name, setEndpoint_Name] = useState ("");
    const [assay_name, setAssay_Name] = useState ("");
    const [species_strain, setSpecies_Strain] = useState ("");
    const [cas_number, setCas_Number] = useState ("");
    const [fmla, setFmla] = useState ("");
    const [molecular_weight, setMolecular_Weight] = useState ("");
    const [authors, setAuthors] = useState ("");
    const [title, setTitle] = useState ("");
    const [volume_number, setVolume_Number] = useState ("");
    const [start_page, setStart_Page] = useState ("");
    const [year, setYear] = useState ("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await CompoundFinder.post("/",{
                compound_name,
                endpoint_value,
                endpoint_name,
                assay_name,
                species_strain,
                cas_number,
                fmla,
                molecular_weight,
                authors,
                title,
                volume_number,
                start_page,
                year,
            });

            addCompounds(response.data.data.compound);

        } catch (err) {}
    };



    return (
        <div className="mb-4">
            <form action="">
                
                <div className="container"> 

                    <div>

                        <div className="col-sm">
                            <input value={compound_name} onChange={(e) => setCompound_Name(e.target.value)} type="text" className="form-control" placeholder="compound_name"/>
                        </div>
                        <div className="col-sm">
                            <input value={endpoint_value} onChange={(e) => setEndpoint_Value(e.target.value)} className="form-control" type="float" placeholder="Endpoint_Value"/>
                        </div>
                        <div className="col-sm">
                            <select value={endpoint_name} onChange={(e) => setEndpoint_Name(e.target.value)} className="custom-select my-1 mr-sm-2">
                                <option disabled>Endpoint_NAME</option>
                                <option value="LogRBA">LogRBA</option>
                                <option value="LogRPP">LogRPP</option>
                                <option value="LogRP">LogRP</option>
                            </select>
                        </div>
                        <div className="col-sm">
                            <select value={assay_name} onChange={(e) => setAssay_Name(e.target.value)} className="custom-select my-1 mr-sm-2">
                                <option disabled>Assay_NAME</option>
                                <option value="ER Gene (Reporter Gene Assay)">ER Gene (Reporter Gene Assay)</option>
                                <option value="AR Binding (Receptor Binding Assay)">AR Binding (Receptor Binding Assay)</option>
                                <option value="Escreen (Cell Proliferation Assay)">Escreen (Cell Proliferation Assay)</option>
                            </select>
                        </div>
                        <div className="col-sm">
                            <select value={species_strain} onChange={(e) => setSpecies_Strain(e.target.value)} className="custom-select my-1 mr-sm-2">
                                <option disabled>Strain</option>
                                <option value="HUMAN">HUMAN</option>
                                <option value="RAT">RAT</option>
                                <option value="MOUSE">MOUSE</option>
                                <option value="CHICKEN">CHICKEN</option>
                                <option value="LIZARD">LIZARD</option>
                            </select>
                        </div>
                        <div className="col-sm">
                            <input value={cas_number} onChange={(e) => setCas_Number(e.target.value)} type="text" className="form-control" placeholder="Cas_Number"/>
                        </div>
                        <div className="col-sm">
                            <input value={fmla} onChange={(e) => setFmla(e.target.value)} type="text" className="form-control" placeholder="Formula"/>
                        </div>
                        <div className="col-sm">
                            <input value={molecular_weight} onChange={(e) => setMolecular_Weight(e.target.value)} className="form-control" type="float" placeholder="Molecular_Weight"/>
                        </div>
                        <div className="col-sm">
                            <input value={authors} onChange={(e) => setAuthors(e.target.value)} className="form-control" type="text" placeholder="Authors"/>
                        </div>
                        <div className="col-sm">
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" type="text" placeholder="Title"/>
                        </div>
                        <div className="col-sm">
                            <input value={volume_number} onChange={(e) => setVolume_Number(e.target.value)} className="form-control" type="text" placeholder="Volume_Number"/>
                        </div>
                        <div className="col-sm">
                            <input value={start_page} onChange={(e) => setStart_Page(e.target.value)} className="form-control" type="text" placeholder="Start_Page"/>
                        </div>
                        <div className="col-sm">
                            <input value={year} onChange={(e) => setYear(e.target.value)} className="form-control" type="int" placeholder="Year"/>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary col-sm">ADD</button>

                    </div>

                </div>

            </form>
        </div>
    );
};

export default AddCompound;
