---
layout: lessons
week: 7
lesson: 1
description: Domains, Hosting & FTP
permalink: week7.html
class: week7
---

##Local development vs live websites

Developing your website *locally* just means working on your files on your computer. And websites are basically just a bunch of files (HTML pages, images, css files, etc) in a folder. To put that website online and make it *live*, you will need to move your *local* folders to a *server*, or *host*. 

**What is a server?**

A server is a like a computer, but they never turn off and are always connected to the internet. *Hosts* own many different servers and are responsible for server maintenance to ensure that all the websites running on that server are always available. 

##Moving files to a server

It's similar to dragging files from one folder to another. But instead, you'll be moving files from your computer to your server.

You'll need 3 things:

* a domain name - your web address (e.g. mywebsite.com)
* a server/host - web space for your files
* an FTP client - software/app to upload files to the server


##Server vs Domain

A **server** is the computer that will "host" the folder with your files.

The **domain** is the internet address used to access that folder on the server.

Many companies will sell domains and hosting but you can also purchase these separately and connect them through your hosting provider.

There are many hosting and domain companies to choose from. Here are a few:

* [Dreamhost](http://www.dreamhost.com/r.cgi?2085384) - hosting and domains - $40 off with promo code **LLC40**
* [Hover](Hover.com/learningcode) - domains only - 10% off with promo code **learningcode**
* [A Small Orange](https://asmallorange.com/) - hosting and domains
* [Namecheap](https://www.namecheap.com/) - hosting and domains


Read more about separating hosting and domains here:<br>
<http://ladieslearningcode.com/getting-hosted-domains-with-hover/>

##Domains & Hover
Setting up a domain name will be slightly different based on which option you choose because it depends on that service providers website interface.  To set up a domain with [Hover](Hover.com/learningcode), follow the instructions below.

**Step 1**: Visit [hover.com](http://hover.com) and select **Find a domain** and enter your desired domain name into the search box.

![]({{site.imgpath}}/week7/1-search-domain.png)

**Step 2**: A list of available domain name extensions will show as well as suggestions for similar names.  This is useful if your desired domain name is already taken.

Select an option and add to cart.

![]({{site.imgpath}}/week7/2-domain-options.gif)

**Step 3**: Optional email customizations

**Mail Forwards**  
Forward your custom domain email address to your Gmail, Hotmail, etc.  Get the benefit of a custom email address without managing multiple accounts.

**Small & Big Mailbox**  
Ad-free email accounts. The Big option has more storage and a few other features.

You can always add this option later. See full details [here](https://www.hover.com/email).

![]({{site.imgpath}}/week7/3-cart-email-options.png)

**Step 4**: Create an account & add your WHOIS registration info.

**What is a registration record?**

When registering a domain name, the Internet Corporation for Assigned Names and Numbers (ICANN) requires your contact information for the WHOIS database which is publicly available using a WHOIS search tool. 

Hover (and most other domain registrars) offer a privacy option, automatic with Hover's domain registration (see previous screenshot, the privacy option is automatically checked).  More info [here](https://help.hover.com/entries/21196313-Domain-WHOIS-Privacy).


<div markdown="1" class="two-col">
![]({{site.imgpath}}/week7/4-create-account.png)
![]({{site.imgpath}}/week7/5-whois-info.png)
</div>

**Step 5**: Add your billing info. 

To add another domain name, just log into your new account, choose the **Add New** option and follow the same steps.

![]({{site.imgpath}}/week7/6-get-another-domain.png)

And you're done!

## Domains & Hosting

**If you have a domain with your hosting company, skip this step.**

To forward your domain to your hosting company, follow the steps below. First, find your hosting provider’s **nameservers**. It will look something like this:

    ns1.hostingcompany.com
    ns2.hostingcompany.com

This info is provided by your hosting company but the website's interface for finding this info will vary. Sometimes it is also included in your confirmation email when you sign up.

You could also contact customer support or just do a web search for "[your host] nameservers".  For example, searching for "Dreamhost nameservers" brings up [this page](http://wiki.dreamhost.com/Nameservers).  Dreamhost's nameservers are:

    ns1.dreamhost.com
    ns2.dreamhost.com
    ns3.dreamhost.com

To forward your Hover domain to your hosting account, follow these steps. (This will be similar for other domain/hosting company)

1. login to your Hover account
1. go to **Your Account > Domains** (also the landing page when you log in)
1. click your domain
1. go down to **Nameservers** and select **Edit**
  ![]({{site.imgpath}}/week7/hover-nameservers-1.png)
1. update it with your host's nameservers
  ![]({{site.imgpath}}/week7/hover-nameservers-2.png)

## FTP (File Transfer Protocol)

FTP (File Transfer Protocol) allows you to connect to the server to upload files.

To use FTP, you will need to create an FTP username and password in your **hosting** account, since that is where your servers are.

To create an FTP user in Dreamhost, follow these steps. (This will be similar with other hosting companies).

* go to **Users > Manage users > Add a new user**
* create a username, password and save

![]({{site.imgpath}}/week7/dreamhost-ftp-1.png)
![]({{site.imgpath}}/week7/dreamhost-ftp-2.png)


## FTP Client

To get your files online, you will need upload your files to your newly purchased hosting server. Be sure to have the below information.

* FTP Address (usually ftp.yourdomain.com or just yourdomain.com - check with your hosting provider)
* FTP Username
* FTP Password

There are many free FTP Clients.  A great one is [FileZilla](https://filezilla-project.org).

Here's a tutorial to get your files online using FileZilla: [FileZilla Client Tutorial](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29)

<br>
Feeling adventurous? Want to try a free hosting option?  
Try [Hosting Static Sites on Github for Beginners](http://thephuse.com/development/hosting-static-sites-on-github-for-beginners/).
