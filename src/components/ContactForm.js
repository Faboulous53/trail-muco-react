import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert('Veuillez vérifier le reCAPTCHA.');
            return;
        }

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        emailjs
            .send('service_5p0lazq', 'template_pvrl8p9', templateParams, '_JIZ1loP30tzN8e8E')
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message envoyé avec succès! L'équipe vous recontacte dès que possible.");
                },
                (error) => {
                    console.log(error.text);
                    alert("Une erreur s'est produite, veuillez réessayer.");
                }
            );

        setFormData({
            name: '',
            email: '',
            message: ''
        });
        setCaptchaValue(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom et prénom</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Adresse mail</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Votre message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="capcha">
                <ReCAPTCHA
                    sitekey="6LfkgfYpAAAAAJTXkKuaS9sPVQtFD_cxNgQc9Pxj"
                    onChange={handleCaptchaChange}
                />
            </div>
            <div>
                <button className="btn formSubmit" type="submit">
                    Envoyer
                </button>
            </div>
        </form>
    );
};

export default ContactForm;