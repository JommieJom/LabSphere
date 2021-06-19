import React from 'react'
import '../../App.css'
import './AdminEditor.css'
import MarkdownEditor from './MarkdownEditor';
import UploadFiles from './UploadFiles';
import RuleSet from './RuleSet';

function AdminEditor() {
    return (
        <div className="AdminEditor">
            <h1>Lab Question</h1>
            <MarkdownEditor />
            <h1>Rule Set</h1>
            <RuleSet />
            <h1>Upload</h1>
            <UploadFiles />
        </div>
    );
}

export default AdminEditor;