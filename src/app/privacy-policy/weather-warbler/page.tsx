export default function Page() {
    return (
        <div>
            <section id="about" className="section">
                <div className="container">
                    <h1 className="title warbler-yellow">Weather Warbler by Softklass - Privacy Policy</h1>
                    <br/><br/>
                    <h2 className="subtitle warbler-yellow">
                        CHILDREN
                    </h2>
                    <p>
                        Weather Warbler is not intended for children under 13 years of age. We advise children under the
                        age
                        of 13 to not use this application.
                    </p>

                    <br/><br/>
                    <h2 className="subtitle warbler-yellow">
                        DATA
                    </h2>
                    <p>We do not collect any data. The only data involved in this app is locations you search for, and
                        that
                        is saved in the database on the device and later retrieved to search for weather based on those
                        locations. No data of any kind is collected or shared.</p>

                    <br/><br/>
                    <h2 className="subtitle warbler-yellow">
                        LOCATION DATA
                    </h2>
                    <p>Unlike many weather applications, this application does not use location services to get the
                        weather.
                        Rather, the user can use the location search feature for locations to use.</p>
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