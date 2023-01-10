let id = prompt("id")
let name = prompt("name")
let descr = prompt("description")
let price = prompt("price")
let brand = prompt("brand")
let sizes = prompt("sizes avaliable")
let actives = prompt("active size")
let quantity = prompt("quantity")
let image = []
let i = 0
while(true){
    image[i] = prompt("your image, enter \"exit\" if you want to finish with images")
    if(image[i] == "exit"){
        image.pop()
        break
    }
    i++
}

function product(id, name, descr, price, brand, sizes, actives, quantity, image){
    this.ID = id,
    this.name = name,
    this.description = descr,
    this.price = price,
    this.brand = brand,
    this.sizes = sizes,
    this.activesize = actives,
    this.quantity = quantity,
    this.date = new Date(),
    this.images = image
    alert(this.date)
    alert(image)
}

product(id, name, descr, price, brand, sizes, actives, quantity, image)