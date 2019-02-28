import React from 'react';
import {
  StyleSheet,
  FlatList,
  Image, 
  Button
} from 'react-native';
import { Container,  Card, CardItem,  Text, Left, Body, Icon } from 'native-base';
import localeStore from '../locale/localization';
import NavigationButton from '../components/NavigationButton';
import NewsCard from '../components/NewsCard';




const newsArray = [{
    title: 'Title1',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '1'
  },
  {
    title: 'Title2',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '2'
  },
  {
    title: 'Title3',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '3'
  },
  {
    title: 'Title4',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '4'
  }, {
    title: 'Title5',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions`,
    image: '../assets/images/image-not-found.jpg',
    key: '5'
  }, {
    title: 'Title6',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions`,
    image: './../assets/images/image-not-found.jpg',
    key: '6'
  },
];

export default class HomeScreen extends React.Component {
 static navigationOptions = ({navigation}) => {
        return {
            title: localeStore.NewsScreen.title,
     headerLeft: (
             <NavigationButton sideBar={navigation}/>
                )
        }
    };
 
  render() {
    return (
      <Container  style={styles.container}>
          <FlatList
          data={newsArray}

  renderItem={({item}) => 
  <NewsCard newsItems={item}/>
              }/>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
