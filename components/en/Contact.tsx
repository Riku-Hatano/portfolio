const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <h1>Contact me</h1>
                <p>Thanks for reading! If you need contact, please send message through the form or below social medias!</p>
                <form>
                    <article>
                        <input type="text" name="name" placeholder="Your Name"/>
                        <input type="email" name="email" placeholder="Your Email Address"/>
                    </article>
                    <textarea name="message" placeholder="Message here"></textarea>
                    <button type="submit">submit</button>
                </form>
            </section>
        </>
    )
}

export default Contact;