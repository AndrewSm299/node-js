/**
 *
 * @param {String} id of  the product
 * @param {String} name of the product
 * @param {String} description of the product
 * @param {Number} price of the product
 * @param {String} brand of the product
 * @param {Array.<string>} sizes of the product
 * @param {String} activesizes of the product
 * @param {Integer} quantity of the product
 * @param {Array.<object>} reviews on the product
 * @param {Array.<string>} images of the products
 *
*/

function Product(id, name, description, price, brand, sizes, activesize, quantity, date, images, reviews){
    this.ID = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.brand = brand,
    this.sizes = sizes,
    this.activesize = activesize,
    this.quantity = quantity,
    this.date = date,
    this.images = images,
    this.reviews = reviews,

    this.getID = () =>  this.ID
    this.setID = (id) => this.ID = id 

    this.getName = () => this.name
    this.setName = (name) => this.name = name

    this.getDescription = () => this.description
    this.setDescription = (description) => this.description = description

    this.getPrice = () => this.price
    this.setPrice = (price) => this.price = price

    this.getBrand = () => this.brand
    this.setBrand = (brand) => this.brand = brand

    this.getSizes = () => this.sizes
    this.setSizes = (sizes) => this.sizes = sizes

    this.getActiveSizes = () => this.activesizes
    this.setActiveSizes = (activesizes) => this.activesizes = activesizes

    this.getQuantity = () => this.quantity
    this.setQuantity = (quantity) => this.quantity = quantity

    this.getReviews = () => this.reviews
    this.setReviews = (review) => this.reviews = review

    this.getDate = () => this.date
    this.setDate = (date) => this.date = date

    this.getImages = () => this.images
    this.setImage = (images) => this.images = images

    this.getReviewByID = (id) => this.getReviews.find(review => review.id === id),

    this.getImage = (image_key) => {
        if(image_key === 'undefined' || image_key === null || image_key === NaN){
            return this.image[0]
        }
        else{
            return this.image.find(e => e.image === image_key)
        }
    },

    this.addSize = (size_new) => this.sizes = sizes.push(size_new)
    
    this.deleteSize = (size_key) => delete this.sizes.find(e => e.sizes === size_key)

    this.addReview = (newreview) => this.reviews.push(newreview)

    this.deleteReview = (rev_id) => delete this.reviews.find(reviews => reviews.ID === rev_id),

    this.getAverageRating = () => {
        averagerating = {service: 0, price: 0, value: 0, quality: 0}
        let a = 0
        for(let i = 0; i < this.reviews.rating.length; i++){
            a += this.reviews.rating.service[i]
        }
        averagerating.service = a / this.reviews.rating.length
        a = 0

        for(let i = 0; i < this.reviews.rating.length; i++){
            a += this.reviews.rating.price[i]
        }
        averagerating.price = a / this.reviews.rating.length
        a = 0

        for(let i = 0; i < this.reviews.rating.length; i++){
            a += this.reviews.rating.value[i]
        }
        averagerating.value = a / this.reviews.rating.length
        a = 0

        for(let i = 0; i < this.reviews.rating.length; i++){
            a += this.reviews.rating.quality[i]
        }
        averagerating.quality = a / this.reviews.rating.length

        return averagerating
    }

}
/** 
 * 
 * @param {String} r_ID review's id
 * @param {String} author author
 * @param {String} comment on the product
 * @param {Array.<number>} rating of the product
 * 
*/
function Reviews(r_ID, author, date, comment, rating){
    this.ID = r_ID,
    this.author = author,
    this.date = date,
    this.comment = comment,
    this.rating = rating

    this.setID = (ID) => this.ID = ID
    this.getID = () => this.ID

    this.setAuthor = (author) => this.author = author
    this.getAuthor = () => this.author

    this.setDate = (date) => this.date = date
    this.getDate = () => this.date = date

    this.setComment = (comment) => this.comment = comment
    this.getComment = () => this.comment

    this.setRating = (rating) => this.rating = {'service': rating[0], 'price': rating[1], 'value': rating[2], 'quality': rating[3]}
    this.getRating = () => this.rating
}

function searchProduct(products, search){

}

function sortProducts(products,sorRule){

}
