
// var myInit = { method: 'POST',
//                headers: {'Content-Type': 'application/json'},
// body:  JSON.stringify( {subtopic:{name:"subtopic name",topic_id:1}} ) };
//
// fetch('http://localhost:3000/api/v1/topics/1/subtopics',myInit).then( resp => resp.json() ).then( data => console.log(data) )


fetch('http://localhost:3000/api/v1/topics').then( resp => resp.json() ).then( data => document.getElementById('ui-1').innerHTML = test(data[0]))


var test = function(data) {
  return (`
    <div class="ui card">
      <div class="image">
        <img src="${data.pic_url}">
      </div>
      <div class="content">
        <a class="header">${data.name}</a>
        <div class="meta">
          <span class="date">${data.subtopics[0].name}</span>
        </div>
        <div class="description">

        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="user icon"></i>
        </a>
      </div>
    </div>
  `)
}
