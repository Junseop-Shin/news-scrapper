import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native/types';

export const Typography = (props) => {
    return (
        <RNText style={{
            color: props.color,
            fontSize: props.fontSize
        }}>
            {this.props.children}
        </RNText>
    )
}

Typography.PropTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
}