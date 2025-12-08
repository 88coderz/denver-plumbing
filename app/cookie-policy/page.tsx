import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="container mt-5">
      <h1>Cookie Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>Plumbing Co. ("us", "we", or "our") uses cookies on the website (the "Service"). By using the Service, you consent to the use of cookies.</p>
      <p>Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.</p>
      
      <h2>What are cookies</h2>
      <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>

      <h2>How we use cookies</h2>
      <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, to store your preferences.</p>

      <h2>Your choices regarding cookies</h2>
      <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Cookie Policy, You can contact us:</p>
      <p>Email: ColoradoPlumbingSolutions@gmail.com</p>
    </div>
  );
};

export default CookiePolicy;
