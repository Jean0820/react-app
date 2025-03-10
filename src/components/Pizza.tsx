import { useState } from "react";
import Button from "./Button";

const Pizza = () => {
  const handleUpdate = () => {
    setListMenu({
      ...menuList,
      menu: [...menuList.menu, "Fast Pepperoni"],
    });
  };

  const pizzaShop = {
    name: "Pizza Express",
    address: "123 Main St",
    menu: ["Mozzarella", "Pepperoni", "Margherita"],
  };
  const [menuList, setListMenu] = useState(pizzaShop);

  return (
    <>
      {menuList.menu.map((item, index) => (
        <div className="text-2xl" key={index}>
          {item}
        </div>
      ))}
      <Button name="Update" onClick={handleUpdate} type="btn-primary" />
    </>
  );
};

export default Pizza;
