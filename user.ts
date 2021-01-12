// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
  id: number | string
  name: string
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: "Willian"
}

type CharInfo = {
  nickname: string
  level: number
}

const char: CharInfo = {
  nickname: "willjusten",
  level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  name: "willian",
  nickname: "willjusten",
  id: "123",
  level: 100
}