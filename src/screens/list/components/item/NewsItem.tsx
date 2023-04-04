import { NewsItemProps } from "./interface"
import { View, Image, Text } from "react-native"
import styles from "./styles"
import { dateUtils } from "../../../../utils/date"

const NewsItem = ({ article }: NewsItemProps) => {
  return (
    <View style={styles.constainer}>
      <Image
        source={{ uri: article.urlToImage }}
        style={styles.cover}
      />

      <Text
        style={styles.title}
      >
        {article.title}
      </Text>
      <View
        style={styles.detailContainer}
        >
        <Text
        style={styles.source}
        >
          {article.source.name}
        </Text>
        <Text
          style={styles.date}
        >
          {dateUtils.formatDate(article.publishedAt)}
        </Text>
      </View>
    </View>
  )
}

export default NewsItem
