class TopicAdapter {
  constructor () {
    this.baseURL = `${location.href.split(':').slice(0,-1).join(':') + ':3000'}/api/v1/topics`
  }

  getIndex () {
    return fetch(this.baseURL)
    .then(resp => resp.json())
  }

  getShow (id) {
    return fetch(this.baseURL + `/${id}/subtopics`)
    .then(resp => resp.json())
  }
}
