import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "0.25rem" }}
        >
          <a
            class="button button--primary"
            href="https://github.com/richardahn"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            class="button button--primary"
            href="https://www.linkedin.com/in/richardahn/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={"home"}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
