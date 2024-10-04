import formatDateString from "./formatDateString";

export default function dateToObject(
	date: string | number,
	toNumber: boolean = true
) {
	if (typeof date == "number") {
		//useful for google sheets
		const refDay = 25569;
		const currentDate = new Date(
			(date - refDay) * 24 * 60 * 60 * 1000 + 10800000
		);
		const day = currentDate.getDate();
		const month = currentDate.getMonth() + 1;
		const year = currentDate.getFullYear();

		return {day, month, year};
	}
	return formatDateString(date, {asNumber: toNumber});
}
