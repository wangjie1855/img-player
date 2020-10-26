import React, { Component } from 'react'
import SlowTransition from './components/SlowTransition'

let List = [
  require("../src/assets/imgs/picture-1.jpg"),
  require("../src/assets/imgs/picture-2.jpg"),
  require("../src/assets/imgs/picture-3.jpg"),
  require("../src/assets/imgs/picture-4.jpg"),
  require("../src/assets/imgs/picture-5.jpg"),
  require("../src/assets/imgs/picture-6.jpg"),
  // 'pic/picture-1.jpg',
  // 'pic/picture-2.jpg',
  // 'pic/picture-3.jpg',
  // 'pic/picture-4.jpg',
  // 'pic/picture-5.jpg',
  // 'pic/picture-6.jpg',
]

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // secnum: 10,
      picnum: 10,
      jumpFlag: false,
      setNumFlag: true,
      // picTirlName: 'jpg',
      // List: [],
      List: List,
      title: '图片展示',
    }
  }

  handleChangeSecNum = (e) => {
    const { value } = e.target;
    const reg = /^[0-9]\d{0,2}$/;
    // const reg = /^1([0-9]*)?$/;		// 以数字1开头，任意数字结尾，且中间出现零个或多个数字
    // console.log(reg.test(value));
    // if ((!reg.test(value) && value.length > 3)) {// || value === '') {
    if ((!reg.test(value)) || value > 100) {// || value === '') {
      console.log('超出范围[1,100]', reg.test(value));
      return false;
    } else {
      this.setState({
        secnum: e.target.value,
      });
    }

  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleChangePicNum = (e) => {
    const { value } = e.target;
    const reg = /^[0-9]\d{0,1}$/;
    // const reg = /^1([0-9]*)?$/;		// 以数字1开头，任意数字结尾，且中间出现零个或多个数字
    // console.log(reg.test(value));
    // if ((!reg.test(value) && value.length > 3)) {// || value === '') {
    if ((!reg.test(value)) || value > 20) {// || value === '') {
      console.log('超出范围[1,20]', reg.test(value));
      return false;
    } else {
      this.setState({
        picnum: e.target.value,
      });
    }

  }

  handlePicTirlNamChange = (e) => {
    const { value } = e.target;
    console.log(value);
    this.setState({
      picTirlName: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    // this.sendPost();

    this.setState({
      setNumFlag: false,
      jumpFlag: true,
    });

  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
    this.interval && clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {this.state.setNumFlag ? (
          <div id="join-dialog" className="jumbotron vertical-center">
            <form // action="/setSecNum" // method="post" 
              className="form-group"
              onSubmit={this.handleSubmit} >
              <p>
                <input type="text" name="title"
                  value={this.state.title} onChange={this.handleChangeTitle}
                // required
                />
              </p>
              <p>
                显示几张图片[1,20]：<input type="number" name="picNum" min="1" max="20"
                  value={this.state.picnum} onChange={this.handleChangePicNum}
                // required
                />
              </p>
              <p>
                <input className="btn btn-lg btn-success" type="submit" value="显示图片" />
              </p>
            </form>
          </div>
        ) : null}

        {!this.state.setNumFlag && this.state.jumpFlag ? (
          <div>
            <SlowTransition list={this.state.List}
              title={this.state.title}
            />
          </div>
        ) : null}

      </div>
    )
  }
}
