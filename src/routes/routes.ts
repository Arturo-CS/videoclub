import ClientLayout from "../layouts/ClientLayout";
import CatalogPage from "../pages/CatalogPage";
import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ShowPage from "../pages/ShowPage";


const routes = [
    {
        path: '/',
        layout: ClientLayout,
        page: HomePage,
    },
    {
        path: '/login',
        layout: ClientLayout,
        page: LoginPage,
    },
    {
        path: '/catalog',
        layout: ClientLayout,
        page: CatalogPage,
    },
    {
        path: '/catalog/show/:id',
        layout: ClientLayout,
        page: ShowPage,
    },
    {
        path: '/catalog/create',
        layout: ClientLayout,
        page: CreatePage,
    },
    {
        path: '/catalog/edit/:id',
        layout: ClientLayout,
        page: EditPage,
    },
    {
        path: '/logout',
        layout: ClientLayout,
        page: "logout",
    },
];

export default routes;