import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../models/article";

export interface IArticleState {
  list: IArticle[];
}

const initialState: IArticleState = {
  list: [],
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.list = action.payload;
    },
    clearStore: (state) => {
      state.list = [];
    },
  },
});

export const { setArticles, clearStore } = articleSlice.actions;

export default articleSlice.reducer;
