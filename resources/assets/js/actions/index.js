import axios from 'axios';
import {
    FETCH_FILES,
    FETCH_FILES_SUCCESS,
    DELETE_FILE,
    DELETE_FILE_SUCCESS,
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS
} from './types';

const ROOT_URL = 'http://127.0.0.1:8000';


export function fetchFiles() {
    return dispatch => {
        dispatch({type: FETCH_FILES});
        axios.get(`${ROOT_URL}/api/files`)
            .then(response =>{
                dispatch({
                    type: FETCH_FILES_SUCCESS,
                    payload: response
                })
            })
    }
}

export function deleteFile(id) {
    return dispatch => {
        if (id) {
            dispatch({
                type: DELETE_FILE,
                payload: id
            });
            axios.delete(`${ROOT_URL}/api/files/`+id)
                .then(response => {
                    dispatch({
                        type: DELETE_FILE_SUCCESS
                    })
            });
        }
    }
}

export function uploadFile(file) {
    return dispatch => {
        const formData = new FormData();
        formData.append('file', file);
        dispatch({
            type: UPLOAD_FILE,
            payload: file
        });
        axios.post(`${ROOT_URL}/api/files`, formData,
        {
            headers:{'content-type': 'multipart/form-data'}
        })
        .then(response => {
            dispatch({type: UPLOAD_FILE_SUCCESS});
        })
    }
}
