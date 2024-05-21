import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import HookPage from "../pages/HookPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/hook/:id" element={<HookPage />} />
    </Routes>
  );
}
