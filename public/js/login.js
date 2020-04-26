
var url = 'http://ttie-env.eba-9cjewynp.ap-southeast-2.elasticbeanstalk.com'

function login() {

    var username = $('#loginFormEmail').val();
    var password = $('#loginFormPassword').val();

    //var username = document.getElementById("loginFormEmail");
    //var password = document.getElementById("loginFormPassword"); 

    console.log(username)
    console.log(password)
    var data = {"username": username, "password": password};
    

    $.ajax({
        url: 'login',
        type: 'POST',
        data: data,
        success: function(data, status) {
            if (status == 'success') {
                location.href = 'home';
            }
        },
        error: function(data, status, e) {
            if (status == 'error') {
                location.href = ''
            }
        }
        
    });

    // $.ajax({
    //     url: 'login',
    //     type: 'POST',
    //     data: data,
        
    //     success:function(data, status) {
    //         console.log(data)
    //         var para = '';
    //         let div = $("#login2")
            
    //         if (username.localeCompare(data[0].Name) && password.localeCompare(data[0].id)) {
    //             para = '<p>(good)</p>'
    //         } else {
    //             para = '<p>sorry wrong</p>'
    //         }
    //         div.empty()  
    //         div.append(para)
    //         console.log(div)
    //     }
    // })

}