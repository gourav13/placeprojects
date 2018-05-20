
function add_to_cart(idi)
        {
            $.post("/cart", {iid:idi}, function (data, status) {
                    console.log('request succedded ' +status+data)
            });
        }
