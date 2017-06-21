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
      <div class="ui card" id="topic-${this.id}">
        <div class="image">
          <img src="${this.pic_url}">
        </div>
        <div class="content">
          <a class="header">${this.name}</a>
          <div class="meta">
            <span class="date">${this.subtopics[0].name}</span>
          </div>
          <div class="description">
            <p>test</p>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
          </a>
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
    document.getElementById('ui-1').innerHTML = this.list.map(topic => topic.render()).join('')
  }

}
