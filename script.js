$("#children").change(function(){
  var value=$("#children").find(":selected").text();
$('#addElement').html("");
for(var i=1; i<value;i++){
   $('#addElement').append("<div><label>Room-"+(i+1)+"</label></div><label>Children(0-17)</label><select name='number'></select><label>Adult(18+)</label><select name='number'></select>");
}
});
