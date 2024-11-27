export default function Page() {
    return (
        <div>
            <section id="about" className="section">
                <div className="container">
                    <h1 className="title has-text-warning">Tokenator by Softklass - Privacy Policy</h1>
                    <br/><br/>
                    <h2 className="subtitle has-text-warning">
                        CHILDREN
                    </h2>
                    <p>
                        Tokenator is not intended for children under 13 years of age. We advise children under the age
                        of 13 to not use this application.
                    </p>
                    <br/><br/>
                    <h2 className="subtitle has-text-warning">
                        DATA
                    </h2>
                    <p>We do not collect any data. The only data involved in this app is what you choose to save in
                        terms of passwords. The passwords do not save to any other database other than the local device
                        database. The passwords are encrypted before saving to the database and requires the application
                        to unlock the encrypted passwords. No data of any kind is collected or shared.</p>
                </div>
            </section>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Softklass</strong>. Imagine, perfect simplicity.
                    </p>
                </div>
            </footer>

        </div>
    );
}