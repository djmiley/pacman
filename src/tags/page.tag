<page>
    <label>{pageState.number}</label>
    <label>{pageState.text}</label>
    <img if={pageState.imageName} src='./images/{pageState.imageName}.jpg' />

    <div id='menu' class='btn-group col-sm-6' role='group'>
        <button class='btn btn-default' each={pageState.navigatorOptions} type='button' onclick={setPageNumber}>
            {text}
        </button>
    </div>

    <script>

        let store = this.opts.store;

        let pageNumber = store.getState().pageNumber;

        this.pageState = store.getState().pages.find(page => page.number === pageNumber);

        store.subscribe(() => {
            pageNumber = store.getState().pageNumber;

            this.pageState = store.getState().pages.find(page => page.number === pageNumber);

            this.update();
        });

        this.setPageNumber = (e) => {
            this.opts.setpagenumber(e.item.destinationNumber);
        };

    </script>

</page>
