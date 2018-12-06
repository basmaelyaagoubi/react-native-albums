// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component called with a prop's object that comes from the parent
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headerText} </Text>
        </View>
    );
};

// it consists of javascrpit objects that define multiple styles
const styles = {
    /* Flexbox is a referrence on how we will position elements, 
    it's like a css positionning technology
    *For vertical positionning :
        - justifyContent: 'felx-start' : like the default view
        - justifyContent: 'felx-end' : put it at the end of the view on the left side
        - justifyContent: 'center' 
    *For horizental positionning :
        - alignItems: 'flex-start' : defaut view (positioned on the left side)
        - alignItems: 'flex-end' : defaut view (positioned on the left side)
        - alignItems: 'center'  
    */
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTOP: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20 
    }
};

// make the component available to other parts of the app
export { Header };
