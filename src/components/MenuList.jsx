// Importando Componente Menu de AntDesign
import { Menu } from "antd";
// Importando iconos de AntDesign
import { HomeOutlined, BarsOutlined } from "@ant-design/icons";

const MenuList = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
      <Menu.Item key={"home"} icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key={"dashboard"} icon={<HomeOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key={"traking"} icon={<HomeOutlined />}>
        Traking
      </Menu.Item>
      <Menu.Item key={"traking-2"} icon={<HomeOutlined />}>
        Traking
      </Menu.Item>
      <Menu.SubMenu key={"tasks"} icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key={"task-1"}>Task 1</Menu.Item>
        <Menu.Item key={"task-2"}>Task 2</Menu.Item>
        <Menu.SubMenu key={'subtasks'} title="Subtasks">
            <Menu.Item key={'subtasks-1'}>
                Subtask 1
            </Menu.Item>
            <Menu.Item key={'subtasks-2'}>
                Subtask 2
            </Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  );
};

export default MenuList;
