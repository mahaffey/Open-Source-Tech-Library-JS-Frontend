class Topic {
  constructor (data) {
    this.id = data.id
    this.pic_url = data.pic_url
    this.name = data.name
    this.subtopics = data.subtopics
    this.created_at = data.created_at
    this.updated_at = data.updated_at
  }

  render () {
    return (`
      <div class="ui card" id="topics-${this.id}">
        <div class="content">
          <img src="#" style="width:75px;height:75px;"alt="${this.name} Picture" >

          <a class="center aligned header">${this.name}</a>
        </div>
      </div>
    `)
  }
}

class Topics {
  constructor () {
    this.topicAdapter = new TopicAdapter()
    this.list = []
  }

  getTopics () {
    return (this.topicAdapter.getIndex().then(
      data => this.list = data.map(function(topic) {return new Topic(topic)})
    ))
  }

  renderTopics () {
    return this.list.map(topic => topic.render()).join('')
  }

  render () {
    return this.renderTopics()
  }

}

class App {
  constructor() {
    this.topics = new Topics()

    // this.subtopics = new Subtopics()
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
      case 'home-btn':
        this.subtopicClick()
        break
    }
  }

  refreshHome () {
    this.listContainer.innerHTML = '<img src="http://i.imgur.com/P9IVqkS.jpg">'
  }

  topicClick () {
    this.topics.getTopics()
    .then(() => this.render())
  }

  subtopicClick () {
    
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

  render () {
    this.listContainer.innerHTML = this.topics.render()
  }
}

class TopicAdapter {
  constructor() {
    this.baseURL = 'http://localhost:3000/api/v1/topics'
  }

  getIndex(){
    return fetch(this.baseURL)
    .then(resp => resp.json())
  }
}


$(document).ready(function() {
  const newApp = new App()
  newApp.refreshHome()
})
