import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false; // Ensure recognition stops after each speech segment
recognition.interimResults = false; // Receive only final results

const SpeechRecognitionComponent = () => {
  const [isListening, setIsListening] = useState(false);
  const [sessionId, setSessionId] = useState("12344");
  const [conversationTranscript, setConversationTranscript] = useState([]);
  const isApiCallInProgress = useRef(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const chatboxRef = useRef(null);

  useEffect(() => {
    // Setup recognition event listeners
    recognition.onstart = () => {
      console.log("Recognition started");
      setIsListening(true);
      // setVadStatus("listening");
      startVisualizer();
    };

    recognition.onend = () => {
      console.log("Recognition ended");
      setIsListening(false);
      // setVadStatus("inactive");
      stopVisualizer();
      if (isListening) {
        recognition.start(); // Restart recognition if still supposed to be listening
      }
    };

//     recognition.onend = () => {
//   console.log("Recognition ended");
//   stopVisualizer();
//   if (isListening) {
//     setTimeout(() => {
//       setIsListening(false);
//     }, 2000); // Delay setIsListening(false) by 2000 milliseconds (2 seconds)
//     recognition.start(); // Restart recognition if still supposed to be listening
//   }
// };

    recognition.onspeechstart = () => {
      console.log("Speech started");
      // setVadStatus("speaking");
    };

    recognition.onspeechend = () => {
      console.log("Speech ended");
      // setVadStatus("processing");
      stopListening();
    };

    recognition.onresult = (event) => {
      console.log("Recognition result received");
      const speechResult = event.results[event.results.length - 1][0].transcript;
      console.log("Speech Result:", speechResult);
      setConversationTranscript((prevTranscript) => [
        ...prevTranscript,
        { type: "user", text: speechResult },
      ]);
      if (!isApiCallInProgress.current) {
        sendTranscriptToAPI(speechResult);
      }
    };

    recognition.onerror = (event) => {
      console.error("Recognition error:", event.error);
      // setVadStatus("error");
      setIsListening(false); // Ensure listening stops on error
    };

    // Clean up event listeners
    return () => {
      recognition.onstart = null;
      recognition.onend = null;
      recognition.onspeechstart = null;
      recognition.onspeechend = null;
      recognition.onresult = null;
      recognition.onerror = null;
      stopVisualizer();
    };
  }, [isListening]);

  const startListening = () => {
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  const sendTranscriptToAPI = async (text) => {
    isApiCallInProgress.current = true;
    try {
      const response = await axios.post(
        `https://voicing.ngrok.app/synthesize/${sessionId}?text=${encodeURIComponent(text)}`,
        {},
        {
          headers: {
            accept: "application/json",
          },
          responseType: "blob",
        }
      );
      const sessionIdFromHeader = response.headers["x-session-id"];
      const responseText = response.headers["response-text"];
      if (sessionIdFromHeader) {
        setSessionId(sessionIdFromHeader);
      }
      setConversationTranscript((prevTranscript) => [
        ...prevTranscript,
        { type: "ai", text: responseText },
      ]);

      // Play audio response from API
      const audioBlob = new Blob([response.data], { type: "audio/wav" });
      const audioUrl = window.URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onended = () => {
        console.log("Audio finished playing, restarting listening");
        startListening();
      };
      audio.play();
    } catch (error) {
      console.error("Error sending transcript to API:", error);
      // setVadStatus("error");
    } finally {
      isApiCallInProgress.current = false;
    }
  };

  useEffect(() => {
    // Pause and reset audio playback if listening state changes
    if (audioRef.current && isListening) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      console.log("Audio stopped due to listening state change");
    }
  }, [isListening]);

  useEffect(() => {
    // Scroll chatbox to bottom on transcript update
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [conversationTranscript]);

  const startVisualizer = () => {
    // Setup audio visualizer using Web Audio API
    if (!canvasRef.current) return;
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 2048;
    const bufferLength = analyserRef.current.frequencyBinCount;
    dataArrayRef.current = new Uint8Array(bufferLength);
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const source = audioContextRef.current.createMediaStreamSource(stream);
        source.connect(analyserRef.current);
        drawVisualizer();
      })
      .catch((err) => console.error("Error accessing microphone for visualizer:", err));
  };

  const stopVisualizer = () => {
    // Clean up audio context when visualizer stops
    
    if (audioContextRef.current&&isListening) {
      audioContextRef?.current.close();
    }
  };

  const drawVisualizer = () => {
    // Render visualizer using canvas
    if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current) return;
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const draw = () => {
      requestAnimationFrame(draw);
      analyserRef.current.getByteTimeDomainData(dataArrayRef.current);
      canvasCtx.fillStyle = "rgb(255, 255, 255)";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(255, 0, 0)";
      canvasCtx.beginPath();
      const sliceWidth = (WIDTH * 1.0) / dataArrayRef.current.length;
      let x = 0;
      for (let i = 0; i < dataArrayRef.current.length; i++) {
        const v = dataArrayRef.current[i] / 128.0;
        const y = (v * HEIGHT) / 2;
        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }
        x += sliceWidth;
      }
      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();
    };
    draw();
  };

  if (!SpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div className="chat-container container-fluid">
      <div className="chat-box" id="chatBox">
        <div className="chatbox2" ref={chatboxRef}>
          {/* {conversationTranscript.map((entry, index) => (
            <div
              key={index}
              className={`message ${entry.type === "user" ? "user" : "bot"}`}
            >
              {entry.text}
            </div>
          ))} */}
          <span id="rippleEffect" className="ripple-effect"></span>
        </div>
        <div className="mic-button-wrapper">
          <div className="mic_position">

          <button
            id="micButton"
            className={`mic-button ${isListening ? "listening" : ""}`}
            onClick={isListening ? stopListening : startListening}
          >
            {isListening ? (
              <i className="fas fa-microphone"></i>
            ) : (
              <i className="fas fa-microphone-slash"></i>
            )}
          </button>
            <small>Click to Interrupt</small>
          </div>
          {/* <span className="intrupt">Click to Interrupt</span> */}
          <canvas
            ref={canvasRef}
            className="visualizer-canvas"
            width="100"
            height="50"
          ></canvas>
          <button
            id="cancelButton"
            className="cancel-button"
            onClick={() => {
              stopListening();
              navigate("/");
              window.location.reload()
            }}
            
          >
            End Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeechRecognitionComponent;
