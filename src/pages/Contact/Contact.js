import './Contact.css'

function Contact(){
    return(
        <>
            <div id='contact-layout'>
                <h1>Contact Us:</h1>
                <h3>For more information concerning how best we can 
                    serve you, please reach out to us.
                </h3>
                <div class="doube-container">
                    <form>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Phone Number" />
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default Contact