
var url = 'http://ttie-env.eba-9cjewynp.ap-southeast-2.elasticbeanstalk.com'

function login() {

    var username = $( "#loginFormEmail").value;
    var password = $( "#loginFormPassword").value;

    //var username = document.getElementById("loginFormEmail");
    //var password = document.getElementById("loginFormPassword"); 

    console.log(username)
    console.log(password)

    
    $.ajax({
        url: this.url + '/api/get/' + username+ '/' + password,
        
        success:function(data) {
            console.log(data)
            var para = '';
            let div = $("#login2")
            
            if (username.localeCompare(data[0].Name) && password.localeCompare(data[0].id)) {
                para = '<p>(good)</p>'
            } else {
                para = '<p>sorry wrong</p>'
            }
            div.empty()  
            div.append(para)
            console.log(div)
        }
    })

}