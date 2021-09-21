import React from "react";

export default function FormatDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let time = "AM";
    if (hours > 12) {
        hours = hours - 12;
        time = "PM";
      }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
      }

    return (<div>
        {day} {hours}:{minutes} {time}
    </div>);
}