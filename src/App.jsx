import HeaderPart from "./components/main/headerpart/HeaderPart.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./components/main/home/Home.jsx";
import List from "./components/plp/list/List.jsx";
import Truck from "./components/pdp/truck/Truck.jsx";
import NotFoundPage from "./components/main/notfoundpage/NotFoundPage.jsx";

function App() {
    return (
        <>
            <HeaderPart />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<List />} />
                    <Route path="/catalog/:id" element={<Truck />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
