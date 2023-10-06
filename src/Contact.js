import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: [],
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <form name="contact" method="POST" data-netlify="true" netlify netlify-honeypot="bot-field" hidden>
            <p>
                <label>
                    Your Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
            </p>
            <p>
                <label>
                    Your Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
            </p>
            <p>
                <label>
                    Your Role:
                    <select
                        name="role[]"
                        multiple
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
}

export default ContactForm;
