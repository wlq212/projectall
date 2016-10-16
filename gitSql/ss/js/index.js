/**
 * Created by Administrator on 2016/10/11 0011.
 */
$(function () {

    var select= $("button");
    $(select[0]).on('click',function () {
        var stuid=$("input[name='select']").val();
        console.log(stuid);
        var students=hh(+stuid);


    })
    $("button:contains('删除')").on('click',function () {
        var arr=[];
        $("input:checkbox:checked").each(function (index,item) {
           arr.push($(item).val());
        })
        del(arr);

    })
    $("#allcheck").on('click',function(){
        if($("#allcheck").prop('checked')){
            $("input:checkbox").each(function (index,item){
              $(item).prop("checked","checked");
            })
        }else {
            $("input:checkbox").each(function (index,item){
                $(item).prop("checked","");
            })
        };

    })
    $("button:contains('更新')").on('click',function () {
        $("body").load("update.html");
        $("input:checkbox:checked").each(function (index, item) {
            update($(item).val(),function (result) {
                $("input[name='id']").val(result.id) ;
                $("input[name='stuid']").val(result.stuid) ;
                $("input[name='name']").val(result.name) ;
                $("input[name='age']").val(result.age) ;
                $("input[name='address']").val(result.address) ;
            });
        })

    })

    /*(function gg(result) {
        console.log(1);

    })(result)*/
})


