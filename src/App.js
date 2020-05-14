import React from 'react';

import './home.css';
import './theme.css';
import './util.css';

function App() {
  return (
    <div className="master-container">
      <header>
        <h1 className="hero-text">
          Hey, I&#39;m Aaron. I&#39;m a front end web engineer working in
          Austin, TX.
        </h1>
        <p>
          I specialize in translating visual designs into responsive and
          performant web applications, using React and other tools. I&#39;m also
          quite interested in web accessibility.
        </p>

        <p>
          In my spare time, I like to learn new technologies. Recently, I&#39;ve
          been hacking on a Raspberry Pi, and exploring a variety of Linux
          distributions. I also like to cook, and I&#39;m currently training for
          a half marathon in Alaska.
        </p>

        <p>
          As you&#39;ll eventually come to know, I&#39;m a huge fan of
          everything space related.
        </p>
      </header>
      <h2>Projects</h2>
      <h2>Contact me</h2>
      <p>
        Feel free to shoot me an email and I will get back to you as soon as I
        can.
        {' '}
        <address>
          <a href="mailto:aaronbaker9210@gmail.com">aaronbaker9210@gmail.com</a>
        </address>
      </p>
    </div>
  );
}

export default App;
