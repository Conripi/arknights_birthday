$(function(){
    $("#today > .btn-group").append("<p>aaaaa</p>");

    
    $.getJSON("https://conripi.github.io/arknights_birthday/data/data.json", (data) => {
        let birthday_data = [];
        let year = new Date().getFullYear();

        for(let i = 0; i < data.length; i++){
            let date = year + "-" + data[i].birthday;
            date = moment(date).format("YYYY-MM-DD");
            if(date === moment(year+"-01-01").format("YYYY-MM-DD")) continue;

            let json = {title: data[i].name, start: date, url: data[i].url};
            birthday_data.push(json);
        }

        //今日の誕生日
        for(let i = 0; i < birthday_data.length; i++){
            if(birthday_data[i].start !== moment().format("YYYY-MM-DD")) continue;

            let url = birthday_data[i].url;
            $("#today > .btn-group").append("<div><button style='margin-left: 20px;' type=\"button\" class=\"btn btn-lg btn-primary\" onclick=\"window.open('"+url+"', '_blank')\">"+birthday_data[i].title+"</button></div>")
        }
    })
})

