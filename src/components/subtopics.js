class Subtopics {
  constructor() {
    this.subtopicAdapter = new SubtopicAdapter()
    this.list = []

  }

  getSubtopics () {
    return (this.subtopicAdapter.getIndex().then(
      data => this.list = data.map(function(subtopic) {return new Subtopic(subtopic)})
    ))
  }

  renderSubtopics () {
    return this.list.map(subtopic => subtopic.render()).join('')
  }

  getShow (id) {
    return (this.subtopicAdapter.getShow(id[1]).then(
      data => this.list = data.map(function(subtopic) {return new Content(subtopic)})
    ))
  }

  renderShow (id) {
    return (`
      <div class="header">
        ${(id[2])}
        <div class="item right aligned">
          <div class="ui labeled icon buttons">
            <button class="ui black button">
              <i class="remove circle icon"></i>
              Go Back
              </button>
            <button class="ui positive button" id="new-form">
              <i class="add circle icon"></i>
              Create
            </button>
          </div>
        </div>
      </div>
      <div class="ui link cards">
        ${this.renderShowSubtopics()}
      </div>`)
  }

  renderShowSubtopics() {

    return this.list.map(content => content.render()).join('')
  }

  render () {
    return this.renderSubtopics()
  }

}
