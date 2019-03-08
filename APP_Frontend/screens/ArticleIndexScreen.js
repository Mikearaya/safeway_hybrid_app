import React, { Component } from 'react'
import { Text, View, CardItem, Icon, Right } from 'native-base'
import { FlatList, StyleSheet } from 'react-native'
import localeStore from '../locale/localization'
const policiesList = [
  {
    title: 'policy',
    key: '1'
  },
  {
    title: 'policy',
    key: '2'
  },
  {
    title: 'policy',
    key: '3'
  },
  {
    title: 'policy',
    key: '4'
  },
  {
    title: 'policy',
    key: '5'
  },
  {
    title: 'policy',
    key: '6'
  },
  {
    title: 'policy',
    key: '7'
  },
  {
    title: 'policy',
    key: '8'
  },
  {
    title: 'policy',
    key: '9'
  },
  {
    title: 'policy',
    key: '10'
  },
  {
    title: 'policy',
    key: '11'
  },
  {
    title: 'policy',
    key: '12'
  },
  {
    title: 'policy',
    key: '13'
  },
  {
    title: 'policy',
    key: '14'
  },
  {
    title: 'policy',
    key: '15'
  },
  {
    title: 'policy',
    key: '16'
  },
  {
    title: 'policy',
    key: '17'
  },
  {
    title: 'policy',
    key: '18'
  },
  {
    title: 'policy',
    key: '19'
  },
  {
    title: 'policy',
    key: '20'
  }
]

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10
  },
  indexBox: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgreen'
  },
  indexTitle: {
    flex: 1
  }
})

export default class ArticleIndexScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.PolicyIndex.title
    }
  }
  render() {
    const { navigation } = this.props

    const articleId = navigation.getParam('articleId')
    return (
      <View style={styles.mainContainer}>
        <FlatList
          style={{ flex: 1 }}
          data={policiesList}
          renderItem={({ item }) => (
            <CardItem
              style={styles.indexBox}
              button
              onPress={() =>
                this.props.navigation.navigate('Article', {
                  articleId: item.key,
                  articleTitle: item.title
                })
              }
            >
              <Text style={styles.indexTitle}>
                {item.key}-{item.title}
              </Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          )}
        />
      </View>
    )
  }
}
