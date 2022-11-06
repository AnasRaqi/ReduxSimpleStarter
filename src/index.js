import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from "youtube-api-search";
import VideoList from './components/video_list';
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyAc9u3XjQdHTbBpaH1iF5wip5zie3KgX3A";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }; 
        this.videoSearch("surfboards");
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // similar to this.setState ({videos: videos}). it works when key and value are the same. 
        }) ;
    }


    render(){
    
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 500);
    return (
    <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
         onVideoSelect = {selectedVideo => this.state({selectedVideo})}
         videos ={this.state.videos}/>
    </div>
    );
}}

ReactDOM.render(<App />, document.querySelector('.container') );