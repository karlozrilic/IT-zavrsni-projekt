import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from './components/Footer';
import Home from "./layouts/Home";

import VisaInfo from './layouts/VisaInfo';
import Familly from './layouts/Familly';
import WhereToLive from './layouts/WhereToLive';
import Contacts from './layouts/Contacts';
import CityAndSurroundings from './layouts/CityAndSurroundings';

import { links } from "./components/links";

const listOfComponents = [VisaInfo, Familly, WhereToLive, Contacts, CityAndSurroundings];

function App() {
  	return (
		<>
			<Router>
				<Navigation />
				<Route path="/" exact={true} component={Home} />
				{links.map((element, key) => 
					<>
						<Route path={element.path} exact={true} component={listOfComponents[key]} />
					</>
				)}
				<Footer />
    		</Router>
		</>
  	);
}

export default App;
