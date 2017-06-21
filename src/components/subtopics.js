class Subtopics {
  constructor() {
    // this.subtopicsForm = document.getElementById('new-subtopic-form')
    // this.subtopicsForm = document.getElementById('new-subtopic-form')
    // this.subtopicsForm = document.getElementById('new-subtopic-form')

    this.adaptor = new Adaptor()
    this.subtopicsIndex()
    this.subtopicsForm.addEventListener('submit', this.addSubtopic.bind(this, subtopics))
  }

  subtopicsIndex() {
    this.list = []
    this.adaptor.loadAllSubtopicsInto(this.list)
    .then( this.render.bind(this))
  }

  addSubtopic (subtopics) {
    event.preventDefault()

    this.list =  subtopics.map(subtopic => new Subtopic(subtopic))
  }

  renderSubtopics () {
    document.getElementById('ui-1').innerHTML = this.list.map(subtopic => subtopic.render()).join('')
  }

}
