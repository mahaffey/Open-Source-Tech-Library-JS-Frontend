class SubTopic {
  constructor (data) {
    this.id = data.id
    this.pic_url = data.pic_url
    this.name = data.name
    this.topic = data.topic
    this.contents = data.contents
    this.created_at = data.created_at
    this.updated_at = data.updated_at
  }

  render () {
    var contents = ""

    if (this.contents.length >= 2) {
      contents = '"' + this.contents[0].title + '"' + " and " + '"' + this.contents[1].title + '"'
    } else if (this.contents.length === 1) {
      contents = '"' + this.contents[0].title + '"'
    }

    return (`
      <div class="ui card" id="subtopics-${this.id}">
        <div class="image">
          <a href="#">${this.topic.name} &nbsp </a>
        </div>
        <div class="content">
        <div class="meta">
          <img src="${this.pic_url}" style="width:75px;height:75px;"alt="${this.name} Picture" >
          <span>
          <a style="font-size:1.75em" class="header">${this.name}</a>
          </span>
          </div>
        </div>
        <div class="extra content">
          <span class="contents">
            Including: ${contents}
          </span>
        </div>
      </div>

      <div class="ui modal" id="subtopic-modal-${this.id}">
        <i class="close icon"></i>
        <div class="header">
          Profile Picture
        </div>
        <div class="image content">
          <div class="ui medium image">
            <img src="${this.pic_url}">
          </div>
          <div class="description">
            <div class="ui header">We've auto-chosen a profile image for you.</div>
            <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
            <p>Is it okay to use this photo?</p>
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
