import {DiscountReturn, DiscountsOptions, DiscountUnraveled} from "../model";
import numberToCurrency from "../utils/numToCurrency";

const unravelDiscount = (discount: DiscountReturn<number>) => {
	const {text, value, secundaryValue} = discount;
	const unraveledDiscount: DiscountUnraveled = {
		title: text,
		description: `${numberToCurrency(value)}`,
		secundaryDescription: `${
			secundaryValue && numberToCurrency(secundaryValue)
		}`,
		rawValue: {value: value, secundaryValue: secundaryValue || null},
	};
	return unraveledDiscount;
};

const createDiscountMessage = (pacientDiscounts: DiscountsOptions) => {
	const {winWin, winLoose, looseWin} = pacientDiscounts;
	return {
		winWinMsg: unravelDiscount(winWin),
		winLooseMsg: unravelDiscount(winLoose),
		looseWin: unravelDiscount(looseWin),
	};
};

export default createDiscountMessage;
