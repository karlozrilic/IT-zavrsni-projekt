import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./layouts/Home";

function App() {
  	return (
		<>
			<Router>
				<Navigation />
				<Route path="/" exact={true} component={Home} />
    		</Router>
		</>
  	);
}

export default App;
