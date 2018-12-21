---
layout: lessons
module: 5
lesson: 1
title: Search Engine Optimization
description: Intro to SEO, tips and tricks for optimization.
permalink: module5-1.html
class: module5-1
---

## Tools for this class

You will need to install:
* [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) - it's a free tool for SEO audits on large websites
* [Keywords Everywhere](https://keywordseverywhere.com/) - a Chrome browser extension, also free. You will need to activate the plugin by entering your email to obtain an API key. Ask your mentors if you need help!


## What is SEO?

Search Engine Optimization (SEO) is the process of affecting the visibility of a website or a web page in a search engine's *unpaid* results — often referred to as "natural," "organic," or "earned" results. Simply put - how can you get more eyes on your site without paying for ads?

## Why spend time working on SEO for your website?

Gaining high positions in rankings for valuable keywords can provide you with consistent, high-quality traffic (real people, not bots) that will result in visitors taking preferred action on your website.

### Pros of SEO:
- Consistent traffic flow
- “Free” traffic
- High conversion rates


### Cons of SEO:
- Initial time investment can be quite heavy
- Volatile to search engine algorithm updates
- Depending on the niche, can be quite competitive

### Goals of the website:
- Sales (E-commerce)
- Leads (Get a quote, request a demo, Learn more)
- Donations (Non-governmental organizations, non-profit organizations, charities)
- Advertising revenue (Blogs)
- Partnerships (Getting involved, volunteering, etc.)
- Job (Personal portfolio & resume website)
- Brand awareness (Viral campaigns)

## How do we know that SEO is working?

<div class="summary">

### SEO Metrics:

</div>

<div class="details">

- Rankings (aka SERP - Search Engine Ranking Position) - how high does the website appear in the search results for a particular keyword?
	- Example goal: Increase SERP from 12 to 5 for [keyword]
![]({{ site.img }}/module4/seo-searchresult-analysis.png)

- Organic Traffic - how many visits did the website get through organic search engine results?
	- Use [Google Analytics](https://www.google.com/analytics/) to track
	- Example goal: Increase organic traffic to the site by 15% in the next year

![]({{ site.img }}/module4/seo-analytics-report.png)

- Conversions - how successful is the website at getting visitors to take action on the website?
	- Use [Google Analytics](https://www.google.com/analytics/) to track.
	- Example goal: Increase the conversion rate of the page by 0.5%

![]({{ site.img }}/module4/seo-goal-completion.png)

- Domain Authority - a score developed by [Moz](https://moz.com/) that predicts how well a website will rank on search engine result pages (SERP). Domain authority uses a scale from 0 to 100. A high domain authority score means your  website has the potential to rank well in search engine results. Use [Moz Bar Extension](https://chrome.google.com/webstore/detail/mozbar/eakacpaijcpapndcfffdgphdiccmpknp?hl=en) to find your Domain Authority score.

</div>

## What can we do to optimize our website?

1. Technical SEO
1. Content & Keywords
1. Authority Building

## Technical SEO
How to make sure search engines can access, “read” and evaluate your website.

Since search engine robots (aka spiders, bots, or crawlers) can’t *see* the website the way you or your visitors can. It’s important to ensure they can access your website and its contents, process that content, and be able to make a decision about what position you should rank for.

### How can we do so?

<div class="summary">

#### Sitemap

</div>

<div class="details">

A Sitemap is just a listing of all of the pages that make up your website. You can [use this website](https://www.xml-sitemaps.com/) to generate a sitemap for free.

A valid sitemap is an [XML](https://www.w3.org/XML/) file - you will notice it looks similar to HTML in syntax, but it is actually a different language. Just like HTML, it is comprised of opening and closing tags, but the tags can be created by you - not restricted to a set of valid tags (eg. `h1`, `nav`, `p`).

Once the sitemap has been made, you need to submit it to search engines so they know where to look for it. You will have to set up an account with [Google Webmaster](https://www.google.com/webmasters/tools/) to submit your sitemap to Google. [Bing](https://www.bing.com/toolbox/webmaster) has a similar tool.

> Here are some step-by-step instructions on how to submit your sitemap once your webmaster accounts have been created:
> * [Submit Sitemaps to Bing](https://www.bing.com/webmaster/help/how-to-submit-sitemaps-82a15bd4) - doing this [will also submit your sitemap to Yahoo's search engine](https://help.yahoo.com/kb/SLN2217.html?guccounter=1).
> * [Build and submit a sitemap - Google](https://support.google.com/webmasters/answer/183668?hl=en)

If you are using a CMS like WordPress, you can use a plugin like [Yoast SEO Plugin](https://yoast.com/wordpress/plugins/seo/) to generate an XML sitemap for you. This plugin will constantly update the sitemap as new pages and blog posts are added to your site.

</div>

<div class="summary">

#### On-page elements

</div>

<div class="details">

Help search engines determine what your website is about. Use [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider) to perform SEO audit.
*  **Title tags** (`<title>`...`</title>`) - this is one of the first elements search engine bots will look at to determine what each page is about.
	* Make sure it includes your target keywords for that page.
	* There shouldn't be two pages with the same page title.

* **H1 tags** - (`<h1>`...`</h1>`) - similar to title tags, this is one of the first things bots will look for on a page.
	* Make sure you include keywords that describe the page contents
	* There shouldn't be two pages with the same h1
	* There should only be one h1 tag on the page - read on below

> Recall back in module 1.1, we linked to this article: [The Truth About Multiple H1 Tags in the HTML5 Era](https://webdesign.tutsplus.com/articles/the-truth-about-multiple-h1-tags-in-the-html5-era--webdesign-16824).
> This article was written in 2013, when HTML5 was still in its early days. SEO experts and developers are still debating to this day over the one-h1-per-page rule. Will search engines penalize you for this?<br />
> ![Mathiaus tweets, regarding the use of heading tags - how many h1-tags should be used on a single web page? Only one? #seo. John responds, As many as you want.]({{ site.img }}/module5/john-mueller.png)<br />
> *[John Mueller](https://twitter.com/JohnMu), Senior Webmaster Trends Analyst at Google*<br /><br />
> You can also [watch this very quick video](https://www.youtube.com/watch?v=WsgrSxCmMbM) (1:16) from the Google Webmaster channel on this topic.<br /><br />
> On the other side of the debate, Bing clearly states in their [Webmaster Guidelines](https://www.bing.com/webmaster/help/webmaster-guidelines-30fba23a):<br />
> *"Only one `<h1>` tag per page"*<br />
> In this Mozilla article, [Using HTML Sections and Outlines](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines), they had this to say on the HTML5 semantic markup solution:<br />
> *"The description of problems solved by HTML5 is theoretical only."*<br /><br />
> Using only one `<h1>` tag per page is a simple and clear solution around these complex discussions. Depending on the complexity of your site though, only one `<h1>` tag might not make sense in context of a more complex layout.<br />
> **We want to present both sides of this argument and let you make your own decisions based on what you think is best for your site.**

* **URL structure** - makes it easier for both bots and people to understand the hierarchy of your website.
	* Make sure to use [subdomains](https://en.wikipedia.org/wiki/Subdomain) and folders appropriately
	* Include keywords in URLs

Example URL: http://www.example.com/outerwear/trench-coats/product-name

![]({{ site.img }}/module4/seo-cheatsheet.jpg)

* **Word count** - this is a tricky one since “recommended word count for SEO” keeps changing. Some say 300 words is enough, others argue that long-form (1000+ words) content performs better. Generally, with longer content, you have the ability to naturally include more keywords to your text, which search engines will then pick up. A good rule of thumb is around 500+ words.

* **Images** - although search engine bots can’t “see” images, our use of the `alt` attribute will not only benefit our site's accessibility, but also our SEO.
	* Your `alt` attribute can include your targeted keywords if applicable to the image's context

</div>

<div class="summary">

#### Errors

</div>

<div class="details">

The absence of errors show search engines that your website can be easily accessed by people

* 3xx status code (301, 302, etc. ): **Redirects**. When a site domain is changed, or a redesign of a site causes many page URLs to change from their old versions, developers will set up **redirects**. This means if a user finds a link to an old site somewhere on the web, or has it bookmarked, the server will route the user to the closest equivalent URL on the new site. These redirects will result in a **301, 302** or **307** status code - they are done intentionally to improve UX, so they are not considered an error.
**300, 301, 305** or  **306** however are errors that can be found using Screaming Frog. [Read more about 300 status codes here](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
* 4xx Issues: **Client error**. These include messages like "Forbidden", "Unauthorized", "Payment Required", "Request Timeout", and "Page not found". Use [Google Search Console](https://search.google.com/search-console/about) or Screaming Frog to find them.
* 5xx Issues (500, 502, etc.):  **Server error**. These include messages like "Internal Server Error", "Bad Gateway", "Gateway Timeout", or "Service Unavailable". Use [Google Search Console](https://search.google.com/search-console/about) to find them.
* Manual Actions - alerts you get when Google flags your website or penalizes your website for shady SEO tactics. Use [Google Search Console](https://search.google.com/search-console/about) to find them. Read more information on [Google Manual Actions](http://onlineownership.com/google-manual-action-google-wmt-explained/).

</div>

> ## Technical SEO Exercise:
Visit the following websites and use Screaming Frog to fill out the [Technical SEO Audit spreadsheet:](https://docs.google.com/spreadsheets/d/11VFZxEqHV0i9MlQyHFvOHs01BWTzJ2TdWQ4CDoAzTpk/edit#gid=0)
>
>- [www.tabbedout.com](http://www.tabbedout.com)
>- [www.gsnh.com](http://www.gsnh.com)

## Content & Keywords
You want to structure your website’s content in a way that’s easy for search engines and people to navigate.



### How can we do that?



<div class="summary">

1. Keyword Research

</div>

<div class="details">

Before you start writing and publishing content you need to figure out what your target keywords are.

	Find keywords that:

	- Highly relevant to what you do - For example, if you are a bakery in Barrie, don’t pick “cake recipes” as your major keyword. “bakery barrie” will probably get you more relevant traffic and is not as competitive
	- Have search volume - ranking #1 for “bikes for pets” can be super relevant to what you do, however if nobody is searching for it, it doesn’t matter. Go for something like “dog bike basket” instead (3,600 monthly searches).
	- Have reasonable competition levels - usually, the more general your keywords are, the more web pages compete for them. For example, “risk management” will be much more competitive than “risk management software” or “risk management services”. Evaluate your website and decide what your chances are at competing for the keywords you’ve picked.

</div>

<div class="summary">

1. Evaluate Competition

</div>

<div class="details">

Once you determined your keywords, enter them to search engines and see what results come up.

- What web pages show up for your keywords? If they are businesses similar to you, it probably means you’ve selected keywords that are relevant and have reasonable competition levels.
- What’s their Domain Authority? If you try to compete with the websites whose DA is much higher than yours most likely it will take you a very long time to appear anywhere close to the first page.
- What else do they rank for? Use tools like [Ahrefs](https://ahrefs.com/) or [SEMrush](https://www.semrush.com/) to see what keywords they rank for organically. Look at positions and search volume to evaluate how successful they are. Also, if they rank high for multiple keywords visit their website, analyze it and try to understand what makes them rank.

</div>

> ## Keyword Research Exercise:
>
> Use your website as an example.
>
>1. Come up with 3 keywords that describe what your home page is about.
>1. Use Keywords Everywhere to find search volume for those keywords
>1. Pick the keyword with the highest search volume
>1. Look at the websites that already rank for that keyword
>1. Confirm that the keyword you’ve picked is relevant
>1. Use [serps.com/tools/keyword-research/](http://serps.com/tools/keyword-research/) to find other keywords that might be relevant
>1. Choose 1 major keyword for the page and 1-2 secondary keywords


1. Content Creation
Once you’ve identified your keywords it’s time to create content for your website. Depending on the type of website you’re building you will focus on different types of content.

	- Business website - You should focus on pages that you expect will bring you the most revenue. Usually, they are Product, Service or Location pages. Start with pages that tell others what you do.
	- Ecommerce website - Start with Product pages you expect will bring you the most revenue.
	- Blog - Start with those blog posts that you think will be the easiest to rank well for.

You can read more about the different types of content [here](https://www.troyfawkes.com/advanced-seo-pareto-pages-content-classifications-market-demand/).

<div class="summary">

## Authority Building

</div>

<div class="details">

Show search engines that you’re considered to be an expert by others

To win at the SEO game you need to do some authority building aka “link building”. Essentially, you need others to link back to your website. Why? Because search engines track those links and think your website is more valuable the more people link to you.

### A few rules:
1. Partner up with websites that have a high DA - the higher the DA of a website is the more link value it can pass to you.
1. Make sure the links you get are “do follow” links meaning that they are setup to pass value and not keep it. More on “do follow” vs “no follow” links [here](http://www.wordstream.com/blog/ws/2013/07/24/follow-nofollow-links).
1. DO NOT get involved in *spammy* link building schemes such as cloaking, hidden text, blog networks, etc. If you do, most likely you will get a manual penalty from search engines that will prevent your website from ranking at all for a very long time.
1. DO plan and execute link building campaigns that build long-term partnerships. Examples of link building tactics: Influencer Marketing Campaigns, Directories, Digital PR. For a very long list and very good list of link building activities check here.

</div>


## Next Steps:
If you wish to learn more about SEO, here are some resources you will find useful:

<div class="summary">

### SEO Resources - Tools

</div>

<div class="details">

* [Google Analytics](https://www.google.com/analytics/)
* [Simple SEO audit tool]()

</div>

<div class="summary">

### SEO Resources - Guides

</div>

<div class="details">

* [The Beginner’s Guide to SEO](https://moz.com/beginners-guide-to-seo)
* [Google Search Engine Optimization Starter Guide](http://static.googleusercontent.com/media/www.google.com/en//webmasters/docs/search-engine-optimization-starter-guide.pdf)
* [The Advanced Guide to SEO](https://www.quicksprout.com/the-advanced-guide-to-seo/)

</div>

<div class="summary">

### SEO Resources - Blogs

</div>

<div class="details">

* [https://moz.com/blog](https://moz.com/blog )
* [SEO/Digital Marketing news - Search Engine Land](http://searchengineland.com/)
* [SEO/Digital Marketing news - Search Engine Journal](https://www.searchenginejournal.com/)
* [A Community of digital marketers](https://inbound.org/) sharing articles and asking questions. Good if you don't have much time but want to see what's happening in the industry overall
* [SEO/Digtial Marketing news](http://www.seobook.com/blog)
* [ahrefs](https://ahrefs.com/blog/), one of the tools mentioned above. They have a pretty good blog section with some high quality content
* [Actionable SEO content](http://backlinko.com/blog)
* [Collection of link building strategies](http://pointblankseo.com/link-building-strategies)
* [Blog](http://www.annielytics.com/blog/) about analytics which goes hand-in-hand with SEO

</div>


**Content created by [Katya Bovykina](https://twitter.com/katyabovykina?lang=en)**
