import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FlatList} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

    _renderItem = ({item: library})  => (
            <ListItem library={library} ></ListItem>
    )
     

    render() {
        return(
            <FlatList
                data={this.props.libraries}
                renderItem={this._renderItem}
                keyExtractor={(library) => library.id.toString()}
            ></FlatList>
        )
    }
} 

const mapStateToProps = state => {
    return {libraries: state.libraries};
};

//this means calls the  function connect and after call another function with the LibraryList
export default connect(mapStateToProps)(LibraryList);  