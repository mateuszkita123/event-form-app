import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ event_date, setDate }) => {
  console.log("event_date: ", event_date);
  console.log("setDate: ", setDate);
  return (<div>
    <DatePicker
      selected={event_date}
      onChange={date => {setDate(date)}}
      minDate={new Date()}
      placeholderText="Select an event date"
      name="startDate"
      dateFormat="yyyy-MM-dd"
    />
  </div>)
}

Calendar.propTypes = {
  event_date: PropTypes.object,
  setDate: PropTypes.func.isRequired
}

export default connect()(Calendar)