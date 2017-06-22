class TopicAdapter {
  constructor () {
    this.baseURL = 'http://localhost:3000/api/v1/topics'
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
