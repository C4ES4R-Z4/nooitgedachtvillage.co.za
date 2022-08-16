import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import DevelopmentPage from "./DevelopmentPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route
                    path={"/village-close"}
                    element={
                        <DevelopmentPage
                            name="Village Close"
                            prefix="village"
                        />
                    }
                />
                <Route
                    path={"/simonsberg-manor"}
                    element={
                        <DevelopmentPage
                            name="Simonsberg Manor"
                            prefix="simonsberg"
                        />
                    }
                />
                <Route
                    path={"/terraces"}
                    element={
                        <DevelopmentPage
                            name="The Terraces"
                            prefix="terraces"
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
