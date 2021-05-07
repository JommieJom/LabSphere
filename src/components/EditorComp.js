import React from 'react';
import LabQuestion from './LabQuestion';
//import ReactMarkdown from "react-markdown";
//import "antd/dist/antd.css";
import { Collapse } from 'antd';

import { Editors } from './Editor';

const { Panel } = Collapse;

function EditorComp() {

    return (
        <div className="App">
            <h1>AOOPLab7</h1>
            <Collapse defaultActiveKey={['Markdown', 'Code']}>
                <Panel header="Markdown" key="Markdown" style={{ textAlign: "left" }}>
                    <LabQuestion />
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
    )
}

export default EditorComp;
