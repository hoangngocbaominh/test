document.addEventListener("DOMContentLoaded", function(){
    var click = document.querySelector("#enterComment");
    click.addEventListener("click",function(){
        var textInput = document.querySelector('.inputComment').value;
        var item = document.querySelector('.people-ex').cloneNode(true);
        if( textInput == ''){
            return false;
        }else{
            item.querySelector('p').innerHTML = textInput;
            item.classList.remove('people-ex');
            var content = document.querySelector('.contentOfComment');
            // if(content.firstChild != null){
            //     content.insertBefore(item, content.firstChild);
            // }else{
            //     content.appendChild(item); 
            // }
            content.firstChild?content.insertBefore(item, content.firstChild):content.appendChild(item);  
            document.querySelector('.inputComment').value = '';
        }
    })
    var textInput = document.querySelector(".inputComment");
    textInput.addEventListener("keypress", function(e){
        var textInput = document.querySelector('.inputComment').value;
        var item = document.querySelector('.people-ex').cloneNode(true);
        if(e.keyCode == 13){
            if( textInput == ''){
                return false;
            }else{
                item.querySelector('p').innerHTML = textInput;
                item.classList.remove('people-ex');
                var content = document.querySelector('.contentOfComment');
                content.firstChild?content.insertBefore(item, content.firstChild):content.appendChild(item);  
                document.querySelector('.inputComment').value = '';
            }
        }
    })


    // var orders = [
    //     {name: 'A', price: 200},
    //     {name: 'B', price: 250},
    //     {name: 'C', price: 20},
    //     {name: 'D', price: 300}   
    // ];
    // var i = orders.reduce(function(a, b){
    //     console.log(a, b);
    //     return {
    //         name: a.name + b.name,
    //         price: a.price + b.price
    //     }
    // })
    // console.log(i);
//     var number = [1,10,20,6,9];
//     var q = number.sort(function(a,b){
//         console.log(a,b);
//         return b-a;
//     })
//     console.log(q);

//    document.write("aa");
},false)

