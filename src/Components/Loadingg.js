import React, {Component} from 'react';
import {changeSliderPositionAC} from './../redux/quizReducer';

class Loadingg extends Component {
      constructor(props) {
            super(props);
            this.state = { seconds: 0 };
          }

          tick() {
            this.setState(prevState => ({
              seconds: prevState.seconds + 1
            }));
            this.props.dispatch(changeSliderPositionAC());
          }

          componentDidMount() {
            this.interval = setInterval(() => this.tick(), 6000);
          }

          componentWillUnmount() {
            clearInterval(this.interval);
          }

          render() {
            console.log(this.state.seconds);
            return (
              <div>
                
              </div>
            );
          }
        }

export default Loadingg;
