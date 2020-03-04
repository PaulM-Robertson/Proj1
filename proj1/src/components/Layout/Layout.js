import React from 'react';

import Au from '../../hoc/Au';

const layout = (props) => (
    <Au>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Au>
);

export default layout;