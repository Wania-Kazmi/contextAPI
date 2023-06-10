import React from "react";
import Link from "next/link";
import AppState from "@/context/appState";

//reducer is to manage and manipulate the state and context is to wrap around all of the components that needs access to specific state
export default function Context() {
  return (
    <div>
      <div>
        <h1>Context Example</h1>
        <div className="flex flex-col m-3">
          <AppState>
            <Link href={"/home"}>Go to home page</Link>
            <Link href={"/feed"}>Go to feed Page</Link>
          </AppState>
        </div>
      </div>
    </div>
  );
}
