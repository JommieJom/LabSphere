import React from 'react'
import '../../App.css'
import './AdminEditor.css'
import MarkdownEditor from './MarkdownEditor';
import UploadFiles from './UploadFiles';
import RuleSet from './RuleSet';
import SubmissionResult from './SubmissionResult';

function AdminEditor() {
    return (
        <div className="AdminEditor">
            <h1>Lab Question</h1>
            <MarkdownEditor />
            <h1>Upload Rule Set</h1>
            <UploadFiles />
            <SubmissionResult />
        </div>
    );
}

export default AdminEditor;