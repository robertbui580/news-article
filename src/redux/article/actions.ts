import { IArticle } from "../../models/article";
import { getListArticlesAPI } from "../../services/articles";
import { AppDispatch } from "../store";
import { setArticles } from "./slice";

export const getListArticlesAction = async (
  dispatch: AppDispatch,
  searchValue?: string
) => {
  const res = await getListArticlesAPI();
  const result = res.data
    .sort((a: IArticle, b: IArticle) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .filter((article: IArticle) => {
      if (!searchValue) return true;
      return (
        article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        article.publisher.toLowerCase().includes(searchValue.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

  dispatch(setArticles(result));
  return result;
};
