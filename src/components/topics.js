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
