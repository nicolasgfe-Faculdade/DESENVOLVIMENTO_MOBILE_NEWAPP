import { RouteProp } from "@react-navigation/native"
import { Article } from "../../data/model"
import { AppStackParamList } from "../../navigation/app/interface"

export type DetailsNewsScreenParams = {
    article: Article,
}

export type DetailsNewsRouteProp = RouteProp<AppStackParamList, 'Details'>
