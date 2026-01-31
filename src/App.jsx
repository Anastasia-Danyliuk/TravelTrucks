import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./Loader/Loader.jsx";
import HeaderPart from "./components/main/headerpart/HeaderPart.jsx";


const Home = lazy(() => import("./components/main/home/Home.jsx"));
const List = lazy(() => import("./components/plp/list/List.jsx"));
const Truck = lazy(() => import("./components/pdp/truck/Truck.jsx"));

function App() {
    return (
        <div>
        <HeaderPart/>
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<List />} />
                <Route path="/catalog/:id" element={<Truck />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Suspense>
        </div>
    );
}

export default App;