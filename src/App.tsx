import "./App.css";

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header>
        <h1 className="text-4xl font-bold">Dan and Karlee's Wedding</h1>
        <a>RSVP Here</a>
        <img src="images/canyon.jpg" alt="Canyon" className="image" />
      </header>
      <main className="flex flex-col items-center space-y-8 px-4 justify-center">
        <section id="wedding-details">
          <h2 className="section-title">Wedding Details</h2>
          <section id="venue-info" className="mb-2">
            <h3>Venue Information</h3>
            <p>
              Join us for our special day! We'll be hosting our wedding at the
              McElroy family home in Tulalip, WA on Saturday, July 18th, 2026.
              The ceremony will be set alongside the koi pond in view of the
              Cascades. After the ceremony we'll be moving to a covered tent for
              the remainder of the event.
              <br />
              The address of the event is
              <a href="https://maps.app.goo.gl/JDXH5XJP8QQ1xuts9">
                {" "}
                13313 11th Ave NE, Tulalip, WA 98271
              </a>
              .
            </p>
          </section>
          <section id="parking" className="mb-2">
            <h3>Parking</h3>
            <p>
              Parking will be available in the driveway of the property. Please
              be careful to not block the main house garage doors or the
              driveway into the yard. If you are ablebodied and willing to walk
              ~10 minutes, there is additional parking two houses down at{" "}
              <a href="https://maps.app.goo.gl/uVdpeTK68GsqeNqz8">
                13501 11th Ave NE, Tulalip, WA 98271
              </a>
              . If there's no parking left and you do need to park at this
              second residence and are unable to walk over, please reach out to
              PHONE NUMBER when you arrive to arrange a pickup.
            </p>
          </section>
          <section id="schedule" className="text-center">
            <h3>Schedule</h3>
            <ul id="schedule-list" className="inline-block text-left">
              <li>
                <p>1:00 to 1:45PM - Arrival + Social Time</p>
              </li>
              <li>
                <p>2:00 to 2:30PM - Ceremony</p>
              </li>
              <li>
                <p>2:30 to 3:00PM - Reception Line + Hors D'oeuvres</p>
              </li>
              <li>
                <p>3:00 to 5:00PM - Dinner</p>
              </li>
              <li>
                <p>5:00 to 7:00PM - Dancing + Desserts</p>
              </li>
              <li>
                <p>7:00PM - Send Off</p>
              </li>
            </ul>
          </section>
          <section id="food">
            <h3>Food</h3>
            <p>
              Dinner will be buffet style catering provided by All Rice Thai Hut. There will
              be Papaya Salad, Fried Rice, Pad Thai, Garlic Black Pepper Stir Fry, and Panang Curry.
              Vegetarian, gluten free, and dairy-free options will be available.
              Desserts will include homemade Pennsylvania Dutch treats like
              DESSERT1, DESSERT2, DESSERT3.
            </p>
          </section>
          <section id="dress-code">
            <h3>Dress Code</h3>
            <p>
              Please come dressed in "dressy casual" attire. Chinos and pants,
              dress shirts and ties, sundresses, skirts, nice shoes, etc. are
              all great options! <b>Please do not wear heels</b> as this event
              will be outdoors in grass and we don't want anyone to get hurt!
            </p>
          </section>
        </section>
        <section id="registry">
          <h2 className="section-title">Gift Registry</h2>
          <p>
            Your presence is the greatest gift of all! Gifts are not necessary,
            but if you'd like to contribute to our honeymoon fund you can do so{" "}
            <a>here</a>.
          </p>
        </section>
        <section id="our-story">
          <h2 className="section-title">Our Story</h2>
          <p>It started with a picture of a bumblebee and a pair of pink pants.</p>
          {/* We met at a Bequest Coffee in Mill Creek and despite all attempts to
            take things slow, we ended up going out for rock climbing and Thai
            food two nights later. A month in, Karlee was charmed when Dan made
            her homemade chicken soup as she fought a cold. Dan found Karlee's
            habit of identifying flora on hikes together endearing, and added
            their own commentary on paw print identification and duck plumage. A
            month in, we were official. */}
          <p>maybe an image gallery/carousel here</p>
        </section>
      </main>
    </div>
  );
}

export default App;
