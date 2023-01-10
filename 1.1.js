/**
*
* @param {Stribg} id id of  the product
* @param {String} name name of the product
* @param {String} description description of the product
* @param {Number} price price of the product
* @param {String} brand barnd of the product
* @param {Array.<string>} sizes sizes
* @param {String} activesizes activesizes
* @param {Integer} quantity quantity
* @param {Date {date(YYYY-MM-dd hh:mm:ss)}} date date in format YYYY-MM-dd hh:mm:ss
* @param {Array.<object>} reviews users reviews
* @param {Array.<string>} images images
*
*/

function product(id, name, description, price, brand, sizes, activesize, quantity, date, reviews, images){
    this.ID = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.brand = brand,
    this.sizes = sizes,
    this.activesize = activesize,
    this.quantity = quantity,
    this.date = date,
    this.images = images
}

// i've deleted some trash code here so now it looks a little better
