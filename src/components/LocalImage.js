import { Image as RNImage } from 'react-native/types';

export const LocalImage = (props) => {
    return (
        <RNImage
            source={props.localAsset}
            style={[props.style, { width: props.width, height: props.height }]}
        />
    )
}
