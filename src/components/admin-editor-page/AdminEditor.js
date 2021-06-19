import React from 'react'
import '../../App.css'
import MarkdownEditor from './MarkdownEditor';
import UploadFiles from './UploadFiles';

function AdminEditor() {
    return (
        <div>
            <MarkdownEditor />
            <UploadFiles />
        </div>
    );
}

export default AdminEditor;