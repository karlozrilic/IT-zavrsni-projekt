import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./layouts/Home";
import Footer from './components/Footer';

function App() {
  	return (
		<>
			<Router>
				<Navigation />
				<Route path="/" exact={true} component={Home} />
				<Footer />
    		</Router>
		</>
  	);
}

export default App;
