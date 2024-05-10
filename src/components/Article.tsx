import { useNavigate } from "react-router-dom";
import { IArticle } from "../models/article";
import { formatNameToInitials, formatTimeToString } from "../ultils";
import { ModalArticleActions } from "./ModalArticleActions";

interface IProps {
  article: IArticle;
  onClickDelete: () => void;
}

export const Article = ({ article, onClickDelete }: IProps) => {
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/edit-article/${article.id}`);
  };
  return (
    <div className="relative">
      <ModalArticleActions onEdit={onEdit} onDelete={onClickDelete} />
      <article className="rounded-lg bg-white sm:py-3 py-4 px-2 mb-6 shadow-md hover:shadow-xl transform transition-all duration-300 cursor-pointer ease-in-out group">
        <div>
          <div className="m-2">
            <div className="flex items-center">
              <div className="mr-2">
                <div className="rounded-full w-8 bg-slate-300 text-xs h-8 flex items-center justify-center group-hover:shadow-xl">
                  {formatNameToInitials(article.publisher)}
                </div>
              </div>
              <div>
                <p className="text text-gray-700 text-sm font-medium">
                  {article.publisher}
                </p>
                <p className="text-xs text-gray-600">
                  {formatTimeToString(article.createdAt)}
                </p>
              </div>
            </div>
          </div>
          <div className="pl-12 md:pl-10 xs:pl-10">
            <h2 className="text-2xl font-bold mb-2 text-gray-700 leading-7">
              {article.title}
            </h2>
            <div className="border-b my-2 pb-1 flex gap-2 items-center">
              <p className="text-green-700 font-medium text-[13px]">
                1 COMPANY MENTIONED
              </p>
              |
              <p className="font-medium text-[13px]">
                AUTO-SUMMARISED BY SCOUTASIA
              </p>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-600 p-1">{article.summary}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
