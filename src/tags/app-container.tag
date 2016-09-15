import * as actionCreators from '../actions/pacman';

import './page.tag';

<app-container>
    <page store={this.opts.store} setpagenumber={setPageNumber}></page>

    <script>

        let store = this.opts.store;

        store.subscribe(() => {
            this.update();
        });

        this.setPageNumber = (pageNumber) => {
            store.dispatch(actionCreators.setPageNumber(pageNumber));
        };

    </script>

</app-container>
