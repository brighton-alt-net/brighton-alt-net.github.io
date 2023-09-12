import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Nav from "./Nav";

import "bootstrap/dist/css/bootstrap.min.css";

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

    <main role="main" style={{ paddingTop: "3.5rem" }}>
      {jumboTronTitle ? (
        <div
          className="jumbotron p-0"
          style={{ display: "grid" }}
        >
          <StaticImage
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: 134 + 64 + 64,
            }}
            // You can optionally force an aspect ratio for the generated image
            // This is a presentational image, so the alt should be an empty string
            alt=""
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src={"../images/brighton-alt-net.png"}
            formats={["auto", "webp", "avif"]}
          />
          <div
            className="container"
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              display: "grid",
            }}
          >
            <div
              className="text-white"
              style={{ paddingTop: 64, textShadow: "black 0.3em 0.3em 0.3em" }}
            >
              <h1 className="display-3">{jumboTronTitle}</h1>
              <p>{jumboTronTagLine}</p>
            </div>
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
