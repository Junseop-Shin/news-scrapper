import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import Webview from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { clipNewsItem } from '../actions/news';
import { Spacer } from '../components/Spacer';
import { Header } from '../components/header/Header';

export const NewsDetailScreen = () => {
    const navigation = useNavigation();
    const routes = useRoute();
    const dispatch = useDispatch();

    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, [])

    const onPressFavorite = useCallback(() => {
        dispatch(clipNewsItem(routes.params.newsItem))
    }, [])

    const isClipped = useSelector((state) => state.news.favoriteNews.filter((item) => item.link === routes.params.newsItem.link)).length > 0;

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Button iconName='arrow-back' onPress={onPressBack} />
                    <Spacer horizontal space={12} />
                    <View style={{ maxWidth: 200 }}>
                        <Header.Title title='NEWS_DETAIL'></Header.Title>
                    </View>
                </Header.Group>
                <Header.Button iconName={isClipped ? 'heart' : 'heart-outline'} onPress={onPressFavorite} />
            </Header>
            <Webview
                style={{ flex: 1 }}
                source={{ uri: routes.params.newsItem.link }}
            />
        </View>
    )
}