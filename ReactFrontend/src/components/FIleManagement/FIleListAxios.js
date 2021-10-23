import React, { Component } from 'react';
import axios from 'axios';
import { Card, Table } from "react-bootstrap";
import '../FIleManagement/FileListAxios.css';


export default class FileListAxios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [],
            file: null
        }
    }

    componentDidMount() {
        this.getAllFiles();

    }

    componentDidUpdate() {
      this.getAllFiles();
    }

    uploadFile(e) {
        //console.log(this.state, "the state-------$$$")
        let urlAPI = 'http://localhost:8081/uploadFile';

        let file = this.state.file;
        const filedata = new FormData();
        filedata.append('file', file)

        axios({
            method: 'post',
            url: urlAPI,
            data: filedata,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                
                //console.log(response);
            },
                function (error) {
                    // handle error 
                });
                console.log("llego al render");
    }

    handleFile(e) {
        // console.log(event.target.files, '$$$$' )
        //console.log(event.target.files[0], '$$$$' )
        let file = e.target.files[0];
        this.setState({ file: file });
    }

    getAllFiles() {
        axios.get("http://localhost:8081/files")
            .then(response => response.data)
            .then((data) => {
                this.setState({ files: data })
            })
    }

    getDownloadurl(fileId, fileName) {

        const method = 'GET';
        const url = "http://localhost:8081/downloadFile/" + fileId;
        axios
            .request({
                url,
                method,
                responseType: 'blob', //important

            })
            .then(({ data }) => {
                const downloadUrl = window.URL.createObjectURL(new Blob([data]));
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.setAttribute('download', fileName + '.zip'); //any other extension
                document.body.appendChild(link);
                link.click();
                link.remove();
            });

    }
    /*{"border border-dark bg-dark text-white"}*/
    render() {
        return (
            <div>

                <Card className="table_container"   >
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead className='table-head-container'>
                                <tr className="table-head">
                                    <th className="th-name">Name</th>
                                    <th className="th-size">Size</th>
                                    <th className="th-download">Download</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {this.state.files.length === 0 ?
                                    <tr align='center'>
                                        <td colSpan='3'>Files Availables.</td>
                                    </tr> :
                                    this.state.files.map((file) => (
                                        <tr className="tr-table-data" key={file.id}>
                                            <td className="td-name">{file.fileName}</td>
                                            <td className="td-size">{file.size} bytes</td>
                                            <td className="td-download"><button className="download-button" type="button" onClick={() => this.getDownloadurl(file.id, file.fileName)}>Download</button></td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                <section className="file-buttons-container">
                    <input className="file-button-upload-input" type="file" placeholder="file upload" onChange={(e) => this.handleFile(e)} />
                    <button className="file-button-upload" type="button" onClick={(e) => this.uploadFile(e)}>Upload</button>
                </section>

            </div>

        )
    }
}
