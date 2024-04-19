import React from "react";
interface MyComponentProps {
  children: React.ReactNode;
}

const Form: React.FC<MyComponentProps> = ({ children }) => {
  if (React.Children.count(children) < 3) {
    return <div>Faltam childrens</div>;
  }
  const firstChildren = React.Children.toArray(children)[0];
  const secondChildren = React.Children.toArray(children)[1];
  const thirdChildren = React.Children.toArray(children)[2];
  return (
    <div className="d-flex w-75 mx-auto">
      <div className="input-group gap-1 d-flex flex-nowrap justify-content-center">
        <div className="mb-3">{firstChildren}</div>
        <div className="mb-3">{secondChildren}</div>
        <div className="mb-3">{thirdChildren}</div>
      </div>
    </div>
  );
};

export default Form;
