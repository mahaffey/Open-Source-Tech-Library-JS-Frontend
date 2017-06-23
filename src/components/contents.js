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

  renderForm() {
    return (`
      <div class="header">
        New Content
      </div>
      <form class="ui form">
        <div class="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name">
        </div>
        <div class="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name">
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden">
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button class="ui button" type="submit">Submit</button>
      </form>
      `)
  }
}
