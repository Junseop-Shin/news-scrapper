import { Dimensions, View } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { Button } from "./Button";
import { Icon } from "./Icons";
import { Spacer } from "./Spacer";
import { Typography } from "./Typography";

const { width } = Dimensions.get('window');

export const HeaderWithoutCompound = (props) => {
    return (
        <SafeAreaInsetsContext.Consumer>
            {insets => (
                <View style={{ paddingTop: insets.top }}>

                    <View style={{
                        width: width,
                        height: 56,
                        flexDirection: 'row',
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1
                    }}>
                        <Spacer horizontal={true} space={12} />
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            {props.leftIcon && (
                                <Button onPress={props.leftIcon.onPress}>
                                    <Icon iconName={props.leftIcon.iconName} size={28} />
                                </Button>
                            )}
                            <Typography fontSize={18}>{props.title}</Typography>
                        </View>
                        <Spacer horizontal={true} space={12} />
                    </View>
                </View>
            )}
        </SafeAreaInsetsContext.Consumer>
    )
}