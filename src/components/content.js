
class Content {
  constructor (json_data) {
    this.id = json_data.id
    this.title = json_data.title
    this.pic_url = json_data.pic_url || "http://i.imgur.com/b0DGRSl.png"
    this.link_url = json_data.link_url
    this.description = json_data.description
    this.difficulty = json_data.difficulty
    this.subtopic_id = json_data.subtopic_id
    this.created_at = json_data.created_at
    this.updated_at = json_data.updated_at
  }

  renderCard () {
    return (`
      <div class="ui raised link card" id="contents-${this.id}">
        <div class="content">
          <div class="header">${this.title}</div>
          <div class="meta">
            <span class="category">${this.subtopic_id}</span>
          </div>
          <div class="description">
            <p>${this.description}</p>
          </div>
        </div>
        <div class="extra content">
          <div class="right floated author">
            <img class="ui avatar image" src="${this.pic_url}"> Author
          </div>
        </div>
      </div>



      `)
  }

  renderModal() {
    return (`
      <div class="ui center aligned container">
      <div class="header">
        Profile Picture
      </div>
      <div class="image content">
        <div class="ui medium image">
          <img src="${this.pic_url}">
        </div>
        <div class="description">
          <div class="ui header">Learning Material</div>
          <p>${this.description}</p>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Nope
        </div>
        <div class="ui positive right labeled icon button">
          Yep, that's me
          <i class="checkmark icon"></i>
        </div>
      </div>
      </div>
      `)
  }

}
