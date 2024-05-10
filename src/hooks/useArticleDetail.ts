import { useEffect, useState } from "react";
import { IArticle } from "../models/article";
import { getArticleAPI } from "../services/articles";

export const useArticleDetail = (id?: string) => {
    const [loading, setLoading] = useState(false);
    const [article, setArticle] = useState<IArticle | undefined>(undefined);

    const getArticleDetail = async () => {
        try {
            if (!id) return;
            setLoading(true);
            const { data } = await getArticleAPI(id);
            setArticle(data);
        } catch (error) {
            console.log("error :>> ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getArticleDetail();
    }, [id]);

    return {
        loading,
        article,
    };
};
