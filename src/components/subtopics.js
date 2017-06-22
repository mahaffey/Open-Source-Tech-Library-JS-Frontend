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

  render () {
    return this.renderSubtopics()
  }

}
