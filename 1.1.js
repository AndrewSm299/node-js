/**
*
* @param {String} id of  the product
* @param {String} name name of the product
* @param {String} description description of the product
* @param {Number} price price of the product
* @param {String} brand barnd of the product
* @param {Array.<string>} sizes sizes
* @param {String} activesizes activesizes
* @param {Integer} quantity quantity
* @param {Date(YYYY-MM-dd hh:mm:ss)} date date in format YYYY-MM-dd hh:mm:ss
* @param {Array.<object>} reviews users reviews
* @param {Array.<string>} images images
* @param {String} r_id review's id
* @param {String} author aurthor
* @param {date(YYYY-MM-dd hh:mm:ss)} r_date date of the review
* @param {String} r_comment commnet on the product
* @param {Array.<number>} rating rating of the product
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
    this.images = images,
    this.reviews = reviews

    this.reviews = function reviews(r_id, author, r_date, r_comment, rating){
        this.id = r_id,
        this.author = author,
        this.date = r_date,
        this.comment = r_comment,
        this.rating = rating
    },

    function getid() {
        return this.ID
    },
    function setnewid(newid){
        this.ID = newid
    }, 

    function getname() {
        return this.name
    },
    function setnewname(newname){
        this.name = newname
    },

    function getdescription() {
        return this.description
    },
    function setnewdescription(newdescription){
        this.description = newdescription
    },

    function getprice() {
        return this.price
    },
    function setnewprice(newprice){
        this.price = newprice
    },

    function getbrand() {
        return this.brand
    },
    function setnewbrand(newbrand){
        this.brand = newbrand
    },

    function getsizes() {
        return this.sizes
    },
    function setnewsizes(newsizes){
        this.sizes = newsizes
    },

    function getactivesizes() {
        return this.activesizes
    },
    function setnewactivesizes(newactivesizes){
        this.activesizes = newactivesizes
    },

    function getquantity() {
        return this.quantity
    },
    function setnewquantity(newquantity){
        this.quantity = newquantity
    },

    function getdate() {
        return this.date
    },
    function dsetnewdate(newdate){
        this.date = newdate
    },

    function getimages() {
        return this.images
    },
    function setnewimages(newimages){
        this.images = newimages
    },



    function getReviewByID(rev_id){
        return this.reviews.find(e => e.id === rev_id);
    },

    function getimage(image_key){
        if(image_key === 'undefined' || image_key === null){
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

    function getAverageRating(reviews){
        averagerating = {service: 0, price: 0, value: 0, quality: 0}
        for(let i = 0; i < this.reviews.rating.length; i++){
            
        }
        return averagerating
    }

}
