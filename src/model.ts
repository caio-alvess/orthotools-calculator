import React from "react";

type PacientCobType = "cob0" | "cob30" | "cob60" | "cob90" | "blacklist";

interface DiscountReturn<T> {
	value: T;
	text: string;
	secundaryValue?: T;
}

type fnDiscount = ({
	promo,
	regular,
}: {
	promo: number;
	regular: number;
}) => DiscountReturn<number>;

type DiscountObject = {
	winWin: fnDiscount;
	winLoose: fnDiscount;
	looseWin: fnDiscount;
};

interface Pacient {
	promo: string;
	regular: string;
	date: string;
	type: PacientCobType;
}

type InputFn = {
	type?: "promo" | "regular" | "date";
	pacientInfo: React.Dispatch<React.SetStateAction<Pacient>>;
	isWarning?: boolean;
	inputRef?: React.MutableRefObject<HTMLInputElement>;
};

interface DiscountsOptions {
	winWin: DiscountReturn<number>;
	winLoose: DiscountReturn<number>;
	looseWin: DiscountReturn<number>;
}

interface DiscountUnraveled {
	title: string;
	description: string;
	secundaryDescription: string;
	rawValue: {value: number; secundaryValue: number | null};
}

interface DiscountTableUnraveled {
	winWinMsg: DiscountUnraveled;
	winLooseMsg: DiscountUnraveled;
	looseWinMsg: DiscountUnraveled;
}

export type {
	Pacient,
	PacientCobType,
	DiscountReturn,
	DiscountObject,
	DiscountsOptions,
	DiscountUnraveled,
	DiscountTableUnraveled,
	InputFn,
};
