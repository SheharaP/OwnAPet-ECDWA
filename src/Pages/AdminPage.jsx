import React, { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { NavBarHeaderAdmin } from "../ui-components";
import { ViewPets } from "./ViewPets";
import "../App.css";
import { ViewInventory } from "./ViewInventory";

export function AdminPage() {
  const [activeComponent, setActiveComponent] = useState("pets");

  const IMAGE_URL = import.meta.env.VITE_REACT_APP_S3_IMAGE_URL

  return (
    <Authenticator>
      {({ signOut }) => ( 
        <div>
          <NavBarHeaderAdmin
            image={`${IMAGE_URL}logo.png`}
            action={signOut}
            onViewInventory={() => setActiveComponent("inventory")}
            onViewPets={() => setActiveComponent("pets")}
          />
          {activeComponent === "pets" ? <ViewPets /> : <ViewInventory />}
        </div>
      )}
    </Authenticator>
  );
}
