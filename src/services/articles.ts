import { axiosClient } from "../libs";
import { ICreateArticle } from "../models/article";

const PREFIX = "/articles";

export const getListArticlesAPI = async () => {
  return axiosClient.get(`${PREFIX}`);
};

export const getArticleAPI = async (id: string) => {
  return axiosClient.get(`${PREFIX}/${id}`);
};

export const createArticleAPI = async (data: ICreateArticle) => {
  return axiosClient.post(`${PREFIX}`, data);
};

export const updateArticleAPI = async (id: string, data: ICreateArticle) => {
  return axiosClient.put(`${PREFIX}/${id}`, data);
};

export const deleteArticleAPI = async (id: string) => {
  return axiosClient.delete(`${PREFIX}/${id}`);
};
