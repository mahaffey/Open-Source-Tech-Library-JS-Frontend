

class ContentsList {
  constructor() {
    this.contents = []
  }

  listContents(contents) {
    //debugger
    this.contents = contents.map(content => new Content(content))
    //debugger
  }

  renderContents() {
    //debugger
    //console.log(this.contents)
    return this.contents.map(content => content.renderCard())
  }
}
