---
layout: lessons
module: 5
lesson: 2
title: HTML Forms & Google Sheets
description: Intro to HTML forms with Google Sheets
permalink: module5-2.html
---


## Intro to HTML Forms

In today's module, we are going to add a form to our webpage. Forms are used to capture information from users. You can create a form to capture whatever makes sense in context of your website. Some examples include a contact form, a feedback form, or an application form.

Information processing & form submission requires a server-side language (e.g. PHP, Ruby or Python). Instead of learning a whole new language, we are going to use [Google Forms](https://www.google.ca/forms/about/) to process and collect form submissions.

You will be required to create [a Google account]() to follow along with this module if you do not have one already.

* all forms begin with the `<form>` element and requires two *attributes*, `method` and `action`
  * **`method`** defines how the form will communicate with the web server using `get` or `post` (more secure)
  * **`action`** provides the path to where the form script is processed

**Extra resource:** Learn more about the difference between [Get vs Post](http://www.diffen.com/difference/GET_%28HTTP%29_vs_POST_%28HTTP%29)


### Form Controls
* users interact with forms through controls (e.g. textboxes, checkboxes, buttons, etc.)
* data add into these controls are processed by the server when the form is submitted

## HTML Form tags

`<label></label>` - Represents a caption associated with a specific form control.

`<input>` - There are many types of inputs that you may want to use on a form, but it is the most commonly used tag when building forms. The `<input>` tag is a self-closing tag, so do not add a `</input>` tag at the end!

By using the `type` attribute in the `input`, we can set the value to our desired type. Common values include:

* `text` is used for a textbox. `password` will look pretty much the same, but will cloak the user's input to show a series of dots.
* `radio` and `checkbox` are used for single selection, and multi-select respectively. Radio buttons look like circles, whereas checkboxes will appear as squares.
* `submit` can be used as the final button the user will click when they have finished filling out the form. `reset` will also appear as a button, and can be used to clear the values filled out in the entire form.

`<textarea></textarea>` - Used for multi-line text, or a larger textarea when a small textbox is not sufficient.

`<button></button>` - Button tags can be used within the form element or on its own. As mentioned above, you can create buttons with the `input` tag. The difference is the `button` element allows the addition of content between the open and closing tag, unlike input which is a self-closing tag. The input tag uses the `value` attribute to add text to the button. These two examples below will look and function in the same way:

    <button type="submit">Send</button>
    <input type="submit" value="Send">

<div class="example">    
  <button type="submit">Send (button tag)</button>
  <input type="submit" value="Send (input tag)">
</div>


A complete form will require a few more attributes, but let's take a look at how the different inputs will display by default based on the specific `type` value:

    <form method="POST" action="#">
      <label>Name </label> <input type="text">
      <label>Password </label> <input type="password">
      <br>
      <input type="radio" name="radio-example"><label>yes</label>
      <input type="radio" name="radio-example"><label>no</label>
      <input type="checkbox"><label>option 1</label>
      <input type="checkbox">label>option 2</label>
      <br>
      <label>Leave a comment</label> <textarea></textarea>
      <input type="reset" value="reset">
      <input type="submit" value="submit">
    </form>

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


>Try typing in the **Name** and **Password** fields to compare how the `type`  `text` and `password` differ.
>
>Try selecting both the radio and checkbox options. Can you spot the difference in the behaviour?
>
>Note that clicking "submit" will not process any information yet, because this example is only in HTML and is not attached to any server side processing.

### `<label>` and the `for` attribute


Use the `for` attribute in the label to create an association with the related input. This is needed for accessibility reasons, and also makes a better user experience for everyone. It must match the `id` value of the related form control.

    <label for="firstname">First Name</label>
    <input type="text" name="firstname" id="firstname">
    <label for="lastname">Last Name</label>
    <input type="text" name="lastname" id="lastname">

>When labels and inputs are associated, select either the label OR the input to focus on the related input.
>
>Try clicking on the labels in the examples above.

**label association**

<label for="firstname">First Name</label> <input type="text" name="firstname" id="firstname">
<label for="lastname">Last Name</label> <input type="text" name="lastname" id="lastname">

**no label association**

<label>First Name</label> <input type="text" name="firstname">
<label>Last Name</label> <input type="text" name="lastname">

<div class="summary">

### `name` attribute

</div>

<div class="details">

The `name` attribute is used to reference the form fields *after* the data is submitted to the server. This attribute value is defined by you and can be anything as long as it doesn’t contain any spaces or special characters.

    <label for="firstname">First Name</label>
    <input type="text" name="firstname" id="firstname">
    <label for="lastname">Last Name</label>
    <input type="text" name="lastname" id="lastname">

The `name` attribute is also be used to group radio and checkbox options together. For radio inputs, grouping them together ensures that the user can only select one option at a time.

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

</div>

In addition to the form controls, any HTML tags can be contained within the `<form>` element (e.g. `div`, `p`, etc).  To style the form, apply CSS in the same way you would for any HTML element.

>## Exercise: Let's Create A Form for Our Website!
>
>Take a few minutes and create a form for your website. For example, a contact form for your visitors to leave you a message on your site. You can either add a form to your existing index.html file in a section, or create a new html document. e.g. contact.html.
> If you decide to create a new html document, make sure to copy over the `head`, `nav`, `footer` and anything else from the home page you want to keep on your contact page. <a href="exercises/module5/project-one-final.zip" download>Here's a copy of the finished first project</a> with an unnstyled form you could build.
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
>Feel free to add other fields to your form as necessary. Reference [this list](http://www.sitepoint.com/web-foundations/form-elements/) for any additional fields you may want to explore and use.


### Processing a Form

The HTML we just added only creates the form elements in the browser.  To actually submit the information and process the data, a *server side* language is required, like PHP.

Another option is to use 3rd party services such as [Wufoo](http://www.wufoo.com/) or [Google Forms](https://www.google.ca/forms/about/) to handle the form processing.

> You could also use either of these services to create the entire form, without adding a form to your own HTML page. In this case, you would have to create a link to the form you created on the 3rd party service.
> If you choose that method, remember that you will have less control over the look & feel of your form, and the user will be forced to leave your website to fill out that form.
> It is recommended that the link to the form opens in a new tab, so the user can easily return to your site after the form is completed. Eg.:
>   <a href="http://forms.google.ca/blahdeeblah" target="_blank">Contact Us</a>

#### Extra Resources
* [sitepoint: form elements](http://www.sitepoint.com/web-foundations/form-elements/)
* [Dive Into HTML5 forms](http://diveintohtml5.info/forms.html)

## Google Forms

You can use **Google Forms** to process your website's new form and save all the responses sent to a Google spreadsheet. This will enable you to use the power of **Sheets** to manipulate & sort the data!

>## Code-Along: Using Google Forms:
>
>1. Go to Google Drive, [drive.google.com](https://drive.google.com), and sign into your account.
>1. Select **New** > **More** > **Google Forms** to create a new form. (You can also go straight to the form option here: [docs.google.com/forms](https://docs.google.com/forms/))<br><br>
>  ![]({{ site.img }}/module4/gforms-new.png)
> <br>
1. From there, you will see WYSIWYG editor with options similar to Word or Google Docs. Create a Google Form that is an exact replica of the form you just built on your page. There are a wide array of the type of questions available (free form, multiple choice, etc).
Note: Google Forms don't have "e-mail" inputs, so use a general "short answer" input for the e-mail for now if needed.
  <br>
  ![]({{ site.img }}/module4/gforms-contactform.png)
1. Now that your form is ready, click on the eyeball to enter preview mode.
    ![]({{ site.img }}/module4/gforms-eyeball.gif)
  <br>
1. Now that we're in the preview screen for the form, open up the web inspector to find the information we need to connect our form to the Google Form. You can do this by right clicking the first element in the form, and choosing *inspect* in the menu.
1. Find and copy the value of the `action` attribute in the opening form element:
[insert image here]
1. Move over to Atom and paste what you just copied into the `action` attribute of your form. You may have used the `GET` or `POST` method as a placeholder, but we are going to use this URL you copied instead.
1. Next, find and copy the value of the `name` attribute of the first form element.
Take a look at the gif below to see how to find the name of each of your inputs. Sometimes they will be buried in several divs. **Pro tip:** use `ctrl/cmd` + `f` on your keyboard to open the Find menu. search for `name="` to more quickly find these attributes.
  ![]({{ site.img }}/module4/gforms-inspectelement.gif)
  <br>
1. Moving back to Atom, find the equivalent `input` in your HTML and paste the value for the name attribute that you just copied.
1. Repeat steps *4-5* until you have attached every `input` in your HTML form is matched up to the form elements in your Google form.
  <br>
1. Lastly, test your site's form by filling out all inputs and clicking the submit button.
> We will not be covering form validation in today's module, but try missing some required fields to see what happens. At the end of this module, you can explore some resources on form validation.

You successfully created a form that works! But where is all our data going? Wouldn't it be handy if we could collect all of our submissions automatically, in a format that would be easy to read?

> 1. Go back to Google Forms and create a spreadsheet for your responses as shown below.
> 1. In the browser open, up your contact page and fill out your form again.
> `. Open up the spreadsheet you just created to capture your form entries.
>
  ![]({{ site.img }}/module4/gforms-excel.gif)
>

<div class="summary">

## Styling Forms

</div>

<div class="details">

You can style form elements the same way you style any other element with CSS. Simply select the input you want to style, and give it some styles.

When it comes to inputs, try selecting the input you want using the type attribute in your CSS selector. For example:

    input{ / * will apply to all inputs */
      border: 1px solid grey;
    }

    input[type="text"] { /* will apply only to textboxes */
      padding: 6px;
    }

    input[type="checkbox"] { /* will apply only to checkboxes */
      margin-right: 5px;
    }

Here are a couple of tricks to keep in mind though:

1. Form elements often come with default browser styles that you will need to overwrite if you want to change them. Properties you may want to change or remove include the border, padding, background, color and font-size.
2. Form elements usually come with an 'outline' when they are selected. This state is called "focus". Remember when we learned about hover states? Focus states can be targeted in the same way using [CSS Pseudo-classes](). The focus state of an input is triggered when a visitor has clicked on the input and is interacting with it.

>Give it a try based on the example below:

    input:focus {
      outline: red;
    }

> ## Exercise: Style Your Form
>
>Take a look at some examples of styled [forms in CodePen](https://codepen.io/search/pens/?limit=all&page=2&q=forms) for inspiration!

</div>

#### Resources

* [CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)
* [Customize a Google Form for Your Website](http://codepen.io/learningcode/post/customize-a-google-form-for-your-website)
* [The 10 Commandments of Good Form Design on the Web](http://mono.company/journal/design-practice/the-10-commandments-of-good-form-design-on-the-web/)
* [Bring Your Forms Up to Date With CSS3 and HTML5 Validation](http://webdesign.tutsplus.com/tutorials/bring-your-forms-up-to-date-with-css3-and-html5-validation--webdesign-4738)

~ End ~
