

const form = document.querySelector("#form")
const sendButton = document.querySelector('.sendknap');
const chatContainer = document.querySelector('#chat-container');
const messageInput = document.querySelector('.tekstfelt');


const messageArray = [
  {
    profileImage: "icons/profile.descuss.svg",
    profileText: {
      position: "Studerende",
      semester: 2
    },
    message: "Vi er et par stykker fra mit hold der har det på samme måde, måske kunne vi finde ud af noget sammen.",
    likes: "4",
  },

  {
    profileImage: "icons/profile.descuss.svg",
    profileText: {
      position: "Studerende",
      semester: 3
    },
    message: "Vi er et par stykker på 3. semester der har et par workshops en gang i mellem, kunne det være noget for dig / jer ? ",
    likes: "2",
  },
]


messageArray.forEach(message => {
  createMessage(message)
})


function createMessage(data) {
  
  const messageText = messageInput.value;

 
  const newMessageElement = document.createElement('div');
  newMessageElement.classList.add("chat-message")

  
  newMessageElement.innerHTML = `
      <div class="profile">
        <div><img src="${data.profileImage}" alt="anonymt profilbillede"></div>
        <div>
          <p class="profiltekst1">${data.profileText.position}</p>
        </div>
        <div>
          <p class="profiltekst2">${data.profileText.semester}. Semester</p>
        </div>
      </div>

      <div class="message">
        <div>
          <p class="comment">${data.message}</p>
        </div>
        <div class="likes">
          <div class="nonlike"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
              <path
                d="M721 936H254V424l278-288 33 26q11 8 14.5 18t3.5 23v10l-45 211h322q23 0 41.5 18.5T920 484v82q0 11-2.5 25.5T910 617L794 885q-9 21-29.5 36T721 936ZM194 424v512H80V424h114Z" />
            </svg></div>
          <div>
            <p>&nbsp;&nbsp;</p>
          </div>
          <div>
            <p class="like-tekst">Du og ${data.likes} andre synes godt om dette.</p>
          </div>
        </div>
      </div>
  `;

  
  chatContainer.appendChild(newMessageElement);

  
  messageInput.value = '';

  
  window.scrollTo(0, document.body.scrollHeight);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const object = {
    profileImage: "icons/profile.descuss.svg",
    profileText: {
      position: "Studerende",
      semester: 2
    },
    message: messageInput.value,
    likes: "4",
  }

  createMessage(object)
});
