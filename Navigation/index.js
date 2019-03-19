import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../Components/HomePage";
import Login from "../Components/Login";

import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import CoffeeCart from "../Components/CoffeeCart";

const ourStack = createStackNavigator(
  {
    CoffeeCartScreen: CoffeeCart,
    LoginScreen: Login,
    CoffeeDetailScreen: CoffeeDetail,
    CoffeeListScreen: CoffeeList
  },
  {
    initialRouteName: "LoginScreen",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    navigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "#ffd1dc"
      },
      headerTextStyle: {
        font: "bold"
      }
    }
  }
);
const AppContainer = createAppContainer(ourStack);

export default AppContainer;
