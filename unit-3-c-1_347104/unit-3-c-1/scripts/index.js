//store the products array in localstorage as "products"
var arr =  JSON.parse(localStorage.getItem("products")) || []
function products(type,desc,price,image){
    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;
}

function submitProduct(e){
    e.preventDefault()
    let form = document.getElementById("products")
    let type = document.getElementById("type").value;
    let desc = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    
    let p1= new products(type,desc,price,image);
    arr.push(p1);
    console.log(arr)
    localStorage.setItem("products",JSON.stringify(arr))

}
let button1 = document.getElementById("show_products");
button1.addEventListener("click",function(){ myfun()})
function myfun(){
    window.location = "inventory.html"
}