class Video {
  constructor(vid_no, title, description, video, link="#") {
    this.vid_no = vid_no;
    this.title = title;
    this.description = description;
    this.video = video;
    this.link = link;

  }
  
  render() {
    const cardLink = document.createElement("a");
    cardLink.classList.add("nodecoration");
    cardLink.href = `${this.link}`;
    
    const cardItem = document.createElement("div");
    cardItem.classList.add("playlist-item");
    
    const videoNumber = document.createElement("span");
    videoNumber.id = "video_no";
    videoNumber.classList.add("playlist-text");
    videoNumber.innerText = `#${this.vid_no}:`;
    
    const videoTitle = document.createElement("span");
    videoTitle.id = "video_title";
    videoTitle.classList.add("playlist-text");
    videoTitle.innerText = `${this.title}`;
    
    cardItem.appendChild(videoNumber);
    cardItem.appendChild(videoTitle);
    
    cardLink.appendChild(cardItem);
    
    const videoPlayer = document.getElementById("video-player");
    const video_Title = document.getElementById("video-title");
    const videoDescription = document.getElementById("video-description");
    
    cardLink.addEventListener('click', ()=>{
      videoPlayer.src = `${this.video}`;
      video_Title.innerText = `${this.title}`;
      videoDescription.innerText = `${this.description}`;
      currentVideo = this;
    });
    
    return cardLink;
  }
  
  changeToCurrentVideo() {    
    const videoPlayer = document.getElementById("video-player");
    const video_Title = document.getElementById("video-title");
    const videoDescription = document.getElementById("video-description");
    
    videoPlayer.src = `${this.video}`;
    video_Title.innerText = `${this.title}`;
    videoDescription.innerText = `${this.description}`;
  }
}

// head and playlist title
let courseName = courseName_fromDB[0].ctitle;
const head_title = document.getElementById("head-title");
head_title.textContent = `${courseName} | MonkeyLearn`
const playlistTitle = document.getElementById("playlist-title");
playlistTitle.innerText = `${courseName}`;

// playlist-items
let videos = [];
for(let i=0; i<videos_json.length; i++) {
  videos.push(
    new Video(
      videos_json[i].vid_no,
      videos_json[i].vtitle,
      videos_json[i].vdesc,
      videos_json[i].vlink
    )
  );
}
const playlist = document.getElementById("playlist-items");
for(let i=0; i<videos.length; i++){
  playlist.appendChild(videos[i].render());
}

/////////////// Navigation  Buttons ////////////////
var currentVideo = videos[0];
currentVideo.changeToCurrentVideo();
const previous_button = document.getElementById("previous-btn");
const next_button = document.getElementById("next-btn");

// Circular navigation
previous_button.addEventListener('click', () => {
  if(currentVideo.vid_no.toString() === "1") {
    currentVideo = videos[videos.length-1];
  } else {
    currentVideo = videos[videos.indexOf(currentVideo)-1];
  }
  currentVideo.changeToCurrentVideo();
});

next_button.addEventListener('click', () => {
  if(currentVideo.vid_no.toString() === videos.length.toString()) {
    currentVideo = videos[0];
  } else {
    currentVideo = videos[videos.indexOf(currentVideo)+1];
  }
  currentVideo.changeToCurrentVideo();
});