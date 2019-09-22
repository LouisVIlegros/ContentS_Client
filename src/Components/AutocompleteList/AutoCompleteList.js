import React from 'react'
import Aux from '../../Hoc/Auxiliary/auxiliary'
import classes from './AutoCompleteList.module.css'
import SplitterLayout from 'react-splitter-layout';
import FocusedUser from './FocusedUser/FocusedUser'
import 'react-splitter-layout/lib/index.css';
export default (props) => {
    let suggestionsListComponent;
    if (props.searchedString) {
      if (props.suggestionsList.length) {
        suggestionsListComponent = (
          <ul>
            {props.suggestionsList.map((suggestion, index) => {
              
              return (
             
                <li key={suggestion.id+suggestion.name} onClick={()=>props.clickOnUser(suggestion.id)} className={classes.w3_bar}>

  <img src={suggestion.photo} className={`${classes.w3_bar_item} ${classes.w3_circle}`} />
  <div className={classes.w3_bar_item}>
    <span className={classes.w3_large}>{suggestion.name}</span> <span className={classes.w3_large}>{suggestion.lastName}</span><br />
    <span>Web Designer</span>
  </div>
</li>

      
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div >
            <em>No persons with this name found !</em>
          </div>
        );
      }
    }

    return (
<Aux>
<SplitterLayout>
<div>
  {suggestionsListComponent}
  </div>
 <div>
   {
     Object.keys(props.focusUser).length>0 && <FocusedUser focusUser={props.focusUser} />

   }

 </div>
</SplitterLayout>

  
</Aux>
    )
}