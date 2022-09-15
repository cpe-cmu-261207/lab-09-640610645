import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function experience() {
  return (
    <MainLayout>
      <div class="text-center p-5">
        <h3>Experience</h3>
      </div>
      <div className="text-center">
        <img
          src="images/V.jpg"
          width="320"
          height="180"
          style={{ objectFit: "cover" }}
        />
        <div className="fw-bold pt-4">
          ZEMENX - หยุดที่ตัววี | Wee BNK48 Original Music Video Fan Song
        </div>
        <p className="p-3">Producer</p>
      </div>
      <div className="text-center p-4">
        <img
          src="images/YTMF.JPG"
          width="320"
          height="180"
          style={{ objectFit: "cover" }}
        />
        <div className="fw-bold pt-4">
          Yamaha Thailand Music Festival 2019
          <p>[House of Blues Band]</p>
        </div>
        <p>2nd runner-up in Yamaha Band Challenge</p>
      </div>

      <div className="text-center p-4">
        <img
          src="images/plays.jpg"
          width="320"
          height="180"
          style={{ objectFit: "cover" }}
        />
        <div className="fw-bold pt-4">Gifted English Batch 12's Plays</div>
        <p className="p-3">Music Director & Sound Engineer</p>
      </div>
    </MainLayout>
  );
}
