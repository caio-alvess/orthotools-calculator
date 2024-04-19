import getDiscount from "../services/getDiscount";
import {Pacient} from "../model";
import createDiscountMessage from "../utils/discountMessage";
import DiscountTable from "./DiscountTable";

const Discount = ({pacientInfo}: {pacientInfo: Pacient}) => {
	const discount = getDiscount(pacientInfo);
	const discountMessage = createDiscountMessage(discount);
	return (
		<DiscountTable
			winWinMsg={discountMessage.winWinMsg}
			winLooseMsg={discountMessage.winLooseMsg}
			looseWinMsg={discountMessage.looseWin}
		/>
	);
};
export default Discount;
