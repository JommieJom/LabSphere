import React from 'react'
import '../../App.css'
import './AdminEditor.css'
import MarkdownEditor2 from './MarkdownEditor2';
import UploadFiles from './UploadFiles';
import RuleSet from './RuleSet2';

function AdminEditor2() {
    return (
        <div className="AdminEditor">
            <h1>Lab Question</h1>
            <MarkdownEditor2 />
            <h1>Upload Rule Set</h1>
            <UploadFiles />
        </div>   
    );
}

export default AdminEditor2;