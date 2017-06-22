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
        this.setContentAdapter(el_id_num)
        this.setContentList()
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

  setContentAdapter (subtopic_id) {
    this.ContentAdapter = new ContentAdapter(subtopic_id)
  }

  setContentList() {
    this.ContentAdapter.getContentIndex()
        .then(data => this.contentList.listContents(data)).then(() => this.renderContents())

    //this.ContentAdapter.getContentIndex().then(data => this.contentList.listContents(data))
  }


  renderContents() {
    //debugger
    // console.log(this.contentList)
    // console.log(this.contentList.contents)
    //console.log('here')
    $('#modal').html(this.contentList.renderContents().join(''))
    $('#modal').modal('show')

  }


  // onClick () {
  //   $(`#content-modal-${this.id}`)
  //     .modal('show')
  // }

}
