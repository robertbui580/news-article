import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/Home";
import NoFoundPage from "../pages/NoFoundPage";
import { NewArticle } from "../pages/NewArticle";
import { EditArticle } from "../pages/EditArticle";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-article" element={<NewArticle />} />
        <Route path="/edit-article/:id" element={<EditArticle />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </>
  );
};
