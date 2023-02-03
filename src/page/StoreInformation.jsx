import React from "react";

export function StoreInformation() {
  return (
    <div className=" mt-8 bg-yellow-200 flex justify-center flex-col items-center space-y-3">
      <div className=" flex flex-row">
        <div className=" font-semibold mr-8">
          <h1>東海門市：台中市龍井區藝術街96號</h1>
          <h1>營業時間：11:30-14:00/ 17:00-19:30</h1>
          <h1>電話：04-26310838</h1>
        </div>
        <iframe
          width="500"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=%E8%97%9D%E8%A1%93%E8%A1%97%20%E5%8F%B0%E4%B8%AD%E5%B8%82+(106%E8%99%9F)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className=" flex flex-row">
        <div className=" font-semibold m-3">
          <h1>南屯門市：台中市南屯區永春東七路865號</h1>
          <h1>營業時間：15:00-19:00</h1>
          <h1>電話：0981-173845</h1>
        </div>
        <iframe
          width="500"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=%E6%B0%B8%E6%98%A5%E6%9D%B1%E4%B8%83%E8%B7%AF%20%E5%8F%B0%E4%B8%AD%E5%B8%82+(865%E8%99%9F)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}
