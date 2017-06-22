class ContentAdapter {
  constructor() {
    this.baseURL = `http://localhost:3000/api/v1/`
  }

  getContentIndex(subtopic_id){
    return fetch(this.baseURL + `subtopics/${subtopic_id}/contents`)
    .then(resp => resp.json())
  }

  getContentId(content_id) {
    return fetch(this.baseURL + `contents/${content_id}`)
    .then(resp => resp.json())
  }
}
