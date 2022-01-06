student=[];

function submit(){
    var s1=document.getElementById("n1").value;
    var s2=document.getElementById("n2").value;
    var s3=document.getElementById("n3").value;
    var s4=document.getElementById("n4").value;
student.push(s1);
student.push(s2);
student.push(s3);
student.push(s4);
console.log(student);
document.getElementById("display_name").innerHTML=student;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}

function sorting()
{
   student.sort();
   console.log(student);
document.getElementById("display_name").innerHTML=student;
}
