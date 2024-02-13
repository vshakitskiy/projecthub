
import { readFileSync } from "fs"
import path from "path"

const GET = async (_req: Request) => {
    const buffer = readFileSync(path.resolve(".", "download/projecthub.pptx"))

    return new Response(buffer, {
        headers: {
            "Content-Disposition": "attachment; filename=\"projecthub.pptx\"",
            "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
        }
    })
}

export {GET}