import { ChangeEvent, SetStateAction, useState } from "react"
import { IpcRenderer } from "electron"
import { transcribesir } from "../main/transcribe"
export default function Transcribe(){

  const ipcRenderer = window.electron.ipcRenderer

  const [filePath, setFilePath] = useState()
  function handleChange(event) {
    console.log(event)
    if (event.target.files[0]){
      setFilePath(event.target.files[0].path)
      console.log(event.target.files[0].path)
    } 
  }
  function handleTranscribe(event){
    ipcRenderer.sendMessage('transcribe',filePath);
    ipcRenderer.on('transcribe-reply',(event, arg) =>{
      console.log("yes")
      console.log(event,arg)
    })
    //ipcRenderer.send('anything-asynchronous', 'ping')

  }
    return (
<div className="flex h-[100vh] w-full flex-col">
  <div
    className="flex-1 overflow-y-auto bg-slate-300 text-sm leading-6 text-slate-900 shadow-md dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
  >
    <div className="flex flex-row px-4 py-8 sm:px-6">
      <img
        className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
        src="https://dummyimage.com/256x256/363536/ffffff&text=U"
      />

      <div className="flex max-w-3xl items-center">
        <p>Test</p>
      </div>
    </div>

    {/*<div className="flex bg-slate-100 px-4 py-8 dark:bg-slate-900 sm:px-6">
      <img
        className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
        src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
      />

      <div
        className="flex w-full flex-col items-start lg:flex-row lg:justify-between"
      >
        <p className="max-w-3xl">Example </p>
        <div
          className="mt-4 flex flex-row justify-start gap-x-2 text-slate-500 lg:mt-0"
        >
          <button className="hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"
              ></path>
            </svg>
          </button>
          <button className="hover:text-blue-600" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"
              ></path>
            </svg>
          </button>
          <button className="hover:text-blue-600" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
              ></path>
              <path
                d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="flex px-4 py-8 sm:px-6">
      <img
        className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
        src="https://dummyimage.com/256x256/363536/ffffff&text=U"
      />

      <div className="flex max-w-3xl items-center">
        <p>Example</p>
      </div>
    </div>
    <div className="flex bg-slate-100 px-4 py-8 dark:bg-slate-900 sm:px-6">
      <img
        className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
        src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
      />

      <div
        className="flex w-full flex-col items-start lg:flex-row lg:justify-between"
      >
        <p className="max-w-3xl">
          Example
        </p>
        <div className="mt-4 flex flex-row gap-x-2 text-slate-500 lg:mt-0">
          <button className="hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"
              ></path>
            </svg>
          </button>
          <button className="hover:text-blue-600" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"
              ></path>
            </svg>
          </button>
          <button className="hover:text-blue-600" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
              ></path>
              <path
                d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>*/}
  </div>

  

  <div className="p-5 bg-slate-200 dark:border-slate-700 dark:bg-slate-900">
      <label className="text-base text-gray-500 font-semibold mb-2 block">Upload Audio</label>
      <input onChange={(e)=>handleChange(e)} type="file"
        className="w-9/12 text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
      <button onClick={(e)=>handleTranscribe(e)} className="ml-3 text-gray-600 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white font-bold py-3 px-4 rounded w-2/12 text-base">Transcribe</button>
      <p className="text-xs text-gray-400 mt-2">MP3, M4A, WAV are Allowed</p>

      

    </div>
  {/*<form
    className="flex w-full items-center rounded-b-md border-t border-slate-300 bg-slate-200 p-2 dark:border-slate-700 dark:bg-slate-900"
  >
    <label htmlFor="chat" className="sr-only">Enter your prompt</label>
    <div>
      <button
        className="hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          aria-hidden="true"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 5l0 14"></path>
          <path d="M5 12l14 0"></path>
        </svg>
        <span className="sr-only">Add</span>
      </button>
    </div>
    <textarea
      id="chat-input"
      rows="1"
      className="mx-2 flex min-h-full w-full rounded-md border border-slate-300 bg-slate-50 p-2 text-base text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:placeholder-slate-400 dark:focus:border-blue-600 dark:focus:ring-blue-600"
      placeholder="Enter your prompt"
    ></textarea>
    <div>
      <button
        className="inline-flex hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          aria-hidden="true"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 14l11 -11"></path>
          <path
            d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
          ></path>
        </svg>
        <span className="sr-only">Send message</span>
      </button>
    </div>
  </form>*/}
</div>
    )
}