var delayInMilliseconds = 3000;

setTimeout(function() {
}, delayInMilliseconds);

if (typeof(document.getElementById("FirstName")) != 'undefined' && document.getElementById("FirstName") != null)
{
  document.getElementById("FirstName").placeholder="Enter your first name";
}

if (typeof(document.getElementById("LastName")) != 'undefined' && document.getElementById("LastName") != null)
{
  document.getElementById("LastName").placeholder="Enter your last name";
}

if (typeof(document.getElementById("Email")) != 'undefined' && document.getElementById("Email") != null)
{
  document.getElementById("Email").placeholder="Enter your email";
}

if (typeof(document.getElementById("Company")) != 'undefined' && document.getElementById("Company") != null)
{
  document.getElementById("Company").placeholder="Enter your company name";
}

if (typeof(document.getElementById("Phone")) != 'undefined' && document.getElementById("Phone") != null)
{
  document.getElementById("Phone").placeholder="Enter your phone number";
}

if (typeof(document.getElementById("Lead_Comments__c")) != 'undefined' && document.getElementById("Lead_Comments__c") != null)
{
  document.getElementById("Lead_Comments__c").placeholder="Your comment";
}

if (typeof(document.getElementById("Department")) != 'undefined' && document.getElementById("Department") != null)
{
  document.getElementById("Department").placeholder="Enter your department";
}

if (typeof(document.getElementById("Title")) != 'undefined' && document.getElementById("Title") != null)
{
  document.getElementById("Title").placeholder="Enter your job title";
}

// if(document.getElementById("FirstName"))placeholder="Enter your first name";
// if(document.getElementById("LastName"))placeholder="Enter your last name";
// if(document.getElementById("Email"))placeholder="Enter your email";
// if(document.getElementById("Company"))placeholder="Enter your company name";
// if(document.getElementById("Phone"))placeholder="Enter your phone number";
// if(document.getElementById("Lead_Comments__c"))placeholder="Your comment";