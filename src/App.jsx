import { useState } from 'react'
import { FaUserCog, FaShieldAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Nomadic Archer - Account Deletion Policy</h1>
      </header>

      <main>
        <section className="policy-section">
          <div className="section-header">
            <FaUserCog className="section-icon" />
            <h2>How to Delete Your Account</h2>
          </div>
          <p>
            To request the deletion of your Nomadic Archer account and associated data,
            please follow these steps:
          </p>
          <ol>
            <li>Open the Nomadic Archer app</li>
            <li>Navigate to Settings</li>
            <li>Select "Account Settings"</li>
            <li>Tap "Delete Account"</li>
            <li>Confirm your decision</li>
          </ol>
        </section>

        <section className="policy-section">
          <div className="section-header">
            <FaShieldAlt className="section-icon" />
            <h2>Data Deletion Information</h2>
          </div>
          <h3>Data That Will Be Deleted:</h3>
          <ul>
            <li>Your personal profile information</li>
            <li>Account credentials</li>
            <li>User preferences and settings</li>
            <li>Saved targets and archery data</li>
            <li>Location history</li>
          </ul>

          <h3>Data Retention Period:</h3>
          <p>
            After you request account deletion, we will process your request within 30 days.
            Some information may be retained for legal or business purposes for up to 90 days
            after deletion, after which it will be permanently removed from our systems.
          </p>
        </section>

        <section className="policy-section">
          <div className="section-header">
            <FaEnvelope className="section-icon" />
            <h2>Contact Information</h2>
          </div>
          <p>
            If you have any questions about the account deletion process or need assistance,
            please contact our support team at:
          </p>
          <a href="mailto:erik@nomadicarcher.com" className="contact-email">
            <FaEnvelope className="email-icon" />
            erik@nomadicarcher.com
          </a>
        </section>
      </main>

      <footer>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  )
}

export default App
