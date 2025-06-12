$(".box").mouseover(function(){
    $(this).find("video").get(0).play()
})
$(".box").mouseout(function(){
    $(this).find("video").get(0).pause()
})


$(".box1").click(function(){
    $(".page1").addClass("active")
})
$(".box2").click(function(){
    $(".page2").addClass("active")
})
$(".box3").click(function(){
    $(".page3").addClass("active")
})
$(".box4").click(function(){
    $(".page4").addClass("active")
})

$(".close").click(function(){
    $(".page").removeClass("active")
})