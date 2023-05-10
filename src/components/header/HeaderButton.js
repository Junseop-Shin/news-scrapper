import { Button } from '../Button';
import { Icon } from '../Icons';

export const HeaderButton = (props) => {
    return (
        <Button onPress={props.onPress}>
            <Icon name={props.iconName} size={28} color='black' />
        </Button>
    )
}