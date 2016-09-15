import * as actionCreators from '../actions/pacman';

import './page.tag';

<app-container>
    <page store={this.opts.store}></page>

    <script>

        let store = this.opts.store;

        this.state = store.getState();

        store.subscribe(() => {
            this.state = store.getState();
            this.update();
        });

    </script>

</app-container>