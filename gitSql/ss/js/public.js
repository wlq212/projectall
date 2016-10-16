/**
 * Created by Administrator on 2016/10/11 0011.
 */

function getDB() {
    var db= window.openDatabase("10",1.1,"hh",20*1024*1024);
    return db;
};
(function () {
    var db=getDB();
    db.transaction(function (transaction) {
        var sql="CREATE TABLE  IF NOT EXISTS tbs_one(id INTEGER not null primary key,stuid INTEGER,name TEXT,age INTEGER,address TEXT)";
        transaction.executeSql(sql);
    })
})();

function save(student,hindler) {
    var db=getDB();
    var sql="insert into tbs_one values(?,?,?,?,?)"
    db.transaction(function (transaction) {
        transaction.executeSql(sql,[student.id,student.stuid,student.name,student.age,student.address],function (transaction,result) {
            hindler();
            location.reload();
        })
    })
    
}
function Student(id,stuid,name,age,address){
    this.id=id,
    this.stuid=stuid,
    this.name=name,
    this.age=age,
    this.address=address
}
$(function () {
    (function () {
        var db=getDB();
        var sql="select * from tbs_one ";
        var arr=[];
        db.transaction(function (transaction) {
            var obj=transaction.executeSql(sql,[],function (transaction,result) {
                for(var i=0;i<result.rows.length;i++){

                        var tr=$("<tr><td><input type='checkbox' value='"+result.rows[i].id+"'></td><td>"+result.rows[i].stuid+"</td><td>"+result.rows[i].name+"</td><td>"+result.rows[i].age+"</td><td>"+result.rows[i].address+"</td></tr>");

                        $("tbody").append(tr)

                }
            },function (transaction,error) {
                console.log(error)
            });
        })
    })()
})

function hh(stuid) {
    var db=getDB();
    var sql="select * from tbs_one where id in(?) ";
    db.transaction(function (transaction) {
        var obj=transaction.executeSql(sql,[stuid],function (transaction,result) {
            $("tbody").children().remove();
            for(var i=0;i<result.rows.length; i++){
                var tr=$("<tr><td><input type='checkbox' value='"+result.rows[i].id+"'></td><td>"+result.rows[i].stuid+"</td><td>"+result.rows[i].name+"</td><td>"+result.rows[i].age+"</td><td>"+result.rows[i].address+"</td></tr>");
                $("tbody").append(tr)
            }
        },function (transaction,error) {
            console.log(error)
        });
    })
}
function del(arrid){
    var db=getDB();

        db.transaction(function (transaction) {
            var sql="delete from tbs_one where id in(?)";
            for(var i=0;i<arrid.length;i++){
            transaction.executeSql(sql,[arrid[i]],function (transaction,result) {
                location.reload();
            })
            }
        })

}
    function update(id,hindler) {
        var db=getDB();
        var sql="select * from tbs_one where id in(?)";
        db.transaction(function (transaction) {
            transaction.executeSql(sql,[+id],function (transaction,result) {
                var gg=result.rows[0];
                hindler(gg);

            })
        })
    }
function up(student,hindler ) {
    var db=getDB();
    var sql="update tbs_one set stuid=?,name=?,age=?,address=? where id=?";
    db.transaction(function (transaction) {
        transaction.executeSql(sql,[Number(student.stuid),student.name,Number(student.age),student.address,Number(student.id)],function (transaction,result) {
         hindler();
        },function (transaction,error) {
            console.log(error);
        })
    })
}




