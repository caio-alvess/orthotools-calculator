import {InputFn, PacientCobType} from "../model";

const getDateOptions = () => {
	const allowedDates = ["10", "15", "20", "25", "30"];
	return allowedDates.map((el) => {
		return (
			<option key={el} value={el}>
				{el}
			</option>
		);
	});
};

const DateInput = ({pacientInfo}: Pick<InputFn, "pacientInfo">) => {
	return (
		<select
			className="form-select mb-3 text-center w-50 mx-auto"
			style={{maxHeight: "50px"}}
			onChange={(e) => {
				const value = e.target.value;
				pacientInfo((prev) => ({
					...prev,
					date: value as PacientCobType,
				}));
			}}
			name="date"
		>
			{getDateOptions()}
		</select>
	);
};

export default DateInput;
