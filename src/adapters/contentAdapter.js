class ContentAdapter {
  constructor() {
    this.baseURL = `${location.href.split(':').slice(0,-1).join(':') + ':3000'}/api/v1/`
  }

  getContentIndex(subtopic_id){
    this.subtopic_id = subtopic_id
    return fetch(this.baseURL + `subtopics/${subtopic_id}/contents`)
    .then(resp => resp.json())
  }

  getContentId(content_id) {
    this.content_id = content_id
    return fetch(this.baseURL + `contents/${content_id}`)
    .then(resp => resp.json())
  }

  createContent(content) {
    return fetch(this.baseURL + `subtopics/${this.subtopic_id}/contents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    })
    .then(resp => resp.json())
  }

  getShow(id) {
    return fetch(this.baseURL + `contents/${id}`)
    .then(resp => resp.json())
  }

}
