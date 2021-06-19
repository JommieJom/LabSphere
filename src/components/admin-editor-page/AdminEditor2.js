import React from 'react'
import '../../App.css'
import MarkdownEditor2 from './MarkdownEditor2';
import UploadFiles from './UploadFiles';

function AdminEditor2() {
    return (
        <div>
            <MarkdownEditor2 />
            <UploadFiles />
        </div>   
    );
}

export default AdminEditor2;