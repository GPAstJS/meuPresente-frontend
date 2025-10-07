import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { NotFound } from "./pages/not-found";
import { EditProfile } from "./pages/edit-profile";
import { EventForm } from "./pages/event-form";
import { ThemeWebsite } from "./pages/theme-website";
import { ThemeChooser } from "./pages/theme-chooser";
import { EventSelect } from "./pages/event-select";
import { MyWallet } from "./pages/my-wallet";
import { ForgotPassword } from "./pages/forgot-password";
import { ResetPassword } from "./pages/reset-password";
import { MyEvents } from "./pages/my-events";
import { Home } from "./pages/home";

/* Trocar para page com cada tema carregado */
// import { TemplateCasamento } from "./components/TemplateCasamento";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/select-event" element={<EventSelect />} />
                <Route path="/event-form" element={<EventForm />} />
                <Route path="/theme-chooser" element={<ThemeChooser />} />
                {/* <Route path="/teste" element={<ThemeChooser />} /> */}

                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/user-profile" element={<EditProfile />} />
                <Route path="/my-wallet" element={<MyWallet />} />
                <Route path="/my-events" element={<MyEvents />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
