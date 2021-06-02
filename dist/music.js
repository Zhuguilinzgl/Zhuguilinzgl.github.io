const ap = new APlayer({ 
    container: document.getElementById( 'player' ), 
    listFolded: false , //列表默认折叠
    mutex: true , // 相互排斥，阻止多个播放器同时播放，当前播放器播放时间暂停其他播放器列表
    listMaxHeight: 90 , //列表最大高度
    audio: [ 
        { name : '很久很久以后' ,             Artist: '邓紫棋' ,             url: 'https://webfs.yun.kugou.com/202106022027/e0770dfae0f4f43e6f2ea79fe4beaa20/G185/M01/11/03/mZQEAF4EtBeAKMJZAEbh7g8NHqI683.mp3' ,             cover: 'url(images/denziq.jpg)' ,             lrc: 'lrc1.lrc' , theme : '#ebd0c2 '         },
            




            

        {名称：'name2'，            艺术家：'artist2'，            网址：'url2.mp3'，            封面：'cover2.jpg'，            lrc：'lrc2.lrc'，主题：'#46718b'         }     ] }）；
            




            


