import { readFileSync } from "fs"
import path from "path"

export const readText = (folderName: string, fileName: string) => {
    return readFileSync(path.join(folderName, fileName), "utf-8").split("\r\n");
}