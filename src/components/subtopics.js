class Subtopics {
  constructor() {
    this.subtopicAdapter = new SubtopicAdapter()
    this.list = []
    // this.subtopicsForm.addEventListener('submit', this.addSubtopic.bind(this, subtopics))
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

  // subtopicsIndex() {
  //   this.list = []
  //   this.adaptor.loadAllSubtopicsInto(this.list)
  //   .then( this.render.bind(this))
  // }
  //
  // addSubtopic (subtopics) {
  //   event.preventDefault()
  //
  //   this.list =  subtopics.map(subtopic => new Subtopic(subtopic))
  // }
  //
  // renderSubtopics () {
  //   document.getElementById('ui-1').innerHTML = this.list.map(subtopic => subtopic.render()).join('')
  // }

}
