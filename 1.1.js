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
 * @param {String} r_ID review's id
 * @param {String} author author
 * @param {String} comment on the product
 * @param {Array.<number>} rating of the product
 *
*/

let products = function Product(id, name, description, price, brand, sizes, activesize, quantity, date, images, reviews){
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

    this.getID = function getID() {
        return this.ID
    },
    this.setID = function setID(id){
        this.ID = id
    }, 

    this.getName = function getName() {
        return this.name
    },
    this.setName = function setName(name){
        this.name = name
    },

    this.getDescription = function getDescription() {
        return this.description
    },
    this.setDescription = function setDescription(description){
        this.description = description
    },

    this.getPrice = function getPrice() {
        return this.price
    },
    this.setPrice = function setPrice(price){
        this.price = price
    },

    this.getBrand = function getBrand() {
        return this.brand
    },
    this.setBrand = function setBrand(brand){
        this.brand = brand
    },

    this.getSizes = function getSizes() {
        return this.sizes
    },
    this.setSizes = function setSizes(sizes){
        this.sizes = sizes
    },

    this.getActiveSizes = function getActiveSizes() {
        return this.activesizes
    },
    this.setActiveSizes = function setActiveSizes(activesizes){
        this.activesizes = activesizes
    },

    this.getQuantity = function getQuantity() {
        return this.quantity
    },
    this.setQuantity = function setQuantity(quantity){
        this.quantity = quantity
    },

    this.getReviews = function getReviews(){
        return this.reviews
    },
    this.setReviews = function setReviews(review){
        this.reviews = review
    },

    this.getDate = function getDate() {
        return this.date
    },
    this.setDate = function setDate(date){
        this.date = date
    },

    this.getImages = function getImages() {
        return this.images
    },
    this.setImage = function setImages(images){
        this.images = images
    },

    this.getReviewByID = function getReviewByID(rev_id){
        return this.reviews.find(e => e.id === rev_id);
    },

    function getImage(image_key){
        if(image_key === 'undefined' || image_key === null || image_key === NaN){
            return this.image[0]
        }
        else{
            return this.image.find(e => e.image === image_key)
        }
    },

    function addSize(size_new){
        this.sizes = sizes.push(size_new)
    },
    
    function deleteSize(size_key){
        delete this.sizes.find(e => e.sizes === size_key)
    },

    function addReview(newreview){
        this.reviews.push(newreview)
    },

    function deleteReview(rev_id){
        delete this.reviews.find(e => e.id === rev_id);
    },

    function getAverageRating(){
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
