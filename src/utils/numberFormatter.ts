export default function numberFormatter(numberValue: string) {
	let value = numberValue;
	value = value.replace(/[^\d,]/g, "");

	const hasPrematureComma = value[value.length - 1] == "," && value.length <= 3;
	const hasDoubleComma = value.replace(/[^,]/g, "").length >= 2;

	if (hasPrematureComma || hasDoubleComma) {
		return value.slice(0, value.length - 1);
	}

	if (value.length > 3) {
		let commaOrNull = value.indexOf(",") === -1 ? "," : "";
		value = value.substring(0, 3) + commaOrNull + value.substring(3);
	}
	let parts = value.split(",");
	if (parts[0].length > 3) {
		parts[0] = parts[0].slice(0, 3);
	}
	if (parts.length > 1 && parts[1].length > 2) {
		parts[1] = parts[1].slice(0, 2);
	}
	return parts.join(",");
}
