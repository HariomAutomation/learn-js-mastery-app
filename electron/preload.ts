import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld("electronAPI", {
  getModules: () => ipcRenderer.invoke("get-modules"),
})
