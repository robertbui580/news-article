export interface IArticle {
  id: string;
  publisher: string;
  summary: string;
  title: string;
  createdAt: Date;
}

export interface ICreateArticle {
  publisher: string;
  summary: string;
  title: string;
  createdAt: Date;
}
