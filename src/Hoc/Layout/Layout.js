import React from 'react'
import Aux from '../Auxiliary/auxiliary'
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <Aux>
      
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout
