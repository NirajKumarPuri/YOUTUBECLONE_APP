import React from 'react';
import styles from './Fetch.module.css';
import Display from '../Display/index.js';
import Card from '../Component/Card/index.js';
class Fetchdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arry: []
    };
  }
  componentDidMount() {
    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyDlHgoVXhs4TRUXfe9wFGle2lGD45dDlqs'
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({ arry: result.items });
        console.log('arry',this.state.arry);
      });
  }

  DisplaySearch = (data) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data}&safeSearch=strict&maxResults=15&type=video&key=AIzaSyDlHgoVXhs4TRUXfe9wFGle2lGD45dDlqs`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({ arry: result.items });
        console.log(result.items);
      });
  };
  render() {
    return (
      <div>
        <Display searchdata={this.DisplaySearch} />
        <div className={styles.container}>
          {this.state.arry.map((carddata) => {
            console.log(carddata)
            return (
              <Card
                imgurl={carddata.snippet.thumbnails.default.url}
                descrip={carddata.snippet.title}
                Videoid={typeof carddata.id=='object'? carddata.id.videoId : carddata.id}
                publish={carddata.snippet.publishedAt}
                Item={this.state.arry}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Fetchdata;
