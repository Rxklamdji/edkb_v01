import React, {useEffect, useContext} from 'react';
import { useHistory } from 'react-router';
import CompoundFinder from "../apis/CompoundFinder";
import { CompoundsContext } from '../context/CompoundsContext';

const CompoundList = (props) => {

    const {compounds, setCompounds}= useContext(CompoundsContext);

    let history = useHistory();

    useEffect(() =>{

        const fetchData = async () => {
            
        try {
            const response = await CompoundFinder.get("/")
            setCompounds(response.data.data.compounds);
        } catch (err) {}

        }

        fetchData();

    }, []);


    const handleDelete = async (id) => {

        try {
            const response = await CompoundFinder.delete(`/${id}`);
            setCompounds(compounds.filter(compound => {
                return compound.id !== id;
            }));
        } catch (err) {}

    };


    const handleUpdate = (id) => {
        history.push(`/compounds/${id}/update`);
    };


    return (
        <div className="list-group">

            <table className="table table-hover">
                <thead>
                    <tr className="bg-primary">
                    <th scope="col">Compound_ID</th>
                        <th scope="col">Compound_Name</th>
                        <th scope="col">EnDPoint_Value</th>
                        <th scope="col">EnDPoint_Name</th>
                        <th scope="col">Assay_Name</th>
                        <th scope="col">Species_Strain</th>
                        <th scope="col">Cas_Number</th>
                        <th scope="col">FMLA</th>
                        <th scope="col">Molecular_Weight</th>
                        <th scope="col">Authors</th>
                        <th scope="col">TiTle</th>
                        <th scope="col">Volume_Number</th>
                        <th scope="col">Start_Page</th>
                        <th scope="col">Year</th>
                        <th scope="col">EDIT</th>
                        <th scope="col">CLEAR</th>
                    </tr>
                </thead>

                <tbody>

                    {compounds && compounds.map((compound) => {
                        return (
                        <tr key={compound.id}>
                            <td>{compound.id}</td>
                            <td>{compound.compound_name}</td>
                            <td>{compound.endpoint_value}</td>
                            <td>{compound.endpoint_name}</td>
                            <td>{compound.assay_name}</td>
                            <td>{compound.species_strain}</td>
                            <td>{compound.cas_number}</td>
                            <td>{compound.fmla}</td>
                            <td>{compound.molecular_weight}</td>
                            <td>{compound.authors}</td>
                            <td>{compound.title}</td>
                            <td>{compound.volume_number}</td>
                            <td>{compound.start_page}</td>
                            <td>{compound.year}</td>
                            <td><button onClick={ () => handleUpdate(compound.id)} className="btn btn-warning">EDIT</button></td>
                            <td><button onClick={ () => handleDelete(compound.id)} className="btn btn-danger">DELETE</button></td>
                        </tr>
                        );
                    })}

                   {/* <tr>
                        <td>6128</td>
                        <td>Methylstyrol</td>
                        <td>-4.52</td>
                        <td>Human</td>
                        <td>118.18</td>
                        <td>J.Health</td>
                        <td>46</td>
                        <td>282</td>
                        <td>2000</td>
                        <td><button className="btn btn-warning">EDIT</button></td>
                        <td><button className="btn btn-danger">DELETE</button></td>
                    </tr> */ }
                </tbody>

            </table>
            
        </div>
    )
}

export default CompoundList
