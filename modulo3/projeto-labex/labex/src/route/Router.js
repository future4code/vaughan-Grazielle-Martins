import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage"
import ListTripsPage from "../pages/viagens/ListTripsPage"
import ApplicationFormPage from "../pages/inscrever/ApplicationFormPage"
import LoginPage from "../pages/login/LoginPage"
import AdminHomePage from "../pages/pageadmin/AdminHomePage"
import CreateTripPage from "../pages/criar/CreateTripPage"
import TripDetailsPage from "../pages/detalhes/TripDetailsPage"


export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/trips/list" element={<ListTripsPage/>} />
                <Route exact  path="/trips/application" element={<ApplicationFormPage/>}/>
                <Route exact  path="/login" element={<LoginPage/>} />
                <Route exact path="/admin/trips/list" element={ <AdminHomePage/>} />
                <Route exact path="/admin/trips/create" element={ <CreateTripPage/>}  />
                <Route exact  path="/admin/trips/:id" element={<TripDetailsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}