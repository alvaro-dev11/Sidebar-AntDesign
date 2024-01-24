import React from "react";
// Importando Componente Button de AntDesign
import { Button } from "antd";
// Importando iconos de AntDesign
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ToggleThemeButton = ({ darktheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
      <Button onClick={toggleTheme}>
        {darktheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
