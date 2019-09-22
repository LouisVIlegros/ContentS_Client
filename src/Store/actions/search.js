
import * as actionTypes from './actionTypes'

import {feedData, getOne} from '../../services/api'

export const saveResult = (val, data=null) => {
    return {
        type : actionTypes.AUTOCOMPLETE,
        value : val,
        Data : data
    }
}
export const returnDetail = (id, data=null) => {
    return {
        type : actionTypes.FOCUS_USER,
        value : id,
        Data : data
    }
}

export const autoComplete = (val) => {
    return (dispatch, getState) => {
        const prevSearchedString = getState().searchedString
        const DataNeeded = (val.length === 1 || val.length === 0) && prevSearchedString === ""
        if (DataNeeded) {
            feedData(val).then(data =>  dispatch(saveResult(val, data)))
           
            
        }else{
            dispatch(saveResult(val))
        }

    }

}
export const focusUser = (id) => {
    return (dispatch) => {

            getOne(id).then(data =>  dispatch(returnDetail(id, data)))
           
            
 
    }

}