import React from 'react';
import ReactAplayer from 'react-aplayer';



export default class Music extends React.Component {
  // event binding example
  onPlay = () => {
    console.log('on play');
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };

  render() {
    const props = {
      theme: '#F57F17',
      // lrcType: 3,
      autoplay: true,
      fixed: true,
      mini: true,
      preload: 'auto',
      listFolded: true,
      audio: [
        {
          name: '哈喽',
          artist: '陈泓宇',
          url: 'http://m10.music.126.net/20200727100615/0c15c07de5532347d39be376103ecb4a/ymusic/0e5e/0209/0259/94b084e3b25c722150b453729572e12c.mp3',
          cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
          theme: '#ebd0c2'
        },
        {
          name: '😀',
          artist: 'XX:me',
          url: 'http://m10.music.126.net/20200727101112/fe17ae97b0f6406bbf4078c84dcc9757/ymusic/545e/065a/530b/c413a59407100320b8f9da233b35f938.mp3',
          cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
          lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
          theme: '#46718b'
        },

        {
          name: '宝宝',
          artist: 'XX:me',
          url: 'http://music.163.com/song/media/outer/url?id=476592630.mp3',
          cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
          lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
          theme: '#46718b'
        },

     
      ]
    };

    return (
      <div>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
        {/* example of access aplayer instance API */}
        {/* <button onClick={() => this.ap.toggle()}>toggle</button> */}
      </div>
    );
  }
}