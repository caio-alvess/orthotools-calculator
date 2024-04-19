import {useState} from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Form from "./patterns/Form";
import Discount from "./components/Discount";
import {Pacient} from "./model";

function App() {
	const [pacientObj, setPacientInfo] = useState<Pacient>({
		promo: "",
		regular: "",
		date: "",
		type: "cob0",
	});

	return (
		<div className="container px-5 my-5 form-container">
			<Select pacientInfo={setPacientInfo} />
			<Form>
				<Input type="date" pacientInfo={setPacientInfo} />
				<Input type="regular" pacientInfo={setPacientInfo} />
				<Input type="promo" pacientInfo={setPacientInfo} />
			</Form>
			<Discount pacientInfo={pacientObj} />
			<small className="d-block text-center" style={{opacity: 0.8}}>
				ferramenta criada por Caio Alves
			</small>
		</div>
	);
}

export default App;
