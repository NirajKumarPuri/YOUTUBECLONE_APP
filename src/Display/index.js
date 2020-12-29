import React from 'react';
import styles from './Display.module.css';
import Icon from '../Component/SearchIcon/index.js';
import Img from "../Asset/youtube.jpg";
class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  handlechange = (e) => {
    this.setState(
      {
        data: e.target.value
      },
      () => {
        console.log(this.state.data);
      }
    );
  };
  handleclick = () => {
    this.props.searchdata(this.state.data);
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.imgbox}>
         <img className={styles.img} src={Img}/>
        </div>
        <div className={styles.content}>
          <div className={styles.inputbox}>
            <input
              className={styles.inputtext}
              type="text"
              name="Enter search"
              placeholder="Search................"
              value={this.state.data}
              onChange={this.handlechange}
            />
          </div>
          <div className={styles.Iconbox}>
            <Icon
              name="search"
              size="lg"
              color="gray"
              onclick={this.handleclick}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Display;
