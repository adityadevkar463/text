import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: ", USA TODAY",
      title: "Spain election vote ends in stalemate - USA TODAY",
      description:
        "Spain was thrust into political uncertainty after the Popular Party narrowly won the country's election but without securing the majority needed to topple Prime Minister Pedro Sánchez.",
      url: "https://www.usatoday.com/story/news/world/2023/07/24/spain-election-vote/70454861007/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/07/24/USAT/2a450c51-fca0-4c96-bbc7-9d8e2a0c1236-AP_Spain_Election.jpeg?auto=webp&crop=2997,1686,x1,y94&format=pjpg&width=1200",
      publishedAt: "2023-07-25T12:25:59Z",
      content:
        "Spain was plunged into political uncertainty Monday a day after Alberto Núñez Feijóo's conservative Popular Party narrowly won the country's national election but without securing the parliamentary m… [+1856 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Simone McCarthy",
      title:
        "Xi Jinping’s foreign minister ousted after month-long unexplained absence from public view - CNN",
      description:
        "China’s foreign minister Qin Gang was dramatically ousted on Tuesday after a prolonged absence from public view and replaced by his predecessor in a surprising and highly unusual shake-up of the country’s foreign policy leadership.",
      url: "https://www.cnn.com/2023/07/25/china/china-foreign-minister-qin-gang-replaced-wang-yi-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230725124629-01-wang-yi-qin-gang-split.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-25T12:08:00Z",
      content:
        "Chinas foreign minister Qin Gang was dramatically ousted on Tuesday after a prolonged absence from public view and replaced by his predecessor in a surprising and highly unusual shake-up of the count… [+4599 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author:
        "Alexander Osipovich, Charley Grant, Tom Fairless, Anna Hirtenstein, Eric Wallerstein, Matthew Thomas, Weilun Soon, Heard Editors",
      title:
        "Stock Market Today: Dow Futures Hover Ahead of Alphabet, Microsoft Earnings - The Wall Street Journal",
      description:
        "Live coverage of what's moving stocks and other markets, including the Dow Jones Industrial Average, S&P 500 and Nasdaq Composite",
      url: "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-07-25-2023",
      urlToImage: "https://images.wsj.net/im-785590/social",
      publishedAt: "2023-07-25T11:46:00Z",
      content:
        "Technology stocks are poised to open mostly higher on a busy day of earnings, including results from Microsoft and Google parent Alphabet. Second-quarter earnings season is in full swing, with nearly… [+1594 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: null,
      title:
        "Sources - Saquon Barkley, Giants reach 1-year, up to $11M deal - ESPN - ESPN",
      description:
        "The Giants and RB Saquon Barkley have agreed to a 1-year deal worth up to $11 million, sources confirmed Tuesday to ESPN.",
      url: "https://www.espn.com/nfl/story/_/id/38067192/sources-saquon-barkley-giants-agree-1-year-11m-deal",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0705%2Fr1194453_1296x729_16%2D9.jpg",
      publishedAt: "2023-07-25T11:27:00Z",
      content:
        "Jul 25, 2023, 07:27 AM ET\r\nRunning back Saquon Barkley and the New York Giants have agreed to terms on a one-year deal worth up to $11 million, sources confirmed to ESPN.\r\nThe deal also includes a $2… [+1298 chars]",
    },
    {
      source: {
        id: null,
        name: "Detroit Free Press",
      },
      author: "Eric D. Lawrence",
      title:
        "GM reports $2.5B in net income, boosts guidance, but takes hit from Bolt recall - Detroit Free Press",
      description:
        "GM, which timed its earnings for release Tuesday, reported revenue of $45 billion, up 25% from $36 billion, compared with the same period in 2022.",
      url: "https://www.freep.com/story/money/cars/general-motors/2023/07/25/gm-second-quarter-2023-bolt-recall/70457018007/",
      urlToImage:
        "https://www.freep.com/gcdn/-mm-/a2b3b00495d9874ddda413c64d72d1757dc4041b/c=0-59-335-248/local/-/media/2015/10/29/DetroitFreePress/DetroitFreePress/635817378369228869-GM-RenCen.JPG?width=335&height=189&fit=crop&format=pjpg&auto=webp",
      publishedAt: "2023-07-25T10:34:54Z",
      content:
        "General Motors reported a big boost in its net income for the second quarter of 2023 to more than $2.5 billion despite agreeing to pay almost $800 million connected to the Chevrolet Bolt EV and Bolt … [+4581 chars]",
    },
    {
      source: {
        id: null,
        name: "Jalopnik",
      },
      author: "Erin Marquis",
      title: "2024 Ford Mustang GT: The American Dream Car - Jalopnik",
      description:
        "The sports car for everyone is quicker, stiffer and more refined than ever before.",
      url: "https://jalopnik.com/2024-ford-mustang-gt-american-dream-car-manual-1850670574",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7b9ce4541e9b10ec052071a86c299086.jpg",
      publishedAt: "2023-07-25T10:00:00Z",
      content:
        "Picture it; Los Angeles, 2024, and theres a new generation of a storied two-door coupe (aka an actual coupe) that comes standard with a 6-speed manual transmission and a vicious five-liter V8 under t… [+5689 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "Wildfire closes Sicily airport; storms kill two in northern Italy - Al Jazeera English",
      description:
        "Car and train traffic also disrupted due to fire near Palermo’s airport as trees fall and buildings damaged in Milan.",
      url: "https://www.aljazeera.com/news/2023/7/25/wildfire-closes-sicily-airport-storms-kill-two-in-northern-italy",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/07/2023-07-25T083718Z_1997706671_RC28A2ASAD92_RTRMADP_3_EUROPE-WEATHER-ITALY-WILDFIRES-1690276900.jpg?resize=1200%2C675",
      publishedAt: "2023-07-25T09:58:07Z",
      content:
        "A wildfire has closed the Palermo airport in Sicily, and storms have killed at least two people in northern Italy as extreme weather batters the length of the country.\r\nThe airport in the Sicilian ca… [+2034 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Kelly Kasulis Cho, Jennifer Hassan",
      title:
        "Ukraine live briefing: Russia threatens retaliation after Moscow drone attack; Odessa fears more strikes - The Washington Post",
      description:
        "Odessa, a Ukrainian port city, braced for more assaults after days of Russian missile attacks that have killed at least one person and injured many more.",
      url: "https://www.washingtonpost.com/world/2023/07/25/russia-ukraine-war-news/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AFP7K2VUKBKT6AZZEMTMWBVQMY.JPG&w=1440",
      publishedAt: "2023-07-25T09:54:00Z",
      content:
        "Russia said it had the right to take tough retaliatory measures after claiming it thwarted two drone attacks in Moscow on Monday, which shattered windows on the 17th and 18th floors of a skyscraper b… [+4608 chars]",
    }
  ]
  constructor() {
    super();
    console.log("this is a constructor");
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey- Top headlines</h2>
        <div className="row my-3">
          {this.state.articles.map((element)=>{
           return   <div className="col-md-4" >
              <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageurl={element.urlToImage}
              newsurl={element.url}
              />
            </div>


          })}
        </div>
      </div>
    );
  }
}

export default News;
