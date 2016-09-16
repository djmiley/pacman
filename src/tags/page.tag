<page>
    <div class='container'>
        <div class='jumbotron'>
            <h1>{pageState.number}</h1>
            <h2 if={pageState.title} class='text-center'>{pageState.title}</h2>
            <div if={pageState.imageName}>
                <img src='./images/{pageState.imageName}.jpg' class='img-responsive' />
            </div>
            <h4 if={pageState.text} class='text-center'><i>{pageState.text}</i></h4>
            <div class='btn-group' role='group'>
                <button class='btn btn-primary btn-lg' each={pageState.navigatorOptions} type='button' onclick={setPageNumber}>
                    {text}
                </button>
            </div>
        </div>
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
