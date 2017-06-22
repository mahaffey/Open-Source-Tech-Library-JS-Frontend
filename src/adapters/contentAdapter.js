class ContentAdapter {
  constructor() {
    this.baseURL = `http://localhost:3000/api/v1/`
  }

  // getContentIndex(subtopic_id){
  //   return fetch(this.baseURL + `subtopics/${subtopic_id}/contents`)
  //   .then(resp => resp.json())
  // }

  getShow(id) {
    return fetch(this.baseURL + `contents/${id}`)
    .then(resp => resp.json())
  }
}
