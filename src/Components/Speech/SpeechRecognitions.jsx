import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css'; // Custom styles moved to a separate CSS file for better organization

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;

const SpeechRecognitionComponent = () => {
  const [isListening, setIsListening] = useState(false);
  const [vadStatus, setVadStatus] = useState('inactive');
  const [sessionId, setSessionId] = useState('12344'); // Initial session ID
  const [conversationTranscript, setConversationTranscript] = useState([]);
  const isApiCallInProgress = useRef(false);
  const audioRef = useRef(null);

  useEffect(() => {
    recognition.onstart = () => {
      console.log('Recognition started');
      setVadStatus('listening');
    };

    recognition.onend = () => {
      console.log('Recognition ended');
      if (isListening) {
        setVadStatus('inactive');
      }
    };

    recognition.onspeechstart = () => {
      console.log('Speech started');
      setVadStatus('speaking');
    };

    recognition.onspeechend = () => {
      console.log('Speech ended');
      setVadStatus('processing');
      stopListening(); // Stop listening immediately after speech ends
    };

    recognition.onresult = (event) => {
      console.log('Recognition result received');
      const speechResult = event.results[event.results.length - 1][0].transcript;
      console.log('Speech Result:', speechResult);

      setConversationTranscript((prevTranscript) => [
        ...prevTranscript,
        { type: 'user', text: speechResult },
      ]);

      if (!isApiCallInProgress.current) {
        sendTranscriptToAPI(speechResult); // Send the updated transcript to the API
      }
    };

    recognition.onerror = (event) => {
      console.error('Recognition error:', event.error);
      setVadStatus('error');
    };

    return () => {
      // Clean up the recognition object on component unmount
      recognition.onstart = null;
      recognition.onend = null;
      recognition.onspeechstart = null;
      recognition.onspeechend = null;
      recognition.onresult = null;
      recognition.onerror = null;
    };
  }, [isListening]);

  const startListening = () => {
    if (!isListening) {
      console.log('Starting listening');
      setIsListening(true);
      recognition.start();
    } else {
      setIsListening(false);
      setIsListening(true); // Trigger state update to true to start listening
      recognition.start();
    }
  };

  const stopListening = () => {
    if (isListening) {
      console.log('Stopping listening');
      setIsListening(false);
      recognition.stop();
    }
  };

  const sendTranscriptToAPI = async (text) => {
    isApiCallInProgress.current = true;
    try {
      const response = await axios.post(`https://voicing.ngrok.app/synthesize/${sessionId}?text=${encodeURIComponent(text)}`, {}, {
        headers: {
          accept: 'application/json',
        },
        responseType: 'blob',
      });

      const sessionIdFromHeader = response.headers['x-session-id'];
      const responseText = response.headers['response-text'];

      if (sessionIdFromHeader) {
        setSessionId(sessionIdFromHeader);
      }

      setConversationTranscript((prevTranscript) => [
        ...prevTranscript,
        { type: 'ai', text: responseText },
      ]);

      const audioBlob = new Blob([response.data], { type: 'audio/wav' });
      const audioUrl = window.URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      audioRef.current = audio;

      audio.onended = () => {
        console.log('Audio finished playing, restarting listening');
        startListening(); // Restart listening after the audio finishes playing
      };

      stopListening(); // Stop listening while the audio is playing
      audio.play();
    } catch (error) {
      console.error('Error sending transcript to API:', error);
    } finally {
      isApiCallInProgress.current = false;
    }
  };

  useEffect(() => {
    if (audioRef.current && isListening) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      console.log('Audio stopped due to listening state change');
    }
  }, [isListening]);

  if (!SpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div className="chat-container container-fluid">
      <div className="chat-box" id="chatBox">
        {conversationTranscript.map((entry, index) => (
          <div key={index} className={`message ${entry.type === 'user' ? 'user' : 'bot'}`}>
            {entry.text}
          </div>
        ))}
        <span id="rippleEffect" className="ripple-effect"></span>
        <div className="mic-button-wrapper ">
          <div>
            
          <button
            id="micButton"
            className={`mic-button ${isListening ? 'listening' : ''}`}
            onClick={isListening ? stopListening : startListening}
          >
            <i className="fas fa-microphone"></i>
          </button>
          </div>
          <div>
            
          <button id="cancelButton" className="cancel-button" onClick={stopListening}>
            <i className="fas fa-times"></i>
          </button>
          </div>
        </div>
      </div>
      <p style={{ fontSize: '12px', marginTop: '-68px', textAlign: 'center', zIndex: '1' }}>VAD Status: {vadStatus}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
