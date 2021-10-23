
import React from 'react';
import '../../App.css';
import '../pages/Services.css';
import FileListAxios from '../FIleManagement/FIleListAxios';
//import DragDropzoneFile from '../FIleManagement/DragDropzoneFile';



export default function Services() {
    return (
        <div>
            <h1 className='services'>SERVICES</h1>
            <FileListAxios></FileListAxios>
        </div>
    )
}
