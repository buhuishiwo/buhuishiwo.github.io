const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '前前前世',
            artist: '',
            url: 'https://www.ytmp3.cn/down/60420.mp3',
            cover: 'cover1.jpg',
        }
        
    ]
});