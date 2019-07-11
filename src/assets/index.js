import { StyleSheet, Dimensions } from "react-native";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({


    screenView: { 
        backgroundColor: 'blue',
        height: DIMENSION_HEIGHT,
        width: DIMENSION_WIDTH, 

    }




});
