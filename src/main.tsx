import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { options } from "./data";
import DevelopmentPage from "./DevelopmentPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<>
					<Route path={"/"} element={<Home />} />
					<Route path={"/Contact"} element={<Home />} />
					{options.map((value, key) => {
						return (
							<Route
								key={key}
								path={value.path}
								element={
									<DevelopmentPage
										name={value.name}
										desc={value.desc}
										brochure={value.brochure}
										images={value.images}
									/>
								}
							/>
						);
					})}
				</>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
