

function searchClick() {
  var topic = $("#inputSearch").val()
  var inputNum = $("#inputNumber").val()
  var beginDate = $("#inputYear").val()
  var endDate = $("#inputYearEnd").val()
  console.log(topic, beginDate, endDate, inputNum)
  let ourURL;

  if (beginDate === "" && endDate === "") {
    ourURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&api-key=MeSlpBArVQJEe2pcomqfL3maVtIAogRO"
    console.log(1)
  }
  else if (beginDate !== "" && endDate === "") {
    ourURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&begin_date=" + beginDate + "&end_date=20190505&api-key=MeSlpBArVQJEe2pcomqfL3maVtIAogRO"
    console.log(2)
  }
  else if (beginDate === "" && endDate !== "") {
    ourURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&begin_date=19750101&end_date=" + endDate + "api-key=MeSlpBArVQJEe2pcomqfL3maVtIAogRO"
    console.log(3)
  }

  else {
    ourURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=MeSlpBArVQJEe2pcomqfL3maVtIAogRO"
    console.log(4)
  }
  







  $.ajax({
    url: ourURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < inputNum; i++){
      let newDiv = $("<h5>");
      let textDiv = $("p")
      $("h5").css("margin-bottom", "25px;")
      newDiv.text(`${i+1} : ${response.response.docs[i].headline.main}`)
      textDiv.text(`${response.response.docs[i]}`)
      newDiv.append(textDiv)
      

      $("#topArticles").append(newDiv);
    }
    console.log(response)
    console.log(response.response.docs[0].headline.main)
  })
}


function resetFunc(){
  $("#topArticles").empty()
}



