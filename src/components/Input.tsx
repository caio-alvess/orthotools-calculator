import {useState} from "react";
import {InputFn} from "../model";
import DateInput from "./DateInput";
import numberFormmater from "../utils/numberFormatter";

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

const Input: React.FC<InputFn> = ({type, pacientInfo, isWarning, inputRef}) => {
	if (!type) {
		return false;
	}

	const [inputValue, setInput] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = numberFormmater(e.target.value);
		const valueWithDot = value.replace(",", ".");
		setInput(value);

		if (type === "regular" && value.length >= 6) {
			inputRef?.current.focus();
			inputRef?.current.select();
		}
		pacientInfo((prev) => ({...prev, [type]: valueWithDot}));
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
						type="text"
						placeholder={inputText[type].placeholder}
						onChange={handleChange}
						ref={type === "promo" ? inputRef : null}
						value={inputValue}
					/>
				</div>
			)}
			{isWarning ? (
				<p className="discount-warning">Valor maior que o integral</p>
			) : (
				""
			)}
		</>
	);
};

export default Input;
