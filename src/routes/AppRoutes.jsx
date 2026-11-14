import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Home from "../pages/home";
import MediaDetails from "../pages/MediaDetails";
import PersonProfile from "../pages/PersonProfile";
import Movies from "../pages/Movies";
import Tvs from "../pages/Tvs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mediaDetails/:mediaType/:id" element={<MediaDetails />} />
        <Route path="/person/:id" element={<PersonProfile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvs" element={<Tvs />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
