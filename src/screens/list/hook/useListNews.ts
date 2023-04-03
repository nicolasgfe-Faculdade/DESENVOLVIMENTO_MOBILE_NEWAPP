import { useEffect, useState } from "react"
import { Article } from "../../../data/model"
import { NewsService } from "../../../data/service"
import { UseListNewsResult } from "./interface"

const useListNews = (): UseListNewsResult => {
  const [isLoading, setIsLoading] = useState(false)
  const[articles, setArticles] = useState<Article[]>([])

  const getHeadLines = async (): Promise<Article[]> => {
    setIsLoading(true)
    const result = await NewsService.getHeadlines()
    setIsLoading(false)

    return result
  }

  useEffect(() => {
    const loadHeadLines = async () => {
      setIsLoading(true)
      const result = await getHeadLines()
      setIsLoading(false)
      setArticles(result)
    }

    loadHeadLines()

  }, [])

  return {
    isLoading,
    articles
  }
}
export default useListNews
