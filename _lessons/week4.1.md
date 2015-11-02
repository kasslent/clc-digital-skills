---
layout: lessons
week: 4
lesson: 1
description: Forms & Data Manipulation with Sheets
permalink: /week4/lesson1/
---

##Intro to HTML Forms

* used to capture information from users
* information processing & form submission requires a server-side language (e.g. PHP, Ruby or Python)
* all forms begin with the `<form>` element and requires two *attributes*, `method` and `action`
  * **`method`** defines how the form will communicate with the web server using `get` or `post` (more secure)
  * **`action`** provides the path to where the form script is processed

**Extra resource:** [Get vs Post](http://www.diffen.com/difference/GET_%28HTTP%29_vs_POST_%28HTTP%29)


###Form Controls
* users interact with forms through controls (e.g. checkboxes, buttons)
* data add into these controls are processed by the server when the form is submitted

`<label></label>` - Represents a caption associated with a specific form control.

`<textarea></textarea>` - Used for multi-line text.

`<input>` - This element is where the user fills out the form. Also:

* used for various data types by changing the `type` attribute value 
* common values include `text`, `password`, `submit`, `reset`, `button`, `radio` and `checkbox`
* use with `label` to add a caption to each input
* doesn't require a closing tag!

`<button></button>` - Button tags can be used within the form element or on its own.
Though you can create buttons with the `input` tag, the button element allows the addition of content between the open and closing tag, unlike input which is a self-closing tag. The input tag uses the `value` attribute to add text to the button.

There are three `type` attribute values: `submit`, `button`, `reset`.

    <button type="submit">button tag</button>
    <input type="submit" value="input tag">
    
<div class="example">    
  <button type="submit">button tag</button>
  <input type="submit" value="input tag">
</div>


The example below does not include any additional CSS and a complete form will require a few more attributes but take a look at how the input displays based on the specific `type` value.

<pre><code>&lt;form method="POST" action="#"&gt;
  &lt;label&gt;Name &lt;/label&gt; &lt;input type="text"&gt;
  &lt;label&gt;Password &lt;/label&gt; &lt;input type="password"&gt;
  &lt;br&gt;
  &lt;input type="radio" name="radio-example"&gt;&lt;label&gt;yes&lt;/label&gt;
  &lt;input type="radio" name="radio-example"&gt;&lt;label&gt;no&lt;/label&gt;
  &lt;input type="checkbox"&gt;&lt;label&gt;option 1&lt;/label&gt;
  &lt;input type="checkbox"&gt;&lt;label&gt;option 2&lt;/label&gt;
  &lt;br&gt;
  &lt;label&gt;Leave a comment&lt;/label&gt; &lt;textarea&gt;&lt;/textarea&gt;
  &lt;input type="reset" value="reset"&gt;
  &lt;input type="submit" value="submit"&gt;
&lt;/form&gt;
</code></pre>

<form class="example">
  <label>Name </label>
  <input type="text">
  <label>Password </label>
  <input type="password">
  <br>
  <input type="radio" name="radio-example"><label>yes</label>
  <input type="radio" name="radio-example"><label>no</label>
  <input type="checkbox"><label>option 1</label>
  <input type="checkbox"><label>option 2</label>
  <br>
  <label>Leave a comment</label> <textarea></textarea>
  <input type="reset" value="reset">
  <input type="submit" value="submit">
</form>


>Try typing in the **Name** and **Password** fields to compare how the `type` attributes, `text` and `password` differ. 
>
>Try selecting both the radio and checkbox options.  Can you spot the difference in the behaviour?
>
>Note that clicking "submit" will not process any information because this example is only in HTML and is not attached to any server side processing.

###`<label>` and the `for` attribute


Use the `for` attribute in the label to create an association with the related input. This is needed for accessibility reasons. It must match the `id` value of the related form control.

<pre><code>&lt;label <strong>for="firstname"</strong>&gt;First Name&lt;/label&gt;&lt;input type="text" name="firstname" <strong>id="firstname"</strong>&gt;
&lt;label <strong>for="lastname"</strong>&gt;Last Name&lt;/label&gt;&lt;input type="text" name="lastname" <strong>id="lastname"</strong>&gt;
</code></pre>

**label association** 

<label for="firstname">First Name</label> <input type="text" name="firstname" id="firstname">
<label for="lastname">Last Name</label> <input type="text" name="lastname" id="lastname">

**no label association**

<label>First Name</label> <input type="text" name="firstname">
<label>Last Name</label> <input type="text" name="lastname">

>When labels and inputs are associated, select either the label OR the input to focus on the related input.
>
>Try clicking on the labels in the examples above.

###`name` attribute

The `name` attribute is used to reference the form fields *after* the data is submitted to the server. This attribute value is defined by you and can be anything as long as it doesn’t contain any spaces or special characters.

<pre><code>&lt;label for="firstname"&gt;First Name&lt;/label&gt;&lt;input type="text" <strong>name="firstname"</strong> id="firstname"&gt;
&lt;label for="lastname"&gt;Last Name&lt;/label&gt;&lt;input type="text" <strong>name="lastname"</strong> id="lastname"&gt;
</code></pre>

The `name` attribute is also be used to group radio and checkbox options together. Also, for radio inputs, grouping them together ensures that the user can only select one option at a time.
  
    <p>What day is it today?</p>
    <input type="radio" name="days" id="mon"><label for="mon">Monday</label><br>
    <input type="radio" name="days" id="tues"><label for="tues">Tuesday</label><br>
    <input type="radio" name="days" id="wed"><label for="wed">Wednesday</label><br>
    <input type="radio" name="days" id="thurs"><label for="thurs">Thursday</label><br>
    <input type="radio" name="days" id="fri"><label for="fri">Friday</label>

What day is it today?<br>
<input type="radio" name="days" id="mon"><label for="mon">Monday</label><br>
<input type="radio" name="days" id="tues"><label for="tues">Tuesday</label><br>
<input type="radio" name="days" id="wed"><label for="wed">Wednesday</label><br>
<input type="radio" name="days" id="thurs"><label for="thurs">Thursday</label><br>
<input type="radio" name="days" id="fri"><label for="fri">Friday</label>
    
    <p>What day do you attend class?</p>
    <input type="checkbox" name="days" id="mon"><label for="mon">Monday</label><br>
    <input type="checkbox" name="days" id="tues"><label for="tues">Tuesday</label><br>
    <input type="checkbox" name="days" id="wed"><label for="wed">Wednesday</label><br>
    <input type="checkbox" name="days" id="thurs"><label for="thurs">Thursday</label><br>
    <input type="checkbox" name="days" id="fri"><label for="fri">Friday</label>

<p>What day do you attend class?</p>
<input type="checkbox" name="days" id="mon"><label for="mon">Monday</label><br>
<input type="checkbox" name="days" id="tues"><label for="tues">Tuesday</label><br>
<input type="checkbox" name="days" id="wed"><label for="wed">Wednesday</label><br>
<input type="checkbox" name="days" id="thurs"><label for="thurs">Thursday</label><br>
<input type="checkbox" name="days" id="fri"><label for="fri">Friday</label>

<br>
In addition to the form controls, any HTML tags can be contained within the `<form>` element (e.g. `div`, `p`, etc).  Also to style the form, apply CSS in the same way you would for any HTML element.

Also, the form related HTML only create the form in the browser.  To actually submit the information and process the data, a server side language is required.  

Another option is to use 3rd party services such as [Wufoo](http://www.wufoo.com/) or [Google Forms]() to handle not only building the HTML & CSS of the form but also the form processing as well.

#### Extra Resources
* [sitepoint: form elements](http://www.sitepoint.com/web-foundations/form-elements/)
* [Dive Into HTML5 forms](http://diveintohtml5.info/forms.html)
* [The 10 Commandments of Good Form Design on the Web](http://mono.company/journal/design-practice/the-10-commandments-of-good-form-design-on-the-web/)
* [Bring Your Forms Up to Date With CSS3 and HTML5 Validation](http://webdesign.tutsplus.com/tutorials/bring-your-forms-up-to-date-with-css3-and-html5-validation--webdesign-4738)


##Google Forms

Use Google Forms to create your form and have all the repsonses sent to a handy spreadsheet.  Not only will this keep you from dealing with email responses, you can use the power of Sheets to manipulate & sort the data!


1. Go to Google Drive, [drive.google.com](https://drive.google.com), and sign into your account. The select **New** > **More** > **Google Forms** to create a new form. (You can also go straight to the form option here: [docs.google.com/forms](https://docs.google.com/forms/))<br><br>
  ![]({{site.baseurl}}/assets/img/week4/gforms-new.png)
1. From there, you will see WYSIWYG editor with options similar to Word or Google Docs. There are a wide array of the type of questions available (free form, multiple choice using radio or checkboxes, etc).  

1. Once you've completed your form, you can either send out the form or embed it into your web page. 
  * To send the form. Select **Send form** to see options.<br>
  ![]({{site.baseurl}}/assets/img/week4/gforms-send.png)
  <br><br>
  You can email a link to the form, send the whole form via email or share the link using various social media accounts.<br>
  ![]({{site.baseurl}}/assets/img/week4/gforms-send-options.png)
  * To embed the form onto your web page, select **File > Embed** and copy the HTML onto your web page.<br>
  ![]({{site.baseurl}}/assets/img/week4/gforms-embed.png)
  
##Styling Google Forms

Choose from existing themes!

Select **Change themes** to see available themes.  (Select **Edit questions** to go back to the questions.)

![]({{site.baseurl}}/assets/img/week4/gforms-themes.png)

Choose a theme on the right and select **Customize** for additional options.

![]({{site.baseurl}}/assets/img/week4/gforms-themes-customize.png)

And that's it!

<br>

If you're feeling adventurous, you can also edit the HTML & CSS yourself.

The embed code is simply an `<iframe>` which is a common way to insert content from another source (i.e. youtube embeds). But you can **View Source** and grab the actual HTML and embed that into your site instead of the `<iframe>`.

If you decide to go this route, make sure you have the default theme selected so you find the form HTML easier.  

First, select **View live form** to see the form out of edit mode, in the browser.

![]({{site.baseurl}}/assets/img/week4/gforms-live.png)

Then right-click anywhere and select **View source** and look for the `<form>` tag.

**Pro tip!** Use **cmd/ctrl + F** (find) and do a search for `form` on the page and copy everything from the opening `<form>` to the closing `</form>` tags.

Note that this option requires you to write all the CSS yourself!

####Resources

* [Google Drive Blog: Your Forms, Your Way](http://googledrive.blogspot.ca/2014/09/custom-forms-themes.html)
* [How to style Google Forms](http://morning.am/tutorials/how-to-style-google-forms/)
  
  
##Google Forms + Analysis with Excel

View the presentation for this module [here](  https://docs.google.com/presentation/d/1OwTcaMJ4_cDAzd1Bj3NE6AKLiXQaUx8u84IaupUJwjo/edit#slide=id.gbd56464a5_0_166).

Exercise file [here](https://docs.google.com/a/ladieslearningcode.com/forms/d/13B95NmtUIynwWmj-uY0G3T5_0Y_bs-PL0sOjLz0inKU/edit?ts=562edea9#).  Be sure to made a **copy** of this file in *your* Google Drive.


~ End ~







