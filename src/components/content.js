
class Content {
  constructor (data) {
    this.id = data.id
    this.title = data.title
    this.pic_url = data.pic_url || "http://i.imgur.com/b0DGRSl.png"
    this.link_url = data.link_url
    this.description = data.description || ""
    this.descript = data.description || ""
    this.difficulty = data.difficulty
    this.subtopic = data.subtopic
    this.created_at = data.created_at
    this.updated_at = data.updated_at
    console.log(this)
    debugger
  }

  render () {

    if (this.descript.length > 50) {
      while (this.descript.length > 50){
        this.descript = this.descript.split(' ').slice(0,-1).join(' ')
      }
      this.descript += "..."
    }


    return (`
      <div class="ui card" id="contents-${this.id}">
        <div class="image">
          &nbsp
        </div>
        <div class="content">
          <div class="meta">
            <img src="${this.pic_url}" style="width:75px;height:75px;"alt="${this.title} Picture" >
            <span>
              <a style="font-size:1.75em" class="header">${this.title}</a>
              <br>
              ${this.difficulty}

            </span>
          </div>
        </div>
        <div class="extra content">
          <div class="description">
            <p>${this.descript}</p>
          </div>
        </div>
      </div>`
    )
  }


  renderModal() {
    return (`
      <div class="header">
        ${this.title}
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
      `)
  }

}
