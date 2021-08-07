import React, {useState, createContext} from 'react';




export const CompoundsContext = createContext();

export const CompoundsContextProvider = (props) => {

    const [compounds, setCompounds] = useState([]);

    const addCompounds = (compound) => {
        setCompounds([...compounds, compound]);
    };

    return (
        <CompoundsContext.Provider value={{compounds, setCompounds, addCompounds }}>
            {props.children}
        </CompoundsContext.Provider>
    );
};




