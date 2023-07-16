import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "./routeNames";

import TodoPageContainer from "../pages/TodoListPage/containers/TodoPageContainer";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.TODO_LIST} element={<TodoPageContainer /> } />

            <Route path="*" element={ <Navigate to={ROUTES.TODO_LIST} /> } />
        </Routes>
    );
};

export default AppRoutes;