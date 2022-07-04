import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlertPage from "../Components/AlertPage";
import Entities from "../Components/Entities";
import App from './../App';
import Main from './../Components/Main';
import Runbook from './../Components/Runbook';
import Analytics from './../Components/Analytics';
import Dashboard from './../Components/Dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<App />}></Route>
                <Route path='/home' element={<Dashboard />} ></Route>
                <Route path='/alerts' element={<AlertPage />}></Route>
                <Route path="/entities" element={<Entities />}></Route>
                <Route path="/runbook" element={<Runbook />}></Route>
                <Route path="/analytics" element={<Analytics />}></Route>
            </Routes>

        </BrowserRouter>
    );
}

export default Router;
