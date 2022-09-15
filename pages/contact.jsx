import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <div className="text-center p-5">
        <h3>Contact</h3>
      </div>
      <div className="text-center">
        <img
          src="images/ct.jpg"
          width="200"
          height="200"
          style={{ objectFit: "cover" }}
          className="rounded-circle"
        />
      </div>
      <div className="d-flex justify-content-center">
        <span className="fw-bold p-5">
          <p>Name</p>
          <p>Nickname</p>
          <p>Address</p>
          <p>Facebook</p>
          <p>Email</p>
          <p>Phone</p>
        </span>
        <span className="p-5">
          <p>Nontapan Chanadee</p>
          <p>Kla</p>
          <p>
            Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA,
            United Kingdom
          </p>

          <p>
            <a
              href="https://www.facebook.com/nchanadee/"
              target="_blank"
              rel="nonreferrer"
            >
              https://www.facebook.com/nchanadee/🔗
            </a>
          </p>
          <p>
            <a href="mailto:nontapan_chanadee@cmu.ac.th">
              nontapan_chanadee@cmu.ac.th🔗
            </a>
          </p>
          <p>095-6876664</p>
        </span>
      </div>
    </MainLayout>
  );
}
