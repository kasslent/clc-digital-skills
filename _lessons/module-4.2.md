---
layout: lessons
module: 4
lesson: 2
title: HTML Forms & Google Sheets
description: Intro to HTML forms with Google Sheets
permalink: module4-2.html
---


## Intro to HTML Forms

* used to capture information from users
* information processing & form submission requires a server-side language (e.g. PHP, Ruby or Python)
* all forms begin with the `<form>` element and requires two *attributes*, `method` and `action`
  * **`method`** defines how the form will communicate with the web server using `get` or `post` (more secure)
  * **`action`** provides the path to where the form script is processed

**Extra resource:** [Get vs Post](http://www.diffen.com/difference/GET_%28HTTP%29_vs_POST_%28HTTP%29)


### Form Controls
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

### `<label>` and the `for` attribute


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

### `name` attribute

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

>## Exercise: Let's Create A Form for Our Website!
>
>Take a few minutes and create a form for your website. For example, a contact form for your visitors to leave you a message on your site. [Here's an example](exercises/module1/project-one-sample/contact.html) of a form you could build.
>
>This is the HTML for the example site's form: 
>
    <form action="">
        <label for="name">Name</label>
        <input name="lead-name" type="text" id="name"/>
        <label for="email">E-mail Address</label>
        <input name="lead-email" type="email" id="email"/>
        <label for="explain">Explain why you are getting in touch.</label>
        <textarea name="lead-message" id="explain"></textarea>
        <input class="button" type="submit" value="Submit">
    </form>
>
>Feel free to add other fields to your form. 

### Processing a Form

The form-related HTML only creates the form in the browser.  To actually submit the information and process the data, a *server side* language is required (e.g. PHP).  

Another option is to use 3rd party services such as [Wufoo](http://www.wufoo.com/) or [Google Forms](https://www.google.ca/forms/about/) to handle not only building the HTML & CSS of the form but also the form processing as well.

#### Extra Resources
* [sitepoint: form elements](http://www.sitepoint.com/web-foundations/form-elements/)
* [Dive Into HTML5 forms](http://diveintohtml5.info/forms.html)
* [The 10 Commandments of Good Form Design on the Web](http://mono.company/journal/design-practice/the-10-commandments-of-good-form-design-on-the-web/)
* [Bring Your Forms Up to Date With CSS3 and HTML5 Validation](http://webdesign.tutsplus.com/tutorials/bring-your-forms-up-to-date-with-css3-and-html5-validation--webdesign-4738)



## Google Forms

You can use **Google Forms** to process your website's new form and save all the responses sent to a handy Google spreadsheet.  This will enable you to use the power of **Sheets** to manipulate & sort the data!

>## Code-Along: Using Google Forms:
>
>1. Go to Google Drive, [drive.google.com](https://drive.google.com), and sign into your account. 
>1. The select **New** > **More** > **Google Forms** to create a new form. (You can also go straight to the form option here: [docs.google.com/forms](https://docs.google.com/forms/))<br><br>
>  ![]({{ site.img }}/module4/gforms-new.png)
> <br>
1. From there, you will see WYSIWYG editor with options similar to Word or Google Docs. There are a wide array of the type of questions available (free form, multiple choice using radio or checkboxes, etc).  Make sure you create a Google Form that is an exact replica of your own new form. 
Note: Google Forms don't have "e-mail" inputs so use a general "short answer" input for e-mail. You won't be using the google form itself in the end so it doesn't matter. 
  <br>
  ![]({{ site.img }}/module4/gforms-contactform.png)
1. Now that your form is ready, click on the eyeball. 
    ![]({{ site.img }}/module4/gforms-eyeball.gif)
  <br>
1. Now that we're in the preview screen for the form we will open up the web inspector to find the information we need to connect our form to the Google Form. 
* We will need the action value for the form element. 
* The names of each of the form inputs. 
  <br>
Take a look at the gif below to see how to find the name of each of your inputs. Sometimes they will be buried in several divs.
  ![]({{ site.img }}/module4/gforms-inspectelement.gif)
  <br>
1. Once you have the names and action link for your form, add them to your own form in your site.
  <br>
1. Lastly, test your site's form. Go back to Google Forms and create a spreadsheet for your responses as shown below. Then in the browser open up your contact page and fill out your form. Finally, open up the excel sheet you just created to capture your forms' entries. 
>
  ![]({{ site.img }}/module4/gforms-excel.gif)
>

## Styling Forms

You can style form elements the same way you style any other element with CSS. Simply select the input you want to style, and give it some styles. 

When it comes to inputs, try selecting the input you want using the type attribute in your CSS selector. For example: 

    input[type="text"] {
      padding: 6px;
    }

    input[type="checkbox"] {
      margin-right: 5px;
    }

Here are a couple of tricks to keep in mind though: 

1. Form elements often come with default browser styles that you will need to overwrite if you want to change them. Properties you may want to change include the border, padding, background, color and font-size. 
2. Form elements usually come with an 'outline' when they are selected. This state is called "focus". Remember when we learned about hover states? Focus states can be targeted in the same way using CSS Pseudo-classes. The focus state of an input is triggered when a visitor has clicked on the input and is interacting with it. 

>Give it a try based on the example below:

    input:focus {
      outline: red;
    }

> ## Exercise: Style Your Form
>
>Take a look at some examples of styled [forms in CodePen](https://codepen.io/search/pens/?limit=all&page=2&q=forms) for inspiration and style your form! 
  
#### Resources

* [CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)
* [Customize a Google Form for Your Website](http://codepen.io/learningcode/post/customize-a-google-form-for-your-website)

~ End ~







