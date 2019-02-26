import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Image
} from 'react-native';
import { WebBrowser } from 'expo';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

import { MonoText } from '../components/StyledText';
import localeStore from '../locale/localization';



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
    image: '../assets/images/image-not-found.jpg',
    key: '6'
  },
];

export default class HomeScreen extends React.Component {
 static navigationOptions = ({navigation}) => {
        return {
            title: localeStore.HomeScreen.title,
        };
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
                <Image  source={require('../assets/images/image-not-found.jpg')} style={{height: 200, width: null, flex: 1}}/>
                <Text>
                  {item.data}
                </Text>
              </Body>
            </CardItem>
          </Card>
              }
/>

      </Container>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
