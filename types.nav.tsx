import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"
import ICategory from "./models/ICategory"
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    Root: undefined,
    Home: undefined
    Category: ICategory,
}
  
export type CategoryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type CategoryScreenRouteProp = RouteProp<RootStackParamList, 'Category'>;