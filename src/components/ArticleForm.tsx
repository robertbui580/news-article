import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IArticle, ICreateArticle } from "../models/article";
import { createArticleAPI, updateArticleAPI } from "../services/articles";
import { articleValidation } from "../validations";
import { Loading } from "./Loading";
import { InputText } from "./form/InputText";
import { InputTextarea } from "./form/InputTextarea";

interface IProps {
  article?: IArticle;
}

export const ArticleForm = ({ article }: IProps) => {
  const isEdit = !!article;

  const [loading, setLoading] = useState(false);

  const initialValues: ICreateArticle = {
    publisher: "",
    summary: "",
    title: "",
    createdAt: new Date(),
  };

  const formik = useFormik<ICreateArticle>({
    initialValues,
    validationSchema: articleValidation,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        if (isEdit) {
          await updateArticleAPI(article.id, values);
          toast("Article updated successfully");
        } else {
          await createArticleAPI({
            ...values,
            createdAt: new Date(),
          });
          toast("Article created successfully");
          formik.resetForm();
        }
      } catch (e: any) {
        console.log("Fail submit :>> ", e.message);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (article) {
      formik.setValues(article);
    }
  }, [article]);

  return (
    <>
      {loading && <Loading />}
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <InputText
              name="title"
              label="Title"
              placeholder="Enter the title of the article"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              msg={formik.touched.title ? formik.errors.title : ""}
            />
            <InputTextarea
              name="summary"
              label="Summary"
              placeholder="Enter the summary of the article"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.summary}
              msg={formik.touched.summary ? formik.errors.summary : ""}
            />
            <InputText
              name="publisher"
              label="Publisher"
              placeholder="Enter the publisher of the article"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.publisher}
              msg={formik.touched.publisher ? formik.errors.publisher : ""}
            />
            <div className="mt-5">
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-green-700 py-3 px-8 text-base font-semibold text-white outline-none"
              >
                {isEdit ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
