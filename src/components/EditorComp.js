import React from "react";
import ReactMarkdown from "react-markdown";
import "antd/dist/antd.css";
import './EditorComp.css';
import { Link } from 'react-router-dom';
import { Layout, Menu, Collapse } from 'antd';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';

import { Editors } from './Editor';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Panel } = Collapse;

const markdown = `
## Lab1: Above Average
It is said that 90% of frosh expect to be above average in their class. You are to provide a reality check.
***
## Input
The first line of standard input contains an integer 1≤𝐶≤50, the number of test cases. 
𝐶 data sets follow. Each data set begins with an integer, 𝑁, the number of people in the class (1≤𝑁≤1000). 
𝑁 integers follow, separated by spaces or newlines, each giving the final grade (an integer between 0 and 100) of a student in the class.
## Output
For each case you are to output a line giving the percentage of students whose grade is above average, rounded to exactly 3 decimal places.
### Sample Input 1
5\n
5 50 50 70 80 100\n
7 100 95 90 80 70 60 50\n
3 70 90 80\n
3 70 90 81\n
9 100 99 98 97 96 95 94 93 91\n
### Sample Output 1
40.000%\n
57.143%\n
33.333%\n
66.667%\n
55.556%\n
`;

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
                            <Link to='/lab-list'>
                                <HomeOutlined />
                                LabSphere
                            </Link>
                        </div>
                        <Menu
                            onClick={this.handleClick}
                            theme="dark"
                            defaultSelectedKeys={['i1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Java">
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
                        <Header className="site-layout-background" style={{fontFamily:'Righteous', fontSize:30, padding: 0 }}>Java</Header>
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
                                        <p>40.000%</p>
                                        <p>57.143%</p>
                                        <p>33.333%</p>
                                        <p>66.667%</p>
                                        <p>55.556%</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}></Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default LabSelection;
