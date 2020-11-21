import React from 'react';
import s from './CustomField.module.scss';
import { loadImage, apiFileSrc } from '../../utils/userFunctions';




export const File = ({ name, setFile, fileID, ...props }) => {
    const filePickerID = fileID ? fileID : 'preview-img-holder';
    const setPreviewImage = (file) => {
        loadImage(file, name, filePickerID, setFile)
    }

    const uploadFileRef = React.createRef()

    return (
        <div className={s.filePicker}>
            <input
                ref={uploadFileRef}
                type="file"
                onChange={
                    (e) => {
                        e.preventDefault();
                        const files = [...e.target.files];
                        setPreviewImage(files[0])
                    }
                }
            />
            <div
                onClick={() => { uploadFileRef.current.click() }}
                className={s.imageHolder}
                style={props.style}
            >
                <img
                    src={apiFileSrc(props.value)}
                    id={filePickerID}
                    alt="preview-img"
                />
            </div>
        </div>
    )
}