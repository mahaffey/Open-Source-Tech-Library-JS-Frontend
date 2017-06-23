class App {
  constructor() {
    this.topics = new Topics()
    this.subtopics = new Subtopics()
    this.contents = new Contents()
    this.listContainer = document.getElementById('list')
    this.listContainer.addEventListener('click', this.listClick.bind(this))
    this.modalContainer = document.getElementById('modal-list')
    this.contentModal = document.getElementById('content-modal')
    this.modalContainer.addEventListener('click', this.listClick.bind(this))
    this.multiBtn = document.querySelector('.ui.pointing.menu.inverted')
    this.multiBtn.addEventListener('click', this.switchClick.bind(this))
  }


  switchClick (event) {
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

  listClick (event) {
    var el = event.target
    while(el.className !== 'ui card' && el.className !== 'ui positive button') {
      el = el.parentNode
    }
    let id = el.id.split('-')
    if (el.getElementsByClassName('header')[0]){
      id.push(el.getElementsByClassName('header')[0].text)
    }

    switch (id[0]) {
      case 'topics':
        this.topics.getShow(id)
        .then(() => this.renderShowTopic(id))
        break
      case 'subtopics':
        this.subtopics.getShow(id)
        .then( () => this.renderShowSubtopic(id))
        .then(function () {
          $('.ui.black.button').click(function () {$('#modal-list').modal('hide')})
        })
        break
      case 'contents':
        this.contents.getShow(id)
        .then( () => this.renderShowContent(id))
        $('#content-modal').modal('show')
        break
      case 'new':
        console.log(this)
        this.renderNewContentForm()
        break
    }

    $('#modal-list').modal('show')

  }

  renderTopics () {
    this.listContainer.innerHTML = this.topics.render()
  }

  renderShowTopic (id) {
    this.modalContainer.innerHTML = this.topics.renderShow(id)
  }

  renderSubtopics () {
    this.listContainer.innerHTML = this.subtopics.render()
  }

  renderShowSubtopic (id) {
    this.modalContainer.innerHTML = this.subtopics.renderShow(id)
  }

  renderShowContent (id) {
    this.contentModal.innerHTML = this.contents.renderShow(id)
  }

  renderNewContentForm () {
    this.contentModal.innerHTML = this.contents.renderForm()
    $('#content-modal').modal('show')
  }
}
