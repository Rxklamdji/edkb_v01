import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { CompoundsContextProvider } from './context/CompoundsContext';
import Home from './routes/Home';
import CompoundDetailPage from './routes/CompoundDetailPage';
import UpdatePage from './routes/UpdatePage';

const App = () => {

    return (

        <CompoundsContextProvider>

            <div className="container">
                <Router>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/compounds/:id/update" component={UpdatePage}/>
                    <Route exact path="/compounds/:id" component={CompoundDetailPage}/>
                    </Switch>
                </Router>
            </div>
            
        </CompoundsContextProvider>

    );
};



export default App;





