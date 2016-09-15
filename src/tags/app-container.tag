import * as actionCreators from '../actions/pacman';

<app-container>
    <label>Hello World!</label>

    <script>

        let store = this.opts.store;

        this.state = store.getState();

        store.subscribe(() => {
            this.state = store.getState();
            this.update();
        });

    </script>

</app-container>
