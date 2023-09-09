import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

import Nav from "./Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/jumbotron.css";

const layout: React.FC<
  PropsWithChildren<{
    title?: string;
    jumboTronTitle?: string;
    jumboTronTagLine?: string;
  }>
> = ({ title, jumboTronTitle, jumboTronTagLine, children }) => (
  <>
    <Helmet
      title={title || "Brighton ALT.Net"}
      htmlAttributes={{
        lang: "en",
      }}
      meta={[
        { name: "charset", content: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
          name: "description",
          content:
            "Brighton ALT.NET - a meetup for C# and .NET developers in Brighton",
        },
        { name: "author", content: "Brighton ALT NET" },
      ]}
    />
    <Nav />

    <main role="main">
      {jumboTronTitle ? (
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">{jumboTronTitle}</h1>
            <p>{jumboTronTagLine}</p>
          </div>
        </div>
      ) : null}
      <div className="container">
        {title ? (
          <div className="row">
            <h1>{title}</h1>
          </div>
        ) : null}
        {children}
      </div>
    </main>

    <footer className="container">
      <p>&copy; Brighton ALT NET {new Date().getFullYear()}</p>
    </footer>
  </>
);

export default layout;
