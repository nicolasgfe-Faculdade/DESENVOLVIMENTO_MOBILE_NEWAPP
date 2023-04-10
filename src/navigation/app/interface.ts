import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { DetailsNewsRouteProp, DetailsNewsScreenParams } from "../../screen/details/interface"

export type AppStackParamList = {
    List: undefined,
    Details: DetailsNewsScreenParams,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>
