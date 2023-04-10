import { FlatList, ListRenderItemInfo } from "react-native"
import { Article } from "../../data/model"
import { NewsItem } from "./components/item"
import { LoaderIndicator } from "./components/loader"
import useListNews from "./hook/useListNews"
import { useCallback } from "react"

const ListNews = () => {

    const { isLoading, articles } = useListNews()

    const renderArticle = useCallback(({ item }: ListRenderItemInfo<Article>) =>
        <NewsItem article={item} />, [])
    const newsKeyExtractor = (_: Article, index: number) => index.toString()

    if (isLoading) {
        return <LoaderIndicator />
    }

    return (
        <FlatList 
            data={articles}
            renderItem={renderArticle}
            keyExtractor={newsKeyExtractor}
        />
    )
}

export default ListNews