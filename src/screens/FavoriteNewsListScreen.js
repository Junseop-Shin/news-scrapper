import { View } from "react-native"
import { Header } from '../components/header/Header'

export const FavoriteNewsListScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title={'FAVORITE_NEWS_LIST'}></Header.Title>
            </Header>
        </View>
    )
}