import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';

class Files extends Component {
    constructor(props) {
        super(props);
        this.state ={
            file:null
        }
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    componentWillMount(){
        this.props.fetchFiles();
    }
    onChange(e){
        this.setState({file:e.target.files[0]});
    }

    fileUpload() {
        if (this.state.file) {
            this.props.uploadFile(this.state.file);
            this.props.fetchFiles();
            this.state = {
                file: null
            }
        }
    }
    handlePreviewButton(file) {
        return (
            <a className="pull-xs-right margin-right-10 btn btn-warning btn-sm" target="_blank" href={ file.url }>Preview</a>
        );
    }
    handleDeleteButton(file) {
        return (
            <a className="pull-xs-right btn btn-danger btn-sm" onClick={() => this.deleteFile(file.id)}>Delete</a>
        );
    }

    deleteFile(id) {
        if (id) {
            this.props.deleteFile(id);
            this.props.fetchFiles();
        }
    }

    renderFiles(files) {
        return files.map((file) => {
            return (
                <li className="list-group-item" key={file.id}>
                    <strong>{file.original_name}</strong>
                    <div>
                        {this.handlePreviewButton(file)}
                        {this.handleDeleteButton(file)}
                    </div>
                </li>
            );
        });
    }

    render(){
        const {files, loading, error} = this.props.filesList;
        if(loading === true){
            return <div className="loader"></div>;
        }
        return (
            <div>
                <div className="card-body">
                    <input type="file" onChange={this.onChange} />
                    <button className="btn btn-info" type="button" onClick={this.fileUpload}>Upload File</button>
                </div>
                <div className="clearfix"></div>
                <ul className="list-group">
                    {this.renderFiles(files)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        filesList: state.files.filesList,
        newFile: state.files.newFile,
        deleteFile: state.files.deleteFile
    }
}
export default connect(mapStateToProps,actions)(Files);