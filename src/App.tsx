import "./App.css";

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header>
        <h1 className="text-4xl font-bold">Dan and Karlee's Wedding</h1>
        <a>RSVP Here</a>
        <img
          src="/src/assets/canyon.jpg"
          alt="Canyon"
          className="image"
        />
      </header>
      <main className="flex flex-col items-center space-y-8 px-4 justify-center">
        <section id="wedding-details">
          <h2 className="section-title">Wedding Details</h2>
          <section id="venue-info" className="mb-2">
            <h3 >Venue Information</h3>
            <p >
              Join us for our special day! Details about the venue, date, and
              time will go here.
            </p>
          </section>
          <section id="parking" className="mb-2">
            <h3 >Parking</h3>
            <p >
              Join us for our special day! Details about the venue, date, and
              time will go here.
            </p>
          </section>
          <section id="schedule" className="text-center">
            <h3 >Schedule</h3>
            <ul id="schedule-list" className="inline-block text-left">
              <li>
                <p >
                  1:00 to 1:45PM - Arrival + Social Time
                </p>
              </li>
              <li>
                <p >2:00 to 2:30PM - Ceremony</p>
              </li>
              <li>
                <p >
                  2:30 to 3:00PM - Reception Line + Hors D'oeuvres
                </p>
              </li>
              <li>
                <p >3:00 to 5:00PM - Dinner</p>
              </li>
              <li>
                <p >
                  5:00 to 7:00PM - Dancing + Desserts
                </p>
              </li>
              <li>
                <p >7:00PM - Send Off</p>
              </li>
            </ul>
          </section>
          <section id="dress-code">
            <h3 >Dress Code</h3>
            <p >
              Please come dressed in formal attire. Additional dress code
              details can be added here.
            </p>
          </section>
        </section>
        <section id="registry">
          <h2 className="section-title">Gift Registry</h2>
          <p >
            Your presence is the greatest gift of all! If you'd like to
            contribute, our gift registry details will be provided here.
          </p>
        </section>
        <section id="our-story">
          <h2 className="section-title">Our Story</h2>
          <p >Story goes here.</p>
          <p>maybe an image gallery/carousel here</p>
        </section>
      </main>
    </div>
  );
}

export default App;
