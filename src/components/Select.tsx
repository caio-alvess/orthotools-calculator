import {InputFn, PacientCobType} from "../model";

const Select = ({pacientInfo}: Pick<InputFn, "pacientInfo">) => {
	return (
		<div className="form mx-auto w-75">
			<label htmlFor="tipo" className="form-label">
				Tipo
			</label>
			<select
				className="form-select mb-3"
				id="tipo"
				aria-label="Tipo"
				onChange={(e) => {
					const value = e.target.value;
					pacientInfo((prev) => ({
						...prev,
						type: value as PacientCobType,
					}));
				}}
			>
				<option value="cob0">COB0</option>
				<option value="cob30">COB30</option>
				<option value="cob60">COB60</option>
				<option value="cob90">COB90</option>
				<option value="blacklist">Reinicio</option>
			</select>
		</div>
	);
};

export default Select;
