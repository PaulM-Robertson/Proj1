import React from 'react';

import Au from '../../hoc/Au';
import classes from './Layout.module.css';

const layout = (props) => (
    <Au>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Au>
);

export default layout;