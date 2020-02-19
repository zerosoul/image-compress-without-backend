import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';

export default function GithubRibbon() {
  return (
    <GitHubForkRibbon
      position="left-top"
      color="green"
      href="//github.com/zerosoul/image-compress-without-backend"
      target="_blank"
    >
      Fork me on Github
    </GitHubForkRibbon>
  );
}
