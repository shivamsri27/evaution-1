let arr = JSON.parse(localStorage.getItem("products")) || []

arr.map(function(e){
    let box = document.createElement("div");
    let image = document.createElement("img")
    image.src = e.image;
    image.setAttribute("class","pic")
    let price = document.createElement("h3")
    price.innerText = e.price;
    let type =document.createElement("h2")
    type.innerText = e.type;
    let desc = document.createElement("h3")
    desc.innerTex = e.desc;
    let button = document.createElement("button")
    button.innerText="Removed Product"
    button.setAttribute("id","remove_product")

    box.append(image,price,type,desc,button)
    document.querySelector("#all_products").append(box);
    button.addEventListener("click", function(){masai(arr,e)})
});

function masai(arr,e){
    let show = arr.indexOf(e)
    console.log(show)
    arr.splice(show,1)
    localStorage.setItem("products",JSON.stringify(arr))
}

let btn = document.getElementById("add_product");
btn.addEventListener("click",function(){myfun()})

function myfun()
{
    window.location = "index.html"
}

