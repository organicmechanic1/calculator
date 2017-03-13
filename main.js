$(document).ready(function(){

	/*$("#add").on('click', function(){
		var value1 = $("#value1").val()
		var value2 = $("#value2").val()
		$("#answer").val(Number(value1) + Number(value2))
	})*/


$(".numbers").on('click','li',function(e){
  e.preventDefault();
  $v = $(this).text().trim(),
  $r = $('.result');
  if($r.text()==='0'){$r.empty()};
  if($v==="=" ) {
    var r = eval($r.text());
    $r.append(r);
    
    return true;
  }
  
  if($v==="c" ) {$r.empty().append(0);return true;}
  $r.append($v)
})













})