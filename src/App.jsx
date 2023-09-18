import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Auth } from "aws-amplify";
import { AdminView } from "./views/AdminView";
import {
  MarketingPricing, AddProductComponent, AddPetComponent
} from "./ui-components";
import "./App.css";
import PetCareSection from "./ui-components/PetCareSection";
import { PageLayout } from "./ui-components/PageLayout";
import { UpdateProductComponent } from "./Pages/UpdateProductComponent";
import { UpdatePetComponent } from "./Pages/UpdatePetComponent";
import { AboutUsPage } from "./Pages/AboutUsPage";
import Home from './Pages/Home'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuthentication = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <PageLayout>
                <Home />
              </PageLayout>
            </div>
          }
        />
        <Route
          path="/view-store"
          element={
            <div>
              <PageLayout>
                <MarketingPricing />
              </PageLayout>
            </div>
          }
        />
        <Route
          path="/pet-care"
          element={
            <div>
              <PageLayout>
                <PetCareSection />
              </PageLayout>
            </div>
          }
        />
        <Route
          path="/about-us"
          element={
            <div>
              <PageLayout>
                <AboutUsPage />
              </PageLayout>
            </div>
          }
        />
        <Route path="/admin/*" element={<AdminView />} />
        <Route
          path="/admin/add-pet"
          element={
            isAuthenticated ? (
              <AddPetComponent />
            ) : (
              <Navigate to="/" /> // Redirect to the home page when not authenticated
            )
          }
        />
        <Route
          path="/admin/update-pet/:id"
          element={
            isAuthenticated ? (
              <UpdatePetComponent />
            ) : (
              <Navigate to="/" /> // Redirect to the home page when not authenticated
            )
          }
        />
        <Route
          path="/admin/update-product/:id"
          element={
            isAuthenticated ? (
              <UpdateProductComponent />
            ) : (
              <Navigate to="/" /> // Redirect to the home page when not authenticated
            )
          }
        />
        <Route
          path="/admin/add-product"
          element={
            isAuthenticated ? (
              <AddProductComponent />
            ) : (
              <Navigate to="/" /> // Redirect to the home page when not authenticated
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
