import * as cobs from "./discounts";
import {Pacient} from "../model";
import hasPromo from "../utils/hasPromo";

const pacientPropsToNumber = (rawPacient: Pacient) => ({
	...rawPacient,
	date: Number(rawPacient.date),
	promo: Number(rawPacient.promo),
	regular: Number(rawPacient.regular),
});

const getDiscount = (rawPacient: Pacient) => {
	const {date, promo, regular, type} = pacientPropsToNumber(rawPacient);
	const discount = cobs[type];

	//if is cob0, blacklist or is after the due date
	if (!hasPromo(type, date) || discount.promo == null) {
		const winWin = discount.regular.winWin({promo, regular});
		const winLoose = discount.regular.winLoose({promo, regular});
		const looseWin = discount.regular.looseWin({promo, regular});

		return {winWin, winLoose, looseWin};
	} else {
		const winWin = discount.promo.winWin({promo, regular});
		const winLoose = discount.promo.winLoose({promo, regular});
		const looseWin = discount.promo.looseWin({promo, regular});

		return {winWin, winLoose, looseWin};
	}
};

export default getDiscount;
