class Contents {
  constructor() {
    this.contentAdapter = new ContentAdapter()
    this.list = []
  }

  getShow (id) {
    return (this.contentAdapter.getShow(id[1]).then(
      data => this.list = [new Content(data)]
    ))
  }

  renderShow() {
    return this.list.map(content => content.renderModal())
  }
}
