import React from "react";
import ReactMarkdown from "react-markdown";
import "antd/dist/antd.css";
import './EditorComp.css';
import { Layout, Menu, Collapse } from 'antd';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';

import { Editors } from './Editor';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Panel } = Collapse;

const markdown = `
This lab is to create a list of catalog items and sort it. The item may be a 'Book' or a 'CD'. Both 'Book' and 'CD' will therefore be classes implementing an interface called 'Media'. Since the catalog item can be a 'Book' or a 'CD', we will make a generic class called 'CatalogItem' which can take one of these two types.
The details are as follows:
-	Each Book and a CD has its own unique ID. The difference between the CD class and the Book class will be in the data types for the ID, since a CD usually has an integer code as its ID and a book uses an alphanumeric string code (ISBN). These ID's will be the basis of the sorting which this lab aims to accomplish.
- As CatalogItem is a generic class with a single parameter, and we can create a CatalogITem of type book or a CD.
- A catalog will be represented as an ArrayList of CatalogItems.
- CatalogItem will be Comparable itself, as we wish to call 'sort' on a list of CatalogItems, which in turn calls the compareTo() method to do the sorting.
***
## Question 1
Create Media.java: An interface with four methods that every class considered to be some form of media should be able to define.  
public <T> Comparable<T> getId(): Returns a generic type Id which will be an Integer or a String based on whether a Book implements Media or a CD.  
getCreator(): Returns a String and has no arguments. Its return value should be the name of the person responsible for creating this Media.  
getTitle(): Returns a String and has no arguments. Its return value should be the title of this Media.  
getYear(): Returns an int and has no arguments. Its return value should be the year that this Media was created.
***`;

class LabSelection extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        const { collapsed } = this.state;
        return (
            <div className="App">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="iconhome">
                            <HomeOutlined />
                            LabSphere
                        </div>
                        <Menu
                            onClick={this.handleClick}
                            theme="dark"
                            defaultSelectedKeys={['i1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Python">
                                <Menu.ItemGroup key="g1" title="Lab 1">
                                    <Menu.Item key="i1">Question 1</Menu.Item>
                                    <Menu.Item key="i2">Question 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="Lab 2">
                                    <Menu.Item key="i3">Question 3</Menu.Item>
                                    <Menu.Item key="i4">Question 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{fontFamily:'Righteous', fontSize:30, padding: 0 }}>Python</Header>
                        <Content style={{ margin: '0 16px' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Collapse defaultActiveKey={['Markdown', 'Code']}>
                                    <Panel header="Markdown" key="Markdown" style={{ textAlign: "left" }}>
                                        <ReactMarkdown children={markdown} />
                                    </Panel>

                                    <Panel header="Code" key="Code">
                                        <h1>Code</h1>
                                        <Editors />
                                    </Panel>

                                    <Panel header="Result" key="Result">
                                        <p>lorem</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default LabSelection;
