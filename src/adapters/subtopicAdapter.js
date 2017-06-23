class SubtopicAdapter {
  constructor() {
    this.baseURL = `${location.href.split(':').slice(0,-1).join(':') + ':3000'}/api/v1/subtopics`
  }

  getIndex(){
    return fetch(this.baseURL)
    .then(resp => resp.json())
  }

  getShow (id) {
    return fetch(this.baseURL + `/${id}/contents`)
    .then(resp => resp.json())
  }

  // getSubtopics() {
  //   return fetch(this.baseUrl)
  //   .then( resp => resp.json() )
  // }
  //
  // loadAllSubtopicsInto(array) {
  //   return this.getSubtopics()
  //   .then( subtopicsJSON => console.log(subtopicsJSON) )
  // }

  // .forEach(subtopic => array.push(new Subtopic(subtopic)) )

  // createSubtopic(body) {
  //   let subtopicCreateParams = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify({body:body})
  //   }
  //   return fetch(this.baseUrl,subtopicCreateParams).then( resp => resp.json() )
  // }
}
