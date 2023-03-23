import React from "react";
import "./contact.scss";
export default function contact() {
  return (
    <div className="contact mt-5" id="contact">
      <div className="container">
        <div className="row pt-3 pb-3">
          <h1 className="col-12  ">تواصل معنا</h1>
          <form action="#" method="post" className="col-12">
            <input
              type="text"
              className="col-12 col-lg-4"
              placeholder="الاسم"
              required
            />
            <input
              type="email"
              placeholder="الايميل"
              className="col-12 col-lg-4"
              required
            />
            <input
              type="text"
              placeholder="العنوان"
              className="col-12 col-lg-4"
              required
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="رسالتك...."
              required
              className="col-12"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
