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
    const btn_group = `<div>
    <div class="ui labeled icon buttons">
      <button class="ui black button">
        <i class="add circle icon"></i>
        Go Back
      </button>
      <button class="ui positive button" id="new-form">
        <i class="remove circle icon"></i>
        Create
      </button>
    </div>
    </div>`
    return `<div class="header">${(id[2])}</div><div class="ui link cards">` + this.renderShowSubtopics() + "</div>" + btn_group
  }

  renderShowSubtopics() {

    return this.list.map(content => content.render()).join('')
  }

  render () {
    return this.renderSubtopics()
  }

}
