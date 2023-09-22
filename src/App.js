//imports goes here
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/searhbar';


const { Routes } = require("react-router-dom");


function App() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (searchTerm) => {
        const filftered = data.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    }

    return (
        <div className="App">
            <div className="SearchBar">
                <SearchBar handleSearch={handleSearch} />
                <ul>
                    {filteredData.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <Router>
                <Routes>
                    <Route path= />
                    <Route path= />
                    <Route path= />
                </Routes>
            </Router>
        </div>
    );
}

export default App;