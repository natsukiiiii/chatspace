$(document).on("turbolinks:load", function(){

  function buildHTML(message){
    var addImage = (message.image.url !== null) ? `<img class = "lower-message__image", src="${message.image.url}">` : ''
      var html = `<div class="message" data-message-id="${message.id}">
                   <div class="upper-message">
                   <div class="upper-message__user-name">
                    ${message.name}
                   </div>
                   <div class ="upper-message__date">
                   ${message.created_at}
                   </div>
                   </div>
                   <p class="lower-meesage">
                   ${message.content}
                   </p>
                   <div class="lower-message__image">
                   ${addImage}
                   </div>
                  </div>`
    return html;
        }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('#new_message')[0].reset()
      $('.chatpage__talk-page').animate({scrollTop: $('.chatpage__talk-page')[0].scrollHeight}, 'fast')
    })
    .fail(function(){
      alert('error');
    })
    return false;
  })

  function getMessage() {
    if (location.pathname.match(/\/groups\/\d+\/messages/)){
    var newMessageId = $('.message').last().data('message-id');
    var url = location.pathname
      $.ajax({
      url: url,
      type: "GET",
      data: {id: newMessageId},
      dataType: 'json'
    })
    .done(function(data) {
      data.forEach(function(message) {
        var html = buildHTML(message);
        $('.messages').append(html);
      })
      $('.chatpage__talk-page').animate({scrollTop: $('.chatpage__talk-page')[0].scrollHeight}, 'swing');
    })
    .fail(function(){
      alert('error');
      $(".chat__form__submitbtn").prop('disabled', false);
    })
  }
}
  setInterval(getMessage, 5000);
})
