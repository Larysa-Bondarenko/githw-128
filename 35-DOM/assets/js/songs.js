const playList = [
    {
    author: "LED ZEPPELIN",    
    song:"STAIRWAY TO HEAVEN"      
    },
    {
    author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];

const root = document.createElement('div');
root.id = 'root';

const olSongsList = document.createElement('ol');
olSongsList.id = 'songs-list';
olSongsList.className = 'rock';

const liSongs = document.createElement('li');
liSongs.classList.add('song-item');

playList.forEach((item) => {
    const li = liSongs.cloneNode();
    // li.innerText = `${item.author} - ${item.song}`; 
    // const spanSong = document.createElement('span');
    // spanSong.innerText = item.song;  //innerText is much safer
    // const strongAuthor = document.createElement('strong');
    // strongAuthor.innerText = item.author;
    // li.append(strongAuthor, ' - ', spanSong);

    //or like this instead of creating separately span and strong & don't add   li.append(strongAuthor, ' - ', spanSong);
    li.innerHTML = `<strong>${item.author}</strong> - <span>${item.song}</span>`; //innerHTML may allow malicious code, if Eg text is provided by smb else(client)
    
    olSongsList.append(li)
  })
  
  root.append(olSongsList)
  document.body.prepend(root);
  // console.log([root]);

