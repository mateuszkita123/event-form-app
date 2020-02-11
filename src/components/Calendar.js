import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ event_date, setDate }) => {
  console.log("event_date: ", event_date);
  console.log("setDate: ", setDate);
  return (<div>
    <DatePicker
      selected={event_date}
      // onChange={date => {
      //     console.log("date: ", date);
      //     let dateString = parseDate(date);
      //     console.log("dateString: ", dateString);
      //     console.log("dispatch(changeDate(dateString)): ", dispatch(changeDate(dateString)));
      //     dispatch(changeDate(dateString));
      // }}
      onChange={date => {setDate(date)}}
      minDate={new Date()}
      placeholderText="Select an event date"
      name="startDate"
      dateFormat="yyyy-MM-dd"
    />
  </div>)
}

export default connect()(Calendar)