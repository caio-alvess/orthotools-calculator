import {DiscountTableUnraveled, DiscountUnraveled} from "../model";
import "../style.css";
import numberToCurrency from "../utils/numToCurrency";

function isLesserThanPromo(value: number, promo: string) {
	return value < Number(promo);
}

function DiscountTr(
	{
		promo,
	}: {
		promo: string;
		regular: string;
	},
	message: DiscountUnraveled,
	messageType: "winWin" | "winLoose" | "looseWin"
) {
	const bsClasses = {
		winWin: {
			title: "Ganha / Ganha",
			class: "text-success",
		},
		winLoose: {
			title: "Ganha / Perde",
			class: "text-warning",
		},
		looseWin: {
			title: "Perde / Ganha",
			class: "text-danger",
		},
	};
	const text = bsClasses[messageType];
	const {value} = message.rawValue;

	return (
		<tr>
			<td className={text.class}>{text.title}</td>
			<td className={text.class}>
				<h2 className="d-flex gap-2 align-items-center fs-6 text-start">
					{message.title}
					{isLesserThanPromo(value, promo) ? (
						<span className="danger-card">valor ajustado</span>
					) : (
						""
					)}
				</h2>
				<p className="text-start ms-3 fs-4 opan">
					{isLesserThanPromo(value, promo) ? (
						<>
							{numberToCurrency(Number(promo) + 20)}
							<span className="wrong-discount">
								{" "}
								{message.description} é menor que o promocional
							</span>
						</>
					) : (
						message.description
					)}

					{message.secundaryDescription != "undefined"
						? " ou " + message.secundaryDescription
						: ""}
				</p>
			</td>
		</tr>
	);
}

interface DsTableWithRawValues extends DiscountTableUnraveled {
	rawValues: {
		promo: string;
		regular: string;
	};
}

function DiscountTable({
	rawValues,
	winWinMsg,
	winLooseMsg,
	looseWinMsg,
}: DsTableWithRawValues) {
	return (
		<div className="row mt-4 w-75 mx-auto px-3">
			<div className="col-md-12">
				<div className="table-wrapper">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th scope="col" style={{width: "20%"}}>
									Tipo
								</th>
								<th scope="col">Desconto</th>
							</tr>
						</thead>
						<tbody>
							{DiscountTr(rawValues, winWinMsg, "winWin")}
							{DiscountTr(rawValues, winLooseMsg, "winLoose")}
							{DiscountTr(rawValues, looseWinMsg, "looseWin")}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default DiscountTable;
