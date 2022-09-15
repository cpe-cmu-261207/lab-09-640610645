import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-center">
      <div className="text-light">
        <span
          className="align-middle border rounded-3 p-3"
          style={{ backgroundColor: "firebrick" }}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </span>
        <span
          className="align-middle border rounded-3 p-3"
          style={{ backgroundColor: "firebrick" }}
        >
          <Link href="/experience">
            <a>Experience</a>
          </Link>
        </span>
        <span
          className="align-middle border rounded-3 p-3"
          style={{ backgroundColor: "firebrick" }}
        >
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </span>
        <span
          className="align-middle border rounded-3 p-3"
          style={{ backgroundColor: "firebrick" }}
        >
          <Link href="/lab-07">
            <a>Lab-07</a>
          </Link>
        </span>
      </div>
    </div>
  );
}
