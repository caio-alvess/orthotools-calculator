import {PacientCobType} from "../model";
const hasPromo = (
	pacientType: PacientCobType,
	pacientDate: number | string
) => {
	const todayTimestamp = new Date().getDate();
	const pacientDateNumber =
		typeof pacientDate == "number" ? pacientDate : Number(pacientDate);
	return pacientType in ["cob0", "blacklist"] ||
		pacientDateNumber < todayTimestamp
		? false
		: true;
};

export default hasPromo;
