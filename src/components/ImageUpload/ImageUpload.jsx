import React, { useState } from 'react';
import { File } from '../CustomFeld/CustomFile';
export const ImageUpload = () => {

    const [file, setFile] = useState(null);
    return (<>
        <File name={'photo'} setFile={setFile} fileID='0' />
    </>
    )
}
