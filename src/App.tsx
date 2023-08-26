import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import Test1 from "./containers/Test1/Test1";
import Test2 from "./containers/Test2/Test2";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/1" element={<Test1 />} />
					<Route path="/2" element={<Test2 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
