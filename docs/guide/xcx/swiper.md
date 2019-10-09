# 小程序中如何实现抖音的无限滑动效果

- 为什么要这个效果，主要是在有些业务中需要这种效果。（老板要求）

- 主要的用到的知识点
小程序中的swiper用法，和video的用法

- 主要是利用swiper的效果，页面写上三个swiper然后在视频加载的过程中，切换swiper
直接上代码吧



		<view class="container">
			<swiper vertical circular wx:if="showSwper==1" class="swiper s1" current="0"  bindchange="changevideo">
				<swiper-item  wx:for="videoArr1" item-id="item.id">
					<video wx:if="item.id==id" class="myVideo"   autoplay src="item.video" danmu-list="danmuList" enable-danmu danmu-btn controls ></video>
					<image wx:else src="item.img" class="img"></image>
				</swiper-item>
			</swiper>
			<swiper vertical circular class="swiper s2" wx:if="showSwper==2" current="1"  bindchange="changevideo">
				<swiper-item  wx:for="videoArr2" item-id="item.id">
					<video wx:if="item.id==id" class="myVideo" autoplay src="item.video" danmu-list="danmuList" enable-danmu danmu-btn controls ></video>
					<image wx:else src="item.img" class="img"></image>
					</swiper-item>
			</swiper>
			<swiper vertical circular class="swiper s3" wx:if="showSwper==3" current="1"  bindchange="changevideo">
				<swiper-item  wx:for="videoArr3" item-id="item.id">
					<video wx:if="item.id==id" class="myVideo" autoplay src="item.video" danmu-list="danmuList" enable-danmu danmu-btn controls ></video>
					<image wx:else src="item.img" class="img"></image>
					</swiper-item>
				</swiper>
		</view>


js代码就是判断状态判定各种组件的渲染效果，保证每个swiper只渲染3个视频。以免swiper手机扛不住

		getVideo(id) {
	        var videoArr = this.data.videoArr;
	        var arr = [];
	        console.log(id)
	        videoArr.map((item, index) => {
	            if (item.id == id) {
	                if (index > 0) {
	                    arr.push(videoArr[index - 1])
	                }
	                arr.push(item)
	                if (index < videoArr.length - 1) {
	                    arr.push(videoArr[index + 1])
	                }
	            }
	        })
	        return arr
	        },
		changevideo(e) {
		    var curr = e.detail.current;
		    var id = e.detail.currentItemId;
		    var arr = this.getVideo(id);
		    var showSwper = this.data.showSwper;
		    var name = showSwper!=2?'videoArr2':'videoArr3'
		    console.log(e,id)
		    console.log(name,arr)
		    this.setData({
		            [name]:arr,
		        })
		    setTimeout(() => {
		        this.setData({
		            id,
		            showSwper:showSwper!=2?2:3
		        })
		    }, 1000)
    	},

其中还有各种处理开头还有结尾的东西。就不展示了，需要根据业务的区别来改变

- 为什么用3个swiper而不是用2个
	主要是 swiper 中的 current判断是有渲染问题的，最后决定用3个，只有开头时用第一个，其他的时候是 2和3在轮流显示。


效果（刷新查看）
	![avatar](https://cdn.weipaitang.com/static/20191009316af309-aa16-4c82-bdf2-780bd303335b-W314H673)



