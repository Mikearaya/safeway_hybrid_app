import React from 'react'
import { Container, Content } from 'native-base'
import NavigationButton from '../components/NavigationButton'
import localeStore from '../locale/localization'
import { FlatList } from 'react-native'
import ArticleList from '../components/ArticleListComponent'

const informationCatagories = [
  {
    catagory: 'Immigration Policies',
    articleCount: 100,
    key: '1'
  },
  {
    catagory: 'Migration Types',
    articleCount: 1,
    key: '2'
  },
  {
    catagory: 'Responsible Parties',
    articleCount: 200,
    key: '3'
  },
  {
    catagory: 'Emergency Contacts',
    articleCount: 1,
    key: '4'
  },
  {
    catagory: 'General Information',
    articleCount: 300,
    key: '6'
  },
  {
    catagory: ' Information',
    articleCount: 300,
    key: '5'
  }
]

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
          />
        </Content>
      </Container>
    )
  }

    componentDidMount() {
      let url =
        'http://192.168.1.4/ilo_app/backend/index.php/article_catagory'

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
      articleTitle: selectedCatagory.catagory
    }
    if (selectedCatagory.totalArticles == 1) {
      this.props.navigation.navigate('Article', catagory)
    } else {
      this.props.navigation.navigate('ArticleIndex', catagory)
    }
  }
}
