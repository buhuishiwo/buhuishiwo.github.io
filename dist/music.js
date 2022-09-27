const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "晴れが来る",
        artist: '春野杉卉',
        url: 'http://m701.music.126.net/20220927180450/7a4808b9d4cf0da924debd0d1da0fac0/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/13503170898/e160/0c76/0cc9/0aea6a08b643418709fdf46509f40876.mp3',
        cover: 'https://p1.music.126.net/WhFprTaP6wZAJ-pFhTyTnw==/109951164594367006.jpg?param=130y130',
      },
      {
        name: '喜劇',
        artist: '摩登兄弟',
        url: 'http://m801.music.126.net/20220927181017/3f752c50341637bf653baceefc27e57a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14468171881/65fe/cbee/4be7/c38ca5bcc6b1faa7370e5a59eb462250.mp3',
        cover: 'https://p1.music.126.net/_sGZwt82duHeC0et8lsF0w==/109951167257363569.jpg?param=130y130',
      }
    ]
});