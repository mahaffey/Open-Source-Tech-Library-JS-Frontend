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
    this.subtopic_id = 0
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
    this.listContainer.innerHTML = '<img style="width:500px;height:500px;" src="http://i.imgur.com/P9IVqkS.jpg">'
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
    let id
    if (!el.id) {
      while(el.className !== 'ui card' && el.className !== 'ui positive button') {
        el = el.parentNode
      }
      id = el.id.split('-')
      id.push(el.getElementsByClassName('header')[0].text)
    } else {
      id = el.id.split('-')
      id.push(el.innerText.split(' ')[0])
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
        this.subtopic_id = id
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
    setTimeout(()=>{$('#modal-list').modal('show')}, 50)
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
    $('.ui.dropdown').dropdown()
    $('form').submit(this.submitContent.bind(this))
  }

  submitContent() {
    event.preventDefault()

    let new_content = {
      content: {
        title: $('form input.title').val(),
        author: $('form input.author').val(),
        pic_url: $('form input.pic_url').val(),
        link_url: $('form input.link_url').val(),
        description: $('form input.description').val(),
        difficulty:  $('.ui.dropdown').select().first()[0].innerText,
        subtopic_id: this.subtopic_id[1]
      }
    }

    this.contents.postNew(new_content)
    setTimeout(() => {
      this.subtopics.getShow(this.subtopic_id).then(
        () => this.renderShowSubtopic(this.subtopic_id)
      )
    }, 1500)

    //  setTimeout(() => this.renderShowSubtopic(this.subtopic_id), 10000)
  }
}
