// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' | ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n

For search engine commands such as 'reddit' and 'google' type your desired search after the command:
Example: 'reddit ducks' will pull up reddit results for ducks

[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display a summary with links.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

export const github_profile = async (args: string[]): Promise<string> => {
  window.open(`${config.github_profile}`);
  return 'Opening Github profile...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin profile...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hey, I am ${config.name}. 
Welcome to my site!
More about me:
'sumfetch' - a short summary with links
'resume' - latest iteration of my resume
'github' - my Github profile
'readme' - the repo readme`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Bing? Have fun with your 6 results for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `only directory here is the one to your heart <3`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `what are you gonna cd into? there's nothing here`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `what is 'vi', grandpa?`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim'? that's so 1991`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `ooo pretty colors`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `I just use nano`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=X2WH8mHJnhM&autoplay=1', '_blank');
  return `Nah, no sudo for you`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██╗  ██╗██╗   ██╗██████╗ ██████╗ ███████╗██╗  ██╗   ██╗██╗   ██╗
██║ ██╔╝██║   ██║██╔══██╗██╔══██╗██╔════╝██║  ╚██╗ ██╔╝╚██╗ ██╔╝
█████╔╝ ██║   ██║██████╔╝██████╔╝█████╗  ██║   ╚████╔╝  ╚████╔╝ 
██╔═██╗ ██║   ██║██╔══██╗██╔══██╗██╔══╝  ██║    ╚██╔╝    ╚██╔╝  
██║  ██╗╚██████╔╝██║  ██║██║  ██║███████╗███████╗██║      ██║   
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝      ╚═╝   
Networking, Cybersecurity, & Project Management

Type 'sumfetch' to display my summary
Type 'resume' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.resume_url}" target="_blank">here</a></u> for my resume
Type 'linkedin' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.linkedin}" target="_blank">here</a></u> for my linkedin
Type 'github_profile' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.github_profile}" target="_blank">here</a></u> for my Github profile
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repo
Type 'help' to see the list of available commands
`;
};
