import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/Profile.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
    const [user, setUser] = useState({
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '123-456-7890',
        addresses: [
            {
                street: '123 Main St',
                city: 'Anytown',
                state: 'Anystate',
                postalCode: '12345',
                country: 'USA'
            }
        ]
    });
    const [activeSection, setActiveSection] = useState('details');
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        toast.success('Logged out successfully!');
        navigate('/login'); // Redirect to login page
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="profile-container">
            <div className="profile-sidenav">
                <h2>Profile</h2>
                <ul>
                    <li onClick={() => setActiveSection('details')}><span role="img" aria-label="details">👤</span> My Details</li>
                    <li onClick={() => setActiveSection('orders')}><span role="img" aria-label="orders">📦</span> Orders</li>
                    <li onClick={() => setActiveSection('wishlist')}><span role="img" aria-label="wishlist">❤️</span> My Wishlist</li>
                    <li onClick={() => setActiveSection('notifications')}><span role="img" aria-label="notifications">🔔</span> Notifications</li>
                    <li onClick={() => navigate('/feedback')}><span role="img" aria-label="feedback">📝</span> Feedback</li>
                    <li onClick={handleLogout}><span role="img" aria-label="logout">🚪</span> Logout</li>
                </ul>
            </div>
            <div className="profile-content">
                {activeSection === 'details' && (
                    <div className="profile-details">
                        <h2>Personal Information</h2>
                        <div className="profile-picture-container">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                                id="upload-profile-image"
                            />
                            <label htmlFor="upload-profile-image">
                                {profileImage ? (
                                    <img src={profileImage} alt="Profile" className="profile-picture" />
                                ) : (
                                    <div className="profile-picture-placeholder">Upload Profile Picture</div>
                                )}
                            </label>
                        </div>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>First Name:</strong> {user.firstName}</p>
                        <p><strong>Last Name:</strong> {user.lastName}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <h2>Addresses</h2>
                        {user.addresses.length > 0 ? (
                            user.addresses.map((address, index) => (
                                <div key={index} className="address-card">
                                    <p><strong>Street:</strong> {address.street}</p>
                                    <p><strong>City:</strong> {address.city}</p>
                                    <p><strong>State:</strong> {address.state}</p>
                                    <p><strong>Postal Code:</strong> {address.postalCode}</p>
                                    <p><strong>Country:</strong> {address.country}</p>
                                </div>
                            ))
                        ) : (
                            <p>No addresses available.</p>
                        )}
                        <button className="add-address-button" onClick={() => navigate('/addaddress')}>Add Address</button>
                    </div>
                )}
                {activeSection === 'orders' && (
                    <div className="profile-orders">
                        <h2>My Orders</h2>
                        <p>Order history will be displayed here.</p>
                    </div>
                )}
                {activeSection === 'wishlist' && (
                    <div className="profile-wishlist">
                        <h2>My Wishlist</h2>
                        <p>Wishlist items will be displayed here.</p>
                    </div>
                )}
                {activeSection === 'notifications' && (
                    <div className="profile-notifications">
                        <h2>Notifications</h2>
                        <p>Notification settings will be displayed here.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
