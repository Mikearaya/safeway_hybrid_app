import React from 'react'
import { Container, Content } from 'native-base'
import NavigationButton from '../components/NavigationButton'
import localeStore from '../locale/localization'
import { FlatList } from 'react-native'
import ArticleList from '../components/ArticleListComponent'
var Enviroment = require('../global.js')


export default class ArticlesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catagories: []
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.HelpScreen.title,
      headerLeft: <NavigationButton sideBar={navigation} />
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.catagories}
            renderItem={({ item }) => (
              <ArticleList
                onPress={() => this._catagorySelected(item)}
                catagory={item}
                articleCount={item.articleCount}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    )
  }

    componentDidMount() {
      let url =
        `${Enviroment.API_URL}/article_catagory`

      fetch(url)
        .then(result => result.json())
        .then(data => {
     
          this.setState({
            catagories: data
          })
        })
        .catch(error => alert(JSON.stringify(error.message)))
    }

  _catagorySelected(selectedCatagory) {

    const catagory = {
      articleId: selectedCatagory.ID,
      articleTitle: selectedCatagory.name
    }
    
    if (selectedCatagory.totalArticles == 1) {
      this.props.navigation.navigate('Article', catagory)
    } else {

      this.props.navigation.navigate('ArticleIndex', selectedCatagory)
    }
  }
}
