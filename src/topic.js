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
        <div class="image">
        </div>
        <div class="content">
          <a class="center aligned header">${this.name}</a>
        </div>
      </div>
    `)
  }
}

class TopicList {
  constructor() {
    this.list = []
  }

  createTopics (topics) {
    this.list =  topics.map(topic => new Topic(topic))
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
    this.topic = new TopicList()
    this.subtopic =
    this.topicAdapter = new TopicAdapter()
    this.listContainer = document.getElementById('list')
    this.listContainer.addEventListener('click', this.listClick.bind(this))
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
    this.listContainer.innerHTML = this.topic.render()
  }
}

class TopicAdapter {
  constructor() {
    this.baseURL = 'http://localhost:3000/api/v1'
  }

  
}

var newApp = new App()
fetch('http://192.168.6.153:3000/api/v1/topics')
.then(resp => resp.json())
.then(data => newApp.topic.createTopics(data))
newApp.render()
