import { Button } from '../Button';
import { Icon } from '../Icons';

export const HeaderButton = (props) => {
    return (
        <Button onPress={props.onPress}>
            <Icon iconName={props.iconName} iconSize={28} />
        </Button>
    )
}