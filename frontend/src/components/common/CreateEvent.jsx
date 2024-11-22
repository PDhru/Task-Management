import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CreateEvent = () => {

  return (
    <>
      <div className="main-page-wrapper">
        <aside className="dash-aside-navbar">
          <div className="position-relative">
            <div className="logo d-md-block d-flex align-items-center justify-content-between plr bottom-line pb-30">
              <a href="/">
                <img src="images/logo/logo_01.svg" alt />
              </a>
              <button className="close-btn d-block d-md-none"><i className="fa-light fa-circle-xmark" /></button>
            </div>
            <nav className="dasboard-main-nav pt-30 pb-30 bottom-line">
              <ul className="style-none">
                <li><div className="nav-title">Listing</div></li>
                <li className="plr"><a href="/my-event" className="d-flex w-100 align-items-center">
                  <img src="images/icon/icon_6.svg" alt />
                  <span>My Events</span>
                </a></li>
                <li className="plr"><a href="/create-event" className="d-flex w-100 align-items-center active">
                  <img src="images/icon/icon_7_active.svg" alt />
                  <span>Add New Events</span>
                </a></li>
                <li className="plr"><a href="favourites.html" className="d-flex w-100 align-items-center">
                  <img src="images/icon/icon_8.svg" alt />
                  <span>Favourites</span>
                </a></li>
              </ul>
            </nav>

            <div className="plr mt-30">
              <a href="#" className="d-flex w-100 align-items-center logout-btn">
                <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle"><img src="images/icon/icon_41.svg" alt /></div>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </aside>

        <div className="dashboard-body">
          <div className="position-relative">
            {/* ************************ Header **************************** */}
            <header className="dashboard-header">
              <div className="d-flex align-items-center justify-content-end">
                <button className="dash-mobile-nav-toggler d-block d-md-none me-auto">
                  <span />
                </button>
                <form action="#" className="search-form ms-auto">
                  <input type="text" placeholder="Search here.." />
                </form>
                <div className="d-none d-md-block me-3 ms-3">
                  <a href="add-property.html" className="btn-two"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right" /></a>
                </div>
              </div>
            </header>
            {/* End Header */}
            <h2 className="main-title d-block d-lg-none">Add New Property</h2>
            <div className="bg-white card-box border-20">
              <h4 className="dash-title-three">Overview</h4>
              <form  encType="multipart/form-data">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor>Event Title*</label>
                  <input type="text" name="title" placeholder="Event Title"  required />
                </div>
                <div className="dash-input-wrapper mb-30" >
                  <label htmlFor>Description*</label>
                  <textarea className="size-lg" name="description" placeholder="Event Description"  required />
                </div>

                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="dash-input-wrapper mb-30">
                      <label >Event Type*</label>
                      <select className="nice-select" name="eventType"  required>
                        <option value="">Select Event Type</option>
                        <option value="conference">Networking events</option>
                        <option value="conference">Charity events</option>
                        <option value="conference">Social events</option>
                        <option value="conference">Conference</option>
                        <option value="workshop">Workshop</option>
                        <option value="meetup">Meetup</option>
                        <option value="meetup">Seminars</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex h-100 mb-auto mt-auto align-items-top">
                    <div className="button-group  d-inline-flex align-items-center mb-auto">
                      <button type='submit' className="dash-btn-two tran3s me-3">Add Task</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button className="scroll-top">
          <i className="bi bi-arrow-up-short" />
        </button>
      </div>


    </>
  )
}

export default CreateEvent  