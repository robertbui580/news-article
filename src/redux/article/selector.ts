import { RootState } from "../store";

export const selectArticlesFromStore = (state: RootState) => state.article.list;