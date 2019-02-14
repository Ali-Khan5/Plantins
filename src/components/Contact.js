import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
// import {signinAction}  from "../store/actions/action"promo_chat
import Banana from "../media/promo_banan.png";
import Discuss from "../media/promo_chat.png";
import Social from "../media/promo_social.png";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../store/actions/action";
const Contact = () => {
  return (
    <div>
      
    <div style={{marginLeft:'7%' , marginBottom:'4%'}}>
      
    <h2 style={{borderLeft: '8px solid rgb(255, 141, 27)', padding: '12px', marginLeft: '10px'}}> Contact Us</h2>
    </div>
    <div className="container">
    <div>
        <div style={{width: '100%'}}><iframe width="100%" height={600} src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>&lt;a href="https://www.maps.ie/map-my-route/"&gt;Map a route&lt;/a&gt;</iframe></div><br />
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="well well-sm">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">
                      Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address</label>
                    <div className="input-group">
                      <span className="input-group-addon"><span className="glyphicon glyphicon-envelope" />
                      </span>
                      <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject</label>
                    <select id="subject" name="subject" className="form-control" required="required">
                      <option value="na" selected>Choose One:</option>
                      <option value="service">General Customer Service</option>
                      <option value="suggestions">Suggestions</option>
                      <option value="product">Product Support</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">
                      Message</label>
                    <textarea name="message" id="message" className="form-control" rows={9} cols={25} required="required" placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
                    Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <form>
            <legend><span className="glyphicon glyphicon-globe" />&nbsp;Our office</legend>
            <address>
              <strong>Twitter, Inc.</strong><br />
              795 Folsom Ave, Suite 600<br />
              San Francisco, CA 94107<br />
              <abbr title="Phone">
                P:</abbr>
              (123) 456-7890
            </address>
            <address>
              <strong>Full Name</strong><br />
              <a href="mailto:#">first.last@example.com</a>
            </address>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
