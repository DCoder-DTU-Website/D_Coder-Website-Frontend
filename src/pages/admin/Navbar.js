import React from "react";
import { Button } from "@material-ui/core";
import { Route } from "react-router-dom";

export default function AdminNavbarLinks() {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Route
          render={({ history }) => (
            <Button
              onClick={() => {
                history.push("/admin/dashboard");
              }}
              style={{ backgroundColor: "rgba(49,130,206)" }}
            >
              Dashboard
            </Button>
          )}
        />
        <Route
          render={({ history }) => (
            <Button
              onClick={() => {
                history.push("/admin/table");
              }}
              style={{ backgroundColor: "rgba(49,130,206)" }}
            >
              Members
            </Button>
          )}
        />
      </div>
    </div>
  );
}
