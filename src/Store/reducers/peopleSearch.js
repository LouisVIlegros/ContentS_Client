import * as actionTypes from '../actions/actionTypes'


const initialState = {
    focusedPerson : {},
    Data : [],
    suggestions : [],
    searchedString : ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTOCOMPLETE:
            let newData
            if (action.Data !== null) {
                newData = action.Data
            } else {
                newData = state.Data
            }
            const newSearchedString = action.value
            const filterSuggestions = newData.filter(
                suggestion => suggestion["name"].toLowerCase().startsWith(newSearchedString) || suggestion["lastName"].toLowerCase().startsWith(newSearchedString)
            )
            return {
                ...state,
                Data : newData,
                searchedString : newSearchedString,
                suggestions : filterSuggestions
            }
        
        case actionTypes.FOCUS_USER:
            return {
                ...state,
                focusedPerson : action.Data
            }

            

    
        default:
            break;
    }
    return state

}

export default reducer