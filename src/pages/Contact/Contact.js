import './Contact.css'

function Contact(){
    return(
        <>
            <div id='contact-layout'>
                <h1>Contact Us:</h1>
                <h3>For more information concerning how best we can 
                    serve you, please reach out to us.
                </h3>
                <div class="double-container">
                    <form>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Phone Number" />
                        <button id='submit' type='submit'>Let's Talk</button>
                    </form>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4436.0553786112305!2d-0.12716601416081197!3d5.657960651595789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf836f49bdd743%3A0xe4cd7c80aa083522!2s2nd%20Plateau%20Loop!5e0!3m2!1sen!2sgh!4v1647457757642!5m2!1sen!2sgh" loading="lazy"></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact