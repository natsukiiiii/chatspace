$(document).on("turbolinks:load", function(){
  var search_list = $("#user-search-result");
  function appendUser(user) {
    var html =`<div class="chat-group-user clearfix">
               <p class="chat-group-user__name">
               ${user.name}
               </p>
               <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
               </div>`
    search_list.append(html)
  }
  function appendNoUser(user) {
    var html = `<div class="chat-group-user clearfix">${ user }</div>`
    search_list.append(html);
  }
  $('#user-search-field').on('focus', function() {
    var preInput = $('#user-search-field').val();
    $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();
      if (preInput !== input) {
        $.ajax({
          type:'GET',
          url:'/users',
          data: {keyword: input},
          dataType:'json'
        })
        .done(function(users){
          $("#user-search-result").empty();
          if (users.length !== 0) {
            users.forEach(function(user) {
              appendUser(user);
          });
        }
        else{
          appendNoUser('ユーザー検索に失敗しました')
        }
      })
      .fail(function() {
          alert('error');
        });
        preInput = input
      }
    });
  });
  function addUser(user){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value='${user['userId']}'>
                <p class= 'chat-group-user__name'>${ user['userName'] }</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
      $('#chat-group-users').append(html)
  };

  $("#user-search-result").on("click", ".user-search-add", function(e){
    e.preventDefault();
    $(this).parent().remove();
    var user = $(this).data();
    addUser(user);
  });
  $("#user-search-result").on("click",".user-search-remove", function(e){
    e.preventDefault();
    $(this).parent().remove();
  });
  });
