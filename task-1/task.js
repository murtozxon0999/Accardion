$(function(){
    var s = "jpeg, jpg, gif. png";
    var match = s.split(', ')
    var match = s.split('. ')
    console.log(match)
    for (var a in match)
    {
        var variable = match[a]
        console.log(variable)
    }
})