import { createBrowserRouter } from "react-router-dom";

import Home from "client/home/views/Index";
import Product from "client/product/views/Index";
import Login from "auth/Login";
import Register from "auth/Register";
import ClientLayout from "client/common/Layout"
import AdminLayout from "admin/common/Layout"
import User from "admin/user/views/Index"
import CreateUser from "admin/user/views/Create"
import Book from "admin/book/views/Index"
import CreateBook from "admin/book/views/Create"
import Banner from "admin/banner/views/Index"
import CreateBanner from "admin/banner/views/Create"
import Category from "admin/category/views/Index"
import CreateCategory from "admin/category/views/Create"
import Author from "admin/author/views/Index"
import CreateAuthor from "admin/author/views/Create"
import CreateCoupon from "admin/coupon/views/create"
import Coupon from "admin/coupon/views/index"



const router = createBrowserRouter([
    {
        element: <ClientLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "product",
                element: <Product />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "",
                element: <User />
            },
            {
                path: "user",
                element: <User />
            },
            {
                path: "user/create",
                element: <CreateUser />
            },
            {
                path: "book",
                element: <Book />
            },
            {
                path: "book/create",
                element: <CreateBook />
            },
            {
                path: "banner",
                element: <Banner />
            },
            {
                path: "banner/create",
                element: <CreateBanner />
            },
            {
                path: "category",
                element: <Category />
            },
            {
                path: "category/create",
                element: <CreateCategory />
            },
            {
                path: "author",
                element: <Author />
            },
            {
                path: "author/create",
                element: <CreateAuthor />
            },
            {
                path: "coupon",
                element: <Coupon />
            },
            {
                path: "coupon/create",
                element: <CreateCoupon />
            }

        ]
    }
]);

export default router;