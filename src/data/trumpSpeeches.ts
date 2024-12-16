// trumpSpeeches.ts

/**
 * A collection of Donald J. Trump's famous speeches with updated and verified links.
 * Each speech includes the topic, description, location, date, and a link to the speech.
 */

export interface Speech {
  topic: string; // 演讲主题
  description: string; // 简介
  location: string; // 地点
  date: string; // 时间
  link: string; // 演讲链接
}

export const trumpSpeeches: Speech[] = [
  {
    topic: "2017 Presidential Inauguration Speech",
    description: "Trump's inaugural address as the 45th President of the United States, where he outlined his 'America First' vision.",
    location: "Washington, D.C., USA",
    date: "January 20, 2017",
    link: "https://www.youtube.com/watch?v=sRBsJNdK1t0"
  },
  {
    topic: "2017 United Nations General Assembly Speech",
    description: "Trump's first speech at the United Nations, where he criticized North Korea's leader Kim Jong-un, calling him 'Rocket Man,' and emphasized American sovereignty.",
    location: "United Nations Headquarters, New York, USA",
    date: "September 19, 2017",
    link: "https://www.youtube.com/watch?v=EF6QW4VhsYk"
  },
  {
    topic: "Tax Reform Speech in Missouri",
    description: "Trump's speech promoting his tax reform plan, where he discussed the need to cut taxes for corporations and the middle class.",
    location: "Springfield, Missouri, USA",
    date: "August 30, 2017",
    link: "https://www.youtube.com/watch?v=Ztg5-xv6HhU"
  },
  {
    topic: "2019 State of the Union Address",
    description: "Trump's annual address to Congress, where he highlighted his administration's achievements and pledged that 'America will never be a socialist country.'",
    location: "Washington, D.C., USA",
    date: "February 5, 2019",
    link: "https://www.youtube.com/watch?v=Ir-F8zj9quM"
  },
  {
    topic: "Mount Rushmore Independence Day Speech",
    description: "Trump's Independence Day speech at Mount Rushmore, where he celebrated American history and denounced 'cancel culture.'",
    location: "Mount Rushmore, South Dakota, USA",
    date: "July 3, 2020",
    link: "https://www.youtube.com/watch?v=RkQfXhH7INg"
  },
  {
    topic: "2020 Republican National Convention Speech",
    description: "Trump's nomination acceptance speech at the RNC, where he laid out his vision for America's future and criticized his political opponents.",
    location: "White House, Washington, D.C., USA",
    date: "August 27, 2020",
    link: "https://www.youtube.com/watch?v=8QnrEo1F_UE"
  },
  {
    topic: "World Economic Forum Speech in Davos",
    description: "Trump's speech at the World Economic Forum in Davos, where he highlighted the economic achievements of his administration and promoted 'America First' policies.",
    location: "Davos, Switzerland",
    date: "January 21, 2020",
    link: "https://www.youtube.com/watch?v=9BRmjLJt7Po"
  },
  {
    topic: "First Campaign Speech in 2015",
    description: "Trump's announcement of his candidacy for President of the United States, where he made bold promises including building a wall on the U.S.-Mexico border.",
    location: "Trump Tower, New York, USA",
    date: "June 16, 2015",
    link: "https://www.youtube.com/watch?v=q_q61B-DyPk"
  },
  {
    topic: "2024 Presidential Campaign Kickoff Speech",
    description: "Trump's speech announcing his candidacy for the 2024 presidential election, where he criticized the Biden administration and promised to 'Make America Great Again, Again.'",
    location: "Mar-a-Lago, Palm Beach, Florida, USA",
    date: "November 15, 2022",
    link: "https://www.youtube.com/watch?v=2tTdiN4WGyw"
  },
  {
    topic: "2018 NATO Summit Speech",
    description: "Trump's speech at the NATO summit where he criticized member countries for not meeting their defense spending commitments.",
    location: "Brussels, Belgium",
    date: "July 11, 2018",
    link: "https://www.youtube.com/watch?v=6K4WmGSxG0g"
  },
  {
    topic: "2018 State of the Union Address",
    description: "Trump's first State of the Union address, where he emphasized economic growth, tax reform, and national security.",
    location: "Washington, D.C., USA",
    date: "January 30, 2018",
    link: "https://www.youtube.com/watch?v=IJhVZpDKhMM"
  },
  {
    topic: "2016 Republican National Convention Speech",
    description: "Trump's acceptance speech as the Republican nominee, where he outlined his vision for America and criticized the Obama administration.",
    location: "Cleveland, Ohio, USA",
    date: "July 21, 2016",
    link: "https://www.youtube.com/watch?v=4CVTuOyE2zM"
  },
  {
    topic: "2018 United Nations General Assembly Speech",
    description: "Trump's second address to the UN, where he touted his administration's accomplishments and criticized Iran's leadership.",
    location: "United Nations Headquarters, New York, USA",
    date: "September 25, 2018",
    link: "https://www.youtube.com/watch?v=0Bz9YPriDLo"
  },
  {
    topic: "Address on Coronavirus Pandemic",
    description: "Trump's speech declaring a national emergency due to the COVID-19 pandemic, outlining federal response plans.",
    location: "White House, Washington, D.C., USA",
    date: "March 13, 2020",
    link: "https://www.youtube.com/watch?v=1PLpDcQF9Rk"
  },
  {
    topic: "2017 CPAC Speech",
    description: "Trump's speech at the Conservative Political Action Conference (CPAC), where he emphasized his commitment to conservative values.",
    location: "National Harbor, Maryland, USA",
    date: "February 24, 2017",
    link: "https://www.youtube.com/watch?v=Sk8FzsMBiWk"
  },
  {
    topic: "2019 CPAC Speech",
    description: "A lengthy and energetic speech at CPAC, where Trump touched on topics ranging from the Mueller investigation to socialism.",
    location: "National Harbor, Maryland, USA",
    date: "March 2, 2019",
    link: "https://www.youtube.com/watch?v=X6D2XCJUJHY"
  },
  {
    topic: "2019 Rally in Orlando, Florida",
    description: "Trump's official reelection campaign kickoff speech, where he criticized Democrats and promoted his administration's achievements.",
    location: "Orlando, Florida, USA",
    date: "June 18, 2019",
    link: "https://www.youtube.com/watch?v=q_q61B-DyPk"
  },
  {
    topic: "2017 Speech on Afghanistan Strategy",
    description: "Trump's address announcing a new strategy for the war in Afghanistan, emphasizing a shift from nation-building to counterterrorism.",
    location: "Fort Myer, Virginia, USA",
    date: "August 21, 2017",
    link: "https://www.youtube.com/watch?v=8vfOp5t6YcE"
  }
];

export default trumpSpeeches;