// import { Pacient } from "../model";
import {DiscountReturn, DiscountsOptions, DiscountUnraveled} from "../model";

const unravelDiscount = (discount: DiscountReturn<number>) => {
	const {text, value, secundaryValue} = discount;
	const unraveledDiscount: DiscountUnraveled = {
		title: text,
		description: `${value.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		})}`,
		secundaryDescription: `${secundaryValue?.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		})}`,
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
