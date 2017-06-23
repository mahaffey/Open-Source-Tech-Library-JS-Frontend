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
        <label>Title</label>
        <input type="text" name="title" placeholder="Title" class="title">
      </div>
      <div class="field">
        <label>Picture URL</label>
        <input type="text" name="pic_url" placeholder="Picture URL" class="pic_url">
      </div>
      <div class="field">
        <label>Link</label>
        <input type="text" name="link_url" placeholder="Link" class="link_url">
      </div>
      <div class="field">
        <label>Description</label>
        <input type="text" name="description" placeholder="Description" class="description">
      </div>
      <div class="field">
        <label>Difficulty Level</label>
        <div class="ui selection dropdown">
            <input type="hidden" name="difficulty">
            <i class="dropdown icon"></i>
            <div class="default text">Difficulty Level</div>
            <div class="menu">
                <div class="item" data-value="2">Hard</div>
                <div class="item" data-value="1">Medium</div>
                <div class="item" data-value="0">Easy</div>
            </div>
        </div>
      </div>
      <div class="ui black deny button">
        Go Back
      </div>
      <button class="ui button" type="submit">Submit</button>
    </form>
      `)
  }

  postNew(content) {
    this.contentAdapter.createContent(content).then(r => console.log(r)).then($('#content-modal').modal('hide'))
  }
}
