import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';

export const Typography = (props) => {
    return (
        <RNText style={{
            color: props.color,
            fontSize: props.fontSize,

        }}
            numberOfLines={props.numberOfLines}
        >
            {props.children}
        </RNText>
    )
}

Typography.prototype = {
    color: PropTypes.string,
    fontSize: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
}