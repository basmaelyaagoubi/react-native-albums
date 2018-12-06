// import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    
    // Initialize state for component which is an album piece of state
    state = { albums: [] };

    // life cyle methode
    componentWillMount() {
        // get request returns a promise
        // When the data is fitched, the component state should be updated
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        // pass down the album as a prop to AlbumDetail
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }
    
    render() {
        // Component make use of the state
        console.log(this.state);
        return (
            <ScrollView >
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}


// make the component available to other parts of the app
export default AlbumList;
