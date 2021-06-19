import React from 'react'
import '../../App.css'
import MarkdownEditor from './MarkdownEditor';
import UploadFiles from './UploadFiles';

function AdminEditor() {
    return (
        <div style = {{paddingTop:80}}>
            <h1>----------Lab Question----------</h1>
            <MarkdownEditor />
            <h1>----------Rule Set----------</h1>
            <h1>----------Upload----------</h1>
            <UploadFiles />
        </div>
    );
}

export default AdminEditor;