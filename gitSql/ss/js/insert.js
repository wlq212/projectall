/**
 * Created by Administrator on 2016/10/11 0011.
 */

$(function () {
    $("#formone").submit(function () {
       var id=$(this).find("[name='id']").val();
       var stuid=$(this).find("[name='stuid']").val();
       var name=$(this).find("[name='name']").val();
        var age=$(this).find("[name='age']").val();
        var  address=$(this).find("[name='address']").val();
        var student=new Student(+id,+stuid,name,+age,address);
        save(student,function () {
            alert('添加成功');
        })
    })
})

