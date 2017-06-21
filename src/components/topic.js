class Topic {
  constructor (data) {
    this.id = data.id
    this.pic_url = data.pic_url
    this.name = data.name
    this.subtopics = data.subtopics
    this.created_at = data.created_at
    this.updated_at = data.updated_at
  }

  render () {
    return (`
      <div class="ui card" id="topics-${this.id}">
        <div class="image">
          <div class="content">
            <img src="${this.pic_url}" style="width:75px;height:75px;"alt="${this.name} Picture" >
            <a style="font-size: 1.5em" class="header">${this.name}</a>
          </div>
        </div>
      </div>
    `)
  }
}
