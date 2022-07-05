import './App.css';
import { AgoraEduSDK, EduClassroomUIStore } from 'agora-classroom-sdk';
import { useEffect, useState } from 'react';
import { EduClassroomStore } from 'agora-edu-core';

function App() {
  const [launchDone, setLaunchDone] = useState(false);

  useEffect(() => {
    if (launchDone) {
      const store = new EduClassroomStore();
      const res = store.initialize();
      const a = new EduClassroomUIStore(res);

      console.log('a', a);
    }
  }, [launchDone]);

  async function launch() {
    await AgoraEduSDK.config({
      appId: '8a23d043d1f2493b9e50b358002542c7',
      region: 'NA',
    });

    await AgoraEduSDK.launch(document.querySelector(`#launch-button`), {
      rtmToken:
        '0068a23d043d1f2493b9e50b358002542c7IAAykvvShrc+qhM+XgPfEZnJTTuRY9UTHx6UA4tL6HYvhdWm9rAAAAAAEACrJHJ9fyjFYgEA6AN/KMVi',
      userUuid: 'teacher',
      userName: 'teacher',
      roomUuid: '019',
      roleType: 1,
      roomType: 4,
      roomName: 'demo-class',
      pretest: false,
      language: 'en',
      startTime: new Date().getTime(),
      duration: 60 * 30,
      courseWareList: [],
      listener: (evt) => {
        console.log('evt', evt);
      },
    });

    setLaunchDone(true);
  }

  return (
    <div className='App'>
      <h1>Hello Agora</h1>

      <button type='button' onClick={launch}>
        launch
      </button>
      <div id='launch-button'></div>
    </div>
  );
}

export default App;
