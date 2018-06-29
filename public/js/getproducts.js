
 var s="";

$(document).ready(function() {
    $.get('/products',{price:35000,name:'%'}, function (data, success) {
        var i = 0;
        console.log(success + 'checking')
        if (success) {
            console.log(success + data + 'checking')
            for (i; i < data.length; i++) {
                s += '<div class="card text-center mt-4 ml-2" style="display:inline-block;width:200px;">' +
                    '<div class="card-header">' + data[i].pname +
                    '<i  class="fa fa-cart-plus fa-2x" style=" float:right;" aria-hidden="true"  onclick="add_to_cart(' + data[i].id + ')"></i>' +
                    '</div>' +
                    '<div class="card-body">' +
                    '<a class="btn btn-primary">' + data[i].pprice + '</a>' +

                    '</div>'+
                    '</div>'

            }
        }
        else
            s = "not getting any thing"
        $('#products').html(s);
    })
})


$(document).ready(function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function () {s=" "
        output.innerHTML = this.value;
        $.get('/products', {price: this.value,name:$('#myInput').val()+'%'}, function (data, success) {
            var i = 0;
            console.log(success + 'checking')
            if (success) {
                console.log(success + data + 'checking')
                s=" ";
                for (i; i < data.length; i++) {
                    s += '<div class="card text-center mt-4 ml-2" style="display:inline-block;width:200px;">' +
                        '<div class="card-header">' + data[i].pname +
                        '<i  class="fa fa-cart-plus fa-2x" style=" float:right;" aria-hidden="true"  onclick="add_to_cart(' + data[i].id + ')"></i>' +
                        '</div>' +
                        '<div class="card-body">' +
                        '<a class="btn btn-primary">' + data[i].pprice + '</a>' +

                        '</div>' +
                        '</div>'

                }
            }
            else
                s = "not getting any thing"
            $('#products').html(s);
        })
    }
})


 $(document).ready(function() {
$('#myInput').keyup(function () {
         s = " "
        console.log('key are pressed')
        // $('#myDropdown').css("display", "block")
              $.get('/products', {price:$('#myRange').val(), name:$('#myInput').val()+'%'}, function (data, success) {
                 var i = 0;
                 console.log(success+' getting data checking')
                 if (success) {
                     console.log(success+' getting data checking')
                     console.log(success + data + 'checking')
                     s=" ";
                     for (i; i < data.length; i++) {
                         s += '<div class="card text-center mt-4 ml-2" style="display:inline-block;width:200px;">' +
                             '<div class="card-header">' + data[i].pname +
                             '<i  class="fa fa-cart-plus fa-2x" style=" float:right;" aria-hidden="true"  onclick="add_to_cart(' + data[i].id + ')"></i>' +
                             '</div>' +
                             '<div class="card-body">' +
                             '<a class="btn btn-primary">' + data[i].pprice + '</a>' +

                             '</div>' +
                             '</div>'

                     }
                 }
                 else
                     s = "not getting any thing"
                 $('#products').html(s);

                // console.log(s);

         })

     })
 })

