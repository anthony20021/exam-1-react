import React, { useState } from 'react';
import AddCar from './compoment/addCar';
import HomePage from './compoment/Homepage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
    const [appData, setAppData] = useState([]);

    const updateAppData = (newData) => {
        setAppData((prevAppData) => {
            return [...prevAppData, newData];
        });
    };

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>

                    <div className="" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Ajouter une voiture</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/add" element={<AddCar updateAppData={updateAppData} />} />
                <Route path="/" element={<HomePage data={appData} />} />
            </Routes>
        </Router>
    );
};

export default App;
