import React from 'react'
import classes from "./SearchBar.module.css";
import SuggestionsListComponent from '../AutocompleteList/AutoCompleteList'
export default (props) => {

  return (
    <div>

      <div className={classes.wrap}>
        <div className={classes.search}>
          <input
            type="text"
            className={classes.searchTerm}
            placeholder="What are you looking for?"
            onChange={(e) => props.Change(e.target.value)}
            value={props.searchedString} />
          <button type="submit" className={classes.searchButton}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className={classes.listWraper}>
      {
        props.searchedString &&
        <SuggestionsListComponent
          searchedString={props.searchedString}
          suggestionsList={props.suggestionsList}
          focusUser={props.focusUser}
          clickOnUser={function(id){props.clickOnUser(id)}}
          
        />
      }
      </div>

    </div>
  )
}
