import {useState} from "react";
import {InputFn} from "../model";
import DateInput from "./DateInput";

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

			{type === "date" ? (
				<DateInput key={"di2"} pacientInfo={pacientInfo} />
			) : (
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text">R$</span>
					</div>

					<input
						className="form-control"
						id={type}
						type="number"
						placeholder={inputText[type].placeholder}
						onChange={handleChange}
						value={inputValue}
					/>
				</div>
			)}
		</>
	);
};

export default Input;
