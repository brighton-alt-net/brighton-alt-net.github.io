import React from "react";
import { Map, Marker } from "pigeon-maps";

import Layout from "../components/Layout";

const meetupLink = "https://www.meetup.com/brightonaltdotnet/";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getNextMeetingDate = (now: Date) => {
  now.setHours(0, 0, 0, 0);
  let candidateMonth = now.getMonth();
  let candidateYear = now.getFullYear();
  for (let i = 0; i < 2; i++) {
    for (var dayOfMonth = 1; dayOfMonth <= 7; dayOfMonth++) {
      let candidateDate = new Date(candidateYear, candidateMonth, dayOfMonth);
      if (candidateDate.getDay() === 2) {
        let yesterday = new Date(now.getTime() - 1000 * 60 * 60 * 24);
        if (candidateDate > yesterday) {
          return (
            monthNames[candidateMonth] +
            " " +
            dayOfMonth +
            " " +
            candidateYear +
            " at 7:30 PM."
          );
        }
      }
    }
    if (candidateMonth === 11) {
      candidateMonth = 0;
      candidateYear++;
    } else {
      candidateMonth++;
    }
    dayOfMonth = 1;
  }
  return "Error setting next meeting date.";
};

const location: [number, number] = [50.826159, -0.138281];

const home: React.FC = () => (
  <Layout
    jumboTronTitle="Brighton ALT.NET"
    jumboTronTagLine="A monthly meetup for C# and .NET developers in Brighton"
  >
    <div className="row">
      <div
        className="col-md-12 p-3 mt-2 mb-4"
        style={{
          backgroundColor: "#56f777",
        }}
      >
        <h2>
          Brighton ALT.NET is back! Please see the{" "}
          <a href={meetupLink}>
            <u>Meetup page</u>
          </a>{" "}
          for more info
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <h2>What?</h2>
        <p>
          Brighton ALT NET is a monthly get together for anyone interested in C#
          and .NET development. We meet at{" "}
          <a href="https://fmgproject.co.uk">The FMG Project</a> on the second
          Thursday of every month at 7.15 pm. It's free. There's no need to
          register or book, just turn up. We've been going for around ten years.
        </p>
        <p>
          It's very informal. Usually around ten to twenty people turn up. We
          have a pile of post-it notes and at the beginning of the evening we
          write down stuff we'd like to talk about. We then vote on the topics
          and talk about them in descending vote order, 15 minutes per question
          until 9 and then 5 minutes per question until the end. We are usually
          finished by 9.30.
        </p>
        <p>It's a really friendly crowd and everyone is welcome.</p>
        <p>
          This site is administered by Steve Hughes, please contact{" "}
          <a href="mailto:steve@ubersteve.com">steve@ubersteve.com</a> for more
          information.
        </p>
        <p>
          Follow <a href="https://twitter.com/toxicgorilla0">Steve Hughes</a> on
          Twitter for updates.
        </p>
        <p>
          Meetup.com page is here <a href={meetupLink}>{meetupLink}</a>
        </p>
      </div>
      <div className="col-md-4">
        <h2>Where?</h2>
        <p>
          <b>
            <a href="https://fmgproject.co.uk">The FMG Project</a>
          </b>
        </p>
        <Map height={300} width={300} defaultCenter={location} defaultZoom={16}>
          <Marker width={50} anchor={location} />
        </Map>
        <p>The address is:</p>
        <p>
          The FMG Project,
          <br />
          24 Kensington Street,
          <br />
          Brighton
          <br />
          BN1 4AJ
        </p>
      </div>
      <div className="col-md-4">
        <h2>When?</h2>
        <p>The second Thursday of every month.</p>
        <p>
          See the <a href={meetupLink}>Meetup page</a> for details about our
          next event
        </p>
      </div>
      <div className="col-md-4">
        <h2>Contribute</h2>
        <p>
          You don't like this site? Can you make it better? Feel free to send a
          pull request to our{" "}
          <a href="https://github.com/brighton-alt-net/brighton-alt-net.github.io">
            GitHub repository.
          </a>
        </p>
      </div>
    </div>
  </Layout>
);

export default home;
