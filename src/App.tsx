import "./App.css";

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="flex flex-col items-center text-center pt-8 pb-2">
        <h1 className="text-4xl font-bold">Dan and Karlee's Wedding</h1>
        <a>RSVP Here</a>
        <img
          src="/src/assets/canyon.jpg"
          alt="Canyon"
          className="w-2/3 h-auto rounded-lg shadow-md mb-4 mx-auto "
        />
      </header>
      <main className="flex flex-col items-center space-y-8 px-4 justify-center">
        <section id="wedding-details" className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Wedding Details</h2>
          <section id="venue-info" className="mb-2">
            <h3 className="text-1xl font-bold">Venue Information</h3>
            <p className="text-sm font-normal">
              Join us for our special day! Details about the venue, date, and
              time will go here.
            </p>
          </section>
          <section id="parking" className="mb-2">
            <h3 className="text-1xl font-bold">Parking</h3>
            <p className="text-sm font-normal">
              Join us for our special day! Details about the venue, date, and
              time will go here.
            </p>
          </section>
          <section id="schedule" className="text-center">
            <h3 className="text-1xl font-bold">Schedule</h3>
            <ul id="schedule-list" className="inline-block text-left">
              <li>
                <p className="text-sm font-normal">
                  1:00 to 1:45PM - Arrival + Social Time
                </p>
              </li>
              <li>
                <p className="text-sm font-normal">2:00 to 2:30PM - Ceremony</p>
              </li>
              <li>
                <p className="text-sm font-normal">
                  2:30 to 3:00PM - Reception Line + Hors D'oeuvres
                </p>
              </li>
              <li>
                <p className="text-sm font-normal">3:00 to 5:00PM - Dinner</p>
              </li>
              <li>
                <p className="text-sm font-normal">
                  5:00 to 7:00PM - Dancing + Desserts
                </p>
              </li>
              <li>
                <p className="text-sm font-normal">7:00PM - Send Off</p>
              </li>
            </ul>
          </section>
          <section id="dress-code" className="w-full max-w-2xl">
            <h3 className="text-1xl font-bold">Dress Code</h3>
            <p  className="text-sm font-normal">
              Please come dressed in formal attire. Additional dress code
              details can be added here.
            </p>
          </section>
        </section>
        <section id="registry" className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Gift Registry</h2>
          <p className="text-gray-700">
            Your presence is the greatest gift of all! If you'd like to
            contribute, our gift registry details will be provided here.
          </p>
        </section>
        <section id="our-story" className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">Story goes here.</p>
          <p>maybe an image gallery/carousel here</p>
        </section>
      </main>
    </div>
  );
}

export default App;
