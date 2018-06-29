console.log('hello  too outside post request');

// $(document).ready(function add_to_cart()
//          { console.log('hello outside post request');
//             $.post("/cart", {iid:2}, function (data, status) {
//                      console.log('request succedded ' +status+data)
//             });
//         })
function add_to_cart(id)
{ console.log('hello outside post request');
    $.post("/cart", {iiid:id}, function (data, status) {
        //console.log('request succedded ' +status+data)
        console.log('request succedded ------------------' +status)
       console.log(status+'iiiiiiiiiyyyyyyyyyyyyyyyyiiiiiiiiiiii')
        if(status)
            location.replace("http://localhost:3030/login")
    });
}