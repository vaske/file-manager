import {
    FETCH_FILES,
    FETCH_FILES_SUCCESS,
    DELETE_FILE,
    DELETE_FILE_SUCCESS,
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    filesList:{files:[], error:null, loading:false},
    newFile:{file:null, error:null, loading:false},
    deleteFile:{file:null, error:null, loading:false}
};


export default function (state = INITIAL_STATE,action){
    switch (action.type) {
      case FETCH_FILES:
        return { ...state, filesList:{files:[], error:null, loading:true}};
      case FETCH_FILES_SUCCESS:
        return { ...state, filesList:{files:action.payload.data, error:null, loading:false}};
      case DELETE_FILE:
        return { ...state, deleteFile:{file:action.payload, error:null, loading:true} };
      case DELETE_FILE_SUCCESS:
        return { ...state, deleteFile:{file: null, error:null, loading:false}};
      case UPLOAD_FILE:
        return {...state,newFile:{file:action.payload,error:null,loading:true}};
      case UPLOAD_FILE_SUCCESS:
        return {...state,newFile:{file:null,error:null,loading:false}};
      default:
        return state;
    }
}
