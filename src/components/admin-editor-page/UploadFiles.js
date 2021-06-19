import { Upload, message } from "antd";
import "antd/dist/antd.css";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

function UploadFiles() {
    //for click button
    function handleClick() {
        console.log("Click happened");
    }
    //for uploading files
    const Dragger_props = {
        name: "file",
        multiple: true,
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        beforeUpload: file => {
            if (file.type !== 'application/json') {
              message.error(`${file.name} is not a json file`);
            }
            return file.type === 'application/json' ? true : Upload.LIST_IGNORE;
        },
        onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
        },
    };
    return(
        <div>
            <Dragger {...Dragger_props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                    Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                </p>
            </Dragger>
        <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export default UploadFiles;