import './App.css';
import { AgoraEduSDK } from 'agora-classroom-sdk';

function App() {
  console.log('AgoraEduSDK is available', AgoraEduSDK);

  function launch() {
    AgoraEduSDK.config({
      appId: '8a23d043d1f2493b9e50b358002542c7',
      region: 'NA',
    });

    // Launch a classroom
    AgoraEduSDK.launch(document.querySelector(`#launch-button`), {
      rtmToken:
        '0068a23d043d1f2493b9e50b358002542c7IADlRD73grIqn/MeIfu91nq+LdDXRevrrVXEPx5P5glQIdWm9rAAAAAAEACoG0FNlwnFYgEA6AOXCcVi',
      userUuid: 'teacher',
      userName: 'teacher',
      roomUuid: '09099',
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
