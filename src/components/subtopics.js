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
    return `<div class="header">${(id[2])}</div><div class="ui link cards">` + this.renderShowSubtopics() + "</div>"
  }

  renderShowSubtopics() {
    return this.list.map(content => content.render()).join('')
  }

  render () {
    return this.renderSubtopics()
  }

}
