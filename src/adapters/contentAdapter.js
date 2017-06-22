class ContentAdapter {
  constructor(subtopic_id) {
    this.baseURL = `http://localhost:3000/api/v1/subtopics/${subtopic_id}/contents`
  }

  getContentIndex(){
    return fetch(this.baseURL)
    .then(resp => resp.json())
  }
}
