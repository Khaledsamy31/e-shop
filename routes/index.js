const categoryRoute = require("./categoryRoute")
const subCategoryRoute = require("./subCategoryRoute")
const brandRoute = require("./brandRoute")
const productRoute = require("./productRoute")
const userRoute = require("./userRoute")
const authRoute = require("./authRoute")
const reviewRoute = require("./reviewRoute")
const wishListRoute = require("./wishListRoute")
const addressRoute = require("./addressRoute")
const couponsRoute = require("./couponRoute")
const cartRoute = require("./cartRoute")
const orderRoute = require("./orderRoute")

const mountRoutes = (app)=>{

    app.use("/api/v1/categories",categoryRoute)
    app.use("/api/v1/subcategories",subCategoryRoute)
    app.use("/api/v1/brands",brandRoute)
    app.use("/api/v1/products",productRoute)
    app.use("/api/v1/users",userRoute)
    app.use("/api/v1/auth",authRoute)
    app.use("/api/v1/reviews",reviewRoute)
    app.use("/api/v1/wishlist",wishListRoute)
    app.use("/api/v1/addresses",addressRoute)
    app.use("/api/v1/coupons",couponsRoute)
    app.use("/api/v1/cart",cartRoute)
    app.use("/api/v1/orders",orderRoute)
}

module.exports = mountRoutes