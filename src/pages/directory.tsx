import React, { Fragment } from "react";
import Layout from "../components/Layout";
import { sortBy } from "lodash";

const members = [
  {
    name: "Mike Hadlow Freelance",
    title: ".NET Developer, Architect and Blogger",
    links: ["http://mikehadlow.com/"],
  },
  {
    name: "Iain Holder",
    title: ".NET Developer",
    links: ["http://twitter.com/iainholder"],
  },
  {
    name: "Keith Bloom",
    title: "Freelance .Net developer",
    links: [
      "http://keithbloom.blogspot.co.uk/",
      "http://twitter.com/keith_bloom",
    ],
  },
  {
    name: "Graham Scott",
    title: ".NET Developer",
    links: ["http://www.twitter.com/grahamscott"],
  },
  { name: "Mark Perry", title: ".NET Developer", links: [] },
  { name: "Steve Mason", title: "Senior .NET Developer", links: [] },
  {
    name: "Mark Harrison",
    title: ".NET Developer",
    links: ["http://twitter.com/harrisonmeister"],
  },
  {
    name: "Michelle Steele",
    title: ".NET/C++ Developer",
    links: ["http://twitter.com/octoberclub"],
  },
  { name: "Dave Morrow", title: ".NET Developer", links: [] },
  { name: "Mike Hook", title: ".NET Developer", links: [] },
  {
    name: "Andrew Cherry",
    title: "Developer/Architect",
    links: ["http://xyncro.com/"],
  },
  { name: "Garry Shutler", title: "Developer", links: [] },
  { name: "Paul Hadfield", title: "Senior .NET Developer", links: [] },
  {
    name: "Iain Partington",
    title: ".NET Developer",
    links: ["http://twitter.com/ipartington"],
  },
  {
    name: "Julian Samuel",
    title: "Freelance .NET Developer",
    links: ["http://www.juliansamuel.co.uk/"],
  },
  {
    name: "Duncan Goodall",
    title: ".NET Developer",
    links: ["http://twitter.com/duncangoodall"],
  },
  {
    name: "Stamati-Crook",
    title:
      "Microsoft CRM and Sage 50 developer also interested in SMS/EPUB/DRUPAL",
    links: ["http://www.redware.com"],
  },
  {
    name: "Marc Ziman",
    title: "Architect/Developer",
    links: ["http://flat9.wordpress.com/"],
  },
  {
    name: "Simon Harriyott",
    title: ".NET Developer Contractor",
    links: ["http://harriyott.com", "http://twitter.com/harriyott"],
  },
  {
    name: "Steve Moss",
    title: "ASP.NET developer, Kentico CMS implementation",
    links: ["http://www.appetere.com"],
  },
  {
    name: "Paul Hazells",
    title: ".NET Developer / Contractor",
    links: ["http://twitter.com/paul_bitsprint"],
  },
  {
    name: "James Cowan",
    title: "Freelance Developer",
    links: ["http://www.jamescowan.org.uk/"],
  },
  {
    name: "Paul Taylor",
    title: "AngularJS, .NET, SQL Server and DotNetNuke Developer / Contractor",
    links: ["https://uk.linkedin.com/in/dotcomsoftware"],
  },
  {
    name: "Patrick Hastings",
    title: ".Net Developer WPF/MVC/Nhibernate",
    links: ["http://www.brighthelmsolutions.com/"],
  },
  {
    name: "James Bradshaw Freelance",
    title: ".NET Developer",
    links: ["http://twitter.com/jamesbradshaw"],
  },
  {
    name: "Jay Kannan",
    title: "A Microsoft technologies enthusiast and Video Game developer.",
    links: ["http://twitter.com/JayKannan"],
  },
  {
    name: "Andrew Hancox",
    title: "Senior Web Developer",
    links: ["http://uk.linkedin.com/in/andrewdchancox"],
  },
  {
    name: "Anthony Johnston",
    title: ".NET Developer ",
    links: ["http://antix.co.uk"],
  },
  {
    name: "John Clynes",
    title: "Technical Director",
    links: ["http://www.15below.com/"],
  },
  {
    name: "Andrew Jutton",
    title: ".Net Developer",
    links: ["http://blog.devscrum.net"],
  },
  {
    name: "Antony Koch",
    title: "Senior .Net Developer",
    links: ["http://iamkoch.com"],
  },
  {
    name: "Kim Richmond",
    title: "Freelance .NET Developer and occasional Code Retreat organiser",
    links: ["http://twitter.com/lethrir"],
  },
  {
    name: "Steven Spencer",
    title: ".Net Developer WPF/MVC/EF currently looking at NopCommerce",
    links: [],
  },
  {
    name: "Steve Johnstone",
    title: ".Net Developer and Project Manager",
    links: ["http://www.stejay.com/"],
  },
  {
    name: "Goncalo Melo",
    title: ".NET Developer",
    links: ["http://twitter.com/bonesbrigadier"],
  },
  {
    name: "Martyn Osborne",
    title: "Support",
    links: ["http://twitter.com/zzdtri"],
  },
  { name: "Jonathan Sewell", title: ".NET Developer at Cubeworks", links: [] },
  { name: "Karl Nilsson", title: ".NET Developer", links: [] },
  {
    name: "Gavin Draper",
    title: ".Net Developer",
    links: ["http://twitter.com/gavdraper"],
  },
  {
    name: "Rob Kent",
    title: "idler, contractor, contrarian.",
    links: ["http://proofbydesign.com"],
  },
  {
    name: "Jonathan Archibald",
    title: ".Net Developer",
    links: ["http://www.brightwave.co.uk/blog-authors/jonathan"],
  },
  {
    name: "John Harman",
    title: ".NET and front end developer",
    links: ["http://twitter.com/johnharmanwho"],
  },
  {
    name: "Michael Marshall",
    title: ".Net Developer",
    links: ["http://twitter.com/BtnMike"],
  },
  {
    name: "Ian Thomson",
    title: ".Net enthusiast",
    links: ["http://www.anaapps.com"],
  },
  {
    name: "Rich Green",
    title: "Umbraco CMS Developer",
    links: ["http://twitter.com/richie_green"],
  },
  {
    name: "Kevin O'Shaughnessy ",
    title:
      "Senior Application Developer at Quartix blog outlier developer guest blog LinkedIn Twitter",
    links: [],
  },
  {
    name: "Dave Mateer",
    title: ".NET Developer for Quorum Network Resources",
    links: ["http://www.github.com/djhmateer"],
  },
  {
    name: "John Dillon",
    title: ".NET Developer, NopCommerce",
    links: ["http://www.accu-web.co.uk"],
  },
  {
    name: "Scott Lawson",
    title: ".NET Developer & MD at Trackpal",
    links: ["http://www.trackpal.co.uk"],
  },
  {
    name: "Steve Hughes",
    title: ".NET Developer",
    links: ["http://www.ubersteve.com"],
  },
  {
    name: "Lyubomir Velchev",
    title: "Software Engineer & .Net Developer, Contractor",
    links: ["http://www.velchev.co.uk"],
  },
  {
    name: "James World",
    title:
      "Independent .NET Developer, Architect and Blogger blog company  linked in",
    links: ["http://twitter.com/jamesw0rld"],
  },
  {
    name: "Dave Hinton",
    title: ".NET Developer for Quorum Network Resources",
    links: ["http://www.qnrl.com"],
  },
  {
    name: "Ian Thomas",
    title: ".NET Developer, TUI Education blog  linked in",
    links: ["http://twitter.com/ianthomas_uk"],
  },
  {
    name: "Arijus Gilbrantas",
    title: ".Net Developer  linked in",
    links: ["http://twitter.com/arijusg"],
  },
  {
    name: "Matt McCorry",
    title: ".NET and TypeScript Developer",
    links: ["https://github.com/luhis"],
  },
];

const sorted = sortBy(members, (a) => a.name);

const Directory: React.FC = () => (
  <Layout title="Directory">
    {sorted.map((member) => (
      <p key={member.name}>
        {member.name} - {member.title}{" "}
        {member.links.map((link, i) => (
          <Fragment key={link}>
            <a target="_blank" href={link}>
              {link}
            </a>
            {i === sorted.length - 1 ? "" : " "}
          </Fragment>
        ))}
      </p>
    ))}
  </Layout>
);

export default Directory;
