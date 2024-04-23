import {Pacient} from "../model";
import hasPromo from "../utils/hasPromo";

const cobsIndex = {
	cob0: 1,
	cob30: 2,
	cob60: 3,
	cob90: 4,
	blacklist: 5,
};

function generateParcels(pacient: Pacient) {
	const regular = Number(pacient.regular);
	const promo = Number(pacient.promo);

	const parcels = [];
	const parcelsIndexes = cobsIndex[pacient.type];
	const hasOpenParcels =
		hasPromo(pacient.type, pacient.date) &&
		!["cob0", "blacklist"].includes(pacient.type);

	const total = hasOpenParcels
		? Number(pacient.regular) * (parcelsIndexes - 1) + Number(pacient.promo)
		: Number(pacient.regular) * parcelsIndexes;

	for (let i = 0; i < parcelsIndexes; i++) {
		parcels.push(
			<tr key={`${i}`}>
				<td className="amount__td">
					<span className="amount__status amount__status-expired">Vencida</span>
				</td>
				<td className="amount__td">{i + 1}</td>
				<td className="amount__td">Mensalidade</td>
				<td className="amount__td">
					{regular.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</td>
			</tr>
		);
	}
	if (hasOpenParcels) {
		parcels[parcelsIndexes - 1] = (
			<tr key={`${parcelsIndexes + 4}`}>
				<td className="amount__td">
					<span className="amount__status amount__status-open">Em aberto</span>
				</td>
				<td className="amount__td">{parcelsIndexes}</td>
				<td className="amount__td">Mensalidade</td>
				<td className="amount__td">
					{promo.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</td>
			</tr>
		);
	}

	parcels[parcels.length] = (
		<tr key={parcels.length + 1}>
			<td></td>
			<td></td>
			<td></td>
			<td className="amount__total">
				{total.toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</td>
		</tr>
	);
	return parcels;
}

const AmountTable = ({pacientInfo}: {pacientInfo: Pacient}) => {
	return (
		<div style={{overflowX: "auto"}}>
			<table className="amount tg mx-auto" style={{tableLayout: "fixed"}}>
				<colgroup>
					<col />
					<col />
					<col />
					<col />
				</colgroup>
				<thead>
					<tr className="text-center">
						<th className="tg-7btt">Status</th>
						<th className="tg-7btt">Nº</th>
						<th className="tg-7btt">Tipo</th>
						<th className="tg-7btt">Parcela</th>
					</tr>
				</thead>
				<tbody>{generateParcels(pacientInfo)}</tbody>
			</table>
		</div>
	);
};

export default AmountTable;
