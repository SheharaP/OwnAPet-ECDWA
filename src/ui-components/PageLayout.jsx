import { NavBarHeader, MarketingFooter } from ".";

export function PageLayout({ children }) {
  const IMAGE_URL = import.meta.env.VITE_REACT_APP_S3_IMAGE_URL
  return (
    <div>
      <NavBarHeader image={`${IMAGE_URL}logo.png`} />
      {children}
      <MarketingFooter image={`${IMAGE_URL}logo.png`} />
    </div>
  );
}

