let calendar;
let Default_Color = "rgb(55,136,216)";
let Selcted_Color = "rgb(30,75,166)";
$(function(){

    $.getJSON("https://conripi.github.io/arknights_birthday/data/data.json", (data) => {
        let birthday_data = [];
        let year = new Date().getFullYear();

        for(let i = 0; i < data.length; i++){
            let date = year + "-" + data[i].birthday;
            date = dayjs(date).format("YYYY-MM-DD");
            if(date === dayjs(year+"-01-01").format("YYYY-MM-DD")) continue;

            let json = {display: 'block', id: data[i].name, title: data[i].name, start: date, url: data[i].url, color: Default_Color};
            birthday_data.push(json);
        }
        
        let birthday_json = JSON.stringify(birthday_data)

        var calendarEl = document.getElementById("calendar");
        calendar = new FullCalendar.Calendar(calendarEl, {
            dayCellContent: function(e) {
                e.dayNumberText = e.dayNumberText.replace('日', '');
            },
            locale: 'ja',
            height: 'auto',
            firstDay: 1,
            expandRows: true,
            selectable: true,
            headerToolbar: {
                left: "",
                center: "title",
                right: "today prev,next"
            },
            buttonText: {
                today: '今月',
                month: '月',
                list: 'リスト'
            },
            events: JSON.parse(birthday_json),
            eventMouseEnter: function(e) {
                e.jsEvent.preventDefault();
                //if (info.event.url) {
                    //window.open(info.event.url);
                    // ShowContextMenu(e);
                //}
                ShowContextMenu(e);
            },
            eventMouseLeave: function (e){
                //HideContextMenu(e);
            },
        });

        $("calendar").addTouch();

        calendar.render();


        //今日の誕生日
        for(let i = 0; i < birthday_data.length; i++){
            if(birthday_data[i].start !== dayjs().format("YYYY-MM-DD")) continue;
            let url = birthday_data[i].url;
            $("#today > .btn-group").append("<div><button style='margin-left: 20px;' type=\"button\" class=\"btn btn-lg btn-primary\" onclick=\"window.open('"+url+"', '_blank')\">"+birthday_data[i].title+"</button></div>")
        }
    })
})

var EventID;
function ShowContextMenu(e){
    console.log(e);
    e.event.setProp('backgroundColor', Selcted_Color);
    $("#c").css("left", e.jsEvent.clientX - 30 + "px");
    $("#c").css("top", e.jsEvent.clientY - 40 + "px");
    $("#c").css("display", "block");
    EventID = e.event.id;
}

function HideContextMenu(e){
    $("#c").css("display", "none");
    calendar.getEventById(EventID).setProp('backgroundColor', Default_Color);
}


$("#c").mouseleave(function (e) {
    HideContextMenu();
})

$("#Wiki").click(function (e){
    window.open(calendar.getEventById(EventID).url);
})

$("#Twitter").click(function (e){
    window.open("https://twitter.com/search?q=%23アークナイツ%20"+EventID+"%20filter%3Amedia&src=typed_query&f=top");
})

$("#Pixiv").click(function (e){
    window.open("https://www.pixiv.net/tags/"+EventID+"(アークナイツ)/artworks?s_mode=s_tag");
})

$("#Pixiv000user").click(function (e){
    window.open("https://www.pixiv.net/tags/"+EventID+"(アークナイツ) 000user/artworks?s_mode=s_tag");
})