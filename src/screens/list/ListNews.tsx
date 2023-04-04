import { FlatList, ListRenderItemInfo } from "react-native"
import { NewsItem } from "./components/item"
import { LoaderIndicator } from "./components/loader"
import useListNews from "./hook/useListNews"
import { Article } from "../../data/model"

const ListNews = () => {
  const {isLoading, articles} =  useListNews()

  const renderArticle = ({ item }:ListRenderItemInfo<Article>) =>
    <NewsItem article={item}/>

  const newsKetExtractor = (_: Article, index: number) => index.toString()

  if (isLoading) {
    return <LoaderIndicator/>
  }

  return (
    <FlatList
      data={articles}
      renderItem={renderArticle}
      keyExtractor={newsKetExtractor}
    />
  )
}
export default ListNews
