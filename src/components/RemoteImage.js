import React from ' react';
import { Image as RNImage } from 'react-native/types';

export const RemoteImage = (props) => {
    return (
        <RNImage
            source={{ uri: props.url }}
            style={[props.style, { width: props.width, height: props.height }]}
        />
    )
}

Typography.PropTypes = {
}