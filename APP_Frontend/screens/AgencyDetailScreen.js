import React, { Component } from 'react'
import {
    Container,
} from 'native-base'
import localeStore from '../locale/localization';
import DetailListViewComponent from '../components/DetailListViewComponent';


const detailInformation = {
    name: 'Ethiopian Embassy',
    address: 'Riyad, Saudi arabia',
    phoneNumber: '0912669988',
    email: 'mikaelaraya12@gmail.com'
};

export default class AgencyDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: localeStore.AgencyDetail.title
        }
    }
    render() {
        return (
            <Container>
                <DetailListViewComponent item={detailInformation} />
            </Container>
        )
    }
}
