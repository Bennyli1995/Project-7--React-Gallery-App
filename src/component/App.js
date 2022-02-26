import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import SearchForm from "./SearchForm";
import Default from "./Default";
import PhotoList from './PhotoList';
import InvalidPage from "./InvalidPage";
import Config from "./Config";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            query: '',
            loading: true,
            sunsets: [],
            waterfalls: [],
            rainbows: []
        }
    }
    componentDidMount() {
        // Three default options when page first loads
        this.performSearch('rainbows');
        this.performSearch('sunsets');
        this.performSearch('waterfalls');
    }
 
    performSearch = (query) => {
        this.setState({ loading:true });
        // Perform API call 
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                if (query === 'rainbows' || query === 'sunsets'|| query ==='waterfalls') {
                    this.setState({
                        [query]: response.data.photos.photo,
                        loading: false
                    })
                } else {
                    this.setState({
                        photos: response.data.photos.photo,
                        query,
                        loading: false
                    });
                }
            })
            .catch(error => {
                console.log('Error fetching and parsing data:', error)
            });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm onSearch={ this.performSearch } />
                    <Default />
                    <Switch>
                        <Route exact path='/' render={
                            () => <Redirect to='/waterfalls' />
                        }/>

                        <Route exact path='/rainbows' render={
                            () => <PhotoList
                            data={ this.state.rainbows }
                            loading={ this.state.loading }
                            query='rainbows'
                        />

                        }/>
                        <Route exact path='/sunsets' render={
                            () => <PhotoList
                                data={ this.state.sunsets }
                                loading={ this.state.loading }
                                query='sunsets'
                            />
                        }/>

                        <Route exact path='/waterfalls' render={
                            () => <PhotoList
                                data={ this.state.waterfalls }
                                loading={ this.state.loading }
                                query='waterfalls'
                            />
                        }/>

                        <Route exact path='/search/:query' render={
                            () => <PhotoList
                                data={ this.state.photos }
                                loading={ this.state.loading }
                                query={ this.state.query }
                            />
                        }/>
                        <Route component={ InvalidPage } />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
