

// Answer1

const avg = items.reduce(function(a,b){
    return a + b.price
},0) /items.length

const answer1 = `The average price is $${avg.toFixed(2)}`

document.querySelector("#answer1").innerHTML = answer1




//Answer2

const range = items.filter(item => item.price >= 14 && item.price <= 18);

document.querySelector("#answer2").innerHTML = JSON.stringify(range)





//Answer3

const gbp_items = items.filter(item => item.currency_code == "GBP");

document.querySelector("#answer3").innerHTML = gbp_items[0].title + ': $' + gbp_items[0].price





//Answer4
document.querySelector("#answer4").innerHTML = '<ul>';
items.forEach(function(item, i){
    wood_item = item.materials.find(function(thing){
        return thing == 'wood';
    });

    if(wood_item)
        document.querySelector("#answer4").innerHTML += '<li>' +item.title + '</li>';
});
document.querySelector("#answer4").innerHTML += '</ul>';





//Answer5
document.querySelector("#answer5").innerHTML = '<ul>';
items.forEach(function(item, i){
    let item_count = item.materials.length
    if(item_count > 7){
        document.querySelector("#answer5").innerHTML += '<b>Name:</b> ' +item.title + '<br>';
        document.querySelector("#answer5").innerHTML += '<b># of Items:</b> ' +item_count + '<br>';
        document.querySelector("#answer5").innerHTML += '<ul id="list_'+i+'">';
        document.querySelector("#answer5").innerHTML += '</ul>';
        item.materials.forEach(function(material, id){
            document.querySelector("#list_"+i).innerHTML += '<li>' + material + '</li>';
        });
    }
});
document.querySelector("#answer5").innerHTML += '</ul>';







//Answer6


const seller_items = items.filter(item => item.who_made == "i_did")
console.log(seller_items.length);

//const item_sellers 

// who_made

//document.querySelector("#answer6").innerHTML =
