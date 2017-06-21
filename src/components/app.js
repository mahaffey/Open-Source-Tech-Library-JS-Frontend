class App {
  constructor() {
    this.topics = new Topics()
    this.subtopics = new Subtopics()
    this.listContainer = document.getElementById('list')
    this.listContainer.addEventListener('click', this.listClick.bind(this))
    this.multiBtn = document.querySelector('.ui.pointing.menu.inverted')
    this.multiBtn.addEventListener('click', this.switchClick.bind(this))
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
    var el = event.target.parentNode.parentNode.id.split('-')
    switch (el[0]) {
      case 'topics':
        break
      case 'subtopics':
        break
      case 'contents':
        break
    }
  }

  renderSubtopics () {
    this.listContainer.innerHTML = this.subtopics.render()
  }

  renderTopics () {
    this.listContainer.innerHTML = this.topics.render()
  }
}