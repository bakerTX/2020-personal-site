import React from 'react';
import { Link } from 'react-router-dom';

// images
import Page from './images/page.png';
import SidePanel from './images/sidepanel.png';

const SpendingNotifications = () => (
  <>
    <header>
      <h1 className="hero-text">
        IBM Project:
        {' '}
        <br />
        {' '}
        Spending Notifications
      </h1>
      <span className="hero-tagline">Lead front end developer</span>
    </header>
    <main>
      <div className="description">
        <p>
          The spending notifications page allows a user to set up custom
          notifications for the services within their account. An email will be
          sent out when the chosen service has reached a dollar threshold
          amount. These notifications allow the user to have greater awareness
          and insight into the activity of their deployed services.
        </p>
        <div className="tag-container">
          <div className="highlight tag">GraphQL</div>
          <div className="highlight tag">APIs</div>
          <div className="highlight tag">Reusable components</div>
          <div className="highlight tag">React hooks</div>
          <div className="highlight tag">Accessibility</div>
          <div className="highlight tag">Internationalization</div>
        </div>
        <img
          className="project-image"
          src={Page}
          alt="spending notifications page"
        />
      </div>
      <img
        className="project-image"
        src={SidePanel}
        alt="spending notifications sidepanel component"
      />
    </main>
    <footer>
      <Link to="/">Go back home</Link>
    </footer>
  </>
);

export default SpendingNotifications;
