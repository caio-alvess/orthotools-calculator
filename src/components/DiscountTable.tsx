import {DiscountTableUnraveled, DiscountUnraveled} from "../model";

function DiscountTr(
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

	return (
		<tr>
			<td className={text.class}>{text.title}</td>
			<td className={text.class}>
				<h2 className="fs-6 text-start">{message.title}</h2>
				<p className="text-start ms-3 fs-4 opan">
					{message.description}{" "}
					{message.secundaryDescription != "undefined"
						? " ou " + message.secundaryDescription
						: ""}
				</p>
			</td>
		</tr>
	);
}

function DiscountTable({
	winWinMsg,
	winLooseMsg,
	looseWinMsg,
}: DiscountTableUnraveled) {
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
							{DiscountTr(winWinMsg, "winWin")}
							{DiscountTr(winLooseMsg, "winLoose")}
							{DiscountTr(looseWinMsg, "looseWin")}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default DiscountTable;
