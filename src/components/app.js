class App {
  constructor() {
    this.topics = new Topics()
    this.subtopics = new Subtopics()
    this.listContainer = document.getElementById('list')
    this.listContainer.addEventListener('click', this.listClick.bind(this))
    this.modalContainer = document.getElementById('modal-list')
    this.multiBtn = document.querySelector('.ui.pointing.menu.inverted')
    this.multiBtn.addEventListener('click', this.switchClick.bind(this))
  }

  addModalListeners () {

  }

  switchClick () {
    var el = event.target.id
    switch (el) {
      case 'home-index':
        this.refreshHome()
        break
      case 'topic-index':
        this.topicClick()
        break
      case 'subtopic-index':
        this.subtopicClick()
        break
    }
  }

  refreshHome () {
    this.listContainer.innerHTML = '<img src="http://i.imgur.com/P9IVqkS.jpg">'
  }

  topicClick () {
    this.topics.getTopics()
    .then(() => this.renderTopics())
  }

  subtopicClick () {
    this.subtopics.getSubtopics()
    .then(() => this.renderSubtopics())
  }

  listClick () {
    var el = event.target
    while(el.className !== 'ui card') {
      el = el.parentNode
    }
    let type = el.id.split('-')[0]
    let id = el.id.split('-')[1]
    switch (type) {
      case 'topic':
        this.renderShowTopic(id)
        break
    }
    this.modalContainer.modal('show')
  }

  renderSubtopics () {
    this.listContainer.innerHTML = this.subtopics.render()
  }

  renderTopics () {
    this.listContainer.innerHTML = this.topics.render()
  }

  renderShowTopic (id) {
    this.modalContainer.innerHTML = this.topics.renderShow(id)
  }
}
