import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/Routes";
import MainLayout from "./commonComponents/MainLayout";

import "./styles/index.scss";

import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <MainLayout>
                <AppRoutes />
            </MainLayout>
        </Provider>
    </BrowserRouter>
);

