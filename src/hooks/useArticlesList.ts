import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../hooks";
import { IArticle } from "../models/article";
import {
    getListArticlesAction,
    selectArticlesFromStore,
} from "../redux/article";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { LIMIT_ARTICLE_ITEMS } from "../configs";

export const useArticlesList = () => {
    const dispatch = useAppDispatch();
    const articlesState = useAppSelector(selectArticlesFromStore);

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [isHasMore, setIsHasMore] = useState(true);
    const [searchValue, setSearchValue] = useState<string>("");
    const [total, setTotal] = useState(0);

    const currentPage = useRef(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const searchValueDebounce = useDebounce(searchValue, 500);

    // get all article or filter by search value to store in FE side
    const getData = async () => {
        try {
            setLoading(true);
            currentPage.current = 0;
            const list = await getListArticlesAction(dispatch, searchValueDebounce);
            await onSplitData({
                isReset: true,
                dataRaw: list,
            });
            setTotal(list.length);
            scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        } catch (error) {
            console.log("error :>> ", error);
        } finally {
            setLoading(false);
        }
    };

    // dont have BE => need to fake data in FE side
    const getDataByPageAndLimit = (dataRaw = articlesState) => {
        // sleep 1s to fake loading
        return new Promise<IArticle[]>((resolve) => {
            setTimeout(() => {
                const data = dataRaw.slice(
                    currentPage.current * LIMIT_ARTICLE_ITEMS,
                    currentPage.current * LIMIT_ARTICLE_ITEMS + LIMIT_ARTICLE_ITEMS
                );
                resolve(data);
            }, 500);
        });
    };

    // split data to show in FE side for ifinite scroll
    const onSplitData = async ({
                                   isReset,
                                   dataRaw,
                               }: {
        isReset?: boolean;
        dataRaw?: IArticle[];
    }) => {
        const newDataPage = await getDataByPageAndLimit(dataRaw);
        setIsHasMore(() => newDataPage.length === LIMIT_ARTICLE_ITEMS);
        if (isReset) {
            setArticles(newDataPage);
        } else {
            setArticles((prev) => [...prev, ...newDataPage]);
        }
    };

    useEffect(() => {
        getData();
    }, [searchValueDebounce]);

    return {
        articles,
        loading,
        setLoading,
        isHasMore,
        onGetMore: onSplitData,
        refeshData: getData,
        searchValue,
        setSearchValue,
        currentPage,
        total,
        scrollRef,
    };
};
