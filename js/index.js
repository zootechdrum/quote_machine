
function updateText(quote, author) {
  $("#quote").text("\" " + quote + " \" ");
  $("#author").text("--" + author);

};

function ajaxCall(){
  $.ajax({
    method: "GET",
    dataType: 'json',
    url:"https://talaikis.com/api/quotes/random/"
  })

  .done(function(res) {
    console.log(res)
    updateText(res.quote,res.author);
    $('#quoteSection').hide().fadeIn(1500)
    console.log("You used Jquery to make the GET Request!")
  })
  
  .fail(() => {
   alert("Something went wrong!")
  });
};

function axio(){
  console.log("You used Axios to make this request!")
  axios.get("https://talaikis.com/api/quotes/random/")
    .then(function (response) {
  updateText(response.data.quote,response.data.author)
  $('#quoteSection').hide().fadeIn(1500)
  });
};

function xhrRequest() {
  console.log("hello")
  const XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4) {
      if(XHR.status == 200) {
        let returnedData = JSON.parse(XHR.responseText)
        updateText(returnedData.quote,returnedData.author)
        console.log("You made a successful call with XHR")
        $('#quoteSection').hide().fadeIn(1500)
      } else {
        console.log("Shit there was a problem")
      }
    }
  }
  XHR.open("GET","https://talaikis.com/api/quotes/random/");
  XHR.send();
};
  $("#tweet").click(function(){
    const quote = $("#quote").text()
    const author = $("#author").text()
     $("#tweet").attr("href","https://twitter.com/intent/tweet?text=" + quote + author)     
  });


window.onload = function() {
  $('#quoteSection').hide().fadeIn(1500)
  updateText("When the going gets weird, the weird turn pro.", "Hunter S. Thompson")
};




