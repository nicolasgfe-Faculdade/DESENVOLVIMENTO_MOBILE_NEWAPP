import { Image, Text, View, Pressable} from "react-native"
import { NewsItemProps } from "./interface"
import styles from "./Styles"
import { memo } from "react"
import { dateUtils } from "../../../../utils/date"
import { useNavigation } from "@react-navigation/native"
import { AppNavigatorProps } from "../../../../navigation/app"

const NewsItem = ({ article }: NewsItemProps) => {

    const navigator = useNavigation<AppNavigatorProps>()

    const openDetails = () => {
        navigator.navigate('Details', {article})
    }

    return (
        <Pressable style={styles.container} onPress={openDetails}>
            
            {article.urlToImage ?             
                <Image source={{ uri: article.urlToImage }} 
                    style={styles.cover}/>
                : null
            }
            <Text style={styles.title}>{article.title}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.source}>{article.source.name}</Text>
                <Text style={styles.date}>
                    {dateUtils.formatDate(article.publishedAt)}
                </Text>
            </View>
        </Pressable>
    )
}

export default memo(NewsItem)
