import React from "react";
import Nav from "./Nav";
import { TableView } from "./TableView.js";

export default function Home() {
  return (
    <div className="mx-10 w-full h-full text-white">
      <Nav />
      <TableView />
    </div>
  );
}
