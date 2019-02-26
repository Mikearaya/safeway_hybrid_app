import React from 'react';
import {
  StyleSheet,
  FlatList,
  Image, 
  Button
} from 'react-native';
import { Container,  Card, CardItem,  Text, Left, Body } from 'native-base';
import localeStore from '../locale/localization';
import NavigationButton from '../components/NavigationButton';




const newsArray = [{
    title: 'Title1',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '1'
  },
  {
    title: 'Title2',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '2'
  },
  {
    title: 'Title3',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '3'
  },
  {
    title: 'Title4',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '4'
  }, {
    title: 'Title5',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions`,
    image: '../assets/images/image-not-found.jpg',
    key: '5'
  }, {
    title: 'Title6',
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
                ),
        }
    };

  render() {
    return (
      <Container  style={styles.container}>
          <FlatList
          data={newsArray}

  renderItem={({item}) => 
  <Card style={{flex: 1}}>
            <CardItem bordered>
              <Left>
                <Body>
                  <Text>{item.title}</Text>
                  <Text note>April 13, 1990</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.navigate('NewsDetail')}>
              <Body>
                <Image  resizeMode="stretch" source={require('./../assets/images/notfound.png')} style={{height: 200, width: 320}}/>
                <Text>
                  {item.data}
                </Text>
              </Body>
            </CardItem>
          </Card>
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
