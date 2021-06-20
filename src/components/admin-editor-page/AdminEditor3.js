import React from 'react'
import '../../App.css'
import './AdminEditor.css'
import MarkdownEditor3 from './MarkdownEditor3';
import UploadFiles from './UploadFiles';
import RuleSet from './RuleSet2';

function AdminEditor3() {
    return (
        <div className="AdminEditor">
            <h1>Lab Question</h1>
            <MarkdownEditor3 />
            <h1>Upload Rule Set</h1>
            <UploadFiles />
        </div>   
    );
}

export default AdminEditor3;