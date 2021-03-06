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

**You will be required to create [a Google account](https://accounts.google.com/signup/v2/webcreateaccount?hl=en-AU&flowName=GlifWebSignIn&flowEntry=SignUp) to follow along with this module if you do not have one already. Ask a mentor if you need any help!**

* all forms begin with the `<form>` element which requires two *attributes*, `method` and `action`
  * **`method`** defines how the form will communicate with the web server, typically using `get` or `post` (more secure)
  * **`action`** provides the path to where the form script is processed

**Extra resource:** Learn more about the difference between [Get vs Post](http://www.diffen.com/difference/GET_%28HTTP%29_vs_POST_%28HTTP%29)


### Form Controls
* users interact with forms through controls (e.g. textboxes, checkboxes, buttons, etc.)
* data add into these controls are processed by the server when the form is submitted

## HTML Form tags

`<label></label>` - Represents a caption associated with a specific form control.

`<input>` - There are many types of inputs that you may want to use on a form, but it is the most commonly used tag when building forms. The `<input>` tag is a self-closing tag, so no `</input>` tag necessary!

By using the `type` attribute in the `input`, we can set the value to our desired type. Common values include:

* `text` is used for a textbox. `password` will also look like a textbox, but will cloak the user's input to show a series of dots.
* `radio` and `checkbox` are used for single selection, and multi-select respectively. Radio buttons look like circles, whereas checkboxes will appear as squares.
* `submit` can be used as the final button the user will click when they have finished filling out the form. A `reset` type will also appear as a button, but is used to clear all values filled out in the form.

`<textarea></textarea>` - Used for multi-line text; a larger textarea when a small textbox is not sufficient.

`<button></button>` - Button tags can be used within the form element, or on its own. As mentioned above, you can also create submit and reset buttons with the `input` tag. The difference is the `button` element allows the addition of content between the open and closing tag, unlike an input which is a self-closing tag. The input tag uses the `value` attribute to add text to the button. These two examples below will look and function in the same way:

    <button type="submit">Send (button tag)</button>
    <input type="submit" value="Send (input tag)">

<div class="example">    
  <button type="submit">Send (button tag)</button>
  <input type="submit" value="Send (input tag)">
</div>

Read more about [the differences between a button and an input](https://css-tricks.com/use-button-element/) for submit buttons.

A complete form will require a few more attributes, but let's take a look at how the different inputs will display by default based on the specific `type` value:

    <form method="POST" action="#">
      <label>Name </label> <input type="text">
      <label>Password </label> <input type="password">
      <br>
      <input type="radio" name="radio-yes-no"><label>yes</label>
      <input type="radio" name="radio-yes-no"><label>no</label>
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
  <input type="radio" name="radio-yes-no"><label>yes</label>
  <input type="radio" name="radio-yes-no"><label>no</label>
  <input type="checkbox"><label>option 1</label>
  <input type="checkbox"><label>option 2</label>
  <br>
  <label>Leave a comment</label> <textarea></textarea>
  <input type="reset" value="reset">
  <input type="submit" value="submit">
</form>


>Try typing in the **Name** and **Password** fields to compare how the **type**  `text` and `password` differ.
>
>Try selecting both the radio and checkbox options. Can you spot the difference in the behaviour?
>
>Note that clicking "submit" will not process any information yet, because this example is only in HTML and is not attached to any server side processing.

## User Experience and Accessibility

### `<label>` tag and the `for` attribute

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

This attribute value is defined by you and can be anything as long as it doesn’t contain any spaces or special characters. The `name` attribute is used to reference the form fields *after* the data is submitted to the server.

    <label for="firstname">First Name</label>
    <input type="text" name="firstname" id="firstname">
    <label for="lastname">Last Name</label>
    <input type="text" name="lastname" id="lastname">

The `name` attribute is also used to group radio and checkbox options together. For radio inputs, grouping them together ensures that the user can only select one option at a time.

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

</div>

In addition to the form controls, any HTML tags can be contained within the `<form>` element (e.g. `div`, `p`, etc).

>## Exercise: Let's Create A Form on Our Website!
>
>Take a few minutes and create a form for your website. You can either add a form to your existing `index.html` file in a section, or create a new page on your site! If you want to do this, follow the instructions at the bottom of this box.
><a href="exercises/module5/project-one-final.zip" download>Here's a copy of the finished first project</a> with an un-styled form you could build.
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
>Feel free to add other fields to your form as necessary. Reference [this list](https://www.w3schools.com/html/html_form_elements.asp) for any additional fields you may want to explore and use.


>To create a separate contact page, start by creating a new html document. e.g. `contact.html`, within the same folder as your `index.html` file.
>Copy over the `head`, `nav`, `footer` and anything else from the `index.html` page you want to keep on your contact page.
>Update `a` tags in your `nav` on both pages to make a connection between the two HTML files. Ask your mentors if you need help!


### Processing a Form

The HTML we just added only creates the form elements in the browser. We will have time to style this form at the end of class, but let's prioritize making it work first! To actually submit the information and process the data, a *server side* language is required, like PHP.

Another option is to use 3rd party services such as [Wufoo](http://www.wufoo.com/) or [Google Forms](https://www.google.ca/forms/about/) to handle the form processing.

>You could also use either of these services to create the forminstead of adding a form to your own HTML page. In this case, you would have to create a link to the form you created on the 3rd party service.
>If you choose to go with that method, remember that you will have less control over the style of your form, and the user will be forced to leave your website to fill out that form.

## Google Forms

You can use **Google Forms** to process your website's form, and save all the responses into a Google spreadsheet. This will enable you to use the power of **Google Sheets** to manipulate & sort the data! You can even export the spreadsheet from Google into an Excel spreadsheet if you prefer that format.

>## Code-Along: Using Google Forms:
>
>1. Go to [Google Forms](https://docs.google.com/forms/u/0/) and sign into your account.
>1. In the dark grey bar across the top of the screen, click on the box with the **+** sign to create a new form.
>1. From there, you will see a WYSIWYG (What you see is what you get) editor with options similar to Word or Google Docs. Add each field to reflect the same form fields you created in your HTML. There are a wide array of the type of questions available (free form, multiple choice, etc).
Note: Google Forms doesn't have an "e-mail" input, so use a general "short answer" input for the e-mail for now if needed.
  <br>
  ![]({{ site.img }}/module4/gforms-contactform.png)
>1. When your form is ready, click on the eyeball to enter preview mode.
    ![]({{ site.img }}/module4/gforms-eyeball.gif)
  <br>
>1. Now that we're in the preview screen for the form, open up the web inspector to find the information we need to connect our form to the Google Form. You can do this by right clicking the first element in the form, and choosing *inspect*.
>1. Find and copy the value of the `action` attribute (the URL between the double quotes) in the opening form element:
  ![]({{ site.img }}/module4/g-forms-action.png)
>**Pro tip:** use `ctrl/cmd` + `f` on your keyboard to open the Find bar. Type `<form` into the search bar to quickly jump to the opening form tag.
>1. Move over to Atom and paste what you just copied into the `action` attribute of your own form.
>1. Return to your Google form to find and copy the value of the `name` attribute of the first form element. Right click on the input box to see the HTML of that input.
Take a look at the gif below to see how to find the `name` of each of your inputs. They will be buried within several divs:
  ![]({{ site.img }}/module4/gforms-inspectelement.gif)
  <br>
>1. Moving back to Atom, find the equivalent `input` in your HTML and paste the value for the name attribute that you just copied.
>1. Repeat steps *8-9* until every `input` in your HTML form is matched up to the form elements in your Google form.
  <br>
>1. Lastly, test your site's form by filling out all inputs and clicking the submit button.
> We will not be covering form validation in today's module, but try skipping a required field to see what happens. At the end of this module, you can explore some resources on form validation.

You successfully created a form that works! But where is all our data going? Wouldn't it be handy if we could collect all of our submissions automatically, in a format that would be easy to read?

> 1. Go back to Google Forms and create a spreadsheet for your responses as shown below.
>
  ![]({{ site.img }}/module4/gforms-excel.gif)
>
> 1. Return to your website, fill out and submit the form again.
> Open up the spreadsheet you just created to capture your form entries. TA-DA!

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

You can also use combined selectors to apply the same styles to inputs that are of a different type:

    input[type="text"],
    input[type="email"]{ /* Will apply to both text and email input boxes */
      background: transparent;
      border-bottom: 2px solid grey;
    }

Here are a couple of tricks to keep in mind:

* Form elements often come with default browser styles that you will need to overwrite if you want to change them. Properties you may want to change or remove include the border, padding, background, color and font-size.
* Form elements usually come with an 'outline' when they are selected. This state is called "focus". Remember when we learned about hover states? Focus states can be targeted in the same way using [CSS Pseudo-classes](). The focus state of an input is triggered when a visitor has clicked on the input and is interacting with it.

>Give it a try based on the example below:

    input:focus {
      outline: red;
    }

> ## Exercise: Style Your Form
>
>Take a look at some examples of styled [forms in CodePen](https://codepen.io/search/pens/?limit=all&page=2&q=forms) for inspiration!

</div>

#### Resources

* [sitepoint: form elements](http://www.sitepoint.com/web-foundations/form-elements/)
* [Dive Into HTML5 forms](http://diveintohtml5.info/forms.html)
* [CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)
* [Customize a Google Form for Your Website](http://codepen.io/learningcode/post/customize-a-google-form-for-your-website)
* [The 10 Commandments of Good Form Design on the Web](http://mono.company/journal/design-practice/the-10-commandments-of-good-form-design-on-the-web/)
* [Bring Your Forms Up to Date With CSS3 and HTML5 Validation](http://webdesign.tutsplus.com/tutorials/bring-your-forms-up-to-date-with-css3-and-html5-validation--webdesign-4738)
* [Creating Accessible Forms](https://webaim.org/techniques/forms/controls)

~ End ~
