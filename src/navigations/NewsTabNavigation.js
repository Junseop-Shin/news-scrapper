import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcon } from '../components/TabIcon';
import { FavoriteNewsListScreen } from "../screens/FavoriteNewsListScreen";
import { NewsListScreen } from "../screens/NewsListScreen";

const BottomTab = createBottomTabNavigator();

export const NewsTabNavigation = () => {
    return (
        <BottomTab.Navigator
            screenOptions={({ routes }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    const getIconName = () => {
                        if (routes?.name === 'FavoriteNewsList') {
                            return 'star';
                        }
                        return 'home';
                    }
                    const iconName = getIconName();
                    return (
                        <TabIcon iconName={iconName} iconColor={color} />
                    )
                }
            })}
        >
            <BottomTab.Screen name="NewsList" component={NewsListScreen}></BottomTab.Screen>
            <BottomTab.Screen name="FavoriteNewsList" component={FavoriteNewsListScreen}></BottomTab.Screen>
        </BottomTab.Navigator>
    )
}