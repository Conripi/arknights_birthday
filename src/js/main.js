$(function(){



    $.getJSON("https://conripi.github.io/arknights_birthday/data/data.json", (data) => {
        $("#today > .btn-group").append("<p>"+data[0].name+"</p>");

        /*
        let birthday_data = [];
        let year = new Date().getFullYear();

        for(let i = 0; i < data.length; i++){
            let date = year + "-" + data[i].birthday;
            date = moment(date).format("YYYY-MM-DD");
            if(date === moment(year+"-01-01").format("YYYY-MM-DD")) continue;

            let json = {title: data[i].name, start: date, url: data[i].url};
            birthday_data.push(json);
        }

        let birthday_json = JSON.stringify(birthday_data)

        var calendarEl = document.getElementById("calendar");
        var calendar = new FullCalendar.Calendar(calendarEl, {
            dayCellContent: function(e) {
                e.dayNumberText = e.dayNumberText.replace('日', '');
            },
            locale: 'ja',
            height: 'auto',
            firstDay: 1,
            expandRows: true, // 画面に合わせて高さを再設定
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
            eventClick: function(info) {
                info.jsEvent.preventDefault(); // don't let the browser navigate

                if (info.event.url) {
                    window.open(info.event.url);
                }
            },
        });

        $("calendar").addTouch();

        calendar.render();

        //今日の誕生日
        for(let i = 0; i < birthday_data.length; i++){
            if(birthday_data[i].start !== moment().format("YYYY-MM-DD")) continue;

            let url = birthday_data[i].url;
            $("#today > .btn-group").append("<div><button style='margin-left: 20px;' type=\"button\" class=\"btn btn-lg btn-primary\" onclick=\"window.open('"+url+"', '_blank')\">"+birthday_data[i].title+"</button></div>")
        }
        */
    })
})

