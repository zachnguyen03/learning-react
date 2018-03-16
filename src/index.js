import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoListItem from './components/video_list_item'

const API_KEY = 'AIzaSyA2ePFwfgBhfDBdgOrQBUZhccExWS3du6g'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'Stewie2K'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }
  // If variable same as term, videos: videos => videos


  render() {
    return(
      <div>
        <SearchBar />
        <VideoDetail video = { this.selectedVideo } />
        <VideoList videos = { this.state.videos } />
      </div>
    )
  }
};


ReactDOM.render(<App />, document.querySelector('.container'));
