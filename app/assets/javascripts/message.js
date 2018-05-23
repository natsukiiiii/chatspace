$(document).on("turbolinks:load", function(){
      function buildHTML(message){
        if (message.image.url) {
          var img = `<img src="${message.image.url}">`
        } else {
          var img = ""
        }
          var html = `<div class="message">
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
                      <div class="lower-message__image">                    ${img}
                      </div>
                      </div>`
              return html;
            }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      console.log(message);


      var html = buildHTML(message);
      $('.messages').append(html)
      $(".lower-message__content").val("")
      $('#new_message')[0].reset()

      // $('.lower-meesage').click(function() {

      $('.chatpage__talk-page').animate({scrollTop: $('.chatpage__talk-page')[0].scrollHeight}, 'fast')
    // })
    })
    .fail(function(){
      alert('error');
    })
    return false;
  })
})
