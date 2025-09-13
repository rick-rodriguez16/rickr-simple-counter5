import SecondsCounter from "./SecondsCounter";
import calculateSeconds from "../../lib/time";


//create your first component
const Home = ({counter}) => {
	
	return (
		<>
			<div className="text-center">
				<SecondsCounter 
					thousandsDigit = {calculateSeconds(counter, 1000)}
					hundredsDigit = {calculateSeconds(counter, 100)}
					tensDigit = {calculateSeconds(counter, 10)}
					onesDigit = {calculateSeconds(counter, 1)}
				/>
			</div>
		</>
	);
};

export default Home;