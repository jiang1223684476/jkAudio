$(function () {
    /**
     * 添加以下代码到html中
     *  <div id="audioContainer">
                        <audio id="audio" src=""></audio>
                        <div id="audioPlay" class="fa fa-play"></div>
                        <div id="audioInfo">
                            <marquee id="audioName" loop="infinite">JK's Music box</marquee>
                            <div id="audioControl">
                                <i id="audioVolumeIcon" class="fa fa-volume-up"></i>
                                <input id="audioVolume" type="range" value="20" max="100">
                                <i id="audioNext" class="fa fa-arrow-right"></i>
                                <i id="audioLoop" class="fa fa-repeat"></i>
                                <span id="audioProgress">00:00</span>
                            </div>
                        </div>
                    </div>
     */

    /**
     * 音频播放器
     *
     */
        //audio标签通过js获取
    let audioDom = document.getElementById("audio");
    //audio标签通过jquery获取
    let $audio = $("audio");
    let $audioPlay = $("#audioPlay");
    let $audioName = $("#audioName");
    let $audioNext = $("#audioNext");
    let $audioVolume = $("#audioVolume");
    let $audioVolumeIcon = $("#audioVolumeIcon");
    let $audioLoop = $("#audioLoop");
    let $audioProgress = $("#audioProgress");

    //歌曲名
    let audioName = [
        "Violet Snow -rearrange Ver.-（Cover 結城 アイラ）",
        "Grind Me Down (Jawster Remix)",

        "The Crunching Rhythm of Chiba “Rakkasei”",
        "Faded Tone “A”",

        "New Party Member",
        "GARAGE (Main Menu)",
        "canzoni preferite",
        "I Want You",
        "DOA",
        "Devil Trigger",
    ];
    //歌曲封面
    let audioImage = [
        "http://p1.music.126.net/KEOpJLn0cpkGeSadsg6qQw==/109951163135336778.jpg?param=90y90",
        "https://p2.music.126.net/DwcM7ClereFuViGvbTHqRg==/19129303300302650.jpg?param=90y90",

        "http://p2.music.126.net/NhZGQ2CoA5sf-o3fOTs-Ng==/109951163940415205.jpg?param=90y90",
        "http://p2.music.126.net/NhZGQ2CoA5sf-o3fOTs-Ng==/109951163940415205.jpg?param=90y90",



        "http://p2.music.126.net/PqYbS_5CmeEm2ldGBEeojg==/19233756904818083.jpg?param=90y90",
        "http://p1.music.126.net/NhZGQ2CoA5sf-o3fOTs-Ng==/109951163940415205.jpg?param=90y90",
        "http://p1.music.126.net/-teyfCB0_9ZXq_G73D4wLA==/109951163738606984.jpg?param=90y90",
        "http://p1.music.126.net/H5-dJW7V9rd7rVM4Xvdq4A==/16587232416991528.jpg?param=90y90",
        "http://p2.music.126.net/e4VoNx1M3q4hOREXKm_e7g==/109951163598090530.jpg?param=90y90",
        "http://p1.music.126.net/NhZGQ2CoA5sf-o3fOTs-Ng==/109951163940415205.jpg?param=90y90",
    ];
    //歌曲链接
    let audioLink = [
        "http://music.163.com/song/media/outer/url?id=536181647.mp3",
        "http://music.163.com/song/media/outer/url?id=493646263.mp3",

        "http://music.163.com/song/media/outer/url?id=1353164041.mp3",
        "http://music.163.com/song/media/outer/url?id=1353160016.mp3",

        "http://music.163.com/song/media/outer/url?id=478731318.mp3",
        "http://music.163.com/song/media/outer/url?id=1353163319.mp3",
        "http://music.163.com/song/media/outer/url?id=1334778977.mp3",
        "http://music.163.com/song/media/outer/url?id=32548920.mp3",
        "http://music.163.com/song/media/outer/url?id=26562724.mp3",
        "http://music.163.com/song/media/outer/url?id=1353163404.mp3",
    ];
    //歌曲索引为随机链接长度以内的值
    let audioIndex = Math.floor(Math.random() * audioLink.length);

    //播放音量初始化为音量控制条数值
    audioDom.volume = $audioVolume.val() / 100;

    //根据当前歌曲索引替换音频链接
    $audio.attr("src", audioLink[audioIndex]);
    //点击播放
    $audioPlay.click(function () {
        //如果暂停
        if (audioDom.paused) {
            //更改播放按钮为暂停
            $audioPlay.attr("class", "fa fa-pause");
            //替换封面
            $audioPlay.css("background-image", `url("${audioImage[audioIndex]}")`);
            //替换歌名
            $audioName.text(audioName[audioIndex]);
            //播放音乐
            audioDom.play();
        } else {
            //如果正在播放将替换为播放按钮
            $audioPlay.attr("class", "fa fa-play");
            //暂停音乐
            audioDom.pause();
        }
    });

    //播放结束监听
    audioDom.onended = function () {
        //歌曲索引+1
        audioIndex++;
        //如果歌曲索引等于歌曲链接长度
        if (audioIndex === audioLink.length) {
            //歌曲索引变为0
            audioIndex = 0;
        }
        //根据当前歌曲索引替换音频链接
        $audio.attr("src", audioLink[audioIndex]);
        //替换封面
        $audioPlay.css("background-image", `url("${audioImage[audioIndex]}")`);
        //替换歌名
        $audioName.text(audioName[audioIndex]);
        //播放音乐
        audioDom.play();
    };

    //播放下一首
    $audioNext.click(function () {
        //歌曲索引+1
        audioIndex++;
        //如果歌曲索引等于歌曲链接长度
        if (audioIndex === audioLink.length) {
            //歌曲索引变为0
            audioIndex = 0;
        }
        //替换歌名
        $audioName.text(audioName[audioIndex]);
        //根据当前歌曲索引替换音频链接
        $audio.attr("src", audioLink[audioIndex]);
        //替换封面
        $audioPlay.css("background-image", `url("${audioImage[audioIndex]}")`);
        //暂停音乐
        audioDom.pause();
        //设置当前进度为0
        audioDom.currentTime = 0;
        //播放音乐
        audioDom.play();
        //更改播放按钮为暂停
        $audioPlay.attr("class", "fa fa-pause");
    });

    //音量按钮点击
    $audioVolumeIcon.click(function () {
        //显示音量控制条
        $audioVolume.css({display: "inline-block"});
        //隐藏进度条
        $audioProgress.css({display: "none"});
    });
    //音量控制(当音量控制条发生变化时改变)
    $audioVolume.change(function () {
        //显示进度条
        $audioProgress.css({display: "inline-block"});
        //隐藏音量控制条
        $audioVolume.css({display: "none"});
        //获取当前音量控制条值
        let volume = $audioVolume.val() / 100;
        //设置音量(0~1)
        audioDom.volume = volume;
        //如果小于50%且不为0
        if (volume < 0.5 && volume !== 0) {
            //替换音量按钮
            $audioVolumeIcon.attr("class", "fa fa-volume-down");
        }
        //如果大于50%
        else if (volume > 0.5) {
            //替换音量按钮
            $audioVolumeIcon.attr("class", "fa fa-volume-up");
        }
        //如果等于0
        else if (volume === 0) {
            //替换音量按钮
            $audioVolumeIcon.attr("class", "fa fa-volume-off");
        }
    });

    //循环控制
    $audioLoop.click(function () {
        //如果已经循环
        if (audioDom.loop) {
            //取消循环
            audioDom.loop = false;
            //恢复字体颜色
            $audioLoop.css({color: "#000000"});
        } else {
            //开始循环
            audioDom.loop = true;
            //修改字体颜色
            $audioLoop.css({color: "#ff5e79"});
        }
    });

    //计60秒过去次数
    let count60 = 0;
    //分钟
    let m = "0" + 0;
    //进度控制(当歌曲播放进度更新时执行)
    audioDom.ontimeupdate = function () {
        //(当前歌曲进度/歌曲总进度)*100
        let progress = (audioDom.currentTime / audioDom.duration) * 100;
        //根据当前进度更改id为audioProgress总长度
        $audioProgress.css({width: `${progress}px`});

        //获取当前歌曲进度
        let currentTime = Math.floor(audioDom.currentTime);
        //秒(当前进度-60*60秒过去次数)
        let s = currentTime - 60 * count60;

        //如果总播放进度等于100
        if (progress === 100) {
            //60秒过去次数清空为0
            count60 = 0;
            //分钟清空为0
            m = 0;
            //加前缀为0
            m = "0" + m;
        }
        //如果秒等于60
        if (s === 60) {
            //秒数清空为0
            s = 0;
            //60秒过去次数将1
            count60++;
            //如果分钟小于10
            if (m < 10) {
                //分钟前缀为0且加1
                m++;
                m = "0" + m;
            } else {
                //如果分钟不小于10
                //分钟加1
                m++;
            }
        }
        //如果秒小于60
        if (s < 10) {
            //秒加前缀0
            s = s.toString().replace(s, "0" + s);
        }
        //显示进度
        $audioProgress.text(`${m}:${s}`);
    };
});