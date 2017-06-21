class TopicAdapter {
  constructor() {
    this.baseURL = 'http://localhost:3000/api/v1/topics'
  }

  getIndex(){
    return fetch(this.baseURL)
    .then(resp => resp.json())
  }
}
