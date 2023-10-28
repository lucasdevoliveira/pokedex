import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../components/templates/default-layout";
import Home from "../pages/home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Routers