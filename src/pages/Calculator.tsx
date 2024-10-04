import {useEffect, useRef, useState} from "react";
import {Pacient} from "../model";
import Select from "../components/Select";
import Input from "../components/Input";
import Discount from "../components/Discount";
import AmountTable from "../components/Amount";
import Form from "../patterns/Form";

function Calculator() {
	const [pacientObj, setPacientInfo] = useState<Pacient>({
		promo: "",
		regular: "",
		date: "10",
		type: "cob0",
	});

	const [isWarning, setWarning] = useState(false);

	useEffect(() => {
		if (pacientObj.promo.length && pacientObj.regular.length) {
			const promoValue = Number.parseFloat(pacientObj.promo);
			const regularValue = Number.parseFloat(pacientObj.regular);

			//set isWarning to true if promo > regular
			setWarning(
				!isNaN(promoValue) && !isNaN(regularValue) && promoValue > regularValue
			);
		}
	}, [pacientObj]);

	const inputRef = useRef(document.createElement("input"));

	return (
		<div className="container px-5 py-4 my-5 form-container">
			<Select pacientInfo={setPacientInfo} />
			<Form>
				<Input type="date" pacientInfo={setPacientInfo} />
				<Input
					type="regular"
					pacientInfo={setPacientInfo}
					inputRef={inputRef}
				/>
				<Input
					type="promo"
					pacientInfo={setPacientInfo}
					isWarning={isWarning}
					inputRef={inputRef}
				/>
			</Form>
			<AmountTable pacientInfo={pacientObj} />
			<Discount pacientInfo={pacientObj} />
			<small className="d-block text-center" style={{opacity: 0.7}}>
				ferramenta criada por{" "}
				<a href="https://wa.me/5521991785487" target="_blank">
					Caio Alves
				</a>
			</small>
		</div>
	);
}

export default Calculator;
