import React, {useState, useContext, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CompoundFinder from '../apis/CompoundFinder';
import { CompoundsContext } from '../context/CompoundsContext';

const UpdateCompound = (props) => {

    const {id} = useParams();
    const {compounds} = useContext(CompoundsContext);
    let history = useHistory();

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

    useEffect(() => {
        const fetchData = async () => {
            const response = await CompoundFinder.get(`/${id}`);
            console.log(response.data.data);
            setCompound_Name(response.data.data.compound.compound_name);
            setEndpoint_Value(response.data.data.compound.endpoint_value);
            setEndpoint_Name(response.data.data.compound.endpoint_name);
            setAssay_Name(response.data.data.compound.assay_name);
            setSpecies_Strain(response.data.data.compound.species_strain);
            setCas_Number(response.data.data.compound.cas_number);
            setFmla(response.data.data.compound.fmla);
            setMolecular_Weight(response.data.data.compound.molecular_weight);
            setAuthors(response.data.data.compound.authors);
            setTitle(response.data.data.compound.title);
            setVolume_Number(response.data.data.compound.volume_number);
            setStart_Page(response.data.data.compound.start_page);
            setYear(response.data.data.compound.year);  
            
           
        };

        fetchData();
    }, []);


    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const updatedCompound = await CompoundFinder.put(`/${id}`, {
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
        console.log(updatedCompound);
        history.push("/");
        
    };


    return (
        <div>
            
            <form action="">

                <div className="form-group">
                    <label htmlFor="compound_name">Compound_Name</label>
                    <input value={compound_name} onChange={(e) => setCompound_Name(e.target.value)} id="compound_name" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="endpoint_value">Endpoint_Value</label>
                    <input value={endpoint_value} onChange={(e) => setEndpoint_Value(e.target.value)} id="endpoint_value" className="form-control" type="float" />
                </div>

                <div className="form-group">
                    <label htmlFor="endpoint_name">Endpoint_Name</label>
                    <input value={endpoint_name} onChange={(e) => setEndpoint_Name(e.target.value)} id="endpoint_name" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="assay_name">Assay_Name</label>
                    <input value={assay_name} onChange={(e) => setAssay_Name(e.target.value)} id="assay_name" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="species_strain">Species_Strain</label>
                    <input value={species_strain} onChange={(e) => setSpecies_Strain(e.target.value)} id="species_strain" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="cas_number">Cas_Number</label>
                    <input value={cas_number} onChange={(e) => setCas_Number(e.target.value)} id="cas_number" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="fmla">Fmla</label>
                    <input value={fmla} onChange={(e) => setFmla(e.target.value)} id="fmla" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="molecular_weight">Molecular_Weight</label>
                    <input value={molecular_weight} onChange={(e) => setMolecular_Weight(e.target.value)} id="molecular_weight" className="form-control" type="float" />
                </div>

                <div className="form-group">
                    <label htmlFor="Author">Author</label>
                    <input value={authors} onChange={(e) => setAuthors(e.target.value)} id="authors" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="volume_number">Volume_Number</label>
                    <input value={volume_number} onChange={(e) => setVolume_Number(e.target.value)} id="volume_number" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="start_page">Start_Page</label>
                    <input value={start_page} onChange={(e) => setStart_Page(e.target.value)} id="start_page" className="form-control" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input value={year} onChange={(e) => setYear(e.target.value)} id="year" className="form-control" type="int" />
                </div>

                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>

            </form> 
        </div>
    )
}

export default UpdateCompound;
