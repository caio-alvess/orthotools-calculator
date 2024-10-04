type DateStringConfig = {
	asNumber?: boolean;
	asSingleString?: {type: "standard" | "brazil"};
};
const formatDateString = (dateString: string, config: DateStringConfig) => {
	let [day, month, year]: string[] | number[] = dateString.trim().split("/");
	day = Number(day);
	month = Number(month);
	year = Number(year);

	if (config.asNumber) {
		return {day, month, year};
	}
	day = day < 10 ? `0${day}` : `${day}`;
	month = month < 10 ? `0${month}` : `${month}`;
	year = year < 10 ? `0${year}` : `${year}`;

	if (config.asSingleString?.type) {
		return config.asSingleString.type == "brazil"
			? `${day}/${month}/${year}`
			: `${month}/${day}/${year}`;
	}
	return {day, month, year};
};

export default formatDateString;
