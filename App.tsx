import { AppNavigator } from "./src/navigation/app"
import { NavigationContainer } from "@react-navigation/native"

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
}
export default App
