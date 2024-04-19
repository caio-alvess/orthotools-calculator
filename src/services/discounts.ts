import {DiscountObject} from "../model";

interface Discount {
	promo: DiscountObject | null;
	regular: DiscountObject;
}

const cob0: Discount = {
	promo: null,
	regular: {
		winWin: ({promo}) => {
			return {
				value: promo * 2,
				text: "Promocional com antecipação",
			};
		},
		winLoose: ({regular}) => ({
			value: regular - regular * 0.2,
			text: "Desconto de até 20%",
		}),
		looseWin: ({promo}) => ({
			value: promo + 20,
			text: "Promocional + R$20",
		}),
	},
};

const cob30: Discount = {
	promo: {
		winWin: ({promo}) => ({
			value: promo * 2,
			text: "2 Promocionais",
		}),
		winLoose: ({regular, promo}) => ({
			value: regular - regular * 0.15 + promo,
			text: "Desconto de 15% na vencida + 1 promocional",
		}),
		looseWin: ({regular, promo}) => ({
			value: regular - regular * 0.5 + promo,
			text: "50% desconto na vencida + 1 promocional",
		}),
	},
	regular: {
		winWin: ({regular, promo}) => ({
			value: promo + regular,
			text: "1 Promocional + 1 integral",
		}),
		winLoose: ({regular}) => ({
			value: regular - regular * 0.15 + regular,
			text: "Desconto de 15% na vencida + 1 integral",
		}),
		looseWin: ({promo}) => ({
			value: promo * 2,
			text: "2 promocionais",
		}),
	},
};

const cob60: Discount = {
	promo: {
		winWin: ({regular, promo}) => ({
			value: regular + promo,
			text: "1 integral + 1 promocional",
		}),
		winLoose: ({regular}) => ({
			value: regular * 2,
			text: "2 integrais",
		}),
		looseWin: ({regular}) => ({
			value: regular,
			text: "1 integral",
		}),
	},
	regular: {
		winWin: ({regular}) => ({
			value: regular * 2,
			text: "2 integrais",
		}),
		winLoose: () => ({
			value: 350,
			text: "Cobrar R$350,00",
		}),
		looseWin: () => ({
			value: 200,
			text: "Cobrar R$200,00",
		}),
	},
};

const cob90: Discount = {
	promo: {
		winWin: ({regular, promo}) => ({
			value: regular * 2 + promo,
			text: "2 integrais + 1 promocional",
		}),
		winLoose: ({promo}) => ({
			value: promo * 3,
			text: "3 promocionais",
		}),
		looseWin: ({regular}) => ({
			value: regular,
			text: "1 integral",
		}),
	},
	regular: {
		winWin: () => ({
			value: 350,
			text: "Cobrar R$350,00",
		}),
		winLoose: ({regular, promo}) => ({
			value: promo * 4,
			secundaryValue: regular * 3,
			text: "4 promocionais ou 3 integrais",
		}),
		looseWin: () => ({
			value: 200,
			text: "Cobrar R$200,00",
		}),
	},
};

const blacklist: Discount = {
	promo: null,
	regular: {
		winWin: () => ({value: 350, text: "Cobrar R$350,00"}),
		winLoose: () => ({value: 500, text: "Cobrar R$500,00"}),
		looseWin: () => ({
			value: 200,
			secundaryValue: 169.9,
			text: "R$200,00 ou R$169,90",
		}),
	},
};

export {cob0, cob30, cob60, cob90, blacklist};
