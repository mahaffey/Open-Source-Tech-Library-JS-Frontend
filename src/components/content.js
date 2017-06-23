
class Content {
  constructor (data) {
    this.id = data.id
    this.title = data.title
    this.author = data.author || "Anonymous"
    this.pic_url = data.pic_url || "http://i.imgur.com/b0DGRSl.png"
    this.link_url = data.link_url || `https://www.google.com/#q=${this.title.split(' ').join('+')}`
    this.description = data.description || ""
    this.descript = data.description || ""
    this.difficulty = data.difficulty
    this.subtopic = data.subtopic
    this.created_at = data.created_at
    this.updated_at = data.updated_at
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
          <div class="ui header">
            Created by ${this.author} - <a href="${this.link_url}" target="_blank"><span style="color: #21ba45;">${this.title}</span></a>
          </div>
          <p>${this.description}</p>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Get me outta here
        </div>

          <a class="ui positive right labeled icon button" href="${this.link_url}" target="_blank">Take me to ${this.title}<i class="checkmark icon"></i></a>


      </div>
      `)
  }

  renderForm() {
    return (`
      <div class="header">
        New Content
      </div>
      <form class="ui form">
        <div class="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name">
        </div>
        <div class="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name">
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden">
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button class="ui button" type="submit">Submit</button>
      </form>
      `)
  }

}
