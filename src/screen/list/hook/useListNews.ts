import { useEffect, useState } from "react";
import { Article } from "../../../data/model";
import { newsService } from "../../../data/service";
import { UseListNewsResult } from "./interface";

const useListNews = (): UseListNewsResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState<Article[]>([])

    const getHeadlines = async (): Promise<Article[]> => {
        const result = await newsService.getHeadlines()
        return result
    }

    useEffect(() => {
        const loadHeadlines = async () => {
            setIsLoading(true)
            const result = await getHeadlines()
            setIsLoading(false)
            setArticles(result)
        }

        loadHeadlines()
    }, [])


    return {
        isLoading,
        articles,
    }
}

export default useListNews