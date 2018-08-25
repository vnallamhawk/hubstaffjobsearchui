import React,{Component} from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';


export default class Drpdown extends Component {
        constructor(props){
            super(props)
        }
        handleMenuClick=()=>{

        }

      render(){
        
    const menu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
          <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
          <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
        </Menu>
      );
    return (
        <Dropdown overlay={menu}>
            <Button style={{ marginLeft: 8 }}>
                Button <Icon type="down" />
            </Button>
        </Dropdown>
    )
}

}
