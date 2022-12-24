import { EditPatch } from "../types"

export type RpcServerFunctions = {
  save(patches: EditPatch | EditPatch[]): Promise<void>
  initializeComponentsWatcher(): Promise<void>
}

export type RpcClientFunctions = {}

export type ServerOptions = {
  componentsDir?: string
}
