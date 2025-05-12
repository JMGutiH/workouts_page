interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: '古蒂的运动记录',
  siteUrl: 'https://jmgutih.github.io/workouts_page/',
  logo: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/68463270/26652976/1/large.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://jmgutih.github.io/workouts_page/',
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/68463270',
    },
  ],
};

export default data;
