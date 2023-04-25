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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Array should be dynamically updated from database
let videos = [
  new Video('1', "This is chapter 1", "Some Description", "../res/courses/default/videos/chapter_1.mp4"),
  new Video('2', "This is chapter 2", "Some Description2", "../res/courses/default/videos/chapter_2.mp4"),
  new Video('3', "This is chapter 3", "Some Description3", "../res/courses/default/videos/chapter_3.mp4")
];

//////////////// Updating Playlist /////////////////

// Playlist title = course name
let courseName = "Default Course"; // This should come from database
const playlistTitle = document.getElementById("playlist-title");
playlistTitle.innerText = `${courseName}`;

// playlist-items
const playlist = document.getElementById("playlist-items");
for(let i=0; i<videos.length; i++){
  playlist.appendChild(videos[i].render());
}

/////////////// Navigation  Buttons ////////////////
var currentVideo = videos[0];
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