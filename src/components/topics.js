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

  getShow (id) {
    return (this.topicAdapter.getShow(id[1]).then(
      data => this.list = data.map(function(topic) {return new Subtopic(topic)})
    ))
  }

  renderShow (id) {
    return `<div class="header">${(id[2])}</div><div class="ui link cards">` + this.renderShowTopics() + "</div>"
  }

  renderShowTopics() {
    return this.list.map(subtopic => subtopic.render(true)).join('')
  }

  render () {
    return this.renderTopics()
  }

}
