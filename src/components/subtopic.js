class Subtopic {
  constructor (data) {
    this.id = data.id
    this.pic_url = data.pic_url || "http://i.imgur.com/b0DGRSl.png"
    this.name = data.name
    this.topic = data.topic
    this.contents = data.contents
    this.created_at = data.created_at
    this.updated_at = data.updated_at
    this.header = data.topic.name
  }

  render (isTopic) {
    var contents = ""

    if (this.contents.length >= 2) {
      contents = '"' + this.contents[0].title + '"' + " and " + '"' + this.contents[1].title + '"'
    } else if (this.contents.length === 1) {
      contents = '"' + this.contents[0].title + '"'
    }

    if (isTopic) {this.header = ""}

    return (`
      <div class="ui card" id="subtopics-${this.id}">
        <div class="image right aligned">
          <a href="#">${this.header} &nbsp</a>
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
    `)
  }
}
