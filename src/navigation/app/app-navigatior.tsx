import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailsNews from "../../screens/details/DetailsNews";
import ListNews from "../../screens/list/ListNews";
import { AppStackParamList } from "./interface";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return(
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="Details" component={DetailsNews}/>
      <Stack.Screen name="List" component={ListNews}/>
    </Stack.Navigator>
  )
}
export default AppNavigator
