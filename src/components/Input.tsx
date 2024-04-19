import {useState} from "react";
import {InputFn} from "../model";

const inputText = {
	promo: {
		label: "Valor promocional",
		placeholder: "Ex.: R$119,90",
	},
	regular: {
		label: "Valor integral",
		placeholder: "Ex.: R$169,90",
	},
	date: {
		label: "Data do vencimento",
		placeholder: "Ex.: 10",
	},
};

const Input: React.FC<InputFn> = ({type, pacientInfo}) => {
	const [inputValue, setInput] = useState("");

	if (!type) {
		return false;
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInput(value);
		pacientInfo((prev) => ({...prev, [type]: value}));
	};

	return (
		<>
			<label
				className="d-block text-center form-label text-center"
				htmlFor={type}
			>
				{inputText[type].label}
			</label>
			<input
				className="form-control d-block mx-auto"
				id={type}
				type="number"
				placeholder={inputText[type].placeholder}
				onChange={handleChange}
				value={inputValue}
			/>
		</>
	);
};

export default Input;
