$(function () {
    initAudioHtml();

    /**
     * 初始化音频播放器标签
     */
    function initAudioHtml() {
        $("body").append(`
                <div id="audioContainer">
                    <audio id="audio" src=""></audio>
                    <div id="audioPlay" class="fa fa-play"></div>
                    <div id="audioBg"></div>
                    <div id="audioInfo">
                        <marquee id="audioName" loop="infinite">JK's Music box</marquee>
                        <div id="audioControl">
                            <i id="audioVolumeIcon" class="fa fa-volume-up"></i>
                            <input id="audioVolume" type="range" value="40" max="100">
                            <i id="audioNext" class="fa fa-random"></i>
                            <i id="audioLoop" class="fa fa-retweet"></i>
                        </div>
                        <div id="audioBar">
                            <div id="audioProgress">00:00</div>
                        </div>
                     </div>
                    <div id="audioSwitch">
                        <i class="fa fa-music"></i>
                    </div>
                </div>`);

        let songsList = [
            {
                title: "Shelter (Xeuphoria Cover)",
                image: "http://p1.music.126.net/j7uYUNqjQr8zEQed-2VQ6Q==/18718085952058600.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=437290318.mp3",
            },
            {
                title: "魔法のアンサンブル",
                image: "http://p2.music.126.net/y0UqH4kPeMfPap0CRnlVEg==/6030821278736661.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=28561003.mp3",
            },
            {
                title: "world.execute (me)",
                image: "http://p2.music.126.net/-OxCLbGs-JxKtPaBCo1yuw==/18801648835570109.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=435278010.mp3",
            },
            {
                title: "Re:make",
                image: "http://p2.music.126.net/M2akuwT-ZxzQjcc122r3zg==/109951163800006263.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=794080.mp3",
            },
            {
                title: "Boys in Kaleidosphere",
                image: "http://p1.music.126.net/ww7gcJ_erzPa8jgZesmTOA==/109951163271403502.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=554242866.mp3",
            },
            {
                title: "MOTHER",
                image: "http://p1.music.126.net/qWpxDNiONBC8tGHRiT-sIg==/109951163555072180.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=1309901210.mp3",
            },
            {
                title: "Violet Snow -rearrange Ver.-（Cover 結城 アイラ）",
                image: "http://p1.music.126.net/KEOpJLn0cpkGeSadsg6qQw==/109951163135336778.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=536181647.mp3",
            },
            {
                title: "Grind Me Down (Jawster Remix)",
                image: "https://p2.music.126.net/DwcM7ClereFuViGvbTHqRg==/19129303300302650.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=493646263.mp3",
            },
            {
                title: "不可逆リプレイス",
                image: "http://p2.music.126.net/TkIxL2uWGVMAmxxd0cI0FA==/2538772348815654.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=29436956.mp3",
            },
            {
                title: "The Crunching Rhythm of Chiba “Rakkasei”",
                image: "http://p2.music.126.net/NhZGQ2CoA5sf-o3fOTs-Ng==/109951163940415205.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=1353164041.mp3",
            },
            {
                title: "Cloak and Dagger",
                image: "http://p1.music.126.net/cGtyjLew7JwUq__YCRd0TA==/2893914605754636.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=32063385.mp3",
            },
            {
                title: "New Party Member",
                image: "http://p2.music.126.net/PqYbS_5CmeEm2ldGBEeojg==/19233756904818083.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=478731318.mp3",
            },
            {
                title: "GARAGE (Main Menu)",
                image: "http://p1.music.126.net/NhZGQ2CoA5sf-o3fOTs-Ng==/109951163940415205.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=1353163319.mp3",
            },
            {
                title: "I Want You",
                image: "http://p1.music.126.net/H5-dJW7V9rd7rVM4Xvdq4A==/16587232416991528.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=32548920.mp3",
            },
            {
                title: "Devil Trigger",
                image: "http://p1.music.126.net/NhZGQ2CoA5sf-o3fOTs-Ng==/109951163940415205.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=1353163404.mp3",
            },
            {
                title: "提尔主题曲(片尾曲)",
                image: "http://p1.music.126.net/TYLt2XPLhWteveikPDheMw==/3235862722409135.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=29784054.mp3",
            },
            {
                title: "雾 缀じた街 ふたつのかげ",
                image: "http://p2.music.126.net/5_74V6gQtRHHYCiFxmyb6w==/634418209238486.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=803048.mp3",
            },
            {
                title: "Relax and Reflect",
                image: "http://p1.music.126.net/E9vaKQHlVCFXRGlyRc65Ag==/109951163313516903.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=448724081.mp3",
            },
            {
                title: "瑞風~夜~",
                image: "http://p2.music.126.net/jaCeRbLeeWlit07tjHG2bw==/3263350518690901.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=39122080.mp3",
            },
            {
                title: "The First Town",
                image: "http://p1.music.126.net/eiOJodIOugVqdk4-wBRcmA==/2394736325356374.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=26491723.mp3",
            },
            {
                title: "Any Special Orders? (Tropical Devil Night Remix)",
                image: "http://p1.music.126.net/NhZGQ2CoA5sf-o3fOTs-Ng==/109951163940415205.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=692443.mp3",
            },
            {
                title: "Walk Like an Egyptian",
                image: "http://p2.music.126.net/juW4YgTBMcYaUn0Xc6E5hA==/2494791883445668.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=19556587.mp3",
            },
            {
                title: "吟遊詩人の詩",
                image: "http://p1.music.126.net/6Ilt7lAJ-YIpjVrs5D0eIQ==/109951163039883807.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=511922706.mp3",
            },
            {
                title: "Crystalline Chill",
                image: "http://p1.music.126.net/E9vaKQHlVCFXRGlyRc65Ag==/109951163313516903.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=448722044.mp3",
            },
            {
                title: "Gently As She Goes",
                image: "http://p2.music.126.net/NDXGMy0uPxV_vlyS-G9EQA==/829031767386617.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=1000152.mp3",
            },
            {
                title: "Divinity Statue",
                image: "http://p1.music.126.net/NhZGQ2CoA5sf-o3fOTs-Ng==/109951163940415205.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=1353159994.mp3",
            },
            {
                title: "I'm ALIVE !",
                image: "http://p1.music.126.net/KwxLj0SYs4PxcEz5svEq4g==/2324367581182393.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=22711820.mp3",
            },
            {
                title: "When No Man Has Gone Before",
                image: "http://p2.music.126.net/cGtyjLew7JwUq__YCRd0TA==/2893914605754636.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=34324758.mp3",
            },
            {
                title: "Everyday Life",
                image: "http://p1.music.126.net/eiOJodIOugVqdk4-wBRcmA==/2394736325356374.jpg?param=90y90",
                src: "http://music.163.com/song/media/outer/url?id=26491695.mp3",
            },
            {
                title: "A Turtle's Heart",
                image: "http://p1.music.126.net/P53AeOf6J1KlgKof1BISEA==/6634453162637484.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=29418286.mp3",
            },
            {
                title: "Sacramentum:Unaccompanied Hymn for Torino",
                image: "http://p1.music.126.net/P53AeOf6J1KlgKof1BISEA==/6634453162637484.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=29418292.mp3",
            },
            {
                title: "Butterfly",
                image: "http://p2.music.126.net/9bQAV8OXvGbMn9kMmmfErA==/109951164235631576.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=1379819365.mp3",
            },
            {
                title: "The Everlasting Guilty Crown",
                image: "http://p2.music.126.net/G-Ymdz0uSgYfbwsjZ0ntHA==/109951164120405226.jpg?param=130y130",
                src: "http://music.163.com/song/media/outer/url?id=722903.mp3",
            },
        ];

        let $audioContainer = $("#audioContainer");
        let $audioProgress = $("#audioProgress");
        let $audioSwitch = $("#audioSwitch");
        // 是否打开
        let isOpen = false;
        // 是否初始化
        let isInit = false;
        // 点击向右展开音频播放器
        $audioSwitch.click(function () {
            // 如果未初始化
            if (isInit !== true) {
                initAudio();
                isInit = true;
            }

            // 当前音频元素宽度
            let width = $audioContainer.width();
            // 如果打开
            if (isOpen) {
                isOpen = !isOpen;
                // 关闭动画
                $audioContainer.animate({"left": `${-width + 30}px`}, 100);
                // 变更颜色
                $(this).css({color: "inherit"});
            } else {
                isOpen = !isOpen;
                // 打开动画
                $audioContainer.animate({"left": "0"}, 200);
                // 变更颜色
                $(this).css({color: "#fa1c63"});
            }
        });

        /**
         * 初始化 audio
         */
        function initAudio() {
            // audio标签通过js获取
            let audioDom = document.getElementById("audio");
            // audio标签通过jquery获取
            let $audio = $("audio");
            let $audioPlay = $("#audioPlay");
            let $audioBg = $("#audioBg");
            let $audioName = $("#audioName");
            let $audioNext = $("#audioNext");
            let $audioVolume = $("#audioVolume");
            let $audioVolumeIcon = $("#audioVolumeIcon");
            let $audioLoop = $("#audioLoop");
            let $audioBar = $("#audioBar");

            // 歌曲随机索引
            let audioIndex = Math.floor(Math.random() * songsList.length);
            // 计60秒过去次数
            let count60 = 0;
            // 分钟
            let m = "0" + 0;

            // 替换歌曲链接
            changeSongs($audio, songsList[audioIndex].src);
            //点击播放
            $audioPlay.click(function () {
                //如果暂停
                if (audioDom.paused) {
                    // 隐藏播放按钮
                    $audioPlay.attr("class", "");
                    // 替换封面
                    changeBackground($audioPlay, songsList[audioIndex].image);
                    // 替换进度背景
                    changeBackground($audioBg, songsList[audioIndex].image);
                    // 替换歌名
                    changeTitle($audioName, songsList[audioIndex].title);
                    // 播放音乐
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
                // 随机歌曲
                audioIndex = Math.floor(Math.random() * songsList.length);
                // 如果歌曲索引至末尾
                if (audioIndex === songsList.length) {
                    // 歌曲索引变为0
                    audioIndex = 0;
                }
                // 替换歌曲链接
                changeSongs($audio, songsList[audioIndex].src);
                // 替换封面
                changeBackground($audioPlay, songsList[audioIndex].image);
                // 替换进度背景
                changeBackground($audioBg, songsList[audioIndex].image);
                // 替换歌名
                changeTitle($audioName, songsList[audioIndex].title);
                // 播放音乐
                audioDom.play();
            };

            //播放下一首
            $audioNext.click(function () {
                // 随机歌曲
                audioIndex = Math.floor(Math.random() * songsList.length);
                // 如果歌曲索引至末尾
                if (audioIndex === songsList.length) {
                    // 歌曲索引变为0
                    audioIndex = 0;
                }
                // 替换歌曲链接
                changeSongs($audio, songsList[audioIndex].src);
                // 替换封面
                changeBackground($audioPlay, songsList[audioIndex].image);
                // 替换进度背景
                changeBackground($audioBg, songsList[audioIndex].image);
                // 替换歌名
                changeTitle($audioName, songsList[audioIndex].title);
                // 暂停音乐
                audioDom.pause();
                // 设置当前进度为0
                audioDom.currentTime = 0;
                // 播放音乐
                audioDom.play();
                // 隐藏播放按钮
                $audioPlay.attr("class", "");
                // 60秒过去次数清空为0
                count60 = 0;
                // 分钟清空为0
                m = 0;
            });

            // 播放音量初始化为音量控制条数值
            audioDom.volume = $audioVolume.val() / 100;
            // 音量按钮点击
            $audioVolumeIcon.click(function () {
                // 显示音量控制条
                $audioVolume.css({display: "inline-block"});
                // 隐藏下一首
                $audioNext.css({display: "none"});
                // 隐藏循环控制
                $audioLoop.css({display: "none"});
            });

            // 音量控制(当音量控制条发生变化时改变)
            $audioVolume.change(function () {
                // 显示下一首
                $audioNext.css({display: "inline-block"});
                // 显示循环控制
                $audioLoop.css({display: "inline-block"});
                // 隐藏音量控制条
                $audioVolume.css({display: "none"});
                // 获取当前音量控制条值
                let volume = $audioVolume.val() / 100;
                // 设置音量(0~1)
                audioDom.volume = volume;
                // 如果小于50%且不为0
                if (volume < 0.5 && volume !== 0) {
                    //替换音量按钮
                    $audioVolumeIcon.attr("class", "fa fa-volume-down");
                }
                // 如果大于50%
                else if (volume > 0.5) {
                    //替换音量按钮
                    $audioVolumeIcon.attr("class", "fa fa-volume-up");
                }
                // 如果等于0
                else if (volume === 0) {
                    // 替换音量按钮
                    $audioVolumeIcon.attr("class", "fa fa-volume-off");
                }
            });

            // 循环控制
            $audioLoop.click(function () {
                // 如果已经循环
                if (audioDom.loop) {
                    // 取消循环
                    audioDom.loop = false;
                    // 恢复字体颜色
                    $audioLoop.css({color: "inherit"});
                } else {
                    // 开始循环
                    audioDom.loop = true;
                    // 修改字体颜色
                    $audioLoop.css({color: "#ff5e79"});
                }
            });

            // 进度更新(当歌曲播放进度更新时执行)
            audioDom.ontimeupdate = function () {
                //( 当前歌曲进度/歌曲总进度)*$audioBar元素长度
                let progress = (audioDom.currentTime / audioDom.duration) * $audioBar.width();
                // 根据当前进度更改id为audioProgress总长度
                $audioProgress.css({width: `${progress}px`});

                // 如果总播放进度等于$audioBar元素长度
                if (progress === $audioBar.width()) {
                    //60秒过去次数清空为0
                    count60 = 0;
                    //分钟清空为0
                    m = 0;
                    //加前缀为0
                    m = "0" + m;
                    return;
                }

                //获取当前歌曲进度
                let currentTime = Math.floor(audioDom.currentTime);
                //秒(当前进度-60*60秒过去次数)
                let s = currentTime - 60 * count60;

                //如果秒等于60
                if (s >= 60) {
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

                //获取总分钟时间 / 60
                let totalMinutes = parseInt((audioDom.duration / 60).toString());
                // 取总秒数 % 60
                let totalSeconds = Math.floor(audioDom.duration) % 60;
                //如果为NaN
                if (isNaN(totalMinutes)) {
                    //清空为 0
                    totalMinutes = "0";
                    totalSeconds = "0";
                }
                //如果总分钟小于10
                if (totalMinutes < 10) {
                    //添加0前缀
                    totalMinutes = "0" + totalMinutes;
                }
                //如果总秒数小于10
                if (totalSeconds < 10) {
                    //添加0前缀
                    totalSeconds = "0" + totalSeconds;
                }

                //显示进度
                $audioProgress.text(`${m}:${s} / ${totalMinutes}:${totalSeconds}`);
            };

            /**
             * 替换背景图
             * @param element
             * @param img
             */
            function changeBackground(element, img) {
                element.css({
                    backgroundImage: `url("${img}")`,
                    backgroundSize: "cover",
                });
            }

            /**
             * 替换歌名
             * @param element
             * @param title
             */
            function changeTitle(element, title) {
                element.text(title);
            }

            /**
             * 替换歌曲链接
             * @param element
             * @param songs
             */
            function changeSongs(element, songs) {
                element.attr("src", songs);
            }
        }
    }
});