import React, { useState } from "react";
// Importando componentes de AntDesign
import { Button, Layout, theme } from "antd";
// Importando iconos de AntDesign
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";

const App = () => {
  // Usando Header y Sider del componente Layout
  const { Header, Sider } = Layout;
  // Creando estados
  /**
   * darkTheme: para controlar el modo oscuro
   * collapsed: para controlar el colapso del sidebar
   */
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  // Funcion para esconder y mostrar el sidebar
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar">
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darktheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>
      </Layout>
    </Layout>
  );
};

export default App;
