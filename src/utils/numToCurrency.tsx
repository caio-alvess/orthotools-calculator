const numberToCurrency = (value: number | undefined) => {
	if (!value) value = 0;
	return value.toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	});
};

export default numberToCurrency;
