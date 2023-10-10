import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Games, Landing } from "../pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Landing />} path="/" />
                <Route element={<Games />} path="/games" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
