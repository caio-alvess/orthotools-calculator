import React from "react";
interface MyComponentProps {
	children: React.ReactNode;
}

const Form: React.FC<MyComponentProps> = ({children}) => {
	if (React.Children.count(children) < 3) {
		return <div>Faltam childrens</div>;
	}
	const firstChildren = React.Children.toArray(children)[0];
	const secondChildren = React.Children.toArray(children)[1];
	const thirdChildren = React.Children.toArray(children)[2];
	return (
		<div className="inputForm input-group d-flex flex-nowrap w-75 mx-auto">
			<div className="mb-3 flex-1">{firstChildren}</div>
			<div className="mb-3 flex-1">{secondChildren}</div>
			<div className="mb-3 flex-1">{thirdChildren}</div>
		</div>
	);
};

export default Form;
