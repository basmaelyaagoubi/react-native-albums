// import libraries for making a component
import React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import { Card, CardSection, Button } from './Index';

// use props when we have less argument but here we're referencing to a lot of objects
const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    const { 
        headerContentStyle, 
        thumbnailStyle, 
        thumbnailContainerStyle, 
        headerTextStyle, 
        imageStyle } = styles;
    return (
        //card element
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now !!!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  };

// make the component available to other parts of the app
export default AlbumDetail;
