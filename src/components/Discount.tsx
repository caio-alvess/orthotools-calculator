import getDiscount from "../services/getDiscount";
import {Pacient} from "../model";
import DiscountTable from "./DiscountTable";
import createDiscountMessage from "../services/createMessage";

const Discount = ({pacientInfo}: {pacientInfo: Pacient}) => {
	const discount = getDiscount(pacientInfo);
	const discountMessage = createDiscountMessage(discount);
	return (
		<DiscountTable
			rawValues={pacientInfo}
			winWinMsg={discountMessage.winWinMsg}
			winLooseMsg={discountMessage.winLooseMsg}
			looseWinMsg={discountMessage.looseWin}
		/>
	);
};
export default Discount;
