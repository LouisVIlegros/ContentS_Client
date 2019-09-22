import React from 'react'

import {connect} from 'react-redux'

import SearchBar from '../../Components/SearchBar/SearchBar'

import Aux from '../../Hoc/Auxiliary/auxiliary'


import * as actionCreators from '../../Store/actions/index'


const SearchPage = (props) => {

    return (
        <Aux>
            <SearchBar 
            Change={(val) => props.onKeyDownSearch(val) } 
            suggestionsList = {props.suggestions} 
            searchedString={props.searchedString}
            focusUser={props.focusedPerson}
            clickOnUser={(id) =>props.onClickUser(id)}
            />
          
        </Aux>
    )

}

const mapStateToProps = state => {
    return {
        focusedPerson : state.focusedPerson,
        searchedString : state.searchedString,
        suggestions : state.suggestions

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onKeyDownSearch : (val) => dispatch(actionCreators.autoComplete(val)),
        onClickUser : (id) => dispatch(actionCreators.focusUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)

