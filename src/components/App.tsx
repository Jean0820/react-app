// import { useState } from "react";
// import Button from "../components/Button";
// import Alert from "./Alert";
// import Game from "./Game";
// import Pizza from "./Pizza";
// import ExpendableText from "./ExpendableText";
// import Tano from "./tanoFiles/Tano";

import Expenses from "./expenses/Expenses";


// import Form from "./Form";

const App = () => {
//   const [show, setShow] = useState(false);
//   const [charNum, setCharNum] = useState(100);

//   const handleSubmit = () => {
//     setShow(!show);
//   };

//   const handleExpand = () => {
//     setCharNum(10000);
//   };

  return (
    <main className="flex justify-center items-center flex-col px-20 py-10">
      {/* <Alert show={show} />
      <Button name="Submit" type="btn-primary" onClick={handleSubmit} /> */}
      {/* <Tano /> */}
      {/* <Game />
      <Pizza />
      <ExpendableText maxChar={charNum}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
        consectetur dolor, vitae condimentum eros fermentum et. Quisque auctor
        dignissim arcu, non aliquet erat consectetur non. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed posuere consectetur dolor, vitae
        condimentum eros fermentum et. Quisque auctor dignissim arcu, non
        aliquet erat consectetur non.
      </ExpendableText>
      <Button name="Expend" type="btn-primary" onClick={handleExpand} /> */}

      {/* <Form /> */}

      <Expenses />
    </main>
  );
};

export default App;
