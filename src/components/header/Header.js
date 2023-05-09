import { View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer } from "../Spacer";
import { HeaderButton } from "./HeaderButton";
import { HeaderGroup } from "./HeaderGroup";
import { HeaderTitle } from "./HeaderTitle";

export const Header = (props) => {
    const insets = useSafeAreaInsets();
    const { width } = useWindowDimensions();

    return (
        <View style={{ paddingTop: insets.top }}>
            <View style={{
                width: width,
                flexDirection: 'row',
                height: 56,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                alignItems: 'center'
            }}>
                <Spacer horizontal={true} space={12} />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    {props.children}
                </View>
                <Spacer horizontal={true} space={12} />
            </View>
        </View>
    );
}

Header.Title = HeaderTitle;
Header.Button = HeaderButton;
Header.Group = HeaderGroup;