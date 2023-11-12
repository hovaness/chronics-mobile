import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"
import ICategory from "./models/ICategory"
import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    Root: NavigatorScreenParams<TabStackParamList>,
    Category: ICategory,
}

export type TabStackParamList = {
    Home:undefined,
    Account: undefined,
    Shop: undefined,
}

export type RootScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type CategoryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type CategoryScreenRouteProp = RouteProp<RootStackParamList, 'Category'>;