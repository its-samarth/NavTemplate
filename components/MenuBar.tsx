import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Orders from '../screens/Orders';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={HomeScreen} />
      <Drawer.Screen name="Article" component={Orders} />
    </Drawer.Navigator>
  );
}