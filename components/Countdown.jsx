import React from "react";

export default class Countdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            hours: 0,
            days: 0
        }
    }

    componentDidMount = () => {
        this.countdown()
    }

    countdown = () => {
        let intervalId = setInterval(()=>{
          var dateFuture = new Date(this.props.endTime * 1000)
          var dateNow = new Date();

          var seconds = Math.floor((dateFuture - (dateNow))/1000);
          var minutes = Math.floor(seconds/60);
          var hours = Math.floor(minutes/60);
          var days = Math.floor(hours/24);

          hours = hours-(days*24);
          minutes = minutes-(days*24*60)-(hours*60);
          seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
          this.setState({seconds, minutes, hours, days});
          
          if(seconds === 0 && minutes === 0 && days === 0 && hours === 0) {
            clearInterval(intervalId) 
          }
        },1000);
    }
    
    render() {
        const {days, hours, minutes, seconds} = this.state;
        return(
                <div className="flex flex-row items-center justify-evenly text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-primary text-gray-400 rounded-lg text-xs">
                  <span className="font-mono text-4xl countdown">
                    <span>{days}</span>
                  </span>
                      days
                </div> 
                <div className="flex flex-col p-2 bg-primary text-gray-400 rounded-lg  text-xs">
                  <span className="font-mono text-4xl countdown">
                    <span>{hours}</span>
                  </span>
                      hours
                </div> 
                <div className="flex flex-col p-2 bg-primary text-gray-400 rounded-lg  text-xs">
                  <span className="font-mono text-4xl countdown">
                    <span>{minutes}</span>
                  </span>
                      mins
                </div> 
                <div className="flex flex-col p-2 bg-primary text-gray-400 rounded-lg  text-xs">
                  <span className="font-mono text-4xl countdown">
                    <span>{seconds}</span>
                  </span>
                      seconds
                </div> 
              </div>
        )
    }
}