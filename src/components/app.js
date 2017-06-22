class App {
  constructor() {
    this.topics = new Topics()
    this.subtopics = new Subtopics()
    this.contentList = new ContentsList()
    this.listContainer = document.getElementById('list')
    this.listContainer.addEventListener('click', this.listClick.bind(this))
    this.multiBtn = document.querySelector('.ui.pointing.menu.inverted')
    this.multiBtn.addEventListener('click', this.switchClick.bind(this))
  }

  switchClick () {
    var el = event.target.id
    switch (el) {
      case 'home-index':
        this.refreshHome()
        break
      case 'topic-index':
        this.topicClick()
        break
      case 'subtopic-index':
        this.subtopicClick()
        break
    }
  }

  refreshHome () {
    this.listContainer.innerHTML = '<img src="http://i.imgur.com/P9IVqkS.jpg">'
  }

  topicClick () {
    this.topics.getTopics()
    .then(() => this.renderTopics())
  }

  subtopicClick () {
    this.subtopics.getSubtopics()
    .then(() => this.renderSubtopics())
  }

  listClick () {
    var el = event.target
    //parentNode.parentNode.id.split('-')
    while(el.className !== 'ui card') {
      el = el.parentNode
    }
    let el_id = el.id
    let el_type = el_id.split('-')[0]
    let el_id_num = el_id.split('-')[1]
    switch (el_type) {
      case 'topics':
        break
      case 'subtopics':
        this.setContentAdapter()
        this.setContentList(el_id_num)
        break
      case 'contents':
        break
    }
  }

  renderSubtopics () {
    this.listContainer.innerHTML = this.subtopics.render()
  }

  renderTopics () {
    this.listContainer.innerHTML = this.topics.render()
  }

  setContentAdapter () {
    this.contentAdapter = new ContentAdapter()
  }

  setContentList(subtopic_id) {
    this.contentAdapter.getContentIndex(subtopic_id)
        .then(data => this.contentList.listContents(data)).then(() => this.renderContents())

    //this.ContentAdapter.getContentIndex().then(data => this.contentList.listContents(data))
  }


  renderContents() {
    //debugger
    // console.log(this.contentList)
    // console.log(this.contentList.contents)
    //console.log('here')
    //add ui cards wrapper so that cards will line up and stack
    let contents_html = this.contentList.renderContents().join('') + `<div class="actions">
      <div class="ui black deny button">
        Nope
      </div>
      <div class="ui positive right labeled icon button">
        Yep, that's me
        <i class="checkmark icon"></i>
      </div>`

    $('#modal').html(contents_html)
    $('#modal').modal('show')
    $('#modal').click(this.modalClick.bind(this))

  }

  modalClick () {
    var el = event.target
    console.log(el)
     while (el.className !== 'ui long modal' && el.className !== 'ui raised link card') {
       el = el.parentNode
     }
    //  if (el.className === 'ui long modal') {
    //    break
    //  }
    console.log(el)
    let el_id = el.id
    let el_type = el_id.split('-')[0]
    let el_id_num = el_id.split('-')[1]
    switch (el_type) {
      case 'topics':
        break
      case 'subtopics':
        break
      case 'contents':
        this.showContent(el_id_num)
        break
    }
   }

  showContent(content_id) {
    this.contentAdapter.getContentId(content_id)
    .then(data => this.content = new Content(data)).then(() => this.renderContentBody())
  }

  renderContentBody() {
    $('.ui.modal')
      .modal({
        allowMultiple: true
      })
    $('#content-modal').html(this.content.renderModal())
    $('#content-modal').modal('show')
    // $('#modal').click(this.modalClick.bind(this))
  }


  // onClick () {
  //   $(`#content-modal-${this.id}`)
  //     .modal('show')
  // }

}
